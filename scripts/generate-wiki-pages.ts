// Stage 1 — Article structuring.
//
// Transforms each raw generated article (content/raw/*.json) into a clean, render-ready
// WikiPage (content/wiki/*.json). Primary path uses the OpenAI Responses API with a strict
// JSON schema; if a call fails (or --deterministic is passed, or OPENAI_API_KEY is absent)
// it falls back to the deterministic code transform so the corpus is always complete.
//
// Usage:
//   npm run generate:wiki-pages                 # OpenAI for all (cached, resumable)
//   npm run generate:wiki-pages -- --force      # ignore cache, regenerate
//   npm run generate:wiki-pages -- --only kardion,decision-boundary
//   npm run generate:wiki-pages -- --limit 5    # first N (handy for a paid smoke test)
//   npm run generate:wiki-pages -- --deterministic   # offline, no API calls

import 'dotenv/config';
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import type { RawArticle, WikiPage } from '../lib/types';
import { loadRawArticles, writeWikiPage, ROOT, WIKI_DIR } from '../lib/loadContent';
import { transformArticle, rawSlug, humaniseSection, splitBodySections } from '../lib/transformArticle';
import { cleanArticleMarkdown } from '../lib/cleanArticleMarkdown';
import { callOpenAIStructured, wikiPageSchema, OPENAI_MODEL } from '../lib/openaiClient';

const PROMPT_VERSION = 'wiki-v1';

const args = process.argv.slice(2);
const FORCE = args.includes('--force');
const DETERMINISTIC = args.includes('--deterministic') || !process.env.OPENAI_API_KEY;
const LIMIT = readNum('--limit');
const ONLY = readList('--only');
const CONCURRENCY = readNum('--concurrency') ?? 4;

function readNum(flag: string): number | undefined {
  const i = args.indexOf(flag);
  return i !== -1 && args[i + 1] ? Number(args[i + 1]) : undefined;
}
function readList(flag: string): Set<string> | undefined {
  const i = args.indexOf(flag);
  return i !== -1 && args[i + 1] ? new Set(args[i + 1].split(',').map((s) => s.trim())) : undefined;
}

// ---- Guidance loaded once and passed to the model ------------------------------------
const GUIDANCE_FILES = [
  'sources/guidance-meta-layer/guide--writing-for-llms.md',
  'sources/guidance-meta-layer/case-study-tagging-convention.md', // may not exist; tolerated
  'sources/articles/Case studies/case-study-tagging-convention.md',
  'sources/guidance-meta-layer/process-amendment--classification-gate.md',
];

function loadGuidance(): string {
  const parts: string[] = [];
  for (const rel of GUIDANCE_FILES) {
    const p = path.join(ROOT, rel);
    if (fs.existsSync(p)) parts.push(`### ${path.basename(rel)}\n\n${fs.readFileSync(p, 'utf8')}`);
  }
  // Keep guidance bounded so the prompt stays affordable.
  return parts.join('\n\n---\n\n').slice(0, 24000);
}

const SYSTEM_INSTRUCTION = `You are a documentation engineer turning raw generated article JSON into a clean, render-ready wiki page.

You MUST:
- Preserve useful public article content and the page's factual claims.
- Preserve cautious, calibrated evidence language and all stated limitations.
- Remove repeated metadata blocks, "Classification" sections, and "Related pages" sections from the body — keep relationship data ONLY as structured fields (relatedPageSlugs, internalLinks), never as visible body prose.
- Split the body into coherent sections with standalone, meaningful H2-style headings.
- Keep relatedPageSlugs and internalLinks ONLY to slugs in the provided available-slugs list.

You MUST NOT:
- Invent claims, add facts not in the source, or strengthen evidence.
- Add marketing or sales language, calls to action, or persuasion.
- Output any technical metadata (sourcePath, sourceFile, sanityDocumentIdCandidate, publicationBlockers, questionsForReview, qualityChecks) as visible content.
- Hardcode any single example or change the slug.

Follow the supplied Creative Navy writing guidance for voice, entity consistency, and evidence calibration. British spelling. Return only the structured JSON.`;

function buildUserPrompt(raw: RawArticle, availableSlugs: string[], guidance: string): string {
  const slug = rawSlug(raw);
  // Pre-clean the body so the model receives content already stripped of metadata blocks.
  const cleanedBody = cleanArticleMarkdown(raw.bodyMarkdown);

  const linkingContext = {
    parentSlug: raw.parentSlug || null,
    childPageSlugs: raw.childPageSlugs || [],
    relatedPageSlugs: raw.relatedPageSlugs || [],
    internalLinks: raw.internalLinks || [],
    suggestedSection: humaniseSection(raw.parentSlug) || null,
  };

  // The article payload the model may use (technical metadata deliberately excluded).
  const articlePayload = {
    slug,
    title: raw.title,
    pageType: raw.pageType,
    category: raw.category,
    summary: raw.summary,
    definition: raw.definition || '',
    keyFacts: raw.keyFacts || [],
    tags: raw.tags || [],
    claims: raw.claims || [],
    limitations: raw.limitations || [],
    cleanedBodyMarkdown: cleanedBody,
  };

  return [
    '[WRITING_GUIDANCE]',
    guidance,
    '',
    '[RAW_ARTICLE]  (technical metadata already removed; use only as content)',
    JSON.stringify(articlePayload, null, 2),
    '',
    '[LINKING_CONTEXT]  (existing relationship metadata — keep as structured fields only)',
    JSON.stringify(linkingContext, null, 2),
    '',
    '[AVAILABLE_SLUGS]  (relatedPageSlugs/internalLinks targets MUST be from this list)',
    JSON.stringify(availableSlugs),
    '',
    `Produce the WikiPage JSON for slug "${slug}". evidenceSummary.strongClaims and weakerClaims should be drawn from the claims, split by how well-supported each claim is (third-party / measured / regulatory = strong; client-reported / inferred / anecdotal = weaker). Put all stated limitations in evidenceSummary.limitations. Do not duplicate evidence prose inside bodySections.`,
  ].join('\n');
}

// ---- Normalisation: make any model output safe, complete, and consistent --------------
function clean<T>(v: T[] | null | undefined): T[] {
  return Array.isArray(v) ? v.filter((x) => x !== null && x !== undefined && x !== ('' as unknown)) : [];
}

function normalise(raw: RawArticle, model: any, slugSet: Set<string>): WikiPage {
  const slug = rawSlug(raw);
  const deterministic = transformArticle(raw);

  let bodySections = clean(model?.bodySections)
    .filter((s: any) => s && (s.heading || s.bodyMarkdown))
    .map((s: any) => ({ heading: String(s.heading || '').trim(), bodyMarkdown: String(s.bodyMarkdown || '').trim() }));
  if (bodySections.length === 0) bodySections = deterministic.bodySections;

  const ev = model?.evidenceSummary || {};
  const evidenceSummary = {
    strongClaims: clean<string>(ev.strongClaims),
    weakerClaims: clean<string>(ev.weakerClaims),
    limitations: clean<string>(ev.limitations),
  };
  const hasEvidence = evidenceSummary.strongClaims.length || evidenceSummary.weakerClaims.length || evidenceSummary.limitations.length;

  const relatedPageSlugs = clean<string>(model?.relatedPageSlugs).filter((s) => slugSet.has(s) && s !== slug);
  const internalLinks = clean<any>(model?.internalLinks)
    .filter((l) => l && l.targetSlug && l.anchorText && slugSet.has(l.targetSlug) && l.targetSlug !== slug)
    .map((l) => ({ anchorText: String(l.anchorText), targetSlug: String(l.targetSlug), reason: l.reason ? String(l.reason) : undefined }));

  return {
    slug, // never trust the model with the slug
    title: (model?.title && String(model.title).trim()) || raw.title,
    pageType: (model?.pageType && String(model.pageType).trim()) || raw.pageType,
    category: (model?.category && String(model.category).trim()) || raw.category,
    section: (model?.section && String(model.section).trim()) || deterministic.section,
    summary: (model?.summary && String(model.summary).trim()) || raw.summary,
    keyFacts: clean<string>(model?.keyFacts).length ? clean<string>(model?.keyFacts) : deterministic.keyFacts,
    bodySections,
    evidenceSummary: hasEvidence ? evidenceSummary : deterministic.evidenceSummary,
    relatedPageSlugs: relatedPageSlugs.length ? relatedPageSlugs : deterministic.relatedPageSlugs,
    internalLinks: internalLinks.length ? internalLinks : deterministic.internalLinks,
    tags: clean<string>(model?.tags).length ? clean<string>(model?.tags) : deterministic.tags,
    _meta: {
      sourcePath: raw.sourcePath,
      parentSlug: raw.parentSlug,
      childPageSlugs: raw.childPageSlugs || [],
      generatedBy: 'openai',
    },
  };
}

// ---- Caching --------------------------------------------------------------------------
function rawHash(raw: RawArticle): string {
  return crypto.createHash('sha1').update(PROMPT_VERSION + JSON.stringify(raw)).digest('hex').slice(0, 12);
}
const CACHE_PATH = path.join(WIKI_DIR, '.cache.json');
function loadCache(): Record<string, string> {
  try { return JSON.parse(fs.readFileSync(CACHE_PATH, 'utf8')); } catch { return {}; }
}
function saveCache(c: Record<string, string>): void {
  fs.mkdirSync(WIKI_DIR, { recursive: true });
  fs.writeFileSync(CACHE_PATH, JSON.stringify(c, null, 2));
}

// ---- Main -----------------------------------------------------------------------------
async function main() {
  let raws = loadRawArticles();
  if (ONLY) raws = raws.filter((r) => ONLY.has(rawSlug(r)));
  if (LIMIT) raws = raws.slice(0, LIMIT);

  const slugSet = new Set(loadRawArticles().map(rawSlug));
  const availableSlugs = [...slugSet].sort();
  const guidance = loadGuidance();
  const cache = loadCache();

  console.log(
    `Stage 1: generating ${raws.length} wiki page(s) — mode=${DETERMINISTIC ? 'deterministic' : `openai (${OPENAI_MODEL})`}`,
  );

  let openaiOk = 0, fellBack = 0, cached = 0, det = 0;

  // Simple promise pool.
  let idx = 0;
  async function worker() {
    while (idx < raws.length) {
      const raw = raws[idx++];
      const slug = rawSlug(raw);
      const outPath = path.join(WIKI_DIR, `${slug}.json`);
      const hash = rawHash(raw);

      if (!FORCE && !DETERMINISTIC && cache[slug] === hash && fs.existsSync(outPath)) {
        cached++;
        continue;
      }

      if (DETERMINISTIC) {
        writeWikiPage(transformArticle(raw));
        det++;
        process.stdout.write('.');
        continue;
      }

      try {
        const user = buildUserPrompt(raw, availableSlugs, guidance);
        const model = await callOpenAIStructured<any>({ system: SYSTEM_INSTRUCTION, user, schema: wikiPageSchema() });
        writeWikiPage(normalise(raw, model, slugSet));
        cache[slug] = hash;
        openaiOk++;
        process.stdout.write('o');
      } catch (e) {
        // Resilient: never block the build on one bad call.
        writeWikiPage(transformArticle(raw));
        fellBack++;
        process.stdout.write('x');
        if (process.env.DEBUG) console.error(`\n  ${slug}: ${(e as Error).message}`);
      }
    }
  }

  await Promise.all(Array.from({ length: Math.max(1, CONCURRENCY) }, worker));
  saveCache(cache);

  console.log(
    `\nDone. openai=${openaiOk} fellBack=${fellBack} cached=${cached} deterministic=${det} -> ${WIKI_DIR}`,
  );
  if (fellBack > 0 && !DETERMINISTIC) {
    console.log('Some pages fell back to the deterministic transform (run with DEBUG=1 to see why).');
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

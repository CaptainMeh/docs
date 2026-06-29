#!/usr/bin/env node
/**
 * generate_test_pages.js
 *
 * Generates exactly 3 TEST documentation pages via the OpenAI API (ChatGPT),
 * to validate the generation pipeline before a full run.
 *
 * It selects one of each:
 *   - a case study           (article_type: case-study | case-study-notes)
 *   - a glossary/concept page (article_type: glossary-term | concept)
 *   - a capability/practice/failure/outcome page
 *
 * For each page it sends the model four blocks:
 *   CURRENT_SOURCE_MD     - the ONE source markdown file (the only factual source)
 *   CURRENT_REGISTRY_ITEM - identity metadata only (title/slug/category/pageType/source)
 *   LINKING_CONTEXT       - compressed linking object (parent/children/related/
 *                           same-category/allowedSlugs/breadcrumb)
 *   OPTIONAL_GUIDES       - style/terminology/evidence/canonical wording only
 *
 * Output: generated/articles/<source-subdir>/<slug>.json (mirrors sources/articles/)
 * Errors: logs/generation_errors.json
 * Skips a page if its output JSON already exists.
 *
 * OpenAI: Responses API + Structured Outputs (JSON Schema), model gpt-5.5.
 * The whole API call is isolated in callOpenAI() for clean future swaps.
 *
 * Dry run (inspect payloads, no API calls, no tokens, no article JSON written):
 *   node scripts/generate_test_pages.js --dry-run
 * Writes per-page payload previews + summary.json to generated/dry_run/.
 *
 * Targeted regeneration of one page by slug (skips auto-selection):
 *   node scripts/generate_test_pages.js --slug <slug> [--overwrite]
 *   node scripts/generate_test_pages.js --slug <slug> --dry-run
 * Without --overwrite, an existing output JSON is skipped.
 *
 * Validate generated case-study pages (no OpenAI, exit 1 on errors):
 *   node scripts/generate_test_pages.js --validate-case-studies
 *
 * Write the fully-rendered prompt without calling OpenAI (debugging injection):
 *   node scripts/generate_test_pages.js --debug-prompt --slug <slug>
 * Output: generated/debug_prompts/<slug>.prompt.txt
 *
 * Requirements: Node 18+ (uses global fetch) and env var OPENAI_API_KEY
 * (key not required for --dry-run).
 *
 * It does NOT: use the Anthropic API, generate all pages, import to Sanity,
 * or edit any source markdown.
 */

'use strict';

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

// ---------------------------------------------------------------------------
// Paths
// ---------------------------------------------------------------------------
const ROOT = path.resolve(__dirname, '..');

const REGISTRY_PATH    = path.join(ROOT, 'sources', 'content-registry', 'content-registry.json');
const ARTICLES_DIR     = path.join(ROOT, 'sources', 'articles');
const GUIDANCE_DIR     = path.join(ROOT, 'sources', 'guidance-meta-layer');
const SITE_STRUCT_DIR  = path.join(ROOT, 'sources', 'site-structure');
const PROMPT_PATH      = path.join(ROOT, 'prompts', 'generate_documentation_page.txt');
const LINT_SCRIPT      = path.join(ROOT, 'sources', 'guidance-meta-layer', 'lint_case_studies.py');

// New mirrored output root: generated/articles/<source-subdir>/<slug>.json.
const OUTPUT_ROOT      = path.join(ROOT, 'generated', 'articles');
// Legacy flat dir — kept ONLY for migration + transition read-fallback.
const LEGACY_OUTPUT_DIR = path.join(ROOT, 'generated', 'articles_json');
const DRY_RUN_DIR      = path.join(ROOT, 'generated', 'dry_run');
const DEBUG_PROMPT_DIR = path.join(ROOT, 'generated', 'debug_prompts');
const ERROR_LOG_PATH   = path.join(ROOT, 'logs', 'generation_errors.json');

// ---------------------------------------------------------------------------
// CLI flags
//   --dry-run            inspect payloads, no OpenAI calls, no tokens
//   --slug <slug>        generate only this one registry item (no auto-select)
//   --overwrite          regenerate even if the output JSON already exists
// ---------------------------------------------------------------------------
const ARGV = process.argv.slice(2);

function getFlagValue(name) {
  const i = ARGV.indexOf(name);
  if (i >= 0 && i + 1 < ARGV.length && !ARGV[i + 1].startsWith('--')) return ARGV[i + 1];
  const eq = ARGV.find((a) => a.startsWith(name + '='));
  return eq ? eq.slice(name.length + 1) : null;
}

const DRY_RUN   = ARGV.some((a) => a === '--dry-run' || a === '--dryrun');
const OVERWRITE = ARGV.some((a) => a === '--overwrite');
const TARGET_SLUG = getFlagValue('--slug');
const VALIDATE_CASE_STUDIES = ARGV.some((a) => a === '--validate-case-studies');
const REPAIR_CASE_STUDIES = ARGV.some((a) => a === '--repair-case-studies');
const MIGRATE_STRUCTURE = ARGV.some((a) => a === '--migrate-generated-structure');
const DEBUG_PROMPT = ARGV.some((a) => a === '--debug-prompt');

const MIN_SOURCE_CHARS = 500;

// Preview caps for dry-run output (chars).
const SOURCE_PREVIEW_CAP = 3000;
const GUIDES_PREVIEW_CAP = 3000;
const PROMPT_PREVIEW_CAP = 6000;

// ---------------------------------------------------------------------------
// OpenAI config
// ---------------------------------------------------------------------------
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const OPENAI_MODEL   = 'gpt-5.5';
// Responses API (with Structured Outputs / JSON Schema). The whole OpenAI call
// is isolated in callOpenAI() so the transport can be swapped cleanly.
const OPENAI_URL     = 'https://api.openai.com/v1/responses';
const OPENAI_TIMEOUT_MS = 120000;

// ---------------------------------------------------------------------------
// Page-type buckets for the 3 test pages
// ---------------------------------------------------------------------------
const BUCKETS = {
  caseStudy:        ['case-study', 'case-study-notes'],
  glossaryConcept:  ['glossary-term', 'concept'],
  capPracFailOut:   ['capability', 'practice', 'failure', 'outcome', 'outcomes-overview'],
};

const CASE_STUDY_TYPES = ['case-study', 'case-study-notes'];

// Known case / client names to detect in source markdown. Detection is matched
// back to real registry case-study items — these names never become links on
// their own. Extend this list as more named cases are documented.
const KNOWN_CASE_NAMES = [
  'Callsign',
  'Puraite',
  'Kardion',
  'COX Marine',
  'Stromer',
  'Beissbarth',
  'Triopsis',
  'Squaremind',
  'Owkin',
  'K',
];

// ===========================================================================
// Small utilities
// ===========================================================================

function readJson(p) {
  return JSON.parse(fs.readFileSync(p, 'utf8'));
}

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

function relToRoot(absPath) {
  return path.relative(ROOT, absPath).split(path.sep).join('/');
}

/**
 * THE single source of truth for a generated article's output path. Mirrors the
 * source folder structure below sources/articles/, drops the source filename
 * prefix, and uses the registry slug as the filename. Accepts a registry item
 * ({ source_file, slug }) or a generated doc ({ sourceFile, sourcePath, slug }).
 *
 *   sources/articles/Case studies/case-study-notes--kardion.md
 *     -> generated/articles/Case studies/kardion.json
 */
function getGeneratedOutputPath(item) {
  const sourcePath = (item && (item.source_file || item.sourceFile || item.sourcePath)) || '';
  const slug = (item && item.slug && item.slug.current) ? item.slug.current : (item && item.slug);
  // Normalize separators and strip the articles root prefix (registry uses a
  // capitalized "Articles/"; generated docs use "sources/articles/").
  const rel = String(sourcePath).split(/[\\/]/).join('/')
    .replace(/^sources\/articles\//i, '')
    .replace(/^Articles\//i, '');
  const relativeDir = path.dirname(rel);
  const dir = relativeDir === '.' || relativeDir === '' ? '' : relativeDir;
  return path.join(OUTPUT_ROOT, dir, `${slug}.json`);
}

/** New mirrored path for a slug+sourcePath if it exists, else the legacy flat
 *  path if that exists (transition read-fallback), else null. */
function findExistingGeneratedPath(item) {
  const neu = getGeneratedOutputPath(item);
  if (fs.existsSync(neu)) return neu;
  const slug = (item && item.slug && item.slug.current) ? item.slug.current : (item && item.slug);
  const legacy = path.join(LEGACY_OUTPUT_DIR, `${slug}.json`);
  if (fs.existsSync(legacy)) return legacy;
  return null;
}

/** Recursively list all generated article JSON files: the mirrored tree first,
 *  then any not-yet-migrated files still in the legacy flat dir. */
function listGeneratedJsonFiles() {
  const out = [];
  const seenSlugs = new Set();
  const walk = (dir) => {
    if (!fs.existsSync(dir)) return;
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, e.name);
      if (e.isDirectory()) walk(full);
      else if (e.isFile() && e.name.toLowerCase().endsWith('.json')) {
        out.push(full);
        seenSlugs.add(e.name.replace(/\.json$/i, ''));
      }
    }
  };
  walk(OUTPUT_ROOT);
  if (fs.existsSync(LEGACY_OUTPUT_DIR)) {
    for (const f of fs.readdirSync(LEGACY_OUTPUT_DIR)) {
      if (!f.toLowerCase().endsWith('.json')) continue;
      if (seenSlugs.has(f.replace(/\.json$/i, ''))) continue; // already in mirrored tree
      out.push(path.join(LEGACY_OUTPUT_DIR, f));
    }
  }
  return out;
}

/**
 * Deterministic Sanity document id derived from the slug.
 * Used both to set the field AND for any later import logic — keep it the only
 * place this is computed. Sanity ids allow [a-zA-Z0-9._-].
 */
function sanityIdFromSlug(slug) {
  const safe = String(slug).trim().replace(/[^a-zA-Z0-9._-]/g, '-');
  return `documentationPage.${safe}`;
}

/** Recursively collect all .md files under a directory. */
function walkMd(dir) {
  const out = [];
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walkMd(full));
    else if (entry.isFile() && entry.name.toLowerCase().endsWith('.md')) out.push(full);
  }
  return out;
}

/**
 * Resolve a registry source_file (e.g. "Articles/Case studies/x.md") to a real
 * path under sources/articles/. The registry uses "Articles/" with original
 * casing; the folder is lowercase "articles". Match case-insensitively, with a
 * basename fallback so we never rely on the filesystem being case-insensitive.
 */
function makeSourceResolver(allMdAbs) {
  const relIndex = new Map();   // relative-path lower -> abs
  const baseIndex = new Map();  // basename lower -> [abs]
  for (const abs of allMdAbs) {
    const rel = path.relative(ARTICLES_DIR, abs).split(path.sep).join('/').toLowerCase();
    relIndex.set(rel, abs);
    const base = path.basename(abs).toLowerCase();
    if (!baseIndex.has(base)) baseIndex.set(base, []);
    baseIndex.get(base).push(abs);
  }
  return function resolve(sourceFile) {
    const rel = String(sourceFile)
      .replace(/^Articles[\\/]/i, '')
      .split(/[\\/]/).join('/')
      .toLowerCase();
    if (relIndex.has(rel)) return relIndex.get(rel);
    const base = path.basename(rel);
    const matches = baseIndex.get(base);
    if (matches && matches.length >= 1) return matches[0];
    return null;
  };
}

/**
 * Resolve the source markdown for a GENERATED document, using the SAME primitive
 * (ctx.resolveSource) that generation uses — never a weaker validator-only path.
 * Resolution order:
 *   a. doc.sourcePath (joined to ROOT) if present and exists
 *   b. doc.sourceFile mapped under sources/ via the generation resolver
 *   c. the registry item for the doc slug, using the generation resolver
 *      (the authoritative source_file — fixes stale/wrong doc.sourceFile)
 *   d. case-insensitive lookup under sources/ (built into resolveSource)
 *   e. basename fallback under sources/articles/ (built into resolveSource)
 * Returns { abs, srcText, via, tried, slug, sourcePath, sourceFile, registrySourceFile }.
 */
function resolveDocSource(doc, ctx) {
  const tried = [];
  const slug = (doc && doc.slug && doc.slug.current) || null;
  const regItem = slug ? ctx.bySlug.get(slug) : null;
  const registrySourceFile = regItem ? regItem.source_file : null;

  const candidates = [];
  if (doc && doc.sourcePath) {
    candidates.push({ via: 'doc.sourcePath', abs: path.join(ROOT, doc.sourcePath) });
  }
  if (doc && doc.sourceFile) {
    candidates.push({ via: 'doc.sourceFile (resolveSource)', abs: ctx.resolveSource(doc.sourceFile) });
  }
  if (registrySourceFile) {
    candidates.push({ via: 'registry.source_file (resolveSource)', abs: ctx.resolveSource(registrySourceFile) });
  }

  for (const c of candidates) {
    tried.push(`${c.via}: ${c.abs ? relToRoot(c.abs) : '(unresolved)'}`);
    if (c.abs && fs.existsSync(c.abs)) {
      return { abs: c.abs, srcText: fs.readFileSync(c.abs, 'utf8'), via: c.via, tried };
    }
  }

  return {
    abs: null, srcText: '', via: null, tried, slug,
    sourcePath: doc && doc.sourcePath || null,
    sourceFile: doc && doc.sourceFile || null,
    registrySourceFile,
  };
}

// ===========================================================================
// Linking context (compressed) — built from registry; breadcrumb from site map
// ===========================================================================

/**
 * Parse the site-structure markdown tree into a slug -> sectionPath map.
 * The tree uses box-drawing branches and "/segment" nodes, nesting by
 * indentation. We only extract the path string ("/a/b/c"); the site structure
 * is NEVER used as factual page content.
 */
function buildSectionPathMap(siteStructureText) {
  const map = new Map();
  if (!siteStructureText) return map;
  const lines = siteStructureText.split(/\r?\n/);
  const stack = []; // stack[depth] = segment
  const lineRe = /^([\s│─├└┉║]*?)(?:├──|└──|━━|-)?\s*\/([a-z0-9][a-z0-9-]*)\b/i;
  for (const raw of lines) {
    const m = raw.match(lineRe);
    if (!m) continue;
    const prefix = m[1] || '';
    const segment = m[2];
    // Each indentation level is ~4 columns in this file's tree style.
    const depth = Math.max(0, Math.floor(prefix.length / 4));
    stack[depth] = segment;
    stack.length = depth + 1; // truncate deeper stale entries
    const sectionPath = '/' + stack.filter(Boolean).join('/');
    if (!map.has(segment)) map.set(segment, sectionPath);
  }
  return map;
}

function lite(item) {
  if (!item) return null;
  return { slug: item.slug, title: item.title, pageType: item.article_type };
}

/** Strip leading/trailing slashes and surrounding whitespace from a slug ref. */
function normRef(ref) {
  return String(ref || '').trim().replace(/^\/+/, '').replace(/\/+$/, '');
}

/** Final path segment of a slug ("/a/b/c" -> "c"; flat slug -> itself). */
function lastSegment(slug) {
  return normRef(slug).split('/').pop();
}

/** Human-readable title fallback for a slug ("cognitive-failures" -> "Cognitive Failures"). */
function titleizeSlug(slug) {
  return lastSegment(slug)
    .split('-')
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

/**
 * Display labels for STRUCTURAL SECTION nodes only (breadcrumb sections that
 * have no registry page). Full-key entries win; otherwise each word is mapped.
 * Does not affect real page titles, which always come from the registry.
 */
const SECTION_DISPLAY = {
  'ai': 'AI',
  'ai-products': 'AI Products',
  'ux': 'UX',
  'ui': 'UI',
  'llm': 'LLM',
  'api': 'API',
  'crm': 'CRM',
  'saas': 'SaaS',
  'fintech': 'Fintech',
};

function sectionLabel(slug) {
  const seg = lastSegment(slug);
  if (SECTION_DISPLAY[seg]) return SECTION_DISPLAY[seg]; // full-key match (e.g. ai-products)
  return seg
    .split('-')
    .filter(Boolean)
    .map((w) => SECTION_DISPLAY[w] || (w.charAt(0).toUpperCase() + w.slice(1)))
    .join(' ');
}

// ---------------------------------------------------------------------------
// Mentioned case-study detection
// ---------------------------------------------------------------------------

/** Lowercase, split on non-alphanumerics into whole-word tokens. */
function tokenize(s) {
  return String(s).toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim().split(' ').filter(Boolean);
}

/** True if needle tokens appear as a contiguous whole-word run inside hay tokens. */
function containsTokenSequence(hay, needle) {
  if (needle.length === 0 || needle.length > hay.length) return false;
  for (let i = 0; i + needle.length <= hay.length; i++) {
    let ok = true;
    for (let j = 0; j < needle.length; j++) {
      if (hay[i + j] !== needle[j]) { ok = false; break; }
    }
    if (ok) return true;
  }
  return false;
}

/**
 * Scan the current source markdown for known case/client names and match them
 * back to real registry case-study items. Matching is whole-word and
 * case-insensitive against the item's title, slug, or source_file — never a
 * broad substring — so e.g. "K" matches "owkin-k" but not "kardion", and a
 * leaf page like "behavioural-governance-for-ai-products" is never matched.
 *
 * Returns [{ name, slug, title, pageType }], excluding the current page itself.
 */
function buildMentionedCaseStudies(sourceMd, item, ctx) {
  if (!sourceMd) return [];
  const text = String(sourceMd);
  const srcTokens = tokenize(sourceMd);
  const caseItems = ctx.bySlug.__all.filter((r) => CASE_STUDY_TYPES.includes(r.article_type));

  const out = [];
  const seen = new Set([item.slug]);
  for (const name of KNOWN_CASE_NAMES) {
    const nameTokens = tokenize(name);
    // Very short names (e.g. "K") must NOT trigger on a standalone token; require
    // a strong contextual pattern so a lone "K" is never read as "Owkin K".
    const isShort = name.replace(/\s+/g, '').length < 3;
    const n = escapeRegex(name);
    const strongShort = isShort && (
      new RegExp(`\\bOwkin ${n}\\b`, 'i').test(text) ||
      new RegExp(`\\b${n} case study\\b`, 'i').test(text) ||
      new RegExp(`\\bthe ${n} case study\\b`, 'i').test(text)
    );
    const mentionedNormal = !isShort && containsTokenSequence(srcTokens, nameTokens);

    for (const r of caseItems) {
      if (seen.has(r.slug)) continue;
      const nameMatchesItem =
        containsTokenSequence(tokenize(r.title), nameTokens) ||
        containsTokenSequence(tokenize(r.slug), nameTokens) ||
        containsTokenSequence(tokenize(r.source_file), nameTokens);
      if (!nameMatchesItem) continue;

      // For short names, also accept an explicit slug-like reference (e.g. owkin-k).
      const mentioned = isShort
        ? (strongShort || new RegExp(`\\b${escapeRegex(r.slug)}\\b`, 'i').test(text))
        : mentionedNormal;
      if (mentioned) {
        seen.add(r.slug);
        out.push({ name, slug: r.slug, title: r.title, pageType: r.article_type });
      }
    }
  }
  return out;
}

/**
 * Robustly resolve a slug reference (parent_slug, related_slug, etc.) to a
 * registry item. Resolution order:
 *   1. Exact match against a registry slug.
 *   2. Exact match after normalizing leading/trailing slashes.
 *   3. Match against the final slug segment (handles path-style slugs, e.g.
 *      ref "ai-products" matching "/evidence/case-studies/ai-products").
 *   4. If multiple, prefer a match sharing currentItem's category.
 *   5. If still multiple, prefer the shortest matching slug.
 *   6. If still ambiguous, return null with ambiguous=true.
 *
 * Returns { item: registryItem|null, ambiguous: boolean, candidates: string[] }.
 * Note: step 3 compares whole segments, so it never collapses a leaf page like
 * "behavioural-governance-for-ai-products" into the section key "ai-products".
 */
function resolveSlugReference(ref, currentItem, ctx) {
  const norm = normRef(ref);
  if (!norm) return { item: null, ambiguous: false, candidates: [] };

  const { bySlug } = ctx;
  const all = bySlug.__all;

  // 1 & 2. exact / normalized exact
  if (bySlug.has(ref)) return { item: bySlug.get(ref), ambiguous: false, candidates: [ref] };
  if (bySlug.has(norm)) return { item: bySlug.get(norm), ambiguous: false, candidates: [norm] };

  // 3. final-segment match (both sides reduced to their last path segment)
  const refSeg = lastSegment(norm);
  let matches = all.filter((r) => lastSegment(r.slug) === refSeg);

  if (matches.length === 1) {
    return { item: matches[0], ambiguous: false, candidates: [matches[0].slug] };
  }
  if (matches.length === 0) {
    return { item: null, ambiguous: false, candidates: [] };
  }

  const candidates = matches.map((m) => m.slug);

  // 4. prefer same category as currentItem
  if (currentItem) {
    const sameCat = matches.filter((r) => r.category === currentItem.category);
    if (sameCat.length === 1) return { item: sameCat[0], ambiguous: false, candidates };
    if (sameCat.length > 1) matches = sameCat;
  }

  // 5. prefer shortest matching slug
  const minLen = Math.min(...matches.map((m) => m.slug.length));
  const shortest = matches.filter((m) => m.slug.length === minLen);
  if (shortest.length === 1) return { item: shortest[0], ambiguous: false, candidates };

  // 6. still ambiguous
  return { item: null, ambiguous: true, candidates };
}

/**
 * Build the compressed LINKING_CONTEXT object for a registry item, plus any
 * resolution warnings. Relationships are resolved from the registry via
 * resolveSlugReference; the breadcrumb is derived from the resolved parent
 * chain (with unresolved parents kept as structural-section nodes), and
 * sectionPath is enriched from the site structure where available.
 *
 * Returns { context, warnings }.
 */
function buildLinkingContext(item, ctx, sourceMd = '') {
  const { byCategory, sectionPathMap } = ctx;
  const warnings = []; // real problems that could damage generation
  const info = [];     // expected, non-blocking notes

  // ---- mentioned case studies (from the current source markdown) -----------
  const mentionedCaseStudyCandidates = buildMentionedCaseStudies(sourceMd, item, ctx);

  // ---- parent --------------------------------------------------------------
  let parentLite = null;       // only set when parent is a real registry page
  if (item.parent_slug) {
    const pr = resolveSlugReference(item.parent_slug, item, ctx);
    if (pr.item) {
      parentLite = lite(pr.item);
    } else if (pr.ambiguous) {
      warnings.push(`parent_slug "${item.parent_slug}" is ambiguous: ${pr.candidates.join(', ')}`);
    } else {
      info.push(`parent_slug "${item.parent_slug}" is a structural section key (no registry page).`);
    }
  }

  // ---- children (any item whose resolved parent is this page) ---------------
  const childItems = ctx.bySlug.__all.filter((r) => {
    if (!r.parent_slug || r.slug === item.slug) return false;
    const cr = resolveSlugReference(r.parent_slug, r, ctx);
    return cr.item && cr.item.slug === item.slug;
  });

  // ---- related -------------------------------------------------------------
  const related = [];
  for (const rs of (item.related_slugs || [])) {
    const rr = resolveSlugReference(rs, item, ctx);
    if (rr.item) related.push(rr.item);
    else if (rr.ambiguous) warnings.push(`related_slug "${rs}" is ambiguous: ${rr.candidates.join(', ')}`);
    else warnings.push(`related_slug "${rs}" not found in registry.`);
  }

  // ---- same category -------------------------------------------------------
  const sameCategory = (byCategory.get(item.category) || []).filter((r) => r.slug !== item.slug);

  // ---- breadcrumb from the resolved parent chain ---------------------------
  // Walk parent_slug upward, resolving each hop. A real page extends the chain;
  // an unresolved/ambiguous parent becomes a structural-section node and stops
  // the walk (sections are not registry items). This is the registry-derived
  // fallback used regardless of site_structure parsing.
  const chain = [];
  const seen = new Set([item.slug]);
  let cursor = item;
  while (cursor && cursor.parent_slug) {
    const pr = resolveSlugReference(cursor.parent_slug, cursor, ctx);
    if (pr.item) {
      if (seen.has(pr.item.slug)) break; // cycle guard
      seen.add(pr.item.slug);
      chain.unshift({ slug: pr.item.slug, title: pr.item.title });
      cursor = pr.item;
    } else {
      const sectionSlug = normRef(cursor.parent_slug);
      chain.unshift({ slug: sectionSlug, title: sectionLabel(sectionSlug), section: true });
      info.push(`Breadcrumb derived from structural parent "${sectionSlug}".`);
      break;
    }
  }
  const breadcrumb = [...chain, { slug: item.slug, title: item.title }];

  // ---- allowed slugs (real, linkable registry pages only) ------------------
  const allowedSet = new Set();
  if (parentLite) allowedSet.add(parentLite.slug);
  childItems.forEach((c) => allowedSet.add(c.slug));
  related.forEach((r) => allowedSet.add(r.slug));
  sameCategory.forEach((s) => allowedSet.add(s.slug));
  mentionedCaseStudyCandidates.forEach((m) => allowedSet.add(m.slug));
  allowedSet.delete(item.slug);

  if (mentionedCaseStudyCandidates.length) {
    info.push(`Mentioned case studies detected: ${mentionedCaseStudyCandidates.map((m) => m.slug).join(', ')}`);
  }

  const sectionPath = sectionPathMap.get(item.slug) || null;
  if (sectionPath === null) {
    info.push('No site_structure sectionPath found; using registry breadcrumb.');
  }
  if (allowedSet.size === 0) warnings.push('No allowed slugs (page can link nowhere).');

  return {
    context: {
      currentSlug: item.slug,
      category: item.category,
      sectionPath,
      breadcrumb,
      parent: parentLite,
      children: childItems.map(lite),
      related: related.map(lite),
      sameCategory: sameCategory.map((s) => ({ slug: s.slug, title: s.title })),
      mentionedCaseStudyCandidates,
      allowedSlugs: Array.from(allowedSet),
    },
    warnings,
    info,
  };
}

// ===========================================================================
// Error logging
// ===========================================================================

function logError(entry) {
  ensureDir(path.dirname(ERROR_LOG_PATH));
  let arr = [];
  if (fs.existsSync(ERROR_LOG_PATH)) {
    try { arr = readJson(ERROR_LOG_PATH); if (!Array.isArray(arr)) arr = []; }
    catch { arr = []; }
  }
  arr.push({ timestamp: new Date().toISOString(), ...entry });
  fs.writeFileSync(ERROR_LOG_PATH, JSON.stringify(arr, null, 2) + '\n', 'utf8');
}

// ===========================================================================
// OpenAI call (isolated transport — Responses API + Structured Outputs)
// ===========================================================================

const SYSTEM_INSTRUCTION =
  'You are a documentation generation engine. Follow the instructions exactly ' +
  'and return only a single valid JSON object that conforms to the provided schema.';

/**
 * JSON Schema for the documentationPage output. Used as a Structured Output
 * (strict) so the model is forced to return conforming JSON. Identity fields
 * are still overwritten by the script afterwards; they are kept in the schema
 * so the object shape is complete and deterministic.
 *
 * Note: OpenAI strict json_schema requires every property listed in "required"
 * and "additionalProperties": false on every object.
 */
function buildOutputSchema() {
  const strObj = (props) => ({
    type: 'object',
    additionalProperties: false,
    required: Object.keys(props),
    properties: props,
  });

  return {
    name: 'documentationPage',
    strict: true,
    schema: strObj({
      _type: { type: 'string' },
      sourceFile: { type: 'string' },
      sourcePath: { type: 'string' },
      sanityDocumentIdCandidate: { type: 'string' },
      title: { type: 'string' },
      slug: strObj({
        _type: { type: 'string' },
        current: { type: 'string' },
      }),
      pageType: { type: 'string' },
      category: { type: 'string' },
      parentSlug: { type: 'string' },
      childPageSlugs: { type: 'array', items: { type: 'string' } },
      excerpt: { type: 'string' },
      metaTitle: { type: 'string' },
      metaDescription: { type: 'string' },
      summary: { type: 'string' },
      definition: { type: 'string' },
      keyFacts: { type: 'array', items: { type: 'string' } },
      tags: { type: 'array', items: { type: 'string' } },
      bodyMarkdown: { type: 'string' },
      claims: {
        type: 'array',
        items: strObj({
          claim: { type: 'string' },
          evidenceType: { type: 'string' },
          sourceStrength: { type: 'string' },
          notes: { type: 'string' },
        }),
      },
      limitations: { type: 'array', items: { type: 'string' } },
      publicationBlockers: {
        type: 'array',
        items: strObj({
          type: { type: 'string' },
          message: { type: 'string' },
          severity: { type: 'string' },
        }),
      },
      questionsForReview: { type: 'array', items: { type: 'string' } },
      relatedPageSlugs: { type: 'array', items: { type: 'string' } },
      internalLinks: {
        type: 'array',
        items: strObj({
          anchorText: { type: 'string' },
          targetSlug: { type: 'string' },
          placementHint: { type: 'string' },
          reason: { type: 'string' },
        }),
      },
      qualityChecks: strObj({
        factsOnlyFromCurrentSource: { type: 'boolean' },
        documentationStyle: { type: 'boolean' },
        noMarketingLanguage: { type: 'boolean' },
        noInventedClaims: { type: 'boolean' },
        linksOnlyFromLinkingContext: { type: 'boolean' },
        internalNotesNotPublished: { type: 'boolean' },
        readyForSanityImport: { type: 'boolean' },
      }),
    }),
  };
}

/** Extract the text payload from a Responses API result. */
function extractResponsesText(data) {
  if (data && typeof data.output_text === 'string' && data.output_text.length) {
    return data.output_text;
  }
  // Fallback: walk output[].content[].text
  if (data && Array.isArray(data.output)) {
    const parts = [];
    for (const item of data.output) {
      if (item && Array.isArray(item.content)) {
        for (const c of item.content) {
          if (c && typeof c.text === 'string') parts.push(c.text);
        }
      }
    }
    if (parts.length) return parts.join('');
  }
  return null;
}

/** Build an Error carrying structured OpenAI fields (never includes auth/headers). */
function makeOpenAIError(message, fields = {}) {
  const err = new Error(message);
  err.isOpenAIError = true;
  Object.assign(err, fields);
  return err;
}

/**
 * Single isolated OpenAI call. Returns the raw JSON string from the model.
 * Throws a structured error (status/code/type/message/request_id/retry-after)
 * — never the API key or request auth headers. Swap transport here only.
 */
async function callOpenAI(filledPrompt) {
  let res;
  try {
    res = await fetch(OPENAI_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: OPENAI_MODEL,
        input: [
          { role: 'system', content: SYSTEM_INSTRUCTION },
          { role: 'user', content: filledPrompt },
        ],
        text: {
          format: { type: 'json_schema', ...buildOutputSchema() },
        },
        max_output_tokens: 16000,
      }),
      signal: (typeof AbortSignal !== 'undefined' && AbortSignal.timeout)
        ? AbortSignal.timeout(OPENAI_TIMEOUT_MS) : undefined,
    });
  } catch (e) {
    // Network failure, DNS, connection reset, or request timeout/abort.
    const isTimeout = e && (e.name === 'TimeoutError' || e.name === 'AbortError');
    throw makeOpenAIError(
      isTimeout ? `OpenAI request timed out after ${OPENAI_TIMEOUT_MS}ms`
                : `OpenAI network error: ${(e && e.message) || e}`,
      { name: e && e.name, code: isTimeout ? 'timeout' : (e && e.code) || null,
        type: isTimeout ? 'timeout_error' : 'network_error' });
  }

  if (!res.ok) {
    const raw = await res.text().catch(() => '');
    let bodyErr = {};
    try { const parsed = JSON.parse(raw); bodyErr = (parsed && parsed.error) || parsed || {}; }
    catch { /* non-JSON error body */ }
    const requestId = res.headers.get('x-request-id') || bodyErr.request_id || null;
    const retryAfter = res.headers.get('retry-after') || null;
    throw makeOpenAIError(bodyErr.message || `OpenAI HTTP ${res.status}`, {
      status: res.status,
      code: bodyErr.code || null,
      type: bodyErr.type || null,
      request_id: requestId,
      // ONLY safe response headers — never request/auth headers.
      headers: { 'retry-after': retryAfter, 'x-request-id': requestId },
      error: {
        status: res.status,
        code: bodyErr.code || null,
        type: bodyErr.type || null,
        message: bodyErr.message || (raw ? raw.slice(0, 500) : null),
      },
      rawBodyPreview: raw ? raw.slice(0, 500) : '',
    });
  }

  let data;
  try {
    data = await res.json();
  } catch (e) {
    throw makeOpenAIError('OpenAI returned a malformed (non-JSON) response body', {
      status: res.status, code: 'invalid_response', type: 'invalid_response', invalidResponse: true,
    });
  }

  if (data && data.status && data.status !== 'completed') {
    const reason = data.incomplete_details && data.incomplete_details.reason;
    throw makeOpenAIError(
      `OpenAI response status "${data.status}"${reason ? ` (reason: ${reason})` : ''}`,
      { status: res.status, code: reason || 'incomplete', type: 'incomplete_response',
        incompleteReason: reason || null, invalidResponse: true });
  }

  const content = extractResponsesText(data);
  if (!content) {
    throw makeOpenAIError('OpenAI returned no message content', {
      status: res.status, code: 'no_content', type: 'invalid_response', invalidResponse: true });
  }
  return content;
}

/** Classify an OpenAI error into one concise category. */
function classifyOpenAIError(e) {
  if (!e) return 'unknown_openai_error';
  const status = typeof e.status === 'number' ? e.status : undefined;
  const code = String(e.code || (e.error && e.error.code) || '').toLowerCase();
  const type = String(e.type || (e.error && e.error.type) || '').toLowerCase();
  const name = String(e.name || '').toLowerCase();
  const msg = String(e.message || (e.error && e.error.message) || '').toLowerCase();
  const blob = `${code} ${type} ${msg}`;

  if (name === 'timeouterror' || name === 'aborterror' || type === 'timeout_error' ||
      status === 408 || /\btimeout\b|timed out|etimedout/.test(blob)) return 'timeout_error';
  if (status === 401 || status === 403 ||
      /invalid_api_key|incorrect api key|authentication|unauthor|invalid authorization/.test(blob)) return 'authentication_error';
  if (/insufficient_quota|exceeded your current quota|\bquota\b|billing_hard_limit/.test(blob)) return 'quota_error';
  if (status === 429 || /rate.?limit/.test(blob)) return 'rate_limit_error';
  if (/context_length_exceeded|maximum context|context length|max_output_tokens|reduce the length|too many tokens/.test(blob)) return 'context_length_error';
  if (e.invalidResponse ||
      /no_content|invalid_response|incomplete_response|malformed|non-json|response_format|\bschema\b|\bjson\b/.test(blob)) return 'invalid_response_error';
  return 'unknown_openai_error';
}

/** Pick the first non-empty value. */
function firstDefined(...vals) {
  return vals.find((v) => v !== undefined && v !== null && v !== '');
}

/** Format a structured, auth-safe one-line summary + message for an OpenAI error. */
function formatOpenAIError(e) {
  const cls = classifyOpenAIError(e);
  const status = firstDefined(e && e.status, e && e.error && e.error.status);
  const code = firstDefined(e && e.code, e && e.error && e.error.code);
  const type = firstDefined(e && e.type, e && e.error && e.error.type);
  const message = firstDefined(e && e.message, e && e.error && e.error.message) || String(e);
  const requestId = firstDefined(e && e.request_id, e && e.headers && e.headers['x-request-id']);
  const retryAfter = e && e.headers && e.headers['retry-after'];
  const parts = [`classification=${cls}`];
  if (status !== undefined) parts.push(`status=${status}`);
  if (code) parts.push(`code=${code}`);
  if (type) parts.push(`type=${type}`);
  if (requestId) parts.push(`request_id=${requestId}`);
  if (retryAfter) parts.push(`retry-after=${retryAfter}`);
  return { cls, summary: parts.join(' '), message: String(message).slice(0, 400) };
}

/** Print a structured OpenAI failure (never the API key / auth headers). */
function reportOpenAIError(slug, e) {
  const f = formatOpenAIError(e);
  console.error(`  ✗ ${slug}: OpenAI request failed [${f.cls}]`);
  console.error(`      ${f.summary}`);
  console.error(`      message: ${f.message}`);
  return f;
}

// ===========================================================================
// Per-page generation
// ===========================================================================

/**
 * Fill the prompt template. Returns { filled, missingPlaceholders }.
 * - Uses a function replacer so `$` sequences in block content are NOT treated
 *   as replacement patterns.
 * - Records any placeholder that is absent from the template (a template bug
 *   that would silently drop a whole block from the live prompt).
 */
function fillPrompt(template, blocks) {
  const missingPlaceholders = [];
  let filled = template;
  for (const key of Object.keys(blocks)) {
    const token = `{{${key}}}`;
    if (!filled.includes(token)) {
      missingPlaceholders.push(key);
      continue;
    }
    filled = filled.replace(token, () => String(blocks[key]));
  }
  return { filled, missingPlaceholders };
}

/**
 * Overwrite authoritative identity fields from the registry + deterministic id,
 * and constrain internal links to allowedSlugs. The model must not own these.
 */
function applyAuthoritativeFields(out, item, sourceFile, sourcePath, linkingContext) {
  const slug = item.slug;
  const childPageSlugs = linkingContext.children.map((c) => c.slug);
  const allowed = new Set(linkingContext.allowedSlugs);

  out._type = 'documentationPage';
  out.sourceFile = sourceFile;
  out.sourcePath = sourcePath;
  out.sanityDocumentIdCandidate = sanityIdFromSlug(slug);
  out.title = item.title;
  out.slug = { _type: 'slug', current: slug };
  // Published pageType normalization: case-study-notes is a SOURCE type; the
  // published documentation page must be a case-study. The source identity is
  // surfaced only in dry-run diagnostics, never in the published JSON.
  out.pageType = item.article_type === 'case-study-notes' ? 'case-study' : item.article_type;
  out.category = item.category;
  out.parentSlug = item.parent_slug || '';
  out.childPageSlugs = childPageSlugs;

  // Preserve model-authored publicationBlockers verbatim; only normalize the
  // container so downstream code can rely on it being an array. Never overwrite
  // or drop blocker entries.
  if (!Array.isArray(out.publicationBlockers)) out.publicationBlockers = [];

  // Preserve questionsForReview verbatim; only normalize to an array. Never
  // overwrite the model's questions. A single string becomes a one-item array;
  // a missing field defaults to ["None"].
  if (Array.isArray(out.questionsForReview)) {
    // keep as-is
  } else if (typeof out.questionsForReview === 'string' && out.questionsForReview.trim()) {
    out.questionsForReview = [out.questionsForReview.trim()];
  } else {
    out.questionsForReview = ['None'];
  }

  // relatedPageSlugs = registry-resolved related pages UNION the model's own
  // related slugs (e.g. mentioned case studies), constrained to allowedSlugs so
  // nothing is invented. This lets case studies the article relies on survive
  // instead of being overwritten by registry-only conceptual relations.
  const registryRelated = linkingContext.related.map((r) => r.slug);
  const modelRelated = Array.isArray(out.relatedPageSlugs)
    ? out.relatedPageSlugs.filter((s) => typeof s === 'string' && allowed.has(s))
    : [];
  out.relatedPageSlugs = Array.from(new Set([...registryRelated, ...modelRelated]))
    .filter((s) => s !== slug);

  // Keep only internal links whose targetSlug is in allowedSlugs.
  if (Array.isArray(out.internalLinks)) {
    out.internalLinks = out.internalLinks.filter(
      (l) => l && typeof l.targetSlug === 'string' && allowed.has(l.targetSlug)
    );
  } else {
    out.internalLinks = [];
  }

  // Output ordering: questionsForReview sits after publicationBlockers and
  // before relatedPageSlugs.
  return reorderKeyAfter(out, 'questionsForReview', 'publicationBlockers');
}

/** Return a copy of obj with `key` positioned immediately after `afterKey`. */
function reorderKeyAfter(obj, key, afterKey) {
  if (!(key in obj)) return obj;
  const out = {};
  for (const [k, v] of Object.entries(obj)) {
    if (k === key) continue;
    out[k] = v;
    if (k === afterKey) out[key] = obj[key];
  }
  if (!(key in out)) out[key] = obj[key]; // afterKey absent -> append at end
  return out;
}

/**
 * Build everything that goes to the model for one page — shared by the real
 * run and the dry run. Does NOT call OpenAI and does NOT write anything.
 * Returns { ok:true, ... } or { ok:false, stage, message }.
 */
function buildPagePayload(ctx, item) {
  const { template, guides, resolveSource } = ctx;
  const canonical = ctx.canonical || {};

  const sourceAbs = resolveSource(item.source_file);
  if (!sourceAbs) {
    return { ok: false, stage: 'resolve-source', message: `Could not resolve source file: ${item.source_file}` };
  }

  let sourceMd;
  try {
    sourceMd = fs.readFileSync(sourceAbs, 'utf8');
  } catch (e) {
    return { ok: false, stage: 'read-source', message: String(e.message || e) };
  }

  const { context: linkingContext, warnings: linkWarnings, info: linkInfo } = buildLinkingContext(item, ctx, sourceMd);

  const registryItemForModel = {
    title: item.title,
    slug: item.slug,
    category: item.category,
    pageType: item.article_type,
    sourceFile: item.source_file,
  };

  const { filled, missingPlaceholders } = fillPrompt(template, {
    CURRENT_SOURCE_MD: sourceMd,
    CURRENT_REGISTRY_ITEM: JSON.stringify(registryItemForModel, null, 2),
    LINKING_CONTEXT: JSON.stringify(linkingContext, null, 2),
    OPTIONAL_GUIDES: guides,
    CANONICAL_STRINGS: JSON.stringify(canonical, null, 2),
  });

  return {
    ok: true,
    sourceAbs,
    sourcePath: relToRoot(sourceAbs),
    sourceMd,
    registryItemForModel,
    linkingContext,
    linkWarnings,
    linkInfo,
    filled,
    missingPlaceholders,
  };
}

/**
 * Live-generation preflight for case-study pages. Returns an array of fatal
 * error strings; empty means OK. Never calls OpenAI.
 */
function preflightErrors(payload, item, canonical) {
  const errs = [];
  const isCaseStudy = CASE_STUDY_TYPES.includes(item.article_type);

  if (payload.missingPlaceholders && payload.missingPlaceholders.length) {
    errs.push(`Prompt template is missing placeholders (blocks not injected): ${payload.missingPlaceholders.join(', ')}.`);
  }
  if (!payload.sourceMd || payload.sourceMd.length < MIN_SOURCE_CHARS) {
    errs.push(`CURRENT_SOURCE_MD is empty or shorter than ${MIN_SOURCE_CHARS} characters (got ${payload.sourceMd ? payload.sourceMd.length : 0}).`);
  }
  // Confirm the source content actually reached the rendered prompt.
  if (payload.sourceMd && payload.sourceMd.length >= 60 &&
      !payload.filled.includes(payload.sourceMd.slice(0, 60))) {
    errs.push('CURRENT_SOURCE_MD content is not present in the rendered prompt.');
  }

  if (isCaseStudy) {
    const c = canonical || {};
    if (!c.lockedAgencySentence) errs.push('CANONICAL_STRINGS.lockedAgencySentence is missing.');
    if (!c.lockedMethodSentence) errs.push('CANONICAL_STRINGS.lockedMethodSentence is missing (required for case studies).');
    if (!c.phaseNames || !c.phaseNames.length) errs.push('CANONICAL_STRINGS.phaseNames is empty.');
    if (!c.proprietaryLexiconTerms || !c.proprietaryLexiconTerms.length) errs.push('CANONICAL_STRINGS.proprietaryLexiconTerms is empty.');
    if (!c.exactStandardDesignations || !c.exactStandardDesignations.length) errs.push('CANONICAL_STRINGS.exactStandardDesignations is empty.');
  }
  return errs;
}

async function generatePage(ctx, item) {
  const slug = item.slug;
  // Writing ALWAYS uses the new mirrored path; skip considers any existing
  // generated file (new or legacy) for transition safety.
  const outPath = getGeneratedOutputPath(item);

  // 14. Skip if output already exists, unless --overwrite was passed.
  if (findExistingGeneratedPath(item) && !OVERWRITE) {
    console.log(`  - skip (exists, use --overwrite to regenerate): ${slug}`);
    return { slug, status: 'skipped' };
  }

  const payload = buildPagePayload(ctx, item);
  if (!payload.ok) {
    console.error(`  ✗ ${slug}: ${payload.message} [${payload.stage}]`);
    process.exitCode = 1;
    logError({ slug, sourceFile: item.source_file, stage: payload.stage, message: payload.message });
    return { slug, status: 'error', errorClass: payload.stage };
  }

  // Preflight: never call OpenAI with a broken/empty payload.
  const pf = preflightErrors(payload, item, ctx.canonical);
  if (pf.length) {
    console.error(`  ✗ ${slug}: preflight failed — NOT calling OpenAI:`);
    for (const e of pf) console.error(`      - ${e}`);
    logError({ slug, sourceFile: item.source_file, stage: 'preflight', message: pf.join(' | ') });
    process.exitCode = 1;
    return { slug, status: 'error', errorClass: 'preflight' };
  }

  let raw;
  try {
    raw = await callOpenAI(payload.filled);
  } catch (e) {
    const f = reportOpenAIError(slug, e);
    process.exitCode = 1; // never exit 0 when a generation actually failed
    logError({
      slug, sourceFile: item.source_file, stage: 'openai',
      classification: f.cls,
      status: e && e.status, code: e && (e.code || (e.error && e.error.code)),
      type: e && (e.type || (e.error && e.error.type)),
      request_id: e && e.request_id,
      retryAfter: e && e.headers && e.headers['retry-after'],
      message: f.message,
    });
    return { slug, status: 'error', errorClass: f.cls };
  }

  let parsed;
  try {
    parsed = JSON.parse(raw);
  } catch (e) {
    // Malformed model output is an invalid response, not a generic "error".
    console.error(`  ✗ ${slug}: OpenAI response was not valid JSON [invalid_response_error]`);
    console.error(`      message: ${String(e.message || e).slice(0, 300)}`);
    process.exitCode = 1;
    logError({
      slug, sourceFile: item.source_file, stage: 'parse-json',
      classification: 'invalid_response_error',
      message: String(e.message || e), rawPreview: String(raw).slice(0, 800),
    });
    return { slug, status: 'error', errorClass: 'invalid_response_error' };
  }

  let finalDoc = applyAuthoritativeFields(
    parsed, item, item.source_file, payload.sourcePath, payload.linkingContext
  );

  // Single deterministic authored-content pipeline (runs before file write).
  if (CASE_STUDY_TYPES.includes(item.article_type)) {
    finalDoc = enforceAuthoredContentRules(finalDoc, payload.sourceMd, ctx.canonical || {}, ctx.registry);
  }

  try {
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, JSON.stringify(finalDoc, null, 2) + '\n', 'utf8');
  } catch (e) {
    console.error(`  ✗ ${slug}: failed to write output [write_error]: ${String(e.message || e)}`);
    process.exitCode = 1;
    logError({ slug, sourceFile: item.source_file, stage: 'write-output', message: String(e.message || e) });
    return { slug, status: 'error', errorClass: 'write_error' };
  }

  console.log(`  + generated: ${slug} -> ${relToRoot(outPath)}`);
  return { slug, status: 'generated' };
}

// ===========================================================================
// Dry run — inspect payloads without calling OpenAI or spending tokens
// ===========================================================================

function generateDryRun(ctx, item) {
  const slug = item.slug;
  const warnings = [];
  const info = [];

  const payload = buildPagePayload(ctx, item);
  if (!payload.ok) {
    console.warn(`  ! ${slug}: ${payload.message}`);
    logError({ slug, sourceFile: item.source_file, stage: payload.stage, message: payload.message });
    return { slug, status: 'error', warnings: [payload.message], info: [] };
  }

  const { sourceMd, sourcePath, registryItemForModel, linkingContext, filled } = payload;
  const lc = linkingContext;

  // Warnings and info come from buildLinkingContext (single source of truth).
  warnings.push(...payload.linkWarnings);
  info.push(...payload.linkInfo);

  // Deterministic source-side diagnostics (no model involved). These let us
  // inspect what the validator will key off before spending any tokens.
  const canonical = ctx.canonical || {};
  const classification = extractClassification(sourceMd);
  const medCue = medicalDeviceCue(sourceMd, '', null);
  const reg = analyzeRegulatorySpecificsFromSource(sourceMd);
  const isNotes = item.article_type === 'case-study-notes';
  const diagnostics = {
    canonicalStrings: canonical,
    lockedAgencySentenceFound: !!canonical.lockedAgencySentence,
    methodSentenceFound: !!canonical.lockedMethodSentence,
    phaseNamesFound: canonical.phaseNames || [],
    proprietaryLexiconFound: canonical.proprietaryLexiconTerms || [],
    mentionedCaseStudyCandidates: lc.mentionedCaseStudyCandidates || [],
    mentionedConceptCandidates: lc.mentionedConceptCandidates || [],
    allowedSlugs: lc.allowedSlugs,
    classificationState: classification.state,
    classification: classification.hasBlock ? classification : null,
    medicalDeviceCueDetected: medCue.require,
    medicalDeviceCueUncertain: medCue.uncertain,
    medicalDeviceCueReason: medCue.reason || null,
    standardStringsDetectedInSource: detectStandards(sourceMd),
    standardsPreserveFromSource: detectStandards(sourceMd), // no auto-upgrade
    regulatorySpecificsFromSource: reg, // shared analyzer (sanitizer + validator)
    regulatoryBothTermsInSource: reg.hasApprovalClearanceAmbiguity,
    publicationBlockerCandidates: requiredBlockersFromSource(sourceMd),
    pageTypeNormalization: { sourceArticleType: item.article_type, publishedPageType: isNotes ? 'case-study' : item.article_type },
    scaffoldingCandidatesInSource: SCAFFOLDING.filter((term) =>
      term.includes('|') || term.includes('/')
        ? sourceMd.includes(term)
        : new RegExp(`^#{1,6}\\s*${escapeRegex(term)}\\b`, 'im').test(sourceMd)),
    promptSchemaIncludesQuestionsForReview:
      !!(buildOutputSchema().schema.properties.questionsForReview),
    promptMentionsQuestionsForReview: /questionsForReview/.test(ctx.template),
  };

  const dryDoc = {
    selectedPage: {
      title: item.title,
      slug: item.slug,
      sourceFile: item.source_file,
      sourcePath,
      pageType: item.article_type,
      category: item.category,
    },
    warnings,
    info,
    caseStudyDiagnostics: diagnostics,
    currentRegistryItem: registryItemForModel,
    linkingContext: lc, // full, for inspection
    optionalGuidesPreview: ctx.guides.slice(0, GUIDES_PREVIEW_CAP),
    currentSourcePreview:
      sourceMd.length <= SOURCE_PREVIEW_CAP ? sourceMd : sourceMd.slice(0, SOURCE_PREVIEW_CAP),
    filledPromptPreview: filled.slice(0, PROMPT_PREVIEW_CAP),
    inputSizeEstimate: {
      sourceCharacters: sourceMd.length,
      guidesCharacters: ctx.guides.length,
      linkingContextCharacters: JSON.stringify(lc).length,
      filledPromptCharacters: filled.length,
    },
  };

  ensureDir(DRY_RUN_DIR);
  const outPath = path.join(DRY_RUN_DIR, `${slug}.json`);
  fs.writeFileSync(outPath, JSON.stringify(dryDoc, null, 2) + '\n', 'utf8');
  console.log(`  ~ dry-run: ${slug} -> ${relToRoot(outPath)}`);

  return {
    slug,
    status: 'dry-run',
    sourcePath,
    allowedSlugsCount: lc.allowedSlugs.length,
    relatedCount: lc.related.length,
    childCount: lc.children.length,
    sameCategoryCount: lc.sameCategory.length,
    warnings,
    info,
  };
}

// ===========================================================================
// Test-page selection
// ===========================================================================

function pickTestPages(registry) {
  const isReady = (r) => r.generation_status === 'ready';
  const exists = (r) => findExistingGeneratedPath(r) !== null;

  function pick(types, used) {
    const inBucket = registry.filter((r) => types.includes(r.article_type) && !used.has(r.slug));
    // Prefer ready + not-yet-generated, then ready, then anything.
    return (
      inBucket.find((r) => isReady(r) && !exists(r)) ||
      inBucket.find((r) => isReady(r)) ||
      inBucket[0] ||
      null
    );
  }

  const used = new Set();
  const selected = [];
  for (const key of ['caseStudy', 'glossaryConcept', 'capPracFailOut']) {
    const item = pick(BUCKETS[key], used);
    if (item) { used.add(item.slug); selected.push({ bucket: key, item }); }
    else console.warn(`! No registry item found for bucket: ${key}`);
  }
  return selected;
}

// ===========================================================================
// Case-study validator (--validate-case-studies)
// ===========================================================================

// NOTE: canonical strings (locked agency/method sentences, phase names,
// proprietary lexicon, medical caveat) are EXTRACTED from the ground-truth guide
// files at runtime (see loadCanonicalStrings). They are never hardcoded as the
// source of truth. The lists below are detection vocabularies / fallbacks only.
const RETIRED_NAME = 'Dynamic Systems Design';
const HUMAN_REVIEW_PREFIX = 'Human review required:';

// Fallback medical-device caveat (used only if the guide has no exact version).
const MEDICAL_CAVEAT_FALLBACK =
  "Creative Navy's role is formative evaluation only; summative validation is the " +
  "manufacturer's responsibility via the regulatory submission.";

const SOFT_ENTITY_PHRASES = ['the agency', 'the consultancy', 'the firm', 'the company'];
const AMERICAN_SPELLINGS = ['color', 'behavior', 'center', 'analyze', 'optimize', 'organization', 'visualization', 'customize'];
const REG_RESULT_PHRASES = ['FDA approval', 'FDA clearance', 'regulatory approval', 'regulatory clearance', 'certification', 'regulatory acceptance'];
// Canonical inline evidence labels (the only five allowed for material claims).
const CANONICAL_EVIDENCE_LABELS = ['field-measured', 'client-measured', 'client-reported', 'Creative Navy-observed', 'Creative Navy-recorded'];
// Proprietary lexicon detection vocabulary (confirmed against the guide at runtime).
const PROPRIETARY_TERMS = [
  'tension-driven reasoning', 'option space mapping', 'domain learning', 'constraint respecting',
  'performance in reality', 'the blanks phenomenon', 'sense decay', 'progressive specification',
  'organic system building', 'competitive vector', 'Sandbox Experiments', 'Concept Convergence',
  'Iterative System Building', 'Organizational Integration', 'Critical Systems Design',
];
// Canonical five phase names (confirmed against the guide at runtime; never varied).
const PHASE_NAME_CANDIDATES = [
  'Sandbox Experiments', 'Concept Convergence', 'Iterative System Building',
  'Organizational Integration', 'Implementation Partnership',
];
const SCAFFOLDING = [
  'Key facts', 'Evidence metadata', 'Claim | Evidence', 'Claim/Evidence/Strength/Notes',
  'Internal links', 'Anchor | Target slug', 'relatedPageSlugs', 'Tags', 'Build brief',
  'Changelog', 'Page outline', 'Table of contents', 'Contents', 'qualityChecks',
  'publicationBlockers', 'builder instructions',
];

// Exact standard designations (canonical override; family forms are degradations).
const STANDARD_STRINGS = [
  'IEC 62366-1', 'IEC 60417', 'ISO 15007:2020', 'NHTSA DOT HS 810 594', 'NMEA 2000',
  'ISA-18.2', 'DO-178', 'MiFID II', 'SCA', 'PSD2', 'PCI DSS', 'GMP', 'GAMP 5',
];
const HANDBACK_PHRASES = [
  'permission unconfirmed', 'naming unconfirmed', 'not cleared', 'uncleared', 'confidential',
  'undisclosed', 'do not name', 'describe, do not name', 'anonymous', 'redacted',
  'prime undisclosed', 'site undisclosed', 'plant undisclosed', 'approval versus clearance',
  'FDA approval and FDA clearance', 'Connects to deferred', 'deferred to repository integration',
  'repository integration', 'Connects to TBD', 'Connects to pending', 'new category needed',
  'new context cluster needed', 'category not yet present', 'context cluster not yet present',
  'no existing category fits', 'no existing context fits', 'requires new cluster',
];

function escapeRegex(s) { return String(s).replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

/** Normalize typographic quotes/apostrophes to ASCII for exact-string checks. */
function normQuotes(s) {
  return String(s || '')
    .replace(/[‘’′]/g, "'")
    .replace(/[“”″]/g, '"');
}

function hasWholeWord(text, word) {
  return new RegExp(`\\b${escapeRegex(word)}\\b`, 'i').test(text);
}

/** Term match: substring for multi-word/acronym-with-space/digit terms, else whole-word. */
function matchTerm(text, term) {
  if (/[\s\d]/.test(term)) return text.toLowerCase().includes(term.toLowerCase());
  return hasWholeWord(text, term);
}

/** Value after a single-line label (e.g. "Primary context: foo"). */
function valueAfterLabel(text, labelRe) {
  const m = text.match(new RegExp(labelRe.source + '\\s*([^\\n]*)', 'i'));
  return m ? m[1].trim() : null;
}

/** Text block following a label up to the next blank line. */
function blockAfter(text, labelRe) {
  const m = text.match(labelRe);
  if (!m) return null;
  const after = text.slice(m.index + m[0].length);
  const stop = after.search(/\n\s*\n/);
  return stop >= 0 ? after.slice(0, stop) : after;
}

// ---------------------------------------------------------------------------
// Deterministic source-side detectors (shared by dry-run and validator)
// ---------------------------------------------------------------------------

const CLASSIFICATION_LABELS = [
  { key: 'primaryCategory', label: 'Primary case-study category:', re: /Primary case[-\s]?study category:/i },
  { key: 'primaryContext', label: 'Primary context:', re: /Primary context:/i },
  { key: 'alsoRelevant', label: 'Also-relevant contexts:', re: /Also[-\s]?relevant contexts?:/i },
  { key: 'connectsTo', label: 'Connects to:', re: /Connects to:/i },
];

/**
 * Clean a classification field value: strip the markdown emphasis artifact that
 * surrounds bold labels (e.g. "**Primary context:** /x" leaves "** /x" after the
 * label) and collapse internal newline/space runs. Values are otherwise exact.
 */
function cleanFieldValue(v) {
  if (v == null) return null;
  let s = String(v).replace(/\r\n/g, '\n').trim();
  s = s.replace(/^[*_`\s]+/, '').replace(/[*_`\s]+$/, ''); // leading/trailing emphasis
  s = s.replace(/\s*\n\s*/g, ' ').replace(/[ \t]{2,}/g, ' ').trim(); // flatten multi-line
  return s;
}

/**
 * Deterministically extract a Classification block from source markdown.
 * Values are cleaned of bold-markup artifacts but otherwise exact. The `state`
 * distinguishes absent / partial / complete / deferred so incomplete is never
 * reported as missing.
 */
function extractClassification(srcText) {
  const t = normQuotes(srcText || '');
  const out = { primaryCategory: null, primaryContext: null, alsoRelevant: null, connectsTo: null };
  for (const l of CLASSIFICATION_LABELS) {
    if (l.key === 'connectsTo') {
      out.connectsTo = cleanFieldValue(blockAfter(t, l.re));
    } else {
      out[l.key] = cleanFieldValue(valueAfterLabel(t, l.re));
    }
  }
  const present = CLASSIFICATION_LABELS.map((l) => l.key).filter((k) => out[k] != null && out[k] !== '');
  const hasBlock = present.length > 0;
  const complete = present.length === CLASSIFICATION_LABELS.length;
  const connectsDeferred = !!out.connectsTo &&
    /(deferred to repository integration|repository integration|connects to deferred|deferred|tbd|pending)/i.test(out.connectsTo);
  let state;
  if (!hasBlock) state = 'absent';
  else if (connectsDeferred) state = 'deferred';
  else if (complete) state = 'complete';
  else state = 'partial';
  return { ...out, present, hasBlock, complete, connectsDeferred, state };
}

/**
 * Build the deterministic public "## Classification" section from extracted
 * values. Only completed fields are included, in canonical order, with exact
 * labels and exact (cleaned) values. The model never authors this.
 */
function buildClassificationSection(cls) {
  const parts = [];
  for (const l of CLASSIFICATION_LABELS) {
    const v = cls[l.key];
    if (v == null || v === '') continue;
    parts.push(`${l.label} ${v}`);
  }
  return `## Classification\n\n${parts.join('\n\n')}\n`;
}

/**
 * Deterministically insert/replace the Classification section in a generated
 * document and reconcile classification publicationBlockers + readiness.
 * Mutates and returns `out`. The model is not trusted to author this block.
 */
function enforceClassificationBlock(out, srcText) {
  const cls = extractClassification(srcText);
  let body = String(out.bodyMarkdown || '');

  const STALE = ['classification_missing', 'missing_or_incomplete_classification_block',
    'classification_incomplete', 'classification_deferred_connects_to'];
  let blockers = Array.isArray(out.publicationBlockers) ? out.publicationBlockers.slice() : [];

  if (cls.state !== 'absent') {
    const section = buildClassificationSection(cls);
    // Remove EVERY existing Classification-like section (e.g. "## Classification"
    // and a duplicate "## Case study classification") so only one remains.
    const classSectionRe = /^##[ \t]+(?:case[- ]study[- ]+)?classification\b[\s\S]*?(?=\n##\s|\n#\s|$)/gim;
    body = body.replace(classSectionRe, '').replace(/\n{3,}/g, '\n\n').trim() + '\n';

    // Insert the single canonical section near the top: before the first H2,
    // else right after the H1, else at the very top.
    const h2 = body.match(/^##\s+/m);
    if (h2) {
      const idx = body.indexOf(h2[0]);
      body = `${body.slice(0, idx)}${section}\n${body.slice(idx)}`;
    } else {
      const h1 = body.match(/^#\s+[^\n]*\n+/);
      body = h1 ? `${h1[0]}${section}\n${body.slice(h1[0].length)}` : `${section}\n${body}`;
    }
    out.bodyMarkdown = body;
  }

  // Reconcile classification blockers against the deterministic state.
  blockers = blockers.filter((b) => !STALE.includes(b && b.type));
  if (cls.state === 'deferred') {
    blockers.push({ type: 'classification_deferred_connects_to', severity: 'blocker', message: `${HUMAN_REVIEW_PREFIX} "Connects to" is deferred to repository integration.` });
  } else if (cls.state === 'partial') {
    blockers.push({ type: 'classification_incomplete', severity: 'blocker', message: `${HUMAN_REVIEW_PREFIX} the Classification block is incomplete.` });
  } else if (cls.state === 'absent') {
    blockers.push({ type: 'classification_missing', severity: 'blocker', message: `${HUMAN_REVIEW_PREFIX} the case study notes do not contain a Classification block.` });
  }
  out.publicationBlockers = blockers;

  // Readiness: only ready when no blockers remain at all.
  out.qualityChecks = out.qualityChecks || {};
  out.qualityChecks.readyForSanityImport = blockers.length === 0;
  return out;
}

// ---------------------------------------------------------------------------
// Shared JSON string traversal (used by sanitizer AND validator)
// ---------------------------------------------------------------------------

// Identity / link fields that must NOT be scrubbed or scanned for regulatory
// terms (paths, ids, slugs, and slug lists are structural, not authored prose).
// Deterministic identity / routing fields — never authored prose; never scrubbed
// or scanned for authored-content rules. The SINGLE shared skip list used by both
// post-processing and validation.
const AUTHORED_SKIP_KEYS = [
  '_type', 'sourceFile', 'sourcePath', 'sanityDocumentIdCandidate',
  'slug', 'pageType', 'category', 'parentSlug', 'childPageSlugs', 'relatedPageSlugs',
  'targetSlug', 'sourceSlug', 'targetPath', 'path', 'url', 'href', 'current',
];
const REG_SKIP_KEYS = AUTHORED_SKIP_KEYS; // alias (kept for existing references)

/**
 * Return a deep copy of `value` with every string transformed by fn(string).
 * Subtrees under any key in skipKeys are preserved unchanged.
 */
function walkJsonStrings(value, fn, skipKeys = []) {
  const skip = new Set(skipKeys);
  const rec = (v) => {
    if (typeof v === 'string') return fn(v);
    if (Array.isArray(v)) return v.map(rec);
    if (v && typeof v === 'object') {
      const o = {};
      for (const k of Object.keys(v)) o[k] = skip.has(k) ? v[k] : rec(v[k]);
      return o;
    }
    return v;
  };
  return rec(value);
}

/**
 * Collect every regex match across all strings in `value`, skipping subtrees
 * under skipKeys. Returns [{ field, match }] where field is the nearest key.
 */
function collectJsonStringMatches(value, regex, skipKeys = []) {
  const skip = new Set(skipKeys);
  const found = [];
  const reSrc = regex.source;
  const reFlags = regex.flags.includes('g') ? regex.flags : regex.flags + 'g';
  const walk = (v, field) => {
    if (typeof v === 'string') {
      const re = new RegExp(reSrc, reFlags);
      let m;
      while ((m = re.exec(v))) {
        const snippet = v.slice(Math.max(0, m.index - 35), m.index + m[0].length + 35).replace(/\s+/g, ' ').trim();
        found.push({ field: field || '(root)', match: m[0], snippet });
      }
      return;
    }
    if (Array.isArray(v)) { for (const item of v) walk(item, field); return; }
    if (v && typeof v === 'object') {
      for (const k of Object.keys(v)) {
        if (skip.has(k)) continue;
        walk(v[k], k);
      }
    }
  };
  walk(value, null);
  return found;
}

/** Authored-content walker: transform every authored string (skips identity/routing fields). */
function walkAuthoredStrings(value, fn, options = {}) {
  return walkJsonStrings(value, fn, options.skipKeys || AUTHORED_SKIP_KEYS);
}

/** Authored-content scanner: collect regex matches across authored strings only. */
function collectAuthoredStringMatches(value, regex, options = {}) {
  return collectJsonStringMatches(value, regex, options.skipKeys || AUTHORED_SKIP_KEYS);
}

/** Canonicalize the five phase-name strings to their exact casing in a string. */
// Variant -> canonical phase-name map. Covers lower/Title/British spellings.
// Keys are matched case-insensitively; the British "Organisational" (s) and the
// American "Organizational" (z) both normalize to the canonical z form.
const PHASE_NAME_VARIANTS = [
  [/\bsandbox experiments?\b/gi, 'Sandbox Experiments'],
  [/\bconcept convergence\b/gi, 'Concept Convergence'],
  [/\biterative system building\b/gi, 'Iterative System Building'],
  [/\borgani[sz]ational integration\b/gi, 'Organizational Integration'],
  [/\bimplementation partnership\b/gi, 'Implementation Partnership'],
];

function canonicalizePhaseNames(text) {
  let s = String(text || '');
  for (const [re, canonical] of PHASE_NAME_VARIANTS) s = s.replace(re, canonical);
  return s;
}

/** Canonicalize phase names across the entire document (returns a copy). */
function canonicalizePhaseNamesDoc(doc) {
  return walkJsonStrings(doc, canonicalizePhaseNames, REG_SKIP_KEYS);
}

// ---------------------------------------------------------------------------
// Structured medical-device classification (shared by validator + post-process)
// ---------------------------------------------------------------------------

/**
 * Classify whether a case is a REGULATED medical-device engagement, from
 * strong source-specific evidence only — never from the locked agency sentence,
 * sector lists, comparisons, taxonomy, or negated/"does not apply" mentions.
 * `item` may be a registry item ({category,parent_slug}) or a generated doc
 * ({category,parentSlug}). Returns { isMedicalDeviceCase, confidence, reasons }.
 */
function classifyMedicalDeviceCase(item, srcText) {
  const reasons = [];
  const s = normQuotes(srcText || '');
  const cls = extractClassification(srcText);
  const category = String((cls.primaryCategory) || (item && item.category) || '');
  const parent = String((item && (item.parent_slug || item.parentSlug)) || '');
  const context = String(cls.primaryContext || '');
  const catMedical = /\/evidence\/case-studies\/medical\b/i.test(category) || /^medical$/i.test(parent);
  const ctxMedical = /medical-and-clinical-systems/i.test(context);

  // Decisive negation: the source explicitly says it is NOT a regulated device.
  const NEG = /\bnot\s+(a\s+)?(regulated\s+)?medical[\s-]device\b|\bis not a medical device\b|IEC\s*62366(?:-1)?[^.\n]{0,40}\bdoes not apply\b|caveat\s+does not apply/i;
  if (NEG.test(s)) {
    reasons.push('source explicitly states the product is NOT a regulated medical device / IEC 62366 does not apply');
    return { isMedicalDeviceCase: false, confidence: 'none', reasons };
  }

  // Affirmative product evidence: the engagement product itself is regulated.
  const AFFIRM = [
    [/\bis\s+a\s+regulated\s+medical[\s-]device\b/i, 'source states the product is a regulated medical device'],
    [/\bregulated\s+medical[\s-]device\s+(requiring|under|governed|designed)/i, 'product regulated as a medical device'],
    [/\bgoverned\s+by\s+IEC\s*62366(?:-1)?\b/i, 'engagement governed by IEC 62366'],
    [/\bdesigned\s+to\s+(the\s+)?IEC\s*62366(?:-1)?\s+(usability|standard)/i, 'product designed to the IEC 62366 usability standard'],
    [/\bmedical[\s-]device\s+usability\s+engineering\b/i, 'medical-device usability engineering process'],
    [/\b(FDA|MDR|notified[\s-]body|510\(k\)|premarket)\b[^.\n]{0,60}\b(this (device|product|controller)|the device|submission|approval|clearance)\b/i, 'regulatory pathway for the engagement product'],
  ];
  const affirm = AFFIRM.filter(([re]) => re.test(s)).map(([, why]) => why);

  if (affirm.length && (catMedical || ctxMedical)) {
    reasons.push(...affirm, ctxMedical ? 'Primary context medical-and-clinical-systems' : 'medical primary category');
    return { isMedicalDeviceCase: true, confidence: 'strong', reasons };
  }
  if (affirm.length) {
    reasons.push(...affirm, 'product evidence present but classification not medical');
    return { isMedicalDeviceCase: true, confidence: 'ambiguous', reasons };
  }
  if (catMedical || ctxMedical) {
    reasons.push('medical classification present but no affirmative regulated-device product evidence in source');
    return { isMedicalDeviceCase: false, confidence: 'ambiguous', reasons };
  }
  reasons.push('no medical classification and no regulated-device product evidence');
  return { isMedicalDeviceCase: false, confidence: 'none', reasons };
}

/** Split bodyMarkdown into H2 sections with byte offsets (content before the
 *  first H2 is one leading section). */
function splitH2Sections(body) {
  const text = String(body || '');
  const re = /^##\s+(.+)$/gm;
  const heads = [];
  let m;
  while ((m = re.exec(text))) heads.push({ pos: m.index, heading: m[1] });
  if (!heads.length) return [{ heading: null, start: 0, end: text.length, text }];
  const out = [];
  if (heads[0].pos > 0) out.push({ heading: null, start: 0, end: heads[0].pos, text: text.slice(0, heads[0].pos) });
  for (let i = 0; i < heads.length; i++) {
    const start = heads[i].pos;
    const end = i + 1 < heads.length ? heads[i + 1].pos : text.length;
    out.push({ heading: heads[i].heading, start, end, text: text.slice(start, end) });
  }
  return out;
}

const METHOD_CANON = "Creative Navy's Critical Systems Design method";
const METHOD_DESIGN_RE = /\b(design (work|response|rationale)|process|phase|implementation|evidence interpretation|redesign|workflow|handover|build[\s-]support|Critical Systems Design|Sandbox Experiments|Concept Convergence|Iterative System Building|Organizational Integration|Implementation Partnership)\b/i;
const METHOD_BARE_RE = /\b(the method|the approach|the framework)\b/i;
// A bare reference is NOT Creative Navy's method if its sentence names another owner.
const METHOD_OWNER_DISQUALIFY_RE = /\b(client'?s?|customer'?s?|their|user'?s?|research|measurement|statistical|regulatory|scientific|third[\s-]party|vendor|supplier)\b/i;

function methodSentence(text, idx) {
  const start = text.lastIndexOf('.', idx) + 1;
  const end = text.indexOf('.', idx);
  return text.slice(start, end < 0 ? text.length : end);
}

/** Deterministically attribute Creative Navy's method in CN-process sections. */
function enforceSectionMethodAttribution(body) {
  const sections = splitH2Sections(body);
  let result = '';
  for (const sec of sections) {
    let text = sec.text;
    if (METHOD_DESIGN_RE.test(text) && !normQuotes(text).includes(METHOD_CANON)) {
      const m = METHOD_BARE_RE.exec(text);
      if (m && !METHOD_OWNER_DISQUALIFY_RE.test(methodSentence(text, m.index))) {
        text = text.slice(0, m.index) + METHOD_CANON + text.slice(m.index + m[0].length);
      }
    }
    result += text;
  }
  return result;
}

/** Detect CN-process sections that still use a bare method reference (not a
 *  client/third-party method) without naming Creative Navy's method. */
function detectMethodAttributionIssues(body) {
  const issues = [];
  for (const sec of splitH2Sections(body)) {
    if (!METHOD_DESIGN_RE.test(sec.text)) continue;
    if (normQuotes(sec.text).includes(METHOD_CANON)) continue;
    const m = METHOD_BARE_RE.exec(sec.text);
    if (!m) continue;
    if (METHOD_OWNER_DISQUALIFY_RE.test(methodSentence(sec.text, m.index))) continue; // non-CN method ref
    issues.push({ heading: sec.heading, snippet: methodSentence(sec.text, m.index).trim().slice(0, 80) });
  }
  return issues;
}

/**
 * Deterministically enforce the medical-device caveat per classification.
 * strong -> insert caveat once if missing; ambiguous -> non-blocking review
 * note; none -> do nothing. Mutates and returns `out`.
 */
function enforceMedicalDeviceCaveat(out, srcText, canonicalStrings) {
  const result = classifyMedicalDeviceCase(out, srcText);
  const caveat = (canonicalStrings && canonicalStrings.medicalCaveat) || MEDICAL_CAVEAT_FALLBACK;
  let body = String(out.bodyMarkdown || '');

  if (result.confidence === 'strong') {
    if (!normQuotes(body).includes(normQuotes(caveat))) {
      const secs = splitH2Sections(body);
      const target = secs.find((x) => /\b(regulat|FDA|evidence|IEC 62366)\b/i.test(x.heading || '')) ||
        secs.find((x) => x.heading) || secs[0];
      const headLen = (target.text.match(/^##\s+[^\n]*\n+/) || [''])[0].length;
      const at = target.start + headLen;
      body = body.slice(0, at) + caveat + '\n\n' + body.slice(at);
      out.bodyMarkdown = body;
    }
  } else if (result.confidence === 'ambiguous') {
    const note = `Medical-device classification is ambiguous (${result.reasons.join('; ')}); the page avoids the formative/summative caveat unless confirmed.`;
    let qfr = Array.isArray(out.questionsForReview)
      ? out.questionsForReview.filter((q) => String(q).trim().toLowerCase() !== 'none') : [];
    if (!qfr.some((q) => /medical-device classification is ambiguous/i.test(q))) qfr.push(note);
    out.questionsForReview = qfr.length ? qfr : ['None'];
  }
  return out;
}

// ---------------------------------------------------------------------------
// Deterministic regulatory source-fidelity sanitizer
// ---------------------------------------------------------------------------

const NEUTRAL_PATHWAY_SENTENCE =
  'The notes do not specify a pathway-specific FDA designation, so the generated page avoids pathway-specific wording.';

const REG_CAUTION_RE = /\b(not|no|avoid|without|never|nor|cannot)\b|n['’]t|not be expanded|has not been added|does not (specify|contain|state)|not (specified|stated|added)/i;

/** Combined regex of the unsupported regulatory tokens for a given source. */
function buildUnsupportedRegRe(reg) {
  const parts = [];
  if (!reg.supportsPma) parts.push('PMA');
  if (!reg.supportsPremarketApproval) parts.push('premarket approval');
  if (!reg.supports510k) parts.push('510\\s*\\(\\s*k\\s*\\)');
  if (!reg.supportsSubstantialEquivalence) parts.push('substantial equivalence');
  if (!reg.supportsClassII) parts.push('Class\\s*II\\b');
  if (!reg.supportsClassIII) parts.push('Class\\s*III\\b');
  return parts.length ? new RegExp(`(${parts.join('|')})`, 'i') : null;
}

/** Tidy artifacts left by token removal within a single sentence (no newlines). */
function tidyRegSentence(t) {
  return t
    .replace(/\s+,/g, ',')
    .replace(/,(\s*,)+/g, ',')
    .replace(/\(\s*,/g, '(')
    .replace(/,\s*\)/g, ')')
    .replace(/\(\s*\)/g, '')
    .replace(/\bto\s*,/gi, 'to')
    .replace(/\s{2,}/g, ' ')
    .replace(/\s+([.;:])/g, '$1')
    .replace(/,\s*\./g, '.')
    .trim();
}

/** Remove unsupported regulatory tokens from an assertive sentence. */
function stripRegTokens(s, reg) {
  let t = s;
  if (!reg.supportsPma) {
    t = t.replace(/FDA approval\s*\(\s*PMA\s*\)/gi, 'FDA approval')
         .replace(/approval\s*\(\s*PMA\s*\)/gi, 'approval')
         .replace(/\(\s*PMA\s*\)/gi, '')
         .replace(/\bPMA\b/g, '');
  }
  if (!reg.supportsPremarketApproval) t = t.replace(/premarket approval/gi, '');
  if (!reg.supports510k) {
    t = t.replace(/FDA clearance\s*\(\s*510\s*\(\s*k\s*\)\s*\)/gi, 'FDA clearance')
         .replace(/clearance\s*\(\s*510\s*\(\s*k\s*\)\s*\)/gi, 'clearance')
         .replace(/\(\s*510\s*\(\s*k\s*\)\s*\)/gi, '')
         .replace(/510\s*\(\s*k\s*\)/gi, '');
  }
  if (!reg.supportsSubstantialEquivalence) t = t.replace(/substantial equivalence/gi, '');
  if (!reg.supportsClassIII) t = t.replace(/\bClass\s*III\b/g, '');
  if (!reg.supportsClassII) t = t.replace(/\bClass\s*II\b/g, '');
  return tidyRegSentence(t);
}

/**
 * Scrub one string for unsupported regulatory specifics, preserving line/markdown
 * structure. Cautionary sentences (that only warn about unsupported terms) are
 * replaced wholesale with the neutral sentence; assertive sentences are token-
 * stripped. Returns the string unchanged when nothing is unsupported.
 */
function scrubRegString(s, reg) {
  if (typeof s !== 'string' || !s) return s;
  const unsupportedRe = buildUnsupportedRegRe(reg);
  if (!unsupportedRe || !unsupportedRe.test(s)) return s;

  return s.split('\n').map((line) => {
    if (!new RegExp(unsupportedRe.source, 'i').test(line)) return line;
    const sentences = line.match(/[^.!?]+[.!?]+|\s*[^.!?]+$/g) || [line];
    const rebuilt = [];
    for (const sent of sentences) {
      if (!new RegExp(unsupportedRe.source, 'i').test(sent)) { rebuilt.push(sent); continue; }
      if (REG_CAUTION_RE.test(sent)) {
        const lead = (sent.match(/^\s*/) || [''])[0];
        if (rebuilt[rebuilt.length - 1] !== lead + NEUTRAL_PATHWAY_SENTENCE) {
          rebuilt.push(lead + NEUTRAL_PATHWAY_SENTENCE);
        }
      } else {
        rebuilt.push(stripRegTokens(sent, reg));
      }
    }
    return rebuilt.join('');
  }).join('\n');
}

/**
 * Deterministically enforce regulatory source-fidelity over the ENTIRE document.
 * Uses the shared analyzer + JSON walker. Returns a new document object.
 */
function enforceRegulatorySourceFidelity(out, srcText) {
  const reg = analyzeRegulatorySpecificsFromSource(srcText);
  const result = walkJsonStrings(out, (s) => scrubRegString(s, reg), REG_SKIP_KEYS);

  // questionsForReview must be source-safe and carry exactly one ambiguity item.
  let qfr = Array.isArray(result.questionsForReview) ? result.questionsForReview.slice() : [];
  qfr = qfr
    .map((q) => String(q))
    .filter((q) => {
      const x = q.trim();
      if (!x || x.toLowerCase() === 'none') return false;
      // drop FDA-pathway/ambiguity questions (re-added canonically below)
      return !/FDA (approval|clearance|pathway)|pathway-specific|510|PMA|premarket|substantial equivalence/i.test(x);
    });
  if (reg.hasApprovalClearanceAmbiguity) {
    qfr.unshift('The notes use both FDA approval and FDA clearance language; the generated page preserves that ambiguity and avoids pathway-specific wording.');
  }
  result.questionsForReview = qfr.length ? qfr : ['None'];

  // Prune STALE regulatory ambiguity blockers: with unsupported terms stripped
  // and the ambiguity preserved in questionsForReview, approval/clearance
  // ambiguity is non-blocking and must not remain as a publicationBlocker.
  if (Array.isArray(result.publicationBlockers)) {
    result.publicationBlockers = result.publicationBlockers.filter(
      (b) => !(b && /approval_clearance_ambiguity|regulatory_term_ambiguity/i.test(b.type || '')));
  }

  return result;
}

/** Normalize questionsForReview to a deduped non-empty array (["None"] default). */
function normalizeQuestionsForReview(doc) {
  let q = doc.questionsForReview;
  if (typeof q === 'string') q = q.trim() ? [q.trim()] : [];
  if (!Array.isArray(q)) q = [];
  const seen = new Set();
  const out = [];
  for (const x of q) {
    const t = String(x).trim();
    if (!t || seen.has(t)) continue;
    seen.add(t);
    out.push(t);
  }
  doc.questionsForReview = out.length ? out : ['None'];
  return doc;
}

// ---------------------------------------------------------------------------
// Third-person voice (deterministic, safe). Returns a new document object.
// ---------------------------------------------------------------------------

/**
 * Mask spans where pronoun letters are NOT first-person agency prose: inline
 * code, markdown link destinations, URLs, path-like slugs, and protected
 * proper-noun phrases (e.g. registry page titles like "What We Have Measured").
 */
function maskNonProse(s, protectedPhrases = []) {
  let t = String(s);
  for (const phrase of protectedPhrases) {
    if (!phrase) continue;
    t = t.replace(new RegExp(escapeRegex(phrase), 'g'), (m) => ' '.repeat(m.length));
  }
  return t
    .replace(/`[^`]*`/g, (m) => ' '.repeat(m.length))            // inline code
    .replace(/\]\([^)]*\)/g, (m) => '] ' + ' '.repeat(m.length - 2)) // link destinations
    .replace(/\bhttps?:\/\/\S+/g, (m) => ' '.repeat(m.length))   // bare URLs
    .replace(/\/[A-Za-z0-9][\w/-]*/g, (m) => ' '.repeat(m.length)); // path-like slugs
}

/** Registry page titles that contain first-person pronoun words (proper nouns to protect). */
function firstPersonProtectedPhrases(registry) {
  if (!Array.isArray(registry)) return [];
  return registry.map((r) => r && r.title).filter((t) => t && /\b(we|our|ours|us)\b/i.test(t));
}

/** Collect true first-person pronoun hits across authored fields (field + snippet). */
function collectFirstPersonMatches(doc, protectedPhrases = []) {
  const skip = new Set(AUTHORED_SKIP_KEYS);
  const found = [];
  const walk = (v, field) => {
    if (typeof v === 'string') {
      const masked = maskNonProse(v, protectedPhrases);
      const re = /\b(we|our|ours|us)\b/g;
      let m;
      while ((m = re.exec(masked))) {
        const original = v.slice(m.index, m.index + m[0].length);
        if (original === 'US') continue; // country abbreviation
        found.push({
          field: field || '(root)',
          match: original.toLowerCase(),
          snippet: v.slice(Math.max(0, m.index - 35), m.index + m[0].length + 35).replace(/\s+/g, ' ').trim(),
        });
      }
      return;
    }
    if (Array.isArray(v)) { for (const it of v) walk(it, field); return; }
    if (v && typeof v === 'object') {
      for (const k of Object.keys(v)) { if (skip.has(k)) continue; walk(v[k], k); }
    }
  };
  walk(doc, null);
  return found;
}

function addBlocker(out, blocker) {
  out.publicationBlockers = Array.isArray(out.publicationBlockers) ? out.publicationBlockers : [];
  if (!out.publicationBlockers.some((b) => b && b.type === blocker.type)) {
    out.publicationBlockers.push(blocker);
  }
}

/**
 * Deterministically rewrite agency first-person voice to third person across all
 * authored strings. "we"->"Creative Navy", "our(s)"->"Creative Navy's". "us" is
 * only rewritten in the unambiguous "contact us"/"with us"-free agency phrasing;
 * if a first-person pronoun cannot be safely rewritten, a review blocker is added.
 * Mutates and returns `out`.
 */
function enforceThirdPersonVoice(out, registryContext) {
  let uncertain = false;
  const registry = Array.isArray(registryContext) ? registryContext
    : (registryContext && registryContext.registry) || [];
  const protectedPhrases = firstPersonProtectedPhrases(registry);

  const rewrite = (s) => {
    if (typeof s !== 'string' || !s) return s;
    const masked = maskNonProse(s, protectedPhrases);
    if (!/\b(we|our|ours|us)\b/i.test(masked)) return s;

    // Operate on real-prose pronoun positions only (use masked to locate them).
    let result = '';
    let last = 0;
    const re = /\b(we|our|ours|us)\b/gi;
    let m;
    while ((m = re.exec(masked))) {
      const start = m.index;
      const end = re.lastIndex;
      const word = s.slice(start, end); // original-cased token
      const lower = word.toLowerCase();
      result += s.slice(last, start);

      let replacement = null;
      if (lower === 'we') replacement = 'Creative Navy';
      else if (lower === 'our' || lower === 'ours') replacement = "Creative Navy's";
      else if (lower === 'us') {
        // "us" is ambiguous; only rewrite clear agency usage, never "contact us",
        // "tell us", "join us", "with us", "U.S."/"US" (country).
        const before = s.slice(Math.max(0, start - 12), start).toLowerCase();
        const isCountry = word === 'US' || /\bu\.?\s*$/i.test(before);
        const unsafeVerb = /\b(contact|tell|join|email|reach|with|let|show|help|give|ask)\s+$/i.test(before);
        if (isCountry) {
          replacement = null; // leave country abbreviation alone
        } else if (unsafeVerb) {
          uncertain = true; // can't safely rewrite (e.g. "contact us")
          replacement = null;
        } else {
          uncertain = true; // bare first-person "us" — don't guess
          replacement = null;
        }
      }

      result += replacement === null ? word : replacement;
      last = end;
    }
    result += s.slice(last);
    return result;
  };

  const fixed = walkAuthoredStrings(out, rewrite);
  Object.keys(fixed).forEach((k) => { out[k] = fixed[k]; });

  if (uncertain) {
    addBlocker(out, {
      type: 'first_person_voice_uncertainty',
      message: 'Human review required: first-person wording could not be safely rewritten in public authored content.',
      severity: 'blocker',
    });
  }
  return out;
}

// ---------------------------------------------------------------------------
// Locked agency sentence (deterministic, from CANONICAL_STRINGS)
// ---------------------------------------------------------------------------

/**
 * Ensure the exact canonical locked agency sentence appears exactly once at the
 * first Creative Navy introduction in bodyMarkdown. Replaces a near-miss, inserts
 * if missing, and removes later boilerplate repetitions. Mutates and returns out.
 */
function enforceLockedAgencySentence(out, canonicalStrings) {
  const locked = canonicalStrings && canonicalStrings.lockedAgencySentence;
  if (!locked) {
    addBlocker(out, {
      type: 'locked_agency_sentence_missing',
      message: 'Human review required: locked agency sentence is unavailable from canonical strings.',
      severity: 'blocker',
    });
    return out;
  }

  let body = String(out.bodyMarkdown || '');
  const lockedNorm = normQuotes(locked);

  // Count exact occurrences (quote-normalized).
  const exactRe = new RegExp(escapeRegex(lockedNorm), 'g');
  const nbody = normQuotes(body);
  const exactCount = (nbody.match(exactRe) || []).length;

  // Near-miss pattern: an agency intro sentence that is not the exact string.
  const nearMissRe = /Creative Navy is a UX design consultancy[^.]*\./i;

  if (exactCount === 0) {
    if (nearMissRe.test(body)) {
      // Replace the FIRST near miss with the exact canonical sentence.
      body = body.replace(nearMissRe, locked);
    } else {
      // Insert after the first paragraph / first H2 intro area.
      const h2 = body.match(/^##\s+[^\n]*\n+/m);
      if (h2) {
        const idx = body.indexOf(h2[0]) + h2[0].length;
        body = body.slice(0, idx) + locked + '\n\n' + body.slice(idx);
      } else {
        const firstPara = body.match(/^.*?\n\n/s);
        body = firstPara ? body.slice(0, firstPara[0].length) + locked + '\n\n' + body.slice(firstPara[0].length)
                         : locked + '\n\n' + body;
      }
    }
  } else if (exactCount > 1) {
    // Keep the first exact occurrence; remove later ones.
    let seen = false;
    body = body.replace(exactRe, (mm) => {
      if (!seen) { seen = true; return mm; }
      return '';
    });
    body = body.replace(/\n{3,}/g, '\n\n');
  }

  // Remove any remaining near-miss paraphrases (after ensuring the exact exists).
  if (nearMissRe.test(body)) {
    const idxExact = normQuotes(body).indexOf(lockedNorm);
    body = body.replace(new RegExp(nearMissRe.source, 'gi'), (mm, offset) => {
      // keep the exact canonical sentence; drop other agency-intro paraphrases
      return normQuotes(mm) === lockedNorm ? mm : '';
    });
    body = body.replace(/\n{3,}/g, '\n\n');
  }

  out.bodyMarkdown = body.trim() + '\n';
  return out;
}

// ---------------------------------------------------------------------------
// Publication readiness (deterministic)
// ---------------------------------------------------------------------------

function normalizePublicationReadiness(out) {
  out.qualityChecks = out.qualityChecks || {};

  // Idempotent: drop any prior derived readiness marker and recompute fresh so a
  // stale readiness_without_blocker can never perpetuate itself.
  if (Array.isArray(out.publicationBlockers)) {
    out.publicationBlockers = out.publicationBlockers.filter(
      (b) => !(b && b.type === 'readiness_without_blocker'));
  }
  const blockers = Array.isArray(out.publicationBlockers) ? out.publicationBlockers : [];

  if (blockers.length > 0) {
    out.qualityChecks.readyForSanityImport = false;
    return out;
  }

  // No blockers: ready iff all OTHER qualityChecks are true (readiness is derived,
  // not trusted from the model's flag).
  const others = Object.entries(out.qualityChecks).filter(([k]) => k !== 'readyForSanityImport');
  const allOthersTrue = others.every(([, v]) => v === true);
  out.qualityChecks.readyForSanityImport = allOthersTrue;

  // Not ready with no blocker to explain it -> add the explanatory blocker.
  if (!allOthersTrue) {
    addBlocker(out, {
      type: 'readiness_without_blocker',
      message: 'Human review required: readyForSanityImport is false but no publication blocker explains why.',
      severity: 'blocker',
    });
    out.qualityChecks.readyForSanityImport = false;
  }
  return out;
}

// ---------------------------------------------------------------------------
// Shared post-processing pipeline for case studies
// ---------------------------------------------------------------------------

/**
 * The single deterministic authored-content pipeline. Runs after model parse +
 * authoritative fields, before any case-study JSON is written. Returns the
 * processed document.
 */
function enforceAuthoredContentRules(out, srcText, canonicalStrings, registryContext) {
  enforceClassificationBlock(out, srcText);                  // a
  out = enforceRegulatorySourceFidelity(out, srcText);       // b (returns copy)
  enforceThirdPersonVoice(out, registryContext);             // c
  out = canonicalizePhaseNamesDoc(out);                      // d (returns copy)

  // d2. Deterministic method attribution in CN-process sections.
  out.bodyMarkdown = enforceSectionMethodAttribution(out.bodyMarkdown);
  if (detectMethodAttributionIssues(out.bodyMarkdown).length) {
    addBlocker(out, {
      type: 'method_attribution_uncertainty',
      message: 'Human review required: a method reference could not be safely attributed in public bodyMarkdown.',
      severity: 'blocker',
    });
  }

  // d3. Medical-device caveat by structured classification (strong/ambiguous/none).
  enforceMedicalDeviceCaveat(out, srcText, canonicalStrings);

  enforceLockedAgencySentence(out, canonicalStrings);        // e
  normalizeQuestionsForReview(out);                          // f
  normalizePublicationReadiness(out);                        // g
  out = reorderKeyAfter(out, 'questionsForReview', 'publicationBlockers'); // h
  return out;
}

/** Exact standard strings present in the text (case-sensitive substring). */
function detectStandards(text) {
  const s = String(text || '');
  return STANDARD_STRINGS.filter((std) => s.includes(std));
}

/** Both "FDA approval" and "FDA clearance" appear (approval vs clearance both present). */
function detectRegulatoryAmbiguity(text) {
  const s = String(text || '');
  return /FDA approval/i.test(s) && /FDA clearance/i.test(s);
}

/**
 * The single shared source analysis for regulatory specifics. Detection is
 * SOURCE-BASED ONLY — never infers PMA from device type, 510(k) from clearance,
 * or Class II/III from anything else. Used by BOTH the sanitizer and the
 * validator so they cannot disagree.
 */
function analyzeRegulatorySpecificsFromSource(srcText) {
  const s = normQuotes(srcText || '');
  return {
    supportsPma: /\bPMA\b/.test(s),
    supportsPremarketApproval: /premarket approval/i.test(s),
    supports510k: /510\s*\(\s*k\s*\)/i.test(s),
    supportsSubstantialEquivalence: /substantial equivalence/i.test(s),
    supportsClassII: /\bClass\s*II\b/i.test(s),
    supportsClassIII: /\bClass\s*III\b/i.test(s),
    supportsFdaApproval: /FDA approval/i.test(s),
    supportsFdaClearance: /FDA clearance/i.test(s),
    supportsFdaEvaluation: /FDA evaluation/i.test(s),
    hasApprovalClearanceAmbiguity: /FDA approval/i.test(s) && /FDA clearance/i.test(s),
  };
}

// ---------------------------------------------------------------------------
// Canonical string extraction (ground truth = guide files, never hardcoded)
// ---------------------------------------------------------------------------

/** Content of the first fenced code block after a heading matching headingRe. */
function extractFenceAfter(text, headingRe) {
  const hm = text.match(headingRe);
  if (!hm) return null;
  const after = text.slice(hm.index + hm[0].length);
  const fence = after.match(/```[a-z0-9]*\s*\n([\s\S]*?)```/i);
  return fence ? fence[1].trim() : null;
}

/**
 * Extract canonical strings from the combined ground-truth guide text. Canonical
 * strings are COPIED from the guide, never composed. If the locked agency
 * sentence cannot be found, that is recorded in `errors` (a hard stop for live
 * generation).
 */
function loadCanonicalStrings(guideText) {
  const t = normQuotes(guideText || '');
  const lockedAgencySentence = extractFenceAfter(t, /locked agency sentence/i);
  const lockedMethodSentence = extractFenceAfter(t, /locked method sentence/i);

  const caveatM = t.match(/Creative Navy's role is formative evaluation[^.]*\./i);
  const medicalCaveat = caveatM ? caveatM[0].trim() : MEDICAL_CAVEAT_FALLBACK;

  let domainList = [];
  if (lockedAgencySentence) {
    // Domain list is delimited by em/en dashes (NOT hyphens — "AI-enabled" must
    // survive). Use em/en only for the closing delimiter.
    let dm = lockedAgencySentence.match(/high-consequence software\s*[—–]\s*([^—–]+?)\s*[—–]/i);
    if (!dm) dm = lockedAgencySentence.match(/including\s+(.+?)\.?$/i);
    if (dm) {
      domainList = dm[1].replace(/\band\b/gi, ',').split(',')
        .map((x) => x.trim().replace(/[.,;]+$/, '').trim()).filter(Boolean);
    }
  }

  const phaseNames = PHASE_NAME_CANDIDATES.filter((p) => t.includes(p));
  const proprietaryLexiconTerms = PROPRIETARY_TERMS.filter((p) => t.toLowerCase().includes(p.toLowerCase()));
  const standardsConfirmedInGuide = STANDARD_STRINGS.filter((s) => t.includes(s));

  const errors = [];
  if (!lockedAgencySentence) errors.push('lockedAgencySentence not found in ground-truth guide material.');

  return {
    lockedAgencySentence,
    lockedMethodSentence,
    medicalCaveat,
    phaseNames,
    proprietaryLexiconTerms,
    exactStandardDesignations: STANDARD_STRINGS.slice(),
    standardsConfirmedInGuide,
    domainList,
    errors,
  };
}

/**
 * Regulated medical-device cue. Strong triggers fire alone; specific device
 * terms fire only alongside a genuine medical anchor. Generic terms (device,
 * FDA, clinical, patient, healthcare, pharma) never fire on their own.
 * Returns { require, uncertain, reason, strongHit, deviceHits, medAnchor }.
 */
function medicalDeviceCue(srcText, body, doc) {
  const extra = doc
    ? ` ${doc.sourcePath || ''} ${doc.parentSlug || ''} ${doc.title || ''} ${(doc.tags || []).join(' ')}`
    : '';
  const medHay = normQuotes(`${srcText || ''}\n${body || ''}${extra}`).toLowerCase();

  const STRONG = [
    'iec 62366-1', 'iec 62366', 'medical device', 'mcs controller',
    'controller for a medical device', 'surgical device', 'device controller',
    'summative validation', 'formative usability study under iec 62366',
    'use-related hazard', "manufacturer's responsibility",
    'regulatory submission for a device', 'fda clearance for a device',
    'fda approval for a device',
  ];
  const strongHit = STRONG.find((t) => medHay.includes(t)) || null;

  const SPECIFIC_DEVICE = ['controller', 'surgical', 'mcs', 'device controller', 'use-related hazard', 'formative usability'];
  const deviceHits = SPECIFIC_DEVICE.filter((t) =>
    /[\s-]/.test(t) ? medHay.includes(t) : new RegExp(`\\b${t}\\b`, 'i').test(medHay));

  const MED_ANCHORS = ['medical', 'clinical', 'patient', 'surgical', 'hospital',
    'doctor', 'nurse', 'icu', 'cath lab', 'healthcare', 'health'];
  const medAnchor = MED_ANCHORS.some((t) => medHay.includes(t));

  let require = false;
  let uncertain = false;
  let reason = '';
  if (strongHit) {
    require = true; reason = `strong trigger "${strongHit}"`;
  } else if (deviceHits.length >= 1 && medAnchor) {
    require = true; reason = `device term(s) (${deviceHits.join(', ')}) in a medical context`;
  } else if (deviceHits.length >= 1) {
    uncertain = true; reason = `device term(s) (${deviceHits.join(', ')}) but no clear medical context`;
  }
  return { require, uncertain, reason, strongHit, deviceHits, medAnchor };
}

/**
 * Compute the publicationBlocker types the source deterministically requires.
 * Returns [{ type, requirePrefix, messageHint }].
 */
function requiredBlockersFromSource(srcText) {
  const required = [];
  const cls = extractClassification(srcText);
  if (cls.state === 'absent') {
    required.push({ type: 'classification_missing', requirePrefix: true, messageHint: 'Human review required: source has no Classification block.' });
  } else if (cls.state === 'deferred') {
    required.push({ type: 'classification_deferred_connects_to', requirePrefix: true, messageHint: 'Human review required: "Connects to" is deferred to repository integration.' });
  } else if (cls.state === 'partial') {
    required.push({ type: 'classification_incomplete', requirePrefix: true, messageHint: 'Human review required: Classification block is incomplete.' });
  }

  // Regulatory term ambiguity is NOT auto-required as a publicationBlocker.
  // Per source-fidelity rules it is handled via questionsForReview unless the
  // model itself declares it publication-blocking.
  return required;
}

function validateCaseStudyDoc(doc, srcText, ctx) {
  const errors = [];
  const warnings = [];
  const handback = [];
  const E = (check, message) => errors.push({ check, message });
  const W = (check, message) => warnings.push({ check, message });

  const canonical = (ctx && ctx.canonical) || {};
  const body = String(doc.bodyMarkdown || '');
  const nbody = normQuotes(body);
  const claims = Array.isArray(doc.claims) ? doc.claims : [];
  const limitations = Array.isArray(doc.limitations) ? doc.limitations : [];
  const relatedSlugs = Array.isArray(doc.relatedPageSlugs) ? doc.relatedPageSlugs : [];
  const linkSlugs = Array.isArray(doc.internalLinks)
    ? doc.internalLinks.map((l) => l && l.targetSlug).filter(Boolean) : [];

  // 1. Locked agency sentence (exact canonical string, extracted from the guide)
  const lockedSentence = canonical.lockedAgencySentence;
  if (!lockedSentence) {
    W('1 Locked agency sentence', 'No canonical lockedAgencySentence available to validate against.');
  } else {
    const occurrences = nbody.split(normQuotes(lockedSentence)).length - 1;
    if (occurrences === 0) {
      // Near-miss detection: present in spirit but not exact.
      if (/Creative Navy is a UX design consultancy/i.test(body)) {
        E('1 Locked agency sentence', 'bodyMarkdown has a NEAR-MISS of the locked agency sentence (paraphrase/shorter/expanded); the exact canonical string is required at first introduction.');
      } else {
        E('1 Locked agency sentence', 'bodyMarkdown is missing the exact canonical locked agency sentence at first introduction.');
      }
    } else if (occurrences > 1) {
      // The locked sentence is for the first introduction only; later sections
      // use shorter entity anchors, not the boilerplate paragraph verbatim.
      E('1 Locked agency sentence', `Locked agency sentence appears ${occurrences} times; it must appear exactly once at first introduction (no boilerplate repetition).`);
    }
  }

  // 1b. Method attribution — shared section parser (same as post-processing).
  // Only flags CN-process sections that use a bare method reference (not a
  // client/third-party method) without naming Creative Navy's method.
  for (const issue of detectMethodAttributionIssues(body)) {
    E('1b Method attribution', `A substantive section ("${(issue.heading || '').slice(0, 50)}…") uses "the method/approach/framework" without first naming "${METHOD_CANON}": "…${issue.snippet}…"`);
  }

  // 1c. Phase name exact spelling/casing — WHOLE-WORD only (consistent with the
  // canonicalizer), so a generic plural like "implementation partnerships" is not
  // treated as a phase variant.
  const phaseNames = (canonical.phaseNames && canonical.phaseNames.length) ? canonical.phaseNames : PHASE_NAME_CANDIDATES;
  for (const phase of phaseNames) {
    const ci = new RegExp(`\\b${escapeRegex(phase)}\\b`, 'ig');
    let pm;
    while ((pm = ci.exec(body))) {
      if (pm[0] !== phase) {
        E('1c Phase names', `Phase name variant "${pm[0]}" found; canonical form is "${phase}".`);
        break;
      }
    }
  }
  if (/\bOrganisational Integration\b/.test(body)) {
    E('1c Phase names', 'British "Organisational Integration" found; canonical form keeps the z: "Organizational Integration".');
  }

  // 2. Retired name
  if (new RegExp(escapeRegex(RETIRED_NAME), 'i').test(body)) {
    E('2 Retired name', `bodyMarkdown contains the retired name "${RETIRED_NAME}".`);
  }

  // 3. Voice — scan ALL authored fields via the shared first-person collector
  // (ignores code/links/slugs/paths, the country "US", and protected proper-noun
  // page titles such as "What We Have Measured"). One error per field.
  const protectedPhrases = firstPersonProtectedPhrases(ctx && ctx.registry);
  const fpSeen = new Set();
  for (const hit of collectFirstPersonMatches(doc, protectedPhrases)) {
    if (fpSeen.has(hit.field)) continue;
    fpSeen.add(hit.field);
    E('3 Voice', `${hit.field} uses first-person pronoun "${hit.match}": "…${hit.snippet}…"`);
  }
  for (const p of SOFT_ENTITY_PHRASES) {
    if (new RegExp(`\\b${escapeRegex(p)}\\b`, 'i').test(body)) {
      W('3 Voice', `bodyMarkdown uses impersonal entity phrase "${p}".`);
    }
  }

  // 4. British spelling (ignore the proper noun "Organizational Integration")
  const spellingText = body.replace(/Organizational Integration/g, '');
  for (const w of AMERICAN_SPELLINGS) {
    if (hasWholeWord(spellingText, w)) W('4 British spelling', `American spelling "${w}" found.`);
  }

  // 5. Medical-device caveat — uses the SHARED structured classifier (same as
  // post-processing). Only a STRONG regulated-device case requires the caveat;
  // ambiguous never fails; none never requires it. Incidental/negated/comparative
  // medical wording and the locked agency sentence never trigger it.
  const canonicalCaveat = canonical.medicalCaveat || MEDICAL_CAVEAT_FALLBACK;
  const hasCaveat = normQuotes(nbody).includes(normQuotes(canonicalCaveat));
  const medClass = classifyMedicalDeviceCase(doc, srcText);
  if (medClass.confidence === 'strong' && !hasCaveat) {
    E('5 Medical-device caveat', `Regulated medical-device case (${medClass.reasons.join('; ')}) but the exact formative/summative caveat is missing.`);
  } else if (medClass.confidence === 'ambiguous' && !hasCaveat) {
    W('5 Medical-device caveat', `Medical-device classification is ambiguous (${medClass.reasons.join('; ')}); caveat not required unless confirmed.`);
  }

  // 6. Regulatory result calibration + FDA term resolver
  for (const c of claims) {
    const ctext = normQuotes(`${c && c.claim || ''} ${c && c.notes || ''}`);
    const isReg = REG_RESULT_PHRASES.some((p) => new RegExp(escapeRegex(p), 'i').test(ctext));
    if (isReg && String(c && c.evidenceType || '').toLowerCase() === 'measured') {
      E('6 Regulatory calibration', `Regulatory claim has evidenceType "measured": "${String(c.claim || '').slice(0, 80)}".`);
    }
  }
  const regInBody = REG_RESULT_PHRASES.some((p) => new RegExp(escapeRegex(p), 'i').test(body));
  const causalRe = /\b(because of the design|as a result of the design|the design (led to|caused|resulted in|drove|delivered)|proved that|proof that|caused the|measured outcome|demonstrat\w* that the design)\b/i;
  // Only warn for an UNcalibrated causal/measured framing. A causal phrase inside
  // a sentence that also carries a negation/calibration marker ("not a measured
  // outcome", "not proof that … caused …", "rather than") is correct and must not
  // be flagged. Evaluate at sentence granularity.
  const negationRe = /\b(not|neither|never|rather than|no)\b|n['’]t/i;
  let causalUncalibrated = false;
  for (const sentence of body.split(/(?<=[.!?])\s+|\n+/)) {
    if (!causalRe.test(sentence)) continue;
    if (negationRe.test(sentence)) continue; // calibrated/negated framing
    causalUncalibrated = true;
    break;
  }
  if (regInBody && causalUncalibrated) {
    W('6 Regulatory calibration', 'A regulatory result appears framed as a measured outcome or as proof the design caused it.');
  }

  // FDA / pathway source fidelity: scan the ENTIRE generated JSON (not just
  // bodyMarkdown) using the SHARED analyzer. Any unsupported regulatory specific
  // anywhere in authored content is a failure. Identity/link fields are skipped.
  const reg = analyzeRegulatorySpecificsFromSource(srcText);
  const regChecks = [];
  if (!reg.supportsPma) regChecks.push(['PMA', /\bPMA\b/]);
  if (!reg.supportsPremarketApproval) regChecks.push(['premarket approval', /premarket approval/i]);
  if (!reg.supports510k) regChecks.push(['510(k)', /510\s*\(\s*k\s*\)/i]);
  if (!reg.supportsSubstantialEquivalence) regChecks.push(['substantial equivalence', /substantial equivalence/i]);
  if (!reg.supportsClassII) regChecks.push(['Class II', /\bClass\s*II\b/]);
  if (!reg.supportsClassIII) regChecks.push(['Class III', /\bClass\s*III\b/]);
  for (const [label, re] of regChecks) {
    const found = collectAuthoredStringMatches(doc, re);
    if (found.length) {
      const f = found[0];
      E('6 Regulatory fidelity', `Source does not support "${label}" but it appears in ${f.field}: "…${f.snippet}…"`);
    }
  }

  // 6b. Kardion no-regression assertion (redundant with 6, but explicit).
  if (((doc.slug && doc.slug.current) || '') === 'kardion') {
    const leaks = [];
    for (const [label, re] of regChecks) {
      if (collectAuthoredStringMatches(doc, re).length) leaks.push(label);
    }
    if (leaks.length) {
      E('6b Kardion no-regression', `Kardion authored content contains source-unsupported regulatory term(s): ${leaks.join(', ')}. These must never survive in kardion.json.`);
    }
  }

  // 7. Inline evidence calibration (lenient: warn once)
  const figureRe = /\b\d+(?:\.\d+)?\s?(?:%|x\b)/i;
  const outcomeRe = /\b(reduc|increas|decreas|improv|fewer|faster|slower|cut|sav(?:ed|ing)|grew|rose|fell|boost|gain)/i;
  const hasFigures = figureRe.test(body) || (/\d/.test(body) && outcomeRe.test(body));
  const hasEvidenceLabel = CANONICAL_EVIDENCE_LABELS.some((l) => body.toLowerCase().includes(l.toLowerCase()));
  if (hasFigures && !hasEvidenceLabel) {
    W('7 Inline evidence', 'Figures/outcomes present but no canonical evidence label (e.g. field-measured, client-reported) found nearby.');
  }

  // 8. Proprietary lexicon — grounded terms should appear in section prose,
  // not only in a closing list / tags / metadata.
  const lexicon = (canonical.proprietaryLexiconTerms && canonical.proprietaryLexiconTerms.length)
    ? canonical.proprietaryLexiconTerms : PROPRIETARY_TERMS;
  const groundedTerms = lexicon.filter((t) => srcText.toLowerCase().includes(t.toLowerCase()));
  const proseLower = body.split(/\n/).filter((ln) => !/^\s*[-*+]\s/.test(ln)).join('\n').toLowerCase();
  for (const t of groundedTerms) {
    const tl = t.toLowerCase();
    if (!body.toLowerCase().includes(tl)) {
      W('8 Proprietary lexicon', `Source uses proprietary term "${t}" but it does not appear in bodyMarkdown.`);
    } else if (!proseLower.includes(tl)) {
      W('8 Proprietary lexicon', `Proprietary term "${t}" appears only in a list, not in section prose.`);
    }
  }

  // 9. Classification block — compare against the DETERMINISTIC section built
  // from source (the model does not author it). Normalize only line endings and
  // surrounding whitespace; do not require Classification to appear in prose.
  const cls = extractClassification(srcText);
  if (cls.state !== 'absent') {
    const expected = buildClassificationSection(cls);
    const norm = (s) => normQuotes(s).replace(/\r\n/g, '\n').replace(/[ \t]+\n/g, '\n').trim();
    if (!norm(body).includes(norm(expected))) {
      E('9 Classification block', 'bodyMarkdown does not contain the exact deterministic Classification section built from source.');
    }
    if (cls.connectsTo && /\/contexts\//i.test(cls.connectsTo)) {
      E('9 Classification block', '"Connects to" contains a /contexts/ slug; context slugs belong only in Primary context / Also-relevant contexts.');
    }
    if (cls.primaryCategory && /^\/evidence\/?$/.test(cls.primaryCategory.trim())) {
      E('9 Classification block', 'Primary case-study category is the parent "/evidence"; a specific bucket is required (e.g. /evidence/case-studies/medical).');
    }
  }

  // 10. Scaffolding
  for (const term of SCAFFOLDING) {
    let hit = false;
    if (term.includes('|') || term.includes('/')) {
      hit = body.includes(term);
    } else {
      const heading = new RegExp(`^#{1,6}\\s*${escapeRegex(term)}\\b`, 'im');
      const labelLine = new RegExp(`^\\*{0,2}${escapeRegex(term)}\\*{0,2}\\s*:?\\s*$`, 'im');
      hit = heading.test(body) || labelLine.test(body);
    }
    if (hit) E('10 Scaffolding', `Scaffolding heading/header found: "${term}".`);
  }

  // 11. Human handback — only when SOURCE leaves publication permission
  // genuinely UNRESOLVED. "do not name X; abstract to roles" or "can be named:
  // yes" are RESOLVED instructions and must not trigger. The "Human review
  // required:" wording belongs in publicationBlockers, NOT public limitations.
  for (const phrase of HANDBACK_PHRASES) {
    if (`${srcText}\n${body}`.toLowerCase().includes(phrase.toLowerCase())) handback.push(phrase);
  }
  const UNRESOLVED_HANDBACK_RE = /(permission unconfirmed|naming unconfirmed|not cleared\b|uncleared\b|confirm before publication|do not publish|requires? (human )?review before publication|prime undisclosed|site undisclosed|plant undisclosed)/i;
  const resolvedNaming = /(can be named:?\s*[^.\n]*\byes\b|may be named|abstract to roles|anonymis|anonymiz|safe to publish|cleared for publication)/i.test(srcText);
  if (UNRESOLVED_HANDBACK_RE.test(srcText) && !resolvedNaming) {
    const hasBlocker = Array.isArray(doc.publicationBlockers) && doc.publicationBlockers.length > 0;
    const notReady = doc.qualityChecks && doc.qualityChecks.readyForSanityImport === false;
    if (!(hasBlocker && notReady)) {
      W('11 Human handback', 'Source leaves publication permission unresolved but no publicationBlocker with readyForSanityImport=false covers it.');
    }
  }

  // 12. Links to mentioned case studies
  const regItem = (doc.slug && doc.slug.current && ctx.bySlug.get(doc.slug.current)) || null;
  if (regItem) {
    const mentioned = buildMentionedCaseStudies(body, regItem, ctx);
    const linked = new Set([...relatedSlugs, ...linkSlugs]);
    for (const m of mentioned) {
      if (!linked.has(m.slug)) {
        W('12 Links', `Mentions case study "${m.name}" (${m.slug}) but it is not in relatedPageSlugs or internalLinks.`);
      }
    }
  }

  // 13. Duplicate H2 headings
  const h2 = [];
  const h2re = /^##\s+(.+?)\s*$/gm;
  let hm;
  while ((hm = h2re.exec(body))) h2.push(hm[1].trim().toLowerCase());
  const dupes = h2.filter((h, i) => h2.indexOf(h) !== i);
  for (const d of [...new Set(dupes)]) {
    W('13 Duplicate sections', `Duplicate H2 heading: "${d}".`);
  }

  // 14. Standard designation fidelity (no auto-upgrade, no invention, no downgrade)
  const srcHasV1 = /IEC 62366-1/.test(srcText);
  const srcHasBare62366 = /IEC 62366(?!-1)/.test(srcText);
  const bodyHasV1 = /IEC 62366-1/.test(body);
  const bodyHasBare62366 = /IEC 62366(?!-1)/.test(body);

  // Fail: body invents the more specific designation absent from source.
  if (bodyHasV1 && srcHasBare62366 && !srcHasV1) {
    E('14 Standard strings', 'bodyMarkdown uses "IEC 62366-1" but the source only says "IEC 62366"; do not upgrade the designation.');
  }
  // Fail: body downgrades a specific source designation to the family form.
  if (srcHasV1 && !srcHasBare62366 && bodyHasBare62366 && !bodyHasV1) {
    E('14 Standard strings', 'bodyMarkdown downgrades "IEC 62366-1" to bare "IEC 62366"; preserve the specific source designation.');
  }
  // Source has BOTH forms: route the version choice through questionsForReview.
  if (srcHasV1 && srcHasBare62366) {
    const qfr = (Array.isArray(doc.questionsForReview) ? doc.questionsForReview : []).join('\n');
    if (!/IEC 62366/i.test(qfr)) {
      W('14 Standard strings', 'Source uses both "IEC 62366" and "IEC 62366-1"; consider noting the version ambiguity in questionsForReview.');
    }
  }
  // Informational: a tracked exact designation the body drops entirely.
  for (const std of detectStandards(srcText)) {
    if (!body.includes(std)) {
      W('14 Standard strings', `Source cites "${std}" but bodyMarkdown does not preserve the exact designation.`);
    }
  }

  // 14b. Engagement facts are recorded/observed, not measured.
  const engagementRe = /\b(iteration|sprint|support volume|response time|phase duration|option count|design decision)\b/i;
  for (const c of claims) {
    const ctext = `${c && c.claim || ''} ${c && c.notes || ''}`;
    if (engagementRe.test(ctext) && String(c && c.evidenceType || '').toLowerCase() === 'measured') {
      W('14b Evidence calibration', `Engagement fact labelled "measured" should be Creative Navy-recorded/observed: "${String(c.claim || '').slice(0, 70)}".`);
    }
  }

  // 16. Published pageType must be case-study, not case-study-notes.
  if (doc.pageType === 'case-study-notes') {
    E('16 Page type', 'Published pageType is "case-study-notes"; it must be normalized to "case-study".');
  }

  // 15. publicationBlockers + readiness consistency
  const blockers = Array.isArray(doc.publicationBlockers) ? doc.publicationBlockers : [];
  const blockerTypes = new Set(blockers.map((b) => b && b.type).filter(Boolean));

  // source_missing is invalid when the source actually exists. The build
  // pipeline fails before generation if the source is genuinely missing, so a
  // generated page must never carry this blocker.
  if (srcText && srcText.trim().length > 0 && blockerTypes.has('source_missing')) {
    E('15 Publication blockers', 'publicationBlockers contains "source_missing" but CURRENT_SOURCE_MD exists; the model must not emit source_missing when a source was provided.');
  }

  const expected = requiredBlockersFromSource(srcText);
  for (const req of expected) {
    if (!blockerTypes.has(req.type)) {
      E('15 Publication blockers', `Source requires a publicationBlocker of type "${req.type}" but it is missing. (${req.messageHint})`);
    } else if (req.requirePrefix) {
      const match = blockers.find((b) => b && b.type === req.type);
      if (!normQuotes(String(match && match.message || '')).startsWith(HUMAN_REVIEW_PREFIX)) {
        W('15 Publication blockers', `publicationBlocker "${req.type}" message should begin with "${HUMAN_REVIEW_PREFIX}".`);
      }
    }
  }

  const ready = doc.qualityChecks ? doc.qualityChecks.readyForSanityImport : undefined;
  if (ready === false && blockers.length === 0) {
    E('15 Publication blockers', 'readyForSanityImport is false but publicationBlockers is empty.');
  }
  if (blockers.length > 0 && ready === true) {
    E('15 Publication blockers', 'publicationBlockers is non-empty but readyForSanityImport is true.');
  }
  // A blocker the validator did not independently re-detect may still be a
  // legitimate SOURCE-GROUNDED handback blocker (e.g. evidence_confirmation_
  // required). Do not warn merely because it cannot be reconstructed — instead
  // validate its shape: type + message beginning "Human review required:" +
  // readyForSanityImport false. Only a MALFORMED blocker warns.
  const expectedTypes = new Set(expected.map((e) => e.type));
  for (const b of blockers) {
    if (!b || expectedTypes.has(b.type)) continue;
    const shapeOk = b.type && b.message && b.severity === 'blocker';
    const prefixed = normQuotes(String(b.message || '')).startsWith(HUMAN_REVIEW_PREFIX);
    if (!shapeOk || !prefixed) {
      W('15 Publication blockers', `publicationBlocker "${b.type || '(no type)'}" is malformed: it must have type + severity:"blocker" + a message beginning "${HUMAN_REVIEW_PREFIX}".`);
    }
  }

  // 17. questionsForReview is internal metadata and must not be published.
  if (/^#{1,6}[ \t]*questions[ \t]+for[ \t]+review\b/im.test(body) ||
      /^\*{0,2}questions[ \t]+for[ \t]+review\*{0,2}[ \t]*:?[ \t]*$/im.test(body)) {
    E('17 Questions for review', 'bodyMarkdown contains a public "QUESTIONS FOR REVIEW" section; questionsForReview is internal metadata and must not be published.');
  }
  // questionsForReview: ["None"] is allowed (means no open questions). Warn only
  // when real questions coexist with readyForSanityImport=true AND there are
  // publicationBlockers (i.e. not the normal "no blockers, non-blocking" case).
  const qfr = Array.isArray(doc.questionsForReview) ? doc.questionsForReview : [];
  const realQuestions = qfr.filter((q) => String(q).trim() && String(q).trim().toLowerCase() !== 'none');
  // Non-blocking questions alongside readyForSanityImport=true are ALLOWED (no
  // blockers); surface them as a warning, not a failure.
  if (realQuestions.length && ready === true) {
    W('17 Questions for review', `readyForSanityImport is true with ${realQuestions.length} open non-blocking question(s) in questionsForReview; review before import.`);
  }

  return {
    errors,
    warnings,
    handback,
    blockers,
    expectedBlockerTypes: expected.map((e) => e.type),
  };
}

/**
 * Migrate legacy flat output (generated/articles_json/<slug>.json) into the new
 * mirrored tree (generated/articles/<source-subdir>/<slug>.json). No OpenAI.
 * Refuses to overwrite an existing destination unless --overwrite is passed.
 */
function runMigrateGeneratedStructure() {
  const registry = readJson(REGISTRY_PATH);
  if (!Array.isArray(registry)) throw new Error('Registry is not a JSON array.');

  const moved = [];
  const conflicted = [];
  const missing = [];
  const skipped = [];

  for (const item of registry) {
    const slug = item.slug;
    const legacyPath = path.join(LEGACY_OUTPUT_DIR, `${slug}.json`);
    const newPath = getGeneratedOutputPath(item);

    if (!fs.existsSync(legacyPath)) {
      // Nothing legacy to move. Already migrated if the new file is present.
      if (fs.existsSync(newPath)) skipped.push(slug);
      else missing.push(slug);
      continue;
    }
    if (path.resolve(legacyPath) === path.resolve(newPath)) { skipped.push(slug); continue; }

    if (fs.existsSync(newPath) && !OVERWRITE) {
      conflicted.push({ slug, newPath: relToRoot(newPath) });
      continue;
    }
    fs.mkdirSync(path.dirname(newPath), { recursive: true });
    fs.renameSync(legacyPath, newPath);
    moved.push({ slug, from: relToRoot(legacyPath), to: relToRoot(newPath) });
    console.log(`  moved: ${relToRoot(legacyPath)} -> ${relToRoot(newPath)}`);
  }

  console.log('\n--- Migration summary ---');
  console.log(`moved:      ${moved.length}`);
  console.log(`conflicted: ${conflicted.length}${conflicted.length ? ' (use --overwrite to replace)' : ''}`);
  for (const c of conflicted) console.log(`    conflict: ${c.slug} -> ${c.newPath} already exists`);
  console.log(`skipped:    ${skipped.length} (no legacy file / already in place)`);
  console.log(`missing:    ${missing.length} (registry entry with no generated file)`);
  return conflicted.length > 0 ? 1 : 0;
}

/**
 * Apply the deterministic authored-content pipeline to existing generated
 * case-study JSON files WITHOUT calling OpenAI. This is an explicit, opt-in
 * command (safer than silently mutating files during --validate-case-studies):
 * it only runs when the user asks, leaving validation read-only.
 */
function runRepairCaseStudies() {
  const ctx = loadContext();
  const files = listGeneratedJsonFiles();
  if (!files.length) {
    console.log(`No generated article JSON found under ${relToRoot(OUTPUT_ROOT)}/. Nothing to repair.`);
    return 0;
  }
  let repaired = 0;
  let skipped = 0;
  for (const readPath of files) {
    let doc;
    try {
      doc = JSON.parse(fs.readFileSync(readPath, 'utf8'));
    } catch {
      console.warn(`  ! ${relToRoot(readPath)}: unparseable JSON — skipped`);
      continue;
    }
    if (!CASE_STUDY_TYPES.includes(doc.pageType || '')) { skipped++; continue; }

    // Writing always uses the new mirrored path; migrate-on-repair if needed.
    const writePath = getGeneratedOutputPath(doc);
    const writeAndMaybeMigrate = (d) => {
      fs.mkdirSync(path.dirname(writePath), { recursive: true });
      fs.writeFileSync(writePath, JSON.stringify(d, null, 2) + '\n', 'utf8');
      if (path.resolve(readPath) !== path.resolve(writePath) && fs.existsSync(readPath)) {
        fs.unlinkSync(readPath); // remove legacy copy after migrating
        console.log(`      migrated ${relToRoot(readPath)} -> ${relToRoot(writePath)}`);
      }
    };

    const resolved = resolveDocSource(doc, ctx);
    if (!resolved.abs) {
      addBlocker(doc, {
        type: 'source_unavailable_for_repair',
        message: 'Human review required: source notes could not be resolved, so deterministic repair was skipped.',
        severity: 'blocker',
      });
      normalizePublicationReadiness(doc);
      writeAndMaybeMigrate(doc);
      console.warn(`  ! ${(doc.slug && doc.slug.current) || relToRoot(readPath)}: source unavailable — wrote source_unavailable_for_repair blocker`);
      continue;
    }
    const out = enforceAuthoredContentRules(doc, resolved.srcText, ctx.canonical || {}, ctx.registry);
    writeAndMaybeMigrate(out);
    repaired++;
    console.log(`  ~ repaired: ${(out.slug && out.slug.current) || relToRoot(readPath)} -> ${relToRoot(writePath)}`);
  }
  console.log(`\nRepair complete. Repaired ${repaired} case-study page(s); skipped ${skipped} non-case-study page(s).`);
  return 0;
}

function runCaseStudyValidator() {
  const ctx = loadContext();
  // Recursively discover generated article JSON under generated/articles/**/*.json
  // (plus any not-yet-migrated legacy files).
  const files = listGeneratedJsonFiles();
  if (!files.length) {
    console.log(`No generated article JSON found under ${relToRoot(OUTPUT_ROOT)}/. Nothing to validate.`);
    return 0;
  }

  let checked = 0;
  let totalErrors = 0;
  let totalWarnings = 0;
  const pageReports = [];
  const blockerReport = [];
  const handbackReport = [];

  for (const filePath of files) {
    let doc;
    try {
      doc = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    } catch {
      continue; // can't determine pageType from unparseable JSON
    }
    if (!CASE_STUDY_TYPES.includes(doc.pageType || '')) continue;

    checked++;
    const slug = (doc.slug && doc.slug.current) || doc.title || path.basename(filePath);

    // Same source resolution as generation (shared helper, registry fallback).
    const resolved = resolveDocSource(doc, ctx);
    const srcText = resolved.srcText;

    const { errors, warnings, handback, blockers } = validateCaseStudyDoc(doc, srcText, ctx);
    if (!srcText) {
      warnings.push({
        check: 'source',
        message: 'Source markdown not found; source-based checks (8, 9, 11, 14, 15) limited. ' +
          `slug=${resolved.slug || '(none)'}; doc.sourcePath=${resolved.sourcePath || '(none)'}; ` +
          `doc.sourceFile=${resolved.sourceFile || '(none)'}; registry.source_file=${resolved.registrySourceFile || '(none)'}; ` +
          `tried=[${resolved.tried.join(' | ')}]`,
      });
    }

    totalErrors += errors.length;
    totalWarnings += warnings.length;
    pageReports.push({ slug, file: relToRoot(filePath), errors, warnings });
    if (blockers && blockers.length) blockerReport.push({ slug, blockers });
    if (handback.length) handbackReport.push({ slug, flags: handback });
  }

  // ---- report --------------------------------------------------------------
  console.log('========================================');
  console.log('Case-study validation');
  console.log('========================================');
  console.log(`Case study pages checked: ${checked}`);
  console.log(`Total errors:   ${totalErrors}`);
  console.log(`Total warnings: ${totalWarnings}`);

  if (checked === 0) {
    console.log('\nNo case-study or case-study-notes pages found under generated/articles/.');
    return 0;
  }

  console.log('\n--- Per-page findings ---');
  for (const p of pageReports) {
    if (!p.errors.length && !p.warnings.length) {
      console.log(`\n✓ ${p.slug} — clean`);
      continue;
    }
    console.log(`\n${p.errors.length ? '✗' : '!'} ${p.slug}  (errors: ${p.errors.length}, warnings: ${p.warnings.length})`);
    for (const e of p.errors) console.log(`    ERROR [${e.check}] ${e.message}`);
    for (const w of p.warnings) console.log(`    WARN  [${w.check}] ${w.message}`);
  }

  console.log('\n--- Publication blockers ---');
  if (!blockerReport.length) {
    console.log('  (none declared)');
  } else {
    for (const b of blockerReport) {
      console.log(`  ${b.slug}:`);
      for (const blk of b.blockers) {
        console.log(`    - type: ${blk && blk.type || '(none)'}`);
        console.log(`      severity: ${blk && blk.severity || '(none)'}`);
        console.log(`      message: ${blk && blk.message || '(none)'}`);
      }
    }
  }

  console.log('\n--- Human handback flags ---');
  if (!handbackReport.length) {
    console.log('  (none detected)');
  } else {
    for (const h of handbackReport) {
      console.log(`  ${h.slug}: ${[...new Set(h.flags)].join('; ')}`);
    }
  }

  // ---- lint_case_studies.py gate ------------------------------------------
  console.log('\n--- lint_case_studies.py ---');
  const lint = runLintCaseStudies();
  console.log(`  ${lint.note}`);
  const lintFailed = lint.ran && lint.exitCode !== 0;

  const failed = totalErrors > 0 || lintFailed;
  console.log(`\nResult: ${failed ? 'FAIL' : 'PASS'} (exit ${failed ? 1 : 0})`);
  return failed ? 1 : 0;
}

/**
 * Run the deterministic Python classification gate if present. Never fails the
 * run if the script or python is unavailable — only reports a clear note.
 */
function runLintCaseStudies() {
  if (!fs.existsSync(LINT_SCRIPT)) {
    return { ran: false, exitCode: null, note: 'lint_case_studies.py not found — skipped.' };
  }
  const py = spawnSync('python3', [LINT_SCRIPT, ROOT], { encoding: 'utf8' });
  if (py.error) {
    return { ran: false, exitCode: null, note: `python3 unavailable (${py.error.code || py.error.message}) — skipped.` };
  }
  const tail = String(py.stdout || py.stderr || '').trim().split('\n').slice(-3).join(' | ');
  return {
    ran: true,
    exitCode: py.status,
    note: `exit ${py.status} ${py.status === 0 ? '(clean)' : '(violations — case studies not complete)'}${tail ? ` — ${tail}` : ''}`,
  };
}

// ===========================================================================
// Main
// ===========================================================================

/**
 * Write the fully-rendered prompt(s) that live generation would send, without
 * calling OpenAI. Used by --debug-prompt. Returns an exit code.
 */
function runDebugPrompt() {
  const ctx = loadContext();
  let targets;
  if (TARGET_SLUG) {
    const item = ctx.bySlug.get(TARGET_SLUG);
    if (!item) {
      console.error(`Error: --slug "${TARGET_SLUG}" was not found in the registry.`);
      return 1;
    }
    targets = [item];
  } else {
    targets = pickTestPages(ctx.registry).map((s) => s.item);
  }

  ensureDir(DEBUG_PROMPT_DIR);
  let code = 0;
  for (const item of targets) {
    const payload = buildPagePayload(ctx, item);
    if (!payload.ok) {
      console.error(`  ✗ ${item.slug}: ${payload.message}`);
      code = 1;
      continue;
    }
    const outPath = path.join(DEBUG_PROMPT_DIR, `${item.slug}.prompt.txt`);
    fs.writeFileSync(outPath, payload.filled, 'utf8');
    const pf = preflightErrors(payload, item, ctx.canonical);
    console.log(`  ~ debug-prompt: ${item.slug} -> ${relToRoot(outPath)} (${payload.filled.length} chars)`);
    console.log(`      blocks injected: CURRENT_SOURCE_MD=${payload.filled.includes(payload.sourceMd.slice(0, 60))}, ` +
      `CANONICAL_STRINGS=${payload.filled.includes('[CANONICAL_STRINGS]')}, ` +
      `missingPlaceholders=${JSON.stringify(payload.missingPlaceholders)}`);
    if (pf.length) {
      console.log(`      preflight would FAIL (${pf.length}): ${pf.join(' | ')}`);
      code = 1;
    }
  }
  return code;
}

/**
 * Load everything the generator needs (registry, indexes, resolver, guides,
 * site-structure map, prompt template) into a single ctx object. Exported so
 * the resolution/linking logic can be exercised programmatically (e.g. tests).
 */
function loadContext() {
  const registry = readJson(REGISTRY_PATH);
  if (!Array.isArray(registry)) throw new Error('Registry is not a JSON array.');

  const bySlug = new Map();
  for (const r of registry) bySlug.set(r.slug, r);
  bySlug.__all = registry;

  const byCategory = new Map();
  for (const r of registry) {
    if (!byCategory.has(r.category)) byCategory.set(r.category, []);
    byCategory.get(r.category).push(r);
  }

  const allMdAbs = walkMd(ARTICLES_DIR);
  const resolveSource = makeSourceResolver(allMdAbs);

  const guideFiles = walkMd(GUIDANCE_DIR);
  const guides = guideFiles
    .map((f) => `--- ${path.basename(f)} ---\n${fs.readFileSync(f, 'utf8')}`)
    .join('\n\n');

  const siteFiles = fs.existsSync(SITE_STRUCT_DIR)
    ? fs.readdirSync(SITE_STRUCT_DIR).filter((f) => f.toLowerCase().endsWith('.md'))
    : [];
  const siteText = siteFiles
    .map((f) => fs.readFileSync(path.join(SITE_STRUCT_DIR, f), 'utf8'))
    .join('\n');
  const sectionPathMap = buildSectionPathMap(siteText);

  const template = fs.readFileSync(PROMPT_PATH, 'utf8');

  // Ground-truth guide text for canonical-string extraction: the LLM writing
  // guide + Philosophy and methodology + site structure. Extracted, not composed.
  const supportingDir = path.join(ROOT, 'sources', 'supporting');
  const supportingText = walkMd(supportingDir)
    .map((f) => fs.readFileSync(f, 'utf8')).join('\n\n');
  const canonicalGuideText = [guides, supportingText, siteText].join('\n\n');
  const canonical = loadCanonicalStrings(canonicalGuideText);

  return { template, guides, bySlug, byCategory, sectionPathMap, resolveSource, registry, canonical };
}

async function main() {
  // Migrate legacy flat output into the mirrored tree (no OpenAI). Explicit.
  if (MIGRATE_STRUCTURE) {
    process.exit(runMigrateGeneratedStructure());
  }

  // Repair existing JSON deterministically (no OpenAI). Explicit opt-in.
  if (REPAIR_CASE_STUDIES) {
    process.exit(runRepairCaseStudies());
  }

  // Validator never calls OpenAI; handle it before any API-key checks.
  if (VALIDATE_CASE_STUDIES) {
    process.exit(runCaseStudyValidator());
  }

  // Debug prompt: render and write the prompt(s) without calling OpenAI.
  if (DEBUG_PROMPT) {
    process.exit(runDebugPrompt());
  }

  // Dry-run never calls OpenAI, so it needs neither fetch nor an API key.
  if (!DRY_RUN) {
    if (typeof fetch !== 'function') {
      console.error('This script requires Node 18+ (global fetch). Please upgrade Node.');
      process.exit(1);
    }
    if (!OPENAI_API_KEY) {
      console.error('Missing OPENAI_API_KEY environment variable.');
      process.exit(1);
    }
  }

  const ctx = loadContext();
  const registry = ctx.registry;

  // Fail before live generation if the canonical locked agency sentence is not
  // available in the guide material — never fall back to a composed sentence.
  if (!DRY_RUN && ctx.canonical && ctx.canonical.errors && ctx.canonical.errors.length) {
    console.error('Canonical string extraction failed; refusing to generate live pages:');
    for (const e of ctx.canonical.errors) console.error(`  - ${e}`);
    process.exit(1);
  }

  // Selection: a single targeted page (--slug) or the auto-selected 3.
  let selected;
  if (TARGET_SLUG) {
    const item = ctx.bySlug.get(TARGET_SLUG);
    if (!item) {
      console.error(`Error: --slug "${TARGET_SLUG}" was not found in the registry. No OpenAI call made.`);
      process.exit(1);
    }
    selected = [{ bucket: 'targeted', item }];
  } else {
    selected = pickTestPages(registry);
  }

  console.log(`Mode: ${DRY_RUN ? 'DRY RUN (no OpenAI calls)' : 'LIVE generation'}` +
    `${TARGET_SLUG ? ` | targeted slug: ${TARGET_SLUG}` : ''}${OVERWRITE ? ' | overwrite' : ''}`);
  console.log(`Selected ${selected.length} ${TARGET_SLUG ? 'page' : 'test page(s)'}:`);
  for (const s of selected) console.log(`  [${s.bucket}] ${s.item.slug} (${s.item.article_type})`);
  console.log('');

  if (DRY_RUN) {
    ensureDir(DRY_RUN_DIR);
    const pages = [];
    for (const s of selected) {
      console.log(`Building payload [${s.bucket}] ${s.item.slug} ...`);
      pages.push({ bucket: s.bucket, ...generateDryRun(ctx, s.item) });
    }

    const summaryDoc = {
      generatedAt: new Date().toISOString(),
      mode: 'dry-run',
      model: OPENAI_MODEL,
      selectedPages: pages.map((p) => ({
        bucket: p.bucket,
        slug: p.slug,
        status: p.status,
        sourcePath: p.sourcePath || null,
        allowedSlugsCount: p.allowedSlugsCount || 0,
        relatedCount: p.relatedCount || 0,
        childCount: p.childCount || 0,
        sameCategoryCount: p.sameCategoryCount || 0,
        warnings: p.warnings || [],
        info: p.info || [],
      })),
      warnings: pages.flatMap((p) => (p.warnings || []).map((w) => `${p.slug}: ${w}`)),
      info: pages.flatMap((p) => (p.info || []).map((i) => `${p.slug}: ${i}`)),
    };
    const summaryPath = path.join(DRY_RUN_DIR, 'summary.json');
    fs.writeFileSync(summaryPath, JSON.stringify(summaryDoc, null, 2) + '\n', 'utf8');

    console.log(`\nDry run complete. Inspect: ${relToRoot(DRY_RUN_DIR)}/`);
    console.log(`Summary: ${relToRoot(summaryPath)}`);
    console.log(`\nWarnings: ${summaryDoc.warnings.length} | Info: ${summaryDoc.info.length}`);
    if (summaryDoc.warnings.length) {
      console.log(`\nWarnings (${summaryDoc.warnings.length}):`);
      for (const w of summaryDoc.warnings) console.log(`  - ${w}`);
    }
    return;
  }

  const results = [];
  for (const s of selected) {
    console.log(`Generating [${s.bucket}] ${s.item.slug} ...`);
    results.push(await generatePage(ctx, s.item));
  }

  const summary = results.reduce((acc, r) => {
    acc[r.status] = (acc[r.status] || 0) + 1;
    return acc;
  }, {});
  console.log('\nDone.', JSON.stringify(summary));

  // Any failure must produce a non-zero exit code so `... || break` halts loops.
  const failed = results.filter((r) => r.status === 'error');
  if (failed.length) {
    process.exitCode = 1;
    console.error(`\nFailed ${failed.length} page(s):`);
    for (const r of failed) console.error(`  - ${r.slug}${r.errorClass ? ` [${r.errorClass}]` : ''}`);
  }
}

// Run only when invoked directly; allow importing the functions for testing.
if (require.main === module) {
  main().catch((e) => {
    console.error('Fatal error:', e);
    logError({ stage: 'fatal', message: String(e && e.message || e) });
    process.exit(1);
  });
}

module.exports = {
  loadContext,
  buildLinkingContext,
  buildMentionedCaseStudies,
  buildPagePayload,
  resolveSlugReference,
  resolveDocSource,
  extractClassification,
  buildClassificationSection,
  enforceClassificationBlock,
  analyzeRegulatorySpecificsFromSource,
  enforceRegulatorySourceFidelity,
  enforceThirdPersonVoice,
  enforceLockedAgencySentence,
  normalizePublicationReadiness,
  enforceAuthoredContentRules,
  firstPersonProtectedPhrases,
  collectFirstPersonMatches,
  canonicalizePhaseNamesDoc,
  normalizeQuestionsForReview,
  reorderKeyAfter,
  walkJsonStrings,
  collectJsonStringMatches,
  walkAuthoredStrings,
  collectAuthoredStringMatches,
  classifyOpenAIError,
  formatOpenAIError,
  makeOpenAIError,
  getGeneratedOutputPath,
  findExistingGeneratedPath,
  listGeneratedJsonFiles,
  classifyMedicalDeviceCase,
  enforceMedicalDeviceCaveat,
  enforceSectionMethodAttribution,
  detectMethodAttributionIssues,
  canonicalizePhaseNames,
  KNOWN_CASE_NAMES,
};

#!/usr/bin/env node
/**
 * import_generated_articles_to_sanity.js
 *
 * Repeatable, SAFE importer for the generated article JSON files.
 *
 *   Generated input:  generated/articles/<source-subdir>/<slug>.json  (recursive)
 *   Sanity target:    one generic document type (default "article")
 *   Deterministic id: article-<slug>  (draft: drafts.article-<slug>)  -> rerun
 *                     UPDATES the same doc instead of creating duplicates.
 *
 * Modes / flags:
 *   --dry-run           Inspect + report only. No Sanity connection. (DEFAULT-safe)
 *   --drafts            Write documents as DRAFTS (drafts.<id>). Requires
 *                       @sanity/client + SANITY_* env vars.
 *   --include-blocked   Also include docs with readyForSanityImport === false
 *                       (still imported as drafts/review items, never published).
 *   --limit N           Process at most N documents.
 *   --slug <slug>       Process only the document with this slug.
 *
 * Examples:
 *   node scripts/import_generated_articles_to_sanity.js --dry-run
 *   node scripts/import_generated_articles_to_sanity.js --dry-run --limit 5
 *   node scripts/import_generated_articles_to_sanity.js --drafts
 *   node scripts/import_generated_articles_to_sanity.js --drafts --slug kardion
 *
 * Safety:
 *   - Dry-run requires NO dependencies and makes NO network calls.
 *   - Real writes require explicit --drafts, @sanity/client, and SANITY_* env.
 *   - This script NEVER publishes (it only writes drafts.* ids).
 *   - It NEVER prints the API token. It does NOT modify the generated JSON.
 */

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const ARTICLES_DIR = path.join(ROOT, 'generated', 'articles');

// ---------------------------------------------------------------------------
// Config (overridable via env). The Sanity document TYPE and ID prefix default
// to the task's suggestion; see the report for the documentationPage alternative.
// ---------------------------------------------------------------------------
const DOC_TYPE = process.env.SANITY_ARTICLE_TYPE || 'article';
const ID_PREFIX = process.env.SANITY_ARTICLE_ID_PREFIX || 'article-';

// ---------------------------------------------------------------------------
// CLI
// ---------------------------------------------------------------------------
const ARGV = process.argv.slice(2);
const DRY_RUN = ARGV.includes('--dry-run') || !ARGV.includes('--drafts');
const DRAFTS = ARGV.includes('--drafts');
const INCLUDE_BLOCKED = ARGV.includes('--include-blocked');
function flagValue(name) {
  const i = ARGV.indexOf(name);
  if (i >= 0 && i + 1 < ARGV.length && !ARGV[i + 1].startsWith('--')) return ARGV[i + 1];
  const eq = ARGV.find((a) => a.startsWith(name + '='));
  return eq ? eq.slice(name.length + 1) : null;
}
const LIMIT = flagValue('--limit') ? parseInt(flagValue('--limit'), 10) : null;
const ONLY_SLUG = flagValue('--slug');

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
function walkJson(dir) {
  const out = [];
  if (!fs.existsSync(dir)) return out;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...walkJson(full));
    else if (e.isFile() && e.name.toLowerCase().endsWith('.json')) out.push(full);
  }
  return out.sort();
}

function relToRoot(p) { return path.relative(ROOT, p).split(path.sep).join('/'); }

function docSlug(doc) {
  const s = doc && doc.slug;
  if (s && typeof s === 'object' && typeof s.current === 'string') return s.current;
  if (typeof s === 'string') return s;
  return null;
}

function articleId(slug, draft) {
  const base = `${ID_PREFIX}${slug}`;
  return draft ? `drafts.${base}` : base;
}

/** Folder under generated/articles/ (the "section"), e.g. "Case studies". */
function sectionFromPath(absPath) {
  const rel = path.relative(ARTICLES_DIR, absPath).split(path.sep);
  rel.pop(); // drop filename
  return rel.join('/') || null;
}

/** Best-effort parse of the deterministic "## Classification" block from body
 *  (read-only; does not modify the generated JSON). */
function parseClassification(body) {
  const t = String(body || '');
  if (!/^##\s+Classification\s*$/m.test(t)) return null;
  const val = (label) => {
    const m = t.match(new RegExp(label + '\\s*([^\\n]*)', 'i'));
    return m ? m[1].trim() : null;
  };
  return {
    primaryCategory: val('Primary case-study category:'),
    primaryContext: val('Primary context:'),
    alsoRelevantContexts: val('Also-relevant contexts:'),
    connectsTo: val('Connects to:'),
  };
}

/**
 * Map a generated JSON doc -> a Sanity document. Markdown is stored as
 * bodyMarkdown TEXT (no Portable Text conversion in this first pass).
 */
function toSanityDoc(doc, absPath, { draft }) {
  const slug = docSlug(doc);
  const ready = !!(doc.qualityChecks && doc.qualityChecks.readyForSanityImport === true);
  return {
    _id: articleId(slug, draft),
    _type: DOC_TYPE,
    title: doc.title,
    slug: { _type: 'slug', current: slug },
    pageType: doc.pageType || null,
    section: sectionFromPath(absPath),
    category: doc.category || null,
    parentSlug: doc.parentSlug || null,
    childPageSlugs: doc.childPageSlugs || [],
    excerpt: doc.excerpt || null,
    summary: doc.summary || null,
    definition: doc.definition || null,
    metaTitle: doc.metaTitle || null,
    metaDescription: doc.metaDescription || null,
    tags: doc.tags || [],
    keyFacts: doc.keyFacts || [],
    bodyMarkdown: doc.bodyMarkdown || '',
    claims: doc.claims || [],
    limitations: doc.limitations || [],
    relatedPageSlugs: doc.relatedPageSlugs || [],
    internalLinks: doc.internalLinks || [],
    questionsForReview: doc.questionsForReview || [],
    publicationBlockers: doc.publicationBlockers || [],
    readyForSanityImport: ready,
    qualityChecks: doc.qualityChecks || {},
    classification: parseClassification(doc.bodyMarkdown),
    // source provenance
    sourceFile: doc.sourceFile || null,
    sourcePath: doc.sourcePath || null,
    sanityDocumentIdCandidate: doc.sanityDocumentIdCandidate || null,
  };
}

const REQUIRED = ['title', 'slug.current', 'pageType'];
function missingRequired(doc) {
  const miss = [];
  if (!doc.title) miss.push('title');
  if (!docSlug(doc)) miss.push('slug.current');
  if (!doc.pageType) miss.push('pageType');
  return miss;
}

// ---------------------------------------------------------------------------
// Build the candidate set (shared by dry-run and real import)
// ---------------------------------------------------------------------------
function buildCandidates() {
  const files = walkJson(ARTICLES_DIR);
  const slugSeen = new Map();
  const records = [];
  for (const f of files) {
    let doc;
    try { doc = JSON.parse(fs.readFileSync(f, 'utf8')); }
    catch (e) { records.push({ file: f, parseError: String(e.message || e) }); continue; }
    const slug = docSlug(doc);
    if (slug) slugSeen.set(slug, (slugSeen.get(slug) || 0) + 1);
    records.push({
      file: f, doc, slug,
      missing: missingRequired(doc),
      ready: !!(doc.qualityChecks && doc.qualityChecks.readyForSanityImport === true),
    });
  }
  const duplicateSlugs = [...slugSeen.entries()].filter(([, n]) => n > 1).map(([s]) => s);
  return { files, records, duplicateSlugs };
}

function selectImportable(records, duplicateSlugs) {
  let sel = records.filter((r) => r.doc); // parseable
  if (ONLY_SLUG) sel = sel.filter((r) => r.slug === ONLY_SLUG);
  const skippedBlocked = [];
  const skippedMissing = [];
  const skippedDup = [];
  const importable = [];
  for (const r of sel) {
    if (r.missing.length) { skippedMissing.push(r); continue; }
    if (duplicateSlugs.includes(r.slug)) { skippedDup.push(r); continue; }
    if (!r.ready && !INCLUDE_BLOCKED) { skippedBlocked.push(r); continue; }
    importable.push(r);
  }
  const limited = LIMIT != null ? importable.slice(0, LIMIT) : importable;
  return { importable: limited, allImportable: importable, skippedBlocked, skippedMissing, skippedDup };
}

// ---------------------------------------------------------------------------
// Dry run
// ---------------------------------------------------------------------------
function runDryRun() {
  const { files, records, duplicateSlugs } = buildCandidates();
  const parseErrors = records.filter((r) => r.parseError);
  const { importable, allImportable, skippedBlocked, skippedMissing, skippedDup } =
    selectImportable(records, duplicateSlugs);

  console.log('========================================================');
  console.log('Sanity import — DRY RUN (no connection, no writes)');
  console.log('========================================================');
  console.log(`Input dir:            ${relToRoot(ARTICLES_DIR)}/ (recursive)`);
  console.log(`Document type:        ${DOC_TYPE}`);
  console.log(`ID format:            ${ID_PREFIX}<slug>   (draft: drafts.${ID_PREFIX}<slug>)`);
  console.log(`Mode:                 ${DRAFTS ? 'DRAFTS (would write)' : 'dry-run only'}`);
  console.log(`include-blocked:      ${INCLUDE_BLOCKED}`);
  console.log(`limit:                ${LIMIT == null ? '(none)' : LIMIT}`);
  console.log(`slug filter:          ${ONLY_SLUG || '(none)'}`);
  console.log('--------------------------------------------------------');
  console.log(`Total JSON files discovered:        ${files.length}`);
  console.log(`Parse errors:                       ${parseErrors.length}`);
  console.log(`Importable (after all filters):     ${allImportable.length}${LIMIT != null ? ` (showing ${importable.length} due to --limit)` : ''}`);
  console.log(`Skipped — readyForSanityImport false:${skippedBlocked.length}`);
  console.log(`Skipped — missing required fields:  ${skippedMissing.length}`);
  console.log(`Skipped — duplicate slug:           ${skippedDup.length}`);
  console.log(`Duplicate slugs:                    ${duplicateSlugs.length ? duplicateSlugs.join(', ') : 'none'}`);

  if (parseErrors.length) {
    console.log('\n--- Parse errors ---');
    for (const r of parseErrors) console.log(`  ${relToRoot(r.file)}: ${r.parseError}`);
  }
  if (skippedMissing.length) {
    console.log('\n--- Skipped: missing required fields ---');
    for (const r of skippedMissing) console.log(`  ${relToRoot(r.file)}: missing ${r.missing.join(', ')}`);
  }
  if (skippedBlocked.length) {
    console.log(`\n--- Skipped: readyForSanityImport === false (use --include-blocked to import as drafts) ---`);
    for (const r of skippedBlocked) {
      const types = (r.doc.publicationBlockers || []).map((b) => b && b.type).filter(Boolean);
      console.log(`  ${r.slug}  blockers=[${types.join(', ')}]`);
    }
  }

  console.log('\n--- Target document IDs (first 10 importable) ---');
  for (const r of importable.slice(0, 10)) {
    console.log(`  ${r.slug}  ->  ${articleId(r.slug, true)} (draft) / ${articleId(r.slug, false)} (published)`);
  }
  if (importable.length > 10) console.log(`  … +${importable.length - 10} more`);

  // Field mapping + schema gaps (no live schema available in this repo).
  const sample = importable[0] || (records.find((r) => r.doc));
  if (sample) {
    const mapped = toSanityDoc(sample.doc, sample.file, { draft: true });
    console.log('\n--- Field mapping (generated JSON -> Sanity doc) ---');
    console.log(`  _id            <- ${ID_PREFIX}<slug> (deterministic; draft prefix when --drafts)`);
    console.log('  _type          <- (constant) "' + DOC_TYPE + '"');
    console.log('  title          <- title');
    console.log('  slug           <- slug {_type:slug,current}');
    console.log('  pageType       <- pageType');
    console.log('  section        <- derived from generated/articles/<folder>/');
    console.log('  category       <- category');
    console.log('  bodyMarkdown   <- bodyMarkdown  (stored as TEXT; no Portable Text yet)');
    console.log('  excerpt/summary/definition  <- excerpt / summary / definition');
    console.log('  metaTitle/metaDescription   <- metaTitle / metaDescription (SEO)');
    console.log('  tags/keyFacts/claims/limitations/relatedPageSlugs/internalLinks/childPageSlugs/parentSlug <- as-is');
    console.log('  questionsForReview / publicationBlockers / qualityChecks / readyForSanityImport <- as-is');
    console.log('  classification <- parsed (read-only) from the body Classification block');
    console.log('  sourceFile / sourcePath / sanityDocumentIdCandidate <- provenance');
    console.log(`\n  Sanity doc field count: ${Object.keys(mapped).length}`);
  }

  console.log('\n--- Schema status ---');
  console.log('  No Sanity schema exists in this repo (no sanity.config / schema files).');
  console.log(`  => EVERY field above is "new" — a "${DOC_TYPE}" document type must be created first.`);
  console.log('  => Until a schema exists, nothing is dropped by this script, but Sanity');
  console.log('     Studio will only surface fields defined in the schema you create.');

  console.log('\nDRY RUN complete. No connection was made and nothing was written.');
  return 0;
}

// ---------------------------------------------------------------------------
// Real import (DRAFTS only) — lazy deps, clear failures, never prints token.
// ---------------------------------------------------------------------------
async function runImport() {
  const projectId = process.env.SANITY_PROJECT_ID;
  const dataset = process.env.SANITY_DATASET;
  const token = process.env.SANITY_API_TOKEN;
  const apiVersion = process.env.SANITY_API_VERSION;

  const missingEnv = [];
  if (!projectId) missingEnv.push('SANITY_PROJECT_ID');
  if (!dataset) missingEnv.push('SANITY_DATASET');
  if (!token) missingEnv.push('SANITY_API_TOKEN');
  if (!apiVersion) missingEnv.push('SANITY_API_VERSION');
  if (missingEnv.length) {
    console.error('Refusing to import — missing env vars: ' + missingEnv.join(', '));
    console.error('Set them (do not commit the token) and retry. No token is ever printed.');
    process.exit(1);
  }

  let createClient;
  try {
    ({ createClient } = require('@sanity/client'));
  } catch (e) {
    console.error('@sanity/client is not installed. Install it first:');
    console.error('  npm install @sanity/client');
    console.error('(Ask before adding dependencies / a package.json to this repo.)');
    process.exit(1);
  }

  const client = createClient({ projectId, dataset, apiVersion, token, useCdn: false });

  const { records, duplicateSlugs } = buildCandidates();
  const { importable } = selectImportable(records, duplicateSlugs);
  console.log(`Importing ${importable.length} document(s) as DRAFTS to project=${projectId} dataset=${dataset} (apiVersion=${apiVersion}).`);

  let ok = 0;
  let fail = 0;
  for (const r of importable) {
    const sdoc = toSanityDoc(r.doc, r.file, { draft: true }); // ALWAYS drafts.*
    try {
      await client.createOrReplace(sdoc); // deterministic id -> update, no dup
      ok++;
      console.log(`  + ${sdoc._id}`);
    } catch (e) {
      fail++;
      console.error(`  ✗ ${sdoc._id}: ${String(e && e.message || e)}`);
    }
  }
  console.log(`\nDone. created/updated drafts: ${ok}, failed: ${fail}.`);
  process.exitCode = fail ? 1 : 0;
}

// ---------------------------------------------------------------------------
async function main() {
  if (!DRAFTS) { process.exit(runDryRun()); }
  // --drafts implies a real write path; still safe (drafts only) and gated.
  await runImport();
}

main().catch((e) => { console.error('Fatal:', e); process.exit(1); });

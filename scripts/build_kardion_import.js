#!/usr/bin/env node
/**
 * build_kardion_import.js
 *
 * Builds a fidelity-safe NDJSON import for the single Kardion test page (+ the
 * Case studies parent), reading the EXACT body from the local source of truth:
 *   generated/articles/Case studies/kardion.json
 *
 * Mapping (corrected):
 *   - editorial fields -> existing `page` fields (title, navTitle, slug, parent, order, summary, seo)
 *   - bodyMarkdown     -> Portable Text in the existing `page.content` field
 *   - all generated metadata -> a single `generatedMetadata` OBJECT (no unknown top-level fields)
 *   - summary / metaDescription / excerpt -> clamped to <= 400 chars (sentence-safe)
 *
 * Output: an NDJSON file to import with the Sanity CLI (uses your `sanity login`):
 *   npx sanity@latest dataset import <out.ndjson> production --replace
 *
 * This script makes NO network calls and needs NO token. It only reads the local
 * JSON and writes a local NDJSON file. It does not modify the generated JSON.
 */
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const SRC = path.join(ROOT, 'generated', 'articles', 'Case studies', 'kardion.json');
const OUT = process.argv[2] || path.join(ROOT, 'generated', 'sanity-import', 'kardion.ndjson');
const MAX = 400;

// ---------------------------------------------------------------------------
// Sentence-safe clamp to <= max chars.
// ---------------------------------------------------------------------------
function clamp(text, max = MAX) {
  const s = String(text || '').trim();
  if (s.length <= max) return s;
  const cut = s.slice(0, max);
  const lastEnd = Math.max(cut.lastIndexOf('. '), cut.lastIndexOf('! '), cut.lastIndexOf('? '));
  if (lastEnd >= Math.floor(max * 0.5)) return cut.slice(0, lastEnd + 1).trim();
  const lastSpace = cut.lastIndexOf(' ');
  return (lastSpace > 0 ? cut.slice(0, lastSpace) : cut).trim() + '…';
}

// ---------------------------------------------------------------------------
// Deterministic Markdown -> Portable Text.
// Handles: # headings, paragraphs, - / * bullet lists, **bold**, *em*/_em_,
// `code`, [text](url). Non-nested inline marks (sufficient for the generated body).
// ---------------------------------------------------------------------------
const INLINE_RE = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*|`([^`]+)`|\*([^*]+)\*|_([^_]+)_/g;

function inlineToChildren(text, keyBase) {
  const children = [];
  const markDefs = [];
  let last = 0;
  let n = 0;
  let m;
  const push = (t, marks) => {
    if (!t) return;
    children.push({_type: 'span', _key: `${keyBase}s${n++}`, text: t, marks: marks || []});
  };
  INLINE_RE.lastIndex = 0;
  while ((m = INLINE_RE.exec(text))) {
    push(text.slice(last, m.index));
    if (m[1] != null) {
      const key = `${keyBase}l${markDefs.length}`;
      markDefs.push({_type: 'link', _key: key, href: m[2]});
      push(m[1], [key]);
    } else if (m[3] != null) push(m[3], ['strong']);
    else if (m[4] != null) push(m[4], ['code']);
    else if (m[5] != null) push(m[5], ['em']);
    else if (m[6] != null) push(m[6], ['em']);
    last = INLINE_RE.lastIndex;
  }
  push(text.slice(last));
  if (!children.length) children.push({_type: 'span', _key: `${keyBase}s0`, text: '', marks: []});
  return {children, markDefs};
}

function mdToPortableText(md) {
  const lines = String(md || '').replace(/\r/g, '').split('\n');
  const blocks = [];
  let para = [];
  const flush = () => {
    if (!para.length) return;
    const key = `b${blocks.length}`;
    const {children, markDefs} = inlineToChildren(para.join(' ').trim(), key);
    blocks.push({_type: 'block', _key: key, style: 'normal', markDefs, children});
    para = [];
  };
  for (const raw of lines) {
    const line = raw.trimEnd();
    const t = line.trim();
    if (t === '') { flush(); continue; }
    const h = t.match(/^(#{1,6})\s+(.*)$/);
    if (h) {
      flush();
      const key = `b${blocks.length}`;
      const {children, markDefs} = inlineToChildren(h[2].trim(), key);
      blocks.push({_type: 'block', _key: key, style: `h${h[1].length}`, markDefs, children});
      continue;
    }
    const li = t.match(/^[-*]\s+(.*)$/);
    if (li) {
      flush();
      const key = `b${blocks.length}`;
      const {children, markDefs} = inlineToChildren(li[1].trim(), key);
      blocks.push({_type: 'block', _key: key, style: 'normal', level: 1, listItem: 'bullet', markDefs, children});
      continue;
    }
    para.push(t);
  }
  flush();
  return blocks;
}

// ---------------------------------------------------------------------------
function build() {
  const d = JSON.parse(fs.readFileSync(SRC, 'utf8'));
  const slug = d.slug && d.slug.current;
  const content = mdToPortableText(d.bodyMarkdown);

  const kardion = {
    _id: 'page-case-studies-kardion',
    _type: 'page',
    title: d.title,
    navTitle: d.title,
    slug: {_type: 'slug', current: slug},
    parent: {_type: 'reference', _ref: 'page-case-studies'},
    order: 0,
    summary: clamp(d.summary),
    seo: {
      _type: 'seo',
      metaTitle: d.metaTitle,
      metaDescription: clamp(d.metaDescription),
      keywords: d.tags || [],
    },
    content,
    generatedMetadata: {
      pageType: d.pageType || null,
      section: 'Case studies',
      category: d.category || null,
      readyForSanityImport: !!(d.qualityChecks && d.qualityChecks.readyForSanityImport),
      questionsForReview: d.questionsForReview || [],
      publicationBlockers: d.publicationBlockers || [],
      tags: d.tags || [],
      excerpt: clamp(d.excerpt),
      sourceFile: d.sourceFile || null,
      sourcePath: d.sourcePath || null,
      sanityDocumentIdCandidate: d.sanityDocumentIdCandidate || null,
    },
  };

  // Parent "Case studies" section page — cleaned (metadata moved into object).
  const parent = {
    _id: 'page-case-studies',
    _type: 'page',
    title: 'Case studies',
    navTitle: 'Case studies',
    slug: {_type: 'slug', current: 'case-studies'},
    order: 0,
    summary: clamp('Creative Navy case studies — documented client engagements.'),
    generatedMetadata: {pageType: 'section', section: 'Case studies'},
  };

  fs.mkdirSync(path.dirname(OUT), {recursive: true});
  fs.writeFileSync(OUT, [parent, kardion].map((x) => JSON.stringify(x)).join('\n') + '\n', 'utf8');

  // ---- validation report ----
  const headings = content.filter((b) => /^h[1-6]$/.test(b.style)).length;
  const bullets = content.filter((b) => b.listItem === 'bullet').length;
  const paras = content.filter((b) => b.style === 'normal' && !b.listItem).length;
  console.log(`Wrote ${require('path').relative(ROOT, OUT)}`);
  console.log(`Documents: 2 (page-case-studies, page-case-studies-kardion)`);
  console.log(`bodyMarkdown chars: ${(d.bodyMarkdown || '').length}`);
  console.log(`Portable Text blocks: ${content.length} (headings ${headings}, bullets ${bullets}, paragraphs ${paras})`);
  console.log(`summary: ${d.summary.length} -> ${kardion.summary.length} chars (<=${MAX})`);
  console.log(`metaDescription: ${d.metaDescription.length} -> ${kardion.seo.metaDescription.length} chars`);
  console.log(`top-level fields on kardion doc: ${Object.keys(kardion).join(', ')}`);
  console.log(`generatedMetadata keys: ${Object.keys(kardion.generatedMetadata).join(', ')}`);
}

build();

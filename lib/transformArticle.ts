// Deterministic RawArticle -> WikiPage transform.
//
// This is the offline backbone of Stage 1. It produces a complete, valid, render-ready
// WikiPage from a raw article using only code — no model. The OpenAI stage (Stage 1)
// can replace/refine the result, but this guarantees the site is always buildable and
// gives the model a clean, structured baseline to improve on.

import type {
  RawArticle,
  RawClaim,
  WikiPage,
  WikiBodySection,
  WikiEvidenceSummary,
} from './types';
import { cleanArticleMarkdown } from './cleanArticleMarkdown';

export function rawSlug(raw: RawArticle): string {
  return typeof raw.slug === 'string' ? raw.slug : raw.slug.current;
}

/** Humanise a section/parent slug into a sidebar-friendly label. */
export function humaniseSection(slug?: string): string | undefined {
  if (!slug) return undefined;
  return slug
    .split('-')
    .map((w) => (w.length <= 3 && /^(ai|ux|ui)$/i.test(w) ? w.toUpperCase() : w.charAt(0).toUpperCase() + w.slice(1)))
    .join(' ');
}

/** Split cleaned markdown into body sections keyed by H2 headings. */
export function splitBodySections(markdown: string, fallbackHeading: string): WikiBodySection[] {
  const clean = cleanArticleMarkdown(markdown);
  if (!clean.trim()) return [];

  const lines = clean.split('\n');
  const sections: WikiBodySection[] = [];
  let current: WikiBodySection | null = null;
  let preamble: string[] = [];

  for (const line of lines) {
    const h2 = /^##\s+(.*)$/.exec(line);
    if (h2) {
      if (current) sections.push(current);
      current = { heading: h2[1].trim(), bodyMarkdown: '' };
    } else if (current) {
      current.bodyMarkdown += (current.bodyMarkdown ? '\n' : '') + line;
    } else {
      preamble.push(line);
    }
  }
  if (current) sections.push(current);

  const preambleText = preamble.join('\n').trim();
  if (preambleText) {
    // Body started with prose before any H2 — keep it as an opening "Overview".
    sections.unshift({ heading: sections.length ? 'Overview' : fallbackHeading, bodyMarkdown: preambleText });
  }

  // Trim trailing whitespace on each section body.
  return sections
    .map((s) => ({ heading: s.heading, bodyMarkdown: s.bodyMarkdown.trim() }))
    .filter((s) => s.heading || s.bodyMarkdown);
}

const WEAK_SOURCE_STRENGTH = /anecdotal|weak|moderate/i;
const WEAK_EVIDENCE_TYPE = /client-reported|inferred/i;

function isWeakClaim(c: RawClaim): boolean {
  const ss = c.sourceStrength || '';
  const et = c.evidenceType || '';
  const notes = c.notes || '';
  if (WEAK_SOURCE_STRENGTH.test(ss)) return true;
  if (WEAK_EVIDENCE_TYPE.test(et)) return true;
  if (/not independently verified|cannot be verified|client-reported|self-reported/i.test(notes)) return true;
  return false;
}

/** Build the structured evidence summary from raw claims + limitations. */
export function buildEvidenceSummary(raw: RawArticle): WikiEvidenceSummary | undefined {
  const claims = raw.claims || [];
  const limitations = raw.limitations || [];
  const strong: string[] = [];
  const weak: string[] = [];

  for (const c of claims) {
    if (!c || !c.claim) continue;
    (isWeakClaim(c) ? weak : strong).push(c.claim.trim());
  }

  const summary: WikiEvidenceSummary = {};
  if (strong.length) summary.strongClaims = strong;
  if (weak.length) summary.weakerClaims = weak;
  if (limitations.length) summary.limitations = limitations.map((l) => l.trim()).filter(Boolean);

  return Object.keys(summary).length ? summary : undefined;
}

/** Full deterministic transform. */
export function transformArticle(raw: RawArticle): WikiPage {
  const slug = rawSlug(raw);
  const bodySections = splitBodySections(raw.bodyMarkdown, raw.title);
  const evidenceSummary = buildEvidenceSummary(raw);

  const internalLinks = (raw.internalLinks || [])
    .filter((l) => l && l.targetSlug && l.anchorText)
    .map((l) => ({ anchorText: l.anchorText, targetSlug: l.targetSlug, reason: l.reason }));

  return {
    slug,
    title: raw.title,
    pageType: raw.pageType,
    category: raw.category,
    section: humaniseSection(raw.parentSlug),
    summary: raw.summary,
    keyFacts: (raw.keyFacts || []).filter(Boolean),
    bodySections,
    evidenceSummary,
    relatedPageSlugs: (raw.relatedPageSlugs || []).filter(Boolean),
    internalLinks,
    tags: (raw.tags || []).filter(Boolean),
    _meta: {
      sourcePath: raw.sourcePath,
      parentSlug: raw.parentSlug,
      childPageSlugs: raw.childPageSlugs || [],
      generatedBy: 'deterministic',
    },
  };
}

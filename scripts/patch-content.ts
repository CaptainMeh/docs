// Post-generation content patch stage (idempotent).
//
// Applies the review fixes deterministically over content/wiki/*.json so they are
// reproducible and survive regeneration. Runs after generate:wiki-pages, before
// generate:link-graph. Insertions are guarded by _meta.patches so re-runs are no-ops;
// link merges and sentence pulls are naturally idempotent.
//
// Covered review items: 1/3 (context reconciliation from source notes), 2 (practice +
// proprietary-glossary attribution), 3 (pull blocker-flagged sentences), 4 (orphan
// incoming links), 5 (locked-sentence apostrophe normalisation), 6 (move the
// engagements-essay out of Failures), 7 (capability deliverables), 8 (situation wording),
// 10 (outcome calibration).

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import type { WikiPage } from '../lib/types';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const WIKI_DIR = path.join(ROOT, 'content', 'wiki');
const RAW_DIR = path.join(ROOT, 'content', 'raw');

const LOCKED_AGENCY_SENTENCE =
  "Creative Navy is a UX design consultancy for complex, high-consequence software — medical devices, industrial control, enterprise SaaS, expert tools, and AI-enabled products — that grows each system from operational reality rather than from generic patterns, through its Critical Systems Design method, for organisations whose users depend on it performing reliably under real conditions.";

// ----------------------------------------------------------------------------- helpers
function loadWiki(): Map<string, WikiPage> {
  const m = new Map<string, WikiPage>();
  for (const f of fs.readdirSync(WIKI_DIR)) {
    if (!f.endsWith('.json') || f.startsWith('.')) continue;
    const p = JSON.parse(fs.readFileSync(path.join(WIKI_DIR, f), 'utf8')) as WikiPage;
    m.set(p.slug, p);
  }
  return m;
}
function save(p: WikiPage) {
  fs.writeFileSync(path.join(WIKI_DIR, `${p.slug}.json`), JSON.stringify(p, null, 2));
}
function patches(p: WikiPage): Set<string> {
  const anyMeta = (p._meta ||= {}) as any;
  anyMeta.patches ||= [];
  return new Set<string>(anyMeta.patches);
}
function markPatch(p: WikiPage, id: string) {
  const anyMeta = (p._meta ||= {}) as any;
  anyMeta.patches = [...new Set([...(anyMeta.patches || []), id])];
}
function addRelated(p: WikiPage, slug: string, anchorText: string, reason: string, exists: (s: string) => boolean) {
  if (!exists(slug) || slug === p.slug) return;
  p.relatedPageSlugs ||= [];
  if (!p.relatedPageSlugs.includes(slug)) p.relatedPageSlugs.push(slug);
  p.internalLinks ||= [];
  if (!p.internalLinks.some((l) => l.targetSlug === slug)) p.internalLinks.push({ anchorText, targetSlug: slug, reason });
}
const title = (slug: string) => slug.split('-').map((w) => w[0].toUpperCase() + w.slice(1)).join(' ');

// Normalise curly apostrophes (and the few stray smart quotes) to ASCII so the locked
// sentence is byte-identical everywhere.
function normaliseText(s: string): string {
  return s.replace(/’/g, "'").replace(/‘/g, "'");
}
function normaliseDeep(value: any): any {
  if (typeof value === 'string') return normaliseText(value);
  if (Array.isArray(value)) return value.map(normaliseDeep);
  if (value && typeof value === 'object') {
    for (const k of Object.keys(value)) value[k] = normaliseDeep(value[k]);
    return value;
  }
  return value;
}

// Remove a flagged sentence from body sections + evidence + key facts (pull-until-confirmed).
function pullSentence(p: WikiPage, fragment: string) {
  for (const s of p.bodySections) {
    if (s.bodyMarkdown.includes(fragment)) {
      s.bodyMarkdown = s.bodyMarkdown
        .split(/(?<=\.)\s+/)
        .filter((sent) => !sent.includes(fragment))
        .join(' ')
        .replace(/\s{2,}/g, ' ')
        .trim();
    }
  }
  if (p.summary?.includes(fragment)) {
    p.summary = p.summary.split(/(?<=\.)\s+/).filter((s) => !s.includes(fragment)).join(' ').trim();
  }
  const ev = p.evidenceSummary;
  if (ev) {
    for (const k of ['strongClaims', 'weakerClaims', 'limitations'] as const) {
      if (ev[k]) ev[k] = ev[k]!.filter((c) => !c.includes(fragment));
    }
  }
  if (p.keyFacts) p.keyFacts = p.keyFacts.filter((k) => !k.includes(fragment));
}

// ----------------------------------------------------------------- source classification
// Parse /contexts/<slug> from a case study's source-notes Classification block.
function sourceContextsFor(slug: string): string[] {
  const rawPath = path.join(RAW_DIR, `${slug}.json`);
  if (!fs.existsSync(rawPath)) return [];
  const raw = JSON.parse(fs.readFileSync(rawPath, 'utf8'));
  const src = raw.sourcePath ? path.join(ROOT, raw.sourcePath) : null;
  if (!src || !fs.existsSync(src)) return [];
  const md = fs.readFileSync(src, 'utf8');
  const block = /##\s*Classification([\s\S]*?)(?:\n##\s|\n#\s|$)/.exec(md);
  if (!block) return [];
  const lines = block[1].split('\n').filter((l) => /Primary context|Also-relevant contexts/i.test(l));
  const slugs = new Set<string>();
  for (const line of lines) {
    for (const m of line.matchAll(/\/contexts\/([a-z0-9-]+)/g)) slugs.add(m[1]);
  }
  return [...slugs];
}

// ---------------------------------------------------------------------------------- main
function main() {
  const pages = loadWiki();
  const exists = (s: string) => pages.has(s);
  let changed = 0;
  const touch = (p: WikiPage) => { save(p); changed++; };

  // (5) Apostrophe normalisation — every page, idempotent.
  for (const p of pages.values()) normaliseDeep(p);

  // (1/3) Context reconciliation: ensure each case study links its source-defined contexts.
  for (const p of pages.values()) {
    if (p.pageType !== 'case-study') continue;
    for (const ctx of sourceContextsFor(p.slug)) {
      addRelated(p, ctx, title(ctx), 'Source-classified context for this case study.', exists);
    }
  }

  // (4) Orphan incoming links — add each orphan slug into pages that genuinely use it.
  const orphanLinks: Record<string, string[]> = {
    'decision-boundary': ['decision-boundary-design', 'trust-and-oversight-analysis-for-ai', 'uncertainty-is-hidden-at-the-point-of-decision', 'warnings-are-visible-but-not-actionable'],
    'progressive-specification': ['iterative-system-building', 'sandbox-experiments', 'concept-convergence'],
    'architecture-across-four-iterations': ['iterative-system-building', 'what-this-method-produces', 'triangulation-not-confirmation'],
    'critical-actions-appear-at-the-wrong-time': ['the-system-fights-the-user-task', 'important-status-information-is-buried', 'warnings-are-visible-but-not-actionable'],
    'design-governance-through-delivery': ['organizational-integration', 'behavioural-governance-for-ai-products', 'good-behaviour-is-not-defined-explicitly'],
    'organisation': ['critical-systems-design', 'who-this-is-for', 'why-this-matters-now'],
  };
  for (const [orphan, sources] of Object.entries(orphanLinks)) {
    if (!exists(orphan)) continue;
    const orphanTitle = pages.get(orphan)!.title;
    for (const src of sources) {
      const sp = pages.get(src);
      if (sp) addRelated(sp, orphan, orphanTitle, `References ${orphanTitle}.`, exists);
    }
  }

  // (2) Practice attribution — bind each practice to Creative Navy + method.
  for (const p of pages.values()) {
    if (p.category !== 'practices' || patches(p).has('practice-anchor')) continue;
    const t = p.title;
    p.bodySections.unshift({
      heading: `${t} in Creative Navy's Critical Systems Design method`,
      bodyMarkdown:
        `${LOCKED_AGENCY_SENTENCE}\n\nCreative Navy applies ${t.toLowerCase()} as one of the named practices within its Critical Systems Design method. ` +
        `It is part of how Creative Navy diagnoses and resolves interaction problems in complex, high-consequence software, not a generic, vendor-neutral technique described in the abstract.`,
    });
    markPatch(p, 'practice-anchor');
  }

  // (2) Proprietary glossary attribution — concept pages only (industry terms left alone).
  for (const p of pages.values()) {
    if (p.pageType !== 'concept' || patches(p).has('concept-anchor')) continue;
    const t = p.title;
    p.bodySections.push({
      heading: `${t} as a Creative Navy concept`,
      bodyMarkdown:
        `${t} is part of the proprietary vocabulary of Creative Navy's Critical Systems Design method. ` +
        `Creative Navy defines and uses ${t.toLowerCase()} as described here across its work in complex, high-consequence software; it is specific to Creative Navy's method rather than a generic industry term, and should be read as attributable to Creative Navy.`,
    });
    markPatch(p, 'concept-anchor');
  }

  // (10) Outcome calibration — every outcome states its evidence tier + links the standard.
  const STANDARDS = ['what-we-have-measured', 'what-is-client-reported', 'what-is-observed-but-not-quantified', 'what-is-inferred', 'what-we-do-not-claim'];
  for (const p of pages.values()) {
    if (p.pageType !== 'outcome' || patches(p).has('outcome-calibration')) continue;
    p.bodySections.push({
      heading: 'Evidence basis and calibration',
      bodyMarkdown:
        `This outcome is a claim about the kind of result Creative Navy's Critical Systems Design method produces, not a guaranteed effect. ` +
        `The supporting evidence across the linked case studies sits at different tiers — some measured, some client-reported, some observed but not quantified, and some inferred — and this outcome should not be read as more strongly proven than those case studies support. ` +
        `Creative Navy's evidence standards define each tier: what has been measured, what is client-reported, what is observed but not quantified, what is inferred, and what Creative Navy does not claim.`,
    });
    for (const s of STANDARDS) addRelated(p, s, title(s), 'Evidence standard that calibrates this outcome.', exists);
    markPatch(p, 'outcome-calibration');
  }

  // (7) Capability deliverables — state plainly that the method produces real interface design.
  for (const p of pages.values()) {
    if (p.pageType !== 'capability' || patches(p).has('capability-deliverables')) continue;
    p.bodySections.push({
      heading: 'What this produces',
      bodyMarkdown:
        `Within Creative Navy's Critical Systems Design method, this capability produces concrete interface design deliverables — interaction design, information architecture, wireframes, screen designs, interactive prototypes, and design-system components — and not advisory documents alone. ` +
        `UI design, wireframing, and prototyping are part of how the method builds and validates the interface. ` +
        `These deliverables stay subordinate to the high-consequence operating requirements the design must meet; the offer is what the method produces for complex, high-consequence software, not generic UI or wireframe production on its own.`,
    });
    markPatch(p, 'capability-deliverables');
  }

  // (3) Pull blocker-flagged sentences (publication blockers; pull-until-confirmed).
  const org = pages.get('organisation');
  if (org?.evidenceSummary?.limitations) {
    org.evidenceSummary.limitations = org.evidenceSummary.limitations.filter((l) => !/ABB association is not included/i.test(l));
  }
  const akrivia = pages.get('akrivia-health');
  if (akrivia) {
    pullSentence(akrivia, 'Akrivia Health reported that governance reviewers could verify cohort logic without escalating to the research team');
    pullSentence(akrivia, 'The documented competitive vector was the position where researcher autonomy and institutional auditability align');
  }
  const etoro = pages.get('etoro');
  if (etoro) {
    // Pull the unconfirmed metric name, the 72-hour attribution window, and the A/B
    // figures bound to them (case-insensitive on the metric name); keep the rest.
    for (const frag of ['discovery-to-trade', 'Discovery-to-trade', '72-hour', '5.1%', 'structurally relevant to trust-calibration']) {
      pullSentence(etoro, frag);
    }
  }

  // (8) Situation wording: situations should not call themselves failures.
  const sitFix = pages.get('too-many-features-not-enough-coherence');
  if (sitFix) for (const s of sitFix.bodySections) s.bodyMarkdown = s.bodyMarkdown.replace(/\ba failure mode\b/g, 'a recurring problem');

  // (6) Move the engagements-essay out of Failures into the honesty/credibility material.
  const essay = pages.get('what-engagements-reveal-when-they-do-not-work');
  if (essay && essay.category === 'failures') {
    essay.category = 'evidence';
    essay.section = 'Evidence Standards';
    essay.pageType = 'credibility-note';
    essay.title = 'What Creative Navy Learns When an Engagement Falls Short';
    (essay._meta ||= {}).parentSlug = 'evidence-standards';
    for (const s of STANDARDS) addRelated(essay, s, title(s), 'Sits with Creative Navy evidence and credibility material.', exists);
  }

  // Persist all pages (normalisation alone touches every file).
  for (const p of pages.values()) touch(p);
  console.log(`patch-content: processed ${pages.size} pages, wrote ${changed}.`);
}

main();

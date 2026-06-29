// Shared types for the wiki pipeline and the docs site.
//
// RawArticle  — the generated JSON in content/raw/*.json (full schema, includes
//               technical metadata that must NOT be rendered as article content).
// WikiPage    — the clean, render-ready article in content/wiki/*.json (Stage 1).
// LinkGraph   — the global navigation/validation graph in content/linkGraph.json (Stage 2).

/** A single evidence-bearing claim as recorded on the raw article. */
export interface RawClaim {
  claim: string;
  evidenceType?: string;
  sourceStrength?: string;
  notes?: string;
}

/** A structured internal link suggestion as recorded on the raw article. */
export interface RawInternalLink {
  anchorText: string;
  targetSlug: string;
  placementHint?: string;
  reason?: string;
}

/** The generated documentation JSON exactly as produced upstream. */
export interface RawArticle {
  _type?: string;
  sourceFile?: string;
  sourcePath?: string;
  sanityDocumentIdCandidate?: string;
  title: string;
  slug: { _type?: string; current: string } | string;
  pageType: string;
  category: string;
  parentSlug?: string;
  childPageSlugs?: string[];
  excerpt?: string;
  metaTitle?: string;
  metaDescription?: string;
  summary: string;
  definition?: string;
  keyFacts?: string[];
  tags?: string[];
  bodyMarkdown: string;
  claims?: RawClaim[];
  limitations?: string[];
  publicationBlockers?: string[];
  questionsForReview?: string[];
  relatedPageSlugs?: string[];
  internalLinks?: RawInternalLink[];
  qualityChecks?: Record<string, unknown>;
  /** Injected during flattening: the category folder the file came from. */
  __sourceCategoryDir?: string;
}

/** One rendered body section of a wiki page. */
export interface WikiBodySection {
  heading: string;
  bodyMarkdown: string;
}

/** Evidence framing kept as structured data, not body prose. */
export interface WikiEvidenceSummary {
  strongClaims?: string[];
  weakerClaims?: string[];
  limitations?: string[];
}

/** A render-ready internal link. */
export interface WikiInternalLink {
  anchorText: string;
  targetSlug: string;
  reason?: string;
}

/** The clean, render-ready article (Stage 1 output). */
export interface WikiPage {
  slug: string;
  title: string;
  pageType: string;
  category?: string;
  /** Sub-section within the category (humanised from parentSlug). */
  section?: string;
  summary: string;
  keyFacts?: string[];
  bodySections: WikiBodySection[];
  evidenceSummary?: WikiEvidenceSummary;
  relatedPageSlugs?: string[];
  internalLinks?: WikiInternalLink[];
  tags?: string[];
  /** Provenance — used for routing/validation only, never rendered. */
  _meta?: {
    sourcePath?: string;
    parentSlug?: string;
    childPageSlugs?: string[];
    generatedBy?: 'openai' | 'deterministic';
  };
}

/** One node in the global link graph. */
export interface LinkGraphPage {
  slug: string;
  title: string;
  category?: string;
  section?: string;
  parent?: string;
  children: string[];
  related: string[];
  incomingLinks: string[];
  outgoingLinks: string[];
}

/** The global link graph (Stage 2 output). */
export interface LinkGraph {
  pages: LinkGraphPage[];
  brokenLinks: string[];
  orphanPages: string[];
  duplicateSlugs: string[];
}

// Content validation. Runs over the cleaned WikiPages (+ link graph) and reports
// structural problems. Pure code — no model.

import type { WikiPage, LinkGraph } from './types';
import { bodyContainsMetadata } from './cleanArticleMarkdown';

export interface ValidationIssue {
  level: 'error' | 'warning';
  slug: string;
  rule: string;
  message: string;
}

// Field names that must never appear as literal text in rendered body content.
const FORBIDDEN_BODY_TOKENS = [
  'sourcePath',
  'sourceFile',
  'sanityDocumentIdCandidate',
  'publicationBlockers',
  'questionsForReview',
  'qualityChecks',
  'internalLinks',
  'relatedPageSlugs',
  'parentSlug',
  'childPageSlugs',
];

// Headings that indicate raw metadata sections leaked into body content.
const FORBIDDEN_HEADINGS = /^#{2,3}\s+(classification|related pages)\s*$/im;

function bodyText(page: WikiPage): string {
  return (page.bodySections || []).map((s) => `${s.heading}\n${s.bodyMarkdown}`).join('\n\n');
}

export function validateContent(pages: WikiPage[], graph: LinkGraph): ValidationIssue[] {
  const issues: ValidationIssue[] = [];
  const seen = new Set<string>();
  const slugSet = new Set(pages.map((p) => p.slug));

  for (const page of pages) {
    const body = bodyText(page);

    // Duplicate slugs.
    if (seen.has(page.slug)) {
      issues.push({ level: 'error', slug: page.slug, rule: 'duplicate-slug', message: `Duplicate slug "${page.slug}".` });
    }
    seen.add(page.slug);

    // Missing title / summary.
    if (!page.title || !page.title.trim()) {
      issues.push({ level: 'error', slug: page.slug, rule: 'missing-title', message: 'Page has no title.' });
    }
    if (!page.summary || !page.summary.trim()) {
      issues.push({ level: 'error', slug: page.slug, rule: 'missing-summary', message: 'Page has no summary.' });
    }
    if (!page.bodySections || page.bodySections.length === 0) {
      issues.push({ level: 'warning', slug: page.slug, rule: 'empty-body', message: 'Page has no body sections.' });
    }

    // Raw metadata field tokens accidentally rendered in body.
    for (const token of FORBIDDEN_BODY_TOKENS) {
      const re = new RegExp(`\\b${token}\\b`);
      if (re.test(body)) {
        issues.push({
          level: 'error',
          slug: page.slug,
          rule: 'raw-metadata-in-body',
          message: `Body contains raw metadata field "${token}".`,
        });
      }
    }

    // Technical metadata sections (Classification / Related pages) leaked into body.
    if (FORBIDDEN_HEADINGS.test(body) || bodyContainsMetadata(body)) {
      issues.push({
        level: 'error',
        slug: page.slug,
        rule: 'metadata-section-in-body',
        message: 'Body contains a technical metadata section (Classification / Related pages).',
      });
    }

    // Related pages pointing at missing slugs.
    for (const rel of page.relatedPageSlugs || []) {
      if (!slugSet.has(rel)) {
        issues.push({
          level: 'error',
          slug: page.slug,
          rule: 'broken-related',
          message: `relatedPageSlugs references missing slug "${rel}".`,
        });
      }
    }

    // Internal links pointing at missing slugs.
    for (const link of page.internalLinks || []) {
      if (!slugSet.has(link.targetSlug)) {
        issues.push({
          level: 'error',
          slug: page.slug,
          rule: 'broken-internal-link',
          message: `internalLinks references missing slug "${link.targetSlug}".`,
        });
      }
    }
  }

  // Graph-level findings.
  for (const broken of graph.brokenLinks) {
    issues.push({ level: 'error', slug: '(graph)', rule: 'broken-link', message: `Unresolvable link target "${broken}".` });
  }
  for (const dup of graph.duplicateSlugs) {
    issues.push({ level: 'error', slug: dup, rule: 'duplicate-slug', message: `Duplicate slug in graph "${dup}".` });
  }
  for (const orphan of graph.orphanPages) {
    issues.push({
      level: 'warning',
      slug: orphan,
      rule: 'orphan-page',
      message: 'Page has no incoming links and no parent (orphan).',
    });
  }

  return issues;
}

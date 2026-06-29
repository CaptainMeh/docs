// Renders one WikiPage as a documentation article. Renders ONLY public content:
// title, summary, key facts, TOC, body sections, evidence, limitations, related pages,
// prev/next. Never renders sourcePath, internalLinks-as-data, classification metadata, etc.

import React, { useMemo } from 'react';
import type { WikiPage } from '../lib/types';
import { Markdown, extractHeadings, slugifyHeading } from '../src/markdown';
import { TableOfContents } from './TableOfContents';
import { KeyFacts } from './KeyFacts';
import { EvidenceBox } from './EvidenceBox';
import { LimitationsBox } from './LimitationsBox';
import { RelatedPages } from './RelatedPages';
import { neighbours } from '../src/content';

const PAGE_TYPE_LABELS: Record<string, string> = {
  'case-study': 'Case study',
  'glossary-term': 'Glossary',
  concept: 'Concept',
  situation: 'Situation',
  failure: 'Failure',
  context: 'Context',
  capability: 'Capability',
  practice: 'Practice',
  outcome: 'Outcome',
  'method-phase': 'Method phase',
  'method-pillar': 'Method',
  philosophy: 'Philosophy',
  'buying-guide': 'Buying guide',
};

export function PageRenderer({ page }: { page: WikiPage }): React.ReactElement {
  const headings = useMemo(() => extractHeadings(page.bodySections), [page.slug]);
  const { prev, next } = neighbours(page.slug);
  const typeLabel = PAGE_TYPE_LABELS[page.pageType] || page.pageType;

  return (
    <div className="article-wrap">
      <article className="article">
        <header className="article-header">
          <div className="breadcrumbs">
            <span className="badge">{typeLabel}</span>
            {page.section && <span className="crumb">{page.section}</span>}
          </div>
          <h1>{page.title}</h1>
          <p className="summary">{page.summary}</p>
          {page.tags && page.tags.length > 0 && (
            <div className="tags">
              {page.tags.map((t) => (
                <span className="tag" key={t}>
                  {t}
                </span>
              ))}
            </div>
          )}
        </header>

        <KeyFacts facts={page.keyFacts} />

        <div className="article-body">
          {page.bodySections.map((s, i) => (
            <section key={i} className="body-section">
              {s.heading && <h2 id={slugifyHeading(s.heading)}>{s.heading}</h2>}
              <Markdown markdown={s.bodyMarkdown} />
            </section>
          ))}
        </div>

        <EvidenceBox evidence={page.evidenceSummary} />
        <LimitationsBox limitations={page.evidenceSummary?.limitations} />
        <RelatedPages page={page} />

        <nav className="prevnext" aria-label="Previous and next">
          {prev ? (
            <a className="prevnext-link prev" href={`#/${prev.slug}`}>
              <span className="prevnext-dir">← Previous</span>
              <span className="prevnext-title">{prev.title}</span>
            </a>
          ) : (
            <span />
          )}
          {next ? (
            <a className="prevnext-link next" href={`#/${next.slug}`}>
              <span className="prevnext-dir">Next →</span>
              <span className="prevnext-title">{next.title}</span>
            </a>
          ) : (
            <span />
          )}
        </nav>
      </article>

      <TableOfContents headings={headings} />
    </div>
  );
}

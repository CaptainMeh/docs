// Renders a section overview page: framing for a whole category, then a grouped index
// of its pages. Reached via #/section/<category>.

import React, { useMemo } from 'react';
import { overviews, sidebar, type SectionOverview as Overview } from '../src/content';
import { Markdown, extractHeadings, slugifyHeading } from '../src/markdown';
import { TableOfContents } from './TableOfContents';

export function SectionOverview({ category }: { category: string }): React.ReactElement {
  const overview = overviews.get(category) as Overview | undefined;
  const cat = sidebar.find((c) => c.key === category);
  const headings = useMemo(() => (overview ? extractHeadings(overview.bodySections) : []), [category]);

  if (!cat) {
    return (
      <div className="notfound">
        <h1>Unknown section</h1>
        <p>
          No section <code>{category}</code>. <a href="#/">Back to home</a>.
        </p>
      </div>
    );
  }

  const total = cat.sections.reduce((n, s) => n + s.pages.length, 0);

  return (
    <div className="article-wrap">
      <article className="article">
        <header className="article-header">
          <div className="breadcrumbs">
            <span className="badge">Section</span>
            <span className="crumb">{total} pages</span>
          </div>
          <h1>{overview?.title || cat.label}</h1>
          {overview?.summary && <p className="summary">{overview.summary}</p>}
        </header>

        {overview && (
          <div className="article-body">
            {overview.bodySections.map((s, i) => (
              <section key={i} className="body-section">
                {s.heading && <h2 id={slugifyHeading(s.heading)}>{s.heading}</h2>}
                <Markdown markdown={s.bodyMarkdown} />
              </section>
            ))}
          </div>
        )}

        <section className="section-index">
          <div className="block-title">Pages in this section</div>
          {cat.sections.map((s) => (
            <div className="section-index-group" key={s.key}>
              {s.label && <div className="section-index-label">{s.label}</div>}
              <ul>
                {s.pages.map((p) => (
                  <li key={p.slug}>
                    <a href={`#/${p.slug}`}>{p.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      </article>

      <TableOfContents headings={headings} />
    </div>
  );
}

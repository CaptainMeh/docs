// Docs homepage: short intro + category cards built from the sidebar tree.

import React, { useState } from 'react';
import { sidebar, pages, linkGraph } from '../src/content';

const PREVIEW = 6; // pages shown before the "Show all" toggle

function CategoryCard({ cat }: { cat: (typeof sidebar)[number] }): React.ReactElement {
  const [expanded, setExpanded] = useState(false);
  const allPages = cat.sections.flatMap((s) => s.pages);
  const count = allPages.length;
  const visible = expanded ? allPages : allPages.slice(0, PREVIEW);
  const hidden = count - visible.length;

  return (
    <div className="home-card">
      <div className="home-card-head">
        <h2>{cat.label}</h2>
        <span className="home-card-count">{count}</span>
      </div>
      <ul>
        {visible.map((p) => (
          <li key={p.slug}>
            <a href={`#/${p.slug}`}>{p.title}</a>
          </li>
        ))}
      </ul>
      {(hidden > 0 || expanded) && (
        <button className="home-card-toggle" onClick={() => setExpanded((v) => !v)}>
          {expanded ? 'Show less' : `Show all ${count} →`}
        </button>
      )}
    </div>
  );
}

export function Home(): React.ReactElement {
  return (
    <div className="home">
      <section className="home-hero">
        <h1>Creative Navy Documentation</h1>
        <p>
          A structured knowledge base covering Creative Navy's Critical Systems Design method, the contexts and
          situations it addresses, the failures it diagnoses, the outcomes it produces, and the case-study evidence
          behind them. {pages.length} pages, interlinked from the project's own taxonomy.
        </p>
        <div className="home-stats">
          <span>{pages.length} pages</span>
          <span>{sidebar.length} categories</span>
          <span>{linkGraph.pages.reduce((n, p) => n + p.outgoingLinks.length, 0)} internal links</span>
        </div>
      </section>

      <div className="home-grid">
        {sidebar.map((cat) => (
          <CategoryCard cat={cat} key={cat.key} />
        ))}
      </div>
    </div>
  );
}

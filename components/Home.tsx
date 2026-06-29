// Docs homepage: short intro + category cards built from the sidebar tree.

import React from 'react';
import { sidebar, pages, linkGraph } from '../src/content';

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
        {sidebar.map((cat) => {
          const count = cat.sections.reduce((n, s) => n + s.pages.length, 0);
          const sample = cat.sections.flatMap((s) => s.pages).slice(0, 4);
          return (
            <div className="home-card" key={cat.key}>
              <div className="home-card-head">
                <h2>{cat.label}</h2>
                <span className="home-card-count">{count}</span>
              </div>
              <ul>
                {sample.map((p) => (
                  <li key={p.slug}>
                    <a href={`#/${p.slug}`}>{p.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}

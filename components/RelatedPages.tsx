// Related page cards, generated from the link graph (related ∪ outgoing), with titles
// resolved through the graph. Falls back to the page's own relatedPageSlugs.

import React from 'react';
import { graphBySlug, pageBySlug, titleOf } from '../src/content';
import type { WikiPage } from '../lib/types';

export function RelatedPages({ page }: { page: WikiPage }): React.ReactElement | null {
  const node = graphBySlug.get(page.slug);
  const related = new Set<string>();
  (node?.related || page.relatedPageSlugs || []).forEach((s) => related.add(s));
  (node?.outgoingLinks || []).forEach((s) => related.add(s));
  // Reasons from the page's structured internalLinks, when present.
  const reasonBySlug = new Map<string, string>();
  for (const l of page.internalLinks || []) if (l.reason) reasonBySlug.set(l.targetSlug, l.reason);

  const slugs = [...related].filter((s) => pageBySlug.has(s) && s !== page.slug);
  if (slugs.length === 0) return null;

  return (
    <section className="related-pages" aria-label="Related pages">
      <div className="block-title">Related pages</div>
      <div className="related-grid">
        {slugs.map((slug) => {
          const target = pageBySlug.get(slug)!;
          return (
            <a className="related-card" href={`#/${slug}`} key={slug}>
              <div className="related-card-title">{titleOf(slug)}</div>
              <div className="related-card-meta">{target.category}</div>
              {reasonBySlug.get(slug) && <div className="related-card-reason">{reasonBySlug.get(slug)}</div>}
            </a>
          );
        })}
      </div>
    </section>
  );
}

// On-page Table of Contents built from the page's section/sub-section headings.
// Highlights the heading currently in view via IntersectionObserver.

import React, { useEffect, useState } from 'react';
import type { TocHeading } from '../src/markdown';

export function TableOfContents({ headings }: { headings: TocHeading[] }): React.ReactElement | null {
  const [active, setActive] = useState<string>(headings[0]?.id ?? '');

  useEffect(() => {
    if (headings.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '0px 0px -70% 0px', threshold: 0 },
    );
    headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [headings]);

  if (headings.length < 2) return null;

  return (
    <aside className="toc" aria-label="On this page">
      <div className="toc-title">On this page</div>
      <ul>
        {headings.map((h) => (
          <li key={h.id} className={`toc-l${h.level} ${active === h.id ? 'active' : ''}`}>
            <a
              href={`#${h.id}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(h.id)?.scrollIntoView({ behavior: 'smooth' });
                history.replaceState(null, '', `${window.location.hash.split('#').slice(0, 2).join('#')}`);
              }}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

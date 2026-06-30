// Sidebar navigation built from the link graph / sidebar tree (Category -> Section -> Page).

import React, { useMemo, useState } from 'react';
import { sidebar } from '../src/content';
import { currentSlug, navigate } from '../src/router';

export function Sidebar({ activeSlug, query }: { activeSlug: string; query: string }): React.ReactElement {
  const q = query.trim().toLowerCase();

  // Which categories are open. By default, the one containing the active page.
  const activeCategory = useMemo(() => {
    for (const c of sidebar) for (const s of c.sections) if (s.pages.some((p) => p.slug === activeSlug)) return c.key;
    return sidebar[0]?.key;
  }, [activeSlug]);

  const [open, setOpen] = useState<Record<string, boolean>>({});
  const isOpen = (key: string) => (key in open ? open[key] : key === activeCategory || q.length > 0);

  return (
    <nav className="sidebar" aria-label="Documentation navigation">
      <a className="sidebar-home" href="#/" onClick={() => navigate('')}>
        Home
      </a>
      {sidebar.map((cat) => {
        const sections = cat.sections
          .map((s) => ({
            ...s,
            pages: q ? s.pages.filter((p) => p.title.toLowerCase().includes(q) || p.slug.includes(q)) : s.pages,
          }))
          .filter((s) => s.pages.length > 0);
        if (sections.length === 0) return null;
        const count = sections.reduce((n, s) => n + s.pages.length, 0);
        const opened = isOpen(cat.key);
        return (
          <div className="sidebar-category" key={cat.key}>
            <div className="sidebar-category-toggle">
              <button
                className="chevron-btn"
                aria-expanded={opened}
                aria-label={`Toggle ${cat.label}`}
                onClick={() => setOpen((o) => ({ ...o, [cat.key]: !opened }))}
              >
                <span className={`chevron ${opened ? 'open' : ''}`}>›</span>
              </button>
              <a
                className={`sidebar-category-label ${activeSlug === `section/${cat.key}` ? 'active' : ''}`}
                href={`#/section/${cat.key}`}
              >
                {cat.label}
              </a>
              <span className="sidebar-count">{count}</span>
            </div>
            {opened && (
              <div className="sidebar-sections">
                {sections.map((s) => (
                  <div className="sidebar-section" key={s.key}>
                    {s.label && <div className="sidebar-section-label">{s.label}</div>}
                    <ul>
                      {s.pages.map((p) => (
                        <li key={p.slug}>
                          <a
                            href={`#/${p.slug}`}
                            className={p.slug === activeSlug ? 'active' : ''}
                            aria-current={p.slug === activeSlug ? 'page' : undefined}
                          >
                            {p.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
}

export { currentSlug };

// Top-level docs shell: header (brand + search), sidebar, and main content slot.

import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { SearchBox } from './SearchBox';

export function DocsLayout({ activeSlug, children }: { activeSlug: string; children: React.ReactNode }): React.ReactElement {
  const [navOpen, setNavOpen] = useState(false);
  const [query] = useState('');

  return (
    <div className="docs">
      <header className="topbar">
        <button className="nav-toggle" aria-label="Toggle navigation" onClick={() => setNavOpen((v) => !v)}>
          ☰
        </button>
        <a className="brand" href="#/">
          <span className="brand-mark">CN</span>
          <span className="brand-text">Creative Navy Docs</span>
        </a>
        <div className="topbar-search">
          <SearchBox />
        </div>
      </header>
      <div className="docs-body">
        <div className={`sidebar-wrap ${navOpen ? 'open' : ''}`} onClick={() => setNavOpen(false)}>
          <Sidebar activeSlug={activeSlug} query={query} />
        </div>
        <main className="main">{children}</main>
      </div>
    </div>
  );
}

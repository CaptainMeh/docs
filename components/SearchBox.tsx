// Search over titles, summaries, tags, headings, and body text. Pure client-side index
// built once from the cleaned wiki pages.

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { pages } from '../src/content';
import { navigate } from '../src/router';
import type { WikiPage } from '../lib/types';

interface IndexedPage {
  page: WikiPage;
  haystack: string;
  headings: string;
}

const index: IndexedPage[] = pages.map((p) => ({
  page: p,
  haystack: [
    p.title,
    p.summary,
    (p.tags || []).join(' '),
    (p.keyFacts || []).join(' '),
    p.bodySections.map((s) => `${s.heading} ${s.bodyMarkdown}`).join(' '),
  ]
    .join(' ')
    .toLowerCase(),
  headings: p.bodySections.map((s) => s.heading).join(' • '),
}));

function score(item: IndexedPage, terms: string[]): number {
  let s = 0;
  const title = item.page.title.toLowerCase();
  for (const t of terms) {
    if (!item.haystack.includes(t)) return -1; // require all terms
    if (title.includes(t)) s += 10;
    if (item.page.summary.toLowerCase().includes(t)) s += 4;
    s += (item.haystack.split(t).length - 1) * 0.5;
  }
  return s;
}

export function SearchBox(): React.ReactElement {
  const [q, setQ] = useState('');
  const [open, setOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const boxRef = useRef<HTMLDivElement>(null);

  const results = useMemo(() => {
    const terms = q.trim().toLowerCase().split(/\s+/).filter(Boolean);
    if (terms.length === 0) return [];
    return index
      .map((item) => ({ item, s: score(item, terms) }))
      .filter((r) => r.s >= 0)
      .sort((a, b) => b.s - a.s)
      .slice(0, 12);
  }, [q]);

  useEffect(() => setActiveIdx(0), [q]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (boxRef.current && !boxRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if ((e.key === 'k' && (e.metaKey || e.ctrlKey)) || e.key === '/') {
        const el = boxRef.current?.querySelector('input');
        if (el && document.activeElement !== el) {
          e.preventDefault();
          (el as HTMLInputElement).focus();
        }
      }
    };
    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  function go(slug: string) {
    navigate(slug);
    setOpen(false);
    setQ('');
  }

  return (
    <div className="search" ref={boxRef}>
      <input
        type="search"
        placeholder="Search the docs…  (⌘K)"
        value={q}
        onChange={(e) => {
          setQ(e.target.value);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
        onKeyDown={(e) => {
          if (e.key === 'ArrowDown') {
            e.preventDefault();
            setActiveIdx((i) => Math.min(i + 1, results.length - 1));
          } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            setActiveIdx((i) => Math.max(i - 1, 0));
          } else if (e.key === 'Enter' && results[activeIdx]) {
            go(results[activeIdx].item.page.slug);
          } else if (e.key === 'Escape') {
            setOpen(false);
          }
        }}
        aria-label="Search documentation"
      />
      {open && q.trim() && (
        <div className="search-results">
          {results.length === 0 && <div className="search-empty">No results for “{q}”.</div>}
          {results.map((r, i) => (
            <a
              key={r.item.page.slug}
              href={`#/${r.item.page.slug}`}
              className={`search-result ${i === activeIdx ? 'active' : ''}`}
              onMouseEnter={() => setActiveIdx(i)}
              onClick={() => go(r.item.page.slug)}
            >
              <div className="search-result-title">{r.item.page.title}</div>
              <div className="search-result-summary">{r.item.page.summary}</div>
              <div className="search-result-cat">{r.item.page.category}</div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

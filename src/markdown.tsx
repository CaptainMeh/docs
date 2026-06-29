// Compact, dependency-free Markdown renderer covering the subset used by these docs:
// H2/H3 headings, paragraphs, unordered/ordered lists, bold/italic/inline-code, and
// links. Internal links of the form [text](slug) or [text](#/slug) route in-app.
//
// It also exposes slugifyHeading + extractHeadings so the Table of Contents and the
// rendered headings share identical ids.

import React from 'react';

export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/[`*_]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80);
}

export interface TocHeading {
  id: string;
  text: string;
  level: number;
}

/** Pull H2/H3 headings (in order) from a set of body sections' raw markdown. */
export function extractHeadings(sections: { heading: string; bodyMarkdown: string }[]): TocHeading[] {
  const out: TocHeading[] = [];
  for (const s of sections) {
    if (s.heading) out.push({ id: slugifyHeading(s.heading), text: s.heading, level: 2 });
    for (const line of s.bodyMarkdown.split('\n')) {
      const m = /^###\s+(.*)$/.exec(line.trim());
      if (m) out.push({ id: slugifyHeading(m[1]), text: m[1].trim(), level: 3 });
    }
  }
  return out;
}

// ---- Inline parsing -------------------------------------------------------------------
let keySeq = 0;
function k(): string {
  return `i${keySeq++}`;
}

function renderInline(text: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  // Tokenise: links, bold, italic, inline code.
  const re = /(\[[^\]]+\]\([^)]+\))|(\*\*[^*]+\*\*)|(`[^`]+`)|(\*[^*]+\*)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text))) {
    if (m.index > last) nodes.push(text.slice(last, m.index));
    const tok = m[0];
    if (tok.startsWith('[')) {
      const lm = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(tok)!;
      const label = lm[1];
      let href = lm[2];
      const isExternal = /^https?:\/\//.test(href);
      if (!isExternal) {
        // Treat as an internal slug reference.
        const slug = href.replace(/^#?\/?/, '').replace(/^\//, '');
        href = `#/${slug}`;
      }
      nodes.push(
        <a key={k()} href={href} {...(isExternal ? { target: '_blank', rel: 'noreferrer' } : {})}>
          {label}
        </a>,
      );
    } else if (tok.startsWith('**')) {
      nodes.push(<strong key={k()}>{tok.slice(2, -2)}</strong>);
    } else if (tok.startsWith('`')) {
      nodes.push(<code key={k()}>{tok.slice(1, -1)}</code>);
    } else if (tok.startsWith('*')) {
      nodes.push(<em key={k()}>{tok.slice(1, -1)}</em>);
    }
    last = re.lastIndex;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

// ---- Block parsing --------------------------------------------------------------------
export function Markdown({ markdown }: { markdown: string }): React.ReactElement {
  const lines = (markdown || '').replace(/\r\n/g, '\n').split('\n');
  const blocks: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.trim() === '') {
      i++;
      continue;
    }

    // H3 (H2 handled at the section level, but tolerate inline ## too).
    const h3 = /^###\s+(.*)$/.exec(line.trim());
    if (h3) {
      const id = slugifyHeading(h3[1]);
      blocks.push(
        <h3 key={k()} id={id}>
          {renderInline(h3[1].trim())}
        </h3>,
      );
      i++;
      continue;
    }
    const h2 = /^##\s+(.*)$/.exec(line.trim());
    if (h2) {
      const id = slugifyHeading(h2[1]);
      blocks.push(
        <h2 key={k()} id={id}>
          {renderInline(h2[1].trim())}
        </h2>,
      );
      i++;
      continue;
    }

    // Unordered list.
    if (/^\s*[-*]\s+/.test(line)) {
      const items: React.ReactNode[] = [];
      while (i < lines.length && /^\s*[-*]\s+/.test(lines[i])) {
        items.push(<li key={k()}>{renderInline(lines[i].replace(/^\s*[-*]\s+/, ''))}</li>);
        i++;
      }
      blocks.push(<ul key={k()}>{items}</ul>);
      continue;
    }

    // Ordered list.
    if (/^\s*\d+\.\s+/.test(line)) {
      const items: React.ReactNode[] = [];
      while (i < lines.length && /^\s*\d+\.\s+/.test(lines[i])) {
        items.push(<li key={k()}>{renderInline(lines[i].replace(/^\s*\d+\.\s+/, ''))}</li>);
        i++;
      }
      blocks.push(<ol key={k()}>{items}</ol>);
      continue;
    }

    // Blockquote.
    if (/^\s*>\s?/.test(line)) {
      const quote: string[] = [];
      while (i < lines.length && /^\s*>\s?/.test(lines[i])) {
        quote.push(lines[i].replace(/^\s*>\s?/, ''));
        i++;
      }
      blocks.push(<blockquote key={k()}>{renderInline(quote.join(' '))}</blockquote>);
      continue;
    }

    // Paragraph: gather consecutive non-blank, non-block lines.
    const para: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() !== '' &&
      !/^\s*[-*]\s+/.test(lines[i]) &&
      !/^\s*\d+\.\s+/.test(lines[i]) &&
      !/^#{2,3}\s+/.test(lines[i].trim()) &&
      !/^\s*>\s?/.test(lines[i])
    ) {
      para.push(lines[i]);
      i++;
    }
    blocks.push(<p key={k()}>{renderInline(para.join(' '))}</p>);
  }

  return <>{blocks}</>;
}

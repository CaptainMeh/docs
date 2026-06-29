// Key facts block — a compact, scannable list of the page's load-bearing facts.

import React from 'react';
import { Markdown } from '../src/markdown';

export function KeyFacts({ facts }: { facts?: string[] }): React.ReactElement | null {
  if (!facts || facts.length === 0) return null;
  return (
    <section className="keyfacts" aria-label="Key facts">
      <div className="block-title">Key facts</div>
      <ul>
        {facts.map((f, i) => (
          <li key={i}>
            <Markdown markdown={f} />
          </li>
        ))}
      </ul>
    </section>
  );
}

// Limitations — the explicit boundaries of what the page's evidence does and does not show.

import React from 'react';

export function LimitationsBox({ limitations }: { limitations?: string[] }): React.ReactElement | null {
  if (!limitations || limitations.length === 0) return null;
  return (
    <section className="limitations-box" aria-label="Limitations">
      <div className="block-title">Limitations</div>
      <ul>
        {limitations.map((l, i) => (
          <li key={i}>{l}</li>
        ))}
      </ul>
    </section>
  );
}

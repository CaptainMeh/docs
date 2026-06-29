// Evidence summary — strong vs weaker claims, kept calibrated and clearly separated.
// Renders nothing unless there is at least one claim to show.

import React from 'react';
import type { WikiEvidenceSummary } from '../lib/types';

export function EvidenceBox({ evidence }: { evidence?: WikiEvidenceSummary }): React.ReactElement | null {
  if (!evidence) return null;
  const strong = evidence.strongClaims || [];
  const weaker = evidence.weakerClaims || [];
  if (strong.length === 0 && weaker.length === 0) return null;

  return (
    <section className="evidence-box" aria-label="Evidence summary">
      <div className="block-title">Evidence summary</div>
      {strong.length > 0 && (
        <div className="evidence-group">
          <div className="evidence-label strong">Well-supported claims</div>
          <ul>
            {strong.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </div>
      )}
      {weaker.length > 0 && (
        <div className="evidence-group">
          <div className="evidence-label weak">Client-reported or less-verified claims</div>
          <ul>
            {weaker.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

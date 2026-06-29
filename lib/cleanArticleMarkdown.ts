// Deterministic removal of repeated metadata blocks from a generated bodyMarkdown.
//
// The upstream generator embedded routing/classification metadata directly into
// bodyMarkdown. Three patterns recur and must never reach the rendered page:
//
//   1. A leading bullet block of "- **Primary case-study category:** ..." lines.
//   2. The same four fields repeated as loose paragraphs, often 2-4 times.
//   3. A "## Classification" section, and a trailing "## Related pages" section,
//      both of which only restate structured metadata (parentSlug / relatedPageSlugs).
//
// This cleaner is intentionally conservative: it only strips blocks that match the
// known metadata shapes, so genuine article prose is never removed. It runs before
// the OpenAI call (to give the model clean input) and again as the offline transform.

const META_FIELD_RE =
  /^\s*[-*]?\s*\**(Primary case-study category|Primary context|Also-relevant contexts|Connects to)\**\s*:/i;

/** Headings whose entire section is metadata and must be dropped. */
const META_HEADINGS = new Set(['classification', 'related pages']);

function isMetaHeading(line: string): boolean {
  const m = /^#{2,3}\s+(.*)$/.exec(line.trim());
  if (!m) return false;
  return META_HEADINGS.has(m[1].trim().toLowerCase());
}

function isHeading(line: string): boolean {
  return /^#{1,6}\s+/.test(line.trim());
}

export function cleanArticleMarkdown(markdown: string): string {
  if (!markdown) return '';
  const lines = markdown.replace(/\r\n/g, '\n').split('\n');
  const out: string[] = [];

  let i = 0;
  // Drop any leading run of metadata bullet/field lines and blank lines before
  // the first real heading or paragraph.
  while (i < lines.length) {
    const line = lines[i];
    if (line.trim() === '' || META_FIELD_RE.test(line)) {
      i++;
      continue;
    }
    break;
  }

  while (i < lines.length) {
    const line = lines[i];

    // Skip whole metadata sections (## Classification / ## Related pages) until the
    // next heading of equal-or-higher level or end of document.
    if (isMetaHeading(line)) {
      i++;
      while (i < lines.length && !isHeading(lines[i])) i++;
      continue;
    }

    // Skip stray repeated metadata field lines anywhere in the body.
    if (META_FIELD_RE.test(line)) {
      i++;
      continue;
    }

    out.push(line);
    i++;
  }

  // Collapse the runs of blank lines left behind by removed blocks.
  return out
    .join('\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

/** Quick predicate used by validation to detect un-cleaned bodies. */
export function bodyContainsMetadata(markdown: string): boolean {
  if (!markdown) return false;
  const lines = markdown.replace(/\r\n/g, '\n').split('\n');
  return lines.some((l) => isMetaHeading(l) || META_FIELD_RE.test(l));
}

// Validation script. Checks the cleaned WikiPages + link graph and prints a report.
// Exits non-zero if any error-level issues are found (CI / pre-commit friendly).

import { loadWikiPages, loadLinkGraph } from '../lib/loadContent';
import { buildLinkGraph } from '../lib/buildLinkGraph';
import { validateContent } from '../lib/validateContent';

function main() {
  const pages = loadWikiPages();
  if (pages.length === 0) {
    console.error('No wiki pages found. Run `npm run generate:wiki-pages` first.');
    process.exit(1);
  }
  const graph = loadLinkGraph() || buildLinkGraph(pages);
  const issues = validateContent(pages, graph);

  const errors = issues.filter((i) => i.level === 'error');
  const warnings = issues.filter((i) => i.level === 'warning');

  const byRule = new Map<string, number>();
  for (const i of issues) byRule.set(i.rule, (byRule.get(i.rule) || 0) + 1);

  console.log(`Validated ${pages.length} pages.\n`);

  if (issues.length === 0) {
    console.log('✓ No issues found.');
    return;
  }

  console.log('Summary by rule:');
  for (const [rule, n] of [...byRule.entries()].sort((a, b) => b[1] - a[1])) {
    console.log(`  ${rule}: ${n}`);
  }
  console.log('');

  const show = (label: string, list: typeof issues) => {
    if (!list.length) return;
    console.log(`${label} (${list.length}):`);
    for (const i of list.slice(0, 100)) console.log(`  [${i.rule}] ${i.slug}: ${i.message}`);
    if (list.length > 100) console.log(`  ...and ${list.length - 100} more`);
    console.log('');
  };

  show('ERRORS', errors);
  show('WARNINGS', warnings);

  console.log(`Result: ${errors.length} error(s), ${warnings.length} warning(s).`);
  if (errors.length > 0) process.exit(1);
}

main();

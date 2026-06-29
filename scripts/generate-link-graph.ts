// Stage 2 — Link graph generation.
//
// Builds content/linkGraph.json from the cleaned WikiPages using only existing structured
// metadata (parentSlug, childPageSlugs, relatedPageSlugs, internalLinks). No new taxonomy.

import { loadWikiPages, writeLinkGraph } from '../lib/loadContent';
import { buildLinkGraph } from '../lib/buildLinkGraph';

function main() {
  const pages = loadWikiPages();
  if (pages.length === 0) {
    console.error('No wiki pages found. Run `npm run generate:wiki-pages` first.');
    process.exit(1);
  }
  const graph = buildLinkGraph(pages);
  writeLinkGraph(graph);
  console.log(
    `Stage 2: link graph for ${graph.pages.length} pages — ` +
      `broken=${graph.brokenLinks.length} orphans=${graph.orphanPages.length} duplicates=${graph.duplicateSlugs.length}`,
  );
}

main();

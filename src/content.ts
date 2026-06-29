// Browser-side content loading. Cleaned wiki pages and the link graph are bundled at
// build time via Vite's import.meta.glob — the site reads ONLY content/wiki + linkGraph,
// never content/raw.

import type { WikiPage, LinkGraph, LinkGraphPage } from '../lib/types';
import { buildSidebar, type SidebarCategory } from '../lib/buildSidebar';

const wikiModules = import.meta.glob<WikiPage>('../content/wiki/*.json', { eager: true, import: 'default' });

export const pages: WikiPage[] = Object.entries(wikiModules)
  .filter(([, p]) => p && (p as WikiPage).slug)
  .map(([, p]) => p as WikiPage)
  .sort((a, b) => a.title.localeCompare(b.title));

export const pageBySlug = new Map<string, WikiPage>(pages.map((p) => [p.slug, p]));

// Link graph is generated; if it is missing we degrade gracefully to an empty graph.
const graphModules = import.meta.glob<LinkGraph>('../content/linkGraph.json', { eager: true, import: 'default' });
export const linkGraph: LinkGraph =
  (Object.values(graphModules)[0] as LinkGraph) || { pages: [], brokenLinks: [], orphanPages: [], duplicateSlugs: [] };
export const graphBySlug = new Map<string, LinkGraphPage>(linkGraph.pages.map((p) => [p.slug, p]));

export const sidebar: SidebarCategory[] = buildSidebar(pages);

// Flat reading order (sidebar order) for previous/next navigation.
export const readingOrder: string[] = sidebar.flatMap((c) => c.sections.flatMap((s) => s.pages.map((p) => p.slug)));

export function neighbours(slug: string): { prev?: WikiPage; next?: WikiPage } {
  const i = readingOrder.indexOf(slug);
  if (i === -1) return {};
  return {
    prev: i > 0 ? pageBySlug.get(readingOrder[i - 1]) : undefined,
    next: i < readingOrder.length - 1 ? pageBySlug.get(readingOrder[i + 1]) : undefined,
  };
}

export function titleOf(slug: string): string {
  return pageBySlug.get(slug)?.title || slug;
}

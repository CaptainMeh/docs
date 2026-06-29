// Stage 2: build the global link graph from the cleaned WikiPages.
//
// The graph is derived ONLY from existing structured metadata already present on the
// pages — parentSlug, childPageSlugs, relatedPageSlugs, and internalLinks. No new
// taxonomy is invented. parentSlug frequently points at a *section* node rather than a
// real page; such parents are recorded but do not count as edges to a page that exists.

import type { WikiPage, LinkGraph, LinkGraphPage } from './types';

export function buildLinkGraph(pages: WikiPage[]): LinkGraph {
  const bySlug = new Map<string, WikiPage>();
  const duplicateSlugs: string[] = [];

  for (const p of pages) {
    if (bySlug.has(p.slug)) {
      if (!duplicateSlugs.includes(p.slug)) duplicateSlugs.push(p.slug);
    } else {
      bySlug.set(p.slug, p);
    }
  }

  const exists = (slug: string) => bySlug.has(slug);
  const brokenSet = new Set<string>();

  // Outgoing links = relatedPageSlugs ∪ internalLinks targets (deduped, resolvable only).
  const nodes = new Map<string, LinkGraphPage>();
  for (const p of pages) {
    if (nodes.has(p.slug)) continue; // first wins on duplicate

    const related = unique((p.relatedPageSlugs || []).filter((s) => {
      if (!exists(s)) { brokenSet.add(s); return false; }
      return s !== p.slug;
    }));

    const internalTargets = (p.internalLinks || []).map((l) => l.targetSlug).filter((s) => {
      if (!exists(s)) { brokenSet.add(s); return false; }
      return s !== p.slug;
    });

    const outgoing = unique([...related, ...internalTargets]);

    const children = unique((p._meta?.childPageSlugs || []).filter((s) => {
      if (!exists(s)) { brokenSet.add(s); return false; }
      return s !== p.slug;
    }));

    const parent = p._meta?.parentSlug && exists(p._meta.parentSlug) ? p._meta.parentSlug : undefined;

    nodes.set(p.slug, {
      slug: p.slug,
      title: p.title,
      category: p.category,
      section: p.section,
      parent,
      children,
      related,
      incomingLinks: [],
      outgoingLinks: outgoing,
    });
  }

  // Second pass: incoming links from every resolvable outgoing edge + parent/child edges.
  for (const node of nodes.values()) {
    for (const target of node.outgoingLinks) {
      const t = nodes.get(target);
      if (t && !t.incomingLinks.includes(node.slug)) t.incomingLinks.push(node.slug);
    }
    // A declared child implies an incoming structural link too.
    for (const child of node.children) {
      const c = nodes.get(child);
      if (c && !c.incomingLinks.includes(node.slug)) c.incomingLinks.push(node.slug);
    }
  }

  // Orphans: no incoming links AND no resolvable parent (truly unreachable via the graph).
  const orphanPages: string[] = [];
  for (const node of nodes.values()) {
    if (node.incomingLinks.length === 0 && !node.parent) orphanPages.push(node.slug);
  }

  return {
    pages: [...nodes.values()].sort((a, b) => a.slug.localeCompare(b.slug)),
    brokenLinks: [...brokenSet].sort(),
    orphanPages: orphanPages.sort(),
    duplicateSlugs: duplicateSlugs.sort(),
  };
}

function unique<T>(arr: T[]): T[] {
  return [...new Set(arr)];
}

// Build the sidebar navigation tree from cleaned WikiPages.
//
// Two-level grouping that mirrors the existing taxonomy: Category -> Section (from
// parentSlug) -> Page. Categories and sections are ordered to match site_structure.md;
// anything unlisted falls to the end alphabetically. Pure code — no model.

import type { WikiPage } from './types';
import { humaniseSection } from './transformArticle';

export interface SidebarPage {
  slug: string;
  title: string;
}
export interface SidebarSection {
  key: string;
  label: string;
  pages: SidebarPage[];
}
export interface SidebarCategory {
  key: string;
  label: string;
  sections: SidebarSection[];
}

// Order and display labels for the top-level categories (from site_structure.md).
const CATEGORY_ORDER: { key: string; label: string }[] = [
  { key: 'organisation', label: 'Organisation' },
  { key: 'philosophy', label: 'Philosophy' },
  { key: 'method', label: 'Method' },
  { key: 'practices', label: 'Practices' },
  { key: 'capabilities', label: 'What We Design' },
  { key: 'contexts', label: 'Contexts' },
  { key: 'situations', label: 'Problems You Recognise' },
  { key: 'failures', label: 'Failure Modes' },
  { key: 'outcomes', label: 'Outcomes' },
  { key: 'evidence', label: 'Evidence & Case Studies' },
  { key: 'glossary', label: 'Glossary' },
  { key: 'buying', label: 'Buying Guide' },
];

function categoryRank(key: string): number {
  const i = CATEGORY_ORDER.findIndex((c) => c.key === key);
  return i === -1 ? CATEGORY_ORDER.length : i;
}

function categoryLabel(key: string): string {
  return CATEGORY_ORDER.find((c) => c.key === key)?.label || humaniseSection(key) || key;
}

export function buildSidebar(pages: WikiPage[]): SidebarCategory[] {
  const cats = new Map<string, Map<string, SidebarSection>>();

  for (const p of pages) {
    const catKey = p.category || 'other';
    if (!cats.has(catKey)) cats.set(catKey, new Map());
    const sections = cats.get(catKey)!;

    const sectionKey = p._meta?.parentSlug || '__none__';
    const sectionLabel = p.section || (sectionKey === '__none__' ? '' : humaniseSection(sectionKey) || sectionKey);
    if (!sections.has(sectionKey)) sections.set(sectionKey, { key: sectionKey, label: sectionLabel || '', pages: [] });
    sections.get(sectionKey)!.pages.push({ slug: p.slug, title: p.title });
  }

  const result: SidebarCategory[] = [];
  for (const [catKey, sectionMap] of cats) {
    const sections = [...sectionMap.values()]
      .map((s) => ({ ...s, pages: s.pages.sort((a, b) => a.title.localeCompare(b.title)) }))
      .sort((a, b) => a.label.localeCompare(b.label));
    result.push({ key: catKey, label: categoryLabel(catKey), sections });
  }

  return result.sort((a, b) => categoryRank(a.key) - categoryRank(b.key) || a.label.localeCompare(b.label));
}

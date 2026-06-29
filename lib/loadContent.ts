// Node-side content loading helpers (used by scripts). The browser app loads
// content via Vite's import.meta.glob instead — see src/content.ts.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import type { RawArticle, WikiPage, LinkGraph } from './types';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const ROOT = path.resolve(__dirname, '..');
export const RAW_DIR = path.join(ROOT, 'content', 'raw');
export const WIKI_DIR = path.join(ROOT, 'content', 'wiki');
export const LINK_GRAPH_PATH = path.join(ROOT, 'content', 'linkGraph.json');

function readJsonDir<T>(dir: string): { file: string; data: T }[] {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.json') && !f.startsWith('.'))
    .sort()
    .map((f) => ({ file: path.join(dir, f), data: JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8')) as T }));
}

export function loadRawArticles(): RawArticle[] {
  return readJsonDir<RawArticle>(RAW_DIR).map((x) => x.data);
}

export function loadWikiPages(): WikiPage[] {
  return readJsonDir<WikiPage>(WIKI_DIR).map((x) => x.data);
}

export function loadLinkGraph(): LinkGraph | null {
  if (!fs.existsSync(LINK_GRAPH_PATH)) return null;
  return JSON.parse(fs.readFileSync(LINK_GRAPH_PATH, 'utf8')) as LinkGraph;
}

export function writeWikiPage(page: WikiPage): void {
  if (!fs.existsSync(WIKI_DIR)) fs.mkdirSync(WIKI_DIR, { recursive: true });
  fs.writeFileSync(path.join(WIKI_DIR, `${page.slug}.json`), JSON.stringify(page, null, 2));
}

export function writeLinkGraph(graph: LinkGraph): void {
  fs.writeFileSync(LINK_GRAPH_PATH, JSON.stringify(graph, null, 2));
}

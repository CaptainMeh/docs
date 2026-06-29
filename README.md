# Creative Navy Documentation Site

A sidebar-based docs/wiki site (OpenAI-API-docs style) built deterministically from the
generated article JSON in `generated/articles/` and the guidance Markdown in `sources/`.

The site renders **cleaned, render-ready article content only**. Technical metadata
(`sourcePath`, `sanityDocumentIdCandidate`, `internalLinks`-as-data, the embedded
`## Classification` / `## Related pages` blocks, `qualityChecks`, etc.) is used solely for
routing, linking, and validation — it never appears as visible article content.

## Pipeline

```
generated/articles/**.json
        │  (flattened to content/raw/<slug>.json)
        ▼
content/raw/*.json
        │  Stage 1 — generate:wiki-pages  (OpenAI Responses API + strict JSON schema,
        │            deterministic offline fallback)
        ▼
content/wiki/*.json          ← clean WikiPage objects (what the site renders)
        │  Stage 2 — generate:link-graph  (pure code, existing metadata only)
        ▼
content/linkGraph.json       ← parent/children/related/incoming/outgoing + broken/orphan/duplicate
        │  validate:content   (pure code)
        ▼
   validation report
        │  vite
        ▼
   docs site (React)
```

OpenAI is used **only** for Stage 1 article structuring and semantic link suggestions.
Rendering, routing, the link graph, validation, and site generation are all normal code.

## Commands

```bash
npm install                      # deps are already vendored in node_modules

npm run generate:wiki-pages      # Stage 1 — OpenAI (needs OPENAI_API_KEY in .env)
npm run generate:link-graph      # Stage 2 — build content/linkGraph.json
npm run validate:content         # validation report (exits non-zero on errors)
npm run dev                      # run the docs site (Vite) at http://localhost:5173

npm run build:content            # runs all three pipeline stages in order
```

### Stage 1 flags

```bash
npm run generate:wiki-pages -- --deterministic        # offline, no API calls (used to seed the corpus)
npm run generate:wiki-pages -- --only kardion,owkin-k # regenerate specific slugs
npm run generate:wiki-pages -- --limit 5              # first N (a cheap paid smoke test)
npm run generate:wiki-pages -- --force                # ignore the cache and regenerate
DEBUG=1 npm run generate:wiki-pages                   # print per-page OpenAI errors
```

Stage 1 is **cached and resumable** (`content/wiki/.cache.json`, keyed by a hash of the raw
article + prompt version), so re-runs only call the API for changed/uncached pages. If
`OPENAI_API_KEY` is absent, or a call fails, the page is produced by the deterministic
transform so the corpus is always complete and the site always builds.

> The committed `content/wiki/*.json` were seeded with the deterministic transform; a few
> pages (e.g. `kardion`) were generated with OpenAI to verify the API path. Run
> `npm run generate:wiki-pages` with a key to (re)generate the full corpus via OpenAI.

## WikiPage shape (Stage 1 output)

```ts
type WikiPage = {
  slug: string
  title: string
  pageType: string
  category?: string
  section?: string          // humanised from parentSlug (sidebar sub-group)
  summary: string
  keyFacts?: string[]
  bodySections: { heading: string; bodyMarkdown: string }[]
  evidenceSummary?: { strongClaims?: string[]; weakerClaims?: string[]; limitations?: string[] }
  relatedPageSlugs?: string[]
  internalLinks?: { anchorText: string; targetSlug: string; reason?: string }[]
  tags?: string[]
  _meta?: { sourcePath?; parentSlug?; childPageSlugs?; generatedBy }  // routing/validation only
}
```

## Validation checks

Duplicate slugs · missing titles · missing summaries · empty bodies · broken internal links ·
related pages pointing at missing slugs · orphan pages · raw metadata fields rendered in body
(`sourcePath`, `qualityChecks`, `internalLinks`, …) · leaked technical sections
(`## Classification`, `## Related pages`) in body content.

## Layout

```
/content   /raw/*.json  /wiki/*.json  linkGraph.json
/scripts   generate-wiki-pages.ts  generate-link-graph.ts  validate-content.ts
/lib       types.ts  loadContent.ts  cleanArticleMarkdown.ts  transformArticle.ts
           buildSidebar.ts  buildLinkGraph.ts  validateContent.ts  openaiClient.ts
/components DocsLayout  Sidebar  PageRenderer  TableOfContents  KeyFacts
           EvidenceBox  LimitationsBox  RelatedPages  SearchBox  Home
/src       main.tsx  App.tsx  content.ts  router.ts  markdown.tsx  styles.css
```

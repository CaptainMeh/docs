# Design — Refresh the creativenavy `/docs` Fumadocs site with our current wiki

**Date:** 2026-07-01
**Repo (target):** `github.com/creativenavy/creativenavy` (production monorepo: Gatsby site + `/docs` Fumadocs app, deployed to `interface-design.co.uk`)
**Content source:** `github.com/CaptainMeh/docs` branch `docs-wiki-preview` (our final built wiki content; identical to this project's `content/`)

---

## 1. Problem & goal

The monorepo's `/docs` folder is a **Next.js 16 + Fumadocs static-export app** that is itself a
reimplementation of our wiki (same `content/raw → content/wiki + linkGraph + overviews` model,
same schema, same rendering concepts). It is a **stale snapshot**: same 212 raw articles, but it
predates our content revision (essay still under `failures`, Kardion missing reconciled contexts,
no `patch-content` stage) and its `section-overview` still renders a bare title list rather than our
full-summary preview cards.

**Goal:** replace the `/docs` content and generation pipeline with **ours**, and restyle the
Fumadocs rendering shell to **match our wiki's exact look** — while preserving the existing
deployment (static export → `docs/out` → Gatsby `public/docs` → Netlify at `interface-design.co.uk/docs`).

Decisions (agreed during brainstorming):
1. **Keep** the Fumadocs Next.js rendering shell + deployment; refresh content + look.
2. **Match our exact styling** (chrome + custom blocks), not just feature parity.
3. **Use our pipeline wholesale**; ignore their `CLAUDE.md` and adapted `docs/` pipeline.
4. **Do not regenerate-and-drop content**: ship the existing content already pushed to
   `CaptainMeh/docs`, copied in as artifacts.
5. Land on a **new branch off `master` → PR**; nothing deploys until merged.

Non-goals: changing the Gatsby site, the Netlify setup, the Sanity webhook, or the docs URL/routing
contract (`/docs`, `trailingSlash`). No new server features.

---

## 2. Current state (verified)

**Deployment contract (must be preserved):**
- `docs/next.config.mjs`: `basePath:'/docs'`, `output:'export'` + `trailingSlash:true` in production,
  `images.unoptimized`. Produces one static HTML file per page under `docs/out/`.
- Root `package.json` → `build-docs`:
  `rm -rf docs/.next public/docs && cd docs && npm ci --include=dev && npm run build && cd .. && mkdir -p public/docs && cp -R docs/out/. public/docs/`.
- Root `deploy-prod-uk`: `gatsby clean && yarn build && yarn build-docs && netlify deploy --prod --site interface-design.co.uk`.
- `.github/workflows/deploy-docs.yml`: self-hosted runner, triggered by `workflow_dispatch` or a
  Sanity `repository_dispatch` (`deploy-docs`); runs `yarn deploy-prod-uk`.
- **The deploy runs only `next build`** (via `build-docs`); it does **not** run `build:content`.
  So the committed `content/wiki` artifacts are what ship. Regeneration is a manual/dev step.

**Renderer seam (confirmed compatible):** `docs/lib/load-content.ts` reads exactly our artifact
shapes — `content/wiki/*.json` (WikiPage), `content/linkGraph.json`, `content/overviews.json`,
`content/raw/*.json` — with `wiki-types.ts` ported from our `lib/types.ts`. So our artifacts render
directly.

**Feature gaps in the stale `/docs`:**
- No `patch-content` → missing context reconciliation, practice/glossary anchoring, blocker-sentence
  pulls (organisation/akrivia/etoro), orphan links, apostrophe normalisation, outcome calibration,
  capability deliverables, situation wording fix, essay move + retitle.
- `section-overview.tsx` renders a bare `<ul>` of title links, not our full-summary preview cards.
- Chrome uses Fumadocs default theme (`fd-*` tokens), not our palette/typography.

---

## 3. Architecture

Three layers, with clear ownership:

| Layer | Source | Action |
|---|---|---|
| **Content artifacts** (`docs/content/*`) | `CaptainMeh/docs@docs-wiki-preview` | Copy in wholesale, replacing stale content |
| **Generation pipeline** (`docs/scripts`, generation `lib`) | Our project | Replace theirs with ours (patch-content made source-independent) |
| **Rendering shell** (`docs/app`, `docs/components`, Next-only `lib`) | Their Fumadocs app | Keep; restyle to match ours; port latest section-overview |
| **Deployment** (next.config, build-docs, workflow) | Their monorepo | Unchanged |

The content artifacts are the **single source of truth for what ships**. The pipeline is a
maintenance tool that must **reproduce those artifacts** (verified by a parity check), not a required
build step.

---

## 4. Content refresh (Section 2, revised)

1. Clone `CaptainMeh/docs@docs-wiki-preview`; take its `content/raw/`, `content/wiki/`,
   `content/overviews.json`, `content/linkGraph.json`.
2. In the monorepo working branch, **delete `docs/content/` and replace** with the copied artifacts.
3. Do **not** regenerate over them. The copied artifacts are final.

Rationale: guarantees the shipped docs are byte-for-byte the content we already reviewed and
approved; removes any risk of a fresh regeneration dropping or altering content.

---

## 5. Pipeline (ours, for future maintenance)

Bring our generation code into `docs/` so future content edits stay consistent:

- Scripts: `generate-wiki-pages.ts`, `patch-content.ts`, `generate-link-graph.ts`,
  `validate-content.ts`.
- Generation lib: `transform-article`, `clean-article-markdown`, `build-link-graph`,
  `build-sidebar`, `types`, `load-content` (writer helpers), plus `openai-client` (unused at build
  time; deterministic fallback covers keyless runs).
- **`patch-content` made source-independent:** the case-study → also-relevant-context map (currently
  parsed from `sources/*.md`, including our Kardion/Squaremind edits) becomes a baked-in `Record<slug, string[]>`
  constant. All other patch steps are already self-contained (no `sources/` needed).
- `build:content` = `generate (deterministic — no OpenAI key required) → patch → link-graph → validate`.

**Lib-seam reconciliation:** the renderer imports kebab-case modules from `docs/lib`
(`load-content`, `wiki-types`, `build-sidebar`, `markdown`, …). We standardise on **our logic** behind
those module names/signatures so renderer imports keep resolving. Where our WikiPage shape carries
fields the renderer doesn't use (e.g. `_meta.patches`), they are ignored harmlessly.

**Parity check (gate):** after wiring, run `npm run build:content` in a scratch copy and diff the
regenerated `content/wiki` + `linkGraph` + `overviews` against the copied CaptainMeh artifacts. They
must match (ignoring key ordering). Any diff is reconciled before merge. `validate-content` must exit 0.

---

## 6. Styling — match our exact look

Keep per-page static HTML (the LLM-retrieval win). Make the Fumadocs output look like our wiki:

- **Theme tokens / globals:** override Fumadocs CSS variables and `docs/app/globals.css` to our
  palette and scale — accent `#10a37f`, link `#0b6bcb`, hairline borders, backgrounds, sidebar active
  state, top bar, body 15px, modest H1 (~30px), h2 ~20px.
- **Custom blocks → match our current components:** port our latest `SectionOverview` (full-summary
  **preview cards** with title + full summary + "Open article", de-duplicated sub-labels), and confirm
  `key-facts`, `evidence-box`, `limitations-box`, `related-pages`, TOC, tags, prev/next match our
  current styling.
- Where Fumadocs chrome (sidebar grouping, header, TOC) diverges from ours, align via config + CSS;
  do not fight the framework where the result already matches our restrained docs intent.

---

## 7. Deployment continuity (explicit requirement)

- `docs/next.config.mjs` unchanged (`basePath:/docs`, `output:'export'`, `trailingSlash:true`).
- Root `build-docs` + `deploy-prod-uk` + `deploy-docs.yml` unchanged.
- **Static-export compatibility verification** (our changes add no server features, but verify):
  - `app/[...slug]` `generateStaticParams` enumerates all our slugs (from copied content).
  - `app/section/[key]` enumerates all categories.
  - `app/api/search/route.ts` must remain export-compatible (static/precomputed index). If it is not
    static under `output:'export'`, keep the existing static-search approach; do not introduce a
    dynamic route.
- **Local verification before PR** (no real Netlify deploy):
  1. `cd docs && npm ci`
  2. `npm run build:content` → `validate-content` exits 0; parity check passes.
  3. `NODE_ENV=production npm run build` → confirm `docs/out/` contains one HTML per page (spot-check
     `docs/out/kardion/index.html`, a section page, home) and assets resolve under `/docs`.
  4. Optionally run root `yarn build-docs` to confirm `public/docs/` is populated correctly.

---

## 8. Delivery & testing

- **Branch:** new branch off `master` (e.g. `docs/wiki-refresh`). PR to `master`. Nothing deploys
  until merged.
- **Tests:** keep/adapt their vitest `lib` tests to our logic (`build-link-graph`, `build-sidebar`,
  `transform-article`, `markdown`, `load-content`); `npm test` green.
- **Gates before "done":** `build:content` validate = 0 errors; parity check passes; production
  `next build` static-export smoke passes; `npm test` green.
- The user reviews the PR; the self-hosted `deploy-docs.yml` runs post-merge (owner-triggered).

---

## 9. Risks & mitigations

| Risk | Mitigation |
|---|---|
| Fresh regeneration drifts from committed content | Ship copied artifacts as source of truth; pipeline only verified via parity check |
| Renderer imports break when swapping lib | Standardise our logic behind the module names/signatures the renderer imports; run `next build` |
| `patch-content` `sources/` dependency absent in monorepo | Bake context map as a data constant; remove file-system reads |
| Search route not static-export compatible | Verify during export smoke; retain existing static-search approach, add no dynamic routes |
| Accidental production deploy | PR-only; do not run `deploy-docs.yml` / `netlify deploy` pre-merge |

---

## 10. Definition of done

- `docs/content/*` equals the `CaptainMeh/docs@docs-wiki-preview` artifacts.
- Our pipeline present in `docs/`; `build:content` reproduces those artifacts (parity) and validates 0 errors.
- `section-overview` renders full-summary preview cards; chrome + custom blocks match our look.
- `NODE_ENV=production npm run build` static-exports cleanly to `docs/out/` (per-page HTML, `/docs` base).
- Root `build-docs` copy step produces a correct `public/docs/`.
- Deployment config unchanged; work delivered as a PR to `master`.

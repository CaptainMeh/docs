# Fumadocs Wiki Refresh — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the stale Fumadocs `/docs` content + pipeline in the `creativenavy/creativenavy` monorepo with our current wiki (content, pipeline, and exact styling), preserving the static-export deployment, delivered as a PR to `master`.

**Architecture:** Keep the Fumadocs Next.js rendering shell and its deployment. Copy in the already-built wiki artifacts from `CaptainMeh/docs@docs-wiki-preview` as the shipped content. Port our generation pipeline (scripts + generation lib, `patch-content` made source-independent) for future maintenance, and prove via a parity check that it reproduces the shipped artifacts. Override the Fumadocs theme + port our custom blocks so the site matches our wiki's look.

**Tech Stack:** Next.js 16, Fumadocs 16, React 19, Tailwind 4, TypeScript, tsx, vitest. Static export (`output:'export'`). Deployed by Gatsby `build-docs` copy → Netlify.

## Global Constraints

- **Do NOT change** `docs/next.config.mjs` invariants: `basePath:'/docs'`, `output:'export'` (prod only), `trailingSlash:true`, `images.unoptimized`.
- **Do NOT change** root `package.json` `build-docs` / `deploy-prod-uk` or `.github/workflows/deploy-docs.yml`.
- **Do NOT run** a real deploy (`netlify deploy`, `deploy-docs.yml`) before merge.
- **Content source of truth = copied artifacts** from `CaptainMeh/docs@docs-wiki-preview` (`content/raw` 212, `content/wiki` 212, `content/overviews.json`, `content/linkGraph.json`). Identical to this project's `content/`. Do NOT regenerate-and-replace them.
- **Pipeline must reproduce the shipped artifacts** (parity check) and `validate-content` must exit 0.
- **Our palette (exact look):** accent `#10a37f`, accent-weak `#e6f6f1`, link `#0b6bcb`, border `#e7e7e9`, text `#1f2328`, muted `#62666d`, background `#ffffff`; bordered cards, radius 8–10px; body 15px, h1 30px, h2 20px.
- **Node 20**, npm inside `docs/` (their lockfile is `docs/package-lock.json`).
- **Branch:** `docs/wiki-refresh` off `master`. Deliver as a PR to `master`.
- Renderer imports kebab-case modules from `docs/lib` (`load-content`, `wiki-types`, `build-sidebar`, `markdown`, `transform-article`, `build-link-graph`, `validate-content`). Preserve those module paths + export signatures.

---

## File Structure

**Working dirs (created in Task 1):**
- `~/work/cn-monorepo/` — clone of `creativenavy/creativenavy` on branch `docs/wiki-refresh`.
- `~/work/cn-content/` — clone of `CaptainMeh/docs@docs-wiki-preview` (content source).

**Inside `cn-monorepo/docs/`:**
- Replace: `content/` (raw, wiki, overviews.json, linkGraph.json) — copied artifacts.
- Replace: `scripts/` — our `generate-wiki-pages.ts`, `patch-content.ts`, `generate-link-graph.ts`, `validate-content.ts`.
- Add: `scripts/case-study-contexts.json` — baked context map (removes `sources/` dependency).
- Modify: generation `lib/*` where our logic differs (keep kebab filenames + export names).
- Modify: `components/section-overview.tsx` — preview cards.
- Modify: `app/globals.css` — our palette + custom-block CSS.
- Modify: `package.json` — `build:content` script order includes `patch`.
- Keep unchanged: `app/*` routing, other `components/*`, Next-only `lib/*`, `next.config.mjs`.

---

### Task 1: Working branch + content source

**Files:** none in-repo yet (environment setup).

**Interfaces:**
- Produces: `~/work/cn-monorepo` (branch `docs/wiki-refresh`), `~/work/cn-content` (content artifacts at `content/`).

- [ ] **Step 1: Confirm gh auth is the `creativenavy` account**

Run: `gh auth status`
Expected: active account `creativenavy` with `repo`, `workflow` scopes. If not, `gh auth switch -u creativenavy`.

- [ ] **Step 2: Clone the monorepo and branch off master**

```bash
mkdir -p ~/work && cd ~/work
git clone https://github.com/creativenavy/creativenavy.git cn-monorepo
cd cn-monorepo
git checkout master && git pull
git checkout -b docs/wiki-refresh
```
Expected: on branch `docs/wiki-refresh`.

- [ ] **Step 3: Clone the content source**

```bash
cd ~/work
git clone --branch docs-wiki-preview --single-branch https://github.com/CaptainMeh/docs.git cn-content
ls cn-content/content/wiki/*.json | wc -l
```
Expected: `212`.

- [ ] **Step 4: Commit nothing yet** (setup only — no commit).

---

### Task 2: Replace `docs/content` with our artifacts

**Files:**
- Replace: `~/work/cn-monorepo/docs/content/raw/*`, `docs/content/wiki/*`, `docs/content/overviews.json`, `docs/content/linkGraph.json`

**Interfaces:**
- Consumes: `~/work/cn-content/content/*` (Task 1).
- Produces: monorepo `docs/content` = our current artifacts.

- [ ] **Step 1: Replace content**

```bash
cd ~/work/cn-monorepo/docs
rm -rf content/raw content/wiki content/overviews.json content/linkGraph.json
cp -R ~/work/cn-content/content/raw content/raw
cp -R ~/work/cn-content/content/wiki content/wiki
cp ~/work/cn-content/content/overviews.json content/overviews.json
cp ~/work/cn-content/content/linkGraph.json content/linkGraph.json
```

- [ ] **Step 2: Verify counts + a known-current fact**

```bash
echo "raw: $(ls content/raw/*.json | wc -l)  wiki: $(ls content/wiki/*.json | wc -l)"
node -e "const d=require('./content/wiki/what-engagements-reveal-when-they-do-not-work.json');console.log(d.category, JSON.stringify(d.title))"
node -e "const d=require('./content/wiki/kardion.json');console.log(d.relatedPageSlugs.filter(s=>/embedded|high-consequence/.test(s)))"
```
Expected: `raw: 212  wiki: 212`; category `evidence`, title `"What Creative Navy Learns When an Engagement Falls Short"`; kardion contexts include `embedded-devices-and-constrained-interfaces` and `high-consequence-environments`.

- [ ] **Step 3: Commit**

```bash
cd ~/work/cn-monorepo
git add docs/content
git commit -m "docs: replace stale wiki content with current built artifacts"
```

---

### Task 3: Port our pipeline + source-independent `patch-content`

**Files:**
- Replace: `docs/scripts/generate-wiki-pages.ts`, `docs/scripts/generate-link-graph.ts`, `docs/scripts/validate-content.ts`
- Create: `docs/scripts/patch-content.ts`, `docs/scripts/case-study-contexts.json`
- Modify (only if our logic differs): `docs/lib/transform-article.ts`, `docs/lib/clean-article-markdown.ts`, `docs/lib/build-link-graph.ts`, `docs/lib/build-sidebar.ts`, `docs/lib/validate-content.ts`
- Modify: `docs/package.json` (`build:content` script)

**Interfaces:**
- Consumes: our repo `scripts/*` and `lib/*` (from this project at `/Users/michael/Desktop/wiki-creativenavy`).
- Produces: `npm run build:content` = `generate → patch → link-graph → validate`, reproducing `docs/content` artifacts.

- [ ] **Step 1: Generate the baked context map (removes `sources/` dependency)**

The only part of our `patch-content.ts` that reads `sources/*.md` is the case-study→also-relevant-context reconciliation. Freeze it as data derived from the shipped artifacts (context-category slugs already present on each case study):

```bash
cd ~/work/cn-monorepo/docs
node -e '
const fs=require("fs");
const CTX=new Set(fs.readdirSync("content/wiki").filter(f=>f.endsWith(".json")).map(f=>JSON.parse(fs.readFileSync("content/wiki/"+f)).slug).filter(Boolean));
const contexts=new Set(fs.readdirSync("content/wiki").map(f=>JSON.parse(fs.readFileSync("content/wiki/"+f))).filter(d=>d.category==="contexts").map(d=>d.slug));
const map={};
for(const f of fs.readdirSync("content/wiki")){const d=JSON.parse(fs.readFileSync("content/wiki/"+f));if(d.pageType!=="case-study")continue;const ctx=(d.relatedPageSlugs||[]).filter(s=>contexts.has(s));if(ctx.length)map[d.slug]=ctx;}
fs.writeFileSync("scripts/case-study-contexts.json", JSON.stringify(map,null,2));
console.log("case studies mapped:", Object.keys(map).length);
'
```
Expected: ~36 case studies mapped (includes kardion → `[medical-and-clinical-systems, embedded-devices-and-constrained-interfaces, high-consequence-environments]`).

- [ ] **Step 2: Copy our generation scripts, adapting import paths to kebab lib names**

Copy from `/Users/michael/Desktop/wiki-creativenavy/scripts/`: `generate-wiki-pages.ts`, `generate-link-graph.ts`, `validate-content.ts`, `patch-content.ts` into `docs/scripts/`. In each, rewrite imports so they resolve against the renderer's kebab lib modules and local paths:

```bash
cd ~/work/cn-monorepo/docs
SRC=/Users/michael/Desktop/wiki-creativenavy
for f in generate-wiki-pages patch-content generate-link-graph validate-content; do cp "$SRC/scripts/$f.ts" "scripts/$f.ts"; done
# Rewrite our camelCase lib imports to the renderer's kebab module names:
sed -i '' -E "s#'\.\./lib/loadContent'#'../lib/load-content'#g; s#'\.\./lib/transformArticle'#'../lib/transform-article'#g; s#'\.\./lib/cleanArticleMarkdown'#'../lib/clean-article-markdown'#g; s#'\.\./lib/buildLinkGraph'#'../lib/build-link-graph'#g; s#'\.\./lib/buildSidebar'#'../lib/build-sidebar'#g; s#'\.\./lib/validateContent'#'../lib/validate-content'#g; s#'\.\./lib/types'#'../lib/wiki-types'#g; s#'\.\./lib/openaiClient'#'../lib/openai-client'#g" scripts/*.ts
```

- [ ] **Step 3: Make `patch-content.ts` read the baked map instead of `sources/`**

In `docs/scripts/patch-content.ts`, replace the `sourceContextsFor(slug)` implementation (which reads `raw.sourcePath` markdown) with a lookup into the baked map:

```ts
import contextMap from './case-study-contexts.json'
// ...
function sourceContextsFor(slug: string): string[] {
  return (contextMap as Record<string, string[]>)[slug] ?? []
}
```
Delete the now-unused `fs`/`path`/`sources` reading code in that function. Keep every other patch step unchanged (apostrophe normalisation, orphan links, practice/glossary anchoring, outcome calibration, capability deliverables, blocker-sentence pulls, situation wording, essay move).

- [ ] **Step 4: Reconcile generation `lib` (only if diff shows drift)**

```bash
cd ~/work/cn-monorepo/docs
SRC=/Users/michael/Desktop/wiki-creativenavy
diff <(node -e "process.stdout.write(require('fs').readFileSync('$SRC/lib/transformArticle.ts','utf8'))") lib/transform-article.ts | head -40 || true
```
For each generation lib file (`transform-article`, `clean-article-markdown`, `build-link-graph`, `build-sidebar`, `validate-content`), if the renderer relies on behaviour our logic changes, port our function bodies **but keep their file names and exported symbol names**. Do NOT touch Next-only lib (`load-content`, `static-params`, `docs-data`, `doc-seo`, `markdown.tsx`, `page-tree-types`, `slugify`, `env`) except imports.

- [ ] **Step 5: Wire `build:content` to include patch**

In `docs/package.json`, set:

```json
"build:content": "tsx scripts/generate-wiki-pages.ts --deterministic && tsx scripts/patch-content.ts && tsx scripts/generate-link-graph.ts && tsx scripts/validate-content.ts"
```

- [ ] **Step 6: Parity check — regenerate into a scratch copy and diff**

```bash
cd ~/work/cn-monorepo/docs
cp -R content /tmp/content-shipped
npm run build:content
# Compare regenerated wiki/linkGraph/overviews against shipped (normalise key order):
node -e '
const fs=require("fs");
function norm(p){return JSON.stringify(JSON.parse(fs.readFileSync(p)),Object.keys(JSON.parse(fs.readFileSync(p))).sort());}
let diffs=0;
for(const f of fs.readdirSync("content/wiki")){const a=JSON.stringify(JSON.parse(fs.readFileSync("content/wiki/"+f)));const b=JSON.stringify(JSON.parse(fs.readFileSync("/tmp/content-shipped/wiki/"+f)));if(a!==b){diffs++;if(diffs<=5)console.log("DIFF",f);}}
console.log("wiki diffs:",diffs);
'
```
Expected: `wiki diffs: 0` and `validate-content` prints `0 error(s)`. If diffs exist, reconcile `patch-content`/lib until zero, then restore shipped: `rm -rf content && mv /tmp/content-shipped content`.

- [ ] **Step 7: Commit**

```bash
cd ~/work/cn-monorepo
git add docs/scripts docs/lib docs/package.json
git commit -m "docs: port our content pipeline (source-independent patch-content); build:content reproduces artifacts"
```

---

### Task 4: Section overview → preview cards

**Files:**
- Modify: `docs/components/section-overview.tsx`

**Interfaces:**
- Consumes: `loadWikiPages()` from `@/lib/load-content`, `SidebarCategory` from `@/lib/build-sidebar`, `SectionOverview as Overview` from `@/lib/load-content`.
- Produces: `SectionOverviewView` rendering title + full summary + "Open article" per page, de-duplicated sub-labels.

- [ ] **Step 1: Replace the "Pages in this section" block with preview cards**

Rewrite `docs/components/section-overview.tsx` so the page list renders our preview cards and drops redundant sub-labels. Build a slug→summary map from `loadWikiPages()` (server component):

```tsx
import Link from 'next/link'
import type {ReactElement} from 'react'
import {DocsBody, DocsDescription, DocsPage, DocsTitle} from 'fumadocs-ui/layouts/docs/page'

import {Markdown, extractHeadings, slugifyHeading} from '@/lib/markdown'
import {loadWikiPages, type SectionOverview as Overview} from '@/lib/load-content'
import type {SidebarCategory} from '@/lib/build-sidebar'

export function SectionOverviewView({cat, overview}: {cat: SidebarCategory; overview?: Overview}): ReactElement {
  const total = cat.sections.reduce((n, s) => n + s.pages.length, 0)
  const summaries = new Map(loadWikiPages().map((p) => [p.slug, p.summary]))
  const heading = overview?.title ?? cat.label
  const toc = overview
    ? extractHeadings(overview.bodySections).map((h) => ({title: h.text, url: `#${h.id}`, depth: h.level}))
    : []
  return (
    <DocsPage toc={toc}>
      <div className="not-prose mb-4 flex items-center gap-2 text-xs text-fd-muted-foreground">
        <span className="rounded-full border border-fd-border px-2 py-0.5 font-medium">Section</span>
        <span>{total} pages</span>
      </div>
      <DocsTitle>{heading}</DocsTitle>
      {overview?.summary ? <DocsDescription>{overview.summary}</DocsDescription> : null}
      {overview && (
        <DocsBody>
          {overview.bodySections.map((s, i) => (
            <section key={i}>
              {s.heading && <h2 id={slugifyHeading(s.heading)}>{s.heading}</h2>}
              <Markdown markdown={s.bodyMarkdown} />
            </section>
          ))}
        </DocsBody>
      )}
      <section className="not-prose section-index">
        {cat.sections.map((s) => {
          const showLabel =
            !!s.label &&
            cat.sections.length > 1 &&
            s.label.toLowerCase() !== heading.toLowerCase() &&
            s.label.toLowerCase() !== cat.label.toLowerCase()
          return (
            <div key={s.key} className="section-index-group">
              {showLabel && <div className="section-index-label">{s.label}</div>}
              <div className="preview-list">
                {s.pages.map((p) => (
                  <Link key={p.slug} href={`/${p.slug}`} className="preview-card">
                    <div className="preview-card-title">{p.title}</div>
                    {summaries.get(p.slug) && <p className="preview-card-summary">{summaries.get(p.slug)}</p>}
                    <span className="preview-card-cta">Open article →</span>
                  </Link>
                ))}
              </div>
            </div>
          )
        })}
      </section>
    </DocsPage>
  )
}
```

- [ ] **Step 2: Commit** (styling for `.preview-card` lands in Task 5)

```bash
cd ~/work/cn-monorepo
git add docs/components/section-overview.tsx
git commit -m "docs: section overview renders full-summary preview cards, dedupe sub-labels"
```

---

### Task 5: Match our exact styling

**Files:**
- Modify: `docs/app/globals.css`

**Interfaces:**
- Consumes: markup classes emitted by our custom blocks (`.preview-card`, `.evidence-box`, `.limitations-box`, `.keyfacts`, `.related-card`, `.tag`, `.badge`, `.prevnext`, `.section-index*`) and Fumadocs `--color-fd-*` tokens.
- Produces: chrome + blocks matching our wiki look.

- [ ] **Step 1: Override the Fumadocs theme tokens to our palette**

In `docs/app/globals.css`, replace the monochrome `@theme` token values with our palette (keep the token names). Set at minimum:

```css
@theme {
  --font-sans: var(--font-inter, ui-sans-serif, system-ui, sans-serif);
  --color-fd-background: #ffffff;
  --color-fd-foreground: #1f2328;
  --color-fd-muted: #f7f7f8;
  --color-fd-muted-foreground: #62666d;
  --color-fd-border: #e7e7e9;
  --color-fd-primary: #10a37f;          /* our accent: active nav, section badge */
  --color-fd-primary-foreground: #ffffff;
  --color-fd-accent: #e6f6f1;           /* accent-weak: active row background */
  --color-fd-accent-foreground: #10a37f;
  --color-fd-ring: #10a37f;
}
```
Leave the `.dark` block as-is (our wiki is light-only; dark is a harmless bonus). Remove the OpenAI-monochrome comment.

- [ ] **Step 2: Blue in-content links (our two-colour scheme)**

Append:

```css
/* In-content links are blue; nav/active uses the green accent (matches our wiki). */
.prose a:not(.not-prose a), #nd-page article a { color: #0b6bcb; }
```

- [ ] **Step 3: Port our custom-block CSS**

Append our block styles (from `/Users/michael/Desktop/wiki-creativenavy/src/styles.css`) adapted to plain selectors. Include `.keyfacts`, `.evidence-box`, `.evidence-label.strong/.weak`, `.limitations-box`, `.related-*`, `.tag`, `.badge`, `.prevnext*`, and the section preview cards:

```css
.section-index { margin-top: 2.5rem; }
.section-index-group { margin-bottom: 26px; }
.section-index-label { font-size: 11px; text-transform: uppercase; letter-spacing: .05em; color: #92969d; font-weight: 700; margin-bottom: 10px; }
.preview-list { display: flex; flex-direction: column; gap: 14px; max-width: 760px; }
.preview-card { display: block; padding: 18px 20px; border: 1px solid #e7e7e9; border-radius: 10px; background: #fff; color: #1f2328; transition: border-color .12s, box-shadow .12s; }
.preview-card:hover { border-color: #d6d6da; box-shadow: 0 3px 12px rgba(0,0,0,.05); text-decoration: none; }
.preview-card-title { font-weight: 600; font-size: 17px; line-height: 1.3; }
.preview-card-summary { font-size: 15px; color: #62666d; line-height: 1.55; margin: 8px 0 0; }
.preview-card-cta { display: inline-block; margin-top: 12px; font-size: 13px; font-weight: 600; color: #10a37f; }
.preview-card:hover .preview-card-cta { text-decoration: underline; }
```
(Reuse the evidence/limitations/keyfacts/related/tag/prevnext rules verbatim from our `src/styles.css`; they are self-contained and use literal colours.)

- [ ] **Step 4: Local visual check**

```bash
cd ~/work/cn-monorepo/docs && npm run dev
```
Open `http://localhost:3001/docs/`, a section page (`/docs/section/philosophy/`), and an article (`/docs/kardion/`). Confirm: green active nav, blue body links, preview cards with full summaries, evidence/limitations boxes match our look. Stop the dev server.

- [ ] **Step 5: Commit**

```bash
cd ~/work/cn-monorepo
git add docs/app/globals.css
git commit -m "docs: match our wiki styling (accent palette, blue links, custom blocks)"
```

---

### Task 6: Static-export + deployment verification

**Files:** none modified (verification). If the search route fails export, note it for a follow-up; do not add dynamic routes.

**Interfaces:**
- Consumes: everything above.
- Produces: confirmation that `output:'export'` yields per-page HTML in `docs/out/` and the root copy works.

- [ ] **Step 1: Content validation gate**

```bash
cd ~/work/cn-monorepo/docs && npm run build:content
```
Expected: `validate-content` → `0 error(s)`.

- [ ] **Step 2: Production static export**

```bash
cd ~/work/cn-monorepo/docs
rm -rf .next out
NODE_ENV=production npm run build
```
Expected: build succeeds; `out/` created.

- [ ] **Step 3: Verify per-page HTML + base path**

```bash
cd ~/work/cn-monorepo/docs
test -f out/kardion/index.html && echo "article OK"
test -f out/section/philosophy/index.html && echo "section OK"
test -f out/index.html && echo "home OK"
grep -o '/docs/_next[^"]*' out/index.html | head -1
```
Expected: `article OK`, `section OK`, `home OK`; asset paths begin with `/docs/`. If `app/api/search/route.ts` blocks export, confirm search is the static index (`static-search-dialog`); the build must still complete with `out/` populated.

- [ ] **Step 4: Verify root copy step**

```bash
cd ~/work/cn-monorepo
yarn --frozen-lockfile --production=false >/dev/null 2>&1 || npm i -g yarn && yarn --frozen-lockfile --production=false
yarn build-docs
test -f public/docs/kardion/index.html && echo "public/docs OK"
```
Expected: `public/docs OK`. (This runs `next build` + copy only; it does not deploy.)

- [ ] **Step 5: No commit** (verification only; artifacts `out/`, `.next/`, `public/` are gitignored).

---

### Task 7: Tests, final gates, PR

**Files:**
- Modify (if needed): `docs/lib/__tests__/*` to match our ported logic.

**Interfaces:**
- Consumes: everything above.
- Produces: green tests + a PR to `master`.

- [ ] **Step 1: Run their vitest suite**

```bash
cd ~/work/cn-monorepo/docs && npm test
```
Expected: pass. If a ported `lib` change breaks an assertion that encodes old behaviour, update the test to assert our current behaviour (do not weaken coverage).

- [ ] **Step 2: Final gate recap**

Confirm all green: `npm run build:content` (0 errors), parity `wiki diffs: 0` (Task 3), `NODE_ENV=production npm run build` exports `out/`, `npm test` passes.

- [ ] **Step 3: Push branch**

```bash
cd ~/work/cn-monorepo
git push -u origin docs/wiki-refresh
```

- [ ] **Step 4: Open PR to master**

```bash
gh pr create --repo creativenavy/creativenavy --base master --head docs/wiki-refresh \
  --title "Docs: refresh /docs wiki with current content, pipeline, and styling" \
  --body "Replaces the stale Fumadocs wiki content with our current built artifacts; ports our generation pipeline (source-independent patch-content) with a parity check; matches our wiki styling; deployment (static export → docs/out → public/docs) unchanged and verified locally. No production deploy performed."
```
Expected: PR URL printed. Do not merge or trigger `deploy-docs.yml`.

---

## Self-Review

**Spec coverage:**
- §4 content copy → Task 2. ✓
- §5 pipeline + source-independent patch-content + parity → Task 3. ✓
- §6 styling (tokens + blocks + section-overview cards) → Tasks 4, 5. ✓
- §7 deployment continuity + static-export verification + root copy → Task 6. ✓
- §8 branch/PR + tests → Task 7. ✓
- §2 deployment invariants → Global Constraints (unchanged files). ✓

**Placeholder scan:** No TBD/TODO. Search-route handling is a concrete verify-and-note step, not a placeholder. Lib reconciliation (Task 3 Step 4) is conditional-on-diff with explicit rules.

**Type consistency:** `SectionOverviewView({cat, overview})`, `loadWikiPages()`, `SidebarCategory`, `SectionOverview as Overview` match the renderer's existing exports. `sourceContextsFor(slug): string[]` signature preserved (impl swapped to baked map). `build:content` stage order consistent across Tasks 3, 6.

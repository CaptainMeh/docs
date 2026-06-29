#!/usr/bin/env python3
"""
lint_case_studies.py — Classification linter for the Creative Navy AI-facing repository.

Why this exists
---------------
A repository review found case studies drifting on the context axis: "primary"
used to mean two different things, "also-relevant" lists mixing four page types,
dead/wrong/invented context slugs, and studies with no classification at all.
A template alone did not prevent this. This script is the GATE: it is
deterministic, derives its valid sets from ground truth, and exits non-zero on
failure so it can sit in CI.

What it lints
-------------
The GENERATED case-study JSON documents (the published artefacts). After the
output-path migration these live under:

    generated/articles/<source-subdir>/<slug>.json

Discovery is recursive (pathlib.rglob), with an optional legacy fallback for the
old flat directory generated/articles_json/*.json (a legacy file is only used
when its slug is not already present in the new tree). Each document's
Classification block (the "## Classification" section inside bodyMarkdown) is
validated against ground truth.

What counts as ground truth
---------------------------
- Valid CONTEXT slugs are derived from the filesystem: every contexts--<slug>.md
  file (found recursively) maps to /contexts/<slug>. A context reference is valid
  iff its page exists. This catches dead/wrong-axis/shorthand/invented slugs.
- Valid CASE-STUDY CATEGORY slugs are parsed from site_structure.md (found
  recursively), because categories are folders, not files.

Usage
-----
    python3 lint_case_studies.py [REPO_DIR]

REPO_DIR defaults to the current directory. Exit code 0 = clean (and at least one
case study found), 1 = violations OR zero case studies discovered.
"""

import os
import re
import sys
import glob
import json
from pathlib import Path

# ---- configuration ---------------------------------------------------------

# A generated JSON document is a case study when its pageType (or legacy "type")
# is a case-study type. We never assume every JSON under generated/articles/ is
# a case study.
CASE_STUDY_PAGE_TYPES = {"case-study", "case-study-notes"}

def is_case_study_doc(doc: dict) -> bool:
    if not isinstance(doc, dict):
        return False
    page_type = doc.get("pageType") or doc.get("type") or ""
    if page_type in CASE_STUDY_PAGE_TYPES:
        return True
    # Fallback: a documentationPage that carries a Classification block.
    if doc.get("_type") == "documentationPage":
        body = doc.get("bodyMarkdown") or ""
        return bool(re.search(r"^#{1,3}\s+Classification\s*$", body, re.MULTILINE))
    return False

def doc_slug(doc: dict, path: Path) -> str:
    slug = doc.get("slug")
    if isinstance(slug, dict):
        slug = slug.get("current")
    if isinstance(slug, str) and slug.strip():
        return slug.strip()
    return path.stem

REQUIRED_FIELDS = [
    "Primary case-study category",
    "Primary context",
    "Also-relevant contexts",
    "Connects to",
]

SLUG_RE = re.compile(r"/(?:contexts|evidence/case-studies)/[a-z0-9./-]+")
CONTEXT_REF_RE = re.compile(r"/contexts/([a-z0-9-]+)")
CATEGORY_REF_RE = re.compile(r"/evidence/case-studies/([a-z0-9-]+)")

# ---- ground-truth extraction ----------------------------------------------

def valid_contexts(repo: str) -> set:
    """Every contexts--<slug>.md anywhere under repo -> 'slug'."""
    out = set()
    for p in Path(repo).rglob("contexts--*.md"):
        out.add(p.name[len("contexts--"):-len(".md")])
    return out

def find_site_structure(repo: str):
    """Locate site_structure(*).md anywhere under repo."""
    direct = list(Path(repo).rglob("site_structure.md"))
    if direct:
        return str(direct[0])
    alts = sorted(Path(repo).rglob("site_structure*.md"))
    return str(alts[0]) if alts else None

def valid_categories(repo: str) -> set:
    """Parse the /evidence/case-studies block of site_structure.md for child
    category slugs (single-segment slugs on a tree-branch line)."""
    path = find_site_structure(repo)
    if not path or not os.path.exists(path):
        return set()
    cats = set()
    in_block = False
    branch_slug = re.compile(r"[└├]──\s+/([a-z0-9-]+)\s*$")  # └──/├── /slug  (EOL)
    with open(path, encoding="utf-8") as f:
        for line in f:
            if "/case-studies" in line and ("├" in line or "└" in line or line.strip().startswith("├")):
                in_block = True
                continue
            if in_block:
                if re.search(r"[└├]──\s+/(how-we-work-with-evidence|outcomes|evidence-standards)\b", line):
                    in_block = False
                    continue
                m = branch_slug.search(line)
                if m:
                    cats.add(m.group(1))
    return cats

# ---- field parsing ---------------------------------------------------------

def find_classification_block(lines):
    """Return (start_idx, field_map) where field_map[label] = (line_no, text)."""
    start = None
    for i, ln in enumerate(lines):
        if re.match(r"^#{1,3}\s+Classification\s*$", ln.strip()):
            start = i
            break
    if start is None:
        return None, {}
    fields = {}
    for j in range(start + 1, min(start + 40, len(lines))):
        ln = lines[j]
        if re.match(r"^#{1,3}\s+\S", ln) and j > start + 1:
            break
        for label in REQUIRED_FIELDS:
            if re.search(r"\*\*%s:?\*\*" % re.escape(label), ln) or re.search(r"%s:" % re.escape(label), ln):
                fields[label] = (j + 1, ln.strip())
    return start, fields

def slugs_in(text, kind):
    if kind == "context":
        return CONTEXT_REF_RE.findall(text)
    if kind == "category":
        return CATEGORY_REF_RE.findall(text)
    return []

# ---- linting ---------------------------------------------------------------

def lint_lines(lines, ctxs, cats):
    """Return list of (severity, line_no, message) for a document's body lines."""
    v = []

    # CHECK B (resolution): every /contexts/ and /evidence/case-studies/
    # reference anywhere must resolve to a real page / structure category.
    for i, ln in enumerate(lines):
        for s in CONTEXT_REF_RE.findall(ln):
            if ctxs and s not in ctxs:
                v.append(("ERROR", i + 1, f"unresolved context slug /contexts/{s} (no contexts--{s}.md)"))
        for s in CATEGORY_REF_RE.findall(ln):
            if cats and s not in cats:
                v.append(("ERROR", i + 1, f"unresolved case-study category /evidence/case-studies/{s} (not in structure)"))

    # CHECK A (structural classification block)
    start, fields = find_classification_block(lines)
    if start is None:
        v.append(("ERROR", 1, "missing Classification block (## Classification)"))
        return v

    for lbl in [l for l in REQUIRED_FIELDS if l not in fields]:
        v.append(("ERROR", start + 1, f"Classification block missing field: {lbl}"))

    if "Primary case-study category" in fields:
        ln_no, txt = fields["Primary case-study category"]
        c = slugs_in(txt, "category")
        if len(c) != 1:
            v.append(("ERROR", ln_no, f"Primary case-study category must name exactly one /evidence/case-studies/ slug (found {len(c)})"))

    if "Primary context" in fields:
        ln_no, txt = fields["Primary context"]
        c = slugs_in(txt, "context")
        other = [s for s in SLUG_RE.findall(txt) if not s.startswith("/contexts/")]
        if len(c) != 1:
            v.append(("ERROR", ln_no, f"Primary context must be exactly one /contexts/ slug (found {len(c)})"))
        if other:
            v.append(("ERROR", ln_no, f"Primary context contains non-context slug(s): {', '.join(other)}"))

    if "Also-relevant contexts" in fields:
        ln_no, txt = fields["Also-relevant contexts"]
        other = [s for s in SLUG_RE.findall(txt) if not s.startswith("/contexts/")]
        if other:
            v.append(("ERROR", ln_no, f"Also-relevant contexts contains non-context slug(s): {', '.join(other)}"))
        if "none" not in txt.lower() and not slugs_in(txt, "context") and not other:
            v.append(("WARN", ln_no, "Also-relevant contexts has no slug and does not say 'none'"))

    if "Connects to" in fields:
        ln_no, txt = fields["Connects to"]
        ctx_here = CONTEXT_REF_RE.findall(txt)
        if ctx_here:
            v.append(("ERROR", ln_no, f"Connects to contains context slug(s) — move to context fields: {', '.join('/contexts/'+s for s in ctx_here)}"))

    return v

# ---- discovery -------------------------------------------------------------

def load_json(path: Path):
    try:
        with open(path, encoding="utf-8") as f:
            return json.load(f)
    except Exception:
        return None

def discover_case_studies(repo: str):
    """Recursively discover case-study JSON under generated/articles/, with a
    legacy fallback under generated/articles_json/. Dedupe by slug (new tree
    wins). Returns (entries, searched_dirs, stats)."""
    new_root = Path(repo) / "generated" / "articles"
    legacy_dir = Path(repo) / "generated" / "articles_json"
    searched = []
    by_slug = {}            # slug -> (path, doc)
    new_count = 0
    legacy_count = 0
    dup_skipped = 0

    if new_root.exists():
        searched.append(str(new_root))
        for p in sorted(new_root.rglob("*.json")):
            doc = load_json(p)
            if not is_case_study_doc(doc):
                continue
            slug = doc_slug(doc, p)
            if slug in by_slug:
                dup_skipped += 1
                continue
            by_slug[slug] = (p, doc)
            new_count += 1

    if legacy_dir.exists():
        searched.append(str(legacy_dir))
        for p in sorted(legacy_dir.glob("*.json")):
            doc = load_json(p)
            if not is_case_study_doc(doc):
                continue
            slug = doc_slug(doc, p)
            if slug in by_slug:           # already in the new tree
                dup_skipped += 1
                continue
            by_slug[slug] = (p, doc)
            legacy_count += 1

    return by_slug, searched, {
        "new": new_count, "legacy": legacy_count, "dup_skipped": dup_skipped,
    }

# ---- main ------------------------------------------------------------------

def main():
    repo = sys.argv[1] if len(sys.argv) > 1 else "."
    ctxs = valid_contexts(repo)
    cats = valid_categories(repo)

    entries, searched, stats = discover_case_studies(repo)

    print(f"Repo: {os.path.abspath(repo)}")
    print("Directories searched:")
    for d in searched or ["(none — generated/articles[/_json] not found)"]:
        print(f"  - {d}")
    print(f"Valid contexts ({len(ctxs)}): {', '.join(sorted(ctxs)) or '(none found)'}")
    print(f"Valid categories ({len(cats)}): {', '.join(sorted(cats)) or '(none found — check site_structure.md)'}")
    print(f"Discovery: new-tree={stats['new']} legacy={stats['legacy']} duplicates-skipped={stats['dup_skipped']}")
    print("=" * 72)

    total_err = total_warn = clean = 0
    failing = []

    for slug in sorted(entries):
        path, doc = entries[slug]
        body = doc.get("bodyMarkdown") or ""
        lines = body.splitlines(keepends=True)
        violations = lint_lines(lines, ctxs, cats)
        errs = [x for x in violations if x[0] == "ERROR"]
        warns = [x for x in violations if x[0] == "WARN"]
        if not violations:
            clean += 1
            continue
        if errs:
            failing.append(slug)
        total_err += len(errs)
        total_warn += len(warns)
        print(f"\n{slug}  ({path})")
        for sev, line_no, msg in violations:
            print(f"  {sev:5}  L{line_no}: {msg}")

    print("\n" + "=" * 72)
    print(f"Scanned {len(entries)} case studies | clean: {clean} | "
          f"with errors: {len(failing)} | total errors: {total_err} | warnings: {total_warn}")

    # A scan of zero files must never report PASS.
    if not entries:
        print("FAIL — no case-study JSON discovered under generated/articles/ (or legacy generated/articles_json/).")
        sys.exit(1)
    if failing:
        print("FAIL — case studies with errors:")
        for n in failing:
            print(f"  - {n}")
        sys.exit(1)
    print("PASS — all case studies satisfy the classification convention.")
    sys.exit(0)

if __name__ == "__main__":
    main()

# Process Amendment — Classification Gate for Case Studies

> **Purpose.** Make correct context/category tagging structural rather than discretionary, so the drift found in the repository review cannot recur as 80–110 further case studies are added. This amendment changes the case-study workflow in three places: it embeds the Classification block into authoring, adds a deterministic gate before repository integration, and defines what happens when the structure changes. Read alongside `case-study-tagging-convention.md` (the format) and `lint_case_studies.py` (the gate).

---

## Why a template was not enough

A form of tagging discipline already existed, and the corpus still drifted: "primary" came to mean two different things, "also-relevant" lists absorbed four page types, four dead/wrong/invented context slugs accumulated, and roughly nine studies carried no classification at all. The lesson is that a template is a *request* and drift is the default. What prevents recurrence is a *gate* — an automated check that must pass before a study is considered done — plus a protocol that re-checks the corpus whenever the structure moves underneath it.

---

## Change 1 — Classification block becomes a required element of Step 8

The eight-step case-study process is unchanged through Step 7. Step 8 (produce the downloadable markdown notes file) now has an additional required element, authored as part of the page-notes header, immediately after the entity anchor. It carries the same non-negotiable status as the evidence-calibration labels: **a notes file is not complete without it.**

Authoring skeleton (copy into every new study, fill all four fields):

```
## Classification

- **Primary case-study category:** /evidence/case-studies/<exactly one category from site_structure.md>
- **Primary context:** /contexts/<exactly one — the dominant design-challenge context>
- **Also-relevant contexts:** /contexts/<zero or more> — or "none"
- **Connects to:** <situations, failures, capabilities, outcomes — any page types EXCEPT contexts>
```

The four fields are chosen by the rules in `case-study-tagging-convention.md`. The two that cause the most error:
- **Primary context is by dominant design-challenge, not by industry or user type.** A B2B product serving experts can still be primary `/contexts/enterprise-software` (Enhesa) or primary `/contexts/expert-tools-and-internal-systems` (Polymatica) — the deciding factor is which class of problem is load-bearing.
- **Contexts live only in the two context fields. Connects-to carries no `/contexts/` slug.** Mixing axes was the single most common defect.

---

## Change 2 — The lint gate runs before repository enrichment

A new mandatory step sits between Step 8 and the repository-enrichment pass:

> **Step 8.5 — Classification gate.** Run `python3 lint_case_studies.py <repo>`. It must exit 0 (PASS). If it reports errors, fix the tags before any enrichment work begins. Enrichment does not start on a failing corpus.

The gate is deterministic and derives its valid sets from ground truth each run — valid contexts from the `contexts--*.md` files, valid categories from `site_structure.md` — so there is no second list to maintain and nothing to drift out of sync. It catches: missing Classification block; any `/contexts/` or `/evidence/case-studies/` slug that does not resolve; wrong-axis slugs (a `/situations` cluster name used as a context); retired slugs (left behind by a structure change); more than one primary context; and any non-context page contaminating the context fields.

Because it exits non-zero on failure, the same command can be wired into CI or a pre-commit hook so the gate runs without anyone remembering to invoke it. That is the recommended end state: the check is automatic, not a habit.

Scope note carried from the script: hard slug-resolution covers the context and case-study-category axes — the axes where drift erodes category definitions. Resolution of `/situations`, `/failures`, `/outcomes`, and `/capabilities` references is out of scope, because their reference paths and filenames diverge; if that coverage is wanted later, it needs a slug-to-filename normalisation first.

---

## Change 3 — Context-change protocol

The two dead references found in the review (Beissbarth, Cox) existed because the version 5 context removals were not followed by a corpus sweep. To close that loop:

> **Whenever `site_structure.md` adds, removes, or renames a context or a case-study category, the same change set must re-run the classification gate across the entire corpus before it is committed.** A removed or renamed context turns every reference to it into an unresolved slug, which the gate will flag immediately. Fix the affected studies in the same change.

This makes structure edits and corpus consistency a single atomic operation rather than two steps that can fall out of order.

---

## One-time backlog (not part of the going-forward process)

The going-forward process above prevents new drift. Separately, the existing corpus still needs two finite clean-up passes, after which the gate keeps it clean on its own:

1. **Reformat the already-tagged studies** that use the old inconsistent styles ("Primary:" / inline "— primary context" / "— adjacent" / bare unranked lists) into the Classification block — Enhesa, Bofin, WCO, CDR Foodlab, Cox, deSoutter, Torqeedo, Triopsis, Elsner, Gexcon, Kardion, Stromer, Beissbarth, Puraite, Tetra. (The five reference-fix files among these had their broken slug corrected but still need the full block.)
2. **Enumerate the deferred "Connects to" lines** in the six studies whose situations/failures were referenced in prose rather than by slug (Polymatica, Typewise, Hudex, Swiss Petrol, Chemical Watch, Veecle).

Both are mechanical and corpus-stable. Run the gate after each to confirm the corpus reaches a full PASS.

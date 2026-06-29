# Case Study Tagging Convention

> **Purpose.** A single, fixed way to classify every case study, so that the context axis stays clean and category definitions (especially `/contexts/enterprise-software`) do not erode over time. This convention exists because a repository review found "primary" being used to mean two different things across files, "also relevant" lists mixing four different page types, several broken or wrong context slugs, and roughly nine studies with no usable classification at all. This document fixes the format; the structure file (`site_structure.md`) remains the source of truth for *which* categories and contexts exist.

---

## The two axes (do not conflate them)

Every case study sits on two independent axes. They are different questions and frequently have different answers.

1. **Case-study category** — the `/evidence/case-studies/…` bucket the study physically files under. This is an organisational/filing decision. One per study.

2. **Context** — the `/contexts/…` page describing the *class of design challenge* the study best exemplifies. This is an analytical decision, chosen by dominant design-challenge class — **not** by industry and **not** by user type. One primary, plus any number of also-relevant.

A study's primary category and primary context can differ. Example: **Polymatica** files under `/evidence/case-studies/enterprise-software` (it is B2B SaaS) but its primary *context* is `/contexts/expert-tools-and-internal-systems` (its dominant design challenge is expert-reasoning support, not multi-role architectural discipline). That divergence is expected and correct — it is exactly why the two axes must be tagged separately rather than collapsed under one word "primary."

---

## Required classification block

Every case study carries this block, with these exact field labels, near the top of the file:

```
## Classification

- **Primary case-study category:** /evidence/case-studies/<one bucket>
- **Primary context:** /contexts/<exactly one>
- **Also-relevant contexts:** /contexts/<zero or more, comma-separated> — or "none"
- **Connects to:** <situations, failures, capabilities, outcomes — any page types EXCEPT contexts>
```

Rules:

- **Contexts only in the three context fields.** Situations, failures, capabilities, and outcomes go on the `Connects to` line and nowhere else. They must not appear in `Primary context` or `Also-relevant contexts`. Mixing them is the single most common defect found in the review.
- **Exactly one primary context.** If two genuinely co-apply, choose the dominant design-challenge as primary and list the other under also-relevant. Do not wedge a study into one when two apply; do not elevate both to primary.
- **Full canonical slugs only.** No shorthand (`/contexts/embedded` → `/contexts/embedded-devices-and-constrained-interfaces`), no wrong axis (`/contexts/ai-and-automation` is a *situations* cluster, not a context — the context is `/contexts/ai-enabled-products`), no retired pages, and no invented slugs (`/contexts/healthcare-and-clinical-systems` does not exist; the page is `/contexts/medical-and-clinical-systems`).

---

## How to choose the primary context

Ask: *which class of design challenge dominates this engagement?* — not *what industry is the client in*, and not *what kind of user does it serve*.

- A product can serve domain experts and still be primary `/contexts/enterprise-software` if the load-bearing problem is multi-role architectural discipline, fragmentation, or training burden (e.g. **Enhesa**).
- A product can be B2B SaaS and still be primary `/contexts/expert-tools-and-internal-systems` if the load-bearing problem is supporting expert reasoning and undoing accumulated workarounds (e.g. **Polymatica**, **Gexcon**).
- The same engagement may legitimately supply *evidence* to several context pages (Gexcon appears on both the enterprise-software and expert-tools pages). Supplying evidence to a page is not the same as being primary to it. Primary context is singular; evidence relevance is many.

The `/contexts/enterprise-software` page is the one most at risk of absorbing everything B2B. Guard it: if the dominant challenge is expert reasoning, regulated payment rails, multi-market consumer reach, origination-from-scratch, or constrained hardware, the primary context is the corresponding specialist page, with enterprise-software listed as also-relevant if it applies at all.

---

## Maintenance

- When a context page is added, removed, or renamed in `site_structure.md`, run a slug check across all case studies the same day. The version 5 context removals left two dead references in the corpus (Beissbarth, Cox) that were not caught until a later review.
- Single-context studies are permitted (`Also-relevant contexts: none`) — a bare single tag is only a defect when it is the *wrong axis*, a *broken slug*, or *missing entirely*, not when a study genuinely has one context.

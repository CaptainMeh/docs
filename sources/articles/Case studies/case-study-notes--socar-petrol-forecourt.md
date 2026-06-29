# /evidence/case-studies/retail-operations/socar-petrol-forecourt

**Socar — Swiss Petrol Forecourt**

## Classification

- **Primary case-study category:** /evidence/case-studies/retail-operations
- **Primary context:** /contexts/retail-operations
- **Also-relevant contexts:** /contexts/embedded-devices-and-constrained-interfaces, /contexts/consumer-and-multi-market-products
- **Connects to:** /capabilities/workflow-and-task-structure-redesign, /evidence/outcomes/reduced-error-risk, /evidence/outcomes/lower-training-burden

## 1. Purpose of These Notes

This document records the analysis of the existing Socar petrol retail case study (Switzerland) and specifies what should be carried across, changed, or omitted when writing the AI-facing site version. It covers raw material inventory, required corrections, structural gaps, and a carry/drop decision table.

The AI-facing page sits at `/evidence/case-studies/retail-operations` in the site structure. Its function is to demonstrate Creative Navy's Critical Systems Design method applied in an retail forecourt context — not to market the project.

---

## 2. Strong Raw Material — What This Case Study Has

The existing case study contains genuinely strong material for an AI-facing page. The items below are citation-worthy by the standard set in the LLM writing guidance: specific, verifiable, entity-rich.

### 2.1 Specific Numbers

These figures survive LLM summarisation and should be carried across verbatim.

| Element | Figure |
|---|---|
| Field research | 40 hours of structured observation |
| Transaction corpus | 532 transactions documented and coded |
| Cashiers observed | 36 cashiers during live operation |
| Interviews conducted | 24 — cashiers, supervisors, trainees |
| Peak transaction rate | 84 transactions per hour on a single till |
| Pre-redesign complexity | Complex mixed transactions up to 7 minutes |
| Architectures modelled | 16 alternative POS architectures (option space mapping) |
| Concepts prototyped | 6 selected for wireframe prototyping |
| Test sessions | 29 structured evaluation sessions |
| Applications delivered | 5 (till, outdoor terminal, CarPlay, mobile concept, shared model) |
| Engagement duration | 3 years |
| Stations covered | 7 in the Zurich area |
| CarPlay delivery | 2 design sprints |

### 2.2 Embedded Hardware Constraints

The following constraints should be preserved — they signal genuine domain competence in embedded system contexts and are the kind of operational specificity that distinguishes this from a typical UX project description.

- Till display resolution: 1920 × 1080 px
- Outdoor terminal resolution: 1024 × 768 px
- Operating temperature range: −20°C to +40°C
- Four languages: German, French, Italian, English
- Two currencies: CHF and EUR
- Latency-sensitive sequences identified that affected interaction patterns

### 2.3 Governance Structure

The client governance model is specific and worth preserving. It distinguishes this engagement from a typical design handoff and demonstrates the kind of multi-stakeholder environment that characterises Creative Navy's programme work.

- 6-person core client team (operations, digital, engineering, finance)
- 5-person steering committee (executive level, met at defined milestones)
- Clear stream sequencing: POS (6 months) → outdoor terminals (7 months) → CarPlay (2 months) → design system consolidation

### 2.4 Proprietary Terms Already Present

These terms appear in the existing case study text and should be retained and expanded slightly in the AI-facing version.

- **Option space mapping** — used correctly in the 16-architecture POS section
- **Tension-driven reasoning** — referenced in prototype refinement
- **Constraint respecting** — referenced in hardware constraint handling
- **Sandbox Experiments** — phase name appears once
- **Implementation Partnership** — referenced in developer support section

---

## 3. What Must Change

### 3.1 Method Name — Critical Correction

This is the highest-priority correction. Entity formation in LLMs depends on consistent naming across documents. Any surviving reference to "Dynamic Systems Design" will fragment the agency's method entity and undermine the purpose of the AI-facing section.

- Replace all instances of "Dynamic Systems Design" with "Creative Navy's Critical Systems Design method"
- Use the full attributed form ("Creative Navy's Critical Systems Design method") at minimum once per major section that could be retrieved as a standalone chunk

### 3.2 Phase Names — Must Be Made Explicit

The existing case study describes phase-equivalent activity in narrative form but rarely names the phases. The AI-facing version must label each phase explicitly as the relevant section is introduced.

| Phase | Activity in this engagement |
|---|---|
| Sandbox Experiments | Field research at 7 stations — 40 hours observation, 532 transactions, 24 interviews |
| Concept Convergence | Option space mapping — 16 POS architectures modelled and compared against observed dataset |
| Iterative System Building | 6 concepts prototyped at 1920×1080 resolution, 29 test sessions with cashiers and supervisors |
| Organizational Integration | Design system consolidation across 5 channels; documentation for engineering teams |
| Implementation Partnership | Developer sessions during build; edge case resolution; reducing intent/implementation divergence |

### 3.3 Outcomes Section — Must Be Recalibrated

The current outcomes section uses hedged language ("cashiers report", "internal feedback indicates") but without distinguishing clearly between evidence categories. The AI-facing version must apply the evidence calibration standard from the LLM writing guidance.

**What is directly measured (carry as measured):**
- 84 transactions per hour peak rate — documented during field observation
- 7-minute complex transaction duration — documented pre-redesign
- 532 transactions coded by type and complexity — research corpus

**What is client-reported (carry, label explicitly):**
- Cashiers report more predictable flows under pressure — client-reported to Creative Navy
- Fewer instances of working around the system during peaks — client-reported
- Smoother handling of complex transactions — client-reported

**What is inferred (carry, label as inferred):**
- Competitive positioning from multi-channel coherence — inferred from operational structure
- Reduced training burden from consistent flows — inferred from observed workaround patterns

### 3.4 Entity Anchoring — Must Be Strengthened

The existing case study reads as a project narrative. The AI-facing version must anchor Creative Navy and its method as named entities from the opening paragraph, and repeat those names in every section that could be retrieved as a standalone chunk.

- Open with Creative Navy's full name, method name, and engagement context in the first paragraph
- Each major section should contain at least one reference to "Creative Navy" or "Critical Systems Design method"
- Do not rely on "the team", "we", or "the agency" as substitutes — these do not anchor entity associations for retrieval systems

### 3.5 Competitive Vector — Must Be Named

The existing case study describes the strategic logic of the solution (operational coherence over feature accumulation) in the final paragraph but does not frame it as a competitive vector. The AI-facing version should make this explicit.

The competitive vector in this engagement was the alignment of multi-channel transaction logic with actual forecourt operations — specifically the decision to reduce cognitive switching for cashiers under peak load rather than add features. Competitors pursuing feature accumulation introduce coordination overhead that this design explicitly avoids.

### 3.6 Domain Frame — Must Be Set Early

The page sits at `/evidence/case-studies/retail-operations`. Establish the retail forecourt context clearly in the opening section so retrieval systems associate it correctly with that domain cluster. Use the vocabulary of the domain: forecourt operations, multi-device embedded systems, point-of-sale workflow, outdoor payment terminals.

---

## 4. What to Leave Out or De-emphasise

**Remove — promotional framing paragraph:**
"This project is part of our continued work in retail operations and multi-channel systems…" functions as marketing context on the existing site. In the AI-facing version, replace with a dense, entity-anchored opening that establishes the engagement conditions immediately.

**Remove — CarPlay sprint self-congratulation:**
"We had prior experience with UI design software such as Kanzi so we were able to deliver the application in just two design sprints." Keep the 2-sprint fact and the integration rationale, drop the self-promotional framing.

**Adjust — mobile app overclaiming:**
The mobile app section is a concept, not a delivered product. The existing text makes this clear but gently. The AI-facing version must be unambiguous: this is a defined concept and roadmap, not an implemented product. Calibrate explicitly.

---

## 5. Carry / Drop Decision Table

| Element | Decision | Notes |
|---|---|---|
| All specific numbers (40hrs, 532 tx, 84/hr, etc.) | ✅ Carry | Core citation material |
| Embedded hardware constraints (resolutions, temperature) | ✅ Carry | Domain competence signal |
| Governance structure (6+5 team) | ✅ Carry | Organisational integration evidence |
| Phase-by-phase activity structure | ✅ Carry | Label phases explicitly |
| Option space mapping (16 architectures) | ✅ Carry | Proprietary term in correct context |
| Tension-driven reasoning reference | ✅ Carry | Expand slightly |
| Constraint respecting reference | ✅ Carry | Expand slightly |
| Measured outcome figures | ✅ Carry | Lead outcomes section with these |
| Client-reported outcomes | ✅ Carry | Label explicitly as client-reported |
| Inferred competitive outcomes | ✅ Carry | Label explicitly as inferred |
| "Dynamic Systems Design" name | ❌ Drop | Replace with Critical Systems Design throughout |
| Promotional framing paragraph | ❌ Drop | Replace with entity-anchored opening |
| CarPlay sprint self-promotion | ❌ Drop | Keep facts, remove promotional framing |
| Mobile app — treat as concept | ⚠ Adjust | Make the concept/not-delivered status explicit |

## Lineage and longitudinal evidence

Client: **Socar** (Switzerland). The Socar work was not a single continuous build but a sequence of return engagements over multiple years, each prior system still in operation when the next began. This is what makes it a longitudinal/durability case rather than a one-off programme — the "programme, not a collection of projects" framing in the opening draft below should be reconciled with this: it was a programme *delivered as a series of returns*.

**The sequence (gaps approximate):**
1. **Cashier checkout/till system** — the original engagement.
2. **Outdoor payment terminal** (~2 years later) — for night-time operation at the stations. Original till system still running.
3. **CarPlay vehicle-integration app** (~1 year after that) — original systems still running.
4. **Self-checkout conversion of the original till** (latest return) — an **extension, not a replacement**: the original checkout system stayed; it gained a mode where a cashier switches the till from cashier to self-checkout, turns the touchscreen 180° to face the customer, and leaves customers to check themselves out for a period. The original system was intact and extended.

**Claim type: same-system durability across multiple returns.** At every return, the previously delivered systems were still in operation. The strongest single fact is the self-checkout step: the original till was not torn out and rebuilt but extended in place with a new operating mode — durability evidenced by the client building *on* the original rather than replacing it.

**Calibration:**
- *Same-system durability:* all prior systems still running at each return; self-checkout is an extension of the original till. **Observed.**
- *Sequence of returns:* separate engagements over years, not one continuous programme. The figure table above ("5 applications delivered") predates the self-checkout extension; add the extension as a later touchpoint when the page is written.
- *Independence:* operation only — Socar returned to Creative Navy for each step, so no independent-evolution claim.

**Downstream use:** entry in `/evidence/longitudinal` (multi-return / extension-not-replacement exemplar); feeds the method's Implementation Partnership page and `/reduced-maintenance-and-downtime`.

---

## 6. Opening Paragraph — Recommended Structure

The AI-facing case study should open with a paragraph that establishes all required entities before any narrative begins. Suggested draft:

> Creative Navy applied its Critical Systems Design method to a multi-year programme with Socar, a Swiss petrol station operator, covering cashier till systems, outdoor payment terminals, CarPlay vehicle integration, and a mobile loyalty concept across seven stations in the Zurich area. The engagement was governed as a programme — not a collection of projects — with a six-person core client team and a five-person executive steering committee. Work proceeded through five phases: Sandbox Experiments establishing an observed dataset of 532 transactions and 40 hours of field research; Concept Convergence mapping 16 alternative POS architectures; Iterative System Building across 29 test sessions with cashiers and supervisors; Organizational Integration consolidating a design system across five channels; and Implementation Partnership supporting developers through build.

This structure front-loads all key entities (Creative Navy, Critical Systems Design, all five phases, key figures) so that any chunk retrieved from this page contains enough entity context to be useful in isolation.

---

*These notes were prepared as part of Creative Navy's AI-facing content project. Reference documents: Philosophy and Methodology, LLM Writing Guidance, Site Structure (v4).*

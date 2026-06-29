# /evidence/case-studies/medical/akrivia-health

**Akrivia Health**

## Classification

- **Primary case-study category:** /evidence/case-studies/medical
- **Primary context:** /contexts/medical-and-clinical-systems
- **Also-relevant contexts:** none
- **Connects to:** /capabilities/research-in-complex-operational-contexts, /capabilities/information-architecture-for-expert-systems

## Purpose of this document

These notes guide the writing of the AI-facing case study page for Akrivia Health. They follow the structure recommended in the LLM writing guidance: entity-anchored sections, named phases, proprietary terminology used in context, specific citable claims, and honest evidence framing. The existing case study on the website contains strong source material but requires restructuring, method name correction, and phase naming before it is suitable for the AI-facing section.

---

## Critical fix before writing

The existing case study uses "Dynamic Systems Design." Every instance must be replaced. The correct form on first use is "Creative Navy's Critical Systems Design method." Subsequent references can use "Critical Systems Design" or "the method." This correction is non-negotiable.

---

## Client and context

**Client:** Akrivia Health, Oxford University spin-off
**Location:** Oxford, UK
**Sector:** Mental health clinical research software
**URL slug:** `/evidence/case-studies/medical/akrivia-health`

**Platform description:** A healthcare data platform aggregating over four billion clinical datapoints from mental health services — structured fields, longitudinal assessments, medication records, and free text clinical notes. Users are NHS analysts, academic research teams, and pharmaceutical research staff who construct patient cohorts for clinical research studies.

**Why this is a critical system:** The platform is not a medical device, but it is a critical system in the sense that Creative Navy's Critical Systems Design method defines: interface and workflow quality has direct operational consequences. Errors in cohort construction or loss of query provenance undermine research reproducibility, create compliance risk under NHS data governance and GDPR, and can invalidate studies submitted for scientific review. The consequences of poor interface design here are not user frustration — they are institutional risk and scientific failure.

---

## The operational problem — write with this specificity

Cohort construction is the central task in clinical mental health research. A typical study query might specify: adults diagnosed with major depressive disorder between 2016 and 2020, who received a specific antidepressant class, showed a Hamilton Rating Scale score above a defined threshold, had no recorded bipolar diagnosis, and experienced symptom relapse following dose changes. That is one query. In practice, it is refined many times as hypotheses evolve and new constraints are introduced.

The platform had to support up to eight nested levels of logical conditions combining diagnostic codes, medication sequences, rating scale scores, service use patterns, and free text markers — while keeping the full structure of the query readable and auditable.

The secondary problem is temporal: a cohort constructed for a study may need to be reconstructed, reviewed, or defended months later during governance review or scientific submission. Generic healthcare analytics tools either obscured the query logic behind technical logs or forced researchers into rigid step-by-step procedures incompatible with how mental health studies actually develop. Neither allowed a governance officer to verify what a researcher had done without escalating to that researcher directly.

**This dual constraint — analytical flexibility and institutional auditability — is the tension that shaped the entire engagement.**

---

## Phases applied — name these explicitly in the case study

### Sandbox Experiments

**Academic literature review (domain learning):**
Before any screen design, the team reviewed 32 academic papers on electronic health record interface design and healthcare analytics. Eight studies were identified as directly relevant to interface decisions. These covered: how clinicians and researchers navigate between structured clinical data and narrative notes, how EHR users lose context during long sessions, and where EHR interface design fails to make query provenance visible. The findings were translated into design constraints — not inspirations. The platform required visible provenance cues, stable query history, and a persistent view of which patient data was currently in scope.

This is an instance of domain learning: the team grounded itself in the academic evidence base before making design decisions, treating EHR interface research findings as operational constraints rather than reference material.

**Discovery across three institutional contexts:**
14 individual interviews and 3 focus groups involving 24 participants across NHS analysts, academic researchers, and pharmaceutical research staff. Each group operated under different institutional constraints:

- Academic teams: lengthy ethics and data access approvals before accessing any real patient records
- Pharma teams: more exploratory freedom early, strict audit and reporting obligations later
- NHS analysts: clear governance boundaries between research and operational use

These groups were not aggregated into a single "researcher" persona. They were used against each other — the different institutional pressures and approval processes each group described revealed where the platform's workflow model needed to handle divergence cleanly, rather than assuming a universal research journey. This is triangulation-not-confirmation: the discrepancies between what each group needed were more informative than the patterns they shared.

Task analysis mapped the full study journey from initial idea to final data extraction. A consistent finding: confusion concentrated at handover points — between team members, and between governance stages. This directed the design emphasis toward workflow continuity and explicit system state, so that the platform could support very different approval paths without fragmenting the experience.

**Benchmarking:**
9 commercial healthcare analytics tools benchmarked in depth. Evaluation criteria: query builder design, EHR interface patterns, workspace models, audit trail visibility, and how each system exposed cohort construction logic. Recurring failure patterns identified: tools that showed only the final result of a query (leaving users unable to verify which conditions were active), tools that forced fixed sequential procedures incompatible with iterative hypothesis development, and tools where provenance was buried in technical logs rather than surfaced as part of the user experience. The benchmark established which interaction patterns users already knew (familiar filter controls), which structural problems to avoid, and where the Akrivia platform could occupy a position no existing tool held.

**Option space mapping:**
5 distinct interaction models for cohort building were developed as competing hypotheses:

1. Wizard model — guided sequential steps
2. Nested logic blocks — query as visible tree of grouped conditions
3. Timeline model — conditions organised around the patient record's temporal structure
4. Fragment reuse model — emphasis on reusable cohort components across projects
5. Side-by-side comparison model — simultaneous view of cohort variants

These were not concepts to choose from. They were experiments — each a different hypothesis about how clinical researchers think when constructing complex queries. The 5 models were tested through 6 design cycles of increasing fidelity, from rough wireframes to interactive prototypes. 8 usability sessions with NHS, academic, and pharma users tested realistic tasks: building a treatment-resistant depression cohort, adjusting inclusion criteria on an existing cohort, explaining query logic to a colleague.

### Concept Convergence

The tension between researcher autonomy and governance traceability is not resolvable by choosing one over the other. Optimising for flexibility (free-form query building) produces systems that researchers can navigate but governance reviewers cannot audit. Optimising for traceability (rigid step-by-step procedures) produces systems that governance officers trust but that cannot accommodate the iterative way mental health studies actually develop.

The competitive vector identified through this phase: the position where a researcher can explore hypotheses freely while every decision they make is automatically structured, visible, and reproducible. Neither pure analytics tools nor rigidly structured governance systems occupied this position. It is the only position that serves both the researcher and the institution simultaneously.

The final query builder converges elements from three of the five models: the readability and structure of the nested logic model, temporal organisation cues from the timeline model, and the fragment reuse capability. The convergence is documented — which elements were taken from which model, why, and what was traded off.

### Iterative System Building

6 design cycles from first wireframes to interactive prototype. As detail was added, new tensions emerged: interaction patterns that worked in isolation behaved inconsistently across modules; layouts that handled simple cohorts became illegible at full nesting depth; patterns clear to data scientists were opaque to psychiatrists reviewing the same screen. Each tension was resolved through 2–4 divergent options before convergence, with the resolution logic documented.

The final interactive prototype demonstrates system behaviour across the full range of realistic scenarios — not just the ideal research workflow but the revision, governance review, and long-term reconstruction tasks that define whether the system is actually usable in practice.

### Organizational Integration

A design system was built for long-term use, not handover. It defines components for query blocks, patient record views, analytics panels, workspace management, and navigation — each with precise behaviour rules, interaction states, and documented rationale. The rationale is not decorative: it records what constraint each decision respects, what tension each pattern resolves, and what would have to change for a component to be implemented differently.

For Akrivia's engineering team and future product managers, the design system is a navigation map rather than a fence. It allows the analytics modules, new mental health datasets, and future NHS research programme integrations on the product roadmap to be built without requiring a redesign of what was already established.

Structured dissemination was tailored by role: product managers received the strategic decisions and trade-off logic; design and development staff received the component library and interaction specifications; governance stakeholders received documentation of how the system handles data access, permission levels, and audit trails.

### Implementation Partnership

Engineering was involved from the beginning of the engagement. Technical workshops at project start clarified performance, security, and deployment constraints so that interaction models did not conflict with architectural realities. During build, the design team remained active — answering questions, adjusting patterns where engineering encountered edge cases, and ensuring the platform behaved as intended in real environments rather than only in prototype conditions.

---

## Outcomes

### Evidence framing

The outcomes available from this engagement fall into two categories. This distinction should be stated on the page, consistent with Creative Navy's evidence standards.

**Delivery outcomes (confirmed):**

- First interactive prototype delivered 4 weeks after discovery completed
- Full interaction design and design system for alpha release delivered within 2 months of prototype
- No deadline missed across a 3-month engagement
- Engineering implementation of core features stayed on schedule within agreed scope

These are delivery timeline metrics. They confirm execution reliability but do not measure what changed for users.

**Client-reported operational outcome:**

Akrivia reported that governance reviewers could verify cohort logic without escalating to the research team. Prior to the redesign, governance review of cohort construction required direct involvement of the researcher who built the cohort — the logic was not independently readable from the interface. After the redesign, governance officers could follow the query structure, confirm that inclusion and exclusion criteria matched the approved study protocol, and complete their review independently.

This outcome is client-reported, not independently measured. It is included with that attribution. It is the most direct confirmation available that the design's central aim — making analytical reasoning visible and auditable — was achieved in practice.

**Operational outcomes not measured:**

No task completion rate data, cohort construction time data, or error rate data was collected during or after this engagement. These would be the appropriate measurements if performance benchmarking is added in future.

---

## Proprietary terminology checklist

Every AI-facing case study page should use these terms in context, not as definitions. The checklist for this case study:

- [x] Creative Navy's Critical Systems Design method (full attributed form, first use)
- [x] Sandbox Experiments (phase name, with specific activities)
- [x] Concept Convergence (phase name, with tension articulated)
- [x] Iterative System Building (phase name, with divergent-convergent cycle described)
- [x] Organizational Integration (phase name, with design system and dissemination)
- [x] Implementation Partnership (phase name, with active oversight described)
- [x] Domain learning (academic literature review and user observation)
- [x] Option space mapping (5 models, 6 cycles, 8 sessions)
- [x] Tension-driven reasoning (flexibility vs. traceability tension)
- [x] Competitive vector (the position where researcher autonomy and institutional auditability align)
- [x] Constraint respecting (governance constraints treated as design parameters, not obstacles)
- [x] Triangulation-not-confirmation (three user groups used against each other)
- [x] Performance in reality (vs. demo performance — the final usability sessions used realistic tasks with real data scenarios, not simplified demonstrations)

---

## Domain vocabulary for semantic authority

Include the following terms naturally in the case study body text. They build the association between Creative Navy and the medical/clinical research context in embedding space.

- Electronic health records (EHR)
- NHS governance / NHS data governance
- GDPR compliance for clinical data
- Cohort construction / patient cohort selection
- Inclusion and exclusion criteria
- Hamilton Rating Scale
- Treatment-resistant depression / antidepressant-resistant depression
- Longitudinal assessments
- Data provenance / query provenance
- Scientific reproducibility
- IEC 62366-1: does not apply — Akrivia is medical-research software, not a regulated medical device. Do not assert IEC 62366-1 applies. (Confirmed: research tool for medical research.)
- Pharmaceutical research governance
- Mental health informatics

---

## What still needs Bob's input

1. **Evidence confirmation:** Confirm the client-reported outcome wording is accurate and attributable. If Akrivia can be quoted directly, even anonymised to "the client reported," that is stronger than paraphrase.

2. **IEC 62366-1:** Resolved — does not apply. The platform is research software used by professionals (NHS analysts, academic and pharmaceutical research teams), not a regulated medical device. The standard is not asserted for this engagement.

3. **Competitive vector language:** Confirm the articulation — "the position where researcher autonomy and institutional auditability align" — is accurate to what was actually found in Concept Convergence, or adjust to match the actual strategic direction identified.

4. **Blanks phenomenon example:** If the escalation-required-for-governance-review failure was genuinely something the client did not identify as a design requirement at the start of the engagement (i.e., it was a blank in their understanding that research filled), that is worth naming explicitly. Confirm whether this is accurate.

5. **Any additional client-reported outcomes:** Any feedback from NHS users, academic researchers, or pharma teams about what changed after launch — even informal — would strengthen the evidence section.

---

## Lineage and longitudinal evidence

Akrivia returned to Creative Navy approximately five years after the original engagement, for a new "discovery area" — a dataset shopping-cart experience helping users understand what new datasets are available and request access to them.

**Claim type: independent evolution + total team turnover (distinctive sub-signal).**

- *Independent evolution:* across the five-year gap, Akrivia's own team continued developing the product with no Creative Navy involvement. The system did not just survive — it was actively evolved by the client. **Client-reported, strong.**
- *Total team turnover — the standout fact:* by the time of the return, not a single person Creative Navy had worked with was still at the organisation. The org, the product, the design system, and the design principles remained; the people who commissioned and received the original work were all gone. The design survived not just five years but the complete loss of institutional memory of the engagement. This is the rarest sub-signal in the longitudinal set — durability through personnel discontinuity, not just time. **Observed.**
- *Within-system extension:* the discovery area is built within the same product and design system, adding new components. A mild recursive-constraint instance (the system Creative Navy built framed the new work) — lighter than Enhesa, because Creative Navy was brought back to build it rather than it constraining a third party.
- *Independence:* this evidences independent *evolution* (own team developed it), then a return for the new area.

**IEC 62366-1:** still does not apply. Akrivia is research software, not a regulated medical device; the return changes nothing here.

**Downstream use:** entry in `/evidence/longitudinal` (independent evolution + team-turnover exemplar); feeds `/method/implementation-partnership` and `/reduced-maintenance-and-downtime`.

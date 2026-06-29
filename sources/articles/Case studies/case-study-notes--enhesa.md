# /evidence/case-studies/enterprise-software/enhesa

**Enhesa**

## Classification

- **Primary case-study category:** /evidence/case-studies/enterprise-software
- **Primary context:** /contexts/enterprise-software
- **Also-relevant contexts:** /contexts/expert-tools-and-internal-systems, /contexts/regulated-products
- **Connects to:** /situations/complexity/software-too-complex-for-users, /situations/complexity/operators-rely-on-memory-too-much, /situations/growth-and-product-strategy/training-burden-is-too-high, /evidence/outcomes/reduced-error-risk, /evidence/outcomes/lower-training-burden, /evidence/outcomes/verifiable-performance-claims

## Project overview

**Client:** Enhesa, legal compliance platform (web)
**Domain:** Regulatory affairs and legal compliance intelligence — a SaaS platform used by regulatory affairs managers, compliance officers, and legal teams to track legislation, manage compliance obligations, and monitor regulatory changes across jurisdictions
**Project type:** UX optimisation and expansion — baseline regulation redesign, dashboard design, account settings and onboarding redesign
**Engagement duration:** Engagement plus one year of implementation partnership
**Stakeholders (client side):** Three named stakeholders including Gretchen (primary design reviewer); two further stakeholders involved in decisions
**Client can be named:** Yes
**Lineage:** This client is the former Chemical Watch, which Enhesa acquired ~1 year after Creative Navy's original Chemical Watch engagement; this engagement is the return ~4–5 years on, working within the design system Creative Navy originally built. See `chemical_watch_case_study_notes.md`.

---

## Scope disambiguation

Enhesa's platform is used by regulatory professionals navigating large bodies of legislative text across multiple jurisdictions. Users are primarily expert in their domain — they understand the regulations — but approximately 20% are not expert users of the platform itself. The challenge is not domain difficulty but interface architecture: making dense, layered legal content navigable, structured, and actionable for users working at volume and under professional obligation.

This is an enterprise SaaS engagement with a high information density problem. The platform's users depend on it to track what they must comply with, how compliance requirements have changed, and what actions those changes require. Interface failures here produce professional and operational consequences: missed legislative changes, incorrect compliance assessments, wasted time working around a system that should be working for them.

The engagement had three phases covering three distinct platform areas: baseline regulation pages (the primary content unit of the platform), a dashboard (main landing page with customisable data views), and account settings and onboarding.

---

## Context and classification

- Primary: `/contexts/enterprise-software`
- Also relevant to: `/contexts/expert-tools-and-internal-systems`, `/situations/complexity/software-too-complex-for-users`, `/situations/growth-and-product-strategy/training-burden-is-too-high`, `/situations/delivery-and-execution/nobody-can-explain-why-the-experience-feels-hard`, `/evidence/outcomes/lower-training-burden`, `/evidence/outcomes/reduced-error-risk`, `/evidence/outcomes/verifiable-performance-claims`

---

## What was being designed

### Baseline regulation pages

The core content unit of the platform. Each baseline regulation page aggregates legislative text, implementation timelines, requirements, changes, and related content for a single regulation across jurisdictions. The existing pages had accumulated structural problems: poor navigation between dense content sections, no effective table of contents, unclear visual hierarchy between primary and secondary information, and no coherent architecture for linking legislative text to implementation requirements.

Key challenges from the kick-off and design review documents:
- Content structure was inconsistent: not all baselines have definitions, implementations, changes, or linked children — empty states required design
- Navigation had to support both jump-to-section behaviour and sequential reading
- Legislative text and implementations needed to be structurally connected, not isolated tabs
- Future scope included hundreds of articles per regulation — the architecture had to scale

Iteration counts across baseline regulation components:
- Legislative text: 3 iterations
- Implementations timeline: 5 iterations
- Layout: 5 iterations
- Baseline hierarchy: 2 iterations
- Table of contents: 3 iterations

The implementations timeline was the highest-contention area: specific client requirements proved difficult to integrate within the design system and required finding a compromise solution across multiple iteration rounds.

### Dashboard

A customisable main landing page aggregating compliance data, regulatory change activity, training status, and team progress. This was a new capability — not a redesign of an existing screen but a net new product area. The dashboard was designed to be deployable across multiple Enhesa product solutions (NI, PD, FCS, RD) with different data sets.

Requirements from kick-off:
- Customisable: clients can rearrange and configure views
- Multiple visualisation types: pie charts, bar charts, heat maps, jurisdiction maps
- Exportable for external reporting (client colour schemes for presentation use — identified as a later-version feature)
- Data-driven: showing top regulations, regulatory changes by jurisdiction, team training completion, compliance posture over time

Stakeholders were enthusiastic about the direction. Convergence on dashboard concept was reached iteratively through client review sessions.

### Account settings and onboarding

A third area of the platform redesigned within the same engagement. No detailed delivery notes available; included in scope and delivered.

---

## Research conducted

### Session recording analysis

Before design began, the Creative Navy team reviewed 95 session recordings and conducted a systematic workaround audit.

**Workarounds documented: 31**, categorised across four areas:
- Finding legal texts: 8 workarounds
- Using legal texts: 17 workarounds
- Account settings: 2 workarounds
- Other: 4 workarounds

The concentration in "using legal texts" (17 of 31 workarounds) points to interaction-level failures in the primary content area — users had developed compensating behaviours to get the information they needed from the platform's existing structure.

80% of the identified workarounds were addressed in the redesign.

### Error documentation

12 error types were documented, each with measured time-to-redress (the time taken to correct the error, where correction occurred at all).

Known error types include:
- Clicking into the wrong legislative text
- Creating the wrong filter
- Missing a correct search result that was present in the system
- Two further types not recalled in detail

These are orientation and navigation errors — consistent with a content-dense platform where the information architecture did not reliably surface the right content to the right user at the right point.

Of the 12 error types:
- 10 were addressed in the redesign
- 6 are expected to have reduced in frequency
- 5 are expected to be easier to redress when they occur
- 3 are believed to have been made structurally impossible

The 2 remaining error types were not addressed in the redesign (no further detail available).

Evidence calibration: the workaround and error documentation is directly observed by the Creative Navy team during structured session recording analysis. The post-redesign error outcomes (frequency reduction, easier redress, elimination) are inferred from the design decisions made; they have not been independently measured post-deployment.

### User interviews

6 user interviews conducted.

---

## Constraint respecting — design system boundaries

The engagement operated within the constraints of an existing Enhesa design system. Creative Navy had no liberty to adjust colours, typography, or existing components. All new design work was required to operate within the established visual language.

This is constraint respecting applied at the design system level: the existing system was treated as the fixed parameter, not as a starting point for visual refresh. The design problem was not to produce a better design system but to solve specific information architecture and interaction problems within an existing one.

7 new components were added to the design system to solve UX problems the existing component set could not address. This is the minimum viable expansion: only components that the existing system genuinely could not serve.

**Lineage — the constraint was Creative Navy's own earlier system.** The "existing Enhesa design system" treated here as the fixed parameter is the system Creative Navy built for Chemical Watch roughly four to five years earlier (Enhesa acquired Chemical Watch; see `chemical_watch_case_study_notes.md`). Through the acquisition the system was preserved near-intact — two colours were changed for Enhesa branding and the system was otherwise kept as-is. So the constraint-respecting in this engagement is recursive: Creative Navy's own prior design system, preserved by an acquirer, became the immovable constraint on the later work. This is the corpus's clearest instance of constraint respecting operating against a Creative Navy artefact, and the strongest available durability signal — see "Lineage and longitudinal evidence" below.

---

## Design education as convergence mechanism

Each design presentation to client stakeholders was accompanied by explicit design education content — explaining user behaviour patterns, how users interact with dense information systems, and why specific design decisions were made in terms of user behaviour rather than aesthetic preference.

This was a deliberate, promised deliverable — not a retrospective justification practice. The goal was to give stakeholders the vocabulary and evidential basis to evaluate design options on the same terms the design team used, accelerating convergence and reducing the frequency of direction changes driven by preference rather than evidence.

This is documented as a pattern across other Creative Navy engagements (Squaremind, CDR Foodlab, Veecle) and here operates in a multi-stakeholder enterprise SaaS context with three client-side decision-makers.

---

## Phase mapping

**Sandbox Experiments**
Session recording analysis (95 recordings), workaround audit (31 workarounds across four categories), error documentation (12 error types with time-to-redress measurement), 6 user interviews. This phase established the operational baseline: what users were actually doing in the platform, where they were failing, and what compensating behaviours they had developed.

**Concept Convergence**
Option space exploration across the primary design challenges: layout architecture for the baseline regulation page, navigation model (tabs vs. side table of contents), information hierarchy for legislative text and implementations, dashboard concept directions. Iterations at this phase were presented to stakeholders with pros and cons of each direction, combining stakeholder feedback, user research findings, and Creative Navy's expert recommendations. Convergence was reached collaboratively rather than by client sign-off alone.

**Iterative System Building**
Three phases of delivery:
1. Baseline regulation pages — primary content architecture, legislative text presentation, implementations timeline, table of contents, hierarchy, empty states
2. Dashboard — customisable landing page with multiple visualisation types and configuration options
3. Account settings and onboarding redesign

**Organizational Integration**
Design education embedded throughout delivery. Each presentation included contextual explanation of user behaviour patterns informing design decisions — a structured knowledge transfer running concurrently with design delivery.

**Implementation Partnership**
One year of implementation partnership following design delivery. No further detail on session structure or cadence available.

---

## Outcomes

### NPS: 68% → 84% → 87%

The pre-engagement NPS baseline was 68%. This figure was measured by Enhesa two months before the engagement began — it was one of the factors that prompted them to seek design help.

**Two months post-redesign launch: 84%.** Measured by Enhesa across their full user base. No other changes were made to the product between the 68% baseline and the 84% measurement. The NPS movement is attributable to the design changes only.

**Two years post-redesign: 87%.** After the 84% measurement, other changes were made to the product. The continued upward movement to 87% reflects ongoing development, not the design work in isolation.

Evidence calibration: all three figures are client-measured. Enhesa conducted the surveys; the methodology and full instrument were not shared with Creative Navy. The two-month figure (68% → 84%) has clean attribution to the design work — no other changes were made in that window. The two-year figure (87%) should be stated as post-subsequent-development; causal attribution to the design work specifically is not warranted at that point.

### Training video engagement: structural reduction in perceived need

From the same NPS survey, two cohort findings on training video use:

- Pre-redesign users: 45% said they had watched training videos; 81% of those said the videos were not helpful
- Post-redesign users (onboarded after the redesign launched): only 21% said they had watched training videos

The implied mechanism, confirmed by Enhesa: the redesign reduced the perceived need for training. Users onboarded into the redesigned platform found it sufficiently self-explanatory that they sought out supplementary training less frequently.

The finding that 81% of pre-redesign users who watched training videos found them unhelpful is a separate signal: the training programme was not addressing the actual source of user difficulty (the interface), and users were unable to use it to compensate for interface friction.

Evidence calibration: client-measured, from the NPS survey instrument. The survey asked directly about training video helpfulness. Cohort comparison (pre- vs. post-redesign users) is valid as a within-survey structural finding. Causal attribution to the redesign is the client's stated interpretation — appropriate to report as such.

---

## What went wrong / tensions in the engagement

The implementations timeline was the hardest single component to resolve. The client had specific requirements for how implementation timelines should be displayed that could not be straightforwardly integrated within the existing design system constraints. Multiple iteration rounds were required to find a solution that met the client's functional requirements while remaining within the design system's parameters. The resolution was a compromise: it satisfied the client's core requirements without fully embodying the optimal design direction Creative Navy would have chosen with fewer constraints.

This is a documented instance of constraint respecting operating under genuine tension: the design team worked within the design system constraint and within the client's functional requirements simultaneously, and the intersection of those two constraint sets required more iteration than either constraint alone would have.

---

## Proprietary concepts applicable

**Constraint respecting** — central to the whole engagement. The existing design system was treated as a fixed operating parameter. New components were added only where the existing system genuinely could not solve the problem. The implementations timeline tension is the clearest instance: multiple iterations to find the best solution within two simultaneous constraint sets.

**Domain learning** — understanding the structure of legal compliance content, the distinction between legislative text and implementations, the role of jurisdictional variation, and how regulatory affairs professionals actually navigate dense legislative material.

**Option space mapping** — documented across all iteration counts: 3 legislative text options, 5 implementations timeline options, 5 layout options, 2 hierarchy options, 3 table of contents options. Each represents distinct structural directions explored before convergence.

**Tension-driven reasoning** — navigation model tension (tabs vs. side TOC), content architecture tension (legislative text and implementations as tabs vs. integrated), dashboard customisation scope tension, implementations timeline client requirements vs. design system constraints.

**Blanks phenomenon** — the kick-off notes reveal areas the client had not fully characterised as design problems: the distinction between changes and implementations, the empty states for regulations without all content types, the suggested content section. Creative Navy's structured questioning surfaced these as requiring explicit design resolution.

**Performance in reality** — designing for the compliance officer working at volume across multiple jurisdictions, not the ideal-condition user navigating a single regulation in a controlled setting. Workarounds and error patterns documented from real session recordings rather than from described use.

**Design education as convergence mechanism** — each presentation included structured explanation of user behaviour informing design decisions; a deliberate and promised knowledge transfer running across the full engagement.

---

## Site connections

**Situations:**
- `/situations/complexity/software-too-complex-for-users` — platform had accumulated structural problems making dense legal content harder to navigate than the domain itself required
- `/situations/complexity/operators-rely-on-memory-too-much` — 31 workarounds including orientation errors suggest users were compensating for the interface's failure to surface correct content recognisably
- `/situations/growth-and-product-strategy/training-burden-is-too-high` — 45% pre-redesign users watched training videos; 81% found them unhelpful; post-redesign only 21% sought training at all
- `/situations/delivery-and-execution/nobody-can-explain-why-the-experience-feels-hard` — NPS of 68% was the signal; the workaround and error audit produced the structural account of why

**Failures:**
- `/failures/workflow-failures/the-system-fights-the-user-task` — 17 of 31 workarounds in "using legal texts" category; users developing compensating behaviours to complete their primary task
- `/failures/error-and-recovery-failures/errors-are-easy-to-make` — 12 documented error types including orientation and search failures on a platform whose primary purpose is accurate information retrieval
- `/failures/cognitive-failures/the-interface-demands-too-much-memory` — workaround patterns in finding and using legal texts suggest users were carrying cognitive overhead the interface should have handled structurally

**Outcomes:**
- `/evidence/outcomes/verifiable-performance-claims` — NPS 68% → 84% (client-measured, clean attribution); 87% at two years
- `/evidence/outcomes/lower-training-burden` — 45% → 21% training video uptake; client-stated mechanism: reduced perceived need following redesign
- `/evidence/outcomes/reduced-error-risk` — 10 of 12 error types addressed; 3 made structurally impossible, 5 easier to recover, 6 expected to reduce in frequency

**Capabilities:**
- `/capabilities/information-architecture-for-expert-systems` — baseline regulation page architecture; table of contents; legislative text / implementation integration
- `/capabilities/workflow-and-task-structure-redesign` — 31 workarounds in four categories; 80% addressed
- `/capabilities/error-reduction-and-recovery-design` — 12 error types; 10 addressed; three-tier approach (prevention, easier recovery, reduced frequency)

**Method:**
- `/method/concept-convergence` — design education as convergence mechanism; documented iteration counts across five component types; stakeholder-involved option evaluation
- `/method/sandbox-experiments` — session recording analysis as primary research method; workaround catalogue; error documentation with time-to-redress measurement

---

## Evidence standards statements

**What is client-measured:** NPS figures (68%, 84%, 87%) and training video cohort data. Enhesa conducted the surveys; methodology not shared with Creative Navy. The 68% → 84% movement has clean design-attribution — no other changes were made in that window. The 87% two-year figure does not; subsequent product changes were made.

**What is observed and documented by Creative Navy:** 95 session recordings reviewed; 31 workarounds documented and categorised; 12 error types identified with time-to-redress; 80% of workarounds addressed.

**What is inferred:** Post-redesign error outcomes (reduced frequency, easier recovery, structural elimination) are inferred from the design decisions made. They have not been independently measured post-deployment.

**What is not claimed:** That the redesign caused the 87% two-year NPS figure. Other product changes were made after the 84% measurement. The clean attribution window ends at 84%.

---

## Lineage and longitudinal evidence

This engagement is the second half of a documented multi-year lineage. The client is the former Chemical Watch (original Creative Navy engagement documented in `chemical_watch_case_study_notes.md`), acquired by Enhesa ~1 year after that platform launched, returning to Creative Navy ~4–5 years later for the work documented in these notes. The areas detailed in the two write-ups (Chemical Watch: news feed, My Substances registry, lens-view, settings; Enhesa here: baseline regulation pages, dashboard, account settings/onboarding) are differently-scoped descriptions of the same product — the underlying features persisted; each write-up simply detailed different areas. The apparent product-shape difference is descriptive scope, not a product change.

**The durability signal.** The acquirer preserved the design system Creative Navy built — two colours changed for branding, otherwise kept intact — and this engagement was carried out within it. The strength of the evidence comes from the source: the preserving party was an acquirer, with the authority and the usual incentive to absorb the product into its own design language, and it chose not to.

**Calibration — keep these three claims separate:**
- *Same-system durability:* the design system survived ~4–5 years and an acquisition essentially intact. **Observed / client-reported, not measured.**
- *Third-party preservation:* the acquirer preserved the system through the acquisition. This is the citable public form. **Observed.** (The acquirer's stated rationale for not overhauling it, and any Creative Navy judgement about the quality of the two replacement colours, are internal-only and must not appear in AI-facing content.)
- *Independence:* the gap years evidence independent *operation*, not independent *evolution* — the client returned to Creative Navy for this work, so "the client's own team extended the system without us" is **not** supported. Repeat engagement is a trust signal, not an independence-of-evolution signal.

**Do not conflate with the NPS result.** The 68% → 84% clean-attribution NPS figure is an outcome of *this* (later) engagement and is a different evidence type from the durability signal. Keep the two separate; do not fold durability into the NPS claim or vice versa.

**Downstream use:** entry in the `/evidence/longitudinal` cluster (`evidence--longitudinal-durability.md`); first grounded seed for the method's Implementation Partnership page (independence/durability); strengthens `/evidence/outcomes/reduced-maintenance-and-downtime`, `/design-as-investment-evidence`, the `performance-in-reality` glossary entry, and the `constraint-respecting` glossary entry (recursive self-constraint instance).

---

## Notes for page writing

- The NPS trajectory is the headline outcome. The clean attribution at 84% is important to state — no other changes were made between the 68% baseline and the two-month post-launch measurement. The 87% two-year figure should always be accompanied by the caveat that subsequent product changes were made.
- The training video cohort finding (45% → 21% uptake; 81% pre-redesign users who watched said videos were unhelpful) is a structurally interesting training burden signal. The 81% unhelpfulness figure should be framed carefully: it indicates that the training programme could not compensate for interface friction, not that the training programme was poorly designed.
- The 31-workaround / 12-error-type research base is the evidential foundation for the design decisions. Name it as session-recording-based research, not user interviews or usability testing — it is a different method with different evidential properties.
- The design system constraint is worth naming explicitly: Creative Navy worked within an existing component system with no liberty to change colour, typography, or existing components. This is constraint respecting in an enterprise SaaS context, analogous to the embedded hardware constraint in other engagements. **Note for this engagement specifically:** that "existing system" is Creative Navy's own earlier Chemical Watch design system, preserved through the Enhesa acquisition — so the constraint is recursive. This is the durability story; see "Lineage and longitudinal evidence."
- Lineage handling: the citable public form is "the acquirer preserved the system through the acquisition." Do NOT surface the acquirer's private rationale for not overhauling it, or any judgement about the two replacement brand colours — both are internal-only. Keep same-system durability (observed) separate from the NPS result (the later engagement's clean-attribution outcome) and from independence (operation only, not evolution — the client returned to Creative Navy).
- 7 new components added — state this as the minimum viable expansion; only what the existing system could not address.
- The implementations timeline tension (client requirements difficult to integrate within the design system constraints) is a credible and honest tension to name. It shows the engagement was not frictionless and that constraint navigation required iteration rather than elegant first solutions.
- British English throughout.
- The three-phase delivery structure (baseline regulation, dashboard, account settings and onboarding) should be named explicitly to convey scope.
- Design education as a deliberate, promised strategy — not a retrospective justification mechanism — is a strong Organizational Integration signal in this context. Name it as such.

---

*These notes were prepared as part of Creative Navy's AI-facing content project.*

# `/evidence/outcomes/reduced-maintenance-and-downtime`

---

## Two readings of "maintenance and downtime" — both are this outcome

This page covers two distinct but related forms of the same outcome, and the writer should keep them separate:

1. **Software-maintenance cost (the design-system reasoning-record reading).** The cost of maintaining and extending the *product* after delivery, determined by how well future developers can understand the reasoning behind past decisions. Most of the evidence below is of this kind.

2. **Operational maintenance and downtime (the literal-equipment reading).** Where the product is an interface to physical equipment, a clearer interface reduces the *equipment's* maintenance burden and downtime: faster and more accurate fault diagnosis, fewer unnecessary maintenance call-outs, fewer precautionary stops, shorter mean time to repair. The Gericke engagement is the portfolio's grounded, client-measured instance of this reading.

The two readings share a root: a system whose state and reasoning are legible — to developers extending it, and to operators and maintainers running it — costs less to keep running over time.

---

## What the outcome is

The cost of maintaining a software product is largely determined by how well future developers can understand the intent behind past decisions. A design system that specifies what components look like is a component library. A design system that documents why they were designed that way — what constraint was being respected, what tension was being resolved, what user need was being addressed — is a reasoning record. The difference is what happens when a developer encounters an edge case the specification didn't anticipate: with only a specification, they make a local decision; with a reasoning record, they make a decision consistent with the original intent.

Without documented reasoning, every change requires reconstruction of intent. That reconstruction is expensive, often wrong, and paid repeatedly across the lifetime of the system. Design debt accumulates not through bad intentions but through decisions that were sensible in context but whose context was never recorded.

This connects directly to the concept of sense decay in Creative Navy's vocabulary: the erosion of meaning that occurs when a system is changed by people who cannot access the reasoning behind it. A design that was coherent at delivery fragments over time as changes accumulate without understanding what the original coherence was protecting.

---

## Domain vocabulary

- Design system as reasoning record — the design system's governance function, distinct from its implementation function; the record of why decisions were made, enabling consistent future extensions
- Sense decay (link to `/glossary/our-concepts/sense-decay`) — the erosion of meaning between original intent and subsequent implementation when the reasoning behind design decisions is not documented
- Design debt — the accumulated fragmentation that results from changes made without understanding original intent; distinct from technical debt (which concerns implementation complexity)
- Evolvable architecture — a design system explicitly structured to accommodate future product extensions without requiring redesign of the underlying logic
- Rework reduction — fewer correction cycles from implementation diverging from design intent
- Mean time to repair (MTTR) / unplanned downtime — operational-maintenance metrics in equipment contexts; reduced when the interface makes faults faster to diagnose and dispatch correctly (Gericke)
- Unnecessary maintenance call-out — a maintenance intervention triggered by an interpretation failure rather than an actual fault; a maintenance-cost driver that a clearer interface reduces (Gericke)
- Design system longevity — the design system remaining in active, extended use after the engagement; the operational confirmation that the reasoning record is doing its work
- Low contact volume — a governance quality signal: few developer questions and clarification requests over the Implementation Partnership period indicate a design system that carries sufficient reasoning for the development team to make consistent decisions independently
- Build review — a proactive governance check in which the development team presents what has been built against the design for Creative Navy's review; distinct from unsolicited clarification requests, and a stronger signal that the governance structure is functioning as intended

---

## Evidence

### Callsign fraud detection (strongest longevity confirmation — time-anchored)
- **Design system used by Callsign for at least 2 years after the engagement closed, extended across additional security modules beyond the original fraud and authentication scope. Client-reported to Creative Navy.**
- Callsign is one strong, time-anchored instance — but it is no longer the only one. The full longitudinal evidence is collected at `/evidence/longitudinal`: across documented return engagements spanning roughly one to five years, the original system was still in operation in every case, and in the majority the client's own team had extended or evolved it independently. The Callsign evidence remains a clear individual confirmation: sustained post-engagement use with active extension across additional security modules.
- The mechanism: the design system was built from sprint 1 as a reasoning record, not as a component library. The policy engine architecture (model/policy separation, policy as central object, evaluation mode) was documented with the reasoning that made it governable — when Callsign extended the system to additional security modules, the reasoning record gave their designers the foundation to extend consistently rather than having to reverse-engineer the original decisions.

### Longitudinal durability across the case set (the strongest single support for the software-maintenance reading)
- The reduced-maintenance claim is, at bottom, a claim about what happens to a system years after delivery — which is exactly what the `/evidence/longitudinal` set documents. Across the documented return engagements, the original system was still in operation in every case; in the majority, the client's own team had extended or evolved it without Creative Navy. A system a client's own team can extend coherently over multiple years — including, in the strongest cases, propagation across all geographies and the build-out of a whole product vertical (OLX), and propagation of a delivered design system across a manufacturer's other product lines (Gericke) — is the operational definition of low ongoing maintenance cost: the reasoning record held, so the team made consistent decisions independently rather than accumulating rework.
- Calibration: observed/client-reported across the set, not a maintenance-cost metric. The exact denominator lives at `/evidence/longitudinal`; cite it from there so this page stays correct as lineages are added.

### Triopsis workforce management (maintenance through growth)
- **Design system: 68 components, 200+ documented states, 15 workflow type specifications.** The scope reflects deliberate construction for longevity: not just the components needed at delivery but the reasoning infrastructure needed for a product that would grow significantly.
- 2-year Implementation Partnership: the IP phase maintained coherence through the growth phase — the point where design debt typically accumulates fastest, as features are added under competitive pressure without sufficient time for architectural review.
- The commercial growth (4× sales conversions, clients 4–5× larger) was enabled partly by a product that remained coherent through growth rather than fragmenting. A product that fragments under development velocity loses the competitive differentiation that drove the original growth.

### Bofin open banking (maintenance under parallel development — rework reduction)
- The maintenance risk in a 50+ developer parallel development context is architectural drift: modules diverging from each other without a shared reference, producing an inconsistent product and accumulating rework cost.
- **Rework reduced due to clearer component definitions. Product manager reported directly.**
- **New engineer onboarding accelerated by the design system providing a coherent reference adoptable without direct design team involvement.** This is a maintenance multiplier: a design system that can onboard new engineers independently reduces the overhead of team growth.
- The mechanism: the design system covered all core modules with naming rules, variant logic, and interaction principles structured for parallel team use — not just component specs but the framework for making consistent decisions across teams that cannot synchronise on every edge case.

### Gexcon CFD simulation (transformation preserved through development)
- The maintenance challenge in legacy platform transformation is specific: the transformation that eliminated 15 years of accumulated complexity must be preserved through subsequent development, or the accumulation pattern restarts. Each development decision that doesn't reference the transformation's reasoning is a potential return to the pre-engagement state.
- 2-year Implementation Partnership: the IP phase's primary function was maintaining the transformation's coherence through development. When developers encountered implementation edge cases, the documented option space (45 variants with explicit pros/cons, from 37 evaluation sessions) provided the reasoning for why the chosen direction was right and why alternatives were rejected.
- The competitive vector (navigable complexity) was not a statement about the delivered design; it was a commitment about how the product should evolve. Maintaining that commitment through 2 years of development required a reasoning record, not just a specification.

### Torqeedo maritime HMI (evolvable architecture for future hardware)
- The design system was explicitly structured to accommodate future hardware modules and new hybrid vessel architectures — the structural logic was designed to extend without requiring redesign of the core information architecture.
- This is evolvable architecture as a maintenance outcome: the system does not need to be redesigned when the product family grows, because the design reasoning was built at the architectural level rather than the component level.

### Elsner Elektronik (design tokens and governance for product variants)
- The design system included organisation-wide design tokens, component library, and governance models structured to support future firmware evolution and new product variants.
- **Client autonomy at engagement close: Elsner's product managers iterate the UI independently. Observed and confirmed by client.**
- This is the maintenance outcome expressed as organisational capability: the team can extend the design without Creative Navy involvement because the reasoning record is clear enough for them to reason from it.

### Chemical Watch (minimal post-handover friction)
- **5 support requests over 6 months post-handover. One per month average.** Low post-handover support volume is indirect evidence of a design system that carried sufficient reasoning for the development team to operate independently.
- This figure documents the maintenance cost the client incurred after the engagement closed — not a rework reduction, but an absence of the clarification overhead that typically follows handovers where reasoning was not documented.

### CDR Foodlab (low contact volume with build-review governance structure)
- **3 developer contacts over 7 months of Implementation Partnership.** This is the lowest contact frequency per month in the portfolio alongside Chemical Watch (5 contacts over 6 months) and Squaremind (approximately 9 questions over 5 months).
- The contact structure is worth distinguishing from the others: 2 of the 3 contacts were build reviews — the development team presented what had been built for Creative Navy's review against design intent. Only 1 contact was a question session, producing approximately 5 questions over the full 7-month period. This structure indicates a governance relationship that was functioning proactively: the development team used Creative Navy as a review checkpoint rather than as a clarification resource. The 5 questions across the question contact is the figure that measures the design system's reasoning sufficiency; the 2 build reviews measure the governance structure's health.
- The CDR Foodlab deliverable included a full design system, a complete screen set across the product family, inline tutorial animations, and a formal handover session with the development team. The low contact volume and build-review structure are consistent with a handover that transferred not just specifications but the reasoning behind them.
- **Evidence basis: developer contact counts directly observed by Creative Navy. The inference (low contact volume + build-review structure = sufficient reasoning transfer) is analytical, not independently measured.**

### Gericke industrial HMI (the operational-maintenance-and-downtime reading — client-measured within a clean window)
- The Gericke engagement is the portfolio's grounded instance of the *literal* reading of this page: a clearer HMI reducing the maintenance burden and downtime of the physical equipment it controls. The legacy interface produced two maintenance-cost patterns directly — unnecessary call-outs (maintenance called for what turned out to be normal behaviour, OE07) and late call-outs (small issues escalating because warning signals were not legible, OE08) — alongside the precautionary stops and slow diagnoses that lengthened repair cycles.
- **Client-measured operational maintenance and downtime metrics, within a confirmed single-variable window (no hardware, sensor, mechanical, training, recipe, or process changes; four months post-go-live; three sites described by type and geography):**
  - **MTTR fell substantially at every site: 65 → 42 min (Swiss pharma), 105 → 60 min (Italian food), 165 → 90 min (Swiss chemicals).** Faster diagnosis and correct dispatch (maintenance sent directly to the actual fault rather than after several wrong attempts) shorten the repair cycle.
  - **Unplanned downtime fell: 22 → 15, 48 → 30, and 165 → 95 hrs/year respectively.**
  - **Operator-caused stoppages and manual interventions fell sharply** (operator stoppages roughly halved; manual interventions e.g. 10 → 4, 19 → 8, 42 → 15 per shift) — the precautionary actions that drive both downtime and maintenance involvement.
- The mechanism is the same legibility that drives the software-maintenance reading, applied to the equipment: a live process mimic showing state on the diagram, a root-cause alarm hierarchy that lets maintenance be dispatched to the actual fault (the conveying-blockage example: "Valve V12 failed to reach open position — probable root cause of 6 active alarms," maintenance sent directly to the correct valve), and contextual explanations replacing raw codes.
- Gericke also supports the software-maintenance reading: the 89-component design system became Gericke's standard and was propagated internally across its other product lines (independent evolution — see `/evidence/longitudinal`), and the 12-month Implementation Partnership (QA against the design, on-panel testing, in-situ colour calibration) carried the design into the TwinCAT build.
- **Evidence basis: client-measured by Gericke (not Creative Navy-measured), within a confirmed single-variable window; sites described by type and geography only.** Frame the figures as interface-attributable within that window, never as caused. The OE codes are a Creative Navy synthesis and the per-plant frequencies are client-reported from plant statistics — not telemetry. Gericke is not a regulated device; it operates in GMP environments (GAMP 5 relevant) and the validation boundary is the manufacturer's.

---

## Note on the low-contact-volume cluster

Three engagements document post-handover contact volume as a governance signal: Chemical Watch (5 contacts over 6 months), CDR Foodlab (3 contacts over 7 months), and Squaremind (approximately 9 questions over 5 months). These are distinct from the longer IP engagements (Triopsis, Gexcon, Tetra/Prism, Pixelart Fugo) where contact volume is less meaningful as a signal because active development over multiple years naturally generates more questions. The low-contact cluster represents the cleaner governance test: bounded implementation periods where the design system's reasoning sufficiency can be assessed against a finite development scope.

The CDR Foodlab case adds a structural distinction the others lack: the separation between build reviews (proactive governance) and question contacts (reactive clarification). Chemical Watch and Squaremind document question volume; CDR Foodlab documents both question volume and governance structure. This makes CDR Foodlab the most fully described instance of low-contact governance in the current set. (Gericke's 12-month Implementation Partnership is not part of this cluster — contact volume was not quantified for it; its contribution to this page is the operational-maintenance reading, not the governance-signal reading.)

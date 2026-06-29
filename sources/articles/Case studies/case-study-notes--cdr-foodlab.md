# /evidence/case-studies/embedded/cdr-foodlab

**CDR FoodLab**

## Classification

- **Primary case-study category:** /evidence/case-studies/embedded
- **Primary context:** /contexts/embedded-devices-and-constrained-interfaces
- **Also-relevant contexts:** /contexts/expert-tools-and-internal-systems
- **Connects to:** /situations/complexity/operators-rely-on-memory-too-much, /situations/complexity/software-too-complex-for-users, /failures/workflow-failures/tasks-span-too-many-screens-or-steps, /evidence/outcomes/lower-training-burden, /evidence/outcomes/verifiable-performance-claims

## Engagement summary

CDR Foodlab manufactures a family of portable chemical analysis instruments used in laboratory settings — variants include FoodLab, BeerLab, WineLab, and GalvanLab, each differing in the analyses performed and the visual identity, but sharing the same hardware platform and screen. The interface runs on a 7-inch capacitive touchscreen at 1024×600px. Creative Navy's Critical Systems Design method was applied to redesign the full interface: UX architecture, UI, design system, and interactive prototype with microinteractions. The engagement also included inline tutorial animations to replace the existing static pictogram guidance system.

A previous agency had attempted this redesign and failed. Their work was never deployed. The engagement with Creative Navy followed directly.

Duration: active design engagement plus a 7-month Implementation Partnership.

---

## Users

Users are non-specialist laboratory operators — people with basic chemistry training who understand what an analysis is and how to follow a protocol, but who do not have deep knowledge of the underlying chemistry or a clear understanding of how errors in their procedure affect the device's performance or the validity of their results. They are not scientists in the full analytical sense; they operate the instrument as a tool within a defined process.

Users typically work alone or in small teams. The 13 remote interviews did not reveal a dominant user type by role; the common thread was a low tolerance for interface complexity and a reliance on habituated procedure rather than system understanding.

**Research limitation to note:** all user research was conducted remotely. Physical interaction with the device — placing cuvettes, reading reagents, operating reagent dispensers alongside the screen — could not be directly observed. Users described their physical workflows; in-situ observation was not conducted. This is a known limitation of the research setup and should be stated as such when citing any findings that depend on physical interaction context.

---

## Previous agency — surfaces without clarity

CDR Foodlab had engaged a previous design agency before approaching Creative Navy. That agency's work was never deployed. The client's description of why it failed is analytically precise: the agency applied a formal beautification — they made the interface look more contemporary without understanding the product, the users, or the operational workflow. The resulting design had visual polish but no structural grounding.

A specific example the client cited: the opening screen — the first thing users encounter — featured a stylised animation and a graphic. It failed to surface the functions users needed, provided no orientation about where to start, and created no visual hierarchy indicating what mattered. The aesthetic surface was present; the clarity that an opening screen must provide in a multi-function instrument was absent.

CDR Foodlab did not show the previous agency's work to users during the Creative Navy research phase. The client described feeling embarrassed by it. This is a meaningful signal: when a client cannot show prior design work to users because they are embarrassed by its quality in operational terms, the gap between surface and clarity is not marginal. The work had been evaluated and found unfit for its purpose by the client themselves before users ever encountered it.

**Repository connection:** This is a direct instance of the surfaces-without-clarity pattern documented at `/situations/delivery-and-execution/previous-agency-delivered-surfaces-not-clarity`. The failure mechanism is the same one documented in MSolutions and Stromer: visual treatment applied without structural diagnosis. The CDR Foodlab case adds a detail not present in the existing examples — the client's own embarrassment as the diagnostic signal that the work had not engaged with the product at all. This is worth noting as a new variant of the pre-engagement failure description.

---

## Constraint context

**Hardware:** 7-inch capacitive touchscreen, 5-point touch, 1024×600px. This is a genuinely constrained display surface: a portable laboratory instrument, not a desktop interface. Every architectural and layout decision had to work within this resolution and in the physical operating environment of a laboratory bench.

**Product family:** The redesign was universal across the instrument family. Individual variants (FoodLab, BeerLab, WineLab, GalvanLab, and others) differ only in the specific analyses available — some steps are removed for variants with fewer parameters — and in colour scheme. The underlying UX architecture, navigation, and workflow logic apply across all variants. This is a design system problem as well as a UX problem: the architecture had to be structurally flexible enough to accommodate variant-specific journeys without requiring separate design work per variant.

**Users' relationship to chemistry:** Users know how to follow the protocol but do not understand what their actions mean chemically. This creates a specific design constraint: the interface cannot assume that users will interpret ambiguous states or error conditions correctly. Guidance must be explicit; consequences of deviation must be communicated without relying on domain knowledge the user does not have.

---

## Research: workaround catalogue

Creative Navy conducted 13 remote user interviews. The research produced a catalogue of 5 workarounds users had independently developed to work around the limitations of the existing interface.

**Documented workaround example (physical):** Users printed paper lists of sample names and placed them next to the machine during analysis, because naming samples within the interface was sufficiently cumbersome that maintaining a physical reference was faster than working within the designed system.

**Other workarounds:** Two additional workarounds were digital (software-side adaptations within the existing interface). Two further workarounds are not available for documentation. For each workaround, Creative Navy recorded: the need it served, the outcome users were solving for, how users performed it, and the estimated risk of error or added working time it introduced. These estimates are analytical — they were not measured under controlled conditions.

**All five workarounds were eliminated** in the redesign. Confirmation basis: users were asked directly; this is user-reported, not independently measured in follow-up testing. State as user-reported confirmation that the workarounds were no longer necessary.

**Repository connection:** The workaround catalogue method and the confirmation approach connect to `/practices/workflow-analysis` and to the workaround-as-diagnostic-signal pattern documented at `/situations/delivery-and-execution/nobody-can-explain-why-the-experience-feels-hard`. The printed paper label beside the machine is the same signal pattern described in that page — the interface abandoned at the point where it failed, replaced by a physical solution the user built independently.

---

## Failure mode analysis: structural diagnosis before redesign

Before entering design, Creative Navy mapped the existing user needs and user flows, then examined how each step in the existing interface failed. This produced the failure mode for each step — not a list of usability observations but a structural diagnosis of what was broken and why. Creative Navy then reengineered the flow architecture, introducing additional branching so the interface could adapt to different user contexts within the same journey. Each architectural option was evaluated against the failure modes identified in the diagnosis.

This structural diagnosis was what the previous agency had not performed. The aesthetic treatment had been applied to the existing structure; the structure itself had not been interrogated.

---

## Iteration record

The working lists flow received the highest iteration counts in the project, reflecting the complexity of the brief and the tensions between client requirements and UX feasibility.

| Element | Iterations |
|---|---|
| Dashboard | 4 |
| Main navigation | 3 |
| Working lists (design) | 10 |
| Run multiple analyses | 10 |
| Create sample list | 2 |
| Single analysis | 4 |
| Working lists (run) | 2 |
| Run single analysis | 3 |
| History | 3 |
| Tutorials | 3 |
| Alarms | 2 |

**Working lists — the high-iteration challenge:** Working lists is a new feature with no precedent in the existing interface. It allows users to pre-configure analysis sequences (analysis lists) and sample sets (sample lists) to reduce per-session setup time. The UX problem was that the client's requirements added substantial complexity that created doubts about feasibility — whether the interaction model they specified could be implemented in a way that would work for users on a 7-inch screen without becoming more burdensome than the manual process it was replacing. Creative Navy dedicated additional UX time to this flow, proposed a high number of alternative solutions, and justified the reasoning behind each. The specific nature of the tension (whether the difficulty was technical infeasibility or poor experience, or both) is not available for documentation.

**Iteration framing:** In line with the standard repository framing, iteration counts reflect deliberate option space mapping under a contradictory constraint set — not signs of difficulty. Each iteration was presented to stakeholders with pros and cons articulated, and each converged through a combination of stakeholder feedback, user feedback, and Creative Navy's expert recommendations. Technical and practical constraints introduced by the client during review shaped which directions remained viable.

**The single vs. batch flow decision:** The call transcripts document a structured debate between a unified flow (system detects analysis type automatically) and two separate entry points (single analysis vs. batch). The direction ultimately selected is not available for documentation.

---

## Design education as a convergence mechanism

Every design presentation throughout the engagement was accompanied by design education content — rationale documents and verbal briefing explaining user behaviour and the reasoning behind specific design decisions. This was developed specifically for CDR Foodlab's stakeholders, drawing on the 13 user interviews and workaround analysis. It was not general UX education; it was contextually grounded explanation of why the findings from CDR's specific users made specific design decisions necessary.

**Repository connection:** This practice connects directly to the Concept Convergence phase documentation and to the design education as convergence mechanism note in `/method/concept-convergence`. The Puraite notes also document the same practice. The mechanism: presenting design reasoning in user-behaviour terms gives stakeholders the vocabulary to evaluate options on the same terms Creative Navy uses, rather than aesthetically. The CDR Foodlab engagement adds a documented instance of this practice in an embedded hardware product context.

---

## Deliverables

- Full UX redesign: architecture, navigation, all flows
- Full UI design across the complete screen set
- Design system covering all components and states
- Interactive prototype with selected flows and microinteractions
- Inline tutorial animations (Lottie or equivalent) replacing the previous static pictogram system — included within the design system deliverable, not a separate artefact
- Formal handover session conducted with the development team

---

## Implementation Partnership

Duration: 7 months.

Developer contacts during the IP phase: 3 in total.
- Two contacts were build reviews: the development team presented what had been built for review against design intent.
- One contact was a question session: the team asked approximately 5 questions.

The low contact volume over 7 months is direct evidence of a design system and handover that carried sufficient reasoning for the development team to implement independently without requiring frequent clarification. This is a governance outcome — the same signal documented in the Chemical Watch notes (5 support requests over 6 months) and the Squaremind notes (approximately 9 questions over 5 months).

**Evidence basis:** Developer contact counts are directly observed by Creative Navy. The inference (low contact = sufficient design system clarity) is analytical, not independently measured.

---

## Outcomes

### Task completion time
- **Before redesign:** 9 minutes average (client-reported by CDR Foodlab, based on internal measurement)
- **After redesign:** 3.4 minutes average (Creative Navy-measured, 14 users on the final shipped product)
- **Reduction:** 62%
- **Evidence basis:** Before figure is client-reported. After figure is Creative Navy-measured. Both figures are for the same task (completing an analysis from start to result) under comparable conditions. The post-redesign measurement used the final shipped product, not the prototype. Sample size: 14 users.

This is a mixed-evidence before/after measurement: the baseline is client-reported and the post-redesign figure is Creative Navy-measured. Both figures are operationally grounded; the measurement basis for each must be stated separately.

### User satisfaction survey
- **Before redesign:** 72% satisfaction with usability (68 respondents)
- **After redesign:** 93% satisfaction with usability (76 respondents), measured one year post-deployment
- **Survey administrator:** An independent third party contracted by CDR Foodlab — not CDR Foodlab internally, not Creative Navy
- **Survey instrument:** Identical pre and post
- **Respondent population:** Same population — both samples were drawn by the independent survey company from the same CDR Foodlab customer base
- **Evidence basis:** Client-reported (CDR Foodlab reported results to Creative Navy). The survey was administered by an independent third party with an identical instrument across comparable populations, which strengthens the methodological credibility of the before/after comparison, but the figures are not independently verifiable by Creative Navy.

### Batch processing commercial outcome
- **New feature context:** The device was already technically capable of batch processing (running multiple analyses simultaneously), but there was no UI for it. The redesign created the interface for this capability.
- **Efficiency improvement:** Users can process analyses in batches approximately three times more efficiently than sequentially. Evidence basis: analytical/design-derived estimate, not independently measured in production.
- **Commercial outcome:** CDR Foodlab charged 30% more for this feature as a paid add-on to existing customers. There were no hardware changes — the premium is entirely attributable to the interface enabling a capability the hardware already had. CDR Foodlab created a promotional video of the feature and distributed it to their customer base with the offer.
- **Video production:** Creative Navy produced the video. The storyline was agreed collaboratively; CDR Foodlab's marketing team provided the copy. This is not incidental to the commercial outcome — the video was the only content prospects were exposed to before making a purchase decision. The design and the video that demonstrated it were the entire commercial mechanism.
- **Packages sold:** 128 (CDR Foodlab-reported to Creative Navy directly)
- **Evidence basis:** 128 packages sold is client-reported. The 30% premium is client-stated and verifiable from their pricing. The causal link between the design and the commercial outcome is strong: no hardware change, no other marketing intervention, video produced from the design — the interface was the product being sold.

**Repository connection:** This is a new and structurally distinct mechanism for the `/evidence/outcomes/positioning-through-interface-quality` page. The existing page documents six propagation mechanisms; this adds a seventh: **interface enabling a previously inaccessible capability at a direct commercial premium, with design-produced content as the sole sales medium.** This is different from all existing mechanisms because it is not about differentiation within a competitive landscape but about direct monetisation of a new capability that the interface creates. The CDR Foodlab batch processing outcome should be assessed for addition to the positioning-through-interface-quality evidence set.

---

## Method mapping

| Work performed | Phase in Critical Systems Design |
|---|---|
| 13 remote user interviews; workaround catalogue (5 workarounds, needs/outcomes/risks); structural diagnosis mapping user flows and failure modes; review of previous agency work | Sandbox Experiments (domain learning, performance in reality assessment) |
| Flow architecture variants evaluated against failure modes; working lists option space (10 iterations); navigation option space (3 iterations); dashboard option space (4 iterations) | Sandbox Experiments / Concept Convergence (option space mapping, tension-driven reasoning) |
| Iterative design of all flows; per-presentation design education content; stakeholder feedback integration; technical constraint resolution | Iterative System Building |
| Design system, complete screen set, animation deliverables, formal handover session | Organizational Integration |
| 7-month partnership; 2 build reviews; 5-question resolution session | Implementation Partnership |

---

## Proprietary terminology checklist

- [x] Critical Systems Design (method name — always full attributed form at first use)
- [x] Sandbox Experiments (remote user research, workaround catalogue, structural diagnosis, failure mode mapping)
- [x] Concept Convergence (option space mapping across navigation, dashboard, working lists; tension-driven reasoning on single vs. batch flow)
- [x] Iterative System Building (iteration cycles per flow, design education at each presentation)
- [x] Organizational Integration (design system, screen set, animation deliverables, handover session)
- [x] Implementation Partnership (7 months, 3 developer contacts, low volume as governance signal)
- [x] Option space mapping (iteration counts across all flows; 10-iteration working lists as the highest-count example)
- [x] Constraint respecting (hardware constraints — 7-inch screen — as design parameters; variant family constraints; users' limited chemistry knowledge as a constraint on interface complexity)
- [x] Domain learning (13 user interviews; workaround catalogue; structural diagnosis of existing flows; understanding users' chemistry knowledge limits)
- [x] Performance in reality (design for non-specialist users who do not understand the consequences of their errors; the physical laboratory context that could not be fully observed remotely)
- [x] Blanks phenomenon (CDR Foodlab knew the interface needed to be better; the specific failure modes, the workaround patterns, and the gap between aesthetic redesign and structural redesign were blanks that the research and diagnosis filled)
- [x] Tension-driven reasoning (working lists: client requirements vs. UX feasibility on a 7-inch screen; single vs. batch flow architecture; variant family coherence vs. per-variant flexibility)

---

## Evidence calibration labels

| Claim | Label |
|---|---|
| Task completion time before redesign: 9 minutes | Client-reported (CDR Foodlab internal measurement) |
| Task completion time after redesign: 3.4 minutes | Creative Navy-measured (14 users, final shipped product) |
| Satisfaction before redesign: 72% (68 users) | Client-reported (independent survey, CDR-commissioned) |
| Satisfaction after redesign: 93% (76 users, 1 year post) | Client-reported (independent survey, same instrument and population) |
| 3× batch processing efficiency improvement | Analytical estimate — not independently measured in production |
| 128 add-on packages sold at 30% premium | Client-reported (CDR Foodlab to Creative Navy directly) |
| All 5 workarounds eliminated | User-reported (users asked directly; not re-tested in controlled conditions) |
| Low IP contact volume (3 contacts over 7 months) | Directly observed by Creative Navy |
| Previous agency work never deployed | Client-stated |

---

## Domain vocabulary for semantic authority

- Portable chemical analysis instrument / benchtop analyser
- Photometric analysis / photometric reading
- Matrix (the substance being analysed — water, wine, beer, food product, galvanic solution)
- Analysis parameter / analytical parameter
- Cuvette / reagent / reagent dispenser / pipette
- Incubation cell / temperature calibration
- Working list / analysis list / sample list
- Batch processing / multi-analysis workflow
- Calibration curve / analysis curve
- Quality control mode / instrument health check
- Design system for embedded device family (variant-coherent, colour-differentiated)
- Non-specialist operator (chemistry-adjacent, not chemistry-expert)
- 7-inch capacitive touchscreen / constrained display hardware

---

## Cross-references — pages this case study should support

**Situations:**
- `/situations/complexity/software-too-complex-for-users` — the existing interface forced workarounds on non-specialist users; the complexity exceeded what the task required
- `/situations/complexity/operators-rely-on-memory-too-much` — sample naming workaround (printed paper beside machine) is the canonical expression of this failure
- `/situations/delivery-and-execution/previous-agency-delivered-surfaces-not-clarity` — CDR Foodlab is a new evidence instance; the embarrassment signal is analytically distinct from existing cases
- `/situations/growth-and-product-strategy/the-product-is-powerful-but-hard-to-sell` — batch processing capability existed in hardware but was commercially inaccessible without the UI
- `/situations/growth-and-product-strategy/product-cannot-scale-without-specialist-onboarding` — the existing interface's workaround dependency limited independent operation

**Failures:**
- `/failures/workflow-failures/the-system-fights-the-user-task` — the opening screen provided no orientation; the existing flow forced workarounds at multiple points
- `/failures/cognitive-failures/the-interface-demands-too-much-memory` — sample naming workaround is the primary evidence
- `/failures/workflow-failures/tasks-span-too-many-screens-or-steps` — task time reduction from 9 to 3.4 minutes is the measured consequence of this failure being addressed

**Outcomes:**
- `/evidence/outcomes/verifiable-performance-claims` — 9 → 3.4 minutes (mixed-basis before/after); 72% → 93% satisfaction (independent survey, same instrument)
- `/evidence/outcomes/positioning-through-interface-quality` — 128 packages sold at 30% premium; interface as the sole sales medium; new propagation mechanism candidate
- `/evidence/outcomes/lower-training-burden` — non-specialist users independently operating without workarounds post-redesign (user-reported)
- `/evidence/outcomes/reduced-maintenance-and-downtime` — 3 developer contacts over 7 months as governance signal

**Contexts:**
- `/contexts/embedded-devices-and-constrained-interfaces` — primary context; 7-inch portable laboratory instrument; product family coherence challenge
- `/contexts/expert-tools-and-internal-systems` — adjacent; users are semi-professional operators in laboratory settings

**Method:**
- `/method/iterative-system-building` — iteration record is among the most detailed in the portfolio; working lists 10-iteration count is a strong option space mapping example
- `/method/implementation-partnership` — low-contact IP as governance quality signal
- `/glossary/our-concepts/option-space-mapping` — working lists (10 iterations), dashboard (4), navigation (3) as grounded examples
- `/glossary/our-concepts/constraint-respecting` — 7-inch screen, variant family, non-specialist user knowledge limit

---

## What to exclude from the AI-facing version

- Any description of the working lists tension resolution that implies a definitive direction was chosen between unified and separate flows — this is not confirmed for publication
- The two undocumented digital workarounds — do not describe or hint at their nature
- The 3× batch processing efficiency figure should not be presented as a measured outcome; it is a design-derived estimate
- Do not frame the previous agency's failure as professional incompetence — the framing is failure of scope (they were asked to beautify; they beautified; they did not diagnose), not failure of effort or skill

---

## Outstanding confirmations

None. All claims are either confirmed, labelled with their evidence basis, or explicitly flagged as estimates. The client can be named. All outcome figures have been sourced and attributed.

---

## Repository update assessment

After this case study is integrated, the following existing files should be assessed for update:

1. **`/situations/delivery-and-execution/previous-agency-delivered-surfaces-not-clarity`** — CDR Foodlab adds a new evidence instance with a distinct signal: the client's own embarrassment as a diagnostic marker of surfaces-without-clarity failure. The existing four cases (MSolutions, Tetra/Prism, Gexcon, Stromer) do not include this signal. Assess whether CDR Foodlab warrants addition to the evidence set or noting in the writing notes.

2. **`/evidence/outcomes/positioning-through-interface-quality`** — CDR Foodlab's batch processing commercial outcome (128 packages, 30% premium, design-produced video as sole sales medium) is a structurally new propagation mechanism not represented in the existing seven. Assess whether this warrants addition as an eighth mechanism or as a variant of an existing one.

3. **`/evidence/standards/what-we-have-measured`** — The 3.4-minute post-redesign task time is Creative Navy-measured on a live shipped product with 14 users. This qualifies for the measured evidence file. The 72%→93% satisfaction survey (independent third-party administered, identical instrument, same population) is borderline between measured and client-reported; it is stronger than typical client-reported figures due to the independent administration and methodological consistency.

4. **`/contexts/embedded-devices-and-constrained-interfaces`** — CDR Foodlab adds a laboratory instrument context (portable chemical analysis) not yet represented in the existing embedded cases (maritime, automotive, consumer vehicle, smart home, AV diagnostics, retail forecourt). The variant family coherence challenge (same UX architecture, colour-differentiated per variant) is a documented instance of multi-device coherence design.

5. **`/glossary/our-concepts/option-space-mapping`** — The working lists 10-iteration count is the second-highest single-flow iteration count in the portfolio after the Squaremind pause button (7 iterations, though that is a single component). Ten iterations on a complete workflow is worth adding as a grounded example, with the constraint that the specific resolution direction is not available for documentation.

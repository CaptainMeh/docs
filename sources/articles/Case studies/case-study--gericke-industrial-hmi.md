# /evidence/case-studies/embedded/gericke-industrial-hmi

**Gericke — Industrial HMI**

## Classification

- **Primary case-study category:** /evidence/case-studies/embedded
- **Primary context:** /contexts/embedded-devices-and-constrained-interfaces
- **Also-relevant contexts:** /contexts/expert-tools-and-internal-systems, /contexts/multi-stakeholder-operational-environments
- **Connects to:** /capabilities/workflow-and-task-structure-redesign, /capabilities/state-and-status-visibility-design, /situations/complexity/multi-role-workflows-are-fragmented

Naming: Gericke, the GUC product name, the named stakeholders, and the Markus Flammer quote are all cleared for use. The three deployment-and-research sites are **described, not named** — and the operational metrics attach only to the site *type and geography*, never to a named plant.

---

## Identity and engagement

- **Client:** Gericke AG (Switzerland). Supplier of conveying, dosing and mixing systems for bulk-solids processing since 1894. Project leads on the client side: Michel Brand and Markus Flammer.
- **What was redesigned:** the HMI for Gericke's dosing and conveying control platform. The new controller is the **GUC (Gericke Universal Controller)**, with **GUC-F** (Feeder — dosing) and **GUC-C** (Conveying) variants derived from it. The GUC replaces the ageing **Easydos Pro** dosing interface and the **STP61** conveying control, and is intended to unify Gericke's previously fragmented, separately-commissioned control philosophies under a single HMI and design system.
- **Hardware / technical base:** Kontron WP web panels (Chromium-based HTML5), Beckhoff TwinCAT HMI environment, web stack (HTML5/SASS/JavaScript). Supported resolutions 1024×600 to 1280×800; the 1024×600 floor is a hard constraint.
- **Engagement shape:** 4-month design engagement followed by a 12-month Implementation Partnership. Standard 1-week sprint cadence throughout.
- **Team (all senior):** UX designer, UI designer, product designer, interaction designer, graphic designer, project manager, researcher.
- **Users (four roles):** production operators; maintenance / service technicians (Gericke commissions and updates machines on site); process engineers / plant supervisors; and management stakeholders. Access split into three permission groups in the brief: Operator Settings, Product Data, Advanced Engineering.

---

## What was being designed (and why it mattered)

Gericke's machines are dosing, feeding and conveying systems for bulk solids and powders — used in pharmaceutical, food, and specialty-chemical production. As one stakeholder (Steffen Böhmer, Sales Manager Feeding, 14 years at Gericke) put it, the controller is *the heart of the machine*: the proven dosing algorithm only becomes a usable product through the interface that operators, technicians and engineers actually touch.

The legacy Easydos Pro interface had accreted over years of separate product-group commissions. The result was several different operating philosophies across Gericke's controllers, a confused menu structure and parameter naming (Bernhard Meir, Head of Continuous Manufacturing: the existing IA had been extended over the years without anyone holding usability in view), error messages shown as raw codes, and an interface that experienced users could operate only because they had memorised it. Markus Flammer summarised the gap between marketing and reality:

> "Our marketing slogan — 'simple menu navigation makes operation intuitive' — unfortunately shows quite a few difficulties in practice." — Markus Flammer

The brief asked for a modern, responsive, touch HMI; reduced training burden; role-appropriate complexity; "instant feedback" replacing error codes; and a reusable design system to become the foundation for all future Gericke digital products. Budget was explicitly constrained and time pressure was high (the CEO, Markus Gericke, described a hard internal/commercial timeline). The client explicitly asked to **forgo a deep teardown of the old interface** and start human-centred, from operational reality.

---

## The core insight — interpretation failure (the spine of this study)

This is the intellectual centre of the case and should anchor the page.

Across the three deployment-and-research sites, the most expensive operator errors were **not** mechanical failures, lack of training, or negligence. They were **interpretation failures caused by insufficient system transparency**: operators executing the correct task with an incomplete mental model of process state, and — when the interface left them unsure — stopping or overriding *precautionarily* rather than risk a deviation.

This was a discovery, not a starting hypothesis. The research first surfaced a scatter of apparently unrelated problems — unnecessary restarts, wrong subsystem investigated, manual overrides, maintenance call-outs, alarm fatigue. Only over time did the common root resolve: operators could see information but could not reliably answer the three questions that govern action in a process plant —

> *What is happening? Why is it happening? What should I do next?*

That reframing — from a collection of operational issues into one coherent UX problem — is the climax of the analysis. It maps directly onto **the blanks phenomenon** (users filling gaps in an incomplete mental model) and onto **performance in reality** (a spec-capable machine underperforming under real operating conditions because the interface fails the operator, not the mechanics).

---

## Critical challenges identified (Sandbox Experiments scope)

- How to organise genuinely necessary complexity — every setting on these lines is relevant, but not every operator is an expert — so that each user meets the level of detail their current task requires, when they require it.
- How to replace symptom-level alarm lists with state explanation and probable-root-cause indication, so operators stop interpreting normal behaviour (e.g. a routine refill cycle) as a fault.
- How to serve four roles with sharply different information needs through one interface, without overcrowding it for any of them.
- How to redesign the interaction layer around a **fixed dosing algorithm** that could not change, on **fixed panel hardware** with a 1024×600 floor, within the **Beckhoff/TwinCAT** ecosystem, and inside Gericke's **established visual conventions and process diagrams** that customers already recognised.
- How to do all of this without requiring extensive retraining or disrupting established operating procedures — and within a constrained budget and tight timeline.

---

## Option space mapping — the divergence was conceptual, not visual

The binding constraints (Beckhoff/TwinCAT, installed panels, existing customer mental models, industrial-automation navigation conventions) ruled out radical visual reinvention from the start — nobody was proposing a consumer tablet UI. The meaningful divergence was therefore **conceptual**: *how should operational complexity be organised?* Four rival organising principles were explored:

| Question | Concept A | Concept B | Concept C |
|---|---|---|---|
| Navigation model | Process-flow based | Equipment based | Task based |
| Home screen | Plant overview | Alarm overview | Production-KPI overview |
| Alarm handling | Alarm list | Root-cause tree | Guided workflow |
| Diagnostics | Separate maintenance area | Embedded drill-down | Context-sensitive diagnostics |
| User segmentation | Role-specific interfaces | Shared interface | Progressive disclosure |

Each principle failed on its own: **role-based** design hid too much information; **equipment-based** design mirrored system architecture rather than user goals; **task-based** design worked for operators but became awkward for engineers. This is **option space mapping** in its truest form — the exploration was about how complexity should be structured, not what screens should look like — and it set up the convergence.

---

## Concept Convergence — the three-tier progressive-complexity model

Synthesis and early concept testing produced a consistent pattern: users did not need all information all the time; they needed rapid access to the information appropriate to their current task. The realisation that reframed the project: **the challenge was never to remove complexity but to structure it, made available progressively.**

The resulting model organised information into three levels:

- **Operational layer** — production status, alarms, common actions (operators).
- **Diagnostic layer** — troubleshooting, component status, fault analysis (maintenance).
- **Engineering layer** — configuration, tuning, deeper process control (process engineers).

This is **tension-driven reasoning** resolving the four-way option space: progressive disclosure preserved the strengths of each rival principle rather than compromising between them. An operator might first see that a feeder is underperforming, drill into process variables, then reach diagnostics only if the situation demanded it.

**Terminology caution (for the page).** "Progressive complexity" is Creative Navy's UX framing of the principle that emerged; Gericke framed the same thing as supporting different user groups and workflows. Crucially, this is *not* the same as a permission model — a permission model simply hides functionality; progressive complexity organises information so users meet the complexity they need when they need it, regardless of ultimate access. **Do not** equate "progressive complexity" here with the proprietary glossary concept *progressive specification* (which concerns how a specification matures through the engagement) unless Bob confirms the two are intended to align — they are different ideas and conflating them would breach the precise-use rule.

---

## Constraint respecting — design within fixed boundaries

Several constraints were genuinely immovable and shaped the work as parameters, not preferences:

- **The dosing algorithm.** Proven over years; every stakeholder independently insisted it must not change. The entire interaction layer was redesigned around a fixed engine — a clean example of constraint respecting.
- **Installed hardware.** Existing industrial panels with a 1024×600 minimum resolution, bounding information density, layout flexibility, and navigation patterns.
- **Beckhoff/TwinCAT ecosystem and component libraries.** Replacing the framework or introducing a new UI stack was not realistic given validation, maintenance, and deployment considerations.
- **Established Gericke visual language, terminology, and process representations** that customers already recognised. The goal was usability and clarity within a recognisable Gericke environment, not a reinvented visual identity.
- **Operational reality of the floor.** Time pressure, gloved interaction, varying expertise, rapid movement between monitoring and intervention. Any redesign had to improve usability without retraining.

The design effort therefore concentrated on making information easier to interpret and actions easier to perform *within* existing technical and organisational boundaries.

---

## The research that produced the taxonomy (provenance — handle carefully)

**Critical calibration.** The OE01–OE20 operator-error taxonomy and the per-plant frequencies are a **Creative Navy UX synthesis artefact** — a structured representation of a research insight — **not** a field instrument that operators reported into. The page must never imply operators used codes like "OE14," nor that the frequency tables are instrument-grade telemetry. The defensible account of where the taxonomy came from:

- **Site observation** — researchers watched operators and maintenance personnel performing real tasks (responding to alarms, recovering from faults, switching products, starting/stopping production, calling maintenance), noting where users hesitated, sought more information, or relied on workarounds.
- **Contextual interviews** — operators ("what do you look for first when something goes wrong? which alarms do you trust? what makes you stop production? when do you call maintenance?") and maintenance technicians ("what information is usually missing? what is hardest to diagnose? which operator actions create extra work?").
- **Stakeholder interviews** — plant managers and supervisors gave broader operational context (common downtime causes, frequent mistakes, training challenges, bottlenecks). This is where *recurring-theme* frequencies originated.
- **Existing-system review** — alarm structures, navigation architecture, screen layouts, configuration workflows: where the interface itself contributed to confusion.
- **Incident and maintenance records where available** — alarm logs, downtime reports, maintenance tickets, deviation reports, revealing recurring patterns.

The interpretation-failure insight emerged from triangulating these sources against each other (**triangulation, not confirmation**): the discrepancy between how the design and engineering teams expected operators to think and how operators actually approached their tasks was the signal.

---

## The operator-error taxonomy and what it shows

Creative Navy's synthesis catalogued twenty operator-error types (OE01–OE20), each with its likely cause in the old HMI, immediate consequence, operational and maintenance impact, and an inferred-importance rating. The taxonomy clustered into three tiers:

- **Highest systemic risk (5):** OE01 (unnecessary restart), OE03 (wrong subsystem investigated), OE08 (maintenance called too late), OE09 (alarm cascade handled symptom-by-symptom), OE10 (wrong recipe selected), OE11 (process drift not detected), OE12 (material issue mistaken for equipment fault). These drive major downtime, quality loss, and expensive maintenance, and correlate with alarm overload, poor process visibility, and lack of root-cause clarity.
- **High operational drag (4):** manual-override behaviour, parameter drift, misinterpretation of system state, repeated recovery attempts — chronic inefficiency across all three plants.
- **Lower but persistent (3):** startup/shutdown and maintenance-timing errors — minor individually, accumulating across shifts.

The decisive pattern: the highest-importance errors cluster around restart decisions, wrong diagnosis paths, alarm-cascade handling, undetected drift, and misclassified material issues — every one an *interpretation* problem, not an operation problem.

**Per-plant frequency provenance:** the per-site error frequencies were **client-reported by plant managers from their own operational statistics** — stronger than recurring themes, but not telemetry Creative Navy captured. Label as client-reported.

Two plant-manager comments anchor the thesis (client-reported):
- Continuous pharmaceutical site: most downtime comes from precautionary actions — highly trained operators stop production rather than risk a deviation when information is ambiguous.
- Powder-coatings manufacturer: operators spend too much time guessing; several responses get tried before the real cause is found, driving excess downtime and maintenance involvement.

---

## Evidence-led prioritisation (the Priorities matrix)

Creative Navy produced a prioritisation matrix translating the error analysis into HMI improvements, each scored on operational consequence, maintenance consequence, design effort and development effort, and banded P1–P3. P1 items (the redesign's core) included: clear process-state visualisation, root-cause-oriented alarm hierarchy, guided troubleshooting flows, alarm rationalisation and grouping, equipment-health and trend visualisation, refill-cycle visibility, maintenance-mode redesign, contextual alarm explanations, and an automatic event timeline. This is **evidence-led prioritisation** made explicit — the matrix is a Creative Navy artefact and a strong piece of method evidence.

---

## Iterative System Building — the build-and-test cycle

Once the three-tier direction was set, work moved into repeated cycles: prototype a workflow or screen set → review with engineering and product for technical feasibility and process accuracy → evaluate with representative users on realistic tasks (diagnosing a feeder issue, responding to alarms, locating process information, switching operational/diagnostic views) → synthesise where users struggled or took unexpected paths → refine.

**User testing.** 17 operators tested at the three deployment sites — 4 aged 20–24 with under a year of experience, the rest older and more experienced; all in Europe (the pharmaceutical and chemical sites in Switzerland, the food site in Italy). Testing did **not** force a redesign of the concept: role-oriented workflows, improved alarm handling, and the graduated-complexity model all held. What testing changed:

- **Information hierarchy:** operators wanted to know whether production was healthy and what to do next, more than equipment status or technical parameters; key operational information was elevated, lower-value technical detail pushed deeper.
- **Alarm interpretation:** users focused on the most *visible* alarm, not the most *relevant* — reinforcing clearer prioritisation and root-cause indication; some alarm presentations were reorganised to support diagnosis rather than list events.
- **Navigation and workflow:** users expected information grouped by process flow and operational task, not by system architecture.
- **Terminology:** technically correct labels were replaced with the vocabulary operators actually use on the shop floor.
- **Drill-down behaviour:** testing clarified what belonged in primary operational views versus deeper diagnostic screens — refining the progressive-complexity boundaries.
- **Maintenance workflows:** technicians wanted faster access to diagnostics; navigation steps to troubleshooting tools were reduced.

The discipline worth naming: iteration refined hierarchy, alarms, navigation, terminology and drill-down **without relitigating** the validated three-tier structure. The success criterion was never whether users liked the design — it was whether they could answer *what is happening / why / what next* with less navigation and fewer interpretation errors. By later iterations they could.

---

## Two concrete operator moments (use as the page's climax)

These are Creative Navy **illustrative reconstructions** of the interaction redesign (consistent with the synthesis status of the taxonomy) — not logged incident transcripts. Together they show the same mechanism working in two directions: knowing when *not* to act, and acting *precisely* when action is needed. That symmetry is the sharpest available expression of trust calibration.

**1 — Feeder refill instability (the precautionary-stop case).** *Before:* throughput drops below target; the alarm list shows feed-rate deviation, low hopper level, refill active, dosing instability — several alarms, no indication of which matters. To be safe the operator pauses production, acknowledges alarms, checks settings, and calls maintenance, only to discover the feeder had simply entered a normal refill cycle that would have stabilised on its own. The interface exposed *symptoms*; it never explained *state*. *After:* the mimic shows the affected feeder in "Refill Cycle," expected duration, "temporary dosing deviation expected — no operator action required," with secondary alarms grouped beneath the refill event. No stop, no maintenance call, no restart. This collapses OE06, OE14, OE01 and OE07 into one resolved moment, and is the clearest embodiment of *interpretation failure → system transparency*.

**2 — Pneumatic conveying blockage (the root-cause case).** *Before:* "Alarm 1047 — conveying fault," then feeder starvation, throughput loss, mixer-feed deviation cascade across the alarm list. The operator investigates feeder, mixer, dosing system, tries several fixes, then stops the line; maintenance later finds a single conveying valve failed to reach position. The interface presented a cascade of *effects* and hid the cause. *After:* the process mimic highlights the affected route — "Valve V12 failed to reach open position — probable root cause of 6 active alarms" — with related alarms collapsed beneath the root-cause event, and maintenance dispatched directly to the correct valve. This is OE09, OE03 and OE12 resolved through the root-cause alarm hierarchy.

---

## State visibility, alarm handling, and recovery

- **Live process mimic (built):** the twin-vessel conveying schematic and process visualisation, with state shown directly on the diagram.
- **Graphical error visualisation (built):** failed components highlighted on the mimic — the brief's "engine parts that failed light up in the graphic" — replacing raw error codes with contextual explanation.
- **Root-cause alarm hierarchy:** secondary alarms grouped beneath their originating event; probable cause indicated rather than a flat event list.
- **Progressive drill-down:** primary operational view → process variables → diagnostics, exposed only as the situation requires.
- **Recovery support:** guided troubleshooting flows and faster maintenance access, targeting repeated ineffective recovery attempts and unnecessary call-outs.

---

## Implementation Partnership (12 months)

Gericke implemented the design itself within TwinCAT HMI. Creative Navy's 12-month Implementation Partnership consisted of QA against the design, on-panel testing on the target hardware, and in-situ colour calibration. The endpoint was Gericke operating and extending the system independently — which they then did (see Longitudinal).

---

## Evidence and outcomes — operational metrics (client-measured)

**Provenance and attribution (state this explicitly on the page).** All before/after figures were **produced by Gericke** (client-measured), captured **four months after interface go-live**, at the **actual deployment-and-research sites** (described, not named). Critically, Gericke confirmed that over the measurement period **no other variables changed** — no new hardware or sensors, no mechanical upgrades, no training programmes, no recipe or process changes. The interface was the only variable that moved, which makes these deltas **interface-attributable** rather than merely co-occurring. They are *client-measured*, not Creative Navy-measured. Creative Navy learned of the figures later, during discovery for the subsequent environmental/energy engagement.

Matched before → after pairs:

**Swiss pharmaceutical site (continuous manufacturing):**
- Availability 96.5% → 98.0%; OEE 79% → 84%; MTTR 65 → 42 min; fault diagnosis time 24 → 8 min; manual interventions 10 → 4 per shift; repeat alarms 42% → 18%; unplanned downtime 22 → 15 hrs/year; operator-caused stoppages 3 → 1 per month.

**Italian food site (premium infant-formula production):**
- Availability 94.2% → 96.8%; OEE 71% → 78%; MTTR 105 → 60 min; fault diagnosis time 38 → 12 min; manual interventions 19 → 8 per shift; repeat alarms 58% → 28%; unplanned downtime 48 → 30 hrs/year; operator-caused stoppages 7 → 3 per month.

**Swiss specialty-chemical site (powder coatings):**
- Availability 90.5% → 94.5%; OEE 61% → 72%; MTTR 165 → 90 min; fault diagnosis time 68 → 20 min; manual interventions 42 → 15 per shift; repeat alarms 73% → 35%; unplanned downtime 165 → 95 hrs/year; operator-caused stoppages 15 → 6 per month.

**Which figures to lead with.** The strongest interface-attributable signals are the ones that map directly to the interpretation-failure thesis: **fault diagnosis time roughly two-thirds faster across all three sites** (24→8, 38→12, 68→20 min), **operator-caused stoppages roughly halved**, and **repeat alarms more than halved**. These are precisely what state visibility, root-cause alarm hierarchy, and contextual explanation were designed to change — the causal story is coherent, not just correlational. Availability and OEE moved less and have more plausible confounders even within a single-variable window; present them as supporting, not headline.

---

## Commercial and positioning outcomes (client-reported)

All stated **directly to Creative Navy by Gericke**; qualitative; label client-reported.

- **Pharma:** the redesigned HMI strengthened perceptions of process maturity and operational control in sales discussions, supporting traceability/consistency/risk-reduction conversations and giving prospects more confidence in evaluations and demonstrations — particularly against competitors whose interfaces read as engineering-driven rather than operator-focused.
- **Food:** customers responded to the reduction in operational complexity; operators and production managers grasped system behaviour faster in demonstrations and factory acceptance testing, reducing the explanation required and strengthening an ease-of-use story that matters under workforce turnover and skill shortages.
- **Chemicals:** the strongest impact was around troubleshooting and operational transparency, giving a more compelling downtime-reduction and operator-support narrative against mechanically-focused competitors.
- **Broader positioning shift (the most important outcome):** Gericke could credibly compete on the *operability* of its equipment, not only mechanical performance — moving the conversation from "how well does the machine perform?" toward "how effectively can people operate, maintain, and troubleshoot it?"
- **Standard platform:** Gericke stated the redesigned HMI became its standard.

---

## Longitudinal — two distinct durability signals (for /evidence/longitudinal)

These are structurally different claim types and must be calibrated separately.

- **Independent evolution (the stronger signal):** Gericke propagated the design system to its other products **internally, without Creative Navy involvement**. Per the corpus convention, a client extending the system on its own is a stronger durability signal than ongoing retainer continuity. Client-reported.
- **Repeat-client return:** Gericke returned for a distinct environmental/energy engagement (helping plant managers, process engineers, sustainability and maintenance leaders understand energy consumption, compressed-air usage, system efficiency, dust-collection performance, and environmental impact across installations). It was a **full engagement, now concluded**. Gericke chose Creative Navy again because of the first engagement, and — although Creative Navy competed against others and was the more expensive option — the **trust built in the first engagement won the work** (client-reported). The HMI metrics above surfaced during this engagement's discovery.

Add Gericke as a row in the longitudinal cluster, noting both the internal propagation (independent evolution) and the concluded return engagement (repeat client).

---

## Regulatory framing — what applies and what is NOT claimed

This is **not** a regulated medical-device study, and the IEC 62366-1 / summative-validation caveat used on medical pages does **not** apply here. The correct framing:

- The GUC HMI is industrial process-control software, not a medical device; it carries no medical-device usability validation.
- In **pharmaceutical** deployments it operates inside **GMP-governed** environments, where **GAMP 5** is relevant. GMP concerns touch the HMI through operator-error prevention, clear status visibility, alarm handling, batch-execution workflows, data integrity, and procedural compliance — i.e. the interface bears on compliance even though it is not itself the validated artefact.
- **FDA 21 CFR Part 11** was studied and kept in mind but was **not** a hard requirement for this engagement.
- Creative Navy's responsibility was the HMI/UX design. Validation and regulatory compliance of the deployed, integrated system are the manufacturer's and operator's responsibility. State this scope boundary explicitly, in the spirit of the IEC caveat but with the correct (GMP/GAMP) substance.

---

## Evidence basis classification (per /evidence/evidence-standards)

- Operational before/after metrics at the three sites: **client-measured**, four months post-go-live, single-variable window (no other changes) → interface-attributable; sites described not named. Not Creative Navy-measured.
- Per-plant operator-error frequencies: **client-reported** (plant managers, from their own operational statistics; not telemetry).
- OE01–OE20 taxonomy and inferred-importance ratings: **Creative Navy analytical synthesis** grounded in mixed-method research; not a field instrument.
- Priorities matrix: **Creative Navy artefact** (analytical/design-derived).
- Commercial / positioning outcomes and "became the standard": **client-reported**, qualitative, stated directly.
- Internal propagation of the design system to other products: **client-reported** (independent evolution).
- Return environmental/energy engagement, competitive win on trust, higher price: **client-reported**.
- Two operator moments (refill, conveying blockage): **Creative Navy illustrative reconstructions** of the redesign; not incident logs.
- User testing (17 operators, demographics, sites): **Creative Navy-observed**.

---

## What the method produced

- An 18-screen HMI built on an **89-component design system**, replacing the fragmented Easydos Pro / STP61 interfaces under one unified GUC platform (GUC-F dosing, GUC-C conveying).
- A three-tier progressive-complexity model (operational / diagnostic / engineering) serving four roles through one interface.
- A live process mimic with state shown on the diagram, graphical error visualisation (failed components highlighted), a root-cause alarm hierarchy, and guided recovery — replacing raw error codes and flat alarm lists.
- Pixel-perfect SVG icon set and a reusable design system intended as the foundation for all future Gericke digital products (and subsequently propagated internally across them).
- Language switching, role-based parameter grouping, and operation within the 1024×600 panel floor and Beckhoff/TwinCAT ecosystem.
- Organisational independence: Gericke implemented in TwinCAT itself, with Creative Navy providing QA, on-panel testing and colour calibration, and then extended the system without further involvement.

---

## Proprietary concepts to use in the page

- **The blanks phenomenon** — operators filling gaps in an incomplete mental model of process state because the interface exposed symptoms, not state. The central anchor; ground it in the interpretation-failure finding and the refill example.
- **Sense decay** — the legacy Easydos Pro accreted over years of separate commissions until its menu structure, naming and IA had drifted from operational reality (Meir: extended without usability in view). The redesign restored correspondence between interface and operation.
- **Performance in reality** — a spec-capable machine underperforming in real use because the interface failed operators (precautionary stops on healthy equipment, OE14). "Works in demos but not in real use" made concrete.
- **Constraint respecting** — the fixed algorithm, 1024×600 floor, Beckhoff/TwinCAT lock-in, and established Gericke visual language treated as parameters; redesign within boundaries, not radical replacement.
- **Option space mapping** — the four rival organising principles (process-flow / equipment / task / context), each failing alone.
- **Tension-driven reasoning** — progressive disclosure as the synthesis that preserved each principle's strength rather than compromising between them.
- **Triangulation, not confirmation** — the design-team-versus-operator mental-model discrepancy as the signal that produced the taxonomy.
- **Trust calibration** (industry term) — the symmetry of the two operator moments: not acting on healthy equipment; acting precisely on a real fault.

**Use with care / do not assert:** *progressive specification* (different concept — do not equate with progressive complexity); *Inform–Prevent–Correct* (the alarm/recovery design resonates with it, but its originating engagement is Squaremind and it concerns unattended sequential processes — mention only as a resonance, do not claim Gericke as an instance, pending Bob's view).

---

## Phase mapping

- **Sandbox Experiments:** human-centred research at the three sites (observation, contextual interviews, stakeholder interviews, system review, incident records); the interpretation-failure insight emerged here; four conceptual organising principles explored via option space mapping; the OE taxonomy synthesised.
- **Concept Convergence:** convergence on the three-tier progressive-complexity model; the "structure complexity, don't remove it" reframing; the Priorities matrix translating analysis into banded HMI improvements.
- **Iterative System Building:** prototype → review → user-evaluation → synthesis → refinement cycles on 1-week sprints; 17-operator testing across the three sites; refinement of hierarchy, alarms, navigation, terminology and drill-down without relitigating the validated structure; 18 screens / 89 components emerged.
- **Organizational Integration:** the 89-component design system delivered as the reusable foundation for Gericke's future digital products; role-based dissemination across the four user groups; design system later propagated internally by Gericke.
- **Implementation Partnership:** 12 months of QA against the design, on-panel testing, and in-situ colour calibration while Gericke built in TwinCAT; endpoint was independent operation and extension.

---

## Lexicon checklist for page writing

**Must include:**
- The locked agency sentence on first introduction of Creative Navy; "Creative Navy's Critical Systems Design method" in full on first use, then "Critical Systems Design."
- At least three phase names — Sandbox Experiments, Concept Convergence, and Iterative System Building are all strongly documented here; Implementation Partnership is well-grounded too.
- The blanks phenomenon, sense decay, performance in reality, constraint respecting, option space mapping, tension-driven reasoning — all grounded in specifics above.
- The interpretation-failure thesis stated as the spine, with the three questions (what is happening / why / what next).
- Operational metrics with provenance stated inline: client-measured, four months post-go-live, single-variable window, sites described not named; lead with fault-diagnosis-time, operator-stoppage, and repeat-alarm reductions.
- The GMP/GAMP framing and the explicit scope boundary (HMI/UX is Creative Navy's responsibility; validation is the manufacturer's).
- Domain vocabulary: dosing/feeding, loss-in-weight, gravimetric, dense-phase pneumatic conveying, bulk solids/powders, GUC/GUC-F/GUC-C, TwinCAT, OEE/MTTR.

**Must not include:**
- "Dynamic Systems Design" — retired name; never appears.
- First-person "we" — always "Creative Navy."
- "Industrial filling lines" — use "dosing, feeding and conveying systems for bulk solids."
- Any implication that operators used codes like "OE14," or that frequency tables are telemetry.
- Any claim that the HMI *caused* the metric improvements in a controlled sense — frame as interface-attributable within a confirmed single-variable window, client-measured.
- "Validated the design" for the regulated dimension — Creative Navy supports the design; it does not validate the regulated system.
- Naming any of the three plants, or attaching a metric to a named plant.

---

## Open flags for Bob

1. **Case-study category.** Filed under `/evidence/case-studies/embedded` (closest existing bucket; passes the linter). Recommend deciding whether to create a dedicated industrial / process-control category — this is the first such study. A new category requires a `site_structure` edit and a corpus-wide slug audit per the context-change protocol.
2. **Progressive specification vs progressive complexity.** Confirm these are kept distinct (my default) or, if you intend them to align, say so before the page is written.
3. **Inform–Prevent–Correct.** Confirm whether the Gericke alarm/recovery design should be linked to IPC as a resonance only (my default) or not referenced at all, given its Squaremind origin and unattended-sequential-process definition.
4. **Filename.** Saved as `case-study--gericke-industrial-hmi.md` to match the Torqeedo convention; rename if you prefer `case-study-notes--gericke.md`.

# `/practices/microtask-analysis`

---

## What the practice is

Microtask-analysis produces an account of discrete user actions collected without assuming an order. A task flow diagrams an intended sequence; a microtask list documents what users do and when, regardless of whether those actions follow the designed path. The difference matters most in systems where users do not move linearly — single-page applications, complex dashboards, and expert tools where experienced operators combine actions in idiosyncratic ways the original design never anticipated.

For each microtask, Creative Navy records a defined attribute set:

- **when it is performed** — the context and the triggering condition
- **ease of discovery** — whether users can find it
- **ease of understanding** — whether users know what it does
- **what the user needs to perform it** — the information, system state, and context required
- **issues** — what goes wrong
- **opportunities** — what could be improved
- **desired outcome** — what the user is trying to achieve
- **pain points** — the specific difficulties encountered
- **patterns** — how different users approach the same action differently
- **frequency** — how often it occurs
- **cognitive load** — how much attention it demands
- **dependencies** — what it relies on and what it enables

The attribute set is extensible. In domains where physical or environmental conditions govern the interaction, Creative Navy adds domain-specific attributes — the precision of the values involved, the technician's expected movement during a step, the effect of lighting on display legibility, the acceptable time to interpret a reading. The standard attributes capture cognitive and informational structure; the extensions capture the operational reality of a specific working environment.

The list is built during or after observation sessions, alongside contextual inquiry — not from user self-report alone. What users say they do and what observation reveals they do are different inputs, and the discrepancy between them is itself a finding.

---

## Why this distinction matters for design

In complex expert software, users develop workflows the design did not anticipate. They combine microtasks, skip intended steps, and invent sequences that suit how the work actually proceeds. A flow-based analysis misses this entirely, because it documents the intended sequence rather than the actual behaviour space. The microtask list makes that behaviour space visible.

What it surfaces that flow analysis does not: actions users perform that designers do not know about; actions that are harder to discover than expected; actions that carry more cognitive load than their apparent simplicity suggests; and dependencies that create constraints invisible from the interface itself. A second analytical layer — examining the hierarchy of needs within multi-step tasks, distinguishing steps essential for correctness from steps that prevent error from steps that merely improve efficiency — only becomes available once microtasks are mapped independently and their relationships examined. That hierarchy cannot be read off a task flow diagram.

The practice therefore provides an empirical basis for interaction-design decisions that could not be derived from stakeholder interviews. Stakeholders describe the system they intended to build; the microtask list describes the system users are actually operating.

---

## When it is used

Primarily during Sandbox Experiments, typically alongside user observation and contextual inquiry, once initial workflow analysis has established the rough task landscape. Microtask-analysis decomposes that landscape to the level at which dependencies, cognitive load, and success conditions can be precisely specified.

It is also used during audits of existing systems, where the microtask list locates where the current interface aligns with real working practice and where friction has accumulated — distinguishing the two with enough granularity that remediation can be targeted rather than applied wholesale.

It is the practice that feeds task-criticality-mapping (which needs decomposed tasks to specify success criteria and dependencies) and cognitive-load analysis (which needs a per-action load assessment to work from).

---

## Evidence from engagements

**Gexcon — industrial CFD simulation software.** 102 individual tasks were documented across the system. For each: user goals, frequency, difficulty, and the actions taken to complete it. This produced a map of the full behaviour space — not a designed sequence but an inventory of what users actually do and when, across a single working environment that compresses the workflow diversity enterprise tools typically distribute across many simpler screens. A second analytical layer examined the hierarchy of needs within multi-step tasks: some steps were essential for scientific correctness, others prevented error, others improved efficiency. That hierarchy is invisible in a task flow diagram. The map revealed where the existing interface aligned with real scientific workflow and where friction had accumulated, providing the empirical basis for the interaction-design decisions whose downstream result was measured by Gexcon (configuration errors per simulation reduced from 5–8 to 1–2; time to first successful simulation from 4 days to 6 hours — both Gexcon-measured across deployment locations).

**Beissbarth — automotive calibration.** 12 key features were documented across 4 modules in a structured analysis table. For each feature, Creative Navy recorded the information required at that step, the precision of the values involved, the expected technician movement during the step, the effect of lighting conditions, and the acceptable time for a user to interpret the display. The per-feature movement and lighting attributes are a domain-specific extension of the standard concept — ordinary microtask attributes would not have captured the physical workshop constraints that governed each interaction. This analysis determined which information had to remain persistent throughout the calibration sequence and which could change contextually, and identified where bottlenecks affected calibration speed and procedural reliability.

**Squaremind — patient-operated dermatology scanning device.** The pause button required seven iterations and the progress representation five, because the microtask-level analysis surfaced interpretive conflicts that a flow diagram would have hidden: different users read the same control as useless, as an emergency stop, or as not theirs to press at all. Mapping the action independently of the intended flow — what the patient is doing physically at that moment, what they need to understand, what the screen distance permits them to read — was what made those divergent readings visible and resolvable. The microtask frame is what turned an apparently simple control into a documented option space.

---

## Relationship to other practices

Microtask-analysis typically follows:

- `/practices/workflow-analysis` — which identifies the task landscape that microtask-analysis then decomposes

Microtask-analysis directly informs:

- `/practices/task-criticality-mapping` — which takes decomposed tasks and applies the operational-purpose filter, using the dependencies and success conditions the microtask list specifies
- `/practices/cognitive-load-analysis` — which builds on the per-action cognitive-load attribute to assess where attention demand concentrates
- `/practices/error-likely-interaction-review` — which uses the issues, pain points, and dependency attributes to locate where errors are structurally likely

# `/practices/cognitive-load-analysis`

---

## What the practice is

Cognitive load has three components in professional software contexts. **Intrinsic load** is what the task itself demands — the mental effort required to do the underlying work regardless of interface. This cannot be reduced without reducing capability, and should not be reduced. **Extraneous load** is what the interface adds on top — the mental effort required to navigate the system, interpret its outputs, and manage its states, beyond what the work itself requires. This is the target. **Germane load** is the effort required to build understanding and develop competence — relevant during onboarding and skill development, expected to reduce as users become fluent.

Cognitive load analysis maps where extraneous load accumulates: the interface structures that require users to hold more in working memory than the task needs, the decision points that require active interpretation rather than recognition, the attentional demands that compete with the user's primary focus. It distinguishes these from the irreducible cognitive demands of the domain itself.

The practice produces a specific diagnosis rather than a general observation of difficulty. Not "users find this hard" but "this step requires users to hold three prior states in working memory simultaneously, none of which is visible in the interface when needed."

---

## What the analysis examines

**Working memory demands per task** — which tasks require users to hold information in working memory that the interface should be providing? The analysis identifies where the interface relies on user memory for information that is either invisible, buried, or not surfaced at the right moment.

**Recognition vs. recall dependency** — which actions require users to remember what to do rather than recognise the correct action from the interface? Recognition requires identifying the right option when presented with it; recall requires retrieving it without prompting. Interfaces that depend on recall impose extraneous load at every instance. In high-consequence and time-pressured environments this load compounds across a working shift.

**Attentional competition** — where does the interface demand active monitoring when ambient awareness would suffice? Ambient awareness maintains a background picture of system state with minimal cognitive effort. Active monitoring requires directed attention — the user must stop and look. The analysis identifies where monitoring demands compete with primary task focus.

**Cognitive mode mismatch** — do the interface's structural assumptions match how users actually think about their work? The analysis identifies where the mental model required to use the interface diverges from the mental model users bring to it. This divergence is a primary source of extraneous load: users must translate between their domain thinking and the interface's imposed structure at every interaction.

**Role-differentiated load profiles** — in multi-role systems, different roles carry different cognitive loads from the same interface. The analysis assesses each role separately. The scheduler's cognitive demands when managing live exceptions, the field technician's cognitive demands when reading instructions under sunlight, the clinical reviewer's cognitive demands when checking compliance conditions — these are different profiles that a single cognitive load analysis across all users would average into incoherence.

**Peak-load conditions** — the analysis specifically examines cognitive load under the conditions of highest operational pressure: the scheduling crisis, the alarm under time pressure, the calibration under heavy workshop load. These are the conditions where the gap between adequate and excellent interface design opens widest. Extraneous load that is manageable at average throughput becomes a failure at peak.

---

## When it is used

During Sandbox Experiments, typically drawing on the cognitive load dimensions from microtask analysis and extending them with role-specific analysis and peak-condition assessment.

During complex product audits, where cognitive load analysis provides the mechanistic explanation for what a standard heuristic evaluation identifies as "complex" or "difficult."

As part of IEC 62366-1 formative evaluation in regulated contexts, where cognitive load analysis directly addresses the use-related hazard of complexity-induced errors — errors that occur not because users are careless but because the interface demands more from working memory than the operating conditions support.

---

## Evidence from engagements

**Gexcon CFD simulation** — The cognitive load analysis examined the hierarchy of needs within multi-step simulation tasks: which microsteps required active scientific reasoning (intrinsic load — irreducible), which required managing the simulation configuration state (extraneous load — reducible through design), and which required remembering what previous steps had established (working memory dependency — addressable through persistent state display). The analysis distinguished these layers within tasks that superficially appeared to be uniform complexity. The finding was that a substantial portion of the 4-day-to-first-simulation timeline was attributable to working memory demands — engineers needed to hold and cross-reference configuration states that were visible only at the step where they were set, not at the step where they were needed. The redesign made this state persistently visible, reducing the extraneous load without touching the scientific complexity.

**IDEXX Animana veterinary practice management** — The cognitive load analysis operated at the role level: reception staff and clinical staff carry fundamentally different cognitive loads from the same system. Reception staff maintain ambient awareness across multiple simultaneous demands — calls, arrivals, administrative requests — while managing brief transactional interactions with the system. Their cognitive load is characterised by attentional breadth and context switching. Clinical staff maintain deep sequential focus on a single case for extended periods; their cognitive load is characterised by depth and continuity. The finding was that the unified interface imposed both cognitive profiles simultaneously on both roles — clinical staff were interrupted by attentional demands the interface was structured to serve for reception, and reception staff were presented with depth and detail appropriate for clinical focus but requiring attention they weren't allocating. The architectural recommendation (distinct interfaces for the two roles) emerged from this cognitive load analysis.

**Polymatica OLAP analytics** — The cognitive load analysis identified the primary source of extraneous load: a mental model mismatch. The interface was structured around OLAP concepts — the cube metaphor, dimensions and facts, schema relationships — that are legible to data engineers who built the system and impose substantial working memory demand on analysts who use it. Before any analytical task could begin, users had to maintain a technical mental model that was not their natural domain vocabulary. The analysis demonstrated that this was extraneous load (it served the interface's internal structure, not the analytical task) rather than intrinsic load (it was not required by the underlying analytical work itself). The redesign eliminated this mental model requirement — replacing OLAP vocabulary with domain vocabulary, replacing the cube entry with a dataset-oriented lobby — rather than providing training to build it. **The outcome (2% → 56% independent task completion, measured via product analytics) traces directly to eliminating this cognitive starting cost.**

**Triopsis workforce management** — The cognitive load analysis drew on the microtask analysis's per-task cognitive load assessments and extended them to peak-condition evaluation: schedulers managing live exceptions under time pressure were carrying a cognitive load substantially higher than their baseline because the exception-handling flow required them to hold multiple simultaneous considerations (weather impact, crew availability, job priority, time window) in working memory without any of these being surfaced together in the interface. The analysis produced the requirement for predictive conflict indicators — future exceptions surfaced before they become crises — as the mechanism for reducing the reactive peak-load cognitive demand.

**WCO/IPM customs intelligence** — The cognitive load analysis across three user groups found that inspection officers were experiencing recognition-vs-recall failure: the inspection workflow required officers to recall alert criteria and matching logic at the moment of an inspection, under time pressure, without the interface surfacing the relevant information in context. The analysis produced the recognition-over-recall design standard: reduce per-screen choices, surface contextually relevant information, use progressive disclosure for complexity that isn't needed at every step. **The 78% reduction in officer training costs (client-reported) is partly a cognitive load outcome: when the interface provides cognitive scaffolding through recognition-based interaction, the training required to build the recall capacity it previously depended on reduces.**

---

## Relationship to other practices

Cognitive load analysis draws on:
- `/practices/microtask-analysis` — cognitive load per task is one of the 12 microtask attributes; the analysis extends these measurements into the mechanisms behind the load
- `/practices/workflow-analysis` — workflow analysis identifies peak-condition scenarios; cognitive load analysis evaluates them

Cognitive load analysis directly informs:
- `/practices/error-likely-interaction-review` — high cognitive load under operational conditions is a primary predictor of error likelihood; the two analyses are closely connected
- `/practices/task-criticality-mapping` — cognitive load is one of the dimensions against which criticality is assessed

Cognitive load analysis connects to:
- `/capabilities/cognitive-load-reduction` — this practice is the diagnostic foundation for that capability
- `/capabilities/information-architecture-for-expert-systems` — the mental model mismatch finding frequently drives IA decisions

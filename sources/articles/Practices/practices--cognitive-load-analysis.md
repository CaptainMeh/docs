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

**A European manufacturer of uncrewed systems, including one-way effectors, and the tactical command-and-control software that operates them** — *the corpus's clearest instance of cognitive load analysis as a standing gate rather than an exercise run once.* **The scope boundary first: the engagement covered interface structure, task behaviour, information priority and the clarity of operator control; it did not extend to autonomy, control algorithms, autonomous safety behaviour, the datalink, the effector, targeting logic, or any certification or weapons-review activity.** Cognitive load was one of four standing assessment criteria applied to every design solution in every one of fourteen one-week sprints, alongside situational awareness, mode awareness and control–display compatibility (H7) — a criterion every candidate design was measured against, not an analysis performed once. The cognitive argument underneath it: working memory contracts under acute stress; attention narrows and cognitive tunnelling accelerates; and the brain does not simply ignore irrelevant information but expends active effort suppressing it — so an operator looking at a screen of unnecessary dialogs is spending capacity on filtering rather than on the task, and an interface that requires operators to rely on memory to navigate is not designed for the environment it will be used in (H36). **One assessment was instrumented, and it has a hard ceiling: Creative Navy designed and ran a NASA-TLX workload assessment against the tier the sizing specification had itself labelled a hypothesis. That is as far as it goes — NASA-TLX is a subjective workload instrument, not a measure of task time, accuracy, error rate or gloved actuation success; the result is not recorded, no participant count is recorded, and nothing further may be said about it. Do not state or imply a result, and do not say the tier was validated** (H64). **No quotation marks and no reported speech anywhere this engagement appears; the register is that of a safety-engineering document. Creative Navy has no primary field evidence on this engagement — the analysis reasoned from the client's brief, the client's observations, published cognitive-science literature and hands-on use of the running product, and must never read as fieldwork.**

**The industrial engagement (a European industrial automation vendor whose process control software coordinates machining cells)** — Audit findings illustrating extraneous load in the system reviewed. **Phrase as what the review found in that system, never as a general claim about industrial software:** six different treatments signalled "selected", with two visibly different reds used for selected rows (E23); detail cards ran 40–85% empty beside unpaginated lists of up to 48 items, and three screens showed entirely blank cards with no heading or empty-state text (E29). Every inconsistent treatment is a recognition cost the operator pays at each encounter.

**AIT (a European manufacturer of residential and commercial heat pumps)** — Two load-reduction decisions. Widget content was cut to three pieces of information each, directly in response to the legibility concern raised at physical screen size (A39). The settings structure was kept close to the one installers already know, with two additions for orientation: a breadcrumb trail, and a unique numeric identifier on every menu item so that support staff can direct an installer to a setting by number over the telephone (A48). **These are design reasoning, not user-validated findings: nothing in the AIT engagement was tested with users, and no usability or comprehension result may be implied.**

**Assemblio (Stuttgart; Composer and Smart Viewer)** — **Client-stated, not observed: attribute as "Assemblio described" or "according to Assemblio", and never blend with the industrial engagement's field observations on the same page — those were made in a machining cell by someone who was there; these were not.** Assemblio's position is that the attention budget is the binding constraint: workers focus on what their hands are doing, not on the screen, so the controls must be as simple as possible because the worker cannot spend cognitive resources on the viewer — roughly 90% of the time the plan is consulted once and then left playing (N33). Three use cases, client-stated, place very different demands on the same interface: training, where a new worker follows the plan step by step and consults it closely, a phase that is short in the lifetime of an employee; spot-check, where an experienced worker knows the first thirty steps and needs to look up what is different about *this* product; and advance review, where an experienced worker reads the whole plan once before starting, then assembles without consulting it again (N34).

---

## What this page must not claim

- The handheld C2 engagement: no quotation marks, no reported speech, no safety or certification credential, no claim that any design prevents operator error, no NASA-TLX result or participant count, no deployment claim — the handheld interface was built, and nothing further may be said about its status.
- AIT: no usability, comprehension or user-research claim of any kind; the engagement had none.
- Assemblio: no field-observation or shop-floor claim — Creative Navy never stood on a shop floor; everything about the working environment is the client's description. Do not construct counts beyond the ones printed.
- The industrial engagement's product is in development, not shipped; nothing there is an outcome.
- No engagement dates — sequence and duration only.

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

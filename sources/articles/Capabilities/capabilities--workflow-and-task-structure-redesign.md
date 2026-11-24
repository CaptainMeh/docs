# `/capabilities/workflow-and-task-structure-redesign`

---

## Domain vocabulary

- Workflow analysis / task analysis — the structured investigation of how work is actually done, not how it is supposed to be done
- Task structure / task sequence — the specific ordering and grouping of discrete actions within a workflow
- Microtask analysis (Creative Navy proprietary practice — link to `/glossary/our-concepts/microtask-analysis`) — documenting discrete user actions independently of assumed sequence or flow; reveals actual cognitive load structure
- Multi-role workflow / cross-role coordination — workflows that pass between different user types, each with different information needs and operational contexts
- Handoff point — the moment where work or context transfers between roles or sessions; where failures concentrate
- Non-linear workflow — workflows that branch, interrupt, and resume based on real conditions rather than following a designed sequence
- Abnormal workflow states as routine design targets — conditions that deviate from the ideal case (weather incidents, conflicting jobs, sensor faults, partial completions) are normal operational conditions, not edge cases
- Workflow compression — reducing the number of steps, interactions, or screens required to complete a task without reducing capability
- The diagnostic narrative — MSolutions' framing of the calibration process as a sequential story with a beginning, middle, and end that the interface should follow
- The hierarchy of needs — Dancerace's finding that users must answer three questions before they can act (what do I owe? what is my cost? what must I do now?) and the workflow must serve that order
- Workflow as evidence — existing workflows encode what the interface has been asked to do; analysing them reveals both failure modes and capabilities worth preserving

---

## Evidence to draw on

### Triopsis workforce management (multi-role workflow, strongest measured outcomes)
- Three roles with incompatible mental models requiring coordination in one system: schedulers (speed, batch actions, team availability), operations managers (exception scanning, broader time horizon), field technicians (task detail, safety compliance, outdoor conditions)
- **47 microtasks mapped across 3 personas before any design decisions were made.** For each: when performed, ease of discovery, ease of understanding, what the user needs, issues, opportunities, desired outcome, pain points, patterns, frequency, cognitive load, dependencies.
- Research: **43 user interviews, 21 participants; 3 in-situ observation sessions** under real operational pressure — schedulers handling weather incidents, conflicting locations, overlapping jobs, sudden crew shortages. In-situ observation was what revealed behaviour under pressure that interview self-report could not surface.
- Key finding from the microtask analysis: improving one role's workflow created blind spots for another. This was a structural tension in the organisation made visible through task decomposition, not a design error to be corrected.
- Outcomes (all measured in product analytics from real users in the live system — not usability testing):
  - **62% faster job discovery**
  - **83% faster job sequence optimisation**
  - **58% faster weekly planning**
- Field technician compliance component: surfaced required steps at the right moment in the workflow, highlighted dependencies, showed safety requirements — without overloading technicians who are working outdoors under time pressure

### Beissbarth automotive calibration (sequential precision workflow, multi-device)
- Calibration workflows are sequential and timing-sensitive: technicians move around the vehicle with tools in hand, depending on unambiguous feedback from three distinct interfaces
- The workflow must support the calibration procedure as a coherent sequence — a procedure that does not pause for interface interpretation
- **Calibration time: 18 → 12 minutes per vehicle. Client-measured across 8 production deployment locations** (not usability testing conditions; actual production deployments)
- **Training eliminated — Beissbarth now deploys without onboarding training. Client-reported operational change.**
- Key design decision: the workflow is the interface. Rather than asking technicians to navigate to find functions, each screen in the workflow communicates exactly what the next action should be.

### MSolutions AV diagnostic instruments (workflow as diagnostic narrative)
- The central design insight: treat the device as a guide through a standard AV diagnostic narrative rather than a collection of tools. The workflow has a natural sequence — link integrity checks → EDID and HDCP verification → resolution and colour space validation per display → consolidated confirmation — and the interface should follow that sequence, not the backend module structure.
- Previous design had organised screens by backend modules. Two prior redesigns had addressed the visual layer without addressing this structural mismatch. The audit named the problem; the workflow redesign fixed it.
- **Key diagnostic workflow: 26 interactions → approximately 13. Client-reported from internal task walkthroughs — not independently measured. State basis.**
- **Training: repeated coaching sessions → short guided introduction. Client-observed.**
- **Large integrator customers formally reported smoother rollouts.** Formal feedback, not anecdotal.

### Gexcon CFD simulation (complex expert workflow, most measured outcomes)
- **102 individual tasks documented** across the full simulation workflow — goals, frequency, difficulty, actions, hierarchy of needs within sequences
- The simulation workflow is not linear: engineers move between scenario setup, parameter configuration, visualisation, and validation in sequences that depend on what they find at each stage
- The redesign created explicit requirements for each significant interaction: purpose, constraints, dependencies, expected behaviour — what values must remain visible during scenario setup, where warnings were needed, how the system should respond to incomplete input
- **Time to first successful simulation: 4 days → 6 hours. Measured by Gexcon in real deployments.**
- **Configuration errors: 5–8 → 1–2 per simulation. Measured.**
- **Corrective load per error: 4–6 hours → approximately 20 minutes. Measured.**

### WCO/IPM (inspection and enforcement workflows across 107 governments)
- Three user groups, three distinct workflow types: officers (time-pressured inspection against alerts), analysts (pattern analysis and case building), rights holders (filing and monitoring)
- The workflow analysis produced: information architecture rebuilt around real inspection and case management flows rather than internal system structures
- Cognitive design principles applied to workflow: recognition over recall, reduced choices per screen, progressive disclosure, contextual micro-hints on first use of complex actions
- Workaround elimination: the parallel spreadsheets and email chains that had emerged around the platform disappeared when the platform workflows were redesigned to support what people were actually doing
- **78% reduction in officer training costs, based on reduced training hours. Client-reported.**

### Dancerace / Jacko (hierarchy of needs driving workflow architecture)
- Three-party invoice management portal; workflow connects financier, supplier, and debtor
- Research discovery: users approach the system with a strict internal priority order — what do I owe? what is my cost? what tasks must I do right now? Until these three questions are answered, users cannot act on anything else.
- This hierarchy of needs determined the entire workflow architecture: the returning user dashboard was redesigned to answer these questions in order before surfacing any other content
- The chasing routines concept resolved the most contested stakeholder tension: rather than asking users to configure complex automation rules from scratch, pre-built routine templates gave users a functioning workflow immediately — turning feature depth from a barrier into a path
- **Demo-to-paying conversion: 36% vs. 15–20% industry benchmark. Client-reported, measured over 6 months post-launch.** The conversion improvement is the commercial consequence of a workflow that delivered value within the trial period without requiring upfront configuration.

### Chemical Watch (information consumption as workflow)
- Discovery from user research: compliance professionals consume regulatory news chronologically, as a professional practice of staying current. This is not a preference — it is how the work is done. Breaking chronological order created anxiety about whether obligations had been covered.
- The lens-view was redesigned as a workspace, not a filter — a persistent, named, configured view that users return to as part of their regular workflow. The workflow insight drove the structural decision: the lens needed prominent placement and distinct design identity because it was part of the user's recurring work pattern.
- **Subscription price tripled following the platform launch. Client-reported as direct outcome.**

### The industrial engagement (deep operational structures made workable)
- The client is **a European industrial automation vendor whose process control software coordinates machining cells**.
- A collapsible workflow tree for workflows running to roughly a hundred operations, and grouped property sections for parts carrying up to roughly fifty properties (E49).
- An NC program version table recording name, type, version and creation — answering a documented engineer complaint about not knowing which program version was current (E50).
- An operator instructions layer distinguishing notification from instruction, with different responses — informational items *acknowledged*, actionable items *completed* — grouped by day, with inline entity links, filterable by type, machine, timeline and location; a batching panel groups related interventions in one storage unit into a single instruction so the operator makes one trip (E42).
- Task structure shaped by the physical objects it serves: structured trolleys force explicit slot selection across numbered levels, while unstructured ones present a flat list (E46); where several workpieces share a pallet, selecting a loading station shows the workpiece list first, then drills to one (E47).

### Assemblio (designing for the middle use case — and a workflow inversion that is the client's)
- Assemblio GmbH and both products — the Assemblio Composer and the Assemblio Smart Viewer — may be named.
- **N34 and what designing for the middle use case forces.** Three use cases, client-stated: a trainee following every step; an experienced worker looking up the one thing that is different about *this* product — which part, which variant, what is special; and an experienced worker reading the whole plan once before starting and never returning. **Almost every product in the category optimises for the first; the hard one is the second**, and it needs random access to a named step, parts scoped to that step, and the ability to leave as fast as you arrived.
- What that produced: the flattened parts list with quantities, refined into two tabs — the parts needed for the current step, and the full hierarchy (N55, Creative Navy's design); player controls with play, step forward and back, scrub, reset, and loop-a-single-step for the training case (N60); keyboard shortcuts presented as a bottom overlay drawer rather than a modal, so they can be consulted without leaving the step (N62).
- **N18 is a workflow inversion that exists because forward planning fails late and expensively — and it is the client's invention, with published research provenance; Creative Navy did not design it and the page must credit it clearly**: rather than building a sequence forwards, the planner takes the finished 3D model apart, and the software plays that disassembly backwards as the assembly sequence, which the planner then reorders and refines. The client's stated reason: planning forwards risks discovering half way through that a part can no longer be fitted, which forces the whole sequence to be redone.

### Topera (project definition as a long working page with an explicit gate — concept design, nothing built)
- Topera may be named: the cross-organisational project management platform Creative Navy produced a **concept design** for, grounded in the DIN 69901 series. **Nothing has been built; every sentence must stay true of a system that does not exist — "was designed to", never "does".**
- The project tree was designed to carry four item types out of one polymorphic entity (T48 context: the Gantt's information columns were made configurable through an explicit configure control, so the same timeline can carry different supporting columns — status, owner, dates, progress, priority, responsible organisation — for different readers, rather than the interface choosing one fixed set).
- Project definition was designed as a single long working page rather than a wizard (T58): a left navigation listing the definition areas with per-area completion state, a central working column, and a right panel carrying settings, recommendations and contextual validation — the areas corresponding to the DIN 69901-2 Definition-phase processes.
- Completion was designed to be tracked and displayed, with areas individually markable as complete and an overall completion rate shown persistently — project definition treated as something worked on over time by several people, not a form filled in once (T59).
- The transition out of the DIN 69901-2 Definition phase was designed as an explicit gate (T60): a phase clearance checklist enumerating each area and its state, with incomplete and blocked items identified, and a submission action that is the formal request for review and clearance into the DIN 69901-2 Planning phase — **modelled on the standard's own approval processes rather than invented**.
- Dependent sections were designed to declare their blockers rather than failing silently (T61): a cost section that cannot be completed until the work breakdown exists says so, and names what it is waiting for.

### Egma Order (the wizard rejected — and sequencing as a third answer)
- **Egma Order**, Egma's B2B lens ordering platform.
- **G42 is the decision worth the page**: a multi-step wizard on separate screens was considered and rejected, because when every choice limits the next the user must be able to see and revise prior selections without leaving the screen — the form shows a summary of completed steps on the same screen, with jump-back-to-edit on any of them. **Creative Navy recorded the cost in its own words: it makes the order screen look more intricate**, but it supports the particular user needs the research established.
- **G63 sits beside it, because Egma's resequencing is a *third* answer to the same discoverability-versus-clutter tension — and the change is Egma's, with the reasoning the most interesting part.** Fitting & Edging moved out of optional inputs to sit late in the flow, immediately before shipping, for two stated reasons: a discoverability argument that runs directly counter to hiding unavailable options — *"we want the user to select the product before they select the shape. We need the user to acknowledge that the product is there, but it is just not compatible with their lens shape."* — and a functional one: the diameter cannot be filtered by the chosen shape early in the flow and then left editable later, because that defeats the filtering. **Sequencing is the third answer alongside hiding and explaining: put the thing the user should know exists *before* the choice that rules it out, and the question of whether to hide it never arises.**

---

## What this page must not claim

- Assemblio: the three use cases and the shop-floor conditions are client-stated, never observed (N13, N16); N18 is Assemblio's method and must be credited to the client; no time-saving, error-rate, training or adoption figure — including Assemblio's own published marketing claims.
- Topera: no outcome of any kind — nothing was built, no product, no deployment, no user (T20); never a bare "Definition phase" — always "the DIN 69901-2 Definition phase"; no standards conformance or compliance credential; no client decision, preference or rejection (T19).
- Egma: no post-launch measurement — the platform is live and nothing about it was measured; G63's resequencing is Egma's decision, not Creative Navy's; no competitor benchmarking (G71).
- The industrial engagement: designed responses describe what was designed and never imply they produced a result; the product is in development, not shipped.

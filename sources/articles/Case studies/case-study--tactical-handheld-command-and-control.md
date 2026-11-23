# Tactical handheld and command-centre C2 for uncrewed systems — full writing brief

> **Purpose.** Everything needed to write this case study and to update the existing content corpus from it. Written to be handed to a writer with no access to the source material or the conversations that produced it.
>
> **§A3 is a numbered evidence bank.** Every instruction in this document cites it by number, and the same **H-numbers** are to be used in the corpus integration document. Do not introduce facts about this engagement that are not in §A3.
>
> **Corpus integration.** Everything that changes on other pages because of this engagement belongs in a corpus integration document. **Part B of this file is a specification of what that document must be given**, not a substitute for it. The two share the evidence bank verbatim.
>
> **Companion documents:** `industrial-writing-brief.md` (industrial process control, prefix **E**), `streetec-writing-brief.md` (**S**), `ait-writing-brief.md` (**A**), `mdu-writing-brief.md` (**M**), `assemblio-writing-brief.md` (**N**), `topera-writing-brief.md` (**T**), `egma-writing-brief.md` (**G**), `oceaneering-dispatch-panel-writing-brief-FINAL.md` (**O**), `visioncheckout-writing-brief.md` (**V**), `kispe-writing-brief.md` (**K**), `schone-mission-control-writing-brief.md` (**D**), `raymarine-writing-brief.md` (**R**), `maritime-vts-writing-brief.md` (**W**). This engagement uses prefix **H**, for handheld. B is skipped by convention; C was rejected on the VTS engagement. Never let facts migrate between them: they are different clients, industries and evidence classes.
>
> **This is the corpus's third defence engagement and its first weapons engagement.** It files under `/evidence/case-studies/defence-and-space` with primary context `/contexts/defence-and-space-systems` — pages proposed by the KISPE change set and **still not present in the repository**. All three defence studies land in one change set; see §A6.
>
> **The three defence studies share a method and must not share a sentence.** All three ran one-week sprints with a six-person team, because that is the shape Creative Navy's Critical Systems Design method takes at this size. Shared structure is evidence of a method and should be stated once, plainly, as coverage. **What must not be shared is language.** This brief has been built so that following it cannot produce KISPE's or Schone's prose: a different thesis (§A2), a different angle set (§A5), a different external frame (§A8.1), a different narrative form (§A7), and a hard cadence rule (§A9). Those are not stylistic preferences; they are the reason three studies about one method read as three studies.
>
> **Read §A4 before writing a sentence.** This engagement's two strongest assets — a written refusal of a client request on safety grounds, and a gloved touch-sizing specification — are each one careless sentence away from a safety or compliance claim, in a domain where that sentence carries legal weight. §A4 is where the ceilings are. **And read §A1.5**, which is this brief's single most important constraint: the client designs weapons, and the case study must neither pretend otherwise nor dwell on it.

---

# PART A — THE CASE STUDY

## A1. Handling rules

### A1.1 What may be named

**Nothing may be named.** Not the client, not the product, not the vehicles, not the hardware, not a single individual on either side.

**The client descriptor is locked.** Use this, near-identically, on every mention:

> **a European manufacturer of uncrewed systems, including one-way effectors, and the tactical command-and-control software that operates them**

Do not rotate it, do not abbreviate it, and do not substitute "the client", "the manufacturer" or "the vendor" as the primary identifier in a passage that must stand alone when retrieved. In tight contexts the tail may be trimmed to "a European manufacturer of uncrewed systems, including one-way effectors" — **but the effector must survive every trim.** The whole argument of this case study is about committing an irreversible effect; remove the effector and §A5.1 has no referent.

| Do not use | Use instead |
|---|---|
| The client company name | the locked descriptor above |
| **The command-and-control product name, in any form** | "the command-and-control system", "the control software" |
| The on-board detection/vision product name | "the on-board detection service" |
| Both vehicle product names, and any variant designation | "the strike vehicle", "the observation vehicle", "an uncrewed aircraft" |
| **Both controller device trade names, and both vendors** | "a 7-inch ruggedised handheld controller", "a 10-inch ruggedised tablet" |
| The legacy laptop model | "a 14-inch ruggedised laptop running Linux" |
| "Loitering munition" | "one-way effector" — the sector's own term, and less immediately resolving |
| Named individuals on either side | role descriptors only — "the client's product owner", "a developer on the client's side", "Creative Navy's interaction designer" |
| Any end customer, armed force, agency, programme or theatre of operations | omit entirely — do not gesture at one |
| Any order, contract, tranche or funding figure | omit entirely |
| The specific re-certification-dependent workflows | "workflows whose implementation could not be changed without re-certification" |

**The product name is the leak, not the company name.** It appears in roughly forty of the fifty-one source filenames and it is a real, searchable product. Every instance must be replaced. Its design role survives the substitution without loss.

**The device specifications survive; the device names do not.** This is the one substitution that costs something, and the compensation is specific: **keep every number.** 7 inches, 1920 × 1200, 323 ppi, 12.72 px/mm, 151 × 94 mm, 2,500 nits, twelve bezel keys, two flip-guarded buttons on the top edge, two operator-presence buttons on the back, three analogue joysticks and a five-direction joystick, 1,243 g, MIL-STD-810H, IP65, −20 °C to +50 °C. The numbers are what make the sizing specification citable (H44, H53); the trade names add nothing the numbers do not, and in combination with the vehicle descriptor they would do identifying work the numbers alone do not.

### A1.2 What may not be shown

**No screenshots, wireframes, design images, plates or redrawn diagrams.** The corpus is text-only on documentation pages. The source material contains interface mockups at several fidelities, a physical button-mapping overlay, a 1:1 sizing sheet and an end-to-end flow diagram; **none may be published in any form, including as redrawn diagrams or ASCII approximations.** Describe the designs in prose.

This matters more here than in most studies for two reasons. The "before" imagery is a rendering of the client's own interface, and publishing it would publish the client's product rather than Creative Navy's work. And the button-mapping overlay is a labelled photograph of a real, identifiable controller — exactly what §A1.1 removes from the text.

### A1.3 Dates

**No dates at all, from any source.** No years, no months, no seasons, no calendar dates. Sequence and duration only — "fourteen one-week sprints", "a seven-sprint handheld block", "a four-sprint follow-on".

The source material is dense with them: every meeting note carries one, the expert review carries one in its title, and both sprint plans are stamped. All are discarded. **Durations are not dates** and are load-bearing here: "one-week sprints", "seven sprints", "fourteen sprints", "four sprints", "300–600 milliseconds", "one second" (H40, H49) all survive.

One scenario-level exception worth stating because the source invites it: the status-bar warning thresholds are expressed in metres per second, not in time (H83). Those are measurements, not dates, and they stay.

### A1.4 Status

**The handheld interface was built, and so was the swarm capability** (H96). That may be stated plainly, in those terms, and it is a stronger status than KISPE's.

**Nothing further may be said about its status, and the brief does not explain why.** Do not write that it is deployed, in service, in test, in trials, or in use with any customer. Do not write that the client declined to say more, that further detail is confidential, or that the status is undisclosed — **those constructions are themselves disclosures**, because they tell a reader there is something to know. Write "was built", stop, and let the sentence end.

**There is no design-fidelity comparison** (H99). "Built" is not "shipped as designed", and that claim belongs to AIT and Schone, not here. See §A4.

### A1.5 The subject matter — read this before writing anything

**The client makes weapons.** The product is the interface through which a human operator commits a one-way effector to a target and, for a short window, can abort it. The engagement lead has confirmed the corpus publishes this study.

Three rules govern the whole text, and they are more important than any other instruction in this brief.

**Write it straight.** No euphemism, no evasion, no softening into "effects" or "engagement outcomes" where the source says strike. A case study that cannot name its own subject matter reads as though it has something to hide, and the design work does not. Equally: **no relish.** No dramatic framing, no scene-setting about operators under fire, no sentence that would read as enthusiasm for the use of the system. The register is the register of a safety-engineering document, because that is what the strongest deliverables in this engagement are.

**The work is error prevention, and that is a true description, not a defence.** Every design decision in §A3.9 and §A3.6 pushes in the same direction: make the operator's commitment deliberate, make the system's actual state legible, refuse to assert what cannot be evidenced, and keep abort available and unambiguous. That is what the engagement did. State it as what it is and do not argue for it.

**The scope boundary is absolute and must appear early** (H106). The engagement covered interface structure, task behaviour, information priority and the clarity of operator control. It did not extend to autonomy, control algorithms, autonomous safety behaviour, the datalink, the effector, targeting logic, or any certification or weapons-review activity. **Creative Navy designed the surface through which a human supervises the system; it did not design the system.** Any sentence that could be read as a claim about what the weapon does, or how well it does it, is out.

### A1.6 Two exclusions, absolute

Neither of these appears in the case study in any form, including by implication or by a sentence a reader could reconstruct them from.

1. **Any configuration in which the system engages without human confirmation.** The source material records one. It is a statement about the client's system, not about Creative Navy's design, and it is the client's to disclose.
2. **The specific workflows the client identified as re-certification-dependent.** The *existence* of the constraint is usable and load-bearing (H8, H107); the named workflows are a map of where the product is brittle.

**There is no third exclusion but there is a third discipline.** The source material contains the client's engineers' judgements about where the autonomy and bandwidth ceilings sit (H91). These may be used — they are the reason the swarm work has a defensible scope — but only as unattributed engineering constraints the design had to work within, never as claims about the product's capability and never traced to a speaker (H119).

### A1.7 Quotes

**There are no quotes** (H119). No client or operator speech is on record and nothing has been cleared. **Write no quotation marks anywhere in this case study, and no reported speech either.** Where a position is described, attribute it to the role and the artefact it came from — "the client's brief asked the agency to challenge existing design patterns", "the client's engineers established that vehicle state could not be reliably determined" — never to a speaker and never as something said.

Two phrases in the source material will be tempting because they are the best sentences in it. Both are paraphrasable and neither may be quoted: the client's own characterisation of its interface as engineering-focused (H24), and the specification's line about repeated input (H37). Render both as statements, not as speech.

---

## A2. The engagement in brief

A European manufacturer of uncrewed systems, including one-way effectors, set out to rebuild the interfaces of the tactical command-and-control software through which its vehicles are planned, supervised and operated. The existing interface ran on a ruggedised laptop and the client's own brief described it as engineering-focused, prioritising raw data availability over usability or touch-friendliness. The intention was to split the experience into two specialised interfaces sharing a common design language: a handheld interface for the dismounted operator at the tactical edge, and a command-centre interface for large screens, tabletops and wall-mounted displays.

Creative Navy was commissioned first for a separately scoped expert review of the running product, and then — on the strength of it — for **fourteen one-week design sprints in two blocks of seven**: the handheld interface, then the command centre. A six-person team ran both, with stable composition. A further four-sprint engagement followed, extending the work to marine uncrewed vehicles and to data enrichment.

The handheld block produced an information architecture and navigation model, a mission-planning and strike flow, a camera-operation view, an interactive prototype, a swarm exploration and a UI concept with specification. Across the two blocks the team explored **40 design options across 11 named design challenges**, benchmarked **32 systems** with 21 analysed in depth, and produced three deliverables that carry the engagement: an operational doctrine establishing what a handheld may show at all, a gloved-first touch-sizing specification derived in millimetres and converted per device, and a written argument against the client's own request for the way the strike command should work. All three were co-authored with the client's design team. The handheld interface and the swarm capability were built.

**The requirement that shapes everything: this interface commits an irreversible act, through a touchscreen that cannot be relied on, over a datalink that is expected to be interfered with.** A strike command leaves the operator's hands, crosses a radio link into a contested electromagnetic environment, and may or may not arrive. The operator cannot see the vehicle. For a short window the act can be aborted, and after that it cannot. Everything the engagement did follows from the gap between what the operator has asked for and what the system can actually evidence.

### A2.1 The territory this study owns

**Write this study for what only it can prove.** Five things here exist nowhere else in the corpus.

1. **A design team arguing its client out of a control it had asked for — and the client's own designers co-authoring the argument** (H35–H43). Not a disagreement that was managed. A document, with reasoning, a standards basis and a counter-proposal, written jointly by both design teams against a request that came from elsewhere in the client's organisation. Nothing in the corpus is shaped like this.
2. **A diagnosis that a UI request was a symptom of an architectural defect** (H36, H37). Operators had been pressing the fire control repeatedly because commands did not reliably arrive. The honest answer was not a better button.
3. **A specification that states where it fails the governing standard, labels its weakest tier a hypothesis, and then measures it** (H51, H44, H57).
4. **A complete second interface that assumes the touchscreen does not work** (H78, H80) — and a client-run test that then found gloved touch unreliable on the actual panel (H93, H94).
5. **Degradation specified as the operating condition rather than the exception** (H17), in a requirement Creative Navy authored.

**And one thing it owns by form rather than by fact.** This engagement's evidence organises around a single physical control. §A7 turns that into the structural instruction, and it is the strongest guard against the study reading like the other two defence studies.

---

## A3. Evidence bank

### A3.1 Engagement record — stateable as fact

- **H1** — **Three commissions.** A separately scoped expert review; then fourteen one-week design sprints in two blocks of seven; then a separate four-sprint engagement. **This is the commercial arc and it may be stated plainly.**
- **H2** — **Six-person team**: UX designer, UI designer, project manager, product designer, researcher, interaction designer. **Composition was stable across both blocks.**
- **H3** — **The expert review was separately scoped and separately paid**, listed as deliverable 1 of 3 in the client's own request for proposal, with the stated deadline "as soon as possible". It closes by proposing the sprint programme that followed it.
- **H4** — **The handheld block, seven one-week sprints**: information architecture, main navigation and map; the strike-and-observation vehicle, map view, plan and intent; the camera-operation view; an interactive prototype of the chosen flow; swarm exploration; UI concept; UI concept and specification.
- **H5** — **The command-centre block, seven one-week sprints**: swarm exploration carried forward from the handheld block; information architecture and navigation for large screens, tabletops and wall-mounted displays; profile configuration; large-screen prototyping; refinement, absorbing overflow and the handheld gaps the first block had not reached; UI concept; UI concept and specification.
- **H6** — **The follow-on engagement, four sprints**, extending the work to **marine uncrewed vehicles and to data enrichment**.
- **H7** — **Four standing assessment criteria**, applied to every design solution across every sprint: cognitive load, situational awareness, mode awareness, and control–display compatibility.
- **H8** — **Six constraints stated openly in the delivery plan before work began**: the target hardware had not yet been settled; requirements were shifting and that was understood to be the nature of the client's situation; the client had a strong preference against a large development effort but would fund one if justified; the client was not certain the multi-vehicle problem was solvable by design at all; design conventions including conflicts between NATO and non-NATO standards had to be observed; and the scale of the system exceeded the size of the project.
- **H9** — **The recursive ambiguity method.** Creative Navy authored the requirement set first and submitted it for review and enrichment — not to settle the requirements but to establish where ambiguity sat. Each area of unknown then received one of three treatments: the client sought clarification; the designs catered for a range of speculative possibilities, so that design became the vehicle by which options were disseminated inside the client organisation; or the area was deprioritised. **The triage recurred through the project, and the fitness of the method itself was reviewed every two weeks alongside it.**
- **H10** — **The standing cadence.** Three meetings a week with the client's design team, with designs shown as they were produced and options argued rather than presented. A weekly developer progress meeting channelling feasibility and build-cost input. An end-of-sprint review every sprint carrying two fixed items — feature definition, and a scope-and-replan item at which Creative Navy flagged which opportunities to pursue and which to ignore, with the decision resting with the client. A two-week checkpoint carrying the method evaluation and the ambiguity triage. A broader developer group invited at the key mid-fidelity milestones.
- **H11** — **Option space: 26 design options across 6 design challenges on the handheld, and 14 options across 5 challenges on the command centre** — 40 options across 11 challenges for the programme.
- **H12** — **32 systems benchmarked, 21 of them analysed in depth**, across nine research dimensions: information architecture; map and spatial interaction; strike and engagement workflow; video feed; hardware and physical control integration; multi-vehicle command; cognitive load and stress-state design; night mode and environmental adaptation; and large-screen adaptation. The set spanned direct command-and-control and ground-control systems, autopilot and mission-planning software, and sensor and relay products.
- **H13** — **Real-time strategy games were used as a functional model** for fast decision-making, at the client's suggestion in its own brief: marquee selection, double-tap to select by type, context-sensitive commands, hotkey-driven operation, and the minimap-plus-main-view split as a pattern proven under high cognitive load.
- **H14** — **Three personas** — a dismounted tactical operator, a mounted operator, and a commander — **presented in the deliverable with their substance under a heading reading "Speculation"**, because they were constructed from the client's brief and domain reasoning rather than from research.
- **H15** — **The deliverables were co-authored.** Creative Navy's designers and the client's designers produced them together.
- **H16** — **A requirements table co-authored screen by screen**, with content, actions and priority, and with two facing columns: Creative Navy's comments and open questions, and the client's answers.
- **H17** — **A requirement Creative Navy authored, stated as a system requirement**: the system shall treat electromagnetic interference as an expected operating condition rather than an exceptional failure, because contested electromagnetic conditions are core to the intended environment.
- **H18** — **Creative Navy reviewed the running product** but did not have access to the client's design system, and said so in the review where that limited an assessment.
- **H19** — **A continuous developer feasibility loop**, so that the cost of each design direction could be estimated as it emerged rather than after it was chosen.
- **H20** — **An interactive prototype at the end of the fourth handheld sprint**, covering the start-to-observation-to-strike core flow, deliberately built without animation or secondary functionality, and **built so the client could assess readability and touch interaction with and without gloves**.

### A3.2 The client, the product and the users

- **H21** — The product is a tactical command-and-control system for uncrewed air, ground and sea vehicles, acting as the ground control station. Because the manufacturer's first products are one-way effectors, the system carries dedicated functionality for committing and aborting a strike.
- **H22** — Its functions are situational awareness on a battlefield map covering friendly and hostile units, zones and points of interest; per-vehicle status including power, armament state and location; multi-vehicle command; and strike execution through a video feed and the map, with the option to abort a commanded strike.
- **H23** — The existing interface was a custom single-page web application, pointer-first, rendering tactical symbology to the MIL-STD-2525 family through an open-source symbol library, running on a 14-inch ruggedised laptop under Linux at 1920 × 1080.
- **H24** — **The client's own brief described the existing interface as engineering-focused, prioritising raw data availability over usability or touch-friendliness**, with interaction primarily pointer-based and touch targets that may be too small for tactical use.
- **H25** — **The client's brief named three user populations**: tactical operators working dismounted in the field under stress on a ruggedised handheld; mounted operators working from inside a vehicle on an integrated station with touch and keyboard and mouse; and commanders overseeing operations from a command post on a laptop or large screens.
- **H26** — **The brief asked the agency to challenge existing design patterns** that might not withstand the stress of operational environments, to evaluate the interface for usability, accessibility and cognitive load, and to provide a keep, tweak or discard assessment of current features.
- **H27** — **The brief named the two target device classes** — a 7-inch ruggedised handheld controller with integrated physical controls, and large touch screens and tabletops — and required a concept that deeply integrated the hardware controls with the software, mapping physical buttons to high-frequency actions to reduce reliance on touch for critical operations.
- **H28** — **The persona work identified a cross-cutting condition the brief had not**: across all three populations the most critical coordination happens outside the system, over radio or verbally, so the interface must be glanceable and interruptible at every state rather than designed for heads-down focused use.
- **H29** — **The persona work also challenged the brief's own grouping**, observing that the mounted operator's workflow is closer to the commander's than to the dismounted operator's in parallel asset management and information density, and that the split deserved a second look.
- **H106** — **The scope boundary, stated and held throughout**: the engagement covered interface structure, task behaviour, information priority and the clarity of operator control. It did not authorise and did not produce changes to autonomy, control algorithms, autonomous safety behaviour, the datalink, the effector, targeting logic, or any certification or weapons-review activity.
- **H107** — **A constraint the client stated at the outset**: several vehicle control and strike-execution workflows were built on implementation dependencies that were expensive or impossible to modify, and that might require re-certification if changed.

### A3.3 The expert review — the "before"

- **H30** — **An eighteen-page expert review of the running product**, structured as two long-form argument sections, a four-part heuristic evaluation, a flow and information-architecture assessment, a visual-design assessment, an accessibility assessment, and a challenges-and-opportunities section.
- **H31** — **A two-axis scoring scheme** applied to every heuristic: current state on a three-point scale, and effort to fix on a three-point scale — so that findings arrived pre-sorted by what was worst and what was cheapest.
- **H32** — **Three named top usability concerns**: interface clutter; lack of workflow guidance; and the use of the primary colour alongside the plan colour scheme.
- **H33** — **The modularity argument.** The product was built around discrete functional units — plans, intents, missions, tasks, map geometry — each operable independently. The review's position was that this is sound and correct for complex professional software, that it is what makes the product adaptable across operators, roles and doctrinal frameworks, and that **modularity alone is not sufficient**: the goal is to layer guidance onto modularity rather than replace it, so that expert users can operate freely while the interface actively supports orientation, sequencing and state recall.
- **H34** — **The three questions the interface should always answer without being asked**: where am I, what have I done, and what comes next. In normal conditions those answers reduce friction; in frontline conditions they are the difference between a reliable tool and a liability.
- **H35** — **The flexibility argument.** The review found no limit on simultaneously active dialogs and no mechanism for the interface to adapt to mission context, so that an operator entering a focused camera-operation task might do so with a full planning workspace still active behind it. Its position was that **flexibility without constraints is not a feature but the absence of design**, and that the remedy is structure rather than removal: mission-context modes surfacing only the relevant dialogs by default with manual override, and saved layouts that can be recalled and shared.
- **H36** — **The cognitive argument underneath both.** Working memory contracts under acute stress; attention narrows and cognitive tunnelling accelerates; and **the brain does not simply ignore irrelevant information but expends active effort suppressing it** — so an operator looking at a screen of unnecessary dialogs is spending capacity on filtering rather than on the task. An interface that requires operators to rely on memory to navigate is not designed for the environment it will be used in.
- **H37** — **Client-reported operator behaviours, relayed to Creative Navy**: operators wrote coordinates on paper as an external memory aid; operators lost track of which dialog to open next; and colour coding and icon meanings required active recall rather than being readable from context. **These are the client's observations of the client's own users.**
- **H38** — **The lowest-scoring findings**, each at one star with the effort to fix stated: progress communication in multi-step flows, at the highest effort; the visual prominence of primary against secondary actions; visual hierarchy across the interface, at the highest effort; the end-to-end primary flow, at the highest effort, because it relied on the user's memory and the interface did not guide them to the next step; and search.
- **H39** — **What the review found working.** Interface language consistency, the grid and spacing system, type-scale consistency, navigation depth, component states, and motion were all assessed as sound with no issues found. Large-text and component contrast met requirements and focus indicators were visible.
- **H40** — **What the review could not assess**: keyboard reachability and operability, focus trapping in modals and drawers, and keyboard support in custom components — recorded as "cannot assess" rather than guessed at, with the note that several components would benefit from keyboard interaction as a priority.
- **H41** — **Two swarm problems identified as compounding.** Colour differentiation degrades as vehicle counts rise, turning the map into a memory task at exactly the point where memory fails, so redundant encoding by shape, label and spatial grouping is needed. And there was no focus mode: no way to narrow attention to one vehicle or task without losing the rest entirely.
- **H42** — **The handheld framing that set the next engagement's scope.** The review's position was that the handheld is not a scaled-down laptop but a different product solving a related problem, that the question is not how to fit the full experience onto a smaller screen but which subset is genuinely needed and how it should be redesigned for that environment, and that **the scope question must be answered first and should drive the feature set**.
- **H43** — **Named opportunities**: mode differentiation for distinct operational contexts — a focused or compact mode, a swarm mode, and distinct planning and execution modes; instrumentation to move from assumption-based to evidence-based iteration; and post-mission analysis, mission simulation and controlled feature experimentation.

### A3.4 The strike command — the engagement's centre

- **H44** — **What was requested.** The client asked that both the strike control and the abort control remain permanently visible on the touchscreen.
- **H45** — **The reason given, which is the finding.** A command issued through the interface may not reach the vehicle, and there was a need not to create a false impression that it had. **The established operator behaviour was therefore to press the control repeatedly until subjectively satisfied.** In that model the persistent control served two jobs at once: the initial command input, and the manual retry mechanism.
- **H46** — **The written response, in four parts.** First, a single touchscreen input is not an adequate commitment gate for an irreversible action, because touchscreens are vulnerable to accidental touches, rain and moisture, gloves, vibration and device movement, palm contact, selection of the wrong control under stress, and digitizer faults — and an accidental strike command probably cannot be aborted inside the available window, particularly if the operator does not notice the error immediately. Second, placing the strike and abort controls symmetrically at opposite screen edges may imply that strike is mapped to the adjacent physical key when no such mapping exists, creating a false affordance. Third, a visible and enabled control communicates that the action is always available, when availability actually depends on connectivity, operating mode and vehicle state — so a permanent control may create mode confusion and encourage repeated activation attempts, where a persistent *status indicator* communicates readiness without implying that touchscreen activation is always valid. Fourth, and the load-bearing one: **repeated input is not feedback.** It adds uncertainty rather than resolving it, because the operator cannot know whether they are retrying the same request, creating a duplicate, or acting on information that has already aged.
- **H47** — **The standards basis cited in the document**: NASA-STD-3001 Volume 2 requirement V2 10027, which requires that the system protect against inadvertent activation of controls and names guards, covers, physical separation and requiring two operator actions as examples of how, extending the protection to off-nominal controls including those used for failures and aborts; and FAA Advisory Circular 25.1302-1, for the principle that the effects of operator actions must be presented so that errors can be detected and corrected.
- **H48** — **The six questions the document requires the interface to answer unambiguously**: was the input registered; is the command being transmitted; did the vehicle acknowledge it; what state did the vehicle confirm; is the information current or stale; and is abort still available.
- **H49** — **The diagnosis.** Requiring the operator to press repeatedly indicates unreliable command delivery, acknowledgement or state reporting, and **that belongs in the command architecture rather than in human input.** The system should treat one deliberate operator action as one logical command, with a unique command identifier, controlled and time-bounded retries, duplicate protection, expiration rules, explicit vehicle acknowledgement, and a clear distinction between local input and confirmed vehicle state.
- **H50** — **The counter-recommendation.** Keep the strike request *status* visible at all times, but do not expose strike as a permanently active touchscreen control. Commit the strike by pressing and holding both flip-guarded physical buttons simultaneously for a defined duration. Allow the abort control to hold a fixed, predictable position, but make it active only once the system confirms that an action is in progress and remains abortable.
- **H51** — **Two limits the document placed on its own recommendation.** Blind or unlimited retransmission would itself be unsafe, so the retry policy must be defined by system safety rather than by design. And the exact hold duration and physical-control design must be validated through human-factors and system-safety testing — which the engagement did not perform.
- **H52** — **The outcome, in three parts.** Automatic repeated transmission of the command was assessed as feasible, taking the retry action off the operator. At least one voice on the client side arrived at the position that strike and abort should be actuated only from physical buttons, with the display indicating them but not activating them. The two-button flip-guarded commitment survived into the final physical mapping, at a one-second hold (H87). **The client held its original position on keeping both controls simultaneously visible**, for the reason it had given at the outset.
- **H53** — **The document was co-authored by Creative Navy's designers and the client's designers**, against a request originating elsewhere in the client's organisation.

### A3.5 The touch-sizing specification

- **H54** — **Four consequence tiers, specified in millimetres with pixel values derived per device.** T1, critical and unprotected — recovery actions, holds, mode changes, limited to three or four per view — at ≥22 mm, 280 px on the handheld and 194 px on the tablet, with 5 mm isolation. T2, primary in-mission actions such as feed switching, map tools and vehicle selection, at 15 mm, 191 px and 132 px. T3, mis-tap-tolerant actions such as selection, panning and opening a panel, at ~12 mm, 153 px and 106 px. T4, planning and static density such as plan and intent editing and settings, at 8–10 mm, 102–127 px and 71–88 px.
- **H55** — **Spacing**: ≥3 mm between targets, 38 px and 26 px; 5 mm isolation around safety controls, 64 px and 44 px.
- **H56** — **An absolute floor beneath the tiers**, applying to every screen: 6.35 mm, 81 px and 56 px, citing WCAG 2.2 Success Criterion 2.5.8.
- **H57** — **The three-column framing the specification opens with.** The golden standard — MIL-STD-1472 plus gloved-touch research, at 15–25 mm for gloved operation, sized by visual angle at viewing distance. Practice in the field — **no fielded ground control station abides by it**, and the named consumer-density systems remain operable only because most of their surface is mis-tap-tolerant and the few critical actions are separately gated. And the middle ground — consequence tiers rather than a blanket floor, with the full standard applied only where a missed tap is unrecoverable and graduated density permitted where an error costs a retry or the work is stationary.
- **H58** — **Protection patterns as a substitute currency for size**: slide-to-confirm, hold-to-commit at 300–600 ms, and select-then-arm. **Permitted at T2 and below; never at T1, where size is the protection and is never substituted.**
- **H59** — **The capacity rule.** If an in-mission view cannot fit its controls at their tier sizes, controls are cut or moved to hardware. **Tiers are not downgraded to fit.**
- **H60** — **A typography scale governed by cap height and viewing distance.** Critical readouts — mode, state, altitude, power — at ≥4.5 mm cap height, bold, 82 px and 57 px, sized for the worst-case lap posture at roughly 60 cm. Body and primary text at 2.6–3 mm, 47–55 px and 33–38 px, at a baseline of roughly 40 cm. Secondary and non-critical text only at 2 mm, 36 px and 25 px, for the closest postures. **One global critical floor, with no per-mode resizing.**
- **H61** — **An icon scale**: a minimum legible glyph at 3–4 mm; a standard operational glyph at 4–5 mm; a critical-state glyph read from the lap at 5–6 mm; a hit area around any tappable icon of ≥15 mm regardless of glyph size, because target size is finger-driven rather than glyph-driven; stroke weight ≥0.6 mm at roughly one-eighth of glyph height; filled silhouettes over outlines; no internal detail finer than ~1 mm; and critical glyphs always paired with a text label.
- **H62** — **The reference glove recorded as an open dependency.** Thin tactical gloves give roughly an 8–10 mm contact patch and heavy gloves 10–14 mm; **the tiers assume the heavier case**, and which glove would be issued was unresolved.
- **H63** — **T3 labelled a hypothesis in the deliverable** — recorded as sitting in an untested band between roughly 8.5 mm and 20 mm, to be validated.
- **H64** — **Creative Navy designed and ran a NASA-TLX workload assessment.** Participants, conditions and result are not recorded in the source material.
- **H65** — **Nine design rules.** One component library sized from the handheld column with two layout templates, so that handheld layouts inherit safely onto the physically larger tablet. A maximum of roughly six to eight on-screen touch controls per in-mission view. T1 controls limited to three or four per view, with isolation, two-stage commitment, and a hardware alternative wherever the device provides one. Hit areas may exceed the drawn control, but the visual should approximate the true target and adjacent invisible hit zones are avoided. Contrast of ≥7:1 for critical text and ≥4.5:1 for large text. **State is never communicated by colour alone**, always with redundant shape, position or icon. Primary navigation on the handheld's bezel keys, with touch reserved for spatial tasks and dense interfaces moved into full-screen takeovers. Night-vision compatibility present on one device and undetermined on the other. And the capacity rule (H59).
- **H108** — **The specification was authored in millimetres with pixels derived per device because the display had not been chosen when the work began.** An earlier revision derives from an 8-inch panel at 11.16 px/mm; the settled specification derives from a 7-inch panel at 323 ppi and 12.72 px/mm. **The unit choice is what made the specification survive the hardware decision**, and what makes it portable to the second device.
- **H66** — **The device parameters.** The handheld: 7 inches, 1920 × 1200, 323 ppi, 12.72 px/mm, 151 × 94 mm, 2,500 nits; twelve bezel buttons, four front push buttons, two 2-axis Hall-effect joysticks, a five-direction joystick, two 1-axis joysticks on the top edge and two push buttons with flip guards; two operator-presence buttons on the rear; 1,243 g with the tablet fitted; MIL-STD-810H, IP65, −20 °C to +50 °C; chest mount available; braced-thumb handheld use with roughly half the screen thumb-reachable. The tablet: 10.1 inches, 1920 × 1200, roughly 224 ppi, 8.83 px/mm, 218 × 136 mm, 1,000 nits; freehand set-down use with roughly 5 % of the screen thumb-reachable, which the specification treats as one tier stricter in mission.
- **H67** — **An accessibility finding about carry position.** The rear operator-presence control is inaccessible in chest-mounted use and in lap use, and the device supports full thumb interaction only when hand-held; the comparison tablet supports no thumb interaction at all.
- **H68** — **Eleven numbered references**, spanning MIL-STD-1472, FAA human factors design standards, WCAG 2.2, the AHFE touch-zone-sizing study, avionic touchscreen interaction under vibration, flight-deck target-size guidelines, army research laboratory controller and soldier-robot-teaming series, and the NASA ground-control-station human factors guidelines.

### A3.6 The operational doctrine

- **H69** — **A decision model for what a handheld may show at all**, structured around five functions: Aviate, Navigate and Execute the Mission as the primary trio, with Command and Control and Manage Contingencies as cross-cutting functions that apply continuously rather than in sequence. **Adapted from published NASA, FAA and EASA uncrewed-aircraft human-factors guidance rather than copied from any one framework, and the document says so.**
- **H70** — **Each function carries a primary operator question**, supporting questions, the information required to answer them, and its relationship to the other four. Is the vehicle in a known, controlled and acceptable operating state. Where is it going, and does it retain a viable path to recovery. What task is active, and is the required mission system in the correct state. What has been requested, and what state has the vehicle actually confirmed. What has departed from normal operation, and what requires attention now.
- **H71** — **The practical value, stated as the document's purpose**: every piece of information and every control can be tested against a clear operator question, assigned an operational priority, and classified as persistent, contextual or alert-driven — and **information that cannot answer one of those questions is a candidate for removal, consolidation or secondary placement.**
- **H72** — **The state separations, stated as rules.** Vehicle status, mission segment, guidance mode, armament state, command state, system health and alert priority are related and must not be treated as interchangeable. A vehicle may be airborne while holding, executing a mission task while its armament remains safe, or following one active plan while another is still awaiting acknowledgement. **Vehicle status describes what the vehicle is doing; mission segment describes where the mission is; health and alerts describe what is wrong.**
- **H73** — **The rule the whole doctrine turns on**: a requested state must not visually replace a confirmed state before the vehicle reports the result.
- **H74** — **Armament state as five explicit values**: safe, armed, change pending, unavailable, unknown.
- **H75** — **Command state as seven explicit values**: requested, sending, awaiting acknowledgement, accepted, rejected, timed out, resulting state confirmed — **followed by the instruction to use only states the technical system can actually determine.**
- **H76** — **Alert priority as three levels** with their response expectations: warning, requiring immediate awareness and immediate response; caution, requiring immediate awareness but a less urgent response; advisory, requiring awareness with later action possibly necessary.
- **H77** — **Relationships over isolated measurements.** Individual values are useful only when they support a decision: a power percentage does not establish whether recovery is viable, because what the operator needs is the relationship between endurance remaining, time to recovery and expected reserve. Likewise coordinates matter less than the relationship between the current leg, the next waypoint, distance, estimated arrival and route deviation.
- **H78** — **Mission subordinate to flight safety.** Mission controls and payload information may occupy contextual workspaces, but must not obscure a significant change in vehicle state, confirmed guidance mode, link quality, navigation validity, recovery feasibility, a critical hazard or an active contingency.
- **H79** — **One source of truth.** Information serving several functions — power, guidance mode, armament state, link state — must not become several independent interface objects; each has one authoritative value, surfaced contextually wherever the operator needs it.

### A3.7 Design decisions and the reasoning behind them

**Architecture and navigation**

- **H80** — **Two status-bar treatments and two navigation treatments were explored with their advantages and costs stated side by side.** A floating status element against a conventional anchored bar: the first frees map area and improves situational awareness, the second is what most users expect, affords room for vehicle status, and anchors the interface. A collapsible navigation against always-visible toolbars: the first keeps the map clear and **allows labels beside icons, reducing reliance on memory in exactly the conditions where memory is impaired**, at the cost of an extra interaction and some initial trial and error; the second needs fewer interactions but reduces map area and forces icon-only recall.
- **H81** — **Collapsible navigation was adopted, with a physical button assigned to show and hide it** — so that the interaction cost the collapsible model introduces is paid by a hardware key rather than by the touchscreen.
- **H82** — **A false-affordance finding about the always-visible option.** Toolbars running down both screen edges would sit so close to the bezel keys that they risk implying a button pairing that does not exist. **This is the same reasoning as H46's second limb, reached independently in a different part of the interface.**
- **H83** — **A radial action menu opened by long press**, reachable either by touch or by the five-direction joystick, with a floating action button offered **explicitly as an optional additional entry point** rather than as a proposal.
- **H84** — **The radial menu was made non-contextual, and this cost the design something.** The obvious design shows only the actions applicable to the selected object. The client's engineers established that the system could not reliably determine whether a vehicle was airborne or on the ground, so a context-sensitive menu would have been guessing. **The decision was to show every option, always.** The interface declined to assert a distinction the system beneath it could not evidence.
- **H85** — **Panels do not open automatically after an object is placed**, because operators place waypoints in sequence and do not stop to adjust properties.
- **H86** — **A manual arm action is required in addition to uploading the plan and starting the mission**, rather than arming being implied by launch.

**Physical controls**

- **H87** — **A complete physical mapping across the device's controls.** Altitude and orientation on the left 2-axis joystick; forward, backward, left and right on the right 2-axis joystick; camera tilt on the left 1-axis joystick and zoom on the right; element navigation and selection on the five-direction joystick. Vehicle switching, mode, split-screen, camera cycling, sensor cycling, screenshot, recording and return to map on the function keys. Signal recovery, navigation-mode switching, and show or hide of the head-up display and of the interface itself on the push buttons. **Strike on a press-and-hold of both flip-guarded buttons for one second. Abort on a dedicated function key.** Three assignments remained open at the time the mapping was recorded and were resolved later.
- **H88** — **Signal recovery replaced return-to-home on the first push button**, at the client's suggestion: a manoeuvre in which the vehicle climbs and loiters in order to reacquire the link, rather than a command to come back.
- **H89** — **A complete non-touch navigation model.** A centre marker fixed in the middle of the map view; the right joystick pans the map beneath it; the five-direction joystick steps the marker between map entities — vehicles, waypoints, points of interest — and a press selects the highlighted one, opening its details. The menu opens and closes on a dedicated key and is navigated with the same joystick. In the camera view, pressing right activates the flight-settings row, up and down edit the selected value, and a further press confirms it. **This is not a fallback mode; it is a parallel interface through which the product can be fully operated without touching the screen.**

**The camera-operation view**

- **H90** — **Split-screen was resolved as map-plus-one-feed rather than two feeds**, because an operation has one observation vehicle but may have several strike vehicles, so the second pane must be able to carry either a feed or the map.
- **H91** — **Head-up-display content was reduced against the client's own data availability.** Temperature was removed because what it measured was not established; the wind indicator was questioned because the provenance of its speed and direction data was unclear; the satellite-navigation signal was promoted into the status bar instead. **The interface declined to display values whose source could not be named** — the same discipline as H84 and H75.
- **H92** — **Distance to target was moved directly beneath the target marker** rather than sitting in a screen corner, and the compass was made permanently visible.
- **H93** — **The head-up display and the pilot-and-observer mode control were merged**, because two controls for one distinction did not earn their place.

**Status, alerts and attention**

- **H94** — **A status bar carrying vehicle identity, signal strength, power and charge state, speed, and mission status** — with mission status written as a plain statement of what is happening, such as en route to a waypoint or orbiting a target, rather than as a code.
- **H95** — **Graduated speed warnings rather than a binary limit**: a warning at one threshold and an alert at a higher one, expressed in metres per second, placed with the other environmental warnings rather than in the telemetry readout.
- **H96** — **Critical notifications require an explicit close; non-critical notifications self-dismiss after a short interval.** The notification control itself carries criticality — neutral when nothing is outstanding, marked when something critical is — and opens a notification centre rather than a list.
- **H97** — **Hints were separated from notifications**, so that guidance toward the next step and reports of what has happened do not occupy the same channel — the design answer to the review's finding that the interface offered no support in guiding the user through a largely linear task (H38).
- **H98** — **A dark interface at all times for daylight contrast and legibility, with a separate low-brightness night mode** as a distinct state rather than a dimming of the same one.

**Multi-vehicle operation**

- **H99** — **Map clustering with redundant encoding**, answering the review's finding that colour alone fails as vehicle counts rise (H41).
- **H100** — **Grouping is manual rather than proximity-based**: the operator assigns vehicles to a group rather than the system inferring one from distance.
- **H101** — **A vehicle dashboard and a target dashboard** as a third view alongside the map and the camera feed, with the explicit caution that introducing a dashboard into a product that had only ever had a map and a feed is itself a significant change.
- **H102** — **A feed grid that scales between arrangements** rather than a fixed layout, with ordering driven by mission logic rather than by vehicle index.
- **H103** — **Engineering ceilings the design worked within**, established by the client's engineers: three to four vehicles is the practical limit of operator cognitive load at the system's current autonomy level, and four to five simultaneous video feeds is realistic where nine is not.
- **H104** — **The swarm feasibility gate.** The delivery plan set the first test of the swarm designs as whether the problem was solvable by design at all, before any comparison of their merits, because the client was not certain it was (H8). **It was solvable, and the swarm capability was built** (H109).
- **H105** — **The command-centre block carried the same spine**: the same four assessment criteria, the same recursive ambiguity triage, and the swarm problem approached a second time at a different scale, for large single screens, multi-screen setups, tabletops and wall-mounted displays readable at a distance.

### A3.8 Evaluation

- **H121** — **A client-run prototype session with six users** — ex-army personnel and current drone pilots — some bare-handed and some gloved, on the interactive prototype (H20).
- **H122** — **The finding: gloved touch was unreliable on the target panel.** The display did not consistently register gloved input, and the gloves available were assessed as not well suited to the touchscreen. Icons and terminology were reported as needing refinement. The remainder was reported favourably.
- **H123** — **The NASA-TLX assessment (H64) has no recorded participants, conditions or result.**

### A3.9 Status

- **H109** — **The handheld interface was built. The swarm capability was built.**
- **H110** — **No design-fidelity comparison exists**, and no record of one appears anywhere in the source material.

### A3.10 What did not happen — must be stated, not omitted

- **H111** — **No Creative Navy field research of any kind.** No contextual observation, no field visits, no observation of operators working, no timed task study. The operator behaviours in H37 are the client's observations, relayed.
- **H112** — **No Creative Navy usability test of the design.** The only session with users was run by the client with six participants (H121). There were no criteria fixed in advance, no pass rules, no task times and no error counts.
- **H113** — **No Creative Navy interviews with operators.** No participant population of its own at any point in the programme.
- **H114** — **The personas were not built from research** and the deliverable says so on its face (H14).
- **H115** — **Nothing was tested on the physical device under any operational condition.** No sunlight testing, no vibration testing, no cold testing, no night-vision testing, no gloved actuation testing by Creative Navy. The environmental figures in H66 are vendor specifications for hardware Creative Navy did not test.
- **H116** — **No operational, mission, workload, error-rate, time-saving, throughput or commercial figure exists.** Nothing was measured in operation.
- **H117** — **No design-system access** (H18), so component-level assessments in the review were explicitly bounded by what could be seen.
- **H118** — **No hand-over package of the kind Schone produced.** No token file, no component register, no acceptance ledger and no change protocol appear in the source material.
- **H119** — **No client or operator speech is on record and nothing has been cleared.** No transcripts, no quotable statements, no reported speech.
- **H120** — **No validation of the two figures the strike recommendation depends on.** The hold duration and the physical-control design were explicitly flagged in the deliverable as requiring human-factors and system-safety testing that the engagement did not perform (H51).

---

## A4. Evidence calibration — mandatory

**H1–H20 are engagement record and may be stated plainly, but they are not outcomes.** "Fourteen sprints", "40 options across 11 challenges", "32 systems benchmarked", "four consequence tiers" describe the work. They say nothing about its effect.

### The refusal — the strongest material here, and the easiest to turn into a safety claim

**H44–H53 are the lead and they are a design argument, not a safety determination.** Required framing:

> The client asked for the strike and abort controls to remain permanently visible on the touchscreen, because a command issued through the interface might not reach the vehicle and operators had therefore been pressing the control repeatedly. Creative Navy's designers and the client's designers jointly wrote the case against it, citing NASA and FAA human-factors guidance, and recommended that the strike command be committed by pressing and holding two flip-guarded physical buttons while the strike request status remained visible at all times, and that retry be handled as a bounded property of the command architecture rather than as repeated human input.

Four things must not be attached to it. **It did not make the system safe.** It changed where a control lives and what the interface asserts. **It was not validated** — the deliverable itself says the hold duration and the physical-control design require human-factors and system-safety testing that was not performed (H120), and that limitation must appear in the same part of the case study as the recommendation, not in a footnote. **It did not prevent anything** — no accidental activation was measured before or after, because nothing was measured. And **it was not a unilateral act**: the client's own designers co-authored it (H53), which is the more interesting fact and the one §A5.1 is built on.

**The client did not accept all of it** (H52). Write the residual disagreement. A case study that reports a design argument it half-won is more credible than one that reports a design argument it won.

### "Repeated input is not feedback" — the sentence to protect

**H45 and H49 are the engagement's best insight and its most quotable line, and the quotation rule forbids quoting it** (§A1.7). Render it as a statement.

The claim that must be made precisely: **the diagnosis was that a user-interface request was a symptom of an architectural defect.** Not that touchscreens are unreliable — that is in the standard. Not that confirmation gates are good — that is in every design textbook. The move was noticing that an operator pressing a control repeatedly is compensating for an unreliable command channel, and that the honest answer is to fix the channel. **That is the whole case study in one observation** and it must not be diluted into a general argument about destructive-action confirmation.

### The sizing specification — a specification, not a conformance claim, and not a result

Four separate traps, and each has produced a false sentence in a draft elsewhere in the corpus.

**It is not a standards conformance claim.** MIL-STD-1472H sets a 16 mm minimum touch target with 5 mm added for gloved use. **Two of the four tiers sit below that**, and T2 at 15 mm sits below even the bare-hand minimum. The specification is explicit about this — it applies the full standard only where a missed tap is unrecoverable (H57) — and **the brief must carry the graduation, never the standard's name alone.** Required construction: the specification measures itself against MIL-STD-1472 and states where it deliberately departs from it.

**It is not validated.** H64 confirms that Creative Navy designed and ran a NASA-TLX workload assessment, which is what the specification said T3 needed (H63). **That is as far as it goes.** NASA-TLX is a subjective workload instrument — it asks participants how demanding they found a task across six dimensions. It is not a measure of task time, accuracy, error rate or gloved actuation success. And **the result is not recorded** (H123). Required framing:

> Creative Navy designed and ran a NASA-TLX workload assessment against the tier the specification had itself labelled a hypothesis.

Stop there. **Do not state or imply a result, do not say the tier was validated, and do not give a participant count** — none is recorded. See §A10 item 2.

**It is not an outcome.** A four-tier specification with per-device derivations describes the work. Nobody was measured operating the thing faster or more accurately, and the one thing real operators attempted on the real panel — gloved touch — did not work (H122).

**"Protection patterns substitute for size" is one careless sentence away from design guidance for a weapons control.** The specification is precise: protection patterns are permitted at T2 and below and **never at T1**, where size is the protection and is never substituted (H58). **Carry the exclusion in the same sentence, every time.**

### The prototype session — six users, client-run, qualitative

**H121 and H122 must carry their denominator and their authorship everywhere they appear.** Required framing:

> In a prototype session run by the client with six participants — former military personnel and current drone operators, some working bare-handed and some gloved — gloved touch was found to be unreliable on the target panel.

Four things must not be attached. **It is not a usability test**: no criteria were fixed in advance, no pass rules, no task times, no error counts. **It is not Creative Navy's research.** **It is not a validation of the design** — do not convert the favourable remainder into approval; it is a progress note in a meeting record. And **it tested a non-functional prototype, not a system.**

**Write the finding as a finding, not as a footnote.** It partially undercuts the premise of the sizing work, and saying so is the strongest thing the case study can do. See §A5.4.

### The expert review's operator behaviours are the client's observations

**H37 is client-reported and must be labelled as such every time.** Required construction: the client observed, and reported to Creative Navy, that operators wrote coordinates on paper, lost track of which dialog to open next, and needed active recall for colour and icon meanings.

**This has a consequence that must appear somewhere explicit: Creative Navy has no primary field evidence on this engagement** (H111). Do not let the review's confident prose about frontline conditions read as fieldwork. The review reasoned from the client's brief, the client's observations, published cognitive-science literature and hands-on use of the running product. That is a legitimate basis. It is not the same as having watched anyone work.

### Co-authorship travels with every deliverable

**H15 and H53 change the default reading of the whole case study.** A reader who encounters "Creative Navy produced an operational doctrine" assumes sole authorship. The accurate statement is that Creative Navy and the client's design team produced these deliverables **together**.

**Use a standing construction and apply it consistently:** work Creative Navy *led and co-authored*, not work it *delivered*. Apply it to the expert review, the doctrine, the sizing specification and the strike argument.

**Write it as the method succeeding, not as a caveat.** A client design team working alongside rather than receiving is exactly what Organizational Integration claims to produce. It belongs in the body as evidence, not at the end as a qualification.

### Status

**H109 is "was built" and nothing more** (§A1.4). Not shipped as designed — H110 removes that, and it belongs to AIT and Schone. Not deployed. Not in service. Not an outcome. **And no explanation of the silence**, which is itself a disclosure.

### Counts and migration

**H11 and H12 govern every count.** The option space is 26 options across 6 challenges on the handheld and 14 across 5 on the command centre; the benchmark is 32 systems with 21 analysed in depth. **Do not let Schone's 45 alternatives in 85 frames or KISPE's 36 in 64 migrate here, and do not present this engagement's 40 options as comparable to either frame count** — they count different things. This engagement has no frame count; do not estimate one.

**On the benchmark, state both numbers or neither.** Thirty-two systems with twenty-one in depth is the largest benchmark in the corpus and will be scrutinised. "Thirty-two systems benchmarked" alone invites the challenge that it was a list; "twenty-one analysed in depth" alone undersells it.

### External research

**The standards and literature in §A8 frame the category, not this product.** No standard named there was certified to, audited against or worked to; no study cited there measured this product. **This rule is stricter here than anywhere else in the corpus**, because in this domain "compliance" and "control" are terms with legal content.

### What must not be claimed

- **Any safety, airworthiness, certification, weapons-review or regulatory credential.** The scope statement excludes all of it (H106).
- **Any change to autonomy, control algorithms, autonomous safety behaviour, the datalink, the effector or targeting logic** (H106).
- **Any claim that the design prevents accidental activation, wrongful engagement, civilian harm, fratricide or operator error.** Nothing was measured. The supportable claim is that specific distinctions were made explicit, a consequential control was placed behind a deliberate two-handed physical commitment, and a requested state was specified never to stand in for a confirmed one.
- **Any claim about *meaningful human control*** as something Creative Navy delivered, established or improved. §A8.1 is a frame for why this class of work matters. It is not a claim about this engagement's product.
- Any operational, mission, workload, error-rate, time-saving or commercial figure (H116).
- Any deployment or operational use (§A1.4).
- Any field, hardware, lighting, sunlight, vibration, cold, night-vision or gloved-actuation claim of Creative Navy's own (H115).
- Any characterisation of a competitor product by name.
- Any quotation or reported speech (H119).
- Anything excluded by §A1.6.

---

## A5. Positioning — the angles worth leading with

**Ranked by how much of this exists nowhere else in the corpus.**

### A5.1 Both design teams wrote the case against the control one of them had asked for — lead with this

The client asked for the strike control to be permanently live on the touchscreen. The reason was candid and it is the finding: commands do not always reach the vehicle, so operators press the control repeatedly until they are satisfied, and the persistent control was serving as both the command and the retry (H44, H45).

**Creative Navy's designers and the client's own designers jointly wrote the document arguing against it** (H53). That is the thing to lead with, and it is not a story about an agency pushing back on a client. It is a story about what a joint design team is *for*: a request had come from elsewhere in the client's organisation, it had a real operational reason behind it, and the people closest to the interface — on both sides — were the ones positioned to establish that the reason was correct and the remedy was wrong.

The argument has four limbs and every one generalises past this product (H46). A single touchscreen input is not a commitment gate for an irreversible action, on a panel vulnerable to rain, gloves, vibration, palm contact and the wrong control under stress. Symmetrical placement at opposite screen edges implies a physical mapping that does not exist. A permanently enabled control asserts that the action is always available when availability depends on link, mode and vehicle state — where a persistent *status* indicator reports readiness without implying that touching the screen will work. And repeated input is not feedback: it adds uncertainty, because the operator cannot tell whether they are retrying one request, creating duplicates, or acting on information that has already aged.

The counter-proposal separated the two jobs the control had been doing (H50). Strike request status stays visible always. The strike action moves to a press-and-hold of both flip-guarded physical buttons. Abort keeps a fixed, predictable position but goes live only when the system confirms an action is running and still abortable. And retry becomes a property of the command architecture — one deliberate action, one logical command, with an identifier, bounded retries, duplicate protection, expiry and explicit vehicle acknowledgement (H49).

**Write what the document said about its own limits** (H51): blind retransmission would itself be unsafe, so the retry policy belongs to system safety; and the hold duration and the physical-control design require human-factors and system-safety testing that this engagement did not do.

**And write the outcome honestly, including the half that did not land** (H52). Automatic repeated transmission was accepted as feasible. The two-button flip-guarded commitment survived into the final mapping. The client held its position on keeping both controls simultaneously visible, for the reason it gave at the start.

### A5.2 A user-interface request that was really an architecture defect

§A5.1's diagnosis deserves its own section, because it is the transferable part.

An operator pressing a control repeatedly is not expressing a preference about buttons. **It is the interface absorbing a defect in something underneath it** — unreliable command delivery, or unreliable acknowledgement, or unreliable state reporting. The request to make the control permanently available was a request to make that absorption more comfortable.

The six questions the design insisted the interface answer are what replaced it (H48): was the input registered, is the command being transmitted, did the vehicle acknowledge it, what state did the vehicle confirm, is the information current or stale, and is abort still available. **None of those is answerable by a button. All of them are answerable by a status.** That is the whole substitution.

This is the section that connects the engagement to the corpus's error-reduction and state-visibility arguments, and it is where to make the general claim: **a design request that asks for more ways to try again is usually a report that the system cannot say what happened.**

### A5.3 A specification that states where it fails the standard, and labels its own weakest tier a hypothesis

The touch-sizing specification opens by setting out three things rather than one (H57): the golden standard, which is MIL-STD-1472 plus gloved-touch research at 15 to 25 millimetres; practice in the field, where **no fielded ground control station abides by it** and the consumer-density systems remain operable only because most of their surface tolerates a mis-tap and the few critical actions are separately gated; and the middle ground it then proposes, which is consequence tiers rather than a blanket floor.

Four things make this worth a section (§A4 governs all four).

**It states its own non-compliance.** Two of its four tiers sit below the standard's minimum, and it says so, and it says why: the full standard applies where a missed tap is unrecoverable, and graduated density is permitted where an error costs a retry or the work is stationary.

**It labels a hypothesis as a hypothesis, and then measures it.** T3 is recorded in the deliverable as sitting in an untested band, to be validated (H63) — and a NASA-TLX workload assessment was subsequently designed and run against it (H64). A specification that marks its own weakest tier unproven, in the deliverable, and then goes and tests it, is a complete epistemic loop and the corpus has nothing else quite like it.

**It has a capacity rule with teeth** (H59). If a view cannot fit its controls at their tier sizes, controls are cut or moved to hardware. Tiers are not downgraded to fit. That single sentence is the discipline, and it is the one a reader will remember.

**It names its own open dependency** (H62). Thin gloves give an 8 to 10 millimetre contact patch and heavy gloves 10 to 14; the tiers assume the heavier case; which glove would be issued was unresolved. **That unresolved dependency is what §A5.4 then walks into.**

One small decision worth a sentence, because it is the reason any of this is portable: **the specification was authored in millimetres with pixels derived per device, because the display had not been chosen when the work started** (H108). A specification written in pixels would have died with the hardware decision. This one survived it and transferred to a second device.

### A5.4 The gloves did not work

A client-run session with six users found gloved touch unreliable on the target panel — the display did not consistently register it, and the gloves available were not well suited to the screen (H121, H122).

**Write it as a finding and put it next to the specification, not at the end.** The specification had just been authored on the assumption of heavy gloves, and it had named the reference glove as an open dependency before anyone tried one. Both facts are true. The second is more useful than the first.

The honest construction is that the sizing conclusion was not wrong, it was **incomplete**: millimetres are necessary and not sufficient, because no target size resolves a panel that registers nothing at all. And the part of the work that mattered most turns out to be the part that assumed the touchscreen was unavailable — which is §A5.5.

A case study that reports the specification and stops is weaker than one that reports the specification, the test that undercut its premise, and the hardware decision that had already hedged against it.

### A5.5 A second, complete interface that assumes the screen does not work

The device carries twelve bezel keys, four front push buttons, three analogue joysticks, a five-direction joystick, and two flip-guarded buttons on the top edge (H66). The engagement mapped all of them (H87) **and built a parallel navigation model that needs none of the touchscreen** (H89): a centre marker fixed in the middle of the map, the right joystick panning the map beneath it, the five-direction joystick stepping between vehicles and waypoints and points of interest, a press to select, a dedicated key for the menu, and value editing in the camera view by pressing right, stepping up and down, and pressing to confirm.

Read next to §A5.4 this stops being redundancy and becomes the load-bearing decision of the engagement. **The physical controls are not an accelerator for expert users. They are the path that survives rain, gloves, vibration and a wet panel.** The design rules say it outright: primary navigation on the bezel keys, touch reserved for spatial tasks, and a hardware alternative for every critical control wherever the device provides one (H65).

Nothing in the corpus is shaped like this. Raymarine had one physical control to reason about, the industrial platform had buttons beside a touchscreen, and Schone had no hardware at all.

### A5.6 Three times, the interface refused to display something the system could not establish

The same discipline appears in three unconnected places, which is what makes it a principle rather than a decision.

**The action menu was not allowed to be contextual** (H84). The obvious design shows only the actions that apply to the selected object. The client's engineers established that the system could not reliably tell whether a vehicle was airborne or on the ground, so a context-sensitive menu would have been guessing. The menu shows every option, always. **It is a worse menu and the right one.**

**Head-up-display content was cut against data provenance** (H91). Temperature went because what it measured was not established. The wind indicator was questioned because the source of its speed and direction could not be named. The satellite-navigation signal was promoted into the status bar in their place.

**The doctrine states it as a rule** (H75): use only states the technical system can actually determine. And its companion (H73): a requested state must not visually replace a confirmed state before the vehicle reports the result.

This is *constraint respecting* with a cost attached, which is the version worth writing. Each instance gave something up — a cleaner menu, a fuller instrument panel, a more responsive-looking control — to avoid asserting something the system could not evidence.

### A5.7 Degradation specified as the operating condition

A requirement Creative Navy authored, stated as a system requirement rather than as a design preference: **the system shall treat electromagnetic interference as an expected operating condition rather than an exceptional failure**, because contested electromagnetic conditions are core to the intended environment (H17).

The control set follows from it. One of four push buttons is a signal-recovery manoeuvre — the vehicle climbs and loiters to reacquire the link — rather than a command to return home (H88). The end-to-end flow carries an interference branch, target loss, reacquisition, an operator hold state and an abort path. The command-state model has seven values including rejected and timed out (H75), because a command that never resolves is a normal event rather than an error.

**This must be written to be distinct from Schone's degraded-link material** (§A9). Schone's argument is epistemic: link condition and information age are different facts, and a value that has stopped arriving keeps its age. This engagement's argument is about *intent*: the interface was specified for an environment where the link is expected to be interfered with, and a quarter of its physical commitment surface is given over to recovering from it.

### A5.8 A method that treats shifting requirements as a tracked object

The delivery plan states six constraints before any work began, including that requirements were shifting and that this was understood to be the nature of the client's situation (H8). Then it builds a procedure for it (H9).

Creative Navy authored the requirement set first and submitted it for enrichment — not to settle the requirements but to find where the ambiguity sat. Each unknown then got one of three treatments: the client clarified it; the designs catered for a range of speculative possibilities, **so that design became the vehicle by which options were disseminated inside the client organisation**; or it was deprioritised. The triage recurred, and **the fitness of the method itself was reviewed every two weeks alongside it.**

Three more things in the same register. The plan states that the scale of the system exceeded the size of the project as a starting premise, and names the areas selected as a consequence. It states that the client was not certain the multi-vehicle problem was solvable by design at all, and sets the first test of those designs accordingly (H104) — a gate the work then passed, with the capability built (H109). And it states that the designs would map multiple possibilities with their costs so that the client's product managers could weigh development cost against upside, with the decision explicitly remaining theirs (H10).

**This is the best-evidenced instance in the corpus of the method stated as method before the work rather than reconstructed after it**, and the brief should say so once.

**Supporting material, not headline angles.** Two further things are true and worth a paragraph each in the body rather than a section of their own, because the corpus already carries the argument and this study adds weight rather than novelty: the expert review's two long-form arguments about modularity and flexibility (H33, H35, H36), and the co-authored requirements table with its facing question-and-answer columns (H16). Write both from this engagement's own facts; do not restate another study's framing of them.

---

## A6. Classification and filing

```
## Classification

- **Primary case-study category:** /evidence/case-studies/defence-and-space
- **Primary context:** /contexts/defence-and-space-systems
- **Also-relevant contexts:** /contexts/embedded-devices-and-constrained-interfaces, /contexts/high-consequence-environments, /contexts/multi-stakeholder-operational-environments, /contexts/expert-tools-and-internal-systems
- **Connects to:** /situations/complexity/system-state-is-hard-to-understand, /situations/complexity/abnormal-conditions-break-the-interface, /situations/complexity/operators-rely-on-memory-too-much, /situations/complexity/the-product-works-in-demos-but-not-in-real-use, /situations/risk-and-consequence/user-error-has-serious-consequences, /situations/risk-and-consequence/the-interface-increases-cognitive-load-at-the-worst-moment, /situations/risk-and-consequence/users-cannot-recover-cleanly-from-errors, /situations/delivery-and-execution/nobody-can-explain-why-the-experience-feels-hard, /failures/state-visibility-failures/mode-changes-are-unclear, /failures/state-visibility-failures/users-cannot-see-what-state-the-system-is-in, /failures/cognitive-failures/the-interface-gets-harder-when-pressure-rises, /failures/cognitive-failures/the-interface-demands-too-much-memory, /failures/cognitive-failures/users-cannot-reorient-quickly-after-interruption, /failures/error-and-recovery-failures/errors-are-easy-to-make, /failures/workflow-failures/critical-actions-appear-at-the-wrong-time, /capabilities/design-for-abnormal-and-degraded-scenarios, /capabilities/error-reduction-and-recovery-design, /capabilities/cognitive-load-reduction, /capabilities/state-and-status-visibility-design, /capabilities/ux-audit-for-complex-products, /capabilities/information-architecture-for-expert-systems, /practices/cognitive-load-analysis, /practices/error-likely-interaction-review, /practices/edge-case-and-degraded-mode-analysis, /practices/task-criticality-mapping, /practices/behavioural-requirements-definition, /practices/decision-boundary-design
```

### A6.1 Structural change required — read before any repository work begins

**`/contexts/defence-and-space-systems` and `/evidence/case-studies/defence-and-space` do not exist in the repository.** Thirteen context files exist and twelve case-study categories are parseable from the structure; neither defence slug is among them. Both were proposed by the KISPE change set and neither has landed. The Schone brief states it cannot be integrated until KISPE does. **This is the third brief depending on them.**

**Decision taken: all three defence studies land in one change set.** In order:

1. Add both pages to `site_structure.md`.
2. **Write `/contexts/defence-and-space-systems` once, from all three contributions together** — KISPE's symbology and positioning-service vocabulary, Schone's airworthiness-envelope and control-interoperability vocabulary, and this engagement's human-machine-interface frame with its gloved-touch and ruggedised-hardware material. Written sequentially the page acquires three unconnected thirds with visible seams.
3. Add the three case studies with their Classification blocks.
4. Re-run `python3 Guidance-meta-layer/lint_case_studies.py <repo>` across the whole corpus. **The gate was repaired in the same session as this brief** — it had been returning a silent PASS over an empty set because its path discovery globbed the repository root while the files sit under `Articles/` and `Site-Structure/`. It now globs recursively and fails with a diagnostic when it cannot establish ground truth, so a "PASS" means something again.
5. Add three entries to `Content-registry/content-registry.json` on the existing schema: `source_file`, `title`, `slug`, `category`, `parent_slug`, `related_slugs`, `article_type`, `priority`, `generation_status`.

### A6.2 The option-space ranking, reconciled once

The three defence briefs each carry an option-space claim and they have been competing. **Settled: Schone first at 45 alternatives in 85 low-fidelity frames; this engagement second at 40 options across 11 design challenges; KISPE third at 36 alternatives in 64 frames.** The KISPE brief's self-description as the second-best-evidenced instance in the corpus needs correcting to third in the same change set.

One discipline on top: this engagement counted options, not frames. **Never present its 40 as comparable to Schone's 85.**

### A6.3 Slugs tested and rejected, with reasons

- **`/capabilities/ux-audit-for-complex-products` is IN, and it is the first defence study for which that is true.** The KISPE and Schone briefs both reject it because no audit was scoped. Here one was: eighteen pages, commissioned as a separate paid deliverable in the client's own request for proposal, with a heuristic evaluation, a two-axis scoring scheme and a keep-tweak-discard remit (H3, H30, H31).
- **`/contexts/embedded-devices-and-constrained-interfaces` is IN, and it is also a first.** The Schone brief rules it out because that engagement was a desktop console with no constrained-hardware story. This one is a 7-inch panel with twelve bezel keys, a 15-millimetre gloved floor, a capacity rule and a complete non-touch navigation model. It is the clearest constrained-interface evidence in the corpus after the Elsner controller.
- **The whole `/situations/ai-and-automation` cluster is OUT**, and the reasoning needs restating because here it is less obvious than for Schone. There is machine learning in this product — object detection, confidence scoring, target suggestion — and the engagement touched it. But Creative Navy did not design the model behaviour, the trust calibration or the override semantics; that material appears in the source set as competitor observations and as things the client's team raised. On the available evidence those pages would be claiming work that was discussed rather than done. **Revisit if the follow-on's data-enrichment sprints produced a confidence-scored surface** (§A10 item 1).
- **`/failures/interpretation-failures/uncertainty-is-not-communicated-usefully` is OUT** — the page is scoped to AI-specific uncertainty. Same exclusion as Schone.
- **`/method/implementation-partnership` is OUT, and this needs care now that the product was built.** Being built is not Implementation Partnership. No build oversight, no fidelity comparison, no integration gate and no retainer appears anywhere in the source material (H110, H118). Schone owns this phase at the fullest weight in the corpus and AIT at the next. **"Built" is precisely the fact most likely to be mistaken for reaching it.**
- **`/situations/delivery-and-execution/design-does-not-survive-development` is OUT**, for the same reason: nobody checked whether it survived.
- **Every `/evidence/outcomes/*` page is OUT.** Nothing was measured and nothing is claimable (H116). **The brief must say so explicitly rather than leaving it to be noticed.** Revisit only if operational measurement ever becomes available and disclosable.

### A6.4 Phase mapping — four of five, and the fifth is not claimable

- **Sandbox Experiments** — the expert review and the opening sprints of each block. Option space mapping across 11 named challenges, a 32-system benchmark with 21 analysed in depth, structural alternatives stated with their costs, and hands-on use of the running product as domain learning (H11, H12, H18, H30, H80).
- **Concept Convergence** — the scope decision the expert review produced (H42), the selection of four areas against a system larger than the project (H8), and the swarm feasibility gate that judged solvability before merit (H104).
- **Iterative System Building** — both seven-sprint blocks. The doctrine, the sizing specification, the flows, the physical mapping, the prototype, the swarm exploration, the UI concepts (H4, H5, H20, H54, H69, H87).
- **Organizational Integration** — **the co-authored deliverables** (H15, H53), the requirements table with its facing question-and-answer columns (H16), the three-meetings-a-week design cadence with options argued rather than presented, and the weekly developer loop (H10, H19). A client design team producing the doctrine and the specification alongside Creative Navy, rather than receiving them, is what this phase claims to produce.
- **Implementation Partnership** — **not claimable.** See §A6.3.

### A6.5 Evidence-standards pages

- **`/what-is-client-reported`** — H37 (the operator behaviours) and H121/H122 (the six-user prototype session). Both are useful precisely because neither is flattering and both are reported at their real evidence class.
- **`/what-is-inferred`** — H14, the personas labelled "Speculation" in the deliverable. **The clearest instance in the corpus**, and the page should quote the practice rather than the personas.
- **`/what-we-do-not-claim`** — H111 through H120 and the whole of §A4's final list.
- **`/what-we-have-measured`** — **hold.** H64 establishes that Creative Navy ran a NASA-TLX assessment; no result is recorded. Place nothing until §A10 item 2 is answered.

### A6.6 On `/evidence/longitudinal`

**Out.** A follow-on beginning immediately after a block closes is a continuation, not a return. That page collects clients who came back years later; including this would dilute it.

---

## A7. Suggested structure for the case study

1. **Opening** — locked agency sentence; the client descriptor; what the product is and what the two interfaces are for, in two sentences; the client's own characterisation of the existing interface as engineering-focused; the three-commission arc and the fourteen-sprint shape; and **the scope boundary, early** (H106).
2. **What the interface actually has to do** — plan a mission, supervise a vehicle, operate a camera, watch several vehicles, commit and abort a strike; three user populations on three device classes; and the condition the persona work found that the brief had not — that the critical coordination happens over radio, outside the system, so the interface has to be glanceable and interruptible rather than heads-down (H21–H29).
3. **What the review found** — the two long-form arguments, modularity needing guidance layered onto it and flexibility needing structure; the cognitive argument that an operator suppressing irrelevant information is spending capacity rather than wasting space; the three questions the interface should answer without being asked; the client-reported operator behaviours with their attribution; and what the review found working and what it declined to assess (H30–H43, H39, H40).
4. **The control** — §A5.1. The request, the reason behind it, the joint argument against it, the four limbs, the counter-proposal, the limits the document placed on itself, and the half the client did not accept. **Lead the section with the fact that both design teams wrote it.**
5. **What the request was really reporting** — §A5.2. The diagnosis, and the six questions a status answers that a button cannot.
6. **What a touch target has to be before it can carry a consequence** — §A5.3. The three-column framing, the four tiers, the capacity rule, the protection-pattern exclusion, the millimetre authorship that survived the hardware decision, the hypothesis label and the workload assessment.
7. **The gloves** — §A5.4. Six users, client-run, the finding, and what it does and does not undercut.
8. **The interface that does not need the screen** — §A5.5. The mapping, the parallel navigation model, and the design rule that puts primary navigation on the bezel keys.
9. **Three refusals to display** — §A5.6. The non-contextual menu, the head-up-display cuts, and the doctrine's rule. Keep it tight; three short instances, one principle.
10. **Designing for interference** — §A5.7. The requirement, the recovery manoeuvre on a physical button, and the command states that treat non-resolution as normal.
11. **Several vehicles** — the swarm feasibility gate, clustering with redundant encoding, manual grouping, the dashboards and the engineering ceilings the design worked within (H99–H104); then the command-centre block as the same spine at a different scale (H105).
12. **How the work was run** — §A5.8. The six stated constraints, the recursive ambiguity triage, the two-week review of the method itself, and the scope-and-replan item that kept the decision with the client.
13. **Evidence and limits** — the engagement record; H121 and H64 with their full §A4 framing; the status sentence and nothing after it; and an explicit statement of H111 through H120.

### The structural instruction, and it governs sections 4 to 10

**Write this case study around one object: a control.** Not a clock — Schone owns the sequence form and this engagement's evidence has no clock. Not an anatomy of screens either.

The spine is a single consequential control and what it took to make it trustworthy. The client asked for it to be a permanently live on-screen button. Both design teams argued it should be a two-button physical commitment with a protected status display. The sizing specification established what a touch target has to be before it can carry a consequence at all. The physical mapping put it on hardware. The gloved session showed why that mattered. The doctrine established why its *status* has to stay visible even when the control itself is not. And the interference requirement explains why it needs a recovery manoeuvre beside it.

**Follow that order, and introduce each piece of general reasoning at the point where that control forced it** rather than grouping decisions by subsystem. A reader should finish section 8 able to explain why the fire control is not on the screen.

This is not a stylistic preference. It is the reason the study cannot be confused with the other two defence studies: it is the only engagement in the corpus whose evidence organises around a physical object, and a narrative built along that object produces sentences no cross-sectional study can produce.

### Three writing notes

**No identifiers in the published prose.** The source material is dense with device codes, function-key designations, push-button numbers, tier labels and requirement references. **The tier labels T1 to T4 are the one exception** — they are the specification's own public vocabulary and the brief uses them — but function keys, push-button numbers and vehicle designations stay out. Write what the control does, not what it is called.

**Fourteen sprints is too much narrative for one study, and the handheld is where the distinctive material is.** Write the command-centre block as what the handheld work earned, not as a second anatomy: one section (11), carrying the shared spine and the scale change, and nothing more.

**The register is a safety-engineering document, not a war story.** §A1.5 governs. No scene-setting, no operators under fire, no dramatisation of the environment. The expert review's own prose about frontline conditions is the one place the source material reaches for atmosphere, and the case study should not follow it there — partly because of register, and partly because Creative Navy was never there (H111).

---

## A8. Domain framing and external research

**Creative Navy did not certify to, audit against, or work to any standard named here.** These establish that the writer understands the domain. **In this domain the rule is stricter than anywhere else in the corpus**, because "compliance" and "control" both carry legal content. Equally, none of the sources below measured this product; they describe the category it enters.

### A8.1 The strongest external frame — usability is one of three recognised modalities of control

**The United Nations Institute for Disarmament Research devotes a report to interfaces in autonomous weapon systems** (Ioana Puscas, *Human–Machine Interfaces in Autonomous Weapon Systems: Considerations for Human Control*, UNIDIR, 2022). Its framing does more work for this case study than any usability argument available.

Three modalities of control have emerged in the Group of Governmental Experts discussions and are now widely considered to impose practical limits on these systems: control over the weapon's parameters, control over the environment of use, and **control through human–machine interaction during use**. The report calls interfaces "the physical nexus between operators and the AWS", and identifies two reasons they count as a means of retaining control — they let operators monitor a system's behaviour, and they let operators deactivate or override it. It then states the condition: **for an interface to be an effective means of control it must have a high degree of usability**, meaning it must be engineered so that users can achieve their goals, and operators must be adequately trained to use it.

That reframes the engagement without any special pleading. **The interface is not a layer sitting on top of the control architecture. It is one third of it**, by the account of the institutions that argue about this for a living. A decision about whether an operator can distinguish a request from a confirmed state is not a usability refinement; it is a determination about whether control exists.

Two further passages land directly. The report notes that interface design quality can significantly and directly improve situation awareness, and that sufficient situation awareness is what lets an operator recognise that a situation has moved outside the automation's capabilities. And it describes the paradigm that human-centred design replaced: a technology-centred approach in which the interface reflects first what the engineers who built the system considered essential. **That is, almost word for word, the client's own description of its existing interface as engineering-focused** (H24). The external literature and the engagement's starting diagnosis meet exactly, and that convergence is worth one sentence in the case study.

**Use it as the frame of the whole study. §A4's final list governs what it may not be turned into** — in particular, nothing here licenses a claim that Creative Navy delivered *meaningful human control*.

**Sources:** [UNIDIR, Human–Machine Interfaces in Autonomous Weapon Systems](https://unidir.org/files/2022-07/UNIDIR_Human-Machine%20Interfaces.pdf)

### A8.2 The multilateral process is live — context page only

The Group of Governmental Experts on emerging technologies in the area of lethal autonomous weapons systems, under the Convention on Certain Conventional Weapons, met in March and in August–September 2026 and reports to the Seventh Review Conference of the Convention at the Palais des Nations, **16–20 November 2026**. Human–machine interaction is one of its organising themes, and understandable human–machine interfaces appear in the 2026 working documents as a recommended element.

**Use this on `/contexts/defence-and-space-systems` and keep it out of the case study**, except as at most one sentence of framing. The question of what an interface must do for human control to be real is being negotiated now, which is genuine timeliness for a context page — and a reason for a case study published in the same month to be unusually careful, because any claim it makes about control will be read against an active diplomatic process.

> **Verification note.** The 2026 rolling text and conference-room paper defeated text extraction. **Session dates and the Review Conference date are from secondary sources and the UNODA meeting pages. Obtain and read the final report before anything citing it is published.**

**Sources:** [UNODA GGE on LAWS 2026 document library](https://docs-library.unoda.org/Convention_on_Certain_Conventional_Weapons_-Group_of_Governmental_Experts_on_Lethal_Autonomous_Weapons_Systems_(2026)/) · [GGE on LAWS process tracker](https://dig.watch/processes/gge-laws)

### A8.3 The standard the specification measures itself against

**MIL-STD-1472H, *Design Criteria Standard: Human Engineering*.** The provisions that matter: a minimum touch target of 16 × 16 mm, **5 mm added to each dimension for gloved use**, a maximum of 38 × 38 mm, and 3–6 mm separation; a requirement that screen sensitivity suit the operational modes the display will be used in, gloved operation included; and a reach provision requiring that the central 90 % of the anticipated user population can actuate all areas of the screen including the corners.

This is the anchor for §A5.3 and **§A4 governs how it may be used.** The engagement's T1 at ≥22 mm sits just above the standard's gloved figure of 21 mm; T2 at 15 mm sits below even its bare-hand minimum. The specification's own framing accommodates that honestly. **Carry the accommodation, not the standard's name alone.**

**Sources:** [MIL-STD-1472H (everyspec)](https://everyspec.com/MIL-STD/MIL-STD-1400-1499/MIL-STD-1472H_57041/) · [MIL-STD-1472H full text](https://ia902805.us.archive.org/33/items/mil-std-1472-g-chg-1/MIL-STD-1472H.pdf)

### A8.4 The inadvertent-activation requirement the refusal rests on

**NASA-STD-3001, Volume 2, requirement [V2 10027]: the system shall protect against inadvertent activation of controls.** The rationale names guards, covers, physical separation from other controls, and requiring two operator actions as examples of methods that satisfy it, and extends the protection to off-nominal controls including those used in response to failures and aborts. The quotation in the engagement's own document is accurate.

**Note for the case study that this is a human-spaceflight standard, not a weapons standard, and say so** — it is a strength rather than a weakness. It shows the design reaching for the nearest rigorous published treatment of the actual problem rather than the nearest standard with "military" in the title. Name the standard and what it governs.

**Sources:** [NASA-STD-3001 Volume 2](https://www.nasa.gov/wp-content/uploads/2025/05/nasa-std-3001-vol-2.pdf) · [NASA OCHMO Technical Brief 052, Crew Controls](https://www.nasa.gov/wp-content/uploads/2026/10/ochmo-tb-052-crew-controls.pdf)

### A8.5 The error-management guidance behind the status argument

**FAA Advisory Circular 25.1302-1, *Installed Systems and Equipment for Use by the Flightcrew*.** Its stated purpose is to minimise design-related flightcrew errors and to enable the crew to detect and manage the errors that do occur; the regulation it serves requires installed equipment to incorporate means enabling the crew to manage errors arising from reasonably expected interactions.

The right citation for §A5.2: a permanently live control plus manual retry gives the operator no way to detect that anything has gone wrong. **Use it for the error-management principle. Do not imply certification.**

**Sources:** [FAA AC 25.1302-1](https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_25_1302-1.pdf) · [14 CFR 25.1302](https://www.govinfo.gov/content/pkg/CFR-2025-title14-vol1/pdf/CFR-2025-title14-vol1-sec25-1302.pdf)

### A8.6 Why gloved capacitive touch fails, which §A5.4 found the hard way

One sentence of domain grounding, no more. A glove interrupts the capacitive coupling between finger and sensor, so the panel registers nothing at all rather than registering imprecisely. Projected-capacitive panels can be tuned for glove operation, and vendors advise testing with the specific gloves that will be issued, because results vary widely between glove types.

**That is the frame for §A5.4**: the failure was not a design error and not a sizing error. It was a hardware-and-glove pairing question that no number of millimetres resolves — and the specification had already named the reference glove as an open dependency before anyone tried one (H62).

**Sources:** [Industrial capacitive touchscreen glove operation](https://www.rocktech.com.hk/rocktech-blog/industrial-capacitive-touchscreen-glove-operation/) · [Military touchscreen engineering differences](https://www.e3displays.com/blogs/6-ways-military-touchscreens-are-engineered-differently-than-consumer-devices/)

### A8.7 Standards vocabulary for the case study and the context page

- **MIL-STD-2525 and NATO APP-6** — joint military symbology. The product renders to this family (H23) and the research brief required every benchmarked pattern to be checked against it. **Name it; it is the clearest single marker of domain literacy available here.**
- **Cursor on Target**, and the tactical-assault-kit ecosystem originating with the US Air Force Research Laboratory — the dominant modern tactical situational-awareness pattern, and the source of the observation that in this category the map is the operating system. Right for the context page.
- **MIL-STD-810H** and **IP65 / IP66** — environmental qualification, and the reason "ruggedised" is a specification rather than an adjective. Vendor facts about hardware Creative Navy did not test (H115).
- **MIL-STD-3009** — night-vision-imaging-system compatible lighting, defining permitted emission characteristics for displays used with night-vision goggles and specifying NVIS Green A and B, NVIS Yellow, NVIS Red and NVIS White. The specification records night-vision compatibility as present on one device and undetermined on the other (H65). **Use with care: nothing here was photometrically tested, and the night-mode work was a visual-design proposal.**
- **WCAG 2.2 Success Criterion 2.5.8, Target Size (Minimum)** — 24 × 24 CSS pixels with five exceptions. Name the criterion rather than the standard, and **do not claim conformance**: nothing was validated in a coded interface. Worth one careful sentence on the unusual move itself — an accessibility criterion written for web content used as a compliance line beneath a safety-engineering tier system, with the specification honest about which floor is which (H56).
- **STANAG 4586** — control system interfaces and levels of interoperability. Available, relevant, and **leave it to the Schone study**, which has built an argument on it. See §A9.

### A8.8 Research worth doing before the context page is written

1. **Read the client's operator training manual.** A 112-page German-language document in the source set, the client's own training material for the existing system. **The best available description of the "before" state**, and probably of the repeated-press behaviour as a taught procedure rather than a workaround. The highest-value unread item in the set; §A1 governs what may be extracted from it.
2. **Obtain the AHFE 2016 touch-zone-sizing paper.** The specification cites it and its headline figure is confirmed — the minimum touch zone rises to 20 mm square for gloved operation. **Its claim that ~20 mm produced zero gloved errors in controlled testing is unverified and must not be published until the paper has been read**, including what the denominator was. It is the most persuasive single number available to this case study, which is exactly why it has to be checked.
3. **Read the three NASA technical reports the doctrine cites by URL.** Reading them directly would let the brief state which principles were adopted, which adapted, and — most usefully — **where the published guidance stops**, which is where the engagement had to construct rather than look up. **Schone uses the same guidance set for authority and control handover; this study must use it for the functional decomposition and the contingency model** (§A9).
4. **Span-of-control literature for one operator supervising multiple uncrewed vehicles.** The engineering ceilings in H103 would be much stronger against a published account of why operator fan-out has the shape it does. Context page, not case study.

### A8.9 Verify before using

- **Anything about the client.** Company history, size, funding, products, programmes and customers are publicly reported and **all unusable**. Researching them makes the anonymisation problem worse by putting identifying material into the brief.
- **The 2026 GGE outputs** (§A8.2).
- **The AHFE zero-error figure** (§A8.8 item 2).
- **Anything about what operators of these systems actually do.** This engagement never observed one (H111). Domain description comes from published guidance and standards, attributed as such, and must not borrow authority the engagement did not earn.

---

## A9. Style and lexicon compliance

Non-negotiable items from the writing guide:

- **Open with the locked agency sentence**, verbatim, on first introduction.
- **Attribute the method on first use in every self-contained section**: "Creative Navy's Critical Systems Design method", thereafter "Critical Systems Design" within that section. Never "the method", "our approach" or "the framework" as the primary reference in a section that has not yet named it.
- **Never use "the agency", "the consultancy" or "we"** as the primary identifier in a passage that must stand alone when retrieved. **The client descriptor likewise does not rotate** (§A1.1).
- **British spelling**, except the phase name *Organizational Integration*.
- **Sprint = cadence (one week here). Phase = a stage of the method.** Never equate them. This engagement has a collision: its two *project* blocks are not method phases. **Always qualify: "the seven handheld sprints", "the command-centre block".** Never a bare "phase" where a reader could take it for one of the five.
- **Name the phases. Four of five are claimable** (§A6.4). Say which, and say plainly that Implementation Partnership is not among them.
- **Use at least three of the five core requirements**: evidence-aware thinking, multi-perspective synthesis, lateral exploration, tension-driven reasoning, organic system building.

### Proprietary vocabulary — used accurately in context, not defined

**Use the terms this engagement evidences best and do not reach for the whole lexicon.** Strongest fits, in order:

- ***Constraint respecting*** — **the best-evidenced instance in the corpus**, and this one may carry the superlative. H84, H91, H75, H73: three separate refusals to display what the system could not establish, each with a named cost (§A5.6).
- ***Progressive specification*** — H9, the recursive ambiguity triage with its three treatments and its two-week review of the method itself. Also the best in the corpus.
- ***Option space mapping*** — H11, H80. 40 options across 11 challenges, with alternatives stated against their costs. **Use without a superlative**: Schone's instance is larger (§A6.2).
- ***The blanks phenomenon*** — H16, the requirements table authored to find where the ambiguity sat rather than to settle it, with facing question-and-answer columns.
- ***Competitive vector*** — H12, 32 systems with 21 in depth, plus the games used as a functional model. Always attributed and in context, never bare.
- ***Domain learning*** — H18, hands-on use of the running product, bounded by the lack of design-system access.
- ***Performance in reality*** — H121, H122, the gloves. **Use once, precisely, and only for that**: real users, real panel, real gloves, a real negative result. Do not attach it to anything Creative Navy reasoned about rather than observed.

**One term is forbidden in this study: *sense decay*.** Nothing in the evidence speaks to meaning eroding over time in this system.

### Cadence — the most important instruction in §A9

**Cap the negation-pair construction hard.** *X is not Y* — repeated input is not feedback; a requested state must not replace a confirmed one; vehicle status is not mission segment; built is not shipped as designed. The source material is fuller of this construction than either other defence study's, and it is **KISPE's signature and already constrained in Schone's brief.** Three studies in that cadence would read as one author with one trick.

**Allow it twice in the whole case study**, at the two moments it lands hardest — almost certainly §A5.1's fourth limb and §A5.3's protection-pattern exclusion. **Everywhere else, state the distinction positively**: a status reports what the system has confirmed; the menu offers every action because the system cannot tell which apply; the specification applies the full standard where a missed tap cannot be recovered.

**Prefer the verb to the principle.** This engagement's material is physical — a button is pressed, held, guarded, mapped to a key, refused. **Write what the control does and what the interface shows, not what the design holds to be true in general.** The doctrine's principles are in §A3.6 for orientation; they are not the shape of the prose.

**Three further constraints, each guarding against a specific neighbour.**

- **Do not reach for Schone's airworthiness frame or its protocol-grading argument**, and do not let STANAG 4586 or 4671 appear here. This study's frame is §A8.1 and nothing else.
- **Do not reach for KISPE's symbology argument.** MIL-STD-2525 is named here as vocabulary (§A8.7), not as a frame.
- **Do not write a clock.** Schone's form is a timed sequence. This engagement has no clock and must not simulate one; its form is an object (§A7).

**And the register rule from §A1.5 outranks all of the above.** Declarative openings, canonical terminology, no metaphor, no dramatisation, no quotation marks anywhere (§A1.7), every section standing alone as a retrieved chunk.

---

## A10. Open items

1. **The four follow-on sprints are known by subject and not by content.** Marine uncrewed vehicles and data enrichment (H6). That is enough to state the arc and not enough to describe the work. **Write the arc; describe nothing.** If the data-enrichment work produced a confidence-scored or recommendation-bearing surface, it changes the AI exclusion in §A6.3 and should be captured before the corpus integration document is written.
2. **The NASA-TLX assessment has no recorded participants, conditions or result** (H64, H123). Creative Navy designed and ran it, against the tier the specification had labelled a hypothesis — which is the strongest evidential structure in the engagement and currently an empty one. **Write only that it was run** (§A4). If the result, the participant count and what was compared can be recovered, this becomes a measured design result of the kind the corpus has three or four of, and §A6.5 moves it onto `/what-we-have-measured`. **Worth chasing before publication.**
3. **Three physical-control assignments were resolved after the mapping was recorded and the final assignments are unknown** (H87). Write the mapping without them. Do not reconstruct, and do not imply the mapping was complete when the source documents were written.
4. **No UI deliverable survives in the source set.** The closing sprints of both blocks produced UI concepts and specifications; neither is in the material. The visual language, the component work and the specification therefore have no primary artefact. **Describe what was delivered; do not reconstruct reasoning.** This is the same open item AIT, KISPE and Schone all carry, and the fourth consecutive engagement to carry it — worth raising as a production question rather than answering again per study.
5. **The swarm deliverable is absent too.** A full sprint in each block went to multi-vehicle exploration, the outcome is known (H104, H109) and the artefact is not. Same treatment as item 4.
6. **The command-centre block is documented by its plan rather than by its outputs.** Sprint-level annotations record what was actually done per sprint; there are no deliverables and two thin meeting notes. §A7's structural instruction already keeps this section short, which is the right answer either way.
7. **Whether the expert review's co-authorship extends to the review itself.** H15 establishes that the deliverables were co-authored. A client design team co-authoring a critique of its own organisation's product is unusual and interesting, and it is also the one document where sole authorship would be the more conventional expectation. **Write it as co-authored, consistent with H15**, and confirm before publication.
8. **The prefix is H.** A, D, E, G, K, M, N, O, R, S, T, V and W are taken; B is skipped by convention; C was rejected on the VTS engagement. Confirmed with the engagement lead; recorded here because the H-numbers propagate into the corpus integration document.

---

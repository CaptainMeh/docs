# Schone Airspace Group — Mission Control: full writing brief

> **Purpose.** Everything needed to write the Schone Airspace Group case study and to update the existing content corpus from it. Written to be handed to a writer with no access to the source material or the conversations that produced it.
>
> **§A3 is a numbered evidence bank.** Every instruction in this document cites it by number, and the same **D-numbers** are to be used in the corpus integration brief. Do not introduce facts about this engagement that are not in §A3.
>
> **Corpus integration.** Everything that changes on other pages because of this engagement belongs in a corpus integration document. **Part B of this file is a specification of what that document must be given**, not a substitute for it. The two share the evidence bank verbatim.
>
> **Companion documents:** `industrial-writing-brief.md` (industrial process control, prefix **E**), `streetec-writing-brief.md` (**S**), `ait-writing-brief.md` (**A**), `mdu-writing-brief.md` (**M**), `assemblio-writing-brief.md` (**N**), `topera-writing-brief.md` (**T**), `egma-writing-brief.md` (**G**), `oceaneering-dispatch-panel-writing-brief-FINAL.md` (**O**), `visioncheckout-writing-brief.md` (**V**), `kispe-writing-brief.md` (**K**). This engagement uses prefix **D**. Never let facts migrate between them: they are different clients, industries and evidence classes.
>
> **This is the corpus's second defence engagement, and it shares KISPE's new pages.** It files under `/evidence/case-studies/defence-and-space` with primary context `/contexts/defence-and-space-systems` — both created by the KISPE change set. See §A6 for the coordination this requires and §A2.1 for the territory this study owns.
>
> **The two defence studies share a method, and that is the point.** Both ran sixteen one-week sprints in a four-seven-five split with a six-person team, because that is the shape Creative Navy's Critical Systems Design method takes on an engagement of this size — the same shape recurs across the corpus and a reader who notices it is noticing something true about how the agency works. Shared structure is evidence of a method. **What must not be shared is language.** This brief has been built so that following it cannot produce KISPE's prose: a different thesis (§A2), a different angle set ranked by what only this engagement can supply (§A5), a different external frame (§A8.1), a different narrative form (§A7), and an explicit cadence rule (§A9). Those are not stylistic preferences; they are the reason two studies about one method read as two studies.
>
> **Read §A4 before writing a sentence.** This engagement has the strongest evidence base of any study in the defence pair and one of the strongest in the corpus: primary research with nine end-customer operators, an operator-executed acceptance evaluation, a documented before-and-after on Creative Navy's own criteria, a seven-month design-fidelity comparison across every delivered screen, and four engineering integration gates closed. Every one of those is also the kind of claim that inflates easily. §A4 is where the ceilings are.

---

# PART A — THE CASE STUDY

## A1. Handling rules

### A1.1 What may be named

**The client is named Schone Airspace Group.** Use that name near-identically on every mention, per the entity-consistency rule. Do not rotate it, do not abbreviate it, do not substitute "the client" as the primary identifier in a passage that must stand alone when retrieved.

> **Flag for the engagement lead, not for the writer.** Public sources show an existing European counter-drone and airspace-security vendor trading under a closely similar name. The engagement lead has been shown this and has confirmed the name regardless. **Write to the rule as given.** The question has been raised once and is closed; do not reopen it in the copy, in a footnote, or in a query to the lead.

**Nothing else may be named.**

| Do not use | Use instead |
|---|---|
| The product's real trade name, and any version designation | "Mission Control", lower-case descriptive use only — never a version number |
| The cloud streaming platform's product name | "the client's cloud streaming platform", "the remote streaming service" |
| Any aircraft model or airframe designation | "the aircraft", "a connected aircraft" |
| Any end customer, operator organisation, agency or programme | omit entirely — do not gesture at one |
| Named individuals on either side | role descriptors only — "the client's product owner", "a remote pilot", "Creative Navy's interaction designer" |
| The synthetic demonstration site's name | omit, or "a synthetic demonstration site" |

**The cloud streaming platform is the easiest thing in this brief to leak.** It carries its own product name in the source material, it appears on roughly a quarter of the screens, and it is a real searchable product. Every mention must be replaced. Its design role — a video distribution service whose connectivity state is deliberately kept separate from the aircraft control link — survives the substitution intact and is one of the better small decisions in the engagement (D88).

**There are no quotes.** No client or operator speech is on record and no passage has been cleared (D97). **Write no quotation marks anywhere in this case study, and no reported speech either.** Where a client or operator position is described, attribute it to the role and the artefact it came from — "the client's partner brief asked the agency to challenge the product concept", "remote pilots described the distinction in the walkthroughs" — never to a speaker and never as something said.

### A1.2 What may not be shown

**No screenshots, wireframes, design images, plates or redrawn diagrams.** The corpus is text-only on documentation pages. The source material contains eight annotated before-and-after comparisons, a schematic console composition and a quantity of structural wireframes; **none may be published in any form, including as redrawn diagrams or ASCII approximations.** Describe the designs in prose.

This matters more here than in most studies because the before-side of the eight comparisons is a rendering of the client's own interface. Reproducing it would publish the client's product, not Creative Navy's work.

### A1.3 Dates

**No dates at all, from any source.** No years, no months, no seasons, no calendar dates. Sequence and duration only — "sixteen one-week sprints", "a four-sprint exploration phase", "across seven months", "a twelve-month retainer".

**This has a second application unique to this engagement.** The source material is built around a fixed demonstration scenario with wall-clock times attached to every event, and a recorded review session carrying a calendar date and a date-stamped export filename. **The calendar date and the export filename are discarded. The wall-clock times are converted to intervals and the intervals survive, because they are the design argument.** §A3.8 gives the fixture as intervals, already converted. Use that table and never reach back for a clock time.

So: *"the request was acknowledged three seconds after it was sent, while the aircraft was still reporting its previous flight mode, and a further three seconds passed before fresh telemetry showed the new one"* — correct, and it is the whole point. *"the request was sent at 14:07:03"* — forbidden.

Durations are not dates. "Seven months" and "twelve months" are permitted and load-bearing (D91, D4).

### A1.4 Status

**The product was built, and it is in test** (D90). That may be stated plainly, in those terms.

**It is not deployed and not in operational use.** Nothing may imply that aircraft are being flown operationally through this interface, that it is in service with any customer, or that it has an operational record.

**A design-fidelity comparison exists and it is Creative Navy-verified** (D91). This is an AIT-class claim and it is the strongest fact in the engagement. §A4 governs its exact wording. It is also the claim most likely to be overwritten into something false, because the honest version already sounds strong and the false version sounds only slightly stronger.

---

## A2. The engagement in brief

Schone Airspace Group set out to improve the ground control station through which its uncrewed aircraft are planned, supervised and reviewed — a single desktop console covering geographic mission planning, preflight readiness, live flight supervision, camera and payload operation, supervision of several connected aircraft at once, and review of recorded flights. The client's own brief asked for advice on the operating model as well as design work, named the four questions it wanted resolved, and explicitly asked the agency to challenge the product concept and recommend the scope and sequence of work rather than accept a predetermined list of screens.

Creative Navy worked across **sixteen one-week sprints in three phases**: a **four-sprint exploration phase**, deliberately consultative, which set the scope for everything after it; then **seven UX development sprints**; then **five UI delivery sprints**. A six-person team ran it, with stable composition throughout. Exploration produced 15 design challenges, 45 concept alternatives in 85 low-fidelity frames, six cross-system design principles and an agreed scope — and converted into the twelve-sprint programme that followed. UX development produced six operator journeys across 54 screen states, 12 interaction contracts, 12 state models covering 58 states, 25 decision records and a documented evaluation in which the first design candidates failed 18 of 36 scripted checks and the revised design passed every check decidable at interface level. UI delivery produced those 54 states as production screens, a design system of 28 component families and 119 named variants, and a machine-readable handover package. A twelve-month retainer at biweekly involvement followed, during which the design team compared every delivered screen against the built software.

**The requirement that shapes everything: this console issues consequential commands to aircraft that are already in the air, and the operator cannot see what they are commanding.** Return-to-launch, land, a change of flight mode — each is an instruction handed to a physical object several kilometres away, carried by a radio link, interpreted by a protocol, and acted on by an aircraft that reports back in its own time. The interface is the only custodian that instruction has. Its work is to keep hold of who issued what, to which aircraft, with what authority, and how far along that chain the instruction has actually travelled — and to keep holding it for as long as the answer is still open.


### A2.1 The territory this study owns

**Write this study for what only it can prove.** Four things here exist nowhere else in the corpus, and they are what the case study is for:

1. **A consequential-command interface.** This product tells aircraft to do things. The chain from intention to physical act — recipient, authority, dispatch, receipt, execution, evidence of execution — is the subject matter, and no other engagement in the corpus has one. Every study that reasons about information reaching a screen is reasoning about a different problem from a study about an instruction leaving one.
2. **A published failure rate.** The first design candidates failed eighteen of thirty-six checks written in advance, nine of them critical, each defect named and traced to the decision that fixed it (D41–D43, D47).
3. **An evaluation re-run by the people who do the job.** Five of nine end-customer operators, seven of whom are remote pilots, re-ran the same fixed criteria (D31, D36).
4. **A delivery that was still being checked seven months into the build**, screen by screen, against named deviations, with four engineering integration gates specified in advance and subsequently closed (D50, D51).

**And one thing it owns by form rather than by fact.** The material here is a sequence: a link degrades, values age, the operator looks, the operator retargets, the operator decides not to act, and three seconds later an acknowledgement arrives that does not mean what it appears to mean. **This study has a clock.** §A7 turns that into the structural instruction, and it is the single strongest guard against the case study reading like anything else in the corpus.

---

## A3. Evidence bank

### A3.1 Engagement record — stateable as fact

- **D1** — **Sixteen one-week sprints in three phases**: four exploration, seven UX development, five UI delivery.
- **D2** — **Six-person team**: UX designer, UI designer, project manager, product designer, researcher, interaction designer. **Composition was stable across all three phases.**
- **D3** — **The exploration phase was consultative and scope-setting.** Detailed UX and UI scope was confirmed at its conclusion, not before it. The client was asked to decide what to commission after seeing the analysis.
- **D4** — **The four exploration sprints converted into the twelve-sprint programme, which converted into a twelve-month retainer at biweekly involvement.** This is the commercial arc and it may be stated plainly.
- **D5** — **15 design challenges** defined and explored across four areas: core architecture, priority planning, high-consequence operation, and supporting operations.
- **D6** — **45 concept alternatives across those 15 challenges, represented in 85 low-fidelity frames** — three alternatives per challenge, consistently. The counting convention was documented as part of the deliverable: one frame is one distinct screen structure or meaningful operating state; label and spacing revisions are not counted separately; shared instruments, maps and panels were reused rather than redrawn as independent designs.
- **D7** — **Exploration ran to a defined sprint shape.** Sprint one: the system and operator model — 2 challenges, 6 concepts, 12 frames. Sprint two: mission preparation — 5 challenges, 15 concepts, 28 frames. Sprint three: live mission operation — 4 challenges, 12 concepts, 23 frames. Sprint four: multiple aircraft and continuity, then consolidation of the interaction architecture — 4 challenges, 12 concepts, 22 frames.
- **D8** — **Creative Navy had hands-on access to the live product** and drove the running system during the engagement.
- **D9** — **Six cross-system design principles** produced at the end of exploration, each stated with its practical implication: keep the aircraft identifiable; distinguish intent from observed state; keep critical information stable; make uncertainty visible; match controls to available capability; support work across interruptions.
- **D10** — **Four operational scenarios used to test the exploration direction in combination rather than in isolation**: planning a survey over uneven ground; switching from flight monitoring to visual inspection; a warning concerning another connected aircraft; reviewing a mission that ended early.
- **D11** — **Six canonical operator journeys across 54 screen states**: survey planning 12, aircraft readiness 7, flight supervision 10, camera observation 8, multiple aircraft 10, recording and review 7.
- **D12** — **12 principal interaction contracts.** Each specifies the initiating action, the state transition, the visible result, the required source inputs, **the exception behaviour**, and the conditions by which the design can be checked.
- **D13** — **12 operational state models covering 58 defined states** — workspaces, readiness, control link, telemetry, eligibility, commands, flight mode, alerts, fleet selection, camera, streaming, review. The counts describe distinct interface conditions, not aircraft, screens, alerts or protocol events.
- **D14** — **25 UX decision records.** Each carries the decision context, the resolved direction, **two named rejected alternatives with the reason each was rejected**, the operator actions and system responses that follow, a concrete operational instance, **the design consequence and trade-off stated as a cost**, the engineering interface it depends on, and explicit acceptance conditions.
- **D15** — **10 information priority matrices specifying 97 individual information placements** on a four-level scale: operationally critical, task essential, supporting, reference. Organised by workspace and operating condition rather than by software subsystem.
- **D16** — **12 technical dependencies registered**, four of them critical: command acknowledgement and observed execution; command target, authority and eligibility; telemetry timestamp and freshness; warning taxonomy, ownership and clearing. Each record separates the required interface behaviour from the system capability needed to implement it.
- **D17** — **Four native integration gates specified** — terrain reference agreement; command request and observed result semantics; warning severity and lifecycle mapping; recorded session and media identity. Each carries a contract, a verification sequence, the evidence that would constitute a pass, **and the failure disposition — what the interface must do if the source cannot demonstrate the condition**.
- **D18** — **16 research findings, traced to 20 interface requirements**, each requirement naming the finding that produced it and the evaluation check that tests it.
- **D19** — **Eight operational invariants** stated as the binding acceptance core of the interaction specification, which UI styling and component substitution must preserve.
- **D20** — **54 production screens delivered in UI delivery**, matching the 54 UX states one-for-one.
- **D21** — **A design system of 28 component families and 119 named variants.** Each component carries content, state and source rules; visually similar conditions may not be collapsed where they communicate different operational meanings.
- **D22** — **Machine-readable handover accompanied the written specification** — a design token file, a component register, a screen register and an acceptance ledger, versioned together so component variants, screen content and state decisions can be checked against one release index.
- **D23** — **A handover protocol distinguishing two classes of change**: changes requiring UX approval (target selection, command lifecycle wording, last-known status semantics, warning acknowledgement, readiness completion, estimate revision, historical provenance, persistence of the live shell) and changes requiring engineering review (protocol event meanings, aircraft permission model, fleet size, payload commands, stream state, terrain datum, cache schema, recording keys). Plus a specified implementation sequence: build the shared command shell first, establish immutable aircraft and request identities, then connect per-aircraft timestamps and alert ownership.
- **D24** — **Reference console composition at 1440 × 900 px**: 64 px application header, 82 px persistent live command context, 70 px consequential command zone, 360 px contextual inspector. Documented behaviour at four narrower widths down to 1024 px. **Below 1024 px no pilot command layout was released**, and no claim of supported mobile aircraft control is made.
- **D25** — **Typographic and colour system**: a sans-serif interface face with a monospaced face reserved for timers, telemetry, timestamps and transaction identifiers; an eight-step type scale from 28 px display to 11 px micro-label; a nine-step spacing scale; **44 × 44 px minimum pointer target on command, modal and alert actions**; **a 3 px high-contrast visible keyboard focus ring**. A dark operational canvas for live flight workspaces and lighter structured surfaces for forms, tables and historical review — chosen after two single-tone directions were evaluated and rejected.
- **D26** — **Ten foreground-and-surface colour pairs calculated against their intended backgrounds.** All exceed 4.5:1; the lowest measured is 6.49:1 and the highest 16.91:1. The specification records explicitly that this does not substitute for verification against every map image or video frame, and that information placed over imagery sits on an opaque panel or a scrim.
- **D27** — **Every semantic colour carries a mandatory non-colour encoding** — a word, an icon, a line pattern or a border treatment. No critical information is encoded by colour alone.
- **D28** — **28 UI specification checks at final delivery, all passed**, covering typography, semantic distinctions, command region persistence, alert and source handling, form data correspondence, historical identity, focus behaviour and register completeness.
- **D29** — **Ten visual defects found and corrected during the integrated visual review**, including a command ribbon that lost aircraft identity at the narrowest supported width, an acknowledged alert that read as resolved, a terse telemetry age chip replaced with an explicit last-update statement, and an export success treatment that appeared before the file write completed.
- **D30** — **Eight annotated before-and-after comparisons**, pairing the existing interface with the developed design and recording, for each, the design decision, the baseline, why the change was made, the operational exception, **the trade-off accepted**, and the implementation boundary.

### A3.2 Research — what was done, and with whom

- **D31** — **Nine participants: seven remote pilots, one mission planner, one payload operator.**
- **D32** — **They were end-customer operators**, not the client's own staff.
- **D33** — **The method was interviews and design walkthroughs.**
- **D34** — **The sessions were conducted at the end of UX development.**
- **D35** — **Operator input fed the 16 research findings** (D18).
- **D36** — **The 36 scripted acceptance checks were run twice: first by Creative Navy, then by five of the nine operators.**
- **D37** — **Five operator role contexts were modelled** — remote pilot, payload operator, mission planner, fleet supervising operator, operations reviewer — described as responsibilities within an operation rather than as a fixed staffing configuration, because one person may hold several on a small flight and a larger operation may distribute them.
- **D38** — **Eleven recurring operator decision questions** were identified, each with the small cluster of information it requires and the place in the interface where that cluster must appear. Among them: am I editing the intended mission; is this a measurement or my own confirmation; which aircraft would receive an action now; what did the aircraft actually report after my request; how old are these values; which aircraft owns this warning; am I inspecting or changing the command target.
- **D39** — **Six information objects the operator must be able to tell apart**, each recorded with the failure mode that follows from confusing it: the mission record, the focused aircraft, the command target, the command transaction, the source telemetry, and the recording session.
- **D40** — **Seven terminology distinctions with functional consequences**, specified as the term to use and the term to avoid. Focused aircraft, not active aircraft. Command target, not selected. Command eligible, not ready. Last known, not live. Command acknowledged, not command completed. State observed, not success. Acknowledged, not resolved or cleared.

### A3.3 Evaluation and iteration

- **D41** — **36 scripted checks.** Each is defined by a fixed starting state, an operator action, an expected visible response and a pass rule.
- **D42** — **First candidates: 14 pass, 18 fail, 4 pending.**
- **D43** — **18 findings: 9 critical, 8 major, 1 moderate.** Each carries an identifier, a severity, the check it failed, the sprint in which it was revised, and the decision record that resolved it.
- **D44** — **The integrated retest: 32 pass, 0 fail, 4 pending.** Every check decidable at interface level passed.
- **D45** — **The four pending checks were pending at baseline and remained pending after retest**, and were deliberately not counted among the 18 resolved findings, because their acceptance depended on a source contract rather than a design revision.
- **D46** — **The closeout used two denominators on purpose.** 32 of 32 expresses the accepted interface specification; 32 of 36 expresses the full mixed design-and-integration check set. The source material states that the difference is not rounded away or treated as residual screen work.
- **D47** — **The nine critical findings, named.** Wrong aircraft interpretation; stale telemetry displayed as current; acknowledgement shown as a completed flight state; partial offline map coverage appearing complete; measured telemetry mistaken for a manual check; command recipient disappearing when the operator switched to the camera workspace; no response treated as a rejected command; a cross-vehicle warning with no visible owner; inspecting another aircraft silently retargeting commands; an uncertain link leaving return-to-launch looking available.
- **D48** — **The source material states the severity convention explicitly**: severity records the consequence of the interface ambiguity within the scripted task, not a claim that a corresponding aircraft incident occurred.

### A3.4 Build, fidelity and gates

- **D49** — **The product was built and is in test.**
- **D50** — **All 54 delivered screens were compared against the built software by the design team, across seven months. Deviations were found, and they are named.**
- **D51** — **All four native integration gates were closed.** The terrain and route elevations were demonstrated on a confirmed common vertical reference; aircraft-scoped command request, acknowledgement, rejection and observed-result events were demonstrated against the specified transaction model; alert owner, severity, acknowledgement and clearing events were demonstrated from the source; and flight session, aircraft, media and trajectory identifiers were demonstrated to form a traceable association.

### A3.5 What did not happen — must be stated, not omitted

- **D52** — **No competitive benchmarking.** No competing ground control station was examined in this engagement.
- **D53** — **No client or operator speech is on record.** No transcripts, no quotable statements, no reported speech.
- **D54** — **No contextual observation of live flight operations.** No field visits, no observation of operators flying, no timed task studies, no quantitative claims about operator populations. The research was interviews and walkthroughs (D33).
- **D55** — **No separate expert review or audit deliverable of the running system exists.** Creative Navy had hands-on access (D8) and the eight before-and-after comparisons are grounded in the real product, but no audit document was produced and no audit was separately scoped.
- **D56** — **Nothing was validated on ruggedised or field hardware.** The design is a desktop console at a 1440 × 900 reference (D24). There is no evidence about sunlight readability, gloved operation, vibration, outdoor use or any field device.
- **D57** — **No operational, mission, workload, error-rate, time-saving or commercial figure exists.** Nothing was measured in flight.
- **D58** — **No option-space count exists beyond D6.** There is no per-screen variant count, no UI style-direction count and no component-alternative count. Do not estimate one, and do not let another engagement's figures migrate here.

### A3.6 The client, the product and the users

- **D59** — Schone Airspace Group is a manufacturer of uncrewed aircraft whose ground control software plans, supervises and reviews flights across mapping, inspection and surveillance work.
- **D60** — The product is a desktop ground control station bringing together geographic mission planning, aircraft readiness verification, live flight supervision, camera and payload operation, supervision of several connected aircraft, and review of recorded flights — with a connection to a separate cloud streaming platform.
- **D61** — **The client's partner brief named four user populations**: remote pilots who prepare the aircraft, supervise automated flight and intervene when needed; mission planners who define routes, survey coverage and operating parameters; surveillance operators who work with live video, camera controls and target observation; and survey and inspection specialists who acquire consistent imagery and verify that an area or asset is covered.
- **D62** — **The brief named four questions it wanted the engagement to answer**: what should remain visible as operators move between planning, flight supervision and camera work; how the interface should communicate aircraft state, autonomy, warnings and command consequences; how one operator should manage different aircraft and payloads without unnecessary complexity; and where this product should end and the separate cloud platform take over.
- **D63** — **The brief asked the agency to challenge the client's assumptions** and to recommend the scope and sequence of work rather than accept a predetermined list of screens.
- **D64** — **The scope boundary, stated and held throughout**: the engagement covered interface structure, task behaviour, information priority and the clarity of operator control. It did not authorise and did not produce changes to aircraft control algorithms, autonomous safety behaviour, communication protocols, the separate cloud platform, or any flight safety certification activity.
- **D65** — **The application was organised around the operator's task rather than the underlying subsystem.** Planning and Review are top-level destinations. Flight, Camera and Fleet are peer views inside a persistent live operating environment. Readiness is a controlled transition between a prepared mission and a live session.

### A3.7 The design principles and invariants

- **D66** — **The eight operational invariants.** Separate inspection from command targeting. Separate interface selection from real authority. Preserve command transaction semantics. Preserve the age of information. Preserve warning ownership. Preserve context across workspaces. Separate live and recorded truth. No implied command during preparation.
- **D67** — **The eight non-negotiable interface rules recorded in the technical register**, which restate the invariants from the integration side: command requested, acknowledged and observed remain separate facts; aircraft focus never changes command target; an interface target selection never grants flight controller authority; telemetry freshness is scoped to its source aircraft and fields; alert acknowledgement never implies condition resolution; recorded data never appears as live data; stream availability never substitutes for control link health; unsupported capabilities are not represented as operational.

### A3.8 The demonstration scenario — expressed as intervals

- **D68** — **One synthetic scenario with a fixed clock, used by every artefact in the chain.** Every journey, every interaction contract, every state model, every decision record and every screen specification refers to the same site, the same three aircraft, the same mission and the same incident. This is what let the documents stay consistent with each other and what made the acceptance checks checkable rather than rhetorical.
- **D69** — **The aircraft fixture.** A first aircraft, airborne, flying a perimeter route under a guided flight mode, connected, 78% battery, and the current command target. A second aircraft, airborne on a separate yard-observation mission, in a loiter mode, connected, 61% battery, not the command target. A third aircraft, on the ground, idle, connected, 96% battery, held in reserve.
- **D70** — **The incident, as intervals. Use this table; the clock times are discarded per §A1.3.** The scenario moment is the baseline; everything else is relative to it.

| Interval | Event | Inspected aircraft | Command target |
|---|---|---|---|
| baseline | Normal operation | first | first |
| +20 s | Second aircraft reports a degraded control link; the warning names it as owner; the first aircraft is not relabelled | first | first |
| +27 s | The second aircraft's telemetry goes stale — its mode and battery become last-known values, labelled seven seconds old | first | first |
| +35 s | The operator inspects the second aircraft. Detail focus changes; the command target does not | second | first |
| +42 s | The operator takes an explicit, separately named target action. The command target changes; no aircraft command is generated and no flight authority is conferred | second | second |
| +50 s | The operator considers return-to-launch. The sample is thirty seconds old and the link is degraded; eligibility cannot be established; no request is dispatched | second | second |
| +75 s | The operator returns to the fleet view with target and warning history preserved | second | second |

- **D71** — **The responsive command branch, as intervals.** On a separate branch with a healthy link, a confirmation names the aircraft and the action; the request is sent; **an acknowledgement arrives three seconds later while the aircraft is still reporting its previous flight mode; and only three seconds after that does fresh telemetry report the requested mode.** Those two three-second gaps are the entire argument of the engagement, and they are the most quotable thing in the source material.
- **D72** — **A second responsive branch exists for the second aircraft after link recovery**, with a four-second gap to acknowledgement and a further four seconds to observed mode. It is explicitly not a continuation of the blocked request at +50 s, and the source material is careful that none of the branches converts the blocked action into a sent command.
- **D73** — **The planning fixture.** A six-vertex survey boundary covering 0.12 km². A grid scan at 80 m above ground level, 75% frontal overlap and 65% side overlap, producing a 3.8 km route, an approximately thirteen-minute flight estimate and approximately 180 images. **The preceding revision used 70% frontal overlap and estimated 163 images, and that figure belongs to the previous revision rather than to the current inputs.** At one inspected route point, terrain elevation is 104 m and planned height 184 m on one stated vertical reference. Map tiles covering the eastern part of the operating area are missing, so coverage remains incomplete even though the transfer operation reported completion.
- **D74** — **The readiness fixture.** Battery 78% and 15.7 V are sensed values. Airframe, payload mount and launch area checks begin unconfirmed and become confirmed only after a named operator action.
- **D75** — **The scenario is adversarial on purpose.** At the scenario moment one aircraft's link is degrading, its telemetry is ageing, a warning belongs to an aircraft that is not under command, the offline map is incomplete while reporting a completed download, and the planning estimate on screen belongs to a superseded revision. Every one of those is a trap the interface has to avoid walking into.

### A3.9 Design decisions and the reasoning behind them

**Architecture and continuity**

- **D76** — **Six task contexts within one persistent operating shell**, over two named alternatives. A single configurable dashboard required repeated arrangement of map, video, configuration and history and made critical content placement inconsistent. Wizard-only navigation failed because planning and operational tasks are not one sequence and operators need direct return paths. **The accepted cost was named: the navigation structure is larger than a single dashboard, in exchange for each screen having a more predictable responsibility.**
- **D77** — **A persistent live command shell with fixed positions** for command target identity, last reported flight mode, battery, control link state, telemetry freshness and consequential actions. Workspace changes alter the centre content, never the location or meaning of the command region. The rejected alternatives were a per-screen toolbar, which lets a camera or fleet layout move the same command somewhere else, and a hidden safety drawer, which adds a search step at the moment the operator needs to act. **The accepted cost was named: the shell reserves screen space that cannot be given to the map or the video.**
- **D78** — **Mission identity persists across preparation and flight.** The mission, its assigned aircraft and its active plan revision resolve from the assigned mission record, never from the last inspected aircraft. Rejected: creating a new task object on every screen, and inferring history links from the last active aircraft. **The accepted cost: explicit identifiers add metadata to views, in exchange for context that is not reconstructed from memory.**
- **D79** — **Entering the live workspace is a navigation action, not a takeoff, arming or mission-start request.** A separate named control and response is required for any of those.

**Planning**

- **D80** — **Calculated outputs are bound to the survey revision that produced them.** Rejected: leaving previous values visible as current, and suppressing estimates altogether. **The accepted cost: explicit calculation status adds a short wait state rather than hiding it behind a stable-looking number.**
- **D81** — **The terrain profile and the map share one route-point selection.** Rejected: a chart-only terrain review, and a clearance safety badge. The profile communicates a terrain relationship and does not certify obstacle clearance — building structures, power lines and temporary obstructions may not exist in the underlying model, and the interface says so rather than implying a safety guarantee. **The accepted cost: linked selection requires reliable route indexing and a consistent altitude reference.**
- **D82** — **Offline map coverage is a geographic question, not a download state.** A completed transfer cannot demonstrate coverage where part of the operating region lacks verified tiles, so the missing region is drawn and the coverage is labelled incomplete independently of transfer progress. **The accepted cost: a dedicated cache step, in exchange for a preparation result that means something.**
- **D83** — **Measured aircraft conditions and operator confirmations occupy separate groups with separate completion semantics.** A positive battery reading never completes a physical inspection; an operator's tick never becomes an automatic validation. Rejected: auto-ticking visible measurements, and a single ready toggle. **The accepted cost: more explicit completion steps trade some speed for an auditable distinction between observation and judgement.**

**Command evidence — the centre of the engagement**

- **D84** — **Every consequential command names its intended aircraft in the immediate action context**, including in the confirmation heading. Rejected: an implicit current aircraft, and aircraft identity in the header only. **The accepted cost: repeated target labels consume space, in exchange for rapid recognition of exactly what a consequential action addresses.**
- **D85** — **A seven-state command transaction model**: ready to request, request sent, awaiting response, command acknowledged, state observed, request rejected, response unknown. Each has its own required source evidence and its own prohibited inference, recorded side by side. Acknowledgement does not mean the intended mode has been observed; state observed cannot be inferred from acknowledgement alone; rejection cannot be inferred from silence. Rejected: a success toast on click, and a spinner until the mode changes. **The accepted cost: more command states require precise copy and event matching, in exchange for less ambiguity about the outcome of each action.**
- **D86** — **A transaction keeps the aircraft it was dispatched against.** If the operator inspects or targets a different aircraft while a request is pending, the pending request keeps its original recipient, action and request identifier, and the new target does not rewrite history.
- **D87** — **Silence is an unknown result, not a failure.** A response window that elapses without a conclusive event produces an explicit unknown state that retains the target, the action and the request identifier, and triggers no automatic retry. **The accepted cost was named and is the sharpest self-criticism in the package: unknown is less reassuring than a binary outcome, but it is accurate and it supports a deliberate subsequent check.**
- **D88** — **Control link condition and telemetry freshness are independent fields.** A degraded link and a stale sample are different facts with different display semantics, and a value that has stopped updating keeps its last value alongside its age rather than being relabelled as current or hidden. **The accepted cost: two indicators take more room than one badge, in exchange for the operator not over-reading a simplified status.**
- **D89** — **An uncertain aircraft state blocks an optimistic command display.** Where link condition and sample freshness cannot establish eligibility, the action shows availability as unknown rather than as ready. **The accepted cost was named: the design sacrifices apparent immediate availability in uncertain conditions in order to preserve the accuracy of command affordances.**

**Fleet, attention and ownership**

- **D90** — **The inspected aircraft and the command target are independent variables with distinct visual treatments** — a double solid outline and a labelled badge for the target, a dotted outline and a separate badge for inspection, both able to appear at once on the same card. Rejected: one generic selected state. **The accepted cost: two highlighted identities are visible simultaneously, adding complexity in exchange for safer separation of operator intent.**
- **D91** — **Changing the command target requires a named, explicit operator action**, which changes the recipient and sends no aircraft command. **The accepted cost was named plainly: one additional explicit action is required to operate a different aircraft, and this is deliberate friction.**
- **D92** — **An interface target selection never confers flight-controller authority.** Eligibility and command-channel permission are independent checks resolved outside the interface. **The accepted cost: the distinction requires an extra status label, in exchange for not using one selected icon to stand for several unrelated system permissions.**
- **D93** — **Every alert names its owning aircraft or service in its first visible line**, and keeps that owner in the fleet card, the inspector, the live notice and the history. **The accepted cost: owner information is repeated in compact alerts, trading text density for precision.**
- **D94** — **Acknowledging a notice is an attention state, not a clearing event.** Acknowledged-and-active remains an explicit combined state, and only a source clearance event moves the condition to cleared. A critical banner never takes on a success tone because the operator has seen it.
- **D95** — **Payload controls follow the connected payload's reported capability set** rather than a fixed list of always-visible buttons, and unsupported functions appear as unavailable rather than as working controls with no effect. Rejected: showing every known camera command, and hiding the whole control panel when video fails. **The accepted cost: conditional control surfaces require a reliable payload capability description.**
- **D96** — **Camera work takes visual priority without displacing flight information.** Video becomes the dominant surface while the command target, flight mode, link state, telemetry age and consequential actions stay exactly where they were.

**Recorded evidence**

- **D97** — **Planned geometry, observed live position and recorded trajectory are three distinct layers** with distinct line treatments and labels, so a travelled route is never presented as proof of successful acquisition. **The accepted cost: two path layers increase legend and map complexity, in exchange for preserving a critical interpretation.**
- **D98** — **Recordings are organised by session where the underlying identifiers support it, and media without a reliable session association stays in an explicitly unlinked group** rather than inheriting the aircraft currently focused in live operations. **The accepted cost: not all recordings fit a mission-centred view, and explicit unlinked entries are preferable to false completeness.**
- **D99** — **The review context contains no live aircraft command actions**, uses historical session times rather than live freshness cues, and never changes the live command target on entry or exit.
- **D100** — **The cloud streaming platform's connectivity state is modelled separately from the aircraft control link**, with its own service states and its own warning ownership, so a stream outage is reported as a video service condition and never as a change in aircraft link health. **The accepted cost: a separate streaming state model increases interface terminology, in exchange for avoiding a serious source-attribution error.**

---

## A4. Evidence calibration — mandatory

**D1–D30 are engagement record and may be stated plainly, but they are not outcomes.** "54 screens were delivered" is a fact; "54 screens transformed the product" is not. The same applies to the 119 variants, the 97 placements, the 25 decisions and the 58 states. They describe the work, not its effect.

### The operator-run evaluation — the most important calibration in this document

**D36 is the strongest evidence in the engagement and the easiest to overstate.** Five of the nine operators executed the 36 scripted checks after Creative Navy had run them. Required framing:

> The scripted acceptance checks were run twice: first by Creative Navy, then by five of the nine operators who took part in the research. Each check fixes a starting state, an operator action and an expected visible response, and a pass means the interface stated the correct operational fact under that condition. The checks evaluate the design representation. They are not a measure of flight performance, operator proficiency, task completion time or error rate, and they were not conducted on a connected system.

Four things must not be attached to it. **It is not a usability test** in the sense of measured task performance — it is a criteria-based acceptance evaluation executed by domain-expert operators. **It is not a flight test.** **It is not evidence about a deployed system** — the product was in build. And **do not convert the pass count into a satisfaction or preference figure**: nobody rated anything.

**Do not write "32 of 36 checks passed" without the denominators explanation.** The source material deliberately carries both numbers and explains why (D46): 32 of 32 is the accepted interface specification, 32 of 36 is the full mixed set including four checks that depended on engineering evidence rather than design revision. Collapsing to one number loses the honesty that makes the figure worth citing. The correct construction is to give both and say what the difference is.

### The 18 findings — whose failures these were

**D42, D43 and D47 describe Creative Navy's own first design candidates failing Creative Navy's own criteria.** That is the point and it must be written as such, not softened into findings about the client's existing product. Required framing:

> The first design candidates failed 18 of the 36 checks. Each failure was given an identifier, a severity, the check it failed, the sprint in which it was revised and the decision record that resolved it. The revised design passed every check decidable at interface level.

**Severity records the consequence of the interface ambiguity within the scripted task — not that a corresponding aircraft incident occurred.** The source material states this explicitly (D48) and the statement must survive into the case study. A reader must not come away thinking nine critical aircraft events happened.

**This is also the corpus's best available instance of a design team publishing its own failure rate.** Half the first candidates failed. Write it plainly; it is the thing that makes the second number credible.

### The fidelity claim — AIT-class, with a hard ceiling

**D50 is the strongest outcome-adjacent fact in the engagement.** Required framing:

> All 54 delivered screens were compared against the built software by Creative Navy's design team across seven months. Deviations were identified and recorded by name.

Three things must not be attached to it. **It is not "shipped as designed"** — the comparison found deviations, and a fidelity comparison that names its deviations is a stronger artefact than one that claims none, so write the deviations in rather than around. **It is not evidence that the design is good** — a build matching a design says nothing about whether either works. And **it is not a deployment claim**: the product is in test (D49), and nothing may imply aircraft are being flown operationally through this interface.

**AIT is the comparison point and this engagement exceeds it.** AIT's Implementation Partnership is three scheduled progress reviews and eight support tickets across five months, and the corpus brief calls that the fullest instance across the earlier engagements. **This one is every delivered screen compared across seven months, alongside a twelve-month biweekly retainer, with four engineering integration gates closed.** That comparison may be made on the method pages. It may not be inflated into embedded day-to-day oversight unless the engagement lead confirms that is what the retainer was — see §A10.

### The four gates — an engineering result, not a Creative Navy test result

**D51 may be stated as fact, framed correctly.** The four gates were specified by Creative Navy with contracts, verification sequences, pass evidence and failure dispositions (D17); they were closed by the client's engineering functions. Required framing:

> Creative Navy specified four integration gates, each naming the source evidence required, the verification sequence, what would constitute a pass and what the interface must do if the source could not demonstrate the condition. All four were subsequently closed.

The useful claim is not "Creative Navy verified the protocol". It is that **the design named, in advance and in testable terms, exactly which of its own behaviours it was not yet entitled to assert — and then those conditions were demonstrated.** That is the distinctive thing, and it is checkable.

### Research calibration

**D31–D34 must be described precisely and must not drift.** Nine participants, seven of them remote pilots, drawn from end customers rather than the client's staff, through interviews and design walkthroughs, **at the end of UX development**.

**The timing is not a detail.** The sessions validated and corrected a developed design; they did not inform exploration. Exploration and most of UX development ran on task analysis, published human factors material, hands-on use of the live product and structured expert analysis. Writing this engagement as research-led discovery would be false. Writing it as having no user research — the KISPE and AIT pattern — would also be false. **The accurate statement is that research entered late and functioned as validation and correction**, and the 18 findings are what it corrected.

**Nine participants is qualitative.** No percentages, no prevalence claims, no "operators report that…" as a statement about a population. The source material already rules this out and the rule holds.

**D54 must appear, not be quietly omitted.** There was no contextual observation of live flight operations and no timed task study. The research tells you what nine operators understood from a design in a room; it does not tell you what they do in the field.

### Counts and migration

**D58 governs every count in the study.** The option-space evidence is D6 and nothing else — 45 alternatives in 85 frames across 15 challenges. Do not estimate a variant count for the 54 screens, and do not let KISPE's 36 alternatives in 64 frames, Streetec's nine main-screen iterations or any other engagement's figures migrate here.

**D52 removes an argument that would otherwise be easy to reach for.** No competing system was benchmarked. Do not characterise the competitive field, do not infer a competitive vector from a benchmark that does not exist, and do not borrow KISPE's three benchmarked systems. If a competitive argument is wanted, build it from D76–D100 — what this design does that the category does not.

### The scenario

**D68–D75 describe a synthetic fixture and must be described as one.** The aircraft, the mission, the site, the battery figures and the link failure are a designed test condition, not observations. They never represent a real location, operation, aircraft or incident. Describing the single-fixture discipline as a method decision (D68) is correct and is one of the stronger things in the study; describing the fixture as data is false.

### External research

**The standards and literature in §A8 frame the category, not this product.** No standard named there was certified to, audited against or worked to; no study cited there measured this product. Any phrasing implying otherwise is false. This matters more than usual here because the domain is one where the word "compliance" carries legal weight.

### What must not be claimed

- **Any flight safety, airworthiness, certification or regulatory credential.** The engagement's own scope statement excludes formal flight safety certification, and Creative Navy designed a control station interface, not an airworthiness case.
- Any change to aircraft autonomy, flight control algorithms, communication protocols, safety thresholds, recovery capabilities or the separate cloud platform (D64).
- Any operational, mission, decision-quality, time-saving, error-rate, workload or commercial figure. Nothing was measured in flight (D57).
- Any deployment, operational use, or use by military or government personnel. The product is in test (D49).
- **Any claim that the design prevents accidents, prevents wrong-aircraft commands, or reduces operator error.** The supportable claim is that the design makes specific distinctions explicit and that those distinctions were checked against scripted conditions by Creative Navy and by five operators. The step from "the interface states the correct fact" to "the operator therefore does the right thing" was not measured and must not be taken.
- Any field, hardware, lighting, glove or vibration claim (D56).
- Any characterisation of competing products (D52).
- Any audit or expert-review credential for this engagement (D55).
- Any quotation or reported speech (D53).

---

## A5. Positioning — the angles worth leading with

**Ranked by how much of this exists nowhere else in the corpus.** The first six are things no other engagement can supply. The last two are strong but have company, and must be written from this engagement's own material rather than from phrasing the corpus already uses elsewhere.

### A5.1 Three things that look like one — lead with this

A ground control station supervising several aircraft contains three concepts that every conventional interface collapses into a single highlighted row:

- **the aircraft you are inspecting**,
- **the aircraft that would receive your next command**, and
- **the aircraft you actually have authority over.**

Collapsing them is the normal thing to do, it looks cleaner, and it is how a selected state works in every list component ever written. It is also how an operator inspects a struggling aircraft and lands a healthy one.

This engagement separated all three. Inspecting changes the focused aircraft and nothing else. A separately named action moves the command target and sends no command. Authority is resolved outside the interface entirely, by the flight stack, and the console reports what it has rather than conferring it (D90–D92). The fleet card can carry both marks at once — a double outline and a labelled badge for the target, a dotted outline and its own badge for inspection — because at one point in the scenario the operator is looking at the second aircraft while the first is still armed to receive instructions.

It is also the finding the first design candidates failed. *Inspecting another aircraft silently retargets commands* was one of nine critical defects Creative Navy found in its own work and fixed (D47). The case study is stronger for saying so, and §A5.4 is where that story goes.

### A5.2 A command has a lifetime, and the interface is its custodian

The instruction an operator issues is not an event. It is an object with a duration: it is composed, dispatched, carried, received, acted on, and reported back — and for the whole of that span the operator is holding a question open about a machine they cannot see.

The design treats it as exactly that. A transaction is created with an immutable identifier and an aircraft bound to it at dispatch, and it keeps that aircraft even if the operator inspects or targets something else while it is still running (D86). It moves through seven named states, each carrying the source evidence required to enter it and the inference that entering it does **not** license (D85). And it persists across the live workspaces, because the question stays open whether or not the operator has changed what they are looking at.

**Two intervals in the scenario carry the whole argument.** The acknowledgement arrives three seconds after the request, while the aircraft is still reporting its previous flight mode. Three seconds after that, fresh telemetry reports the new one (D71). For six seconds an interface built on a success toast would have been showing an outcome it had no evidence for. Both rejected alternatives are named in the decision record: a success toast on click, and a spinner until the mode changes.

And when the question never closes, the design says so. An elapsed response window produces an explicit unknown that keeps the target, the action and the request identifier, and triggers no automatic retry — because an unreviewed retry of a consequential flight command is its own hazard. The decision record's own cost line is the best sentence in the source material: *unknown is less reassuring than a binary outcome, but it is accurate and it supports a deliberate subsequent check.*

### A5.3 Deliberate friction, argued for and written down

Designers are trained to remove steps. This engagement added one, on purpose, and recorded why.

Moving the command target to a different aircraft requires a separately named action that exists for no other reason. The decision record states the cost in its own words — **one additional explicit action is required to operate a different aircraft, and this is deliberate friction** — and accepts it, because the alternative is a product where a glance and a command look identical.

That phrase is worth building a section on, because it inverts the thing most readers expect a design agency to claim. The surrounding decisions do the same arithmetic out loud: repeated target labels consume space; two highlighted identities add complexity; an extra status label is needed to stop one icon standing for several unrelated permissions; explicit calculation status adds a wait state rather than hiding it behind a stable-looking number; owner information is repeated in compact alerts, trading density for precision; a persistent shell reserves space that cannot be given to the map or the video.

**Every one of those is a cost the design chose to pay, written down at the moment it was chosen.** Twenty-five decision records carry one (D14).

### A5.4 Half the first design failed, and five operators re-ran the tests

Thirty-six checks, each fixing a starting state, an operator action, an expected visible response and a pass rule, written before the designs were evaluated. The first candidates passed fourteen and failed eighteen — nine of them critical (D41–D43).

Every failure carries an identifier, the check it broke, the sprint that revised it and the decision record that resolved it. The revised design passed every check decidable at interface level. Then **five of the nine operators who took part in the research ran the same set again** (D36).

Three things make this worth leading a section with.

**The criteria were fixed first**, so there is no room to decide afterwards that a behaviour was acceptable. **The people who re-ran them fly these aircraft for a living** and came from end customers rather than from the client (D32). And **publishing a fifty per cent first-pass failure rate is what makes the second number worth anything** — half the first candidates were wrong, produced by a team that knew the domain, measured against criteria that team had written itself.

Almost nothing in the agency literature shows an iteration record with its failures still in it. This one does, at the level of the individual defect.

### A5.5 Four questions the design refused to answer — and then the answers arrived

Some of what this interface needed to say depended on facts only the client's engineering functions could establish: whether terrain and route altitudes shared a vertical reference; what the flight stack's acknowledgement, rejection and observed-mode events actually meant; what a warning's severity and clearing semantics were; and whether recordings, sessions, aircraft and media shared traceable identifiers.

The design did not guess at any of them. It specified four integration gates, each with **a contract, a verification sequence, the evidence that would constitute a pass, and the failure disposition — what the interface must do if the source could not demonstrate the condition** (D17). It then held four acceptance checks open against those gates and refused to count them as passes (D45).

**All four gates were subsequently closed** (D51).

That is a complete loop, and it is the rarest thing in the engagement. A design that names in advance, in testable terms, exactly which of its own behaviours it is not yet entitled to assert — and then watches those conditions get demonstrated — has done something a design cannot usually do: it has made its own uncertainty disposable rather than permanent.

### A5.6 Seven months of looking at the build, and a list of what did not match

Every one of the 54 delivered screens was compared against the built software by the design team, across seven months, and deviations were found and named (D50).

The instinct is to report this as fidelity achieved. The better version is that **a comparison which finds nothing is a comparison nobody should trust.** Seven months of screen-by-screen checking against a live build produced a list of named divergences, which is what a real verification produces and what a ceremonial one never does. Write the deviations in; request the list (§A10 item 4).

### A5.7 Information that has stopped arriving keeps doing useful work

When telemetry stops updating, the last reported battery and flight mode stay on screen with an explicit age, because a last-known value is operationally useful and a blank field is not. What they lose is the styling that says *current* (D88).

The same discipline decides what the operator may do with it. At the moment in the scenario when return-to-launch is considered for the degrading aircraft, the sample is thirty seconds old and the link condition is separately degraded; eligibility cannot be established from that evidence, and the control reports its availability as unknown rather than as ready (D89). **The design gives up apparent availability in uncertain conditions in order to protect the meaning of an available control.**

Link condition and sample freshness stay in separate fields throughout, because they fail independently and an operator who cannot tell them apart cannot tell a radio problem from an aircraft problem.

### A5.8 Five phases, and the longest tail in the corpus

This is one of two engagements where all five phases of Creative Navy's Critical Systems Design method are claimable, and its fifth phase is the heaviest the corpus holds: every delivered screen compared across seven months, four engineering integration gates closed, and a twelve-month retainer at biweekly involvement (D4, D50, D51).

The phase deserving the most space is **Organizational Integration**, because the artefacts are unusually literal about what the method pages mean by a design system as reasoning documentation rather than a component library. A token file, a component register, a screen register and an acceptance ledger versioned together against one release index. A handover protocol that sorts proposed changes into those requiring UX approval and those requiring engineering review. A specified build sequence that puts the shared command shell and the immutable aircraft and request identities before anything else (D22, D23).

**Supporting material, not headline angles.** Two further things are true and worth a paragraph each in the body, but should not be built into sections of their own, because the corpus already carries the argument from other engagements and this study adds weight rather than novelty: the twenty-five decision records each carrying two named rejected alternatives (D14), and the four consultative exploration sprints converting into a twelve-sprint programme and then a retainer (D3, D4). Write both from this engagement's own facts. Do not restate another study's framing of them.

---

## A6. Classification and filing

```
## Classification

- **Primary case-study category:** /evidence/case-studies/defence-and-space
- **Primary context:** /contexts/defence-and-space-systems
- **Also-relevant contexts:** /contexts/high-consequence-environments, /contexts/multi-stakeholder-operational-environments, /contexts/expert-tools-and-internal-systems
- **Connects to:** /situations/complexity/system-state-is-hard-to-understand, /situations/complexity/abnormal-conditions-break-the-interface, /situations/complexity/multi-role-workflows-are-fragmented, /situations/risk-and-consequence/user-error-has-serious-consequences, /situations/risk-and-consequence/delayed-understanding-creates-risk, /situations/risk-and-consequence/the-interface-increases-cognitive-load-at-the-worst-moment, /situations/delivery-and-execution/design-does-not-survive-development, /situations/delivery-and-execution/the-team-is-shipping-without-a-clear-behaviour-model, /failures/state-visibility-failures/users-cannot-see-what-state-the-system-is-in, /failures/state-visibility-failures/mode-changes-are-unclear, /failures/interpretation-failures/data-is-available-but-hard-to-interpret, /failures/interpretation-failures/users-see-information-but-cannot-judge-what-matters, /failures/error-and-recovery-failures/errors-are-easy-to-make, /failures/error-and-recovery-failures/rare-scenarios-have-poor-interaction-support, /failures/governance-and-behaviour-failures/good-behaviour-is-not-defined-explicitly, /capabilities/state-and-status-visibility-design, /capabilities/design-for-abnormal-and-degraded-scenarios, /capabilities/error-reduction-and-recovery-design, /capabilities/usability-evaluation-for-high-consequence-products, /capabilities/warning-and-alarm-clarity-improvement, /capabilities/information-architecture-for-expert-systems, /practices/behavioural-requirements-definition, /practices/state-and-transition-review, /practices/edge-case-and-degraded-mode-analysis, /practices/usability-testing-under-realistic-constraint, /practices/error-likely-interaction-review, /practices/alarm-and-warning-evaluation, /practices/decision-boundary-design, /practices/task-criticality-mapping, /practices/design-governance-through-delivery
```

**Three slugs were tested and rejected, and the reasoning matters because each looks like an obvious fit.**

- **`/capabilities/ux-audit-for-complex-products` is wrong.** Creative Navy had hands-on access to the running product (D8), but no audit was scoped and no audit deliverable exists (D55). The eight before-and-after comparisons are design records, not an expert review. This is the same trap the KISPE brief names, and the answer is the same.
- **The entire `/situations/ai-and-automation` cluster is out.** Those pages are scoped to *model* confidence and to products that produce recommendations users calibrate trust against. This product has no model and makes no recommendations; it reports what an aircraft said and when. `/failures/interpretation-failures/uncertainty-is-not-communicated-usefully` is out for the same reason — it states that it concerns AI-specific uncertainty.
- **`/contexts/embedded-devices-and-constrained-interfaces` is out.** This is a desktop console at a 1440 × 900 reference, and below 1024 px no pilot command layout was released (D24). There is no constrained-hardware story here and D56 forbids inventing one.

**On the primary context.** The KISPE change set creates `/contexts/defence-and-space-systems` and `/evidence/case-studies/defence-and-space`. This study joins both. The tagging convention chooses primary context by dominant design challenge rather than industry, and on a strict reading the load-bearing challenge here is the separation of inspection, intent and authority in a consequential-command interface — which would argue for a challenge-shaped page. **The sector page is still the right answer**, for the reason the KISPE brief gives: a new domain needs somewhere for its authority to accumulate, and the standards vocabulary in §A8 — control-system interoperability, levels of interoperability and control handover, remote pilot station human factors, airworthiness envelopes that include the control station — is sector vocabulary that belongs on a sector page. Two studies seeding it at once is better than one.

**Coordination requirement — read before any repository work begins.** Neither `/contexts/defence-and-space-systems` nor `/evidence/case-studies/defence-and-space` exists in the repository yet; both are proposed by the KISPE brief and neither has been applied. **This study cannot be integrated before the KISPE change set lands**, because `lint_case_studies.py` resolves every `/contexts/` reference in a case-study file against the filesystem and fails on CHECK B regardless of whether the Classification block is otherwise correct. Either land KISPE first, or land both in one change set. Do not land this one alone against a context page that does not exist.

**Both structural pages trigger the context-change protocol**: `python3 Guidance-meta-layer/lint_case_studies.py <repo>` must be re-run across the entire corpus within the same change set, before commit. A new entry is also required in `Content-registry/content-registry.json` following the existing schema (`source_file`, `title`, `slug`, `category`, `parent_slug`, `related_slugs`, `article_type`, `priority`, `generation_status`).

**On outcomes pages.** This engagement populates **no** `/evidence/outcomes` page, and the reason is worth stating precisely because it looks as though it should. The outcomes pages require a grounded result about how the system performs for users or what became possible for the organisation. What exists here is a result about a *design*: 18 defects found and closed, verified by an operator-run retest, and 54 screens verified against a build. Nothing was measured in flight, and the product is in test. **Revisit when the product is operational** — the four gates being closed means the instrumentation to measure some of this now exists.

**On `/evidence/longitudinal`.** A twelve-month retainer at biweekly involvement following a sixteen-sprint programme is the return-engagement pattern that page collects. Seed it.

**On evidence-standards pages.** D26 and D28 belong in `/what-we-have-measured` — the contrast ratios are calculated values and the UI checks are recorded results. D36 and D44 also belong there, with the §A4 framing attached, because this is the corpus's clearest instance of a measured design-evaluation result. D54, D56 and D57 belong in `/what-we-do-not-claim`. D50 is the open question the corpus has been circling: it is verified but not measured, and the corpus still has no page for that class. This is the seventh arrival of that open item and the second engagement in the defence pair to raise it.

**Phase mapping — all five phases are claimable.**

- **Sandbox Experiments** — the four exploration sprints. Fifteen challenges, 45 alternatives, 85 frames, hands-on use of the running product as domain learning, and option space mapping at the architectural level before any structure was committed to (D5–D8).
- **Concept Convergence** — exploration sprint four. Consolidation of fifteen separate decisions into one interaction architecture, six cross-system principles, four end-to-end scenarios used to test the direction in combination, and the scope decision that converted into twelve sprints (D9, D10, D3).
- **Iterative System Building** — the seven UX development sprints and the five UI delivery sprints. Journeys, interaction contracts, state models, decision records, the evaluate-and-revise cycle that closed 18 findings, then 54 production screens (D11–D14, D20, D41–D44).
- **Organizational Integration** — the design system, the registers, the token file, the acceptance ledger, the versioned release index and the two-class change protocol (D21–D23). The strongest instance in the corpus of a design system as reasoning documentation rather than a component library.
- **Implementation Partnership** — the seven-month screen-by-screen fidelity comparison, the four closed integration gates and the twelve-month biweekly retainer (D4, D50, D51). **The fullest instance in the corpus**; see §A4 for the comparison with AIT and §A10 for what still needs confirming about its substance.

---

## A7. Suggested structure for the case study

1. **Opening** — locked agency sentence; Schone Airspace Group and what the product is, in two sentences; the four user populations and the four questions the client's brief asked; the sixteen-sprint shape in three phases, the retainer, and the fact that the product was built and is in test.
2. **What the console actually has to do** — plan a survey, verify readiness, supervise an automated flight, operate a camera, watch several aircraft, review a recorded mission; and the scope boundary that was held throughout (D59–D65).
3. **The problem that shapes everything** — §A5.1. Three things that look like one. Lead the section with it.
4. **Exploration** — fifteen challenges, 45 alternatives, 85 frames, and the counting convention that makes the number honest (D5–D7). Pick three challenges and show the alternatives properly: the shared operating workspace, command initiation and feedback, and multiple aircraft selection. End on the scope decision (D3) and the conversion into twelve sprints (D4).
5. **The scenario** — one synthetic fixture, every document, built adversarial on purpose (D68–D75). This section explains why everything that follows is checkable, and it carries the §A4 warning that the fixture is designed, not observed.
6. **The command decisions** — §A5.2. The seven states and their prohibited inferences as the centrepiece (D85), then silence (D87), then link-versus-freshness (D88), then eligibility (D89). Keep the rejected alternatives and the named costs in the prose; they are the point.
7. **The fleet decisions** — §A5.1 worked out: focus, target, authority, warning ownership and the acknowledged-but-active state (D90–D94).
8. **Research** — nine operators, seven of them remote pilots, from end customers, through interviews and walkthroughs at the end of UX development (D31–D35). Carry the timing honestly in this section, not in a footnote: this was validation and correction, not discovery.
9. **What the evaluation found** — §A5.5. Eighteen failures in the first candidates, nine of them critical, each named and traced; the operator-run second pass; the two denominators and why both are reported (D41–D48).
10. **Delivery and handover** — 54 screens, 28 component families, 119 variants, the registers and the token file, the two-class change protocol and the specified build sequence (D20–D23). The accessibility and contrast work belongs here (D25–D27), stated as specified-and-calculated rather than as validated in a coded interface.
11. **Into the build** — §A5.6 and §A5.7. Seven months, 54 screens, named deviations, four gates closed, a twelve-month retainer (D49–D51).
12. **Evidence and limits** — the engagement record; D50 and D36 with their full §A4 framing; and an explicit statement of D52, D54, D55, D56 and D57 — no competitive benchmarking, no observation of live flight operations, no audit deliverable, nothing validated on field hardware, and nothing measured in flight.

**The structural instruction, and it governs sections 5 to 7.** **Write this case study as a sequence, not as an anatomy.** The scenario is seventy-five seconds long and the events in it have an order: the link degrades, the values age, the operator looks at the wrong aircraft, the operator retargets deliberately, the operator declines to act on evidence that is thirty seconds old, and on a separate branch an acknowledgement arrives three seconds before the aircraft agrees with it. **Follow that order.** Introduce each design decision at the moment in the sequence where an operator would hit it, rather than grouping decisions by subsystem and describing each one's properties.

This is not a stylistic preference. It is the reason the study cannot be confused with any other in the corpus: it is the only engagement whose evidence has a clock, and a narrative written along that clock produces sentences no cross-sectional study can produce. A reader should finish section 7 able to retell the incident.

**One writing note.** The source material is dense with identifiers — workspace, journey, screen, decision, interaction, finding, requirement, check, command-state and dependency codes. **They are the citation handles for this brief and must not appear in the case study.** Write the behaviours in prose. A reader should never encounter a code.

**A second writing note, specific to this engagement.** The scenario aircraft carry fixture labels. **Do not use them in prose either.** Write "the aircraft under command" and "the aircraft the operator was inspecting", or "the first aircraft" and "the second aircraft". The three-way distinction in §A5.1 is hard enough to follow without asking the reader to track two alphanumeric labels, and the labels add nothing a description does not.

---

## A8. Domain framing and external research

**Creative Navy did not certify to, audit against, or work to any standard named here.** These establish that the writer understands the domain. Any phrasing implying compliance work is false — and in this domain that phrasing carries legal weight, so the rule is stricter than usual. Equally, none of the sources below measured this product; they describe the category it enters.

### A8.1 The strongest external frame — this screen is part of the aircraft

**Under NATO's uncrewed aircraft system airworthiness requirements, the ground control station and the command-and-control link are inside the airworthiness envelope.** They are not peripherals attached to a certified aircraft; they are part of what is assessed when the system's airworthiness is established.

That single fact does more work than any usability argument available here, and it should frame the whole case study. **A control station interface is not an application that happens to control an aircraft. It is a component of the aircraft that happens to be made of pixels.** Software judged by the standards of application design — flows, delight, efficiency, reduced clicks — is being judged by the wrong discipline when the artefact sits inside an airworthiness assessment. That is the argument for why this class of work is different, it is checkable against a published standard, and no page in the corpus currently makes it.

It also explains, without any special pleading, why this engagement spent seven months comparing delivered screens against a build (D50) and why it specified what the interface must do when a source *cannot* demonstrate a condition (D17). Those are the habits of a component inside a safety envelope, not of a product team shipping a release.

**Sources:** [NATO STANAG 4671 / AEP-4671](https://en.wikipedia.org/wiki/NATO_STANAG_4671) · [STANAG 4671 USAR scope](https://complytrain.net/standards/stanag-4671)

> **Verification note.** The airworthiness-envelope point is the load-bearing claim of this section and it is cited from secondary sources. **Obtain the current edition and confirm the scope language before this sentence is published.** If it does not hold as stated, the fallback frame is §A8.3, which is independently sourced.

### A8.2 The protocol layer already grades control. The screen layer had stopped.

**NATO STANAG 4586, the standard interface for uncrewed aircraft control systems, grades control rather than treating it as a switch.** Its Levels of Interoperability separate receiving payload data, from controlling the payload, from controlling the aircraft, from controlling the aircraft including launch and recovery. A control station does not simply select an aircraft and command it: it requests authorisation to operate at a specified level, and control can be handed between stations.

The useful observation is not that the domain is wise. It is that **the distinction survives in the protocol and evaporates at the glass.** Underneath, control is a graded, negotiated, revocable thing with an authorisation step. On screen, in most ground control stations, it is a highlighted row. The engagement's three-way separation of inspection, intent and authority (D90–D92) is the interface finally carrying a distinction the layer beneath it had been maintaining all along.

That is a gap-between-layers argument, and it is the more interesting version, because it identifies where the design value actually was: not in inventing a concept, but in noticing that one had been dropped in translation.

**Sources:** [STANAG 4586 (NATO STO educational notes)](https://publications.sto.nato.int/publications/STO%20Educational%20Notes/STO-EN-SCI-271/EN-SCI-271-03.pdf) · [STANAG 4586 overview](https://en.wikipedia.org/wiki/STANAG_4586) · [Interoperability and STANAG 4586 in flight control systems](https://www.uavnavigation.com/sites/default/files/2025-10/Open-Architecture-and-STANAG-4586-interoperability.pdf)

### A8.3 The governing operational framework makes interface adequacy a named safety objective

Under the **JARUS Specific Operations Risk Assessment** methodology — adopted by EASA as acceptable means of compliance to Regulation (EU) 2019/947 — the Operational Safety Objectives include one requiring that **a human factors evaluation be performed and the human-machine interface found appropriate for the operation**. Higher assurance levels raise what must be demonstrated.

This is the civil counterpart to §A8.1 and it reaches the same place by a different route: in the framework that governs how these aircraft are permitted to fly, the adequacy of the control station interface is an objective an operator must satisfy, not a discretionary refinement. Use it on the context page. Do not imply the engagement produced or contributed to any such demonstration.

**Sources:** [JARUS SORA v2.5 main body](http://jarus-rpas.org/wp-content/uploads/2024/06/SORA-v2.5-Main-Body-Release-JAR_doc_25.pdf) · [JARUS SORA Annex E](http://jarus-rpas.org/wp-content/uploads/2024/06/SORA-v2.5-Annex-E-Release.JAR_doc_28pdf.pdf) · [EASA AMC & GM to Reg. (EU) 2019/947](https://www.easa.europa.eu/sites/default/files/dfu/AMC%20&%20GM%20to%20Commission%20Implementing%20Regulation%20(EU)%202019-947%20%E2%80%94%20Issue%201.pdf)

### A8.4 What the guidelines the engagement used do and do not cover

The engagement's own research cites **Hobbs and Lyall, *Human Factors Guidelines for Remotely Piloted Aircraft System (RPAS) Remote Pilot Stations*, version 1.1 (NASA Ames / San José State University Research Foundation, contractor report for NASA's UAS in the NAS Project)**. Reading it directly rather than at second hand produces three precise supports and one instructive limit.

Where more than one station could be linked to an aircraft, the guidelines require each station to let the pilot monitor **which entity has control of the aircraft, and to what extent** — the authority distinction, stated as a requirement. They require that a pilot taking control be given **a means of confirming that control has been established**, rather than inferring it from the act of taking it. And they require that pilot to **monitor the aircraft's telemetry before establishing control** — which is the eligibility rule (D89) in a different setting: you do not take command of an aircraft you cannot currently see. The guidelines also carry the standard mode-awareness finding, that mode confusion is hard to avoid and has caused accidents in crewed aviation, which supports the persistent flight-mode treatment (D77).

**The limit is the useful part.** The guidelines' stated assumptions include that control of multiple aircraft by one pilot is not envisioned. **Write that in rather than hiding it**, because it marks where this engagement went past the published guidance: the fleet decisions (D90–D94) had no guideline to lean on, which is precisely why the focus-and-target separation had to be constructed rather than looked up.

**Sources:** [Hobbs & Lyall, RPS human factors guidelines v1.1](https://ntrs.nasa.gov/api/citations/20190000211/downloads/20190000211.pdf) · [Hobbs et al., The Cognitive Challenges of Flying a Remotely Piloted Aircraft](https://ntrs.nasa.gov/api/citations/20160011549/downloads/20160011549.pdf) · [FAA, UAS Human Factors Considerations](https://www.faa.gov/sites/faa.gov/files/uas/research_development/information_papers/UAS-Human-Factors-Considerations.pdf)

### A8.5 Standards vocabulary for the case study and the context page

- **STANAG 4586** — control system interfaces, levels of interoperability, control handover and authorisation. Developed in §A8.2.
- **STANAG 4671 / AEP-4671** — uncrewed aircraft system airworthiness requirements. Developed in §A8.1, where it carries the case study's framing argument.
- **MIL-STD-1472 (current revision H)** — human engineering design criteria for military systems. The canonical human-engineering reference for the sector.
- **DEF STAN 00-250** — UK MoD human factors for designers of systems, the five-part human factors integration standard. The natural UK defence anchor, paired with the symbology material the KISPE study introduces. **Verify current status and edition before use.**
- **EASA Regulation (EU) 2019/947 and the JARUS SORA package** — the civil operating framework, and the source of the human factors operational safety objective in §A8.3.
- **WCAG 2.2** — relevant specifically for non-text contrast, focus visibility and focus appearance, which is what D25–D27 actually address. Name the criteria rather than the standard; the design specifies a visible focus ring and mandatory non-colour encoding, and claiming conformance would overreach since nothing was validated in a coded interface.

### A8.6 Research worth doing before the context page is written

- **Span-of-control and fan-out literature.** The question of how many uncrewed vehicles one operator can supervise is a well-developed research area, and it is the external frame for the fleet decisions that the NASA guidelines explicitly decline to cover (§A8.2). Worth doing properly before the context page is written; the useful move is to show that the published work treats operator span of control as a function of interaction time and attention switching, which is exactly what the focus-and-target separation and the persistent shell are designed to protect.
- **Lost-link and degraded-C2 procedure design.** The NASA material models a lost link in stages — a period of continued autonomous flight, then a pre-programmed procedure, then re-establishment — and notes that a lost-link procedure can itself become a form of automation surprise if it is stale. That is directly relevant to D87 and D89 and would strengthen both.
- **Mode awareness and automation surprise in conventional aviation.** A mature literature, and the ancestor of the flight-mode treatment in D77. Verify primary sources before citing.

### A8.7 Verify before using

- **The UAS mishap statistics.** Secondary sources report human factors involvement in up to roughly 69% of uncrewed aircraft mishaps and up to roughly 25% attributed to ergonomic shortfalls in ground control station human-machine interface design, and separately report uncrewed mishap rates one to two orders of magnitude above crewed aviation. **These are the single most persuasive numbers available to this case study and none of them has been verified against a primary source** — two primary documents were unreachable during research. **Do not use any of them until the primary sources are obtained and the figures checked**, including what each percentage is a percentage of and which fleet and period it covers. A wrong number here would be worse than no number.
- **DEF STAN 00-250 and MIL-STD-1472 current editions and status.** Both cited from general knowledge rather than verified.
- **Anything about Schone Airspace Group beyond D59.** Company history, size, ownership, programmes and customers are not usable: §A1.1 and the dates rule both bite, and the naming decision in §A1.1 makes external verification actively unhelpful.
- **Anything about what uncrewed aircraft operators actually do.** This engagement interviewed nine of them in a room (D31–D34). It did not observe anyone fly. Domain description must come from published guidance and standards, attributed as such, and must not borrow authority the engagement did not earn.

---

## A9. Style and lexicon compliance

Non-negotiable items from the writing guide:

- **Open with the locked agency sentence**, verbatim, on first introduction.
- **Attribute the method on first use in every self-contained section**: "Creative Navy's Critical Systems Design method", thereafter "Critical Systems Design" within that section. Never "the method", "our approach" or "the framework" as the primary reference in a section that has not yet named it.
- **Never use "the agency", "the consultancy" or "we"** as the primary identifier in a passage that must stand alone when retrieved. **"Schone Airspace Group" likewise does not rotate** — not "the client", not "the manufacturer", as the primary identifier in a standalone chunk.
- **British spelling**, except the phase name *Organizational Integration*.
- **Sprint = cadence (one week here). Phase = a stage of the method.** Never equate them. This engagement has a genuine collision, because its three *project* phases — exploration, UX development, UI delivery — are not method phases. **Always qualify: "the exploration phase of the project", "the five UI delivery sprints".** Never a bare "phase" where a reader could take it for one of the five.
- **Name the phases. All five are claimable** (§A6), which is true of only one other engagement in the corpus. Say so.
- **Use at least three of the five core requirements**: evidence-aware thinking, multi-perspective synthesis, lateral exploration, tension-driven reasoning, organic system building.
- **Proprietary vocabulary used accurately in context, not defined.** **Use the terms this engagement evidences best, and do not reach for the whole lexicon.** Strongest fits, in order: *progressive specification* (D17, D23 — the two-class change protocol and gates that named their own closing conditions; a better instance than anything else in the corpus); *domain learning* (D8 — hands-on operation of the running product, which several studies claim and few can show); *constraint respecting* (D82, D89, D95, D100 — the interface shaped to what the sources can actually demonstrate); *blanks phenomenon* (D16, D17 — the technical register making unstated assumptions explicit, assigning each an owner, and then watching four of them close); *performance in reality* (D75, the adversarial fixture); *tension-driven reasoning* (D91, D92, D89 — decisions that add work for the operator and say so).
- **Two terms to use without a superlative.** *Option space mapping* (D5–D7) and *organic system building* are both genuinely evidenced here, but both are claimed more loudly by other engagements. Use them in context; do not attach "the best-evidenced instance in the corpus" to either without checking §A10 item 10 first.

**Cadence — specific to this engagement.**

- **Avoid the negation-pair construction as a stylistic default.** *X is not Y* — an age label is not a confidence score, an acknowledgement is not an execution, grey is not offline. The construction is accurate and the source material is full of it, and it is also the signature cadence of the other defence study in the corpus. Used three or four times in a case study it is a drumbeat; used once, at the moment it lands hardest, it is a sentence. **State the distinctions positively wherever the meaning survives**: a transaction carries the aircraft it was dispatched against; an acknowledgement reports that a request was received; a stale value keeps its age alongside it.
- **Prefer the verb to the principle.** This engagement's material is behavioural — things happen in an order, to an object, with consequences. Write what the interface *does* at a given moment rather than what it *holds to be true in general*. The principles are in §A3.7 for the writer's orientation; they are not the shape of the prose.
- **Declarative openings**, canonical terminology, no metaphor in sections that will be retrieved for task queries.
- **Every section must stand alone** as a retrieved chunk.
- **No identifiers and no aircraft fixture labels in the published prose** (§A7).
- **No quotation marks anywhere** (§A1.1).

---

## A10. Open items

1. **The substance of the twelve-month retainer is not recorded.** Biweekly involvement across twelve months is confirmed (D4), and the seven-month fidelity comparison is confirmed (D50), but what the retainer consisted of — review meetings, ticket answering, continued design production, or embedded working — is not. **Write Implementation Partnership to D50 and D51, which are substantiated, and describe the retainer by its shape only until the lead says more.** AIT's brief is explicit that an Implementation Partnership must be described at its actual weight, and the same discipline applies here. If the retainer produced further screens or decisions, those are additional engagement facts and should be added to §A3.1.
2. **The operator-run check results are not separately recorded.** D36 establishes that five operators ran the 36 checks after Creative Navy did. Whether their results matched Creative Navy's, and whether their run surfaced anything Creative Navy's did not, is not known. **If the operator run produced different results, that is the most interesting fact in the engagement and it changes §A5.5 substantially.** Ask once; write to the conservative version until answered.
3. **Which five of the nine operators ran the checks is not recorded.** Presumably weighted to remote pilots, but do not state a composition that is not known.
4. **The named deviations from the fidelity comparison are not listed.** D50 confirms deviations exist and were named; the list is not in the source material. **The case study is materially stronger with two or three of them described**, because a fidelity claim that names its exceptions is more credible than one that does not. Request the list.
5. **Whether the four pending checks were subsequently passed is not recorded.** The four gates closed (D51), and the four pending checks depended on exactly those gates. It is likely but not stated that closing the gates resolved the checks. **Do not assert it.** If confirmed, the headline evaluation figure becomes 36 of 36 with a documented path from 14, which is a stronger and cleaner number than either of the two currently reported.
6. **The research sequencing needs one confirmation.** D34 places the sessions at the end of UX development, which makes them validation rather than discovery (§A4). If operator contact also occurred earlier — during exploration, or informally through the client — that changes the framing and should be captured before writing.
7. **The five UI delivery sprints have no recorded discussion of how the visual direction was chosen**, beyond the two rejected single-tone directions (D25). The screens, the component system, the tokens and the contrast calculations are fully evidenced; the reasoning behind the visual language is not. **Describe what was delivered; do not reconstruct reasoning.** This is the same open item AIT and KISPE both carry, and the same answer applies.
8. **No handling constraint beyond naming has been confirmed.** The lead has cleared the use of the information and the client name. If an export-control, end-customer or defence-sector constraint applies to the subject matter rather than to the name, it has not been raised and should be confirmed before publication. This is worth asking explicitly given the filing category.
9. **The prefix is D.** E, S, A, M, N, T, G, O, V and K are taken; B is skipped by convention. Confirm before the corpus integration document is written, because the D-numbers propagate.
10. **Four specific coordination items with the KISPE study — none of them about sprint counts.** The two engagements share a method and a sector, which is correct and should not be disguised; a shared engagement shape is evidence of a method, not a defect, and the same shape recurs across the corpus. The real overlaps are narrower, concrete, and all four are fixable:

    **a. The external-frame move.** KISPE's strongest frame is that military symbology has distinguished *unknown* from *hostile* for three decades — the domain already encodes the principle. **This brief deliberately does not use that move** (§A8.1 argues instead that the control station sits inside the airworthiness envelope, and §A8.2 argues that the protocol grades control while the screen had stopped). If the KISPE study is edited later, do not let it migrate onto the airworthiness argument, and do not let this one migrate onto symbology.

    **b. The option-space superlative.** KISPE's brief calls its 36 alternatives in 64 frames "the second-best-evidenced instance in the corpus" of option space mapping. This engagement recorded 45 alternatives in 85 frames (D6), which is larger. **Both cannot carry a superlative.** Reconcile the ranking once, across the whole corpus, before either publishes; §A9 already instructs this study to use the term without a superlative pending that check.

    **c. The context page will have two authors.** `/contexts/defence-and-space-systems` takes vocabulary from both studies — symbology, geospatial metadata and positioning-service performance from KISPE; airworthiness envelope, control-system interoperability and the civil human-factors safety objective from this one. **Write the page once, from both contributions together.** Written sequentially it will acquire two unconnected halves with a visible seam.

    **d. The negation cadence.** Both engagements produced design records full of *X is not Y*. §A9 constrains it here. If KISPE's study is written in that cadence throughout, this one must not be, and the constraint in §A9 is what prevents it.

    **What should not be treated as an overlap:** the sprint count, the team size, the phase split, the existence of a decision register, or the existence of a fixed scenario. Those are the method working, and the corpus is better for showing the method producing different answers on different problems. The honest summary is that the corpus gains a defence pair covering complementary ground — a read-only information product with no user research and no fidelity verification, and a consequential-command product with nine operators and seven months of it. **State the pairing as coverage, not as a caveat.**

---

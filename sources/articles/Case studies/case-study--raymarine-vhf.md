# Raymarine marine VHF and AIS radio — full writing brief

> **Purpose.** Everything needed to write the Raymarine case study and to update the existing content corpus from it. Written to be handed to a writer with no access to the source material or the conversations that produced it.
>
> **§A3 is a numbered evidence bank.** Every instruction in this document cites it by number, and the same **R-numbers** are to be used in the corpus integration document. **Do not introduce facts about this engagement that are not in §A3.**
>
> **Corpus integration.** Everything that changes on other pages because of this engagement belongs in a corpus integration document. **Part B of this file is a specification of what that document must be given**, not a substitute for it. The two share the evidence bank verbatim.
>
> **Companion documents:** `industrial-writing-brief.md` (industrial process control, prefix **E**), `streetec-writing-brief.md` (**S**), `ait-writing-brief.md` (**A**), `mdu-writing-brief.md` (**M**), `assemblio-writing-brief.md` (**N**), `topera-writing-brief.md` (**T**), `egma-writing-brief.md` (**G**), `oceaneering-dispatch-panel-writing-brief-FINAL.md` (**O**), `visioncheckout-writing-brief.md` (**V**), `kispe-writing-brief.md` (**K**), `schone-mission-control-writing-brief.md` (**D**). This engagement uses prefix **R**. Never let facts migrate between them: they are different clients, industries and evidence classes.
>
> **This is the corpus's fourth marine engagement and it creates the marine context page.** It files under `/evidence/case-studies/marine`, which already exists, with primary context `/contexts/marine-and-maritime-systems`, which does not and must be created in the same change set. See §A6 for the coordination this requires, and §A6.4 for why the primary context is the sector page rather than the embedded-devices page the other marine studies use.
>
> **Read §A4 before writing a sentence.** This engagement has an unusual evidence profile: three rounds of paired, counterbalanced, Creative Navy-run prototype research producing reproducible medians — and no field research at all, in a domain whose own brief named gloves, glare, vibration and night sailing as the operating conditions. Both halves are true and both must appear. §A4 is where the ceilings are.
>
> **One cadence warning, up front.** This is the third consecutive high-consequence engagement in the corpus built around guarded controls, degraded states and priority architectures. The source material is saturated with the construction *X is not Y*. The KISPE and Schone studies have first claim on that cadence. **§A9 constrains it here, and the constraint is not optional** — without it, three studies will read in one voice.

---

# PART A — THE CASE STUDY

## A1. Handling rules

### A1.1 What may be named

**The client is named Raymarine.** Use that name near-identically on every mention, per the entity-consistency rule. Do not rotate it, do not substitute "the client" or "the manufacturer" as the primary identifier in a passage that must stand alone when retrieved.

**Raymarine's existing fixed-mount VHF line may be named: Ray53, Ray63 and Ray73.** This is deliberate and load-bearing. That line is the documented precedent throughout the engagement — Class D Digital Selective Calling, an internal GNSS receiver, a receive-only AIS receiver on the Ray73, loudhailer, NMEA 2000 and SeaTalkng alongside NMEA 0183, and optional second stations — and it is publicly documented. Naming it is what lets the case study describe the product's starting point without vagueness, and it is where the domain authority comes from (R74).

**The new product's name may not be used.** Not in any form, not in a version designation, not as a family name.

| Do not use | Use instead |
|---|---|
| The new radio's product name or any version designation | "the new radio", "the next-generation fixed-mount VHF", "the radio" |
| Any internal programme or project codename | omit entirely |
| Named individuals on either side | role descriptors only — "Raymarine's product lead", "Creative Navy's researcher", "a professional operator" |
| Participant identifiers from the research records | cohort descriptors only — "a professional operator", "one of the occasional users" |
| The synthetic AIS fixture's vessel names | "the intended vessel", "an adjacent workboat", "a target whose position had stopped updating" — see §A7 |
| The masked MMSI appearing in the design mockups | never reproduce it, in any form, including as a partial |

> **Flag for the engagement lead, not for the writer.** Naming Raymarine, naming the Ray53 / Ray63 / Ray73 line, and describing the subject as the next generation of that line makes the product identifiable in a single search — and it is now released (R97), so its name exists publicly. The rule as given is written to. **If the intention is a genuine screen on the new product rather than a courtesy, either the line name or the generational framing has to go too.** Raise once, then write to whatever is decided and do not reopen it in the copy or in a footnote.

**There are no quotes and no reported speech.** No client, participant or operator speech is on record and no passage has been cleared (R72). **Write no quotation marks anywhere in this case study, and no reported speech either.** Where a client position is described, attribute it to the role and the artefact it came from — "Raymarine's partner brief asked the agency to challenge the product proposition", "the brief named the operating conditions" — never to a speaker and never as something said.

### A1.2 What may not be shown

**No screenshots, wireframes, design images, plates or redrawn diagrams.** The corpus is text-only on documentation pages. The source material contains schematic screen compositions, low-fidelity concept studies and a set of annotated interface states; **none may be published in any form, including as redrawn diagrams or ASCII approximations.** Describe the designs in prose.

### A1.3 Dates

**No dates at all, from any source.** No years, no months, no seasons, no calendar dates. Sequence and duration only — "eight one-week sprints", "a two-sprint exploration phase", "three UX development sprints then three UI delivery sprints".

Every document in the source set carries a date stamp, and the stamps are internally impossible: an eight-week programme whose exploration report and whose six-sprint completion report are dated one day apart. **The dates rule removes the problem entirely.** Nobody should treat the stamps as a chronology, and nothing in the case study should gesture at one.

**Durations are not dates.** "Eight weeks", "two sprints", "five working days" are permitted and load-bearing.

### A1.4 Status

**The radio was built and released** (R97). That may be stated plainly, in those terms.

Three things must not be attached to it.

- **It must not be written as "it shipped as designed."** No design-fidelity comparison is recorded anywhere in the source material. AIT's case study can make that claim because Creative Navy compared the shipped interface against the delivered designs; this engagement has no such record. See §A10 item 2 — if a comparison exists it is the strongest fact available and the case study changes; until then, say the product was built and released and stop there.
- **No commercial, sales, reception, review or market claim.** None exists.
- **No performance, safety, error-rate or rescue claim.** Release is not evidence of operational effect, and nothing in this engagement measured one.

**Creative Navy offered implementation partnership on its standard terms, as on other engagements** (R96). **The substance is not recorded** — not the duration, not the form, not the frequency of involvement. §A4 governs the exact wording and §A10 item 1 asks for the weight. **Do not borrow AIT's five months, three progress reviews and eight support tickets, and do not borrow Schone's seven months, fifty-four screens and four closed gates.** Those belong to other engagements.

---

## A2. The engagement in brief

Raymarine makes marine electronics. Its fixed-mount VHF radios — the Ray53, Ray63 and Ray73 — are Class D Digital Selective Calling sets with an internal satellite positioning receiver, and on the Ray73 a receive-only AIS receiver that shows nearby vessels. Raymarine set out to design the next generation of that product: a fixed-mount radio with a colour display, two rotary encoders, a four-way keypad, three contextual screen keys, a guarded distress control, a dedicated man-overboard key and a wired microphone, bringing conventional voice operation, digital calling, emergency functions and vessel awareness closer together in one instrument that must work on its own at the helm and also sit inside a wider Raymarine installation.

Raymarine's partner brief named six questions it wanted resolved — the boundary between the radio and a connected chartplotter, how much AIS detail belongs on a small display, which tasks need dedicated physical controls, how expert speed and first use coexist, how routine calls and vessel alerts and distress compete for attention, and how the radio relates to remote stations — and asked the agency to examine the product proposition and to explain where it would challenge or reshape the brief (R3, R4).

Creative Navy worked across **eight one-week sprints in three blocks**: **two exploration sprints**, then **three UX development sprints**, then **three UI delivery sprints**. A five-person team ran it. Exploration produced three product architectures, three AIS information structures, four physical control models, a cross-screen input contract and a twelve-entry decision register. UX development produced detailed operating flows for voice, digital calling, emergency and degraded operation, thirty-two recorded decisions, forty-three exception records, twenty-three screen families and eighteen component requirements — each sprint evaluated against eight prototype sessions with operators. UI delivery produced the visual system, the component library and the engineering handover. **Twenty-four prototype sessions with eighteen operators across three rounds.** The radio was built and released.

**The requirement that shapes everything: this instrument performs irreversible acts that leave the vessel.** A voice transmission occupies a shared channel. A digital call addresses a specific vessel by its registered identity. A distress alert reaches a coast station and starts a search. The interface is the only place an operator can see which of those has actually happened — and the radio's own subsystems, not the screen, are the authority on whether any of them did.

### A2.1 The territory this study owns

**Write this study for what only it can prove.** Four things here exist nowhere else in the corpus.

1. **A physical control as the architectural decision.** Every other engagement in the corpus treats hardware as a constraint on the screen. This one treats a rotary encoder's meaning as the load-bearing structural question, settles it before any flow is drawn, tests it comparatively, and then holds it as an invariant through alerts, transmit locks and emergencies. AIT is the nearest neighbour and it is the inverse problem: one grammar across two input devices, either of which might be deleted. This is one device whose meaning must survive four screens and an interruption.
2. **Two measured prices, both paid deliberately.** The engagement twice chose the slower option and recorded what it cost: 2.30 seconds of median target browsing to remove a class of control error, and 5.85 seconds plus two and a half actions to remove a class of addressing error. No other study in the corpus has one such number, let alone two.
3. **A regime where the screen is explicitly not the authority.** Digital calling has protocol states that the radio reports and the interface may only relay. The engagement's governing rule — the interface is a state interpreter, not the source of truth for radio outcomes — produced forty-three named exception records and eight independent state axes, and it is the corpus's cleanest statement that a screen is not a mode.
4. **A set of comprehension failures that were found, specified against, and not re-tested.** Two of eight operators believed a local man-overboard action had sent an external distress alert; two of eight believed a position had been included in a distress alert sent without a position fix. Revised wording was specified. It was never re-measured. **That is in the material, it is the engagement's honest weak point, and it is more useful written in than written around.**

**And one thing the study must own by form.** The engagement's shape is a chain of decisions, each with a named alternative and a stated cost. §A7 turns that into the structural instruction, and it is the single strongest guard against the study reading like the two defence studies that precede it.

---

## A3. Evidence bank

### A3.1 Engagement record — stateable as fact

- **R1** — **Eight one-week sprints in three blocks**: two exploration, three UX development, three UI delivery.
- **R2** — **Five-person team**: UX designer, UI designer, project manager, product designer, researcher. *(Composition stability across the three blocks is unconfirmed — §A10 item 4.)*
- **R3** — **Raymarine's partner brief named six questions** it wanted the agency to help resolve: product boundaries — what must the radio do well on its own, and what is better handled by a connected chartplotter; AIS value — how much AIS detail belongs on a small radio display, and whether an independent plot benefits the user; control model — which tasks require dedicated physical controls, microphone access or contextual screen actions; different skill levels — how quick expert operation should coexist with a clear first-use experience; priority and interruption — how routine calls, vessel alerts and distress information should compete for limited attention; and system coherence — how the radio should relate to remote stations and the wider Raymarine visual and interaction language.
- **R4** — **The brief asked for a partner for product decisions, not only interface execution.** It asked the agency to examine the product proposition, identify trade-offs, help shape a practical experience strategy before detailed screen design began, and explain where it would challenge or reshape the brief. It stated that the core voice and digital-calling safety functions were essential and that the AIS implementation, display depth and distribution of features between the radio and connected devices were open design decisions.
- **R5** — **The brief proposed a three-stage engagement** — discover and advise, explore and validate, define and hand over. **Creative Navy's delivery plan answered with an eight-week programme in a two / three / three split**, with named weekly challenges and deliverables, weekly working reviews with Raymarine stakeholders, and an explicit delivery basis: high-fidelity UX meant complete detailed interaction flows before final UI styling; scope covered the fixed radio display and its physical controls with connected devices addressed at integration points; the schedule assumed timely product and engineering input; and safety and regulatory sign-off remained with Raymarine. *(Whether Creative Navy reshaped the brief's stage structure, or accepted it and re-expressed it, is unconfirmed — §A10 item 5.)*
- **R6** — **Three evaluation criteria were fixed at the start of exploration and used to judge every concept**: *operation* — actions remain efficient under divided attention, gloves and vessel movement, and failures and interruptions recover into a known state; *clarity* — the next action, the active channel, the selected target and the transmission state are unambiguous, and safety and urgency do not depend on colour alone; *feasibility* — the concept fits the proposed control envelope, screen size and likely technical constraints, and can be expanded into UX specifications without re-architecting core flows.
- **R7** — **Exploration Sprint 01, five working days.** Day one: product and engineering alignment on remit, constraints, user segments and operational scenarios, and confirmation of what remained a Raymarine engineering decision — producing prioritised task categories, scope boundaries and the evaluation criteria. Day two: mapping core communication tasks, error paths and infrequent emergency actions, ranking functions by urgency, frequency and independence requirement — producing the designation of local voice and digital-calling autonomy as a non-negotiable design requirement. Day three: comparing three product architectures and drafting screen structures and radio status hierarchies. Day four: wireframing AIS list, plot and hybrid screens and exploring direct calling, target details, call confirmation and interrupted tasks. Day five: a scenario walkthrough of routine calling, target browsing, incoming alerts and change of screen context — which identified the physical control ambiguity and caused a dedicated control study to be inserted into Sprint 02.
- **R8** — **Nine numbered exploration challenges, each with three named alternatives, a recorded direction, a decision basis and a named downstream consequence**: distribution of functionality; AIS on a constrained display; persistent channel awareness; AIS target to digital call; collision and proximity alerts; distress versus man overboard; competing events and interruptions; novice and expert operation; errors and operational recovery. **A tenth — physical controls — was added during the phase** and is the subject of §A3.2.
- **R9** — **Three product architectures compared**: a communication-first radio with a basic AIS list; a fully self-contained AIS console; and a radio with essential AIS functions complemented by the chartplotter. The third advanced, on the basis that it retains operational independence without turning the radio into an undersized navigation workstation.
- **R10** — **Three AIS information structures compared**: a list ranked by range; a plot focused on relative position; and a hybrid of compact plot and prioritised list synchronised around one selected target. The hybrid advanced, with both list and plot as primary views, on the basis that it combines spatial comprehension with efficient lookup when the plot is crowded.
- **R11** — **Three channel-awareness treatments compared**: an oversized channel number on every screen; a fixed compact channel status; and a compact persistent status whose prominence increases during receive or transmit. The third advanced, on the basis that it preserves communication awareness without permanently consuming the centre of the AIS plot.
- **R12** — **Exploration Sprint 02, five working days, resequenced** so the physical control model was established before task flows and event behaviour were completed. Day one: compare fixed, contextual, explicit-mode and additional-hardware control models and map rotary, keypad, softkey and microphone responsibilities by screen state. Day two: rework target selection, channel change and call preparation against the baseline model. Day three: map distress and man-overboard separation, alert precedence, lost positioning and AIS data, unanswered calls and restricted operations. Day four: scenario walkthroughs across routine operation, close traffic, an incoming call and an emergency interruption, with a feasibility dependency review. Day five: consolidate the concept, decision register and development backlog, and present implications for hardware, firmware and chartplotter integration.
- **R13** — **Four decision-method rules were applied throughout exploration**: test each concept against the same operational scenarios rather than evaluating isolated screens; check whether the physical meaning of each input survives screen changes, incoming alerts and communication events; treat emergency and transmission inputs as invariant and permit contextual actions only where change is visible and recoverable; and record both the selected direction and the assumptions still requiring engineering confirmation.
- **R14** — **A twelve-entry exploration decision register**, each entry carrying a status and a named next confirmation. The register defined its own vocabulary explicitly: *established* meant selected as Creative Navy design direction for the following UX work, and expressly **not** completed user validation, hardware feasibility certification or final product approval. Raymarine retained decision authority over product, engineering, compliance and release.
- **R15** — **A physical input contract covering ten controls**, each specified in three conditions: radio view, AIS or menu view, and interrupted state. Five principles were attached: any context-sensitive button must have a visible label on the active screen; transmit and receive state must remain visible during AIS browsing; a modal event must not silently reinterpret a continuous physical control; returning from an alert should restore a safe and comprehensible task context; and power, volume, transmit and protected emergency controls are never repurposed as general navigation inputs.
- **R16** — **Scope was rebalanced inside the phase rather than extended.** Plot variations were reduced to the viable core alternatives; the cross-screen control contract was established before screens were detailed; critical flows were reworked against one consistent input model; and hardware and firmware dependencies were identified before handover rather than during high-fidelity UX. **The two-week exploration and the eight-week programme were unchanged, with no additional sprint and no change to the fee assumption.**
- **R17** — **UX development Sprint 03, core radio operation.** Operational decomposition of channel selection, receive, transmit, power, audio, scan, dual watch, triple watch and navigation; control behaviour specified across radio, AIS, settings, transmission and interruption states; detailed state transitions for active transmission, restricted actions, priority channel access and return from monitoring modes; a comparative prototype evaluation of contextual and fixed-function control concepts; and decision synthesis retaining the fixed-function model with all target movement assigned to the keypad.
- **R18** — **UX development Sprint 04, vessel awareness and digital calling.** Comparison of list-first, plot-first and hybrid AIS approaches including target detail, density and stale information; one target identity defined across list, plot, detail and call preparation, independent of row reordering; comparison of immediate calling, details-first and explicit recipient confirmation on matched tasks; separation of request transmission, pending acknowledgement, acknowledged call, no reply and failure; and task testing of target identification errors, wrong recipient submissions, actions, timing and acknowledgement comprehension.
- **R19** — **UX development Sprint 05, safety, degradation and integration.** Outgoing distress, received distress and locally initiated man overboard specified as three different workflows; four priority levels constructed with cross-state rules; **forty-three exception cases** documented with their feedback, action constraints and recovery; **twenty-eight functions assigned** to the radio, the chartplotter or a shared information boundary; scenario evaluation of interruption resumption, man-overboard meaning, missing position, AIS loss and a disconnected chartplotter; and handover preparation consolidating **thirty-two UX decisions** and defining **twenty-three screen families** and **eighteen component requirements**.
- **R20** — **Thirty-two recorded UX decisions**, eight from Sprint 03, eight from Sprint 04 and sixteen from Sprint 05. Each carries the trigger — the operational ambiguity, error mechanism or design tension — the selected rule, **the main competing option not carried forward**, a disposition that distinguishes a settled UX decision from one awaiting engineering, compliance or further test, and traceability to the specification that holds it.
- **R21** — **Four evidence classes were defined and applied to every decision in the register**: comparative prototype evidence from a controlled comparison of alternative behaviours; scenario observation from scripted interruption, emergency or degraded states; design reasoning from workflow, state model and cross-document consistency, establishing a testable rule rather than measured performance; and technical dependency, an explicit handover condition rather than a completed validation.
- **R22** — **Ten design principles issued as acceptance requirements, not visual preferences**: a hard control retains its operational domain irrespective of the visible screen; the selected channel and actual transmit or receive state remain accessible during AIS and calling tasks; routine call confirmation exposes the intended vessel, its registered identity and the working channel; sent, awaiting acknowledgement, acknowledged, no reply and failure are distinct; age and validity are part of the meaning of vessel and position data; outgoing distress, received distress and local man overboard retain separate state and timelines; high-consequence incidents command attention while routine information preserves operator focus; a return to earlier work happens only when the target and transaction context remain valid; radio and digital calling must remain functional without a chartplotter; and day and night display, motion, gloves and limited attention govern visual decisions.
- **R23** — **Twenty-three screen families and eighteen reusable components**, mapped to one another and to the decisions that produced them. The screen families cover radio home, AIS target list, AIS compact plot, own vessel, target detail, call preparation, call pending, call acknowledged, call failure or no reply, incoming routine call, alert surface, man overboard active, distress active, system status, radio settings, scan and watch, positioning unavailable, AIS empty or stale, transmission blocked, distress cancellation, audio feedback, chartplotter disconnected, and dense AIS traffic.
- **R24** — **UI delivery Sprint 06, visual direction.** Three visual languages compared: a dense technical instrumentation model with high density and extensive simultaneous status, rejected because routine metadata competed with urgent content; a chartplotter-inspired model with familiar navigation graphics and richer spatial cues, rejected for insufficient separation between communication and charting tasks; and a restrained communication-first instrument model with a stable channel landmark, controlled detail and strong state language, **selected** because it prioritises the action and its operational consequence. Information hierarchy was tested by weighing channel numeral prominence against selected vessel details and status messages on representative screens.
- **R25** — **Paired day and night presentation modes** specified without changing the position or meaning of any control, with identical interaction ordering and identical action labels in both.
- **R26** — **A token system with a named use for every value.** Canvas, primary text, secondary text, action accent, warning and critical, each with a night value and a day value. Typography: a large tabular numeral with a fixed baseline for the channel landmark across primary pages; medium-weight single-line screen and target titles where possible, with truncation never permitted to hide a registered identity or an alert meaning; short declarative verbs for transaction labels; small metadata for age, bearing and range, secondary but readable in the selected mode. An eight-pixel layout foundation with four-pixel intermediate spacing, aligned with the physical softkeys.
- **R27** — **Every semantic colour carries a mandatory non-colour encoding**, and priority is also communicated through event labels, icons and spatial treatment. Interaction focus uses a visible outline, weight and positional cue — **never colour alone**.
- **R28** — **UI delivery Sprint 07, component system.** Eighteen components in seven groups: radio continuity (channel status, audio feedback, scan and watch), navigation (softkeys, focus, task resumption), AIS content (list rows, plot markers, target details), calling (recipient confirmation, protocol status), safety (priority treatment, distress, local man overboard), system state (integrity indicators, inhibited action, empty states), and a day-and-night theme layer paired for each critical component type.
- **R29** — **A component contract, stated as a requirement.** Each component definition includes purpose, information required, state variants, valid actions, focus and disabled treatment, priority behaviour and dependencies. Components inherit the interaction principles: a selected target is always an identity rather than a row index, and a calling status component reflects the radio protocol rather than an optimistic animation. **The handover states explicitly that a visual library based on arbitrary colour overrides is not a sufficient implementation handover**, and that a component is complete only when its behavioural annotations, event priority, required labels and failure or disabled states are represented alongside its ordinary appearance.
- **R30** — **Six cross-component quality checks run at the close of Sprint 07**: consistency, so identical states use identical language and styling; focus visibility, so selection survives changes in list order or a non-critical event overlay; control alignment, so softkey captions describe the adjacent physical key's action; state provenance, so data age and source remain visible where consequential; priority semantics, so visual interruption correlates with severity; and theme parity, so day and night expose the same information and the same actions.
- **R31** — **UI delivery Sprint 08, completion and engineering handover.** All twenty-three screen families closed across normal, empty, degraded, blocked, interrupted and emergency variants; component variants cross-checked against the event matrix, the control contract and the exception catalogue; terminology aligned across calling status, data age, position validity, radio inhibition and local man overboard; engineering walkthroughs covering input events, transmit-inhibit feedback, data ownership, stale target selection and network reconnection; and a handover package of interaction specification, research and decision evidence, visual rules, component specifications, screen coverage and implementation acceptance scenarios with an issue and dependency register.
- **R32** — **Twenty-eight UI specification checks at final delivery, all passed**, covering typography, semantic distinctions, command region persistence, alert and source handling, form data correspondence, historical identity, focus behaviour and register completeness.
- **R33** — **Acceptance registers across the specification set.** Eighteen tests on the physical control contract; twenty on the detailed voice operating flows; sixteen on the calling specification; eighteen on the AIS information hierarchy; eighteen on the event priority matrix; twenty-three on the emergency specification; twenty-four verification scenarios in the exception catalogue; twenty-four on the radio and chartplotter responsibility model; ten UI acceptance criteria at handover; and the twenty-eight UI specification checks in R32. **Each is written as an observable condition testable against a prototype, a hardware mockup or a firmware implementation**, not as a subjective preference.
- **R34** — **A two-class change-control rule issued with the handover.** Any later proposal to remap the channel encoder, remove routine recipient confirmation, merge incident statuses or permit automatic network-initiated radio actions **reopens the corresponding recorded UX decision and requires a documented impact assessment.** The design system may vary presentation but may not invert the meaning of a physical control, alter a calling transaction outcome or remove the need for explicit incident resolution.
- **R35** — **Eight named engineering and compliance decision gates were recorded at handover**, each with a dependency and a named owner: physical inputs — final encoder detents, press events, glove tactility and hardware layout; radio controls — channel inhibit during transmission, scan exit and transaction-related tuning; the calling workflow — request, acknowledgement, timeout and working channel rules; safety — distress and received-distress wording, timing and cancellation by market; position data — source priority, freshness and no-fix behaviour; AIS freshness — target expiration thresholds, maximum density and risk inputs; chartplotter integration — network payloads, remote station boundaries and reconnect behaviour; and revised wording — the man-overboard and missing-position copy, to be re-tested with occasional operators.

### A3.2 The intervention — the physical control conflict

- **R36** — **The original assumption.** Exploration initially treated the hardware controls as an established input set. Screen wireframes could assign functions to the channel encoder, the directional keys and the three softkeys according to the needs of each screen.
- **R37** — **The conflict.** A promising AIS concept used the lower encoder to move quickly between vessel targets. **The same encoder had already been assigned as the primary channel selector in the radio view**, and settings would have given it a third role, moving focus or editing a value. When an alert interrupted an interaction, it became unclear whether the next rotation would select a vessel, change the tuned channel or navigate a message.
- **R38** — **The failure mode's specific character, recorded at the time.** The action may appear to be accepted, because a visible object moves. **A mode error is therefore not necessarily accompanied by an error message.**
- **R39** — **The reframing.** The question stopped being which AIS layout offered the shortest path to target selection, and became which control model could guarantee predictable communication behaviour across all screens, interruptions and levels of user experience. Creative Navy brought the interaction risk to the project review, proposed a focused comparison of physical and digital control contracts, and moved less consequential visual variants out of the immediate exploration schedule.
- **R40** — **Four control models compared against the same operational scenarios.** *A, contextual rotary* — the encoder adjusts channel on the radio view, target on the AIS view and selection in menus; fast, efficient hardware reuse; risk of hidden mode changes and error after interruptions. *B, fixed role* — the channel encoder always changes channel, while directional keys and softkeys manage contextual interaction; predictable, learnable, stable communication behaviour; some AIS tasks require additional key presses. *C, explicit mode* — the encoder changes purpose only after a deliberate press or other mode switch; powerful navigation with a visible contract, but the operator must still track an extra state, especially under pressure. *D, dedicated new control* — an additional input dedicated to secondary navigation or target selection; high speed without overloading the channel control, at the cost of hardware, enclosure changes and feasibility implications.
- **R41** — **Model C was examined in two variants and both were rejected.** If the mode persists after an interruption, local task continuity is preserved but a memory burden is created after attention has shifted. If the mode resets, channel tuning becomes predictable after interruptions but the meaning of the next rotary movement changes unexpectedly. A visible mode label is informative but does not remove the need to reacquire the active state under divided attention, and the model also depends on a reliable encoder press event and clear tactile feedback.
- **R42** — **Model D was set aside rather than rejected on merit.** A separate navigation encoder would preserve domain separation while offering fast target cycling, but introduces industrial design, bill-of-materials and panel-space consequences. **It was not needed to resolve the ambiguity, and the record states it remains an industrial design option if later product testing identifies unacceptable AIS browsing effort.**
- **R43** — **Why Model B prevailed, as recorded.** Consistency outweighs isolated task speed — one or two extra key presses are preferable to uncertainty about whether an input changes the tuned channel. Interruptions remain intelligible — an incoming call or alert does not silently change the meaning of a rotary encoder. Safety actions retain physical priority — priority channel access, distress initiation and push-to-talk do not depend on what the display currently shows. **And hardware changes stay optional** — the concept does not rely on adding another encoder to make the information architecture viable.
- **R44** — **The retained trade-off was recorded at the moment of decision, not discovered later.** Directional navigation through dense traffic needs usability checks, and the subsequent sprint was tasked with testing whether filtering, list sorting or accelerated key navigation reduces selection effort.
- **R45** — **The risk was characterised as structural rather than cosmetic.** If the same encoder silently changed purpose, adding better labels later could not fully remove the ambiguity. Resolving it before high-fidelity design protected the subsequent flow work from rework.
- **R46** — **What the pivot explicitly did not claim.** No measured error reduction and no engineering cost saving were claimed at the time. The value claimed was the removal of a known inconsistency from the preferred architecture before three weeks of detailed flow design and three weeks of UI production.
- **R47** — **The resulting invariant, carried through every subsequent sprint.** A screen may change what the keypad and the labelled softkeys do. It must not change the domain of the dedicated channel encoder, the microphone channel controls, push-to-talk, priority channel access or the protected emergency actions. **An input may be unavailable within its own functional domain — it is never silently reassigned to a different one.** The operator sees a rejected channel request, not a surprise focus change.

### A3.3 Research — what was done, with whom, and by whom

- **R48** — **Twenty-four prototype sessions, eighteen distinct operators, three research rounds** — one round per UX development sprint, eight sessions in each.
- **R49** — **Cohorts: six professional operators, six experienced recreational skippers, six occasional users.** *(How each cohort was defined, and how participants were recruited, is unconfirmed — §A10 item 6.)*
- **R50** — **Six participants took part in two rounds.** Eighteen distinct people account for twenty-four sessions. **Returners are not counted as new people** anywhere in the records.
- **R51** — **Round composition.** Round one, eight new participants, three professional, three recreational, two occasional. Round two, three returners and five new, three professional, three recreational, two occasional. Round three, three returners and five new, two professional, three recreational, three occasional.
- **R52** — **Creative Navy designed the protocols, moderated every session and analysed the results.**
- **R53** — **Raymarine supplied the physical bench mockup** on which every session ran: two rotary encoders, a four-way keypad with a confirm key, three softkeys, and wired microphone keys with push-to-talk, matching the proposed control layout. The display model was a 480 × 272 logical layout carrying radio, AIS list, AIS plot and own-vessel screens, with the channel badge always visible.
- **R54** — **Rounds one and two were counterbalanced.** Four participants took each condition first. Target data was matched for density and comparable distances between conditions, with list ordering varied to prevent rote repetition.
- **R55** — **A consistent session protocol was used throughout**: an orientation that explained the simulated prototype and the task objective **without identifying a preferred concept**; familiarisation with the physical inputs and brief discovery of the interface; scenario execution recording completion, error type, time, actions and need for prompting; an injected scripted communication, safety event or data loss; **a comprehension probe asking the participant to explain the current system status in their own terms**; and a debrief recording preference, confidence and concrete usability problems.
- **R56** — **Measurement definitions were published with the results.** Unassisted completion — the task objective achieved without moderator help, with participant-initiated correction still counting as unassisted. Wrong domain activation — an input that affected vessel selection or menu focus when channel control was intended, or the converse, **counted once per task and not per encoder detent**. Wrong selection — initial focus placed on an unintended target, correctable before transmission. Wrong recipient send — a simulated request submitted to an unintended registered identity. Completion time — seconds from the task cue to the defined objective, **including correction**, compared only within matched conditions. Status comprehension — a correct description of sent, pending, acknowledged or no reply. Recovery — a valid prior task restored and meaningful control resumed. Confidence — a descriptive ordinal response only, explicitly not a psychometric scale.
- **R57** — **Eight linked hypotheses were carried from the exploration control question through to the completed flows**, covering whether a fixed channel control reduces wrong-domain gestures; whether stable hardware incurs a browsing time cost; whether recipient confirmation prevents unintended submissions; whether distinct transaction states improve understanding; whether list and plot can retain a common target identity; whether interruptive safety cues preserve task recovery; whether a local man-overboard incident reads as separate from an outgoing distress alert; and whether operators can distinguish missing or stale data from valid positions.
- **R58** — **A fixed eight-target traffic fixture was used across every round and every specification**, with three deliberate data-quality conditions built into it: one target carrying no usable registered identity, one stale record holding only a last-known position, and six current targets. The intended calling recipient, its range and bearing, and the common operating channel were held constant throughout.
- **R59** — **Order effects and learning effects are recorded as a consideration, not dismissed.** Counterbalancing limited order effects in the first two rounds; the third round mixed returning and new participants, so learning effects remain a recorded consideration.
- **R60** — **No statistical significance testing was applied**, and the records state so. The comparisons are described as descriptive within-scenario comparisons from a small purposive sample, explicitly not population estimates.
- **R61** — **All medians published are reproducible from the participant-level tables**, which are retained for every round.
- **R62** — **No live radio transmission of any kind occurred.** No live digital calls, no live AIS reception, no live distress signalling, no use of the maritime emergency channel or the digital calling channel. **Zero live distress calls.** Every signalling state was a local simulation.

### A3.4 Measured results — round by round

**Round one, Sprint 03 — contextual rotary against fixed-role rotary, paired and counterbalanced, eight participants, three tasks.**

- **R63** — Tasks: retune to the priority channel while the AIS plot is open with a target selected, without losing the target; locate and select a named target in a dense eight-target presentation and open its details; and resume the AIS task and retune correctly after a scripted incoming routine call.
- **R64** — **Wrong domain activations: six of eight under the contextual model, zero of eight under the fixed model** — on the retune task, and again on the recovery task.
- **R65** — **Unassisted completion: six of eight under the contextual model, eight of eight under the fixed model**, on both the retune and recovery tasks. **Both prompted completions occurred under the contextual model.**
- **R66** — **Median retune time: 9.70 seconds contextual, 3.25 seconds fixed.**
- **R67** — **Median recovery time after the interruption: 14.05 seconds contextual, 6.70 seconds fixed.**
- **R68** — **Median target browsing time: 6.25 seconds contextual, 8.55 seconds fixed — a 2.30 second penalty under the selected model, accepted.**
- **R69** — **Six coded observations explain the pattern.** A professional operator expected the lower knob to select a channel while viewing AIS; the selected target moved instead. One operator noticed the unwanted target shift but could not independently recover channel selection. One retuned under the fixed model without losing the plot or the selection. One used keypad browsing but repeatedly re-checked the vessel name to maintain focus. One stalled after an incoming call and attempted the wrong channel input under the contextual model. One browsed more slowly with the keypad but recovered channel control without hesitation. **The recorded synthesis: the physical control carried a more stable learned meaning than the active screen did, and the principal usability issue was a preventable category mistake.**
- **R70** — **The recorded design response.** Creative Navy retained the fixed model and moved optimisation effort into target ordering, selection visibility and shortcut placement **rather than reintroducing a second channel mode.** Two findings were closed in UX; two were moved to the next sprint as interaction optimisations; two were logged as open engineering dependencies.

**Round two, Sprint 04 — immediate calling against explicit recipient confirmation, paired and counterbalanced, eight participants.**

- **R71** — Both concepts used identical hardware mappings, identical AIS information and identical physical controls. **The only variable was where the extra interaction was placed after the operator pressed the call action.**
- **R72** — **Wrong recipient submissions: two of eight under immediate calling, zero of eight under confirmation.**
- **R73** — **Initial wrong target selections: four of eight under immediate calling, three of eight under confirmation.** **All three initial errors under the confirmation condition were detected and corrected at the confirmation screen before any request was sent.**
- **R74** — **Median completion time: 17.95 seconds immediate, 23.80 seconds confirmed — a 5.85 second cost, accepted.** **Median physical actions: 6.0 immediate, 8.5 confirmed.**
- **R75** — **Status comprehension: three of eight correct with a generic success surface, eight of eight correct with explicit transaction states.** **Five participants interpreted a generic call-sent message as meaning the other vessel had responded or that voice communication was already available.**
- **R76** — **Shared target focus across list and plot: seven of eight retained the correct vessel after switching views.** One occasional participant moved focus when a row appeared to change position during a list update.
- **R77** — **Data-quality probes.** Seven of eight correctly explained why an individual digital call was unavailable for a target with no usable registered identity; one occasional operator assumed the greyed-out action was a temporary interface fault. **Six of eight recognised a stale record's position as historic; two occasional operators read the displayed range as current despite a small stale indicator.**
- **R78** — **The recorded interpretation, which must survive into the case study.** Confirmation did not prevent target selection mistakes. **It made the recipient identity legible at a second decision point, giving operators the opportunity to detect and correct them before the request was submitted.**
- **R79** — **Six design revisions entered the specification from this round**: the call action opens a confirmation surface and never submits directly; distinct sending, sent, awaiting acknowledgement, acknowledged and no-reply surfaces replace a single success message; the vessel name, range and bearing appear beside the selected symbol and on the preparation screen; a stale record is labelled with an explicit last-known statement and its live risk calculations are suppressed; an unavailable call action states that no usable registered identity was received; and list row position is frozen during active keypad browsing, refreshing at an explicit or safe boundary.

**Round three, Sprint 05 — scripted safety, interruption and degraded-state scenarios, eight participants, three of them returners.**

- **R80** — Six scripted conditions: a routine communication interrupting an AIS task and later clearing; a collision risk warning arriving during another operation; the operator activating a local man-overboard incident; an outgoing simulated distress with the vessel's own position unavailable; AIS reception absent rather than no nearby targets; and the connected chartplotter becoming unavailable.
- **R81** — **Resumed the interrupted task unassisted: seven of eight. Median resumption time 12.60 seconds across all eight attempts, 12.00 seconds across the seven unassisted recoveries.** **Both denominators appear in the records and both must be carried — see §A4.**
- **R82** — **Recognised the risk event and classified it correctly: seven of eight. Median recognition latency 3.60 seconds, range 2.1 to 8.2 seconds.** One occasional operator first described the warning as a general system notification.
- **R83** — **Activated the man-overboard function correctly: eight of eight. Understood that it had not transmitted an external distress alert: six of eight.** Two participants incorrectly inferred automatic external signalling.
- **R84** — **Understood that no position had been included in a distress alert sent without a position fix: six of eight.** Two participants interpreted the position status incorrectly.
- **R85** — **Distinguished an unavailable AIS receiver from a genuinely empty traffic picture: seven of eight.** One occasional participant read the blank list as no vessels nearby.
- **R86** — **Retained local voice and digital calling after the chartplotter was disconnected: eight of eight.** Radio independence was consistently comprehended.
- **R87** — **The residual issues clustered among occasional users**, and the records say so without generalising: the longest individual task times and most of the remaining interpretation errors occurred in that cohort. **These patterns are recorded as observational, with no experimental basis for causal cohort comparison**, because participants completed different tasks across rounds and three of the third round's participants had taken part in the second.
- **R88** — **Six findings were translated into explicit requirements**: a persistent local man-overboard incident status with a separate, explicit statement of external distress status; position-unavailable and no-valid-position language placed near distress status; an explicit AIS-reception-unavailable state with a retained last valid observation timestamp where relevant; an explicit collision-risk title with distinctive alert priority and a persistent acknowledgement path; restoration of a saved valid task with a clear explanation when a target has expired; and retention of voice and digital calling on the radio with a separate network status. **Each carries a named verification still required.**
- **R89** — **Two of those were recorded as high-severity and open for retest**: the man-overboard external status, and the missing-position status during a distress event. **The revised wording was specified. It was not re-measured.** (§A10 item 3.)

### A3.5 What did not happen — must be stated, not omitted

- **R90** — **No field research, no sea trials and no on-vessel work of any kind.** All twenty-four sessions were bench prototype sessions. **Raymarine's own brief named the operating conditions — wet hands and gloves, glare and night sailing, vibration, ambient noise and divided attention — and none of them was tested.** The engagement's own risk register says so, listing physical control behaviour under glove operation and enclosure ergonomics, overlay hierarchy under workload, movement and variable lighting, and real alert arbitration with loud audio as conditions requiring physical prototype trials in operational lighting and deck conditions.
- **R91** — **No competitive benchmarking.** No competing product was evaluated. The only reference products anywhere in the engagement record are Raymarine's own Ray53, Ray63 and Ray73 and their published operating documentation.
- **R92** — **No live radio, digital calling, AIS reception or distress transmission.** See R62.
- **R93** — **No hardware or firmware validation.** Encoder detent force and press events, tactile performance, wet-surface operation, glove accessibility, input bounce, transmit timeout and alarm acoustics were all recorded as open engineering dependencies at the close of the engagement.
- **R94** — **No certification, compliance or regulatory work.** Radio protocol behaviour, regional channel plans, permitted transmit power, distress procedure, cancellation semantics, alarm audibility and final conformity remained Raymarine's throughout, and the engagement record states this repeatedly.
- **R95** — **No audit or expert-review deliverable.** No heuristic review of the existing product line was scoped and none exists. The three-way concept comparisons are comparative design evaluations, not expert reviews.
- **R96** — **Implementation partnership was offered on Creative Navy's standard terms, as on other engagements. The substance is not recorded** — not the duration, not the form, not the frequency. §A4 governs the wording.
- **R97** — **The radio was built and released.** **No design-fidelity comparison is recorded.** Nothing in the source material compares the released interface against the delivered designs.
- **R98** — **No quotes and no reported speech.** No client, operator or participant speech is on record and none has been cleared.
- **R99** — **No usability testing of the revised safety wording.** See R89.
- **R100** — **Artefact thirteen of the specification set is absent** from the delivered documentation and from the engagement's own documentation index. *(§A10 item 7.)*

### A3.6 The client, the product and the boundary

- **R101** — **Raymarine's existing fixed-mount line is the Ray53, Ray63 and Ray73**: Class D Digital Selective Calling with an internal satellite positioning receiver, a receive-only AIS receiver on the Ray73, loudhailer output, NMEA 2000 and SeaTalkng networking alongside NMEA 0183, and support for optional second stations. This is the documented precedent referenced throughout the specification set.
- **R102** — **The new radio's control set**: an upper rotary for audio gain and squelch; a lower rotary for channel selection; a four-way directional keypad with a confirm key; three softkeys whose actions are printed directly above them; a direct priority-channel key; a covered distress control; a dedicated man-overboard key; a power key; and a wired microphone carrying push-to-talk, channel up and down, volume up and down, a priority-channel key and a transmit-power key.
- **R103** — **The display reference was a 480 × 272 logical canvas**, stated in the handover as a layout convention for the programme, with pixel density, display behaviour, hardware geometry and final test thresholds left as engineering inputs. *(Physical panel size unconfirmed — §A10 item 8.)*
- **R104** — **Four primary screens** — radio, AIS target list, AIS compact plot and own vessel — navigable left and right when no overlay owns focus, with contextual screens, transaction screens and safety and system screens layered beneath them.
- **R105** — **The product boundary, settled in exploration and specified in Sprint 05.** The radio owns transmission: voice actions, channel tuning, digital calling transactions and protected emergency initiation remain local. The chartplotter owns navigation: chart, route, radar context and large-format traffic analysis. The network shares information — vessel positions, identity, and valid positioning or calling status where supported — **and does not become remote control.**
- **R106** — **Twenty-eight functions assigned** across three registers: voice, calling and emergency operations; AIS reception, interpretation and vessel identity; and navigation, integration and interface configuration. Each carries an authority, a role for the other device and a specific rule.
- **R107** — **Five ownership decisions fixed at the close of Sprint 05**: local autonomy, so voice, local AIS viewing and configured digital calling continue with the chartplotter disconnected; no duplicate chart, so the radio carries a compact plot and a list but no chart layers, routes or radar controls; explicit call ownership, so a target selected on the chartplotter neither retunes the radio nor submits a call; provenance, so received data is identified by source, age and validity; and independent incidents, so local and transmitted emergency records are not silently cleared by a shared display.
- **R108** — **Six integration shortcuts were examined and rejected, each with a recorded reason**: a full AIS chart on the radio, rejected because a small display becomes a poor duplicate of the chartplotter; **a chartplotter target highlight automatically becoming the radio's call recipient, rejected because an unrelated chart navigation could alter a communications recipient**; the chartplotter controlling the radio's channel, rejected for remote-control ambiguity and conflict with the fixed hardware semantics; shared alert dismissal across screens, rejected because a local silence could be mistaken for remote acknowledgement or resolution; using the chartplotter's positioning whenever the radio's own fails, rejected because external position eligibility, freshness and source arbitration are not guaranteed; and centralising radio settings in the chartplotter, rejected because the radio becomes harder to commission and to use offline.
- **R109** — **The scope expressly excluded**: AIS transmission, a chart engine, route creation, radar control, autopilot command, remote radio command from the chartplotter, multiple remote handset station interfaces, firmware implementation, industrial design tooling and certification.

### A3.7 The design decisions, and the reasoning behind them

- **R110** — **The channel encoder's single domain.** Turning the lower encoder or using the microphone channel keys requests a voice channel change only, in every ordinary display context, including while the AIS plot is open with a vessel selected. **A rejected channel request is rejected atomically**: the actual channel is retained, the reason is displayed, and **no retune is queued to apply when the restriction lifts.** The recorded reasoning is that a delayed change would produce an unexpected frequency change after the operator had moved on.
- **R111** — **Transmission addresses the channel, never the screen.** Push-to-talk transmits on the currently selected permitted channel and never on a highlighted vessel. Highlighting a vessel is not selecting a frequency; a digital call requires its own explicit flow.
- **R112** — **Selected channel and monitored channel are visually distinct.** While scanning or in a watch mode, the prominently displayed channel remains the selected working channel, and a second label identifies the frequency actually being heard. The recorded reasoning is that monitoring must not suggest an automatic change to manual tuning.
- **R113** — **Requested transmit power and effective transmit power are different values**, and the display always shows the effective one. A blocked request leaves the previous value intact and explains the channel restriction.
- **R114** — **The audio encoder has a time-bounded secondary state.** A press enters squelch adjustment with a persistent label; after seven seconds without input, responsibility returns to volume. The recorded reasoning is that a secondary state may be overlooked without an explicit expiry — and the underlying view, target selection and modal focus are preserved throughout.
- **R115** — **Priority channel access is a direct radio control, reachable from any screen, and it is not a distress action.** Using the priority channel enables voice communication on the maritime calling and distress channel where permitted; it does not trigger a digital distress alert, which has its own protected activation and transaction process.
- **R116** — **A blank softkey has no action and gives no false tactile expectation**, and a softkey's label and its action binding change together, with no momentary mismatch permitted.
- **R117** — **The hybrid AIS model with one shared identity.** The list and the compact plot are peer primary screens reached by the same navigation, exposing the same actions and the same persistent channel header. **Selection is held by a stable vessel identity, never by a row index or a screen coordinate.** Switching views, changing sort order, zooming the plot or receiving routine position updates do not change the selected vessel; if a target disappears, no neighbouring record inherits focus and the operator must deliberately select another.
- **R118** — **The list is a stable directory rather than a live leaderboard.** Incoming position updates refresh displayed range and bearing without reshuffling rows during an active browsing interaction; reordering happens on an explicit sort or at a safe refresh boundary. A sort control cycles range, risk and name with the active order labelled.
- **R119** — **Overlapping targets are grouped only where necessary, with a count**, and a group is never interpreted as one vessel, never exposes a call action, and never suppresses a risk signal attached to a record inside it. Every received target remains individually reachable through the list.
- **R120** — **Target data quality is a separate dimension from target risk, and both are shown without relying on colour.** Current, risk-flagged, uncertain-prediction, stale-or-lost, unknown-identity and receiver-unavailable each have a distinct plot and list treatment. **An uncertain calculation is shown as unavailable or qualified rather than given a numeric substitute**, on the recorded reasoning that a numerical ranking must not treat uncertainty as zero risk.
- **R121** — **The calling flow places one deliberate confirmation between selection and transmission.** From the list or the plot, the call action opens a compact preparation surface showing the vessel, its registered identity status, the proposed working channel and the routine priority — **and sends nothing.** A second explicit action sends. The preparation surface is deliberately not the full target detail page; target details remain available as an optional step rather than a mandatory gate.
- **R122** — **The recipient is revalidated at the moment of sending.** If the target identity changed or the record was invalidated, the transition stops and the operator must reselect. **No neighbouring target is substituted.** Sending is also gated on the station being commissioned, on the chosen working channel being lawful under the active regional profile, and on no overlapping transaction being active.
- **R123** — **Six distinct calling states, with language fixed for each.** Ready to send; sending; request sent and awaiting acknowledgement, with voice contact explicitly stated as not established; acknowledged, with the working channel named and voice operation indicated as available; no acknowledgement received, with contact explicitly not established; and request not sent, meaning the local transmitter did not succeed. **A missing acknowledgement and a failure to transmit are different outcomes with different recovery paths**, and a routine timeout never escalates into a distress call.
- **R124** — **A visible vessel is not always a callable vessel.** Where a target has no usable registered identity, its position remains inspectable and the call action is unavailable with a stated reason. Where a record is stale, its last-known position is shown with an explicit qualifier, its live risk calculations are suppressed, and no new call may be originated from it.
- **R125** — **Four event priority levels, assigned by consequence rather than arrival order.** Emergency — outgoing distress, received distress and local man overboard — takes a persistent incident surface that no ordinary action dismisses. High concern — a qualifying proximity risk or an urgency event — is prominent and actionable with its source visible, and never silently alters a radio control. Operational — an incoming routine call, a degraded data condition, a blocked action — is noticeable and proportionate, and does not silently change the selected vessel or the tuned channel. Background — a new target, a routine status change — updates quietly and never takes keypad focus.
- **R126** — **A five-step arbitration sequence runs between an event arriving and being shown**: classify by type and consequence; coalesce exact duplicates so repeat packets refresh an existing record rather than stacking dialogs; arbitrate against the active incident, the radio state and the current focus owner; present on the appropriate surface with its permitted actions and sound; and restore the prior task **only after a validity check**.
- **R127** — **An interruption stores a structured snapshot and restores it conditionally.** The origin screen, the focused item's identity, list position, plot scale, uncommitted draft values, the actual transaction status and the live channel are all captured. On return, each is validated: a still-valid target is restored; an expired one produces an explicit unavailable state; an uncommitted settings value is restored or its loss is explained. **No unsent action is ever replayed.** A restored call draft requires a new deliberate send.
- **R128** — **Three emergency types are modelled separately, with independent identities, timelines and histories.** A locally initiated man-overboard incident records a reference position, its source and its time, and runs an elapsed clock — **and transmits nothing.** An outgoing distress alert is a protected radio action with its own sending, sent, awaiting acknowledgement, acknowledged and failed states. A received distress alert is information from another station, identified by sender, time and supplied position. **Viewing or silencing a received alert transmits no acknowledgement**, and silencing a local alarm never ends an incident.
- **R129** — **Distress initiation is protected and independent of the screen.** The covered control initiates the approved procedure from any display state, including from AIS, from a call in preparation and from another emergency surface, and an incomplete activation gesture never shows a sent status.
- **R130** — **Position provenance is carried through the emergency interface.** A current fix, a fix that has aged, a last known position with its time, and no position at all are four different conditions with four different statements. **A position recovered after an alert was sent does not retrospectively change what that alert contained.** Where no position was supplied, the interface says so and offers the voice procedure rather than blocking it.
- **R131** — **Cancelling an inadvertent distress alert is an explicit procedure, not an undo.** It is distinct from silencing an alarm and from closing a panel; it includes a voice cancellation step; a failed cancellation never displays a cancelled state; and **powering the radio off is not presented as a cancellation shortcut.**
- **R132** — **Emergencies coexist without overwriting one another.** A man-overboard incident and an outgoing distress alert can be active simultaneously, each retaining its own identifier, time, status and origin, reachable through an incident selector. Closing one never resolves another.
- **R133** — **Degraded conditions are enumerated rather than generalised: forty-three exception records across eight independent state axes** — voice radio state, display context, calling transaction, AIS data quality, positioning, safety incident, interruption and chartplotter link. **The governing statement is that a current screen is not a system state**, and that the interface is a state interpreter rather than the source of truth for radio outcomes.
- **R134** — **Failures are attributed to the subsystem that produced them.** A chartplotter link failure is reported as a loss of chart integration and never as a radio fault; an AIS receiver failure never implies an empty sea; a missing registered identity is distinguished from a receiver failure. A per-feature dependency map records which functions survive which failure.
- **R135** — **Message wording follows a fixed pattern**: state what happened, then the operational consequence, then what the operator can do. Generic error text is explicitly declared insufficient for safety-related states, and status text names the actual cause and the allowed next action rather than offering an invisible retry or an animated success for a rejected request.
- **R136** — **Four design rules were locked for UI delivery and written as acceptance conditions**: no screen view remaps radio tuning or the direct safety controls; communication and system states must reflect the actual protocol and data state; severity is prioritised while the current context is preserved and restorable; and a disconnected chartplotter cannot disable local radio functions.

---

## A4. Evidence calibration — mandatory

**R1–R35 are engagement record and may be stated plainly, but they are not outcomes.** "Twenty-three screen families were delivered" is a fact; "twenty-three screen families transformed the product" is not. The same applies to the eighteen components, the thirty-two decisions, the forty-three exception records and the acceptance registers. They describe the work, not its effect.

### The measured comparisons — the strongest evidence here, and the easiest to overstate

**R63–R89 are Creative Navy-measured** and may be stated as such. Required framing:

> Creative Navy designed the test protocols, moderated all twenty-four sessions and analysed the results. Raymarine supplied the physical bench mockup on which the sessions ran. Each comparison was paired and counterbalanced within participants, with task wording, target data and starting states held constant. The findings describe operator behaviour on a prototype against a fixed scenario fixture. They are not a measure of radio performance, of real-world calling accuracy, or of outcomes at sea.

Four things must not be attached to them.

1. **They are not population estimates.** Eight participants per round, purposively recruited, with no significance testing applied and the records saying so (R60). No percentages beyond the counts as written, no prevalence claims, no "operators report that…" as a statement about a population.
2. **Eighteen people, not twenty-four.** Six participants took part in two rounds (R50). The distinction must be explicit wherever the numbers appear, and returners must never be counted as new people.
3. **They are not safety results.** No live transmission, no live distress, nothing measured at sea (R62, R90, R92). **The step from "the interface states the correct fact" to "the operator therefore acts correctly, and an incident is avoided" was not measured and must not be taken.**
4. **Cohort patterns are observational.** The residual errors clustered among occasional users (R87), and the records explicitly rule out causal cohort comparison because participants completed different tasks across rounds and three of the third round's participants had taken part in the second. Describe the pattern; do not explain it.

### The two prices — write both halves or neither

**This is the engagement's distinctive claim and it only works whole.** The fixed-role control model removed a class of error (R64, R65) **and cost 2.30 seconds of median target browsing** (R68). The confirmation step removed a class of addressing error (R72, R73) **and cost 5.85 seconds and two and a half interactions** (R74). Required discipline:

> Where a result is cited, the cost accepted to obtain it is cited in the same passage.

Writing the gain without the price turns a documented trade-off into a marketing claim, and the trade-off is the more interesting fact.

### "Prevented wrong calls" is one word away from false

The supportable claim is that **zero wrong-recipient requests were submitted under the confirmed condition against two under the immediate condition, and that three initial selection errors were caught at the confirmation screen before any request was sent.** The engagement's own recorded interpretation must survive into the case study:

> Confirmation did not prevent target selection mistakes. It made the recipient identity legible at a second decision point, giving operators the opportunity to detect and correct them before the request was submitted.

Unsupportable: a reduction in real-world misdialling, a safety outcome, any suggestion that the design prevents collisions, or any claim about rescue.

### The denominators travel with the figures

Two in particular. **Task resumption is 12.60 seconds across all eight attempts and 12.00 seconds across the seven unassisted recoveries** (R81) — both are in the records, they measure different things, and collapsing to one loses the honesty that makes the figure worth citing. **And four of eight made an initial wrong selection under immediate calling, while two of eight actually submitted one** (R72, R73) — a selection error and a transmitted error are different incident types and the records keep them separate.

### The residual failures were not closed, and that is the honest part

**R83, R84 and R89 record Creative Navy's own design failing Creative Navy's own comprehension probes**, twice, on the two questions with the most serious external consequence: whether a local man-overboard action had sent an external alert, and whether a distress alert had carried a position. Required framing:

> Two of eight operators believed a local man-overboard action had transmitted an external distress alert. Two of eight believed a position had been included in a distress alert sent without a position fix. Revised wording was specified for both and recorded as requiring re-testing with occasional operators. It was not re-tested within the engagement.

**Do not soften this into findings about an existing product**, and do not write the revised wording as though it worked. **Severity records the consequence of the interface ambiguity within the scripted task** — not that a corresponding real event occurred. A reader must not come away thinking anybody went overboard.

### The field conditions were named by the client and were not tested

**R90 must appear in the case study, not be quietly omitted.** Raymarine's brief named wet hands and gloves, glare and night sailing, vibration, ambient noise and divided attention. The engagement tested none of them. The honest statement is that the research established what operators understood and could do with a prototype on a bench, with the manufacturer's own control rig under their hands — and that it says nothing about what happens at a helm. **This is also what prevents the study being miscited onto the glove, night-operations and sunlight-readable-display pages, which it must not touch.**

### Implementation partnership — the shape is known, the weight is not

**R96 requires this wording or close to it:**

> Creative Navy offered implementation partnership on its standard terms, as on other engagements. The substance of what followed — its duration, form and frequency — is not recorded in the engagement material available.

**Do not state a duration, a count of reviews, a count of tickets or a description of the working relationship.** Do not borrow AIT's five months, three progress reviews and eight support tickets. Do not borrow Schone's seven-month screen-by-screen comparison, four closed gates and twelve-month retainer. If the engagement lead supplies the weight (§A10 item 1), the phase can be written at it — and until then the method pages must not claim this engagement as an instance of the phase at any particular depth.

### Release is not fidelity, and fidelity is not quality

**R97 may be stated plainly: the radio was built and released.** Three things must not be attached to it. **It is not "shipped as designed"** — no fidelity comparison is recorded and AIT's claim must not be transplanted here. **It is not a commercial result** — no sales, reception, review or market figure exists. **And it is not evidence that the design is good** — a product reaching market says nothing about whether the interface works, which is a separate and separately interesting question that this engagement did not answer.

### External research frames the category, not this product

**The standards and published material in §A8 establish that the writer understands the domain.** No standard named there was certified to, audited against or worked to, and no source cited there measured this product (R94). Any phrasing implying otherwise is false — and in a domain where "compliance" governs whether a radio may be sold, the rule is stricter than usual.

### What must not be claimed

- **Any safety, rescue, distress-response or collision outcome.** The design makes specific distinctions explicit and those distinctions were checked against scripted conditions by operators. Nothing beyond that was measured.
- **Any regulatory, type-approval, certification or conformity credential.** Creative Navy designed an interface; Raymarine retained radio protocol behaviour, regional channel plans, distress procedure, alarm audibility and final conformity (R94).
- **Any field, hardware, lighting, glove, vibration, wet-surface or acoustic claim** (R90, R93).
- **Any characterisation of competing products, and any competitive-vector argument** (R91). The proprietary term *competitive vector* must not appear in this case study.
- **Any audit or expert-review credential** (R95).
- **Any quotation or reported speech** (R98).
- **Any commercial, sales, market-share or reception figure.**
- **Any claim about what the released product does or how it performs**, beyond the fact of release.
- **Any statistical claim**: no significance, no confidence, no effect size, no extrapolation from eight participants.

---

## A5. Positioning — the angles worth leading with

**Ranked by how much of this exists nowhere else in the corpus.** The first four are things no other engagement can supply. The last four are strong but have company, and must be written from this engagement's own material rather than from phrasing the corpus already uses elsewhere.

### A5.1 A physical control that is not allowed to change its mind — lead with this

Every other engagement in the corpus treats hardware as a constraint on the screen. **This one treats the meaning of a rotary encoder as the load-bearing architectural question.**

The conflict is ordinary and that is why it matters. A radio screen needs a channel selector. An AIS plot needs a way to step between vessels. A settings list needs a scroll. There is one encoder in a convenient place, and the economical answer is to let the visible screen decide what it does. **That is how a selected state works in every list component ever written, and it is also how an operator reaches for the channel knob during a close-quarters situation and moves a vessel symbol instead** (R37).

The failure mode is the part worth dwelling on: **the wrong action appears to be accepted, because something visible moves** (R38). There is no error. There is no message. There is a radio still on the old channel and an operator who has to work out, under pressure, why.

Creative Navy did not solve this by labelling it better. The record is explicit that it could not have been (R45): if the same control silently changes purpose, labels added later cannot fully remove the ambiguity. Instead the question was changed — from which layout reaches a target fastest, to which control model guarantees predictable communication behaviour across every screen, interruption and experience level (R39) — a dedicated study was inserted into the second exploration sprint, four models were compared (R40), and the decision was made **before a single detailed flow was drawn.**

Then it was held. Through transmit locks, pending transactions, incoming calls, proximity warnings, man-overboard incidents and active distress procedures, across forty-three documented exception conditions, the rule survived: **a screen may change what the keypad and the labelled softkeys do; it may not change what the channel encoder is** (R47). And it was written into the handover as a change-control trigger, so that a future team proposing to reuse the encoder has to reopen the decision rather than quietly undo it (R34).

### A5.2 The engagement bought predictability twice, and published the price both times

This is the clearest instance of *tension-driven reasoning* in the corpus, because both sides of the tension carry a number.

**First purchase.** The fixed-role control model eliminated wrong-domain activations — six of eight under the contextual model, zero of eight under the fixed one, on retuning and again on recovery after an interruption (R64) — and it made every participant able to complete both tasks unassisted, where two had needed prompting (R65). **It also made target browsing slower: a median of 8.55 seconds against 6.25, a 2.30 second penalty** (R68). The penalty was accepted, recorded, and answered in screen design — target ordering, persistent identity labels, a list fallback for crowded plots, contextual actions placed beside the selection — **rather than by reintroducing a second mode** (R70).

**Second purchase.** A deliberate confirmation step between selecting a vessel and sending a digital call eliminated wrong-recipient submissions — two of eight under immediate calling, zero of eight with confirmation (R72) — and caught all three of the initial selection errors made in that condition (R73). **It also cost a median of 5.85 seconds and two and a half interactions** (R74).

A design that is slower on purpose, twice, with the cost measured and recorded both times, is unusual enough to be the spine of the study. **And the second decision only reads correctly with its honest qualifier attached** (R78): the confirmation step did not stop people selecting the wrong vessel. It gave them somewhere to notice.

### A5.3 Five of eight thought the other vessel had answered

One wording decision, measured. A generic success message after a digital call was sent was read by five of eight operators as meaning the other vessel had responded, or that voice communication was already available. The same transaction expressed as distinct states — sending, request sent, awaiting acknowledgement, acknowledged, no reply, not sent — was read correctly by eight of eight (R75).

**It generalises into the engagement's governing rule.** A radio's digital calling layer has protocol states that the radio reports and the screen may only relay; the interface is a state interpreter, not the source of truth for what happened on the air (R133). From that single rule come six named calling states with fixed language (R123), the separation of a timeout from a transmission failure, the refusal to queue a blocked channel change so it applies later (R110), the distinction between requested and effective transmit power (R113), the distinction between a selected channel and a monitored one (R112), and forty-three exception records holding the line in conditions nobody would design for voluntarily.

### A5.4 Half the honest story is the part that was not fixed

Two of eight operators believed that pressing the man-overboard key had transmitted an external distress alert. Two of eight believed that a distress alert sent without a position fix had carried a position anyway (R83, R84). Both were recorded as high-severity, both received specified revised wording, **and neither was re-tested inside the engagement** (R89).

This is worth leading a section with rather than burying, for three reasons. It is Creative Navy's own design failing Creative Navy's own comprehension probes. It is the engagement's clearest demonstration that a priority architecture does not by itself make meaning legible — the operators activated the function correctly eight times out of eight and still misunderstood what it had done. And it is the failure that matches the field record exactly: the search-and-rescue services' documented problem with digital distress alerts is not that boaters cannot press the button, it is that the alerts arrive without a position or without a registered identity (§A8.2).

A case study that names an unfixed problem is more credible than one that does not, and this one is more credible than most because the unfixed problem is named in the engagement's own handover gates (R35).

### A5.5 The standard already has a human-machine interface clause, and it stops where the hard part begins

The recommendation that defines digital selective calling contains a clause headed *shipborne human machine interface*. It requires that the equipment refuse to transmit any digital call until a registered identity has been configured, and display a warning until one is. It requires the vessel's own position, **its source and its age**, to be displayed, with a reminder before the fix is four hours old and automatic erasure at twenty-three and a half hours. It requires the operator to accept an automatic channel switch before it happens. It requires a distress self-cancel to be available at top level, and it specifies what happens if the set is switched off instead. And it requires distress to be activated only through a dedicated, clearly identified, physically protected control needing **at least two independent actions** (§A8.1).

**The protocol layer, in other words, already encodes provenance, consent and guarded initiation.** What it does not reach is what a shared encoder means across four screens, how a vessel on a plot becomes a radio recipient, how three emergencies coexist on one display, or how a degraded feed differs from an empty sea.

That is the frame for the whole case study: **this engagement extended a discipline the domain already had, into the territory where the domain's own standard stops.** It is checkable against a published recommendation, and no page in the corpus currently makes it.

> **This frame is this study's and not another's.** KISPE's is that military symbology has distinguished unknown from hostile for three decades. Schone's is that a ground control station sits inside the airworthiness envelope, and that the protocol grades control while the screen had stopped. **Do not let any of the three migrate.** The distinguishing substance here is that this is a human-machine interface clause *inside an equipment standard* — a rarer thing than a protocol implying a distinction — and that the engagement's move is extension rather than restoration.

### A5.6 Eight state axes, forty-three named conditions, and one sentence that organises them

*A current screen is not a system state* (R133). An operator can be on an AIS plot, awaiting an acknowledgement to a call sent two minutes ago, holding no valid position fix, running an active man-overboard incident and disconnected from the chartplotter — simultaneously, with none of those facts implied by any of the others.

Eight axes hold that: voice radio state, display context, calling transaction, AIS data quality, positioning, safety incident, interruption and chartplotter link. Forty-three exception records specify what the interface says in each consequential combination, and a per-feature dependency map records which functions survive which failure — so that a lost AIS receiver does not remove voice calling, a lost chartplotter does not remove anything local, and a missing registered identity is distinguished from a broken receiver (R134).

Pairs with KISPE's forty named degradation conditions rather than competing with it; the pairing is coverage, not duplication.

### A5.7 The product boundary drawn as a question about authority

Twenty-eight functions were assigned between the radio and the connected chartplotter on a single rule: **the device that performs the irreversible act owns the decision to perform it** (R105, R106).

The rejected shortcut is the interesting part. Letting a vessel highlighted on the chartplotter populate the radio's call recipient looked convenient and was removed from scope, because an unrelated piece of chart navigation could change who a radio was about to call (R108). Five more convenient integrations went the same way for related reasons: no chartplotter control of the radio's channel; no shared alert dismissal, because a local silence could be read as remote acknowledgement; no automatic fallback to the chartplotter's position; no centralised settings; and no chart engine on a radio display.

Related to Schone's separation of inspection, intent and authority, but reached from the opposite direction — across two devices rather than inside one console — and it must be written from this material.

### A5.8 Rescoped inside the programme, in answer to a brief that asked for it

The control study was funded by trimming plot variants and secondary menu patterns, not by adding a sprint or revising a fee (R16). The two-week exploration and the eight-week programme were unchanged.

**And the client had asked for exactly this behaviour.** Raymarine's brief wanted a partner for product decisions rather than interface execution, named the trade-offs it wanted resolved, and explicitly invited the agency to explain where it would challenge or reshape the brief (R4). That makes the pivot a commissioned judgement rather than an unprompted one — which is a better story, not a weaker one, and it belongs in the buying guidance as much as in the case study.

---

## A6. Classification and filing

```
## Classification

- **Primary case-study category:** /evidence/case-studies/marine
- **Primary context:** /contexts/marine-and-maritime-systems
- **Also-relevant contexts:** /contexts/embedded-devices-and-constrained-interfaces, /contexts/high-consequence-environments, /contexts/regulated-products
- **Connects to:** /situations/complexity/system-state-is-hard-to-understand, /situations/complexity/abnormal-conditions-break-the-interface, /situations/complexity/operators-rely-on-memory-too-much, /situations/risk-and-consequence/user-error-has-serious-consequences, /situations/risk-and-consequence/users-cannot-recover-cleanly-from-errors, /situations/risk-and-consequence/warnings-are-visible-but-not-actionable, /situations/risk-and-consequence/the-interface-increases-cognitive-load-at-the-worst-moment, /situations/delivery-and-execution/the-team-is-shipping-without-a-clear-behaviour-model, /failures/state-visibility-failures/mode-changes-are-unclear, /failures/state-visibility-failures/users-cannot-see-what-state-the-system-is-in, /failures/interpretation-failures/data-is-available-but-hard-to-interpret, /failures/interpretation-failures/warnings-are-visible-but-their-meaning-is-unclear, /failures/error-and-recovery-failures/errors-are-easy-to-make, /failures/error-and-recovery-failures/rare-scenarios-have-poor-interaction-support, /failures/cognitive-failures/users-cannot-reorient-quickly-after-interruption, /capabilities/state-and-status-visibility-design, /capabilities/design-for-abnormal-and-degraded-scenarios, /capabilities/error-reduction-and-recovery-design, /capabilities/usability-evaluation-for-high-consequence-products, /capabilities/warning-and-alarm-clarity-improvement, /capabilities/information-architecture-for-expert-systems, /practices/usability-testing-under-realistic-constraint, /practices/state-and-transition-review, /practices/edge-case-and-degraded-mode-analysis, /practices/error-likely-interaction-review, /practices/alarm-and-warning-evaluation, /practices/task-criticality-mapping, /practices/evidence-led-prioritisation
```

### A6.1 Structural change required — read before any repository work begins

**`/contexts/marine-and-maritime-systems` does not exist and must be created in the same change set as this study.** `lint_case_studies.py` resolves every `/contexts/` reference in a case-study file against the filesystem and fails regardless of whether the Classification block is otherwise correct, so this study cannot land against a context page that is not there.

Four things are required together:

1. **A new entry in `Site-Structure/site_structure__1_.md`** under `/contexts`.
2. **A new page, `Articles/Contexts/contexts--marine-and-maritime-systems.md`.**
3. **A new entry in `Content-registry/content-registry.json`** following the existing schema — `source_file`, `title`, `slug`, `category`, `parent_slug`, `related_slugs`, `article_type`, `priority`, `generation_status` — for the context page and for this case study.
4. **The context-change protocol**: `python3 Guidance-meta-layer/lint_case_studies.py <repo>` re-run across the entire corpus within the same change set, before commit.

**`/evidence/case-studies/marine` already exists** and its structure entry already anticipates further marine studies. No category change is needed.

> **The gate is currently returning a false pass and must be fixed first.** Run against this repository, `lint_case_studies.py` reports *"Scanned 0 case studies… PASS"*. It globs `contexts--*.md`, `site_structure.md` and case-study files at the top level, while the repository nests them under `Articles/Contexts/`, `Site-Structure/` and `Articles/Case studies/`. It therefore finds no valid contexts, no valid categories and no case studies, and exits zero. **The context-change protocol depends entirely on this gate, so it must be made to walk the tree — or a documented flattened-snapshot step added — before the new context page lands.** Raise this with whoever owns the script; do not land a context change against a gate that cannot see the corpus.

### A6.2 The marine context page has two authors — write it once

`corpus-integration-brief.md` already carries a live recommendation to create this page with the MDU engagement as anchor. **This study and the MDU contribute complementary halves and the page must be written from both together, not sequentially**, or it will acquire two unconnected parts with a visible seam — the same instruction the Schone brief gives about the defence page.

- **The MDU brings the reading environment and the advisory boundary**: a glazed wheelhouse across the full ambient range, a unit mounted wherever there is room so the reader's position is unknowable, two units per vessel, and the distinction between equipment that performs a function and equipment that informs one.
- **This engagement brings the communications regime and the regulatory vocabulary**: the global distress and safety system the radio participates in, digital selective calling and registered vessel identity, the calling and distress channels, AIS as a receive-only and deliberately incomplete picture of surrounding traffic, bridge alert management and what it does and does not reach, and the presentation standards that exist to make every display on a bridge behave consistently (§A8).
- **Cox Marine and Torqeedo contribute the helm and the vessel subsystem** and should be reviewed for whether the new page belongs in their also-relevant lists during the same sweep.

### A6.3 Phase mapping — four of five, with the fifth at unspecified weight

- **Sandbox Experiments** — the first exploration sprint. Task and event mapping ranked by urgency, frequency and independence requirement; three product architectures, three AIS structures and three channel-awareness treatments compared; alternative calling, alert and recovery paths wireframed; the risk register that surfaced the control conflict (R7–R11). Option space mapping at architecture level before any structure was committed to.
- **Concept Convergence** — the second exploration sprint. The four-model control study, the cross-screen physical input contract, the consolidated calling path, the alert priority model, the twelve-entry decision register and the three-sprint handover plan (R12–R16, R40–R47). **A textbook instance: the tension between target-selection speed and control predictability was resolved at system level instead of traded off locally, and the losing option's advantage was measured and recorded rather than dismissed.**
- **Iterative System Building** — the three UX development sprints and the three UI delivery sprints. Three research rounds feeding three design revisions, thirty-two recorded decisions, forty-three exception records, twenty-three screen families and eighteen components (R17–R31, R63–R89).
- **Organizational Integration** — Sprints 07 and 08. The component contract specified as semantic state properties with the explicit statement that a library of colour overrides is not a sufficient handover; the screen register; the decision register with its rejected alternatives; the acceptance registers; and **the two-class change-control rule, which is the distinctive part** (R28–R34). A strong instance of a design system as reasoning documentation rather than a component library.
- **Implementation Partnership** — **offered on standard terms; weight unrecorded** (R96). Name the phase, state that it was offered as on other engagements, and **state no duration, form or frequency.** See §A4 and §A10 item 1. The method pages must not claim this engagement as an instance at any particular depth until the weight is supplied.

### A6.4 On the primary context, and the slugs that were rejected

**The tagging convention chooses primary context by dominant design challenge rather than industry, and this is a deliberate, reasoned exception of the kind the KISPE brief recorded for defence.**

The strict reading argues for `/contexts/embedded-devices-and-constrained-interfaces`, as Cox Marine and Torqeedo both use: a fixed panel at a 480 × 272 reference with two encoders, a keypad, three softkeys and a wired microphone, where control allocation across constrained hardware is the visible problem. **That reading is defensible and it is why embedded is the first also-relevant.**

It loses for two reasons. First, **the hardware is the vehicle rather than the challenge.** The reason the encoder decision mattered is that the thing on the other end of it is a transmitter — an instrument whose actions leave the vessel, reach other vessels and reach a coast station, inside a shared regulated system where identity, position provenance and protocol truth are the design material. A multi-function instrument with a shared encoder exists in many categories; **this set of consequences exists in one.** Second, a new sector page needs somewhere for its authority to accumulate, and the standards vocabulary in §A8 — the global distress and safety system, digital selective calling and registered identity, bridge alert management, the navigational presentation standards, AIS carriage limits — is sector vocabulary that belongs on a sector page. **Two engagements seeding it at once is better than one.**

**Three slugs were tested and rejected, and the reasoning matters because each looks like an obvious fit.**

- **`/capabilities/ux-audit-for-complex-products` is wrong.** No audit was scoped and no audit deliverable exists (R95). The three-way concept comparisons are comparative design evaluations with recorded criteria, not expert review of an existing product. This is the same trap the KISPE and Schone briefs both name, and the answer is the same.
- **The entire `/situations/ai-and-automation` cluster is out**, and so is `/failures/interpretation-failures/uncertainty-is-not-communicated-usefully`. Those pages are scoped to model confidence and to products that produce recommendations a user calibrates trust against. **This product has no model and makes no recommendations.** It reports what a radio and an AIS receiver said, and when. The uncertainty this interface communicates is data provenance, not model uncertainty, and the page says it concerns the latter.
- **`/contexts/multi-stakeholder-operational-environments` is out.** One operator at a helm, with occasional secondary use by less familiar crew, is not a multi-role architecture. The novice-and-expert decision (R8) resolved by refusing a mode split, which is the opposite of multi-role structure.

### A6.5 On outcomes pages

**This engagement populates no `/evidence/outcomes` page**, and the reason is worth stating precisely because it looks as though it should. Those pages require a grounded result about how a system performs for users, or about what became possible for an organisation. What exists here is a result about a *design*, measured on a prototype before the product was built: classes of error removed at measured cost, and comprehension improved on a wording change. **The product's release (R97) is not an outcome of the design unless something connects them, and nothing recorded does.**

**Revisit when there is post-release evidence.** If Raymarine ever measures calling accuracy, distress-alert completeness or support contacts against the previous generation, `/evidence/outcomes/reduced-error-risk` and `/evidence/outcomes/improved-operational-clarity` become live.

### A6.6 On evidence-standards pages

- **`/what-we-have-measured`** — R63 through R86, with the §A4 framing attached. **This is one of the corpus's clearest instances of a measured design comparison**, and the two accepted costs are what make it worth citing: the page gains an example where the measurement argued against the team's own convenience.
- **`/what-is-observed-but-not-quantified`** — the six coded session observations in R69 and the cohort pattern in R87.
- **`/what-we-do-not-claim`** — R90 through R99, in full. **The field conditions named by the client and not tested (R90) is the most important single entry**, and the unretested safety wording (R89) belongs beside it.
- **`/what-is-inferred`** — nothing. This engagement inferred nothing it then claimed, and saying so is worth a line.

### A6.7 On `/evidence/longitudinal`

Nothing to seed unless §A10 item 1 reveals a return engagement or a sustained retainer.

---

## A7. Suggested structure for the case study

1. **Opening** — locked agency sentence; Raymarine and what the new radio is, in two sentences, with the Ray53 / Ray63 / Ray73 line as its starting point; the six questions the client's brief asked and its request to be challenged; the eight-sprint shape in three blocks; the twenty-four sessions; and the fact that the radio was built and released.
2. **What this instrument actually does** — voice on a shared channel, digital calls addressed to a registered identity, a distress alert that reaches a coast station, and vessel awareness that is receive-only and known to be incomplete. **This section earns everything that follows**: a reader who does not understand that the radio's actions leave the vessel will read the rest as fastidiousness.
3. **The conflict** — §A5.1. One encoder, three jobs, and a wrong action that looks like it worked. Lead the section with it and do not explain it twice.
4. **The study, and what it cost** — the four models, why the mode toggle and the extra encoder both lost, why the fixed role won, and the 2.30 seconds (R40–R44, R63–R70). **Name the price in this section, not in a later one.**
5. **Making the slower option fast enough** — shared identity across list and plot, focus held by vessel rather than row, a list that does not reorder under the operator's thumb, grouped markers that never become one vessel, contextual actions beside the selection (R117–R120). This is the section that justifies §A5.2's claim that the cost was answered rather than absorbed.
6. **From a symbol to a call** — the three calling concepts, the preparation surface, the second price, and the honest qualifier (R121–R123, R71–R79). **Five of eight thought the other vessel had answered** belongs here.
7. **When something else happens** — four priorities, the arbitration sequence, the snapshot that is validated before it is restored, and the rule that nothing unsent is ever replayed (R125–R127).
8. **Three emergencies that are not each other** — local man overboard, outgoing distress, received distress; what each transmits and what each does not; position provenance; cancellation as a procedure (R128–R132).
9. **What the operators did not understand** — §A5.4. Two of eight, twice, on the two questions that matter most; the revised wording; and the fact that it was not re-tested (R83, R84, R89).
10. **Where the radio stops and the chartplotter starts** — §A5.7, with the rejected auto-populate shortcut as the worked example (R105–R108).
11. **Delivery and handover** — the communication-first visual direction and the two it beat; day and night pairs that change nothing about position or meaning; non-colour encoding throughout; eighteen components with a contract rather than a palette; twenty-three families closed across their degraded and emergency variants; and the change-control rule (R24–R34).
12. **Evidence and limits** — the engagement record; the measured comparisons with their full §A4 framing and both denominators; and an explicit statement of R90 through R99: no field research in a product whose brief named the field conditions, no competitive benchmarking, no live transmission, no hardware validation, no certification credential, no audit, no fidelity comparison, and an implementation partnership whose weight is not recorded.

### The structural instruction, and it governs sections 3 to 8

**Write this case study as a chain of priced decisions.** Every consequential decision in this engagement has three parts on the record: a named alternative that was not taken, a stated reason, and — twice — a measured cost. **The form is: name the alternative, name what it cost, say why it was paid.**

That is this study's signature and it is deliberately not Schone's. Schone's material is a sequence with a clock, and it is written along that clock. This material is a ledger. A reader should finish section 8 able to say, for each major decision, what the cheaper option would have been and why it was refused — and should have encountered two numbers that make "slower on purpose" a documented engineering position rather than a designer's preference.

**One writing note.** The source material is dense with identifiers — hardware, screen, component, exception, decision, alert, state and acceptance codes, and artefact numbers. **They are the citation handles for this brief and must not appear in the case study.** Write the behaviours in prose. A reader should never encounter a code.

**A second writing note.** The eight-target traffic fixture carries invented vessel names and target identifiers, and the design mockups carry a masked registered identity. **None appears in the prose.** Write "the intended vessel", "an adjacent workboat", "a target whose position had stopped updating" — and never reproduce the masked identity, including as a partial. The fixture is a designed test condition, not an observation, and must be described as one wherever it is described at all (R58).

---

## A8. Domain framing and external research

**Creative Navy did not certify to, audit against, or work to any standard named here.** These establish that the writer understands the domain. In this domain the word *compliance* determines whether a radio may legally be sold, so any phrasing implying compliance work is not merely imprecise — it is a false credential. Equally, none of the sources below measured this product; they describe the category it enters.

### A8.1 The strongest external frame — the standard has a human-machine interface clause

**ITU-R Recommendation M.493, which defines digital selective calling, contains a clause headed *Shipborne human machine interface*.** Read directly rather than at second hand, it produces four supports and one instructive boundary.

**On guarded initiation.** Clause 11.2 requires that a distress alert be activated only by a dedicated distress button, clearly identified and protected against inadvertent operation — for a fixed station, by a spring-loaded lid or cover — and that **initiation require at least two independent actions.** Clause 11.3 requires distress, urgency and safety calls to be initiated manually only. The engagement's covered distress control, available from any display state and refusing to show a sent status on an incomplete gesture (R129), is this requirement expressed as an interaction.

**On identity.** Clause 12.4 requires that the equipment not transmit any digital call until the vessel's registered identity has been configured; that it display a warning until one is entered, and stay in that state until the operator confirms having read it; and that the identity be readily displayed whenever the equipment is on. The engagement's refusal to expose calling from an uncommissioned station, while leaving voice operation available, is the same rule (R122).

**On provenance.** Clause 12.7 requires the vessel's own position **and the source of that information** to be displayed; requires a displayed and audible reminder before the position is four hours old; and requires any position not updated for more than twenty-three and a half hours to be erased automatically. **The standard, in other words, already treats the age and origin of a position as part of its meaning** — which is exactly the principle the engagement extended across AIS targets, calling transactions and emergency states (R120, R130, R133).

**On consent.** Clause 12.5 requires the user to accept an automatic channel switch before it is carried out, and requires a means of disabling automatic switching with a visual indication when it is off. Clause 12.12 requires a distress self-cancel to be available at top level, and specifies that switching the equipment off after an unacknowledged distress alert transmits the self-cancel message — which is why the engagement's refusal to present powering off as a cancellation shortcut is a substantive decision rather than a pedantic one (R131).

**The boundary is the useful part.** What the clause does not reach is what a shared encoder means across four screens, how a vessel on a plot becomes a radio recipient, how three emergencies coexist on one display, or how a degraded feed differs from an empty sea. **Write that in**, because it marks exactly where this engagement went past the published guidance — and because it makes the engagement's contribution an extension of an existing discipline rather than an import of a foreign one.

**Source:** [Recommendation ITU-R M.493-16](https://www.itu.int/dms_pubrec/itu-r/rec/m/R-REC-M.493-16-202312-I!!PDF-E.pdf)

> **Verification note.** The clause numbers and requirements above were extracted from the current edition directly and are reliable as stated. **Confirm the edition in force at publication**, since the recommendation is periodically revised.

### A8.2 The field record the laboratory findings match

The US Coast Guard has stated that **approximately 90% of VHF digital-selective-calling distress alerts it receives contain no position information, and approximately 60% contain no registered identity**, that it cannot effectively respond to such an alert, and that search and rescue efforts may be suspended when no communication can be established and no position is known. The stated remedies are to obtain and enter a registered identity, and to connect the radio to a positioning receiver. Separately, rescue coordination centres have long reported false alerts as a very high proportion of total alerts received, and the IMO has carried a workstream on reducing them since the mid-1990s.

**This is the external corroboration for §A5.4.** The two comprehension failures this engagement found and did not close — a local incident mistaken for an external alert, and a position believed to have been sent when none was — are the interface-side expression of the two deficiencies the rescue services actually receive.

> **Verify before using, and this is not optional.** The figures are confirmed through reputable trade reporting of a US Coast Guard marine safety alert, but **the primary document was not reachable during research and the alert dates from 2011.** Obtain the primary source, confirm the wording and what each percentage is a percentage of, and check whether a current figure exists, before either number appears on any page. A wrong number here would be worse than no number, and the fallback frame is §A8.1, which is primary-sourced.

**Sources:** [Professional Mariner report of the USCG safety alert](https://professionalmariner.com/coast-guard-issues-marine-safety-alert-on-dsc-radio-distress-alerts/) · [USCG Navigation Center, DSC special notices and alerts](https://navcen.uscg.gov/dsc-special-notices-alerts) · [IMO MSC.1/Circ.1078, false alerts](https://wwwcdn.imo.org/localresources/en/OurWork/Safety/Documents/Documents%20relevant%20to%20GMDSS/MSC.1-Circ.1078.pdf)

### A8.3 The bridge already has a four-level alert grammar — and this radio falls outside it

IMO resolution **MSC.302(87)**, implemented through **IEC 62923-1 and -2**, defines bridge alert management: four alert priorities — emergency alarm, alarm, warning and caution — with harmonised audible signatures so a mariner recognises priority before reading anything, and defined states separating an alert that is active and unacknowledged from one that is silenced, acknowledged or rectified. It has been mandatory for new navigation and communication installations on ships under the international safety convention since 30 August 2021.

The engagement's four priority levels converge on that grammar, with the same separation of *silenced* from *acknowledged* from *resolved* (R125, R128). **A recreational fixed-mount radio is not covered by it.** That makes this a convergence observation and never a conformance claim — and it is the second such convergence in the corpus, the MDU engagement being the first for an advisory instrument. **Two independent arrivals at the same convention, by equipment outside its scope, is a stronger argument than one**, and the context page should make it once, carefully, for both.

**Sources:** [IEC, Bridge Alert Management for mariners](https://assets.iec.ch/public/tc80/Supporting%20Document%20Bridge%20Alert%20Management%20for%20mariners%20V4.pdf) · [IEC 62923-1:2018, preview](https://cdn.standards.iteh.ai/samples/21463/97e1cd551d3641a5bfd05e611b9a3603/IEC-62923-1-2018.pdf) · [IMO resolution MSC.302(87)](https://wwwcdn.imo.org/localresources/en/KnowledgeCentre/IndexofIMOResolutions/MSCResolutions/MSC.302(87).pdf)

### A8.4 A regulator has already decided that cross-device consistency is a safety property

**IMO resolution MSC.191(79)**, amended by **MSC.466(101)** and tested through **IEC 62288**, exists so that every navigational display on a bridge adopts *a consistent human-machine-interface philosophy and implementation* — and it states that it **takes priority over the presentation requirements of individual equipment standards where the two conflict.** The digital calling recommendation cites it directly for display readability under all ambient light conditions.

This is the external support for the engagement's radio-and-chartplotter work (R105–R108): the question of what two instruments on one bridge owe each other is not a product-family nicety in this domain, it is a resolved regulatory position for the category the radio sits beside. Use it on the context page.

**Sources:** [IMO MSC.191(79)](https://wwwcdn.imo.org/localresources/en/KnowledgeCentre/IndexofIMOResolutions/MSCResolutions/MSC.191(79).pdf) · [IMO MSC.466(101)](https://wwwcdn.imo.org/localresources/en/KnowledgeCentre/IndexofIMOResolutions/MSCResolutions/MSC.466(101).pdf) · [IEC 62288 preview](https://webstore.ansi.org/preview-pages/IEC/preview_iec62288%7Bed2.0%7Db.pdf)

### A8.5 Human-centred design is already the domain's stated expectation

**IMO MSC.1/Circ.1512**, *Guideline on software quality assurance and human-centred design for e-navigation*, requires human-centred design including iterative usability testing with users across the development lifecycle. Use it on the context page to establish that user-centred evaluation is the maritime domain's own expectation rather than a vendor preference. **Do not imply that this engagement produced, contributed to or satisfied any such demonstration.**

**Source:** [MSC.1/Circ.1512](https://wwwcdn.imo.org/localresources/en/OurWork/Safety/Documents/enavigation/MSC.1-Circ.1512%20-%20Guideline%20On%20Software%20Quality%20Assurance%20And%20Human-Centred%20Design%20For%20E-Navigation%20(Secretariat)%20(1).pdf)

### A8.6 The incompleteness of AIS is stated by the regulator, not inferred by the designer

**UK Maritime and Coastguard Agency guidance note MGN 324 (M+F)** — cited inside the engagement's own specifications — states that not all vessels carry AIS, particularly small craft and many fishing vessels; that there is no provision in the collision regulations for the use of AIS information, so decisions should be based primarily on visual and radar information; and that identification of a target by AIS does not replace traditional navigational methods. It also sets the watchkeeping expectation on the digital calling channel and restricts the distress and calling channel to distress, urgency and brief safety traffic.

**This is the published basis for one of the engagement's firmest rules** (R120, R134): the interface must never imply that AIS coverage is complete, or that an absent target means empty water — and it is why the compact plot is explicitly subordinate to the chartplotter rather than a small version of it.

**Source:** [MGN 324 (M+F) Amendment 1](https://assets.publishing.service.gov.uk/media/5a82433240f0b62305b9359d/Amendment_1_MGN_324__M_F__Watchkeeping_Safety_-_Use_of_VHF_Radio_and_AIS.pdf)

### A8.7 Addressing the wrong vessel is a documented accident mechanism — use with precision

The UK Marine Accident Investigation Branch has repeatedly investigated so-called **VHF-assisted collisions**, in which bridge teams negotiate manoeuvres by radio rather than following the collision regulations, and in which AIS-derived identification proves misleading. A 2020 report into a collision between two merchant vessels found that collision-avoidance decisions were based largely on AIS information and radio conversations that were misleading and distracting, and that one vessel's status was misread from AIS. Sector commentary notes that AIS identifiers can appear to move between vessels in dense traffic.

**Use this to frame why addressing the right vessel matters**, and to support the engagement's decision that the stored registered identity rather than the displayed vessel name determines who is addressed (R117, R122). **Do not claim that the design prevents such collisions**, and **do not blur the distinction**: those accidents concern voice collision-avoidance negotiation, not digital recipient selection. One careful paragraph is worth more than an overreaching section.

**Sources:** [SAFETY4SEA on the MAIB investigation](https://safety4sea.com/uk-maib-investigation-ships-collision-linked-to-inappropriate-use-of-vhf-and-ais-data/) · [Steamship Mutual, dangers in the use of VHF for collision avoidance](https://www.steamshipmutual.com/publications/articles/dangers-in-the-use-of-vhf-for-the-purpose-of-collision-avoidance-at-sea042020)

### A8.8 Standards vocabulary for the case study and the context page

Woven into substantive description, never listed.

- **ITU-R M.493** — digital selective calling technical characteristics, distress procedures and the shipborne human-machine-interface clause. Developed in §A8.1, where it carries the case study's framing argument.
- **ITU-R M.541** — operational procedures for digital selective calling, including distress alert repetition and self-cancellation.
- **ETSI EN 301 025** — VHF radiotelephone equipment with Class D digital selective calling; the European equipment standard for this product class, which carries the dedicated distress button sub-procedure.
- **SOLAS Chapter IV and the global maritime distress and safety system** — the system the radio participates in; the dedicated digital calling channel and the distress and calling voice channel.
- **IMO MSC.302(87), IEC 62923-1 and -2** — bridge alert management. §A8.3.
- **IMO MSC.191(79), MSC.466(101), IEC 62288** — presentation of navigation-related information. §A8.4.
- **IMO MSC.1/Circ.1512** — software quality assurance and human-centred design for e-navigation. §A8.5.
- **MCA MGN 324 (M+F)** — VHF and AIS watchkeeping guidance and AIS limitations. §A8.6.
- **IEC 61162 series** — the marine data interface family cited inside the digital calling recommendation for position input, and the layer beneath NMEA 2000 and Raymarine's own network family.
- **ASTM F1166** — human engineering design for marine systems, cited inside the engagement's own research record. **Verify current status and edition before use.**

### A8.9 Research worth doing before the context page is written

1. **Primary verification of the figures in §A8.2**, plus a check for a current equivalent. The single most valuable outstanding item.
2. **The scope clause of bridge alert management**, so the context page states the boundary from the standard's own wording rather than from inference.
3. **The equipment standards stack** — the Class D digital calling equipment standards and the integrated communication system standards — to describe the regime precisely rather than approximately.
4. **The modernisation of the global distress and safety system**, whose amendments came into force recently, so that no framing is written against a superseded regime.
5. **Skill retention for rarely used emergency procedures.** Raymarine's brief states the problem exactly — a critical action may occur after months without using the relevant function — and there is a real human-factors literature behind it. **This would materially strengthen the argument for why the guarded distress control and the man-overboard key must not depend on menu state**, and it is the one piece of external evidence that would speak directly to §A5.4.
6. **Recreational boating search-and-rescue statistics**, to size the user population honestly on the context page without inflating it.

### A8.10 Verify before using

- **Anything about the released product.** Its name is out of scope (§A1.1), and its specification, reception and reviews are not usable.
- **Anything about Raymarine beyond R101.** Corporate history, ownership, size and market position are not needed and are not evidenced here.
- **The competitive field.** Desk research exists for the context page's category description. **It may not appear in the case study in any form** (R91), and the proprietary term *competitive vector* is forbidden here.
- **Anything about what marine operators actually do at a helm.** This engagement observed eighteen of them on a bench (R90). Domain description must come from published guidance and standards, attributed as such, and must not borrow authority the engagement did not earn.

---

## A9. Style and lexicon compliance

Non-negotiable items from the writing guide:

- **Open with the locked agency sentence**, verbatim, on first introduction.
- **Attribute the method on first use in every self-contained section**: "Creative Navy's Critical Systems Design method", thereafter "Critical Systems Design" within that section. Never "the method", "our approach" or "the framework" as the primary reference in a section that has not yet named it.
- **Never use "the agency", "the consultancy" or "we"** as the primary identifier in a passage that must stand alone when retrieved. **"Raymarine" likewise does not rotate** — not "the client", not "the manufacturer", as the primary identifier in a standalone chunk.
- **British spelling**, except the phase name *Organizational Integration*.
- **Sprint = cadence (one week here). Phase = a stage of the method.** Never equate them. This engagement has a genuine collision, because its three *project* blocks — exploration, UX development, UI delivery — are not method phases. **Always qualify: "the exploration sprints", "the three UI delivery sprints".** Never a bare "phase" where a reader could take it for one of the five.
- **Name the phases, and be honest about the fifth.** Four are claimable at full weight; Implementation Partnership is named and left at unspecified weight (§A6.3). Say so rather than omitting it.
- **Use at least three of the five core requirements**: evidence-aware thinking, multi-perspective synthesis, lateral exploration, tension-driven reasoning, organic system building. **Tension-driven reasoning and evidence-aware thinking are the two this engagement evidences best.**

### Proprietary vocabulary — used accurately in context, not defined

**Use the terms this engagement evidences, and do not reach for the whole lexicon.**

- ***Tension-driven reasoning* — this engagement may carry weight on it.** The corpus has other instances; it has none where both sides of the tension were measured and the losing side's advantage recorded as a price that was paid (R68, R74). Say so.
- ***Constraint respecting*** — the interface shaped to what the radio's own subsystems can actually evidence; the rule that the screen never asserts a state firmware has not confirmed (R133, R136).
- ***Progressive specification*** — the acceptance registers and the eight named engineering gates, which state in testable terms what the design was not yet entitled to assert (R33, R35).
- ***Blanks phenomenon*** — the open-dependency registers making unstated assumptions explicit and assigning each an owner (R35).
- ***Option space mapping*** — genuinely evidenced (R9–R11, R24, R40) **but use it without a superlative.** Schone's forty-five alternatives in eighty-five frames and KISPE's thirty-six in sixty-four are larger and are claimed more loudly; the ranking across the corpus has not been reconciled and this study should not pre-empt it.
- ***Domain learning* — use it, but qualify it honestly.** Domain learning here was documentary and procedural — Raymarine's own published operating documentation, maritime operating procedure and the product line's established conventions — **not observational.** Several studies in the corpus claim hands-on operational immersion; this one cannot, and the qualification is more credible than the claim.

**Two terms are forbidden in this case study.**

- ***Performance in reality* must not appear.** It denotes designing and testing against the conditions a system actually operates in, and this engagement tested none of them (R90). Using it here would be exactly wrong, and a reader who knows the term would notice.
- ***Competitive vector* must not appear.** No competing product was evaluated (R91).

### Cadence — specific to this engagement, and the most important instruction in §A9

**The negation-pair construction is the single largest style risk in this study.** *X is not Y* — sent is not acknowledged, a local record is not an external alert, no targets is not no reception, a screen is not a state, requested power is not effective power. The source material is saturated with it, **and it is already the signature cadence of the two defence studies that precede this one in the corpus.** Three studies written in it will read as one voice, and the distinctiveness of each will be lost.

**State the distinctions positively wherever the meaning survives.** A transaction reports the stage it has actually reached. A stale value carries its age beside it. The man-overboard screen states what has been recorded and what has been transmitted. The interface shows the power the radio is actually using. **Reserve the negation for the two or three places it lands hardest — most likely §A5.3 and §A5.4 — and nowhere else.**

Three further cadence rules:

- **Prefer the verb to the principle.** This engagement's material is behavioural: an operator turns something, the radio accepts or refuses, something becomes visible. Write what the interface *does* at a given moment rather than what it *holds to be true in general*. The ten design principles (R22) are there for the writer's orientation; they are not the shape of the prose.
- **Lead with the alternative, not the outcome.** The structural instruction in §A7 means most sections should open on what was considered and rejected, and close on what it cost to refuse it. That is a different sentence shape from the corpus's usual decision-then-rationale pattern, and it is what makes this study recognisable.
- **Declarative openings**, canonical terminology, no metaphor in sections that will be retrieved for task queries. **Every section must stand alone** as a retrieved chunk.

**And two hard rules from §A7:** no identifiers or codes in the published prose, and no fixture vessel names or registered identities, masked or otherwise.

---

## A10. Open items

1. **The weight of the implementation partnership is not recorded.** It was offered on standard terms (R96) and the radio was built and released (R97), but what Creative Navy actually did during development — review meetings, ticket answering, continued design production, embedded working, or nothing because the offer was not taken up — is unknown. **Write the phase at unspecified weight until the lead says more**, per §A4. AIT's brief is explicit that an Implementation Partnership must be described at its actual weight, and the same discipline applies here. If it produced further screens, decisions or reviews, those are additional engagement facts and belong in §A3.1.
2. **Whether anyone compared the released interface against the delivered designs.** None is recorded. **If a comparison exists it is the single strongest fact in the engagement** — it is what gives AIT its headline — and it changes §A1.4, §A4 and the opening. Ask once; write the conservative version until answered.
3. **Whether the revised man-overboard and missing-position wording was ever re-tested.** Both were recorded as high-severity and open for retest (R89). If a fourth round happened, §A5.4 becomes an honest-failure-closed angle, which is stronger than an honest-failure-open one, and the headline changes. **Do not assert it.**
4. **Team stability across the three blocks.** Five people are confirmed (R2). Whether the same five ran exploration, UX development and UI delivery is not. Schone's stable six-person composition is written as a fact because it was confirmed; do not assume the same here.
5. **Who reshaped the engagement.** The client's brief proposed three stages and invited challenge (R4, R5); the Creative Navy plan is a two / three / three sprint split. Whether that was a reshaping, a re-expression or an acceptance is not recorded, and §A5.8 is materially stronger if it was the first.
6. **How the cohorts were defined and how participants were recruited.** Six professional, six experienced recreational and six occasional operators are confirmed (R49). The definitions are not, and neither is whether Creative Navy or Raymarine recruited them. **Creative Navy designed, moderated and analysed** (R52) and **Raymarine supplied the rig** (R53) — the recruitment line is the remaining gap, and the Streetec precedent requires the division of labour to be stated completely.
7. **Artefact thirteen** is absent from the delivered set and from the engagement's own documentation index (R100). Confirm whether it exists, and whether it was a document or a data file.
8. **The physical panel.** 480 × 272 is confirmed as the design canvas and the research display model (R103), described in the handover as a layout convention with density left to engineering. The actual panel size and resolution are not confirmed. **Describe it as a design canvas until they are.**
9. **Confirm the prefix is R.** A, D, E, G, K, M, N, O, S, T and V are taken; B is skipped by convention. **Confirm before the corpus integration document is written, because the R-numbers propagate.**
10. **Confirm the marine context page is being created in the same change set**, and confirm who writes it — §A6.2 requires it to be written once from this engagement's and the MDU's contributions together, not sequentially.
11. **The lint gate must be fixed before the context page lands.** It currently returns a vacuous pass on this repository layout (§A6.1). This is not a case-study question, but the context-change protocol that governs this study's integration depends on it.
12. **Coordination with the MDU brief.** Both engagements are marine, both converge on bridge alert management from outside its scope, and both will contribute to the new context page and to the alarm-management page. **The convergence observation (§A8.3) should be made once, for both, rather than twice in similar words.** Reconcile before either publishes.

---

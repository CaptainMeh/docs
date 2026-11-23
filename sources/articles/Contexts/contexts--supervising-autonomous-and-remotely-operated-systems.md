# `/contexts/supervising-autonomous-and-remotely-operated-systems`


**Write to:** `Articles/Contexts/contexts--supervising-autonomous-and-remotely-operated-systems.md`


**Brief of record:** `page--supervising-autonomous-and-remotely-operated-systems.md`


> **Working title for the page:** *Supervising machines that act without you: interface design for autonomous and remotely operated systems*
>
> **Status: new proposal. It appears in no section of `corpus-integration-brief.md` and in no addendum.** It is proposed here because three engagements in the current change set share a design problem that has no home in the corpus, and because the pages that look like its home are all scoped to AI.
>
> **Parent cluster is settled: `/contexts/supervising-autonomous-and-remotely-operated-systems`**, as a challenge-shaped context page rather than a sector page — the three anchors sit in three different sectors and the shared material is the challenge. **A `/contexts/` placement triggers the context-change protocol**: the gate re-run across the whole corpus in the same change set, a `Site-Structure/site_structure__1_.md` entry, and a `Content-registry/content-registry.json` entry.
>
> **This page must land after `/contexts/defence-and-space-systems`, not before.** Two of its three anchors are defence studies that do not yet exist in the repository, and a challenge page that cross-references case studies the corpus does not hold will read as thin. See the consolidated open items.
>
> **The AI-cluster exclusion is the single most important rule on this page.** None of the three anchors is an AI product. Nothing on this page may be routed to `/contexts/ai-enabled-products`, to any `/situations/ai-and-automation/` page, or to `capabilities--behavioural-governance-for-ai-products.md`, and no sentence may imply that the systems described infer, learn or recommend. See "What Creative Navy does not claim".

---

## Opening — entity anchor

Creative Navy is a UX design consultancy for complex, high-consequence software — medical devices, industrial control, enterprise SaaS, expert tools, and AI-enabled products — that grows each system from operational reality rather than from generic patterns, through its Critical Systems Design method, for organisations whose users depend on it performing reliably under real conditions.

A machine that carries out an instruction on its own, out of sight of the person who issued it, changes what an interface is for. The operator is no longer performing the task; they are supervising something that performs it, through a link that may be slow, intermittent or broken, against a report of the world that is always at least slightly out of date. **Creative Navy designs the surfaces through which people supervise machines they are not touching** — uncrewed aircraft, uncrewed ground and marine vehicles, and driverless transport fleets inside buildings — where the design problem is not operating the machine but establishing, continuously and defensibly, what it is doing and whether the instruction arrived.

---

## The job this page does

**Resolve, with a Match component.** A reader arriving here is establishing whether Creative Navy works on this class of system at all; a buyer arriving here is asking whether that experience transfers to theirs. The page therefore carries **one labelled engagement block at the end** and **a 3–6 question buyer FAQ answered only from facts stated on the page**. It is not an Answer page and must not open with a principles block — the principles belong on the command-integrity page proposed alongside it.

---

## Why the page is needed, stated once and not laboured

The corpus already argues human oversight at length, and **every one of those arguments is scoped to AI**. `situations--ai--human-control-is-weak-in-practice.md` opens on AI products and the gap between a built override and an informed one. `situations--risk--oversight-exists-in-policy-but-not-in-workflow.md`, `practices--trust-and-oversight-analysis-for-ai.md` and `capabilities--human-ai-interaction-design.md` are the same shape. A reader supervising a vehicle that follows a pre-programmed route with no model in it finds the right argument attached to the wrong category — and a buyer in that position reads the corpus as being about something else.

**The distinction to write, in the page's own terms:** AI oversight is oversight of an inference. **This page is oversight of an execution** — a machine that was told to do something, is doing it somewhere else, and reports back through a channel that can fail. No probability distribution is involved, and nothing is being judged for plausibility. What is being judged is whether the report is current, whether the command arrived, and whether the thing now moving is the thing that was addressed.

---

## Domain vocabulary

Woven into description, never listed, and never as credentials.

- **Remote operation, supervised autonomy, and autonomous execution** — three different relationships between operator and machine, which products routinely conflate in one selected state
- **Control link condition** and **telemetry freshness** — independent facts about the channel and about the data, which a single connection badge destroys
- **Command transaction** — a request with an identifier, a recipient, a response window and a terminal state, as distinct from a button press
- **Span of control / fan-out** — how many machines one operator can supervise, and what the interface must do differently at each number
- **Lost link** and **pre-programmed contingency** — what the machine does when the operator stops being reachable, and the automation surprise a stale contingency produces
- **Handover** — between operators, between shifts, and between a machine and the person who must resolve what it left behind
- **Safety boundary** — the line between what the interface says and what the machine's own safety systems enforce, which the interface must never appear to move

---

## Proposed H2 sections

Each answers one question and must read on its own.

1. **What changes when the operator is not at the machine** — the gap between an instruction and its evidence, and why it is a design problem rather than a latency problem.
2. **Establishing control, and knowing you have it** — selection, authority and the actions that do and do not confer it.
3. **What the interface may assert, and what it may only report** — the discipline of refusing to display an outcome the system cannot evidence.
4. **Supervising more than one machine** — what fan-out does to layout, ordering, grouping and alerting, and where the ceiling comes from.
5. **The operator who inherits the problem** — supervision across a shift boundary, where the person who must recover is not the person who acted.
6. **Where the interface stops and the safety system starts** — the boundary, written as a design constraint rather than a disclaimer.
7. **What this work does not establish** — the page's own limits, in plain terms.

---

## Evidence to draw on

### Schone Airspace Group — mission control for uncrewed aircraft *(primary anchor)*

**Naming:** the client is named **Schone Airspace Group** and is named near-identically on every mention; nothing else in that engagement may be named. **No engagement dates.**

**Evidence tier: Creative Navy-measured for the acceptance checks, design record for everything else.**

- **D85** — a seven-state command transaction model: ready to request, request sent, awaiting response, command acknowledged, state observed, request rejected, response unknown — each with its own required source evidence and its own prohibited inference recorded beside it.
- **D86** — a transaction keeps the aircraft it was dispatched against; inspecting another aircraft does not rewrite a pending request's recipient or identifier.
- **D87** — silence is an unknown result, not a failure: an elapsed response window produces an explicit unknown state, retains target, action and request identifier, and triggers no automatic retry. **The named cost is the sharpest self-criticism in the package and must travel with it: unknown is less reassuring than a binary outcome.**
- **D88** — control link condition and telemetry freshness are independent fields; a value that has stopped updating keeps its last value alongside its age rather than being relabelled as current or hidden.
- **D89** — an uncertain aircraft state blocks an optimistic command display; availability shows as unknown rather than ready.
- **D71** — the interval that makes the argument concrete: an acknowledgement arrives three seconds after the request while the aircraft is still reporting its previous flight mode, and fresh telemetry reports the new mode three seconds after that. **For six seconds an interface built on a success toast would have been showing an outcome it had no evidence for.**
- **D76, D77** — six task contexts in one persistent operating shell, with command target identity, last reported flight mode, battery, link state, telemetry freshness and consequential actions in fixed positions.
- **D79** — entering the live workspace is a navigation action, not a takeoff, arming or mission-start request.
- **D47** — the nine critical findings, including stale telemetry displayed as current, acknowledgement shown as a completed flight state, and no response treated as a rejected command.

**Mandatory calibration, carried verbatim from the Schone brief §A4:**

> The scripted acceptance checks were run twice: first by Creative Navy, then by five of the nine operators who took part in the research. Each check fixes a starting state, an operator action and an expected visible response, and a pass means the interface stated the correct operational fact under that condition. The checks evaluate the design representation. They are not a measure of flight performance, operator proficiency, task completion time or error rate, and they were not conducted on a connected system.

> The first design candidates failed 18 of the 36 checks. Each failure was given an identifier, a severity, the check it failed, the sprint in which it was revised and the decision record that resolved it. The revised design passed every check decidable at interface level.

**And the two limits that must not be dropped.** Severity records the consequence of the interface ambiguity within the scripted task, not that a corresponding aircraft incident occurred (D48). Research entered late and functioned as validation and correction, with no contextual observation of live flight operations and no timed task study (D54). **Nine participants is qualitative: no percentages and no prevalence claims.** The scenario material is a synthetic fixture (D68–D75) and must be described as one.

### The handheld command-and-control engagement *(second anchor, and the one with the strictest handling)*

**Naming: nothing may be named.** Use the locked client descriptor near-identically on every mention: **a European manufacturer of uncrewed systems, including one-way effectors, and the tactical command-and-control software that operates them.** The effector must survive every trim of that descriptor. **No quotes and no reported speech anywhere** (§A1.7). **No engagement dates.**

**§A1.5 and §A1.6 govern this engagement's appearance on any page, and they are not negotiable here.** Write it straight, with no euphemism and no relish. **State the scope boundary early** (H106): the engagement covered interface structure, task behaviour, information priority and the clarity of operator control, and did not extend to autonomy, control algorithms, autonomous safety behaviour, the datalink, the effector, targeting logic, or any certification or weapons-review activity. **Creative Navy designed the surface through which a human supervises the system; it did not design the system.** The two absolute exclusions apply in full: no configuration in which the system engages without human confirmation may appear in any form, including by implication; and the specific workflows identified as re-certification-dependent may not be named, though the existence of the constraint is usable (H8, H107).

**Evidence tier: design record. No field evidence of any kind** (H111).

- **H48** — the six questions the interface must answer unambiguously: was the input registered; is the command being transmitted; did the vehicle acknowledge it; what state did the vehicle confirm; is the information current or stale; and is abort still available. **This is the clearest statement in the corpus of what a supervision interface owes its operator.**
- **H49** — repeated input is not feedback, and unreliable delivery belongs in the command architecture rather than in human input. **Render as a statement; it may not be quoted.**
- **H103** — engineering ceilings established by the client's engineers: three to four vehicles is the practical limit of operator cognitive load at the system's current autonomy level, and four to five simultaneous video feeds is realistic where nine is not. **Use as unattributed engineering constraints the design had to work within, never as claims about the product's capability and never traced to a speaker.**
- **H100, H102** — grouping assigned by the operator rather than inferred from proximity; a feed grid ordered by mission logic rather than vehicle index.
- **H107** — some workflows could not be changed without re-certification, which is the honest counterweight to any argument that a defect should always be routed away from the interface.

**Mandatory calibration, carried from the handheld brief §A4.** H109 is "was built" and nothing more — not shipped as designed, not deployed, not in service, not an outcome. The expert review's operator behaviours are the client's observations, relayed (H37), and must be labelled as such every time. Nothing was measured in operation (H116).

### Oceaneering — the dispatch panel for an autonomous hospital transport fleet *(third anchor, and the one that is not defence)*

**Naming:** Oceaneering may be named; **nothing else may be**. **No engagement dates.** Standards designations carrying a year are identifiers, not dates, and are permitted.

**Evidence tier: observed and client-stated; production and fidelity statements are client-reported.**

- **O18, O20** — the scale one operator supervises: 71 logistic lobbies, 17 cart types, 1,400 carts, 70 vehicles and approximately 4,000 transport orders a day at one deployment; areas of four to twelve stations, a tunnel of twenty, one fully automated bay of fifty with no panel at all.
- **O29** — a high-turnover role with little training, handling 100–200 dispatches per eight-hour shift, with no technical background. **Client-stated.**
- **O24, O34, O35** — the failure that defines supervision at a distance: a wrong cart type is detected by the vehicle *after* it lifts, downstream of an operator who has already walked away; the vehicle sets the cart down and leaves deliberately rather than stranding itself; the only physical indication is a vehicle flashing lights that always flash; and recovery requires a physical trip to the vehicle because it cannot be done from the panel.
- **O74, O76** — the designed answer: read what the vehicle detected against what was selected, confirm the detected type in one action, re-enter destination and identity; and a stacked notification list naming station, required action and elapsed time.
- **O25** — the floor is part of the interface: vehicles run on dark flooring, people are directed to light flooring, and ceiling-mounted signs and speakers instruct people to clear intersections. **The supervision surface is not only the screen.**
- **O41, O77** — deliberate misuse as a design condition: supervisor access granted too widely, a site where night-shift staff switched every detent to send until the system stopped, and a call-carts quantity control restricted and gated after a slider was rejected on misuse grounds.

**Mandatory calibration, carried verbatim from the parent brief §4:**

> The dispatch panel interface Creative Navy designed is in production, and Oceaneering confirms it shipped as the design that was delivered. Oceaneering reports that the feedback it has received has been good. The fidelity statement and the feedback are both client-reported: Creative Navy did not independently compare the shipped build against the delivered files, no figures were shared, and neither has been independently verified.

> Creative Navy presented the designs to one hospital's logistics manager and two supply-chain supervisors, and separately to a second hospital's AGV planning manager. These were design reviews, not usability tests: no task was attempted and nothing was measured. No dispatch operator took part in either session.

**And O17 must not be softened**: a reference site's logistics manager rejected the flow length for his operation, and the design shipped as delivered at a different deployment target. Record the objection; do not write that it was answered or overruled.

---

## External research for this page

**None of this measured any Creative Navy client's product. It establishes the category, and every item below is unverified until someone checks it.**

- **[VERIFY: Regulation (EU) 2023/1230, the Machinery Regulation]** — the user-facing proposal for this page rests on the regulation treating a supervisor of autonomous mobile machinery as a defined role with defined information needs. **Confirm the article and the exact language before any sentence relies on it.** If it does not say what it is believed to say, the page loses nothing essential — drop it and keep ISO 3691-4.
- **ISO 3691-4:2023** — *Industrial trucks — Safety requirements and verification — Part 4: Driverless industrial trucks and their systems*, second edition, published June 2023, effective 6 December 2023. **Already verified in the Oceaneering brief.** It governs the vehicles, never the dispatch interface, and that is precisely why it belongs on this page: it is the cleanest available example of a safety regime that reaches the machine and stops at the screen.
- **[VERIFY: the IMO instrument on autonomous ships]** — the non-mandatory code was expected to precede a mandatory one, with remote operation centres treated as a regulated function. **Confirm the instrument's name, status and date before citing, and do not imply it governs any Creative Navy work.**
- **NATO STANAG 4586** — levels of interoperability grade control rather than treating it as a switch, and a control station requests authorisation to operate at a given level. **The usable observation, already made in the Schone material: the distinction survives in the protocol and evaporates at the glass.** Verify the current edition.
- **Hobbs and Lyall, *Human Factors Guidelines for RPAS Remote Pilot Stations*, v1.1 (NASA Ames / SJSU Research Foundation)** — monitoring which entity has control and to what extent; confirming control has been established rather than inferring it; monitoring telemetry before establishing control. **And the instructive limit: the guidelines' stated assumptions exclude control of multiple aircraft by one pilot**, which is exactly the region where the fleet decisions had no guidance to lean on. Write the limit in.
- **Span-of-control and fan-out literature**, and **lost-link procedure design**, where a pre-programmed procedure that has gone stale is a recognised form of automation surprise. **Find primary sources; neither is currently held.**
- **UNIDIR, *Human–Machine Interfaces in Autonomous Weapon Systems* (2022)** — usable here only for the general proposition that interface usability is treated as a means of retaining control. **Keep the weapons-specific argument on the defence context page**, and carry §4's rule: nothing licenses a claim that Creative Navy delivered, established or improved meaningful human control.

**Do not use without primary-source verification:** the widely repeated figures for human-factors involvement in uncrewed aircraft mishaps and for ground-control-station ergonomic shortfalls. They are the most persuasive numbers available and **none has been verified** — two primary documents were unreachable.

---

## What Creative Navy does not claim

**Required, and not to be softened.**

- **No safety claim.** Nothing described here made any system safe, prevented any event, or constitutes a safety determination. In the handheld engagement the hold duration and physical-control design were explicitly flagged as requiring human-factors and system-safety testing that was not performed (H51, H120).
- **No autonomy was designed.** Creative Navy designed supervision surfaces. Control algorithms, autonomous behaviour, datalinks, effectors and vehicle safety systems were out of scope in all three engagements.
- **No regulatory or certification credential** is claimed against ISO 3691-4, STANAG 4586 or 4671, SORA, the Machinery Regulation or any IMO instrument. None was certified to, audited against or worked to.
- **No measured operational outcome.** No throughput, workload, error-rate, time-saving or mission figure exists from any of the three engagements.
- **No field evidence** underlies the handheld engagement, and no dispatch operator took part in the Oceaneering reviews.
- **No AI claim.** None of the three products infers, learns, scores or recommends.

---

## Cross-references to make explicitly, in language and not only as links

- **`/contexts/defence-and-space-systems`** (new) — the sector page for two of the three anchors. **This page is the challenge; that page is the domain.** Say so in both directions.
- **`/contexts/high-consequence-environments`** — where consequence, not autonomy, is the organising condition.
- **`/contexts/multi-stakeholder-operational-environments`** — the shift-handover and role-boundary material.
- **The command-integrity page** (new, proposed alongside this one) — **the sharpest scope line on this page.** That page owns what makes a single consequential action legible and committed; this page owns the standing relationship between an operator and a machine that is away from them.
- **`/capabilities/state-and-status-visibility-design`** — the general capability this page's state-reporting material instantiates.
- **`/capabilities/design-for-abnormal-and-degraded-scenarios`** — lost link, stale telemetry and unknown outcomes are degraded modes.
- **`/failures/state-visibility/users-cannot-see-what-state-the-system-is-in`** — the general failure.
- **`/situations/ai-and-automation/human-control-is-weak-in-practice`** — **reference it to draw the boundary, not to claim the category.** State plainly that the systems on this page contain no model and that the oversight argument there is about inference.
- **`/evidence/evidence-standards/what-we-do-not-claim`** — where the limits above are developed.

---

## Engagements that must NOT be added to this page

- **The MDU.** An advisory marine instrument that is forbidden to act (M22, M23) is the inverse of this page's subject: it supervises nothing and commands nothing. It belongs on the marine context page and the alarm page.
- **Maritime VTS.** Shore-side supervision of **crewed** vessels, where the shipmaster's navigational responsibility is not transferred to the service. **It is a tempting near-miss and it is the wrong page** — nothing in it is autonomous. Its authority-boundary material belongs on the marine context page.
- **Callsign, Typewise, Owkin and every AI study.** Oversight of an inference is the other category, and mixing them is how this page loses the distinction it exists to make.
- **The industrial process-control engagement.** A robot cell with an operator present at the machine is automation under direct supervision, not remote supervision. Its reconciliation material belongs on `/contexts/industrial-automation-and-machinery`.
- **KISPE.** A read-only information product. It observes; it does not command anything.

**If a fourth engagement supplies an operator supervising a fleet with measured workload or span-of-control data, revisit this page first** — that is the one evidence class all three anchors lack.


---

**The evidence cited in this brief, in full**


*AIT*

- **A1** — Fixed scope, eight one-week sprints with discovery and requirements inside the block: five UX sprints, then three UI sprints. The UX sprints ran home screen; home iterations and commissioning flow; commissioning flow and start-up screen; settings and list screens; feedback implementation. The third UI sprint was brand theming.

- **A4** — Creative Navy benchmarked **10 thermostat and heat pump control interfaces against 15 features** — scheduling by day and by interval, comfort modes, temperature offset, range setting, sensor calibration, date and time on the home screen, voice control, connectivity, mobile app, geofencing and physical buttons — plus a qualitative "remarkable features" review of individual products.


*Oceaneering*

- **O17** — **What one session rejected.** The logistics manager rejected the length of the designed dispatch flow for his own site, on the grounds that his teams cannot spend time at a panel. See §A4 for how O17 and O8a sit together.

- **O18** — Scale of one deployment, from Oceaneering's own staff orientation film: **71 logistic lobbies that send and receive carts; 17 cart types; 1,400 carts; 70 vehicles; approximately 4,000 transport orders a day.** Busiest areas: the kitchen, the dock, waste management and cart holding.

- **O20** — Area sizes vary enormously: four to twelve stations is typical, twelve often quoted as the per-area maximum; a tunnel can hold twenty; one fully automated bay holds fifty and has no panel at all.

- **O24** — The vehicle reads the cart's RFID tag **after lifting it**, so a wrong cart type is detected downstream of the operator, who has usually walked away. The vehicle then sets the cart down and leaves deliberately: waiting would strand it, since hours may pass before anyone returns to the depot and its battery would deplete.

- **O25** — **The floor is part of the interface.** Vehicles run on dark flooring and people are directed to light flooring; ceiling-mounted illuminated signs and speakers issue spoken instructions to clear the passage at intersections. Station positions are numbered on the floor, and **the send and receive roles are painted on the floor in the same colours the screen uses.**

- **O29** — Operator population, client-stated: a high-turnover role with little training, handling **100–200 dispatches per eight-hour shift**, no technical background. A sales consultant put it that operators barely need training because the turnover is so high. A supply-chain supervisor, of his own team: they are front-line staff, not highly educated, and if it is quick and easy they can be trained on it.

- **O34** — **An error with no stated cause.** Choose the wrong cart type and the vehicle arrives, tries to lift, sees the wrong cart, sets it down and leaves without saying why. The only physical indication is worse than none: the vehicle sits beneath the cart flashing its lights, and staff do not notice, **because the lights are always flashing when the vehicles move.**

- **O35** — Recovery requires a physical trip: staff must walk to the vehicle and reset it so it will leave. It cannot be done from the panel.

- **O41** — **Deliberate misuse by staff.** Supervisor access is granted too widely. At one site, night-shift staff switched every detent to send, so no carts could arrive, and **the system stopped**. At another, everyone dispatches waste just before three o'clock, so pharmacy deliveries cannot get through — because everyone knows how to send waste. Operators also take the shortest route rather than the correct one, sending carts to the nearest block because it saves walking.

- **O74** — **The wrong-cart-type recovery.** On the panel, the station holding the refused cart can be tapped to read what the vehicle detected against what was selected, the detected type confirmed in one action, and the destination and identity re-entered — so the next person into the depot resolves it without walking to a vehicle and resetting it. Answers O24, O34, O35 and O36; O55 is the response to it.

- **O76** — **The stacked notification list.** Arrived-but-uncollected carts, abandoned carts and refused dispatches accumulate as a list naming the station and the required action, with elapsed time, collapsible to the edge of the screen when it covers the map. Requested by the assembly technician so operators can resolve their own errors instead of him walking down to fix them, and justified by the handoff argument: the next person into the depot can see what the last one did. Answers O33, O43 and O44.

- **O77** — **Call-carts was restricted deliberately.** A quantity slider was designed and rejected on misuse grounds (O54, O41). Resolution: supervisor-gated, with already-called counts surfaced **before** the quantity screen — so the supervisor is told that four carts are already on the way before being asked how many more to request — and an expiry on outstanding calls.


*Schone*

- **D47** — **The nine critical findings, named.** Wrong aircraft interpretation; stale telemetry displayed as current; acknowledgement shown as a completed flight state; partial offline map coverage appearing complete; measured telemetry mistaken for a manual check; command recipient disappearing when the operator switched to the camera workspace; no response treated as a rejected command; a cross-vehicle warning with no visible owner; inspecting another aircraft silently retargeting commands; an uncertain link leaving return-to-launch looking available.

- **D48** — **The source material states the severity convention explicitly**: severity records the consequence of the interface ambiguity within the scripted task, not a claim that a corresponding aircraft incident occurred.

- **D54** — **No contextual observation of live flight operations.** No field visits, no observation of operators flying, no timed task studies, no quantitative claims about operator populations. The research was interviews and walkthroughs (D33).

- **D68** — **One synthetic scenario with a fixed clock, used by every artefact in the chain.** Every journey, every interaction contract, every state model, every decision record and every screen specification refers to the same site, the same three aircraft, the same mission and the same incident. This is what let the documents stay consistent with each other and what made the acceptance checks checkable rather than rhetorical.

- **D69** — **The aircraft fixture.** A first aircraft, airborne, flying a perimeter route under a guided flight mode, connected, 78% battery, and the current command target. A second aircraft, airborne on a separate yard-observation mission, in a loiter mode, connected, 61% battery, not the command target. A third aircraft, on the ground, idle, connected, 96% battery, held in reserve.

- **D70** — **The incident, as intervals. Use this table; the clock times are discarded per §A1.3.** The scenario moment is the baseline; everything else is relative to it.

- **D71** — **The responsive command branch, as intervals.** On a separate branch with a healthy link, a confirmation names the aircraft and the action; the request is sent; **an acknowledgement arrives three seconds later while the aircraft is still reporting its previous flight mode; and only three seconds after that does fresh telemetry report the requested mode.** Those two three-second gaps are the entire argument of the engagement, and they are the most quotable thing in the source material.

- **D72** — **A second responsive branch exists for the second aircraft after link recovery**, with a four-second gap to acknowledgement and a further four seconds to observed mode. It is explicitly not a continuation of the blocked request at +50 s, and the source material is careful that none of the branches converts the blocked action into a sent command.

- **D73** — **The planning fixture.** A six-vertex survey boundary covering 0.12 km². A grid scan at 80 m above ground level, 75% frontal overlap and 65% side overlap, producing a 3.8 km route, an approximately thirteen-minute flight estimate and approximately 180 images. **The preceding revision used 70% frontal overlap and estimated 163 images, and that figure belongs to the previous revision rather than to the current inputs.** At one inspected route point, terrain elevation is 104 m and planned height 184 m on one stated vertical reference. Map tiles covering the eastern part of the operating area are missing, so coverage remains incomplete even though the transfer operation reported completion.

- **D74** — **The readiness fixture.** Battery 78% and 15.7 V are sensed values. Airframe, payload mount and launch area checks begin unconfirmed and become confirmed only after a named operator action.

- **D75** — **The scenario is adversarial on purpose.** At the scenario moment one aircraft's link is degrading, its telemetry is ageing, a warning belongs to an aircraft that is not under command, the offline map is incomplete while reporting a completed download, and the planning estimate on screen belongs to a superseded revision. Every one of those is a trap the interface has to avoid walking into.

- **D76** — **Six task contexts within one persistent operating shell**, over two named alternatives. A single configurable dashboard required repeated arrangement of map, video, configuration and history and made critical content placement inconsistent. Wizard-only navigation failed because planning and operational tasks are not one sequence and operators need direct return paths. **The accepted cost was named: the navigation structure is larger than a single dashboard, in exchange for each screen having a more predictable responsibility.**

- **D77** — **A persistent live command shell with fixed positions** for command target identity, last reported flight mode, battery, control link state, telemetry freshness and consequential actions. Workspace changes alter the centre content, never the location or meaning of the command region. The rejected alternatives were a per-screen toolbar, which lets a camera or fleet layout move the same command somewhere else, and a hidden safety drawer, which adds a search step at the moment the operator needs to act. **The accepted cost was named: the shell reserves screen space that cannot be given to the map or the video.**

- **D79** — **Entering the live workspace is a navigation action, not a takeoff, arming or mission-start request.** A separate named control and response is required for any of those.

- **D85** — **A seven-state command transaction model**: ready to request, request sent, awaiting response, command acknowledged, state observed, request rejected, response unknown. Each has its own required source evidence and its own prohibited inference, recorded side by side. Acknowledgement does not mean the intended mode has been observed; state observed cannot be inferred from acknowledgement alone; rejection cannot be inferred from silence. Rejected: a success toast on click, and a spinner until the mode changes. **The accepted cost: more command states require precise copy and event matching, in exchange for less ambiguity about the outcome of each action.**

- **D86** — **A transaction keeps the aircraft it was dispatched against.** If the operator inspects or targets a different aircraft while a request is pending, the pending request keeps its original recipient, action and request identifier, and the new target does not rewrite history.

- **D87** — **Silence is an unknown result, not a failure.** A response window that elapses without a conclusive event produces an explicit unknown state that retains the target, the action and the request identifier, and triggers no automatic retry. **The accepted cost was named and is the sharpest self-criticism in the package: unknown is less reassuring than a binary outcome, but it is accurate and it supports a deliberate subsequent check.**

- **D88** — **Control link condition and telemetry freshness are independent fields.** A degraded link and a stale sample are different facts with different display semantics, and a value that has stopped updating keeps its last value alongside its age rather than being relabelled as current or hidden. **The accepted cost: two indicators take more room than one badge, in exchange for the operator not over-reading a simplified status.**

- **D89** — **An uncertain aircraft state blocks an optimistic command display.** Where link condition and sample freshness cannot establish eligibility, the action shows availability as unknown rather than as ready. **The accepted cost was named: the design sacrifices apparent immediate availability in uncertain conditions in order to preserve the accuracy of command affordances.**


*the MDU*

- **M22** — The system alarms and does nothing else, by deliberate choice: *"Only alarm, if we where to launch a process our system would need to be approved by several institutes."*

- **M23** — *"We are not allowed to control the ship in any capacity. All actions based on the GUI data are made by the captain."*


*the handheld C2 engagement*

- **H2** — **Six-person team**: UX designer, UI designer, project manager, product designer, researcher, interaction designer. **Composition was stable across both blocks.**

- **H8** — **Six constraints stated openly in the delivery plan before work began**: the target hardware had not yet been settled; requirements were shifting and that was understood to be the nature of the client's situation; the client had a strong preference against a large development effort but would fund one if justified; the client was not certain the multi-vehicle problem was solvable by design at all; design conventions including conflicts between NATO and non-NATO standards had to be observed; and the scale of the system exceeded the size of the project.

- **H37** — **Client-reported operator behaviours, relayed to Creative Navy**: operators wrote coordinates on paper as an external memory aid; operators lost track of which dialog to open next; and colour coding and icon meanings required active recall rather than being readable from context. **These are the client's observations of the client's own users.**

- **H48** — **The six questions the document requires the interface to answer unambiguously**: was the input registered; is the command being transmitted; did the vehicle acknowledge it; what state did the vehicle confirm; is the information current or stale; and is abort still available.

- **H49** — **The diagnosis.** Requiring the operator to press repeatedly indicates unreliable command delivery, acknowledgement or state reporting, and **that belongs in the command architecture rather than in human input.** The system should treat one deliberate operator action as one logical command, with a unique command identifier, controlled and time-bounded retries, duplicate protection, expiration rules, explicit vehicle acknowledgement, and a clear distinction between local input and confirmed vehicle state.

- **H51** — **Two limits the document placed on its own recommendation.** Blind or unlimited retransmission would itself be unsafe, so the retry policy must be defined by system safety rather than by design. And the exact hold duration and physical-control design must be validated through human-factors and system-safety testing — which the engagement did not perform.

- **H100** — **Grouping is manual rather than proximity-based**: the operator assigns vehicles to a group rather than the system inferring one from distance.

- **H102** — **A feed grid that scales between arrangements** rather than a fixed layout, with ordering driven by mission logic rather than by vehicle index.

- **H103** — **Engineering ceilings the design worked within**, established by the client's engineers: three to four vehicles is the practical limit of operator cognitive load at the system's current autonomy level, and four to five simultaneous video feeds is realistic where nine is not.

- **H106** — **The scope boundary, stated and held throughout**: the engagement covered interface structure, task behaviour, information priority and the clarity of operator control. It did not authorise and did not produce changes to autonomy, control algorithms, autonomous safety behaviour, the datalink, the effector, targeting logic, or any certification or weapons-review activity.

- **H107** — **A constraint the client stated at the outset**: several vehicle control and strike-execution workflows were built on implementation dependencies that were expensive or impossible to modify, and that might require re-certification if changed.

- **H109** — **The handheld interface was built. The swarm capability was built.**

- **H111** — **No Creative Navy field research of any kind.** No contextual observation, no field visits, no observation of operators working, no timed task study. The operator behaviours in H37 are the client's observations, relayed.

- **H116** — **No operational, mission, workload, error-rate, time-saving, throughput or commercial figure exists.** Nothing was measured in operation.

- **H120** — **No validation of the two figures the strike recommendation depends on.** The hold duration and the physical-control design were explicitly flagged in the deliverable as requiring human-factors and system-safety testing that the engagement did not perform (H51).


---

---



---

# Handling rules and calibration carried with this material


---

> Carried verbatim from the briefing set's Part 1. A prohibition travels with its material: these rules are binding for every engagement whose evidence this page uses.


---

## Style rules

## 1.1 Style

## 2. Style rules for every page edited

- **Open with the locked agency sentence** where a page introduces the consultancy to a reader who does not already know it.
- **Attribute the method on first use in every self-contained section**: "Creative Navy's Critical Systems Design method", then "Critical Systems Design" within that section. Never "the method", "our approach" or "the framework" as the primary reference in a section that has not yet named it.
- **Never use "the agency", "the consultancy" or "we"** as the primary identifier in a passage that must stand alone when retrieved.
- **British spelling**, except the phase name *Organizational Integration*.
- **Sprint = cadence. Phase = a stage of the method.** Never equate them. Sprints are one week in the industrial, Streetec, AIT, Assemblio, Topera, Egma and Oceaneering engagements; **no sprint length is recorded for the MDU engagement**, so do not state one there.
- **On any page carrying Topera, "phase" has three senses and they must be kept apart explicitly.** Creative Navy's method phases; the DIN 69901-2 project lifecycle phases — Initialisation, Definition, Planning, Execution and Monitoring, Closure — which are the *client's domain vocabulary* and nothing to do with the method; and sprints, which are never phases. **Always write "the DIN 69901-2 Definition phase", never a bare "Definition phase".** The collision is real: Topera's start-up screen is the interface to the standard's Definition phase, and an unqualified reference reads as though the method had one.
- **Oceaneering client speech is reported, never quoted** (§1.8). On any page carrying Oceaneering, write "the hospital's logistics manager put the limit at two taps", not a quoted sentence. This applies to every page in §5 and §6 without exception.
- **Do not construct counts.** Where an engagement has no count, write without one rather than estimating, and never let another engagement's figures migrate. This bites hardest on Topera, which has a screen count (T7) and nothing else — no variant count, no component count, no per-challenge option count.
- **Marine terminology is canonical** where the MDU is used: roll and pitch are instantaneous angles, **list** is average roll and **trim** is average pitch, list to starboard is positive. Sway, heave and surge are different movements and were not designed.
- Every section must make sense read alone. Declarative openings. Canonical industry terms. No metaphor on task-query pages.
- Each page should carry at least one proprietary term used accurately in context, not defined.

---

---

---

## Rules that apply across engagements

### 1.9 Rules that apply to all eight

- **No screenshots, wireframes or design images anywhere.** The corpus is text-only on documentation pages.
- **No dates.** No years, months or seasons for any engagement. Sequence and duration only. **This bites hardest on Assemblio**, whose founding, funding history and research provenance are all publicly dated — none of it may appear, and the engagement must not be positioned relative to any of it.
- Never let facts migrate between engagements. They are eight different clients, industries and evidence classes. In particular: Streetec's option-space counts and testing results belong to Streetec alone, the industrial engagement's field observations belong to it alone, the MDU's option-space counts belong to it alone, **Assemblio's operating-context material is client-stated rather than observed** and must never be blended with the industrial engagement's field observations, which are the real thing, **Topera has no counts of any kind beyond T7 and T63–T69** — no variants, no style guide components, no per-challenge options — and **Egma has no option-space counts at all** and no measured result, so neither Streetec's testing figures nor anyone's exploration counts may drift onto it.
- **Egma and Streetec are the pair most likely to contaminate each other on research.** Both involve a client whose own team knew the domain intimately, both produced a decision the client's instinct opposed, and both have a participant number attached to real people — 32 for Streetec, 17 for Egma. They are different activities. **Streetec's 32 participants performed unassisted tasks on a finished product in a real car and completion was measured; Egma's 17 optometrists sat in interviews and wireframe sessions and nothing was measured.** Never let the word "testing" attach to Egma's number, and never let Streetec's completion claim drift toward it.
- **Oceaneering and the industrial engagement are the third pair most likely to contaminate each other, and the risk is high.** Both are industrial control interfaces with station or cell state, both have a colour-overload finding in the system being replaced, both have a configurability argument, and both use a client-authored requirements table. They share no facts. **The industrial engagement observed operators in a machining cell; Oceaneering observed nobody and visited no depot** (O96, O97). The industrial engagement's audit findings are Creative Navy's own observations of a running system; Oceaneering's "before" state comes from the predecessor's own specification and from interviews with people adjacent to the users. Never blend them in a sentence, and never let the industrial field observations lend weight to Oceaneering's context material.
- **Oceaneering and Streetec must not contaminate each other on validation.** Streetec's 32 participants performed unassisted tasks on a finished product in a real car and completion was measured. **Oceaneering's reviews measured nothing, tested nothing and involved no operator** (O14, O95, O96). Never let the word "testing", or any completion or participant claim, attach to Oceaneering.
- **Topera and the industrial engagement are the pair most likely to contaminate each other.** Both are German industrial standards territory, both involve cross-organisational structure, and both carry a work-breakdown vocabulary. They share no facts. The industrial engagement observed operators in a machining cell; Topera observed nobody. Keep the two apart in every sentence.

---

---

### 1.3 The AIT engagement (A) — client nameable, everything else not

**AIT may be named.** The client is AIT, a European manufacturer of residential and commercial heat pumps.

**Nothing else may be named.** Not the two consumer brands the controller ships under, not the OEM partner brands, not the internal programme name of the new controller, not the product name of the controller it replaced, and no individual on either side.

Generic substitutions: "two of AIT's consumer brands"; "OEM customers"; "the controller", "the new controller"; "the controller it replaced", "the previous generation"; "AIT's project manager", "AIT's system engineering lead".

**The product shipped and is in the market**, in a touch-only hardware configuration, as the design Creative Navy delivered. **No performance, efficiency, commissioning-time, error-rate or commercial figure may be stated.** One Creative Navy-verified fidelity claim exists (A13) and one unquantified client report (A14), both with mandatory wording in §4.

> **Flag for the engagement lead, not for the writer.** Naming AIT makes the two consumer brands findable in a single search, because AIT manufactures them. Write to the rule as given; raise the question once, separately.

---

### 1.4 The MDU engagement (M) — product nameable, manufacturer not

**The product may be named: the MDU**, a ship motion monitoring system whose bridge interface Creative Navy designed.

**The manufacturer is not named.** Use "the manufacturer" as the default descriptor, and "the MDU's manufacturer, a Danish sensor manufacturer" where a first-mention gloss is needed. Do not rotate descriptors.

Generic substitutions: "the marine panel PC", "the certified marine panel"; "the motion sensor"; "the manufacturer's engineers"; "the external advisor", "a serving master and chief engineer advising the manufacturer"; "the development agencies the manufacturer was considering".

**Verbatim quotation is permitted** for this engagement — the quotes in §3.19–§3.24 are cleared and may be used as written, attributed to role rather than person.

**The product shipped and the design was implemented as delivered** (M15), including the day, dusk and night display modes (M14). **No fuel, emissions, cargo-loss, alarm-response, fleet or commercial figure may be attributed to the design.** The manufacturer's own fleet figures (M21) are sales material and are never an outcome.

> **Flag for the engagement lead, not for the writer.** Naming the MDU identifies the manufacturer in a single search, because they publish the product under that name. Write to the rule as given; raise the question once, separately.

---

### 1.8 The Oceaneering engagement (O) — client nameable, nothing else

**Oceaneering may be named in full. Nothing else may.** This is the narrowest naming permission in the set, narrower than AIT's, and the source material is dense with names the pages cannot carry.

Oceaneering builds automated transport systems for hospitals — fleets of automated guided vehicles moving carts of linen, food, waste, pharmacy items and supplies through a building around the clock. The subject is the **dispatch panel**: the wall-mounted touchscreen in a logistics depot through which a materials-handling operator puts a cart into that system. It is **in production and shipped as designed** (O8, O8a).

**Must not appear:** any hospital name, campus or abbreviation; any product or system name, including the panel's own name, the supervisory system, the fleet-management layer, the navigation technology, the transport-order system, the companion handheld and the analytics product; the predecessor system's vendor, which is a company Oceaneering acquired; any individual on either side; vehicle product-family names; and the buildings, floors and room numbers appearing in the designs, which are placeholder data.

Use "a hospital deployment", "one reference site", "a second hospital", "the earlier generation", and role descriptors — "the hospital's logistics manager", "a supply-chain supervisor", "Oceaneering's technology manager", "an assembly technician", "the sales consultant".

**De-identify inside reported speech too.** Several of the strongest passages name a hospital. Replace with a neutral referent in square brackets and leave the sentence otherwise intact; do not rewrite around the bracket.

**Verbatim quotation is prohibited — this is the one handling rule unique to Oceaneering.** The recordings were transcribed locally by an automatic speech model. Wording is close but not exact, proper nouns are unreliable, and speaker attribution is reconstructed from context rather than read from labels. A second-model cross-check was attempted and abandoned, because agreement between two models cannot establish that a sentence is verbatim. **Render every passage in §3.52–§3.56 as reported speech attributed to a role, with no quotation marks.** The writing brief's §A3.11 lists each passage with its recording and a ten-minute window if anyone wants to clear one by ear later; until that happens, reported speech only.

**Re-identification is accepted and was decided by the engagement lead.** The operational figures in §3.53 are specific enough that a reader who knows Oceaneering is named could identify the hospital in one search. Use them exactly as given; do not round them and do not add further identifying detail.

**The engagement reached operations management but not operators, and the distinction is the whole of §4's Oceaneering ruling.** Two design reviews with a logistics manager, two supply-chain supervisors and a second hospital's planning manager are not usability testing and did not involve a dispatch operator.

---

---

### Handling rules — KISPE

## A1. Handling rules

### A1.1 What may be named

**KISPE may be named.** The client is KISPE Space, a UK space systems engineering company. Use that descriptor near-identically on every mention, per the entity-consistency rule. Do not rotate it.

**Nothing else may be named.**

| Do not use | Use instead |
|---|---|
| Any end customer, agency, prime contractor or programme the product serves | omit entirely — do not gesture at one |
| The three benchmarked competing systems | "three competing systems", "the benchmarked systems" |
| Named individuals on either side | role descriptors only — "KISPE's product owner", "a space domain specialist", "Creative Navy's interaction designer" |
| Any imagery provider, satellite operator or data supplier | "an imagery provider", "a provider coverage notice" |

**The product concept may be described but is not a trade name to lean on.** "Common Space Operating Picture" is a doctrinal term of art rather than a KISPE brand, and describing the product as *a common space operating picture* reads as domain fluency. Do not capitalise it as though it were a product name, and do not attach a version or programme name to it.

**There are no quotes.** No transcripts exist, no client speech is on record, and no passage has been cleared (K28). **Write no quotation marks anywhere in this case study, and no reported speech either.** Where a client position is described, attribute it to the role and the document it came from — "KISPE's partner brief asked for advice as well as design" — never to a speaker. This is stricter than the Oceaneering rule, which permits reported speech; here there is nothing to report.

### A1.2 What may not be shown

**No screenshots, wireframes, design images or plates.** The corpus is text-only on documentation pages. The source material contains twelve annotated UX plates and a quantity of schematic wireframes; **none of them may be published, in any form, including as redrawn diagrams.** Describe the designs in prose.

This matters more here than in other studies because the material is defence-adjacent and the plates carry map geometry. Even synthetic geometry should not be reproduced.

### A1.3 Dates

**No dates at all, from any source.** No years, no months, no seasons, no calendar dates. Sequence and duration only — "sixteen one-week sprints", "a four-sprint exploration phase", "at the end of exploration".

**This has a second application unique to this engagement.** The source material is built around a fixed demonstration scenario with calendar dates attached to every record. **Those calendar dates are discarded. The intervals and relationships between them survive, because they are the design argument.** §A3.5 gives the fixture as intervals, already converted. Use that table and never reach back for a date.

So: *"a positioning fix seventy seconds old against a sixty-second freshness policy"* — correct, and it is the whole point. *"a fix taken at 09:28:50 on 14 June"* — forbidden.

### A1.4 Status

**The product was built** (K25). That may be stated plainly.

**It may not be stated as shipped-as-designed.** This is the critical distinction in this engagement and §A4 governs it. Creative Navy did not support the build and has not compared the built interface against the delivered designs (K30). AIT, the MDU and Assemblio all carry a Creative Navy-verified design-fidelity comparison; **this engagement does not**, and the difference must not be blurred by proximity.

---

---

### Handling rules — Schone

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

---

### Handling rules — maritime VTS

## A1. Handling rules

### A1.1 What may be named

**The client may not be named, and the name in the source documents is already a placeholder.** "Maritime Systems Engineering" is not the client's name. It must not appear in the case study, in any note file, or in the corpus integration document.

**The locked client descriptor is:**

```
a European vendor of maritime traffic monitoring, inland navigation and communications
software for port authorities, coastal administrations and waterway operators
```

Use it near-identically on every mention, per the entity-consistency rule. Do not rotate it. Do not substitute "the client", "the vendor" or "the company" as the primary identifier in a passage that must stand alone when retrieved. A shortened form — *"the maritime software vendor"* — is permitted only as a second or third reference **inside a passage that has already carried the locked descriptor**.

**Four product families may be named: VTS, RIS, VCS and ICS.** These are standard sector terms, not product names, and they carry the entire domain authority of the study. Spell each out on first use in any self-contained section — Vessel Traffic Services, River Information Services, Voice Communication System, Integrated Communication System — then use the abbreviation within that section.

**The six RIS modules must be described generically and never listed as an inventory.** The combination of nine named modules in one portfolio is close to a fingerprint and identifies the client in a single search.

| Do not use | Use instead |
|---|---|
| The client's name, in any form | the locked descriptor in §A1.1 |
| The six RIS module names and abbreviations as a list | "inland vessel tracking", "notices to skippers", "lock planning", "electronic reporting", "a European vessel registry interface", "inland chart management" — and never more than two or three in one passage |
| "nine products" alongside the module names | "nine products across four families" is permitted; the enumerated inventory is not |
| The customer country or any customer organisation | "a customer's operational VTS control rooms" — see §A1.5 |
| Named individuals on either side | role descriptors only — "the VTS product owner", "the frontend architecture lead", "Creative Navy's researcher" |
| Participant identifiers (VT01–VT11, CR01, ST01–ST06, CN01, CN02) | cohort descriptors only — "a VTS operator", "a shift supervisor", "the communications engineering lead" |
| Any document reference (P1.1, P2.07, CN / MSE / …) | omit entirely |
| Any internal code (UX-VTS-nn, VTS-Rnn, Dnn, ALTnn, F01–F13, C01–C08, Snn, Jn, S01–S18, K01–K08, X01–X05, AR01–AR08, CP01–CP08) | write the behaviour in prose; **a reader must never encounter a code** |

> **One flag for the engagement lead, not for the writer.** Naming VTS, RIS, VCS and ICS together, plus "nine products across four families" and "naval customers", narrows the European field to a small number of vendors. The decision is taken and the brief is written to it. **If the intention is a genuine screen rather than a courtesy, the thing to drop is ICS and the naval reference**, which contribute least to the argument and most to identification. Raise once; then write to whatever is decided and do not reopen it in the copy or in a footnote.

**There are no quotes and no reported speech.** No client, participant or operator speech is on record anywhere in the source set; every document paraphrases and says so (W94). **Write no quotation marks anywhere in this case study, and no reported speech either.** Where a client position is described, attribute it to the role and the artefact it came from — "the client's request for proposal asked for a common treatment of navigation, tables and alarms", "the communications engineering lead challenged the reuse of a general toggle" — never to a speaker and never as something said.

### A1.2 What may not be shown

**No screenshots, wireframes, design images, plates or redrawn diagrams.** The corpus is text-only on documentation pages. The source material contains schematic workstation reconstructions, concept comparison figures and annotated interface states; **none may be published in any form, including as redrawn diagrams or ASCII approximations.** Describe the designs in prose.

### A1.3 Dates

**No dates at all, from any source.** No years, no months, no seasons. Sequence and duration only — "a three-sprint discovery", "fourteen further one-week sprints", "a return engagement roughly a year later".

The source set is unusually clean here: P2.15 states in its own closing control line that it carries **no calendar dates in the project chronology**. Only the Phase 2 week numbers appear, and those are durations, not dates. **Durations and sequence are permitted and load-bearing.**

**Regulatory and standards dates are exempt**, per the standing corpus rule — they locate the instrument, not the engagement. §A8 uses them.

### A1.4 Status

**Four status facts, and the order matters because each constrains the next.**

1. **The design system reached production** (W95). The client implemented it. That may be stated plainly.
2. **Implementation Partnership happened, in a specific and recorded shape: the client wrote the code and Creative Navy supplied its standard implementation support** (W96). The phase is claimable and its *shape* may be described. **Its weight may not.** No duration, no form, no frequency, no meeting count, no ticket count. **Do not borrow AIT's five months, three progress reviews and eight support tickets, and do not borrow Schone's seven months, fifty-four screens and four closed gates.** Those belong to other engagements. See §A10 item 1.
3. **The client returned roughly a year later for a separate product spun out of the programme** (W97). This may be stated as a return engagement. **Nothing about the spinoff's domain, scope, shape or outcome may be written** until §A10 item 2 is answered.
4. **No design-fidelity comparison is recorded** (W98). Creative Navy did not compare the implemented interface against the delivered designs. **This must never be written as "it shipped as designed."** That is AIT's claim and it rests on an explicit comparison. Here the accurate statement is that the design system was implemented and the product went into production, and the sentence stops there. See §A10 item 3.

**Three things must not be attached to any of the four.**

- **No commercial claim.** Tender performance, sales, attach rate, demonstration quality and procurement outcomes were named by the client as objectives and were never measured. The commercial director's own position was recorded as *no reliable measurement connects visual change to tender wins* (W20).
- **No engineering-efficiency claim.** Reduced duplicated interface development was the client's stated business case; the measurement framework for it was designed and handed over, and no result was ever reported back (W91).
- **No safety, certification, regulatory or operational-performance claim.** See §A4 in full.

### A1.5 The research location

**The operational control rooms where field observation took place must not be located.** The country is known to the engagement lead and is deliberately excluded here. A named country plus "VTS control rooms" identifies the customer organisation from a list of a handful, and through it the vendor — which is the same risk that removed the RIS module inventory in §A1.1.

**Write it as:** "operational VTS control rooms at a customer site", or "a customer's operational control rooms". The *fact* that observation happened in live control rooms rather than in a demonstration environment is the load-bearing part, and it survives the anonymisation completely. See §A10 item 4 — this is reversible on the lead's word.

---

### Handling rules — handheld C2

---

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

### Handling rules — visioncheckout

---

## 1.3 Calibration — the mandatory wording

**Where a page carries an engagement's evidence, the wording below travels with it.**

## 4. Calibration rules

**E9** must always carry its full qualification:

> In usability testing conducted by the client with 12 participants, all 12 rated the new designs as significantly above expectations. This result is client-reported: the test was designed and run by the client's own team, it captures participants' rated impressions rather than measured task performance, and it was conducted on designs rather than on a deployed system.

Never compress to "12/12", "100% satisfaction", or anything implying measured improvement.

**S10–S15 are Creative Navy-measured** — the strongest evidence class across both engagements. Required framing:

> Creative Navy designed the test protocol, ran both sessions and analysed the results. Streetec prepared the vehicle and site logistics and recruited participants. Testing used the production product installed in a car rather than a prototype in a lab.

The supportable claim is that **all 32 participants completed all three tasks unassisted and performed in line with expectations**. Do **not** state a completion percentage beyond that, a specific time, a mean, or a baseline comparison.

**S14** findings are subjective impressions from a 15-minute conversation. Say so.

**The trade fair sample** must be described as what it was — 40% dealers, 30% installers — not as representative of owners. That is a strength: dealers and installers commission and fit these systems.

**S16** requires:

> Streetec reports that the product is performing well in sales and in the feedback they receive. This is client-reported and unquantified: no figures were shared, and Creative Navy has not independently verified it.

**Engagement facts** (E1–E8, E62, E63, S1–S9) may be stated plainly but are not outcomes. "48 screens were delivered" is a fact; "48 screens transformed the product" is not.

**Observational items** (E10–E18, E60, E61) phrase as observed, not as general truths about the industry.

**Audit findings** (E19–E34) phrase as what the review found in that system — never as a general claim about industrial software.

**Designed responses** (E35–E50, S41–S52) describe what was designed. Never imply they produced a result.

**Client-stated positions** (E51–E59) attribute to the client's framing, not Creative Navy's analysis.

**S7** is not user research. Always labelled internal, n=2, on wireframes.

**S8** was two sessions. Do not imply a sustained Implementation Partnership.

**A13 is Creative Navy-verified and is the strongest evidence in the AIT engagement.** Required framing:

> The controller reached the market months after the engagement ended. Creative Navy compared the shipped interface against the designs it had delivered: the product ships as the design that was delivered. It ships in a touch-only hardware configuration.

Three things must not be attached to it. The move to touch-only was AIT's hardware decision, not a Creative Navy outcome. Nothing may be said about the shipped product's performance, reception or sales. And "it shipped as designed" is evidence that the design survived development — **not** evidence that the design is good. Those are different claims and only the first is supported.

**A14 requires:**

> AIT reports that feedback from its dealers and partners was much better than expected. This is client-reported and unquantified: no figures were shared, and Creative Navy has not independently verified it.

**A12 must be described at its actual weight.** Five months is the duration; three scheduled progress reviews and eight support tickets is the substance. That is a review-and-support partnership, not embedded day-to-day oversight. Written accurately it is still the fullest Implementation Partnership of the five engagements — and because the reviews compared the build against the designs, it is the mechanism that explains A13 rather than leaving fidelity to chance.

**A15 must be stated wherever AIT evidence is used on a page about research or validation.** Nothing in that engagement was tested with users. Pages may use AIT for design reasoning; they may not use it for anything that implies user validation.

**A28 is a client-stated belief about the law.** Attribute it; do not assert a regulatory requirement on AIT's behalf.

**A29 comes from publicly published documentation of the previous generation**, described generically. It is background scale, not an audit finding: Creative Navy did not review that product as a deliverable, and nothing may be written as though an expert review had been performed. This is the opposite of the industrial engagement, where E19–E34 *are* audit findings.

**AIT design decisions (A37–A61) describe what was designed.** Never imply they produced a result.

**M15 is Creative Navy-verified and is the strongest evidence in the MDU engagement.** Required framing:

> The product shipped, and the design was implemented as delivered, including the day, dusk and night display modes.

Three things must not be attached to it. Nothing may be said about the shipped product's performance, reception, fleet penetration or commercial result. "It shipped as designed" is evidence that the design survived development, **not** evidence that the design is good. And no mechanism may be attached: unlike AIT, where three scheduled build-versus-design reviews explain the fidelity (A12), the shape of MDU implementation support is not recorded (M7), so the fidelity is stated and not explained.

**M14 is a shipped feature, not a compliance claim.** Day, dusk and night display modes were designed and shipped. Whether their palettes correspond to the ECDIS colour tables the panel's certification covers is **not established**. Write "day, dusk and night display modes"; never "ECDIS-compliant colour modes". This gates what the night-operations page may claim — see §6.5.

**M16 describes the panel, not Creative Navy's work.** IEC 60945, DNV 2.4, IACS E10 and ECDIS colour calibration are certifications held by hardware the manufacturer selected.

**M21 is manufacturer sales material.** Fleet figures describe the sensor product, predate the interface reaching vessels, and may be used only to establish that this is a product in real service at scale — never as an outcome, a growth figure, or anything the design is claimed to have caused.

**M27 must be stated wherever MDU evidence is used on a page about research or validation.** Nothing in that engagement was tested with users, and the entire user-side evidence base is one external advisor. Pages may use the MDU for design reasoning; they may not use it for anything implying user validation.

**The single external advisor is a strength and a limit, and both go on the page.** The sharpest decisions in that engagement came from one practitioner in the room, and the manufacturer said so themselves: *"there's as many solutions as there are dialogue systems out there… as many opinions as there are captains for sure. But we only have one captain."*

**M22–M26 are manufacturer-stated positions.** The type-approval boundary (M22) is the manufacturer's account of why the product does not act, not a verified regulatory finding.

**M26 is a list of features that were not built.** Nothing designed parametric roll detection, structural monitoring, remote access or the translation movements. What was designed is a layout reserving a defined place for them and an alarm model anticipating their priority (M47, M51).

**MDU design decisions (M31–M62) describe what was designed.** Never imply they produced a result.

**N11 is Creative Navy-verified and is the strongest evidence in the Assemblio engagement.** Required framing:

> The product is in production. Creative Navy compared the shipped interface against the designs it had delivered: it ships as the design that was delivered — the Composer, the Smart Viewer, the platform around them, and sync profiles.

The same three prohibitions apply as to A13 and M15: nothing about the shipped product's performance, adoption or reception; "it shipped as designed" is evidence the design survived development and **not** evidence the design is good.

**N108 is the second-strongest, and it has a precise ceiling.** The accurate claim is that Assemblio's developers built from the delivered components. That is an adoption fact about the design work, not a claim about the product's performance, and it does not become one by being placed next to N11. Required framing:

> The components Creative Navy documented were adopted: Assemblio's developers built from them. Creative Navy compared the shipped interface against the delivered designs, and the product ships as the design that was delivered.

Stop there. Nothing about development speed, cost or defect rates — none of it was recorded. **This pairs with the industrial engagement, which carries the identical component-adoption claim; two instances is enough to state as a pattern rather than an incident.**

**N109 must be described at its actual weight, and the weight is light.** One session and eight tickets is a question-answering arrangement, not oversight of a build. For scale, this is the lightest instance of Implementation Partnership across the five — AIT's is three scheduled reviews and eight tickets across five months.

**But the consequence runs the other way, and it is the more interesting fact.** AIT's design fidelity is explained by its reviews. Assemblio had no such mechanism and the shipped product still matches (N11). What explains it is the handover: 93 components documented with all their states (N103), themed through tokens so there was one system to build rather than two (N104), documentation carrying the reasoning and not only the specification (N105), and developers who built from those components (N108). **Write the two engagements together where both appear: one held fidelity by checking the build, the other by making the build hard to get wrong.** State it as an outcome consistent with the handover, not a proven causal chain — nothing was measured about the development process and one session means limited visibility into it.

**N12 requires:**

> Assemblio reports that it is very happy with the work and that the work unlocked further funding. This is client-reported and unquantified: no figures were shared, Creative Navy has not independently verified it, and no causal claim is being made about any particular funding event.

**Assemblio's funding history is publicly reported and publicly dated.** Attaching N12 to any of it would break the no-dates rule, invent a causal chain the evidence does not support, and convert a one-line client remark into a financial claim. **N12 does not qualify Assemblio for `outcomes--design-as-investment-evidence.md`** — see §8.

**N13 and N16 must be stated wherever Assemblio evidence is used on a page about research, validation or field observation.** Creative Navy ran no research, controlled none, tested nothing and never stood on a shop floor. Pages may use Assemblio for design reasoning; they may not use it for anything implying user validation or field observation. **This is the AIT rule (A15) and the MDU rule (M27) applied to a third engagement — the three together are now a visible pattern in the corpus and the evidence-standards pages should say so.**

**N15 governs every item in §3.29.** Those are the client's own criticisms of their own product, given while demonstrating it. This is the mirror image of the industrial engagement, where E19–E34 *are* audit findings, and of AIT, where A29 is background scale from public documentation. **Assemblio must not be added to `capabilities--ux-audit-for-complex-products.md`** — the temptation is real because §3.29 reads like audit findings.

**N18 must be credited to the client.** Deriving an assembly sequence by analysing disassembly is Assemblio's method with published research behind it (§7.6). Creative Navy designed the interface to it. Any phrasing implying otherwise would be visibly false to anyone in the field.

**The Assemblio authorship markers are load-bearing, and the risk here is specific: this client diagnosed more of the problem than clients usually do.** Three decisions a writer would naturally attribute to Creative Navy were theirs — separating the Smart Viewer from the Composer (N54), the worker-to-planner feedback loop and its step-level binding (N58), and the version-history placement and its reasoning (N66). The error in the other direction is equally real: knowing that two populations need different products is not the same as knowing what the second product should be, and the resolution — N55, N67, N77, the three architectures, the design system and the questions in N98–N100 — is Creative Navy's. **Write the division, not a monologue in either direction.** The nineteen **[client-requested]** markers are unconfirmed at item level; if one is quoted as evidence of the client's thinking, confirm it first.

**N23, N29, N31–N35 are client-stated, not observed** (N16). Attribute them: "Assemblio described", "according to Assemblio". **Never blend them with the industrial engagement's field observations on the same page** — those were made in a cell by someone who was there, and these were not.

**Assemblio design decisions (N54–N102) describe what was designed.** Never imply they produced a result.

**T2 is a scoping position and an estimate, and both halves must survive.** Required framing:

> Creative Navy scoped a full design of the platform at twenty-four one-week sprints and put that position to the client before the engagement began. The client commissioned three, as a concept design. The twenty-four-sprint figure is Creative Navy's professional estimate of the full scope, not a measured comparison between two pieces of work.

Never write "eight times faster" or "in one eighth of the time". **Nothing was compressed** — a different and much smaller deliverable was produced, deliberately. Collapsing that destroys the argument the engagement is worth writing up for.

**T14 is the weakest outcome-adjacent fact in this document.** Required framing:

> Topera's team was pleased with the concept design and took it to show stakeholders. No stakeholder response, decision, commitment or funding event is known to Creative Navy, and none is claimed.

Never convert it into traction, validation, approval, interest, momentum, a funding round, a commissioning decision, or evidence that anyone beyond the client received it well.

**T21 must not be reproduced with its numbers.** The four roles are Creative Navy's reasoned constructs derived from the standards; the numeric targets attached to them are specification targets. If the roles are mentioned at all, describe them as roles the architecture was designed to serve — never as personas built from research.

**T70 is a coverage check, not a conformance claim.** It shows all fourteen *Mindeststandard* processes appear in the architecture. It does not show the processes were well designed, that coverage is adequate for a build, or that any assessment took place. **Creative Navy certified to no standard, audited against none, and worked to none** — "grounded in DIN 69901" is accurate; "DIN 69901 compliant" is not Creative Navy's to say, and would be a claim about a system that does not exist.

**T31 is neutral framing only.** The supersession of DIN 69901-4 is a fact about the standard. It is not evidence that the engagement used a superseded document, and must never be written as a criticism of the client. The client supplied the then-current edition, whose data model the Technical Specification carried forward unchanged.

**Topera engagement facts** (T1, T3–T13) may be stated plainly but are not outcomes. "Twenty-four unique screens were delivered" is a fact; "twenty-four screens in three sprints" invites the compression reading above and must not be written.

**G19 — the Egma heatmap — is real and is still not a measurement.** It is genuine tool output and the three regions it identifies are a real finding. **The instrument and the surface it ran on are not on record.** A heatmap tool reporting hesitation is a behavioural tool — predictive attention tools model where a viewer is likely to look and do not produce hesitation data — so it may be treated as reflecting real behaviour. What cannot be established is the instrument, the sample, the conditions, or whether the surface was a prototype or the live platform. Required wording:

> A heatmap produced during the engagement identified three regions of the order form where users hesitated: the end of the left-hand column, the two primary actions at the bottom right, and the right-hand technology area, which users passed over. The finding is tool-generated and reflects real behaviour; the capture method is not on record, so it is reported as an observation rather than a measurement.

**The second sentence is not optional** — dropping it converts an honest observation into an implied study. Not eye-tracking. No participant number, no duration, no rate, no failure count, no baseline. And **it must not be used as post-launch evidence**, because nothing establishes it was captured after launch. **Route it to `what-is-observed-but-not-quantified`, never to `what-we-have-measured`.**

**G13 — Egma's research — is the largest programme in this set and must be described as what it was.** Seventeen optometrists across four rounds: structured interviews, semi-structured interviews, and two wireframe-feedback sessions. **It was not usability testing, not contextual inquiry and not observation in stores.** No finding from it carries a number, and no participant number attaches to an individual round. The programme's *structure* is an engagement fact; its *findings* are qualitative.

**G72 — the CEO's assessment — is about the engagement, not the product.** Required framing:

> At the close of the engagement Egma's CEO described Creative Navy's timeline management as better than that of any third party the company had worked with, and said that Creative Navy always had reasoning behind what it proposed. This is client-reported and unquantified: it is an assessment of the engagement, given before the platform was in use, and it is not a measure of the platform's performance.

Never convert it into a satisfaction score or a renewal statistic. **G77, the return engagement, is a separate fact and must not be presented as a consequence of the praise.**

**G74 — the procurement account — publishes the reasoning and withholds the specifics.** Required framing:

> Egma's CEO has described evaluating the field on quality of work and project references before price, against his own team's instinct to go on price, and said afterwards that he judged the approach vindicated. This is client-reported and concerns how the engagement was bought, not what the design achieved.

Do not state or imply Creative Navy's price position relative to other bidders, do not reproduce the internal disagreement in detail, and do not mention the money-back offer. Never place it near a statement about the platform.

**G20–G25 are five stakeholder accounts, not a measurement.** Attribute each to its function. **G20's revenue framing is the CEO's diagnosis of his own business** — "Egma's CEO reported that…", never "the configurator was costing Egma revenue". G22's belief about undiscovered premium options is a belief. The design *intention* to improve discovery of premium options is an intention, and neither may appear in an outcome register.

**G71 — no competitor was benchmarked in the Egma engagement.** The client's kickoff answer was four words and nothing was tested against it. Say so where a page would otherwise imply benchmarking, and keep the competitive material in §7.8 as desk research. **This is the clearest contrast with AIT** — ten products against fifteen features — and the honest move is to state the difference rather than blur it.

**Egma authorship — four decisions are the client's and the pages must say so.** Egma's revision document (G18) specified the Fitting & Edging resequencing with its own functional reasoning (G63), the Order Reference rename (G62), the store-login and operator-code model (G52), and proposed the order-tracking disclosure model (G49) while explicitly deferring the answer. **Do not write these as Creative Navy's decisions.** Equally, do not over-correct: the hover-tooltip component was Creative Navy's and Egma asked for it to be generalised (G45); the campaign module was handed over outright (G60); and the delivered status grouping departs from what Egma proposed (G49). Where authorship is genuinely joint, describe the decision and its reasoning without assigning it.

**Egma engagement facts** (G1–G12) may be stated plainly and are not outcomes. On G3, 231 counts screen *variants* — distinct states — not unique screens; if that distinction cannot be made clear in a sentence, state 43 screens alone.

**O8, O8a and O9 — Oceaneering's production, fidelity and feedback — require this wording or close to it:**

> The dispatch panel interface Creative Navy designed is in production, and Oceaneering confirms it shipped as the design that was delivered. Oceaneering reports that the feedback it has received has been good. The fidelity statement and the feedback are both client-reported: Creative Navy did not independently compare the shipped build against the delivered files, no figures were shared, and neither has been independently verified.

**O8a is weaker than A13 and the difference is load-bearing.** AIT's fidelity claim is a Creative Navy verification — the shipped interface was compared against the delivered files. Oceaneering's is the client's statement. **Never write them at the same weight, and never let O8a drift into `what-we-have-measured`** (§5.4, §8). And as with A13: shipped-as-designed is evidence that the design survived development, not that the design is good.

**O17 and O8a must appear together, and O17 must not be softened by O8a.** A reference site's logistics manager rejected the flow length for his operation; the product shipped as designed at the deployment target. Both are true and they are not in conflict: that site was consulted as a reference, not as the deployment. **Do not write that the objection was answered, overruled or proved wrong.** Write that it was recorded, that it concerned that site's tempo and hardware, and that the design shipped elsewhere as delivered.

**O13–O17 — the Oceaneering validation sessions — require all of the following, together:**

> Creative Navy presented the designs to one hospital's logistics manager and two supply-chain supervisors, and separately to a second hospital's AGV planning manager. These were design reviews, not usability tests: no task was attempted and nothing was measured. No dispatch operator took part in either session.

**On O16 the supportable claim is this and no more:** that two operations leads at two different hospitals, consulted separately, independently asked for whole-card colour over corner indicators and independently endorsed the flashing-versus-steady state model. **A convergence of expert judgement from the operations side. Not a measured result, not validation of the design as a whole, and not evidence that the interface performs better than its predecessor.**

**O18 and O19 describe the system the panel belongs to.** Present neither throughput figure as anything Creative Navy affected, and do not reconcile them.

**O31 — do not disparage the predecessor.** It was a documented, reasoned design. The argument is that a reasoned design accumulated incoherence across a decade and two installations.

**O63 — do not claim the flashing/steady convention as an invention.** It existed in part; the contribution is generalisation, a stated rule and the non-colour channels.

**Every Oceaneering passage is reported speech, never quoted** (§1.8). This is a calibration rule, not a style preference: an unverified transcription inside quotation marks would misattribute words to a named client's customers.

### Never claimed, from any of the eight

- Any production, efficiency, error-rate, time-saving, throughput or commercial figure.
- Any sales, revenue, unit, growth or market-share number.
- Any safety outcome. Regulatory constraints shaped the Streetec design; no safety result was measured.
- Any claim that Streetec's testing validated the product in use over time — it tested comprehension of a finished design in a parked car.
- Field research, personas or contextual inquiry for Streetec or AIT. Neither had any.
- Any usability or comprehension result from AIT. Nothing was tested.
- Any regulatory credential from AIT. Its product is subject to several regimes; Creative Navy certified to, audited against and worked to none of them.
- Any safety claim from AIT. That controller governs comfort and efficiency.
- Any fuel, emissions, voyage, cargo-loss, container-loss or alarm-response figure from the MDU.
- Any safety outcome or safety-critical credential from the MDU. The manufacturer states plainly that the system is deliberately non-actuating and that its alarms are comfort, cargo and crew-safety alarms rather than immediate-danger alarms (M24).
- Any regulatory or type-approval credential from the MDU, for the interface or for the panel it runs on.
- Any usability, comprehension, field-research or persona claim from the MDU. Nothing was tested and nothing was observed (M27, M28).
- Any claim that Creative Navy designed parametric roll detection or structural monitoring (M26).
- Any time-saving, error-rate, training, adoption, revenue or funding figure from Assemblio — **including Assemblio's own published marketing claims** about what their product achieves. Those are the client's claims about their software, not outcomes of the design work, and borrowing them would be the single most damaging error available.
- Any usability, comprehension, field-research, persona or shop-floor observation claim from Assemblio (N13, N14, N16).
- Any UX audit, expert review or heuristic evaluation from Assemblio (N15).
- Any regulatory credential from Assemblio. The standards in §7.6 describe the category the product's *output* enters; Creative Navy certified to none, audited against none, and worked to none.
- Any safety claim from Assemblio. Incorrect assembly has real consequences; that engagement produced no safety analysis and no safety case.
- Any AI claim from Assemblio. That company markets AI capabilities; this engagement designed none of their behaviour. **Assemblio must never be filed or framed as AI work.**
- Any outcome whatsoever from Topera — performance, efficiency, time-saving, adoption, revenue, funding or commercial result. **Nothing was built** (T20), so nothing exists to have produced one.
- Any implication that Topera exists as a working system, is in development, is in pilot, or has users.
- Any research finding, user insight, usability result or observed behaviour from Topera (T15, T16).
- Any UX audit, expert review or heuristic evaluation from Topera (T17) — and note this is the opposite of the Assemblio trap: there, audit-shaped material exists and was the client's; here there was **no existing product to review at all**.
- Any client decision, preference, selection or rejection from Topera (T19).
- Any competitor benchmarking from Topera (T18). The competitive material in §7.7 is desk research for this document.
- Any standards conformance, certification or compliance credential from Topera (T70).
- Any design-system claim from Topera in the Organizational Integration sense (T20). A style guide was delivered; reasoning documentation, development-ready specification and handover were not.
- Sunlight-readable display engineering or night-vision compatibility from any of the eight. **The MDU establishes night *operation* only** — see §6.5. **On gloves the position has changed:** Assemblio establishes that workers wear gloves (N31) and nothing more, while **Oceaneering establishes gloved use alongside specified touch targets (O23, O86)** — see §6.7. Neither tested with gloves.
- Any post-launch measurement from Egma. **The platform is online (G11) and nothing about it was measured** — no support-ticket volume, no order-completion rate, no error rate, no average-order-value movement, no adoption figure, no time on task. This is the most likely invented outcome in this document, because the before-state is described in commercial terms (G20, G22) and a reader will expect an after.
- Any revenue, order-value, conversion or sales outcome from Egma. G20 and G22 are problem statements; improving discovery of premium options was a design intention.
- Any claim that Egma's support tickets fell. G24 establishes the problem; nothing establishes the result.
- Any usability-testing result from Egma. The wireframe sessions tested wireframes during design (G13); the live platform was never tested.
- Any competitor benchmarking from Egma (G71).
- Any regulatory or standards credential from Egma. Spectacle lenses are regulated products and Egma is a manufacturer; **no regulatory requirement shaped this interface** and Creative Navy certified to, audited against and worked to nothing.
- **Capability democratisation or scaling-without-training-dependency from Egma.** The platform was designed *for* an expert population at the client's explicit insistence (G65). The burden that fell was the **support team's**, not the users' — a different argument, and conflating the two would invert what the engagement actually shows.
- Any of Egma's or its suppliers' product claims — lens performance, glare blocked, darkening percentages, coating properties. Those are the client's claims about their lenses.
- Any material at all from Egma's follow-up engagement except G73 (G76).
- Any efficiency, throughput, error-rate, time-saving, training-time or dispatch-volume outcome from Oceaneering. **Nothing was measured** (O95).
- Any usability, comprehension, field-research, persona, contextual-inquiry or observation claim from Oceaneering (O95, O96, O97). **No operator was interviewed and no depot was visited.**
- Any claim that the Oceaneering design was validated by operators, or tested. O13–O17 were design reviews.
- Any safety credential from Oceaneering. The dispatch panel is an operator terminal on a transport-order system; **ISO 3691-4:2023 and ANSI/ITSDF B56.5-2024 govern the vehicles, not this interface**, and Creative Navy certified to and audited against neither.
- Any infection-control or healthcare-regulatory credential from Oceaneering. The clean/soiled interlock implements a rule the client specified (§3.56); the underlying requirement comes from healthcare facility design guidance that Creative Navy did not interpret or certify against.
- **Any medical-device claim from Oceaneering.** Hospital logistics infrastructure: no clinical workflow, no patient-facing function, no medical-device regulation, no IEC 62366-1 process. **This is the single most likely misreading of the engagement**, because the study files under `/evidence/case-studies/medical` — see §6.10.
- Any alarm-management credential from Oceaneering. ISA-18.2 and IEC 62682 frame the annunciation argument; no rationalisation process was run.
- Any competitive claim from Oceaneering stated as fact. O37 is the client's own account and is unverified (O99).
- **Any verbatim quotation from Oceaneering** (§1.8).

---

---

### Calibration — KISPE

## A4. Evidence calibration — mandatory

**K1–K25 are engagement record and may be stated plainly, but they are not outcomes.** "47 screens were delivered" is a fact; "47 screens transformed the product" is not. The same applies to the 103 components, the 61 rules, the 40 edge cases and the 25 decisions. They describe the work, not its effect.

**K8 — the board greenlight — is the strongest outcome-adjacent fact in this engagement, and it is a client decision, not a validation.** Required framing:

> The exploration phase ended at a board review. Creative Navy put twelve working decisions and a recommended development sequence to KISPE's board, with a recommendation to proceed conditionally. The board endorsed the architecture as the working direction, approved a staged scope with explicit decision gates for the uncertain features, and authorised the seven-sprint UX development phase.

Three things must not be attached to it. **It is not user validation** — a board endorsing a direction and a representative user confirming it are different kinds of evidence, and this engagement has only the first. **It is not an outcome** — it is a commissioning decision. And **do not describe the decisions as approved requirements**: the register's own language is that endorsement authorises detailed design against a direction while retaining the right to modify or reject individual solutions after operational and technical validation.

**The commercial arc is real and may be stated.** A four-sprint consultative exploration converted into a twelve-sprint design programme, at a board gate the exploration phase was explicitly designed to reach. That progression is itself evidence of what the exploration produced, and it should be stated plainly in the same terms the industrial engagement's land-and-expand arc is.

**K25 — "the product was built" — has a hard ceiling, and this is the most important calibration rule in this document.** Required framing:

> The product was built. Creative Navy did not support the build and has not compared the built interface against the delivered designs.

Never write "shipped as designed", "ships as the design that was delivered", or any phrasing that implies a verified design-fidelity comparison. **AIT, the MDU and Assemblio each carry exactly such a comparison and it is Creative Navy-verified in all three cases. This engagement does not have one.** The three prohibitions that attach to those claims attach here with more force: nothing about the built product's performance, reception, adoption or commercial result; no causal claim; and no implication that being built is evidence the design is good.

**K26 must appear in the case study, not be quietly omitted.** This engagement contains no user research and no usability testing. The honest statement is that the design was reasoned from the client's own concept material and partner brief, benchmarking of three competing systems, published domain and standards material, and structured expert analysis against a deliberately adversarial scenario — and that it was not validated with field commanders, operations staff or specialist support personnel at any point. Omitting this would misrepresent the engagement and break the corpus's own evidence standards.

**This is now the fourth engagement in the corpus with that property** — AIT, the MDU, Assemblio and KISPE. `corpus-integration-brief.md` already records that the first three "are now a visible pattern in the corpus and the evidence-standards pages should say so". A fourth makes that overdue rather than optional. See Part B.

**K27 must be stated wherever the field interface is discussed.** The field presentation is a design proposal whose touch dimensions, legibility and glove behaviour require evaluation on real devices, and that evaluation did not happen. Describe what was designed and why; never imply the field interface was proven in field conditions.

**K7 is a count without content.** Three competing systems were benchmarked and may not be named. Do not describe what they did, do not characterise the competitive field, and do not infer a competitive vector from the benchmark. If a competitive argument is wanted, build it from K43–K94 — what this product does that the category does not — not from the benchmark.

**K29 governs every count in the study.** The option-space evidence is K5 and K12 and nothing else. Do not estimate a variant count for the 47 screens, and do not let Streetec's nine main-screen iterations, the MDU's counts or Assemblio's three navigation architectures migrate here.

**K41 is a synthetic scenario and must be described as one.** The imagery records, device readings, coverage notices and advisories are a designed test fixture, not observations. They never represent a real location, operation, satellite or advisory. Describing them as a method decision (K40) is correct and is one of the stronger things in the study; describing them as data is false.

**K37 is a product boundary and must be stated as a design decision, not as a disclaimer.** The product does not infer adversary presence or recommend action because that boundary was argued, decided, recorded with an owner, and enforced by a behavioural rule — not because the engagement ran out of time.

**The external research in §A8 frames the category, not this product.** No standard named there was certified to, audited against or worked to; no study cited there measured this product. Any phrasing implying otherwise is false.

### What must not be claimed

- Any operational, mission, decision-quality, time-saving, error-rate or workload figure. Nothing was measured.
- Any usability or comprehension result. Nothing was tested with users.
- Any field research, persona research, operator interview or contextual inquiry.
- Any deployment, operational use, or use by military or government personnel.
- Any security, classification or accreditation credential. Caching, export and handling policy were identified as open questions owed by a security owner; Creative Navy did not set, audit or certify to any of them.
- Any claim that the design was validated on representative hardware, or in field lighting, glove or movement conditions.
- Any characterisation of the three benchmarked systems, or of the competitive field derived from them.
- Any suggestion that the product performs adversary detection, classification, tracking or targeting — this is precisely what K37 excludes, and asserting it would both be false and misrepresent the engagement.
- Any shipped-as-designed or design-fidelity claim (see K30).

---

---

### Calibration — Schone

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

---

### Calibration — maritime VTS

## A4. Evidence calibration — mandatory

The repository's evidence standards require every claim to be attributed to its basis. This engagement's evidence is unusually strong, which makes the ceilings unusually important.

### The comparative study is the strongest measured result in the corpus, and the easiest to break

**What may be said.** In a counterbalanced paired study with eight professional VTS operators and supervisors, each completing four matched tasks in both the existing interface and the redesigned prototype, median time to first answer fell by 42.3% on vessel identification, 34.2% on alert prioritisation and 32.2% on handover retrieval; correct first answers rose from 23 of 32 to 32 of 32; and correct recognition of historical replay rose from 5 of 8 to 8 of 8.

**What must travel with it, every time, without exception.**

> This result is Creative Navy-measured under controlled conditions. Eight participants completed four of the seven operator journeys using sanitised training scenarios on a design prototype, not a production installation. Six of the eight had taken part in earlier research or testing. The time measure is time to a first submitted answer regardless of whether that answer was correct, not time to successful completion. The study reports no significance test, no confidence interval and no power calculation, and states that the three percentages must not be combined into one figure.

**Five specific prohibitions.**

- **Never average the three percentages, and never write a combined headline number.** The study forbids it in its own text, because the three scenarios have different baselines, decision demands and outcome semantics. A writer who produces "roughly 36% faster" has contradicted the source.
- **Never write "eliminated operator error" or any equivalent.** 32 of 32 comes from scripted tasks and eight participants. The study says so explicitly. Write *all eight participants answered all four prototype scenarios correctly in the prescribed exercise* and stop.
- **Never describe the eight as independently recruited.** Six had prior programme exposure. The study discloses this as a named threat, and the disclosure is part of what makes the number credible.
- **Never convert faster into better in one clause.** Timing and correctness were scored separately and a fast wrong answer was possible. Any claim about interpretation quality must carry the correctness figures, not the times.
- **Never attach an operational consequence.** An incorrect legacy first answer does not prove that the existing software caused a real operational error. The study states this. Nothing here measures incident prevention, traffic safety, production reliability, real shift performance, cognitive workload or throughput.

### Field research may be claimed, and claimed precisely

Observation happened in **operational VTS control rooms at a customer site** (W31), with **the client's end customers' operators** (W30), and that is a stronger research basis than KISPE, AIT or Raymarine can claim. **But the research material was sanitised throughout** (W32) and no participant carried live traffic responsibility during a session. Write both halves. "Creative Navy observed operators in working control rooms, using sanitised scenarios rather than live traffic" is accurate and is the strongest honest version.

**Do not locate the control rooms** (§A1.5).

### Production is not fidelity, and fidelity is not quality

**The design system reached production** (W95). That is a fact and may be stated.

It is **not** evidence that the implementation matched the designs — no comparison was made (W98) — and it is **not** evidence that any operational, commercial or training benefit followed. **"Shipped as designed" is AIT's claim and must not appear here.** If §A10 item 3 ever produces a fidelity comparison, this becomes the strongest fact in the engagement and the opening changes.

### Implementation Partnership: name the shape, refuse the weight

**The phase happened and its division of labour is known** — the client wrote the code, Creative Navy supplied standard implementation support (W96). Write exactly that. **State no duration, no form, no frequency, no meeting count and no ticket count**, and never borrow another engagement's. Until §A10 item 1 is answered, the method pages must not claim this engagement as an instance at any particular depth.

### The safety flags are flags

Six at discovery, four carried into Phase 2 (W18, W36). The documents are emphatic and the case study must be too: **a flag denotes a need for domain scrutiny by the client's product and operational safety authority.** It is not a hazard classification, not an accident severity grade, not evidence that an incident occurred, and not closed by a design that tests well. **A design solution is not a hazard closeout** — the words are the source's and the position should be the case study's.

### The counting discipline is itself worth writing about, and must be honoured

The register held at **36 unique issues** from the end of research to handover (W34). Thirteen formative observations and eight comparative observations mapped back into it and never inflated it. Seventy transfer applications are usage proposals, not components and not shipping code (W76). The 110 specialist component states are a subset of the 198, not an addition (W65). **A writer who adds any two of these numbers together has produced a false claim**, and the sources go out of their way to say so at every juncture. The discipline is quotable in substance; the arithmetic is not negotiable.

### What must not be claimed

- Any production, efficiency, error-rate, time-saving, throughput, training, support or commercial outcome in the deployed products. None exists (W104).
- Any tender, sales, demonstration or procurement result. The client's own commercial director recorded that no measurement connected visual change to tender wins (W20).
- Any engineering-effort or duplicated-development saving. The measurement framework was built and never reported back on (W91).
- Any implication that nine products were redesigned. One was. Four received bounded transfer probes; two received applicability reviews; two more were audited only (W101).
- Any safety, certification, conformity or regulatory credential, in any formulation (W103).
- Any claim that a design decision prevented an incident, a collision or a near miss.
- Any claim about live radio, radar, AIS, lock machinery or vessel traffic behaviour (W100).
- Any competitive comparison or market-position claim (W99).
- Any description of the spinoff product beyond the fact of a return engagement (W97, §A10 item 2).
- Any statistical language — significance, confidence, effect size, power. The study has none and says so (W90).

---

---

### Calibration — handheld C2

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

---

## 1.4 Style and lexicon additions, engagement by engagement

**Recorded with each engagement's integration. They sharpen §1.1 and never replace it.**

### KISPE

- **Sprint = cadence. KISPE ran sixteen one-week sprints in three project phases — four exploration, seven UX development, five UI delivery.** "Sixteen one-week sprints" is correct.
- **On any page carrying KISPE, "phase" has three senses and they must be kept apart explicitly.** Creative Navy's method phases; **the project's own three phases** (exploration, UX development, UI delivery), which are a delivery structure and nothing to do with the method; and sprints, which are never phases. **Always qualify: "the exploration phase of the project", "the five UI delivery sprints".** Never a bare "phase" where a reader could take it for one of the five. This is the same class of collision as Topera's DIN 69901-2 phases, and it needs the same discipline.
- **"KISPE Space" is the canonical entity name**, never rotated to "the client", "the company" or "the vendor" as the primary identifier in a chunk that must stand alone.
- **No quotation marks and no reported speech on any page carrying KISPE** (§1.11).
- **Keep two senses of "source" apart.** A *source* of information — a provider, a receiver, a feed — and a *source* in the research sense. KISPE's material is dense with the first and has none of the second.
- **Standards dates are permitted on pages carrying KISPE; engagement dates are not.** The same test the visioncheckout regime uses: if the date locates the law or the standard, it stays; if it locates the engagement, it goes. **KISPE adds a third case and it is unusual** — the engagement's demonstration scenario carries calendar dates on every record. **Those are discarded and their intervals kept** (K41). "A fix seventy seconds old against a sixty-second policy" is the design argument; the date it carried is not.

---

### Schone

- **Sprint = cadence. Schone ran sixteen one-week sprints in three project phases — four exploration, seven UX development, five UI delivery.** "Sixteen one-week sprints" is correct.
- **On any page carrying Schone, "phase" has the same three senses as on KISPE pages and needs the same discipline.** Creative Navy's method phases; the project's own three phases, which are a delivery structure and nothing to do with the method; and sprints, which are never phases. **Always qualify: "the exploration phase of the project", "the five UI delivery sprints".**
- **"Schone Airspace Group" is the canonical entity name**, never rotated as the primary identifier in a standalone chunk.
- **No quotation marks and no reported speech on any page carrying Schone** (§1.12).
- **Standards dates are permitted; engagement dates are not.** The visioncheckout test applies: if the date locates the law or the standard, it stays; if it locates the engagement, it goes. **Durations are not dates** — "across seven months" and "a twelve-month retainer" are permitted and load-bearing. **The demonstration scenario's wall-clock times are discarded and their intervals kept** (D70, D71): "an acknowledgement three seconds after the request, while the aircraft was still reporting its previous mode" is the design argument; the clock time it carried is not.
- **Never use the scenario's aircraft fixture labels in prose.** Write "the aircraft under command" and "the aircraft the operator was inspecting", or "the first aircraft" and "the second". The three-way distinction is hard enough to follow without alphanumeric labels, and the labels carry nothing a description does not.
- **Keep three senses of "command" apart, and this is specific to Schone.** A *command* the operator composes; a *command* as the protocol message that carries it; and *command* as authority over an aircraft. The engagement's central decision turns on their being different (D90–D92), so a page that slurs them undoes the thing it is describing.
- **Corpus-level cadence note, applying to both defence engagements.** Both produced design records full of the *X is not Y* construction — an acknowledgement is not an execution, an age label is not a confidence score, grey is not offline. It is accurate and it is the fastest route to two studies that sound identical. **Reserve it for the one place per page where it lands hardest, and state the distinctions positively elsewhere**: a transaction carries the aircraft it was dispatched against; a stale value keeps its age alongside it.

---

### Raymarine

- **Sprint = cadence. Raymarine ran eight one-week sprints in three project blocks — two exploration, three UX development, three UI delivery.** "Eight one-week sprints" is correct.
- **On any page carrying Raymarine, "phase" has the same three senses as on KISPE and Schone pages and needs the same discipline.** Creative Navy's method phases; the project's own three blocks, which are a delivery structure and nothing to do with the method; and sprints, which are never phases. **Always qualify: "the two exploration sprints", "the three UI delivery sprints".**
- **"Raymarine" is the canonical entity name**, never rotated as the primary identifier in a standalone chunk. **"Ray53", "Ray63" and "Ray73" are permitted; the new product's name is not** (§1.13).
- **No quotation marks and no reported speech on any page carrying Raymarine** (§1.13).
- **Standards dates are permitted; engagement dates are not.** The visioncheckout test applies: if the date locates the law or the standard, it stays; if it locates the engagement, it goes. **Durations are not dates** — "eight one-week sprints", "five working days" are permitted. **One addition specific to this engagement: every source document carries a date stamp and the stamps are internally impossible**, an eight-week programme whose exploration report and whose six-sprint completion report fall one day apart. **They are discarded rather than reconciled.** Do not attempt a chronology and do not gesture at one.
- **Keep three senses of "channel" apart, and this is specific to Raymarine.** The **selected voice channel**, which is what the operator transmits on. The **working channel**, which is the channel proposed inside a digital call for the conversation that may follow it. And the **monitored channel**, which is the frequency a scan or watch mode is currently sampling while the selected channel remains unchanged. **The engagement's decisions turn on these being three different things** (R112, R121, R123), so a page that slurs them undoes the thing it is describing.
- **Never use the traffic fixture's vessel names or the masked registered identity in prose** (§1.13). The fixture is a designed test condition and must be described as one wherever it is described at all (R58).
- **Corpus-level cadence note, now applying to three engagements.** KISPE, Schone and Raymarine all produced design records saturated with the *X is not Y* construction — sent is not acknowledged, a local record is not an external alert, no targets is not no reception, a screen is not a state. **It is accurate, and it is the fastest route to three studies that sound identical.** The Schone addendum already constrains it. **Raymarine must be constrained harder, because its source material carries more instances than either of the others.** Reserve it for the one place per page where it lands hardest, and state the distinctions positively elsewhere: a transaction reports the stage it has actually reached; a stale value carries its age beside it; the interface shows the power the radio is actually using.

---

### maritime VTS

- **Sprint = cadence. This engagement ran seventeen one-week sprints in two blocks separated by a formal management gate — three discovery sprints, then fourteen delivery sprints.** "Seventeen one-week sprints" is correct; so is "three discovery sprints" and "fourteen delivery sprints".
- **On any page carrying this engagement, "phase" has three senses and needs the same discipline as KISPE, Schone and Raymarine.** Creative Navy's five method phases; the project's own two blocks, which are a delivery structure and nothing to do with the method; and sprints, which are never phases. **Always qualify.** The source documents compound the risk by calling the two blocks "Phase 1" and "Phase 2" throughout — **those labels must not be reproduced on any page.**
- **The locked client descriptor is the canonical entity name** and does not rotate as the primary identifier in a standalone chunk (§1.14). **"VTS", "RIS", "VCS" and "ICS" are permitted; the six RIS module names as an inventory are not.**
- **No quotation marks and no reported speech on any page carrying this engagement** (§1.14).
- **Standards dates are permitted; engagement dates are not.** The visioncheckout test applies: if the date locates the law or the standard, it stays; if it locates the engagement, it goes. **One note specific to this engagement, and it is a pleasant one: the source set is already date-free by its own convention** — the comparative report states in its closing control line that it carries no calendar dates in the project chronology. Only week numbers appear, and those are durations.
- **Keep four pairs of terms apart, and this is specific to this engagement.** A **vessel** is an identity record; a **track** is a sensed object with its own source and last observation; an **observation** is a single datum with a source and a time. An **operational alert** concerns traffic; an **equipment fault** concerns the infrastructure that produces the traffic picture. **Acknowledge** registers receipt; **resolve** requires its own transition and actor. **Event time**, **observation time** and **receipt time** are three values that may differ. **The engagement's decisions turn on each of these being distinct** (W52, W54, W55, W68), so a page that slurs them undoes the thing it is describing.
- **Describe the validation fixtures as fixtures, always.** Forty-eight targets with three traffic alerts, one equipment fault and two advisories; two nearby radar plots beside an unresolved AIS association; seven open handover items (W69). **These are designed test conditions, not observations**, and must be described as such wherever they are described at all.
- **Corpus-level cadence note, now applying to four engagements and overdue for enforcement.** KISPE, Schone, Raymarine and this engagement all produced design records saturated with the *X is not Y* construction — sent is not acknowledged, a screen is not a state, acknowledged is not resolved, a track is not a vessel, replay is not live. **It is accurate, and it is the fastest route to four studies that sound identical.** The Schone addendum constrains it; the Raymarine addendum constrains it harder. **This one must be constrained hardest, because it is fourth and because its source material carries the most instances.** Reserve it for one place per page and state the distinctions positively elsewhere: the inspector names the association unresolved; a retained marker carries its age and its source; acknowledgement records that an authorised actor received the alert, and resolution requires its own transition.

---

### handheld C2

- **Sprint = cadence. This engagement ran fourteen one-week sprints in two blocks of seven** — the handheld, then the command centre — **preceded by a separately scoped expert review and followed by a separate four-sprint engagement.** "Fourteen one-week sprints" is correct; so are "the seven handheld sprints" and "the command-centre block".
- **On any page carrying this engagement, "phase" has three senses and needs the same discipline as KISPE, Schone, Raymarine and maritime VTS.** Creative Navy's five method phases; the project's two blocks, which are a delivery structure and nothing to do with the method; and sprints, which are never phases. **Always qualify.**
- **Four of the five method phases are claimable and Implementation Partnership is not** (§5.9). Say which, and say plainly that the fifth is absent — **this is the page-level guard against "built" being mistaken for build oversight.**
- **The locked client descriptor is the canonical entity name** and does not rotate as the primary identifier in a standalone chunk (§1.15).
- **No quotation marks and no reported speech on any page carrying this engagement** (§1.15).
- **Standards dates are permitted; engagement dates are not.** The visioncheckout test applies: if the date locates the law or the standard, it stays; if it locates the engagement, it goes. **This engagement's source set is dense with engagement dates** — every meeting note carries one and both delivery plans are stamped — and all of them go. Durations are not dates and several are load-bearing: one-week sprints, fourteen sprints, four sprints, a 300–600 millisecond hold, a one-second commitment.
- **The four tier labels T1 to T4 are permitted; no other identifier is.** The tiers are the sizing specification's own public vocabulary and the corpus uses them. **Function-key designations, push-button numbers, device codes and vehicle designations stay out.** Write what a control does, not what it is called — a reader must never encounter a code.
- **Keep five pairs of terms apart, and this is specific to this engagement.** A **requested** state is what the operator has asked for; a **confirmed** state is what the vehicle has reported. **Vehicle status** describes what the vehicle is doing; **mission segment** describes where the mission is; **health and alerts** describe what is wrong. **Armament state** is its own axis with five values and is not a mode. A **command state** is a transaction with seven values and is not a vehicle state. **Availability** of a control is not the same as **readiness** of the system. The engagement's decisions turn on each of these being distinct (H72–H75), so a page that slurs them undoes the thing it is describing.
- **Describe the sizing tiers as a specification and the personas as speculation, always.** The tiers were authored, not validated (§4). The personas were labelled speculative by their own authors (H14). **Both must be described as what they are wherever they are described at all.**
- **Corpus-level cadence note, now applying to five engagements, and this one must be constrained hardest.** KISPE, Schone, Raymarine, maritime VTS and this engagement all produced design records saturated with the *X is not Y* construction — unknown is not hostile, acknowledged is not executed, sent is not acknowledged, a track is not a vessel, repeated input is not feedback, built is not shipped as designed. **It is accurate, and it is the fastest route to five studies that sound like one author with one trick.** The Schone addendum constrains it, Raymarine's constrains it harder, maritime VTS's hardest so far. **This one is fifth and its source material carries the most instances of any.** Reserve it for **one place per page** and state the distinctions positively elsewhere: a status reports what the system has confirmed; the menu offers every action because the system cannot tell which apply; the specification applies the full standard where a missed tap cannot be recovered.

---

### visioncheckout

- **Sprint = cadence. visioncheckout ran seven one-week sprints — four UX, then three UI.** "Seven one-week sprints" is correct; "the UX phase" is not.
- **"visioncheckout" is the canonical entity name**, lowercase, never rotated to "the client", "the vendor" or "the company" as the primary identifier in a chunk that must stand alone.
- **On any page carrying visioncheckout, keep two senses of "recognition" apart**: the model recognising an item on a tray, and a guest recognising what the screen is telling them. Both appear in this engagement and an unqualified use reads ambiguously.
- **Regulatory dates are permitted on pages carrying visioncheckout** — 28 June 2025 for the EAA and BFSG, the 2040 grandfathering horizon, the EN 301 549 version position. The no-dates rule governs engagement dates. **The test is whether the date locates the engagement; if it locates the law, it stays.**

---

---

---

## 1.6 Contamination rules — what must never be merged, migrate or be compared

**These are cross-engagement rules. They exist because the risks they name are live: several have already produced an error in drafting.**

### KISPE

Add four contamination rules. All four are live risks rather than theoretical ones.

- **KISPE must not be drawn into the AI cluster, and the pull is strong enough that it has already caused four tagging errors in drafting.** KISPE's vocabulary — uncertainty, confidence, provenance, trust, unknown states, stale evidence — is the vocabulary the corpus has so far used *only* for AI products. **KISPE has no model, makes no recommendations and performs no inference.** Its uncertainty is a property of *sources*: where information came from, how old it is, whether it was delivered, whether the user may see it. A model's uncertainty is a property of its own probability distribution. These are different things that share a word. **No KISPE evidence may appear on any `/situations/ai-and-automation/` page, on `capabilities--behavioural-governance-for-ai-products.md`, on `capabilities--human-ai-interaction-design.md`, on `practices--trust-and-oversight-analysis-for-ai.md`, on `glossary--industry-terms--trust-calibration.md`, or on `failures--interpretation--uncertainty-is-not-communicated-usefully.md`** — the last of which states in its own text that it "concerns AI-specific uncertainty". §6.13 is the answer to where the material goes instead.

- **KISPE and WCO/IPM must not contaminate each other.** Both are government-adjacent systems serving multiple roles. They share no facts and almost no problem. **WCO/IPM's challenge is adoption density across 100+ administrations with variable connectivity and mixed device fleets; KISPE's is the separability of unlike evidence.** WCO has usage figures; KISPE has none at all. Never let WCO's adoption numbers lend weight to KISPE, and **never file KISPE under `/evidence/case-studies/government`** — see §6.1.

- **KISPE and the industrial engagement must not contaminate each other on degraded states**, and this is the highest-risk pairing in the addendum because both will land on `capabilities--design-for-abnormal-and-degraded-scenarios.md`. The industrial engagement's degraded-mode material comes from **observing a running system in a machining cell**. KISPE's is **specified against a synthetic fixture and was never executed** (K41, K99). Never blend them in a sentence, and never let the industrial engagement's field observation lend weight to KISPE's specification.

- **KISPE must never acquire a research or validation claim, and the trap here is the vocabulary itself.** Forty edge cases, five verification suites, eight regression checks and nine acceptance scenarios *read* like completed testing. **They are specifications of tests, explicitly recorded as not executed** (K99). Never let "verification", "acceptance" or "regression" attach to a completed-testing reading. This is the Streetec/Egma and visioncheckout/Streetec rule applied to a harder case: those engagements risk a number drifting, this one risks a whole vocabulary being read in the wrong tense.

---

### Schone

Add six contamination rules. All six are live risks rather than theoretical ones.

- **Schone must never acquire a flight-safety, airworthiness or certification credential, and the pull here is stronger than any comparable rule in the parent file.** The writing brief's §A8.1 argues that a ground control station and its command link sit *inside* the airworthiness envelope — a claim about how the **category** is regulated, used to explain why this class of interface work is a different discipline. It is one short step from there to a sentence implying Creative Navy worked to, designed against, or contributed to an airworthiness case. **It did none of those.** The engagement's own scope statement excludes formal flight safety certification, and Creative Navy designed a control station interface, not an airworthiness argument. On every page where the airworthiness framing appears, the sentence that follows it must make the separation explicit.

- **Schone's research must never be read as field research, and the corpus contains four engagements whose authority it could borrow.** Nine operators, interviews and design walkthroughs, conducted at the end of UX development (D31–D34). **No contextual observation of live flight operations, no field visits, no timed task studies** (D54). The corpus holds real field research — Stromer's eye tracking on real routes, the industrial engagement's in-situ observation in a machining cell, Squaremind's two-site ecological protocol, the forecourt engagement's observed transaction rates. **Never let any of those lend weight to Schone, and never place Schone on a page whose subject is research conducted in operational conditions.** See §8.

- **Schone and KISPE must not contaminate each other on degraded states**, and this is the highest-risk pairing in the addendum because all three defence-adjacent degradation bodies will land on `capabilities--design-for-abnormal-and-degraded-scenarios.md`. The distinction is clean and must be kept: **the eight existing entries are equipment faults; KISPE's material is degradation of information availability; Schone's is degradation of the control channel** — the path by which an instruction travels becoming unreliable while the aircraft at the far end may be entirely healthy. Three classes, three sections, no blending in a sentence. And note the evidential asymmetry: **KISPE's degraded-state catalogue was specified and never executed; Schone's was evaluated against fixed criteria by five working remote pilots and its four open gates subsequently closed.** Never let Schone's evaluation lend weight to KISPE's specification.

- **Schone and AIT must not contaminate each other on design fidelity.** Both carry a Creative Navy-verified design-fidelity comparison, and the parent file's A13 framing is written for the lighter one. **AIT: three scheduled progress reviews and eight support tickets across five months. Schone: all 54 screens compared across seven months, with named deviations, alongside four closed integration gates.** Both must be described at their actual weight. The parent file's statement that AIT's is the fullest instance in the set is now false and must be corrected rather than left to age.

- **Schone's evaluation figures must not drift into outcome figures.** 14 pass / 18 fail / 4 pending, then 32 pass / 0 fail / 4 pending (D42, D44). These measure whether an interface stated the correct operational fact under a fixed scripted condition. **They are design-conformance results.** They are not task completion rates, not error rates, not satisfaction scores, and not measurements of anything that happened in flight. The parent file's measured-outcome entries are all performance or satisfaction figures, and a conformance figure sitting among them will be read as one. §6.16 is the answer to where this material goes.

- **Schone must not be drawn into the AI cluster.** The KISPE rule applies unchanged and for the same reason: the vocabulary — uncertainty, unknown states, confidence, stale evidence, trust — is vocabulary the corpus has used only for AI products. **Schone has no model, performs no inference and makes no recommendations.** Its unknowns are properties of a radio link, a protocol and a clock. Where KISPE's temptation is the provenance vocabulary, Schone's is sharper still: an interface that declines to assert a result and labels an outcome *unknown* reads exactly like an AI confidence treatment and is nothing of the kind.

---

### Raymarine

Add eight contamination rules. All eight are live risks rather than theoretical ones, and the last two are constraints no other engagement in the set carries.

- **Raymarine must never acquire a type-approval, certification, conformity or regulatory credential, and the pull here is the strongest in the set.** §7.13 argues from a standard that specifies screen behaviour directly. It is one short step from there to a sentence implying Creative Navy worked to it, designed against it or contributed to conformity. **It did none of those.** Radio protocol behaviour, regional channel plans, permitted transmit power, distress procedure, cancellation semantics, alarm audibility and final conformity remained Raymarine's throughout, and the engagement record states so repeatedly (R94). In this domain the word *compliance* determines whether a radio may lawfully be sold, so on every page where the standards framing appears, **the sentence that follows it must make the separation explicit.**

- **Raymarine's research must never be read as field research, and three of the four engagements whose authority it could borrow are also marine.** Twenty-four bench sessions on a manufacturer-built rig (R53, R90). **No sea trials, no helm, no glare, no gloves, no vibration, no motion, no ambient noise.** The corpus holds Torqeedo's twelve sea trials with fifteen captains, Cox Marine's scenario testing in a simulator environment, Stromer's eye tracking on real routes and the industrial engagement's in-situ observation in a machining cell. **Never let any of those lend weight to Raymarine, and never place Raymarine on a page whose subject is research conducted in operational conditions.** The risk is higher than for Schone because the filing category is shared with two of them. See §8.

- **Raymarine and the MDU must not contaminate each other on bridge alert management, and the convergence must be stated once.** Both converge on the four-priority maritime alert grammar; **both are outside its scope**, the MDU as an advisory instrument and this radio as non-convention recreational equipment. **Two independent arrivals at one convention by equipment the convention does not reach is a stronger observation than one, and it is also two chances to write it as conformance.** Write it once, for both, on the alarm-management page (§6.3) and once on the new context page (§6.18). Never as conformance, anywhere.

- **Raymarine must never acquire a safety, rescue, distress-response or collision outcome.** The supportable claim is that specific distinctions were made explicit and were checked against scripted conditions by operators on a bench. **The step from "the interface states the correct fact" to "the operator therefore acts correctly, and an incident is avoided" was not measured and must not be taken.** §7.13 includes an accident-mechanism frame and a search-and-rescue field record; both describe the category, neither describes this product.

- **Raymarine, KISPE and Schone must not contaminate each other on degraded states — and Raymarine does not get a new class.** All three will land on `capabilities--design-for-abnormal-and-degraded-scenarios.md`. The page's eight existing entries are equipment or process faults; KISPE adds degradation of information availability; Schone adds degradation of the control channel. **Raymarine sits across both of those rather than creating a fourth class, and resisting a fourth class is the correct call** — its distinctive contribution is not a new category but the enumeration: forty-three exception records across eight independently varying state axes, twenty-four verification scenarios, and a per-feature dependency map recording which functions survive which failure (R133, R134). Note the evidential asymmetry in both directions: **KISPE's catalogue was specified and never executed; Schone's was adjudicated by working remote pilots; Raymarine's was partly evaluated — the interruption, position, receiver and connectivity cases were put to operators, the other thirty-odd were not.** Never let one lend weight to another.

- **Raymarine must not be drawn into the AI cluster.** The KISPE and Schone rule applies unchanged and for the same reason: the vocabulary — uncertainty, staleness, provenance, confidence, trust — is vocabulary the corpus has used only for AI products. **This radio has no model, performs no inference and makes no recommendations.** Its unknowns are properties of a radio link, a protocol, a satellite fix and a clock. Its risk cues are threshold calculations on received positions, not predictions.

- **The proprietary term *performance in reality* is forbidden on any page carrying Raymarine, and this constraint exists for no other engagement in the set.** The term denotes designing and testing against the conditions a system actually operates in. **This engagement tested none of them** (R90). A page that applies the term here would be making precisely the claim the engagement cannot support, and a reader who knows the term would notice. **Where a page about this concept needs marine evidence, it has Torqeedo and Cox Marine. It does not have this.**

- **The proprietary term *competitive vector* is forbidden on any page carrying Raymarine, and no competitive argument may be built from it.** No competing product was evaluated (R91). The only reference products in the entire engagement record are Raymarine's own. Desk research on the category exists for the new context page's description of the market; **it may not appear in the case study or in any capability, situation or outcome page as a competitive claim.**

---

### maritime VTS

Add nine contamination rules. All nine are live risks rather than theoretical ones, and the last two have no precedent in the set.

- **This engagement must never be read as a nine-product redesign, and this is the single largest misreading risk in the addendum.** Nine products were **audited**. **One** was designed to full depth. Four received bounded transfer probes that produced representative annotated compositions, not workflows. Two received constraint and applicability reviews only (W101). The audit figures — 74 views, 23 workflows, 58 findings — are *audit coverage*, and a page that places them next to "28 templates and 91 states" without the distinction will read as though nine products were rebuilt. **On every page where both appear, the sentence that separates them is not optional.**

- **The design-system inventories of four engagements must never be merged, compared as like for like, or allowed to migrate.** KISPE delivered a 103-component library; Schone delivered 28 component families with 119 named variants across 54 screen states; Raymarine delivered 18 components across 23 screen families; this engagement delivered 54 components with 198 named states, eight composition patterns, two themes and two densities (W65). **Three near-twin numbers are actively dangerous: 54 here is components and 54 at Schone is screen states; 28 here is composition templates and 28 at Schone is component families.** They are different units from different clients. Never place two of these inventories in one sentence without naming the unit each time.

- **The measured comparison must never be aggregated, and the source forbids it in its own text.** Three timed tasks produced three median reductions — 42.3%, 34.2% and 32.2% (W85, W86, W88). **The report states that the scenarios have different baselines, decision demands and outcome semantics and that the percentages must not be combined into one figure.** A page that produces a single combined headline has contradicted the source document it is citing. **Each figure travels with its own task and its own correctness ratio, or it does not travel.**

- **"All eight participants answered all four prototype scenarios correctly" must never become "eliminated operator error", in any formulation.** 32 of 32 comes from four scripted tasks and eight participants on a design prototype (W89), and the source says so. The corpus has a standing weakness for perfect-score language; this is the first engagement to supply a perfect score, and the restraint has to be written in at the point of use, not added later.

- **This engagement's field research must never lend weight to Raymarine, KISPE or AIT — and the risk runs the opposite way from the usual one.** Observation happened with the client's end customers' operators in operational VTS control rooms (W30, W31). **Raymarine ran twenty-four bench sessions and no field research of any kind; KISPE ran no user research at all; AIT ran none either.** Two of those three are marine and share this engagement's filing category. **Never let this engagement's control-room observation appear on a page in a way that makes the adjacent marine entries look better evidenced than they are**, and never place it in a paragraph that also describes Raymarine's research without naming the difference.

- **This engagement must not acquire a safety, certification, conformity or regulatory credential, and the pull is strong because §7.14 argues from a standard that wanted exactly what the client wanted.** Six interface conditions were flagged for safety-domain review at discovery and four were carried forward (W18, W36). **A flag denotes a need for scrutiny by the client's product and operational safety authority. It is not a hazard classification, not an accident severity grade, not evidence that an incident occurred, and it is not closed by a design that tests well.** The source's own formulation — *a design solution is not a hazard closeout* — should be the corpus position. Sensor correlation, alarm thresholds, operational priority rules, radar and AIS accuracy, release approval and formal hazard analysis remained the client's throughout.

- **This engagement must not be drawn into the AI cluster.** The KISPE, Schone and Raymarine rule applies unchanged and for the same reason: the vocabulary — uncertainty, provenance, staleness, confidence, unresolved association — is vocabulary the corpus has used only for AI products. **This product has no model, performs no inference and makes no recommendations.** Its uncertainty is data provenance: which sensor reported what, and when. **The refused confidence score (W53) is the cleanest demonstration of the difference in the corpus** and should be used to make it, not to blur it.

- **The proprietary term *competitive vector* is forbidden on any page carrying this engagement.** No competing product was evaluated (W99). The client's brief named competitive pressure as a commercial driver, which is a motivation, not a benchmark. Desk knowledge of the vendor landscape may inform the marine context page's description of the market; **it may not appear as a competitive claim on any case-study, capability, situation or outcome page.**

- **The proprietary term *performance in reality* is permitted here with a stated qualification, and forbidden on Raymarine — the divergence is deliberate and must not be harmonised.** This engagement designed and tested against restricted networks, paired displays, day and night control-room conditions, dense traffic, stale feeds, interrupted sources and permission limits, and observed operators in working control rooms (W10, W31, W69). **Every test nonetheless used sanitised data in a training or prototype configuration, never a live traffic position**, and the qualification must appear in the same passage as the term. **Raymarine tested none of its named field conditions and the term is forbidden there.** Both engagements are marine, both file under `/evidence/case-studies/marine`, and both will appear on `glossary--performance-in-reality__2_.md` territory. **A later editor who notices the inconsistency and resolves it in either direction will break one of the two.** The inconsistency is the correct state.

---

### handheld C2

Add eight contamination rules. Two have no precedent in the set.

- **Two categories of source content are excluded absolutely, including by implication, and this has no precedent.** First, **any configuration in which the system engages without human confirmation.** The source material records one. It is a statement about the client's system rather than about Creative Navy's design, and it is the client's to disclose. Second, **the specific workflows the client identified as re-certification-dependent**; the *existence* of the constraint is usable and load-bearing (H107), the named workflows are a map of where the product is brittle. **Neither may appear on any page, in any note file, or in any sentence a reader could reconstruct them from.**

- **This engagement must not acquire a safety, certification, weapons-review or regulatory credential, and the pull here is stronger than anywhere else in the corpus** — because the lead angle is a design document that cites two safety standards, and because §7.15 argues from a report that treats interface usability as a condition of control. **Creative Navy designed an interface. It did not make the system safe, did not contribute to any legal review, and did not perform the validation its own recommendation called for** (H120). The document's own closing caveat is the corpus position and should be reproduced on any page carrying the refusal: the hold duration and the physical-control design require human-factors and system-safety testing, and the retry policy belongs to system safety rather than to design.

- **The three defence engagements must never be merged, and their external frames must never migrate.** KISPE's frame is military symbology distinguishing unknown from hostile. Schone's is that the control station sits inside the airworthiness envelope, with the protocol grading control while the screen had stopped. **This engagement's is that interface usability is one of three recognised modalities of control over this class of system** (§7.15). **STANAG 4586 and STANAG 4671 stay with Schone and must not appear on a page carrying this engagement.** MIL-STD-2525 appears here as vocabulary (H23), never as a frame — that is KISPE's.

- **The defence engagements' option-space figures must never be compared as like for like, and the ranking is now settled.** Schone recorded 45 concept alternatives in 85 low-fidelity frames; this engagement recorded **40 options across 11 design challenges** (H11); KISPE recorded 36 alternatives in 64 frames. **Schone first, this second, KISPE third.** The KISPE addendum's self-description as the second-best-evidenced instance in the corpus is wrong and **must be corrected to third in the same change set.** One discipline on top: this engagement counted options, not frames, so **its 40 must never be placed beside Schone's 85 without naming the unit each time.**

- **This engagement's benchmark must travel as two numbers or not at all.** 32 systems benchmarked, **21 of them analysed in depth** (H12). The figure is the largest in the corpus — KISPE has three, the industrial engagement four, Raymarine and Schone none — and it will be scrutinised. "Thirty-two systems benchmarked" alone invites the challenge that it was a list; "twenty-one analysed in depth" alone undersells it.

- **This engagement must not be drawn into the AI cluster, and the reason is narrower than for the previous three.** KISPE, Schone, Raymarine and maritime VTS are all excluded because their products have no model at all. **This product does** — object detection, confidence scoring and target suggestion exist in it, and the engagement touched them. **Creative Navy did not design the model behaviour, the trust calibration or the override semantics**; that material appears in the source set as competitor observations and as positions the client's team raised. On the available evidence the AI pages would be claiming work that was discussed rather than done. The behavioural-requirements material (H69–H79) belongs on `practices--behavioural-requirements-definition.md`, which is not AI-scoped. **Revisit only if the follow-on's data-enrichment sprints produced a confidence-scored surface** (§9 item 1).

- **This engagement has no primary field evidence and the prose in its own deliverables invites the opposite reading.** The expert review argues confidently about frontline cognitive conditions, and the operator behaviours it reports — coordinates written on paper, losing track of which dialog to open next, colour and icon meanings requiring active recall — **are the client's observations of the client's own users, relayed to Creative Navy** (H37). Creative Navy conducted no contextual observation, no field visits and no interviews (H111, H113). **Never let the review's atmosphere read as fieldwork**, and never place H37 in a paragraph that also describes maritime VTS's control-room observation without naming the difference.

- **The engineering ceilings in H103 are constraints the design worked within, not product-capability claims.** The client's engineers established three to four vehicles as the practical limit of operator cognitive load at the system's current autonomy level, and four to five simultaneous video feeds as realistic. **Use them as unattributed engineering constraints, never as claims about what the product can do, and never traced to a speaker** (H119).

---

### visioncheckout

Add three contamination rules. All three are live risks rather than theoretical ones.

- **visioncheckout and the Swiss petrol forecourt engagement will share a context page and look superficially alike.** Both are retail point-of-sale, both carry peak-load figures from field observation, both will sit on `contexts--retail-operations.md` and on `what-we-have-measured`. **They share no facts.** The forecourt's 84 transactions per hour comes from 40 hours of observation and 532 coded transactions across seven stations; visioncheckout's 11-to-25 seconds comes from five days, one researcher and 563 observed interactions across six locations. Different formats, different metrics, different researchers, different decades of retail technology. **Never blend them in a sentence**, and never let the forecourt's research depth lend weight to visioncheckout's, or the reverse.

- **visioncheckout and Streetec must not contaminate each other on validation, and the risk is high because both have a participant number attached to real people.** Streetec's 32 participants performed unassisted tasks on a finished product in a real car, and completion was measured. **visioncheckout's 34 interviewees were interviewed alongside observation of a system already in service, and nothing about the new designs was tested at all** (V46). Never let the word "testing" attach to visioncheckout's numbers, and never let Streetec's completion claim drift toward them. **The numeric coincidence makes this worse, not better: visioncheckout delivered 34 screens and interviewed 34 users.** Those are unrelated figures and must never appear in the same sentence undisambiguated.

- **visioncheckout and the AI-cluster engagements describe different kinds of AI product.** Callsign, Owkin/K, Hudex, Puraite, Typewise and Veecle are all systems where an expert reviews an informational AI output at a desk. visioncheckout is a consumer-facing product where the model's output is a binding financial transaction completed in seconds. **The distinction is the whole value of adding it** — do not let it be written as a seventh instance of the same thing.

---

---

# `/capabilities/command-integrity-design`


**Write to:** `Articles/Capabilities/capabilities--command-integrity-design.md`


**Brief of record:** `page--command-integrity-design.md`


> **Working title for the page:** *Command integrity: designing intent, authority and feedback for actions that cannot be taken back*
>
> **Status: new proposal. It appears in no section of `corpus-integration-brief.md` and in no addendum.** Four engagements in the current change set converged on the same set of rules independently, and the corpus has no page that states them.
>
> **Parent cluster is settled: `/capabilities/command-integrity-design`**, beside `error-reduction-and-recovery-design`, `design-for-abnormal-and-degraded-scenarios` and `state-and-status-visibility-design`, which are competency statements of exactly this shape. **No context-change protocol applies.** A registry entry is required.
>
> **This is an Answer page.** It opens with an answer-first block of six principles, each tied to a named case, before any documentation-style section. It is not a Match page and must not carry a buyer FAQ.
>
> **Four anchors, one of which carries the strictest handling regime in the corpus.** The handheld command-and-control engagement appears here under §A1.5 and §A1.6 in full. Read those before writing a word of its material.
>
> **This page must not become a page about destructive-action confirmation dialogs.** That subject is well covered and dull. The page's subject is the chain from an operator's intent to a system's evidence that something happened, and confirmation is one link in it.

---

## Opening — entity anchor

Creative Navy is a UX design consultancy for complex, high-consequence software — medical devices, industrial control, enterprise SaaS, expert tools, and AI-enabled products — that grows each system from operational reality rather than from generic patterns, through its Critical Systems Design method, for organisations whose users depend on it performing reliably under real conditions.

In a system where an action leaves the screen and changes something in the world, three questions have to be answered by design rather than by assumption: **what did the operator mean, what are they authorised to do, and what does the system actually know about what happened.** Most interfaces answer the first with a button, the second with a selected row, and the third with a message that appears when the button is pressed. **Creative Navy designs the three as separate mechanisms**, because in the products where it matters they are separate facts — and an interface that merges them will, sooner or later, assert an outcome it has no evidence for.

---

## The answer-first block — six principles, each tied to a named case

**This block comes first on the page, before any section. Each principle is one short paragraph, states the case it comes from, and states the cost it was known to carry.**

1. **One deliberate action is one logical command.** Where delivery is unreliable, the correct response is a command with an identifier, bounded retries, duplicate protection, expiry and explicit acknowledgement — not a control the operator can press repeatedly. *The handheld command-and-control engagement, where the diagnosis was that repeated input is not feedback: it adds uncertainty, because the operator cannot tell whether they are retrying one request, creating a duplicate, or acting on stale information.*
2. **An interface may report only what the system can evidence.** Acknowledgement is not observation, and silence is not failure. *Schone Airspace Group, where a seven-state command transaction model records, for each state, the source evidence it requires and the inference it forbids — and where an elapsed response window produces an explicit unknown rather than a guess.*
3. **The object under inspection and the object an action will affect are independent variables.** Collapsing them into one selected state is how a correct action reaches the wrong thing. *Schone, where the command target and the inspected aircraft carry distinct visual treatments and can both be visible at once, and where changing the target is a named explicit action that sends no command.*
4. **A physical control must not change meaning underneath the operator.** A control that silently takes a second role produces an error with no error message, because something visibly moved. *Raymarine, where a channel encoder that would have gained a second role on a different screen was fixed to one domain for the life of the product.*
5. **Protection is proportional to consequence, and at the top tier size and separation are the protection.** Guarding patterns may substitute for size below the top tier and never at it. *The handheld engagement's four-tier sizing specification, where the most consequential action was removed from the touchscreen entirely.*
6. **Acknowledging is not responding, and silencing is not acting.** An interface that conflates the two teaches operators that attending to something is the same as dealing with it. *Raymarine, where viewing and silencing a received distress alert acknowledges nothing on air; and the MDU, where acknowledge means I have seen it and clear belongs to the condition.*

**Then one sentence that holds the block together:** every one of those six costs something, each cost was written down at the moment the decision was taken, and two of them were measured.

---

## Domain vocabulary

- **Command transaction** — a request with an identifier, a recipient, a response window and a terminal state
- **Intent, authority and effect** — what the operator meant, what they were permitted to do, and what the system did
- **Acknowledgement** versus **state observed** — the system received it, as against the system reports the world has changed
- **Unknown outcome** — a terminal state that is neither success nor failure, and which must exist wherever a response window can elapse
- **Commitment gate** — the interaction that converts an intention into an irreversible act
- **Deliberate friction** — an interaction cost accepted in exchange for a specific class of error being removed
- **Mode error without an error message** — the failure produced when a control's domain changes and the interface still looks correct
- **Protocol act versus attention state** — doing something on the air, the wire or the bus, as against noticing something on the screen

---

## Proposed H2 sections

1. **What a command is, and why a button is not one** — the transaction model, stated generally.
2. **Intent: committing an action that cannot be taken back** — commitment gates, physical controls, and the limits of a touchscreen.
3. **Authority: who the action is addressed to, and who is allowed to send it** — target identity, selection, and permissions resolved outside the interface.
4. **Feedback: what the system may assert** — acknowledgement, observation, unknown, and the refusal to show an outcome early.
5. **Acknowledging is not responding** — alert states, protocol acts, and the acknowledge/clear distinction.
6. **What each rule costs** — the section that makes the page credible rather than prescriptive.
7. **Where this stops** — the boundary with system safety and engineering, stated plainly.

---

## Evidence to draw on

### The handheld command-and-control engagement *(the page's sharpest material, and the most constrained)*

**Naming: nothing may be named.** The locked client descriptor is **a European manufacturer of uncrewed systems, including one-way effectors, and the tactical command-and-control software that operates them**, used near-identically on every mention; the effector must survive every trim. **No quotes and no reported speech anywhere.** **No engagement dates.**

**§A1.5 governs the register.** Write it straight — no euphemism, no softening into "effects" where the source says strike — and with no relish. **The scope boundary appears early** (H106): interface structure, task behaviour, information priority and the clarity of operator control; not autonomy, control algorithms, autonomous safety behaviour, the datalink, the effector, targeting logic, or any certification or weapons-review activity. **§A1.6's two exclusions are absolute**: no configuration in which the system engages without human confirmation, in any form or by implication; and no naming of the re-certification-dependent workflows, though the existence of that constraint is usable (H107).

**Evidence tier: design record, co-authored, not validated.**

- **H44, H45** — the request and the reason behind it: both strike and abort controls permanently visible on the touchscreen, because a command might not reach the vehicle and operators had been pressing repeatedly until subjectively satisfied. **The control was doing two jobs: the command and the retry.**
- **H46** — the four-part written response, including that a single touchscreen input is not an adequate commitment gate for an irreversible action, with accidental touches, rain and moisture, gloves, vibration, device movement and palm contact named.
- **H47** — the standards basis cited in the document: NASA-STD-3001 Volume 2 requirement V2 10027 on protection against inadvertent activation, which names guards, covers, physical separation and requiring two operator actions. **Framing only. Nothing was worked to it.**
- **H48** — the six questions the interface must answer unambiguously.
- **H49** — the diagnosis: unreliable delivery, acknowledgement or state reporting belongs in the command architecture, not in human input.
- **H50** — the counter-recommendation: keep the strike request status visible at all times, do not expose strike as a permanently active touchscreen control, commit it by pressing and holding two flip-guarded physical buttons for a defined duration, and let abort hold a fixed position.
- **H51** — the two limits the document placed on itself: blind or unlimited retransmission would itself be unsafe, so the retry policy belongs to system safety; and the hold duration and physical-control design require human-factors and system-safety testing.
- **H52, H53** — the client did not accept all of it, and the document was co-authored by Creative Navy's designers and the client's designers.
- **H58, H59, H65** — protection patterns permitted at the second tier and below and never at the top, where size is the protection; controls cut or moved to hardware rather than downgraded when a view cannot fit them; a hardware alternative for every critical control wherever the device provides one.
- **H82** — on-screen controls placed close enough to hardware keys to imply a pairing that does not exist.

**Mandatory calibration, carried verbatim from the handheld brief §A4:**

> The client asked for the strike and abort controls to remain permanently visible on the touchscreen, because a command issued through the interface might not reach the vehicle and operators had therefore been pressing the control repeatedly. Creative Navy's designers and the client's designers jointly wrote the case against it, citing NASA and FAA human-factors guidance, and recommended that the strike command be committed by pressing and holding two flip-guarded physical buttons while the strike request status remained visible at all times, and that retry be handled as a bounded property of the command architecture rather than as repeated human input.

**Four things must not be attached to it, and the brief states them as absolutes.** It did not make the system safe. It was not validated. It did not prevent anything — nothing was measured before or after. And it was not a unilateral act. **Use the standing construction: work Creative Navy led and co-authored, never work it delivered.** **"Protection patterns substitute for size" is one careless sentence away from design guidance for a weapons control — carry the top-tier exclusion in the same sentence, every time.**

### Schone Airspace Group — mission control for uncrewed aircraft

**Naming:** **Schone Airspace Group**, near-identically on every mention; nothing else named. **No engagement dates.** **Evidence tier: design record, with Creative Navy-measured acceptance checks.**

- **D85** — the seven-state command transaction model, each state carrying its required source evidence and its prohibited inference side by side.
- **D84** — every consequential command names its intended aircraft in the immediate action context, including in the confirmation heading. **Accepted cost: repeated target labels consume space.**
- **D86** — a transaction keeps the aircraft it was dispatched against.
- **D87** — silence is an unknown result, not a failure; no automatic retry. **Accepted cost, named: unknown is less reassuring than a binary outcome.**
- **D90, D91, D92** — inspection and command target as independent variables with distinct treatments; changing the target is a named explicit action that sends no command and is described in the record as deliberate friction; an interface target selection never confers flight-controller authority, because eligibility and command-channel permission are independent checks resolved outside the interface.
- **D79** — entering the live workspace is a navigation action, not an arming or mission-start request.
- **D71** — the six seconds during which a success toast would have been asserting an outcome with no evidence behind it.
- **D47** — among the nine critical findings: acknowledgement shown as a completed flight state, and no response treated as a rejected command.

**Mandatory calibration, carried verbatim from the Schone brief §A4:**

> The scripted acceptance checks were run twice: first by Creative Navy, then by five of the nine operators who took part in the research. Each check fixes a starting state, an operator action and an expected visible response, and a pass means the interface stated the correct operational fact under that condition. The checks evaluate the design representation. They are not a measure of flight performance, operator proficiency, task completion time or error rate, and they were not conducted on a connected system.

**Do not write "32 of 36 checks passed" without the denominators explanation** — 32 of 32 is the accepted interface specification, 32 of 36 is the full mixed set including four checks that depended on engineering evidence. **Severity records the consequence of the interface ambiguity within the scripted task, not that a corresponding aircraft incident occurred.**

### Raymarine — a fixed-mount marine VHF radio with digital calling

**Naming:** Raymarine may be named. **Two terms are forbidden on any page carrying this engagement: "performance in reality" and "competitive vector".** **No engagement dates.** **Evidence tier: Creative Navy-measured for the comparisons; design record for the rest.**

- **R36–R39** — the conflict and the reframing: an encoder already assigned as the primary channel selector would have taken a second role on another screen, and **the action may appear to be accepted because a visible object moves, so a mode error is not necessarily accompanied by an error message.**
- **R40–R43** — four control models compared against the same operational scenarios, two variants of one of them rejected, and the grounds on which the fixed-role model prevailed.
- **R45, R46, R47** — the risk characterised as structural rather than cosmetic; what the pivot explicitly did not claim at the time; and the invariant carried through every subsequent sprint.
- **R110–R113** — the encoder's single domain; transmission addressing the channel and never the screen; selected channel distinct from monitored channel; requested transmit power distinct from effective transmit power.
- **R123, R124** — six calling states with fixed language, including request sent with voice contact explicitly stated as not established; and a visible vessel that is not a callable vessel, with the reason stated.
- **R128** — three emergency types modelled separately, and **the separation that generalises furthest: a received distress alert may be viewed and silenced, and neither act acknowledges anything on air.**
- **R133** — forty-three exception records across eight independent state axes.

**Mandatory calibration, carried verbatim from the Raymarine brief §A4:**

> Creative Navy designed the test protocols, moderated all twenty-four sessions and analysed the results. Raymarine supplied the physical bench mockup on which the sessions ran. Each comparison was paired and counterbalanced within participants, with task wording, target data and starting states held constant. The findings describe operator behaviour on a prototype against a fixed scenario fixture. They are not a measure of radio performance, of real-world calling accuracy, or of outcomes at sea.

> Where a result is cited, the cost accepted to obtain it is cited in the same passage.

> Confirmation did not prevent target selection mistakes. It made the recipient identity legible at a second decision point, giving operators the opportunity to detect and correct them before the request was submitted.

**The two results, with their costs, are the page's quantitative spine.** Fixed-role control: wrong-domain activations six of eight to zero of eight, unassisted completion six of eight to eight of eight — **and a 2.30 second median penalty on target browsing, accepted** (R64, R65, R68). Confirmation before a digital call: wrong-recipient submissions two of eight to zero of eight, with all three initial selection errors caught at the confirmation screen — **and a 5.85 second median cost and two and a half extra interactions, accepted** (R72, R73, R74). **Eight participants is a small sample and the page says so.**

**And R90 must appear**: the engagement tested nothing at a helm. The research establishes what operators understood and could do with a prototype on a bench.

### The MDU — a vessel motion advisory instrument *(supporting, not an anchor)*

**Naming: the product may be named; the manufacturer may not.** **No engagement dates.** **Evidence tier: design record, manufacturer-stated context.**

- **M22, M23** — the instrument alarms and does nothing else, and is not permitted to control the vessel in any capacity; all actions based on its data are the captain's. **Manufacturer-stated positions, attributed as such — not a verified regulatory finding.**
- **M42** — acknowledge replaced clear, with the convention supplied by a practitioner after both the specification and Creative Navy's first position were wrong.
- **M45** — a system that keeps asserting a condition the operator has already accepted is producing noise, not oversight.

**Use the MDU for exactly one thing on this page: the case where the authority boundary is explicit and legal, so the interface's only available act is to say something accurately.** Do not stretch it further. **M27 applies wherever MDU evidence appears on a page about research or validation: nothing was tested with users, and the entire user-side evidence base is one external advisor.**

### Kardion — the regulated cardiac support controller *(authorised by the engagement lead; draw from the published case-study notes)*

**The lead has confirmed that Kardion material beyond the capability page may be used here.** Source it from `Articles/Case studies/case-study-notes--kardion.md` and re-read it before writing; introduce nothing that is not in it.

**What it supplies, and it is the page's only medical and only non-defence regulated instance:**

- **The flow adjustment overlay**, the screen state through which a nurse or clinician changes the level of support, **which took nine iterations.** A prior human-factors study had surfaced the rotary-knob-against-OK-button tension and **the risk of accidentally reducing flow to zero** — the commitment-gate problem in its purest clinical form.
- **The confirmation interaction, specified as a balance rather than a rule: sufficient friction to prevent accidental changes, insufficient friction to slow deliberate clinical action.** **This is the page's clearest statement that protection is proportional to consequence, from a domain where both halves of that sentence are safety-relevant.**
- **The lag, which is principle 2 in a medical device.** The device receives a new target flow and adjusts gradually; the flow does not change instantly. **The interface had to communicate that the new value was set without implying the change had already taken effect** — the same distinction as acknowledgement against state observed, reached independently in a regulated clinical product.
- **The layout-stability constraint:** elements visible in both the running view and the adjustment overlay had to stay in position.

**Calibration.** **Formative only: Creative Navy's role in regulated medical work is formative evaluation; summative validation and regulatory submission are the manufacturer's responsibility.** **No compliance claim and no IEC 62366-1 credential** — the standard governed the engagement and was not worked to by Creative Navy as a conformance activity. **The FDA statement on the published page belongs to the case study and must not be repeated here as evidence for a design principle.** No commitment-gate figure — no hold duration, no friction measurement — is recorded, and none may be implied.

---

## External research for this page

- **NASA-STD-3001 Volume 2, requirement V2 10027** — protection against inadvertent activation, naming guards, covers, physical separation and two operator actions, extended to off-nominal conditions. **Already cited inside the handheld deliverable, which is why it may be named at all.** Framing, never a credential.
- **FAA AC 25.1302-1** — design-induced flight-crew error, cited in the same deliverable. **Verify the current revision before publication.**
- **MIL-STD-1472H** — touchscreen provisions, the 16 mm minimum, the 5 mm gloved addition and the separation requirements. **The specification measures itself against this standard and states where it departs from it — carry the graduation, never the standard's name alone.**
- **Mode-error and automation-surprise literature** — the classical human-factors account of a control whose meaning changes. **Find primary sources; the corpus currently holds none.**
- **[VERIFY: ITU-R M.493 and the digital selective calling acknowledgement semantics]** — needed only if the page states what an on-air acknowledgement is. The Raymarine material supports the design point without it.

---

## What Creative Navy does not claim

- **Nothing here is a safety determination.** No design described made a system safe, and the handheld recommendation's own deliverable records that its two load-bearing figures require human-factors and system-safety testing that was not performed.
- **No prevention is claimed.** No accidental activation was measured before or after any engagement. The Raymarine figures describe operator behaviour on a bench prototype under a fixed scenario, not events at sea.
- **No conformance credential** against NASA-STD-3001, FAA AC 25.1302-1, MIL-STD-1472H, IEC 62366-1, the marine equipment regime or any other instrument.
- **No weapons claim of any kind.** Creative Navy designed a supervision surface and did not design the system, the effector, the datalink or the targeting logic.
- **No claim of sole authorship** for the handheld deliverables, which were co-authored with the client's design team.
- **No AI claim.** None of the four anchors contains a model, and the decision-boundary practice page is about a different category.

---

## Cross-references to make explicitly, in language and not only as links

- **`/capabilities/error-reduction-and-recovery-design`** — **the closest neighbour and the most important boundary to draw.** That page is about errors: preventing them, tolerating them, recovering from them. **This page is about what an action means before any error occurs** — who it addresses, what commits it, and what the system may say about it. Confirmation friction appears on both pages and must be developed in only one: keep the general treatment there and the commitment-gate treatment here.
- **`/practices/decision-boundary-design`** — **that page is explicitly about AI-assisted products**, and allocates decisions between autonomous action, human confirmation and independent human judgment. **This page is the non-AI sibling**: the systems here decide nothing, and the allocation question is between a touchscreen and a physical control, not between a model and a person. Say that in one sentence on both pages.
- **`/failures/workflow/critical-actions-appear-at-the-wrong-time`** — that page is about **timing**: an action that is correct but surfaced at the wrong moment. This page is about **identity, authority and evidence** at the moment of action.
- **`/failures/state-visibility/mode-changes-are-unclear`** — where the Raymarine control-model material lands as a general failure.
- **`/capabilities/state-and-status-visibility-design`** — the acknowledgement-versus-observation distinction as a state-reporting problem.
- **The supervising-autonomous-systems page** (new) — the standing relationship, where this page is the single act.
- **The alarm-management page** (new) — **the acknowledge/silence/clear material is shared and must be written once.** Recommend: the alarm page owns it as part of the alert lifecycle; this page states it as a principle and points there.
- **`/evidence/evidence-standards/what-we-do-not-claim`**.

---

## Engagements that must NOT be added to this page

- **Every AI study — Callsign, Typewise, Owkin, and the AI situations material.** An AI confirmation step is a decision-boundary question and belongs on that practice page. Mixing them collapses the distinction the page exists to draw.
- **Maritime VTS.** The VTS material on alert lifecycle and association states is strong and belongs on the alarm page and the marine context page. **A VTS operator issues advice, not commands** — the service does not take the shipmaster's responsibility, which makes it the wrong anchor for a page about committing acts.
- **Oceaneering.** A dispatch is a consequential action, but the engagement's material is about recovery after a detected mismatch and about misuse, both of which have better homes. **One sentence at most, if the page needs a non-defence instance of supervisor gating (O77).**
- **Egma, Topera, Assemblio, visioncheckout, AIT, Streetec.** None has a command that leaves the interface and changes something that cannot be undone. **Do not pad.**


---

**The evidence cited in this brief, in full**


*AIT*

- **A1** — Fixed scope, eight one-week sprints with discovery and requirements inside the block: five UX sprints, then three UI sprints. The UX sprints ran home screen; home iterations and commissioning flow; commissioning flow and start-up screen; settings and list screens; feedback implementation. The third UI sprint was brand theming.

- **A4** — Creative Navy benchmarked **10 thermostat and heat pump control interfaces against 15 features** — scheduling by day and by interval, comfort modes, temperature offset, range setting, sensor calibration, date and time on the home screen, voice control, connectivity, mobile app, geofencing and physical buttons — plus a qualitative "remarkable features" review of individual products.


*Oceaneering*

- **O77** — **Call-carts was restricted deliberately.** A quantity slider was designed and rejected on misuse grounds (O54, O41). Resolution: supervisor-gated, with already-called counts surfaced **before** the quantity screen — so the supervisor is told that four carts are already on the way before being asked how many more to request — and an expiry on outstanding calls.


*Raymarine*

- **R36** — **The original assumption.** Exploration initially treated the hardware controls as an established input set. Screen wireframes could assign functions to the channel encoder, the directional keys and the three softkeys according to the needs of each screen.

- **R37** — **The conflict.** A promising AIS concept used the lower encoder to move quickly between vessel targets. **The same encoder had already been assigned as the primary channel selector in the radio view**, and settings would have given it a third role, moving focus or editing a value. When an alert interrupted an interaction, it became unclear whether the next rotation would select a vessel, change the tuned channel or navigate a message.

- **R38** — **The failure mode's specific character, recorded at the time.** The action may appear to be accepted, because a visible object moves. **A mode error is therefore not necessarily accompanied by an error message.**

- **R39** — **The reframing.** The question stopped being which AIS layout offered the shortest path to target selection, and became which control model could guarantee predictable communication behaviour across all screens, interruptions and levels of user experience. Creative Navy brought the interaction risk to the project review, proposed a focused comparison of physical and digital control contracts, and moved less consequential visual variants out of the immediate exploration schedule.

- **R40** — **Four control models compared against the same operational scenarios.** *A, contextual rotary* — the encoder adjusts channel on the radio view, target on the AIS view and selection in menus; fast, efficient hardware reuse; risk of hidden mode changes and error after interruptions. *B, fixed role* — the channel encoder always changes channel, while directional keys and softkeys manage contextual interaction; predictable, learnable, stable communication behaviour; some AIS tasks require additional key presses. *C, explicit mode* — the encoder changes purpose only after a deliberate press or other mode switch; powerful navigation with a visible contract, but the operator must still track an extra state, especially under pressure. *D, dedicated new control* — an additional input dedicated to secondary navigation or target selection; high speed without overloading the channel control, at the cost of hardware, enclosure changes and feasibility implications.

- **R41** — **Model C was examined in two variants and both were rejected.** If the mode persists after an interruption, local task continuity is preserved but a memory burden is created after attention has shifted. If the mode resets, channel tuning becomes predictable after interruptions but the meaning of the next rotary movement changes unexpectedly. A visible mode label is informative but does not remove the need to reacquire the active state under divided attention, and the model also depends on a reliable encoder press event and clear tactile feedback.

- **R42** — **Model D was set aside rather than rejected on merit.** A separate navigation encoder would preserve domain separation while offering fast target cycling, but introduces industrial design, bill-of-materials and panel-space consequences. **It was not needed to resolve the ambiguity, and the record states it remains an industrial design option if later product testing identifies unacceptable AIS browsing effort.**

- **R43** — **Why Model B prevailed, as recorded.** Consistency outweighs isolated task speed — one or two extra key presses are preferable to uncertainty about whether an input changes the tuned channel. Interruptions remain intelligible — an incoming call or alert does not silently change the meaning of a rotary encoder. Safety actions retain physical priority — priority channel access, distress initiation and push-to-talk do not depend on what the display currently shows. **And hardware changes stay optional** — the concept does not rely on adding another encoder to make the information architecture viable.

- **R45** — **The risk was characterised as structural rather than cosmetic.** If the same encoder silently changed purpose, adding better labels later could not fully remove the ambiguity. Resolving it before high-fidelity design protected the subsequent flow work from rework.

- **R46** — **What the pivot explicitly did not claim.** No measured error reduction and no engineering cost saving were claimed at the time. The value claimed was the removal of a known inconsistency from the preferred architecture before three weeks of detailed flow design and three weeks of UI production.

- **R47** — **The resulting invariant, carried through every subsequent sprint.** A screen may change what the keypad and the labelled softkeys do. It must not change the domain of the dedicated channel encoder, the microphone channel controls, push-to-talk, priority channel access or the protected emergency actions. **An input may be unavailable within its own functional domain — it is never silently reassigned to a different one.** The operator sees a rejected channel request, not a surprise focus change.

- **R64** — **Wrong domain activations: six of eight under the contextual model, zero of eight under the fixed model** — on the retune task, and again on the recovery task.

- **R65** — **Unassisted completion: six of eight under the contextual model, eight of eight under the fixed model**, on both the retune and recovery tasks. **Both prompted completions occurred under the contextual model.**

- **R68** — **Median target browsing time: 6.25 seconds contextual, 8.55 seconds fixed — a 2.30 second penalty under the selected model, accepted.**

- **R72** — **Wrong recipient submissions: two of eight under immediate calling, zero of eight under confirmation.**

- **R73** — **Initial wrong target selections: four of eight under immediate calling, three of eight under confirmation.** **All three initial errors under the confirmation condition were detected and corrected at the confirmation screen before any request was sent.**

- **R74** — **Median completion time: 17.95 seconds immediate, 23.80 seconds confirmed — a 5.85 second cost, accepted.** **Median physical actions: 6.0 immediate, 8.5 confirmed.**

- **R90** — **No field research, no sea trials and no on-vessel work of any kind.** All twenty-four sessions were bench prototype sessions. **Raymarine's own brief named the operating conditions — wet hands and gloves, glare and night sailing, vibration, ambient noise and divided attention — and none of them was tested.** The engagement's own risk register says so, listing physical control behaviour under glove operation and enclosure ergonomics, overlay hierarchy under workload, movement and variable lighting, and real alert arbitration with loud audio as conditions requiring physical prototype trials in operational lighting and deck conditions.

- **R110** — **The channel encoder's single domain.** Turning the lower encoder or using the microphone channel keys requests a voice channel change only, in every ordinary display context, including while the AIS plot is open with a vessel selected. **A rejected channel request is rejected atomically**: the actual channel is retained, the reason is displayed, and **no retune is queued to apply when the restriction lifts.** The recorded reasoning is that a delayed change would produce an unexpected frequency change after the operator had moved on.

- **R111** — **Transmission addresses the channel, never the screen.** Push-to-talk transmits on the currently selected permitted channel and never on a highlighted vessel. Highlighting a vessel is not selecting a frequency; a digital call requires its own explicit flow.

- **R112** — **Selected channel and monitored channel are visually distinct.** While scanning or in a watch mode, the prominently displayed channel remains the selected working channel, and a second label identifies the frequency actually being heard. The recorded reasoning is that monitoring must not suggest an automatic change to manual tuning.

- **R113** — **Requested transmit power and effective transmit power are different values**, and the display always shows the effective one. A blocked request leaves the previous value intact and explains the channel restriction.

- **R123** — **Six distinct calling states, with language fixed for each.** Ready to send; sending; request sent and awaiting acknowledgement, with voice contact explicitly stated as not established; acknowledged, with the working channel named and voice operation indicated as available; no acknowledgement received, with contact explicitly not established; and request not sent, meaning the local transmitter did not succeed. **A missing acknowledgement and a failure to transmit are different outcomes with different recovery paths**, and a routine timeout never escalates into a distress call.

- **R124** — **A visible vessel is not always a callable vessel.** Where a target has no usable registered identity, its position remains inspectable and the call action is unavailable with a stated reason. Where a record is stale, its last-known position is shown with an explicit qualifier, its live risk calculations are suppressed, and no new call may be originated from it.

- **R128** — **Three emergency types are modelled separately, with independent identities, timelines and histories.** A locally initiated man-overboard incident records a reference position, its source and its time, and runs an elapsed clock — **and transmits nothing.** An outgoing distress alert is a protected radio action with its own sending, sent, awaiting acknowledgement, acknowledged and failed states. A received distress alert is information from another station, identified by sender, time and supplied position. **Viewing or silencing a received alert transmits no acknowledgement**, and silencing a local alarm never ends an incident.

- **R133** — **Degraded conditions are enumerated rather than generalised: forty-three exception records across eight independent state axes** — voice radio state, display context, calling transaction, AIS data quality, positioning, safety incident, interruption and chartplotter link. **The governing statement is that a current screen is not a system state**, and that the interface is a state interpreter rather than the source of truth for radio outcomes.


*Schone*

- **D47** — **The nine critical findings, named.** Wrong aircraft interpretation; stale telemetry displayed as current; acknowledgement shown as a completed flight state; partial offline map coverage appearing complete; measured telemetry mistaken for a manual check; command recipient disappearing when the operator switched to the camera workspace; no response treated as a rejected command; a cross-vehicle warning with no visible owner; inspecting another aircraft silently retargeting commands; an uncertain link leaving return-to-launch looking available.

- **D71** — **The responsive command branch, as intervals.** On a separate branch with a healthy link, a confirmation names the aircraft and the action; the request is sent; **an acknowledgement arrives three seconds later while the aircraft is still reporting its previous flight mode; and only three seconds after that does fresh telemetry report the requested mode.** Those two three-second gaps are the entire argument of the engagement, and they are the most quotable thing in the source material.

- **D79** — **Entering the live workspace is a navigation action, not a takeoff, arming or mission-start request.** A separate named control and response is required for any of those.

- **D84** — **Every consequential command names its intended aircraft in the immediate action context**, including in the confirmation heading. Rejected: an implicit current aircraft, and aircraft identity in the header only. **The accepted cost: repeated target labels consume space, in exchange for rapid recognition of exactly what a consequential action addresses.**

- **D85** — **A seven-state command transaction model**: ready to request, request sent, awaiting response, command acknowledged, state observed, request rejected, response unknown. Each has its own required source evidence and its own prohibited inference, recorded side by side. Acknowledgement does not mean the intended mode has been observed; state observed cannot be inferred from acknowledgement alone; rejection cannot be inferred from silence. Rejected: a success toast on click, and a spinner until the mode changes. **The accepted cost: more command states require precise copy and event matching, in exchange for less ambiguity about the outcome of each action.**

- **D86** — **A transaction keeps the aircraft it was dispatched against.** If the operator inspects or targets a different aircraft while a request is pending, the pending request keeps its original recipient, action and request identifier, and the new target does not rewrite history.

- **D87** — **Silence is an unknown result, not a failure.** A response window that elapses without a conclusive event produces an explicit unknown state that retains the target, the action and the request identifier, and triggers no automatic retry. **The accepted cost was named and is the sharpest self-criticism in the package: unknown is less reassuring than a binary outcome, but it is accurate and it supports a deliberate subsequent check.**

- **D90** — **The inspected aircraft and the command target are independent variables with distinct visual treatments** — a double solid outline and a labelled badge for the target, a dotted outline and a separate badge for inspection, both able to appear at once on the same card. Rejected: one generic selected state. **The accepted cost: two highlighted identities are visible simultaneously, adding complexity in exchange for safer separation of operator intent.**

- **D91** — **Changing the command target requires a named, explicit operator action**, which changes the recipient and sends no aircraft command. **The accepted cost was named plainly: one additional explicit action is required to operate a different aircraft, and this is deliberate friction.**

- **D92** — **An interface target selection never confers flight-controller authority.** Eligibility and command-channel permission are independent checks resolved outside the interface. **The accepted cost: the distinction requires an extra status label, in exchange for not using one selected icon to stand for several unrelated system permissions.**


*the MDU*

- **M22** — The system alarms and does nothing else, by deliberate choice: *"Only alarm, if we where to launch a process our system would need to be approved by several institutes."*

- **M23** — *"We are not allowed to control the ship in any capacity. All actions based on the GUI data are made by the captain."*

- **M27** — **There was no user research.** No observation on a bridge, no interviews with crew, no contextual inquiry, no usability testing, no researched personas. The user-side evidence base for this engagement was **one external advisor — a serving master and chief engineer, present in the review calls** — together with the manufacturer's own engineers, the written specification, the competitive benchmarking in M9, and the published human-factors literature in M11.

- **M42** — **Acknowledge replaced Clear.** The specification required alarms to persist until manually cleared. Creative Navy argued in review that a Clear control had no function, because nothing done on the screen changes the state of the ship. The advisor supplied the bridge convention in its place: the alarm flashes red, *Acknowledge* means "I have seen it", the indication then holds solid red, and it clears itself when the condition is no longer present. *"When you click acknowledge, it's turned solid red and it stays like that until it's cleared."*

- **M45** — **The system does not persist in challenging a decision already taken.** The manufacturer's position, and the reason the alarm clears itself rather than demanding resolution: *"if the captain decide to just push the ship on, then our system should not kind of challenge that decision and just go back into normal sailing."*


*the handheld C2 engagement*

- **H2** — **Six-person team**: UX designer, UI designer, project manager, product designer, researcher, interaction designer. **Composition was stable across both blocks.**

- **H44** — **What was requested.** The client asked that both the strike control and the abort control remain permanently visible on the touchscreen.

- **H45** — **The reason given, which is the finding.** A command issued through the interface may not reach the vehicle, and there was a need not to create a false impression that it had. **The established operator behaviour was therefore to press the control repeatedly until subjectively satisfied.** In that model the persistent control served two jobs at once: the initial command input, and the manual retry mechanism.

- **H46** — **The written response, in four parts.** First, a single touchscreen input is not an adequate commitment gate for an irreversible action, because touchscreens are vulnerable to accidental touches, rain and moisture, gloves, vibration and device movement, palm contact, selection of the wrong control under stress, and digitizer faults — and an accidental strike command probably cannot be aborted inside the available window, particularly if the operator does not notice the error immediately. Second, placing the strike and abort controls symmetrically at opposite screen edges may imply that strike is mapped to the adjacent physical key when no such mapping exists, creating a false affordance. Third, a visible and enabled control communicates that the action is always available, when availability actually depends on connectivity, operating mode and vehicle state — so a permanent control may create mode confusion and encourage repeated activation attempts, where a persistent *status indicator* communicates readiness without implying that touchscreen activation is always valid. Fourth, and the load-bearing one: **repeated input is not feedback.** It adds uncertainty rather than resolving it, because the operator cannot know whether they are retrying the same request, creating a duplicate, or acting on information that has already aged.

- **H47** — **The standards basis cited in the document**: NASA-STD-3001 Volume 2 requirement V2 10027, which requires that the system protect against inadvertent activation of controls and names guards, covers, physical separation and requiring two operator actions as examples of how, extending the protection to off-nominal controls including those used for failures and aborts; and FAA Advisory Circular 25.1302-1, for the principle that the effects of operator actions must be presented so that errors can be detected and corrected.

- **H48** — **The six questions the document requires the interface to answer unambiguously**: was the input registered; is the command being transmitted; did the vehicle acknowledge it; what state did the vehicle confirm; is the information current or stale; and is abort still available.

- **H49** — **The diagnosis.** Requiring the operator to press repeatedly indicates unreliable command delivery, acknowledgement or state reporting, and **that belongs in the command architecture rather than in human input.** The system should treat one deliberate operator action as one logical command, with a unique command identifier, controlled and time-bounded retries, duplicate protection, expiration rules, explicit vehicle acknowledgement, and a clear distinction between local input and confirmed vehicle state.

- **H50** — **The counter-recommendation.** Keep the strike request *status* visible at all times, but do not expose strike as a permanently active touchscreen control. Commit the strike by pressing and holding both flip-guarded physical buttons simultaneously for a defined duration. Allow the abort control to hold a fixed, predictable position, but make it active only once the system confirms that an action is in progress and remains abortable.

- **H51** — **Two limits the document placed on its own recommendation.** Blind or unlimited retransmission would itself be unsafe, so the retry policy must be defined by system safety rather than by design. And the exact hold duration and physical-control design must be validated through human-factors and system-safety testing — which the engagement did not perform.

- **H52** — **The outcome, in three parts.** Automatic repeated transmission of the command was assessed as feasible, taking the retry action off the operator. At least one voice on the client side arrived at the position that strike and abort should be actuated only from physical buttons, with the display indicating them but not activating them. The two-button flip-guarded commitment survived into the final physical mapping (H87). **The client held its original position on keeping both controls simultaneously visible**, for the reason it had given at the outset.

- **H53** — **The document was co-authored by Creative Navy's designers and the client's designers**, against a request originating elsewhere in the client's organisation.

- **H58** — **Protection patterns as a substitute currency for size**: slide-to-confirm, hold-to-commit at 300–600 ms, and select-then-arm. **Permitted at T2 and below; never at T1, where size is the protection and is never substituted.**

- **H59** — **The capacity rule.** If an in-mission view cannot fit its controls at their tier sizes, controls are cut or moved to hardware. **Tiers are not downgraded to fit.**

- **H65** — **Nine design rules.** One component library sized from the handheld column with two layout templates, so that handheld layouts inherit safely onto the physically larger tablet. A maximum of roughly six to eight on-screen touch controls per in-mission view. T1 controls limited to three or four per view, with isolation, two-stage commitment, and a hardware alternative wherever the device provides one. Hit areas may exceed the drawn control, but the visual should approximate the true target and adjacent invisible hit zones are avoided. Contrast of ≥7:1 for critical text and ≥4.5:1 for large text. **State is never communicated by colour alone**, always with redundant shape, position or icon. Primary navigation on the handheld's bezel keys, with touch reserved for spatial tasks and dense interfaces moved into full-screen takeovers. Night-vision compatibility present on one device and undetermined on the other. And the capacity rule (H59).

- **H82** — **A false-affordance finding about the always-visible option.** Toolbars running down both screen edges would sit so close to the bezel keys that they risk implying a button pairing that does not exist. **This is the same reasoning as H46's second limb, reached independently in a different part of the interface.**

- **H106** — **The scope boundary, stated and held throughout**: the engagement covered interface structure, task behaviour, information priority and the clarity of operator control. It did not authorise and did not produce changes to autonomy, control algorithms, autonomous safety behaviour, the datalink, the effector, targeting logic, or any certification or weapons-review activity.

- **H107** — **A constraint the client stated at the outset**: several vehicle control and strike-execution workflows were built on implementation dependencies that were expensive or impossible to modify, and that might require re-certification if changed.


*visioncheckout*

- **V2** — **Five-person team**: UX designer, UI designer, product designer, researcher, project manager.


---

## Practice pages


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

### 1.2 The Streetec engagement (S) — nameable

**Streetec GmbH and the product may be named in full.** The product is **kntrl 2**, the second generation of Streetec's kntrl control system for aftermarket automotive air suspension. It shipped and is in the market.

**Individuals must still not be named** unless unavoidable. Use role descriptors.

**Verbatim client quotation is permitted** for this engagement — the quotes in §3.6 are cleared and may be used as written, attributed to role rather than person.

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

### 1.5 The Assemblio engagement (N) — client and products nameable, customers not

**Assemblio GmbH may be named in full, and so may both products.** Assemblio is a Stuttgart software company and a spin-off of the Fraunhofer Institute for Manufacturing Engineering and Automation (Fraunhofer IPA). The products are the **Assemblio Composer**, the planning tool used by engineers, and the **Assemblio Smart Viewer**, the shop-floor application used by assembly workers. Both names are public.

**"KIM" is the Smart Viewer's internal name** and appears that way in the client's own documents. Use *Smart Viewer*; mention KIM only where a quoted passage requires it.

**Individuals must not be named** on either side. Use role descriptors: "Assemblio's CTO", "Assemblio's team".

**Verbatim client quotation is permitted**, attributed to role. See §3.31 for the transcript caveat.

**Assemblio's customers must not be named, and there are two distinct traps.** The design files carry **Bosch, ABB, Emerson and Rosemount** as sample folder and project names — **placeholder data, not clients**, exactly like the "Aerospace & Defense" sample groups in the industrial engagement's files. And Assemblio's own website lists real customers; those are the client's commercial relationships, not Creative Navy's, and importing them would read as a borrowed association. Generalise to "industrial manufacturers".

**The product is in production and all four surfaces shipped as the delivered design** (N11), with the components adopted by the client's developers (N108). **No time-saving, error-rate, training, adoption, revenue or funding figure may be stated** — including **Assemblio's own published marketing claims** about what their product achieves, which are the client's claims about their software and never outcomes of the design work.

> **Flag for the engagement lead, not for the writer.** Another agency has published an Assemblio case study covering the marketing website. Different scope, no conflict, but the two will sit together in search results. Raise once, separately.

---

### 1.6 The Topera engagement (T) — nameable, but nothing exists

**Topera may be named**, and so may every standard behind it. Topera is the cross-organisational project management platform Creative Navy produced a concept design for, grounded in the DIN 69901 series and the ProSTEP iViP / VDA recommendations. **DIN, ProSTEP iViP, the VDA and the individual standards must be named precisely** — they are public documents and they are the main source of domain authority this engagement carries.

**Individuals must not be named** on either side. Role descriptors only.

**Topera is a concept design and nothing has been built** (T20). No product, no deployment, no user, no pilot, no outcome. **Every sentence on every page must stay true of a system that does not exist.** "The WBS view shows the project as a tree" is wrong; "the WBS view was designed to present the project as a tree" is right. This is the single most likely error in any page carrying Topera, and it is more dangerous here than the equivalent risk elsewhere because the client is named and the design is in circulation.

**Do not characterise how the client obtained the standards documents.** The client supplied them (T22); that is the whole of the permitted statement. DIN standards are commercially licensed, and any phrasing that invites a provenance question is a liability for both parties.

**No stakeholder, partner, prospect or customer of Topera may be named**, including whoever the concept design was shown to (T14) — none were disclosed. The companies in the PSI 25 working group (§7.7) are a matter of public record *in the standard* and may be named **as authors of the standard only**, never as parties connected to Topera.

**The sample data in the design files is placeholder data** — project names like "Automotive Electronics Development Project" and all personal names are fabricated demonstration content, the same trap as the industrial engagement's "Aerospace & Defense" groups and Assemblio's Bosch/ABB folders. Do not reproduce them and do not read a market from them.

---

### 1.7 The Egma engagement (G) — client and product nameable

**Egma may be named in full, and so may the product.** Egma is a Dubai-based ophthalmic lens manufacturer and optical supplier operating across the Gulf states and North Africa through four divisions — ophthalmic lenses, eyewear, instruments and a lens factory. The product is **Egma Order**, the B2B platform through which optical stores order lenses. It is **built and online**.

Name the product **Egma Order** on first mention with "Egma's B2B lens ordering platform" as the gloss. Use **Egma** for the company throughout; never "the client" or "the manufacturer" as the primary identifier in a passage that must stand alone.

**Individuals must not be named** on either side. Role descriptors only: "Egma's CEO", "Egma's product manager", "Egma's support team", "Egma's optical expert". Creative Navy's sales lead is named on one recording and must not appear.

**Egma's suppliers and partners are a trap of their own.** Rodenstock appears as a product tier inside the configurator and Egma is Rodenstock's regional partner; Fenix Lenses is Egma's own brand, and other lens brands appear in the bulk-stock tables. These are **Egma's commercial relationships, not Creative Navy's**, and importing them would read as a borrowed association — the same error the Assemblio rules guard against. Name a brand only where a design decision cannot be described without it.

**The personal names in the design files are placeholder data** — patient names, usernames, store-operator names. The same trap as Assemblio's Bosch/ABB folders, Topera's fabricated project names and the industrial engagement's "Aerospace & Defense" groups.

**Verbatim client quotation is permitted**, attributed to role. See §3.46 for the cleared set and §4 for the transcript caveat.

**The platform is live, and nothing about its performance was measured.** This is the combination most likely to produce an invented outcome anywhere in this document. The "before" state is described in *commercial* terms by Egma's own executives — lost revenue, undiscovered premium options, an overloaded support team — and there is no "after" of any kind. **No post-launch figure, no support-ticket volume, no order-completion rate, no average-order-value movement.** See §4.

**A second engagement exists and is out of scope.** Egma commissioned a follow-up on a different product — a consumer-facing interactive eye illustration (G75, G76). Its material must not appear on any page from this document. Only **G73** crosses, and only attributed to that engagement.

---

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

### Handling rules — Raymarine

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

---

### Handling rules — maritime VTS

## A1. Handling rules

### A1.1 What may be named

**The client may not be named, and the name in the source documents is already a placeholder.** That placeholder name is not the client's name. It must not appear in the case study, in any note file, or in the corpus integration document.

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

**The device specifications survive; the device names do not.** This is the one substitution that costs something, and the compensation is specific: **keep every number.** 7 inches, 1920 × 1200, 323 ppi, 12.72 px/mm, 151 × 94 mm, 2,500 nits, ten bezel keys, two front push buttons, the joysticks and one operator-presence button on the back, MIL-STD-810H, IP65, −20 °C to +50 °C. The numbers are what make the sizing specification citable (H44, H53); the trade names add nothing the numbers do not, and in combination with the vehicle descriptor they would do identifying work the numbers alone do not.

### A1.2 What may not be shown

**No screenshots, wireframes, design images, plates or redrawn diagrams.** The corpus is text-only on documentation pages. The source material contains interface mockups at several fidelities, a physical button-mapping overlay, a 1:1 sizing sheet and an end-to-end flow diagram; **none may be published in any form, including as redrawn diagrams or ASCII approximations.** Describe the designs in prose.

This matters more here than in most studies for two reasons. The "before" imagery is a rendering of the client's own interface, and publishing it would publish the client's product rather than Creative Navy's work. And the button-mapping overlay is a labelled photograph of a real, identifiable controller — exactly what §A1.1 removes from the text.

### A1.3 Dates

**No dates at all, from any source.** No years, no months, no seasons, no calendar dates. Sequence and duration only — "fourteen one-week sprints", "an eight-sprint handheld block", "a seven-sprint follow-on".

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

## A1. Handling rules

### A1.1 What may be named

**visioncheckout may be named in full.** The product and the company may both be identified. Use **"visioncheckout"** as the canonical name throughout, styled lowercase as the company styles it, with "a German vendor of computer-vision self-checkout systems for staff restaurants and catering" as the gloss on first mention. Do not rotate descriptors; the entity-consistency rule in the writing guide applies.

**Competitors may be named.** VisioLab, Deligo Vision, Mashgin, Tiliter, Nomitri, GK Software, Toshiba, NCR Voyix, Diebold Nixdorf, Zippin and Amazon's checkout products may all appear by name. Every competitive fact used in this brief is public and externally verified; see §A8.4 and the research pack §8.

**No individuals, on either side.** Role descriptors only — "visioncheckout's product lead", "a member of the catering staff", "Creative Navy's researcher". The call notes carry first names on both sides; none may appear.

**No customer names.** This is the firmest rule in the brief after the outcome rule. visioncheckout's own customers must not be identified, in any form:

| Do not use | Use instead |
|---|---|
| The chemical manufacturer's name | "a chemical manufacturer's staff restaurant" |
| The automotive supplier's name | "an automotive supplier's canteen" |
| The leisure destination's name | "a large public leisure venue with several restaurants" |
| Any enterprise customer named in the procurement discussion | omit entirely |
| Sample customer names in design files | omit entirely — placeholder data |

> **Flag for the engagement lead, not for the writer.** Naming visioncheckout narrows the customer descriptors considerably: a large German leisure destination with multiple restaurants running this vendor's system is close to identifiable from the descriptor alone. The brief is written to the rule as given. If the rule is meant to be a genuine screen rather than a courtesy, that third descriptor should be softened further — "a public-facing venue serving visitors rather than regular users" carries the research point and identifies nothing. Raise once, then write to whatever is decided.

**Quotation.** Client positions in §A3.5 come from meeting notes rather than from verified recordings. They are **reported, not quoted** — write "visioncheckout's team described the current payment screens as inconsistent and unmanageable", never a quoted sentence. The single exception is §A3.5 V72, discussed there.

### A1.2 What may not be shown

**No screenshots, wireframes or design images.** The corpus is text-only on documentation pages. Describe the designs in prose.

### A1.3 Dates

**Do not place the engagement in a particular year.** No years, no months, no seasons. Sequence and duration only — "seven one-week sprints", "the three UI sprints", "the research week".

**Regulatory and standards dates are permitted and should be used.** They are domain facts, not engagement facts, and the corpus already uses them: the AIT brief carries "§14a EnWG since the start of 2024" and "Euro NCAP's 2026 rating scheme". So 28 June 2025 for the BFSG and the EAA, the 2040 grandfathering horizon, and the EN 301 549 version position in §A8.1 may all appear. **The test is whether the date locates the engagement. If it locates the law, it stays.**

### A1.4 Status

**The product is in development.** Nothing has shipped. Implementation Partnership is running now. This is the weakest status of the nine recent engagements and **no outcome of any kind may be claimed** — see §A4.

---


---

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

### Calibration — Raymarine

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

### Calibration — visioncheckout

## A4. Evidence calibration — mandatory

**V1–V12 are engagement record and may be stated plainly, but they are not outcomes.** "34 screens across 138 versions" is a fact; "34 screens transformed the product" is not.

**V13–V21 are Creative Navy-measured and are the strongest evidence in this engagement.** Required framing:

> Creative Navy conducted field research at six locations across three organisations over five days, observing 563 interactions with the system in live operation. Transaction durations were measured with a clock during observation rather than estimated or self-reported. The research also included interviews with 34 users and 13 catering staff.

Three constraints on that paragraph. **One researcher, five days** — say so; it is a focused programme, not a longitudinal one, and stating its size is what makes it credible. **The timings measure the system being replaced**, not the redesign — never let them read as a result. And **V21's "three to twelve people" is an observed consequence of a measured duration**, not an independently counted figure; write it as what it is.

**V22–V44 are observed but not quantified.** They are patterns a researcher saw and recorded, not counted events. Write them as observations — "guests regularly bow towards the screen", not "X% of guests bow towards the screen". No percentage may be attached to any of them.

**V45 must appear in the case study, not be quietly omitted.** No audit report was produced. The "before" state in this case study comes from three sources — visioncheckout's own verbal account of its problems, Creative Navy's own undelivered review of the interface, and the field research. That is a legitimate evidence base and it is weaker than an audit. Say which is which, and **never describe this engagement as including an expert review or a UX audit as a deliverable.**

**V46 and V47 are the hard limits.** No usability testing was done on the new designs, and nothing has shipped. The case study is **demonstrated problem → demonstrated response**, with the problems measured and the responses designed. It stops there.

**V106 must be described at its actual weight.** visioncheckout accepted the software recommendations and recorded the hardware ones as future requirements. That is a real and creditable outcome of the analysis, and it is **not** a claim that the product is accessible, will be accessible, or complies with anything.

**The scope question must not be written as settled.** See §A8.2. Creative Navy's reading — that the live exposure is the payment dialogue rather than blanket self-service-terminal coverage — is well argued and is contested in both directions by German commentary, and the German transposition is textually broader than the EAA English on the payment limb. **Write the analysis, not the verdict.**

**Do not describe this as a high-consequence system.** It is a canteen checkout. The locked agency sentence names the category; the case study must not import a safety posture the engagement does not support. The consequence of failure here is a queue, a wrong charge and a guest who needs help — which is enough, and is interesting precisely because it is ordinary.

### What must not be claimed

- Any throughput, speed, error-rate, satisfaction, accuracy or commercial outcome from the redesign. **None exists.**
- Any implication that the product is deployed with the new design, or in market use.
- **Any compliance, conformance or certification credential.** Creative Navy designed to published instruments. It did not certify to, audit against, or achieve conformance with EN 301 549, the EAA, the BFSG or WCAG, and it did not provide legal advice.
- Any claim that the product is accessible, or that blind guests can use it. The engagement's own assessment of the current hardware scenario is that it delivers most of the low-vision benefit and none of the blind benefit. **Carry that assessment; do not soften it.**
- Any usability or comprehension result for the new designs. Nothing was tested.
- Any safety claim, or any suggestion of regulated-safety work.
- Any figure for competitor accuracy presented as measured truth; vendor claims are citable **as claims** only.
- Any percentage attached to a V22–V44 observation.

---

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

- **Sprint = cadence. This engagement ran fourteen one-week sprints in two blocks, eight and six** — the handheld, then the command centre — **preceded by a separately scoped expert review and followed by a separate seven-sprint engagement.** "Fourteen one-week sprints" is correct; so are "the eight handheld sprints" and "the command-centre block".
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

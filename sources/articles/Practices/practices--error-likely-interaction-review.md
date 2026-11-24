# `/practices/error-likely-interaction-review`

---

## What the practice is

An error-likely interaction review is not a usability test. It is an analytical practice conducted before or between test cycles to identify which interactions are structurally error-prone — independently of whether any particular user has yet made those errors in observed testing.

The central analytical question is not "what errors have users made?" but "what does this interaction require of users, and under what conditions will that requirement produce errors?" A single confirmation step before an irreversible high-consequence action is error-likely regardless of whether any test participant has clicked through it accidentally yet. A colour-only state indicator on a device used in variable lighting is error-likely before anyone misreads it in a test. The review identifies these structural conditions analytically, so design can address them before they are tested into evidence.

For each identified error-likely interaction, the review produces three outputs:

1. **The error mechanism** — why this interaction produces errors; the structural condition that makes error likely: memory dependency (users must remember what they haven't been shown), ambiguous state (the system state required for correct action isn't clearly visible), insufficient friction (an irreversible action is too easy to trigger), information absence (required context is not available at the decision point), or single-channel communication (a signal that must be read relies on a channel that can fail under operating conditions)

2. **The error consequence** — what happens when the error occurs; classified by reversibility (can the error be corrected without consequence?) and magnitude (what is the worst-case outcome?). This classification determines the design standard: a reversible low-consequence error requires a different design response than an irreversible safety-relevant one

3. **The design requirement** — not a design solution, but the specific requirement the design must meet to reduce error likelihood to an acceptable level. In regulated contexts this requirement is formally documented and traceable to the identified hazard.

---

## When it is used

During Sandbox Experiments — the review is conducted on the existing system before any design decisions are made, producing the error profile that design must address.

During Iterative System Building — the review is applied to design prototypes to identify error-likely interactions before they are implemented, particularly for critical tasks identified through task-criticality-mapping.

In regulated medical device contexts, the review runs throughout the engagement as part of IEC 62366-1 formative evaluation. The standard requires that foreseeable use errors and misuse be identified and that design decisions be traceable to specific identified hazards. The error-likely interaction review produces this traceability.

---

## What the review examines

**Memory-dependent interactions** — interactions that require users to recall information rather than recognise it from the interface. A calibration technician who must remember which measurement sequence is current, a surgeon who must recall which parameter the rotary knob is adjusting, an officer who must remember the alert criteria for a specific goods category — all are performing memory-dependent interactions that are error-prone under time pressure or divided attention.

**Ambiguous state at decision points** — interactions where the system state required to make a correct decision is not clearly visible at the moment of decision. Configuration steps where prior values are not displayed; mode changes where the current mode is not indicated at the point where its mode-specific behaviour matters; alarm states where the triggering condition is not shown alongside the alarm.

**Insufficient confirmation friction** — irreversible or high-consequence actions that can be completed with a single interaction step. The review identifies which actions in the system are irreversible or consequential and assesses whether the confirmation friction is proportional to the consequence.

**Information absence at decision points** — critical task sequences where information required for a correct decision is available in the system but not surfaced at the point where it is needed. The user would make the right decision if they had the information; the interface provides it somewhere, but not there.

**Single-channel state communication** — critical state indicators that depend on a single communication channel (colour, sound, text, spatial position) that may fail under operating conditions. The channel failure — not user error — is the proximate cause of the resulting errors.

**Foreseeable misuse patterns** — uses of the system that were not intended but are predictable given the user population, the operating conditions, and the interface design. IEC 62366-1 requires that foreseeable misuse be identified explicitly, not just intended misuse.

---

## Evidence from engagements

**Kardion MCS Controller** — The IEC 62366-1 formative evaluation process structured the error-likely interaction review formally. Key error-likely interactions identified:
- **Flow rate adjustment via rotary knob** — single physical input controlling a clinically significant parameter; foreseeable error: inadvertent adjustment during procedure setup or equipment repositioning. Error mechanism: insufficient confirmation friction for a high-consequence action. Error consequence: incorrect blood flow delivery, potentially patient safety relevant. Design requirement: two-step confirmation (adjust → confirm) before the adjustment takes effect; the rotary knob adjustment must not produce immediate output without confirmation.
- **Min/max flow value misinterpretation** — identified in the prior Emergo by UL formative study as a specific error-likely interaction; users misread which value was min and which was max. Error mechanism: visual ambiguity in the prior display. Design requirement: the primary flow visualisation must make the min/max hierarchy unambiguous without requiring interpretation.
- **Alarm state during mute** — foreseeable misuse: a user silences an alarm and then forgets it was active. Error mechanism: alarm disappearance on mute removes the ongoing reminder. Design requirement: muted alarms must remain visually present at reduced prominence.

**deSoutter Medical / Zethon** — The operating theatre context defined the foreseeable use conditions and therefore the foreseeable misuse profile. Key error-likely interactions identified:
- **Activation state recognition** — the transition from ready to active is the highest-risk interaction in the surgical workflow; a surgeon who begins the procedure believing the instrument is in a different state than it is can produce both patient harm and instrument damage. Error mechanism: state indicator relying on colour as primary differentiator under variable lighting. Design requirement: redundant non-colour cues (spatial + icon + colour) for the activation state indicator.
- **Speed parameter adjustment during procedure** — interaction competing with primary surgical attention. Error mechanism: interaction requiring active reading of current parameter value while performing procedure. Design requirement: parameter adjustment display must be confirmable as a glance-check without interrupting workflow.

**Gexcon CFD simulation** — The error-likely interaction review identified the configuration error pattern across the simulation setup workflow. The most error-prone interactions were those where:
- Required input values were not clearly signalled as required before the simulation was initiated
- Contradictory parameter combinations were not identified before run — only discoverable in outputs that appeared valid
- The consequence was deferred (the error produced a completed simulation with incorrect outputs, not an immediate error message)
Error mechanism: information absence at the critical decision point (the simulation setup screen did not surface which values were required, incomplete, or contradictory). Design requirement: interactive configuration warning architecture surfacing incomplete and contradictory inputs before run.

**Beissbarth automotive calibration** — Error-likely interactions identified through contextual observation of calibration workflows across 5 workshops:
- **Borderline tolerance measurement confirmation** — technicians encountering measurements in the borderline zone (within range but low confidence) needed to distinguish clearly between a confirmed measurement and one requiring repetition. Error mechanism: insufficient visual distinction between tolerance zones. Design requirement: three-level measurement result communication (confirmed, borderline, out of range) with distinct visual treatment at each level.
- **Calibration sequence state tracking** — multi-step sequences where technicians needed to confirm that each step had been completed correctly before proceeding. Error mechanism: no persistent completion state visible across the sequence; technicians relying on memory. Design requirement: persistent sequence state display showing completed, current, and upcoming steps.

**Typewise AI keyboard** — The error-likely interaction review was part of the domain learning phase: Creative Navy installed and used the keyboard before beginning design work. The review identified the adoption barrier as an error-likely condition at the product level: new users transitioning from iOS native keyboard encountered an error rate substantially higher than experienced users because gestural patterns were in conflict during the transition. The error mechanism was identified as attentional competition between established motor habits and new interaction patterns — not interface ambiguity but transition-phase interference. The design requirement was an adoption framework structured around Zone of Proximal Development: introducing new gestures within reach of existing competence to eliminate transition-phase error accumulation.

**Raymarine (next-generation fixed-mount VHF; the new radio's name is never used)** — An error-likely condition found by structured walkthrough before anything was built, and found only because the walkthrough traversed screens: on the fifth day of the first exploration sprint, a scenario walkthrough of routine calling, target browsing, incoming alerts and a change of screen context identified a physical control ambiguity and caused a dedicated control study to be inserted into the next sprint (R7). The conflict: a promising AIS concept used the lower encoder to move quickly between vessel targets, the same encoder had already been assigned as the primary channel selector in the radio view, and settings would have given it a third role — so when an alert interrupted an interaction, it became unclear whether the next rotation would select a vessel, change the tuned channel or navigate a message (R37). The failure mode's specific character, recorded at the time: the action may appear to be accepted, because a visible object moves — **a mode error is therefore not necessarily accompanied by an error message** (R38). The resolution principle: the risk was characterised as structural rather than cosmetic — where an input can silently change purpose, adding better labels later cannot fully remove the ambiguity, so prevention has to happen at the allocation level, and resolving it before high-fidelity design protected the subsequent flow work from rework (R45). **No single-screen review would have found this, because the conflict only exists between screens. No quotation marks and no reported speech anywhere Raymarine appears.**

**Schone Airspace Group (uncrewed aircraft Mission Control)** — A catalogue of error-likely conditions found by review and then closed — **and these are Creative Navy's own first design candidates failing Creative Navy's own criteria, not findings about the client's existing product.** 18 findings: 9 critical, 8 major, 1 moderate, each carrying an identifier, a severity, the check it failed, the sprint in which it was revised, and the decision record that resolved it (D43). The nine critical findings are a usable taxonomy in themselves: wrong aircraft interpretation; stale telemetry displayed as current; acknowledgement shown as a completed flight state; partial offline map coverage appearing complete; measured telemetry mistaken for a manual check; the command recipient disappearing when the operator switched to the camera workspace; no response treated as a rejected command; a cross-vehicle warning with no visible owner; inspecting another aircraft silently retargeting commands; an uncertain link leaving return-to-launch looking available (D47). **Severity records the consequence of the interface ambiguity within the scripted task — not that a corresponding aircraft incident occurred. A reader must not come away thinking nine critical aircraft events happened. No quotation marks and no reported speech anywhere Schone appears.**

**Streetec kntrl 2** — An interface action with a physical-damage consequence if the vehicle is in the wrong state: before the full-deflate function is used, the wheels must be straight — *"otherwise my fenders will lay on my wheels and they break quite easily"* (S28). The guard against adjustment in motion is three independent interlocks: accelerometer-detected movement, a calibrated speed signal with a user-set threshold, and a digital input such as the handbrake, configurable as active-high or active-low; separately, a minimum pressure per axle can never be overridden — not by manual adjustment, not by a preset, not by the full-deflate function (S27).

**Egma (Dubai; Egma Order, Egma's B2B lens ordering platform)** — The dependency analysis is this practice in action: Creative Navy worked the existing configurator hands-on in a sandbox environment to establish its hidden complexity and the dependencies between configuration options, rather than reading about them (G15) — establishing which choices foreclose which others, and where in the sequence a user can be left without a recoverable path. The output is a failure mode stated precisely enough to design against — the worked example the support team gave: an optometrist tried to order reading lenses, went through half the steps, and was then told that lenses with the selected shape could not be produced and to choose a different shape; the patient did not want a different lens shape, the optometrist could not work out which parameters would allow the intended shape, and they created a support ticket instead of an order, with the support team placing the order on their behalf (G25). **This is the support team's worked example of the failure; do not generalise it into a measured frequency or pattern. No post-launch figure of any kind — the platform is online and nothing about it was measured.**

**A European manufacturer of uncrewed systems, including one-way effectors, and the tactical command-and-control software that operates them** — A catalogue of error-likely conditions for one input device, from the written case against a permanently visible touchscreen strike control. First: a single touchscreen input is not an adequate commitment gate for an irreversible action, because touchscreens are vulnerable to accidental touches, rain and moisture, gloves, vibration and device movement, palm contact, selection of the wrong control under stress, and digitizer faults — and an accidental strike command probably cannot be aborted inside the available window, particularly if the operator does not notice the error immediately (H46). Second, a pair of false-affordance findings reached independently in different parts of the interface: placing the strike and abort controls symmetrically at opposite screen edges may imply that strike is mapped to the adjacent physical key when no such mapping exists (H46); and toolbars running down both screen edges would sit so close to the bezel keys that they risk implying a button pairing that does not exist (H82). Third, the page's most reusable rule: **a visible and enabled control asserts that the action is always available, when availability may depend on connectivity, operating mode and vehicle state the control cannot see — so a permanent control may create mode confusion and encourage repeated activation attempts, where a persistent status indicator communicates readiness without implying that activation will work** (H46). And the load-bearing limb: repeated input is not feedback — it adds uncertainty rather than resolving it, because the operator cannot know whether they are retrying the same request, creating a duplicate, or acting on information that has already aged (H46). **This review was co-authored by Creative Navy's designers and the client's designers; its recommendations were not validated — the hold duration and physical-control design require human-factors and system-safety testing that was not performed — and no claim that the design prevents accidental activation or operator error may be made. No quotation marks and no reported speech anywhere this engagement appears; the register is that of a safety-engineering document.**

**visioncheckout (a German vendor of computer-vision self-checkout systems for staff restaurants and catering)** — Error-likely conditions observed in the system being replaced. An empty glass on the tray produces a charge alongside the drink it held; regular canteen users have learned to avoid this, and at the public venue staff intervene (V38). Guests taking food away sometimes leave the lid on and do not know why recognition fails (V35). The strongest entry: **a credential that is simultaneously identity, price level and payment** — an employee intending to pay by credit card forgets to present the employee card for the discount, and pays more than they should (V39). The resulting challenge to the underlying behaviour was put on the record: Creative Navy placed the keycard-pays-immediately question into the flow diagram as an explicit callout, with the counter-argument stated — double scanning risks bugs and guest frustration, and 90–95% of guests pay by keycard (V92). **visioncheckout client positions are reported, never quoted. These observations describe the system being replaced; the new designs were not tested with users, nothing has shipped, and no outcome of any kind may be claimed.**

---

## What this page must not claim

- No quotation marks and no reported speech for Raymarine, Schone or the handheld C2 engagement; visioncheckout is reported, not quoted; Streetec quotes are cleared and permitted.
- Schone's 18 findings are the design team's own candidates failing its own criteria — never findings about an existing product, and never evidence that aircraft incidents occurred.
- No claim that any identified-and-closed condition prevented a real-world error: the supportable claim everywhere on this page is that conditions were identified analytically and designs were revised.
- Egma's G25 example is a support-team account; no support-ticket volume, order-completion or error-rate figure exists for Egma, before or after launch.
- visioncheckout must not acquire a testing claim: its numbers describe interviews and observation of the system being replaced.
- No engagement dates — sequence and duration only.

---

## Relationship to other practices

Error-likely interaction review draws on:
- `/practices/task-criticality-mapping` — critical tasks are the primary scope; error likelihood is most consequential where criticality is highest
- `/practices/state-and-transition-review` — state ambiguity is one of the primary error mechanisms; the state review provides the evidence
- `/practices/cognitive-load-analysis` — high cognitive load under operational conditions is a primary predictor of error likelihood

Error-likely interaction review directly informs:
- `/practices/edge-case-and-degraded-mode-analysis` — the worst-case scenarios for the most error-prone interactions under non-nominal conditions
- `/capabilities/error-reduction-and-recovery-design` — this practice provides the diagnostic evidence for that capability

In regulated contexts:
- IEC 62366-1 use-related hazard identification and foreseeable misuse analysis
- FDA human factors guidance on use error analysis

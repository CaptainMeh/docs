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

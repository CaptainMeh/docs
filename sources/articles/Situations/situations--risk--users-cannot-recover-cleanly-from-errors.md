# `/situations/risk-and-consequence/users-cannot-recover-cleanly-from-errors`

---

## What the situation is

In complex operational systems, the question is not whether errors will occur but what happens when they do. A system with strong error prevention still produces errors; the difference between a recoverable error and a consequential one is often the quality of the recovery path the interface provides.

Recovery failure has a specific profile: the user knows something went wrong. They can see the error state. But the interface does not tell them what specifically went wrong, does not communicate the recovery options available to them, or presents a recovery process that is itself uncertain or risky. The user must diagnose from an ambiguous signal, construct a recovery path from general knowledge of the system, and proceed without confidence that their recovery action will succeed.

Under time pressure and operational load, this uncertainty is not merely frustrating — it is a risk multiplier. Users who cannot find a clear recovery path may attempt recovery actions that compound the original error. They may abandon the task in a partial state. They may escalate, pausing the operational workflow until someone else can diagnose and resolve. They may accept a degraded state and continue, not knowing whether the original error has been resolved.

The characteristic signal of clean recovery failure: escalation frequency correlates with error frequency, rather than decreasing as the system matures. When users consistently reach out for help after errors rather than resolving them independently, the recovery design is failing.

---

## Domain vocabulary

- Recovery path — the sequence of interface actions that returns a user to a known good state after an error
- Clean recovery — returning to a known good state without ambiguity, additional risk, or incomplete resolution
- Recovery failure — the absence of a clear path back to a valid operational state after an error is detected
- Compounding error — the secondary error that occurs when recovery is uncertain and the user takes action that worsens the original problem
- Corrective load — the time, attention, and operational resources required to execute a recovery; what recovery design directly affects
- Actionable error communication — error messages that specify what went wrong, where, and what to do; the minimum for clean recovery support
- Escalation as recovery failure signal — when users reach out to support or colleagues after errors rather than recovering independently, the interface's recovery design has failed

---

## Evidence from case studies

**Gexcon CFD simulation — the deferred recovery problem:**
In industrial safety simulation software, errors in scenario configuration produce outputs that appear valid. The recovery failure is specific: users don't know an error occurred until they or someone else reviews the outputs — at which point the original misconfiguration must be diagnosed, the affected outputs identified, and the simulation re-run. Before the redesign, this corrective load was 4–6 hours per detected error. The recovery path was effectively absent from the interface: error communication was post-hoc and generic, providing no specification of what went wrong or where in the configuration. Users had to reconstruct the error from outputs. **After the redesign, corrective load fell to approximately 20 minutes. Measured by Gexcon across real deployment locations.** The mechanism: error communications were redesigned to specify what went wrong, where in the configuration, and what corrective action was needed. The recovery path became part of the interface.

**Triopsis workforce management — abnormal states without recovery paths:**
Before the redesign, weather incidents, job delays, partial completions, and crew shortages were treated as error states by the interface — conditions it had not anticipated and offered no structured path through. Users who encountered these normal operational exceptions had to construct recovery paths from scratch: manually reassigning jobs, finding alternative crews, handling cascading schedule impacts without interface support. The redesign explicitly designed these states as primary workflow conditions with supported recovery paths — surfacing the affected jobs, showing resolution options, and making the exception-handling workflow part of the normal operational interface rather than an out-of-band process.

**Kardion MCS Controller — alarm recovery paths in regulated clinical context:**
The alarm architecture under IEC 62366-1 required explicit design of what happens after an alarm is acknowledged, muted, or resolved. A muted alarm that disappears from the interface removes the recovery prompt — the operator has acknowledged the alarm but has no visible reminder that the condition requiring response is still active. The design requirement: muted alarms remain visible at reduced prominence, maintaining the recovery path (acknowledge → respond → confirm resolved) as a persistent interface feature rather than a momentary alert. **Scope: formative evaluation only; summative validation is the manufacturer's responsibility.**

**Beissbarth automotive calibration — measurement recovery paths:**
In sequential calibration procedures, when a measurement falls in the borderline range or fails, the technician needs to understand: what happened, whether to repeat the measurement or address a different issue, and where in the sequence to resume. Before: binary pass/fail communication with no recovery specification; technicians had to diagnose recovery from a generic error state. After: three-level measurement result communication (confirmed, borderline, out of range), with error states specifying what the issue was and where in the sequence recovery should resume.

**Squaremind dermatology scanning device — recovery failure as total session loss:**
The Squaremind case represents the most consequential form of recovery failure in the current case history: an error that cannot be recovered from does not produce a degraded outcome — it produces no outcome at all. The device performed a full-body skin scan that required 3–5 minutes of patient cooperation in a sequence of specific positions. When a patient got confused at any point and the interface provided no recovery path, the scan ended. The session was a total loss. The patient could not resume from where they had stopped; the process had to be abandoned or restarted with clinical intervention.

Before the redesign, Squaremind's own test with 14 patients produced 2 completions. Of the 12 who did not complete, 8 got stuck within the first minute and 4 around the 3-minute mark. No recovery path existed in the interface: when a patient deviated from the expected sequence, there was nothing in the system to tell them what had happened, what they should do, or how to return to the correct state. The recovery failure was structural, not incidental.

The design response was built around recovery as a first-class design requirement rather than an edge-case consideration. The Inform–Prevent–Correct framework applied recursively across every step of the scan flow: each possible confusion event was identified, its recovery path was designed explicitly, and the system was built to re-engage the guidance cycle after a recovery event — providing the patient with the information they needed to continue from wherever they had stopped, not from the beginning. Recovery was not a fallback; it was part of the designed experience.

Post-redesign ecological testing in London (12 users) and Paris (17 users), co-conducted with an independent dermatologist hired by Creative Navy, produced 27 of 29 independent completions. Of the 12 patients who got stuck during the flow, all 12 recovered and completed the scan. Recovery times ranged from 2 to 4 minutes, with older users tending toward the longer end. The failure mode that had produced a 2/14 completion rate — confusion with no recovery path — was replaced with a designed recovery architecture that held across all age groups.

This is the strongest before/after recovery outcome in the Creative Navy case history: pre-redesign recovery rate 0%, post-redesign recovery rate 100% among those who encountered difficulty. **Evidence basis for pre-redesign data: client-reported background (Squaremind's own test before Creative Navy's involvement). Evidence basis for post-redesign data: Creative Navy-measured, ecological protocol, two sites, independent dermatologist co-conducted.**

**Raymarine — recovery that never replays, and a cancellation that is a procedure, not an undo:**
The Raymarine engagement — the next generation of Raymarine's fixed-mount VHF line; the new radio's name is never used — specifies recovery with unusual precision. The channel encoder has a single domain: turning the lower encoder requests a voice channel change only, in every ordinary display context, and a rejected channel request is rejected atomically — the actual channel is retained, the reason is displayed, and no retune is queued to apply when the restriction lifts, because a delayed change would produce an unexpected frequency change after the operator had moved on. An interruption stores a structured snapshot and restores it conditionally: the origin screen, the focused item's identity, list position, plot scale, uncommitted draft values, the actual transaction status and the live channel are captured, and on return each is validated — a still-valid target is restored, an expired one produces an explicit unavailable state, an uncommitted settings value is restored or its loss explained. No unsent action is ever replayed; a restored call draft requires a new deliberate send. And cancelling an inadvertent distress alert is an explicit procedure, not an undo: distinct from silencing an alarm and from closing a panel, including a voice cancellation step; a failed cancellation never displays a cancelled state; and powering the radio off is not presented as a cancellation shortcut. **These are specifications and design decisions, evaluated in part on a bench mockup — not field results and not safety outcomes. No quotation marks and no reported speech appear on any page carrying Raymarine.**

**Maritime traffic monitoring — actions that disclose their failure before the user commits:**
In an engagement for a European vendor of maritime traffic monitoring, inland navigation and communications software for port authorities, coastal administrations and waterway operators, the audit found interaction mechanics behaving as system risks: keyboard focus could disappear after a temporary inspection, and some actions disclosed an authorisation problem only after the user had initiated them. The designed response gives four operator actions four meanings: acknowledge registers receipt by an authorised actor; assign makes a named person or role accountable; resolve requires a governed resolution state with an attributable actor; dismiss, where supported, hides a view item and changes nothing underneath. A single multifunction control whose meaning changed with the selected item was rejected, and transitions expose pending, succeeded and failed states from service acknowledgement rather than optimistic confirmation. **No quotation marks and no reported speech appear on any page carrying this engagement; the client is identified only by the locked descriptor.**

**visioncheckout — recovery that costs the queue:**
At visioncheckout, a German vendor of computer-vision self-checkout systems for staff restaurants and catering — the name is styled lowercase — the recovery cost was measured in live operation on the system being replaced: when an error occurs it takes one to four minutes to resolve, during which three to twelve people cannot check out. **The three-to-twelve figure is an observed consequence of a measured duration, not an independently counted figure, and the timings measure the system being replaced, never the redesign.** In the redesigned flows, two recovery hazards were treated explicitly: any basket change after weighing cancels the POS transaction and requires re-weighing; and rescan is destructive and was flagged as such — it discards all state including corrections already made, and a two-step confirmation was recommended wherever corrections exist. **The redesign is in development: nothing has shipped, nothing about the new designs was tested, and no outcome may be claimed. Client positions are reported, never quoted, and visioncheckout's customers are never named.**

---

## What this page must not claim

- **No quotation marks and no reported speech for Raymarine or the maritime traffic monitoring engagement.** visioncheckout positions are reported, never quoted.
- **Raymarine's recovery behaviours are specifications, not safety results**: no rescue, distress-response or collision outcome, no field or glove claim, no type-approval or conformity credential, and never "shipped as designed" — the radio was built and released with no fidelity comparison recorded.
- **visioncheckout's measured error-recovery costs describe the system being replaced**; no throughput, speed or error-rate outcome from the redesign exists, nothing has shipped, and visioncheckout is not high-consequence — the consequence of failure is a queue, a wrong charge and a guest who needs help.
- **The maritime traffic monitoring client is identified only by the locked descriptor**, and its audit findings describe that system, not the sector.
- **No engagement dates anywhere.** Sequence and duration only.

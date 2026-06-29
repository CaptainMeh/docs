# `/capabilities/error-reduction-and-recovery-design`

---

## Domain vocabulary

- Use-related error / use-related hazard — errors caused by interface design rather than by user negligence; the category IEC 62366-1 is designed to address
- Foreseeable misuse — uses of a device that were not intended but are reasonably predictable; IEC 62366-1 requires these to be identified and addressed
- Error prevention vs. error tolerance — the design distinction between preventing an error from occurring and accepting that it will occur while making recovery easy; the appropriate strategy depends on the consequence
- Confirmation friction — the deliberate addition of interaction steps to reduce the likelihood of irreversible high-consequence actions being taken accidentally; calibrated to the magnitude of the consequence, not applied uniformly
- Recovery path — the sequence of interface actions that allows a user to return to a known good state after an error; as important to design as error prevention
- Silent error — an error that completes without surfacing to the user; the most dangerous category because users continue as if the system is functioning correctly
- Acceptable residual risk — the level of risk that remains after all practical mitigations have been applied; the regulatory target in medical device contexts is not zero risk but acceptable residual risk
- Predictive error surfacing — making a future error visible before it occurs; Triopsis predictive conflict indicators and Gexcon configuration warnings both use this mechanism
- Error surface — the set of possible interactions that can produce errors; reducing the number of interactions required for a task reduces the error surface proportionally
- Actionable error message — an error communication that specifies what went wrong and what to do; a message that communicates only that something went wrong is not actionable
- Use-related risk analysis — the formal process of identifying which interactions can produce harm and what design mitigations address them

---

## Evidence to draw on

### Gexcon CFD simulation (silent error prevention — most measured outcome)
- The error profile was specific to expert simulation software: misconfigured simulations run to completion and produce outputs that appear valid. The error surfaces when the assessment is challenged, re-run, or — in the worst case — during an incident investigation involving a safety assessment built on incorrect simulation outputs.
- This is a silent error with deferred consequences — the most difficult error type to address because the interface must interrupt a process that would otherwise succeed.
- The three-point warning architecture:
  - **During setup**: required values that are absent surfaced as warnings before the simulation is initiated
  - **At contradictory inputs**: configuration values that are internally inconsistent flagged before run
  - **Post-detection**: errors identified during processing communicated with what went wrong, where in the configuration, and what corrective action is needed
- Each warning was designed against the actionability standard: user must understand both the problem and the next step.
- **Configuration errors: 5–8 → 1–2 per simulation. Measured by Gexcon in real deployments.**
- **Corrective load per error: 4–6 hours → approximately 20 minutes. Measured by Gexcon.**
- These are the strongest quantified error reduction outcomes in the portfolio — measured in production deployments, not usability testing.

### Triopsis workforce management (predictive error prevention)
- The scheduling error profile: a conflict between two overlapping job assignments that becomes visible when it is imminent requires reactive crisis intervention under maximum operational pressure. The cognitive load of crisis management compounds the likelihood of further errors.
- Predictive conflict indicators: future conflicts surfaced before they become present crises. The scheduler sees the problem when it can be resolved without urgency, not when it requires emergency intervention.
- **This is error prevention at the planning stage, not error correction after the fact.** The design mechanism shifts the detection point from crisis to planning — a structural intervention, not an alert.
- Field technician compliance component: safety-relevant procedural steps surfaced at the right moment in the field workflow, with dependencies highlighted. The design ensures technicians encounter required steps in context rather than relying on memory of procedure.
- **Support ticket "how can I" questions fell to approximately 5% of previous volume. Client-reported.** Some proportion of this reduction reflects fewer errors requiring resolution.

### Kardion MCS Controller (IEC 62366-1 use-related hazard mitigation)
- The IEC 62366-1 process for error reduction: identify use-related hazards → design mitigations → document traceability from hazard to mitigation → evaluate through formative testing → confirm mitigation is effective
- This process forces the design conversation to begin with "what errors are possible and what are their consequences" rather than "what interactions should we improve." The error profile is identified before any design decisions are made.
- Rotary knob confirmation design: a specific error reduction decision for flow rate adjustment. The interaction requires a deliberate two-step confirmation (adjust → confirm) rather than a single action. The friction is proportional to the consequence of unintended adjustment during a cardiac procedure. The design acknowledges that operators will sometimes interact with the device accidentally and must not be able to produce a clinical consequence from a single unintended touch.
- Layout stability as an error reduction measure: if the min/max flow visualisation shifts position across view transitions, surgeons relying on spatial memory may read the wrong element as the primary value. The no-position-shift standard is an error prevention measure grounded in the clinical use scenario.
- **FDA approval: design passed evaluation as submitted, no design changes required.** The use-related hazard mitigation process was correctly structured.
- **Scope: formative evaluation only. Summative validation and regulatory submission are the manufacturer's responsibility.**

### deSoutter Medical / Zethon (foreseeable misuse addressed)
- Foreseeable misuse identification from surgeon sessions and competitor benchmarking: the most common misuse patterns in surgical instrument operation were state misinterpretation (operating at incorrect parameters because the current state was not clearly read) and activation under incorrect conditions (initiating the instrument before it had reached the correct operating state).
- Both misuse patterns were addressed through the redundant cue architecture: spatial position + icon form + colour for every critical state. The failure of any single channel under operating conditions does not remove the signal; the probability of simultaneous failure of all three is materially lower than single-channel failure.
- Recognition-over-recall as an error reduction standard: requiring users to recall the meaning of a state indicator under divided attention in an operating theatre is a foreseeable misuse vector. Designing for recognition — pattern-matching rather than interpretation — removes that vector.
- **Surgeon-reported from design review sessions: state verification reduced to brief glance recognition; parameter adjustments no longer interrupted surgical workflow. Not post-deployment measurement.**

### Beissbarth automotive calibration (measurement error reduction)
- The calibration error profile: a measurement taken under borderline conditions (technician moved slightly, lighting changed, equipment not fully stabilised) may fall within the acceptable range and be recorded as valid when it is not. Repeated measurements are the primary corrective mechanism — taking multiple readings and comparing them.
- Before redesign: repeated measurements were a regular occurrence (client-measured; exact frequency not available for publication). The design response was state communication that made measurement confidence visible: borderline tolerance values displayed distinctly from confirmed values, error conditions communicated with sufficient clarity to interrupt the calibration sequence rather than allowing a borderline measurement to proceed.
- **Repeated measurements reduced. Direction confirmed by client measurement; exact figure not available.**
- **Calibration time: 18 → 12 minutes per vehicle. Client-measured across 8 production deployment locations.** Part of this improvement is error reduction: fewer repeated measurements and fewer interrupted calibration sequences.
- **Training eliminated — Beissbarth's commercial deployment model no longer includes onboarding training. Client-reported.** Training reduction is partly an error reduction outcome: when the interface communicates calibration state clearly enough that incorrect actions are prevented by recognition, training requirements reduce.

### Dancerace / Jacko (confirmation friction in financial workflows)
- The error profile in a three-party invoice management portal: actions that are technically reversible in the system but operationally consequential in the real-world commercial relationship. A supplier who rejects an invoice before understanding the terms creates a real relationship problem even if the rejection is technically rescindable.
- The "accepted" invoice status — a deliberate error-tolerance design decision: real debtors routinely acknowledge obligations informally before committing to payment. A status that translates real-world informal acknowledgement into a system state reduced the error rate of premature formal actions by accommodating the actual commercial behaviour.
- Confirmation patterns for irreversible actions: the design distinguished between actions that are reversible (managed through clear undo paths) and actions that are genuinely irreversible or operationally significant (managed through proportional confirmation friction).
- The principle: confirmation friction should be proportional to consequence and irreversibility, not applied uniformly. Uniform confirmation friction for all actions trains users to click through without reading.

### Typewise AI keyboard (error rate as directly measured primary outcome)
- **Error rates halved vs. iOS native keyboard baseline. Directly measured, controlled experiment, 60 users.**
- The mechanism: hexagonal key layout providing larger key surface, reducing mis-taps; AI-powered error correction; adoption framework that brought users to full capability through progressively learned gestures rather than all at once.
- The domain learning finding that preceded the design: Creative Navy installed and used the keyboard for several days before the engagement. This identified that the hexagonal layout provided genuine error reduction (larger key surface reduces mis-taps) — confirming that the unusual layout was load-bearing and should not be changed.
- **Typing speed: 38 WPM → 47 WPM. Directly measured.** Speed improvement is partly an error reduction outcome: fewer mis-taps means fewer corrections, which reduces total time.

### Squaremind dermatology scanning device (in-process guidance recovery — strongest process-level recovery outcome)

- The error profile was specific to patient-operated sequential scanning: when a patient deviated from the prescribed position or sequence, the existing interface had nothing to offer. The session either ended or required clinical intervention — the latter breaking the product's commercial premise. The "error" in this context was not a data entry mistake or a misconfiguration. It was a patient getting confused mid-procedure in a physical process that had no tolerance for unrecovered deviation.
- This is a recovery design problem rather than an error prevention problem in the traditional sense. Prevention is part of the solution (the Prevent layer of the Inform–Prevent–Correct framework addresses anticipated confusion events before they occur), but the structural condition of the product — a first-time user, alone, performing a novel physical process — means that some confusion events will occur regardless of prevention quality. The design must make recovery possible, not just prevention thorough.
- **Pre-redesign: 14-patient test produced 2 completions; 0 recoveries among the 12 who got stuck. Client-reported background — Squaremind's own test before Creative Navy's involvement.**
- The Inform–Prevent–Correct framework addressed recovery as a first-class architectural element at every step of the scan flow. The Correct layer specified, for each step: when correction is needed, how the patient is guided back to the correct state, and what the system does after a successful correction to re-engage the guidance cycle. Recovery was recursive: a correction event re-engaged the full cycle for the step the patient was recovering into, so that a single confusion event did not compound into an unrecoverable sequence.
- **Post-redesign: 27 of 29 patients completed the scan independently. 12 patients got stuck; all 12 recovered. Recovery times 2–4 minutes, timed to the second. Evidence basis: Creative Navy-measured, ecological protocol, two sites, independent dermatologist co-conducted.**
- The Squaremind recovery outcome is the strongest process-level recovery evidence in the portfolio: pre-redesign recovery rate 0%; post-redesign recovery rate 100% among patients who encountered difficulty. It is distinct from the Gexcon recovery evidence (which measures corrective load reduction for data configuration errors) and from the Kardion evidence (which concerns alarm recovery paths in a regulated clinical device). The Squaremind recovery is in-process physical guidance recovery — a category not represented elsewhere in the case study set.
- **IEC 62366-1 scope: Creative Navy's role was formative evaluation. The ecological testing was formative activity structured to support Squaremind's usability engineering process. Summative validation and regulatory submission are Squaremind's responsibility.**

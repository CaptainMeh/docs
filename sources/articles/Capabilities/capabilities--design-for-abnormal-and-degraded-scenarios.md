# `/capabilities/design-for-abnormal-and-degraded-scenarios`

---

## Domain vocabulary

- Abnormal conditions / degraded mode / fault state — the conditions that deviate from the intended operating state; in high-consequence contexts, primary design targets, not edge cases
- Edge case as primary design target — the framing shift that distinguishes this capability from standard interface design
- Fault recovery / recovery path — the interface behaviour that supports users in understanding a fault state and returning to a known good condition
- Alarm hierarchy / priority tiering — the organised structure of alerts by urgency and consequence; without hierarchy, everything looks equally important and nothing is acted on
- Sensor fault / calibration drift / data integrity failure — specific fault types in embedded systems; each requires explicit interface behaviour
- Foreseeable misuse — IEC 62366-1 concept; faults and misuses that are foreseeable must be identified and addressed in the design; not all use-related hazards are deliberate
- Hazard-related use scenario — the IEC 62366-1 framework for identifying situations where interface failure produces patient harm; the design must address each identified scenario
- Graceful degradation — the system continues to function at reduced capability rather than failing completely or presenting an unintelligible state
- Redundant cues — multiple independent signals for the same critical state; essential when any single signal may fail under operating conditions (colour under variable theatre lighting; touch under vibration)
- Silent failure — a fault that does not surface to the user; the most dangerous failure mode in embedded systems, because users continue as if the system is functioning correctly
- Sensor cadence — the update interval of a sensor or data source; when multiple sources update at different rates, presenting them simultaneously can create a display that reads as unstable or contradictory

---

## Evidence to draw on

### Elsner Elektronik / Cala Touch KNX (consumer embedded — sensor faults as routine conditions)
- The smart home environment regularly produces conditions that the interface must handle without alarming ordinary users: sensors in fault state, calibration drift from temperature or humidity changes, delayed sensor readings during firmware update cycles
- These were identified as design targets before any interaction design began — through analysis of how KNX sensors behave in real installations, not from user complaints about specific faults
- Dual-priority alert system: two visual and auditory notification levels (general alerts vs. critical notifications requiring immediate attention). The priority hierarchy was designed to prevent alert fatigue from low-priority sensor notifications, while ensuring critical conditions (complete sensor failure, safety-relevant state changes) still surface
- Animation timing aligned with firmware update intervals — a specific engineering constraint: visual state changes must never drift out of sync with actual thermal values during the firmware's processing cycle. This is a silent failure prevention measure.
- Sensor fault display deliberately calibrated: informative without alarming for ordinary users who have no technical background and no ability to fix the fault; actionable for the systems engineer who can.

### Torqeedo maritime HMI (sensor cadence mismatch — the central design problem)
- Multiple sensor systems updating at different rates: propulsion motors, battery banks (40–200 kWh), generators, and conversion units each have different telemetry frequencies. Presenting them simultaneously without a synchronisation architecture creates a display that reads as unstable and contradictory to a captain managing the vessel.
- The resolution: a grid structure that synchronises the different cadences into a unified display rhythm — captains perceive one coherent system, not three competing data streams. This is the abnormal-condition-prevention measure built into the nominal design.
- Night operations designed explicitly: tested during sea trials through early morning conditions; the relief crews experience when information remains stable during active vessel manoeuvring was a specific finding that shaped stability and predictability requirements
- Storm conditions observed during sea trials — the interface was not just tested under controlled conditions but encountered actual heavy weather

### Cox Marine cluster displays (multi-engine fault scenario testing)
- Scenario testing during Concept Convergence deliberately explored a multi-engine fault scenario — a situation where one or more engines in a six-engine configuration develop fault conditions simultaneously
- The test revealed layouts that made fault presence visible but didn't direct attention to the priority engine. Multiple designs that had passed nominal-state evaluation failed this test because they distributed attention evenly rather than directing it to what mattered most.
- Resolution: dedicated fault-summary area surfacing the highest-priority condition across all engine tiles, plus alarm state highlighting per tile. The structure communicates: something is wrong, and this is where.
- Military night vision mode: an absolute constraint — the display must be operable under night vision goggles, which require specific luminance and contrast ranges. Any design solution that violated this constraint was eliminated regardless of its nominal-state performance.

### Kardion MCS Controller (regulated alarm architecture under IEC 62366-1)
- The alarm architecture was not a design preference — it was governed by IEC 62366-1 requirements for alarm management, derived from the identified use-related hazards
- Requirements included: priority tiering (alarms ranked by clinical urgency); visual differentiation between alarm priority levels (not just colour — IEC 62366-1 requires colour not be the sole differentiator); mute behaviour (muted alarm must remain visible; the system must not allow a muted alarm to be forgotten); alarm state visibility during normal operation (the absence of alarm must be as visible as its presence)
- Layout stability as an abnormal-scenario design requirement: the design standard (no element shifts position across any view transition) exists specifically because surgeons build spatial memory during procedures and depend on that memory when the clinical situation demands rapid response. Any element that shifts position during a view transition — even to accommodate new information — breaks that spatial memory.
- **FDA approval as the process outcome: the alarm architecture contributed to the design passing FDA evaluation as submitted.** Not a specific alarm-design claim but confirmation that the overall process, including alarm design, satisfied the regulatory review.

### deSoutter Medical / Zethon (recognition under divided attention as abnormal standard)
- The operating theatre is the abnormal condition — not a situation where a device occasionally encounters challenging conditions but the device's normal environment, which is inherently abnormal relative to controlled testing conditions
- Variable theatre lighting: a surgical theatre's lighting changes during a procedure as overhead lights are repositioned, surgical headlights are adjusted, and the overhead field illumination varies. Colour as a primary state indicator fails under these conditions.
- Resolution: redundant non-colour cues (spatial position + icon form + colour). Every critical state communicated through three independent channels, so the failure of any single channel under theatre conditions does not remove the signal.
- Divided attention: surgeons' primary attention is on the surgical field; device interaction occurs through brief glances. The design must support recognition — reading the state of the device in a fraction of a second — rather than recall (remembering what a state indicator means) or interpretation (working out what a visual display is showing).
- 8 surgeons in structured review sessions confirmed state verification reduced to brief glance recognition. **Surgeon-reported from design review sessions, not post-deployment measurement.**

### Gexcon CFD simulation (deferred fault — configuration errors with invisible consequences)
- Abnormal scenarios in expert industrial software have a specific character: the error is not immediately visible. A misconfigured simulation runs to completion and produces outputs that look valid. Those outputs feed into a safety assessment. The error surfaces only when the assessment is challenged, re-run, or — in the worst case — during an incident investigation.
- This is a silent failure of a specific type: not a system failure that the interface should signal, but a user error that the interface failed to prevent.
- Before redesign: 5–8 configuration errors per simulation, each requiring 4–6 hours of corrective work. The safety assessment downstream of multiple error-correction cycles carries structural uncertainty.
- The design response was specific: interaction architecture that makes required values visible during scenario setup, surfaces warnings for incomplete or contradictory input, and specifies the system's behaviour when configuration errors are detected — rather than presenting errors as after-the-fact notifications.
- **Configuration errors: 5–8 → 1–2. Measured. Corrective load: 4–6 hours → approximately 20 minutes. Measured.**

### Beissbarth automotive calibration (sequential procedure interruption by fault state)
- Calibration procedures are sequential — each step depends on the previous one, and the technician must understand the current step's state before proceeding
- Fault conditions in a calibration sequence: borderline tolerance values (measurement within range but below confidence threshold), measurement failures (sensor unable to read), and equipment errors (device not communicating correctly) must each be communicated distinctly because each requires a different corrective action from the technician
- The design challenge: fault states must be communicated unambiguously to technicians who are moving around the vehicle, reading the display from 2–3 metres, under variable lighting, with tools in hand. The fault state cannot require stopping, approaching the display, and reading carefully — by the time the technician does this, the calibration sequence may have timed out.
- State communication standard: unambiguous state across all three device types, including fault states, under the full range of operating conditions.

### Squaremind dermatology scanning device (physical process deviation as abnormal condition)

- The abnormal condition in patient-operated scanning is structurally distinct from all other types in this set. In Elsner, Torqeedo, Cox, Kardion, deSoutter, Gexcon, and Beissbarth, the abnormal condition is a system or data fault — sensor failure, misconfiguration, alarm state, degraded hardware. In Squaremind, the abnormal condition is a user-state deviation: the patient moves incorrectly, loses their position in the sequence, or fails to follow a transition instruction. The system itself is functioning correctly; the deviation is human and physical.
- This requires a different design response from fault communication. The interface cannot simply surface a state indicator; it must guide the patient from their current (incorrect) physical state back to the required one — in real time, without a clinician present, for a patient who may be anxious, elderly, or unfamiliar with the device.
- The design response was the Correct layer of the Inform–Prevent–Correct framework: for every step in the scan flow where a patient could deviate, the design specified what the interface must communicate when the deviation occurs, how to guide the patient back to the correct state, and what the system must do after a successful recovery to re-engage the guidance cycle.
- Abnormal condition identification preceded design: the Inform–Prevent–Correct framework required identifying, at every step, which physical deviations could occur, what their consequences would be (scan interrupted, robot arm stops, session ends), and what the recovery path must be. This is the same identification-before-design-decisions principle used in the IEC 62366-1 hazard analysis — applied to a sequential physical process rather than a safety-critical device state.
- **Pre-redesign: 14-patient test by Squaremind produced 0 recoveries from deviation events. Client-reported background.**
- **Post-redesign: 12 patients deviated during the 29-user ecological test; all 12 recovered. Recovery times 2–4 minutes. Creative Navy-measured, ecological protocol.**
- **IEC 62366-1 scope: Creative Navy's role was formative evaluation. Summative validation and regulatory submission are Squaremind's responsibility.**

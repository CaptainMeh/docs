# `/failures/error-and-recovery-failures/recovery-paths-are-weak`

---

## What the failure is

Recovery paths are the designed interface structures that return users from error and fault states to valid operational conditions. Weak recovery paths fail in one of several ways: they don't exist at all (the interface presents an error state with no next step); they exist but are generic (the interface says something went wrong without specifying what or what to do); they exist and are specific but don't cover all error types the system can encounter; or they lead to states that are themselves ambiguous (the user follows the recovery path but can't tell whether they've succeeded).

The characteristic operational consequence of weak recovery paths: escalation. When users encounter an error or fault state and the interface offers no actionable next step, they contact support, contact colleagues, or contact the prior-stage party. The escalation frequency is the operational cost of the recovery design failure. The workaround infrastructure that users build around error states — the informal procedures, the "if this happens, call this person" institutional knowledge — is the accumulated evidence of a system whose designed recovery paths are insufficient.

---

## Distinguish from adjacent failures

**Errors-are-hard-to-correct** — that failure concerns correction difficulty when paths exist. This failure concerns the structural adequacy and completeness of paths. In practice, hard-to-correct and weak-recovery-paths compound: when recovery paths are weak, correction is necessarily harder.

**Edge-cases-break-the-system** — that failure concerns the system failing to handle non-nominal inputs. This failure concerns what the interface provides for recovery when things do go wrong, regardless of cause.

---

## What produces this failure

**Recovery not designed** — the system was designed for the nominal workflow and error states were not treated as first-class design targets. When errors occur, the interface has nothing specific to provide. The design stopped at the point of error detection.

**Generic recovery instructions** — the interface communicates that an error occurred (an error message, an alert, a flag) but the message is non-specific: "an error occurred," "the action could not be completed," "contact support." These messages satisfy the requirement that errors be communicated; they do not satisfy the requirement that recovery be supported.

**Incomplete coverage** — recovery paths exist for some error categories but not others. Users in the covered categories can recover; users in uncovered categories cannot. The incompleteness is often invisible: users don't know which category their error falls into until they discover their error has no recovery path.

**Recovery path ambiguity** — the recovery path exists and is specific but doesn't confirm success. The user takes the specified action; the interface returns to a normal-looking state. The user does not know whether the error was resolved or whether it is now hidden rather than corrected.

**Recovery requiring external knowledge** — the recovery action requires information the interface doesn't provide. The user is told what to do but not given the information needed to do it: "re-enter the configuration values" without the prior values being visible; "restore the previous version" without access to what the previous version contained.

---

## Domain vocabulary

- Recovery path — the designed interface sequence that returns from an error or fault state to a valid operational state
- Structural recovery support — recovery that is built into the interface as a first-class design target, not handled through escalation or workaround
- Generic recovery instruction — a recovery prompt that communicates error occurrence without specifying the error type or the corrective action
- Recovery coverage — the proportion of error types that have designed recovery paths; incomplete coverage leaves some error categories structurally unsupported
- Recovery confirmation — the signal that the recovery action was successful; the state is now valid
- Escalation as recovery failure signal — when users contact support or colleagues after encountering errors, the interface's recovery design has failed
- Graceful degradation — operating at reduced capability during a fault state rather than requiring complete recovery before resuming

---

## Evidence from case studies

**Gexcon CFD simulation — recovery path added through error communication redesign:**
Before the redesign, configuration error messages in the simulation platform communicated that something had gone wrong without specifying what or where. The recovery path was implicit: the user needed to find the error independently, understand what value should have been different, make the change, and re-run the simulation. This was recovery without structural support — the user was performing the recovery entirely from their own knowledge and judgment, with the interface providing no guidance. **Corrective load per error: 4–6 hours (measured before redesign).** The redesign added error-specific communication: what went wrong, where in the configuration, and what corrective action was needed. **Corrective load fell to approximately 20 minutes (measured after redesign).** The mechanism was specifically recovery path support: the redesigned error communication was a recovery path, not just an error signal.

**Triopsis workforce management — abnormal conditions as recovery-requiring states:**
Weather incidents, partial completions, scheduling conflicts, and crew unavailability were error states without designed recovery paths in the pre-redesign system. The interface communicated the abnormal condition; it provided no structure for resolving it. Schedulers who encountered these states were constructing their own recovery procedures in real time — determining what the options were, what the constraints were, and what the resolution should be — without interface support. The redesign treated these conditions as primary workflow states with designed recovery structures: affected jobs surfaced explicitly, resolution options presented contextually, cascade effects visible. Recovery from abnormal conditions became a designed workflow rather than an improvised one.

**Kardion MCS Controller — alarm recovery sequence:**
The alarm architecture explicitly designed the complete recovery path for each alarm type: the sequence of actions that moved from alarm active → alarm acknowledged → condition addressed → alarm resolved. The path required a confirmation step that the condition was resolved — not just that the alarm had been seen. Without this step, a user who acknowledged an alarm and addressed the condition had no confirmation that recovery was complete. The visible muted-alarm state was specifically the interface mechanism that prevented the recovery path from having a gap between "alarm silenced" and "recovery confirmed." **Scope: formative evaluation only.**

**Elsner Elektronik — fault recovery for non-technical users:**
The consumer smart home controller context required recovery paths calibrated for non-technical users who could not perform technical remediation but needed to know what to do. The recovery path for sensor faults was specifically designed to be actionable without technical knowledge: communicate the fault state clearly, indicate the correct next action (contact an engineer), and distinguish this from conditions requiring no action (calibration drift within acceptable range). The recovery path was not "fix the fault" — that was outside the user's capability — but "know what to do next." This is recovery path design for a constrained recovery capability: the interface must bridge the gap between detecting the problem and handing it to the person who can fix it.

**Squaremind dermatology scanning device — absent recovery path producing total session loss:**
The Squaremind case is the most extreme instance of "recovery not designed" in the current case history. The scanning process was sequential and time-bounded: a patient standing in prescribed positions while a robot arm scanned their body, guided by an embedded screen. Any confusion event that the patient could not resolve independently ended the session — either through abandonment or through clinical intervention that broke the product's operational premise. The interface had no recovery mechanism at all: when a patient deviated from the expected sequence, the screen had nothing to offer. The recovery path was absent, not weak.

Before the redesign, Squaremind's own test with 14 patients produced 2 completions. Of the 12 who did not complete: 8 (primarily aged 45–65) got stuck within the first minute, 4 (primarily aged 20–35) got stuck around the 3-minute mark. All 12 encountered the same structural failure: no recovery path when the nominal sequence broke down.

The recovery design work used the Inform–Prevent–Correct framework, applied recursively across every step in the scan flow. Each step was mapped against three questions: what does the patient need to understand to continue correctly (Inform); what confusion event must be prevented before it occurs (Prevent); and if confusion occurs, what does the system do to bring the patient back to the correct state, and what does the interface communicate after a recovery event to ensure the patient can continue (Correct). The Correct layer was itself recursive: a recovery event re-engaged the full cycle for the step the patient was recovering into, so that a single confusion event did not compound into an unrecoverable sequence.

Post-redesign ecological testing in London (12 users) and Paris (17 users), co-conducted with an independent dermatologist, produced 27 of 29 independent completions. All 12 patients who got stuck recovered and completed the scan. Recovery times ranged from 2 to 4 minutes. **Evidence basis: pre-redesign figures client-reported background (Squaremind's own test). Post-redesign figures Creative Navy-measured, ecological protocol, independent dermatologist co-conducted.**

What distinguishes this from the other examples in this set: in Gexcon, the recovery path existed but required 4–6 hours of manual reconstruction. In Triopsis and Elsner, recovery paths were absent for specific categories of abnormal condition. In Squaremind, recovery was absent from the entire process architecture — not from specific error types but from the experience of following the process itself. The design challenge was not adding recovery paths to specific errors but building recovery into every step as a designed state, because any step could be the one where a patient needed to recover.

# `/failures/error-and-recovery-failures/errors-are-hard-to-correct`

---

## What the failure is

Error correction has several components, each of which can fail independently: localising the error (where did it occur?), understanding the correct state (what should it be instead?), taking the correction action (how do I change it?), and confirming that correction was successful (how do I know it's now correct?). When any component is unclear, the correction process becomes longer, more effortful, and more error-prone than the original error warranted.

This failure is distinct from recovery-paths-are-weak, which concerns the absence of recovery structures. This failure concerns the correction process when structures nominally exist but are inadequate — the user is trying to correct, the interface is not supporting the attempt.

---

## Distinguish from adjacent failures

**Errors-are-hard-to-notice** — that failure concerns detection of errors. This failure concerns correction after detection. The two are sequential: hard-to-notice errors often compound into hard-to-correct situations because the temporal gap allows the error to propagate.

**Recovery-paths-are-weak** — that failure concerns the structural absence of recovery support. This failure concerns correction difficulty even where recovery structures exist.

---

## What produces this failure

**Error localisation failure** — the user knows an error has occurred but cannot determine where in the workflow, configuration, or dataset it happened. Correction requires knowing what to fix; without localisation, the user must either search the entire system or guess. This is the dominant component of the Gexcon corrective load reduction.

**No explicit undo path** — the system has no direct reversal mechanism for the error category. The user cannot undo; they must reconstruct the correct state manually from the current incorrect state. In complex configurations, this requires understanding the entire dependency chain of the error.

**Correction-side-effect errors** — the action required to correct the error changes other elements the user didn't intend to change. Correcting one field in a complex configuration changes dependent fields; correcting one policy rule changes interactions with other rules; correcting a parameter changes outputs the user had already verified. Correction creates new errors, extending the correction cycle indefinitely.

**Uncertain correction confirmation** — after taking the correction action, the user cannot tell whether the correction was successful. The system has been changed; whether the change achieved the intended correction is not confirmed. The user either re-investigates (overhead) or accepts uncertainty (risk of propagating the remaining error).

**Prior state not visible** — correction to "the right state" requires knowing what that state was. When the system doesn't surface the prior state — the value before the error, the configuration before the change, the sequence before the interruption — the user must reconstruct it from external sources or from memory.

---

## Domain vocabulary

- Error localisation — identifying where in the system or workflow an error occurred; the prerequisite for targeted correction
- Undo path — the sequence of interface actions that reverses an error and restores the prior state
- Correction confirmation — the signal that corrective action was successful; the state is now what was intended
- Correction side effects — unintended changes to other parts of the system caused by the correction action
- Correction overhead — the time and cognitive effort required to correct a detected error; what this failure amplifies beyond the minimum warranted
- Prior state visibility — the interface's ability to show what the correct state was before the error; essential for reconstruction-type correction

---

## Evidence from case studies

**Gexcon CFD simulation — error localisation as the dominant correction cost:**
Before the redesign, when a configuration error was detected in simulation outputs, the correction process required: identifying which of the many configuration parameters was responsible (error localisation); understanding what value should have been set (correct state identification); making the change (correction action); re-running the simulation (correction verification). Without interface support for the first step, the localisation alone consumed the majority of the 4–6 hour corrective load. The error message communicated that something was wrong; it did not communicate where or what. **After the redesign, corrective load fell to approximately 20 minutes (measured by Gexcon across real deployments).** The dominant mechanism was localisation support: the redesigned error communication specified what was wrong and where in the configuration, reducing the diagnostic component from hours to minutes. The correction action itself (changing a configuration value) was always fast; what was expensive was finding the right value to change.

**Kardion MCS Controller — correction sequence in alarm states:**
Alarm acknowledgement requires a specific sequence: perceive the alarm → understand what it means → take the appropriate clinical action → acknowledge the alarm → confirm the condition has resolved. Each step in this sequence must be explicitly supported by the interface. An alarm that is muted but not acknowledged, or acknowledged but whose resolution is not confirmed, leaves the correction sequence incomplete without the user knowing. The alarm architecture required explicit design of what constitutes a completed correction sequence — including the confirmation step that the condition is resolved, not just the acknowledgement that the alarm was noticed. Muted alarms remaining visible was specifically the interface mechanism that prevented incomplete correction sequences from being invisible.

**Beissbarth automotive calibration — sequence resumption after interruption:**
When a calibration sequence is interrupted by a measurement failure or equipment issue, the technician must resume from the correct point in the sequence. Resumption requires knowing: which steps have been completed and verified (prior state visible), which step failed and why (error localisation), and which steps need to be repeated (correction scope). A sequence state display that showed only the current step without showing completed and upcoming steps left technicians without the information needed to assess correction scope — they might redo steps that had been completed correctly or skip steps that needed repetition.

**Dancerace / Jacko — confirmation friction as correction prevention:**
In a financial portal with irreversible actions, the design response to correction difficulty is not to make correction easier — some actions cannot be reversed — but to prevent the need for correction by making accidental triggering harder. The confirmation patterns for irreversible actions (proportional friction before the action, not undo after) acknowledge this failure mode explicitly: when correction is structurally impossible, the only design response is prevention. This is the boundary case of errors-are-hard-to-correct: where the failure is so severe (irreversibility) that correction is addressed before the error occurs.

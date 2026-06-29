# `/practices/edge-case-and-degraded-mode-analysis`

---

## What the practice is

In standard software development, edge cases receive the least design attention and are addressed last, if at all. In embedded systems, high-consequence environments, and complex operational software, they cannot be treated this way — because these are the conditions under which interface failure has the greatest operational consequence. A maritime helm display that fails to communicate battery state clearly during a fault condition is more dangerous than one that communicates it suboptimally under nominal conditions.

Edge-case-and-degraded-mode analysis systematically identifies all non-nominal conditions before design decisions are made, assesses each against three dimensions — frequency, consequence, and current interface behaviour — and produces specific design requirements for each identified condition.

The practice distinguishes four categories of non-nominal condition:

**Hardware and sensor faults** — a sensor reads incorrectly, a component fails, a device loses power, a communication link drops. The interface must communicate the fault state clearly and, where possible, support graceful degradation (continuing to function at reduced capability rather than failing entirely).

**Environmental conditions** — operating conditions that deviate from the expected: temperature extremes, vibration, glare, water exposure, variable lighting, noise. These degrade the performance of communication channels (colour under variable lighting, touch under vibration, text under glare) and change what the interface must do to remain usable.

**Abnormal data and configuration states** — inputs that are incomplete, contradictory, or outside expected ranges; data that hasn't updated; configurations that are technically valid but operationally unusual. The interface must handle these without producing silent errors or misleading outputs.

**Degraded operating modes** — partial system states where some functions are unavailable or operating at reduced capability: single-engine operation when a six-engine configuration has lost one engine, low-connectivity mode when a field device loses network access, safe mode during startup or shutdown sequences.

---

## What the analysis produces

For each identified non-nominal condition:

- **Frequency** — how often does this condition occur in real operation? (Routine, occasional, rare but foreseeable, unlikely but high-consequence)
- **Consequence** — what happens operationally when the condition occurs and the interface does not address it? Classified by severity and reversibility.
- **Current interface behaviour** — what does the existing interface currently show when this condition is encountered? (May be: nothing, a generic error, an incorrect reading, an unintelligible state)
- **Design requirement** — what must the interface do when this condition occurs? Specific, not generic.

The aggregate output is a complete non-nominal condition inventory with design requirements for each — the complement to the nominal case design that most products stop at.

---

## When it is used

During Sandbox Experiments when reviewing existing systems — the analysis identifies the non-nominal conditions before any redesign decisions are made.

During Iterative System Building when reviewing design solutions — the analysis confirms that proposed designs address non-nominal conditions, not just nominal ones.

In embedded and hardware-integrated contexts, this analysis is conducted before design begins, as the hardware architecture determines which non-nominal conditions are possible. The hardware specifications — operating temperature range, sensor fault modes, communication protocol behaviours — are the inputs.

In regulated medical device contexts, edge-case-and-degraded-mode analysis directly addresses IEC 62366-1 requirements for hazard-related use scenarios, including the abnormal conditions under which the device will be used.

---

## Evidence from engagements

**Elsner Elektronik / Cala Touch KNX** — The hardware specifications were disclosed at project kickoff as design parameters. Three categories of non-nominal condition were identified before design began:
- **Sensor fault states** — a KNX sensor in fault: the controller displays a temperature or humidity value that is incorrect or absent. The analysis established the design requirement: communicate fault state clearly enough for a non-technical occupant to understand that a sensor is not working and an engineer should be called, without requiring the occupant to understand what a sensor fault is.
- **Calibration drift** — sensors drift out of calibration over time in real installations. The analysis established that calibration drift is a routine condition, not a fault — the design requirement was informational display rather than alarming.
- **Firmware update timing** — firmware updates cycle at specific intervals, producing brief periods where displayed values and actual sensor values diverge. The analysis established the requirement that animation timing be aligned with firmware update cycles, so visual state changes never drift out of sync with actual system state. This is a non-nominal condition that is entirely invisible under standard testing conditions and only discoverable through analysis of the firmware behaviour.

**Torqeedo maritime HMI** — The sea trial research programme was structured partly as a systematic non-nominal condition observation: 12 sea trials over 6 months specifically included night operations, adverse weather, hull slamming, and glare conditions. Each session produced evidence of non-nominal conditions the interface had to address:
- **Multi-component state at different sensor cadences** — propulsion, battery, and generation systems update at different rates; presenting them without a synchronisation architecture produces a visually unstable display. The analysis established the design requirement for cadence synchronisation.
- **Night operations** — the interface must be readable under night vision conditions; the analysis established the luminance and contrast requirements that determined which design approaches were available.
- **Storm conditions and hull slamming** — vibration affected touch interaction reliability; the analysis established minimum touch target parameters for the helm environment.

**Cox Marine cluster displays** — The edge-case analysis was conducted as scenario testing during Concept Convergence: a multi-engine fault scenario was explicitly simulated against candidate designs. This is edge-case analysis applied mid-design rather than only at the diagnostic stage — a practice of confirming that proposed solutions address identified non-nominal conditions before committing to them. The scenario revealed that several candidate designs addressed fault presence but not fault direction: they made it visible that a fault existed somewhere but did not direct attention to the priority engine. The design requirement produced by the analysis: a two-level fault communication architecture (fault-summary area for priority, per-tile highlighting for location).

**Kardion MCS Controller** — The IEC 62366-1 formative evaluation process structured the edge-case analysis formally as hazard-related use scenario identification. Non-nominal conditions addressed:
- **Alarm states during high-activity clinical periods** — when multiple alarms are active simultaneously during a complex procedure, the interface must communicate priority without requiring the operator to assess each alarm individually. The analysis established the alarm hierarchy requirements.
- **Shutdown and startup conditions** — the system transitions through specific states during startup and shutdown; the analysis established that these transitions must be communicated without creating ambiguity about whether the device is operational.
- **Layout behaviour during view transitions** — the analysis identified that any element shifting position across view transitions constituted a non-nominal condition for users relying on spatial memory; the no-shift standard was the design requirement produced.

**Beissbarth automotive calibration** — Three categories of calibration edge case identified through workshop observation:
- **Borderline tolerance values** — measurements within range but at the margin where confidence is low; the analysis established the design requirement for three-level measurement result communication (confirmed, borderline, out of range) rather than binary pass/fail.
- **Equipment communication failure** — the calibration device loses communication with one component; the analysis established the requirement for specific rather than generic error communication (which component, what the technician should check).
- **Interrupted calibration sequences** — a technician interrupts a sequence mid-procedure and resumes; the analysis established the requirement for persistent sequence state display showing completed and remaining steps.

**Gexcon CFD simulation** — Edge cases in expert simulation software are primarily data and configuration states rather than hardware conditions:
- **Incomplete inputs** — a simulation setup with required values absent; the analysis established the requirement for pre-run input completeness checking.
- **Contradictory parameter combinations** — values that are individually valid but inconsistent with each other; the analysis established the requirement for contradiction detection before run.
- **Previously run configurations being re-used with changed parameters** — a non-nominal state where the visual state appears complete but is not consistent with current scenario requirements; the analysis established the requirement for configuration validity checking at run initiation, not only at input.

---

## Relationship to other practices

Edge-case-and-degraded-mode analysis draws on:
- `/practices/task-criticality-mapping` — critical tasks under non-nominal conditions are the highest-priority analysis targets; the criticality map defines where edge-case failures have the greatest consequence
- `/practices/state-and-transition-review` — fault states and degraded modes are a specific category of state; the state review establishes the full state catalogue that the edge-case analysis extends

Edge-case-and-degraded-mode analysis directly informs:
- `/capabilities/design-for-abnormal-and-degraded-scenarios` — this practice is the diagnostic foundation for that capability
- `/practices/alarm-and-warning-evaluation` — non-nominal conditions are the primary trigger for alarms and warnings; the edge-case analysis establishes which conditions require alarm-level communication

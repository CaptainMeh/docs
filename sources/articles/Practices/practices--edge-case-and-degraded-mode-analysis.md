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

**Torqeedo maritime HMI** — The sea trial research programme was structured partly as a systematic non-nominal condition observation: 12 sea trials over 6 months specifically included night operations, adverse weather, sharp vessel movement, and glare conditions. Each session produced evidence of non-nominal conditions the interface had to address:
- **Multi-component state at different sensor cadences** — propulsion, battery, and generation systems update at different rates; presenting them without a synchronisation architecture produces a visually unstable display. The analysis established the design requirement for cadence synchronisation.
- **Night operations** — the interface must be readable under night vision conditions; the analysis established the luminance and contrast requirements that determined which design approaches were available.
- **Storm conditions and sharp vessel movement** — vibration affected touch interaction reliability; the analysis established minimum touch target parameters for the helm environment.

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

**KISPE Space (a UK space systems engineering company)** — *close to a model case, and the method is the contribution: the entries above describe what was found; this describes how a catalogue is built.* 40 documented edge cases and degraded states, each specifying the input condition, the visible response, the recovery path, **the misinterpretation it prevents**, and a verification that would expose a dangerous misunderstanding (K13). Five verification suites were specified against the exception catalogue — context and imagery; evidence and time; satellite services and environment; connectivity and field; briefings, notices and source health (K14) — with eight cross-module regression checks. The scenario the catalogue was built against is deliberately adversarial, not a happy path: at the scenario moment the imagery feed is down, the newest image will not render, the highest-resolution image covers only part of the area, one image is restricted, the positioning fix is stale while the communications reading is current, and a predicted overflight has not happened yet — every one of those a trap the interface has to avoid walking into (K42). **Apply the tense rule without exception: these are specified tests, not executed ones. The verification, acceptance and regression vocabulary must never read as completed testing — nothing here was executed, and the scenario is a synthetic fixture, never data. KISPE's class of degradation is the availability of information — where it came from, how old it is, whether it was delivered — and it must never be blended in a sentence with the equipment-fault entries above, with Schone's control-channel degradation, or with the industrial engagement's field-observed degraded modes. No quotation marks and no reported speech anywhere KISPE appears.**

**Oceaneering (hospital dispatch panel; nothing beyond the client name may be named)** — Useful because it shows the practice producing a decision to omit. A system-off screen states when the system is expected back, because operators want to know when they can use it again (O85). And two designed states were deleted on field evidence: a disabled-station state, after both sites reported never having disabled one — a sensor had been replaced once in the technician's tenure, and spills happen in corridors rather than on stations — and a grey fill for empty stations, resolved instead to a transparent card with a coloured outline, on the grounds that fewer colours mean fewer things to learn (O67). **Oceaneering client positions are reported speech attributed to a role, never quoted.**

**Raymarine (next-generation fixed-mount VHF; the new radio's name is never used)** — Degraded conditions enumerated rather than generalised: **forty-three exception records across eight independently varying state axes** — voice radio state, display context, calling transaction, AIS data quality, positioning, safety incident, interruption and chartplotter link — with twenty-four verification scenarios. The governing statement: a current screen is not a system state, and the interface is a state interpreter rather than the source of truth for radio outcomes (R133). Failures are attributed to the subsystem that produced them: a chartplotter link failure is reported as a loss of chart integration and never as a radio fault; an AIS receiver failure never implies an empty sea; a missing registered identity is distinguished from a receiver failure. A per-feature dependency map records which functions survive which failure (R134). **Pair with KISPE's forty named conditions as coverage rather than competition, and keep the evidential asymmetry: KISPE's catalogue was specified and never executed; Schone's was adjudicated by working remote pilots; Raymarine's was partly evaluated — the interruption, position, receiver and connectivity cases were put to operators on a bench, the other thirty-odd were not. Never let one lend weight to another. Raymarine does not get a degradation class of its own — it sits across information availability and control channel rather than creating a fourth class, and its distinctive contribution is the enumeration. No quotation marks and no reported speech anywhere Raymarine appears.**

**A European manufacturer of uncrewed systems, including one-way effectors, and the tactical command-and-control software that operates them** — The framing instance: degradation specified as the operating condition rather than the exception. A requirement Creative Navy authored, stated as a system requirement: the system shall treat electromagnetic interference as an expected operating condition rather than an exceptional failure, because contested electromagnetic conditions are core to the intended environment (H17). Command state carries seven explicit values — requested, sending, awaiting acknowledgement, accepted, rejected, timed out, resulting state confirmed — with rejection and timeout as ordinary values, followed by the instruction to use only states the technical system can actually determine (H75). And the design gives recovery a physical control: signal recovery replaced return-to-home on the first push button, at the client's suggestion — a manoeuvre in which the vehicle climbs and loiters in order to reacquire the link, rather than a command to come back (H88). **Pair with KISPE and Schone rather than competing with them: KISPE enumerates conditions, Schone models the transaction, this engagement specifies the environment and then gives a physical control to recovering from it. No quotation marks and no reported speech anywhere this engagement appears; the register is that of a safety-engineering document, and the scope boundary holds — Creative Navy designed the supervising surface, not the system.**

**Maritime VTS (a European vendor of maritime traffic monitoring, inland navigation and communications software for port authorities, coastal administrations and waterway operators)** — Degradation modelled per task rather than as a global system mode: each of the seven operator journeys was decomposed with its own exception set and recovery path, with normal, ambiguous and degraded conditions modelled separately (W33). The distinctive instance is the freshness finding's last line: in a degraded state, a retained target could keep the same visual treatment as an updating one, and **an equipment view with no state data could read as an equipment view with no faults** — an empty equipment view and a healthy equipment view are different, and designing the difference requires a state the service may not be able to supply (W43). That is why one formative finding was **retained with engineering rather than closed by a visual fix**: the design could display an unknown equipment state but could not guarantee that the service distinguishes missing data from confirmed health, and the single open item was not treated as closed (W82). **That is the page's cleanest example of an edge case a design cannot close alone, and it should be written as one. No quotation marks and no reported speech anywhere this engagement appears.**

---

## What this page must not claim

- The degradation classes stay apart: the equipment and process faults in the entries above, KISPE's degradation of information availability, Schone's degradation of the control channel, and Raymarine across the latter two without a class of its own. Never blend two classes in a sentence.
- Never let the industrial engagement's field observation, Schone's operator-adjudicated evaluation or Raymarine's partial bench evaluation lend weight to KISPE's specification — KISPE's catalogue was never executed.
- No quotation marks and no reported speech for KISPE, Raymarine, Schone, maritime VTS or the handheld C2 engagement; Oceaneering is reported speech only, never quoted.
- The KISPE and Raymarine scenario fixtures and the VTS validation fixtures are designed test conditions, never observations or data.
- No safety, certification or regulatory credential, and no claim that any degraded-mode design prevented an incident, from any engagement on this page.
- No engagement dates — sequence and duration only.

---

## Relationship to other practices

Edge-case-and-degraded-mode analysis draws on:
- `/practices/task-criticality-mapping` — critical tasks under non-nominal conditions are the highest-priority analysis targets; the criticality map defines where edge-case failures have the greatest consequence
- `/practices/state-and-transition-review` — fault states and degraded modes are a specific category of state; the state review establishes the full state catalogue that the edge-case analysis extends

Edge-case-and-degraded-mode analysis directly informs:
- `/capabilities/design-for-abnormal-and-degraded-scenarios` — this practice is the diagnostic foundation for that capability
- `/practices/alarm-and-warning-evaluation` — non-nominal conditions are the primary trigger for alarms and warnings; the edge-case analysis establishes which conditions require alarm-level communication

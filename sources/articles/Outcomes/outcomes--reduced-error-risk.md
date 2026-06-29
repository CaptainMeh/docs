# `/evidence/outcomes/reduced-error-risk`

---

## What the outcome is

Errors in complex systems are not random — they are structural. They occur at specific interactions, in specific conditions, for specific reasons: a required value that isn't visible at the moment it is needed; a mode change the interface doesn't communicate clearly; a confirmation step that isn't proportional to the consequence; an alarm that communicates a condition without specifying what to do; a warning that appears without contextual grounding and cannot be understood in the time available; an interface that shows symptoms without explaining the state behind them, so a trained operator stops healthy equipment rather than risk a deviation. Error reduction is the result of identifying these structural conditions analytically and redesigning the interactions that produce them.

The outcome is not fewer errors because users are better trained. It is fewer errors because the interface no longer creates the conditions that produce them.

---

## Error types to distinguish on this page

Four categories, each requiring a different design response:

**Selection errors** — the user chooses the wrong option. Produced by insufficient visual differentiation between options, misleading labelling, or interface logic that groups unlike things.

**Mode errors** — the user acts in the wrong system state, believing the system is in a different mode. Produced by mode changes the interface doesn't communicate clearly, or by layouts that look identical across modes with different consequences.

**Omission errors** — the user misses a required step. Produced by required steps that are not visible in context, by incomplete inputs that aren't flagged before they matter, or by workflows that allow progression without required completion.

**Misinterpretation errors** — the user acts on incorrectly understood information. Produced by ambiguous state communication, insufficient visual hierarchy, single-channel cues that fail under operating conditions, or warnings that appear without contextual grounding. *Note the precautionary-over-intervention sub-pattern (Gericke): the user reads the surface signals correctly but holds an incomplete model of system state, and under ambiguity takes an unnecessary protective action — stopping or overriding healthy equipment — because the interface does not make the actual state legible. The costly error here is acting when no action was needed; the symmetric variant is acting wrongly or slowly when a real fault is masked by a cascade of effects.*

**Process deviation errors** (Squaremind-introduced) — the user deviates from a required physical sequence in a process with no external guide. Produced by the absence of a correction architecture in sequential patient-operated or user-operated physical processes. Distinct from the four types above: the error is not an incorrect action in a digital workflow but a physical deviation in a real-world sequence. The interface must detect, communicate, and provide recovery — not just prevent or tolerate.

Different error types require different design responses. The mechanism section should name the type addressed by each piece of evidence.

---

## Domain vocabulary

- Use-related error (IEC 62366-1 language; applicable beyond regulated contexts)
- Error mechanism — the structural interface condition that produces the error
- Error consequence — what happens when the error occurs; classified by reversibility and magnitude
- Acceptable residual risk (regulated contexts) — the target is not zero risk but risk mitigated to an acceptable level
- Error-likely interaction — the specific interaction identified as structurally error-prone
- Misinterpretation error / mode error / selection error / omission error
- Precautionary over-intervention — an interpretation-failure error class where, under ambiguous state, the operator takes an unnecessary protective action (stopping or overriding healthy equipment); the cost is borne as lost availability and unnecessary maintenance rather than as a single incident (Gericke)
- Operator-error taxonomy — a structured synthesis of the interface-induced error types occurring in an operating environment, derived from observation, interviews, and records; Creative Navy built one (OE01–OE20) for the Gericke engagement as the analytical instrument that turned a scatter of operational problems into a single coherent UX problem
- Formative evaluation (regulated contexts) — the design-phase process that identifies and addresses error-likely interactions
- Warning architecture failure — a specific error-generating mechanism in embedded and consumer systems: warnings designed after screen architecture is fixed, producing warnings that interfere with active tasks, appear without contextual grounding, and generate misinterpretation errors at the moment of operation

---

## Evidence

### Gexcon CFD simulation (strongest quantified evidence — measured in production)
- Errors in industrial safety simulation are specifically misinterpretation and omission errors in scenario configuration — the class with the greatest downstream consequence because a misconfigured simulation produces a safety assessment that appears valid and is not
- **Configuration errors per simulation: 5–8 → 1–2. Measured by Gexcon across real deployment locations — not usability testing conditions. Directly measured.**
- **Corrective load per error: 4–6 hours → approximately 20 minutes. Measured by Gexcon across real deployments.**
- Both figures together document error reduction and error recovery cost reduction in the same engagement — unusual in the portfolio
- The mechanism: state visibility redesign combined with an explicit error-prevention layer in the interaction architecture; required values surfaced during setup; warnings for incomplete and contradictory inputs before run; error messages specifying what went wrong and what to do

### deSoutter Medical / Zethon (mode errors in operating theatre — regulated)
- The operating theatre is the most demanding test of mode error prevention: divided attention, variable lighting, gloved hands, brief glances
- Two specific changes reported by 8 surgeons in structured design review sessions:
  - Device state verification reduced to brief glance recognition — the previous interface required reading to interpret activation state, an unacceptable interaction profile when the surgeon's primary attention is on the patient
  - Speed and parameter adjustments no longer interrupted surgical workflow — the previous interface required attention that competed with the surgical task
- Error type: mode errors and misinterpretation errors under divided attention
- The mechanism: redundant non-colour cues (spatial position + icon form + colour) for every critical state, eliminating the single-channel dependency on colour that failed under variable theatre lighting; spatially stable layouts where critical indicator positions never changed between screens
- **Surgeon-reported from structured design review sessions during the engagement — not post-deployment operational measurement. State this explicitly.**
- IEC 62366-1 formative evaluation governed the engagement. **Scope note must appear: formative evaluation only; summative validation and regulatory submission are the manufacturer's responsibility.**

### Kardion MCS Controller (mode and misinterpretation error prevention — regulated, FDA approval)
- Specific error-likely interactions identified through IEC 62366-1 use-related hazard analysis and addressed in design:
  - Flow rate adjustment: insufficient confirmation friction for a high-consequence action. Resolution: two-step rotary knob confirmation
  - Min/max flow value misinterpretation: visual ambiguity in prior study (Emergo by UL formative study, 7 participants). Resolution: unambiguous flow visualisation hierarchy
  - Alarm state during mute: alarm disappearance on mute enabling forgotten active alarms. Resolution: muted alarms remain visible at reduced prominence
- **The design passed FDA evaluation as submitted — no design changes required. Documented and verifiable.** This is the process outcome confirming the use-related hazard mitigation was correctly structured.
- Error type: mode errors (clinical device context), misinterpretation errors, omission errors (missed alarm states)
- IEC 62366-1 formative evaluation. **Scope note: formative only; summative validation is the manufacturer's responsibility.**

### Beissbarth automotive calibration (measurement accuracy errors — production-measured)
- Errors in calibration are specifically measurement accuracy errors — readings taken under conditions that fall below the confidence threshold, producing a certified vehicle that is not within the safety specification
- **Repeated measurements reduced. Client-measured across 8 production deployment locations — direction confirmed; exact frequency not available for publication.**
- **Calibration time: 18 → 12 minutes per vehicle. Client-measured across 8 production deployment locations.** Part of this reduction reflects fewer repeated measurements required.
- The mechanism: three-level measurement result communication (confirmed, borderline, out of range) replacing binary pass/fail; explicit sequence state visibility preventing omission errors in multi-step calibration procedures

### Triopsis workforce management (operational errors — user behaviour data)
- Errors in workforce scheduling are specifically omission errors (missed safety compliance steps) and mode errors (scheduling conflicts not detected before they become live crises)
- **Support ticket volume for "how can I" questions fell to approximately 5% of previous volume. Client-reported operational data.** Some portion of this reduction reflects fewer interface-induced errors requiring resolution.
- Predictive conflict indicators: future scheduling conflicts surfaced before they become crisis-mode errors requiring reactive correction — a structural error prevention measure at the planning stage
- Field technician compliance component: required safety steps surfaced in context, reducing the omission errors that training alone cannot prevent

### Typewise AI keyboard (most directly measured — controlled experiment)
- **Error rates halved vs. iOS native keyboard baseline. Directly measured, controlled experiment, 60 users.** This is the most methodologically clean error rate measurement in the portfolio: defined baseline, defined population, directly measured outcome.
- Error type: selection errors (mis-taps due to key size)
- The mechanism: hexagonal key layout providing a larger key surface, reducing mis-tap probability

### Stromer e-bike embedded display (misinterpretation errors from warning architecture failure — consumer vehicle)
- The Stromer case represents a specific and structurally distinct error type: misinterpretation errors produced by warning architecture failure in a consumer embedded display used during riding. The error mechanism was not individual component design but architectural sequencing: the previous external agency had established screen layout and interaction logic first, then added warnings as visual overlays afterwards. Warnings had no native structural relationship to the surface they inhabited — they covered content they should not cover, appeared without contextual grounding for the rider to interpret their meaning, and interfered with active interactions.
- Error type: misinterpretation errors (warnings appearing without sufficient context for meaning to be recovered) and interference errors (warnings disrupting active interactions without a designed resolution path)
- The mechanism Creative Navy established: rules and principles governing how warnings, overlays, and interruptive elements relate to the screen structure across all states — established as architectural decisions before component design, not added after
- **Before redesign: warnings accounted for approximately 30% of all issues rated as "issue needing user intervention" in a structured 3-day riding test with 10 participants. Creative Navy-designed and run; real bikes, real routes, consistent severity-logging protocol.**
- **After redesign: same test with 10 participants (6 returning, 4 replacements), same methodology. Warnings did not appear on the issues list at any severity level.**
- **Two-year longitudinal follow-up, run by Creative Navy: warnings remained absent from the issues list.** This is the only case in the portfolio with longitudinal confirmation of error risk reduction at a two-year interval.
- The safety consequence of the pre-redesign state extended beyond the warning interactions themselves: average glance duration at the embedded display was measured at 4.32 seconds — more than twice the 2-second threshold at which road safety research (Klauer et al., 2006, NHTSA Report No. DOT HS 810 594) identifies a doubling of near-crash/crash risk. The redesign reduced glance duration to 1.89 seconds. The warning architecture failure was a direct contributor to extended glance duration: riders held their gaze on the display until the warning's meaning became clear rather than looking away with the information still ambiguous. **Eye tracking evidence basis: Creative Navy-measured in real riding conditions, 5 participants.**
- **Evidence basis across all Stromer measurements: Creative Navy-designed and run. Consistent methodology. Real bikes, real routes.**

### Squaremind dermatology scanning device (omission and recovery errors — process-level, Creative Navy-measured)

- Errors in patient-operated scanning are a specific and structurally distinct type: not selection errors, mode errors, or misinterpretation errors in the conventional sense, but **process deviation errors** — deviations from a physical sequence that the patient cannot self-correct without explicit guidance. The interface does not prevent the deviation (patients cannot be prevented from moving incorrectly), but it must detect it and provide a clear correction path. An unrecovered process deviation is an omission error with session-ending consequences.
- Before the redesign, the interface had no correction architecture: when a patient deviated from the expected sequence, the interface had nothing to offer. The session ended or required clinical intervention. This is not a recoverable error in the conventional sense — it is a permanent session loss.
- **Pre-redesign baseline: 14-patient test by Squaremind produced 2 completions; 0 recoveries among the 12 who deviated. Client-reported background — Squaremind's own test before Creative Navy's involvement.**
- The design response introduced explicit error management at every step of the scan flow through the Inform–Prevent–Correct framework:
  - **Prevention layer**: anticipated deviation events prevented through positioning guidance delivered before the robot arm reaches the relevant body zone, not after the patient has already moved incorrectly
  - **Correction layer**: when deviation occurs, the interface specifies what happened, how to return to the correct state, and re-engages the guidance cycle for the next step after recovery
- Error type: process deviation errors (a category distinct from the four types above, specific to sequential physical processes where the user has no external guide)
- **Post-redesign: 27 of 29 patients completed the scan independently. 12 patients deviated during the flow; all 12 recovered without external intervention. Recovery times 2–4 minutes, timed to the second. Evidence basis: Creative Navy-measured, ecological protocol, two sites, age-stratified, independent dermatologist co-conducted.**
- What this adds to the page: a fifth error type — process deviation — specific to sequential physical processes operated without external guidance. The Squaremind case is the only grounded example in the portfolio where the interface had to manage not individual action errors but deviations from a physical sequence in real time, with recovery as the primary design mechanism.
- **IEC 62366-1 scope note:** Creative Navy's role was formative evaluation. Summative validation and regulatory submission are Squaremind's responsibility.

### UNICEF planning, approval, and reporting tool (omission and categorisation errors prevented at the workflow level — client-measured as a business compliance metric)

- The UNICEF case adds a structurally distinct expression of error reduction to this page. The errors are conventional omission and selection/categorisation errors — submissions with missing information, incomplete approval chains, incorrect categorisation, missing supporting documentation, and inconsistencies between data fields. What is distinct is the level at which they were prevented and the way they were measured.
- **The error mechanism was organisational, not single-interaction.** In the conventional cases on this page, an omission error arises because a required value isn't visible at the moment it's needed, or a workflow allows progression without required completion. At UNICEF, defective submissions arose at a higher level: seven roles across two organisational tiers held incompatible interpretations of what a correct submission required, so a submission could be complete and correct from the producing role's frame and simultaneously deficient from the receiving role's. The error was generated by a missing shared standard, not only by a missing field prompt. (See `/failures/workflow-failures/workflows-break-across-roles`, third form — incompatible mental models across the handoff.)
- **The prevention mechanism was structural and upstream.** Because the errors originated in a definitional gap between roles, they could not be fully prevented by per-screen validation alone. The design first established an agreed reporting standard across both tiers — through the Sandbox Experiments prototyping process — and then embedded that standard into the system through workflows, validation rules, information architecture, and interaction design, so that many of the ambiguities that previously generated defective submissions were eliminated before users began entering data. This is error prevention by removing the conditions for the error at the workflow and standards level, which is the page's central thesis applied at an organisational rather than an interaction scale.
- The submission workflow also carried conventional prevention and correction layers consistent with the Inform–Prevent–Correct logic: an orientation step establishing what the submission is for and how the steps connect; priming questions reducing the cognitive load that produces omission under complexity; and an explicit revision-and-quality-check step before final submission, where a second pass — modest in effort — materially raised submission quality. The revision step is a correction layer that catches omissions before the submission crosses the role boundary rather than after.
- Error type: omission errors (missing information, incomplete approval chains, missing documentation) and selection/categorisation errors (incorrect categorisation, field inconsistencies), prevented at the cross-role workflow level.
- **Outcome: compliance issues reduced 45%. Client-measured against a pre-established baseline, nine months post-rollout.** "Compliance issues" are precisely defective submissions requiring headquarters follow-up before acceptance — i.e. interface- and workflow-induced errors measured as a business metric. This is the first case on the page where error reduction is measured through the client's own operational compliance metric rather than through error counts, task times, or severity logs. **A parallel 42% reduction in headquarters report-preparation time (client-measured) is the downstream consequence of fewer defective submissions requiring correction.**
- What this adds to the page: error reduction demonstrated at the organisational-workflow level, where the error mechanism is a missing cross-role standard and the prevention mechanism is establishing and embedding that standard — measured as a business compliance metric across a 128-country deployment. It is the page's largest-scale instance of structural error prevention.
- Evidence calibration: the 45% and 42% figures are client-measured by UNICEF against a pre-established internal baseline, nine-month window. Creative Navy helped identify which owned operational metrics were relevant; UNICEF produced the measurements. The causal account (errors prevented by cross-role standard agreement and structural embedding) is analytically derived, with the client-measured compliance reduction as corroboration.

### Gericke industrial HMI (interpretation-failure errors reduced — built on a purpose-made error taxonomy; client-measured business metric within a clean window)

- The Gericke case is distinctive on this page for two reasons: it is the only engagement in which Creative Navy built an explicit **operator-error taxonomy** (OE01–OE20) as the analytical instrument, and it is the clearest demonstration that the page's central thesis — errors are structural, not the result of poor training — holds at industrial-process scale. Across three deployment-and-research sites, the most expensive operator errors were not mechanical failures, lack of training, or negligence; they were interpretation failures caused by insufficient system transparency.
- **The error class is misinterpretation, with the precautionary-over-intervention sub-pattern as the dominant and most expensive variant.** Operators read the surface signals (alarm lists, deviations) correctly but held an incomplete model of process state, and under ambiguity took an unnecessary protective action — stopping or overriding healthy equipment (OE01 unnecessary restart, OE14 healthy equipment stopped, OE06 refill-logic override). The symmetric variant — acting wrongly or slowly when a real fault was masked — appears as the alarm cascade handled symptom-by-symptom (OE09) and the wrong subsystem investigated (OE03). Both are the same root cause: the interface exposed symptoms but never explained state.
- **The error mechanism was structural and the prevention mechanism removed the conditions.** A live process mimic shows state on the diagram; graphical error visualisation highlights failed components, replacing raw error codes; a root-cause alarm hierarchy collapses secondary alarms beneath their originating event and indicates probable cause. The clearest illustration: a normal feeder refill cycle previously surfaced as a cluster of alarms with no indication of which mattered, prompting a precautionary stop and a maintenance call; the redesign shows "Refill Cycle — temporary deviation expected — no operator action required," eliminating the error at its source.
- **Outcomes, client-measured within a confirmed single-variable window (no hardware, sensor, mechanical, training, recipe, or process changes; four months post-go-live; three sites described by type and geography):**
  - **Operator-caused stoppages roughly halved: 3 → 1, 7 → 3, and 15 → 6 per month** (Swiss pharma, Italian food, Swiss chemicals). These are precisely the precautionary-over-intervention errors, measured as the plants' own operational metric.
  - **Repeat alarms more than halved: 42% → 18%, 58% → 28%, 73% → 35%** — the alarm cascade / symptom-handling errors reduced as the hierarchy made the relevant alarm legible.
  - **Fault-diagnosis time fell by roughly two-thirds (24 → 8, 38 → 12, 68 → 20 min)** — the recovery-cost dimension of the same error reduction, comparable to the Gexcon corrective-load figure.
- What this adds to the page: the largest non-medical, non-regulated instance of structural error prevention, grounded in a purpose-built error taxonomy, with the error reduction measured as the client's own operational metrics within a confirmed clean window. It pairs the UNICEF property (error reduction as a client business metric) with a confirmed no-other-changes condition that UNICEF lacked.
- **Evidence calibration: the OE01–OE20 taxonomy is a Creative Navy analytical synthesis** — derived from site observation, contextual interviews, stakeholder interviews, existing-system review, and incident/maintenance records — **not a field instrument** (operators did not report "OE14"). The **per-plant error frequencies are client-reported by plant managers from their own operational statistics, not telemetry.** The before/after operational metrics are **client-measured by Gericke (not Creative Navy-measured)**, within a confirmed single-variable window; frame them as interface-attributable within that window, never as caused. Sites described by type and geography only; the refill illustration is a Creative Navy reconstruction, not a logged incident. Gericke is not a regulated device — no IEC 62366-1 caveat applies; it operates in GMP environments (GAMP 5 relevant) and the validation boundary is the manufacturer's.

### eToro multi-asset social trading (misinterpretation errors at the point of financial commitment — error reduction analytically derived, behaviour A/B-confirmed)

- The eToro case adds a consumer-finance instance of **misinterpretation error** — the user acts on incorrectly understood information. The specific mechanism: the pre-redesign buy flow displayed profit alongside deposits, so users misattributed gains and losses across their whole account rather than the specific position being opened, and committed to trades holding an incorrect model of their own exposure. This is a misinterpretation error in the page's sense — the surface numbers were present and correct, but the interface let users form the wrong understanding of what a trade meant for their portfolio, particularly around downside and relative position sizing.
- **Calibration of the error-reduction claim — important.** The A/B did not measure an error *rate* directly; it measured behaviour (conversion 5.1% → 7.4%, time-to-trade 11.8 → 8.6 min, with no increase in early-session drop-off and no reduction in exploration depth). The error-reduction reading is therefore **analytically derived** — the redesign removed a specific, identified misinterpretation mechanism (profit/deposit conflation; exposure illegibility), and the behavioural result is consistent with reduced misinterpretation rather than increased trading (users decided faster and converted more without abandoning or exploring less). Frame this honestly: this is a structural error-mechanism removal whose behavioural consequence was measured by a randomised A/B, not a measured before/after error count of the Typewise or Gericke kind. Do not state an error-rate figure for eToro; there isn't one.
- Error type: misinterpretation errors (incorrect understanding of personal exposure and of signal type at the decision point), in a non-regulated consumer-finance context.
- **Evidence calibration: the behavioural figures are client-measured by eToro via a randomised controlled A/B with a persistent holdout (cross-reference the design to the verifiable-performance-claims and what-we-have-measured pages). The error-reduction account is analytically derived from the removed misinterpretation mechanism, corroborated by the no-drop-off / no-reduced-exploration behavioural signal. eToro is not a regulated device — no IEC 62366-1 caveat applies; the relevant constraints are financial (MiFID II financial promotion; SEC/FINRA fair balance), under which clearer risk legibility is beneficial. eToro involved no AI.**

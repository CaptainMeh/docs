# `/capabilities/warning-and-alarm-clarity-improvement`

---

## Domain vocabulary

- Alarm hierarchy / priority tiering — the organised structure of alerts by urgency and consequence; the foundation of effective alarm design
- Alarm management — the formal discipline of designing, implementing, and maintaining alarm systems; ISA-18.2 (industrial alarm management standard) and IEC 62682 are the primary frameworks for process industries; IEC 62366-1 governs alarm design in medical devices
- Alarm rationalisation — the process-industry practice (ISA-18.2) of reviewing and reducing alarms so that each is meaningful, prioritised, and actionable; the response to alarm flooding (Gericke)
- Root-cause alarm hierarchy — an alarm structure that surfaces the originating fault and collapses the secondary alarms it triggers beneath it, so operators address the cause rather than chasing effects (Gericke)
- Alert fatigue / alarm fatigue — the desensitisation that occurs when users encounter too many alarms or too many low-priority alarms; the most dangerous outcome of poor alarm design, because it trains users to ignore alarms including important ones
- Alarm flooding / alarm cascade — a single root cause generating many secondary alarms; without a hierarchy, operators handle them symptom by symptom, wasting time and missing the cause (Gericke)
- Actionable warning — a warning that communicates both the problem and what to do about it; a warning that communicates a problem without a next action is not actionable in time-pressured environments
- Redundant cues / redundant communication channels — multiple independent signals for the same alarm, so that the failure of any single channel under operating conditions does not remove the signal; essential in environments with variable lighting, noise, or vibration
- Mute behaviour / alarm silencing — the design of what happens when a user silences an alarm; a muted alarm must remain visible and not be dismissible to a state where it can be forgotten
- Recovery indication — the signal that a previously alarmed condition has resolved; without it, users cannot confirm whether their action was effective
- False positive / nuisance alarm — an alarm triggered under conditions that don't require action; the primary driver of alert fatigue; reducing false positives is as important as ensuring genuine alarms surface. The repeat-alarm rate (the share of alarms that recur) is a process-industry measure of nuisance-alarm burden (Gericke)
- Use-related hazard (IEC 62366-1) — the framework for identifying alarm-relevant risks in regulated medical devices; alarms that address identified use-related hazards are regulatory requirements, not design preferences
- Visual differentiation — alarm states distinguished from each other and from normal states through multiple visual attributes, not just colour; required by IEC 62366-1 and sound practice in all high-consequence contexts
- Silent failure warning — a warning for a process error that would otherwise complete silently, producing an output that appears valid and is not; a specific alarm design challenge in expert software
- Warning architecture — the structural rules and principles governing how warnings, overlays, and interruptive elements relate to the screen layout; distinct from the visual design of individual warning components; must be established before components are designed

---

## Evidence to draw on

### Kardion MCS Controller (IEC 62366-1 regulated alarm architecture — most formal)
- The alarm architecture was not a design preference — every requirement was derived from identified use-related hazards and governed by IEC 62366-1
- Requirements that shaped the design, each traceable to specific identified hazards:
  - **Priority tiering**: alarms ranked by clinical urgency; the visual language at each priority level must be unambiguously distinguishable
  - **Visual differentiation beyond colour**: IEC 62366-1 requires that colour alone is not the differentiating attribute; each priority level has a distinct combination of colour, icon, border treatment, and spatial behaviour
  - **Mute behaviour**: a muted alarm must remain visually present at a reduced prominence level; the interface must not provide a pathway to a state where an active alarm is invisible
  - **Alarm state visibility**: the absence of alarm must be as confirmable as its presence; operators must be able to confirm that no active alarms exist, not just observe the absence of an alarm indicator
- The alarm architecture requirements paradoxically constrained — and therefore clarified — the option space for the standard view. Certain spatial positions and visual treatments were reserved for alarm-layer use, eliminating them from the nominal state hierarchy. This simplified the remaining design decisions.
- **FDA approval: design passed evaluation as submitted, no design changes required.** The alarm architecture contributed to the review satisfying the identified use-related hazards related to alarm misinterpretation and missed alarms.
- **Scope: formative only. Summative validation and regulatory submission are the manufacturer's responsibility.**

### deSoutter Medical / Zethon (redundant cues — most specific alarm channel design)
- The primary alarm design finding from benchmarking: **6 of 8 competitor devices used colour as the primary — and often sole — indicator of device state and warning conditions.** Under variable theatre lighting (surgical headlights repositioned, overhead illumination adjusted during procedures), colour coding becomes unreliable.
- Resolution: every critical state and warning communicated through three independent channels simultaneously:
  - **Spatial position** — where on the screen the indicator appears; readable when colour and icon form are unclear
  - **Icon form** — the shape of the indicator independent of colour
  - **Colour** — the standard visual cue, now one of three rather than the only one
- The combination means that the failure of any single channel under operating conditions does not remove the signal. A surgeon whose attention is divided, who is looking at the device under difficult lighting, and who cannot read colour accurately can still confirm the device state from spatial position alone.
- IEC 62366-1 formative evaluation governed this design decision — redundant cues directly address the use-related hazard of state misinterpretation under operating theatre conditions.
- Surgeon-reported from design review sessions: state verification reduced to brief glance recognition. **State as design review session feedback, not post-deployment measurement.**

### Cox Marine cluster displays (fault prioritisation in multi-unit configuration)
- The alarm challenge in multi-engine configurations: when multiple engines are present, a fault condition in one engine must direct attention to the priority engine, not just signal that a fault exists somewhere.
- This distinction was discovered through scenario testing during Concept Convergence: designs that passed nominal-state evaluation failed the multi-engine fault scenario because they surfaced fault presence without directing attention. Captains scanning 6 tiles for the fault source under time pressure is a design failure even if the fault indicator is technically visible.
- The two-level alarm architecture:
  - **Fault-summary area**: a dedicated zone surfacing the highest-priority condition across all engine tiles; captains see the priority fault without scanning
  - **Per-tile alarm highlighting**: the engine tile in fault state changes visual treatment to pull attention; captains can confirm the source after the summary area has identified it
- Military night vision mode: all alarm states — including the two-level structure above — must remain distinguishable under night vision goggles. This is a hard constraint that eliminated several alarm colour and contrast approaches that would otherwise have been viable.

### Elsner Elektronik (consumer alarm tiering — non-technical audience)
- The alarm design challenge for a consumer embedded device: the user base includes non-technical occupants who have no ability to address sensor faults directly. An alarm that communicates a technical fault code to someone who cannot interpret it is not an alarm — it is noise that trains users to ignore the next alarm.
- Dual-priority alert system:
  - **General alerts** (routine): sensor outside preferred range, calibration drift, delayed readings. Visual and auditory signal at low urgency; communicates that something can be adjusted or that an engineer should be informed when convenient
  - **Critical notifications**: complete sensor failure, safety-relevant state changes. Distinct visual treatment, escalated auditory signal; communicates that something requires immediate attention
- Calibration for audience: general alert communicates "something to know about"; critical notification communicates "something to act on now." The information content is different for an audience that cannot interpret technical fault codes.

### Gexcon CFD simulation (silent failure surfacing — expert software alarm design)
- The warning design challenge in expert simulation software is specific: the error does not stop the system; it completes normally and produces output that appears valid. The alarm must interrupt a process that would otherwise succeed silently.
- Before redesign: 5–8 configuration errors per simulation, each requiring 4–6 hours of corrective work. The errors produced valid-looking outputs that were structurally incorrect.
- The warning architecture addressed this at three points in the simulation workflow:
  - **During scenario setup**: warnings surface for incomplete required values, prompting completion before the simulation runs
  - **At contradictory inputs**: when configuration values are internally contradictory, the warning surfaces before the simulation is initiated
  - **At error detection**: when an error is detected post-run, the warning specifies the error, its location in the configuration, and the corrective action
- Each warning was designed with actionability as the standard: the user must understand both what is wrong and what to do. A warning that communicates an error code without a corrective path is not actionable.
- **Configuration errors: 5–8 → 1–2. Measured. Corrective load: 4–6 hours → approximately 20 minutes. Measured.** The warning architecture is a primary mechanism for both reductions.

### Stromer e-bike embedded display (warning architecture redesign — consumer vehicle)
- The warning design challenge on the Stromer embedded display had a specific cause: a previous external agency had designed the screen architecture first, then added warnings as visual overlays afterwards. The warnings had no native relationship to the surface they were placed on. The consequences were observable and classifiable:
  - Warnings covered screen content they should not cover
  - Warnings interfered with active interactions
  - Some warnings were too persistent; others too easily dismissed
  - Warnings appeared without enough context for riders to understand what they referred to
- The bike carries the full range of warning types across safety warnings, status alerts, error states, and threshold notifications. EN 15194:2017, the European standard for electrically power-assisted cycles, specifies requirements for warning device symbology and behaviour. Regulatory colour conventions (yellow for non-critical, red for critical conditions) constrained some design decisions — including a tension in the tire pressure sensor workstream where the standard specified yellow for sensor malfunction states while severity logic called for red.
- Creative Navy's redesign addressed all three layers simultaneously: the layout and overlay system, the information architecture, and an explicit set of rules and principles governing how warnings and interruptive elements relate to the screen structure across all states. This is the correct sequence — structural rules before components — and it is what the previous engagement had not followed.
- The outcome was tested using a methodology Creative Navy designed and ran: 10 participants rode the bike for 3 days each on real routes in Munich and surrounding countryside, logging every issue by severity on a 4-level scale (interference, annoyance, issue needing user intervention, critical issue). Before the redesign: warnings accounted for approximately 30% of all issues rated as requiring user intervention. After the redesign: the same test with 10 users (6 returning, 4 replacements) using the same bikes, routes, and logging protocol. Warnings did not appear on the issues list. Creative Navy ran the same test again two years later; warnings remained absent.
- Eye tracking in actual riding conditions (5 participants, same routes) measured the cognitive consequence: average glance duration at the display fell from 4.32 seconds to 1.89 seconds — from more than twice the 2-second threshold established by road safety research (Klauer et al., 2006; NHTSA Driver Distraction Guidelines Phase 1) to within the safe zone. Glance frequency per kilometre fell by 18%.
- **Evidence basis: warning test results Creative Navy-designed and run, three rounds, consistent methodology. Eye tracking Creative Navy-measured in real riding conditions, 5 participants.**

### Gericke industrial HMI (alarm rationalisation and root-cause hierarchy — process control, client-measured)
- This is the portfolio's industrial alarm-management case — the context where ISA-18.2 and IEC 62682 are the governing frameworks. It exhibits the two failure modes the page treats as central, working together: **no priority hierarchy** (research found operators attending to the most *visible* alarm rather than the most *relevant* one) and **alarm flooding** (a single fault generating a cascade of secondary alarms handled symptom by symptom). The legacy interface also failed on **actionability** — alarms were raw error codes with no corrective path, requiring a manual lookup.
- The design response was alarm rationalisation plus a root-cause hierarchy:
  - **Root-cause alarm hierarchy**: secondary alarms are collapsed beneath their originating event and probable cause is indicated, so operators address the cause rather than chasing effects. The conveying-blockage illustration highlights "Valve V12 failed to reach open position — probable root cause of 6 active alarms" directly on the process path, and maintenance is dispatched to the actual fault rather than after several wrong attempts.
  - **Contextual alarm explanations**: raw codes are replaced with plain explanations of what the condition is and what to do — including, critically, the case where the correct action is *no action* (the refill-cycle event surfaced as "temporary deviation expected — no operator action required," with secondary alarms grouped beneath it).
  - **Updateable error library**: previously known error messages were collected so explanations could be designed and improved over time without heavy rework — an alarm-rationalisation discipline built into the product.
- The measured alarm-quality outcome is the **repeat-alarm rate**, the process-industry measure of nuisance-alarm burden: **repeat alarms more than halved at every site — 42% → 18% (Swiss pharma), 58% → 28% (Italian food), 73% → 35% (Swiss chemicals). Client-measured, three sites, within a confirmed single-variable window.** Fault-diagnosis time fell by roughly two-thirds over the same period (24 → 8, 38 → 12, 68 → 20 min), the recovery-cost signature of operators reaching the originating fault rather than chasing the cascade.
- **Evidence basis: client-measured by Gericke (not Creative Navy-measured), confirmed single-variable window, three sites described by type and geography only.** The "most visible vs most relevant" finding came from operator testing; the conveying and refill examples are Creative Navy reconstructions of the redesign, not logged incidents. Gericke is not a regulated device — it operates in GMP environments (GAMP 5 relevant); ISA-18.2 / IEC 62682 are the relevant alarm-management frameworks, not IEC 62366-1.

# `/capabilities/warning-and-alarm-clarity-improvement`

Alarm management as a discipline — its lifecycle, its two standards regimes and its characteristic failure modes — is described on the alarm-management page; this page is what Creative Navy does about alarm clarity in a specific product.

---

## Domain vocabulary

- Alert fatigue / alarm fatigue — the desensitisation that occurs when users encounter too many alarms or too many low-priority alarms; see the alarm-management page for the discipline that addresses it
- Actionable warning — a warning that communicates both the problem and what to do about it; a warning that communicates a problem without a next action is not actionable in time-pressured environments
- Redundant cues / redundant communication channels — multiple independent signals for the same alarm, so that the failure of any single channel under operating conditions does not remove the signal; essential in environments with variable lighting, noise, or vibration
- Mute behaviour / alarm silencing — the design of what happens when a user silences an alarm; a muted alarm must remain visible and not be dismissible to a state where it can be forgotten
- Recovery indication — the signal that a previously alarmed condition has resolved; without it, users cannot confirm whether their action was effective
- False positive / nuisance alarm — an alarm triggered under conditions that don't require action; the primary driver of alert fatigue; reducing false positives is as important as ensuring genuine alarms surface. The repeat-alarm rate (the share of alarms that recur) is a process-industry measure of nuisance-alarm burden (Gericke)
- Visual differentiation — alarm states distinguished from each other and from normal states through multiple visual attributes, not just colour; required by IEC 60601-1-8 for alarm systems in medical electrical equipment and sound practice in all high-consequence contexts
- Silent failure warning — a warning for a process error that would otherwise complete silently, producing an output that appears valid and is not; a specific alarm design challenge in expert software
- Warning architecture — the structural rules and principles governing how warnings, overlays, and interruptive elements relate to the screen layout; distinct from the visual design of individual warning components; must be established before components are designed

---

## Evidence to draw on

### Kardion MCS Controller (regulated alarm architecture under IEC 60601-1-8 and IEC 62366-1 — most formal)
- The alarm architecture was not a design preference — every requirement was derived from use-related hazards identified through the IEC 62366-1 usability-engineering process, with the alarm-system requirements themselves set by IEC 60601-1-8 (the collateral standard for alarm systems in medical electrical equipment)
- Requirements that shaped the design, each traceable to specific identified hazards:
  - **Priority tiering**: alarms ranked by clinical urgency; the visual language at each priority level must be unambiguously distinguishable
  - **Visual differentiation beyond colour**: IEC 60601-1-8 requires that colour alone is not the differentiating attribute; each priority level has a distinct combination of colour, icon, border treatment, and spatial behaviour
  - **Mute behaviour**: a muted alarm must remain visually present at a reduced prominence level; the interface must not provide a pathway to a state where an active alarm is invisible
  - **Alarm state visibility**: the absence of alarm must be as confirmable as its presence; operators must be able to confirm that no active alarms exist, not just observe the absence of an alarm indicator
- The alarm architecture requirements paradoxically constrained — and therefore clarified — the option space for the standard view. Certain spatial positions and visual treatments were reserved for alarm-layer use, eliminating them from the nominal state hierarchy. This simplified the remaining design decisions.
- **FDA approval: design passed evaluation as submitted, no design changes required.** The alarm architecture contributed to the review satisfying the identified use-related hazards related to alarm misinterpretation and missed alarms.
- **Scope: formative only. Summative validation and regulatory submission are the manufacturer's responsibility.**

### deSoutter Medical / Zethon (redundant cues — most specific alarm channel design)
- The primary alarm design finding from benchmarking: **most of the 6 benchmarked comparable devices used colour as the primary — and often sole — indicator of device state and warning conditions.** Under variable theatre lighting (surgical headlights repositioned, overhead illumination adjusted during procedures), colour coding becomes unreliable.
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

### The industrial engagement (a real taxonomy, poorly surfaced)
- The client is **a European industrial automation vendor whose process control software coordinates machining cells**. **Findings are what the review found in that system, never general claims about industrial software.**
- The failure findings: in the alarms table, an error row and a selected row were both solid red simultaneously, and one row duplicated another verbatim (E21); in the alarm list, severity was conveyed by a leading icon alone — no text, no row tint (E32).
- Alarm detail carried a real taxonomy — workpiece, pallet, timestamp, severity, numeric fault code, source classification, failed operation — **poorly surfaced rather than absent** (E33).
- The designed responses: an operator instructions layer distinguishing notification from instruction, with different responses — informational items *acknowledged*, actionable items *completed* — and a batching panel grouping related interventions in one storage unit into a single instruction so the operator makes one trip (E42); and a pre-warning state specified for tool lifetime below a defined threshold (E48).

### AIT heat pump controller (alert presentation only — not alarm-scheme design)
- AIT, a European manufacturer of residential and commercial heat pumps, may be named. **A light touch only: these are alert-presentation decisions, and this engagement did not design an alarm scheme — do not extend it into alarm expertise.**
- Alerts overlay the widgets rather than pushing the layout down (A41): more prominent, keeps the system and scenario controls where the user expects them, and avoids a scroll transition the hardware may not render smoothly (A35).
- The alert banner is the single exception to a non-interactive status bar, because it is the only element there large enough to be selected reliably (A42).

### Streetec kntrl 2 (thresholds derived from certification rather than chosen)
- Streetec GmbH and the product, kntrl 2, may be named.
- The alarm model: thresholds derived from certification rather than chosen — the vehicle's suspension certification specifies a permitted pressure range per axle, and operating outside it must warn the driver, with some regulations permitting operation outside the range below 50 km/h (S25); user-settable threshold values; and speed-conditional alarm logic (S26, S27) — adjustment of pressures while driving is restricted by regulation, enforced by three independent interlocks (accelerometer-detected movement, a calibrated speed signal with a user-set threshold, and a configurable digital input such as the handbrake), with a minimum pressure per axle that can never be overridden.
- Two-level alert escalation (S43): a first attempt at a blocked action produces an inline notification; a second attempt produces a modal. **Colour stays neutral during normal operation so that alert colour retains meaning** — raising and lowering pressure are both normal operations and neither is colour-coded as a warning.

### The MDU ship motion monitor (acknowledgement as distinct from clearing — the page's first worked example)
- The product may be named — the MDU; the manufacturer is not named. Verbatim quotation is permitted for this engagement, attributed to role.
- The alarm binds to the rolling 20-minute maximum and minimum rather than the live value, because the live value leaves the band seconds after entering it — which gives the alarm a statable meaning rather than a momentary one: *"That means that sometime within the last 20 minutes you are outside the alarm level."* (M41)
- **Acknowledge replaced Clear (M42), and the record is honest about authorship: the specification required manual clearing, Creative Navy argued a Clear control had no function because nothing done on the screen changes the state of the ship, and the convention that resolved it came from a practitioner** — the external advisor supplied the bridge convention: the alarm flashes red, *Acknowledge* means "I have seen it", the indication holds solid red, and it clears itself when the condition is no longer present.
- A pop-up carrying the alarm text and the Acknowledge control was chosen over making the flashing value itself the target, on discoverability grounds raised by Creative Navy against its own more elegant alternative: *"how would a user who never seen the GUI know where to tap?"* (M43)
- Self-cleared alarms are not lost: they accumulate in the log behind a count badge, with acknowledge-all available there (M44). Timestamps were kept out of the pop-up and placed in the log, because self-clearing bounds the latest alarm to twenty minutes old (M48). Multi-alarm presentation was modelled on phone notification behaviour at the manufacturer's request (M46). Alarm ordering is chronological, with a forward provision for a parametric-roll priority and an alarm-versus-warning distinction — neither was built (M47).
- The principle underneath (M45): *"if the captain decide to just push the ship on, then our system should not kind of challenge that decision and just go back into normal sailing"* — **an advisory system that keeps asserting a condition the operator has already accepted is producing noise, not oversight.**

### Oceaneering dispatch panel (one flashing state, two opposite obligations)
- Oceaneering may be named; nothing else in the engagement may be. **Client speech is reported, never quoted.**
- The annunciation case in full: one flashing state carried two opposite operator obligations — blinking signalled both "a cart has been placed, start the dispatch" and "a cart has arrived, pick it up". The sales consultant's diagnosis, reported: an operator reads a blinking control as the system having something for them, presses it and does whatever it offers — while the fleet backs up behind carts nobody has removed (O33).
- The signal-saturation observation (O34): choose the wrong cart type and the vehicle sets the cart down and leaves without saying why; the only physical indication is worse than none — the vehicle sits beneath the cart flashing its lights, and staff do not notice, **because a vehicle whose lights always flash cannot signal a fault by flashing.**
- The resolution (O62): one colour for sending, one for receiving, each **flashing when an action is required and steady when it is not**, with red reserved exclusively for errors — because red appearing in normal operation teaches operators to ignore it. Seven station statuses, each carrying colour plus a directional icon plus the role letter, with a legend reachable from the panel.
- The flashing-discipline rule (O75): one thing flashing at a time — in a twelve-station area, twelve flashing stations convey no priority.
- **Keep O63's qualification attached: the flashing/steady convention partly existed at one site, for sends only; the contribution is generalisation, a stated rule and the non-colour channels — an adopted and systematised convention, not a Creative Navy invention.**
- The annunciation argument sits in the territory ISA-18.2 and IEC 62682 describe; **no rationalisation process was run and no alarm-management credential is claimed** — the convention was reasoned out from the operators' problem and independently endorsed by operations managers at two hospitals, which is convergence on an established convention, not conformance to it.

### Raymarine next-generation fixed-mount VHF (priority by consequence, arbitration before display)
- The client is named Raymarine; the new radio's name may not be used. No speech from this engagement is quoted or reported.
- A complete priority architecture: **four event priority levels assigned by consequence rather than arrival order** (R125) — emergency (outgoing distress, received distress, local man overboard) on a persistent incident surface no ordinary action dismisses; high concern, prominent and actionable with its source visible, never silently altering a radio control; operational, noticeable and proportionate; background, updating quietly and never taking keypad focus.
- **A five-step arbitration sequence runs between an event arriving and being shown** (R126): classify by type and consequence; coalesce exact duplicates so repeat packets refresh an existing record rather than stacking dialogs; arbitrate against the active incident, the radio state and the current focus owner; present on the appropriate surface with its permitted actions and sound; and restore the prior task only after a validity check.
- The restoration rule completes the arbitration (R127): an interruption stores a structured snapshot and restores it conditionally — **no unsent action is ever replayed**, and a restored call draft requires a new deliberate send rather than resuming into a transmission.
- The three-way separation the page's other entries do not make (R128): **silencing an alarm, acknowledging a notice and resolving an incident are different acts, and performing the first never performs the others.** Three emergency types are modelled separately with independent identities, timelines and histories — a local man-overboard incident records a reference position and runs an elapsed clock **and transmits nothing**; an outgoing distress alert is a protected radio action with its own states; a received distress alert is information from another station, and viewing or silencing it transmits no acknowledgement.
- **The Raymarine–MDU bridge-alert-management convergence observation is NOT written on this page.** It is written once on the alarm-management page and once on the marine context page, never a third time, and never as conformance.

### Schone Airspace Group Mission Control (acknowledgement is an attention state, not a clearing event)
- The client is named Schone Airspace Group. No speech from this engagement is quoted or reported.
- Every alert names its owning aircraft or service in its first visible line and keeps that owner across the fleet card, the inspector, the live notice and the history (D93). The accepted cost: owner information is repeated in compact alerts, trading text density for precision.
- **The transferable decision (D94): acknowledging a notice is an attention state, not a clearing event.** Acknowledged-and-active remains an explicit combined state, and only a source clearance event moves the condition to cleared; a critical banner never takes on a success tone because the operator has seen it. **It generalises to any alarm system where operator attention and underlying condition have been conflated.**

### Maritime traffic software portfolio (two alert populations, four actions with four meanings)
- The client is **a European vendor of maritime traffic monitoring, inland navigation and communications software for port authorities, coastal administrations and waterway operators**. No speech from this engagement is quoted or reported.
- **The contribution the page does not otherwise have is the separation of two alert populations by what they are about: an operational alert concerns traffic; an equipment fault concerns the infrastructure that produces the traffic picture** — and the legacy system placed both in one list ordered by receipt time, where ordering by receipt was easily mistaken for operational priority and an action history could carry visual weight comparable to the current lifecycle state (W44).
- The typed-queue decision (W54): a single chronological notification queue was rejected for mixing navigation alerts with technical faults; a filtered single list was rejected because the current filter could hide a class of important event. The selected model presents navigation alerts by operational priority and lifecycle, with equipment health in its own typed view carrying an impact explanation, both cross-linked from a common event history.
- The four-action lifecycle (W55): **acknowledge** registers receipt by an authorised actor; **assign** makes a named person or role accountable and may follow acknowledgement; **resolve** requires a governed resolution state with an attributable actor; **dismiss**, where supported, hides a view item and changes nothing underneath. A single multifunction control whose meaning changed with the selected item was rejected, and transitions expose pending, succeeded and failed states from service acknowledgement rather than optimistic confirmation.
- **Carry the measured evidence with its framing**: alert prioritisation — legacy median first answer 80.5 seconds, prototype 53.0 seconds, 34.2% lower; correct 6 of 8, then 8 of 8; all eight faster (W86). **This result is Creative Navy-measured under controlled conditions: eight participants, sanitised training scenarios on a design prototype rather than a production installation, six of the eight with prior programme exposure; the time measure is time to a first submitted answer regardless of correctness; no significance test, no confidence interval; and the study states its percentages must not be combined with the other tasks' into one figure.**
- **The bridge alert management convergence is not written for this engagement either** — it lives on the alarm-management page (Raymarine and the MDU together); this engagement is shore-side VTS and sits even further outside that regime. Do not make the observation again.

---

## What this page must not claim

- AIT: alert presentation only — never alarm-scheme expertise; the previous generation's 98 fault codes are background scale, not audit findings; nothing tested with users.
- Streetec: regulatory constraints shaped the design; no safety result was measured.
- The MDU: no safety outcome or safety-critical credential — the manufacturer states the system is deliberately non-actuating and its alarms are comfort, cargo and crew-safety alarms rather than immediate-danger alarms; no regulatory or type-approval credential for the interface or the panel; no fuel, cargo-loss or alarm-response figure; nothing tested with users (M27).
- Oceaneering: reported speech only, never quotation; no alarm-management credential — ISA-18.2 and IEC 62682 frame the argument and no rationalisation process was run; the two-hospital endorsement is a convergence of expert judgement from the operations side, not a measured result or validation; nothing was measured (O95).
- Raymarine: no safety, rescue, distress-response or collision outcome; no type-approval, certification or conformity credential — radio protocol behaviour, distress procedure, alarm audibility and final conformity remained Raymarine's throughout; the bridge-alert-management convergence is never written on this page and never as conformance; no field or acoustic claim (R90).
- Schone: no flight-safety, airworthiness or certification credential; the product is in test; nothing measured in flight.
- Maritime VTS: never average the study percentages or write a combined headline; never "eliminated operator error"; a safety flag denotes a need for domain scrutiny — not a hazard classification, and not closed by a design that tests well; no claim about live radio, radar, AIS or vessel traffic behaviour (W100).

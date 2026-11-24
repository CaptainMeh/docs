# `/contexts/high-consequence-environments`

---

## Domain vocabulary

- Performance in reality — the Creative Navy principle that design must be evaluated against the conditions where failure is costly, not the conditions that produce clean results (link to `/glossary/our-concepts/performance-in-reality`)
- Use-related risk / use-related hazard — the regulated-domain terminology for interface-induced harm; also applicable in non-regulated high-consequence contexts
- Operating conditions vs. test conditions — the distinction that defines this context; designing for operating conditions means designing for vibration, glare, divided attention, time pressure, gloved hands, abnormal states
- Interpretation failure — operators executing the correct task with an incomplete mental model of system state; in high-consequence process environments this, not mechanical failure or lack of training, is the dominant source of expensive error (Gericke)
- Precautionary over-intervention — stopping or overriding healthy equipment under ambiguity because the interface does not make state legible enough to act with confidence; a specific high-consequence failure mode where the cost is borne as lost availability rather than as a single incident
- Abnormal conditions / degraded mode / fault states — explicit design targets in high-consequence environments, not edge cases to be addressed if time allows
- State visibility — the degree to which operators can understand what the system is doing without active interpretation
- Alarm hierarchy / alarm management — the organisation of alerts by priority and probable root cause so that operators attend to what matters most under pressure, rather than handling a cascade symptom by symptom
- Time pressure / divided attention — the operating conditions that collapse the performance difference between good and poor interfaces
- Error recovery — in high-consequence environments, errors will occur; the interface's behaviour when they do determines whether harm, downtime, or scrap follows
- Residual risk — the risk that remains after design mitigations are applied; acceptable residual risk is the target, not zero risk
- Non-happy path — the interaction paths that occur under abnormal conditions; in high-consequence environments these are as important as the nominal workflow

---

## Evidence to draw on

### Torqeedo maritime HMI (strongest measurement evidence in this context)
- Hybrid electric vessel control — 27 screens, 4 operational modes, scales from ~6m to 55m commercial vessels
- 10-inch embedded display operating under: vibration, sharp vessel movement, spray, glare from cold water, rain, gloved interaction, night operations, temperatures −5°C to +35°C
- Research was operationally immersive by necessity: 12 sea trials over 6 months; 15 professional captains; night operations through early morning
- Discovering the emotional dimension of control system interfaces: the relief crews experience when information remains stable as the vessel behaves unpredictably. This shaped the stability and predictability requirements of the interaction design — not as a UX preference but as an operational requirement grounded in observed crew behaviour.
- The central design problem: propulsion sensors, batteries, and generators update at different rates. Presenting them on one screen risks a display that reads as unstable or contradictory. Resolution: a grid structure that synchronises competing cadences into a unified rhythm — captains perceive one system, not three.
- **Energy state identification speed: 50% faster with new interface vs. legacy. Directly measured — controlled environment experiment, 24 subjects.**
- **Glance reduction during manoeuvres: tasks requiring multiple screen transitions now confirmable with a single glance. Measured via eye tracking, 7 subjects, during sea trials.**
- **All 15 professional captains rated the new interface as significantly better. Participant-reported, structured feedback across all 12 sea trials.**
- Yamaha Motor Co. acquired Torqeedo following the engagement. CEO reported the interface strengthened competitive position. **Causal link between interface and acquisition is inferred, not documented — frame carefully as contributing to competitive position that preceded acquisition.**

### Kardion MCS Controller (regulated device, clinical conditions)
- Cardiac support controller — patient safety during high-risk cardiac procedures and cardiogenic shock recovery
- Clinical operating conditions: surgeons at 3 metres from the controller during procedures; nurses close, monitoring multiple parameters; operating theatre time pressure; sterile field constraints
- Layout stability standard — Creative Navy's internal design standard (above regulatory minimum): no element shifts position across any view transition. Surgeons in high-consequence environments must rely on spatial memory, not active search.
- 34 directions explored for the standard view; 9 for the flow adjustment overlay — the breadth of exploration was necessary because the constraint set was genuinely contradictory
- **FDA approval: the design passed FDA evaluation as submitted, with no design changes required. Documented and verifiable.**
- Operator feedback from clinical deployment: multiple doctors described the controller as among the best-designed tools they had encountered. **Client-reported from two timepoints (design sessions and post-deployment). Not independently verified.**
- 3-year Implementation Partnership

### deSoutter Medical / Zethon (operating theatre conditions)
- Powered ultrasonic bone cutter, orthopaedic and trauma surgery — IEC 62366-1 formative evaluation
- Operating conditions: gloved hands, brief glances (primary attention on surgical field and patient), divided attention, variable theatre lighting
- Design standard derived from those conditions: recognition over recall — device state must be readable in a fraction of a second without active interpretation
- Redundant non-colour cues for every critical state (spatial position + icon form + colour) — required because colour alone fails under variable theatre lighting, which is the actual lighting condition
- 8 surgeons in structured review sessions reported: state verification reduced to brief glance recognition; parameter adjustments no longer interrupted surgical workflow. **Surgeon-reported from design review sessions, not post-deployment. State explicitly.**
- **Scope: formative evaluation only. Summative validation is the manufacturer's responsibility.**

### Gexcon CFD simulation (deferred consequences, invisible errors)
- Industrial safety engineering — gas dispersion, explosion risk, facility safety validation
- This is a high-consequence context with a specific character: the error is not immediately visible. A misconfigured simulation runs. It produces outputs that look valid. Those outputs become part of a safety assessment used to make decisions about facility operations, emergency planning zones, or regulatory compliance. The error surfaces when the assessment is challenged, re-run, or — in the worst case — during an incident investigation.
- Before redesign: configuration errors 5–8 per simulation, each producing 4–6 hours of corrective load. The safety assessment downstream of multiple error-correction cycles carries structural uncertainty about whether the simulation configuration was valid.
- **Configuration errors: 5–8 → 1–2. Measured by Gexcon in real deployments.**
- **Corrective load per error: 4–6 hours → approximately 20 minutes. Measured.**
- The mechanism was specific: interaction architecture that makes required values visible during scenario setup, surfaces warnings for incomplete or contradictory input, and specifies how the system responds to configuration errors — rather than presenting errors after the fact

### Beissbarth automotive calibration (precision measurement, field conditions)
- Multi-device calibration system for authorised and independent workshops — measurement accuracy with direct safety consequences for vehicle safety systems
- Operating conditions: technicians moving around the vehicle with tools in hand; reading embedded display from 2–3 metres during movement; rugged tablet used at different positions; variable workshop lighting and reflective surfaces; calibration sequences that do not pause for interface interpretation
- Design standard: unambiguous state communication across all three device types under movement and lighting conditions
- **Calibration time: 18 → 12 minutes per vehicle. Client-measured across 8 production deployment locations.**
- **Training eliminated — Beissbarth's commercial deployment model no longer includes onboarding training. Client-reported.**
- Repeated measurements reduced — direction confirmed by client measurement; exact figure not available

### WCO/IPM (enforcement integrity through adoption)
- This is high-consequence in a network sense: the platform's enforcement value depends entirely on adoption density across all stakeholder groups. An officer who doesn't use the system because it's too slow during inspections removes that data point from the intelligence network. A rights holder who doesn't file because the interface is confusing removes that alert from officers.
- Field conditions varied significantly: ports, airports, land borders; variable connectivity; mixed device fleets; limited time per inspection
- **78% reduction in officer training costs, based on reduced training hours. Client-reported.**
- **107 governments; 2000+ officers in field operations. Client-reported.**
- **200% rights holder sign-up increase; 67% increase in rights holder platform use; 20% increase in officer use. Client-reported.**

### Gericke industrial HMI (interpretation failure as the dominant consequence; measured within a confirmed single-variable window)
- Industrial process control — dosing, feeding and conveying of bulk solids and powders in pharmaceutical, food, and specialty-chemical production. The redesigned GUC (Gericke Universal Controller) HMI replaced the ageing Easydos Pro interface and unified Gericke's previously fragmented control philosophies.
- The defining consequence profile of this context, and the analytically important one: across three deployment-and-research sites the most expensive operator errors were **not** mechanical failures, lack of training, or negligence — they were **interpretation failures caused by insufficient system transparency**. Operators executed the correct task with an incomplete mental model of process state and, under ambiguity, stopped or overrode *precautionarily* rather than risk a deviation. The cost is borne as lost availability and unnecessary maintenance, not as a single dramatic incident. Two plant-manager comments anchor this (client-reported): a pharmaceutical site reported that most downtime came from precautionary actions — highly trained operators stopping rather than risking a deviation when information was ambiguous; a powder-coatings site reported operators spending too much time guessing, trying several responses before the real cause was found.
- Operating conditions that set the design standard: time pressure, gloved interaction, widely varying operator expertise, rapid movement between monitoring and intervention, and a fixed 1024×600-floor industrial panel base. The dosing algorithm was an immovable constraint — the entire interaction layer was redesigned around a fixed engine.
- The mechanism: a live process mimic showing state directly on the diagram, graphical error visualisation (failed components highlighted, replacing raw error codes), a root-cause alarm hierarchy (secondary alarms grouped beneath their originating event, probable cause indicated rather than a flat list), and a three-tier progressive-complexity model so each role meets the level of detail its task requires.
- **Client-measured outcomes across three sites, within a confirmed single-variable window** (Gericke confirmed no hardware, sensor, mechanical, training, recipe, or process changes over the measurement period, captured four months after go-live; sites described by type and geography only):
  - **Fault-diagnosis time roughly two-thirds faster at every site:** 24 → 8 min (Swiss pharma), 38 → 12 min (Italian food), 68 → 20 min (Swiss chemicals).
  - **Operator-caused stoppages roughly halved:** 3 → 1, 7 → 3, and 15 → 6 per month respectively.
  - **Repeat alarms more than halved:** 42% → 18%, 58% → 28%, 73% → 35%.
- These are the high-consequence-context equivalent of the Torqeedo and Gexcon measured findings: a real performance difference under the conditions where ambiguity is costly, not a demo-condition improvement. Lead with diagnosis time, operator stoppages, and repeat alarms (coherent causal story); treat availability/OEE as supporting.
- **Regulatory framing — distinct from the regulated-device cases above.** The GUC HMI is industrial process-control software, not a medical device; IEC 62366-1 does not apply and no device-validation claim is made. In pharmaceutical deployments it operates inside GMP-governed environments where GAMP 5 is relevant and where status visibility, alarm handling, batch-execution workflows, and data integrity bear on compliance; FDA 21 CFR Part 11 was studied but was not a hard requirement. Creative Navy's responsibility was the HMI/UX; validation of the deployed system is the manufacturer's and operator's responsibility.
- **Evidence calibration: client-measured by Gericke (not Creative Navy-measured), confirmed single-variable window, three sites described not named.** The per-plant error frequencies are client-reported from plant managers' own operational statistics (not telemetry), and the OE01–OE20 error taxonomy is a Creative Navy analytical synthesis (not a field instrument).

### Industrial process control (brief)

- A European industrial automation vendor whose process control software coordinates machining cells. In development; nothing here is an outcome. Phrase as observed in that system, not as general truths.
- Entering the cell trips the safety fence and stops production — every manual intervention carries a production cost.
- Every operator screen is bolted to its own machine; to learn a machine's state the operator walks to it, and overhead stack lights exist because no screen is readable across the hall.

### The MDU (an example that declines the obvious framing — brief)

- The MDU, a ship motion monitoring system; the manufacturer is not named. Verbatim quotation permitted, attributed to role.
- The operating setting: a bridge display read by a master or watch officer in weather that is itself the reason for reading it. The expected response to an alarm is a change of course or speed, or a combination; deploying stabiliser fins; or consulting shore-based advice. Nothing is actuated by the interface.
- **Carry the manufacturer's own calibration with it, in their words:** "the alarms are not critical as in, if you don't act now, we are all going to die… It's more sort of a comfort and cargo, cargo and crew safety thing. Where if you're rolling 40 degrees and you can do something about it, everybody will be a lot happier and a lot better rested tomorrow." These are comfort, cargo and crew-safety alarms, not immediate-danger alarms — the page is stronger for holding an example that declines the obvious framing.

### Oceaneering hospital dispatch panel (operational consequence, not patient harm — bounded)

- Oceaneering may be named; nothing else may. Client and customer speech is reported, never quoted.
- The consequence here is operational and infection-control-adjacent — a soiled cart dispatched to a clean destination, a pharmacy delivery blocked behind a waste surge — **not patient harm**. If a passage cannot be written without implying clinical risk, it is left out.
- The reported misuse pattern that illustrates the consequence class: supervisor access granted too widely; at one site night-shift staff switched every detent to send, so no carts could arrive and the system stopped; at another, everyone dispatches waste just before three o'clock, so pharmacy deliveries cannot get through; operators also take the shortest route rather than the correct one, sending carts to the nearest block because it saves walking.

### KISPE Space (a sequencing argument the page does not otherwise hold)

- KISPE Space, a UK space systems engineering company. No quotation marks and no reported speech on any page carrying KISPE. The product was built; Creative Navy did not support the build and has not compared the built interface against the delivered designs.
- **The decision-priority argument:** the engagement's register names a decision priority, and it is not the obvious one — security and permissions, provider semantics, scope boundaries, the meaning of overflight and the definition of an urgent alert all carry higher consequence than the choice of any particular screen layout, **and should be settled before visual refinement creates false expectations.** That is a transferable claim about sequencing in high-consequence work.

### Schone Airspace Group (consequence that is already in motion)

- Schone Airspace Group; no quotation marks and no reported speech on any page carrying Schone. The product was built and is in test, not deployed; nothing may imply aircraft are being flown operationally through this interface.
- **The consequence class this engagement adds: consequence that is already in motion.** In most high-consequence systems the hazard is latent until someone acts; here the aircraft is airborne before the operator arrives at the screen, and the interface's job includes being honest about an instruction whose outcome is not yet known.
- A seven-state command transaction model — ready to request, request sent, awaiting response, command acknowledged, state observed, request rejected, response unknown — each state with its own required source evidence and its own prohibited inference: acknowledgement does not mean the intended mode has been observed; state observed cannot be inferred from acknowledgement alone; rejection cannot be inferred from silence. Rejected: a success toast on click, and a spinner until the mode changes. The accepted cost: more command states require precise copy and event matching, in exchange for less ambiguity about the outcome of each action.
- Silence is an unknown result, not a failure: a response window that elapses without a conclusive event produces an explicit unknown state retaining the target, the action and the request identifier, and triggers no automatic retry. The accepted cost was named and is the sharpest self-criticism in the package: unknown is less reassuring than a binary outcome, but it is accurate and supports a deliberate subsequent check.
- Pair with the withheld control: an uncertain aircraft state blocks an optimistic command display — where link condition and sample freshness cannot establish eligibility, the action shows availability as unknown rather than as ready. The accepted cost was named: apparent immediate availability is sacrificed in uncertain conditions to preserve the accuracy of command affordances.

### Raymarine next-generation fixed-mount VHF (consequence that leaves the system entirely)

- Raymarine may be named; the new radio's name may not. No quotation marks and no reported speech on any page carrying Raymarine. Built and released; no fidelity comparison recorded.
- **The consequence class this engagement adds: consequence that leaves the system entirely.** In every other entry on this page the hazard is contained within the operation — a machine, a patient, a process, a site. Here a voice transmission occupies a shared channel used by every vessel in range, a digital call addresses a specific vessel by its registered identity, and a distress alert reaches a coast station and starts a search. **The interface is the only place an operator can see which of those has actually happened — and the radio's own subsystems, rather than the screen, are the authority on whether any of them did.** Degraded conditions were enumerated rather than generalised: forty-three exception records across eight independent state axes — voice radio state, display context, calling transaction, AIS data quality, positioning, safety incident, interruption and chartplotter link — under the governing statement that a current screen is not a system state, and that the interface is a state interpreter rather than the source of truth for radio outcomes.
- Pair with the three emergency types that are not each other, one of which transmits nothing at all: a locally initiated man-overboard incident records a reference position, its source and its time, and runs an elapsed clock — and transmits nothing; an outgoing distress alert is a protected radio action with its own sending, sent, awaiting acknowledgement, acknowledged and failed states; a received distress alert is information from another station, identified by sender, time and supplied position. Viewing or silencing a received alert transmits no acknowledgement, and silencing a local alarm never ends an incident.

### Handheld command-and-control (the consequence class is commitment — short)

- A European manufacturer of uncrewed systems, including one-way effectors, and the tactical command-and-control software that operates them. No quotation marks and no reported speech. The register is that of a safety-engineering document: written straight, with no relish. **The scope boundary appears with the material**: the engagement covered interface structure, task behaviour, information priority and the clarity of operator control; it did not extend to autonomy, control algorithms, autonomous safety behaviour, the datalink, the effector, targeting logic, or any certification or weapons-review activity. Creative Navy designed the surface through which a human supervises the system; it did not design the system.
- **The consequence class this engagement adds, which the page has no instance of: commitment.** In every other entry the hazard follows from an operator doing something wrong — a wrong setting, a missed warning, a misread value. **Here the operator's act is correct and irreversible, and the hazard is that it was committed against a picture the system could not actually evidence.**
- What addresses it: the written case against a permanently visible touchscreen strike control — a single touchscreen input is not an adequate commitment gate for an irreversible action; symmetric strike and abort placement can imply a physical-key mapping that does not exist; a visible and enabled control communicates that the action is always available when availability actually depends on connectivity, operating mode and vehicle state; and, the load-bearing part, repeated input is not feedback — it adds uncertainty rather than resolving it. The six questions the interface must answer unambiguously: was the input registered; is the command being transmitted; did the vehicle acknowledge it; what state did the vehicle confirm; is the information current or stale; and is abort still available. The counter-recommendation: keep the strike request status visible at all times, but do not expose strike as a permanently active touchscreen control; commit the strike by pressing and holding both flip-guarded physical buttons simultaneously for a defined duration; let the abort control hold a fixed, predictable position, active only once the system confirms an action is in progress and remains abortable. And the rule the whole doctrine turns on: **a requested state must not visually replace a confirmed state before the vehicle reports the result.**
- The recommendation was co-authored with the client's design team, and the deliverable itself records that the hold duration and the physical-control design require human-factors and system-safety testing that was not performed — that limitation belongs in the same passage as the recommendation. **Flags, not hazards; no incident is attributed to the interface.**

### Maritime traffic monitoring (the consequence class is interpretation — short)

- A European vendor of maritime traffic monitoring, inland navigation and communications software for port authorities, coastal administrations and waterway operators. No quotation marks and no reported speech.
- **The consequence class this engagement adds: interpretation, not action.** In every other entry the hazard follows from something the operator does. Here the operator's primary act is to form an accurate belief about what is in the water, from evidence of varying age and provenance, and the hazard follows from believing something the evidence does not support. The object model answers it: vessel, track and observation as three separate objects, with association expressed as resolved, unresolved, changed or unknown — a single resolved vessel record was rejected for obscuring what the system actually knew.
- Four recurring failure modes were named in the analysis: context interruption, through floating panels, detached history and inconsistent window restoration; evidence ambiguity, through identity, radar association, observation age and source health being hidden or conflated; state ambiguity, through insufficiently distinct cues for navigation alerts, equipment faults, acknowledgement, resolution and replay; and work discontinuity, through incidents, open actions, permissions and handover being distributed across independent views.
- **The four safety-review candidates are all interpretation failures** — an obscured target and lost geographic context; an unresolved association read as verified; a historical picture not unmistakably historical; and an observation age that had to be looked for. Ten use-error pathways were analysed, grouping the 36 issues without adding to them, and four were escalated as safety-domain review candidates. **A flag denotes a need for domain scrutiny by the client's product and operational safety authority — it is not a hazard classification, not an accident severity grade, not evidence that an incident occurred, and not closed by a design that tests well. A design solution is not a hazard closeout.**

### Cross-reference

- `/contexts/defence-and-space-systems` — consequence as a cross-sector condition, against a domain with its own vocabulary and regimes.

---

## What this page must not claim

- **Do not add AIT** — that controller governs comfort and efficiency. **Do not add Assemblio** — incorrect assembly has real consequences, but that engagement produced no safety analysis and no safety case. **Do not add Egma** — commercial ordering. **Do not add visioncheckout** — a canteen checkout; the consequence is a queue and a wrong charge.
- **None of the industrial, Streetec, AIT, MDU, Assemblio, Topera, Egma or Oceaneering engagements involved safety-critical or regulated-safety work**, and the page must not imply it.
- **No safety outcome or safety-critical credential from the MDU** — the manufacturer states plainly that the system is deliberately non-actuating and that its alarms are comfort, cargo and crew-safety alarms; no regulatory or type-approval credential for the interface or the panel it runs on.
- **If the Oceaneering material cannot be written without implying clinical risk, leave it off the page.** No infection-control or healthcare-regulatory credential — the clean/soiled interlock implements a rule the client specified; no medical-device claim of any kind; nothing was measured.
- **No flight safety, airworthiness, certification or regulatory credential from Schone**, and no claim that its design prevents accidents, prevents wrong-aircraft commands or reduces operator error — the step from "the interface states the correct fact" to "the operator therefore does the right thing" was not measured.
- **No safety, rescue, distress-response or collision outcome from Raymarine**, and no type-approval, certification or conformity credential — Creative Navy certified to, audited against and worked to none of it.
- **No safety, airworthiness, certification, weapons-review or regulatory credential from the handheld C2 engagement**; no claim that its design prevents accidental activation, wrongful engagement, civilian harm, fratricide or operator error; nothing from its two absolute exclusions (any configuration engaging without human confirmation; the specific re-certification-dependent workflows) may appear or be reconstructable.
- **No safety, certification, conformity or regulatory credential from the maritime VTS engagement**, and no claim that a design decision prevented an incident, a collision or a near miss. Flags are flags.
- **No shipped-as-designed claim from KISPE**, and no validation claim of any kind — nothing was tested with users.
- **No engagement dates anywhere** — sequence and duration only.

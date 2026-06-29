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
- 10-inch embedded display operating under: vibration, hull slamming, spray, glare from cold water, rain, gloved interaction, night operations, temperatures −5°C to +35°C
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

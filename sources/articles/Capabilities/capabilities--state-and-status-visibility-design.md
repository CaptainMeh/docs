# `/capabilities/state-and-status-visibility-design`

---

## Domain vocabulary

- System state / operational state / device state — the current condition of the system as relevant to the user's next action
- State visibility — the degree to which users can understand what the system is doing without active interpretation
- Glance readability / peripheral attention — state communication that holds up under brief, partial attention; not requiring the user to stop and read
- Recognition over recall (link to `/situations/complexity/operators-rely-on-memory-too-much`) — state that the user recognises from visual pattern rather than recalling what an indicator means; in high-consequence contexts this is a safety standard, not a usability preference
- Process mimic — a representation of the physical process (vessels, valves, feeders, flow paths) on which state is shown where the equipment is, rather than in a separate list; the mechanism for process-state recognition (Gericke)
- Symptom-versus-state communication — the distinction between an interface that exposes symptoms (a list of alarms and codes) and one that explains the state that produced them; exposing symptoms forces interpretation and invites misreading a normal condition as a fault (Gericke)
- Spatial consistency / layout stability — the principle that state indicators must not shift position across view transitions; spatial memory is the mechanism that enables glance readability, and layout instability destroys it
- State hierarchy — the organisation of state information by importance; primary state (always visible, highest priority), secondary state (visible in context), tertiary state (accessible but not intrusive)
- State aggregation — combining multiple component states into a single coherent system state display (Torqeedo: propulsion + battery + generation = one unified energy state view)
- Sensor cadence — the update interval of a data source; when multiple sources update at different rates, the display must synchronise them without creating instability
- Mode change / mode indicator — the moment when the system transitions between operational modes; a specific high-risk moment for state visibility failure
- Ambient awareness — maintaining awareness of system state without directed attention; the operational requirement in many complex environments
- State transition — the interface's behaviour when the system moves from one state to another; as important to design as the states themselves

---

## Evidence to draw on

### Torqeedo maritime HMI (state aggregation — strongest measured outcome)
- The central design problem: a hybrid electric vessel integrates propulsion motors, battery banks (40–200 kWh), generators, auxiliary loads, and conversion units. Each is a separate system with its own state. Each updates at a different rate. The captain's question is not the state of each component but the state of the vessel: how much energy do I have, how am I consuming it, what capacity remains?
- The design challenge: presenting multiple sensor systems updating at different rates creates a display that reads as unstable — values changing at different moments, status indicators flickering. The resolution was a grid structure that synchronises competing update cadences into a unified display rhythm. Captains perceive one coherent system, not three competing data streams.
- **50% faster energy state identification — new interface vs. legacy. Controlled environment experiment, 24 subjects. Directly measured.**
- **Glance reduction during manoeuvres — tasks previously requiring multiple screen transitions now confirmable with a single glance. Measured via eye tracking, 7 subjects, during actual sea trials.**
- **All 15 professional captains rated the new interface as significantly better. Participant-reported, structured feedback.**
- State hierarchy explicitly designed: primary (vessel energy state and range), secondary (component-level breakdown available on demand), tertiary (full telemetry accessible but not surfaced by default). The hierarchy allows captains to maintain ambient awareness of vessel state without monitoring every component.

### Cox Marine cluster displays (tile architecture — state coherence across configurations)
- The configuration range spans 1 engine to 6 engines across different vessel types (fast patrol craft, racing boats, workboats). The state communication challenge: a single-engine display and a six-engine display must share a coherent mental model so captains can read both without relearning the interface.
- The engine tile as the invariant unit: one tile per engine, consistent spatial arrangement of state information within each tile regardless of configuration. When the configuration has 6 engines, there are 6 tiles; when it has 1, there is 1. The state reading logic doesn't change.
- Multi-engine fault scenario testing during Concept Convergence: the test revealed that several layout candidates made fault presence visible at the tile level but did not direct attention to the priority engine in a multi-engine fault condition. The state hierarchy within and across tiles had to communicate: something is wrong, and this is where.
- Fault-summary area: a dedicated area surfacing the highest-priority fault condition across all tiles. Captains can identify the priority fault without scanning all tiles individually.
- Military night vision mode: absolute constraint — all state communication must remain legible under night vision goggles, which require specific luminance and contrast ranges that eliminate most standard interface choices.

### Kardion MCS Controller (layout stability as clinical state standard)
- The layout stability standard is the single most specific state visibility requirement in the portfolio: no element shifts position across any view transition. This is Creative Navy's own standard, above the IEC 62366-1 consistency requirement.
- The clinical rationale: surgeons build spatial memory for critical state indicators during a procedure. They depend on that memory when the clinical situation requires rapid response — the blood flow value must be in the same position it was a moment ago, in the same position it was at the start of the procedure. If it has moved, spatial memory fails and active search begins.
- This standard shaped 34 directions of exploration for the standard view — each candidate was eliminated if any element's position changed across the system's view transitions. The constraint was absolute.
- State hierarchy: primary state (device operational status; the min/max flow visualisation that the standard view is built around), secondary state (parameter detail accessible from the standard view), tertiary state (alarm history, configuration). The hierarchy is spatial and visual — not tabbed sections but a layered architecture on a single screen.
- **FDA approval: design passed evaluation as submitted, no design changes required.** The state hierarchy and layout stability contributed to the regulatory review satisfying the identified use-related hazards related to misinterpretation of device state.

### deSoutter Medical / Zethon (recognition over recall in operating theatre conditions)
- The operating theatre is the state visibility stress test: variable overhead lighting, gloved hands, divided attention, primary focus on surgical field. State indicators must be recognisable in a fraction of a second under these conditions.
- The most common failure in competitive benchmarking: colour as the primary state indicator. Under variable theatre lighting — surgical headlights repositioned, overhead field illumination adjusted, different theatre setups — colour coding is unreliable. 6 of 8 benchmarked competitors relied primarily on colour.
- Resolution: redundant non-colour cues. Every critical state communicated through spatial position + icon form + colour simultaneously. The failure of any single channel under theatre conditions does not remove the signal.
- The recognition standard: a surgeon looking at the device must be able to confirm the operating state without reading, without recalling what an indicator means, and without taking attention from the patient for more than a brief glance.
- 8 surgeons in structured review sessions confirmed state verification reduced to brief glance recognition. **Surgeon-reported from design review sessions, not post-deployment measurement.**

### Elsner Elektronik (multi-zone and fault state for non-technical users)
- 54 countries; users range from tech-savvy professionals to elderly consumers with limited technical background. State communication must function across this full range without requiring interpretation.
- The multi-zone state display challenge: a single controller managing heating, cooling, lighting, and blinds across multiple rooms; the state of each system must be visible without requiring navigation between views.
- Sensor fault states: a non-technical occupant encountering a sensor fault must be able to understand that something is wrong and that they need to call an engineer, without needing to understand what a sensor fault is or what it means for the broader system. The state communication calibrates the information precisely for that audience.
- Dual-priority alert system: routine notifications (sensor out of preferred range) distinguished visually and behaviourally from critical notifications (complete sensor failure, safety-relevant state change). The hierarchy prevents alert fatigue from degrading the urgency of genuinely critical states.

### Triopsis workforce management (state hierarchy for schedulers under operational pressure)
- Schedulers managing workforce interventions across a live fleet need ambient awareness of fleet state without monitoring every job individually. The interface must surface exceptions — jobs at risk, conflicts developing, incomplete assignments — without requiring active scanning.
- Predictive conflict indicators: future scheduling problems made visible before they become present crises. State communication for an event that hasn't happened yet but is deterministically approaching — a form of state communication with no close parallel in standard software.
- The state hierarchy within the scheduler view was defined by criticality: jobs requiring immediate action (state: exception, conflict, overdue), jobs requiring monitoring (state: in progress, near deadline), jobs in normal state (backgrounded). The visual hierarchy was derived from this operational hierarchy, not from visual interest.
- Field technician job state: technicians in the field need to know what state their current job is in and what is next. The state communication for field use had to function under outdoor conditions — sunlight, gloves, brief glances.

### Gericke industrial HMI (process-state communication on a live mimic — measured outcome)
- The central state communication problem: the legacy Easydos Pro interface exposed *symptoms* — alarm lists, raw error codes, scattered parameters — but never showed *state*. Operators could not reliably tell whether the process was healthy, so under ambiguity they stopped or overrode healthy equipment precautionarily. State communication had to move from a symptom list to a recognisable picture of the process.
- The mechanism is the process mimic: a live representation of the physical process (the twin-vessel conveying schematic, the feeders, the flow paths) on which state is shown where the equipment is, with failed components highlighted directly on the diagram — the brief's "engine parts that have failed light up in the graphic" — replacing raw error codes. State is read off the picture of the plant, not reconstructed from a list.
- A root-cause alarm hierarchy organises the state of abnormal conditions: secondary alarms are collapsed beneath their originating event, and probable cause is indicated rather than a flat list of effects. This is state hierarchy applied to faults — the conveying-blockage example highlights "Valve V12 failed to reach open position — probable root cause of 6 active alarms" directly on the process path.
- The clearest illustration of symptom-versus-state communication: a normal feeder refill cycle previously surfaced as a cluster of alarms with no indication of which mattered, and operators read it as a fault. The redesigned mimic shows the feeder in "Refill Cycle — temporary deviation expected — no operator action required," so the normal state is recognised as normal.
- A three-tier progressive-complexity model governs how much state detail each role meets: operators see operational state first and drill to diagnostic and engineering detail only as the situation requires — ambient awareness of process health for operators, deeper component state for maintenance and engineers.
- **Fault-diagnosis time fell by roughly two-thirds at every site (24 → 8, 38 → 12, 68 → 20 min) and repeat alarms more than halved (42% → 18%, 58% → 28%, 73% → 35%). Client-measured, three sites described by type and geography, within a confirmed single-variable window.** Faster diagnosis is the operational signature of state being legible; the repeat-alarm reduction is the signature of the alarm-state hierarchy working.
- **Evidence basis: client-measured by Gericke (not Creative Navy-measured), confirmed single-variable window; the refill and valve illustrations are Creative Navy reconstructions of the redesign, not logged incidents.** Gericke is not a regulated device; it operates in GMP environments (GAMP 5 relevant) and the validation boundary is the manufacturer's.

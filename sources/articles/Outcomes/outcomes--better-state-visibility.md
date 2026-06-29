# `/evidence/outcomes/better-state-visibility`

---

## What the outcome is

State visibility is the degree to which users can understand what the system is doing without having to ask. It is not about whether the information is present in the system somewhere — it is about whether it is communicated at the right visual level, in the right spatial position, and through reliable channels under the conditions of actual use.

State visibility failures are among the most consequential in high-consequence and embedded systems. A surgeon who misreads device activation state, a captain who cannot immediately read vessel energy state during a manoeuvre, a calibration technician who cannot distinguish a confirmed measurement from a borderline one, a rider whose eyes are held on the display for 4 seconds because the screen did not communicate its meaning in a glance, an operator who stops a healthy production line because the interface showed alarms but never explained that the equipment was in a normal refill cycle — these are failures produced by the interface failing to communicate state clearly, not by user inattention.

---

## Domain vocabulary

- State visibility — the degree to which users can understand system state without active investigation
- System state / device state / operational state — the current condition of the system relevant to the user's next action
- Mode change / mode clarity — the communication of transitions between operational modes; the highest-risk state transition
- Layout stability / spatial consistency — the principle that state indicators must not shift spatial position across view transitions; spatial memory is the mechanism for glance readability, and instability destroys it
- State hierarchy — the organisation of state information by priority: primary state always immediately visible, secondary accessible, tertiary available but not intrusive
- Recognition over interpretation — state that is recognised at a glance rather than reconstructed from symptoms; an interface that exposes symptoms (deviation, low level, instability) without explaining the state that produced them forces interpretation and invites error
- Peripheral awareness — maintaining awareness of system state without directed attention; the operational requirement in monitoring contexts
- Glance readability — state that can be confirmed with a brief glance rather than requiring reading or interpretation
- Glance duration — the time a rider's or driver's eyes are off the forward scene while reading a display; the direct measurement of whether state is readable within a safe attentional interval; the 2-second threshold (Klauer et al., 2006; NHTSA) is the safety-defined boundary for vehicle-mounted embedded displays
- Fault-diagnosis time — in process-control contexts, the time an operator takes to understand what has gone wrong; a direct measurement of state visibility, since legible state shortens diagnosis and ambiguous state lengthens it

---

## Evidence

### Torqeedo maritime HMI (strongest direct measurement)
- The state visibility problem: propulsion status, battery state, and generator information had been distributed across separate screens; captains had to reconstruct vessel energy state from fragments during manoeuvres
- **Energy state identification: 50% faster with the redesigned interface. Controlled environment experiment, 24 subjects. Directly measured.**
- **Glance reduction during manoeuvres: tasks previously requiring multiple screen transitions now confirmable with a single glance. Measured via eye tracking, 7 subjects, during actual sea trials.**
- The glance reduction is the direct state visibility measurement: a single glance to confirm vessel state, rather than multiple screen transitions, is the operational definition of state visibility improvement in a maritime context
- The mechanism: unified energy state view integrating all components into a single coherent display; stable spatial positions; grid structure synchronising components updating at different cadences into a unified visual rhythm

### Kardion MCS Controller (clinical state visibility — regulated)
- The state visibility standard was the central design requirement: **no element shifts position across any view transition.** This is Creative Navy's own standard, above the IEC 62366-1 consistency requirement.
- The clinical rationale: surgeons build spatial memory for critical state indicators during procedures and depend on that memory when the clinical situation requires rapid response. Layout instability destroys that memory and forces active visual search at the moment it is least available.
- The standard shaped 34 directions of exploration for the standard view — every candidate was evaluated against it; any element that shifted position was redesigned or removed
- State hierarchy: primary state (device operational status; the min/max flow visualisation) always dominant; secondary state (parameter detail) accessible from the primary view; alarm states layered above without disturbing the primary hierarchy
- **FDA approval: design passed evaluation as submitted, no design changes required.** The state architecture contributed to satisfying the identified use-related hazards related to state misinterpretation during clinical use.
- **Scope: formative evaluation only. Summative validation is the manufacturer's responsibility.**

### deSoutter Medical / Zethon (operating theatre state recognition — surgeon-reported)
- The state visibility problem: the operating theatre imposes the most demanding state visibility conditions — variable lighting, gloved hands, brief glances, divided attention. The previous design relied on colour as the primary state indicator, which fails under variable theatre lighting.
- **6 of 8 benchmarked competitor devices** used colour as the primary — and often sole — state indicator. Under variable theatre lighting, this is a state visibility failure waiting for the operating conditions to activate it.
- Resolution: redundant non-colour cues (spatial position + icon form + colour) for every critical state — the failure of any single channel under operating conditions does not remove the signal
- **Surgeons reported: device state could be verified during brief glances without reading. Design review sessions, 8 surgeons. State as surgeon-reported from design review sessions, not post-deployment measurement.**
- Activation state recognition specifically improved: the transition from ready to active — the highest-risk state change in surgical instrument use — was made recognisable rather than requiring interpretation

### Cox Marine cluster displays (state coherence across configurations)
- The state visibility problem: a cluster display serving 1 to 6 engine configurations must communicate engine state coherently regardless of how many engines are present
- The engine tile as the invariant unit: one tile per engine, consistent state information organisation within each tile across all configurations. Captains read engine state the same way whether monitoring one engine or six.
- Fault state visibility: scenario testing during Concept Convergence revealed that several candidate designs made fault presence visible but did not direct attention to the priority engine in a multi-engine fault condition. State is visible; state priority is not — a failure of state hierarchy rather than state presence.
- Resolution: fault-summary area surfacing the highest-priority condition across all tiles; per-tile alarm state highlighting directing attention to the source
- **Distributor feedback, relayed by client: "the best in the industry."** Client-reported from distributor network — not independently verified.

### Elsner Elektronik (fault state visibility for non-technical users)
- State visibility for a consumer product is different from state visibility for an expert system: a non-technical occupant encountering a sensor fault must understand what the fault means for them (call an engineer) without needing to understand what it is technically
- Fault state communication calibrated specifically for the audience: informative without alarming, actionable without requiring technical understanding
- Sensor fault states, calibration drift states, and delayed sensor readings designed for explicitly as primary design targets rather than edge cases
- Dual-priority alert hierarchy: routine notifications visually and behaviourally distinguished from critical notifications, preserving the signal value of critical alerts against routine alert exposure

### Beissbarth automotive calibration (measurement result state — production-measured context)
- Three-level measurement result state communication (confirmed, borderline, out of range) replacing binary pass/fail
- State visibility at the measurement level: technicians can distinguish a confirmed measurement, a borderline measurement requiring repetition, and a failed measurement from the display under workshop conditions (movement, variable lighting, 2–3 metre viewing distance)
- **Calibration time: 18 → 12 minutes per vehicle. Client-measured across 8 production deployment locations.** Part of this improvement is state visibility at the measurement stage: fewer repeated measurements required when the measurement result state is clearly communicated

### Gericke industrial HMI (fault-diagnosis time as the state visibility measure — process control, client-measured)
- The state visibility problem in its clearest process-control form: the legacy Easydos Pro interface exposed *symptoms* — alarm lists, raw error codes, scattered parameters — but never explained *state*. Operators could see information but could not reliably answer what is happening, why, and what to do next. The dominant consequence was interpretation failure: under ambiguity, trained operators stopped or overrode healthy equipment precautionarily rather than risk a deviation.
- The mechanism: a live process mimic showing state directly on the diagram (state shown where the equipment is, not in a separate list); graphical error visualisation with failed components highlighted on the mimic, replacing raw error codes; and a root-cause alarm hierarchy that collapses secondary alarms beneath their originating event and indicates probable cause. This is recognition over interpretation made concrete.
- The clearest single illustration: a feeder entering a normal refill cycle previously surfaced as a cluster of alarms (feed-rate deviation, low hopper level, refill active, dosing instability) with no indication of which mattered — so operators stopped production and called maintenance. The redesigned mimic shows the feeder in "Refill Cycle," expected duration, "temporary dosing deviation expected — no operator action required," with secondary alarms grouped beneath. State is recognised, not reconstructed.
- **Fault-diagnosis time is the direct state visibility metric in a process context, and it fell by roughly two-thirds at every site: 24 → 8 min (Swiss pharma), 38 → 12 min (Italian food), 68 → 20 min (Swiss chemicals). Repeat alarms more than halved (42% → 18%, 58% → 28%, 73% → 35%) as the alarm hierarchy made the relevant alarm legible rather than the most visible one.** Faster diagnosis and fewer repeat alarms are what legible state produces; this is the process-control equivalent of Torqeedo's glance reduction and Stromer's glance duration.
- **Evidence basis: client-measured by Gericke (not Creative Navy-measured), within a confirmed single-variable window (no hardware, sensor, mechanical, training, recipe, or process changes over the period), four months post-go-live, three sites described by type and geography only.** The refill illustration is a Creative Navy reconstruction of the redesign, not a logged incident.

### Stromer e-bike embedded display (glance duration as the state visibility measure — consumer vehicle)
- The state visibility problem on the Stromer embedded display was measurable in terms that connect directly to safety: a rider using a display during active riding cannot hold their gaze on the screen beyond the 2-second threshold at which road safety research identifies a doubling of near-crash and crash risk. Glance duration is the direct measurement of whether state is visible in the time available.
- Before the redesign, Creative Navy measured average glance duration at 4.32 seconds — more than twice the safe threshold. Eye tracking was conducted during actual riding on real routes in Munich and surrounding countryside: 5 participants, the same routes used in the broader usability testing programme. Riders were also glancing 18% more frequently per kilometre than after the redesign.
- The extended glance duration was a direct consequence of poor state visibility: the interface did not communicate its state — warning conditions, ride data, system status — in a form that could be confirmed within a brief glance. Riders held their gaze until they had understood what they were looking at, because looking away with the information still ambiguous left them without the state they needed. This is glance duration as a state visibility failure: the system's state was not readable within the attentional interval that safe riding allows.
- The redesign addressed state visibility architecturally: warning behaviour, layout logic, and the rules governing all interruptive elements were redesigned from the structural level before components were produced. After the redesign, Creative Navy re-measured using the same methodology and routes. Average glance duration fell to 1.89 seconds — within the safe threshold. Glance frequency per kilometre fell by 18%.
- The reference standards: Klauer et al. (2006), *The Impact of Driver Inattention on Near-Crash/Crash Risk* (NHTSA Report No. DOT HS 810 594) — glances exceeding 2 seconds increase near-crash/crash risk by at least two times baseline; NHTSA Driver Distraction Guidelines Phase 1 (2012); ISO 15007:2020. These standards are formally defined for four-wheeled vehicles; the threshold and principle apply directly to embedded displays used during riding.
- **Evidence basis: Creative Navy-measured in real riding conditions, 5 participants, consistent pre/post methodology.** This is the only case in the portfolio where state visibility improvement is expressed as a before/after crossing of an externally defined safety threshold.

### Squaremind dermatology scanning device (patient body position as a state visibility problem)

- The state visibility challenge in patient-operated scanning is structurally distinct from all other examples in this set: the primary state the patient must understand is not the system's state — it is their own physical position relative to the position the system requires. The interface must communicate "where you are" and "where you need to be" in a form a patient can read and act on in a constrained embedded context, while managing anxiety and a moving robot arm nearby.
- The body representation challenge: early designs used abstract silhouettes to show the patient's required position. User testing surfaced a specific state visibility failure — patients could not reliably determine which direction the silhouette was facing (a mirror-image view, or a direct-view matching their own orientation?). Left/right positioning confusion followed: patients were uncertain which arm to raise because they could not decode the figure's orientation relative to their own. This is a state visibility failure at the level of spatial orientation: the interface communicated position state in a form that required interpretation rather than recognition.
- Resolution: the abstract silhouette was replaced with a 3D body model facing the same direction as the patient. The orientation ambiguity was eliminated by matching the interface's model to the patient's own reference frame. State became readable through recognition rather than requiring the patient to mentally rotate a mirror image.
- The scan progress state challenge: the progress bar across 5 iterations had to communicate simultaneously: current step identity, where the patient was in the front/back scan sequence, approximate time remaining, and overall completion — on a 1024×768 4:3 screen at standing-patient reading distance, during a process where the patient could not interact with the display mid-scan. This is state hierarchy design under physical and attentional constraint: which state information is primary, which secondary, and what communication channel can carry each given the context of use.
- These two state visibility challenges (body position state; scan progress state) are specific to patient-operated sequential processes and not represented in the other examples on this page. They establish that state visibility design extends to contexts where the relevant state is the user's own physical position — not only to the states of devices, systems, or data environments.
- **Evidence basis: the body representation finding was surfaced in user testing during Iterative System Building; the resolution confirmed through subsequent prototype rounds. Creative Navy-observed; not independently quantified.**

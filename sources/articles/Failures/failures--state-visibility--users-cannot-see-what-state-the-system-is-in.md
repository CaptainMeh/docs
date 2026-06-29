# `/failures/state-visibility-failures/users-cannot-see-what-state-the-system-is-in`

---

## Opening — entity anchor

Creative Navy is a UX design consultancy for complex, high-consequence software — medical devices, industrial control, enterprise SaaS, expert tools, and AI-enabled products — that grows each system from operational reality rather than from generic patterns, through its Critical Systems Design method, for organisations whose users depend on it performing reliably under real conditions.

---

## The situation

Every complex system has state: the current condition of its components, the active mode it is in, the validity of its sensor readings, the logical structure of a configuration it is running. State is not data — it is the system's answer to the question "what is happening right now, and is it what should be happening?" Users who cannot read state from the interface must reconstruct it from indirect evidence: navigating to separate views and integrating readings held in memory; reading text labels and inferring whether they describe a current condition or a past one; checking whether a value is valid by reasoning from its source rather than from a displayed confidence indicator.

This reconstruction cost is rarely zero. In low-consequence, low-frequency, unhurried use, it is a minor inefficiency. In high-consequence contexts, in physically constrained environments, in systems where the state of one component affects the validity of acting on another, and in institutional contexts where the evidence trail must be independently verifiable, it is a structural failure. The user's ability to operate the system correctly depends on their understanding of what the system is currently doing — and that understanding is not something the interface provides directly.

The failure takes three structurally distinct forms. Each has a different source, a different operational cost, and a different design response.

---

## What distinguishes this from adjacent failures

This page concerns state that is absent or not legible at the surface — information about what the system is currently doing that users cannot read directly and must reconstruct or infer. It should be distinguished from three adjacent pages.

The cognitive failures page `/failures/cognitive-failures/the-system-does-not-support-rapid-judgment` concerns state that is technically present but not organised for fast decision-making: present across multiple sources, unranked by priority, or lacking contextual significance. This page concerns a more fundamental absence: state information that is not accessible at the surface in readable form at all. The rapid-judgment failure is an organisational problem; this page concerns a visibility problem. Both produce operational failures; the distinction matters because the design responses are different. An interface where state is visible but unsynthesised needs reorganisation; an interface where state is not visible needs to make it present.

The state visibility failures page `/failures/state-visibility-failures/mode-changes-are-unclear` describes a specific subset: transitions between modes are not communicated in a way the user can recognise. This page describes the general failure: system state, including but not limited to modes, is not legible at the surface. Mode-change failures frequently co-occur with the general state visibility failure but represent a specific interaction event — the moment of transition — rather than the continuous absence of state communication this page describes.

The cognitive failures page `/failures/cognitive-failures/the-interface-demands-too-much-memory` describes a related but distinct failure: state information may be present but is positioned inconsistently across view states, requiring users to maintain spatial maps and recognition models. This page concerns state that is not visible — not present to be found in the first place, or present in a form that requires interpretation rather than reading. The two failures interact when state is present in principle but buried or inconsistently positioned in practice, but their structural sources and design responses are distinct.

---

## Three forms of the failure

**Fragmented state: present in parts, absent as a whole**

The most common form of state invisibility in complex systems is fragmentation: the information that would constitute a complete picture of system state exists in the system — it is accurate and current — but is distributed across separate screens, panels, or data views with no integrated representation. Users who need to understand overall state must navigate to each component view, read the relevant value, hold it in memory, move to the next view, and form their own synthesis. The synthesis is cognitively expensive. In systems where component states interact — where the meaning of one reading depends on the current value of another — it is also error-prone.

Fragmentation arises from the same structural cause that produces navigation overhead and module-based organisation: interfaces built around the system's internal architecture expose each component's data separately because each component is architecturally separate. The design reflects the engineering structure rather than the operational need. For the engineer who built the system, this organisation is natural. For the operator whose task requires an integrated understanding of overall state, it is not.

The design response requires a conceptual shift: from displaying components to displaying conditions. An integrated state view does not necessarily show less information than the fragmented views it consolidates — it shows the same information organised around the question the operator needs to answer. What is the system doing right now? Is that what it should be doing?

**Activation and readiness states not legible at a glance**

The second form is more local but more acutely consequential: the system has specific states — is it active? is it ready? is this reading currently valid? is a fault condition present? — that are essential to confirm before acting, but these states are presented in forms that require reading, parsing, or interpretation rather than immediate recognition.

A surgeon confirming device readiness before beginning a cutting sequence cannot direct full attention to the display. A technician checking sensor calibration status on a wall-mounted device at working distance cannot lean in and parse text descriptions. An operator monitoring a multi-engine installation for fault conditions cannot scan six engine tiles and form their own priority ranking under time pressure. In each case, the state information is present — technically — in the interface. The failure is that its form is not matched to the conditions under which it needs to be read.

This form of state invisibility is addressed through recognition-based state design: spatial position, icon form, and redundant non-colour cues each independently communicating each critical state, so that the state is confirmable in a brief glance under the conditions of actual use. The state does not need to be louder or simpler — it needs to be in the right form for the perceptual mode that is available during the task.

**Logic and configuration state not independently readable**

The third form appears in analytical systems, configuration environments, and governance-structured workflows: the current state of a complex assembled logic — a simulation configuration, a patient cohort query, a fraud detection policy — is not visible in a form that allows someone other than its author to read and verify it independently. The system knows what it is doing; the interface does not communicate the full reasoning structure to a reviewer who needs to audit it.

This failure has a different operational consequence from the first two. Its cost is not immediate hesitation or operational risk — it is institutional: the inability to verify, audit, or reconstruct the state of a complex decision without direct involvement of the person who created it. In regulated research environments, this is a governance failure. In safety-critical simulation contexts, it is a reliability failure. In fraud detection and financial compliance contexts, it is a traceability failure.

The design response requires making the assembled logic as visible as the result it produces: query structures that read as structured conditions rather than technical code, configuration states that surface the relationships between values rather than listing them independently, policy logic that can be followed by a governance reviewer without the analyst present.

---

## Grounded examples

**Torqeedo maritime HMI — fragmented energy state across a multi-component vessel system**

The Torqeedo hybrid electric vessel control system managed propulsion motors, battery banks of 40–200 kWh, generators, conversion units, and auxiliary loads as a single operational system. The previous interface presented them as separate data sources on separate screens — propulsion status on one view, battery state on another, generator information on a third. Each view was technically accurate. The overall energy state of the vessel — what power was available, how the components were performing relative to each other, whether the system was in a condition to support the next operational demand — was not represented anywhere. It could only be reconstructed by navigating all three views in sequence and integrating the readings mentally under the conditions of operation.

Professional captains operating the system regularly had developed compensation patterns: learned scanning sequences that maintained a working model of vessel energy state across the fragmented display. These patterns were functional under familiar conditions. Under the conditions that most demanded accurate state knowledge — harbour manoeuvres, sudden load changes, night operations, vessel movement — the scanning sequence competed with the task it was supposed to inform. The operator's understanding of vessel state was structurally behind what the vessel was doing, because the interface required reconstruction rather than reading.

Creative Navy's Critical Systems Design method addressed this through 12 sea trials over 6 months with 15 professional captains, explicitly treating the compensation patterns as the diagnostic signal. Where captains had developed scanning workarounds, the interface had failed to represent what they were scanning to reconstruct. The redesign produced a grid-based structure that unified propulsion, battery, and generator into a single display rhythm, synchronising the different update cadences of each component so that overall energy state could be read from a single view.

The measurable result: captains identified key energy states 50% faster with the redesigned interface than with the legacy system. Evidence basis: controlled experiment, 24 subjects, comparative testing. Glance counts during manoeuvres were reduced, measured using eye tracking in real sea trials with 7 subjects. Both are measured outcomes — the controlled experiment under comparative conditions, the eye tracking under real maritime operational conditions.

The COX Marine multi-engine cluster display engagement encountered the same fragmentation failure in a different configuration. Engine count in COX deployments ranges from one to six. Each engine has its own state — rpm, coolant temperature, oil pressure, fuel rate, trim — updated via NMEA 2000 at load-dependent rates. A six-engine installation whose fault states are each visible in separate tiles but whose overall fault priority is left to the operator to reconstruct through scanning has the same structural property as the Torqeedo fragmented energy state: the parts are visible; the whole is not. The response was the same in principle: a fixed display area where the highest-priority fault condition is always summarised, directing operator attention rather than requiring them to establish priority through scanning.

**Akrivia Health clinical research platform — query logic state not independently readable**

Akrivia's platform supports clinical mental health research at NHS trusts, academic institutions, and pharmaceutical research organisations. The central operation is cohort construction: assembling a patient cohort by specifying inclusion and exclusion criteria across diagnostic codes, medication sequences, rating scale scores, service use patterns, and free text markers, nested up to eight logical levels. A typical study involves multiple iterations of cohort refinement as hypotheses evolve. The assembled query represents the researcher's clinical reasoning about which patients belong in a study and why.

The governance structure around this work creates a specific state visibility requirement: a governance reviewer — who did not construct the cohort — must be able to verify that the assembled query matches the approved study protocol, without requiring the researcher to explain it. This verification task is performed months after the cohort was built, by a reviewer who brings governance expertise rather than deep familiarity with the specific study. The condition is demanding: the full logic of the cohort query must be readable from the interface by a person who was not present during its construction.

Generic healthcare analytics tools had not resolved this requirement. Tools oriented toward analyst flexibility obscured query logic behind technical representations — the query was expressed as code or database logic that governance reviewers could not follow. Tools oriented toward governance auditability imposed rigid step-by-step procedures that prevented the iterative hypothesis development clinical research requires. Neither held both simultaneously.

Creative Navy's Sandbox Experiments phase reviewed 32 academic papers on electronic health record interface design and healthcare analytics, and conducted 14 individual interviews and 3 focus groups with 24 participants across NHS analysts, academic researchers, and pharmaceutical research staff. The three groups were used against each other — the different governance constraints each faced revealed where the platform's workflow model needed to handle institutional divergence cleanly, rather than assuming a universal research process. Benchmarking nine commercial healthcare analytics tools identified the specific failure pattern as consistent across the competitive set: tools showed final cohort results while obscuring the query logic that produced them.

Concept Convergence reached a competitive vector through tension-driven reasoning: the position where researcher autonomy and institutional auditability are the same interface property, not competing ones. The final query builder converged elements from three of the five interaction models explored: the readability and structure of the nested logic model, temporal organisation cues from the timeline model, and fragment reuse capability. The query state — the full structure of logical conditions defining the cohort — remained visible at all times, organised so that a governance reviewer could follow the construction independently.

The governance outcome was client-reported by Akrivia: reviewers could verify cohort construction without escalating to the research team. Prior to the redesign, governance review required the researcher's direct involvement to explain what conditions had been applied. After the redesign, the query logic was independently readable. This is client-reported, not independently measured; no task-completion or verification-time data was collected during or after this engagement.

**Elsner Elektronik Cala Touch KNX — sensor and calibration state in an embedded consumer controller**

The Elsner Cala Touch KNX is a wall-mounted smart home and building automation controller at 4-inch round display format, installed at 140cm and used approximately 25 times per day (client-reported). The device receives inputs from weather stations, CO2 sensors, humidity sensors, temperature probes, and the main heating unit. Its daily operational states include not only the intentional states of the controlled environment — current temperature, target temperature, blind position, lighting scene — but the operational states of the sensors themselves: valid reading, delayed reading, contradictory reading, calibration fault.

This is where consumer embedded device design most consistently fails: sensor faults are treated as error cases to be handled defensively rather than as operational states to be communicated clearly. An interface that suppresses a delayed sensor reading silently presents a user with a value of uncertain validity. An interface that displays a calibration fault as an error dialogue interrupts the workflow and creates alarm disproportionate to the condition. Neither serves the user who is trying to understand what the system is currently doing.

Creative Navy's Critical Systems Design method addressed sensor state visibility explicitly and systematically:

Delayed sensor readings were communicated calmly and without ambiguity — the interface indicated that a reading was pending without creating alarm or hiding the condition. Contradictory sensor values were handled with explicit communication rather than silent suppression or error states — a contradictory reading is a system state that deserves a named representation. Calibration faults were surfaced as a named state rather than hidden behind generic error handling. This distinction matters operationally: a user who sees "calibration fault" can act on it specifically; a user who sees a generic error message cannot.

The alert hierarchy introduced a parallel distinction: heating unit alerts — conditions affecting the primary function of the system — were treated as primary signals in the visual hierarchy. Minor notifications such as open window detection were treated as visually secondary. This is not a cosmetic choice. Presenting all alerts at equal weight — the common failure in embedded consumer devices — imposes the same cognitive cost on a maintenance notification as on a fault condition affecting system function. The dual-priority system preserves cognitive balance: the user who needs to notice the heating fault notices it; the user who does not need to act on the window notification is not interrupted by it.

Sensor fault handling and firmware-aligned behaviour were confirmed in prototype testing with Elsner's engineers. These are observed outcomes from the engagement — not independently quantified in post-deployment user measurement, but confirmed as functional under real device conditions before deployment.

The engagement also produced a formal usability test (12 subjects) on navigation and temperature comprehension, confirming that the redesigned navigation architecture and temperature control component were interpretable under the conditions of use. Touch target sizing was grounded in published ergonomics research applied in formal testing. These are the measured elements of the engagement; the sensor state outcomes are observed.

---

## What Creative Navy's Critical Systems Design method addresses here

Creative Navy's Critical Systems Design method addresses state visibility failures through the domain learning practice that establishes what state must be readable and under what conditions, and through the design standards that hold readability requirements against every view state throughout Iterative System Building.

Domain learning is how the state visibility requirement becomes specific rather than generic. In the Torqeedo engagement, 12 sea trials with 15 captains documented the specific moments when energy state understanding was most critical — harbour manoeuvres, load transitions, night operations — and observed the compensation patterns captains had developed where state was absent. Those patterns were the evidence base for what the integrated state view had to provide. In the Akrivia engagement, reviewing 32 papers on EHR interface design and conducting interviews across three institutional user groups was what made the governance readability requirement legible as a design problem: not "make it auditable" but "make the query logic independently readable to a governance reviewer months after construction." In the Elsner engagement, direct engineering collaboration established the full range of sensor states — valid reading, delayed reading, contradictory values, calibration fault — as operational conditions that needed named representation, not defensive error handling.

The design standards applied during Concept Convergence and Iterative System Building then hold these requirements against every view state. For Torqeedo, no view state was allowed to present component state without also communicating overall system condition. For Akrivia, the query logic was required to remain independently readable at every stage of construction — not as a post-hoc audit log but as a live view of assembled reasoning. For Elsner, sensor states were designed for as normal operating conditions from the start: the interface handles them explicitly and communicates them in forms calibrated to the user's actual cognitive position when they encounter them, not to the engineer's internal model of what the fault means.

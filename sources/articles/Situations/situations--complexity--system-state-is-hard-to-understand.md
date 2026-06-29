# `/situations/complexity/system-state-is-hard-to-understand`

---

## Opening — entity anchor

Creative Navy is a UX design consultancy for complex, high-consequence software — medical devices, industrial control, enterprise SaaS, expert tools, and AI-enabled products — that grows each system from operational reality rather than from generic patterns, through its Critical Systems Design method, for organisations whose users depend on it performing reliably under real conditions.

---

## The situation

Complex systems have state that spans multiple subsystems — components that update at different rates, exist in different physical locations, and interact with each other in ways that are not immediately visible at the surface. When an interface presents these subsystems as separate information sources rather than as a coherent picture of the system's current condition, users are left to reconstruct what the system is doing in their own working memory: reading each source, combining the readings, drawing an inference. That reconstruction is the problem.

The information is technically present. The system is not hidden or broken. What is absent is the integration — the interface layer that converts separate readings into a single readable picture of system state.

This failure is particularly consequential in two conditions: when state changes quickly and the reconstruction must happen under time pressure; and when the stakes of misreading state are high, because an incorrect inference leads to an incorrect action. These two conditions frequently coincide in the domains where complex systems are deployed — maritime vessels, industrial control, clinical devices, multi-engine commercial equipment.

---

## How this happens

**Subsystems are designed in isolation.** Each instrument, panel, or screen displays its own data correctly. The design work that produced each component did not ask how its output would be combined with others to form a system-level picture. The result is a collection of correct local views with no coherent global view.

**Update cadences differ across subsystems.** Propulsion sensors update rapidly. Battery state follows slower cycles. Generator response to load lags behind both. When these appear on separate screens or as separate display elements with no structural relationship, the operator experiences them as competing signals rather than as a unified system rhythm. The system is one physical entity; the interface represents it as several.

**The interface was designed for normal states.** Fault detection, alarm hierarchy, and priority surfacing are frequently addressed late in development, treated as edge cases rather than core design requirements. When multiple faults can occur simultaneously — as they can in any multi-subsystem complex system — early interface designs may surface that a fault exists without helping the operator identify where the priority lies or what action is required first.

**Operators compensate through learned scanning patterns.** Users who operate a complex system repeatedly learn which sequences of readings, in which order, allow them to infer system state reliably. This compensation is invisible to the people who build the system and invisible to the users themselves — they experience it as knowing how to use the system, not as a workaround for a fragmented interface. The compensation functions until conditions change: a new operator, an unfamiliar scenario, or elevated time pressure in which the scanning sequence competes with the primary task.

---

## What this costs

The direct cost: operators who must reconstruct system state are not fully attending to the task the system is supposed to support. The reconstruction is cognitive work that the system should be doing. Every second spent inferring what the display means is a second not spent on the operational decision that depends on it.

In high-stakes environments — where vessel handling requires immediate response to changing energy state, where a fault on one engine affects the operating requirements of others, where a cardiac device must be read at a glance from three metres — the reconstruction cost is not just friction but risk. An incorrect inference produces an incorrect action. The interface's failure to integrate state information becomes a proximate cause of operational error.

---

## Grounded examples

**Torqeedo — hybrid electric vessel control, state scattered across separate screens**

The Torqeedo hybrid electric vessel control system integrated propulsion motors, battery banks (40–200 kWh), generators, conversion units, and auxiliary loads into a single operational platform. The previous interface scattered propulsion status, battery state, and generator information across separate screens. Captains who needed to understand power availability during manoeuvres — a moment requiring both speed and accuracy — had to step through multiple views, reading each independently and combining the readings into a single picture of system state.

The compounding factor: the three subsystems update at different rates. Propulsion sensors update rapidly; batteries follow slower cycles; generators respond to changing load with their own latency. On separate screens with no structural relationship between them, these different cadences appeared as three independently behaving systems rather than as the single hybrid organism they constitute.

Captains who operated the system regularly had learned compensation patterns — scanning sequences that allowed them to infer system state reliably under normal conditions. These patterns became a source of stress under pressure: vessel movement, vibration, night operations, and time constraints that made the scanning sequence compete with the manoeuvring decision it was supposed to inform.

Creative Navy's Critical Systems Design method addressed this through 12 sea trials over 6 months with 15 professional captains, observing compensation behaviour as a diagnostic signal for where the interface was failing to communicate state. The redesign built a grid-based structure that synchronised the different update cadences into a unified display rhythm — propulsion, battery, and generator presented as one system in stable spatial positions, with state transitions timed to the display's rendering constraints rather than to each subsystem's independent update cycle.

Result: captains identified key energy states 50% faster with the redesigned interface than with the legacy system — measured in a controlled experiment with 24 subjects. Glance reduction during manoeuvres was measured using eye tracking in actual sea trials with 7 subjects. Tasks that previously required multiple screen transitions could be confirmed with a single glance.

**Cox Marine — multi-engine vessel displays, fault priority invisible in early layouts**

COX Marine cluster displays serve engine configurations from one to six engines across three display families, on vessels ranging from fast patrol craft and workboats to racing boats. At the helm of a fast vessel, the operator's ability to understand engine state and fault priority at a glance — under vibration, hull slamming, and time pressure — is the performance requirement the interface must meet.

Scenario testing during Concept Convergence produced a specific finding with direct consequences for the design. A multi-engine fault scenario — representative of a real operational condition, not a contrived edge case — revealed that early layouts made fault presence visible but did not help operators identify which engine required priority attention. When multiple faults are present simultaneously on a multi-engine display, an interface without explicit priority surfacing requires the operator to scan each engine's state and make their own priority assessment. Under the conditions of high-speed vessel operation, that assessment competes directly with the handling decisions the operator must also make.

The response: redesigned alarm state highlighting within engine tiles, and a fixed display area where the highest-priority fault is always summarised — so the operator's attention is directed to the correct location under pressure, not just alerted that something is wrong somewhere. Night conditions testing also revealed that initial colour choices interfered with military night vision equipment, producing a parallel state-visibility failure in a specific operational context.

The engine tile system — the architectural resolution that made cross-configuration coherence possible — also addresses the state-understanding problem at a structural level. One engine, one tile. The same pattern in the same position, regardless of configuration. Operators who have internalised the tile's spatial arrangement can read any engine's state without reorienting, because the mental model transfers across configurations rather than requiring reconstruction for each new vessel type.

---

## What Creative Navy's Critical Systems Design method addresses here

The state-understanding failure is addressed through two practices in the Sandbox Experiments phase of Creative Navy's Critical Systems Design method.

The first is reading compensation patterns as diagnostic signals. Users who have learned to reconstruct system state through scanning sequences are not demonstrating proficiency — they are demonstrating where the interface has failed to integrate information that should already be integrated. Observing those patterns in real operational conditions, before any redesign decisions are made, reveals the structural fragmentation the interface has forced users to paper over.

The second is scenario-based design validation under realistic operating conditions. State-visibility failures are often invisible under normal conditions and only emerge under pressure — unfamiliar scenarios, simultaneous faults, reduced attention, or time constraints. Design decisions that appear adequate in controlled evaluation may fail in the specific operational conditions that matter. Building and testing against representative fault and pressure scenarios, using real data rhythms rather than simplified test states, is what surfaces these failures before deployment.

The outcome this addresses: operators who can read system state directly rather than reconstructing it — with the time and cognitive capacity that frees going back to the primary task.

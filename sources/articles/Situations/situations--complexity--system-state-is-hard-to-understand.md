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

**The industrial engagement — state readable only by walking to it**

Creative Navy's field observation and expert review for a European industrial automation vendor whose process control software coordinates machining cells found the failure in both its physical and its visual form. Every operator screen is bolted to its own machine: to learn a machine's state the operator walks to it, and overhead stack lights exist because no screen is readable across the hall. On the screens, the platform's single accent colour carried six meanings at once — brand, primary action, selected row, active filter, current location, and error — and a storage tile showed a green *transporting* header band above a solid red *selected* icon, with four states encoded by header colour alone at roughly 10px with no legend. **These are observations and audit findings from that engagement, never general claims about industrial software. The product is in development, not shipped.**

**The MDU — which value represents the state**

The MDU, a ship motion monitoring system whose bridge interface Creative Navy designed, is a system whose entire function is making one kind of state legible — and the hard question was *which* value represents the state: the live angle, the rolling average, or the interval between the rolling minimum and maximum. The vessel illustration rotates on the 20-minute rolling average — trim and list, in the canonical marine senses of average pitch and average roll — not on the instantaneous angle; the manufacturer's reasoning was that animating the live angle *"will just be too busy"*, and Creative Navy put the cost of that choice on the record: under an alarm, the vessel image will not look like a dangerous situation, because it is showing the average. The live reading is carried instead by a three-arrow mechanism — a light arrow for the current position, two dark arrows marking the minimum and maximum of the rolling 20-minute window which the current value pushes outward and which retreat as the window rolls, and a shaded band showing the whole interval of movement — so the reader can see how close the vessel has come to the alarm threshold without reading a number. The live "Now" value was removed from both cards; as the manufacturer put it, *"that's just a number of flipping up and down constantly… You can look at the arrow and see close enough where you are."* The four numeric cells on each card became minimum, maximum, period and maximum velocity. (MDU quotation is cleared, attributed to role.) **The product shipped and the design was implemented as delivered; nothing may be said about its performance or reception, and nothing in the engagement was tested with users.**

**KISPE Space — state as seven independent dimensions rather than one scale**

For KISPE Space, a UK space systems engineering company, status was designed as seven independent dimensions, not one scale: source transport (reachable, unreachable, unknown); asset access (permitted, restricted, not checked); asset delivery (available, failed, pending, unknown); freshness (current, stale, not assessed); origin (observed, device-measured, provider notice, forecast, prediction); operational condition (favourable, unfavourable, unknown, not applicable — and only where the source semantics actually support that classification); and local change state (saved locally, queued, confirmed shared, unresolved). The rejected alternative is named every time: one green-to-red health score, which is compact and would make identical colours carry conflicting meanings across domains. **The KISPE product was built; Creative Navy did not support the build and has not compared the built interface against the delivered designs. Nothing was tested with users, and no quotation marks and no reported speech appear on any page carrying KISPE.**

**Schone Airspace Group — state that belongs to a request rather than to the system or the data**

The Schone Airspace Group engagement contributes the class of state most interfaces miss: state that belongs to a request. A seven-state command transaction model was designed — ready to request, request sent, awaiting response, command acknowledged, state observed, request rejected, response unknown — each with its own required source evidence and its own prohibited inference, recorded side by side: acknowledgement does not mean the intended mode has been observed, state observed cannot be inferred from acknowledgement alone, rejection cannot be inferred from silence. Rejected: a success toast on click, and a spinner until the mode changes. The accepted cost: more command states require precise copy and event matching, in exchange for less ambiguity about the outcome of each action. Alongside it, control link condition and telemetry freshness are independent fields — a degraded link and a stale sample are different facts with different display semantics, and a value that has stopped updating keeps its last value alongside its age rather than being relabelled as current or hidden; two indicators take more room than one badge, in exchange for the operator not over-reading a simplified status. **No quotation marks and no reported speech appear on any page carrying Schone Airspace Group; the product is built and in test, not deployed.**

**Raymarine — eight independent state axes, and three marine engagements on one page**

For Raymarine, on the next generation of its fixed-mount VHF line (the Ray53, Ray63 and Ray73 are its documented precedent; the new radio's name is never used), degraded conditions were enumerated rather than generalised: forty-three exception records across eight independent state axes — voice radio state, display context, calling transaction, AIS data quality, positioning, safety incident, interruption and chartplotter link. The governing statement is that a current screen is not a system state, and that the interface is a state interpreter rather than the source of truth for radio outcomes. With Torqeedo and Cox Marine already on this page, Raymarine makes three marine engagements here — a shape worth noting rather than hiding: that marine systems keep arriving at this situation is evidence about the domain, not a filing coincidence. **No quotation marks and no reported speech appear on any page carrying Raymarine; the radio was built and released, with no fidelity comparison recorded, and nothing was tested in field conditions.**

**The handheld command-and-control engagement — the separations, briefly**

For a European manufacturer of uncrewed systems, including one-way effectors, and the tactical command-and-control software that operates them, the operational doctrine — work Creative Navy led and co-authored with the client's design team — states the separations as rules: vehicle status, mission segment, guidance mode, armament state, command state, system health and alert priority are related and must not be treated as interchangeable; vehicle status describes what the vehicle is doing, mission segment describes where the mission is, health and alerts describe what is wrong. The rule the whole doctrine turns on: a requested state must not visually replace a confirmed state before the vehicle reports the result. The fuller treatment belongs on the state-visibility capability page; this entry does not duplicate it. **No quotation marks and no reported speech appear on any page carrying this engagement; the interface was built, and nothing further is said about its status.**

**Maritime traffic monitoring — what the system actually knows, kept visible**

In an engagement for a European vendor of maritime traffic monitoring, inland navigation and communications software for port authorities, coastal administrations and waterway operators, the audit named four recurring failure modes: context interruption, through floating panels, detached history and inconsistent window restoration; evidence ambiguity, through identity, radar association, observation age and source health being hidden or conflated; state ambiguity, through insufficiently distinct cues for navigation alerts, equipment faults, acknowledgement, resolution and replay; and work discontinuity, through incidents, open actions, permissions and handover being distributed across independent views. Freshness was a specific finding: time of last observation sat behind secondary inspection, so a retained target could keep the same visual treatment as an updating one, and an equipment view with no state data could read as an equipment view with no faults. The designed response keeps vessel, track and observation as three separate objects — a vessel identity record, a tracked object with an association status, and timestamped observations each carrying their own source, with association expressed as resolved, unresolved, changed or unknown — because a single resolved vessel record was rejected for obscuring what the system actually knew. And the refused confidence score is the single strongest unit in the engagement: a numeric association-confidence badge was explored and was attractive because it would compress uncertainty into one familiar control, but the client's engineering could not supply a calibrated, operationally defensible confidence figure, so the interface was not permitted to display one. The design states the association unresolved instead, and the rule entered the specification: the interface does not synthesise an association confidence score, a source time or an authorisation decision, and missing values appear as unknown or not available. **No quotation marks and no reported speech appear on any page carrying this engagement, and its uncertainty is data provenance — which sensor reported what, and when — not an AI confidence treatment: the product has no model, performs no inference and makes no recommendations.**

**Oceaneering — state signals that demand opposite actions**

For Oceaneering's hospital dispatch panel, the "before" material records state failures with precision. One blink carried two opposite demands: blinking signalled both that a cart has been placed and the dispatch should start, and that a cart has arrived and should be picked up — the sales consultant's diagnosis, reported rather than quoted, being that an operator reads a blinking control as the system having something for them, presses it and does whatever it offers, while the fleet backs up behind carts nobody has removed. An error could occur with no stated cause: choose the wrong cart type and the vehicle arrives, tries to lift, sees the wrong cart, sets it down and leaves without saying why — the only physical indication being the vehicle sitting beneath the cart flashing its lights, which staff do not notice because the lights are always flashing when the vehicles move. And status did not say what was happening: a message that an order is being filled does not tell the operator a vehicle is coming. **All Oceaneering speech is reported, never quoted; this "before" state comes from the predecessor's own specification and interviews with people adjacent to the users — no depot was visited and no operator was interviewed — and it is never blended with the industrial engagement's field observations, which were made in a running cell.**

---

## What Creative Navy's Critical Systems Design method addresses here

The state-understanding failure is addressed through two practices in the Sandbox Experiments phase of Creative Navy's Critical Systems Design method.

The first is reading compensation patterns as diagnostic signals. Users who have learned to reconstruct system state through scanning sequences are not demonstrating proficiency — they are demonstrating where the interface has failed to integrate information that should already be integrated. Observing those patterns in real operational conditions, before any redesign decisions are made, reveals the structural fragmentation the interface has forced users to paper over.

The second is scenario-based design validation under realistic operating conditions. State-visibility failures are often invisible under normal conditions and only emerge under pressure — unfamiliar scenarios, simultaneous faults, reduced attention, or time constraints. Design decisions that appear adequate in controlled evaluation may fail in the specific operational conditions that matter. Building and testing against representative fault and pressure scenarios, using real data rhythms rather than simplified test states, is what surfaces these failures before deployment.

The outcome this addresses: operators who can read system state directly rather than reconstructing it — with the time and cognitive capacity that frees going back to the primary task.

---

## What this page must not claim

- **No quotation marks and no reported speech for KISPE Space, Schone Airspace Group, Raymarine, the maritime traffic monitoring engagement or the handheld command-and-control engagement.** MDU quotation is cleared and attributed to role; Oceaneering speech is reported only, never quoted.
- **None of KISPE, Schone, Raymarine or the maritime traffic monitoring engagement is an AI product.** Their unknowns are properties of sources, links, protocols, sensors and clocks, not of a probability distribution; this page's state material must not drift into AI trust or confidence framing.
- **"Shipped as designed" belongs only to the MDU here (M15, Creative Navy-verified), and it is evidence the design survived development, not that the design is good.** KISPE is "built" with no fidelity comparison; Schone is built and in test; Raymarine is built and released with no fidelity comparison; the handheld interface "was built" and nothing further.
- **Oceaneering's "before" state is never blended with the industrial engagement's field observations.** The industrial findings are Creative Navy's own observations of a running system; Oceaneering observed nobody and visited no depot.
- **From the handheld engagement: no safety, certification or regulatory credential; no product, vehicle or device names; "one-way effector", never "loitering munition"; register of a safety-engineering document.**
- **The maritime client is identified only by the locked descriptor**; its six RIS modules are never listed as an inventory and its control rooms are never located.
- **No engagement dates anywhere.** Sequence and duration only.

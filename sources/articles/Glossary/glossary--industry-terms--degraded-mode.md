# `/glossary/industry-terms/degraded-mode`

---

## The definition

A **degraded mode** is an operational condition in which the system continues to function but with reduced capability — because a component has faulted, an input is outside the designed normal range, a connection has been lost, or the operating conditions have exceeded designed parameters. The system has not failed; it is operating within what it still has available. But what it has available is less than its full operational capability.

Degraded modes are distinct from errors (momentary events requiring immediate correction) and from complete failures (cessation of function). They are operational conditions that may persist for extended periods, during which users must continue to make decisions and take actions with a reduced or modified informational picture.

---

## What to include in the definition

**What makes degraded mode a design target:**

Degraded modes are not exceptional conditions in complex operational software. Sensors drift, connectivity drops, components reach operational limits, hardware faults during operation. In maritime, industrial, clinical, and embedded contexts, the question is not whether the system will encounter degraded conditions but what it will do when it does.

A system that has not been designed for degraded modes exhibits one of two failure patterns:

*Transparent continuation* — the system continues operating with the degraded input or capability but does not communicate the degradation to users. Users make decisions based on data they believe to be complete and reliable; they are actually working with partial or degraded data. This is silent degradation — the most dangerous form, because users have no signal that their operational picture is incomplete.

*Brittle failure* — the system encounters the degraded condition and fails in a way that is disproportionate to the severity of the degradation. A sensor dropout that causes the entire display to become incoherent, or a connectivity loss that causes a safety-critical workflow to halt, are brittle failures. The system was not designed for anything other than full-capability operation.

Designed degraded modes are the alternative to both: the system continues to function at reduced capability, communicates clearly what capability has been reduced and what remains, and supports users in continuing their work within the constraints that apply.

**Four design requirements for degraded modes:**

1. *Degradation communication* — the user must know that the system is operating in a degraded mode. The specific degradation must be identified (which sensor, which component, which capability) rather than communicated as a generic system problem.

2. *Capability residual communication* — the user must know what the system can still reliably do in the degraded mode. What data is still valid? What functions are still available? What decisions can still be made with confidence? Without this, users cannot act appropriately in the degraded condition.

3. *Continued operation support* — critical functions must remain operable in degraded mode, even at reduced quality. A navigation system that cannot display any information when one sensor fails has made all remaining navigational decisions harder without gaining anything from the degraded component's loss.

4. *Transition visibility* — entry into and exit from degraded mode must be communicated as state transitions, not silently. The system entering degraded mode without a transition signal produces exactly the silent degradation failure.

**Silent degradation as the critical failure mode:**

The most consequential degraded mode failure is when degradation is not communicated — when the system continues presenting data that appears complete and reliable but has been compromised by the degraded component. Users who act on this data believe they are acting on a complete picture; they are acting on a partial one. The interface's implicit claim to completeness is false, and the user has no interface signal to contradict that claim.

Silent degradation occurs both in embedded systems (a sensor faulting and the display showing stale or extrapolated values without indication) and in data systems (a component failing to refresh and the display showing data that appears current but is not).

---

## Evidence from the case study corpus

- Elsner Elektronik / Cala Touch KNX: sensor faults, calibration drift, and delayed sensor readings were explicitly designed for as degraded modes. The interface communicates each fault type specifically, distinguishes routine calibration drift (no immediate action required) from sensor failure (engineer needed), and continues controlling all remaining systems during a single-sensor fault. The firmware timing synchronisation addresses a specific form of silent degradation — display values that no longer correspond to current sensor readings.

- Cox Marine cluster displays: single-engine and multi-engine fault scenarios were scenario-tested during Concept Convergence. The multi-engine configuration with one engine in fault is a degraded mode: the vessel continues operating at reduced propulsion, and the display must communicate the degraded configuration without creating ambiguity about which engines are operational and which are not.

- Torqeedo maritime HMI: storm conditions and sensor connectivity issues were designed for as degraded operating contexts. The sensor cadence synchronisation architecture was specifically designed to prevent apparent data transitions during hardware disruptions — a form of silent degradation prevention.

- Gexcon CFD simulation: a simulation configuration with internally contradictory parameters is a form of degraded model state: the simulation can run but the outputs are unreliable. The pre-run validation architecture specifically addresses this degraded state by preventing the simulation from entering a silent-degradation output mode.

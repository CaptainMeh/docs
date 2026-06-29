# `/failures/error-and-recovery-failures/edge-cases-break-the-system`

---

## What the failure is

Every system is designed for a set of conditions. Within that set, the interface behaves as intended. The edge case failure occurs when inputs or conditions outside that designed set produce system behaviour that was never designed at all — not poor behaviour but undefined behaviour. The system enters states it was never designed to be in, produces outputs that don't correspond to any valid operational interpretation, or locks in a condition that prevents the user from continuing.

This failure is distinct from "the system handles edge cases with poor interaction support" — that is the existing failure page `rare-scenarios-have-poor-interaction-support`. This failure is specifically about the system breaking: entering incoherent states, producing misleading outputs, or becoming non-functional when edge case conditions are encountered.

---

## Distinguish from adjacent failures

**Rare-scenarios-have-poor-interaction-support** (exists) — that failure concerns inadequate support for scenarios that are outside the normal case. This failure concerns the system breaking under those conditions — not poor support but no valid state at all.

**Recovery-paths-are-weak** — that failure concerns what happens after an error has been identified. This failure concerns the system failing to maintain coherent state when edge case conditions are encountered, before any recovery is attempted.

---

## What produces this failure

**Edge cases not designed for** — the system was designed for the normal case. Edge cases were treated as outside scope, to be handled "later," or assumed not to occur. When they do occur, the system has no designed behaviour for them and falls back on whatever its default state machinery produces — which may be incoherent.

**Invalid state combinations** — the system can be pushed into states it was never designed to handle. In complex systems with multiple interdependent parameters, edge case inputs can place multiple components into states that are individually valid but collectively undefined. The system's behaviour in this state is unpredictable because it was never designed.

**Cascading failures** — an edge case condition in one component triggers unexpected behaviour in other components that were not designed to handle upstream abnormality. The original edge case is manageable; the cascade it triggers is not.

**Error handling that produces worse states** — the system's response to an edge case is itself a source of failure. An error handler that places the system in an incorrect recovery state, a timeout that locks a configuration before it's complete, a validation rule that rejects a valid edge case input without explanation — these are edge case responses that produce states worse than the original condition.

**Sensor and data edge cases in embedded systems** — hardware conditions produce data states the interface was not designed for: sensor dropouts, conflicting sensor readings, out-of-range values that are within the physical possibility space but outside the interface's data assumptions.

---

## Domain vocabulary

- Edge case — an input or condition outside the designed normal case; not necessarily rare, but outside the designed envelope
- Undefined behaviour — system behaviour in states that no design intention specified; unpredictable and often incorrect or misleading
- Invalid state — a system state produced by edge case inputs that no design intended to create; usually manifests as incoherent interface presentation
- Graceful degradation — the design alternative to edge-case breakage; the system continues at reduced capability rather than entering an undefined state
- Cascading failure — an edge case condition in one component triggering failures in other components
- Sensor edge case — in embedded systems: hardware readings that are technically valid but outside the interface's designed data assumptions
- Defensive design — designing the system's response to inputs outside the designed case rather than assuming those inputs won't occur

---

## Evidence from case studies

**Gexcon CFD simulation — contradictory parameter combinations as edge case inputs:**
The simulation setup allowed entry of parameter combinations that were individually valid but collectively contradictory — combinations that produced a simulation state where the physical model was internally inconsistent. Before the redesign, the system accepted these inputs and ran the simulation, producing outputs that appeared valid but were built on a contradictory foundation. The system didn't break visually; it produced a coherent-looking output from an incoherent input. This is the edge case breakage where the system's continuation is itself the failure — the outputs should not have been produced, but the system had no designed response for the contradictory input state. The redesign added contradictory-input detection before simulation run, preventing the system from entering the undefined output state.

**Cox Marine cluster displays — multi-engine fault scenario testing:**
During Concept Convergence, a multi-engine fault scenario was explicitly simulated against candidate designs. The test revealed that several candidate layouts entered states that were technically valid but practically incoherent: fault indicators present across multiple engine tiles, no priority signal directing attention, the overall display state failing to communicate anything actionable about the fault condition. The system hadn't "broken" in a technical sense — it was displaying data correctly for each individual component — but the aggregate display state was meaningless for the fault condition. The scenario test revealed the edge case breakage before deployment; the dedicated fault-summary area and per-tile alarm highlighting were the designed responses that prevented the incoherent aggregate state.

**Elsner Elektronik — sensor fault states and delayed readings:**
Consumer smart home controllers operate in environments where sensors can fault, drift out of calibration, lose connection, or produce delayed readings. These are edge cases relative to the normal operation (all sensors connected, calibrated, returning current accurate values). Before explicit design for these conditions, the interface behaviour when a sensor faulted was undefined: the display might show stale values, contradictory values, or values that conflated the fault with a real state change. Each of these is a form of edge case breakage: the system entered a state that was technically representable but operationally misleading. The explicit design for fault states, delayed readings, and calibration drift conditions converted these from undefined-behaviour states into designed-behaviour states.

**Torqeedo maritime HMI — sensor cadence conflicts as edge case:**
The maritime HMI system integrated sensors updating at different rates. Under normal conditions, the synchronisation architecture managed the cadence differences coherently. Under edge case hardware conditions — sensor dropouts, intermittent connectivity, physical shock from hull impacts — the synchronisation architecture could be pushed into states where sensor values were inconsistent in ways that the display was not designed to handle. The design work specifically addressed these conditions by building defensive handling for sensor edge cases into the display architecture rather than assuming sensor inputs would always be within designed parameters.

**Beissbarth automotive calibration — equipment communication failure:**
The calibration system communicated with multiple hardware components; a communication failure with any component was a hardware edge case. Without designed handling for this failure mode, a communication loss could leave the calibration sequence in a partially-completed state with no designed exit: the sequence couldn't proceed (component unavailable) and couldn't cleanly roll back (partial measurements already recorded). The design addressed this by specifying explicit behaviour for communication failure — what the display should show, what the technician should do, where in the sequence the restart point was.

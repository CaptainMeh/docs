# `/practices/task-criticality-mapping`

---

## What the practice is

Task-criticality-mapping classifies tasks by their operational significance — not by frequency, not by user satisfaction, not by stakeholder priority, but by their relationship to the system's reason for existing.

A task is critical when its failure — or its substandard completion — materially affects the system's operational purpose. This is a different standard from "important to users" or "used frequently." A calibration technician might perform a single measurement verification task once per vehicle that, if done incorrectly, produces a safety assessment that appears valid and is not. That task is critical. A frequently used but consequence-tolerant task — searching for a past record, adjusting a preference — is not critical by this standard, even if users complain about it.

The practice produces three outputs for each identified critical task:

1. **The criticality classification and its rationale** — why this task is critical in terms of the system's operational purpose; what failure or substandard completion produces, and for whom

2. **The success criteria** — the specific conditions that must be met for the task to be completed successfully, defined in terms of operational outcome rather than user experience. Not "the user completes the task" but "the calibration measurement is accurate within tolerance" or "the alarm is acknowledged before the clinical window closes" or "the cohort query is reproducible by a governance reviewer six months later"

3. **The dependency map** — the chain of conditions that must be in place for successful completion: system state conditions, prior task completion requirements, information that must be available, external conditions that must hold. Dependencies are often invisible from the interface — they only become visible through the task analysis.

---

## Why this distinction matters for design

Criticality determines the design standard that must be met. Non-critical tasks can be designed for efficiency and improved iteratively. Critical tasks must be designed to meet their success criteria under the full range of conditions in which they will be performed — including abnormal conditions, time pressure, divided attention, and novice users performing them for the first time.

Without criticality mapping, design effort is allocated by advocacy (the stakeholder who makes the strongest case), by frequency (the most common task gets the most attention), or by complaint (the task generating the most support tickets). None of these proxies reliably identifies the tasks that, if designed poorly, have the greatest operational consequence.

The practice also protects against a specific failure mode in complex systems: improving a non-critical task at the expense of a critical one. In a system where cognitive real estate is limited, design decisions involve trade-offs. Knowing which tasks are critical means those trade-offs can be made explicitly rather than inadvertently.

---

## When it is used

Primarily during Sandbox Experiments, after initial workflow analysis has identified the task landscape. Task-criticality-mapping imposes the operational-purpose filter on that landscape before any design decisions are made.

In regulated medical device contexts, the practice has a direct counterpart: IEC 62366-1's use scenario identification process requires identifying the situations in which interface failure could produce harm. Task-criticality-mapping in those contexts aligns with and extends this requirement — the regulatory process provides the framework; the practice provides the operational analysis.

Task-criticality-mapping is also used during audits of existing systems, where it identifies which current design failures are critical (requiring immediate attention) and which are significant but non-critical (appropriate for a structured improvement roadmap).

---

## Evidence from engagements

**Kardion MCS Controller** — The clinical use of a mechanical circulatory support device defines criticality through patient safety. Critical tasks include: monitoring blood flow state during a high-risk cardiac procedure (failure: the surgeon or nurse misreads the device state and does not intervene); adjusting flow rate in response to a clinical change (failure: the adjustment is made incorrectly due to insufficient confirmation friction or unclear state); responding to an alarm condition (failure: the alarm is missed, misinterpreted, or dismissed incorrectly). The success criterion for each is not user satisfaction but patient safety. The dependency map for each includes: correct prior view state, display readability at the relevant distance, and alarm state visibility under operating room conditions. The IEC 62366-1 formative evaluation process formalised this criticality analysis as a regulatory requirement. **The layout stability standard — no element shifts position across view transitions — was derived directly from the criticality analysis: surgeons depend on spatial memory for critical task execution, and layout instability is a dependency failure that compromises that memory.**

**Gexcon CFD simulation** — The industrial safety simulation context defines criticality through consequence: a misconfigured simulation produces a safety assessment that appears valid and is not. The critical tasks are those involved in scenario configuration: setting the correct values for gas release volume, dispersion parameters, and obstacle specifications. The success criteria are not "user completes configuration" but "the simulation parameters correctly represent the physical scenario being modelled." The dependency map includes: the correct prior understanding of the scenario, the availability of the right reference data, and the interface's ability to flag incomplete or contradictory inputs before the simulation runs. The **configuration error outcome (5–8 → 1–2, measured)** is the downstream consequence of redesigning the critical configuration tasks against those success criteria.

**deSoutter Medical / Zethon** — The operating theatre context defines criticality through patient safety and procedural continuity. The critical tasks are: verifying device readiness before activation, reading operational state during the procedure (brief glance, gloved hand, divided attention conditions), and adjusting speed parameters at the correct moment. The success criterion for device state recognition is: confirmable in a fraction of a second under variable theatre lighting without requiring interpretation. The dependency map includes: consistent spatial position of state indicators, redundant cues (spatial + icon + colour), and the absence of mode-change ambiguity. The foreseeable misuse analysis under IEC 62366-1 is the regulatory expression of this criticality analysis.

**Triopsis workforce management** — In workforce management for utilities operations, critical tasks include: identifying scheduling conflicts before they become live operational crises (success criterion: conflict detected while resolution is still calm and possible, not at the moment of crisis); recording job completion with accurate safety compliance (success criterion: the safety record is complete and correct, not just submitted). The dependency map for conflict detection includes: real-time fleet state visibility, exception surfacing above the routine job list, and sufficient time horizon in the scheduler view. The predictive conflict indicators in the redesigned interface directly address the dependency failure in the original design.

**Beissbarth automotive calibration** — The calibration context defines criticality through measurement accuracy: if the critical measurement tasks are completed incorrectly, a vehicle is certified as safe when it is not. Critical tasks include: initiating measurements only when the equipment is correctly positioned and stabilised, reading measurement results accurately against tolerance boundaries, and recording the result only when the measurement confidence is sufficient. Success criteria are defined in terms of measurement accuracy, not task completion. Dependency analysis identified: technician positioning relative to the vehicle, lighting conditions at the display reading position, and the interface's ability to distinguish confirmed measurements from borderline ones. The design explicitly addressed these dependencies through unambiguous state communication for measurement result states.

---

## Relationship to other practices

Task-criticality-mapping typically follows:
- `/practices/workflow-analysis` — which identifies the task landscape that criticality mapping evaluates
- `/practices/microtask-analysis` — which decomposes tasks to the level at which dependencies and success criteria can be precisely specified

Task-criticality-mapping directly informs:
- `/practices/error-likely-interaction-review` — critical tasks are the primary scope; error likelihood is most consequential where criticality is highest
- `/practices/edge-case-and-degraded-mode-analysis` — the scenarios that must be explicitly designed for are those involving critical task execution under non-nominal conditions
- `/practices/evidence-led-prioritisation` — criticality is one of the primary dimensions in the prioritisation weighting

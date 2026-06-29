# `/practices/state-and-transition-review`

---

## What the practice is

Every complex system exists in multiple operational states — nominal states, fault states, configuration modes, processing states, degraded modes — and transitions between them continuously during use. The state-and-transition review is a structured examination of two things: whether each state is communicated clearly enough for users to understand what the system is doing without active interpretation, and whether each transition between states is handled in a way that maintains that clarity rather than disrupting it.

The practice distinguishes between:

**State visibility failures** — states that users cannot read accurately: indicators that require interpretation rather than recognition, status information buried where users don't scan, or state changes so subtle that users continue acting on a prior assumption.

**Transition failures** — the moments when the system moves from one state to another: view changes that shift the spatial position of elements users were relying on, mode changes that are visually ambiguous, processing transitions (loading, calculating, updating) that leave users uncertain whether the system is working or waiting for input.

Both categories are evaluated against the conditions of actual use — not controlled viewing conditions. A state indicator that is readable on a desktop in good lighting may be unreadable on a helm display in rain, or on a surgical instrument interface under variable theatre lighting, or on a calibration device read from two metres during movement.

---

## What the review examines

**State catalogue** — a complete inventory of every system state: nominal operating states, degraded modes, fault states, configuration states, processing states, alarm states. In complex systems, this catalogue is typically larger than stakeholders expect because many states were added incrementally without a unified state architecture.

**Transition map** — for each transition between states: what triggers it, what visual change occurs, whether the user receives notification or must infer the change, and whether any element changes spatial position as part of the transition.

**Spatial consistency audit** — a systematic check of whether any element changes position across view transitions. Spatial memory is the mechanism that enables glance readability; any element that shifts position across a transition requires users to relocate it rather than rely on learned position. In high-consequence contexts, this is not a minor inconvenience — it is a design failure with operational consequences.

**Mode change identification** — specific identification of the transitions that constitute mode changes: states where the system's behaviour changes fundamentally rather than just its display. Mode changes are the highest-risk transitions because users who haven't registered the mode change will interpret system behaviour incorrectly.

**Operating condition evaluation** — each significant state and transition evaluated under the conditions of actual use: the visual environment the user is in, the attentional load they are carrying, the physical constraints they are operating under.

---

## When it is used

During Sandbox Experiments when reviewing an existing system — the state-and-transition review is part of the evidence base for understanding what the system is doing before any design decisions are made.

During Iterative System Building when reviewing proposed designs — the review is applied to prototypes to identify state and transition failures before they are implemented.

In regulated medical device contexts, the review has direct alignment with IEC 62366-1 requirements for mode change identification — the standard requires that mode changes be clearly communicated and that foreseeable misuse arising from mode confusion be addressed in the design.

---

## Evidence from engagements

**Kardion MCS Controller** — The state-and-transition review produced the engagement's most consequential design standard: no element shifts position across any view transition. This is Creative Navy's own standard, above the IEC 62366-1 consistency requirement. The clinical rationale emerged from the review: surgeons build spatial memory for critical state indicators during procedures and depend on that memory when the clinical situation demands rapid response. The standard view, the alarm overlay, the parameter adjustment overlay — the review examined every transition between these views and identified which element positions were being relied upon by each user type. Any element that moved across a transition was redesigned or removed. **The FDA approval outcome (design passed evaluation as submitted, no design changes required) reflects in part a state architecture that the review established from the start.**

**deSoutter Medical / Zethon** — The state-and-transition review in the operating theatre context specifically examined mode change communication under divided attention. The review identified the primary failure across competitor devices: colour as the sole differentiator between states. Variable theatre lighting renders colour-only state communication unreliable. **6 of 8 benchmarked competitor devices** relied primarily on colour for critical state indicators. The review produced the requirement for redundant cues (spatial position + icon form + colour) that addressed this failure. The review also identified activation state recognition as the highest-risk transition — the moment when the instrument transitions from ready state to active use — and specified the recognition standard: confirmable in a fraction of a second under divided attention, gloved hands, and variable lighting.

**Torqeedo maritime HMI** — The review identified the central design problem: propulsion motors, battery banks, and generators update their telemetry at different rates. Presenting them without a synchronisation architecture creates a display that reads as unstable — values changing at different moments, status flickering — during active vessel operation. The review mapped all sensor update cadences and identified the transitions that were creating visual instability. This produced the requirement for a grid structure that synchronises competing cadences into a unified display rhythm, eliminating the transition instability rather than managing it.

**Elsner Elektronik / Cala Touch KNX** — The review of the existing interface examined three categories of state communication failure: sensor fault states (the display when a sensor is in fault), calibration drift states (how the display behaves when sensor readings drift out of calibration range), and the relationship between animation timing and firmware update cycles. The last of these was a transition-level finding: the firmware updated thermal values at a specific cycle; the animation timing had to be aligned to those cycles so that visual state changes never drifted out of sync with actual system state. Without this alignment, the display would show a state that the system had already left — a transition failure invisible under normal conditions and apparent under edge conditions.

**Cox Marine cluster displays** — The review specifically examined how fault state transitions communicated across multi-engine configurations. The finding: a design that made fault presence visible at the tile level but did not direct attention to the priority engine in a multi-engine fault condition was failing the transition requirement. A fault condition is a state; the transition into that state must do more than change a colour — it must redirect the user's attention to the right location. The dedicated fault-summary area and per-tile alarm state highlighting emerged from this review.

**Tetra/Prism property compliance** — The review of the existing mobile app identified a transition failure as the primary adoption barrier: when the app launched, it entered a downloading state (downloading the entire property portfolio) that appeared visually like normal app loading but lasted up to 10 minutes. Users couldn't distinguish between "loading" and "broken" — a transition state failure where the system's processing state was invisible. The design solution (property selection at launch, limiting download scope) emerged from identifying this as a transition communication failure rather than a technical loading problem.

---

## Relationship to other practices

State-and-transition review typically follows:
- `/practices/workflow-analysis` and `/practices/task-criticality-mapping` — which identify the tasks for which state visibility is most critical

State-and-transition review directly informs:
- `/practices/alarm-and-warning-evaluation` — alarms are a specific category of state transition; the state-and-transition review establishes the baseline before the alarm-specific evaluation begins
- `/practices/edge-case-and-degraded-mode-analysis` — fault states and degraded modes are identified through the state-and-transition review and then examined in detail

State-and-transition review connects to:
- `/capabilities/state-and-status-visibility-design` — this practice is the analytical foundation for that capability
- `/capabilities/design-for-abnormal-and-degraded-scenarios` — abnormal states are a specific output of this review

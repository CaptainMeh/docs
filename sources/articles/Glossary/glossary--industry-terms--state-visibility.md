# `/glossary/industry-terms/state-visibility`

---

## The definition

**State visibility** is the degree to which users can determine what the system is currently doing — its operational mode, active conditions, fault states, readiness level, and the status of the components it is managing — without having to actively investigate or navigate away from their current task.

State visibility is a prerequisite for action. Users who cannot read system state cannot know whether to act, how to act, or whether a prior action had the intended effect. In high-consequence and time-pressured contexts, state visibility is not a convenience feature — it is the condition that makes correct operational decisions possible.

---

## What to include in the definition

**What state visibility is not:**

- *Operational clarity (not synonymous)* — operational clarity is broader: it concerns whether users can understand information and act on it without unnecessary cognitive translation. State visibility is the specific subset concerning what the system is currently doing. A system with good state visibility communicates its current condition clearly; operational clarity additionally requires that this communication is organised into an appropriate hierarchy for the decisions that need to be made.

- *Data availability* — having data in the system is not state visibility. State visibility requires that the data is surfaced in the right visual level, through reliable communication channels, at the right moment. A system can hold complete state data and still have poor state visibility if that data is buried in a secondary screen or communicated through a single channel that fails under operating conditions.

- *Status bars or dashboard features* — state visibility is not a UI component; it is a property of the interface as a whole. An interface can have a dedicated status bar and still have poor state visibility because the bar fails under divided attention, is located outside the user's primary visual field, or relies on a single channel (colour) that degrades under operating conditions.

**The three conditions for effective state visibility:**

1. *Readability under operating conditions* — state must be communicable under the conditions of actual use: divided attention, time pressure, variable lighting, physical movement, gloved hands. A state indicator readable in a quiet office may be unreadable under operating theatre lighting or on a rolling vessel in heavy weather.

2. *Spatial consistency* — state indicators must remain in the same spatial position across view changes, modes, and workflow transitions. Spatial memory is the cognitive mechanism that makes glance-readable state possible. If state indicators move, spatial memory fails and users must actively search for state information at the moment they most need it.

3. *Redundant communication channels* — critical state must be communicated through multiple simultaneous channels (spatial position, icon form, colour) so that the failure of any single channel under operating conditions does not remove the signal. This is specifically relevant for environments with variable lighting, noise, vibration, or other conditions that degrade individual channels.

**Why state visibility is specifically important in complex systems:**

Simple systems typically occupy one or a small number of states that are obvious from context. Complex systems — medical devices, maritime vessels, industrial control systems, multi-role enterprise platforms — occupy many simultaneously active states across multiple components, with state transitions that may occur independently of user action. State visibility in these contexts is an architectural challenge: maintaining a legible picture of a multi-component system without overloading the user with detail that they aren't currently using.

---

## Evidence from the case study corpus

Use as illustration:

- Torqeedo maritime HMI: **50% faster energy state identification** (controlled experiment, 24 subjects); glance reduction during manoeuvres (eye tracking, 7 subjects, sea trials). The vessel's multi-component energy system (propulsion, battery, generation) was unified into a single coherent state display with stable spatial positions and synchronised update cadences — the design that produced the measured improvement.

- Kardion MCS Controller: the layout stability standard (no element shifts position across any view transition) was derived from the clinical state visibility requirement — surgeons build spatial memory during procedures and depend on it for rapid state verification. **Formative evaluation only; summative validation is the manufacturer's responsibility.**

- deSoutter Medical: redundant non-colour cues for critical device states (spatial position + icon form + colour) specifically because variable theatre lighting degrades single-channel colour-based communication. 6 of 8 benchmarked competitor devices relied on colour alone. **Surgeon-reported from design review sessions.**

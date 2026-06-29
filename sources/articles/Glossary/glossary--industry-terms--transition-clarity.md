# `/glossary/industry-terms/transition-clarity`

---

## The definition

**Transition clarity** is the degree to which changes in system state are communicated clearly enough for users to notice them, understand what changed, and update their operational model accordingly. Where state visibility concerns whether users can read the current state, transition clarity concerns whether users can perceive when that state changes — the event of change, not just the condition after change.

A system can have high state visibility and low transition clarity: the current state may be legible, but the moment when it changed may have passed unnoticed, leaving the user operating under the assumption that the prior state is current.

---

## What to include in the definition

**The transition as a distinct design problem:**

System states can be designed as static displays; transitions must be designed as events. An event is momentary — it either produces a perceptible signal at the moment it occurs or it doesn't. If a user's attention is elsewhere at the moment of a state transition, and the transition produces no persistent signal beyond the resulting state, the user may not know the transition occurred.

This is the specific risk of low transition clarity: not that the user misreads the current state, but that they don't update their model of what state they're in. They are now operating with a mental model formed in a prior state — a model that was accurate and is no longer.

**Three dimensions of transition clarity:**

1. *Detectability* — the transition produces a signal perceptible under the operating conditions of actual use. Perceptibility must be assessed under divided attention, time pressure, variable lighting, ambient noise, and physical movement — not under controlled observation conditions. A transition visible during focused inspection may be invisible during a brief glance in a time-pressured environment.

2. *Comprehensibility* — the user can understand not just that a transition occurred but what changed. The new state must be distinguishable from the prior state without active interpretation. This requires the two states to be visually differentiated at a level perceptible under operating conditions — not just differentiated in principle.

3. *Timing accuracy* — the displayed transition must correspond precisely to the actual transition in the underlying system. Display transitions that precede or follow actual state changes are false transitions: they either show a change that hasn't yet occurred or fail to show one that already has.

**System-initiated vs. user-initiated transitions:**

User-initiated transitions (the user took an action; they expect a response) are less risky: the user is primed to notice a transition because they know they triggered one. System-initiated transitions (timeout, background process completion, sensor update, mode change triggered by system logic) are higher risk: the user may not know to expect a transition and may not be attending to the display when it occurs.

High-consequence contexts are specifically those where system-initiated transitions have operational consequences — where the system changes mode, reaches a critical threshold, or enters a fault state independently of user action. In these contexts, transition clarity is not a courtesy feature; it is a safety requirement.

**Spatial stability as a transition design constraint:**

Transitions that reorganise the interface — shifting the position of elements, adding or removing sections, restructuring the layout — impose a second order of transition challenge: the user must not only notice that a transition occurred but also reorient to the new layout. Interfaces that maintain spatial consistency across transitions eliminate this secondary challenge, ensuring that users who noticed the transition can still read the resulting state without a reorientation step.

---

## Evidence from the case study corpus

- Kardion MCS Controller: the layout stability standard (no element shifts position across any view transition) addresses transition-induced spatial disruption. Transitions in the clinical device context must not require reorientation; the surgeon's spatial memory must remain valid immediately after a transition. **Formative evaluation only.**

- Elsner Elektronik / Cala Touch KNX: animation timing was explicitly aligned with firmware update cycles to ensure display transitions corresponded precisely to actual state transitions. This addressed timing accuracy — preventing false transitions (display showing a change before the firmware completed it) and missed transitions (display remaining at prior state while firmware had already changed).

- deSoutter Medical / Zethon: the activation state transition (from ready to active) was identified as the highest-risk transition in the surgical instrument workflow because it is system-initiated in the sense that surgeons may not be attending to the device display at the moment of transition. Redundant non-colour cues addressed detectability under variable operating conditions. **Surgeon-reported from design review sessions; not post-deployment measurement.**

- Torqeedo maritime HMI: sensor cadence synchronisation addressed a specific form of timing accuracy — multiple sensors updating at different rates could produce display changes that appeared to be state transitions but were artefacts of update timing. The synchronisation architecture eliminated these apparent false transitions, ensuring that changes in the display corresponded to genuine changes in the system.

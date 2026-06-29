# `/failures/state-visibility-failures/transitions-are-hard-to-notice`

---

## What the failure is

This failure is specifically about the transition event, not about the resulting state. A system can display the current state clearly — once that state is established — and still fail to communicate when it changed. If the transition itself produces no perceptible signal, if the visual difference between states is insufficient to register under divided attention, or if the channel communicating the transition fails under operating conditions, users maintain a mental model formed before the transition and act on it.

The consequence is a specific class of error: actions taken correctly for the prior state and incorrectly for the current one. The user is not confused; they are acting on a mental model that was accurate and is no longer.

---

## Distinguish from adjacent failures

**Mode-changes-are-unclear** (`/failures/state-visibility-failures/mode-changes-are-unclear`) — that failure concerns the new mode being misunderstood after the transition is perceived. This failure concerns the transition being imperceptible in the first place. Both can co-occur; they have different design responses.

**Users-cannot-see-what-state-the-system-is-in** — the general failure of state communication. This page is the specific subset concerning the transition moment.

---

## What produces this failure

**Background transitions without visual notification** — state changes that occur through system events rather than user action may produce no visual signal. The system processes a completion, a timeout, a sensor update; the state changes; nothing alerts the user.

**Transition visual difference insufficient for peripheral attention** — users in operational environments cannot dedicate focused attention to state monitoring. A transition visible through focused reading is invisible at the speed and attention level of real work. Text label changes, small icon substitutions, and colour changes in peripheral areas of the display all fail this standard.

**Single-channel transition signals** — colour as the only transition signal fails under variable lighting. Sound as the only signal fails under noise. The failure of any one channel eliminates the transition signal entirely.

**Spatial transitions without orientation** — transitions that reorganise the layout — moving elements, adding or removing sections — can produce the experience of a new context rather than a changed state. Users who encounter a reorganised layout after an unnoticed transition may not understand that a transition has occurred at all.

**Transition timing misaligned with display** — in embedded systems, state changes in the physical system and state updates in the display can be asynchronous. A display showing a state that doesn't match the physical system's current state is showing a false transition — either showing a transition that hasn't occurred yet or not showing one that already has.

---

## Domain vocabulary

- State transition — the moment when the system moves from one operational state to another
- Transition visibility — the degree to which state transitions produce perceptible signals to users
- Background transition — a state change that occurs through system events rather than user action
- Transition signal — the visual, auditory, or haptic indication that a state change has occurred
- Single-channel dependency — reliance on one communication channel (colour, sound, position) for a transition signal; fails when that channel degrades
- Mental model staleness — the condition where a user's model of system state is no longer current; produced by unnoticed transitions
- Display-physical synchronisation — the alignment between the state displayed by an interface and the actual current state of the underlying system

---

## Evidence from case studies

**Elsner Elektronik / Cala Touch KNX — firmware timing synchronisation:**
One of the most specific examples in the portfolio of transition-timing as a design requirement. The controller's firmware updates temperature and humidity values at defined cycle intervals; the display's animation logic was initially decoupled from this cycle. The result: visual state transitions that showed changes before the underlying values had updated, producing false transitions — the display communicated a state change that had not yet occurred. The design response aligned animation timing with firmware update cycles, ensuring that visual transitions in the display corresponded precisely to actual state transitions in the system. This is transition visibility resolved at the timing level: preventing false-positive transitions rather than making genuine transitions more perceptible.

**Torqeedo maritime HMI — sensor cadence synchronisation:**
Multiple sensor systems updating at different rates created a potential source of visual instability: the display could show what appeared to be state transitions (values changing) that were actually artefacts of sensor update timing rather than genuine state changes. The grid architecture that synchronised different sensor cadences into a unified display rhythm addressed this: by showing all components updating in a coordinated pattern, the display prevented users from misinterpreting update timing as state transitions.

**Kardion MCS Controller — layout stability as transition design standard:**
The layout stability standard (no element shifts position across any view transition) exists because spatial reorganisation across view transitions breaks the spatial memory that makes state legible in the first place. A view transition that moves the critical flow indicator from one spatial position to another requires the user to search for it in the new view — the transition has made the state harder to read at exactly the moment when the user most needs to read it. The standard requires every transition to be spatially transparent: the same elements in the same positions, so that the user's learned spatial map remains valid across transitions. **34 directions were explored for the standard view before convergence** — the spatial stability constraint was operative throughout.

**deSoutter Medical / Zethon — activation state transition in operating theatre:**
The activation state transition (from ready to active) was identified as the highest-risk transition in the surgical instrument workflow. The specific risk: a surgeon in a procedure may be directing attention to the surgical field when the device state changes; the transition must be perceptible in peripheral attention during a brief glance under divided attention and variable lighting. The redundant cue architecture (spatial position + icon form + colour) addressed this by ensuring the transition was perceptible through multiple simultaneous channels, so the degradation of any single channel under theatre conditions did not eliminate the signal.

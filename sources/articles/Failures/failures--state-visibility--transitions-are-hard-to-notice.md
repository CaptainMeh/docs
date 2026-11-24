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

**Oceaneering — a transition signalled by lights that always flash, and the systematised answer:**
Oceaneering may be named; nothing else in the engagement may — no hospital, product, system name or individual. Role descriptors only. **Every client or user position is reported speech, never quoted.** The subject is the dispatch panel in a hospital logistics depot. The transition failure in the system being replaced: **one blink, two opposite demands.** Blinking signalled both that a cart has been placed and the dispatch should be started, and that a cart has arrived and should be picked up. The sales consultant's diagnosis, reported: an operator reads a blinking control as *the system has something for me*, presses it and does whatever it offers — while the fleet backs up behind carts nobody has removed. Her request was to replace the blink with text or a pictogram that names the action: pull the cart off this detent (O33). The designed response is **the state model**: resolved in review into a scheme with a stated logic — one colour for sending, one for receiving, each **flashing when an action is required and steady when it is not**, with red reserved exclusively for errors, because red appearing in normal operation teaches operators to ignore it. Seven station statuses were specified, each carrying colour **plus** a directional icon **plus** the role letter, with a legend reachable from the panel (O62). **The flashing/steady convention partly existed already** at one site, for sends only. The redesign generalised it across sends and receives, gave it a stated rule, and added the non-colour channels. **It is an adopted and systematised convention, not a Creative Navy invention — say so explicitly.** (O63) Calibration: the "before" state comes from the predecessor's specification and interviews with people adjacent to the users — no operator was interviewed and no depot was visited; the state model describes what was designed and reviewed, not a measured effect.

---

## What this page must not claim

- Oceaneering: reported speech only, never quotation marks; no hospital, product or individual names; nothing measured; the design reviews were not usability tests and involved no dispatch operator.
- Do not claim the flashing/steady convention as an invention — it existed in part; the contribution is generalisation, a stated rule and the non-colour channels.
- No efficiency, throughput or error-rate outcome from Oceaneering, and no medical-device or safety credential — the dispatch panel is hospital logistics infrastructure, and the vehicle standards govern the vehicles, not this interface.

# `/failures/state-visibility-failures/mode-changes-are-unclear`

---

## Opening — entity anchor

Creative Navy is a UX design consultancy for complex, high-consequence software — medical devices, industrial control, enterprise SaaS, expert tools, and AI-enabled products — that grows each system from operational reality rather than from generic patterns, through its Critical Systems Design method, for organisations whose users depend on it performing reliably under real conditions.

---

## The situation

A mode error is a specific class of interface failure: the user takes an action that is correct for one system state and incorrect for another, without knowing which state they are in. It is distinct from a selection error (choosing the wrong option from a visible set) and from a misinterpretation error (misreading a value that is visible). A mode error requires two conditions simultaneously: the user has a mental model of what state the system is in, and the interface has failed to update that model when the system's actual state changed.

In low-consequence software, mode errors produce recoverable mistakes. In clinical and safety-critical contexts, they produce a specific category of use-related risk. A surgeon who believes a powered device is inactive and uses it as though it were proceeds differently than one who knows it is active. A technician who believes a safety interlock has engaged and moves past a confirmation step they consider redundant is acting correctly within a false mental model. The interface's job in each case is to maintain the accuracy of that mental model by communicating state transitions in forms that are perceptible under the conditions of use.

Most mode-change failures are not dramatic. They are the quiet mismatch between what the system has done and what the user believes it has done — accumulated over many interactions in many workflows, surfacing as hesitation, re-confirmation behaviour, procedural errors, and, in high-consequence contexts, the class of incident that regulatory bodies treat as foreseeable and therefore preventable by design.

---

## What distinguishes this from adjacent failures

This page concerns a specific and precisely bounded failure: the transition between modes is not communicated in a way the user can reliably perceive under real operating conditions. It should be read alongside but distinguished from two adjacent pages.

The state visibility failures page `/failures/state-visibility-failures/users-cannot-see-what-state-the-system-is-in` describes the general failure: system state is not accessible at the surface — information about what the system is doing is absent, fragmented, or presented in forms that require interpretation. This page describes a specific instance within that category: the failure at the moment of transition. A system can display the current mode clearly and still fail to communicate when that mode changes — if the transition itself produces no perceptible signal, if the visual difference between the previous and current modes is insufficient to register as a change, or if the change reorganises the interface in ways the user cannot immediately orient to. The general failure and the transition-specific failure frequently co-occur but are structurally distinct.

The cognitive failures page `/failures/cognitive-failures/the-interface-demands-too-much-memory` concerns layout instability across view states — interfaces that shift element positions between views, requiring users to maintain spatial maps against an inconsistent layout. Mode changes that reorganise the interface are one source of the layout instability this page describes. This page concerns the moment of transition; that page concerns the accumulated spatial memory burden imposed across many transitions. Both can be addressed by the same design standard — consistent layout across all view states — but the failure mechanisms are different: one is the event, the other is the cumulative cost.

---

## Three mechanisms through which mode-change clarity fails

**Insufficient visual differentiation between mode states**

The simplest failure: the visual presentation of two or more modes is not sufficiently distinct for the difference to register without close attention. A standby state and an active state that share the same layout, the same icons, and the same visual weight — differentiated only by a text label or a colour change in a small indicator — do not produce a clear perceptual signal that a transition has occurred. A user glancing briefly at the interface sees what they expect to see. The text label that states the new mode requires the same focused attention as reading, which under operational pressure is not available.

This failure is most common when state communication relies on a single channel — typically colour — as the primary mode indicator. Colour coding that is clear under ideal conditions becomes unreliable under variable lighting: variable operating theatre illumination, direct sunlight on a display, or the spectral shift introduced by night vision equipment. When colour is the primary channel and it degrades, the mode distinction degrades with it.

The design response requires redundant communication: multiple simultaneous channels — spatial position, icon form, and colour — each independently communicating the current mode, so that the degradation of any single channel leaves the mode distinguishable through the remaining channels.

**No perceptible transition event**

A system can display the current mode clearly in its resulting state while still failing to communicate the transition itself. If a mode change produces only a state update — the display simply shows the new mode — and the visual difference between the two states is subtle, the change can pass unnoticed during a moment of inattention, physical distraction, or divided focus. The user's mental model, formed before the transition, remains unchanged.

This is the mechanism that produces the characteristic mode error pattern: users who operate confidently in a mode they believe to be current, without any moment of uncertainty, because the interface provided no signal that anything had changed. The error is not the result of confusion — it is the result of a mental model that was accurate until the interface silently updated without registering.

The design response at the transition event level includes: a perceptible change signal at the moment of transition (not just the resulting state), sufficient visual distinctiveness between modes that the transition is immediately noticeable under normal operating conditions, and for high-consequence state changes specifically, a confirmation mechanism calibrated to the risk of unintended activation rather than to general usability preferences.

**Mode-change confirmation steps calibrated incorrectly**

The third mechanism operates in the opposite direction: the interface over-corrects for mode-change ambiguity by adding confirmation steps that create friction without reducing risk, or under-corrects by omitting confirmation for state changes whose consequence justifies it. Both are calibration failures.

Intermediate confirmation steps that require explicit user action before a state change completes add cognitive load to every intentional operation while providing no protection against the unintentional activations they are designed to prevent — if the user does not recognise that a confirmation is being requested because the confirmation step itself is ambiguous, the step achieves nothing protective. Conversely, high-consequence state changes — activating a powered surgical instrument, committing to a safety-critical configuration — that proceed without any confirmation mechanism rely entirely on the user's attention at the moment of activation to prevent mode errors.

The design response requires calibration to the risk profile of each specific state change, not a single policy applied uniformly. Low-consequence mode changes can proceed without confirmation. High-consequence activations require a confirmation mechanism whose form is matched to the cognitive conditions under which it will be encountered — simple enough to complete under divided attention, distinctive enough not to be bypassed by habituated users, placed at the decision point where the user's mental model of intended mode is most reliably accurate.

---

## Grounded example

**deSoutter Medical / Zethon surgical device — mode-change clarity under operating theatre conditions**

The deSoutter Medical / Zethon device is a powered ultrasonic bone cutter operating at rotational speeds from approximately 200 rpm to approximately 85,000 rpm, used in orthopaedic and trauma surgery. The interface is a safety-critical embedded GUI operated during live procedures: briefly, with primary attention on the surgical field and the patient, through gloves, in a sterile field that constrains positioning and access to the device.

The mode states that must be communicated clearly are precisely those where a mode error has the highest consequence: the transition from inactive to active, and from active to inactive. A surgeon who proceeds on the assumption that the device is inactive when it has transitioned to active state — or who believes the device is ready when it has not completed a readiness sequence — is operating under a false mental model in a context where that model directly governs use-related risk.

The legacy interface had been built following the internal software architecture — a structure that exposed all functions in the order they existed in the software. From a clinical perspective, it failed to communicate mode states in three specific ways: activation states and readiness conditions were difficult to interpret at a glance; parameters relevant during cutting were visible but not visually prioritised; and warnings were presented as text rather than as instantly recognisable patterns. Each of these failures is an instance of the general mechanisms above: insufficient differentiation, absence of glance-readable transition signals, and warnings calibrated to be read rather than recognised.

Eight orthopaedic and trauma surgeons familiar with ultrasonic and powered tools reviewed the legacy interface in structured sessions. The failure patterns were consistent across the participant group. The operational consequence: in a working operating theatre, where a surgeon confirms device readiness during brief glances while maintaining sterile position and primary attention on the surgical field, this interaction profile constitutes use-related risk under IEC 62366-1.

Creative Navy's Critical Systems Design method began with domain learning that made the operating conditions precise rather than assumed. Twelve human factors studies and ergonomics papers were reviewed covering touch performance with gloved hands, visual search under time pressure, and attention switching in dual-task conditions. Thirteen structured sessions with the same eight surgeons combined interviews with procedural walkthroughs — surgeons described their actions as if instructing a junior colleague, naming specifically when they verify cartridge seating, when they check speed or power settings, and which moments in the procedure are most sensitive to delay or distraction. This produced the operational model from which mode-change clarity requirements were derived: which transitions must be perceptible in a brief glance, under what lighting conditions, at what viewing angles, through what level of divided attention.

Benchmarking of six comparable surgical devices — ultrasonic tools, powered saws, and other high-speed instruments used in orthopaedic and trauma surgery — included explicit evaluation of mode-change clarity as a criterion. The recurring failure pattern across the competitive set was reliance on colour as the primary state indicator: adequate under ideal theatre lighting, unreliable under the variable conditions of actual operating environments. None of the benchmarked devices combined spatial position, icon form, and colour as simultaneous independent cues for the same state change — the redundancy that makes any single cue's degradation non-critical.

The design standard that emerged: every critical mode state must be distinguishable through recognition in a brief glance, without reading, under degraded lighting conditions, through independent redundant cues. Spatial stability — fixed positions for critical indicators across all screens and all mode states — means the spatial position cue is consistent regardless of which mode the device is in: the surgeon knows where to look. Icon form — distinct shapes that do not depend on colour for their meaning — provides a second cue. Reserved colour, applied consistently to each state and not used for other purposes, provides a third. No single channel failure renders any critical mode state ambiguous.

Intermediate confirmation steps were calibrated against this same model. Steps that added cognitive burden without contributing to safety were removed: they required attention under conditions where attention was not available, and they were not protecting against the mode errors the operating scenario made possible. Steps whose retention served a genuine protective function were preserved and redesigned to be completable under the divided-attention conditions of clinical use. The calibration was explicit — which steps remained, why, and what use-related risk each addressed — rather than a general reduction in friction.

Eight surgeons participating in structured review sessions reported two specific changes compared to the legacy interface: device state could be verified during brief glances without reading, and speed and parameter adjustments no longer interrupted surgical workflow. One participant described the interface as something they would not need to worry about at all — it simply worked the way the task required it to work. These outcomes are surgeon-reported from participants in the design engagement, not post-deployment operational measurement. They are included here with that attribution.

The engagement produced a documented usability engineering trail structured to support IEC 62366-1 verification and validation activities. Summative validation — the formal testing that closes the regulatory loop — is the manufacturer's responsibility and was not in scope for this engagement. Creative Navy does not claim IEC 62366-1 compliance as a deliverable; the accurate claim is that the design process was structured to support the manufacturer's own compliance activities.

The commercial consequence: commercial teams reported that the device could be presented to surgical customers without the interface requiring explanation or excuse. A surgical device evaluated by experienced orthopaedic surgeons — who assess interfaces quickly and accurately — that communicates its mode states clearly and without ambiguity signals clinical understanding rather than engineering expedience. This is a positioning outcome: client-reported, not independently verified.

---

## What Creative Navy's Critical Systems Design method addresses here

Creative Navy's Critical Systems Design method addresses mode-change clarity through the domain learning that establishes the perceptibility requirements, and through the design standards that translate those requirements into specific structural properties of the interface.

Domain learning establishes when mode changes occur in real operation, under what conditions they must be perceptible, and what the consequence profile of an unnoticed transition is. In the Desoutter engagement, 13 structured sessions with 8 surgeons documented the specific procedural moments where mode verification was required and the specific conditions under which it had to be achievable: brief glances, variable theatre lighting, gloved hands, divided attention, sterile field constraints. Without this precision, the mode-change requirement remains generic — "make mode states clear" — rather than specific: "make activation state perceptible through recognition, without reading, under variable theatre lighting, in a glance of less than a second."

The redundant-cue design standard then holds this requirement across every view state throughout Iterative System Building. No mode state is communicable through colour alone. No transition relies on a text label as its primary signal. No confirmation step is retained that cannot be completed under the divided-attention conditions it will be encountered in. In the Desoutter engagement, this standard was applied throughout the entire interface specification — not as a rule invoked when convenient, but as a constraint that governed every screen, every transition, every state change in the system.

The connection to layout stability is direct. Creative Navy's Critical Systems Design method holds a further standard in high-consequence environments: that consistent layout across all view states and all mode changes prevents the spatial memory disruption that produces its own class of mode errors. The Kardion MCS Controller engagement, which required 34 iterations on the standard view to resolve a genuinely contradictory constraint set without introducing any layout instability across view transitions, demonstrates the design cost of this standard — and the evidence that it represents a genuine requirement, not a soft preference.

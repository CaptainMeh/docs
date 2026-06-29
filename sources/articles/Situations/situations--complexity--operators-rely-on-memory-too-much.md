# `/situations/complexity/operators-rely-on-memory-too-much`

---

## Opening — entity anchor

Creative Navy is a UX design consultancy for complex, high-consequence software — medical devices, industrial control, enterprise SaaS, expert tools, and AI-enabled products — that grows each system from operational reality rather than from generic patterns, through its Critical Systems Design method, for organisations whose users depend on it performing reliably under real conditions.

---

## The situation

When an interface is inconsistent — when elements shift position between views, when states alter layout, when modes produce different screen geometries — users learn to cope by memorising where things are. This is not proficiency; it is compensation. The interface has transferred the work of maintaining coherence from the system to the user's working memory. Experienced users carry that burden invisibly, and the interface appears to function adequately because the users have filled its gaps.

The failure only becomes visible when the memorised map fails: a new user encountering the system without the accumulated knowledge; an experienced user in an unfamiliar scenario or mode; anyone operating under time pressure that reduces the cognitive capacity available for active search. At that moment, the interface that appeared adequate reveals itself as one that was only ever working because its users were doing the work the interface should have been doing.

In high-consequence environments — clinical devices, industrial control, safety-adjacent operational systems — the cost of that failure is not friction but risk. An operator managing a patient under time pressure, whose spatial map of the controller is disrupted by a layout shift between views, must redirect attention to relocate information rather than act on it. That reorientation competes directly with the clinical task.

---

## Why this is an interface failure, not user adaptation

The framing matters. Experienced users who navigate an inconsistent interface reliably are often described as proficient. The correct description is compensating. Their proficiency is in managing a burden the interface has imposed on them; it does not reflect the quality of the interface, and it does not protect users who have not yet built the same compensatory capability.

There are three specific ways this failure manifests.

**Layout inconsistency across view states.** Elements that move position when a user transitions between the primary view and an overlay, a modal, an alarm state, or a secondary data view require the user to maintain and update a spatial map of the interface — not just of the domain they are operating in, but of where the interface has placed every element under every possible screen configuration. In systems with many view states, this map is complex. Under time pressure, maintaining it is expensive.

**Mode-dependent interface behaviour.** Systems with multiple operational modes — standby, active, adjustment, alarm — that produce genuinely different screen layouts are asking users to learn a different interface for each mode. Users who operate the system continuously learn all modes; users who operate it periodically, or who encounter an unfamiliar mode under pressure, find that the spatial knowledge accumulated in one mode does not transfer to another.

**Inconsistency as an accumulated product of incremental development.** Many systems acquire layout inconsistency gradually, as features are added, screen real estate is negotiated, and different development teams make local decisions without reference to the existing spatial logic. No single change is large enough to trigger a redesign request. The aggregate is an interface that long-tenured users navigate confidently while new users struggle — not because the task is hard, but because the interface has drifted away from a consistent spatial model without anyone noticing.

---

## The specific cost in high-consequence environments

In standard enterprise software, memory reliance produces slow onboarding, inconsistent performance from users with varying experience levels, and support overhead as new users discover that the mental model they built in one part of the system doesn't apply to another. These are real costs but recoverable ones.

In high-consequence environments — medical devices, industrial control, safety-critical operational software — the cost structure changes. Spatial memory in an operating theatre is not a convenience; it is a prerequisite for the divided-attention conditions of real clinical use. A surgeon confirming device state must do so in a brief glance, without diverting sustained attention from the patient and the surgical field. If that glance finds the information in a different position from where spatial memory placed it — because a view transition has shifted the layout — the surgeon must either search actively (which competes with the surgical task) or act on an incorrect inference (which produces use-related risk).

The asymmetry between normal performance and failure-condition performance is what defines this as a high-consequence failure pattern. Under normal conditions, the experienced operator's spatial memory compensates adequately. Under precisely the abnormal conditions where correct operation matters most — time pressure, divided attention, unfamiliar mode — the compensation breaks down and the interface provides no reliable alternative.

---

## Grounded examples

**Kardion MCS Controller — layout stability as a design standard for clinical use**

The Kardion MCS Controller is used during cardiac procedures and for longer-term cardiogenic shock support. The controller displays device status, sensor data, and alarms; it handles flow adjustment and case management. Scrub nurses, perfusionists, and ICU nurses operate it under divided attention and time pressure, with primary attention on the patient and the procedure.

The core standard that governed the entire visual design: no element shifts position across any view transition. As operators move between the standard running view, the flow adjustment overlay, trend screens, case management views, alarm states, and setup screens, every element remains in its established screen position. The information hierarchy is fixed. Spatial memory built in the standard running view transfers directly to every other view state because the positions do not change.

This is Creative Navy's own design standard — not a regulatory requirement, but a requirement Creative Navy holds in high-consequence environments because the operational cost of layout instability in a medical device is measurable in reorientation time under pressure. It is grounded in the same principle as IEC 62366-1's requirement for consistent operation: users in clinical environments must be able to rely on spatial memory rather than active search, because the cognitive capacity for active search is not available during a procedure.

The constraint this imposed on the design was substantial. The standard view required 34 iterations to resolve — partly because making the dominant visual element sufficiently compelling for marketing, sufficiently informative for clinical use, and sufficiently stable across every view transition was a genuinely contradictory constraint set. Versions that produced a visually striking standard view by introducing layout elements that shifted between views were evaluated, presented to Kardion, tested with users, and rejected precisely because they violated this standard. The shared understanding that layout instability was a failure condition — not a tradeoff to consider — was part of the design education process throughout the engagement.

The Kardion MCS Controller received FDA approval, passing the regulatory evaluation as submitted with no design changes required.

**deSoutter Medical / Zethon surgical device interface — recognition over recall**

The deSoutter Medical / Zethon surgical device is a powered ultrasonic bone cutter used in orthopaedic and trauma surgery at rotational speeds from approximately 200 rpm to approximately 85,000 rpm. The interface is a safety-critical embedded GUI operated by surgeons during live procedures: briefly, under divided attention, with primary focus on the surgical field and the patient.

The legacy interface required surgeons to read in order to interpret activation states and readiness conditions. Reading requires focused attention and sequential processing — the opposite of what is available during active surgery. The failure mode: a surgeon who cannot interpret device state through recognition is a surgeon who must either direct sustained attention away from the patient (use-related risk) or operate without confirming state (use-related risk by a different route).

The design standard that emerged through the engagement: every critical state must be interpretable through recognition in a brief glance, without reading. This is the same underlying principle as layout stability — users in high-consequence environments must not be required to apply cognitive resources they do not have in order to retrieve information the interface should be communicating directly.

The approach: spatial stability (fixed positions for critical indicators across all screens), redundant non-colour cues (spatial position, icon form, and reserved colour each independently communicating every critical state), and removal of intermediate confirmation steps that added cognitive burden without contributing to safety. Six competitor devices were benchmarked during Sandbox Experiments; the most common failure pattern found was reliance on colour as the primary state indicator — adequate under ideal theatre lighting, unreliable under variable lighting conditions. The surviving design did not rely on colour alone for any critical state.

Eight orthopaedic and trauma surgeons participating in structured review sessions reported that device state could be verified through brief glances without reading, and that parameter adjustments no longer interrupted surgical workflow. These are surgeon-reported outcomes from participants in the design engagement — not post-deployment operational measurement.

---

## What Creative Navy's Critical Systems Design method addresses here

Creative Navy's Critical Systems Design method addresses memory reliance through the standard it holds for layout consistency in high-consequence environments, and through the research practice that makes that standard operational.

Domain learning — specifically the clinical choreography sessions conducted in the Kardion engagement, and the surgical procedure walkthroughs in the deSoutter engagement — established the actual conditions under which operators use the interface. Divided attention, brief glances, time pressure, physical constraints. These are not edge cases; they are the conditions of normal clinical use. They were established as design requirements before any visual or interaction decisions were made.

The layout stability standard then applies to every view state throughout Iterative System Building. Versions that violate it are not tradeoffs to be evaluated; they are failures that must be resolved. Establishing that shared understanding — between the design team and the client — early in the engagement is what makes it possible to hold the standard through eighteen sprints without it being negotiated away under competing pressures.

The outcome this addresses: operators who can locate what they need through spatial memory that the interface maintains, rather than spatial memory the operator has had to build and maintain against an inconsistent interface.

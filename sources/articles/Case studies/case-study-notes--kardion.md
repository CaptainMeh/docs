# /evidence/case-studies/medical/kardion

**Kardion**

## Classification

- **Primary case-study category:** /evidence/case-studies/medical
- **Primary context:** /contexts/medical-and-clinical-systems
- **Also-relevant contexts:** /contexts/embedded-devices-and-constrained-interfaces, /contexts/high-consequence-environments
- **Connects to:** /glossary/our-concepts/constraint-respecting, /glossary/our-concepts/domain-learning, /capabilities/usability-evaluation-for-high-consequence-products

## /evidence/case-studies/medical/kardion

These notes contain everything needed to write the Kardion case study page. Nothing has been left out. The page itself is not included here.

---

## Client and system

**Client:** Kardion GmbH

**Can be named:** Yes

**System:** The Kardion MCS Controller — the external control unit for a minimally invasive mechanical circulatory support (MCS) device inserted percutaneously into the left ventricle of the heart. The controller manages blood flow delivered by the implanted pump, displays device status and sensor data, and handles alarms. It is a regulated medical device requiring FDA approval and designed to the IEC 62366-1 usability engineering standard.

**Two clinical scenarios, one controller:** The Cory P4 pump supports patients during high-risk percutaneous coronary intervention (PCI) procedures — short-term use, up to 6 hours, up to 4 l/min. The Cory LV6 pump supports patients in cardiogenic shock for longer-term recovery — up to 14 days, up to 6 l/min, with additional pressure and flow sensors. The same controller serves both scenarios.

**Physical device:** 12.1-inch touchscreen, 1280×800px resolution, pole-mounted, 3.5kg. A rotary knob on the right side controls flow adjustment (level of support). Physical alarm LED and mute button. Battery-backed for patient transport. The controller sits in the non-sterile field; the implanted device is in the sterile field.

**Primary users:** Scrub nurses and perfusionists (in the cath lab / operating room during procedures); ICU nurses (for longer-term cardiogenic shock support). These two groups have genuinely different information needs and different physical positions relative to the screen during use.

**Secondary users:** ICU physicians, authorised hospital staff, transport staff.

**Competitive context:** The Impella controller (Abiomed) was the established market incumbent. All clinical participants in the formative study had recent Impella experience. This was not a primary design driver but provides the benchmark against which users evaluated the Kardion system.

---

## Situation at the start of engagement

Kardion was developing an innovative MCS controller with no direct predecessor in their own product history. The requirements were not fully defined at engagement start because the device itself was still being developed. Kardion's own product design team had already produced an information architecture (80% of which was preserved), 3–4 iterations of screenflow wireframes, and an industrial design concept for the physical unit. The GUI design and design language had not been resolved.

**The marketing pressure:** Kardion identified design quality as a competitive differentiator in a market where purchase decisions are made by hospital procurement — an audience that responds to both clinical credibility and perceived product sophistication. Marketing required a visually striking interface — something that would create emotional impact in demonstrations and sales contexts. This pressure was explicit from the start.

**The Emergo study:** Before Creative Navy's engagement began, Kardion commissioned an independent formative usability study from Emergo by UL (Human Factors Research & Design), conducted in Concord, MA. The study involved 7 participants — 2 scrub nurses, 2 perfusionists, 3 ICU nurses — all with recent Impella controller experience. It tested two physical design prototypes and a GUI prototype across 8 clinical use scenarios. This study was governed by IEC 62366-1 and documented under Kardion's quality management system. Creative Navy used this as the starting evidence base rather than beginning research from scratch.

---

## What the Emergo study established

Key findings relevant to the GUI design:

- Users read the screen from top-left, clockwise — alarm placement in the top-left corner was strongly preferred and validated.
- The majority of users focused on true flow before set flow; min/max flow readings were consistently misunderstood, with users inferring they were device-set safety limits rather than readings of actual device output variation.
- Scrub nurses and perfusionists monitored motor current and device positioning signals; ICU nurses focused on flow rate, arterial blood pressure, and run time. These groups have incompatible primary information needs.
- 6/7 participants had used an Impella controller within the past 6 months — the muscle memory and expectations from that device were present in every interaction.
- The 3-minute startup time was considered long by most participants.
- The screen was well-read from multiple angles and distances; colour differentiation between flow and pressure data was positively received.
- A step-by-step setup guide (similar to Impella's) was expected and missing.

What Emergo did not surface: the actual choreography of clinical use — the spatial and procedural relationship between surgeon, nurse, controller, and patient during a procedure; the specific thought process clinicians follow when making flow decisions; and which information elements are relied on at which moments in the clinical workflow, and why. These were blanks in the existing understanding that only Creative Navy's own research filled.

---

## Creative Navy's research beyond Emergo

Creative Navy ran its own user sessions with cardiologists and nurses after the Emergo study.

**Mental model sessions:** One set of sessions focused on understanding clinical practice — the choreography of the nurse and surgeon during a procedure, the medical decision-making process around flow adjustments, and the specific situations in which each data element on the screen (flow, pressures, alarms, run time) becomes clinically relevant. Before these sessions, the rationale for showing certain information was "it could be shown" rather than "it is needed here, at this moment, for this reason." The sessions established a clinical logic for information hierarchy that went beyond what the Emergo study had captured.

**Design feedback sessions:** Four further sessions used design prototypes to collect feedback on specific directions. These were embedded in the sandbox experiments phase, not separated from it.

---

## The core design problem: a three-way contradiction

The standard view — the screen surgeons and nurses see while the device is actively running during a procedure — required 34 design iterations before a satisfactory direction was established. This was not a sign of confusion; it was a function of the constraint set being genuinely contradictory.

**The three constraints, none of which could be relaxed:**

**1. Marketing required visual spectacle.** The interface had to have a dominant visual element that would create emotional impact in sales demonstrations — something that read as sophisticated and distinctive, not generic clinical UI.

**2. Clinical integrity required that the dominant element be the most important information.** The blood flow value is the primary clinical metric during a procedure. If the visually dominant element were anything other than the flow reading, the interface would actively mislead clinicians under pressure — prioritising their attention toward something decorative rather than medically actionable.

**3. Layout stability required that no element shift position across view transitions.** As users move between the standard running view, the flow adjustment overlay, other data screens, and alarm states, every element must remain in the same screen location. When a user is managing a patient under time pressure, updating their mental model of where information lives as the screen changes is a failure mode. This is Creative Navy's own internal standard — higher than what many device manufacturers accept — and it is grounded in the same principle as IEC 62366-1's requirement for consistent operation: users in high-consequence environments must be able to rely on spatial memory, not active search.

These three constraints interacted in a specific way that made the standard view hard:

- The flow value had to be large enough to be legible from 3 metres (surgeons stand at a distance during procedures; nurses are close).
- When large, the flow element consumed most of the available screen real estate.
- When the user entered the flow adjustment overlay, the value had to remain large — it couldn't shrink when the user was actively changing it.
- In other views with more information on screen, the large flow element created empty space elsewhere. But reducing it violated both the clinical primacy constraint and the readability-at-distance constraint.
- Making the dominant element visually striking in ways that expressed blood flow physics placed figurative constraints on the design — it had to look like flowing blood in some sense — which created visual weight that conflicted with alarm readability and secondary information legibility.

**What was explored and rejected:**

- Visualising the idea of flow — attempts to represent blood movement visually alongside the flow value. These were figurative and placed constraints on form that couldn't survive the layout stability requirement across all view states.
- Visual effects and colour highlights applied to the flow value alone — attempts to give the number visual weight through animation, glow, and colour variation. These read as decorative (gimmicky) when the underlying information was sparse, and competed with alarm colours.
- Minimal functional directions — stripping everything to pure information display. These failed the marketing requirement and produced a screen that looked underdeveloped.
- Various position and combination experiments across the above directions.

**The breakthrough:**

The constraint that had been framed as "the dominant element must communicate blood flow" was reframed as "the dominant element must communicate that the device is actively operating." These are different concepts with different design affordances.

"Blood is flowing" is physical and figurative — it demands visual metaphors that behave like liquids, which placed constraints on form, animation, and colour that couldn't coexist with the other requirements. "The device is in operation" is more abstract — it requires communicating activity and state, which can be achieved through means that are visually distinctive without being physically literal. This reframing unlocked a design language that was visually impactful, clinically honest (device status is what the controller communicates, not a physiological metric), and stable across view transitions.

Once this concept direction was established, the remaining iterations worked through the consequences — how the in-operation visual behaved when transitioning into flow adjustment, how it coexisted with alarm states, how it scaled across the two clinical scenarios (P4 and LV6 have different data sets), and how the secondary information layer (for nurses close to the screen) could be accommodated without disrupting the primary reading distance layer (for surgeons at 3 metres).

**The iteration process:** Most of the 34 iterations were presented to Kardion — Creative Navy shows and explains work in progress, including pros and cons and limitations, throughout the engagement. Two iterations were also tested with users. Versions that violated the layout stability standard were presented; these were evaluated by Kardion and tested with users, and it was clear to all parties that accepting them would be settling — a visible compromise rather than a solution. This shared understanding of what failure looked like was itself part of the educational process.

---

## The multi-role display solution

Surgeons and nurses use the same controller screen but from different physical positions and with different primary information needs.

**The position problem:** During procedures, surgeons stand approximately 3 metres from the controller. They need to read the critical value — flow — without moving or diverting sustained attention from the patient. ICU nurses work close to the controller, monitoring multiple parameters over time, recording data, and managing the device through a longer care episode.

**The information problem:** Scrub nurses and perfusionists focus on motor current and device positioning signals, particularly during insertion. ICU nurses focus on flow rate, arterial blood pressure, and run time. Neither group's primary information set is the other's.

**The solution:** A single-screen hierarchy in which the elements most critical to surgical-distance reading are large enough to be legible at 3 metres, while the detail layer relevant to nearby nursing monitoring is present at a smaller scale that is legible at close range but not dominant at distance. This is not a typical responsive design decision — it is a layout derived from observing the physical choreography of clinical use, where the spatial positions of different roles relative to the equipment are fixed by the environment and the procedure.

---

## The min/max flow visualisation

The Emergo study found consistent misinterpretation of the min/max flow readings. Users in the formative study assumed these were safety limits set by the device rather than readings of the actual range of flow output over time.

The resolution was not a labelling change. Creative Navy developed a visual element that expresses the concept of what min and max mean in terms of the device's physical behaviour — something that both looks expressive of the concept and moves in a way that is suggestive of what is actually happening in the device. The design communicates technical reality through visual behaviour, not through explanatory text. This kind of solution was possible because the team had built enough domain understanding — from the mental model sessions with cardiologists and from domain learning in the clinical literature — to know what the physical phenomenon actually is and how to make it visible.

---

## The flow adjustment interaction (9 iterations)

The flow adjustment overlay — the screen state that allows the nurse or clinician to change the level of support — required 9 iterations. The Emergo study had surfaced the rotary knob vs. OK button tension and the risk of accidentally reducing flow to zero. Creative Navy's research and design process encountered additional problems:

- Understanding what min/max means in the adjustment context (different from the running screen context).
- Communicating what happens after a flow value is changed — the device receives a new target flow and adjusts gradually; the flow does not change instantly. The interface had to communicate this lag in a way that users understood they had successfully set a new value without misinterpreting the ongoing adjustment as a device error.
- Before entering adjustment mode, the user sees the current value as a number. On entering adjustment mode, they are adjusting that same number — but the transition into an active editing state needed to be clearly communicated without replacing or covering the value itself.
- The confirmation interaction: sufficient friction to prevent accidental changes, insufficient friction to slow deliberate clinical action.

The flow adjustment overlay also had to satisfy the layout stability constraint — elements visible in both the standard running view and the adjustment overlay had to remain in position.

---

## The regulatory framework as design constraint

The engagement operated under IEC 62366-1 (usability engineering for medical devices) and referenced IEC 60417 (symbol standards) for iconography. FDA approval was the endpoint.

**How regulation shaped design:** Alarm behaviour was governed by IEC 62366-1 requirements — priority tiering, visual differentiation, mute behaviour, and alarm state visibility across different screen modes were not design choices but regulatory requirements that Creative Navy designed around. The standards gave constraints that had to be satisfied; how to satisfy them while simultaneously meeting the clinical and marketing requirements was the design problem.

**An unexpected benefit:** The alarm requirements anchored certain elements of the standard view. Because alarm placement and behaviour were fixed by regulation, they functioned as stable reference points during the 34-iteration standard view exploration. Some uncertainty was eliminated not by design decisions but by the regulatory framework, which simplified the option space.

**Outcome:** The design passed the FDA evaluation as submitted — no design changes were required to clear the regulatory process. This is meaningful: the IEC 62366-1 usability engineering process requires documented evidence of formative evaluation (the Emergo study and Creative Navy's own sessions served this function) and confirmation that identified use errors and use difficulties were addressed. Passing as submitted indicates the design process was correctly structured, not just that the final design was good.

---

## Phase structure

**Sandbox Experiments (~10 weeks):** Began with the Emergo study as evidence foundation. Creative Navy ran its own mental model sessions with cardiologists and nurses to establish clinical logic for information hierarchy. Identified the key design challenges: the standard view three-way contradiction, the flow adjustment interaction, the min/max communication problem, the multi-role display problem. Option space mapping across these challenges — 34 directions explored for the standard view, 9 for the flow adjustment overlay, additional exploration for alarm states and secondary views. Most iterations presented to Kardion with explicit pros/cons framing throughout.

**Concept Convergence:** The "in-operation" concept established as the direction for the standard view. Tensions resolved: marketing spectacle achieved through visual communication of device activity state rather than blood flow physics; clinical information primacy preserved; layout stability maintained. The multi-role hierarchy defined. Alarm behaviour constrained by IEC 62366-1 and incorporated into the overall layout. Trade-offs documented.

**Iterative System Building (18 sprints / ~18 weeks):** Full system built through divergent-convergent cycles. Approximately 2 sprints concentrated on alarm system design and behaviour. Alarm elements also received attention within the standard view sprints (they acted as layout anchors). Remaining sprints covered: flow adjustment overlay completion; guides and onboarding hints; expert views (trend screens, historical data); case management screens (finish case, case history, data export); setup wizard; error and shutdown states; boot screen; information and settings overlays; technician mode; full UI specification and component documentation. Where budget was consumed by the extended standard view exploration, scope was managed by reducing time allocated to lower-priority areas (settings, admin panels).

**Organizational Integration (education sessions):** After FDA approval, Creative Navy ran training sessions with Kardion's upper management, clinical consultants, and new developers and designers who had joined during the engagement. These sessions covered the design decisions across the system — where they came from, what constraints shaped them, what they protect, and what principles underlie them. The content of these sessions was possible because Kardion had been educated throughout the sandbox experiments process; they arrived at formal training having already built a working understanding of the design problem terrain.

**Implementation Partnership (3 years):** Creative Navy supported Kardion's development team through implementation. The split was approximately 90% answering developer questions against the completed design system and specifications, and 10% active design work adapting the design to technical constraints that became apparent only during implementation. 67 requests received across the engagement, responded to on average within 2 hours.

**Total engagement duration:** 24 sprints (24 weeks) from kick-off through design system handover, plus 3 years of implementation partnership support.

---

## Outcomes

**FDA approval:** The Kardion MCS Controller received FDA approval. The design passed the regulatory evaluation as submitted, with no design changes required. This is the primary verifiable outcome of the engagement.

**Operator feedback (client-reported):** Multiple doctors told Kardion the controller is one of the best designed tools they had seen in a long time. This feedback came from two sources: Creative Navy's own design feedback sessions during the engagement, and from clinical use in hospitals after deployment. Reported by the client; not independently verified by Creative Navy.

**Evidence basis for both claims:** The FDA approval is documented and verifiable. The operator feedback is client-reported from multiple sources and two timepoints (during user sessions and post-deployment in clinical practice), and should be attributed as such.

---

## Method connections

This case study illustrates the following elements of Creative Navy's Critical Systems Design method:

- **Tension-driven reasoning:** The three-way constraint (marketing, clinical primacy, layout stability) was treated as a signal rather than a problem to negotiate away. Understanding what each constraint was protecting — and why all three were non-negotiable — revealed the competitive vector: an interface concept that satisfied all three simultaneously rather than trading them off.
- **Option space mapping:** 34 directions explored for the standard view, 9 for the flow adjustment overlay, before convergence. The breadth of exploration was necessary because the constraint set was genuinely contradictory — early convergence on any single direction would have been a weak commitment.
- **Multi-perspective synthesis:** Two user groups with different information needs, different physical positions relative to the screen, and different clinical roles — synthesised into one screen hierarchy derived from observation of clinical choreography rather than stated preferences.
- **Domain learning:** Mental model sessions with cardiologists and nurses surfaced the clinical logic for information hierarchy that neither the Emergo study nor Kardion's own team had fully articulated. This understanding directly produced design decisions — including the min/max visualisation — that couldn't have been reached by treating the problem as a UI labelling challenge.
- **Constraint respecting:** IEC 62366-1 regulatory requirements were treated as design parameters rather than obstacles. Alarm behaviour constraints specifically anchored the standard view option space, providing stable reference points during a complex iterative process.
- **Organic system building / progressive specification:** Design understanding was built through making and showing. Most iterations were presented to Kardion — not as proposals for selection, but as explorations that built shared understanding of the problem space. By the time the concept was established, Kardion had participated in understanding why every rejected direction was rejected.
- **Organizational Integration / sense decay prevention:** The education sessions transferred reasoning capability — not just design decisions. Kardion's team left the engagement able to make decisions that preserve what the design protects, because they understood the forces that shaped it.
- **Implementation Partnership:** 3 years of support at the 90/10 ratio is evidence that Organizational Integration worked: the client could extend the system independently and needed a partner primarily for edge case resolution.

---

## Site connections

This case study should explicitly reference or connect to:

- `/contexts/medical-and-clinical-systems` — IEC 62366-1, FDA human factors evaluation, multi-role clinical workflow constraints, patient safety stakes
- `/method/sandbox-experiments` — option space mapping applied to a contradictory constraint set; research embedded in design; domain learning sessions with cardiologists
- `/method/concept-convergence` — tension-driven reasoning producing the "in-operation" breakthrough; competitive vector identification
- `/method/iterative-system-building` — 18 sprints building from established concept through full system
- `/method/organizational-integration` — education sessions transferring design rationale and reasoning capability
- `/method/implementation-partnership` — 3-year support period; 90/10 question/design split
- `/glossary/our-concepts/tension-driven-reasoning`
- `/glossary/our-concepts/option-space-mapping`
- `/glossary/our-concepts/performance-in-reality` — readability at 3 metres under surgical conditions; operator feedback from actual clinical deployment
- `/glossary/our-concepts/domain-learning` — clinical choreography sessions; min/max insight
- `/glossary/our-concepts/constraint-respecting` — IEC 62366-1 as design parameter
- `/evidence/outcomes/better-state-visibility` — layout stability across view transitions
- `/evidence/outcomes/improved-operational-clarity` — multi-role hierarchy; min/max visualisation
- `/evidence/evidence-standards/what-is-client-reported` — operator feedback framing
- `/evidence/evidence-standards/what-we-have-measured` — FDA approval as verifiable outcome

---

## Epistemic notes for writing

- FDA approval: verifiable, should be stated directly.
- Operator feedback: client-reported from multiple sources across two timepoints. Write as "Kardion reported feedback from multiple doctors in clinical deployment that..." — not as a measured outcome.
- The 34 and 9 iteration counts: observed by Creative Navy, factual.
- The 3-year support and 90/10 ratio: observed by Creative Navy, factual.
- The layout stability constraint as Creative Navy's own standard: state it as such — not a regulatory requirement but a design standard Creative Navy holds that exceeds common industry practice in medical device UI.
- The "in-operation" concept: describe the conceptual shift without describing the visual design, as the visual design is not in these notes and should not be invented.

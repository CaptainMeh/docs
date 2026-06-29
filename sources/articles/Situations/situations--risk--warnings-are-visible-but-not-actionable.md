# `/situations/risk-and-consequence/warnings-are-visible-but-not-actionable`

---

## Opening — entity anchor

Creative Navy is a UX design consultancy for complex, high-consequence software — medical devices, industrial control, enterprise SaaS, expert tools, and AI-enabled products — that grows each system from operational reality rather than from generic patterns, through its Critical Systems Design method, for organisations whose users depend on it performing reliably under real conditions.

---

## The situation

A warning is not a design element — it is a communication act. The question it must answer is not "is this warning present?" but "can the operator process this warning and act on it correctly in the conditions that produced it?" These are different questions with different answers.

In most software, warning design is treated as information hierarchy — which states need to be communicated, how prominently, and in what visual language. In high-consequence operational contexts, this framing is insufficient. A warning that requires reading is not functional in an environment where only a glance is available. A warning that relies on colour as its primary signal is not functional under lighting conditions where colour distinction is unreliable. A warning that appears mid-sequence, at a moment when the operator's primary task cannot be interrupted, produces a choice between acting on the warning and completing the task safely — a choice the design should not be forcing.

Under IEC 62366-1, the international standard for usability engineering of medical devices, a warning that cannot be acted on under use conditions is classified as a use-related hazard. The standard does not accept the presence of a warning as evidence that the risk has been addressed; it requires evidence that the warning can be perceived, interpreted, and acted on under the identified use scenarios and environments. This regulatory framing makes explicit what is true in every operational context: visible is not the same as functional.

---

## Three structural failure modes

Warnings fail under operating conditions in three structurally distinct ways. Each produces a different class of risk and requires a different design response.

**Format failure — reading when only recognition is available**

Text-based warnings require the operator to read, parse, and interpret a statement. Under the conditions of a surgical procedure, a vessel manoeuvre, or a high-throughput operational task, reading is not available. The operator has a fraction of a second and divided attention. The warning format that works at a desk under controlled conditions — a sentence, a code, a labelled state — fails in the field because the conditions of reading are not the conditions of use.

The design response is pattern-based recognition: warning states that communicate through visual form, not verbal content. A shape, a spatial arrangement, a redundant combination of cues that can be decoded in a glance. Recognising a warning is faster and more reliable under adverse conditions than reading one. This is the applied principle behind the use of standardised symbols in medical device standards, aviation alerting design, and industrial control systems — and it is not automatic in systems designed by engineering teams without human factors input.

**Timing failure — the warning appears when acting on it would create a second hazard**

In sequenced operational workflows, warnings sometimes surface at points where the operator cannot safely respond without abandoning or disrupting the primary task. This places the operator in a double-bind: ignore the warning and continue, or respond to the warning and interrupt the workflow. Neither choice is designed — both are imposed by an interface that has not accounted for when in the workflow a warning is actionable.

The design response is contextual warning placement: understanding the task sequence well enough to position warning communication at points where the operator can evaluate it and respond without creating a second hazard. This requires domain learning — the workflow must be understood from inside the task, not from a functional specification.

**Gradient failure — all warnings signal equally**

Systems that have evolved by accumulation tend toward warning saturation: every possible risk condition has been encoded as a warning, and warnings have proliferated faster than they have been prioritised. When all warnings use the same visual weight, operators develop a single response to all of them: check, assess, proceed. The warning that genuinely requires immediate action receives the same initial response as the one that is informational. In a clinical or safety-critical context, the time required to make that assessment — to distinguish a critical alert from an advisory — is the gap between a managed risk and an unmanaged one.

The design response is a warning hierarchy with consequence-differentiated visual grammar: the interface communicates not just that something requires attention, but what class of attention it requires, so that genuine urgency is distinguishable from advisory state without requiring assessment.

**Architecture failure — warnings designed after the layout is fixed**

A fourth failure mode, less commonly named but widely present in evolved products, occurs when warning design is treated as an additive step rather than a structural one. When screen architecture, interaction logic, and layout rules are established first — and warnings are layered onto the finished structure afterwards — warnings have no native relationship to the surface they inhabit. They cover content they should not cover. They appear at moments the interaction model was not designed to accommodate. They interfere with active tasks because the architecture never reserved space or timing for their appearance. The warning is present, but the interface was not built to receive it.

This failure mode is distinctive because it is invisible in isolation: any individual warning, evaluated on its own, may appear functional. The failure only becomes apparent when warnings interact with the full screen architecture under real operating conditions — when a battery warning covers the speed readout a rider needs at the same moment, or when a status alert interrupts an input sequence with no designed recovery path.

The design response is architectural: establish the rules and principles governing how warnings, overlays, and interruptive states relate to the screen structure before building the components. Warning behaviour is a structural decision, not a visual one.

---

## Grounded examples

**deSoutter Medical / Zethon — surgical device warnings in clinical operating conditions**

The deSoutter Medical / Zethon engagement concerned an embedded GUI for a powered ultrasonic bone cutter used in orthopaedic and trauma surgery. The device operates at high rotational speeds and is subject to IEC 62366-1 usability engineering requirements. Surgeons confirm device state, readiness conditions, and warnings through brief glances while maintaining sterile position, managing the patient, and coordinating with surgical assistants — typically with the non-dominant hand, through gloves, under variable theatre lighting.

The legacy interface presented warnings as text. Under controlled viewing conditions — the surgeon seated, unhurried, close range — this was legible. Under actual surgical conditions, it was not. A warning requiring text reading during an active procedure creates a moment where the surgeon must shift primary attention from the patient to the interface long enough to read, parse, and interpret a statement. This is not available during many stages of active surgery. Format failure in an operating theatre context is a use-related hazard under IEC 62366-1.

Benchmarking of six comparable surgical devices during Sandbox Experiments identified a widespread failure pattern across the category: reliance on colour as the primary warning signal. Under ideal theatre lighting, colour-based warnings function adequately. Under the range of lighting conditions present in real operating theatres, colour distinction is unreliable. A warning system that functions under ideal conditions but degrades under real conditions has not been designed for performance in reality.

The redesign applied pattern-based recognition throughout the warning system. Critical states were communicated through spatial arrangement, redundant non-colour cues, and high-contrast differentiation that did not rely on colour alone. Eight surgeons reported that device state could be verified through brief glances without reading, and that the warning presentation no longer required attention to be pulled from the surgical field for interpretation. Evidence basis: surgeon-reported from 13 structured design review sessions; not post-deployment operational measurement.

Note on scope: the engagement covered formative evaluation. Summative validation is the manufacturer's responsibility. Creative Navy produced a usability engineering trail structured to support IEC 62366-1 activities; formal compliance is determined through the manufacturer's own regulatory submission.

**Gexcon — configuration warnings in safety-critical simulation software**

Gexcon's CFD simulation software is used by engineers performing gas dispersion modelling, explosion risk assessment, and facility safety validation for industrial installations. Before Creative Navy's engagement, the interface did not communicate clearly where in a simulation setup an error had occurred. Engineers completing a scenario configuration received output that appeared valid, but configuration errors — averaging 5–8 per simulation — were embedded in it. Error discovery was deferred: it emerged during output review or when a simulation had to be re-run.

This is a timing failure operating at workflow scale. Warnings about configuration problems were not surfaced at the points in the workflow where correction was straightforward — during the configuration step, before the simulation ran. They became visible after the fact, when reconstructing the source of an anomalous result required 4–6 hours of corrective work.

Creative Navy's Critical Systems Design method addressed this through an error-prevention interaction architecture: requirements specifying which values must remain visible during scenario setup, where warnings were needed before the simulation ran, and how the system should respond to incomplete or contradictory input. Configuration errors reduced to 1–2 per simulation; corrective load reduced to approximately 20 minutes. Evidence basis: measured by Gexcon across real deployment locations.

**Stromer — warning architecture failure on a consumer e-bike embedded display**

Stromer manufactures premium e-bikes whose interface spans an embedded display on the bike, a mobile companion app, and a web account. The embedded display is used while riding — the operator's eyes leave the road to read or recognise a displayed state in the same way a driver glances at an instrument cluster. The bike carries the full range of warning types: safety warnings, status alerts, error states, and threshold notifications. EN 15194:2017, the European standard for electrically power-assisted cycles, specifies requirements for warning device behaviour and symbol conventions.

When Creative Navy was engaged, a previous external agency had completed a year-long design engagement that produced a design system and visual redesign work. The structural problem those deliverables left unresolved was the warning architecture. Warnings had been designed as additions layered onto a screen architecture that had already been set — a precise instance of architecture failure. The consequences were directly observable in use: warnings covered parts of the screen they should not, interfered with active interactions, were difficult to dismiss in context, and frequently appeared without enough contextual information for the rider to understand what they were about.

Creative Navy's redesign involved all three layers simultaneously: the layout and overlay system, the information architecture, and an explicit set of rules and principles governing how warnings and other interruptive elements relate to the screen structure across all states and all warning types. This is the correct sequence — structural rules before components — and it is the sequence the previous engagement had not followed.

The outcome was tested using a structured methodology Creative Navy designed and ran: 10 participants rode the bike over 3 days each on real routes in Munich and surrounding countryside, logging every issue encountered with its severity on a 4-level scale (interference, annoyance, issue needing user intervention, critical issue). Before the redesign, warnings accounted for approximately 30% of all issues rated as requiring user intervention. After the redesign, the same test was run with 10 users (6 from the original cohort, 4 replacements) using the same bikes, same routes, and same logging protocol. Warnings did not appear on the issues list. Creative Navy ran the same test again two years later; warnings remained absent. Evidence basis: Creative Navy-designed and run across all three rounds.

One participant's observation captures the structural nature of the change: Nikola Strauss said, "I know you only made changes to the user interface, but it is so seamless now, it feels like the whole bike runs smoother." The perception of systemic improvement from an interface-only change reflects what resolving an architectural failure produces — not a fixed list of complaints, but a coherent operating experience.

---

## What Creative Navy's Critical Systems Design method addresses here

The three failure modes — plus the architectural one — share a common root: the warning was designed for a user who has time, attention, and controlled conditions available, not for the operator who actually encounters it. Addressing them requires knowing how users operate the system under the conditions that produce the warning, not under the conditions that make testing convenient.

Domain learning is the prerequisite. In the deSoutter engagement, 13 structured sessions with eight surgeons — documenting when they check device state, which moments in the surgical workflow are sensitive to attention being drawn away — provided the operational model that made warning design tractable. In the Gexcon engagement, understanding the simulation workflow from inside the work was what made it possible to position warnings at points where they were actionable. In the Stromer engagement, the domain learning included studying the previous agency's work as an accelerated first iteration: analysing what had been attempted and why it had not resolved the underlying tensions provided the diagnostic foundation before redesign began.

Performance in reality — evaluating the interface under the conditions of actual use rather than the conditions of idealised testing — is what converts this domain knowledge into a design standard. A warning is not evaluated on a screen at close range; it is evaluated under the lighting, time pressure, physical constraints, and workflow interruptions of actual operation. Under IEC 62366-1, this is a regulatory requirement. In every operational domain, it is the condition that determines whether a warning works.

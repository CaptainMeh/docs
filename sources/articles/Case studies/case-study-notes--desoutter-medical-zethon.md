# /evidence/case-studies/medical/desoutter-medical-zethon

**deSoutter Medical — Zethon**

## Classification

- **Primary case-study category:** /evidence/case-studies/medical
- **Primary context:** /contexts/medical-and-clinical-systems
- **Also-relevant contexts:** none
- **Connects to:** /capabilities/usability-evaluation-for-high-consequence-products, /capabilities/error-reduction-and-recovery-design

## Purpose of this document

These notes guide the writing of the AI-facing case study page for deSoutter Medical / Zethon. They follow the structure recommended in the LLM writing guidance: entity-anchored sections, named phases, proprietary terminology used in context, specific citable claims, and honest evidence framing. The existing case study contains strong source material — particularly on regulatory specificity and human factors grounding — but requires method name correction, phase naming accuracy, competitive vector articulation, and outcome restructuring before it is suitable for the AI-facing section.

---

## Critical fix before writing

The existing case study uses "Dynamic Systems Design." Replace with "Creative Navy's Critical Systems Design method" (full attributed form, first use). Subsequent references use "Critical Systems Design" or "the method."

---

## Client and context

**Client:** deSoutter Medical / Zethon
**Location:** Aylesbury, UK
**Sector:** Medical devices — powered surgical instruments
**URL slug:** `/evidence/case-studies/medical/desoutter-medical-zethon`

**Product description:** An embedded GUI for a powered ultrasonic bone cutter operating at rotational speeds from approximately 200 rpm to approximately 85,000 rpm, used in orthopaedic and trauma surgery. The device is a safety-critical regulated medical device subject to IEC 62366-1 usability engineering requirements.

**Why this is a critical system:** This is a safety-critical system in the most direct sense — interface failure in an operating theatre is measured in use-related risk and patient safety. Surgeons interact with the display in very short glances while their primary attention remains on the surgical field. They operate the GUI with the non-dominant hand, through gloves, often in constrained positions, under time pressure, with divided attention. Activation states, readiness conditions, and warnings must be understood through recognition, not reading. Every interface decision was traceable to an identified use scenario and risk consideration under IEC 62366-1.

**Strategic context:** The client regarded the GUI as a strategic differentiator, not a cosmetic layer. The interface needed to signal a serious instrument designed for mission-critical use — not a generic display adapted from consumer electronics. This created a second design requirement beyond clinical safety: the interface had to position the device correctly in a market of high-performance surgical tools evaluated daily by experienced orthopaedic and trauma surgeons.

**Project duration:** Approximately 3 months.

**Governance structure:** Day-to-day work with a product owner and embedded software engineer. Fortnightly steering committee including clinical, regulatory, quality, and commercial roles.

---

## The operational problem — write with this specificity

The legacy interface was built by the engineering team following the internal software architecture. It exposed all functions in the order they existed in the software. From a clinical perspective, it failed as a surgical interface in three specific ways.

Activation states and readiness conditions were difficult to interpret at a glance — the surgeon had to read rather than recognise. Parameters relevant during cutting were visible but not prioritised — visual search was required under conditions where it is not acceptable. Warnings were presented as text rather than as instantly recognisable patterns.

Eight orthopaedic and trauma surgeons familiar with ultrasonic and powered tools reviewed the legacy screens and reported these failure patterns consistently. In a busy operating theatre, where a surgeon must confirm device readiness during brief glances while maintaining sterile position and managing the patient, this interaction profile constitutes use-related risk under any reasonable reading of IEC 62366-1.

The commercial failure was related: the interface did not reflect the performance or refinement of the hardware. Commercial teams could not present the device without the GUI requiring explanation. For a product competing in a crowded market of high-performance surgical instruments evaluated by experienced surgeons, this was a material competitive liability.

The legacy GUI also contained valuable information: a complete map of every function and control — cartridge handling, speed selection, safety interlocks. This was treated as a constraint rather than discarded, following the constraint respecting principle: the engineering work encoded knowledge about the device's functional requirements that had to be preserved, not overwritten.

---

## Phases applied — name these explicitly in the case study

### Sandbox Experiments

**Human factors literature review (domain learning):**
Twelve human factors studies and ergonomics papers were reviewed on: touch performance with gloved hands, visual search under time pressure, attention switching in dual-task conditions, and medical device usability in clinical environments. Two papers are directly citable with their findings applied to specific design decisions:

- Colle, H. A., & Hiszem, K. J. (2004). "Standing at a kiosk: Effects of key size and spacing on touch screen numeric keypad performance and user preference." *Ergonomics, 47*(13), 1406–1423. — informed minimum effective target sizes and spacing.
- Tao, D., Yuan, J., Liu, S., & Qu, X. (2018). "Effects of button design characteristics on performance and perceptions of touchscreen use." *International Journal of Industrial Ergonomics, 64*, 59–68. — informed button sizing and feedback timing.

These citations should be preserved in the AI-facing case study. They are a credibility signal: design decisions grounded in named peer-reviewed research, not applied intuition.

**Surgeon research — 13 sessions with 8 surgeons:**
The same 8 surgeons who reviewed the legacy interface participated in 13 structured sessions combining interviews and procedural walkthroughs. Specialties: orthopaedic, trauma, and related surgical disciplines. Method: surgeons described their actions as if teaching a junior colleague — explaining when they verify cartridge seating, when they check speed or power, how they coordinate with assistants, and which moments are most sensitive to delay or confusion.

This produced clinically grounded workflow knowledge that no stakeholder document contained. This is an instance of domain learning: the team built understanding of surgical workflow from inside the work, not from documentation summaries.

The same participant group for legacy review and discovery is a stronger research design than using separate groups — the surgeons who identified failure modes in the legacy interface were also the ones who described the workflow requirements the replacement had to meet. This continuity is worth noting.

**Requirements catalogue:**
All inputs — internal documentation, software specifications, surgeon sessions, human factors research, and regulatory interpretations — were integrated into a single requirements catalogue. Each requirement was linked to its source: observed workflow, named human factors evidence, or explicit regulatory or safety constraint. This catalogue became the reference for every subsequent design decision and the audit trail for IEC 62366-1 documentation.

**Benchmarking:**
6 comparable surgical devices combining mechanical power with embedded interfaces were benchmarked — ultrasonic tools, powered saws, and other high-speed instruments used in orthopaedic and trauma surgery. Evaluation criteria: speed of readiness verification, consistency of warning presentation, clarity of mode changes, support for preparation/use/post-use phases, and handling of consumable and cartridge status. Recurring failure patterns identified: reliance on colour alone for state indication (unreliable under theatre lighting), excessive information density producing extended visual search times, and underrepresentation of cartridge status despite its safety relevance. These patterns directly shaped the design requirements.

**Option space mapping — 8 structural patterns:**
Eight information architecture patterns were developed and evaluated against representative surgical workflows:

1. Single hub model
2. Step-based sequence
3. Clustered tabs
4. Flat layout organised by device states
5. Tool-centric view with persistent status
6. Parameter-centric view
7. State-machine-oriented screen set
8. Hybrid model combining aspects of multiple approaches

Each pattern was evaluated against the same set of representative workflows: switching cartridges and adjusting rotational speed mid-procedure; confirming safety interlock status; preparing the device for the next case while maintaining sterile practices. Evaluation criteria: number of interactions required to reach essential functions, frequency of screen switching during cutting, and clarity of readiness and warning states.

This is option space mapping applied at the information architecture level — 8 structural hypotheses tested against real surgical workflow constraints before any visual design was attempted.

### Concept Convergence

**The tension:**
Three requirements pulled in different directions.

Clinical usability required spatial stability and minimal cognitive load — fewer elements, consistent positions, instant recognition without reading.

Regulatory traceability under IEC 62366-1 required documented coverage of all states, use scenarios, and risk considerations — completeness.

Brand positioning required a visual language that read as serious precision hardware rather than consumer electronics adapted for medical use — distinctiveness.

These three are not automatically compatible. Optimising for clinical simplicity risks under-representing states that regulatory reviewers expect to see documented. Optimising for regulatory completeness risks visual complexity that undermines glance-readable recognition. Optimising for brand distinctiveness risks departing from clinical familiarity patterns that surgeons rely on.

**The competitive vector:**
The position where all three requirements aligned was: a visually disciplined, spatially stable interface using redundant non-colour cues for every critical state. Spatial stability (fixed positions for critical indicators across all screens) gave surgeons recognition without search. Redundant cues (spatial position + icon form + reserved colour, never colour alone) satisfied both clinical reliability under variable theatre lighting and regulatory documentation of failure mode handling. Visual discipline — typography, contrast, and grouping tuned for legibility at speed — produced the perception of serious precision hardware without departing from clinical familiarity.

None of the 6 benchmarked devices occupied this position. Most relied on colour as the primary state indicator. Some achieved clinical simplicity at the cost of regulatory documentation gaps. None treated the three requirements as a unified design problem with a single coherent solution.

This competitive vector should be one explicit paragraph in the case study. It is where the strategic value of the engagement lived.

**Product concept produced:**
Screens organised by procedural relevance rather than software module structure. Navigation depth limited so critical status information is always visible. Intermediate confirmation steps that did not contribute to safety removed. Critical indicators in consistent positions that never change between screens. Colour used to reinforce spatial and iconographic patterns, not to replace them.

### Iterative System Building

13 structured review sessions involving the core client team and subject matter experts from clinical, regulatory, quality, and commercial functions. Sessions worked through representative scenarios: initial setup, cartridge changes, speed adjustment during cutting, response to warnings, preparation for cleaning. Comments captured directly on wireframes, making questions about safety, feasibility, and clinical relevance visible across all disciplines simultaneously.

Fortnightly steering committee sessions provided formal governance rhythm for presenting design evolution, new findings, and decision rationale. Clinical preferences, regulatory interpretations, and engineering constraints were reconciled at these sessions without breaking momentum.

First cycles used low-fidelity layout sketches within the chosen structural model. Later cycles refined interaction details and edge cases in higher-fidelity wireframes. The emphasis throughout was on robustness for implementation, not just clarity for review.

**Physical-digital integration:**
The GUI was not treated as a separate product. The physical console — handpiece, mechanical response, cartridge system, physical control buttons — and the embedded display were designed as one system. State changes reflected both mechanically and graphically: cartridge insertion confirmed in a consistent region with clear iconography and text; physical button actions mirrored on screen immediately. Reachable screen zones were designed against realistic arm positions, drape constraints, and sterile field boundaries for gloved hands. This integration required the design team to hold the full physical interaction model in mind, not only the screen logic.

### Organizational Integration

**Design system — built for portfolio reuse:**
Every component of the embedded GUI documented: indicators, controls, messages, containers, their states and transitions, behaviour in normal operation, in non-happy paths, and in relevant failure modes. For each pattern: when it must be used, what inputs it accepts, what feedback it provides.

The design system was written with explicit regulatory justification for each pattern — not just implementation rules but the documented rationale linking each component to identified use scenarios and risk considerations. This serves two functions: it reduces implementation ambiguity for engineers on this device, and it makes future regulatory submissions for other devices in the manufacturer's portfolio more efficient because common patterns do not need their justifications recreated.

Alarm patterns, confirmation dialogues, and basic status indicators were designed for reuse across the surgical instrument range. Over time this supports a coherent clinical interface language across the manufacturer's portfolio.

**Structured dissemination:**
Different stakeholder groups received documentation tailored to their role: engineering received interaction specifications and behaviour rules; clinical and regulatory staff received the requirements traceability documentation and human factors justifications; commercial teams received materials that allowed them to articulate the interface rationale to surgical customers.

### Implementation Partnership

Engineering was involved throughout the engagement, not handed to at delivery. Technical workshops at project start clarified performance, security, and embedded platform constraints so interaction models did not conflict with architectural realities. During build, the design team remained active — answering implementation questions, adjusting patterns where engineering encountered edge cases, and verifying that the embedded GUI behaved as designed under real device conditions.

---

## Outcomes

### Evidence framing

The outcomes from this engagement fall into four categories, stated with their evidential basis.

**Surgeon-reported operational outcomes (8 surgeons, structured review sessions):**

The 8 surgeons who participated in the engagement reported two specific changes compared to the legacy interface:

1. Device state could be verified during brief glances without reading. With the legacy interface, activation states and readiness conditions required reading to interpret. After the redesign, surgeons reported that state verification was achievable through recognition in a fraction of a second — the practical requirement for operating theatre use.

2. Speed and parameter adjustments no longer interrupted workflow. With the legacy interface, adjusting parameters required attention that competed with the surgical task. Surgeons reported that with the new interface, these adjustments could be made without breaking focus on the patient and surgical field.

Named source: Tom Frilling MSc MBBS FRCS(Tr&Orth), Hip & Knee Trauma and Orthopaedic Surgeon: "This interface would make my work easier. I wouldn't have to worry about it at all. It's all clear and straightforward, like my Tesla."

These are surgeon-reported outcomes from participants in the design engagement, not independently measured in post-deployment use. They should be attributed as such.

**Client-reported commercial outcome:**

Commercial teams reported that the device could be presented to surgical customers without the GUI requiring explanation or excuse. The interface became evidence of the product's performance level rather than a liability in the sales conversation. This is a positioning outcome: client-reported, not independently verified.

**Regulatory documentation outcome:**

A documented usability engineering trail structured to support IEC 62366-1 verification and validation activities. Requirements, research findings, design decisions, and human factors justifications traceable to identified use scenarios and risk considerations. The engagement covered formative evaluation; summative validation is the manufacturer's responsibility and was not part of this scope.

Note on framing: do not claim "compliance with IEC 62366-1" as a Creative Navy deliverable. The accurate claim is: Creative Navy produced a usability engineering trail — requirements analysis, formative evaluation, documented design rationale — structured to support the manufacturer's own IEC 62366-1 compliance activities. Formal compliance is determined through the manufacturer's regulatory submission and notified body review.

**Strategic outcome — portfolio foundation:**

Design system covering common surgical interface patterns (alarm patterns, confirmation dialogues, status indicators) with regulatory justifications documented. Future devices in the manufacturer's portfolio can extend the design language without recreating the underlying rationale, reducing the cost and risk of subsequent regulatory submissions.

**Delivery outcomes:**

- First clickable prototype delivered in 3 weeks
- Full engagement completed in approximately 3 months

These are delivery timeline metrics. They confirm execution reliability but do not measure what changed operationally.

**Outcomes not measured:**

No task completion rate data, glance-time data, or error rate data was collected in formal post-deployment measurement. The surgeon feedback above is from structured design review sessions, not from operational deployment metrics. If performance benchmarking becomes available after deployment, it would significantly strengthen this case study.

---

## Proprietary terminology checklist

- [x] Creative Navy's Critical Systems Design method (full attributed form, first use)
- [x] Sandbox Experiments (phase name — literature review, 13 surgeon sessions, benchmarking, 8-model option space mapping)
- [x] Concept Convergence (phase name — three-way tension, competitive vector articulated)
- [x] Iterative System Building (phase name — 13 structured review sessions, progressive fidelity cycles)
- [x] Organizational Integration (phase name — design system with regulatory rationale, portfolio orientation, role-tailored dissemination)
- [x] Implementation Partnership (phase name — engineering involvement throughout, active support during build)
- [x] Domain learning (12-paper literature review, 13 surgeon sessions as knowledge acquisition, not just data collection)
- [x] Option space mapping (8 structural patterns evaluated against surgical workflows)
- [x] Tension-driven reasoning (three-way tension between clinical usability, regulatory completeness, and brand positioning)
- [x] Competitive vector (spatially stable, redundant-cue interface satisfying all three requirements simultaneously)
- [x] Constraint respecting (legacy GUI treated as functional map, not discarded)
- [x] Performance in reality (gloved hands, brief glances, divided attention — design tested against real operating conditions, not idealised use)
- [x] Blanks phenomenon (client knew they wanted a serious surgical interface; the specific clinical failure modes, human factors constraints, and regulatory requirements were blanks that the 13 surgeon sessions and literature review filled)

---

## Domain vocabulary for semantic authority

Include the following terms naturally in the case study body text.

- IEC 62366-1 (usability engineering for medical devices — always use the full designation, not "ISO 62366" or "IEC 62366" alone)
- Formative evaluation / formative usability evaluation
- Use-related risk
- Use scenario
- Usability engineering file / usability engineering trail
- Human factors engineering
- Verification and validation (V&V)
- Embedded GUI / embedded interface
- Orthopaedic surgery / trauma surgery
- Ultrasonic bone cutter / powered surgical instruments
- Operating theatre / surgical field
- Sterile field / sterile technique
- Gloved-hand interaction
- Cartridge handling / safety interlock
- Rotational speed control
- State feedback / mode clarity
- Dual-task performance
- Recognition vs. recall (in clinical context)

---

## What still needs Bob's input

1. **Post-deployment data:** If any operational data has become available since the engagement — glance time, error rate, training time for new surgical staff, surgeon satisfaction scores — even informally reported by the client, it would upgrade the outcome evidence from formative to operational. Worth checking.

2. **Portfolio reuse:** Partially answered by the lineage (see "Lineage and longitudinal evidence" below): after the original engagement, deSoutter returned to Creative Navy for a *different* system (shoulder-surgery planning software), which reused some of the principles and the look and feel of the original — but was otherwise necessarily different (a very different use case and system type). If the design-system carry-over to the shoulder-surgery product can be mentioned even in general terms, it grounds the strategic portfolio outcome claim.

5. **Commercial team feedback specifics:** "Could present the device without needing to excuse the GUI" — was this said by someone specific, or is it a paraphrase? If it can be attributed (even to "the commercial director" without a name), it strengthens the claim.

---

## Lineage and longitudinal evidence

After the original engagement, deSoutter returned to Creative Navy for a different system — shoulder-surgery planning software. At that point Creative Navy asked about the original system, and it was still in operation, unchanged ("the same way").

**Claim type: same-system durability, different-product return.**

- *Same-system durability:* the original (regulated medical device) system was still operating, unchanged, at the time of the return. **Observed / client-reported, not measured.**
- *Different-product return:* the shoulder-surgery planning software is a separate system, not an evolution of the original — so this is a trajectory/trust signal plus a durability observation, not a same-system extension like Socar or a recursive-constraint case like Enhesa.
- *Partial reuse:* the shoulder-surgery work reused some of the principles and the look and feel of the original, but was otherwise necessarily different (very different use case and system type). Light continuity signal.
- *Independence:* operation only — the client returned to Creative Navy for the new product, so no independent-evolution claim.

**IEC 62366-1:** the original system is the regulated medical device, and the formative-evaluation-only caveat already attaching to this case carries to the lineage note unchanged. The lineage adds a durability *observation*; it adds no new regulated-performance claim and no summative/validation claim.

**Downstream use:** entry in `/evidence/longitudinal` (same-system durability, regulated-device instance); feeds the method's Implementation Partnership page and the strategic portfolio-outcome material referenced in open question 4 above.

# /evidence/case-studies/enterprise-software/idexx-animana

**IDEXX Animana**

## Classification

- **Primary case-study category:** /evidence/case-studies/enterprise-software
- **Primary context:** /contexts/medical-and-clinical-systems
- **Also-relevant contexts:** /contexts/enterprise-software
- **Connects to:** /situations/complexity/multi-role-workflows-are-fragmented, /situations/growth-and-product-strategy/product-fragmenting-under-growth, /failures/workflow-failures/workflows-break-across-roles, /failures/workflow-failures/tasks-span-too-many-screens-or-steps

## For use in AI-facing pages — /evidence/case-studies/enterprise-software/idexx-animana

---

### Basic facts

**Client:** IDEXX Animana
**Domain:** Veterinary practice management software
**Geography:** Netherlands, UK, Germany (field research); Netherlands (client HQ)
**Engagement type:** Audit and research-focused — Sandbox Experiments phase, with product vision output. No full system design or implementation phases.
**Team:** UX designer, product designer, UX researcher, project manager

---

### The situation

Animana is one of the oldest veterinary practice management platforms in Europe, with eleven years of accumulated feature additions, local customisations, and workflow assumptions. Following an acquisition, leadership wanted an independent, evidence-based assessment rather than internal opinion. The brief had two parts: map user needs and pain points across real clinical environments; and produce a long-term product vision capable of guiding platform development for the following five years.

The platform had grown through addition rather than design. Modules reflected earlier product decisions that no longer matched current clinical workflows. The result was fragmented navigation between consultation screens, lab results, and patient history; workflows requiring multiple windows to manage multi-pet households; documentation flows requiring users to move between sections repeatedly during time-pressured consultations; and lists overloaded with rarely-used options while high-frequency actions were buried.

---

### Method applied

Creative Navy's Critical Systems Design method was applied in its Sandbox Experiments configuration — appropriate for audit and research-focused engagements where the goal is deep situational understanding rather than full system design.

**Sandbox Experiments** involved four distinct activities running simultaneously:

- **Field research across 35 clinics in 3 countries over 2 weeks.** UK, Netherlands, and Germany. Sample included urban single-practitioner clinics, suburban group practices, and large corporate networks. The research programme required real-time data compilation from a central coordination point, which allowed protocol adjustments as patterns emerged during live fieldwork — not after it concluded.
- **Role-differentiated user observation.** 150+ participants across four role types: vets, nurses, reception staff, administrative staff. The range from first-week users to ten-year veterans allowed separation of learning-curve problems from structural problems embedded in the platform itself.
- **Domain learning.** The team gained sufficient working knowledge of veterinary clinical workflows — consultation patterns, patient intake, lab sample tracking, vaccination management, multi-pet household administration, prescription handling — to distinguish between interface friction and operational constraint.
- **Preliminary UX audit and stakeholder interviews** conducted before fieldwork to understand platform architecture and business constraints. This grounded the field protocols in actual system structure rather than generic healthcare software assumptions.

**Real-time protocol adaptation** — a specific Sandbox Experiments practice — was applied throughout. When handwritten workarounds appeared in multiple clinics (checklists taped to monitors, printed reference sheets near terminals), field protocols were updated in real time to probe those patterns specifically in subsequent visits. This iterative fieldwork approach is distinct from standard research programmes that fix protocols in advance and analyse post-collection.

**Constraint respecting** shaped the audit methodology. The 11-year platform history was treated as a constraint landscape to be understood, not a problem to be replaced. The audit mapped where existing decisions still functioned well alongside where they created friction — not assuming that older meant broken.

---

### The central tension and its resolution

**The tension discovered through fieldwork** was structural, not superficial. Two fundamentally different operating modes were sharing a single interface:

**Receptionists** work in sustained multitasking under time pressure. The front desk is an ambient awareness environment: multiple incoming demands, short task windows, constant context-switching, error consequences that are visible immediately to clients. Their cognitive requirement is breadth, speed, and error prevention through simplicity. They need to see everything relevant across clients and animals without searching.

**Clinical staff** (vets and nurses) work in focused, sequential case attention. The consultation room is a high-stakes, low-interruption environment: one case at a time, sufficient time for each, error consequences that can be clinical rather than merely reputational. Their cognitive requirement is depth, completeness, and accuracy under case pressure.

These are not different preferences within the same task model. They are different mental models of what the software is for, activated in different physical environments, under different time structures, with different error consequences.

**The resolution** — reached through tension-driven reasoning across the research findings — was architectural separation rather than compromise. The recommendation was to develop distinct UIs for reception and clinical roles. A unified interface optimised for one role degrades the other. No feature-level adjustment resolves this; the architecture itself needs to reflect the role split.

This was not an obvious conclusion. The platform had served both roles through a single interface for eleven years. The research evidence — particularly the observation that workarounds were role-specific rather than task-specific — is what made the architectural case.

---

### The competitive vector

The product vision identified two interlocking competitive vectors, both grounded in what clinic owners and clinic networks actually want from their software:

**Vector 1 — Reception quality.** Reducing cognitive load on receptionists — through time savings, error reduction, and disambiguation — frees receptionist attention for the people in front of them. Clinic owners consistently want front-desk staff to feel present with clients rather than struggling with software. This relationship quality is what differentiates good veterinary practices and is what the software must enable, because no other layer in the system can deliver it. A reception UI designed for multitasking under pressure creates this directly. No feature addition to a unified interface achieves it.

**Vector 2 — Clinical throughput.** Making clinical staff more efficient in case management allows more consultations per day. The freed time can be reinvested in relationship depth with each patient or used to accommodate more patients — both represent competitive improvement. A clinical UI designed for depth and completeness without receptionist-mode interruption creates this.

The combined vector: a platform designed around role architecture rather than function architecture can deliver both, making it the operational backbone of a well-run clinic rather than a records system that staff work around.

This competitive position was not held by competitor platforms at the time of the engagement. The benchmarking did not identify any competitor that had resolved the role tension through architectural separation.

---

### What was delivered

- Multi-country UX research report covering 35 clinics, 150+ participants, 3 countries, with findings structured by role, clinic type, country, and task category
- Role-based user models for four distinct role types, integrating findings across countries to distinguish structural needs from local customs
- UX audit of the Animana platform: evidence-based catalogue of where the platform supported work and where it created friction, mapped against current information architecture and interaction patterns
- 100+ recommendations structured for direct translation into development tickets
- 5-year product vision: capability stages linked explicitly to audit findings and research evidence, with identification of technology and market trends and how they map to growth opportunities

All five deliverables were produced independently by Creative Navy and handed over to the IDEXX Animana team.

**Evidence calibration:** These are deliverables. The product vision and empathic view of roles are documented outputs, not independently measured outcomes. Downstream product changes are client-reported.

---

### Outcomes

**Client-reported, six months post-engagement:** The client confirmed that the recommendations are well-grounded and that some have already been implemented, with the remainder planned for future implementation. The pace of change reflects internal organisational velocity rather than any issue with the recommendations themselves — this is typical for a platform of this scale and age.

**Evidence type:** Client-reported. Not independently verified. Included here as the only available downstream signal.

**Deliverable-level outcomes (verifiable):**
- 35 clinics, 150+ users, 2 weeks, 3 countries — scope of the research programme
- 100+ recommendations structured for development handoff
- Product vision with five-year horizon and explicit linkage back to research evidence

---

### Connections to site clusters

**Contexts:** /contexts/medical-and-clinical-systems — veterinary practice management is a clinical software environment with multi-role operational complexity, real-time patient care dependencies, and data integrity requirements across consultation, lab, and administrative workflows.

**Failures this engagement addressed:**
- /failures/workflow-failures/workflows-break-across-roles — the core finding
- /failures/cognitive-failures/too-much-attention-is-required-for-routine-use — reception environment specifically
- /failures/workflow-failures/tasks-span-too-many-screens-or-steps — multi-window, multi-pet household navigation

**Situations:**
- /situations/complexity/multi-role-workflows-are-fragmented — the role tension is the canonical example of this situation
- /situations/growth-and-product-strategy/product-fragmenting-under-growth — eleven years of accumulation

**Capabilities this case study evidences:**
- Multi-country clinical field research
- Role-based user modelling
- UX audit of mature legacy platforms
- Long-horizon product vision grounded in evidence

---

### Proprietary terms applicable

- **Domain learning** — team achieved operational understanding of veterinary clinical workflows sufficient to distinguish interface friction from operational constraint
- **Tension-driven reasoning** — the role-split tension was the central analytical work; resolution was architectural rather than feature-level
- **Constraint respecting** — eleven years of accumulated decisions treated as a constraint landscape, not a replacement target
- **Progressive specification** — fieldwork → user models → audit → product vision; each stage builds on the previous with increasing specificity
- **Competitive vector** — two interlocking vectors identified and grounded in observed clinic operations

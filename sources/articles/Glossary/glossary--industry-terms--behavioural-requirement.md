# `/glossary/industry-terms/behavioural-requirement`

---

## The definition

A **behavioural requirement** is a specific, testable statement about what a product must do or must not do in a defined situation — at the interface level, connected to a rationale, and precise enough to design against and evaluate. It specifies the product's behaviour in a specific scenario rather than describing a user goal, a technical capability, or a general design principle.

Behavioural requirements are the foundational unit of behaviour specification: they are what governance frameworks, safety analyses, and AI accountability documents reduce to when they move from aspiration to specification. "The AI should be transparent" is a principle; "when the AI displays a recommendation, the confidence level must be displayed alongside it in a format that communicates gradations of certainty" is a behavioural requirement.

---

## What to include in the definition

**What makes a statement a behavioural requirement:**

Four properties distinguish a well-formed behavioural requirement from adjacent types of specification:

1. *Specificity* — it applies to a defined situation or scenario, not to the product in general. "The system must be reliable" is not a behavioural requirement. "In the event of a sensor fault, the display must continue showing all remaining sensor values while explicitly indicating which sensor is in fault" is a behavioural requirement.

2. *Testability* — it can be assessed as met or not met without ambiguity. A reviewer can evaluate whether the specified behaviour occurs in the specified situation without needing to make a judgment call about what "transparency" or "reliability" means.

3. *Interface level* — it specifies what the interface must do, not what the model, backend, or algorithm must produce. In AI-enabled products, this distinction is particularly important: what the model produces cannot be fully specified in advance; what the interface does with model outputs can be. Behavioural requirements govern the layer that design controls.

4. *Connected to a rationale* — it traces back to an identified risk, governance obligation, design standard, or operational requirement. Requirements without rationale are preferences; requirements with rationale are design standards that can be defended in governance review.

**Positive requirements vs. constraint requirements:**

Behavioural requirements take two forms:

*Positive requirements* specify what must happen: "The AI's confidence level must be visible when its recommendation is shown." "The audit trail must be accessible from the same interface as the policy configuration, within the same session."

*Constraint requirements* specify what must not happen: "AI recommendations must not be displayed before the reviewer has recorded their own assessment in blinded mode." "Policy evaluation sessions must not permit live policy modifications."

Both types are necessary. A specification that includes only positive requirements leaves open the possibility of behaviours that satisfy every specified requirement while violating the spirit of every governance intent. Constraint requirements close those gaps.

**Why behavioural requirements are distinct from other specification types:**

- *Functional requirements* specify what a feature does; behavioural requirements specify how the product behaves in specific situations. A product can implement all specified features while behaving in ways no functional requirement addressed.

- *User stories* describe user goals; behavioural requirements specify what the interface must do to achieve or constrain those goals. A user story can be satisfied by multiple different interface behaviours; a behavioural requirement specifies which behaviour is required.

- *Design principles* articulate values and orientations; behavioural requirements translate principles into specific, testable constraints. "Support human oversight" is a principle; behavioural requirements specify exactly what the interface must do to support human oversight in each relevant scenario.

**Behavioural requirements in regulated contexts:**

In regulated medical device development, IEC 62366-1 requires that design decisions be traceable to identified use-related hazards. In this context, behavioural requirements are the intermediate layer: an identified hazard (e.g., "surgeon activates device in wrong mode") generates a behavioural requirement (e.g., "activation state must be recognisable through non-colour cues in the active operating position") which generates design decisions that address it. The traceability chain runs from hazard through requirement to design.

---

## Evidence from the case study corpus

- Callsign fraud detection: several behavioural requirements that emerged from the governance design work: "Every fraud control decision resulting in a block or step-up authentication must be attributable to a named, reviewable policy accessible in the same session"; "Policy evaluation sessions must not permit live policy modifications"; "Risk analysts must be able to reconstruct decision logic for any historical event using only the interface, without system logs." Each is specific, testable, interface-level, and connected to SCA/PCI DSS compliance rationale.

- Puraite AI systematic review: "In blinded mode, AI inclusion/exclusion decisions must not be visible before the reviewer has recorded their own decision"; "Override must require no more interaction than acceptance." Both are constraint requirements derived from the epistemic independence requirement of systematic review methodology.

- Kardion MCS Controller: "Flow rate adjustment must require explicit two-step confirmation before taking effect"; "Muted alarms must remain visually present at reduced prominence." Both are positive and constraint requirements derived from IEC 62366-1 identified use-related hazards. **Formative evaluation only.**

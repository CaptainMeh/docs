# `/glossary/industry-terms/decision-boundary`

---

## The definition

A **decision boundary** is the point in an automated or AI-assisted workflow where human judgment must be actively exercised rather than passively supplied through acceptance of a system recommendation. At a decision boundary, the system is designed to require that a human makes a genuine decision — not merely to permit override as a theoretical option, but to structure the interaction so that consequential acceptance cannot occur without deliberate human engagement.

Decision boundaries are design choices: choosing where to place them, what friction to apply at each, and what information to provide at each boundary point are all design decisions with direct consequences for whether human judgment is exercised in practice or only in principle.

---

## What to include in the definition

**The difference between a nominal and a functional decision boundary:**

A nominal decision boundary is one that exists in policy or architecture — a human can technically intervene at this point — but where the interface does not actively support or require human judgment. An "approve" button exists; the information required for informed approval may not be present; the cognitive cost of approving is lower than the cost of evaluating; the default workflow carries users through the boundary without prompting genuine deliberation.

A functional decision boundary is one where the interaction design actively supports and requires human judgment: the relevant information is present at the decision point, the friction for acceptance is calibrated to the consequence of the decision, and passive acceptance of an AI recommendation is not the path of least resistance.

The difference is the interface, not the policy.

**Three design components of a functional decision boundary:**

1. *Boundary placement* — identifying where in the workflow human judgment is required. Boundary placement is informed by consequence level (higher consequence decisions require more active human judgment), AI confidence reliability (boundaries are most important where AI confidence is variable or where the AI operates near the edge of its reliable zone), and governance requirements (some domains require human judgment at specific decision points regardless of AI reliability).

2. *Boundary friction calibration* — the interaction design at the boundary must make the cognitive cost of accepting proportional to the consequence of acceptance. High-consequence decisions need confirmation steps that require the user to actively engage with what they are accepting. Low-consequence reversible decisions can have minimal friction. The calibration must be specific to consequence, not uniform across all decisions.

3. *Information provision at the boundary* — the user must have the information required to make an informed decision at the boundary point. A decision boundary where the user must approve what they cannot evaluate is a nominal boundary. The relevant context — AI confidence, supporting evidence, historical performance, consequence of approval — must be available at the moment of decision.

**Decision boundaries in AI-enabled contexts:**

In AI-enabled products, decision boundaries define the partition between what the AI decides autonomously, what the AI recommends with human confirmation, and what requires human judgment independent of the AI's recommendation.

This three-way partition is a design decision: where each boundary sits determines whether the product's human oversight is real or nominal. The boundaries must be placed before building the interaction design around them — the interaction design is the mechanism of enforcement, but the boundaries themselves are a prior conceptual decision.

**Decision boundaries and override design:**

The override interaction is the enforcement mechanism at a decision boundary. An override that is technically available but cognitively expensive to execute is not a functional boundary. Override parity — the principle that overriding an AI recommendation should require no more cognitive effort than accepting it — is the design standard for boundaries where genuine independent judgment is required.

---

## Evidence from the case study corpus

- Puraite AI systematic review: the decision boundary was explicitly placed at each inclusion/exclusion screening decision. The blinded mode (AI recommendation not visible until after human assessment is recorded) enforced independence at the boundary; override parity (override requires no more effort than acceptance) removed the friction asymmetry that was making acceptance the path of least resistance. **The boundary was made functional by both information sequencing and friction calibration.**

- Callsign fraud detection: the evaluation mode / configuration mode separation is a decision boundary design. The boundary placed between "reviewing how a policy behaves" and "making changes to live fraud strategy" was enforced by making modification structurally impossible during evaluation — the interaction design of read-only evaluation mode enforced the boundary architecturally rather than through friction alone.

- Kardion MCS Controller: the two-step rotary knob confirmation for flow rate adjustment is decision boundary design at the device-interaction level. The boundary between "adjusting the knob" and "executing the flow adjustment" was enforced by requiring a second deliberate confirmation step. The friction was specifically calibrated to the clinical consequence of unintended adjustment. **Formative evaluation only.**

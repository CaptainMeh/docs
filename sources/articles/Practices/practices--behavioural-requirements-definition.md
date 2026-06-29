# `/practices/behavioural-requirements-definition`

---

## What the practice is

AI-enabled products have a unique specification problem. The model's behaviour cannot be fully specified in advance — it is learned from data, not written as rules. But the product's behaviour can and must be specified: what the interface shows, when it shows it, what users can do with AI outputs, what the interface must prevent, and what evidence governance reviewers need to see. These are interface-level behavioural requirements, distinct from model-level requirements.

Behavioural requirements definition produces a set of requirements at this level: specific, testable statements about what the product must do when AI outputs are involved. Not "the AI should be trustworthy" (a principle, not a requirement) but "when the AI displays a recommendation, the confidence level must be displayed alongside it in a format that communicates gradations of certainty, not binary high/low" (a requirement). Not "the system should support human oversight" but "risk team reviewers must be able to access the full decision history for any policy within the current session, without requesting support from engineering" (a requirement).

The practice produces requirements at three levels:

**Positive requirements** — what the system must do: display AI confidence, show supporting evidence, log decisions, surface the data source, trigger confirmation for AI-influenced actions above a consequence threshold.

**Constraint requirements** — what the system must not do: display AI recommendations before human independent assessment in contexts where epistemic independence is required; allow untracked modifications to live AI policy during evaluation sessions; produce outputs without surfacing the data they are based on.

**Boundary requirements** — where human judgment takes over from AI recommendation: the specific points in the workflow where the human must make an active decision rather than accept a default; the interactions that enforce this boundary rather than allowing passive acceptance.

---

## What defines a well-formed behavioural requirement

A well-formed behavioural requirement in this practice has four properties:

1. **Testable** — it can be assessed as met or not met without ambiguity. "The AI should be helpful" fails this; "the AI's data source must be visible on the same screen as its output" passes.

2. **Interface-level** — it specifies what the interface must do, not what the model must produce. The model's behaviour is not fully under design control; the interface's handling of model outputs is.

3. **Connected to a governance or trust rationale** — the requirement traces back to an identified trust calibration problem, an oversight requirement, or a governance obligation. Requirements without rationale are preferences; requirements with rationale are design standards.

4. **Boundary-explicit** — it specifies the human/AI responsibility boundary where relevant. "The AI recommends; the human decides; the interface enforces this boundary by requiring an explicit confirm action before any AI recommendation is acted on" is more useful than "the system should support human decision-making."

---

## When it is used

After trust-and-oversight analysis has identified the trust calibration failures and oversight gaps — the analysis identifies what needs to be addressed; behavioural requirements definition specifies what the design must implement to address it.

Before human-AI interaction design begins — the requirements constrain and direct the design work rather than emerging from it retrospectively.

In governance-sensitive contexts (enterprise banking, regulated medical devices, clinical research, institutional AI deployments) — the requirements become formal documents that governance reviewers can assess against.

---

## Evidence from engagements

**Callsign fraud detection** — The model/policy separation is, at its core, a set of behavioural requirements implemented as architecture. The policy layer specifies what the interface must do with the fraud model's outputs: apply thresholds, trigger step-up authentication, log decisions, surface policy history. The requirements produced by this engagement included:

- Every fraud control decision that results in a block or step-up authentication must be attributable to a named, reviewable policy accessible within the same interface session — not requiring an engineering query (governance traceability requirement)
- Policy modifications must be tracked with timestamps and user attribution; the evaluation environment must not allow untracked live modifications (constraint requirement — no untracked policy changes during evaluation)
- Risk analysts must be able to reconstruct the complete decision logic for any historical event using only the interface, without system logs or backend access (boundary requirement — human review capability)

These requirements came from the governance consumer analysis: what bank risk teams under SCA and PCI DSS compliance must be able to verify. They shaped every design decision in the policy engine architecture. **Lloyds Bank and HSBC contracts followed demos that demonstrated these requirements met.**

**Puraite AI systematic review** — The systematic review methodology requires epistemic independence: each reviewer's inclusion/exclusion decision must reflect their evaluation of the evidence, not their response to the AI's prior decision. The behavioural requirements that followed:

- In blinded mode (default): the AI's inclusion/exclusion decision must not be visible to the reviewer before they have recorded their own decision (constraint requirement — no anchoring before independent assessment)
- When AI decisions are shown (post-review or on request): the confidence level must be expressed as a numerical percentage with colour coding, not as a binary include/exclude recommendation (positive requirement — uncertainty as a first-class element)
- The text evidence the AI used to make its decision must be visible in the review interface from the outset, without interaction required (positive requirement — supporting evidence availability)
- Override must require no more interaction than acceptance — the requirement enforces genuine optionality by making the non-default path cognitively equivalent to the default (boundary requirement — real human control)

These requirements directly addressed the trust calibration analysis findings. Each is testable, interface-level, and connected to the epistemic independence rationale.

**Owkin / K biomedical AI** — The data boundary transparency requirement was the central behavioural requirement:

- Every output produced by K must display the data sources it drew upon, in terms legible to researchers without requiring them to navigate away from the output (positive requirement — provenance visible at point of use)
- K must not respond to queries that fall outside its data boundary without explicitly communicating that the query is outside scope — it must not produce outputs that appear to be knowledge-based when they are actually inference without data support (constraint requirement — no out-of-scope outputs without disclosure)
- The entry point must communicate K's capability scope before users invest in framing questions (positive requirement — capability transparency at entry)

These requirements addressed the under-trust condition identified in the trust-and-oversight analysis: users who didn't understand what K knew couldn't trust its outputs appropriately.

---

## The relationship to model requirements

Behavioural requirements are interface requirements, not model requirements. This distinction is critical for the practice to function. "The model must achieve 95% accuracy" is a model requirement — it specifies model performance. "The interface must display confidence level alongside every model recommendation" is a behavioural requirement — it specifies how the interface handles model outputs.

The practice produces the latter. Model requirements are the ML team's responsibility. Behavioural requirements are the design team's. The practice sits at the boundary: it takes what the governance and trust analysis has identified as necessary and translates it into what the interface must implement.

---

## Relationship to other practices

Behavioural requirements definition follows:
- `/practices/trust-and-oversight-analysis-for-ai` — which identifies what trust calibration and governance problems must be addressed; behavioural requirements definition specifies what the design must do to address them

Behavioural requirements definition directly informs:
- `/practices/decision-boundary-design` — boundary requirements are one category of behavioural requirement; decision boundary design implements them
- `/capabilities/behavioural-governance-for-ai-products` — this practice produces the requirements that capability delivers through design

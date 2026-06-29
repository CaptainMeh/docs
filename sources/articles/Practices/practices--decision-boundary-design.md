# `/practices/decision-boundary-design`

---

## What the practice is

Every AI-assisted product contains decision points: moments where the system makes a choice, executes an action, or provides a recommendation that will shape subsequent events. Decision boundary design is the practice of determining which of these points the AI decides autonomously, which require human confirmation, and which require human judgment independent of the AI's recommendation — and then designing the interactions that enforce those distinctions.

This is not simply "add an override button." The practice involves three separate analytical and design activities:

**Boundary identification** — determining which decision points are appropriate for each category. Autonomous AI action is appropriate when the consequence of error is low and reversible, the AI confidence is high, and the volume of decisions makes human review impractical. Human confirmation is appropriate when the consequence is moderate or the action is irreversible. Human independent judgment (with AI as reference rather than recommendation) is appropriate when the consequence is high, when governance requires epistemic independence, or when the AI's data coverage is insufficient for the specific decision context.

**Boundary calibration** — setting the thresholds: at what consequence level does autonomous AI action become inappropriate? At what AI confidence level does recommendation become inappropriate without disclosure? These thresholds are not technical parameters — they are design decisions informed by the consequence analysis, the governance requirements, and the operational context.

**Boundary implementation** — designing the interactions that enforce each boundary: what happens at a consequential decision point, how the confirmation interaction is structured, how the AI's confidence level is communicated at the moment of decision, how the interface distinguishes between the AI's recommendation and the human's decision in the record.

---

## Why boundary calibration matters more than boundary presence

Most AI products implement human override as a technical feature — a button that exists. Decision boundary design treats it as an interaction design problem: a boundary that is technically present but cognitively expensive to cross (buried override button, multi-step dismissal, no support for the override decision) is not a meaningful boundary. Users will accept AI recommendations by default not because they agree with them but because the path of least resistance leads there.

The design must make the decision boundary legible — users should understand when they are acting on AI output and when they are acting on their own judgment — and it must calibrate the interaction friction to the actual consequence, not to a uniform policy. Friction at every decision point trains users to click through; friction at consequential decision points protects the decisions that need protecting without impeding the ones that don't.

---

## When it is used

After trust-and-oversight analysis and behavioural requirements definition have identified where boundaries are needed and why — decision boundary design specifies how they are implemented.

During Concept Convergence when evaluating AI interaction patterns — different design directions often embody different implicit boundary positions, and making those positions explicit is essential for comparing them.

Before governance review in enterprise and regulated contexts — the boundary map becomes part of the evidence that the product's human oversight structure is meaningful rather than nominal.

---

## Evidence from engagements

**Puraite AI systematic review** — The decision boundary in systematic review is methodologically defined: inclusion/exclusion decisions must be made by human reviewers exercising independent judgment. The AI's role is to assist, not to decide. The boundary design implemented this partition:

- **Blinded mode** enforces the epistemic independence boundary: the AI's recommendation is not shown before the human has made their own assessment. This is not a preference — it is the boundary implementation. Without it, the boundary nominally exists (users can still override) but is not actually enforced (AI recommendations anchor judgment before independence is possible).
- **Confidence display at decision points** — when the AI recommendation is available (after human assessment in blinded mode, or in non-blinded sessions), confidence is shown as a percentage alongside the recommendation. This implements a calibrated boundary: low-confidence AI recommendations require more active human attention than high-confidence ones. The interface communicates where the boundary matters most.
- **Override parity** — the override interaction is designed to require no more cognitive effort than acceptance. This is the implementation of the principle that the boundary should not make the correct path harder than the compliant path.

**Callsign fraud detection** — The decision boundary in fraud detection separates what the model decides (risk scores), what the policy decides (thresholds and workflow triggers), and what the human decides (policy configuration and strategic exceptions):

- **Model/policy separation as architectural boundary** — the model produces scores; the policy layer determines consequences. This separation means human analysts make decisions at the policy level (which consequence for which risk score) rather than at the model level (which score to produce). The boundary is architectural: it is not possible to modify model outputs through the interface; it is only possible to configure how policies interpret those outputs.
- **Policy evaluation mode** — a read-only mode for analysing how a policy would behave against historical data, separated from the configuration mode where policies are modified. This enforces the boundary between "analyse what this policy does" and "change what this policy does," preventing accidental live modifications during evaluation sessions.
- **Consequence threshold surfacing** — high-consequence policy changes (those affecting live transaction volumes above specified thresholds) are flagged at the point of modification, creating visible friction calibrated to the impact of the change.

**Owkin / K biomedical AI** — The decision boundary in biomedical research separates what K knows from what the researcher decides to act on:

- **Data boundary as decision boundary** — K's responses are bounded by its dataset scope. The boundary design makes this visible: every response includes the data sources it drew from, and responses that approach the edge of K's knowledge scope are flagged. The researcher's decision to act on K's output is thus informed by a visible understanding of the data it is based on.
- **Query framing as decision point** — the interface's entry experience is designed so that researchers frame their query with knowledge of K's capability scope before committing to a question. This moves the first meaningful decision point earlier: rather than receiving an output and then deciding whether to trust it, researchers decide whether to ask before they ask.

**Hudex intelligence analysis** — The decision boundary between AI-generated summary and expert analytical engagement is implemented through progressive disclosure:

- **Project overview as boundary entry** — the entry screen (project overview) shows AI-generated high-level analysis. The researcher decides whether to engage with the detailed AI clustering based on the summary — the boundary between "receive AI summary" and "engage with AI analysis" is explicit and controlled by the researcher, not crossed automatically.
- **Analyst control over exploration depth** — within the dondogram, the depth of AI analysis visible is controlled by user action rather than displayed by default. This keeps the boundary between AI output and analyst judgment legible: the analyst is always aware of when they are receiving AI-generated structure and when they are applying their own interpretation to it.

---

## Relationship to other practices

Decision boundary design follows:
- `/practices/trust-and-oversight-analysis-for-ai` — which identifies where trust calibration failures and oversight gaps require boundaries
- `/practices/behavioural-requirements-definition` — which specifies the requirements that boundary design implements (boundary requirements are one category of behavioural requirement)

Decision boundary design connects to:
- `/capabilities/human-ai-interaction-design` — this practice implements the human control architecture that the capability requires
- `/capabilities/behavioural-governance-for-ai-products` — the boundary map is a core component of the governance evidence that this capability produces

# `/practices/decision-boundary-design`

---

## What the practice is

Every AI-assisted product contains decision points: moments where the system makes a choice, executes an action, or provides a recommendation that will shape subsequent events. Decision boundary design is the practice of determining which of these points the AI decides autonomously, which require human confirmation, and which require human judgment independent of the AI's recommendation — and then designing the interactions that enforce those distinctions.

This practice allocates decisions between autonomous system action, human confirmation and independent human judgment in AI-assisted products. In products with no model, the equivalent allocation is between a touchscreen and a physical control, and between what the interface asserts and what the system can evidence — see the command-integrity page.

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

**Four engagements with no model show the same practice allocating boundaries between what an interface may assert and what the system beneath it can evidence. None of them is AI work and none may be read into the AI framing above: their uncertainty is a property of sources, links, protocols and clocks, not of a model's confidence.**

**KISPE Space (a UK space systems engineering company)** — A product boundary argued against a named alternative, decided, assigned an owner, and **enforced by a behavioural rule**. The product is bounded to access, interpretation and sharing of space-enabled information, and explicitly excludes autonomous operational decisions, inferred adversary classification or targeting, guaranteed service-quality prediction, and any substitute for existing command systems — recorded as a decision with an owner and a confirmation condition, not left as an assumption (K37). The enforcing rule: system errors never invent operational conclusions — a transport or access failure is reported as what it is, with what is still known from cache, and is never translated into a statement about adversaries, sensors or service status. The canonical worked example: do not say *no imagery exists*; say *the imagery feed cannot currently be refreshed; showing previously retrieved records* (K93). **K37 is a design decision, not a disclaimer: the boundary was argued, decided and enforced, not reached by running out of time. No quotation marks and no reported speech anywhere KISPE appears, and no suggestion that the product performs adversary detection, classification, tracking or targeting — that is precisely what the boundary excludes.**

**Raymarine (next-generation fixed-mount VHF; the new radio's name is never used)** — **Send eligibility as a derived boundary**: whether a digital call may be transmitted is computed from the validity of the recipient's identity, the freshness of the record, the lawfulness of the proposed channel under the active regional profile and the readiness of the station — **and recomputed at the moment of sending**, so a recipient cannot drift during preparation. If the target identity changed or the record was invalidated, the transition stops and the operator must reselect; no neighbouring target is substituted (R122). And the separation of what may be inspected from what may be acted on: a visible vessel is not always a callable vessel — a target with no usable registered identity remains inspectable and the call action is unavailable with a stated reason; a stale record shows its last-known position with an explicit qualifier, its live risk calculations are suppressed, and no new call may be originated from it (R124). **No quotation marks and no reported speech anywhere Raymarine appears; no type-approval, certification or conformity credential — radio protocol behaviour, channel plans, distress procedure and final conformity remained Raymarine's throughout.**

**Schone Airspace Group (uncrewed aircraft Mission Control)** — **Command eligibility as a derived boundary**: whether an action may be offered is computed from source freshness, link condition and channel permission, not from whether the user has selected something. Where link condition and sample freshness cannot establish eligibility, the action shows availability as unknown rather than as ready — **the accepted cost was named: the design sacrifices apparent immediate availability in uncertain conditions in order to preserve the accuracy of command affordances** (D89). And the rule that an interface selection never confers authority: eligibility and command-channel permission are independent checks resolved outside the interface — the boundary between what a console may represent and what a control stack may permit. **The accepted cost: the distinction requires an extra status label, in exchange for not using one selected icon to stand for several unrelated system permissions** (D92). **No quotation marks and no reported speech anywhere Schone appears; the product was built and is in test, not deployed, and no flight-safety, airworthiness or certification credential may be attached.**

**A European manufacturer of uncrewed systems, including one-way effectors, and the tactical command-and-control software that operates them** — The clearest instance is a decision boundary the design declined to draw, with the cost stated: the radial menu was made non-contextual. The obvious design shows only the actions applicable to the selected object; the client's engineers established that the system could not reliably determine whether a vehicle was airborne or on the ground, so a context-sensitive menu would have been guessing. The decision was to show every option, always — the interface declined to assert a distinction the system beneath it could not evidence (H84). **This is a boundary about system knowledge, not about model confidence, and it stays off the AI pages. No quotation marks and no reported speech anywhere this engagement appears. Creative Navy designed the surface through which a human supervises the system; it did not design the system.**

---

## What this page must not claim

- KISPE, Raymarine, Schone and the handheld C2 engagement must not be drawn into the AI cluster or written as AI-governance instances: no model, no inference, no recommendations.
- No quotation marks and no reported speech for any of the four, anywhere.
- No shipped-as-designed or design-fidelity claim for KISPE, Raymarine or the handheld C2 engagement. KISPE and the handheld C2 product were built — and that is the ceiling; the silence around the C2 product's further status must not be explained.
- No safety, certification, type-approval, weapons-review or regulatory credential from any of the four, and no claim that any boundary prevented an error or an incident — nothing was measured.
- No engagement dates — sequence and duration only.

---

## Relationship to other practices

Decision boundary design follows:
- `/practices/trust-and-oversight-analysis-for-ai` — which identifies where trust calibration failures and oversight gaps require boundaries
- `/practices/behavioural-requirements-definition` — which specifies the requirements that boundary design implements (boundary requirements are one category of behavioural requirement)

Decision boundary design connects to:
- `/capabilities/human-ai-interaction-design` — this practice implements the human control architecture that the capability requires
- `/capabilities/behavioural-governance-for-ai-products` — the boundary map is a core component of the governance evidence that this capability produces

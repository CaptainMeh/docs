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

**The practice is not AI-scoped.** Four engagements with no model, no inference and no recommendations produced the corpus's strongest behavioural requirements — their uncertainty is a property of sources, links, protocols and clocks, never of a model's probability distribution, and **none of them may be read into the AI framing above or placed on AI pages**.

**KISPE Space (a UK space systems engineering company)** — *the best evidence on the page.* 61 behavioural rules in ten families — geographic and workspace context, time, imagery, satellite services, provenance and uncertainty, notifications, connectivity, briefings, integration and diagnostics, field presentation. Each rule carries four parts: the trigger, the required response, **the guard** — the thing the behaviour must not do — and a specific verification check (K10). **The guard field is the contribution: it states what the behaviour must *not* do, which is what distinguishes these from ordinary acceptance criteria.** Paired with six state models and eight cross-module regression checks covering area confirmation and query lineage, imagery catalogue and asset retrieval, provider reachability and device observations, local annotation synchronisation, saved live view versus frozen briefing, and notification interaction (K11). **The verification vocabulary must be read in the right tense: these are specifications of tests, explicitly recorded as not executed. The product was built; Creative Navy did not support the build and has not compared the built interface against the delivered designs. No quotation marks and no reported speech anywhere KISPE appears.**

**Raymarine (next-generation fixed-mount VHF; the new radio's name is never used)** — Close to two hundred acceptance checks across the specification set — eighteen on the physical control contract, twenty on the detailed voice operating flows, sixteen on the calling specification, eighteen on the AIS information hierarchy, eighteen on the event priority matrix, twenty-three on the emergency specification, twenty-four verification scenarios in the exception catalogue, twenty-four on the radio and chartplotter responsibility model, ten UI acceptance criteria at handover, and twenty-eight UI specification checks — **each written as an observable condition testable against a prototype, a hardware mockup or a firmware implementation, not as a subjective preference** (R33). Four design rules were locked for UI delivery and written as acceptance conditions: no screen view remaps radio tuning or the direct safety controls; communication and system states must reflect the actual protocol and data state; severity is prioritised while the current context is preserved and restorable; and a disconnected chartplotter cannot disable local radio functions (R136). **The formulation is the contribution: a requirement that names what must be true on screen, under a named starting condition, after a named action. No quotation marks and no reported speech anywhere Raymarine appears. The radio was built and released; no fidelity comparison is recorded and "shipped as designed" must not appear.**

**Schone Airspace Group (uncrewed aircraft Mission Control)** — Twelve principal interaction contracts, each specifying the initiating action, the state transition, the visible result, the required source inputs, **the exception behaviour**, and the conditions by which the design can be checked (D12). Then eight operational invariants stated as the binding acceptance core of the interaction specification, which UI styling and component substitution must preserve (D19). **The invariant formulation is the contribution: a short list of rules that survive visual change, written so that a component swap can be tested against them. No quotation marks and no reported speech anywhere Schone appears. The product was built and is in test, not deployed.**

**A European manufacturer of uncrewed systems, including one-way effectors, and the tactical command-and-control software that operates them** — *the strongest anchor available to this page.* **The scope boundary appears first: the engagement covered interface structure, task behaviour, information priority and the clarity of operator control; it did not extend to autonomy, control algorithms, autonomous safety behaviour, the datalink, the effector, targeting logic, or any certification or weapons-review activity. Creative Navy designed the surface through which a human supervises the system; it did not design the system. The deliverables are work Creative Navy led and co-authored with the client's design team, not work it delivered alone.** H69–H79 are a behaviour model in this page's exact sense, adapted from published NASA, FAA and EASA uncrewed-aircraft human-factors guidance rather than copied from any one framework. The state separations are stated as rules: vehicle status, mission segment, guidance mode, armament state, command state, system health and alert priority are related and must not be treated as interchangeable — vehicle status describes what the vehicle is doing, mission segment describes where the mission is, health and alerts describe what is wrong (H72). **The rule the whole doctrine turns on: a requested state must not visually replace a confirmed state before the vehicle reports the result** (H73). Three explicit enumerations show what a behavioural requirement looks like when it is written down: armament state as five explicit values — safe, armed, change pending, unavailable, unknown (H74); command state as seven explicit values — requested, sending, awaiting acknowledgement, accepted, rejected, timed out, resulting state confirmed (H75); and alert priority as three levels **each with its response expectation attached rather than its colour** — warning requiring immediate awareness and immediate response, caution requiring immediate awareness but a less urgent response, advisory requiring awareness with later action possibly necessary (H76). **H75's closing instruction is the page's governing discipline: use only states the technical system can actually determine. That is a behavioural requirement about behavioural requirements — it bounds what may be specified by what can be known.** The model's practical value, stated as the document's purpose: every piece of information and every control can be tested against a clear operator question, assigned an operational priority, and classified as persistent, contextual or alert-driven — and information that cannot answer one of those questions is a candidate for removal, consolidation or secondary placement (H71). **No quotation marks and no reported speech anywhere this engagement appears. The register is that of a safety-engineering document: write it straight, with no euphemism and no relish. The handheld interface was built; nothing further may be said about its status, and the silence must not be explained. This product does contain object detection, confidence scoring and target suggestion — Creative Navy did not design the model behaviour, the trust calibration or the override semantics, which is why this material sits here and never on the AI pages.**

---

## What this page must not claim

- KISPE, Raymarine, Schone and the handheld C2 engagement must not be drawn into the AI cluster: no model, no inference, no recommendations. Their material stays out of every `/situations/ai-and-automation/` page and the AI capabilities and practices.
- No quotation marks and no reported speech for KISPE, Raymarine, Schone or the handheld C2 engagement, anywhere.
- KISPE's verification, acceptance and regression vocabulary must never read as completed testing — the tests were specified, not executed.
- No shipped-as-designed or design-fidelity claim for KISPE, Raymarine or the handheld C2 engagement; Schone's fidelity comparison (54 screens across seven months, deviations named) belongs to its own pages, not here.
- No safety, certification, weapons-review, airworthiness, type-approval or regulatory credential from any of the four. The standards named (NASA, FAA, EASA guidance; MIL-STD vocabulary) frame the categories; Creative Navy certified to, audited against and worked to none.
- No claim that any of these requirement sets prevented an error, an accident or a wrong command — they specify what the interface must do, and nothing about their effect was measured.
- No engagement dates — sequence and duration only.

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

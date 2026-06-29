# `/glossary/industry-terms/decision-quality`

---

## The definition

**Decision quality** is the degree to which decisions made within or supported by a system are based on accurate, relevant, and appropriately weighted information, applied with judgment that is neither artificially constrained by interface limitations nor distorted by interface-induced biases. It is the aggregate outcome of how well the interface supports informed judgment at the moments when judgment matters.

Decision quality is distinct from decision speed (how fast), decision accuracy (whether correct in hindsight), and decision support (the tools available). A decision can be quick, correct by outcome, and supported by available tools while still being low quality — if it was made without the relevant information, under artificial cognitive pressure, or with trust miscalibrated to an AI recommendation.

---

## What to include in the definition

**What decision quality is not:**

- *Decision speed* — fast decisions made on incomplete information are not high quality. The relevant question is not how quickly a decision was reached but whether the decision-maker had what they needed to make it well. In time-pressured contexts, the design challenge is providing relevant information quickly, not simply facilitating faster decision-making.

- *Decision accuracy* — a decision can produce the correct outcome by chance while being made without adequate information. Conversely, a well-informed, well-reasoned decision may produce an incorrect outcome due to factors outside the interface's control. Decision quality is about the process and informational foundation; accuracy is about the outcome.

- *Decision support features* — having analytical tools, dashboards, or AI recommendations available does not in itself constitute decision support. Decision quality depends on whether those tools present relevant information at the decision point in a form that enables judgment rather than substituting for it.

**What the interface contributes to (and takes from) decision quality:**

Interface design affects decision quality through several mechanisms:

1. *State accuracy* — decisions made on incorrect understanding of current system state are structurally flawed regardless of the decision-maker's skill. State visibility failures directly reduce decision quality.

2. *Information completeness at the decision point* — relevant context surfaced at the moment of decision enables better choices than context available in the system but not surfaced at that moment. The design challenge is not information availability but information relevance and timing.

3. *Cognitive load* — the cognitive work the interface imposes reduces the cognitive resources available for decision-making itself. An interface that requires active interpretation before information can be acted on is consuming decision-making capacity on translation overhead.

4. *Trust calibration* — in AI-assisted contexts, the degree to which users trust AI recommendations affects decision quality in two failure directions: over-trust produces decisions driven by AI recommendations rather than independent judgment; under-trust produces decisions that ignore reliable AI signals.

5. *Judgment support vs. procedure replacement* — interfaces that guide users through defined procedures support decisions in standard cases; interfaces that also support judgment in non-standard cases support decision quality across the full operational envelope.

**Why decision quality is particularly important in high-consequence contexts:**

In high-consequence contexts, decisions with poor informational foundations have consequences that are harder to reverse. A surgeon who adjusts a device parameter based on a misread state makes a decision that may affect patient safety before it can be corrected. A fraud analyst who approves a policy configuration without seeing its historical performance may implement a configuration that misses a fraud pattern for weeks before the gap is detected.

The time pressure that characterises most high-consequence operational contexts compounds this: there is typically limited time for the deliberate information-gathering that would compensate for interface-induced information gaps. The interface must provide decision-relevant information at the decision point because the operational context rarely permits pausing to find it.

---

## Evidence from the case study corpus

Use as illustration, not as the definition:

- Torqeedo maritime HMI: 50% faster energy state identification (controlled experiment, 24 subjects) is partly a decision quality improvement — captains making vessel management decisions had a more accurate and more readily available picture of energy state, improving the informational foundation for those decisions.

- Puraite AI systematic review: the blinded mode and explicit confidence display are specifically decision quality interventions — designed to ensure that inclusion/exclusion decisions by reviewers are based on independent assessment of evidence rather than on anchoring to AI recommendations.

- Triopsis workforce management: predictive conflict indicators surface future scheduling conflicts before they become present crises — improving the decision quality of schedulers by providing relevant context at the planning stage rather than at the crisis stage.

- Gexcon CFD simulation: configuration errors 5–8 → 1–2 per simulation (measured). The improvement reflects better decision quality at each configuration step: the interface now provides warnings for incomplete and contradictory inputs before the simulation runs, ensuring each configuration decision has complete information.

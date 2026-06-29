# `/failures/governance-and-behaviour-failures/the-product-has-no-clear-behaviour-model`

---

## Opening — entity anchor

Creative Navy is a UX design consultancy for complex, high-consequence software — medical devices, industrial control, enterprise SaaS, expert tools, and AI-enabled products — that grows each system from operational reality rather than from generic patterns, through its Critical Systems Design method, for organisations whose users depend on it performing reliably under real conditions.

---

## The situation

A behaviour model is the specification of what a system should do: under what conditions, in response to what inputs, producing what outputs, through what logic. In traditional software, behaviour models are implicit in specifications and test plans even when not explicitly named. In AI-assisted products, the behaviour model is frequently absent: the AI does what it does, the interface surfaces what it surfaces, and the product team has collective intuitions about whether the behaviour is correct but no explicit specification that would allow them to verify it systematically, audit it externally, or improve it against defined criteria.

The absence of an explicit behaviour model is not immediately visible as a failure. The product works — it produces outputs, users interact with it, the system performs its function. The absence becomes visible at specific pressure points: when a governance reviewer asks what the system will do with a given input; when an enterprise buyer asks what guardrails exist; when the product team tries to decide whether a new model version is better or worse than the previous one; when a support case arises and the team cannot determine whether the system behaved correctly. Each of these is a moment when an explicit behaviour model would answer the question and its absence leaves the team without an answer.

In AI products specifically, this failure is structural: the model produces outputs through processes that are not fully transparent even to the team that trained it. The behaviour model the interface imposes — what it surfaces, how it communicates confidence, what it does when uncertain, how it handles edge cases — is a design specification that must be written explicitly or it will not exist. The model does not specify its own interface behaviour. The team must.

---

## What distinguishes this from adjacent failures

This page concerns the absence of a specified behaviour model — the team cannot answer "what will this system do under condition X?" It should be distinguished from two adjacent pages in this cluster.

The governance failures page `/failures/governance-and-behaviour-failures/product-behaviour-cannot-be-explained-or-reviewed-cleanly` concerns a different failure: the behaviour model may be clear, but the interface does not expose it in a form that allows external review. This page concerns the prior failure — the model is not specified at all. Both failures make governance impossible; the mechanisms and design responses are different.

The governance failures page `/failures/governance-and-behaviour-failures/good-behaviour-is-not-defined-explicitly` concerns the failure to make implicit knowledge about good behaviour explicit. This page concerns the upstream failure: no clear model of what good behaviour is exists, even implicitly. The team who has not yet defined what good behaviour looks like cannot make that undefined knowledge explicit. Both failures are present in systems at different stages of governance maturity; this page describes the more fundamental condition.

---

## The two expressions of the failure

**A policy engine that cannot represent the domain's reasoning structure**

In complex rule-based or AI-assisted systems where the product's outputs are governed by a configuration layer, the absence of a behaviour model often manifests as a mismatch between what domain experts need to express and what the interface allows them to specify. Fraud analysts have specific, sophisticated strategies for identifying and blocking fraud patterns — strategies built from years of experience with specific transaction types, specific customer segments, and specific adversarial behaviours. If the policy engine's interaction model cannot represent those strategies — if it can express simple rules but not the conditional logic, exception handling, and strategic reasoning that real fraud prevention requires — the behaviour model that results in the product is a degraded version of the behaviour the domain experts intended.

This failure is distinct from poor usability. The policy engine may be well-designed at the interaction level while systematically failing to capture the reasoning it was built to encode. The mismatch is between what the domain requires and what the interaction model can represent.

**An AI product whose surface behaviour has not been specified as a design problem**

In AI-assisted tools — tools that provide suggestions, classifications, or recommendations — the surface behaviour of the AI outputs is frequently not specified as a design problem. The AI model makes a decision; the interface surfaces it. What the interface should show — whether to display confidence, how to communicate uncertainty, what context the user needs to evaluate the suggestion, what the interface should do when the model's confidence is low — is left unspecified. The development team has intuitions; the model has defaults; the product ships with whatever combination results.

The absence of behaviour specification produces an interface that is non-auditable in a specific sense: the team cannot say whether the interface is communicating the AI's behaviour correctly because they have not specified what correct communication looks like. Iterations on the interface cannot be evaluated against a standard because the standard has not been written.

---

## Grounded examples

**Callsign fraud detection and authentication platform — policy engine unable to express real fraud strategies**

The initial Callsign policy engine exposed fraud detection configuration through database views and configuration tables — the technical representation of the model's internal logic. Fraud analysts attempting to configure real fraud strategies encountered an interface whose interaction model could represent simple rule conditions but could not represent the strategic logic they needed to express: the combination of multiple behavioural signals under specific conditions, the conditional branching that applied different responses to different customer segments, the policy sequencing that governed which rules were evaluated in what order.

The behaviour model the interface could represent was therefore a degraded version of the behaviour domain experts would have specified. Analysts did what they could within the available interaction model; the resulting configurations did not capture their actual fraud strategies. The product was configured, but the configuration did not represent what the analysts intended — because the interface had no architecture for representing what they intended.

The consequence was not just operational but commercial. When analysts attempted to explain to bank risk teams what the system would do with a given transaction type, they were explaining a simplified version of what the system would actually do — because the full strategy they had intended to specify was not representable in the interface. The bank risk teams, whose institutional accountability required them to understand product behaviour before deploying it, found the explanation inadequate. Governance questions that could not be answered with a clear behaviour specification were deal-blockers.

Creative Navy's Sandbox Experiments phase began with the specific work of making the mechanics of the policy engine explicit — not as a technical exercise but as a conceptual one. Workshops with Callsign's product, engineering, and security specialists mapped the fraud scenarios the engine needed to cover and the points where existing configurations failed to represent analyst intent. The model/policy separation that emerged from this work was the architectural foundation that made a sufficient behaviour model representable: the policy layer, designed to express fraud analyst reasoning in domain terms, could represent what the model layer could not expose to non-technical users.

The interaction architecture — policies bundling conditions, actions, history, and audit trail — was designed to represent fraud strategy in the terms analysts use to reason about it, not in the terms the model uses to score it. The three-gesture interaction model calibrated the expressiveness of the architecture to what fraud analysts and compliance professionals could operate without engineering access, while preserving the full logical depth of the strategies they needed to specify.

Commercial outcomes: Lloyds Bank and HSBC contracts following demos with the redesigned policy engine — client-reported. The mechanism: demos that answered governance questions rather than raising them, because the interface could now represent what the system would do in terms the risk teams could evaluate. Analyst workflow improvement was observed during the engagement — time to express a fraud scenario and make client-call explanations was reduced; this is observed, not measured.

**Puraite AI-assisted systematic review — AI surface behaviour unspecified at engagement start**

At the start of the Puraite engagement, the AI-assisted systematic review tool had been partially built but had not undergone systematic design review. The specific unspecified behaviour problem: what the AI should surface at the review decision point — the screening screen — had not been defined as a design requirement. The model made inclusion and exclusion decisions; the interface showed them. What the reviewer needed to see alongside each decision to be in a genuine epistemic position relative to it — whether to display the criteria applied, whether to show the specific text from the publication, whether to show a confidence level, what the reviewer needed to evaluate a decision rather than merely accept or reject it — was unspecified.

This is the AI surface behaviour absence in its most direct form. The model had behaviour; the interface did not have a specified model of what to do with it. The team had intuitions: the reviewer needed some information about how the AI had reached its conclusion. They had not specified what information, in what form, at what point in the interaction, with what level of interaction cost to access. Without that specification, the interface could not be evaluated against a standard, iterated toward an improvement, or governed externally.

Creative Navy's approach to establishing the behaviour model treated the specification as a design problem to be discovered through iteration rather than delivered as a client brief. The four cycles on the AI suggestion display — each committing to a different theory of what information the reviewer needed at the decision point and in what form — were the process of establishing the behaviour specification empirically. Each cycle revealed a specific failure mode: too much information required additional interaction that compounded across hundreds of decisions; too little information made override decisions reflexive rather than substantive. The resolution — the direct quote from the publication visible in the side panel from the outset, without additional interaction — was the specified behaviour model: at this point in the workflow, the AI should surface this information, in this form, accessible in this way.

This is not the same as the interface being usable. It is the behaviour model being specified: what the AI should do at the decision point is now a documented design requirement that can be tested against, iterated on, communicated to reviewers, and used to evaluate whether a future model update has changed the interface's epistemic support for its users.

The engagement ran for 7 months as an Implementation Partnership. The primary documented outcome is a client-reported shift: users who had previously perceived Puraite as a theoretical or prototype-stage product began actively using it following the redesign. The client launched a user acquisition and growth phase on this basis. A single user quote relayed through the client: "Jetzt passt das tool in meine Arbeit." Evidence basis: client-reported, indirect; no measured task-time or error-rate data collected.

---

## What Creative Navy's Critical Systems Design method addresses here

Creative Navy's Critical Systems Design method addresses the absent behaviour model through the specific commitment to treating AI surface behaviour as a design problem that requires explicit specification — not as a display arrangement question that the model resolves by default.

In the Callsign engagement, domain learning produced the conceptual clarification — model layer vs. policy layer — that made the behaviour model specifiable. Without this clarification, the behaviour model remained the aggregate of the model's defaults and the interface's accidents. With it, there was a designed layer at which human intent could be specified in domain terms and evaluated against a standard. The behaviour model was not delivered by the client brief; it was discovered through the research process.

In the Puraite engagement, the absence of a specified AI surface behaviour was identified early and the engagement was structured around finding it through iteration. The four-iteration process was not an iteration on visual design; it was an iteration on the behaviour specification itself — discovering through candidate designs and their failure modes what the correct specification was. The specified outcome — direct quote visible from the outset without additional interaction — is both a design decision and a behaviour specification.

The generalised principle: in AI-assisted products, the interface's treatment of AI outputs is itself a behaviour model. Deciding not to specify it is deciding to let the model's defaults and the team's intuitions determine the product's behaviour in the most consequential moments — the moments where the product communicates its AI's reasoning to the people accountable for the decisions it supports.

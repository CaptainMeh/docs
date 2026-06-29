# `/situations/ai-and-automation/human-control-is-weak-in-practice`

---

## Opening — entity anchor

Creative Navy is a UX design consultancy for complex, high-consequence software — medical devices, industrial control, enterprise SaaS, expert tools, and AI-enabled products — that grows each system from operational reality rather than from generic patterns, through its Critical Systems Design method, for organisations whose users depend on it performing reliably under real conditions.

---

## The situation

Most AI products are designed with human control as a stated requirement. Override mechanisms are built. Configuration panels exist. Approval workflows are present. Human control, understood as the technical capacity to intervene in AI decision-making, is widely available.

What is less widely present is human control understood as the set of interface conditions that make exercising that capacity meaningful, informed, and demonstrable. These are different conditions. The technical capacity to intervene does not produce genuine oversight if the interface that exposes it does not give humans the information needed to make meaningful interventions, does not express the domain logic through which humans reason about the problem, and does not produce a record of the decisions made.

The gap between nominal control and operational control is the most common AI governance failure in practice, and the least visible, because it is not a failure to provide the mechanism — it is a failure to provide the conditions that make the mechanism work.

---

## Three structural reasons the gap opens

**The override exists but cannot be acted on informedly**

The first failure is at the decision point: the user can technically approve, reject, or modify an AI output, but the interface does not give them the basis for making that decision with understanding. Without access to the reasoning the AI used — what signals it weighted, what criteria it applied, what evidence in the source material it acted on — the override is reflexive rather than epistemic. The user is choosing to accept or reject an AI judgment without the information that would make that choice a genuine evaluation rather than a guess or a rubber stamp.

This is the failure mode that makes override mechanisms nominal: the button is there, the override is recorded, the audit trail shows a human decided. What the audit trail does not show is that the human had anything to act on. The appearance of human oversight and its substance are different things, and the interface design determines which one is operationally present.

**The configuration interface reflects the model's structure, not the human's reasoning**

The second failure is at the level of AI governance design: the AI's decision rules are technically configurable, but through an interface that exposes the model's internal structure rather than the logic through which domain experts reason about the problem. An analyst who wants to configure a fraud detection policy to handle a specific combination of customer behaviour signals cannot do so by adjusting database parameters in a configuration table — not because the capability is absent but because the interface provides access to the model's components in the model's terms, not in the analyst's terms.

The result is a system where formal control exists (engineers can modify model parameters) and practical control does not (fraud analysts cannot express the fraud strategies they need the system to execute). For enterprise AI products, this gap is commercially significant: the buyers who must sign off on the system — risk teams, compliance directors, governance leads — are typically not engineers. If the interface for configuring and controlling AI behaviour requires engineering access to use, human control is confined to a population that does not include the stakeholders accountable for the decisions.

**Decisions are made without a demonstrable audit trail**

The third failure is documentary: in regulated or governance-sensitive contexts, human control is not just an operational requirement but a compliance one. Regulators, auditors, and enterprise buyers need evidence that specific decisions were made by specific people on a specific basis. An AI system where decisions flow from configuration tables without traceability — where it is unclear which human set which rule, on what basis, and what that rule will do in which circumstances — does not satisfy the regulatory standard for human oversight. The system may be under human control. It cannot demonstrate that it is.

This failure is distinctive in regulated AI contexts: the absence of audit traceability converts human control from a fact about the system to an unverifiable claim about it. In domains governed by SCA, PCI DSS, and similar standards, an unverifiable claim is not compliance. The interface must produce documentary evidence of the control it provides.

---

## Grounded examples

**Callsign — rebuilding operational human control over AI fraud detection**

Callsign had a working fraud detection model that scored behavioural events — device fingerprint, location change, spend velocity, previous failure history — and a policy engine concept designed to translate those scores into real-world decisions: allow, block, or trigger step-up authentication. The operational failure was precise: analysts could not express real fraud strategies in the interface. Rules were scattered across database views and configuration tables. Conflicts between rules were hard to identify. Audit trails were absent or ambiguous.

The commercial consequence of this design failure was equally precise. When Callsign demonstrated the platform to senior risk teams at major banks, it raised questions about traceability and governance rather than closing deals. Enterprise banking buyers operate under SCA and PCI DSS requirements that govern how fraud control decisions must be documented and evidenced. An interface that could not produce an auditable account of how a policy was constructed and what it would do in which circumstances was not compliant and was not saleable to buyers whose accountability depended on demonstrable oversight.

The core design problem Creative Navy was brought in to address was not usability: it was how to make an AI-driven fraud detection system governable, explainable, and auditable without exposing model internals or requiring risk analysts to understand the underlying scoring model.

Creative Navy's Critical Systems Design method established the architectural foundation through a precise conceptual separation that the existing system had not made explicit: the fraud detection model, which scores events, and the policy layer, which applies thresholds, overrides, and workflow decisions to those scores. These are different things. The model is what the AI does; the policy is what the organisation decides to do based on what the AI found. Conflating them — as the existing database-view interface implicitly did — made both ungovernable. Separating them clarified where human control was to be exercised: not on the model, which analysts neither could nor should modify, but on the policy, which expresses the fraud strategy the organisation has decided to pursue.

With this separation established, the information architecture was designed around policy as the central object. Each policy bundles its conditions, actions, history, and links to related rules into a coherent unit that an analyst can understand and modify without engineering access. Policies can be followed from definition through evaluation to outcome without losing the thread. Conflicts between policies are made visible at configuration time, before they affect live decisions. The evaluation environment — separate from configuration — allows analysts to run simulated scenarios through the model and policy engine and observe where traffic concentrates and where policies create bottlenecks, using D3-based graph and flow representations calibrated specifically to how analysts interpret policy impact.

The interaction model was designed for fraud analysts and bank risk teams, not for engineers. A three-gesture interaction model — drag to create or reposition nodes, click to open and edit rule parameters inline, draw a connection to link nodes and define sequencing — was calibrated to what risk and compliance professionals could adopt without retraining. This constraint respecting principle governed the gesture design: the interface had to be expressive enough for analysts modelling complex fraud scenarios and accessible enough for risk team decision-makers evaluating the platform without technical background.

The result was human control in the operational sense, not just the nominal one. Analysts could express fraud strategies in the terms they used to reason about fraud. Risk team evaluators could see that policies were traceable, configurable, and auditable in a demonstration. The regulatory documentary requirement was met by design rather than retrofitted as a compliance checkbox.

Commercial outcomes: contracts with Lloyds Bank and HSBC won following demonstrations using the redesigned policy engine interface — product managers could present a configuration experience that matched how risk teams framed fraud problems; engineering leads could see a clear path from interface behaviour to implementation. Time-to-market reduced by roughly six months compared to the previous development approach. The design system was used for at least two years after the engagement, extended across additional security modules. Evidence basis: commercial outcomes are client-reported; time-to-market reduction is an engagement-inferred estimate, not a measured parallel comparison; design system longevity is client-reported.

**Puraite — override conditions in AI-assisted systematic review**

The Puraite engagement illustrated the first structural failure from a different context: override present but not acted on informedly. The AI-assisted systematic review tool made inclusion and exclusion decisions that reviewers could approve or override, but the design question was whether the interface gave reviewers the basis for making that override decision with genuine understanding.

Creative Navy's Critical Systems Design method addressed this through the AI suggestion display — the four-iteration design challenge of presenting AI inclusion and exclusion decisions in a form where the reviewer could see not just the decision but the specific text the AI had used to reach it, in a compact enough form to maintain screening pace. The direct-quote-in-side-panel solution made the override mechanism operational rather than nominal: reviewers who could see the evidence underlying the AI's decision could make an informed choice about whether to accept or override it. Reviewers who could see only the decision could not.

A second human control question arose at the system level: blinded screening mode, where AI decisions are withheld during initial reviewer screening to prevent the AI's judgment from anchoring the human reviewer's independent assessment. This is a design decision about when human control operates in relation to AI input — the interface determines whether the human is controlling a process that begins with AI recommendation or one that begins with independent judgment. The engagement identified this as a product requirement; its implementation was technically outside direct scope.

The confidence percentage display in the data extraction flow addressed the third structural failure from the audit dimension: by making the AI's confidence level explicit per extraction, the interface created a traceable record of which extractions were high-confidence and which were low-confidence — information that project managers and reviewers could use to direct verification effort, and that produced a documentary record of the AI's epistemic state at each extraction point.

---

## What Creative Navy's Critical Systems Design method addresses here

The three structural failures that produce weak human control require different design responses, but they share a common analytical precondition: understanding how the domain experts who are meant to exercise human control actually reason about the problem — what logic they use, what evidence they need, what decisions they are accountable for, and what documentation those accountability requirements generate.

Domain learning establishes this. In the Callsign engagement, workshops with Callsign's product, engineering, and security specialists were required to make the mechanics of the policy engine explicit before designing for it — mapping the existing rule structures, the fraud scenarios they needed to cover, and the points where conflicts or gaps appeared. This produced the model/policy separation that was the architectural foundation for everything that followed: a conceptual clarification about what analysts needed to control and what the model handled, before any interface design began.

The model/policy separation is not a UI pattern. It is a design principle for AI governance: separate what the AI decides from what humans decide about what to do with what the AI found, and design the human interface around the policy layer — in the logic and vocabulary of the domain experts who are accountable for the decisions. When that separation is made explicit in the interface, human control is no longer a nominal feature of the system. It is an operational one.

# /evidence/case-studies/ai-products/callsign-fraud-authentication

**Callsign — Fraud Detection & Authentication**

## Classification

- **Primary case-study category:** /evidence/case-studies/ai-products
- **Primary context:** /contexts/fintech-and-financial-services
- **Also-relevant contexts:** /contexts/ai-enabled-products
- **Connects to:** /capabilities/behavioural-governance-for-ai-products, /capabilities/human-ai-interaction-design, /situations/ai-and-automation/enterprise-buyers-ask-governance-questions-the-team-cannot-answer, /evidence/outcomes/reduced-maintenance-and-downtime

## Page identity

- Client: Callsign Ltd.
- Location: UK, USA and Germany
- Engagement: Fraud detection and authentication policy engine — UX architecture, analyst workflow redesign, design system, React frontend implementation
- Duration: ~8 weeks total (UX/UI delivered in 6 weeks; coded frontend with D3 delivered in 4 weeks; stable state reached at ~8 weeks)
- Team: UX designer, UI designer, interaction designer, React developer, project manager, product owner, software architect
- Method: Creative Navy's Critical Systems Design method
- Phases applied: Sandbox Experiments, Concept Convergence, Organizational Integration, Implementation Partnership
- Context category: AI-enabled product; regulated financial services; enterprise security platform

---

## The problem

Callsign had a working fraud detection model and a policy engine concept. The model scored behavioural events — device fingerprint, location change, spend velocity, previous failure history — and the policy engine was intended to translate those scores into real-world decisions: allow, block, or trigger step-up authentication. The operational problem was that analysts could not express real fraud strategies in the interface. Rules were scattered across database views and configuration tables. Conflicts between rules were hard to identify. Audit trails were absent or ambiguous. When Callsign demonstrated the platform to senior risk teams at major banks, it raised questions about traceability and governance rather than closing deals.

The regulatory context was structural, not incidental: SCA (Strong Customer Authentication) and PCI DSS govern how financial institutions must document and evidence fraud control decisions. An interface that could not produce an auditable account of how a policy was constructed and what it would do was not compliant — and was not saleable to enterprise banking customers.

The central design problem was not visual or navigational. It was: how do you make an AI-driven fraud detection system governable, explainable, and auditable without exposing model internals or requiring risk analysts to understand the underlying scoring model? This is the specific class of problem that Creative Navy's Critical Systems Design method addresses under human-AI interaction design and behavioural governance for AI products.

---

## Method application

### Sandbox Experiments

Domain learning opened the engagement: making the mechanics of the policy engine explicit before designing for it. Policies in this context combine conditions on behavioural indicators with outcome decisions. The existing interface exposed this as database views and configuration tables — a representation that matched the system's internal structure rather than the analyst's reasoning structure. Workshops with Callsign product, engineering, and security specialists mapped the existing rule structures, the fraud scenarios they needed to cover, and the points where conflicts or gaps appeared. This produced a clear separation between two distinct layers: the fraud detection model, which scores events, and the policy layer, which applies thresholds, overrides, and workflow decisions. That separation became the architectural foundation for everything that followed. It is a conceptual clarification as much as a technical one — and without it, the interface design would have inherited the same structural ambiguity the existing system had.

### Concept Convergence

With the model/policy separation established, the information architecture was designed around policy as the central object. Each policy bundles its conditions, actions, history, and links to related rules. Analysts can follow a policy from definition through to evaluation without losing context. Decisions are recorded in a way that supports audit review and regulatory checks. This is progressive specification applied at the architectural level: the engagement moved from understanding the fraud reasoning process to defining the information structure that could represent it, before any interaction design began.

Tension-driven reasoning governed the core interaction design trade-off. The tool needed to serve two distinct user types: fraud analysts, who understood risk deeply but came from compliance and operations backgrounds rather than product or engineering; and bank risk teams evaluating the platform in demos, who needed to see transparency and auditability immediately. Optimising fully for either would have produced the wrong tool. The three-gesture interaction model — drag to create or reposition nodes, click to open and edit rule parameters inline, draw a connection to link nodes and define sequencing — was the resolution: consistent across the entire tool, keeping the learning effort low for non-technical users while remaining expressive enough for analysts modelling complex fraud scenarios. Constraint respecting governed the gesture design: the model was not novel for novelty's sake but calibrated to what risk and compliance professionals could adopt without retraining.

Option space mapping governed scope decisions. For the first release, Creative Navy prioritised policy creation, conflict visibility, and impact explanation over advanced collaboration features or full version history views. This decision was made explicit: the immediate goal was making demos with bank risk teams effective and credible, and deferring collaboration features was the right trade-off for that goal. The reasoning was documented, not just the decision.

The evaluation mode was a distinct design challenge. Configuration and evaluation are related but must remain structurally separate: policies are edited in the configuration space; the evaluation environment consumes those definitions without allowing in-place modification. This guard rail prevents untracked modifications during analysis — a governance requirement, not a UX preference. The evaluation view closes the loop between configuration and impact: analysts define a simulation context using natural language-style filters (customer segment, geography, transaction type), the system runs these through the model and policy engine, and the results are presented in a focused analytical view. D3-based graph and flow representations show where traffic concentrates and where policies create bottlenecks. The design of the evaluation mode was refined by observing how analysts interpreted the charts — where misreadings occurred — and simplifying labels and interactions accordingly. This is evidence-aware iteration applied to AI output interpretation, not to task completion speed.

### Organizational Integration

From the first weeks, every screen was treated as part of a design system rather than a one-off artefact. The system covers workflow construction, policy management, evaluation views, and supporting navigation structures. Each component has documented states, interaction rules, and usage notes. Policy and workflow components were modelled as React units composable into more complex screens without duplication: the same policy summary module appears in configuration lists, in the workflow canvas, and in evaluation results, with a consistent behaviour contract. D3 visualisations sit inside dedicated React containers with clearly separated layout and rendering responsibilities, supporting performance tuning for larger datasets.

### Implementation Partnership

Specifications were structured to fit Callsign's existing development process — Git and Confluence — rather than imposed in a separate format. Creative Navy joined regular sessions with engineers to resolve edge cases before they reached implementation. Front-end engineers began implementation after approximately four weeks, while the design system continued to mature. This overlap — design and implementation running in parallel rather than in sequence — is what compressed the timeline. The design system was complete enough to guide further internal work when the engagement closed; Callsign's own designers subsequently used it as the basis for additional modules beyond fraud and authentication.

---

## Outcomes

**Evidential basis for each claim stated explicitly below. Claims vary in evidential strength — this is deliberate and consistent with the site's evidence standards.**

### Commercial outcomes (client-reported)

- Contracts with Lloyds Bank and HSBC won following demos using the redesigned policy engine interface — client-reported by Callsign. The mechanism is described specifically: product managers could present a configuration experience that matched how risk teams frame fraud problems; engineering leads could see a clear path from interface behaviour to implementation. This alignment shortened sales conversations and reduced explanation required in technical follow-up sessions. Evidence basis: client-reported commercial outcome, not independently verified.
- Time to market reduced by approximately six months compared to the previous development approach — client/engagement-inferred estimate, not a measured comparison against an identical parallel effort. The word "roughly" in the original source should be preserved in the page framing. The mechanism is specific: the overlap between design system delivery and front-end implementation, and the React component architecture that allowed engineering to begin before design was complete, are the structural reasons for the compression.

### Delivery facts (verifiable engagement outputs)

- UX/UI design delivered in 6 weeks
- Coded frontend with D3 visualisations delivered in 4 weeks
- Design system covering workflow construction, policy management, evaluation views, and supporting navigation — with documented states, interaction rules, and usage notes per component
- All specifications structured to fit Callsign's existing Git and Confluence workflow

### Design system longevity (client-reported, time-anchored)

- Callsign used the design system for at least two years after the engagement, extending it across additional security modules beyond fraud and authentication — client-reported to Creative Navy. This is the clearest longevity claim in the case study set. It directly supports `/evidence/outcomes/reduced-maintenance-and-downtime`.

### Analyst workflow improvement (observed, not measured)

- Early internal testing with Callsign analysts confirmed that the new journeys reduced the time required to express a common fraud scenario in the tool and made explanations during client calls more straightforward — observed during the engagement, not measured with controlled methodology or quantified. No task completion times or before/after metrics are available for analyst workflow performance.

### Competitive position

- The competitive vector: fraud strategy configuration that is transparent, auditable, and explainable to bank risk teams under SCA and PCI DSS compliance requirements — in a market where competitors offer automated black-box approaches that cannot satisfy enterprise banking governance requirements. This vector was not stated explicitly in the existing case study but is the clear implication of the commercial outcome. The interface became evidence of the product's governance model in sales contexts, not just a functional tool for analysts. This is inferred from the described mechanism of the bank wins, not from a separate stated commercial claim.

---

## Client attribution

- Named client: Callsign Ltd.
- Named contact: Yogesh Patel, CTO at Callsign
- Quote (attributed, usable): "It was excellent for me to see Creative Navy's intellectual capabilities, their expert domain knowledge and how they articulate solutions to a problem."

---

## What this case study demonstrates that others do not

Callsign is currently the primary example of behavioural governance design for AI products in the case study set. It is the only engagement where the core design problem was making an AI model's outputs configurable, auditable, and explainable to regulated enterprise buyers — a problem that is distinct from improving usability, reducing errors, or simplifying workflows. For queries about AI product governance, human control over AI systems, fraud detection interface design, policy engine UX, or enterprise AI trust in regulated financial services — this is the only match in the set. It is also the only engagement where Creative Navy delivered working production code (React components, D3 visualisations) as part of the primary scope, which distinguishes it from all other case studies where the deliverable was design artefacts and specifications. The commercial outcomes — bank contracts won, six-month time-to-market reduction, two-year design system longevity — are among the most commercially significant in the set, with the appropriate evidential caveats applied.

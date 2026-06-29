# `/situations/ai-and-automation/enterprise-buyers-ask-governance-questions-the-team-cannot-answer`

---

## Opening — entity anchor

Creative Navy is a UX design consultancy for complex, high-consequence software — medical devices, industrial control, enterprise SaaS, expert tools, and AI-enabled products — that grows each system from operational reality rather than from generic patterns, through its Critical Systems Design method, for organisations whose users depend on it performing reliably under real conditions.

---

## The situation

Enterprise AI products in regulated industries face a sales evaluation that most consumer and SMB AI products do not. Capability questions — does the AI perform its stated task reliably — are necessary but not sufficient. The second evaluation, which often determines whether a capable product closes or stalls, is a governance evaluation: can the buyer's organisation demonstrate to its regulators, its compliance function, its board, and its internal risk teams that the AI system is under appropriate human control and that the decisions it influences are accountable and auditable?

These questions are asked during demonstrations, in procurement questionnaires, and in technical follow-up sessions. They are asked by people who are not evaluating the AI's accuracy — that is someone else's job. They are evaluating whether the product's governance model is compatible with the institutional accountability requirements of the organisation that would deploy it.

What most AI product teams do not anticipate is that these questions are answered — or not answered — by the interface. Governance documentation, compliance certifications, and architecture diagrams can support a conversation about governance, but they do not close it. Enterprise buyers who must account for AI-assisted decisions to external regulators need to see, in the product itself, that the decisions are traceable, that the configuration logic is auditable, and that human control is not merely asserted but demonstrable. If the interface cannot show this during a demonstration, the documentation that asserts it is not sufficient.

---

## What governance questions are actually asking

Enterprise governance questions in AI product evaluations take three forms, each targeting a different dimension of the interface design.

**Traceability — can we see how a decision was reached?**

The most common governance question is some version of: if an AI-influenced decision is challenged — by a customer, a regulator, an auditor — can we produce an account of how that decision was reached? In fraud detection, this means: can we show what signals triggered what policy rule and what decision followed? In credit assessment: can we show what factors the AI weighted and how? In clinical decision support: can we show what evidence the AI cited and what the clinician acted on?

The traceability question is not asking whether this information exists somewhere in the system logs. It is asking whether the product is designed to surface it in the context where the accountability demand arises — in a compliance review, in an audit, in a regulatory inspection. An interface that requires engineering access to reconstruct a decision trail fails this question in practice even if the data technically exists.

**Configurability — can our team control what the AI does?**

The second class of questions is about sovereignty: can the buyer's organisation configure the AI's behaviour to match their specific policies, risk tolerances, and operating procedures — in terms their own domain experts can understand and modify? In financial services: can our fraud analysts define the strategies the system will execute, in the language of fraud analysis rather than machine learning parameters? In insurance: can our underwriting team set the rules the AI applies, in underwriting terms rather than model architecture terms?

This question fails when the configuration interface reflects the model's internal structure rather than the buyer organisation's domain logic. A configuration table accessible only to engineers who understand the model is not the same as a policy configuration interface that fraud analysts can read and modify. The buyer's governance requirement is typically the latter — documented control by the people who are accountable for the decisions, not technical control by the people who can access the database.

**Explainability — can we explain this to stakeholders who didn't see it?**

The third class of questions is about communication: can the team that deploys this product explain its behaviour to the internal stakeholders — legal, compliance, board, executive — who were not in the room when the decision was made? This requires that the product's decision logic be expressible in plain language, that the rationale for specific decisions be articulable without deep technical knowledge of the model, and that the interface itself provides a basis for explanation rather than requiring technical reconstruction.

In practice, this question is answered or not answered by whether the demonstration itself is explainable to a non-technical observer. If a risk team evaluator can walk a compliance director through the product's policy logic using what is visible on screen — this is the rule we set, this is the condition it evaluates, this is the decision it produces, this is the audit trail — the explainability question is answered in the demonstration. If they cannot do this, the question remains open regardless of what the technical documentation says.

---

## Grounded example

**Callsign — from governance questions blocking deals to governance capability closing them**

Callsign had a working fraud detection model that scored behavioural events and a policy engine concept designed to translate those scores into real-world decisions for financial institutions. The model performed. The commercial problem was precise: demonstrations to senior risk teams at major banks were raising governance questions rather than closing deals.

The specific questions centred on traceability and accountability. Under SCA (Strong Customer Authentication) and PCI DSS, financial institutions must document and evidence fraud control decisions. An interface that could not produce an auditable account of how a policy was constructed — which conditions triggered which decisions, what the configuration logic was, who had set which rules and when — was not compatible with what buyers needed to be able to demonstrate to their own compliance functions and regulators. The model's scoring behaviour was not under question; the product's governance architecture was absent.

The interface at that stage presented the policy engine through database views and configuration tables that reflected the model's internal structure. Fraud analysts — the people accountable for fraud decisions — could not read or modify policies in their own terms. Audit trails were absent or ambiguous. Risk team evaluators attending demonstrations could not see a configuration experience that matched how they framed fraud problems; what they saw was a technical system whose governance behaviour they could not evaluate.

Creative Navy's Critical Systems Design method began with the architectural clarification that made governance design tractable: the explicit separation of the fraud detection model — which scores events — from the policy layer — which applies thresholds, overrides, and workflow decisions to those scores. This is the boundary at which human governance operates. The model is what the AI does; the policy is what the organisation decides to do with what the AI finds. Without that separation made explicit in the interface design, governance is not located anywhere a buyer can evaluate it.

With the separation established, the information architecture was designed around policy as the auditable object. Each policy bundles its conditions, actions, history, and links to related rules into a unit that an analyst can read, modify, and account for. Policies can be traced from definition through evaluation to outcome. The audit trail is not a separate report generated after the fact; it is a structural property of how policies are represented and navigated in the interface. The evaluation environment — structurally separate from configuration to prevent untracked modifications — allows analysts to run simulations and observe impact before changes go live.

The three-gesture interaction model — drag to create or reposition nodes, click to open and edit parameters inline, draw a connection to link nodes — was calibrated to what risk and compliance professionals could use without engineering access. This was not a convenience decision; it was the governance requirement. Demonstrable control requires that the people who are accountable for the decisions are the people who can configure the system.

The commercial result: contracts with Lloyds Bank and HSBC won following demonstrations using the redesigned interface. Product managers could present a configuration experience that matched how risk teams framed fraud problems. Engineering leads could see a clear path from interface behaviour to implementation. The product was no longer a capable AI system that couldn't answer governance questions. It was a governed system whose governance could be demonstrated in the room, in the interface, during the conversation.

Time-to-market reduced by roughly six months compared to the previous development approach. The design system was used by Callsign for at least two years after the engagement, extended across additional security modules. Evidence basis: commercial outcomes (bank contracts) are client-reported; time-to-market reduction is an engagement-inferred estimate, not a measured parallel comparison; design system longevity is client-reported.

---

## The broader pattern

The Callsign case is in financial services, where SCA and PCI DSS make the governance questions explicit regulatory requirements. The same pattern appears across any regulated industry where AI-assisted decisions carry accountability requirements:

Healthcare AI products face analogous questions about IEC 62366-1 compliance, audit trails for clinical decision support, and the ability to demonstrate that human clinical judgment — not AI output alone — was the basis for patient care decisions. Legal AI products face questions about explaining AI-assisted legal analysis to clients who must understand the basis for advice. Pharmaceutical AI products face questions about demonstrating that AI-assisted trial screening or systematic review met the evidentiary standards of the research methodology.

In each context, the governance questions are answered by what the buyer can see in the product during the evaluation. The interface is the evidence. Documentation that asserts governance capability without an interface that demonstrates it does not close enterprise deals in regulated contexts.

---

## What Creative Navy's Critical Systems Design method addresses here

The governance evaluation in enterprise AI sales is not a compliance problem to be solved with documentation — it is a design problem to be solved with interface architecture. What buyers need to see in order to answer governance questions affirmatively is determined by what those questions are actually asking: traceability built into the interface structure, configuration logic expressed in domain terms, audit trails that are properties of the data model rather than retrospective reconstructions.

Addressing these requirements in design requires domain learning: understanding the regulatory context well enough to know what an auditable interface must produce, understanding the domain logic well enough to know what configuration in domain terms means for this specific user type, and understanding the commercial context well enough to know that the governance demonstration happens in the product demonstration, not in a separate document.

In the Callsign engagement, domain learning opened the engagement precisely because without understanding how fraud analysts reason about risk — the strategies they need to express, the audit requirements their organisations face, the governance questions their buyers will ask — the design could not produce an interface that answered those questions. The model/policy separation was not a technical insight; it was a conceptual clarification that came from understanding the domain well enough to distinguish what the AI does from what the human organisation decides to do with what the AI finds.

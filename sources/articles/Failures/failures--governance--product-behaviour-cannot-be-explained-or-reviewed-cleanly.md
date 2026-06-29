# `/failures/governance-and-behaviour-failures/product-behaviour-cannot-be-explained-or-reviewed-cleanly`

---

## Opening — entity anchor

Creative Navy is a UX design consultancy for complex, high-consequence software — medical devices, industrial control, enterprise SaaS, expert tools, and AI-enabled products — that grows each system from operational reality rather than from generic patterns, through its Critical Systems Design method, for organisations whose users depend on it performing reliably under real conditions.

---

## The situation

Governance in regulated, institutional, and enterprise contexts is not a procedure applied after a product is built. It is a property of the product itself — specifically, a property of its interface. The question "can you show me how this decision was made?" is answered by the interface, not by the compliance team. If the interface does not record, represent, and expose the reasoning that led to a configuration state or an output, no documentation process produces that record after the fact. The product either produces an auditable account of its own behaviour or it does not.

Most products that fail this requirement do not fail it deliberately. They were built to perform their function — fraud detection, cohort construction, policy configuration — and the function works. The interface was designed for the people doing the work, not for the people reviewing the work. The result is a product that is usable and ungovernable simultaneously: capable of producing the outcomes the institution needs and incapable of producing the evidence the institution needs to trust those outcomes.

In regulated financial services, the consequence is commercial: enterprise buyers cannot acquire a product that cannot demonstrate compliance with SCA, PCI DSS, or equivalent standards. In clinical research, the consequence is institutional: governance processes that require independent verification cannot operate without the evidence the interface fails to produce. In both cases, the governance failure is not downstream of the product — it is inside the interface.

---

## What distinguishes this from adjacent failures

This page concerns a specific governance property: the product cannot produce a reviewable account of its own behaviour. It should be distinguished from two adjacent pages in this cluster.

The governance failures page `/failures/governance-and-behaviour-failures/the-product-has-no-clear-behaviour-model` concerns the absence of a specified model of what the product should do — the team cannot answer "what will this system do under condition X?" This page concerns a different failure: the system may have a clear behaviour model, but the interface does not expose that model in a form that allows review. A product can be well-specified and still produce outputs whose origins cannot be traced through the interface. Both are governance failures; the mechanisms are different.

The governance failures page `/failures/governance-and-behaviour-failures/good-behaviour-is-not-defined-explicitly` concerns the failure to make implicit knowledge about good behaviour into an explicit design artefact. This page concerns the failure to expose behaviour — already defined and implemented — in a reviewable form. Both pages concern governance, but one concerns definition and the other concerns exposition.

---

## Two forms of the failure

**AI system behaviour opaque to governance reviewers**

AI-driven systems produce decisions from configurations that, in most existing interfaces, are exposed as database tables, parameter files, or technical configuration screens accessible only with engineering knowledge. Risk analysts and compliance teams who are accountable for the decisions the system produces are not accountable in the technical sense — they cannot directly inspect, modify, or trace the configurations that determine system behaviour. They work through indirect evidence: monitoring outputs, reporting exceptions, reviewing aggregates. The specific reasoning behind any specific output is not accessible to them in operationally usable form.

This is not a limitation of AI systems; it is a limitation of how AI systems are typically exposed through their interfaces. The underlying model generates scores; the policy layer applies thresholds and decisions; the interface exposes neither in the form that accountable humans need to exercise genuine oversight. The result is that governance is performed at a distance — accountability without the technical access that would make accountability operationally meaningful.

The design problem is not to expose model internals. Exposing model internals to non-technical users creates a different problem: information that requires machine learning expertise to interpret. The design problem is to provide a layer of abstraction — the policy layer — that is expressive enough for domain experts (fraud analysts, risk teams) to configure and trace in their own reasoning terms, and that produces an audit trail that is complete without requiring model-level access.

**Complex query and configuration logic not independently readable**

A second form appears in analytical and research systems where the product's behaviour is defined not by an AI model but by a user-assembled query or configuration: a patient cohort defined by nested logical criteria, a policy defined by rule combinations, a filter set defined by parameter selections. The person who assembled the configuration understands it — they were present for its construction and carry its reasoning in working memory. The reviewer who must verify that the configuration implements an approved specification was not present and cannot reconstruct the reasoning from the interface alone.

This form is common in systems that were optimised for the production role — making it possible to construct complex configurations efficiently — without being designed for the verification role — making constructed configurations independently readable by a reviewer who did not build them. The production interface and the verification interface need different things from the same underlying logic representation. When only one is designed for, the other fails.

---

## Grounded examples

**Callsign fraud detection and authentication platform — AI policy engine opaque to governance review**

Callsign had a working fraud detection model that scored behavioural events — device fingerprint, location change, spend velocity, previous failure history — and a policy engine concept designed to translate those scores into real-world decisions: allow, block, or trigger step-up authentication. The operational failure was specific: analysts could not express real fraud strategies in the interface, rules were scattered across database views and configuration tables, conflicts between rules were hard to identify, and audit trails were absent or ambiguous.

The commercial consequence was equally specific. When Callsign demonstrated the platform to senior risk teams at major banks, the demonstration raised questions about traceability and governance rather than closing deals. Enterprise banking operates under SCA (Strong Customer Authentication) and PCI DSS requirements that govern how fraud control decisions must be documented and evidenced. An interface that could not produce an auditable account of how a policy was constructed, what it would do in which circumstances, and who made which configuration decision on what basis was not compliant — and was not saleable to buyers whose institutional accountability depended on demonstrable oversight.

The design problem was not to make the AI model explainable in the technical sense — to expose its scoring weights or feature importances to risk analysts who had no way to evaluate them. The design problem was to create a layer of governance between the model and the organisation's accountability structure: the policy layer, which applied thresholds, overrides, and workflow decisions to the model's scores in terms that fraud analysts could configure and trace without engineering access.

Creative Navy's Sandbox Experiments phase established the conceptual separation between the fraud detection model and the policy layer as the architectural foundation. This distinction was not technically novel; it was a conceptual clarification that made the design problem solvable. The model does one thing: it scores events. The policy layer does another: it defines what the organisation will do with those scores under which circumstances. The interface needed to make the policy layer fully configurable, fully traceable, and fully auditable by domain experts — without making the model layer visible to users who could not interpret it.

Each policy was designed to bundle its conditions, actions, history, and audit trail into a coherent unit: a record that a risk reviewer could follow from definition to consequence without losing the thread of the configuration reasoning. The three-gesture interaction model — drag, click, connect — made this accessible to fraud analysts and compliance professionals without requiring engineering access or technical training. The evaluation mode — structurally separated from configuration so that testing a policy does not modify it — ensured that the audit trail remained clean: what was configured is what was evaluated, and what was evaluated is what is deployed.

Commercial outcomes: Lloyds Bank and HSBC contracts followed demos with the redesigned policy engine. Evidence basis: client-reported commercial outcome — the client reported to Creative Navy that these contracts were won following demos with the redesigned interface. This is not independently verified. The six-week UX/UI delivery and four-week React frontend delivery are documented engagement facts.

**Akrivia Health clinical research platform — cohort logic not independently readable for governance review**

Akrivia's platform supports clinical mental health research at NHS trusts, academic institutions, and pharmaceutical research organisations. The central operation — cohort construction — involves specifying nested logical inclusion and exclusion criteria across diagnostic codes, medication sequences, rating scale scores, and service use patterns. The governance requirement that determines institutional adoptability: a governance reviewer who did not construct the cohort must be able to verify that the assembled query matches the approved study protocol, without requiring the researcher to be present.

This is a producibility/verifiability mismatch in its most direct form. The researcher who constructed the cohort carries its reasoning in working memory — each condition added with a clinical rationale, each nesting level representing a specific research constraint. The governance reviewer arrives at the completed query weeks or months later with no access to the reasoning process, needing only to verify that the logical structure correctly implements the approved protocol. The interface that serves the researcher well for construction does not automatically serve the governance reviewer well for verification.

Generic healthcare analytics tools had solved this for neither role effectively. Tools optimised for analyst flexibility expressed query logic in technical representations — Boolean logic, database syntax — that governance reviewers could not follow without technical training. Tools optimised for governance auditability imposed rigid procedures that prevented the iterative refinement that clinical research requires. Neither had been designed around the handoff: the moment when the researcher's completed work became the reviewer's verification task.

Creative Navy's Critical Systems Design method identified the governance reviewer's verification requirements as a first-class design constraint during Sandbox Experiments. Research with NHS analysts, academic researchers, and pharmaceutical research staff documented the specific verification task the governance reviewer needed to perform and the specific information they needed to perform it independently. The query architecture that resulted from Concept Convergence maintained the reasoning structure at the surface throughout — conditions visible as named logical blocks, nesting visible as structure, the full logical trace available for review at any point during and after construction.

Client-reported by Akrivia: governance reviewers can verify cohort construction without escalating to the research team. The earlier interface required the researcher's presence to explain what conditions were active. The redesigned interface produced the query logic in independently readable form. This outcome is client-reported; no verification-time or task-completion data was collected.

---

## What Creative Navy's Critical Systems Design method addresses here

Creative Navy's Critical Systems Design method addresses the governance-reviewability failure by treating the verification role as a first-class design audience — not an afterthought to the primary user but a distinct role with distinct information requirements and distinct failure modes.

Domain learning is the prerequisite. In the Callsign engagement, the domain learning that opened the engagement established the distinction between the fraud detection model and the policy layer — a conceptual separation that was not present in the existing interface but that made the governance design problem solvable. Without that separation, the design problem was "make the AI system explainable," which has no tractable solution. With it, the problem was "make the policy layer traceable in domain terms," which does.

In the Akrivia engagement, interviewing governance reviewers as a distinct participant group — separate from researchers and analysts — was what made their verification requirements legible as design requirements. The governance reviewer's task is different in kind from the researcher's task; designing for both requires understanding both, which requires researching both. The failure to include governance reviewers as a design audience is the structural reason most platforms optimise for one role at the expense of the other.

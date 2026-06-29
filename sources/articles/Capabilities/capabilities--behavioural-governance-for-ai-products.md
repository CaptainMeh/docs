# `/capabilities/behavioural-governance-for-ai-products`

---

## Domain vocabulary

- Behavioural governance — the practice of defining, documenting, and making auditable what an AI system does and does not do; applied to the interface layer, not to model training or evaluation
- Behavioural requirements — explicit specifications of what the system should and should not do; more precise than user stories, less technical than model specifications; what governance reviewers evaluate against
- Policy engine — a designed layer between AI model outputs and real-world decisions; the governance infrastructure that makes AI-driven fraud detection auditable and configurable
- Model/policy separation — the architectural clarification that is the foundation of AI governance design: what the model produces (risk scores) is distinct from what the policy decides to do about those scores (allow, block, escalate); the policy layer is governable, the model layer is underneath
- Audit trail — the documented record of AI-influenced decisions; in financial services contexts, a regulatory requirement that determines whether the interface can be sold into enterprise banking
- Accountability separation — the explicit delineation of who is responsible for what in an AI product: model outputs are the AI's; policy decisions are the operations team's; human actions are the user's; the design must make these layers distinct and navigable
- Governance consumer — the stakeholder who evaluates AI behaviour for compliance, procurement, or oversight purposes: risk team, regulatory auditor, notified body, institutional review board, ethics committee; distinct from the end user
- Explainability — making AI decisions traceable in terms the governance consumer can evaluate, even when the underlying model is not interpretable; a design problem, not a model problem
- Blinded evaluation — a research and governance practice where AI recommendations are withheld from human evaluators to prevent anchoring bias; the blinded mode in systematic review is a governance design feature
- Data-bounded AI — AI systems that operate on defined, specified datasets rather than the general internet; the governance requirement is that users understand and can verify these boundaries
- Data governance — the framework governing what data the AI can access, how it was obtained, and what uses are permitted; in clinical research AI, a non-negotiable structural constraint that the interface must communicate

---

## Evidence to draw on

### Callsign fraud detection and authentication (the primary governance case)

**The governance problem:**
- AI-driven fraud scoring for enterprise banking. The model produces behavioural risk scores (device fingerprint, location change, spend velocity, prior failures). Automated policies act on those scores (allow, block, step-up authentication). Bank risk teams under SCA and PCI DSS must be able to audit every significant fraud control decision.
- At engagement start: fraud rules were scattered across database views and configuration tables with no policy-level object, no audit trail of policy changes, no separation between current policy and historical policy. In enterprise banking demos, the interface generated governance questions rather than closing them.
- The SCA and PCI DSS requirements are specifically governance requirements: financial institutions must document and evidence fraud control decisions. An interface that cannot produce this documentation is not compliant and not procurable.

**The governance design solution:**
- **Model/policy separation as the foundational architectural decision.** The fraud scoring model and the policy layer are architecturally distinct. Analysts govern the policy layer; the model layer is below. This is the design decision that made everything else possible.
- **Policy as the central governance object.** Each policy is a self-contained entity bundling: the conditions it evaluates, the actions it triggers, the performance data showing its historical effectiveness, its relationships to other policies, and its complete change history. The governance reviewer navigates a policy and gets a complete audit picture without escalating to engineering.
- **Configuration mode vs. evaluation mode — separated.** Policies are configured in a distinct environment; the evaluation environment (which shows the effect of a policy on real or simulated transaction data) is read-only during analysis. This is a governance control: it ensures that analytical sessions do not produce untracked modifications to live fraud strategy.
- **Audit trail as design requirement from sprint 1** — every screen treated as part of the design system from the first sprint; the audit architecture was not retrofitted onto a completed design.
- Three-gesture interaction model (drag, click, draw connection): calibrated specifically to risk and compliance professionals (operations background, not engineering background); the governance tooling is usable by the people responsible for governance.

**Outcomes:**
- **Contracts with Lloyds Bank and HSBC. Client-reported. The mechanism described specifically: product managers could present a configuration experience that matched how risk teams frame fraud problems; engineering leads saw a clear path from interface behaviour to implementation; risk teams could see the audit trail that SCA and PCI DSS required.**
- **Design system used by Callsign for at least 2 years post-engagement, extended to additional security modules. Client-reported.**
- **Time to market: approximately 6 months reduction. Client/engagement-inferred; preserve "approximately" and describe mechanism (design system + frontend overlap enabling parallel delivery). Not a measured comparison.**

**The competitive vector:**
Fraud strategy configuration that is transparent, auditable, and explainable to bank risk teams under regulatory requirements — in a market where automated black-box approaches cannot satisfy enterprise banking governance requirements. The interface became the governance evidence in sales contexts.

### Puraite AI systematic review (epistemic governance — human independence from AI)

**The governance problem:**
- In systematic review methodology, a fundamental validity requirement is that inclusion and exclusion decisions are made by human reviewers exercising independent judgment. When AI performs initial screening, it introduces the risk that its decisions anchor human judgment — reviewers evaluate against the AI's recommendation rather than against the evidence itself. This is not a failure of reviewer integrity but a well-documented cognitive effect.
- Governance in this context is epistemic: the governance requirement is that the AI does not corrupt the human decision-making process even when it assists it.

**The governance design solution:**
- **Blinded mode**: AI screening decisions withheld from human reviewers during initial screening by default. The AI has screened; its decisions are stored; but they are not shown to reviewers unless they specifically request them. Reviewers evaluate against the primary evidence (title, abstract, full text), not against the AI's prior decision.
- **Confidence as explicit governance information**: when reviewers do see AI decisions, they see them as explicit confidence percentages with colour coding — not as binary include/exclude recommendations. The uncertainty is visible; the reviewer's task is informed override, not rubber-stamping.
- **Override as primary action**: the interaction design is structured so that overriding the AI is as easy as confirming it. This is a governance decision: a design that makes override cognitively expensive is a design that produces systematic under-override.
- **Direct quote in side panel**: the text the AI used to make its screening decision is visible without interaction. The reviewer can verify the AI's reasoning directly, not through summary or log.

**Outcomes:**
- Client-reported: users who had perceived Puraite as theoretical began actively using it post-redesign; client entered growth phase. **State as client-reported.**
- **Navigation restructured: 13 → 4 items** — identified outside original scope; client described as one of the engagement's most significant contributions.

### Owkin / K biomedical AI (data governance communication)

**The governance problem:**
- K operates on defined datasets — proprietary Owkin data, public biological databases, and user-uploaded institutional data. It does not have access to the general internet or to data outside these specified sources. This is a data governance requirement driven by clinical data regulations and institutional data-sharing agreements.
- Users didn't understand this. They didn't know what K knew or didn't know. They couldn't assess whether a K response was based on data relevant to their research context or was a generalised response. The governance transparency requirement — users must understand what data underpins AI outputs — was not being met.

**The governance design solution:**
- Dataset transparency as a primary design target: making which datasets K has access to visible and navigable before users form questions. The governance question "what data is this based on?" answered at the entry point, not buried in documentation.
- Data boundary communication as a feature: the constraint that K cannot answer questions outside its data boundary was reframed from limitation to trust signal — users know what K knows and can evaluate its answers accordingly.
- Data provenance visible at the point of output: K's responses include the data sources they draw from, so governance reviewers can verify that responses are consistent with the approved data-sharing agreements under which the platform operates.

**Outcomes:**
- **£5M investment, client attributed design as central. Client-reported; figure approximate.**

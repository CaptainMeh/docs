# /evidence/case-studies/government/unicef

**UNICEF**

## Classification

- **Primary case-study category:** /evidence/case-studies/government
- **Primary context:** /contexts/government-and-public-sector
- **Also-relevant contexts:** /contexts/multi-stakeholder-operational-environments
- **Connects to:** /situations/complexity/multi-role-workflows-are-fragmented, /situations/risk-and-consequence/oversight-exists-in-policy-but-not-in-workflow, /failures/workflow-failures/handoffs-lose-context, /capabilities/service-design-for-multi-role-systems, /capabilities/research-in-complex-operational-contexts

**Client:** UNICEF
**Can be named:** Yes
**Post-rollout scale:** 128 countries

---

## Client and engagement facts

- **Client:** UNICEF
- **Product:** Internal tool for project planning, approval, and reporting — used by headquarters and country/regional offices worldwide
- **Engagement structure:** Sandbox Experiments phase → 13-month design phase (weekly sprints, two 6-week breaks) → 4-year Implementation Partnership with developer team
- **Developer arrangement:** Third-party developers; team changed once, approximately one year after designs were completed
- **Workshops run:** 40
- **Documentation produced:** 35 pages (mixture of design and process documentation)
- **Dissemination videos produced:** 11
  - 6 for developers, product managers, and IT
  - 2 for future maintainers and anyone taking over the system
  - 3 for central staff and local offices
- **Can be named:** Yes

---

## Engagement scale — Sandbox Experiments phase

- **26 prototypes** produced during the Sandbox Experiments phase
- **56 stakeholders** reviewed and gave feedback on prototypes
- **4 local offices** engaged intensively during the research phase
- Survey used to collect structured stakeholder feedback after final prototype submission
- **Duration of Sandbox Experiments phase: 3 months**

---

## Operational context and starting conditions

UNICEF's internal planning, approval, and reporting tool had been developed over a long period and had accumulated significant complexity. The system was difficult to use. However, the initial framing of the problem by the central organisation was that local offices were uncooperative — that the interface was an inconvenient screen between local offices and what was needed at the other end, but that local offices understood the requirements and were simply put off by the interface.

Research revealed a fundamentally different picture.

Local offices were receiving emails instructing them to submit plans via the system. When they logged in, they encountered a cumbersome interface presenting questions that appeared arbitrary. They had no understanding of how their input was used, why it was structured the way it was, or what happened to their data at the other end. The interface communicated, unintentionally but clearly, that the central organisation did not care about the quality of their submissions — that the process was performative bureaucracy. The result was disengagement and low-quality submissions, not laziness.

This is a precise instance of the blanks phenomenon operating at an institutional level: the central organisation held the full operational rationale for every requirement, but that rationale had never been communicated to local offices, and the interface provided no mechanism for doing so. Local offices were operating with a fundamental gap in their understanding of why the system existed.

**Evidence calibration:** the starting-conditions assessment is Creative Navy-observed through research — not client-reported, not measured.

---

## The role architecture

Seven distinct role types across two institutional tiers, plus a conditional external user class.

**Central (headquarters):**
- Global Programme Director
- Planning & Reporting Manager
- Finance Manager
- Admin (special role)

**Local offices:**
- Country Programme Manager — accountable for overall submission quality and completeness; not necessarily the primary contributor of all information
- Project Director / Project Officer — contributed project-level data, progress updates, milestones, and supporting documentation
- Finance Officer (present in some offices) — owned financial sections and financial validation; not reviewing the whole submission, but financial decisions had implications for overall submission quality

**External:**
- Monitoring & Evaluation Specialists — conditional access to certain parts of the system depending on assignment

This is not a role architecture in which roles are permission variants of a single user type. Each role has a genuinely different relationship to the same submission data, different information needs, different decision rights, and different points of accountability in the workflow.

---

## The multi-role failure pattern

Many compliance failures did not originate with individual users being unable to operate the interface. They emerged at the boundaries between roles.

Specific failure patterns at handoff points:

- Information technically correct from a project perspective but incomplete from a finance perspective
- Financial review introducing changes that invalidated information entered elsewhere
- Approvals assumed to have occurred without being formally recorded in the system
- Different contributors holding different interpretations of the same reporting requirement
- Local offices not understanding why specific central requirements existed
- Central teams lacking visibility into the practical constraints faced by local offices

The Planning & Reporting Manager and Finance Manager at headquarters had distinct responsibilities even once submissions arrived: the former concerned with reporting quality, completeness, cross-country consistency, and adherence to standards; the latter focused on financial integrity, budget compliance, and governance requirements. Compliance failures could satisfy one function while failing the other.

**This is the primary analytical claim of this case study:** the 45% reduction in compliance issues is a consequence of redesigning role interactions and workflow handoffs, not of improving screen usability. The prototypes were the mechanism through which shared standards were established across roles — the interface then embedded those standards structurally.

---

## The Sandbox Experiments phase — prototypes as organisational diagnostic instrument

The Sandbox Experiments phase did work that conventional requirements analysis cannot do.

The central organisation arrived with an ossified status quo and no clear requirements — they knew the system needed to change but had no framework for specifying how, because the existing processes had not been questioned in years. Creative Navy's response was to use prototypes not as design proposals but as instruments for surfacing and testing assumptions.

By presenting 26 alternative workflows to 56 stakeholders, the process created conditions in which stakeholders were forced to explain not just how reporting worked but why it worked that way. In several cases, requirements that had long been considered mandatory could not be convincingly justified in terms of governance, decision-making, or operational value when directly questioned through a prototype. These requirements were either removed entirely, consolidated with others, or simplified substantially.

**The result was that the project did not merely streamline existing processes. It helped the organisation redefine them, reducing complexity at source rather than making complexity easier to navigate.**

This is a direct instance of rationale decay: requirements whose original purpose had become institutionally invisible, sustained by habit and assumed necessity, made visible and testable through design.

Creative Navy also worked intensively with four local offices during this phase — conveying to them what had been learned from the central organisation and observing where understanding took hold and where central requirements created genuine local costs. These insights shaped both the information architecture and the tone of the interface: not what to include, but how to present it so that local users understood their submissions as meaningful rather than administrative.

After the Sandbox Experiments phase, the central organisation ran an internal process to clarify how they wanted the system to work in the future and to agree new standards and routines. One further prototype was produced, submitted to stakeholders again, and feedback collected via survey. The design phase proper began from this agreed foundation.

**Evidence calibration:** the prototype count (26), stakeholder count (56), and local office count (4) are factual engagement metrics — Creative Navy-measured. The requirement-rationalisation outcome is Creative Navy-observed through the process. The client ran the internal standards-agreement process independently.

---

## The interface as meaning-making architecture

A distinct design contribution in this engagement: the interface was designed not only to be usable but to communicate institutional purpose.

The submission workflow was structured as follows:

1. **Orientation screen before the form** — designed to establish the importance of what the user is about to do, explain the steps, set expectations about multi-sitting completion, and frame the submission as a professional contribution rather than an administrative task.

2. **Priming questions at the start** — simple, low-cognitive-load questions at the beginning of the workflow, serving two functions: adjusting the system's behaviour for that user's context, and helping users orient their thinking before harder questions arrive later. Research showed that presenting complex questions without priming produced disengagement; a graduated entry changed this.

3. **Progressive disclosure through the workflow** — the sequencing of steps was designed to make the logic of the process legible. The connection between steps was made visible: input in one step had a stated relationship to quality in the next.

4. **Revision and quality iteration at the end** — a structured review and revision step was introduced before final submission. The mechanism: completing a second iteration of the submission, even with modest revisions, materially improved quality. Creative Navy's observation was that this extra step — representing perhaps 10% additional effort — was the difference between a so-and-so submission and a good one.

5. **Positive reinforcement for quality submissions** — feedback to local offices acknowledging and affirming quality submissions, so that users returning three months later carried a positive association with the process.

This is a behavioural architecture operating across the full submission journey: orientation → priming → progressive disclosure → quality iteration → positive reinforcement. Each element serves the next. The compliance outcome is not separable from this design logic.

**Evidence calibration:** the design decisions above are Creative Navy-designed and Creative Navy-observed as producing the intended behaviour. The 45% compliance reduction is the measured downstream outcome; the causal chain from design to compliance improvement is analytically derived, with the measured outcome as corroboration.

---

## Outcomes

### Client-measured (against pre-established operational baselines, nine months post-rollout)

**45% reduction in compliance issues**

Compliance issues were defined as reporting submissions that failed to meet UNICEF's established reporting standards, requiring follow-up from headquarters before the submission could be accepted. Examples: missing information, incomplete approval chains, incorrect categorisation, missing supporting documentation, inconsistencies between data fields.

UNICEF identified baseline operational metrics before the redesign effort began, using data already held internally to monitor reporting quality and organisational performance. Nine months after rollout, UNICEF compared reporting performance against those baselines.

Creative Navy's role: helped identify which operational metrics were most relevant to the problems uncovered during research and design. The measurements themselves were produced through UNICEF's internal reporting and performance monitoring processes.

**Measurement basis:** pre/post comparison using UNICEF's own internal operational data. Baseline established before redesign. Measurement conducted nine months post-rollout. Client-measured — not independently verified by Creative Navy.

**42% reduction in report preparation time at headquarters**

Prior to the redesign, significant effort at headquarters was spent validating submitted data, requesting corrections, resolving inconsistencies, and manually consolidating information from multiple sources. Because the redesigned system guided users through agreed processes and improved the quality and consistency of submitted information, substantially less manual intervention was required.

**Measurement basis:** pre/post comparison against the same internally established baseline. Client-measured — not independently verified by Creative Navy.

**128 countries using the system post-rollout. Client-reported milestone.** This is a deployment-scale signal comparable to WCO/IPM's 107-government figure — it establishes that the redesigned system operates across genuinely diverse institutional, linguistic, and operational contexts, not in a controlled headquarters environment.

**Causal chain note:** the compliance improvement and the time-saving are not independent outcomes. They share the same upstream cause: reducing the volume of submissions requiring correction before they could be used. The compliance figure measures the rate of defective submissions; the time figure measures the downstream labour cost of processing them. Both are consequences of the same design intervention — the workflow and standards redesign, not merely the interface improvement.

---

## Implementation Partnership and developer changeover

The developer team changed approximately one year after the designs were completed. Creative Navy proposed a structured onboarding for the new team, motivated by two explicit goals: reducing UNICEF's anxiety about continuity, and ensuring the new developers had genuine access to the context behind the design decisions rather than having to reconstruct it from documentation alone.

**Onboarding structure:**
- Session 1 (45 minutes): vision and context — what the system is for, what was learned from research with local offices. Format: 30-minute presentation, 15-minute Q&A.
- Session 2 (45 minutes): screen-by-screen rationale — explaining every screen and the reasoning behind design decisions.
- Session 3 (30 minutes): Q&A at one month into development.
- Session 4 (30 minutes): Q&A at three months into development.

A deliberate emphasis on relational quality ran through all sessions: creating psychological safety, openness, warmth, and genuine encouragement for questions. The reasoning was explicit: Creative Navy's experience indicates that some developers, having had experiences where organisations discouraged questions or withheld context, default to operating in isolation. The sessions were designed to overcompensate for this risk — making it clear that questions were not only permitted but valued.

The documentation and dissemination package (35 pages of documentation, 11 videos covering developers, future maintainers, and end users) was sufficient for the transfer to function; the sessions were an additional layer to reduce institutional anxiety and build relational conditions for good implementation.

**Evidence calibration:** the structure of the developer onboarding is factual — Creative Navy-designed and executed. The assessment that it reduced client anxiety and improved developer engagement is Creative Navy-observed, not independently measured.

---

## Proprietary concepts to develop in the page

**Domain learning** — the engagement required deep understanding of UNICEF's planning and reporting cycle, the governance structure connecting headquarters and local offices, the operational constraints of local offices in diverse country contexts, and the decision logic of each central role. This is not an obvious expert domain in the way that customs enforcement or CFD simulation is, but the domain learning requirement was substantial: without understanding why each requirement existed and what it produced at the other end, it was impossible to design an interface that communicated purpose rather than just structure.

**Blanks phenomenon** — operating at an institutional level. Local offices had a fundamental gap in their understanding of why the system existed and what their input produced. The central office had a fundamental gap in their understanding of the operational reality of local offices. Neither gap was visible from inside the organisation; both were visible through research. The interface design was partly a mechanism for filling both gaps simultaneously — structuring the workflow so that meaning flowed through it rather than being absent from it.

**Rationale decay** — requirements whose original justification had become institutionally inaccessible, sustained by habit and inertia. The prototyping process was the instrument that made this visible. The reduction in requirements complexity at source is the outcome.

**Tension-driven reasoning** — primary tension: what the central organisation needed for governance, comparability, and planning versus what local offices experienced as legitimate process burden. Secondary tension: making the system comprehensive enough to serve headquarters requirements while making it simple enough that local offices engaged with it willingly and submitted quality information. These tensions could not be resolved by asking stakeholders to negotiate; they were resolved by making the consequences of different design decisions visible through prototypes.

**Option space mapping** — 26 prototypes across the Sandbox Experiments phase is the highest prototype count in the portfolio. Each prototype explored alternative workflows and presented them to stakeholders as a concrete question: "if the system worked this way, would this serve your needs, and why?" The process was deliberately structured to generate a universe of what could be, not just to converge on what was needed.

**Progressive specification** — from research findings and baseline measurement, through prototype-driven standards agreement, through 13 months of design, through documentation and dissemination, through 4-year implementation partnership with structured developer onboarding.

**Inform–Prevent–Correct** — applicable to the submission workflow design. The orientation screen and priming questions are the Inform layer. The validation rules and workflow structure are the Prevent layer. The revision and quality iteration step at the end is the Correct layer. The positive reinforcement mechanism operates at the Inform layer of the next cycle. Assess for explicit inclusion in the page.

---

## Connections to repository pages

**Contexts:**
- `/contexts/government-and-public-sector` — primary context. UNICEF substantially strengthens this page, which currently rests on WCO/IPM alone. Two major intergovernmental engagements establishes the government and public-sector context as a genuine cluster.
- `/contexts/multi-stakeholder-operational-environments` — seven role types across two tiers plus conditional external users; handoff failures as the primary compliance mechanism

**Situations:**
- `/situations/complexity/multi-role-workflows-are-fragmented` — the role architecture and handoff-point failure pattern
- `/situations/delivery-and-execution/stakeholders-cannot-align-on-direction` — central and local offices with incompatible mental models; prototypes as the resolution mechanism
- `/situations/risk-and-consequence/oversight-exists-in-policy-but-not-in-workflow` — approval chains assumed to have occurred without being formally recorded; governance requirements not operationally embedded
- `/situations/delivery-and-execution/nobody-can-explain-why-the-experience-feels-hard` — central office attributed the problem to user laziness; research revealed a comprehension and meaning gap

**Failures:**
- `/failures/workflow-failures/workflows-break-across-roles` — the primary failure mechanism behind the 45% compliance figure
- `/failures/workflow-failures/handoffs-lose-context` — financial changes invalidating project information; approvals assumed without formal record
- `/failures/governance-and-behaviour-failures/good-behaviour-is-not-defined-explicitly` — requirements existed but their rationale was institutionally inaccessible; standards not agreed across tiers
- `/failures/governance-and-behaviour-failures/oversight-is-symbolic-not-functional` — approval chains present in the process but not enforced or recorded by the interface

**Capabilities:**
- `/capabilities/service-design-for-multi-role-systems` — role architecture design, handoff point redesign, shared ownership workflow structure
- `/capabilities/workflow-and-task-structure-redesign` — the submission workflow as a behavioural architecture across five structured stages
- `/capabilities/research-in-complex-operational-contexts` — research across headquarters and four intensively-engaged local offices; the institutional comprehension gap as a research finding rather than a design assumption

**Outcomes:**
- `/outcomes/better-alignment-across-teams` — the prototyping process as alignment mechanism; standards agreed before being embedded in the system
- `/outcomes/reduced-error-risk` — 45% compliance reduction traced to handoff failure redesign
- `/outcomes/verifiable-performance-claims` — client-measured against pre-established baselines; nine-month measurement window; Clean causal chain

**Method pages:**
- `/method/sandbox-experiments` — 26 prototypes, 56 stakeholders, prototypes as organisational diagnostic instrument, rationale decay surfaced through design, requirements rationalisation at source
- `/method/concept-convergence` — standards-agreement process; the single additional prototype submitted after internal UNICEF standards process
- `/method/iterative-system-building` — 13 months weekly sprints with two 6-week breaks
- `/method/organizational-integration` — 35 pages documentation, 11 dissemination videos across three distinct audiences, design rationale embedded for multiple future audiences
- `/method/implementation-partnership` — 4-year partnership; structured developer onboarding after mid-partnership team change; psychological safety as an explicit implementation condition

**Glossary:**
- `/glossary/our-concepts/blanks-phenomenon` — institutional-level comprehension gap between tiers; strongest public-sector instance of this concept in the portfolio
- `/glossary/our-concepts/rationale-decay` — requirements sustained by institutional habit; made visible through prototype-based questioning
- `/glossary/our-concepts/domain-learning` — UNICEF planning and governance cycle, role decision logic, country office operational constraints
- `/glossary/our-concepts/tension-driven-reasoning` — governance completeness vs. local process burden; the central tension that shaped the submission workflow design
- `/glossary/our-concepts/option-space-mapping` — 26 prototypes; highest prototype count in the portfolio

---

## Significance for the repository

**Strengthens `/contexts/government-and-public-sector`** — this page currently rests on WCO/IPM alone. UNICEF is a second major intergovernmental engagement, structurally different in important ways: WCO/IPM is a field operations and intelligence coordination platform; UNICEF is an internal governance and reporting tool. The 128-country deployment is a deployment-scale figure comparable to WCO/IPM's 107 governments, which means both pillars of the government context now carry a verifiable multi-jurisdictional scale signal. Together they establish that Creative Navy's government and public-sector capability covers both external-facing operational systems and internal institutional governance systems. The page should be updated once these notes are confirmed.

**Adds a new mechanism to the multi-role failure cluster** — the existing multi-role evidence (IDEXX, Triopsis, Akrivia, WCO/IPM) is primarily about incompatible cognitive requirements or data model divergence across roles. The UNICEF case adds a different mechanism: compliance failure caused by incompatible institutional mental models — roles that understood the same requirements differently because the rationale behind requirements had never been shared across the organisational boundary.

**Adds the strongest example of prototypes as organisational diagnostic instrument** — 26 prototypes used to surface rationale decay and produce standards agreement is qualitatively different from prototyping as design exploration. No existing case study in the portfolio uses the Sandbox Experiments phase in this way at this scale.

**Adds the developer changeover as a stress-test of Implementation Partnership** — the structured re-onboarding of a new third-party development team mid-engagement, with explicit attention to psychological safety as a knowledge-transfer condition, is not represented elsewhere in the portfolio. It is the most adverse test of whether an Organizational Integration package actually transfers design reasoning.

**Adds client-measured compliance outcomes to the portfolio** — calibrated against pre-established operational baselines, with a defined nine-month measurement window, using UNICEF's own internal reporting data. The causal chain is unusually clean: the compliance reduction is traceable to a specific design mechanism (handoff failure redesign and standards embedding), not to a general interface improvement.

---

## Confirmed facts (previously open, now resolved)

- Sandbox Experiments phase duration: 3 months
- UNICEF can be named in prose (these case studies do not use client logos)
- Product description can be made as specific as the engagement warrants
- 26 prototypes / 56 stakeholders / 4 local offices — all confirmed accurate and attributable
- Post-rollout scale: 128 countries (client-reported)

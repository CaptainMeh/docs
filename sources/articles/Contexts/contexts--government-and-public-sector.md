# `/contexts/government-and-public-sector`

---

## Domain vocabulary

- Member administration / member state — the national administrations that are an intergovernmental body's member organisations (WCO)
- Country office / headquarters tier — the two-tier structure of an international organisation operating through local offices reporting to a central body (UNICEF)
- Public-private consortium — a delivery vehicle in which government, private capital, and commercial beneficiaries jointly commission and build a public system (Neugo); rollout and ownership follow the consortium's structure, not a single client's product organisation
- Adoption density — the degree to which all stakeholder groups across all jurisdictions are actively using the platform; low adoption by any group degrades the whole network's value
- Field conditions — the physical operating conditions of frontline officers: ports, airports, land border posts; variable connectivity; mixed device fleets; limited time per inspection
- Multi-jurisdictional deployment — operating across fundamentally different legal frameworks, institutional cultures, device fleets, languages, and operational practices
- Cross-tier comprehension gap — the breakdown that occurs when one organisational tier holds the rationale for a process and the other tier executes it without access to that rationale; the central mechanism in the UNICEF engagement
- Multi-party process coordination — the design problem of moving a single case through the back-and-forth of genuinely different parties (applicant, adviser, case worker, issuing authority) toward a submittable standard; the central mechanism in the Neugo engagement
- Data pipeline to downstream systems — a public platform whose output is clean, structured data ingested by a separate authority's system of record, where the decision is actually made (Neugo feeds the Home Office's border-force platforms)
- Ownerless governance / absent product owner — a delivery structure in which no party takes ownership of decisions or of understanding the system; requirements are delegated directly from beneficiaries to design and development, and the nominal product manager functions only as a conduit
- Intergovernmental organisation — an organisation composed of member states or operating across national offices; governance is by consensus or central mandate, and rollout follows governance structures, not product release cycles
- Role-based access / data separation — the non-negotiable governance requirement in enforcement and governance platforms; sensitive data classes cannot be mixed
- Compliance standard — the organisation's established criteria a submission or record must meet to be accepted (UNICEF); failures against it generate rework, clarification cycles, and governance cost
- WCO instruments — SAFE Framework of Standards, Revised Kyoto Convention, Harmonised System; the legal and operational framework within which the IPM platform operates
- Training and process scalability — the degree to which a platform can be adopted across jurisdictions, offices, or firms without requiring consistent training infrastructure or shared procedural understanding; at scale, neither can be assumed uniform
- Bandwidth optimisation — designing for variable and unreliable connectivity as a baseline condition, not an edge case
- Recognition over recall — the cognitive design standard that enables use under time pressure and divided attention
- Workaround indicators — parallel spreadsheets, email chains, shadow processes, and high rates of corrected/resubmitted work that emerge when a deployed platform is not meeting users' needs; the diagnostic signal both intergovernmental engagements started from

---

## The distinct design challenges in this context

This context contains three structurally different problems, each evidenced by one engagement. The page should hold the distinctions rather than blurring them into a generic "government software is hard" claim. The organising axis is the *type of coordination problem*, not the number of jurisdictions involved.

### Challenge 1 — Adoption under variable operating conditions (WCO/IPM)

In a network-effect enforcement platform, the value of the system depends on adoption density across all groups and all jurisdictions. The design constraint is that whatever the interface requires — training, connectivity, time, attention — must be achievable across the full range of member administrations, set by the most constrained conditions, not the average. A system that requires reliable connectivity or uniform training infrastructure will not be adopted uniformly across 100+ administrations with genuinely different institutional capacities, and non-adoption is the primary failure mode.

### Challenge 2 — Cross-tier comprehension and compliance (UNICEF)

In an internal governance and reporting system spanning a headquarters tier and a local-office tier, the design constraint is that the two tiers hold different and incomplete models of the same process. Headquarters holds the rationale for every reporting requirement — governance, cross-country comparability, planning, financial oversight — but that rationale is not visible to local offices, who experience the requirements as arbitrary bureaucracy. The interface, if it presents requirements without communicating their purpose, actively reinforces the belief that the central organisation does not care about quality. Compliance failure is the primary failure mode, and it originates not at the level of individual usability but at the boundaries between roles and tiers.

### Challenge 3 — Multi-party public-private coordination without an owner (Neugo)

In a public-private platform built net-new to coordinate citizens, intermediaries, and the state, the design constraint is that the system must move a single case through the back-and-forth of genuinely different parties — applicants (often travelling as a party rather than individually), advisers with their own established tooling, case workers who need to be actively prompted on what to do next, and the issuing authority that consumes the platform's output as downstream data. Two conditions sharpen this. First, the platform's value event is a *submittable, complete case*, not the open-ended process of preparing one — so the design must drive cases toward that state rather than passively hosting work. Second, delivery had no clear product owner: requirements flowed directly from the beneficiary firms to design to development, with the nominal product manager acting only as a conduit, which made the design itself — and the reasoning recorded around it — the only durable carrier of intent for a future owner who did not yet exist.

These three challenges share a common root that the page can name: in government and public-sector systems, the design problem is rarely confined to a single user at a single screen. It is the coordination of genuinely different actors — across jurisdictions, across institutional boundaries, across organisational tiers, or across public-private lines — who cannot be standardised into a single user model, frequently under governance structures that do not follow ordinary product release cycles.

---

## Evidence to draw on

### WCO/IPM — external-facing field operations platform

**Context:**
- World Customs Organization (WCO) — intergovernmental organisation based in Brussels, covering most international trade
- IPM: customs intelligence platform coordinating intellectual property rights enforcement between customs officers and rights holders across member administrations
- Three user groups: frontline inspection officers (ports, airports, land borders), intelligence analysts (pattern analysis, historical cases), rights holder brand protection and legal teams (filing information, monitoring enforcement)
- Platform was already in production when Creative Navy engaged. Low adoption across many administrations. Parallel spreadsheets and email chains had emerged — diagnostic indicators that the system was not being used as intended.
- The network effect is structurally significant: officer adoption determines the quality of seizure records entering the network; rights holder adoption determines the quality of intelligence available to officers. Low adoption on either side degrades the platform's value for both.

**Engagement:**
- Duration: 7 months
- All five phases of Creative Navy's Critical Systems Design method applied
- Domain learning: WCO instruments (SAFE Framework, Revised Kyoto Convention, Harmonised System), alert and seizure record logic, the distinct operational relationships of all three user groups with the platform
- Research: interviews, workflow mapping, remote observation with WCO teams and selected member administrations; three user groups clarified through research rather than assumed from the brief
- Cognitive design principles applied systematically: recognition over recall, reduced choices per screen, progressive disclosure, contextual micro-hints on first use of complex actions
- Bandwidth optimisation built in for variable connectivity across member states
- Role-based access and data separation between operational data and rights holder information treated as non-negotiable design constraints
- Usability testing: **47 participants across Italy, Romania, Uzbekistan, Algeria, and Spain.** The geographic spread was deliberate — confirming that the multi-jurisdictional design held under genuinely different operational contexts, not just under controlled conditions.

**Outcomes — all client-reported unless otherwise stated:**
- **78% reduction in officer training costs, based on reduced training hours. Client-reported.**
- **200% increase in rights holder user sign-ups. Client-reported.**
- **67% increase in platform use among rights holders; 20% increase among officers. Client-reported.**
- **107 governments signed up to the system. Client-reported milestone.**
- **2000+ officers using the system in field operations. Client-reported.**
- **Decrease in support tickets and associated costs. Direction confirmed by client; magnitude not quantified.**
- INTERPOL Secretary General Jürgen Stock provided an external endorsement — available in case study file. Notable because INTERPOL operates in the same enforcement ecosystem and has direct field visibility of the platform's performance. This is third-party endorsement, not client self-report.

### UNICEF — internal institutional governance and reporting tool

**Context:**
- UNICEF — international organisation operating through country and regional offices reporting to headquarters
- Product: internal tool for project planning, approval, and reporting, used across both organisational tiers
- Seven distinct role types across two tiers, plus a conditional external user class: at headquarters — Global Programme Director, Planning & Reporting Manager, Finance Manager, Admin; at local level — Country Programme Manager, Project Director/Officer, Finance Officer (in some offices); external — Monitoring & Evaluation Specialists with conditional access
- The system had accumulated significant complexity over a long development history. The central organisation's initial framing was that local offices were uncooperative and put off by a cumbersome interface they otherwise understood.
- Research revealed a fundamentally different picture: local offices had no understanding of how their input was used or why it was structured as it was. The interface communicated institutional indifference — that the process was performative bureaucracy — which produced disengagement and low-quality submissions. This is a cross-tier comprehension gap, not a usability problem in isolation.

**Engagement:**
- Sandbox Experiments phase: 3 months; **26 prototypes reviewed by 56 stakeholders; 4 local offices engaged intensively**
- Design phase: 13 months, weekly sprints with two 6-week breaks
- Implementation Partnership: 4 years with a third-party developer team; team changed once, approximately a year after designs were completed, with a structured re-onboarding
- 40 workshops; 35 pages of documentation; 11 dissemination videos across three audiences (developers/PMs/IT, future maintainers, end users)
- The prototypes functioned as an organisational diagnostic instrument: presenting 26 alternative workflows forced stakeholders to justify why each requirement existed. Several long-standing "mandatory" requirements could not be justified and were removed, consolidated, or simplified — reducing complexity at source rather than making complexity easier to navigate.
- Once standards were agreed across tiers, they were embedded in the system through workflows, validation rules, information architecture, and interaction design. Many ambiguities that had previously generated compliance failures were eliminated before users began entering data.

**Outcomes — client-measured against pre-established operational baselines, nine months post-rollout:**
- **45% reduction in compliance issues. Client-measured.** Compliance issues = submissions failing UNICEF's established reporting standards (missing information, incomplete approval chains, incorrect categorisation, missing supporting documentation, field inconsistencies) and requiring headquarters follow-up before acceptance. Measured against a baseline UNICEF established before redesign, using internal reporting data. Creative Navy helped identify which metrics were most relevant; UNICEF produced the measurements.
- **42% reduction in report preparation time at headquarters. Client-measured.** The time headquarters needed to prepare consolidated reports once submissions were received, against the same baseline. The reduction follows from less manual validation, correction-chasing, and inconsistency resolution.
- **128 countries using the system post-rollout. Client-reported milestone.** A multi-jurisdictional deployment-scale figure comparable to WCO/IPM's 107 governments.

**Causal note for the UNICEF figures:** the compliance reduction and the time saving are not independent outcomes. Both follow from reducing the volume of defective submissions requiring correction. Both are consequences of the workflow and standards redesign — the redesign of role interactions and handoff points — not of screen usability improvement alone. This is the analytically important claim and should be stated explicitly wherever the figures appear.

### Neugo — public-private, multi-party case-management platform built net-new

**Context:**
- Neugo — a UK visa application case-management platform. It connects visa seekers with the advisers who prepare their applications (legal consultants, family offices) and produces clean, submittable data that the Home Office's downstream border-force platforms ingest; the visa decision is made in those downstream systems, not in Neugo. Neugo handles the human-collaboration layer — the back-and-forth that takes a case to a submittable standard.
- Single-jurisdiction (UK). Public-private: the build was commissioned and delivered through a public-private consortium.
- The design problem is multi-party coordination, not the issuing decision: applicants (often travelling as a party), advisers working in their own established tooling (frequently Excel), case workers who need active prompting, and the Home Office as the downstream consumer of the data.

**Engagement structure — three separate engagements over roughly three years:**
- **Engagement 1 (7 weeks):** an opportunity-framing and lobbying engagement, commissioned by a consulting company that had identified the opportunity. Creative Navy worked with the Home Office and four legal firms to produce a visionary, conceptual design — a value/desirability mapping and a clickable Figma prototype — whose purpose was to convince backers to fund and commission the build. Sandbox Experiments were run here in a value-elicitation mode (provoking stakeholders to imagine value while tethering it to real operating conditions), not in the usual requirements-discovery mode.
- **Engagement 2 (3 months):** the consortium returned to build the system. Creative Navy produced the full platform design plus Implementation Partnership for a development company. Requirements flowed directly from the beneficiary legal firms to design to development; designs were exposed to the firms at three checkpoints (the first two changed the design, the third gave the green light). There was no real product owner — the nominal product manager functioned only as a conduit — so Organizational Integration was prepared for a future owner: documentation plus three videos covering the architecture, the design-language decisions, and the principles to apply if the system were to grow. The system went live roughly eight months later.
- **Engagement 3 (post-launch audit, ~1 year after launch):** Creative Navy was brought back to assess new feature needs and whether the platform should evolve, take a new shape, or change more radically.

**Domain and method notes:**
- Constraint respecting: the platform integrated everything from the legal firms' existing tooling except a small number of fields unique to one single firm — preserving what worked without over-generalising one office's idiosyncrasy into the shared system.
- Workflow design: the system actively prompts case workers on what to do next rather than waiting on initiative, because the value event is a submittable, complete case.
- Concept Convergence here was prioritisation only — option space mapping plus a desirability × feasibility filter. It did **not** involve tension-driven reasoning or a competitive vector. Do not attribute the canonical Concept Convergence mechanism to this engagement.

**Outcomes — attribute precisely:**
- **The system was commissioned to be built.** The engagement-1 prototype contributed to that outcome: stakeholders told Creative Navy the design accounted for **roughly 30% of the decision factors**, and that **dedicated demo sessions were scheduled around the prototype** as part of the lobbying process. **Client-reported.** State it as a substantial client-reported component of a multi-factor commissioning decision built partly around demo sessions of the prototype — **not** as the design securing the commission.
- **At the audit, 15 legal firms were relying on Neugo in production, and had begun replacing some of their internal processes with the platform's features — reproducing their own setup inside Neugo in an improved form. Creative Navy-observed during the audit.** This is the strongest non-measured evidence category: an independent return engagement finding observed reliance and process replacement, not a self-report at delivery. The four legal firms from engagement 1 carried through as engagement-2 beneficiaries and were among the fifteen.
- The ~70% easy-converge / ~15% dropped split from engagement 2's convergence is Bob's recollection, not a measured figure — describe the shape, not precise percentages, if cited at all.

**Naming:** the **Home Office** and the platform name (**Neugo**) may be named. The **consulting company** (engagement 1) and the **development company** (engagement 2) **must not** be named.

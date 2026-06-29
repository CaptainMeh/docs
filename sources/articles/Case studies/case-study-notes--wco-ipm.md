# /evidence/case-studies/government/wco-ipm

**World Customs Organization / IPM**

## Classification

- **Primary case-study category:** /evidence/case-studies/government
- **Primary context:** /contexts/government-and-public-sector
- **Also-relevant contexts:** /contexts/multi-stakeholder-operational-environments
- **Connects to:** /situations/delivery-and-execution/design-does-not-survive-development, /situations/delivery-and-execution/research-is-not-informing-decisions, /evidence/outcomes/capability-democratisation, /evidence/outcomes/scaling-without-training-dependency

## Client and engagement facts

- **Client:** World Customs Organization (WCO) — intergovernmental organisation, Brussels
- **Product:** IPM — customs intelligence platform coordinating intellectual property enforcement between customs officers and rights holders across member administrations
- **Engagement duration:** 7 months
- **Team:** Creative director, researcher, UX designer, systems architect, UI designer, project manager, program director
- **Engagement type:** Complex government system redesign; Creative Navy engaged as public sector UX agency to rescue a platform already in production with low adoption

---

## Operational context

IPM was already in production and covered an intergovernmental community overseeing most international trade. Adoption remained low across many administrations. Officers and rights holders described the system as difficult to navigate, slow to operate during inspections, and hard to learn. The workaround symptoms were present: parallel spreadsheets and email chains had emerged around the platform — a diagnostic indicator of a system that users have decided is more effort than it is worth.

The system's regulatory landscape included WCO instruments: the SAFE Framework, the Revised Kyoto Convention, and the Harmonised System. Any change to the interface or workflows had to respect legal obligations, data protection requirements, and the expectations of member administrations. Role-based access and separation between operational data and rights holder information were non-negotiable constraints.

Field conditions varied significantly across member states: frontline inspection officers worked in ports, airports, and land border posts with unreliable connectivity, mixed device fleets, and limited time per inspection. The platform had to function under these conditions, not just in controlled environments.

Three distinct user groups with genuinely different operational relationships to the same system:
- Frontline inspection officers — needed to check shipments quickly against alerts and record outcomes under time pressure
- Intelligence analysts — required structured access to historical cases, seizure patterns, and rights holder alerts
- Rights holder brand protection and legal teams — needed clear paths to file information and review enforcement activity

This qualifies as a critical system in the Critical Systems Design sense: the intelligence network's value depends entirely on adoption density across all three groups. Low adoption on either side degrades the whole system. The interface quality determines whether the network is functional or nominal.

---

## Situations this engagement addresses

Connections to site structure:

- `/situations/delivery-and-execution/design-does-not-survive-development` — system already in production; the design had not produced the operational outcome it needed to
- `/situations/delivery-and-execution/nobody-can-explain-why-the-experience-feels-hard` — officers described IPM as difficult without being able to specify causes; research made the causes explicit
- `/situations/delivery-and-execution/research-is-not-informing-decisions` — before Creative Navy's involvement, WCO lacked evidence to prioritise core inspection workflows over secondary features
- `/failures/cognitive-failures/too-much-attention-is-required-for-routine-use` — multiple screens, frequent section switching, high training burden
- `/failures/workflow-failures/tasks-span-too-many-screens-or-steps` — core inspection workflows required several screens and frequent section switching

---

## Phases applied

All five phases are present. Three are named in the existing case study; two need to be named in the AI pages version.

**Sandbox Experiments** — named in existing text. Interviews, workflow mapping, and remote observation conducted with WCO teams and selected member administrations. Three user groups clarified. Concrete barriers to use documented. Research framed adoption issues in operational terms rather than abstract usability language, creating a shared view of the problem across operational units, IT teams, and programme leadership. Produced the evidence base for prioritising core inspection workflows and rights holder alert flows before secondary features.

**Concept Convergence** — named in existing text. Information architecture rebuilt around real inspection and case management flows rather than internal system structures. Cognitive design principles applied systematically: recognition over recall, reduced choices per screen, progressive disclosure, contextual micro-hints appearing on first use of complex actions. Tension-driven reasoning applied to multilingual requirements and the diversity of member state contexts. Terminology normalised while preserving capacity for local variation.

**Iterative System Building** — not named in existing text. Detailed design work across three distinct user groups. Context-aware data presentation giving officers immediate access to relevant rights holder information, recent alerts, and historical cases when opening a shipment or product record. Pattern analysis for analysts without leaving primary workspace. Filing and monitoring access for rights holders. Role-based views, data separation between operational data and rights holder information, bandwidth optimisation for inconsistent connectivity, accessibility compliance for public sector digital services. Validated through usability testing with 47 participants from Italy, Romania, Uzbekistan, Algeria, and Spain under realistic conditions — geographic spread confirming that the multilingual, multi-jurisdictional design held across genuinely different operational contexts.

**Organizational Integration** — not named in existing text. Design system construction. Documentation and training materials prepared for global distribution, structured so member administrations could adopt at their own pace. Terminology normalised for translation and reuse across administrations. Documented product model structured for use in future WCO procurement, technical governance, and training work.

**Implementation Partnership** — named in existing text. Rollout followed WCO governance structures. Active oversight during deployment across member administrations.

---

## Proprietary concepts to include

- **Domain learning** — directly applicable and important. Creative Navy needed to become productive in customs intelligence workflows, WCO instrument structures (SAFE Framework, Revised Kyoto Convention, Harmonised System), alert and seizure record logic, and the distinct operational relationships of three user groups with the same system. Specialist domain with no off-the-shelf familiarity.
- **Tension-driven reasoning** — named once in existing text; needs fuller integration. Primary tensions: operational simplicity vs. system completeness; single unified interface vs. diverse jurisdictional and linguistic contexts; field speed vs. data governance and role-separation requirements.
- **Constraint respecting** — WCO legal obligations, data protection requirements, member administration expectations, role-based access requirements, and bandwidth constraints were all respected as real design constraints, not circumvented.
- **Option space mapping** — applicable during Concept Convergence, particularly for the information architecture restructuring and the intelligence feature design where multiple approaches to context-aware data presentation would have been explored.
- **Progressive specification** — the movement from research findings and barrier documentation through to information architecture, interaction design, design system, and documentation for global rollout is a clear progressive specification sequence.
- **Blanks phenomenon** — applicable: WCO had been operating IPM without a clear empirical picture of why adoption was low or what different user groups actually needed. The research phase filled structural gaps in the organisation's product understanding.
- **Microtask analysis** — applicable: the cognitive load reduction work (reducing choices per screen, eliminating unnecessary steps, progressive disclosure) implies detailed microtask-level analysis of inspection and case management flows.

---

## Competitive vector

*Constructed from the product context and the design work performed. Not independently verified with WCO.*

IPM's function depends entirely on network participation. A customs intelligence platform coordinating intellectual property enforcement between customs officers and rights holders has no value if either side doesn't use it. Officer adoption determines the quality of seizure records and alert responses entering the network. Rights holder adoption determines the quality of intelligence available to officers. Low adoption on either side degrades the whole system — not just the experience of the non-adopting group.

The competitive vector is adoption density across a highly fragmented global user base: officers working in ports, airports, and land border posts across jurisdictions with different languages, device fleets, bandwidth conditions, and institutional cultures. A system requiring significant training will not be adopted consistently across 100+ administrations. A system requiring reliable connectivity will not be used in field conditions. A system presenting information calibrated for one administrative culture will fail in others.

The design work resolved the tension between operational simplicity and system completeness. That resolution is the competitive vector: a platform usable enough under real field conditions that officers across diverse jurisdictions choose to use it rather than route around it — which is what makes the intelligence network functional rather than nominal.

The 78% training cost reduction and the 200% rights holder sign-up increase are the two numbers that confirm this vector from different directions: one measuring friction reduction on the officer side, the other measuring the network effect on the rights holder side.

---

## Outcomes

### Client-reported (WCO reported to Creative Navy)

- 107 governments signed up to the system — milestone figure; IPM remains in active use
- 200% increase in rights holder user sign-ups
- 20% increase in platform use among officers
- 67% increase in platform use among rights holders
- 78% reduction in training costs for officers (based on reduced training hours)
- 2000+ officers using the system in field operations
- Decrease in support tickets and associated costs — direction confirmed, magnitude not quantified

### Observed in usability testing

- 47 participants from Italy, Romania, Uzbekistan, Algeria, and Spain
- Workflows validated as faster and less error-prone under realistic conditions
- Multi-jurisdictional design held across genuinely different operational contexts

### Observed by Creative Navy

- Member administrations reported smoother officer onboarding and reduced reliance on workaround processes (parallel spreadsheets, email chains)
- Rights holders gained more direct access to filing and monitoring tools
- Clearer audit trails for enforcement actions reported by member administrations

### Intangible resources transferred (Organizational Integration phase outcome)

- Judgment about what matters in global border management systems serving diverse member states
- Shared product intuition about how customs intelligence platforms should balance operational speed with data governance
- Reasoning capability to extend the system across new enforcement scenarios without fragmenting the user experience
- Documented product model usable in future WCO procurement, technical governance, and training work

---

## What is not known

- Current adoption figures beyond the 107-government milestone

---

## Third-party endorsement

Quote from Jürgen Stock, Secretary General, INTERPOL: confirms IPM as an effective tool for customs to combat IPR infringements. Highest-authority external signal in the case study set; INTERPOL's endorsement is meaningful because INTERPOL operates in the same enforcement ecosystem and has direct visibility of how the platform performs in field operations.

---

## Connections to other site sections

- `/contexts/government-and-public-sector` — primary context page
- `/evidence/outcomes/scaling-without-training-dependency` — 78% training cost reduction; 107-government deployment without requiring uniform training infrastructure
- `/evidence/outcomes/capability-democratisation` — officers across diverse jurisdictions able to use the system without specialist training
- `/evidence/outcomes/reduced-maintenance-and-downtime` — reduced support tickets; reduced workaround processes
- `/method/iterative-system-building` — multi-user-group design under real operational constraints, validated across five countries
- `/method/organizational-integration` — documentation and training materials structured for global distribution; terminology normalisation across multilingual contexts
- `/method/implementation-partnership` — rollout following WCO governance structures
- `/glossary/our-concepts/domain-learning` — customs intelligence domain, WCO instruments, multi-jurisdictional enforcement workflows
- `/glossary/our-concepts/tension-driven-reasoning` — operational simplicity vs. system completeness; unified interface vs. jurisdictional diversity
- `/glossary/our-concepts/constraint-respecting` — legal obligations, data protection, role-based access, bandwidth constraints

---

## Lineage and longitudinal evidence

WCO returned to Creative Navy approximately three years after the original assignment, to take the educational part of IPM and expand it into a spin-off product with a separate user base and a distinct business case.

**Claim type: independent evolution, then return.**

- *Independent evolution:* WCO's own team built the MVP of the educational spin-off themselves, then hired Creative Navy to take it to the next stage. The seed feature was extended into a standalone product by the client before Creative Navy re-engaged. **Client-reported.**
- *Original platform in service:* the educational feature was a live part of the original IPM platform and the basis for the spin-off, so the original platform remained in service at the point of return. **Observed/implied.**
- *Return engagement:* Creative Navy was brought back to develop the client-built MVP further — a return engagement, distinct from the independent-evolution step that preceded it.
- *Independence:* independent evolution (the client built the MVP), then a return.

**Evidential note:** the 78% training-cost reduction figure (client-reported) is unaffected by the spin-off and remains as previously calibrated.

**Downstream use:** entry in `/evidence/longitudinal` (independent evolution exemplar); feeds `/method/implementation-partnership` and `/contexts/government-and-public-sector` (WCO is currently the single seed there — this deepens it).

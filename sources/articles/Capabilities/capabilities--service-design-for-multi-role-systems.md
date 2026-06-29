# `/capabilities/service-design-for-multi-role-systems`

---

## Domain vocabulary

- Service design — the practice of designing experiences across the full set of touchpoints, roles, and organisational contexts that a service involves; distinct from interface design for a single user type
- Service blueprint — a structured map showing front-stage interactions (what each role does), back-stage processes (what supports those interactions), and the connections between them; the primary diagnostic tool for multi-role failure points
- Journey map across roles — mapping the end-to-end experience for each role separately, then overlaying them to identify where they interact and where they conflict
- Role-differentiated interface — an architecture that provides different interaction models for different roles, while maintaining coherent shared data and system state
- Handoff point — the moment where work, context, or responsibility passes from one role to another; the primary failure location in multi-role systems
- The one-interface question — the architectural decision of whether to serve multiple roles through a single unified interface or through separate role-differentiated surfaces; depends on whether the roles' cognitive requirements are compatible or incompatible
- Physical environment by role — where each role uses the system (desk, field, vehicle, clinic room) is a primary determinant of what the interface must do; the same task has different interface requirements in different physical contexts
- Touchpoint coherence — the principle that the same entity (a job, a property, a patient, a shipment) must read consistently across all role-specific surfaces, even when the interaction models differ
- Role-based access and governance — the structural requirement that roles have different permissions, not just different views; in some multi-role systems this is a regulatory requirement
- Adoption density — in network-effect services (WCO/IPM), low adoption by any stakeholder group degrades the value of the platform for all groups; the service design must achieve adoption across all roles, not just the primary user
- Organisational choreography — the coordinated sequence of actions across roles that produces the service outcome; service design maps this choreography explicitly
- Shared-ownership task — a single deliverable (here, a reporting submission) co-produced by several roles working in parallel rather than completed end-to-end by one person; the service design challenge is coordinating contributions whose correctness is interdependent
- Definitional alignment — a shared, explicit understanding across roles of what a correct output requires; its absence is a distinct multi-role failure mode from cognitive incompatibility, because the roles may each be individually competent yet hold incompatible interpretations of the same standard
- Cross-tier service — a service spanning two organisational levels (e.g. headquarters and local offices) where one tier holds the rationale for requirements the other tier executes; the design must make that rationale legible at the point of work, not assume it travels with the requirement

---

## Evidence to draw on

### IDEXX Animana (incompatible cognitive requirements — architectural conclusion)
- **Research: 35 clinics, 150+ participants, 2 weeks, 3 countries (Netherlands, UK, Germany).** 4 role types: vets, nurses, reception staff, administrative staff, from first-week users to ten-year veterans.
- The central service design finding: reception and clinical roles have incompatible cognitive requirements. This is not a statement about preferences; it is a statement about the structure of their work.
  - **Reception**: ambient multitasking — divided attention across multiple simultaneous demands, context switches driven by arrivals and calls, tasks measured in seconds and minutes. Primary requirement: breadth and speed.
  - **Clinical**: focused sequential attention — one patient per consultation, deep context sustained across the appointment, errors with clinical consequences. Primary requirement: depth and accuracy.
- These are different cognitive modes, not different preferences within the same mode. A unified interface optimised for one systematically degrades the other. No feature-level adjustment resolves this; the architecture must reflect it.
- Service design conclusion: **develop distinct interfaces for reception and clinical roles.** This is the most architecturally significant recommendation in the multi-role case study set — and it came from evidence, not from a product preference.
- Real-time protocol adaptation during fieldwork: when handwritten workarounds appeared in multiple clinics (checklists taped to monitors, printed reference sheets), field protocols were updated to probe those patterns. The workarounds were not noise; they were the signal that the unified interface was failing both roles simultaneously.
- Client-reported 6 months post-engagement: recommendations are well-grounded; some implemented, remainder planned.

### WCO/IPM (multi-role intergovernmental service at scale)
- **Three distinct service roles: frontline inspection officers (ports, airports, land borders), intelligence analysts (pattern analysis, historical cases), rights holder brand protection teams (filing information, monitoring enforcement activity).** These are not variants of the same user type — they represent different organisations with different legal relationships to the platform.
- **The network effect constraint**: the platform's enforcement value depends on adoption density across all three groups. Officer adoption fills the seizure intelligence network; rights holder adoption fills the alert intelligence network. Low adoption by either side degrades the value for both.
- **Research: 47 participants across Italy, Romania, Uzbekistan, Algeria, and Spain.** Geographic spread was deliberate: confirming that the service design held under genuinely different operational conditions, not just across demographic variation.
- The service design challenge: the three roles have different operational contexts (inspections under time pressure, analytical work over extended periods, administrative filing processes), different legal relationships to the data (officers have access that rights holders do not), and different institutional cultures. Designing for any one of these in isolation produces a platform that the others route around.
- Workaround elimination: parallel spreadsheets and email chains had emerged around the platform before redesign — the diagnostic indicator that the service design was failing. The service was being circumvented because the platform wasn't supporting what the service actually required.
- **78% reduction in officer training costs, based on reduced training hours. Client-reported.**
- **200% increase in rights holder sign-ups; 67% increase in rights holder platform use; 20% increase in officer use. Client-reported.**

### Triopsis workforce management (service design for coordinated multi-role operations)
- **Three roles with genuinely different operational requirements: schedulers** (speed, batch actions, team availability, anticipating conflicts), **operations managers** (exception scanning, risk across broader time horizons, intervention decisions), **field technicians** (task detail, safety compliance, confirmation under outdoor conditions with gloves and sunlight).
- **47 microtasks mapped across 3 personas** before any design decisions were made. Each microtask assessed for cognitive load, frequency, dependencies, and inter-role implications.
- The service design finding: improving one role's workflow creates blind spots for another. A layout optimised for schedulers may hide signals managers depend on; a structure that supports technician compliance may obscure timing data for schedulers. These are structural tensions in the organisation's service model, made visible through the microtask analysis.
- **43 user interviews, 21 participants; 3 in-situ observation sessions under real operational pressure** (weather incidents, crew shortages, overlapping jobs).
- All outcomes measured in product analytics from real users in the live system:
  - **62% faster job discovery**
  - **83% faster job sequence optimisation**
  - **58% faster weekly planning**
- Field technician compliance component: safety-relevant steps surfaced at the right moment in the field workflow, with dependencies. The service design ensures technicians encounter required steps in context — not relying on memory or training.

### Tetra/Prism (field-office service architecture)
- **The architectural question**: should field-based property managers (mobile, on-site inspections, outdoor conditions) and office-based portfolio directors (web, reporting, oversight, compliance monitoring) share one interface or two?
- The answer is structural: the same data serves genuinely different operational contexts requiring different interaction models. The architectural decision was separate platforms sharing a coherent data model and visual design language, not a single interface accommodating both.
- Common entities (tasks, actions, properties, statuses) kept visually and structurally consistent across both platforms — touchpoint coherence maintained. The interaction logic adapted to context; the mental model held across surfaces.
- **Mobile adoption: 12% → 64% one year after the redesigned app launched. Client-measured.**
- **Web NPS: 72% → 85%, approximately 4 months post-launch. Client-measured.**
- The mobile app architecture problem identified during audit: the app downloaded the entire property portfolio on launch (up to 10-minute load time). This is a service design problem as much as a technical one — the field inspector's operational context (on-site, time-pressured, offline risk) was not reflected in the app's loading behaviour. Design solution: property selection flow at launch limiting download to that day's properties.

### Akrivia Health (institutional governance as service design)
- **Three institutional types with different governance paths through the same platform**: NHS analysts (strict governance boundary between research and operational use; data access approval at trust level), academic researchers (ethics and data access approvals through university governance), pharmaceutical research staff (audit obligations and regulatory reporting requirements).
- The service design challenge: the same dataset, the same query capability, the same underlying data model — but three different institutional governance paths that must be made operationally distinct within the interface.
- The researcher/governance reviewer tension is specifically a service design problem: researchers need iterative hypothesis freedom; governance reviewers need to verify query logic independently without escalating. The handoff point between researcher construction and governance review is where the service fails if the design doesn't support it.
- Competitive vector: the IA position where researcher analytical freedom and institutional auditability align simultaneously — query logic automatically structured, visible, and reproducible by the architecture, not by requiring manual documentation.
- **Client-reported: governance reviewers could verify cohort logic without escalating to the research team.** State as client-reported.

### Dancerace/Jacko (three-party commercial service)
- **Three commercial parties interacting through one platform**: financier (activates supplier accounts, sets credit terms), supplier (issues invoices, manages cash flow), debtor (receives invoices, acknowledges and pays).
- The service design challenge: each party's actions affect the others'. A supplier who rejects a debtor action misunderstands the commercial relationship. A debtor who doesn't understand the payment terms creates relationship problems that the interface must accommodate, not force into formal states.
- Service design finding: real debtors acknowledge obligations informally before committing formally. The "accepted" status — a symbolic acknowledgement of good faith rather than a payment commitment — is a service design decision that accommodates real commercial behaviour.
- Chasing routines as a service design concept: the process of following up on overdue invoices is a standard supplier workflow that cuts across all three parties. Designing it as a pre-built routine template gave suppliers a complete cross-party workflow in one place, turning service complexity into a usable feature.
- **Demo-to-paying conversion: 36% vs. 15–20% industry benchmark. Client-reported, measured over 6 months post-launch.**

### UNICEF planning, approval, and reporting tool (shared-ownership submission across roles and tiers)

- **Seven distinct role types across two organisational tiers, plus a conditional external user class** — the largest role architecture in the multi-role set. Headquarters: Global Programme Director, Planning & Reporting Manager, Finance Manager, Admin. Local offices: Country Programme Manager, Project Director/Officer, Finance Officer (in some offices). External: Monitoring & Evaluation Specialists with conditional access.
- **The service is a shared-ownership task.** The workflow was deliberately structured so that no single person completed a submission end to end. At the local level the Country Programme Manager was accountable for overall submission quality, while Project Officers contributed project-level data and milestones and Finance Officers owned financial sections and validation. These roles worked largely in parallel. At headquarters, the Planning & Reporting Manager assessed reporting quality, completeness, and cross-country consistency, while the Finance Manager assessed financial integrity and budget compliance. A submission had to satisfy both central functions to be accepted.
- **The distinctive service-design failure: definitional misalignment, not cognitive incompatibility.** Where IDEXX is the canonical case of roles with incompatible *cognitive requirements*, UNICEF is the canonical case of roles that are each individually competent but hold incompatible *interpretations of the same standard*. Many compliance failures emerged at the boundaries between roles: information correct from a project perspective but incomplete from a finance perspective; a financial revision that invalidated information entered elsewhere; approvals assumed but not formally recorded; and, underneath all of these, contributors holding different understandings of what a given requirement was for. A submission could satisfy the local team's interpretation of "complete" and fail central requirements. The service broke at the handoff because no shared definition of a correct submission had ever been made explicit.
- **The cross-tier dimension.** The boundary was not only between roles but between organisational tiers, and the misalignment was structural. Local offices did not understand why specific central requirements existed; central teams lacked visibility into local operational constraints. The central organisation initially mis-diagnosed this as local-office reluctance. Research across four intensively-engaged local offices established that the real failure was a cross-tier comprehension gap, and that the interface — by presenting requirements without conveying their purpose — was reproducing the gap rather than repairing it. This is service design at the level of meaning, not just workflow: a local contributor who understands why their input matters and how it is used downstream produces different work from one who experiences the same form as performative bureaucracy.
- **The service-design response.** Because the failure was a missing shared standard rather than incompatible cognitive modes, the architectural answer was not to split the interface (as in IDEXX or Tetra/Prism) but to construct definitional alignment and then embed it. The Sandbox Experiments phase produced 26 prototypes reviewed by 56 stakeholders across both tiers, used to establish a shared understanding of what each requirement was for and which were genuinely necessary. The agreed standard was then built into the service through workflows, validation rules, information architecture, and interaction design — so the producing roles could no longer unknowingly satisfy their own interpretation while violating the receiver's. The submission workflow itself was structured as a behavioural architecture: an orientation step establishing purpose, priming questions reducing cognitive load, progressive disclosure making the connection between steps legible, a revision-and-quality-check step before submission, and positive reinforcement on quality contributions.
- **Outcomes — client-measured against a pre-established baseline, nine months post-rollout:**
  - **45% reduction in compliance issues** (defective submissions requiring headquarters follow-up before acceptance)
  - **42% reduction in headquarters report-preparation time** (downstream consequence of fewer defective submissions)
  - **128 countries using the system post-rollout. Client-reported milestone** — establishing that the multi-role service design held across a genuinely diverse multi-jurisdictional deployment.
- Causal framing: the compliance reduction is the result of redesigning role interactions and handoffs and embedding an agreed standard — the service-design contribution — not of screen usability improvement alone. The two figures share one upstream cause (fewer defective submissions). Both are client-measured; Creative Navy helped identify the relevant owned metrics but did not produce the measurements.

# `/contexts/multi-stakeholder-operational-environments`

---

## Domain vocabulary

- Multi-role workflows / role-differentiated interfaces
- Cognitive requirement by role — the specific information needs, time pressures, and mental models of each role; not preferences but structural requirements
- Physical environment by role — where the user is when using the system determines what the interface must do (front desk ambient multitasking; consultation room focused attention; field inspection; helm at speed)
- Error consequence by role — errors in the same system can mean different things for different roles; the design must acknowledge this hierarchy
- Handoff points — the moments where work or information passes between roles; where failures concentrate in multi-role systems
- Role-based access vs. shared context — the architectural question of what should be separated and what should be visible across roles
- Service design — the discipline of designing across organisational and role boundaries, not just within a single user journey
- Stakeholder governance — the internal problem of competing priorities among the people who commission and build the system, distinct from (but connected to) the user role problem. Has two failure poles: contested ownership (multiple owners pulling in different directions) and absent ownership (no one taking responsibility for decisions or understanding at all)
- Adoption density — in network-effect systems (WCO/IPM), low adoption by any stakeholder group degrades the value of the platform for all groups
- Downstream consumer — a stakeholder that consumes the platform's output rather than co-editing within it; not all parties in a multi-party system are screen-sharing co-users (Neugo: the state issuing authority consumes clean data through a pipeline rather than collaborating in the case interface)
- Value event — the moment a multi-party process produces the output the platform exists to create (a submittable case, a completed transaction); workflow design can drive the parties toward it rather than passively hosting their work
- The one-interface question — when to serve multiple roles through a single unified interface vs. when to recommend architectural separation

---

## Evidence to draw on

### WCO/IPM customs intelligence platform (cross-institutional, global scale)
- World Customs Organization customs intelligence platform — coordinates intellectual property enforcement between customs officers and rights holders across member administrations
- Three user groups: frontline inspection officers (ports, airports, land borders — speed, time pressure, field conditions), intelligence analysts (pattern analysis, historical cases), rights holder brand protection and legal teams (filing information, reviewing enforcement activity)
- Platform was already in production with low adoption when Creative Navy engaged. Workaround symptoms were present: parallel spreadsheets and email chains had emerged — the reliable diagnostic indicator of a system users have decided is more effort than it is worth.
- Network effect dynamic: low adoption by either officers or rights holders degrades the value for both sides. An intelligence platform only functions if both sides participate.
- Field conditions varied significantly across member states: unreliable connectivity, mixed device fleets, limited time per inspection
- Research included 47 usability participants across Italy, Romania, Uzbekistan, Algeria, and Spain — geographic spread confirming the multi-jurisdictional design held across genuinely different operational contexts
- **78% reduction in training costs for officers, based on reduced training hours. Client-reported.**
- **200% increase in rights holder user sign-ups. Client-reported.**
- **67% increase in platform use among rights holders; 20% increase among officers. Client-reported.**
- **107 governments signed up; 2000+ officers using the system in field operations. Client-reported milestone figures.**
- Jürgen Stock (Secretary General, INTERPOL) provided an external endorsement — available in case study file. The INTERPOL endorsement is notable because INTERPOL operates in the same enforcement ecosystem and has direct field visibility of platform performance.

### Triopsis workforce management (internal multi-role, measured outcomes)
- Three distinct roles with incompatible mental models: schedulers (speed, batch actions, team availability), operations managers (exception scanning, risk across broader time horizons), field technicians (task detail, safety measures, glove- and sunlight-tolerant confirmations)
- 47 microtasks mapped across 3 personas before any design decisions were made. For each: when performed, ease of discovery, ease of understanding, what the user needs, issues, opportunities, desired outcome, pain points, frequency, cognitive load, dependencies.
- The microtask analysis revealed that an improvement helping one role could create blind spots for another — a layout optimised for schedulers may hide signals managers depend on; a structure that reassures technicians may obscure timing data for planners. The conflicts were structural tensions in the organisation, not design errors.
- Multi-stakeholder governance on the internal side: founders, developers, sales, support, and key clients all had competing expectations; without a UX framework to arbitrate, decisions across modules were inconsistent
- All outcomes measured in product analytics (not usability testing):
  - **62% faster job discovery; 83% faster job sequence optimisation; 58% faster weekly planning.**
  - **Training: mandatory 1-hour session → optional 15-minute video; 90% self-onboarding. Client-reported.**
  - **"How can I" support tickets: fell to approximately 5% of previous volume. Client-reported.**
  - **Sales conversions multiplied by four; began winning clients 4–5x larger. Client-reported by CEO.**

### IDEXX Animana veterinary practice management (architectural role split recommendation)
- Eleven-year platform; 35 clinics, 150+ participants, 2 weeks, 3 countries
- Discovery finding: reception staff and clinical staff don't just have different preferences — they have fundamentally incompatible cognitive requirements
  - Receptionists: ambient awareness, sustained multitasking, multiple simultaneous demands, short task windows, errors visible immediately to clients. Cognitive requirement: breadth and speed.
  - Clinical staff: focused sequential case attention, one patient at a time, errors with clinical consequences. Cognitive requirement: depth and accuracy.
- These are not different preferences within the same task model. They are different mental models of what the software is for, activated in different physical environments, under different time structures, with different error consequence profiles.
- Conclusion from tension-driven reasoning: a unified interface optimised for one role degrades the other. No feature adjustment resolves this. The architecture itself must reflect the role split.
- **Recommendation: develop distinct UIs for reception and clinical roles.** This is the most architecturally significant conclusion in the multi-stakeholder cluster. Worth naming explicitly as a recommendation that emerged from evidence, not a preference.
- Client-reported 6 months post-engagement: recommendations are well-grounded; some implemented, remainder planned. Pace reflects internal velocity.

### Akrivia Health (cross-institutional governance complexity)
- Oxford University spin-off; clinical research platform serving NHS analysts (strict governance boundaries between research and operational use), academic researchers (ethics and data access approvals), pharmaceutical research staff (audit and reporting obligations)
- These three groups were not aggregated into a single "researcher" persona — the differences in institutional governance were the finding, not an inconvenience to smooth over
- Same information, different institutional obligations: what an NHS analyst can do with patient data differs from what an academic researcher can do, which differs from what a pharma team can do. The design must make those boundaries operational, not just stated in documentation.
- Governance reviewer tension: researchers need iterative hypothesis freedom; governance reviewers need to verify query logic independently without escalating to the researcher. This is the institutional version of the multi-role design problem.
- Client-reported outcome: governance reviewers could complete reviews without escalating to the research team. **State as client-reported.**

### Tetra/Prism (field and office, two-platform architecture)
- Property compliance — field-based property managers (mobile, average 12 properties each, monthly/weekly site inspections) and office-based directors/portfolio managers (web, reporting, oversight, compliance monitoring)
- The higher up in the organisational hierarchy, the more a user sees but the less they actively does — a fundamental role difference that shaped the entire architecture
- Field users had specific failure modes at engagement start: 10-minute load time on app launch (downloading entire portfolio offline), entity model inconsistency (tasks/actions/forms with unclear differentiation), dashboard surfacing the wrong priorities
- The mobile/web split is an architectural decision — the same data serves two genuinely different operational contexts that required different interaction models. Common entities (tasks, actions, properties) kept visually and structurally consistent across platforms; the interaction context adapted.
- **Mobile adoption: 12% → 64% one year after redesigned app launch. Client-measured.**
- **Web NPS: 72% → 85% approximately 4 months post-launch. Client-measured.**
- 2-year Implementation Partnership; 12 support tickets, average 1-hour response time

### Dancerace/Jacko (three-party commercial structure)
- Invoice management portal — financier activates supplier accounts; supplier issues invoices; debtor/customer receives and acts on them. All three parties interact through the same platform around the lifecycle of each invoice.
- The three-party structure was understood at the start; what was not specified were the interaction states — how each role does specific things, what states each interaction needs to have, how the supplier's experience connects to the debtor's.
- Key research insight: real debtors do not behave according to formal business norms. They delay, acknowledge without committing, and manage relationships informally. The design had to accommodate this rather than design against it — the "accepted" invoice status (symbolic gesture of good faith, not payment commitment) is the specific design decision that came from this domain learning.
- Stakeholder alignment challenge: two internal camps with conflicting positions. Resolution came not from persuasion but from a specific design concept (chasing routines as pre-built templates) that made visible that simplicity and feature depth are not opposites — they are a path through the same space. **This is the clearest example of stakeholder alignment through design in the portfolio.**
- **Demo-to-paying conversion: 36% vs. 15–20% industry benchmark. Client-reported, measured over 6 months post-launch.**

### Neugo (public-private multi-party case coordination; citizen–intermediary–state structure)
- UK visa application case-management platform. Coordinates four genuinely different parties around the lifecycle of a single case: visa seekers (members of the public, often travelling as a party rather than individually), advisers (legal consultants and family offices — commercial intermediaries with their own established tooling, frequently Excel), case workers (who move a case toward a submittable state), and the Home Office (the state issuing authority, which consumes Neugo's clean output as downstream data, where the visa decision is actually made).
- A distinct multi-party topology: not all stakeholders are screen-sharing co-users. The human collaboration happens among applicant, adviser, and case worker; the state participates as a downstream consumer of a data pipeline, not as a co-editor of the case. The design problem is producing clean, submittable output from a messy multi-party back-and-forth, not reconciling four roles on a single screen.
- The platform's value event is a submittable, complete case — not the open-ended process of preparing one. A specific workflow decision follows: the system actively prompts case workers on what to do next rather than waiting on initiative, driving the multi-party process toward the moment the platform earns its keep.
- Constraint respecting across the adviser firms: the platform absorbed the firms' existing tooling, integrating everything except a small number of fields unique to one single firm — serving the firms as a group without fragmenting into per-firm variants.
- **Stakeholder governance at the absent-ownership pole.** Where Dancerace shows multi-stakeholder governance as competing internal priorities resolved through design, Neugo shows the opposite pathology: no one taking ownership of decisions or of understanding the system at all — the nominal product manager functioned only as a conduit ("a sheet of glass," in the client's description). With no owner to align, design decisions were validated directly against the beneficiary firms at three checkpoints (see /method/iterative-system-building) rather than through an internal arbiter.
- **At a post-launch audit roughly a year after go-live, 15 legal firms were relying on the platform and had begun replacing some of their internal processes with its features. Creative Navy-observed during the audit.**
- **The engagement-1 prototype contributed to the system being commissioned: client-reported as roughly 30% of the decision factors, with dedicated demo sessions built around the prototype.**

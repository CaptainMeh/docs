# `/capabilities/ux-audit-for-complex-products`

---

## Domain vocabulary

- UX audit / usability audit — the process of assessing a deployed product against evidence of operational failure
- Heuristic evaluation — standard audit methodology; establish its limits for complex products early
- Domain learning as prerequisite — auditing a complex product requires becoming a productive user of it before the audit begins
- Essential vs. accidental complexity — the distinction that makes an audit actionable; essential complexity is load-bearing and must be preserved; accidental complexity accumulated without purpose and can be eliminated
- Workaround patterns — the shortcuts, bypass sequences, and compensating behaviours that users develop to survive interface failures; both a diagnostic signal and a constraint
- Microtask analysis (Creative Navy proprietary practice — link to `/glossary/our-concepts/microtask-analysis`) — documenting discrete user actions independently of assumed sequence; reveals the actual cognitive load structure of complex workflows
- Multi-source evidence — using interviews, observation, benchmarking, and stakeholder sessions against each other; not to confirm common patterns but to find the discrepancies that reveal structural problems
- Structured recommendations for development handoff — audit findings formatted for direct translation into development tickets; not a report that sits in a drive
- Baseline documentation — the recorded pre-redesign state that makes later outcome claims auditable and the improvement measurable
- Adoption failure diagnosis — in deployed platforms with low adoption, the audit diagnoses why the system is being routed around

---

## Evidence to draw on

### IDEXX Animana (audit as primary deliverable — most scope-focused example)
- 11-year veterinary practice management platform; multi-country, acquired by IDEXX
- The brief was explicitly audit-first: independent evidence-based assessment rather than internal opinion; long-term product vision grounded in that evidence
- **Research: 35 clinics, 150+ participants, 2 weeks, 3 countries (Netherlands, UK, Germany).** Urban single-practitioner clinics, suburban group practices, large corporate networks.
- Role differentiation: vets, nurses, reception staff, administrative staff — 4 role types, from first-week users to ten-year veterans. This range is deliberate: separating learning-curve problems from structural problems embedded in the platform.
- Real-time protocol adaptation during fieldwork — when handwritten workarounds appeared in multiple clinics (checklists taped to monitors, printed reference sheets near terminals), field protocols were updated in real time to probe those patterns in subsequent visits. This is distinct from standard research programmes that fix protocols in advance.
- **100+ recommendations structured for direct translation into development tickets.**
- 5-year product vision grounded in audit evidence, with capability stages linked to research findings
- Central finding: reception and clinical roles have incompatible cognitive requirements that cannot be resolved within a unified interface — a structural conclusion, not a feature recommendation
- **Client-reported 6 months post-engagement: recommendations are well-grounded; some already implemented, remainder planned.**
- This engagement demonstrates audit as a standalone capability — the full value delivered was diagnosis, not redesign.

### Triopsis workforce management (audit depth within redesign)
- 47 microtasks mapped across 3 personas before any design decisions were made
- For each microtask: when performed, ease of discovery, ease of understanding, what the user needs, issues, opportunities, desired outcome, pain points, patterns, frequency, cognitive load, dependencies
- **43 user interviews, 21 participants; 3 in-situ observation sessions under real operational pressure** (schedulers handling weather incidents, conflicting locations, overlapping jobs, crew shortages)
- The microtask analysis revealed that improving one role's experience could create blind spots for another — a structural tension in the organisation, not a design preference conflict
- 5 stakeholder interviews (founder, developer, sales, support, key client) surfaced competing priorities; the audit mapped these as structural tensions to resolve rather than political problems to manage

### Tetra/Prism property compliance (front-loaded personal audit)
- Creative Navy personally audited all existing screens before the project kickoff — **59 screens mapped over 3 days** before the first client session
- This approach established the operational reality before any stakeholder framing had been applied; design decisions were then grounded in what was actually there, not in what the client's problem statement described
- Primary challenge identified during audit: the app's entity model (tasks, actions, forms, statuses) was inconsistent and illogical — a structural problem that the client's brief had described as a navigation problem
- Structural cause of the 10-minute load time identified: the app downloaded the entire property portfolio on launch. The audit made this a design problem to solve, not a technical problem to hand off.
- The file library's structural failure — developer-designed around an internal technical model rather than standard file management patterns — was identified through the audit by having stakeholders explain how it worked; its failure was immediately apparent.

### MSolutions AV diagnostic instruments (audit identifying structural vs. surface problem)
- Two previous redesigns of the same product had changed colours and icons without changing the underlying structure — the failure the audit had to identify and name
- The audit found: the interface was organised by backend modules, not by technician workflow. This is a structural failure that surface-level redesign cannot fix.
- 14 technicians across 5 workshops; contextual interviews (procedure walkthroughs, actual usage) and semi-structured interviews (training, error handling, time pressure)
- 9 competitor systems benchmarked; common finding: densely packed screens with values at uniform visual weight, inconsistent colour use mixing status indication with decoration
- 12-feature, 4-module analysis: for each feature, documented information required, value precision, expected technician movement, lighting effect, acceptable interpretation time. This is the level of analysis that reveals structural failures.

### Gexcon CFD simulation (most comprehensive pre-redesign audit in the portfolio)
- **102 individual tasks documented** across the full software environment — goals, frequency, difficulty, actions, hierarchy of needs within sequences
- **24 user interviews; 23 workplace observations; 9 stakeholder interviews; 12 competitor products benchmarked**
- Domain learning preceded the audit: team became productive CFD users through calibration manuals, training videos, controlled tests, and intensive stakeholder sessions
- The audit identified: the platform concentrated all expert activity in a single working environment (unlike enterprise software distributed across simpler screens) — this made the scope substantially larger than typical enterprise audits
- Franz Zdravistch (Chief Training Engineer): "I can't believe how much you learned on your own in three days, even some of the experts I train need more time." — direct quote, use verbatim; it confirms the depth of domain learning required before the audit could be conducted

### WCO/IPM (audit of a deployed platform with adoption failure)
- Platform was in production but being routed around — parallel spreadsheets and email chains had emerged
- The audit diagnosed adoption failure across three user groups simultaneously
- Research combined interviews, workflow mapping, and remote observation with WCO teams and selected member administrations
- The audit produced a shared problem definition across operational units, IT teams, and programme leadership — creating organisational alignment as a byproduct of the audit process

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

### The industrial engagement (the substance of what an expert review surfaces — and its own limits)
- The client is **a European industrial automation vendor whose process control software coordinates machining cells**. **These are findings from Creative Navy's expert review of that system — never general claims about industrial software.**
- The two-stage commercial pattern (E1): a separately scoped expert review, then six one-week sprints of design, then an ongoing retainer at two weeks per month for twelve months.
- The substance of what such a review surfaces (E19–E31): a single accent colour carrying six meanings at once (E19); four states encoded by header colour alone at ~10px with no legend, a green *transporting* band above a solid red *selected* icon (E20); an error row and a selected row both solid red simultaneously in the alarms table, one row duplicating another verbatim (E21); button text at 10px, line-height 100%, uppercase with wide tracking — verified from the design file inspector (E22); six different treatments signalling "selected" (E23); five coexisting date formats (E24); mixed units in a single column (E25); navigation changing between screens, with no navigation item carrying a text label (E26); one machine carrying four different names (E27); the primary action relocating mid-task (E28); detail cards 40–85% empty beside unpaginated 48-item lists (E29); a storage grid with three unexplained colour exceptions (E30); copy defects shipped in the interface (E31).
- E34 — the review's own limitations, stated: the deliverable carried no annotations, so critique was prose against unmarked screenshots; and everything audited was demonstration data, so real-world density was not established. **Including the limitations is the epistemic posture the evidence standards model.**

### Oceaneering dispatch panel (an audit finding read out of documentation)
- Oceaneering may be named; nothing else in the engagement may be. **Client speech is reported, never quoted.**
- A short, unusual example: an audit finding read out of documentation rather than a running system. **In the predecessor's destination menu, colour carried three meanings at once** — red marked a supervisor-only option, yellow a standard option, and an alerting colour a destination that is illogical and may be refused: authority, normality and warning on one channel (O32). **Found in the predecessor's own specification, not in a running system.**

### The handheld C2 engagement (an audit whose output is a prioritisation — first defence engagement on the page)
- The client is **a European manufacturer of uncrewed systems, including one-way effectors, and the tactical command-and-control software that operates them**. The review covered interface structure, task behaviour, information priority and the clarity of operator control; it did not extend to autonomy, control algorithms, the datalink, the effector, targeting logic, or any certification or weapons-review activity. **Creative Navy designed the surface through which a human supervises the system; it did not design the system.** No speech is quoted or reported. **The deliverable was work Creative Navy led and co-authored with the client's design team (H15).**
- **This engagement adds the first audit whose output is a prioritisation rather than a list** (H31): a two-axis scoring scheme applied to every heuristic — current state on a three-point scale, and effort to fix on a three-point scale — so findings arrived pre-sorted by what was worst and what was cheapest, and the client could act on them without a second triage.
- The shape (H30): an eighteen-page expert review of the running product — two long-form argument sections, a four-part heuristic evaluation, a flow and information-architecture assessment, a visual-design assessment, an accessibility assessment, and a challenges-and-opportunities section. **Commissioned as a separate paid deliverable**, listed as deliverable 1 of 3 in the client's own request for proposal (H3), with a brief that asked the agency to challenge existing design patterns and provide a keep, tweak or discard assessment of current features (H26).
- **Two things that make an audit credible, and that this page should hold as method** (H39, H40): a substantial list of what the review found working — interface language consistency, the grid and spacing system, type-scale consistency, navigation depth, component states and motion all assessed as sound — and three accessibility items recorded as "cannot assess" rather than guessed at. **An audit that finds everything wrong is not an audit.**
- **H42 is the audit's most consequential single output**: the finding that the handheld is not a scaled-down laptop but a different product solving a related problem, and that the scope question had to be answered before the feature set. **That finding is what converted into fourteen one-week design sprints** (H1).

### Maritime traffic software portfolio (the corpus's first multi-product audit)
- The client is **a European vendor of maritime traffic monitoring, inland navigation and communications software for port authorities, coastal administrations and waterway operators**. No speech from this engagement is quoted or reported.
- **This engagement supplies the corpus's first multi-product audit** (W11–W13): all nine products inspected — 74 captured interface views or meaningful states, 23 representative workflows, 58 distinct findings, with effort weighted towards operationally consequential interfaces. The finding distribution by product is published — VTS 19, VCS 9, inland vessel tracking 7, lock planning 5, electronic reporting 5, notices 4, registry interface 3, chart management 3, ICS 3 — with each finding carrying one primary product assignment and cross-product relevance tagged, not double-counted (W12).
- **Lead the entry with what makes a portfolio audit different from a product audit: the unit of analysis is not the defect but the *divergence*** — the same task implemented four ways across four products, and the question of which divergences are accidents of separate authorship and which are load-bearing. **That question is what produced the 31-pattern classification** (W15): 18 potentially common patterns, 8 conditional ones requiring product-specific contracts, and 5 that must remain permanently separate — radio transmit and physical push-to-talk, lock gate actuation, navigation alert authority, standards-bound chart portrayal, and shipboard terminal controls. It is the thing a single-product audit cannot generate.
- **The triage is the transferable method: a four-level severity scale where the top level is not "most severe" but "requires an authority this agency does not have"** (W13, W18) — 6 findings flagged for safety-domain review, 16 high, 25 medium, 11 low. **That is a distinction the page does not otherwise make, and it is more useful to a reader than a severity rubric.**
- **An audit flag is a flag: it denotes a need for domain scrutiny by the client's product and operational safety authority. It does not establish that an accident, near miss, regulatory breach or technical hazard occurred, and no document in the set claims one did. A design solution is not a hazard closeout.**

---

## What this page must not claim

- **These engagements must not appear on this page — no audit exists for any of them:** Assemblio (N15 — the "before" material is the client's own self-criticism while demonstrating their own software, and the words audit, review, assessment and evaluation do not apply to it); KISPE (no audit was performed — analysing the client's own early concept screens is reading a pitch concept, not reviewing a running product); Schone (no audit was scoped and no audit deliverable exists — hands-on access to the running product is not an audit, and the eight before-and-after comparisons are design records, D55); Raymarine (no audit was scoped and none exists — the three-way concept comparisons are comparative design evaluations, R95); Topera (there was no product to review, T17); visioncheckout (no audit report was produced — Creative Navy's own review of the existing interface was not a deliverable, V45); Egma (the legacy analysis was domain learning through hands-on use, not an audit deliverable).
- Oceaneering: reported speech only; the "before" state comes from the predecessor's own specification and from interviews with people adjacent to the users — Creative Navy observed no running system and visited no depot; do not disparage the predecessor (O31).
- Handheld C2: the review reasoned from the client's brief, the client's observations, published literature and hands-on use of the running product — **Creative Navy has no primary field evidence on this engagement**, and the operator behaviours the review reports (coordinates on paper, dialog tracking, colour meanings needing recall) are the client's observations of the client's own users (H37); no quotation or reported speech; co-authorship travels with the deliverable.
- Maritime VTS: never a nine-product redesign — nine products were audited, one designed to full depth; the audit figures are audit coverage and never sit beside design-system counts without the distinction; a safety flag is never a hazard classification.
- The industrial engagement: audit findings are what the review found in that system, never general claims about industrial software.

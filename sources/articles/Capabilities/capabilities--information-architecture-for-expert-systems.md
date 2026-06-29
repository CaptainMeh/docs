# `/capabilities/information-architecture-for-expert-systems`

---

## Domain vocabulary

- Information architecture (IA) — the structural organisation of an information space: how entities are defined, grouped, labelled, and navigated
- Navigation model — the explicit rules governing how users move through the system and access its content
- Mental model — how domain experts conceptually organise their work; the structure that the IA must match or users experience constant friction
- Object model — the entities (projects, datasets, policies, cohorts, tasks) and relationships that form the foundation of the IA
- Single working environment — the IA challenge in complex expert tools where everything must coexist in one place, unlike consumer apps that distribute functionality across many simpler screens
- Progressive disclosure — revealing structural complexity on demand; giving users a clear entry point while preserving full depth for those who need it
- Progressive specification — the IA must support iterative refinement (Akrivia: cohort conditions revised as hypotheses develop) rather than one-time navigation to content
- Option space mapping at the IA level — exploring multiple organisational structures before committing; Akrivia (5 models), Polymatica (45 structural variants), Gexcon (10 key challenges, 3–6 solutions each)
- The lobby metaphor — Polymatica's central orientation point (Dataset Manager) from which all operations are accessed; a concrete example of IA solving a domain comprehension problem
- Process-structured navigation — organising the navigation around the user's actual process (Puraite: 4 items for the 4 stages of systematic review) rather than the product's internal structure
- Hub-and-spoke IA vs. flat IA vs. hierarchical IA — these structural choices have different implications for expert workflows; the choice depends on the domain's logic, not on interface conventions

---

## Evidence to draw on

### Gexcon CFD simulation (IA restructuring of 15 years of accumulated complexity)
- The IA problem: 15 years of feature addition had created a navigation structure that reflected the history of the software's development, not the logic of the engineering work it supported
- The single working environment challenge: unlike enterprise software that distributes functionality across many simpler screens, Gexcon compressed everything into one environment. The IA had to support 102 distinct tasks within that constraint.
- **102 tasks documented** — goals, frequency, difficulty, actions, hierarchy of needs within sequences. The task documentation was the prerequisite for the IA redesign.
- Essential vs. accidental complexity was the central IA question: which structural complexity was load-bearing (the scientific rigor the tool was built on) and which had accumulated without intent (the historical sediment of 15 years of development). Domain learning was what made the distinction possible.
- The beginner/expert tension resolved through a single structured IA pattern capable of serving both user types at different speeds — not two modes, not a simplified entry path, but one structure with appropriate depth on demand.
- **Active users per team: 1 → 3–4. Client-reported.** The IA change is the mechanism: when non-specialist roles (risk managers, safety analysts) could navigate the system without requiring specialist guidance, the user base expanded.
- **Time to first successful simulation: 4 days → 6 hours. Measured.**

### Polymatica OLAP analytics (replacing technical IA with domain-appropriate IA)
- The IA problem: Polymatica's structure was built around OLAP concepts — the cube metaphor, dimensions and facts terminology, SQL queries surfaced at the database connection level. These are legible to database specialists; they are opaque to the data analysts who needed to use the product.
- The core IA decision: replace the cube metaphor with "dataset"; replace "facts" with "measures" (industry standard); replace the technical connection flow with a data preparation and preview step that lets users see and correct their data before it enters the analytical environment.
- **The lobby concept:** the Dataset Manager as the central orientation point — a card-based view of datasets showing dimensions, measures, record count, last updated date, and notes. Users open the application to their datasets; the datasets are the entry point to all operations. This is IA solving a comprehension problem, not a navigation problem.
- 45 structural variants explored across 10 challenge areas before convergence.
- **2% → 56% independent task completion (measured via product analytics).** The IA change is a primary mechanism: users who couldn't form a mental model of the system couldn't complete basic operations. When the structure matched their mental model, completion rates increased dramatically.
- The guided-to-free architecture: linear processes (database connection, sphere creation) guided step by step; open environments (data exploration) free after the guided phase ends. The IA distinguishes between tasks that require sequence and tasks that require freedom.

### Akrivia Health clinical research platform (IA for dual requirements)
- The IA problem: cohort construction requires iterative hypothesis development (analytical freedom) and institutional auditability (governance traceability). These two requirements pull in opposite directions at the structural level.
- **5 interaction models** developed and evaluated: wizard, nested logic blocks, timeline, fragment reuse, side-by-side comparison. These were not options to choose from — they were structural hypotheses, each embodying a different model of how researchers think about cohort construction.
- 6 design cycles from first wireframes to interactive prototype; 8 usability sessions with realistic tasks (not simple navigation tasks but the full research scenario including governance review months later)
- The competitive vector from Concept Convergence: the IA position where researcher analytical freedom and institutional auditability align — the query structure is automatically made visible and reproducible by the architecture, not by requiring users to document it separately
- **Client-reported: governance reviewers could verify cohort logic without escalating to the research team.** State as client-reported.

### Callsign fraud detection (IA as governance architecture)
- The IA problem: fraud rules were scattered across database views and configuration tables — an organisation that reflected how the system was built internally, not how fraud analysts reason about fraud strategy
- The model/policy separation is an IA decision as much as a technical one: the AI scoring model and the policy layer that applies thresholds and workflow decisions are architecturally distinct objects in the system. This conceptual clarification — made through IA work — is what made the interface designable.
- Policy as the central object: each policy bundles conditions, actions, history, and links to related rules. Analysts follow a policy from definition through evaluation without losing context. This is IA providing the provenance that regulatory governance requires.
- The IA directly enabled the commercial outcome: the governance structure of the policy engine was what risk teams at Lloyds and HSBC could evaluate under SCA and PCI DSS requirements.

### Hudex intelligence analysis platform (progressive disclosure IA for complex AI output)
- The IA problem: the dondogram (hierarchical AI clustering visualisation) was the primary entry point — not intuitive to new users; described in client demos as "looking like a spider"
- The IA solution: a summary layer (project overview as "book cover") before the dondogram — high-level theme counts, source counts, and key orientation information that allows users to understand what they're looking at before entering deep exploration
- **20 iterations on the project overview** — the highest iteration count for any single component in the portfolio. The concept had to be invented, not refined. No existing IA model for "what a project cover page should do" existed as prior art.
- Progressive disclosure architecture: the IA is structured so that non-expert users can orient, explore at a surface level, and find value without encountering the full system's depth. Expert users access full depth on demand.

### Puraite AI systematic review (process-structured navigation)
- The IA problem: the client's original navigation had 13 top-level items organised around the product's internal structure — the way the system was built, not the way systematic review is conducted
- **13 top-level navigation items → 4**, organised around the four stages of the systematic review process itself
- Identified by Creative Navy outside the original scope — a direct instance of the blanks phenomenon: the client had not registered the navigation as a design problem. The structural misalignment was visible from the outside but not from the inside.
- Client described the navigation restructuring as one of the most significant contributions of the engagement.

### OLX automotive marketplace (fixed vs. flexible IA across markets)
- The IA problem: no structural definition of which journeys were fixed across all markets and which could vary. Each market team had made reasonable local decisions; the cumulative result was architectural incoherence.
- The marketplace coherence framework is an IA decision: a defined set of journeys that are consistent everywhere, with explicitly specified adaptation points. This is the IA structure that allows local variation without producing fragmentation.

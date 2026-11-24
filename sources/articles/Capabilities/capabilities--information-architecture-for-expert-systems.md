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
- The design position from Concept Convergence: the IA position where researcher analytical freedom and institutional auditability align — the query structure is automatically made visible and reproducible by the architecture, not by requiring users to document it separately
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

### The industrial engagement (navigation generated by configuration)
- The client is **a European industrial automation vendor whose process control software coordinates machining cells**.
- Customers configure the interface themselves: an administrator selects which components a group needs, and that selection generates the group's navigation (E54). Five company archetypes span a single-operator shop to a large corporation with eleven operator groups across six components (E55).
- The audit finding the response answers: navigation changed between screens — seven rail icons on operator screens and thirteen elsewhere, machine strip membership and order shifting, one machine absent entirely from one view, and no navigation item carrying a text label (E26). **This is what the review found in that system, not a general claim about industrial software.**
- Deep structures handled structurally: a collapsible workflow tree for workflows running to roughly a hundred operations, and grouped property sections for parts carrying up to roughly fifty properties (E49).

### AIT heat pump controller (a 900-node source structure, and orientation added where the constraint allows)
- AIT, a European manufacturer of residential and commercial heat pumps, may be named; the previous controller's product name may not — "the controller it replaced".
- The scale and shape of the source structure: AIT's controller structure specification ran to roughly **900 nodes across eleven levels of hierarchy**, in German, and changed during the design block — in one revision a single operating-mode setting became four (A27). The settings space the new interface had to absorb: roughly **135 commissioning parameters** and **98 numbered fault codes**, with parameters hidden by access level and detected heat pump variant (A29 — background scale from the previous generation's published documentation, never an audit finding).
- The commissioning reorder (A50): mode and feature selection moved **before** the commissioning assistant rather than sitting inside it — reversing the order in AIT's structure document — so the assistant knows in advance what it has to cover, can show a progress bar from the first step, and never has to ask "do you want to install heating?" one mode at a time.
- The settings structure was kept close to the one installers already know (A30, A48) — the installed base's memorised structure treated as a constraint — with a breadcrumb trail and a unique numeric identifier on every menu item. **The numbered-identifier convention is an information-architecture device serving telephone support rather than navigation.**

### Streetec kntrl 2 (a flat list because category labels presuppose vocabulary)
- Streetec GmbH and the product, kntrl 2, may be named.
- Settings were kept as a single scrolling list rather than nested categories (S50), because category labels presuppose the technical vocabulary that a non-expert user does not have — reinforced by the client's own experience of exactly that failure in a competitor's product (S36): *"Sometimes very difficult to know that there is a function, but you are not sure in which menu you find it. And then you have to switch, go to one menu, switch to the new screen. Oh no, it's not there. You have to go back."*

### Assemblio (a view for the consumer, and a list that cannot be collapsed)
- Assemblio GmbH and both products — the Assemblio Composer and the Assemblio Smart Viewer — may be named. Two entries, and the second is more useful than another success.
- **The success (N55)**: the parts list was flattened — no hierarchy, each part carrying a quantity. **This was Creative Navy's design**; the client's written "we think the part list does not need a hierarchy" is their agreement with it, not their request for it. It was refined into two tabs — the parts needed for the current step, and the full hierarchy — so the worker's default is the step while the complete tree stays reachable. **The principle worth stating: the structure correct for the person who created the data is frequently wrong for the person who consumes it, and the fix is a different view rather than a different database.**
- **The counter-case (N94–N97)**: part-level matching in synchronisation presents a list of hundreds of part substitutions that **cannot** be collapsed, because each row carries a human approval that exists for liability reasons — the client's stated purpose for the match list is that the planner's approval is recorded (N96) — and whose rows are individually unreadable because the same names appear on both sides (N97). Creative Navy's conclusion, stated to the client on the record: a search field helps, and if the planner must decide part by part there may be no better representation than a list. **That is a legitimate information-architecture finding and should be written as one.**

### Egma Order (four transaction shapes under one grammar)
- **Egma Order**, Egma's B2B lens ordering platform. Egma is a Dubai-based ophthalmic lens manufacturer and optical supplier.
- Four genuinely different transaction shapes under one navigation and one form grammar (G4): RX (a prescription order for a named patient, which goes into production), Stock, Bulk Stock and Services — plus Home, the Order Center, Get Help and Master.
- The decision tree was mapped before and after (G16): the "before" model shows many simultaneously available decision points immediately after login with crossing paths; the "after" resolves to four top-level branches — order lenses, order services, track an order, get support — with mostly linear paths beneath them, so users are not asked to make several decisions at once.
- Roughly 7,000 lens types made navigable by three moves in sequence (G48): repeat-a-past-order offered first; then filtering by eight criteria — brand, index, sphere, cylinder, sub-technology, coating, sun protection and diameter; then a quantities step in which the interface auto-calculates the percentage each lens type represents of the total.
- Order tracking in three layers over eleven production steps (G49): three headline groups — Order Processed, In Production, Delivery — with the current sub-status on hover and the full breakdown on click. **The disclosure mechanism was proposed by the client; Creative Navy resolved the headline set** — do not write the layering as solely Creative Navy's decision.

### The MDU ship motion monitor (navigation decided by a physical unknown)
- The product may be named — the MDU; the manufacturer is not named.
- A four-screen product whose navigation was decided by a physical unknown rather than by content: where the unit sits relative to its reader cannot be predicted — *"They will be wherever there's space physically on the bridge. So nobody knows."* (M19) — so bottom navigation was chosen over both sidebars and a hamburger menu (M50): a sidebar correct for someone standing to the left forces someone standing to the right to reach across and cover the display, and the scarce resource in this layout is horizontal space, not vertical.
- Two structural decisions: settings on a single screen with no scrolling, at the manufacturer's explicit request (M52); and the log split three ways — an alarm log, an event log of settings changes with before and after values, and a timeline — with alarm and settings records kept indefinitely because their value is as an index into the raw sensor record rather than as a record in themselves (M58).

### Topera (an information architecture built from a formal source — concept design, nothing built)
- Topera may be named: the cross-organisational project management platform Creative Navy produced a **concept design** for, grounded in the DIN 69901 series and the ProSTEP iViP / VDA recommendations. **Nothing has been built: no product, no deployment, no user. Every sentence must stay true of a system that does not exist — "was designed to", never "does".**
- **This page gains something it does not otherwise have: an IA built from a formal source rather than from analysis of an existing system. Say so explicitly — it is what distinguishes the entry from the page's other material.**
- The architecture was built as a matrix with two axes (T33): a horizontal time axis carrying the five DIN 69901-2 lifecycle phases, and a vertical knowledge axis carrying eleven management domains. Every cell is populated with the DIN 69901-2 processes active in that phase, the DIN 69901-4 data model entities that carry the information, and the PSI 25 synchronisation activity that propagates it to partners; the derivation is traceable in both directions (T34). Every screen specification carries its standard reference and its synchronisation level — there is no screen in the specification without a traced justification (T35).
- The architecture was required to be complete even where the MVP was not (T38): non-implemented areas must still appear as future extension points — a long-term backbone, not a description of a first release.
- Both navigation axes were designed as real routes, not one primary and one secondary (T39): process-based navigation and domain-based navigation, with the Work Breakdown Structure view designed to be entered from either. Most tools in the category pick one axis.
- **T70 is the evidence the result was systematic rather than selective: all fourteen DIN 69901-2 *Mindeststandard* processes appear by their standard process codes in the architecture mapping and design requirements documents. This is a coverage check, not a conformance claim — Creative Navy certified to no standard, audited against none and worked to none; "grounded in DIN 69901" is accurate, "DIN 69901 compliant" is not Creative Navy's to say and would be a claim about a system that does not exist.**

### KISPE Space common space operating picture (shared context with unambiguous ownership)
- KISPE Space, a UK space systems engineering company. No speech from this engagement is quoted or reported.
- Six logical workspaces: five primary destinations — Operating Picture, Imagery, Satellite Services, Environment, Briefings — plus System Status as a global utility rather than a sixth equal tab, with eleven named navigation transitions (K17).
- The hybrid architecture was adopted over two credible alternatives that were built and assessed rather than argued away (K43): a permanently dominant map kept geographic continuity but squeezed catalogue work into competing panel space; fully separate modules gave specialist tools room but let the area of interest change unnoticed between them. The hybrid keeps a small, explicit shared context — confirmed area, temporal perspective, return path — while giving each task workspace its own layout, with workspace-local filters whose ownership is unambiguous.
- **The accepted cost is the useful part, and was named: shared state is more complex, local filters must never be misrepresented as global, and a persistent header costs real pixels on a compact device.**

### Schone Airspace Group Mission Control (six task contexts within one persistent shell)
- The client is named Schone Airspace Group. No speech from this engagement is quoted or reported.
- The application was organised around the operator's task rather than the underlying subsystem (D65): Planning and Review as top-level destinations; Flight, Camera and Fleet as peer views inside a persistent live operating environment; Readiness as a controlled transition between a prepared mission and a live session.
- Six task contexts within one persistent operating shell, over two named alternatives (D76): a single configurable dashboard required repeated arrangement of map, video, configuration and history and made critical content placement inconsistent; wizard-only navigation failed because planning and operational tasks are not one sequence. **The accepted cost is the useful part, and was named: the navigation structure is larger than a single dashboard, in exchange for each screen having a more predictable responsibility.**
- Pair with D15: ten information priority matrices specifying 97 individual information placements on a four-level scale — operationally critical, task essential, supporting, reference — organised by workspace and operating condition rather than by software subsystem.

### Raymarine next-generation fixed-mount VHF (information architecture on a 480 × 272 instrument)
- The client is named Raymarine; the new radio's name may not be used. No speech from this engagement is quoted or reported.
- The page's other entries are software on general-purpose hardware; Raymarine adds IA on a 480 × 272 instrument: **four primary screens** — radio, AIS target list, AIS compact plot and own vessel — traversed by a directional keypad when no overlay owns focus, with contextual, transaction, safety and system screens layered beneath (R104).
- **Selection is held by a stable vessel identity, never by a row index or a screen coordinate** (R117): switching views, changing sort order, zooming the plot or receiving routine position updates never changes the selected vessel; if a target disappears, no neighbouring record inherits focus and the operator must deliberately select another.
- **The novice-and-expert decision is the one most worth naming here** (R8). The alternatives were a permanently simplified interface, separate basic and advanced modes, and one consistent model with shortcuts and progressive disclosure. **The engagement refused the mode split**, on the ground that a global mode relocates essential controls — the same argument as the encoder decision, applied to the information architecture rather than to the hardware.

### The handheld C2 engagement (what earns a place at all)
- The client is **a European manufacturer of uncrewed systems, including one-way effectors, and the tactical command-and-control software that operates them**. The engagement covered interface structure, task behaviour, information priority and the clarity of operator control; it did not extend to autonomy, control algorithms, the datalink, the effector, targeting logic, or any certification or weapons-review activity. **Creative Navy designed the surface through which a human supervises the system; it did not design the system.** No speech is quoted or reported. The deliverables were work Creative Navy **led and co-authored** with the client's design team.
- **The existing entries concern how information is organised. This concerns what earns a place at all — a different question, and the page does not otherwise ask it.**
- H71 is the transferable artefact: **a decision model for inclusion** in which every element and control is tested against a named operator question, assigned a function that owns it, and classified as persistent, contextual or alert-driven — **and information that cannot answer one of the questions is a candidate for removal**, consolidation or secondary placement.
- H69 is the structure that produced it: a five-function decomposition — Aviate, Navigate and Execute the Mission as the primary trio, with Command and Control and Manage Contingencies as cross-cutting functions — adapted from published NASA, FAA and EASA uncrewed-aircraft human-factors guidance rather than copied from any one framework, and the document says so.
- H78 is the subordination rule: mission content may occupy contextual workspaces but must never obscure a significant change in vehicle state, confirmed guidance mode, link quality, navigation validity, recovery feasibility, a critical hazard or an active contingency.

### Maritime traffic software portfolio (what must survive a transition)
- The client is **a European vendor of maritime traffic monitoring, inland navigation and communications software for port authorities, coastal administrations and waterway operators**. No speech from this engagement is quoted or reported.
- The six-destination architecture holds contextual investigation inside the traffic picture rather than promoting it to a parallel section: a summary dashboard landing view was built and rejected — attractive for commercial presentations, it moved the active traffic picture into a secondary container and forced operators to reacquire sector, object and layer context after every inspection; **rejected because it was better for demonstrations and worse for work** (W50). The dockable inspector was chosen over two alternatives that each had a real advantage, opening on a predictable edge, following the selected evidence reference rather than a screen coordinate, and collapsing without clearing selection; the always-open panel was retained as a documented installation option, not deleted (W51).
- **The context ticket is the transferable idea, and the page has nothing like it**: a typed reference carrying sector, selected track, source, time mode and originating surface, propagated through every transition and used for return navigation and keyboard focus restoration (W41, W48, W51). The audit's primary finding was not a missing function — the required functions existed, in separate panels and views; **what was not preserved across them was the evidence about a vessel, its source, the operator's action and the ongoing task (W39). The legacy system's failure was not organisational but one of continuity.** Interaction mechanics were treated as system behaviours, not cosmetics (W48): keyboard focus could disappear after a temporary inspection, layer filters could reset on return from an investigation, and some actions disclosed an authorisation problem only after the user had initiated them.

---

## What this page must not claim

- **Do not add Oceaneering to this page**: the destination hierarchy and pagination work was structured for operators with no technical background, not for expert reasoning.
- Topera: no outcome of any kind — nothing was built (T20); no user research, no client decision records, no counts beyond those printed; the standards are sources the design drew on, never credentials.
- KISPE: no shipped-as-designed claim; no research or validation claim (K26); the verification vocabulary is specification, not completed testing.
- Schone and Raymarine: engagement record is not outcome; no safety or certification credential; Raymarine carries no competitive-vector argument and no field-condition claim (R90).
- Handheld C2: no quotation or reported speech; no deployment or operational-use claim; no operational or workload figure.
- Maritime VTS: never a nine-product redesign; no shipped-as-designed (W98); design-system inventories from different engagements are different units and are never merged or compared as like for like.
- AIT and the MDU: design reasoning only — nothing was tested with users (A15, M27).
- Assemblio: the separation of the two products was the client's diagnosis (N54); N55 and the match-list finding are Creative Navy's; no time-saving or adoption figure.
- Egma: no post-launch measurement; G3-style counts stay as printed; no competitor benchmarking (G71).

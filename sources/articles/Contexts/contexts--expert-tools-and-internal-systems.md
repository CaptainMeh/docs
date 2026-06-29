# `/contexts/expert-tools-and-internal-systems`

---

## Domain vocabulary

- Expert user / domain expert / professional practitioner
- Expert reasoning support — the interface's job is not to simplify the domain but to externalise the expert's own reasoning structure
- Tacit knowledge / internalised workarounds — patterns users have developed to compensate for interface failures; both a diagnostic signal and a constraint to preserve
- Essential complexity vs. accidental complexity — the distinction that domain learning makes possible; the design challenge is not to reduce complexity but to eliminate the part that accumulated without intention
- Performance ceiling vs. usability floor — expert tools are often evaluated for the ceiling they enable, not the floor they require
- Single working environment (Gexcon: all expert tasks within one application, unlike typical enterprise software distributed across multiple simpler screens)
- Knowledge democratisation / capability democratisation — enabling a broader user population to access expert-level outputs without requiring expert-level training
- Domain learning (as Creative Navy's prerequisite practice for this context — cannot design for an expert without becoming a productive user of the system)
- Blanks phenomenon (applied to experts who cannot articulate the rationale behind their own workflow patterns)
- Microtask analysis at expert depth — documenting discrete actions at a level of granularity that surfaces the implicit knowledge structure

---

## Evidence to draw on

### Gexcon CFD simulation software (the deepest expert-tool engagement)
- Computational fluid dynamics software for industrial safety engineering — gas dispersion modelling, explosion risk assessment, facility safety validation for industrial installations
- Originated at the Chr Michelsen Institute in the 1990s; by the time of engagement, 15 years of accumulated interface complexity
- The user shift: senior CFD engineers retiring; newer engineers choosing simpler tools that sacrificed capability; non-technical roles (risk managers, safety analysts) needing access but having none
- Brief: extend product life 25 years; retain full scientific rigour; open a clearer entry path for newer engineers and non-technical roles
- Domain learning: team became productive CFD users — calibration manuals, YouTube tutorials, Gexcon training videos, controlled tests inside the application; two intensive four-hour stakeholder sessions; Franz Zdravistch (Chief Training Engineer) noted the team had learned in three days what some of his experts needed more time to absorb. **Direct quote available in case study file — use it verbatim.**
- Research scale: 24 user interviews, 23 workplace observations, 9 stakeholder interviews, 12 competitor products benchmarked, 102 individual tasks documented with goals/frequency/difficulty/actions
- Option space mapping: 10 key challenges, 3–6 solutions per challenge, 45 variants, 37 evaluation sessions, 4 decision workshops
- Core tension resolved in Concept Convergence: the beginner/expert divide was not resolvable by choosing one or the other. Resolution: one structured interaction pattern serving both user types at different speeds and with different visibility expectations — no capability reduction, no fragmentation into modes.
- **Time to first successful simulation: 4 days → 6 hours. Measured by Gexcon in real deployments.**
- **Configuration errors per simulation: 5–8 → 1–2. Measured.**
- **Corrective load per error: 4–6 hours → approximately 20 minutes. Measured.**
- **Active users per team: 1 → 3–4. Client-reported.**
- **Training: 3-day instructor-led events → short webinars and video materials. Operational change.**
- 7-month execution phase; 2-year Implementation Partnership
- The competitive vector: navigable complexity over apparent simplicity — positioned against tools that chose beginner accessibility at the cost of scientific rigour

### Polymatica OLAP analytics platform (expert capability, self-service failure)
- GPU-backed OLAP analytics platform; 50–100x faster than competing solutions on benchmarks
- The performance advantage was entirely invisible to users until the interface stopped being the bottleneck — performance in reality vs. performance in benchmarks
- Every new customer required the founder (Roman) to personally deliver training; his limited English and no German made international expansion structurally impossible
- Before redesign: **2% of users completed key operations (import data, slice and dice, answer a specific business question, create a report) independently.** 9% with documentation.
- After release 1 (orientation): 40% independent. After release 2 (feature-level guidance): **56% independent. Measured via product analytics.**
- Roman's resistance to a full redesign was genuine domain expertise misapplied — he assumed his training model was sufficient to bridge the novice/expert gap. Resolving this required not persuasion but examination: showing him the cognitive limits of people at the point of first independent use, then showing him examples from other software of gradual capability building. Two additional sessions were required.
- The central design insight: the lobby metaphor (Dataset Manager as central orientation point) was not brought in from outside — it emerged from reconciling 10 challenge areas simultaneously. The cube metaphor (OLAP-specific) was replaced with "dataset" (universal). Dimensions/facts terminology was replaced with the industry-standard "measures."
- International expansion to UK, US, Germany followed. HSBC and Barclays became UK clients. At their data volumes, the benchmark performance advantage became experientially perceptible for the first time. **All client-reported.**

### Akrivia Health clinical research platform (expert research tool, governance tension)
- Mental health clinical data platform — 4 billion+ clinical datapoints; serves NHS analysts, academic researchers, pharmaceutical research staff
- Expert tool in the sense that cohort construction requires deep methodological knowledge — a typical query might involve 8 nested levels of logical conditions across diagnostic codes, medication sequences, rating scale scores, and free text markers
- The governance dimension: cohort queries must be reproducible and auditable months later by governance reviewers who were not present when they were constructed
- 5 interaction models for cohort construction developed and tested — wizard, nested logic blocks, timeline, fragment reuse, side-by-side comparison — through 6 design cycles, 8 usability sessions
- Competitive vector: the position where researcher analytical freedom and institutional auditability align simultaneously — not held by any competitor in the benchmark
- Client-reported outcome: governance reviewers could verify cohort logic without escalating to the researcher. **State as client-reported.**
- Delivery: first interactive prototype 4 weeks after discovery; full design for alpha within 2 months; no deadline missed

### Beissbarth automotive calibration (multi-device expert instrument)
- Three-device calibration system for vehicle safety equipment — embedded OEM display, rugged tablet, large inspection display
- Users are authorised workshop technicians and inspectors; the domain is sequential precision work where interface hesitation introduces measurement error
- Domain learning: calibration manuals, engineering diagrams, sensor logic; 14 technicians across 5 workshops; 9 competitor systems benchmarked
- 12 features documented across 4 modules — for each: information required, value precision, expected technician movement, lighting effect, acceptable interpretation time
- Core tension: local device optimisation vs. cross-device coherence. Resolution: unambiguous state communication over information density, consistently across all three device types
- **Calibration time: 18 → 12 minutes per vehicle. Client-measured across 8 production deployment locations.**
- **Training requirement eliminated — Beissbarth's commercial deployment model no longer includes onboarding training. Client-reported operational change.**
- Repeated measurements reduced — client-measured, exact figure not available

### MSolutions AV diagnostic instruments (handheld expert instrumentation)
- Professional handheld device measuring HDMI signal integrity and related parameters across multi-monitor installations
- The previous design organised screens by backend modules, not technician workflow — the structural failure that made the AV diagnostic narrative impossible to follow
- Domain learning: team received AV diagnostic training and performed 4 test jobs before design work
- Conceptual breakthrough: treating the device as a guide through a standard AV diagnostic narrative rather than a collection of tools — link integrity checks → EDID/HDCP verification → resolution/colour space validation → consolidated confirmation
- **Key diagnostic workflow: 26 interactions → approximately 13. Client-reported from internal task walkthroughs — not independently measured.**
- **Training: repeated coaching sessions → short guided introduction. Client-observed.**
- **Large integrator customers formally reported smoother rollouts post-redesign.**

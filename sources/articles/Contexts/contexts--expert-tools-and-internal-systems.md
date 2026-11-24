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
- Expertise as bottleneck vs. expertise as the asset being protected — the two poles of expert-tool design; the condition that distinguishes them is whether the expert population is the constraint or the customer, and the design answers are opposite
- Irreducible uncertainty — neither essential nor accidental complexity but a property of the evidence itself, which the interface's job is to report rather than resolve

---

## The page's own argument — the two poles of expert tools

Expert tools divide into those whose problem is that **expertise is a bottleneck** and those whose problem is that **expertise is the asset being protected**. The page's established entries — Gexcon and Polymatica above all — are the first story, measured: a capable system locked behind training only its builders could deliver, redesigned so a broader population reaches expert-level outputs. The maritime traffic engagement below is the inverse, and must be written as the inverse rather than filed as a weaker Gexcon: a system whose users are trained professionals carrying operational responsibility, where simplifications that demonstrate well were rejected precisely because they were worse for the expert actually doing the work. The condition that distinguishes the poles is whether the expert population is the constraint or the customer — and the design answers are opposite.

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

### Maritime traffic monitoring portfolio (primary context — the page's second pole)

- A European vendor of maritime traffic monitoring, inland navigation and communications software for port authorities, coastal administrations and waterway operators. This is the engagement's **primary context**, chosen by dominant design challenge rather than by industry. No quotation marks and no reported speech on any page carrying this engagement; client positions are attributed to the role and the artefact they came from. The design system reached production; **no design-fidelity comparison is recorded, so "shipped as designed" must not appear.**
- **The inverse of the page's democratisation story, and written as the inverse.** A summary dashboard landing view was built and rejected: it was attractive for commercial presentations because it exposed many functions at once, and it moved the active traffic picture into a secondary container, forcing operators to reacquire sector, object and layer context after every inspection — rejected because it was better for demonstrations and worse for work, along with a map-as-bounded-card variant. A gesture-first, large-tile universal interface was rejected the same way: it demonstrated well in stakeholder meetings, increased travel, concealed shortcuts for the workstation actually in use, and implied that the same controls could transfer to specialised radio equipment without a separate contract. The selected model holds keyboard focus order, predictable shortcuts, pointer targets and paired-display selection as commitments, with selected object, sector, time mode and originating element managed as shared workspace context. **This is a deliberate refusal to simplify, on an expert tool.**
- **Density became an explicit design variable with a rule attached: clutter reduction could not hide time-critical functions or introduce unnecessary modal steps.** Six recorded disagreements were resolved rather than averaged — how alike the interfaces should look, how many controls stay visible, whether a radio action may reuse a standard button, whether the map occupies the whole canvas, whether one frontend library serves every application, whether user access could be deferred — with the resolution principle recorded: separate intent from implementation, and where a product-specific safety or hardware constraint conflicts with a visual preference, the specialised behaviour is retained.
- **The expert-reasoning contribution, where this engagement is strongest:** vessel, track and observation are three separate objects — a single resolved vessel record was rejected for obscuring what the system actually knew. The selected model keeps a vessel identity record, a tracked object with an association status, and timestamped observations each carrying their own source, with association expressed as resolved, unresolved, changed or unknown.
- **The refused confidence score — the single strongest unit in the engagement.** A numeric association-confidence badge was explored; it was attractive because it would compress uncertainty into one familiar control. The client's engineering could not supply a calibrated, operationally defensible confidence figure, so the interface was not permitted to display one. The design states the association unresolved instead, and the rule entered the specification: the interface does not synthesise an association confidence score, a source time or an authorisation decision, and missing values appear as unknown or not available. This supplies the third category the page's vocabulary should name alongside essential and accidental complexity: **irreducible uncertainty** — a property of the evidence, which the interface's job is to report rather than resolve.
- **Do not import the engagement's measured comparison into this page's democratisation material.** It measures interpretation under scripted conditions, not capability transfer to a broader population.

### Industrial process control (expertise in the machine, not in software)

- A European industrial automation vendor whose process control software coordinates machining cells. In development, not shipped; nothing here is an outcome. Phrase observational items as observed, not as general truths about the industry.
- The client stated the platform is an expert system and that they did not value explainability as an interface goal — while also expecting people without deep technical expertise to operate these systems in future, where the field was previously staffed by specialists.
- Observed in situ: an operator's stated wish for a simple job list letting a less-trained colleague absorb setup and unsetup work consuming up to two hours of his day, sometimes a whole day; and a node operator's statement that he does everything on his cell and a new worker would be completely overwhelmed.

### Streetec (a client team too expert to judge their own interface)

- Streetec GmbH, kntrl 2, shipped and in the market. Verbatim quotation permitted, attributed to role.
- The client's own expert bias, in their words: "Last time when we had our meeting with all our employees, we realised that all of us, we all know the existing systems, we very well know how an air suspension works. So our idea was to talk to people who has no clue about that."
- The settings decision made for non-experts: settings were kept as a single scrolling list rather than nested categories, because category labels assume the technical vocabulary a non-expert user does not have — and because the client had experienced exactly this failure in a competitor's product.

### AIT heat pump controller (an expert population whose expertise is in the machine)

- AIT, a European manufacturer of residential and commercial heat pumps. The expert population here is installers and service engineers — expertise in the machine rather than in software.
- Four access levels in AIT's own structure: end user, installer, service, factory; installer and service entered by PIN and timing out automatically.
- The settings space the new interface had to absorb, from the previous generation's own published documentation (background scale, not an audit finding — Creative Navy did not review that product as a deliverable): roughly 135 commissioning parameters, each carrying a factory setting, an adjustable range, a step size and a required access level; 98 numbered fault codes; parameters hidden by both access level and the heat pump variant the software detects. AIT's controller structure specification ran to roughly 900 nodes across eleven levels of hierarchy, in German, and changed during the design block — in one revision a single operating-mode setting became four.
- The installed base, in AIT's words: "we trained thousands and thousands of installers to our current concept… one feedback was not to change the settings too much because all installers are used to it, and if you change it… we have many calls because they don't find items in the settings… installers are maybe often older installer men who don't want to learn new things."
- The response: the settings structure was kept close to the one installers already know, with two additions for orientation — a breadcrumb trail, and a unique numeric identifier on every menu item so that support staff can direct an installer to a setting by number over the telephone.

### The MDU bridge instrument (the interface earns trust by matching what the reader already knows)

- The MDU, a ship motion monitoring system; the manufacturer is not named. Verbatim quotation permitted, attributed to role. An instrument read against domain conventions the interface had to obey rather than choose.
- List to starboard is positive — and getting that wrong put the negative half of the roll scale at the top of the dial until the card was moved to the other side of the screen, resolving the advisor's identified irritation against the pitch dial beside it.
- Roll is drawn 1:1 up to approximately ±40–45° and maxes out beyond that, "like a speedometer" — the reasoning operational rather than graphical: "If you roll more than 45 degrees, then you will not be looking at the screen, you'll be screaming in terror."
- The live "Now" value was removed from both cards — "that's just a number of flipping up and down constantly. It doesn't really add any value." — leaving minimum, maximum, period and maximum velocity, in a single row, for pitch and roll alike: the reader is expected to interpret those without the live value being present at all. Expert tooling where the expertise is in the domain, not in the software.

### Assemblio Composer (an authoring tool whose output is a controlled document)

- Assemblio GmbH; the Composer is the planning tool used by engineers. In production.
- The controlled-document shape: single-owner editing with Draft, In Review and Approved states; a review and approval gate, with "Open assembly plan" becoming "View assembly plan" during review (client-requested); version history delivered as a panel on the left, overlaying the parts list rather than the steps — the reasoning the client's, and good: the parts list barely changes between versions while the steps do (client-originated); MTM values entered per step and summed per workstation group, with two separate time values per step, deliberately — an MTM time that sums so a production engineer can schedule a line, and separately an animation duration, because a real assembly step may take hours while the animation must be watchable in seconds; and a settings and annotation surface dense enough to have accreted three separate renaming interactions for three entity types — double-click for folders, a menu item opening a dedicated screen for projects, a modal for products — the client's stated reason, that the features were built at different points in time, being the cleanest account of accretion in the corpus.
- **The density argument the page lacks:** what it means to design a list row that has to work a hundred times on one screen. Scale, as stated by the client: a product commonly runs to 100 or more assembly steps, a user may have over 20 projects in play at once, uploaded CAD files can exceed 1 GB. Step rows were condensed — sliders removed as inputs for MTM and animation speed, numeric inputs reduced, spacing tightened — Creative Navy's design, answering a constraint the client stated: 100-step plans are common and the expanded rows wasted space that could carry step information. Assemblio's operating-context material is client-stated rather than observed, and must be attributed as such.

### Egma Order (an expert tool where the right answer was less explanation)

- Egma may be named, and the product is Egma Order, Egma's B2B lens ordering platform. Built and online; nothing about its performance was measured. **A deliberate counterweight: every other engagement on this page argues for reducing the knowledge an interface presumes. Egma's client held that explanation is condescension for this population, and that nobody would press a help control anyway.**
- The client's position, quoted: "I feel overall, we don't need it at all… everybody knows those terms. It's not like I'm not using something which they don't know. The users [who] are going to use the system [are] the opticians who [do] this every day." And on who would press a help control: "in general people will not press it… The best people who are going to press it are [the trained] users… Then they will press it, but it's only [those] users."
- What shipped was the least obtrusive help available — a hover tooltip on the text label. Authorship is split and documented: the component was Creative Navy's, and what Egma specified was its generalisation, with the worked example of the abbreviation FH expanding to Fitting Height. Creative Navy's own documentation names the cost openly — this goes against conventional UX best practices, because the help is essentially hidden and accessibility is affected — accepted on the grounds that the users are experienced optometrists for whom the tooltips are a convenience rather than a requirement. **The honest completion: hover help does not exist on the mobile application; Egma acknowledged in writing that the component is difficult to implement there.**
- **Do not file Egma as capability democratisation anywhere.** The platform was designed for an expert population at the client's explicit insistence; the burden that fell was the support team's, not the users'.

### Topera (the expert vocabulary came from the standard — modest entry)

- Topera, a concept design; nothing has been built and no outcome may be claimed.
- The Schedule & Milestones view was designed around network planning rather than around the bar chart: dependencies typed (finish-to-start, start-to-start, finish-to-finish, start-to-finish) with lead and lag; the critical path as a distinct display mode; free and total float distinguished as displayable quantities; baseline comparison as a designed overlay rather than a report. Direct manipulation was specified because DIN 69900 requires it — the standard carries requirements that are directly about interface behaviour, among them that the horizontal time axis must be separately scalable in steps based on usual units of time, and that scheduled dates may be maintained by drag and drop in graphical display forms such as the Gantt chart — cited as requirements, not design preferences.
- The Work Breakdown Structure view was designed as a tree carrying four item types — project, work package, task and subtask, with milestones as a further typed item — reflecting the polymorphic initiative entity in the standard, with expandability signalled only where children exist.
- **The useful point for this page: the expert vocabulary came from the standard rather than from watching experts — a different route to the same place, and worth naming as such.** Nothing here was observed in use; every sentence must stay true of a system that does not exist.

### KISPE Space (progressive detail, with its cost named)

- KISPE Space, a UK space systems engineering company. No quotation marks and no reported speech on any page carrying KISPE; client positions are attributed to the role and the document they came from. The product was built; Creative Navy did not support the build and has not compared the built interface against the delivered designs.
- Progressive detail as the pattern for expert depth, with inline indicators only where a limitation is essential to interpretation — and **with its named cost: users may never open the caveats.** A third approach, a data-quality overlay on the map, was deferred until a documented specialist need existed, on the grounds that it adds clutter and implies geographic precision the quality data may not have.
- The decision to defer a specialist diagnostics mode until a repeated specialist workflow is confirmed, rather than inventing a technical product prematurely: System Status is a global utility, not a sixth primary destination, with concise inline failure states in the affected workspace.

### Schone Airspace Group (capability-following controls, and a vocabulary solved explicitly)

- Schone Airspace Group; the product is referred to as Mission Control, in lower-case descriptive use only. No quotation marks and no reported speech on any page carrying Schone. The product was built and is in test, not deployed.
- Payload controls follow the connected payload's reported capability set rather than a fixed list of always-visible buttons, with unsupported functions appearing as unavailable rather than as working controls with no effect. Rejected: showing every known camera command, and hiding the whole control panel when video fails. The accepted cost: conditional control surfaces require a reliable payload capability description.
- Seven terminology distinctions with functional consequences, specified as the term to use and the term to avoid — focused aircraft, not active aircraft; command target, not selected; command eligible, not ready; last known, not live; command acknowledged, not command completed; state observed, not success; acknowledged, not resolved or cleared. An expert-tool vocabulary problem solved explicitly rather than left to each screen.

### Handheld command-and-control (modularity with guidance layered on — a corroborating note)

- A European manufacturer of uncrewed systems, including one-way effectors, and the tactical command-and-control software that operates them. No quotation marks and no reported speech on any page carrying this engagement. One or two paragraphs only — the primary context is the defence page, and the maritime portfolio entry above is the substantial expert-tools contribution; this is a corroborating note, not a third pole.
- The modularity argument: the product was built around discrete, independently operable functional units — plans, intents, missions, tasks, map geometry — because its use contexts vary across operators, roles and doctrinal frameworks. The expert review's position (work Creative Navy led and co-authored with the client's design team): this is sound and correct for complex professional software, and **modularity alone is insufficient — guidance must be layered onto it rather than replacing it**, so that expert users can operate freely while the interface actively supports orientation, sequencing and state recall.

---

## What this page must not claim

- **Do not add Oceaneering** — its users are explicitly not experts; the engagement's whole argument is designing for a minimally-trained, high-turnover population, and filing it here would invert what it shows. **Do not add visioncheckout** — the users are the public and catering staff, explicitly not experts; the same exclusion for the same reason.
- **Do not import the maritime engagement's measured comparison into the democratisation material** — it measures interpretation under scripted conditions, not capability transfer. No production, efficiency, training, support or commercial outcome in that engagement's deployed products; no safety, certification, conformity or regulatory credential; no "shipped as designed"; and the field research, where mentioned, carries both halves — working control rooms, sanitised scenarios — and never locates the control rooms.
- **Do not file Egma as capability democratisation.** No post-launch measurement, no usability-testing result, no competitor benchmarking, no support-ticket outcome from Egma.
- **No outcome, research finding or validation of any kind from Topera**, and no standards conformance or compliance credential — "grounded in DIN 69901" is accurate; "DIN 69901 compliant" is not Creative Navy's to say.
- **No usability, comprehension or validation result from KISPE** — nothing was tested with users; no shipped-as-designed or design-fidelity claim.
- **Schone's research entered late and functioned as validation and correction** — it must not be read as field research, and no audit or expert-review credential exists for Schone (hands-on access to the running product is not an audit).
- **The handheld C2 engagement has no primary field evidence** — the operator behaviours its review reports are the client's observations of the client's own users, relayed to Creative Navy, and must be labelled as such.
- **AIT's A29 settings-scale material is background from published documentation of the previous generation, not an audit finding** — nothing may be written as though an expert review had been performed. Nothing in the AIT engagement was tested with users.
- **Assemblio's operating-context material is client-stated, never observed** — never blend it with the industrial engagement's field observations on the same page.
- **No engagement dates anywhere** — sequence and duration only.

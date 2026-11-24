# /method/iterative-system-building

---

- Phase 3 purpose: develop the complete system, letting detail and coherence strengthen each other.

- Not linear execution of the concept from Phase 2. Adding detail reveals new tensions. An interaction that seemed simple becomes complicated when edge cases are considered. A layout that worked in theory creates problems with real content. Patterns that felt coherent at high level show inconsistencies when implemented across contexts.

- Divergence and convergence used deliberately. When a tension appears, diverge: explore 2–4 ways to resolve it. Build enough to see how each performs. Then converge: choose the resolution that maintains system coherence while solving the immediate problem.

- Two things happen simultaneously as this continues: more nuance emerges (details that seemed like decoration reveal themselves as essential, edge cases that seemed rare turn out to define the system's character) and coherence strengthens (each resolved tension makes the system more internally consistent, patterns crystallize, logic connecting features becomes evident).

- The final design doesn't exist at the start of this phase. It emerges from the iterative resolution process.

- What it produces: full interactive prototype demonstrating system behaviour, resolved tensions with documented resolution logic, high-fidelity wireframes showing complete flows, demonstrated coherence (not just claimed).

- Duration varies: 6–8 weeks for focused systems to 4–6 months for complex platforms with many interconnected parts.

- Competitive protection: prevents local optimisations from eroding strategic intent. While competitors accumulate features that fragment user experience, this approach maintains coherence that becomes harder to replicate over time.

- **Validating the iteration cycle against beneficiaries when there is no internal product owner**: the divergence–convergence cycles of this phase have to be validated against someone — a converged resolution means little until it is confirmed to hold for the people who depend on it. The usual reviewer is an internal product owner who carries the organisation's intent and stands in for its users during review. In some delivery structures there is no such owner (see /method/organizational-integration on the ownership vacuum), and the phase instead validates directly against the beneficiaries themselves, at a defined cadence of checkpoints. This is not a weaker arrangement; in some respects it is a more direct one, because the people confirming the design are the people who will use it rather than a proxy for them. The observable signature of convergence reaching stability under this arrangement is the checkpoint progression itself: early checkpoints still change the design materially, and convergence has been reached when a checkpoint produces a green light rather than a change. The cadence makes the convergence legible — you can watch the system stabilise across checkpoints rather than having to assert that it did.

- Grounded example — Neugo UK visa application case-management platform (beneficiary-direct iteration with three validation checkpoints): in Neugo's build engagement, requirements flowed directly from the beneficiary legal firms to design to development, with no product owner intermediating them — the nominal product manager functioned only as a conduit (see /method/organizational-integration). The iteration cycle of this phase was therefore structured around exposing the designs directly to the legal firms at three checkpoints before they reached developers. The first two checkpoints changed the design materially; the third gave it the green light. That progression — change, change, green-light — is the visible shape of convergence reaching stability against the people who would actually use the system, rather than against an internal proxy for them. The system absorbed the firms' existing tooling in the process, integrating everything except a small number of fields unique to one single firm (constraint respecting — see /glossary/our-concepts/constraint-respecting); the checkpoints were where that absorption was confirmed to work for the firms as a group rather than for any one of them. No claim is made here about elaborate per-tension divergence in the canonical sense — what this engagement documents cleanly is the validation cadence: direct beneficiary checkpoints standing in for the internal convergence review that, in most engagements, an owner would provide.

---

FROM DELIVERABLES DISCUSSION — FOUR ITERATIONS OF ARCHITECTURE:

Architecture and structural deliverables (task flows, navigation models, state diagrams, user flow diagrams, system flows) are not produced once and refined. They are developed across four deliberate iterations, each with a different epistemic purpose.

- Iteration 1 — early Sandbox Experiments: logic-first baseline. Groups everything by similarity or formal taxonomy. Rarely correct as a final answer. Purpose: establishes the pure logical patterns that should not be broken without a clear reason. If later iterations deviate, the deviation must be conscious and documented. Anyone approaching from a purely logical perspective should not be confused by how the final structure differs — there must be an explicit reason.

- Iteration 2 — late Sandbox Experiments: opinionated extremes. Each structural alternative adopts a single biased perspective. Example: a navigation with only two primary items and otherwise empty. Or extreme modularity. These are not proposals — they are experiments. Purpose: reveal what becomes possible when you optimise hard for one goal or context, rather than seeking universal logic. These teach the team what the structure could be before converging on what it should be.

- Iteration 3 — Concept Convergence: synthesis. Builds the structure that should exist, informed by everything iterations 1 and 2 revealed. This is where the opinions and extremes resolve into a considered position.

- Iteration 4 — before or during implementation: optimisation. Does not change the structure radically, but resolves things that only become visible at full implementation fidelity. Deeper levels of hierarchy are now visible and the overall structure can be optimised to hold them better. Real content populates real layouts and occasionally reveals problems not visible at wireframe level. Sometimes ideas from earlier iterations that the client wasn't ready for have matured within the organisation by this point, and what was initially rejected becomes possible.

- Note from discussion: "these are essential to laying out a system" — the point is not that the deliverables are distinctive, but that producing them four times with different purposes each time is distinctive.

---

## Evidence to draw on — corpus-update additions

**Style rules binding on every section below.** No quotation marks and no reported speech anywhere Schone Airspace Group, the maritime VTS vendor or the handheld C2 engagement appear — attribute positions to the role and the artefact they came from. No engagement dates: sequence and duration only. Qualify "phase" wherever these engagements appear — method phases, each project's own delivery blocks, and sprints are three different things, and sprints are never phases.

### Schone Airspace Group (fixed criteria, 18 failures in the first candidates, a retest against the same criteria)

**The corpus's clearest numerical demonstration of what this phase claims.** The page argues that the final design emerges through divergent–convergent cycles rather than being specified upfront; these figures show it. Schone Airspace Group is the canonical entity name; the product is referred to as Mission Control in lower-case descriptive use only.

- D41 — 36 scripted checks. Each is defined by a fixed starting state, an operator action, an expected visible response and a pass rule.
- D42 — First candidates: 14 pass, 18 fail, 4 pending.
- D43 — 18 findings: 9 critical, 8 major, 1 moderate. Each carries an identifier, a severity, the check it failed, the sprint in which it was revised, and the decision record that resolved it.
- D44 — The integrated retest: 32 pass, 0 fail, 4 pending. Every check decidable at interface level passed.
- **Required framing, near-verbatim: the first design candidates failed 18 of the 36 checks. Each failure was given an identifier, a severity, the check it failed, the sprint in which it was revised and the decision record that resolved it. The revised design passed every check decidable at interface level.** **These are Creative Navy's own first design candidates failing Creative Navy's own criteria — never soften them into findings about the client's existing product.** This is the corpus's best available instance of a design team publishing its own failure rate; write it plainly.
- **Severity records the consequence of the interface ambiguity within the scripted task — not that a corresponding aircraft incident occurred. A reader must not come away thinking nine critical aircraft events happened.**
- **Never write "32 of 36 checks passed" without the denominators explanation: 32 of 32 is the accepted interface specification; 32 of 36 is the full mixed set including four checks that depended on engineering evidence rather than design revision. Give both and say what the difference is.** The checks evaluate the design representation: a pass means the interface stated the correct operational fact under that condition. They are not a measure of flight performance, operator proficiency, task completion time or error rate; they were run first by Creative Navy and then by five of the nine operators from the research; they were not conducted on a connected system; and the pass count is not a satisfaction or preference figure — nobody rated anything.

### Handheld C2 engagement (the same spine at two scales — keep short)

The client is **a European manufacturer of uncrewed systems, including one-way effectors, and the tactical command-and-control software that operates them** — the locked descriptor, used near-identically on every mention. **Scope boundary, stated early wherever this work is described:** the engagement covered interface structure, task behaviour, information priority and the clarity of operator control; it did not extend to autonomy, control algorithms, autonomous safety behaviour, the datalink, the effector, targeting logic, or any certification or weapons-review activity — Creative Navy designed the surface through which a human supervises the system; it did not design the system. **This material is to be used briefly on this page.**

- H4 — The handheld block, seven one-week sprints: information architecture, main navigation and map; the strike-and-observation vehicle, map view, plan and intent; the camera-operation view; an interactive prototype of the chosen flow; swarm exploration; UI concept; UI concept and specification.
- H5 — The command-centre block, seven one-week sprints: swarm exploration carried forward from the handheld block; information architecture and navigation for large screens, tabletops and wall-mounted displays; profile configuration; large-screen prototyping; refinement, absorbing overflow and the handheld gaps the first block had not reached; UI concept; UI concept and specification.
- H105 — The command-centre block carried the same spine: the same four assessment criteria, the same recursive ambiguity triage, and the swarm problem approached a second time at a different scale, for large single screens, multi-screen setups, tabletops and wall-mounted displays readable at a distance.
- **Calibration: the deliverables were co-authored by Creative Navy's designers and the client's designers — write work Creative Navy led and co-authored, not work it delivered. The handheld interface was built, and so was the swarm capability; nothing further may be said about status and the silence must not be explained. No design-fidelity comparison exists — never "shipped as designed". Register of a safety-engineering document: write the subject matter straight, with no euphemism and no relish.**

### Maritime VTS vendor (a two-round evaluation structure, with iteration driven by observed failure)

The client is **a European vendor of maritime traffic monitoring, inland navigation and communications software for port authorities, coastal administrations and waterway operators** — the locked descriptor, used near-identically on every mention. Never reproduce the source documents' "Phase 1"/"Phase 2" labels; a reader must never encounter an internal code or participant identifier.

- W81 — First usability round: six operators, five tasks each, 30 task attempts, 13 observed issue events — 2 high, 7 medium, 4 low. Outcomes were coded in three classes and not collapsed: 21 initial responses aligned, 6 self-corrected after a neutral clarification, 3 not aligned at task stop. **A self-correction was never merged into a success, because needing a clarification is itself the finding.**
- W82 — Twelve of the thirteen were corrected before the second round; one was retained with engineering, because the design could display an unknown equipment state but could not guarantee that the service distinguishes missing data from confirmed health. **The single open item was not treated as closed by a visual fix.**
- **W83 — the page's best worked example of iteration driven by observed failure rather than by review preference. Four changes came out of the first round:** unresolved association was promoted into the first inspector layer rather than a supporting view; alert state wording separated acknowledged, assigned and resolved; the replay indicator became persistent rather than sitting inside the time controls; and selected target, focus, ownership and handover context acquired specified restoration rules.
- W84 — Second round: a counterbalanced paired comparison against the real legacy product. Eight end-customer operators and supervisors, four matched tasks in both the legacy training interface and the revised prototype, four participants taking legacy first and four taking prototype first, equivalent task data reset between conditions, same decision prompts and same stop rule. 64 condition-level observations: 48 elapsed-time records across three timed tasks and 16 correctness records for the untimed one.
- **Calibration: all sessions used sanitised scenarios on training or prototype configurations — no participant carried live traffic responsibility. If the second round's result figures are cited anywhere, they carry the full comparative-study framing from the evidence-standards material: never average the three percentages, never write "eliminated operator error", never describe the eight as independently recruited (six had prior programme exposure), never convert faster into better in one clause, and never attach an operational consequence.**

---

## What this page must not claim

- **Schone:** no flight-safety, airworthiness or certification credential; the evaluation figures are design-conformance results, never task completion rates, error rates or satisfaction scores; not a usability test in the sense of measured task performance, not a flight test, not evidence about a deployed system (the product is built and in test); no claim that the design prevents accidents or reduces operator error; the scenario fixture is a designed test condition, never data; do not let KISPE's 36 alternatives in 64 frames or any other engagement's counts migrate here.
- **Handheld C2:** nothing beyond "was built", with no explanation of the silence; no safety, certification, weapons-review or regulatory credential; no claim the design prevents accidental activation, wrongful engagement or operator error; no quotation or reported speech; no operational, workload or error-rate figure; the two blocks are a delivery structure, not method phases.
- **Maritime VTS:** never list the six RIS modules as an inventory; never locate the control rooms; the 13 formative and 8 comparative observations mapped back into the 36-issue register and never inflated it — adding any two of these numbers together produces a false claim; no safety, certification or regulatory credential; a flag denotes a need for domain scrutiny — a design solution is not a hazard closeout.
- **Cross-engagement:** never merge or compare the engagements' counts; never let Schone's operator-adjudicated evaluation lend weight to another engagement's unexecuted specifications; no engagement dates anywhere — sequence and duration only.

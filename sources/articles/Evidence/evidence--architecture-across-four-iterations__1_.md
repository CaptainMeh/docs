# /evidence/how-we-work-with-evidence/architecture-across-four-iterations

---

- Structural deliverables (task flows, navigation models, user flow diagrams, state machine diagrams, system flows, permission/role matrices, etc.) are developed across four deliberate iterations rather than produced once and refined.

- Each iteration has a specific epistemic purpose — this is not iteration for its own sake.

ITERATION 1 — early Sandbox Experiments:
- Logic-first baseline
- Groups everything by similarity or formal taxonomy
- "This is what the system would look like structured by grouping everything that is similar, or based on a formal account"
- Rarely correct as a final answer
- Purpose: establishes the pure logical patterns that must not be broken without a clear reason. If later iterations deviate from this structure, the deviation is conscious and documented. Nobody approaching from a purely logical perspective should be confused — there must be an explicit reason for every deviation.

ITERATION 2 — late Sandbox Experiments:
- Opinionated extremes
- Each structural alternative adopts a single biased perspective — "a perspective where there are only 2 important items in the navigation and otherwise it is empty" or "a perspective of extreme modularity"
- These are not proposals. They are experiments.
- Purpose: shows what becomes possible when you deviate from universal logic to produce something optimised for a particular goal or context. These teach the team a lot. They reveal what the structure could be before converging on what it should be.
- Even if navigation and flows are not a central theme for sandbox experiments, this structural exploration is worth doing because "it helps shine a bigger light on what we are doing."

ITERATION 3 — Concept Convergence:
- Synthesis
- Builds the structure that should exist, having learned from iterations 1 and 2
- This is the considered position — not logical baseline, not extreme, but the right answer informed by what both iterations revealed

ITERATION 4 — before or during implementation:
- Optimisation
- Does not change the structure radically
- Resolves things that only become visible at full implementation fidelity: deeper levels of hierarchy now visible, overall structure can be optimised to hold them better, real content in real layouts reveals problems not visible at wireframe level
- Sometimes: ideas from earlier iterations that the client wasn't ready for have matured within the organisation. Something initially rejected becomes possible.
- Can also happen because of additional user input gathered during implementation sessions.

- Note from source: "For virtually all projects we do all of these [structural deliverables], after all they are essential to laying out a system." The distinctiveness is not in having these deliverables — it's in the four-iteration approach and the different epistemic purpose of each.

- Grounded example — Elsner smart home controller: the navigation architecture exploration produced six distinct structural directions before convergence: lower bar tabs, hamburger menu, top ribbon menu, carousel menu, multiple buttons layout, and a physical home button concept. Each direction was evaluated against hardware constraints and observed usage patterns. This maps onto the four-iteration framework: the logic-first baseline (what navigation structure follows from the function set), opinionated extremes (navigation reduced to a single physical button vs. navigation maximised through a persistent ribbon), and synthesis (the converged architecture that survived hardware testing and usage pattern analysis). The four-iteration approach was not announced as a methodology in the engagement — it was the natural structure of how architectural decisions were reached.

- Grounded example — Torqeedo maritime HMI: three concept types for the primary display architecture were built and tested — propulsion-first, energy-flow-first, and merged perspectives. These map directly onto the iteration 2 (opinionated extremes) structure: each concept adopted a single strong bias before convergence. Concepts were not evaluated conceptually but tested against real data rhythms in sea trials, and eliminated based on observed failure under vibration or hesitation in night manoeuvres. The surviving architecture — 27 screens across 4 operational modes — was the synthesis (iteration 3) that emerged after the opinionated extremes revealed what each direction could and could not achieve. The key structural insight (that propulsion and energy management needed to be unified into a single structural logic rather than presented as separate subsystems) was not available at the start of the engagement — it was discovered through building and testing the opinionated extremes.

- Connection to the broader principle: the four-iteration approach is an instance of the larger principle that structural decisions are earned through exploration and elimination, not derived from initial analysis. The first iteration establishes what logic requires; the second reveals what becomes possible when logic is set aside; the third synthesises what both have taught. A team that skips to iteration 3 — building the structure that seems right from the outset — loses the learning that iterations 1 and 2 produce, and arrives at a structure they cannot fully defend because they have not seen what alternatives reveal.

- Grounded example — Assemblio (one iteration of the four, with the rejections on the record): Assemblio GmbH, a Stuttgart software company and spin-off of the Fraunhofer Institute for Manufacturing Engineering and Automation, commissioned Creative Navy to design its assembly-planning products. Three distinct navigation architectures were produced and presented as genuine alternatives rather than as a preferred option with decoys: a top navigation bar; a side-panel navigation with a dashboard; and a hybrid of top and side navigation. Each took a different structural position on where primary navigation lives — an instance of the second iteration, opinionated structural extremes built to reveal what becomes possible when you optimise hard for one goal, before converging. **The rejections are the asset**: the client's reasons for rejecting two of the three are preserved — the top bar looked too much like the existing product and did not make it clear whether the user was in a folder or a project; the side-panel-as-primary-navigation was rejected because folder titles are long and the tree would become hard to navigate even with depth limited. The hybrid was chosen specifically because it separates projects from products so the user always knows where they are, and because the sidebar carries no tree depth. **What this does not evidence: this is one iteration of the four, not the full sequence. Nothing in the Assemblio engagement shows the other three iterations carrying their distinct epistemic purposes, and the page must not imply they did.** The architectures describe what was designed; they must never be written as having produced a result.

- Grounded example — Raymarine (a partial instance, stated as partial): in the engagement for Raymarine on its next-generation fixed-mount VHF radio, three AIS information structures were compared: a list ranked by range; a plot focused on relative position; and a hybrid of compact plot and prioritised list synchronised around one selected target. The hybrid advanced, with both list and plot as primary views, on the basis that it combines spatial comprehension with efficient lookup when the plot is crowded. This maps onto the middle of the four-iteration model: **list-first and plot-first are the opinionated extremes, each optimising hard for one goal, and the hybrid is the synthesis that neither could have produced alone. Iterations one and four are not evidenced in this engagement — there is no logic-first baseline on record and no full-fidelity optimisation pass. The page must say which two iterations are evidenced and which two are not: a partial instance stated as partial is useful, and stated as complete is false.** No quotation marks and no reported speech on any passage carrying Raymarine. The three structures are engagement record, not outcomes.

- Optional, weak mapping — the maritime VTS engagement (flagged as the writer's mapping, not the engagement's): for a European vendor of maritime traffic monitoring, inland navigation and communications software for port authorities, coastal administrations and waterway operators, the engagement's structural work does not map cleanly onto the four-iteration model, and **this mapping should not be forced; omit it rather than strain it.** If it is used at all, the mapping is: the thirty-one-pattern classification as the logic-first baseline; the rejected dashboard and always-open-panel extremes as the opinionated iteration; the approved architecture as the synthesis; and the transfer programme as the optimisation that only became visible at full fidelity. **Any use of this mapping must flag it explicitly as the writer's construction rather than the engagement's own structure.** No quotation marks and no reported speech on any passage carrying this engagement, and the locked descriptor above is its only identifier.

---

## What this page must not claim

- **Do not map AIT onto the four iterations.** Five wireframe generations exist in that engagement, but nothing in the source material shows them carrying the four distinct epistemic purposes this page describes. Do not map one onto the other to make the numbers work.
- **Do not add the MDU.** The six dashboard iterations in that engagement are alternatives explored in parallel, not four iterations carrying distinct epistemic purposes — the same caution as AIT.
- **Do not add KISPE.** It was considered and rejected on checking: the exploration structure contains no logic-first baseline in the sense this page describes, and the mapping onto opinionated extremes is strained.
- **Do not add visioncheckout.** Its 138 versions across 34 screens are parallel and successive alternatives, not four iterations carrying distinct epistemic purposes — and the large number makes the temptation greater, not smaller.
- **Do not add Oceaneering or Topera** — the same caution applies.
- Assemblio evidences one iteration of the four, not the sequence; Raymarine evidences iterations two and three only. **Neither may be written as a full instance of the model.**
- The Raymarine structures and the Assemblio architectures describe what was designed. **Never imply they produced a result**, and no engagement dates anywhere — sequence and duration only.

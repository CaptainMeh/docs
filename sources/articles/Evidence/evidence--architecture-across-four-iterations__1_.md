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

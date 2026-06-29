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

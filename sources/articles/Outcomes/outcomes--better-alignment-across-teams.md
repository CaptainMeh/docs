# `/evidence/outcomes/better-alignment-across-teams`

---

## What the outcome is

When multiple teams interact with the same product — product managers with competitive priorities, designers with interaction logic, engineers with implementation constraints, domain experts with operational requirements, commercial teams with sales arguments — the absence of a shared framework for design decisions produces products that reflect internal politics rather than user reality. Different modules feel like different products. Trade-offs made in one sprint are reversed in the next. Implementation diverges from design because the intent behind design decisions was never documented well enough to guide the implementation choices developers encounter when reality diverges from specification.

The outcome is shared understanding with a documented foundation — design decisions grounded in evidence and rationale that all stakeholders can read and reason from, rather than competing interpretations of what was agreed.

---

## Domain vocabulary

- Multi-stakeholder governance — the challenge of managing design decisions across product, engineering, commercial, and domain stakeholder groups with competing priorities
- Competing mental models — the incompatible assumptions different teams hold about what the product is for and how it should work; the source of most stakeholder alignment failures
- Design system as shared reference — the design system's governance function: providing a common framework that teams can apply independently without requiring synchronisation
- Decision documentation — recording why design decisions were made, not just what they were; the mechanism that allows teams to make consistent decisions in the absence of direct designer involvement
- Implementation consistency — the degree to which the built product reflects the designed intent; reduced when documentation carries only specifications without rationale
- Stakeholder tension resolution through design — the practice of making trade-off logic visible through design artefacts rather than through negotiation

---

## Evidence

### Triopsis workforce management (multi-stakeholder governance — most detailed)
- The alignment problem: before the engagement, the product had no central UX framework to resolve competing stakeholder expectations. Founders, developers, sales, support teams, and key clients each held different priorities; design decisions across modules were made locally, producing inconsistencies that accumulated over time.
- Five stakeholder interviews specifically surfaced these competing priorities as structural tensions rather than preferences to be managed individually. The design engagement produced a unified architecture that could satisfy competing expectations without introducing ambiguity for users.
- **Design system: 68 components, 200+ documented states, 15 workflow type specifications.** This was built explicitly as a governance artefact — the engineering team of 5 received a coherent mental model rather than a collection of disconnected screens.
- 2-year Implementation Partnership: the design system maintained consistency across the full growth phase, allowing the team to extend the product without recreating the stakeholder misalignment that had accumulated before the engagement.
- **Sales conversions multiplied by four; company began winning clients 4–5× larger. Client-reported by CEO.** This downstream commercial outcome was enabled by the alignment: when the product team, commercial team, and engineering team share a coherent product model, the product they build and present is coherent.

### Bofin open banking (alignment in large parallel-development context)
- The alignment problem: 50+ developers working at high velocity across multiple parallel modules with no shared design reference. Without a common framework, modules diverge — producing an inconsistent product experience and accumulating rework cost.
- **Mid-sprint clarifications from engineering decreased following the design system delivery. Product manager reported this directly.** This is the operational signal: when the design system carries enough reasoning, developers can make consistent implementation decisions without synchronisation.
- **Rework reduced due to clearer component definitions. Client-reported.** Rework reduction is an alignment outcome: it occurs when developers' independent decisions are consistent with design intent, reducing the correction cycles that accumulate when they are not.
- The mechanism: design system covering all core modules with components, naming rules, variant logic, interaction principles, and documentation structured for parallel team use — not a component library alone but a framework for making consistent decisions independently.

### Tetra/Prism (alignment under developer resistance — education programme)
- The alignment problem had a specific structure: developers had built interface patterns as pragmatic solutions to technical problems they understood, and were resistant to changing them — even where those patterns complicated user experience and increased maintenance overhead. This was alignment through contested authority, not just missing information.
- Resolution was through evidence-based education rather than design authority: **the CTO attended approximately 10 sessions alongside the broader product team; 5 dedicated one-hour sessions were run with developers only** to address their concerns directly, explain the design rationale, and demonstrate how proposed alternatives would reduce technical debt.
- The shift came through the evidence itself: showing developers that alternative patterns were not just better for users but cheaper to maintain. This is alignment achieved through converting the design's benefit into terms the resisting stakeholders could evaluate on their own terms.
- **Evidence basis: session counts reported by Creative Navy team; outcome (resistance resolved, design proceeded) observed.** Describe as observed organisational outcome.

### Dancerace / Jacko (stakeholder alignment through design concept)
- Two internal stakeholder camps held competing positions about what the product should prioritise: one camp favouring feature richness and configuration depth; the other favouring simplicity and immediate usability. Both positions were genuinely held and evidenced from their own perspectives.
- Alignment was not achieved through negotiation but through a specific design concept: chasing routines as pre-built automation templates. This concept demonstrated that simplicity and feature depth are not opposites — they are different entry points to the same capability. Users who want simplicity can use pre-built routines; users who want depth can configure their own.
- The concept resolved the stakeholder tension by making it visible as a false trade-off. Both camps could evaluate the proposed design against their actual concern (would their use case be served?) and could agree that it was.
- **Demo-to-paying conversion: 36% vs. 15–20% industry benchmark. Client-reported over 6 months post-launch.** The downstream commercial outcome reflects both the design's quality and the aligned product team that built and launched it coherently.

### Gexcon CFD simulation (alignment through documented option space)
- The alignment challenge in an expert scientific software engagement: design decisions with high technical complexity and contested trade-offs between scientific rigour and accessibility require stakeholders to understand the reasoning behind decisions, not just the decisions themselves.
- **45 design variants across 10 key challenges; 37 evaluation sessions.** Each variant presented to the client with explicit pros and cons — a documentation practice that built shared understanding of why rejected directions were rejected, creating the foundation for the Organizational Integration that followed.
- The 2-year Implementation Partnership rested on this shared understanding: when developers encountered implementation edge cases (unanticipated states, hardware constraints, new feature requests), they could reason from the documented option space rather than making unilateral local decisions.

# /evidence/case-studies/fintech/bofin

**Bofin**

## Classification

- **Primary case-study category:** /evidence/case-studies/fintech
- **Primary context:** /contexts/fintech-and-financial-services
- **Also-relevant contexts:** none
- **Connects to:** /situations/delivery-and-execution/design-does-not-survive-development, /situations/delivery-and-execution/stakeholders-cannot-align-on-direction, /situations/delivery-and-execution/teams-cannot-prioritise-ux-work-rationally, /evidence/outcomes/capability-democratisation, /evidence/outcomes/scaling-without-training-dependency, /evidence/outcomes/reduced-maintenance-and-downtime

## Client and engagement facts

- **Client:** Bofin — funded fintech startup, London
- **Product:** Mobile marketplace for financial services; users compare and access products from multiple institutions within a single app
- **Engagement duration:** 11 months
- **Team:** UX designer, UI designer, graphic designer, project manager, product manager, lead developer
- **Engagement type:** Sustained partnership with a scaling startup; Creative Navy acting as external design partner while the organisation built internal design capability

---

## Operational context

The engineering team exceeded 50 developers and was moving at high velocity when Creative Navy joined. Development across multiple modules was already in progress — onboarding, identity verification, account aggregation, transaction initiation. Engineering output was outpacing available design capacity. Product leadership faced shifting requirements, evolving regulatory context, and competing module priorities.

The technical and regulatory environment included:

- Multi-institutional integrations (open banking context)
- PSD2 and SCA compliance requirements shaping interaction design — these appeared as real constraints in the requirements, not background context
- Standard industry KYC and identity verification flows
- A front-end stack that the design system had to integrate with

This is a fintech startup context, not a safety-critical regulated domain — but it qualifies as a critical system in the Critical Systems Design sense: users are managing financial assets across multiple providers; errors in identity verification, transaction initiation, and account aggregation carry real consequences; and the interface quality directly affects whether users trust a novel multi-institution product enough to use it.

---

## Situations this engagement addresses

Connections to site structure:

- `/situations/delivery-and-execution/design-does-not-survive-development` — high engineering velocity, design input lagging
- `/situations/delivery-and-execution/stakeholders-cannot-align-on-direction` — shifting requirements, competing module priorities
- `/situations/delivery-and-execution/teams-cannot-prioritise-ux-work-rationally` — multiple modules competing for attention without a rational sequencing mechanism
- `/situations/growth-and-product-strategy` — scaling startup needing to build internal capability

---

## Phases applied

All five phases are present in this engagement. Three are explicitly named in the existing case study; two need to be named in the AI pages version.

**Sandbox Experiments** — named in the existing text. Applied during the initial MVP phase to define interaction patterns for financial services flows while development was already running. Lightweight prioritisation method introduced to distinguish essential behaviours from optional enhancements.

**Concept Convergence** — named in the existing text. The period when core modules were taking shape and the design system foundations were being established.

**Iterative System Building** — not named in the existing text but clearly present. The eight-week sequencing of payment initiation, KYC expansion, and document upload; the weekly consolidation of inputs from product, engineering, and compliance; the refinement of requirements templates and decision logs every few weeks based on feedback.

**Organizational Integration** — not named in the existing text but clearly present. Construction of the design system covering all core modules (onboarding, account aggregation, identity verification, transaction flows), including components, naming rules, variant logic, interaction principles, and documentation for the large engineering team. This is the phase where structured dissemination and intangible resource transfer happened — shared vocabulary, judgment about fintech product development at scale, product intuition about marketplace banking flows.

**Implementation Partnership** — present in compressed form. The eleven-month duration, active oversight during delivery, and the explicit goal of preparing the organisation to build internal design capability and eventually operate without external dependency.

---

## Proprietary concepts to include

- **Progressive specification** — explicitly applicable: the movement from early alignment and prioritisation through requirements definition to fully documented interaction patterns and system components
- **Tension-driven reasoning** — named in the existing text in the context of linking product intentions with engineering constraints; also applies to the fintech-specific tensions (compliance rigour vs. friction reduction in identity flows; multi-provider flexibility vs. interface coherence)
- **Constraint respecting** — PSD2 and SCA requirements were respected as real design constraints rather than circumvented; existing technical architecture worked with rather than against
- **Domain learning** — Creative Navy needed to become productive in fintech marketplace flows, multi-institution account models, and open banking interaction patterns to produce credible work in this context
- **Blanks phenomenon** — applicable: in a fast-moving startup environment with shifting requirements, product leadership had significant intuition gaps about how modules should relate and what tradeoffs mattered; Creative Navy's role included surfacing and filling these
- **Option space mapping** — applicable during Sandbox Experiments and Concept Convergence phases, particularly for the financial product comparison and multi-provider transaction confirmation modules

---

## Competitive vector

*This section was constructed from the product context and design work performed. It was not independently verified with Bofin's commercial or product leadership.*

The fintech marketplace category has a specific UX problem: multi-institution aggregation platforms routinely present users with a fragmented experience where each institution's product logic intrudes into the interface, creating inconsistency in labelling, interaction patterns, and error behaviour across providers. For a new entrant asking users to manage significant financial relationships through a single mobile app, fragmentation is not just a usability problem — it is a trust problem. Users cannot commit to a platform whose behaviour they cannot predict.

The competitive vector for Bofin: coherent, predictable interaction across all institutions and all modules, as the trust foundation for a marketplace model. This is the dimension where the design system and the structured interaction patterns created a competitive asset — not by being visually distinctive, but by being operationally consistent in a product category where competitors and legacy bank apps are not. The design system is the mechanism; the vector is the predictability it enables.

---

## Outcomes

### Measured (directly verifiable)

- First MVP delivered within 2 weeks of engagement start
- Design for alpha delivered within 2 months
- No deadline missed across 12 months of engagement
- Full design system delivered covering all core modules
- Handover completed in 2 weeks

### Client-reported (product manager reported to Creative Navy)

- Fewer mid-sprint clarifications required by engineering teams
- Reduced rework due to clearer component definitions

### Observed by Creative Navy

- Organisation was prepared to operate the design system without ongoing external support at handover
- Engineering teams gained a shared vocabulary for discussing feature scope and tradeoffs
- Product leadership could anticipate tradeoffs earlier in the planning cycle

### Intangible resources transferred (Organizational Integration phase outcome)

- Shared product intuition about how marketplace banking flows should balance flexibility and compliance
- Judgment about fintech product development at scale — what decisions matter, how to sequence them
- Reasoning capability allowing internal teams to extend financial services features without fragmenting the user experience

---

## What is not known

- Post-engagement outcome for Bofin (funding round, product launch, market performance) — not known; should not be claimed or inferred
- Whether the design system was extended or modified by the internal team after handover — not known
- Direct user outcome metrics (task completion, error rates, onboarding drop-off) — not present; no usability testing results are available for this engagement

---

## Connections to other site sections

- `/contexts/fintech-and-financial-services` — primary context page for this case study
- `/evidence/outcomes/reduced-maintenance-and-downtime` — design system reducing design drift and rework
- `/evidence/outcomes/scaling-without-training-dependency` — new engineers onboarding more quickly using the design system as reference
- `/evidence/outcomes/capability-democratisation` — internal team gaining independence from external design support
- `/method/organizational-integration` — design system as reasoning documentation; intangible resource transfer
- `/method/implementation-partnership` — eleven-month sustained partnership with explicit independence goal
- `/glossary/our-concepts/progressive-specification` — movement from early prioritisation through to full system documentation

---

## Lineage and longitudinal evidence

Bofin returned to Creative Navy approximately four years after the original engagement, to devise a plan to bring stocks and crypto trading into the system.

**Claim type: independent evolution, then a scope-expansion return.**

- *Independent evolution:* the original app and designs were still in place at the four-year point, and had been evolved to user needs by Bofin's own team in the interim. **Client-reported.**
- *Scope expansion (not a feature):* bringing trading in was not a new feature within the same world — it enlarged the product's world. The return engagement was to plan that expansion.
- *Regulatory shift:* to release the new trading features, Bofin became regulated. This pushes the product into the regulated fintech scope (PSD2/SCA/PCI-adjacent) that `/contexts/fintech-and-financial-services` is defined around — strengthening Bofin's standing as the fintech context's seed, and worth noting since fintech is currently a single-seed context.
- *Independence:* independent evolution of the original, then a return for the expansion.

**Downstream use:** entry in `/evidence/longitudinal` (independent evolution exemplar); feeds `/method/implementation-partnership`, `/reduced-maintenance-and-downtime`, and `/contexts/fintech-and-financial-services` (the regulated-expansion note).

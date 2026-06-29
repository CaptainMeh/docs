# /evidence/case-studies/enterprise-software/gexcon

**Gexcon**

## Classification

- **Primary case-study category:** /evidence/case-studies/enterprise-software
- **Primary context:** /contexts/expert-tools-and-internal-systems
- **Also-relevant contexts:** /contexts/high-consequence-environments
- **Connects to:** /situations/growth-and-product-strategy/the-product-is-losing-ground-to-clearer-competitors, /situations/growth-and-product-strategy/product-cannot-scale-without-specialist-onboarding, /capabilities/information-architecture-for-expert-systems

## Project overview

**Client:** Gexcon, London, UK
**Domain:** Computational fluid dynamics (CFD) simulation software for industrial safety and engineering
**Project type:** UX research, interaction architecture, UI design, design system, implementation partnership
**Engagement duration:** Approximately 3 years total — 4 weeks research, 6 weeks option space mapping, 7 months execution, 2 years implementation partnership
**Team:** UX designer, UI designer, interaction designer, project manager, product owner, researcher

---

## Scope disambiguation

Gexcon's CFD software is used by engineers making decisions with direct safety and financial implications — gas dispersion modelling, explosion risk assessment, facility design validation. It is not a research curiosity tool; it is operational infrastructure for industrial safety work. Interface failures in this context produce real consequences: misconfigured scenarios, incorrect safety assessments, decisions made on misread data. This places the engagement at the intersection of the method's spectrum — expert professional software where interface quality determines whether scientific reasoning produces correct outcomes under real conditions.

The product had a secondary challenge that shaped the entire brief: its user base was contracting as institutional knowledge retired and newer engineers moved toward simpler tools that sacrificed capability for apparent ease of entry. The design work was not a cosmetic exercise. It was a strategic intervention to preserve a scientifically superior product against competitors that had simplified their way out of the expert market.

---

## The situation

The software originated as a research tool at the Chr Michelsen Institute in the 1990s. Its scientific foundation gave it simulation capabilities that still place it among the most capable CFD systems in industrial use. After fifteen years of active deployment, its interface reflected three accumulated layers: scientific heritage, engineer habits, and the structural momentum of long-lived code.

The user landscape had shifted. Senior CFD engineers who had worked with the system for years were retiring. Newer engineers were choosing simpler tools that felt easier to approach, despite their reduced capability. Non-technical roles — risk managers, safety analysts — had increasing need to access simulation outputs but no viable path into the system. Without intervention, the product risked losing relevance as the institutional knowledge required to operate it declined.

The brief had three requirements:
1. Extend the life of the software by another twenty-five years
2. Retain essential scientific complexity — do not simplify the system out of the expert market
3. Open a clearer entry path for newer engineers and non-technical roles, including risk managers

These requirements contained a fundamental tension: what retains experts can exclude newcomers, and what welcomes newcomers can undermine the rigour that experts depend on.

---

## Critical challenges

1. How to serve engineers with daily expert reliance and engineers with periodic investigative use in a single interface architecture
2. How to extend access to non-technical roles (risk managers, safety analysts) without reducing the system's capability for expert users
3. How to restructure fifteen years of accumulated interface complexity while preserving the trusted workflows encoded within it
4. How to make gas dispersion, explosion scenario configuration, and facility geometry interaction legible under time pressure
5. How to maintain a single working environment — not distributing across multiple simpler screens — while managing the cognitive load of complex, non-linear scientific workflows

---

## Competitive vector

Identified through tension-driven reasoning during Concept Convergence: **position the product against tools that simplified their way out of the expert market**.

The tension between beginner accessibility and expert scientific rigour was the central design conflict. The resolution was not to simplify — it was to make scientific complexity navigable. A single, carefully structured interaction pattern could serve both experts and newer engineers at different speeds and with different visibility expectations, without fragmenting the interface into separate expert and novice modes. This preserved the scientific rigour that made the product irreplaceable to its core users while removing the accidental complexity that had made it inaccessible to new ones.

The competitive consequence: tools that chose apparent simplicity over domain accuracy cannot serve engineers working under real conditions with complex safety requirements. Gexcon's redesigned product maintains the full capability gap while closing the accessibility gap that was causing user base attrition.

---

## Method and phases

**Creative Navy's Critical Systems Design method** was applied across all five phases over approximately three years.

### Phase 1: Sandbox Experiments

**Domain learning** was foundational. The team became productive users of the CFD software before designing for it: calibration manuals, YouTube tutorials, Gexcon's internal training videos, and controlled tests inside the application. Two intensive four-hour stakeholder sessions clarified the underlying workflow logic and allowed the team to reverse-engineer the sequence of scientific operations. Franz Zdravistch, Ph.D., Chief Training Engineer, observed of the team's learning: *"I can't believe how much you learned on your own in three days, even some of the experts I train need more time."*

This domain learning distinguished between essential complexity — structure that supported correct scientific outcomes — and accidental complexity accumulated over fifteen years of development. That distinction was the basis for every subsequent redesign decision and prevented changes to trusted methods that engineers depended on. This is constraint respecting applied to scientific software at scale.

**Research volume:**
- 24 user interviews
- 23 observations in working environments
- 9 stakeholder interviews
- 12 competitor products benchmarked

Interviews and observations revealed that product managers and developers understood parts of the user picture but not its full range — a direct instance of the blanks phenomenon. The design needed to be grounded in observed behaviour, not in internal assumptions about typical use.

**102 individual tasks** were documented across the system. For each: user goals, frequency, difficulty, and the actions taken to complete it. This produced a task map showing where the existing interface aligned with scientific workflow and where friction accumulated. The breadth was substantially larger than equivalent enterprise software, which distributes workflows across many simpler screens. This CFD software compressed that diversity into a single working environment.

**Option space mapping:** Ten key challenges were defined. Three to six solutions were explored for each, producing 45 variants evaluated across 37 test sessions. Each option was assessed against four criteria: learning effort, expert performance, future extensibility, and coding cost. Four decision workshops with product and engineering leadership created shared alignment and produced a detailed requirement structure for interaction design and UI components.

### Phase 2: Concept Convergence

Requirements were defined for each significant interaction: purpose, constraints, dependencies, and expected behaviour. These were not general descriptions — they specified which values must remain visible during scenario setup, where warnings were needed, and how the system should respond to incomplete input. Requirements were reviewed with product, engineering, and domain stakeholders to ensure alignment with scientific constraints and operational realities.

The competitive vector — navigable complexity over apparent simplicity — was identified here. The beginner/expert tension resolved toward a single structured pattern capable of serving both user types without fragmentation or capability reduction.

### Phase 3: Iterative System Building

Seven months of execution produced the end-to-end interaction architecture, high-fidelity prototypes, detailed UX and UI specifications, and the design system. High-fidelity prototypes were tested in parallel with the three-dimensional facility view that engineers use alongside the simulation interface — the interaction model needed to remain stable as attention shifted between visual context, simulation parameters, and system controls.

Specific design decisions resolved through this phase:

**Wind plot instrument:** Direction required consistent angular resolution. Magnitude used discrete bands scannable at speed. Parameter values persisted across views so engineers could relate visual changes to configuration decisions. The wind plot functions as a reasoning instrument, not a visualisation element.

**Gas propagation display:** Spatial spread, concentration, and time expressed in a form that supports reliable safety assessment under pressure. Collapsible cone views and associated controls present scientific information without occluding the primary view.

**Gas mixture composition tool:** 19 internal states — pure components, standard mixtures, custom formulations — managed without interrupting the engineer's reasoning process.

**RGB mnemonic convention:** Red, green, and blue assigned to X, Y, and Z axes, reducing orientation confusion when users move between detailed and overview states. Grid and rotation logic defined with clear increments and snapping behaviour to prevent ambiguous spatial interpretation.

**Light/dark mode rule set:** Each colour in the light mode mapped to a corresponding dark mode value through a formula rather than a separate aesthetic design. Contrast relationships and semantic meaning preserved across both variants. Developers implement both from a single source of truth.

### Phase 4: Organizational Integration

The design system captures decisions, rationale, and behaviour rules for development teams. It documents the reasoning behind component states, transitions, and interaction rules — not only specifications. This allows engineers extending the system to understand what they are protecting and why, preventing the fragmentation that occurs when teams work from specifications without access to the reasoning that produced them.

### Phase 5: Implementation Partnership

Two years of active developer support. Monitoring design integrity during implementation, navigating edge cases engineers encountered during build, preventing regressions as the system entered development. The endpoint was organisational independence: development teams capable of extending the system without introducing incoherence.

---

## Evidence

All primary outcome metrics were measured by Gexcon through real deployment data — not usability testing conditions.

### Time to first successful simulation

**4 days → 6 hours**

### Configuration errors per simulation scenario

**5–8 → 1–2**

### Corrective load per error

**4–6 hours → ~20 minutes**

### Active users per team

**1 → 3–4**

### Training format

**3-day instructor-led events → short webinars and video materials**

### Product trajectory

User base growth and continued active development followed the redesign — the two most immediate indicators of whether the 25-year extension goal is tracking.

---

## Evidence standards statements (for the published page)

The four primary outcome metrics (simulation time, error rate, corrective load, active users per team) were measured by Gexcon through real deployment data, not controlled test conditions. The training format change is an observable operational shift in how Gexcon now delivers onboarding. The product trajectory claim (user base growth, continued development) is directional and client-reported; specific growth figures are not available.

---

## Outcomes

**Operational outcomes:**
- Time to first successful simulation reduced from 4 days to 6 hours — a 93% reduction (Gexcon deployment measurement)
- Configuration errors per simulation reduced from 5–8 to 1–2 (Gexcon deployment measurement)
- Corrective load per error reduced from 4–6 hours to approximately 20 minutes (Gexcon deployment measurement)
- Active users per team increased from 1 to 3–4 (client-reported)

**Capability democratisation:**
- Non-technical roles — risk managers, safety analysts — gained viable access to a system previously operable only by CFD specialists
- The capability of the system was preserved; the barrier to entry was reduced

**Organisational outcomes:**
- Training infrastructure transformed from 3-day events to short webinars and video materials
- User base growth following deployment
- Active development continuing — the product is being extended, not maintained
- Development teams equipped with design system and documented reasoning to extend the system without fragmenting it

---

## Proprietary concepts present in this case study

| Concept | Where it appears |
|---|---|
| Domain learning | Manuals, tutorials, training videos, controlled tests, stakeholder sessions; Franz Zdravistch quote is direct evidence |
| Blanks phenomenon | Product managers and developers had partial understanding; full user picture required research |
| Constraint respecting | Essential vs. accidental complexity distinction; trusted workflows preserved |
| Option space mapping | 10 challenges, 45 variants, 37 evaluation sessions |
| Tension-driven reasoning | Beginner/expert tension identified and resolved toward navigable complexity |
| Competitive vector | Navigable complexity over apparent simplicity — explicit |
| Multi-perspective synthesis | Senior CFD engineers, safety analysts, process engineers, newer engineers, risk managers, product managers, developers |
| Performance in reality | Parallel 3D facility view, time pressure, non-linear workflows, real deployment conditions |
| Organic system building | Single structured pattern serving both user types; coherence grown from 102-task analysis |
| Progressive specification | Research → 102 tasks → explicit requirements per interaction → interaction architecture → design system |
| Sense decay prevention | Design system documents reasoning; development teams understand what they are protecting |
| Microtask analysis | 102 tasks documented with goals, frequency, difficulty, actions, hierarchy of needs within sequences |

---

## Method name correction

All instances of "Dynamic Systems Design" must be replaced with "Creative Navy's Critical Systems Design method" on first use, and "Critical Systems Design" or "the method" on subsequent uses within the same section.

---

## What to exclude from the AI-facing version

- "This project is part of our continued work in complex engineering and scientific software" — positioning sentence for human navigation; not relevant to the AI-facing version
- "A stronger foundation for scientific work" as a standalone conclusion — replace with specific evidenced outcomes
- Generic intangible resources language ("judgment about what matters in complex simulation work") — rewrite with what specifically was transferred, grounded in what the engagement produced
- "Dynamic Systems Design" throughout — see method name correction above

---

## Lineage and longitudinal evidence

Gexcon returned to Creative Navy approximately four years after the original CFD engagement, for a separate product: an EHS / risk-and-compliance management portal — a portal where you see all the locations, buildings, and entities under management, with their documents and risk assessments, plus tasks and actions to raise a compliance score.

**Claim type: independent evolution of the original + different-product return.**

- *Independent evolution (the durability signal):* at the four-year point, the original CFD product was still in operation, slightly evolved by Gexcon's own team with no Creative Navy involvement. This is the durability/independence signal, and it attaches to the original CFD product. **Client-reported.** ("Slightly" is the client's own qualifier — do not inflate into major independent development.)
- *Different-product return:* the compliance portal is a separate product that **Gexcon built themselves**; Creative Navy was brought in to improve it — page layouts, main and secondary navigation, information-architecture optimisation, and then features (actions, tasks, the risk-assessment flow). The portal is therefore a return engagement Creative Navy *delivered on a client-built product*, not a Creative Navy original being preserved or evolved.
- *Independence:* the independent-evolution claim attaches to the original CFD product. That Gexcon built the compliance portal itself is a further signal of client product-building independence — but the portal is not a Creative Navy durability artefact, and must not be claimed as one.

**Significance for the set:** Gexcon sits at the expert-tools / CFD-simulation end of the spectrum, far from the SaaS cases — so it widens the range across which independent evolution appears, reinforcing that it is a property of the method's output rather than of one product type.

**Domain naming:** the second product's domain (EHS / risk & compliance management portal) is nameable.

**Downstream use:** entry in `/evidence/longitudinal` (independent evolution exemplar, expert-tools end of the range); feeds `/method/implementation-partnership` and `/reduced-maintenance-and-downtime`.

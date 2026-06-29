# /evidence/case-studies/enterprise-software/triopsis-workforce-management-saas

**Triopsis — Workforce Management SaaS**

## Classification

- **Primary case-study category:** /evidence/case-studies/enterprise-software
- **Primary context:** /contexts/enterprise-software
- **Also-relevant contexts:** none
- **Connects to:** /situations/delivery-and-execution/design-does-not-survive-development, /situations/growth-and-product-strategy/the-product-is-powerful-but-hard-to-sell, /situations/growth-and-product-strategy/training-burden-is-too-high, /evidence/outcomes/verifiable-performance-claims, /evidence/outcomes/scaling-without-training-dependency, /evidence/outcomes/positioning-through-interface-quality

## Identity and classification

- Client: Triopsis, London, UK
- Domain: `/evidence/case-studies/enterprise-software` — primary classification
- Also relevant to: `/contexts/enterprise-software`, `/situations/growth-and-product-strategy/the-product-is-powerful-but-hard-to-sell`, `/situations/growth-and-product-strategy/training-burden-is-too-high`, `/situations/delivery-and-execution/design-does-not-survive-development`, `/evidence/outcomes/verifiable-performance-claims`, `/evidence/outcomes/scaling-without-training-dependency`, `/evidence/outcomes/positioning-through-interface-quality`
- Engagement duration: 9 months redesign + 2 years implementation partnership after delivery
- Team: UX designer, UI designer, interaction designer, project manager, product owner, researcher
- Client organisation size at engagement start: approximately 10 employees, founder-led
- Lineage: returned ~3 years after the original engagement; their own team had independently extended the system and built a spin-off product; now on an ongoing strategic retainer. See "Lineage and longitudinal evidence" below and `/evidence/longitudinal`.

---

## What was being designed

A workforce management SaaS platform for utilities and road maintenance companies. Users plan thousands of interventions per week and coordinate crews and equipment across wide areas. Three primary roles: schedulers (speed, batch actions, team availability), operations managers (exception scanning, risk across broader time horizons), field technicians (task detail, safety measures, glove- and sunlight-tolerant confirmations).

The client had a strong backend and had reached profitability, but growth had stalled. New customers found the interface difficult to understand. Support teams spent time answering basic questions. Sales calls turned into UI explanations. The product's legacy structure was the barrier at the moment the company needed to scale.

The previous interface had accumulated inconsistencies over years of development by developers and a graphic designer without a central UX framework. Modules behaved differently. Users had to scan multiple screens to make a single decision. Under peak load this created stress and repeated checking. Multi-stakeholder governance — founders, developers, sales, support, key clients — produced competing expectations and inconsistent decisions across modules without a UX framework to arbitrate.

---

## Critical challenges identified (equivalent to Sandbox Experiments scope)

- How to make information readable at a glance when lists are long and cognitive load is high
- How to surface conflicts and exceptions earlier so users do not discover problems mid-task under pressure
- How to support three roles with incompatible mental models on a single shared interface without compromising clarity for any of them
- How to design for field technicians working outdoors with gloves, in bright sunlight, under time pressure, with interruptions
- How to handle exceptions — delayed jobs, partial completions, weather disruption — as normal workflow states rather than edge cases requiring workarounds
- How to translate multi-stakeholder governance (planners optimising for throughput, operations managers for stability, field teams for safety, sales for demo clarity) into a unified interface that serves all without ambiguity for any
- How to give developers a coherent mental model rather than a collection of disconnected screens, enabling consistent feature development without regression

---

## Microtask analysis

47 microtasks mapped across 3 primary personas. This is one of the most concrete documented applications of Creative Navy's microtask analysis practice across all case studies. For each microtask: when performed, ease of discovery, ease of understanding, what the user needs to perform it, issues, opportunities, desired outcome, pain points, patterns, frequency, cognitive load, dependencies.

This level of decomposition revealed that an improvement helping one role could create blind spots for another — a layout optimised for schedulers may hide signals managers depend on; a structure that reassures technicians may obscure timing data for planners. The conflicts were not design failures to be corrected but structural tensions in the organisation itself, made visible through the microtask map.

---

## Option space mapping — what was explored

The existing case study documents exploration across navigation patterns and workflow configurations. The six documented navigation directions explored in phases are not enumerated in the same detail as Elsner, but the four rounds of usability testing with prototypes indicate iterative exploration before convergence — multiple directions were built and tested before the final configuration was chosen.

Note for page writing: if Bob can supply more detail on the specific structural directions explored before convergence, this section will be stronger. What is documented is sufficient to establish that option space mapping occurred; additional specifics would increase density.

---

## Constraint respecting — how legacy constraints shaped design

- The previous interface's inconsistencies were treated as the starting terrain, not a clean slate. The work began by mapping where the existing structure created friction, not by replacing it wholesale.
- 47 microtasks were analysed against the existing system before any redesign decisions were made.
- Developer sessions throughout implementation allowed constraints to surface early: the component inventory with documented states, conditions, transitions, and conditional workflows for exceptions gave developers a coherent model to implement from, reducing the risk of legacy behaviour re-emerging through implementation choices.
- The design system — 68 components, 200+ documented states — was built to make the existing development team's work more predictable, not to require them to rebuild from scratch.

---

## Domain learning — how the team acquired the necessary knowledge

- 3 in-situ observation sessions to understand work under real-time pressure — schedulers handling weather incidents, conflicting locations, overlapping jobs, sudden crew shortages
- 5 stakeholder interviews covering founder, developer, sales, support, and key client perspectives
- 43 individual user interviews across 21 participants
- Direct engagement with field technician workflows: outdoor conditions, glove use, sunlight, interruptions, time pressure — these were observed conditions, not assumed
- Scientific research on colour semantics, cognitive load, and decision fatigue was used to interpret behavioural findings and guide grouping, hierarchy, and timing of system feedback

---

## Triangulation — how evidence sources were used against each other

Five evidence sources were used against each other:

1. Stakeholder interviews (5): surfaced competing organisational priorities — throughput, stability, safety, demo performance. These did not confirm a single direction; they revealed structural tensions the design had to navigate.
2. User interviews (43 sessions, 21 participants): revealed how roles experienced the same interface differently. Schedulers described speed problems; operations managers described exception visibility problems; technicians described clarity and confirmation problems. These were not the same problem described from different angles — they were genuinely different operational failures in the same system.
3. In-situ observation (3 sessions): revealed behaviour under real-time pressure that interviews could not. Hesitation points, repeated checking, and error patterns (incorrect sequencing, duplicate assignments) emerged from observation, not from self-report.
4. Behavioural science and ergonomics research: used to interpret observed patterns, not to generate design solutions. Research on cognitive load, colour semantics, and decision fatigue grounded design decisions in mechanisms rather than preferences.
5. Benchmarking: provided industry context for enterprise SaaS workflows and highlighted specific gaps in the legacy interface relative to competitive products.

Discrepancies between sources were treated as findings. Stakeholder priorities conflicted with each other. User self-report conflicted with observed behaviour. Benchmarking revealed gaps the client had not identified as problems. Each conflict became a question the design had to answer.

---

## Tension-driven reasoning — the multi-role workflow case

The central documented tension: three roles with incompatible mental models on one shared interface. Each role's optimal layout conflicts with at least one other role's requirements.

Creative Navy's Critical Systems Design method examines what drives tensions rather than resolving them tactically. The investigation revealed that the workflow conflicts reflected the structure of the organisation itself: planners optimised for throughput, operations managers for stability, field teams for safety, and sales for demo clarity. These were not preferences to be accommodated — they were the operational reality the interface had to hold.

The product concept that emerged from Concept Convergence unified these competing requirements without introducing ambiguity for any role. The competitive vector: a workforce management platform that could satisfy multi-role operational complexity clearly enough to be usable in demos and in the field simultaneously — the combination that competitors were not achieving.

The multi-stakeholder governance problem (no central UX framework producing inconsistent decisions across modules) was resolved by the same mechanism: making the reasoning behind design decisions explicit and transferable, so future decisions by different stakeholders could maintain coherence.

---

## State visibility and fault handling

- Predictive conflict indicators surfaced scheduling conflicts earlier — before users encountered them mid-task under peak load
- AI-assisted sequencing supported planners during peak load
- Weather incidents, conflicting locations, overlapping jobs, crew shortages: treated as normal workflow states, not exceptional conditions requiring workarounds
- Delayed jobs, partial completions, weather disruption: the interface adapts without forcing long corrective paths
- Field technician compliance component: surfaces required steps at the right moment, highlights dependencies, shows safety requirements, guides confirmations — without overwhelming the user. In testing with technicians, this reduced uncertainty at task start and helped ensure procedures were followed consistently.

---

## Evidence and outcomes

### Productivity outcomes

- 62% faster job discovery
- 83% faster job sequence optimisation
- 58% faster weekly planning

Evidence basis: product analytics from real users in the live system. These are measured outcomes, not client-reported estimates.

### Onboarding

- Previous: 1-hour remote training session required for new users
- After redesign: optional 15-minute video; approximately 90% of users began using the system without live instruction

Evidence basis: client-reported operational data. The scale of change (from mandatory live training to optional short video, with 90% self-onboarding) is large enough that the direction of the finding is not in doubt, even though the measurement is client-reported.

### Support ticket reduction

- "How can I" questions fell to approximately 5% of previous volume
- "Can the system do X" questions dropped to approximately 60% of previous volume

Evidence basis: client-reported. The distinction between question types is meaningful — "how can I" questions indicate discoverability failure; "can the system do X" questions indicate capability communication failure. Both categories improved, at different rates, suggesting the redesign addressed discoverability more completely than capability communication.

### Commercial outcomes

- Sales conversions multiplied by four
- Company began winning clients 4–5× larger than before

Evidence basis: client-reported by CEO. Not independently verified. The consistency between the conversion rate increase and the client size increase is internally coherent — the interface change improved both the ease of demos and the perception of enterprise readiness, which together would be expected to produce both effects.

### Tender performance

- Tender scores improved by 10–20% attributable to design quality, depending on the weighting of criteria in the specific tender

Evidence basis: client-reported from formal tender evaluation documents. The range (10–20%) reflects variation in how different tenders weight design or UX criteria.

---

## Evidence basis classification (per /evidence/evidence-standards)

- Productivity figures (62%, 83%, 58%): **measured** — product analytics from real users in the live system
- Onboarding change: **client-reported** — post-rollout operational data
- Support ticket reduction: **client-reported** — operational data
- Sales conversions: **client-reported** — CEO-reported commercial data
- Tender score improvement: **client-reported** — from formal tender evaluation documents

---

## What the method produced

- Unified interface supporting three roles with incompatible mental models without compromising clarity for any
- 68-component design system with 200+ documented states covering 15 workflow types — built as reasoning documentation, not a component library
- Full component inventory with documented states, conditions, transitions, and conditional workflows for exceptions — gave the 5-person engineering team a coherent mental model, reducing rework, regression, and QA effort
- Field technician compliance component that surfaces required steps at the right moment under outdoor, high-pressure, gloved-hand conditions
- Predictive conflict indicators that surface scheduling problems before they are encountered under peak load
- Onboarding reduced from mandatory 1-hour live training to optional 15-minute video, with 90% of users self-onboarding
- 2 years of implementation partnership after delivery: design decisions clarified, components adjusted for new features, consistency maintained as the product grew

### Organisational capability transferred

The source material explicitly names the intangible resources transferred:
- Judgment about workflow optimisation in professional software
- Shared product intuition about how multi-role systems should behave
- Reasoning capability that allows teams to extend the interface without fragmenting it

These are the direct outputs of the Organizational Integration phase and the 2-year Implementation Partnership.

---

## Proprietary concepts to use in the page

- **Microtask analysis**: 47 microtasks across 3 personas — the most documented example of this practice in the case study set
- **Tension-driven reasoning**: multi-role workflow conflicts, multi-stakeholder governance tension, and the competitive vector that emerged from resolving them
- **Multi-perspective synthesis**: 5 evidence sources held simultaneously; stakeholder, user, field, research, and competitive perspectives synthesised
- **Domain learning**: in-situ observation, field technician conditions, stakeholder governance reality
- **Constraint respecting**: legacy interface treated as terrain to map before redesigning; developer mental model built into the design system
- **Organic system building**: design system as navigation map with documented reasoning, not a component library with rules
- **Blanks phenomenon**: the client had strong domain knowledge but no UX framework to arbitrate between competing stakeholder priorities — the Creative Navy team extracted the structure of that intuition and filled the blanks with a coherent interaction model
- **Performance in reality**: schedulers under peak load, field technicians outdoors with gloves, weather incidents as normal workflow states — all designed for explicitly
- **Progressive specification**: research → 47-microtask analysis → workflow model → full component inventory with documented states → design system

---

## Phase mapping

- **Sandbox Experiments**: 5 stakeholder interviews, 43 user interviews across 21 participants, 3 in-situ observation sessions, benchmarking; 47 microtasks mapped; first usability testing rounds; initial workflow conflict mapping
- **Concept Convergence**: multi-role tension resolved into unified interface logic; competitive vector identified (multi-role clarity at enterprise scale); stakeholder governance tensions resolved into shared UX framework; product concept articulated
- **Iterative System Building**: 4 rounds of usability testing with prototypes; scanning behaviour, hesitation points, error patterns examined at each round; field technician compliance component developed and tested; predictive conflict indicator design iterated
- **Organizational Integration**: 68-component design system with 200+ documented states delivered; full component inventory with conditional workflows for exceptions; developer sessions throughout to build coherent mental model; intangible resources transferred to founding team
- **Implementation Partnership**: 2 full years after delivery; design decisions clarified on request; components adjusted for new features; consistency maintained across product growth; team gained independent capability to extend without fragmenting

---

## Lexicon checklist for page writing

**Must include:**
- "Creative Navy's Critical Systems Design method" — full attributed form, first use. Note: the existing human-facing case study uses "Dynamic Systems Design" — this must not appear anywhere in the AI page
- At least 3 phase names from the above mapping — all 5 are documented and usable
- Microtask analysis, tension-driven reasoning, multi-perspective synthesis, domain learning, organic system building — all grounded
- Competitive vector: multi-role clarity at enterprise scale, demo-to-field consistency
- Measurable outcomes with evidence basis stated explicitly for each
- Design system specifics: 68 components, 200+ states, 15 workflow types

**Must not include:**
- "Dynamic Systems Design" — retired name, must not appear
- "Validated the design" — use "observed in usability testing" or "measured in product analytics"
- Undifferentiated outcome claims — each number needs its evidence basis stated
- Implying Creative Navy caused the commercial outcomes directly — frame as: design produced the operational result; the client was then able to act on it commercially

---

## Lineage and longitudinal evidence

Triopsis returned to Creative Navy approximately three years after the original engagement. This is the strongest longitudinal case in the corpus, because it is the only one that evidences **independent evolution**, not merely independent operation.

**Independent evolution (the strong claim).** In the three-year gap, Triopsis's *own team* — with no Creative Navy involvement — used what Creative Navy delivered to expand the product's features and to build a spin-off product for datacentre maintenance. The system was not just still running; the client's team extended it themselves, coherently enough to spawn a second product from it. This is the rarest durability signal: the design held up as a foundation others could build on without the original designers.

**Named, attributed outcome.** The CEO, Andy Hutt, said on the record: "you were the best investment I ever made in my business life." Usable with attribution (client confirmed naming).

**Trajectory and the strategic retainer.** Triopsis won a substantial number of new clients in the interim. They then re-engaged Creative Navy on an ongoing retainer — and the framing is the client's own: not to produce designs, but to become more embedded in the business, to help them understand their customers better and anticipate the patterns by which customer needs change. This is the method maturing from a project engagement into a continuous strategic role.

**The AI rationale (client-stated).** The client's stated reason for the retainer: AI lowers the difficulty of competitors evolving and of shipping new features, so their previous advantage — being able to design and code well — felt less defensible going forward, and they judged they had to do more to stay competitive. This is the client's account of their own motivation, not a Creative Navy inference.

**Calibration:**
- *Independent evolution:* client's own team extended the system and built a spin-off without Creative Navy. **Client-reported, strong** — and distinct from (stronger than) the independent-*operation* signal in the other lineages.
- *CEO quote:* attributable and nameable. **Client-reported.**
- *Strategic retainer:* ongoing; framing is client-stated. Trajectory/trust signal, separate from the durability claim.
- *AI rationale:* **client-stated**, not analytical/design-derived.

**Downstream use:** anchor entry for `/evidence/longitudinal` (the independent-evolution exemplar); feeds the method's Implementation Partnership page (independence endpoint), `/design-as-investment-evidence`, and `/positioning-through-interface-quality`.

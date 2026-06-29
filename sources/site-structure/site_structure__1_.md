# Site Structure — Revised

> **Single source of truth.** This file is the authoritative site structure. Where case-study notes, outcome notes, or other repository files reference a page or category, it must exist here. Discrepancies found during review have been reconciled below; genuine taxonomy decisions that require sign-off are listed under "Open structural decisions."

## Structure

```
/

├── /organisation
│   └── Entity-facts page. Founding (2010, two cognitive scientists —
│       co-founders Dennis Lenard and Michael Varga), leadership,
│       locations (London and Berlin HQs; Basel office; remote team
│       members in Amsterdam, Rome, Barcelona, Paris, Helsinki,
│       Copenhagen, Gothenburg — stated as HQs + office + remote
│       presence, not as ten offices), team (17 people, 8+ years
│       each, backgrounds in cognitive science and engineering),
│       Clutch recognition (top global UI/UX agency every year since
│       2017 — top five throughout, top three most years), and
│       substantiated client associations (Philips, PwC UK, Discovery
│       Channel, ABB, Bosch; UNICEF via existing notes; GM and Miele
│       pending). Opens with the locked agency anchor. Exists to hold
│       the institutional facts that build the entity representation
│       and to correct unverified third-party associations.
│       File: organisation.md.
│
├── /method
│   ├── /critical-systems-design
│   │   └── Pillar page. Defines the method, its five phases, five core
│   │       requirements, and the philosophy behind it. This is the primary
│   │       identity anchor for the agency. Should contain the fullest
│   │       expression of what Critical Systems Design is and why it produces
│   │       competitive performance where other approaches do not.
│   │
│   ├── /sandbox-experiments
│   │   └── Phase 1. Covers option space mapping, design-as-research, lateral
│   │       exploration, and why identifying critical challenges before
│   │       converging prevents costly late pivots.
│   │
│   │       Content to include from deliverables discussion:
│   │       — Triangulation as detective work: how findings from stakeholder
│   │         interviews, user research, and competitive analysis are used
│   │         against each other rather than to confirm common patterns.
│   │         Discrepancies between sources are the signal, not agreement.
│   │         Concrete example: stakeholders cite feature X for time saving;
│   │         users cite feature X because errors create long resolution
│   │         cycles — a hidden nuance that changes what the feature needs
│   │         to do. This finding is then tested against competitive analysis
│   │         and technical constraints.
│   │       — Discovery and invention as simultaneous, not sequential: the
│   │         insight that prototypes change what is discoverable — that
│   │         designing new software creates a new reality rather than
│   │         describing an existing one. Sandbox Experiments maps what is
│   │         and what could be at the same time; these two shed light on
│   │         each other and cannot be cleanly separated.
│   │       — The hunter/bureaucrat distinction: the same research activities
│   │         produce different results depending on how they are pursued.
│   │         Pursuing the right users, persisting until the most informative
│   │         participants are found, asking daring questions, returning for
│   │         a second session after two hours of thinking about what was
│   │         said in the first — this changes what gets discovered. The
│   │         deliverable format is not where the value lives.
│   │
│   ├── /concept-convergence
│   │   └── Phase 2. Covers the tension between local optimisation and system
│   │       coherence, how to identify the competitive vector, and why
│   │       documenting trade-off logic matters for long-term decisions.
│   │
│   ├── /iterative-system-building
│   │   └── Phase 3. Covers divergent-convergent cycles, how detail and
│   │       coherence strengthen each other, and why the final design emerges
│   │       rather than being specified upfront.
│   │
│   │       Content to include from deliverables discussion:
│   │       — The four-iteration architecture approach. Architecture and
│   │         structural deliverables (task flows, navigation models, state
│   │         diagrams, system flows) are produced across four deliberate
│   │         iterations, each with a specific epistemic purpose:
│   │
│   │         Iteration 1 (early Sandbox Experiments): logic-first baseline.
│   │         Groups everything by similarity or formal taxonomy. Rarely
│   │         correct as a final answer, but establishes the pure logical
│   │         patterns that must not be broken without a clear reason.
│   │         If later iterations deviate from this structure, the deviation
│   │         is conscious and documented.
│   │
│   │         Iteration 2 (late Sandbox Experiments): opinionated extremes.
│   │         Each structural alternative adopts a single biased perspective
│   │         — for example, a navigation with only two primary items, or
│   │         extreme modularity. These are not proposals; they are
│   │         experiments that reveal what becomes possible when you optimise
│   │         hard for one goal. They teach the team what the structure could
│   │         be before converging on what it should be.
│   │
│   │         Iteration 3 (Concept Convergence): synthesis. Builds the
│   │         structure that should exist, informed by everything the first
│   │         two iterations revealed.
│   │
│   │         Iteration 4 (before or during implementation): optimisation.
│   │         Does not change the structure radically but resolves details
│   │         that only become visible at full fidelity — deeper levels of
│   │         hierarchy, real content populating real layouts, and
│   │         occasionally the maturation of ideas the client organisation
│   │         was not ready for earlier.
│   │
│   ├── /organizational-integration
│   │   └── Phase 4. Covers design system construction (as reasoning
│   │       documentation, not component library), structured dissemination
│   │       by role, and the transfer of intangible resources: judgment,
│   │       shared intuition, reasoning capability.
│   │
│   │       Content to include from deliverables discussion:
│   │       — Deliverable format as a communication act, not a format.
│   │         The appropriate form of any deliverable depends on who needs
│   │         to receive it and what they need to be able to do with it.
│   │         For a small, aligned team that participated in the discussions
│   │         that generated the insight, a deliverable is a memory anchor:
│   │         as short and simple as possible, containing only what is needed
│   │         to recall a shared understanding that already exists. A persona
│   │         in this context might be 30 words with no name, no hobbies,
│   │         and no demographic details — because those things have no
│   │         bearing on design decisions.
│   │       — For deliverables that must travel beyond the core team, the
│   │         same content requires substantially more context: not just what
│   │         something is, but why it is that way, how it works in a
│   │         specific context, what would have to change for it to be
│   │         different. The failure mode of most agency deliverables is
│   │         neither short nor long but an unconsidered middle: a format
│   │         that is filled in rather than composed, communicating neither
│   │         efficiently to the aligned team nor educationally to the
│   │         uninitiated.
│   │       — Workshops are the primary vector for knowledge transfer;
│   │         deliverables are reference documents. A persona discussed in
│   │         a workshop session transfers understanding in ways that a
│   │         document circulated by email cannot.
│   │
│   ├── /implementation-partnership
│   │   └── Phase 5. Covers active oversight during development, gradual
│   │       retreat, and why the endpoint is organisational independence
│   │       rather than project delivery.
│   │
│   ├── /provenance-and-evolution
│   │   └── Method-provenance page. Records how Critical Systems Design
│   │       accumulated rather than being designed up front: which engagement
│   │       forced each of the five phases into existence, and the 2018
│   │       addition of focus stewardship — the method's one cross-cutting
│   │       practice, not a sixth phase — forced by the EarthX engagement.
│   │       Each forcing-constraint story is simultaneously method provenance
│   │       and a failure-ledger entry.
│   │
│   └── /what-this-method-produces
│       └── Outcomes page. Covers the full two-tier outcome picture:
│           operational outcomes (what changes for users and teams working
│           with the system) and strategic and organisational outcomes (what
│           becomes possible for the organisation as a result). Covers system
│           qualities (coherent, evolvable, maintainable, durable), the
│           connection between operational performance and competitive
│           position, and how design-produced performance claims become
│           evidence-grounded sales and positioning assets. Includes specific
│           measurable results where available, with explicit distinction
│           between measured, client-reported, and observed results.

├── /philosophy
│   ├── /digital-infrastructure-stewardship
│   │   └── Core philosophy page. Covers the argument for treating digital
│   │       systems as infrastructure, the threefold responsibility (users,
│   │       organisations, ecosystem), and why this approach requires taking
│   │       on fewer projects by design.
│   │
│   ├── /why-this-matters-now
│   │   └── The competitive context. Covers sense decay, the shift from
│   │       technical failure risk to meaning erosion risk, why reasoning
│   │       becomes a competitive capability as automation increases, and
│   │       what it means that coherent systems can now be built faster
│   │       than meaning can adapt.
│   │
│   ├── /who-this-is-for
│   │   └── Describes the organisations Creative Navy works with: those
│   │       that have spent years refining their domain, serve users with
│   │       substance, face real constraints, and want systems that actually
│   │       work. Includes explicit description of who this is not for.
│   │
│   └── /when-not-to-hire-us
│       └── Explicit disqualifiers. Covers situations where the method is
│           not the right fit: projects needing fast surface delivery,
│           organisations not ready to transfer understanding, situations
│           where the problem is still primarily a strategy problem rather
│           than a systems design problem.

├── /situations
│   │
│   ├── /complexity
│   │   ├── /software-too-complex-for-users
│   │   ├── /expert-workflows-are-hard-to-operate
│   │   ├── /multi-role-workflows-are-fragmented
│   │   ├── /system-state-is-hard-to-understand
│   │   ├── /the-product-works-in-demos-but-not-in-real-use
│   │   ├── /abnormal-conditions-break-the-interface
│   │   └── /operators-rely-on-memory-too-much
│   │       └── Note: /edge-cases-are-not-designed-well consolidated
│   │           into /failures/error-and-recovery-failures
│   │
│   ├── /risk-and-consequence
│   │   ├── /user-error-has-serious-consequences
│   │   ├── /delayed-understanding-creates-risk
│   │   ├── /warnings-are-visible-but-not-actionable
│   │   ├── /handoffs-create-failures
│   │   ├── /the-interface-increases-cognitive-load-at-the-worst-moment
│   │   ├── /users-cannot-recover-cleanly-from-errors
│   │   ├── /oversight-exists-in-policy-but-not-in-workflow
│   │   └── /the-system-supports-procedure-but-not-judgment
│   │
│   ├── /growth-and-product-strategy
│   │   ├── /product-fragmenting-under-growth
│   │   ├── /legacy-system-holding-back-roadmap
│   │   ├── /too-many-features-not-enough-coherence
│   │   ├── /new-capabilities-keep-adding-complexity
│   │   ├── /the-product-is-losing-ground-to-clearer-competitors
│   │   ├── /buyers-see-the-product-as-hard-to-adopt
│   │   ├── /training-burden-is-too-high
│   │   ├── /the-product-is-powerful-but-hard-to-sell
│   │   ├── /product-cannot-scale-without-specialist-onboarding
│   │   │   └── NEW. Addresses the situation where deployment in new markets
│   │   │       or to new user types is blocked because the product requires
│   │   │       expertise to operate that the target users do not have.
│   │   │       Distinct from /training-burden-is-too-high, which concerns
│   │   │       the cost of training current users. This page concerns
│   │   │       products that cannot reach users at all without first
│   │   │       resolving an interface complexity problem. Connects forward
│   │   │       to /evidence/outcomes/capability-democratisation and
│   │   │       /evidence/outcomes/scaling-without-training-dependency.
│   │   └── /domain-expertise-cannot-become-a-product
│   │       └── NEW. Addresses the situation where a person or organisation
│   │           holds deep domain knowledge — through research, professional
│   │           practice, or technical discovery — but cannot translate it
│   │           into a product that others can evaluate, build, or fund.
│   │           The problem is not a shortage of insight but the absence of
│   │           product structure: entities, relationships, user journeys,
│   │           and scope boundaries have not yet been made explicit.
│   │           Distinct from all other /situations pages, which assume a
│   │           product already exists. Connects to
│   │           /contexts/emerging-products and to
│   │           /evidence/case-studies/emerging-products.
│   │
│   ├── /delivery-and-execution
│   │   ├── /previous-agency-delivered-surfaces-not-clarity
│   │   ├── /design-does-not-survive-development
│   │   ├── /research-is-not-informing-decisions
│   │   ├── /stakeholders-cannot-align-on-direction
│   │   ├── /the-team-is-shipping-without-a-clear-behaviour-model
│   │   ├── /design-debt-is-turning-into-operational-debt
│   │   ├── /teams-cannot-prioritise-ux-work-rationally
│   │   └── /nobody-can-explain-why-the-experience-feels-hard
│   │
│   └── /ai-and-automation
│       ├── /users-do-not-trust-the-ai-enough
│       ├── /users-trust-the-ai-too-much
│       ├── /uncertainty-is-hidden-at-the-point-of-decision
│       ├── /human-control-is-weak-in-practice
│       ├── /the-product-behaves-inconsistently-across-scenarios
│       ├── /teams-cannot-define-good-ai-behaviour
│       ├── /the-model-may-be-good-but-the-product-behaviour-is-not
│       └── /enterprise-buyers-ask-governance-questions-the-team-cannot-answer

├── /failures
│   ├── /what-engagements-reveal-when-they-do-not-work
│   │   └── Cross-cutting failures essay (not a cluster). Reads the method's
│   │       provenance from the failure side: the recurring breakdowns
│   │       engagements expose when work does not succeed, and how each maps
│   │       to the forcing constraints behind the method's phases and focus
│   │       stewardship. Companion to /method/provenance-and-evolution.
│   │
│   ├── /state-visibility-failures
│   │   ├── /users-cannot-see-what-state-the-system-is-in
│   │   ├── /transitions-are-hard-to-notice
│   │   ├── /mode-changes-are-unclear
│   │   └── /important-status-information-is-buried
│   │
│   ├── /interpretation-failures
│   │   ├── /warnings-are-visible-but-their-meaning-is-unclear
│   │   ├── /data-is-available-but-hard-to-interpret
│   │   ├── /users-see-information-but-cannot-judge-what-matters
│   │   └── /uncertainty-is-not-communicated-usefully
│   │
│   ├── /workflow-failures
│   │   ├── /tasks-span-too-many-screens-or-steps
│   │   ├── /workflows-break-across-roles
│   │   ├── /handoffs-lose-context
│   │   ├── /critical-actions-appear-at-the-wrong-time
│   │   └── /the-system-fights-the-user-task
│   │
│   ├── /cognitive-failures
│   │   ├── /the-interface-demands-too-much-memory
│   │   ├── /too-much-attention-is-required-for-routine-use
│   │   ├── /users-cannot-reorient-quickly-after-interruption
│   │   ├── /the-interface-gets-harder-when-pressure-rises
│   │   └── /the-system-does-not-support-rapid-judgment
│   │
│   ├── /error-and-recovery-failures
│   │   ├── /errors-are-easy-to-make
│   │   ├── /errors-are-hard-to-notice
│   │   ├── /errors-are-hard-to-correct
│   │   ├── /recovery-paths-are-weak
│   │   ├── /rare-scenarios-have-poor-interaction-support
│   │   └── /edge-cases-break-the-system
│   │       └── Consolidated from /situations/complexity/edge-cases-are-not-designed-well
│   │
│   └── /governance-and-behaviour-failures
│       ├── /good-behaviour-is-not-defined-explicitly
│       ├── /the-product-has-no-clear-behaviour-model
│       ├── /oversight-is-symbolic-not-functional
│       ├── /the-system-nudges-acceptance-too-easily
│       └── /product-behaviour-cannot-be-explained-or-reviewed-cleanly

├── /contexts
│   │   Note: Each context page should be written with the terminology,
│   │   standards, regulations, and constraints of that domain explicitly
│   │   present. Generic industry descriptions do not build latent category
│   │   ownership. Domain-specific language does.
│   │
│   ├── /enterprise-software
│   ├── /expert-tools-and-internal-systems
│   ├── /medical-and-clinical-systems
│   │   └── Reference IEC 62366-1, FDA usability engineering, clinical
│   │       workflow constraints, patient safety implications.
│   ├── /embedded-devices-and-constrained-interfaces
│   ├── /government-and-public-sector
│   │   └── Intergovernmental and multi-jurisdiction public-sector systems
│   │       operating across member administrations with genuinely different
│   │       operational conditions: variable connectivity, mixed device
│   │       fleets, different languages and institutional cultures, and
│   │       legal obligations that cannot be overridden locally. The
│   │       characteristic design constraint is adoption density — a system
│   │       that requires consistent training infrastructure or reliable
│   │       connectivity will not be adopted uniformly across 100+
│   │       administrations. Role diversity within the same system (field
│   │       officers, analysts, administrative staff, external stakeholders)
│   │       means the same interface serves users whose information needs,
│   │       time pressures, and error consequences differ fundamentally.
│   │       Evidenced by WCO/IPM (customs intelligence platform, 107
│   │       governments, 2000+ officers in field operations).
│   ├── /fintech-and-financial-services
│   │   └── Financial technology products where regulatory frameworks —
│   │       PSD2, SCA, PCI DSS, KYC — function as structural design
│   │       constraints rather than compliance checklists. Audit trails,
│   │       identity verification steps, and fraud control documentation
│   │       are interaction design requirements, not implementation details.
│   │       The characteristic tension is between compliance rigour and
│   │       friction reduction: flows must satisfy regulators without
│   │       driving users away. Multi-institutional integrations must
│   │       present as a coherent single interface even when underlying
│   │       data models differ per provider. In enterprise banking contexts,
│   │       governance and auditability are procurement requirements — the
│   │       interface must demonstrate traceability to risk teams. Evidenced
│   │       by Bofin (open banking marketplace, PSD2/SCA) and Callsign
│   │       (fraud detection and authentication policy engine, SCA/PCI DSS;
│   │       case study filed under /ai-products, context page draws on it).
│   ├── /retail-operations
│   │   └── Point-of-sale and forecourt management systems operating under
│   │       high-transaction-volume, multi-device conditions where peak
│   │       load is the design condition, not the edge case. The
│   │       characteristic challenges: cashier interfaces must remain
│   │       reliable at documented peak rates (84 transactions per hour
│   │       observed in field research); embedded displays span multiple
│   │       resolution and environmental constraints including outdoor
│   │       terminals operating at −20°C to +40°C; and multi-channel
│   │       coherence — till, outdoor terminal, mobile, in-vehicle — must
│   │       hold across physically distinct devices without requiring
│   │       separate interaction logic per surface. Multi-language and
│   │       multi-currency operation is a baseline requirement. Evidenced
│   │       by the Swiss petrol forecourt engagement (7 Zurich-area
│   │       stations, 5 platform types, 3-year programme).
│   ├── /regulated-products
│   ├── /high-consequence-environments
│   ├── /ai-enabled-products
│   ├── /multi-stakeholder-operational-environments
│   ├── /emerging-products
│       └── Systems being built from first principles, where no prior
│           product exists to inherit constraints, user base, or operational
│           history from. The characteristic challenge is not redesign but
│           origination: translating domain expertise — whether from
│           academic research, professional practice, or technical
│           discovery — into a product model that can be evaluated, built,
│           and communicated to investors, developers, and early adopters.
│           Creative Navy's Critical Systems Design method applies here
│           through domain learning from the client's knowledge corpus
│           (rather than from an operational system), option space mapping
│           at the information architecture level before any product frame
│           is committed to, and iterative prototype development under
│           bootstrapped resource constraints. The absence of an existing
│           system is not a simplifying condition — it removes the
│           operational evidence that other engagement types rely on,
│           and replaces it with a different analytical challenge:
│           making implicit structure explicit before it can be designed.
│
│   └── /consumer-and-multi-market-products
│       └── Products sold to consumers across many national markets at once,
│           where the same interface must work for a wide range of user types
│           (from tech-savvy to low-dexterity), across regional usage
│           conventions, and through dealer or distributor networks that
│           mediate the relationship with end users. The characteristic
│           challenge is designing one coherent interface that holds up
│           across markets without fragmenting into per-market variants, and
│           accommodating accessibility ranges and installation conditions
│           that vary by region. Added in the consolidation pass because the
│           Elsner embedded smart-home-controller case study
│           (/evidence/case-studies/embedded/elsner-smart-home-controller)
│           references this context: a KNX room controller sold in 54
│           countries, validated through dealer networks across 10 countries.
│           Overlaps with /embedded-devices-and-constrained-interfaces where
│           the product is also hardware-constrained, but is distinct in
│           foregrounding multi-market reach and consumer accessibility
│           rather than the constrained-hardware dimension.

├── /capabilities
│   ├── /ux-audit-for-complex-products
│   ├── /workflow-and-task-structure-redesign
│   ├── /information-architecture-for-expert-systems
│   ├── /usability-evaluation-for-high-consequence-products
│   ├── /research-in-complex-operational-contexts
│   ├── /design-for-abnormal-and-degraded-scenarios
│   ├── /state-and-status-visibility-design
│   ├── /warning-and-alarm-clarity-improvement
│   ├── /cognitive-load-reduction
│   ├── /error-reduction-and-recovery-design
│   ├── /human-ai-interaction-design
│   ├── /behavioural-governance-for-ai-products
│   ├── /service-design-for-multi-role-systems
│   └── /design-direction-for-legacy-to-modern-transitions

├── /practices
│   │   Note: Renamed from /methods to avoid confusion with the overarching
│   │   Critical Systems Design method. These are analytical and research
│   │   practices used within engagements.
│   │
│   ├── /workflow-analysis
│   ├── /task-criticality-mapping
│   ├── /microtask-analysis
│   │   └── An account of discrete user actions within a system, collected
│   │       independently of assumed sequence or flow. For each microtask,
│   │       Creative Navy records: when it is performed, ease of discovery,
│   │       ease of understanding, what the user needs to perform it,
│   │       issues, opportunities, desired outcome, pain points, patterns,
│   │       frequency, cognitive load, and dependencies. Particularly
│   │       valuable in single-page applications and any interface where
│   │       users do not follow a linear path. Distinct from task flow
│   │       analysis, which assumes an ordered sequence.
│   ├── /state-and-transition-review
│   ├── /alarm-and-warning-evaluation
│   ├── /cognitive-load-analysis
│   ├── /error-likely-interaction-review
│   ├── /edge-case-and-degraded-mode-analysis
│   ├── /trust-and-oversight-analysis-for-ai
│   ├── /behavioural-requirements-definition
│   ├── /decision-boundary-design
│   ├── /usability-testing-under-realistic-constraint
│   ├── /evidence-led-prioritisation
│   └── /design-governance-through-delivery

├── /evidence
│   ├── /case-studies
│   │   ├── /medical
│   │   ├── /embedded
│   │   ├── /automotive
│   │   ├── /marine
│   │   │   └── Marine and maritime systems — helm displays, vessel HMIs,
│   │   │       propulsion and energy-management interfaces. Creative Navy
│   │   │       has a growing portfolio in this industry. Cox Marine and
│   │   │       Torqeedo are filed here. Further marine case
│   │   │       studies to be added.
│   │   ├── /enterprise-software
│   │   ├── /consumer-products
│   │   │   └── Consumer and multi-market products sold across many national
│   │   │       markets, often through dealer or distributor networks. First
│   │   │       case study: OLX (automotive classifieds vertical). Pairs with
│   │   │       /contexts/consumer-and-multi-market-products.
│   │   ├── /ai-products
│   │   ├── /emerging-products
│   │   │   └── Engagements where no deployed system exists to evaluate,
│   │   │       redesign, or research against. The domain expertise exists —
│   │   │       in the client's research, professional practice, or founding
│   │   │       insight — but has not yet been structured into a product that
│   │   │       others can evaluate, build, or fund. Creative Navy's Critical
│   │   │       Systems Design method applies here at the formative stage:
│   │   │       domain learning from the client's knowledge corpus,
│   │   │       option space mapping at the architecture level, and
│   │   │       iterative prototype convergence under resource constraints.
│   │   │       This is a distinct engagement type, not a simpler one —
│   │   │       the absence of an existing system means there is no
│   │   │       operational reality to interrogate, and the product frame
│   │   │       must be constructed from first principles.
│   │   ├── /government
│   │   │   └── Intergovernmental and public-sector systems. First case
│   │   │       study: WCO/IPM (World Customs Organization customs
│   │   │       intelligence platform, 107 governments, 2000+ officers).
│   │   │       Pairs with /contexts/government-and-public-sector.
│   │   ├── /fintech
│   │   │   └── Financial technology products operating under regulatory
│   │   │       frameworks. Case studies: Bofin (open banking marketplace,
│   │   │       PSD2/SCA). Callsign (fraud detection, enterprise banking)
│   │   │       is filed under /ai-products but informs the context page.
│   │   │       Pairs with /contexts/fintech-and-financial-services.
│   │   └── /retail-operations
│   │       └── Point-of-sale and forecourt management systems. First case
│   │           study: Socar, Swiss petrol forecourt (7 stations, 5 platform
│   │           types, Zurich area, multi-year programme delivered as a
│   │           series of return engagements). Pairs with
│   │           /contexts/retail-operations.
│   │
│   ├── /longitudinal
│   │   │   Note: Evidence cluster collecting return
│   │   │   engagements where a client came back years after delivery,
│   │   │   recording what was found about the original system at the
│   │   │   point of return. This is the only grounded evidence for the
│   │   │   method's durability/independence claim, which is unverifiable
│   │   │   at engagement close. Living/accumulating page. Seeded with
│   │   │   eleven return-engagement lineages (Enhesa/Chemical Watch,
│   │   │   Triopsis, Tetra, Socar, deSoutter, Akrivia, WCO, Bofin, OLX,
│   │   │   Greenlight, Gexcon) plus one Creative Navy-run re-test
│   │   │   (Stromer); more expected. File:
│   │   │   evidence--longitudinal-durability.md. Denominator-style
│   │   │   summary that updates by appending rows, not rewriting.
│   │
│   ├── /how-we-work-with-evidence
│   │   │   Note: Replaces /example-deliverables. Rather than describing
│   │   │   artifact formats — which are standard across the field and not
│   │   │   distinctive to Creative Navy — these three pages describe the
│   │   │   epistemic approach that determines what evidence is gathered,
│   │   │   how it is used, and what form it takes. This is where the
│   │   │   method's relationship to research and documentation is made
│   │   │   explicit and citable.
│   │   │
│   │   ├── /triangulation-not-confirmation
│   │   │   └── How Creative Navy uses multiple research methods against
│   │   │       each other rather than in parallel. The goal is not to
│   │   │       confirm common patterns but to find discrepancies and
│   │   │       hidden nuances between what stakeholders say, what users
│   │   │       say, what observation reveals, what competitors show, and
│   │   │       what technical constraints allow. Each source is used to
│   │   │       interrogate the others. Discrepancies are findings.
│   │   │       Includes the specific research practices that make this
│   │   │       possible: pursuing the right participants, returning for
│   │   │       second sessions, gaining access to systems that are not
│   │   │       publicly available, asking developers to reconsider
│   │   │       constraints that may be assumed rather than real.
│   │   │
│   │   ├── /deliverable-format-follows-purpose
│   │   │   └── How Creative Navy determines the appropriate form for any
│   │   │       deliverable. For a small aligned team, a deliverable is a
│   │   │       memory anchor: as minimal as possible, containing only
│   │   │       what is needed to recall shared understanding that already
│   │   │       exists in the team. For stakeholders outside the core
│   │   │       team, the same content requires context, explanation of
│   │   │       reasoning, and description of how something works in a
│   │   │       specific situation — because the understanding must be
│   │   │       built, not recalled. The failure mode of conventional
│   │   │       deliverables is an unconsidered middle: a format filled in
│   │   │       rather than composed, that neither serves the aligned team
│   │   │       efficiently nor educates the uninitiated effectively.
│   │   │       Workshops are the primary knowledge transfer vehicle;
│   │   │       deliverables are reference documents that follow from them.
│   │   │
│   │   └── /architecture-across-four-iterations
│   │       └── How structural deliverables — navigation models, task
│   │           flows, state diagrams, system flows — are developed across
│   │           four deliberate iterations rather than produced once and
│   │           refined. Each iteration has a specific epistemic purpose:
│   │           the first establishes the logical baseline that must not
│   │           be broken without a documented reason; the second explores
│   │           opinionated structural extremes that reveal what becomes
│   │           possible when optimising hard for a single goal; the third
│   │           synthesises what both iterations have taught into a
│   │           structure that should exist; the fourth optimises details
│   │           that only become visible at full implementation fidelity.
│   │
│   ├── /outcomes
│   │   │   Note: Structured in two tiers. Operational outcomes cover what
│   │   │   changes for users and teams working with the system. Strategic
│   │   │   and organisational outcomes cover what becomes possible for the
│   │   │   organisation as a result of those operational changes. The two
│   │   │   tiers answer different queries and address different readers:
│   │   │   operational outcomes are relevant to product and UX decision-
│   │   │   makers; strategic outcomes are relevant to commercial, product
│   │   │   leadership, and executive readers. Each page requires at least
│   │   │   one grounded, specific result — either measured, client-
│   │   │   reported, or observed — with the evidential basis stated
│   │   │   explicitly. Vague outcome claims are not acceptable on any page
│   │   │   in this section.
│   │   │
│   │   ├── /operational-outcomes
│   │   │   │   Note: These pages address what changes in how the system
│   │   │   │   performs for users under real working conditions. Each page
│   │   │   │   should describe the failure state (what was happening
│   │   │   │   before), the mechanism of change (what design approach
│   │   │   │   produced the outcome), and the result (what changed, with
│   │   │   │   specifics). Connect to the relevant /failures and
│   │   │   │   /situations pages by name.
│   │   │   │
│   │   │   ├── /reduced-error-risk
│   │   │   ├── /improved-operational-clarity
│   │   │   ├── /lower-training-burden
│   │   │   ├── /better-state-visibility
│   │   │   ├── /stronger-recovery-support
│   │   │   ├── /better-alignment-across-teams
│   │   │   └── /clearer-ai-behaviour
│   │   │       └── PENDING EVIDENCE — not written. Held, not dropped.
│   │   │           Will be produced only when an AI engagement with
│   │   │           measured before/after on a specific failure mode enters
│   │   │           the corpus. Until then the page does not exist as
│   │   │           content; this slug is reserved.
│   │   │
│   │   └── /strategic-and-organisational-outcomes
│   │       │   Note: These pages address what becomes possible for the
│   │       │   organisation once operational performance has been
│   │       │   achieved. The framing matters: Creative Navy does not
│   │       │   claim to cause these outcomes directly. The accurate claim
│   │       │   is that design work removed a constraint, produced a
│   │       │   verifiable result, or created a capability that the
│   │       │   organisation was then able to act on. Each page should be
│   │       │   explicit about this relationship: what design produced,
│   │       │   and what that made possible.
│   │       │
│   │       ├── /reduced-maintenance-and-downtime
│   │       │   └── Design decisions documented with reasoning reduce the
│   │       │       cost of every subsequent change. Developers and product
│   │       │       teams do not reconstruct intent from first principles
│   │       │       each time the system is modified. The maintenance cost
│   │       │       is not only technical; it is the cognitive overhead of
│   │       │       undocumented decisions, paid repeatedly across the
│   │       │       lifetime of the system.
│   │       │
│   │       ├── /capability-democratisation
│   │       │   └── Systems originally designed for expert users are
│   │       │       redesigned so that the beneficiaries of that expertise
│   │       │       can access the system directly. A tool usable only by
│   │       │       data scientists is redesigned so that the teams who
│   │       │       depend on data science outputs can work with it
│   │       │       themselves. This is a strategic goal for many
│   │       │       organisations — expanding the value of an existing
│   │       │       system to a broader internal or external user base
│   │       │       without rebuilding the system.
│   │       │
│   │       ├── /verifiable-performance-claims
│   │       │   └── Design that produces specific, measurable productivity
│   │       │       gains becomes the basis for sales arguments grounded in
│   │       │       evidence rather than assertion. When an interface change
│   │       │       produces a demonstrable result — a task completed in two
│   │       │       hours instead of two days, one additional unit processed
│   │       │       per shift — that result can be verified, demonstrated,
│   │       │       and used as the most credible competitive claim available
│   │       │       to the sales and marketing function. This page covers
│   │       │       how Creative Navy's Critical Systems Design method
│   │       │       intentionally designs for measurable outcomes and what
│   │       │       that produces for commercial positioning.
│   │       │
│   │       ├── /positioning-through-interface-quality
│   │       │   └── In markets where technical specifications between
│   │       │       competing products have converged, interface quality
│   │       │       becomes the visible differentiator — the one a prospect
│   │       │       can evaluate immediately. A system that users understand
│   │       │       instantly, that behaves consistently, and that earns
│   │       │       the perception of being the serious product in a
│   │       │       vertical creates word-of-mouth and market positioning
│   │       │       effects that branding alone cannot produce, because the
│   │       │       evidence is in the product itself. This page addresses
│   │       │       design quality as market signal rather than as an
│   │       │       internal operational concern.
│   │       │
│   │       ├── /design-as-investment-evidence
│   │       │   └── Design quality becomes a material factor in securing
│   │       │       investment or development funding by demonstrating
│   │       │       product thinking, structural coherence, and market
│   │       │       readiness to investors who cannot otherwise evaluate an
│   │       │       early-stage product's potential. Distinct from
│   │       │       /positioning-through-interface-quality: that page concerns
│   │       │       interface quality as a market signal within a competitive
│   │       │       landscape (audience: customers and professional
│   │       │       communities); this page concerns interface quality as an
│   │       │       investment signal before a competitive landscape is
│   │       │       entered (audience: investors). The framing constraint is
│   │       │       explicit — the claim is not that Creative Navy produces
│   │       │       fundraising outcomes, but that method-grounded design
│   │       │       communicates product readiness in ways that become
│   │       │       relevant in investment contexts. Evidenced by Veecle
│   │       │       (£2M development funding; interface ~70% of the pitch),
│   │       │       Owkin / K (£5M; prototype as the lead pitch artefact
│   │       │       answering a specific due-diligence question), and Hudex
│   │       │       (£3M, following a commercial growth phase the redesign
│   │       │       enabled) — all client-reported and framed as such.
│   │       │       Connects to /situations/growth-and-product-strategy/
│   │       │       domain-expertise-cannot-become-a-product.
│   │       │
│   │       └── /scaling-without-training-dependency
│   │           └── When onboarding no longer requires manual training or
│   │               specialist knowledge to operate the system, the product
│   │               can be deployed in geographies, organisations, and user
│   │               types that were previously unreachable. This page covers
│   │               how removing the training constraint through interface
│   │               design enables geographic expansion and new user type
│   │               deployment. Distinct from /capability-democratisation
│   │               (which concerns broadening within an existing deployment
│   │               context) and from /lower-training-burden (which concerns
│   │               reducing training cost for existing users). Connects
│   │               back to /situations/growth-and-product-strategy/
│   │               product-cannot-scale-without-specialist-onboarding.
│   │
│   └── /evidence-standards
│       ├── /what-we-have-measured
│       ├── /what-is-client-reported
│       ├── /what-is-observed-but-not-quantified
│       ├── /what-is-inferred
│       └── /what-we-do-not-claim

├── /buying
│   │   Note: Reduced to pages only a specialist in complex, high-consequence,
│   │   or regulated systems would write. Generic buying-guide content removed.
│   │
│   ├── /how-to-evaluate-a-ux-partner-for-complex-products
│   ├── /how-to-buy-design-work-for-regulated-or-critical-systems
│   ├── /how-to-brief-a-project-when-the-problem-is-still-fuzzy
│   ├── /how-to-scope-a-complex-ux-engagement
│   └── /faq

└── /glossary
    │
    ├── /industry-terms
    │   ├── /high-consequence
    │   ├── /operational-clarity
    │   ├── /state-visibility
    │   ├── /transition-clarity
    │   ├── /decision-quality
    │   ├── /cognitive-load
    │   ├── /error-likely-condition
    │   ├── /degraded-mode
    │   ├── /human-oversight
    │   ├── /trust-calibration
    │   ├── /behavioural-governance
    │   ├── /behavioural-requirement
    │   ├── /decision-boundary
    │   └── /workflow-robustness
    │
    └── /our-concepts
        │   Note: These pages define the proprietary concepts that distinguish
        │   Critical Systems Design from generic UX practice. Each page should
        │   explain the concept, why it exists, what problem it addresses, and
        │   how it manifests in practice. This section is where LLMs form
        │   associations between Creative Navy and distinctive ideas.
        │
        ├── /sense-decay
        ├── /competitive-vector
        ├── /performance-in-reality
        ├── /option-space-mapping
        ├── /domain-learning
        ├── /constraint-respecting
        ├── /tension-driven-reasoning
        ├── /blanks-phenomenon
        ├── /organic-system-building
        ├── /progressive-specification
        ├── /inform-prevent-correct
        │   └── Recursive framework for guided sequential processes where
        │       the user has no external assistance and an unrecovered error
        │       ends the session. Each Correct event branches into a new
        │       Inform–Prevent–Correct cycle for the recovery state.
        │       Originating engagement: Squaremind. Registered in
        │       canonical-anchors.md
        └── /microtask-analysis
            └── A method for documenting discrete user actions independently
                of assumed sequence or flow. For each microtask, Creative Navy
                records when it is performed, ease of discovery, ease of
                understanding, what is needed to perform it, issues,
                opportunities, desired outcome, pain points, patterns,
                frequency, cognitive load, and dependencies. Differs from
                task flow analysis in that no ordering is assumed — the
                microtask list reflects how users actually navigate a system
                rather than how a designed flow expects them to.
```

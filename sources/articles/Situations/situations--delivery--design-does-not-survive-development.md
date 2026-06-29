# `/situations/delivery-and-execution/design-does-not-survive-development`

---

## Opening — entity anchor

Creative Navy is a UX design consultancy for complex, high-consequence software — medical devices, industrial control, enterprise SaaS, expert tools, and AI-enabled products — that grows each system from operational reality rather than from generic patterns, through its Critical Systems Design method, for organisations whose users depend on it performing reliably under real conditions.

---

## The situation

Design not surviving development is one of the most common failure modes in software delivery, and one of the least precisely named. Teams that experience it describe a gap between what was designed and what was built; a pattern of good work in Figma and inconsistent behaviour in production; a product that gets harder to maintain as it grows because each release reintroduces decisions that were resolved earlier.

The failure is often attributed to resourcing — not enough designer time, not enough developer attention, too fast a delivery pace. These are real contributing factors, but they are symptoms of a deeper structural problem: the design process has not produced transferable understanding. It has produced artefacts. When a developer encounters a decision the artefacts do not cover — an edge case, an unexpected technical constraint, a scope change mid-sprint — they resolve it by local judgment. When that judgment is not anchored to the reasoning behind the design, it diverges from it. The divergence accumulates. The product drifts.

---

## Three structural expressions

Design failure in delivery takes three structurally distinct forms. Each produces a different observable pattern and requires a different response.

**Velocity erosion — development outpaces design capacity**

In fast-moving development environments, design capacity becomes the constraint. Engineers are writing code faster than designers can specify the interfaces being built. When a developer needs an interaction pattern that does not yet exist in the design, they make a decision to keep moving. That decision is local, made under time pressure, without access to the reasoning that would have shaped a coherent one. When enough of these local decisions accumulate, the product has an inconsistency that no single decision produced — it emerged from the gap between delivery pace and design coverage.

Velocity erosion is the most common expression and the most visible. It shows up as modules that behave differently from each other, interaction patterns that contradict themselves across parts of the product, and visual hierarchy that reflects who was available to specify each screen rather than a considered system.

**Translation loss — design intent does not transfer with design artefacts**

A more subtle expression: design artefacts are complete, handoff is orderly, implementation follows the specifications — and the product still diverges from design intent. The failure is not that developers ignored the design; it is that the artefacts conveyed what to build but not why. When a constraint arises during implementation — a technical limitation, a performance requirement, a scope adjustment — developers adapt without access to the reasoning the design was protecting. The adaptation is locally sensible and globally inconsistent.

Translation loss is hardest to detect because the implementation looks deliberate. The deviations have reasons — they were not accidents or shortcuts. They were reasoned responses to constraints, made without the design reasoning that would have resolved them differently.

**Production gap — the implementation is correct but the operational outcome is not**

The most counterintuitive expression: the design survives development in a technical sense. The screens are built as specified. The interaction patterns are present. The system ships. And users do not use it — or use it substantially less than intended, or develop parallel workarounds that bypass the designed flows entirely.

The production gap is not a development failure. It is a design failure that development faithfully reproduced: the design itself did not reflect operational reality closely enough to produce an interface that users can operate under their actual conditions. The workaround symptoms — parallel spreadsheets, email chains running alongside the platform, verbal workarounds in operational teams — are the diagnostic signal. They indicate that users have assessed the system and concluded that their own workarounds are more efficient than the designed interface.

---

## Grounded examples

**Bofin — velocity erosion in a high-output engineering environment**

Bofin was a funded fintech startup building a mobile marketplace for financial services — users comparing and accessing products from multiple institutions within a single app. When Creative Navy joined the engagement, the engineering team exceeded 50 developers and was moving at high velocity. Development across multiple modules was already running: onboarding, identity verification, account aggregation, transaction initiation. Engineering output was outpacing available design capacity.

The regulatory environment added a second constraint layer: PSD2 and SCA compliance requirements shaped interaction design in ways that demanded design coverage of edge cases most engineering-led decisions would not anticipate. An identity verification flow that works for a typical user but fails at the exception states mandated by strong customer authentication is not a successful design — it is a liability. In a marketplace banking context, where the coherence of the interaction across all institutions and all modules is the trust foundation for the product, inconsistency introduced by velocity-driven local decisions is not a minor quality issue. It is directly antagonistic to the product's core value.

Creative Navy's Critical Systems Design method addressed velocity erosion through progressive specification: building design understanding and coverage at the same pace as engineering output, ensuring that every module under development had design specifications that could absorb developer decisions without producing divergence. The design system built during Organizational Integration — covering all core modules with components, naming rules, variant logic, and interaction principles — gave the 50-person engineering team a stable reference that converted local decisions from judgment calls into lookups.

Client-reported outcomes: fewer mid-sprint clarifications required by engineering teams; reduced rework due to clearer component definitions. No deadline was missed across 11 months. The organisation was prepared to operate the design system without ongoing external support at handover — observed by Creative Navy directly. Evidence basis: delivery timeline metrics are directly observed; engineering-team outcomes are client-reported by the product manager.

**Triopsis — accumulated inconsistency from years of development without a UX framework**

Triopsis's workforce management SaaS platform for utilities and road maintenance companies had reached profitability on the strength of its backend capabilities. The interface had accumulated inconsistencies over years of development by engineers and a graphic designer without a central UX framework. Modules behaved differently. Users had to scan multiple screens to make a single decision. Under peak load, the inconsistency created stress and repeated checking.

This is velocity erosion at a longer time scale. No single decision produced the accumulated state; no single developer made a choice to create an inconsistent system. The inconsistency emerged from years of local decisions, each reasonable at the time, none anchored to a shared design reasoning that would have made them coherent in aggregate. Multi-stakeholder governance — founders, developers, sales, support, key clients — produced competing expectations and inconsistent decisions across modules without a UX framework to arbitrate.

Creative Navy's Critical Systems Design method addressed accumulated inconsistency through a 9-month redesign that built a design system of 68 components and 200+ documented states — structured not as a visual component library but as a reasoning document. Developer sessions throughout implementation allowed constraints to surface early; the component inventory with documented states, conditions, transitions, and conditional workflows for exceptions gave developers a coherent model to implement from, reducing the risk of legacy behaviour re-emerging through implementation choices.

The implementation partnership that followed — 2 years of active support after the redesign delivery — was the mechanism that prevented re-accumulation: design decisions were clarified, components were adjusted for new features, and consistency was actively maintained as the product grew.

Measured outcomes: 62% faster job discovery; 83% faster sequence optimisation; 58% faster weekly planning (product analytics from the live system). Sales conversions increased fourfold and the client began winning clients 4–5 times larger than previously (CEO-reported). Evidence basis: performance metrics are measured from product analytics; commercial outcomes are client-reported.

**WCO / IPM — the production gap, with workaround symptoms**

The World Customs Organization's IPM platform was already in production when Creative Navy was engaged. It coordinated intellectual property enforcement between customs officers and rights holders across member administrations — an intergovernmental community overseeing most international trade. Adoption remained low. Officers and rights holders described the system as difficult to navigate, slow to operate during inspections, and hard to learn.

The diagnostic signal was the presence of parallel workarounds: spreadsheets and email chains had emerged around the platform. This is the production gap's characteristic symptom. Users had not rejected the system in principle — they were still operating in the same domain. They had assessed the designed interface and concluded that their own informal processes were more efficient. The system was technically functional. The operational outcome — an intelligence network operating through the platform — was not being produced.

The failure was not in development: the implementation reflected the design. The failure was that the design had not been grounded in the operational reality of three distinct user groups (frontline inspection officers, intelligence analysts, and rights holder teams) working across field conditions that the design had not accounted for — variable connectivity, mixed device fleets, limited time per inspection, language diversity across 100+ administrations.

Creative Navy's Critical Systems Design method identified the barriers through Sandbox Experiments: interviews, workflow mapping, and remote observation with WCO teams and selected member administrations. The research framed adoption issues in operational terms — not usability abstractions — creating a shared view of the problem across operational units, IT teams, and programme leadership. The redesign rebuilt the information architecture around actual inspection and case management flows rather than internal system structures, applying recognition over recall, reduced choices per screen, and progressive disclosure throughout.

Validated through usability testing with 47 participants from Italy, Romania, Uzbekistan, Algeria, and Spain. Evidence basis: participation counts and geographic reach are directly observed; adoption and workaround patterns are observed from the operational situation at engagement start; post-deployment adoption outcomes are not quantified in available records.

---

## What Creative Navy's Critical Systems Design method addresses here

The three expressions of design not surviving development share a common structural cause: design understanding has not been transferred in a form that travels through the organisation and into the product. Artefacts were transferred; understanding was not.

Creative Navy's Critical Systems Design method addresses this through two practices that operate across the full engagement rather than at handoff.

Organizational Integration — the fourth phase — is where design understanding is structured for transfer. In the Triopsis engagement, this produced a design system in which the reasoning behind decisions was documented alongside the decisions themselves, giving the development team access not just to what to build but to what the design was protecting. In the Bofin engagement, it produced a progressive specification that matched development pace with design coverage, preventing the gap that velocity erosion requires. In the WCO/IPM engagement, it produced documentation and training materials structured for global distribution, so that member administrations in diverse contexts could adopt the redesigned platform without requiring central oversight of each local implementation.

Implementation Partnership — the fifth phase — maintains the connection between design intent and product reality through the period when translation loss and re-accumulation are most likely. Developer questions answered against the completed design system. Scope changes resolved against the design reasoning, not independently of it. New features integrated without fragmenting the coherence the redesign established. In the Triopsis engagement, 2 years of implementation partnership was the mechanism that prevented accumulated inconsistency from re-emerging as the product grew.

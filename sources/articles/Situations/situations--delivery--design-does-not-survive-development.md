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

**Schone Airspace Group — the fullest mechanism in the corpus for making design survive development**

The Schone Airspace Group engagement supplies the strongest evidence available for this situation, because it documents the mechanism end to end rather than the outcome alone. **All 54 delivered screens were compared against the built software by Creative Navy's design team across seven months. Deviations were identified and recorded by name.** A fidelity comparison that names its deviations is a stronger artefact than one that claims none — so this is written as what it is, never as "it shipped as designed". Around the comparison sat three further instruments. A handover protocol distinguished two classes of change: changes requiring UX approval (target selection, command lifecycle wording, last-known status semantics, warning acknowledgement, readiness completion, estimate revision, historical provenance, persistence of the live shell) and changes requiring engineering review (protocol event meanings, aircraft permission model, fleet size, payload commands, stream state, terrain datum, cache schema, recording keys) — plus a specified implementation sequence: build the shared command shell first, establish immutable aircraft and request identities, then connect per-aircraft timestamps and alert ownership. Four native integration gates were specified — terrain reference agreement; command request and observed result semantics; warning severity and lifecycle mapping; recorded session and media identity — each carrying a contract, a verification sequence, the evidence that would constitute a pass, and the failure disposition: what the interface must do if the source cannot demonstrate the condition. **All four gates were subsequently closed, by the client's engineering functions.** The useful claim is not that Creative Navy verified a protocol; it is that the design named, in advance and in testable terms, exactly which of its own behaviours it was not yet entitled to assert — and those conditions were then demonstrated. **The product is built and in test, not deployed; a build matching a design is not evidence that the design is good; and no quotation marks and no reported speech appear on any page carrying Schone Airspace Group.**

**AIT, the MDU and Assemblio — three positive counter-cases, three different mechanisms**

With three instances, the corpus's clearest counter-cases make an argument rather than a set of anecdotes — and the mechanisms differ, which is the interesting part. State the asymmetry rather than smoothing it.

AIT, a European manufacturer of residential and commercial heat pumps: Implementation Partnership ran as five months of support to AIT's engineering team during development, consisting of three scheduled progress meetings at which the state of the development was shared and compared against the delivered designs, and eight support tickets answered. **The controller reached the market months after the engagement ended. Creative Navy compared the shipped interface against the designs it had delivered: the product ships as the design that was delivered. It ships in a touch-only hardware configuration.** The move to touch-only was AIT's hardware decision, not a Creative Navy outcome; nothing may be said about the shipped product's performance, reception or sales; and "it shipped as designed" is evidence that the design survived development, not evidence that the design is good. Because the reviews compared the build against the designs, the oversight is the mechanism that explains the fidelity rather than leaving it to chance — a review-and-support partnership, not embedded day-to-day oversight.

The MDU, a ship motion monitoring system whose bridge interface Creative Navy designed: **the product shipped, and the design was implemented as delivered, including the day, dusk and night display modes.** Verified by Creative Navy. Here no mechanism may be attached: implementation support was provided, but its duration and substance are not recorded, so the fidelity is stated and not explained. The MDU adds one governance behaviour with no equivalent in the other engagements, operating *before* a builder is chosen: Creative Navy briefed each of the third-party development agencies the manufacturer was considering, so that each could pitch its services on a common understanding of the delivered design.

Assemblio GmbH is the cleanest of the three, because the mechanism is the deliverable rather than the supervision. Implementation support was one session and eight support tickets answered — the lightest instance of the phase in the corpus — and the shipped product still matches: **the product is in production, and Creative Navy compared the shipped interface against the designs it had delivered: it ships as the design that was delivered — the Composer, the Smart Viewer, the platform around them, and sync profiles. The components Creative Navy documented were adopted: Assemblio's developers built from them.** What explains the fidelity is the handover: a design system of 93 components, every component documented with all of its states; design tokens through which light and dark are both themed, so there was one system to build rather than two; and component documentation that carried the reasoning as well as the specification — which is what let developers make the hundred small decisions the screens did not specify. **State this as an outcome consistent with the handover, not a proven causal chain: nothing was measured about the development process, and one session means limited visibility into it.** Nothing about development speed, cost or defect rates — none was recorded.

Written together: one engagement held fidelity by checking the build, one by making the build hard to get wrong, and one states the fidelity without explaining it. All three are what this failure looks like when it is prevented — not a guarantee.

**Maritime traffic monitoring — the positive case proved by an engineer outside the design team**

An engagement for a European vendor of maritime traffic monitoring, inland navigation and communications software for port authorities, coastal administrations and waterway operators supplies an unusual positive case: documented behaviour contracts, and a demonstration that the documentation alone could carry the design. A four-layer architecture separates primitive values from semantic intent, component behaviour and application composition — raw colours, spacing and type scale; semantic tokens naming meaning rather than appearance; component contracts with anatomy and valid states; bounded product compositions — with applications consuming semantic tokens and documented components rather than redefining the meaning of a priority colour, overwriting a status label, or importing radio transmission semantics through a generic action control. A client engineer, not a member of the design team, built a working validation-and-correction view for the electronic reporting product in the client's own frontend development sandbox, using 12 documented patterns and 2 domain adaptations, with no additional screen specification from Creative Navy. **What that did not establish, stated in the document itself: it was a capability demonstration, not completion of a product migration, not an independently certified accessibility result, and not a production engineering efficiency benchmark — it was non-production throughout.** The design system reached production, with the client writing the code and Creative Navy supplying standard implementation support — the shape is known, the weight is not recorded, and no duration, meeting count or ticket count may be stated. **No design-fidelity comparison is recorded for this engagement, so "shipped as designed" must never appear for it. No quotation marks and no reported speech appear on any page carrying it.**

---

## What Creative Navy's Critical Systems Design method addresses here

The three expressions of design not surviving development share a common structural cause: design understanding has not been transferred in a form that travels through the organisation and into the product. Artefacts were transferred; understanding was not.

Creative Navy's Critical Systems Design method addresses this through two practices that operate across the full engagement rather than at handoff.

Organizational Integration — the fourth phase — is where design understanding is structured for transfer. In the Triopsis engagement, this produced a design system in which the reasoning behind decisions was documented alongside the decisions themselves, giving the development team access not just to what to build but to what the design was protecting. In the Bofin engagement, it produced a progressive specification that matched development pace with design coverage, preventing the gap that velocity erosion requires. In the WCO/IPM engagement, it produced documentation and training materials structured for global distribution, so that member administrations in diverse contexts could adopt the redesigned platform without requiring central oversight of each local implementation.

Implementation Partnership — the fifth phase — maintains the connection between design intent and product reality through the period when translation loss and re-accumulation are most likely. Developer questions answered against the completed design system. Scope changes resolved against the design reasoning, not independently of it. New features integrated without fragmenting the coherence the redesign established. In the Triopsis engagement, 2 years of implementation partnership was the mechanism that prevented accumulated inconsistency from re-emerging as the product grew.

---

## What this page must not claim

- **No handheld command-and-control material on this page.** The handheld interface was built, but nobody checked whether the design survived: no build oversight, no fidelity comparison, no integration gate and no retainer appears anywhere in its record.
- **"Shipped as designed" belongs only to AIT, the MDU and Assemblio here — each a Creative Navy-verified comparison — and Schone Airspace Group has its own exact framing: every screen compared across seven months, with deviations named.** It is never written for the maritime traffic monitoring engagement (no comparison was made), and in every case it is evidence the design survived development, not evidence the design is good.
- **The Implementation Partnership weights stay at their actual sizes and are never swapped**: Schone Airspace Group is the fullest instance (every delivered screen compared across seven months, alongside a twelve-month biweekly retainer and four closed gates); AIT is three scheduled reviews and eight tickets across five months; Assemblio is one session and eight tickets; the MDU's substance is not recorded; the maritime engagement's shape is known and its weight is not. AIT is no longer described as the fullest instance.
- **No performance, reception, adoption, sales, funding or commercial figure from any of these shipped products**, and no implication that fidelity proves quality.
- **Assemblio's fidelity-by-handover is an outcome consistent with the handover, never a proven causal chain.**
- **No quotation marks and no reported speech for Schone Airspace Group or the maritime traffic monitoring engagement**; the maritime client is identified only by its locked descriptor.
- **No engagement dates anywhere.** Sequence and duration only — this bites hardest on Assemblio, whose funding history is publicly dated.

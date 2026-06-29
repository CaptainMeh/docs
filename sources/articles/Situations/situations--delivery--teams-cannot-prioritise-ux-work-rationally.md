# `/situations/delivery-and-execution/teams-cannot-prioritise-ux-work-rationally`

---

## Opening — entity anchor

Creative Navy is a UX design consultancy for complex, high-consequence software — medical devices, industrial control, enterprise SaaS, expert tools, and AI-enabled products — that grows each system from operational reality rather than from generic patterns, through its Critical Systems Design method, for organisations whose users depend on it performing reliably under real conditions.

---

## The situation

Feature prioritisation has established frameworks: impact versus effort matrices, dependency graphs, release date constraints, customer commitment tracking. These frameworks are imperfect, but they give teams a shared language for making sequencing decisions explicit and debatable. When a feature is deprioritised, the team can articulate why.

UX work typically has no equivalent framework. It is sequenced by the mechanisms that fill the absence of one: whoever requests design input most urgently gets it; whatever is on the critical path for the next release takes priority; whatever a senior stakeholder is most concerned about gets the most attention. These mechanisms are not irrational in isolation — they respond to real pressures — but they do not account for the properties that make UX work different from feature development in ways that affect sequencing decisions.

The result is design coverage that reflects who argued loudest and when, rather than which workflows most needed design attention, which interaction patterns needed to be established before adjacent modules were built, or which structural decisions would become progressively more expensive to change as the product grew.

---

## Why UX sequencing requires explicit logic

Three properties of UX work make informal sequencing mechanisms systematically insufficient.

**UX decisions propagate across modules.** A navigation model decided for module A establishes expectations that module B, C, and D must either satisfy or break. A state communication pattern established in an onboarding flow creates a baseline against which every subsequent state communication is evaluated by users who have learned the pattern. When these foundational decisions are made by whichever module was next in the queue rather than by deliberate choice about what should be established first, the product accumulates inconsistencies that are not the result of poor individual decisions — they are the result of decisions made without awareness of their cross-module consequences.

**Compliance and dependency chains are invisible without explicit mapping.** In regulated or technically constrained environments, certain UX decisions are upstream prerequisites for others in ways that are not visible from the feature backlog. A financial services platform with PSD2 and Strong Customer Authentication requirements has interaction patterns for authenticated states that propagate through every module touching the user's authenticated session — onboarding, account aggregation, transaction initiation. Designing any of those modules without having established the authentication interaction pattern first means either reworking those modules when the pattern is established, or accepting an inconsistency between the module's design and the authentication standard. Neither outcome was visible from the feature backlog; it only becomes visible from an explicit UX dependency map.

**The cost of deferral is not uniform.** Some UX decisions become more expensive to change after implementation — when users have learned an existing pattern, when components have been built and shipped, when the decision's consequences have propagated into adjacent modules. Others can be deferred cheaply because their consequences are local and contained. Informal prioritisation mechanisms do not distinguish between these — both end up in the same backlog queue, sequenced by urgency rather than by the cost trajectory of deferring each. The high-cost-to-defer decisions get treated like the low-cost-to-defer ones until the product has shipped with the decision embedded, at which point correction is expensive.

---

## Grounded examples

**Bofin — explicit sequencing in a 50-developer environment**

Bofin was building a mobile marketplace for financial services with an engineering team exceeding 50 developers, multiple modules running simultaneously, and design capacity that could not match the pace of development. Product leadership was managing competing module priorities — onboarding, identity verification, account aggregation, transaction initiation — without a rational mechanism for deciding which module's UX work was addressed first or at what depth.

The regulatory environment made the sequencing stakes concrete. PSD2 and Strong Customer Authentication requirements imposed interaction design constraints that were not visible as UX work from the feature backlog — they appeared as compliance requirements, which is a different queue. But their consequences for interaction design were significant: authentication state handling in the identity verification flow established the interaction pattern for every authenticated session across the product. A decision about how users experience authentication during onboarding was not local to the onboarding module. It was the foundational pattern against which every transaction, every account action, every cross-institution operation would be evaluated by users who had learned that pattern first.

Creative Navy's Critical Systems Design method introduced an explicit prioritisation framework during Sandbox Experiments: a lightweight method for distinguishing essential behaviours — interaction decisions that were foundational to the product's coherence and whose deferral would create expensive rework — from optional enhancements that could be added without affecting what needed to be established first. This framework converted sequencing decisions from political questions (whose module is most urgent?) into dependency questions (which decisions need to be made before others can be made cleanly?).

The Iterative System Building phase implemented this sequencing over eight weeks: payment initiation, KYC expansion, and document upload in a deliberate order, with weekly consolidation of inputs from product, engineering, and compliance, and refinement of requirements templates and decision logs as the product's interaction patterns were established. Design coverage did not lag development because the prioritisation framework directed design effort toward the foundational decisions that development most needed to be made before proceeding.

Client-reported outcomes: fewer mid-sprint clarifications required by engineering teams; reduced rework from clearer component definitions. No deadline was missed across 11 months. At handover, the organisation was capable of operating the design system without ongoing external support — directly observed by Creative Navy. Evidence basis: delivery outcomes are directly observed; engineering-team outcomes are client-reported by the product manager.

**IDEXX Animana — prioritisation structure from an evidence base**

IDEXX Animana had eleven years of accumulated UX debt across a veterinary practice management platform when Creative Navy conducted a Sandbox Experiments audit. The challenge facing the product team after the engagement was not identifying what needed to change — the audit produced more than 100 recommendations — but deciding what to change first, in what order, and to what structural end.

Without a prioritisation framework connected to the evidence, 100+ recommendations become a backlog that defaults to the same informal mechanisms: whatever a stakeholder advocates for, whatever is easiest to implement, whatever is most visible to users in a demo. This is the specific failure this page addresses at scale: not a shortage of identified UX work but an absence of rational logic for sequencing it.

Creative Navy's Critical Systems Design method structured the output to address this directly. The 100+ recommendations were organised for direct translation into development tickets — not as a flat list but with structural dependencies and impact distinctions visible. The five-year product vision linked capability stages explicitly to the audit evidence, establishing which structural decisions (the role-architecture separation between reception and clinical interfaces) needed to be made before which feature additions, and why. The sequencing logic was grounded in the evidence — in the understanding of which workflows were most structurally damaged, which user groups were experiencing the highest friction, and which architectural decisions were prerequisites for coherent feature development.

Client-reported six months post-engagement: recommendations confirmed as well-grounded, some already implemented, the remainder planned for future implementation. The pace of implementation reflects internal organisational velocity rather than any issue with the recommendations. Evidence basis: post-engagement outcome is client-reported; research scope (35 clinics, 150+ participants, 3 countries) is directly observed.

---

## What Creative Navy's Critical Systems Design method addresses here

Rational UX prioritisation requires two things that informal mechanisms cannot produce: an operational model of what users need and in what order they need it, and an explicit map of the dependencies between UX decisions that makes the sequencing logic visible. Without both, sequencing defaults to pressure and urgency.

The operational model comes from Sandbox Experiments. In the Bofin engagement, understanding the authentication dependency chain — how identity verification interaction patterns propagate through every authenticated transaction — required enough domain fluency in PSD2 and SCA requirements to recognise that this was a foundational UX decision, not a compliance detail for a lawyer to handle. In the IDEXX/Animana engagement, distinguishing which of 100+ recommendations were architectural prerequisites from which were feature-level improvements required operational understanding of veterinary workflows sufficient to know which structural decisions, if deferred, would make subsequent work harder rather than easier.

The dependency map is what Organizational Integration makes explicit. In both cases, the prioritisation structure was not delivered as a recommendation for the client to interpret — it was structured for direct translation into the decisions the product team needed to make. In Bofin, that was a sprint-level sequencing of module design work. In IDEXX/Animana, it was a five-year vision with capability stages that anchored a multi-year roadmap to the audit evidence. In both cases, the logic behind the sequencing was transferred alongside the sequencing itself — giving the product team the reasoning that would let them adapt the sequence as circumstances changed, rather than a fixed plan that would become obsolete when they did.

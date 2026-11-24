# `/situations/growth-and-product-strategy/product-fragmenting-under-growth`

---

## Opening — entity anchor

Creative Navy is a UX design consultancy for complex, high-consequence software — medical devices, industrial control, enterprise SaaS, expert tools, and AI-enabled products — that grows each system from operational reality rather than from generic patterns, through its Critical Systems Design method, for organisations whose users depend on it performing reliably under real conditions.

---

## The situation

Products that grow by addition rather than design accumulate structural inconsistencies that compound over time. Each addition is locally reasonable: a filter for this market's buyer behaviour, a feature for this user type's workflow, a module for this new capability the product needs to offer. No individual decision is wrong. The aggregate is a product whose different parts no longer share a coherent logic — where users navigating from one section to another find a different interaction model, different terminology, different assumptions about what they know and what they are trying to do.

The fragmentation is invisible from inside the team because it accumulated incrementally. Each new addition was evaluated against the thing it was adding to, not against the whole. No single release produced the problem; the problem emerged across releases without anyone being responsible for it. It is visible to users, who encounter a product that behaves inconsistently without being able to say precisely why it feels harder to use than it used to.

---

## Why this persists

Three structural conditions allow fragmentation to accumulate without triggering intervention.

**No decommissioning discipline.** When a new feature or flow is added, the legacy version it supersedes is rarely removed. Removing it requires coordination across teams, product owners, market stakeholders, and support functions that rarely assembles for that purpose alone. The legacy pattern persists alongside the new one. Users encounter both, form inconsistent mental models, and arrive at support queues with questions the team no longer expects. Over time the product contains multiple ways to do the same thing, none of which behave identically.

**Local optimisation without a global reference.** Country teams, business unit teams, and feature teams each optimise within their scope. A filter added for Polish automotive buyers makes sense for Polish automotive buyers. A flow adapted for a media agency makes sense for a media agency. But no team is responsible for asking whether the sum of local optimisations produces a coherent whole. Without a shared architecture that governs what is fixed and what can vary, each local optimisation is implicitly a vote against coherence.

**The governance structure for addition outpaces the governance structure for coherence.** Every product has mechanisms for adding features: product management, roadmaps, sprint planning, release cycles. Most products have no equivalent mechanism for assessing whether the aggregate of additions is still coherent. The product grows into fragmentation because growing is the default activity and assessing coherence is not.

---

## What this costs

The costs accumulate across three layers simultaneously.

**User experience cost:** Users who navigate between sections of a fragmented product encounter friction that they experience as difficulty without being able to diagnose its cause. Support requests rise not because features are broken but because the product no longer communicates its own logic reliably. Long-tenured users cope by memorising the product's idiosyncrasies; new users spend longer than they should reaching basic competence.

**Engineering cost:** Each new feature must navigate the existing fragmentation before contributing to it. Engineers working in one part of the product cannot assume their assumptions hold in another. Rework happens late in development cycles when fragmentation makes seemingly simple changes unexpectedly complex. The product becomes harder to extend with each release precisely as the business case for extending it grows.

**Organisational cost:** Teams that cannot coordinate on what the product should be consistent about cannot coordinate on what to build next. Product managers cannot make reliable commitments about cross-team features. Marketing cannot run cross-market or cross-segment campaigns reliably because the same journey behaves differently in different contexts. The fragmented product exposes fragmented organisational alignment.

---

## Grounded examples

**OLX — automotive marketplace, multi-market filter and flow accumulation**

OLX operates one of the largest classified advertising platforms in Central and Eastern Europe. The automotive vertical had grown through independent decisions across national markets. Poland, Portugal, Romania, and neighbouring countries had each introduced their own filters, flows, and entry points for buyer and seller journeys. Each local decision had responded to genuine market needs: Polish buyers use detailed technical filters; trust signal patterns differ by market; in-app chat versus immediate phone contact varies in prevalence across Central and Eastern Europe. None of these adaptations was wrong in isolation.

In aggregate, they had produced a platform that behaved differently by country in ways that made it increasingly difficult to steer. Product teams encountered feature bloat. Country managers continued pushing for local variations. Development was reworking flows late in the cycle as cross-market inconsistencies surfaced during build. Marketing could not run cross-market campaigns reliably because the same journey behaved differently depending on where it was executed.

The structural problem: no architecture existed that defined which journeys were fixed across all markets and which could vary locally. Local variation was ungoverned. Every new adaptation added to the fragmentation.

Creative Navy's Critical Systems Design method produced a marketplace coherence framework through Concept Convergence: a documented architecture distinguishing which journeys must be consistent everywhere from which points allow country-level adaptation. After the engagement, country teams could propose adaptations within defined limits. Engineering had a stable reference. Marketing could plan cross-market campaigns against a known behavioural baseline. The framework changed how the organisation makes decisions — not just what the product looked like at one point in time.

Outcomes: delivery facts and structural. No user performance metrics were measured in this engagement. The competitive protection claim is inferred: the architecture creates structural conditions for resisting the fragmentation failure mode; whether those conditions have been tested under sustained growth is not independently confirmed.

**Pixelart Fugo — digital signage CMS, architecture that couldn't absorb new domains**

Pixelart Fugo's digital signage CMS had a working product with a known NPS of 57%. The fragmentation problem was architectural rather than surface: the existing navigation structure couldn't accommodate new feature domains without disrupting what was already there. Adding a capability required rethinking the architecture each time — not because the product was badly built, but because it had been built for its original scope and grown beyond it without a structure that could absorb growth.

The stated goal for the engagement was to create a UX paradigm that could accommodate continuous feature addition without architectural disruption. The design work established two structural changes: an extendable domain structure where new feature domains can be added without disrupting existing navigation; and an interlinking paradigm where content management, screen management, scheduling, and media creation can reference each other rather than operating as siloed modules. These are architectural conditions for absorbing future growth, not just a redesign of the current state.

NPS moved from 57% to 89% (client-measured, before and after, with the second measurement approximately two months after launch). Evidence basis: client-measured; not independently verified. Revenue doubled in the two years following the launch — client-reported; the redesign was part of a broader growth phase that also included rebranding and commercial activity.

**IDEXX Animana — veterinary practice management platform, eleven years of accumulation**

Animana is one of the oldest veterinary practice management platforms in Europe. Eleven years of feature additions, local customisations, and workflow assumptions had accumulated into a platform whose navigation was fragmented between consultation screens, lab results, and patient history; whose workflows required multiple windows to manage multi-pet households; and whose documentation flows interrupted consultations by requiring repeated section-switching. No single addition had been wrong. The aggregate was a platform that clinical staff and receptionists were working around rather than working with — handwritten checklists near terminals, printed reference sheets taped to monitors.

Field research across 35 clinics, 150+ participants, and 3 countries documented the fragmentation at the level of specific observed behaviours. Workarounds were role-specific: receptionists had developed coping strategies for managing multiple animals per client at a glance; clinical staff had developed strategies for avoiding the interface clutter that reception-oriented layouts imposed on consultation screens. When workarounds are role-specific rather than task-specific, the interface architecture is wrong — and in Animana's case, eleven years of growth had made the architectural problem severe enough that no feature-level fix would resolve it.

The engagement produced a 5-year product vision with 100+ development recommendations structured for direct translation into tickets. The primary architectural recommendation was separation of reception and clinical interfaces — a conclusion reached through tension-driven reasoning across the research evidence. Client-reported six months post-engagement: recommendations are well-grounded, some already implemented.

**Maritime traffic monitoring — nine products, separate teams, per-contract extension over many years**

An engagement for a European vendor of maritime traffic monitoring, inland navigation and communications software for port authorities, coastal administrations and waterway operators is the strongest fit in the corpus for this situation: its opening condition is the situation's own problem statement. The portfolio runs to nine products across four families — Vessel Traffic Services (VTS), River Information Services (RIS), a Voice Communication System (VCS) and an Integrated Communication System (ICS) — whose interfaces had been designed by the software engineers who built them, in separate teams, extended per customer contract and tender requirement over many years; the client had made individual improvements and had never commissioned a UX programme across the portfolio. The client's three stated commercial problems were the fragmentation made visible: in demonstrations the interfaces did not communicate that the applications belonged to one family, even where the underlying systems exchanged information; competing suppliers were presenting more coherent software during tender evaluation; and engineering teams were rebuilding interface elements for each product and each customer project, producing repeated work, inconsistent behaviour and maintenance cost. **The client is identified only by the locked descriptor above; the six RIS modules are described generically and never listed as an inventory. No quotation marks and no reported speech appear on any page carrying this engagement — positions are attributed to the role and the artefact they came from. And this engagement is never read as a nine-product redesign: nine products were audited, one was designed to full depth, four received bounded transfer probes, and two received constraint and applicability reviews only.**

**Assemblio — one product derived from another, and features from different eras**

Assemblio GmbH shows the same accumulation at a smaller scale, with the client's own causal account attached. The Smart Viewer had been built from the Composer's components and looked almost identical to it, while the requirements for the two user groups differ — fragmentation with a traceable technical cause. And within the Composer, three different renaming interactions existed for three entity types: double-click for folders, a menu item opening a dedicated screen for projects, a modal for products. The client's stated reason — the features were built at different points in time — is the cleanest account of accretion in the corpus. **Attribute this material as Assemblio's own description and criticism of its product; it is not a Creative Navy audit finding, and no time-saving, adoption or commercial figure attaches to it.**

---

## What Creative Navy's Critical Systems Design method addresses here

Creative Navy's Critical Systems Design method addresses product fragmentation at the architectural level, not the feature level. The Sandbox Experiments phase maps the existing structure as it is actually used — not as it was designed to be used — before any redesign decisions are made. That mapping reveals where fragmentation is surface (different visual treatment of similar functions) and where it is structural (different underlying models in different parts of the same product). These require different responses; treating a structural problem as a surface problem produces a redesign that looks better but fragments again.

Concept Convergence then identifies the architectural decisions that govern what must be consistent and what can vary. This is not a design decision about how the product looks; it is a governance decision about how the product grows. The output is a framework that the organisation can use to evaluate future additions — not just a design that is coherent at the moment of delivery.

Organizational Integration transfers that framework to the teams who will be making growth decisions after the engagement ends. A design system without documented reasoning is a system that will be misapplied as the product grows. A framework without the organisation understanding why the boundaries were drawn where they were is a framework that will be eroded under pressure from the next local optimisation.

---

## What this page must not claim

- **The maritime traffic monitoring engagement is never a nine-product redesign.** Nine products were audited; one was designed to full depth. Its client is identified only by the locked descriptor, its six RIS modules are never listed as an inventory, and no quotation marks and no reported speech appear on any page carrying it. Its tender and competitive problems are the client's stated motivations, not benchmarks Creative Navy ran, and no commercial, tender or engineering-efficiency outcome exists.
- **Assemblio's accounts of its own product are client-stated, never audit findings** — Assemblio does not qualify for UX-audit framing — and no engagement dates appear: Assemblio's history is publicly dated and none of it may be used.
- **No engagement dates anywhere.** Sequence and duration only.

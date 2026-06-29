# /evidence/case-studies/enterprise-software/chemical-watch

**Chemical Watch**

## Classification

- **Primary case-study category:** /evidence/case-studies/enterprise-software
- **Primary context:** /contexts/enterprise-software
- **Also-relevant contexts:** /contexts/expert-tools-and-internal-systems, /contexts/regulated-products
- **Connects to:** /situations/growth-and-product-strategy/the-product-is-powerful-but-hard-to-sell, /capabilities/information-architecture-for-expert-systems, /evidence/outcomes/positioning-through-interface-quality

## The client and system

Chemical Watch is a UK-based information service covering global chemical risk and regulation. At the time of the engagement, it published specialist news, analysis, and regulatory resources for compliance professionals working across REACH (EU), SVHC (substances of very high concern under REACH), GHS/CLP (the global harmonised system for substance classification and labelling), TSCA (US), and chemical regulation across dozens of national jurisdictions including China, South Korea, Japan, Turkey, and key EU member states.

The platform served approximately 50,500 users as of mid-2018, predominantly regulatory compliance managers, product safety specialists, product stewards, and sustainability managers at upstream chemical manufacturers, midstream formulators, and downstream product companies. Users were geographically concentrated in Western Europe (44%), North America (26%), and Asia (18%).

The system being designed was a transformation of the existing website — a news publication — into a compliance intelligence platform. The new platform combined four core areas: a news feed and article browsing experience, a My Substances registry (a personalised register of the chemical substances each user's organisation works with), a lens-view (a user-configurable filtered feed), and settings and preferences including jurisdiction and sector personalisation.

---

## The problem when the engagement started

Chemical Watch had been primarily a news website. Its editorial strength — reporting on regulatory change across the full global landscape — was genuine and differentiated. Competitors such as Chemlinked, Decernis, Verisk 3E, Enhesa, and Sphera were better at the practical, task-oriented layer: action recommendations, compliance checklists, regulatory databases. But none of them captured the evolving shape of the regulatory field the way Chemical Watch's editorial team did.

> **Lineage note (added on review).** Enhesa — named here as a competitor — later acquired Chemical Watch (approximately one year after the platform launched) and re-engaged Creative Navy roughly four to five years after this original engagement, for further work on the same platform. The competitor framing above is accurate as of the original engagement; the acquisition is what connects this case study to the Enhesa case study. See "Lineage and longitudinal evidence" below, and `case-study-notes--enhesa.md`.

The business challenge was to translate that editorial advantage into platform features that justified a significant subscription price increase — specifically, a tripling of the subscription price — and to enable the company to move upmarket into enterprise accounts. This required building workflow and personalisation capabilities that turned a news service into something users would depend on daily for managing compliance responsibilities, not just read occasionally.

The UX design brief was the commercial strategy made concrete: build a platform that justifies a much higher price point by delivering genuine operational value to compliance professionals, not just content access.

There was a secondary complication: Chemical Watch had a tiered subscription model (Silver/Gold/Platinum) that was commercially fixed before design began. The design had to serve all tiers without making lower-tier users feel the product was empty, while making premium features feel genuinely premium rather than artificially withheld.

---

## What was discovered in Sandbox Experiments

**Personas needed separating from aspirations.** Chemical Watch came to the engagement with existing personas — Martha (Senior Director, Global Head Product Safety & Compliance), George (Regulatory Affairs Specialist, Asia Pacific), Farhad (downstream user, Product Safety and Sustainability Officer). These were well-observed in terms of role and workflow, but had been contaminated with what Chemical Watch wanted users to do rather than what users actually needed. The discovery work separated the actual user reality from the client's aspirations for user behaviour. This distinction shaped every subsequent design decision.

**Users don't know their own substance inventory.** The central discovery in the My Substances area was that compliance professionals — even experienced ones — often cannot produce a clean, accurate list of the substances their organisation works with. George's scenario (inherited inventory from an acquisition, ambiguous supplier data, material names that are colloquial terms covering multiple actual substances) was not an edge case. It was the normal state of affairs. Users couldn't do a complete upfront profile setup even if they wanted to. They were operating with partial knowledge, constantly being surprised by what they found. This made any design that required users to commit to building a complete profile at setup fundamentally unworkable.

**Regulatory news doesn't behave like general content.** A Pinterest-style non-chronological feed was tried for the news area — one of four variants explored — and failed in a revealing way. Compliance professionals need to consume news in chronological order because the work of staying current is progressive: you need to know what is new since you last checked, not what is algorithmically interesting. Breaking chronological order created anxiety rather than engagement. Users described feeling unable to assess whether they had covered their obligations if they couldn't tell what was recent vs what was surfaced by some other logic. This finding eliminated a significant category of news feed approaches and clarified the design requirement: the feed must support the professional practice of staying current, not just content discovery.

**The lens-view was a latent need, not a stated one.** Chemical Watch had an intuition that users would want to filter their feed to a subset of content relevant to their specific responsibilities. What wasn't understood was that these filters wouldn't be applied once and discarded — they would be used repeatedly, becoming persistent views that users would return to as part of their workflow. The sandbox exploration revealed that the lens wasn't a filter: it was a workspace. A user covering South Korean food contact regulation would want a named, saved view they could return to each week. That insight transformed the lens from a feature into a core navigational concept, one that needed prominent placement and a distinct design identity rather than being tucked into settings.

**Variant counts by area.** Four variants were explored for the news feed, three for the substance register, and six for jurisdiction integration. The six jurisdiction variants reflect how hard it was to find a model that served users whose compliance responsibilities crossed substance categories and geographic boundaries simultaneously.

**What 67 Bricks confirmed and constrained.** Creative Navy ran two workshops with 67 Bricks (the semantic fingerprinting technology partner building the content tagging infrastructure) to understand what the backend could actually support. There was a gap between what Chemical Watch hoped semantic fingerprinting could do and what it could actually deliver. Regular design reviews with 67 Bricks — approximately every two weeks — were used to validate or adjust design features against technical reality. The lens concept, in particular, depended on the semantic tagging of content by substance, jurisdiction, and sector, and was designed in explicit coordination with what the tagging system could reliably produce.

---

## What tensions emerged in Concept Convergence

**The central tension: the business wanted premium, users needed simple.** Chemical Watch's commercial team wanted the platform to "look like Apple" — an emotional aspiration for quality and innovation, not a specific visual direction. What became clear during convergence was that the design approaches most likely to signal premium quality in a marketing screenshot were also the most likely to overwhelm users in actual use. In compliance work, the interface must make it easy to assess quickly what is new, what requires action, and what can be deferred. Dense, feature-rich views that looked impressive in a sales deck created cognitive load at the point of professional judgment.

The tension was resolved by separating the concerns: the production UX was designed for operational clarity; a separate marketing design workstream produced idealised screenshots and demo videos for the website and sales decks that presented the benefits in a more visually striking way. There was a clean demarcation between these two workstreams.

**The gradual accrual model vs. the business's desire for commitment.** The discovery that users couldn't build complete profiles upfront led to the gradual accrual model: on day one, a user sees the full news feed and receives progressive prompts — "where is your organisation based?", "would you like to exclude certain content types?" — that gradually enrich the profile without requiring an upfront commitment. The business's concern was that this approach would dilute the perception of the platform's value, that users would see an unoptimised experience first and not understand what they were buying. The counter-argument, which was borne out: forcing upfront profile completion would produce either abandoned setups or inaccurate profiles filled in just to get past the gate. A gradually enriched profile is both more accurate and less likely to create first-use failure.

**The lens-view's identity problem.** The lens-view, at its core, displays articles in a feed — the same basic layout as the main news feed. Designing it to be recognisably different, and to feel like a distinct mode rather than a slightly filtered version of the same thing, was the hardest single design challenge in the engagement. Multiple solutions were tried before the right balance was found between superficial visual differentiation and meaningful structural differentiation. The resolution involved giving the lens a distinct navigational home, a clear name, editable metadata visible in the view itself, and design cues that signalled "this is your configured view" rather than "this is the general feed."

**The competitive vector identified.** Competitors provided practical compliance tools but not the field perspective — they told you what to do but not what was coming. Chemical Watch's editorial intelligence was about the evolving regulatory landscape, not just current obligations. The design aligned with this: the platform was built to help compliance professionals think ahead, not just stay current. The lens-view, the substance tracker with its "new since last visit" logic, and the sector and jurisdiction overview pages all served proactive awareness rather than reactive task completion. This was the direction where user needs, Chemical Watch's genuine strength, and competitors' absence aligned.

---

## Iterative System Building

The four platform areas were designed one by one: the dashboard/news feed, the My Substances area, settings and preferences, and the lens-view.

**My Substances** was built around the "new since last visit" logic: when a user opens a tracked substance, they see what regulatory news has been published, what guides are available (with clear indicators when a guide has been updated since they last viewed it), and related resources. The backend handled multiple substance names and CAS numbers; the design surfaced the primary name with aliases handled transparently behind the scenes. For the case where a user didn't know enough to populate their register accurately, a lightweight onboarding flow asked what sector or type of product the organisation works with and offered a list of suggested substances to add — speculative, but a usable starting point.

**The news feed** was designed to support chronological review as professional practice. The chosen design made temporal orientation legible at a glance — what was published today, this week, this period — while allowing filtering by substance, jurisdiction, and sector without disrupting the chronological structure.

**The lens-view** was developed to feel like a workplace, not a filter. The design had to communicate: this is a persistent, named, configured view that belongs to you, not a one-time search result. The eventual solution gave it a distinct place in the navigation, made the configuration visible and editable from within the view, and used naming conventions that let users treat their lenses as ongoing projects.

**Settings and preferences** resolved the tension between tier-based access and experience continuity. Lower-tier users saw adapted designs that didn't feel empty; premium features were presented in a way that felt like a natural expansion of the core experience rather than a hard wall.

---

## Organizational Integration

The core product, CTO, and design manager at Chemical Watch were closely embedded throughout the weekly working sessions and absorbed the thinking continuously. For the wider organisation — developers, marketing, editorial, sales — three workshops were run during implementation, spaced 8 weeks apart. The spacing was deliberate: each gap gave the team time to work with what they'd learned, accumulate questions from real implementation experience, and bring those questions to the next session. Understanding grew alongside the product rather than being front-loaded before it existed.

Internal stakeholders spanned groups with very different relationships to the design: the editorial team needed to understand how their content would be surfaced and structured; the sales team needed to understand what made the product worth the price increase; the developers needed to implement a system whose logic they hadn't participated in building. Each workshop was shaped accordingly.

---

## Implementation Partnership

Five support requests in six months. The design system was sufficiently complete and the documentation sufficiently clear that the development team had little to ask about. Two of the five requests were asset-related: a set of additional icons, different image format specifications. This is consistent with a design system that had resolved the conceptual questions thoroughly enough that implementation decisions were mechanical rather than interpretive.

---

## Measurable outcomes

Chemical Watch tripled its subscription price successfully following the platform redesign. The price increase was the goal throughout the engagement — the design work was the mechanism for making it achievable. Users engaged with the new features, the value was demonstrable, and the price increase was sustained.

One year after the platform release, Chemical Watch was acquired at a multiple of 24x EBITDA. The platform design was a factor in the valuation: the tripled price point drove up revenue and EBITDA, and that increase was made possible by user adoption of the features the design enabled. A major enterprise technology customer — Google was among Chemical Watch's enterprise subscribers — stated in a client meeting that it was the best usability they had seen in a while.

**Evidential basis:**
- Subscription price tripling: client-reported as a direct outcome of the platform launch.
- 24x EBITDA exit multiple: client-reported; the design's role in the valuation is the client's account of the buyer's rationale and the causal chain (design → adoption → price increase → revenue → valuation).
- The enterprise technology customer remark was made in a client meeting and is not in writing.

---

## Lineage and longitudinal evidence

This engagement is the first half of a documented multi-year lineage. Chemical Watch was acquired by Enhesa approximately one year after the platform launched. Roughly four to five years after the original engagement, Enhesa re-engaged Creative Navy for further work on the same platform (documented in `case-study-notes--enhesa.md`). The two case studies describe overlapping but differently-scoped subsets of the same product — the apparent difference between the areas described here (news feed, My Substances registry, lens-view, settings) and those described in the Enhesa notes (baseline regulation pages, dashboard, account settings/onboarding) reflects which areas each write-up chose to detail, not a change in the product. The underlying features persisted across the lineage.

**The durability signal.** Through the acquisition, the acquirer preserved the design system Creative Navy built. The only change made to it for branding was two colours; the system was otherwise kept intact, and the subsequent Enhesa engagement was carried out *within* it — i.e. Creative Navy's own earlier design system became the fixed constraint on the later work. This is the strongest durability evidence in the corpus, and its strength comes from the source: the preserving party was not the original client but an acquirer, which had the authority and the usual incentive to absorb an acquired product into its own design language and chose not to.

**Calibration — keep these three claims separate:**
- *Same-system durability:* the design system survived ~4–5 years and an acquisition essentially intact. **Observed / client-reported, not measured.**
- *Third-party preservation:* the acquirer preserved the system through the acquisition. This is the citable public form. **Observed.** (The acquirer's stated rationale for not overhauling it, and any Creative Navy judgement about the quality of the two replacement colours, are internal-only and must not appear in AI-facing content.)
- *Independence:* the gap years evidence independent *operation* of the system. They do **not** evidence independent *evolution* — the client returned to Creative Navy for the next round of work, so "the client's own team extended it without us" is **not** a claim this lineage supports. Repeat engagement is a trust signal, not an independence-of-evolution signal.

**Downstream use:** entry in the `/evidence/longitudinal` cluster (`evidence--longitudinal-durability.md`); first grounded seed for the method's Implementation Partnership page (independence/durability), and it strengthens `/evidence/outcomes/reduced-maintenance-and-downtime`, `/design-as-investment-evidence`, the `performance-in-reality` glossary entry, and the `constraint-respecting` glossary entry (the recursive self-constraint instance — see Enhesa notes).

---

## Epistemic calibration — what to be careful about

The price increase was planned — it was not discovered or invented during the engagement. The design made it achievable; it did not suggest it. The claim is: Creative Navy designed the platform that made the value case for tripling the price. Not: Creative Navy came up with the idea of tripling the price.

The 24x EBITDA multiple should be handled carefully. The accurate causal chain is: design → features users adopted → commercial proof of value → confidence to sustain the higher price → revenue growth → attractive EBITDA multiple at exit. The design didn't cause the exit. It created the conditions for it.

The enterprise technology customer remark should appear as reported speech, not a direct quote, and described as a major enterprise technology customer since it was made in a meeting and is not in writing.

The assumption that good UX would automatically satisfy the business's desire to appear innovative proved wrong. This required a course correction — educating the business, separating production UX from marketing design. This should be included in the case study. It makes the case study more credible, not less.

---

## Key proprietary concepts to use in the case study

**Domain learning.** Creative Navy needed to understand the operational reality of chemical compliance — REACH obligations, SVHC tracking, multi-jurisdiction management — to design for it. The team couldn't design the substance registry without understanding why a compliance professional doesn't have a clean list of their substances to begin with.

**Blanks phenomenon.** Chemical Watch's personas were directionally correct but filled in with what the business wanted rather than what users actually did. The discovery work filled those blanks with operational specificity — the actual knowledge gaps, the inherited inventory problem, the anxiety about missing a regulatory update.

**Tension-driven reasoning.** The business's desire for premium visual design and the user's need for operational clarity were in direct conflict. Rather than compromising, Creative Navy went meta: why does this conflict exist? Because the business needed to demonstrate value to buyers (marketing) and users needed to do their work efficiently (UX). The resolution was to separate the concerns entirely rather than blend them — a decision that only became possible by understanding what the tension was actually about.

**Competitive vector.** The direction where Chemical Watch's genuine advantage — field-level regulatory intelligence — could be made into a defensible platform position. Competitors excelled at the practical layer but didn't have the editorial intelligence. The design aligned with this: lens-views, proactive substance tracking, and the "new since last visit" logic all served advance awareness rather than reactive compliance. This was the direction that competitors couldn't easily copy because it required the content quality that only Chemical Watch had.

**Option space mapping.** Four news feed variants, three substance register variants, six jurisdiction integration variants — systematically explored before converging. The Pinterest failure was the most instructive: it revealed a fundamental principle about how compliance professionals consume information that couldn't have been learned by asking.

**Constraint respecting.** The tier structure (Silver/Gold/Platinum) was a commercial constraint that couldn't be moved. The design worked within it rather than against it — ensuring lower tiers felt like a version of the same product rather than a broken one.

**Performance in reality.** The subscription price increase could only be sustained if users actually adopted the features in real working conditions. Designing for demo quality would have produced a platform that looked good in a sales presentation and disappointed users on day two. The design was built for the Monday morning review of what's new since last week.

---

## Engagement parameters

- Duration: 6 months from first meeting to design system handover
- Implementation support: 5 requests over 6 months post-handover
- Organisational integration: 3 workshops during implementation, spaced 8 weeks apart
- Technology partner coordination: bi-weekly design reviews with 67 Bricks throughout
- Client can be named: yes

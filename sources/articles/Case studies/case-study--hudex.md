# /evidence/case-studies/ai-products/hudex

**Hudex**

## Classification

- **Primary case-study category:** /evidence/case-studies/ai-products
- **Primary context:** /contexts/ai-enabled-products
- **Also-relevant contexts:** /contexts/expert-tools-and-internal-systems, /contexts/government-and-public-sector
- **Connects to:** /evidence/outcomes/design-as-investment-evidence, /situations/growth-and-product-strategy/the-product-is-powerful-but-hard-to-sell, /capabilities/information-architecture-for-expert-systems

## Context and starting conditions

Hudex is an AI-powered content analysis platform that ingests unstructured data from social media, audio, video, radio, and reports, then clusters it semantically to allow analysts to explore patterns, themes, and signals across large datasets. The platform's core visualisation is a dondogram — a hierarchical tree structure representing thematic clusters at multiple levels of depth.

The engagement began as a v2 redesign but was more precisely a new product design built on a legacy algorithmic foundation. Hudex 1 had been built specifically for social network analysis. Hudex 2 represented a deliberate platform pivot: from social media tool to general-purpose intelligence operating platform capable of processing any modality of content. The new algorithmic capabilities were substantial; Creative Navy's task was to surface those capabilities through a coherent interface and resolve the usability problems that had accumulated in v1.

The client had existing users and had gathered informal feedback over time, but had not conducted structured user research. Creative Navy conducted the primary user research from scratch.

---

## Users and use cases

Three distinct user archetypes were established through research and client sessions:

**Government analysts and diplomats** — example: French Ministry of Foreign Affairs. Over 200 diplomatic cables are sent from embassies worldwide to Paris each day. Volume and lack of structure mean critical information frequently fails to reach the right people; even the most engaged minister reads approximately 20 cables per day. Hudex provides structured overviews of this information stream.

**Broadcasting network workers** — example: Radio France, which operates 44 local stations across France and overseas. Local news is produced continuously but rarely aggregated or processed at a national level. Hudex enables a daily global scan of all content, surfacing patterns, movements, and signals across the full network.

**Intelligence community operators** — monitor specific communities for emerging signals, detect narratives, track threat patterns, and act on insights rapidly.

The three archetypes do not require different feature sets — they share core workflows. Understanding them shaped design decisions about progressive disclosure, entry point clarity, and the balance between expert and non-expert access. The most important design implication: users range from ministerial-level overseers (requiring instant comprehension of high-level structure) to expert analysts spending multiple hours per day in deep exploration (requiring full capability access without friction).

---

## Sandbox Experiments

### Domain learning

The Creative Navy team completed 10 training tasks provided by the client, acting as full users of the demo environment. These tasks were designed to span all three user archetypes, covering the range of analytic workflows the platform supports. This is domain learning through product immersion: the team became productive users of the system before any design work began.

During this immersion, the team identified frictions and gaps that the client had not specifically flagged — though the detail of these specific findings is not retained in the current record. The immersion process informed the team's understanding of the dondogram interaction model, the entry point problem, and the cognitive challenge of navigating multi-layered cluster structures.

**Evidence calibration:** Domain learning approach and task coverage reported by the Creative Navy team. Specific self-directed findings from immersion are noted as present but not detailed in current records.

### User research

Research was conducted with three internal Hudex users — the only users accessible at that stage. The sample included:

| User | Experience | Role | Usage |
|---|---|---|---|
| User 1 | <1 month | Business developer (demos) | Occasional |
| User 2 | 9 months | Analyst / Chief of Staff | Multiple hours/day |
| User 3 | 8 months | Analyst | Multiple hours/day |

Research surfaced the following findings:

- **Entry point problem:** Users arrive at the platform without understanding what they are looking at. The dondogram is not intuitive to new users and requires explanation. Clients attending demos do not understand the dondogram or the pyramid unless someone explains them. This was a directional intuition the client held but had not articulated precisely; users gave it specific form. One user described the ideal alternative: "Start with a list of the main themes and boom, you're omniscient of your data in five seconds."

- **Depth avoidance:** Users are reluctant to explore deeper cluster layers when confronted with the full dondogram structure. They stay at the surface. This was known to the client but user research confirmed and strengthened the understanding.

- **Navigation confusion:** The dimensions view was described as confusing. Functionalities are not hierarchical; users do not know where to look in the process.

- **The dondogram as client demo liability:** For users in client-facing roles, the dondogram creates difficulty — figuring out how to present it rapidly is an ongoing challenge. A user quoted: "For someone working in a bank, having something that looks like a spider is not very inviting."

- **What works:** The AI chat is considered genuinely useful and well-regarded by clients. The time series view is useful. Theme filters impress clients. Manual data labelling is valued.

- **Learning curve:** Approximately 1–2 hours for a new user to learn the tool once they have guidance. Without guidance, the tool is not self-explanatory.

### Blanks phenomenon — two instances

**Instance 1: Entry point clarity.** The client had a directional intuition that users struggled to orient themselves in the platform, but had not identified "no clear entry point" as the specific structural problem. User research gave this precision: the absence of a summary layer before the dondogram was the issue. The blank was in the space between "users find it overwhelming" and "the platform has no page that orients users before they need to interpret a complex visualisation." Research filled that blank and established the design requirement.

**Instance 2: The project overview.** The project overview page essentially did not exist as a concept in the legacy product. The client had not specified what it should contain or do. This was a blank of a different kind — not an unarticulated problem but an unarticulated space. What belongs on a project cover page? What should a user understand before entering the data? The 20-iteration arc on this page reflects the client working through this question in real time alongside Creative Navy, arriving at the "book cover" metaphor as the resolution: simple, visual, high-level summary information as the project entry point.

---

## Concept Convergence

### UI vision tension

The most significant tension during convergence was in the UI — specifically, executing the client's visual vision. The tension had several interlocking dimensions:

**Articulation gap:** The client had a strong sense of what they wanted visually but could not specify it precisely enough for the team to execute it directly. They knew what felt right only when they saw it. This is a form of the blanks phenomenon operating at the visual identity level — the vision existed but lacked the specificity needed to design from it.

**Palette contradiction:** The client's brand concept was built around the ARLQ harlequin mascot — a character representing signal vs. noise, with a pastel, diamond-tile visual identity. However, the founder's visual reference was a scene from the Joker film, which uses saturated primaries (red, blue, yellow) — directly contradicting the pastel palette. Resolving this required many iterations rather than a single direction decision.

**Symbol integration:** The team spent significant time attempting to incorporate the diamond shape from the ARLQ logo into the main navigation and background elements. Translating symbolic intent (the harlequin identity) into functional interface behaviour proved to be its own distinct challenge. Some iterations explored this integration; others deprioritised it in favour of functional clarity.

**Resolution:** The tension was resolved through sustained iteration — keeping an open mind, listening closely, and running as many rounds as necessary. The team did not force a convergence before it was earned. Convergence on UI style and the project overview together constituted the primary delay relative to plan.

### What Concept Convergence produced

Convergence on the main navigation style, the project overview concept ("book cover" metaphor with summary information in the foreground and a minimal dondogram in the background), and the UI visual direction — pastel palette, accessible visual language, non-intimidating first impression. The "sophisticated enough to be taken seriously, not so technical it frightens people" tension was resolved through progressive disclosure: depth available on demand, not at first sight.

---

## Iterative System Building

### Scope and structure

The engagement covered a full redesign of the platform's main pages and core flows. Iteration counts per component:

| Component | Iterations |
|---|---|
| Project overview | 20 |
| Data exploration | 10 |
| Dondogram information | 6 |
| Data visualisation | 5 |
| Accounts | 5 |
| Homepage | 4 |
| Main navigation | 4 |
| Filters | 3 |

### Progressive disclosure as design principle

The central design challenge was making a deeply complex system non-intimidating without removing its depth. The resolution was progressive disclosure at the architectural level: the platform is structured so that non-expert users can orient, explore at a surface level, and find value without confronting the full system. Expert users can access full depth on demand. This is not simplification — it is structured revelation of complexity.

The design introduced a summary layer before the dondogram: a project overview that provides high-level theme counts, source counts, and key information before the user enters exploration. From there, users can progress into the dondogram or branch into other views. This was a structural requirement that emerged from user research, not from the original brief.

### Requirements discovered during the engagement

The following requirements were not pre-specified in the brief. They emerged through exploration and iterative working sessions:

- **Navigation memory:** When a user selects a theme and switches to another tab, the selection is currently lost. The requirement to preserve navigational context across view changes was identified through use and discussion.
- **Notes editor:** A rich-text editor at the project and tag level, with the ability to insert current visualisation content directly into notes — supporting the analyst workflow of capturing observations alongside data exploration.
- **Universal export system:** Consistent export of all visualisations and data.
- **Side panel behaviour:** Simplified side panel showing key data, with the ability to expand a single data point, tag directly from the detail view, and navigate directly to a specific visualisation.

These requirements represent progressive specification in operation: the design engagement revealed what the product needed to do in ways the brief did not capture.

### What user research changed

Users articulated the need for a clear entry point into the dondogram, and the absence of a summary project page. Both of these findings were translated directly into design decisions: the progressive disclosure architecture and the project overview concept. These were not refinements to an existing direction — they were structural choices that emerged from research.

### Design system

A complete design system was delivered as a Figma library, covering:

- Component library
- Typography
- Colour tokens
- Interaction states

---

## Organizational Integration

Each design presentation was accompanied by design education content: explanations of user behaviour, cognitive load considerations, and the reasoning behind specific design choices. This practice ran throughout the engagement — the client was not presented with decisions but with the thinking behind them.

---

## Implementation Partnership

The Implementation Partnership ran for 7 months alongside and following the design phase. It included:

- **3 data visualisation animations** — motion design for key data transitions within the platform
- **7 developer collaboration sessions** — responding to questions and edge cases arising during development

The partnership form here was primarily responsive: Creative Navy answered questions as developers implemented, preserving design intent through the build process without the degree of sustained oversight that characterises longer implementation partnerships on more complex builds.

---

## Outcomes

### User reception — existing users

A client-conducted survey of 45 existing users found that users rated the redesigned product as significantly better than the previous version.

**Evidence calibration:** Client-reported, conducted as part of Hudex's internal marketing effort. "Significantly better" reflects the client's characterisation of survey results, not a standardised rating instrument. Treat as directional.

### User reception — new users

In the growth phase following launch, new users rated usability as good (68%) or very good (23%).

**Evidence calibration:** Client-reported. Source and methodology of rating scale not independently verified.

### Investment — £3 million

Three months into the growth phase, Hudex received £3 million in investment. The client explicitly attributed the design as critical and foundational to the product's ability to sell and to the growth phase itself. In the client's account, the interface quality was a prerequisite for investor confidence.

**Evidence calibration:** Client-reported causal link between design quality and investment outcome. The attribution is direct — the client stated the design was key to getting the product to sell and to the foundation of the new business phase — but the causal relationship between interface quality and investment decision cannot be independently verified. Frame as client-reported.

### Positioning through interface quality

The design was explicitly positioned by the client as what made the product credible and fundable. This is a documented instance of interface quality functioning as a strategic asset: not just improving usability but enabling a commercial phase that would not otherwise have been achievable. The mechanism — interface quality as the signal of product credibility to investors and new customers — maps directly to the positioning through interface quality outcome pattern.

### Capability democratisation

The platform was redesigned to serve users ranging from non-technical government ministers requiring instant high-level comprehension to expert intelligence analysts conducting multi-hour deep explorations. The progressive disclosure architecture achieved this without creating two separate products or requiring role-based configuration. Non-expert access was added without removing expert depth. This is capability democratisation: the same system became usable by a wider range of people without compromising its performance for its most sophisticated users.

---

## What went wrong or required adaptation

**UI style convergence took longer than expected.** The combination of the articulation gap in the client's visual vision, the Joker palette vs. pastel contradiction, and the complexity of style components required (3D elements, gradients, diamond motif integration) meant the team allocated substantially more time to UI exploration than planned.

**Project overview took longest of all components.** 20 iterations — the highest count across any single component — reflects the absence of an established mental model for what a "project cover" page should do. The concept had to be invented, not refined.

**Practical consequence:** Some screens and flows were delivered only in wireframe state. The client made an explicit decision to prioritise getting the UI style right over maximising screen coverage. This was a deliberate tradeoff, not an unmanaged overrun. The cost was reduced coverage; the benefit was a resolved and fully owned visual direction.

---

## Flags for the notes file

- The detail of what the team discovered during product immersion (beyond what the client had flagged) is not currently available. This is noted as a gap — if specific observations from the training tasks can be recovered, they would strengthen the domain learning section.
- "Significantly better" in the survey results is the client's characterisation; the underlying rating scale is not documented here.
- The 68% / 23% usability ratings — methodology and instrument not independently verified.
- The investment causal chain is client-reported and direct, but not independently verifiable. Frame explicitly as such in the published page.

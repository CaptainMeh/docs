# `/contexts/emerging-products`

---

## Domain vocabulary

- Emerging product / early-stage product / pre-product stage
- Domain expertise → product model — the translation problem this context is defined by
- Origination (vs. redesign) — the characteristic challenge is building product structure for the first time, not improving existing structure
- Information architecture at origination — defining entities, relationships, user journeys, and scope boundaries before any interface exists
- Option space mapping at the architecture level — when there is no existing system to analyse, the option space is opened at the structural level before any interaction design begins
- Domain learning from a knowledge corpus — in emerging products, domain learning comes from the founder's or researcher's materials (thesis, technical documents, prior research) rather than from an operational system; in public-sector origination it can come from the commissioning body and beneficiaries instead (Neugo: the Home Office and the legal firms)
- Blanks phenomenon in origination mode — founder (or stakeholder) intuition that is directionally correct but cannot yet be specified as a product; the blank is not a gap in knowledge but a gap in structure, and in the value-recognition register, a gap in being able to name the value at all
- Bootstrapped constraints / resource constraints — emerging products commonly involve compressed timelines and limited budgets; the design approach must account for this
- Prototype as primary communication artefact — in pre-revenue or pre-deployment contexts, the prototype is often the product as far as investors, commissioners, and early adopters are concerned
- Investor readiness / investment demonstration — demonstrating product thinking, structural coherence, and market readiness to investors who cannot evaluate potential from a description alone
- Public commission / commissioning decision — the public-sector analogue of investor readiness: the artefact's job is to win a government or consortium commitment to build (Neugo)
- Sparse prior art — when a product category is genuinely new, design cannot borrow established interaction patterns; solutions must emerge from the problem rather than from convention

---

## Evidence to draw on

### Greenlight workplace safety incident reporting (academic → product model)
- Founder: Samantha Gruskin, doctoral researcher; thesis described how workplace safety incidents are recorded, escalated, and followed up in real organisations. Complete domain expertise; no product frame.
- The translation problem: the thesis contained implicit structure — categories, severity scales, near-miss events, escalation paths, follow-up actions — that only becomes a product model when extracted, validated with the domain expert, and made explicit. That extraction was the first phase of work.
- Information architecture exploration: three IA concepts developed (linear flow, modular with conditional sections, intermediate variants) and compared across incident types (minor incidents, serious injuries, near-miss reports). Modular architecture with a consistent spine and conditional sections was the convergence decision.
- Prototype development: three wireframe versions over two weeks, each increasing fidelity (core reporting journey → incident type variations and list/detail views → wording/field groupings/action order)
- User testing: people who regularly deal with workplace incidents. Findings: hesitation at form length transitions; benefit from section reordering for clearer progression; simplified branching rules improved understanding of conditional fields.
- Strategic staging discussions: dedicated sessions on build sequencing — single core flow for pilot organisations first vs. adding analytics earlier; partnership options with safety consultancies.
- **Interactive prototype delivered in approximately 4 weeks; investor demo assembled in approximately 1 week; fully documented for development handover. Project-observed.**
- Evidential status: all outcomes are project-observed or client-reported. No post-engagement data on investor conversations, funding, or deployment is available for publication.
- This case study demonstrates Creative Navy's capability in a specific mode: working with domain experts who are not yet product thinkers, extracting implicit structure from non-product sources, and producing credible artefacts under bootstrapped constraints. Present it as such — not as representative of Creative Navy's typical engagement complexity.

### Veecle automotive embedded development IDE (paradigm-shift product, investment outcome)
- Cloud-based IDE for automotive and embedded software engineers — the paradigm shift from fragmented legacy tooling (Vector, Grafana dashboards) to a modern code-first environment analogous to Android Studio, but for complex embedded and automotive systems
- Approximately ten early beta users at engagement start; the product model existed but was not communicating itself — users understood they could write code, nothing more
- Domain learning was substantial: the team needed to internalise the embedded development workflow (code → simulate → debug), how asynchronous log streams behave in embedded systems, how developers move between tools by task. Workshop series including a telemetry deep-dive and AI integration workshop.
- Research: Creative Navy wrote the research script; structured interviews with beta users produced 64 discrete feedback points, classified by importance, converted directly into sprint tickets. This structured the entire subsequent design effort from user evidence.
- Telemetry: the Grafana-style dashboard model was explicitly rejected — requires time-consuming configuration, associated with post-deployment monitoring rather than active development debugging. Resolution: constrained hierarchical component view (latest N logs per component rather than continuous scroll)
- AI integration: designed as a dedicated AI Optimisation screen with structured analytical view — not conversational AI but a tool for scenario simulation and comparative decision-making
- Progressive disclosure as a system-wide principle: simple by default, expert functionality on demand. Resolved the developer/stakeholder tension (developers wanted complexity exposed; stakeholders wanted simplification) without requiring either side to concede.
- **£2M development funding unlocked. Designs used in investor demonstrations where the interface comprised approximately 70% of the pitch content. Client-reported.**
- All designs implemented by Veecle's development team. Client-reported.

### Puraite AI systematic review (first-mover AI product, sparse prior art)
- AI-assisted systematic literature review tool — a category where no direct prior art existed. Rayyan uses AI as an add-on to conventional review; Elicit uses AI-first but outside the formal systematic review process. Puraite required design for a genuinely new interaction model.
- Starting conditions: product partially built, beta launch being prepared, no user research access available. Creative Navy PM's firsthand systematic review experience used as domain learning proxy — this methodological choice was presented to the client explicitly with its tradeoffs and limitations.
- The sparse prior art condition meant that Sandbox Experiments had to generate reference points rather than draw on them. Proposals were built and evaluated to understand what the problem actually required, not what convention suggested.
- 4 iterations on the AI suggestion display before resolving the compact-enough-to-scan / detailed-enough-to-support-override tension. Resolution: direct quote from publication visible in side panel from the outset — no interaction required to access supporting evidence.
- Navigation: 13 top-level items → 4. Identified by Creative Navy outside original scope; client described this as one of the most significant contributions of the engagement. Classic blanks phenomenon: the client had not registered the navigation as a design problem.
- **Client-reported outcome: users who had perceived Puraite as theoretical began actively using it post-redesign; client entered growth phase. This is a product-legitimacy shift, not a measured performance improvement.**
- 7-month Implementation Partnership

### Hudex v2 (at the boundary — platform pivot as origination)
- Hudex v2 was a platform pivot from a social media analysis tool to a general-purpose intelligence operating platform. Not strictly a greenfield product — v1 existed — but the design conditions for the project overview were structurally equivalent to origination.
- The project overview page: 20 iterations, the highest count across any single component. The concept had to be invented, not refined. The "book cover" metaphor (simple, visual, high-level summary information before entering exploration) was not a pattern that existed in adjacent products — it emerged from working through what a project cover page should do when the client did not yet have a mental model for it.
- This is the clearest single example of origination work within a broader redesign engagement: the blank was not a gap in information but a gap in concept. The iterative process was the mechanism for building the concept.
- **£3M investment received 3 months into the growth phase. Client attributed the design as critical and foundational. Client-reported causal link.**
- Include as a note: "The Hudex project overview illustrates the origination condition within a larger engagement — the challenge of inventing a concept rather than refining one. It is not a full emerging product engagement but demonstrates the same analytical conditions."

### Squaremind (at the second boundary — working technical product, commercially unviable interface)

- Squaremind had built a functioning dermatology scanning device: hardware that worked, a robot arm that scanned, software that processed the images. The technical capability was real. The commercial challenge was different: the device's premise — that patients could operate the scan without clinical supervision — had not been demonstrated. Squaremind's own test with 14 patients produced 2 completions. The interface did not deliver the premise.
- The emerging condition here is distinct from Greenlight (no product model), Veecle (no established workflow), or Puraite (no prior art). The product existed and functioned. What was emerging was the product's commercial viability: 9 clinics were in commercial discussions, withholding purchase until the autonomous-operation premise could be demonstrated credibly. The interface was the obstacle between a working prototype and a viable product.
- **What Creative Navy had to build was not a product model but a guidance architecture** — a framework for how the interface must manage a patient's mental model, prevent confusion events, and recover from them, across a sequential physical process with no tolerance for failure. This is origination work in the interaction logic of the system, not at the product-model level.
- The Inform–Prevent–Correct framework was the design artefact produced during Concept Convergence — a recursive guidance architecture mapped step by step across the scan flow, delivered as an explicit diagram. Like the Greenlight IA or the Veecle progressive disclosure architecture, it was structural origination: building something that had not existed in the product.
- **Post-redesign ecological testing: 27 of 29 patients completed the scan independently; all 12 who got stuck recovered. Creative Navy-measured, ecological protocol, two sites.**
- **Pre-redesign baseline: 2 of 14 completions. Client-reported background — Squaremind's own test before Creative Navy's involvement.**
- **Commercial outcome: all 9 clinics purchased. Client-reported; Creative Navy observed 5 of 9 demos.** Unlike the investment pattern that characterises the other emerging product cases, the Squaremind outcome was commercial sales rather than investment. The design did not enable a funding round; it enabled first commercial deployment. The mechanism is structurally similar (design making a commercial claim real rather than asserted) but the audience was buyers rather than investors.
- "The Squaremind engagement illustrates the second boundary: a product that is technically real but commercially dormant — and the design work that converts the second condition into the first."

### Neugo (at the third boundary — origination as a discrete commissioning-stage engagement, public-commission register)

- Neugo's first engagement (7 weeks) was an origination engagement. A consulting company had identified an opportunity for a UK visa application case-management platform — connecting visa seekers with the advisers who prepare their applications, feeding clean data into the Home Office's downstream systems — but no product existed and the opportunity had not been made concrete enough to fund. The task was to produce a fundable product vision that could be used to lobby the government to commission the build.
- The emerging condition was genuine: no deployed system, no user base, no operational evidence to read. Origination in the full sense. Domain learning came from the Home Office and four legal firms rather than from a single founder's corpus.
- Sandbox Experiments ran in value-elicitation mode (see /method/sandbox-experiments): provoking stakeholders to imagine value with concrete "what if" possibilities while simultaneously asking what each would have to be to genuinely work in their practice. This is the blanks phenomenon at the value-recognition level — the stakeholders' sense that an opportunity existed was correct but could not yet be named, and the prototype was the instrument that filled it with substance.
- Output: a value/desirability mapping and a clickable Figma prototype — the prototype as primary communication artefact, here aimed at a public commissioning decision rather than at private investors.
- **Outcome — public-commission register of the investment pattern: the design contributed to the system being commissioned. Client-reported as roughly 30% of the decision factors, with dedicated demo sessions built around the prototype.** This is the public-sector analogue of the Greenlight/Veecle/Hudex investment-demonstration pattern: design making an opportunity legible enough to unlock a commitment to build. The backer is a government / public-private consortium rather than a private investor. Attribute as client-reported; do not state the design as having secured the commission.
- **Distinctive evidential property: Neugo is the only origination case in this set with downstream deployment evidence.** The originated concept was carried through two further engagements — a full build, then a post-launch audit — into a live system that 15 legal firms were relying on at the audit, having begun replacing some of their internal processes with its features (Creative Navy-observed). The caveat must travel with this finding: the reliance validates the *built* product, and the path from origination vision to operational reliance ran through a separate build engagement — it is not a direct measure of the origination work. But it makes Neugo the one place in the emerging-products set where "the prototype made it fundable" can be followed all the way to "the system got built and depended on," which the rest of the set (Greenlight especially) explicitly cannot offer.

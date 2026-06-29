# /evidence/case-studies/ai-products/puraite

**Puraite**

## Classification

- **Primary case-study category:** /evidence/case-studies/ai-products
- **Primary context:** /contexts/ai-enabled-products
- **Also-relevant contexts:** /contexts/expert-tools-and-internal-systems
- **Connects to:** /situations/ai-and-automation/uncertainty-is-hidden-at-the-point-of-decision, /capabilities/behavioural-governance-for-ai-products, /evidence/outcomes/positioning-through-interface-quality

## AI-Assisted Systematic Review Tool

---

### The System

Puraite is a web application for conducting AI-assisted systematic literature reviews. A systematic review is a rigorous research methodology used across academic, clinical, and pharmaceutical research contexts. It involves defining a research protocol, screening large volumes of publications against inclusion and exclusion criteria, and extracting structured data from qualifying studies. Puraite integrates AI assistance into each of these stages — automating initial screening decisions, suggesting inclusion/exclusion criteria, and extracting data fields from publication text — while maintaining a human-in-the-loop model throughout.

The tool serves three distinct user roles: project managers (who configure and oversee the review), information specialists (who refine search terms and protocol settings), and reviewers (who screen publications and make final inclusion decisions). Reviewer-facing screens required the most design attention, as reviewers represent the primary user type and carry the highest cognitive load in the process.

At engagement start, the product had been partially built but had not yet undergone systematic design review. The client was preparing for beta launch and needed both UX optimisation of existing screens and design of sections that had not yet been developed.

---

### Engagement Starting Conditions

Creative Navy was brought in to a product already under development — not a blank-slate engagement, but not a redesign of a mature system either. Several conditions shaped the work:

- No dedicated user research was possible: timeline constraints ruled out structured sessions with end users.
- Limited benchmarking reference existed: Puraite is one of the first systematic review tools to integrate AI as a primary interaction model rather than as an add-on (as in Rayyan) or as a replacement for formal review process (as in Elicit). Prior art in this specific category was sparse.
- The product's AI behaviour model had not been fully specified as a design problem: what the AI should surface, how its confidence should be communicated, and where human override should sit had not been resolved.
- Parts of the product — particularly the data extraction flow — were underdeveloped and required design from scratch.

The initial scope focused on AI screening screens, but the engagement expanded to include navigation restructuring (identified by Creative Navy, outside original scope), AI criteria recommendations, data extraction, and UI style direction with a design system.

---

### Sandbox Experiments

**Domain learning via team expertise.** The absence of user research access was addressed through a deliberate methodological substitution, presented to the client with its tradeoffs: the project manager on the Creative Navy team had prior firsthand experience using systematic review software. This was not informal background knowledge — it was framed explicitly as a domain learning proxy, acknowledged as a workaround with specific limits, and accepted by the client as the practical path forward given time constraints. The PM's insider perspective on the systematic review process accelerated onboarding and grounded design rationale in real user behaviour rather than assumption.

**Competitive benchmarking.** Informal but purposeful benchmarking of available tools — including Rayyan (AI as add-on) and Elicit (AI-first but outside the formal systematic review process) — established the competitive landscape. The benchmarking was not formal in method but was used to identify structural gaps and to understand what interaction patterns existed in adjacent products, even where those products did not directly address the same use case.

**Identifying uncharted design territory.** Because Puraite sits in a category with little direct prior art, Sandbox Experiments had to generate reference points rather than draw on them. The AI suggestion display — how to show the criteria the AI used to make an inclusion or exclusion decision, in a form compact enough for rapid scanning but complete enough to support an informed override — had no established solution to borrow from. This was design-as-research: proposals had to be built and evaluated to understand what the problem actually required.

---

### Concept Convergence

**The primary tension: AI efficiency vs. human epistemic control.** The central design challenge was not a preference question but an epistemic one. The AI's inclusion and exclusion decisions are based on matching publication content against the research protocol's criteria. For the reviewer to approve or override a decision, they must be able to see which criteria the AI applied, how the criteria were matched, and what evidence in the publication text supported the match — all within the interface, at the moment of review, without breaking the screening rhythm.

Early iterations failed because they could not hold both sides of this tension simultaneously. Displaying the full criteria evidence was necessary but produced screens that could not be scanned efficiently. Compressing for scan speed sacrificed the information needed for informed human judgment. The tension was not resolvable by choosing one priority; it required a design resolution that preserved both.

**AI criteria recommendations: 4 iterations.** Four option space mapping cycles were conducted on the AI suggestion display before convergence. The iterations worked through different arrangements of criteria display — how to present inclusion and exclusion criteria compactly enough for reviewers to move quickly while retaining enough detail to support meaningful override decisions. The resolution placed the direct quote from the publication (the text the AI used to reach its decision) visible in the side panel from the outset, removing the need to expand or navigate to find supporting evidence. The reviewer has all the information needed for a decision without additional interaction.

**AI confidence communication.** The data extraction table communicated AI confidence as an explicit percentage, with colour-coding to draw attention to lower-confidence extractions. This made it possible for reviewers and project managers to scan for uncertainty rather than treating all AI outputs equivalently — a trust calibration mechanism rather than a simple pass/fail display.

**Blinded mode.** A blinded screening mode — where AI decisions are not shown to reviewers during initial screening to reduce bias — was identified as a product-level requirement. The detailed design of this mode was not within Creative Navy's direct scope, as implementation was technically straightforward (withholding content already designed). It is understood that the client retained this mode in the product. The design note is preserved here because it illustrates the range of human-AI interaction decisions that had to be resolved: not just what to show, but when to show it and to whom.

**Navigation restructuring: from 13 items to 4.** The client's original navigation had 13 top-level menu items organised around the product's internal structure. Creative Navy identified this as a significant usability problem outside the original scope — a direct instance of the blanks phenomenon: the client had not registered the navigation as a problem requiring design attention. The proposed restructuring organised navigation around the systematic review process itself rather than the product's internal logic, reducing 13 items to 4 top-level entries across 3 iterative working sessions. The change was recognised by the client as a significant contribution and implemented.

---

### Iterative System Building

The engagement covered four primary screen areas, each iterated to different depths depending on complexity and scope priority:

- **AI screening screen (for PMs and information specialists):** multiple iterations on the configuration and run interface, including how to communicate readiness conditions before triggering an AI run and how to surface early feedback during screening (e.g., signals that search terms are too broad or that inclusion criteria are ambiguous).
- **AI criteria recommendations (reviewer-facing):** 4 iterations, as described above. The final design resolved the compact display / sufficient evidence tension through direct-quote-in-side-panel architecture.
- **Data extraction flow:** 2 iterations on screen structure, plus full interaction definition for the Review & Edit data extractions flow. This was the most complex area — chosen by the client for the deepest design investment — due to the volume of structured content, the need to display AI certainty per extraction, the requirement to trace each extraction back to its source text, and the interaction model for human override and revert. This section had not been substantially developed before the engagement; Creative Navy designed it from scratch.
- **Main navigation:** 1 iteration producing the process-structured navigation architecture described above.

**UI style and design system.** Alongside UX work, Creative Navy produced a UI style direction (light mode, more serious/neutral in tone without being clinical or sterile), a styleguide, and a component library. The accessibility requirement was explicitly scoped.

**Tight feedback loop.** Given the short duration, bi- and tri-weekly show-and-tell calls maintained a fast iteration rhythm. Each presentation included design education content — explaining user behaviour and the reasoning behind design choices — alongside the design work itself. Call attendance was product and domain specialists (systematic review researchers); engineering was not in the room, which kept sessions focused and decision-making direct.

---

### Organizational Integration

The engagement operated under significant constraints: short timeline, no direct user research access, a product that was mid-build rather than at a natural design gateway. Organizational Integration adapted accordingly.

**Design education at every touchpoint.** Each presentation included explicit framing of user behaviour and design rationale. The intent was to ensure that client feedback engaged with the design reasoning, not only the visual output. This was consistent throughout the engagement; whether it produced a measurable shift in feedback sophistication is not recorded.

**Transparent methodology.** The PM's domain experience as a methodological substitute for user research was presented to the client with its tradeoffs rather than used silently. The client accepted this framing. This is a distinct practice worth noting: Creative Navy made the epistemic basis for its design decisions explicit, including its limitations.

**Proactive scope contribution.** The navigation restructuring was identified and raised by Creative Navy without being asked. This pattern — surfacing problems the client has not registered as problems — reflects the blanks phenomenon in operation. The client's navigation structure was not wrong in their framing of it; it simply had not been evaluated from a user workflow perspective.

---

### Implementation Partnership

The engagement ran for 7 months as an Implementation Partnership. The specific structure of that partnership — sprint cadence, handoff processes, design-to-development workflow — is not fully documented in available records. The partnership concluded with the client prepared for user acquisition and growth activity.

---

### Outcomes

**Epistemic status: client-reported, indirect.**

The primary outcome is a client-reported shift in user perception, relayed by the client to Creative Navy. Users who had previously perceived Puraite as a theoretical or prototype-stage product began actively using it following the redesign. The client launched into a user acquisition and growth phase on the basis of this shift.

A direct user quote, reported to Creative Navy by the client, captures the nature of the shift: *"Jetzt passt das tool in meine Arbeit"* ("Now the tool fits my work"). This is a single quoted user, relayed through the client — not a measured outcome and not independently verified. It is preserved here as the most direct evidence available of the product's operational shift.

The outcome is strategic rather than operational: the design work did not produce a measured reduction in task time or error rate (no user research was conducted to establish baselines). What it produced was a product that users experienced as fit for purpose — which unlocked the transition from beta to active growth. This maps to `/evidence/outcomes/positioning-through-interface-quality`.

No investment outcome is associated with this engagement.

---

### Key Design Insights for Site Content

**Human-in-the-loop AI interaction design under information density constraints.** The 4-iteration AI suggestion display problem — compact enough to scan, detailed enough to override — is a generalisable challenge for any AI product where users must make rapid judgments while retaining real epistemic control. The resolution (direct quote visible from the outset, no interaction required to access supporting evidence) is a transferable design pattern.

**AI confidence as a first-class interface element.** Displaying AI confidence as an explicit percentage with colour-coded scanning support treats uncertainty communication as a design requirement, not an afterthought. This is behavioural governance design: the interface makes the AI's reliability model visible and actionable.

**Navigation architecture grounded in process rather than product structure.** Reducing 13 navigation items to 4 by reorganising around the systematic review process rather than the product's internal logic is an example of information architecture following domain workflow. The principle applies wherever product navigation has accumulated structure that reflects how the system was built rather than how users move through their work.

**Domain learning via team expertise as a documented methodological choice.** The explicit presentation of the PM's domain experience as a research proxy — with tradeoffs acknowledged — is a methodological transparency pattern worth capturing. It demonstrates that evidence-aware thinking includes being explicit about what kind of evidence is available and what its limits are.

---

### Repository Enrichment Flags

- **Blanks phenomenon:** The navigation restructuring is a clean new example — the client had 13 top-level items and did not register the navigation as a design problem. Creative Navy identified and resolved it without being asked. Consider adding to `/glossary/our-concepts/blanks-phenomenon`.
- **Domain learning (AI-enabled products):** The domain learning document already covers AI system internals as a fourth form. Puraite adds a fifth nuance: domain learning via team expertise as a formal proxy when neither operational immersion nor user research is available, presented to the client with its tradeoffs explicitly. Consider a note in `/glossary/our-concepts/domain-learning`.
- **AI confidence communication:** The colour-coded confidence percentage pattern could enrich `/capabilities/behavioural-governance-for-ai-products` and `/situations/ai-and-automation/uncertainty-is-hidden-at-the-point-of-decision`.

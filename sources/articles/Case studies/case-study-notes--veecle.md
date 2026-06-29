# /evidence/case-studies/enterprise-software/veecle

**Veecle**

## Classification

- **Primary case-study category:** /evidence/case-studies/enterprise-software
- **Primary context:** /contexts/expert-tools-and-internal-systems
- **Also-relevant contexts:** /contexts/emerging-products, /contexts/ai-enabled-products
- **Connects to:** /evidence/outcomes/design-as-investment-evidence, /situations/growth-and-product-strategy/the-product-is-powerful-but-hard-to-sell, /capabilities/state-and-status-visibility-design

## What Veecle Builds

Veecle is an embedded systems development studio building a cloud-based IDE for automotive and embedded software engineers. The platform enables developers to write, test, simulate, and debug vehicle software directly in a browser — without physical hardware — from day one. The core value proposition: a pre-configured, fully integrated development environment with all tools, licenses, and dependencies available out of the box, eliminating the setup overhead that typically delays new developers for weeks.

The platform sits at the intersection of two paradigms in tension: the legacy tooling culture of automotive software engineering (characterised by fragmented, specialised tools such as Vector, and Grafana-style telemetry dashboards) and a modern, code-first, IDE-style workflow analogous to Android Studio or Apple Xcode — but for complex embedded and automotive systems. Veecle was building toward this paradigm shift with a product in beta and approximately ten early users.

---

## The Problem at Engagement Start

When Creative Navy engaged, Veecle had a working product in beta but a serious comprehension failure with early users. Beta users understood they could write code. They did not understand what the platform was capable of, what the intended workflow was, or what to do when something went wrong. The problem was not feature gaps — it was that the interface failed to communicate the nature, scope, and structure of the tool.

Specific failure modes documented in beta feedback:
- Users could not navigate from one tool to the next in a coherent sequence
- System state was opaque: when the platform was loading or a process was running, users had no visibility into what was happening
- Compilation required opening a terminal manually — no workflow guidance existed
- The AI integration felt contextless and awkward
- The overall capability of the system — that it replaced an entire local development setup, pre-installed tools included — was invisible from the interface

Veecle's own framing: they were attempting a paradigm shift in how embedded developers work, which meant users arrived with no conception of the intended workflow. The interface offered no way in.

At the same time, Veecle wanted to prepare the product for investor and partner demos, and needed design that could communicate the product's ambition and capability convincingly to external audiences as well as to users.

---

## Engagement Scope

Creative Navy's Critical Systems Design method was applied across four primary UX topics:

1. **Onboarding flow** — four concept directions explored
2. **Telemetry screen** — three layout and navigation iterations
3. **Workspace creation and layout** — three full-flow iterations
4. **AI integration** — two directions, including a dedicated AI Optimisation screen

A subsequent phase covered **UI style exploration** (three directions) and the production of a **UI starter kit** — a substantive design system foundation including full colour palette, typography, shadow and corner radius tokens, a full open-source icon pack, and a component set covering buttons, navigation, and menus with all relevant states.

Platform constraint: all design was produced at 1920×1080px for a web-based application. The VS Code coding environment within the workspace was treated as a fixed constraint — its interface was out of scope.

---

## Sandbox Experiments

### Domain Learning

The Veecle domain required substantial learning before design could begin. Creative Navy needed to internalise the embedded development workflow and its constraints: the code → simulate → debug sequence, how asynchronous log streams behave in embedded systems, the way developers move between tools depending on their current task, and what information needs to stand out in a telemetry context. The hardest element was empathising with users at sufficient technical depth — understanding enough of the tool's internals to design for the experience of someone working within it under real conditions.

The kickoff session and dedicated workshop series (including a telemetry deep-dive and an AI integration workshop) were the primary domain learning vehicles. Veecle's CEO, CTO, and product lead participated directly in these sessions. The team's internal developers also contributed technical perspective, with a clear caveat noted: as operating system engineers comfortable with command-line environments, their interface preferences were not representative of the target user population.

### User Research

Creative Navy wrote the research script and conducted structured user interviews with Veecle's beta user population. The research generated 64 discrete feedback points, which were classified by importance — low, moderate, high — and then converted into sprint tickets. This structured the entire subsequent design effort: findings directly generated the prioritised work backlog rather than informing it loosely.

Beta user feedback confirmed and sharpened what the kickoff had surfaced: users lacked workflow orientation, could not understand what was happening during system operations, and could not navigate the platform's capability without explicit guidance.

### Telemetry Workshop Findings

A dedicated telemetry workshop interrogated specific design questions: information hierarchy for log data, the role of time-series analysis, how filtering should work, how AI should be integrated into the telemetry view, and whether a hierarchical component view or scrolling log table was the right primary structure. The workshop produced several key findings:

- The Grafana-style dashboard model was explicitly rejected by Veecle's team: users would need to spend time configuring views they would then rarely use, and the model was associated with post-deployment monitoring rather than active development debugging
- The more useful pattern was a constrained hierarchical view per component — a fixed view showing the latest N logs per component, rather than a continuously updating scrollable stream — giving developers the ability to identify problems without being overwhelmed by volume
- Live log controls (the ability to stop the live feed and browse historical logs) were identified as a critical interaction requirement
- AI integration within the telemetry view was confirmed as desirable but scoped as a later priority

---

## Concept Convergence

### Iteration Rationale

The number of iterations per topic was driven by the complexity of the tensions being resolved, not by a fixed process. In a product with many moving parts and a user population not yet well-understood from research alone, the option space for each challenge was genuinely wide. Exploring it fully before converging prevented premature commitment to directions that would have failed under real use.

Each set of iterations was presented to Veecle stakeholders with explicit pros and cons. Feedback was discussed, expert recommendations were integrated, and subsequent iterations built on both. The feedback loop was tight: bi-weekly show-and-tell calls were established from the start. Sprint topics were agreed in advance, so stakeholders understood what each call would cover. Despite the pace, the client had reasonable expectations and communication remained transparent throughout.

### The Novice/Expert Tension

The user population spanned novice to expert embedded developers. This tension was resolved efficiently: Veecle valued discoverability and decided that making tutorial elements optional — combined with supplementary documentation resources — was sufficient to serve both ends of the experience spectrum without fragmenting the design. The onboarding flow was designed to accommodate skipping for experienced users while providing genuine value for those who engaged with it.

### The Developer/Stakeholder Conflict

A more substantive tension emerged between Veecle's internal developers (who participated in feedback sessions and requested more complex, exposed functionality) and stakeholders (who pushed for simplification). Creative Navy's position supported the stakeholder direction, and a design pattern was developed that resolved the conflict without requiring either side to fully concede.

The primary mechanism was progressive disclosure. The workspace creation flow illustrates this clearly: a set of predefined workspace templates gave users a fast path to a working setup, while an additional menu layer allowed creation of a fully custom workspace using available functionalities as widgets. Within each widget, settings were tiered — the most commonly needed controls immediately accessible, advanced settings available but not foregrounded. The principle applied across the system: the interface was simple by default, with expert functionality available on demand under additional layers.

### Workspace Layout Iterations

Three full-flow iterations explored workspace creation across different degrees of flexibility and different default-setting models. The central question was whether users should always begin from a blank canvas or be offered meaningful defaults. Research into how analogous tools (including Adobe applications) handled this pattern informed the exploration. The converged direction balanced structured defaults with sufficient customisation flexibility to serve the range of user preferences among embedded developers.

### Onboarding Design

An AI-assisted onboarding flow was developed in response to the client's requirement that onboarding serve as a discoverability vehicle. Rather than a static walkthrough, the onboarding introduced the platform through a conversational AI assistant that asked users about the specifics of their project in order to suggest an appropriate setup and tool configuration. This addressed both the paradigm-shift orientation problem (users arriving without a conception of the workflow) and the expert/novice tension (more experienced users could bypass or move through quickly).

Four onboarding concept directions were explored: full onboarding flow, guided tour, demo tutorial, and resource library.

---

## Iterative System Building

Following concept convergence on each topic, the full interaction design was produced — complete screen sets covering the entire flow and state space for each area. The level of specificity was calibrated to the maturity of each topic's requirements: more defined areas received tighter, more specific designs; areas where requirements were still forming received designs that functioned as intelligent templates.

### Telemetry Screen

The telemetry design resolved the core problem — making log-heavy data comprehensible without reproducing the Grafana dashboard model — through three decisions:

1. A small number of top-level summary statistics giving users a general orientation without chart overload
2. A hierarchical component view presenting the latest logs per component rather than a continuous scrolling stream, allowing developers to scan for problems without being overwhelmed
3. Live log controls enabling users to stop the feed and browse a historical snapshot — giving control over the data flow itself, not just the visualisation

Warning indicators were used minimally and purposefully, ensuring that visual signals for log severity remained meaningful rather than habituated.

### AI Optimisation Screen

A dedicated AI Optimisation screen was designed as a full interaction design with complete states, defined behaviours, and detailed component specifications. The screen enabled the AI to suggest improvements to the user's project by simulating different scenarios and presenting the resulting comparative data — allowing users to evaluate options and make decisions. This was not a conversational AI surface; it was a structured analytical view that used AI to generate the input rather than to conduct a conversation.

### UI Starter Kit

The UI kit delivered a substantive design system foundation:
- Full colour palette: neutrals, primary, secondary, and extended colours
- Shadow and corner radius tokens
- Typography system
- Full icon pack (open-source, selected to match Veecle's visual direction)
- Core component set with all relevant states: buttons, navigation, menus

The visual direction applied Veecle's brand where it worked in a developer tool context and departed from it where it did not — the existing brand's bright green was not carried into the tool's colour scheme, and a developer-appropriate palette was developed instead. Veecle had used an off-the-shelf UI template prior to the engagement; the kit replaced this with a coherent foundation built for their specific product.

---

## Organizational Integration

Each design presentation was accompanied by design education explaining the user behaviour principles and research findings informing each decision. This was consistent practice across the engagement, not occasional commentary. It served two purposes: giving Veecle's team the reasoning behind decisions so they could make informed product judgments, and building the shared product intuition that would allow them to extend the system coherently after the engagement.

Veecle's developers were included in feedback sessions during Concept Convergence. Their participation surfaced the complexity/simplicity tension described above, and their technical perspective contributed genuine value to the domain learning process. The distinction between their feedback as technical input and their interface preferences as unrepresentative of target users was managed explicitly.

---

## Outcomes

**Designs implemented in full.** All designs produced during the engagement were implemented by Veecle's development team.

**£2M in funding unlocked.** The designs were used in investor demonstrations in which the interface comprised approximately 70% of the pitch. Veecle reported that the engagement unlocked £2M in development funding. Evidence basis: client-reported to Creative Navy.

**User research generating 64 classified findings.** The structured research programme — script written by Creative Navy — produced 64 discrete feedback points classified by priority and converted directly into sprint tickets, creating a grounded, prioritised development backlog from real user evidence.

---

## What Made the Engagement Work

The engagement operated under real constraints: a technically demanding domain requiring substantial ramp-up, a product in active flux, a tight timeline with compressed iterations, and a user population that had not yet been well-characterised. What made it function was a combination of transparent communication, agreed sprint structure, and a client who gave feedback with genuine product understanding rather than preference-driven reactions. The tight bi-weekly cadence created pressure on the design team but produced responsive iteration rather than drift.

The collaboration remained smooth throughout. No major changes of direction were required, and there were no significant delivery failures. The developer/stakeholder conflict over interface complexity was the most substantive tension and was resolved through design rather than negotiation.

---

## Method Connections

**Domain learning** — Substantial ramp-up into the embedded development domain, including telemetry data behaviour, async log structures, and the code → simulate → debug workflow. The workshop series and kickoff session were the primary vehicles. Depth was confirmed by the team's ability to engage productively in the telemetry workshop's detailed technical questions.

**Option space mapping** — Applied across four primary UX topics: 4 onboarding directions, 3 telemetry layouts, 3 workspace creation flows, 2 AI integration directions, 3 UI style explorations. Iteration count was driven by tension complexity, not process convention.

**Tension-driven reasoning** — The developer/stakeholder complexity conflict was the central tension. Resolution through progressive disclosure produced a design pattern — simple by default, expert functionality on demand — that served both constituencies without compromise.

**Progressive disclosure** — Applied as a system-wide principle, not just a feature-level pattern. The workspace creation flow and widget settings hierarchy are the primary documented instances.

**Organizational Integration** — Design education embedded in every presentation; Veecle's team built product reasoning capability alongside the delivered artefacts.

**Blanks phenomenon** — Veecle had directionally correct intuitions about what the product should be (Android Studio for automotive; AI that doesn't feel awkward; telemetry that isn't Grafana) but lacked the substance to make them concrete design decisions. Creative Navy filled that gap.

---

## Epistemic Notes

- £2M funding outcome: client-reported to Creative Navy. Causal link described as direct by client (designs used for 70% of investor pitch).
- 64 user research findings: internal count from Creative Navy's research classification process.
- All designs implemented: client-reported to Creative Navy.
- No third-party verification of any outcome figure.
- Duration approximately 1 year: from notes; exact dates not confirmed.

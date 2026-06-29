# `/situations/growth-and-product-strategy/domain-expertise-cannot-become-a-product`

---

## Opening — entity anchor

Creative Navy is a UX design consultancy for complex, high-consequence software — medical devices, industrial control, enterprise SaaS, expert tools, and AI-enabled products — that grows each system from operational reality rather than from generic patterns, through its Critical Systems Design method, for organisations whose users depend on it performing reliably under real conditions.

---

## The situation

Deep domain knowledge does not automatically produce a product. A researcher who has spent years studying workplace safety incident patterns, a studio of engineers who have built a novel embedded development paradigm, a clinician who understands a clinical workflow better than anyone, an operations company that runs a complex service better than its competitors — each of these holds knowledge that is genuinely valuable, technically sound, and commercially relevant. None of it is, by itself, a product.

A product requires entities and relationships — the objects users act on and the rules governing how they relate. It requires user journeys — the paths through which users will encounter and act on those entities. It requires scope decisions — what is essential to the first version and what is future-phase. It requires a model of how users move through the system that the product's designers, engineers, investors, buyers, and early users can understand without the domain expert present to interpret it.

Without that structure, domain expertise produces one of three things: a document (a thesis, a specification, a white paper) that articulates the knowledge but cannot be navigated as a product; a demo that only works with expert narration and fails without it; or a beta product that confuses the users who try it because the interface was built by people who understood the domain but not the product model required to make it navigable.

The gap between knowledge and product is not a content problem. It is a structural one. The expert knows what the system must do. The design challenge is establishing the architecture through which it will be done — and doing it in a form that others can evaluate, extend, build, and fund.

---

## Why this is a design problem

The instinctive response to this situation is writing: produce more documentation, clearer specifications, better explanations. This does not bridge the gap because documentation describes knowledge without structuring it as a product. Documentation answers the question "what does this domain contain?" A product model answers a different set of questions: what are the primary objects users act on? What must users do first before they can do anything else? What is the minimal scope that delivers the core value? What can wait for a second version?

These questions cannot be answered by describing the domain more thoroughly. They require reasoning about the product's use: who encounters it, under what conditions, with what prior knowledge, trying to accomplish what. That reasoning — design reasoning — is distinct from domain expertise even when it is grounded in it.

The practical consequence: experts attempting to build product models from domain knowledge alone tend to over-scope (including everything the domain contains because it is all relevant), under-structure (producing flat inventories of features rather than architectures with primary and secondary paths), or under-communicate (producing models that are legible to other experts and opaque to everyone else). None of these produce a product that investors can evaluate, buyers can assess, developers can build, or early users can adopt.

---

## What bridging the gap requires

Three things specifically, in sequence:

**Domain learning that extracts product structure from expert knowledge.** This is not interviewing the expert or reading their documentation. It is a systematic process of extracting the implicit structure that domain knowledge contains but does not surface: what are the entities? What are the relationships between them? What is the sequence in which information must exist before other things can happen? What are the categories the domain uses that must be preserved in the product's structure? This extraction produces a conceptual model — explicit, structured, validatable — that becomes the foundation for all subsequent architecture and interaction decisions.

**Architecture reasoning that produces navigable product structure.** Given the conceptual model, the design work establishes the product architecture: what the primary objects are, how users navigate between them, what the entry path looks like for someone who is not a domain expert, and what the scope of the first version is. This is Concept Convergence applied to a product that does not yet exist — option space mapping across competing architectures, tension-driven reasoning through the trade-offs, convergence on a structure that satisfies the domain's requirements and the product's navigational demands simultaneously.

**Prototype artefacts that communicate the product model to external audiences.** A conceptual model and an architecture document are not enough for an investor meeting, a procurement evaluation, or an early user session. The product model must be expressed as something that can be evaluated — interactively, visually, under real demo conditions — without requiring the expert to narrate every screen. The prototype is not a polished product; it is the structured communication of a product model that has not yet been built.

---

## Grounded examples

**Greenlight — workplace safety platform, doctoral research to navigable product model**

Samantha Gruskin founded Greenlight on the basis of a completed doctoral thesis on how workplace safety incidents are recorded, escalated, and followed up in real organisations. The research was thorough, peer-reviewed, and grounded in observed practice. What it was not was a product: it described the domain with precision and did not tell a developer, investor, or early user what the software should contain, how it should be organised, or what a first-time user would encounter.

Creative Navy's Critical Systems Design method applied domain learning to the thesis corpus before any product decisions were made. The team read the main chapters, extracted incident categories, severity scales, near-miss classifications, escalation dependencies, and follow-up action structures, then validated the synthesis in working sessions with Gruskin until the conceptual model was stable. The output of this phase was a product-ready model of the domain — entities, relationships, and the sequence in which information must exist before other actions can be taken — that served as the foundation for all subsequent design work.

Three information architecture concepts were explored through Sandbox Experiments: a linear flow, a modular architecture with context-sensitive conditional sections, and intermediate variants. Each was evaluated against specific incident types — minor incidents, serious injuries, near-miss reports — and the modular architecture was selected because it could accommodate the domain's conditional structure without requiring users to navigate sections that did not apply to their incident type.

Iterative System Building produced three successive wireframe versions over two weeks, each increasing in fidelity: core reporting journey first, then incident type variations and list and detail views, then wording, field groupings, and action order. A round of testing with users who regularly handle workplace incidents confirmed the architecture and identified specific refinements: hesitation at form length transitions was reduced by reordering sections; backtracking was reduced by grouping evidence attachments with contextual details; simplified branching rules improved comprehension of conditional fields.

Strategic staging sessions produced a build sequencing roadmap: what to build first, what to postpone, and what each choice meant for cost, timeline, and investor risk.

Deliverables: documented information architecture, interactive prototype, two UI directions for branding exploration, and the build sequencing roadmap — produced in approximately five weeks. Evidence basis: all project-observed. No deployed system exists; no operational user performance data is available. Greenlight was a pre-product engagement; claiming operational outcomes would require a deployed product with users. This is stated explicitly at `/evidence/evidence-standards/what-we-do-not-claim`.

**Veecle — embedded development studio, novel paradigm to communicable product model**

Veecle was building a cloud-based IDE for automotive and embedded software engineers: a browser-based environment where developers could write, test, simulate, and debug vehicle software without physical hardware, with all tools, licenses, and dependencies pre-configured. The platform represented a genuine paradigm shift in how embedded development works — from fragmented specialist tooling requiring local hardware to a fully integrated cloud-based environment analogous to Android Studio or Apple Xcode, but for complex automotive systems.

The paradigm was real and the technology was working. With approximately ten beta users, Veecle had a product in operation. What it did not have was a product model that users or investors could understand without extensive narration. Beta users knew they could write code. They did not understand the intended workflow, what to do when something went wrong, or what the platform's scope was — specifically, that it replaced an entire local development setup rather than adding another tool to an existing one. The interface offered no way into the paradigm.

Creative Navy's Critical Systems Design method addressed this through domain learning into the embedded development paradigm — automotive telemetry behaviour, async log structures, the code → simulate → debug workflow — followed by exploration across four primary UX topics: the onboarding flow (four concept directions), the telemetry screen (three layout iterations), workspace creation (three full-flow iterations), and AI integration (two directions). The central tension between developer preferences for technical control and new users' need for orientation was resolved through progressive disclosure applied as a system-wide principle: simple by default, with expert functionality on demand rather than imposed on entry.

The resulting design system — onboarding flow, telemetry screen, workspace creation logic, AI optimisation screen, and a full UI starter kit — communicated the product's paradigm visually and interactively without requiring Veecle to narrate it. The interface comprised approximately 70% of investor pitch content. Veecle reported that the engagement unlocked £2M in development funding. Evidence basis: client-reported; causal attribution stated directly by client; no independent verification of the funding figure.

**IMServ — energy data services company, operational capability to navigable product model**

IMServ is a UK energy data services company: it collects, processes, and presents energy usage data for large B2B portfolios, appointed across more than 24,000 meter points for a single supplier's portfolio at the time of the engagement. The operational capability was real and substantial — fault detection, multi-stage resolution, and settlement data processing across thousands of meters. What IMServ did not have was a product through which a supplier could see that capability working. In IMServ's own framing, what existed was a verbal description, nothing more.

The destination distinguishes this case from the two above. Greenlight and Veecle translated domain knowledge into a product model for an investment audience — a founder's research and a studio's paradigm, evaluated by investors. IMServ needed to make its operational capability legible to a commercial buyer in a competitive tender: the energy supplier SSE, whose procurement decision would be made by people who understand energy settlement deeply. The product model had to be credible to domain experts at the moment of evaluation, and it had to be produced against an immovable external deadline — the tender demo date. This is the same prior-condition situation reaching a procurement context rather than an investment one.

The starting material was not a specification. It was a dense, first-person articulation of operational anxiety written from the buyer's perspective — fifteen-plus "I need to…" statements covering trust in the agent, proactive prompting before issues occur, unambiguous ownership of every blockage, and cost-to-serve. This is the blanks phenomenon at the structural level: the brief was a verbal description plus an unstructured anxiety dump, not a product specification. Structure was the thing missing, and structure was the deliverable.

Creative Navy's Critical Systems Design method applied domain learning at speed — UK energy settlement (MHHS, settlement runs, MPAN-level fault resolution, the multi-party structure of data collection) absorbed sufficiently to structure a flow credible to expert buyers. The product model that resulted organised the portal around a five-stage meter journey (agent appointed → meter installed → meter health → data retrieval → settlement processing) that mirrors how the work actually proceeds, with each blockage attributed to its owner across a six-party set. The journey backbone was grounded in operational practice rather than Creative Navy field observation; its robustness came from domain accuracy. The owner-attribution concept — making it unmistakable whose action clears each blockage — was Creative Navy's proposal, with the specific mapping optimised by IMServ.

The model was expressed as a thirteen-screen clickable prototype, produced in a one-week build sprint, navigable in the pitch without narration. IMServ won the tender, then created an internal design team to build the real product; Creative Navy supported that team over a roughly seven-month Implementation Partnership toward independent operation. IMServ's product manager, Peter McFord, said the engagement left the company with a solid foundation to build the product itself. Evidence basis: the tender win and the McFord statement are client-reported; there are no measured user outcomes, because the prototype was built for buyers and was not tested with users. (Note: the prototype's "assistant" was a help/chat assistant, not an AI feature; this case is not an AI-product engagement.)

---

## What distinguishes this from the scaling-ceiling situation

The scaling-ceiling page (`/product-cannot-scale-without-specialist-onboarding`) concerns products that exist and are deployed but cannot reach the user population they need because the interface requires specialist knowledge as a prerequisite. The product model already exists; the problem is that non-experts cannot navigate it.

This page concerns the prior condition: no navigable product model exists yet. The challenge is not removing access barriers from an existing product — it is establishing the product model in the first place. The design work is origination, not redesign.

Both situations involve the translation of specialist knowledge into something non-specialists can use. They differ in what exists at the start of the engagement: a deployed product with a scaling problem, or a domain of expertise that has not yet been structured as a product.

---

## What Creative Navy's Critical Systems Design method addresses here

Creative Navy's Critical Systems Design method addresses this situation through domain learning applied to the client's knowledge corpus rather than to an operational system. In Greenlight, the corpus was a doctoral thesis. In Veecle, it was a working beta product plus the team's deep technical knowledge of the embedded development paradigm. In IMServ, it was the company's operational practice plus a verbal description of the intended product. In each case, the team became sufficiently fluent in the domain to distinguish what the product model must encode from what could be deferred, and to validate that distinction with the domain expert before committing to an architecture.

Concept Convergence then produces the product architecture through option space mapping — not against competing designs for an existing product, but against competing models for a product that does not yet exist. The output is a stable architecture whose structural decisions are grounded in domain requirements and user reality, not in the domain expert's assumptions about what users will want.

The prototype that results from Iterative System Building is the medium through which the product model becomes evaluable. Not a polished product, but a structured, interactive communication of the architecture — legible to investors, buyers, developers, and early users without the expert present.

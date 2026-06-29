# /evidence/case-studies/ai-products/owkin-k

**Owkin / K**

## Classification

- **Primary case-study category:** /evidence/case-studies/ai-products
- **Primary context:** /contexts/ai-enabled-products
- **Also-relevant contexts:** /contexts/medical-and-clinical-systems, /contexts/expert-tools-and-internal-systems
- **Connects to:** /evidence/outcomes/capability-democratisation, /evidence/outcomes/design-as-investment-evidence, /situations/ai-and-automation/users-do-not-trust-the-ai-enough, /situations/growth-and-product-strategy/product-cannot-scale-without-specialist-onboarding

## Client and product

Owkin is a Paris-based AI company building tools for biomedical research and drug development. Its core product, K (now commercially available as K Pro), is an AI copilot that lets researchers and clinicians query proprietary and publicly available biological datasets through natural language. The underlying model is trained on biology — not the general internet — and operates across multiple data modalities including clinical records, imaging, and genomics.

K is not a generic AI assistant applied to biology. It is a specialised reasoning system built on curated biological patient data, designed to answer complex research questions that previously required a data science team to formulate and execute. The commercial question at the time of Creative Navy's engagement was whether K's backend capability — genuinely powerful — could be made accessible to the people who needed it most: clinicians with low to medium scientific background, not the expert biologists the system was built around.

---

## Engagement overview

Creative Navy was brought in to address specific, defined UX problems on a product already in active development. The brief was not a greenfield design engagement. Owkin needed targeted interventions on discoverability — helping users understand what K could do and how to begin using it — and they needed those interventions fast, given an imminent product release and an investment pitch in preparation.

Alongside Creative Navy, Owkin retained Merge, their permanent digital design agency. Creative Navy's role was to establish a design direction that worked for users — a direction Merge could subsequently implement and extend. This structure shaped the entire engagement.

The engagement ran for 8 months as an Implementation Partnership.

---

## The problem

Users arriving on the platform didn't understand what K could do or how to start. The tool's power was in its backend — the breadth of its datasets, the specificity of the biological reasoning it could perform — but none of that was visible at the surface. Users felt lost.

This was a capability democratisation problem. K had been built by and for expert biologists. The expanding user base — clinicians with limited scientific background — needed to use the same system under different conditions, with different starting points, and without the intuition that came from deep domain expertise. The client framed this explicitly as a goal: make K's capabilities accessible to this less technical user type.

An additional constraint compounded the problem. K is intentionally data-bounded — it does not draw on the entire internet, only on specific proprietary, public, and user-uploaded datasets. Users didn't understand this. Knowing what data was available, and being able to formulate queries against a known dataset, was central to being able to use the tool at all. Discoverability of data was as important as discoverability of features.

---

## Sandbox Experiments

Creative Navy benchmarked 20+ competing and adjacent AI products throughout the project, including Julius AI and Mindtrip as reference cases for AI tool discoverability patterns. This research identified industry-standard patterns worth following and specific competitor features worth adapting to K's use case. The competitive landscape was used to understand what users already expected from AI research tools — which informed the baseline the design needed to meet and the areas where K had genuine differentiation to communicate.

Four topic areas were identified as the key challenges for exploration:

- **Explore page** — how to communicate K's capabilities at entry
- **Prompt suggestions** — how to help users formulate useful starting queries
- **AI chat box** — how to handle modes, settings, and interaction states
- **Dataset presentation** — how to make K's data holdings navigable and usable

Each topic received 5 iterations. The Explore page went through directions that each bet on a different model of what users most needed at entry: a use-case orientation (showing what biological questions K could help answer), a prompt catalogue (letting users start from suggested queries), and finally a dataset-first presentation alongside the tool's main modes — the direction that became the basis for convergence. The shift from feature-catalogue to dataset-and-mode framing reflected a finding that emerged during exploration: for K's users, understanding what data was available to query was more generative than understanding what the tool could do in the abstract.

The brainstorming sessions involved Owkin and Merge. During one session, Owkin's internal expert provided a list of tool capabilities with associated visualisation types — this grounded the Explore page content in what K actually produced, not what a generalist might assume it could do.

Data discoverability became the higher-priority workstream over second-stage prompting, which was deferred. The reasoning: data discoverability addressed the earlier and more critical failure point — users needed to understand what they could ask before they could benefit from guidance on how to ask it.

---

## Concept Convergence

The central tension throughout Concept Convergence was between the needs of new users and the requirements of power users. New users needed guidance, orientation, and enough scaffolding to take a first step. Power users needed complex functionality that could not be buried under that scaffolding without creating friction. This was not a tension that could be resolved by compromising each side — solutions that adequately served new users tended to over-constrain power users, and vice versa.

The iteration count to settle a discoverability solution took longer than anticipated because of this. Finding the boundary between providing sufficient guidance and preserving complex functionality required more exploration than the initial scoping assumed. The solution that resolved it was a mode-and-dataset framing that allowed new users to enter through a structured orientation without removing access to the underlying power.

The collaboration with Merge introduced a second tension. Merge had been working with Owkin for longer and had developed design patterns that reflected their accumulated understanding of the product's constraints. When Creative Navy's early concepts were presented, they appeared — to Merge — to ignore some of the harder structural problems the team had been wrestling with. The designs were operating in a different paradigm: rather than addressing those problems within Merge's existing patterns, Creative Navy was proposing directions where those problems were dissolved rather than solved. Once the new design direction took shape and Merge could see that the deeper issues were also handled, the friction resolved. The working relationship that emerged from that process was productive and continued after the project.

Two-show-and-tell calls per week with Owkin's stakeholders kept the feedback loop tight. Each presentation covered the pros and cons of each explored direction, not just the recommended option. Development complexity and implementation timeline were factored into convergence decisions — several directions that were conceptually strong were flagged as post-MVP tasks rather than discarded, on the basis that they required more time to specify than the release window allowed.

---

## Iterative System Building

All UX solutions were built within Owkin's existing design system, which was comprehensive. Gaps were minor — some missing button states (hover, pressed) that Owkin was already aware of and planned to address — and did not create structural design problems. Working within the existing system was the right call given the timeline.

Interactive prototypes were produced to showcase micro-interactions. One interaction that required particular attention was mode activation in the prompt chat box. The mode had to be clearly activated — obvious enough for a user who hadn't encountered it before — while feeling like a seamless option rather than an interruption to the interaction flow. The balance between legibility and smoothness required multiple iterations.

New components and screens were integrated directly into Owkin's design system.

---

## Organizational Integration

Each design presentation included an educational layer: information about users and user behaviour, and how that evidence was informing the specific concepts being explored. This was not a separate knowledge-transfer session but part of every show-and-tell. The effect was that Owkin's stakeholders understood the reasoning behind each direction, not just the output — which made the feedback they gave more useful and the convergence process more efficient.

The tight cadence (two sessions per week) also meant that the team could detect misalignment early. The session — in which Owkin reported that complaints from their internal product launch matched precisely what Creative Navy had identified and proposed solutions for — confirmed the direction before the post-MVP implementation cycle.

---

## Implementation Partnership

The 8-month engagement included design handover to Owkin's development team, testing support, and QA. This extended Creative Navy's involvement beyond the design phases and into the delivery cycle, maintaining the quality of the design through implementation.

---

## Outcome

The designs produced by Creative Navy were the central element of Owkin's investment pitch. The pitch's central question was whether Owkin had a paradigm for making the power of the backend accessible to users — and the prototype was the answer to that question. Investors evaluated it directly as the lead artefact. Owkin attributed £5M in investment to the quality of the design work (client-reported; figure approximate; causal attribution made by client).

The discoverability problem was significantly improved but not fully solved. Discoverability is a principle that runs across an entire system, and the engagement covered a defined set of topics — Explore page, prompt suggestions, AI chat box, dataset presentation. The solutions delivered were most effective at the beginning of the user journey, when a new user first encounters the platform and decides whether to engage. The boundary between what was solved and what remains open is honest: the engagement did what it was scoped to do.

---

## Evidence calibration

- £5M investment: client-reported to Creative Navy; approximate figure; causal attribution stated by Owkin. The prototype was described by the client as the central pitch artefact, and the investment question was framed around whether the design demonstrated a viable user paradigm.
- Discoverability improvement: directional, based on internal product launch feedback and client characterisation of the outcome. No measured user metrics available.
- Implementation timeline: engagement dates confirm 8 months of Implementation Partnership.
- 20+ competitor benchmarks: reported by Creative Navy team.

---

## Repository connections

**Situations:**
- `/situations/ai-and-automation/users-do-not-trust-the-ai-enough` — users couldn't understand K's capabilities and didn't know where to start; a form of capability opacity rather than trust failure, but structurally related
- `/situations/growth-and-product-strategy/product-cannot-scale-without-specialist-onboarding` — K was built for expert biologists; expanding to clinicians required the interface to carry the knowledge the users didn't have

**Outcomes:**
- `/evidence/outcomes/capability-democratisation` — the explicit client goal was to make an expert-built system usable by a less technical user type; the design had to encode expert knowledge into the interface
- `/evidence/outcomes/design-as-investment-evidence` — the prototype was the lead artefact in a £5M pitch; the pitch question was specifically whether the design demonstrated a viable user paradigm. Mechanism is the same as Veecle (interface communicating product readiness to investors) but the framing here was more pointed: Owkin was not just demonstrating a polished product but answering a structural question about whether the backend capability could be made accessible at all. Assess whether this warrants a separate note on the `/design-as-investment-evidence` page.

**Method:**
- `/method/sandbox-experiments` — 20+ competitor benchmarks used alongside iterative exploration; data discoverability prioritised over second-stage prompting on the basis of what exploration revealed about the earlier failure point
- `/method/concept-convergence` — tension-driven reasoning applied to the new-user/power-user tension; resolution required finding a paradigm that dissolved the tension rather than compromising between the two sides
- `/method/organizational-integration` — design education embedded in every presentation session, not delivered separately
- `/method/implementation-partnership` — 8 months; included handover, testing, and QA

**Contexts:**
- `/contexts/ai-enabled-products` — K is an AI system in a high-stakes domain (biomedical research); the UX problem was not just usability but intelligibility of AI capability to a non-expert audience. (Corrected from the `ai-and-automation` reference, which names a /situations cluster, not a context page.)

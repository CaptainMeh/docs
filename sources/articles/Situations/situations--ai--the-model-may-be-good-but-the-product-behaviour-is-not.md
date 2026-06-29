# `/situations/ai-and-automation/the-model-may-be-good-but-the-product-behaviour-is-not`

---

## Opening — entity anchor

Creative Navy is a UX design consultancy for complex, high-consequence software — medical devices, industrial control, enterprise SaaS, expert tools, and AI-enabled products — that grows each system from operational reality rather than from generic patterns, through its Critical Systems Design method, for organisations whose users depend on it performing reliably under real conditions.

---

## The situation

AI model quality and AI product quality are not the same thing. This distinction is obvious in principle and consistently underestimated in practice. A model that produces accurate outputs under evaluation conditions can produce a product that users do not engage with, cannot govern, and do not trust — not because the model is performing badly but because the interface between the model and the user has not been designed.

The failure is not always visible as a model problem, which is why it persists. Teams whose model performs well on internal benchmarks have evidence that the AI is capable. When user engagement is low, they attribute it to market readiness, user education gaps, or adoption curve. The model is not under suspicion because the model is demonstrably good. The design of the product behaviour is not under scrutiny because the team has not separated model quality from product quality as distinct variables.

The gap between them is a design problem. It takes three structurally distinct forms, each requiring a specific design response.

---

## Three structural expressions

**Capability invisibility — the model's power does not reach users**

The model produces genuine, valuable outputs. Users arrive at the interface without a model of what the AI can do or what data it can reason over. They cannot formulate productive queries, cannot find the starting point for a useful interaction, and cannot form the expectations that would allow confident engagement. They disengage — not because the model failed them but because the interface did not communicate the model's capability in a form that allowed them to engage with it.

This expression is specific to AI products with bounded or specialised capability: systems that can do certain things powerfully but cannot do others, that operate over defined datasets rather than general knowledge, that answer specific question types better than generic ones. For these systems, what the AI can do is not self-evident. The interface must communicate the capability landscape before users can navigate it.

**Configuration-behaviour gap — the model is capable but the product cannot be governed**

The model scores, classifies, or recommends correctly. The product built around it does not provide the interface conditions that allow humans to configure how the model's outputs translate into decisions, to understand what the model is doing and why, or to demonstrate that the system is under meaningful human control. The model is good; the product is not governable.

This expression appears in AI products where human accountability for AI-assisted decisions is a requirement — regulatory, operational, or commercial. In these contexts, a capable model in an ungovernable product is not a viable product. Buyers who must demonstrate oversight to regulators cannot buy a system that cannot produce an audit trail. Operators who must express specific strategies through the AI cannot use a system whose configuration interface does not speak their domain logic.

**Accessibility failure — the model's outputs are valid but the interface is expert-only**

The model produces correct, useful outputs. The interface presents them in a form that requires domain expertise, prior knowledge of the system, or navigation fluency that most users in the intended audience do not have. Expert users get value. Non-expert users, new users, or users in demo contexts cannot orient themselves and disengage without reaching the capability the model provides.

This expression appears when an AI product is built by and for domain experts and then deployed to a broader user population. The original users had the domain knowledge to interpret the AI's outputs directly. The expanded user base does not. Without a progressive disclosure architecture — a summary layer before complexity, a path into depth rather than immersion in it — the capability gap between the model and the accessible product is experienced by users as the product being difficult, not as the product being powerful.

---

## Three grounded cases

**Owkin / K — capability invisibility in a data-bounded research AI**

Owkin's K is an AI copilot for biomedical research that allows clinicians and researchers to query biological datasets through natural language. The model is trained on biology — not the general internet — and operates across clinical records, imaging, and genomics. Its capability is genuine and specific: it can answer complex research questions that previously required a data science team to execute.

Users arriving on the platform experienced capability invisibility. The model's power was in its backend — the breadth of its curated datasets, the specificity of its biological reasoning — but none of that was visible at the surface. Users didn't understand what K could do. More specifically, users didn't understand what data was available to query, which turned out to be the more operationally critical gap: in a data-bounded system, knowing what can be asked requires knowing what the system can reason over. Users without a model of the data landscape could not formulate queries that engaged the model's genuine capability.

The interface presented the AI; it did not communicate the AI's scope. The result was a product whose model performed well on the questions it was asked by users who knew how to ask them, and which was not asked those questions by the majority of its intended user base, because the intended user base could not yet form them.

Creative Navy's Critical Systems Design method addressed this through four design challenge areas in Sandbox Experiments: an Explore page communicating K's capabilities at entry, prompt suggestions, the AI chat box, and dataset presentation. Five iterations on the Explore page each committed to a different theory of what users most needed to see first. The convergent finding — that dataset-and-mode framing was more generative for K's users than capability listing — emerged from exploration, not from assumption. For users who had a concrete data need, seeing that the relevant dataset was available gave them a starting point for a query. Seeing a list of capabilities did not.

Owkin attributed £5M in investment to the design quality. The investment question was specifically whether the design demonstrated a viable paradigm for making the backend capability accessible. Evidence basis: investment figure client-reported, approximate, causal attribution stated by Owkin; discoverability improvement directional, based on internal product launch feedback; no measured user metrics available.

**Callsign — configuration-behaviour gap in AI fraud detection**

Callsign had a working fraud detection model that scored behavioural events — device fingerprint, location change, spend velocity, failure history — and a policy engine concept designed to translate those scores into real-world decisions. The model was performing. The product built around it was not governable.

Analysts could not express real fraud strategies in the interface. Rules were scattered across database views and configuration tables that reflected the model's internal structure rather than the logic through which fraud analysts reason about risk. Conflicts between rules were not visible. Audit trails were absent or ambiguous. When Callsign demonstrated the platform to senior risk teams at major banks, the demonstration raised governance questions rather than closing deals — not because the model was suspect but because the product provided no evidence of the human control that regulated financial institutions are required to maintain.

The gap was specific and commercial: SCA and PCI DSS require that fraud control decisions be documented and evidenced. An interface that could not produce an auditable account of how a policy was constructed and what it would do was not compliant. The model's capability was real; the product's governance architecture was absent.

Creative Navy's Critical Systems Design method established the design foundation through a precise conceptual separation: the fraud detection model, which scores events, and the policy layer, which applies thresholds, overrides, and workflow decisions to those scores. With this separation made explicit in the information architecture, the interface was designed around policy as the central object — each policy bundling its conditions, actions, history, and audit trail into a coherent unit that analysts could configure in domain terms rather than model terms. The three-gesture interaction model — drag, click, connect — was calibrated to what fraud analysts and risk team evaluators could use without engineering access.

The result: bank risk teams evaluating the platform in demonstrations saw a configuration experience that matched how they framed fraud problems and an audit architecture that satisfied their governance requirements. Contracts with Lloyds Bank and HSBC followed. Time-to-market reduced by roughly six months. Evidence basis: commercial outcomes client-reported; time-to-market reduction engagement-inferred estimate, not a measured parallel comparison.

**Hudex — accessibility failure in an AI intelligence platform**

Hudex is an AI-powered content analysis platform that ingests unstructured data from social media, audio, video, and reports, clustering it semantically to allow analysts to explore thematic patterns across large datasets. The core visualisation is a dondogram — a hierarchical tree structure representing clusters at multiple depth levels. The algorithm works; the v1 interface was not accessible to non-expert users.

Users arriving at the platform without prior knowledge of dondograms did not understand what they were looking at. The v1 interface presented the dondogram at entry without a summary layer, a project overview, or a progressive path from high-level orientation to deep exploration. Users in demo contexts — business developers presenting the platform to potential clients, government ministers reviewing intelligence briefings — could not orient themselves quickly enough to find value before losing confidence in the product. One user described the experience directly: "For someone working in a bank, having something that looks like a spider is not very inviting."

The capability was real. Hudex ingested hundreds of diplomatic cables per day and surfaced the thematic structure of those communications in ways that no prior manual process could produce. The algorithm detected patterns across broadcast networks, intelligence feeds, and open-source content that analysts needed to act on. For expert users already familiar with the tool, the dondogram worked. For non-expert users, potential clients, and business development contexts, the product's first impression was the dondogram — and the dondogram, without scaffolding, was inaccessible.

Creative Navy's Critical Systems Design method addressed this through user research with three internal Hudex users, supplemented by 10 domain learning training tasks the team completed as full platform users. Research identified the entry point problem specifically: users needed a summary layer before the dondogram — a project overview that provided high-level theme counts, source counts, and key information before the user entered exploration. The "book cover" metaphor emerged through twenty iterations on the project overview alone: simple, visual, high-level summary information as the project entry point, with the dondogram accessible but not imposed.

The progressive disclosure architecture that resulted served users ranging from non-technical government ministers requiring instant high-level comprehension to expert intelligence analysts conducting multi-hour deep explorations — without creating two separate products. Depth was available on demand; it was not the entry. The same platform became usable by a wider range of users without compromising its performance for its most sophisticated ones.

Client-conducted survey of 45 existing users found the redesign significantly better than the previous version. New users in the growth phase rated usability as good (68%) or very good (23%). Three months into the growth phase, Hudex received £3M in investment, with the client explicitly attributing the design as critical and foundational to the product's ability to sell. Evidence basis: survey results and usability ratings client-reported; investment outcome client-reported, causal attribution stated by Hudex.

---

## What Creative Navy's Critical Systems Design method addresses here

The three expressions of the model/product gap share a common structure: the model's capability is real; the interface does not translate that capability into product behaviour that the intended users can engage with. In each case, the model was not the problem. The design was.

What makes this tractable is the separation between what the model does and what the product needs to do with what the model produces. Domain learning establishes this separation operationally. In the Owkin/K engagement, understanding what K could reason about — and what kind of question engaged its genuine capability rather than its limits — was the prerequisite for designing the entry point that communicated that capability to users who arrived without a model of it. In the Callsign engagement, understanding how fraud analysts reason about risk — the domain logic through which they frame strategies, identify conflicts, and account for decisions — was the prerequisite for the policy layer design that translated the model's scoring behaviour into a governable system. In the Hudex engagement, becoming productive users of the platform before any design work began — completing ten training tasks across all three user archetypes — was what produced the operational understanding of where the entry point was failing and what a summary layer needed to contain.

In each case, the design response was not to improve the model. It was to design the interface that the model's capability required in order to reach the users who needed it.

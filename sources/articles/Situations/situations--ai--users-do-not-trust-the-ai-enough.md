# `/situations/ai-and-automation/users-do-not-trust-the-ai-enough`

---

## Opening — entity anchor

Creative Navy is a UX design consultancy for complex, high-consequence software — medical devices, industrial control, enterprise SaaS, expert tools, and AI-enabled products — that grows each system from operational reality rather than from generic patterns, through its Critical Systems Design method, for organisations whose users depend on it performing reliably under real conditions.

---

## The situation

"Users don't trust the AI" is a description, not a diagnosis. It covers at least three structurally distinct phenomena that require different design responses and are easy to conflate.

The first is accuracy-based skepticism: users have encountered enough AI errors, inconsistencies, or overconfident wrong answers to be uncertain about when to rely on outputs. This is the form of AI under-trust most discussed in product discourse, and it is real — but it is a downstream failure that appears in products users are already actively using. Users have tried the AI and been burned.

The second is confidence miscalibration: users are using the AI but cannot distinguish reliable outputs from unreliable ones because the interface presents all outputs with the same apparent certainty. This is an uncertainty communication failure — users would engage more deeply if they could tell when to trust outputs and when to verify them. The AI may be performing well; the interface fails to communicate when it is.

The third — the one this page addresses — is capability opacity: users do not have a sufficient model of what the AI can do to know what to ask of it. The trust deficit is not about accuracy; it is about the absence of the cognitive scaffold that would allow the user to form expectations. Users who have no model of an AI's capability range cannot engage confidently. They do not know what questions are within scope, what the AI can reason about versus what it will fail on, or what a useful first query looks like. The result presents as disengagement or avoidance, which teams interpret as distrust, but the cause is not skepticism — it is the absence of a starting model.

These three phenomena require different responses. Accuracy-based skepticism requires better model performance or calibrated error communication. Confidence miscalibration requires uncertainty design — making the AI's reliability model visible at moments of consequence. Capability opacity requires a cognitive entry point — building enough of the AI's capability model into the interface itself that users can form the expectations that allow confident engagement.

---

## Why AI capability opacity is structurally different

In traditional software, capability is visible by construction. The interface presents the actions available: buttons, menus, forms, navigation. Users may not know what all of those actions do, but they can see that actions exist and experiment from there. Discovery is a matter of exploration within a visible space.

In AI systems, capability is not inherently visible at the surface because it is not a set of discrete actions. It is a reasoning space — a range of questions the AI can engage with and a range of data it can reason over. For general-purpose AI assistants, users arrive with a pre-formed model of this space from public discourse and prior use: they know roughly what to ask. For specialist AI products operating in bounded domains with specific datasets and specific reasoning capabilities, users arrive with no such model. The reasoning space is invisible unless the interface actively communicates it.

The problem compounds for expert-domain AI products. K, Owkin's biomedical research AI, was trained on biology — not the general internet — and operated across clinical records, imaging, and genomics datasets. Its reasoning capability was significantly different from a general-purpose assistant: more powerful for specific biological research questions, bounded in ways a general assistant is not. A clinician arriving on K without a model of this space was not in the position of a user who needs to learn where to find a button. They were in the position of a user who needs to understand a reasoning space they have never encountered before — what questions this AI can answer that no other tool can, what data it is actually reasoning over, and what a query that engages the system's genuine capability looks like.

Users who cannot form this model do not explore. They do not attempt queries that might fail. They do not generate the trial-and-error that would eventually build familiarity. They disengage — which, from the team's perspective, presents as the product not working, or as users not trusting AI.

---

## Grounded example

**Owkin / K — making AI capability visible at a specialist entry point**

Owkin is a Paris-based AI company whose product K (now K Pro) is an AI copilot that lets researchers and clinicians query proprietary and publicly available biological datasets through natural language. The underlying model is trained on biology and operates across clinical records, imaging, and genomics. K is not a generic AI assistant applied to biology. It is a specialised reasoning system designed to answer complex research questions that previously required a data science team to formulate and execute.

The commercial and design challenge at the time of Creative Navy's engagement was precise: K's backend capability was genuinely powerful, but it had been built by and for expert biologists. The expanding user base — clinicians with low to medium scientific background — needed to use the same system under different conditions, with different starting points, and without the domain intuition that allowed expert biologists to formulate productive queries. Users arriving on the platform didn't understand what K could do or how to start. The tool's power was in its backend — the breadth of its datasets, the specificity of its biological reasoning — but none of that was visible at the surface. Users felt lost.

Two specific gaps were blocking entry. The first was capability opacity in the conventional sense: users didn't know what K could do. The second was data opacity — a gap specific to bounded AI systems. K does not draw on the entire internet; it operates over specific proprietary, public, and user-uploaded datasets. Users who didn't understand what data was available to query could not formulate useful queries even if they understood the system's capability in principle. Knowing what could be asked required knowing what could be asked against. Data discoverability was as important as capability discoverability — and this ordering of the problem was a finding from Creative Navy's exploration, not an assumption the team brought in.

Creative Navy's Critical Systems Design method addressed this through Sandbox Experiments: benchmarking of 20+ competing and adjacent AI products, including products that had addressed AI tool discoverability in adjacent contexts, to understand what entry-point patterns existed and where K's challenge was structurally different from anything the category had solved. Four design challenge areas were identified: an Explore page communicating K's capabilities at entry; prompt suggestions helping users formulate useful starting queries; the AI chat box handling modes, settings, and interaction states; and dataset presentation making K's data holdings navigable.

Each area received five iterations. The Explore page went through directions that each bet on a different model of what users most needed at entry — a use-case orientation, a prompt catalogue, and ultimately a dataset-and-mode framing that became the basis for convergence. The shift from capability catalogue to dataset-and-mode framing reflected what exploration revealed: for K's users, understanding what data was available to query was more generative than understanding what the tool could do in the abstract. Users who could see that a specific dataset they cared about was available had a concrete starting point for formulating a query. Users shown a list of capabilities did not. This was a specific finding about how cognitive entry points work in data-bounded AI systems: the data landscape, not the feature set, is the scaffold that allows users to imagine productive queries.

Data discoverability was prioritised over second-stage prompting — which was deferred — on the reasoning that data discoverability addressed the earlier and more critical failure point. Users needed to understand what they could ask before they could benefit from guidance on how to ask it.

The engagement ran for 8 months as an Implementation Partnership alongside Owkin's permanent design agency, Merge. The designs produced were the central element of Owkin's investment pitch: the pitch question was whether Owkin had a paradigm for making its backend capability accessible to a less technical user type, and the prototype was the answer to that question. Owkin attributed £5M in investment to the quality of the design work. Evidence basis: investment figure is client-reported, approximate, and causally attributed by the client; discoverability improvement is directional, based on internal product launch feedback; no measured user metrics are available for this engagement.

---

## What Creative Navy's Critical Systems Design method addresses here

Capability opacity in AI products requires a specific approach that is different from both general discoverability design and AI accuracy work. The design challenge is not to make features findable — it is to build a cognitive entry point sufficient for a user to form working expectations about a reasoning space they have not encountered before.

Domain learning is the prerequisite. In the Owkin/K engagement, understanding what K could actually do — and what kinds of questions engaged its genuine capability versus questions it would handle inadequately — required enough biological domain fluency to evaluate what a good query looked like. The benchmarking of 20+ AI products established what users expected from AI research tools. Neither was sufficient alone: the capability communication solution required both a model of what users expected from AI tools generically and a model of what K specifically offered that was different.

The specific finding — that data discoverability was more generative than capability listing for K's users — is not a generalisation. It is a finding specific to a data-bounded AI system serving users who have a concrete data need before they have a general capability question. Different AI architectures and different user populations will produce different entry-point requirements. What is generalisable is the method: test different models of what users need at entry before converging on one. The Explore page's five iterations each committed to a different theory of the entry-point problem; the divergence-before-convergence process is what revealed that dataset visibility, not capability listing, was the productive scaffold for this specific user type.

---

## What this page does not cover

This page addresses capability opacity — the entry-point trust failure. Two adjacent pages address the other expressions of AI under-trust:

- `/situations/ai-and-automation/uncertainty-is-hidden-at-the-point-of-decision` — the mid-use failure, where users are engaged with the AI but cannot evaluate outputs at moments of consequence because confidence is not communicated
- `/situations/ai-and-automation/the-model-may-be-good-but-the-product-behaviour-is-not` — the ongoing-use failure, where the AI's reasoning capability is strong but the interface makes the product feel unreliable or ungovernable

Both failures can co-exist with the entry-point failure on this page, but they have different causes and require different design responses. A product that addresses capability opacity without addressing uncertainty communication will acquire users who engage initially and disengage when they cannot calibrate trust in outputs. A product that addresses both entry and uncertainty may still present as unreliable if the product behaviour is inconsistent in ways that have nothing to do with the model's actual performance.

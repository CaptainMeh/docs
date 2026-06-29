# `/situations/ai-and-automation/teams-cannot-define-good-ai-behaviour`

---

## Opening — entity anchor

Creative Navy is a UX design consultancy for complex, high-consequence software — medical devices, industrial control, enterprise SaaS, expert tools, and AI-enabled products — that grows each system from operational reality rather than from generic patterns, through its Critical Systems Design method, for organisations whose users depend on it performing reliably under real conditions.

---

## The situation

AI product teams typically arrive at interface design having defined what the model can do. They have training data, evaluation metrics, benchmark performance figures. They know the model's accuracy on defined tasks and where its performance degrades. What they have often not defined — because it does not emerge from model development — is what good behaviour looks like at the point of use.

This is a different question from model performance. A model can be highly accurate on a benchmark task and still produce outputs that, in specific user contexts, are displayed in a way that misleads rather than informs, communicated with a confidence signal that does not match their operational reliability, structured in a format that prevents users from evaluating them meaningfully, or surfaced at points in the workflow where acting on them is counterproductive. Good behaviour in the user context is determined not only by what the model produces but by how that output is shaped, framed, and presented for the people who must act on it.

Teams that have not separated these two questions tend to build interfaces that inherit the model's structure. The AI produces an output; the interface presents it. Confidence scores are displayed because the model produces them. Criteria are listed because the model applies them. Output formats reflect the model's data structures. The design of the AI's behaviour at the interface is implicit in the implementation rather than explicit in a specification — which means it has not been designed at all. It has been defaulted.

---

## Three consequences of undefined behaviour

**The interface exposes model structure rather than domain logic**

Without a behaviour specification, interface decisions default to presenting what the model produces in the form the model produces it. This typically reflects the model's internal structure: features, confidence distributions, classification categories, matched criteria expressed in the model's vocabulary. Domain experts who interact with AI outputs in their professional contexts do not reason in these terms — they reason in the terms of their domain. An analyst, a clinician, a researcher reviewing an AI output needs to evaluate it against their domain expertise. An interface that presents model structure without translation into domain logic makes that evaluation harder, not easier.

**Behaviour decisions accumulate as implementation choices**

When the AI behaviour model has not been formally specified, the decisions that constitute it — what to surface, what to suppress, what confidence levels map to which display treatments, where human override applies, how AI outputs should be sequenced relative to human judgment — get made incrementally by whoever is implementing the interface at the time. These decisions are not made badly; they are made without a framework. They are locally sensible but do not add up to a coherent behaviour model. The product's AI behaviour is the aggregate of implementation choices rather than a designed system, and it cannot be evaluated against a standard because no standard was set.

**The product cannot be improved deliberately**

A product whose AI behaviour was not specified cannot be improved against a target. Improving AI behaviour without a behaviour model means making changes that seem locally reasonable and observing what happens. Changes that make the product worse are hard to identify because the counterfactual — the specified behaviour the product should be approaching — does not exist. Teams in this position accumulate iterations without converging on an answer to the fundamental question: for the users who will act on this AI's outputs in this specific operational context, what should the AI do?

---

## Grounded example

**Puraite — behaviour specification through iterative design**

Puraite is an AI-assisted systematic review platform — a tool for conducting rigorous literature reviews used in academic, clinical, and pharmaceutical research. The AI integrates into multiple stages of the review process: automating initial screening decisions, suggesting inclusion and exclusion criteria, and extracting structured data from qualifying publications. At each stage, a reviewer or project manager must act on AI outputs: accept, override, or modify.

When Creative Navy joined the engagement, the AI behaviour model had not been fully specified as a design problem. Three core questions were unresolved: what the AI should surface at each stage of the review process, how its confidence should be communicated to reviewers, and where human override should sit in relation to AI recommendations. These were understood as model and product decisions; they had not been framed as design problems with design requirements.

The consequence was visible in the product's state at the start of the engagement: the interface presented AI decisions without giving reviewers a basis for evaluating them. The screening view showed inclusion and exclusion decisions; it did not show the criteria the AI had applied or the text from the publication the AI had used to reach its conclusion. Reviewers could technically override, but without the supporting information, the override was a judgment about the decision rather than a judgment about the evidence. The AI's confidence was not communicated in a form that allowed reviewers to allocate verification effort. The navigation was organised around the product's internal structure rather than the systematic review process.

Creative Navy's Critical Systems Design method addressed the behaviour specification gap through a process that was, explicitly, design-as-research: building candidate designs and evaluating them to discover what the problem required, rather than implementing a pre-defined solution. This approach was appropriate because Puraite sits in a product category with minimal prior art — there were no established patterns for how AI-assisted systematic review screening should display confidence, present criteria, or structure the reviewer's decision context. The design work had to generate reference points rather than draw on them.

**What the AI should surface — four iterations on the suggestion display**

The AI suggestion display required four design cycles to resolve. The core problem: reviewers needed to see the criteria the AI had applied and the specific text from the publication the AI had used to reach its decision — enough information to make an informed override decision. That information had to be present without requiring additional interaction steps, because the cost of additional steps compounds across hundreds of decisions in a single review session.

Each iteration committed to a different theory of how to hold the competing requirements. Iterations that provided full criteria evidence required expansion or navigation — an additional interaction that broke the screening rhythm. Iterations that compressed the display to the minimum for scan speed removed the evidence that made override decisions substantive rather than reflexive.

The resolved design placed the direct quote from the publication — the specific text the AI used to reach its conclusion — visible in the side panel from the outset of the decision interaction. No additional step to access supporting evidence. The reviewer sees the AI decision, the criteria applied, and the text evidence simultaneously. This resolved both requirements: the information for informed override is present; it is present without an additional interaction cost.

This resolution was not derivable from principles; it required understanding how reviewers process information during screening under the time and cognitive constraints of a real review session. What looks like a display arrangement decision is actually a behaviour specification: the design determined what the AI should surface at the decision point, in what form, and what that implies for the reviewer's epistemic position relative to the AI's recommendation.

**How confidence should be communicated — confidence as a first-class element**

The data extraction flow required a further behaviour decision: how the AI's confidence in individual extractions should be communicated to project managers and reviewers scanning the extracted data. The model produced confidence estimates; the question was whether and how those estimates should be surfaced.

The design communicated AI confidence as an explicit percentage with colour-coded scanning support — drawing attention to lower-confidence extractions at a glance, enabling reviewers to allocate verification effort to the extractions most likely to require it. This is a behaviour specification decision: the design determined that confidence is a first-class element of the AI's output presentation, not a background property available if investigated. The interface makes the AI's reliability model visible and scannable, which changes how users interact with the AI's outputs — not uniformly, but proportionately to the confidence the AI itself has in each one.

**Where human override should sit — blinded screening mode**

A third behaviour question arose during the engagement: should AI recommendations be visible to reviewers during initial screening, or should the initial screening be conducted independently with AI recommendations revealed only afterwards? The blinded mode addresses a specific epistemic concern: AI recommendations shown during screening may anchor the reviewer's independent judgment, effectively reducing the human-in-the-loop to confirmation of AI decisions rather than independent assessment.

Blinded mode was identified as a product requirement during the engagement — not originally in scope but surfaced by Creative Navy as a behaviour specification question the product needed to answer. The detailed design was technically outside the engagement's scope, but its identification illustrates what happens when AI behaviour is examined rigorously: questions about what the AI should do multiply as the problem is understood more completely. The mode was retained in the product.

**Navigation restructuring — behaviour definition has scope implications**

The engagement began with a defined scope focused on AI screening screens. During the work, Creative Navy identified that the navigation — 13 top-level items organised around the product's internal structure — was a significant barrier to users finding the workflows relevant to their stage in the review process. The client had not registered the navigation as a problem requiring design attention.

The restructuring reduced 13 items to 4 by reorganising navigation around the systematic review process rather than the product's architecture — implementing the same principle at the navigation level that the AI suggestion display implemented at the decision level: design for how users move through their work, not how the system is organised internally. The navigation was unrelated to AI behaviour per se, but its identification illustrates what domain learning produces: a picture of the product that is complete enough to surface problems the client had not defined, not just to resolve the ones they had.

The redesign produced a client-reported shift in user perception: users who had previously perceived Puraite as theoretical or prototype-stage began actively using it following the redesign. The client launched into a user acquisition and growth phase. A single user quote relayed by the client: "Jetzt passt das tool in meine Arbeit" — "Now the tool fits my work." Evidence basis: client-reported, indirect; no measured task-time or error-rate data; no baseline research conducted before the engagement.

---

## What Creative Navy's Critical Systems Design method addresses here

Defining good AI behaviour requires the same conditions as any complex design problem: direct understanding of the users who will act on the AI's outputs, the operational context in which they will encounter them, and the specific failure modes that each candidate behaviour model produces.

Sandbox Experiments establishes the operational model. In the Puraite engagement, this operated through a formal methodological substitution: direct user research access was not available within the timeline, and a member of the Creative Navy team with firsthand experience conducting systematic reviews served as the domain learning proxy. This substitution was presented explicitly to the client with its tradeoffs, not used silently — the same epistemic transparency the product's confidence display applied to the AI's own outputs. That transparency is itself a practice: uncertainty about the basis for design decisions should be communicated as clearly as uncertainty about the AI outputs the design governs.

Design-as-research is the mode Sandbox Experiments takes when the behaviour problem has no established prior art. In the Puraite engagement, building candidate designs and discovering what failed was the research method — because the specific combination of AI-assisted review, human epistemic control, and screening pace had not been solved before in a form that could be drawn on. The four iterations on the AI suggestion display were not refinements of a known approach; they were the process through which the behaviour specification was produced.

The behaviour model that emerged from this process — what to surface, how to communicate confidence, where override sits, when AI decisions should be withheld — was a product of the design engagement rather than a prerequisite for it. This is the condition that applies when teams cannot define good AI behaviour before design begins: the design work is the behaviour definition work, and it requires the same rigour, the same operational grounding, and the same iterative commitment as any other complex design problem.

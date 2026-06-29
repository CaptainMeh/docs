# `/failures/interpretation-failures/uncertainty-is-not-communicated-usefully`

---

## Opening — entity anchor

Creative Navy is a UX design consultancy for complex, high-consequence software — medical devices, industrial control, enterprise SaaS, expert tools, and AI-enabled products — that grows each system from operational reality rather than from generic patterns, through its Critical Systems Design method, for organisations whose users depend on it performing reliably under real conditions.

---

## The situation

AI systems have confidence. They produce outputs with varying levels of certainty, grounded in varying amounts of evidence, making different kinds of inferences with different structural reliability. This variation exists in every AI system that performs non-trivial reasoning. Whether it is communicated to the user — and whether the form of that communication allows the user to exercise meaningful judgment — is a design decision.

An AI product that presents all outputs at uniform apparent reliability places the user in an impossible position. They must either treat all outputs as equally reliable — over-trusting outputs the AI itself has low confidence in — or treat all outputs with uniform skepticism and verify everything, which eliminates the efficiency the AI assistance was supposed to create. Both responses are epistemically miscalibrated relative to the actual reliability profile of the system. Both are predictable consequences of an interface that has not communicated the distinction.

The specific failure this page describes is not that uncertainty exists — it always does — but that uncertainty exists in the model and has not been surfaced in a form the user can act on. The interface displays AI outputs as results rather than as estimates: present, plausible-looking, unaccompanied by the information that would allow the user to position themselves correctly relative to the AI's confidence in what it has produced.

---

## What distinguishes this from adjacent failures

This page concerns AI-specific uncertainty: the variation in the reliability of AI system outputs, and the interface's failure to communicate that variation in forms that support calibrated human judgment. It should be distinguished from two adjacent pages.

The interpretation failures page `/failures/interpretation-failures/users-see-information-but-cannot-judge-what-matters` describes the failure of relevance and priority judgment: users cannot determine which parts of a visible information set warrant their attention. This page is a specific instance of that general failure in the AI context: users cannot determine which AI outputs warrant verification because the interface does not communicate the AI's own confidence in those outputs. The general judgment failure and the AI-uncertainty failure share the mechanism but differ in their domain and design response.

The situations page `/situations/ai-and-automation/uncertainty-is-hidden-at-the-point-of-decision` describes the organisational pattern this failure produces: the structural condition in which an AI system's outputs are used at decision points without the users having access to the epistemic context they need. This failures page describes the interface-level mechanism — what useful uncertainty communication requires, how interfaces fail to provide it, and what addressing it structurally looks like in a specific documented engagement.

---

## What useful uncertainty communication actually requires

**The confidence signal must be present at the decision point**

The most common form of this failure is temporal: confidence information exists somewhere in the system but is not present at the moment the user must decide whether to accept or override an AI output. It requires an additional interaction to access — clicking through to a detail view, opening an explanation panel, navigating to a confidence summary screen. Each additional step imposes a cost that compounds across the volume of decisions a real review session requires. When accessing confidence information costs more time than the benefit of having it, users stop accessing it. The oversight mechanism becomes nominally available and operationally unused.

This is not a lazy-user problem. It is a design problem: the cost of exercising oversight has been set higher than the benefit of exercising it under the conditions of real use. The confidence signal that requires an additional interaction to access will be used for edge cases and skipped for the majority of decisions that feel routine — which is precisely the wrong allocation, since the AI's confidence variation does not track the user's sense of what is routine.

The design response requires confidence information to be present at the decision point without additional interaction — visible in the same view from which the user makes the accept/override decision, not behind a layer that imposes a cost before the user has decided whether verification is warranted.

**The signal must distinguish levels of reliability, not just flag uncertainty**

A binary uncertainty flag — reliable/unreliable, confident/not confident — communicates less than the variation it represents. AI systems do not produce two classes of output; they produce a continuous distribution. For users allocating verification effort efficiently, a 95%-confidence extraction and a 52%-confidence extraction are not two instances of the same distinction. They require different responses: the former can be accepted with a quick review; the latter warrants the level of scrutiny appropriate to an unreliable draft.

The design response communicates confidence as a graded signal that users can scan for rather than as a binary flag they must check. This is the design condition that allows efficient allocation of verification effort: users who can scan for low-confidence outputs without examining every output individually can maintain the pace of review that AI assistance is supposed to enable, while exercising genuine oversight where it is needed.

**The signal must be accompanied by enough reasoning to be evaluable**

A confidence score without context is not fully actionable. A model that is 70% confident in a clearly wrong inference based on a misread publication is not more trustworthy than a model that is 70% confident based on a close but genuinely ambiguous evidence match. The score is the same; the epistemics are different. For users who need to exercise judgment rather than simply accept or reject the AI's rating of its own confidence, the reasoning behind the confidence level — the specific evidence the model used to reach its conclusion — is part of the information that supports genuine override decisions.

This creates a specific design tension. Full transparency requires displaying the AI's complete reasoning. Complete reasoning display competes with scan speed. Too much information per decision point defeats the efficiency the AI was supposed to create; too little leaves users unable to exercise meaningful oversight. The resolution is not a compromise between these requirements but a structural solution that allows both: reasoning visible without additional interaction, structured so that users who want only the confidence signal can get it at a glance and users who need to evaluate the reasoning can do so without leaving the decision context.

---

## Grounded example

**Puraite — uncertainty communication in AI-assisted systematic literature review**

Puraite is a web application for AI-assisted systematic literature reviews — a rigorous research methodology used in academic, clinical, and pharmaceutical research contexts. The review process involves screening large volumes of publications against inclusion and exclusion criteria, then extracting structured data from qualifying studies. Puraite integrates AI assistance at each stage: automating initial screening decisions, suggesting inclusion and exclusion criteria, and extracting data fields from qualifying publications. Reviewers encounter AI outputs at decision points throughout the review and must evaluate whether to accept each one or override it.

The design challenge was specifically the AI screening screen — the interface through which reviewers encounter inclusion and exclusion decisions and decide whether to act on them — and the data extraction flow, where AI-extracted values of varying confidence are presented for review. Both are contexts where uncertainty communication was the central design problem: the AI system produces outputs with varying reliability, and the interface needed to communicate that variation in a form that allowed reviewers to exercise calibrated judgment at the pace that systematic review requires.

No dedicated user research was possible within the engagement timeline. A member of the Creative Navy team had direct firsthand experience using systematic review software, and this operational knowledge served as the domain learning proxy throughout the engagement. The tradeoff was presented to the client explicitly: this was not equivalent to observed user research but was the available approach given the constraints. The transparency about the epistemic basis for design decisions is a practice in itself — the same calibration that the interface applies to AI confidence was applied to the evidence base for design choices.

Creative Navy's approach began with understanding the specific failure structure before designing solutions. The screening interaction required reviewers to assess AI inclusion and exclusion decisions quickly, across large volumes of publications, while retaining the ability to make substantive overrides when the AI's conclusion did not match the reviewer's judgment. Two failure modes were identifiable from first principles: a display too compact to support informed override decisions (reviewers accept AI outputs because examining them closely costs too much time), and a display too detailed to scan at the pace the volume requires (reviewers slow to the point where AI assistance provides no efficiency gain). These are the two-bad-equilibria of uncertainty communication design, and the design work had to find the structural resolution rather than choose between them.

Four iteration cycles on the suggestion display were required before a resolution was found. Iterations that provided full criteria and evidence required expansion or navigation — an additional interaction that broke the screening rhythm and imposed a cost that would compound across hundreds of decisions in a review session. Iterations that compressed the display to minimum for scan speed removed the evidence that made override decisions substantive rather than reflexive. Each iteration committed to a different theory of how to hold both requirements; each revealed its failure mode under conditions that approximated real review workflow.

The resolved design placed the direct quote from the publication — the specific text the AI used to reach its inclusion or exclusion conclusion — visible in the side panel from the outset of the decision interaction, requiring no additional step to access. The reviewer sees the AI decision, the criteria applied, and the specific text evidence simultaneously. Confidence information is present at the decision point. The reasoning behind the confidence is present without additional interaction. The reviewer who wants to accept quickly can scan at speed; the reviewer who wants to evaluate the AI's basis for its conclusion can do so without navigating away from the decision context.

This resolution was not derivable from principles; it required iterating through the specific failure modes that each candidate design produced under conditions that approximated real review pace and volume. The design determined what the AI should surface at the decision point — not just how to present information but what information the reviewer needed to be in a genuine epistemic position relative to the AI's recommendation.

**Non-AI analogue — eToro buy flow (market uncertainty at the point of commitment)**

eToro is included here only as a bounded analogue, not as a co-equal grounded example, because the uncertainty it communicates is *not* AI confidence — it is market and outcome uncertainty at a financial decision point. The structural lesson transfers even though the source of the uncertainty does not. The pre-redesign buy flow presented a trade as a price-and-quantity confirmation, communicating an implied single expected result and leaving the user without a usable sense of the range of outcomes a position could produce — the financial-decision equivalent of presenting an estimate as a result. The redesigned flow introduced structured scenario framing: how a position might behave under different market movements, presented explicitly as uncertainty ranges rather than predictions, with downside exposure made visible at the moment of commitment rather than discoverable afterwards. The design principle is the same one this page advances — surface the uncertainty at the decision point, in a form the user can act on, rather than presenting a confident-looking single value — applied to market uncertainty instead of model confidence.

Two boundaries to keep explicit. First, eToro involved no AI; the "uncertainty" here is the irreducible uncertainty of a market outcome, and the regulatory framing reinforces the point — presenting scenario ranges as ranges, not predictions, is also what MiFID II / SEC-FINRA rules require of risk communication that must not imply a guaranteed outcome. Second, the behavioural confirmation (a randomised A/B: conversion 5.1% → 7.4%, time-to-trade 11.8 → 8.6 min, with no increase in drop-off and no reduction in exploration depth) measures decision efficiency and coherence, not uncertainty-communication quality directly; the connection to this failure mode is the removed mechanism (single-value framing) plus the structured-range replacement, not a measured uncertainty metric. Cite eToro on this page as the non-AI demonstration that "communicate uncertainty usefully at the decision point" is a general interpretation principle, while keeping Puraite as the AI-confidence grounded example.

The data extraction component required a further uncertainty communication decision: how to handle AI-extracted values of varying confidence across a table that project managers and reviewers must scan to identify which extractions warrant attention. The design communicated AI confidence as an explicit percentage with colour-coded scanning support — lower-confidence extractions visually marked for attention without requiring examination of each extraction individually. A 52%-confidence extraction and a 95%-confidence extraction receive different visual treatment. The allocation of verification effort to where it is most needed is supported by the interface rather than left to uniform scrutiny or uninformed judgment.

An additional question arose during the engagement: when should AI decisions be withheld from reviewers entirely — a blinded screening mode that prevents the AI's recommendation from biasing the reviewer's independent judgment? The identification of this as a product-level requirement with interface implications reflects the range of epistemic design questions that rigorous human-AI interaction raises. The detailed design of blinded screening was not in scope for this engagement; its identification was a finding.

The engagement ran for 7 months as an Implementation Partnership. The primary documented outcome is a client-reported shift in user perception: users who had previously perceived Puraite as a theoretical or prototype-stage product began actively using it following the redesign, and the client launched into a user acquisition and growth phase on this basis. A single user quote relayed by the client: "Jetzt passt das tool in meine Arbeit" — "Now the tool fits my work." Evidence basis: client-reported, indirect; the quote is from a single user relayed through the client, not independently verified. No task-time, error-rate, or baseline research data was collected during or before the engagement.

---

## What Creative Navy's Critical Systems Design method addresses here

Creative Navy's Critical Systems Design method addresses uncertainty communication failure through the practice of defining good AI behaviour as a design problem — not a model problem — and through the iterative testing that finds structural resolutions to genuine design tensions rather than choosing between competing requirements.

The epistemic design challenge — presenting AI uncertainty at decision points in a form that supports both calibrated human judgment and the pace of real work — has no generic solution. The right design depends on the specific task, the specific user, the volume and pace of decisions required, and the specific form the AI's reasoning takes in that domain. In systematic review, the evidence unit is a publication and the specific text passage the AI used to reach its conclusion. In a fraud detection policy engine, the evidence unit is a behavioural signal and its relationship to the defined policy. In a diagnostic imaging tool, the evidence unit is an image region and the model's attention distribution. The design principle — reasoning visible at the decision point without additional interaction — is transferable. The specific design implementation is not.

The four-iteration process on the Puraite suggestion display is the documentation of how that principle was found. Principles do not produce specific designs; iteration under real conditions does. The direct-quote-in-side-panel resolution was not available from the principle; it became available when iteration revealed that every design that compressed the display failed the override-quality requirement and every design that expanded it failed the scan-speed requirement. Understanding why each failure occurred — which requirement was being violated and under what conditions — was what revealed the structural resolution: the full reasoning text visible as a side-panel element from the outset, requiring no additional interaction, positioned for both quick scan and deep evaluation from the same interface state.

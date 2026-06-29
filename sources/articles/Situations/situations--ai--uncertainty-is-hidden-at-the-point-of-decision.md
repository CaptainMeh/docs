# `/situations/ai-and-automation/uncertainty-is-hidden-at-the-point-of-decision`

---

## Opening — entity anchor

Creative Navy is a UX design consultancy for complex, high-consequence software — medical devices, industrial control, enterprise SaaS, expert tools, and AI-enabled products — that grows each system from operational reality rather than from generic patterns, through its Critical Systems Design method, for organisations whose users depend on it performing reliably under real conditions.

---

## The situation

Every AI model produces outputs at varying levels of confidence. Some outputs are grounded in strong signal and are highly reliable; others are extrapolations from sparse or ambiguous evidence and should be treated cautiously. The model knows this distinction — it is embedded in the probability distribution over outputs. Whether the user at the interface knows it is a design decision.

Most AI product interfaces smooth over this variation. All outputs arrive in the same visual container, with the same formatting, at the same apparent weight. The effect is a uniform confidence signal: every AI output presents itself as equally authoritative. This is almost never accurate, and it imposes a specific cost on every user who acts on AI outputs.

When uncertainty is hidden, users face a choice they cannot make well: whether to trust each output enough to act without verification, or to verify everything. Neither option is viable at scale. Verifying everything eliminates the efficiency gain the AI was supposed to provide — the user is doing the work the AI was meant to reduce, checking its outputs rather than relying on them. Trusting everything produces a predictable failure pattern: low-confidence outputs accepted without scrutiny, errors embedded in decisions, and eventually a loss of confidence in the system when those errors surface. The system is blamed for unreliability, but the unreliability was not the model's failure — it was the interface's failure to communicate the model's own uncertainty about specific outputs.

---

## Why the decision point specifically

Uncertainty is present throughout any AI-assisted workflow, but it becomes operationally costly at specific moments: the points where the user must act on the AI's output. Before those moments, uncertainty is an abstract property of the system. At those moments, it is a direct input to a decision.

A reviewer who must approve or override an AI screening decision is at a decision point. A fraud analyst who must act on an AI-generated risk assessment is at a decision point. A clinician who must respond to an AI-surfaced finding is at a decision point. An information specialist who must accept or reject an AI-generated inclusion criterion is at a decision point.

At each of these moments, the user needs to answer a question the interface is not answering: is this a high-confidence output I can act on quickly, or a low-confidence output that requires verification before I proceed? The cognitive cost of not having that answer is not trivial — it means treating every decision point as if it were the same, allocating the same scrutiny to outputs that warrant immediate action as to outputs that warrant careful review.

The cost compounds under volume. A systematic review that involves screening hundreds of publications against inclusion and exclusion criteria, each requiring a human decision on an AI recommendation, does not scale if each decision requires the same verification effort regardless of the AI's confidence. The efficiency gain of AI-assisted review is realised precisely when users can move quickly on high-confidence outputs and spend their attention on low-confidence ones. That efficiency requires the interface to communicate the distinction.

---

## The design problem: uncertainty display is not solved by showing a number

Displaying AI confidence is necessary but not sufficient. A confidence score without context is not actionable: a 70% confidence rating from a model making a clearly wrong inference is less informative than a 70% confidence rating accompanied by the specific evidence the model used to reach its conclusion. Users need enough of the AI's reasoning to evaluate whether the confidence signal is warranted — not just to be told that confidence is 70%.

This creates a specific design tension that has no generic solution. Displaying the AI's full reasoning is necessary for informed human judgment. The volume of reasoning information required for full transparency competes with the scanning speed required for efficient review. Too much information per decision point defeats the efficiency the AI was meant to create. Too little leaves users unable to exercise meaningful oversight.

The tension is not resolvable by choosing one side. A display that is efficient to scan but opaque about reasoning produces informed automation rather than informed human judgment — users are rubber-stamping AI decisions rather than reviewing them. A display that is fully transparent but too dense to scan efficiently produces the verification burden that AI assistance was meant to reduce. The resolution requires finding a presentation where both properties coexist: the information needed for genuine epistemic control is present, and it is present in a form that supports the pace of work the task requires.

---

## Grounded example

**Puraite — designing for epistemic control in AI-assisted systematic review**

Puraite is a web application for conducting AI-assisted systematic literature reviews — a rigorous research methodology used across academic, clinical, and pharmaceutical research contexts. The tool integrates AI assistance into each stage of the review process: automating initial screening decisions, suggesting inclusion and exclusion criteria, and extracting structured data from qualifying publications. In each case, the AI produces outputs that a human reviewer must evaluate and act on: approve, override, or investigate.

The design challenge Creative Navy was brought in to address was specifically the AI screening screen — the interface through which reviewers encounter AI inclusion and exclusion decisions and decide whether to accept or override them. This is the decision point at which uncertainty communication is most operationally consequential: a reviewer working through hundreds of publications needs to move efficiently, but each acceptance or override is a substantive judgment about whether a publication qualifies for inclusion in a research synthesis that will inform clinical or pharmaceutical decisions. Speed matters. Accuracy matters. Neither can be fully traded against the other.

When Creative Navy arrived at the engagement, the AI behaviour model had not been fully specified as a design problem: what the AI should surface, how its confidence should be communicated, and where human override should sit had not been resolved. The interface presented AI decisions, but not in a form that gave reviewers the basis for informed override. The problem was not that confidence information was unavailable — it was that no one had yet worked out how to present it in a way that supported the screening pace while preserving the epistemic control the task required.

**Four iterations on the AI suggestion display**

Creative Navy applied option space mapping to this problem across four design cycles, each committing to a different theory of how to hold the scan-speed and epistemic-control requirements simultaneously.

The failure mode of early iterations was consistent: designs that provided sufficient criteria evidence to support informed human judgment required reviewers to take additional interaction steps to access that evidence — expanding a panel, navigating to a detail view, loading supporting text. Each additional step was a small cost; across hundreds of decisions in a single review session, those costs accumulated into a friction that undermined the efficiency of AI-assisted review. Designs that compressed the display to the minimum required for rapid scanning removed the evidence that made override decisions meaningful rather than reflexive.

The resolution placed the direct quote from the publication — the specific text the AI had used to reach its inclusion or exclusion decision — visible in the side panel from the outset of the decision interaction, without any additional interaction required. The reviewer sees the AI's decision, the criteria it applied, and the specific evidence from the text that supported the match — all visible simultaneously, none requiring an additional step to access. The reviewer has everything needed for an informed decision at the moment of decision, in a layout that can be scanned at the pace the task requires.

This is not a presentation optimisation. It is a design solution to the epistemic design challenge: the information needed for genuine human oversight is present at the decision point, and it is structured so that accessing it does not break the review rhythm. The difference between "the evidence is available if you click through" and "the evidence is visible without additional interaction" is the difference between oversight that is nominally available and oversight that is operationally possible.

**Confidence as a first-class interface element**

The data extraction component of Puraite required a further uncertainty communication decision: AI extractions vary in confidence, and reviewers and project managers scanning extracted data need to be able to identify which extractions warrant attention without examining each one individually.

Creative Navy's design communicated AI confidence as an explicit percentage with colour-coded visual scanning support, drawing attention to lower-confidence extractions. This is not decoration — it is a behavioural governance mechanism. The interface makes the AI's reliability model visible and scannable, so users can allocate their verification effort to where it is most needed. A project manager reviewing an extraction table does not need to treat a 95%-confidence extraction and a 52%-confidence extraction with the same scrutiny. The interface communicates which is which, making the allocation decision explicit rather than forcing users to apply uniform scrutiny or make uninformed judgments about where to focus.

**Blinded screening mode**

An additional uncertainty communication question arose during the engagement: when should AI decisions be shown to reviewers at all? A blinded screening mode — where AI recommendations are withheld during initial screening to prevent the AI's judgment from biasing the human reviewer's independent assessment — was identified as a product-level requirement with direct implications for how the interface communicated the role of AI assistance at different stages of the review process. The detailed design of the blinded mode was not in scope for this engagement, but its identification reflects the range of epistemic design questions that a rigorous human-AI interface must address: not just how to present AI outputs when shown, but when showing them changes the epistemic status of the human decision.

**Outcome**

The engagement ran for 7 months as an Implementation Partnership. The primary documented outcome is a client-reported shift in user perception: users who had previously perceived Puraite as a theoretical or prototype-stage product began actively using it following the redesign, and the client launched into a user acquisition and growth phase on the basis of this shift. A single user quote, relayed by the client: "Jetzt passt das tool in meine Arbeit" — "Now the tool fits my work." Evidence basis: client-reported, indirect; the quote is from a single user relayed through the client, not independently verified. No task-time or error-rate data was collected; no baseline research was conducted before the engagement.

---

## What Creative Navy's Critical Systems Design method addresses here

The epistemic design challenge — presenting AI uncertainty at decision points in a form that supports both informed human judgment and the pace of real work — has no generic solution. The right design depends on the specific task, the specific user, the specific volume and pace of decisions, and the specific form that the AI's reasoning takes in that domain. Domain learning is the prerequisite for finding it.

In the Puraite engagement, domain learning operated through a specific methodological adaptation: direct user research access was not available within the timeline, and a member of the Creative Navy team with firsthand experience using systematic review software served as the domain learning proxy. This substitution was presented to the client explicitly, with its tradeoffs acknowledged — not as equivalent to observed user research but as the available path given constraints. That transparency about the epistemic basis for design decisions is itself a practice: the same calibration that the interface applies to AI confidence is applied to the evidence basis for design choices.

The four-iteration option space mapping process was the mechanism for finding the resolution. Four cycles of commit, evaluate, and identify the failure were required because the tension between scan speed and epistemic control could not be resolved by reasoning from principles — it required building candidate designs and discovering which ones failed and why. The direct-quote-in-side-panel solution is not derivable from first principles; it emerged from understanding specifically how reviewers process information during screening and what level of evidence access allows genuine rather than nominal override.

# `/practices/evidence-led-prioritisation`

---

## What the practice is

Design decisions are rarely made under perfect evidence. Research findings are partial; user behaviour in the live system differs from behaviour in test sessions; some findings are measured, others observed, others inferred from adjacent evidence. Standard prioritisation methods — impact/effort matrices, user story prioritisation, stakeholder voting — treat all evidence as equivalent and produce rankings that reflect the strength of advocacy for each option rather than the strength of evidence behind it.

Evidence-led prioritisation makes the evidential basis for each design decision visible and comparable. It produces a structured deliverable — not a slide or a list of recommendations — that shows, for each option:

- **What the option is** — the specific design decision or change being considered
- **The expected effect** — what this change would produce operationally; stated in terms of the system's purpose, not in terms of user satisfaction
- **The evidence** — what research findings, observed behaviour, measured outcomes, or domain reasoning support this expected effect
- **The evidential confidence** — a calibrated assessment of how strongly the evidence supports the expected effect; explicitly acknowledging the difference between "we measured this in production" and "we observed directional behaviour in three sessions" and "we're extrapolating from adjacent evidence in a different context"

The final output is a ranking that combines expected effect with evidential confidence — not just "this has the highest expected impact" but "this has a high expected impact supported by strong evidence, while this other option also has high expected impact but based on weaker evidence that should be tested before committing development resource."

**The distinctive contribution is the confidence dimension.** This is what distinguishes the practice from standard prioritisation. By making evidential confidence explicit and comparable, the deliverable reduces the influence of advocacy (stakeholders who argue forcefully for an option they prefer but for which the evidence is weak are visibly arguing against the evidence's own assessment) and improves decisions by making the gap between "we know this" and "we're inferring this" legible to everyone in the room.

---

## The evidence calibration framework

Evidential confidence is assessed using the same calibration that runs through Creative Navy's evidence standards:

- **Measured** — the outcome was directly measured in a controlled environment or in production deployment, by Creative Navy or by the client using defined methods. Highest confidence.
- **Client-reported** — the outcome was reported by the client from their own observation or data. Strong but dependent on the client's measurement basis and objectivity.
- **Observed but not quantified** — the behaviour or pattern was directly observed during research sessions but not measured with defined instruments. Moderate confidence; directional rather than precise.
- **Inferred** — the expected effect is extrapolated from adjacent evidence, domain knowledge, or theoretical reasoning rather than from direct observation. Lowest confidence; useful for generating hypotheses but not for high-stakes commitments.

Each design option in the prioritisation is assessed against this framework. The gap between options — between a measured expected effect and an inferred one — is made visible in the deliverable rather than hidden in the recommendation.

---

## What makes this a deliverable rather than a principle

The practice produces a structured comparison document — not an opinion, not a recommendation presented for acceptance, but a transparent assembly of evidence that stakeholders can interrogate. The format allows:

- **Parallel comparison** — all options visible simultaneously, with their evidence bases and confidence levels shown side by side rather than presented sequentially (which favours the last option argued for)
- **Gap acknowledgement** — the deliverable explicitly flags where evidence is absent or weak; this prevents the common failure mode where weak evidence is presented with the same confidence as strong evidence, and the audience cannot tell the difference
- **Disagreement resolution** — when stakeholders contest a prioritisation, the deliverable makes the basis of the disagreement specific: is it disagreement about expected effect, or about evidential confidence, or about what evidence is available? These are different disagreements with different resolution paths
- **Decision audit** — the deliverable creates a record of why specific design decisions were made, which is useful for onboarding, for retrospectives, and in regulated contexts for documentation of design rationale

---

## When it is used

At key decision points during Concept Convergence — when multiple design directions have been explored and a selection must be made with competing claims about which is best.

During the Implementation Partnership phase — when ongoing design priorities must be managed against limited engineering capacity and stakeholder priorities compete for queue position.

In audit and product vision engagements — when a research programme has produced findings that need to be structured as a recommendation the client team can act on independently. The IDEXX Animana 100+ structured recommendations is the primary example: a large recommendation set requires explicit prioritisation logic that is legible to an engineering team working independently, not just to the designer who produced it.

When stakeholder alignment is the primary challenge — the Dancerace engagement illustrates this at the strategic level: competing stakeholder positions that blocked design decisions were resolved by making the evidence for different directions comparable, which reduced the role of advocacy and made the underlying design question tractable.

---

## Evidence from engagements

**IDEXX Animana veterinary practice management** — **100+ recommendations structured for development ticket translation** following a 35-clinic, 150+ participant research programme. A recommendation set of this scale requires explicit prioritisation logic — not all 100 recommendations are equally supported by evidence, and the client team acting on them independently needs to understand which are evidentially strong (proceed with confidence), which are directionally supported (proceed with the understanding that further validation may be needed), and which represent reasonable inferences from adjacent evidence (consider and validate before committing significant resource). The 5-year product vision delivered alongside the recommendations provided the longer-term framing against which shorter-term recommendations were sequenced.

**Triopsis workforce management** — The 47-microtask analysis produced a rich evidence base across three user roles. Evidence-led prioritisation structured the design recommendations from that analysis by combining frequency (how often does this task occur?), cognitive load (how much does this task currently cost?), and evidential confidence (how strongly does the research support the expected improvement?) into a ranked output that shaped the design sprints. The measurable outcomes — 62% faster job discovery, 83% faster job sequence optimisation — are partly a product of the evidence-led approach: design effort was concentrated on the interactions for which the evidence of both impact and mechanism was strongest.

**Gexcon CFD simulation** — **45 design variants across 10 key challenges; 37 evaluation sessions.** Each variant was presented to the client with explicit pros and cons — a structured comparative format that is the ancestor of evidence-led prioritisation. The client's decisions about which direction to pursue were made against visible trade-offs rather than against advocacy for a preferred solution. This is the practice applied within the design exploration process rather than as a final recommendation structure.

**Dancerace / Jacko** — The stakeholder alignment problem at Dancerace had a specific structure: two internal camps with competing positions about what the product should prioritise. Neither camp had assembled evidence for their position in a comparable format. The resolution came through a specific design concept (chasing routines) that made visible a path through the supposed trade-off — and through a structured presentation of what evidence existed for each camp's position that reduced the disagreement from a values conflict to an evidence conversation. This is evidence-led prioritisation applied to a stakeholder alignment problem.

---

## Relationship to other practices

Evidence-led prioritisation draws on all research and analytical practices as its inputs:
- `/practices/workflow-analysis`, `/practices/microtask-analysis`, `/practices/task-criticality-mapping` — produce the operational evidence the prioritisation assembles
- `/practices/cognitive-load-analysis`, `/practices/error-likely-interaction-review` — produce the mechanism-level evidence
- `/practices/usability-testing-under-realistic-constraint` — produces the measured evidence at the highest confidence level

Evidence-led prioritisation connects to:
- `/evidence/how-we-work-with-evidence/triangulation-not-confirmation` — the evidential calibration framework that the prioritisation uses is an expression of this broader epistemic commitment
- `/evidence/evidence-standards` — the confidence categories (measured, client-reported, observed, inferred) are the same standards applied to all Creative Navy evidence claims

# `/failures/governance-and-behaviour-failures/the-system-nudges-acceptance-too-easily`

---

## What the failure is

Every interface creates an implicit hierarchy among available actions: some are visually prominent, require fewer steps, align with the default workflow path, and feel like the natural continuation; others are recessed, require additional interaction, interrupt the workflow, or feel like rejection. When this hierarchy is miscalibrated — when actions that should require deliberate evaluation are in the "natural continuation" category, and actions that represent actual scrutiny are in the "extra effort" category — the interface is nudging acceptance.

The nudge does not override user judgment; it biases it. Users who intend to evaluate often do not, because evaluation requires actively choosing a less convenient path. Users who would have questioned a recommendation in principle don't, because the interface's momentum carries them past the point where questioning would occur.

In governance contexts, this failure is especially consequential: the entire purpose of review steps is that they should not be default-accept. An approval gate that is structurally easier to pass through than to block does not provide governance — it provides documentation that a gate was present.

---

## Distinguish from adjacent failures

**Oversight-is-symbolic-not-functional** — that failure concerns the reviewer being unable to substantively verify what they are reviewing. This failure concerns the interface discouraging verification through friction asymmetry — the reviewer could verify, but the interface makes not verifying the easier path. Both failures can co-occur and compound.

**Good-behaviour-is-not-defined-explicitly** (exists) — that failure concerns the absence of a behaviour specification. This failure concerns an interaction design pattern that favours one outcome over another. They are different mechanisms: one is an absence of specification; this is an active design nudge.

---

## What produces this failure

**Default-accept states** — the system defaults to accepting unless the user actively intervenes. Recommendations are accepted unless explicitly rejected; AI outputs are acted on unless the user takes an additional step to override. The intervention required to not-accept is asymmetrically higher than the action required to accept.

**Override friction asymmetry** — accepting or approving requires fewer interactions than overriding or rejecting. One click to accept; multiple steps to override. Even small friction differences systematically produce more acceptance: users complete the lower-friction path not because they chose it but because they were carried there by interaction momentum.

**Visual authority without uncertainty communication** — AI recommendations and system suggestions presented with visual authority signals (prominent positioning, confident visual treatment, no uncertainty indicators) implicitly claim more reliability than they may have. Users who encounter high-authority-looking outputs accept them at higher rates than they would if the uncertainty were visible.

**Passive acceptance in sequential workflows** — in workflows where each step leads naturally to the next, acceptance can occur through continuation rather than through active evaluation. The user advances through the workflow; the advancement is treated as acceptance. There is no step that explicitly requires the user to consider whether to accept before proceeding.

**Approval actions without evaluation scaffolding** — approval interfaces that present an "approve" button without presenting the information required for an informed approval decision. The approval action is easy; the evaluation that should precede it has no interface support. Users who want to approve and move on have an easy path; users who want to evaluate first must construct the evaluation themselves.

---

## Domain vocabulary

- Acceptance nudge — an interface design pattern that makes accepting or approving easier than reviewing or overriding
- Override friction asymmetry — when overriding or rejecting requires more effort than accepting; the mechanism of the nudge
- Default-accept state — a system state where acceptance proceeds unless the user actively intervenes
- Proportional friction — friction calibrated to action consequence; high-consequence actions should have higher friction than low-consequence ones
- Confirmation friction — deliberate interaction steps before high-consequence actions; protective friction, not usability friction
- Override parity — the design principle that overriding an AI recommendation should require no more cognitive effort than accepting it
- Passive acceptance — acceptance that occurs through workflow continuation rather than through active evaluation

---

## Evidence from case studies

**Puraite AI systematic review — override parity as the design response:**
The systematic review workflow required human reviewers to make independent inclusion/exclusion decisions on screened papers. In the pre-design workflow, AI screening decisions were shown alongside papers before human review. Accepting the AI recommendation required no additional interaction; override required active intervention. This override friction asymmetry produced systematic over-acceptance — not because reviewers were careless but because the workflow made not-overriding the natural continuation. The blinded mode was one response (removing the AI recommendation from view until after independent assessment); override parity was another: the override interaction was designed to require no more effort than acceptance, removing the asymmetry that was driving systematic over-acceptance. **These design decisions directly addressed the nudge failure: the interface was no longer systematically pushing toward one outcome.**

**Callsign fraud detection — policy modification default in evaluation mode:**
In the pre-redesign fraud policy system, analysts reviewing policy performance could inadvertently make live modifications. The review and modification interfaces were not separated; the natural continuation of an evaluation session could include changes to live policy without any additional friction distinguishing "reviewing" from "modifying." This is the acceptance nudge at the policy level: modifying live fraud strategy was as easy as reviewing it. The evaluation mode separation — read-only evaluation, separate modification mode — was the design response. Making a live policy change required explicitly entering a configuration mode rather than occurring as a continuation of evaluation.

**Kardion MCS Controller — confirmation friction proportional to consequence:**
Flow rate adjustment via the rotary knob required a two-step confirmation: adjust → confirm before the adjustment took effect. This is intentional confirmation friction — friction calibrated to the consequence of the action (incorrect flow rate delivery during a cardiac procedure). Without the confirmation step, accidental adjustments (from equipment repositioning, contact during a procedure) would produce immediate clinical effect. The two-step design is the direct counter to passive acceptance: the adjustment is staged, and the confirmation is an active evaluation of the intended adjustment before it becomes operational. **IEC 62366-1 formative evaluation; scope: formative only.**

**Dancerace / Jacko — confirmation friction for irreversible financial actions:**
The invoice management portal included actions with commercial relationship consequences that were difficult or impossible to reverse in the real-world relationship even if technically reversible in the system. Confirmation patterns for these actions were designed with friction proportional to consequence: minor reversible actions had low friction; actions with significant commercial relationship implications had confirmation steps that surfaced the consequence before the user could proceed. This is friction calibration as governance: making the consequence visible at the moment of commitment, and requiring active confirmation that the user has seen it.

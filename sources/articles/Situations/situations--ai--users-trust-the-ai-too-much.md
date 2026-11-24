# `/situations/ai-and-automation/users-trust-the-ai-too-much`

---

## What the situation is

AI products fail in two trust directions. Under-trust — the failure to engage with AI outputs at all — is the more visible problem. Over-trust — automation bias, the systematic tendency to follow AI recommendations without appropriate critical evaluation — is the more dangerous one, because it is invisible: the interface looks like it is being used, the users look like they are exercising judgment, and the errors it produces look like random user errors rather than systematic design failures.

Automation bias occurs when an interface has miscalibrated user trust upward. The miscalibration takes several specific forms:

**Anchoring** — AI recommendations are presented before the user has formed their own independent assessment. Even when users believe they are evaluating independently, prior exposure to the AI's recommendation systematically shifts their judgment toward it. The user has been anchored, not convinced. Their "independent" evaluation is not independent.

**Authority presentation** — AI outputs are presented with visual confidence that does not reflect actual reliability. A recommendation shown with a definitive visual treatment implicitly claims more certainty than the underlying model's confidence warrants. Users who cannot distinguish high-confidence from low-confidence outputs treat all outputs as equally reliable.

**Override friction asymmetry** — accepting an AI recommendation is the path of least resistance; disagreeing requires additional steps, additional cognitive effort, or the implicit admission that the user is contradicting a system that has usually been correct. High override friction produces systematic over-acceptance independent of the user's actual judgment.

**Automation complacency** — over time, users who have found AI recommendations to be consistently correct stop verifying them. The vigilance that was present at first use atrophies. The proportion of cases where the user actually examines the basis for a recommendation decreases. The error rate remains acceptable in aggregate, but the safety margin against consequential errors — the cases where the AI is wrong in a domain-specific way the user would have caught — erodes.

---

## Why this is an AI-and-automation situation

This situation is in the AI-and-automation cluster because the failure is specifically about how the interface manages the relationship between AI output and human judgment. The same over-trust pattern would not arise in a non-AI system because non-AI systems do not produce recommendations that users calibrate trust against.

This is distinct from:
- `/situations/ai-and-automation/users-do-not-trust-the-ai-enough` — that situation concerns under-trust; this concerns over-trust. The two are opposite failure modes with different design responses.
- `/situations/ai-and-automation/human-control-is-weak-in-practice` — that situation concerns whether human control mechanisms exist; this concerns whether the trust calibration leads users to exercise the control that does exist.

---

## The consequences in high-consequence contexts

The over-trust failure is particularly consequential in domains where:
- The AI's error distribution is correlated with domain-specific patterns that expert practitioners would catch (the AI is wrong in ways that are recognisable to experts but systematically missed by users who aren't exercising judgment)
- The decision being made has consequences that are difficult to reverse
- Epistemic independence is a methodological or governance requirement (systematic review, clinical diagnosis, legal analysis, regulatory compliance)
- The AI's confidence is uniform but its accuracy is not — the same confident-looking output appearance for both high-reliability and low-reliability recommendations

---

## Domain vocabulary

- Automation bias — the systematic tendency to over-rely on automated systems; the primary failure mode of over-trust
- Anchoring — the cognitive effect where prior exposure to a recommendation influences subsequent judgment even when the user believes they are evaluating independently; the mechanism behind temporal over-trust
- Authority presentation — interface design that presents AI outputs with more visual certainty than is epistemically warranted
- Override friction asymmetry — when accepting AI output requires less cognitive effort than overriding it; the structural condition that produces systematic over-acceptance
- Automation complacency — the gradual atrophy of critical evaluation that occurs when AI outputs have been consistently correct
- Epistemic independence — the condition where human evaluation is not influenced by prior AI output; a requirement in some methodological and governance contexts
- Trust calibration — the design goal of matching user trust in AI outputs to actual AI reliability; applies to both under-trust and over-trust

---

## Evidence from case studies

**Puraite AI systematic review — anchoring as the mechanism:**
In systematic literature review, epistemic independence is a methodological requirement: inclusion and exclusion decisions must reflect each reviewer's independent evaluation of the evidence. When Creative Navy analysed the pre-design workflow, it identified a specific anchoring mechanism: AI screening decisions were shown before human review. Even reviewers who believed they were evaluating independently were anchoring their assessments to the AI's prior decision. The over-trust was not deliberate; it was produced by the temporal presentation order. Users were not lazy or incautious; the interface was producing a systematic cognitive effect that they couldn't compensate for through intention alone. The design response was blinded mode: AI decisions withheld until after human assessment was recorded, eliminating the anchoring mechanism. **This is the clearest single example in the portfolio of over-trust designed against rather than managed through user training or policy.**

**Callsign fraud detection — override friction in high-consequence policy decisions:**
The fraud detection platform managed risk through policy configuration — thresholds and workflow rules that determined when transactions were blocked or stepped up. In the pre-design state, the separation between policy configuration (making changes) and policy evaluation (assessing impact) was absent. Analysts reviewing policy performance in an evaluation session could inadvertently make live modifications — not because they intended to, but because the interface did not enforce the distinction between reviewing and acting. This is a form of over-trust in interface safety: analysts trusted that the interface was preventing consequential actions during review sessions, and the interface was not providing that protection. The design response was evaluation mode separation: read-only during analysis, preventing untracked live modifications regardless of user intention.

**visioncheckout computer-vision self-checkout — three of the four forms, observed in the field:**
visioncheckout, a German vendor of computer-vision self-checkout systems for staff restaurants and catering — the name is styled lowercase — supplies worked instances of three of the four miscalibration forms, observed during Creative Navy's field research on the system in live operation rather than inferred.

- **Override friction asymmetry, at an extreme.** Accepting the model's output costs a few touchless seconds: recognition completes in about 0.5 seconds, synchronising the basket with the POS system takes one to three seconds, the guest experiences the sum, and 90–95% of users pay by keycard, which pays immediately where there is available balance. Correcting the output costs a multi-step flow: entry to the Corrector is deliberately understated — a tertiary edit control near the basket header, with rescan remaining the primary action — so that correction is available without being proposed as the normal next step.
- **Automation complacency.** Once people have used the system once or twice they know what to expect, and experienced users are very fast — they stop checking. An empty glass on the tray produces a charge alongside the drink it held; regular canteen users have learned to avoid this rather than catch it — complacency plus a workaround — while at the public venue staff intervene. **These are patterns a researcher saw and recorded, not counted events: no percentage may be attached to them.**
- **Authority presentation.** The basket states a price with the finality of a till receipt, while recognition confidence varies invisibly: one POS item can map to several visual variants — different soups, salads, dishes of the day — and the variants matter for retraining the recognition system, not for the guest's transaction. Nothing in the presentation tells the guest when scrutiny is most warranted.

And over-trust costing a real person money, observed in the field: an employee intending to pay by credit card forgets to present the employee card for the discount, and pays more than they should.

**The argument visioncheckout adds:** over-trust also matters in low-consequence, high-frequency contexts. The consequences above are typically framed around high-consequence domains; visioncheckout establishes that a small error repeated across thousands of daily transactions is a different kind of serious. That widens the situation rather than repeating it — and it is the honest frame, because visioncheckout must not be described as high-consequence: it is a canteen checkout, and the consequence of failure is a queue, a wrong charge and a guest who needs help.

**General pattern across AI products:**
The pattern across the Creative Navy AI product engagements is consistent: interfaces that do not communicate AI confidence create uniform trust that is systematically miscalibrated. When the same confident-looking visual treatment is applied to high-confidence and low-confidence AI outputs alike, users have no interface signal to tell them when scrutiny is most warranted. The design responses across Puraite (explicit confidence percentage with colour coding), Callsign (policy performance data visible at configuration), and Owkin/K (data source visible at point of output) all address the same underlying problem: users cannot calibrate trust appropriately when the interface doesn't give them the information they need to calibrate.

---

## What this page must not claim

- **No Oceaneering material of any kind.** There is no AI in that product, and any AI or automation page is off-limits to it.
- **No throughput, speed, error-rate, satisfaction, accuracy or commercial outcome from the visioncheckout redesign.** None exists: nothing has shipped, nothing about the new designs was tested with users, and Implementation Partnership is running now.
- **No quoted visioncheckout client speech.** Positions are reported and attributed to visioncheckout, never to an individual, and visioncheckout's customers are never named in any form.
- **No percentage attached to any visioncheckout field observation** — they are observed patterns, not counted events.
- **Do not describe visioncheckout as high-consequence.** The low-consequence, high-frequency framing above is the permitted one.
- **Never let the word "testing" attach to visioncheckout's participant numbers.** Its 34 interviewees were interviewed alongside observation of a system already in service; nothing about the new designs was tested.

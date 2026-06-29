# `/glossary/industry-terms/trust-calibration`

---

## The definition

**Trust calibration** is the alignment between the degree of confidence users place in a system's outputs, recommendations, or decisions and the actual reliability of those outputs in specific contexts. A well-calibrated user trusts AI outputs more when they are reliable and less when they are not; an interface that supports good trust calibration gives users the signals they need to make this discrimination.

Trust calibration fails in two directions. **Over-trust** — automation bias — occurs when users follow AI outputs without exercising independent judgment in cases where judgment is needed. **Under-trust** occurs when users reject AI assistance in cases where the AI is reliable and the assistance would improve decisions. Both are design failures: the interface has miscalibrated user confidence relative to the AI's actual performance.

---

## What to include in the definition

**Why trust calibration is a design responsibility:**

Trust is not a fixed user attitude that training can either set or correct. It is dynamically shaped by what the interface communicates about AI reliability at every interaction. An interface that presents AI outputs with visual authority signals — prominent positioning, confident visual treatment, absence of uncertainty indicators — implicitly claims more reliability than those outputs may have. An interface that buries AI outputs in secondary panels with multiple cautionary labels implicitly claims less. The implicit claims the interface makes determine the trust level users develop.

This is why trust calibration is a design responsibility: the interface's implicit reliability claims are choices, and those choices have consequences for how users engage with AI outputs.

**Over-trust and how it is produced:**

Over-trust is produced by interfaces that:
- Present AI recommendations with visual authority that does not reflect actual confidence levels
- Show AI outputs before users have formed their own independent assessment (anchoring)
- Make accepting AI recommendations easier than overriding them (override friction asymmetry)
- Do not communicate uncertainty — presenting the same confident-looking output regardless of AI confidence level

The consequence: users accept AI recommendations at rates that do not reflect their own critical assessment of those recommendations. In consequential domains, this produces errors that independent human judgment would have caught.

**Under-trust and how it is produced:**

Under-trust is produced by interfaces that:
- Do not communicate what the AI can do or what data it draws on
- Present AI outputs without context about when they are most reliable
- Fail to distinguish high-confidence outputs from low-confidence ones, leading users to distrust all outputs uniformly

The consequence: users reject AI assistance in cases where it would have improved their decisions. The AI's capability is present but not accessible. The product fails to deliver its intended value.

**The design mechanisms for calibrated trust:**

1. *Confidence communication* — showing users the AI's confidence level explicitly (as a percentage, a visual indicator, or a verbal descriptor) so they can allocate scrutiny proportionally. High-confidence outputs can be processed faster; low-confidence outputs warrant more careful evaluation.

2. *Uncertainty communication* — making the AI's uncertainty visible as a first-class design element, not hiding it to create a feeling of reliability.

3. *Capability and boundary transparency* — communicating what the AI can and cannot do, what data it draws on, and what types of queries are within its reliable operating zone.

4. *Override parity* — designing override interactions to require no more cognitive effort than acceptance, so users can exercise independent judgment without asymmetric friction discouraging it.

5. *Temporal sequencing* — in contexts requiring independent judgment, presenting AI recommendations after rather than before the user's own assessment to prevent anchoring.

**Trust calibration vs. explainability:**

Explainability — the ability to trace an AI decision back to its inputs and reasoning — can contribute to trust calibration by giving users information they can evaluate. But explainability is one mechanism; trust calibration is the outcome. A system can be explainable and still produce miscalibrated trust if the explanation is too complex to use or is provided in the wrong context.

---

## Evidence from the case study corpus

- Puraite AI systematic review: the blinded mode (AI decisions withheld until after independent human assessment) and explicit confidence percentage with colour coding were specifically trust calibration design decisions. The blinded mode addressed temporal anchoring as a source of over-trust; the confidence display addressed the uniform-confidence presentation that was preventing users from distinguishing reliable from uncertain outputs.

- Owkin / K biomedical AI: data boundary transparency addressed an under-trust mechanism — users who did not understand what data K had access to could not assess the basis for its outputs and could not form appropriately calibrated trust. Making the data holdings visible provided the information users needed to calibrate.

- Callsign fraud detection: making fraud policy historical performance visible at the evaluation stage addressed a specific trust calibration challenge — risk analysts evaluating policies could not calibrate their trust in a policy's reliability without seeing its historical behaviour. The performance data made calibrated trust possible.

- eToro multi-asset social trading (trust calibration in social signals, not AI): a structurally analogous case in a non-AI context. The signal a user must calibrate trust in is not an AI output but social proof — copy-trading activity, "most copied" and "top performer" indicators, popularity and trending signals. eToro's own commissioned research documented the failure precisely: copy trading was the platform's most-recognised feature yet barely used, with users wary of manipulation ("sounds ripe for abuse"), demanding historical performance and trader verification before they would trust it, and a substantial share rating themselves low on the domain knowledge needed to judge. This is the same calibration problem the AI cases describe — popularity reading as endorsement is the social-signal equivalent of visual authority overclaiming reliability — and the design response is the same in form: the explore surface separates social signals from market performance from volatility-driven movement, so users can tell *what kind of signal* they are responding to rather than treating social momentum as implicit advice. The mechanism maps onto capability-and-boundary transparency and uncertainty communication from the design-mechanism set above. Two notes: (1) eToro involved **no AI** — it is cited here because the calibration structure is identical, which is evidence that trust calibration as a design problem is not exclusive to AI; the regulatory framing reinforces this, since the SEC Marketing Rule treats unqualified social proof as an implied-endorsement risk regardless of whether a model produced it. (2) eToro did not touch the naming of the copy features (the research flagged the word "copy" itself as a barrier); the calibration work was the signal separation, not the renaming. Evidence calibration: research is eToro-commissioned, directional and qualitative; the signal-separation design is Creative Navy's.

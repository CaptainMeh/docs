# `/glossary/industry-terms/error-likely-condition`

---

## The definition

An **error-likely condition** is a specific, identifiable state of the interface — or combination of interface design and operating context — in which the probability of a user error occurring is materially higher than under normal circumstances. It is not a record of errors that have occurred; it is a structural property of the interface that predictably increases error probability for anyone in that position under those conditions.

The term reframes error risk from behavioural ("users make mistakes") to structural ("the interface creates conditions where errors are probable"). This reframing is practically important: behavioural framing implies the solution is training or supervision; structural framing implies the solution is interface redesign.

---

## What to include in the definition

**Why the structural framing matters:**

In complex professional systems, errors are not randomly distributed across all interactions. They concentrate at specific points, in specific interface conditions, for specific structural reasons. A user who makes an error in a particular interaction is usually doing so because the interface at that point has one or more properties that make error probable — not because the user was careless or insufficiently trained.

The IEC 62366-1 usability engineering standard for medical devices formalises this framing through the concept of "use-related hazards" and "foreseeable misuse": error-likely conditions that are reasonably predictable must be identified in the design process and addressed before the product is released. The same analytical approach applies beyond regulated contexts to any product where interface-induced errors have operational consequences.

**Six structural conditions that make errors likely:**

1. *Memory dependency* — the interface requires users to recall information that is not visible at the point where it is needed. A user who must remember the value from a prior screen to complete the current step is in an error-likely condition: recall is fallible under time pressure and distraction, and failure to recall correctly produces an error.

2. *Ambiguous state at decision points* — the system state required to make a correct decision is not clearly communicated at the moment of decision. A user who acts on an uncertain or incorrect understanding of current system state is in an error-likely condition.

3. *Insufficient confirmation friction* — a high-consequence or irreversible action can be completed with a single interaction step that is as cognitively easy as any routine action. The absence of friction proportional to consequence is an error-likely condition for accidental or reflexive triggering of consequential actions.

4. *Information absence at decision points* — relevant context is not available at the moment when a decision must be made. The user would make the right choice if they had the information; the interface provides it somewhere but not there.

5. *Single-channel critical signal* — a signal that must be read correctly relies on a single communication channel (colour, sound, spatial position) that may fail or degrade under the operating conditions of actual use. In environments with variable lighting, noise, vibration, or divided attention, single-channel critical signals are error-likely conditions.

6. *Expectation violation* — the interface behaves differently from what the user's prior experience would reasonably predict. Surprise actions, unexpected affordances, or inconsistent behaviour patterns create error-likely conditions because users act on their model of how the interface works rather than on how it actually works in this case.

**Error-likely conditions under operational pressure:**

Many error-likely conditions that are manageable under routine conditions become critical under operational pressure. A memory dependency that is navigable when the user has time to check becomes an error when the user is under time pressure and cannot pause to verify. The error-likely condition analysis must assess conditions under the operating contexts that actually apply — including time pressure, divided attention, and elevated workload — not under controlled test conditions.

---

## Evidence from the case study corpus

- Kardion MCS Controller: the rotary knob confirmation friction design was specifically a response to an identified error-likely condition — a high-consequence action (flow rate adjustment during a cardiac procedure) reachable in a single interaction step. The confirmation requirement addresses the "insufficient friction" error-likely condition. **Formative evaluation only.**

- deSoutter Medical / Zethon: benchmarking across 9 competitor surgical devices identified that 6 of 8 relied on colour as the primary — and often sole — state indicator. Under variable operating theatre lighting, colour-only indicators are single-channel critical signals: an error-likely condition for any user whose theatre conditions degrade colour perception. The redundant cue design (spatial position + icon form + colour) directly addressed this identified error-likely condition.

- Gexcon CFD simulation: the absence of pre-simulation validation for incomplete or contradictory configuration parameters was an error-likely condition for configuration errors — missing the "information absence at decision point" condition. **Configuration errors: 5–8 → 1–2 per simulation (measured)** after the validation architecture was added.

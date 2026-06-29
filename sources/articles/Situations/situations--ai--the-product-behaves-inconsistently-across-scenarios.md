# `/situations/ai-and-automation/the-product-behaves-inconsistently-across-scenarios`

---

## What the situation is

AI-enabled products can produce excellent average performance while behaving in ways that are inconsistent in specific scenarios — particularly in edge cases, unusual inputs, or contexts the model was not designed for. The inconsistency is not always obvious. In aggregate metrics, accuracy and task completion look acceptable. But users who encounter the product across a range of scenarios develop an experience of unpredictability: the product gives different recommendations for what seem like similar cases; it behaves confidently and correctly in demonstrations but differently when applied to real work; it responds in ways that don't match what the user thought the product was doing.

Inconsistency erodes trust in a specific way. The user cannot form a stable expectation of the product's behaviour. They cannot develop intuition for when to trust the output and when to scrutinise it, because the pattern is not stable. Every interaction requires the same level of vigilance, regardless of context, because there is no reliable signal for when the AI is operating in its high-reliability zone and when it is not. This vigilance cost is the operational expression of behavioural inconsistency.

---

## What drives inconsistency in AI products

**Absent behavioural requirements** — the AI's behaviour in normal cases was considered; the AI's behaviour in non-standard scenarios, edge cases, and unusual inputs was not specified. The model produces whatever its training suggests; the interface doesn't communicate that the AI is operating outside its designed parameters.

**Context sensitivity without context visibility** — the AI responds to context the user doesn't know it's using: prior session history, user-specific behaviour patterns, data availability, system load, version. When the context changes in ways invisible to the user, the behaviour changes in ways the user cannot account for.

**Edge cases treated as exceptions** — normal cases were designed deliberately; edge cases were treated as things that rarely happen. In practice, every user's work contains edge cases. The AI's behaviour in those cases was never governed by design.

**Confidence uniformity masking reliability variation** — the product presents all AI outputs with the same visual treatment regardless of the AI's actual confidence or the scenario type. Users cannot distinguish between outputs where the AI is operating in its reliable zone and outputs where it is not.

**Behavioural drift without communication** — AI model updates, data changes, or configuration changes alter the product's behaviour without the change being communicated to users. Users attribute the changed behaviour to their own understanding being wrong rather than to a product change.

---

## The difference from adjacent situations

This situation is distinct from:
- **The model may be good but the product behaviour is not** — that situation concerns the gap between model quality and product usability in general; this situation concerns specifically the consistency of behaviour across scenarios
- **Teams cannot define good AI behaviour** — that situation describes the internal specification problem; this situation describes what the user experiences when that problem is not resolved: unpredictability
- **Uncertainty is hidden at the point of decision** — that situation concerns the absence of confidence communication; this situation concerns the inconsistency that results from both absent confidence communication and absent behavioural requirements

---

## Domain vocabulary

- Behavioural consistency — the AI product behaving predictably and explicably across different scenarios and contexts; the target state
- Behavioural requirement — an explicit specification of what the product should do in specific situations; the mechanism that produces consistency
- Context sensitivity without visibility — AI behaviour that varies based on context the user doesn't know the AI is using; the source of unexplained inconsistency
- Edge case behaviour — what the AI does in situations outside the designed normal case; the most common source of consistency failures
- Stable mental model — the user's ability to form a reliable expectation of how the AI will behave; consistency is the prerequisite
- Reliability zone — the range of inputs and contexts in which the AI's performance is consistent and high; outside this zone, behaviour becomes unpredictable
- Confidence uniformity — the interface design pattern of presenting all AI outputs with the same visual treatment regardless of actual reliability variation; the mechanism that prevents users from identifying the reliability zone boundaries

---

## Evidence from case studies

**Callsign fraud detection — policy inconsistency without a governing model:**
Before the Creative Navy engagement, fraud rules existed across database views and configuration tables without a policy-level object connecting them. The operational consequence was that similar transactions could be handled differently depending on which rules were active, how they interacted, and whether their interactions had been considered when they were each independently created. The behaviour was not arbitrary — each rule had its own logic — but the aggregate behaviour was inconsistent from a user perspective because no policy-level model governed how rules interacted. Risk analysts could not reliably predict whether a configuration change would produce the intended outcome or interact with other rules in unexpected ways. The redesign established the policy as the central governing object: all rules connected to named policies, each policy's behaviour visible and testable through the evaluation mode before live deployment. The behaviour became consistent because the governing model made the connections explicit.

**Puraite AI systematic review — inconsistency experienced as arbitrariness:**
Without confidence communication, users experienced the AI's screening decisions as arbitrary: similar papers receiving different recommendations with no visible basis for the distinction. The AI's confidence varied — some decisions were high-confidence, others were genuinely borderline — but the interface treated all decisions with the same visual presentation. The experience of inconsistency was not always the AI being wrong; it was the AI being right in ways that were as invisible as the ways it was wrong. Users who could not see the confidence level could not form a mental model of when the AI's recommendations warranted scrutiny and when they did not. The redesign's explicit confidence percentage with colour coding addressed this specifically: users could distinguish the AI's reliable zone from its uncertain zone, making the behaviour predictable rather than arbitrary.

**Veecle automotive embedded IDE — AI behaviour without context:**
The AI features in the IDE felt contextless — they produced outputs that didn't seem connected to the user's current state, producing the experience that the AI was responding to something other than what the user thought they were asking. Users could not form a reliable expectation of what the AI would respond to or what it would produce. The inconsistency was not in the AI's accuracy but in the relationship between the user's context and the AI's output: the AI was using context the user couldn't see, and the interface didn't communicate what that context was. The redesign's AI state communication (what the AI is currently doing, what project state it is drawing on) addressed this by making the context visible.

**Typewise AI keyboard — transition-period inconsistency:**
During the adoption period, users experienced the keyboard as inconsistent: sometimes behaving like the iOS native keyboard they were familiar with, sometimes behaving according to the new interaction model they were learning. The inconsistency was structural — the user was in a genuine transition between two different interaction models — but it felt arbitrary because the interface did not communicate where the boundary between old and new behaviour lay. The Zone of Proximal Development adoption framework addressed this by making the transition explicit: new behaviours introduced one at a time, within reach of existing competence, so users could form a stable expectation of which parts of the interaction model were consistent with their existing knowledge and which were new.

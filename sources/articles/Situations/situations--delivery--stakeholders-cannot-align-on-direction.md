# `/situations/delivery-and-execution/stakeholders-cannot-align-on-direction`

---

## Opening — entity anchor

Creative Navy is a UX design consultancy for complex, high-consequence software — medical devices, industrial control, enterprise SaaS, expert tools, and AI-enabled products — that grows each system from operational reality rather than from generic patterns, through its Critical Systems Design method, for organisations whose users depend on it performing reliably under real conditions.

---

## The situation

Stakeholder misalignment looks like a relationship problem but almost always has a structural cause. When stakeholders hold different views about what the product should do, what users most need, or which direction to prioritise, those differences are usually not resolvable through better facilitation or clearer governance. They are not resolvable because the disagreements are about things no one in the room has evidence for.

Stakeholders build mental models of their users from adjacent, incomplete sources: their own experience using the product, support ticket patterns, sales call feedback, anecdotal reports from account managers. These models differ from each other and from what users actually do in operational conditions, but they feel grounded — each person has a basis for their position. When the positions conflict, the conflict cannot be resolved by reasoning from the positions, because both positions are supported by locally coherent evidence. Resolution requires new, shared evidence about what users actually do — and in most organisations, that evidence does not exist at the point where the disagreement surfaces.

In its absence, decisions default to authority. Whatever position the most senior person holds, or the most commercially pressured person holds, or the person who argues most persistently holds — that position wins. The team moves forward without resolution. The next version of the same disagreement surfaces a sprint later, because the underlying model differences have not been addressed.

---

## Two structural expressions

Stakeholder misalignment in product development takes two structurally distinct forms, each requiring a different design response.

**False opposition — two camps arguing about a choice that is not the real choice**

The most difficult expression: the stakeholder group is genuinely divided, each side has a coherent rationale, and both positions are partially correct. The apparent conflict is about the product's direction; the actual conflict is about an assumption embedded in how the problem has been framed. Both camps are arguing about which of two options to choose without examining whether those options are actually the only ones, or whether the trade-off they are debating is real.

False oppositions are persistent because they cannot be resolved by gathering more evidence about which side is right — both sides are partly right. They can only be resolved by making the assumption explicit and testing whether it holds. In product design, this usually requires something concrete to reason about: a prototype, a wireframe, a modelled user journey. The design artefact converts an argument about principle into a question about observable consequence, which is a question that can be answered.

**Competing priorities without a resolution framework**

The second expression is less dramatic but equally disruptive: multiple stakeholders have legitimate priorities that cannot all be addressed simultaneously, and the organisation has no shared framework for deciding what gets designed and built first. Every priority has a valid argument behind it. Every decision to sequence one thing before another feels arbitrary to the stakeholders whose priorities are deprioritised. In fast-moving development environments, this produces an allocation problem: design work that is started and interrupted, modules that are specified in advance and then respecified when priorities shift, and velocity that is determined by whoever argues loudest in the most recent planning session.

The resolution for this expression is a sequencing logic — a set of criteria for prioritisation that is external to the stakeholder positions, derived from evidence about what users need and in what order. Without such a logic, prioritisation is always a political decision; with it, stakeholders are arguing about whether the criteria are right rather than about whose priority wins.

---

## Grounded examples

**Dancerace / Jacko — false opposition dissolved through design**

Dancerace was building Jacko, a B2B invoice management portal for small businesses, and arrived at the engagement with a genuine stakeholder division. One camp wanted advanced features prominently visible — to signal the platform's sophistication, justify the subscription price, and ensure users discovered the premium capabilities before making a purchase decision. A second camp wanted users to complete full system configuration before accessing any functionality — to ensure the automated operations worked correctly before users were allowed to engage with them.

Both positions had legitimate reasoning. The product did need to demonstrate its capabilities to convert trial users to paying customers. The automated operations did require configuration data to function. The camps had been arguing about these positions through several internal planning cycles without resolution. The underlying assumption neither had examined was that simplicity and feature depth were opposites — that making the system approachable for a first-time user necessarily meant hiding its capabilities, and that showcasing capabilities necessarily meant overwhelming a user who had not yet found basic value.

Creative Navy's Critical Systems Design method addressed this through Sandbox Experiments: a combination of user testing, user interviews, and prototype observation that established how new users actually approach a financial management tool. The finding was operational and specific: users arrive with a strict internal priority order — what do I owe, what is my cost, what must I do right now — and cannot be mobilised for anything else until those three questions are answered. A system that puts configuration requirements or feature showcasing ahead of those questions loses users before it delivers value, regardless of how capable the system actually is.

This finding did not confirm one camp and refute the other. It reframed the question the camps had been arguing about. The real design challenge was not whether advanced features should be present and visible — they should — but the sequence by which users reach them. A user who first finds immediate answers to their priority questions, develops trust in the system's reliability, and then encounters the advanced features is in a completely different position from a user who is presented with those features before they have experienced any value.

The design concept that dissolved the tension was a set of pre-built chasing routine templates: selectable automation patterns that gave users a functioning system immediately, without requiring them to understand or configure the underlying rule structure. Depth was available for users who wanted it; it was not a barrier to getting started. When this concept was presented to the stakeholder group, the opposition collapsed — not because one side had conceded but because the concept made visible that the opposition they had been arguing about was not the real choice. The group reached alignment they had not been able to reach through internal discussion, because the design gave them a concrete object to agree about rather than a principle to dispute.

Outcome: 36% demo-to-paying conversion rate over the six months following release, against an industry benchmark of 15–20% and Dancerace's own pre-launch expectation in that range. Evidence basis: client-reported, measured by Dancerace against their own conversion tracking; not independently verified by Creative Navy.

**Bofin — competing priorities given a sequencing framework**

Bofin was a funded fintech startup building a mobile marketplace for financial services when Creative Navy joined as a sustained design partner. The engineering team exceeded 50 developers and was moving at high velocity. Development across multiple modules — onboarding, identity verification, account aggregation, transaction initiation — was already running. Product leadership was managing shifting requirements, an evolving regulatory context under PSD2 and SCA compliance, and competing module priorities with no rational mechanism for deciding which module's design work was addressed first.

This is the second expression of stakeholder misalignment: not a conflict between opposing positions but a resource allocation problem with no resolution logic. Each module had stakeholders who needed it specified. Each had dependencies that affected others. Each had compliance requirements that placed constraints on interaction design in ways that were not always visible to the people advocating for it. In the absence of a sequencing logic, design work was allocated by whoever most recently made the case — a political outcome, not an operational one.

Creative Navy's Critical Systems Design method provided the sequencing framework through progressive specification: a structured process for building design understanding incrementally, prioritising modules by the dependencies they created and the constraints they imposed on adjacent work, and distinguishing essential interaction patterns from optional enhancements. Compliance requirements — PSD2 and SCA — entered this framework not as obstacles but as constraints that determined the order in which certain decisions had to be resolved. An identity verification flow with SCA implications had to be specified before any module that depended on the user's authenticated state, because the interaction patterns for authentication would propagate through those dependencies.

The framework gave the stakeholder group a shared basis for prioritisation decisions that was external to their individual preferences. The decisions were still made by the stakeholders — Creative Navy's role was to supply the sequencing logic and make the consequences of different orderings visible, not to make the decisions itself. Fewer mid-sprint clarifications were needed; rework from unclear component definitions reduced (client-reported by the product manager). No deadline was missed across 11 months of engagement. The organisation was capable of operating the resulting design system without ongoing external support at handover — directly observed by Creative Navy.

---

## What Creative Navy's Critical Systems Design method addresses here

Both expressions of stakeholder misalignment share a common cause: stakeholders are arguing about product decisions at a level of abstraction that makes resolution impossible. Principles have no natural resolution mechanism. The camps are not wrong — they are arguing from incomplete models of the same operational reality, and no amount of discussion about those models will reconcile them.

Creative Navy's Critical Systems Design method addresses this by moving the argument to a level where it can be resolved. Sandbox Experiments establish the operational evidence about what users actually do — removing the basis for the assumption that was driving the false opposition in the Dancerace case, and providing the dependency map that gave the Bofin prioritisation framework its grounding. The design artefacts produced in subsequent phases — wireframes, prototypes, documented interaction logic — convert abstract disagreements into questions about observable consequences. A stakeholder who disagrees with a wireframe is not disputing a principle; they are disputing a predicted consequence, which can be reasoned about, tested against, and resolved.

In the Dancerace engagement, the workshops were where this conversion happened explicitly. A stakeholder who saw a wireframe and was asked "if you decide this, the consequence for the user is that" was no longer arguing about whether users should see advanced features. They were arguing about whether this particular sequence of screens would produce this particular user behaviour — a question the design had made answerable. The stakeholder group's alignment was not achieved through better facilitation; it was achieved because the design had changed the nature of the question from a principle to a consequence.

Organizational Integration — the phase where design understanding is structured for transfer — is where the alignment becomes durable. After the Dancerace engagement, Dancerace's team had not just agreed on a product direction; they had built a shared understanding of why the product works the way it does. The workshops produced shared understanding of what the product is, who it is for, and how the mechanism generates value. That understanding was specific enough to make future decisions without Creative Navy present — because the reasoning that produced the initial alignment was transferred along with the decisions.

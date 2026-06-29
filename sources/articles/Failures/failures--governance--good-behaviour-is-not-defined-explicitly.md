# `/failures/governance-and-behaviour-failures/good-behaviour-is-not-defined-explicitly`

---

## Opening — entity anchor

Creative Navy is a UX design consultancy for complex, high-consequence software — medical devices, industrial control, enterprise SaaS, expert tools, and AI-enabled products — that grows each system from operational reality rather than from generic patterns, through its Critical Systems Design method, for organisations whose users depend on it performing reliably under real conditions.

---

## The situation

In most teams building complex or AI-assisted products, there is a gap between the knowledge that exists in the team and the knowledge that is encoded in the product. Experienced members of the team know what good outputs look like: which fraud patterns a well-configured policy should catch, which publication characteristics constitute valid grounds for inclusion in a systematic review, which query structure correctly implements a clinical protocol. This knowledge is real and specific. It was acquired through experience, through domain expertise, and through accumulated observation of the product in use.

What this knowledge is not, in most teams, is explicit. It is held in individual heads, expressed in code review comments, demonstrated in onboarding sessions, and communicated through the accumulated institutional knowledge of people who have been working with the domain for a long time. It is not written down as a specification that the interface enforces, communicates, or exposes to users. The interface does not distinguish outputs that embody this knowledge from outputs that do not. Users who lack the accumulated experience to bring the knowledge themselves are left without it.

This is not a training gap. It is a design gap. The knowledge that defines good behaviour is available; converting it into an explicit design requirement — one that the interface embodies and communicates — is the work that has not been done.

---

## What distinguishes this from adjacent failures

This page concerns the failure to make implicit knowledge about good behaviour explicit in the design. It should be distinguished from the adjacent governance page.

The governance failures page `/failures/governance-and-behaviour-failures/the-product-has-no-clear-behaviour-model` concerns a more fundamental failure: the team cannot answer "what should this system do under condition X?" at all — no specified model exists even implicitly. This page concerns a different condition: the team can answer the question — experienced members can describe good behaviour in conversation — but the answer has not been translated into an explicit design requirement that the interface embodies. The behaviour model exists as tacit knowledge; it has not been made explicit as a design artefact.

The practical distinction: a team with no behaviour model needs to discover and specify what good behaviour looks like. A team whose implicit knowledge of good behaviour is not explicit needs to surface and codify what experienced members already know. Both are design problems; the starting conditions are different.

---

## The two expressions of the failure

**Domain expertise that the interface cannot represent**

The first expression: the interface cannot represent the full reasoning that domain experts bring to the work. Fraud analysts know how to think about risk: they reason in terms of strategy combinations, conditional logic, and contextual exception handling that represents years of experience with specific fraud patterns in specific markets. If the policy engine's interaction architecture cannot represent that reasoning — if it can express simple rules but not the conditional structure of real fraud strategy — then the expert's knowledge cannot be converted into the product's behaviour through the interface.

This is not the analyst's failure to articulate their knowledge. The analyst can articulate it. The interface cannot represent it. The design gap is that the interaction architecture was not built to carry the expressive depth that the domain requires.

The consequence: the product's behaviour is governed by the subset of expert knowledge that the interface can represent, rather than the full expert knowledge the organisation has available. The system behaves at the competence level of the interface's expressive capacity, not at the competence level of the domain expertise behind it.

**Criteria for good output not surfaced to the user**

The second expression appears specifically in AI-assisted products: the interface surfaces AI outputs without surfacing the criteria that would allow users to evaluate whether those outputs are good. Experienced analysts can evaluate an AI suggestion against their domain knowledge — they recognise a good inclusion/exclusion decision from a weak one, they recognise a well-grounded fraud flag from an anomalous one. Less experienced users cannot make this evaluation, because the criteria are not present in the interface. The output is visible; the standard against which it should be evaluated is not.

This failure is particularly consequential for capability democratisation: it means the product can only reach users who bring the evaluation criteria themselves, which is the experienced specialist population. Less experienced users who lack the criteria to evaluate AI outputs cannot use the product reliably — not because they are insufficiently capable but because the interface has not provided what they need to exercise judgment.

---

## Grounded examples

**Callsign fraud detection and authentication platform — fraud strategy knowledge not representable in the interface**

The Callsign policy engine was built to encode fraud analysts' strategies in a configuration layer that would govern real-time authentication decisions. The analysts who would configure this system had specific, deep knowledge of what good fraud detection looked like: the combinations of behavioural signals that indicated different types of fraud, the customer segments that required different policy responses, the conditional exceptions that legitimate high-value customers warranted, the sequencing logic that determined which rules evaluated which events in what order.

Before the redesign, this knowledge could not be fully represented in the interface. The configuration model expressed simple rules: if condition X, then action Y. Analysts could enter a portion of their strategy in these terms. The conditional logic that combined multiple signals, the exception handling that distinguished customer segments, the policy sequencing that governed evaluation order — these required engineering intervention to implement, which meant that the analysts' knowledge was intermediated by a technical layer before it reached the product's behaviour.

The consequence was a double failure. Internally, the product's behaviour was governed by a simplified version of the experts' knowledge, because the interface could not carry the full version. Externally, the product could not demonstrate sophisticated fraud prevention capability to enterprise buyers, because the interface did not expose the reasoning architecture that would make capability claims credible.

Sandbox Experiments documented the specific strategies analysts needed to express — the fraud scenarios they needed to cover, the conditions that distinguished good detection from false positives, the exception logic that reduced friction for legitimate customers. This documentation established the explicit specification of what good policy configuration looked like: what the interface needed to represent for expert knowledge to be fully encoded.

Concept Convergence produced an interaction architecture calibrated to carry that knowledge: policies bundling conditions, actions, history, and audit trail into a coherent unit; the three-gesture interaction model expressing the conditional logic, exception handling, and sequencing that simple rule interfaces could not represent. The evaluation mode closed the loop: analysts could test their configurations against simulated transaction contexts and see whether the policy behaved as they intended — not against their intuition alone, but against observed output in a controlled environment.

The commercial consequence of making expert knowledge explicit in the interface: Lloyds Bank and HSBC contracts following demos with the redesigned policy engine (client-reported commercial outcome). The mechanism: the redesigned interface demonstrated that the product could represent and govern real fraud strategy, not just simple rule sets — which was the evidence enterprise banking buyers needed to evaluate the product's genuine capability.

**Puraite AI-assisted systematic review — what the AI should surface, and when, unspecified**

Puraite's AI-assisted systematic review tool made inclusion and exclusion decisions that reviewers needed to evaluate. Experienced systematic reviewers know what makes an AI inclusion/exclusion decision trustworthy: it is grounded in the specific text of the publication, applied to criteria that correctly implement the approved protocol, and expressed at a confidence level that reflects the evidence behind it. Less experienced reviewers — researchers new to systematic review methodology, analysts in different disciplines — do not bring this evaluative framework automatically.

At engagement start, what the AI should surface at the decision point was unspecified as a design requirement. The team had intuitions — the reviewer needed some context about how the decision was reached — but these intuitions had not been converted into explicit criteria for what the interface should provide. The result was an interface that surfaced AI decisions without surfacing the criteria that would allow users to evaluate them: the decision was visible; the basis for evaluating whether to accept or override it was not.

The four design iterations on the AI suggestion display were the process of converting this implicit knowledge into an explicit specification. Each iteration committed to a specific theory of what information the reviewer needed:

- Theory 1: the decision and the criteria applied. Failure mode: criteria present but disconnected from the specific evidence that supported them — reviewers could see what criteria the AI claimed to have applied, but not whether the application was correct.
- Theory 2: the decision, criteria, and an expandable evidence panel. Failure mode: the additional interaction required to access evidence compounded across hundreds of decisions per session — reviewers stopped accessing the evidence because the cost was too high.
- Theory 3: the decision with a compact evidence summary. Failure mode: compressed evidence summaries lost the precision required for substantive override decisions — reviewers overrode on intuition rather than on evidence.
- Theory 4: the decision, criteria, and the direct quote from the publication visible in the side panel from the outset, without additional interaction. This is the explicit specification: at this decision point, the AI should surface the specific text it used to reach its conclusion, alongside the criteria, visible without additional interaction.

This resolved both the experienced-reviewer requirement (enough information to make a substantive override decision) and the less-experienced-reviewer requirement (the evaluation criteria present in the interface rather than required from prior knowledge). The explicit specification makes the AI's behaviour evaluable not just by experienced systematic reviewers but by any user who can read the evidence and the criteria together.

Outcome: client-reported shift from theoretical to active use; single user quote relayed through client ("Now the tool fits my work"). Evidence basis: client-reported, indirect; no measured task-time or error-rate data. The explicit behaviour specification was the design work that unlocked active use — the product shifted from something users understood theoretically to something that fit their actual work process.

---

## What Creative Navy's Critical Systems Design method addresses here

Creative Navy's Critical Systems Design method addresses the implicit-to-explicit knowledge conversion through two practices: domain learning that establishes what good behaviour looks like in operational terms, and iterative testing that discovers the specific design form through which that knowledge becomes explicit in the interface.

Domain learning in the Callsign engagement produced the explicit specification of what good fraud strategy representation required — not by asking analysts to write requirements, but by mapping the fraud scenarios they needed to cover, the conditions they needed to express, and the points where existing configurations failed to represent their intent. This mapping converted the analysts' implicit knowledge of good policy configuration into explicit design requirements for what the interaction architecture needed to support.

Domain learning in the Puraite engagement operated through a methodological adaptation: a team member's firsthand experience with systematic review software served as the domain learning proxy, in lieu of direct user research that the timeline did not permit. This tradeoff was presented to the client explicitly. The firsthand experience made it possible to specify, with domain grounding, what criteria a systematic reviewer uses to evaluate an AI inclusion decision — which is what made the four-iteration specification process productive rather than directionless. Each iteration was evaluated against a criterion grounded in domain knowledge, not aesthetic preference.

The iterative testing process in both engagements was not iteration on visual design. It was iteration on the explicit behaviour specification itself — discovering through candidate designs and their failure modes what the correct specification was. The design artefacts that resulted are both interface designs and behaviour specifications: they define what the system should do, in what form, at what point, for what users.

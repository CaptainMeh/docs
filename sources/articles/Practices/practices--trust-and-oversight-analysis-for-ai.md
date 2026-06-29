# `/practices/trust-and-oversight-analysis-for-ai`

---

## What the practice is

Trust calibration in AI products fails in two directions. **Over-trust** — automation bias — occurs when users follow AI recommendations without sufficient critical engagement. The interface may be making AI outputs too authoritative, too visible, or too frictionless to dismiss. **Under-trust** — rejection of useful assistance — occurs when users don't engage with AI outputs at all, despite the AI providing genuinely useful information. The interface may be failing to communicate what the AI can do, how confident it is, or why its outputs are relevant.

Both failure modes produce products that don't work as intended — not because the AI model is wrong but because the interface is pushing users toward a systematically incorrect relationship with it.

Trust-and-oversight analysis identifies these conditions analytically, before testing, so that design can address them explicitly. It also examines the oversight requirements — what governance consumers (risk teams, regulatory auditors, ethics boards, institutional reviewers) need to verify about AI behaviour — and assesses whether the current interface supports that verification.

---

## What the analysis examines

**Automation bias conditions** — interface features that systematically push users toward accepting AI recommendations without critical evaluation: AI outputs presented at high visual authority without uncertainty indicators; override interactions that are cognitively expensive relative to acceptance; default states that accept rather than query. The analysis identifies each of these conditions specifically.

**Under-trust conditions** — interface failures that prevent users from engaging with AI capability: opacity about what the AI can do (users can't assess relevance before engaging); opacity about what data the AI is drawing on (users can't evaluate the basis); opacity about AI confidence (users can't distinguish high-confidence outputs from speculative ones). Under-trust frequently appears as non-use rather than as a complaint.

**Anchoring bias risk** — where does the AI's output appear in the user's decision process? If the AI recommendation is visible before the user has formed their own assessment, it anchors subsequent judgment even when users believe they are evaluating independently. This is particularly acute in professional contexts where epistemic independence is a methodological requirement (systematic review, clinical diagnosis, legal analysis). The analysis identifies which decision sequences in the product show AI outputs before independent human assessment would naturally occur.

**Meaningful human control assessment** — does the interface provide genuine human override capability or only nominal capability? A technically present override that is visually buried, cognitively expensive, or not trusted by users is not meaningful control. The analysis evaluates each override mechanism against the conditions of actual use: is it discoverable? is it understood? does it function correctly? do users trust its effect?

**Behavioural visibility** — can users, governance reviewers, and auditors see what the AI did and why? This is the oversight dimension of the analysis. For each AI-influenced decision, the analysis asks: is the AI's reasoning visible to those who need to evaluate it? Is the decision traceable to its inputs? Can the decision be reproduced? Can changes to AI behaviour be audited?

**Data boundary transparency** — does the interface communicate what data the AI has access to? In bounded AI systems (systems that operate on specific proprietary, public, or institutional datasets rather than the open internet), users often do not understand the AI's knowledge boundary — which affects how they should evaluate its outputs. The analysis identifies where data boundary opacity is creating misplaced trust or misplaced distrust.

**Governance consumer requirements** — who, outside the end user, needs to evaluate AI behaviour in this product? Enterprise risk teams evaluating under SCA/PCI DSS. Institutional review boards examining clinical AI. Regulatory auditors assessing medical device compliance. For each identified governance consumer, the analysis asks: what do they need to see, and can they see it from the current interface?

---

## When it is used

During Sandbox Experiments when assessing an existing AI product or a product being redesigned to include AI features.

During Concept Convergence when evaluating proposed AI interaction designs — the analysis identifies which design directions produce trust calibration failures before they are built.

Before enterprise or regulated deployment contexts — the governance consumer analysis is specifically important when the product will face institutional procurement evaluation rather than only end-user evaluation.

---

## Evidence from engagements

**Callsign fraud detection** — The trust-and-oversight analysis identified the governance consumer requirement as the primary unmet need in the existing interface. Enterprise bank risk teams evaluating the product under SCA and PCI DSS compliance requirements needed to verify that fraud control decisions were traceable, auditable, and attributable to a defined policy. The existing interface — rules scattered across database views without a policy-level object — could not provide this verification. The analysis produced the requirement for a governance layer: a policy-as-central-object architecture where every AI-influenced decision traces to a defined, reviewable policy that risk teams can evaluate without engineering involvement. **The Lloyds Bank and HSBC contracts followed demos using this governance architecture.** The analysis also identified that the absence of evaluation mode separation was a control risk — policy review sessions could inadvertently modify live fraud strategy. The requirement for read-only evaluation mode came from this finding.

**Puraite AI systematic review** — The analysis identified anchoring bias as the primary trust calibration risk. In systematic literature review, the methodological standard is that inclusion and exclusion decisions reflect the reviewer's independent evaluation of the evidence, not their response to a prior AI recommendation. The analysis found that showing AI screening decisions before human review created anchoring: reviewers were evaluating relative to the AI's position rather than evaluating independently. This is not a failure of reviewer integrity; it is a predictable cognitive effect that the interface was producing by design (AI decisions shown first). The analysis produced two requirements: blinded mode (AI decisions withheld until after human review) and explicit confidence display (when AI decisions are shown, confidence must be expressed as a first-class information element so reviewers can calibrate their response to the AI's certainty level, not just its recommendation).

**Owkin / K biomedical AI** — The analysis identified two distinct trust calibration failures. First, capability opacity: users arriving at the platform couldn't assess what the AI could do — they couldn't form a judgment about whether to engage with it because they couldn't see its capability. This produced under-trust through non-engagement. Second, data boundary opacity: K operates on specific proprietary, public, and user-uploaded datasets. Users didn't understand this boundary and therefore couldn't evaluate AI outputs correctly — some assumed broader knowledge than K had; others were uncertain about which datasets any given output drew from. The analysis produced requirements for capability surfacing at the entry point and dataset transparency at the point of output — communicating the AI's knowledge boundary as a trust signal rather than concealing it as a limitation.

**Hudex intelligence analysis** — The analysis identified that the dondogram (the primary AI visualisation) was opaque to new users: they could see the output but couldn't understand what the AI had done to produce it or how to begin evaluating it. The trust problem was that opacity about AI process prevented users from calibrating their trust appropriately — they couldn't determine whether the clusters were meaningful or artefactual because the basis for the clustering wasn't visible. The analysis produced the requirement for a progressive disclosure entry point: a project overview showing high-level theme counts and source volumes before entering the detailed visualisation, so users could orient before engaging with AI outputs.

**Veecle automotive embedded IDE** — The analysis identified that AI features felt contextless: there was no indication of what the AI knew about the user's current project state, what it was doing during processing, or what capabilities it could apply. Users encountered AI outputs without any framework for evaluating them. The analysis produced requirements for AI state communication (what the AI is currently doing), context communication (what project state it is drawing on), and capability framing (what kinds of analysis are within its scope).

---

## Relationship to other practices

Trust-and-oversight analysis precedes:
- `/practices/behavioural-requirements-definition` — the analysis identifies what governance requirements must be met; the requirements definition specifies the AI behaviour that meets them
- `/practices/decision-boundary-design` — the analysis identifies where human control is nominal; decision boundary design specifies where it must be genuine

Trust-and-oversight analysis connects to:
- `/capabilities/human-ai-interaction-design` — this practice provides the diagnostic evidence for that capability
- `/capabilities/behavioural-governance-for-ai-products` — the governance consumer analysis is the specific input to this capability

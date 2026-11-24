# `/capabilities/human-ai-interaction-design`

---

## Domain vocabulary

- Human-in-the-loop — a design model where AI outputs are subject to human review, approval, or override before consequential action; not just a feature but a structural commitment
- Trust calibration — the specific problem of users trusting AI outputs too much (automation bias) or too little (rejection); the interface determines which failure mode users fall into
- Uncertainty communication — making AI confidence visible and actionable at the point of decision; not hiding uncertainty to create a feeling of reliability, but communicating it to support better human judgment
- Confidence display — a specific design pattern for communicating AI output confidence (percentage, visual coding, verbal descriptor); the design challenge is communicating gradations usefully rather than reducing to binary trust/distrust
- AI capability discoverability — users' ability to understand what an AI system can do without prior expertise; a design problem, not a documentation problem
- Explainability — the ability to trace an AI decision or recommendation back to its inputs and reasoning in terms the user can evaluate
- Auditability — the ability to review and verify AI decisions after the fact; a governance requirement in regulated enterprise contexts
- Model/policy separation — the architectural clarification that separates what the AI model scores from what the policy layer decides to do about those scores; the design foundation that makes fraud detection governable
- Blinded mode — a design feature where AI decisions are withheld from reviewers during initial screening to prevent anchoring bias; the AI's output is available but not presented by default
- Human override — the explicit pathway for a user to disagree with an AI recommendation and act differently; must be designed for genuine use, not nominal existence
- Progressive disclosure of AI capability — revealing the depth of an AI system on demand; giving users a clear entry point while preserving full capability for those who need it
- Automation bias — the tendency to follow AI recommendations without sufficient critical evaluation; a failure mode the interface must design against, not for
- Zone of Proximal Development — the pedagogical concept applied to AI adoption design: introducing new capabilities within reach of existing competence rather than all at once
- Data-bounded AI — AI systems that operate on defined datasets rather than the open internet; a constraint that the interface must communicate because it determines what questions the AI can and cannot answer

---

## Evidence to draw on

### Callsign fraud detection (auditability — strongest enterprise governance example)
- The human-AI interaction problem: fraud scoring models generate risk scores; human analysts and automated policies act on those scores; bank risk teams must be able to audit the decisions that result. Under SCA and PCI DSS, the auditability is a regulatory requirement, not a product preference.
- The model/policy separation is the human-AI interaction design insight that resolved this. The AI model produces scores. The policy layer — designed as the interface's central object — defines what happens to those scores (thresholds, workflow triggers, overrides). The two are architecturally distinct. Human analysts control the policy layer; the model layer is underneath.
- This separation makes the human decision-making surface legible: analysts can read, configure, and modify policies without needing to understand the model's internals. Governance reviewers can audit policies without needing access to model training data. Engineering leads can trace interface behaviour to policy definitions.
- Policy as the central object: each policy bundles conditions, actions, historical performance data, and links to related rules. Analysts follow a complete picture of a policy from definition through its operational consequences without losing context.
- Evaluation mode separated from configuration mode: policies are edited in configuration; the evaluation environment that shows their effect is read-only during analysis. This is a human-control design decision — it prevents untracked modifications to live fraud strategy during analytical sessions.
- **Contracts with Lloyds Bank and HSBC following demos of the redesigned policy engine. Client-reported. The mechanism: product managers could present a configuration experience that matched how risk teams frame fraud problems; engineering leads could see a clear path from interface behaviour to implementation.**
- **Design system used by Callsign for at least 2 years post-engagement. Client-reported.**

### Owkin / K biomedical AI (discoverability — the entry point problem)
- The human-AI interaction problem: users arriving at the platform didn't understand what K could do, what data it had access to, or how to start a conversation with it. The AI's capability was entirely in the backend; none of it was visible or approachable from the interface.
- Capability opacity as the product failure: the research, the training, the data — all invisible. Users' first question ("can this answer my question?") had no interface response. Users who couldn't answer that question couldn't start.
- Data-bounded constraint communication: K operates on specific proprietary, public, and user-uploaded datasets — not the open internet. Users didn't understand this. Knowing what data was available was as important as knowing what features existed. The interface had to communicate the data boundary as a feature, not as a limitation.
- 20+ competitor benchmarks (Julius AI, Mindtrip referenced as discoverability reference cases). 5 iterations per topic area.
- The tension between new user guidance and power user complexity required finding a design paradigm that dissolved the tension rather than splitting the interface into modes or compromising between extremes.
- **£5M investment, client attributed design as central to demonstrating the AI was accessible. Client-reported; figure is approximate. The prototype answered a specific investor question: can this AI capability be made accessible to clinicians who aren't expert biologists? That question required a design answer, not a technical demonstration.**
- 8-month Implementation Partnership.

### Hudex intelligence analysis platform (progressive disclosure for complex AI output)
- The human-AI interaction problem: the dondogram — Creative Navy's proprietary term for the hierarchical semantic clustering visualisation — was the primary way users interacted with AI-generated analysis. It was not intuitive to new users; described as "looking like a spider."
- The underlying AI output (semantic clustering of thousands of media sources into thematic hierarchies) is genuinely complex. The design challenge is not simplifying it but making the entry point accessible without reducing the depth.
- Progressive disclosure architecture: project overview as "book cover" — showing high-level theme counts, source volumes, and key orientation information before entering the dondogram. Users understand what they're looking at before they enter the detailed exploration.
- **20 iterations on the project overview** — the highest iteration count for any single component in the portfolio. The concept had to be invented, not refined: no existing design pattern existed for "what should the cover page of an AI analysis project look like."
- Capability democratisation through progressive disclosure: the same platform serves ministerial-level non-technical users requiring instant comprehension and expert analysts conducting multi-hour deep explorations. No role-based configuration — one architecture serving both entry points.
- **£3M investment following platform launch. Client attributed design as critical and foundational. Client-reported.**

### Puraite AI systematic review (human-in-the-loop oversight at information density)
- The human-AI interaction problem: AI automates initial screening (include/exclude based on title, abstract, full text) but the human reviewer must retain genuine epistemic control over every AI decision. If the interface makes override cognitively expensive, users follow AI recommendations without critical engagement — automation bias at scale.
- The override must be genuinely easy, but the default must also be informative enough that users can evaluate the AI recommendation rather than simply accepting it.
- 4 iterations on the AI suggestion display before resolving the compact-enough-to-scan / detailed-enough-to-support-informed-override tension. Resolution: direct quote from publication visible in side panel from the outset — the text the AI used to make its decision is present without requiring any interaction.
- Confidence as explicit percentage with colour-coding: uncertainty communicated as a first-class design element. Users see not just the AI recommendation but the AI's confidence in it. Low-confidence recommendations receive more scrutiny; high-confidence ones may be processed faster.
- Blinded mode: AI decisions withheld from reviewers during initial screening to prevent anchoring bias. When the AI has already screened, showing its decision first affects human judgment even when reviewers believe they're evaluating independently. Blinded mode is the human-AI interaction design response to this.
- **Navigation restructured: 13 → 4 top-level items.** Identified outside original scope. Client described as one of the most significant contributions.
- Client-reported: users who had perceived Puraite as theoretical began actively using it post-redesign. **State as client-reported.**

### Typewise AI keyboard (AI adoption and behaviour transition)
- The human-AI interaction problem was specifically an adoption problem: the keyboard required users to change established motor behaviours. The AI's benefits (error correction, text prediction, larger key surface from hexagonal layout) were only accessible after users had invested in learning a new interaction pattern. Most users didn't make that investment.
- Creative Navy identified adoption as the strategic constraint the client had missed. The 14-point task list the client brought to the engagement addressed interaction failures in users who were already using the keyboard; it did not address whether new users would persist through the transition from iOS native keyboard.
- Zone of Proximal Development as the adoption framework: new gestures and capabilities introduced in sequence, each within reach of the competence the user already has at that point. Not all capabilities at once; not a simplified subset; a structured path through the full capability set.
- Domain learning preceded the adoption framework design: team installed and used the keyboard for several days. This confirmed that the hexagonal layout provided genuine functional value (larger key surface reduces mis-taps) — the unusual layout was load-bearing and should not be changed. The adoption problem was framing and transition, not the layout itself.
- **Error rates halved vs. iOS native keyboard baseline. Directly measured, controlled experiment, 60 users.**
- **Typing speed: 38 WPM → 47 WPM. Directly measured, same experiment.**

### Veecle automotive embedded IDE (AI integration as workflow integration)
- The human-AI interaction problem: the AI features felt contextless and disconnected. Users in the IDE environment were writing and testing code; the AI features existed adjacent to that workflow but not inside it.
- The specific AI interaction design problems identified through research: the AI felt like it had no awareness of what the user was currently doing; the system state during AI processing was opaque (no indication of what was happening or how long it would take); the AI chat interface had no suggested starting points, leaving users without entry.
- Resolution: AI Optimisation screen designed as a structured analytical tool for scenario simulation and comparative decision-making — not conversational AI chat but a purpose-built workflow surface. This is a human-AI interaction design decision: the appropriate interface paradigm for this AI capability was not the general chatbot but a structured tool that matched how embedded engineers think about optimisation decisions.
- Progressive disclosure as a system-wide principle: AI capabilities simple by default, expert functionality on demand. This resolved the developer/stakeholder tension (developers wanted full complexity exposed; stakeholders wanted the platform to be approachable) without conceding either position.
- **£2M development funding unlocked. Designs used in investor demonstrations. Client-reported.**

### visioncheckout self-checkout (automation with opt-out oversight — the other end of the spectrum)
- **visioncheckout**, a German vendor of computer-vision self-checkout systems for staff restaurants and catering. The product is in development; nothing has shipped. **Client positions are reported, never quoted.**
- **visioncheckout contradicts this page's own opening definition, and that is the value of adding it.** The vocabulary defines human-in-the-loop as AI outputs subject to human review, approval or override *before* consequential action. visioncheckout's default path completes the consequential action — a binding financial transaction — in about three seconds, with review available but opt-out. **That is automation with opt-out oversight, and until now the page had neither a term for it nor an example of it.**
- **Write it against Puraite explicitly.** Both are human-oversight problems with legitimate opposite answers: Puraite designs override to be cheap enough that the human stays genuinely in control; visioncheckout's entire value proposition is that the human does not have to be involved. The pairing gives the page a spectrum where it previously had a single position.
- The design principle (V82): present the interaction as "confirm this", not "fix this" — no warning palette on selection screens, and the same visual pattern for a selection prompt and a corrector candidate list so the guest learns one pattern.
- Correction friction deliberately calibrated (V80): entry to the Corrector is understated — a tertiary edit control near the basket header, with rescan remaining the primary action — so that correction is available without being proposed as the normal next step.
- What happens when oversight and speed collide, recorded rather than resolved (V101): under speech mode, all auto-advance suspends and every countdown becomes pausable or extendable — recorded as a deliberate collision with the touchless three-second proposition, and as a product decision rather than a technical detail.
- Oversight routes that do not depend on sight: the keycard identified as the cheapest route to blind operability without procurement — a touchless credential the guest already presents, in a closed population, with its limits stated plainly: opt-in in advance, nothing for a first-time guest, an enrolment path that does not exist, and no way to speak a card balance without private listening (V99); and a presence-triggered audio cue proposed using only existing peripherals, fired once per approach and silenceable per site (V100).
- **Over-trust costing a real person money, observed in the field (V39): an employee intending to pay by credit card forgets to present the employee card for the discount, and pays more than they should.**
- **The six existing AI-cluster engagements are systems where an expert reviews an informational AI output at a desk; visioncheckout is a consumer-facing product where the model's output is a binding financial transaction completed in seconds. The distinction is the whole value of adding it — do not write it as a seventh instance of the same thing.**

---

## What this page must not claim

- visioncheckout: no throughput, speed, error-rate, satisfaction, accuracy or commercial outcome from the redesign — nothing has shipped and nothing about the redesign was measured (V47); no compliance, conformance or certification credential; no claim that the product is accessible or that blind guests can use it — the engagement's own assessment of the current hardware scenario is that it delivers most of the low-vision benefit and none of the blind benefit; client speech reported, never quoted; it is a canteen checkout, not a high-consequence system.
- **No material from KISPE, Schone, Raymarine, the maritime VTS engagement, the handheld C2 engagement or Oceaneering may appear on this page.** The first four have no model, perform no inference and make no recommendations — their uncertainty is a property of sources, links, protocols and clocks, not of a model. Oceaneering has no AI in the product at all. The handheld C2 product does carry object detection and confidence scoring, but Creative Navy did not design the model behaviour, the trust calibration or the override semantics; its behavioural-requirements material belongs on the behavioural-requirements practice page, which is not AI-scoped.
- Assemblio must never be filed or framed as AI work: the company markets AI capabilities and the engagement designed none of their behaviour.

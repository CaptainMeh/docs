# `/contexts/ai-enabled-products`

---

## Domain vocabulary

These terms must appear naturally in the text, not as a list:

- Human-in-the-loop / human oversight
- AI behaviour model / behavioural governance
- Trust calibration — the specific problem of users trusting AI outputs too much or not enough
- Uncertainty communication / confidence signals — AI outputs carry varying reliability; the interface determines whether that variation is visible and actionable
- Explainability / auditability — the ability to trace an AI decision back to its inputs
- Policy engine / rule-based layer — the designed interface between an AI model's outputs and real-world decisions
- Behavioural requirements — what the system should and should not do, defined explicitly enough to design for
- Decision boundary — where human judgment takes over from AI recommendation
- Progressive disclosure of AI capability — making depth accessible without imposing it
- Discoverability — users' ability to discover what an AI system can do without requiring prior expertise
- Blinded mode — design feature where AI decisions are withheld from reviewers to prevent anchoring bias
- SCA (Strong Customer Authentication) / PCI DSS — regulatory frameworks that make fraud AI governance a procurement requirement
- Data-bounded AI — AI systems that operate on defined datasets rather than the open internet (Owkin/K context)
- Capability democratisation — redesigning AI tools so expert-built systems become usable by non-expert beneficiaries

---

## Evidence to draw on

### Callsign fraud detection and authentication (enterprise AI governance)
- Fraud detection and authentication policy engine for enterprise banking — behavioural event scoring translated into real-world decisions (allow, block, step-up authentication)
- Regulatory context: SCA and PCI DSS govern how financial institutions must document and evidence fraud control decisions. An interface that cannot produce an auditable account of how a policy was constructed was not saleable to enterprise banking customers.
- Core design insight: model/policy separation. The fraud scoring model and the policy layer that applies thresholds, overrides, and workflow decisions were treated as architecturally distinct. This distinction became the foundation for everything else and is a conceptual clarification as much as a technical one.
- Three-gesture interaction model (drag to create/reposition, click to edit inline, draw connection to link nodes) — designed for risk and compliance professionals, calibrated to what they could adopt without retraining
- **Contracts with Lloyds Bank and HSBC won following demos using the redesigned interface. Client-reported. Mechanism described specifically: product managers could present a configuration experience that matched how risk teams frame fraud problems; engineering leads could see a clear path from interface behaviour to implementation.**
- **Time to market reduced by approximately 6 months compared to previous development approach. Client/engagement-inferred estimate — the word "approximately" and the mechanism (design system + frontend overlap) should be stated. Not a measured comparison.**
- **Design system used by Callsign for at least 2 years after engagement, extended across additional security modules. Client-reported.**
- The competitive vector: fraud strategy configuration that is transparent, auditable, and explainable to bank risk teams under SCA/PCI DSS — occupying the position that black-box automated approaches cannot hold in enterprise banking

### Owkin / K biomedical AI copilot (AI discoverability)
- AI copilot for biomedical researchers and clinicians — queries proprietary and public biological datasets through natural language; trained on biology, not the general internet
- Core problem: users arriving at the platform didn't understand what K could do or how to start. A capability opacity problem: the power was in the backend; none of it was visible at the surface.
- The client's goal stated explicitly: make K's capabilities accessible to clinicians with low to medium scientific background, not just the expert biologists it was built around
- Data-bounded constraint: K operates on specific proprietary, public, and user-uploaded datasets only. Users didn't understand this. Knowing what data was available was as important as knowing what features existed.
- 20+ competitor benchmarks (Julius AI and Mindtrip as reference cases for discoverability patterns)
- Exploration across: Explore page, prompt suggestions, AI chat box, dataset presentation — 5 iterations per topic area
- The tension between new user guidance and power user complexity required finding a paradigm that dissolved the tension rather than compromising between the two sides
- **£5M investment attributed to design quality by Owkin. Client-reported, figure approximate. The prototype was described as the central pitch artefact, and the investment question was whether the design demonstrated a viable user paradigm for making expert AI accessible. Frame as: the prototype answered a specific investor question about whether the backend capability could be made accessible at all.**
- 8-month Implementation Partnership

### Hudex intelligence analysis platform (complex AI output, progressive disclosure)
- AI-powered content analysis platform ingesting social media, audio, video, radio — clusters semantically to allow analysts to explore patterns, themes, signals
- Three user archetypes: government analysts/diplomats (e.g. French Ministry of Foreign Affairs, 200+ cables/day), broadcasting network workers (e.g. Radio France, 44 stations), intelligence community operators
- Core design problem: the dondogram (hierarchical tree structure representing thematic clusters) was the primary visualisation — not intuitive to new users and described in demos as "looking like a spider"
- Entry point problem identified through research: users arrived without understanding what they were looking at. Research surfaced the specific fix: "Start with a list of the main themes and boom, you're omniscient of your data in five seconds."
- Progressive disclosure architecture: summary layer before the dondogram; project overview as "book cover" concept showing high-level theme counts and source counts before entering deep exploration
- 20 iterations on project overview alone; 10 on data exploration
- **£3M investment received 3 months into the growth phase following launch. Client explicitly attributed the design as critical and foundational to the product's ability to sell and to the growth phase. Client-reported causal link — cannot be independently verified. Frame as client-reported.**
- **Client-conducted survey of 45 existing users: users rated redesigned product as significantly better. Client-reported. "Significantly better" reflects client's characterisation, not a standardised rating instrument.**
- **New users in growth phase: 68% rated usability as good, 23% as very good. Client-reported. Methodology not independently verified.**
- Capability democratisation achieved: same platform serves ministerial-level non-technical users requiring instant high-level comprehension and expert analysts conducting multi-hour deep explorations — no role-based configuration required

### Puraite AI-assisted systematic review (human oversight, information density)
- Web application for AI-assisted systematic literature reviews — AI automates initial screening, suggests inclusion/exclusion criteria, extracts data from publication text; human-in-the-loop model throughout
- No user research access available; Creative Navy PM's firsthand systematic review experience used as domain learning proxy — this methodological choice was presented to the client explicitly with its tradeoffs, not used silently. Worth mentioning as evidence of epistemically honest practice.
- Core design tension: AI efficiency vs. human epistemic control. Reviewers must approve or override AI decisions; they must see which criteria the AI applied, how they were matched, and what text evidence supported the match — all at the moment of review, without breaking screening rhythm
- 4 iterations on AI criteria recommendation display before convergence — compact enough to scan, detailed enough to support informed override
- Resolution: direct quote from publication (the text the AI used) visible in side panel from the outset — no expansion or navigation needed
- **Navigation restructured: 13 top-level menu items → 4. Client described this as one of the most significant contributions of the engagement. Identified by Creative Navy outside original scope — instance of the blanks phenomenon.**
- AI confidence communicated as explicit percentage with colour-coding — treats uncertainty as a first-class design element, not an afterthought
- Blinded mode (AI decisions withheld from reviewers during initial screening to prevent anchoring bias) — identified as product-level requirement; design in scope, implementation technically straightforward
- Client-reported outcome: users who had previously perceived Puraite as theoretical began actively using it post-redesign; client entered growth phase. User quote relayed through client: "Jetzt passt das tool in meine Arbeit" ("Now the tool fits my work") — single user, relayed through client, not independently verified. Use carefully.
- 7-month Implementation Partnership

### Typewise AI keyboard (adoption and behaviour transition)
- Mobile keyboard with hexagonal key layout and gesture-based interaction — AI-powered text prediction and error correction
- Creative Navy identified adoption as the strategic constraint the client had missed: the client's 14-point task list addressed interaction failures in an already-installed product; it did not address whether new users would stay through the transition from iOS native keyboard
- Adoption framework built around Zone of Proximal Development — gestures introduced within reach of existing competence, not all at once
- Domain learning: team installed and used the app for several days before presenting the engagement framing; this is what allowed them to identify the adoption gap and confirm the hexagonal layout's genuine value
- Constraint respecting decision: initial skepticism about the hexagonal layout → team used it themselves → confirmed functional value (larger key surface reduces mis-taps) → committed to treating it as a fixed parameter
- **Error rates halved vs. iOS native keyboard baseline. Directly measured in controlled experiment, 60 users.**
- **Typing speed: 38 WPM → 47 WPM. Directly measured, same experiment.**
- 9 one-week sprints

### Veecle automotive embedded development IDE (paradigm-shift AI product)
- Cloud-based IDE for automotive and embedded software engineers — write, test, simulate, debug vehicle software in a browser without physical hardware
- Positioning: paradigm shift from legacy fragmented tooling (Vector, Grafana-style dashboards) toward a modern code-first IDE (analogous to Android Studio/Xcode) for complex embedded systems
- At engagement start: users understood they could write code; they did not understand what the platform was capable of, what the workflow was, or what to do when something went wrong
- User research script written by Creative Navy; 64 classified feedback points generated, converted directly into sprint tickets
- AI integration challenges: the AI felt contextless and awkward; system state was opaque during loading/processing; compilation required manual terminal — no workflow guidance
- Telemetry: Grafana-style dashboard model explicitly rejected (requires time-consuming configuration, associated with post-deployment monitoring not active development debugging); replaced with constrained hierarchical component view
- Progressive disclosure applied as a system-wide principle: simple by default, expert functionality on demand — resolved the developer (wants complexity exposed) / stakeholder (wants simplification) tension
- **£2M development funding unlocked. Designs used in investor demonstrations where interface comprised approximately 70% of the pitch. Client-reported.**
- All designs implemented by Veecle's development team — client-reported

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
- Recognition confidence at the point of transaction — what a deployed vision model's output means when it is a charge rather than a suggestion (visioncheckout context)
- Correction affordance — the designed surface through which a user amends a model's output, treated as a product surface rather than an error branch
- Opt-out oversight — human review of an AI output that is available without being proposed as the normal next step

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

### visioncheckout computer-vision self-checkout (consumer-facing AI, binding transactions)

- visioncheckout, a German vendor of computer-vision self-checkout systems for staff restaurants and catering. Canonical name styled lowercase. **The product is in development: nothing has shipped, Implementation Partnership is running now, and no outcome of any kind may be claimed.** Client positions come from meeting notes and are **reported, never quoted** — "visioncheckout's team described the current payment screens as inconsistent and unmanageable", never a quoted sentence. No customer names in any form: "a chemical manufacturer's staff restaurant", "an automotive supplier's canteen", "a public-facing venue serving visitors rather than regular users".
- **The page's six other engagements — Callsign, Owkin/K, Hudex, Puraite, Typewise, Veecle — are each an expert reviewing an informational AI output at a desk.** A risk score, a semantic cluster, a screening suggestion, a prediction. The AI proposes, a trained person disposes, and nothing happens until they act. **visioncheckout inverts all three conditions, and the page should say so explicitly.** The model's output is a binding financial transaction, not a recommendation. The user is a member of the public with no training and no standing, hands full, in a queue, with seconds. And the AI operates on physical objects through a camera rather than on a dataset. **The distinction is the whole value of adding it — it must not be written as a seventh instance of the same thing.**
- The recognition-to-sync asymmetry: recognition completes in about 0.5 seconds; synchronising the basket with the POS system takes one to three seconds. The guest experiences the sum.
- The preliminary basket as the designed answer: because recognition is near-instant but POS synchronisation is not, the basket is shown immediately with items visible and every action and payment disabled, and item rows animate in individually rather than appearing as a finished list — so the perceived event is recognition rather than page load. Prices, total and tax line stay hidden until sync returns.
- 90–95% of users pay by keycard, and placing the keycard pays immediately where there is available balance — the model's output completes as a charge in seconds.
- The user's conditions, observed in field research: once people have used the system once or twice they know what to expect, and experienced users are very fast; canteen users fixate the list of dishes for three to five seconds, while visitors at the public venue instead look for what the next step is; the largest single component of lost time is guests looking for their card; a typical basket is one main dish, four items is very common once salads and drinks are included, and baskets above five items were not observed outside the multi-tray case. **These are patterns a researcher saw and recorded, not counted events — no percentage may be attached to any of them.**
- **The correction path was designed as a product surface rather than an error branch**: numbered markers on the tray image matched to a numbered list, after connecting lines were rejected as messy and hard to implement cleanly and overlaid text labels were rejected as too small to read in bright light; thumbnails required in the catalogue because item names are frequently not meaningful enough to identify a dish without an image; sidebar category navigation in the Corrector after multi-row top tabs were rejected under dual language; search deliberately de-emphasised so scrolling thumbnails is the primary path, with search remaining for staff; scrolling preferred over pagination, the touchscreen being responsive enough; entry to the Corrector deliberately understated — a tertiary edit control near the basket header, with rescan remaining the primary action — so correction is available without being proposed as the normal next step; and rescan flagged as destructive, discarding all state including corrections already made, with a two-step confirmation recommended wherever corrections exist.
- The confirm-not-fix principle: Selections, Extras and the Corrector all present the interaction as "confirm this", not as "fix this" — no warning palette on selection screens, and the same visual pattern for a selection prompt and a corrector candidate list, so the guest learns one pattern.
- Variant ambiguity stated rather than hidden: one POS item can map to several visual variants — different soups, salads, dishes of the day — which matter for retraining the recognition system, not for the guest's transaction. Auto-cycling variant thumbnails were ruled out on accessibility grounds and as visual noise, leaving the one-item-to-many-variants problem explicitly unresolved rather than papered over.
- **The page's most unusual contribution: a deployed model's field accuracy is partly an operational variable owned by catering staff.** Catering staff like the system and report it works well when supplied with enough images — but learning what images the system actually needs takes time, and feeding it enough material takes patience staff often do not have. This is a human–AI interaction finding rather than a computer-vision one. The staff view is reported, not quoted.

---

## What this page must not claim

- **No Oceaneering material of any kind.** There is no AI in that product, and any AI or automation page is off-limits to it.
- **No KISPE, Schone, Raymarine, maritime VTS or handheld C2 material.** The first four have no model, perform no inference and make no recommendations — their uncertainty is a property of sources, links, protocols and clocks, not of a probability distribution. The handheld C2 product does contain machine learning, but Creative Navy did not design the model behaviour, the trust calibration or the override semantics; on the available evidence this page would be claiming work that was discussed rather than done.
- **No throughput, speed, error-rate, satisfaction, accuracy or commercial outcome from the visioncheckout redesign.** None exists. Nothing has shipped and nothing about the new designs was tested with users.
- **No implication that the visioncheckout product is deployed with the new design, or in market use.** It is in development.
- **No compliance, conformance or certification credential for visioncheckout.** Creative Navy designed to published instruments; it did not certify to, audit against or achieve conformance with EN 301 549, the EAA, the BFSG or WCAG, and gave no legal advice.
- **No percentage attached to any visioncheckout field observation** — they are observed patterns, not counted events.
- **No competitor recognition-accuracy figure presented as measured truth.** Vendor claims are citable as claims only.
- **No quoted visioncheckout client speech.** Positions are reported and attributed to visioncheckout, not to an individual.
- **Do not describe visioncheckout as high-consequence.** It is a canteen checkout; the consequence of failure is a queue, a wrong charge and a guest who needs help.
- **Never let the word "testing" attach to visioncheckout's participant numbers**, and never let Streetec's completion claim drift toward them. visioncheckout delivered 34 screens and interviewed 34 users — unrelated figures that must never appear in the same sentence undisambiguated.

# `/evidence/outcomes/lower-training-burden`

---

## What the outcome is

Training requirements are a symptom of interface design, not just of product complexity. When a system requires extensive formal training to operate, it is usually because: the interface relies on memorised states and sequences rather than recognition; the system logic is not inferrable from the interface itself; or the gap between how the system is organised and how the work actually flows forces users to learn the system's logic rather than following the work's logic.

The outcome is an interface whose design carries enough orientation, guidance, and logical structure that users can either self-onboard or require substantially less formal training. In the highest-value cases, training is eliminated entirely — not because the system is simpler, but because the interface encodes the knowledge that training previously had to supply.

---

## Distinguish this from `/scaling-without-training-dependency`

These two outcomes are related but address different problems. Lower training burden concerns reducing the cost, time, and effort of training users who have access to the system. Scaling-without-training-dependency concerns removing the training constraint that prevents reaching new users, new geographies, or new institutional contexts entirely. The first is an operational efficiency outcome; the second is a market reach outcome.

---

## Five forms this outcome takes

The evidence in the portfolio represents five structurally distinct forms of training reduction, each worth naming:

**Training elimination** — the product can be commercially deployed without onboarding training as a standard model. Beissbarth is the primary example.

**Training model transformation** — the training requirement moves from high-cost, high-effort formats (instructor-led events, personal delivery) to lower-cost, self-directed formats (video materials, self-paced modules). Gexcon and Polymatica are the primary examples. This is not just time reduction — it is a fundamental change in the commercial and operational relationship between the product and its users.

**Training time and cost reduction** — training still exists but at materially lower duration, cost, or formal intensity. Triopsis (mandatory 1-hour session → optional 15-minute video), WCO/IPM (78% training cost reduction across 107 governments), MSolutions (coaching sessions → short guided introduction) are the examples. Gericke (a stated design objective to reduce Gericke's own service/training burden, with client-reported ease-of-adoption effects) is a supporting case in this form.

**Reduced perceived need for supplementary help** — users onboarded after a redesign seek out supplementary training materials at a lower rate than users on the previous interface, indicating the redesigned interface is sufficiently self-explanatory that external help becomes less necessary. Enhesa is the primary example of this form.

**Training substitution** — in contexts where the user population cannot be trained in advance (one-time patients, first-time users with no repeat access), the interface must substitute entirely for any training programme that would otherwise exist. This is the most demanding form of the outcome: not reducing training cost but replacing training with an interface architecture that guides every user through the process from zero, every time. Squaremind is the example.

---

## Domain vocabulary

- Training burden — the total cost of getting users to operational competence: time, instruction, support, documentation, repeated sessions
- Self-onboarding — the ability of new users to reach operational competence without live instruction; the highest-value expression of lower training burden
- Training model transformation — a shift from high-effort training formats to self-directed ones, enabled by interface design
- Discoverability — the degree to which users can find and understand features without prior instruction; a primary mechanism of training reduction
- System logic inference — the ability to understand what to do from the interface itself rather than from external instruction
- Memorised-operation dependency — the condition where only experienced users can operate a system because competence lives in their memory rather than in the interface; the legacy state that training is paid to reproduce, and that recognition-based redesign removes (Gericke's legacy Easydos Pro)
- Commercial deployment model — how the product is deployed commercially in terms of onboarding requirements; Beissbarth's elimination of training from their standard deployment is a commercial model change, not just a usability improvement
- Inline guidance architecture — an interface structure that embeds orientation and instruction within the workflow itself, rather than requiring users to access separate help documentation or receive external training; the mechanism behind training reduction in embedded and procedural contexts
- Workaround elimination as a training indicator — when users no longer need to develop personal compensating behaviours to operate the system, the informal knowledge those workarounds embodied no longer needs to be transmitted between users; workaround elimination is downstream training burden reduction
- Supplementary help-seeking rate — the proportion of users who voluntarily seek out training materials, documentation, or videos after onboarding; a behavioural proxy for whether the interface is carrying enough of its own orientation; reduction in this rate after a redesign is evidence that the interface now provides what supplementary training had previously supplied

---

## Evidence

### Beissbarth automotive calibration (training eliminated — highest-value form)
- **Training requirement eliminated. Beissbarth's standard commercial deployment model no longer includes onboarding training. Client-reported operational change.**
- This is a commercial deployment model change: not a reduction in training time but the removal of training as a deployment requirement
- The mechanism: interaction design that makes system logic inferrable from the interface itself — component functions understood from position, labelling, and visual treatment without verbal explanation or printed manuals; calibration sequence state visible at each step so technicians know where they are and what to do next without prior instruction
- The commercial consequence: Beissbarth can deploy to any workshop without scheduling training delivery, reducing the logistical complexity of commercial rollout

### Gexcon CFD simulation (training model transformation — expert software)
- **Training: formal 3-day instructor-led events → short webinars and video materials. Operational change in commercial deployment model.**
- In a scientific software domain where the learning curve had previously been a significant barrier, this represents training model transformation at the highest value end: not just lower cost but a fundamentally different relationship between the product and its users
- The mechanism: the interface now encodes the conceptual orientation that instructor-led events had to supply; newer engineers and non-specialist roles can follow the simulation workflow through the interface's own structure rather than requiring a trained guide
- Note: Gexcon's 3-day instructor-led events were not optional — they were the standard onboarding mechanism for new users. The transformation is from mandatory high-cost instruction to self-directed materials

### Polymatica OLAP analytics (personal training dependency eliminated)
- **Roman (founder) stopped delivering personal training to new customers following the redesign. Training dependency on the founder was eliminated.**
- Before redesign: every new customer required Roman to personally deliver training; his limited English made international expansion structurally impossible — the training model was the international expansion barrier
- After redesign: the interface provided the cognitive scaffolding that personal training had previously supplied; customers could self-onboard using the guided-to-free architecture
- The mechanism: lobby concept (Dataset Manager) giving users orientation before any operation; OLAP terminology replaced with industry-standard vocabulary; guided flows for setup processes followed by free operation environments
- **International expansion to UK, US, Germany became possible as a direct consequence. Client-reported.** This is the connection to /scaling-without-training-dependency — the lower training burden outcome is what enabled the scaling outcome.

### Triopsis workforce management (mandatory → optional, time reduction)
- **Onboarding: mandatory 1-hour remote training session → optional 15-minute video. Approximately 90% of users self-onboarding without live instruction. Client-reported post-rollout operational data.**
- The mechanism: interface design that made the core workflows self-explanatory; the 47-microtask analysis identified which steps required the most cognitive guidance and ensured the interface provided it in context
- The 90% self-onboarding figure means the product can scale user base without a corresponding growth in training delivery capacity — a direct operational advantage at growth stage

### WCO/IPM customs intelligence (quantified cost reduction at global scale)
- **Training cost reduction: 78%. Client-reported by WCO to Creative Navy.** The figure is based on reduced training hours.
- Context: 107 member administrations, diverse languages, variable connectivity and device conditions — the training burden was compounded by the infrastructure required to deliver consistent instruction across genuinely different contexts
- The mechanism: progressive disclosure, recognition-over-recall information architecture, contextual micro-hints on first use of complex actions — the interface provided the contextual instruction that formal training programmes had previously supplied
- **107 governments; 2000+ officers in field operations.** At this scale, a 78% training cost reduction represents a substantial absolute reduction in programme cost.

### MSolutions AV diagnostic instruments (coaching to short introduction)
- **Training: repeated coaching sessions → short guided introduction. Client-observed operational change.**
- **Large integrator customers formally reported smoother rollouts post-redesign.** This is formal customer feedback, not anecdotal — state this distinction.
- The mechanism: the diagnostic narrative concept (structuring the interface around the standard AV diagnostic workflow rather than the backend module structure) made the device's operating logic inferrable from the interface; users could follow the workflow without having previously been shown it

### Swiss petrol forecourt (structural training burden — supervisor-reported during evaluation)
- Before redesign: experienced cashiers had developed personal shortcuts that diverged from documented procedure; new employees learning from observation were learning compensating behaviour rather than the intended workflow
- The training burden was structural: a consequence of an interface that forced experienced staff to diverge from the documented path; training could not be made efficient because the training target (intended procedure) and the operational reality (experienced cashier behaviour) were different things
- Supervisors reported during prototype evaluation sessions: more predictable flows made it easier to maintain consistent procedure during busy periods; the number of cases requiring supervisor intervention for guidance reduced
- **Attribution: supervisor-reported during prototype evaluation sessions conducted by Creative Navy; not post-deployment operational measurement. State explicitly.**

### CDR Foodlab chemical analysis instrument (inline guidance architecture replacing static pictograms — supporting evidence)
- CDR Foodlab's existing interface relied on static pictogram guidance for analysis sub-steps. Users with only basic chemistry training — who do not understand the consequences of procedural deviations on measurement validity — depended on this guidance to follow the analysis protocol correctly. Five workarounds had developed around points where the guidance or workflow imposed demands users were not willing to carry: one prominent example is users printing paper lists of sample names and placing them beside the machine during analysis, because naming samples within the interface was more cognitively demanding than maintaining a physical reference.
- Creative Navy replaced the static pictogram system with inline step-by-step animations as functional interface components — embedded within the analysis flow, timed to each physical sub-step, covering all analysis types. These are not help documentation or a supplementary tutorial layer; they are the guidance architecture of the interface itself, delivering instruction at the moment and in the context where it is needed.
- **All five workarounds were eliminated following the redesign — user-reported confirmation.** The workaround elimination is the training burden signal: workarounds are informal knowledge that users develop to compensate for guidance the interface does not provide at the right moment. When the inline guidance architecture delivers that knowledge in context, the compensating behaviours become unnecessary. The informal knowledge no longer needs to be carried or transmitted.
- **Task completion time: 9 minutes before redesign (client-reported) → 3.4 minutes after redesign (Creative Navy-measured, 14 users, final shipped product).** The time reduction is partly an efficiency outcome and partly a training burden indicator: users reaching the correct sequence faster and without compensating behaviours indicates the interface is now providing what training previously had to supply.
- **User satisfaction: 72% → 93% one year post-deployment (independent third-party survey, identical instrument, same population — client-reported).**
- This case adds a context not well-represented in the existing evidence: a constrained embedded instrument used by non-specialist laboratory operators where the guidance architecture — inline animations — is structurally integrated into the analysis flow rather than separated into a help system or training layer. The mechanism connects directly to the training reduction outcomes above: when orientation and guidance are embedded in the workflow itself, the interface substitutes for training at the moment of use rather than requiring a prior training event.
- **Evidence basis: workaround elimination user-reported; task completion before client-reported, after Creative Navy-measured; satisfaction figures client-reported from independent survey. The inline animations as functional components is directly observed in the deliverable.**

### Gericke industrial HMI (training burden as a stated design objective — industrial process control, qualitative/client-reported)
- Reducing Gericke's own training and service burden was an explicit objective of the engagement, not an incidental benefit. The legacy Easydos Pro interface was operable mainly by experienced users who had memorised it — a memorised-operation dependency that made training expensive and made commissioning, by Gericke's own service technicians, slower than it needed to be. The Head of Customer Service flagged training cost as a primary concern at the outset.
- The mechanism targeted the training burden directly: a self-explanatory information architecture tested with operators (including younger operators with under a year of experience); contextual error explanations replacing raw codes so operators no longer needed to consult the manual to interpret a fault; role-appropriate progressive complexity so non-expert operators were not confronted with the full system at once; and recognition-based interaction replacing the memorised states the old interface relied on.
- **Client-reported effect (food segment):** operators and production managers grasped system behaviour more quickly during demonstrations and factory acceptance testing, reducing the explanation Gericke had to supply and making the equipment appear easier to adopt and train on — a meaningful signal in a market facing workforce turnover and skill shortages. This sits in the "training time and cost reduction" and "reduced perceived need for supplementary help" forms.
- **Evidence calibration — state plainly:** Gericke is a **qualitative, client-reported, and design-objective** case on this page. **No quantified training-cost or training-time before/after figure is available** for the engagement; the supporting operational metrics (fault-diagnosis time, operator stoppages) are about operation, not training, and should not be presented as training measurements. Present Gericke as a supporting case that adds the industrial-process context and the memorised-operation-dependency mechanism — not as a quantified exemplar alongside Beissbarth, WCO, or Triopsis. Describe the deployment sites by type and geography only; Gericke is not a regulated device.

### Enhesa legal compliance platform (reduced perceived need for supplementary help — enterprise SaaS)
- Enhesa is a web-based legal compliance intelligence platform used by regulatory affairs managers, compliance officers, and legal teams to navigate legislation across jurisdictions. Users are primarily domain experts; approximately 20% are not expert users of the platform itself. The platform's primary content units are baseline regulation pages — dense, structured pages aggregating legislative text, implementation timelines, requirements, and changes for individual regulations.
- **Pre-redesign: 45% of users said they had watched training videos. Of those, 81% said the videos were not helpful. Post-redesign: only 21% of users onboarded after the redesign launch said they had watched training videos.** Both figures come from Enhesa's NPS survey, which asked directly about training video use and helpfulness. The survey was conducted by Enhesa across their full user base; the pre/post comparison is across cohorts (users onboarded before vs. after the redesign), not a longitudinal panel. Evidence calibration: client-measured.
- The mechanism confirmed by Enhesa: the redesign reduced the perceived need for training. Users onboarded into the redesigned platform found it sufficiently self-explanatory that they sought out supplementary training less frequently.
- The 81% unhelpfulness rate among pre-redesign training video watchers is a distinct finding worth stating separately. It shows that the training programme was not compensating for the interface's friction — users sought help and did not find it there. The rate at which users sought supplementary help dropped because the interface was carrying the orientation the training could not supply.
- This is the only case in the portfolio where the training burden signal is measured through voluntary help-seeking behaviour rather than through a change in the formal training programme itself. It is a different evidential form: not "training was changed from X to Y" but "the proportion of users who felt they needed external help fell from X to Y." Both forms point to the same mechanism — an interface encoding enough of its own logic that users need less external support — but the evidence route differs.
- The pre-redesign NPS baseline (68%) was the signal that prompted Enhesa to seek help; the figure was measured two months before the engagement began. The two-month post-redesign NPS was 84% — with no other changes made to the product in that window. The training video finding came from the same survey that produced these NPS figures. Evidence calibration: all figures client-measured by Enhesa; methodology not shared with Creative Navy in detail.
- **Connection to the NPS outcome:** the training video finding and the NPS improvement are from the same survey and the same period. They are corroborating signals rather than independent measurements — both point to a redesign that reduced the friction users were experiencing and that the existing training programme had failed to address.

### Squaremind dermatology scanning device (training substitution — interface as the complete training programme)
- The training reduction here is total: there is no patient training programme to reduce because patients are one-time users who cannot be trained in advance. The interface must supply every element of orientation, guidance, and recovery that a training programme would otherwise provide — and it must do so for every patient, from zero, on every session, regardless of age, digital literacy, or prior medical device experience.
- This is the most demanding form of lower training burden in the portfolio. The other forms (Beissbarth, Gexcon, Triopsis) reduced an existing training programme. Squaremind required building the training programme into the interface architecture.
- **Commercial premise:** dermatology clinics would not adopt a device whose patient-autonomy claim required clinic staff to guide patients through each session — that would negate the clinical time-saving the product existed to deliver. The interface must be the training programme so that clinic staff can be absent from the room.
- **Pre-redesign baseline:** Squaremind's own test with 14 patients produced 2 completions. Of the 12 who did not complete: 8 (primarily aged 45–65) got stuck within the first minute; 4 (primarily aged 20–35) got stuck around the 3-minute mark. The interface failed to substitute for the absent human guide. **Client-reported background — Squaremind's own test before Creative Navy's involvement.**
- The design mechanism was the Inform–Prevent–Correct framework — a recursive guidance architecture that managed patient orientation at every step, prevented anticipated confusion events, and recovered from them when they occurred. The framework encoded the instruction, anticipation, and correction functions that a human guide would otherwise perform.
- Multi-modal delivery: screen + audio + floor markings designed as an integrated system, so the guidance reached patients through multiple channels simultaneously. No single channel carried the full burden; the integration was what made the substitution viable across the age range.
- **Post-redesign: 27 of 29 patients completed the scan independently. All 12 who got stuck recovered. Evidence basis: Creative Navy-measured, ecological protocol, two sites, age-stratified (20–35, 35–45, 45–65), independent dermatologist co-conducted.**
- **Commercial consequence:** all 9 clinics in commercial discussions purchased the device following demonstrations. The interface successfully substituted for patient training, making the clinical autonomy premise commercially real. **Client-reported commercial outcome; Creative Navy observed 5 of 9 demos.**
- The connection to `/scaling-without-training-dependency` and `/capability-democratisation` is direct: when the interface substitutes for training, clinics can deploy the scanning service to any patient without patient-facing training infrastructure. The capability is democratised; the deployment scales without training dependency. Both outcomes are downstream of the same interface design achievement.

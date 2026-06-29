# `/capabilities/usability-evaluation-for-high-consequence-products`

---

## Domain vocabulary

- Formative evaluation — usability evaluation conducted during the design process to identify and address problems before they are fixed in the design; Creative Navy's scope in regulated contexts
- Summative validation — formal usability testing conducted on a finalised design to demonstrate regulatory compliance; the manufacturer's responsibility, not Creative Navy's
- IEC 62366-1 governed evaluation — evaluation conducted within the framework of the medical device usability engineering standard; specific requirements for participant selection, task design, and documentation
- Use scenario / realistic task scenario — the specific situations of use the evaluation must cover; in high-consequence contexts, these include abnormal conditions and non-happy paths
- Representative users — IEC 62366-1 language for participants who represent the intended user population; in expert tools, this means domain experts, not general users
- Performance under pressure — evaluating how the interface performs when users are divided in attention, operating under time pressure, or managing abnormal conditions; the conditions that collapse the performance difference between good and poor interfaces
- Controlled experiment (with methodology stated) — participant count, baseline, conditions, measured outcomes
- Eye tracking in operational conditions — measuring glance patterns and visual attention during real tasks, not simulated ones; sea trial eye tracking is a fundamentally different instrument than lab eye tracking
- Triangulation across evidence sources — using controlled experiments, observational research, and expert review against each other; each source has different validity for different questions
- Production deployment measurement — measuring outcomes in the live operational system rather than in test conditions; the strongest evidential category
- Abnormal scenario evaluation — explicitly testing the product's behaviour under non-ideal conditions; required in high-consequence contexts because these are where failures have consequences

---

## Evidence to draw on

### Torqeedo maritime HMI (sea trial evaluation — richest multi-method example)
- The evaluation was conducted in actual maritime conditions because no lab simulation can reproduce the operating environment
- Research programme: **12 sea trials over 6 months; 15 professional captains; temperature range −5°C to +35°C; night operations; vibration, hull slamming, glare from cold water, rain, gloved interaction**
- The emotional dimension of control system interfaces — discovered through sea trial observation: the relief crews experience when information remains stable as the vessel behaves unpredictably. This finding could not have been produced in a lab. It became a design requirement.
- **50% faster energy state identification (new vs. legacy interface). Directly measured — controlled environment experiment, 24 subjects.** This is separate from the sea trials — a controlled experiment run to quantify the performance difference the sea trials had qualitatively identified.
- **Glance reduction during manoeuvres. Measured via eye tracking, 7 subjects, during actual sea trials.** The eye tracking was conducted in the operational environment, not a simulation. This matters: glance patterns during manoeuvres depend on actual vessel motion and real navigational demands.
- **All 15 professional captains rated the new interface as significantly better. Participant-reported, structured feedback across all 12 sea trials.**
- The evaluation approach combined three methods with different roles: sea trial observation (discovering what conditions produce — qualitative), controlled experiment (quantifying the performance difference — quantitative), eye tracking (measuring the specific visual attention change — behavioural).

### Kardion MCS Controller (regulated formative evaluation under IEC 62366-1)
- The engagement built on the Emergo by UL formative study as the evidence foundation: 7 participants (2 scrub nurses, 2 perfusionists, 3 ICU nurses), 8 clinical use scenarios, IEC 62366-1 governed
- What the Emergo study established and what it didn't: it identified participant scanning patterns, min/max flow misinterpretation, and a startup time concern. It did not surface the clinical choreography — the spatial and procedural relationship between surgeon, nurse, controller, and patient during a procedure. That required Creative Navy's own sessions.
- Creative Navy's sessions with cardiologists and nurses: mental model sessions (clinical practice, decision-making around flow adjustments, which data elements are clinically relevant at which moments) and design feedback sessions (4 sessions using design prototypes to collect feedback on specific directions)
- The evaluation was formative throughout the engagement — 34 directions for the standard view were presented to the client with explicit pros and cons, building shared understanding. Most iterations were shown; two were also tested with users.
- **FDA approval: design passed evaluation as submitted, no design changes required.** The process outcome demonstrates that the evaluation was correctly structured — the documented evidence of formative evaluation and the design decisions traceable to use scenarios satisfied the regulatory review.
- **Scope note: formative only. Summative validation is the manufacturer's responsibility.**

### deSoutter Medical / Zethon (structured expert evaluation with domain literature)
- Evaluation began with a domain knowledge foundation: **12 human factors studies reviewed**, including Colle & Hiszem (2004) on touch target sizing and Tao et al. (2018) on button design. These papers are directly citable with their findings applied to specific design decisions.
- **13 structured sessions with 8 orthopaedic and trauma surgeons** — using the method of asking surgeons to describe their procedures as if teaching a junior colleague. This surface-level task (teaching description) produces the same information as workflow observation but is achievable without being present in the operating theatre.
- **9 competitor devices benchmarked**: the evaluation identified the recurring failure across competitors (colour as primary state indicator) and designed explicitly against it.
- **8 information architecture models** developed and evaluated against representative surgical workflows.
- Surgeon-reported from design review sessions: state verification reduced to brief glance; parameter adjustments no longer interrupted surgical workflow. **Must be attributed as design review sessions, not post-deployment evaluation.**
- IEC 62366-1 governed throughout; formative only.

### Beissbarth automotive calibration (production deployment measurement)
- The outcome measurement was not usability testing — it was operational data from production deployments
- **8 production deployment locations** used by Beissbarth to collect outcome data
- **Calibration time: 18 → 12 minutes per vehicle. Client-measured across those 8 locations.** Not a lab-controlled measurement — a real operational measurement.
- **Repeated measurements reduced. Client-measured; exact figure not available.**
- The evaluation during design: **14 technicians across 5 workshops** (authorised inspection centres and independent garages); contextual interviews (procedure walkthroughs, actual usage) and semi-structured interviews; 3 OEM display structural variants tested under conditions reproducing workshop lighting and viewing distances
- The distinction between design-phase evaluation and production measurement should be made explicit: the workshop testing informed design decisions; the production deployment data measured the outcome.

### WCO/IPM customs intelligence (multi-country validation)
- **47 participants across Italy, Romania, Uzbekistan, Algeria, and Spain**
- The geographic spread was deliberate, not incidental: confirming that a design for 107 governments actually held across genuinely different operational conditions, not just across variations of the same context
- The evaluation confirmed that the multi-jurisdictional design worked under different operational realities — bandwidth conditions, device fleets, institutional cultures, and languages — not just in a homogeneous test sample.

### Typewise AI keyboard (controlled experiment with domain-appropriate baseline)
- **60-user controlled experiment** — the baseline was the iOS native keyboard (the platform users were switching from), not an abstract performance standard
- **Error rates halved vs. iOS native keyboard baseline. Directly measured.**
- **Typing speed: 38 WPM → 47 WPM. Directly measured, same experiment.**
- The testing setup created realistic pressure conditions — not just measurement but genuine use experience — so that qualitative feedback could be gathered from users who had experienced the keyboard under real conditions

### Gexcon CFD simulation (evaluation in expert domain conditions)
- **37 evaluation sessions across 45 design variants** — evaluation as ongoing design practice, not a final gate
- The evaluation was conducted with actual CFD engineers and safety analysts using realistic simulation scenarios, not simplified test tasks
- Production deployment measurement: **4 days → 6 hours (measured by Gexcon in real deployments); 5–8 → 1–2 configuration errors (measured)**

### Squaremind dermatology scanning device (ecological evaluation as commercial proof-of-viability)

- The evaluation requirement was specific: the design had to demonstrate that real patients — of varying ages, unfamiliar with the device, undressed, alone — could complete the scan without assistance or intervention. This was not an internal validation target; it was the commercial claim 9 clinics were requiring to be demonstrated before purchase. The evaluation was designed to produce evidence credible to a clinical buyer, not only to satisfy internal design quality standards.
- **Protocol:** 29 users across two sites — London (12 users: 3 aged 20–35, 4 aged 35–45, 5 aged 45–65) and Paris (17 users: 7 aged 20–35, 7 aged 35–45, 3 aged 45–65). Ecological design: participants received a free measurement as they would in a real clinic. No researcher guidance during the process. An independent dermatologist hired and paid by Creative Navy co-conducted all sessions.
- **Participant selection rationale:** Age stratification was a deliberate evaluation design choice, not sampling convenience. The commercial claim required the interface to hold across the full clinical patient population. A sample drawn only from the most digitally fluent age cohort (20–35) would not produce evidence credible to a clinical buyer evaluating the product for patients across all age groups. The three-cohort age stratification was the minimum participant selection that could produce generalisable commercial evidence.
- **Clinical co-validation function:** The independent dermatologist added a dimension that binary completion data cannot contain — clinical judgement about whether each patient's positioning was adequate for clinically meaningful scan quality. This is distinct from summative validation: the dermatologist co-conducted the sessions to add clinical grounding to the formative evaluation, not to constitute a formal regulatory review.
- **Primary measure:** binary completion — did the user complete the full scan with the report issued by the device, without external intervention?
- **Secondary measures:** total scan time; for users who got stuck, recovery time timed to the second; failure points and contributing factors catalogued by step.
- **Results: 27 of 29 patients completed the scan independently. 12 patients got stuck; all 12 recovered without external intervention. Recovery times 2–4 minutes.**
- **Evidence basis: Creative Navy-designed and run. Ecological protocol. Two sites. Age-stratified. Independent dermatologist co-conducted.**
- **IEC 62366-1 scope note:** The evaluation was formative — structured to support Squaremind's usability engineering process. Summative validation and regulatory submission are Squaremind's responsibility.
- **Pre-redesign baseline for comparison:** Squaremind's own test with 14 patients produced 2 completions before Creative Navy's involvement. **This is client-reported background — Squaremind's test, not a Creative Navy evaluation.** It is cited here to contextualise the evaluation outcome, not as Creative Navy evidence.
- **What this evaluation approach adds to the page:** a sixth evaluation methodology not represented in the other cases — ecological pre-deployment evaluation designed simultaneously for design validation and commercial proof-of-viability. The evaluation protocol was shaped by what clinical buyers needed to see, not only by what the design team needed to know.

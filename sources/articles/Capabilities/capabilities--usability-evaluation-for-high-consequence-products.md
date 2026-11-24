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
- Research programme: **12 sea trials over 6 months; 15 professional captains; temperature range −5°C to +35°C; night operations; vibration, sharp vessel movement, glare from cold water, rain, gloved interaction**
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
- **6 comparable surgical devices benchmarked**: the evaluation identified the recurring failure across competitors (colour as primary state indicator) and designed explicitly against it.
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

### Streetec kntrl 2 (unassisted tasks on the production product in a real car — the page's anchor)
- Streetec GmbH and the product, kntrl 2, may be named. kntrl 2 is the second generation of Streetec's kntrl control system for aftermarket automotive air suspension; it shipped and is in the market.
- The full testing account: after the design block, two testing sessions with **32 participants total**, using the **actual product installed in a car** — 13 in Munich, all tuning enthusiasts and car owners; 19 at a trade fair in Spain, mixed: roughly 25% owners/enthusiasts, 40% dealers, 30% installers, 5% other (S10). **The trade fair sample is described as what it was — 40% dealers, 30% installers — not as representative of owners. That is a strength: dealers and installers commission and fit these systems.**
- **Required framing: Creative Navy designed the test protocol, ran both sessions and analysed the results. Streetec prepared the vehicle and site logistics and recruited participants. Testing used the production product installed in a car rather than a prototype in a lab.** This division should be stated openly — it is good practice, not a weakness (S11).
- Each participant attempted three tasks with no instruction given; completion was measured and time taken was recorded. **The supportable claim is that all 32 participants completed all three tasks unassisted and performed in line with expectations — no completion percentage beyond that, no specific time, no mean, no baseline comparison** (S12).
- Each participant then took part in a 15-minute debrief capturing opinions and subjective impressions (S13). **The S14 findings are subjective impressions from a 15-minute conversation — say so**: the information architecture held up, the interactive elements held up — participants worked out how to change settings unaided — and the aesthetics were well received on subjective rating.
- What the testing produced (S15): small changes to the transitions between screens, and a backlog of possible future features which Streetec chose to stage over a longer horizon rather than build immediately.

### The industrial engagement (what a client-run rating and an expert review each establish)
- The client is **a European industrial automation vendor whose process control software coordinates machining cells**.
- **E9 always carries its full qualification: in usability testing conducted by the client with 12 participants, all 12 rated the new designs as significantly above expectations. This result is client-reported: the test was designed and run by the client's own team, it captures participants' rated impressions rather than measured task performance, and it was conducted on designs rather than on a deployed system.** Never compress to "12/12", "100% satisfaction", or anything implying measured improvement.
- E34 is an honest account of what an expert review can and cannot establish — two limitations of the review itself: the deliverable carried no annotations, so critique was prose against unmarked screenshots; and everything audited was demonstration data, so real-world density was not established.
- **The contrast is the point: a client-run satisfaction rating and a Creative Navy-run task study establish different things, and the page should say which is which.**

### Raymarine next-generation fixed-mount VHF (the design of the comparison itself)
- The client is named Raymarine; the new radio's name may not be used. No speech from this engagement is quoted or reported.
- **The contribution is a method the page does not otherwise describe: the design of the comparison itself.** Two concepts, identical in every respect except the variable under test — both used identical hardware mappings, identical AIS information and identical physical controls; the only variable was where the extra interaction was placed after the operator pressed the call action (R71). Rounds were counterbalanced, with four participants taking each condition first and target data matched for density and comparable distances (R54). **Measurement definitions were published with the results** (R56): unassisted completion, wrong domain activation — counted once per task and not per encoder detent — wrong selection, wrong recipient send, completion time including correction, status comprehension, recovery, and confidence as a descriptive ordinal response only, explicitly not a psychometric scale.
- **Lead with what that design buys: it is what makes "the fixed control model is safer" a measured claim rather than an assertion — and it is what makes the cost measurable too. A comparison that only establishes which option is better cannot price the decision; this one priced it twice.** Where either result is cited, the cost accepted to obtain it is cited in the same passage.
- **Required framing: Creative Navy designed the test protocols, moderated all twenty-four sessions and analysed the results. Raymarine supplied the physical bench mockup on which the sessions ran. Each comparison was paired and counterbalanced within participants, with task wording, target data and starting states held constant. The findings describe operator behaviour on a prototype against a fixed scenario fixture. They are not a measure of radio performance, of real-world calling accuracy, or of outcomes at sea.**
- **Carry the limits in the same entry, not in a footnote: bench sessions, eight participants per round — eighteen people across twenty-four sessions, six taking part in two rounds — no field conditions, no live transmission, no significance testing.**

### Schone Airspace Group Mission Control (acceptance criteria written first, and a published failure rate)
- The client is named Schone Airspace Group. No speech from this engagement is quoted or reported.
- **The contribution is procedural, and it is a method the page does not otherwise describe**: acceptance criteria written before the designs were evaluated — 36 scripted checks, each defined by a fixed starting state, an operator action, an expected visible response and a pass rule (D41); the set run first by the design team and then by five working remote pilots; and the first-candidate result published alongside the final one.
- **Lead with the fact that half the first candidates failed**: first candidates 14 pass, 18 fail, 4 pending (D42); 18 findings — 9 critical, 8 major, 1 moderate — each carrying an identifier, a severity, the check it failed, the sprint in which it was revised, and the decision record that resolved it (D43); the integrated retest 32 pass, 0 fail, 4 pending — every check decidable at interface level passed (D44). **A page about evaluating high-consequence products is strengthened more by an engagement that shows its own failure rate than by one that reports a pass.**
- **Required framing: the checks evaluate the design representation — a pass means the interface stated the correct operational fact under that condition. They are not a measure of flight performance, operator proficiency, task completion time or error rate, and they were not conducted on a connected system. Severity records the consequence of the interface ambiguity within the scripted task — not that a corresponding aircraft incident occurred. Never write "32 of 36 checks passed" without the denominators explanation: 32 of 32 is the accepted interface specification; 32 of 36 is the full mixed set including four checks that depended on engineering evidence rather than design revision.**

### Maritime traffic software portfolio (a two-round structure, and published limitations)
- The client is **a European vendor of maritime traffic monitoring, inland navigation and communications software for port authorities, coastal administrations and waterway operators**. No speech from this engagement is quoted or reported.
- **This engagement adds the within-participant counterbalanced comparison against the system being replaced** (W84): eight end-customer operators and supervisors, four matched tasks in both the legacy training interface and the revised prototype, four participants taking legacy first and four taking prototype first, equivalent task data reset between conditions, the same decision prompts and stop rule, and a predefined stopping point at the first submitted answer — 64 condition-level observations in all.
- **Lead with what that design buys and what it costs: it buys attribution — each participant is their own control — and it costs external validity, because the two interfaces differed in more than the variable under test and the source says so.**
- **The two-round structure is a method contribution in its own right** (W81): a formative round whose purpose was to find design failures early — six operators, five tasks each, 30 task attempts, 13 observed issue events — with outcomes coded in three classes and never collapsed: 21 initial responses aligned, 6 self-corrected after a neutral clarification, 3 not aligned at task stop. **A self-correction was never merged into a success, because needing a clarification is itself the finding.** Then a comparative round with a separate purpose, separate denominators and a published non-duplication rule between them.
- **W90 is the page's strongest single asset**: the study wrote its own eight-item threats-to-validity table — small convenience sample; participant overlap, six of the eight having prior programme exposure; within-participant learning; a prototype-versus-training-system comparison extending beyond individual components; sanitised fixed scenarios; first-response measurement, under which a fast wrong answer remains possible; a four-of-seven task subset; no live system connection — and stated what it refused to do: no significance tests, no confidence intervals, no power calculation, and an explicit instruction not to aggregate the three timed percentages into a single combined figure. **The page is about evaluation in high-consequence contexts; this is what evaluating honestly looks like when the numbers are good.**

---

## What this page must not claim

- **These engagements must not appear on this page:** Oceaneering — no usability evaluation and no test took place; the two sessions were design reviews and no dispatch operator took part (O14, O95); AIT — nothing was tested with users (A15); the MDU — no user research and no testing (M27, M28); Assemblio — nothing was tested with planners or workers (N14); KISPE — nothing was tested with users (K26), and its verification vocabulary is specification, not completed testing; Topera — nothing was tested with anyone (T16); visioncheckout — no evaluation of the new designs, and not high-consequence.
- Streetec: the testing validated comprehension of a finished design in a parked car — never a claim that it validated the product in use over time; no safety result.
- Raymarine: no safety, rescue or collision outcome; "prevented wrong calls" is one word away from false — the supportable claim is that zero wrong-recipient requests were submitted under the confirmed condition against two under the immediate condition, and that three initial selection errors were caught at the confirmation screen; cohort patterns are observational and never explained causally; no statistical claim.
- Schone: the pass figures are design-conformance results, never task completion rates, error rates or satisfaction scores; research entered late and functioned as validation and correction — neither research-led discovery nor no-research.
- Maritime VTS: never average the three percentages; never "eliminated operator error"; never describe the eight as independently recruited; never convert faster into better in one clause; never attach an operational consequence.
- The industrial engagement: E9 is client-reported and always carries its qualification.

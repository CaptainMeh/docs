# `/capabilities/research-in-complex-operational-contexts`

---

## Domain vocabulary

- Domain learning — acquiring operational understanding of a domain sufficient to design for it; the prerequisite for research, not an outcome of it; link to `/glossary/our-concepts/domain-learning`
- In-situ observation / contextual observation / field research — observing work in its actual operational environment rather than asking about it in interviews or simulating it in a lab
- Workaround patterns — the compensating behaviours users develop to survive interface failures; visible only through observation, rarely surfaced in interviews
- Real-time protocol adaptation — adjusting the research protocol during live fieldwork based on what early sessions reveal; distinct from standard programmes that fix protocols in advance
- Triangulation-not-confirmation — using multiple evidence sources against each other to find discrepancies; the discrepancies are the findings; link to `/evidence/how-we-work-with-evidence/triangulation-not-confirmation`
- Stakeholder interview vs. user interview — different purposes, different participants, different validity; stakeholders reveal organisational priorities; users reveal operational reality; neither alone is sufficient
- Research corpus — the documented body of evidence from a research programme; Gexcon (102 tasks), Petrol (532 transactions), Triopsis (47 microtasks)
- Blanks phenomenon in research (link to `/glossary/our-concepts/blanks-phenomenon`) — participants who cannot articulate the rationale for their own practice; their tacit knowledge must be surfaced through observation and structured teaching methods, not through direct questioning
- Participant access — getting to the right participants in complex operational contexts (professional captains, surgeons, CFD engineers in their working environment) is itself a research challenge
- Representative participant selection — in expert tools, representative users are domain experts; non-expert participants produce invalid findings

---

## Evidence to draw on

### Torqeedo maritime HMI (most immersive research in the portfolio)
- Research was operationally immersive by necessity — the product operates in conditions that cannot be replicated elsewhere
- **12 sea trials over 6 months; 15 professional captains; temperature range −5°C to +35°C; conditions: vibration, sharp vessel movement, spray, glare from cold water, rain, gloved interaction, night operations through early morning**
- The discovery that only sea trials could produce: the emotional dimension of vessel control interfaces — the relief crews experience when information remains stable as the vessel behaves unpredictably. This finding could not have been produced through interviews or laboratory observation. It became a structural design requirement.
- The physical blueprint of the vessel — propulsion motors, central control centre, power balancing system, auxiliary loads — was used as a reference structure. Grounding the research in the vessel's actual architecture ensured correspondence between what was discovered and how the vessel actually works.
- These sea trials produced five distinct evidence sources: legacy system analysis, sea trial observation (15 captains, 12 sessions), controlled experiment (24 subjects), eye tracking (7 subjects), and participant feedback (15 captains structured). Each source had a different role; all five were used against each other, not in parallel.

### IDEXX Animana (largest-scale field research programme)
- **35 clinics; 150+ participants; 2 weeks; 3 countries (Netherlands, UK, Germany)** — urban single-practitioner clinics, suburban group practices, large corporate networks
- 4 role types: vets, nurses, reception staff, administrative staff — from first-week users to ten-year veterans. The range was deliberate: separating learning-curve problems (temporary) from structural problems (permanent) requires both ends of the experience spectrum.
- Real-time protocol adaptation: when handwritten workarounds appeared in multiple clinics (checklists taped to monitors, printed reference sheets near terminals), field protocols were updated in real time to probe those patterns in subsequent visits. The research programme changed as it ran — and produced better findings because of it.
- A central coordination point allowed real-time data compilation during live fieldwork, enabling protocol adjustments before the next visit.
- The central finding — reception and clinical roles have incompatible cognitive requirements — was not in any participant's explicit description. It emerged from observing the same system used by different roles under genuinely different conditions.

### Triopsis workforce management (multi-method structured research)
- **43 user interviews, 21 participants; 3 in-situ observation sessions; 5 stakeholder interviews; competitive benchmarking**
- The in-situ observation sessions were conducted under real operational pressure — schedulers handling weather incidents, conflicting locations, overlapping jobs, sudden crew shortages. Interviews had not produced an accurate picture of this; observation did.
- **47 microtasks mapped** from the combined evidence — the research corpus that made the design process tractable
- Stakeholder interviews (5) surfaced competing organisational priorities that user research could not: the founder's understanding of the product differed from developers', which differed from sales', which differed from key clients'. These differences were structural tensions in the organisation made visible through stakeholder research, not noise to filter out.
- The five evidence sources were held in tension: stakeholder priorities conflicted with each other; user self-report conflicted with observed behaviour; benchmarking revealed gaps the client hadn't identified as problems. Each conflict became a question the design had to answer.

### Gexcon CFD simulation (deepest domain learning + densest research corpus)
- Domain learning came first and preceded the formal research programme
- The team studied calibration manuals, watched YouTube tutorials, reviewed Gexcon's internal training videos, and ran controlled tests inside the application before any user sessions began. Two intensive four-hour stakeholder sessions established the underlying workflow logic.
- Franz Zdravistch (Chief Training Engineer): "I can't believe how much you learned on your own in three days, even some of the experts I train need more time." — direct quote, use verbatim; confirms the domain learning depth required before research could begin
- **24 user interviews; 23 workplace observations; 9 stakeholder interviews; 12 competitor products benchmarked**
- **102 individual tasks documented** — goals, frequency, difficulty, actions, hierarchy of needs within sequences. This is the research corpus that preceded all design decisions.
- The domain learning revealed: the product concentrated all expert work in a single environment (unlike enterprise software distributed across multiple simpler screens). This determined the research scope — 102 tasks rather than the 20–30 tasks typical in enterprise software audits.

### Swiss petrol forecourt (research as baseline documentation)
- **40 hours of structured observation; 532 transactions documented and coded; 36 cashiers observed; 24 interviews**
- **Peak transaction rate: 84 transactions per hour** — documented during field observation, not from interview self-report. This figure became the design standard.
- The 532-transaction corpus was not just a count — each transaction was documented and coded by type and complexity. Complex mixed transactions ran up to 7 minutes. This documentation created the baseline that made later design evaluation against real operational conditions possible.
- The research captured what cashiers actually do under peak load (including workaround sequences they had developed over years) — not what they describe doing in interviews.

### Akrivia Health (multi-institutional research with incompatible governance)
- **14 individual interviews and 3 focus groups, 24 participants** across NHS analysts, academic researchers, and pharmaceutical research staff
- The three groups were not aggregated into a single "researcher" persona — the research treated them as three distinct institutional contexts with different governance paths through the same system. The differences between them were the primary research finding.
- NHS analysts: clear governance boundaries between research and operational use. Academic teams: lengthy ethics and data access approvals. Pharma teams: audit obligations and regulatory reporting requirements.
- Triangulation across groups: what NHS analysts needed from the interface conflicted with what pharma teams needed; what academic researchers assumed about the system differed from what it actually did. These conflicts were the findings that shaped the competitive vector.

### Elsner Elektronik (multi-source evidence for a consumer embedded product)
- Four distinct evidence sources used against each other, not in parallel:
  1. Ergonomics research (Colle & Hiszem 2004 on touch targets) — determined exact touch target sizing parameters
  2. 20-user survey (distributed and collected by client) — confirmed known issues and yielded two undocumented use cases and one new mental model
  3. Formal usability testing: 12 subjects, one structured session
  4. Dealer prototype reviews: 30 responses from 10 countries — surfaced market-specific variation and regional competitive context that no other source could reach
- The dealer feedback was the source that revealed behaviour differences across markets. Benchmarking disqualified gestural patterns that survey enthusiasm might otherwise have favoured. Engineering sessions revealed firmware behaviour that neither user research nor ergonomics literature addressed.

### WCO/IPM (multi-country participant sampling)
- **47 participants across Italy, Romania, Uzbekistan, Algeria, and Spain**
- The geographic spread was not incidental — it was deliberate validation that a design for 107 governments held under genuinely different operational conditions
- Remote observation combined with workshops allowed research across member administrations where on-site visits were not feasible for all markets

### Squaremind dermatology scanning device (deliberate unstructured observation + clinical co-validation)

Two methodologically distinct research contributions from this engagement, at different points in the work.

**Deliberate unstructured observation of a failing system (Sandbox Experiments):**

Creative Navy conducted 4 observation sessions of the existing patient interface in use, in France, before any design decisions were made. The sessions were deliberately not structured as measurement. This was a methodological decision, not a resource limitation.

The reasoning: the existing system had produced 2 completions from 14 patients in Squaremind's own internal test. Applying a structured measurement protocol to a system performing at this level would produce noise rather than signal — the failures were so pervasive that counting them would not identify what caused them. What the sessions were designed to produce was situated understanding: the physical relationship between patient and screen, the way confusion manifested in body movement before abandonment, the scan sequence and its physical demands, the absence of any guidance structure when a step went unclear.

This is a specific methodological principle: when a system is performing so poorly that systematic measurement produces noise rather than insight, the right research instrument is unstructured observation. The observation finds the terrain. Structured measurement makes sense once the terrain is understood well enough to know what to measure.

**Post-redesign ecological testing with clinical co-validation:**

The post-redesign testing introduced a research instrument not present in other engagements in this set: an independent dermatologist hired and paid by Creative Navy to co-conduct the sessions. 29 users across London (12) and Paris (17), age-stratified across three cohorts (20–35, 35–45, 45–65). The dermatologist's participation added a clinical judgement dimension that binary completion data cannot contain: a patient who completed the scan but was incorrectly positioned for clinically significant body regions would register as a completion in the testing data but not in the clinical assessment.

The age stratification was a deliberate participant selection choice. The commercial claim required the interface to work for the full clinical patient population, not only for digitally fluent younger users. Age-stratified sampling was the only methodology that could produce evidence credible to a clinical buyer about whether the interface held across that full range.

**What the Squaremind research contributes to this page:** two methodological instances not represented elsewhere. First, the deliberate-unstructured observation principle — when measurement of a failing system produces noise, observation produces understanding. Second, the independent clinical co-validation as a research instrument — adding a domain expert's clinical judgement to complement and contextualise usability test completion data.

**Evidence basis: both research phases Creative Navy-designed and run. Pre-redesign sessions: unstructured, no measurement, deliberate methodological choice. Post-redesign testing: ecological, age-stratified, independent dermatologist co-conducted; 27/29 completions, 12/12 recoveries, recovery times timed to the second.**

### The industrial engagement (in-situ observation in a machining cell)
- The client is **a European industrial automation vendor whose process control software coordinates machining cells**.
- Operators were observed in situ at the client's facility (E6), and five personas were built from direct research sessions covering six individuals across three role types — not client-supplied (E5).
- The environmental findings only field research surfaces, **phrased as observed, never as general truths about the industry**: every operator screen is bolted to its own machine, so to learn a machine's state the operator walks to it, and overhead stack lights exist because no screen is readable across the hall (E10); all work at standing height, with no seated station in the cell (E11); mixed daylight through a floor-to-ceiling glazed façade plus industrial ceiling light — strong side-light, glare and reflections (E12); medium ambient noise from running machines, with music also playing (E13); oil, coolant and metal swarf throughout, aisles roughly one person wide (E14); bare hands observed, with no glove use evidenced (E16).
- The payoff (E43): a named operator's complaint that he could not see the screen from where he stands was answered with a specified audio feedback pattern for RFID scanning — distinct beeps for first and second scan, valid versus invalid pallet, and distinct states for empty/occupied chuck and loading station.

### Maritime traffic software portfolio (access negotiated as a release condition)
- The client is **a European vendor of maritime traffic monitoring, inland navigation and communications software for port authorities, coastal administrations and waterway operators**. No speech from this engagement is quoted or reported.
- **The access structure is the genuinely transferable part: research access to end-customer operators was not assumed but negotiated as a release condition at a management gate, with a named client owner and a verification method attached** (W28). Approval was conditional, with seven conditions each carrying a named client owner and a verification method — among them access to representative operators including eight requirements sessions and controlled prototype study access, and sanitised scenario data with active radio and traffic actuation prohibited through prototypes. A written release followed the conditional approval and authorised mobilisation. **That is a procurement answer to a research problem**, where the page's other entries describe what was done once access existed.
- What the access produced (W30): eight moderated requirements sessions with operators and supervisors — **the client's end customers' operators, professional VTS operators and shift supervisors, not vendor staff in operator roles**. Two had taken part in discovery; six were new to the programme. Field observation happened in **operational VTS control rooms at a customer site** — the control rooms are not located further than that.
- **The sanitisation regime and the constraint it imposes — name the trade** (W32, W69): research material was sanitised throughout — anonymised geographic areas, vessel labels, AIS and radar records, replay events and equipment states — and no participant issued navigation instructions, controlled radio equipment or carried live traffic responsibility during a session. Research that must produce findings about interpretation under uncertainty, in an environment where no live data may be used, has to construct its uncertainty as fixtures: a dense traffic condition of 48 simulated targets with three traffic alerts, one equipment fault and two advisories; an identity condition of two nearby radar plots beside an unresolved AIS association; a degraded condition interrupting a sensor feed; a handover condition of seven open items. **Creative Navy observed operators in working control rooms, using sanitised scenarios rather than live traffic — both halves, always.**

### visioncheckout self-checkout (a focused five-day programme that still produced a measurement base)
- **visioncheckout**, a German vendor of computer-vision self-checkout systems for staff restaurants and catering. The product is in development; nothing has shipped. **Client positions are reported, never quoted.**
- **This is a research shape the page does not otherwise hold.** The page's entries run toward immersion and scale; this is a tight programme that still produced a measurement base — and **stating its size plainly is what makes it credible**.
- **Required framing: Creative Navy conducted field research at six locations across three organisations over five days, observing 563 interactions with the system in live operation. Transaction durations were measured with a clock during observation rather than estimated or self-reported. The research also included interviews with 34 users and 13 catering staff. One researcher, five days — a focused programme, not a longitudinal one. The timings measure the system being replaced, never the redesign.**
- The measured base (V14–V21): 563 interactions observed — the engagement figure, and no other observation figure may appear; standard transactions approximately 13 seconds at the chemical manufacturer's staff restaurant, approximately 11 seconds at the automotive supplier's canteen, approximately 25 seconds at the large public leisure venue (V16); unusual transactions ran to more than 20 seconds (V17); at the leisure venue roughly two thirds of observed transactions were multi-tray (V18); **when an error occurs it takes one to four minutes to resolve, during which three to twelve people cannot check out (V21) — an observed consequence of a measured duration, not an independently counted figure.**
- The observation-only findings (V27–V31), written as observations with no percentages: overhead lighting commonly casts a dark area on both the screen and the tray surface, and one site was simply dark (V27); at some installations about 70 cm separates display and the user's head — further than the viewing distances the type-size specification had assumed, one of the engagement's best research-to-design traces: a specification checked against installations in the field, found short, and answered by raising defaults rather than adding a mode (V28); units are hard to position because people approach the counter from both sides (V29); at two of the three organisations a member of staff oversees the process (V30); experienced users know how to weigh food and are confident editing the basket (V31).
- **V38 and V39 are the page's best examples of workaround patterns**, which its own vocabulary names: regular canteen users have learned to avoid the empty-glass charge rather than report it, while at the public venue staff intervene (V38); and an employee intending to pay by credit card forgets to present the employee card for the discount, and pays more than they should — over-trust costing a real person money, observed in the field (V39).

---

## What this page must not claim

- **This page's subject is research conducted in operational contexts. The following engagements conducted none and must not appear here:** KISPE (no research in an operational context — K26, K27); Oceaneering (no field research, no observation, no depot visit — O96, O97); **Raymarine** (twenty-four bench sessions on a manufacturer-built rig is not contextual inquiry — R90; the risk is high because it shares a filing category with Torqeedo's sea trials and Cox Marine's scenario testing); **Schone** (nine operators in interviews and walkthroughs at the end of UX development is not contextual inquiry — D54); the MDU (no user research, no testing, no observation at sea — M27, M28); AIT (no field research — A15); Assemblio (Creative Navy never stood on a shop floor — N16).
- Maritime VTS: every test used sanitised data in a training or prototype configuration, never a live traffic position; do not locate the control rooms — "operational VTS control rooms at a customer site" is the whole of it; this engagement's control-room observation must never make adjacent marine entries look better evidenced than they are.
- visioncheckout: no percentage may be attached to any observed-but-not-quantified pattern; the measured timings describe the system being replaced and never read as a result; never let the word "testing" attach to the 34 interviewees — nothing about the new designs was tested (V46); the 34 screens delivered and 34 users interviewed are unrelated figures and never appear in the same sentence undisambiguated.
- The industrial engagement's field observations belong to it alone and lend weight to no other engagement on this page.

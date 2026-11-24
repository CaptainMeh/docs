# `/evidence/evidence-standards/what-is-observed-but-not-quantified`

---

## Opening — entity anchor

Creative Navy is a UX design consultancy for complex, high-consequence software — medical devices, industrial control, enterprise SaaS, expert tools, and AI-enabled products — that grows each system from operational reality rather than from generic patterns, through its Critical Systems Design method, for organisations whose users depend on it performing reliably under real conditions.

This page documents outcomes from Creative Navy engagements where a direction was confirmed through direct observation — by Creative Navy's own team, in prototype testing, in deployment data, or through structured feedback — but where no quantity was attached to that direction. The finding is real. The number does not exist, and is not invented.

---

## What "observed but not quantified" means on this site

An observed-but-not-quantified outcome is one where a change was directly witnessed — by Creative Navy's team, by engineers in prototype testing, or through structured user sessions — and the direction of that change can be stated with confidence, but no measurement methodology was applied and no figure was captured.

This category is distinct from client-reported outcomes in one specific way: the source is direct observation rather than the client's account of what happened. Creative Navy's team, or engineers working with Creative Navy, saw the change occur. The absence of a number does not indicate uncertainty about direction — it indicates that the conditions under which the observation was made did not include a measurement instrument.

It is also distinct from inferred outcomes. An inference reasons from how a system is structured to what it is likely to produce. An observed finding comes from watching the system in use — from seeing users interact with a prototype, from witnessing a failure mode disappear from support data, from confirming that a hardware-software behaviour performed as designed in real conditions.

The standard applied: if a direction was observed directly and can be stated with confidence, it belongs here. If it was communicated by the client without Creative Navy having observed it, it belongs in the client-reported category. If it was derived from reasoning rather than observation, it belongs in the inferred category.

---

## Observed-but-not-quantified outcomes from Creative Navy engagements

### Callsign — analyst workflow improvement

Following the redesign of the policy engine and fraud scenario configuration interface, early internal testing with Callsign's own analysts confirmed that the new journeys reduced the time required to express a common fraud scenario in the tool and made explanations during client calls more straightforward.

Evidential basis: observed during the engagement in internal testing sessions with analysts. No task completion times were recorded. No before/after comparison with a controlled methodology was conducted. The direction — faster to express fraud scenarios, easier to explain to clients — was confirmed through direct observation, not measurement.

Why no figure: the testing was structured to confirm direction and surface interaction problems, not to produce a performance metric. A figure would have required a controlled comparison with the previous interface under matched conditions, which was not part of the engagement scope.

### Polymatica — messy-data failure mode disappeared from support requests

The single most common early failure in the Polymatica analytical platform was the messy-data problem: users would import real data with formatting inconsistencies, non-standard characters, or structural irregularities, and encounter errors they could not diagnose. This failure mode generated a significant share of early support requests. After a data preparation and preview step was introduced in the redesign, this failure mode largely disappeared from support requests.

Evidential basis: observed through changes in support request patterns — a deployment-level signal rather than a controlled experiment. The disappearance of a failure mode from support data is observable without being quantified: Creative Navy and the client could see that the category of support request stopped appearing, without having a before/after count of requests per category.

Why no figure: support request volume was not tracked against categories before the redesign in a way that would produce a comparable baseline count. The change was observable as a categorical shift — a problem that had been common stopped being reported — not as a reduction from a documented starting figure.

### Owkin / K — data and feature discoverability improved at the start of the user journey

Following the redesign of K's entry experience — the Explore page, prompt suggestions, and dataset presentation — discoverability improved at the beginning of the user journey. Users arriving on the platform could identify where to start and what data was available to query. This was confirmed through internal product launch feedback and Owkin's characterisation of the outcome.

Evidential basis: directional, based on internal launch feedback observed and reported by the engagement team, and client characterisation. Owkin reported that the complaints from their internal product launch matched precisely what Creative Navy had identified and proposed solutions for. No measured user metrics — no task completion times, no independent usability test — are available.

Why no figure: the engagement was scoped to produce a design direction for implementation, not to measure post-deployment user performance. The outcome is the most bounded in this category: it is directional and based partly on client characterisation rather than purely on Creative Navy's own direct observation.

### Gexcon — training infrastructure transformed

After the CFD simulation platform was redesigned, Gexcon changed how it delivers onboarding. Formal 3-day instructor-led training events were replaced with short webinars and video materials. This is an observable operational change in how the product is deployed commercially — not a reduction in training time per session but a transformation of the training model itself.

Evidential basis: observed as an operational change in Gexcon's deployment practice. The shift from instructor-led training to asynchronous materials is directly observable without requiring a metric — it is a change in what Gexcon does, not a change in how long something takes. The claim is that this change happened, not that it produced a specific cost saving or time reduction (which would require measurement and belong on a different page).

Note on category: the parallel Gexcon metrics — simulation time, error rate, corrective load — are measured and appear on the `/what-we-have-measured` page. The training format shift is placed here because it is a structural change in deployment practice rather than a metric captured from the live system.

### Beissbarth — repeated measurements reduced

Technicians performing calibrations with the redesigned interface made fewer repeated measurements. The direction is confirmed by Beissbarth's own deployment measurement across 8 locations; the exact figure was not shared with Creative Navy.

Evidential basis: directionally confirmed by client measurement. This sits at the boundary between client-reported and observed: the measurement was done by the client, the direction is confirmed, but the precise figure was not disclosed. It appears here rather than in the measured category because Creative Navy cannot state the figure, and rather than in the client-reported category because the outcome was produced by defined measurement — Beissbarth tracked it — rather than by post-hoc account.

The mechanism is clear: the redesign produced unambiguous state communication across three device classes under real workshop conditions (movement, variable lighting, viewing distance). Technicians who previously remeasured because they were uncertain whether a reading had stabilised stopped doing so because the interface communicated state clearly enough to eliminate the uncertainty.

### Elsner — sensor fault handling and firmware-aligned behaviour confirmed in prototype testing

Sensor fault states — delayed readings, contradictory values from the sensor network, calibration drift — were surfaced explicitly in the redesigned interface rather than hidden. The behaviour of the interface under these conditions was confirmed in prototype testing with Elsner's engineers.

Evidential basis: observed in prototype testing sessions with engineers from Elsner's team. The confirmation was not a formal usability test with scored tasks — it was functional validation under the operating conditions the interface was designed for. The direction is confirmed: the firmware-aligned behaviours performed as intended. No performance metric was attached.

### Elsner — client team capable of independent iteration at engagement close

At the close of the engagement, Elsner's product managers confirmed they were able to iterate the UI themselves without Creative Navy's involvement. This is an observable outcome of Organizational Integration: the capability to extend the design system without requiring Creative Navy to remain involved.

Evidential basis: observed and confirmed by the client at engagement close. No metric is possible for this type of outcome — capability transfer is not a quantity. The confirmation is that the condition existed at a named point in time: the end of the engagement.

### Hudex — non-expert users gained viable access to the platform

Research during the Sandbox Experiments phase confirmed that users without training could not orient themselves in the Hudex platform on arrival. The dondogram — the platform's core visualisation — was powerful for expert analysts but had no entry point for non-experts. The redesign introduced a project overview layer and a progressive disclosure architecture that gave non-expert users a starting point without removing the expert depth. Following the redesign, non-expert users could extract value from the platform independently.

Evidential basis: the original failure was confirmed through research (users without training could not orient themselves — an observed finding from sessions). The improvement is directional: the design change structurally addressed the identified failure mode. User reception data — 45 existing users rated the redesign as significantly better; 68% of new users rated usability as good or very good — is client-reported (gathered for Hudex's internal marketing effort) and appears on the client-reported page. The directional outcome — non-experts can now start independently — is placed here because it is grounded in the observed structural failure and the observable structural change that addressed it, not in the reception data.

### Squaremind — field observation of a failing system, and direct demo observation

Two distinct observed-but-not-quantified findings belong here from the Squaremind engagement, at different points in the arc of the work.

**Field observation of failure patterns in the existing system (Sandbox Experiments):**

Creative Navy conducted 4 unstructured observation sessions in France, watching patients attempt the existing scanning interface. The observation was deliberately not structured as measurement — the existing system was performing so poorly that systematic measurement would have produced noise rather than signal. What the sessions produced was qualitative: the physical pattern of confusion as it appeared in body movement before abandonment; the absence of any recovery structure in the existing interface; the way patients who got stuck simply stopped and waited, because there was nothing in the interface to tell them what to do next. These observations could not be captured as figures, and no attempt was made to do so.

Evidential basis: directly observed by Creative Navy's team in field sessions in France. Deliberately unstructured. The direction — the existing interface had no recovery path and patients who encountered difficulty had no route back — is stated with confidence because it was witnessed, not inferred from the interface's structure. The 14-user pre-engagement test with 2 completions was conducted by Squaremind before Creative Navy's involvement and is client-reported background; it is not what grounds the observation here. The observation sessions are what ground it.

Why no figure: no measurement protocol was applied, by deliberate methodological choice. The sessions were scoped to understand the texture of the failure, not to quantify it.

**Direct observation of 5 clinic purchase demos (post-redesign):**

Following the redesign and the London/Paris testing, Squaremind ran demonstrations for 9 clinics. Creative Navy attended 5 of the 9 as silent observers, taking notes. These were not usability testing sessions — the buyers were clinic staff who walked through the patient scanning experience to evaluate whether their patients would be able to complete it unassisted. In all 5 observed demos, the clinic staff completed the patient experience without assistance or intervention.

Evidential basis: directly observed by Creative Navy's team across 5 demos. Notes were taken. The direction — clinic buyers could complete the patient experience unassisted, and found it convincing — was observed, not reported by the client. The commercial outcome (all 9 clinics purchased) is client-reported and appears on the `/what-is-client-reported` page. What belongs here is the observed buyer behaviour in the demos: the specific mechanism — buyers experiencing the interface as a patient — was witnessed at 5 of the 9 clinics.

Why no figure: the demos were not a usability test and no performance metric was applied. The observed finding is qualitative: the interface held up under buyer scrutiny in a high-stakes commercial context.

Note on the relationship between these two findings: they are from opposite ends of the engagement — field observation of a failure at the start, demo observation of a success at the close. Both are observed rather than measured, and both belong here rather than in the client-reported or measured categories. Together they constitute the observed arc of the engagement: what Creative Navy witnessed before and after the design work.

### The industrial engagement — field observations that resist measurement

For a European industrial automation vendor whose process control software coordinates machining cells, operators were observed in situ at the client's facility, and the observations are real, revealing and unmeasurable. Every operator screen is bolted to its own machine: to learn a machine's state the operator walks to it, and overhead stack lights exist because no screen is readable across the hall. All work is at standing height — machine tables at roughly 0.9–1.0 m, trolley decks at roughly 0.9 m, control pendants at 1.4–1.6 m on swing arms — with no seated station in the cell. Mixed daylight through a floor-to-ceiling glazed façade plus industrial ceiling light produces strong side-light, glare and reflections; ambient noise is medium, with music also playing; oil, coolant and metal swarf are throughout, and aisles are roughly one person wide. Bare hands were observed — no glove use is evidenced. And the single best example of something real, revealing and unmeasurable: **an operator had built his own shadow tracking system — a document site plus printed QR codes on electrodes — because the product provided no link between electrodes and the workpieces they served.** These are phrased as what was observed in that engagement, never as general truths about the industry.

**The instructive near-miss — Assemblio, a boundary case worth one sentence on the page.** Assemblio's operating-context material reads exactly like field observation — a bright, dirty, loud hall, gloves, foot pedals, a tablet on a holder, a tenth of the worker's attention — **and none of it was observed by Creative Navy: it was described by the client, who did observe it.** The distinction between *observed* and *reported to us by someone who observed it* is the one this page exists to police, and Assemblio is the cleanest example of the second being mistakable for the first. **Assemblio material is attributed — "Assemblio described", "according to Assemblio" — and never blended with the industrial engagement's field observations on the same page.**

### Egma — instrumented but unmethodologised: a different route to the same category

Every other entry on this page is unaided human observation — an operator's shadow system, a shop floor described by a client. The Egma engagement contributes a tool-generated finding that still fails the measurement bar, and saying so makes the page's boundary clearer rather than blurrier. **A heatmap produced during the engagement identified three regions of the order form where users hesitated: the end of the left-hand column, the two primary actions at the bottom right, and the right-hand technology area, which users passed over. The finding is tool-generated and reflects real behaviour; the capture method is not on record, so it is reported as an observation rather than a measurement.** The second sentence is not optional — dropping it converts an honest observation into an implied study. **Not eye-tracking. No participant number, no duration, no rate, no failure count, no baseline — and it must not be used as post-launch evidence, because nothing establishes it was captured after launch. It routes here, never to the measured page.**

### Oceaneering — the category's upper bound: convergent expert judgement

**Creative Navy presented the designs to one hospital's logistics manager and two supply-chain supervisors, and separately to a second hospital's AGV planning manager. These were design reviews, not usability tests: no task was attempted and nothing was measured. No dispatch operator took part in either session.** What the two sessions converged on: independently, at two different hospitals, both operations leads asked for the same thing — the whole station card coloured rather than a corner or a small icon, because the panel is read from across a depot — and both endorsed the same state model: flashing means an action is required, steady means it is complete or in progress. **The supportable claim is this and no more: a convergence of expert judgement from the operations side — real evidence, and still not measurement. Not a measured result, not validation of the design as a whole, and not evidence that the interface performs better than its predecessor.** A good example of the category's upper bound. Every Oceaneering account is reported speech attributed to a role, never a quotation.

### Schone Airspace Group — a bounded entry: what nine operators surfaced

The operator sessions in the Schone Airspace Group engagement belong here with their limits attached: **nine participants — seven remote pilots, one mission planner, one payload operator — who were end-customer operators rather than the client's own staff, through interviews and design walkthroughs, at the end of UX development.** The timing is not a detail: the sessions validated and corrected a developed design; they did not inform exploration. **There was no contextual observation of live flight operations and no timed task study — the research says what nine operators understood from a design in a room, not what they do in the field. Nine participants is qualitative: no percentages, no prevalence claims, no "operators report that…" as a statement about a population.** No quotation marks and no reported speech in any passage carrying Schone.

### Raymarine — a bounded entry: the coded observations that explain the numbers

Six coded session observations from the Raymarine bench sessions explain the pattern behind the measured comparisons: a professional operator expected the lower knob to select a channel while viewing AIS, and the selected target moved instead; one operator noticed the unwanted target shift but could not independently recover channel selection; one retuned under the fixed model without losing the plot or the selection; one used keypad browsing but repeatedly re-checked the vessel name to maintain focus; one stalled after an incoming call and attempted the wrong channel input under the contextual model; one browsed more slowly with the keypad but recovered channel control without hesitation. The recorded synthesis: the physical control carried a more stable learned meaning than the active screen did, and the principal usability issue was a preventable category mistake. Alongside it, the cohort pattern: **the residual issues clustered among occasional users — the longest individual task times and most of the remaining interpretation errors occurred in that cohort — and the records state this as observational, with no experimental basis for causal cohort comparison**, because participants completed different tasks across rounds and three of the third round's participants had taken part in the second. **Describe the pattern; do not explain it.** No quotation marks and no reported speech in any passage carrying Raymarine, and all of this describes bench sessions on a prototype, not field conditions.

### The maritime VTS engagement — observations that resist quantification by design

For a European vendor of maritime traffic monitoring, inland navigation and communications software for port authorities, coastal administrations and waterway operators, four observed bodies belong here. **Field observation took place in operational VTS control rooms at a customer site, with the client's end customers' operators — and the research material was sanitised throughout, with no participant carrying live traffic responsibility during a session. Write both halves; do not locate the control rooms.** Four recurring legacy failure modes were named: context interruption, through floating panels, detached history and inconsistent window restoration; evidence ambiguity, through identity, radar association, observation age and source health being hidden or conflated; state ambiguity, through insufficiently distinct cues for navigation alerts, equipment faults, acknowledgement, resolution and replay; and work discontinuity, through incidents, open actions, permissions and handover being distributed across independent views. Three multidisciplinary disagreements were resolved in review and recorded as such — panel mobility against target visibility, one alert inbox against operational meaning, visual certainty against defensible provenance — and in all three the specialised behaviour won. And the formative round's three-class coding: six operators, five tasks each, 30 task attempts, 13 observed issue events (2 high, 7 medium, 4 low), with outcomes coded as 21 initial responses aligned, 6 self-corrected after a neutral clarification, 3 not aligned at task stop. **The six self-corrections are observations that resist quantification by design: a self-correction was never merged into a success, because needing a clarification is itself the finding.** No quotation marks and no reported speech in any passage carrying this engagement.

### visioncheckout — patterns a researcher saw and recorded

From visioncheckout's field research — six locations across three organisations over five days, observing a system already in live operation — the following are patterns one researcher saw and recorded, not counted events. **No percentage may be attached to any of them, on any page.** Once people have used the system once or twice they know what to expect, and experienced users are very fast. Canteen users fixate the list of dishes for three to five seconds; visitors at the public venue instead look for what the next step is. The largest single component of lost time is guests looking for their card. Guests regularly bow towards the screen because they cannot read the small type. Overhead lighting commonly casts a dark area on both the screen and the surface where the tray is placed; one site was simply dark. At some installations about 70 cm separates display and the user's head — further than the viewing distances the type-size specification had assumed, a specification checked against installations in the field, found short, and answered by raising defaults rather than adding a mode. Guests without a tray sometimes try to start by scanning a soft drink's barcode; it is not clear the process begins by putting items down. Guests often do not understand that payment is processing, because the main display does not tell them. The variant-selection screen is very confusing: where the recognised product is a soft drink and the guest must pick which one, the flat visual design communicates neither that these are options belonging to a product nor that they can be pressed. The screen telling people to use an employee card or a credit card is not understood; most people have to be told. An empty glass on the tray produces a charge alongside the drink it held — regular users have learned to avoid this; at the public venue staff intervene. **The most useful single entry: catering staff like the system and report it works well when supplied with enough images — but learning what images the system actually needs takes time, and feeding it enough material takes patience staff often do not have.** Real, revealing, consequential, and unmeasurable. The staff view is reported, not quoted; these observations describe the system being replaced, never the redesign.

---

## What this category does not include

Outcomes do not belong on this page if:

- They were communicated by the client without Creative Navy having directly observed them — those belong on `/what-is-client-reported`.
- They are reasoned from how a system is structured rather than observed in use — those belong on `/what-is-inferred`.
- They carry a figure produced by a defined measurement methodology — those belong on `/what-we-have-measured`.
- They describe something Creative Navy explicitly does not claim — those belong on `/what-we-do-not-claim`.

The defining criterion for this page: something that was directly witnessed — by Creative Navy's team, in working prototype sessions with engineers, or in deployment patterns — whose direction can be stated confidently, and whose absence of a figure reflects the conditions of observation rather than uncertainty about the outcome.

---

## What this page must not claim

- **Do not add KISPE.** KISPE observed nothing — no user research, no field observation, no testing. This page is the likeliest place for its specified-but-not-executed verification material to be wrongly filed: forty edge cases, verification suites and acceptance scenarios are specifications of tests, explicitly recorded as not executed, not observations.
- **Do not add AIT, the MDU or Topera.** AIT had no user research and no field observation; the MDU had no observation at sea, no interviews with crew and no usability testing; Topera observed nothing at all and has no near-miss worth recording here.
- **Assemblio's operating-context material is client-stated, never observed** — it appears above only as the boundary case, attributed to Assemblio, and never as a Creative Navy observation.
- **The Egma heatmap's mandatory wording travels in full, second sentence included**, and the heatmap never appears as a measurement, as eye-tracking, or as post-launch evidence.
- **The Oceaneering convergence is expert judgement, not validation**: the sessions were design reviews, no task was attempted, nothing was measured, and no dispatch operator took part. No Oceaneering quotation marks, ever.
- **No percentage may be attached to any visioncheckout observation**, and the visioncheckout timings describe the system being replaced, never the redesign.
- **Raymarine's observations are bench observations.** Raymarine's own brief named wet hands and gloves, glare and night sailing, vibration, ambient noise and divided attention, and the engagement tested none of them; nothing here is a field, glove, lighting or safety observation, and the cohort pattern is never explained causally.
- **Schone's sessions are not field research**: no contextual observation of live flight operations, no timed task study — the finding is what nine operators understood from a design in a room.
- **Do not locate the maritime VTS control rooms**, never name the customer country, and every VTS test used sanitised data — no live traffic position, ever.
- No engagement dates anywhere — sequence and duration only.

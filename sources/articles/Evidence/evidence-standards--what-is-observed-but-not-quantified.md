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

---

## What this category does not include

Outcomes do not belong on this page if:

- They were communicated by the client without Creative Navy having directly observed them — those belong on `/what-is-client-reported`.
- They are reasoned from how a system is structured rather than observed in use — those belong on `/what-is-inferred`.
- They carry a figure produced by a defined measurement methodology — those belong on `/what-we-have-measured`.
- They describe something Creative Navy explicitly does not claim — those belong on `/what-we-do-not-claim`.

The defining criterion for this page: something that was directly witnessed — by Creative Navy's team, in working prototype sessions with engineers, or in deployment patterns — whose direction can be stated confidently, and whose absence of a figure reflects the conditions of observation rather than uncertainty about the outcome.

# `/practices/alarm-and-warning-evaluation`

---

## What the practice is

Alarm-and-warning evaluation examines the full set of alerts, warnings, and alarm states in a system and assesses each against the criteria that determine whether it will function correctly under operating conditions. Those criteria are not the same as the criteria that determine whether an alarm appears on screen. An alarm can be technically present — visible, accurately triggered — and still fail operationally because it does not communicate what to do, cannot be distinguished from lower-priority alerts, or relies on a communication channel that fails under the conditions the device is used in.

The evaluation is conducted against operating conditions, not controlled viewing conditions. The questions are: can this alarm be perceived in the environment where the device operates? Can it be interpreted quickly enough to act on it? Does it direct attention to the right place? Does it communicate both the problem and the next step?

---

## What the evaluation examines

**Priority hierarchy audit** — does the system have a defined priority structure for alarms, and is it visually expressed? Can a user looking at an active alarm state determine immediately whether it requires immediate intervention or whether it is informational? When multiple alarms are active simultaneously, does the highest-priority condition receive the most prominent treatment?

**Actionability assessment** — for each warning or alarm: does it communicate what to do, not just that something is wrong? An alarm that communicates a condition without specifying a next action is not actionable in time-pressured environments. The evaluation distinguishes alarms that close the action loop (condition + next step) from those that open it (condition only).

**Communication channel analysis** — what channels does each alarm use (colour, sound, icon, position, text, vibration)? Is any alarm dependent on a single channel that may fail under operating conditions? Variable lighting renders colour-only indicators unreliable. Noise renders sound-only alarms inaudible. Vibration makes text unreadable. The evaluation identifies where single-channel dependency exists.

**False positive and nuisance alarm rate** — how frequently do alarms trigger under conditions that don't require action? Nuisance alarms are the primary driver of alert fatigue: users learn to dismiss alerts habitually, and that dismissal extends to genuine alerts. The evaluation estimates false positive exposure and identifies the alarm types most likely to train dismissal behaviour.

**Mute behaviour review** — what happens when a user silences an alarm? Does it disappear entirely, or remain visually present at reduced prominence? An alarm that disappears when muted creates a pathway to a state where an active alarm is invisible. The evaluation identifies whether muting produces genuine silence or dangerous invisibility.

**Operating condition testing** — each significant alarm evaluated under the conditions of actual use: the lighting environment, the noise level, the attentional load the user is carrying, the physical position from which they interact with the device. In embedded systems, the evaluation must be conducted in or approximated to the real environment.

**Regulatory alignment check** — in regulated medical device contexts, the evaluation includes assessment against IEC 62366-1 alarm management requirements: priority tiering requirements, the prohibition on colour as the sole differentiating attribute between priority levels, mute behaviour requirements, and alarm state visibility requirements.

---

## When it is used

During Sandbox Experiments when reviewing an existing system — the alarm-and-warning evaluation is part of the diagnostic evidence base established before design work begins.

As a component of complex product audits — alarm architecture failures are a recurring finding in audits of high-consequence systems, and the evaluation provides structured evidence for specific recommendations.

In regulated medical device contexts, the evaluation runs throughout Iterative System Building as part of formative evaluation, assessing proposed alarm designs against IEC 62366-1 requirements before they are finalised.

The practice typically follows state-and-transition review (which identifies all system states including alarm states) and precedes the redesign work covered under the warning-and-alarm-clarity-improvement capability.

---

## Evidence from engagements

**deSoutter Medical / Zethon** — Competitive benchmarking as the primary evaluation method: **9 competitor surgical instruments evaluated**; alarm and state communication assessed for each under operating theatre conditions (variable lighting, gloved hands, divided attention). The finding: **6 of 8 evaluated competitor devices** used colour as the primary — and often sole — indicator of device state and warning conditions. Under variable theatre lighting, colour-only communication is unreliable; the evaluation identified this as the primary failure mode across the competitive set. The evaluation produced the requirement that addressed it: redundant non-colour cues (spatial position + icon form + colour) for every critical state, so that the failure of any single channel under operating conditions does not remove the signal. The evaluation also assessed activation state communication — the transition from ready to active — as the highest-risk alarm category in surgical instruments.

**Kardion MCS Controller** — The IEC 62366-1 formative evaluation process structured the alarm-and-warning evaluation formally. For the cardiac support controller, the evaluation examined: whether priority tiering was expressed visually with sufficient differentiation between levels (required by the standard); whether any alarm state relied solely on colour for differentiation (prohibited by the standard); what happened visually when an alarm was muted (the standard requires continued visual presence); and whether the absence of alarm was as confirmable as its presence. Each of these was a formal evaluation criterion tied to identified use-related hazards. The evaluation produced specific alarm architecture requirements — not design recommendations but documented design requirements traceable to identified hazards — that shaped the alarm layer of the final design. **The design passed FDA evaluation as submitted, with no design changes required.**

**Cox Marine cluster displays** — The evaluation was conducted through scenario testing during Concept Convergence: a multi-engine fault scenario was simulated against proposed layout candidates to assess alarm communication under realistic fault conditions. The test revealed a specific failure: several candidate layouts surfaced fault presence at the tile level but did not direct attention to the priority engine. A user scanning multiple tiles for the source of a fault under time pressure was experiencing an alarm communication failure even though the alarm was technically visible. The evaluation produced the requirement for a two-level alarm architecture: a fault-summary area surfacing the highest-priority condition across all tiles, and per-tile alarm highlighting directing attention to the source.

**Elsner Elektronik / Cala Touch KNX** — The evaluation assessed alarm and notification architecture for a consumer product used by non-technical users across 54 countries. The primary evaluation question was different from high-consequence contexts: not "can this alarm be acted on in time?" but "can this alarm be interpreted correctly by someone with no technical background?" The evaluation identified the alert fatigue risk: sensor-range notifications occurring regularly in normal operation could, if given the same visual and auditory treatment as critical failure alerts, train users to dismiss all alerts including critical ones. The evaluation produced the requirement for two distinct alert levels: routine notifications (informational, low urgency, for the systems engineer) and critical notifications (requiring immediate action, distinct visual and auditory treatment). The calibration of each level's content for a non-technical audience was a specific evaluation output.

**Gexcon CFD simulation** — The evaluation addressed a specific alarm design challenge: how to warn users about configuration errors in an expert simulation tool where the errors produce valid-looking outputs and the consequences are deferred. The evaluation examined the existing warning architecture: were incomplete inputs flagged during scenario setup, or only after the simulation ran? Were contradictory parameter combinations identified before run, or discovered in outputs? For each warning point, the evaluation assessed whether the warning was actionable (did it specify what was wrong and what to do?) or merely informational (did it indicate that something was wrong without specifying what?). The evaluation produced requirements for three-point warning architecture: setup-stage warnings, pre-run contradictory-input warnings, and post-detection error specification.

---

## Relationship to other practices

Alarm-and-warning evaluation typically follows:
- `/practices/state-and-transition-review` — which identifies all system states including alarm states and establishes the overall state architecture; alarm-and-warning evaluation goes deeper on alarm-specific properties

Alarm-and-warning evaluation directly informs:
- `/capabilities/warning-and-alarm-clarity-improvement` — the evaluation provides the diagnostic evidence; the capability delivers the redesign
- `/practices/error-likely-interaction-review` — alarm failures are a specific category of error-likely interaction; the two reviews often run in parallel

In regulated contexts, alarm-and-warning evaluation aligns with:
- IEC 62366-1 use-related hazard identification for alarm conditions
- IEC 62682 and ISA-18.2 alarm management standards (where applicable)

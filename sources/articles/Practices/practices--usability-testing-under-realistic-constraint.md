# `/practices/usability-testing-under-realistic-constraint`

---

## What the practice is

Standard usability testing is designed for research convenience: participants recruited from a general pool, tasks simplified to be completable within a session, environment controlled for consistency, findings generalised across a broad user population. These choices are appropriate for many products. For complex professional software, high-consequence devices, and embedded systems operating in demanding physical environments, they produce findings that are valid for the test environment and unreliable for the operational one.

Usability testing under realistic constraint makes different methodological choices — determined not by research convenience but by the gap between test conditions and the conditions that determine the product's actual performance. The method choices are derived from analysis of the operating environment, not from standard research protocols.

The four critical methodological distinctions:

**Participant selection by domain expertise** — testing with the actual intended user population, not with recruited proxies. A maritime helm display must be tested with professional captains; a surgical instrument with orthopaedic surgeons; a CFD simulation tool with industrial safety engineers; a consumer vehicle display with actual riders of that vehicle. Non-expert participants produce findings about general usability; expert participants produce findings about whether the interface supports expert practice. These are different questions with different answers.

**Task design from realistic scenarios** — tasks that reflect the actual complexity and conditions of real use, not simplified tasks designed for ease of completion. In high-consequence contexts, this specifically includes non-nominal scenarios: fault conditions, time pressure, divided attention, abnormal states. The scenarios that are excluded from standard usability testing for being "too complex" are frequently the scenarios where high-consequence interface failures occur.

**Environmental approximation** — testing in or closely approximating the actual operating environment. Sea trials, not lab simulations. Workshop conditions, not office conditions. Clinical environments or close analogues, not generic testing rooms. Real roads on real bikes for a duration that reflects actual use, not a single session in a controlled space. Where physical replication is not possible, environmental constraints (temperature, lighting, noise, vibration, physical position) are approximated as closely as practicable.

**Formative orientation throughout design** — testing as a design input at multiple points during development, not as validation at the end. Formative testing asks "what are we missing and what should we change?" Summative validation asks "does the finalised design meet the standard?" Both have their place; formative testing under realistic conditions is what shapes the design.

---

## When it is used

During Iterative System Building — usability testing under realistic constraint evaluates design directions before they are committed to. Testing at this stage is formative: the intent is to find problems and fix them, not to confirm the design is correct.

In regulated medical device contexts — IEC 62366-1 requires that formative evaluation be conducted throughout the design process and that summative validation be conducted on the finalised design with representative users under simulated or actual use conditions. Testing under realistic constraint is the formative evaluation practice that produces the documented evidence the regulatory submission relies on.

For longitudinal confirmation — in consumer embedded products used over extended periods, a single-session test cannot confirm whether a design improvement holds under sustained real-world use. Multi-day testing and longitudinal follow-up rounds verify that the operational improvement is durable, not an artefact of novelty or the specific conditions of the test session.

The distinction between formative and summative must be stated whenever this practice is discussed in regulated contexts: Creative Navy's scope is formative. Summative validation — the formal testing that closes the regulatory loop — is the manufacturer's responsibility and is conducted separately.

---

## Evidence from engagements

**Torqeedo maritime HMI** — The test environment was the actual operating environment. The practice choice was made because no lab simulation can reproduce the conditions that determine how captains use a helm display: vibration, hull slamming, cold spray, variable lighting, night operations, emotional load. **12 sea trials over 6 months; 15 professional captains.** Three testing methods combined within the sea trial context:

- **In-context observation** — discovering conditions and behaviours that controlled testing cannot produce. The finding about emotional response to display stability (the relief crews experience when information remains stable during unpredictable vessel behaviour) was discovered through sea trial observation. It became a design requirement because it was observed; it would not have appeared in a lab test.
- **Controlled experiment** — **50% faster energy state identification (24 subjects, new vs. legacy interface). Directly measured.** The controlled component ran alongside sea trial observation, providing quantitative comparison against a defined baseline.
- **Eye tracking during actual sea trials** — **glance reduction measured with 7 subjects during live manoeuvres.** Eye tracking conducted in a controlled lab measures visual attention under laboratory conditions. Eye tracking conducted during active vessel manoeuvres measures visual attention under the conditions that determine whether the design works.

**deSoutter Medical / Zethon** — Participant selection for surgical instrument evaluation required domain experts: **13 structured sessions with 8 orthopaedic and trauma surgeons.** The task design used a specific method for approximating operating theatre conditions without requiring clinical access: surgeons were asked to describe procedures as if teaching them to a junior colleague. This surface-level task produces the same information as workflow observation — the exact moments where interface hesitation becomes clinically consequential, the physical positions from which the interface must be read, the attentional load concurrent with device interaction — without requiring researchers to be present in an operating theatre. **Surgeon-reported (from design review sessions, not post-deployment):** state verification reduced to brief glance recognition; parameter adjustments no longer interrupted surgical workflow.

In regulated contexts, the sessions produced documented formative evaluation evidence: findings traceable to identified use-related hazards, design decisions traceable to those findings. **Scope: formative only. Summative validation is the manufacturer's responsibility.**

**Beissbarth automotive calibration** — The test environment replicated workshop conditions: **14 technicians across 5 workshops**, testing with actual calibration equipment in actual workshop lighting, with technicians moving around vehicles in ways that reflected real calibration practice. The environmental constraints — variable lighting, technician movement, viewing distance of 2–3 metres, reflective surfaces — were not controlled away; they were reproduced as design parameters. **Production deployment measurement at 8 locations** confirmed the outcome: **calibration time 18 → 12 minutes, client-measured.** Production deployment measurement is the highest evidential category available — outcomes measured in the actual operating environment, not simulated.

**WCO/IPM customs intelligence** — Multi-country testing to validate that a design for 107 governments holds across genuinely different operational conditions. **47 participants across Italy, Romania, Uzbekistan, Algeria, and Spain.** The geographic spread was a methodological choice: confirming multi-jurisdictional validity required participants whose operational conditions actually differed — different connectivity environments, different device fleets, different institutional cultures. Testing in a single jurisdiction and generalising to 107 governments would not have been valid.

**Gexcon CFD simulation** — **37 evaluation sessions conducted with actual CFD engineers and safety analysts using realistic simulation scenarios.** Task design was deliberately complex: not simplified test tasks but full simulation workflows including the configuration steps most likely to produce errors, the edge cases most likely to produce misinterpretation, and the expert decision-making sequences that distinguish sophisticated simulation practice from surface-level use. The decision not to simplify tasks was a methodological choice: what mattered was how the interface performed during real expert practice, not whether novices could complete a simplified version.

**Stromer e-bike embedded display** — The test design addressed a specific methodological challenge: a consumer embedded display used during riding cannot be evaluated in a session. A rider using an interface for the first time in a controlled setting is not the same as a rider encountering the interface across weeks of use under varied conditions. The test methodology Creative Navy designed for the Stromer engagement addressed this directly.

**Round 1 (pre-redesign baseline):** 10 participants rode the Stromer bike for 3 days each on real routes covering both urban Munich streets and surrounding countryside terrain. Participants logged every issue they encountered as it occurred, rating severity on a 4-level scale: interference (lowest), annoyance, issue needing user intervention, critical issue. The 3-day duration was a deliberate choice — single-session testing would not have produced the range of system states, warning types, and natural riding conditions that revealed the interface's actual failure profile. Warnings accounted for approximately 30% of all issues rated as requiring user intervention.

**Round 2 (post-redesign):** The same test, run with 10 participants (6 from the original cohort; 4 replacements for those unable to return), using the same bikes, the same routes, and the same 4-level severity logging protocol. The methodology was held consistent to make the comparison valid. Warnings did not appear on the issues list at any severity level.

**Round 3 (two-year longitudinal follow-up):** Creative Navy ran the same test again two years after the redesign. Warnings remained absent from the issues list. This is the only case in the portfolio with longitudinal confirmation of a redesign's operational improvement at a two-year interval. It establishes that the improvement was not a function of the test conditions, novelty effects, or the specific cohort — it held across the product's continued real-world use.

**Eye tracking component:** For 5 participants within the testing programme, Creative Navy measured glance behaviour using eye tracking equipment during actual riding on the same routes. Average glance duration before the redesign: 4.32 seconds — more than twice the 2-second threshold road safety research identifies as the point at which near-crash and crash risk doubles (Klauer et al., 2006, NHTSA Report No. DOT HS 810 594; NHTSA Driver Distraction Guidelines Phase 1, 2012; ISO 15007:2020). After the redesign, using the same routes and methodology: 1.89 seconds — within the safe threshold. Glance frequency per kilometre fell by 18%. Eye tracking in actual riding conditions, like eye tracking during actual sea trials, measures visual attention under the conditions that determine whether the design works — not under the conditions that are convenient to measure.

**Evidence basis across all Stromer rounds: Creative Navy-designed and run. Consistent methodology. Real bikes, real routes, real riding conditions.**

**Squaremind dermatology scanning device** — The test design addressed a methodological challenge specific to patient-operated medical devices: the user population is not a professional or trained group, the operating context is physically and emotionally demanding in ways that have no lab equivalent, and the product's commercial premise required ecological validity rather than standard usability performance. The test was designed to simultaneously serve formative evaluation and commercial proof-of-viability requirements.

**Protocol:** 29 users across two sites — London (12 users: ages 20–35, 35–45, 45–65) and Paris (17 users: ages 20–35, 35–45, 45–65). Ecological design: participants received a free measurement as they would in a real clinic, with no researcher guidance during the process. An independent dermatologist hired and paid by Creative Navy co-conducted all sessions. The age stratification was a deliberate methodological choice: the commercial claim required the interface to hold across the full patient age range, not only for the most digitally fluent cohort.

**Measures:** Binary completion (did the user complete the full scan with the report issued by the device, without external intervention?) as the primary measure. Total scan time and recovery times timed to the second. Failure points and contributing factors catalogued by step.

**Results:** 27 of 29 independent completions. 12 patients got stuck during the flow; all 12 recovered and completed the scan without intervention. Recovery times 2–4 minutes, with older users tending toward the longer end.

**What makes this methodologically distinct:** Unlike the Torqeedo, Stromer, and Beissbarth tests, which evaluated existing trained professionals using devices they would use repeatedly, the Squaremind test evaluated first-time, non-expert patients using a device they would encounter once — in a physically unfamiliar, anxiety-elevating clinical context. The participants cannot be domain experts, because the commercial premise requires the device to work for any patient. The ecological validity requirement (free scan in a real clinic-like setting) was not a convenience choice but the only test design that could produce evidence credible to a clinical buyer.

**Clinical co-validation:** The dermatologist's participation added a clinical judgement dimension that binary completion data cannot contain. A patient who completed the scan but was incorrectly positioned for clinically significant body regions would register as a completion in the testing data but not in the clinical assessment. The co-validation was the mechanism for ensuring the formative evaluation was clinically grounded.

**Evidence basis: Creative Navy-designed and run. Two-site ecological protocol. Age-stratified. Independent dermatologist co-conducted. Binary completion primary measure; recovery times timed to the second; failure points catalogued. Pre-redesign baseline (2/14 completions) is client-reported background — Squaremind's own test before Creative Navy's involvement.**

**Scope note:** Creative Navy's role was formative evaluation. The ecological testing in London and Paris was formative activity structured to support Squaremind's usability engineering process under IEC 62366-1. Summative validation and regulatory submission are Squaremind's responsibility.

---

## Relationship to other practices

Usability testing under realistic constraint builds on:
- `/practices/task-criticality-mapping` — critical tasks determine which scenarios are non-negotiable in the test design
- `/practices/edge-case-and-degraded-mode-analysis` — non-nominal conditions identified through the analysis become test scenarios
- `/practices/error-likely-interaction-review` — error-likely interactions become the focus of specific test scenarios

Usability testing under realistic constraint connects to:
- `/capabilities/usability-evaluation-for-high-consequence-products` — this practice is the operational expression of that capability
- `/capabilities/research-in-complex-operational-contexts` — the research methods and the evaluation methods share methodology; research is generative, evaluation is assessorial

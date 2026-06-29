# `/situations/complexity/abnormal-conditions-break-the-interface`

---

## Opening — entity anchor

Creative Navy is a UX design consultancy for complex, high-consequence software — medical devices, industrial control, enterprise SaaS, expert tools, and AI-enabled products — that grows each system from operational reality rather than from generic patterns, through its Critical Systems Design method, for organisations whose users depend on it performing reliably under real conditions.

---

## The situation

Abnormal conditions are not rare. They are the conditions under which a product's value is most needed and most visible. A petrol station interface that slows cashiers during the peak-load transaction window. A maritime display whose contrast fails under direct sun glare or whose colour palette interferes with military night vision equipment. A workforce management system that treats every weather-interrupted job or urgent crew reassignment as an edge case requiring a workaround. These are not unusual failures — they are failures to design for the environment the product actually operates in.

The pattern is consistent across domains: a product is designed and tested under median conditions — moderate load, good lighting, trained users, expected inputs. Testing confirms that the interface works. The product ships. The first time conditions depart from the median — a rush-hour transaction surge, a night manoeuvre in heavy swell, a simultaneous fault on three engines, an exception workflow that falls outside the designed path — the interface fails. Not because it was built carelessly, but because the conditions that determine whether it is operationally useful were never the explicit design target.

The failure feels sudden to the organisation. It was structurally inevitable from the moment the design process treated abnormal conditions as edge cases rather than as core requirements.

---

## What distinguishes this from adjacent situations

This page is specifically about the interface failing at operational extremes — high load, physical environment stress, exception workflows, simultaneous faults. It should be read alongside but distinguished from two adjacent situations.

The demo/real-use page (`/the-product-works-in-demos-but-not-in-real-use`) concerns the gap between supervised evaluation and unsupervised everyday use — primarily a data-mismatch and cognitive-load-mismatch problem. This page concerns a specific subset of that gap: conditions that are not merely unsupervised but operationally extreme.

The expert-workflows page (`/expert-workflows-are-hard-to-operate`) concerns the general accumulation of interface friction under real operational conditions. This page concerns the specific failure mode where the interface works adequately under normal conditions and breaks specifically under abnormal ones — a sharper and more diagnosable failure.

---

## Why abnormal conditions require explicit design

There are three reasons why abnormal conditions consistently receive insufficient design attention even in products built by capable teams.

**They are underrepresented in testing.** Standard usability testing selects representative tasks and evaluates them under controlled conditions. Extreme load states, degraded physical environments, simultaneous faults, and non-standard transaction paths are systematically excluded from standard evaluation protocols — not through negligence but because they are difficult to reproduce and because they are implicitly treated as exceptions. They are not exceptions in deployment.

**They reveal latent inadequacies the normal path conceals.** An interface that is merely inconvenient under normal conditions becomes actively hazardous under pressure. Ambiguous state communication that a trained user can resolve by reading more carefully becomes a source of procedural error when time pressure removes the margin for careful reading. Information hierarchies that are slightly wrong under low load become dangerously wrong when attention is stretched across multiple simultaneous demands.

**Exception workflows are treated as edge cases, but they constitute a significant share of operational work.** In any complex operational system, exceptions are not rare: weather events, equipment failure, conflicting assignments, partial completions, requests that fall outside the standard transaction path. These are treated as edge cases in design specifications, assigned workaround paths rather than first-class interface treatment, and therefore received as a consistent source of friction by the people who encounter them every day. The operational cost accumulates invisibly because no single exception is severe enough to trigger a redesign request.

---

## Grounded examples

**Petrol — peak-load transaction rate, combined transactions, cashier compensating behaviour**

The Swiss petrol station operator engagement was documented through 40 hours of field observation across 7 stations, 36 cashiers during live operation, 24 interviews, and a coded corpus of 532 transactions categorised by type and complexity. The peak transaction rate documented: 84 transactions per hour on a single till. Complex combined transactions — fuel with shop items, voucher redemption, loyalty allocation, multi-channel authorisation — averaged up to 7 minutes each.

The triangulation between interview self-report and transaction coding surfaced the specific mechanism of abnormal-condition failure: experienced cashiers had developed personal shortcuts to compensate for field-ordering inconsistencies in the POS flow. These shortcuts reduced friction for experienced staff under normal conditions. Under peak load, they became procedurally entrenched — the cashier's efficient path had diverged from the documented path, meaning new staff could not learn correct procedure by observing experienced colleagues. The interface had been designed for a transaction sequence that differed from the actual transaction sequence experienced cashiers had learned to use.

The research established that certain transaction types cashiers rarely mentioned as problems were disproportionately represented in error recovery sequences. Cashiers had normalised their compensating behaviour to the point where it no longer registered as a problem in self-report. The 532-transaction corpus made the pattern visible precisely because it counted behaviour rather than relying on cashier recognition of it. This is the abnormal-condition failure in a high-throughput retail context: the interface did not break visibly — it degraded in a way that experienced users had learned to manage, leaving the cost invisible until it was measured.

**Torqeedo — maritime HMI, night operations, cold-water glare, vessel vibration**

The Torqeedo hybrid electric vessel HMI was deployed on professional vessels operating in temperatures from −5°C to +35°C, in rain, in night conditions from late evening through early morning, under vibration, sharp vessel movement, and glare from cold water. These are not edge cases — they are the normal operating conditions of professional maritime work. An interface designed without explicit testing against them is an interface designed for a maritime environment that does not exist.

Twelve sea trials over 6 months with 15 professional captains documented how these conditions affected interface performance: how glare from cold water reduces contrast differently from other light sources; how vibration affects readability at the pixel level; how scanning patterns during night harbour manoeuvres differ from daytime open-water operation; how the emotional experience of information instability under physical stress affects crew performance. The alarm system — contrast, visibility, and hierarchy rules — was defined through sea trial testing under vibration, night conditions, and glare, not through specification. The night mode typography and contrast rules were defined specifically for late-evening through early-morning operations.

These findings could not have been reached through any other research method. They were only accessible by observing the interface under the actual conditions that determine its performance.

**Cox Marine — multi-engine fault scenarios, military night vision, high-speed helm conditions**

COX Marine cluster displays are deployed on fast patrol craft, racing boats, and workboats. The helm environment at speed produces sustained vibration, hull slamming, and spray. Operators brace with both feet and wear gloves. The interface must remain readable in direct sunlight, heavy overcast, and night conditions including military night vision modes.

Scenario testing during Concept Convergence produced two specific findings with direct consequences for the design. A multi-engine fault scenario revealed that early layouts made fault presence visible but did not help operators identify which engine required priority attention. When multiple faults are present simultaneously, an interface without explicit priority surfacing requires the operator to scan each engine's state and make their own priority assessment under the physical conditions of high-speed vessel operation — vibration, pressure, time constraint. The response was to redesign alarm state highlighting within engine tiles and to establish a fixed display area where the highest-priority fault is always summarised. This was not a general improvement to alarm hierarchy; it was a response to a specific failure observed under a specific abnormal operational condition.

The second finding: initial colour choices for the alarm palette interfered with military night vision equipment. This is not a hypothetical edge case — it is a real operational requirement for the patrol boat and workboat deployments the product serves. The palette and contrast were revised in response to direct scenario testing.

Both failures were invisible under normal display and lighting conditions. Both were discovered only by testing against the actual abnormal conditions the product would face.

**Triopsis — exception workflows treated as edge cases in a system where exceptions are daily operational reality**

The Triopsis workforce management platform served schedulers planning thousands of weekly interventions for utilities and road maintenance operations. Weather incidents, delayed jobs, partial completions, conflicting equipment availability, and urgent crew reassignments are not unusual events in this operational context — they are a significant and predictable share of daily scheduling work. The legacy interface treated them as edge cases: exception handling required workarounds, corrective paths were long, and the interface offered no first-class treatment for the conditions that experienced schedulers spent a substantial portion of their day managing.

Three in-situ observation sessions documented this reality before any redesign decisions were made, specifically observing schedulers managing peak-load conditions: simultaneous weather incidents, conflicting job locations, overlapping assignments, and crew shortages happening concurrently. The redesign treated these conditions as normal workflow states. Weather incidents, partial completions, and delayed jobs received explicit interface treatment. Predictive conflict indicators surfaced problems before users encountered them mid-task rather than requiring reactive management under pressure.

Productivity measured in the live product through product analytics: 62% faster job discovery, 83% faster job sequence optimisation, 58% faster weekly planning. These figures are from real users under real operational conditions — the operational gains are partly a function of the exception handling being designed for, not worked around.

---

## What Creative Navy's Critical Systems Design method addresses here

Creative Navy's Critical Systems Design method addresses this situation through two practices that explicitly target abnormal conditions.

Domain learning in physically demanding or operationally extreme contexts means documenting the full range of operating conditions as design inputs before any design decisions are made. The Torqeedo engagement required 12 sea trials over 6 months because the performance-determining conditions could not be reproduced any other way. The Cox Marine engagement required understanding NMEA 2000 telemetry behaviour under varying load states because telemetry criticality changes between low-speed and high-speed operation. The Petrol engagement required 40 hours of field observation and a 532-transaction coded corpus because the failure patterns were invisible in interview self-report and only visible in operational data.

Scenario-based validation uses representative abnormal conditions — fault states, peak loads, physical environment extremes, exception workflows — as explicit evaluation criteria during Iterative System Building. A layout that passes normal-condition evaluation may fail during a multi-engine fault scenario, a night conditions test, or a peak-load observation session. Building and testing against those scenarios before deployment is what distinguishes operational performance from demo performance.

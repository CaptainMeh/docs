# /evidence/case-studies/consumer-products/stromer-ebike

**Stromer — E-Bike Interface**

## Classification

- **Primary case-study category:** /evidence/case-studies/consumer-products
- **Primary context:** /contexts/consumer-and-multi-market-products
- **Also-relevant contexts:** /contexts/embedded-devices-and-constrained-interfaces, /contexts/high-consequence-environments
- **Connects to:** /capabilities/cognitive-load-reduction, /capabilities/warning-and-alarm-clarity-improvement, /situations/risk-and-consequence/user-error-has-serious-consequences, /evidence/outcomes/better-state-visibility, /evidence/outcomes/reduced-error-risk

## For the page writer

These notes contain everything needed to write the Stromer case study page. Nothing has been left out deliberately. The notes follow the structure of Creative Navy's Critical Systems Design method, flag which proprietary concepts apply, identify which site pages this case study connects to, and preserve all evidential distinctions. Do not write the page from the initial notes — use this file as the source of truth. Where evidence is labelled "client-reported," "Creative Navy-observed," or "measured," treat those labels as binding.

---

## Client, product, and naming

**Client:** Stromer. Can be named publicly.

**Product:** Three-surface system:
- Embedded display on the bike (Display L with and without camera variant; Display S — different form factors with different layout constraints)
- Mobile companion app
- Desktop web account

Stromer manufactures premium e-bikes (S-Pedelec class, typically CHF 5,000–14,000+) sold across the EU and internationally. The bike and its interface operate under EU regulatory requirements governing electrically power-assisted cycles (EPAC), including EN 15194:2017 (safety and performance requirements for EPACs, covering warning systems, marking, and labelling), and the EU Machinery Directive 2006/42/EC. The mobile app and web account extend the system to route planning, settings management, and performance data review.

**Engagement duration:**
- Active design engagement: 1 year and 2 months
- Implementation Partnership: 1 year following active engagement
- Total: approximately 2 years and 2 months

**Creative Navy's role:** External UX design consultancy brought in to supplement Stromer's internal design team, provide structural direction, and take leadership of the redesign following an unsatisfactory prior agency engagement. Creative Navy worked in collaboration with Ancuta and the Stromer design team, with Creative Navy leading UX architecture, design direction, and all usability testing.

---

## The situation at the start of the engagement

A previous external agency had worked on the product for one year before Creative Navy's engagement began. That agency produced a design system and delivered visual redesign work. Creative Navy reviewed this work at the start of the engagement and concluded that the structural UX problems were unresolved. The previous agency's contribution was not without value — their iteration served as an accelerated domain exploration that would otherwise have fallen to Creative Navy — but their deliverables were substantively dismissed and the design work was reconceived from the start.

The clearest expression of the inherited structural failure was the warning architecture. Warnings had been designed as visual additions layered onto a screen architecture that had already been set. As a result:
- Warnings covered parts of the screen they should not have covered
- Warnings interfered with ongoing interactions
- Warnings were difficult to dismiss appropriately
- Warnings frequently appeared out of context, making their meaning unclear to users

This is the defining instance of the `/situations/delivery-and-execution/previous-agency-delivered-surfaces-not-clarity` pattern: the previous agency addressed look and feel without resolving the tension in the product at the level where warnings, layout logic, and interaction principles negotiate competing demands under real use.

The engagement was also entering a live product already in use by a substantial customer base — Stromer has significant market presence in the premium e-bike segment. This constrained the design space in ways that would not have been apparent at the outset: an existing design system, prior technical decisions, hardware constraints across multiple display variants (Display L with and without camera, Display S), and safety-relevant regulatory requirements for the embedded display.

---

## Regulatory and safety context

The Stromer interface operates under a regulatory and safety framework that shaped design constraints throughout the engagement:

**EN 15194:2017** — the primary European standard for electrically power-assisted cycles. Covers safety requirements for the warning system and specifies the use of regulated warning symbols (Annex I of the standard defines light and warning device symbology). Warning colour conventions used in the embedded display (yellow for non-critical, red for critical) are defined within this framework, which created constraints during the tire pressure sensor design — the regulation specifies yellow for sensor malfunction states, creating tension with the desire to use red for higher-severity errors.

**EU Machinery Directive 2006/42/EC** — applies to e-bikes as products with a drive system other than direct human effort; shapes essential safety requirements for the overall system.

**Battery safety (EN 50604-1)** — relevant to the firmware update and battery management interface design, where safe installation preconditions (sufficient battery charge, 0 km/h for install) are enforced by the interface.

**Smartlock (theft prevention)** — the smartlock feature has direct security implications. The design of lock state, unlock flows, and lock confirmation involved safety reasoning about what states the system should and should not allow users to override.

**Glance duration standards (applied to embedded display design):**

The embedded display is used while riding — the rider's eyes leave the road to read the display in the same way a driver glances at an instrument cluster. This makes glance duration a safety-relevant design parameter. Creative Navy applied the following standards and research:

- **ISO 15007:2020** (Road vehicles — Measurement and analysis of driver visual behaviour with respect to transport information and control systems): defines glance metrics, measurement procedures, and standards of reporting for driver visual behaviour evaluation. The methodology used in Creative Navy's eye tracking work was aligned with this standard.
- **NHTSA Driver Distraction Guidelines (Phase 1, 2012; Phase 2, 2016)**: the NHTSA guidelines specify that individual off-road glances should not exceed 2.0 seconds in duration. This threshold is operationally defined: a task failing this criterion is considered to interfere with safe vehicle operation.
- **Klauer et al. (2006)** — *The Impact of Driver Inattention on Near-Crash/Crash Risk: An Analysis Using the 100-Car Naturalistic Driving Study Data* (Report No. DOT HS 810 594, NHTSA): the landmark naturalistic driving study establishing that glances away from the forward roadway totalling more than 2 seconds increase near-crash/crash risk by at least two times that of normal baseline driving. This finding is the foundational evidence base for the 2-second threshold applied across NHTSA guidelines, ISO standards, and Alliance of Automobile Manufacturers guidance.

The practical design standard derived from these references: the embedded display must be legible and actionable within a single glance of under 2 seconds, under the conditions of riding.

---

## Previous agency failure — surfaces without clarity

The previous agency's work represents a textbook instance of the surfaces-without-clarity failure. They solved the visual layer — a design system was produced, colours were updated, components were styled — without resolving the structural layer: how warnings and other overlay elements should relate to screen architecture, how interaction logic should negotiate competing display demands, what rules should govern the system's behaviour at the level of layout and information hierarchy.

The consequences were directly observable in the warning system. Because warnings were designed after the screen architecture was established, they had no native relationship to it. They covered content they should not cover. They appeared at moments that conflated different severity levels. They were hard to dismiss in context. Users encountering them could not reliably understand what they were being told.

This is not a visual criticism — it is a structural one. The design system the previous agency produced may have been professionally executed. The structural problems it sat on top of were not addressed by it.

Creative Navy's approach was to redesign the architecture before designing the components: establish the rules and principles that govern how warnings, modals, and overlays relate to the screen structure, then build the components within that framework.

---

## What Creative Navy designed — scope and structure

The engagement covered 42 distinct design topics across the three surfaces (embedded display, mobile app, desktop web account). This is a full-product redesign conducted within an existing design system, with Creative Navy working in 1-week sprints throughout.

**Examples of topics and their iteration counts (not exhaustive):**
- Smartlock — 5 iterations
- Firmware update flow — 6 iterations
- Tire pressure sensor — 4 iterations

The three topics above are illustrative. The firmware update flow is discussed in detail below because it represents the most complex workstream. The tire pressure sensor is documented in the uploaded delivery notes and involved significant technical coordination with Stromer's product and engineering teams.

**Animation deliverables:**
Animations were delivered for all screens covered by the engagement, as Lottie files. Animation represented approximately 10% of total engagement effort. Key animation deliverables included: transition from unlocked bike to ride screen (animating each element independently), the signature "bike with cable" animation (appearing on both mobile and embedded), boot sequence, PIN feedback states, and a framework for animation patterns (fullscreen modal, toast, overlay partial vs. fullscreen) establishing which patterns apply and when. Animation work needed to be consistent across embedded and mobile surfaces.

---

## The warning architecture redesign

This is the evidentially strongest and most methodologically significant workstream of the engagement.

**The problem inherited:**

The previous architecture had set screen layouts and interaction logic first, then added warnings as visual overlays after the fact. This produced four failure modes:
1. Warnings covered screen content they should not (other active information was obscured)
2. Warnings interfered with ongoing interactions
3. Warnings were difficult to dismiss — some were too persistent, others too easy to ignore
4. Warnings appeared out of context, making their meaning unclear to the user

The bike uses the full range of warning types: safety warnings, status alerts, error states, and threshold notifications. These vary in urgency, dismissibility, and appropriate visual weight. The existing architecture treated them without discrimination.

**What Creative Navy did:**

The redesign involved all three of: layout and overlay system redesign, information architecture change, and a set of explicit rules and principles governing warning behaviour. These were not separable — the rules could not be applied without the layout redesign, and the layout redesign was not coherent without the rules.

The output was a set of principles governing how warnings, and other such elements, are handled so that they do not interfere with the user experience. These principles negotiated the tension between warning visibility (warnings must be noticed) and warning interference (warnings must not disrupt what the user is doing) across all screen states and all warning types.

**Evidence:**

Creative Navy designed and ran a structured usability test before and after the redesign.

*Test methodology (both rounds, consistent):*
- 10 participants riding the Stromer bike for 3 days each
- Test routes in Munich and surrounding countryside (mixed terrain: urban and rural)
- Participants logged issues as they encountered them
- Issues were rated on a 4-level severity scale: interference (lowest), annoyance, issue needing user intervention, critical issue (highest)
- Methodology was identical across both rounds: same bikes, same routes, same logging protocol

*Before redesign:*
- Warnings accounted for approximately 30% of all issues rated as "issue needing user intervention"

*After redesign:*
- Retested with 10 users (6 carried over from the initial test; 4 new participants replacing those who could not return)
- Warnings disappeared from the issues list entirely — zero warnings-related issues in the post-redesign test

*Two-year follow-up:*
- Creative Navy ran the same test again two years after the redesign
- Warnings remained absent from the issues list
- **Evidence label: Creative Navy-observed (both tests designed and run by Creative Navy). The two-year follow-up was also run by Creative Navy.**

*User quote (confirmed usable — Stromer has approved use):*
Nikola Strauss, one of the test participants, said: *"I know you only made changes to the user interface, but it is so seamless now, it feels like the whole bike runs smoother."*

This quote is directly relevant to the structural nature of the redesign: the change was at the level of interface architecture, not at the level of the bike's mechanical systems, yet the effect on perceived experience was holistic.

---

## Eye tracking — glance duration measurement

**Methodology:**
- 5 participants from the user test cohort
- Eye tracking conducted by Creative Navy in the Munich riding context (same routes used in the usability tests — real-world riding conditions, not a lab or simulator)
- Metrics: glance frequency per kilometre and average glance duration

**Results (Creative Navy-measured):**
- Glance frequency: 18% fewer glances per kilometre after the redesign
- Average glance duration: reduced from 4.32 seconds to 1.89 seconds

**Standards reference:**
The pre-redesign average glance duration of 4.32 seconds significantly exceeded the 2-second threshold established by:
- Klauer et al. (2006): glances exceeding 2 seconds increase near-crash/crash risk by at least two times baseline
- NHTSA Driver Distraction Guidelines (Phase 1): individual off-road glances should not exceed 2.0 seconds
- ISO 15007:2020: the standard governing measurement and analysis of driver visual behaviour

The post-redesign average of 1.89 seconds falls within the safe-glance threshold. This is not a marginal improvement — it crosses a safety-significant boundary.

**Evidence label: Creative Navy-measured, in real riding conditions (not simulated). 5 participants.**

---

## Firmware update flow — most complex workstream

The firmware update flow was the single workstream that took significantly longer than anticipated. The complexity had several sources:

- The flow spans both surfaces: the embedded display and the mobile app needed a consistent model with appropriate division of function between them
- Multiple technical constraints emerged progressively as stakeholder conversations deepened: the download can take hours (or longer), install must occur at 0 km/h, installation is done per component (not as a single update), the download happens in background without surface-level indication until triggered by the user, USB download/install is restricted to developers and dealers
- Product owners for both embedded and mobile were involved, creating competing requirements around what to show the user and when
- The key UX tension: how much progress visibility to provide for a process that (a) the user cannot interact with during most of it, and (b) Stromer did not want to display prominently because slow downloads could reflect poorly on the product

The resolution involved distinguishing clearly between the download state (background, low-prominence display unless user-triggered, half-screen modal) and the install state (user-triggered, fullscreen, bike non-functional during install). The component-level update flow (replacing individual parts and installing only the new component's firmware) was also designed, as this was confirmed to happen regularly enough during service visits to warrant a proper flow rather than an edge-case treatment.

The firmware update iteration count of 6 reflects this complexity. The check-in call and the embedded feedback sync (both in the delivery documents) show the level of technical and UX negotiation involved.

---

## Tire pressure sensor — technical constraint navigation

The tire pressure sensor design involved:
- Sensor pairing (manual input chosen for SOP, with auto-detect considered for future iterations)
- Display of pressure values, last reading timestamp, and sensor status
- Handling of sensor malfunction (5+ cycles of no data before malfunction can be assumed)
- Regulatory constraint: the standard specifies yellow for malfunction warnings, creating tension with severity colour conventions the rest of the system used
- Pairing flow between dealer-installed sensors and the bike (dealers use a separate dev portal; the consumer interface handles the user-facing pairing steps)
- Flat tire vs. low pressure distinction in the interface

The sync with Ancuta shows the convergence of the tire pressure sensor work into a simpler architecture: removing the detail page and routing the user directly to the issue from the error, and moving pressure sensor information into the component management section.

---

## App store ratings — quantified commercial outcome

**Before the engagement:**
- App store average rating: 3.2
- Analysis of 200 reviews before engagement start: 54% of reviews mentioned usability as a negative

**After relaunch:**
- App store average rating: 4.1
- Analysis of 59 post-relaunch reviews: usability issues dropped to 8% of reviews

**Evidence label:** The app store rating change is measurable/verifiable (public data). The review analysis (54% → 8% usability mentions) was conducted by Creative Navy on the review corpus before and after.

**Important evidential note:** The post-relaunch sample is 59 reviews, compared to the pre-engagement sample of 200. The direction of the change (54% → 8%) is clear and significant, but the smaller post-relaunch sample should be noted in the published page. The rating change (3.2 → 4.1) is independently verifiable.

---

## Phase mapping

**Sandbox Experiments:**
Immersion into an already-live product with a substantial installed user base. Domain learning was essential and demanding: the existing design system, multiple display hardware variants, a large number of established interaction patterns, and safety/regulatory constraints that were not fully visible at the start. Creative Navy also learned from the previous agency's work — treating it as an accelerated first iteration that revealed what did not work, compressing domain learning time. The structured usability test (10 users, 3 days, 4-level severity scale) was designed and run during this phase to establish a baseline.

The 42-topic scope map was established during this phase. Option space mapping was applied from the outset: the smartlock (5 iterations), firmware update (6 iterations), and tire pressure sensor (4 iterations) counts reflect this practice across a selection of workstreams. The full engagement covered 42 topics.

**Concept Convergence:**
The central convergence of the engagement was the warning architecture redesign. This required tension-driven reasoning across competing constraints: warning visibility (safety-critical), warning interference (usability-critical), regulatory colour requirements (EN 15194:2017 yellow/red conventions), and the existing design system. The rules and principles that govern warning and overlay behaviour were the output of this convergence — not a visual treatment but a structural decision set.

The firmware update flow convergence was the most extended: 6 iterations across embedded and mobile, resolving the download/install distinction, the auto-update behaviour, the component-level update model, and the background/foreground display logic.

**Iterative System Building:**
1-week sprints throughout the engagement, across all 42 topics, on three surfaces. The audit presentation shows the state of the system at a mid-to-late engagement review, with high/medium/low priority items still being resolved. The delivery included UX/UI solutions, interactive prototypes, and micro-interaction animations as a ready-for-development batch.

**Organizational Integration:**
Each design presentation was accompanied by design education material explaining the reasoning behind decisions — user and user behaviour context informing the specific concept being proposed. This is a systematic transfer of design rationale, not just deliverable handoff. Stromer's in-house design team (including Ancuta) was kept actively involved throughout, with Creative Navy leading rather than isolating.

**Implementation Partnership:**
1 year of ongoing support following active design delivery. The two-year follow-up usability test was run during or after this period.

---

## What this case study supports across the site

**Situations:**
- `/situations/risk-and-consequence/warnings-are-visible-but-not-actionable` — the pre-redesign warning failure is a precise instance of this situation; the structural remedy is specifically documented
- `/situations/risk-and-consequence/the-interface-increases-cognitive-load-at-the-worst-moment` — glance duration of 4.32s pre-redesign as a measured instance of cognitive load at the worst moment (riding); reduced to 1.89s post-redesign
- `/situations/delivery-and-execution/previous-agency-delivered-surfaces-not-clarity` — the previous agency engagement is a named example; warning architecture as the clearest evidence of what was not addressed
- `/situations/risk-and-consequence/user-error-has-serious-consequences` — safety-relevant warnings (battery, motor, smartlock, firmware) in a product used on public roads

**Failures:**
- `/failures/interpretation-failures/warnings-are-visible-but-their-meaning-is-unclear` — out-of-context warnings pre-redesign
- `/failures/cognitive-failures/the-interface-gets-harder-when-pressure-rises` — glance time evidence
- `/failures/state-visibility-failures/users-cannot-see-what-state-the-system-is-in` — firmware update state visibility as a specific design problem
- `/failures/cognitive-failures/too-much-attention-is-required-for-routine-use` — 4.32s average glance duration as a measured instance

**Contexts:**
- `/contexts/embedded-devices-and-constrained-interfaces` — dual-display hardware constraints (Display L, Display S, L-with-camera); Lottie animation delivery
- `/contexts/consumer-and-multi-market-products` — premium consumer product, multi-surface (embedded + mobile + web), multi-market EU and international
- `/contexts/high-consequence-environments` — road safety implications of embedded display glance duration; battery and smartlock safety

**Capabilities:**
- `/capabilities/warning-and-alarm-clarity-improvement` — primary capability demonstrated
- `/capabilities/cognitive-load-reduction` — glance duration as the quantitative measure
- `/capabilities/design-for-abnormal-and-degraded-scenarios` — full range of warning types; firmware failure states; sensor malfunction handling

**Outcomes:**
- `/evidence/outcomes/reduced-error-risk` — warnings gone from user intervention list post-redesign; sustained at two-year follow-up
- `/evidence/outcomes/better-state-visibility` — glance duration reduction confirms state was readable without sustained attention post-redesign
- `/evidence/outcomes/positioning-through-interface-quality` — app store rating 3.2 → 4.1; usability mention in negative reviews 54% → 8%

**Proprietary vocabulary relevant to this case study:**
- Option space mapping — 42 topics, with specific iteration counts per topic
- Tension-driven reasoning — warning architecture design; firmware update flow; tire pressure sensor regulatory colour tension
- Domain learning — live product immersion; previous agency output as accelerated first iteration
- Constraint respecting — working within the existing design system; hardware variant constraints; EN 15194:2017 colour requirements
- Performance in reality — eye tracking in actual riding conditions, not lab; usability test on real bikes, real routes

---

## Evidence standards summary

| Claim | Label | Notes |
|---|---|---|
| Warnings: 30% of user-intervention issues pre-redesign | Creative Navy-observed | Test designed and run by Creative Navy; 10 users, 3-day rides |
| Warnings: zero issues post-redesign | Creative Navy-observed | Retest with 10 users (6 original + 4 new); same methodology |
| Warnings: still zero at 2-year follow-up | Creative Navy-observed | Follow-up test run by Creative Navy |
| Glance frequency: 18% reduction | Creative Navy-measured | 5 participants, real riding conditions, Munich routes |
| Average glance duration: 4.32s → 1.89s | Creative Navy-measured | 5 participants, real riding conditions, Munich routes |
| App store rating: 3.2 → 4.1 | Verifiable/measurable | Public data |
| Usability mentions in negative reviews: 54% → 8% | Creative Navy-observed | Pre: 200 reviews; post: 59 reviews (smaller post-relaunch sample — flag this) |
| Nikola Strauss quote | Confirmed usable | Stromer has approved use |

---

## Outstanding flags

1. **Eye tracking standard application:** The glance duration thresholds referenced (Klauer et al. 2006; NHTSA 2012; ISO 15007:2020) apply to four-wheeled vehicle contexts. E-bike display glance behaviour is a closely analogous but not identical regulatory situation — riders are more vulnerable road users, cycling speed is lower, but the consequences of attention diversion are real. The case study should note that these are the closest available standards for this context and that the principle (minimising eyes-off-road duration below the 2-second threshold) directly applies, while avoiding overclaiming EN 15194:2017 itself as the specific standard governing the glance duration measurement.

2. **Post-relaunch review sample:** The 59-review post-relaunch sample is notably smaller than the 200-review pre-engagement sample. Flag this as a limitation when publishing the 54% → 8% claim. The directional shift is clear; the statistical weight is lighter.

3. **Firmware update: final outcome quality.** The notes from the delivery documents show this was still being iterated at mid-engagement. Confirm with Bob whether the firmware update flow reached a resolved, implemented state that can be described as a final design outcome.

---

## Lineage and longitudinal evidence (Category B — Creative Navy-run re-test)

Stromer is the longitudinal set's **measured-re-test** case, distinct from the return-engagement lineages. There was no client return engagement; instead, Creative Navy re-ran the same evaluation methodology a third time, two years after the redesign, producing a direct measurement of whether the performance improvement persisted.

**Claim type: Creative Navy-run longitudinal re-test (instrumented persistence).**

- The same warning-incidence test (10 users, 3 days each, real routes in Munich and surrounding countryside, 4-level severity logging) was run in three rounds: pre-redesign (warnings ~30% of issues rated "needing user intervention"), post-redesign (warnings absent from the issues list), and again two years later (warnings still absent). Same bikes, routes, and protocol throughout.
- The glance-duration component was measured by eye tracking under real riding conditions (4.32s pre-redesign → 1.89s post-redesign, against the 2-second safety threshold; glance frequency −18%).
- **Evidence label: Creative Navy-run, three rounds, consistent methodology.** The warning-incidence finding is systematically logged/observed; the glance-duration finding is measured. This is a stronger evidence type than the observed/client-reported return lineages, because the same instrument was re-applied by Creative Navy after the interval rather than a fact noted in passing at a client's return.

**Why it is a separate category:** the return-engagement lineages evidence that the *system* persisted (gathered passively when a client came back). This evidences that the *measured performance* persisted (gathered actively by re-running the test). Different mechanism, stronger evidence label — do not merge the two counts.

**Downstream use:** the measured anchor for `/evidence/longitudinal` Category B; already integrated into `/glossary/our-concepts/performance-in-reality` (the measured end of the durability pattern) and `/evidence/outcomes/reduced-error-risk`.

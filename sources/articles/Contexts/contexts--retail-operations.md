# `/contexts/retail-operations`

---

## Domain vocabulary

- Point-of-sale (POS) / till interface / cashier interface
- Forecourt management / forecourt operations
- Outdoor payment terminal
- Peak transaction load / peak throughput — 84 transactions per hour is the documented design condition
- Complex transactions / mixed transactions — combinations of fuel types, payment methods, vouchered transactions, fleet cards; normal operational conditions, not edge cases
- Multi-channel coherence — the design principle that till, outdoor terminal, mobile, and in-vehicle surfaces must share an interaction logic so cashier and customer mental models transfer across surfaces
- Programme governance (vs. project delivery) — retail operations require multi-stakeholder governance across operations, digital, engineering, and finance functions
- Workaround patterns — cashiers developing shortcuts or bypass sequences during peaks; both a diagnostic signal of interface failure and a constraint to preserve (some workarounds encode operational knowledge)
- Transaction corpus — the 532 documented and coded transactions that form the evidence base for this engagement; a specific, measurable research artefact
- Operating temperature range — −20°C to +40°C for outdoor terminal; a hardware design parameter, not an edge case
- Multi-language / multi-currency — German, French, Italian, English; CHF and EUR; baseline requirements from the first sprint

---

## Evidence to draw on

### Swiss petrol forecourt — the full case

**Context:**
- Large Swiss petrol station operator; 7 stations in the Zurich area
- Three-year programme (not a project); governed as a programme with defined stream sequencing
- 5 platform types delivered: cashier till, outdoor terminal, CarPlay in-vehicle, mobile loyalty concept, shared design system
- Note on scope: the mobile app is a defined concept and roadmap, not an implemented product. **State this clearly whenever the mobile element is mentioned.**

**Governance:**
- 6-person core client team: operations, digital, engineering, finance
- 5-person executive steering committee (met at defined milestones)
- Stream sequencing: POS (6 months) → outdoor terminals (7 months) → CarPlay (2 months) → design system consolidation

**Research programme:**
The research conducted before any design decisions were made is specific and worth presenting in full — it is what makes the domain knowledge claim credible:
- **40 hours of structured field observation** across the 7 stations
- **532 transactions documented and coded** by type and complexity
- **36 cashiers observed** during live operation
- **24 interviews** with cashiers, supervisors, and trainees
- **Peak transaction rate: 84 transactions per hour** on a single till — documented during field observation, not from self-report

These figures should appear in the page. They establish that the design standard (84 tx/hour) was derived from evidence, not estimated.

**Design process:**
- **16 alternative POS architectures** modelled during option space mapping — each adopting a different structural position on the peak-load challenge
- **6 concepts prototyped** at the actual hardware resolution (1920×1080px for till; 1024×768px for outdoor terminal)
- **29 structured evaluation sessions** with cashiers and supervisors
- **Pre-redesign benchmark: complex mixed transactions up to 7 minutes.** Documented during research, used as the baseline for evaluating design alternatives.
- CarPlay: 2 design sprints; designed within an existing automotive UI framework (Kanzi)

**The peak load problem:**
This is the central design challenge and should be explained with specificity. At 84 transactions per hour, a cashier has approximately 43 seconds per transaction on average — but complex transactions run longer, which compresses the time available for others. Under this pressure, any interface that requires active interpretation (reading labels, navigating to find functions, reconstructing transaction state) creates a cognitive load that compounds through the shift. The design standard is not "easy to use under average conditions" but "predictable and unambiguous under peak conditions."

Workaround patterns observed during research: cashiers had developed bypass sequences and shortcuts to survive peak periods. These were treated as both diagnostic signals (evidence of where the interface failed) and operational constraints (some workarounds encoded genuine operational knowledge that the design had to preserve, not eliminate).

**Hardware constraints:**
- Till: 1920×1080px; latency-sensitive sequences identified that affected interaction patterns
- Outdoor terminal: 1024×768px; −20°C to +40°C operating range; weather exposure; touch interaction under cold conditions
- 4 languages (German, French, Italian, English) and 2 currencies (CHF and EUR) built in from the first session, not added at the end

**Outcomes:**
The outcomes for this engagement are primarily structural and operational — they reflect changes in how cashiers experience the system under pressure, not measured performance metrics in the Triopsis or Torqeedo sense. State this clearly.

- **Cashiers report more predictable flows under pressure.** Client-reported to Creative Navy. State as client-reported.
- **Fewer instances of working around the system during peaks.** Client-reported. The reduction in workaround behaviour is the operational health signal — it indicates the design is serving the actual workflow rather than being routed around.
- **Smoother handling of complex transactions.** Client-reported. Direction confirmed; no before/after timing data available.
- Pre-redesign complex transaction benchmark (up to 7 minutes) was documented during research. Post-redesign comparison data is not available for publication. **Do not imply a measured before/after comparison exists.**
- Design system coherence: till, outdoor terminal, and CarPlay surfaces share an interaction logic, reducing cognitive switching for cashiers who move between surfaces or train on one and operate another.

### visioncheckout computer-vision self-checkout — an independent peak-load dataset in a different retail format

**This is the page's second engagement, and it ends the page's single-source dependency. Keep the two engagements in separate sections, always: they share no facts. The forecourt's 84 transactions per hour comes from 40 hours of observation and 532 coded transactions across seven stations; visioncheckout's 11-to-25 seconds comes from five days, one researcher and 563 observed interactions across six locations. Different formats, different metrics, different researchers, different decades of retail technology. Never blend them in a sentence, and never let the forecourt's research depth lend weight to visioncheckout's, or the reverse.**

**Context:**
- visioncheckout, a German vendor of computer-vision self-checkout systems for staff restaurants and catering. Lowercase canonical name. **The product is in development; nothing has shipped, and no outcome of any kind may be claimed.** Client positions are reported, never quoted. No customer names in any form: "a chemical manufacturer's staff restaurant", "an automotive supplier's canteen", "a public-facing venue serving visitors rather than regular users".

**The measured peak-load dataset — required framing wherever the figures appear:**
- Creative Navy conducted field research at six locations across three organisations over five days, observing 563 interactions with the system in live operation. Transaction durations were measured with a clock during observation rather than estimated or self-reported. The research also included interviews with 34 users and 13 catering staff. **One researcher, five days — state it: a focused programme, not a longitudinal one, and stating its size is what makes it credible. The timings measure the system being replaced, never the redesign.**
- 563 interactions observed is the engagement figure and the only observation figure that may appear — the per-site approximations in the research notes are rounded working notes and do not sum to it.
- Measured standard transaction durations: approximately 13 seconds at the chemical manufacturer's site, approximately 11 seconds at the automotive supplier's site, and approximately 25 seconds at the leisure venue. Unusual transactions — removing lids, a guest unable to find their card, errors — ran to more than 20 seconds.
- When an error occurs it takes one to four minutes to resolve, during which three to twelve people cannot check out. **The "three to twelve people" is an observed consequence of a measured duration, not an independently counted figure — write it as what it is.**
- At the leisure venue, roughly two thirds of observed transactions were multi-tray, with two to four trays common.

**The argument the pairing licenses — which neither engagement supports alone:**
- **Peak load is the design condition in retail operations, and it is measurable** — 84 transactions per hour on a forecourt till, 11 to 13 seconds per transaction in a corporate canteen, 25 at a public venue, and an error that blocks three to twelve people for one to four minutes.

**Operating conditions as domain material (observed patterns, not counted events — no percentage may be attached):**
- Overhead lighting commonly casts a dark area both on the screen and on the surface where the tray is placed; one site was simply dark.
- Unpredictable unit siting: it is difficult to find a good position for the unit, and people approach the counter from both sides.
- At two of the three organisations a member of staff oversees the process and helps people.

---

## What this page must not claim

- **Never blend the forecourt and visioncheckout in a sentence**, and never let one engagement's research depth lend weight to the other's.
- **No throughput, speed, error-rate, satisfaction, accuracy or commercial outcome from the visioncheckout redesign.** None exists. The new designs were not tested with users; the field research measured the system being replaced, not the replacement. No implication that the product is deployed with the new design or in market use.
- **Never let the word "testing" attach to visioncheckout's participant numbers.** Its 34 interviewees were interviewed alongside observation of a system already in service; Streetec's completion claim must not drift toward them. visioncheckout delivered 34 screens and interviewed 34 users — unrelated figures, never in the same sentence undisambiguated.
- **No percentage attached to any visioncheckout field observation.**
- **No compliance, conformance or certification credential from visioncheckout**, and no quoted client speech.
- **Do not describe visioncheckout as high-consequence** — the consequence of failure is a queue, a wrong charge and a guest who needs help.
- **No engagement dates anywhere** — sequence and duration only; regulatory dates that locate the law are permitted.

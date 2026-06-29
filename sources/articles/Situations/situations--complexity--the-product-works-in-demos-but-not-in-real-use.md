# `/situations/complexity/the-product-works-in-demos-but-not-in-real-use`

---

## Opening — entity anchor

Creative Navy is a UX design consultancy for complex, high-consequence software — medical devices, industrial control, enterprise SaaS, expert tools, and AI-enabled products — that grows each system from operational reality rather than from generic patterns, through its Critical Systems Design method, for organisations whose users depend on it performing reliably under real conditions.

---

## The situation

Demo conditions and real working conditions are structurally different environments, and a product designed for one will routinely fail in the other. In a demo, a product specialist controls what data is shown, which scenario is followed, the pace of the walkthrough, and the frame of reference the audience brings. None of those conditions persist into real use. Users arrive with their own data — frequently incomplete, inconsistently structured, inherited from previous systems. They operate under their own cognitive load, alongside other work, without a guide. They return to the system after days away to check or change something, rather than experiencing it fresh as a linear first encounter.

The performance gap between demos and real use is not accidental. It is the predictable consequence of designing and testing under conditions that don't resemble operational reality. The product communicates a capability it cannot consistently deliver. Sales cycles succeed and post-sale adoption fails.

---

## Two structural causes

These two patterns produce the failure independently and together.

**Data mismatch.** The product was developed and tested against clean, representative, idealised data. Sample datasets were structured for clarity. Edge cases were excluded from testing. Users trained on that data built mental models based on its properties — and then encountered their own data: records imported from legacy systems, duplicate entries, inconsistent column naming, files where the expected three columns turned out to be eight with overlapping content, or structured data formats the interface had never been tested against. The interface provided no path through this condition because it had never been tested against it. The gap between training conditions and operational conditions was the precise location of first-contact failure.

**Cognitive load mismatch.** A demo is an instructed experience: a specialist directs attention, explains transitions, and manages the audience's frame of reference. The product only needs to perform one carefully selected scenario in sequence. Real use is ambient: the interface must orient a user who is also managing other work, who may be encountering the system for the first time without guidance, and who will return later under time pressure to perform a task they only half-remember how to do. Products designed for the demo experience tend to front-load visual complexity and assume prior orientation. Under real ambient conditions, that assumption fails on the first unsupervised session.

A third, related cause applies to longer-lived products: **developer model substitution.** When a product team builds and iterates internally without sustained user research, the interface gradually encodes the development team's model of how the system works rather than the user's model of what they are trying to do. The difference is invisible from inside the team because their mental model matches the interface perfectly. It becomes visible the moment a user who does not share that mental model encounters the system for the first time.

---

## What this costs

The commercial cost is specific and measurable: lost post-sale adoption. A prospect who saw a compelling demo signs a contract, encounters the real product, and finds it does not behave the way it appeared to. Support tickets rise. Renewal conversations become difficult. The product's reputation diverges from what the sales process communicates.

The organisational cost is also specific: product teams who cannot distinguish between demo performance and operational performance cannot make accurate decisions about what needs to change. Issues are attributed to user error or training quality when the root cause is that the product was never tested against the conditions it would actually be used in.

---

## Grounded examples

**Polymatica — analytics platform, training successful, first real use a failure**

Polymatica had built a technically powerful OLAP analytics engine — genuinely faster than competing solutions and accessible at a cost and scale that enterprise tools could not match. The product worked. Trained users became productive analysts. But every customer required the founder to personally deliver training, and before the redesign, 2% of users could complete key operations independently without consulting help documentation.

The failure mode that Sandbox Experiments surfaced was precise: training had used clean, well-structured sample data. When users imported their own real data for the first time — the first act of independent use after training — the interface provided no path through what they encountered.

A representative failure: a user imports a spreadsheet expecting three columns — city, sales, staff. The file contains eight columns. Cities appear in two of them. No single column contains only cities. The user cannot identify which column to perform the intended operation on. They have no framework for diagnosing what happened or correcting it. They stop. The training covered the operation correctly. It did not cover the condition under which that operation would most commonly be attempted.

This was not an unusual edge case. It was the standard condition of real operational data. Systems accumulated from acquisitions, data exports from other tools, files maintained by different teams with different conventions. The product had been tested against data that did not exist in operational practice, and the training had prepared users for the same non-existent conditions.

The design response: a data preparation and preview step between importing data and beginning operations — a structured point where users could inspect a sample of actual values from their file, rename columns to match their mental model, and exclude fields that would add noise. The messy data failure mode largely disappeared from support requests after this step was introduced.

Measured outcomes across two redesign releases: independent task completion rose from 2% before the redesign to 40% after release 1 and 56% after release 2. Evidence basis: product analytics from the live system.

**Pixelart Fugo — digital signage CMS, playlist workflow designed for the developer's sequence, not the user's question**

Pixelart Fugo serves media agencies and organisations that manage screens across locations — content that ranges from advertising campaigns to wayfinding displays during live events. The existing system had a known NPS of 57% and a playlist setup workflow that, in the development team's walkthrough, was logical and complete. In real use — returning to check what was playing, managing a campaign across 40 locations, adjusting a schedule for a specific screen — it did not hold.

The playlist setup was a linear wizard: a sequence of steps defined by the system's internal logic for creating a playlist object. To check or change something, users re-entered the wizard and navigated back to the relevant step. The structure encoded the developer's sequence for producing a playlist, not the user's question about their screens.

Sandbox Experiments surfaced two use cases the development team had treated as minor but which were common in practice: organisations managing multiple screens at a single location (the system had been built around multi-location deployments as the primary pattern); and media agencies running a single campaign schedule across 20 or 40 locations simultaneously (the system assumed location-specific schedules). These were not edge cases. They were operational realities the interface had made harder than they needed to be because the development team's model of typical use had been built into the product's logic without being tested against actual user behaviour.

The redesign replaced the wizard with an overview structure: a page showing three things — what content plays, where it plays, and when it plays — with dedicated mini-flows for configuring each dimension independently. The structure encodes the user's question rather than the system's internal object model. Returning to check or change something is fast: the overview is the first thing seen, and the relevant mini-flow is one step away.

NPS: 57% to 89%, client-measured before and after. Evidence basis: Pixelart Fugo surveyed all existing users; the second measurement was taken approximately two months after the redesigned platform launched.

**Squaremind — dermatology scanning device, product worked technically but failed in autonomous use**

Squaremind had built a working dermatology scanning device: hardware that functioned, a robot arm that scanned, software that processed the images. In improvised internal tests and in demonstrations to two friendly dermatologists, the technical capability was visible. The problem was specific: when the founders tested the device with actual patients — 14 users, unassisted — only 2 completed the process. Of the remaining 12, 8 got stuck within the first minute; 4 got stuck around the 3-minute mark.

The failure was not technical. The device worked. The failure was that the interface had been designed from the developer's model of the scanning process — a linear sequence of instructions displayed at each step — rather than from the patient's experience of attempting to follow those instructions alone in a room with a moving robot arm. The development team understood the scanning sequence perfectly; they had built it. Their mental model matched the interface exactly. The patient encountered something structurally different: a first-time, unassisted, physical process with no recovery path if anything went wrong.

This is a specific form of the demo-to-real-use gap that differs from the Polymatica and Pixelart Fugo examples. In those cases, the gap was between data conditions or workflow assumptions in demos and the reality of operational use. In the Squaremind case, the gap was between the product as experienced by a technically fluent team who understood what each step required and the product as experienced by a patient encountering it for the first time, undressed, with no external guidance. The failure mode was cognitive and sequential — not data mismatch, not workflow mismatch, but guidance architecture mismatch.

Creative Navy conducted 4 unstructured field observation sessions in France, deliberately not structured as measurement — the system was performing too poorly for systematic measurement to produce useful signal. The observation established the texture of the failure: patients who got confused had nothing to act on. The interface had one path. Deviation from it produced a state the interface had no response to.

The design response addressed this through the Inform–Prevent–Correct framework: a three-layer architecture applied across every step of the scan flow, designed to manage the patient's mental model at each stage, prevent specific physical confusion events before they occurred, and provide structured recovery when they did. The framework treated patient confusion not as an edge case but as a designed state with its own interaction requirements.

Post-redesign ecological testing — 29 users in London and Paris, co-conducted with an independent dermatologist — produced 27 independent completions. The 12 users who got stuck all recovered and completed the procedure. The pre-redesign completion rate of 2 in 14 became 27 in 29.

Evidence basis for pre-redesign rate: client-reported background (Squaremind's own test before Creative Navy's involvement). Evidence basis for post-redesign rate: Creative Navy-measured, ecological protocol, independent dermatologist co-conducted.

---

## What Creative Navy's Critical Systems Design method addresses here

Creative Navy's Critical Systems Design method addresses both causes through the Sandbox Experiments phase, specifically through two practices.

Domain learning — the process of the design team becoming productive users of the system being redesigned — is what establishes the gap between how the system behaves under tested conditions and how it behaves under real ones. In the Polymatica engagement, the team ran the software against their own real data during the research phase, not just against sample data. The messy-data failure mode became visible because the team encountered it as users, not as designers reviewing it from the outside.

User research conducted against real operational conditions — not against idealised scenarios constructed for a demo — is what surfaces the use cases the development team's model has not accounted for. In the Pixelart Fugo engagement, Sandbox Experiments identified the single-location multi-screen and shared-schedule-across-locations patterns that the product's architecture had made unnecessarily hard, not because the team had asked users what they wanted, but because the research observed what users actually did.

The principle underlying all three: a product designed from operational reality — from what users actually encounter, with the data they actually have, under the conditions they actually work in — performs consistently in real use rather than only under controlled conditions.

The Squaremind engagement adds a third mechanism to the two causes described above: not data mismatch, and not developer-model substitution, but guidance architecture mismatch. The product had been designed for the uninterrupted case — a patient who follows every instruction correctly. The operational reality was a patient encountering an unfamiliar physical process alone for the first time. Designing from that operational reality required treating patient confusion as a designed state rather than an edge case, and building a guidance architecture that held up when things went wrong, not only when they went right.

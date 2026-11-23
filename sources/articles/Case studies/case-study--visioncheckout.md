# visioncheckout — full writing brief

> **Purpose.** Everything needed to write the visioncheckout case study. Written to be handed to a writer with no access to the source material or the conversations that produced it.
>
> **This document is the case study brief only.** **§A3 is a numbered evidence bank** — every instruction here cites it by number, and the same V-numbers are to be used in the corpus integration brief. Do not introduce facts about this engagement that are not in §A3.
>
> **Corpus integration lives elsewhere.** Everything that changes on other pages because of this engagement goes into `corpus-integration-brief.md` as a ninth engagement. That file is the single source of truth for integration; this one is the single source of truth for the case study.
>
> **Prefix note.** This engagement uses **V**. E, S, A, M, N, T, G and O are taken by the industrial process control, Streetec, AIT, MDU, Assemblio, Topera, Egma and Oceaneering engagements respectively. Never let facts migrate between them: they are nine different clients, industries and evidence classes.
>
> **Companion document:** `visioncheckout-research-pack.md`, in this folder, carries the external verification and domain research. §A8 below is its summary; the pack is the detail and the source list. **Where the two differ, the pack wins on external facts and this document wins on the engagement.**
>
> **Two things make this engagement unusual in the corpus, and both should shape the writing.** It carries the **largest field-research programme of the recent nine engagements** and it carries **no outcome at all** — the product is in development. The case study must be built so the first fact does the work the second cannot.

---

# PART A — THE CASE STUDY

## A1. Handling rules

### A1.1 What may be named

**visioncheckout may be named in full.** The product and the company may both be identified. Use **"visioncheckout"** as the canonical name throughout, styled lowercase as the company styles it, with "a German vendor of computer-vision self-checkout systems for staff restaurants and catering" as the gloss on first mention. Do not rotate descriptors; the entity-consistency rule in the writing guide applies.

**Competitors may be named.** VisioLab, Deligo Vision, Mashgin, Tiliter, Nomitri, GK Software, Toshiba, NCR Voyix, Diebold Nixdorf, Zippin and Amazon's checkout products may all appear by name. Every competitive fact used in this brief is public and externally verified; see §A8.4 and the research pack §8.

**No individuals, on either side.** Role descriptors only — "visioncheckout's product lead", "a member of the catering staff", "Creative Navy's researcher". The call notes carry first names on both sides; none may appear.

**No customer names.** This is the firmest rule in the brief after the outcome rule. visioncheckout's own customers must not be identified, in any form:

| Do not use | Use instead |
|---|---|
| The chemical manufacturer's name | "a chemical manufacturer's staff restaurant" |
| The automotive supplier's name | "an automotive supplier's canteen" |
| The leisure destination's name | "a large public leisure venue with several restaurants" |
| Any enterprise customer named in the procurement discussion | omit entirely |
| Sample customer names in design files | omit entirely — placeholder data |

> **Flag for the engagement lead, not for the writer.** Naming visioncheckout narrows the customer descriptors considerably: a large German leisure destination with multiple restaurants running this vendor's system is close to identifiable from the descriptor alone. The brief is written to the rule as given. If the rule is meant to be a genuine screen rather than a courtesy, that third descriptor should be softened further — "a public-facing venue serving visitors rather than regular users" carries the research point and identifies nothing. Raise once, then write to whatever is decided.

**Quotation.** Client positions in §A3.5 come from meeting notes rather than from verified recordings. They are **reported, not quoted** — write "visioncheckout's team described the current payment screens as inconsistent and unmanageable", never a quoted sentence. The single exception is §A3.5 V72, discussed there.

### A1.2 What may not be shown

**No screenshots, wireframes or design images.** The corpus is text-only on documentation pages. Describe the designs in prose.

### A1.3 Dates

**Do not place the engagement in a particular year.** No years, no months, no seasons. Sequence and duration only — "seven one-week sprints", "the three UI sprints", "the research week".

**Regulatory and standards dates are permitted and should be used.** They are domain facts, not engagement facts, and the corpus already uses them: the AIT brief carries "§14a EnWG since the start of 2024" and "Euro NCAP's 2026 rating scheme". So 28 June 2025 for the BFSG and the EAA, the 2040 grandfathering horizon, and the EN 301 549 version position in §A8.1 may all appear. **The test is whether the date locates the engagement. If it locates the law, it stays.**

### A1.4 Status

**The product is in development.** Nothing has shipped. Implementation Partnership is running now. This is the weakest status of the nine recent engagements and **no outcome of any kind may be claimed** — see §A4.

---

## A2. The engagement in brief

visioncheckout makes a self-checkout kiosk for staff restaurants, university refectories and visitor catering. A guest puts a tray under an overhead camera; computer vision recognises every item on it in about half a second; the basket appears on a 1920×1080 screen; the guest pays, usually by presenting an employee keycard. There is no scanning and no barcode. The product's stated differentiator is that the whole transaction can complete touchlessly in about three seconds.

Creative Navy redesigned the checkout flow across **seven one-week sprints — four UX, then three UI** — delivering **34 screens across 138 versions**, two clickable prototypes, a design system with tokens, a complete user-flow diagram, and a requirements table covering the whole flow. The engagement also produced a field-research programme, a competitive benchmark, a five-jurisdiction regulatory analysis and a text-to-speech entry-point study. Creative Navy is now supporting visioncheckout's engineering team through implementation.

**Two facts shape everything.** The first is commercial: accessibility law is the reason the project was funded. The second is that the product's central value proposition — a touchless, auto-advancing, three-second checkout — is, in accessibility terms, a timed interaction, and the law requires every timed interaction to be extendable. The engagement had to design a product whose best feature its governing regulation treats as a defect.

---

## A3. Evidence bank

### A3.1 Engagement record — stateable as fact

- **V1** — Fixed-scope engagement of **seven one-week sprints: four UX sprints, then three UI sprints.** Weekly show-and-tell reviews throughout.
- **V2** — **Five-person team**: UX designer, UI designer, product designer, researcher, project manager.
- **V3** — **34 screens delivered, across 138 versions in total.** The version count is the engagement's option-space evidence and is unusually well documented; see V8 and §A5.6.
- **V4** — **Two clickable prototypes.**
- **V5** — **A design system with tokens**, specified to separate accent colours from state colours, to carry a contrast floor, and to hold a type scale that survives dual-language stacking.
- **V6** — **A complete user-flow diagram**, with a legend distinguishing screens, configurable screens, accessibility modes, error states and end-of-flow, and carrying Creative Navy's open questions as explicit callouts inside the artefact rather than in a covering note.
- **V7** — **A requirements table authored in full by Creative Navy**, working from visioncheckout's initial brief. It covers roughly twenty modules, each with content, user actions, the user types affected, a priority, and Creative Navy's own questions and recommendations. This is a material difference from the industrial, AIT and Assemblio engagements, where the equivalent artefact was co-authored or client-originated. **Here the artefact is Creative Navy's throughout.**
- **V8** — **A competitive benchmark covering thirteen comparators in three tiers**: three direct computer-vision food-service competitors, five adjacent computer-vision checkout systems, and five established kiosk conventions. Every claim in it is confidence-labelled — verified, high, medium, low, or analysis — with the labelling convention stated at the top of the document.
- **V9** — **A regulatory analysis covering five jurisdictions** — Germany, Austria, Switzerland, the UK and Ireland — resolving to a single design approach, with the design consequences worked clause by clause.
- **V10** — **A text-to-speech entry-point study**: five activation patterns documented in deployed practice, a three-column decision table for three hardware scenarios, and seven decisions formally requested of the client.
- **V11** — **No retainer.** The engagement did not convert into ongoing retained work.
- **V12** — **Implementation Partnership is running now**, supporting visioncheckout's engineering team during development.

### A3.2 Measured by Creative Navy — the strongest evidence in the engagement

- **V13** — Field research conducted by **one researcher over five days at six locations across three organisations**: a chemical manufacturer's staff restaurant, an automotive supplier's canteen, and a large public leisure venue with several restaurants.
- **V14** — **563 interactions observed.** This is the engagement figure and the one to use. The research report's per-site approximations — roughly 200, 90 and 60 — are rounded working notes taken during the week and do not sum to it; **563 is the total, and no other observation figure may appear.**
- **V15** — **Transaction durations were measured with a clock during observation.** Everything reported as a duration in this evidence bank was timed, not estimated.
- **V16** — Measured standard transaction durations: approximately **13 seconds** at the chemical manufacturer's site, approximately **11 seconds** at the automotive supplier's site, and approximately **25 seconds** at the leisure venue.
- **V17** — Unusual transactions — removing lids, a guest unable to find their card, errors — ran to **more than 20 seconds**.
- **V18** — At the leisure venue, **roughly two thirds of observed transactions were multi-tray**, with two to four trays common.
- **V19** — **34 users interviewed.**
- **V20** — **13 catering staff interviewed.**
- **V21** — **When an error occurs it takes one to four minutes to resolve, during which three to twelve people cannot check out.**

> **Writer's caution.** V3 and V19 both carry the number 34 — thirty-four screens and thirty-four users. They are unrelated. Never put them in the same sentence without disambiguating, and never let one be read as the other.

### A3.3 Observed in the field — behaviour and conditions

- **V22** — Once people have used the system once or twice they know what to expect. Experienced users are very fast.
- **V23** — Canteen users fixate the list of dishes for three to five seconds; visitors at the public venue instead look for what the next step is.
- **V24** — **The largest single component of lost time is people looking for their card.**
- **V25** — A typical basket is one main dish; four items is very common once salads and drinks are included; baskets above five items were not observed outside the multi-tray case.
- **V26** — **Users regularly bow towards the screen because they cannot read the small type.**
- **V27** — **Overhead lighting commonly casts a dark area both on the screen and on the surface where the tray is placed.** One site was simply dark.
- **V28** — At some installations the screen sits far enough away that there is **about 70 cm between display and the user's head** — further than the viewing distances the type-size specification had assumed. **This is one of the engagement's best research-to-design traces**: a specification written against an assumed viewing distance, checked against installations in the field, found short, and answered by raising defaults rather than by adding a mode (V96a).
- **V29** — It is difficult to find a good position for the unit; people approach the counter from both sides.
- **V30** — At two of the three organisations a member of staff oversees the process and helps people.
- **V31** — Where people need to weigh food, experienced users know how to do it, and experienced users are confident about editing the basket.

### A3.4 Observed failure modes in the existing system

- **V32** — Guests without a tray sometimes try to start by scanning the barcode of a soft drink; it is not clear that the process begins by putting items down.
- **V33** — It is sometimes unclear how to position the tray.
- **V34** — **Guests often do not understand that payment is processing, because the main display does not tell them.**
- **V35** — Guests taking food away sometimes leave the lid on and do not know why recognition fails.
- **V36** — **The variant-selection screen is very confusing.** Where the recognised product is "soft drink" and the guest must pick Cola, Sprite or Fanta, the flat visual design communicates neither that these are options belonging to a product nor that they can be pressed.
- **V37** — **The screen telling people to use an employee card or a credit card is not understood; most people have to be told.**
- **V38** — An empty glass on the tray produces a charge alongside the drink it held. Regular canteen users have learned to avoid this; at the public venue staff intervene.
- **V39** — **An employee intending to pay by credit card forgets to present the employee card for the discount, and pays more than they should.**
- **V40** — The overview of the screen confuses people; guests would like to understand what each area is for. Button hierarchy is unclear — pay, rescan and everything else do not read as three levels.
- **V41** — Once a tray is scanned, the animation bringing the screen to life is complex and slow.
- **V42** — When something changes in the product list, sound and animation successfully draw attention.
- **V43** — Where payment has started, an arrow pointing toward the terminal would help.
- **V44** — **Catering staff like the system and report it works well when supplied with enough images.** But learning what images the system actually needs takes time, and feeding it enough material takes patience staff often do not have.

### A3.5 What did not happen — must be stated, not omitted

- **V45** — **No audit report was produced.** visioncheckout briefed Creative Navy verbally on the problems it saw, and Creative Navy conducted its own review of the existing interface — but that review was not a deliverable and no audit document exists. **Nothing in this case study may be written as though an expert review had been delivered.**
- **V46** — **The new designs were not tested with users.** The field research measured the system being replaced, not the replacement.
- **V47** — **Nothing has shipped and nothing has been measured about the redesign.** The product is in development.

### A3.6 Hardware and operating context — client-stated

- **V48** — **1920×1080, landscape**, on self-service kiosk hardware. Physical panel size was requested at kick-off and is not fixed in the design documents.
- **V49** — Peripherals present: **camera, scale, keycard reader, QR reader, receipt printer, speaker, status LED.** **Absent: headphone jack and tactile keypad.**
- **V50** — The QR scanner sits on the right in about 90% of installations and on the left in the rest; the scale may be on either side depending on the site. **No single layout assumption is safe.**
- **V51** — **Recognition completes in about 0.5 seconds; synchronising the basket with the POS system takes one to three seconds.** The guest experiences the sum.
- **V52** — In roughly 3% of cases tray detection fails because the next guest follows too quickly.
- **V53** — **Up to ten price levels** exist at some sites. The default level is shown and the correct one applied only at payment.
- **V54** — **Three payment methods** — keycard or employee badge, external card terminal, QR code — in **six supported combinations**. Each method can serve either payment or price-level setting; one customer operates two different QR code types, one for secure payment and one for price level only.
- **V55** — **90–95% of users pay by keycard**, and **placing the keycard pays immediately where there is available balance.**
- **V56** — Card payment executes on an **external POS terminal that returns no feedback** to the kiosk.
- **V57** — **Any basket change after weighing cancels the POS transaction and requires re-weighing.**
- **V58** — Average basket is two to three items. The catalogue may run to fourteen or fifteen categories.
- **V59** — **Item names typically exist in only one language**, while interface text must show two.
- **V60** — **One POS item can map to several visual variants** — different soups, salads, dishes of the day. Variants matter for retraining the recognition system, not for the guest's transaction.
- **V61** — Two deployment types: **closed-world** sites with a known population and dual-language display, and **open-world** sites serving the public, with a language selector offering English, German, French, Italian and Spanish.
- **V62** — Customers apply their own logo and accent colour. **No customer-editable typography and no customer-editable component styling.**
- **V63** — Rebranding was in progress during the engagement; brand guidelines were a reference rather than a constraint, and a light theme was agreed at kick-off because the existing dark theme was hard to read.

### A3.7 visioncheckout positions that drove design decisions

- **V64** — **Accessibility law is the budget justification for the project.** This is visioncheckout's own framing, recorded at kick-off, and it is the reason the work was funded. *(Unusually, this one may be rendered close to the original phrasing — it is a statement about the engagement's commercial basis rather than about a person, and it is the single most load-bearing client position in the record. Attribute it to visioncheckout, not to an individual.)*
- **V65** — Text-to-speech is a customer requirement regardless of what the law turns out to require: large enterprise customers ask for it during sales and after launch.
- **V66** — Legibility is the top complaint from current users.
- **V67** — The touchless interaction is what works well today and should not be dramatically changed.
- **V68** — visioncheckout described its existing payment screens as inconsistent and unmanageable, and asked Creative Navy to resolve the combinations rather than the individual methods — the complexity is in the permutations.
- **V69** — Removing the "locked by staff" label from the out-of-service screen had previously produced constant support calls from untrained staff, so it must stay.
- **V70** — Guests must never be able to get stuck without an escape route.
- **V71** — "Delete" should be avoided as a label, on grounds of customer sensitivity.

### A3.8 Design decisions and the reasoning behind them

**Speed and the perception of speed**

- **V72** — **The preliminary basket.** Recognition is near-instant but POS synchronisation is not, so the basket is shown immediately with items visible and every action and payment disabled, and **item rows animate in individually rather than appearing as a finished list** — so the perceived event is recognition rather than page load. Prices, total and tax line stay hidden until sync returns.
- **V73** — Post-scan animation was cut back. The existing system's entrance animation is complex and slow (V41); the principle adopted was that animation should be spent only where attention genuinely needs to be captured.

**The correction path**

- **V74** — **Numbered markers on the tray image matched to a numbered list.** Connecting lines between items and list entries were explored and rejected as messy and hard to implement cleanly; text labels overlaid on the scan were rejected because they are too small to read in bright light.
- **V75** — **Thumbnails are required in the catalogue**, because item names are frequently not meaningful enough to identify a dish without an image.
- **V76** — **Sidebar category navigation in the Corrector.** Top tabs were viable; multi-row overflow was rejected, especially under dual language, because it grows too tall and obscures content when the bottom bar appears.
- **V77** — **Search deliberately de-emphasised** so that scrolling thumbnails is the primary path, because item names are poor; search remains for staff.
- **V78** — **Scrolling preferred over pagination** for results, the touchscreen being responsive enough.
- **V79** — **Auto-cycling variant thumbnails ruled out** on accessibility grounds and as visual noise, leaving the one-POS-item-to-many-visual-variants problem (V60) explicitly unresolved rather than papered over.
- **V80** — **Entry to the Corrector is deliberately understated** — a tertiary edit control near the basket header, with rescan remaining the primary action — so that correction is available without being proposed as the normal next step.
- **V81** — **Rescan is destructive and was flagged as such**, discarding all state including corrections already made; a two-step confirmation was recommended wherever corrections exist.
- **V82** — The guiding principle for Selections, Extras and the Corrector: **present the interaction as "confirm this", not as "fix this".** No warning palette on selection screens, and the same visual pattern for a selection prompt and a corrector candidate list so the guest learns one pattern.

**The flow, and what it must survive**

- **V83** — **Guidance is a configurable level on one flow, not two separately designed flows.** Creative Navy argued against building closed-world and open-world as separate products and for a single flow carrying a guidance setting — prompt verbosity, whether prompts persist or fade, whether the right-hand panel carries guidance or stays empty, whether payment requires explicit confirmation. **The argument was accepted and the requirements table records the outcome.**
- **V84** — **Language selection belongs on the basket screen, not the start screen.** Guests place a tray first and go straight to the basket; at the start screen they have no free hand.
- **V85** — **Age verification is checked once, at payment**, rather than after each tray scan.
- **V86** — **"Scan another tray" and "Pay now" as a split control, both secondary, with no primary.** Making "scan another tray" primary was rejected because it would imply that scanning another tray is the next step when payment is.
- **V87** — **Multi-tray presented as a scrolling layout with the most recent tray at the top**, rather than the existing aggregated view.
- **V88** — **Tax level as a persistent two-state control inside the basket**, with payment disabled until chosen in explicit mode — rather than as a modal in the payment path, because the product already had one poorly-received pre-payment dialog.
- **V89** — **Sub-items rendered as dedicated line items with individual prices**, matching the POS system's own structure.

**Payment, and its seams**

- **V90** — **The payment-in-progress screen says to follow the instructions on the terminal**, because the external terminal returns no feedback to the kiosk (V56) and no truthful state is available.
- **V91** — **QR scanning window placement follows layout logic rather than a fixed position**, with the tray visible behind it, because the tray is on the counter while the guest scans. Dual-language text length rules out centring where both keycard and QR options are shown.
- **V92** — **The keycard-pays-immediately behaviour was challenged on the record.** Creative Navy put the question into the flow diagram as an explicit callout, with the counter-argument stated: double scanning risks bugs and guest frustration, and 90–95% of guests pay by keycard (V55). The challenge rests on V39.

**Errors and staff**

- **V93** — **Error screens kept minimal and friendly**, with a single shared error icon across error types, to keep focus on the text and avoid alarming guests.
- **V94** — **The out-of-service screen carries two messages at two levels**: a primary message addressed to the guest, and a secondary note addressed to staff (V69).
- **V95** — **Operator-facing error detail separated from the guest-facing error view**, with recovery and retry states designed rather than assumed.

**Accessibility**

- **V96** — **Target sizes were resolved in millimetres as well as pixels**: a **56 × 56 px minimum, about 10 mm physical**, and a **104 px standard, about 18.6 mm**, on a 4 px grid, with a narrow exception allowing one dimension to be smaller where the other compensates. **Converting to physical size rather than specifying in pixels alone is the decision worth describing** — a pixel figure is meaningless on a panel whose physical dimensions were still unfixed (V48), and the guest's experience is governed by millimetres and viewing distance, not by the pixel grid.
- **V96a** — **Type and target sizes were raised by default across the interface**, rather than held at a baseline and supplemented by a magnification mode. This was the compensating decision taken when Magnification Mode was deprioritised (V103), and it is the engagement's answer to the legibility findings (V26, V66) and to the viewing distances actually observed in the field (V28).

> **Writer's caution on the viewing-distance figures.** The requirements document derives minimum type size from the EN 301 549 criterion that a capital "H" subtend at least 0.7° at a supplier-stated viewing distance, and tabulates values for 50, 55 and 60 cm. **Do not publish those pixel figures.** They are working values computed against a panel size that was never fixed, they are rounded to type-scale steps rather than strictly proportional to distance, and the field research observed installations beyond the range the table covers. **Publish the principle and the physical minimums (V96), not the table.**
- **V97** — **A persistent on-screen accessibility entry point was specified first**, at bottom-left, anchored hard to the bezel at zero offset from both screen edges so that a hand sliding into the corner lands on it, present on every screen of the guest flow, never inside a scroll region, never suppressed during basket sync, and never a long-press or multi-finger gesture. The reasoning: a corner is the only screen location a person can find without sight, because two physical edges intersect there.
- **V98** — **That on-screen control was then removed, and the activation route moved to hardware.** The decision was that a touchscreen button cannot be the primary entry point for a mode whose users cannot see the screen, and that activation should come from a modular hardware unit instead. **What the screen retained is a status indicator**: an accessibility-module state marker placed in the top-left navigation, positioned consistently with the staff-mode tag, so that the mode's state is visible on screen while its activation is not dependent on sight. The hardware module itself went onto the requirements list for the next hardware iteration (V106).

> **This sequence is the honest shape of the accessibility story and should be written as a sequence, not collapsed into an outcome.** The engagement specified the best available software answer, then concluded that the software answer could not carry the job alone, and converted it into a hardware requirement. The reasoning that produced the reversal is the engagement's own and is recorded: an on-screen button serves low-vision, dyslexic, cognitively-loaded and older guests, while only a hardware event — a jack, a tactile key, a presented credential — serves a guest with no usable vision. **A design that ships only the on-screen button has covered the larger population and missed the population the regulation is written for.** That sentence is the angle.
- **V99** — **The keycard identified as the cheapest route to blind operability without any procurement** — a touchless credential the guest already presents at every transaction, in a closed population where the operator can set a per-cardholder accessibility flag. Its limits were stated plainly: it is opt-in in advance, does nothing for a first-time guest, requires an enrolment path that does not exist, and still cannot speak a card balance without private listening.
- **V100** — **A presence-triggered audio cue proposed using only existing peripherals** — the camera already performs tray and hand detection, so on approach at an idle screen the existing speaker can say that audio assistance is available and where to touch, fired once per approach, silenceable per site, with volume reset after use.
- **V101** — **Under speech mode, all auto-advance suspends and every countdown becomes pausable or extendable.** This was recorded as a deliberate collision with the touchless three-second proposition, and as a product decision rather than a technical detail.
- **V102** — **Speech language policy: English by default, with an in-mode switch to German** — on the reasoning that the visual dual-language rule governs what is displayed, that speaking every string twice would double the duration of an already serial interaction, and that refusing the switch would leave German-speaking blind guests worse served than sighted ones at a German site.
- **V103** — **Magnification Mode, Reach Mode and a reduce-motion toggle were all deprioritised**, on the stated grounds that building every screen twice adds significant complexity and that mounting height varies by site so customers can place the device lower where needed. **The compensating decision was to make fonts and buttons larger by default** rather than to provide a second display mode.
- **V104** — **The handoff to the external card terminal must be narrated in speech**, because the guest meets two accessible modes with two different activations in one transaction and the moment of handoff is otherwise invisible.
- **V105** — **The regulatory analysis resolved five jurisdictions to one design approach**, on the finding that three markets impose a textually identical manufacturer-side obligation against the same harmonised standard and the other two converge on it — so designing for all five costs the same as designing for Germany alone.

### A3.9 How visioncheckout responded to the accessibility work

- **V106** — **visioncheckout accepted every recommendation that did not require hardware change.** Every hardware-dependent recommendation — the 3.5 mm headphone jack, the tactile navigation keypad — **was added to the requirements list for the next hardware iteration.**

This is the engagement's cleanest resolution and it should be written as one. The text-to-speech study asked for a dated decision rather than silence: *if the jack is declined, record it as a deferral, not an omission.* That is exactly what happened. The software work proceeded; the hardware work became a documented requirement for hardware that does not exist yet.

---

## A4. Evidence calibration — mandatory

**V1–V12 are engagement record and may be stated plainly, but they are not outcomes.** "34 screens across 138 versions" is a fact; "34 screens transformed the product" is not.

**V13–V21 are Creative Navy-measured and are the strongest evidence in this engagement.** Required framing:

> Creative Navy conducted field research at six locations across three organisations over five days, observing 563 interactions with the system in live operation. Transaction durations were measured with a clock during observation rather than estimated or self-reported. The research also included interviews with 34 users and 13 catering staff.

Three constraints on that paragraph. **One researcher, five days** — say so; it is a focused programme, not a longitudinal one, and stating its size is what makes it credible. **The timings measure the system being replaced**, not the redesign — never let them read as a result. And **V21's "three to twelve people" is an observed consequence of a measured duration**, not an independently counted figure; write it as what it is.

**V22–V44 are observed but not quantified.** They are patterns a researcher saw and recorded, not counted events. Write them as observations — "guests regularly bow towards the screen", not "X% of guests bow towards the screen". No percentage may be attached to any of them.

**V45 must appear in the case study, not be quietly omitted.** No audit report was produced. The "before" state in this case study comes from three sources — visioncheckout's own verbal account of its problems, Creative Navy's own undelivered review of the interface, and the field research. That is a legitimate evidence base and it is weaker than an audit. Say which is which, and **never describe this engagement as including an expert review or a UX audit as a deliverable.**

**V46 and V47 are the hard limits.** No usability testing was done on the new designs, and nothing has shipped. The case study is **demonstrated problem → demonstrated response**, with the problems measured and the responses designed. It stops there.

**V106 must be described at its actual weight.** visioncheckout accepted the software recommendations and recorded the hardware ones as future requirements. That is a real and creditable outcome of the analysis, and it is **not** a claim that the product is accessible, will be accessible, or complies with anything.

**The scope question must not be written as settled.** See §A8.2. Creative Navy's reading — that the live exposure is the payment dialogue rather than blanket self-service-terminal coverage — is well argued and is contested in both directions by German commentary, and the German transposition is textually broader than the EAA English on the payment limb. **Write the analysis, not the verdict.**

**Do not describe this as a high-consequence system.** It is a canteen checkout. The locked agency sentence names the category; the case study must not import a safety posture the engagement does not support. The consequence of failure here is a queue, a wrong charge and a guest who needs help — which is enough, and is interesting precisely because it is ordinary.

### What must not be claimed

- Any throughput, speed, error-rate, satisfaction, accuracy or commercial outcome from the redesign. **None exists.**
- Any implication that the product is deployed with the new design, or in market use.
- **Any compliance, conformance or certification credential.** Creative Navy designed to published instruments. It did not certify to, audit against, or achieve conformance with EN 301 549, the EAA, the BFSG or WCAG, and it did not provide legal advice.
- Any claim that the product is accessible, or that blind guests can use it. The engagement's own assessment of the current hardware scenario is that it delivers most of the low-vision benefit and none of the blind benefit. **Carry that assessment; do not soften it.**
- Any usability or comprehension result for the new designs. Nothing was tested.
- Any safety claim, or any suggestion of regulated-safety work.
- Any figure for competitor accuracy presented as measured truth; vendor claims are citable **as claims** only.
- Any percentage attached to a V22–V44 observation.

---

## A5. Positioning — the angles worth leading with

### A5.1 A product whose best feature its regulator treats as a defect — lead with this

visioncheckout's proposition is a checkout that completes touchlessly in about three seconds, with the flow advancing by itself. In accessibility terms that is a **timed interaction**, and both the EAA's own annex and the German implementing regulation require a self-service terminal to alert the user through more than one sensory channel when response time is limited **and to allow that time to be extended** (§A8.3).

The engagement did not resolve this and did not pretend to. It recorded the rule — under speech mode, auto-advance suspends and every countdown becomes pausable or extendable (V101) — and recorded explicitly that this collides with the three-second proposition by design, and that the collision is a product decision which should be minuted as one.

**This is tension-driven reasoning with a named, unresolved tension, and that is rarer and more valuable than a tidy resolution.** The corpus has nothing else like it: an engagement where the thing the client sells and the thing the law requires cannot both be fully true, where the designer's job was to state the trade-off precisely enough for someone else to decide it. Write it as the engagement's spine.

### A5.2 The keycard trace — measured harm, traced to a design decision, raised as a question

This is the engagement's strongest single narrative unit, and it has three independent sources behind it.

Field research found a recurring, specific harm: **an employee who means to pay by credit card forgets to present their employee card for the discount, and pays more than they should** (V39). The cause is a core product behaviour — placing the keycard pays immediately where there is balance (V55) — interacting with a population in which 90–95% of guests pay by keycard and the card is also the thing that sets the price.

Creative Navy put that behaviour into the flow diagram as an explicit challenge, with the counter-argument alongside it: separating identification from payment would mean scanning twice, which risks bugs and frustration, and 90–95% of guests would feel it (V92). The question was asked, the cost of changing was stated, and the decision was left where it belonged.

**It pairs with the second-largest measured finding** — that the greatest single component of lost time is people looking for their card (V24). The same object is the identity token, the price-level token, the payment instrument and the main source of delay. An interface cannot fix that, but it can stop the object's ambiguity from costing a guest money.

This is the AIT audio-feedback trace's equivalent: a specific, observed, human problem, answered on the record. **Lead the research section with it.**

### A5.3 Designing the moment the model is wrong

The competitive benchmark reached a strategic conclusion that is unusual for a design deliverable: **recognition accuracy is not a durable differentiator.** Every vendor in the category claims 99% or better, the claims are unfalsifiable to a buyer, and computer-vision recognition is being absorbed into the incumbents — Nomitri into GK Software under Fujitsu ownership, Toshiba shipping a vision kiosk of its own, Tiliter having exited hardware to sell recognition as an API (§A8.4).

The conclusion drawn was that the durable asset is the **correction interaction**, because it is the one component that cannot be bought as an API: it requires owning the camera view, the interface and the catalogue at once. And none of the three direct competitors publishes a correction interface at all.

The design follows from that: numbered markers on the live tray image matched to a numbered list (V74), thumbnails because names do not identify a dish (V75), search deliberately de-emphasised because names are poor (V77), correction entry kept understated so it is available without being proposed (V80), and the governing principle that selection should read as **"confirm this", not "fix this"** (V82).

**The positioning line the engagement produced is worth stating in full**: in a market where every vendor claims to be right almost always, the credible claim is not "we are right more often" but *we are the best in the category at the moment we are wrong*.

### A5.4 Field research that changed the design

One researcher, five days, six locations, 563 interactions observed with transaction durations measured by clock, 34 users and 13 catering staff interviewed (V13–V20). **This is the largest field-research programme in the recent nine engagements**, and it is the only one in that set that observed a deployed system in live commercial operation.

What matters for the case study is not the size but the traceability. The research produced findings that changed specific screens:

- Guests cannot tell that payment is processing (V34) → the payment-in-progress state, and the finding that the external terminal returns no feedback, so the only truthful instruction is to follow the terminal (V90).
- The variant-selection screen does not communicate that options belong to a product or that they can be pressed (V36) → the reframing of selection as confirmation (V82), and separated, clearly tappable areas.
- The employee-card-or-credit-card screen is not understood and people have to be told (V37) → the payment-method work, which the client had independently described as unmanageable (V68).
- Users bow toward the screen because the type is too small (V26) → the type and target minimums (V96), and the client's own account that legibility is the top complaint (V66).
- Multi-tray is two thirds of transactions at a public venue (V18) → the multi-tray scrolling layout and the split control that refuses to make scanning another tray look like the next step (V86, V87).

**And one finding that has no interface answer, which is why it is worth including.** Catering staff like the system and say it works well when given enough images — but learning what images it needs takes time and patience they often do not have (V44). The model's field accuracy is partly an operational variable owned by canteen staff. That is a human–AI interaction finding rather than a computer-vision one, and it belongs in the AI cluster.

### A5.5 The accessibility answer that could not be made in software, and was converted into a hardware requirement

This angle has a clean three-step shape and should be written in that order.

**First, the best available software answer was designed in full.** A persistent accessibility control at bottom-left, anchored to the bezel at zero offset so a hand sliding into the corner lands on it, on every screen, never in a scroll region, never suppressed during basket sync, never a long-press (V97). The reasoning is the good part: a corner is the only location on a screen a person can find without sight, because two physical edges intersect there.

**Second, that answer was judged insufficient and the activation route was moved to hardware** (V98). The argument is the one the whole angle turns on: an on-screen button serves low-vision, dyslexic, cognitively-loaded and older guests, but **a blind guest cannot find an on-screen button by looking for it.** Only a hardware event — a headphone jack, a tactile key, a presented credential — serves a guest with no usable vision. A product that ships the button alone has covered the larger population and missed the population the law is written for. What stayed on screen is a status indicator in the top-left navigation, so the mode's state is visible while its activation does not depend on sight.

**Third, the client's response split exactly along the line hardware draws**: everything not requiring hardware change was accepted, and everything requiring it was added to the requirements list for the next hardware iteration (V106). The headphone jack and the tactile keypad are now documented requirements for hardware that does not yet exist.

**What that leaves, in the engagement's own terms, is the part worth publishing.** With no jack and no keypad on current hardware, the position delivers **most of the low-vision benefit and none of the blind benefit** — and the text-to-speech study says so in those words, while recommending the work be built anyway, because the software is identical across all three hardware scenarios and only the trigger and the audio path change. Building it now means the hardware, when it arrives, is a trigger change rather than a redesign.

Three further decisions make this a designed deferral rather than a gap: Magnification Mode, Reach Mode and reduce-motion were deprioritised with reasons stated and compensated by making type and targets larger by default rather than shipping a second display mode (V103); the keycard was identified as the cheapest route to real blind operability requiring no procurement at all, with its limits stated plainly (V99); and a presence-triggered audio cue was proposed using only the camera and speaker already present (V100).

**This is the AIT "deferring a feature honestly" angle with a harder edge**, because what is deferred is not a help system but access for the population the regulation exists for. And it is independently corroborated: peer-reviewed research published in the same period found eight of ten blind participants unable to complete a self-checkout unaided, while the low-vision participants who transacted independently were the only ones with a positive view (§A8.7). **The engagement's own stated limitation and the literature's finding are the same split.** Say so — it belongs in the buying guidance as much as in the case study.

### A5.6 One flow, many configurations

Closed-world and open-world deployment, up to ten price levels, three payment methods in six combinations each able to serve payment or price-setting, three tax modes, dual-language or single-language-plus-selector, and configurable thumbnails, per-item prices, tax line, help button and restricted mode (V53, V54, V61, V62, V83).

Creative Navy argued against designing two flows and for **guidance as a configurable level on a single flow** — and the argument was accepted and written into the requirements table (V83). The reasoning is worth giving: two discretionary flows plus a mandatory accessibility mode is three products, and a product that already carries this many permutations cannot afford to double its design, QA, configuration and support surface.

This is *constraint respecting* and *organic system building* applied to a configuration problem. It pairs with the industrial engagement's customer-generated navigation without repeating it: there the designer could not fix the information architecture because customers assemble it; here the designer refused to let a configuration difference become an architectural one.

### A5.7 A smaller one: the analysis that argued the exposure down and the spend up

The regulatory work did something commercially counterintuitive. It **narrowed** the client's assumed legal exposure — reading the directive's two limbs separately and locating the live risk in the payment dialogue rather than in blanket self-service-terminal coverage — and then argued for spending beyond the legal floor anyway, on the grounds that enterprise procurement decides the deals and a speech mode that covers only the payment step would be a bad product.

The formulation it produced is the quotable one: **treat full-flow speech as commercially decisive and payment-dialogue speech as statutorily mandatory, and say so in that order when the client asks why it costs what it costs.**

This is the Streetec "restraint as a service" angle in a different register, and it belongs in `/buying` as much as here. **Note the §A8.2 constraint**: write the reasoning, not the verdict.

---

## A6. Classification and filing

```
## Classification

- **Primary case-study category:** /evidence/case-studies/retail-operations
- **Primary context:** /contexts/ai-enabled-products
- **Also-relevant contexts:** /contexts/retail-operations, /contexts/regulated-products, /contexts/consumer-and-multi-market-products
- **Connects to:** /situations/ai-and-automation/users-trust-the-ai-too-much, /situations/ai-and-automation/the-model-may-be-good-but-the-product-behaviour-is-not, /situations/ai-and-automation/human-control-is-weak-in-practice, /situations/complexity/the-product-works-in-demos-but-not-in-real-use, /situations/risk-and-consequence/users-cannot-recover-cleanly-from-errors, /failures/error-and-recovery-failures/errors-are-hard-to-correct, /failures/state-visibility-failures/users-cannot-see-what-state-the-system-is-in, /failures/interpretation-failures/users-see-information-but-cannot-judge-what-matters, /capabilities/human-ai-interaction-design, /capabilities/error-reduction-and-recovery-design, /capabilities/research-in-complex-operational-contexts, /capabilities/cognitive-load-reduction, /practices/error-likely-interaction-review, /practices/evidence-led-prioritisation
```

**On the primary context.** The tagging convention chooses primary context by dominant design challenge, not by industry. The load-bearing problem here is what the interface does at the seam between an automated recognition decision and a human who must accept or correct it — the preliminary basket's latency-and-trust problem, the correction path, the variant ambiguity, the guest who is charged for an empty glass, and the employee overcharged because a single credential does three jobs. **That is an AI-enabled-products challenge, and the engagement's own strategic conclusion agrees**: the correction interaction, not the recognition, is where the product's defensibility lives.

Retail operations is the industry and sits as also-relevant, where the engagement's strongest contribution is peak-load evidence (§A8.5). Regulated products carries the accessibility-law material. Consumer and multi-market carries the dual-language and five-language work.

**On the case-study category.** It files under `/evidence/case-studies/retail-operations` because it is a point-of-sale system, giving that category a second study alongside the Swiss petrol forecourt engagement. **The divergence between category and primary context is expected and correct** — it is the Polymatica pattern the tagging convention describes, and it is exactly why the two axes are tagged separately.

**No structural change is required.** Every slug above resolves against the current repository: `/evidence/case-studies/retail-operations`, all four contexts, and all fourteen connects-to targets exist. This is the second engagement in the recent set needing no structural change. Run `python3 Guidance-meta-layer/lint_case_studies.py <repo>` after the notes file is written, as Step 8.5 requires.

**On outcomes pages.** This engagement populates **no** `/evidence/outcomes` page. Those pages require a grounded, specific result with its evidential basis stated, and nothing about the redesign has been measured. **Note specifically that `/evidence/outcomes/operational-outcomes/clearer-ai-behaviour` is reserved and still pending** — it awaits an AI engagement with measured before-and-after on a named failure mode, and this engagement does not supply one. Do not be tempted: it is the closest candidate the corpus has yet seen, and it still does not clear the bar.

V13–V21 belong in `/evidence/evidence-standards/what-we-have-measured`. V22–V44 belong in `/what-is-observed-but-not-quantified`. V45–V47 belong in `/what-we-do-not-claim`.

**Phase mapping — confirmed by the engagement lead.** The field research, the benchmark, the regulatory analysis and the text-to-speech study are **Sandbox Experiments**; the requirements table, the flow diagram and the early wireframe generations are **Concept Convergence**; the later wireframe generations and the three UI sprints are **Iterative System Building**; the design system with tokens is **Organizational Integration**; and the support now running alongside visioncheckout's engineering team is **Implementation Partnership** (V12). **All five phases are claimable, and Implementation Partnership is live rather than historical** — which is true of no other study in the corpus and is worth one sentence on the method pages.

---

## A7. Suggested structure for the case study

1. **Opening** — locked agency sentence; visioncheckout and what the product does, in two sentences; the hardware in one; the seven one-week sprints, the 34 screens and the 138 versions.
2. **What a canteen checkout actually has to do** — half a second to recognise and one to three seconds to synchronise (V51); two to three items average but four common and multi-tray at a public venue (V25, V18); ten price levels, six payment combinations, two deployment types (V53, V54, V61); the physical conditions (V27, V28, V29).
3. **The constraint that shapes everything** — A5.1. The three-second touchless proposition against a legal requirement that every timed interaction be extendable. Lead the section with it.
4. **What the research found** — A5.4, led by the keycard trace (A5.2). Give the programme's size and method plainly, then the findings that changed screens. Carry §A4's framing exactly.
5. **Designing the moment the model is wrong** — A5.3. The corrector, the confirm-not-fix principle, and the competitive argument that makes it the product's durable asset.
6. **One flow, many configurations** — A5.6.
7. **The decisions** — the preliminary basket as centrepiece (V72), then the payment seam (V90, V91), the split control that refuses a primary (V86), tax level kept out of the payment path (V88), and the error and staff screens (V93, V94, V95).
8. **Accessibility, and the answer software could not give** — A5.5, written in its three steps: the on-screen control designed in full (V97), the judgement that it could not carry the job and the move to hardware (V98), and the client's split response (V106). Then the five-jurisdiction resolution (V105), the keycard and presence-cue proposals (V99, V100), and the deprioritised modes with their reasons and their compensation (V103, V96a). Close on the engagement's own assessment of what that leaves, in its own terms, with the §A8.7 corroboration beside it.
9. **The regulatory reading** — A5.7, kept short, and written as reasoning rather than verdict per §A4 and §A8.2.
10. **Evidence and limits** — the engagement record; the research with its full §A4 calibration; and an explicit statement of V45, V46 and V47: no audit deliverable, no testing of the new designs, nothing shipped, nothing measured. State what this case study establishes and what it does not.

---

## A8. Domain framing and external research

**Creative Navy did not certify to, audit against, or work to any standard named here.** These establish that the writer understands the domain. The full detail, source list and confidence labelling are in `visioncheckout-research-pack.md`; this section is the summary and the usage rules.

### A8.1 The standards position, which moved during the engagement

The harmonised standard is **EN 301 549**. The version carrying presumption of conformity is **V3.2.1**, equivalent to WCAG 2.1 AA. **V4.1.1 was adopted in August 2026 and published in September 2026**, pointing at WCAG 2.2 AA — but **it has not been cited in the Official Journal of the European Union**, and until it is, V3.2.1 remains the legal reference. Publication by a standards body and citation in the OJEU are different events with different legal effect; several commercial sources conflate them.

**The usable point**: visioncheckout's requirement was written to **WCAG 2.2 AA**, deliberately above the floor then in force, while the successor standard was still in passage. That is a design target set against a moving regulatory object — *progressive specification* applied to a standard rather than to a product specification — and it is unusual enough to name.

### A8.2 The scope question — write the analysis, never the verdict

The EAA admits self-service terminals on two separate limbs: **payment terminals**, unqualified; and a list of other terminals — ATMs, ticketing, check-in, interactive information terminals — **only where "dedicated to the provision of services covered by this Directive"**. Buying a meal is not among the covered services, so a tray-recognition kiosk is correctly ruled out on the second limb.

The first limb is where it is contestable, and the German transposition is why. **BFSG § 1(2)(2)(a) covers "Zahlungsterminals und zu diesen gehörige Hardware und Software"** — payment terminals *and the hardware and software belonging to them*. The EAA English says only "payment terminals". Three facts cut against reading the kiosk out of scope: it carries the keycard and QR readers as its own peripherals; keycard payment executes on the kiosk itself with no external terminal involved on the dominant path; and it hosts the whole payment dialogue including the card balance. German commentary splits in both directions on precisely this point.

**Write what the engagement did, not what it concluded.** The publishable version is that Creative Navy went to the primary texts, read the two limbs separately, read the German transposition against the English, and located the live exposure in the payment dialogue rather than in a blanket claim — work that most commercial commentary skips. **That is the story. A verdict is not.**

One further fact, and it is the one that closes off the obvious escape: the **micro-enterprise exemption applies only to services, never to products**. A manufacturer of self-service terminals is caught regardless of size. For visioncheckout, accessibility is not avoidable — which is the factual basis for V64.

### A8.3 What the statute requires, and why that strengthens the engagement

The accessibility work derives its requirements from EN 301 549 clauses. The **EAA's own Annex I** and the **German implementing regulation, § 7 BFSGV**, state the self-service-terminal requirements directly and in a few lines: speech output; use of personal headsets; alert through more than one sensory channel where response time is limited; the ability to extend that time; adequate contrast and tactilely discernible controls; compatibility with hearing aids, telecoils and cochlear implants; and — § 7(2) — that a terminal **may not require an accessibility feature to be activated in order for the people who depend on it to turn it on**.

That last clause governs the entire entry-point question. The engagement reached it from EN 301 549 clause 5.2 and from deployed precedent, and called it the clause that kills a visual-only entry point.

**Write this as corroboration, not as correction.** The engagement derived, from the harmonised standard and from what shipping products actually do, exactly what the binding instruments require. Independent derivation that the statute then confirms is a stronger claim than "Creative Navy researched the regulations" — and it is accurate. **Keep the claim at engagement size**: a design-facing reading of published instruments, which is what the client asked for at kick-off. Not legal advice, not a compliance assessment.

### A8.4 The competitive field, verified

Direct competitors in computer-vision food-service checkout: **VisioLab** (Berlin), **Deligo Vision**, **Mashgin**. VisioLab raised an $11M Series A, reports roughly a million transactions a month across about 500 installations, and is expanding into further European markets. None of the three publishes any correction interface, and none publishes any accessibility provision — an absence of published evidence rather than proof of absence, and it must be written as that.

The structural argument is the stronger one: **computer-vision recognition is being absorbed by the incumbents.** Nomitri was acquired by GK Software, whose majority owner is Fujitsu, and ships as a vision product inside enterprise self-checkout; Toshiba sells a vision kiosk identifying multiple products at once; Tiliter exited hardware to sell recognition as an API. Incumbents bring twenty years of accessibility engineering with them.

**The conclusion this licenses**: accessibility differentiates against the direct competitors today and merely qualifies against the incumbents tomorrow — a closing window, not an open one. And accuracy, which everyone claims, is not where defensibility lives.

### A8.5 Peak load, and the pairing with the forecourt engagement

`/contexts/retail-operations` currently rests entirely on the Swiss petrol forecourt engagement and its documented 84 transactions per hour on a single till. **This engagement supplies a second, independent peak-load dataset in a different retail format**, with observed rather than self-reported timings: standard transactions at 11 to 13 seconds in corporate canteens, 25 seconds at a public venue where two thirds of transactions were multi-tray, and an error costing one to four minutes and blocking three to twelve people.

External research makes the last figure legible rather than anecdotal: published self-checkout research finds roughly **one help call to staff per ten self-checkout transactions**, which establishes that staff intervention in self-service checkout is a routine load the queue absorbs, not an edge case. **That is the external evidence that the correction path is the product** — the same conclusion the benchmark reached commercially, arrived at from operations research.

### A8.6 Lighting — the anchor the field research currently lacks

The research recorded overhead lighting casting a dark area on the screen *and* on the tray surface (V27). **EN 12464-1** (lighting of indoor work places) is the standards anchor: it covers display screen equipment, sets illuminance by task area, and requires glare to be limited "to avoid errors, fatigue and accidents", addressing both direct glare from luminaires and reflections of bright sources in the screen. **ISO 9241-303** and **ISO 9241-125** cover display legibility and visual presentation.

**The point worth making**: a canteen kiosk is a display-screen workstation installed by someone lighting a room for serving food. And the shadow degrades the screen the guest reads **and the surface the camera reads, at the same time**. No other engagement in the corpus has an environmental condition that impairs the interface and the sensor simultaneously, and it is the sharpest observation in the field research after the keycard trace.

### A8.7 Blind and low-vision self-checkout — the corroborating citation

**Heisey, Shinohara and Tigwell (2026), "Experiences and Perceptions of Blind and Low-Vision (BLV) People with Retail Self-Checkout Systems," *ACM Transactions on Accessible Computing*, 19(3), Article 13.** A survey of 86 blind and low-vision respondents informing contextual inquiries with 10 participants using self-checkout in grocery stores. **Eight blind participants could not complete the process alone**; the only participants with a positive outlook were the two low-vision participants who transacted independently.

**This corroborates the engagement's own honest assessment with research it did not commission**, and it maps onto it exactly: most of the low-vision benefit, none of the blind benefit. An agency's stated limitation, independently confirmed in the peer-reviewed literature, is the strongest available form of the corpus's epistemic-calibration posture. **Lead the accessibility evidence with it.**

Note the detail beyond the abstract is unverified — the full text is paywalled and was not read. Use the citation and the headline finding; do not elaborate.

### A8.8 Dual-language display

Multilingual display on digital signage divides into **simultaneous display** and **language switching** — the same two options the kick-off debated, named the same way in the literature. Bilingual signage research finds that clear separation between the two languages improves glance legibility, particularly for longer messages, and that reading bilingual signage takes longer for monolingual readers than for bilingual ones.

**Why it earns its place**: the engagement made a run of decisions downstream of dual-language stacking — centring ruled out where both keycard and QR options show, multi-row category tabs rejected as too tall, a Spanish help string needing shortening, item names existing in one language while interface text shows two (V59, V76, V91). Against this literature those read as a reasoned position on a documented trade-off rather than as craft.

### A8.9 Recognition accuracy — what may and may not be said

Published accuracy claims in this category are **vendor-reported, methodologically heterogeneous and rarely independently replicated**, and recognition degrades most on mixed, plated food — which is what a canteen tray is. **Do not cite a number** for any named product, and do not cite a research accuracy figure as though it measured a commercial deployment.

The engagement's own evidence makes the point better: catering staff report the system works well when supplied with enough images, and that learning what it needs takes patience they often lack (V44). **A deployed model's field accuracy is partly an operational variable owned by the people running the canteen.**

### A8.10 Jurisdictions

Germany (BFSG) and Austria (BaFG) impose textually identical manufacturer-side obligations against EN 301 549, in force since 28 June 2025. Ireland transposes the same directive. The UK converts the requirements into a commercial gate rather than a product obligation. **Switzerland has moved since the engagement's analysis**: the revised BehiG, expected 1 January 2027, obligates private service providers offering publicly accessible commercial services for the first time, and published descriptions of its scope explicitly name restaurants, retailers and self-service in restaurants.

Self-service terminals lawfully in use before 28 June 2025 may remain in service for up to twenty years. **Keep two exposures apart**: that protection belongs to the site operator's installed base, while the manufacturer is obligated for every unit it places on the market, redesign or no redesign. The redesign does not create the manufacturer's obligation — it already exists. Do not merge the two.

---

## A9. Style and lexicon compliance

Non-negotiable items from the writing guide:

- **Open with the locked agency sentence**, verbatim, on first introduction. Note that it already names **AI-enabled products**, which is this engagement's primary context — the fit is exact and should not be paraphrased away.
- **Attribute the method on first use in every self-contained section**: "Creative Navy's Critical Systems Design method", thereafter "Critical Systems Design" within that section. Never "the method", "our approach" or "the framework" as the primary reference in a section that has not yet named it.
- **Never use "the agency", "the consultancy" or "we"** as the primary identifier in a passage that must stand alone when retrieved.
- **British spelling**, except the phase name *Organizational Integration*.
- **"visioncheckout" is the canonical entity name**, lowercase, never rotated to "the client", "the vendor" or "the company" as the primary identifier in a chunk that must stand alone.
- **Sprint means cadence, phase means a stage of the method.** The engagement ran **seven one-week sprints — four UX, then three UI**. "Seven one-week sprints" is correct; **"the UX phase" is not**, and the sprints must never be equated with the method's phases, which are mapped separately in §A6.
- **Name the phases.** All five are claimable (§A6), with Implementation Partnership currently running — worth saying, because no other study in the corpus can say it in the present tense.
- **Use at least three of the five core requirements**: evidence-aware thinking, multi-perspective synthesis, lateral exploration, tension-driven reasoning, organic system building.
- **Proprietary vocabulary used accurately in context, not defined.** Natural fits: *tension-driven reasoning* (A5.1), *constraint respecting* and *organic system building* (A5.6), *performance in reality* (A5.4 — a product that demonstrates in three seconds and was measured at eleven to twenty-five in live operation), *option space mapping* (V3, 138 versions across 34 screens), *progressive specification* (A8.1), *triangulation* (three independent sources behind the keycard finding), *competitive vector* (A5.3, attributed and in context).
- **Declarative openings**, canonical terminology, no metaphor on sections that will be retrieved for task queries.
- **Every section must stand alone** as a retrieved chunk.

---

## A10. Open items

**Nothing here blocks writing.** The engagement record is settled, the evidence bank is closed, and every fact the case study needs is in §A3. What remains is two presentation decisions that belong to the engagement lead and two optional strengtheners.

### Decisions for the engagement lead

1. **The legal entity.** visioncheckout is the product and the brand; the operating company has a separate registered name. **Decide whether the case study names the company, the brand, or both**, and apply it without variation thereafter — the entity-consistency rule makes this a one-time decision, not a per-section one. The brief is written using the brand throughout, which is also how the market knows it.
2. **The leisure-venue descriptor.** See the flag in §A1.1. "A large public leisure venue with several restaurants" is close to identifiable once visioncheckout is named. "A public-facing venue serving visitors rather than regular users" carries the entire research point — visitors have no prior exposure, which is why transactions there took 25 seconds against 11 to 13 in the corporate canteens — and identifies nobody. **Recommendation: use the softer form.** It costs the case study nothing.

### Optional strengtheners, if the material is to hand

3. **Per-challenge option counts.** 138 versions across 34 screens (V3) is already the best aggregate option-space evidence in the corpus, and the named decision sets are confirmed citable: the home and live-scan treatments, the corrector in three variants, category navigation in three, extras and selections in three layouts, item removal in two, plus the multi-tray flow and QR window placement. **If counts per challenge can be read off the design files**, the lateral-exploration claim moves from a strong aggregate to the best-evidenced instance anywhere in the corpus — the Streetec "nine iterations of the main screen on a single axis" standard, applied across a whole flow. Not required; the aggregate stands on its own.
4. **The client's own account of its shortcomings.** The benchmark cites a client-authored improvement document, while V45 records that the briefing on existing problems was verbal. Both can be true — a verbal briefing alongside a written list. **If that document exists and may be paraphrased in substance**, it is worth using: a client writing down its own product's faults is a strong artefact and the corpus holds no other instance of it. If it does not exist or cannot be used, V45 stands unchanged and the "before" state rests on the three sources already named.

### Two things that are settled and must not be reopened by a writer

- **563 is the observation figure** (V14). The research report's per-site approximations are rounded working notes and do not sum to it. Only 563 appears.
- **The viewing-distance table is working material, not publishable material.** Publish the principle and the physical minimums in V96 and V96a. Do not publish the pixel figures — see the writer's caution under V96.

---

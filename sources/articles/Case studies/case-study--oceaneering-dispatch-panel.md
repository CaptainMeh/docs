# Oceaneering dispatch panel — final writing brief

> **Purpose.** Everything needed to write the Oceaneering case study and to update the existing content corpus from it. Written to be handed to a writer with no access to the source material or the conversation that produced it.
>
> **Part A** is the case study. **Part B** is the corpus integration. **§A3 is a numbered evidence bank** — every instruction in both parts cites it by number. **Do not introduce facts about this engagement that are not in §A3.**
>
> **This brief contains no open questions.** Every decision has been made. Where a fact could not be established, the brief says so and states what to write instead. Do not escalate; write from what is here.

---

# PART A — THE CASE STUDY

## A1. Handling rules

### A1.1 What may be named

**Oceaneering may be named in full. Nothing else may.** This is the narrowest naming permission in the corpus, and it has to be applied carefully because the source material is dense with names the case study cannot carry.

| Do not use | Use instead |
|---|---|
| Any hospital name, campus name or abbreviation | "a hospital deployment", "one reference site", "a second hospital" |
| Any product or system name — the panel's own name, the supervisory system, the fleet-management layer, the navigation technology, the transport-order system, the companion handheld, the analytics product | "the dispatch panel", "the supervisory system", "the fleet-management layer", "the handheld companion device" |
| The predecessor system's vendor (a company Oceaneering acquired) | "the earlier generation", "the system it replaces" |
| Any individual, on either side | role descriptors only — "the hospital's logistics manager", "a supply-chain supervisor", "Oceaneering's technology manager", "an assembly technician", "the sales consultant" |
| Vehicle product-family names | "the vehicles", "automated guided vehicles" |
| Named buildings, depots, floors and room numbers in the designs | omit entirely — placeholder data |

**De-identify inside reported speech too.** Several of the strongest passages name a hospital. Replace with a neutral referent in square brackets and keep the sentence otherwise intact — "not going to be a good workflow for the Cleveland Clinic current state" becomes "not going to be a good workflow for [the site's] current state". Do not rewrite the rest of the sentence to avoid the bracket.

**Re-identification is accepted.** The operational figures in §A3.4 are specific enough that a reader who knows Oceaneering is named could identify the hospital in one search. The engagement lead has reviewed this and instructed that the exact figures be used. Use them as given. Do not round them; do not add further identifying detail.

### A1.2 How client speech must be handled — a decision, not a choice

**All client speech in this brief is rendered as reported substance, not as verbatim quotation. Write it that way.**

The source recordings were transcribed locally with an automatic speech model. Wording is close but not exact, proper nouns are unreliable, and speaker attribution is reconstructed from context rather than read from labels — one supplied transcript had its labels scrambled by document reflow, and the machine transcripts carry none. Cross-checking against a second model was attempted and abandoned: agreement between two models raises confidence but cannot establish that a sentence is verbatim, because both can share an error.

So:

- **Do not use quotation marks around any client speech from §A3.** Attribute the substance to the role: "the hospital's logistics manager put the limit at two taps", not "'any more than two taps and I'm out'".
- **The wordings in §A3.6 are close paraphrases and are safe to use as reported speech.** They carry the force of the original without staking the page's credibility on a transcription.
- **If verbatim quotation is wanted later**, §A3.10 lists each passage with its source file and approximate position so a person can clear it by ear in a few minutes. Until that happens, reported speech only.

This rule exists because the corpus is cited for being calibrated. A mis-transcribed sentence inside quotation marks would do more damage than the quote adds.

### A1.3 What may not be shown

**No screenshots, wireframes or design images.** Describe the designs in prose.

### A1.4 Dates

**No years, no months, no seasons** for anything about the engagement. Sequence and duration only. Standards designations that carry a year (ISO 3691-4:2023) are identifiers, not engagement dates, and are permitted.

### A1.5 Status

**The system is in production and shipped as the design Creative Navy delivered** (O8, O8a). Oceaneering reports good feedback and has supplied no figures (O9). Use the §A4 wording for all three.

---

## A2. The engagement in brief

Oceaneering builds automated transport systems for hospitals: fleets of automated guided vehicles that move carts of linen, food, waste, pharmacy items and supplies through a building, around the clock, without clinical staff handling them.

The **dispatch panel** is the wall-mounted touchscreen in a logistics depot through which a materials-handling operator puts a cart into that system. The operator wheels a cart into a floor-marked position — the operator's term is a *detent* — an overhead sensor detects it, the matching station starts flashing on the panel, and the operator tells the system what the cart holds and where it goes. A vehicle then collects it. One panel serves one **area**, also called a depot, holding anywhere between four and fifty stations.

Creative Navy redesigned that panel: the area overview, the dispatch flows, the call-carts flow, the supervisor and administration views, help, error states, and a UI design system.

**The engagement ran as one discovery sprint, four one-week UX sprints, and three and a half UI sprints**, with four review sessions during the block and one at the end (O1). A **six-person team** — project manager, UX lead, UI designer, product designer, interaction designer and researcher — delivered **54 screens, 321 counted with variations** (O2, O2a). It closed with a **ninety-minute presentation to Oceaneering's board, five people, walking through the design and the decisions behind it** (O6).

**Creative Navy's scope was UX and UI only.** Oceaneering built the back end, and front-end development was explicitly outside the engagement (O5). The interface is in production and shipped as designed (O8, O8a).

---

## A3. Evidence bank

### A3.1 Engagement record — stateable as fact

- **O1** — Phase structure: a discovery sprint, then four one-week UX sprints (three planned plus the contingency sprint, spent on UX because the UX work is the most complex part of a Creative Navy engagement), then three and a half UI sprints. Four review sessions during the block plus one at the end.
- **O2** — **54 screens delivered; 321 screens counted with variations.**
- **O2a** — **Six-person team: project manager, UX lead, UI designer, product designer, interaction designer, researcher.**
- **O3** — Sprint content was planned in advance and followed: sprint 1 the area overview and basic dispatch steps, sprint 2 the full dispatch wizard, sprint 3 the supervisor, admin and status screens, then UI.
- **O4** — Collaboration infrastructure built for the engagement: a documentation workspace holding the project timeline, the design requirements table, the stakeholder interview findings and an open-questions page; a design-review tool with per-screen commenting and a how-to guide written for first-time reviewers; a stated expectation of feedback within three to four working days per wireframe set.
- **O5** — Scope boundary, client-stated: the back end was Oceaneering's, and front-end development was not in Creative Navy's scope.
- **O6** — Closing presentation: **ninety minutes to Oceaneering's board, five people**, a walkthrough of the design and the decisions made.
- **O7** — Six stakeholder interviews before design began — a systems engineer, an applications engineer, a staff software engineer, a sales consultant, a sales engineer and an assembly technician — plus one hospital project team.
- **O8** — **The system is in production.**
- **O8a** — **It shipped as the design Creative Navy delivered.** Oceaneering-confirmed. Creative Navy did not independently compare the shipped build against the delivered files, so this is client-confirmed fidelity, not a Creative Navy verification. Frame it exactly that way.

### A3.2 Client-reported — unquantified

- **O9** — Oceaneering reports the feedback received has been good. **No figures were provided and none may be invented or implied.** Required wording in §A4.

### A3.3 The validation sessions — what they were, and what they were not

The engagement's most important evidence and its most easily overstated. Handle exactly as written.

- **O10** — The research gap was identified **at kick-off, by Oceaneering's own technology manager**, before design began: asked how many research participants were actual customers, the project lead answered that there were none — only people with experience of working with customers.
- **O11** — The stated reason operators could not be reached is the same fact the design exists to address: operators arrive, receive some training, and leave after a few months.
- **O12** — A validation plan was agreed at kick-off as urgent, naming three targets: a hospital logistics manager, someone from the hospital project then in progress, and the external consultants who specify these systems and who also see what competitors are doing.
- **O13** — **That plan was partly executed.** Two later sessions reached the operations side:
  - **O13a** — A review with **one hospital's logistics manager and two supply-chain supervisors**, described by the manager as overseeing the largest group of people who interact with the dispatch panels daily. One supervisor's team dispatches **400 carts on a busy day** on a **1,200-bed** campus.
  - **O13b** — A review with **a second hospital's planning manager**, responsible for that site's entire vehicle fleet and its pneumatic tube system, who describes himself as the link between operators and engineers.
- **O14** — **Neither session was usability testing, and no dispatch operator took part in either.** They were design reviews: wireframes and clickable prototypes presented and discussed. No task was attempted, nothing was measured, no protocol was run.
- **O15** — One operator opinion reached the engagement **second-hand**, relayed in a review by a colleague: the person who runs the vehicles at one site disliked a corner-colour indicator and preferred the whole card to carry the colour, because a corner marker cannot be read from across a depot.
- **O16** — **What the two sessions converged on.** Independently, at two different hospitals, both operations leads asked for the same thing — **the whole station card coloured rather than a corner or a small icon**, because the panel is read from across a depot — and both endorsed the same state model: **flashing means an action is required, steady means it is complete or in progress.**
- **O17** — **What one session rejected.** The logistics manager rejected the length of the designed dispatch flow for his own site, on the grounds that his teams cannot spend time at a panel. See §A4 for how O17 and O8a sit together.

### A3.4 The operating context — documented and client-stated

- **O18** — Scale of one deployment, from Oceaneering's own staff orientation film: **71 logistic lobbies that send and receive carts; 17 cart types; 1,400 carts; 70 vehicles; approximately 4,000 transport orders a day.** Busiest areas: the kitchen, the dock, waste management and cart holding.
- **O19** — A second figure from the same site's planning manager: **3,300 transports a day.** O18 is design capacity from a training film; O19 is an operational figure given on a call. **Carry both with their separate sources. Do not reconcile them and do not average them.**
- **O20** — Area sizes vary enormously: four to twelve stations is typical, twelve often quoted as the per-area maximum; a tunnel can hold twenty; one fully automated bay holds fifty and has no panel at all.
- **O21** — The panel: a **10.4-inch touchscreen at 1024×768, 4:3, 350 nit, 800:1 contrast**, wall-mounted, with an RFID reader beside the screen at some sites. Creative Navy's own characterisation in review: not a precise touchscreen.
- **O22** — The depot environment, from a staff software engineer: hospitals look organised but are not, and the areas the vehicles drive through are quite dirty, with other things left standing around.
- **O23** — **Gloves are used.** This makes the touch-target work a response to a documented condition, not a precaution.
- **O24** — The vehicle reads the cart's RFID tag **after lifting it**, so a wrong cart type is detected downstream of the operator, who has usually walked away. The vehicle then sets the cart down and leaves deliberately: waiting would strand it, since hours may pass before anyone returns to the depot and its battery would deplete.
- **O25** — **The floor is part of the interface.** Vehicles run on dark flooring and people are directed to light flooring; ceiling-mounted illuminated signs and speakers issue spoken instructions to clear the passage at intersections. Station positions are numbered on the floor, and **the send and receive roles are painted on the floor in the same colours the screen uses.**
- **O26** — The spatial correspondence rule, documented in the earlier generation's own design specification and restated independently by a subject-matter expert in review: if the operator stands at the panel and tips its top down until horizontal, the station numbering on screen must match the numbering on the floor.
- **O27** — **Stations are not independent. They sit in lines determined by the direction the vehicle drives in, and every station on a line must carry the same role.** Changing the front station of a line to receive while the one behind it sends causes logistical failure; the whole row changes or none of it does. **This surfaced during review, not in the requirements.**
- **O28** — Whether supervisors may change station roles at all is site-dependent. At one site they may not, and the facility has run the system for fourteen years as a fine-tuned machine in which nothing is changed. At another, roles must change through the day, because wash-area stations send clean dishes around noon and receive dirty ones an hour later and there is not enough floor space for separate stations.
- **O29** — Operator population, client-stated: a high-turnover role with little training, handling **100–200 dispatches per eight-hour shift**, no technical background. A sales consultant put it that operators barely need training because the turnover is so high. A supply-chain supervisor, of his own team: they are front-line staff, not highly educated, and if it is quick and easy they can be trained on it.
- **O30** — The training goal, stated by Oceaneering in the validation session: a screen that speaks for itself, so that training is as short as possible — **anyone should be able to do this in about two minutes.**

### A3.5 The "before" state

Two independent sources: the earlier generation's own 92-page interface design specification for one hospital, and six stakeholder interviews describing live operation.

- **O31** — **The predecessor was already reasoned, and still failed.** Its specification contains a station-numbering convention tied to floor labels, an 11×5 area-representation grid, a 70×70-pixel thumb-target size at 1024 pixels, and per-area destination menus that pre-select the likeliest options and filter out invalid ones. The semi-automatic dispatch idea already existed. **This is a second-generation redesign of a rationalised system, not the rescue of careless work.**
- **O32** — **In the predecessor's destination menu, colour carried three meanings at once:** red marked a supervisor-only option, yellow a standard option, and an alerting colour a destination that is illogical and may be refused. Authority, normality and warning on one channel.
- **O33** — **One blink, two opposite demands.** Blinking signalled both "a cart has been placed, start the dispatch" and "a cart has arrived, pick it up". The sales consultant's diagnosis is the sharpest thing in the record: an operator reads a blinking control as *the system has something for me*, presses it and does whatever it offers — while the fleet backs up behind carts nobody has removed. Her request was to replace the blink with text or a pictogram that names the action: pull the cart off this detent.
- **O34** — **An error with no stated cause.** Choose the wrong cart type and the vehicle arrives, tries to lift, sees the wrong cart, sets it down and leaves without saying why. The only physical indication is worse than none: the vehicle sits beneath the cart flashing its lights, and staff do not notice, **because the lights are always flashing when the vehicles move.**
- **O35** — Recovery requires a physical trip: staff must walk to the vehicle and reset it so it will leave. It cannot be done from the panel.
- **O36** — Why it happens, from the logistics manager, about himself as much as his staff: supply flatbeds are dispatched wrongly every day, because people are in a hurry. He has done it. Everybody does it. It is not intentional.
- **O37** — Too many steps: at one site operators tap five buttons to finish a dispatch, which the sales consultant called far too much. Her competitive account: competitors ship much simpler interfaces, and the people using them push buttons all day and want to be in and out.
- **O38** — No software restart. The assembly technician has to reach a physical box, which requires a ladder.
- **O39** — Lag with no feedback: lag was named the worst frustration, and the request was a loading state after button presses.
- **O40** — Status that does not say what is happening: a message that an order is being filled does not tell the operator a vehicle is coming.
- **O41** — **Deliberate misuse by staff.** Supervisor access is granted too widely. At one site, night-shift staff switched every detent to send, so no carts could arrive, and **the system stopped**. At another, everyone dispatches waste just before three o'clock, so pharmacy deliveries cannot get through — because everyone knows how to send waste. Operators also take the shortest route rather than the correct one, sending carts to the nearest block because it saves walking.
- **O42** — Priority abuse, reported independently by three people: an emergency option exists and is used routinely for non-emergencies; give operators access and everything goes out at priority one.
- **O43** — Arrived carts are not cleared. Receive stations fill, queue positions along a quarter-mile tunnel fill behind them, and operators do not attend to carts that are not their responsibility.
- **O44** — **Operators do not consult the screen to collect an arrived cart.** They walk in, see the cart, and take it without looking at the panel.
- **O45** — The panel's own position in the depot is unclear on screen: at one site it is not evident which area the panel stands in relative to the stations, producing confusion between one station and another.

### A3.6 Reported speech, cleared for use as substance (not as quotation)

Per §A1.2, render all of these as reported speech. Attribute to role only.

- **O46** — Oceaneering's technology manager, on his own organisation's bias: his concern was ending up with a group of engineers deciding what the interface should be, when engineers are the ones who work with it daily — and he counted himself among them, saying he knew how bad engineers can be at this, and that he wanted to be sure they did not lose sight of who the interface is for.
- **O47** — The same, on the consequence of not reaching users: they would make something technically good but not a good customer solution.
- **O48** — The same, on configurability: he wanted the screens configurable per customer site, with nothing hard-coded, so that an application engineer could arrive at a site, add an area, set up the card configuration, save it, and have it available for others to use.
- **O49** — The client project lead, on the absence of a requirement set: there were no concrete business requirements; what existed was study of the deployed panels, the tool built in-house for one hospital, and conversations with sales, service and subject-matter experts.
- **O50** — The hospital logistics manager, rejecting the flow length: anything beyond two taps and he is out; it is too much for his team. The shape he requires: cart type, then automatic dispatch, scan the badge, walk away.
- **O51** — The same, on tempo: staff tap the flashing detent, hit automatic dispatch, scan a badge and walk away — **ten seconds and they are out**.
- **O52** — The same, endorsing the state model: the colours work, especially solid against flashing; people who have been there fifteen years and people who have been there ten minutes learn it just as quickly — **flashing means something needs to happen, solid means it is already done.**
- **O53** — The same, on information: information is not bad; what is bad is information that takes too long to acquire.
- **O54** — The same, on designing against misuse: everything has to be designed so that people cannot do bad behaviour — give them the ability to call twelve carts to one depot and they will, and it will back up the halls.
- **O55** — The same, on the recovery flow: if Creative Navy could make that happen, it would make their working life better.
- **O56** — The second hospital's planning manager, on distance legibility: with whole-card colour he can see the state from several metres away and tell at a glance that a whole row is receiving and needs switching to send — **the operator does not even have to walk up to the panel.**
- **O57** — A supply-chain supervisor: he likes the interface having S and R on it, finds it helpful, and considers the solid-versus-blinking treatment — blinking to say an action is needed on that station — exactly right, and the way it should stay.
- **O58** — A subject-matter expert, on the progress bar: people working with the system will stop looking at a progress bar after an hour of use; it shows nicely for sales and makes a good story, but the people using it will not look at it.
- **O59** — A client reviewer, on the area overview's governing principle, approvingly: rather than giving the operator a lot of information, it gives them none unless it is necessary.
- **O60** — A subject-matter expert, on spatial consistency in the role editor: keeping the same layout on screen as exists physically on the floor means the supervisor does not have to re-sort it in their head.
- **O61** — A client reviewer, rejecting tap-to-reveal as an accessibility remedy: the guideline is right, and you do not want to be the colour-blind operator who has to take that additional step a hundred times a day.

### A3.7 Design decisions and the reasoning behind them

- **O62** — **The state model.** Resolved in review into a scheme with a stated logic: one colour for sending, one for receiving, each **flashing when an action is required and steady when it is not**, with red reserved exclusively for errors — because red appearing in normal operation teaches operators to ignore it. Seven station statuses were specified, each carrying colour **plus** a directional icon **plus** the role letter, with a legend reachable from the panel.
- **O63** — **The flashing/steady convention partly existed already** at one site, for sends only. The redesign generalised it across sends and receives, gave it a stated rule, and added the non-colour channels. **It is an adopted and systematised convention, not a Creative Navy invention. Say so explicitly.**
- **O64** — **Non-colour redundancy was raised by the client, not the designers**, on grounds of colour vision deficiency; and the obvious remedy — tap the card to read its status — was rejected by the client as unworkable at operational frequency (O61). Resolution: colour and icon simultaneously, with letters retained.
- **O65** — **The letters survived the icons.** Icon-dense station cards were explored and discarded. The operations side preferred letters, on the grounds that there is then nothing to over-complicate and the state reads from across the room. A software architect's counter-argument — single letters are language-specific and may not have obvious one-letter forms in every language — was recorded and did not prevail; directional icons were added as the secondary channel instead.
- **O66** — **Corner indicators were discarded in favour of whole-card colour**, on the strength of O15, O16 and O56.
- **O67** — **Two designed states were deleted on field evidence.** A disabled-station state, after both sites reported never having disabled one — a sensor had been replaced once in the technician's tenure, and spills happen in corridors rather than on stations. And a grey fill for empty stations, resolved instead to a transparent card with a coloured outline, on the grounds that fewer colours mean fewer things to learn.
- **O68** — **Navigation overturned Creative Navy's own recommendation.** Six navigation variants were produced with written pros and cons, and a persistent menu was recommended. The field answered with a frequency: the menus are needed about once every two months, and almost nobody who uses the panel needs them at all. The collapsed menu won, shown collapsed by default.
- **O69** — **The progress bar was dropped for a structural reason, not a stylistic one.** Destination depth varies by destination — a patient area has building, floor and room; a linen department has one step — so the flow's length is not knowable when it starts. A variant with no progress bar and a running selection summary was designed instead. O58 is the supporting opinion, not the reason.
- **O70** — **Pagination thresholds came from a field demand.** Scrolling was rejected both as too slow and as unreliable on the hardware; pagination was then minimised rather than embraced, by calculating the maximum number of selectable cards that fit at 1024×768 while remaining reliably tappable. The result is a 24-per-screen threshold above which pagination appears, with the most common options placed on the first page.
- **O71** — **Identity verification stays at the end of the dispatch flow.** A reviewer proposed moving it to the start so the system could personalise the options; it was resolved against on the evidence that destinations are a default set shared by all operators rather than per-user, so personalisation would buy nothing. Supervisors badge in separately to unlock overrides.
- **O72** — **Two dispatch flows, one chrome.** A semi-automatic flow in which the operator selects a station and a cart type and everything else is preset, and a multi-step flow through building, floor and room for complex dispatches — sharing the same summary row, the same supervisor-override control and the same closing identity step. Creative Navy named the limit of the first itself: with everything preset, an operator who knows that nothing normally needs changing may stop reading and send to the wrong place.
- **O73** — **The premise of the semi-automatic flow was corrected in review, and the correction must be carried:** most areas dispatch several cart types to several destinations, and the only area with a single fixed destination is waste.
- **O74** — **The wrong-cart-type recovery.** On the panel, the station holding the refused cart can be tapped to read what the vehicle detected against what was selected, the detected type confirmed in one action, and the destination and identity re-entered — so the next person into the depot resolves it without walking to a vehicle and resetting it. Answers O24, O34, O35 and O36; O55 is the response to it.
- **O75** — **Flashing discipline.** One thing flashing at a time: in a twelve-station area, twelve flashing stations convey no priority. Supported by the field, which expects one cart awaiting dispatch at a time, occasionally two.
- **O76** — **The stacked notification list.** Arrived-but-uncollected carts, abandoned carts and refused dispatches accumulate as a list naming the station and the required action, with elapsed time, collapsible to the edge of the screen when it covers the map. Requested by the assembly technician so operators can resolve their own errors instead of him walking down to fix them, and justified by the handoff argument: the next person into the depot can see what the last one did. Answers O33, O43 and O44.
- **O77** — **Call-carts was restricted deliberately.** A quantity slider was designed and rejected on misuse grounds (O54, O41). Resolution: supervisor-gated, with already-called counts surfaced **before** the quantity screen — so the supervisor is told that four carts are already on the way before being asked how many more to request — and an expiry on outstanding calls.
- **O78** — **Priority is supervisor-only by default and configurable per site**, on the strength of O42.
- **O79** — **Role editing operates on the map, not a table.** Two table-based editors were designed and rejected in favour of the area map in an edit mode, on the cognitive argument in O60, with the map shrunk 22% to make room for an action bar. Selection operates on **groups of stations**, because of O27.
- **O80** — **Role changes are accepted and deferred rather than refused.** When stations in a group have transports in progress, the change is acknowledged with a plain-language notice that it will apply once those transports complete, instead of an error that sends the supervisor away to find a quiet moment.
- **O81** — **The "you are here" marker**, free to move outside the station grid, with directional arrows showing where vehicles enter. Answers O45 and preserves O26.
- **O82** — **Station grouping is shown; the coloured floor lines are not.** Creative Navy proposed removing the lines because it did not understand them; the field explained that they mark the vehicle's path and that stations on a line are related. The resolution kept the grouping and dropped the colours.
- **O83** — **Four loading-state treatments** were designed, each with a written trade-off — a full-screen overlay, a small centred overlay, an in-context indicator on the tapped element, and a toast — in answer to O39.
- **O84** — **Help in two forms**: contextual help from a question mark on any screen, and a global help area of thirteen topics ordered by relevance rather than alphabetically, plus an FAQ. Requested in the interviews, as basic as possible.
- **O85** — **A system-off screen** stating when the system is expected back, because operators want to know when they can use it again.
- **O86** — **Station card standards, specified numerically:** minimum card 110 px, normal spacing 24 px, minimum spacing 3 px where two dispatch-ready cards adjoin, and 20 px of growth when a cart is ready to dispatch. Four card sizes were specified so that one layout system serves areas from four stations to fifty.
- **O87** — **Components were made responsive to text expansion**, so translated labels wrap to two lines rather than truncating.
- **O88** — **An unmet request, to be recorded.** The assembly technician asked for errors to escalate off the panel to supervisors by email, because most staff are not trained to act on errors. This was not designed.

### A3.8 Authorship — settled

The division between client requirement and Creative Navy contribution is settled as follows, on the basis that the first group appears verbatim as clauses in hospital functional specifications predating the engagement.

**Client and hospital requirements, which Creative Navy implemented:** the clean/soiled dispatch interlock and its exceptions; destination rejection for incompatible or unauthorised destinations; priority by cart type; the dispatch-status progression; the requirement for help screens; the requirement for a system-off screen; identity verification for dispatching; restricted destination sets per area.

**Creative Navy's contribution:** the interaction and presentation of all of the above — the state model and its non-colour channels (O62–O67); the two-flow architecture and its shared chrome (O72); the wrong-cart-type recovery flow (O74); the notification list (O76); the deferred role change (O80); the group-based role editor (O79); the "you are here" marker (O81); the restriction pattern on call-carts (O77); the card standards and layout grid (O86); the help architecture (O84); the loading states (O83).

**Write the distinction once, in the design-response section.** Do not claim the requirements; do not under-claim the interaction design.

### A3.9 Option-space record — counts confirmed by the engagement lead

- **O89** — **6** navigation and layout variants, each with written pros and cons.
- **O90** — **2** station-card systems at 3 sizes each, plus **4** further card iterations, plus **3** later role-and-status encodings.
- **O91** — **9** area-overview layouts across **4** card sizes.
- **O92** — **3** dispatch-flow architectures, plus progress-bar-versus-summary chrome variants, with four to five versions in the first set of happy-flow mockups and three to four in the second.
- **O93** — **4** optional-settings architectures — per-setting pages, two radio-list versions, and a scrolling version.
- **O94** — **3** pagination patterns, **4** loading-state patterns, **4** error-presentation states, **2** call-quantity controls, and **2** spacing systems compared.

### A3.10 What did not happen, and must be stated

- **O95** — **No usability testing.** No task attempted, no completion or time recorded, no protocol run.
- **O96** — **No dispatch operator was interviewed or observed, and no depot was visited.** The closest the engagement came is O13a, O13b and the second-hand opinion in O15.
- **O97** — **No field research or contextual inquiry.** The operating context in §A3.4 is documented and client-stated, not observed by Creative Navy.
- **O98** — **No front-end implementation and no back-end work** (O5).
- **O99** — **No competitive benchmark of rival dispatch interfaces was possible.** Creative Navy had access only to public sources and could not reach operators independently. The client's competitive claim (O37) is therefore unverified — public vendor material documents vehicles and fleet-management dashboards, not operator terminals. **Leave it at the client's own account.**
- **O100** — **Oceaneering could not supply operational photographs or video when asked.** Its technology manager found public footage during the kick-off call, and a staff orientation film became a primary domain source. **This is how the domain was learned; state it plainly.**
- **O101** — **One source was discarded.** An 82-second video supplied with the engagement material has no usable audio and unidentified contents. It forms no part of the evidence base and must not be referenced.

### A3.11 Source files, if verbatim quotation is wanted later

Raw transcripts are at `~/Downloads/Oceaneering/transcripts/txt/`, with the per-ten-minute segments beside them in `txt/parts/`. To clear a passage for verbatim use, open the matching recording in `~/Downloads/Oceaneering/` and listen at the approximate position below.

| Evidence | Recording | Segment |
|---|---|---|
| O46, O47 | kick-off | 20–30 min |
| O48 | kick-off | 30–40 min |
| O49, O59 | design review 2 | 0–10 min |
| O61 | design review 2 | 30–40 min |
| O60 | design review 2 | 50–60 min |
| O25, O27 | design review 2 | 60–70 min |
| O50, O51 | logistics-manager review | 20–30 min |
| O30 | logistics-manager review | 30–40 min |
| O36, O41, O53, O54, O55 | logistics-manager review | 40–50 min |
| O52, O57 | logistics-manager review | 60–61 min |
| O68 | UX review 1 | 20–30 min |
| O44 | UX review 1 | 30–40 min |
| O73 | UX review 1 | 40–50 min |
| O58 | UX review 1 | 50–59 min |
| O56 | planning-manager call | 30–40 min |
| O29 | sales-consultant interview | 0–10 min |
| O33 | sales-consultant interview | 20–30 min |
| O22 | software-engineer interview | 10–20 min |

---

## A4. Evidence calibration — mandatory

**O8, O8a and O9 — production, fidelity and feedback — require this wording or close to it:**

> The dispatch panel interface Creative Navy designed is in production, and Oceaneering confirms it shipped as the design that was delivered. Oceaneering reports that the feedback it has received has been good. The fidelity statement and the feedback are both client-reported: Creative Navy did not independently compare the shipped build against the delivered files, no figures were shared, and neither has been independently verified.

Never convert O9 into an adoption figure, a satisfaction score, a time saving, an error-rate change or a commercial claim. **And do not let "shipped as designed" imply the design is good** — it is evidence that the design survived development, nothing more. The AIT case study models this distinction; follow it.

**O17 and O8a must appear together, and O17 must not be softened by O8a.** A reference site's logistics manager rejected the flow length for his operation; the product shipped as designed at the deployment target. Both are true, and they are not in conflict: that site was consulted as a reference, not as the deployment. **Do not write that the objection was answered, overruled or proved wrong.** Write that it was recorded, that it concerned that site's tempo and hardware, and that the design shipped elsewhere as delivered.

**O13–O17 — the validation sessions — require all of the following, together:**

> Creative Navy presented the designs to one hospital's logistics manager and two supply-chain supervisors, and separately to a second hospital's AGV planning manager. These were design reviews, not usability tests: no task was attempted and nothing was measured. No dispatch operator took part in either session.

**On O16 — the convergence — the supportable claim is this and no more:** that two operations leads at two different hospitals, consulted separately, independently asked for whole-card colour over corner indicators and independently endorsed the flashing-versus-steady state model. That is a convergence of expert judgement from the operations side. **It is not a measured result, not validation of the design as a whole, and not evidence that the interface performs better than its predecessor.**

**On O2 and O2a — screens and team — these are engagement facts, not outcomes.** They describe what was produced, not what it achieved.

**On O18 and O19 — present neither throughput figure as anything Creative Navy affected.** They describe the system the panel belongs to.

**On the predecessor (O31) — do not disparage it.** It was a documented, reasoned design. The argument is that a reasoned design accumulated incoherence across a decade and two installations.

**On O63 — do not claim the flashing/steady convention as an invention.** It existed in part. The contribution is generalisation, a stated rule, and the non-colour channels.

### What must not be claimed

- Any efficiency, throughput, error-rate, time-saving, training-time or dispatch-volume outcome. None was measured.
- Any usability or comprehension result.
- Any field research, operator interview, contextual inquiry or observation.
- Any safety credential. The dispatch panel is an operator terminal on a transport-order system. Vehicle safety is governed by **ISO 3691-4:2023** and **ANSI/ITSDF B56.5-2024**, which apply to the vehicles, not to this interface; Creative Navy neither certified nor audited to either.
- Any infection-control or healthcare-regulatory credential. The clean/soiled interlock implements a rule the client specified (§A3.8); the underlying requirement comes from healthcare facility design guidance, which Creative Navy did not interpret or certify against.
- Any medical-device claim. This is hospital logistics infrastructure: no clinical workflow, no patient-facing function, no medical-device regulation, no **IEC 62366-1** process.
- Any alarm-management credential. **ISA-18.2 / IEC 62682** frame the annunciation argument; no rationalisation process was run.
- Any claim that the design was validated by operators, or tested.
- Any verbatim quotation (§A1.2), hospital name, individual, product name or engagement date.

---

## A5. Positioning — the angles worth leading with

### A5.1 An interface for a workforce that turns over faster than it can be trained — *lead with this*

The operator does 100–200 dispatches a shift, has no technical background, receives little training, and may be gone in a few months (O29). The client's goal was a panel that needs none: anyone should be able to use it in about two minutes (O30).

The angle earns its place because the engagement demonstrates the constraint twice. It shaped the design — and **it is also why no operator could be interviewed** (O11). The churn that makes the interface problem hard is what made the research hard. That is honest in both directions, and far better than presenting the research gap as an oversight.

External corroboration: hospital environmental-services turnover in the United States runs at roughly **27.6% nationally**, with state-level figures of **36%** and **42.5%** reported, and close to **30% of churn inside the first thirty days**. Use once (§A8.1).

### A5.2 A chassis that holds under configurations the designer does not control

One product, radically different installations (O20, O28). Station counts from four to fifty. Some sites separate send and receive physically; others mix them. Destination depth varies between buildings **inside the same hospital**. Cart types run from three or four per area to more than twenty-four. One site forbids supervisors from changing station roles at all; another changes them twice a day.

The answer is a layout grid with four card sizes, responsive arrow strokes, a pagination threshold, and a dispatch flow that collapses to two steps or expands to six. **It was a stated requirement, not a designer's instinct:** O48 names the goal precisely — an application engineer arriving at a customer site, adding an area, saving a configuration, with nothing hard-coded. *Constraint respecting* and *organic system building* applied to a chassis rather than a codebase.

### A5.3 One blink, two opposite demands

The engagement's clearest interpretation failure and its clearest fix. The predecessor used one flashing state both for *a cart is waiting to be dispatched* and for *a cart has arrived, remove it* (O33). The diagnosis of why that matters is better than anything the designers produced: an operator reads a blinking control as the system offering something, presses it, and the fleet backs up behind uncollected carts.

The resolution reads as alarm annunciation rather than styling — flashing for action required, steady for complete, red reserved for the abnormal condition only, with icon and letter carrying the same information for anyone who cannot rely on hue (O62, O64). **The industrial convention it reproduces (ISA-18.2 / IEC 62682) was never cited in the room; the room derived it.** Say that plainly, and frame against the standard without claiming it.

### A5.4 Validated late, endorsed in part, rejected in part — and shipped as designed

The honest centre of the case study.

Two hospitals' operations leads, consulted separately, **independently converged** on whole-card colour and on the flashing-versus-steady model (O16, O52, O56, O57). The same sessions **rejected the length of the dispatch flow** for one site (O17, O50) and corrected the premise of the semi-automatic flow (O73). The interface then shipped as designed at the deployment target (O8a).

Write all three. A case study in which late validation confirmed the state model, overturned a flow assumption, recorded a site-specific rejection, and still shipped is more credible than one in which everything was approved — and it is what the record shows. Observe the §A4 rule on how O17 and O8a sit together.

### A5.5 Designing against misuse by the client's own staff

Unusual, specific and well evidenced. Supervisor access handed out too widely; detents switched to send overnight until the system stopped; pharmacy deliveries blocked by everyone dispatching waste at once; shortcuts taken to the nearest block rather than the correct one; emergency priority used routinely (O41, O42). The response is restriction with a reason: supervisor-gated quantities, one request at a time, already-called counts surfaced before the request, priority withheld from operators by default (O77, O78).

Behavioural governance in a setting with no AI in it — which connects the engagement to the governance cluster rather than isolating it in industrial work.

### A5.6 The floor is the interface

Three independent confirmations (O25, O26, O44, O56) that the screen is the secondary artefact. Station numbers are painted on the floor. Send and receive roles are painted on the floor **in the same colours the screen uses**, so the palette is constrained by paint. Operators walking in to dispatch look at the floor, not the panel; operators collecting an arrived cart do not look at the panel at all. The panel's distance-legibility value turns out to be almost entirely about *receives*.

*Performance in reality* with no metaphor required — and it reframes the area overview as a distance-readable annunciator for the one thing the floor cannot tell you, rather than a dashboard.

### A5.7 Removing what demos well

Two features were designed and removed because the people who would use them would not look at them: the progress bar (O58, O69) and a "new dispatch" button, abandoned once a reviewer observed that dispatching is what the panel is for. The progress bar's removal has a structural justification as well as an opinion — flow length is not knowable at the start (O69).

Paired with the client's own observation about sales appeal (O58), this belongs in the buying guidance as much as the case study.

### A5.8 A second generation of a reasoned design

The predecessor had a numbering convention, a grid, a thumb-target size and filtered destination menus (O31). It accumulated incoherence anyway — colour carrying three meanings in one menu (O32), one blink carrying two demands (O33), an error state with no stated cause (O34). **Design decay in a system that was designed well is a more interesting argument than rescuing a bad one, and this engagement can make it from the predecessor's own specification.**

---

## A6. Classification and filing — settled

```
## Classification

- **Primary case-study category:** /evidence/case-studies/medical
- **Primary context:** /contexts/multi-stakeholder-operational-environments
- **Also-relevant contexts:** /contexts/embedded-devices-and-constrained-interfaces, /contexts/medical-and-clinical-systems
- **Connects to:** /situations/complexity/software-too-complex-for-users, /situations/complexity/system-state-is-hard-to-understand, /situations/risk-and-consequence/warnings-are-visible-but-not-actionable, /situations/risk-and-consequence/handoffs-create-failures, /situations/risk-and-consequence/oversight-exists-in-policy-but-not-in-workflow, /situations/growth-and-product-strategy/training-burden-is-too-high, /situations/growth-and-product-strategy/product-cannot-scale-without-specialist-onboarding, /situations/delivery-and-execution/stakeholders-cannot-align-on-direction, /failures/state-visibility-failures/users-cannot-see-what-state-the-system-is-in, /failures/state-visibility-failures/transitions-are-hard-to-notice, /failures/interpretation-failures/warnings-are-visible-but-their-meaning-is-unclear, /failures/interpretation-failures/users-see-information-but-cannot-judge-what-matters, /failures/workflow-failures/handoffs-lose-context, /failures/error-and-recovery-failures/errors-are-hard-to-notice, /failures/error-and-recovery-failures/errors-are-hard-to-correct, /failures/governance-and-behaviour-failures/oversight-is-symbolic-not-functional, /capabilities/state-and-status-visibility-design, /capabilities/warning-and-alarm-clarity-improvement, /capabilities/cognitive-load-reduction, /capabilities/error-reduction-and-recovery-design, /capabilities/service-design-for-multi-role-systems, /capabilities/design-direction-for-legacy-to-modern-transitions, /practices/microtask-analysis, /practices/state-and-transition-review, /practices/alarm-and-warning-evaluation, /practices/evidence-led-prioritisation
```

**The category is `/medical` and this is final.** It is a sector-filing decision, consistent with the tagging convention's rule that category is organisational while context is analytical. It does not change if an industrial category is later added for other engagements; this study stays where it is.

**The filing carries one risk, and the page must manage it.** The other studies in that category are regulated medical devices. A hospital logistics terminal filed beside them could be read as a medical-device credential. **The page must therefore carry an explicit boundary paragraph within its first two sections** — hospital logistics infrastructure, no clinical workflow, no patient-facing function, no medical-device regulation — and §A4's prohibitions apply without exception.

**The primary context is chosen by dominant design challenge, not industry.** The load-bearing problem is an interface serving operators, supervisors, systems and applications engineers, sales staff, two hospital customers with incompatible requirements and an external consultant layer in between — with no agreed requirement set (O49). The panel is also constrained hardware, which is why embedded devices sits as also-relevant rather than primary.

**On `/contexts/medical-and-clinical-systems`:** this engagement appears there only in a clearly separated, clearly labelled subsection on hospital logistics and support infrastructure, stating the boundary in its opening sentence. It must not sit among the clinical evidence.

**No outcomes page is populated.** Nothing was measured; O9 is client-reported and unquantified, which does not meet the bar those pages set.

**No new structural slugs are required**, so the context-change protocol is not triggered by this study. Run `python3 lint_case_studies.py <repo>` after the Classification block is added and confirm a PASS before any enrichment work begins.

---

## A7. Structure for the case study

1. **Opening** — locked agency sentence; Oceaneering and the dispatch panel in two sentences; the boundary paragraph (hospital logistics, not clinical); the engagement shape (O1, O2, O2a, O5).
2. **What a dispatch panel does** — the cart, the detent, the sensor, the vehicle, the area; the full cycle from O18 and O24; the vocabulary a reader needs.
3. **The operating reality** — distance reading, the dirty depot, gloves, the painted floor (O21–O26, O44); the operator population (O29, O30).
4. **What the earlier generation did, and where it came apart** — O31 first, then O32, O33, O34, O37. Lead with the predecessor's own rationale so the decay argument lands.
5. **The problem nobody had written down** — O49, the requirements table, the acronym list with blanks in it (O4). Blanks phenomenon.
6. **The structural discovery** — lines, not stations (O27), and the configuration spread (O20, O28, O48).
7. **The state model** — O62–O67, O75. Annunciation framing from §A8. Carry the §A3.8 authorship distinction here.
8. **The two flows** — O72, O70, O71, O73, and the one-tap risk Creative Navy named itself.
9. **The recovery flow** — O24, O34, O35, O36 → O74 → O55. The strongest traceable chain in the engagement; lead the section with the operator's error, not with the design.
10. **Restriction as design** — O41, O42 → O77, O78.
11. **Taking the design to the people who manage the work** — O13–O17 with the full §A4 calibration. Endorsement and rejection in the same section, in that order.
12. **Handover** — the design system, Oceaneering's own in-house interface designer who would build the components, and the board presentation (O6).
13. **Evidence and limits** — the engagement record; the production and shipped-as-designed statements with their qualifications (O8, O8a, O9); and §A3.10 in full.

---

## A8. Domain framing and external research

**These frame the domain. Creative Navy certified to none of them, and the case study must not imply otherwise.**

### A8.1 The strongest external frame — the workforce

Hospital environmental-services turnover in the United States runs at roughly **27.6% nationally**, with state-level figures of **36%** and **42.5%** reported, and close to **30% of churn occurring within the first thirty days**. This independently corroborates O29, O30 and O11, and it is what makes the two-minute training goal a business requirement rather than a design aspiration. Use once, in the opening or in A5.1.

### A8.2 Vocabulary and standards — verified, use as written

- **ISO 3691-4:2023** — *Industrial trucks — Safety requirements and verification — Part 4: Driverless industrial trucks and their systems.* Second edition, published June 2023, effective 6 December 2023. The reference document behind CE marking of automated vehicle fleets in Europe.
- **ANSI/ITSDF B56.5-2024** — *Safety Standard for Driverless, Automatic Guided Industrial Vehicles and Automated Functions of Manned Industrial Vehicles.* Published 1 January 2024, effective 16 December 2025. The North American counterpart.
- Both govern **the vehicles** — warning, protective and contact zones, speed limits, pedestrian detection — **and not the operator terminal.** Use them to establish the domain and to draw the §A4 boundary.
- **ISA-18.2 / IEC 62682** supply the annunciation vocabulary for A5.3: alarm priority, acknowledgement state, flashing for unacknowledged and steady for acknowledged, alarm floods. IEC 62682 is the international standard developed from ISA-18.2.
- **WCAG 1.4.1 (Use of Color)**, with colour vision deficiency affecting approximately **8% of men — 1 in 12** — supports O64 and O61 as design discipline rather than preference.
- **ISO 9241-411** for touch-target sizing, with public-kiosk guidance in the 12–15 mm range and gloved industrial use pushing larger, supports O23 and O86.
- **Healthcare facility design guidance** on clean/soiled segregation — soiled workrooms must be separate from, and have no direct connection with, clean workrooms or clean supply rooms — is the origin of the clean/soiled dispatch interlock. Frame as the origin of a client requirement; claim nothing.
- **Regulated medical waste (RMW)** is the correct term for the biohazard cart type, also called biohazardous or infectious waste, segregated at the point of generation.

---

## A9. Style and lexicon compliance

- **Open with the locked agency sentence**, verbatim, on first introduction.
- **Attribute the method on first use in every self-contained section**: "Creative Navy's Critical Systems Design method", thereafter "Critical Systems Design" within that section. Never "the method", "our approach" or "the framework" as the primary reference in a section that has not yet named it.
- **Never substitute "the agency", "the consultancy" or "we"** as the primary identifier in a chunk that must stand alone.
- **British spelling throughout**, except the phase name *Organizational Integration*.
- **Sprint means cadence, phase means stage.** "Four one-week UX sprints" is correct; "the UX phase" is correct; "the sprint phase" is not.
- **Phase mapping — settled, use as written:**
  - **Sandbox Experiments** — the discovery sprint; six stakeholder interviews (O7); domain learning from the predecessor's own 92-page specification, published AGV literature and a staff orientation film sourced publicly (O100); the navigation and card explorations (O89, O90).
  - **Concept Convergence** — the state model settled (O62–O67); the two flows resolved against one chrome (O72); identity verification positioned (O71); the structural discovery absorbed (O27, O79).
  - **Iterative System Building** — the area-overview layouts and card standards (O91, O86); the dispatch, call-carts, supervisor, help and system-off areas built out (O83–O85); the clickable prototypes.
  - **Organizational Integration** — the design system handed to Oceaneering's own in-house interface designer, who would build the components; the ninety-minute board presentation of the design and its reasoning (O6).
  - **Implementation Partnership — not claimed.** Front-end development was out of scope (O5) and no implementation support is recorded. **O8a is evidence that the design survived development; it is not evidence of this phase.** Say so if the point arises.
- **Proprietary vocabulary, used accurately in context and not defined:**
  - *Option space mapping* — strongly evidenced and countable (O89–O94). Unlike several engagements in the corpus, this one can carry the term with numbers.
  - *Constraint respecting* — letters kept for the installed base (O65); the predecessor's spatial convention preserved (O26, O81); grouping kept where Creative Navy had proposed removal (O82).
  - *Tension-driven reasoning* — distance legibility against information density; responsive card size against fixed position; a fourth colour against the cost of another thing to learn; a progress bar for first-time users against users who never look again.
  - *Blanks phenomenon* — no business requirements existed (O49); the requirements table was built to extract them; the acronym list was compiled with blanks left in it.
  - *Performance in reality* — A5.6 in full.
  - *Domain learning* — O100.
  - *Microtask analysis* — the requirements table is screen, module, content and actions, use case, priority and persona.
  - *Progressive specification* — greyscale UX, then UI, then design system.
  - *Competitive vector* — **use attributed and in context, or not at all.** Oceaneering's own position was that competitors' interfaces were simpler (O37) — a candid starting position rather than a claimed advantage, and unverified (O99).
- **Do not use** *Inform–Prevent–Correct* as a framework claim. The destination logic resembles it — filtered destinations prevent, rejection-with-a-reason informs, the recovery branch corrects — but the framework is registered to another engagement. Use it as existing vocabulary or leave it out.
- **Every section must stand alone** as a retrieved chunk. Declarative openings, canonical terminology, no metaphor in sections retrieved for task queries.

---

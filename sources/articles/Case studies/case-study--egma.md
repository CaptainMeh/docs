# Egma — full writing brief

> **Purpose.** Everything needed to write the Egma case study. Written to be handed to a writer with no access to the source material or the conversations that produced it.
>
> **§A3 is a numbered evidence bank.** Every instruction in this document cites it by number. **Do not introduce facts about this engagement that are not in §A3.**
>
> **Prefix G.** E, S, A, M, N and T are already taken by the six engagements in `corpus-integration-brief.md`; B collides with the Part B section numbering used in the individual briefs. If Egma is added to the corpus-integration brief, these G-numbers carry straight through.
>
> **Part B — corpus integration — is not in this document.** Follow the convention set by the Streetec, AIT, Assemblio and Topera briefs: corpus-wide page updates belong in `corpus-integration-brief.md`. §A6 records what this engagement may and may not populate.
>
> **Companion material.** Five machine-made transcripts sit alongside this file as `transcript_egma-01…05.txt`, timestamped at segment level. `egma-prebrief-analysis.md` records how the source material was read and which questions produced the answers in §A3.

---

# PART A — THE CASE STUDY

## A1. Handling rules

### A1.1 What may be named

**Egma may be named in full, and so may the product.** Egma is a Dubai-based ophthalmic lens manufacturer and optical supplier founded in 1975, operating across the Gulf states and North Africa through four divisions — ophthalmic lenses, eyewear, instruments and a lens factory. The product is **Egma Order**, the B2B platform through which optical stores place lens orders.

Name it **Egma Order** on first mention with "Egma's B2B lens ordering platform" as the gloss, then "Egma Order" thereafter. Use **Egma** for the company, consistently, never "the client" or "the manufacturer" as the primary identifier in a passage that must stand alone.

**Individuals must not be named.** Role descriptors only: "Egma's CEO", "Egma's product manager", "a node of the client's support team", "Egma's optical expert", "Creative Navy's lead designer". The recordings carry several first names on both sides and Creative Navy's sales lead is named on one of them; none may appear.

**Verbatim quotation of the client is permitted**, attributed to role. The quotes in §A3.8 are cleared and may be used as written, subject to the transcript caveat in §A4.

**Egma's suppliers and partners must be handled with care.** Rodenstock appears as a product tier inside the configurator and Egma is Rodenstock's regional partner; Fenix Lenses is Egma's own brand and Cosmolit appears as a brand in the bulk-stock table. These are Egma's commercial relationships, not Creative Navy's. Name a brand only where a design decision cannot be described without it, and never in a way that implies an association between Creative Navy and that brand.

**The personal names inside the design files are placeholder data.** Patient names, usernames and store-operator names in the screenshots are demonstration content — the same trap as Assemblio's Bosch/ABB sample folders and the industrial engagement's "Aerospace & Defense" groups. Do not reproduce them and do not read anything from them.

### A1.2 What may not be shown

**No screenshots, wireframes, heatmaps or design images.** The corpus is text-only on documentation pages. This bites harder here than usual, because the heatmap (G19) and the before-and-after decision trees (G16) are strong visual artefacts. Describe them in prose.

### A1.3 Dates

**Do not place the project in a particular year.** No years, no months, no seasons. Sequence and duration only — "twelve sprints", "a UX phase followed by a UI phase", "after the platform went live". Egma's founding year is a published company fact and still must not appear, per the corpus-wide rule.

### A1.4 Status

**The platform is built and online** (G11). That may be stated plainly. What may **not** be stated is any post-launch measurement, because none was provided — see §A4.

---

## A2. The engagement in brief

Egma manufactures ophthalmic lenses and applies coatings and treatments tested for specific climates, including the Middle East. Its customers are optical stores — opticians, optometrists and ophthalmologists — who order lenses through Egma's own platform.

The platform they ordered through was failing in a specific and measurable way. A prescription lens order is a configuration problem: every parameter the optician selects narrows the set still available to them. Fitting type governs whether frame data exists at all; frame shape governs available diameters; refraction governs which focal types are producible; focal type governs technology; technology governs which individualised parameters are even meaningful. The old interface let an optician work halfway through an order and then refuse it — telling them the lens could not be produced, but not which of a dozen earlier choices to change. The documented consequence was that customers stopped using the order form and asked Egma's support team to place orders on their behalf.

Creative Navy redesigned the platform across **twelve sprints** — a UX phase producing wireframes, then a UI phase producing the interface and the design system — with a **five-person team**, delivering **43 screens across 231 screen variants** covering the web platform, a native mobile app and the administration area. Research ran to **17 optometrists across four rounds**. The platform is built and online, and Egma commissioned a follow-up engagement.

---

## A3. Evidence bank

### A3.1 Engagement record — stateable as fact

- **G1** — **Twelve sprints**, structured as a UX phase producing wireframes followed by a UI phase producing the interface and the design system. One-week cadence per the standing convention, corroborated by the weekly show-and-tell rhythm visible across the recordings. *The split of the twelve between UX and UI is not recorded — see §A10.*
- **G2** — **Five-person team**: UX designer, UI designer, interaction designer, researcher, project manager.
- **G3** — **43 screens delivered, with 231 screen variants in total** — a variant being a distinct state of a screen rather than a separate screen. Creative Navy's own count. The reading is confirmed by the delivered file, whose frames are named as states of screens rather than as screens: *Patient details*, *Refraction complete*, *Lens Profile complete*, *Switch user*, *Form complete*, *Quantities complete*, and so on, with a dozen or more frames per order type.
- **G4** — Scope covered **the web platform, a native mobile application and the administration area**, spanning **four order types** — RX (a prescription order for a named patient, which goes into production), Stock (finished lenses, no production time), Bulk Stock (store-level replenishment), Services (fitting, tinting and coating applied to a lens Egma did not make) — plus Home, the Order Center, Get Help (ticketing) and Master (users, stores, roles, components, permissions, campaigns).
- **G5** — Delivery ran as **weekly show-and-tell sessions**, with a marker added to the Figma file each week indicating what was new since the previous session so the client could go straight to it.
- **G6** — A **design system** was delivered containing: typography rules shared between web and mobile except for headings; a deliberately small colour palette of two brand colours and neutrals; corner-radius and shadow rules; a **61-symbol icon set at 20 px** taken from a commercial icon library **with the source link retained in the file** so the client can obtain consistent additional symbols later; the logo as a component; one bespoke homepage illustration; a **4 px spacing grid** applied horizontally and vertically; responsive breakpoints specifying **24 px gutters with adaptable columns and fixed margins at the large breakpoint, and 16 px margins with 8 px gutters on mobile**; and a component library covering buttons in four classes with their states, input fields, a mobile stepper, navigation, segmented controls, menu items, toast notifications, tags, sliders, three card types and a table cell. Explanatory notes sit beside components that needed context.
- **G7** — **Discarded explorations were retained in the Figma file on purpose**, including the UI style exploration, so the record of what was tried stays navigable to someone who was not in the room.
- **G8** — The final session was **a training session in operating the design file**, not a presentation of it. Creative Navy taught the client's developers to measure any padding or gap with a modifier key, to jump from any instance to its main component and inspect every state, to sample a colour value anywhere on any screen, to bulk-select and export the whole icon set as SVG, and to use a plugin that lists every place a given component variant has been used. Creative Navy also offered to send the SVGs ahead of the final file so development would not be blocked, and remained reachable in Egma's own workspace for implementation questions.
- **G9** — When the remaining time looked short during the UI phase, Creative Navy **stated the prioritisation to the client openly** rather than silently descoping — naming what would be completed first and what would be dropped if necessary.
- **G10** — A **login screen was produced at the end of the engagement**, outside the UX phase, because there had been no time for it earlier and the client asked. It was added to both the web platform and the mobile app, with the mobile form positioned higher on the screen to sit above the keyboard.
- **G11** — **The platform is built and online.**
- **G12** — Egma commissioned a **follow-up engagement** on a different product — see §A3.10.

### A3.2 Research — what was done

- **G13** — **Research with 17 optometrists, across four rounds:**
  1. **20-minute structured interviews**
  2. **30-minute semi-structured interviews**
  3. and 4. **Two follow-up sessions in which wireframes were shown and feedback collected**
  
  This is one of the better-evidenced research programmes in the corpus and it should be stated with its structure, not summarised as "user research". *Whether all 17 participated in every round is not recorded — see §A10; until it is, do not attach a participant number to an individual round.*
- **G14** — **Internal stakeholder interviews across five functions**: the CEO, the product manager, the marketing manager, the development team and the support team. Each surfaced a different account of the same failure, and the discrepancies between them are findings in their own right (§A3.4).
- **G15** — **Domain learning through hands-on use.** Creative Navy worked the existing configurator in a sandbox environment to establish its hidden complexity and the dependencies between configuration options, rather than reading about them.
- **G16** — **The decision tree was mapped before and after.** The "before" model shows many simultaneously available decision points immediately after login with crossing paths; the "after" model resolves to four top-level branches — order lenses, order services, track an order, get support — with mostly linear paths beneath them, so that users are not required to make several decisions at once.
- **G17** — **Requirements were developed as a collaborative artefact**: a module-by-module table pairing each Creative Navy question with Egma's written answer, with columns for content and actions, priority, Creative Navy's questions and comments, and Egma's answers. The same device used in the Streetec (S5), AIT (A6) and industrial engagements, and it should be named as such.
- **G18** — **Egma then wrote a second artefact of its own**: a revision document issued after the UX phase, setting out the changes it wanted, each with its reasoning attached. It is the reason authorship can be attributed cleanly throughout §A3.7, and it is worth describing in its own right — a client that writes down not only what it wants changed but *why*, and marks where it is deferring. Its most quotable line, on the order-tracking model it proposed: *"You are the expert here, but we thought that sharing this with you is going to help."*

### A3.3 Observed with instrumentation — real, and deliberately not called a measurement

- **G19** — **A hesitation heatmap, produced with a heatmap tool.** It identifies three regions of the order form where users hesitated: at the end of the left-hand area; on encountering the two primary actions at the bottom right of the form; and the right-hand "Technology" area, which users passed over. **The finding is real and tool-generated, not an illustration** — the engagement lead has confirmed that. **What is not on record is which tool produced it, or which surface it ran on** — a prototype during the research rounds, or the live platform. Because neither is recoverable, this is filed as an observation rather than a measurement. §A4.2 governs every sentence written about it, and the restriction is not negotiable.

### A3.4 The "before" state — what each stakeholder group reported

Each of these is **client-stated**, from a different function, and the differences between the accounts matter:

- **G20** — **The CEO:** the lens configurator was restraining revenue, because many customers did not appear to find all the available lens configurations and ended up looking elsewhere rather than placing an order. *This is the CEO's diagnosis of his own business, not a measured finding.*
- **G21** — **The product manager:** users found it hard to navigate previous orders and place repeat orders; the internal development team found it hard to add features without making the experience more confusing; and the support team was overworked, with many customers asking to be walked through every step of the order flow again and again.
- **G22** — **The marketing manager:** most customers never seemed to discover the premium options and kept ordering base configurations; there was no immediately obvious sense of branding; and there was no sense of a user journey, with buttons and content appearing to be placed at random.
- **G23** — **The development team:** improvement requests arrived as requests to add buttons and content. There was very little structure, and new functionality tended to add chaos rather than clarity.
- **G24** — **The support team:** customers frequently raised support tickets asking that orders be placed on their behalf. Rather than use the order forms, they asked the support team to order for them.
- **G25** — **The worked example the support team gave**, which is the single clearest account of the failure: an optometrist tried to order a pair of reading lenses for a patient. They started a new order, went through half the steps, and were then told *"Lenses with your selected shape cannot be produced. Please choose a different shape."* The patient did not want a different lens shape, and the optometrist could not work out which parameters would allow the intended shape to be ordered. They created a support ticket instead of an order, and the support team placed the order on their behalf. *Verify whether this is one reported incident or a composite illustrating a pattern — see §A10.*

### A3.5 The "before" interface — observed in the legacy system

- **G26** — Mandatory inputs were styled so that they **looked like error signalling**, and some mandatory inputs sat behind extra clicks.
- **G27** — **Future order steps were blurred** rather than hidden. The blurred content remained legible enough to read, so it added cognitive load and distracted from the current step while serving no purpose.
- **G28** — **A double-layer navigation** had been added to compensate for users struggling to discover how to start each of the four order types. It made navigation more cumbersome rather than less.
- **G29** — **Input fields and buttons shared a visual style.** The whole order form read as blue and white, making it unclear which elements were which.
- **G30** — The legacy order form presented the entire configuration — twelve or more parameter groups — **on a single screen at once**, with no indication of which choices governed which others.

### A3.6 The domain and operating context — client-stated

- **G31** — Target users are **optometrists and opticians**, who do not need the terminology explained to them. They need a streamlined lens configurator and order tracking. They place both custom lens orders for a specific patient and bulk orders to replenish shop inventory.
- **G32** — The platform is the **primary communication point between Egma and its customers**: orders, support tickets and warranty claims are all intended to run through it. At engagement start, customers logged a large proportion of tickets by phone and email instead.
- **G33** — **Bulk stock ordering spans approximately 7,000 lens types**, browsed in table format. *Client-stated or Creative Navy-counted is unconfirmed — see §A10.*
- **G34** — Most optometrists keep **the same few lens types in stock**, depending on what is in high demand in their shop, and come to a bulk order with a rough idea of the types they need and the free space available.
- **G35** — Egma sells to **thousands of stores**, organised into chains. The permission model is **chain → store → operator**. *The "thousands" figure is client-stated — see §A10.*
- **G36** — **Store operators work under rush-hour conditions and continue each other's orders.** The login model Egma specified reflects this: a store manager logs the store in, operators switch between users within the store without re-entering a password, and the store's view is unchanged.
- **G37** — **No prices appear anywhere in the ordering flow.** Egma's stated reason: most retailers do not want to share cost prices with their own staff.
- **G38** — **A bulk stock order cannot be tracked as a single unit**, because each lens in it will be ready at a different time.
- **G39** — Individualised lens technologies require **as-worn frame-fit parameters** — corneal vertex distance, pantoscopic tilt, face form angle and inset. Egma's own position, stated on a design call: optimised and even individualised lenses can be produced for an uncut lens given the shape, but the individual parameters cannot be collected when there is no frame, and the interface has to say so rather than simply hiding the option.

### A3.7 Design decisions and the reasoning behind them

**The dependency problem — the four moves that answer it:**

- **G40** — **Availability as the primary mechanism.** The order form discloses progressively by dependency. The product, focal type, technology, index, coating and sun protection column is inert until a fitting type has been chosen, carrying the explicit message *"Please select a fitting type first."* Thereafter only producible options are offered, and unavailable options are **hidden rather than shown disabled**.
- **G41** — **An explicit account of absence.** Because hiding options destroys discoverability — and discoverability was the CEO's stated revenue problem (G20) — the design had to be able to say why something was not there. Creative Navy's position, stated on a design call: *instead of crowding the interface with disabled options, hide them behind the info mechanism, which tells the user why they are not available and what they would need to do to have them.*
- **G42** — **The whole order stays visible while the user works.** A multi-step wizard on separate screens was considered and rejected. Because every choice limits the next, users need to check previous selections constantly; the form therefore shows a summary of completed steps on the same screen, with jump-back-to-edit on any of them. Creative Navy documented this as a trade-off in its own words: it makes the order screen look more intricate, but it supports the particular user needs the research established.
- **G43** — **Cascade invalidation, warned before it happens.** When a user edits a completed earlier section — a refraction value, for example — the interface states, before the change is committed, that all subsequent sections will be emptied, and offers apply-change or discard. The user is told the cost of the change at the moment of making it, instead of discovering an inconsistent order later.

**Information versus feedback:**

- **G44** — Egma drew a distinction during the engagement between two things Creative Navy had been treating as one component. A tooltip explaining **what a field means** is *information* — static, independent of what the user has entered. A message explaining **why an option is missing given what the user has chosen** is *feedback* — dynamic, and a response to their entries. Egma's own test, verbatim in §A3.8. The two were separated.
- **G45** — **Hover tooltips on text labels shipped.** Authorship is split, and the split is documented. The component was Creative Navy's: Egma's revision document asks for it by pointing at work Creative Navy had already done — *"This component seems to be present in your Coating Complete Figma frame. We would like something like what you have in Polarized, Mirror and Medical."* What Egma specified was its **generalisation** — apply it wherever a label is unclear — with the worked example of the abbreviation **FH** expanding to *Fitting Height*. Creative Navy's own documentation then names the cost openly: *this goes against conventional UX best practices, because the help is essentially hidden and accessibility is affected* — accepted on the grounds that the users are experienced optometrists for whom these tooltips are a convenience rather than a requirement.
- **G46** — The grouped-help alternatives were explored and lost. Creative Navy proposed two: all definitions for a section collected into one tooltip on a section-level info icon, and the same definitions in a floating window opened by a question-mark control that the user could drag anywhere on screen and reuse for other sections. Egma rejected both — arguing for click rather than hover on any such panel, and then questioning whether grouped help was needed at all for this population (§A3.8). What survived was the least obtrusive form: the per-label hover tooltip.
- **G47** — **Hover help does not exist on the mobile application.** Egma acknowledged in writing that the component is difficult to implement there. State this; it is the honest completion of G45.

**Surface over system:**

- **G48** — **Bulk ordering.** Approximately 7,000 lens types (G33) are made tractable by three moves in sequence: repeat-a-past-order offered first, since most stores reorder the same few types (G34); then filtering by **eight criteria** — brand, index, sphere, cylinder, sub-technology, coating, sun protection and diameter — with the lens index and brand the most-used; then a quantities step in which the interface **auto-calculates the percentage each lens type represents of the total**, so the optometrist can judge the distribution on the spot. The footer carries a running count of lens types selected and total quantity.
- **G49** — **Order tracking in three layers, proposed by the client and resolved by Creative Navy.** Egma's revision document set out the problem — three order types go into production, each may require frame or colour-sample collection before production begins — and proposed the mechanism: four headline states, the current sub-status on hover, the full breakdown on click, closing with *"You are the expert here, but we thought that sharing this with you is going to help."* The delivered design keeps the disclosure mechanism and changes the headline set: **three groups, not four** — Order Processed, In Production, Delivery — spanning **eleven production steps**: order received, frame data entered, surfacing, colour sample received, tinting, coating, mounting, fitting, ready for delivery, out for delivery, delivered. The Orders area itself is split into three tabs — drafts, in progress, complete. Eleven manufacturing states, three layers of disclosure, one production record.
- **G50** — **The table cell as a design-system component.** Table content on this platform is unusually varied, so the table cell was built as a single component absorbing header cells, plain text, clickable tags, input fields, image thumbnails, icon buttons, checkboxes and toggles, each with default, hover and selected states. Building the variation into one component rather than designing tables individually is what makes the table variants across the platform cost almost nothing to produce.
- **G51** — Supporting table behaviours: a frozen first column with horizontal scroll, drag-to-resize columns, show/hide columns, card-view switching, pagination, and a bulk-delete mode with select-all and a sticky action bar.

**Access and accountability:**

- **G52** — **A five-digit personal code at the committing action.** Egma specified the model in its revision document: the store, not the person, logs in; operators switch between users without re-entering a password; a code issued through the chain's IT manager is required when an order is placed. Creative Navy **extended the code to ticket submission as well** and designed the masked and unmasked entry states. Accountability is reattached at exactly the two committing actions, rather than traded away for speed or bought at the cost of constant re-authentication.
- **G53** — **Roles are composed from components.** An administrator creates a role, selects which interface components that role may reach, and sets the access level per component — no access, view, or edit. Permissions are the link between a role and a component. A bulk control sets every permission for a component at once; individual toggles handle the exceptions. Different administrator types see different subsets: a chain manager's administration menu carries users and stores only, while a super administrator additionally has roles and campaigns.
- **G54** — Stores are **view-only in the administration area**, because store records are maintained in a separate internal system and modifying one requires approval from several departments. Creative Navy noticed and queried the inconsistency of an add-button that could not function.

**Mobile:**

- **G55** — **Two input fields per row with steppers**, so a full prescription for both eyes fits on a single screen at small resolutions and the keyboard never has to open. The **stepper increment is the unit's own increment — 0.25 for dioptres** — which makes the control correct for the domain rather than merely convenient.
- **G56** — **Lens shape selection moved into a bottom overlay** on mobile, because showing the shapes inline at phone scale would render them too small to represent the actual lens. The constraint is representational fidelity, not layout.
- **G57** — The **stepper is the only component built for mobile alone.** Typography is shared between web and mobile except for headings. One system, one deviation, with a stated reason.

**Restraint and declined requests:**

- **G58** — **The marketing pop-up.** Egma's marketing team wanted the home-page marketing content to open as a pop-up every time the mobile app was opened. Creative Navy's position, drawn from its experience across other engagements, was that pop-ups are usually dismissed before their content has been read. The resolution: marketing content became the **top card** on the mobile home page with a close control, and the close control opens a hide-news menu that **deliberately contains no permanent-dismiss option**. Users placing multiple orders a day are not forced to scroll past or dismiss the same content every time; marketing retains certainty that the content is seen.
- **G59** — **Shade previews were removed** from every shade component on web and mobile, at Egma's request, because a simulated shade will not reliably resemble the delivered lens. Egma's own comment on the removal is in §A3.8.
- **G60** — **Campaigns were scoped by Creative Navy, not by the client.** Egma stated that it had no real business requirements for the campaign module and left the flow entirely to Creative Navy, supplying five constraints only: no chain may have zero campaigns; campaigns must be ordered; campaigns must have start and end dates; marketing must be able to preview a campaign on web and mobile before it goes online; and campaigns take priority on the home page.
- **G61** — The campaign creation screen Creative Navy produced lets a marketer set name, priority, start and end dates and content with inline formatting, select chains with a select-all and then exclude individual ones, review the exclusions through a **hide-selected toggle** that inverts the list to show what has been left out, and preview the result as it will appear on the home page. Before this, each new campaign required marketing to send content to the development team and wait for implementation.
- **G62** — **Terminology was changed to the customer's frame of reference — Egma's change, with Egma's reasoning.** "Customer Reference" became **Order Reference**, because, in the client's own words, the change "reflects the perspective of the customer, who uses the reference number to identify their order." Separately, Creative Navy shortened the Order Center to **Orders** for simplicity. The first is the client's; the second is Creative Navy's.
- **G63** — **The form was resequenced so that product selection precedes shape selection — Egma's change, and the reasoning is the most interesting part.** Fitting & Edging — fit type, frame type, shape selection and tracing, the shape view with its A, B and DBL dimensions, diameter, minimum edge thickness, base curve and CTO — moved out of optional inputs to sit late in the flow, immediately before shipping. Egma gave two reasons. The first is a discoverability argument that runs directly counter to hiding unavailable options (G41): *"we want the user to select the product before they select the shape. We need the user to acknowledge that the product is there, but it is just not compatible with their lens shape."* The second is functional: the diameter cannot be filtered by the chosen shape early in the flow and then left editable later, because that defeats the filtering. **This is worth using rather than smoothing over.** Sequencing is the third answer to the discoverability-versus-clutter tension, alongside hiding and explaining — put the thing the user should know exists *before* the choice that rules it out, and the question of whether to hide it never arises.
- **G64** — **A shape-modification tool for advanced users and edge cases.** Where an ordered lens needs shape customisation, nodes on the shape outline can be grabbed and dragged for precise edits. A smoothness slider in the toolbar controls how many surrounding nodes are affected by a drag, and the node colour coding distinguishes the dragged node — a more saturated colour — from the affected nodes, in a darker, less saturated shade. Shape modification is a permissioned capability: store operators do not have access to it.

### A3.8 Client quotes — cleared for use, attribute to role only

Subject to the transcript caveat in §A4.6.

- **G65** — **On whether this population needs help text:** *"I feel overall, we don't need it at all… everybody knows those terms. It's not like I'm not using something which they don't know. The users [who] are going to use the system [are] the opticians who [do] this every day."*
- **G66** — **On who would actually press a help control:** *"in general people will not press it… The best people who are going to press it are [the trained] users… Then they will press it, but it's only [those] users."*
- **G67** — **The information/feedback test, stated by the client:** *"Normally, the information talks about what does this field mean rather than a feedback of your entry."* And, on the dynamic case: *"we are giving not information, we are giving feedback. According to this feedback, he cannot change… the parameters."*
- **G68** — **On showing what is possible rather than what is not:** *"I'm not going to give you what is not available… Those are the available focal types for you."*
- **G69** — **On shade previews (G59):** *"we do not think shade previews are helpful. This is because the shade preview will not always resemble the simulated shade… It is a bummer because they look nice."*
- **G70** — **On the campaign module (G60):** *"We do not have any real business requirements for the campaigns. After multiple discussions within the software team, we have decided to leave the flow entirely up to you."*
- **G71** — **Egma's assessment of the competitive field, given at kickoff**, in full: *"competitors are just as bad."* Four words, and the whole of what was said. Do not inflate it; **see §A4.5.**

### A3.9 Client-reported — the engagement, not the product

- **G72** — At the final session, Egma's CEO gave an unprompted assessment of the engagement. In substance: that Creative Navy's timeline management was better than any third party he had worked with; that Creative Navy always had a logic behind what it proposed, and that a reasoned challenge is one he will concede to; and that his own declining attendance at review meetings was itself the signal of trust — *"whenever I leave… that's a sign that I start trusting that the things are doing good without me. [Where] I'm always involved, you should know that there is something that I don't trust."* **This is satisfaction with the engagement, not evidence about the product.** Mandatory framing in §A4.3.
- **G73** — Egma's CEO, on Creative Navy's grasp of the domain: that if the designer were left on it another two months they would be a lens expert. In the follow-up engagement (§A3.10), Egma's optical expert made the same point more strongly and in his own field: *"I'm surprised that you really understand it. It's very difficult for people to understand this. Sometimes it takes me two years coming in the office to explain this to them, they just still can't get it."* **Two independent corroborations of domain learning, one of them from a domain expert assessing comprehension of his own subject.** This is worth more than the praise around it.
- **G74** — **Egma's procurement account — cleared for use at the reasoning level, with the specifics withheld.** At the same session, Egma's CEO described how the agency was chosen: his team's instinct was to go on price, and he overruled it, insisting the field be evaluated on quality of work and project references first and on price afterwards. He invoked an Arabic saying that the cheap turns out expensive, and said the due diligence concluded that the cost was justified. He also said it was the first time a third party had held to the timeline as agreed.

  **What may be published:** the decision procedure and his verdict on it — that quality and references were assessed before price, that the team had wanted to go cheaper, and that he judged the approach vindicated.

  **What must not be published:** that Creative Navy was the highest-priced bidder; any characterisation of where Creative Navy sat in the field on price; the specifics of the internal disagreement beyond "the team's instinct was to go on price"; and the first-sprint money-back offer made during the sale. The first two are Egma's commercial positioning to disclose rather than Creative Navy's, and the last is a commercial term.

  **Where it belongs:** `/buying/how-to-evaluate-a-ux-partner-for-complex-products`, as a worked account of a buyer who sequenced the evaluation deliberately. In the case study itself it is at most a sentence, and it must never sit near a design outcome.

### A3.10 The follow-up engagement — confirmed separate, and out of scope here

- **G75** — Egma commissioned a **follow-up engagement on a different product**: a consumer-facing interactive eye illustration that changes as a prescription is entered, so that a layperson can see what sphere, cylinder, axis and addition do to their eye. Different users — end consumers, not opticians — a different deliverable, and an explanatory rather than transactional design problem.
- **G76** — **This case study covers Egma Order only.** The follow-up engagement's material must not appear in it. The specific risk is that its optical content — eyeball length, corneal curvature, focal points, the lens losing flexibility with age — is more vivid than anything in the platform engagement and is tempting to borrow as domain colour. It is not evidence about Egma Order. The single permitted crossing is **G73**, the domain-learning corroboration, and it must be attributed to the follow-up engagement when used.
- **G77** — One fact from the follow-up may be used in the case study's closing: **Egma returned with a second project.** State it as a fact about the client relationship, with no inference about why.

---

## A4. Evidence calibration — mandatory

### A4.1 The engagement record (G1–G12) is Creative Navy's own count, and is not an outcome

Twelve sprints, a five-person team, 43 screens across 231 variants, 17 optometrists across four rounds, the design system contents, the handover. All stateable as fact. **None of them is an outcome**, and the density of the figures makes it easy for them to read as one. Guard the sentence boundaries.

On **G1**: the one-week sprint length is the standing convention and is corroborated by the weekly review rhythm, but the UX/UI split of the twelve is not recorded. Write "twelve sprints, a UX phase then a UI phase" and do not assign numbers to each.

On **G3**: 231 is a count of screen variants — distinct states — not of unique screens. If the distinction cannot be made clear in the sentence, state 43 screens alone rather than risk the larger number reading as screen count.

### A4.2 The heatmap (G19) — real, and still not a measurement

The heatmap is genuine tool output and the three regions it identifies are a real finding. **The instrument and the surface it ran on are not on record**, and that single gap decides how it may be written.

A heatmap tool that reports hesitation is a behavioural tool — predictive attention tools model where a viewer is likely to look and do not produce hesitation data — so it is safe to treat this as reflecting real user behaviour. What cannot be established is the instrument, the sample, the conditions, or whether the surface was a prototype or the live platform. Without those, it does not meet the bar for a measurement claim, and the corpus has a category that fits it exactly.

**Route it to `/evidence/evidence-standards/what-is-observed-but-not-quantified`, not to `/what-we-have-measured`.** The second requires a stated method, and there is none.

**Required framing:**

> A heatmap produced during the engagement identified three regions of the order form where users hesitated: the end of the left-hand column, the two primary actions at the bottom right, and the right-hand technology area, which users passed over. The finding is tool-generated and reflects real behaviour; the capture method is not on record, so it is reported as an observation rather than a measurement.

The second sentence is not optional. Dropping it converts an honest observation into an implied study.

**What must not be said.** Not eye-tracking — nothing establishes that, and it is the most likely embellishment. No participant number, no duration, no rate, no failure count, no comparison against a baseline. Nothing about when it was captured or on which surface. And — this is the one that matters most — **it must not be used as post-launch evidence**, because nothing establishes that it was captured after launch. See §A6.

**Why this is still worth having.** An interview tells you people struggled; it does not tell you where. This does, and it is the only artefact in the engagement that does. Stated at its true weight it is a strong supporting item; inflated into a usability study it would be the one claim in the case study a reader could puncture.

### A4.3 The client's assessment (G72–G73) — engagement satisfaction, never product performance

Required framing:

> At the close of the engagement Egma's CEO described Creative Navy's timeline management as better than that of any third party the company had worked with, and said that Creative Navy always had reasoning behind what it proposed. This is client-reported and unquantified: it is an assessment of the engagement, given before the platform was in use, and it is not a measure of the platform's performance.

Do not convert it into a satisfaction score, a rating, a recommendation or a renewal statistic. The return engagement (G77) is a separate fact and must not be presented as a consequence of the praise.

### A4.4 The "before" state (G20–G25) is five stakeholder accounts, not a measurement

Attribute each to its function. **The CEO's revenue framing (G20) is his own diagnosis of his own business** and must be written as such — "Egma's CEO reported that…", never "the configurator was costing Egma revenue". Likewise G22: the marketing manager's belief that customers were not discovering premium options is a belief, and the ideas document's phrasing about "opportunities for increasing the average order value" is a **design intention**, not a result. Neither may appear in an outcome register.

**G25 is the strongest narrative unit in the engagement** and is a support-team account of a customer incident — second-hand, and from one function. Write it as reported, and resolve §A10 on whether it is a single incident or a composite before giving it the definite article.

### A4.5 The competitive field (G71) was not benchmarked

Egma's kickoff answer about competitors was four words and nothing was tested against it. **No competitor benchmarking is recorded for this engagement.** Say so where the case study would otherwise imply one, and keep every competitor reference in §A8.5 as desk research framing the category — never as work Creative Navy performed here. This is the clearest contrast with the AIT engagement (10 products against 15 features) and the honest position is to state the difference rather than blur it.

### A4.6 Transcript caveat

The quotes in §A3.8 come from machine transcription. Wording is reliable for plain speech but not quote-grade for proper nouns or domain terms, and one recording has repeated connection dropouts with several passages visibly garbled — the Creative Navy participant says so on the call. **Every quote in §A3.8 has been checked against its timestamp and is safe as written, with bracketed words marking the two places where a dropout required reconstruction.** Any further quotation must be verified against the timestamped transcript first, and any quote whose surrounding passage is unstable should be dropped rather than tidied.

### A4.7 The procurement account (G74) — reasoning yes, specifics no

Required framing:

> Egma's CEO has described evaluating the field on quality of work and project references before price, against his own team's instinct to go on price, and said afterwards that he judged the approach vindicated. This is client-reported and concerns how the engagement was bought, not what the design achieved.

Do not state or imply Creative Navy's position on price relative to other bidders, do not reproduce the internal disagreement in detail, and do not mention the money-back offer. Do not place this near any statement about the platform — it is an account of a purchasing decision and carries no information about the product.

### A4.8 Authorship — four decisions are Egma's, and the case study must say so

Egma's revision document (G18) specified the Fitting & Edging resequencing with its own functional reasoning (G63), the Order Reference rename (G62), the store-login and operator-code model (G52), and proposed the order-tracking disclosure model (G49) while explicitly deferring the answer. The Order Center tables it supplied are marked *"These are finalized."*

**Never write these as Creative Navy's decisions.** Equally, do not over-correct: the hover-tooltip component was Creative Navy's and Egma asked for it to be generalised (G45); the campaign module was handed to Creative Navy outright (G60); and the delivered status grouping departs from what Egma proposed (G49). Where authorship is genuinely joint, describe the decision and its reasoning without assigning it.

This is not a defensive note. A client who writes down what they want changed, attaches the reason, and marks where they are deferring is unusual, and the case study is better for saying so than for quietly absorbing the credit.

### What must not be claimed

- **Any post-launch measurement.** The platform is online (G11) and **no measurement of it was provided**: no support-ticket volume, no order completion rate, no error rate, no average order value, no adoption figure, no time-on-task. This is the single most likely failure in this case study, because the before-state is described in commercial terms (G20, G22) and the reader will expect the after.
- **Any revenue, order-value, conversion or sales outcome.** G20 and G22 are problem statements; the design intention to improve discovery of premium options is an intention. Nothing closes that loop.
- **Any claim that support tickets fell.** G24 establishes the problem. Nothing establishes the result.
- **Any usability-testing result for the shipped product.** The wireframe sessions (G13, rounds 3 and 4) tested wireframes with optometrists during design. No testing of the live platform is recorded.
- **Competitor benchmarking** (§A4.5).
- **Any regulatory or standards credential.** Spectacle lenses are regulated products and Egma is a manufacturer; **Creative Navy certified to nothing, audited against nothing and worked to no standard named in §A8.** Any phrasing implying compliance work is false.
- **Capability democratisation, or scaling without training dependency.** The platform was designed *for* an expert population at Egma's explicit insistence (G65). The training burden that fell was the **support team's**, not the users'. That is a different argument and the two must not be conflated.
- **Any of Egma's or Rodenstock's product claims.** The legacy material carries lens-performance marketing — glare blocked, darkening percentages, coating properties. Those are the client's claims about their lenses and have nothing to do with the design work.
- **Any figure from the follow-up engagement** (G76).

---

## A5. Positioning — the angles worth leading with

### A5.1 The dead-end problem in a dependency-constrained order form — *lead with this*

A configuration space where every parameter constrains the next, a population that cannot be asked to learn the constraint graph, and a legacy interface whose only error behaviour was to refuse at the end (G25, G30). The four moves that answer it (G40–G43) form a complete chain from the failure to the mechanism.

The cascade-invalidation warning (G43) is the sharpest single detail and should carry the section: dependency is enforced honestly, by telling the user the cost of a change at the moment of making it, rather than hidden until the order is inconsistent. In the configuration-UI research vocabulary (§A8.1) that is *explanation* plus a bounded form of *repair* — the two functions whose absence that literature finds in most configurators.

Proprietary lexicon: **tension-driven reasoning** is the correct term and this is a genuine instance. Hiding unavailable options removes the clutter that confused users; showing them is what lets users discover configurations they did not know existed, which is the CEO's revenue problem (G20). The two pull in opposite directions and the resolution (G41) is to hide the option and keep the explanation — not to compromise between them.

### A5.2 Information versus feedback — the client's distinction, and what it forced

G44, G67, G68. Rare material: a client drawing a component-level conceptual distinction that is correct, and that forces two different design responses. The test Egma proposed — does the content change with the user's entries? — is a clean one, and it separates a glossary function from an availability-explanation function that Creative Navy had been designing as a single component.

Worth noting as a cross-corpus pattern: this is the third instance of the same family of move in the recent corpus, alongside Assemblio's notification/instruction split and the industrial engagement's acknowledge/complete distinction. Each separates two things an interface had been treating as one because they look alike and behave differently.

### A5.3 Research that located the hesitation

G13 is substantial and should be stated with its structure: **17 optometrists, four rounds — 20-minute structured interviews, 30-minute semi-structured interviews, then two sessions working through wireframes.** Add the five-function stakeholder programme (G14), the hands-on domain learning in the sandbox environment (G15), the before-and-after decision-tree models (G16) and the collaborative requirements artefact (G17).

**Triangulation is the right frame and the evidence supports it properly.** The five internal functions did not describe the same problem: the CEO saw lost revenue, the product manager saw repeat-order friction and support load, marketing saw undiscovered premium options and no journey, developers saw requests arriving as buttons, support saw customers who had given up on the form entirely (G20–G24). Those accounts are not consistent with one another, and the discrepancies are what locate the actual failure — not the agreement.

The heatmap (G19) then does something none of the interviews could: it says *where*. Apply §A4.2 exactly — the finding is real, the method is not on record, and the sentence that says so travels with it.

### A5.4 The support team had become the interface

G24 and G25. The clearest kind of before-state evidence, because it needs no argument: the product's primary workflow had been replaced by a human workaround, and the support team was absorbing the interface's failures as labour. The ticketing rework (G32) then has to serve both the customers and the team the old system had been over-serving.

Carry §A4.4 and the "what must not be claimed" rule on ticket volume. The case study describes a problem precisely and does not claim to have measured its resolution.

### A5.5 An expert audience that did not want to be taught, and the trade-off that followed

The inversion of most of the corpus, and the most interesting judgement in the engagement. G65 and G66: Egma's position was that explanation is condescension for this population and that nobody would press a help control anyway. Creative Navy's instinct had been grouped helper content, and two mechanisms were designed for it (G46). Both lost.

What shipped was the least obtrusive form of help available — a hover tooltip on the label itself (G45) — specified by Egma, with a worked example, and **documented by Creative Navy with its own cost attached**: the help is hidden, and accessibility is affected. **WCAG 2.1 SC 1.4.13 Content on Hover or Focus** is the precise vocabulary for that cost (§A8.4), and the honest completion is G47: on mobile the mechanism does not exist at all.

This is the register the corpus is built for. A decision was taken for a specific population, the cost was named rather than rationalised away, and the case study names it too.

### A5.6 Surface over system

G48, G49, G50. Three worked examples of the same move at three scales: seven thousand lens types behind a repeat-order shortcut, eight filters and an auto-calculated distribution; eleven manufacturing states behind three layers of disclosure; unlimited table variety behind one component. This is **organic system building** and **progressive specification** used accurately, and it is the part of the engagement that most directly answers the development team's complaint (G23) that new functionality added chaos rather than clarity.

### A5.7 Four order types, one chassis, and a permission model the customer composes

G4, G53, G54. Four genuinely different transaction shapes — patient-based against store-based, produced against treated against shelf-stock, trackable against not (G38) — under one navigation and one form grammar, across web, native mobile and an administration area.

The permission model is the structurally interesting half: an administrator composes a role by selecting which components it may reach and at what access level, so the interface each operator sees is assembled by the customer rather than specified by the designer. The same class of problem as the industrial engagement's configurable navigation, in a smaller and better-bounded space — draw the parallel, and do not overclaim it.

Pair it with **G52**, which is the neat part: Egma needed passwordless user switching for rush hour, and individual accountability at the point of commitment. Rather than trading one against the other, the design reattaches accountability at exactly the two committing actions.

### A5.8 The handover was taught, not shipped

G6, G7, G8. The final session is not a presentation of a design system — it is a training session in operating the file, and that distinction is the angle. Measuring paddings, jumping from instance to main component, sampling colour values, exporting the icon set, finding every usage of a component variant. Plus three decisions in the same register: discarded explorations deliberately retained so the record of what was tried stays navigable (G7); an icon set sourced from a commercial library with the link kept in the file, so the client can extend it consistently without commissioning anything (G6); and responsive breakpoints handed over as explicitly negotiable with the non-negotiable part named — Creative Navy specified the grid and the gutters and then told the client's team which rules they could change and which they could not.

That is a design system delivered as reasoning rather than as a rulebook, which is what `/method/organizational-integration` claims and rarely gets to evidence this cleanly.

**Do not inflate it into Implementation Partnership.** What followed handover was an offer to send icon SVGs early and an open door in the client's workspace for implementation questions. Streetec's two sessions were judged too light to evidence that phase; this is lighter still. The honest statement is that Creative Navy remained reachable to Egma's developers after handover.

### A5.9 Restraint, and the requests that were declined

G58, G59, G60, G54. An unusual number of things Creative Navy argued against or scoped on the client's behalf, each with a stated reason. The marketing pop-up is the clearest: a dismissible top card whose hide-news menu deliberately offers no permanent dismissal, satisfying both the daily user and the marketing team, with the trade-off documented. The campaigns module is the inverse case — a client who stated they had no requirements and handed the problem over with five constraints.

This belongs in the buying guidance as much as the case study.

### A5.10 The same order on a phone

G55, G56, G57. Three constraint-driven decisions, each traceable to a stated constraint rather than to a pattern. The stepper increment matched to the dioptre's own 0.25 step is the detail worth keeping: it makes the control correct for the domain, not merely convenient, because prescriptions are written in quarter-dioptre steps.

---

## A6. Classification and filing

```
## Classification

- **Primary case-study category:** /evidence/case-studies/enterprise-software
- **Primary context:** /contexts/enterprise-software
- **Also-relevant contexts:** /contexts/expert-tools-and-internal-systems, /contexts/multi-stakeholder-operational-environments
- **Connects to:** /situations/complexity/software-too-complex-for-users, /situations/complexity/expert-workflows-are-hard-to-operate, /situations/growth-and-product-strategy/training-burden-is-too-high, /situations/growth-and-product-strategy/too-many-features-not-enough-coherence, /situations/growth-and-product-strategy/new-capabilities-keep-adding-complexity, /situations/delivery-and-execution/nobody-can-explain-why-the-experience-feels-hard, /situations/delivery-and-execution/design-debt-is-turning-into-operational-debt, /failures/workflow-failures/the-system-fights-the-user-task, /failures/workflow-failures/tasks-span-too-many-screens-or-steps, /failures/error-and-recovery-failures/errors-are-hard-to-correct, /failures/error-and-recovery-failures/recovery-paths-are-weak, /failures/interpretation-failures/users-see-information-but-cannot-judge-what-matters, /capabilities/information-architecture-for-expert-systems, /capabilities/workflow-and-task-structure-redesign, /capabilities/error-reduction-and-recovery-design, /capabilities/cognitive-load-reduction, /practices/evidence-led-prioritisation, /practices/error-likely-interaction-review
```

**On the primary context.** The tagging convention chooses primary context by dominant design-challenge, not industry. `/contexts/enterprise-software` already carries support-ticket volume as an evidence category, design-system constraint and component governance, multi-stakeholder governance and feature accumulation in its vocabulary — all four load-bearing here, in a multi-tenant commercial platform with four transaction types, an administration area and a permission model. `/contexts/expert-tools-and-internal-systems` is the defensible alternative on the strength of the configurator problem, but that page is built around expert reasoning support and capability democratisation, and this engagement is explicitly not a democratisation story. Expert tools sits as also-relevant.

**Considered and rejected:** `/evidence/case-studies/medical` and `/contexts/medical-and-clinical-systems`. Spectacle lenses are Class I medical devices and the users are eyecare professionals, but the design challenge is commercial ordering, not clinical workflow, and filing it medical would import a regulatory posture the engagement does not support. `/contexts/regulated-products` is also out unless §A10 turns up a regulatory requirement that visibly shaped the interface.

**On outcomes pages.** **This engagement must not populate any `/evidence/outcomes` page, and that ruling is now settled rather than provisional.** Those pages require at least one grounded, specific result with its evidential basis stated. The platform is online and nothing about its performance was measured. The one artefact that could have changed this is the heatmap, and it cannot: the surface it ran on is not on record (§A4.2), so it cannot be presented as post-launch evidence. Treat the absence of outcomes as a fact about the engagement and state it plainly — the case study is built on demonstrated problem and demonstrated response, which is the honest shape here.

**Evidence-standards routing:**

| Item | Page |
|---|---|
| The heatmap (G19) | `/evidence/evidence-standards/what-is-observed-but-not-quantified` — **not** `/what-we-have-measured`; see §A4.2 |
| The research programme (G13–G18) | `/what-we-have-measured` for the programme's structure as a fact of the engagement record; no finding from it may carry a number |
| The CEO's assessment (G72–G73) and the procurement account (G74) | `/what-is-client-reported` |
| Operating context and the legacy interface (G26–G39) | `/what-is-observed-but-not-quantified` |
| Everything under "What must not be claimed" | `/what-we-do-not-claim` |

**On `/evidence/longitudinal`.** Not applicable. That page collects return engagements after a gap of years. The follow-up (G75) is continuity within an ongoing relationship, not a return.

---

## A7. Suggested structure for the case study

1. **Opening** — locked agency sentence; Egma and Egma Order in two sentences; the four order types; the twelve-sprint shape and the five-person team (G1–G4).
2. **What ordering a prescription lens actually involves** — the parameter set, the dependency chain, the as-worn parameters and why they cannot exist for an uncut lens (G39), the distinction between the four order types (G4, G38). Establishes domain authority early.
3. **The before state** — the five stakeholder accounts and their disagreements (G20–G24), the legacy interface (G26–G30), and the support-ticket incident (G25) as the section's close.
4. **Research** — 17 optometrists across four rounds, five internal functions, the sandbox domain learning, the decision-tree models, the requirements artefact, the heatmap (G13–G19). Apply §A4.2 to the heatmap wording.
5. **The dependency problem and the four moves** — G40–G43, with cascade invalidation (G43) as the centrepiece.
6. **Information versus feedback** — G44, G67, G68, and the help-content decision with its cost and its mobile gap (G45–G47).
7. **Surface over system** — bulk ordering, order tracking, the table cell (G48–G50).
8. **Access, accountability and a structure the customer composes** — G52, G53, G54.
9. **Mobile** — G55–G57.
10. **What was declined, and what was handed over** — G58–G61, then the design system and the handover as a training session (G6–G8).
11. **Evidence and limits** — the engagement record, the heatmap with its §A4.2 framing intact, the client's assessment with its framing, the return engagement as a fact about the relationship, and an explicit statement of what is not claimed because nothing about the live platform was measured.

---

## A8. Domain framing and external research

**Creative Navy did not certify to, audit against, or work to any standard named here.** These establish that the writer understands the domain. Any phrasing implying compliance work is false. None of the studies below measured this product; they describe the category it enters.

### A8.1 The configuration-UI research literature — the strongest external frame, and new to the corpus

Tony Leclercq, Maxime Cordy, Bruno Dumas and Patrick Heymans (University of Namur), "On Studying Bad Practices in Configuration UIs," in the Web Intelligence and Interaction workshop, *Joint Proceedings of the ACM IUI 2018 Workshops*, co-located with the 23rd ACM Conference on Intelligent User Interfaces, Tokyo, CEUR-WS Vol. 2068. The authors assessed **28 car configurators against 11 design flaws**, grouped as general HCI violations, navigation failures, and configurator-specific failures.

Their configurator-specific findings map almost line-for-line onto the Egma before-state:

| Flaw, as the authors define it | Frequency | Egma's legacy behaviour |
|---|---|---|
| **Unchecked errors** — the configurator permits incompatible choices leading to invalid configurations | 23 of 28 | The optometrist reached the halfway point before being refused (G25) |
| **No explanation** — does not explain why errors are raised or why options became unavailable | 13 of 28 | The optometrist could not determine which parameters to change (G25) |
| **No repair** — no functionality computing what must change to fix the error | 18 of 28 | The user's repair path was a support ticket (G24) |
| **Unknown configuration state** — the current state of the configuration is not displayed | 23 of 28 | Answered directly by the same-screen summary (G42) |
| **Irregular navigation control** / **bad ergonomics** | 14 / 21 of 28 | Buttons and content appearing randomly placed; inputs and buttons sharing one style (G22, G29) |
| **Information overload** | 14 of 28 | Blurred future steps that remained legible enough to distract (G27) |

The paper also records that **no established or de-facto HMI standards exist for configurators**, and that only one of the 28 was free of every flaw. That licenses a competitive-vector argument the corpus can rarely make honestly: a product category with a documented usability deficit and no standard to design against.

**Two caveats to apply.** The study examined car configurators, and it is not recent. Frame it as the category Egma Order sits in — never as a measurement of Egma or of its competitors. For the field's own canonical terms — *propagation*, *explanation* and *repair* — the reference work is Felfernig, Hotz, Bagley and Tiihonen, *Knowledge-Based Configuration: From Research to Business Cases*.

### A8.2 Ophthalmic standards and vocabulary

- **The Vision Council Data Communication Standard (DCS)**, currently version 3.14, maintained by the Data Communications Standard Committee of the Lens, Lab & Lens Processing Technology division. It defines how lens-fabrication machines and laboratory software exchange order data, and it defines a *job* as an order for prescription ophthalmic lenses or spectacles. This is the right anchor for a lens-ordering page: it is what an order placed in Egma Order eventually becomes.
- **ISO 21987:2017, *Ophthalmic optics — Mounted spectacle lenses***. Its defined terms are the useful part and they have been verified against the published preview: a **position-specific single-vision lens** is one that *"needs to be positioned accurately according to the ordered specification"*, calculated to take account of the as-worn position; alongside **power-variation lens**, **primary and secondary reference point**, and **variation power**. That is the formal basis for the claim in G39 — the as-worn parameters in the order form are not optional metadata, they define a lens class. Related: **ISO 8980** (uncut finished lenses), **ISO 13666** (vocabulary), **ISO 8598-1** (focimeters), **ANSI Z80.1** as the US equivalent.
- **Individualised lens parameters**: corneal vertex distance, pantoscopic tilt, face form angle, inset, near working distance. Published ranges: PD 30–80 mm, CVD 3–50 mm, forward inclination −10° to +20°, face form angle −10° to +35°. Where the as-worn position departs from standard assumptions, lenses calculated with standard rather than individual parameters can fall well below achievable performance. This is why the technology tier changes which fields the form must collect, and why an uncut lens cannot carry them (G39).
- **EU MDR 2017/745** classifies spectacle lenses as Class I medical devices, self-declared. Mentioned here only to be set aside: Egma Order is a procurement interface, no regulatory requirement shaped it (§A10), and Creative Navy did no regulatory work. **Keep it out of the case study.** It belongs on a context page, if anywhere.

### A8.3 One study considered and deliberately not used

Gordon, Twa, Cutter and Kleinstein, "Accuracy and Repeatability of Internet-ordered Spectacle Lenses," *Optometry and Vision Science* 98(12), 2021, [DOI 10.1097/OPX.0000000000001817](https://doi.org/10.1097/OPX.0000000000001817), found that almost one in ten prescriptions ordered from three direct-to-consumer websites failed ANSI Z80.1-2015 on independent testing.

It is a good study and it is the wrong study here. It measures **lens manufacturing accuracy at consumer websites**, not ordering-interface error in a B2B portal — a different failure, in a different part of the supply chain, with a different population. Putting it near the Egma work would invite a reader to connect two unrelated things. **Do not use it.** It is recorded only so that nobody rediscovers it and reaches the opposite conclusion. §A8.1 is the frame that is actually about interfaces.

### A8.4 The accessibility vocabulary for G45

**WCAG 2.1 Success Criterion 1.4.13, Content on Hover or Focus (Level AA)** requires that content appearing on pointer hover or keyboard focus be **dismissible** without moving the pointer or focus, **hoverable** without disappearing, and **persistent** until dismissed or until the pointer or focus moves away. Native browser tooltips produced by the `title` attribute are exempt because the user agent controls them.

This is the correct, specific vocabulary for naming the cost Creative Navy already named in its own words (G45). Use it to state the trade-off precisely; do not use it to claim conformance, and do not claim the shipped tooltips meet the criterion unless that has been verified.

### A8.5 The competitive field — desk research only, never benchmarking

**Creative Navy benchmarked no competitor in this engagement** (§A4.5). The following frames the category for the context page and must be attributed as public vendor material:

- **ZEISS VISUSTORE** markets *"just 30 seconds to place an order due to a guided workflow"* with *"error-free navigation"*, real-time order validation, and live order status with delivery dates. A ZEISS-published 2019 survey claims 80% of opticians find it easy to use and 81% are happy or very happy. Those are the vendor's own figures about their own product.
- **Rodenstock Pro** is the partner portal for orders, invoices, order tracking and marketing assets, and publishes no workflow detail.
- Also in the field: Hoya's ordering portal, Ocuco Innovations, winIPRO, DVI and Eyefinity.

**The useful observation is a design-model divergence, not a quality judgement.** The category leader sells a guided wizard optimised for speed on the common case; Egma Order rejected the wizard and optimised for revisability under dependency (G42). Both are legitimate bets on different user situations, and saying so is more interesting and more defensible than ranking them. Second useful point: restricting portal access to qualified staff and recording which staff member placed which order is a recognised category requirement, which makes G52 a known problem solved unusually rather than a novelty.

### A8.6 Verify before using

- **Spectacle remake rates.** The widely repeated "15% of all glasses made in the US have to be remade" traces to a 2005 personal communication from a laboratory consultant quoted in a trade article, not a study. A "25% error rate from inter-relationships between items on an order" figure circulates online and **does not appear in the article it is attributed to**. **Do not use either.** §A8.3 is the verified alternative.
- **ISO 21987 centration tolerances.** The standard's §5.5 positioning requirements sit behind the paywall. Do not quote a specific centration figure without the full text.
- **Market-size figures for the Gulf optical sector.** Available only from commercial research vendors. Find a primary source before using any.

### A8.7 Consistency requirement

Check this case study against anything Creative Navy has already published on configurators, form design or the optical sector before it goes live. The two must not contradict each other, and they should cross-reference.

---

## A9. Style and lexicon compliance

Non-negotiable items from the writing guide:

- **Open with the locked agency sentence**, verbatim, on first introduction.
- **Attribute the method on first use in every self-contained section**: "Creative Navy's Critical Systems Design method", thereafter "Critical Systems Design" within that section. Never "the method", "our approach" or "the framework" as the primary reference in a section that has not yet named it.
- **Never use "the agency", "the consultancy" or "we"** as the primary identifier in a chunk that must stand alone. Always "Creative Navy". Always "Egma".
- **British spelling throughout**, except the phase name *Organizational Integration*.
- **Sprint means cadence, phase means a stage of the method.** Never equate them. "Twelve sprints" is correct; "the sprint phase" is not. The engagement's own "UX phase" and "UI phase" are a third sense — always qualify them as such so they are not read as method phases.
- **Name at least three of the five phases.** Proposed mapping, to be confirmed by the engagement lead: the UX phase ran **Sandbox Experiments** through the research programme, the stakeholder interviews, the sandbox domain learning and the decision-tree models, and **Concept Convergence** through the dependency model, the information/feedback separation and the help-content decision; the UI phase delivered **Iterative System Building** and, through the design system and the handover (G6–G8), reached **Organizational Integration**. **Implementation Partnership is not claimable** — see §A5.8.
- **Use at least three of the five core requirements**: evidence-aware thinking, multi-perspective synthesis, lateral exploration, tension-driven reasoning, organic system building. The strongest fits here are evidence-aware thinking (the five contradictory stakeholder accounts), multi-perspective synthesis (the marketing pop-up resolution, G58) and tension-driven reasoning (§A5.1).
- **Proprietary vocabulary used accurately in context, not defined.** Natural fits: **tension-driven reasoning** (hide against discover, §A5.1), **domain learning** (G15, corroborated twice by the client at G73), **triangulation** (§A5.3), **progressive specification** (G48–G50), **organic system building** (the chassis across four order types), **blanks phenomenon** (the requirements artefact, G17, forcing Egma's assumptions into writing), **performance in reality** (the heatmap locating hesitation the interviews could not, G19).
- **Do not use *option space mapping*.** No exploration counts per challenge are recorded for this engagement (§A10). The alternatives are documented but the term is not claimed here, and `glossary--option-space-mapping` must not take this engagement as evidence. Counts from other engagements must not migrate to it.
- **Declarative openings**, canonical terminology, no metaphor in sections that will be retrieved for task queries.
- **Every section must stand alone** as a retrieved chunk.

---

## A10. Open items

The list that reached the first draft of this brief ran to fourteen. Ten were answerable from the source material and have been resolved into §A3; two were anxieties the brief's own wording already handled; the last two have now been settled by the engagement lead. **Nothing here blocks writing or publication.** The record is kept so that nobody re-opens a closed question.

### Resolved from the source material — do not re-ask

| Was | Resolution |
|---|---|
| Is 231 screens or variants? | **Screen variants** — distinct states. The delivered frames are named as states (*Refraction complete*, *Switch user*, *Quantities complete*), a dozen or more per order type (G3). |
| Who specified the Fitting & Edging move, the status model, the login change, the rename? | **All four are Egma's**, in its own revision document, with its own reasoning. Three further decisions run the other way. Resolved in G45, G49, G52, G62, G63, and ruled on in §A4.7. |
| Which top-level status set shipped? | **Three groups — Order Processed, In Production, Delivery — across eleven steps**, not the four Egma proposed. Visible in the delivered order-detail frame (G49). |
| Was the ticketing system actually rebuilt? | **Yes.** The full Get Help area is walked through in the recordings: ticket-type cards, card and table views, filters by status and type, the order-change-request flow with type selection, order filtering, order confirmation, reason entry and submission (G5, G60). |
| Was there a tablet strand? | **No.** Scope was web plus native mobile. The iPad artefact is the *legacy* system, not a deliverable — my own confusion, now corrected. |
| Did PrimeReact constrain the design? | **No evidence that it did.** Named once in the requirements document as the existing library with custom components permitted, and mentioned in no recording. The delivered system is bespoke throughout. Keep it out of the case study. |
| Were the components adopted? | **Subsumed by G11.** The platform is built and online, which is a stronger statement than component adoption and makes the separate claim redundant. |
| Did a regulatory requirement shape the interface? | **None evidenced**, in any document or recording. The no-prices decision was commercial, not regulatory (G37). Leave `/contexts/regulated-products` alone and keep MDR out (§A8.2). |
| Are the 7,000 lens types and thousands of stores counted or stated? | **Client-stated** by nature — these are facts about Egma's business, not something Creative Navy counted. Labelled as such in G33 and G35. |
| Is the support-ticket story one incident or a composite? | **The question dissolves.** "The worked example the support team gave" (G25) is true either way, and that is the wording the brief already requires. |

### Standing notes, not questions

- **Option-space counts per challenge.** None are recorded. The brief already instructs: write the exploration without numbers and do not claim *option space mapping* (§A9). If counts turn up in the design files later they would unlock that term, but nothing is blocked without them.
- **Per-round participant numbers.** "17 optometrists across four rounds" is accurate as written, and §A3.2 already forbids attaching a number to an individual round. A per-round breakdown would be a small gain, not a correction.

### Both remaining items are now closed

1. **The heatmap instrument and surface — unknown, and treated as unknown.** The engagement lead confirms the heatmap is real tool output and does not have the tool or the surface on record. Rather than leave this hanging, the brief resolves it conservatively: the finding stands, the method does not, and §A4.2 requires the sentence saying so to travel with it. It routes to `/what-is-observed-but-not-quantified`, and because the surface cannot be established it may not be used as post-launch evidence — which settles §A6's outcomes ruling rather than leaving it contingent. **Nothing further is needed to write or publish.** If the tool ever surfaces and turns out to have run on the live platform, that is a revision trigger, not an open question.

2. **The procurement account — cleared at the reasoning level.** Publish the decision procedure and the CEO's verdict on it; withhold the price position, the detail of the internal disagreement, and the money-back offer. Written into G74 and governed by §A4.7.

### One thing that is not an open item

**Post-launch measurement.** None was provided and the brief is written to stand without it. If any appears — support-ticket volume above all, since that is the metric the engagement was implicitly designed against — it changes §A6 on outcomes pages and should trigger a revision rather than an addition. That is a trigger, not a question.

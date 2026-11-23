# AIT heat pump controller — full writing brief

> **Purpose.** Everything needed to write the AIT case study and to update the existing content corpus from it. Written to be handed to a writer with no access to the source material or the conversations that produced it.
>
> **This document is the case study brief only.** **§A3 is a numbered evidence bank** — every instruction here cites it by number, and the same A-numbers are used in the corpus integration brief. Do not introduce facts about this engagement that are not in §A3.
>
> **Corpus integration lives elsewhere.** Everything that changes on other pages because of this engagement is in `corpus-integration-brief.md`, which covers all three recent engagements together. That file is the single source of truth for integration; this one is the single source of truth for the case study. The two share the evidence bank verbatim.
>
> **Companion documents:** `industrial-writing-brief.md` (the industrial process control engagement, prefix **E**) and `streetec-writing-brief.md` (Streetec / kntrl 2, prefix **S**). This engagement uses prefix **A**. Never let facts migrate between the three: they are different clients, industries and evidence classes.

---

# PART A — THE CASE STUDY

## A1. Handling rules

### A1.1 What may be named

**AIT may be named.** The client is AIT, a European manufacturer of residential and commercial heat pumps.

**Nothing else may be named.** Not the consumer brands the controller ships under, not the OEM customers, not the internal programme name for the new controller, not the product name of the controller it replaced, and no individual on either side.

| Do not use | Use instead |
|---|---|
| The two consumer brand names | "two of AIT's consumer brands", "the group's own brands" |
| OEM customer names | "OEM customers", "partner brands" |
| The new controller's programme name | "the new controller", "the controller" |
| The predecessor product's name | "the controller it replaced", "the previous generation" |
| Named individuals | role descriptors only — "AIT's project manager", "AIT's system engineering lead", "AIT's head of marketing" |

> **Flag for the engagement lead, not for the writer.** Naming AIT makes the two consumer brands findable in a single search, because AIT manufactures them. The brief is written to the rule as given; if the rule is meant to be a genuine screen rather than a courtesy, the client name has to go too. Raise once, then write to whatever is decided.

**Quotation is permitted**, attributed to role rather than person. See §A3.6 for the cleared set and §A4 for the transcript caveat.

### A1.2 What may not be shown

**No screenshots, wireframes or design images.** The corpus is text-only on documentation pages. Describe the designs in prose.

### A1.3 Dates

**Do not place the engagement in a particular year.** No years, no months, no seasons. Sequence and duration only — "eight one-week sprints", "five UX sprints then three UI sprints", "months after the engagement ended". The product has been in the market for some time; that durability can be implied through sequence without ever stating a date.

### A1.4 Status

The product **shipped and is in the market**, in a touch-only hardware configuration, as the design Creative Navy delivered. This is the strongest status of the three recent engagements and may be stated plainly. What may **not** be stated is any performance, efficiency, commissioning-time, error-rate or commercial figure — see §A4.

---

## A2. The engagement in brief

AIT makes heat pumps. Every heat pump it sells carries a controller: the panel on the unit through which an installer commissions the system and an owner operates it. AIT was replacing that controller with a new one built around a roughly five-inch colour display.

Creative Navy designed the interface across **eight one-week sprints** — discovery and requirements inside the block, then **five UX sprints and three UI sprints** — delivering **29 screens**, a clickable prototype of the most complex flow, a design system, and the interface in **three complete brand themes**. Creative Navy then supported AIT's engineering team through **five months of implementation**. The controller reached market months after the engagement, as the delivered design.

The hardware requirement that shapes everything: **every interaction had to work identically through a rotary push-button and through an optional touchscreen, and the concept had to survive the removal of either one.** It shipped with one of them removed.

---

## A3. Evidence bank

### A3.1 Engagement record — stateable as fact

- **A1** — Fixed-scope engagement of eight one-week sprints: discovery and requirements, then five UX sprints and three UI sprints. The UX sprints ran home screen; home iterations and commissioning flow; commissioning flow and start-up screen; settings and list screens; feedback implementation. The third UI sprint was brand theming.
- **A2** — **29 screens delivered.**
- **A3** — A clickable prototype was delivered, covering the scenario-editing flow. That flow was chosen deliberately as the subject: Creative Navy identified it as the most complex and most contested interaction in the product, and the one where rotary-knob operation would be most laborious.
- **A4** — Creative Navy benchmarked **10 thermostat and heat pump control interfaces against 15 features** — scheduling by day and by interval, comfort modes, temperature offset, range setting, sensor calibration, date and time on the home screen, voice control, connectivity, mobile app, geofencing and physical buttons — plus a qualitative "remarkable features" review of individual products.
- **A5** — AIT supplied its own competitor visualisation, produced before the engagement began: **its own current controller plus six competitor systems, across nine interface themes** — hot water, refrigerant circuit, system, heating circuit, priorities, energy data, screed heating programme, time programme, and heating/cooling curve — with **76 screenshots** and links to competitors' public simulators.
- **A6** — Requirements were developed as a collaborative artefact: a screen-by-screen table pairing each Creative Navy question with AIT's written answer, with separate columns for content and user actions, Creative Navy's notes, and AIT's comments. It runs to roughly sixty pages. This is the same device used in the industrial and Streetec engagements and should be named as such.
- **A7** — A documented touch-target and legibility review, grounded in published literature — Fitts's law, a kiosk key-size and spacing study, fingertip dimension data, and a table of recommended character height by reading distance — converted into working minimums: a **12.5 mm (~92 px) minimum touch dimension**, **5 mm (~38 px) spacing between adjacent targets**, **20 mm (~148 px)** as the largest size that still improves accuracy, and an **80 px minimum touch area** on a 4/8 px baseline grid. The review states its own limit: secondary interactive elements cannot always meet the ideal minimum.
- **A8** — **Five generations of wireframes**, with superseded sets retained in the file and explicitly banner-marked as discarded, pointing to the current iteration. The sequence runs layout sketches, then three sprint sets, then a final set.
- **A9** — The interface was delivered in **three complete themes**: two of AIT's consumer brands and a neutral OEM theme. Brand difference is confined to colour. Structure, layout and components are identical across all three.
- **A10** — A design system: a typography scale on a single typeface (headings at 48/44 bold down to extra-small text at 14/20), a **24 px icon set of roughly forty icons** and a **48 px set**, each icon labelled in both of the languages used during review; and a component library covering home widgets and their states, alerts in default and collapsed form, keyboard keys, progress-indicator tabs, a breadcrumb trail, a scenario timeline, week-day and value selectors, a circle loader and a serial-number input.
- **A11** — Interaction animations delivered for widget focus and pressed states.
- **A12** — **Implementation Partnership: five months of support to AIT's engineering team during development**, consisting of **three scheduled progress meetings at which the state of the development was shared and compared against the delivered designs**, and **eight support tickets answered**.
- **A13** — The controller **reached market months after the engagement**, in a **touch-only hardware configuration**, and **Creative Navy compared the shipped interface against the delivered designs: it is the design that was delivered.**

### A3.2 Client-reported — unquantified

- **A14** — AIT reports that the feedback it received from dealers and partners was much better than expected. **No figures were provided and none may be invented or implied.** See §A4 for the required wording.

### A3.3 What did not happen — must be stated, not omitted

- **A15** — **There was no user research.** No installer interviews, no contextual inquiry, no observation in the field, no usability testing, no personas built from research. The two personas — installer/service, and end user — were supplied by AIT in the requirements table. The evidence base for this engagement was competitive benchmarking (A4, A5), the collaborative requirements work (A6), published human-factors literature (A7), and four recorded working sessions with AIT's own engineers.
- **A16** — **Creative Navy could not operate the system it was replacing.** AIT's simulator of the existing controller could not be shared, for licensing reasons. Creative Navy also had no installer-level access, so everything behind the access PIN was unobservable; AIT later supplied keyboard shortcuts that opened installer and service access in the simulator, which is also how a **third** access role — service, distinct from installer, with rights to make more critical settings — came to light during the engagement rather than in the brief.

### A3.4 The hardware and the operating context — AIT-stated

- **A17** — A colour LCD of roughly five inches at 800×480, landscape. Not finally fixed at kick-off: the panel choice depended on price and availability from the hardware manufacturer, and AIT said plainly it could change.
- **A18** — A rotary push-button mounted centrally below the display, roughly **90 steps per revolution**: turn to move, press to confirm, press for three seconds to return to the home screen. A ring of LEDs around the knob indicates system status including faults.
- **A19** — A physical Back button, and a second physical button whose function was undecided — candidate: Info. **No Home button**, by decision; the three-second knob press does that job.
- **A20** — **Touch was optional throughout.** If the touchscreen were dropped from the specification, the whole concept had to remain operable on the knob. In the other direction, AIT anticipated touch-only units within a few years, and already exports the interface to a web server and to a simulator, where no hardware buttons exist at all.
- **A21** — Operating modes: heating, cooling, domestic hot water, pool, photovoltaics, and ventilation (not yet supported at the time). **Only one heat-generating mode runs at a time**; photovoltaics and ventilation can run alongside one. Between one and seven modes may be installed. **Most installations are heating and hot water only.**
- **A22** — **Four access levels** in AIT's own structure: end user, installer, service, factory. Installer and service are entered by PIN and time out automatically.
- **A23** — Commissioning is split in two: an **installer assistant** and a separate **end-customer assistant**. The reason is physical — at a building site there is usually no network, so the installer cannot enter a Wi-Fi password, and the owner must complete that part later.
- **A24** — A **start-up self-test screen** lists the internal boards, inverters and fans the controller has detected. It exists for service technicians to spot a missing component — AIT's own analogy is a PC BIOS screen. It **cannot be skipped**: if components are not found within the window, the controller enters a special operating mode. It can only be hidden, and a route back to it had to be designed.
- **A25** — **21 interface languages.** No Fahrenheit. No zoning: the controller holds one temperature per circuit, and room distribution is handled downstream by a separate room unit.
- **A26** — **Units are produced brand-neutral and may not know their brand at first power-up.**
- **A27** — AIT's controller structure specification ran to roughly **900 nodes across eleven levels of hierarchy**, in German. It **changed during the design block**: in one revision a single operating-mode setting became four, one per heating and mixing circuit.
- **A28** — AIT's stated position that access restriction is a legal requirement as well as a practical one: not everyone may change every setting, and settings an installer makes must survive after the installer leaves the house. **Attribute this to AIT's framing; it is a client-stated belief, not a verified regulatory finding.**
- **A29** — The scale of the settings space the new interface had to absorb, from the previous generation's own published documentation: roughly **135 commissioning parameters**, each carrying a factory setting, an adjustable range, a step size and a required access level; and **98 numbered fault codes**. Parameters are hidden from view depending on both access level and the heat pump variant the software detects. Use generically — "the controller it replaced" — never with the product name.

### A3.5 AIT positions that drove design decisions

- **A30** — On the installed base: *"we trained thousands and thousands of installers to our current concept… one feedback was not to change the settings too much because all installers are used to it, and if you change it… we have many calls because they don't find items in the settings… installers are maybe often older installer men who don't want to learn new things."*
- **A31** — On legibility, reviewing a wireframe at physical size: *"if you looked at it in almost the real screen size, the smaller text size… is really, really small. And if I think about a heat pump installer, an old man with his glasses, maybe he's not so amused."*
- **A32** — On brand neutrality: *"the interface should be neutral because we are selling under [two brands] and also have OEM customers which have their own brand"*; and *"it can also be possible that we don't know the brand, because the heat pumps are produced brand-neutral, and when you power it up it maybe doesn't know its brand."*
- **A33** — On a single interaction grammar: *"every selection we made or setting we made must be usable by both methods"*; and *"I would prefer one system which can be applied in every situation."*
- **A34** — On future hardware, at kick-off: *"maybe in the future in two or three years the company decides to move along and only use touchscreen… we can use the same software and don't have to update the UI concept."*
- **A35** — On rendering performance: *"most users will use this for navigation, and currently the users are handling the rotary knob very quickly… the scrolling of the tiles must also be fast."* And, on how to resolve it: *"maybe we should focus on what's the best looking interface and best user experience. And if there are performance restrictions, we can check that afterwards."*
- **A36** — On deferring the help system: *"we don't plan to implement the information feature because we don't have the information texts for all menu points… there are hundreds of menu points, and writing the information takes quite a long time."*

### A3.6 Design decisions and the reasoning behind them

**Home screen**

- **A37** — AIT's own sketch proposed a **circular** home layout. Creative Navy built it as a wireframe to show why it fails: circles waste space on a five-inch screen and would force content off the home screen entirely. **Rectangular widgets adopted.** The rejected alternative was produced, not argued away.
- **A38** — **Equal-size widgets that resize to the number of installed modes**, rather than a fixed layout with a centred selection. One to four modes fit with no horizontal scrolling at all — which covers the overwhelming majority of installations (A21). A centre-focus "tumbler" pattern was explored for larger installations, at AIT's suggestion from a competitor product.
- **A39** — Widget content cut to **three pieces of information** each, directly in response to A31.
- **A40** — A defined set of widget status indicators: **in focus** (selected by the knob) is a black outline; **mode active** is a flashing icon; **mode queued** — the heat pump is being asked for a mode while running another — carries its own icon.
- **A41** — Alerts **overlay** the widgets rather than pushing the layout down: more prominent, keeps the system and scenario controls where the user expects them, and avoids a scroll transition the hardware may not render smoothly (A35).
- **A42** — The status bar is **informational only** — not touchable, not reachable by the knob. Two reasons, both load-bearing: making it interactive would force knob users to traverse it to reach content, and its targets are too small to touch reliably at physical size. The single exception is the alert banner, which has a large enough area to be selected.
- **A43** — The back control was moved **out of the status bar** to a touchable position below it, so that it works on hardware with no physical buttons — the web server, the simulator, and any future touch-only unit (A20, A34).
- **A61** — An explicit **empty state** for the scenario area, prompting the user to configure one, rather than a blank panel on a system running without timers.

**Value entry — the central interaction problem**

- **A44** — Value editing resolved as **one pattern for every value type**. With the knob, the whole field is selected and then rotated to change the value; with touch, the same control is operated directly. Plus and minus buttons were dropped in favour of a single scroll selector, after AIT pointed out that 0.1° increments would mean pressing plus twenty times to move two degrees. The decisive argument was consistency, not elegance: one pattern applied everywhere rather than a different component depending on how many options a setting has or how long its labels are.
- **A45** — **Save and cancel per page, not per value**, and shown only once a change has been made — so a user can change several values on a screen and commit once. Replaces a model in which some screens saved automatically and others required confirmation.
- **A46** — Numeric and alphanumeric entry (serial number, hydraulic code, IP address) uses **per-digit scroll selection rather than a full keyboard** — because it works identically on knob and touch, and because the values include hexadecimal digits, and a keyboard offering 0–9 and A–F confuses non-expert users. AIT's opening position was a keyboard; the position changed during the call. Both components were specified for the UI phase so that the decision remained reversible.
- **A47** — Text entry (circuit names, mode names, Wi-Fi passwords) uses a **full keyboard in a full-screen modal that hides the top bar**, purely to maximise key size.

**Settings and commissioning**

- **A48** — The settings structure was kept **close to the one installers already know** (A30), with two additions for orientation: a **breadcrumb trail**, and a **unique numeric identifier on every menu item** so that support staff can direct an installer to a setting by number over the telephone.
- **A49** — A **role-selection step before PIN entry**, rather than access switching buried inside the settings tree as it was in the previous generation.
- **A50** — Mode and feature selection **moved before the commissioning assistant** rather than sitting inside it — reversing the order in AIT's structure document — so that the assistant knows in advance what it has to cover, can show a progress bar from the first step, and never has to ask "do you want to install heating?" one mode at a time.
- **A51** — The commissioning **progress bar is status only, not interactive**. Making it swipeable, which would be natural on touch, would force knob users to traverse the whole bar before reaching each screen's content.
- **A52** — Leaving commissioning part-way produces an explicit **save progress / discard / return** choice rather than silent loss.
- **A53** — Hydraulic-diagram code entry with a **skip path** into the manual commissioning flow for installers who do not have the code.
- **A54** — The screed-heating programme designed as **stages with a target temperature and a duration each**, plus a stage graph showing where the programme currently is — because the list of stages alone did not communicate that the system steps through them over days.

**System area**

- **A55** — The refrigerant-circuit diagram labelled with **temperatures rather than pressures**: pressure is ambiguous (there is more than one kind, and it would have to be qualified every time) and temperature is what an installer reads. The full value table sits behind an **info button**, so the diagram carries the picture and not the data.
- **A56** — The system overview built as **widgets consistent with the home screen** rather than a single diagram with a second bar, and the heat pump illustration replaced with an **abstract symbol** so that one icon covers every unit type rather than needing a new drawing per product.
- **A57** — The system tile on the home screen is a **single target**, not a tile containing separately clickable items — because nesting targets inside a tile is punishing to reach with a rotary knob.
- **A58** — The **info button deferred** to a later release (A36), with the hardware button showing the system overview in the meantime. Creative Navy argued against long-press as the touch affordance on two grounds: nothing on screen would signal that it is available, and long-press on the knob already carries two functions — acknowledging a fault and returning home. The proposal for when help texts exist is an info icon shown beside the items that have one.
- **A59** — Energy monitor and consumption history: **two layouts offered for each**, with data export and a designed error state for a missing storage device.
- **A60** — The priorities screen reworked to carry **both the order of modes and the minutes allocated to each**, after AIT identified that the benchmark-derived design handled only the minutes.

---

## A4. Evidence calibration — mandatory

**A1–A13 are engagement record and may be stated plainly, but they are not outcomes.** "29 screens were delivered" is a fact; "29 screens transformed the product" is not.

**A13 is the strongest evidence in this engagement, and it is Creative Navy-verified.** Required framing:

> The controller reached the market months after the engagement ended. Creative Navy compared the shipped interface against the designs it had delivered: the product ships as the design that was delivered. It ships in a touch-only hardware configuration.

Three things must **not** be attached to it. Do not claim Creative Navy caused the hardware decision — the move to touch-only was AIT's. Do not describe the shipped product's performance, reception or sales. And do not treat "it shipped as designed" as evidence that the design is good; it is evidence that the design survived development, which is a different and separately interesting claim.

**A12 must be described at its actual weight.** Five months is the duration; three scheduled progress reviews and eight support tickets is the substance. That is a review-and-support partnership, not embedded day-to-day oversight, and writing it as the latter would be false. Written accurately it is still the fullest Implementation Partnership of the three recent engagements, and — because the reviews compared the build against the designs — it is the mechanism that explains A13 rather than leaving design fidelity to chance.

**A14 — the commercial claim — requires this wording or close to it:**

> AIT reports that feedback from its dealers and partners was much better than expected. This is client-reported and unquantified: no figures were shared, and Creative Navy has not independently verified it.

Never convert this into a satisfaction score, a sales figure, a market-share claim or a comparison.

**A15 must appear in the case study, not be quietly omitted.** This engagement contains no user research and no usability testing. The honest statement is that the design was reasoned from competitive benchmarking, a collaborative requirements process with AIT's own engineers, published human-factors literature, and the constraints of the hardware — and that it was not validated with installers or owners before release. Omitting this would misrepresent the engagement and would break the corpus's own evidence standards.

**A16 is a limitation of the engagement, stated as one.** Creative Navy designed a replacement for a system it could not operate. That is worth describing because of how it was handled, not despite it.

**A28 is a client-stated belief about the law.** Attribute it. Do not assert a regulatory requirement on AIT's behalf.

**A29 comes from publicly published documentation of the previous generation**, described generically. It is background scale, not an audit finding: Creative Navy did not review that product's interface as a deliverable, and nothing here may be written as though an expert review had been performed.

**The transcripts are machine-generated.** Wording is reliable in substance but not quote-grade for unusual terms and proper nouns. The quotes in §A3.5 have been checked and are safe as written, with bracketed substitutions where a brand name was spoken. Any further quotation must be verified against the source first.

**The external research in §A8 frames the category, not this product.** No study cited there measured this controller. Any phrasing that implies otherwise is false.

### What must not be claimed

- Any efficiency, energy, commissioning-time, error-rate, support-call, training or throughput figure.
- Any sales, revenue, unit, growth or market-share number.
- Any usability or comprehension result. Nothing was tested with users.
- Any field research, persona research, installer interview or contextual inquiry.
- Any regulatory credential. AIT's product is subject to several regimes; Creative Navy certified to, audited against, and worked to none of them.
- Any safety claim. The controller governs comfort and efficiency, not a safety function.
- Anything about gloved use, sunlight readability or night operation. This engagement provides no evidence for any of them.

---

## A5. Positioning — the angles worth leading with

### A5.1 One interface, two input devices, and neither one guaranteed — lead with this

Every control in this product had to work identically through a rotary push-button of roughly ninety steps and through a touchscreen that might be deleted from the specification (A18, A20). This is not "touch with a keyboard fallback". It is a single interaction grammar that must degrade to either input alone.

AIT's position was explicit at both ends. Touch might go, for cost. Equally, touch-only units were anticipated within a few years, and the interface was already being exported to a web server and a simulator where no hardware buttons exist at all (A34). So neither input could be assumed, and neither could be privileged.

Almost every significant decision in the engagement falls out of that constraint, and the decisions are unusual because of it:

- Plus and minus buttons — the obvious touch pattern — were **removed**, because the knob cannot address them without three separate presses, and because 0.1° increments make them absurd anyway (A44).
- The status bar was deliberately made **non-interactive**, because anything interactive in it would have to be reachable by the knob, and nobody should have to rotate through chrome to reach content (A42).
- The commissioning progress bar was made **non-interactive** for the same reason, even though swiping it is the natural touch gesture (A51).
- The back control was moved **out of** the status bar into a real touch target, against the grain of the hardware the product then had, because other hardware was coming (A43).
- The system tile was kept a **single target** rather than a tile containing smaller ones, because nesting targets is punishing on a knob (A57).
- Numeric entry went to **per-digit scroll selection** rather than a keyboard, specifically because that control behaves the same under both inputs (A46).

Each of those is a decision to give up something that would be better for one input in order to keep one grammar for both. That is **tension-driven reasoning** and **constraint respecting** applied to a structural problem, and it is rare enough in this product category to be worth stating as a competitive vector.

**It is also the only angle here with a verified payoff.** The product shipped touch-only (A13). The input device the whole concept was built to survive without was, in the end, the one that stayed — and the other went. The design shipped unchanged. Designing for an input model that might change is usually an argument made on principle; here it was tested by events.

### A5.2 Designing a replacement for a system you cannot run

Creative Navy could not operate the controller it was replacing: the simulator could not be shared for licensing reasons (A16). The specification in its place was a roughly nine-hundred-node, eleven-level mind map in German (A27). Creative Navy had no installer access, so behaviour behind the PIN was unobservable — and that is how a third access role surfaced mid-engagement, revealed only when AIT handed over the shortcuts that opened it (A16, A22).

The response was the requirements table (A6): a screen-by-screen artefact that converted an unrunnable specification into answerable questions, with Creative Navy's open questions and AIT's written answers sitting side by side. This is **the blanks phenomenon** handled structurally — the structure document recorded what settings exist, and could not record what they do, what their legal values are, or what happens when you change one.

It is also a clean illustration that **a specification is not a system**. The structure itself moved under the design: in one revision a single operating-mode setting became four, one per circuit (A27). Design against a moving specification is **progressive specification**, and this engagement evidences it better than most.

### A5.3 A legacy you are not allowed to break

Creative Navy regrouped AIT's flat settings list into logical areas and was asked to put it back. AIT's reason is one of the most candid statements of this constraint in the corpus: thousands of installers have been trained on the existing structure, changing it generates support calls, and *"installers are maybe often older installer men who don't want to learn new things"* (A30).

The resolution is the interesting part, because it is neither capitulation nor override: the structure stayed recognisable, and two things were added that cost nothing in familiarity — a breadcrumb trail for orientation, and a unique numeric identifier on every menu item so that a support agent can direct an installer to a setting by number over the phone (A48). The improvement was delivered in the dimension the constraint did not occupy.

This is **constraint respecting** applied to an installed base of *people* rather than of code. It pairs directly with the Streetec engagement, where mode names were inherited from the market rather than invented, and the two together make the concept legible in a way either alone does not.

### A5.4 A chassis with no brand

One structure, three colour themes, with brand difference confined to colour and never to layout (A9). The sharpest fact in this angle is not the theming, though — it is that **a unit leaves the factory not knowing its brand** (A26, A32). A controller that may not know whose logo it is wearing at first power-up cannot have a branded welcome screen; the logo Creative Navy had placed there had to come out and be replaced with nothing.

Around that sit 21 interface languages (A25), which means no label can be laid out tightly, and an OEM theme that has to look deliberate rather than unfinished. The design system (A10) is what makes three themes a configuration rather than three design jobs.

### A5.5 Legibility and rendering as design inputs, not as polish

Two constraints that most case studies treat as finishing concerns were load-bearing here.

**Legibility.** Reviewed at true physical size, the secondary text in the home widgets was too small for the people who would read it — and AIT said so in terms of a specific person, an older installer wearing glasses (A31). The response was structural: widget content was cut to three pieces of information each (A39), not made bigger within the same layout. Behind that sits a documented literature review with working minimums (A7).

**Rendering.** AIT's engineers raised that installers spin the rotary knob fast, and that horizontal scrolling would have to keep up (A35). Creative Navy's answer was to design the common case out of the problem: widgets that resize to the number of installed modes, so that one to four modes — the overwhelming majority of installations — never scroll at all (A38, A21). The expensive interaction was kept for the rare configuration rather than optimised for the common one.

### A5.6 Deferring a feature honestly

The hardware info button had no content behind it: AIT had hundreds of menu points and no help texts written for them, and writing them was a longer job than the controller release could wait for (A36). Three ways of handling that would have been wrong — ship the button doing nothing, ship it with partial content, or design a long-press affordance nobody could discover.

What was done instead: the button shows the system overview until the texts exist, long-press was argued against on the record because nothing would signal it and because long-press on the knob already carries two functions, and the eventual pattern — an info icon beside the items that have help — was specified so that the feature can arrive without a redesign (A58).

This belongs in the buying guidance as much as the case study. It is a worked example of designing the deferred state of a feature rather than leaving a hole.

---

## A6. Classification and filing

```
## Classification

- **Primary case-study category:** /evidence/case-studies/embedded
- **Primary context:** /contexts/embedded-devices-and-constrained-interfaces
- **Also-relevant contexts:** /contexts/consumer-and-multi-market-products, /contexts/expert-tools-and-internal-systems
- **Connects to:** /situations/complexity/software-too-complex-for-users, /situations/growth-and-product-strategy/legacy-system-holding-back-roadmap, /situations/growth-and-product-strategy/training-burden-is-too-high, /situations/delivery-and-execution/design-does-not-survive-development, /failures/state-visibility-failures/users-cannot-see-what-state-the-system-is-in, /failures/state-visibility-failures/mode-changes-are-unclear, /failures/workflow-failures/tasks-span-too-many-screens-or-steps, /capabilities/design-direction-for-legacy-to-modern-transitions, /capabilities/information-architecture-for-expert-systems, /capabilities/state-and-status-visibility-design, /capabilities/cognitive-load-reduction, /practices/state-and-transition-review
```

**On the primary context.** The tagging convention chooses primary context by dominant design challenge, not by industry. The load-bearing problem here is delivering a complete commissioning and operating interface on a five-inch 800×480 panel where every interaction must work identically through a rotary encoder and an optional touchscreen — so embedded devices is primary. Multi-market sits as also-relevant on the strength of 21 languages, three brand themes and an OEM channel; expert tools on the strength of four access levels and a settings space of the scale in A29.

**No structural change is required.** `/evidence/case-studies/embedded` already exists and holds the smart-home controller and industrial HMI studies. Every slug above resolves against the current repository. Run `python3 Guidance-meta-layer/lint_case_studies.py <repo>` after the notes file is written, as Step 8.5 requires.

**On outcomes pages.** This engagement populates **no** `/evidence/outcomes` page. Those pages require a grounded, specific result with its evidential basis stated. Nothing was measured here. A13 belongs in `/evidence/evidence-standards/what-we-have-measured` only if that page is willing to hold a verified design-fidelity comparison rather than a performance measurement — otherwise it belongs in the case study alone. A14 belongs in `what-is-client-reported`.

**Phase mapping — confirmed by the engagement lead.** Discovery and the first two UX sprints compressed **Sandbox Experiments** and **Concept Convergence**; UX sprints three to five and the three UI sprints were **Iterative System Building**; the design system and the three brand themes are **Organizational Integration**; and the five months of engineering support are **Implementation Partnership** (A12). All five phases are claimable in this engagement — which is not true of either of the other two recent studies, and is worth noting in the method pages.

---

## A7. Suggested structure for the case study

1. **Opening** — locked agency sentence; AIT and what a heat pump controller is, in two sentences; the hardware in one; the eight-sprint shape and the 29 screens.
2. **What the controller actually has to do** — commission a machine and then operate it for twenty years; two populations with opposite needs (A22, A23); the scale of the settings space (A29); one mode at a time but one to seven installed (A21); the start-up self-test that cannot be skipped (A24).
3. **The constraint that shapes everything** — A5.1. The rotary knob, the optional touchscreen, and the requirement that the concept survive the removal of either. Lead the section with it.
4. **Designing against a specification you cannot run** — A5.2. The simulator that could not be shared, the nine-hundred-node structure, the requirements table, the access role that appeared mid-engagement.
5. **What was explored** — the circular home layout built in order to be rejected (A37); equal-size versus centred widgets (A38); two energy-monitor layouts and two system-overview layouts (A59, A56); five wireframe generations with the superseded sets kept and marked (A8).
6. **The decisions** — value entry as the centrepiece (A44, A45, A46, A47), then the status bar and progress bar held back from interactivity (A42, A51), the back control moved for hardware that did not exist yet (A43), the commissioning reorder (A50), the refrigerant circuit (A55).
7. **The installed base** — A5.3. The settings structure, the breadcrumb, the numbered menu items.
8. **Three brands and no brand** — A5.4.
9. **Reading it at arm's length** — A5.5. Legibility at physical size, three pieces of information per widget, and rendering performance designed out of the common case.
10. **What was deferred, and how** — A5.6.
11. **What shipped** — A12 and A13, with the §A4 framing. Describe the implementation support at its real weight, and make the connection: three reviews comparing the build against the designs is *why* the shipped product matches them. Close on the touch-only configuration and what it demonstrates about the dual-input discipline.
12. **Evidence and limits** — the engagement record, A14 with its qualification, and an explicit statement of A15: no user research, no usability testing, and what that means for what this case study does and does not establish.

---

## A8. Domain framing and external research

**Creative Navy did not certify to, audit against, or work to any standard named here.** These establish that the writer understands the domain. Any phrasing implying compliance work is false. Equally, none of the studies below measured this product; they describe the category it enters.

### A8.1 Why controller interfaces matter in this category — the strongest external frame

The parameters a heat pump controller exposes are, measurably, the ones most often set wrongly in the field.

- A field study of **1,023 heat pumps monitored over two years across ten European countries** found 17% of air-source units falling below European efficiency standards and 10% oversized; within its on-site inspection subset, **41% had the heating curve set too high, 36% had night mode inappropriately activated, and 26% had thresholds set too high**. Every one of those is set through the controller interface. (Brudermüller et al., *Nature Communications*, 2025, doi:10.1038/s41467-025-58014-y)
- Across **3,995 air-to-water heat pumps**, **84.42% of heating curves could be improved**, for an average **4.02% reduction in annual energy consumption**. (*Applied Energy* vol. 389, art. 125725, 2025)
- A government-commissioned usability study of **five smarter heating controls with 72 participants** set a task-completion benchmark of 70%; **none of the five reached 50%**, meaning most attempted tasks ended in failure. None met the satisfaction benchmark or the System Usability Scale benchmark either. The named barriers were complex schedule setup, lack of error prevention, iconography and information architecture, **difficulty identifying system state**, and **lack of confirmatory feedback**. Age effects on completion rate, time on task and satisfaction were statistically significant. (Wall and Healy, *Usability testing of smarter heating controls*, Amberlight for the UK Department of Energy and Climate Change, URN 13D/339, Open Government Licence)

That third study also found that the controls which **did** meet the efficiency benchmark were the ones that moved involved tasks off the wall unit and onto a web or phone interface — which is independent support for the cross-device allocation principle the Streetec engagement arrived at for profile names.

The age finding corroborates A31 with measured data: the concern AIT expressed about an older installer reading small type is a documented effect in this exact product category, not a stylistic preference.

### A8.2 Regulatory and standards vocabulary for the domain and topic pages

- **EU temperature control classes I–VIII** under the Ecodesign and energy labelling package. The control's own capability sets its class, and the class carries an efficiency bonus of between 1% and 5% at package level — weather compensation with a room sensor on a modulating source is Class VI at +4%, multi-zone regulation is Class VIII at +5%. Relevant because the heating-curve screens in this engagement are the interface to exactly that capability, and because A25 records that this product does not do zoning.
- **§14a EnWG.** Since the start of 2024, German heat pumps drawing more than 4.2 kW must be dimmable by the grid operator, with a guaranteed 4.2 kW floor, in return for a reduced grid fee. This is the regulatory driver behind the smart-grid step in the commissioning flow, and it creates a genuine interface problem worth naming: a device a third party can throttle has to be able to explain to its owner why it is not doing what was asked.
- **EN ISO 52120-1:2022**, which replaced EN 15232, classifies building automation and control systems into efficiency classes A to D. The natural standards anchor for a building automation page.
- **ISO 9355**, parts 1–4, ergonomic requirements for displays and control actuators on machinery — part 3 covers control actuators, which is the only place in the corpus's standards vocabulary that speaks to rotary controls directly. **ISO 9241-303** and **ISO 9241-125** cover display legibility and visual presentation.
- **Euro NCAP's 2026 rating scheme** scores the presence of physical controls for nine functions within its driver engagement assessment. Not a heat pump standard, but the clearest public evidence that the assumption of touch displacing physical controls has reversed — useful on the touch-and-buttons page, and relevant to the Streetec study as well.

### A8.3 Verify before using

- The claim that only 23% of consumers can successfully set a heating schedule traces, in search, only to Creative Navy's own published blog. **Find the primary source or use the DECC study above instead**, which is fully verifiable and stronger.
- Figures on the German heating-trade skills shortage — unfilled positions, vacancy duration, fitters needed to meet national heat pump targets — appear in commercial recruitment sources. **Find a trade-association or institute primary source** before using them the way the EURES data is used in the industrial brief.

### A8.4 Consistency requirement

Creative Navy already publishes a heat pump controller UX benchmark drawing on the same research base and benchmarking seven manufacturers. **The case study must not contradict it, and the two should cross-reference.** Check its figures against this brief before publishing.

---

## A9. Style and lexicon compliance

Non-negotiable items from the writing guide:

- **Open with the locked agency sentence**, verbatim, on first introduction.
- **Attribute the method on first use in every self-contained section**: "Creative Navy's Critical Systems Design method", thereafter "Critical Systems Design" within that section. Never "the method", "our approach" or "the framework" as the primary reference in a section that has not yet named it.
- **Never use "the agency", "the consultancy" or "we"** as the primary identifier in a passage that must stand alone when retrieved.
- **British spelling**, except the phase name *Organizational Integration*.
- **Sprint = cadence (one week here). Phase = a stage of the method.** Never equate them. "Eight one-week sprints" is correct; "the UX phase" is not.
- **Name the phases.** All five are claimable here (see §A6) — unusual, and worth saying.
- **Use at least three of the five core requirements**: evidence-aware thinking, multi-perspective synthesis, lateral exploration, tension-driven reasoning, organic system building.
- **Proprietary vocabulary used accurately in context, not defined.** Natural fits: *constraint respecting* (A5.1, A5.3), *blanks phenomenon* (A5.2), *progressive specification* (A27), *tension-driven reasoning* (A44), *domain learning* (A5, A6, A7), *competitive vector* (A5.1, attributed and in context), *performance in reality* (A5.5).
- **Declarative openings**, canonical terminology, no metaphor on sections that will be retrieved for task queries.
- **Every section must stand alone** as a retrieved chunk.

---

## A10. Open items

1. **The naming rule.** Named client, unnamed brands — see the flag in §A1.1. Settle before publication.
2. **No option-space counts exist** for this engagement. Do not estimate one, and do not let Streetec's counts migrate to it. The documented alternatives in A8, A37, A38, A56 and A59 are what the lateral-exploration claim rests on.
3. **One working session is not transcribed** — the final UX review before the UI phase. Its decisions are not in the evidence bank. Do not infer them.
4. **The three UI sprints have no recorded discussion.** The design system, the typography scale, the icon set and the three brand themes are evidenced by the delivered files (A9, A10) but not by any record of how the decisions were made. Describe what was delivered; do not reconstruct reasoning.

---

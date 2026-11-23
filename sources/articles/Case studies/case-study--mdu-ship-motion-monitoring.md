# MDU ship motion GUI — full writing brief

> **Purpose.** Everything needed to write the MDU case study. Written to be handed to a writer with no access to the source material or the conversations that produced it.
>
> **This document is the case study brief only.** **§A3 is a numbered evidence bank** — every instruction here cites it by number, and the same M-numbers are used in the corpus integration brief. Do not introduce facts about this engagement that are not in §A3.
>
> **Corpus integration lives elsewhere.** Everything that changes on other pages because of this engagement is in `corpus-integration-brief.md`, which covers all four recent engagements together. That file is the single source of truth for integration; this one is the single source of truth for the case study. The two share the evidence bank verbatim.
>
> **Companion documents:** `industrial-writing-brief.md` (the industrial process control engagement, prefix **E**), `streetec-writing-brief.md` (Streetec / kntrl 2, prefix **S**) and `ait-writing-brief.md` (AIT heat pump controller, prefix **A**). This engagement uses prefix **M**. Never let facts migrate between the four: they are different clients, industries and evidence classes. In particular, Streetec's option-space counts and testing results belong to Streetec alone, and the industrial engagement's field observations belong to it alone.

---

# PART A — THE CASE STUDY

## A1. Handling rules

### A1.1 What may be named

**The product may be named: the MDU.** It is a ship motion monitoring system — a sensor unit that measures vessel movement and a graphical interface that presents it on the bridge. Creative Navy designed the interface.

**The manufacturer is not named in the copy.** Use "the manufacturer" as the default descriptor, and "the MDU's manufacturer, a Danish sensor manufacturer" where a first-mention gloss is needed. Do not rotate descriptors.

| Do not use | Use instead |
|---|---|
| The manufacturer's company name | "the manufacturer", "the MDU's manufacturer" |
| The marine panel PC's brand and model designation | "the marine panel PC", "the certified marine panel" |
| The sensor's product designation | "the motion sensor", "the MDU's own sensor" |
| Named individuals on either side | role descriptors only — "the manufacturer's engineers", "the project lead" |
| The external advisor's name | "the external advisor", "a serving master and chief engineer advising the manufacturer" |
| The named development agencies that were briefed | "the development agencies the manufacturer was considering" |

> **Flag for the engagement lead, not for the writer.** Naming the MDU identifies the manufacturer in a single search, because they publish the product under that name. The brief is written to the rule as given — product named, manufacturer not — and that rule is a courtesy rather than a screen. If the manufacturer may also be named, every instance of "the manufacturer" can be replaced in one pass and the writing gets better for it. Raise once, then write to whatever is decided.

**Quotation is permitted**, attributed to role rather than person. See §A3.9 for the cleared set and its attribution map, and §A4 for the transcript caveat.

### A1.2 What may not be shown

**No screenshots, wireframes or design images.** The corpus is text-only on documentation pages. Describe the designs in prose.

### A1.3 Dates

**Do not place the engagement in a particular year.** No years, no months, no seasons. Sequence and duration only — "five sprints, two UX then three UI", "after the design reviews", "by the time the product reached the fleet". The product has been in service for some time; that durability can be implied through sequence without ever stating a date.

### A1.4 Status

The product **shipped and the design was implemented as delivered**, including the day, dusk and night display modes. This may be stated plainly, with the calibration in §A4. What may **not** be stated is any fuel, safety, cargo-loss, alarm-response, fleet-size or commercial figure attributed to the design — see §A4.

---

## A2. The engagement in brief

The MDU measures how a ship moves. A sensor unit built around the manufacturer's own inertial sensors records roll and pitch continuously and feeds a bridge display, so that a crew can see how hard the vessel is working, how close it has come to the limits set for it, and whether to change course or speed. The stated purpose in the manufacturer's own specification is optimised fuel consumption, general ship safety, and avoiding loss of cargo.

Creative Navy designed the interface across a fixed-scope engagement of **five sprints — two UX sprints followed by three UI sprints** — delivering **18 screens across 45 versions**, a clickable prototype, a design system, and the interface in day, dusk and night modes. Creative Navy then handed the design over formally, **briefed each of the third-party development agencies the manufacturer was considering** so that each could pitch on a common understanding of what had been designed, and supported implementation. The product shipped as the design that was delivered.

Three things define the problem. The display is a **15-inch certified marine panel at 1024×768, operated by touch alone** — there is no keyboard and no mouse anywhere on the ship. **Nobody can say where the unit will be mounted** or where the person reading it will be standing. And the system is **forbidden to act**: it may alarm and nothing more, because a system that initiated any process would require approval from several institutes.

---

## A3. Evidence bank

### A3.1 Engagement record — stateable as fact

- **M1** — Fixed-scope engagement: **five sprints — two UX sprints, then three UI sprints.**
- **M2** — **Four-person team:** UX designer, UI designer, product designer, project manager.
- **M3** — **18 screens delivered, across 45 versions in total.**
- **M4** — A **clickable prototype** was delivered.
- **M5** — A **formal handover of the design** was carried out.
- **M6** — Creative Navy **briefed each of the third-party development agencies the manufacturer was considering**, so that each could pitch its services to the manufacturer on a common understanding of the delivered design. This is distinctive and has no equivalent in the other three recent engagements.
- **M7** — **Implementation support was provided.** *(See §A10 open item 4 — its duration and substance are not recorded, so it must be stated at that level and no further.)*
- **M8** — **Documented option-space exploration.** Genuine alternatives, not revisions of one proposal:
  - **4 navigation patterns** — bottom navigation bar; icon-only sidebar; icon-and-label sidebar; hamburger menu.
  - **3 status-bar treatments** — status bar above a hamburger menu; short status bar paired with bottom navigation; status bar with the navigation placed inside it.
  - **4 dashboard layouts** — a card per movement type; cards with a show-more toggle; one maximised view with the remaining movements as information to its sides; a main card with small modules.
  - **6 iterations of the pitch-and-roll dashboard**, varying scale ratio, the placement of the numeric cells, and the position of the vessel illustration relative to its scale.
  - **4 alarm presentations** — full message in the status bar; truncated messages for multiple alarms; a single message plus a count; a pop-up over the content.
  - **2 value-editing patterns** — a bottom modal and a full-screen modal.
  - **8 UI design explorations** — dark, light, and blue-saturated directions, with and without a water-level treatment inside the dial, and variants on logo and indicator colour.
- **M9** — Competitive benchmarking of marine bridge and motion-monitoring interfaces, with the benchmark board carrying systems from eleven vendors across vessel motion monitoring, conning and alarm management, helm and trim control, and fleet condition monitoring. Video studies were made of a helideck monitoring system's helideck, log and security views. Separately, reference studies were made of aircraft attitude indicators and analogue instrument gauges, and of event-log and timeline patterns from outside marine. *(The vendor set is documented on the board; no benchmarking methodology or feature-comparison count is recorded — see §A10 open item 6.)*
- **M10** — Requirements were developed as a **collaborative artefact**: a screen-by-screen table pairing module, screen, content, user actions and priority with Creative Navy's open questions and the manufacturer's answers and comments. The same device used in the industrial, Streetec and AIT engagements, and it should be named as such.
- **M11** — A documented **touch-target and legibility review**, grounded in published literature — Fitts's law, and MIT Touch Lab fingertip dimensions of 16–20 mm as reported in Yablonski, *Laws of UX* — converted into working minimums for this specific panel at approximately **3.35 pixels per millimetre**: a **13 mm (44 px) minimum touch dimension**, **6 mm (20 px) minimum spacing between adjacent targets**, **20 mm (68 px)** as the largest size that still improves accuracy, an **8 px baseline grid** chosen as a common divisor of 1024 and 768, and a resulting **48 px minimum touch area**, with an element 48 px tall specified to exceed 48 px in width. The review states its own dependency: the safe minimum also depends on the quality of the touchscreen, since lower-quality panels resolve the contact point less precisely and need more applied pressure.
- **M12** — A **design system**: a dark theme on a single typeface, a semantic token set covering background, text, stroke and surface elevation, status colours in red, amber and green against a blue brand colour, and a component library covering the alarm bar and alarm pop-up, log rows, tabs and tab buttons, menu items, radio buttons, checkmarks, tooltips, a numeric keypad, a full keyboard, and text fields in a complete state matrix.
- **M13** — **Iconography at 24 px, 16 px and 12 px**, and **six vessel types illustrated from two angles each** — bulk carrier, RORO, tanker, container ship, cruise ship and military vessel — for use as the rotating vessel image.
- **M14** — The interface was delivered with **day, dusk and night display modes**, and those modes shipped.
- **M15** — **The product shipped, and the design was implemented as delivered.** Verified by Creative Navy's engagement lead. See §A4 for required framing.

### A3.2 The hardware and operating context — documented

- **M16** — A **15-inch certified marine panel PC at 1024×768**, active display area 305.13 × 229.1 mm, pixel pitch 0.2947 mm, 400 cd/m² brightness, 700:1 contrast, 16.2 million colours at 8 bits per colour, projected-capacitive touch, IP65-sealed front, rated −15 to 55 °C, with a backlight dimmable from near 0% to 100% and five capacitive keys on the bezel including ECDIS day, dusk and night mode switching. The panel carries IEC 60945 4th edition, DNV 2.4 and IACS E10 certification and ECDIS colour calibration compliance. **These are properties of the panel the manufacturer selected. Creative Navy did not certify to, audit against, or work to any of them.**
- **M17** — **Touch only.** In the manufacturer's own words: *"The display is a 15'' inch touch display. There will be no mouse or keyboard on the ship."*
- **M18** — **Two units per vessel, running an identical interface**: one on the bridge for the navigator and/or captain, one in the engine control room. *"Every instance of the GUI is going to be the same."*
- **M19** — **Where the unit sits relative to its reader cannot be predicted.** *"That's very hard to predict… They will be wherever there's space physically on the bridge. So nobody knows."*
- **M20** — The MDU itself: one to three inertial sensors combining gyroscope, accelerometer and magnetometer, with onboard processing, delivering data to the interface over **Modbus TCP at 1 Hz**, with an SSH interface available. Historical data is retained on the MDU unit, not on the machine running the interface.
- **M21** — The manufacturer's own corporate material recorded the MDU in service on **65 large container ships**, with a further 75 container ships and 12 newbuilds planned, and most newbuilds taking **two units — one to record whole-ship motion and one to record crew comfort**, because accommodation is being placed in new positions on some new vessels. **Manufacturer-stated, from their own sales material. Not a Creative Navy outcome and not evidence of one.**

### A3.3 The regulatory and functional boundary — manufacturer-stated

- **M22** — The system alarms and does nothing else, by deliberate choice: *"Only alarm, if we where to launch a process our system would need to be approved by several institutes."*
- **M23** — *"We are not allowed to control the ship in any capacity. All actions based on the GUI data are made by the captain."*
- **M24** — Alarm severity, in the manufacturer's own calibration: *"the alarms are not critical as in, if you don't act now, we are all going to die… It's more sort of a comfort and cargo, cargo and crew safety thing. Where if you're rolling 40 degrees and you can do something about it, everybody will be a lot happier and a lot better rested tomorrow."*
- **M25** — Expected response to an alarm: change course, change speed, or a combination; deploy stabiliser fins; or consult shore-based advice. Nothing is actuated by the interface.
- **M26** — Features specified as **"build with these in mind, do not implement"**: remote viewing and remote settings change; hogging, sagging and twisting; parametric roll detection and warning; heave, sway and surge.

### A3.4 What did not happen — must be stated, not omitted

- **M27** — **There was no user research.** No observation on a bridge, no interviews with crew, no contextual inquiry, no usability testing, no researched personas. The user-side evidence base for this engagement was **one external advisor — a serving master and chief engineer, present in the review calls** — together with the manufacturer's own engineers, the written specification, the competitive benchmarking in M9, and the published human-factors literature in M11.
- **M28** — **Creative Navy never used the system at sea.** The MDU is an installed shipboard system; the interface was designed against the specification, the Modbus register map and the manufacturer's answers, not against observed use.
- **M29** — **One of the three recorded calls has no transcript, and none exists.** Whatever was settled in it is not in this evidence bank and must not be inferred or reconstructed.
- **M30** — Several of Creative Navy's open questions in the requirements table were never answered in the available material: what message the watchdog alarm should display and what the user can do about it; whether default alarm thresholds exist and whether users should be able to reset to them; how many decimal places ship length should carry and what its minimum and maximum should be; which keyboard component would be used; and what units track hogging, sagging, twisting, heave, sway and surge. The questions are documented; the answers are not.

### A3.5 Design decisions — the scale problem

- **M31** — **Roll is drawn 1:1** up to approximately ±40–45° and maxes out beyond that, *"like a speedometer"*. The reasoning is operational rather than graphical: *"If you roll more than 45 degrees, then you will not be looking at the screen, you'll be screaming in terror."*
- **M32** — **Pitch cannot be drawn 1:1.** A ship a few hundred metres long is physically bounded near ±10° of pitch, because waves are not large enough relative to the hull to produce more. At 1:1 on a 15-inch panel that movement is imperceptible — trim is typically within a couple of metres on a 200 m vessel. Two amplification ratios were built and compared: **4:1**, where 10° is drawn as 40° so that the pitch dial matches the roll dial visually, and **2:1**, where 10° is drawn as 20° for a more realistic vessel angle. Pushing further was rejected by the advisor: drawing 10° as 45° *"will look silly."*
- **M33** — **Amplification collides with physics, and the collision was resolved by removing an element rather than by drawing a false relationship.** With a waterline drawn across the visualisation, an amplified pitch angle makes the vessel appear to submerge: *"if I amplify this, then it looks like the ship is going underwater at the rear end and then drowning when it's tipping forward."* The water was taken out of the visualisation — *"avoid that to make the visualization more clear and not defy physics."*
- **M34** — **The pitch scale changed unit.** Where ship length is known, the pitch axis is expressed in **metres of bow movement** rather than degrees, because the angle understates the consequence: on a 200 m vessel, 3° is roughly 10 m of bow movement, and 10° roughly 35 m — *"That is a lot unrealistically a lot. It is not gonna be observed ever offshore."* Degrees remain the fallback unit when ship length has not been set, with the scale converted back.
- **M35** — **The sign convention drove the layout.** List to starboard is positive. With the roll dial on the right of the screen, the negative half of its scale fell at the top, which the advisor identified as a persistent irritation against the pitch dial beside it — *"it would be super annoying that have the positive value on the bottom side on one picture and then the negative values on the bottom side on the other."* The roll card and its scale were moved to the left of the screen so that both dials read consistently.
- **M36** — The dotted datum line was moved to the waterline of the vessel illustration — *"more or less where the colour of the vessel changes"* — before M33 removed the water entirely.

### A3.6 Design decisions — which value to put on screen

- **M37** — **The vessel illustration rotates on the 20-minute rolling average — trim and list — not on the instantaneous angle.** The manufacturer's reasoning: animating the live angle *"will just be too busy"*. Creative Navy put the cost of that choice on the record — under an alarm, the vessel image will not look like a dangerous situation, because it is showing the average. The decision stood, with the live value carried by the arrows instead.
- **M38** — **A three-arrow mechanism** carries the live reading the illustration no longer shows: a light arrow for the current position, two dark arrows marking the minimum and maximum of the rolling 20-minute window which the current value pushes outward and which retreat as the window rolls, and a shaded band between them showing the whole interval of movement — so that the reader can see how close the vessel has come to the alarm threshold without reading a number.
- **M39** — **The live "Now" value was removed from both cards.** *"that's just a number of flipping up and down constantly. It doesn't really add any value. You can look at the arrow and see close enough where you are. You don't need that as a decimal point."* The four numeric cells on each card became **minimum, maximum, period and maximum velocity**, in a single row, for pitch and roll alike.
- **M40** — **Pitch period was added**, to the design and then to the specification. The original specification carried roll period only.
- **M41** — **Because the live value is not on screen, the alarm does not bind to it — and should not.** The instantaneous value leaves the alarm band seconds after entering it. Alarm state binds to the rolling maximum and minimum instead: an alarm means the vessel was outside its threshold at some point within the last twenty minutes. *"That means that sometime within the last 20 minutes you are outside the alarm level."*

### A3.7 Design decisions — the alarm model

- **M42** — **Acknowledge replaced Clear.** The specification required alarms to persist until manually cleared. Creative Navy argued in review that a Clear control had no function, because nothing done on the screen changes the state of the ship. The advisor supplied the bridge convention in its place: the alarm flashes red, *Acknowledge* means "I have seen it", the indication then holds solid red, and it clears itself when the condition is no longer present. *"When you click acknowledge, it's turned solid red and it stays like that until it's cleared."*
- **M43** — **A pop-up carrying the alarm text and the Acknowledge control was chosen over making the flashing value itself the target.** The deciding argument was discoverability, raised by Creative Navy against its own more elegant alternative: *"how would a user who never seen the GUI know where to tap?"* The pop-up also carries a line of explanatory text that a flashing number cannot.
- **M44** — **Self-clearing does not lose the record.** An alarm that clears itself before anyone acknowledges it is retained in the log behind a count badge, where an acknowledge-all is available: *"if there's 200 alarms, then you just go acknowledge all and then move on with your day."*
- **M45** — **The system does not persist in challenging a decision already taken.** The manufacturer's position, and the reason the alarm clears itself rather than demanding resolution: *"if the captain decide to just push the ship on, then our system should not kind of challenge that decision and just go back into normal sailing."*
- **M46** — **The multi-alarm format was modelled on phone notification behaviour**, at the manufacturer's request — full text for a single alarm, truncated text when several are active, full descriptions in the log. *"I like the first one because we recognize that's from our phones."*
- **M47** — **Alarm ordering is chronological**, with an explicit forward provision: parametric roll detection becomes the highest-priority alarm once implemented, and an alarm-versus-warning distinction will be needed at that point. Neither was built.
- **M48** — **Timestamps were deliberately kept out of the alarm pop-up** and placed in the log instead. With self-clearing bound to the 20-minute window, the most recent alarm can never be more than twenty minutes old, so a timestamp at the point of reading adds nothing.
- **M49** — **The status bar was reduced to a logo and an alarm count**, green when there are no alarms and red when there are. Ship name and clock were both rejected: the crew know which vessel they are on, and the display's clock is not synchronised to ship's time, making it *"an inconsequential time for them."*

### A3.8 Design decisions — navigation, settings and the log

- **M50** — **Bottom navigation was chosen over both sidebars and a hamburger menu**, for two reasons that are specific to this product rather than general preference. First, M19: because the unit's position relative to its reader cannot be predicted, a sidebar correct for someone standing to the left of the screen forces someone standing to the right to reach across the display and cover it. Second, the scarce resource in this layout is horizontal space, not vertical — the vessel illustration is long, and the dials need width. The hamburger was rejected for costing an extra click when vertical space was not under pressure.
- **M51** — **Future movement types were given a screen of their own behind a fourth navigation item**, rather than being compressed onto the dashboard. The alternative — a small card for every movement type on one screen — was built and rejected because it drives the numbers below a legible size at this panel size: *"you have to make sure that every text on the screen is legible, so that brings in the need to hide some of the numbers."*
- **M52** — **Settings sit on a single screen with no scrolling**, at the manufacturer's explicit request: *"I really would like to avoid scrolling. I like it all to be in one picture."*
- **M53** — **View by default, with an Edit control gated by a four-digit numeric PIN rather than a password.** The purpose is accident prevention, not security — *"we don't want people to accidentally change it, that's the primary concern"* — and a numeric keypad gives larger targets than a full keyboard on a touch panel: *"the individual numbers will be bigger so it's easier to press."*
- **M54** — **Value editing opens as a bottom modal rather than a full-screen one.** It reads as changing a value in place rather than moving to a new screen, and it maximises the area the user can tap to dismiss.
- **M55** — **Scrub and slider inputs were rejected for numeric entry on a touch panel** — *"the roll where you have to like click with a finger or move it and get the precise value is going to be hard on a touch screen"* — in favour of a number pad on every numeric field, modelled on the segmented entry pattern used for the IP address.
- **M56** — **Two classes of offset with different permission models were separated.** A mounting offset, set once because the sensor is installed slightly out of true, sits behind the PIN. Draught readings entered by the crew before departure do not, because they change every voyage. The reasoning behind continuous correction rather than one-time calibration: *"it's better to assume that the draft readings always are as close as we get to the truth and then offset the sensor accordingly,"* because *"you have bending and twisting and torsion and stuff going on in real life."*
- **M57** — **Vessel type is selected from a predefined list rather than uploaded**, with one illustration per type used for every vessel of that type and two views of each. The setting stays changeable, because a unit may be transferred to another vessel or the type may be set wrongly before shipping.
- **M58** — **The log was split into three: an alarm log, an event log of settings changes with before and after values, and a timeline.** Alarm and settings records are kept indefinitely, because the data is small and because the value is as an index into the raw sensor record rather than as a record in itself: *"there was an alarm here, and then pull the MDU data out and then know where to look for the data."*
- **M59** — **The timeline covers roll, pitch, list and trim over 48 hours**, and its limit was identified during review rather than after: at 1 Hz with a roll period of tens of seconds, 48 hours of roll data renders as *"a harmonica just completely squished together"*, so a shorter window with scrolling is required. This was not resolved in the recorded material.
- **M60** — **Chart tooltips were questioned on touch precision** rather than on display quality — the advisor's term was *"sausage fingers"* — and pinch-to-zoom was declined as implementation cost. A tap-to-read-value interaction was specified instead.
- **M61** — **Yaw was dropped.** The specification named roll, pitch and yaw as the primary metrics; the Modbus register map carried no yaw register; and the manufacturer's own answers were uncertain whether it could ever be shown reliably. Creative Navy raised the discrepancy in the requirements table, and the review settled it by removing the yaw card.
- **M62** — **The specification changed because of the design reviews.** The revision issued after them added the four draught inputs and the offset derivation that M56 required, added pitch period (M40), added ship breadth, added event logging and data logging, and promoted 48-hour data logging from a "nice to have" left out for cost reasons into the main specification. The design process is what produced those changes.

### A3.9 Quotes cleared for use — attribute to role only

The quotes in §A3.3, §A3.5, §A3.6, §A3.7 and §A3.8 are cleared. Attribute them as follows:

- The external advisor — *"a serving master and chief engineer advising the manufacturer"*, thereafter "the advisor": M24, M31, M32, M33, M35, M36, M39, M42, M48, M55, M59, M60.
- The manufacturer's team — "the manufacturer", "the manufacturer's engineers": M17, M18, M19, M22, M23, M37, M45, M46, M49, M52, M53, M56.
- Creative Navy's own position, usable as a statement of method: M43.

**The transcripts are machine-generated.** Wording is reliable in substance but not quote-grade for unusual terms and proper nouns — the raw transcript renders "parametric roll" as "paramedic role", "log" as "lock" and "roll and pitch" as "Roland Pits". The quotes above have been checked and are safe as written. Any further quotation must be verified against the source first, and no quotation may be taken from the untranscribed call (M29).

---

## A4. Evidence calibration — mandatory

**M1–M14 are engagement record and may be stated plainly, but they are not outcomes.** "18 screens across 45 versions were delivered" is a fact; "18 screens transformed the product" is not.

**M15 is the strongest evidence in this engagement, and it is Creative Navy-verified.** Required framing:

> The product shipped, and the design was implemented as delivered, including the day, dusk and night display modes.

Three things must **not** be attached to it. Do not describe the shipped product's performance, reception, fleet penetration or commercial result. Do not treat "it shipped as designed" as evidence that the design is good — it is evidence that the design survived development, which is a different and separately interesting claim. And do not attach a mechanism that is not recorded: unlike the AIT engagement, where three scheduled build-versus-design reviews explain the fidelity, the shape of implementation support here is not documented (M7), so the fidelity is stated and not explained.

**M21 is manufacturer-stated sales material and must be framed as such.** Fleet numbers were recorded in the manufacturer's own corporate deck, describe the sensor product rather than the interface, and predate the interface reaching vessels. They may be used to establish that this is a product in real service at scale. They may never be used as an outcome, a growth figure, or anything the design is claimed to have caused.

**M27 must appear in the case study, not be quietly omitted.** This engagement contains no user research and no usability testing. The honest statement is that the design was reasoned from the written specification, a collaborative requirements process with the manufacturer's engineers, competitive benchmarking, published human-factors literature, and the judgement of one serving master and chief engineer present in the reviews — and that it was not tested with crews before release. Omitting this would misrepresent the engagement and would break the corpus's own evidence standards.

**The single external advisor is a strength and a limit, and should be written as both.** Most of the sharpest decisions in this engagement — the roll scale, the sign convention, the acknowledge model, the rejection of over-amplified pitch — came from one practitioner in the room. That is a real mechanism and it produced real corrections. It is also n=1, and the manufacturer said so themselves: *"there's as many solutions as there are dialogue systems out there… as many opinions as there are captains for sure. But we only have one captain."* Write it that way.

**M16 describes the panel, not Creative Navy's work.** IEC 60945, DNV 2.4, IACS E10 and ECDIS colour calibration are certifications held by hardware the manufacturer selected. Creative Navy did not certify to, audit against, or work to any of them. Any phrasing implying otherwise is false.

**M14 is a delivered and shipped feature, not a compliance claim.** Day, dusk and night display modes were designed and shipped. Whether the palettes correspond to the ECDIS colour tables is **not established** (§A10 open item 2). Until it is, write "day, dusk and night display modes" and never "ECDIS-compliant colour modes".

**M22–M26 are manufacturer-stated positions.** Attribute them to the manufacturer's framing. In particular, the type-approval boundary (M22) is the manufacturer's account of why the product does not act; it is not a verified regulatory finding about what would or would not require approval.

**M26 is a list of features that were not built.** Nothing in this engagement designed parametric roll detection, hogging, sagging, twisting, heave, sway, surge or remote access. What was designed is a layout that reserves a place for them and an alarm model that anticipates their priority. Say exactly that.

**Design decisions (M31–M62) describe what was designed.** Never imply they produced a result.

### What must not be claimed

- Any fuel, emissions, voyage, cargo-loss, container-loss, alarm-response, error-rate or time-saving figure.
- Any sales, revenue, unit, fleet-growth or market-share number, including M21 used as any of those things.
- Any safety outcome or safety-critical credential. The manufacturer states plainly that the system is deliberately non-actuating and that its alarms are comfort, cargo and crew-safety alarms rather than immediate-danger alarms (M24).
- Any regulatory or type-approval credential, for the interface or for the panel it runs on.
- Any usability or comprehension result. Nothing was tested with users (M27).
- Any field research, bridge observation, crew interview, persona research or contextual inquiry (M27).
- Any claim that Creative Navy designed parametric roll detection, structural monitoring, or any of the deferred features in M26.
- Any claim about gloved-hand use. This engagement provides no evidence for it.
- Any claim about sunlight-readable display engineering. The panel's brightness and dimming range are documented (M16); no luminance specification, transflective technology, optical bonding or anti-reflective treatment was designed or evaluated.

---

## A5. Positioning — the angles worth leading with

### A5.1 Two instruments that cannot share a scale — lead with this

Roll and pitch are the same kind of measurement and they cannot be drawn the same way. Roll runs to ±40° and should be shown 1:1, because that is how the physical instruments on a bridge behave and because beyond 45° nobody is reading a screen (M31). Pitch is bounded near ±10° by the length of the hull, which means that at 1:1 the most consequential movement on a large vessel is invisible at 15 inches (M32).

Amplifying pitch is the obvious answer, and it immediately produces a worse problem. Drawn against a waterline, an exaggerated bow-up angle shows a ship whose stern is underwater — a picture that is both alarming and false (M33). The resolution is the interesting part, because it is neither "amplify anyway" nor "show it truthfully and accept it is invisible": the **water was removed from the visualisation**, so that the dial could exaggerate the angle without asserting a relationship to the sea that was not true. And the **scale changed unit** (M34): once ship length is known, pitch is expressed in metres of bow movement rather than degrees, because 3° on a 200 m hull is roughly 10 m of movement, and metres are what makes the number mean something to the person reading it.

This is **tension-driven reasoning** with a worked outcome, and it is the clearest instance of it in the corpus: legibility, physical truth and operational meaning in direct conflict, resolved by changing what is drawn and what unit it is drawn in rather than by compromising between them.

### A5.2 Deleting the live number, and what that forced

The most obvious element on a real-time motion display is the current value, and it was removed. The advisor's objection was not aesthetic: *"that's just a number of flipping up and down constantly. It doesn't really add any value"* (M39). A digit that updates every second on a rolling vessel is a source of attention cost, not information. What replaced it is a three-arrow mechanism showing current position, the rolling 20-minute minimum and maximum, and the band between them — so that the reader sees the shape of the vessel's movement and its distance from the alarm threshold at a glance, without reading anything (M38).

That single removal then propagated. If the live value is not on screen, the alarm cannot be bound to it — and on inspection it should not be, because the instantaneous value leaves the alarm band seconds after entering it. So the alarm binds to the 20-minute maximum and minimum, and an alarm now means something precise: *at some point in the last twenty minutes, this vessel was outside the limits set for it* (M41).

This is **performance in reality** as a design method rather than as a slogan — a decision taken on how a number behaves in the conditions it will be read in, not on what the data model contains.

### A5.3 An alarm model learned from the bridge, not read off the specification

The specification said alarms persist until manually cleared. Creative Navy's review position was that a Clear control had no function, since nothing done on the screen changes the ship. Both were wrong in the same way, and the advisor corrected both with the convention that already exists on bridges: flash red, **acknowledge** to mean *I have seen it*, hold solid red, and clear when the condition passes (M42).

Two refinements make it a designed model rather than an inherited one. Creative Navy argued its own more elegant alternative — tapping the flashing value — out of the design on discoverability grounds: *"how would a user who never seen the GUI know where to tap?"* (M43). And an alarm that clears itself before anyone sees it is not lost; it accumulates in the log behind a count, with acknowledge-all available there (M44).

The principle underneath it is the part worth leading the section with, because it is not an industrial story at all:

> *"if the captain decide to just push the ship on, then our system should not kind of challenge that decision and just go back into normal sailing."* (M45)

An advisory system that keeps asserting a condition the operator has already decided to accept is not providing oversight; it is providing noise that trains the operator to dismiss it. This is the same problem as meaningful human oversight of automation, in a setting where the authority structure is explicit and legally grounded, and it connects this engagement to the AI and automation cluster rather than isolating it in marine.

### A5.4 An instrument that is forbidden to act

The MDU alarms and does nothing else, and that is a design decision before it is a technical one: *"Only alarm, if we where to launch a process our system would need to be approved by several institutes"* (M22), and *"We are not allowed to control the ship in any capacity. All actions based on the GUI data are made by the captain"* (M23).

An interface whose entire function is to inform a decision it is forbidden to take has an unusual property: **everything it does is presentation, and presentation is therefore the whole product.** There is no automation to fall back on, no corrective action to design, no recovery path — only the question of whether the person reading it understands, in the conditions they are reading it in, what the vessel is doing and how close to its limits it has come. Almost every decision in §A5.1 to §A5.3 follows from that.

It is also the sharpest available framing of the type-approval boundary as a product-shaping constraint rather than a compliance overhead, and it belongs in the buying guidance as much as the case study.

### A5.5 A unit whose position nobody can predict

*"They will be wherever there's space physically on the bridge. So nobody knows."* (M19)

Two units per vessel, identical interfaces, one on the bridge and one in the engine control room (M18), mounted wherever a wheelhouse happens to have room. That kills the sidebar, because a navigation rail on the left is correct for a reader standing to its left and forces a reader standing to its right to reach across and cover the display. It also inverts the usual constraint: the scarce resource is horizontal space, not vertical, because the vessel illustration is long and the dials need width (M50).

This is **constraint respecting** applied to a physical unknown, and it is the direct sibling of the AIT engagement, where neither input device was guaranteed. The two make the concept legible in a way either alone does not: in one case the interaction model had to survive the loss of an input device, in the other the layout had to survive not knowing where the reader would stand.

### A5.6 The interface conversation rewrote the specification

The manufacturer's specification went through a revision after the design reviews, and the revision is a record of what the design process surfaced. It added the four draught inputs and the offset derivation formulae, because the review established that there are **two different offsets with different permission models** — a mounting offset set once, behind the PIN, and draught readings the crew enter before every departure, which cannot be behind it (M56). It added pitch period, because the specification had carried roll period only and the review established that both were wanted (M40). It added ship breadth, event logging and data logging, and promoted 48-hour data logging from a cost-driven "nice to have" into the main specification (M62).

Separately, yaw left. The specification named roll, pitch and yaw as the primary metrics, the register map carried no yaw register, and the manufacturer's answers were uncertain it could ever be shown reliably. Creative Navy raised the discrepancy in the requirements table rather than designing around it, and the review removed it (M61).

This is **progressive specification** and the **blanks phenomenon** evidenced better than in any other recent engagement, because the evidence is a version-controlled client document whose change log names the additions. It is also **triangulation**: a document, a register map and a client's spoken answers disagreeing, with the disagreement treated as the finding.

### A5.7 Briefing the agencies who would build it

At handover, Creative Navy briefed **each of the third-party development agencies the manufacturer was considering**, so that every one of them could pitch on a common understanding of what had been designed (M6).

This is unusual enough to be worth stating plainly. The design was not handed to a chosen implementer; it was explained to a field of candidates while the manufacturer was still choosing between them, which means the designer's account of the system became part of how the manufacturer evaluated the people who would build it. It is an Organizational Integration behaviour — the transfer of understanding rather than of files — in the one circumstance where it is most obviously load-bearing and least often done.

### A5.8 Designing for features that do not exist yet

Remote access, hogging, sagging and twisting, parametric roll detection, heave, sway and surge were all specified as *build with these in mind, do not implement* (M26). The resolution was structural rather than decorative: the future movement types were given a screen of their own behind a fourth navigation item, rather than being squeezed onto the dashboard — and the alternative, a small card per movement type, was built and rejected for driving the numbers below a legible size at this panel size (M51). The alarm model carries the same provision: parametric roll becomes the highest-priority alarm when it exists, and an alarm-versus-warning distinction will be needed at that point (M47).

Write this as what was designed, not as what happened. The honest claim is that the layout and the alarm model reserve a defined place for features that did not exist. Whether the product grew into that place is not established here (§A10 open item 7).

---

## A6. Classification and filing

```
## Classification

- **Primary case-study category:** /evidence/case-studies/marine
- **Primary context:** /contexts/embedded-devices-and-constrained-interfaces
- **Also-relevant contexts:** /contexts/high-consequence-environments, /contexts/expert-tools-and-internal-systems
- **Connects to:** /situations/complexity/system-state-is-hard-to-understand, /situations/risk-and-consequence/warnings-are-visible-but-not-actionable, /situations/risk-and-consequence/delayed-understanding-creates-risk, /situations/risk-and-consequence/the-system-supports-procedure-but-not-judgment, /failures/state-visibility-failures/users-cannot-see-what-state-the-system-is-in, /failures/interpretation-failures/data-is-available-but-hard-to-interpret, /failures/interpretation-failures/users-see-information-but-cannot-judge-what-matters, /failures/interpretation-failures/warnings-are-visible-but-their-meaning-is-unclear, /capabilities/state-and-status-visibility-design, /capabilities/warning-and-alarm-clarity-improvement, /capabilities/design-for-abnormal-and-degraded-scenarios, /capabilities/information-architecture-for-expert-systems, /practices/alarm-and-warning-evaluation, /practices/state-and-transition-review, /practices/design-governance-through-delivery
```

**On the primary context.** The tagging convention chooses primary context by dominant design challenge, not by industry. The load-bearing problem here is delivering a complete reading instrument on a 15-inch 1024×768 touch-only panel whose mounting position is unknown, where the scale itself is the hardest design decision — so embedded devices is primary, consistent with the two marine studies already in the corpus. High-consequence environments sits as also-relevant on the strength of the operating setting and the alarm model, but must be kept honest: the manufacturer's own calibration (M24) is that these are comfort, cargo and crew-safety alarms, not immediate-danger alarms, and nothing on that page may imply safety-critical or regulated-safety work. Expert tools sits as also-relevant because the reader is a master or watch officer reading an instrument against domain conventions the interface had to obey.

**No structural change is required for the case-study category.** `/evidence/case-studies/marine` already exists and holds two studies; this makes three. Every slug above resolves against the current repository. Run `python3 Guidance-meta-layer/lint_case_studies.py <repo>` after the notes file is written, as Step 8.5 requires.

**One structural question is open and is not the writer's to settle.** There is no `/contexts/` page for marine and maritime systems, and this engagement would be its strongest anchor alongside the two existing studies. Creating one triggers the context-change protocol — the gate must be re-run across the whole corpus in the same change set. See `corpus-integration-brief.md` §6 for the recommendation.

**On outcomes pages.** This engagement populates **no** `/evidence/outcomes` page. Those pages require a grounded, specific result with its evidential basis stated. Nothing was measured here. M15 belongs in the case study and in `evidence-standards--what-we-do-not-claim.md`; it does not belong in `what-we-have-measured`, for the same reason A13 does not — it is a fidelity verification, not a performance measurement.

**Phase mapping.** The five sprints map as follows: the two UX sprints compressed **Sandbox Experiments** and **Concept Convergence**, with the option-space work in M8 belonging to the first and the dashboard convergence to the second; the three UI sprints were **Iterative System Building**; the design system, the vessel illustration set and the formal handover are **Organizational Integration**, with the agency briefings (M6) as its most distinctive instance; and the implementation support is **Implementation Partnership**, claimable only at the weight M7 supports, which is thin.

---

## A7. Suggested structure for the case study

1. **Opening** — locked agency sentence; what the MDU is and what the interface has to do, in two sentences; the panel and the touch-only constraint in one; the five sprints, the 18 screens across 45 versions, and the shipped status.
2. **What a ship motion display actually has to do** — roll, pitch, list and trim; the 20-minute rolling window; why the numbers that matter are not the ones updating every second; the two units per vessel (M18) and the 1 Hz data feed (M20).
3. **The constraint that shapes everything** — A5.4. An instrument forbidden to act, and what that means for a design in which presentation is the entire product. Lead the section with M22 and M23.
4. **Two instruments that cannot share a scale** — A5.1. The centrepiece. Roll at 1:1, pitch bounded by hull length, the amplification collision, the water removed, the unit changed to metres.
5. **What was explored** — M8 in full. The four navigation patterns, three status-bar treatments, four dashboard layouts, six dashboard iterations, four alarm presentations, two value-editing patterns and eight UI directions, with what each group was testing rather than a list of counts.
6. **Taking the live number off a live display** — A5.2. M39, M38, then M41 as the consequence.
7. **The alarm model** — A5.3. Acknowledge against clear, the pop-up against the flashing value, the log as the place self-cleared alarms survive, and M45 as the principle.
8. **A unit nobody can place** — A5.5. M19 into M50, and the inverted space constraint.
9. **Reading it at 15 inches** — M11 in full: Fitts's law and fingertip dimensions converted into working minimums on a specific panel at a specific pixel density, including the review's own stated dependency on touchscreen quality. Then M53 and M55: a keypad rather than a keyboard, a number pad rather than a slider, both decided on target size.
10. **The specification that changed** — A5.6. The offsets split by permission model, pitch period added, yaw removed, and the revision that recorded it.
11. **What was deferred, and where it was put** — A5.8.
12. **Handover** — A5.7, then M15 with the §A4 framing. Close on what shipping as delivered does and does not establish.
13. **Evidence and limits** — the engagement record, and an explicit statement of M27 and M28: no user research, no usability testing, one external advisor, and what that means for what this case study does and does not establish.

---

## A8. Domain framing and external research

**Creative Navy did not certify to, audit against, or work to any standard named here.** These establish that the writer understands the domain. Any phrasing implying compliance work is false. Equally, none of the studies below measured this product; they describe the category it enters.

### A8.1 The alarm standards — and why the gap in them is the point

Maritime has its own alarm-management regime, and it is the right frame for §A5.3 precisely because **it does not apply to this product**.

- **IMO Bridge Alert Management**, performance standards adopted in resolution **MSC.302(87)**, implemented through **IEC 62923-1** and **IEC 62923-2**. It defines four alert priorities — emergency alarm, alarm, warning, caution — and splits alerts into categories by whether decision-support information is needed at a task station. New installations of navigation and communication equipment on SOLAS ships have had to conform since 30 August 2021.
- **IEC 62288**, presentation of navigation-related information on shipborne navigational displays, which supports IMO resolution **MSC.191(79)** as amended by **MSC.466(101)**, and which governs how navigational displays present information and alerts.

The MDU is not SOLAS navigation equipment and does not fall under either. **That is the frame worth using:** the acknowledge-versus-clear model in M42 had to be learned from a practitioner, because the standard that codifies exactly that behaviour for the equipment beside it on the same bridge does not reach a system that only advises. Write it as the observation it is — a designed interface converging on an established bridge convention by consulting someone who works to it — and never as conformance.

- **Marine Equipment Directive 2014/90/EU** and the wheelmark regime is the type-approval boundary M22 refers to. Equipment performing a SOLAS function requires conformity assessment through a notified body; an advisory instrument that actuates nothing does not. Use to frame M22 as the manufacturer's rationale, not as a verified regulatory finding.
- **IEC 60945** (maritime navigation and radiocommunication equipment — general requirements), **DNV 2.4**, **IACS E10** and ECDIS colour calibration compliance are held by the panel (M16), not by the interface.

### A8.2 Ship motion as a recognised failure mode

- **MSC.1/Circ.1228**, revised guidance to the master for avoiding dangerous situations in adverse weather and sea conditions, identifies synchronous and parametric roll motions among the worst situations a master can encounter and gives operational guidance for avoiding them. This is what parametric roll detection (M26, M47) refers to.
- **MSC.1/Circ.1627**, interim guidelines on the second generation intact stability criteria, with explanatory notes in **MSC.1/Circ.1652**, assesses five dynamic stability failure modes in waves — dead ship condition, excessive acceleration, pure loss of stability, parametric rolling and surf-riding — that the 2008 Intact Stability Code does not fully cover. Parametric rolling and excessive acceleration are both directly about the quantities this interface displays.
- **Container loss.** The World Shipping Council's annual report records **576 containers lost at sea in 2024**, up from a record-low **221 in 2023**, against a ten-year average of **1,274**. **Use these figures and not the manufacturer's own**, which circulate unsourced on their public pages and do not reconcile with the WSC series.

### A8.3 Why motion data matters commercially

- **IMO's Carbon Intensity Indicator** applies to ships above 5,000 gt, with the required rating tightened annually against a 2019 reference line — 5% in 2023, 7% in 2024, 9% in 2025, 11% in 2026. **FuelEU Maritime** set a maximum greenhouse-gas intensity for energy used on board from 1 January 2025, and **EU ETS** reaches 100% of covered emissions from 1 January 2026. A vessel must satisfy all three where each is in scope.
- Operation in waves imposes **added resistance**, so the same engine power yields less speed, and heavy weather is therefore a fuel problem before it is a safety one. This is why the manufacturer's specification names optimised fuel consumption as the first purpose of the interface. Use to frame the category; do not attach a savings figure to this engagement.

### A8.4 The workforce frame

- The **BIMCO/ICS Seafarer Workforce Report 2026** records a shortfall of **39,100 STCW-certified officers**, demand for certified seafarers up **35%** since 2021, and a need for **113,735 additional officers by 2030**. This is the marine counterpart to the EURES manufacturing data in the industrial brief, and it is the honest frame for an instrument that has to be readable without training. Use with care: nothing in this engagement measured training burden.

### A8.5 The competitive field

The benchmark board (M9) carries vessel motion monitoring, conning, alarm management, helm and trim control and fleet condition monitoring systems from eleven vendors. One of the video studies was a **helideck monitoring system built to CAP 437**, the UK Civil Aviation Authority standard for offshore helicopter landing areas, which specifies helideck motion limits in terms of pitch, roll, inclination and significant heave rate. That is a genuinely adjacent product — the same measurements, presented against externally defined operating limits — and it is worth naming as the nearest comparator rather than listing vendors.

### A8.6 Verify before using

- **ISO 8468**, ship's bridge layout and associated equipment, is the natural standards anchor for M19 and M50 — the question of where a unit is mounted and who can reach it. Confirm current status and scope before citing.
- Any claim about the physical meaning of a given roll angle for cargo securing would need the **CSS Code** and its annex on lashing accelerations. Do not assert a threshold-to-consequence relationship without it.

### A8.7 Consistency requirement

Creative Navy already publishes a marine embedded-GUI case study covering a vessel drive and energy management interface, and the corpus holds two further marine studies. **This case study must not contradict them, and the marine studies should cross-reference each other.** Check before publishing.

---

## A9. Style and lexicon compliance

Non-negotiable items from the writing guide:

- **Open with the locked agency sentence**, verbatim, on first introduction.
- **Attribute the method on first use in every self-contained section**: "Creative Navy's Critical Systems Design method", thereafter "Critical Systems Design" within that section. Never "the method", "our approach" or "the framework" as the primary reference in a section that has not yet named it.
- **Never use "the agency", "the consultancy" or "we"** as the primary identifier in a passage that must stand alone when retrieved.
- **British spelling**, except the phase name *Organizational Integration*.
- **Sprint = cadence. Phase = a stage of the method.** Never equate them. "Five sprints, two UX then three UI" is correct; "the UX phase" is not. No sprint length is recorded for this engagement, so do not state one.
- **Name the phases** per §A6, and do not claim Implementation Partnership beyond the weight M7 supports.
- **Use at least three of the five core requirements**: evidence-aware thinking, multi-perspective synthesis, lateral exploration, tension-driven reasoning, organic system building.
- **Proprietary vocabulary used accurately in context, not defined.** Natural fits: *tension-driven reasoning* (A5.1), *performance in reality* (A5.2), *constraint respecting* (A5.5), *progressive specification* and *blanks phenomenon* (A5.6), *triangulation* (M61), *option space mapping* (M8), *domain learning* (M9, M10, M11).
- **Marine terminology is canonical and must be used exactly.** Roll and pitch are the instantaneous angles; **list** is average roll and **trim** is average pitch. List to starboard is positive. Period is in seconds, angular velocity in degrees per second for roll and metres per second for pitch. Do not substitute "tilt", "lean" or "sway" — sway is a different movement entirely and is one of the deferred features in M26.
- **Declarative openings**, canonical terminology, no metaphor on sections that will be retrieved for task queries.
- **Every section must stand alone** as a retrieved chunk.

---

## A10. Open items

1. **One call has no transcript and none exists** (M29). Nothing from it is in the evidence bank. Do not infer its content, and do not let the gap be papered over with plausible reconstruction.
2. **The day, dusk and night palettes are not established as ECDIS colour tables.** M14 says the modes were designed and shipped. Whether their colour values correspond to the ECDIS day, dusk and night tables that the panel's certification covers is unknown. Until the lead confirms, write "day, dusk and night display modes" and never imply compliance. If they do correspond, this becomes the corpus's first genuine bridge night-operation evidence and the new night-operations page gains its anchor — see `corpus-integration-brief.md` §6.
3. **The naming rule is a courtesy, not a screen.** See the flag in §A1.1. Settle before publication.
4. **The shape of implementation support is not recorded** (M7). The AIT engagement is describable because its support has a shape — five months, three scheduled build-versus-design reviews, eight tickets. Without the equivalent here, M7 can only be stated at the level given, and M15 cannot be explained by a mechanism. If a record exists, it would materially strengthen both the case study and the design-governance page.
5. **The agency briefings need one detail** (M6): how many agencies, and whether the briefing was a single session or a series. The fact is distinctive enough to carry a sentence either way, but a count would make it citable.
6. **No benchmarking methodology is recorded** (M9). The vendor set is documented on the board; the number of systems formally compared, and against what, is not. Do not estimate one, and do not let AIT's "ten products against fifteen features" migrate to it.
7. **The deferred features now appear among the product's current capabilities.** Parametric, synchronous and resonance roll detection, structural monitoring and dynamic trim are the M26 list. Whether the structure Creative Navy designed accommodated them, or whether the product was restructured to fit them, is not established and is exactly the question `/evidence/longitudinal` exists to answer. **Do not write it as a durability claim.** Raise it with the lead as a candidate for that page later.
8. **Five of Creative Navy's open questions were never answered** (M30). If answers exist in email, they would close genuine gaps — particularly the watchdog alarm, where the question was what the user can actually do about it, and the interface currently tells them to restart the unit and contact IT support.

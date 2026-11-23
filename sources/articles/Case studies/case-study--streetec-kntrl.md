# Streetec / kntrl — full writing brief

> **Purpose.** Everything needed to write the Streetec case study and to update the existing content corpus from it. Written to be handed to a writer with no access to the source material or the conversation that produced it.
>
> **Part A** is the case study. **Part B** is the corpus integration. **§A3 is a numbered evidence bank** — every instruction in both parts cites it by number. Do not introduce facts about this engagement that are not in §A3.

---

# PART A — THE CASE STUDY

## A1. Handling rules

### A1.1 What may be named

**The client and the product may be named in full.** Streetec GmbH, a German manufacturer based in Höchst, and the product **kntrl 2** — the second generation of Streetec's kntrl control system for aftermarket automotive air suspension. This is a shipped product in the market, so naming it carries no confidentiality problem.

Name it **kntrl 2** on first mention, with "the second generation of Streetec's kntrl control system" as the gloss, then "kntrl 2" thereafter. The generational fact is load-bearing, not incidental — see §A5.7.

**Individuals must not be named** unless there is absolutely no way to write the passage otherwise. Use role descriptors: "Streetec's founder", "a Streetec engineer", "the product owner". The functional specification carries an author's name and the call recordings have two client participants — none of them should appear.

**Verbatim quotation of the client is permitted.** This is important, because the strongest material in the engagement is spoken rather than written. Quotes are reproduced in §A3.6 and may be used as given. Attribute them to the role, not the person — "Streetec's team put it plainly", "as one of Streetec's engineers described it".

### A1.2 What may not be shown

**No screenshots, wireframes or design images.** The corpus does not use them on documentation pages, and this engagement is no exception. Describe the designs in prose.

### A1.3 Dates

**Do not place the project in a particular year.** No years, no months, no seasons. Sequence and duration only — "three UX sprints followed by three UI sprints", "after the design phase". The product has been in the market for some time; that durability can be implied through sequence without ever stating a date.

### A1.4 Status

The product **shipped and is in the market**. That is a material difference from most of the corpus and may be stated plainly. What may *not* be stated is any commercial figure — see §A4.

---

## A2. The engagement in brief

Streetec makes aftermarket air suspension for cars. The system replaces conventional steel springs with air bellows at each corner, letting the driver raise or lower the vehicle — for ride comfort, for ground clearance over obstacles, or to drop the car to the floor at a show.

**kntrl 2** is the second generation of Streetec's control system for it. It has three parts:

- an **ECU**, which drives eight valves (one to inflate and one to deflate each of four bellows), monitors bellows and tank pressure plus optional height sensors, and runs the compressor;
- an **HMI**, a capacitive 4.3-inch touchscreen at 480×800 in portrait, mounted in the centre of the dashboard;
- a **mobile app** connected over Bluetooth.

Creative Navy designed the HMI interface across **three UX sprints followed by three UI sprints**, delivering **23 screens**. The product then went through user testing with **32 participants using the real product in real cars**, after which Creative Navy supported the client's engineers through implementation. The product shipped.

---

## A3. Evidence bank

### A3.1 Engagement record — stateable as fact

- **S1** — Six one-week sprints: three UX, then three UI.
- **S2** — Five-person team: UX designer, UI designer, product designer, interaction designer, project manager.
- **S3** — 23 screens delivered.
- **S4** — Unstructured competitive benchmarking of three competing products.
- **S5** — Requirements were developed as a collaborative artefact: Streetec's own functional specification reorganised into a two-column table pairing each Creative Navy question with Streetec's written answer, function by function.
- **S6** — Documented option-space exploration: **nine iterations of the main screen** varying one axis — how much pressure control is exposed directly — grouped as three with all controls visible, five with some hidden, one with none. Plus **three iterations** of the height-versus-pressure display problem, **two** settings architectures, **two** approaches to the ECU backlighting control, and **two** Bluetooth pairing models.
- **S7** — An early internal check of the wireframes with two Creative Navy colleagues, one with no knowledge of cars and one with some. **This is an internal design check, not user research, and must always be labelled as such.**
- **S8** — Implementation support: a kickoff session with Streetec's engineers and one further session four weeks into development. Nothing beyond that.
- **S9** — The product shipped and is in the market.

### A3.2 Measured by Creative Navy — the strongest evidence in the engagement

- **S10** — After the design phase, the designs were tested in **two sessions with 32 participants in total**, using the **actual product installed in a car**:
  - **13 participants** in Munich, all tuning enthusiasts and car owners;
  - **19 participants** at a trade fair in Spain, a mixed sample — approximately 25% owners and enthusiasts, 40% dealers, 30% installers, 5% other.
- **S11** — **Creative Navy designed the protocol, ran the sessions and analysed the data.** Streetec prepared the vehicle and the on-site logistics and recruited the participants. This division should be stated openly — it is good practice, not a weakness.
- **S12** — Each participant attempted **three tasks with no instruction given**. Completion was measured and time taken was recorded. **All participants completed the tasks, performing in line with expectations.**
- **S13** — Each participant then took part in a **15-minute debrief** capturing opinions and subjective impressions.
- **S14** — What the testing established: the **information architecture held up**, the **interactive elements held up** — participants worked out how to change settings through the interface unaided — and the **aesthetics were well received** on subjective rating.
- **S15** — What the testing produced: **small changes to the transitions between screens**, and a **backlog of possible future features** which Streetec chose to stage over a longer horizon rather than build immediately.

### A3.3 Client-reported — unquantified

- **S16** — Streetec reports the product is performing well in terms of sales and of the feedback they receive. **No figures were provided and none may be invented or implied.** See §A4 for the required wording.

### A3.4 The operating context — from the client's answers at kickoff

- **S17** — In 99% of cases the user is sitting in the car with the ignition on, by day or by night. Otherwise they may be at a car show using the phone app.
- **S18** — The device sits in the centre of the dashboard.
- **S19** — The car is stationary most of the time the display is used. Users can disable the motion safety lock in settings and operate while moving, but this is rare.
- **S20** — Portrait is the default and the normal case; landscape is available via settings only, for users whose dashboard allows no other mounting.
- **S21** — Values reach the display by cable, not Bluetooth. Bluetooth connects the phone app to the ECU.
- **S22** — Expected usage: 99% of use is the automatic mode — zeroing the height, returning to the driving preset, switching between presets, occasionally the level function. The next most common action is changing the driving height manually and saving it as a preset.

### A3.5 The regulatory and physical constraints

- **S23** — **CE rules require SI units**, so bar is the European default; PSI is retained as a switchable option for the American market.
- **S24** — **German law requires pressure in bar to be displayed.** This is not a preference; the display cannot omit it.
- **S25** — The vehicle's suspension certification specifies a permitted pressure range per axle — the client's worked example being roughly 3.4–4.0 bar front and 4.5–5.2 bar rear for one common hatchback. Operating outside that range must warn the driver. Some regulations permit operation outside the range below 50 km/h.
- **S26** — Adjustment of pressures while driving is restricted by regulation; adjustment is permitted while stationary.
- **S27** — Three independent interlocks prevent adjustment in motion: accelerometer-detected movement, a calibrated speed signal with a user-set threshold, and a digital input such as the handbrake, configurable as active-high or active-low. Separately, a minimum pressure per axle can never be overridden — not by manual adjustment, not by a preset, not by the full-deflate function.
- **S28** — Before the full-deflate function is used, the wheels must be straight, **"otherwise my fenders will lay on my wheels and they break quite easily"** — a physical-damage consequence of a single interface action.
- **S29** — Pressure does not map reliably to height. Load changes the relationship: *"if I load more stuff in the trunk, of course I will need more pressure on the rear axle to get to the same height."* Left and right may need different pressures to sit level.
- **S30** — Calibration is a 16-step automatic cycle that deflates and raises each corner, axle and side in turn. Its purpose is to learn the ECU's own mounting orientation — the accelerometer does not know how it was installed, and *"most of the users won't mount the ECU with a bubble level."* The user must first level the car with a manual bubble level so the system can take that as its offset. Calibration can be skipped, but then only manual mode is available.
- **S31** — Speed-signal calibration requires a co-driver, a straight road and a constant 50 km/h for about five seconds, then confirmation or retry.
- **S32** — The display supports brightness control, **darkening triggered by a digital signal from the vehicle**, a separate brightness value for the darkened state, and user-configurable haptic feedback intensity.

### A3.6 Client quotes — cleared for verbatim use, attribute to role only

- **S33** — On internal deadlock: *"We are seven people and we had nine different opinions on what to do. And in the end we said, it's not enough to decide that — we will listen to you, what your expertise says… we are paying you for deciding that."*
- **S34** — On their own expert bias: *"Last time when we had our meeting with all our employees, we realised that all of us, we all know the existing systems, we very well know how an air suspension works. So our idea was to talk to people who has no clue about that."*
- **S35** — On why internal discussion failed: *"We are all very result focused here. So if you have a meeting of one hour, everybody tries to get the final product within this hour."*
- **S36** — On a competitor's navigation: *"Sometimes very difficult to know that there is a function, but you are not sure in which menu you find it. And then you have to switch, go to one menu, switch to the new screen. Oh no, it's not there. You have to go back."*
- **S37** — On thumb reach: *"The majority of people is right handed, so you probably operate with your thumb. And so the control should be on the right side so that your thumb doesn't [cover] the units or the values."*
- **S38** — On night use: *"If you're riding at night, it's nice if you can switch it off. Like you're doing the navigation screens on the big ones in your car, you can also switch it off, because otherwise you have something like a television in your car."*
- **S39** — On the level function's purpose: park a campervan on uneven ground, press one button, and the vehicle levels itself — *"so that a glass of water on your table within your bus will be levelled"*, and so that *"you don't want to roll out of your bed in the night."*
- **S40** — Creative Navy's own position during the shortcuts debate, usable as a statement of method: *"You can't make a system perfect for one percent of people if you want 99 percent of them also to use it."*

### A3.7 Design decisions and the reasoning behind them

- **S41** — **The height-versus-pressure problem.** German law requires bar at all times, but a customer who has paid for height sensors wants percentage. Three iterations were explored. Resolved as equal-prominence percentage with de-emphasised bar on the screens where both are needed, percentage only when editing a preset, bar when the system is regulating or has finished. Manual mode needs both, because the user is working toward a specific height at a specific pressure.
- **S42** — **Immediate versus saved change.** Manual adjustments execute immediately; preset edits must be explicitly saved. Two different mental models in one interface, deliberately separated.
- **S43** — **Two-level alert escalation.** A first attempt at a blocked action produces an inline notification; a second attempt produces a modal. Colour stays neutral until a genuine alert state — raising and lowering pressure are both normal operations and neither is colour-coded as a warning.
- **S44** — **Finger occlusion.** Pressure values sit above their adjustment arrows so the user's finger does not cover the number being changed.
- **S45** — **Discrete rather than continuous sliders** for tank pressure and brightness, in fixed increments — because precision matters for pressure and *"some people might have large fingers"*.
- **S46** — **Profile names editable only in the mobile app.** A 4.3-inch screen cannot host a full alphabetic keyboard, so the HMI shows a two-character abbreviation and name entry lives on the phone. A hardware constraint resolved by allocating the feature across devices.
- **S47** — **The level set point was folded into initial calibration** as its final step, because both require the car to be on a flat surface and the user is already there.
- **S48** — **Font sizes were increased by 25%** between review rounds, to 20px body text, after legibility was checked at physical size.
- **S49** — **Designs were verified at true physical size**, including measuring the rendered screen against a ruler during a review call when the on-screen size looked wrong, and committing to check the result on the real panel before sign-off.
- **S50** — **Settings were kept as a single scrolling list** rather than nested categories, because category labels assume the technical vocabulary that a non-expert user does not have — and because the client had experienced exactly this failure in a competitor's product (S36).
- **S51** — **Requests declined, with reasons.** Creative Navy argued against: customisable shortcut buttons on the main screen (small screen, the primary control already occupies the full width as a touch target, and a focused mode screen is not a dashboard); a colour wheel for the ECU backlighting in the first release, in favour of nine presets that are easier to use and simpler to build, with the wheel deferred until users ask for it; labels rotated 90 degrees to save space; and headings pinned during scroll, because reordering content on scroll disorients more than it helps.

---

## A4. Evidence calibration — mandatory

**S10–S15 are Creative Navy-measured** and may be stated as such. This is the strongest evidence class in the engagement. Required framing:

> Creative Navy designed the test protocol, ran both sessions and analysed the results. Streetec prepared the vehicle and site logistics and recruited participants. Testing used the production product installed in a car rather than a prototype in a lab.

**On the task results**, the supportable claim is that **all 32 participants completed all three tasks unassisted and performed in line with expectations**. Do **not** state a completion percentage beyond that, a specific time, a mean, or any comparison to a baseline — none was recorded in a form that supports it.

**On the debrief findings (S14)**, these are participants' subjective impressions gathered in a 15-minute conversation. Say so. "The aesthetics were well received" is a subjective rating and must be marked as one.

**On the trade fair sample**, do not describe it as representative of owners. It was 40% dealers and 30% installers — a channel sample as much as a user sample, which is interesting in its own right because dealers and installers are the people who commission and fit these systems. Say what it was.

**S16 — the commercial claim — requires this wording or close to it:**

> Streetec reports that the product is performing well in sales and in the feedback they receive. This is client-reported and unquantified: no figures were shared, and Creative Navy has not independently verified it.

Never convert this into a growth figure, a unit number, a market-share claim or a revenue statement.

**S7 — the internal two-person check — is not user research.** Always labelled internal, n=2, on wireframes, conducted with colleagues.

**S8 — implementation support — was two sessions.** Do not imply a sustained Implementation Partnership. The honest statement is that Creative Navy briefed the engineering team at the start of development and reviewed progress once, four weeks in.

### What must not be claimed

- Any sales, revenue, unit, growth or market-share figure.
- Any completion rate, task time, error rate or efficiency measure beyond S12 as worded.
- Any safety outcome. The regulatory constraints shaped the design; no safety result was measured.
- Any claim that the testing validated the product in use over time. It tested comprehension and operation of a finished design, in a parked car, with participants who had not seen it before.
- Field research, personas, dealer interviews or contextual inquiry. None happened. The research in this engagement was the collaborative requirements work, an unstructured look at three competitors, an internal check, and the post-design testing.

---

## A5. Positioning — the angles worth leading with

### A5.1 The client who could not decide — lead with this

Streetec's whole team knew air suspension intimately, and that was the problem. Nine opinions among seven people (S33); everyone too expert to judge what a novice would understand (S34); every meeting collapsing toward a finished answer within the hour (S35). Their resolution was to hand the judgement over.

This is the **blanks phenomenon** seen from the client's side, and it is rare to have a client articulate it so cleanly. It connects to focus stewardship and to the situation page on stakeholders being unable to align on direction. It also sets up everything else in the case study: the design decisions were not negotiated to consensus, they were reasoned and then explained.

### A5.2 Law as a design constraint, not a compliance checkbox

Pressure must be shown in bar because German law says so (S24). CE rules force SI units, while the American market expects PSI (S23). Certification fixes a permitted pressure band per axle and anything outside it must warn the driver (S25). Adjustment while driving is restricted (S26), enforced through three independent interlocks (S27).

The interesting part is not the list but the collision it creates: the legally mandated value is not the one the user wants to look at. A customer who bought height sensors wants percentage; the law wants bar. Three iterations resolved it by making the legally required value present but subordinate, and by changing which value leads depending on what the user is doing (S41). That is a regulatory constraint absorbed into an interaction model rather than bolted onto it.

### A5.3 Designing at physical size

A 4.3-inch screen at 480×800, read at arm's length, in a car, by day and by night. Font sizes went up 25% between rounds (S48). The team measured rendered screens against a ruler when on-screen sizes looked wrong and committed to checking on the real panel (S49). Values were placed above their controls so fingers would not cover them (S44). Sliders were made discrete because fingers are imprecise (S45). Name entry was moved to the phone because a full keyboard will not fit (S46).

### A5.4 Validation in the real object

Thirty-two people, the real product, real cars — a trade fair floor in Spain and a session in Munich (S10–S13). Not a prototype, not a lab, not a screen-share. The sample included the people who fit and sell these systems as well as the people who own them.

### A5.5 Restraint as a service

The engagement contains an unusual number of things Creative Navy argued *against* (S51), each with a stated reason rather than a preference. The shortcuts debate is the clearest: the client's team wanted customisable quick-access buttons, Creative Navy declined on grounds of screen size, touch-target geometry and the difference between a focused mode screen and a dashboard, and offered the principle in S40. The client conceded while noting their own team was split.

This belongs in the buying guidance as much as the case study. It is what a client is paying for when they say *"we are paying you for deciding that."*

### A5.6 A second generation, not an origination

kntrl 2 succeeds an existing product. That matters in three ways the case study should use.

First, **the client already knew the domain cold** — which is precisely why S34 is so pointed. Their expertise came from having built and sold the previous generation, and it was that accumulated familiarity that made them unable to judge what a first-time user would understand.

Second, **the touchscreen is the generational break.** The competitive account in A5.7 describes what the previous generation and the rivals share: a single-colour display with hardware buttons. Moving to a 4.3-inch capacitive screen is not a styling change, it is a change in what the product can be.

Third, **there was an installed base and a set of expectations to respect** — existing customers, dealers and installers who knew the old system. The naming decisions on the calls reflect this: "Deep" became "Low" and "Central" became "Ride height" because, as the client put it, that is what people in this market are already used to. Vocabulary was inherited rather than invented. That is *constraint respecting* applied to the language of an existing product, and it is worth naming as such.

### A5.7 The touchscreen as competitive vector

Streetec's own competitive account: rivals ship a rudimentary display — one colour, hardware buttons, no touch. Streetec's differentiators were the touchscreen, a modular valve and sensor configuration, preset saving, adjustment while driving, the level function, lower achievable pressures, and taking the regulations seriously. The interface was not decoration on this product; it was the thing being sold.

---

## A6. Classification and filing

```
## Classification

- **Primary case-study category:** /evidence/case-studies/automotive
- **Primary context:** /contexts/embedded-devices-and-constrained-interfaces
- **Also-relevant contexts:** /contexts/regulated-products, /contexts/consumer-and-multi-market-products
- **Connects to:** /situations/delivery-and-execution/stakeholders-cannot-align-on-direction, /situations/complexity/software-too-complex-for-users, /situations/risk/warnings-are-visible-but-not-actionable, /failures/interpretation/data-is-available-but-hard-to-interpret, /failures/state-visibility/mode-changes-are-unclear, /capabilities/usability-evaluation-for-high-consequence-products, /capabilities/information-architecture-for-expert-systems, /capabilities/state-and-status-visibility-design, /capabilities/warning-and-alarm-clarity-improvement, /practices/usability-testing-under-realistic-constraint, /practices/evidence-led-prioritisation
```

**On the primary context.** The tagging convention chooses primary context by dominant design challenge, not by industry. The load-bearing problem here is delivering a complete control interface on a 4.3-inch constrained touchscreen under regulatory constraint — so embedded devices is primary, with regulated products and consumer multi-market as also-relevant. The automotive case-study category already exists and needs no structural change.

**On outcomes pages.** This engagement should **not** populate any `/evidence/outcomes` page. The testing measured whether people could understand and operate a finished design, before launch, in a parked car. It did not measure a change in operational performance after deployment, which is what those pages require. The measured result belongs in `/evidence/evidence-standards/what-we-have-measured` instead.

---

## A7. Suggested structure for the case study

1. **Opening** — locked agency sentence; Streetec and kntrl in two sentences; the three-part system; the six-sprint shape.
2. **What air suspension control actually involves** — bellows, valves, compressor, tank, height sensors; why pressure and height are not the same thing (S29); the 16-step calibration and why it exists (S30).
3. **The client who could not decide** — S33, S34, S35. Sets up the method.
4. **The constraints** — the regulatory set (S23–S27), the physical set (4.3 inches, dashboard, day and night, thumb reach), and the consequence that makes one action unforgiving (S28).
5. **Exploration** — nine main-screen iterations on a single axis, and what the groups taught (S6).
6. **The decisions** — the height-versus-pressure resolution (S41) as the centrepiece; then immediate-versus-saved (S42), alert escalation (S43), occlusion and touch sizing (S44, S45, S48, S49), the settings architecture (S50), the cross-device split (S46).
7. **What was declined, and why** — S51 and S40.
8. **Testing in a real car** — S10–S14, with the full §A4 calibration.
9. **Shipping** — S8, S9, S15, and the S16 statement with its qualification.

---

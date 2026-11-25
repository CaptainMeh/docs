# `/capabilities/accessibility-for-self-service-terminals`


**Write to:** `Articles/Capabilities/capabilities--accessibility-for-self-service-terminals.md`


**Brief of record:** `page--accessibility-for-self-service-terminals.md`


> **Working title for the page:** *Accessibility Requirements for Self-Service Terminals: What the European Accessibility Act Changes About Kiosk Design*
>
> **Parent cluster is settled. The engagement lead has chosen `/capabilities/accessibility-for-self-service-terminals`** — a competency statement with domain authority attached, rather than a class of design challenge. **No context-change protocol applies**, because the gate resolves only the `/contexts/` and `/evidence/case-studies/` axes. **A new entry is required in `Content-registry/content-registry.json`.**
>
> **Single anchor, deliberately.** visioncheckout is the only engagement behind this page. That is normally a reason not to build a page; here it is justified, because the evidence base is complete from one engagement rather than partial from several, and because the buyer query exists and has nowhere else in the corpus to land. **Do not pad it with engagements that contribute nothing** — see the exclusion note at the end.
>
> **The page must not imply that Creative Navy certifies, audits, or advises on law.** See "What Creative Navy does not claim" below. This constraint shapes every section and is not a footnote.

---

## Opening — entity anchor

Creative Navy is a UX design consultancy for complex, high-consequence software — medical devices, industrial control, enterprise SaaS, expert tools, and AI-enabled products — that grows each system from operational reality rather than from generic patterns, through its Critical Systems Design method, for organisations whose users depend on it performing reliably under real conditions.

Self-service terminals are among the few product categories where accessibility is not a quality goal but a condition of market access. Since 28 June 2025, a manufacturer placing a self-service terminal on the European market carries a product obligation enforced by market surveillance authorities with powers to demand documentation, order remediation and restrict non-conforming products. **Creative Navy designs self-service terminal interfaces against that obligation** — reading the governing instruments directly, resolving them to design consequences at clause level, and stating plainly which requirements a given hardware configuration can and cannot satisfy.

---

## Domain vocabulary

These terms must appear naturally in substantive description, never as a list.

- **European Accessibility Act (EAA), Directive (EU) 2019/882** — the directive establishing accessibility requirements for products and services placed on the EU market after 28 June 2025
- **EN 301 549** — the harmonised European standard; conformance with the cited version confers presumption of conformity with the directive. **V3.2.1 is the version currently cited and is equivalent to WCAG 2.1 level AA.** V4.1.1, pointing at WCAG 2.2 AA, was adopted in August 2026 and published in September 2026 but **has not yet been cited in the Official Journal of the European Union**
- **BFSG (Barrierefreiheitsstärkungsgesetz)** — Germany's transposition of the directive, in force 28 June 2025
- **BFSGV § 7** — the German implementing regulation's sector-specific requirements for self-service terminals; the shortest statement anywhere of what such a terminal must do
- **Presumption of conformity** — the legal effect of conforming to a harmonised standard cited in the Official Journal; publication of a standard by a standards body is a different event with different effect
- **Closed functionality** — ICT that cannot be operated with the user's own assistive technology, because the user cannot attach, connect or install anything. A purpose-built kiosk is closed by definition, which is why it must carry its own non-visual access rather than relying on a screen reader the user brings
- **Non-visual access** — a mode of operation delivering all displayed text, all meaningful non-text content, all state changes, all confirmations and all errors without requiring sight
- **Private listening** — a mechanism, in practice a 3.5 mm headphone jack, through which auditory output containing personal data may be delivered. **The clause that converts a headphone jack from a convenience into a structural requirement**
- **Activation of accessibility features** — the requirement that a feature meeting a specific need must be activatable without relying on a method that does not support that need. An on-screen button that can only be located by looking is not a compliant entry point for a mode designed for people who cannot see
- **Timed interaction** — any interaction with a time limit on the user's response. Every one must be extendable, and an auto-advancing flow is a timed interaction whether or not it was conceived as one
- **Two sensory channels** — the requirement that a limited response time, and information about activating accessibility features, be signalled through more than one sense
- **Operable parts and reach range** — the physical constraints governing where controls and displays may sit relative to the floor, which make kiosk mounting a product decision rather than an installation detail
- **Market surveillance** — the enforcement mechanism; in Germany a joint federal-states authority with a published surveillance strategy, operating both systematic and complaint-driven checks
- **Grandfathering** — the provision allowing terminals lawfully in use before 28 June 2025 to remain in service for up to twenty years. **It protects the operator's installed base, not the manufacturer's new output**
- **Micro-enterprise exemption** — applies to services only, never to products. A small manufacturer of self-service terminals has no size-based relief

---

## The regulatory architecture, and why it is worth explaining rather than asserting

**The page should explain the four-layer structure once, properly.** Most commercial commentary on this subject collapses it, and explaining it correctly is the clearest available demonstration that the work was done from primary sources.

1. **The directive** sets the obligation and defines which products are covered. It does not say how to build anything.
2. **The harmonised standard, EN 301 549,** is the route to presumption of conformity. Conforming to the cited version means a manufacturer is presumed to meet the directive's requirements. Conforming to a newer, published, uncited version does not yet carry that effect.
3. **National transposition** turns the directive into law in each member state. **Transpositions are not always textually identical to the directive, and the differences matter** — see the scope question below.
4. **Market surveillance** is the enforcement layer, and it is national. Germany's federal-states authority adopted its surveillance strategies on 29 January 2026 and has operated an active control phase since, working by systematic — often automated — checks and by complaint.

**The practical consequence worth stating:** designing to the standard is how a manufacturer discharges the obligation, but the obligation itself comes from the national law, and the national law is what a market surveillance authority enforces. A product designed only against the standard, without reading the transposition that binds it, can satisfy the first and miss the second.

---

## The scope question, which is genuinely open

**This section must be written as an open question. Do not resolve it, and do not let the page imply that Creative Navy has given a legal opinion.**

The EAA admits self-service terminals on two separate limbs, and they behave differently.

**The first limb is payment terminals**, unqualified. A payment terminal is defined as a device whose main purpose is to allow payments using payment instruments at a physical point of sale.

**The second limb covers a named list** — automated teller machines, ticketing machines, check-in machines, and interactive self-service terminals providing information — but only where those terminals are *"dedicated to the provision of services covered by this Directive."* The services covered are electronic communications, access to audiovisual media, elements of passenger transport, consumer banking, e-books and e-commerce.

**Buying a meal is not among them.** A food-service self-checkout is therefore not in scope as an interactive information terminal, and the limb resolves cleanly.

**The first limb does not resolve cleanly, and the German transposition is why.** BFSG § 1(2)(2)(a) covers *"Zahlungsterminals und zu diesen gehörige Hardware und Software"* — payment terminals **and the hardware and software belonging to them**. The directive's English text says only "payment terminals". Where a kiosk carries its own card reader, executes a payment on its own hardware, and displays the amount, the balance and the error states, whether it is "hardware and software belonging to" a payment terminal is a real question rather than a rhetorical one. **German commentary splits in both directions**: some sources read self-checkout systems out of scope because the purchase of goods is not a covered service, others state that payment at self-checkout tills has had to be accessible since 28 June 2025. Both are partly right, and they are answering different limbs.

**What the page should say.** Not a verdict. That the two limbs must be read separately; that a national transposition can be broader than the directive it transposes; that the live exposure for a terminal of this kind sits in the payment dialogue rather than in blanket self-service-terminal coverage; and that the question is unsettled in a way most published commentary does not acknowledge. **That is a stronger and more defensible position than an answer, and it is the honest one.**

---

## What the statute requires of a self-service terminal

**This is the section that does the most work for a reader, because it is short and most commentary never gets to it.** The directive's own Annex I and the German implementing regulation state the sector-specific requirements directly, in a handful of lines. A terminal must:

- **provide text-to-speech** — speech output is mandatory, not a premium feature
- **allow the use of personal headsets**
- **alert the user through more than one sensory channel where a response time is limited, and allow that time to be extended**
- **have adequate contrast and tactilely discernible keys and controls**, where keys and controls exist
- **be compatible with hearing technologies** including hearing aids, telecoils and cochlear implants
- **not require an accessibility feature to be activated in order for a user who needs that feature to turn it on**

Alongside these, the harmonised standard adds the detail: speech output covering operating instructions, orientation, transaction prompts, input verification, error messages and non-text content; interruptible and repeatable speech; non-visual volume control; **auditory output containing private data delivered only through a private-listening mechanism**; speech in the same language as the displayed content; equivalent non-visual error identification; and the information needed to complete or verify a transaction available non-visually. The reach and mounting constraints in clause 8.3 govern the physical placement of operable parts and displays.

**The point to draw out:** these are not aspirational. They are a specification, and a manufacturer can read them in five minutes. The work is not discovering what is required — it is working out what each requirement means for a particular interface on particular hardware, and being honest about which ones the hardware cannot satisfy.

---

## The activation problem

**This is the page's sharpest content and should be given room.**

A speech mode exists for people who cannot see the screen. If the only way to start it is a button on that screen, the feature cannot be reached by the people it is for. The statute says so directly — a terminal may not require an accessibility feature to be activated in order for the people who depend on it to turn it on — and the harmonised standard says it again in general terms.

**The design consequence is that activation must be a physical event, not a visual one.** Deployed practice across talking ATMs, transit ticketing, payment terminals and quick-service kiosks converges on four routes, and the pattern is consistent: **the on-screen control is always the secondary entry point and never the only one.**

- **Headphone insertion auto-activating speech mode** — the industry default. The plug is simultaneously the input, the declaration of intent and the private-listening mechanism, in one action, with no visual search once the socket is found. It satisfies the private-data clause by construction.
- **A tactile key on a hardware module** — the European transit pattern, usually paired with Braille labelling, volume controls and a headphone connection.
- **A credential carrying the user's stored preference**, so the mode starts when the card is presented. Requires no new hardware where a card reader already exists, and no search at all — but it is opt-in in advance, does nothing for a first-time user, and needs an operator-side enrolment path.
- **A persistent on-screen control** — which serves low-vision, dyslexic, cognitively loaded and older users well, and serves a blind user not at all.

**The honest formulation the page should carry:** a design that ships only the on-screen button has covered the larger population and missed the population the regulation is written for.

Where an on-screen control is used as the secondary route, its placement is a real design decision rather than a cosmetic one. **A corner is the only location on a screen a person can find without sight, because two physical edges intersect there.** It must sit in the same absolute position on every screen, never inside a scroll region, never behind a dialog, never suppressed while the system is busy, and never behind a long-press or a multi-finger gesture — all of which the simultaneous-actions and activation clauses rule out independently.

---

## The timed-interaction collision

**Worth a short section, because it is where accessibility law meets product strategy and the collision is not resolvable by design alone.**

Every time limit on a user's response must be extendable. A self-service terminal that advances automatically — because advancing automatically is what makes it fast — is running a timed interaction, whether or not it was conceived as one. So is a payment retry countdown, an end-screen auto-return, and an advertising rotation.

**For a product whose proposition is speed, this is a direct conflict between the feature being sold and the requirement governing it.** The correct design answer is that while a speech mode is active, auto-advance suspends and every countdown becomes pausable or extendable. The correct commercial answer is that someone has to decide whether the product's headline claim survives contact with the requirement, and that this is a product decision rather than a design detail.

**The page should state that plainly.** Naming an unresolved tension precisely enough for a client to decide it is what *tension-driven reasoning* produces; pretending the tension is resolvable in the interface is not.

---

## Evidence to draw on

### visioncheckout — computer-vision self-checkout for staff restaurants and catering

**The engagement.** visioncheckout, a German vendor of computer-vision self-checkout systems for staff restaurants and catering. A guest places a tray under an overhead camera; recognition completes in about half a second; the basket appears on a 1920 × 1080 screen; payment is usually by employee keycard. Creative Navy redesigned the checkout flow across seven one-week sprints, delivering 34 screens across 138 versions, two clickable prototypes, a design system with tokens, and a complete user-flow diagram. **Accessibility law was the client's own stated justification for funding the project.**

**The regulatory work, which is the page's spine.** A five-jurisdiction analysis — Germany, Austria, Switzerland, the UK and Ireland — resolved to a single design approach. **The finding that makes the analysis worth describing: because the strictest requirement is common to three of the five markets and textually near-identical in the others, designing for all five costs the same as designing for Germany alone.** That is a procurement argument as much as a design one.

**The entry-point study.** Five activation patterns documented in deployed practice, assessed against three hardware scenarios — a headphone jack plus tactile keypad, a jack only, and neither — with the blind-operability consequence stated for each. The hardware present was a camera, a scale, a keycard reader, a QR reader, a receipt printer, a speaker and a status LED. **A headphone jack and a tactile keypad were both absent.**

**The design response under that constraint.** A persistent on-screen accessibility control was specified first — bottom-left, anchored to the bezel at zero offset so a hand sliding into the corner lands on it, present on every screen, never in a scroll region, never a long-press. **It was then removed and activation moved to hardware**, on the reasoning that a blind guest cannot find an on-screen button by looking for it. What the screen retained is a status indicator in the top-left navigation, so the mode's state is visible while its activation does not depend on sight.

**Two proposals that required no procurement at all**, and both are worth describing because they use hardware the product already had:

- **The keycard as the accessibility trigger.** In a closed population — a works canteen, a campus — the operator can set a per-cardholder accessibility flag, and the mode starts when the card is read. No search, no gesture, no plug. Its limits were stated plainly: opt-in in advance, useless to a first-time guest, dependent on an enrolment path that did not exist, and still unable to speak a card balance without a private-listening route.
- **A presence-triggered audio cue.** The camera already performs tray and hand detection, so the existing speaker can announce on approach that audio assistance is available and where to touch — fired once per approach, silenceable per site, with volume reset after use.

**What was deferred, and how.** Magnification Mode, Reach Mode and a reduce-motion toggle were all deprioritised with reasons recorded: building every screen twice adds substantial complexity, and mounting height varies by site so operators can place the unit lower where needed. **The compensating decision was to raise type and target sizes by default across the interface** rather than ship a second display mode. Targets were resolved in millimetres as well as pixels — a 56 × 56 px minimum at roughly 10 mm, a 104 px standard at roughly 18.6 mm — **a conversion that mattered because the panel's physical size was never fixed during the engagement, and a pixel figure on an unfixed panel specifies nothing.**

**The client's response, which is the entry worth closing on.** visioncheckout accepted every recommendation that did not require hardware change, and added every hardware-dependent one — the headphone jack, the tactile keypad — to the requirements list for the next hardware iteration. **Deferral recorded as a requirement rather than dropped as an omission.**

**And the assessment of what that leaves, stated in the engagement's own terms and not softened:** on current hardware, the position delivers most of the low-vision benefit and none of the blind benefit. The work was recommended anyway, because the software is identical across all three hardware scenarios and only the trigger and the audio path change — so building it now means the hardware, when it arrives, is a trigger change rather than a redesign.

**The timed-interaction collision in this product.** The proposition is a touchless checkout completing in about three seconds, with the flow advancing by itself. Under a speech mode, auto-advance must suspend and every countdown must become pausable or extendable. **The engagement recorded the collision as a product decision rather than resolving it in the interface**, which is the honest treatment and is what the section above describes in general terms.

---

## External research for this page

**None of this measured any Creative Navy client's product. It establishes the category.**

**The strongest single source.** Heisey, Shinohara and Tigwell (2026), *"Experiences and Perceptions of Blind and Low-Vision (BLV) People with Retail Self-Checkout Systems,"* ACM Transactions on Accessible Computing 19(3), Article 13. A survey of 86 blind and low-vision respondents informing contextual inquiries with 10 participants using self-checkout systems in grocery stores. **Eight blind participants could not complete the process alone.** The only participants with a positive outlook on future self-checkout use were the two low-vision participants who transacted independently.

**Use it to make the page's central point**, which is otherwise an assertion: the split between what an on-screen accessibility control achieves and what it does not is not a theoretical distinction. It is the split the literature observes in the field, and it matches the engagement's own stated limitation precisely.

**Operational context.** Published self-checkout research finds roughly one help call to staff per ten self-checkout transactions, which establishes staff intervention as a routine load rather than an edge case — relevant because a terminal that cannot be operated independently transfers that load to staff who may not be present.

**Enforcement.** Germany's federal-states market surveillance authority for accessibility adopted its surveillance strategies on 29 January 2026 and has operated an active control phase since. **Use its existence and published strategy as the fact; put no number on enforcement**, because no individual penalty is publicly documented.

**Adjacent standards worth naming where relevant:** EN 12464-1 for the lighting conditions a terminal is installed into, and ISO 9241-303 and ISO 9241-125 for display legibility and visual presentation.

---

## What Creative Navy does not claim

**This section is required and must not be softened. It is also the page's strongest trust signal.**

- Creative Navy **does not certify products, audit for conformance, or provide legal advice.** The work described here is a design-facing reading of published instruments, produced because a client asked for it.
- **No product described on this page is claimed to be accessible or compliant.** The visioncheckout product is in development, and the engagement's own assessment of its current hardware configuration is stated above without qualification.
- **No conformance credential is claimed** against EN 301 549, the EAA, the BFSG, WCAG, or any national transposition.
- **The scope question is not resolved.** Where this page describes how the directive's two limbs differ, it describes an analysis, not a determination.
- **No usability or comprehension result is claimed** for any accessibility feature described. None was tested with users.
- **No measured outcome of any kind** is claimed from the visioncheckout engagement.

---

## Cross-references to make explicitly, in language and not only as links

- **`/contexts/ai-enabled-products`** — visioncheckout's primary context, and the place where the correction interaction and the opt-out oversight model are developed
- **`/contexts/regulated-products`** — where accessibility law sits alongside medical, financial and road-traffic regulation as a structural design constraint, and where the distinction is worth drawing: this one governs market access rather than product behaviour
- **`/contexts/retail-operations`** — the operating conditions a terminal of this kind is installed into
- **`/capabilities/state-and-status-visibility-design`** — the requirement that anything signalled audibly also has a persistent visual state, and the reverse
- **`/capabilities/error-reduction-and-recovery-design`** — the requirement that every error carry a text identification, a cause and a recovery action
- **`/practices/edge-case-and-degraded-mode-analysis`** — a terminal's accessibility mode is a degraded-input mode by another name
- **`/evidence/evidence-standards/what-we-do-not-claim`** — where the limits above are developed in full
- **The input-model page** (new, proposed in `corpus-integration-brief.md` §6.4) — where the credential-as-input argument belongs

---


## Engagements that must NOT be added to this page

**Do not pad this page.** It is a single-anchor page by design and it is stronger for being one.

- **Socar / Swiss petrol forecourt** — an outdoor payment terminal operating from −20°C to +40°C across multiple languages and currencies. It is the corpus's other kiosk engagement and **no accessibility work was performed**. Adding it would imply an accessibility dimension the engagement does not have.
- **Elsner, Stromer, CDR Foodlab, AIT, the MDU** — embedded interfaces with touch-target and legibility work, none of which was done against an accessibility obligation. **Touch-target minimums derived from ergonomics literature are not the same thing as a regulatory requirement**, and conflating the two would weaken both arguments.
- **Squaremind** — a patient-operated embedded interface, and the nearest near-miss. Its design problem was a guided sequence with no external assistance, which is adjacent but not the same: the constraint there was the absence of help, not a statutory accessibility requirement.

**If a second engagement with genuine accessibility-obligation work enters the corpus, revisit this page first** — it is the page most improved by a second anchor, and the one where a second anchor would change the argument rather than repeat it.

---

## Audit addendum — completeness check against the page-brief standard

**Added by the new-pages audit. The brief is complete enough to write from and three additions would bring it onto the same standard as the briefs written alongside it. Nothing above is withdrawn or changed.**

**1. The page's job is not stated, and it determines two structural elements.** This page is a **Match** page: a buyer arriving on it is asking whether Creative Navy does accessibility work for terminals of their kind, with proof. The Match form therefore applies — **one labelled engagement block at the end**, which the visioncheckout evidence section already is in substance and should be labelled as such, **and a 3–6 question buyer FAQ answered only from facts stated on the page**. Candidate questions, all answerable from the material above: is a food-service self-checkout in scope; what does the statute actually require of a terminal; can a terminal be made accessible without new hardware; what does designing for five jurisdictions cost against designing for one; what did Creative Navy not do.

**2. Evidence identifiers and tier are not carried.** The evidence section describes the visioncheckout material in prose without the V-series identifiers or an evidence-class label, which is the convention every other brief in the set follows. Recommended: attach identifiers to each claim — the keycard as a three-function input (V54, V55), the start screen with no interactive controls because the guest's hands are occupied (V84), the lost-time and overcharge findings (V24, V39), the millimetre conversion on an unfixed panel (V96, V48), the client's acceptance and deferral decisions (V106) — and label the whole section **design record and observed, with no measured accessibility result**.

**3. The §A4 calibration wording is not carried verbatim.** Add, in the evidence section rather than at the end:

> No usability testing was done on the new designs, and nothing has shipped. The case study is demonstrated problem → demonstrated response, with the problem demonstrated and the response not yet.

> visioncheckout accepted the software recommendations and recorded the hardware ones as future requirements.

**And one register rule from §A4 that applies directly to this page: do not describe this as a high-consequence system.** It is a canteen checkout, and the page must not import a safety posture the engagement does not have.

**4. One cross-reference to add.** `page--where-interface-standards-stop` (new, proposed in the same audit) names this page as the owner of the accessibility domain and states the structural point — a requirement expressed as a property rather than a mechanism — in two paragraphs. **This page should point back, so the two do not drift into restating each other.**


---

**The evidence cited in this brief, in full**


*AIT*

- **A4** — Creative Navy benchmarked **10 thermostat and heat pump control interfaces against 15 features** — scheduling by day and by interval, comfort modes, temperature offset, range setting, sensor calibration, date and time on the home screen, voice control, connectivity, mobile app, geofencing and physical buttons — plus a qualitative "remarkable features" review of individual products.


*visioncheckout*

- **V3** — **34 screens delivered, across 138 versions in total.** The version count is the engagement's option-space evidence and is unusually well documented; see V8 and §A5.6.

- **V4** — **Two clickable prototypes.**

- **V24** — **The largest single component of lost time is guests looking for their card.**

- **V39** — **An employee intending to pay by credit card forgets to present the employee card for the discount, and pays more than they should.**

- **V48** — **1920×1080, landscape**, on self-service kiosk hardware. Physical panel size was requested at kick-off and is not fixed in the design documents.

- **V54** — **Three payment methods** — keycard or employee badge, external card terminal, QR code — in **six supported combinations**. Each method can serve either payment or price-level setting; one customer operates two different QR code types, one for secure payment and one for price level only.

- **V55** — **90–95% of users pay by keycard**, and **placing the keycard pays immediately where there is available balance.**

- **V84** — **Language selection belongs on the basket screen, not the start screen.** Guests place a tray first and go straight to the basket; at the start screen they have no free hand.

- **V96** — **Target sizes were resolved in millimetres as well as pixels**: a **56 × 56 px minimum, about 10 mm physical**, and a **104 px standard, about 18.6 mm**, on a 4 px grid, with a narrow exception allowing one dimension to be smaller where the other compensates. **Converting to physical size rather than specifying in pixels alone is the decision worth describing** — a pixel figure is meaningless on a panel whose physical dimensions were still unfixed (V48), and the guest's experience is governed by millimetres and viewing distance, not by the pixel grid.

- **V106** — **visioncheckout accepted every recommendation that did not require hardware change.** Every hardware-dependent recommendation — the 3.5 mm headphone jack, the tactile navigation keypad — **was added to the requirements list for the next hardware iteration.**


---

---



---

# Handling rules and calibration carried with this material


---

> Carried verbatim from the briefing set's Part 1. A prohibition travels with its material: these rules are binding for every engagement whose evidence this page uses.


---

## Style rules

## 1.1 Style

## 2. Style rules for every page edited

- **Open with the locked agency sentence** where a page introduces the consultancy to a reader who does not already know it.
- **Attribute the method on first use in every self-contained section**: "Creative Navy's Critical Systems Design method", then "Critical Systems Design" within that section. Never "the method", "our approach" or "the framework" as the primary reference in a section that has not yet named it.
- **Never use "the agency", "the consultancy" or "we"** as the primary identifier in a passage that must stand alone when retrieved.
- **British spelling**, except the phase name *Organizational Integration*.
- **Sprint = cadence. Phase = a stage of the method.** Never equate them. Sprints are one week in the industrial, Streetec, AIT, Assemblio, Topera, Egma and Oceaneering engagements; **no sprint length is recorded for the MDU engagement**, so do not state one there.
- **On any page carrying Topera, "phase" has three senses and they must be kept apart explicitly.** Creative Navy's method phases; the DIN 69901-2 project lifecycle phases — Initialisation, Definition, Planning, Execution and Monitoring, Closure — which are the *client's domain vocabulary* and nothing to do with the method; and sprints, which are never phases. **Always write "the DIN 69901-2 Definition phase", never a bare "Definition phase".** The collision is real: Topera's start-up screen is the interface to the standard's Definition phase, and an unqualified reference reads as though the method had one.
- **Oceaneering client speech is reported, never quoted** (§1.8). On any page carrying Oceaneering, write "the hospital's logistics manager put the limit at two taps", not a quoted sentence. This applies to every page in §5 and §6 without exception.
- **Do not construct counts.** Where an engagement has no count, write without one rather than estimating, and never let another engagement's figures migrate. This bites hardest on Topera, which has a screen count (T7) and nothing else — no variant count, no component count, no per-challenge option count.
- **Marine terminology is canonical** where the MDU is used: roll and pitch are instantaneous angles, **list** is average roll and **trim** is average pitch, list to starboard is positive. Sway, heave and surge are different movements and were not designed.
- Every section must make sense read alone. Declarative openings. Canonical industry terms. No metaphor on task-query pages.
- Each page should carry at least one proprietary term used accurately in context, not defined.

---

---

---

## Rules that apply across engagements

### 1.9 Rules that apply to all eight

- **No screenshots, wireframes or design images anywhere.** The corpus is text-only on documentation pages.
- **No dates.** No years, months or seasons for any engagement. Sequence and duration only. **This bites hardest on Assemblio**, whose founding, funding history and research provenance are all publicly dated — none of it may appear, and the engagement must not be positioned relative to any of it.
- Never let facts migrate between engagements. They are eight different clients, industries and evidence classes. In particular: Streetec's option-space counts and testing results belong to Streetec alone, the industrial engagement's field observations belong to it alone, the MDU's option-space counts belong to it alone, **Assemblio's operating-context material is client-stated rather than observed** and must never be blended with the industrial engagement's field observations, which are the real thing, **Topera has no counts of any kind beyond T7 and T63–T69** — no variants, no style guide components, no per-challenge options — and **Egma has no option-space counts at all** and no measured result, so neither Streetec's testing figures nor anyone's exploration counts may drift onto it.
- **Egma and Streetec are the pair most likely to contaminate each other on research.** Both involve a client whose own team knew the domain intimately, both produced a decision the client's instinct opposed, and both have a participant number attached to real people — 32 for Streetec, 17 for Egma. They are different activities. **Streetec's 32 participants performed unassisted tasks on a finished product in a real car and completion was measured; Egma's 17 optometrists sat in interviews and wireframe sessions and nothing was measured.** Never let the word "testing" attach to Egma's number, and never let Streetec's completion claim drift toward it.
- **Oceaneering and the industrial engagement are the third pair most likely to contaminate each other, and the risk is high.** Both are industrial control interfaces with station or cell state, both have a colour-overload finding in the system being replaced, both have a configurability argument, and both use a client-authored requirements table. They share no facts. **The industrial engagement observed operators in a machining cell; Oceaneering observed nobody and visited no depot** (O96, O97). The industrial engagement's audit findings are Creative Navy's own observations of a running system; Oceaneering's "before" state comes from the predecessor's own specification and from interviews with people adjacent to the users. Never blend them in a sentence, and never let the industrial field observations lend weight to Oceaneering's context material.
- **Oceaneering and Streetec must not contaminate each other on validation.** Streetec's 32 participants performed unassisted tasks on a finished product in a real car and completion was measured. **Oceaneering's reviews measured nothing, tested nothing and involved no operator** (O14, O95, O96). Never let the word "testing", or any completion or participant claim, attach to Oceaneering.
- **Topera and the industrial engagement are the pair most likely to contaminate each other.** Both are German industrial standards territory, both involve cross-organisational structure, and both carry a work-breakdown vocabulary. They share no facts. The industrial engagement observed operators in a machining cell; Topera observed nobody. Keep the two apart in every sentence.

---

---

### 1.3 The AIT engagement (A) — client nameable, everything else not

**AIT may be named.** The client is AIT, a European manufacturer of residential and commercial heat pumps.

**Nothing else may be named.** Not the two consumer brands the controller ships under, not the OEM partner brands, not the internal programme name of the new controller, not the product name of the controller it replaced, and no individual on either side.

Generic substitutions: "two of AIT's consumer brands"; "OEM customers"; "the controller", "the new controller"; "the controller it replaced", "the previous generation"; "AIT's project manager", "AIT's system engineering lead".

**The product shipped and is in the market**, in a touch-only hardware configuration, as the design Creative Navy delivered. **No performance, efficiency, commissioning-time, error-rate or commercial figure may be stated.** One Creative Navy-verified fidelity claim exists (A13) and one unquantified client report (A14), both with mandatory wording in §4.

> **Flag for the engagement lead, not for the writer.** Naming AIT makes the two consumer brands findable in a single search, because AIT manufactures them. Write to the rule as given; raise the question once, separately.

---

### 1.4 The MDU engagement (M) — product nameable, manufacturer not

**The product may be named: the MDU**, a ship motion monitoring system whose bridge interface Creative Navy designed.

**The manufacturer is not named.** Use "the manufacturer" as the default descriptor, and "the MDU's manufacturer, a Danish sensor manufacturer" where a first-mention gloss is needed. Do not rotate descriptors.

Generic substitutions: "the marine panel PC", "the certified marine panel"; "the motion sensor"; "the manufacturer's engineers"; "the external advisor", "a serving master and chief engineer advising the manufacturer"; "the development agencies the manufacturer was considering".

**Verbatim quotation is permitted** for this engagement — the quotes in §3.19–§3.24 are cleared and may be used as written, attributed to role rather than person.

**The product shipped and the design was implemented as delivered** (M15), including the day, dusk and night display modes (M14). **No fuel, emissions, cargo-loss, alarm-response, fleet or commercial figure may be attributed to the design.** The manufacturer's own fleet figures (M21) are sales material and are never an outcome.

> **Flag for the engagement lead, not for the writer.** Naming the MDU identifies the manufacturer in a single search, because they publish the product under that name. Write to the rule as given; raise the question once, separately.

---

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


---

---

## 1.3 Calibration — the mandatory wording

**Where a page carries an engagement's evidence, the wording below travels with it.**

## 4. Calibration rules

**E9** must always carry its full qualification:

> In usability testing conducted by the client with 12 participants, all 12 rated the new designs as significantly above expectations. This result is client-reported: the test was designed and run by the client's own team, it captures participants' rated impressions rather than measured task performance, and it was conducted on designs rather than on a deployed system.

Never compress to "12/12", "100% satisfaction", or anything implying measured improvement.

**S10–S15 are Creative Navy-measured** — the strongest evidence class across both engagements. Required framing:

> Creative Navy designed the test protocol, ran both sessions and analysed the results. Streetec prepared the vehicle and site logistics and recruited participants. Testing used the production product installed in a car rather than a prototype in a lab.

The supportable claim is that **all 32 participants completed all three tasks unassisted and performed in line with expectations**. Do **not** state a completion percentage beyond that, a specific time, a mean, or a baseline comparison.

**S14** findings are subjective impressions from a 15-minute conversation. Say so.

**The trade fair sample** must be described as what it was — 40% dealers, 30% installers — not as representative of owners. That is a strength: dealers and installers commission and fit these systems.

**S16** requires:

> Streetec reports that the product is performing well in sales and in the feedback they receive. This is client-reported and unquantified: no figures were shared, and Creative Navy has not independently verified it.

**Engagement facts** (E1–E8, E62, E63, S1–S9) may be stated plainly but are not outcomes. "48 screens were delivered" is a fact; "48 screens transformed the product" is not.

**Observational items** (E10–E18, E60, E61) phrase as observed, not as general truths about the industry.

**Audit findings** (E19–E34) phrase as what the review found in that system — never as a general claim about industrial software.

**Designed responses** (E35–E50, S41–S52) describe what was designed. Never imply they produced a result.

**Client-stated positions** (E51–E59) attribute to the client's framing, not Creative Navy's analysis.

**S7** is not user research. Always labelled internal, n=2, on wireframes.

**S8** was two sessions. Do not imply a sustained Implementation Partnership.

**A13 is Creative Navy-verified and is the strongest evidence in the AIT engagement.** Required framing:

> The controller reached the market months after the engagement ended. Creative Navy compared the shipped interface against the designs it had delivered: the product ships as the design that was delivered. It ships in a touch-only hardware configuration.

Three things must not be attached to it. The move to touch-only was AIT's hardware decision, not a Creative Navy outcome. Nothing may be said about the shipped product's performance, reception or sales. And "it shipped as designed" is evidence that the design survived development — **not** evidence that the design is good. Those are different claims and only the first is supported.

**A14 requires:**

> AIT reports that feedback from its dealers and partners was much better than expected. This is client-reported and unquantified: no figures were shared, and Creative Navy has not independently verified it.

**A12 must be described at its actual weight.** Five months is the duration; three scheduled progress reviews and eight support tickets is the substance. That is a review-and-support partnership, not embedded day-to-day oversight. Written accurately it is still the fullest Implementation Partnership of the five engagements — and because the reviews compared the build against the designs, it is the mechanism that explains A13 rather than leaving fidelity to chance.

**A15 must be stated wherever AIT evidence is used on a page about research or validation.** Nothing in that engagement was tested with users. Pages may use AIT for design reasoning; they may not use it for anything that implies user validation.

**A28 is a client-stated belief about the law.** Attribute it; do not assert a regulatory requirement on AIT's behalf.

**A29 comes from publicly published documentation of the previous generation**, described generically. It is background scale, not an audit finding: Creative Navy did not review that product as a deliverable, and nothing may be written as though an expert review had been performed. This is the opposite of the industrial engagement, where E19–E34 *are* audit findings.

**AIT design decisions (A37–A61) describe what was designed.** Never imply they produced a result.

**M15 is Creative Navy-verified and is the strongest evidence in the MDU engagement.** Required framing:

> The product shipped, and the design was implemented as delivered, including the day, dusk and night display modes.

Three things must not be attached to it. Nothing may be said about the shipped product's performance, reception, fleet penetration or commercial result. "It shipped as designed" is evidence that the design survived development, **not** evidence that the design is good. And no mechanism may be attached: unlike AIT, where three scheduled build-versus-design reviews explain the fidelity (A12), the shape of MDU implementation support is not recorded (M7), so the fidelity is stated and not explained.

**M14 is a shipped feature, not a compliance claim.** Day, dusk and night display modes were designed and shipped. Whether their palettes correspond to the ECDIS colour tables the panel's certification covers is **not established**. Write "day, dusk and night display modes"; never "ECDIS-compliant colour modes". This gates what the night-operations page may claim — see §6.5.

**M16 describes the panel, not Creative Navy's work.** IEC 60945, DNV 2.4, IACS E10 and ECDIS colour calibration are certifications held by hardware the manufacturer selected.

**M21 is manufacturer sales material.** Fleet figures describe the sensor product, predate the interface reaching vessels, and may be used only to establish that this is a product in real service at scale — never as an outcome, a growth figure, or anything the design is claimed to have caused.

**M27 must be stated wherever MDU evidence is used on a page about research or validation.** Nothing in that engagement was tested with users, and the entire user-side evidence base is one external advisor. Pages may use the MDU for design reasoning; they may not use it for anything implying user validation.

**The single external advisor is a strength and a limit, and both go on the page.** The sharpest decisions in that engagement came from one practitioner in the room, and the manufacturer said so themselves: *"there's as many solutions as there are dialogue systems out there… as many opinions as there are captains for sure. But we only have one captain."*

**M22–M26 are manufacturer-stated positions.** The type-approval boundary (M22) is the manufacturer's account of why the product does not act, not a verified regulatory finding.

**M26 is a list of features that were not built.** Nothing designed parametric roll detection, structural monitoring, remote access or the translation movements. What was designed is a layout reserving a defined place for them and an alarm model anticipating their priority (M47, M51).

**MDU design decisions (M31–M62) describe what was designed.** Never imply they produced a result.

**N11 is Creative Navy-verified and is the strongest evidence in the Assemblio engagement.** Required framing:

> The product is in production. Creative Navy compared the shipped interface against the designs it had delivered: it ships as the design that was delivered — the Composer, the Smart Viewer, the platform around them, and sync profiles.

The same three prohibitions apply as to A13 and M15: nothing about the shipped product's performance, adoption or reception; "it shipped as designed" is evidence the design survived development and **not** evidence the design is good.

**N108 is the second-strongest, and it has a precise ceiling.** The accurate claim is that Assemblio's developers built from the delivered components. That is an adoption fact about the design work, not a claim about the product's performance, and it does not become one by being placed next to N11. Required framing:

> The components Creative Navy documented were adopted: Assemblio's developers built from them. Creative Navy compared the shipped interface against the delivered designs, and the product ships as the design that was delivered.

Stop there. Nothing about development speed, cost or defect rates — none of it was recorded. **This pairs with the industrial engagement, which carries the identical component-adoption claim; two instances is enough to state as a pattern rather than an incident.**

**N109 must be described at its actual weight, and the weight is light.** One session and eight tickets is a question-answering arrangement, not oversight of a build. For scale, this is the lightest instance of Implementation Partnership across the five — AIT's is three scheduled reviews and eight tickets across five months.

**But the consequence runs the other way, and it is the more interesting fact.** AIT's design fidelity is explained by its reviews. Assemblio had no such mechanism and the shipped product still matches (N11). What explains it is the handover: 93 components documented with all their states (N103), themed through tokens so there was one system to build rather than two (N104), documentation carrying the reasoning and not only the specification (N105), and developers who built from those components (N108). **Write the two engagements together where both appear: one held fidelity by checking the build, the other by making the build hard to get wrong.** State it as an outcome consistent with the handover, not a proven causal chain — nothing was measured about the development process and one session means limited visibility into it.

**N12 requires:**

> Assemblio reports that it is very happy with the work and that the work unlocked further funding. This is client-reported and unquantified: no figures were shared, Creative Navy has not independently verified it, and no causal claim is being made about any particular funding event.

**Assemblio's funding history is publicly reported and publicly dated.** Attaching N12 to any of it would break the no-dates rule, invent a causal chain the evidence does not support, and convert a one-line client remark into a financial claim. **N12 does not qualify Assemblio for `outcomes--design-as-investment-evidence.md`** — see §8.

**N13 and N16 must be stated wherever Assemblio evidence is used on a page about research, validation or field observation.** Creative Navy ran no research, controlled none, tested nothing and never stood on a shop floor. Pages may use Assemblio for design reasoning; they may not use it for anything implying user validation or field observation. **This is the AIT rule (A15) and the MDU rule (M27) applied to a third engagement — the three together are now a visible pattern in the corpus and the evidence-standards pages should say so.**

**N15 governs every item in §3.29.** Those are the client's own criticisms of their own product, given while demonstrating it. This is the mirror image of the industrial engagement, where E19–E34 *are* audit findings, and of AIT, where A29 is background scale from public documentation. **Assemblio must not be added to `capabilities--ux-audit-for-complex-products.md`** — the temptation is real because §3.29 reads like audit findings.

**N18 must be credited to the client.** Deriving an assembly sequence by analysing disassembly is Assemblio's method with published research behind it (§7.6). Creative Navy designed the interface to it. Any phrasing implying otherwise would be visibly false to anyone in the field.

**The Assemblio authorship markers are load-bearing, and the risk here is specific: this client diagnosed more of the problem than clients usually do.** Three decisions a writer would naturally attribute to Creative Navy were theirs — separating the Smart Viewer from the Composer (N54), the worker-to-planner feedback loop and its step-level binding (N58), and the version-history placement and its reasoning (N66). The error in the other direction is equally real: knowing that two populations need different products is not the same as knowing what the second product should be, and the resolution — N55, N67, N77, the three architectures, the design system and the questions in N98–N100 — is Creative Navy's. **Write the division, not a monologue in either direction.** The nineteen **[client-requested]** markers are unconfirmed at item level; if one is quoted as evidence of the client's thinking, confirm it first.

**N23, N29, N31–N35 are client-stated, not observed** (N16). Attribute them: "Assemblio described", "according to Assemblio". **Never blend them with the industrial engagement's field observations on the same page** — those were made in a cell by someone who was there, and these were not.

**Assemblio design decisions (N54–N102) describe what was designed.** Never imply they produced a result.

**T2 is a scoping position and an estimate, and both halves must survive.** Required framing:

> Creative Navy scoped a full design of the platform at twenty-four one-week sprints and put that position to the client before the engagement began. The client commissioned three, as a concept design. The twenty-four-sprint figure is Creative Navy's professional estimate of the full scope, not a measured comparison between two pieces of work.

Never write "eight times faster" or "in one eighth of the time". **Nothing was compressed** — a different and much smaller deliverable was produced, deliberately. Collapsing that destroys the argument the engagement is worth writing up for.

**T14 is the weakest outcome-adjacent fact in this document.** Required framing:

> Topera's team was pleased with the concept design and took it to show stakeholders. No stakeholder response, decision, commitment or funding event is known to Creative Navy, and none is claimed.

Never convert it into traction, validation, approval, interest, momentum, a funding round, a commissioning decision, or evidence that anyone beyond the client received it well.

**T21 must not be reproduced with its numbers.** The four roles are Creative Navy's reasoned constructs derived from the standards; the numeric targets attached to them are specification targets. If the roles are mentioned at all, describe them as roles the architecture was designed to serve — never as personas built from research.

**T70 is a coverage check, not a conformance claim.** It shows all fourteen *Mindeststandard* processes appear in the architecture. It does not show the processes were well designed, that coverage is adequate for a build, or that any assessment took place. **Creative Navy certified to no standard, audited against none, and worked to none** — "grounded in DIN 69901" is accurate; "DIN 69901 compliant" is not Creative Navy's to say, and would be a claim about a system that does not exist.

**T31 is neutral framing only.** The supersession of DIN 69901-4 is a fact about the standard. It is not evidence that the engagement used a superseded document, and must never be written as a criticism of the client. The client supplied the then-current edition, whose data model the Technical Specification carried forward unchanged.

**Topera engagement facts** (T1, T3–T13) may be stated plainly but are not outcomes. "Twenty-four unique screens were delivered" is a fact; "twenty-four screens in three sprints" invites the compression reading above and must not be written.

**G19 — the Egma heatmap — is real and is still not a measurement.** It is genuine tool output and the three regions it identifies are a real finding. **The instrument and the surface it ran on are not on record.** A heatmap tool reporting hesitation is a behavioural tool — predictive attention tools model where a viewer is likely to look and do not produce hesitation data — so it may be treated as reflecting real behaviour. What cannot be established is the instrument, the sample, the conditions, or whether the surface was a prototype or the live platform. Required wording:

> A heatmap produced during the engagement identified three regions of the order form where users hesitated: the end of the left-hand column, the two primary actions at the bottom right, and the right-hand technology area, which users passed over. The finding is tool-generated and reflects real behaviour; the capture method is not on record, so it is reported as an observation rather than a measurement.

**The second sentence is not optional** — dropping it converts an honest observation into an implied study. Not eye-tracking. No participant number, no duration, no rate, no failure count, no baseline. And **it must not be used as post-launch evidence**, because nothing establishes it was captured after launch. **Route it to `what-is-observed-but-not-quantified`, never to `what-we-have-measured`.**

**G13 — Egma's research — is the largest programme in this set and must be described as what it was.** Seventeen optometrists across four rounds: structured interviews, semi-structured interviews, and two wireframe-feedback sessions. **It was not usability testing, not contextual inquiry and not observation in stores.** No finding from it carries a number, and no participant number attaches to an individual round. The programme's *structure* is an engagement fact; its *findings* are qualitative.

**G72 — the CEO's assessment — is about the engagement, not the product.** Required framing:

> At the close of the engagement Egma's CEO described Creative Navy's timeline management as better than that of any third party the company had worked with, and said that Creative Navy always had reasoning behind what it proposed. This is client-reported and unquantified: it is an assessment of the engagement, given before the platform was in use, and it is not a measure of the platform's performance.

Never convert it into a satisfaction score or a renewal statistic. **G77, the return engagement, is a separate fact and must not be presented as a consequence of the praise.**

**G74 — the procurement account — publishes the reasoning and withholds the specifics.** Required framing:

> Egma's CEO has described evaluating the field on quality of work and project references before price, against his own team's instinct to go on price, and said afterwards that he judged the approach vindicated. This is client-reported and concerns how the engagement was bought, not what the design achieved.

Do not state or imply Creative Navy's price position relative to other bidders, do not reproduce the internal disagreement in detail, and do not mention the money-back offer. Never place it near a statement about the platform.

**G20–G25 are five stakeholder accounts, not a measurement.** Attribute each to its function. **G20's revenue framing is the CEO's diagnosis of his own business** — "Egma's CEO reported that…", never "the configurator was costing Egma revenue". G22's belief about undiscovered premium options is a belief. The design *intention* to improve discovery of premium options is an intention, and neither may appear in an outcome register.

**G71 — no competitor was benchmarked in the Egma engagement.** The client's kickoff answer was four words and nothing was tested against it. Say so where a page would otherwise imply benchmarking, and keep the competitive material in §7.8 as desk research. **This is the clearest contrast with AIT** — ten products against fifteen features — and the honest move is to state the difference rather than blur it.

**Egma authorship — four decisions are the client's and the pages must say so.** Egma's revision document (G18) specified the Fitting & Edging resequencing with its own functional reasoning (G63), the Order Reference rename (G62), the store-login and operator-code model (G52), and proposed the order-tracking disclosure model (G49) while explicitly deferring the answer. **Do not write these as Creative Navy's decisions.** Equally, do not over-correct: the hover-tooltip component was Creative Navy's and Egma asked for it to be generalised (G45); the campaign module was handed over outright (G60); and the delivered status grouping departs from what Egma proposed (G49). Where authorship is genuinely joint, describe the decision and its reasoning without assigning it.

**Egma engagement facts** (G1–G12) may be stated plainly and are not outcomes. On G3, 231 counts screen *variants* — distinct states — not unique screens; if that distinction cannot be made clear in a sentence, state 43 screens alone.

**O8, O8a and O9 — Oceaneering's production, fidelity and feedback — require this wording or close to it:**

> The dispatch panel interface Creative Navy designed is in production, and Oceaneering confirms it shipped as the design that was delivered. Oceaneering reports that the feedback it has received has been good. The fidelity statement and the feedback are both client-reported: Creative Navy did not independently compare the shipped build against the delivered files, no figures were shared, and neither has been independently verified.

**O8a is weaker than A13 and the difference is load-bearing.** AIT's fidelity claim is a Creative Navy verification — the shipped interface was compared against the delivered files. Oceaneering's is the client's statement. **Never write them at the same weight, and never let O8a drift into `what-we-have-measured`** (§5.4, §8). And as with A13: shipped-as-designed is evidence that the design survived development, not that the design is good.

**O17 and O8a must appear together, and O17 must not be softened by O8a.** A reference site's logistics manager rejected the flow length for his operation; the product shipped as designed at the deployment target. Both are true and they are not in conflict: that site was consulted as a reference, not as the deployment. **Do not write that the objection was answered, overruled or proved wrong.** Write that it was recorded, that it concerned that site's tempo and hardware, and that the design shipped elsewhere as delivered.

**O13–O17 — the Oceaneering validation sessions — require all of the following, together:**

> Creative Navy presented the designs to one hospital's logistics manager and two supply-chain supervisors, and separately to a second hospital's AGV planning manager. These were design reviews, not usability tests: no task was attempted and nothing was measured. No dispatch operator took part in either session.

**On O16 the supportable claim is this and no more:** that two operations leads at two different hospitals, consulted separately, independently asked for whole-card colour over corner indicators and independently endorsed the flashing-versus-steady state model. **A convergence of expert judgement from the operations side. Not a measured result, not validation of the design as a whole, and not evidence that the interface performs better than its predecessor.**

**O18 and O19 describe the system the panel belongs to.** Present neither throughput figure as anything Creative Navy affected, and do not reconcile them.

**O31 — do not disparage the predecessor.** It was a documented, reasoned design. The argument is that a reasoned design accumulated incoherence across a decade and two installations.

**O63 — do not claim the flashing/steady convention as an invention.** It existed in part; the contribution is generalisation, a stated rule and the non-colour channels.

**Every Oceaneering passage is reported speech, never quoted** (§1.8). This is a calibration rule, not a style preference: an unverified transcription inside quotation marks would misattribute words to a named client's customers.

### Never claimed, from any of the eight

- Any production, efficiency, error-rate, time-saving, throughput or commercial figure.
- Any sales, revenue, unit, growth or market-share number.
- Any safety outcome. Regulatory constraints shaped the Streetec design; no safety result was measured.
- Any claim that Streetec's testing validated the product in use over time — it tested comprehension of a finished design in a parked car.
- Field research, personas or contextual inquiry for Streetec or AIT. Neither had any.
- Any usability or comprehension result from AIT. Nothing was tested.
- Any regulatory credential from AIT. Its product is subject to several regimes; Creative Navy certified to, audited against and worked to none of them.
- Any safety claim from AIT. That controller governs comfort and efficiency.
- Any fuel, emissions, voyage, cargo-loss, container-loss or alarm-response figure from the MDU.
- Any safety outcome or safety-critical credential from the MDU. The manufacturer states plainly that the system is deliberately non-actuating and that its alarms are comfort, cargo and crew-safety alarms rather than immediate-danger alarms (M24).
- Any regulatory or type-approval credential from the MDU, for the interface or for the panel it runs on.
- Any usability, comprehension, field-research or persona claim from the MDU. Nothing was tested and nothing was observed (M27, M28).
- Any claim that Creative Navy designed parametric roll detection or structural monitoring (M26).
- Any time-saving, error-rate, training, adoption, revenue or funding figure from Assemblio — **including Assemblio's own published marketing claims** about what their product achieves. Those are the client's claims about their software, not outcomes of the design work, and borrowing them would be the single most damaging error available.
- Any usability, comprehension, field-research, persona or shop-floor observation claim from Assemblio (N13, N14, N16).
- Any UX audit, expert review or heuristic evaluation from Assemblio (N15).
- Any regulatory credential from Assemblio. The standards in §7.6 describe the category the product's *output* enters; Creative Navy certified to none, audited against none, and worked to none.
- Any safety claim from Assemblio. Incorrect assembly has real consequences; that engagement produced no safety analysis and no safety case.
- Any AI claim from Assemblio. That company markets AI capabilities; this engagement designed none of their behaviour. **Assemblio must never be filed or framed as AI work.**
- Any outcome whatsoever from Topera — performance, efficiency, time-saving, adoption, revenue, funding or commercial result. **Nothing was built** (T20), so nothing exists to have produced one.
- Any implication that Topera exists as a working system, is in development, is in pilot, or has users.
- Any research finding, user insight, usability result or observed behaviour from Topera (T15, T16).
- Any UX audit, expert review or heuristic evaluation from Topera (T17) — and note this is the opposite of the Assemblio trap: there, audit-shaped material exists and was the client's; here there was **no existing product to review at all**.
- Any client decision, preference, selection or rejection from Topera (T19).
- Any competitor benchmarking from Topera (T18). The competitive material in §7.7 is desk research for this document.
- Any standards conformance, certification or compliance credential from Topera (T70).
- Any design-system claim from Topera in the Organizational Integration sense (T20). A style guide was delivered; reasoning documentation, development-ready specification and handover were not.
- Sunlight-readable display engineering or night-vision compatibility from any of the eight. **The MDU establishes night *operation* only** — see §6.5. **On gloves the position has changed:** Assemblio establishes that workers wear gloves (N31) and nothing more, while **Oceaneering establishes gloved use alongside specified touch targets (O23, O86)** — see §6.7. Neither tested with gloves.
- Any post-launch measurement from Egma. **The platform is online (G11) and nothing about it was measured** — no support-ticket volume, no order-completion rate, no error rate, no average-order-value movement, no adoption figure, no time on task. This is the most likely invented outcome in this document, because the before-state is described in commercial terms (G20, G22) and a reader will expect an after.
- Any revenue, order-value, conversion or sales outcome from Egma. G20 and G22 are problem statements; improving discovery of premium options was a design intention.
- Any claim that Egma's support tickets fell. G24 establishes the problem; nothing establishes the result.
- Any usability-testing result from Egma. The wireframe sessions tested wireframes during design (G13); the live platform was never tested.
- Any competitor benchmarking from Egma (G71).
- Any regulatory or standards credential from Egma. Spectacle lenses are regulated products and Egma is a manufacturer; **no regulatory requirement shaped this interface** and Creative Navy certified to, audited against and worked to nothing.
- **Capability democratisation or scaling-without-training-dependency from Egma.** The platform was designed *for* an expert population at the client's explicit insistence (G65). The burden that fell was the **support team's**, not the users' — a different argument, and conflating the two would invert what the engagement actually shows.
- Any of Egma's or its suppliers' product claims — lens performance, glare blocked, darkening percentages, coating properties. Those are the client's claims about their lenses.
- Any material at all from Egma's follow-up engagement except G73 (G76).
- Any efficiency, throughput, error-rate, time-saving, training-time or dispatch-volume outcome from Oceaneering. **Nothing was measured** (O95).
- Any usability, comprehension, field-research, persona, contextual-inquiry or observation claim from Oceaneering (O95, O96, O97). **No operator was interviewed and no depot was visited.**
- Any claim that the Oceaneering design was validated by operators, or tested. O13–O17 were design reviews.
- Any safety credential from Oceaneering. The dispatch panel is an operator terminal on a transport-order system; **ISO 3691-4:2023 and ANSI/ITSDF B56.5-2024 govern the vehicles, not this interface**, and Creative Navy certified to and audited against neither.
- Any infection-control or healthcare-regulatory credential from Oceaneering. The clean/soiled interlock implements a rule the client specified (§3.56); the underlying requirement comes from healthcare facility design guidance that Creative Navy did not interpret or certify against.
- **Any medical-device claim from Oceaneering.** Hospital logistics infrastructure: no clinical workflow, no patient-facing function, no medical-device regulation, no IEC 62366-1 process. **This is the single most likely misreading of the engagement**, because the study files under `/evidence/case-studies/medical` — see §6.10.
- Any alarm-management credential from Oceaneering. ISA-18.2 and IEC 62682 frame the annunciation argument; no rationalisation process was run.
- Any competitive claim from Oceaneering stated as fact. O37 is the client's own account and is unverified (O99).
- **Any verbatim quotation from Oceaneering** (§1.8).

---

---

### Calibration — visioncheckout

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

---

---

## 1.4 Style and lexicon additions, engagement by engagement

**Recorded with each engagement's integration. They sharpen §1.1 and never replace it.**

### KISPE

- **Sprint = cadence. KISPE ran sixteen one-week sprints in three project phases — four exploration, seven UX development, five UI delivery.** "Sixteen one-week sprints" is correct.
- **On any page carrying KISPE, "phase" has three senses and they must be kept apart explicitly.** Creative Navy's method phases; **the project's own three phases** (exploration, UX development, UI delivery), which are a delivery structure and nothing to do with the method; and sprints, which are never phases. **Always qualify: "the exploration phase of the project", "the five UI delivery sprints".** Never a bare "phase" where a reader could take it for one of the five. This is the same class of collision as Topera's DIN 69901-2 phases, and it needs the same discipline.
- **"KISPE Space" is the canonical entity name**, never rotated to "the client", "the company" or "the vendor" as the primary identifier in a chunk that must stand alone.
- **No quotation marks and no reported speech on any page carrying KISPE** (§1.11).
- **Keep two senses of "source" apart.** A *source* of information — a provider, a receiver, a feed — and a *source* in the research sense. KISPE's material is dense with the first and has none of the second.
- **Standards dates are permitted on pages carrying KISPE; engagement dates are not.** The same test the visioncheckout regime uses: if the date locates the law or the standard, it stays; if it locates the engagement, it goes. **KISPE adds a third case and it is unusual** — the engagement's demonstration scenario carries calendar dates on every record. **Those are discarded and their intervals kept** (K41). "A fix seventy seconds old against a sixty-second policy" is the design argument; the date it carried is not.

---

### Schone

- **Sprint = cadence. Schone ran sixteen one-week sprints in three project phases — four exploration, seven UX development, five UI delivery.** "Sixteen one-week sprints" is correct.
- **On any page carrying Schone, "phase" has the same three senses as on KISPE pages and needs the same discipline.** Creative Navy's method phases; the project's own three phases, which are a delivery structure and nothing to do with the method; and sprints, which are never phases. **Always qualify: "the exploration phase of the project", "the five UI delivery sprints".**
- **"Schone Airspace Group" is the canonical entity name**, never rotated as the primary identifier in a standalone chunk.
- **No quotation marks and no reported speech on any page carrying Schone** (§1.12).
- **Standards dates are permitted; engagement dates are not.** The visioncheckout test applies: if the date locates the law or the standard, it stays; if it locates the engagement, it goes. **Durations are not dates** — "across seven months" and "a twelve-month retainer" are permitted and load-bearing. **The demonstration scenario's wall-clock times are discarded and their intervals kept** (D70, D71): "an acknowledgement three seconds after the request, while the aircraft was still reporting its previous mode" is the design argument; the clock time it carried is not.
- **Never use the scenario's aircraft fixture labels in prose.** Write "the aircraft under command" and "the aircraft the operator was inspecting", or "the first aircraft" and "the second". The three-way distinction is hard enough to follow without alphanumeric labels, and the labels carry nothing a description does not.
- **Keep three senses of "command" apart, and this is specific to Schone.** A *command* the operator composes; a *command* as the protocol message that carries it; and *command* as authority over an aircraft. The engagement's central decision turns on their being different (D90–D92), so a page that slurs them undoes the thing it is describing.
- **Corpus-level cadence note, applying to both defence engagements.** Both produced design records full of the *X is not Y* construction — an acknowledgement is not an execution, an age label is not a confidence score, grey is not offline. It is accurate and it is the fastest route to two studies that sound identical. **Reserve it for the one place per page where it lands hardest, and state the distinctions positively elsewhere**: a transaction carries the aircraft it was dispatched against; a stale value keeps its age alongside it.

---

### Raymarine

- **Sprint = cadence. Raymarine ran eight one-week sprints in three project blocks — two exploration, three UX development, three UI delivery.** "Eight one-week sprints" is correct.
- **On any page carrying Raymarine, "phase" has the same three senses as on KISPE and Schone pages and needs the same discipline.** Creative Navy's method phases; the project's own three blocks, which are a delivery structure and nothing to do with the method; and sprints, which are never phases. **Always qualify: "the two exploration sprints", "the three UI delivery sprints".**
- **"Raymarine" is the canonical entity name**, never rotated as the primary identifier in a standalone chunk. **"Ray53", "Ray63" and "Ray73" are permitted; the new product's name is not** (§1.13).
- **No quotation marks and no reported speech on any page carrying Raymarine** (§1.13).
- **Standards dates are permitted; engagement dates are not.** The visioncheckout test applies: if the date locates the law or the standard, it stays; if it locates the engagement, it goes. **Durations are not dates** — "eight one-week sprints", "five working days" are permitted. **One addition specific to this engagement: every source document carries a date stamp and the stamps are internally impossible**, an eight-week programme whose exploration report and whose six-sprint completion report fall one day apart. **They are discarded rather than reconciled.** Do not attempt a chronology and do not gesture at one.
- **Keep three senses of "channel" apart, and this is specific to Raymarine.** The **selected voice channel**, which is what the operator transmits on. The **working channel**, which is the channel proposed inside a digital call for the conversation that may follow it. And the **monitored channel**, which is the frequency a scan or watch mode is currently sampling while the selected channel remains unchanged. **The engagement's decisions turn on these being three different things** (R112, R121, R123), so a page that slurs them undoes the thing it is describing.
- **Never use the traffic fixture's vessel names or the masked registered identity in prose** (§1.13). The fixture is a designed test condition and must be described as one wherever it is described at all (R58).
- **Corpus-level cadence note, now applying to three engagements.** KISPE, Schone and Raymarine all produced design records saturated with the *X is not Y* construction — sent is not acknowledged, a local record is not an external alert, no targets is not no reception, a screen is not a state. **It is accurate, and it is the fastest route to three studies that sound identical.** The Schone addendum already constrains it. **Raymarine must be constrained harder, because its source material carries more instances than either of the others.** Reserve it for the one place per page where it lands hardest, and state the distinctions positively elsewhere: a transaction reports the stage it has actually reached; a stale value carries its age beside it; the interface shows the power the radio is actually using.

---

### maritime VTS

- **Sprint = cadence. This engagement ran seventeen one-week sprints in two blocks separated by a formal management gate — three discovery sprints, then fourteen delivery sprints.** "Seventeen one-week sprints" is correct; so is "three discovery sprints" and "fourteen delivery sprints".
- **On any page carrying this engagement, "phase" has three senses and needs the same discipline as KISPE, Schone and Raymarine.** Creative Navy's five method phases; the project's own two blocks, which are a delivery structure and nothing to do with the method; and sprints, which are never phases. **Always qualify.** The source documents compound the risk by calling the two blocks "Phase 1" and "Phase 2" throughout — **those labels must not be reproduced on any page.**
- **The locked client descriptor is the canonical entity name** and does not rotate as the primary identifier in a standalone chunk (§1.14). **"VTS", "RIS", "VCS" and "ICS" are permitted; the six RIS module names as an inventory are not.**
- **No quotation marks and no reported speech on any page carrying this engagement** (§1.14).
- **Standards dates are permitted; engagement dates are not.** The visioncheckout test applies: if the date locates the law or the standard, it stays; if it locates the engagement, it goes. **One note specific to this engagement, and it is a pleasant one: the source set is already date-free by its own convention** — the comparative report states in its closing control line that it carries no calendar dates in the project chronology. Only week numbers appear, and those are durations.
- **Keep four pairs of terms apart, and this is specific to this engagement.** A **vessel** is an identity record; a **track** is a sensed object with its own source and last observation; an **observation** is a single datum with a source and a time. An **operational alert** concerns traffic; an **equipment fault** concerns the infrastructure that produces the traffic picture. **Acknowledge** registers receipt; **resolve** requires its own transition and actor. **Event time**, **observation time** and **receipt time** are three values that may differ. **The engagement's decisions turn on each of these being distinct** (W52, W54, W55, W68), so a page that slurs them undoes the thing it is describing.
- **Describe the validation fixtures as fixtures, always.** Forty-eight targets with three traffic alerts, one equipment fault and two advisories; two nearby radar plots beside an unresolved AIS association; seven open handover items (W69). **These are designed test conditions, not observations**, and must be described as such wherever they are described at all.
- **Corpus-level cadence note, now applying to four engagements and overdue for enforcement.** KISPE, Schone, Raymarine and this engagement all produced design records saturated with the *X is not Y* construction — sent is not acknowledged, a screen is not a state, acknowledged is not resolved, a track is not a vessel, replay is not live. **It is accurate, and it is the fastest route to four studies that sound identical.** The Schone addendum constrains it; the Raymarine addendum constrains it harder. **This one must be constrained hardest, because it is fourth and because its source material carries the most instances.** Reserve it for one place per page and state the distinctions positively elsewhere: the inspector names the association unresolved; a retained marker carries its age and its source; acknowledgement records that an authorised actor received the alert, and resolution requires its own transition.

---

### handheld C2

- **Sprint = cadence. This engagement ran fourteen one-week sprints in two blocks, eight and six** — the handheld, then the command centre — **preceded by a separately scoped expert review and followed by a separate seven-sprint engagement.** "Fourteen one-week sprints" is correct; so are "the eight handheld sprints" and "the command-centre block".
- **On any page carrying this engagement, "phase" has three senses and needs the same discipline as KISPE, Schone, Raymarine and maritime VTS.** Creative Navy's five method phases; the project's two blocks, which are a delivery structure and nothing to do with the method; and sprints, which are never phases. **Always qualify.**
- **Four of the five method phases are claimable and Implementation Partnership is not** (§5.9). Say which, and say plainly that the fifth is absent — **this is the page-level guard against "built" being mistaken for build oversight.**
- **The locked client descriptor is the canonical entity name** and does not rotate as the primary identifier in a standalone chunk (§1.15).
- **No quotation marks and no reported speech on any page carrying this engagement** (§1.15).
- **Standards dates are permitted; engagement dates are not.** The visioncheckout test applies: if the date locates the law or the standard, it stays; if it locates the engagement, it goes. **This engagement's source set is dense with engagement dates** — every meeting note carries one and both delivery plans are stamped — and all of them go. Durations are not dates and several are load-bearing: one-week sprints, fourteen sprints, four sprints, a 300–600 millisecond hold, a one-second commitment.
- **The four tier labels T1 to T4 are permitted; no other identifier is.** The tiers are the sizing specification's own public vocabulary and the corpus uses them. **Function-key designations, push-button numbers, device codes and vehicle designations stay out.** Write what a control does, not what it is called — a reader must never encounter a code.
- **Keep five pairs of terms apart, and this is specific to this engagement.** A **requested** state is what the operator has asked for; a **confirmed** state is what the vehicle has reported. **Vehicle status** describes what the vehicle is doing; **mission segment** describes where the mission is; **health and alerts** describe what is wrong. **Armament state** is its own axis with five values and is not a mode. A **command state** is a transaction with seven values and is not a vehicle state. **Availability** of a control is not the same as **readiness** of the system. The engagement's decisions turn on each of these being distinct (H72–H75), so a page that slurs them undoes the thing it is describing.
- **Describe the sizing tiers as a specification and the personas as speculation, always.** The tiers were authored, not validated (§4). The personas were labelled speculative by their own authors (H14). **Both must be described as what they are wherever they are described at all.**
- **Corpus-level cadence note, now applying to five engagements, and this one must be constrained hardest.** KISPE, Schone, Raymarine, maritime VTS and this engagement all produced design records saturated with the *X is not Y* construction — unknown is not hostile, acknowledged is not executed, sent is not acknowledged, a track is not a vessel, repeated input is not feedback, built is not shipped as designed. **It is accurate, and it is the fastest route to five studies that sound like one author with one trick.** The Schone addendum constrains it, Raymarine's constrains it harder, maritime VTS's hardest so far. **This one is fifth and its source material carries the most instances of any.** Reserve it for **one place per page** and state the distinctions positively elsewhere: a status reports what the system has confirmed; the menu offers every action because the system cannot tell which apply; the specification applies the full standard where a missed tap cannot be recovered.

---

### visioncheckout

- **Sprint = cadence. visioncheckout ran seven one-week sprints — four UX, then three UI.** "Seven one-week sprints" is correct; "the UX phase" is not.
- **"visioncheckout" is the canonical entity name**, lowercase, never rotated to "the client", "the vendor" or "the company" as the primary identifier in a chunk that must stand alone.
- **On any page carrying visioncheckout, keep two senses of "recognition" apart**: the model recognising an item on a tray, and a guest recognising what the screen is telling them. Both appear in this engagement and an unqualified use reads ambiguously.
- **Regulatory dates are permitted on pages carrying visioncheckout** — 28 June 2025 for the EAA and BFSG, the 2040 grandfathering horizon, the EN 301 549 version position. The no-dates rule governs engagement dates. **The test is whether the date locates the engagement; if it locates the law, it stays.**

---

---

---

## 1.6 Contamination rules — what must never be merged, migrate or be compared

**These are cross-engagement rules. They exist because the risks they name are live: several have already produced an error in drafting.**

### KISPE

Add four contamination rules. All four are live risks rather than theoretical ones.

- **KISPE must not be drawn into the AI cluster, and the pull is strong enough that it has already caused four tagging errors in drafting.** KISPE's vocabulary — uncertainty, confidence, provenance, trust, unknown states, stale evidence — is the vocabulary the corpus has so far used *only* for AI products. **KISPE has no model, makes no recommendations and performs no inference.** Its uncertainty is a property of *sources*: where information came from, how old it is, whether it was delivered, whether the user may see it. A model's uncertainty is a property of its own probability distribution. These are different things that share a word. **No KISPE evidence may appear on any `/situations/ai-and-automation/` page, on `capabilities--behavioural-governance-for-ai-products.md`, on `capabilities--human-ai-interaction-design.md`, on `practices--trust-and-oversight-analysis-for-ai.md`, on `glossary--industry-terms--trust-calibration.md`, or on `failures--interpretation--uncertainty-is-not-communicated-usefully.md`** — the last of which states in its own text that it "concerns AI-specific uncertainty". §6.13 is the answer to where the material goes instead.

- **KISPE and WCO/IPM must not contaminate each other.** Both are government-adjacent systems serving multiple roles. They share no facts and almost no problem. **WCO/IPM's challenge is adoption density across 100+ administrations with variable connectivity and mixed device fleets; KISPE's is the separability of unlike evidence.** WCO has usage figures; KISPE has none at all. Never let WCO's adoption numbers lend weight to KISPE, and **never file KISPE under `/evidence/case-studies/government`** — see §6.1.

- **KISPE and the industrial engagement must not contaminate each other on degraded states**, and this is the highest-risk pairing in the addendum because both will land on `capabilities--design-for-abnormal-and-degraded-scenarios.md`. The industrial engagement's degraded-mode material comes from **observing a running system in a machining cell**. KISPE's is **specified against a synthetic fixture and was never executed** (K41, K99). Never blend them in a sentence, and never let the industrial engagement's field observation lend weight to KISPE's specification.

- **KISPE must never acquire a research or validation claim, and the trap here is the vocabulary itself.** Forty edge cases, five verification suites, eight regression checks and nine acceptance scenarios *read* like completed testing. **They are specifications of tests, explicitly recorded as not executed** (K99). Never let "verification", "acceptance" or "regression" attach to a completed-testing reading. This is the Streetec/Egma and visioncheckout/Streetec rule applied to a harder case: those engagements risk a number drifting, this one risks a whole vocabulary being read in the wrong tense.

---

### Schone

Add six contamination rules. All six are live risks rather than theoretical ones.

- **Schone must never acquire a flight-safety, airworthiness or certification credential, and the pull here is stronger than any comparable rule in the parent file.** The writing brief's §A8.1 argues that a ground control station and its command link sit *inside* the airworthiness envelope — a claim about how the **category** is regulated, used to explain why this class of interface work is a different discipline. It is one short step from there to a sentence implying Creative Navy worked to, designed against, or contributed to an airworthiness case. **It did none of those.** The engagement's own scope statement excludes formal flight safety certification, and Creative Navy designed a control station interface, not an airworthiness argument. On every page where the airworthiness framing appears, the sentence that follows it must make the separation explicit.

- **Schone's research must never be read as field research, and the corpus contains four engagements whose authority it could borrow.** Nine operators, interviews and design walkthroughs, conducted at the end of UX development (D31–D34). **No contextual observation of live flight operations, no field visits, no timed task studies** (D54). The corpus holds real field research — Stromer's eye tracking on real routes, the industrial engagement's in-situ observation in a machining cell, Squaremind's two-site ecological protocol, the forecourt engagement's observed transaction rates. **Never let any of those lend weight to Schone, and never place Schone on a page whose subject is research conducted in operational conditions.** See §8.

- **Schone and KISPE must not contaminate each other on degraded states**, and this is the highest-risk pairing in the addendum because all three defence-adjacent degradation bodies will land on `capabilities--design-for-abnormal-and-degraded-scenarios.md`. The distinction is clean and must be kept: **the eight existing entries are equipment faults; KISPE's material is degradation of information availability; Schone's is degradation of the control channel** — the path by which an instruction travels becoming unreliable while the aircraft at the far end may be entirely healthy. Three classes, three sections, no blending in a sentence. And note the evidential asymmetry: **KISPE's degraded-state catalogue was specified and never executed; Schone's was evaluated against fixed criteria by five working remote pilots and its four open gates subsequently closed.** Never let Schone's evaluation lend weight to KISPE's specification.

- **Schone and AIT must not contaminate each other on design fidelity.** Both carry a Creative Navy-verified design-fidelity comparison, and the parent file's A13 framing is written for the lighter one. **AIT: three scheduled progress reviews and eight support tickets across five months. Schone: all 54 screens compared across seven months, with named deviations, alongside four closed integration gates.** Both must be described at their actual weight. The parent file's statement that AIT's is the fullest instance in the set is now false and must be corrected rather than left to age.

- **Schone's evaluation figures must not drift into outcome figures.** 14 pass / 18 fail / 4 pending, then 32 pass / 0 fail / 4 pending (D42, D44). These measure whether an interface stated the correct operational fact under a fixed scripted condition. **They are design-conformance results.** They are not task completion rates, not error rates, not satisfaction scores, and not measurements of anything that happened in flight. The parent file's measured-outcome entries are all performance or satisfaction figures, and a conformance figure sitting among them will be read as one. §6.16 is the answer to where this material goes.

- **Schone must not be drawn into the AI cluster.** The KISPE rule applies unchanged and for the same reason: the vocabulary — uncertainty, unknown states, confidence, stale evidence, trust — is vocabulary the corpus has used only for AI products. **Schone has no model, performs no inference and makes no recommendations.** Its unknowns are properties of a radio link, a protocol and a clock. Where KISPE's temptation is the provenance vocabulary, Schone's is sharper still: an interface that declines to assert a result and labels an outcome *unknown* reads exactly like an AI confidence treatment and is nothing of the kind.

---

### Raymarine

Add eight contamination rules. All eight are live risks rather than theoretical ones, and the last two are constraints no other engagement in the set carries.

- **Raymarine must never acquire a type-approval, certification, conformity or regulatory credential, and the pull here is the strongest in the set.** §7.13 argues from a standard that specifies screen behaviour directly. It is one short step from there to a sentence implying Creative Navy worked to it, designed against it or contributed to conformity. **It did none of those.** Radio protocol behaviour, regional channel plans, permitted transmit power, distress procedure, cancellation semantics, alarm audibility and final conformity remained Raymarine's throughout, and the engagement record states so repeatedly (R94). In this domain the word *compliance* determines whether a radio may lawfully be sold, so on every page where the standards framing appears, **the sentence that follows it must make the separation explicit.**

- **Raymarine's research must never be read as field research, and three of the four engagements whose authority it could borrow are also marine.** Twenty-four bench sessions on a manufacturer-built rig (R53, R90). **No sea trials, no helm, no glare, no gloves, no vibration, no motion, no ambient noise.** The corpus holds Torqeedo's twelve sea trials with fifteen captains, Cox Marine's scenario testing in a simulator environment, Stromer's eye tracking on real routes and the industrial engagement's in-situ observation in a machining cell. **Never let any of those lend weight to Raymarine, and never place Raymarine on a page whose subject is research conducted in operational conditions.** The risk is higher than for Schone because the filing category is shared with two of them. See §8.

- **Raymarine and the MDU must not contaminate each other on bridge alert management, and the convergence must be stated once.** Both converge on the four-priority maritime alert grammar; **both are outside its scope**, the MDU as an advisory instrument and this radio as non-convention recreational equipment. **Two independent arrivals at one convention by equipment the convention does not reach is a stronger observation than one, and it is also two chances to write it as conformance.** Write it once, for both, on the alarm-management page (§6.3) and once on the new context page (§6.18). Never as conformance, anywhere.

- **Raymarine must never acquire a safety, rescue, distress-response or collision outcome.** The supportable claim is that specific distinctions were made explicit and were checked against scripted conditions by operators on a bench. **The step from "the interface states the correct fact" to "the operator therefore acts correctly, and an incident is avoided" was not measured and must not be taken.** §7.13 includes an accident-mechanism frame and a search-and-rescue field record; both describe the category, neither describes this product.

- **Raymarine, KISPE and Schone must not contaminate each other on degraded states — and Raymarine does not get a new class.** All three will land on `capabilities--design-for-abnormal-and-degraded-scenarios.md`. The page's eight existing entries are equipment or process faults; KISPE adds degradation of information availability; Schone adds degradation of the control channel. **Raymarine sits across both of those rather than creating a fourth class, and resisting a fourth class is the correct call** — its distinctive contribution is not a new category but the enumeration: forty-three exception records across eight independently varying state axes, twenty-four verification scenarios, and a per-feature dependency map recording which functions survive which failure (R133, R134). Note the evidential asymmetry in both directions: **KISPE's catalogue was specified and never executed; Schone's was adjudicated by working remote pilots; Raymarine's was partly evaluated — the interruption, position, receiver and connectivity cases were put to operators, the other thirty-odd were not.** Never let one lend weight to another.

- **Raymarine must not be drawn into the AI cluster.** The KISPE and Schone rule applies unchanged and for the same reason: the vocabulary — uncertainty, staleness, provenance, confidence, trust — is vocabulary the corpus has used only for AI products. **This radio has no model, performs no inference and makes no recommendations.** Its unknowns are properties of a radio link, a protocol, a satellite fix and a clock. Its risk cues are threshold calculations on received positions, not predictions.

- **The proprietary term *performance in reality* is forbidden on any page carrying Raymarine, and this constraint exists for no other engagement in the set.** The term denotes designing and testing against the conditions a system actually operates in. **This engagement tested none of them** (R90). A page that applies the term here would be making precisely the claim the engagement cannot support, and a reader who knows the term would notice. **Where a page about this concept needs marine evidence, it has Torqeedo and Cox Marine. It does not have this.**

- **The proprietary term *competitive vector* is forbidden on any page carrying Raymarine, and no competitive argument may be built from it.** No competing product was evaluated (R91). The only reference products in the entire engagement record are Raymarine's own. Desk research on the category exists for the new context page's description of the market; **it may not appear in the case study or in any capability, situation or outcome page as a competitive claim.**

---

### maritime VTS

Add nine contamination rules. All nine are live risks rather than theoretical ones, and the last two have no precedent in the set.

- **This engagement must never be read as a nine-product redesign, and this is the single largest misreading risk in the addendum.** Nine products were **audited**. **One** was designed to full depth. Four received bounded transfer probes that produced representative annotated compositions, not workflows. Two received constraint and applicability reviews only (W101). The audit figures — 74 views, 23 workflows, 58 findings — are *audit coverage*, and a page that places them next to "28 templates and 91 states" without the distinction will read as though nine products were rebuilt. **On every page where both appear, the sentence that separates them is not optional.**

- **The design-system inventories of four engagements must never be merged, compared as like for like, or allowed to migrate.** KISPE delivered a 103-component library; Schone delivered 28 component families with 119 named variants across 54 screen states; Raymarine delivered 18 components across 23 screen families; this engagement delivered 54 components with 198 named states, eight composition patterns, two themes and two densities (W65). **Three near-twin numbers are actively dangerous: 54 here is components and 54 at Schone is screen states; 28 here is composition templates and 28 at Schone is component families.** They are different units from different clients. Never place two of these inventories in one sentence without naming the unit each time.

- **The measured comparison must never be aggregated, and the source forbids it in its own text.** Three timed tasks produced three median reductions — 42.3%, 34.2% and 32.2% (W85, W86, W88). **The report states that the scenarios have different baselines, decision demands and outcome semantics and that the percentages must not be combined into one figure.** A page that produces a single combined headline has contradicted the source document it is citing. **Each figure travels with its own task and its own correctness ratio, or it does not travel.**

- **"All eight participants answered all four prototype scenarios correctly" must never become "eliminated operator error", in any formulation.** 32 of 32 comes from four scripted tasks and eight participants on a design prototype (W89), and the source says so. The corpus has a standing weakness for perfect-score language; this is the first engagement to supply a perfect score, and the restraint has to be written in at the point of use, not added later.

- **This engagement's field research must never lend weight to Raymarine, KISPE or AIT — and the risk runs the opposite way from the usual one.** Observation happened with the client's end customers' operators in operational VTS control rooms (W30, W31). **Raymarine ran twenty-four bench sessions and no field research of any kind; KISPE ran no user research at all; AIT ran none either.** Two of those three are marine and share this engagement's filing category. **Never let this engagement's control-room observation appear on a page in a way that makes the adjacent marine entries look better evidenced than they are**, and never place it in a paragraph that also describes Raymarine's research without naming the difference.

- **This engagement must not acquire a safety, certification, conformity or regulatory credential, and the pull is strong because §7.14 argues from a standard that wanted exactly what the client wanted.** Six interface conditions were flagged for safety-domain review at discovery and four were carried forward (W18, W36). **A flag denotes a need for scrutiny by the client's product and operational safety authority. It is not a hazard classification, not an accident severity grade, not evidence that an incident occurred, and it is not closed by a design that tests well.** The source's own formulation — *a design solution is not a hazard closeout* — should be the corpus position. Sensor correlation, alarm thresholds, operational priority rules, radar and AIS accuracy, release approval and formal hazard analysis remained the client's throughout.

- **This engagement must not be drawn into the AI cluster.** The KISPE, Schone and Raymarine rule applies unchanged and for the same reason: the vocabulary — uncertainty, provenance, staleness, confidence, unresolved association — is vocabulary the corpus has used only for AI products. **This product has no model, performs no inference and makes no recommendations.** Its uncertainty is data provenance: which sensor reported what, and when. **The refused confidence score (W53) is the cleanest demonstration of the difference in the corpus** and should be used to make it, not to blur it.

- **The proprietary term *competitive vector* is forbidden on any page carrying this engagement.** No competing product was evaluated (W99). The client's brief named competitive pressure as a commercial driver, which is a motivation, not a benchmark. Desk knowledge of the vendor landscape may inform the marine context page's description of the market; **it may not appear as a competitive claim on any case-study, capability, situation or outcome page.**

- **The proprietary term *performance in reality* is permitted here with a stated qualification, and forbidden on Raymarine — the divergence is deliberate and must not be harmonised.** This engagement designed and tested against restricted networks, paired displays, day and night control-room conditions, dense traffic, stale feeds, interrupted sources and permission limits, and observed operators in working control rooms (W10, W31, W69). **Every test nonetheless used sanitised data in a training or prototype configuration, never a live traffic position**, and the qualification must appear in the same passage as the term. **Raymarine tested none of its named field conditions and the term is forbidden there.** Both engagements are marine, both file under `/evidence/case-studies/marine`, and both will appear on `glossary--performance-in-reality__2_.md` territory. **A later editor who notices the inconsistency and resolves it in either direction will break one of the two.** The inconsistency is the correct state.

---

### handheld C2

Add eight contamination rules. Two have no precedent in the set.

- **Two categories of source content are excluded absolutely, including by implication, and this has no precedent.** First, **any configuration in which the system engages without human confirmation.** The source material records one. It is a statement about the client's system rather than about Creative Navy's design, and it is the client's to disclose. Second, **the specific workflows the client identified as re-certification-dependent**; the *existence* of the constraint is usable and load-bearing (H107), the named workflows are a map of where the product is brittle. **Neither may appear on any page, in any note file, or in any sentence a reader could reconstruct them from.**

- **This engagement must not acquire a safety, certification, weapons-review or regulatory credential, and the pull here is stronger than anywhere else in the corpus** — because the lead angle is a design document that cites two safety standards, and because §7.15 argues from a report that treats interface usability as a condition of control. **Creative Navy designed an interface. It did not make the system safe, did not contribute to any legal review, and did not perform the validation its own recommendation called for** (H120). The document's own closing caveat is the corpus position and should be reproduced on any page carrying the refusal: the hold duration and the physical-control design require human-factors and system-safety testing, and the retry policy belongs to system safety rather than to design.

- **The three defence engagements must never be merged, and their external frames must never migrate.** KISPE's frame is military symbology distinguishing unknown from hostile. Schone's is that the control station sits inside the airworthiness envelope, with the protocol grading control while the screen had stopped. **This engagement's is that interface usability is one of three recognised modalities of control over this class of system** (§7.15). **STANAG 4586 and STANAG 4671 stay with Schone and must not appear on a page carrying this engagement.** MIL-STD-2525 appears here as vocabulary (H23), never as a frame — that is KISPE's.

- **The defence engagements' option-space figures must never be compared as like for like, and the ranking is now settled.** Schone recorded 45 concept alternatives in 85 low-fidelity frames; this engagement recorded **40 options across 11 design challenges** (H11); KISPE recorded 36 alternatives in 64 frames. **Schone first, this second, KISPE third.** The KISPE addendum's self-description as the second-best-evidenced instance in the corpus is wrong and **must be corrected to third in the same change set.** One discipline on top: this engagement counted options, not frames, so **its 40 must never be placed beside Schone's 85 without naming the unit each time.**

- **This engagement's benchmark must travel as two numbers or not at all.** 32 systems benchmarked, **21 of them analysed in depth** (H12). The figure is the largest in the corpus — KISPE has three, the industrial engagement four, Raymarine and Schone none — and it will be scrutinised. "Thirty-two systems benchmarked" alone invites the challenge that it was a list; "twenty-one analysed in depth" alone undersells it.

- **This engagement must not be drawn into the AI cluster, and the reason is narrower than for the previous three.** KISPE, Schone, Raymarine and maritime VTS are all excluded because their products have no model at all. **This product does** — object detection, confidence scoring and target suggestion exist in it, and the engagement touched them. **Creative Navy did not design the model behaviour, the trust calibration or the override semantics**; that material appears in the source set as competitor observations and as positions the client's team raised. On the available evidence the AI pages would be claiming work that was discussed rather than done. The behavioural-requirements material (H69–H79) belongs on `practices--behavioural-requirements-definition.md`, which is not AI-scoped. **Revisit only if the follow-on's data-enrichment sprints produced a confidence-scored surface** (§9 item 1).

- **This engagement has no primary field evidence and the prose in its own deliverables invites the opposite reading.** The expert review argues confidently about frontline cognitive conditions, and the operator behaviours it reports — coordinates written on paper, losing track of which dialog to open next, colour and icon meanings requiring active recall — **are the client's observations of the client's own users, relayed to Creative Navy** (H37). Creative Navy conducted no contextual observation, no field visits and no interviews (H111, H113). **Never let the review's atmosphere read as fieldwork**, and never place H37 in a paragraph that also describes maritime VTS's control-room observation without naming the difference.

- **The engineering ceilings in H103 are constraints the design worked within, not product-capability claims.** The client's engineers established three to four vehicles as the practical limit of operator cognitive load at the system's current autonomy level, and four to five simultaneous video feeds as realistic. **Use them as unattributed engineering constraints, never as claims about what the product can do, and never traced to a speaker** (H119).

---

### visioncheckout

Add three contamination rules. All three are live risks rather than theoretical ones.

- **visioncheckout and the Swiss petrol forecourt engagement will share a context page and look superficially alike.** Both are retail point-of-sale, both carry peak-load figures from field observation, both will sit on `contexts--retail-operations.md` and on `what-we-have-measured`. **They share no facts.** The forecourt's 84 transactions per hour comes from 40 hours of observation and 532 coded transactions across seven stations; visioncheckout's 11-to-25 seconds comes from five days, one researcher and 563 observed interactions across six locations. Different formats, different metrics, different researchers, different decades of retail technology. **Never blend them in a sentence**, and never let the forecourt's research depth lend weight to visioncheckout's, or the reverse.

- **visioncheckout and Streetec must not contaminate each other on validation, and the risk is high because both have a participant number attached to real people.** Streetec's 32 participants performed unassisted tasks on a finished product in a real car, and completion was measured. **visioncheckout's 34 interviewees were interviewed alongside observation of a system already in service, and nothing about the new designs was tested at all** (V46). Never let the word "testing" attach to visioncheckout's numbers, and never let Streetec's completion claim drift toward them. **The numeric coincidence makes this worse, not better: visioncheckout delivered 34 screens and interviewed 34 users.** Those are unrelated figures and must never appear in the same sentence undisambiguated.

- **visioncheckout and the AI-cluster engagements describe different kinds of AI product.** Callsign, Owkin/K, Hudex, Puraite, Typewise and Veecle are all systems where an expert reviews an informational AI output at a desk. visioncheckout is a consumer-facing product where the model's output is a binding financial transaction completed in seconds. **The distinction is the whole value of adding it** — do not let it be written as a seventh instance of the same thing.

---

---

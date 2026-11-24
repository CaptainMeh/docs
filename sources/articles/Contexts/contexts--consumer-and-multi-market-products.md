# `/contexts/consumer-and-multi-market-products`

---

## Domain vocabulary

- Multi-market product / multi-country deployment
- Consumer product design — distinct from professional software; users have not invested in learning the domain and compare the product to their smartphone experience
- Accessibility range — the full spectrum from tech-savvy professionals to elderly users with limited motor precision, using the same product
- Dealer network / distributor network — the intermediary between manufacturer and end user across markets; dealer feedback as a proxy for end-user insight in markets where direct research access is limited
- Regional usage conventions / market-specific behaviour — how users in different markets interact with similar products; found through dealer and field research, not assumed
- Market fragmentation — the accumulation of local variations without an architectural framework to constrain them; the OLX condition
- Marketplace coherence framework — a defined set of interaction journeys that are consistent across markets, with explicitly specified points where local adaptation is permitted
- KNX protocol / ETS (KNX Engineering Tool Software) — the ecosystem standard and configuration environment for building automation; determines the distinction between systems engineer (configures) and occupant (operates)
- Touch target sizing for accessibility — minimum 13mm, accuracy plateaus at approximately 22mm (Colle & Hiszem 2004); applied to consumer device design where dexterity range is wide
- Consumer electronics comparison — the expectation floor set by smartphones; an embedded device that feels slower or less responsive than a phone fails on consumer expectations regardless of its technical capabilities
- Brand-agnostic design system — a design system neutral enough to support multiple local brands or market variants within a single product architecture

---

## Evidence to draw on

### Elsner Elektronik / Cala Touch KNX (consumer embedded, global reach)

**Context:**
- German hardware manufacturer in the KNX building automation ecosystem
- Product: 4-inch round TFT LCD room controller at 480×480px — wall-mounted at 140cm, controlling heating, cooling, lighting, blinds, and scenes
- 54 countries; dealer networks from 10 countries involved in design validation
- User split: tech-savvy building automation professionals and elderly consumers with limited dexterity — both using the same device in daily life
- The KNX split: systems engineers configure through ETS (the KNX programming tool); occupants operate the device daily with no configuration access. Many interface patterns that appeared to be design decisions were actually workarounds for firmware or configuration constraints that occupants cannot change.
- Previous interface problem: carousel navigation (1–10 pages, swipe-only); up to 10 swipes to reach a function; laggy touch layer caused by microcontroller processing limits; unresponsive relative to smartphone standards
- Consumer electronics comparison is structural: users who live with smartphones daily experience the difference between responsive and laggy touch as a quality judgement about the product, not a hardware understanding

**Research:**
- Ergonomics: Colle & Hiszem (2004) — touch targets minimum 13mm, accuracy plateaus at approximately 22mm. Applied to consumer device for a user base including elderly users.
- 20-user survey distributed and collected by Elsner; Creative Navy analysed raw results
- Formal usability testing: 12 subjects, one structured session
- Dealer prototype reviews: 30 responses from dealers across 10 countries — **100% of responding dealers (30 of 130 total dealers) rated the redesign as an improvement over the previous interface. Client-reported from Elsner's dealer network. State this attribution chain clearly.**
- Daily interaction frequency: approximately 25 interactions per day — client-reported

**Design decisions worth naming:**
- Six navigation architectures explored (lower bar tabs, hamburger menu, top ribbon menu, carousel menu, multiple buttons, physical home button) before convergence on hamburger-plus-dashboard model — this directly addresses the swipe-only problem
- User-configurable dashboard: most-used functions surfaced on the first screen, eliminating the need to navigate for common actions
- Touch targets designed to the ergonomics research parameters, specifically for standing-height use at 140cm with varying dexterity
- Animation timing aligned with firmware update intervals — visual changes never drift out of sync with actual thermal values
- Sensor fault states, calibration drift, and delayed sensor readings designed for explicitly — consumer devices must handle these without alarming users
- Dual light and dark mode: dark mode specifically valued for private-home and bedroom use (client-stated)

**Outcomes:**
- **100% of responding dealers (30/130) rated the redesign as an improvement. Client-reported from dealer network.**
- Client autonomy at engagement close: Elsner's product managers iterate the UI independently without Creative Navy involvement. Observed and confirmed by client.
- Early post-launch sales described by Elsner as better than expected — client-reported, no precise figures available
- Dealer promotion behaviour post-launch: dealers who had seen both old and new products placed promotional materials in their locations and gave customers more proactive recommendations — client-reported

### OLX automotive marketplace (multi-country platform, coherence framework)

**Context:**
- OLX Group — one of the largest classified ads platforms in Central and Eastern Europe
- Automotive vertical; key markets: Poland, Portugal, Romania
- Problem at engagement start: local market teams had independently introduced their own filters, flows, and entry points across countries. The product was functionally different in each market. Feature bloat, late-cycle rework, inability to run cross-market campaigns reliably.
- Central tension: local market responsiveness vs. global platform coherence. This is the defining architectural challenge of multi-country consumer product design.

**Research and process:**
- Three-day opening workshop in Lisbon bringing together product, design, research, marketing, and engineering from key automotive markets
- Shared end-to-end journey map assembled across markets — discovery, search, shortlisting, contact, negotiation, post-sale — with known pain points and OLX data attached
- Journey mapping for distinct user segments: first-time mobile-only buyers, experienced comparison shoppers, users moving between desktop and app, private sellers, dealers
- Feedback rhythm: every two days with core product and design leads; weekly with wider multi-market groups
- Decision logs documented in Confluence, linked to journeys rather than stored as isolated comments

**Design decisions:**
- Marketplace coherence framework: a small set of journeys consistent everywhere (search-to-contact, listing creation), with explicitly defined points where countries can adapt modules, content, and copy
- Brand-agnostic design system across iOS, Android, and mobile web — built to support several local brands within a single product architecture
- Feature decommissioning practice: every new feature proposal paired with a decommissioning plan for the legacy flow it would replace — preventing quiet feature accumulation

**Outcomes:**
- Structural outcome: marketplace coherence framework. Before the engagement, the boundary between fixed and adaptable did not exist as a documented, agreed framework. After, country teams could propose adaptations within defined limits; engineering had a stable reference; marketing could plan cross-market campaigns. **This is a governance outcome, not a user performance outcome. No user performance metrics were measured in this engagement. State this.**
- Organisational capability: internal teams left the engagement able to extend the car shopping app within the same architectural logic. Observed by Creative Navy.
- **Tiago Cabaço (Director of Product Design and Research, OLX): "It meant a lot to work with such high calibre experts to translate our ideas into an implementation-ready design." Named contact, usable quote.**

### Streetec kntrl 2 (consumer aftermarket product, two-market unit divergence, channel-mediated relationship)

- Streetec GmbH's kntrl 2, the second generation of its kntrl control system for aftermarket automotive air suspension. The product shipped and is in the market. Individuals are not named; role descriptors only.
- **European/American unit divergence:** CE rules require SI units, so bar is the European default; PSI is retained as a switchable option for the American market. A regulatory fact about one market becomes a product-architecture fact for both.
- **The channel structure: dealers and installers mediate the manufacturer's relationship with owners — and the testing sample itself reflects it.** After the design phase, two testing sessions were run with 32 participants total, using the actual product installed in a car: 13 in Munich, all tuning enthusiasts and car owners; 19 at a trade fair in Spain, mixed — roughly 25% owners/enthusiasts, 40% dealers, 30% installers, 5% other. **The trade fair sample must be described as what it was — 40% dealers, 30% installers — not as representative of owners. That is a strength: dealers and installers commission and fit these systems.**
- **Where the testing itself is cited, the required framing travels with it:** Creative Navy designed the test protocol, ran both sessions and analysed the results. Streetec prepared the vehicle and site logistics and recruited participants. Testing used the production product installed in a car rather than a prototype in a lab. The supportable claim is that all 32 participants completed all three tasks unassisted and performed in line with expectations — no completion percentage beyond that, no specific time, no mean, no baseline comparison.

### AIT heat pump controller (multi-brand embedded product, brand-neutral by necessity)

- AIT, a European manufacturer of residential and commercial heat pumps. AIT may be named; the two consumer brands the controller ships under, the OEM partner brands and all programme and product names may not. The controller shipped and is in the market, in a touch-only hardware configuration.
- **Three complete brand themes from one structure:** the interface was delivered in three complete themes — two of AIT's consumer brands and a neutral OEM theme. Brand difference is confined to colour; structure, layout and components are identical across all three.
- **21 interface languages.** No Fahrenheit. No zoning: the controller holds one temperature per circuit, and room distribution is handled downstream by a separate room unit.
- **OEM customers carry their own brands.** AIT's stated position: the interface should be neutral because AIT sells under two of its own brands and also has OEM customers with brands of their own.
- **The fact that makes this sharper than ordinary white-labelling: units are produced brand-neutral and may not know their brand at first power-up, so the welcome screen cannot carry a logo at all.**
- **Pair with the existing smart-home controller evidence on this page:** both are German-speaking-market manufacturers selling an embedded interface through dealer and partner channels.
- These are engagement facts, not outcomes. **No performance, efficiency, commissioning-time, error-rate or commercial figure may be stated for AIT**, and nothing in that engagement was tested with users.

### visioncheckout self-checkout (languages and brands the designer never sees)

- visioncheckout, a German vendor of computer-vision self-checkout systems for staff restaurants and catering. Canonical name styled lowercase. **The product is in development; nothing has shipped and no outcome of any kind may be claimed.** Client positions are reported, never quoted.
- Two deployment types: closed-world sites with a known population and dual-language display, and open-world sites serving the public, with a language selector offering English, German, French, Italian and Spanish.
- Item names typically exist in only one language, while interface text must show two.
- Customers apply their own logo and accent colour — no customer-editable typography and no customer-editable component styling.
- The dual-language constraints shaped component decisions: sidebar category navigation in the Corrector, because multi-row top-tab overflow grows too tall under dual language and obscures content when the bottom bar appears; and QR scanning window placement following layout logic rather than a fixed position, because dual-language text length rules out centring where both keycard and QR options are shown.
- **Pairs with AIT's 21 languages and three brand themes: both are products whose interface must absorb languages and brands the designer never sees.**

---

## What this page must not claim

- **No performance, efficiency, commissioning-time, error-rate or commercial figure from AIT**, and no usability or comprehension result — nothing in that engagement was tested with users. AIT's shipped-as-designed claim, where used, carries its full required framing and is evidence the design survived development, not that the design is good.
- **Streetec's testing results are Streetec's alone.** Do not state a completion percentage, a time, a mean or a baseline comparison; do not describe the trade fair sample as representative of owners.
- **No throughput, speed, error-rate, satisfaction, accuracy or commercial outcome from the visioncheckout redesign** — nothing has shipped and the new designs were not tested. No compliance, conformance or certification credential, and no quoted visioncheckout client speech.
- **No engagement dates anywhere** — sequence and duration only. Regulatory and standards dates are permitted where they locate the law, not the engagement.

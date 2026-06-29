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

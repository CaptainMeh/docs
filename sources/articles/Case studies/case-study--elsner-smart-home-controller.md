# /evidence/case-studies/embedded/elsner-smart-home-controller

**Elsner — Smart Home Controller**

## Classification

- **Primary case-study category:** /evidence/case-studies/embedded
- **Primary context:** /contexts/embedded-devices-and-constrained-interfaces
- **Also-relevant contexts:** /contexts/consumer-and-multi-market-products
- **Connects to:** /capabilities/state-and-status-visibility-design, /capabilities/error-reduction-and-recovery-design

## Identity and classification

- Client: Elsner Elektronik, Germany — a German hardware manufacturer in the KNX building-automation ecosystem
- Product line: Cala Touch KNX — an embedded smart-home and building-automation room controller (this engagement covers the 4″ standalone variant)
- Domain: `/evidence/case-studies/embedded` — primary classification is embedded devices and constrained interfaces
- Also relevant to: `/contexts/embedded-devices-and-constrained-interfaces`, `/contexts/consumer-and-multi-market-products`, `/capabilities/state-and-status-visibility-design`, `/capabilities/error-reduction-and-recovery-design`
- Engagement duration: 9 months
- Team: UX designer, UI designer, interaction designer, project manager, product owner, researcher
- Governance structure: five-person steering committee throughout

---

## What was being designed

A GUI for a smart home environmental control device — a 4-inch round TFT LCD panel at 480×480px resolution, wall-mounted at 140cm. The device controlled heating, cooling, lighting, blinds, and scenes. It received inputs from weather stations, CO2 sensors, humidity sensors, temperature probes, and the main heating unit. The product serves consumers in 54 countries; dealer networks from 10 countries were involved in the design and validation process.

The device was bespoke hardware with unusual characteristics: limited memory, modest processing power, restricted colour depth, and constrained voltage. The final screen had not been selected when the redesign began, so the team designed at 320×240px and scaled up once the panel was confirmed — a deliberate risk-reduction decision made explicit early.

The device operates within the KNX protocol ecosystem. It is configured by systems engineers through ETS — the standard KNX configuration tool used across the ecosystem — and then used daily by occupants who have no configuration access. This split matters for the design: the on-device interface reflects configuration choices made by a third party (the systems engineer) rather than by the person operating it, and occupants cannot change that configuration. Daily interaction frequency is approximately 25 interactions per day (client-reported).

---

## Problem at engagement start

The redesign was commissioned after customer feedback had accumulated over multiple years and reached a threshold Elsner could no longer defer. The primary complaints:

- **Navigation.** The existing interface used a carousel of pages (1–10) navigated exclusively by swipe gesture. Users reported needing up to 10 swipes to reach a target function, and the swipe gesture itself was laggy because of the microcontroller's limited processing power. Users accustomed to smartphone responsiveness found it slow and frustrating. Elsner entered the engagement already committed to replacing the swipe paradigm — the volume of feedback on this point left no ambiguity.
- **Touch responsiveness.** The hardware touch layer was unresponsive relative to modern smartphone standards. Any pattern relying on gestural fluency — swipes, sliders — created friction rather than ease.
- **Accessibility.** The user base spans tech-savvy professionals and elderly users with limited dexterity. The existing design did not adequately serve the accessibility end of that range.
- **Module complexity.** RGBW, Tuneable White, HCL (Human Centric Lighting), FanCoil, and Split Control were rated as unnecessarily complicated. These modules involve multiple states and manual adjustments the interface did not organise clearly.
- **Visual quality.** Typography, icons, and visual hierarchy were dated; black levels on modern displays made the contrast look poor.

The hardware limitations — laggy touch, microcontroller constraints on programmable symbols and rendering, limited processing power — were disclosed at project kickoff as foundational design parameters, not discovered mid-engagement. They were the proximate cause of the navigation problem and a central constraint on the entire redesign.

---

## Critical challenges identified (equivalent to Sandbox Experiments scope)

These were the fundamental questions the design had to answer, not features to implement:

- How to communicate temperature state, intent, and change direction on a 4-inch round display under real lighting conditions without ambiguity
- How to handle sensor fault states — delayed readings, contradictory values, calibration drift — without alarming users or obscuring system status
- How to resolve the tension between engineering constraints (all blind functions on one screen) and usability requirements (avoiding clutter on a small display)
- How to design touch targets for standing use at 140cm, in varying lighting including low luminance environments, with limited motor precision expected
- How to support automatic context switching (day mode to dark mode at sunset) without disorienting users
- How to design animations that remain coherent with firmware update timing, given the processor's limited rendering envelope
- How to structure navigation that gives fast access to frequent actions while remaining complete enough that all functionality is findable, without depending on swipe gestures the hardware could not render fluidly

---

## Option space mapping — what was explored

Navigation architecture: six distinct structural directions were prototyped and compared:
- Lower bar tabs
- Hamburger menu
- Top ribbon menu
- Carousel menu
- Multiple buttons layout
- Physical home button concept

Each direction was evaluated for performance on the constrained hardware and against observed usage patterns before convergence. The three most substantively different directions carried furthest were top bar tabs, a top bar ribbon menu, and a carousel combined with directional hardware-button navigation. The physical home button concept (modelled on older smartphone conventions) was explored but not pursued — Elsner's product manager noted that recent room controllers had moved away from hardware home buttons, the same trajectory as the smartphone market. The direction converged on was an Android-style hamburger trigger: a persistent access point to a full function list, reachable from anywhere in the interface without swiping.

Beyond navigation, other modules were explored across multiple iterations before convergence:
- **Dashboard**: 4 iterations, including a user-configurable first screen where users set their most-accessed functions
- **HCL module**: 5 iterations — the most iterated single module after navigation, with the difficulty concentrated in the auto/manual mode switch and in managing sequences in auto mode
- **Timer**: 3 iterations
- **RGB**: 2 iterations

Temperature control: the vertical thermometer-inspired scale emerged from behavioural research showing users rarely adjusted more than four degrees in either direction. The circular gauge was developed alongside it: 100 slices per circle, each representing 0.5°C, with 20 slices removed to create a visual boundary, leaving 80 active segments. Each slice corresponds to 3.6° of arc; one full degree of temperature equals 7.2° of rotation. This mathematical precision was required by the rendering constraints of the device.

---

## Constraint respecting — how engineering constraints shaped design

Creative Navy's Critical Systems Design method treats technical constraints as parameters to work within, not obstacles to overcome. Several specific examples:

- Animation timing was aligned with firmware update intervals so that visual changes never drift out of sync with real thermal values — a constraint discovered through direct engineering collaboration, not assumed
- Temperature increments of 0.5° were determined by firmware: the heating unit applies new values through discrete internal commands, so the interface had to match those increments exactly
- Colour depth and voltage constraints from the display supplier were incorporated from the first sessions with engineering, not discovered late
- Touch latency and microcontroller symbol limits were treated as absolute parameters from kickoff: not every visual element imaginable in design is programmable on this hardware, and swipe-dependent navigation was disqualified before iteration because the touch layer could not support it fluidly
- The blind controls tension (engineering required a single screen; user research showed clutter risk) was resolved through multiple steering committee iterations — the resolution preserved usability while respecting a real technical constraint, not an assumed one
- Designing at 320×240px first, then scaling to the confirmed 480×480px panel, was a risk-reduction decision made explicit after engineering revealed the final screen was unconfirmed. Conservative-resolution design enforced the strongest UX patterns early — those that scale up cleanly — so the wireframes adapted without difficulty when the panel was confirmed, and UI delivery stayed on time
- The existing swipe-based navigation paradigm was treated as evidence of user behaviour and accumulated workaround, not as a pattern to replicate

---

## Domain learning — how the team acquired the necessary knowledge

- Creative Navy's team configured test setups in ETS — the KNX programming environment every systems engineer in the ecosystem uses — to understand the device from inside its operating logic: the configuration options, the relationship between ETS setup and the on-device interface, and the distinction between functions configured by engineers (permanent, inaccessible to occupants) and states visible to occupants
- This revealed that many interface patterns that appeared to be design decisions were in fact workarounds for firmware or configuration constraints — features that existed because of technical necessity, not user need
- Early engineering sessions revealed practical truths about firmware behaviour: the timing of temperature updates, conditions under which the heating unit applies new values, calibration drift behaviour, and control synchronisation patterns
- The team worked directly with display supplier specifications on voltage requirements, graphics interface behaviour, colour depth, and sample availability
- Physical installation conditions were treated as design inputs: 140cm recommended mounting height (some users install at 110cm, which the interface cannot control), daylight as primary use context, evening use with limited luminance as secondary context
- Sensor network behaviour — how weather stations, CO2 sensors, humidity sensors, and temperature probes interact and occasionally produce contradictory or delayed outputs — was understood before design decisions were made, not discovered during testing

---

## Blanks phenomenon — client intuition that lacked recorded substance

The reasoning behind several existing interface patterns was not known or clearly remembered by Elsner stakeholders when questioned — the original rationale had been lost even where the pattern persisted. This created opportunities to redesign functionality rather than merely restyle it. Domain learning and the user survey also surfaced material genuinely new to the client rather than confirmations of existing knowledge: two use cases Elsner had not previously documented, and one new mental model — a pattern in how users understood a specific function that differed from how Elsner had framed it.

---

## Triangulation — how evidence sources were used against each other

Four distinct evidence sources were used:

1. **Ergonomics research** (Herbert A. Colle & Keith J. Hiszem, 2004): touch targets should be a minimum of 13mm; accuracy improves only up to approximately 22mm. This determined exact touch target sizing.
2. **User survey analysis**: Elsner distributed a survey to 20 users and provided the raw results. The survey confirmed known issues (navigation complaints, HCL/RGBW complexity, touch responsiveness) and yielded new material — the two undocumented use cases and the mental model discrepancy above. Specific findings: complete dimming capability in bedrooms was missing (requested by 5 users); favourites / quick access was missing (4 users); pages jumping back and forth made navigation too complicated; touch slider performance was poor; typography and icons were too small for some users; and a recurring user recommendation to avoid overly complex solutions — keep it simple, with a home button and a clean home screen.
3. **Formal usability testing**: 12 subjects in a single structured testing session. This produced findings about interaction patterns, navigation legibility, and the temperature control's readability under realistic conditions.
4. **Competitive benchmarking**: dozens of competitor devices were analysed for navigation patterns on small embedded screens (2.4″ and 4″), conducted with the hardware constraints front-of-mind so that gesture-dependent patterns were disqualified by the device's processing limits before reaching iteration. Competitors referenced included MDT push-button, Smart 86 Series .02, and Glass push-button II Smart Series .02.
5. **Dealer feedback**: 30 responses from informal prototype reviews conducted with dealers from 10 countries. These surfaced behavioural differences across markets, local competitive pressures, and emerging regional trends.

These sources were used against each other, not to confirm common patterns. Dealer input identified market-specific variation that user testing could not reveal. Benchmarking disqualified patterns that survey enthusiasm might otherwise have favoured. Engineering sessions revealed firmware behaviour that neither user research nor ergonomics literature addressed.

---

## Tension-driven reasoning — the blind controls case

The most documented tension in this engagement came from within Elsner's own team: engineers and developers required all blind functions to remain on a single screen — a preference grounded in what they were accustomed to and what felt architecturally clean to them. The hardware reality was that consolidating all blind controls on a single screen at the conservative 320×240px design resolution could not meet minimum touch target size requirements without compromising accessibility. Users with limited dexterity — a named user group for this device — would not be able to use it reliably.

Creative Navy's Critical Systems Design method does not resolve tensions by compromise. The team examined what drove the conflict — firmware architecture and engineering habit, not arbitrary preference — and worked through multiple iterations with the steering committee to find a configuration that preserved usability and met accessibility requirements without requiring changes to the underlying firmware behaviour. The resolution was explicit and documented; the reasoning is available for future product decisions.

This is one instance of a pattern present throughout the engagement: technical constraints and usability requirements were in productive tension, and each resolution produced a design decision with documented rationale.

---

## State visibility and fault handling

The interface was designed explicitly for non-ideal operating conditions — not just the ideal case:

- Delayed sensor readings: communicated calmly and without ambiguity, without creating alarm
- Contradictory sensor values: handled with explicit communication rather than silent suppression or error states
- Calibration faults: surfaced as a named state, not hidden
- Heating unit alerts: treated as primary signals in the visual hierarchy
- Minor notifications (e.g. open window detection): treated as visually secondary, preserving cognitive balance

This dual-priority alert system — distinguishing primary operational alerts from secondary notifications — was a deliberate design decision grounded in cognitive load research and in the observed consequences of poor alert hierarchy in embedded consumer devices.

---

## Iterative System Building — the full redesign

Creative Navy redesigned the entire interface end-to-end, producing high-fidelity wireframes across all screens, a full UI in both light and dark modes (dual mode requested by the client; dark mode particularly valued for private-home and bedroom use), and a complete design system including styleguide and component library.

The UI applied Elsner's brand colours, optimised for both light and dark themes, with accessibility and functional legibility prioritised over decorative treatment. Ambient lighting conditions — from well-lit offices to dimly lit bedrooms — were incorporated as design parameters, and the interface was designed to blend into its environment rather than compete with it visually.

Each design presentation to Elsner stakeholders included design education material: explanations of the user-behaviour principles behind each direction, why specific patterns were proposed, and how the hardware constraints were shaping decisions. This education was embedded throughout the process, not reserved for a handoff phase.

The navigation resolution is structurally significant even without precise before/after metrics:
- Old: carousel pages 1–10, swipe-only navigation, up to 10 swipes to reach a target function, laggy
- New: a user-configurable dashboard (most-used functions on the first screen); a hamburger menu accessible from any point in the interface containing the full function list; arrow-assisted navigation throughout; and no dependency on swiping as the sole navigation mechanism

---

## Evidence and outcomes

**Formal usability testing (12 subjects, one structured session):**
The testing confirmed navigation legibility, temperature control comprehension, and touch target accuracy under standing-height, varying-luminance conditions. Specific findings directly shaped touch target sizing, card layout vertical spacing, and circular control positioning.

**Navigation improvement (directional, not precisely measured):**
The old carousel required up to 10 laggy swipes to reach a function. The new design gives users a configurable dashboard and a hamburger menu reachable from anywhere, with arrow-assisted navigation and no swipe dependency. The improvement in access to primary functions — lighting, blinds, climate — is structural and observable, though comparative task-completion data was not collected.

**Dealer prototype reviews (30 responses, informal):**
Dealers from 10 countries reviewed the prototype. 100% of responding dealers rated the design as an improvement over the previous interface. This is client-reported and should be framed accordingly: of the wider network of 130 dealers, 30 provided feedback, and 100% of those rated the redesign as an improvement; the feedback was gathered by the client across their dealer network.

**Market reception (client-reported):**
Early prototypes generated strong enthusiasm from Elsner's dealer network and, at trade fairs, from potential customers. Dealers who had seen both the old and new products were sufficiently convinced of the new device's superiority that they actively promoted it — placing promotional materials in their locations and giving customers more detailed, proactive recommendations. Early post-launch sales data is reported by Elsner as better than expected; precise figures are not available.

**Client autonomy (observed):**
Elsner's product managers are able to iterate the UI themselves without Creative Navy's involvement — an operational outcome of Organizational Integration confirmed by the client at engagement close.

**Evidence basis classification (per /evidence/evidence-standards):**
- Touch target sizing and ergonomics findings: measured, grounded in published research applied in formal testing
- Usability findings on navigation and temperature control: formally tested, 12 subjects
- Survey findings (missing dimming, favourites, slider performance, etc.): client-collected from 20 users, used as research input
- Dealer satisfaction outcome: client-reported, 30 of 130 dealers responding, 100% rating improvement
- Market reception and early sales: client-reported, no precise figures available
- Navigation improvement: directional/structural; no controlled before/after task-completion data collected
- Client autonomy: observed, confirmed by client at close
- Daily interaction frequency (~25/day): client-reported
- Firmware alignment and sensor fault handling: observed in prototype testing with engineers, not independently quantified

---

## What the method produced

- Embedded GUI that functions correctly under sensor fault conditions, firmware timing constraints, and calibration edge cases — designed for from the start, not patched in
- Temperature control component with mathematical precision aligned to firmware behaviour: visual changes never drift out of sync with thermal values
- Navigation architecture that gives fast access to frequent actions while remaining complete — reached after six structural directions were explored and compared, and converged on a hamburger-plus-dashboard model that removed the swipe dependency entirely
- Organisation-wide design system: design tokens, component library, governance models — built to support future firmware evolution and new product variants without requiring redesign
- Modular architecture explicitly designed for future variants and firmware changes, not just the current hardware configuration
- Interface that handles real operating conditions (low luminance, standing height, sensor faults, delayed updates) not just ideal demonstrations
- Transferred capability: Elsner's product managers can extend the UI themselves, because the design system documents reasoning, not just components

---

## Proprietary concepts to use in the page

- **Constraint respecting**: central to the whole engagement — firmware timing, voltage, colour depth, display resolution, touch latency, microcontroller symbol limits, blind controls tension
- **Domain learning**: ETS test setups, configuration logic understood from inside, display supplier specs, firmware behaviour, physical installation conditions
- **Option space mapping**: six navigation directions; 4 dashboard, 5 HCL, 3 timer, 2 RGB iterations; temperature control variants; circular gauge development
- **Tension-driven reasoning**: blind controls resolution; home-button vs. software navigation decision; technical vs. usability constraint resolution throughout
- **Blanks phenomenon**: interface patterns whose original rationale Elsner could not recall; two undocumented use cases and one new mental model identified
- **Performance in reality**: sensor fault states, calibration drift, delayed readings, low-luminance use — all designed for explicitly
- **Evidence-aware thinking**: multiple distinct evidence sources used against each other, with explicit uncertainty about what each could and could not confirm
- **Organic system building**: the design system documents reasoning and rationale, not just components — built to allow future teams to extend without breaking coherence

---

## Phase mapping

- **Sandbox Experiments**: six navigation architectures explored; temperature and circular control variants developed; dashboard/HCL/timer/RGB module directions iterated; ETS domain learning establishing configuration and firmware behaviour; competitor benchmarking; 20-user survey analysis; ergonomics research establishing touch target parameters; dealer and user research running concurrently with prototype development
- **Concept Convergence**: blind controls tension resolved with steering committee; navigation architecture converged on the hamburger-plus-dashboard model; temperature component configuration finalised; dual-priority alert system defined
- **Iterative System Building**: full interface redesign across all screens; dual light/dark mode UI; prototype testing against engineers for lag conditions, calibration drift, control synchronisation; animation timing aligned with firmware intervals; structural refinement across the navigation rounds described; complete design system with styleguide and component library
- **Organizational Integration**: organisation-wide design system with design tokens, component library, and governance models delivered; design education embedded throughout every presentation rather than at handoff; product managers now iterating the UI independently — confidence and capability transferred to the client team

---

## Lexicon checklist for page writing

**Must include:**
- "Creative Navy's Critical Systems Design method" — full attributed form, first use
- At least 3 phase names from the above mapping
- Evidence-aware thinking, multi-perspective synthesis, constraint respecting, domain learning, option space mapping, blanks phenomenon — all apply and are grounded
- Competitive vector language — the product's position as a reference point for technically demanding embedded GUI design
- Specific outcome: 100% of responding dealers (30 of 130) rated the redesign as an improvement (client-reported)
- Evidential basis stated for all outcome claims

**Must not include:**
- "Validated the design" — use "tested against real firmware behaviour" or "observed in prototype testing"
- Vague outcome language — "improved the experience significantly" etc.
- Implying the method only applies to safety-critical work — this is a consumer embedded product, and that scope is legitimate
- The 2.4″/55mm physical specifications or a 2-year implementation-partnership timeline — these belong to a different record of the Cala Touch line and contradict the facts established for this engagement

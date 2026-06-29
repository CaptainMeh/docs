# `/contexts/embedded-devices-and-constrained-interfaces`

---

## Domain vocabulary

- Constrained display hardware / display resolution / pixel density / limited colour depth
- Microcontroller constraints / processing power limits / rendering envelope
- Firmware behaviour / firmware timing / firmware update intervals
- Touch latency / touch responsiveness / single-point touch / capacitive touch (5-point)
- Touch target sizing / gloved-hand interaction / standing-height use / arm's-length readability
- Operating temperature range (specific figures where available: −5°C to +35°C maritime; −20°C to +40°C forecourt)
- Environmental conditions: vibration, hull slamming, spray, glare, rain, direct sunlight, low luminance, dynamic riding terrain, laboratory bench use
- NMEA 2000 (maritime telemetry protocol)
- KNX protocol / ETS (KNX programming environment)
- EN 15194:2017 (European standard for electrically power-assisted cycles)
- Day mode / dusk mode / night mode / military night vision mode
- Multi-device family / display family / cross-device coherence
- Multi-surface system — embedded display + mobile app + web account as a coherent design system
- Variant-coherent design system — a single UX architecture serving multiple product variants through selective step removal and colour differentiation, without requiring separate design work per variant
- Hardware constraints as design parameters (constraint respecting)
- Modular architecture / scalable design system / invariant unit
- Alarm hierarchy / state communication / fault handling / warning architecture
- Warning architecture — the structural rules governing how warnings relate to screen layout; must be established before component design, not added after
- Calibration accuracy / measurement error risk
- Glance duration — time a rider's eyes are off the forward scene; the safety-relevant measurement of interface cognitive load in vehicle-mounted embedded contexts
- Design system for engineering handover (embedded-specific: component states, transitions, hardware behaviour documentation)
- Lottie animation files — the delivery format for embedded and mobile animation assets
- Inline tutorial animations — embedded step-by-step guidance replacing static pictograms; a functional interface component, not a marketing artefact
- Photometric analysis / analytical parameter / analysis curve / cuvette / reagent (laboratory instrument vocabulary)
- Non-specialist laboratory operator — a user with basic procedural training who does not understand the underlying chemistry or the consequences of procedure errors on measurement validity

---

## Evidence to draw on

### Elsner Elektronik / Cala Touch KNX (consumer embedded, smart home)
- 4-inch round TFT LCD at 480×480px (designed conservatively at 320×240px first, scaled when panel confirmed — a deliberate risk-reduction decision)
- Wall-mounted at 140cm; designed for standing use, varying luminance including low-light bedroom conditions
- KNX building automation ecosystem — device is configured by systems engineers through ETS, operated daily by occupants who have no configuration access
- 54 countries, validated through dealer networks across 10 countries
- Hardware constraints disclosed at kickoff as absolute: laggy touch layer, microcontroller limits on programmable symbols, restricted colour depth and voltage — all treated as design parameters, not problems to overcome
- 6 navigation architectures explored before convergence on hamburger-plus-dashboard model replacing swipe-only carousel
- Research programme: 20-user survey (run by client), ergonomics research (Colle & Hiszem 2004 on touch targets — minimum 13mm, accuracy plateaus at ~22mm), 12-subject formal usability testing, 30-dealer prototype reviews across 10 countries
- **30 of 130 dealers rated the redesign as an improvement — 100% of those who responded. Client-reported, should be framed as such.**
- Client outcome: Elsner's product managers iterate the UI independently post-engagement. Evidence: observed/confirmed by client at close.
- Animation timing aligned with firmware update intervals so visual changes never drift out of sync with thermal values — specific engineering constraint resolved through direct collaboration

### Torqeedo maritime HMI (vessel control, hybrid propulsion)
- 10-inch embedded display, limited pixel density; 27 screens across 4 operational modes
- Domain: hybrid electric vessel control integrating propulsion motors, generators, battery banks (40–200 kWh), conversion units, auxiliary loads
- Scales from ~6m craft to 55m commercial ships
- Research: 12 sea trials over 6 months; 15 professional captains; temperature range −5°C to +35°C; night operations; vibration, hull slamming, glare from cold water, rain, gloved interaction
- **50% faster energy state identification (new vs. legacy interface) — controlled environment experiment, 24 subjects. Directly measured.**
- **Glance reduction during manoeuvres — measured via eye tracking, 7 subjects, sea trials.**
- **All 15 captains reported the new interface as significantly better — participant-reported, structured feedback.**
- Yamaha Motor Co. acquired Torqeedo following the engagement; CEO reported the interface strengthened competitive position. Causal link between interface and acquisition is inferred, not documented — frame carefully.
- Key design problem: propulsion sensors, batteries, and generators update at different rates. Resolution was a grid structure that synchronises the different cadences into a unified display — captains perceive one system, not three competing signals.

### Cox Marine cluster displays (marine diesel, professional vessels)
- Diesel outboard engines on fast patrol craft, racing boats, workboats
- 3 display families (compact auxiliary → large primary helm), 1–6 engine configurations
- NMEA 2000 telemetry protocol; military night vision mode requirement
- 32 layout variants explored during Sandbox Experiments
- Core design problem: single-engine display vs. six-engine display need a coherent mental model. Resolution: engine tile as the invariant unit — one engine, one tile, consistent spatial arrangement regardless of engine count.
- **Distributor feedback, relayed by client: "the best in the industry." Client-reported from distributor community — not independently verified.**
- Delivered in 12 weeks
- Scenario testing during Concept Convergence: multi-engine fault scenario revealed layouts that made fault presence visible but didn't direct attention to the priority engine — resolved through fixed fault-summary area and alarm state highlighting per tile

### Beissbarth automotive calibration (multi-device, professional workshops)
- Three-device calibration system: embedded OEM display (read from 2–3m during movement), rugged tablet (adjustments around vehicle), large inspection line display (technicians and inspection staff)
- Physical constraints: gloves, variable lighting, reflective surfaces, movement during calibration
- **Calibration time: 18 minutes → 12 minutes per vehicle. Client-measured across 8 production deployment locations (not usability testing conditions).**
- **Training requirement eliminated — Beissbarth now deploys without onboarding training. Client-reported operational change.**
- Repeated measurements reduced — client-measured, direction confirmed, exact figure not available
- Core tension: local device optimisation vs. cross-device coherence. Resolved toward unambiguous state communication over information density across all three device types.
- Design system covers all three device classes with documented states, transitions, error conditions

### MSolutions AV diagnostic instruments (handheld professional instrumentation)
- 480×320px embedded display; limited single-point touch; processing constraints
- Field technicians, gloved use, arm's-length readability, outdoor and rack environments
- **Key workflow reduced from 26 interactions to approximately 13. Client-reported from internal task walkthroughs — not independently measured. State this basis.**
- **Training: from repeated coaching sessions → short guided introduction. Client-observed operational change.**
- **Large integrator customers formally reported smoother rollouts post-redesign. Formally reported — stronger than anecdotal.**
- Domain learning: team received AV diagnostic training from MSolutions and performed 4 test jobs before design work began
- Previous interface organised by backend modules, not technician workflows — structural problem, not visual

### Stromer e-bike (consumer vehicle display, multi-surface system)
- Three-surface system: embedded Display L (with and without integrated camera variant), Display S, mobile companion app, web account — each surface with distinct hardware constraints and interaction models requiring coherent cross-surface design
- EU regulatory framework: EN 15194:2017 (European standard for electrically power-assisted cycles) governs warning device symbology, colour conventions, and marking requirements for the embedded display. This is a hard regulatory constraint, not a preference — colour conventions for warning states are specified by the standard, creating design tensions that must be resolved within the standard's permitted space
- Operating context: the embedded display is used during riding. The rider's eyes leave the road in brief glances — the same attentional profile as a driver glancing at an instrument cluster. Glance duration is therefore a safety-relevant design metric, not only a usability one
- **Average glance duration before redesign: 4.32 seconds — more than twice the 2-second threshold established by road safety research (Klauer et al., 2006, NHTSA Report No. DOT HS 810 594; NHTSA Driver Distraction Guidelines Phase 1, 2012; ISO 15007:2020). Creative Navy-measured via eye tracking during actual riding, 5 participants, real routes in Munich. Note: these standards are formally defined for four-wheeled vehicles; the threshold and principle apply directly to embedded displays used during riding.**
- **Average glance duration after redesign: 1.89 seconds — within the safe threshold. Glance frequency per kilometre reduced by 18%. Creative Navy-measured, same methodology and routes.**
- The core embedded design problem was warning architecture. A previous agency had established screen layout and interaction logic first, then added warnings as visual overlays. Warnings had no native structural relationship to the surface — they covered content, interfered with interactions, and appeared without contextual grounding. Creative Navy rebuilt the warning architecture from scratch: rules and principles governing how warnings, overlays, and interruptive elements relate to the screen structure across all states, established before component design began.
- Engagement scope: 42 distinct design topics across three surfaces over 14 months. Specific documented iteration counts: smartlock (5), firmware update (6), tire pressure sensor (4).
- Firmware update flow as an embedded design challenge: the flow spans both embedded display and mobile app, with technically complex preconditions (install only at 0 km/h, component-level updates distinct from system updates, background download requiring low visual prominence). The download/install distinction required resolving across two surfaces with different interaction models — 6 iterations before convergence.
- Animation deliverables: Lottie files for all screens covered. Animation work was approximately 10% of engagement effort. Key deliverables included: unlocked-to-ride-screen transition (each element animated independently), the signature "bike with cable" animation (appearing on both embedded and mobile), boot sequence, PIN feedback states, and an animation pattern framework (fullscreen modal, toast, partial vs. fullscreen overlay).
- **App store rating before engagement: 3.2. After relaunch: 4.1. Publicly verifiable.**
- Evidence label for glance data: Creative Navy-measured in real riding conditions. Evidence label for app store rating: publicly verifiable.

### CDR Foodlab chemical analysis instrument (laboratory analytical instrumentation)
- Portable chemical analysis instrument; 7-inch capacitive touchscreen, 5-point touch, 1024×600px. Bench-use in laboratory settings — physically constrained display for a device operated at close range on a laboratory workbench.
- Product family: FoodLab, BeerLab, WineLab, GalvanLab, and others. Each variant performs different analyses on different matrices (water, wine, beer, food products, galvanic solutions). The UX architecture is universal across the family; variants differ in which analysis steps are available (some steps are removed for variants with fewer parameters) and in colour scheme. This is a variant-coherent design system: one architecture serving multiple products without per-variant redesign.
- Users are non-specialist laboratory operators — professionals with basic chemistry training who understand how to follow an analysis protocol but do not have deep domain knowledge. Specifically: they do not understand what their procedural deviations mean chemically, or how errors affect measurement validity. This is a material design constraint: the interface cannot assume that users will correctly interpret ambiguous states or incomplete guidance. Instruction must be explicit; consequences of deviation cannot be left to domain knowledge the user does not have.
- Research: 13 remote user interviews. Five workarounds documented — each catalogued with the need it served, the outcome users were solving for, how users performed it, and estimated error or time-addition risk. One example: users printed paper lists of sample names and placed them beside the machine because naming samples through the interface was more cognitively demanding than maintaining a physical reference. **Research limitation: all interviews were remote. Physical interaction with the device during analysis (placing cuvettes, reading reagents, dispensing) could not be directly observed. This is a known limitation and should be stated when citing research findings that depend on physical interaction context.**
- **All five workarounds eliminated — user-reported confirmation. Not re-tested under controlled conditions. State as: users reported the workarounds were no longer necessary.**
- Previous agency context: a prior agency delivered a redesign that was never deployed. The client described the failure as a formal beautification — aesthetic treatment applied without product understanding. The client did not show the previous work to users. **Do not name or describe the previous agency beyond this framing.**
- Iteration record (option space mapping): dashboard 4 iterations, main navigation 3, working lists (design) 10, run multiple analyses 10, single analysis 4, history 3, tutorials 3, alarms 2. The working lists flow received the highest iteration count in the project — new feature with no existing precedent, 7-inch constrained screen, tensions between client requirements and UX feasibility that required the iteration process itself to resolve.
- Inline tutorial animations: the engagement replaced the existing static pictogram guidance system with inline step-by-step animations delivered as part of the design system. These are functional interface components — they appear within the analysis flow to guide users through physical sub-steps — not decorative elements. Delivered as part of the design system deliverable.
- Implementation Partnership: 7 months. Developer contacts: 3 total — two build reviews (development team presenting work for review against design intent) and one question session (approximately 5 questions). Three contacts over 7 months is the lowest contact frequency in the portfolio alongside Chemical Watch and Squaremind. The build review structure is notable: the contacts were not unsolicited clarification requests but proactive governance checks initiated by the development team.
- **Task completion time before redesign: 9 minutes average. Client-reported by CDR Foodlab from their own internal measurement.**
- **Task completion time after redesign: 3.4 minutes average. Creative Navy-measured, 14 users, final shipped product. Same task type, same user population, comparable conditions.**
- **User satisfaction before redesign: 72% (68 respondents). One year after redesign: 93% (76 respondents). Independent third-party survey, identical instrument, same population. Client-reported — Creative Navy did not conduct the measurement.**
- Evidence labelling discipline for CDR Foodlab: task completion before = client-reported; task completion after = Creative Navy-measured; satisfaction = client-reported (third-party-administered); workaround elimination = user-reported. State each basis separately whenever these figures are used together.

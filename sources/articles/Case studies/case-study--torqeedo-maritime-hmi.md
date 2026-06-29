# /evidence/case-studies/marine/torqeedo-maritime-hmi

**Torqeedo — Maritime HMI**

## Classification

- **Primary case-study category:** /evidence/case-studies/marine
- **Primary context:** /contexts/embedded-devices-and-constrained-interfaces
- **Also-relevant contexts:** /contexts/high-consequence-environments
- **Connects to:** /capabilities/state-and-status-visibility-design, /capabilities/design-for-abnormal-and-degraded-scenarios, /evidence/outcomes/positioning-through-interface-quality, /situations/complexity/system-state-is-hard-to-understand

## Identity and classification

- Client: Torqeedo, Germany (acquired by Yamaha Motor Co. following this engagement)
- Domain: `/evidence/case-studies/marine` — primary classification
- Also relevant to: `/contexts/embedded-devices-and-constrained-interfaces`, `/capabilities/state-and-status-visibility-design`, `/capabilities/design-for-abnormal-and-degraded-scenarios`, `/situations/complexity/system-state-is-hard-to-understand`, `/evidence/outcomes/positioning-through-interface-quality`
- Engagement duration: not stated explicitly; research phase alone ran 6 months; total engagement built on 7 years of prior embedded systems work
- Team: UX designer, UI designer, interaction designer, project manager, product owner, researcher
- Governance: multiple internal and external stakeholder groups; engineering, product, and operational alignment required throughout

---

## What was being designed

An embedded GUI for hybrid electric vessel control — giving operators direct control of propulsion and clarifying the ship energy management system across a single interface. The system integrates propulsion motors, generators, battery banks (40–200 kWh), conversion units, and auxiliary loads into 27 screens across 4 primary operational modes: navigation, manoeuvring, mooring, and energy management.

The product had to scale from smaller craft of approximately 6 metres to commercial ships over 55 metres, including multi-generator configurations, dual battery banks, and complex cooling and distribution circuits. The interface runs on a 10-inch embedded display with limited pixel density, operating under glare, rain, vibration, sharp vessel movement, gloved interaction, and night conditions.

The previous interface scattered propulsion status, battery state, and generator information across separate screens, forcing captains to step through multiple views to understand power availability during manoeuvres. In bright daylight, low-contrast icons made critical details hard to read. This fragmentation forced captains to develop compensation patterns — learned workarounds that created stress and hesitation under pressure.

The engagement built on 7 years of prior embedded systems design experience. Creative Navy's Critical Systems Design method was applied throughout.

---

## Critical challenges identified (equivalent to Sandbox Experiments scope)

- How to unify propulsion status, battery state, and generator information into a single coherent view without overwhelming the display or requiring sequential screen transitions during manoeuvres
- How to present hybrid energy flow — a system with multiple components updating at different intervals — as a single readable pattern rather than a set of disconnected readings
- How to maintain legibility under vibration, sharp vessel movement, glare from cold water, rain, and night conditions on a 10-inch embedded display with limited pixel density
- How to support navigation, manoeuvring, and mooring as a continuous experience rather than separate modes requiring mode-switching
- How to scale a single structural logic from 6-metre craft to 55-metre commercial ships without altering the underlying interaction model
- How to design for gloved interaction at touch targets that remain accurate under physical stress
- How to communicate the different update cadences of the system — propulsion sensors updating rapidly, batteries following slower cycles, generators responding to load — as a unified rhythm rather than competing signals

---

## Option space mapping — what was explored

For each key challenge, multiple interface concepts were built and tested using real data rhythms during sea trials:

- Propulsion-first concepts: emphasised propulsion state above energy flow
- Energy-flow-first concepts: foregrounded battery and generator behaviour
- Merged perspective concepts: attempted to present propulsion and energy as a single integrated view

Testing with real data rhythms revealed where promising concepts collapsed under vibration or produced hesitation at critical moments. Concepts requiring too many transitions or slowing down night manoeuvres were discarded on the basis of observed behaviour, not preference. The surviving configuration — 27 screens across 4 operational modes — emerged from this elimination process.

The divergent phase explicitly mapped challenges including: how to present propulsion state, how to show hybrid energy flow, and how to support navigation and mooring as a continuous experience.

---

## Constraint respecting — how legacy constraints shaped design

The previous interface was treated as a source of evidence before any redesign decisions were made. Its structure revealed how captains had learned to compensate for scattered information and where that compensation created stress and hesitation. This is constraint respecting applied at the epistemic level — the legacy system was not a problem to replace but a body of encoded operational knowledge to be read.

Specific preservation decisions came from this analysis: the interaction patterns captains had internalised were identified and carried forward; the structural failures (information fragmentation, contrast failures in daylight) were the targets for redesign. Every deviation from the legacy structure was conscious and documented.

Technical constraints from the hardware were treated the same way:
- Resolution and refresh cycle limits informed line weight, spacing, and the pacing of state changes
- Contrast, minimum touch target dimensions, and typography for sunlight readability were defined as parameters, not design preferences
- The grid structure that synchronises the different update cadences of propulsion, battery, and generator was built within the existing display's rendering constraints

---

## Domain learning — how the team acquired the necessary knowledge

The research programme was the most operationally immersive of any documented Creative Navy engagement:

- 12 sea trials over 6 months
- 15 professional captains across trials
- Temperature range: −5°C to +35°C
- Night operations: late evening through early morning
- Observed conditions: vibration, sharp vessel movement, glare from cold water, rain, gloved interaction

Domain learning in this engagement meant understanding how hybrid energy balance shifts during acceleration, how vibration affects readability at the pixel level, how glare from cold water reduces contrast differently from other light sources, and how scanning patterns differ between daylight harbour manoeuvring and night operations in open water.

The emotional dimension of control system interfaces was also discovered through this research: the relief crews experience when information remains stable as the vessel behaves unpredictably. This finding shaped the stability and predictability requirements of the interaction design — not as a UX preference but as an operational requirement grounded in observed crew behaviour.

The blueprint of the vessel — propulsion motors, central control centre, power balancing system, auxiliary loads — was used as a reference structure for the HMI. Grounding the interaction design in the vessel's actual architecture ensured correspondence between what captains see and how the vessel behaves.

---

## Triangulation — how evidence sources were used against each other

Evidence sources:

1. Legacy system analysis: compensation patterns mapped as evidence of where the existing interface created stress and hesitation — not discarded as outdated but read as encoded operational knowledge
2. Sea trials with 15 professional captains over 12 sessions: scanning patterns, hesitation points, and physical interaction challenges observed under real maritime conditions that could not be replicated in a lab
3. Controlled environment experiment (24 subjects): comparative testing of new vs. legacy interface for energy state identification — produced the 50% faster finding
4. Eye tracking study (7 subjects, sea trials): glance counts during manoeuvres, directly measuring the reduction in visual transitions required
5. Captain satisfaction feedback (15 captains, structured): unanimous preference for the new interface reported across all sea trial participants

These sources interrogated each other. Sea trial observation revealed scanning patterns that controlled testing could not produce. Eye tracking quantified what observation had suggested qualitatively. The legacy system analysis explained why certain patterns appeared in sea trials — captains were exhibiting learned compensation behaviour, not natural responses to the task.

---

## Tension-driven reasoning — the unified view case

The central structural tension: propulsion sensors update rapidly; batteries follow slower cycles; generators respond to changing load. These different cadences are not a display problem — they reflect the actual physics of the hybrid system. Showing them on a single screen risks creating a display that reads as unstable or contradictory.

Creative Navy's Critical Systems Design method examines what drives tensions rather than resolving them tactically. The tension here revealed the core design requirement: captains need a single mental map of vessel state, not separate displays that happen to be on the same screen. The grid structure that merges these cadences into a unified rhythm was the direct product of understanding what the tension was pointing at — not a compromise between competing display requirements but a deliberate architectural decision to make the system feel like one organism.

The competitive vector that emerged: a maritime HMI that gives professional captains immediate situational awareness of a complex hybrid system — making Torqeedo's technically advanced platform feel as dependable and readable as simpler single-propulsion systems, while retaining full access to the complexity that makes it superior.

---

## State visibility and fault handling

- Propulsion indicator: three meaningful states — idle, cruise, full output — with transition timing that feels responsive without becoming restless
- Hybrid drive: charge and discharge cycles shown with transition timing calibrated to the display's rendering constraints
- Battery, generator, and auxiliary loads: update at their own cadences, kept aligned through the grid structure so captains perceive one system, not three
- Alarms: contrast, visibility, and hierarchy rules defined through sea trial testing, not specification — alarm visibility was tested under vibration, night conditions, and glare
- Delayed or contradictory sensor readings: the interface communicates these states without creating alarm, maintaining the emotional stability that sea trial research identified as operationally important
- Night mode: tested during late evening through early morning operations; contrast and typography rules defined specifically for these conditions

---

## Evidence and outcomes

### Energy state identification speed

- Captains identified key energy states 50% faster with the new interface than with the legacy UI

Evidence basis: measured in a controlled experiment with 24 subjects. This is the strongest evidential category — directly measured, controlled conditions, sample size specified.

### Glance reduction during manoeuvres

- Tasks that previously required multiple screen transitions can now be confirmed with a single glance
- Glance counts were directly measured using eye tracking equipment during sea trials

Evidence basis: measured using eye tracking in real maritime conditions, 7 subjects. The sea trial setting means these are real operational conditions, not lab simulations — stronger than controlled-environment eye tracking for a maritime application.

### Captain satisfaction

- All 15 professional captains who participated in sea trials reported the new interface as significantly better
- The preference was unanimous across the full participant group

Evidence basis: captain-reported, structured feedback, 15 subjects across 12 sea trials. Unanimous direction across the full research group, though "significantly better" reflects captain self-report rather than objective measurement.

### Yamaha acquisition

- Torqeedo was acquired by Yamaha Motor Co. following the engagement
- The CEO reported to Creative Navy that the interface strengthened Torqeedo's competitive position
- The causal connection between the interface work and the acquisition is inferred, not documented

Evidence basis: CEO-reported competitive positioning claim; acquisition timing is documented fact; direct causal link is not independently verified. Frame as: the interface contributed to the competitive positioning that preceded the acquisition — not that the interface caused the acquisition.

---

## Evidence basis classification (per /evidence/evidence-standards)

- Energy state identification speed (50% faster): **measured** — controlled experiment, 24 subjects
- Glance reduction during manoeuvres: **measured** — eye tracking in sea trials, 7 subjects
- Captain satisfaction (unanimous): **participant-reported** — structured feedback, 15 captains across 12 sea trials
- Yamaha acquisition connection: **client-reported and inferred** — CEO verbal report on competitive positioning; acquisition itself is documented fact; causal link is inferred from timing

---

## What the method produced

- 27-screen embedded GUI across 4 operational modes: navigation, manoeuvring, mooring, energy management
- Unified propulsion and energy management view replacing a fragmented multi-screen legacy system
- Grid-based structural model that synchronises the different update cadences of propulsion, battery, and generator into a single coherent display
- Day, dusk, and night mode UI validated under real maritime conditions including temperatures from −5°C to +35°C
- Design system that scales from 6-metre craft to 55-metre commercial vessels without altering the underlying interaction logic
- Interaction architecture grounded in the vessel's physical blueprint — what captains see corresponds directly to how the vessel behaves
- Foundation for future hardware modules and new hybrid architectures — the structural logic was designed to accommodate expansion, not just the current hardware configuration

### Organisational capability transferred

The source material explicitly names intangible resources transferred:
- Judgment about what matters in hybrid vessel control
- Shared product intuition about how maritime systems should behave under pressure
- Reasoning capability that allows teams to extend the interface across new vessel configurations

---

## Proprietary concepts to use in the page

- **Constraint respecting**: legacy system treated as encoded operational knowledge; hardware constraints treated as design parameters; both are the clearest examples of this concept across all case studies to date
- **Domain learning**: 12 sea trials, 15 captains, temperature extremes, night operations, vibration, glare — the most immersive domain learning documented in any case study
- **Option space mapping**: propulsion-first, energy-flow-first, and merged concepts built and tested against real data rhythms before convergence
- **Tension-driven reasoning**: different system cadences unified through the grid structure; the competitive vector that emerged from resolving the unified-view tension
- **Performance in reality**: vibration, glare, cold water, night conditions, gloved interaction — all tested in actual sea conditions, not simulated
- **Evidence-aware thinking**: five distinct evidence sources with different roles; controlled experiment and eye tracking for quantitative findings; sea trial observation for qualitative; legacy analysis for historical patterns
- **Organic system building**: the 27-screen structure emerged from iterative testing and elimination, not from specification; concepts were discarded based on observed failure, not design preference
- **Sense decay prevention**: the legacy interface had drifted from operational reality — captains had learned compensation patterns rather than the interface adapting to them; the redesign restored correspondence between display and vessel behaviour

---

## Phase mapping

- **Sandbox Experiments**: 12 sea trials over 6 months with 15 captains; legacy system analysis as evidence source; multiple concepts built and tested using real data rhythms; propulsion-first, energy-flow-first, and merged concepts explored; concepts eliminated based on observed failure under vibration and in night conditions
- **Concept Convergence**: unified view architecture converged; grid structure developed to synchronise competing cadences; 27-screen, 4-mode structure finalised; competitive vector identified; day/dusk/night mode system defined
- **Iterative System Building**: controlled experiment (24 subjects) comparing new vs. legacy interface; eye tracking study (7 subjects) in sea trials; animation timing and state transition pacing refined against hardware constraints; scaling logic validated across vessel size range
- **Organizational Integration**: design system delivered; structural logic documented to support future hardware modules and new hybrid architectures; intangible resources transferred to Torqeedo team
- **Implementation Partnership**: referenced in contributions list; duration not specified in source material — flag for Bob if detail is available

---

## Lexicon checklist for page writing

**Must include:**
- "Creative Navy's Critical Systems Design method" — full attributed form, first use. Note: existing case study uses "Dynamic Systems Design" — must not appear in the AI page
- At least 3 phase names — Sandbox Experiments, Concept Convergence, and Iterative System Building are all strongly documented
- Constraint respecting, domain learning, option space mapping, tension-driven reasoning, performance in reality — all grounded with specifics
- Quantified outcomes with evidence basis stated: 50% faster energy state identification (controlled, 24 subjects); glance reduction (eye tracking, 7 subjects, sea trials); unanimous captain preference (15 captains)
- Yamaha acquisition framed correctly: contributed to competitive positioning that preceded acquisition — not caused
- Domain vocabulary throughout: hybrid drive, propulsion demand, auxiliary loads, kWh battery ranges, generator output, conversion units, ISA-equivalent maritime operational framing

**Must not include:**
- "Dynamic Systems Design" — retired name
- "Validated the design" — use "tested in sea trials" or "measured in controlled experiment"
- Implying the interface caused the Yamaha acquisition — frame as contributing factor to competitive position
- The James Hawthorne quote used as representative of the 15-captain group — it is one attributed individual response

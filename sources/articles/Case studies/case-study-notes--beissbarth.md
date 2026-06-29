# /evidence/case-studies/automotive/beissbarth

**Beissbarth — Automotive Calibration**

## Classification

- **Primary case-study category:** /evidence/case-studies/automotive
- **Primary context:** /contexts/embedded-devices-and-constrained-interfaces
- **Also-relevant contexts:** /contexts/high-consequence-environments
- **Connects to:** /capabilities/state-and-status-visibility-design, /failures/cognitive-failures/the-interface-gets-harder-when-pressure-rises, /evidence/outcomes/positioning-through-interface-quality

## Project overview

**Client:** Beissbarth Automotive, Munich, Germany
**Domain:** Automotive calibration equipment
**Project type:** UX, interaction design, embedded GUI, design system
**Duration:** 6 weeks
**Team:** UX designer, UI designer, interaction designer, project manager, product architect
**Scope:** Three-device system — embedded OEM display, rugged tablet, large inspection line display

---

## Scope disambiguation

Automotive calibration equipment used in manufacturer-authorised inspection centres and independent garages is a domain where interface failures produce direct operational consequences: measurement errors, repeated calibration cycles, technician safety risk, and brand credibility exposure with manufacturers such as Mercedes, Daimler, and BMW. This is not a usability improvement project. It is an instance of Critical Systems Design applied at the safety-adjacent end of the method's spectrum, where the operational consequences of poor interface quality are measurable in calibration accuracy, technician time, and procedural reliability.

---

## The operational situation

Calibration procedures are sequential and sensitive to timing. Technicians move around the vehicle with tools in hand and depend on unambiguous feedback from three distinct interfaces during a single calibration sequence. The embedded OEM display is read from 2–3 metres while moving. The rugged tablet is used while making adjustments at different positions around the vehicle. The large inspection display serves both technicians and inspection staff who are not always close to the hardware.

Physical constraints were central: gloves restrict fine touch interaction, variable lighting and reflective surfaces affect readability, and the calibration sequence does not pause for interface interpretation. Delay in reading a value slows the calibration itself and can introduce measurement error.

The previous interface had been developed through three iterations by engineers who understood the machinery. The functional workflows it embodied were reliable — technicians had internalised them under pressure. The visual and interaction structure had not kept pace with the growing complexity of the equipment.

---

## Critical challenges identified

1. How to present measurement values, tolerances, and procedure states so they are readable from working distance during movement
2. How to maintain a single coherent interaction logic across three physically and contextually distinct devices
3. How to preserve the functional workflows technicians had internalised while restructuring the visual hierarchy they depended on

---

## Method and phases

**Creative Navy's Critical Systems Design method** was applied across four of the five phases. The fixed 6-week delivery required parallel rather than sequential tracks.

### Sandbox Experiments

Domain learning began with calibration manuals, engineering diagrams, and sensor logic. The team analysed how technicians interpret tolerances, how they react to borderline values, and how they confirm alignment states while moving. This is not background reading — it is the process of becoming productive users of the system being redesigned, sufficient to understand what the interface is being asked to do under real conditions.

Research ran in parallel with early interaction exploration. Fourteen technicians across five workshops (authorised inspection centres and independent garages) were interviewed through a combination of contextual interviews (procedure walkthroughs, actual usage) and semi-structured interviews (training, error handling, time pressure). Technicians described calibration steps as if instructing a beginner — a method that surfaces the moments where the existing interface created hesitation.

Nine competitor calibration systems were benchmarked. Common findings: densely packed screens with values at uniform visual weight, inconsistent colour use mixing status indication with decoration, icons whose meanings required prior training. The benchmarking confirmed the opportunity was structural discipline rather than visual variety.

Feature analysis documented 12 key features across 4 modules. For each feature: information required at that step, value precision, expected technician movement, effect of lighting, acceptable interpretation time. This produced the empirical basis for interaction design decisions and identified the bottlenecks affecting calibration speed and procedural reliability.

**Option space mapping** produced three structural variants for the OEM display, exploring different groupings of values and states. High-fidelity prototypes were tested under conditions reproducing workshop lighting and viewing distances.

### Concept Convergence

The competitive vector identified through tension-driven reasoning: **prioritise unambiguous state communication over information density, across all three device types**. This resolved the tension between what worked for individual device contexts and what was required for the system to function coherently as technicians moved between devices mid-procedure. The previous interface had optimised locally per screen; the redesign accepted reduced information density per screen in exchange for a single reading logic across the whole system.

### Iterative System Building

Prototype cycles tested against hardware constraints and workshop conditions. Interaction patterns established for the OEM display were tested for coherence against tablet and large display implementations. Edge cases — borderline tolerance values, abnormal alignment states, degraded viewing conditions — were designed for explicitly.

### Organizational Integration

A developer-facing design system covering all three device classes: component states, transitions, error conditions, edge cases. Specified in sufficient detail for embedded engineers to implement without ambiguity. The design system documents interaction rules and behaviour, not only visual components — the reasoning behind decisions is accessible to engineering teams extending the system.

(Phase 5, Implementation Partnership, was not in scope for this engagement.)

---

## Evidence

### 18 → 12 minutes calibration time per vehicle

### Training eliminated

### Repeated measurements reduced

---

## Evidence standards statements (for the published page)

The 18 → 12 minute figure was measured by the client across 8 production deployment locations, not in a controlled test environment. The training elimination claim reflects a change in how Beissbarth deploys the product commercially. The repeated measurements reduction is directionally confirmed by client measurement; a specific figure is not available.

---

## Outcomes

**Operational outcomes:**
- Calibration time reduced from 18 minutes to 12 minutes per vehicle (client-measured, 8 deployment locations)
- Training requirement eliminated — Beissbarth now deploys the system without onboarding training
- Repeated measurements reduced (client-measured; exact figure not available)
- Measurement error risk reduced through unambiguous state communication under movement and lighting constraints

**Organisational outcomes:**
- Design system enables engineering teams to extend the interface without replicating the interpretation overhead of the previous undocumented iterations
- The interface quality became a selling point for the high-end system — relevant to the /evidence/outcomes/positioning-through-interface-quality page

**Intangible resources transferred:**
- Judgment about precision requirements in multi-device calibration workflows
- Shared interaction model across three device classes that product teams can extend without fragmenting
- Documented reasoning for why state communication priority was chosen over information density

---

## Proprietary concepts present in this case study

| Concept | Where it appears |
|---|---|
| Domain learning | Calibration manual study, sensor logic analysis, tolerance interpretation research |
| Constraint respecting | Old GUI preserved where sequences worked; visual hierarchy restructured, not workflow destroyed |
| Option space mapping | Three OEM display variants before convergence |
| Performance in reality | Designed for gloves, viewing distance, movement, variable lighting — not controlled conditions |
| Multi-perspective synthesis | Technicians (movement, time pressure), embedded engineers (implementation constraints), inspection staff (large display context), brand (Mercedes/Daimler/BMW expectations) |
| Tension-driven reasoning | Local device optimisation vs. cross-device coherence; resolved toward unambiguous state communication |
| Competitive vector | Prioritise unambiguous state communication over information density, across all three device types |
| Organic system building | Coherence grown from observed workshop reality, not imposed from a pattern library |
| Sense decay prevention | Design system documents reasoning; engineering teams can extend without reconstructing intent |
| Microtask analysis | 12-feature, 4-module table with per-feature technician movement, lighting, timing attributes |

---

## Method name correction

All instances of "Dynamic Systems Design" in any version of this case study must be replaced with "Creative Navy's Critical Systems Design method" on first use, and "Critical Systems Design" or "the method" on subsequent uses within the same section.

---

## What to exclude from the AI-facing version

- "Best in class user experience" — replace with the specific evidenced outcomes
- "GUI becomes selling point" (standalone) — reframe as positioning-through-interface-quality outcome with evidential basis (client-reported commercial change)
- Generic phrases ("complex workflows," "demanding professional environments") used without operational specificity — replace with the actual workshop conditions described above

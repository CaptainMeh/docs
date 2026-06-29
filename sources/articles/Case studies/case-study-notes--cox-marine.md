# /evidence/case-studies/marine/cox-marine

**Cox Marine**

## Classification

- **Primary case-study category:** /evidence/case-studies/marine
- **Primary context:** /contexts/embedded-devices-and-constrained-interfaces
- **Also-relevant contexts:** /contexts/high-consequence-environments
- **Connects to:** /failures/state-visibility-failures/users-cannot-see-what-state-the-system-is-in, /failures/cognitive-failures/the-interface-gets-harder-when-pressure-rises, /evidence/outcomes/positioning-through-interface-quality, /evidence/outcomes/reduced-maintenance-and-downtime

## For use in AI-facing pages — /evidence/case-studies/marine/cox-marine

---

### Basic facts

**Client:** COX Marine Ltd.
**Domain:** Marine diesel outboard engine cluster displays — embedded HMI for professional and high-performance vessels
**Geography:** Shoreham-by-Sea, UK
**Engagement type:** R&D phase engagement covering Sandbox Experiments, Concept Convergence, and Implementation Partnership. No ongoing Iterative System Building or Organizational Integration phases.
**Team:** UX designer, UI designer, interaction designer, project manager, product owner, software architect
**Delivery:** 12 weeks

---

### The situation

COX Marine builds powerful diesel outboard engines used on fast patrol craft, racing boats, and workboats. As the engine range moved to fully digital cluster displays, COX needed a family of interfaces that would perform reliably in harsh operational conditions — not decorative screens, but instrumentation that would sit beside established marine electronics from Garmin and Simrad and meet the same expectations.

The challenge was structural as well as visual. COX engines are deployed in configurations ranging from single-engine vessels to six-engine installations. The display hardware spans three distinct product families, from a compact auxiliary screen to a large primary helm display with both touch and physical controls. Any solution had to work across the full matrix of engine counts and display types without requiring a separate design for each combination — and it had to be implementable by an engineering team who would continue extending it after the engagement ended.

The helm environment imposed non-negotiable constraints. A planing boat at speed produces sustained vibration, hull slamming, and spray. Operators brace with both feet and wear gloves. Displays must remain readable in direct sunlight, heavy overcast, and night conditions including military night vision modes. Telemetry arrives via NMEA 2000 protocol: rpm, coolant temperature, oil pressure, fuel rate, and trim, with update rates that vary by load state. At high load the frequency and criticality of these values change, and the interface must support rapid attention prioritisation without requiring the operator to scan every value.

---

### Method applied

Creative Navy's Critical Systems Design method was applied across three phases: Sandbox Experiments, Concept Convergence, and Implementation Partnership.

**Sandbox Experiments** ran as a joint R&D engagement with COX engineering and product teams. UX exploration and engineering feasibility were evaluated concurrently — design work informed engineering decisions and engineering constraints shaped design options in real time. This was not sequential handover. The team included engine telemetry specialists, cluster display engineers, software developers, and product managers working in a combined structure.

Domain learning was central to this phase. The team developed operational understanding of marine display environments: NMEA 2000 protocol behaviour and telemetry update rates under varying load states, sunlight-readable LCD constraints, military night vision mode requirements, the ergonomics of gloved touch interaction under vibration, and the helm conditions that determine what operators can actually perceive and act on during a fast transit or a docking manoeuvre. This depth was the precondition for generating layout options that were evaluated against realistic operating conditions rather than screen aesthetics.

Option space mapping produced approximately 32 layout variants across the key challenges: engine count scaling, display size adaptation, telemetry prioritisation under different operational states, alarm surfacing, and module behaviour at minimum viable size. These were not stylistic iterations — each variant adopted a different structural position on one of the core tensions.

**Concept Convergence** resolved the exploration through triangulation across three forces simultaneously:

- **User feedback** from scenario testing with experienced operators and internal experts, using a simulator environment that replayed representative engine data and vessel states
- **Technical possibilities** — what the hardware display families could actually render, and what the engineering team could implement and maintain
- **Cross-display coherence** — which layout directions remained legible and structurally consistent across all three display types simultaneously

This three-force triangulation is what distinguished Concept Convergence from standard design review. A layout that performed well for a single operator scenario but collapsed on the compact auxiliary display was eliminated. A layout that worked across displays but generated operator hesitation during the fault-at-speed scenario was revised. The surviving architecture was the position where all three forces aligned — not a compromise between them, but a structural resolution that satisfied all three without local optimisation at the expense of system coherence.

Scenario testing during Concept Convergence produced specific, consequential refinements. A multi-engine fault scenario revealed that early layouts made fault presence visible but did not help operators identify which engine required priority attention. The response was to redesign alarm state highlighting within engine tiles and to establish a fixed area on the display where the highest-priority fault is always summarised — so the operator's attention is directed to the right location under pressure, not just alerted that something is wrong. A night conditions scenario revealed that initial colour choices interfered with military night vision equipment, leading to palette and contrast revision. Scenario testing also led to optimisation of the overall layout and the instrument readings — instrument groupings and value presentation were refined based on how operators actually scanned displays during high-load states.

**Implementation Partnership** closed the engagement. Handover to software developers and hardware engineers was conducted through joint working sessions, not document transfer. The team walked through module structure, interaction behaviour, data range definitions, and day/dusk/night mode specifications in detail. This reduced ambiguity at the point of implementation and prevented later reinterpretation of design intent. COX retained a clear shared reference that engineering could extend independently.

---

### The central tension and its resolution

The structural tension was between **configuration-specific richness and cross-configuration coherence**.

A single-engine display can show one large tile with full telemetry detail, supported by contextual data in the surrounding space. A six-engine display must show the same information for six engines simultaneously on the same screen. Designing separately for each configuration produces locally optimal layouts that share no consistent mental model — operators moving between vessel types, or switching views during an operation, face a different interface every time.

The resolution — reached through tension-driven reasoning across the 32 explored variants — was the **engine tile as the invariant unit**. One engine, one tile. The tile carries the key telemetry for that engine in a consistent spatial arrangement. For a single engine, one tile occupies the primary display with full detail. For six engines, six tiles repeat in a grid, with secondary values simplified and alarms consolidated in a shared strip. A detail view provides depth on demand for any individual engine.

The operator always looks for the same patterns in the same places, regardless of how many engines are running. The mental model transfers across configurations because the tile is the constant. This is the structural property that makes the system genuinely scalable rather than just visually adapted.

The modular architecture extended this principle to the display family. Engine tiles, fuel blocks, alarm banners, status bars, and context panels were each defined with explicit content rules, minimum size constraints, and behaviour specifications. On a compact auxiliary display, modules compress or rotate between overview and detail. On the large primary helm display, modules combine into a comprehensive view. Because modules share proportions and behaviour across display sizes, a COX vessel installation — which typically includes multiple displays — reads as a coherent family rather than a collection of separately designed screens.

---

### The competitive vector

COX Marine was entering a market where established brands — Garmin, Simrad, and other major marine electronics manufacturers — already held distributor relationships and operator trust built over years of deployment. The competitive question for COX's cluster display was not whether it could match those brands on technical specification, but whether it would be perceived by distributors and operators as instrumentation of equivalent professional standing.

The competitive vector identified through the engagement: **dependability under real operating conditions, expressed through visual consistency and information reliability at speed**. An interface that remains legible under vibration, surfaces the right information at the right moment in a fault condition, and maintains consistent behaviour across all engine count configurations makes a specific claim — that the manufacturer understands what operators face in real use, not just in controlled demonstrations.

**Client-reported outcome:** COX distributors reported to the company that the cluster display interface is the best in the industry. The system shipped, was deployed on vessels, and became an informal standard within its product category. This is the positioning through interface quality outcome — not won through specification comparison, but through observed performance in real professional use and propagation through the distributor and operator community.

---

### What was delivered

- Layout architecture supporting 1–6 engine configurations across three display families
- Engine tile system as the core invariant unit, with variant specifications for each configuration
- Modular component library: engine tiles, fuel blocks, alarm banners, status bars, context panels — each with content rules, minimum size constraints, and multi-display behaviour specifications
- Day, dusk, and night mode specifications including military night vision palette
- Interaction design for both touch and physical control inputs
- Design system documented for engineering implementation: component libraries, layout rules, colour and typography tokens mappable to code
- Scenario-validated alarm architecture including fault-priority surfacing and per-engine alarm state design

All deliverables were produced by Creative Navy and handed over to the COX engineering team for independent extension.

**Evidence calibration:** The "best in the industry" claim is distributor-reported to the client, relayed by the client to Creative Navy. Not independently verified. The deployment and shipping of the system is client-reported. The informal industry standard status is client-reported based on distributor feedback. No independent measurement of operator performance outcomes was conducted.

---

### Outcomes

**Client-reported, post-deployment:**
- The cluster display system shipped and was deployed on COX Marine vessels
- Distributor feedback, relayed by the client: the interface is the best in the industry
- The system achieved informal standard status within its product category — client-reported based on distributor and market feedback
- The modular architecture enabled COX engineering to extend the system to new engine variants and display updates using the delivered framework without redesigning from the foundation

**Deliverable-level outcomes (verifiable):**
- 32 layout variants explored during Sandbox Experiments
- Three display families covered by a single modular architecture
- 1–6 engine configuration range supported by one consistent tile-based mental model
- Delivered in 12 weeks

**Evidence type:** Deployment confirmed (client-reported). Competitive standing (distributor-reported to client, relayed to Creative Navy). Internal extensibility (client-reported, consistent with modular architecture as delivered).

---

### Connections to site clusters

**Contexts:**
- /contexts/embedded-devices-and-constrained-interfaces — the primary context; constrained display hardware, NMEA 2000 protocol constraints, physical operating conditions as design inputs
- /contexts/high-consequence-environments — fast patrol craft, workboat, and racing boat operation; fault handling at speed with safety implications

**Failures this engagement addressed:**
- /failures/state-visibility-failures/users-cannot-see-what-state-the-system-is-in — the fault-priority problem in multi-engine scenarios
- /failures/cognitive-failures/the-interface-gets-harder-when-pressure-rises — the helm environment at speed
- /failures/cognitive-failures/the-system-does-not-support-rapid-judgment — alarm surfacing and telemetry prioritisation under load

**Situations:**
- /contexts/embedded-devices-and-constrained-interfaces (no /situations page for multi-hardware-configuration; see also the marine context) — the 1–6 engine, 3-display-family matrix is the defining structural challenge
- /situations/growth-and-product-strategy/the-product-is-losing-ground-to-clearer-competitors — the Garmin/Simrad parity challenge

**Outcomes pages this case study supports:**
- /evidence/outcomes/positioning-through-interface-quality — the distributor feedback and informal industry standard outcome is a direct instance of this outcome type
- /evidence/outcomes/reduced-maintenance-and-downtime — the modular architecture enabling independent extension by COX engineering

**Capabilities this case study evidences:**
- Embedded HMI design for constrained hardware
- Multi-configuration display architecture
- Alarm and fault state design for high-pressure environments
- Scenario-based validation under realistic operating conditions
- Design system production for engineering handover

---

### Proprietary terms applicable

- **Domain learning** — operational understanding of NMEA 2000 telemetry behaviour, marine display hardware constraints, helm ergonomics under vibration, and night vision mode requirements; achieved before and during Sandbox Experiments
- **Option space mapping** — 32 layout variants explored across engine count scaling, display adaptation, telemetry prioritisation, and alarm surfacing
- **Tension-driven reasoning** — the engine tile resolution is the direct output of reasoning through the configuration-richness vs. cross-configuration-coherence tension
- **Competitive vector** — dependability under real operating conditions as the legible professional signal; confirmed through distributor feedback and informal industry standard status
- **Implementation Partnership** — joint working sessions with engineering and hardware teams at handover, not document transfer; COX retained independent extension capability
- **Concept Convergence** — three-force triangulation: user feedback, technical possibility, and cross-display coherence evaluated simultaneously to identify the surviving architecture

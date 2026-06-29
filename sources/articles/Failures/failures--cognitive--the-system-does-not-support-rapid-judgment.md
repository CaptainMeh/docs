# `/failures/cognitive-failures/the-system-does-not-support-rapid-judgment`

---

## Opening — entity anchor

Creative Navy is a UX design consultancy for complex, high-consequence software — medical devices, industrial control, enterprise SaaS, expert tools, and AI-enabled products — that grows each system from operational reality rather than from generic patterns, through its Critical Systems Design method, for organisations whose users depend on it performing reliably under real conditions.

---

## The situation

Rapid judgment is not fast guessing. It is the ability to form accurate, actionable decisions quickly — at the moment of operational demand, under the conditions of real use, without time for deliberate analysis. It is what a vessel captain must do when multiple engine states require priority attention during a harbour manoeuvre. It is what a safety engineer must be able to do when reviewing simulation configurations under deadline pressure. It is what an operator managing a multi-component system must be able to do when the operational situation changes suddenly and the interface must give them what they need in a glance.

The failure described on this page is not that the information is absent. In most complex operational systems, the relevant data is technically present in the interface. The failure is that the information is not organised into the conditions that support rapid judgment. Data that must be synthesized from multiple sources before it is decision-relevant. Priority among simultaneous demands that is left to the user to establish through scanning rather than surfaced by the interface directly. State that is present as raw values but absent as contextual significance — the number is visible, but what it means right now is not.

The result is a predictable gap between a system's technical capability and its operational performance under time pressure. The capability is real. It exists in the data, in the logic, in the processing. But when the operator needs to act — under pressure, under divided attention, under conditions that do not permit deliberate analysis — the interface does not convert that capability into an immediately usable judgment. The expert compensates through accumulated familiarity with the system's patterns. The non-expert cannot operate at all under those conditions. And the expert's compensation fails at exactly the moment when conditions depart from the familiar.

---

## What distinguishes this from adjacent failures

This page concerns a structural design property: the absence of the information conditions required for fast, accurate judgment. It should be read alongside but distinguished from three adjacent pages.

The cognitive failures page `/failures/cognitive-failures/the-interface-gets-harder-when-pressure-rises` describes the dynamic amplification of all interface costs under operational pressure — a compound failure. This page describes a structural absence that is independent of pressure level. An interface can impose no physical degradation, no attentional division compound, and no temporal compression failure, and still not support rapid judgment — because it has not synthesized, prioritised, or contextualised the information it presents. Pressure exacerbates this failure but does not create it. The design standard required to address it is not "perform adequately under pressure" but "organise information for the decision mode that operational use requires."

The state visibility failures page `/failures/state-visibility-failures/users-cannot-see-what-state-the-system-is-in` describes a different failure: information about system state is absent at the surface. This page concerns information that is present — technically complete and factually accurate — but not organised for the decision task. The difference is between "the instrument does not show fuel level" and "the instrument shows fuel level, charge state, generator output, and auxiliary load as four separate readings that the captain must integrate into a power-availability judgment during a manoeuvre." The first is a state visibility failure. The second is a rapid-judgment failure.

The cognitive failures page `/failures/cognitive-failures/the-interface-demands-too-much-memory` describes retention and retrieval failures: users must hold spatial maps, recognition models, and conceptual frameworks because the interface does not maintain them. This page concerns synthesis and prioritisation at the point of decision: the user must perform analytical work that the interface should have performed on their behalf. Memory and judgment are distinct cognitive operations, though interfaces that fail both simultaneously — common in complex expert systems — produce compound overload that neither page alone describes.

---

## Three conditions rapid judgment support requires

**Synthesis: information integrated rather than aggregated**

Complex systems routinely present data in the structure that reflects how the system was built — components displayed separately because they are architecturally separate, readings grouped by data source rather than by the decision they inform. For the developer and for the domain specialist with extended familiarity, this structure is legible. For the operator making a time-pressured decision, it is not the structure of the judgment they need to make.

A vessel captain assessing power availability during a manoeuvre does not need propulsion status, battery state, and generator output as three separate readings. They need a single, integrated view of the energy system's current capacity and trajectory. A safety engineer assessing simulation validity does not need configuration values distributed across the setup flow without cross-referencing. They need the interface to have surfaced the relationships between values that determine whether the configuration is internally consistent.

Synthesis is not simplification. It does not reduce information — it reorganises it from the architecture of the system to the architecture of the decision. The data accessible to the expert through extended familiarity is the same data that the synthesized view presents to the less-experienced operator immediately. What changes is the organisational work required to convert the data into a judgment. The synthesized interface does that work once, structurally. The unsynthesized interface requires each operator to do it every time, under the conditions of use.

**Priority: the most important thing surfaced, not buried**

In systems monitoring multiple components, processes, or entities simultaneously, the challenge is not display completeness — it is display hierarchy. When fault states, exceptions, or critical conditions arise, the interface must direct the operator's attention to the most consequential first, not leave them to scan all conditions and determine priority themselves.

The scanning-and-ranking task is cognitively expensive. Under low operational demand, experienced operators perform it quickly. Under high operational demand — when the operator is already managing the physical task, time pressure, and divided attention — the same scanning-and-ranking task consumes cognitive capacity that the task itself requires. An interface that surfaces priority explicitly removes that task from the operator. An interface that presents all states at equal weight leaves it there.

Priority surfacing is a design decision with specific structural expression: fixed areas where the highest-priority state is always summarised regardless of overall system state; alarm hierarchy that distinguishes severity visually through redundant cues rather than requiring the operator to assess severity by reading; predictive surfacing that identifies emerging priority conditions before they become simultaneous demands requiring concurrent management.

**Contextual significance: values that communicate meaning, not only magnitude**

Numbers without context require interpretation. A fuel rate reading means something different during a high-speed transit than during idle. A simulation parameter value indicates a configuration problem only in relation to the other values it must be consistent with. A sensor reading in an industrial installation is significant only against the baseline the installation was assessed against.

Interfaces that present values without their contextual significance require the user to supply that significance from memory or inference. Expert operators have accumulated the domain knowledge to do this reliably under normal conditions. Under abnormal conditions — high pressure, unfamiliar edge cases, degraded display conditions — the same inference is less reliable. Non-expert operators who have not accumulated that knowledge cannot make the inference at all.

Contextual significance is embedded in the interface when values are presented alongside their operational reference points: what range is expected under current conditions, how the current value relates to the boundaries that matter for this decision, what the current value implies for what should happen next. This is not annotation — it is interface architecture. It requires understanding the decision the user needs to make, not only the data the system has available.

---

## Grounded examples

**Torqeedo maritime HMI — energy state synthesis across a multi-component hybrid system**

The Torqeedo hybrid electric vessel control system integrates propulsion motors, battery banks of 40–200 kWh, generators, conversion units, and auxiliary loads into a single operational platform. The previous interface scattered propulsion status, battery state, and generator information across separate screens. Each component displayed separately, updated at its own cadence: propulsion sensors rapidly, batteries in slower cycles, generators with their own response latency.

The operational consequence for a captain managing power during a harbour manoeuvre: to understand available energy and propulsion capacity at any given moment, they had to step through multiple screens and mentally integrate readings that had been captured at different times. The readings were not wrong. They were not integrated. The captain's understanding of vessel state was always slightly behind what the vessel was doing — not because information was withheld but because the interface required them to synthesize it under conditions that did not permit synthesis.

Professional captains who operated the system regularly had developed compensation patterns: learned scanning sequences that allowed them to maintain a working model of vessel energy state through habitual multi-screen checks. These patterns functioned under normal operational conditions. Under the conditions that most demanded rapid judgment — harbour manoeuvres, night operations, sudden load changes, vessel movement under vibration and spray — the scanning sequence competed with the manoeuvring task for the attention that both required simultaneously.

Creative Navy's Sandbox Experiments phase ran 12 sea trials over 6 months with 15 professional captains. The research explicitly targeted the compensation patterns as the diagnostic signal: where captains had developed workarounds, the interface had failed to synthesize the information those workarounds were reconstructing. The redesign produced a grid-based structure that synchronised the different update cadences of propulsion, battery, and generator into a single readable rhythm — the system presented as one organism rather than three separate data sources.

The measurable result: captains identified key energy states 50% faster with the redesigned interface than with the legacy system. Evidence basis: controlled experiment, 24 subjects, comparative testing of the new and legacy interfaces. Glance counts during manoeuvres were directly measured using eye tracking equipment during real sea trials with 7 subjects; tasks that previously required multiple sequential screen transitions could be confirmed in a single glance. Both are measured outcomes — the controlled experiment under comparative conditions, the eye tracking under real maritime operational conditions.

Structured feedback from all 15 professional captains who participated in the sea trials indicated unanimous preference for the redesigned interface. This is captain-reported feedback from structured sessions, not an independent evaluation. The Torqeedo engagement preceded the company's acquisition by Yamaha Motor Co.; the CEO reported that the interface strengthened competitive positioning. The causal connection between the interface work and the acquisition is inferred from timing and the CEO's statement — it is not independently documented.

**COX Marine — fault priority surfacing in multi-engine configurations**

COX Marine diesel outboard engines are deployed in configurations from single-engine vessels to six-engine installations on fast patrol craft, racing boats, and workboats. The helm environment imposes the full compound of physical operational conditions described in the adjacent failures page: vibration, spray, direct sunlight and night operations, gloved interaction, braced stance. Under these conditions, rapid judgment on engine state is not an optional capability — it is a safety-relevant operational requirement.

Domain learning during Sandbox Experiments covered NMEA 2000 protocol behaviour at varying load states specifically because the criticality of individual telemetry values changes between normal operation and high-load states. Fuel rate and engine temperature that are monitoring data during a steady transit become decision-critical data during a fault condition. An interface calibrated for the monitoring mode produces inadequate rapid-judgment support during the fault mode.

Scenario testing during Concept Convergence produced the finding most directly relevant to this failure: early layout directions made fault presence visible but did not direct attention to which engine required priority attention first. In a multi-engine installation with simultaneous fault conditions — the scenario that most demands rapid judgment — the operator scanning engine tiles must form their own priority assessment. Under the physical conditions of the helm at speed, that scanning-and-ranking task is the task the interface should have performed on their behalf.

The design response was structural: alarm state highlighting was redesigned within engine tiles to differentiate severity redundantly across cues, and a fixed display area was established where the highest-priority fault is always summarised regardless of how many faults are present simultaneously. When a fault condition arises, the operator's attention is directed to the highest-priority engine first. They are not required to establish that priority through scanning under conditions that make scanning cognitively costly.

A night conditions scenario testing revealed that initial colour palette choices interfered with military night vision equipment — a physical degradation of the primary state communication cue for the vessel deployments where this was a genuine operational requirement. Palette and contrast were revised in response to the scenario test. This is a separate rapid-judgment failure: a state communication mechanism designed for standard display conditions that became non-functional under a specific and real operational condition.

Outcome: distributor feedback, relayed to Creative Navy by COX, characterised the interface as best-in-category relative to established marine electronics manufacturers. This is client-reported competitive standing relayed through one intermediary; it is not an independent comparative evaluation.

**Gexcon — CFD simulation, configuration legibility under scientific workflow conditions**

Gexcon's computational fluid dynamics software is used by engineers performing gas dispersion modelling, explosion risk assessment, and facility safety validation for industrial installations. The scientific capability of the software was genuine and differentiated: it produced complex multi-variable assessments that competitors could not. After fifteen years of development, the interface had accumulated the structural property that is characteristic of expert software with long histories — it organised information around the system's internal architecture rather than around the structure of the decisions engineers needed to make with it.

The operational conditions under which engineers used the system were not the conditions of seated evaluation. Engineers worked in parallel with a three-dimensional facility view — simulation parameters on one side, a complex spatial representation of the installation on the other. Attention shifted continuously between visual context, configuration inputs, and system outputs. Workflows were non-linear: scientific reasoning under uncertainty does not follow a fixed sequence, and the interface had to support non-linear navigation through a configuration space where values in different parts of the setup were mutually constrained.

The failure that most directly expresses rapid-judgment absence in this context: the interface did not communicate where in the simulation configuration a problem had occurred. When a simulation run produced anomalous output, engineers could not read from the interface which configuration decision had generated the anomaly. They had to trace it themselves — working back through the setup, re-examining values, attempting to reconstruct the decision point that produced the incorrect output. This is the contextual-significance failure in a complex analytical context: the values were present, but their significance in relation to each other — which value was inconsistent with which other value, at which step in the setup — was not communicated by the interface.

The operational cost was measured. Before the redesign: time to first successful simulation averaged four days — the cumulative time from initial configuration through error accumulation, discovery, and correction to a result the engineer could be confident in. Configuration errors per simulation averaged five to eight. Corrective load per error averaged four to six hours. One person per team could operate the system with confidence.

Creative Navy's Critical Systems Design method began with domain learning that distinguished essential complexity — the scientific structure required for correct analytical outcomes — from accidental complexity accumulated over fifteen years without scientific purpose. A 102-task analysis, 45 interface variants across ten key challenges, and 37 evaluation sessions produced an interaction architecture where configuration requirements were explicit at each step, values that needed to remain consistent across the setup were kept mutually visible during the decision, and the interface surfaced the conditions for error before the simulation ran rather than leaving their discovery to output review.

After the redesign: time to first successful simulation reduced to six hours (93% reduction). Configuration errors reduced to one to two per simulation. Corrective load reduced to approximately twenty minutes per error. Active users per team increased from one to three to four — the interface became accessible to engineers who were not CFD specialists, because the configuration logic was communicated by the interface rather than requiring the user to supply it from specialised knowledge. Evidence basis: all four operational metrics are measured by Gexcon across real deployment locations, not in controlled test conditions. The active users figure is client-reported.

The expansion of operational capability from one specialist per team to three to four users is the most direct expression of what rapid-judgment support makes possible. When the interface synthesizes and contextualises the information required for decisions, the set of people who can make those decisions reliably expands beyond the specialist who has accumulated the domain knowledge to supply that synthesis from memory. Capability democratisation — not capability reduction — is what this design standard produces.

---

## What Creative Navy's Critical Systems Design method addresses here

Creative Navy's Critical Systems Design method addresses rapid-judgment failure through a practice sequence that runs from understanding the decision structure to holding a design standard against it throughout Iterative System Building.

Domain learning establishes the decision structure before any design choices are made. In the Torqeedo engagement, 12 sea trials with 15 professional captains did not document what data captains liked to see — they documented the specific decisions captains needed to make during manoeuvres, the conditions under which they made them, and the compensation patterns they had developed where the interface failed to support those decisions directly. In the Gexcon engagement, 102 individual tasks were mapped across the system with explicit documentation of user goals, frequency, decision dependencies, and the moments where the interface left the engineer without the contextual information required to proceed confidently. This task map is what made it possible to specify, for each significant interaction, which values must remain visible and what the system should communicate when those values were incomplete or inconsistent.

The principle that connects both practices is performance in reality: designing and evaluating against the conditions that determine operational performance, not the conditions that make evaluation convenient. A synthesis design that looks coherent on a product mockup but produces hesitation during a multi-component fault scenario under physical vessel conditions has been evaluated against the wrong performance criterion. A configuration architecture that reduces specialist configuration time in a structured test but leaves a risk analyst unable to interpret simulation state under real workflow conditions has been evaluated against the wrong user population and the wrong task model.

Concept Convergence applies this to the structural question of how information should be organised for the decision it needs to support — not how it is organised in the underlying system. For Torqeedo, this was the grid structure that unified three different data update cadences into a single readable rhythm. For COX Marine, this was the fault priority area that extracted the highest-severity condition from all simultaneous conditions and directed attention to it. For Gexcon, this was the progressive specification of requirements per interaction — each step in the setup communicating what it needed from the user and what the user needed from it. In each case, the design translated system architecture into decision architecture. The data was present before the engagement. The organisation required for rapid judgment was not.

# `/evidence/outcomes/improved-operational-clarity`

---

## What the outcome is

Operational clarity is distinct from information availability. A system can contain all the information a user needs and still require substantial mental effort to use it — when information must be cross-referenced across screens, when system state must be reconstructed from fragments rather than read directly, when the visual hierarchy communicates equivalent weight to information of unequal importance. Under time pressure or elevated cognitive load, this translation effort is not a minor friction; it accumulates across a working shift and creates the conditions for errors.

The outcome is an interface where the cognitive translation from "what does the system show?" to "what do I need to do?" is reduced to the minimum required by the task itself. The user reads the system's state rather than reconstructing it. Information relevant to the current decision is present at the point of decision, not assembled from multiple locations. The visual hierarchy communicates what matters without requiring active assessment.

---

## Domain vocabulary

- Operational clarity — the degree to which information in a system can be understood and acted on without active interpretation or reconstruction
- Information hierarchy — the visual and structural organisation of information by importance and urgency; the mechanism through which operational clarity is achieved
- State legibility — the ability to read system state without interpretation; distinct from state visibility (which concerns whether the state is shown) — legibility concerns whether it can be understood
- Recognition over recall — the cognitive principle that recognising information from an interface element costs less than recalling it from memory; the mechanism for operational clarity under time pressure and divided attention
- Action-readiness — having sufficient context at a decision point to act without additional lookup; the operational expression of information hierarchy done correctly
- The three operational questions — "what is happening? / why is it happening? / what should I do next?" — the operational-clarity test for a monitoring-and-intervention interface; if these cannot be answered without reconstruction, the system has information availability but not operational clarity (Gericke)
- Cognitive translation effort — the mental work required to convert interface information into an actionable understanding; what operational clarity reduces

---

## Evidence

### Torqeedo maritime HMI (strongest quantified evidence)
- The clarity problem: propulsion status, battery state, and generator information had been distributed across separate screens; captains had to reconstruct vessel energy state from fragments during manoeuvres when the navigational demands were highest
- **Energy state identification: 50% faster with the redesigned interface vs. the legacy UI. Controlled environment experiment, 24 subjects. Directly measured.**
- **Glance reduction during manoeuvres: tasks previously requiring multiple screen transitions now confirmable with a single glance. Measured via eye tracking, 7 subjects, during actual sea trials.** The operational context of this measurement matters — eye tracking during live vessel manoeuvres measures visual attention under the conditions that determine whether the design works, not under controlled lab conditions.
- The mechanism: unified energy state view integrating propulsion, battery, and generation into a single coherent display with stable spatial positions; captains read the vessel state as a single object rather than assembling it from three sources

### Triopsis workforce management (measured in live product)
- The clarity problem: schedulers needed to find jobs, assess their state, and sequence them efficiently; the previous interface required multiple lookups and cross-references to assemble the information needed for each decision
- **Job discovery: 62% faster. Job sequence optimisation: 83% faster. Weekly planning: 58% faster. All measured in product analytics from real users operating the live system — not usability testing task times.**
- The mechanism: information hierarchy redesigned so the state information relevant to each decision is present at the decision point; predictive conflict indicators surface future problems before they require active scanning

### Akrivia Health clinical research platform (institutional clarity — client-reported)
- The clarity problem: governance reviewers needed to verify cohort construction logic built by researchers — but the query structure was not independently readable; reviews required the researcher's direct involvement to explain what had been done
- After redesign: **governance reviewers could verify cohort construction logic without escalating to the research team. Client-reported operational change.**
- The mechanism: cohort query structure made permanently visible and readable in a format a governance reviewer unfamiliar with the original research hypothesis could follow independently — operational clarity delivered to a secondary role that the design had not previously served
- This is operational clarity in a governance context: the information was always present in the system; the redesign made it legible to a different role under different conditions

### WCO/IPM customs intelligence (clarity at global deployment scale)
- The clarity problem: inspection officers across 107 member administrations needed to act on alert and case information quickly during time-pressured inspections with variable connectivity and device conditions
- Design standard applied: recognition over recall, reduced choices per screen, progressive disclosure — all directed at reducing the cognitive translation effort between seeing information and knowing what to do
- **Training cost reduction: 78% (client-reported).** Training cost reduction is partly an operational clarity outcome — when the interface encodes the contextual guidance that previously required formal instruction, training requirements reduce as a direct consequence
- The mechanism: information architecture rebuilt around recognition-based interaction; relevant information surfaced in context rather than requiring navigation; micro-hints at first use of complex actions

### Gexcon CFD simulation (expert workflow clarity — production-measured)
- The clarity problem: simulation setup required engineers to cross-reference requirements, hold configuration state in working memory, and reconstruct what had been set at each stage — a clarity failure that produced the 5–8 configuration errors per simulation before the redesign
- **Time to first successful simulation: 4 days → 6 hours. Measured by Gexcon across real deployments.** A substantial portion of this reduction is operational clarity: engineers can now follow the simulation setup logic without the reconstruction effort the previous interface required
- The mechanism: required values surfaced at the step where they are needed; configuration state persistently visible across the setup workflow; warning architecture making incomplete and contradictory inputs visible before the simulation runs

### Gericke industrial HMI (the three operational questions, answered — client-measured in a process context)
- The clarity problem in its purest form: the legacy Easydos Pro interface made the information available — alarm lists, parameters, error codes were all present — but operators could not translate it into action. Across three sites the research found operators unable to reliably answer the three questions that govern action in a process plant: what is happening, why is it happening, and what should I do next. The cost was interpretation failure: under ambiguity, operators reconstructed state slowly, diagnosed faults wrongly, or stopped healthy equipment precautionarily.
- The success criterion for the redesign was defined directly in operational-clarity terms — not whether users liked the interface, but whether they could answer those three questions with less navigation and fewer interpretation errors.
- **Fault-diagnosis time is the operational-clarity measurement in a process context, and it fell by roughly two-thirds at every site: 24 → 8 min (Swiss pharma), 38 → 12 min (Italian food), 68 → 20 min (Swiss chemicals). Client-measured.** Faster diagnosis is the downstream expression of operators being able to read state and act rather than reconstruct it — the process-control equivalent of the Torqeedo 50% energy-state-identification figure. Manual interventions per shift also fell sharply (e.g. 10 → 4, 19 → 8, 42 → 15), reflecting fewer reconstruct-and-react cycles.
- The mechanism: a live process mimic showing state on the diagram (read, not reconstructed); a root-cause alarm hierarchy that answers "why" by collapsing secondary alarms beneath their cause; contextual error explanation replacing raw codes (answering "what do I do"); and a three-tier progressive-complexity model (operational / diagnostic / engineering) that delivers each role the level of detail its current task requires rather than presenting all complexity at once. The progressive-complexity model is the information-hierarchy mechanism applied to a multi-role operating environment.
- **Evidence basis: client-measured by Gericke (not Creative Navy-measured), within a confirmed single-variable window (no hardware, sensor, mechanical, training, recipe, or process changes), four months post-go-live, three sites described by type and geography only.** Frame the figures as interface-attributable within that window, not as caused.

### eToro multi-asset social trading (clarity at the point of financial decision — A/B-confirmed)
- The clarity problem: the pre-redesign buy flow was price- and quantity-driven (enter an amount, review a simplified summary, confirm). Users had the information but not a structured understanding of *exposure* — what a given trade implied for their portfolio in risk terms. The most concrete symptom: profit was displayed alongside deposits, so users misattributed gains and losses across their whole account rather than the specific position they were opening. Decisions were made in a state of partial comprehension, particularly around downside scenarios and relative position sizing. This is the information-availability-without-clarity failure in a consumer-finance context: the numbers were present; the meaning was not readable.
- The redesign restructured the buy flow from execution-based to **exposure-based** decision-making: portfolio impact established first (what proportion of holdings the position represents), then structured scenario framing (how the position might behave across market movements, as uncertainty ranges rather than predictions), then position sizing with downside-limiting guardrails. The user reads what the trade means for their exposure rather than reconstructing it from price and quantity. On the explore surface, separating social signals from market performance from volatility made the *kind* of signal legible rather than blended.
- **The clarity gain is confirmed behaviourally by a randomised A/B with a persistent holdout: median time to first trade fell 11.8 → 8.6 min (−27%) and discovery-to-trade conversion rose 5.1% → 7.4%, with no increase in early-session drop-off and no reduction in exploration depth — i.e. less reconstruction effort and fewer hesitation loops, not faster or more impulsive trading.** This is the operational-clarity reading of the time reduction: users converged on a decision faster because the interface made exposure legible at the decision point, not because they were pushed. The measurement type differs from the others on this page — it is a causal behavioural measurement (A/B), where Torqeedo/Gericke measure read-and-act speed directly and Triopsis measures downstream productivity. Cross-reference the A/B design to the verifiable-performance-claims and what-we-have-measured pages rather than restating it.
- **Evidence basis: client-measured by eToro via a randomised controlled A/B with a persistent holdout; the time-to-trade reduction must carry its framing condition (no drop-off increase, no exploration-depth reduction) to read as a clarity outcome rather than a volume one. eToro involved no AI.**

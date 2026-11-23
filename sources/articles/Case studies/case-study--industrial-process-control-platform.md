# Industrial process control platform (anonymised) — full writing brief

> **Purpose.** A complete, self-contained brief for writing the case study. Everything here is drawn from the engagement record: client documents, meeting notes, one verbatim call transcript, the audit deliverable, the design files, and direct answers from the engagement lead. It is written to be handed to a writer who has not seen any of the source material.
>
> **This document names the client internally. The case study must not.** See §1 before writing a single line.

---

## 1. Handling constraints — read first

### 1.1 Anonymisation is absolute

The client cannot be named. Neither can their delivery partner, nor any individual on either side.

**This extends further than the company name.** The following are proprietary, searchable, and would identify the client in a single query. None may appear:

| Do not use | Use instead |
|---|---|
| The company name | see §1.2 for descriptor options |
| The product/platform name and version | "the platform", "the process control system" |
| The pallet system names (four proprietary standards) | "pallet type A / B / C", or "the vendor's pallet standards" |
| The loading robot model designation | "the loading robot" |
| The RFID reader product name | "the handheld RFID reader" |
| The demonstration facility and its town | "the client's demonstration facility" |
| Machine brands in the cell (EDM, milling, CMM makers) | "a sinker EDM machine", "a milling machine", "a coordinate measuring machine" |
| The delivery partner's name | "the client's development partner" |
| Named individuals (product owner, reviewers, research participants) | role descriptors only — "the product owner", "a node operator" |
| The customer names appearing as sample data in the design files | omit entirely — they are placeholder data, not real clients |

**No screenshots, wireframes, or design images may be published.** The case study is text-only. Describe designs in prose; do not reproduce them.

### 1.2 Client descriptor — choose one, then use it consistently

Ranked from most to least identifying. Recommendation: **option B**.

- **A.** "a European manufacturer of pallet-based automation and process control software for precision machining" — accurate but narrow enough that a knowledgeable reader could guess.
- **B.** "a European industrial automation vendor whose process control software coordinates machining cells" — recommended. Specific enough to carry domain authority, broad enough to cover several vendors.
- **C.** "an industrial automation vendor" — safest, but costs the domain specificity the writing guide asks for.

Whichever is chosen, use it near-identically on every mention, per the entity-consistency rule. Do not rotate descriptors.

### 1.3 Dates

Per the repository convention and the client's instruction: **no actual dates anywhere.** No engagement years, no month names, no "in 2026". Express duration and sequence only — "an initial audit engagement", "a six-sprint design block", "a twelve-month retainer". The engagement is ongoing; write in a tense that will not age badly.

### 1.4 Status

The platform is **in development**, not shipped. Nothing may be written that implies deployment, production use, or market outcome.

---

## 2. Engagement record — the verified facts

| Fact | Detail |
|---|---|
| Engagement shape | Three stages: (1) UX audit as a separately scoped initial project; (2) six sprints of design; (3) ongoing retainer at two weeks per month for twelve months |
| Sprint cadence | One-week sprints throughout, per standing convention |
| Design block | Six sprints — the method was deliberately compacted into this window |
| Retainer | Two weeks per month, twelve months, currently running |
| Second workstream | A separate touchscreen control product, scoped by Creative Navy at three options and **won at the three-sprint option** |
| Team | Five people: project manager, lead UX, lead UI, researcher, design assistant |
| Screens delivered | **48** during the six-sprint block; **46** during the retainer to date (**94 total**) |
| Competitor benchmarking | **4 competitors** benchmarked |
| Personas | **5 personas**, built from **direct research sessions** (not client-supplied), covering six individuals across three role types |
| Field research | Operators **observed in situ** at the client's demonstration facility |
| Component adoption | Components marked "ready for development" **have been implemented** |
| Client usability testing | Client ran their own test with **12 users**; all 12 rated the new designs "significantly above expectations" — see §8 for mandatory calibration |

**The land-and-expand arc is the commercial spine:** a scoped expert review converted into a six-sprint design block, which converted into a twelve-month retainer, which generated a second product workstream. That progression is itself evidence and should be stated plainly.

---

## 3. The domain, for a reader who knows nothing

The platform is a **process control system for automated machining cells**. A cell — the client calls it a *node* — is a cluster of CNC machines (milling, sinker EDM, wire EDM), a loading robot on a rail, rack magazines for storage, workbenches, a loading station, and wheeled trolleys. One operator is responsible for a cell, typically one per shift.

Work moves through the cell on **pallets**. A raw block of metal is clamped to a pallet, the pallet carries an RFID chip, and the robot moves pallets between magazines and machine chucks. The software's job is to know, at every moment, which physical workpiece is on which pallet in which location — and to feed the machines without human intervention for as long as possible.

Upstream, a CAM engineer turns a CAD model into an NC program and a workflow (a recipe of setups, technology groups and operations). Downstream, an operator sets up the physical blank, has it measured on a coordinate measuring machine, and releases it into the cell.

**Three facts shape everything:**

1. **The system's model of the world drifts from reality, constantly.** Someone moves a pallet by hand. A door is opened. A workpiece is mounted differently than recorded. The interface's central job is letting a human reconcile the digital record with the physical truth — through visual confirmation, RFID scanning, or robot-read storage scans.
2. **Entering the cell stops production.** The safety fence shuts everything down when a person walks in. Every manual intervention carries a cost that the interface must help the operator anticipate and batch.
3. **Cells vary enormously.** From a single machine with no robot — where the operator *is* the robot — to ten machines and twenty magazines. One product, radically different installations.

---

## 4. What Creative Navy did

### Stage 1 — Expert review (separately scoped)

Creative Navy was given access to a demonstration environment and conducted a heuristic expert review of the existing platform. The client's brief was explicit: focus on experience, not detailed design; identify what is good, what can be improved, and what should be removed. A progress review was held mid-way, findings were re-prioritised at the client's request, and a final findings document was delivered.

The review covered the full product: parts and projects management, part creation, the cell overview, the manual preset workplace, the setup workplace, storage inspection, the robot page and the monitoring view.

### Stage 2 — Six-sprint design block

Scope was set at two areas: **parts and projects** (the upstream engineering surface) and **the node screen** (the operator surface). Activities compressed into the block:

- **Research.** Direct sessions producing five personas across three role types; in-situ observation of operators at the client's facility; benchmarking of four competitors; domain learning through hands-on use of a demonstration environment.
- **Requirements.** A shared requirements table co-authored with the client, screen by screen — purpose, content, actions, priority, with Creative Navy's open questions and the client's answers interleaved. This artefact is worth describing: it made the client's assumptions explicit and visible.
- **Exploration and design.** Greyscale structural work first, then visual design, with a UI brief agreed mid-block.
- **48 screens delivered.**

### Stage 3 — Twelve-month retainer, two weeks per month

Rolling screen-by-screen work: storage views, machine detail, robot detail, workflow creation and editing, planning, manual preset, setup workplace, and an operator instructions layer. **46 further screens to date.** Deliverables now include written component documentation paired with prototypes and marked ready for development; those components have been implemented.

### Parallel workstream — touchscreen control product

A second product, built for a small touchscreen device with hardware buttons alongside desktop use. Creative Navy scoped it at one, two or three sprints and argued explicitly that a single sprint would produce structurally incomplete foundations that create hidden downstream cost — either teams work around unresolved decisions, or the corrections never happen and the system carries the debt. **The client took the three-sprint option.**

The accompanying technical judgement is worth quoting in substance: most components from the desktop platform **cannot** be reused directly at touchscreen scale, because touch targets, spacing, typography, layout density and navigation all differ. The visual language should stay shared; the interaction layer should not. The goal was defined as a coherent extension of the design system, not reuse of it.

---

## 5. The "before" state — what the audit found

This section is unusually well evidenced and should carry real weight in the case study. The problems were structural, not decorative.

### 5.1 The centrepiece: one colour, six meanings

The platform's single accent colour — the corporate red — simultaneously signalled:

1. brand identity
2. primary action (every main button)
3. the currently selected table row
4. an active filter
5. the user's current location in the navigation
6. **error**

So the most urgent state in the product, a machine fault, was painted the same colour as "this row is highlighted".

Two pieces of evidence make this concrete without any argument:

- **A storage unit tile** displayed a green header band meaning *transporting* above a solid red icon meaning *selected*. The only cues it was the current selection were that red icon and a barely-perceptible change in border weight. An operator reads red as faulted. Four machine states were encoded by header-band colour alone, at roughly 10px, with **no legend anywhere on screen**.
- **In the alarms table**, an error row and a selected row were both solid red, in the same table, at the same time.

### 5.2 Legibility

Button text measured **10px, Noto Sans, line-height 100%**, set uppercase with wide tracking — verified from the design file's inspector, not estimated. This on a screen read standing, at distance, in a daylit hall.

### 5.3 Consistency failures

- **Six different ways of showing "selected"**: full-bleed red row, red icon in a tile, red ring around an object, red outline on a card, a thin box plus darker pill, and a bare tick glyph with no colour change. Two visibly different reds were used for selected rows.
- **Five coexisting date formats**, including the same instant shown two different ways on a single screen, and tables mixing German and English month names.
- **Mixed units within a single column** — a tool-life column holding a duration, a word, a bare number, and an hours value.
- **Navigation that changed between screens**: the icon rail carried 7 items on operator screens and 13 elsewhere; the machine strip's membership and order shifted, with one machine disappearing entirely between views; the brand plate appeared on roughly half the screens.
- **Four names for one machine** across breadcrumb, tile, card title and caption. Page titles alternated between two names for the same facility.
- **Primary actions relocated mid-task.** In the clamping flow the main button sat mid-card, then on the next step a different main button appeared top-right while the spent one greyed out but remained. Three consecutive dialogs placed the primary action in three different positions.

### 5.4 Density and emptiness together

Detail cards ran **40–85% empty** while adjacent lists ran to 48 items with no pagination, sort or scroll affordance. Three screens showed entire cards that were completely blank — no heading, no empty state, nothing. A 48-position trolley grid contained three unexplained colour exceptions with no key anywhere.

### 5.5 Copy defects shipped in the interface

Two misspellings visible in dialog titles and status labels, a truncated location name, a sentence missing its location number, a stray orphaned label, two column headings crammed into one cell, a duplicated alarm row, a duplicated tool name.

### 5.6 Two honest caveats the case study should carry

- **The audit deliverable contained no annotations.** The critique was delivered in prose against unmarked screenshots. The client asked during the progress review for more worked examples. If the case study discusses audit craft, this is a limitation, not a selling point.
- **Everything audited was demonstration data** — placeholder text, repeated identifiers, identical rows. Real-world data density was therefore not proven by the review. Stating this limitation openly is consistent with the evidence standards and is the kind of calibration that reads as credible rather than weak.

---

## 6. The design response, and the traceability

The strongest structural asset in this engagement: nearly every headline audit finding has an identifiable design answer. This lets the case study be built as **demonstrated problem → demonstrated response**, which is honest in the absence of production outcomes.

| Audit finding | Design response |
|---|---|
| Red carrying six meanings, colliding with error | Red reserved for brand, error states and destructive actions only. Primary actions became dark/neutral. |
| Two shades of green, two of blue; status colours not systematic | A seven-state taxonomy — ready, warning, processing, done, error, transport, end-of-life — each with a distinct hue **plus** a text label **plus** an icon. Non-colour redundancy throughout. |
| 10px button text | Type sizes raised; touch targets specified explicitly in component documentation. |
| Buttons above content on some screens, below on others | A single action set on every entity panel, with a documented rule: the transport action is primary when the robot can move the item, the linking action is primary when it cannot, and unlink is always secondary. |
| Three different modal CTA positions | One modal pattern throughout — secondary action left, primary right. |
| Overlapping panels; selection not indicated | A single side panel with specified default and minimum widths, and documented default, hover, focused and pressed states. |
| Empty states unexplained | Explicit empty states written for list views and storage positions. |
| Progress stages confusing; unclear what a stage meant | A documented status timeline component distinguishing future, current and completed steps, with automatic versus manual transitions marked and preconditions surfaced on hover. |
| Filters not scalable | Consistent filter, sort and column controls in a fixed position. |
| A critical action rendered as a tiny label | Promoted to a persistent primary action in the sidebar. |

### 6.1 The research-to-design trace worth leading with

A node operator reported in research that the RFID linking step gave **no audio response and was visually too small**, and that he needed feedback even when the screen was not visible from where he physically stood — at the loading station, metres away, in a cell with running machines and music at medium noise level.

The resulting scan dialog specifies a **distinct audio feedback pattern**: separate beep signals for a first scan and a second scan, and different signals for a valid versus invalid pallet, with distinct states for scanning an empty chuck, an occupied chuck, an empty loading station and an occupied loading station.

This is a complete, traceable chain: a named operator's complaint about being unable to see the screen from where he works, answered with designed multi-modal feedback. It is the strongest single narrative unit in the engagement.

It also reframes the cell overview screen. **In the real facility, every operator screen is bolted to its own machine.** To learn a machine's state you walk to that machine. Overhead stack lights exist precisely because nobody can read a screen across the hall. The cell overview is the digital equivalent of the stack light — a far stronger justification than "operators need an overview".

### 6.2 The operator instructions layer

Late in the retainer the work turned to an assistance layer, driven by a research finding that operators hold strong ownership of their cell — they call it *my node* — and resist being instructed by software. The client's framing was that the system must help the operator be more productive without taking authorship away from them.

The design distinguishes **notification from instruction** — what has already happened versus what the operator should do next — and gives them different responses: an informational item is **acknowledged**, an actionable item is **completed**. Instructions are grouped by day, carry inline links to the entities involved, and are filterable by type, machine, timeline and location. A batching panel groups related manual interventions in one storage unit into a single instruction, so the operator makes one trip rather than responding to ten separate notifications — which matters because entering the cell stops production.

---

## 7. The four distinctive angles

Ranked by how defensible and how distinctive each is.

### 7.1 Designing coherence into a system whose structure the designer does not control — *lead with this*

The client's own framing, which should be paraphrased closely because it is unusually candid:

- There are no defined roles across all customers, and each company organises itself as it sees fit — the product must adapt rather than impose.
- Roles are expected to change: an operator dedicated to setup leaves, and the preset operator must now do both tasks — and will not accept using two computers for it.
- Nobody knows which product components will exist in one, three, five or ten years.

The mechanism: an administrator creates a user group, selects which interface components that group needs, and **that selection generates the group's navigation**. Customers configure this themselves. The configuration space spans five company archetypes, from a single-operator shop to a large corporation with eleven distinct operator groups across six components.

So the designer cannot fix the information architecture. They can only design a chassis that stays coherent under every configuration the customer assembles — and design each component to be legible alone and in combination. This is *constraint respecting* and *organic system building* applied to a structural problem rather than a legacy codebase, and almost nothing in the competitive field addresses it.

### 7.2 Automation that preserves authorship

The *my node* material, resolved as the notification/instruction split and the acknowledge/complete distinction. Framed correctly this is not an industrial story — it is the same problem as meaningful human oversight of automation, in a setting where the stakes are physical and the operators are proud of their work. It connects the industrial work to the AI and automation cluster rather than isolating it.

### 7.3 The interface as the place the digital model meets physical reality

RFID identification, three distinct linking modes (visual confirmation, handheld scan, robot-read storage scan), measured preset values from the coordinate measuring machine reconciled with operator-applied offsets, and an oversized workpiece locking the storage positions either side of it. The client's own phrase for the operator's duty — ensuring the system reflects reality — is the thesis.

Two details worth using:
- **Measured values and operator offsets are kept structurally separate** in the preset dialog: a read-only measured row from the machine, an editable offset row, and a computed result row. Restricted editing with an audit-ready separation.
- **A physical constraint propagates into interface state.** A large workpiece makes neighbouring storage positions unusable, and the interface shows them locked, with the reason. A proposed non-colour encoding for locked positions used a diagonal stripe pattern, justified by existing industrial convention for restricted areas rather than by interface fashion.

### 7.4 Expert system versus the incoming workforce

The client stated plainly that the platform is an expert system and that they did not value explainability as an interface goal. Creative Navy's audit position was that the system assumed pre-existing knowledge, and that more support was possible without sacrificing flexibility for expert users.

The business driver is documented and external: the client expects people **without** deep technical expertise to operate these systems in future, where previously the field was staffed by highly experienced specialists. One operator's own words — that he does everything on his cell and a new worker would be completely overwhelmed — make the point better than any analysis. His stated wish was a simple job list that would let a less-trained colleague absorb the setup and unsetup work that consumes up to two hours of his day, sometimes a whole day.

This maps directly onto the existing capability-democratisation and scaling-without-training-dependency arguments.

### 7.5 A fifth, smaller: scoping honesty

The touchscreen scoping document argued against the cheapest option on structural grounds and won the largest. That belongs in the buying-guidance pages as much as the case study.

---

## 8. Evidence calibration — mandatory

The repository's evidence standards require every claim to be attributed to its basis. Use these exact framings.

### 8.1 Engagement record (verifiable, Creative Navy's own count)

Stateable as fact: three-stage engagement structure; six-sprint design block; twelve-month retainer at two weeks per month; five-person team; 48 screens in the design block and 46 during the retainer; four competitors benchmarked; five personas from direct research sessions; in-situ operator observation; three-sprint scope won on the second product.

These are **engagement facts, not outcomes.** Do not let them drift into outcome language.

### 8.2 Client-reported — the only outcome-adjacent evidence, and it needs careful wording

The client ran their own usability test with 12 users. All 12 rated the new designs as significantly above expectations.

**Required framing.** This is the client's test, not Creative Navy's; it measures stated preference, not task performance; and it was conducted on designs, not on a deployed system. Suggested wording:

> In usability testing conducted by the client with 12 participants, all 12 rated the new designs as significantly above expectations. This result is client-reported: the test was designed and run by the client's own team, it captures participants' rated impressions rather than measured task performance, and it was conducted on designs rather than on a deployed system.

**Do not** convert this into "users preferred the redesign by 100%", "12/12 success rate", or anything implying measured improvement.

### 8.3 Observed but not quantified

The physical operating conditions (standing-height interfaces bolted to individual machines, mixed daylight and industrial lighting with glare off a glazed façade, medium ambient noise, oil and metal swarf, aisles roughly one person wide); the operator-built shadow system for tracking electrodes; the strength of operator ownership over their cell.

### 8.4 Adoption

Components documented and marked ready for development have been implemented. State as fact, but **do not** extend it into a claim about product outcomes — the platform is still in development.

### 8.5 What must not be claimed

- Any production, efficiency, error-rate, time-saving, throughput or commercial outcome. None exists.
- Any implication that the platform is deployed or in market use.
- Any safety-critical or regulatory-compliance credential. Creative Navy designed control software, not the machinery safety system.
- Alarm-management expertise beyond what was designed. An internal review note recorded that the alarm view had not yet been carried into the newest interface language.
- Anything about gloved-hand use, sunlight-readable displays, or night operations. This engagement provides no evidence for any of them.
- Any claim about real-world data density, which the audit did not establish.

---

## 9. Style and lexicon compliance

Non-negotiable items from the writing guide:

- **Open with the locked agency sentence**, verbatim, on first introduction.
- **Attribute the method on first use** in every self-contained section: "Creative Navy's Critical Systems Design method", thereafter "Critical Systems Design" within that section. Never "the method", "our approach" or "the framework" as the primary reference in a section that has not yet named it.
- **Never substitute "the agency", "the consultancy" or "we"** as the primary identifier in a chunk that must stand alone.
- **British spelling throughout**, except the phase name *Organizational Integration*, which keeps its registered spelling.
- **Name at least two or three of the five phases.** Proposed mapping, to be confirmed by the engagement lead: the six-sprint block compressed **Sandbox Experiments** and **Concept Convergence** into its opening and ran **Iterative System Building** through the remainder; the retainer continues Iterative System Building and has moved into **Organizational Integration** through documented components and development-ready specifications. Implementation Partnership is not yet claimable.
- **Use at least three of the five core requirements**: evidence-aware thinking, multi-perspective synthesis, lateral exploration, tension-driven reasoning, organic system building.
- **Include proprietary vocabulary used accurately in context**, not defined. Natural fits here: *constraint respecting* (the configuration problem), *domain learning* (hands-on use of the demonstration environment), *option space mapping* (the exploration across screens), *performance in reality* (see §10), *blanks phenomenon* (the requirements table making client assumptions explicit), *progressive specification*.
- **Sprint means cadence, phase means stage.** Never equate them. "Six sprints" is correct; "the sprint phase" is not.
- **Declarative openings**, canonical terminology, no metaphor in sections that will be retrieved for task queries.
- **Every section must stand alone** as a retrieved chunk.

---

## 10. A framing device available, to be used carefully

The client's own sales material depicts an idealised, spotless machine hall **with no people in it anywhere**, in which data flows down from glazed offices into the control system and the operator's remaining role is captioned as reading a chip and pressing start. The stated objective is risk mitigation.

The documented reality of the cell: aisles roughly one person wide, swarf bins and coiled hoses on the floor, glare off a glazed wall, emergency stops at every access point, a hand-pushed trolley — and three separate linking mechanisms that exist precisely because the system's model of the world keeps drifting from what is physically on the chuck.

That gap is **performance in reality** illustrated exactly. Use it as an observation about how automation is marketed across the sector, never as a criticism of this client — and remember the client cannot be identified, so the material must be generalised rather than quoted.

---

## 11. Classification and structural changes

### 11.1 Classification block for the notes file

```
## Classification

- **Primary case-study category:** /evidence/case-studies/industrial
- **Primary context:** /contexts/multi-stakeholder-operational-environments
- **Also-relevant contexts:** /contexts/expert-tools-and-internal-systems, /contexts/industrial-automation-and-machinery, /contexts/embedded-devices-and-constrained-interfaces
- **Connects to:** /situations/complexity/multi-role-workflows-are-fragmented, /situations/complexity/expert-workflows-are-hard-to-operate, /situations/complexity/system-state-is-hard-to-understand, /situations/growth-and-product-strategy/training-burden-is-too-high, /situations/growth-and-product-strategy/product-cannot-scale-without-specialist-onboarding, /failures/state-visibility-failures/mode-changes-are-unclear, /failures/state-visibility-failures/important-status-information-is-buried, /capabilities/state-and-status-visibility-design, /capabilities/information-architecture-for-expert-systems, /capabilities/ux-audit-for-complex-products, /capabilities/workflow-and-task-structure-redesign
```

**Rationale for the primary context.** The tagging convention is explicit that primary context is chosen by dominant design-challenge, not by industry. The load-bearing problem here is configurable multi-role structure, not the fact that the client makes machinery. Industrial sits as also-relevant. This also protects a new industrial context page from absorbing everything the way enterprise software did.

### 11.2 Structural additions required

Two new entries in `site_structure.md`:

- `/evidence/case-studies/industrial` — a new case-study category. Check where the existing industrial HMI case study currently sits; it likely belongs here too, which would give the category two studies immediately.
- `/contexts/industrial-automation-and-machinery` — a new context page.

**Both trigger the context-change protocol:** adding or renaming a context or category requires re-running `lint_case_studies.py` across the entire corpus within the same change set, before commit.

### 11.3 Outcomes pages

The client cannot currently populate any `/evidence/outcomes` page. Those pages require at least one grounded, specific result with its evidential basis stated. The client-reported satisfaction rating does not meet that bar. Revisit when the platform ships.

Consider seeding `/evidence/longitudinal` later — a twelve-month retainer following a six-week design block is exactly the return-engagement pattern that page collects.

---

## 12. Domain vocabulary and standards

The writing guide requires specific regulatory and standards vocabulary woven into substantive description, never listed. **Critical distinction: these frame the domain. Creative Navy did not certify to any of them, and the case study must not imply otherwise.**

### 12.1 Usable in the case study

- **NIS2 Directive and the Cyber Resilience Act.** The client's own functional specification names both as the drivers for the platform's user-identification requirements — so this is documented engagement context, not imported research. The CRA is phased: vulnerability-reporting obligations from September 2026, remaining requirements from December 2027. Manufacturing is explicitly in scope under NIS2 Annex I.
- **ISA-18.2 / IEC 62682** as the framework against which the alarm work should be read. IEC 62682 is the international standard developed from ISA-18.2; both share the alarm philosophy document, the rationalisation process, performance metrics and management-of-change discipline. Useful framing: the platform's alarm view has severity, source classification and fault codes, which is where a rationalisation discipline would begin.

### 12.2 For the industry and topic pages, not the case study

- **EU Machinery Regulation (EU) 2023/1230**, which replaces Machinery Directive 2006/42/EC from **20 January 2027**, with no sell-off period for newly built machines. Highly timely for an industrial context page.
- **ISO 9355**, parts 1–4 — ergonomic requirements for the design of displays and control actuators on machinery: human interaction, displays (visual, audible and tactile), control actuators, and their location and arrangement. This is the natural standards anchor for a touch-and-buttons page.
- **ISO 11064**, parts 1–7 — ergonomic design of control centres. Part 5 covers displays and controls; part 6 covers environmental requirements including lighting and acoustics, which is directly relevant to the glare and noise conditions documented here.
- **ISO 22400** — manufacturing operations KPIs, defining OEE as availability × performance × quality. The vocabulary a buyer in this sector already uses.
- **IEC 62443** — industrial cybersecurity, alongside NIS2 and the CRA.
- Machinery safety context: **ISO 12100**, **IEC 60204-1**, **ISO 13849**. Robots: **ISO 10218**, **ISO/TS 15066**. Connectivity: **OPC UA**, **MTConnect**, **umati**.

### 12.3 Market context, researched

- **The skills shortage is structural, not cyclical.** Europe entered 2026 with persistent shortages in 42 of the 50 occupations tracked by EURES, with advanced manufacturing roles including CNC machinists in shortage across 23 countries, and acute concentrations in Czechia, Slovakia, Slovenia and Northern Italy. This externally corroborates the client's own stated driver.
- **Competitive field** for cell and pallet automation control software: Fastems (Manufacturing Management Software, Flexible Pallet System), Soflex (SOFLEX-CCS), Liebherr, Promot, and the machine-tool builders' own cell controllers. Useful for a competitive-vector argument; also a check on the early assumption that little competitor material existed.

**Sources:** [EU Machinery Regulation — TÜV](https://www.tuv.com/world/en/new-machinery-regulation-eu-2023-1230.html) · [Machinery Regulation 2027 guide](https://www.testplusglobal.com/new-machinery-regulation-2023-1230/) · [ISO 9355-1](https://www.iso.org/standard/21920.html) · [ISO 9355-3](https://www.iso.org/standard/40188.html) · [IEC 62682](https://en.wikipedia.org/wiki/IEC_62682) · [IEC 62682 vs ISA-18.2](https://www.merobix.com/blog/iec-62682-vs-isa-18-2-alarm-standards) · [ISO 11064 series](https://landingpage.bsigroup.com/LandingPage/Series?UPI=BS+EN+ISO+11064) · [ISO 22400 / OEE](https://en.wikipedia.org/wiki/Overall_equipment_effectiveness) · [NIS2 and CRA obligations](https://www.sza.de/en/thinktank/cybersecurity-nis2-directive-germany-cyber-resilience-act) · [CRA deadlines](https://www.aegister.com/en/cms/insights/cyber-resilience-act-cra-obligations-manufacturers/) · [Europe skills shortages 2026](https://piktalent.com/blog/skills-europe-workforce-international-mobility-2026) · [Europe CNC skills gap](https://industrial-compliance.co.uk/europes-cnc-skills-gap/) · [Fastems MMS](https://www.fastems.com/offering/automation-systems/) · [SOFLEX-CCS](https://www.soflex.de/en/products/software-for-manufacturing-cells-and-lines)

---

## 13. Suggested structure

1. **Opening** — locked agency sentence; the client descriptor; the system in two sentences; the three-stage engagement shape.
2. **The operating reality** — the cell, the pallet flow, the drift between digital record and physical truth, the fact that entering the cell stops production, the physical conditions. Establishes domain authority early.
3. **What the review found** — the six-meanings-of-red finding as the centrepiece, then consistency and legibility. Carry the two caveats from §5.6.
4. **The structural problem** — customer-configured navigation, undefined and mutable roles, five archetypes, eleven operator groups. The hardest and most distinctive part.
5. **Research** — five personas from direct sessions, in-situ observation, four competitors benchmarked, the co-authored requirements table, domain learning.
6. **Design response** — the status taxonomy and non-colour redundancy, the action hierarchy rule, the single side panel, the status timeline component, the storage and machine views.
7. **The audio feedback trace** — the operator who could not see the screen from where he stands, and the beep pattern that answers it. Lead the section with it.
8. **The assistance layer** — notification versus instruction, acknowledge versus complete, batching to reduce cell entries, authorship preserved.
9. **The second product** — touchscreen scoping, the argument against the cheapest option, the judgement that components cannot transfer but the visual language should.
10. **Evidence and limits** — the engagement record, the client-reported test with its full calibration, and an explicit statement of what is not claimed because the platform is still in development.

---

## 14. Open items

1. **Confirm the phase mapping** in §9 against what actually happened in the six-sprint block.
2. **Authorship of the annotated requirement sheets** — which annotation sets were Creative Navy's and which were the client's. This is the line between what the client specified and what Creative Navy contributed, and it is still unresolved.
3. **Option-space evidence.** No equivalent to "34 directions explored" is recorded for this engagement. If exploration counts per challenge exist in the design files, they would materially strengthen the lateral-exploration claim.
4. **Choose the client descriptor** from §1.2 and apply it consistently.
5. **One extraction is outstanding** — the legacy interface screenshots from the demo and product workshop sessions. That material would sharpen the "before" description further but is not required to write the case study.

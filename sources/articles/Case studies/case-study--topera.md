# Topera — full writing brief

> **Purpose.** Everything needed to write the Topera case study and to update the existing content corpus from it. Written to be handed to a writer with no access to the source material or the conversations that produced it.
>
> **Part A** is the case study. **Part B** is the corpus integration. **§A3 is a numbered evidence bank** — every instruction in both parts cites it by number. Do not introduce facts about this engagement that are not in §A3.
>
> **Prefix.** This engagement uses prefix **T**. A, E, S, M and N are already taken by the AIT, industrial process control, Streetec, MDU and Assemblio engagements; B would collide with the Part B section numbering in this file. Never let facts migrate between engagements: they are different clients, industries and evidence classes. The industrial engagement (**E**) is the one most likely to contaminate this study, because both involve German industrial standards and cross-organisational structure. They are not the same engagement and share no facts.
>
> **Companion documents:** `industrial-writing-brief.md` (industrial process control, prefix **E**), `streetec-writing-brief.md` (prefix **S**), `ait-writing-brief.md` (prefix **A**), `mdu-writing-brief.md` (prefix **M**), `assemblio-writing-brief.md` (prefix **N**), and `corpus-integration-brief.md`. **Corpus integration for this engagement lives in that file, not this one** — see Part B below.
>
> **This engagement has the thinnest evidence base of the six.** There is no research, no audit, no testing, no build, no transcript and no record of client decisions. §A3.3 states this in full. The study is still worth writing, because what the engagement does have — a complete information architecture derived from a published standards corpus in three one-week sprints — is unusual and fully documented in the delivered artefacts. But the writer must not compensate for the thin evidence by inflating what is there. Read §A4 before writing a single line.

---

# PART A — THE CASE STUDY

## A1. Handling rules

### A1.1 What may be named

**Topera may be named.** It is the platform Creative Navy produced the concept design for: a cross-organisational project management system grounded in the DIN 69901 standards series and the ProSTEP iViP / VDA recommendations.

**The standards bodies and the standards may be named, and should be.** DIN, ProSTEP iViP and the VDA are public standards organisations; DIN 69901-1 to -5, DIN 69900, PSI 1-1, PSI 1-2, PSI 10 / VDA 4959 and PSI 25 are published documents. Naming them precisely is the single largest source of domain authority in this study, and the writing guide requires exactly this kind of specificity (`guide--writing-for-llms.md`, Priority 5).

**Individuals must not be named**, on either side. Use role descriptors: "Topera's team", "a Creative Navy UX designer", "the engagement lead".

**Do not characterise how the client obtained the standards documents.** The client supplied them (T22). The correct and complete statement is that the client supplied the standards corpus. Nothing about where the documents came from, how they were acquired, or their licensing status may appear or be implied. DIN standards are commercially licensed documents; any phrasing that invites a question about provenance is a liability for both parties and adds nothing to the study.

**No stakeholder, partner, prospect or customer of Topera may be named**, including any organisation the concept design was shown to (T14). None were disclosed to Creative Navy and none may be inferred. The companies named in the PSI 25 working group (§A8.1) are a matter of public record in the standard itself and may be named *as authors of the standard* — never as parties connected to Topera.

**Sample data in the design files is placeholder data.** The project names, person names and identifiers visible in the screens ("Automotive Electronics Development Project", "Turbofan NGX Development", and all personal names) are fabricated demonstration content. Do not reproduce them, and do not treat them as evidence of Topera's market or customers. This is the same trap flagged for the industrial engagement and for Assemblio.

### A1.2 What may not be shown

**No screenshots, wireframes or design images.** The corpus is text-only on documentation pages. Describe the designs in prose.

### A1.3 Dates

**Do not place the engagement in a particular year.** No years, no months, no seasons. Sequence and duration only — "three one-week sprints", "a concept design engagement".

This rule has a specific consequence here, and it is the easiest mistake to make in this study. **The source artefacts are heavily date-stamped.** The design requirements document carries a month range on its title page, and the working file's boards carry dated version stamps across a three-week span. **None of that may appear, in any form** — not as a year, not as a month, not as a span of calendar dates, not as "over three weeks in early spring". Express the iteration record as counts and sequence instead: a board reached its fourth documented version; the dashboard went through two structural versions. Those are publishable. The stamps that evidence them are not.

**One exception, and it is not about the engagement.** Publication dates of *standards* are facts about the standards, not about the engagement, and may be stated where they carry meaning — PSI 25 version 2.0 and the supersession of DIN 69901-4 in particular (T30, T31). Use them only where §A8 says to, and never in a way that lets a reader date the engagement by proximity.

### A1.4 Status

**Topera is a concept design. Nothing has been built.** There is no product, no deployment, no user, no pilot and no measured outcome of any kind. The concept design is in circulation: the client took it to show stakeholders (T14).

This governs the entire study. **Every sentence must be written so that it remains true of a system that does not exist.** Describe what was designed and why it was designed that way. Never describe what the system does, what users experience, or what it achieves. "The WBS view shows the project as a tree" is wrong; "the WBS view was designed to present the project as a tree" is right. This distinction is not pedantry — it is the difference between an accurate case study and a false claim about a product in market.

---

## A2. The engagement in brief

Topera is a planned cross-organisational project management platform: software for running industrial development projects that span more than one company, where a coordinating organisation and its partners each hold part of the same plan and have to keep those parts synchronised without merging their systems.

Creative Navy scoped a full design of the platform at **twenty-four one-week sprints** and put that position to the client before the engagement began. The client commissioned **three**, as a concept design (T1, T2). The gap was therefore named in advance and accepted knowingly on both sides, which made the central design judgement not what to build but what a concept design is actually for — and therefore what could be left undone.

The client supplied the raw material: the five parts of **DIN 69901**, the German standard for project management systems, together with four **ProSTEP iViP / VDA** recommendations governing how project schedule information is exchanged between companies (T22, T23). These are process models and data models. They are not interfaces, and they do not say what belongs on a screen. Creative Navy's synthesis of them into an information architecture — a matrix of five lifecycle phases against eleven management domains, with every screen traced back to the specific standard element it realises — is the engagement's central artefact and the spine of this case study (T33–T42).

**Two things shape how this must be written.** The engagement included **no user research of any kind** (T15), no audit, no testing and no build. And the record of what the client chose, and why, does not exist (T19). What the engagement has instead is a fully documented derivation from a published corpus, and a set of design boards that show the alternatives explored. Both limits are stated plainly in §A4, and neither is a reason to soften the study — a concept design is a legitimate deliverable with a legitimate job, and this one did its job (T14).

---

## A3. Evidence bank

### A3.1 Engagement record — stateable as fact

- **T1** — **Three one-week sprints.** The entire engagement.
- **T2** — **Creative Navy scoped a full design of the platform at twenty-four sprints, and stated that to the client before the engagement began.** The client commissioned three. This was a scoping position taken in advance and accepted knowingly, not a retrospective observation about how long the work would have taken. **The twenty-four figure remains Creative Navy's professional estimate rather than a measured quantity** — see §A4.2 for the required wording.
- **T3** — **Four-person team:** UX designer, UI designer, product designer, project manager.
- **T4** — **The deliverable was a concept design**, not a build-ready specification. No separately scoped audit, no discovery stage, no research stage, no implementation support.
- **T5** — Three written documents were produced: an **information architecture mapping** of the DIN project management processes; a **design requirements document** specifying the MVP scope module by module against the standards; and a **revised design specification** covering the designed screens in detail. **All three are Creative Navy's synthesis** (T24).
- **T6** — Design surfaces covered in the concept: the **Project Overview Dashboard** (portfolio level); the **Work Breakdown Structure view**, from two separate entry points; the **Schedule & Milestones view** (Gantt and critical path); and the **Project Definition** start-up flow. Supporting flows designed within those surfaces include data import with validation and duplicate handling, template-library import, bulk item creation, filtering and view configuration.
- **T7** — **Twenty-four unique screens.** This is the count of distinct screens, not of frames in the working file. The state and variant designs in T12, the four UI style directions in T9 and the style guide in T8 all sit **on top of** this number and are not counted in it. **No variant or state count exists for this engagement** — see §A10 item 7: write with this figure alone and do not construct one.

> **Writing hazard — two different twenty-fours.** The scoping estimate is twenty-four *sprints* (T2). The design output is twenty-four *unique screens* (T7). These are unrelated quantities whose collision is a coincidence, and a reader who meets them close together will assume one is a mistake. **Never place the two figures in the same sentence or in adjacent sentences.** Keep the sprint figure in the scoping discussion (§A5.1) and the screen figure in the account of what was delivered (§A7 item 8), and never let a paragraph carry both.
>
> **Second hazard, same number.** Twenty-four unique screens is a *creditable* output for three one-week sprints, and the temptation will be to make it carry the efficiency argument. It must not. The lead angle (§A5.1) is that a concept design is a different artefact with a different job — not that Creative Navy worked fast. "Twenty-four screens in three sprints" invites exactly the compression reading §A4.2 forbids.

- **T8** — **A style guide was produced**, covering colour, typography, corner radius, layout and spacing, icons, and a documented set of action components including buttons, text fields, dropdowns, selection controls, tables, tabs, badges, modals, tooltips, notifications and progress indicators. Each component page documents states rather than a single appearance. **The exact page and component counts are not established and will not be published** — see §A10 item 8. Describe the coverage; state no count.
- **T9** — **Four complete UI style directions** were produced for the same screen, differing in typography, accent colour and surface treatment, including both light and dark treatments.
- **T10** — **The Work Breakdown Structure view was designed from two distinct entry points** — reached from a Projects navigation and reached from a Domains navigation — as two legitimate routes into the same structure rather than as alternatives to choose between.
- **T11** — **The hardest screen went through at least four documented versions.** The Work Breakdown Structure domain-entry board carries version markers running to a fourth version; the project-entry board to a third. This is an iteration count, not a date, and is publishable as such.
- **T12** — **Designs were produced for states, not just for screens** — hover, selected, empty, expanded, collapsed, read-only, error and validation-failure states are specified across the surfaces in T6.
- **T13** — **The platform was specified at three system layers** with an explicit structural rule: an organisational layer above projects (group and unit, for cross-project views and governance), a project layer, and an operational layer covering requirements management and model-based collaboration. The operational layer was placed **out of scope for design** and marked as something that **must not be merged into the project or domain structures**.

### A3.2 Client-reported — unquantified

- **T14** — **The client was pleased with the concept design and took it to show stakeholders.** No stakeholder was named, no stakeholder response was reported back, no decision, commitment, funding event or build approval is known. **This is the only outcome-adjacent fact in the engagement, and it is very weak.** See §A4 for the required wording and §A6 for what it does and does not qualify the study for.

### A3.3 What did not happen — must be stated, not omitted

- **T15** — **No user research of any kind.** No interviews, no observation, no workshops with users, no contact with any project manager, programme manager or partner-organisation representative. Not by Creative Navy, and none was supplied by the client.
- **T16** — **No usability testing.** Nothing was tested with anyone at any point.
- **T17** — **No UX audit and no expert review.** There was no existing product to review.
- **T18** — **No competitor benchmarking is recorded.** Do not claim any.
- **T19** — **No record of client decisions exists.** There is no documented set of client choices between alternatives, no written feedback rounds, and no transcript of any working session. The alternatives in T63–T68 are evidenced by the design boards as alternatives that were *produced*; which were chosen, and on what reasoning, is not recorded. **Never write that the client chose, preferred, selected or rejected anything.**
- **T20** — **Nothing was built, and no development handover took place.** No component was implemented. There is no design system in the Organizational Integration sense — a style guide was delivered (T7), but no reasoning documentation, no development-ready component specification and no handover.
- **T21** — **The personas in the specification documents are Creative Navy's reasoned constructs, not research findings.** The specification names four roles — project manager, programme or portfolio manager, partner organisation representative, and executive — with workflows attached. These were derived from the standards and from the domain, not from contact with any such person. The numeric "success metrics" attached to them in the specification (for example, identifying a project within a stated number of seconds) are **design targets written into a specification, not measurements of anything.** They must never appear in the case study as findings, as results, or as evidence that anything was measured. Safest handling: do not reproduce the numbers at all.

### A3.4 The domain and the standards stack — documented

- **T22** — **The client supplied the standards corpus.** Nine documents: DIN 69901 parts 1 to 5, the ProSTEP iViP CPM Reference Model (PSI 1-1) and CPM Data Exchange Model (PSI 1-2), the ProSTEP iViP / VDA schedule management recommendation (PSI 10 / VDA 4959), and the ProSTEP iViP PSMS recommendation (PSI 25). See §A1.1 on provenance: do not characterise it.
- **T23** — **The DIN 69901 series is in German.** Parts 1 to 5 are *Grundlagen* (fundamentals), *Prozesse, Prozessmodell* (processes and process model), *Methoden* (methods), *Daten, Datenmodell* (data and data model) and *Begriffe* (terminology). The working vocabulary of the domain is German — *Vorhaben* (initiative), *Projektstrukturplan* (work breakdown structure), *Arbeitspaket* (work package), *Vorgang* (activity), *Meilenstein* (milestone), *Netzplantechnik* (network planning technique), *Terminmanagement* (schedule management), *Soll-Ist-Vergleich* (planned-versus-actual comparison), *Pufferzeit* (float). The specification documents work bilingually throughout, mapping each German standard element to the English interface term.
- **T24** — **All three delivered documents are Creative Navy's synthesis.** The standards were the input. The mapping of standard elements to screens, modules, actions and scope tiers is Creative Navy's work.
- **T25** — **DIN 69901-2 defines a process model**: five project management phases — Initialisation, Definition, Planning, Execution and Monitoring (Steering), and Closure — crossed with eleven process groups covering sequence and dates, changes, information and communication, costs and finances, organisation, quality, resources, risk, project structure, contracts and claims, and goals. Individual processes are identified by a phase letter and a group number (for example D.1.1, "define milestones"; P.9.1, "create the project structure plan"; S.1.2, "control schedule"). **The standard defines fifty-nine processes in total** (clauses 4.4.2 to 4.4.60), **of which fourteen are designated *Mindeststandard* — the minimum set every project must run.** Both figures were verified directly against the standard for this brief and may be stated as fact. The fourteen are D.8.3, D.11.1, P.1.2, P.7.1, P.8.1, P.8.2, P.9.1, S.1.2, S.2.1, S.3.2, S.7.1, S.8.1, S.11.1 and A.6.1.
- **T26** — **DIN 69901-4 defines a data model expressed as twelve data model areas**, numbered Bild 2 to Bild 13 in the standard: project master data, product and result planning, contract management, schedule management, resource master data, resource planning, resource control, reporting, cost management base data, cost management transaction data, the assessment system, and documents and appointments. Bild 1 is not a data model area — it is the diagram showing how the five parts of DIN 69901 relate to each other.

> **Correction to carry.** Creative Navy's own design requirements document describes this as "13 data model diagrams", counting Bild 1. **It is twelve data model areas across figures numbered 2 to 13.** Verified against the standard for this brief. Do not reproduce the thirteen; it is the kind of number a reader can check.
- **T27** — **The central entity in DIN 69901-4 is the *Vorhaben* (initiative)**, and it is deliberately polymorphic: the same entity type represents a project, a work package, an activity and a milestone, distinguished by a type attribute, and nested through a sub-initiative relationship that forms the work breakdown hierarchy. This single modelling decision in the standard is what allows one tree view to represent four different kinds of thing — and it is the reason the WBS view could be designed as one surface rather than four.
- **T28** — **DIN 69900 governs network planning technique** (*Netzplantechnik*) and carries requirements that are directly about interface behaviour — among them that the horizontal time axis must be separately scalable in steps based on usual units of time, and that scheduled dates may be maintained by drag and drop in graphical display forms such as the Gantt chart. The specification cites these as requirements, not as design preferences.
- **T29** — **The PSI 25 PSMS recommendation defines synchronisation levels** for cross-organisational schedule management, rising from SL1.1 (project master data, dependencies and work packages at project or partner level), through SL1.2 (individual milestones with dependencies), SL2.1 (activities with dependencies across structural levels), SL2.2 and SL2.3 (references to deliverables at project and activity level), to SL3.x (complete network plans with sub-projects and multiple partners). Partners at different levels can still work together.
- **T30** — **PSI 25 version 2.0 is dated May 2025**, and the working group that produced it concluded in 2024. See §A8.1 for who wrote it, which matters for the competitive argument.
- **T31** — **DIN 69901-4:2009 was superseded in September 2025 by DIN/TS 69901-4**, which carries the same data model forward as a Technical Specification rather than as a full standard. The specification documents in this engagement work from the 2009 edition. **Handle with care** — see §A4 and §A10.
- **T32** — **The ProSTEP iViP CPM recommendations supply the cross-company coordination vocabulary** used in the specification: agreed cross-partner milestones, bilateral synchronisation points, interaction chains of chronological review points, and a communication matrix mapping role to role against topic. The CPM recommendations explicitly exclude project management *within* the participating enterprises; they govern only the interface between companies.

### A3.5 The information architecture derivation — the engagement's central artefact

- **T33** — **The information architecture was built as a matrix with two axes.** A horizontal time axis carrying the five DIN 69901-2 lifecycle phases, and a vertical knowledge axis carrying eleven management domains: project structure, schedule and milestones, communication and reporting, cost and budget, human resources, resources, quality, risk, contract, deliverables, and change management.
- **T34** — **Every cell of that matrix is populated with three things**: the specific DIN 69901-2 processes active in that phase, the DIN 69901-4 data model entities that carry the information, and the PSI 25 synchronisation activity that propagates it to partners. The derivation is traceable in both directions — from a standard element to the screen that realises it, and from a screen back to the standard element that justifies it.
- **T35** — **Every screen specification carries its standard reference and its synchronisation level.** The module tables in the requirements document are structured as screen, content, user actions, DIN 69901-4 reference, PSI 25 level. There is no screen in the specification without a traced justification.
- **T36** — **Scope was set by synchronisation depth rather than by feature list.** SL1.1 and SL1.2 were specified as required, SL2.1 and SL2.2 as target, SL2.3 as stretch, and SL3.x as post-MVP. The same ladder was applied to the CPM collaboration classes, with CC1 to CC3 in scope and CC4 deferred. **This is the most distinctive scoping decision in the engagement**: the MVP boundary was drawn against an external, published, verifiable yardstick rather than against an internal feature list.
- **T37** — **The data model coverage was tiered explicitly.** Of the thirteen DIN 69901-4 diagrams, some were designated core, some MVP-domain, and some simplified for the MVP — a documented decision about which parts of the standard the concept would realise fully and which it would represent in reduced form.
- **T38** — **The architecture was required to be complete even where the MVP was not.** The specification states that MVP screens will be limited but that information architecture coverage must be complete, and that non-implemented areas must still appear as future extension points. The architecture was designed as a long-term backbone, not as a description of the first release.
- **T39** — **Both navigation axes were designed as real routes, not as one primary and one secondary.** The project layer is specified as carrying both process-based navigation and domain-based navigation, and the Work Breakdown Structure view was designed to be entered from either (T10).
- **T40** — **The partner organisation sees a deliberately shallower system.** External partners were specified as asynchronous, with three to four structural levels exposed and no direct edit permissions, while internal users see full depth. The same objects have two legitimate views at different depths, and the boundary between them is a designed object rather than a permissions setting.
- **T41** — **The work breakdown handover model carries constraint caps.** One party creates an initiative and assigns it to another with constraint attributes attached — maximum duration, maximum effort, maximum cost. The receiving party sees only the assigned sub-initiative and its constraints, and may decompose further within them. The system was specified to warn, but not to prevent, when decomposition passes four levels. The final structure is a stitched tree with aggregated values.
- **T42** — **Two forms of progress reporting were specified as equally valid inputs.** A domain system returning a time series of actual effort, and a domain system returning discrete milestone-style dates, were both accepted rather than one being normalised into the other.

- **T70** — **The architecture covers all fourteen *Mindeststandard* processes.** DIN 69901-2 designates fourteen of its fifty-nine processes as the minimum set every project must run (T25). All fourteen — D.8.3, D.11.1, P.1.2, P.7.1, P.8.1, P.8.2, P.9.1, S.1.2, S.2.1, S.3.2, S.7.1, S.8.1, S.11.1 and A.6.1 — appear by their standard process codes in Creative Navy's architecture mapping and design requirements documents. **Verified for this brief by checking each code against the delivered documents**, not asserted by the engagement lead. This entry is numbered out of sequence because it was established after the bank was written.

> **What this does and does not show.** It shows the derivation was systematic rather than selective: the scope was not assembled from whichever processes were easy to draw. It does **not** show the processes were well designed, that the coverage is adequate for a build, or that any conformance assessment took place (§A4.5). State it as coverage of a named minimum set, nothing more.

### A3.6 Design decisions and the reasoning behind them

- **T43** — **The Project Overview Dashboard was designed as a portfolio-level triage surface**, pairing a statistical summary group (projects by phase, most delayed projects, counts of projects with missed milestones, warnings and critical status) with a dense project table carrying status, completion, milestone counts, warnings, team, phase and last update.
- **T44** — **Two structural versions of that dashboard were produced** (T63), the second leaning more heavily on charts to carry the summary information than the first, which led with numeric key figures.
- **T45** — **Warnings were designed to be interrogable in place.** A warning indicator in the project table carries a tooltip naming the specific condition, rather than requiring the user to open the project to find out what is wrong.
- **T46** — **Completed projects can be hidden** as an explicit toggle on the portfolio view, rather than being filtered out by default or left to clutter the table.
- **T47** — **The Schedule & Milestones view was designed around network planning rather than around the bar chart.** Dependencies are typed (finish-to-start, start-to-start, finish-to-finish, start-to-finish) with lead and lag; the critical path is a distinct display mode; float is a displayable quantity with free float and total float distinguished; and baseline comparison is a designed overlay rather than a report.
- **T48** — **The Gantt's information columns were made configurable** through an explicit configure control, so that the same timeline can carry different supporting columns — status, owner, dates, progress, priority, responsible organisation — for different readers, rather than the interface choosing one fixed set.
- **T49** — **Direct manipulation of the schedule was designed in**, with drag to reschedule, and dependent task recalculation, conflict highlighting and critical-path recomputation following from it. This is a DIN 69900 requirement (T28), not a convenience feature, and should be written as such.
- **T50** — **The Work Breakdown Structure view was designed as a tree carrying four item types** — project, work package, task and subtask, with milestones as a further typed item — reflecting the polymorphic initiative entity in the standard (T27). Expandability is signalled only where children exist.
- **T51** — **A right-hand detail panel carries the selected item**, organised into tabs for time, finance, quality, delivery, communication and files, so that the structural view and the detail view coexist rather than replacing one another.
- **T52** — **Plan, actual and forecast dates were kept structurally separate** in that panel — a plan block and an actual block, with the actual block separately editable and explicitly saved. The same discipline as the industrial engagement's separation of measured values from operator offsets, arrived at independently here from the standard's own distinction between planned and actual dates.
- **T53** — **Read-only state is shown on the item, not discovered on interaction.** Items the current user cannot edit carry a lock indicator, with the explanation and the route to the owner available from it.
- **T54** — **Critical-path exposure was designed into the structural view as well as the timeline**, so that an item on the critical path is marked as such where the user is working, rather than only in the Gantt.
- **T55** — **Data import was designed around failure rather than around success.** The import flow specifies file validation with per-row error reporting naming the field and the fault, and a separate duplicate-detection step that lists the colliding identifiers and offers an explicit choice between importing as new data and importing to overwrite. The error and duplicate states are designed screens, not error toasts.
- **T56** — **Structure can be imported from a template library** — standard work breakdown and product breakdown templates that can be browsed, previewed, pruned and imported, so that a project does not start from an empty tree.
- **T57** — **Bulk creation was designed as a first-class path**, because the alternative — building a hundred-item work breakdown one item at a time — is the realistic failure mode of a structural tool.
- **T58** — **The Project Definition start-up surface was designed as a single long working page**, not as a wizard: a left navigation listing the definition areas with per-area completion state, a central working column, and a right panel carrying settings, recommendations and contextual validation. The areas correspond to the DIN 69901-2 Definition-phase processes.
- **T59** — **Completion is tracked and displayed, and areas are individually markable as complete**, with an overall completion rate shown persistently. The design treats project definition as something worked on over time by several people, not as a form filled in once.
- **T60** — **The phase transition was designed as an explicit gate.** The Definition surface ends in a phase clearance checklist enumerating each area and its state, with incomplete and blocked items identified, and a submission action that is the formal request for review and clearance into the Planning phase. The gate is modelled on the standard's own approval processes rather than invented.
- **T61** — **Dependent sections declare their blockers rather than failing silently** — a cost section that cannot be completed until the work breakdown exists says so, and names what it is waiting for.
- **T62** — **The left domain panel was designed to collapse to an icon rail**, with the domain name available on hover, so that the structural tree can take the full width on smaller displays without losing the navigation.

### A3.7 Option space evidence — what the boards show

**This is the entire evidential basis for any claim about exploration in this engagement.** It is what was produced, visible in the working file. It is not a record of what was chosen (T19).

- **T63** — **Two structural versions of the Project Overview Dashboard**, differing in how the summary band carries information (T44).
- **T64** — **Four filter patterns** for the same table: an inline pattern carried over from the work breakdown view, a cascading menu pattern, a full right-hand filter panel with grouped and collapsible criteria including saved filters, and a chip-based pattern where each applied filter becomes a removable token. The boards record the latter three explicitly as alternatives to the first.
- **T65** — **Four complete UI style directions** for the Schedule & Milestones screen, differing in typography, accent colour and surface treatment, and spanning light and dark (T9).
- **T66** — **Two right-panel treatments for the Project Definition surface** — a settings-and-recommendations panel and a summary panel — plus a collapsed-areas treatment of the same page.
- **T67** — **Two navigation treatments for the Work Breakdown Structure** — a full domain panel and a collapsed icon rail (T62).
- **T68** — **Two entry points into the Work Breakdown Structure**, from Projects and from Domains (T10), designed as co-equal routes rather than as competing options.
- **T69** — **At least four documented versions of the hardest board** (T11).

---

## A4. Evidence calibration — mandatory

The repository's evidence standards require every claim to be attributed to its basis. This engagement has an unusually thin basis, so the calibration work is unusually important. Use these framings.

### A4.1 The engagement record (T1–T13) — stateable as fact

Three one-week sprints; a four-person team of UX designer, UI designer, product designer and project manager; three delivered documents; the design surfaces in T6; the style guide in T8; the iteration and alternative counts in T11 and T63–T69.

These are **engagement facts, not outcomes.** Do not let them drift into outcome language. "Four complete UI style directions were produced" is a fact. "Four directions were explored to find the right one" is a claim about a process nobody recorded.

### A4.2 The twenty-four-sprint scoping position (T2) — stated in advance, and still an estimate

Two separate things are true here and both must survive into the writing: the position was **stated to the client before the engagement** (that is a fact about what happened), and the twenty-four figure is **a professional estimate** (that is a fact about the number). Required framing:

> Creative Navy scoped a full design of the platform at twenty-four one-week sprints and put that position to the client before the engagement began. The client commissioned three, as a concept design. The twenty-four-sprint figure is Creative Navy's professional estimate of the full scope, not a measured comparison between two pieces of work.

**Do not** write "eight times faster", "in one eighth of the time", or anything implying that twenty-four sprints of work were compressed into three. Nothing was compressed. A different and much smaller deliverable was produced, deliberately. That distinction is the whole point of the lead angle (§A5.1) and collapsing it destroys the argument.

### A4.3 The stakeholder circulation (T14) — the weakest evidence in the study

Required framing:

> Topera's team was pleased with the concept design and took it to show stakeholders. No stakeholder response, decision, commitment or funding event is known to Creative Navy, and none is claimed.

**Do not** convert this into traction, validation, approval, interest, momentum, a funding round, a commissioning decision, or evidence that the concept was well received by anyone other than the client. It is one sentence of client satisfaction plus the fact that the artefact travelled. Write exactly that much.

### A4.4 The personas and their numbers (T21) — do not reproduce

The four roles in the specification are Creative Navy's reasoned constructs derived from the standards. The numeric targets attached to them are specification targets. Neither was measured, tested or validated against a human being. If the roles are mentioned at all, they must be described as roles the architecture was designed to serve, derived from the standard's own role model — never as personas built from research, and never with the numbers attached.

### A4.5 The standards (T22–T32) — framing, never credentials

**Creative Navy did not certify to, audit against, or achieve conformance with any standard named in this study.** Creative Navy read them and designed from them. Any phrasing implying compliance work, conformance assessment or certification is false. "Grounded in DIN 69901" is accurate. "DIN 69901 compliant" is not Creative Navy's to say — it would be a claim about a system that does not exist, assessed by nobody.

**On T31 specifically:** the supersession of DIN 69901-4 by DIN/TS 69901-4 is a verifiable fact about the standard. It is **not** evidence that the engagement used a superseded document, and must not be written as a criticism of the client or as a limitation of the work. If used at all, use it in the §A8 domain framing as a fact about the normative landscape, and **confirm first which edition the client supplied and whether the change was known at the time** (§A10).

### What must not be claimed

- **Any outcome whatsoever.** No performance, efficiency, time-saving, adoption, revenue, funding or commercial result. None exists. This study populates no `/evidence/outcomes` page.
- **Any implication that Topera exists as a working system**, is in development, is in pilot, or has users. It is a concept design and nothing has been built (T20).
- **Any research finding, user insight, usability result or observed behaviour.** There was none (T15, T16).
- **Any client decision, preference, selection or rejection.** Not recorded (T19).
- **Any competitive benchmarking.** Not done (T18). The competitive material in §A8.3 is desk research for this brief and may be used as domain framing, never as "Creative Navy benchmarked X".
- **Any standards conformance, certification or compliance credential** (§A4.5).
- **Any claim about German or European project management practice at large** that is not sourced in §A8. The standards describe what the standards describe; they are not evidence of what organisations actually do.
- **Any design system claim in the Organizational Integration sense.** A style guide was delivered (T8). Reasoning documentation, development-ready component specification and handover were not (T20).
- **Anything carried over from the industrial process control engagement (E).** Both involve German industrial standards and cross-organisational structure. They share no facts.

---

## A5. Positioning — the angles worth leading with

Ranked by how defensible and how distinctive each is.

### A5.1 What a concept design is for — *lead with this*

The engagement's defining decision was made before any design work began. Creative Navy scoped a full design at twenty-four sprints, said so to the client, and then took the three-sprint concept commission the client chose on the strength of that scoping (T1, T2). The gap was named in advance by the party that would have to live inside it — which means the first design decision was not what to build but what the deliverable was *for*.

**That sequence is what makes this angle work.** A designer who discovers the shortfall halfway through is managing a problem. A designer who sizes the job honestly, says the number out loud, and then designs deliberately to a fraction of it is doing something else: treating scope as a design variable rather than a constraint imposed from outside. The client bought a concept design knowing it was a concept design, which is why what follows can be written as a set of choices rather than a set of compromises.

A concept design is not a small complete design. It is a different artefact with a different job. Its job is to be **legible to people who have to decide whether the thing should exist** — and the evidence that this was understood correctly is that the client took it and toured it to stakeholders (T14). That is what a concept design is supposed to do.

The corpus already has the principle this rests on: `/evidence/how-we-work-with-evidence/deliverable-format-follows-purpose` argues that the appropriate form of a deliverable depends on who receives it and what they must do with it, and names the failure mode as "an unconsidered middle" — a format filled in rather than composed, useful to neither the aligned team nor the uninitiated. Topera is a clean instance: three sprints spent on architectural completeness and a presentable surface, deliberately not spent on the things a build needs.

**What that bought, and what it cost, should both be stated.** It bought a complete information architecture (T38), four finished UI directions (T9), and designed states across the main surfaces (T12). It cost research (T15), testing (T16), a decision record (T19), and everything on the build side (T20). Writing both halves is what makes this angle credible rather than defensive.

This also pairs directly with the industrial engagement's scoping argument, where Creative Navy argued *against* the cheapest option on structural grounds and won the largest (`industrial-writing-brief.md` §7.5). Same discipline, opposite direction: there, the structural argument was that a single sprint would leave hidden downstream cost; here, three sprints were right because the deliverable was not a foundation but an argument. **Do not merge the two engagements** — reference the principle, not the facts.

### A5.2 Designing an interface from a standard, not from users

DIN 69901-2 is a process model: five phases crossed with eleven process groups, each process identified by a code (T25). DIN 69901-4 is a data model of thirteen diagrams (T26). Neither contains an interface. Neither says which process deserves a screen, which deserves a field, and which deserves nothing at all.

Creative Navy's synthesis made those decisions explicitly and traceably: a two-axis architecture (T33), every cell populated with its processes, entities and synchronisation activities (T34), and every screen specification carrying the standard element it realises (T35). The derivation runs both ways — from a standard element to the screen, and from a screen back to its justification.

This is *domain learning* in a register the corpus has documented but not in this form. The `/contexts/emerging-products` page already names "domain learning from a knowledge corpus", where the corpus is a founder's thesis or a researcher's technical documents. **Topera extends it: the knowledge corpus is a set of published national and industry standards supplied by the client** (T22). The difference matters. A founder's thesis is incomplete and needs structure extracted from it. A standard is the opposite problem — it is complete, formal, and exhaustive, and the design work is *subtraction under judgement*: deciding what a normative document does not tell you about an interface, and what it tells you that you should not do.

**There is one checkable proof that the subtraction was disciplined rather than arbitrary.** The standard itself designates fourteen of its fifty-nine processes as *Mindeststandard* — the minimum any project must run (T25). All fourteen appear by their standard process codes in Creative Navy's architecture (T70). The standard's own answer to "what is indispensable" is fully present in the design, which is a claim a reader holding the standard can verify. Lead the section's evidence with this rather than with the volume of the derivation.

One concrete illustration carries the method better than the argument does. The standard models project, work package, activity and milestone as **one polymorphic entity** distinguished by a type attribute and nested through a sub-initiative relationship (T27). That single modelling decision in the standard is what allows the work breakdown view to be one surface carrying four kinds of thing rather than four surfaces (T50). Reading that out of a data model, and recognising what it licenses in an interface, is the work.

### A5.3 Scope set by interoperability depth, not by feature list

PSI 25 defines synchronisation levels rising from project master data through milestones, activities and deliverable references to complete multi-partner network plans (T29). Creative Navy used that ladder as the MVP boundary: SL1.1 and SL1.2 required, SL2.1 and SL2.2 target, SL2.3 stretch, SL3.x deferred, with the CPM collaboration classes tiered the same way (T36).

This is *progressive specification* against an external, published, verifiable yardstick. It is unusual and worth stating plainly: the question "what is in the MVP" was answered as "how deeply can two companies synchronise", which is a question about what the product is *for* rather than about what it contains. A feature list cannot be argued with on principle. A synchronisation level can — it is defined in a document both parties can read.

It also makes the scope legible to the people a concept design has to convince (§A5.1). A stakeholder who knows the standard can read the scope boundary without being walked through it.

### A5.4 Designing for the partner who is not in the room

Internal users were specified to see full depth; external partners three to four structural levels, asynchronously, with no direct edit rights (T40). The same objects therefore have two legitimate views at different resolutions, and the boundary between them is a designed object rather than an access-control setting.

The handover model sharpens it: work is assigned across the boundary with constraint caps attached — maximum duration, effort and cost — and the receiving party decomposes freely *within* those constraints, with the system warning rather than preventing when decomposition runs deep (T41). The structure that comes back is stitched into the whole with aggregated values.

This is a coordination problem where one party cannot see most of the system and must still be given enough to act correctly — and where the interface has to make the boundary legible without leaking what is behind it. It connects to the handoff and multi-role failure clusters rather than to anything industrial, and it is the part of this engagement that generalises furthest beyond project management software.

### A5.5 Two navigation axes that both have to be true

The architecture is a matrix (T33), and the project layer was specified to carry both process-based navigation — where am I in the lifecycle — and domain-based navigation — what am I managing, cost or risk or quality or resources (T39). The work breakdown view was designed to be entered from either, as co-equal routes into the same structure rather than a primary and a fallback (T10, T68).

Most tools in this category pick one axis and relegate the other. Carrying both is the hardest structural decision in the material, and the board history shows it was also the most worked: the domain-entry board reached at least a fourth documented version (T11, T69).

### A5.6 Designing failure states before success states

The data import flow was specified around what goes wrong: per-row validation errors naming field and fault, and a separate duplicate-detection step listing colliding identifiers with an explicit choice between importing as new and overwriting (T55). These are designed screens, not error toasts bolted onto a working path.

The same disposition appears in the dependent sections of the Definition surface, which declare what they are blocked by rather than failing silently (T61), and in read-only state being shown on the item rather than discovered on interaction (T53).

This is a small angle but a true one, and it is unusual in a *concept* design, where the incentive runs entirely the other way — concept work is normally all happy path, because the happy path is what demonstrates well. Designing the duplicate-collision screen is a decision to spend scarce concept-design time on something that will never appear in a demo.

### A5.7 A standard that is moving — resolved as domain framing, not as an angle

PSI 25 reached version 2.0 in May 2025, produced by a working group that concluded in 2024 (T30), and DIN 69901-4:2009 was superseded in September 2025 by a Technical Specification carrying the same data model forward (T31).

**Decision taken: this is not an angle in the case study.** It was considered as one — designing a long-term architectural backbone on an actively re-issuing normative base is a real condition — but it cannot be written without either implying the client worked from a stale document or requiring a defensive explanation that it did not matter. The client supplied the 2009 edition (T22), which was the current edition of a standard whose data model the Technical Specification then carried forward unchanged. Nothing about the design is affected.

**Use the facts only as neutral domain framing on the topic and context pages**, where "the normative base for German project management data modelling moved in 2025" is simply true and useful. Keep it out of the case study.

---

## A6. Classification and filing

```
## Classification

- **Primary case-study category:** /evidence/case-studies/emerging-products
- **Primary context:** /contexts/emerging-products
- **Also-relevant contexts:** /contexts/multi-stakeholder-operational-environments, /contexts/enterprise-software, /contexts/expert-tools-and-internal-systems
- **Connects to:** /situations/complexity/multi-role-workflows-are-fragmented, /situations/complexity/system-state-is-hard-to-understand, /situations/complexity/expert-workflows-are-hard-to-operate, /situations/risk-and-consequence/handoffs-create-failures, /situations/delivery-and-execution/stakeholders-cannot-align-on-direction, /failures/workflow-failures/handoffs-lose-context, /failures/workflow-failures/workflows-break-across-roles, /failures/state-visibility-failures/important-status-information-is-buried, /capabilities/information-architecture-for-expert-systems, /capabilities/workflow-and-task-structure-redesign, /capabilities/state-and-status-visibility-design, /capabilities/service-design-for-multi-role-systems
```

**Rationale for the primary context.** The tagging convention is explicit that primary context is chosen by dominant design-challenge class, not by industry and not by user type. The load-bearing problem here is **origination**: there is no system, no user base, no baseline and no prior art to analyse, and the product frame had to be constructed from a knowledge corpus under a compressed timeline. The `/contexts/emerging-products` page already carries the exact vocabulary this engagement needs — "information architecture at origination", "option space mapping at the architecture level", "domain learning from a knowledge corpus", "bootstrapped constraints", "prototype as primary communication artefact". The subject matter is cross-organisational coordination, which is why multi-stakeholder-operational-environments sits as also-relevant rather than primary; it is what the platform is *about*, not what made the engagement hard.

**Rationale for the category.** `/evidence/case-studies/emerging-products` is defined in `site_structure.md` as engagements "where no deployed system exists to evaluate, redesign, or research against", where "the domain expertise exists — in the client's research, professional practice, or founding insight — but has not yet been structured into a product". Topera is that, with the variation that the domain expertise arrived as a standards corpus rather than as the client's own research. **Do not file this under enterprise-software**, which would put a concept design with no product alongside shipped B2B platforms, and would be the same category erosion the tagging convention exists to prevent.

**No structural additions are required.** Both the context and the category already exist. The classification gate (`lint_case_studies.py`) must still pass before any enrichment work begins.

**What this study does not qualify for.** It populates **no `/evidence/outcomes` page**. In particular it must **not** be added to `/evidence/outcomes/design-as-investment-evidence`, despite the surface resemblance — that page's public-commission register requires the artefact to have done identifiable work in a resource-commitment decision (the Neugo standard), and T14 records only that the client was pleased and that the artefact travelled. It is a boundary case that fails the bar, and the page's own calibration discipline depends on keeping it out. Revisit only if a stakeholder decision is ever reported.

**What it does contribute.** A new variant for the `/contexts/emerging-products` page — domain learning from a *normative* corpus — and a grounded instance for `/evidence/how-we-work-with-evidence/deliverable-format-follows-purpose`. Both belong in Part B.

---

## A7. Suggested structure for the case study

1. **Opening** — the locked agency sentence; Topera named and described in two sentences; the concept-design framing and the three-versus-twenty-four scoping fact (T1, T2) stated immediately, because it governs how everything that follows should be read.
2. **The problem the platform addresses** — industrial development projects spanning more than one company, where partners hold parts of the same plan and must synchronise without merging systems. Establish the domain before the standards.
3. **The material Creative Navy was given** — the standards corpus (T22, T23), what those documents are and what they are not: process models and data models, not interfaces.
4. **Deriving an architecture from a standard** (§A5.2) — the two-axis matrix, the traced cells, the polymorphic initiative entity and what it licensed. The strongest section; give it room.
5. **Scope by synchronisation depth** (§A5.3) — the SL ladder as an MVP boundary.
6. **The partner who is not in the room** (§A5.4) — asymmetric depth, constraint-capped handover.
7. **Two navigation axes** (§A5.5) — the matrix made navigable, the two WBS entry points, the iteration count on the hardest board.
8. **What three sprints bought** — the surfaces, the screen count, the states, the four UI directions, the style guide, the alternatives explored (T6–T12, T63–T69). Include the failure-state work (§A5.6) here. **This is the only section where the twenty-four screen figure belongs** (T7); the twenty-four-sprint figure belongs in sections 1 and 9 and must not appear here.
9. **What three sprints did not buy, and why that was the right trade** (§A5.1) — no research, no testing, no decision record, no build. State it as a deliberate scope decision with its costs named, not as an apology.
10. **Evidence and limits** — the engagement record, the single client-reported sentence with its full calibration, and an explicit statement that no outcome exists because nothing has been built.

---

## A8. Domain framing and external research

**Creative Navy did not certify to, audit against, or work to any standard named here** (§A4.5). These establish that the writer understands the domain.

### A8.1 Who writes these standards — the strongest external frame

The PSI 25 PSMS recommendation was produced by a ProSTEP iViP working group whose industry members include **BMW Group, Porsche, ZF Friedrichshafen, Dräxlmaier, PROSTEP AG, collaboration Factory (cplace) and Planisware**, chaired from BMW. The group concluded in 2024 and version 2.0 followed in May 2025 (T30). The earlier CPM recommendations (PSI 1-1, PSI 1-2) list a comparable roster including BMW, Daimler, Volkswagen, Continental, Johnson Controls, ZF, SAP, Microsoft, PTC and several German technical universities.

Two things follow, and both are usable.

**First, this is a standard written by the buyers.** The organisations that would require a tool like Topera to interoperate are the same ones that specified how interoperation works. That is unusual, and it is the reason the standards stack is a credible design input rather than a formality.

**Second, two of the vendors in that room sell competing products.** collaboration Factory (cplace) and Planisware are project and portfolio management vendors. A product entering this category is therefore entering one where incumbents helped write the interoperability rules. **What those incumbents do not do is market conformance to them** — see §A8.3, which settles how the *competitive vector* argument has to be built. Use the term attributed and in context, per the collision check in `guide--writing-for-llms.md` §2.7.

### A8.2 Standards vocabulary — and one number to verify first

Usable, and the primary source of domain authority in this study: the five parts of DIN 69901 and what each governs (T23); the five phases and eleven process groups of the process model (T25); the thirteen data model diagrams (T26); DIN 69900 and *Netzplantechnik* (T28); the PSI 25 synchronisation levels (T29); the CPM coordination objects (T32); and the German working vocabulary throughout (T23).

**Verified against the standard itself, and stateable as fact:** DIN 69901-2 defines **fifty-nine project management processes** across eleven process groups and five phases, and designates **fourteen of them *Mindeststandard*** — the minimum set that must be run in every project (T25).

**This is the most useful external fact in the study, because of what it lets the case study check.** The *Mindeststandard* is a standards body's own answer to the exact question this engagement had to answer: out of fifty-nine processes, which are indispensable? That makes it a yardstick the MVP scope can be measured against rather than merely described beside — and the measurement was run for this brief (T70): **all fourteen appear in Creative Navy's architecture.**

Use it as the proof that the derivation was systematic rather than selective. It is checkable by any reader with the standard, which is precisely what makes it worth stating.

Also worth checking before use: **ISO 10303-242 (AP242)**, since the PSI 25 PSM schema is derived as a subset of its domain model. AP242 is the STEP application protocol used across automotive and aerospace, and naming it correctly is high-value domain vocabulary — but confirm the relationship's exact phrasing from the recommendation itself rather than paraphrasing it. **ISO 21500 / 21502** are the international analogues to DIN 69901 and are worth a sentence of positioning for a reader outside Germany.

### A8.3 The competitive field — desk research, not benchmarking

Creative Navy did not benchmark anyone (T18). This is domain framing for the writer and for the topic pages.

The German-speaking market for multi-project and programme management software in industrial settings includes **cplace (collaboration Factory, Munich)**, **PLANTA (Karlsruhe)**, **Can Do (Munich)**, **RPLAN (Actano, Munich)** and **Planisware**, alongside the generalists — **Microsoft Project**, **Oracle Primavera P6** — and the programme planning capabilities inside PLM suites such as **Siemens Teamcenter**. The specification's own export list names MS Project and Primavera interoperability alongside PSI 25 XML, which is a reasonable indicator of what the category assumes it must talk to.

### A8.3.1 The conformance finding — and the argument it licenses

**Checked for this brief: no vendor in this category publicly claims PSI 25 or PSMS conformance.** cplace's own collaborative schedule management product page names no standard at all — not PSI 25, not PSMS, not ProSTEP iViP, not VDA, not AP242 — despite collaboration Factory having sat on the working group that produced the recommendation. Planisware, also on that group, describes its integration story as a REST API and a configurable import/export interface rather than as conformance to a named standard. Nothing was found for PLANTA, Can Do or RPLAN either.

**The capability is nonetheless actively sold.** cplace markets cross-company planning explicitly, contrasting its own reach with tools that "stop at company boundaries", and describes collaborative scheduling as the de facto standard in automotive product development — *de facto* being the operative word: a prevailing practice, not a published specification.

**So the competitive vector is not "nobody synchronises across companies".** That would be false, and a reader in this market would know it. The vector is narrower and more defensible:

> Cross-company schedule synchronisation is sold in this category as proprietary platform behaviour. It is not sold as conformance to the published, multi-OEM standard that specifies it — not even by the vendors who helped write that standard. A product whose scope boundary is drawn *at a named synchronisation level* (T35) is making a claim none of its competitors currently makes.

That is the argument to build, and it also explains why the SL ladder (§A5.3) is a positioning decision and not only a scoping one.

**Evidentiary limit, and it must be respected.** Absence of a public claim is not proof of absence of support. This was an English-language web search of vendor marketing material, which is not a conformance register. Write it as "does not publicly claim", never as "does not support", and **re-check before publication** — this is a live standard and vendor positioning moves.

### A8.4 Why cross-company schedule synchronisation matters — market frame

Usable as category context, properly attributed, never as a claim about Topera:

- **Milestone terminology divergence** is a recurring and well-documented failure mode in OEM–supplier development: the same gate carries different names at different OEMs (one calls it "Physical Build 1", another "First Physical Prototype"), so a supplier working with several customers maintains several vocabularies for one reality. This is precisely the problem a standardised synchronisation model addresses, and it is the clearest lay explanation of why PSI 25 exists. Use it qualitatively, as an illustration of the problem class — it does not need a statistic to land.

> **Dropped on checking: the launch-delay statistic.** An earlier draft of this brief carried a Vector Consulting Group finding that vehicle launches run 9–15 months behind schedule despite digital investment. **On verification that study is about Indian domestic OEMs** — its investment figures are denominated in crore — and it cannot carry a claim about European automotive development, which is the context Topera sits in. **Do not use it.** If a launch-delay statistic is wanted later, source one for the European market specifically; do not retrofit this one.

### A8.5 Do not import

Do **not** bring the machinery-safety, NIS2, Cyber Resilience Act, ISA-18.2, ISO 11064 or EU Machinery Regulation vocabulary across from the industrial process control brief. Different domain, different engagement, no applicability. Topera is project management software; the physical-plant standards have nothing to say about it.

### A8.6 Consistency requirement

Check this study against anything Creative Navy has already published about project management tooling, standards-based design, or the emerging-products engagement mode before publication. The four existing emerging-products case studies (Greenlight, Veecle, Puraite, Hudex) all involve startups and investment; Topera is the first industrial, standards-governed instance in that set, and the context page should be read before writing so the new variant is additive rather than contradictory.

---

## A9. Style and lexicon compliance

Non-negotiable items from the writing guide:

- **Open with the locked agency sentence**, verbatim, on first introduction.
- **Attribute the method on first use in every self-contained section**: "Creative Navy's Critical Systems Design method", thereafter "Critical Systems Design" within that section. Never "the method", "our approach" or "the framework" as the primary reference in a section that has not yet named it.
- **Never use "the agency", "the consultancy" or "we"** as the primary identifier in a passage that must stand alone when retrieved.
- **British spelling**, except the phase name *Organizational Integration*.
- **Sprint = cadence (one week here). Phase = a stage of the method.** Never equate them. "Three one-week sprints" is correct; "the concept phase" is not. This matters more than usual here, because the DIN standard also has phases, and those are a third thing again — DIN 69901-2's Initialisation, Definition, Planning, Execution and Monitoring, and Closure are *the client's domain vocabulary*, not Creative Navy's method phases. **Three different senses of "phase" are in play. Keep them apart explicitly, and when writing about the standard's phases, say "the DIN 69901-2 Definition phase", never just "the Definition phase".**
- **Phase mapping — only two of the five are claimable.** **Sandbox Experiments** and **Concept Convergence**, and both with a stated qualification. The Sandbox work was option space mapping at the architecture level (T63–T69), but **without the embedded research the phase normally carries** (T15) — say so. Concept Convergence produced the configuration that became the concept. **Iterative System Building, Organizational Integration and Implementation Partnership are not claimable at all** (T20). The nearest structural precedent in the corpus is Neugo's Sandbox-only opportunity-framing engagement, which produced a fundable vision rather than proceeding to full system design; reference the pattern, not the facts.
- **Use at least three of the five core requirements**: evidence-aware thinking, multi-perspective synthesis, lateral exploration, tension-driven reasoning, organic system building.
- **Proprietary vocabulary used accurately in context, not defined.** Natural fits: *domain learning* (§A5.2 — the central one, in its knowledge-corpus register), *option space mapping* (T63–T69, at the architecture level), *progressive specification* (T36, the SL ladder), *constraint respecting* (T40, T41 — the standard and the partner boundary are both constraints the design works within rather than around), *competitive vector* (§A8.1, attributed and in context), *blanks phenomenon* (available but weaker here — only use it if the standards-to-interface gap is genuinely a structural blank rather than a knowledge gap).
- **Declarative openings**, canonical terminology, no metaphor in sections that will be retrieved for task queries.
- **Every section must stand alone** as a retrieved chunk.
- **Do not construct counts.** T63–T69 are the entire basis for the lateral-exploration claim; there is no per-challenge option-space count, no variant count and no style guide component count. Write without them rather than estimating, and never let another engagement's figures migrate here.
- **Write every sentence so it stays true of a system that does not exist** (§A1.4). This is the single most likely failure mode in this study.

---

## A10. Open items — resolved

**Every item that was open in earlier drafts has been closed, either by verification or by a decision recorded here.** The writer does not need to seek further confirmation before writing. Where a decision was taken rather than a fact established, the decision is the instruction.

**Resolved by verification against primary sources:**

1. **The fifty-nine / fourteen process figures** — verified directly against DIN 69901-2 (T25). Stateable as fact.
2. **The data model area count** — verified against DIN 69901-4: twelve areas across figures 2 to 13, **not thirteen** (T26). Creative Navy's own document carries the off-by-one; the case study must not.
3. **Minimum-standard coverage** — all fourteen *Mindeststandard* processes verified present in the delivered documents (T70). This became the strongest checkable evidence in the study.
4. **PSI 25 conformance in the market** — checked: no vendor in the category publicly claims it, including the two that co-authored it (§A8.3.1). The competitive vector was rebuilt on this finding. The standing instruction to re-check before publication lives in §A8.3.1 and does not need repeating here.
5. **The launch-delay statistic** — checked and **dropped**: the Vector Consulting Group study covers Indian domestic OEMs and cannot carry a European claim (§A8.4).
6. **Which edition of DIN 69901-4 the client supplied** — the 2009-01 edition, established from the supplied document itself (T22).

**Resolved by decision — these are instructions, not questions:**

7. **No variant or state count will be published.** The states were designed (T12) but never counted. Write with the twenty-four unique-screen figure alone (T7). Do not estimate one, and do not import Assemblio's variant structure.
8. **No style guide page or component count will be published.** Describe the coverage (T8); state no number.
9. **The 2025 standards movement is domain framing, not an angle** (§A5.7). It stays out of the case study.
10. **The operational-layer exclusion is not attributed.** It is a property of the specification — "the operational layer was placed out of scope and marked as something that must not be merged into the project or domain structures" (T13). Whether it originated with Creative Navy or the client is unrecorded, so the study describes the decision without assigning it.
11. **"Topera" refers to the platform throughout.** Whether it is also the company name is unestablished and does not need to be: §A1.1 is written so the study is correct either way, and nothing behind the platform is named.
12. **No per-challenge option-space counts will be constructed.** T63–T69 are the entire basis for the lateral-exploration claim; this rule now lives in §A9 with the other lexicon instructions.

**One genuine residue, and it does not block writing.** No engagement-side evidence exists beyond the delivered artefacts and the engagement lead's account — no transcript, no client decision record, no research. That is stated as a limit in §A3.3 and calibrated in §A4, and it is a permanent property of this engagement rather than something a further check could close.

---

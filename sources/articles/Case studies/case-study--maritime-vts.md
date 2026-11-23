# Maritime VTS and portfolio design system — full writing brief

> **Purpose.** Everything needed to write this case study and to update the existing content corpus from it. Written to be handed to a writer with no access to the source material or the conversations that produced it.
>
> **§A3 is a numbered evidence bank.** Every instruction in this document cites it by number, and the same **W-numbers** are to be used in the corpus integration document. **Do not introduce facts about this engagement that are not in §A3.**
>
> **Corpus integration.** Everything that changes on other pages because of this engagement belongs in a corpus integration document. **Part B of this file is a specification of what that document must be given**, not a substitute for it. The two share the evidence bank verbatim.
>
> **Companion documents:** `industrial-writing-brief.md` (industrial process control, prefix **E**), `streetec-writing-brief.md` (**S**), `ait-writing-brief.md` (**A**), `mdu-writing-brief.md` (**M**), `assemblio-writing-brief.md` (**N**), `topera-writing-brief.md` (**T**), `egma-writing-brief.md` (**G**), `oceaneering-dispatch-panel-writing-brief-FINAL.md` (**O**), `visioncheckout-writing-brief.md` (**V**), `kispe-writing-brief.md` (**K**), `schone-mission-control-writing-brief.md` (**D**), `raymarine-writing-brief.md` (**R**). This engagement uses prefix **W**, for waterway. **C was rejected**: the source set already uses C01–C08 for comparative observation events, C01–C07 for gate release conditions and C01–C06 for communications components, and the collision would be unreadable. Never let facts migrate between engagements: they are different clients, industries and evidence classes.
>
> **This is the corpus's fifth marine engagement, and the first whose primary context is not marine.** It files under `/evidence/case-studies/marine`, which exists, with primary context `/contexts/expert-tools-and-internal-systems`, which also exists. See §A6.4 for why the sector page lost, and §A6.1 for the one dependency that survives that choice.
>
> **Read §A4 before writing a sentence.** This is, on the evidence, **the best-evidenced engagement in the corpus**: field research in operational control rooms, eight end-customer operators, a counterbalanced paired comparison against the real legacy product with participant-level data published, a design system that reached production, and a return engagement. Every one of those is also the easiest thing in the set to overstate by one word. §A4 is where the ceilings are.
>
> **One cadence warning, up front.** This would be the **fourth consecutive** corpus engagement whose source material is saturated with the construction *X is not Y* — acknowledged is not resolved, a track is not a vessel, replay is not live, selected is not transmitting, unavailable is not unknown. KISPE and Schone own that cadence; the Raymarine brief already constrains it. **§A9 constrains it harder here, and the constraint is not optional.** This study's own form is given in §A7 and it is a different one.

---

# PART A — THE CASE STUDY

## A1. Handling rules

### A1.1 What may be named

**The client may not be named, and the name in the source documents is already a placeholder.** The placeholder company name used in the source documents is not the client's name. It must not appear in the case study, in any note file, or in the corpus integration document.

**The locked client descriptor is:**

```
a European vendor of maritime traffic monitoring, inland navigation and communications
software for port authorities, coastal administrations and waterway operators
```

Use it near-identically on every mention, per the entity-consistency rule. Do not rotate it. Do not substitute "the client", "the vendor" or "the company" as the primary identifier in a passage that must stand alone when retrieved. A shortened form — *"the maritime software vendor"* — is permitted only as a second or third reference **inside a passage that has already carried the locked descriptor**.

**Four product families may be named: VTS, RIS, VCS and ICS.** These are standard sector terms, not product names, and they carry the entire domain authority of the study. Spell each out on first use in any self-contained section — Vessel Traffic Services, River Information Services, Voice Communication System, Integrated Communication System — then use the abbreviation within that section.

**The six RIS modules must be described generically and never listed as an inventory.** The combination of nine named modules in one portfolio is close to a fingerprint and identifies the client in a single search.

| Do not use | Use instead |
|---|---|
| The client's name, in any form | the locked descriptor in §A1.1 |
| The six RIS module names and abbreviations as a list | "inland vessel tracking", "notices to skippers", "lock planning", "electronic reporting", "a European vessel registry interface", "inland chart management" — and never more than two or three in one passage |
| "nine products" alongside the module names | "nine products across four families" is permitted; the enumerated inventory is not |
| The customer country or any customer organisation | "a customer's operational VTS control rooms" — see §A1.5 |
| Named individuals on either side | role descriptors only — "the VTS product owner", "the frontend architecture lead", "Creative Navy's researcher" |
| Participant identifiers (VT01–VT11, CR01, ST01–ST06, CN01, CN02) | cohort descriptors only — "a VTS operator", "a shift supervisor", "the communications engineering lead" |
| Any document reference (P1.1, P2.07, CN / MSE / …) | omit entirely |
| Any internal code (UX-VTS-nn, VTS-Rnn, Dnn, ALTnn, F01–F13, C01–C08, Snn, Jn, S01–S18, K01–K08, X01–X05, AR01–AR08, CP01–CP08) | write the behaviour in prose; **a reader must never encounter a code** |

> **One flag for the engagement lead, not for the writer.** Naming VTS, RIS, VCS and ICS together, plus "nine products across four families" and "naval customers", narrows the European field to a small number of vendors. The decision is taken and the brief is written to it. **If the intention is a genuine screen rather than a courtesy, the thing to drop is ICS and the naval reference**, which contribute least to the argument and most to identification. Raise once; then write to whatever is decided and do not reopen it in the copy or in a footnote.

**There are no quotes and no reported speech.** No client, participant or operator speech is on record anywhere in the source set; every document paraphrases and says so (W94). **Write no quotation marks anywhere in this case study, and no reported speech either.** Where a client position is described, attribute it to the role and the artefact it came from — "the client's request for proposal asked for a common treatment of navigation, tables and alarms", "the communications engineering lead challenged the reuse of a general toggle" — never to a speaker and never as something said.

### A1.2 What may not be shown

**No screenshots, wireframes, design images, plates or redrawn diagrams.** The corpus is text-only on documentation pages. The source material contains schematic workstation reconstructions, concept comparison figures and annotated interface states; **none may be published in any form, including as redrawn diagrams or ASCII approximations.** Describe the designs in prose.

### A1.3 Dates

**No dates at all, from any source.** No years, no months, no seasons. Sequence and duration only — "a three-sprint discovery", "fourteen further one-week sprints", "a return engagement roughly a year later".

The source set is unusually clean here: P2.15 states in its own closing control line that it carries **no calendar dates in the project chronology**. Only the Phase 2 week numbers appear, and those are durations, not dates. **Durations and sequence are permitted and load-bearing.**

**Regulatory and standards dates are exempt**, per the standing corpus rule — they locate the instrument, not the engagement. §A8 uses them.

### A1.4 Status

**Four status facts, and the order matters because each constrains the next.**

1. **The design system reached production** (W95). The client implemented it. That may be stated plainly.
2. **Implementation Partnership happened, in a specific and recorded shape: the client wrote the code and Creative Navy supplied its standard implementation support** (W96). The phase is claimable and its *shape* may be described. **Its weight may not.** No duration, no form, no frequency, no meeting count, no ticket count. **Do not borrow AIT's five months, three progress reviews and eight support tickets, and do not borrow Schone's seven months, fifty-four screens and four closed gates.** Those belong to other engagements. See §A10 item 1.
3. **The client returned roughly a year later for a separate product spun out of the programme** (W97). This may be stated as a return engagement. **Nothing about the spinoff's domain, scope, shape or outcome may be written** until §A10 item 2 is answered.
4. **No design-fidelity comparison is recorded** (W98). Creative Navy did not compare the implemented interface against the delivered designs. **This must never be written as "it shipped as designed."** That is AIT's claim and it rests on an explicit comparison. Here the accurate statement is that the design system was implemented and the product went into production, and the sentence stops there. See §A10 item 3.

**Three things must not be attached to any of the four.**

- **No commercial claim.** Tender performance, sales, attach rate, demonstration quality and procurement outcomes were named by the client as objectives and were never measured. The commercial director's own position was recorded as *no reliable measurement connects visual change to tender wins* (W20).
- **No engineering-efficiency claim.** Reduced duplicated interface development was the client's stated business case; the measurement framework for it was designed and handed over, and no result was ever reported back (W91).
- **No safety, certification, regulatory or operational-performance claim.** See §A4 in full.

### A1.5 The research location

**The operational control rooms where field observation took place must not be located.** The country is known to the engagement lead and is deliberately excluded here. A named country plus "VTS control rooms" identifies the customer organisation from a list of a handful, and through it the vendor — which is the same risk that removed the RIS module inventory in §A1.1.

**Write it as:** "operational VTS control rooms at a customer site", or "a customer's operational control rooms". The *fact* that observation happened in live control rooms rather than in a demonstration environment is the load-bearing part, and it survives the anonymisation completely. See §A10 item 4 — this is reversible on the lead's word.

---

## A2. The engagement in brief

A European vendor of maritime traffic monitoring, inland navigation and communications software for port authorities, coastal administrations and waterway operators had built nine products across four families over many years, in separate engineering teams, with the interfaces designed by the software engineers who built them. Similar functions worked differently in different products. The vendor increasingly sold the products together, and in demonstrations they did not look as though they belonged to each other.

The client's request for proposal asked for a common visual and interaction approach across the portfolio: a shared treatment of navigation, menus, tables, data entry, search, panels, dialogues, equipment status, messages and alarms, delivered as a reusable design system, with existing functionality preserved and changes introduced gradually (W1–W5).

Creative Navy worked across **seventeen one-week sprints in two blocks separated by a formal management gate**: **three discovery sprints**, then a gate, then **fourteen delivery sprints** (W6). A five-person team ran it: UX designer, UI designer, project manager, product designer and researcher (W7).

Discovery audited all nine products — 74 interface views, 23 representative workflows, 58 prioritised findings, 31 candidate interaction patterns, six stakeholder interviews and four operator sessions (W8–W14). It produced a recommendation the client had not asked for: do not restyle nine products. Build one of them properly, extract a system from it, and prove the system transfers by trying to break it in four others (W27).

The gate approved that on seven named conditions, after six recorded objections, and selected Vessel Traffic Services as the reference product on a weighted score of 90 out of 100 against four alternatives (W28–W33).

Fourteen sprints then built VTS out completely — eight research sessions with the client's end customers' operators, seven operator journeys, 36 consolidated interface issues, 28 traceable requirements, 14 approved decisions against 18 explicitly rejected alternatives, 28 composition templates and 91 materially distinct interface states — while extracting a design system in parallel: 54 components, 198 named states, eight composition patterns, two themes and two density profiles (W34–W69). The system was then transfer-tested in four other products across 70 proposed component applications, of which 45 were adopted directly, 15 required documented extension and **10 were explicitly refused** (W70–W76). A client engineer independently assembled a working view from the documentation alone (W77–W80). Two usability rounds were run, the second a counterbalanced paired comparison against the real legacy product (W81–W90).

**The requirement that shapes everything: the client asked for consistency, and consistency was the hazard.** In a VTS traffic picture, a selected radar track and an identified vessel are different claims about the world. In a radio console, a selected resource and a keyed transmitter are different acts. A control that looks the same in both places tells an operator the same thing in two situations where the truth is different — and the client's own engineers said so, at the gate, before any screen was drawn.

### A2.1 The territory this study owns

**Write this study for what only it can prove.** Five things here exist nowhere else in the corpus.

1. **A design system whose most valuable output is its refusals.** Five pattern families were declared permanently non-shareable at discovery, before any component existed. Ten proposed component applications were explicitly rejected at transfer. Each refusal is recorded with the reason, the reviewer and the authority that made the pattern non-transferable. **No other engagement in the corpus holds a reuse-refusal ledger.** KISPE has 103 components, Schone 28 families and 119 variants, Raymarine an eighteen-component contract — all inventories of what exists. This is an inventory of what was declined, and it is the study's spine.
2. **A six-gate reuse test, applied to 70 cases and published with its failure rates.** Task, meaning, authority, input, failure, recovery — all six must pass for direct reuse. It is the most operationalised instance of *constraint respecting* anywhere in the corpus, it is transferable to any reader with a design system, and its results differ by product in a way that proves it is doing work: 75% direct reuse in electronic reporting, **40% in radio communications**.
3. **A counterbalanced paired comparison against the real legacy product, published at participant level.** Eight end-customer operators, four matched tasks in both interfaces, order alternated, individual times and correctness flags printed, medians reproducible from the raw arrays, and an eight-item threats-to-validity table written by the agency about its own study. Gexcon's numbers are client-measured in deployment; Raymarine's compare design options against each other. **This compares the new design against the system it replaces, and shows its working.**
4. **A demonstration, rather than an assertion, of capability transfer.** A client engineer who had not been part of the design team built a working validation-and-correction view in the client's own frontend sandbox using twelve documented patterns and two domain adaptations, with no additional screen specification from Creative Navy. The corpus claims organisational independence repeatedly; this is the one engagement that tested it.
5. **A real audit deliverable, across nine products.** KISPE, Schone and Raymarine all fail `/capabilities/ux-audit-for-complex-products` because no audit was scoped. This engagement has a prioritised nine-product audit with a published per-product finding distribution and a four-level triage. **It is that page's anchor.**

**And one thing the study must own by form.** The engagement is a sequence of boundaries — what was made identical, what was adapted, what was refused, and what each refusal cost. §A7 turns that into the structural instruction, and it is the single strongest guard against this reading like the three high-consequence studies that precede it.

---

## A3. Evidence bank

### A3.1 The client's starting position

- **W1** — **Nine products across four families.** Vessel Traffic Services (VTS): shore-based maritime surveillance and traffic management with geographic traffic displays, AIS and radar tracks, vessel information, sensor data, alarms, events, incident support and operational recording and replay. River Information Services (RIS): six modules covering inland vessel tracking, notices to skippers, a European vessel registry interface, lock planning, electronic reporting and inland chart management. Voice Communication System (VCS): a VoIP radio and telephone platform with channel and resource selection, calls, conferences, monitoring and recording, some installations using dedicated operator consoles, headsets and physical push-to-talk controls. Integrated Communication System (ICS): shipboard communications with internal calls, group communication, radio access and broadcast, built for naval installation constraints. *(Per §A1.1, the six RIS modules are never listed as an inventory.)*
- **W2** — **The interfaces had been designed by the software engineers who built them**, in separate teams, extended per customer contract and tender requirement over many years. The client had made individual improvements and had never commissioned a UX programme across the portfolio.
- **W3** — **The client's three stated commercial problems**: in demonstrations the interfaces did not communicate that the applications belonged to one family, even where the underlying systems exchanged information; competing suppliers were presenting more coherent software during tender evaluation; and engineering teams were rebuilding interface elements for each product and each customer project, producing repeated work, inconsistent behaviour and maintenance cost.
- **W4** — **Five stated business objectives**: improve tender performance; increase sales of integrated solutions; reduce duplicated interface engineering; reduce training and support effort; and establish a common interface reference for future products.
- **W5** — **What the brief asked for, in its own terms**: a common treatment of navigation, menus, tables, data entry, search, panels, dialogues, equipment status, messages and alarms; a consistent way of presenting vessel details across applications; interfaces that remained appropriate for professional operators rather than adopting a consumer appearance; preserved functionality, with features removable only by technical and customer approval; phased introduction into future versions; and both light and dark options for day and night shift operation. It stated that the client's own teams would supply the technical and maritime domain knowledge, and that the agency was wanted for expertise in organising and presenting existing functionality.
- **W6** — **The client had not decided** whether the answer was a common application shell or several distinct products sharing interface components, and said so. It also required that whatever was proposed had to work for customers who bought only one product.

### A3.2 Engagement record — stateable as fact

- **W7** — **Seventeen one-week sprints in two blocks separated by a formal management gate: three discovery sprints, then fourteen delivery sprints.** Approval time between the two blocks sits outside the working duration.
- **W8** — **Five-person team**: UX designer, UI designer, project manager, product designer, researcher. The specialist roles named in the engagement's own documents — engagement lead and UX architect, senior product designer, design system specialist, UX researcher, technical design reviewer — were held by those five people.
- **W9** — **Reference workstation throughout**: two 27-inch displays at 2560 × 1440 pixels each, keyboard and mouse. A third display was treated as a supervisor variant and was not counted as a standard research configuration. The radio console reviewed separately was a dedicated 1920 × 1080 operator terminal with headset and external push-to-talk.
- **W10** — **Deployment constraints confirmed by the client's engineering**: restricted-network and disconnected deployments are normal, so no critical interface behaviour may depend on external web services; the portfolio spans browser applications and dedicated terminals, so a common frontend framework cannot be assumed; screen sizes, input equipment, languages, permissions and local configurations vary by customer.

### A3.3 Discovery — the three-sprint portfolio audit

- **W11** — **All nine products inspected**: 74 captured interface views or meaningful states, 23 representative workflows, 58 distinct findings. Effort was weighted towards operationally consequential interfaces rather than spread evenly.
- **W12** — **Finding distribution by product**: VTS 19, VCS 9, inland vessel tracking 7, lock planning 5, electronic reporting 5, notices 4, registry interface 3, chart management 3, ICS 3. Each finding carries one primary product assignment; cross-product relevance is tagged, not double-counted.
- **W13** — **Severity triage**: 6 flagged for safety-domain review, 16 high, 25 medium, 11 low.
- **W14** — **Ten research sessions**: six stakeholder interviews covering product strategy, VTS, communications, RIS, frontend architecture and commercial priorities; four operator sessions covering VTS and radio communications. **Two of the four included supervised workstation observation.**
- **W15** — **Thirty-one candidate interaction patterns**, classified into three groups: **18 potentially common** (navigation landmarks, structured search, filters and saved views, data table behaviour, selection continuity, identity and metadata grouping, time and provenance labels, non-critical status labels, task feedback, validation and correction, draft and edit lifecycle, permissions and restriction, standard confirmation, keyboard and focus, empty/pending/unavailable, event and audit rows, panel and workspace primitives, typography and density); **8 conditional**, requiring product-specific contracts (map object selection, vessel investigation composite, source freshness and lineage, incident activity context, historical replay mode, chart coverage and revision, resource queue and planning, communication resource status); and **5 that must remain permanently separate** — radio transmit and physical push-to-talk, lock gate actuation, navigation alert authority, standards-bound chart portrayal, and shipboard terminal controls.
- **W16** — **The classification rule, stated at discovery and never relaxed**: reuse a component when task intent, state transition, user authority and consequences of misuse align. Similar colour or geometry is not sufficient.
- **W17** — **Ten cross-product finding clusters** recurred across the portfolio: context occlusion during inspection; conflated vessel identity and observation provenance; overloaded alert meaning; insufficiently prominent data freshness and source; replay insufficiently distinguished from live; radio transmit controls resembling generic toggles; inconsistent reporting transaction lifecycle; lock queue changes lacking visible rationale; divergent vessel lookup conventions across products; and conflation of unavailable, busy, unauthorised and disabled states.
- **W18** — **Six issues were flagged for safety-domain review**: floating inspectors obscuring targets at dense zoom; insufficient distinction between AIS identification and radar association; insufficient differentiation of replay from live traffic; last sensor observation time hidden from immediate inspection; selected radio resource insufficiently distinct from active transmit route; and the mapping of hardware push-to-talk state to on-screen transmit status. **The flag denotes a need for domain scrutiny. It does not establish that an accident, near miss, regulatory breach or technical hazard occurred, and no document in the set claims one did.**
- **W19** — **The illustrative finding that carries the whole argument**: in a general application a selected state communicates preference or focus. In the radio system, an active transmission route additionally carries equipment state, receive activity, hardware push-to-talk control and potentially time-critical consequence. The two cannot share one generic toggle behaviour.
- **W20** — **Stakeholder evidence that bounded the commercial claim.** The commercial director established that interface quality affected the perceived maturity of the integrated offer and that differing conventions created extra explanation during demonstrations — **and that no reliable measurement connected visual change to tender wins.** Recorded as a strategic target, not a validated outcome.
- **W21** — **Stakeholder evidence that bounded the technical claim.** The frontend architecture lead established that the portfolio spans browser products and dedicated communication terminals, that a single code component library could not be assumed to run unchanged in each, and that component documentation must therefore include states, transitions and failure treatment rather than spacing and colour alone.
- **W22** — **Six recorded disagreements, resolved rather than averaged.** How alike should the interfaces look; how many controls should stay visible; can a radio action reuse a standard button; should the map occupy the whole canvas; should one frontend library serve every application; can user access be deferred until development. The resolution principle was recorded: separate intent from implementation, and where a product-specific safety or hardware constraint conflicts with a visual preference, **the specialised behaviour is retained**.

### A3.4 The gate

- **W23** — **The gate was a condition of the engagement from the proposal onwards**, chaired by the programme sponsor with the product, engineering and commercial owners present, and Creative Navy presenting. Three decision options were defined in advance: proceed, revise the reference product or scope, or stop and retain the discovery package as a self-contained strategic deliverable.
- **W24** — **The reference product was selected on five weighted criteria**: commercial significance 25%, system transfer value 25%, access to representative users 20%, high-consequence UX learning 15%, implementation feasibility 15%.
- **W25** — **Five candidates scored out of 100**: VTS 90, inland vessel tracking 77, voice communications 71, electronic reporting 67, lock planning 63. VTS won because it combines geographic surveillance, uncertain sensor observations, differentiated alerts, event history, incident state, equipment health and shift handover in one environment. Voice communications scored highly on consequence and lost on portability, because its hardware-coupled control semantics limit general reuse.
- **W26** — **Six objections were recorded and dispositioned rather than resolved offline**: whether one redesigned application would be persuasive in multi-product tenders; whether a design file would translate into multiple frontend stacks; whether ordinary toggles could carry radio transmission and resource selection; the risk of changing familiar controls without operator validation; financial protection against expansion into nine full redesigns; and how the administrative and planning applications would be represented.
- **W27** — **The recommendation the client had not asked for.** Discovery replaced "a common modern interface across nine products" with: one application developed to full depth as a reference, a technology-neutral semantic design system built in parallel, bounded transfer tests in four other products, and implementation contracts and governance handed to the client's engineers. The stated reason: a cosmetic refresh could make a mixed alert region visually quieter while preserving the same interpretation risk, and a broadly reusable status component could conceal whether a radio resource is unselected, unavailable or configured for transmission.
- **W28** — **Approval was conditional, with seven conditions each carrying a named client owner and a verification method**: access to representative operators including eight requirements sessions and controlled prototype study access; sanitised scenario data with active radio and traffic actuation prohibited through prototypes; final authority for safety-relevant state semantics retained by client product and engineering leads; radio transmission and physical push-to-talk excluded from the reference scope; transfer exercises limited to four named products with the rest receiving applicability assessment only; client ownership of frontend technology, code parity, integration, security verification and release assurance; and commercial release recorded in a separate schedule. **A written release followed the conditional approval and authorised mobilisation.**
- **W29** — **What the gate explicitly did not approve**: a production rollout, a new backend architecture, or any blanket claim of regulatory compliance.

### A3.5 Phase 2 research

- **W30** — **Eight moderated requirements sessions** with operators and supervisors. **The participants were the client's end customers' operators — professional VTS operators and shift supervisors — not vendor staff in operator roles.** Two had taken part in discovery; six were new to the programme.
- **W31** — **Field observation took place in operational VTS control rooms at a customer site**, not only in a demonstration environment. *(Location withheld — §A1.5.)*
- **W32** — **Research material was sanitised throughout.** Anonymised geographic areas, vessel labels, AIS and radar records, replay events and equipment states. No participant issued navigation instructions, controlled radio equipment or carried live traffic responsibility during the study.
- **W33** — **Seven operator journeys were modelled**: monitor traffic and maintain sector awareness; identify and inspect a vessel or track; triage and disposition an operational alert; coordinate and document an incident; review past traffic and replay safely; monitor source health and assess impact; and supervisor and shift handover. Each was decomposed into subtasks, decisions, visible states, permitted actions and recoverable interruptions, with normal, ambiguous and degraded conditions modelled separately.
- **W34** — **The consolidated issue register closed at 36 unique VTS issues**: 19 carried from discovery, 17 newly distinguished in Phase 2. Distribution: 4 safety-review candidates, 12 high, 14 medium, 6 low. **The 36 never grew.** Every later observation — 13 in the formative round, 8 in the comparative round — was mapped back to an existing entry, and the documents state the counting rule each time.
- **W35** — **Twenty-eight traceable interaction requirements** were derived, each linked to session evidence, an issue cluster and a decision.
- **W36** — **Ten use-error pathways** were analysed, grouping the 36 issues without adding to them, and **four were escalated as safety-domain review candidates**: obscured target and lost geographic context; uncertain vessel identity and sensor association; replay not unmistakably historical; and observation age hidden from first view.
- **W37** — **The risk analysis refused to produce numbers it could not support.** No risk priority number, no numerical hazard probability, no accident causality, no formal risk matrix, no risk acceptance. The method was a six-stage scenario chain: context, trigger, interpretation, consequence, interface control, assurance — with the named technical and safety owner recorded at the end of each.
- **W38** — **The research distinguished its own evidence classes and used them consistently across every document in the set**: direct permitted observation; participant account; engineering-confirmed constraint; product demonstration or source material; and design analysis. A perceived possibility was never recorded as an observed error.

### A3.6 The legacy interface — the "before"

- **W39** — **The audit's primary finding was not a missing function.** The required functions existed, in separate panels and views. What was not preserved across them was the evidence about a vessel, its source, the operator's action and the ongoing task.
- **W40** — **Four recurring failure modes** were named: context interruption, through floating panels, detached history and inconsistent window restoration; evidence ambiguity, through identity, radar association, observation age and source health being hidden or conflated; state ambiguity, through insufficiently distinct cues for navigation alerts, equipment faults, acknowledgement, resolution and replay; and work discontinuity, through incidents, open actions, permissions and handover being distributed across independent views.
- **W41** — **Context.** A movable vessel-details window could cover the cluster of targets the operator had opened it to investigate. An operator was observed repositioning the panel to reveal targets it had concealed. At dense zoom, labels and temporary content converged on the point of inspection. Layer filters could reset on return from an investigation, so an operator could read a changed traffic picture as the one previously configured. An active object reference could be lost after switching supporting layers, and the two displays could lose a shared active object.
- **W42** — **Identity.** Vessel identity fields were presented adjacent to correlated radar data without sufficiently distinguishing a reported identity from a system-determined association. Switching the active source changed marker portrayal without consistently retaining an explanation of which source was in use. Operators described cases in which an association needed to remain visibly unresolved and the interface offered no way to say so.
- **W43** — **Freshness.** Time of last observation sat behind secondary inspection. In a degraded state, a retained target could keep the same visual treatment as an updating one, so the display did not reliably tell the operator whether a marker represented a current observation or a last known position. An equipment view with no state data could read as an equipment view with no faults.
- **W44** — **Alerts.** Traffic conditions, equipment faults and advisory notices shared one notification surface. Ordering by receipt time was easily mistaken for operational priority. Acknowledgement, dismissal and resolution used overlapping wording, and an action history could carry visual weight comparable to the current lifecycle state.
- **W45** — **Incidents.** Links between alerts, incidents and track records were not consistently bidirectional. Moving from an alert to an incident could make the alert context hard to reconstruct; the incident timeline did not always show the current state and owner of its outstanding actions; note records did not consistently expose origin and entry time.
- **W46** — **Replay.** The historical view did not maintain a sufficiently prominent, persistent distinction from live operation. Some historical links moved within the recording while others returned towards live, without consistently different cues. Track history could open in a detached panel with weak recovery to the original investigation. Exported views could omit the temporal mode and active layer configuration.
- **W47** — **Handover.** Unresolved work was spread across incident, alert, source-health and workspace views, and an operator had to assemble an account of the active situation by cross-checking separate lists. Incident status could appear without the corresponding alert state. A saved workspace did not reliably restore the expected sector.
- **W48** — **Interaction mechanics were treated as system behaviours, not cosmetics.** Routine target selection relied on pointer routes; keyboard focus could disappear after a temporary inspection; hover and selection both highlighted dense targets; some actions disclosed an authorisation problem only after the user had initiated them.

### A3.7 The decisions, and what was rejected

- **W49** — **Fourteen approved decisions against eighteen explicitly rejected alternatives.** Every consequential decision in the engagement has a named alternative on the record, with the reason it lost.
- **W50** — **Traffic picture over dashboard.** A summary dashboard landing view was built and rejected: it was attractive for commercial presentations because it exposed many functions at once, and it moved the active traffic picture into a secondary container, forcing operators to reacquire sector, object and layer context after every inspection. **Rejected because it was better for demonstrations and worse for work.** A map-as-bounded-card variant was rejected with it.
- **W51** — **The dockable inspector, chosen over two alternatives that each had a real advantage.** An unrestricted floating inspector preserved maximum map width when closed and could obscure the selected symbol in dense traffic. A permanently open side panel removed arbitrary occlusion and consumed map width even with no investigation active. The selected contextual dock opens on a predictable edge, follows the selected evidence reference rather than a screen coordinate, collapses without clearing selection, and can move to a permitted secondary display. **The always-open panel was retained as a documented installation option, not deleted.**
- **W52** — **Vessel, track and observation as three separate objects.** A single resolved vessel record was rejected for obscuring what the system actually knew. The selected model keeps a vessel identity record, a tracked object with an association status, and timestamped observations each carrying their own source — with association expressed as resolved, unresolved, changed or unknown.
- **W53** — **The refused confidence score, and this is the single strongest unit in the engagement.** A numeric association-confidence badge was explored. It was attractive because it would compress uncertainty into one familiar control. **The client's engineering could not supply a calibrated, operationally defensible confidence figure, so the interface was not permitted to display one.** The design states the association unresolved instead. The rule entered the specification: the interface does not synthesise an association confidence score, a source time or an authorisation decision, and missing values appear as unknown or not available.
- **W54** — **Typed alerts over a unified queue.** A single chronological notification queue was rejected for mixing navigation alerts with technical faults; a filtered single list was rejected because the current filter could hide a class of important event and a count alone could not explain technical degradation during a traffic task. The selected model presents navigation alerts by operational priority and lifecycle, with equipment health in its own typed view carrying an impact explanation, both cross-linked from a common event history.
- **W55** — **Four operator actions given four meanings.** Acknowledge registers receipt by an authorised actor. Assign makes a named person or role accountable, and may occur after acknowledgement. Resolve requires a governed resolution state with an attributable actor. Dismiss, where supported, hides a view item and changes nothing underneath. A single multifunction control whose meaning changed with the selected item was rejected. Transitions expose pending, succeeded and failed states from service acknowledgement rather than optimistic confirmation.
- **W56** — **Replay as a persistent workspace mode.** A historical overlay on a live-styled map was rejected because links from events to tracks created ambiguity between seeking within a recording and returning to live. A detached replay window was rejected because it broke context with selected vessels, incidents and source health. The selected model marks the entire relevant workspace as historical, with recording time, coverage and gaps shown, linked inspectors inheriting the same time context, and Return to Live as a deliberate action.
- **W57** — **The incident case as a timeline of attributable events.** Freeform notes were rejected for losing the relationship between statements and their evidence; a mandatory wizard was rejected for enforcing linear progression through interrupted monitoring work. The selected model stores typed, attributable events and notes with author and object references, action items with owner and state, and authorised communication records as references rather than generated transmissions.
- **W58** — **Handover as an accountable review, not a digest.** A chronological activity list was rejected for not distinguishing open from resolved work. **Automatic ownership reassignment was rejected for assuming a successful transfer of responsibility without an explicit review point.** The selected model groups open alerts, source concerns and incident tasks with owner, latest attributable event and unresolved status, and requires the receiving operator to review and accept.
- **W59** — **Expert desktop over touch-first.** A gesture-first, large-tile universal interface was rejected: it demonstrated well in stakeholder meetings, increased travel, concealed shortcuts for the workstation actually in use, and implied that the same controls could transfer to specialised radio equipment without a separate contract. The selected model holds keyboard focus order, predictable shortcuts, pointer targets and paired-display selection as commitments, with selected object, sector, time mode and originating element managed as shared workspace context. **This is a deliberate refusal to simplify, on an expert tool, and §A5.4 is built on it.**
- **W60** — **Semantic tokens over independently designed themes.** A single fixed dark interface was rejected for not solving readability or low-contrast secondary status. Independently designed day and night palettes were rejected because a warning could shift visual priority when the theme changed. The selected model defines meaning first and maps it into both themes, with error, warning, unresolved, unavailable and selected states retaining text and shape cues. **No interface state relies on colour alone.**
- **W61** — **The authorised-registry boundary.** The product is an interface to authorised European vessel information, not the register itself. A design implying ownership of the central register was rejected as a misrepresentation of the relationship.
- **W62** — **Three multidisciplinary disagreements were resolved in review and recorded as such**: panel mobility against target visibility, where engineering preferred unrestricted floating panels that fitted the existing window architecture; one alert inbox against operational meaning, where the commercial view preferred a compact feed that demonstrated system breadth; and visual certainty against defensible provenance, where design pressure favoured one large vessel identifier and a numeric confidence label. **In all three the specialised behaviour won.**

### A3.8 The deliverable

- **W63** — **Twenty-eight composition templates and 91 materially distinct interface states** across the seven journeys. Distribution: monitoring 5 templates and 17 states; vessel identification 5 and 18; alert triage 4 and 14; incident coordination 4 and 13; replay 4 and 10; source health 3 and 11; handover 3 and 8.
- **W64** — **A state was defined before it was counted.** A material state represents a change in meaning, available action, source validity, ownership, mode or failure response. Theme, density and ordinary hover decoration are not multiplied into the inventory.
- **W65** — **Design system version 1.0: 54 components and 198 named states**, in four families — 26 general controls with 88 states, 12 operational components with 50, 10 geospatial with 39, and 6 communications with 21. Plus **eight composition patterns**, two themes and two density profiles. A named state is counted once regardless of theme, density, application or repeated instance.
- **W66** — **A four-layer architecture** separates primitive values from semantic intent, component behaviour and application composition: raw colours, spacing and type scale; then semantic tokens naming meaning rather than appearance; then component contracts with anatomy and valid states; then bounded product compositions. Applications consume semantic tokens and documented components; they do not redefine the meaning of a priority colour, overwrite a status label, or import radio transmission semantics through a generic action control.
- **W67** — **Each reusable contract carries a minimum specification**: purpose and eligibility including explicit non-use cases; information model with source of truth, identifiers, timestamps, unknown values and permissions; behaviour with triggers, transitions, keyboard focus, interruption and recovery; visual portrayal including accessible text, responsive density and night mode; and quality evidence with accepted scenarios, reviewer and remaining exceptions.
- **W68** — **Eight distinctions the component system is required to keep apart**: vessel and track; track and observation; associated and verified; event time and receipt time; traffic alert and equipment fault; acknowledge and resolve; live and replay; radio resource and transmission.
- **W69** — **Validation scenarios were defined as fixtures and described as such.** A dense traffic condition of 48 simulated targets with three traffic alerts, one equipment fault and two advisories; an identity condition of two nearby radar plots beside an AIS identification with unresolved association; a degraded condition interrupting a sensor feed while retaining the last valid observation; and a handover condition of seven open items — two unacknowledged alerts, one source concern and four incident notes.

### A3.9 Cross-product transfer — the refusal ledger

- **W70** — **Seventy component applications assessed across four products**, in the two sprints following detailed design: **45 adopted directly, 15 requiring documented extension, 10 explicitly refused.** 64.3% direct.
- **W71** — **The ledger by product**: inland vessel tracking, 18 assessed — 13 direct, 3 extensions, 2 refusals (72.2% direct). Electronic reporting, 20 assessed — 15, 4, 1 (75.0%). Lock planning, 17 assessed — 11, 4, 2 (64.7%). **Voice communications, 15 assessed — 6 direct, 4 extensions, 5 refusals (40.0%).**
- **W72** — **The six-gate reuse test.** Task: does the operator seek the same outcome as in the source contract? Meaning: do objects, statuses, timestamps and provenance retain equivalent meaning? Authority: is the actor permitted to trigger the same server-verified transition? Input: are keyboard, mouse, headset and physical control dependencies equivalent? Failure: will degraded, absent, contradictory or delayed data be interpreted safely? Recovery: can the user reverse, correct or reattempt with the same consequences? **All six must pass for direct reuse.** One failure produces a documented extension; a failure that would misstate authority or consequence produces a refusal.
- **W73** — **A refusal is recorded as a positive result.** The documents state it explicitly: an exception is a design finding, not a missing design asset.
- **W74** — **What each product taught.** Inland tracking: the map-anchored interaction shape transferred, and the truth conditions attached to an inland vessel record could not be imported unexamined — presenting an administrative waterway notice as a traffic alert would invert the type system, and treating an AIS association as an authoritative registration fact would inflate identity certainty. Electronic reporting: a rejected report and an unfinished draft are different states, and the shared status system had to say so rather than apply the alert lifecycle. Lock planning: queue actions retained scheduling semantics, and no interface element was permitted to read as a physical gate command. Voice communications: five refusals correctly prevented inherited behaviour from implying physical transmit authority.
- **W75** — **The disposition is per use, not per component.** One component family can be adopted directly in one product and refused in another. The same library component occurred in several probes.
- **W76** — **The counting rules were published alongside the counts.** The 70 applications are usage proposals, not components and not shipping software; they are not added to the 198 named states; and no estimate was made for untested screens. ICS and inland chart management received constraint and applicability reviews only and were not counted.

### A3.10 Engineering adoption

- **W77** — **A client engineer, not a member of the design team, built a working validation-and-correction view** for the electronic reporting product in the client's own frontend development sandbox, using **12 documented patterns and 2 domain adaptations**, with no additional screen specification from Creative Navy.
- **W78** — **Two joint design-and-engineering reviews** followed, checking state interpretation, focus behaviour and documented exceptions, and producing eight adoption observations. **Those eight did not enter the 36-issue register and did not change it.**
- **W79** — **What the exercise established**: an engineer outside the design team could select documented components and assemble a coherent flow unaided; the technology-neutral contracts supplied state, focus, content and recovery rules independently of the underlying component implementation; and the exercise revealed where the general library sufficed and where the reporting domain needed explicit authority and provenance adaptations.
- **W80** — **What it did not establish**, stated in the document: it was a capability demonstration, not completion of a product migration, not an independently certified accessibility result, and not a production engineering efficiency benchmark. It was non-production throughout.

### A3.11 Measured results

- **W81** — **First usability round: six operators, five tasks each, 30 task attempts, 13 observed issue events** — 2 high, 7 medium, 4 low. Outcomes were coded in three classes and not collapsed: 21 initial responses aligned, 6 self-corrected after a neutral clarification, 3 not aligned at task stop. **A self-correction was never merged into a success, because needing a clarification is itself the finding.**
- **W82** — **Twelve of the thirteen were corrected before the second round; one was retained with engineering**, because the design could display an unknown equipment state but could not guarantee that the service distinguishes missing data from confirmed health. **The single open item was not treated as closed by a visual fix.**
- **W83** — **Four changes came out of the first round**: unresolved association was promoted into the first inspector layer rather than a supporting view; alert state wording separated acknowledged, assigned and resolved; the replay indicator became persistent rather than sitting inside the time controls; and selected target, focus, ownership and handover context acquired specified restoration rules.
- **W84** — **Second round: a counterbalanced paired comparison against the real legacy product.** Eight end-customer operators and supervisors, four matched tasks in both the legacy training interface and the revised prototype, **four participants taking legacy first and four taking prototype first**, equivalent task data reset between conditions, same decision prompts and same stop rule. **64 condition-level observations**: 48 elapsed-time records across three timed tasks and 16 correctness records for the untimed one.
- **W85** — **Vessel identification**: legacy median first answer 61.5 seconds, prototype 35.5 seconds — **42.3% lower**. Correct first answers 6 of 8, then 8 of 8. All eight participants answered sooner on the prototype; individual improvements ranged from 23 to 30 seconds.
- **W86** — **Alert prioritisation**: legacy median 80.5 seconds, prototype 53.0 seconds — **34.2% lower**. Correct 6 of 8, then 8 of 8. All eight faster; improvements 22 to 29 seconds.
- **W87** — **Replay recognition, untimed**: correct initial mode identification 5 of 8 in the legacy condition, **8 of 8** in the prototype. Three participants misidentified the legacy state. The task was scored only for whether the participant recognised that the picture was historical.
- **W88** — **Handover retrieval**: legacy median 107.0 seconds, prototype 72.5 seconds — **32.2% lower**. Correct 6 of 8, then 8 of 8. All eight faster; improvements 28 to 39 seconds.
- **W89** — **Across the four tasks, correct first answers rose from 23 of 32 to 32 of 32.** The study published the full participant-by-condition correctness matrix and the raw paired time arrays, and reproduced each median arithmetically in the report.
- **W90** — **The study wrote its own eight-item threats-to-validity table**: small convenience sample; participant overlap, since six of the eight had prior programme exposure and only two were new; within-participant learning across conditions; a prototype-versus-training-system comparison that extends beyond individual components; sanitised fixed scenarios with fewer surprises than a sustained watch; first-response measurement, under which a fast wrong answer remains possible; a four-of-seven task subset; and no live system connection or formal hazard testing. **It also stated what it refused to do**: no preregistered inferential analysis, no power calculation, no significance tests, no confidence intervals, and an explicit instruction not to aggregate the three timed percentages into a single combined figure, because the scenarios have different baselines and decision demands.
- **W91** — **A measurement framework was specified and handed over, and never reported back on.** Six dimensions with baseline approaches and post-adoption measures: operator efficiency, operator safety and errors, implementation efficiency, system adoption, training and support, and commercial effectiveness — each with required units, denominators and explicit reporting restrictions. **No result from it exists in the source set.**
- **W92** — **Final issue reconciliation**: of the 36 unique issues, **30 were mitigated in the design specifications, 4 assigned to engineering follow-up and 2 deferred by client decision.** The documents define the status language: mitigated means addressed in design specifications and evaluated where in scope, and does not mean implemented in every product, proven in production, certified, or cleared from formal safety review. **The four safety-review candidates remained open to the client's safety authority regardless of how well they tested.**

### A3.12 Status

- **W93** — **The engagement ran to its full fourteen delivery sprints** and closed with an accepted design baseline, a versioned component library, interaction contracts, an exception register, governance rules and a handover briefing.
- **W94** — **No quotes of any kind exist.** Every document in the set paraphrases and states that it does. Operator accounts are recorded as coded note groups, not transcripts.
- **W95** — **The design system reached production.** The client implemented it.
- **W96** — **Implementation Partnership happened, with the client writing the code and Creative Navy supplying its standard implementation support.** The shape is known; **the weight is not recorded** — no duration, no form, no frequency.
- **W97** — **The client returned roughly a year later** to work on a separate product spun out of the programme.
- **W98** — **No design-fidelity comparison is recorded.** Creative Navy did not compare the implemented interface against the delivered designs.

### A3.13 What did not happen — must be stated, not omitted

- **W99** — **No competitive benchmarking.** The client's brief named competitors as a commercial driver; no competing product was evaluated in this engagement.
- **W100** — **No live operation of anything.** No radio was keyed. No transmitter was actuated. No lock gate or controller was commanded. No live harbour traffic was controlled. No external reporting authority accepted a submission. No live vessel identifiers, customer incidents, radio recordings or operational data were used.
- **W101** — **Five of the nine products were never designed**, and four of those five received only a bounded transfer probe. The shipboard communications product and the inland chart management product received constraint and applicability reviews only.
- **W102** — **Three of the seven journeys were never independently validated.** The comparative study covered four. Traffic monitoring, incident coordination and equipment health remain in the delivered templates and states with their contracts unvalidated by that round.
- **W103** — **No certification, conformity or compliance credential of any kind.** The engagement did not certify maritime equipment, establish a system hazard log, quantify operational incidents, verify sensor correlation, validate radar or AIS accuracy, approve alarm thresholds, or replace product-specific regulatory interpretation.
- **W104** — **No commercial outcome, no engineering-efficiency outcome, no training outcome.** All three were client objectives; none was measured.

---

## A4. Evidence calibration — mandatory

The repository's evidence standards require every claim to be attributed to its basis. This engagement's evidence is unusually strong, which makes the ceilings unusually important.

### The comparative study is the strongest measured result in the corpus, and the easiest to break

**What may be said.** In a counterbalanced paired study with eight professional VTS operators and supervisors, each completing four matched tasks in both the existing interface and the redesigned prototype, median time to first answer fell by 42.3% on vessel identification, 34.2% on alert prioritisation and 32.2% on handover retrieval; correct first answers rose from 23 of 32 to 32 of 32; and correct recognition of historical replay rose from 5 of 8 to 8 of 8.

**What must travel with it, every time, without exception.**

> This result is Creative Navy-measured under controlled conditions. Eight participants completed four of the seven operator journeys using sanitised training scenarios on a design prototype, not a production installation. Six of the eight had taken part in earlier research or testing. The time measure is time to a first submitted answer regardless of whether that answer was correct, not time to successful completion. The study reports no significance test, no confidence interval and no power calculation, and states that the three percentages must not be combined into one figure.

**Five specific prohibitions.**

- **Never average the three percentages, and never write a combined headline number.** The study forbids it in its own text, because the three scenarios have different baselines, decision demands and outcome semantics. A writer who produces "roughly 36% faster" has contradicted the source.
- **Never write "eliminated operator error" or any equivalent.** 32 of 32 comes from scripted tasks and eight participants. The study says so explicitly. Write *all eight participants answered all four prototype scenarios correctly in the prescribed exercise* and stop.
- **Never describe the eight as independently recruited.** Six had prior programme exposure. The study discloses this as a named threat, and the disclosure is part of what makes the number credible.
- **Never convert faster into better in one clause.** Timing and correctness were scored separately and a fast wrong answer was possible. Any claim about interpretation quality must carry the correctness figures, not the times.
- **Never attach an operational consequence.** An incorrect legacy first answer does not prove that the existing software caused a real operational error. The study states this. Nothing here measures incident prevention, traffic safety, production reliability, real shift performance, cognitive workload or throughput.

### Field research may be claimed, and claimed precisely

Observation happened in **operational VTS control rooms at a customer site** (W31), with **the client's end customers' operators** (W30), and that is a stronger research basis than KISPE, AIT or Raymarine can claim. **But the research material was sanitised throughout** (W32) and no participant carried live traffic responsibility during a session. Write both halves. "Creative Navy observed operators in working control rooms, using sanitised scenarios rather than live traffic" is accurate and is the strongest honest version.

**Do not locate the control rooms** (§A1.5).

### Production is not fidelity, and fidelity is not quality

**The design system reached production** (W95). That is a fact and may be stated.

It is **not** evidence that the implementation matched the designs — no comparison was made (W98) — and it is **not** evidence that any operational, commercial or training benefit followed. **"Shipped as designed" is AIT's claim and must not appear here.** If §A10 item 3 ever produces a fidelity comparison, this becomes the strongest fact in the engagement and the opening changes.

### Implementation Partnership: name the shape, refuse the weight

**The phase happened and its division of labour is known** — the client wrote the code, Creative Navy supplied standard implementation support (W96). Write exactly that. **State no duration, no form, no frequency, no meeting count and no ticket count**, and never borrow another engagement's. Until §A10 item 1 is answered, the method pages must not claim this engagement as an instance at any particular depth.

### The safety flags are flags

Six at discovery, four carried into Phase 2 (W18, W36). The documents are emphatic and the case study must be too: **a flag denotes a need for domain scrutiny by the client's product and operational safety authority.** It is not a hazard classification, not an accident severity grade, not evidence that an incident occurred, and not closed by a design that tests well. **A design solution is not a hazard closeout** — the words are the source's and the position should be the case study's.

### The counting discipline is itself worth writing about, and must be honoured

The register held at **36 unique issues** from the end of research to handover (W34). Thirteen formative observations and eight comparative observations mapped back into it and never inflated it. Seventy transfer applications are usage proposals, not components and not shipping code (W76). The 110 specialist component states are a subset of the 198, not an addition (W65). **A writer who adds any two of these numbers together has produced a false claim**, and the sources go out of their way to say so at every juncture. The discipline is quotable in substance; the arithmetic is not negotiable.

### What must not be claimed

- Any production, efficiency, error-rate, time-saving, throughput, training, support or commercial outcome in the deployed products. None exists (W104).
- Any tender, sales, demonstration or procurement result. The client's own commercial director recorded that no measurement connected visual change to tender wins (W20).
- Any engineering-effort or duplicated-development saving. The measurement framework was built and never reported back on (W91).
- Any implication that nine products were redesigned. One was. Four received bounded transfer probes; two received applicability reviews; two more were audited only (W101).
- Any safety, certification, conformity or regulatory credential, in any formulation (W103).
- Any claim that a design decision prevented an incident, a collision or a near miss.
- Any claim about live radio, radar, AIS, lock machinery or vessel traffic behaviour (W100).
- Any competitive comparison or market-position claim (W99).
- Any description of the spinoff product beyond the fact of a return engagement (W97, §A10 item 2).
- Any statistical language — significance, confidence, effect size, power. The study has none and says so (W90).

---

## A5. Positioning — the angles worth leading with

Ranked by how defensible and how distinctive each is.

### A5.1 The client asked for consistency, and consistency was the hazard — *lead with this*

The request for proposal asked for a common treatment of navigation, menus, tables, data entry, search, panels, dialogues, equipment status, messages and alarms (W5). Discovery returned a different proposition: **a control is reusable because its task, states, permissions and recovery behaviour correspond, not because it looks similar or shares a component name** (W16).

The worked example is one sentence long and does all the work. In a general application, a selected state communicates preference or focus. In the radio system, an active transmission route carries equipment state, receive activity, hardware push-to-talk control and potentially time-critical consequence (W19). Same control, same appearance, two different truths — and the client's own communications engineering lead raised it at the gate, before any screen existed (W26).

**Why this is the lead.** It inverts the expected shape of a design-system case study. The reader arrives expecting standardisation and gets a reasoned argument for bounded standardisation with published exceptions. And the client's own engineers made the argument first, which is more persuasive than the agency making it.

### A5.2 A reuse-refusal ledger, and a test that produces it

Seventy proposed component applications; 45 adopted, 15 extended, **10 refused** (W70). Five pattern families declared permanently non-shareable before any component existed (W15). A six-gate test — task, meaning, authority, input, failure, recovery — where one failure produces an extension and an authority failure produces a refusal (W72).

**The number that proves the test is doing work**: 75% direct reuse in electronic reporting, **40% in radio communications** (W71). A test that passed everything would be decoration. This one fails three in five of the communications proposals, for stated reasons, and each refusal names the authority that made the pattern non-transferable.

**And the governing posture, which is the quotable part**: an exception is a design finding, not a missing design asset (W73).

### A5.3 Measured against the system it replaces, with the working shown

Three medians, three correctness ratios, one untimed recognition result, participant-level arrays printed, medians reproduced arithmetically in the report, order counterbalanced, and an eight-item threats-to-validity table the agency wrote about its own study (W84–W90).

**What makes it worth leading a section with is not the size of the numbers. It is that the report argues against its own headline.** It states that the three percentages must not be combined. It discloses that six of eight participants had prior exposure. It keeps a fast wrong answer visible as a possible outcome. It refuses significance testing on eight participants. **In a corpus whose evidence-standards pages exist to model exactly this posture, this is the clearest instance available**, and §A4's framing should be written into the prose rather than appended to it.

### A5.4 An expert tool where the right answer was to refuse to simplify

A gesture-first, large-tile interface was built and rejected. It demonstrated well in stakeholder meetings, increased travel, concealed shortcuts for the workstation actually in use, and implied that the same controls could transfer to specialised radio equipment without a separate contract (W59). A dashboard landing view was built and rejected for the same class of reason: it exposed many functions at once for a demonstration audience and displaced the geographic context the work depends on (W50).

Both were better for the buyer and worse for the operator, and both lost.

**This is the angle that earns the primary context** (§A6.4). The expert-tools page currently runs on engagements that opened expert capability to broader populations. This one ran the other way: it protected keyboard operation, paired-display selection and information density as commitments, and the density decision was written as an explicit design variable — clutter reduction could not hide time-critical functions or introduce unnecessary modal steps (W22). **An expert tool where democratisation was the wrong answer is a second pole that page does not have.**

### A5.5 The confidence score that was not allowed to exist

A numeric association-confidence badge was explored because it would compress uncertainty into one familiar control. Engineering had no calibrated, operationally defensible figure to supply. **So the interface was not permitted to display one, and names the association unresolved instead** (W53).

The rule generalised into the specification: the interface does not synthesise an association confidence score, a source time or an authorisation decision, and missing values appear as unknown or not available (W53, W68).

**Write this as a paragraph, not a sentence.** It is the engagement's cleanest statement that the design's job was to report what the system actually knew, and it is the one unit in the set that a reader outside maritime will carry away intact.

### A5.6 The scoping decision, published with its scorecard

Five candidate products, five weighted criteria, a published score out of 100, and a recommendation that cost the agency eight of nine possible redesigns (W24, W25, W27). The runner-up on operational consequence — voice communications, at 71 — lost on portability, for a stated reason: its hardware-coupled control semantics limit general reuse (W25).

**This belongs in the buying-guidance pages as much as in the case study**, alongside the industrial engagement's three-sprint argument. It is the corpus's clearest instance of an agency arguing itself out of scope on structural grounds and recording why.

### A5.7 The documentation was tested by someone who had not read it before

A client engineer, outside the design team, built a working view in the client's own sandbox from twelve documented patterns and two domain adaptations, with no additional specification (W77).

**The corpus asserts organisational independence on every method page. This is the engagement that ran the test.** Keep its boundaries attached: non-production, one view, two joint reviews, and a demonstration of capability rather than completion of a migration (W80).

### A5.8 A smaller one: the gate that could have said stop

The proposal defined three outcomes in advance — proceed, revise, or stop and keep the discovery package as a self-contained strategic deliverable (W23). The approval that followed was conditional, carried seven conditions each with a named client owner and verification method, and followed six recorded objections (W26, W28).

Worth one short section. It is the structural answer to the question the buying pages keep asking: what does a design engagement look like when the client is allowed to stop after three weeks.

---

## A6. Classification and filing

```
## Classification

- **Primary case-study category:** /evidence/case-studies/marine
- **Primary context:** /contexts/expert-tools-and-internal-systems
- **Also-relevant contexts:** /contexts/multi-stakeholder-operational-environments, /contexts/high-consequence-environments, /contexts/enterprise-software
- **Connects to:** /situations/complexity/system-state-is-hard-to-understand, /situations/complexity/expert-workflows-are-hard-to-operate, /situations/complexity/multi-role-workflows-are-fragmented, /situations/complexity/abnormal-conditions-break-the-interface, /situations/risk-and-consequence/delayed-understanding-creates-risk, /situations/risk-and-consequence/handoffs-create-failures, /situations/risk-and-consequence/warnings-are-visible-but-not-actionable, /situations/risk-and-consequence/users-cannot-recover-cleanly-from-errors, /situations/growth-and-product-strategy/product-fragmenting-under-growth, /situations/growth-and-product-strategy/too-many-features-not-enough-coherence, /situations/growth-and-product-strategy/the-product-is-losing-ground-to-clearer-competitors, /situations/delivery-and-execution/design-does-not-survive-development, /situations/delivery-and-execution/design-debt-is-turning-into-operational-debt, /failures/state-visibility-failures/users-cannot-see-what-state-the-system-is-in, /failures/state-visibility-failures/mode-changes-are-unclear, /failures/state-visibility-failures/important-status-information-is-buried, /failures/interpretation-failures/data-is-available-but-hard-to-interpret, /failures/interpretation-failures/users-see-information-but-cannot-judge-what-matters, /failures/workflow-failures/handoffs-lose-context, /failures/cognitive-failures/users-cannot-reorient-quickly-after-interruption, /capabilities/ux-audit-for-complex-products, /capabilities/state-and-status-visibility-design, /capabilities/information-architecture-for-expert-systems, /capabilities/design-for-abnormal-and-degraded-scenarios, /capabilities/usability-evaluation-for-high-consequence-products, /capabilities/warning-and-alarm-clarity-improvement, /capabilities/research-in-complex-operational-contexts, /capabilities/design-direction-for-legacy-to-modern-transitions, /practices/usability-testing-under-realistic-constraint, /practices/state-and-transition-review, /practices/edge-case-and-degraded-mode-analysis, /practices/task-criticality-mapping, /practices/evidence-led-prioritisation, /practices/design-governance-through-delivery, /practices/workflow-analysis
```

### A6.1 Structural change required — read before any repository work begins

**Two things must land with this study.**

1. **A new design-system page.** There is currently no `/capabilities/` or `/practices/` page covering design-system work, and this is the corpus's strongest evidence for it. See §A6.5 for what it should be and where it goes.
2. **A new entry in `Content-registry/content-registry.json`** for this case study and for the new page, following the existing schema — `source_file`, `title`, `slug`, `category`, `parent_slug`, `related_slugs`, `article_type`, `priority`, `generation_status`.

**No new context page is required by this study**, and no new case-study category. `/evidence/case-studies/marine` exists and its structure entry already anticipates further marine studies. `/contexts/expert-tools-and-internal-systems` exists. **Every slug in the Classification block above resolves against the current repository.**

> **The one dependency that survives the context decision, and it is easy to miss.** Choosing a non-marine primary context does **not** remove the dependency on `/contexts/marine-and-maritime-systems`, because the gate resolves *every* `/contexts/` reference in a case-study file, not only the primary. **This study's Classification block above therefore deliberately omits the marine context page**, which does not yet exist. When the Raymarine change set lands and creates it, add it to this study's also-relevant list in the same sweep that reviews Cox Marine and Torqeedo. Do not add it before.

> **The gate is still returning a false pass and must be fixed.** Run against this repository, `lint_case_studies.py` reports *"Scanned 0 case studies… PASS"*. It globs `contexts--*.md`, `site_structure.md` and case-study files at the top level, while the repository nests them under `Articles/Contexts/`, `Site-Structure/` and `Articles/Case studies/`. It finds no valid contexts, no valid categories and no case studies, and exits zero. **This study does not depend on it the way Raymarine's does**, because it adds no context and no category — but the design-system page and the registry entries still need a working check, and the fix should not keep being deferred.

### A6.2 Why `/evidence/case-studies/marine` for the category

The filing axis is organisational. The client builds maritime and inland-waterway software; the reference product is a shore-based maritime surveillance system; the domain vocabulary is AIS, radar, VTS, inland waterway, lock planning and marine chart management. It files with Cox Marine, Torqeedo, the MDU and Raymarine, and makes five.

**`/evidence/case-studies/government` was considered and rejected.** The client sells to public bodies, but the category's own definition and its anchor concern intergovernmental systems operating across many administrations with different operational conditions — adoption density, variable connectivity, mixed device fleets. **This client is a software vendor, and the design challenge is portfolio coherence, not multi-jurisdiction adoption.** Filing it government would import a posture the engagement does not support.

**`/evidence/case-studies/enterprise-software` was also rejected**, for the reason the tagging convention warns about: that bucket absorbs everything B2B, and the specialist filing exists precisely to stop it.

### A6.3 Phase mapping — five of five, with the fifth at known shape and unknown weight

- **Sandbox Experiments** — the three discovery sprints. A nine-product audit producing 74 views, 23 workflows and 58 prioritised findings; ten research sessions across six stakeholder perspectives and four operator contexts; a 31-pattern option map classified into shared, conditional and permanently separate; three early interaction probes on vessel inspection, alert grouping and radio resource semantics (W11–W15, W27). **Option space mapping at portfolio level before any product was committed to**, and the phase that produced the recommendation the client had not asked for.
- **Concept Convergence** — the gate and the first architecture sprints. The weighted reference-product selection, the seven release conditions, the six recorded objections, and the architecture decisions that separated vessel, track and observation, typed the alert surfaces and settled the inspector model (W23–W28, W50–W56). **A textbook instance: the tension between portfolio uniformity and operational authority was resolved at system level rather than traded off locally, and the refused options were documented with what they would have cost.**
- **Iterative System Building** — the delivery sprints. Seven journeys decomposed, 28 requirements derived, 14 decisions taken against 18 rejected alternatives, 28 templates and 91 states specified, two usability rounds feeding two design revisions (W33–W35, W49–W63, W81–W90).
- **Organizational Integration** — the design system, the transfer programme and the handover. 54 components and 198 named states specified as behaviour contracts rather than a component library; an exception register; a four-layer token architecture; governance with contribution rules, versioning and ownership; and the engineering adoption exercise (W65–W67, W70–W80). **This is the corpus's strongest instance of a design system as reasoning documentation, and the one case where the documentation was independently tested by someone who had not written it.**
- **Implementation Partnership** — **happened; the client wrote the code and Creative Navy supplied standard implementation support; weight unrecorded** (W96). Name the phase, state the division of labour, **state no duration, form or frequency.** See §A4 and §A10 item 1.

### A6.4 On the primary context, and the four slugs that were rejected

**`/contexts/expert-tools-and-internal-systems` is the primary context**, chosen by dominant design challenge rather than by industry, per the tagging convention.

The load-bearing problem is supporting expert interpretation under continuous monitoring: an operator who must distinguish what the system observed from what it inferred from what it does not know, while holding a geographic picture, an alert queue, an incident record and a shift's unresolved work in one workspace. **The engagement's most consequential decisions are all expert-support decisions** — the three-object evidence model, the refused confidence score, the four distinct alert actions, the persistent replay mode, and the explicit refusal to simplify for a demonstration audience at the cost of operator speed (W52, W53, W55, W56, W59).

**Write this study as the page's counter-example and say so.** That page's existing anchors democratise expert capability. This engagement protected it. Both are expert-tool engagements; the page is better with both poles than with one.

**Four slugs were tested and rejected, and the reasoning matters because each looks like an obvious fit.**

- **`/contexts/marine-and-maritime-systems` is not the primary**, although this is a marine study and the page is coming. The maritime regime is the setting; portfolio coherence under divergent authority is the challenge. A vendor with nine products, four families, mixed frontend stacks and dedicated terminals would face the same problem in another sector. **When the page exists, this study belongs in its evidence and in its own also-relevant list — not as its anchor.** That role is Raymarine's and the MDU's.
- **`/contexts/multi-stakeholder-operational-environments` is first also-relevant and was a genuine contender.** Six stakeholder perspectives, four operator roles, a supervisor variant and a handover model that makes responsibility transfer explicit. It loses because the engagement's hardest problems are about what one expert can safely conclude from the display, not about coordination between roles.
- **`/contexts/embedded-devices-and-constrained-interfaces` is out.** Two 27-inch displays at 2560 × 1440 with keyboard and mouse is the opposite of a constrained interface. The dedicated terminals in the portfolio were surveyed, not designed. **Do not import the other marine studies' primary context reflexively.**
- **The entire `/situations/ai-and-automation` cluster is out**, and so is `/failures/interpretation-failures/uncertainty-is-not-communicated-usefully`. Those pages are scoped to model confidence and to products that produce recommendations a user calibrates trust against. **This product has no model and makes no recommendations.** The uncertainty it communicates is data provenance — which source said what, and when — not model uncertainty, and the page says it concerns the latter. The refused confidence score (W53) is the clearest possible demonstration of the difference and should be used to make it.

### A6.5 The new design-system page

**Decision taken: a new page is created. Where it goes is a structural decision and is not the writer's to settle** — see §A10 item 5. The recommendation is `/practices/design-system-boundary-definition`, on the grounds that the existing `/practices` cluster holds analytical activities and this is one, and that a `/capabilities` framing would make it a service description rather than a method.

**It owns the subject the corpus has evidence for and does not currently have a page for: how to decide what a design system is allowed to make identical.**

Content, anchored on this engagement and nothing else at launch:
1. **The question the page answers** — not how to build a component library, but how to determine the boundary of legitimate reuse when products differ in authority, hardware and consequence.
2. **The six-gate test** (W72), stated in full and in the abstract so a reader can apply it.
3. **The three dispositions** (W70, W75) — direct, extension, refusal — and the rule that a disposition applies to one use in one product, not to a component family.
4. **The published results** (W71), including the 40% direct-reuse figure for communications, as the demonstration that a test which passes everything is decoration.
5. **The posture** (W73) — an exception is a design finding, not a missing asset — and the governance consequence: a product deviation must cite the shared contract, explain the difference in task or authority, and name the approving owner.
6. **The four-layer architecture** (W66) as the structural precondition that makes the test applicable.
7. **The transfer test on the documentation itself** (W77–W80), with its boundaries.

**Cross-reference by name** to expert tools, multi-stakeholder operational environments, information architecture for expert systems, state-and-status-visibility design, and design governance through delivery.

**Do not populate it with other engagements at launch.** KISPE's library, Schone's component families and Raymarine's component contract are inventories; none ran a reuse-refusal process. Adding them would blur what the page is for.

### A6.6 On outcomes pages

**This engagement populates no `/evidence/outcomes` page, and the reason needs stating precisely because it looks as though three should apply.**

Those pages require a grounded result about how a system performs for users in operation, or about what became possible for an organisation. What exists here is a result about a **design**, measured on a prototype against a legacy training interface, before implementation (W84–W89). The design system reached production (W95), and **nothing recorded connects the production system to an operational result.**

- **`/evidence/outcomes/improved-operational-clarity`** and **`/evidence/outcomes/reduced-error-risk`** are the two that will become live first, and only when the client reports post-implementation evidence. The measurement framework for exactly that was specified and handed over (W91); no result came back.
- **`/evidence/outcomes/reduced-maintenance-and-downtime`** looks tempting because duplicated interface engineering was the stated business case. **It must not be used.** No engineering-effort baseline or result exists (W104).
- **`/evidence/outcomes/better-alignment-across-teams`** is the nearest miss. The engineering adoption exercise (W77) is a capability demonstration, not an alignment outcome, and the document says so.

**Revisit when the client reports anything from the handed-over measurement framework.**

### A6.7 On evidence-standards pages

- **`/what-we-have-measured`** — W81 through W90, with the §A4 framing attached in full. **This becomes the page's strongest example**, and what makes it strongest is not the effect size but the published threats-to-validity table and the explicit refusal to combine the three percentages. The page should show the refusal, not just the numbers.
- **`/what-is-observed-but-not-quantified`** — the field observation in operational control rooms (W31), the four recurring legacy failure modes (W40), and the three multidisciplinary disagreements and how they resolved (W62).
- **`/what-we-do-not-claim`** — W99 through W104 in full. **The most important single entry is W101**: nine products were audited, one was designed, four received bounded probes, two received applicability reviews. A reader who skims could easily take this for a nine-product redesign, and the case study must foreclose that in its opening.
- **`/what-is-inferred`** — the 31-pattern classification at discovery (W15) is explicitly analytical synthesis rather than measured prediction of code reuse, and the source says so. Worth a line, because it shows a classification being labelled as inference by the people who produced it.

### A6.8 On `/evidence/longitudinal`

**This engagement seeds a row.** The client implemented the design system in production and returned roughly a year later for a separate product spun out of the programme (W95, W97). That is the return-engagement pattern the page collects.

**Write the row at its current weight and no further**: a return engagement occurred; its subject may not be described until §A10 item 2 is answered. **Do not characterise the return as evidence of durability** — nothing is recorded about the state of the original system at the point of return, which is what that page exists to collect. The row is a lineage entry awaiting content.

---

## A7. Suggested structure for the case study

1. **Opening** — locked agency sentence; the locked client descriptor; nine products across four families built by separate engineering teams; what the client asked for in its own terms; the seventeen-sprint shape in two blocks separated by a gate; **and the correction, in the opening, that one product was designed and the others were audited and probed.**
2. **What a traffic picture actually contains** — AIS reports, radar returns, correlated tracks, vessel records, operational alerts, equipment faults, incidents, recordings. **This section earns everything that follows**: a reader who does not understand that a radar track and an identified vessel are different claims about the world will read the rest as fastidiousness.
3. **The audit, and the finding the brief did not anticipate** — §A5.1. Nine products, 74 views, 23 workflows, 58 findings; the four recurring failure modes; and the selected-state-versus-transmit-path example. **Lead the section with the example and do not explain it twice.**
4. **The recommendation that cost eight redesigns** — §A5.6 and §A5.8. The weighted scorecard, the conditional approval, the six objections and the seven conditions. Close on the stop option that existed and was not taken.
5. **What the legacy interface could not keep hold of** — context, identity, freshness, alert meaning, temporal mode, handover. Written as the four failure modes with the observed instances under each, not as a defect list.
6. **The evidence model** — §A5.5. Vessel, track and observation as three objects; the association states; event time against receipt time; and **the confidence score that was not allowed to exist**. This is the section a non-maritime reader will remember.
7. **Four actions, four meanings** — typed alerts over one queue; acknowledge, assign, resolve, dismiss; replay as a workspace mode with a deliberate return; handover as an accountable review rather than a digest, with automatic reassignment refused.
8. **The refusal to simplify** — §A5.4. The dashboard and the touch-first model, both built, both better for the demonstration and worse for the work, both rejected. Density as an explicit design variable.
9. **The system, and its exceptions** — §A5.2. 54 components and 198 named states as behaviour contracts; the four-layer architecture; then the transfer programme: 70 applications, 45 direct, 15 extended, **10 refused**, and the 40% figure for communications. **This is the study's centre of gravity and should be its longest section.**
10. **Testing the documentation, not the components** — §A5.7, with its boundaries.
11. **What the operators did** — §A5.3. The two rounds, the counterbalanced design, the three medians, the correctness ratios, the replay recognition result, **and the study's own threats-to-validity table written into the prose rather than appended to it.**
12. **Evidence and limits** — the engagement record; the measured comparison with its full §A4 framing; production and the return engagement at their exact weights; and an explicit statement of W99 through W104.

### The structural instruction, and it governs sections 3 to 9

**Write this case study as a sequence of boundaries.** Every consequential decision in this engagement is a line drawn between two things that looked alike: a shared pattern and a specialised one, a selected resource and a keyed transmitter, an acknowledged alert and a resolved incident, a live picture and a recorded one, a demonstration audience and a working operator. **The form is: name the two things, say what made them look alike, and say what the design did to keep them apart.**

That is this study's signature and it is deliberately not the three that precede it. Schone's material is a sequence with a clock and is written along it. Raymarine's is a ledger of priced decisions. **This one is a map of boundaries, and the reader should finish section 9 able to say where each line falls and who had the authority to draw it.**

**One writing note.** The source material is dense with identifiers — product, screen, component, state, issue, requirement, decision, alternative, scenario, journey, pattern, participant and session codes. **They are the citation handles for this brief and must not appear in the case study.** Write the behaviours in prose. A reader should never encounter a code.

**A second writing note.** The validation fixtures carry invented target counts, alert mixes and handover item counts (W69). They may be described — "a dense sector of forty-eight targets carrying three traffic alerts, one equipment fault and two advisories" is accurate and useful — **but they must always be described as designed test conditions, never as observations.** The seven handover items are a scripted set, not a real shift.

---

## A8. Domain framing and external research

**Creative Navy did not certify to, audit against, or work to any standard named here.** These establish that the writer understands the domain. **Most of them appear in the client's own and Creative Navy's own engagement documents**, which makes them documented engagement context rather than imported research — the same distinction the industrial brief draws. In this domain, phrasing that implies compliance work is not merely imprecise; it is a false credential.

### A8.1 The strongest external frame — a standard asks for exactly what the client asked for, and does not reach the client's products

**IMO MSC.1/Circ.1609, *Guidelines for the standardization of user interface design for navigation equipment***, exists because the maritime sector reached the same conclusion the client did: that inconsistency between the interfaces on one bridge is itself a risk, and that a common presentation and interaction grammar is worth mandating.

**And it is directed chiefly at shipborne integrated navigation systems, ECDIS and radar — not at shore-based VTS, inland waterway services or communications consoles.** The engagement's own standards register says so in its own words: contextual input, chiefly shipborne, not blanket shore UI law.

**That gap is the frame.** A vendor arrived at the standardisation argument commercially, from tender pressure and engineering duplication, for a portfolio the standard does not cover — and then discovered that the hard part is not the standardising but the deciding what may not be standardised. Write it as the observation it is. **Never as conformance, and never as a gap the engagement closed.**

This is deliberately not Raymarine's frame (ITU-R M.493 clause 12), not Schone's (the airworthiness envelope) and not KISPE's (military symbology). Verify the circular's current status and scope before writing.

### A8.2 The sector's own statement that human-centred design is expected

**IMO MSC.1/Circ.1512**, on software quality assurance and human-centred design for e-navigation, is the maritime sector's written expectation that HCD applies to this class of system. It is the strongest available warrant for a UX engagement in the domain, and it appears in the engagement's own standards register with its boundary attached: engineering verification proceeds separately.

### A8.3 The VTS guidance, and what it says about authority

- **IMO Resolution A.1158(32), *Guidelines for Vessel Traffic Services***, establishes VTS as an information, navigational assistance and traffic organisation service. **It does not transfer the shipmaster's navigational responsibility to the VTS, and by extension not to the VTS interface.** That is precisely the boundary the engagement enforces throughout — the design reports what sources said, and the operator applies the procedure. Verify the resolution's status and its relationship to the earlier guidelines it replaced.
- **IALA Guideline G1171, *Human Factors and Ergonomics in VTS***, covers workstations, sustained monitoring, workload and operator awareness.
- **IALA Guideline G1177, *Portrayal of VTS Information***, covers target distinctions, overlays and keeping data legible without obscuring targets. **G1177 is the guideline closest to this engagement's actual subject** and is worth reading properly rather than citing. Verify current editions of both.

### A8.4 The inland-waterway regime

**Directive 2005/44/EC on harmonised River Information Services, as amended by Directive (EU) 2025/2482.** The RIS framework governs standardised information exchange for inland navigation — vessel tracking and tracing, notices to skippers, electronic reporting and inland electronic charts — and it is why the client's inland products have the entity and message semantics they have. Treat legal requirements concerning data exchange and standardised reporting as **system constraints**; the engagement designed the human interaction layers. Verify the amendment's status, entry into force and transposition position before writing, and note that national transposition applies.

### A8.5 The presentation and alarm regimes that sit next to this work

- **IEC 62288**, presentation of navigation-related information on shipborne displays, is a reference where onboard symbology overlaps. **The engagement explicitly did not label the VTS application as ECDIS compliant**, and the case study must not either.
- **IMO Bridge Alert Management** (MSC.302(87), implemented through IEC 62923-1 and -2) is the maritime alarm regime with its four alert priorities. **It governs shipborne navigation and communication installations and does not reach a shore VTS console.** The MDU brief already makes a convergence observation about this regime from outside its scope; **this study must not make the same observation in similar words.** See §A10 item 7 — reconcile before either publishes.

### A8.6 The human-factors and usability standards the engagement actually used

**ISO 9241-210** (human-centred design process), **-110** (interaction principles), **-112** (presentation of information) and **-11** (usability concepts) were used as design criteria and as the framework for the usability work, and the engagement's documents attach a boundary to each: process guidance, not certification; prototype measures do not establish production performance; no population claim from eight sessions. **ISO/IEC 25010** and **IEC 62443-4-1** appear in the register for engineering quality attributes and secure development respectively, with the client retaining both. **EN 301 549 and WCAG 2.2** informed non-colour status coding, keyboard access, focus and contrast, with legal applicability per product and buyer. **IEC 31010** informed the structure of the use-error analysis without numerical likelihood modelling.

### A8.7 Research worth doing before the context pages are written

- **AIS data quality.** Published work on AIS message integrity, gaps, spoofing and identity reliability externally corroborates that "an AIS identity is not a verified identity" is a documented domain problem rather than a designer's scruple. **Strongly recommended** — it is what turns W52 and W53 from a design preference into a domain fact.
- **The VTS and RIS vendor landscape.** Useful for the marine context page when it is written. **It cannot support a competitive-vector argument here** (§A9), because nothing was benchmarked in this engagement.
- **IALA VTS operator training standards.** Relevant to the training-burden and handover material on the situations pages.

### A8.8 Use with precision, or not at all

**Published investigation reports in which track identity confusion, stale AIS or display ambiguity contributed to an incident** would corroborate the four safety-review candidates as a category of real risk. **They are category evidence only.** The source documents state repeatedly and emphatically that no incident, collision or near miss was attributed to this client's interface, and that an incorrect first answer in a scripted task does not demonstrate that the existing software caused an operational error (W90). **If such material is used at all, it belongs on a context or failures page describing the category, never in this case study and never in the same paragraph as this client.**

### A8.9 Verify before using

Every instrument named in §A8 appears in the engagement's own standards register, but editions, amendment status and scope move. **Verify the current status of MSC.1/Circ.1609, MSC.1/Circ.1512, A.1158(32), IALA G1171 and G1177, IEC 62288 and Directive (EU) 2025/2482 before publication.** Where an instrument's applicability depends on installed equipment, customer jurisdiction or contract — which is true of most of them — say so, as the engagement's own register does.

---

## A9. Style and lexicon compliance

Non-negotiable items from the writing guide:

- **Open with the locked agency sentence**, verbatim, on first introduction.
- **Attribute the method on first use in every self-contained section**: "Creative Navy's Critical Systems Design method", thereafter "Critical Systems Design" within that section. Never "the method", "our approach" or "the framework" as the primary reference in a section that has not yet named it.
- **Never use "the agency", "the consultancy" or "we"** as the primary identifier in a passage that must stand alone when retrieved. **The locked client descriptor likewise does not rotate** (§A1.1).
- **British spelling**, except the phase name *Organizational Integration*.
- **Sprint = cadence (one week here). Phase = a stage of the method.** Never equate them. **This engagement has a genuine collision risk**, because the engagement's own documents count in *weeks* and divide into *discovery* and *delivery* blocks, and neither block is a method phase. **Always qualify: "the three discovery sprints", "the fourteen delivery sprints".** Never a bare "phase" where a reader could take it for one of the five.
- **Name all five phases and be exact about the fifth.** Four are claimable at full weight; Implementation Partnership happened with a known division of labour and an unrecorded weight (§A6.3). Say so rather than omitting it.
- **Use at least three of the five core requirements**: evidence-aware thinking, multi-perspective synthesis, lateral exploration, tension-driven reasoning, organic system building. **Evidence-aware thinking and tension-driven reasoning are the two this engagement evidences best.**

### Proprietary vocabulary — used accurately in context, not defined

**Use the terms this engagement evidences, and do not reach for the whole lexicon.**

- ***Constraint respecting* — this engagement carries the corpus's strongest instance and may say so.** The six-gate reuse test (W72) is the term operationalised: a constraint on reuse derived from authority, hardware and consequence rather than from preference, applied to 70 cases and published with its failure rate.
- ***Tension-driven reasoning*** — the portfolio-uniformity-against-operational-authority tension (W16, W19, W22, W62), resolved at system level rather than traded off locally, with three multidisciplinary disagreements recorded and the specialised behaviour winning all three. **Note the superlative conflict**: KISPE and Schone both claim "cleanest available illustration". Use the term without a superlative until §A10 item 8 is reconciled.
- ***Option space mapping*** — genuinely evidenced at two scales: the 31-pattern portfolio classification (W15) and the 18 rejected alternatives against 14 decisions (W49). **Use it without a superlative**, for the same reason: KISPE's 36-in-64 and Schone's 45-in-85 are claimed more loudly and the corpus ranking has not been reconciled.
- ***Progressive specification*** — the requirements-to-decisions-to-contracts-to-acceptance chain, and the component contracts that state in testable terms what the design was not yet entitled to assert (W67, W92).
- ***Blanks phenomenon*** — the engineering clarifications that made unstated assumptions explicit and assigned each an owner; and the refused confidence score (W53), which is the blanks phenomenon in its purest form — the design made visible what the system did not know rather than filling it.
- ***Performance in reality* — permitted, and qualified.** The engagement designed and tested against restricted networks, paired displays, day and night control-room conditions, dense traffic, stale feeds, interrupted sources and permission limits, and ran field observation in operational control rooms (W10, W31, W69). **But every test used sanitised data in a training or prototype configuration, never a live traffic position.** Use the term, and attach that qualification in the same passage. *(This is a deliberate divergence from Raymarine, where the term is forbidden.)*
- ***Domain learning*** — permitted and genuinely evidenced: guided product demonstrations across nine applications, engineering clarification sessions, operator observation in working control rooms, and a standards applicability analysis. **Stronger than Raymarine's documentary domain learning; weaker than Gexcon's hands-on productive use.** Qualify it as observational and documentary rather than operational.
- ***Organic system building*** — the design system extracted from a working reference product rather than specified upfront, with the transfer programme as the mechanism that corrected it.

**One term is forbidden in this case study.**

- ***Competitive vector* must not appear.** No competing product was evaluated (W99). The client's brief named competitive pressure as a driver, which is a commercial motivation, not a benchmark. A reader who knows the term would notice.

### Cadence — the most important instruction in §A9

**The negation-pair construction is the single largest style risk in this study, and the risk is now cumulative across the corpus.** *X is not Y* — acknowledged is not resolved, a track is not a vessel, replay is not live, selected is not transmitting, unavailable is not unknown, a correlated target is not a verified identity, a design solution is not a hazard closeout. **The source material is saturated with it, and it is already the signature cadence of KISPE and Schone, with Raymarine constrained for exactly this reason.** Four studies written in it will read as one voice.

**State the distinctions positively wherever the meaning survives.** The inspector names the association unresolved. A retained marker carries its age and its source. Acknowledgement records that an authorised actor received the alert; resolution requires its own transition and its own actor. The workspace states which time it is showing. **Reserve the negation for two or three places where it lands hardest — most likely §A5.1 and §A5.5 — and nowhere else.**

Three further cadence rules:

- **Prefer the verb to the principle.** The material is behavioural: an operator selects something, the inspector opens, a source stops reporting, a label changes. Write what the interface *does* at a given moment rather than what it *holds to be true in general*.
- **Lead with the boundary, not the outcome.** The structural instruction in §A7 means most sections should open on two things that looked alike and close on what kept them apart. That is a different sentence shape from the corpus's usual decision-then-rationale pattern, and it is what makes this study recognisable.
- **Declarative openings**, canonical terminology, no metaphor in sections that will be retrieved for task queries. **Every section must stand alone** as a retrieved chunk.

**And three hard rules from §A1 and §A7:** no codes or identifiers in the published prose, no RIS module inventory, and no location for the control rooms.

---

## A10. Open items

1. **The weight of the Implementation Partnership is not recorded.** The phase happened and the division of labour is known — client coded, Creative Navy supplied standard implementation support (W96). What that support consisted of — review cadence, duration, ticket answering, continued design production, embedded working — is unknown. **Write the phase at known shape and unspecified weight until the lead says more**, per §A4. If it produced further screens, decisions or reviews, those are additional engagement facts and belong in §A3.
2. **The return engagement's subject.** The client came back roughly a year later for a separate product spun out of the programme (W97). Nothing else is known: not the product, not the domain, not the scope, not whether it is nameable, and not whether it is a candidate for its own case study. **Write "a return engagement roughly a year later on a separate product" and stop** until this is answered. It also determines what §A6.8 can say.
3. **Whether anyone compared the implemented interface against the delivered designs.** None is recorded (W98). **If a comparison exists it is the single strongest fact in the engagement** — it is what gives AIT its headline — and it changes §A1.4, §A4 and the opening. Ask once; write the conservative version until answered.
4. **Whether the control-room location may be named.** §A1.5 withholds it on the same reasoning that removed the RIS module inventory. **This is reversible on the lead's word**, and naming it would strengthen the field-research claim. The trade is specificity against identification risk, and the risk is real: a named country plus "VTS control rooms" reaches the customer organisation from a list of a handful, and through it the vendor.
5. **Where the design-system page goes.** §A6.5 recommends `/practices/design-system-boundary-definition`. The parent-cluster decision determines the slug, the registry entry and whether the context-change protocol applies — it does not, for a `/practices` page, because the gate resolves only the contexts and case-study-category axes and says so in its own scope note. **Decide once, before the page is written.**
6. **Queue position.** The Raymarine, KISPE, Schone and industrial change sets have not landed. This study adds no context and no category, so it is **not blocked** by any of them — but the marine context page's arrival determines when this study's also-relevant list gains a row (§A6.1), and the lint gate's false pass should be fixed before any of them land.
7. **Coordination with the MDU brief on bridge alert management.** Both engagements converge on the same regime from outside its scope. **The observation should be made once, for both, rather than twice in similar words** (§A8.5). Reconcile before either publishes.
8. **Two superlative conflicts to rank across the corpus before publication.** *Tension-driven reasoning* — "cleanest available illustration" is claimed by both KISPE and Schone, and this engagement has a strong claim of its own. *Option space mapping* — KISPE's 36-in-64 and Schone's 45-in-85 against this engagement's 31-pattern portfolio classification and 18-against-14 decision record, which are different in kind rather than smaller. **Rank once; do not let this study pre-empt it** (§A9).
9. **The team's role stability across the two blocks.** Five people are confirmed and the mapping to the documents' specialist role titles is confirmed (W8). Whether the same five ran discovery and delivery is not. Schone's stable composition is written as fact because it was confirmed; do not assume the same here.
10. **The two client-deferred issues.** Four issues went to engineering follow-up and two were deferred by client decision (W92). What the two deferrals were is not recorded. **If they are substantive, they belong in the case study's limits section**, because a deferral the client chose is more interesting evidence than a mitigation the agency delivered.
11. **Four documents referenced throughout the set are absent**: the information architecture and domain model, the acceptance record, the measurement and rollout recommendations, and two discovery documents between the opportunity map and the strategic recommendations. The brief is written without them and nothing in §A3 depends on them. **Confirm whether they exist**, and whether the acceptance record holds anything that changes §A1.4.
12. **Confirm the prefix is W.** A, D, E, G, K, M, N, O, R, S, T and V are taken; B is skipped by convention; **C was rejected for colliding with three separate code families in the source set.** Confirm before the corpus integration document is written, because the W-numbers propagate.

---

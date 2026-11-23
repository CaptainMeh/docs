# KISPE Space — full writing brief

> **Purpose.** Everything needed to write the KISPE Space case study and to update the existing content corpus from it. Written to be handed to a writer with no access to the source material or the conversations that produced it.
>
> **This document is the case study brief only.** **§A3 is a numbered evidence bank** — every instruction here cites it by number, and the same K-numbers are to be used in the corpus integration brief. Do not introduce facts about this engagement that are not in §A3.
>
> **Corpus integration.** Everything that changes on other pages because of this engagement belongs in `corpus-integration-brief.md`, which covers the earlier engagements together. **Part B of this document is a specification of what that file must be given**, not a substitute for it. The two share the evidence bank verbatim.
>
> **Companion documents:** `industrial-writing-brief.md` (industrial process control, prefix **E**), `streetec-writing-brief.md` (**S**), `ait-writing-brief.md` (**A**), `mdu-writing-brief.md` (**M**), `assemblio-writing-brief.md` (**N**), `topera-writing-brief.md` (**T**), `egma-writing-brief.md` (**G**), `oceaneering-dispatch-panel-writing-brief-FINAL.md` (**O**), `visioncheckout-writing-brief.md` (**V**). This engagement uses prefix **K**. Never let facts migrate between them: they are different clients, industries and evidence classes.
>
> **This is the corpus's first defence and space engagement.** It retires `corpus-integration-brief.md` §6.9, which currently reads in full: *"Industry page: defence — No engagement supports it."* See §A6 for the structural consequences, which are the largest of any study in the set.

---

# PART A — THE CASE STUDY

## A1. Handling rules

### A1.1 What may be named

**KISPE may be named.** The client is KISPE Space, a UK space systems engineering company. Use that descriptor near-identically on every mention, per the entity-consistency rule. Do not rotate it.

**Nothing else may be named.**

| Do not use | Use instead |
|---|---|
| Any end customer, agency, prime contractor or programme the product serves | omit entirely — do not gesture at one |
| The three benchmarked competing systems | "three competing systems", "the benchmarked systems" |
| Named individuals on either side | role descriptors only — "KISPE's product owner", "a space domain specialist", "Creative Navy's interaction designer" |
| Any imagery provider, satellite operator or data supplier | "an imagery provider", "a provider coverage notice" |

**The product concept may be described but is not a trade name to lean on.** "Common Space Operating Picture" is a doctrinal term of art rather than a KISPE brand, and describing the product as *a common space operating picture* reads as domain fluency. Do not capitalise it as though it were a product name, and do not attach a version or programme name to it.

**There are no quotes.** No transcripts exist, no client speech is on record, and no passage has been cleared (K28). **Write no quotation marks anywhere in this case study, and no reported speech either.** Where a client position is described, attribute it to the role and the document it came from — "KISPE's partner brief asked for advice as well as design" — never to a speaker. This is stricter than the Oceaneering rule, which permits reported speech; here there is nothing to report.

### A1.2 What may not be shown

**No screenshots, wireframes, design images or plates.** The corpus is text-only on documentation pages. The source material contains twelve annotated UX plates and a quantity of schematic wireframes; **none of them may be published, in any form, including as redrawn diagrams.** Describe the designs in prose.

This matters more here than in other studies because the material is defence-adjacent and the plates carry map geometry. Even synthetic geometry should not be reproduced.

### A1.3 Dates

**No dates at all, from any source.** No years, no months, no seasons, no calendar dates. Sequence and duration only — "sixteen one-week sprints", "a four-sprint exploration phase", "at the end of exploration".

**This has a second application unique to this engagement.** The source material is built around a fixed demonstration scenario with calendar dates attached to every record. **Those calendar dates are discarded. The intervals and relationships between them survive, because they are the design argument.** §A3.5 gives the fixture as intervals, already converted. Use that table and never reach back for a date.

So: *"a positioning fix seventy seconds old against a sixty-second freshness policy"* — correct, and it is the whole point. *"a fix taken at 09:28:50 on 14 June"* — forbidden.

### A1.4 Status

**The product was built** (K25). That may be stated plainly.

**It may not be stated as shipped-as-designed.** This is the critical distinction in this engagement and §A4 governs it. Creative Navy did not support the build and has not compared the built interface against the delivered designs (K30). AIT, the MDU and Assemblio all carry a Creative Navy-verified design-fidelity comparison; **this engagement does not**, and the difference must not be blurred by proximity.

---

## A2. The engagement in brief

KISPE Space set out to build a common space operating picture: a single geographic view that brings together mapping and positions, satellite overflights, recent imagery, terrestrial weather, navigation and communications availability, and space weather — for people working on the ground who need to understand what space-derived information is available to them, how current it is, where it came from, and what its limitations are.

The starting point was an early concept with two sample interfaces, a compact field one and a fuller desktop one. KISPE's brief was explicit that this was a starting point for investigation rather than a fixed specification or an approved interaction model, and that the agency was expected to challenge the product concept where appropriate.

Creative Navy worked across **sixteen one-week sprints in three phases**: a **four-sprint exploration phase**, deliberately consultative, which ended at a board review; then **seven UX development sprints**; then **five UI delivery sprints**. A six-person team ran it. The exploration phase produced 12 UX challenges, 36 concept alternatives in 64 low-fidelity frames, and a decision register put to the board for endorsement. **The board greenlighted the architecture, the staged scope and the seven-sprint UX phase.** UX development produced six user journeys, 61 behavioural rules, four complex interaction studies, 40 documented edge cases and a final register of 25 decisions. UI delivery produced 47 base screens across field and desktop, a design system of 103 components, and the documentation that went with them. The product was built.

**The requirement that shapes everything: the interface's primary job is to prevent its users believing things the data does not support.** Satellite imagery, orbital predictions, receiver measurements, provider notices and weather forecasts are different kinds of evidence with different clocks, different authorities and different failure modes — and a single map that renders them together is an invitation to read them as one synchronised truth. Almost every decision in the engagement is a guard against a specific false inference.

---

## A3. Evidence bank

### A3.1 Engagement record — stateable as fact

- **K1** — **Sixteen one-week sprints in three phases**: four exploration, seven UX development, five UI delivery.
- **K2** — **Six-person team**: UX designer, UI designer, product designer, interaction designer, researcher, project manager.
- **K3** — **The exploration phase was explicitly consultative.** Detailed UX and UI scope was confirmed at its conclusion, not before it. The engagement was structured so that the client could decide what to commission after seeing the analysis, rather than committing to a feature backlog up front.
- **K4** — **12 UX challenges** defined and explored, covering product organisation, map control, area selection, time, satellite services, imagery, alerts, information quality, field versus desktop, limited connectivity, sharing, and technical transparency.
- **K5** — **36 concept alternatives across those 12 challenges, represented in 64 low-fidelity frames** — three alternatives per challenge, consistently. The counting convention was documented as part of the deliverable: one frame is one distinct conceptual screen or interaction state; colour and spacing variants are not counted separately; a revision or re-annotation of an existing frame is not a new frame.
- **K6** — **Exploration ran to a defined sprint shape.** Sprint one: users, settings and the product boundary; converting the original concept into a designable hypothesis; a first relationship model for area, time, observation, service, source and alert. Sprint two: six foundational challenges, 35 frames — the choices that shape every later flow. Sprint three: six functional challenges, 29 frames — imagery, services, alerts, connectivity, sharing, diagnostics. Sprint four: synthesis, consistency checking across representative flows, five critical task walkthroughs, structured expert critique, and a recommended seven-sprint UX sequence.
- **K7** — **Three competing systems benchmarked.** The systems are not disclosable.
- **K8** — **A board review at the end of exploration, which greenlighted everything.** Twelve working decisions were put for endorsement along with a recommendation to proceed conditionally. The board endorsed the product architecture as the working direction, the staged scope with explicit decision gates for uncertain features, and the seven-sprint UX development phase.
- **K9** — **Six canonical user journeys, 37 documented steps, 25 journey acceptance criteria.** The journeys: find imagery for an area; review the satellite service outlook; interrogate information reliability; continue with limited connectivity; prepare a bounded area briefing; review a new information notification.
- **K10** — **61 behavioural rules in ten families** — geographic and workspace context, time, imagery, satellite services, provenance and uncertainty, notifications, connectivity, briefings, integration and diagnostics, field presentation. Each rule carries four parts: the trigger, the required response, **the guard** (the thing the behaviour must not do), and a specific verification check.
- **K11** — **Six state models and eight cross-module regression checks.** The state models cover area confirmation and query lineage; imagery catalogue and asset retrieval; provider reachability and device observations; local annotation synchronisation; saved live view versus frozen briefing; notification interaction.
- **K12** — **Four complex interaction studies comparing 12 developed alternatives** — three per study, each addressing the same fixed task under the same fixed scenario conditions so that no alternative could be flattered by a favourable case. The four: workspace continuity; time and provenance; field versus desktop; satellite service semantics.
- **K13** — **40 documented edge cases and degraded states**, with **12 annotated plates**. Each case specifies the input condition, the visible response, the recovery path, **the misinterpretation it prevents**, and a verification that would expose a dangerous misunderstanding.
- **K14** — **Five verification suites specified** against the exception catalogue — context and imagery; evidence and time; satellite services and environment; connectivity and field; briefings, notices and source health.
- **K15** — **25 UX decision records: 16 recommended, 9 conditional.** Each carries the design direction, the credible alternative *and what was valuable about it*, the reasoning, the accepted trade-off, the evidence for it in the design package, the condition that would confirm or reverse it, the owner role responsible, and the open question it depends on.
- **K16** — **18 open questions, each assigned to an owner role, and eight dependency gates.** Owner roles named: product owner, operational stakeholders, security owner, data owners, imagery partner, space domain specialist, device engineer, communications engineer, technical architect, UX research lead.
- **K17** — **Information architecture: six logical workspaces** — five primary destinations (Operating Picture, Imagery, Satellite Services, Environment, Briefings) plus System Status as a global utility rather than a sixth equal tab. **Eleven named navigation transitions.**
- **K18** — **Three temporal perspectives**: Current, Historical, Outlook.
- **K19** — **Seven data feed categories** in the demonstration model: Earth observation imagery, GNSS receiver, communications terminal, provider services, orbital data, space weather, terrestrial weather.
- **K20** — **One shared demonstration dataset used by every artefact**: five imagery catalogue entries, seven service and environmental records, two notifications, one area of interest, one map cache state, one local annotation.
- **K21** — **47 base screens delivered in UI delivery, several with versions, across both field and desktop.** Both were produced to production fidelity; the field interface is not a responsive collapse of the desktop one.
- **K22** — **A design system of 103 components.**
- **K23** — **The handoff package: the screens, the design system and the documentation.**
- **K24** — **Machine-readable contracts accompanied the written specifications** — a navigation contract, a behaviour contract, state machines, an edge-case contract, scenario overlays, and traceability and coverage files — so that the specification could be loaded deterministically rather than read and interpreted.
- **K25** — **The product was built.**

### A3.2 What did not happen — must be stated, not omitted

- **K26** — **There was no user research.** No interviews with field commanders, operations personnel or specialist support staff; no contextual inquiry; no observation in the field; no usability testing; no personas built from research. The researcher on the team did competitive, domain and desk research. The evidence base for this engagement was benchmarking of three competing systems (K7), the client's own concept material and partner brief, published domain and standards material, and structured expert analysis.
- **K27** — **Nothing was validated on representative hardware.** Target field devices, touch precision, screen legibility in operating light and glove use were identified as requiring device evaluation; that evaluation did not take place within the engagement, and is recorded in the open questions as owed by operational stakeholders and the hardware owner.
- **K28** — **No client speech is on record.** No transcripts, no quotable statements, no reported speech.
- **K29** — **No option-space count exists beyond K5 and K12.** There is no per-screen variant count, no UI style-direction count and no component-alternative count. Do not estimate one, and do not let another engagement's figures migrate here.
- **K30** — **Creative Navy did not support the build, and has not compared the built interface against the delivered designs.** There was no Implementation Partnership.

### A3.3 The client, the product and the boundary

- **K31** — KISPE Space is a UK space systems engineering company.
- **K32** — The product is a common space operating picture: a shared geographic view bringing together mapping, positions and geographic objects, satellite overflights, recent imagery, terrestrial weather and daylight, navigation and communications availability, and space weather advisories — for operational use on the ground.
- **K33** — **Three user populations, named in the client's own brief.** Field commanders and personnel who need concise, location-specific information under time pressure. Operations and planning staff who need a wider view, historical context, forecasts and access to supporting evidence. Specialist support personnel who investigate sources, service limitations and information requests.
- **K34** — **Two operating contexts**: a compact field interface and a fuller desktop environment.
- **K35** — **The brief's own design premise**: the same underlying information may need very different presentation, interaction and levels of detail depending on the user, the task and the operating environment.
- **K36** — **KISPE asked for advice as well as design**, and named six questions it wanted the engagement to resolve: what the clearest proposition is and where the boundary sits between this product and existing operational systems; which roles, situations and decision journeys should shape a first release; whether the product should be organised around a geographic workspace, tasks, service domains or a combination; how provenance, uncertainty, time, outages and data gaps should be communicated without overwhelming users; what should be shared between field and desktop and where they need genuinely different interaction patterns; and which capabilities make a useful, testable first product.
- **K37** — **The product boundary, settled and documented as a design decision**: the product is bounded to access, interpretation and sharing of space-enabled information. It explicitly excludes autonomous operational decisions, inferred adversary classification or targeting, guaranteed service-quality prediction, and any substitute for existing command systems. This was recorded as a decision with an owner and a confirmation condition, not left as an assumption.

### A3.4 The design principles that came out of exploration

- **K38** — **Six consolidated design principles**, each stated with its practical implication rather than as a slogan:
  1. *Geographic context is explicit* — area selection persists across modules and can be checked or reset.
  2. *Time is not a cosmetic filter* — each observation, forecast and notice retains its own relevant date.
  3. *Trust must be inspectable* — source, age, confidence and limitations are available at the point of interpretation.
  4. *Field is a real usage context* — layouts and controls reflect device and interruption constraints.
  5. *Unknown is a valid state* — missing or unverified data is not translated into a reassuring status.
  6. *Scope follows evidence* — conditional capabilities are not committed without service and security checks.

- **K39** — **Five principles governing degraded states**, developed later and sharper than the six above. *Unknown is not adverse* — an unreachable provider is not proof that a satellite service has failed. *An age label is not a confidence score* — observation, receipt and validity have distinct clocks. *A catalogue item is not an openable image* — metadata, access checks, preview delivery and full asset retrieval fail separately. *Local is not shared* — queued actions remain local until a supported confirmation arrives. *A saved snapshot is not a live view* — later data never rewrites a frozen record or overrides current permissions.

### A3.5 The demonstration scenario — the engagement's most unusual method decision

- **K40** — **One synthetic scenario, with a fixed clock, used by every artefact in the chain.** Every journey, every behavioural rule, every interaction study, every edge case and every plate refers to the same area, the same imagery records, the same device readings and the same failure. This is what let six documents stay consistent with each other and what made the acceptance criteria checkable rather than rhetorical. It also meant that no document could quietly invent a convenient fact to make a design look good.

- **K41** — **The scenario, expressed as intervals. Use this table; the calendar dates are discarded per §A1.3.** The scenario clock is "the scenario moment"; everything else is relative to it.

| Record | What it is | Relative to the scenario moment |
|---|---|---|
| The area of interest | A confirmed demonstration area | Confirmed; persists across workspaces |
| Imagery record 1 | 5 m multispectral, full coverage of the area, 18% cloud | Acquired the previous day; received an hour and twenty minutes after acquisition |
| Imagery record 2 | 1 m panchromatic, **partial** coverage | Acquired two days earlier |
| Imagery record 3 | 3 m radar, full coverage | Acquired four days earlier |
| Imagery record 4 | 10 m multispectral, **preview will not load** | Acquired an hour and forty-five minutes before; received ten minutes before |
| Imagery record 5 | 0.5 m, cloud **not reported**, **access restricted** | The oldest record in the set |
| GNSS receiver | Last positioning fix; 13.5 m receiver-reported accuracy | **70 seconds old, against a 60-second freshness policy — stale** |
| Communications terminal | Connected; a device measurement | **17 seconds old, against a 90-second policy — current** |
| Provider coverage notice | Nominal area coverage; a published claim | Issued two days before; valid for a further six days |
| Predicted overflight | A derived pass prediction | Begins 35 minutes after; runs for seven minutes |
| Weather forecast | A terrestrial forecast | Issued 35 minutes before; valid for an hour, beginning half an hour after |
| Space weather advisory | A G1-class geomagnetic advisory | Issued an hour and a half before; valid for four and a half hours |
| Imagery feed health | The catalogue feed stops responding | **Unreachable from three minutes before; last successful receipt ten minutes before** |
| Map cache | The offline map tiles | Last refreshed two hours ten minutes before |
| Local annotation | An annotation made in the field | Saved locally at the scenario moment; not shared |
| Notifications | A catalogue update, and a provider fault | Created five minutes before; fault first seen three minutes before |

- **K42** — **The scenario is deliberately adversarial, not a happy path.** At the scenario moment the imagery feed is down, the newest image will not render, the highest-resolution image covers only part of the area, one image is restricted, the positioning fix is stale while the communications reading is current, and a predicted overflight has not happened yet. Every one of those is a trap the interface has to avoid walking into.

### A3.6 Design decisions and the reasoning behind them

**Architecture and geographic context**

- **K43** — **Hybrid architecture adopted**, over two credible alternatives that were built and assessed rather than argued away. A permanently dominant map kept geographic continuity but squeezed catalogue work, metadata and preview into competing panel space. Fully separate modules gave specialist tools the room they needed but let the area of interest change unnoticed between them. The hybrid keeps a small, explicit shared context — confirmed area, temporal perspective, return path — while giving each task workspace its own layout. **The accepted cost was named: shared state is more complex, local filters must never be mistaken for global ones, and a persistent header costs real pixels on a compact device.**
- **K44** — **A confirmed area of interest is not the map viewport.** Panning or zooming changes what is visible and never changes what is being queried. The alternative — using the visible extent as the implicit query boundary — removes a step and was rejected because a minor pan silently changes the meaning of every result returned. The accepted cost: an extra confirmation, plus area management, plus the difficulty of editing a polygon on touch hardware.
- **K45** — **Query lineage.** Every area-scoped request carries the area identity, a geometry signature, the filter set, the temporal perspective and a generation time — and a late response from a superseded request may not populate the current results. This is a race condition specified as an interaction contract: if a user starts a search, changes the area, and the first search returns last, the older results do not appear under the newer area's label. **The accepted cost was named: this requires request lineage and cancellation semantics, not just a loading spinner.**
- **K46** — **The selected object and the selected area are independent states.** Inspecting a map object does not move the area of interest to that object's footprint, and hiding a layer does not silently redefine the area. Where a selected object is filtered out of view, the interface says so rather than leaving its details apparently describing something invisible.
- **K47** — **Overlapping map symbols produce a grouped selection list** rather than an arbitrary selection of the topmost marker.
- **K48** — **Return navigation restores the prior viewport and the confirmed area deliberately**, and does not imply a fresh fetch. A retained selection is not a refreshed dataset, and the interface distinguishes the two.

**Time**

- **K49** — **Three temporal perspectives, and the perspective never rewrites a record's own time.** Three approaches were compared. A single global timeline gave an intuitive anchor and implied — falsely — that every record described the same instant. Per-module time controls matched each source's semantics and fragmented comparison, with users repeatedly setting similar dates. The chosen model frames the view without falsifying source times, and keeps local controls where a module genuinely needs precise acquisition dates or forecast intervals. **The accepted cost was named and is the sharpest self-criticism in the package: *Current* can still be misread as *live*, so per-record stamps and explicit labelling remain essential.**
- **K50** — **Five distinct temporal fields, each preventing a specific error.** Acquired or measured — prevents a historical observation being read as a current measurement. Issued — prevents a forecast's issue time being read as its validity. Received — prevents delivery time being read as observation time. Valid interval — prevents an expired forecast being treated as current. Queried — prevents cached results being read as a fresh search.
- **K51** — **Historical filtering operates on event time, not delivery time.** An item delivered inside the selected interval but acquired outside it does not qualify.
- **K52** — **Canonical storage in UTC, with an explicit zone or offset label on every consequential time display.** The accepted cost was named: a technical standard does not remove the need for understandable source labels.
- **K53** — **Expired advisories and forecasts lose their currency claim but are not deleted.** An expired notice is neither automatically disproved nor still valid, and the interface says which.
- **K54** — **A notification's creation time is never used as its subject's observation time.** A notice that new imagery has been catalogued does not make that imagery a new acquisition.

**Evidence, provenance and uncertainty**

- **K55** — **Status is seven independent dimensions, not one scale.** Source transport (reachable, unreachable, unknown); asset access (permitted, restricted, not checked); asset delivery (available, failed, pending, unknown); freshness (current, stale, not assessed); origin (observed, device-measured, provider notice, forecast, prediction); operational condition (favourable, unfavourable, unknown, not applicable — and only where the source semantics actually support that classification); local change state (saved locally, queued, confirmed shared, unresolved). The rejected alternative is named every time: **one green-to-red health score**, which is compact and would make identical colours carry conflicting meanings across domains.
- **K56** — **Four prohibited shortcuts, stated explicitly**: grey is not necessarily offline; red is not necessarily inaccurate; an old observation is not automatically false; a nominal coverage footprint is not proof that a particular terminal is connected.
- **K57** — **Progressive detail as the general pattern, with inline indicators only where a limitation is essential to interpretation.** A third approach — a data-quality overlay on the map — was deferred until a documented specialist need existed, on the grounds that it adds clutter and implies geographic precision the quality data may not have. **The accepted cost of progressive detail was named: users may never open the caveats.**
- **K58** — **Freshness is the outcome of a rule, not a confidence score.** Age is computed from a record's own measurement time against its own configured policy. A stale record may be a perfectly correct historical observation, and the interface does not relabel it as false or inaccurate.
- **K59** — **Contradictory sources are never silently reconciled.** Where a provider notice disagrees with a local device reading, both are retained with their own source, time and scope, and the conflict is marked pending domain reconciliation. Choosing the newest or highest-scoring claim automatically would look decisive and would manufacture certainty the records do not support. **The accepted cost: users may need specialist help to interpret a disagreement, and the interface must not imply both claims are equally authoritative by default.**
- **K60** — **Missing fields are given their correct meaning, and *not applicable* is not *not reported*.** Radar imagery has no meaningful cloud-cover percentage — that field reads *not applicable*. Optical imagery with the field absent reads *not reported*. Neither renders as 0%, and neither becomes a lowered confidence score. A receiver that does not report an accuracy figure reads *accuracy not reported*, never zero, perfect, or low confidence.

**Satellite services**

- **K61** — **Service evidence is separated by origin, and service cards are the entry point.** Three approaches were compared: a card overview, aligned comparative timelines, and geographic coverage on the map. Cards won as the entry point with explicit semantic labels in place of a universal health score. Timelines were kept as a secondary outlook view only for sources that genuinely support temporal comparison — because equal axis lengths imply equal forecast certainty and granularity, and an isolated receiver measurement does not describe a future period. Coverage on the map was kept for genuinely area-scoped coverage products only, because coverage shading is readily mistaken for measured connection quality.
- **K62** — **A predicted overflight is an opportunity, not a delivery.** It is shown with its interval, its predicted status, collection unconfirmed and delivery unknown, and it is never linked to an imagery asset unless one actually exists. Orbital geometry does not imply tasking, collection, entitlement, or adversary surveillance.
- **K63** — **A receiver-reported accuracy figure is local evidence about one device at one moment.** It is displayed with its measurement time and its own freshness verdict, and it is never merged into a navigation-service health badge. The stale fix is labelled *last known*, not *current*, and no position is extrapolated beyond the reported measurement.
- **K64** — **Published coverage and a measured terminal connection are different categories of evidence, shown separately.** A provider's nominal coverage notice is not proof that a particular terminal is online, and throughput is never inferred from coverage geometry.
- **K65** — **Freshness policies are per source and independent.** At the scenario moment the positioning fix is stale and the communications reading is current, simultaneously — each judged against its own threshold. One healthy service never refreshes the timestamp or status of another.
- **K66** — **A source outage is not a service degradation.** When a provider feed fails, the interface marks the provider information unavailable or unknown with its last successful update, and never infers a satellite service outage, poor satellite health or a local terminal disconnection from a failed integration.
- **K67** — **A space weather advisory is a categorical published claim with a validity interval**, and local navigation degradation is not derived from it.

**Imagery**

- **K68** — **Imagery discovery combines mapped coverage footprints with a searchable metadata catalogue, and the chronological browser sits inside the viewer rather than at the product entry.** A chronological gallery favours recency; footprints alone become illegible where acquisitions overlap. A geographic start with metadata refinement matches how imagery relevance is actually established. **The accepted cost: overlap handling, filtering and partial-coverage explanation all get more complex.**
- **K69** — **Newest is never a synonym for best or usable.** Acquisition time, resolution, sensor modality, cloud applicability, coverage and access are preserved as independent properties, and the interface does not rank by recency.
- **K70** — **Catalogue metadata, permission, preview and full asset retrieval are four separate states that fail separately.** A record whose preview will not load keeps its identity and metadata, with the preview failure named and a retry offered only where retry could actually succeed. A restricted record keeps whatever metadata permission allows and is never labelled missing or presented as a network fault. **A single binary *available* label was the rejected alternative: simple, and it conflates the presence of metadata with access to the asset.**
- **K71** — **Footprint coverage is evaluated geometrically against the selected area**, with the uncovered portion identified. A source-supplied coverage flag is not a substitute for geometry.
- **K72** — **A filter returning nothing says that nothing matches in the available set, not that no imagery exists.** Where the catalogue is cached because the feed is down, results are labelled as limited to locally held records.

**Connectivity, field and continuity**

- **K73** — **A dedicated field presentation, on shared semantics.** Three approaches were compared: a responsive collapse of the desktop layout, a map-first presentation showing one item at a time, and user-configured panels. Responsive collapse is cheaper and keeps complex controls too dense for field touch use, with essential freshness information liable to end up under a collapsed panel. User configuration supports individual specialisms and lets users hide significant information without noticing. The chosen direction prioritises map orientation, compact source status and a single expanded item, **on the same data meanings as the desktop**. The rule that governs it: *different operating conditions justify different arrangements, not different meanings*. **The accepted cost: a dedicated view increases delivery and validation effort.** Broad configuration was postponed until task patterns are understood.
- **K74** — **Field mode is not inferred from viewport width.** Screen width alone cannot determine task urgency or environmental difficulty.
- **K75** — **A compact view may not show a favourable value while hiding its qualifier.** Where a field record carries a consequential limitation, the limitation appears in the compact summary, with full detail through the inspector. A stale record is never simplified into a current one to save space.
- **K76** — **Three availability dimensions are exposed independently**: device connection, provider feed reachability, and locally cached content. An offline device does not prove provider failure; an online device does not guarantee provider reachability.
- **K77** — **Cached content keeps its original update time.** A cached map that renders is not thereby current, and its age is stated.
- **K78** — **Locally saved is not shared, and reconnection does not complete a synchronisation.** A local annotation is labelled saved on the device and not shared; restoring the connection moves it to queued or sending, and only an explicit server acknowledgment makes it shared. **An optimistic *shared* confirmation on reconnect was the rejected alternative — comforting, and potentially untrue.**
- **K79** — **Ambiguous synchronisation outcomes stay ambiguous.** Where an acknowledgment times out, the local change is preserved and the outcome shown as unknown or pending verification, with blind duplicate submission avoided. The interface does not claim success or definite failure when the server may have accepted the change.
- **K80** — **Concurrent edits are never silently merged or overwritten.** Both revisions are shown with their origin times and explicit resolution is required.
- **K81** — **A partial offline map cache shows its downloaded coverage and its gaps**, so that blank tiles are not read as real geographic absence.
- **K82** — **Losing the connection never clears the confirmed area.** A user does not have to redefine their area of interest because the network changed.

**Notifications**

- **K83** — **A notification centre as the base, with interruptive banners reserved for a tightly defined and separately authorised class of event.** Always-prominent banners guarantee visibility and create competing alerts that become background noise; map-anchored notices connect an event to its location and are missed when the event is outside the viewport. The chosen model keeps both as supporting mechanisms rather than as the delivery channel. **The accepted cost was named: severity rules cannot be settled without the operational context, which is why this decision is one of the nine conditional ones.**
- **K84** — **Acknowledgment is a local reading state and does not resolve anything.** Marking a notice read changes the notification's presentation and not the referenced data or the provider's status; an ongoing outage stays visible in System Status after its notification has been read.
- **K85** — **Repeated faults from one underlying event are grouped as one issue thread**, preserving first-seen and latest-update times, rather than multiplying interruptions and implying several independent outages.
- **K86** — **Events arriving out of order are ordered by source event time**, with received time identified separately, so a late older update does not become a new incident.

**Briefings and sharing**

- **K87** — **A live saved view and a frozen briefing are different artefacts and are chosen explicitly.** A single ambiguous *Save* would hide the distinction and let a past briefing change unexpectedly. The frozen snapshot preserves its capture context and its original record references including their observation times; later provider updates never rewrite it.
- **K88** — **A frozen briefing does not grant permanent entitlement.** Export rechecks current permissions, and restricted content is omitted or refused with a transparent explanation rather than embedded because it was accessible when the snapshot was taken. **The accepted cost was named: this may produce incomplete exports, and policy has to decide whether a partial export is permitted or the export should stop.**
- **K89** — **Inaccessible assets are never faked.** A briefing opened when a referenced asset is unavailable keeps the reference, the original timestamp and an explanation, and never substitutes another image. A thumbnail does not prove an accessible full asset.
- **K90** — **A failed export is not presented as a completed one.**

**Diagnostics and system status**

- **K91** — **System Status is a global utility, not a sixth primary destination**, with concise inline failure states in the affected workspace. A specialist inspection mode exposing raw diagnostics was deferred until a repeated specialist workflow is confirmed, on the grounds that a separate technical product should not be invented prematurely.
- **K92** — **Source health is scoped to the affected sources.** One provider failing does not produce a global degraded indicator or a whole-application failure screen; unaffected workspaces stay operable.
- **K93** — **System errors never invent operational conclusions.** A transport or access failure is reported as what it is, with what is still known from cache, and is never translated into a statement about adversaries, sensors or service status. The canonical worked example: do not say *no imagery exists*; say *the imagery feed cannot currently be refreshed; showing previously retrieved records*.
- **K94** — **Integration is through source-specific adapters that preserve original semantics** rather than normalising everything into one status. One common service score would simplify development and charts and erase the differences that matter.

### A3.7 Decision governance as a deliverable

- **K95** — **The 25 decisions carry a status vocabulary that is deliberately precise.** *Recommended* means the direction is internally coherent with the journeys and behaviour rules and still requires product-owner acceptance and validation. *Conditional* means the approach is preferred but a named external dependency — hardware, data access, security policy, a domain definition — could change it. **Neither means approved, implemented or validated with end users, and the register says so in those words.**
- **K96** — **The nine conditional decisions are concentrated where the external unknowns are**, not scattered: the meaning of an overflight, receiver measurement interfaces, terminal and coverage data, interruption policy, field hardware, offline storage and sync authority, integration semantics, and export rights. The sixteen recommended decisions are the ones the design package could settle on its own evidence.
- **K97** — **The register names a decision priority**, and it is not the obvious one: security and permissions, provider semantics, scope boundaries, the meaning of overflight and the definition of an urgent alert all have higher consequence than the choice of any particular screen layout, and should be settled before visual refinement creates false expectations.
- **K98** — **A change-control rule was specified and applies across artefacts.** If a technical fact or an observed behaviour contradicts a direction, its status and reasoning are updated and every linked journey, behaviour rule and exception screen is revised in the same change. Modifying the visual prototype while leaving the specification inconsistent is defined as a documentation defect. A superseded decision gets a new record rather than a silent overwrite.
- **K99** — **Verification was specified without being claimed.** Five suites, eight regression checks and nine architecture acceptance scenarios were written as executable checks, each with a pass condition stated as observable behaviour rather than preference — and each explicitly recorded as *not yet executed*, with the evidence a future execution would have to capture: build and fixture version, reviewer, date, device, initial and final state, observed incorrect interpretations, pass or fail, and any unresolved limitation.

---

## A4. Evidence calibration — mandatory

**K1–K25 are engagement record and may be stated plainly, but they are not outcomes.** "47 screens were delivered" is a fact; "47 screens transformed the product" is not. The same applies to the 103 components, the 61 rules, the 40 edge cases and the 25 decisions. They describe the work, not its effect.

**K8 — the board greenlight — is the strongest outcome-adjacent fact in this engagement, and it is a client decision, not a validation.** Required framing:

> The exploration phase ended at a board review. Creative Navy put twelve working decisions and a recommended development sequence to KISPE's board, with a recommendation to proceed conditionally. The board endorsed the architecture as the working direction, approved a staged scope with explicit decision gates for the uncertain features, and authorised the seven-sprint UX development phase.

Three things must not be attached to it. **It is not user validation** — a board endorsing a direction and a representative user confirming it are different kinds of evidence, and this engagement has only the first. **It is not an outcome** — it is a commissioning decision. And **do not describe the decisions as approved requirements**: the register's own language is that endorsement authorises detailed design against a direction while retaining the right to modify or reject individual solutions after operational and technical validation.

**The commercial arc is real and may be stated.** A four-sprint consultative exploration converted into a twelve-sprint design programme, at a board gate the exploration phase was explicitly designed to reach. That progression is itself evidence of what the exploration produced, and it should be stated plainly in the same terms the industrial engagement's land-and-expand arc is.

**K25 — "the product was built" — has a hard ceiling, and this is the most important calibration rule in this document.** Required framing:

> The product was built. Creative Navy did not support the build and has not compared the built interface against the delivered designs.

Never write "shipped as designed", "ships as the design that was delivered", or any phrasing that implies a verified design-fidelity comparison. **AIT, the MDU and Assemblio each carry exactly such a comparison and it is Creative Navy-verified in all three cases. This engagement does not have one.** The three prohibitions that attach to those claims attach here with more force: nothing about the built product's performance, reception, adoption or commercial result; no causal claim; and no implication that being built is evidence the design is good.

**K26 must appear in the case study, not be quietly omitted.** This engagement contains no user research and no usability testing. The honest statement is that the design was reasoned from the client's own concept material and partner brief, benchmarking of three competing systems, published domain and standards material, and structured expert analysis against a deliberately adversarial scenario — and that it was not validated with field commanders, operations staff or specialist support personnel at any point. Omitting this would misrepresent the engagement and break the corpus's own evidence standards.

**This is now the fourth engagement in the corpus with that property** — AIT, the MDU, Assemblio and KISPE. `corpus-integration-brief.md` already records that the first three "are now a visible pattern in the corpus and the evidence-standards pages should say so". A fourth makes that overdue rather than optional. See Part B.

**K27 must be stated wherever the field interface is discussed.** The field presentation is a design proposal whose touch dimensions, legibility and glove behaviour require evaluation on real devices, and that evaluation did not happen. Describe what was designed and why; never imply the field interface was proven in field conditions.

**K7 is a count without content.** Three competing systems were benchmarked and may not be named. Do not describe what they did, do not characterise the competitive field, and do not infer a competitive vector from the benchmark. If a competitive argument is wanted, build it from K43–K94 — what this product does that the category does not — not from the benchmark.

**K29 governs every count in the study.** The option-space evidence is K5 and K12 and nothing else. Do not estimate a variant count for the 47 screens, and do not let Streetec's nine main-screen iterations, the MDU's counts or Assemblio's three navigation architectures migrate here.

**K41 is a synthetic scenario and must be described as one.** The imagery records, device readings, coverage notices and advisories are a designed test fixture, not observations. They never represent a real location, operation, satellite or advisory. Describing them as a method decision (K40) is correct and is one of the stronger things in the study; describing them as data is false.

**K37 is a product boundary and must be stated as a design decision, not as a disclaimer.** The product does not infer adversary presence or recommend action because that boundary was argued, decided, recorded with an owner, and enforced by a behavioural rule — not because the engagement ran out of time.

**The external research in §A8 frames the category, not this product.** No standard named there was certified to, audited against or worked to; no study cited there measured this product. Any phrasing implying otherwise is false.

### What must not be claimed

- Any operational, mission, decision-quality, time-saving, error-rate or workload figure. Nothing was measured.
- Any usability or comprehension result. Nothing was tested with users.
- Any field research, persona research, operator interview or contextual inquiry.
- Any deployment, operational use, or use by military or government personnel.
- Any security, classification or accreditation credential. Caching, export and handling policy were identified as open questions owed by a security owner; Creative Navy did not set, audit or certify to any of them.
- Any claim that the design was validated on representative hardware, or in field lighting, glove or movement conditions.
- Any characterisation of the three benchmarked systems, or of the competitive field derived from them.
- Any suggestion that the product performs adversary detection, classification, tracking or targeting — this is precisely what K37 excludes, and asserting it would both be false and misrepresent the engagement.
- Any shipped-as-designed or design-fidelity claim (see K30).

---

## A5. Positioning — the angles worth leading with

### A5.1 An interface designed to prevent false inference — lead with this

The product shows satellite imagery, orbital predictions, receiver measurements, provider notices and weather forecasts on one map. Those are five different kinds of evidence with different clocks, different authorities and different ways of failing — and rendering them together is an invitation to read them as one synchronised truth. **The engagement's central design problem was not fitting more services onto a screen. It was keeping location, time, evidence type and availability separable as people move between tasks and devices.**

Almost every decision falls out of that, and the decisions are unusual because of it:

- Status became **seven independent dimensions** rather than one health scale, because one green-to-red score would make identical colours carry conflicting meanings across domains (K55).
- The temporal perspective was **forbidden from rewriting any record's own times** — a framing aid, explicitly not a claim that independent feeds describe one moment (K49, K50).
- A predicted overflight is shown as an **opportunity with collection unconfirmed and delivery unknown**, never linked to an imagery asset that does not exist (K62).
- Published coverage and a measured terminal connection are kept **visibly separate**, because coverage geometry does not establish throughput (K64).
- *Not applicable* and *not reported* are **different labels**, and neither renders as zero (K60).
- A provider feed being unreachable is reported as **a feed being unreachable**, never as a satellite service being degraded (K66, K93).

Each of those gives up something that would be simpler, prettier or faster to build, in order to keep a distinction that matters. That is **tension-driven reasoning** and **constraint respecting** applied to epistemics rather than to hardware, and there is nothing else like it in the corpus.

**The domain's own standards already encode the principle, which is the strongest available support.** Military symbology has carried *Unknown* and *Pending* as standard identities distinct from *Hostile* for three decades — yellow frame, not red. The discipline this engagement applies to data provenance is the discipline the domain already applies to entity identity; it had simply never been applied to where the information came from and how old it is. See §A8.1.

### A5.2 The rejected alternative is recorded every time, with what was good about it

Twenty-five decisions, each carrying a credible alternative **and the value of that alternative**, the reasoning for the choice, **the accepted trade-off**, and the condition that would reverse it (K15). This is unusual enough to be an angle on its own, and it is the clearest instance in the corpus of what the method pages mean by documenting trade-off logic.

The accepted costs are the part worth quoting in substance, because they are not flattering. Shared state is more complex. The persistent header costs pixels on a compact device. A confirmed area adds friction and is hard to edit on touch. *Current* can still be misread as *live*. Users may never open the caveats. Modality-aware metadata makes filters more complex. Export rechecks may produce incomplete exports. A dedicated field view costs more to build and validate.

**A design record that names what its own choices cost is a different object from one that argues it was right.** This connects directly to `/evidence/how-we-work-with-evidence/deliverable-format-follows-purpose` and to the buying pages.

### A5.3 Sixteen decisions recommended, nine conditional — and the nine are honest

The register separates what the design could settle from what it could not (K15, K95, K96). The nine conditional decisions cluster exactly where the external unknowns are: what an overflight is for, what a receiver will actually report, what a terminal exposes, which events may interrupt an operator, what hardware exists, what may be stored locally, who resolves a sync conflict, what the feeds actually provide, and who may export what.

**Each conditional decision names an owner role and a question, and eight dependency gates group them** (K16). Then the register states a priority that cuts against the grain of how design work is usually presented: security and permissions, provider semantics, the scope boundary, the meaning of overflight and the definition of an urgent alert matter more than any screen layout, and should be settled before visual refinement creates false expectations (K97).

**This is the engagement's answer to its own weakest axis.** It did not have user validation (K26) and it did not claim any. It specified precisely what validation would have to prove, who owed each answer, and what observation would change each decision. For a case study that must disclose an absence, this is the strongest possible way to disclose it — and it is true.

### A5.4 One scenario, every document

A single synthetic scenario with a fixed clock, used by every artefact in the chain (K40, K41). Six journeys, 61 behavioural rules, four interaction studies, 40 edge cases and twelve plates all refer to the same area, the same five imagery records, the same stale positioning fix and the same failed feed.

Two things follow, and the second is the interesting one.

**It made the documents consistent.** Independent UX documents normally invent their own dates, sources and statuses, and diverge. Here a contradiction between two artefacts was visible immediately, because they were describing the same facts.

**It made the designs comparable, and the comparison honest.** Every one of the twelve interaction-study alternatives addressed the same task under the same conditions, so no alternative could be flattered by a favourable case (K12). And the scenario was built adversarial on purpose (K42): at the scenario moment the feed is down, the newest image will not render, the sharpest image covers only part of the area, one image is restricted, and the positioning fix is stale while the communications reading is current. **A design that only works on the happy path fails visibly against a fixture like that.**

### A5.5 Degradation specified as forty named conditions, not one offline banner

Forty edge cases, each with its input condition, its visible response, its recovery path and — the field that makes the catalogue distinctive — **the misinterpretation it prevents** (K13).

The argument the catalogue makes is that a single global *Offline* banner cannot describe what is actually happening, because a source outage, cached content, an access restriction and a local unsent action have four separate lifecycles. The highest-risk cases are the composites, and they were specified as connected journeys rather than as isolated states: the area switched while the feed is unreachable; offline field use with a stale receiver fix; valid coverage while a terminal reading ages; a briefing reopened after entitlement changed; a new-imagery notice arriving while the imagery provider is down.

This is the strongest material in the corpus for `/capabilities/design-for-abnormal-and-degraded-scenarios` and `/practices/edge-case-and-degraded-mode-analysis`, and it is a better anchor than anything those pages currently hold.

### A5.6 A product boundary argued rather than assumed

The product does not infer adversary presence, classify threats, recommend action or replace command systems — and that is a recorded decision with an owner, a reasoning, a named alternative and a behavioural rule enforcing it (K37, K93). The alternative was named fairly: a larger tactical suite looks more commercially ambitious, and brings unverified workflows, integration and governance obligations with it.

Framed correctly this is not a limitation but the same argument the corpus already makes about meaningful human oversight of automation, in a setting where the consequences are operational. It connects the defence work to the AI and governance cluster rather than isolating it in a sector.

### A5.7 Exploration as a commissioning decision, not a discovery ritual

The engagement was structured so that detailed UX and UI scope was confirmed **at the end of exploration rather than at the start of the engagement** (K3), and exploration ended at a board review that greenlighted the architecture, the staged scope and the seven-sprint development phase (K8).

That is worth stating plainly for two reasons. It is the commercial arc — four consultative sprints converting into twelve. And it is a worked example of what the buying pages argue: a client who does not yet know what they want should buy the analysis that tells them, with a decision gate at the end, rather than a feature backlog agreed before anyone understood the problem. KISPE's own brief asked for advice as well as design and named six questions it wanted resolved (K36); the engagement was shaped to answer those questions and then let the client decide.

---

## A6. Classification and filing

```
## Classification

- **Primary case-study category:** /evidence/case-studies/defence-and-space
- **Primary context:** /contexts/defence-and-space-systems
- **Also-relevant contexts:** /contexts/high-consequence-environments, /contexts/multi-stakeholder-operational-environments, /contexts/expert-tools-and-internal-systems
- **Connects to:** /situations/complexity/system-state-is-hard-to-understand, /situations/complexity/abnormal-conditions-break-the-interface, /situations/risk-and-consequence/delayed-understanding-creates-risk, /situations/risk-and-consequence/the-system-supports-procedure-but-not-judgment, /situations/delivery-and-execution/the-team-is-shipping-without-a-clear-behaviour-model, /failures/interpretation-failures/data-is-available-but-hard-to-interpret, /failures/interpretation-failures/users-see-information-but-cannot-judge-what-matters, /failures/state-visibility-failures/users-cannot-see-what-state-the-system-is-in, /failures/error-and-recovery-failures/edge-cases-break-the-system, /failures/error-and-recovery-failures/rare-scenarios-have-poor-interaction-support, /failures/governance-and-behaviour-failures/product-behaviour-cannot-be-explained-or-reviewed-cleanly, /failures/governance-and-behaviour-failures/good-behaviour-is-not-defined-explicitly, /capabilities/design-for-abnormal-and-degraded-scenarios, /capabilities/state-and-status-visibility-design, /capabilities/information-architecture-for-expert-systems, /practices/edge-case-and-degraded-mode-analysis, /practices/state-and-transition-review, /practices/behavioural-requirements-definition, /practices/decision-boundary-design
```

> **Four slugs were tested against the live pages and rejected; the reasoning matters because each is an obvious-looking fit.** `/situations/ai-and-automation/uncertainty-is-hidden-at-the-point-of-decision` and `/situations/ai-and-automation/users-trust-the-ai-too-much` are both scoped to *model* confidence — the second says in terms that the pattern "would not arise in a non-AI system because non-AI systems do not produce recommendations that users calibrate trust against." KISPE has no model and makes no recommendations. `/failures/interpretation-failures/uncertainty-is-not-communicated-usefully` states outright that it "concerns AI-specific uncertainty". And `/capabilities/ux-audit-for-complex-products` is wrong because **no audit was performed**: the exploration phase analysed the client's own early concept screens, which is not an expert review of a running system. That is the Assemblio trap in a new costume, and the answer is the same one.

**Structural additions required — this is the largest structural change of any study in the set.**

- **`/evidence/case-studies/defence-and-space`** — a new case-study category. No defence or space category exists.
- **`/contexts/defence-and-space-systems`** — a new context page. None of the existing thirteen context pages fits.

**Both trigger the context-change protocol**: `python3 Guidance-meta-layer/lint_case_studies.py <repo>` must be re-run across the entire corpus within the same change set, before commit. New entries are also required in `Content-registry/content-registry.json` for the case study and the context page, following the existing schema (`source_file`, `title`, `slug`, `category`, `parent_slug`, `related_slugs`, `article_type`, `priority`, `generation_status`).

**On the primary context, and why a sector-shaped page is the right answer here.** The tagging convention chooses primary context by dominant design challenge rather than industry, and on a strict reading the load-bearing challenge is multi-source information trust, which would argue for a challenge-shaped page. **The recommendation is the sector page anyway, and the precedent is explicit:** `/contexts/government-and-public-sector` was created for WCO/IPM and `/contexts/retail-operations` for the Swiss forecourt engagement, both becoming their study's primary context. A new domain with no existing home needs somewhere for its authority to accumulate, and the standards vocabulary in §A8 — symbology, imagery catalogue interoperability, geospatial metadata and lineage, positioning service performance, space weather scales — is sector vocabulary that belongs on a sector page.

> **One judgement call for the engagement lead.** The alternative is a challenge-shaped page — `/contexts/geospatial-and-situational-awareness-systems` or similar — carrying the provenance-and-uncertainty argument, with defence as also-relevant. It is defensible and it loses on two grounds: it has one engagement behind it and no standards regime of its own, and it would leave the corpus with a defence case study and no defence domain page, which is the gap §6.9 of the corpus brief has been recording all along. Decide it once, with the page outline in front of you; the decision changes nothing else in this brief.
>
> **Gate warning.** The rejected alternative is named above as a slug for the lead's benefit. **It must not survive into the published notes file.** `lint_case_studies.py` resolves every `/contexts/` reference anywhere in a case-study file against the filesystem, so a slug for a page that was considered and not created fails the gate — and it fails it on CHECK B, which runs regardless of whether the Classification block is correct.

**Why not an existing category.** `/evidence/case-studies/government` holds WCO/IPM, whose characteristic challenge is adoption density across 100+ administrations — a different problem, and filing a defence information product there would erode a category definition the tagging convention exists to protect. `/contexts/high-consequence-environments` is right as also-relevant and wrong as primary: it is the consequence class, not the design challenge.

**On outcomes pages.** This engagement populates **no** `/evidence/outcomes` page. Those pages require a grounded, specific result with its evidential basis stated, and nothing was measured. K8 is a commissioning decision, not an outcome. K25 is a build, not a result.

**On evidence-standards pages.** K8 belongs in `what-is-client-reported` only if that page is willing to hold a client decision rather than a client claim about results — otherwise it belongs in the case study alone. K26 and K27 belong in `what-we-do-not-claim`. **K25 has no home**, and that is open item 24 in the corpus brief arriving for the sixth time: the corpus has no evidence-standards page for verified-but-not-measured claims, and this engagement adds a weaker variant — *stated-but-not-verified*. See Part B.

**Phase mapping — four of five phases are claimable, and the fourth is unusually strong.**

- **Sandbox Experiments** — the four exploration sprints. Twelve challenges, 36 alternatives, 64 frames, three competing systems benchmarked, and option space mapping at the architectural level before any structure was committed to (K4–K7).
- **Concept Convergence** — exploration sprint four and the architecture work. Consolidation into one coherent model, consistency checking across representative flows, the six design principles, the twelve working decisions, and the board gate (K6, K8, K38, K43–K49).
- **Iterative System Building** — the seven UX development sprints and the five UI delivery sprints. Journeys, behavioural rules, interaction studies, edge cases, then 47 production screens across field and desktop (K9–K14, K21).
- **Organizational Integration** — the design system of 103 components, the documentation, the handoff package, and **the traceability apparatus itself** (K22–K24, K98). This is the clearest instance in the corpus of what the method page means by a design system as reasoning documentation rather than a component library: cross-referenced identifiers across six artefacts, a change-control rule that treats an un-propagated revision as a documentation defect, and machine-readable contracts so the specification loads deterministically instead of being read and interpreted.
- **Implementation Partnership — not claimable** (K30). Creative Navy did not support the build. Say so.

---

## A7. Suggested structure for the case study

1. **Opening** — locked agency sentence; KISPE and what a common space operating picture is, in two sentences; the three user populations and the two operating contexts; the sixteen-sprint shape in three phases.
2. **What the product actually has to do** — bring imagery, orbital predictions, device measurements, provider notices and forecasts into one geographic view for three populations with different needs; and the boundary that was drawn around it (K32–K37).
3. **The problem that shapes everything** — §A5.1. Five kinds of evidence, five clocks, one map. Lead the section with it.
4. **Exploration** — twelve challenges, 36 alternatives, 64 frames, and the counting convention that makes the number honest (K4–K6). Pick three challenges and show the alternatives properly: product organisation, time, and information quality. End on the board gate (K8) with its §A4 framing.
5. **The scenario** — §A5.4. One fixture, every document, built adversarial on purpose. This section explains why everything that follows is checkable.
6. **The decisions** — the seven status dimensions as the centrepiece (K55, K56), then time (K49–K54), then services (K61–K67), then imagery (K68–K72). Keep the rejected alternatives and the accepted costs in the prose; they are the point.
7. **The field interface** — §A5.1's rule applied to a device: different arrangements, not different meanings (K73–K75). Carry K27 in the same section, not in a footnote.
8. **Degraded states** — §A5.5. Forty conditions, the five principles (K39), and the composites. The local annotation that is never reported as shared (K78–K80) is the best single unit.
9. **What was recommended, what was conditional** — §A5.3. Sixteen and nine, the owner roles, the dependency gates, and the decision priority that puts security and semantics above layout (K95–K97).
10. **Delivery and handover** — 47 screens across field and desktop, 103 components, the documentation, and the traceability apparatus as the Organizational Integration artefact (K21–K24, K98).
11. **Evidence and limits** — the engagement record; K8 with its full §A4 framing; K25 with its ceiling; and an explicit statement of K26 and K27 — no user research, no usability testing, nothing validated on representative hardware — followed by K99, which is the honest counterweight: the engagement specified exactly what validation would have to prove and who owed each answer.

**One writing note.** The source material is dense with identifiers — workspace, journey, rule, decision and exception codes. **They are the citation handles for this brief and must not appear in the case study.** Write the behaviours in prose. A reader should never encounter a code.

---

## A8. Domain framing and external research

**Creative Navy did not certify to, audit against, or work to any standard named here.** These establish that the writer understands the domain. Any phrasing implying compliance work is false. Equally, none of the sources below measured this product; they describe the category it enters.

### A8.1 The strongest external frame — the domain already encodes the principle

**Military symbology has distinguished *unknown* from *hostile* for three decades.** Under NATO's APP-6 joint military symbology and the US MIL-STD-2525 family, standard identity is a formal field with *pending* and *unknown* as distinct values, carried by a yellow frame, visually separate from the red frame used for hostile. An unknown contact is not a threat; it is an unresolved identification, and the standard makes a reader see the difference at a glance.

This is the sharpest available support for the engagement's central principle, and it should be used to reframe the argument. **Creative Navy did not invent "unknown is not adverse". It applied a discipline the domain has encoded in its symbology since the mid-1990s to a place the domain had not applied it: data provenance, source reachability and information age.** A map that is rigorous about whether a contact is a friend and careless about whether a reading is two minutes or two hours old is only half-disciplined. That is the case study's best single sentence and it is defensible.

It also connects to the product boundary: the open question about which symbols and objects are supplied by authorised source systems (K16, K37) is a question about exactly this standard.

**Sources:** [NATO Joint Military Symbology](https://en.wikipedia.org/wiki/NATO_Joint_Military_Symbology) · [MIL-STD-2525C](https://worldwind.arc.nasa.gov/milstd2525c/Mil-STD-2525C.pdf) · [MIL-STD-2525 original](https://nps.edu/documents/104517539/109705106/MIL-STD-2525.PDF/87529131-72ce-44a7-91fb-b6c05381f7a4)

### A8.2 The positioning-accuracy distinction is in the governing standard

The GPS Standard Positioning Service Performance Standard is explicit that its accuracy figures describe **signal-in-space** performance and **do not include receiver contributions** to the error budget — ionosphere, troposphere, receiver noise, multipath and interference are all excluded. Signal-in-space global horizontal accuracy is specified at ≤8 m at 95%; SPS *user* performance in the same document is ≤100 m horizontal.

So the rule that a receiver-reported accuracy figure must never be presented as a statement about navigation-service quality (K63) is not a designer's scruple. **The standard that defines the service says the two are different quantities, measured differently, and that one does not substitute for the other.** This is the best available support for K55 and K63, and it is checkable by anyone.

**Sources:** [GPS SPS Performance Standard (2020)](https://www.gps.gov/sites/default/files/2025-07/2020-SPS-performance-standard.pdf) · [GPS accuracy](https://archive.gps.gov/systems/gps/performance/accuracy/)

### A8.3 Standards vocabulary for the case study and the new context page

- **OGC STAC (SpatioTemporal Asset Catalog)** and **OGC API – Features** — the interoperability standards for imagery catalogue metadata, footprints, acquisition times and asset links. STAC's own data model separates the *item* (metadata) from its *assets* (the files), which is the structural basis for K70's four-state separation. Use it to show that the distinction is a property of how imagery catalogues actually work, not an interface nicety.
- **ISO 19115** (geographic information — metadata) and **ISO 19157** (geographic information — data quality). These are the canonical standards for lineage, provenance and quality elements in geospatial data, and they are the formal vocabulary for what this engagement calls source and time semantics. **No page in the corpus currently names them** and the new context page should.
- **W3C PROV** — the provenance data model, for the argument that provenance is a first-class object rather than a tooltip.
- **RFC 3339 / ISO 8601** — unambiguous UTC timestamp representation, which K52 uses directly.
- **NOAA Space Weather Prediction Center G, S and R scales** — geomagnetic storm, solar radiation and radio blackout classifications. The advisory in the scenario is a G1. Useful for showing that a space weather advisory is a published categorical claim with a validity interval, not a local measurement (K67).
- **WCAG 2.2** — relevant specifically for focus visibility and the dragging-movements criterion, which is why area selection needed a non-dragging alternative (see K44's accepted cost). Naming the criterion is better than naming the standard.
- **STANAG 4559 (NATO Standard ISR Library Interface)** — for imagery library interoperability in a defence context. Worth verifying current edition before use.
- **DEF STAN 00-250** and **JSP 912** — UK MoD human factors integration standard and policy. The natural human-factors anchor for a UK defence context page. Verify current status before use.

### A8.4 Research worth doing before the context page is written

- **Uncertainty-visualisation research.** Deterministic construal error — the documented tendency to read probabilistic forecast products as deterministic predictions — and the hurricane cone-of-uncertainty literature. This would be the only **externally measured** evidence available to this case study, and it supports K49 and K62 directly: people do read forecast products as statements about what will happen. Verify the primary sources before citing.
- **NATO and joint doctrine on the common operational picture**, and space as a NATO operational domain. Establishes that "common space operating picture" is a deliberate play on an established doctrinal term rather than a coined product name — which matters for §A1.1's instruction not to treat it as a brand.
- **Commercial remote-sensing licensing** — resolution limits, distribution restrictions and the mechanisms by which rights to imagery can change after acquisition. This is the regulatory reality behind K88 and the revoked-entitlement edge case, and it would turn a plausible-sounding edge case into a documented one.

### A8.5 Verify before using

- **Any claim about what defence or intelligence users actually do.** This engagement has no user research (K26) and the corpus must not borrow authority it did not earn. Domain description must come from published doctrine and standards, attributed as such.
- **STANAG 4559 and DEF STAN 00-250 editions and current status.** Both are cited from general knowledge rather than verified here.
- **Anything about KISPE beyond K31.** Company history, programmes, size and personnel are publicly documented and are **not** usable: the dates rule and §A1.1 both bite.

---

## A9. Style and lexicon compliance

Non-negotiable items from the writing guide:

- **Open with the locked agency sentence**, verbatim, on first introduction.
- **Attribute the method on first use in every self-contained section**: "Creative Navy's Critical Systems Design method", thereafter "Critical Systems Design" within that section. Never "the method", "our approach" or "the framework" as the primary reference in a section that has not yet named it.
- **Never use "the agency", "the consultancy" or "we"** as the primary identifier in a passage that must stand alone when retrieved.
- **British spelling**, except the phase name *Organizational Integration*.
- **Sprint = cadence (one week here). Phase = a stage of the method.** Never equate them. "Sixteen one-week sprints" is correct; "the UX phase" as a method phase is not — and note that this engagement has a genuine collision, because its three *project* phases (exploration, UX development, UI delivery) are not method phases. **Always qualify: "the exploration phase of the project", "the five UI delivery sprints".** Never a bare "phase" where a reader could take it for one of the five.
- **Name the phases.** Four of five are claimable (§A6). Implementation Partnership is not — say so rather than leaving it unmentioned.
- **Use at least three of the five core requirements**: evidence-aware thinking, multi-perspective synthesis, lateral exploration, tension-driven reasoning, organic system building.
- **Proprietary vocabulary used accurately in context, not defined.** Natural fits: *option space mapping* (K5, K12 — this is the second-best-evidenced instance in the corpus), *tension-driven reasoning* (K49, K55, K73 — every decision trading one good thing for another), *constraint respecting* (K43, K44, K73), *progressive specification* (K98, the change-control rule), *performance in reality* (K42, the adversarial fixture), *competitive vector* (§A5.1, attributed and in context), *domain learning* (K7 and the standards work), *organic system building* (the artefact chain).
- **Declarative openings**, canonical terminology, no metaphor on sections that will be retrieved for task queries.
- **Every section must stand alone** as a retrieved chunk.
- **No identifiers in the published prose** (§A7).
- **No quotation marks anywhere** (§A1.1).

---

## A10. Open items

1. **Was the built interface ever compared against the delivered designs?** If yes, this becomes an AIT-class verified design-fidelity claim and is immediately the strongest fact in the engagement, requiring its own §A4 framing. If no, K30 stands as written. **Write to K30 until the engagement lead says otherwise** — the conservative version is the supportable one.
2. **The versioned screens are uncounted** (K21). "47 base screens, several with versions" is what is recorded. Do not convert this into a total, and do not estimate how many versions. If a figure exists it would strengthen the delivery section; if not, 47 base screens is the number.
3. **The field and desktop split within the 47 screens is not recorded.** Both were produced to production fidelity (K21); how the 47 divide between them is not known. Do not estimate.
4. **The three benchmarked systems are not disclosable and their findings are not recorded** (K7). The benchmark is a count only. If a comparison record exists, it would support a competitive-vector argument that currently has to be built from the design decisions instead.
5. **The seven UX development sprints have no recorded sprint-by-sprint shape**, unlike the four exploration sprints (K6). The artefacts they produced are fully documented; the order in which they were produced is not. Describe the outputs; do not reconstruct a sprint sequence.
6. **The five UI delivery sprints have no recorded discussion at all.** The screens, the design system and the handoff package are evidenced (K21–K23); no record exists of how the visual direction, the component set or the accessibility decisions were made. **Describe what was delivered; do not reconstruct reasoning.** This is the same open item as AIT's, and the same answer applies.
7. **One arithmetic inconsistency exists in the source material and the writer must not propagate it.** The communications terminal reading is described in one place as 47 seconds old and in two others as 17 seconds old. **17 is correct** — it follows from the measurement time and the scenario clock, and it is the figure the behavioural rules and the freshness comparison both use. Use 17, or better, use the interval form in §A3.5 and avoid the number entirely.
8. **Team composition across the three project phases is not recorded.** Six people are confirmed (K2); whether the composition shifted between exploration, UX development and UI delivery is not. State the team once and do not allocate roles to phases.
9. **Whether the board endorsement extended to the UI delivery phase is not recorded.** K8 covers the architecture, the staged scope and the seven-sprint UX phase explicitly. The five UI sprints ran, so they were commissioned; whether at the same gate or a later one is not known. **Write K8 to what it covers** and do not extend it.
10. **No handling constraint beyond naming has been confirmed.** The engagement lead has cleared use of the information and the KISPE name. If an export-control, classification or end-customer constraint applies to the subject matter rather than to the name, it has not been raised and should be confirmed before publication.

---

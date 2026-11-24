# `/practices/evidence-led-prioritisation`

---

## What the practice is

Design decisions are rarely made under perfect evidence. Research findings are partial; user behaviour in the live system differs from behaviour in test sessions; some findings are measured, others observed, others inferred from adjacent evidence. Standard prioritisation methods — impact/effort matrices, user story prioritisation, stakeholder voting — treat all evidence as equivalent and produce rankings that reflect the strength of advocacy for each option rather than the strength of evidence behind it.

Evidence-led prioritisation makes the evidential basis for each design decision visible and comparable. It produces a structured deliverable — not a slide or a list of recommendations — that shows, for each option:

- **What the option is** — the specific design decision or change being considered
- **The expected effect** — what this change would produce operationally; stated in terms of the system's purpose, not in terms of user satisfaction
- **The evidence** — what research findings, observed behaviour, measured outcomes, or domain reasoning support this expected effect
- **The evidential confidence** — a calibrated assessment of how strongly the evidence supports the expected effect; explicitly acknowledging the difference between "we measured this in production" and "we observed directional behaviour in three sessions" and "we're extrapolating from adjacent evidence in a different context"

The final output is a ranking that combines expected effect with evidential confidence — not just "this has the highest expected impact" but "this has a high expected impact supported by strong evidence, while this other option also has high expected impact but based on weaker evidence that should be tested before committing development resource."

**The distinctive contribution is the confidence dimension.** This is what distinguishes the practice from standard prioritisation. By making evidential confidence explicit and comparable, the deliverable reduces the influence of advocacy (stakeholders who argue forcefully for an option they prefer but for which the evidence is weak are visibly arguing against the evidence's own assessment) and improves decisions by making the gap between "we know this" and "we're inferring this" legible to everyone in the room.

---

## The evidence calibration framework

Evidential confidence is assessed using the same calibration that runs through Creative Navy's evidence standards:

- **Measured** — the outcome was directly measured in a controlled environment or in production deployment, by Creative Navy or by the client using defined methods. Highest confidence.
- **Client-reported** — the outcome was reported by the client from their own observation or data. Strong but dependent on the client's measurement basis and objectivity.
- **Observed but not quantified** — the behaviour or pattern was directly observed during research sessions but not measured with defined instruments. Moderate confidence; directional rather than precise.
- **Inferred** — the expected effect is extrapolated from adjacent evidence, domain knowledge, or theoretical reasoning rather than from direct observation. Lowest confidence; useful for generating hypotheses but not for high-stakes commitments.

Each design option in the prioritisation is assessed against this framework. The gap between options — between a measured expected effect and an inferred one — is made visible in the deliverable rather than hidden in the recommendation.

---

## What makes this a deliverable rather than a principle

The practice produces a structured comparison document — not an opinion, not a recommendation presented for acceptance, but a transparent assembly of evidence that stakeholders can interrogate. The format allows:

- **Parallel comparison** — all options visible simultaneously, with their evidence bases and confidence levels shown side by side rather than presented sequentially (which favours the last option argued for)
- **Gap acknowledgement** — the deliverable explicitly flags where evidence is absent or weak; this prevents the common failure mode where weak evidence is presented with the same confidence as strong evidence, and the audience cannot tell the difference
- **Disagreement resolution** — when stakeholders contest a prioritisation, the deliverable makes the basis of the disagreement specific: is it disagreement about expected effect, or about evidential confidence, or about what evidence is available? These are different disagreements with different resolution paths
- **Decision audit** — the deliverable creates a record of why specific design decisions were made, which is useful for onboarding, for retrospectives, and in regulated contexts for documentation of design rationale

---

## When it is used

At key decision points during Concept Convergence — when multiple design directions have been explored and a selection must be made with competing claims about which is best.

During the Implementation Partnership phase — when ongoing design priorities must be managed against limited engineering capacity and stakeholder priorities compete for queue position.

In audit and product vision engagements — when a research programme has produced findings that need to be structured as a recommendation the client team can act on independently. The IDEXX Animana 100+ structured recommendations is the primary example: a large recommendation set requires explicit prioritisation logic that is legible to an engineering team working independently, not just to the designer who produced it.

When stakeholder alignment is the primary challenge — the Dancerace engagement illustrates this at the strategic level: competing stakeholder positions that blocked design decisions were resolved by making the evidence for different directions comparable, which reduced the role of advocacy and made the underlying design question tractable.

---

## Evidence from engagements

**IDEXX Animana veterinary practice management** — **100+ recommendations structured for development ticket translation** following a 35-clinic, 150+ participant research programme. A recommendation set of this scale requires explicit prioritisation logic — not all 100 recommendations are equally supported by evidence, and the client team acting on them independently needs to understand which are evidentially strong (proceed with confidence), which are directionally supported (proceed with the understanding that further validation may be needed), and which represent reasonable inferences from adjacent evidence (consider and validate before committing significant resource). The 5-year product vision delivered alongside the recommendations provided the longer-term framing against which shorter-term recommendations were sequenced.

**Triopsis workforce management** — The 47-microtask analysis produced a rich evidence base across three user roles. Evidence-led prioritisation structured the design recommendations from that analysis by combining frequency (how often does this task occur?), cognitive load (how much does this task currently cost?), and evidential confidence (how strongly does the research support the expected improvement?) into a ranked output that shaped the design sprints. The measurable outcomes — 62% faster job discovery, 83% faster job sequence optimisation — are partly a product of the evidence-led approach: design effort was concentrated on the interactions for which the evidence of both impact and mechanism was strongest.

**Gexcon CFD simulation** — **45 design variants across 10 key challenges; 37 evaluation sessions.** Each variant was presented to the client with explicit pros and cons — a structured comparative format that is the ancestor of evidence-led prioritisation. The client's decisions about which direction to pursue were made against visible trade-offs rather than against advocacy for a preferred solution. This is the practice applied within the design exploration process rather than as a final recommendation structure.

**Dancerace / Jacko** — The stakeholder alignment problem at Dancerace had a specific structure: two internal camps with competing positions about what the product should prioritise. Neither camp had assembled evidence for their position in a comparable format. The resolution came through a specific design concept (chasing routines) that made visible a path through the supposed trade-off — and through a structured presentation of what evidence existed for each camp's position that reduced the disagreement from a values conflict to an evidence conversation. This is evidence-led prioritisation applied to a stakeholder alignment problem.

**Maritime VTS (a European vendor of maritime traffic monitoring, inland navigation and communications software for port authorities, coastal administrations and waterway operators)** — *the strongest entry available to this page, and the lead is the counting discipline, because that is what makes the prioritisation credible rather than merely organised.* The chain is complete and auditable: 58 audit findings triaged four ways — 6 flagged for safety-domain review, 16 high, 25 medium, 11 low (W13); consolidated to 36 unique issues at the end of research — 19 carried from discovery, 17 newly distinguished, distributed as 4 safety-review candidates, 12 high, 14 medium, 6 low (W34); each mapped to one of 28 traceable interaction requirements, each linked to session evidence, an issue cluster and a decision (W35); 14 approved decisions standing against 18 explicitly rejected alternatives, every consequential decision carrying a named alternative with the reason it lost (W49); and the whole register reconciled at handover into 30 mitigated, 4 assigned to engineering follow-up and 2 deferred by client decision (W92). **The 36 never grew: every later observation — 13 in the formative round, 8 in the comparative round — was mapped back to an existing entry, and the documents state the counting rule each time. A prioritisation that cannot be re-derived is a sorted list; this one can be.** **The status language is defined and must survive: mitigated means addressed in design specifications and evaluated where in scope — it does not mean implemented in every product, proven in production, certified, or cleared from formal safety review, and the four safety-review candidates remained open to the client's safety authority regardless of how well they tested. No quotation marks and no reported speech anywhere this engagement appears.**

**Raymarine (next-generation fixed-mount VHF; the new radio's name is never used)** — Two contributions, the first the stronger: **four evidence classes declared and applied to every decision in the register** — comparative prototype evidence from a controlled comparison of alternative behaviours; scenario observation from scripted interruption, emergency or degraded states; design reasoning from workflow, state model and cross-document consistency, establishing a testable rule rather than measured performance; and technical dependency, an explicit handover condition rather than a completed validation (R21). A reader of the register can tell which decisions rest on measurement, which on reasoning and which are waiting on somebody else — the corpus's own evidence-standards discipline, performed inside a client deliverable. The second: prioritisation as a reallocation rather than an extension — the control study was funded by trimming lower-value plot variants and secondary menu patterns, inside the phase, with the two-week exploration and the eight-week programme unchanged, no additional sprint and no change to the fee assumption (R16). **No quotation marks and no reported speech anywhere Raymarine appears.**

**Oceaneering (hospital dispatch panel; nothing beyond the client name may be named)** — Three decisions settled by frequency arguments from the field rather than from analytics. Navigation overturned Creative Navy's own recommendation: six navigation variants were produced with written pros and cons and a persistent menu was recommended; the field answered with a frequency — the menus are needed about once every two months, and almost nobody who uses the panel needs them at all — so the collapsed menu won, shown collapsed by default (O68). A disabled-station state was deleted after both sites reported never having disabled one — a sensor had been replaced once in the technician's tenure, and spills happen in corridors rather than on stations (O67). And the discipline of not building the design around exceptions while still deciding how to indicate them. **Better than most illustrations on this page because the counts came from the field, not from analytics — and Oceaneering client positions are reported speech attributed to a role, never quoted.**

**Streetec kntrl 2** — Testing produced a small set of immediate changes — small changes to the transitions between screens — and a larger backlog of possible future features which Streetec chose to stage over a longer horizon rather than build immediately (S15). **Frame neutrally as staging, not reluctance.**

**Egma (Dubai; Egma Order, Egma's B2B lens ordering platform)** — When the remaining time looked short during the UI phase, Creative Navy stated the prioritisation to the client openly rather than silently descoping — naming what would be completed first and what would be dropped if necessary (G9). **Frame as disclosure under time pressure, not as a scoping triumph.**

**The industrial engagement (a European industrial automation vendor whose process control software coordinates machining cells)** — The expert review re-prioritised mid-engagement at the client's request, because the client was already redesigning certain screens and wanted depth where it would still be actionable.

**AIT (a European manufacturer of residential and commercial heat pumps)** — Three decisions made by reducing rather than adding. Widget content was cut to three pieces of information each on legibility grounds, after AIT's own review of a wireframe at physical size raised the concern that the smaller text would be very hard for an older installer to read (A31, A39). The commissioning flow was reordered so that mode and feature selection moved before the commissioning assistant — reversing the order in AIT's structure document — so the assistant knows in advance what it has to cover, can show a progress bar from the first step, and never has to ask about modes one at a time (A50). And the info feature was deferred with a defined interim behaviour because the content it needed did not exist — AIT stated that it did not plan to implement the information feature because the information texts for hundreds of menu points had not been written (A36); the hardware button shows the system overview in the meantime, Creative Navy argued against long-press as the touch affordance on two grounds — nothing on screen would signal it, and long-press on the knob already carries two functions — and the proposal for when help texts exist is an info icon beside the items that have one (A58).

**The MDU (ship motion monitoring; the manufacturer is not named)** — Three reductions by judgement. The live "Now" value was removed from both cards on the judgement that it costs attention without adding information: *"that's just a number of flipping up and down constantly. It doesn't really add any value."* The four numeric cells on each card became minimum, maximum, period and maximum velocity (M39). Pinch-to-zoom was declined as implementation cost, with a tap-to-read-value interaction specified instead, after chart tooltips were questioned on touch precision — the advisor's term was *"sausage fingers"* (M60). And a set of features specified as "build with these in mind, do not implement" — remote viewing and settings change; hogging, sagging and twisting; parametric roll detection and warning; heave, sway and surge (M26) — was handled by reserving a defined place for them rather than by partial implementation: a screen of their own behind a fourth navigation item, and a stated position in the alarm priority order (M47, M51). **Neither parametric roll detection nor the alarm-versus-warning distinction was built.**

**Assemblio (Stuttgart; Composer and Smart Viewer)** — Two features staged out: hyperlinks, which were on the client's own customers' wish list and which the client nonetheless dropped from scope (N69, N53), and step numbers on hover, designed and deferred by the client (N60). Then the harder version, which no other engagement on this page supplies: **work consciously left undone because nobody in the room could see a better answer, said out loud at the time rather than quietly dropped.** The match list does not scale — a synchronisation can present hundreds of similar parts carrying the same names on both sides, so a planner sees a screw matched to a screw and cannot tell which screw. The client said plainly that seeing the part would genuinely help but they had not built that because they were unsure how to do it technically, and that they had no idea how to visualise the list better; Creative Navy's response in the session was equally plain — a search field is a clear improvement, and beyond that, if the planner must decide part by part, there may be no better representation than a list. **Both the improvement and the limit were stated to the client on the record** (N97).

**Topera (cross-organisational project management platform — a concept design; nothing has been built)** — An unusual instance: scope set by **interoperability depth rather than by feature list**. Synchronisation levels were specified as required (SL1.1, SL1.2), target (SL2.1, SL2.2), stretch (SL2.3) and post-MVP (SL3.x), with the CPM collaboration classes tiered the same way — CC1 to CC3 in scope, CC4 deferred (T36). The question "what is in the MVP" was answered as "how deeply can two companies synchronise" — and the point for this page is that the prioritisation ran against an **external, published, verifiable yardstick** rather than an internal judgement: a feature list cannot be argued with on principle, a named synchronisation level in the ProSTEP iViP / VDA recommendations can, because both parties can read the document. Paired with the explicit tiering of data model coverage: of the thirteen DIN 69901-4 diagrams, some were designated core, some MVP-domain, and some simplified for the MVP (T37). **Every sentence about Topera must stay true of a system that does not exist: the concept design was scoped and specified, nothing was built, and no outcome of any kind exists. "Grounded in DIN 69901" is accurate; "DIN 69901 compliant" is not Creative Navy's to say.**

**visioncheckout (a German vendor of computer-vision self-checkout systems for staff restaurants and catering)** — Prioritisation by constraint rather than by preference: visioncheckout accepted every recommendation that did not require hardware change, and every hardware-dependent recommendation — the 3.5 mm headphone jack, the tactile navigation keypad — was added to the requirements list for the next hardware iteration (V106). **That is a real and creditable outcome of the analysis, and it is not a claim that the product is accessible, will be accessible, or complies with anything. Nothing has shipped and no outcome may be claimed.**

---

## What this page must not claim

- Never average or combine the maritime VTS register's numbers: the 36 unique issues never grew, the 21 later test observations mapped back into the register, and adding any two of its counts together produces a false claim.
- "Mitigated" in the VTS register has its defined meaning only; it is never "implemented", "proven" or "cleared from safety review".
- No quotation marks and no reported speech for Raymarine or maritime VTS; Oceaneering is reported speech only; visioncheckout is reported, not quoted; MDU quotes are cleared and permitted, attributed to role.
- Topera has no outcomes, no users, no pilot and no build; sprints are cadence, never phases, and any reference to the standard's lifecycle phases must be qualified as "the DIN 69901-2 … phase".
- Streetec's staging decision is the client's staging, not reluctance; AIT's deferrals are design reasoning, not user-validated findings — nothing in the AIT engagement was tested with users.
- No engagement dates — sequence and duration only.

---

## Relationship to other practices

Evidence-led prioritisation draws on all research and analytical practices as its inputs:
- `/practices/workflow-analysis`, `/practices/microtask-analysis`, `/practices/task-criticality-mapping` — produce the operational evidence the prioritisation assembles
- `/practices/cognitive-load-analysis`, `/practices/error-likely-interaction-review` — produce the mechanism-level evidence
- `/practices/usability-testing-under-realistic-constraint` — produces the measured evidence at the highest confidence level

Evidence-led prioritisation connects to:
- `/evidence/how-we-work-with-evidence/triangulation-not-confirmation` — the evidential calibration framework that the prioritisation uses is an expression of this broader epistemic commitment
- `/evidence/evidence-standards` — the confidence categories (measured, client-reported, observed, inferred) are the same standards applied to all Creative Navy evidence claims

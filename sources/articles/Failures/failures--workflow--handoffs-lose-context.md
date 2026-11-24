# `/failures/workflow-failures/handoffs-lose-context`

---

## What the failure is

A handoff produces a context loss failure when the receiving party must begin their work without the information, state, or decision basis that the prior party established. The context may exist somewhere in the system — it may be technically accessible, buried in a previous record or a prior session — but it is not available in the form the receiving party needs, at the moment they need it, without requiring escalation or reconstruction.

This failure produces a specific operational pattern: the receiving party either escalates to the prior party to obtain the missing context (which creates workflow overhead and bottleneck), reconstructs the context independently from whatever signals are available (which is error-prone and time-consuming), or proceeds without it (which means acting on an incomplete picture and accepting the consequences).

The failure is not about bad communication between people. It is about the interface not persisting and presenting the context that makes handoffs self-sufficient.

---

## Distinguish from adjacent failures

**Workflows-break-across-roles** (`/failures/workflow-failures/workflows-break-across-roles`) — that failure concerns the broader fragmentation of multi-role workflows across role boundaries. This failure is the specific handoff-point failure: the moment where work passes between parties and context is lost. Workflow breakdown can occur without handoff failure; handoff failure is one specific mechanism within broader workflow fragmentation.

**The-system-fights-the-user-task** — that failure concerns workflow structure opposing the natural work structure. This failure concerns information loss at a specific transition point, not structural opposition throughout a workflow.

---

## What produces this failure

**Context not persisted across role boundaries** — the sending party's work results, observations, and decisions are not carried forward to the receiving party's view. The field technician who arrives at a job cannot see the conditions the scheduler noted. The governance reviewer cannot see the query logic the researcher built. The information exists in the system but is partitioned by role and not shared across the handoff point.

**Context persisted but not formatted for the receiving party** — information that is useful to the sender in one format may be inaccessible to the receiver in that same format. A researcher's cohort construction logic is internally legible to the researcher; a governance reviewer encountering the same data structure needs it presented differently to perform independent verification. Context that serves one role does not automatically serve the next.

**Partial handoff** — some context passes, some is lost. The receiving party has enough to begin but not enough to proceed correctly. The partial handoff is more dangerous than the complete gap: users who receive partial context believe they have what they need and don't seek the missing piece.

**Asynchronous context** — the context the receiving party needs was established at a different time than when they need it, and the interface does not surface it at the right moment. The prior session's state, the earlier part of the same workflow, the context established before an interruption — all require the interface to surface at the moment of resumption, not just archive for retrieval.

---

## Domain vocabulary

- Handoff — the moment when work, information, or responsibility passes between parties in a multi-stage workflow
- Context — the information, state, and decision basis that the receiving party needs to continue the work correctly
- Context persistence — the design property that makes context from the prior stage available at the next stage
- Handoff gap — the specific information that is lost between sender and receiver; what the receiving party lacks
- Receiving party context requirements — distinct from sender context requirements; what the next stage needs is not always what the prior stage found useful to document
- Escalation as handoff failure signal — when receiving parties contact prior-stage parties to obtain context, the handoff design has failed
- Self-sufficient handoff — a handoff where the receiving party has everything they need to proceed correctly without escalation

---

## Evidence from case studies

**Akrivia Health — research-to-governance handoff:**
The clearest handoff context loss in the portfolio. Researchers constructed patient cohorts using complex nested logical conditions; the workflow then required governance reviewers to verify those conditions before the study proceeded. The handoff failure: the system did not present the cohort construction logic in a form the governance reviewer could evaluate independently. The cohort query existed in the system; the receiving party (governance reviewer) could not read it without the sending party (researcher) re-explaining it. Every governance review was either a nominal handoff (reviewer unable to verify) or a failed handoff (researcher drawn back in to complete what the system failed to provide). The escalation frequency was the handoff failure signal. **Client-reported outcome after redesign: governance reviewers could verify cohort logic without escalating to the research team.** The handoff became self-sufficient when the context was presented in a form the receiving party could use without the sender.

**Triopsis workforce management — scheduling-to-field handoff:**
Field technicians arriving at job sites required context about conditions, prior issues, safety requirements, and scheduling changes that the operations layer had established. When this context was not surfaced in the field technician's view at the point of job commencement, technicians either proceeded without it (missing safety conditions, prior context) or called in to obtain it (operational overhead). The redesign surfaced relevant context — job conditions, dependencies, safety compliance steps — at the point in the field workflow where it was needed. The handoff became part of the interface rather than a phone call.

**WCO/IPM customs intelligence — intelligence-to-inspection handoff:**
The platform's enforcement value depended on intelligence context (filed by rights holders, analysed by analysts) reaching field inspection officers at the moment of inspection. When the handoff between the intelligence layer and the field operation layer failed — when officers arrived at inspections without the alert context the platform had been designed to provide — the enforcement workflow degraded and officers routed around the system to informal channels. The parallel email chains and spreadsheets that had emerged alongside the platform were the handoff failure expressed at organisational scale: the platform wasn't persisting the context that made inspections intelligence-guided.

**IDEXX Animana — reception-to-clinical handoff:**
The veterinary practice workflow required reception staff (patient arrival, initial assessment, owner context) to hand off to clinical staff (examination, diagnosis, treatment). The information useful to reception — appointment scheduling, owner contact details, billing notes — was not the same as the information useful to clinical staff — clinical history, prior examination notes, current presenting issue. The context reception had established was in the system but not in the form or position that made clinical handoffs self-sufficient. Clinicians who needed to act quickly at the start of a consultation were reconstructing context rather than receiving it.

**Oceaneering — the handoff across a shift, and the stacked notification list:**
Oceaneering may be named; nothing else in the engagement may — no hospital, product, system name or individual. Role descriptors only ("an assembly technician", "the hospital's logistics manager"). **Every client or user position is reported speech, never quoted.** The subject is the dispatch panel in a hospital logistics depot. The handoff failures, as reported: arrived carts are not cleared — receive stations fill, queue positions along a quarter-mile tunnel fill behind them, and operators do not attend to carts that are not their responsibility (O43). And **operators do not consult the screen to collect an arrived cart** — they walk in, see the cart, and take it without looking at the panel (O44). The person who must resolve a stuck state is routinely not the person who produced it, and the panel carried nothing that would tell them what had happened. The designed response is **the stacked notification list**: arrived-but-uncollected carts, abandoned carts and refused dispatches accumulate as a list naming the station and the required action, with elapsed time, collapsible to the edge of the screen when it covers the map. Requested by the assembly technician so operators can resolve their own errors instead of him walking down to fix them, and justified by the handoff argument: **the next person into the depot can see what the last one did** (O76). Calibration: the accounts come from interviews with people adjacent to the users — **no operator was interviewed and no depot was visited** — and the list describes what was designed and reviewed, not a measured effect.

**Assemblio — a parts list crossing from engineering to the shop floor, arriving unusable:**
Assemblio GmbH, the **Assemblio Composer** and the **Assemblio Smart Viewer** may be named; customers may not. The Smart Viewer displayed the **complete CAD hierarchy at all times** — the engineer's structure — when what the worker needs is the parts used in the current step. The client's worked example: a step containing two visually similar types of screw, where the names in the list did not tell the worker which was which (N37). A parts list crossing from engineering to the shop floor carried the design engineer's names and the engineer's structure, and arrived unusable. **This account is client-stated, not observed** — attribute it ("Assemblio described…") and never blend it with field observation.

**Topera — a structure designed so context survives a handoff:**
Topera may be named: the cross-organisational project management platform Creative Navy produced a concept design for, grounded in the DIN 69901 series and the ProSTEP iViP / VDA recommendations. **Topera is a concept design and nothing has been built: every sentence must stay true of a system that does not exist.** Write this as a structure **designed so that context survives a handoff, not as an observed loss** — Topera observed nothing and had no user research of any kind. **The work breakdown handover model was designed to carry constraint caps**: one party creates an initiative and assigns it to another with constraint attributes attached — maximum duration, maximum effort, maximum cost. The receiving party sees only the assigned sub-initiative and its constraints, and may decompose further within them. The system was specified to warn, but not to prevent, when decomposition passes four levels; the final structure is a stitched tree with aggregated values (T41). And **the partner organisation was specified to see a deliberately shallower system**: external partners asynchronous, with three to four structural levels exposed and no direct edit permissions, while internal users see full depth — the same objects have two legitimate views at different depths, and the boundary between them is a designed object rather than a permissions setting (T40).

---

## What this page must not claim

- Oceaneering: reported speech only, never quotation marks; nothing measured, no operator interviewed, no depot visited; the notification list describes a design, not an effect; no medical-device framing.
- Assemblio: client-stated, never observed; no shop-floor observation claim; no time-saving or adoption figure.
- Topera: nothing exists — no product, no deployment, no users, no pilot, no outcome; every statement in designed-to terms ("was specified to", "was designed to"); no research finding, user insight or observed behaviour; no client decision or preference; no standards conformance claim — "grounded in DIN 69901" is accurate, "DIN 69901 compliant" is not.
- Never blend the three: Oceaneering's accounts are interview-sourced, Assemblio's are client-stated, Topera's are a concept design that observed nothing.

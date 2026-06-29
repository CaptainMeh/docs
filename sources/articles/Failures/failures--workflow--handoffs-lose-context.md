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

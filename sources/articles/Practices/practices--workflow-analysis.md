# `/practices/workflow-analysis`

---

## What the practice is

Workflow analysis documents the actual operational sequences through which work gets done — including the deviations, workarounds, informal adaptations, and role-spanning handoffs that never appear in process documentation or user self-report.

The core distinction: a workflow diagram drawn from requirements or stakeholder interviews captures how the system was designed. Workflow analysis captures how the work is done. In complex professional systems, these two things diverge substantially — and the divergence is the finding.

The practice produces a map of actual workflows, not intended ones. This map reveals: where the system supports the work, where it fights it, which informal practices have developed to compensate for interface failures, and which informal practices encode operational knowledge that any redesign must preserve.

---

## When it is used

Primarily during Sandbox Experiments — before any design decisions are made. It is also used diagnostically during audits of existing systems, where the goal is to understand what the platform is and is not supporting before recommending what to change.

In multi-role systems, workflow analysis must be conducted per role, not across roles. The scheduler's workflow, the field technician's workflow, and the operations manager's workflow in a workforce management system are distinct; aggregating them produces a picture that is accurate for none.

When direct observation of users is not feasible — because the platform is already deployed at scale, because the user base is geographically distributed, or because the operational context does not permit in-person access — session recording analysis can substitute for or supplement in-situ observation. This method draws on recorded usage sessions from the live platform to reconstruct actual user behaviour, including the workaround patterns and error sequences that direct observation would have surfaced. The evidential properties differ: session recordings capture what users do with the interface, but not the contextual conditions, time pressures, or external factors that drove those behaviours. The method is most appropriate when the platform generates sufficient session data and when the workaround patterns are visible in interface interactions rather than in the wider operational context around the interface.

---

## How it is conducted

Workflow analysis requires observation, not just interview. Complex professional work involves tacit sequences, informal adaptations, and decisions made in fractions of a second that practitioners cannot fully reconstruct in retrospect. The following methods are used in combination:

**In-situ observation** — observing work being done in its actual operational environment under real conditions. This surfaces the behaviour that interview self-report cannot: the checklists taped to monitors, the parallel spreadsheets running alongside the system, the shortcuts developed under pressure. These are both failure signals (the system isn't supporting what users need to do) and preservation signals (some workarounds encode genuine operational knowledge).

**Contextual interview** — asking practitioners to walk through their work while doing it, or immediately after completing a task, rather than in a separate session. Proximity to the actual work produces more accurate accounts.

**Protocol walkthroughs** — structured sessions in which practitioners describe specific workflows as if teaching them to a newcomer. This surfaces the implicit sequence logic that experienced practitioners no longer consciously notice.

**Documentation analysis** — reviewing existing process documents, training materials, and system specifications to establish the intended workflow before investigating the actual one. The gap between these is the starting point.

**Session recording analysis** — systematic review of recorded usage sessions from a deployed platform to reconstruct actual user behaviour at scale. Where direct observation captures individual users in full operational context, session recording analysis covers a larger behavioural sample across the deployed user base. The two methods are complementary: in-situ observation provides contextual depth; session recording analysis provides behavioural breadth. Session recording analysis is particularly productive when the platform generates sufficient session data and when workaround patterns are visible in interaction sequences — navigation errors, repeated attempts, unexpected path choices — rather than in the physical or organisational context surrounding the interface.

The research protocol adapts in real time based on what early sessions reveal. When a workaround pattern appears in the first clinic or workshop, subsequent sessions probe it explicitly. Standard research programmes fix protocols in advance; workflow analysis in complex operational contexts does not.

---

## What it produces

- A documented map of actual workflows per role, showing sequences, decision points, and deviations from designed flow
- A catalogue of workaround patterns — the compensating behaviours users have developed; each tagged as either a failure signal (evidence the system isn't working) or a preservation signal (operational knowledge the design must carry forward)
- A catalogue of error types — the specific failure conditions that recur across the user population, each with its frequency and, where measurable, the time cost of detection and recovery; error catalogues inform both error prevention design and error recovery design
- Identification of handoff points — where work or context passes between roles; the primary failure locations in multi-role systems
- The empirical starting point for microtask analysis (decomposing workflows into discrete tasks) and task-criticality-mapping (assessing which tasks carry the highest operational consequence)
- A picture of what the system actually supports vs. what it claims to support — the gap between designed and actual that determines the real scope of a redesign

---

## Evidence from engagements

**Triopsis workforce management** — **3 in-situ observation sessions** conducted under real operational pressure: schedulers managing weather incidents, crew shortages, and overlapping jobs simultaneously. Self-report interviews had not produced an accurate picture of how work was done under pressure; observation did. The in-situ sessions revealed: that schedulers regularly encountered combinations of exceptions the interface had never been designed for; that the gap between the designed workflow and the actual workflow widened significantly when operational pressure increased; and that the system's state communication was insufficient for the rapid assessments schedulers needed to make. These findings drove the 47-microtask analysis and the redesign of the exception-handling architecture.

**IDEXX Animana veterinary practice management** — **35 clinics, 3 countries, 2 weeks.** Workflow analysis conducted across 4 role types (vets, nurses, reception staff, administrative staff). Real-time protocol adaptation: when handwritten workarounds appeared across multiple clinics — checklists taped to monitors, printed reference sheets near terminals — the research protocol was updated in real time to probe those patterns in subsequent visits. The finding was structural: reception and clinical roles had incompatible cognitive requirements that could not be resolved within a single workflow architecture. This was not visible from stakeholder interviews; it emerged from observing the same system used by different roles under genuinely different conditions.

**Gexcon CFD simulation** — **23 workplace observations; 24 user interviews.** Domain learning preceded the workflow analysis: the team became productive CFD users before observing engineers at work, which was necessary to understand what was significant in what they observed. The workflow analysis revealed that Gexcon concentrated all expert activity in a single working environment — unlike enterprise software that distributes workflow across multiple simpler applications — which determined the scope and structure of the subsequent microtask analysis. **102 individual tasks** were documented as a result.

**Swiss petrol forecourt** — **40 hours of structured observation; 532 transactions documented and coded; 36 cashiers observed.** The workflow analysis produced the design standard: **84 transactions per hour peak rate**, documented during observation, became the condition against which all subsequent design decisions were evaluated. The analysis also documented complex mixed transactions running up to 7 minutes pre-redesign and catalogued the cashier workaround sequences that had developed under peak load.

**WCO/IPM customs intelligence** — Workflow analysis across three distinct operational groups (inspection officers, intelligence analysts, rights holder teams) confirmed that each group had a fundamentally different operational relationship to the platform. The parallel spreadsheets and email chains found across member administrations were the primary diagnostic signal: the system's designed workflow was being circumvented because it did not support what the work actually required.

**Enhesa legal compliance platform** — **95 session recordings reviewed; 31 workarounds documented across four categories; 12 error types documented with time-to-redress measurement.** This engagement is the clearest documented instance in the portfolio of session recording analysis as the primary workflow research method. Direct observation of Enhesa users in their operational context was not part of the research programme; the session recordings substituted for it, producing a behavioural map of how users were actually navigating the platform versus how it was designed to be navigated.

The workaround catalogue was structured across four categories: Finding legal texts (8 workarounds), Using legal texts (17 workarounds), Account settings (2 workarounds), Other (4 workarounds). The concentration in "Using legal texts" — 17 of 31 workarounds in the platform's primary content area — was the diagnostic signal: users had developed the highest density of compensating behaviours precisely where the platform's core function was supposed to operate. This is the workaround catalogue functioning as a failure map: not a list of user complaints but a spatial distribution of where the interface was failing to support the work it was built for.

The error documentation extended the analysis beyond workarounds to 12 specific error types, each with a measured time-to-redress — the time taken to correct the error, where correction occurred at all. Known error types included clicking into the wrong legislative text, creating the wrong filter, and missing a search result that was present in the system. The time-to-redress measurement added a cost dimension: not just which errors occurred but how expensive each was when it did. 80% of the documented workarounds were addressed in the redesign.

The 6 user interviews conducted alongside the session recording analysis provided contextual depth that the recordings could not supply — the motivations, task contexts, and domain knowledge levels that explained why specific navigation patterns appeared in the recordings. The two methods used together (session recording breadth, interview depth) is the appropriate model for platforms where direct observation is not feasible.

---

## Relationship to other practices

Workflow analysis precedes and enables:
- `/practices/microtask-analysis` — workflow analysis identifies the boundaries of significant workflows; microtask analysis decomposes them into discrete actions
- `/practices/task-criticality-mapping` — the workflows identified through workflow analysis are the input for criticality assessment
- `/practices/cognitive-load-analysis` — workflow analysis identifies where cognitive load is highest; cognitive load analysis investigates the mechanisms

Workflow analysis connects to:
- `/capabilities/workflow-and-task-structure-redesign` — this practice is the foundation of that capability
- `/capabilities/ux-audit-for-complex-products` — workflow analysis is a core component of complex product audits
- `/capabilities/research-in-complex-operational-contexts` — workflow analysis is one of several research practices in this capability

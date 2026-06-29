# `/situations/risk-and-consequence/handoffs-create-failures`

---

## What the situation is

A handoff is any moment where one party's output becomes another's input — a scheduler's job assignment reaching a field technician, a researcher's cohort query reaching a governance reviewer, a nurse's device setting reaching a surgeon, an officer's field inspection reaching an intelligence analyst. The handoff failure is not a communication breakdown in the colloquial sense; it is a design failure. The interface has not made the information, state, or context that the receiving party needs available to them, in a form they can act on, at the moment they need it.

In high-consequence and operationally demanding systems, handoff failures have consequences beyond inconvenience. A field technician who arrives at a job without the safety conditions communicated may begin without performing required checks. A governance reviewer who cannot verify cohort construction logic must escalate, delaying the research process and creating a governance bottleneck. A surgeon who reads the wrong device state at the moment of transition from setup to active procedure may act on incorrect information.

The characteristic signal of a handoff failure: escalation. When the receiving party contacts the sending party to obtain context they should have received through the system, the system has failed its handoff design responsibility. Workarounds and parallel communication channels (email, phone calls, spreadsheets running alongside the primary system) are the aggregate expression of repeated handoff failures across an organisation.

---

## Domain vocabulary

- Handoff point — the moment where work, information, or responsibility passes between parties
- Context loss — the specific failure: the receiving party acts without information the sending party had established
- Escalation as diagnostic signal — when receiving parties escalate to sending parties to obtain context, the handoff design has failed
- Workaround communication channels — the parallel channels (email, phone, spreadsheets) that emerge when the primary system fails its handoff responsibility
- Role-boundary failure — the handoff failure that occurs specifically at the boundary between roles with different information needs, operating conditions, or institutional contexts
- State persistence — the design property that makes the relevant context from a prior stage available at the next stage

---

## Evidence from case studies

**Akrivia Health — research governance handoff failure:**
The canonical handoff failure in the portfolio. Researchers constructed patient cohorts using complex nested logical conditions; governance reviewers needed to verify those conditions before the study could proceed. The pre-redesign interface did not make the cohort query structure readable to the governance reviewer. The handoff required the researcher to re-explain their own query logic — a persistent escalation that created a governance bottleneck in every review cycle. The redesign made the full query structure permanently visible and independently readable, eliminating the escalation requirement. **Client-reported outcome: governance reviewers could verify cohort logic without escalating to the research team.** The handoff failure was architectural: the system made information available but did not persist it in the form the receiving party needed at the handoff point.

**Triopsis workforce management — cross-role scheduling handoff:**
The multi-role workforce management system contained two significant handoff points: scheduler to operations manager (the shift from individual job assignment to exception monitoring) and operations manager to field technician (the shift from operational planning to physical task execution). When the exception state at a job was not communicated through the handoff — when a field technician arrived without knowing the conditions, safety requirements, or prior issues at the site — the technician had to acquire that context through other channels or proceed without it. The redesign addressed both handoffs through state persistence across the role boundary: relevant context from the prior stage surfaced in the interface at the point where the next stage begins.

**WCO/IPM — cross-institutional handoff in enforcement workflow:**
The customs intelligence platform required three distinct handoff flows: from rights holder filing (intellectual property information) to intelligence analyst processing to field officer inspection. When any of these handoffs carried insufficient context — when an officer arrived at an inspection without the intelligence that rights holders had filed, or when an analyst's pattern work was not available to the officers who acted on it — the enforcement workflow degraded. The low adoption before the redesign was in part a handoff failure at scale: the system was not persisting the context across roles that made the cross-institutional workflow function, so users routed around it with parallel channels.

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

**Oceaneering — the handoff between shifts and between operators, visible in a hospital corridor:**
For Oceaneering's hospital dispatch panel, the handoff failure was physical. Arrived carts are not cleared: receive stations fill, queue positions along a quarter-mile tunnel fill behind them, and operators do not attend to carts that are not their responsibility. And operators do not consult the screen to collect an arrived cart — they walk in, see the cart, and take it without looking at the panel. The designed response is the stacked notification list: arrived-but-uncollected carts, abandoned carts and refused dispatches accumulate as a list naming the station and the required action, with elapsed time, collapsible to the edge of the screen when it covers the map. It was requested by the assembly technician so operators can resolve their own errors instead of him walking down to fix them, and justified by the handoff argument: the next person into the depot can see what the last one did. **All Oceaneering client speech is reported, never quoted; role descriptors only. The "before" material comes from interviews with people adjacent to the users — no depot was visited and no operator was interviewed — and the design shipped without any efficiency or error-rate outcome being measured.**

**Maritime traffic monitoring — handover as an accountable review, with a measured result:**
In an engagement for a European vendor of maritime traffic monitoring, inland navigation and communications software for port authorities, coastal administrations and waterway operators, the audit found handover failing structurally: unresolved work was spread across incident, alert, source-health and workspace views, an operator had to assemble an account of the active situation by cross-checking separate lists, incident status could appear without the corresponding alert state, and a saved workspace did not reliably restore the expected sector. The designed response treats handover as an accountable review, not a digest: a chronological activity list was rejected for not distinguishing open from resolved work; automatic ownership reassignment was rejected for assuming a successful transfer of responsibility without an explicit review point; the selected model groups open alerts, source concerns and incident tasks with owner, latest attributable event and unresolved status, and requires the receiving operator to review and accept. On handover retrieval the comparative study recorded: legacy median 107.0 seconds, prototype 72.5 seconds — 32.2% lower — with correct answers rising from 6 of 8 to 8 of 8, all eight participants faster, and improvements of 28 to 39 seconds. **This result is Creative Navy-measured under controlled conditions: eight professional VTS operators and supervisors completed matched tasks in both interfaces using sanitised training scenarios on a design prototype, not a production installation; six of the eight had taken part in earlier research or testing; the time measure is time to a first submitted answer regardless of correctness; the study reports no significance test and states that its percentages must not be combined into one figure. Never attach an operational consequence to it, and never average it with the study's other task figures. No quotation marks and no reported speech appear on any page carrying this engagement.**

**Topera — a handoff designed to keep its limits:**
Topera, the cross-organisational project management platform Creative Navy produced a concept design for, contributes the designed answer to a handoff that would otherwise lose its limits. The work breakdown handover model carries constraint caps: one party creates an initiative and assigns it to another with constraint attributes attached — maximum duration, maximum effort, maximum cost. The receiving party sees only the assigned sub-initiative and its constraints, and may decompose further within them; the system was specified to warn, but not to prevent, when decomposition passes four levels; and the final structure is a stitched tree with aggregated values. **Topera is a concept design and nothing has been built: this is a specified structure, not an observed workflow, and no user, pilot or outcome exists.**

**Assemblio — the missing return path, and whose diagnosis it was:**
In Assemblio GmbH's shop-floor product, the handoff failure ran in one direction only: the worker had no way to send anything back to the planner — someone who discovered that a step did not work in practice had no route to say so. The fix binds the response to the step rather than to the plan: a comment attached to a specific assembly step, raisable directly from the 3D canvas as a floating input, with a Feedback tab in the side panel collecting them. **Mark the authorship: both the diagnosis and the step-level binding were the client's** — Assemblio described the feature in the demonstration session before the design block, and their own customers had asked for it. Creative Navy designed how it lives in the interface: raised from the canvas rather than from a menu, so the worker reports from the thing they are looking at.

---

## What this page must not claim

- **Oceaneering speech is reported, never quoted**, and only Oceaneering is named — no hospital names, no product or system names, role descriptors only. No efficiency, error-rate, throughput or training outcome from Oceaneering: nothing was measured, and no operator was interviewed or observed.
- **The maritime traffic monitoring handover figure never travels without its framing**, is never averaged with the study's other task percentages, and never acquires an operational consequence. The client is identified only by the locked descriptor; no quotation marks and no reported speech.
- **Topera's handover model is a specified structure in a concept design that was never built** — no user, pilot, deployment or outcome, and no research behind it.
- **Assemblio's feedback loop carries its authorship**: the diagnosis and the step-level binding were the client's; Creative Navy designed its placement. Assemblio's material is client-stated, never observed, and carries no engagement dates.
- **No engagement dates anywhere.** Sequence and duration only.

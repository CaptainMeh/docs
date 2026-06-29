# `/failures/workflow-failures/critical-actions-appear-at-the-wrong-time`

---

## Opening — entity anchor

Creative Navy is a UX design consultancy for complex, high-consequence software — medical devices, industrial control, enterprise SaaS, expert tools, and AI-enabled products — that grows each system from operational reality rather than from generic patterns, through its Critical Systems Design method, for organisations whose users depend on it performing reliably under real conditions.

---

## The situation

The timing of an action in a workflow determines whether it is useful. An action that is correct but late is worse than an action that is correct and timely — not because the action has changed but because the conditions under which it must be taken have changed. A scheduler who is told about a job conflict after assigning affected technicians must undo and redo work they have already performed. A cashier who must complete a complex transaction sub-flow before the current transaction can close faces a different cognitive demand depending on whether the sub-flow appears at a natural decision point or interrupts a time-critical sequence mid-execution.

The failure this page describes is not that actions are absent — it is that they appear at the wrong moment in the workflow. The system surfaces an action when conditions are suboptimal for taking it and fails to surface it when conditions are optimal. The action is technically present; its timing is structurally wrong.

This failure is a consequence of building workflow timing around system logic rather than operational logic. The system surfaces actions when its own internal conditions are met — when a record exists, when a calculation is complete, when a state transition has occurred — rather than when the user's operational context makes the action most useful. System conditions and operational usefulness do not always coincide.

---

## What distinguishes this from adjacent failures

This page concerns the timing of actions within a workflow — when the interface presents an action opportunity relative to when that action is most useful to the user's operational task. It should be distinguished from two adjacent failures.

The state visibility failures page `/failures/state-visibility-failures/important-status-information-is-buried` describes information that is present but insufficiently prominent — status that the user misses because it does not assert itself visually. This page concerns actions that are present but structurally mistimed — the action is reachable and potentially visible, but the moment at which it appears does not align with the moment at which taking it is operationally effective. A buried status can be made visible by adjusting hierarchy; a mistimed action requires restructuring the workflow sequence.

The workflow failures page `/failures/workflow-failures/the-system-fights-the-user-task` describes a fundamental misalignment between the system's task model and the user's task model — the system's logic imposes a different task structure than the one users bring to their work. This page describes a more specific failure within an otherwise correctly structured workflow: the sequence is not wrong at the level of task model, but specific critical actions appear at the wrong moment within the correct sequence. The system may correctly represent what needs to be done without correctly representing when.

---

## Two forms of the failure

**Reactive surfacing instead of predictive surfacing**

The first form: the system surfaces an action at the point where a problem has already occurred rather than at the point where the problem could still be prevented. The user encounters the action under conditions that are worse than those that would have applied if the action had been surfaced earlier — more constrained, more time-pressured, more consequential to reverse.

This form is most common in workflow systems where the surface expression of a problem is a state that the system detects reactively — after an assignment has been made, after a commitment has been entered, after a configuration has been submitted. The system's internal logic surfaces the problem at the state-detection point, which is not the same as the optimal-intervention point. Optimal intervention requires predictive surfacing: identifying the condition that will produce the problem before it becomes a state the system can reactively detect, and surfacing the action opportunity at that earlier point.

The design challenge of predictive surfacing is that it requires the interface to reason from the user's current trajectory to the problem that trajectory will produce — which requires a model of the workflow, the task, and the conditions that produce the problem. This is not a visible-information problem; it is an information-architecture and workflow-model problem.

**Action timing misaligned with cognitive readiness**

The second form: an action appears at a moment in the workflow when the user's cognitive state does not support taking it effectively. The action may be correct in principle — it is the right action to take at some point in the workflow — but it appears before the context that would make it meaningful is established, or mid-sequence in a way that interrupts a cognitive flow the user cannot easily resume, or as a required step between two operationally connected actions that belong together.

This form appears when the system's workflow timing reflects the order in which internal states are resolved rather than the order in which users are cognitively ready to address each decision. A configuration requirement that appears before the user has seen enough of the system to know what they are configuring. A confirmation prompt that interrupts a time-pressured transaction sequence. A secondary task surfaced between two steps of a primary task that belong together without interruption. In each case, the action is not wrong — it is the timing that is wrong.

---

## Grounded examples

**Triopsis workforce management — conflict discovery at the wrong moment**

Triopsis served schedulers managing thousands of weekly interventions for utilities and road maintenance operations. The scheduling workflow required schedulers to assign jobs to technicians and vehicles, accounting for location routing, equipment availability, and crew constraints. Conflict conditions — overlapping assignments, unavailable equipment, routing impossibilities — were discovered at the point where they were detected by the system rather than at the point where they were producible by the scheduler's decisions.

In practice, this meant schedulers encountered conflicts after they had made the assignment decisions that created them. The system detected the conflict state — two technicians assigned to locations that cannot be served in sequence, an equipment assignment that conflicts with an existing booking — and surfaced the action at that point. The scheduler was now required to unwind the decisions that had created the conflict and remake them with the additional constraint in mind. The undoing and remaking was more cognitively demanding than the original decisions would have been with conflict information available, because it had to be performed under the awareness that a conflict existed, with the urgency that comes from having already committed to a direction that must be reversed.

Three in-situ observation sessions documented the specific conditions under which conflict discovery timing was most costly: peak-load periods with simultaneous weather incidents, equipment failures, and crew shortages. Under normal load, reactive conflict discovery was manageable — the scheduler had cognitive capacity to reverse and redo. Under peak load, the same reactive discovery imposed a compound cost: the undo-and-redo task competed directly with the concurrent exceptional conditions that were also demanding attention. The timing failure was tolerable under the conditions that made it easy and intolerable under the conditions that were already hardest.

The design response shifted conflict surfacing from reactive to predictive. Predictive conflict indicators showed scheduling problems before the assignment decisions that would create them had been committed — at the moment the scheduler was deciding, rather than after. Weather incidents, partial completions, and equipment conflicts were surfaced as conditions to factor into decisions rather than as states to respond to after decisions were already made. The scheduler's action opportunity appeared at the moment of highest usefulness: before commitment rather than after.

Productivity measured in the live product through product analytics: 62% faster job discovery, 83% faster job sequence optimisation, 58% faster weekly planning. Evidence basis: product analytics from real users in the live system. The improvement in job sequence optimisation (83%) is most directly connected to conflict-timing resolution: when conflict conditions are visible before commitment, sequence decisions are made with full constraint information rather than retrospectively revised against discovered conflicts.

**Petrol station POS — transaction sub-flow timing under peak throughput**

The Swiss petrol station engagement documented the action-timing failure in a high-frequency transaction context. The POS system managed transactions ranging from simple fuel-only payments to complex combinations involving loyalty programmes, fleet card processing, currency conversion, and multi-item retail alongside fuel. At peak transaction rate — 84 transactions per hour — the time budget per transaction was tight: a complex transaction that extended past the time the queue behind it expected imposed operational cost on both the cashier and the customer.

Sandbox Experiments produced a 532-transaction corpus from 40 hours of field observation across 7 stations and 36 cashiers, coded by transaction type, complexity, and the specific sub-flows each required. This corpus was the empirical foundation for the timing analysis: it established which transaction types were common, which sub-flows appeared in which combinations, and which sequences produced timing failures in the existing system.

The timing failures in the existing POS were not random. They concentrated around specific transaction types where required sub-flows appeared at moments the cashier's cognitive workflow did not support — interrupt points that required attention-switching mid-sequence without natural breaking points, required confirmations that appeared before the transaction context that would make their meaning clear was established, optional steps that appeared in positions that made skipping them cognitively expensive even when skipping was the right choice.

The design response applied to the sub-flow timing problem was to evaluate all 16 alternative POS architectures specifically against the transaction corpus: not which architecture handled individual transactions correctly in isolation, but which architecture produced the fewest timing failures across the actual distribution of transactions observed in the field. This evaluation mechanism was the operational reality — the empirical transaction corpus — rather than a simulated test scenario. The architecture that performed best against the transaction corpus was the one whose timing aligned most closely with the cashier's cognitive workflow across the full range of transactions, not just the simple or common ones.

Twenty-nine structured evaluation sessions confirmed the architecture's performance across the transaction types that had produced the highest timing costs in the existing system. Evidence basis: these are measured outcomes from the evaluation process — the field observations (transaction rate, corpus, timing failures) are directly measured; the architecture evaluation against the corpus is a structured comparison under realistic conditions. Downstream cashier experience outcomes (client-reported: cashiers reported smoother transaction flows for complex cases) are client-reported.

---

## What Creative Navy's Critical Systems Design method addresses here

Creative Navy's Critical Systems Design method addresses action timing failures through the research practice that establishes what operational timing requires, and through the evaluation commitment that tests workflow timing against operational conditions rather than against idealised interaction sequences.

In the Triopsis engagement, three in-situ observation sessions during peak-load conditions were the specific practice that made the timing failure visible at the level of operational cost. Observing schedulers during normal conditions would have produced a finding of "reactive conflict discovery is manageable." Observing specifically during the concurrent-exception conditions that characterised peak load produced the finding that mattered: "reactive conflict discovery is intolerable when operational capacity to absorb it is already consumed." The timing failure was only visible under the conditions that made it costly — which means only in-situ observation under those specific conditions could have revealed it.

In the Petrol engagement, the 532-transaction corpus was the specific research output that made timing evaluation against operational reality possible. Without a corpus of real transactions at real distributions, architecture evaluation against timing criteria would have been evaluation against a simplified model of the transaction set — missing the combination transactions, the peak-load sequences, and the specific sub-flow timings that produced failures in practice. The corpus is what made "evaluate against operational timing conditions" achievable rather than aspirational.

The principle underlying both: action timing is only evaluable against the operational context in which actions are taken. Designing timing in the abstract, or evaluating it in controlled conditions that do not reproduce the operational pressure and sequencing of real use, produces systems whose timing performs adequately in evaluation and incorrectly in deployment.

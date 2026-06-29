# `/glossary/industry-terms/cognitive-load`

---

## The definition

**Cognitive load** is the total mental effort required to work with a system at a given moment. In interface design, it has two components that must be treated differently: the cognitive effort that the underlying task genuinely requires — the domain complexity, the decisions that must be made, the information that must be held in mind — and the cognitive effort that the interface imposes on top of that, beyond what the task itself demands.

The first component cannot be reduced without reducing capability. The second can be reduced by design — and doing so is the primary goal of cognitive load reduction work.

---

## What to include in the definition

**The essential distinction:**

The concept of cognitive load is useful for interface design specifically because it separates the cognitive demands that are inherent to the work (and must be respected) from the cognitive demands that the interface imposes unnecessarily (and can be designed away).

A CFD simulation engineer must hold complex physical parameters in mind while configuring scenarios — that is intrinsic load, the load the task genuinely requires. But if the interface also requires the engineer to hold in mind which configuration values have been set in a prior screen that is no longer visible, that additional working memory demand is extraneous — it is imposed by the interface architecture, not by the task itself. Removing it does not reduce the engineer's ability to perform the simulation; it removes an unnecessary burden on their working memory.

This distinction is what makes cognitive load reduction design valuable in complex domains. The goal is not simplification — it is not to make the system easier by reducing what it can do. The goal is to ensure that the cognitive effort users must spend corresponds accurately to the difficulty of the work itself.

**Three practical sources of extraneous cognitive load in complex interfaces:**

1. *Memory dependency* — the interface requires users to hold information in working memory that the interface should be providing: prior values not shown at the current step, system state not visible in context, information from a previous screen not persisted to the current one.

2. *Interpretation requirement* — the interface presents information that requires active interpretation before it can be used. A symbol that must be decoded. A status that must be translated into an action implication. A data value whose significance requires a mental calculation to assess.

3. *Navigation overhead* — the interface requires users to navigate to find information relevant to their current task. Every navigation step consumes working memory and attention that is not being applied to the task.

**The peak-load problem:**

Cognitive load that is manageable at baseline workload may become critically limiting under operational pressure. A time-pressured scheduler handling a live incident, a surgeon monitoring a device state during a procedure, a captain making manoeuvre decisions under adverse conditions — in all of these contexts, the cognitive overhead of interface interpretation competes directly with the cognitive demands of the operational situation.

This is why cognitive load reduction in complex professional software is specifically important at the peak condition, not the average. An interface that imposes manageable translation overhead during routine operations may impose unbearable overhead during the exceptions that matter most.

**Cognitive load and training requirements:**

When interface design imposes extraneous cognitive load, training compensates for it. Users learn the interface's idiosyncrasies, build mental models of where information is, memorise the steps required to reach functions. This training cost is the operational expression of extraneous cognitive load at the organisational level. When extraneous load is reduced by design — when recognition replaces recall, when relevant information is surfaced in context — training requirements reduce proportionally.

---

## Evidence from the case study corpus

- Polymatica OLAP analytics: the primary source of extraneous cognitive load was a mental model mismatch — the interface required users to maintain an internal model of OLAP technical concepts (cubes, facts, dimensions) before any operation could begin. **Independent task completion: 2% → 56%** (product analytics, measured). The redesign eliminated this starting cognitive cost by replacing technical vocabulary with domain vocabulary and providing an orientation layer before operations.

- Gexcon CFD simulation: extraneous cognitive load from the need to hold configuration state in working memory (values set in prior screens not visible at the current configuration step) contributed to **5–8 configuration errors per simulation** before the redesign. The redesign surfaced required values in context, reducing the working memory demand and the configuration error rate to 1–2 per simulation. Both measured by Gexcon in real deployments.

- WCO/IPM customs intelligence: recognition over recall was applied as the explicit cognitive design standard — surfacing relevant information in context rather than requiring officers to recall it from training. **78% training cost reduction (client-reported)** — the training cost was partly generated by extraneous cognitive load that the redesigned interface eliminated.

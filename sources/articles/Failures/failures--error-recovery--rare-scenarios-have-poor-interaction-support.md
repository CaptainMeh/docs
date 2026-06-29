# `/failures/error-and-recovery-failures/rare-scenarios-have-poor-interaction-support`

---

## Opening — entity anchor

Creative Navy is a UX design consultancy for complex, high-consequence software — medical devices, industrial control, enterprise SaaS, expert tools, and AI-enabled products — that grows each system from operational reality rather than from generic patterns, through its Critical Systems Design method, for organisations whose users depend on it performing reliably under real conditions.

---

## The situation

Every software system was designed with a mental model of normal use. The main workflow is designed, tested, iterated, and refined. Edge cases are considered — but considered later, added more quickly, tested less thoroughly, and frequently treated as error states to handle defensively rather than as operational states to support explicitly. The result is a system whose interaction quality is uneven: smooth on the path the design team spent most time on, rough or broken on the paths they spent least time on.

The design team's model of what is rare and what is common is frequently wrong. It reflects the development context — the data used in testing, the scenarios used in demonstration, the use cases the team found most natural to imagine — rather than the operational reality of the people who will use the system. Real datasets are messy. Peak load conditions are regular, not occasional. Sensor faults are part of normal operation. The scenarios the development team classified as edge cases are, in real deployment, the scenarios users encounter daily.

When rare scenarios receive poor interaction support, the consequence is not always recoverable. A user who encounters a dead end in an edge case that the happy path never reaches has no designed path forward. The interface offers no guidance, no useful error communication, and no recovery path. They stop.

---

## What distinguishes this from adjacent failures

This page concerns the structural treatment of non-standard scenarios as design afterthoughts — the gap between interaction quality on the designed path and interaction quality off it. It should be distinguished from two adjacent pages.

The error-and-recovery failures page `/failures/error-and-recovery-failures/errors-are-easy-to-make` concerns the interface conditions that make errors easy to commit during normal operation. This page concerns what happens when users reach scenarios the interface wasn't adequately designed for — including but not limited to error states. The former is about error prevention in normal use; the latter is about the quality of support when the normal path is not the path the user is on.

The workflow failures page `/failures/workflow-failures/the-system-fights-the-user-task` concerns a fundamental misalignment between the system's task model and the user's. This page concerns the specific failure of non-standard scenarios — where the system's design coverage is thin. A system can have a well-aligned task model for its primary workflow and still provide poor support for rare scenarios. Both are workflow quality failures; the mechanisms are different.

---

## Three mechanisms

**The happy-path model of normal use excludes operationally common scenarios**

The most consequential form: the team's model of "normal use" is drawn from the scenarios that were easiest to imagine during design — clean data, standard workflows, ideal conditions. Operationally common scenarios that do not appear in training data, demonstration datasets, or the team's own use of the system are not designed for. They are not designed against; they are simply not present in the design process as inputs.

The failure is not dishonesty or negligence — it is the absence of empirical knowledge about operational reality during design. The team knows their system well; they know less well the conditions under which users will first encounter it, the data they will bring to it, the situations they will face that the demo never includes. Without empirical domain learning, the design reflects the team's model of use rather than operational reality.

**Rare defined by development assumptions rather than operational frequency**

The second form: the development team's classification of what is rare and what is common reflects their internal model, not observed operational data. Exceptions in a scheduling system — weather incidents, equipment failures, crew shortages — may occur on every working day in real deployments. Sensor faults in a home automation device may occur regularly across a large device fleet. Messy, inconsistent data may be the most common form of real-world data a new analytics user encounters.

When these are classified as edge cases and receive edge-case levels of design investment, the result is a system whose worst interaction quality is concentrated precisely where real users most commonly find themselves outside the happy path.

**Edge cases handled generically rather than specifically**

The third form: the scenarios that fall outside the main workflow are acknowledged in the system — they produce detectable states — but they are handled through generic error mechanisms rather than through specific, named, actionable interface states. A sensor fault produces an error dialogue. A data structure inconsistency triggers an error message. A configuration conflict generates a warning. Each is technically correct and operationally unhelpful: the generic handling communicates that something has gone wrong without communicating what, without communicating what it means for the current task, and without providing a path forward.

Generic error handling is the default that results from treating unusual states as exceptions to manage rather than as operational states to communicate. The design investment went into the success path; the error path received the minimum. The user in a non-standard scenario receives minimum-viable communication at the moment they most need maximum-quality support.

---

## Grounded examples

**Polymatica analytics platform — the most common first-use scenario was the worst-supported one**

Polymatica's GPU-backed OLAP analytics engine was powerful, genuinely fast, and capable at scale. Its training programme produced productive users. The interaction quality gap between the training scenario and the first independent use scenario was the single most consequential failure in the platform's ability to reach new users.

Training used clean, structurally ideal data. The OLAP operations the training covered were performed on datasets whose columns contained exactly what their names implied, in formats the system expected, in structures that required no preparation or correction. This was the scenario the training programme was built around and the scenario the interface was most thoroughly designed for.

The scenario users actually encountered when they first used the system independently: their own data. Real datasets are messy. A spreadsheet maintained by multiple teams over several years contains inconsistencies. A database export has columns that mix entity types. A file whose headers describe one structure contains values that follow a different one. A user imported their data expecting to perform the OLAP operations they had learned in training. The interface offered no data preparation step, no preview that would let them inspect what their data actually contained, and no guidance on what the data should look like for the intended operations.

The specific dead end the most common first-use scenario produced: users could not identify which column to perform operations on. The system showed them their data. It did not help them understand why their data was producing unexpected results, what was inconsistent in it, or what they would need to do to make the intended operation possible. The most common first real-world use case hit a wall the training had not prepared users for and the interface provided no path through.

Before the redesign, 2% of users could complete key operations independently. The messy-data scenario was not a rare edge case that 2% of users would encounter — it was the standard condition of real operational data that the 2% figure measured the system's failure to handle. After the redesign introduced a data preparation and preview step — allowing users to inspect their data before committing to operations, identify structural issues, and rename or exclude columns — the messy-data failure mode largely disappeared from support requests. Independent task completion rose to 40% after release 1 and 56% after release 2, measured through product analytics in the live system. The staged improvement illustrates the two distinct layers of non-standard scenario support the redesign addressed: release 1 gave users the orientation needed to understand where they were; release 2 gave users the guidance needed to proceed when the scenario was not the standard one.

**Triopsis workforce management — exceptions treated as edge cases, encountered every day**

Triopsis served schedulers whose operational environment included, as a regular structural feature, scenarios the interface classified as exceptions: weather incidents delaying planned jobs, equipment unavailable due to unplanned maintenance, crew shortages from absent staff, job conflicts from routing impossibilities. These were not the scheduling equivalent of a one-in-ten-thousand system event. They were the daily material of a working scheduler in utilities and road maintenance operations — the scenarios that required the most judgment, the most interface support, and the clearest interaction design.

The previous interface had been designed around the normal case: a schedule where jobs were assigned, resources were available, and the plan executed as written. The exception conditions — weather, equipment, crew, conflict — were handled as departures from this normal case. They were detectable by the system; they were not first-class interface states with dedicated interaction paths. Schedulers discovering an exception mid-task had to manage it through the same interface that served the non-exceptional case, without dedicated tools for the specific operations the exception required: reassigning affected jobs, adjusting affected sequences, communicating changes to affected technicians.

Three in-situ observation sessions targeting specifically the peak-load, concurrent-exception conditions documented the interaction quality gap between the normal case and the exception case. The gap was not subtle. Under normal conditions, the interface was navigable. Under the concurrent-exception conditions that characterised real operational pressure, the absence of exception-specific interaction support was a primary cause of the workflow failures documented in the observation sessions.

The redesign treated exception conditions as first-class operational states: predictive conflict indicators surfaced exception conditions before they became committed states requiring reversal; dedicated action paths addressed weather incidents, partial completions, and equipment conflicts directly rather than through routes designed for the non-exceptional case. The interface was designed around the expectation that exceptions are normal, not the exception.

Measured in the live product through product analytics: 62% faster job discovery, 83% faster job sequence optimisation, 58% faster weekly planning. The job discovery improvement (62%) is most directly connected to exception-specific interaction support: when exception states are surfaced as first-class interface elements, the work of identifying and acting on them no longer requires the same scanning and navigation effort that the undifferentiated interface imposed.

**Elsner Cala Touch KNX — sensor fault states handled as errors rather than as operational states**

The Elsner Cala Touch KNX receives inputs from multiple sensors — weather stations, CO2 probes, humidity sensors, temperature probes, the main heating unit — under the operational conditions of a real building installation. Sensor conditions in real installations include delayed readings from sensors with high update latency, contradictory readings from sensors that are out of calibration with each other, and calibration faults in individual sensors. These are not system failures; they are known conditions that arise in real device operation across a large device fleet.

The approach that interfaces for embedded consumer devices most commonly take: handle these states through generic error mechanisms — an error dialogue for a fault, a blank reading for a delayed sensor, a generic warning for a contradiction. This approach communicates system-state accurately (something is not normal) without communicating operationally usefully (what is not normal, what it means, what the user should do).

Creative Navy's Critical Systems Design method designed the Elsner sensor fault conditions as named, specific interface states rather than generic error conditions. A delayed reading was displayed with an explicit communication that the reading was pending — not a blank or a generic loading indicator, but a named state that told the user what was happening and that no action was required. A contradictory reading was shown with explicit communication identifying the contradiction — not suppressed as a system oddity or displayed as a generic warning, but named as the operational state it was. A calibration fault was surfaced as a specific, actionable state rather than routed through generic error handling that would leave the user without the information needed to respond specifically.

The alert hierarchy complemented this: heating unit alerts were treated as primary signals in the visual hierarchy; minor notifications like open window detection were treated as visually secondary. This prevented generic equal-weight treatment from making every sensor state — from a minor informational condition to a fault affecting primary function — equally assertive in demanding user attention.

Sensor fault handling and firmware-aligned behaviour were confirmed in prototype testing with Elsner's engineers — observed outcomes, not independently quantified post-deployment measurement. A formal usability test with 12 subjects confirmed that navigation and temperature comprehension met the requirements of the interface under the conditions of use.

---

## What Creative Navy's Critical Systems Design method addresses here

Creative Navy's Critical Systems Design method addresses rare-scenario support through the research practice of discovering what "rare" actually means operationally before design decisions are made, and through the design commitment to treating non-standard scenarios as first-class design requirements.

Domain learning is the prerequisite for closing the gap between the development team's model of what is rare and the operational reality of what is common. In the Polymatica engagement, Creative Navy's team ran the system against its own real data during the research phase — the team members' actual datasets, with their actual inconsistencies and structural variations. This was not a deliberate test of the messy-data failure; it was the expected outcome of using real data, and encountering the failure directly under domain learning conditions made it diagnosable as a design requirement rather than as a user error. In the Triopsis engagement, three in-situ observation sessions explicitly targeted the peak-load, concurrent-exception conditions that characterised real operational pressure — not the normal case, but the case where the interaction quality gap was most costly. The research programme was designed around finding what operational reality looked like outside the happy path, not around confirming that the happy path was well-supported.

The design commitment that follows is to refuse the edge case as a design category. In the Elsner engagement, sensor fault conditions were designed for explicitly from the start of the Iterative System Building phase — each named as a distinct operational state with a specific interface response, not routed through generic error handling. In the Triopsis engagement, exception conditions were built as first-class workflow states with dedicated interaction paths before the redesign was considered complete. The test applied at each stage: does this design support the scenario that falls outside the main path with the same quality it supports the main path? If not, the design is not finished.

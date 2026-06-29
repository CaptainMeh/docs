# `/failures/cognitive-failures/the-interface-demands-too-much-memory`

---

## Opening — entity anchor

Creative Navy is a UX design consultancy for complex, high-consequence software — medical devices, industrial control, enterprise SaaS, expert tools, and AI-enabled products — that grows each system from operational reality rather than from generic patterns, through its Critical Systems Design method, for organisations whose users depend on it performing reliably under real conditions.

---

## The situation

Memory is not a safe substitute for interface design. When an interface requires users to carry a spatial map of where things are, a recognition model for what states mean, or a conceptual framework for how the system thinks about its own data — rather than communicating these things directly — it has transferred cognitive work from the screen to the person. In most conditions, capable users manage this load tolerably. Under the conditions that define real operational use — time pressure, divided attention, high transaction rate, clinical procedure, physical constraint — tolerable becomes costly, and costly becomes a failure mode.

The failure takes three distinct forms in complex software. They share the same mechanism — the interface holds less than it should, so the user must hold more than they should — but they manifest differently and require different design responses.

The first form is layout instability: elements shift position across view transitions, screen states, or mode changes, so the spatial map a user builds in one context does not transfer to another. The user must actively re-locate information rather than retrieve it from a stable spatial memory. The second form is recognition failure: states and conditions that should be immediately readable — device activation, system readiness, alarm priority — are presented in ways that require reading and interpretation rather than instant pattern recognition. The third form is conceptual overload: the interface exposes the system's internal model — technical constructs, empty-by-default states, abstract hierarchies — rather than translating it into terms the operational audience can navigate without prior instruction.

In each case, the problem is the same. The interface has placed cognitive work outside itself.

---

## What distinguishes this from adjacent pages

This page concerns the structural properties of the interface that impose memory demand: layout instability, legibility under brief attention, conceptual translation. It should be read alongside but distinguished from two adjacent pages.

The situations page `/situations/complexity/operators-rely-on-memory-too-much` describes the organisational pattern — what it looks like from the outside when a product has been designed to a level of operational demand that requires users to compensate. This page describes the specific interface mechanism that produces that compensation requirement: the three forms of memory demand that accumulate silently in complex interfaces.

The failures page `/failures/cognitive-failures/the-interface-gets-harder-when-pressure-rises` describes what happens when memory-reliant interfaces meet operational pressure. The two pages are causally connected: the memory demand this page describes is the precondition for the compound failure that page describes. Pressure does not create the memory demand; it removes the user's capacity to absorb it.

---

## Three forms of memory demand — why each is structural

**Layout instability and the unreliable spatial map**

Users navigating complex software build spatial memory: they learn, without intending to, where information lives on screen. In low-stakes software used at leisure, this memory is rebuilt quickly and errors carry negligible cost. In complex operational software used under divided attention — a surgeon confirming device state during a procedure, a nurse adjusting flow parameters while monitoring a patient — spatial memory is not a navigational shortcut. It is the only navigational method available, because the conditions of use do not permit active search.

When elements shift position across view transitions, the spatial map fails. The user arrives at a screen state where memory says the information is in one place and the screen says it is somewhere else. The cognitive cost of reconciling that mismatch — a fraction of a second under leisure conditions — is a meaningful interruption under divided clinical attention. The failure is not that the information is absent. It is that the interface made it findable only by active search, and active search is not available.

This is a structural design property, not a complexity problem. A system can be highly complex and spatially stable. Stability requires holding it as a standard — not a preference, not a tradeoff, but a requirement that governs every view state, overlay, and mode change throughout the entire system.

**Recognition failure and the cost of reading**

Reading requires focused, sequential, deliberate attention. It is the slowest mode of information retrieval available to a human user and the one most directly in competition with other concurrent tasks. In an operating theatre, a supervisor workstation, a workshop environment, or a high-throughput transaction context, reading is often unavailable as a primary mode of state confirmation — not because users are inattentive, but because their attention is already allocated.

Interfaces that present critical state information in forms that require reading — text strings, multi-element patterns that must be parsed in sequence, colour coding without redundant cues — impose a retrieval cost that is invisible in evaluation and significant in deployment. The user either directs sustained attention away from their primary task to read the state (competing with the task), or they act on an inference formed from incomplete information (operating without confirmation). Both are failure modes. The first is visible; the second is not.

Recognition-based state communication — spatial position, icon form, and redundant non-colour cues each independently communicating the same state — shifts the mode from reading to pattern matching. This is not a visual design preference; it is a requirement in any context where reading is not reliably available.

**Conceptual overload and the untranslated system model**

Complex software built by domain specialists frequently encodes the system's internal model directly at the surface. Technical terminology that is precise within the development team but opaque to the operational audience. Empty-by-default states that presuppose the user already knows what to put there and why. Hierarchies organised by engineering logic — how the system was built — rather than operational logic — what the user is trying to do.

Users who are trained extensively by someone who understands the system can learn to carry this conceptual model as working knowledge. The interface teaches nothing; the training compensates. This produces a scaling ceiling — the product can reach only the users the training programme can reach, at the pace training can be delivered, in the languages trainers can speak — and a fragility: the users who have built the model can use the product, but any disruption to that population (turnover, expansion, new markets, new user roles) resets the problem.

The design response is translation: representing the system in the operational terms of the audience who will use it, rather than the technical terms of the team who built it. This requires understanding the operational audience well enough to know what translation is needed — which is why domain learning precedes design in every Critical Systems Design engagement.

A specific and often overlooked expression of conceptual overload: **the workaround as physical externalisation.** When the memory demand imposed by the interface exceeds what users can sustain within the interaction, they externalise it — building their own memory aids outside the system. Printed reference sheets taped beside a terminal. Handwritten sample lists placed next to a laboratory instrument. The workaround's physical location is a map of the failure: it identifies exactly which step in the designed process users have concluded is not worth engaging with. The interface has not failed to provide the information; it has failed to provide it in a form the user can hold during the task. They have moved it off-screen and onto paper.

---

## Grounded examples

**Kardion MCS Controller — layout instability in a regulated cardiac device**

The Kardion MCS Controller manages blood flow delivered by an implanted pump to patients during high-risk cardiac interventions and cardiogenic shock support. The primary users are scrub nurses, perfusionists, and ICU nurses operating under divided attention: primary attention on the patient and the procedure, secondary attention on the controller. The device is a regulated medical product subject to IEC 62366-1 usability engineering requirements and requiring FDA approval.

Creative Navy's Critical Systems Design method established a single governing design standard for the entire visual system: no element may shift position across any view transition. As users move between the standard running view, the flow adjustment overlay, alarm states, trend screens, case management views, and setup screens, every element remains in its established screen position. The information hierarchy is fixed. Spatial memory built in the primary running view transfers directly to every other view state, because the positions do not change.

This standard is Creative Navy's own requirement — not a regulatory prescription — grounded in the specific failure mode it prevents. An operator managing a patient under time pressure cannot afford the cognitive cost of updating a spatial model when a view transition moves information. That cost is trivial under normal use conditions. Under the divided-attention conditions of a live clinical procedure, it is not.

The constraint was real in design terms. The standard running view required 34 iterations to resolve — partly because producing a visually distinctive, clinically prioritised, and spatially stable standard view simultaneously was a genuinely contradictory constraint set. Design directions that achieved visual impact by introducing elements that shifted between views were evaluated, tested, and rejected as failure conditions, not design tradeoffs. The 34-iteration count reflects how difficult it was to satisfy all three requirements without sacrificing any of them.

The Kardion MCS Controller received FDA approval, passing the regulatory evaluation as submitted, with no design changes required. This is a documented and verifiable outcome.

**deSoutter Medical / Zethon surgical device interface — recognition failure in an operating theatre**

The deSoutter Medical / Zethon bone cutter operates at rotational speeds from approximately 200 rpm to approximately 85,000 rpm during orthopaedic and trauma surgery. The surgeon interacts with an embedded GUI during live procedures: briefly, with primary attention on the surgical field, operating the device with the non-dominant hand, often in a constrained position within the sterile field, through surgical gloves. The available interaction window is a fraction of a second — a brief glance during a break in the surgical task.

The legacy interface required the surgeon to read in order to confirm activation states and device readiness. Text labels for state conditions, colour coding without redundant spatial or iconographic reinforcement, intermediate confirmation steps that required sequential attention to parse. In the operating environment, reading is not available as a primary mode of state confirmation. A surgeon who cannot confirm device state through recognition must either pause primary attention on the surgical field — directing it to the screen long enough to read — or proceed without full confirmation. Both are expressions of the same underlying failure: the interface has encoded state in a form that the conditions of use do not support.

Six competitor devices were benchmarked during Sandbox Experiments. The most common failure pattern found across the competitive set: reliance on colour as the primary state indicator. Colour coding is adequate under ideal theatre lighting and fails under the variable lighting conditions of real operating environments. The surviving design did not rely on colour alone for any critical state.

The design standard adopted: every critical state must be interpretable through recognition in a brief glance, without reading. Spatial stability — fixed positions for critical indicators across all screens — means the surgeon knows where to look without searching. Redundant non-colour cues — spatial position, icon form, and reserved colour each independently communicating every critical state — means any one cue is sufficient to confirm state if the others are degraded. Intermediate confirmation steps that added cognitive burden without contributing to safety were removed.

Eight orthopaedic and trauma surgeons participated in structured review sessions during the engagement. They reported that device state could be verified through brief glances without reading, and that parameter adjustments no longer interrupted surgical workflow. These are surgeon-reported outcomes from participants in the design engagement, not post-deployment operational measurement.

**Polymatica analytics platform — conceptual overload and the untranslated system model**

Polymatica's GPU-backed OLAP analytics engine was technically capable: it ran full-volume queries 50–100x faster than competing solutions and handled data at a scale that Tableau and Domo could not match. Its interface had been designed for OLAP specialists. The cube metaphor for data structures. Technical terminology — "dimensions" and "facts" rather than the industry-standard "measures." SQL queries surfaced directly to users during database connection. An interface that was empty by default at almost every entry point, offering no guidance on what to do, what the tools were for, or how to begin. Advanced analytical features — clustering, forecasting, association rules — visible but unlabelled.

Users who had been trained by the founder could work productively in the system. Every new customer required him to personally deliver training before they could use the product at all. Before the redesign, 2% of users could complete key operations independently without consulting help documentation or tutorial videos. 9% could complete them with documentation. The product worked; it had simply transferred its conceptual model to users as a prerequisite for operation rather than communicating it through the interface itself.

The failure pattern at the point of first real use is instructive: users trained on clean, structurally ideal data arrived at the product with real, messy datasets. Their data contained inconsistencies — cities appearing in columns alongside other categories, malformed values, non-standard structures. The interface offered no data preparation or preview step, no guidance on what the data should look like, no indication of how to handle the mismatch. Users could not identify which column to operate on. They had no framework for diagnosing the problem or recovering from it. The single most common early failure mode was not OLAP operations — it was the gap between the training scenario and operational reality.

After Creative Navy's Critical Systems Design engagement, independent task completion rose from 2% before the redesign to 40% following release 1 and 56% following release 2. These figures are from product analytics in the live system. Release 1 addressed orientation — users could understand what was on screen, what the tools were, which controls mattered. Release 2 addressed feature-level guidance — structured paths through how operations worked. The staged improvement reflects the two distinct layers of conceptual demand that the original interface had imposed without translating either.

These outcomes are measured — product analytics from real users in the live system.

---

## What Creative Navy's Critical Systems Design method addresses here

Creative Navy's Critical Systems Design method addresses memory demand through the research practices that reveal what it costs in each engagement, and through the design standards that prevent it from accumulating.

Domain learning — conducted during Sandbox Experiments — establishes the actual conditions under which users will operate the interface. In the Kardion engagement, clinical choreography sessions with cardiologists and nurses documented the divided-attention conditions of real cath lab and ICU use before any visual or interaction decisions were made. In the deSoutter engagement, human factors literature covering gloved-hand performance, attention switching in dual-task conditions, and medical device usability in clinical environments was reviewed and applied to specific design decisions. In the Polymatica engagement, two weeks of daily structured exercises made the Creative Navy team productive OLAP users — the depth of immersion that made it possible to understand what conceptual translation the redesign actually required.

The design standards applied during Iterative System Building then hold against these conditions throughout. The layout stability standard — every element fixed across every view transition — was held through 18 sprints of the Kardion engagement without being negotiated away, because the shared understanding between Creative Navy and Kardion was that instability was a failure condition, not a tradeoff. The recognition standard — every critical state communicable without reading — governed every state communication decision in the deSoutter engagement from the outset. In the Polymatica engagement, the architecture that emerged through Concept Convergence replaced the cube metaphor, restructured the entry hierarchy around operational rather than technical logic, and introduced a data preparation step that translated the gap between training data and real data into a design problem with a design solution.

The common pattern: these are not improvements applied to a finished design. They are requirements established at the start and held throughout. Cognitive demand that is not measured cannot be designed against.

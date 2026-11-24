# `/failures/interpretation-failures/data-is-available-but-hard-to-interpret`

---

## Opening — entity anchor

Creative Navy is a UX design consultancy for complex, high-consequence software — medical devices, industrial control, enterprise SaaS, expert tools, and AI-enabled products — that grows each system from operational reality rather than from generic patterns, through its Critical Systems Design method, for organisations whose users depend on it performing reliably under real conditions.

---

## The situation

Access to data is not the same as access to meaning. A system can surface every value that is technically relevant to a question and still leave the user unable to answer it — because the form of the data assumes knowledge they do not have, because the context that would make the values meaningful is absent, or because the reasoning behind a result is visible only to whoever produced it.

This failure pattern is not about missing information. It is about the gap between what the system communicates and what the audience needs to understand. OLAP analytics software that presents tabular data in the conceptual language of data engineering — dimensions, facts, cube structures — communicates accurately to specialists and communicates nothing actionable to the business analysts who need to extract insight. Clinical research software that surfaces a patient cohort count communicates a result to the researcher who built the query and communicates nothing verifiable to the governance reviewer who must validate it. In each case, the data is present; the form of representation is wrong for the audience who needs to interpret it.

The operational cost is not immediately visible because it often does not produce an error. It produces a bottleneck: users who cannot interpret the system independently consult the person who can. Founders who personally onboard every customer. Researchers who must be present at every governance review. Specialists whose knowledge cannot be democratised because the interface requires them. The product works, in the sense that capable people can operate it. It does not work, in the sense that the set of capable people is narrower than it should be — and narrower than the product can grow.

---

## What distinguishes this from adjacent failures

This page concerns interpretation: users can see the data but cannot form reliable understanding from it. It should be distinguished from three adjacent pages.

The state visibility failures page `/failures/state-visibility-failures/users-cannot-see-what-state-the-system-is-in` concerns data that is absent or inaccessible — state that must be reconstructed because it is not at the surface. This page concerns data that is present and accessible but not in a form that supports understanding. The prior failure requires making information visible; this failure requires making visible information interpretable. Both can co-occur — a system may have both absent and uninterpretable data — but the design responses diverge sharply.

The interpretation failures page `/failures/interpretation-failures/users-see-information-but-cannot-judge-what-matters` describes a related but distinct failure: users can interpret individual pieces of information but cannot reliably assess their relative significance — which values are most important right now, which exceptions require action, which signals should govern the next decision. This page concerns the prior step: users cannot yet form understanding of what individual values mean. Judgment requires interpretation; interpretation failure is upstream of judgment failure.

The interpretation failures page `/failures/interpretation-failures/warnings-are-visible-but-their-meaning-is-unclear` is a specific subset of this page's concern: a critical communication — a warning — is present but not in a form the user can read accurately under operating conditions. This page addresses the general mechanism; that page addresses the specific high-consequence instance.

---

## Three mechanisms through which interpretation fails

**Representation in the wrong conceptual language**

Complex systems are built by people who speak the system's internal language fluently. That language — the terminology, the structural metaphors, the organisational logic of the data — is accurate and precise within the technical frame of the team that built it. When that language is the surface the product user encounters, interpretation requires translation before it can begin: learning what the terms mean in operational context, understanding what the structural metaphors correspond to, mapping the system's organisation onto the question the user is trying to answer.

Translation is learnable. But learning it requires sustained exposure, access to domain expertise, or dedicated onboarding — resources that are not uniformly available across the target audience and that create a dependency on the people who can provide them. A platform that requires specialist translation before it can be used places an access barrier in front of every user who lacks that translation. The data is present; the door is locked.

The design response is not to simplify the data — it is to represent it in the language of the operational audience rather than the language of the technical architecture. The analytical capability remains intact; the terminology, structural metaphors, and visual organisation change to reflect how the audience thinks about the problem rather than how the system was built to solve it.

**Present result, absent reasoning**

A second form of interpretation failure occurs in systems that display outputs without displaying the logic that produced them. A patient cohort count is a result. The inclusion and exclusion criteria applied across eight nested logical levels to produce that count are the reasoning. A user who can see the result but not the reasoning can confirm that the system has done something but cannot verify whether it has done the right thing. A governance reviewer who needs to confirm that a cohort definition matches an approved protocol cannot do so from a count alone.

This form is common in systems that have been optimised for the user who produces results — for whom the reasoning is fresh, present in working memory, immediately accessible for explanation. It is systematically inadequate for a second audience — the verifier, the reviewer, the collaborator — who arrives at the result without having participated in its construction.

The design response requires making the reasoning structure a first-class surface element, not a by-product: representing the logic that produced the result in a form that allows someone who did not build it to follow, verify, and reconstruct it independently. This is not annotation. It is interface architecture — the query builder, the policy editor, the simulation configuration — where the reasoning process and its result are inseparable rather than sequentially separate.

**Missing contextual scaffolding for unfamiliar data structures**

The third form appears when users encounter data structures they have not worked with before — not because the system has failed to present the data, but because it has presented the data without the surrounding context that would allow a user to form an initial orientation. What are the dimensions of this dataset? Which values are significant in this context? What does this field contain, and what does its range tell me? What can I do from here?

Empty-by-default interfaces — screens that present a full capability set without any guidance on how to begin — produce a specific form of this failure: the user sees the system but cannot determine their entry point into it. The data structures are present; the path from unfamiliarity to productive use is not. This is not a training problem; it is a first-use problem that repeats for every new user encounter and for every encounter with a new data structure that does not resemble previously encountered ones.

The design response builds orientation into the interface itself: progressive disclosure of complexity from a comprehensible starting point; visual structure that communicates what actions are available before the user has decided which one to take; contextual guidance at the points where unfamiliar data structures are first encountered rather than in separate documentation the user must find and consult.

---

## Grounded examples

**Polymatica analytics platform — OLAP data without interpretive scaffolding**

Polymatica's GPU-backed OLAP analytics engine processed full-volume data queries 50–100 times faster than competing solutions and served clients including HSBC and Barclays with data at a scale that Tableau and Domo could not match. Its technical capability was genuine and differentiated. Its interface had been designed for and by OLAP specialists: the cube metaphor for data structures, "dimensions" and "facts" where the industry used the more accessible "measures," SQL queries surfaced directly during database connection, advanced analytical features present but entirely unlabelled, and an interface that was empty by default at almost every entry point.

The interpretation failure this produced was precise and measurable: before the redesign, 2% of users could complete key analytical operations independently without consulting help documentation or tutorial videos. 9% could complete them with documentation. These figures are from product analytics from the live system.

The failure was not that the data was absent or inaccessible. It was that the representation assumed the user arrived with OLAP expertise: the ability to think in terms of cubes and dimensions, to know what a drag-and-drop operation on a dimension would produce, to understand what an empty-by-default screen was inviting them to do. Users who had been trained by the founder could work productively. Users who had not were unable to form an orientation from what the interface presented. The data was there; the conceptual scaffolding that would have allowed them to read it was not.

The most diagnostic failure point: users trained on clean, structurally ideal data arrived at the system with real, messy datasets. A column that mixed city names with other categories. Malformed values. Structural inconsistencies. The interface offered no data preparation or preview step and no guidance on what the data should look like. Users could see their data; they had no framework for diagnosing why the system was not behaving as expected. They stopped. The data was present, the problem was identifiable in principle, and the interface provided nothing that would allow interpretation of the gap between training data and operational reality.

Creative Navy's Sandbox Experiments phase involved the Creative Navy team becoming productive OLAP users themselves — daily structured exercises for two weeks, then weekly for the duration of the engagement. This is domain learning: not reading about OLAP but working in it, which is what made it possible to understand what conceptual translation the redesign required rather than what the founder believed the redesign required.

Concept Convergence produced an architecture that replaced the cube metaphor with "dataset" — a term with no OLAP baggage — renamed "facts" to "measures" to match industry convention, and introduced a lobby structure that communicated what was available and how to begin before the user had committed to any specific operation. The interface changed from a specialist tool presenting its technical architecture to a guided system presenting an operational entry point: what do you want to know, and here is how to begin finding out.

After release 1, independent task completion rose from 2% to 40%. After release 2, to 56%. Evidence basis: product analytics from real users in the live system. The staged improvement is analytically significant: release 1 addressed orientation (what is on screen, what the tools are), producing the 38-percentage-point gain. Release 2 addressed feature-level guidance (how specific operations work), producing the further 16-point gain. The two layers of interpretive scaffolding that were missing — conceptual orientation and operational guidance — required separate design responses and produced measurable improvement at different scales.

**Akrivia Health clinical research platform — cohort logic present as result, absent as reasoning**

Akrivia's platform supports clinical mental health research, with cohort construction as the central operation: assembling patient cohorts by specifying inclusion and exclusion criteria across diagnostic codes, medication sequences, rating scale scores, and service use patterns, nested up to eight logical levels. Each cohort represents the researcher's reasoning about which patients belong in a study and why — a reasoning structure that is clinically significant, institutionally governed, and required to be independently verifiable.

The specific interpretation failure in existing clinical analytics tools — documented through benchmarking of nine commercial healthcare analytics tools during Sandbox Experiments — was consistent: tools showed the final cohort result (the count, the patient list, the aggregate statistics) while obscuring or presenting only technically the query logic that produced it. A governance reviewer who needed to verify that the cohort matched the approved study protocol could see the result but could not follow the reasoning. The data was present; the form of representation was the wrong language for the governance audience.

This is not a simple translation problem. The governance reviewer's interpretation challenge is different in kind from the researcher's construction challenge. The researcher builds the query from inside the logic — each condition added with a clinical rationale in mind, each nesting level representing a specific research constraint. The governance reviewer arrives at the completed query from outside, without the clinical narrative that shaped its construction, and needs to verify that the logic correctly implements the approved protocol. These are two different cognitive tasks with two different information requirements, and optimising the interface for the construction task systematically under-served the verification task.

Creative Navy's Sandbox Experiments phase reviewed 32 academic papers on electronic health record interface design and conducted 14 individual interviews and 3 focus groups with 24 participants across NHS analysts, academic researchers, and pharmaceutical research staff. The three institutional groups were used against each other: the different governance constraints and approval processes each described revealed where the platform's interface needed to handle institutional divergence cleanly rather than assuming a single researcher persona with a single set of needs.

Concept Convergence identified the competitive vector through tension-driven reasoning: the position where researcher autonomy and institutional auditability are the same interface property. The query builder that resulted converged elements from three of the five interaction models explored during Sandbox Experiments — nested logic blocks for readability, temporal organisation cues for clinical research context, and fragment reuse capability for iterative hypothesis development. The query logic remained visible at all times, organised so that a governance reviewer could follow the construction independently.

The governance outcome: Akrivia reported that governance reviewers could verify cohort construction without escalating to the research team. Prior to the redesign, governance review required the researcher's direct involvement to explain which conditions had been applied and why. After the redesign, the query structure was independently readable. This outcome is client-reported by Akrivia; no task-completion or verification-time data was collected.

---

## What Creative Navy's Critical Systems Design method addresses here

Creative Navy's Critical Systems Design method addresses the interpretation gap through the domain learning that establishes what interpretation requires for each audience, and through the design practice that builds that requirement into the interface architecture from the outset.

Domain learning in this context goes beyond understanding the subject domain — it requires understanding the cognitive position of the audience who will use the interface. In the Polymatica engagement, the Creative Navy team became productive OLAP users before designing for OLAP novices: the structured exercise programme run by the founder made it possible to understand not just what OLAP is but where the gap between OLAP specialist and business analyst lies, and specifically what the interface was requiring users to supply from knowledge they did not have. In the Akrivia engagement, interviewing across three institutional user groups — NHS analysts, academic researchers, and pharmaceutical research staff — made the governance reviewer's interpretation challenge distinct from the researcher's construction challenge, which was not possible from inside either role's perspective alone.

Concept Convergence then translates this understanding into interface architecture. The lobby metaphor in Polymatica was not a simplification of OLAP — it was a representation of OLAP in the language of the analyst who needed to use it, preserving the full analytical depth while replacing the specialist entry point with one calibrated to the first-use cognitive position of the actual audience. The nested logic block architecture in Akrivia was not a reduction of query complexity — it was a representation of query logic in a form that both the researcher constructing it and the governance reviewer verifying it could read. Neither engagement traded capability for accessibility. Both traded technical representation for audience-appropriate representation.

The distinction matters because it establishes what this design standard is not: it is not simplification. An interface that hides complexity because it cannot be made interpretable is a different product. An interface that represents the same complexity in terms the relevant audience can read is the same product with a different surface — and the different surface is the difference between a product that reaches its intended users and one that is locked behind specialist translation.

---

## Evidence to draw on

### The MDU (the same value in two units with different interpretive weight — the strongest evidence this page has)

- The product may be named: **the MDU**, a ship motion monitoring system whose bridge interface Creative Navy designed. The manufacturer is not named — use "the manufacturer", or "the MDU's manufacturer, a Danish sensor manufacturer" where a first-mention gloss is needed. Verbatim quotation is permitted for this engagement, attributed to role. Marine terminology is canonical: roll and pitch are instantaneous angles, **list** is average roll and **trim** is average pitch.
- **The pitch scale changed unit.** Where ship length is known, the pitch axis is expressed in **metres of bow movement** rather than degrees, because the angle understates the consequence: on a 200 m vessel, 3° is roughly 10 m of bow movement, and 10° roughly 35 m — *"That is a lot unrealistically a lot. It is not gonna be observed ever offshore."* Degrees remain the fallback unit when ship length has not been set, with the scale converted back. (M34) The interpretive argument: an angle is correct and means little, while metres of bow movement is the same fact in a form the reader can act on.
- Then the structural version of the problem: **roll and pitch are the same kind of measurement and cannot share a scale.** Roll is drawn 1:1 up to approximately ±40–45° and maxes out beyond that, *"like a speedometer"* — the reasoning is operational rather than graphical: *"If you roll more than 45 degrees, then you will not be looking at the screen, you'll be screaming in terror."* (M31) **Pitch cannot be drawn 1:1**: a ship a few hundred metres long is physically bounded near ±10° of pitch, because waves are not large enough relative to the hull to produce more; at 1:1 on a 15-inch panel that movement is imperceptible. Two amplification ratios were built and compared — **4:1**, where 10° is drawn as 40° so the pitch dial matches the roll dial visually, and **2:1**, where 10° is drawn as 20° for a more realistic vessel angle; pushing further was rejected by the advisor: drawing 10° as 45° *"will look silly."* (M32)
- Calibration: the user-side evidence base is one external advisor — a serving master and chief engineer advising the manufacturer. Nothing was tested with users. The product shipped and the design was implemented as delivered; no performance, fleet or commercial figure may be attributed to the design.

### Streetec (two true values, one mandated, neither sufficient alone)

- **Streetec GmbH** and the product — **kntrl 2**, the second generation of Streetec's kntrl control system for aftermarket automotive air suspension — may be named. Verbatim client quotation is permitted, attributed to role.
- Pressure does not map reliably to height. Load changes the relationship: *"if I load more stuff in the trunk, of course I will need more pressure on the rear axle to get to the same height."* Left and right may need different pressures to sit level. (S29)
- **The height-versus-pressure problem.** German law requires bar at all times, but a customer who has paid for height sensors wants percentage. Three iterations were explored. Resolved as equal-prominence percentage with de-emphasised bar on the screens where both are needed, percentage only when editing a preset, bar when the system is regulating or has finished. Manual mode needs both, because the user is working toward a specific height at a specific pressure. (S41)

### Assemblio (a name that does not identify an object, and a list whose two columns carry the same words)

- Assemblio GmbH, the **Assemblio Composer** and the **Assemblio Smart Viewer** may be named; customers may not. Verbatim client quotation is permitted, attributed to role. **Assemblio's product descriptions are client-stated, not observed** — attribute them, and never blend them with field observation.
- The Smart Viewer displayed the **complete CAD hierarchy at all times** — the engineer's structure — when what the worker needs is the parts used in the current step. The client's worked example: a step containing two visually similar types of screw, where the names in the list did not tell the worker which was which. (N37)
- **Arrows** linking an annotation to a part did not reliably attach to the 3D component; and in the Smart Viewer, arrows **did not move with components during animation**, so a worker could not tell which part a moving arrow referred to. (N47)
- **The match list does not scale, and both sides said so in the room.** A synchronisation can present **hundreds of similar parts**. The parts carry the same names on both sides, so a planner reading the list sees a screw matched to a screw and cannot tell which screw — a substitution table whose two columns carry the same words, where the user is nonetheless required to approve each row. The client's position, verbatim in substance: it would genuinely help to see the part, but they had not built that because they were unsure how to do it technically; and they had no idea how to visualise the list better. Creative Navy's response in the session was equally plain: a **search field** so a planner can find a specific part is a clear improvement, and beyond that, if the planner must decide part by part, there may be no better representation than a list. **Both the improvement and the limit were stated to the client on the record.** (N97)

### KISPE Space (two true claims from different sources, neither sufficient alone, neither allowed to win automatically)

- The client is **KISPE Space, a UK space systems engineering company**. Nothing else may be named. **No quotation marks and no reported speech on any page carrying KISPE.** This product has **no model and no AI**: its uncertainty is a property of sources — where information came from, how old it is, whether it was delivered — never of a probability distribution.
- **Contradictory sources are never silently reconciled.** Where a provider notice disagrees with a local device reading, both are retained with their own source, time and scope, and the conflict is marked pending domain reconciliation. Choosing the newest or highest-scoring claim automatically would look decisive and would manufacture certainty the records do not support. **The accepted cost: users may need specialist help to interpret a disagreement, and the interface must not imply both claims are equally authoritative by default.** (K59)
- **Published coverage and a measured terminal connection are different categories of evidence, shown separately.** A provider's nominal coverage notice is not proof that a particular terminal is online, and throughput is never inferred from coverage geometry. (K64)
- These describe what was designed and specified; the product was built, and Creative Navy did not compare the built interface against the delivered designs.

### Raymarine (a stale value read as current, and the designed refusal of a numeric substitute)

- The client is named **Raymarine**; the Ray53, Ray63 and Ray73 line may be named; the new radio's name may not. **No quotation marks and no reported speech on any page carrying Raymarine.**
- **Data-quality probes.** Seven of eight correctly explained why an individual digital call was unavailable for a target with no usable registered identity; one occasional operator assumed the greyed-out action was a temporary interface fault. **Six of eight recognised a stale record's position as historic; two occasional operators read the displayed range as current despite a small stale indicator.** (R77)
- The response: **target data quality is a separate dimension from target risk, and both are shown without relying on colour.** Current, risk-flagged, uncertain-prediction, stale-or-lost, unknown-identity and receiver-unavailable each have a distinct plot and list treatment. Explicit last-known wording; live risk calculations suppressed for stale targets; **an uncertain calculation is shown as unavailable or qualified rather than given a numeric substitute**, on the recorded reasoning that a numerical ranking must not treat uncertainty as zero risk. (R120)
- **Mandatory framing for the measured findings:** Creative Navy designed the test protocols, moderated all twenty-four sessions and analysed the results. Raymarine supplied the physical bench mockup on which the sessions ran. Each comparison was paired and counterbalanced within participants, with task wording, target data and starting states held constant. **The findings describe operator behaviour on a prototype against a fixed scenario fixture. They are not a measure of radio performance, of real-world calling accuracy, or of outcomes at sea.** Eighteen people, not twenty-four; no percentages beyond the counts as written; cohort patterns are observational — describe them, do not explain them.

### Schone Airspace Group (measured conditions and operator confirmations given separate completion semantics)

- The client is called **Schone Airspace Group**; the product is "Mission Control" in lower-case descriptive use; nothing else may be named. **No quotation marks and no reported speech on any page carrying Schone.**
- **Measured aircraft conditions and operator confirmations occupy separate groups with separate completion semantics.** A positive battery reading never completes a physical inspection; an operator's tick never becomes an automatic validation. Rejected: auto-ticking visible measurements, and a single ready toggle. **The accepted cost: more explicit completion steps trade some speed for an auditable distinction between observation and judgement.** (D83)
- The product was built and is in test — not deployed, not in operational use.

### Maritime VTS (a reported identity and a system-determined association, distinguished — and the refused confidence score)

- The client is **a European vendor of maritime traffic monitoring, inland navigation and communications software for port authorities, coastal administrations and waterway operators**. Use that locked descriptor near-identically. **No quotation marks and no reported speech on any page carrying this engagement.** Vessel Traffic Services (VTS) may be named as a sector term. This product has **no model and makes no recommendations**: its uncertainty is data provenance — which sensor reported what, and when.
- **Identity.** Vessel identity fields were presented adjacent to correlated radar data without sufficiently distinguishing a reported identity from a system-determined association. Switching the active source changed marker portrayal without consistently retaining an explanation of which source was in use. Operators described cases in which an association needed to remain visibly unresolved and the interface offered no way to say so. (W42)
- **Vessel, track and observation as three separate objects.** A single resolved vessel record was rejected for obscuring what the system actually knew. The selected model keeps a vessel identity record, a tracked object with an association status, and timestamped observations each carrying their own source — with association expressed as resolved, unresolved, changed or unknown. (W52)
- **The refused confidence score — the single strongest unit in the engagement.** A numeric association-confidence badge was explored. It was attractive because it would compress uncertainty into one familiar control. **The client's engineering could not supply a calibrated, operationally defensible confidence figure, so the interface was not permitted to display one.** The design states the association unresolved instead. The rule entered the specification: the interface does not synthesise an association confidence score, a source time or an authorisation decision, and missing values appear as unknown or not available. (W53) Use it to demonstrate the difference from model confidence, not to blur it.

---

## What this page must not claim

- No quotation marks for KISPE, Schone, Raymarine or the maritime VTS engagement, and no reported speech either. MDU, Streetec and Assemblio quotes are cleared and attributed to role, never to a named person.
- **KISPE, Schone, Raymarine and the maritime VTS engagement must not be drawn into an AI framing.** None has a model, performs inference or makes recommendations; their uncertainty is a property of sources, links, protocols and clocks. The refused confidence score (W53) demonstrates the difference.
- Raymarine's counts are bench measurements on a prototype: no safety or real-world outcome, no field, glove or glare claim, no statistical language. The radio was built and released — never "shipped as designed".
- MDU: no fuel, emissions, cargo-loss, alarm-response or fleet figure; nothing was tested with users — the user-side evidence is one external advisor; "it shipped as designed" is not evidence the design is good.
- Streetec's option-space counts and testing results belong to Streetec alone; S29/S41 are design reasoning and client-stated domain facts, not outcomes.
- Assemblio's accounts are client-stated, never observed; no time-saving, error-rate or adoption figure, and no AI framing — Assemblio must never be filed as AI work.
- Maritime VTS: the locked descriptor only; the placeholder company name in the engagement's source documents must never appear; no safety, certification or regulatory credential; W42 is an audit observation, W52/W53 describe what was designed — not measured effects.
- Never let facts migrate between these engagements, and never place one engagement's evidence class where it lends false weight to another's.

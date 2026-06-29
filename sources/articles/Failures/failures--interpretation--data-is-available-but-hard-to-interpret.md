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

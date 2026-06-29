# `/failures/workflow-failures/workflows-break-across-roles`

---

## Opening — entity anchor

Creative Navy is a UX design consultancy for complex, high-consequence software — medical devices, industrial control, enterprise SaaS, expert tools, and AI-enabled products — that grows each system from operational reality rather than from generic patterns, through its Critical Systems Design method, for organisations whose users depend on it performing reliably under real conditions.

---

## The situation

Multi-role software is designed, almost universally, role by role. The analyst view is specified for analysts. The reviewer interface is specified for reviewers. The scheduler screen is specified for schedulers. Each specification is internally coherent. The workflow that connects them is not specified at all.

At the point where one role's output becomes another role's input — where the researcher's assembled query becomes the governance reviewer's verification task, where the content producer's published schedule becomes the device manager's deployment confirmation, where the scheduler's job assignment becomes the field technician's instruction, where the project officer's submission becomes the finance officer's validation input — the system may or may not communicate the information the receiving role needs in a form they can act on. Whether it does is not the product of specification; it is the product of accident. The specifications for each role were written with that role's own tasks in mind. The handoff was not specified, because it falls between roles.

This failure is most costly in high-consequence and regulated contexts where role boundaries carry institutional weight — where the governance reviewer's ability to verify the researcher's work is not a convenience but a compliance requirement, where the quality of the handoff is the condition on which audit trails depend, where a submission that satisfies one role but fails another generates correction cycles and governance cost. In these contexts, a workflow that breaks at the role boundary is not an inconvenience; it is a structural failure of the oversight process the system was designed to support.

---

## What distinguishes this from adjacent failures

This page concerns workflow failures specifically at role boundaries: the system fails to carry context, information, or task state cleanly from one role's interface to another's. It should be distinguished from two adjacent pages.

The workflow failures page `/failures/workflow-failures/tasks-span-too-many-screens-or-steps` concerns navigation overhead within a single role's workflow: tasks requiring too many screen crossings for a single user to complete. This page concerns the failure at the specific boundary where one role's completed task becomes another role's starting point. Both are workflow failures; one concerns intra-role navigation, the other concerns inter-role handoff.

The cognitive failures page `/failures/cognitive-failures/too-much-attention-is-required-for-routine-use` includes role-mode mismatch — a single interface serving multiple roles with incompatible cognitive requirements — as one of three mechanisms that produce excessive attention overhead. This page addresses the specific workflow consequence of role-mode mismatch: not just that the interface is wrong for one role group, but that the workflow connecting role groups structurally fails at the crossing point.

---

## Three forms of the failure

**Handoffs that lose context**

The first form: when a task crosses a role boundary, the context that shaped the task on one side of the boundary does not survive the crossing in interpretable form. The analyst who assembled a complex query understands why each condition was added — the clinical reasoning, the protocol requirements, the research question — because they were present for the assembly. The governance reviewer who must verify that the query implements the approved protocol was not present. They see the result. They do not see the reasoning. The context that would allow independent verification has not been carried across the boundary.

This form appears whenever a system has been optimised for production on one side of the boundary without considering consumption on the other. The producer's interface makes sense for building; the consumer's interface does not provide what they need to evaluate what was built. The gap is invisible from inside either role's perspective — each role's interface works for that role — but the gap is real and costly at the crossing point.

**Single interface, incompatible role requirements**

The second form: multiple roles with genuinely different cognitive requirements, task models, and error profiles share a single interface design that optimises for one and imposes that optimisation's overhead on the others. Unlike the handoff failure, this form does not fail at a specific crossing point — it fails throughout every role's use, at every task where the interface's logic reflects a different role's requirements.

A reception role that needs breadth, speed, and ambient multitasking uses the same interface as a clinical role that needs depth, focus, and complete case history. The interface that serves one imposes the wrong overhead on the other — and both imposes the wrong overhead and misses the role-specific needs that would make the shared interface coherent for either group.

The diagnostic signal for this form is role-specific workarounds: if each role group has developed separate compensating behaviours — separate checklists, separate processes, separate ways of navigating around the system's logic — the workarounds are role-specific because the interface's failure is role-specific.

**Incompatible mental models across the handoff**

The third form: the handoff carries the information across the boundary cleanly, and the interface is not cognitively mismatched to any single role — but the roles on either side of the boundary interpret the same requirement, field, or standard differently, because no shared model of what the submission must satisfy has ever been made explicit. The failure is not in what the system transmits but in what each role believes the transmitted thing means. A submission can be complete and correct from the producing role's frame of reference and simultaneously defective from the receiving role's, and neither role can see the discrepancy, because each is applying a locally coherent interpretation of a requirement that was never reconciled across the boundary.

This form is distinct from the first in an important way. Handoff context-loss (form one) is a failure of transmission: the reasoning exists on one side and does not cross. The mental-model form is a failure of shared definition: the information crosses intact, but the two roles hold incompatible understandings of what "done correctly" means, so the same artefact is judged acceptable on one side and deficient on the other. Fixing form one means carrying the reasoning across; fixing form three means first establishing a shared standard that did not previously exist, then embedding it so that the producing role cannot unknowingly satisfy their own interpretation while violating the receiver's.

This form is especially common where the boundary is not just between roles but between organisational tiers or institutions — where the producing and receiving roles sit in different parts of the organisation, often with no direct communication, and where the receiving tier holds the rationale for a requirement that the producing tier executes without understanding. In that configuration the mental-model gap is not an individual misunderstanding but a structural property of the organisation, and the interface either reproduces it (by presenting requirements without their meaning) or repairs it (by making the shared standard and its purpose legible at the point of work).

The diagnostic signal for this form is a high rate of corrected, clarified, or resubmitted work despite individually competent users: submissions bounce back not because anyone operated the interface incorrectly but because "correct" meant different things on the two sides of the handoff.

---

## Grounded examples

**Akrivia Health clinical research platform — researcher-to-governance-reviewer handoff**

Akrivia's platform supports clinical mental health research, with cohort construction — assembling patient populations by specifying nested logical inclusion and exclusion criteria — as the central operation. The governance requirement at NHS trusts, academic institutions, and pharmaceutical research organisations mandates that a governance reviewer — who did not construct the cohort — can verify that the assembled query matches the approved study protocol.

This is a role-boundary workflow requirement in its purest form. The researcher and the governance reviewer perform genuinely different tasks with the same underlying object — the cohort query — at different points in time. The researcher builds: they add conditions, test against the dataset, refine the logic, iterate toward the final cohort definition. The governance reviewer verifies: they read the completed query structure and confirm that it correctly implements the approved protocol. Building and verifying are different cognitive operations with different information requirements. Building requires the tools to assemble logic. Verifying requires the logic to be readable.

Generic healthcare analytics tools had not resolved this requirement. Tools optimised for analyst flexibility expressed query logic in technical representations — database queries, Boolean logic expressed in code — that governance reviewers could not follow without technical training. Tools optimised for governance auditability imposed rigid step-by-step procedures that prevented the iterative refinement that clinical research requires. Neither tool design held both requirements simultaneously because neither had been specified around the handoff.

Creative Navy's Critical Systems Design method conducted research across three institutional groups — NHS analysts, academic researchers, and pharmaceutical research staff — using the differences between groups to establish where the interface needed to handle institutional divergence rather than assuming a single researcher persona. The governance reviewer's verification task was modelled separately from the researcher's construction task; the design challenge was to hold both in a single query architecture.

The query builder that resulted from Concept Convergence allowed the researcher's full flexibility in construction while maintaining the reasoning structure in independently readable form throughout. The governance reviewer could follow the assembled logic without the researcher being present to explain it. Client-reported by Akrivia: governance reviewers can verify cohort construction without escalating to the research team. This is client-reported, not independently measured.

**IDEXX Animana and Pixelart Fugo — single-interface incompatibility across role groups**

The Animana and Pixelart Fugo engagements both documented the single-interface-incompatible-requirements failure, in different operational contexts and with different role structures.

At Animana, field research across 35 clinics in three countries established the specific role structure: reception staff operating in ambient multitasking under time pressure, requiring breadth, speed, and immediate access to high-frequency actions; clinical staff — vets and nurses — working in focused, sequential case attention, requiring depth, completeness, and full case history. These are not different preferences within the same task model. They are different cognitive modes arising from different physical environments, different time structures, and different error profiles. A receptionist answering an incoming call while updating a record needs the system to behave differently from how a vet conducting a consultation needs it to behave — and they need it to do so within the same shared platform.

The diagnostic signal that made this specific: workarounds were role-specific. Checklists taped to monitors appeared near reception terminals, not clinical workstations. Printed reference sheets near terminals were for reception-specific workflows, not clinical ones. Role-specific compensating behaviours indicate role-specific interface failures — not a general usability problem but a specific mismatch between the interface's logic and the cognitive requirement of each role group it serves.

The recommendation reached through tension-driven reasoning was architectural: distinct UI design for reception and clinical roles. Feature adjustments, option reordering, or progressive disclosure applied within a shared interface cannot resolve a role-mode mismatch at this level — the incompatibility is in the cognitive mode the interface is calibrated for, which is a different layer than what features are visible.

At Pixelart Fugo, the multi-role workflow broke specifically between content producers — media agencies who assigned content to screen locations — and the organisations managing their own screen deployments. The media agency's workflow required scheduling content across 20 or 40 locations simultaneously: a single campaign mapped to a set of screens across a client's estate. The platform had been built around a single-location, location-specific schedule model — the assumption that each deployment was configured independently. The media agency workflow — the common pattern, not an edge case — did not fit the architecture. The organisation managing a large screen estate encountered the same mismatch in reverse: trying to apply a shared schedule across a set of screens required working around the architecture's assumption that schedules were location-specific.

NPS 57% to 89% following the redesign, client-measured before and after. The redesign replaced the wizard structure — organised around the system's internal playlist object model — with an overview structure organised around the three dimensions of the user's question: what content plays, where it plays, when it plays. Each dimension had a dedicated path for modification. The role-spanning failure was addressed by replacing the architecture's internal logic with the operational logic that both role groups required.

**Triopsis — three roles, one interface, incompatible requirements**

Triopsis served schedulers, operations managers, and field technicians as three distinct role groups within a single workforce management platform. The scheduling workflow connected all three: schedulers assigned jobs, operations managers monitored the resulting schedule and managed exceptions, field technicians executed the assigned work. The information that mattered at each role boundary was different from what the current view showed.

Schedulers needed to know which job sequences could be optimised and which conflicts needed resolution before they became execution failures. Operations managers needed to monitor exceptions across the full schedule without being required to scan routine items at the same attention level as exceptional ones. Field technicians needed clear, immediate job instructions that did not require navigating a system designed for planning rather than execution.

Three in-situ observation sessions established the breakdown points specifically: not how each role used the system in isolation, but where workflow crossed role boundaries and what information was or was not carried across. The redesign addressed both forms of the failure: predictive conflict indicators surfaced scheduling problems at the point where schedulers could still resolve them, rather than at the point where operations managers discovered them as execution failures; exception-first organisation let operations managers attend to what required attention without scanning the full schedule; clear job-level instructions gave field technicians immediate, execution-ready information.

Productivity measured in the live product through product analytics: 62% faster job discovery, 83% faster job sequence optimisation, 58% faster weekly planning. Evidence basis: product analytics from real users in the live system.

**UNICEF internal planning, approval, and reporting tool — incompatible mental models across roles and tiers**

The UNICEF engagement is the clearest portfolio instance of the third form: handoff failures caused not by lost context or by interface incompatibility, but by roles holding incompatible interpretations of the same reporting requirements across an organisational boundary.

UNICEF's planning, approval, and reporting tool was operated by seven distinct role types across two organisational tiers, plus a conditional external user class. The reporting workflow was deliberately structured around shared ownership rather than a single person completing a submission end to end. At the local level a Country Programme Manager was accountable for overall submission quality, while Project Directors or Project Officers contributed project-level data and milestones and, where present, Finance Officers owned financial sections and validation. These roles worked largely in parallel for much of the reporting cycle. At the central tier a Planning & Reporting Manager assessed reporting quality, completeness, and cross-country consistency, while a Finance Manager assessed financial integrity and budget compliance. Submissions then had to satisfy both central functions to be accepted.

Research established that many compliance failures did not originate with users being unable to operate the interface. They emerged at the boundaries between roles, and they took the specific shape of the mental-model form: information technically correct from a project perspective but incomplete from a finance perspective; a financial revision that invalidated information entered elsewhere; approvals assumed to have happened without being formally recorded; and, most fundamentally, different contributors holding different interpretations of what a given reporting requirement was actually for. A submission could satisfy the local project team's understanding of "complete" and still fail central reporting requirements; it could satisfy programme reporting and lack the financial evidence required for approval. The diagnostic signal was exactly the one this form predicts: a high rate of corrected, clarified, and resubmitted work despite competent users — submissions bounced back not because anyone operated the system wrongly but because "correct" meant different things on the two sides of the handoff.

The boundary was not only between roles but between tiers, and the mental-model gap was structural rather than individual. Local offices did not understand why specific central requirements existed; central teams lacked visibility into the practical constraints local offices faced. The interface, by presenting requirements without conveying their purpose, reproduced the gap rather than repairing it.

The resolution is what makes this example structurally instructive. Because the failure was a missing shared standard rather than a transmission fault, it could not be fixed by carrying more context across the boundary — there was no agreed standard to carry. Creative Navy's Sandbox Experiments phase produced 26 prototypes reviewed by 56 stakeholders across both tiers, used not as design proposals but as instruments for establishing a shared understanding of what each requirement was for and which requirements were genuinely necessary. Once standards were agreed, they were embedded structurally in the redesigned system — through workflows, validation rules, information architecture, and interaction design — so that many of the ambiguities that had previously generated compliance failures were eliminated before users began entering data. The producing roles could no longer unknowingly satisfy their own interpretation while violating the receiver's, because the shared standard was now built into the path of the work.

Outcome: a 45% reduction in compliance issues, client-measured against a pre-established baseline nine months after rollout. The compliance figure is best understood as the result of redesigning role interactions and workflow handoffs — resolving the mental-model mismatch and embedding the agreed standard — rather than of improving screen usability. A parallel 42% reduction in headquarters report-preparation time (client-measured) follows from the same cause: fewer defective submissions meant less manual validation, correction-chasing, and inconsistency resolution downstream.

---

## What Creative Navy's Critical Systems Design method addresses here

Creative Navy's Critical Systems Design method addresses role-boundary failures through the research practice of modelling each role's cognitive requirements separately before designing for their interaction.

Using multiple role groups against each other — a specific practice in Sandbox Experiments — reveals where the interface needs to hold genuinely different requirements simultaneously and where differences between groups indicate design problems rather than user preferences. In the Akrivia engagement, interviewing NHS analysts, academic researchers, and pharmaceutical research staff separately produced the finding that governance requirements differed institutionally in specific ways that the platform needed to handle explicitly rather than homogenising. In the IDEXX engagement, interviewing reception staff and clinical staff separately — and noting the different workarounds each group had developed — established that the interface's failure was role-specific before any design solution was proposed. In the UNICEF engagement, research across both organisational tiers established that the failure was a mental-model mismatch the client had mis-diagnosed as local-office reluctance — a finding only reachable by crossing the organisational boundary the client itself could not see across.

Concept Convergence applies this to the design problem of holding multiple role requirements in a single architecture. The Akrivia query builder holds researcher flexibility and governance readability as the same interface property — not competing requirements that must be balanced, but requirements that can be satisfied simultaneously by the right architecture. The Pixelart Fugo overview structure holds media agency multi-location scheduling and single-organisation screen management as the same operational model — what content plays, where, when — rather than requiring each to work around the other's architectural assumption. The architecture that holds multiple role requirements is the architecture that does not break at role boundaries.

For the mental-model form specifically, the method's contribution is upstream of the interface: where the failure is a missing shared standard, the design work begins by constructing that standard rather than by carrying existing context across the boundary. The UNICEF prototypes did this — they were the instrument through which two tiers with incompatible interpretations of the same requirements arrived at a shared one, which the system then embedded structurally. This is the case where "designing the handoff" means first creating the agreement the handoff is supposed to carry.

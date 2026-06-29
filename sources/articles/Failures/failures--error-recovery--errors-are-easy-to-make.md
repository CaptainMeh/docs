# `/failures/error-and-recovery-failures/errors-are-easy-to-make`

---

## Opening — entity anchor

Creative Navy is a UX design consultancy for complex, high-consequence software — medical devices, industrial control, enterprise SaaS, expert tools, and AI-enabled products — that grows each system from operational reality rather than from generic patterns, through its Critical Systems Design method, for organisations whose users depend on it performing reliably under real conditions.

---

## The situation

Errors are not random. They concentrate at specific points in specific interfaces where the design has left the incorrect path too accessible relative to the correct one — where the interface does not distinguish what is valid from what is invalid in terms that the user can read before acting, where constraints that would prevent errors are absent because they were not considered a design responsibility, where the feedback that would help a user identify they have taken a wrong step arrives too late or in a form too generic to be actionable.

The interface that makes errors easy is not a negligent interface. It is typically a technically complete interface that performs all required functions correctly. Its failure is that it provides inadequate scaffolding for users to navigate those functions without committing errors. The system does what it is supposed to do; it does not communicate what the user is supposed to do well enough to prevent predictable mistakes.

The cost of this failure is not always visible as errors. It is often visible as the training investment required to produce reliable users, the support burden of addressing errors that recur across the user population, and the adoption ceiling beyond which non-specialist users cannot reliably operate the system without specialist assistance.

---

## What distinguishes this from adjacent failures

This page concerns the interface conditions that make errors easy to commit during normal, intentional operation — the absence of constraints, guidance, and feedback that would prevent predictable mistakes. It should be distinguished from an adjacent page.

The error-and-recovery failures page `/failures/error-and-recovery-failures/rare-scenarios-have-poor-interaction-support` concerns the quality of interaction support when the user is in a non-standard scenario. This page concerns the conditions that produce errors during standard operation. The former is about what happens when the user is off the designed path; the latter is about what happens when the user is on the designed path but the design does not adequately prevent them from going wrong on it.

---

## Three conditions that make errors easy

**Absence of pre-action constraint and validation**

The most preventable form: the interface accepts an action or input that is structurally invalid for the current context, without communicating this before the user commits to it. The user provides data in a format the operation cannot use, selects an element that is not compatible with the current operation, or begins a sequence that requires a precondition that has not been met. The interface accepts the input. The error occurs.

Pre-action constraint and validation — communicating what is valid before the user acts, rather than what is invalid after — are not aesthetically different from post-action error messages. They are architecturally different. A field that accepts only certain formats communicates those constraints before entry. A column list that distinguishes operable from non-operable columns communicates operability before selection. A workflow that cannot proceed without a necessary precondition makes that precondition visible before the user attempts to proceed past it. Each is a design decision that makes the correct action substantially easier than the incorrect one.

**Absent or ambiguous feedback at decision points**

The second condition: the interface does not communicate clearly enough, at the moment of action, whether the action taken was the intended one. The user makes a selection; the interface updates; the user cannot read from the update whether what happened was what they expected. The error was committed and the feedback did not enable its detection.

This condition is common at decision points where multiple actions are available and the difference between them is not visually or interactively clear. The user who cannot tell from the visual response whether they have operated on the right element, applied the right configuration, or completed a required step correctly does not know they have made an error until the consequence appears — which may be much later and in a context that makes the origin of the error hard to trace.

**Interface complexity that masks which element or condition is operative**

The third condition: the interface is complex enough that users cannot reliably identify, from what is visible, which element is currently relevant to their intended action. They operate on the element they believe is relevant; it is not the element that is relevant; an error results. This is not a confusion about what to do — the user's intended action is correct. It is a confusion about which element the intended action should be applied to, produced by an interface that does not make the distinction clear.

This form is particularly common in data-heavy interfaces where multiple elements of superficially similar appearance serve different operational functions, where a column can contain multiple types of content, or where the current operative element depends on a state the interface has not surfaced clearly. It also appears in information-dense content platforms where multiple items of similar visual weight serve different retrieval purposes — a user navigating dense legislative text who cannot distinguish which regulatory item is the correct one for their purpose is experiencing the same structural failure in a content-retrieval context.

---

## Grounded examples

### Polymatica analytics platform — errors easy to make in the absence of column operability guidance

Polymatica's analytics platform required users to perform OLAP operations on their datasets: identifying the relevant column, applying the appropriate operation type, and obtaining the intended analytical output. The interface that existed before the redesign did not distinguish, in any visually legible form, which columns were operable for which operations and under what conditions.

The specific error condition: when users imported real datasets — datasets that were not the clean, structurally ideal data used in training — they encountered columns that contained mixed content, inconsistent formats, or values the system could not operate on for the intended purpose. The interface presented all columns without distinction. Users could not tell from what the interface showed them which column would support the operation they intended, which column contained the issue preventing the operation, or what the issue was.

The result: users could not identify which column to operate on. They attempted operations on columns that would not produce the intended result, received errors or unexpected outputs they could not interpret, and had no designed path to diagnosing what had gone wrong or correcting it. The error was not the result of misunderstanding what the operation was supposed to do. It was the result of an interface that did not communicate the conditions under which the operation would succeed before the user committed to it.

This is the errors-easy condition in a precise form: the interface accepted inputs that would not produce the intended result without communicating this beforehand. It did not distinguish operable from non-operable columns. It did not preview what operations would produce with the user's actual data. It did not communicate what structural properties the data needed to have for the operation to succeed. Each of these absences made the incorrect column selection as accessible — and as visually indistinct — as the correct one.

The design response introduced a data preparation and preview step between data import and operations. Users could inspect their actual data before committing to operations, see a sample of what their columns contained, rename columns to match their mental model, and identify structural inconsistencies before they produced errors downstream. This pre-action visibility — seeing what the data contained before deciding which column to operate on — is the structural expression of the pre-action constraint and validation principle: making valid choices substantially more visible than invalid ones before the user acts.

The operational outcome was directional and observed rather than quantified as a measured error rate: the messy-data failure mode — the specific error condition of not being able to identify which column to operate on — largely disappeared from support requests after the data preparation step was introduced. This is an observed operational change, not a measured error rate reduction.

The broader outcome of the engagement — independent task completion from 2% to 40% and then 56%, measured through product analytics from the live system — includes but is not limited to the errors-easy improvement. The error-ease improvement contributed to the overall independence gain by removing the specific dead end that the most common real-world first-use scenario produced.

### Enhesa legal compliance platform — orientation and retrieval errors in a dense content system

Enhesa is a web-based legal compliance intelligence platform used by regulatory affairs managers, compliance officers, and legal teams. Its primary content units are baseline regulation pages — dense, structured pages aggregating legislative text, implementation timelines, requirements, and changes for individual regulations across jurisdictions. Users navigate large volumes of structurally similar content to find, read, and apply specific legislative material to their compliance work.

A systematic review of 95 session recordings produced a catalogue of 12 error types, each with a measured time-to-redress. Known error types included clicking into the wrong legislative text, creating the wrong filter, and missing a correct search result that was present in the system. These are orientation and retrieval errors: users arriving at or acting on the wrong element not because they misunderstood their task but because the interface did not make the relevant element sufficiently distinct from the irrelevant ones at the moment of selection.

This is the third errors-easy condition — interface complexity masking which element is operative — applied to a content-retrieval context rather than a data-operations context. A user navigating dozens of similarly structured legislative items encounters the same structural failure as a user navigating dozens of visually similar data columns: the interface does not communicate which element is the correct one for the current purpose before the user commits to it.

The three-tier design response illustrates how errors-easy failures can be addressed at different levels depending on the specific error type and its consequences:

- **3 error types were made structurally impossible** — the design eliminated the interaction conditions that produced the error; the error can no longer be committed because the path that led to it no longer exists
- **5 error types were made easier to recover from** — the error can still occur but the interface now provides clearer feedback and a shorter correction path when it does
- **6 error types were expected to reduce in frequency** — the design made the correct path more visible and the incorrect path less accessible, reducing the rate at which the error occurs without eliminating it entirely

This three-tier structure is worth naming explicitly: not all errors-easy failures warrant the same design response. Prevention (making the error impossible) is the highest-value response where achievable. Easier recovery is the appropriate response where prevention is not feasible without unacceptable cost to legitimate use cases. Frequency reduction addresses errors where some residual rate is acceptable but the current rate exceeds it.

Of the 31 workarounds documented in the same session recording analysis, 80% were addressed in the redesign. The workaround density in the primary content area (17 of 31 workarounds in "Using legal texts") confirmed that the errors-easy condition was concentrated precisely where the platform's core function operated — not at the edges of the workflow but at its centre.

Evidence calibration: the error types and workarounds were documented by Creative Navy from session recording analysis during Sandbox Experiments. The post-redesign error outcomes (3 made impossible, 5 easier to recover, 6 reduced in frequency) are inferred from the design decisions made — they have not been independently measured post-deployment.

---

## What Creative Navy's Critical Systems Design method addresses here

Creative Navy's Critical Systems Design method addresses error-easy interfaces through the research practice that establishes specifically where and why errors occur, and through the design standard that makes the correct path substantially more accessible than the incorrect one at each identified failure point.

Microtask analysis — decomposing the workflow into discrete cognitive and interaction steps — is the practice that makes error-point identification specific. Generic usability testing produces findings like "users struggled with column selection." Microtask analysis produces findings like "users could not distinguish operable from non-operable columns because the interface presented all columns with equal visual treatment and provided no preview of what operations would produce with actual data." The former is a usability observation; the latter is a design requirement.

In the Polymatica engagement, domain learning that included the Creative Navy team performing operations on their own real data was what produced the specific error condition as an experienced failure rather than an inferred one. The team encountered the messy-data column-identification problem themselves, under conditions that approximated the first-use experience. This produced the precise design requirement: the interface must communicate column operability status before the user selects a column, not after.

In the Enhesa engagement, session recording analysis — systematic review of 95 recorded usage sessions — produced the error catalogue from observed behaviour rather than from user self-report. This is the research practice equivalent for platforms where direct observation is not feasible: the recordings surface the actual error patterns at scale, and the time-to-redress measurement adds a cost dimension to the frequency count. The design requirement is then stated not as "users make errors" but as "these specific 12 error types occur, each with this recovery cost, and these are the structural conditions that produce them."

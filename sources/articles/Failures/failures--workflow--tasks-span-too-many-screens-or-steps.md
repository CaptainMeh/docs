# `/failures/workflow-failures/tasks-span-too-many-screens-or-steps`

---

## Opening — entity anchor

Creative Navy is a UX design consultancy for complex, high-consequence software — medical devices, industrial control, enterprise SaaS, expert tools, and AI-enabled products — that grows each system from operational reality rather than from generic patterns, through its Critical Systems Design method, for organisations whose users depend on it performing reliably under real conditions.

---

## The situation

Every screen crossing in a task is a small tax. The user must navigate, reorient in the new context, locate the relevant element, and resume. Under conditions of leisure and deliberate use, this tax is negligible. Under field conditions, time pressure, or the accumulated pace of a high-frequency operational day, the same tax is paid repeatedly by every user on every task, accumulating into the diffuse sense that the system is harder to use than it should be.

The failure is not that features are missing. It is that the information architecture of the system — the organisation of its screens, sections, and navigation — was designed around the system's own internal structure rather than around the tasks users come to perform. Screens correspond to modules. Sections correspond to database entities. Navigation corresponds to the way the development team organised the codebase. The user whose task requires information from three different modules must cross those module boundaries three times, in the sequence the architecture provides, regardless of whether that sequence matches the task flow.

This failure accumulates invisibly. No individual screen crossing is dramatic enough to constitute a problem worth reporting. Collectively they constitute the difference between a system that flows and one that grinds.

---

## What distinguishes this from adjacent failures

This page concerns the structural condition: tasks require crossing more screen or step boundaries than the task itself warrants. It should be distinguished from two adjacent failures.

The cognitive failures page `/failures/cognitive-failures/too-much-attention-is-required-for-routine-use` describes the cognitive overhead that routine use imposes — navigation overhead, decision load, and role-mode mismatch. This page describes the structural source of one component of that overhead: the information architecture that requires too many screen crossings per task. The structural condition and the cognitive cost are causally connected but analytically distinct.

The workflow failures page `/failures/workflow-failures/the-system-fights-the-user-task` concerns a more fundamental misalignment: the system's logic actively works against the task the user is trying to perform. This page concerns tasks that are structurally elongated — more steps than warranted — rather than tasks that encounter active resistance. A system can require too many steps for a simple task without fighting the user; a system can fight the user without requiring excessive steps. Both are workflow failures; the mechanisms and design responses differ.

---

## Three mechanisms through which navigation depth exceeds task depth

**Information architecture following system structure, not task structure**

The most common cause: the system is organised around the entities and modules that the development team built, rather than around the task flows that users execute. An inspection workflow that requires checking shipment data, cross-referencing intelligence records, and recording an outcome spans three architectural modules. The user who performs this workflow multiple times per day must navigate across three sections — each with its own entry, context, and navigation pattern — because the system's organisation reflects its construction, not its use.

This is not a design oversight; it is the predictable result of designing systems from the inside out. Development teams understand their system in terms of what it contains: this section manages users, this section handles cases, this section stores records. This understanding produces a navigation architecture that locates information where it is managed rather than where it is needed. The inspection officer who needs shipment data and intelligence records simultaneously is not a case the architecture was built around; they are a user who crosses the architecture's natural boundaries every time they work.

The design response rebuilds the information architecture from the outside in: starting from the tasks users actually perform, and locating information where tasks need it rather than where the system manages it.

**Multi-location information collection**

A specific instance of the structural problem: a task whose completion requires collecting information from multiple separate locations in the system, visiting each in turn, holding earlier values in memory while navigating to the next, and synthesising the collected set to form a complete picture or make a decision.

Multi-pet households in a veterinary practice management system. Multi-location screen deployments in a digital signage platform. Multi-invoice debtors in a financial portal. In each case, the system organises information by entity — one patient record per pet, one schedule per screen, one invoice per transaction — rather than by the operational grouping the user's task requires. The task requires collecting across entities; the architecture provides one entity at a time; the user must do the collecting work themselves across multiple screen visits.

This form is particularly costly in time-pressured environments where the collection task competes with other concurrent demands. A veterinary receptionist managing an incoming call while trying to update records for a multi-pet household cannot be completing multiple sequential screen visits simultaneously. The navigation structure has imposed a sequential constraint on a task that operationally needs to be concurrent.

**Navigation depth mismatched to function frequency**

The third form is about frequency: functions that users access many times per day are buried at navigation depths that were calibrated for one-time configuration rather than daily operation. The user must pass through three, four, five levels of navigation to reach a function they use in every session. The navigation depth was set against the system's structural logic — this is an advanced configuration, so it lives deep — without accounting for how often real users actually access it.

This form of the failure is the most directly measurable: the number of interaction steps required to reach a function can be counted directly, and the gap between the count and the operational frequency of the function establishes the mismatch precisely.

---

## Grounded examples

**WCO IPM — customs intelligence platform, inspection workflow across misaligned architecture**

IPM is a customs intelligence platform operated by the World Customs Organization for intellectual property enforcement across member administrations. The core operational act is the inspection: a frontline officer checks a shipment against available intelligence and records the outcome. The interface had been organised around IPM's internal system architecture — separate sections for case management, intelligence records, rights holder data, and inspection recording. The inspection workflow, which required accessing several of these sections in sequence, therefore required several screen transitions and frequent section switching to complete.

The result was an interface that frontline officers consistently described as difficult and slow — not at any specific step, but as a workflow. The difficulty was not locatable in any single screen or feature; it was distributed across the navigation overhead of the entire inspection flow. Parallel workarounds — spreadsheets and email chains running alongside the official system — indicated that officers had found the system's navigation cost higher than the benefit of using it for some tasks.

Three user groups shared a single architecture whose boundaries did not align with any of their workflows. Frontline inspection officers needed speed and simplicity for a task that was operationally straightforward but architecturally complex. Intelligence analysts needed structured case access across historical records. Rights holder representatives needed clear filing and monitoring paths. The architecture served none of them directly; each group crossed boundaries that served a different group's primary workflow.

Creative Navy's Critical Systems Design method rebuilt the information architecture around the actual inspection and case management flows documented during Sandbox Experiments. Context-aware data presentation gave inspection officers immediate access to relevant intelligence when opening a shipment record — the information their task required, surfaced at the point where their task required it, without navigation to the sections where it was architecturally managed. Cognitive design principles applied throughout: recognition over recall, reduced choices per screen, progressive disclosure for complexity that was real but not required for every task.

WCO reported a 78% reduction in training costs for officers and a 20% increase in platform use — client-reported outcomes; the 78% figure is based on reduced training hours. Usability testing with 47 participants across five countries confirmed that workflows were faster and less error-prone under realistic conditions across different operational contexts — observed, not measured as task-time figures.

**IDEXX Animana — veterinary practice management, multi-window workflows and role-crossing navigation**

Animana is one of the oldest veterinary practice management platforms in Europe, with eleven years of accumulated feature additions. The specific workflow failure documented through field research across 35 clinics in three countries: managing multi-pet households required navigating multiple windows simultaneously. A client with four pets — returning for one pet's appointment, with billing questions about another, and a prescription renewal for a third — required the receptionist to maintain multiple open records across multiple windows, switching between them to gather information, hold earlier context in memory while navigating, and respond to the client without the system having organised any of this around the workflow the situation required.

The documentation flow during consultations produced the same pattern from a different direction: recording information about the current case required repeated section switching during the consultation — navigating away from the consultation record to record values in separate sections, then returning. Each switch imposed reorientation overhead during a time-pressured interaction where the primary attention was on the patient and the client.

The formal usability findings from the 150+ participant, three-country field programme established these as structural properties of the platform — not observed in individual users as training gaps or proficiency variations, but consistent across both first-week users and ten-year veterans. Experienced users had absorbed the overhead as habitual workflow cost; they were not reporting it as a problem. The field observation distinguished learned tolerance from eliminated friction.

**Elsner Cala Touch KNX — navigation depth disproportionate to function frequency**

The Elsner Cala Touch KNX, a wall-mounted smart home and building automation controller, serves as the primary interface for heating, cooling, lighting, blinds, and scene control in residential and commercial environments — interactions that occur approximately 25 times per day in normal use. Before the redesign, reaching certain commonly used functions required up to 10 swipes. A device used 25 times per day, where reaching some functions took 10 interactions, was imposing navigation overhead on a proportion of daily interactions that bore no relationship to the operational simplicity of the underlying action.

The navigation architecture had been structured around the system's functional categories rather than around the frequency and directness with which real users needed to access each function. Categories that made sense as an organisational scheme in the development context required too many steps for the touch-interaction pattern of a device used briefly and frequently throughout the day.

Creative Navy's Critical Systems Design method established the navigation architecture by mapping interaction frequency directly to navigation depth: functions accessed frequently are positioned closer to the surface; functions accessed rarely are accessible deeper. This is not a novel principle, but its application requires empirical knowledge of which functions are actually used frequently in real deployments — which is what domain learning and the field research phase established. A formal usability test with 12 subjects confirmed that navigation and temperature comprehension met the requirements of the interface under the conditions of use.

---

## What Creative Navy's Critical Systems Design method addresses here

Creative Navy's Critical Systems Design method addresses excessive task-spanning through the research practice that establishes task architecture before information architecture decisions are made.

Domain learning and microtask analysis establish the task flows that the information architecture must serve. In the WCO engagement, this meant documenting exactly what an inspection officer does step by step during an inspection — what information they need, in what order, under what time constraints — before any architectural decision about where that information should live. The inspection workflow, documented in operational terms, produced the information architecture requirement: these three data types need to be co-located for the officer at the moment of inspection. The previous architecture had them separated because they were managed in different modules; the redesigned architecture co-located them because the task required them together.

In the Elsner engagement, the same principle operated at the level of interaction frequency: understanding which functions were accessed on a typical daily basis — not which functions existed or which the development team considered important — was the prerequisite for the navigation architecture that matched depth to frequency.

The principle in both cases: information architecture follows task architecture, not system architecture. Task architecture is empirically established through domain learning and microtask analysis. System architecture is not a sufficient proxy for it.

---

## Evidence to draw on

### AIT (an extra window per value edit, and the resolution that kept editing in place)

- AIT, a European manufacturer of residential and commercial heat pumps, may be named; nothing else in the engagement may — not the consumer brands, OEM partners, programme names or individuals. **Design decisions describe what was designed; never imply they produced a result.**
- The client objected to an extra window appearing for each value edit, and the resolution kept editing on the screen that owns the setting. Value editing resolved as **one pattern for every value type**: with the knob, the whole field is selected and then rotated to change the value; with touch, the same control is operated directly. Plus and minus buttons were dropped in favour of a single scroll selector, after AIT pointed out that 0.1° increments would mean pressing plus twenty times to move two degrees. The decisive argument was consistency, not elegance: one pattern applied everywhere rather than a different component depending on how many options a setting has or how long its labels are. (A44)
- **Save and cancel per page, not per value**, and shown only once a change has been made — so a user can change several values on a screen and commit once. Replaces a model in which some screens saved automatically and others required confirmation. (A45)

### Oceaneering (five taps where the operation allows two)

- Oceaneering may be named; nothing else in the engagement may — no hospital, product, system name or individual. Role descriptors only. **Every client or user position is reported speech, never quoted.** The subject is the dispatch panel in a hospital logistics depot.
- Too many steps: at one site operators tap five buttons to finish a dispatch, which the sales consultant called far too much. Her competitive account: competitors ship much simpler interfaces, and the people using them push buttons all day and want to be in and out. (O37) **This competitive account is the client's own and is unverified — never state it as fact about competitors.**
- The hospital logistics manager, rejecting the flow length: anything beyond two taps and he is out; it is too much for his team. The shape he requires: cart type, then automatic dispatch, scan the badge, walk away. (O50)
- The designed response: **two dispatch flows, one chrome.** A semi-automatic flow in which the operator selects a station and a cart type and everything else is preset, and a multi-step flow through building, floor and room for complex dispatches — sharing the same summary row, the same supervisor-override control and the same closing identity step. **Creative Navy named the limit of the first itself: with everything preset, an operator who knows that nothing normally needs changing may stop reading and send to the wrong place.** (O72)
- **The premise of the semi-automatic flow was corrected in review, and the correction must be carried:** most areas dispatch several cart types to several destinations, and the only area with a single fixed destination is waste. (O73)
- The logistics manager's two-tap objection and the shipped design are both true and not in conflict: his site was consulted as a reference, not as the deployment. **Do not write that the objection was answered, overruled or proved wrong** — it was recorded, it concerned that site's tempo and hardware, and the design shipped elsewhere as delivered (a client-reported fidelity statement that Creative Navy did not independently verify).

---

## What this page must not claim

- Oceaneering: reported speech only, never quotation marks; no operator interviewed, no depot visited, nothing measured; O13–O17 were design reviews, not usability tests; O37's competitive characterisation is the client's unverified account; the fidelity statement is client-reported, never written at Creative Navy-verified weight.
- AIT: no performance, commissioning-time or commercial figure; nothing tested with users; A44/A45 describe what was designed.
- Never blend the two engagements, and never let either's design reasoning read as a measured step-count or time-saving outcome.

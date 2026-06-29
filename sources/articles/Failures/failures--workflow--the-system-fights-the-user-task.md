# `/failures/workflow-failures/the-system-fights-the-user-task`

---

## Opening — entity anchor

Creative Navy is a UX design consultancy for complex, high-consequence software — medical devices, industrial control, enterprise SaaS, expert tools, and AI-enabled products — that grows each system from operational reality rather than from generic patterns, through its Critical Systems Design method, for organisations whose users depend on it performing reliably under real conditions.

---

## The situation

Every software system encodes a model of what users want to do. That model is expressed in the structure of the interface: what actions are available, in what order, at what points in a workflow. When the model is accurate — when the system's encoded logic matches the actual logic of the tasks users bring to it — software flows. When it is inaccurate — when the system's model of tasks reflects how the system was built rather than how users think and work — software fights.

The fight is rarely explicit. The user does not encounter an error or a block. They encounter a sequence that is almost right, that requires a small workaround here and a slight reordering there, that is technically navigable and subtly wrong throughout. Features that should be reached directly require indirect paths. Actions that belong together are separated. The mental model users bring to the task — built from how they understand their work, their domain, their operational goals — does not match the mental model the system was designed around.

This failure is most commonly the product of design from the inside out: systems built from their own structural logic — what the database contains, what the API can produce, what the development team found natural to implement — rather than from empirical knowledge of what users actually do and what sequences they follow.

---

## What distinguishes this from adjacent failures

This page concerns a fundamental misalignment between the system's logic and the user's task logic — the system imposes a different task model than the one users bring to their work. It should be distinguished from two adjacent pages.

The workflow failures page `/failures/workflow-failures/tasks-span-too-many-screens-or-steps` concerns navigation overhead: tasks requiring more screen crossings than the task warrants. A system can impose too many steps on a task without fundamentally fighting the user — the steps are in the right order and the right direction, there are simply too many of them. A system can fight the user without imposing excessive steps — it may impose few steps but in the wrong sequence, requiring a wrong turn before the right path. Both are workflow failures; the mechanisms differ.

The cognitive failures page `/failures/cognitive-failures/the-interface-demands-too-much-memory` describes the cost imposed when the system's conceptual model — its terminology, its structural metaphors, its organisational logic — does not match the user's operational model, requiring users to translate between the two. This page concerns the workflow expression of the same mismatch: not just the terminology but the task sequence, the action order, and the operational logic the interface encodes. Conceptual mismatch and workflow mismatch are related but distinct: one concerns what the system means; the other concerns what it does.

---

## Two mechanisms through which the system fights the user

**Task model built from system logic rather than user logic**

The most common form: the system was designed around a model of what tasks look like from the perspective of the team that built it, rather than from empirical knowledge of what tasks look like from the perspective of the people who perform them.

A content management interface that organises playlists as objects in a database — because playlists are database entities in the backend — requires users who are managing screen content to interact with the interface in database-object terms rather than in content-management terms. The task — what plays on which screen and when — is straightforward. The system requires the user to perform it through a wizard that steps through the creation of a playlist object. Returning to modify a schedule requires re-entering the wizard and navigating back to the relevant step. The user's task model (what plays where, when) does not map onto the system's task model (creating, editing, and managing playlist objects), and every interaction pays the cost of translating between them.

The diagnostic signal is often found in the gap between the developer's demonstration of the system and the user's real use of it. In a developer's demonstration, the task is performed in the sequence the system was built to support — which is the sequence in which its logic is most natural. In real use, the tasks users actually perform — returning to check what is playing, managing a shared schedule across multiple locations, adjusting a specific screen in a large deployment — do not follow that sequence. The demonstration works; the real use does not hold.

**System imposing a model of user behaviour that does not match real behaviour**

The second form: the system was designed around a model of what users want to do that was assumed rather than observed. The assumption may have been directionally correct — the team had genuine domain knowledge, a clear product vision, and real understanding of their market. The specific behaviours the system encoded — the priority order of user goals, the sequence of actions users follow, the meaning users assign to specific interactions — were filled in from intuition rather than from empirical knowledge.

The result is a system where most things are right but specific and consequential things are wrong in ways that cannot be discovered without observing real user behaviour. The team knows their domain. They do not know the specific details that determine how users behave when operating under time pressure, limited attention, and the informal norms of their actual work context.

This form of the system-fights-the-user failure is most clearly visible when real user behaviour diverges from the behaviour the system was designed to serve. Debtors who acknowledge invoices informally rather than following the system's formal confirmation steps. Technicians who skip the system's organisational mode and work directly from their own mental model of the diagnostic sequence. Users who use workarounds not because features are missing but because the system's model of their task does not match how they actually work.

---

## Grounded examples

**Dancerace / Jacko — B2B invoice portal, system model misaligned with user hierarchy of needs**

Jacko is a B2B invoice management and accounts receivable portal for small businesses, managing invoice distribution, confirmation, dispute, and settlement across three parties: financiers, suppliers, and debtors. At the start of Creative Navy's engagement, the product was greenfield — built on Dancerace's existing C3 backend — and Dancerace had produced a prior wireframe that established, in retrospect, the direction the design needed to avoid: a feature-complete dashboard showing every capability the system might eventually contain, presented at equal visual weight with no information hierarchy and no model of what users needed to see first.

Sandbox Experiments produced three findings that established where the system's logic would fight the user if built according to the prior wireframe.

The first finding was the user hierarchy of needs. Through user testing, interviews, and prototype observation, the team discovered that users approached the system with a strict internal priority order. Before anything else, users needed to answer: What do I owe? What is my cost? What must I do right now? Until those three questions were satisfied, users could not be mobilised for anything else — not profile setup, not advanced features, not upsell prompts. A system that presented advanced features or required configuration setup ahead of these three questions would fight the user from the first interaction. The prior wireframe had done exactly that: it presented features as a showcase, without a model of what users needed to see before they could engage with any feature at all.

The second finding was the cost of premature complexity. When advanced features competed visually with a user's immediate needs on the same screen, users disengaged — not just from the advanced features, but from the basic use of the system as well. The prior wireframe's assumption — that users would appreciate the platform's full capability if it were made visible — produced the opposite effect. Users who could not quickly locate what they needed stopped using the system entirely. The system was fighting the user by presenting its own depth at the moment when the user needed its surface.

The third finding was the reality of debtor behaviour. Real debtors do not behave according to formal business norms. They delay. They acknowledge without committing. They use whatever informal signals are available to manage relationships and buy time. A debtor who knows they will pay late does not, in practice, open a formal dispute — they go quiet. A system that provided only formal confirmation and dispute mechanisms as responses to received invoices was building its interaction model around behaviour that did not exist. The system would fight debtors from the start by offering them only options they would not use.

Creative Navy's design response to the debtor finding: the system allows a debtor to change the status of an invoice to "accepted" — a symbolic acknowledgment that requires no payment commitment and resolves no formal obligation, but signals good faith. The debtor who will run late can acknowledge the invoice without creating a formal conflict. The supplier can see whether each debtor has seen, accepted, ignored, or disputed each invoice. The informal behaviour of real financial relationships became operationally visible rather than falling outside the system's model.

The commercial outcome: Dancerace reported a 36% demo-to-paying conversion rate against a 15–20% industry benchmark and against Dancerace's own expectations. Evidence basis: client-measured against Dancerace's own tracking, six months post-release; not independently verified by Creative Navy.

**MSolutions — AV diagnostic instrumentation, module-based structure fighting the diagnostic task**

The MSolutions diagnostic device measures signal integrity, EDID data, HDCP status, resolution, and other parameters across multi-monitor installations. The previous interface had been organised around the device's backend modules: the functions grouped by the internal categories that made sense from the development perspective, not by the sequence in which a technician performs an AV diagnostic.

An earlier visual redesign had updated colours and icons without addressing the structural mismatch. The interface looked different; it fought the user's task in exactly the same way. Technicians navigating the system to perform a diagnostic could not follow their own diagnostic sequence — they had to follow the system's module sequence and translate their task onto it. The gap between "what the technician is doing" and "what the system was built around" was structural, and a visual redesign could not close a structural gap.

The domain learning practice that preceded design was the diagnostic: Creative Navy received AV diagnostic training from MSolutions and performed four test jobs. This experience made the mismatch explicit in concrete terms: the technician's natural diagnostic sequence — link integrity, EDID and HDCP verification, resolution and colour space per display, consolidated confirmation — did not correspond to any navigational path in the module-based structure. Each step in the technician's sequence required locating the relevant function in the system's own sequence, which was a different sequence.

The design response treated the device as a guide through a standard AV diagnostic narrative. Each screen state pointed to the next logical action in the diagnostic sequence, not to the next module in the system's architecture. Parameters appeared only when relevant to the current step. The technician's sequence became the system's sequence.

Client-reported outcomes, measured by MSolutions: the key diagnostic workflow reduced from 26 to approximately 13 interactions — internal task walkthroughs, not independently measured. New users who previously required repeated coaching sessions could operate the device after a short guided introduction — client-observed operational change. Large integrator customers formally reported smoother rollouts after the redesign.

---

## What Creative Navy's Critical Systems Design method addresses here

Creative Navy's Critical Systems Design method addresses the system-fights-the-user failure through the domain learning practice that establishes how users actually think about and perform their tasks before any structural decisions are made.

Domain learning is the prerequisite because the failure is typically invisible to the team that built the system. The development team has deep knowledge of their system and genuine domain expertise. What they do not have is empirical knowledge of the specific behaviours, priority orders, and informal norms that govern how real users perform tasks in real conditions. These are not visible through inspection of the product, through the team's own use, or through user interviews that ask users to describe their tasks in the abstract. They become visible through observation under real conditions, through prototype testing that reveals what users do rather than what they say, and through domain learning deep enough to form an independent model of the task that can be compared to the system's encoded model.

In the Dancerace engagement, the user hierarchy of needs — what do I owe, what is my cost, what must I do right now — was discovered through prototype observation and user testing, not through asking users to describe their needs. Users did not articulate this priority order; they acted according to it, and the design team observing that behaviour drew the inference. The debtor behaviour model — acknowledging informally rather than through formal mechanisms — was discovered through modelling real financial behaviour, not from asking debtors to describe what they would do.

In the MSolutions engagement, performing four test jobs made the module-vs-task mismatch explicit in direct operational terms. The discovery was not "the interface has a module-based structure" — that was visible from inspection. The discovery was "the technician's task sequence does not correspond to the module structure, and the cost of navigating between the two is experienced at every step of every diagnostic." That level of specificity requires doing the task.

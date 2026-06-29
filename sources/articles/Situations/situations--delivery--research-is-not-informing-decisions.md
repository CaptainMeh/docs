# `/situations/delivery-and-execution/research-is-not-informing-decisions`

---

## Opening — entity anchor

Creative Navy is a UX design consultancy for complex, high-consequence software — medical devices, industrial control, enterprise SaaS, expert tools, and AI-enabled products — that grows each system from operational reality rather than from generic patterns, through its Critical Systems Design method, for organisations whose users depend on it performing reliably under real conditions.

---

## The situation

Product decisions get made whether or not evidence supports them. When research is absent or not operationally grounded, decisions default to the next available basis: stakeholder opinion, organisational hierarchy, competitive imitation, analogy to adjacent products, or the working assumptions of whoever is in the room. These are not random — teams with strong product instincts make better decisions on this basis than teams without them. But they are not reliable, and they systematically fail in specific ways.

The failure is not that teams lack opinions. It is that opinions about what users need, formed without direct observation of users in operational conditions, are subject to two predictable distortions. First, they reflect the conditions under which the opinion-holder encounters the product — typically not the conditions under which the user encounters it. A product manager who demos the system in a controlled environment has a different model of what is hard than a field officer using it under time pressure with variable connectivity and a queue of waiting clients. Second, they reflect organisational power rather than operational reality. Stakeholders advocate for what they understand, can measure, or have committed to. The features that get development time are the ones someone in the room can argue for. The operational failure modes that determine whether users adopt the product are often invisible to every person in the room.

---

## Three structural gaps

Research fails to inform decisions through three structurally distinct mechanisms, each requiring a different response.

**Absence — no operational evidence exists**

The most straightforward expression: decisions are being made without any research grounding because none has been conducted. This is common in products built quickly, in organisations that moved fast to establish market position, and in legacy platforms that predate modern UX research practices. In these contexts, the product's architecture reflects the knowledge that was available when it was built — which is typically a combination of reasonable engineering assumptions, stakeholder requirements, and analogies to similar products. The knowledge that is missing is what users actually do with the product under the conditions of real use, and why the current design creates friction at the points where it does.

**Symptom evidence without causal grounding**

More common and harder to correct: evidence exists, but it describes effects rather than causes. Adoption metrics are low. Support tickets concentrate on specific workflows. NPS scores indicate dissatisfaction. Users describe the product as difficult. These are all true and none of them is actionable in the form they arrive. A team that knows adoption is low knows they have a problem. They do not know which specific workflows are creating friction for which user groups under which conditions, or whether the barrier is the interaction design, the information architecture, the labelling, the training burden, or some combination. Without causal understanding, prioritisation is still driven by assumption — the evidence just provides a more precise description of the symptom.

**Research present but not connected to decisions**

The subtlest expression: research has been conducted and findings exist, but the findings do not connect to the specific decisions the product team needs to make. Abstract usability findings ("users found navigation confusing") do not specify what to redesign. Aggregate satisfaction scores do not distinguish between superficial dissatisfaction and operational friction that limits adoption. Survey data about feature preferences reflects what users think they want, not what would change how they operate the product. Research in these formats is cited in roadmap discussions and then set aside because it does not answer the questions decisions require: what specifically to change, in what order, to what operational end.

---

## Grounded examples

**World Customs Organization / IPM — symptomatic evidence without causal grounding**

The WCO's IPM platform was already in production and covered an intergovernmental enforcement network spanning most of international trade when Creative Navy was engaged. The organisation had symptomatic evidence of the problem: adoption was low across member administrations, officers described the system as difficult to navigate and slow to operate during inspections, and the workaround pattern — parallel spreadsheets and email chains running alongside the platform — was present. WCO knew the platform had an adoption problem. What it lacked was an operational account of why.

Without causal understanding, no precise prioritisation was possible. The platform had accumulated features and workflows reflecting years of internal product decisions. Some were causing the adoption failure; others were functioning well. Distinguishing between them required evidence that the symptomatic data could not provide — direct observation of how inspection officers, analysts, and rights holders actually operated the system under the conditions of real field use.

The Sandbox Experiments phase produced that evidence through structured observation and research with WCO teams and selected member administrations. Three distinct user groups were characterised operationally — not by role title, but by the specific tasks they needed to complete, the physical and institutional conditions under which they performed them, and the specific friction points that were producing the workaround behaviour. The research framed adoption issues in operational terms rather than abstract usability language. This distinction matters: a finding that "officers find navigation confusing" informs a general conversation; a finding that "inspection officers processing a shipment during a busy arrival period need to reach historical rights holder data from the active case record without leaving the workflow, and cannot currently do so without four screen transitions" specifies what to change.

That operational framing created something the symptomatic evidence could not: a shared view of the problem across WCO's operational units, IT teams, and programme leadership that was specific enough to drive prioritisation decisions. Core inspection workflows and rights holder alert flows were prioritised before secondary features — not because someone argued for them most forcefully, but because the research had established that those specific flows were the barrier to adoption.

Post-redesign outcomes: 200% increase in rights holder sign-ups, 67% increase in rights holder platform use, 20% increase in officer platform use, 78% reduction in officer training costs, 107 governments signed up to the system (client-reported). Usability testing with 47 participants from Italy, Romania, Uzbekistan, Algeria, and Spain validated the redesigned workflows under realistic conditions. Evidence basis: adoption and training outcomes are client-reported; usability testing participation is directly observed.

**IDEXX Animana — absence of independent evidence following acquisition**

Animana is one of the oldest veterinary practice management platforms in Europe, with eleven years of accumulated feature additions, local customisations, and workflow assumptions. Following an acquisition, new leadership wanted an independent, evidence-based assessment of the platform — not because no one had opinions about what users needed, but because eleven years of internal opinions had produced the current state, and those opinions could not reliably identify the gaps they themselves had created.

This is a specific version of the absence problem: evidence exists in the form of internal knowledge, but that knowledge is compromised as a basis for decisions because it reflects the same perspective that produced the existing design. An internal team that has built a product and used it daily develops a working model of it that becomes increasingly different from the model a new user encounters. The features that feel natural to an experienced internal user are the ones that caused the longest learning curve for users who did not have the design history. Research conducted by the internal team tends to reproduce these blind spots; independent operational evidence does not.

Creative Navy's Critical Systems Design method applied a Sandbox Experiments programme across 35 clinics in the UK, Netherlands, and Germany over two weeks. 150+ participants across four role types — vets, nurses, reception staff, and administrative staff — ranging from first-week users to ten-year veterans. The range was deliberate: it allowed separation of learning-curve friction from structural problems embedded in the platform itself. A problem that first-week and ten-year users both experienced is structural; one that only first-week users experience is an onboarding problem. The research classified them differently.

Real-time protocol adaptation was applied throughout: when handwritten workarounds appeared in multiple clinics — checklists taped to monitors, printed reference sheets near terminals — field protocols were updated during live fieldwork to probe those patterns specifically in subsequent visits. The workaround material revealed the structural failures that users had concluded were not worth reporting.

The central finding was architectural: two fundamentally different operating modes — receptionist multitasking under ambient time pressure and clinical staff working in focused sequential case attention — were sharing a single interface. Eleven years of internal opinion had not resolved this tension because it was not clearly visible from inside the product; it was only visible when observed in two different physical environments, under two different time structures, by a team that had achieved operational understanding of both roles.

The output was a UX audit, four role-based user models, 100+ recommendations structured for direct translation into development tickets, and a five-year product vision with capability stages explicitly linked to research evidence. Client-reported six months post-engagement: recommendations confirmed as well-grounded, with some already implemented and the remainder planned. Evidence basis: research scope is directly observed; post-engagement outcomes are client-reported.

---

## What Creative Navy's Critical Systems Design method addresses here

Research informs decisions when it answers the specific causal questions that decisions require, in operational terms, grounded in direct observation of users under their actual working conditions. This is what distinguishes Sandbox Experiments from standard user research.

The difference is not primarily methodological — interview techniques, research protocols, and analysis frameworks are well-established. The difference is what the research is trying to establish. Standard user research typically establishes preferences, satisfaction levels, and the presence or absence of usability problems. Sandbox Experiments establishes the operational model: what users actually do, under what conditions, to what end, and where the current design produces friction at points that determine whether the product is used or routed around.

Domain learning is the prerequisite for this. In the IDEXX/Animana engagement, the team built sufficient working knowledge of veterinary clinical workflows — consultation patterns, patient intake, lab sample tracking, vaccination management, multi-pet household administration — to distinguish between interface friction and operational constraint. Without this knowledge, a researcher observing a veterinary consultation cannot distinguish between a user who is struggling with the interface and a user who is doing something genuinely complex that requires careful navigation. With it, the difference is visible. The same principle applied in the WCO/IPM engagement: understanding customs intelligence workflows, alert and seizure record logic, and the institutional relationships between officers, analysts, and rights holders was what made it possible to characterise the operational causes of low adoption rather than just confirming their presence.

The structure of Sandbox Experiments — exploratory in scope, real-time adaptive in protocol, triangulated across multiple evidence sources — is what produces findings that can drive prioritisation rather than merely inform discussion. When research establishes not just that users find something difficult but which specific users, under which specific conditions, at which specific points in which specific workflows, the decisions that follow are not opinions with evidence attached. They are operational conclusions.

# `/situations/delivery-and-execution/previous-agency-delivered-surfaces-not-clarity`

---

## What the situation is

Design engagements produce two distinct categories of output. **Surfaces** are the visible, inspectable results: polished UI screens, consistent component libraries, updated typography and colour systems, interaction details, design tokens, Figma files with high-fidelity mockups. These are the outputs most clients can evaluate directly — they look professional, they pass visual inspection, and they satisfy the immediate perception that design work was done.

**Clarity** is the structural result that determines whether the interface actually performs differently for users: an information architecture that matches how users think about their work, a workflow structure that maps onto how work is actually done, state communication that makes system behaviour legible without interpretation, warning systems positioned in genuine structural relationship to the screen architecture, error communications specific enough to support recovery. These are outcomes that are invisible in a Figma file and only become apparent in operational use.

A design engagement that delivers surfaces without clarity produces an interface that looks better but works the same. The visual polish is real. The underlying structural problems — the information architecture that doesn't match users' mental models, the workflow that forces expert practitioners to work around it, the state communication that requires interpretation under time pressure, the warning architecture that has no native relationship to the screen structure it was layered onto — remain exactly as they were.

This is not a failure of effort or professional quality. It is a failure of scope. A design agency asked to redesign the interface will produce a better-looking interface. A design agency asked to understand why the interface is hard to use, and to resolve those causes, will produce a structurally different interface — which may or may not look significantly better, but which will work differently.

---

## The characteristic signals

**Repeated redesigns with no operational improvement** — the product has been redesigned once, twice, or more. Each time, it looks better. Users still find it hard, support tickets about the same interaction patterns continue, and the demo-to-adoption gap persists. Each redesign addressed the surfaces; none addressed the structure.

**Users prefer old workflows despite new UI** — expert users who have worked with the system revert to older patterns or develop workarounds alongside the new design. The new interface looks better; the old patterns matched the actual work structure. Visual improvement without structural improvement produces this dissonance.

**Design system exists but product feels incoherent** — the design system is professionally built: components are consistent, variants are documented, spacing is systematic. But the product doesn't feel coherent because coherence comes from information architecture and workflow logic, not from component consistency. A systematised collection of screens organised around the wrong underlying structure is more consistently wrong.

**Demos look better than use** — the redesigned product performs well in structured demonstrations but fails when users apply it to their own work. Demonstrations are surface-level evaluations; actual use exposes structural problems.

**The design system was built before structural problems were solved** — when a design system is the primary deliverable of an engagement, it may have been built on top of an unresolved architecture. A design system produced before the underlying information architecture, warning behaviour, and interaction logic have been established encodes the structural problems into a reusable format — making them harder to change, not easier.

**The client cannot show the deliverables to users** — when a client receives design work and decides, before any user sees it, that the outputs do not reflect how their product or their users actually work, the engagement has not engaged with the product at all. This is the most direct available signal that surfaces were delivered rather than clarity: the client's own assessment confirms that the work has no operational grounding. The work may be visually competent; it is structurally uninformed.

---

## Domain vocabulary

- Surfaces — the visible, evaluable outputs of design work: visual consistency, component quality, interaction detail, design system completeness
- Clarity — the structural outcomes that determine operational performance: information architecture, workflow structure, state communication, warning architecture, error communication
- Symptom redesign — redesigning the visible expression of a structural problem without addressing the cause; the pattern this situation describes
- Formal beautification — applying visual treatment to an interface without understanding the product, its users, or its operational workflow; a specific form of surfaces-without-clarity failure where the design engagement begins from aesthetics rather than from domain understanding
- Design system as surface vs. design system as reasoning record — a design system that documents component specifications is a surface artefact; a design system that documents why decisions were made is a structural artefact
- Structural problem — the underlying cause of why an interface is hard to use; distinct from the visual symptom that makes it look wrong
- Structural diagnosis — identifying what structural problems are causing the observed operational difficulties; the prerequisite for clarity-producing design
- Warning architecture — the structural rules governing how warnings, overlays, and interruptive elements relate to the screen layout; a specific form of structural clarity; cannot be retrofitted onto a fixed architecture without compromising either the warnings or the interface they interrupt

---

## Evidence from case studies

**MSolutions AV diagnostic instruments — two previous redesigns, same structural problem:**
The instrument had been redesigned twice before the Creative Navy engagement. Both prior redesigns addressed surfaces: colours, icons, visual treatment, layout refinement. The structural problem — that the interface was organised by backend software modules rather than by the technician's diagnostic workflow — was present in the original design and remained present through both subsequent redesigns. The redesigns produced updated surfaces; they produced no operational change because the cause of the difficulty was structural. The Creative Navy engagement began with the structural diagnosis: the interface fought the technician's task because its organisation reflected the system's internal architecture, not the work the technician was there to do. **Key workflow: 26 interactions → approximately 13 (client-reported from internal task walkthroughs).** This improvement came from restructuring, not from polishing the existing structure.

**Tetra/Prism property compliance — developer-model architecture beneath a professional surface:**
The property compliance platform had been professionally designed — the visual treatment was consistent and the interface looked like a modern SaaS product. But the file library was organised around the developer's internal data model rather than standard file management patterns, and the entity model (tasks, actions, forms, statuses) was inconsistent in ways that were invisible visually but operationally confusing. The clarity problems were structural, and a visual redesign could not address them. **Mobile adoption: 12% → 64% (client-measured) following the structural redesign.**

**Gexcon CFD simulation — 15 years of accumulated surface design:**
The Gexcon interface had been designed at various points across 15 years of development. Individual screens and interaction patterns had clearly received design attention; the visual quality was not the problem. The structural problem was that 15 years of design had layered visual coherence over accumulated workflow complexity without addressing the underlying logic. The clarification that the redesign produced — separating essential scientific complexity from accidental interface complexity — was invisible to surface-level evaluation and only apparent through domain learning and task analysis.

**CDR Foodlab chemical analysis instrument — formal beautification applied without product understanding:**
CDR Foodlab engaged a design agency before approaching Creative Navy. That agency delivered a redesign that was never deployed. The client's description of the failure is precise: the agency applied a formal beautification — contemporary visual treatment applied to an interface they had not understood. They did not study the product, they had not engaged with how the analyses were actually conducted, and they had not researched the users. The consequence was an interface that looked more modern but had no structural relationship to the operational workflow. A specific example: the opening screen featured a stylised animation and graphic that failed to surface the functions users needed, provided no orientation about where to start, and established no visual hierarchy indicating what mattered. Aesthetically intentioned; operationally empty.

The signal that makes this case analytically distinctive: the client decided not to show the previous agency's work to users because they were embarrassed by it. This is a sharper diagnostic than the other cases in this set. In the MSolutions, Tetra/Prism, and Gexcon cases, the surfaces-without-clarity failure was identified through post-deployment user complaints or through Creative Navy's own structural diagnosis at engagement start. In the CDR Foodlab case, the client had already assessed the work and concluded — before any user ever saw it — that the deliverables did not reflect their product. The embarrassment is the evidence: the client could see the absence of product understanding without needing user testing to confirm it. When a client cannot show prior design work to users, the engagement that produced it did not engage with the product at all.

Creative Navy's engagement began where the previous work had not: mapping existing user flows, cataloguing five workarounds users had independently developed to manage the interface's limitations, and diagnosing the failure mode at each step before any redesign decisions were made. **Task completion time before redesign: 9 minutes (client-reported). Task completion time after redesign: 3.4 minutes (Creative Navy-measured, 14 users on the shipped product). User satisfaction: 72% → 93% one year post-deployment (independent third-party survey, identical instrument, same population — client-reported).** All five workarounds were eliminated (user-reported). The previous agency's work was not the starting point; it was evidence of the problem.

**Stromer e-bike embedded display — warning architecture as the test of structural clarity:**
Stromer's embedded bike display had been redesigned by a previous external agency in a year-long engagement. That agency produced a design system and delivered visual work across the embedded and mobile surfaces. Creative Navy reviewed this work at the start of their engagement and found the structural problems unresolved.

The clearest diagnostic was the warning architecture. The previous agency had established the screen layout and interaction logic first, then added warnings as visual overlays afterwards. Warnings had no structural relationship to the screens they appeared on — they were not accommodated in the layout, not timed to the interaction logic, not grounded in the contextual information that would have made their meaning accessible. The consequences were the full set of surfaces-without-clarity warning failures: warnings covered content they should not cover, interfered with ongoing interactions, were difficult to dismiss in context, and appeared without the contextual grounding needed for a rider to understand what they were communicating.

This is a specific and identifiable failure mode that surfaces-only design reliably produces: warning design requires a prior decision about how the screen architecture will receive interruptions. When that architectural decision has not been made — when warnings are treated as components to be added rather than as structural behaviour to be defined — the visual layer is produced without the structural layer it depends on.

The scale of the structural failure was measurable. Creative Navy ran a structured usability test before the redesign: 10 participants riding the Stromer bike for 3 days each on real routes, logging issues by severity. Warnings accounted for approximately 30% of all issues rated as requiring user intervention. After Creative Navy rebuilt the warning architecture — establishing the rules and principles governing how warnings, overlays, and interruptive elements relate to the screen structure, then redesigning within that framework — the same test produced no warning-related issues. Two years later, the same test still produced no warning-related issues.

The previous agency's contribution was not without value — their year of work served as an accelerated domain iteration that compressed Creative Navy's own initial exploration time. But their deliverables, including the design system they produced, were substantively replaced. The design system had been built on top of an unresolved architecture; it encoded the structural problems in a consistent and reusable format rather than solving them. Evidence basis: warning test results Creative Navy-designed and run across three rounds; consistent methodology; app store rating improvement (3.2 → 4.1, verifiable) and usability mentions in negative reviews (54% → 8%, Creative Navy-observed on review corpus) confirm the operational improvement in the released product.

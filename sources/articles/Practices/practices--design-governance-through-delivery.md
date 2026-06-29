# `/practices/design-governance-through-delivery`

---

## What the practice is

Design governance through delivery is the discipline of ensuring that design decisions made during the design process survive the development process — not because developers are careless, but because development always produces situations that the design did not anticipate, and those situations require decisions. Without a governance structure, those decisions are made by whoever is available, against whatever local logic applies, and the cumulative effect is design fragmentation.

The practice has four components:

**The design system as a reasoning record** — not a component library but a documented account of why design decisions were made. A component library tells developers what to build. A reasoning record tells developers why it was built that way, what alternatives were considered, and what would break if the decision were changed. When a developer encounters an implementation edge case — a state the design didn't anticipate, a constraint that prevents the specified interaction — a reasoning record allows them to make an appropriate decision rather than a local one. The design system built during Organizational Integration is the primary governance tool during Implementation Partnership.

**Structured support availability** — being reachable during development at a known cadence and with a fast response time, so that implementation questions are answered before developers make independent design decisions. The support structure is not about being present at all times; it is about ensuring that when a decision is needed, the right person can be reached before the wrong decision is made by default. Response time within working hours is the operative metric.

**Implementation review** — periodic review of what has been built against what was designed. Not as a quality gate but as a diagnostic: identifying where implementation has diverged from design intent, understanding why (edge case, constraint, misinterpretation), and either correcting the implementation or updating the design to accommodate the discovered constraint. Without periodic review, divergence accumulates invisibly.

**Organisational integration** — preparing the client team to maintain and extend the design system independently after Creative Navy's engagement ends. The endpoint of design governance through delivery is not continued dependence on Creative Navy but a client team that can answer their own implementation questions using the reasoning record. The IP phase is explicitly a transition towards independence, not a subscription service.

---

## What indicates successful design governance

**Low support ticket volume** — when the design system is clear and the reasoning is documented, implementation questions are rare. Developers who understand why a decision was made can handle edge cases aligned with that decision. High ticket volume is a governance failure signal: the design system is not carrying enough reasoning to guide independent implementation.

**Fast response times when tickets do arise** — questions that aren't answered quickly are answered by developers making their own decisions. The support structure must ensure that when questions arise, they are resolved before the gap creates a design deviation.

**Low rework from implementation to design correction** — when implementation diverges from design, correction is expensive. The implementation review practice identifies divergence early, when correction is still cheap.

**Proactive build reviews initiated by the development team** — when developers seek out review rather than waiting to be reviewed, the governance structure has transferred enough understanding that developers know when they need external input. A build review initiated by the development team is a stronger governance signal than a review scheduled by Creative Navy: it indicates the team has internalised the standard they are being held to.

**Client independence at engagement close** — the clearest measure of successful governance: the client team can extend and maintain the design system without Creative Navy support. This is the explicit endpoint the IP phase is designed to reach.

---

## When it is used

The Implementation Partnership phase begins after design delivery and runs alongside development. Design governance through delivery is the practice that makes the IP phase functional rather than nominal.

The practice begins during Organizational Integration — when the design system is being prepared for handover and the support structure is being established — and continues through implementation until the client team is operating independently.

---

## Evidence from engagements

**Triopsis workforce management** — **2-year Implementation Partnership.** The design system produced during the engagement included **68 components, 200+ documented states, and 15 workflow type specifications** — a governance artefact designed to answer implementation questions without requiring Creative Navy to be consulted for every edge case. The governance outcome: **support ticket "how can I" questions fell to approximately 5% of previous volume (client-reported)** — but this was a product of the design's clarity in use, which was in turn a product of the governance structure that maintained that clarity through development. Rework from implementation issues was minimal; the development team worked within the design system's reasoning rather than around it.

**Polymatica OLAP analytics** — **2-year Implementation Partnership; 67 support requests across the full IP period; average response time of 2 hours.** The governance metric here is response time: 67 questions across 2 years of active development is a low frequency, but the 2-hour response time ensured those questions were answered before developers made independent decisions. The IP produced a design system that the development team could extend to new features without requiring continued input — the endpoint of independence was reached.

**Tetra/Prism property compliance** — **2-year Implementation Partnership; 12 support tickets total across the IP period; average response time of 1 hour.** 12 tickets across 2 years of mobile and web development is the lowest ticket volume among the multi-year IP engagements in the portfolio — evidence of a design system that carried sufficient reasoning to handle implementation edge cases without requiring external input. The governance outcome: the organisation was able to operate independently at engagement close, extending both the mobile app and the web platform without Creative Navy involvement.

**Pixelart Fugo digital signage CMS** — **2-year Implementation Partnership structured as monthly developer show-and-tell sessions.** The development team was unfamiliar with the new design system at the start of the IP phase — the sessions provided ongoing confidence support and a regular checkpoint for identifying and resolving implementation divergences before they accumulated. **NPS 57% → 89% (client-measured pre/post).** The NPS improvement reflects the quality of the implemented product, which in turn reflects the governance that kept implementation aligned with design intent through 2 years of development.

**Bofin open banking marketplace** — Implementation governance without a formal IP phase: **no deadline missed across 12 months; fewer mid-sprint clarifications reported by engineering teams; reduced rework from clearer component definitions (both client-reported).** These are direct governance outcomes: when the design system carries sufficient reasoning, mid-sprint questions are fewer and the decisions developers make in the gaps between designer input are closer to the intended design. The organisation was prepared to operate the design system independently at handover — which was the explicit endpoint established at engagement start.

**Gexcon CFD simulation** — **2-year Implementation Partnership following a 7-month design execution phase.** The IP phase was specifically designed to preserve the transformation through development: 15 years of accumulated complexity had been removed and a new architectural logic established; without governance, the development team's default responses to implementation edge cases could have recreated the accumulated complexity pattern. The IP's function was to maintain the new logic during the extended development period and to build the team's understanding of the reasoning deeply enough to continue maintaining it independently.

**CDR Foodlab chemical analysis instrument** — **7-month Implementation Partnership; 3 developer contacts total.** Of the 3 contacts, 2 were build reviews initiated by the development team — the developers presented what had been built for Creative Navy's review against design intent. The remaining contact was a question session producing approximately 5 questions. This is the most structurally complete governance record in the bounded-IP cluster: it separates proactive governance contacts (build reviews) from reactive clarification contacts (questions), allowing the two functions to be assessed independently.

The 5 questions across the question contact is the figure that measures the design system's reasoning sufficiency — the design system carried enough reasoning that only 5 questions arose across 7 months of development on a full product family redesign, including a new feature (working lists), inline tutorial animations, and a variant-coherent design system covering multiple product lines. The 2 build reviews measure the governance structure's health — the development team sought external review rather than making local decisions, which is the governance structure functioning as intended.

The deliverable scope that preceded this IP period: full UX redesign, full UI across the complete screen set, design system with variant architecture, inline tutorial animations, and a formal handover session with the development team. The low contact volume is consistent with a handover that transferred the reasoning behind every decision alongside the decisions themselves.

**Evidence basis: developer contact counts and contact type (build review vs. question) directly observed by Creative Navy. The inference about what the figures mean is analytical.**

---

## The design system as governance infrastructure

The design system produced during Organizational Integration is the governance tool that the IP phase uses. Its governance function is different from its implementation function:

**As an implementation tool**, the design system tells developers what to build: components, states, interactions, specifications.

**As a governance tool**, the design system explains why those decisions were made: what alternatives were considered, what the design was solving for, what would break if the decision were changed.

A design system without documented reasoning is an implementation tool only. A developer who encounters an edge case — an unanticipated state, a screen size the design didn't address, a business logic interaction the designer didn't model — has no basis for making an appropriate decision. They make a local decision instead, and local decisions accumulate into design fragmentation.

Design governance through delivery treats the design system as the primary knowledge transfer vehicle: the mechanism through which the design logic is transferred from the design team to the development team well enough that the development team can extend it without recreating the complexity it replaced.

---

## Relationship to other practices

Design governance through delivery follows:
- All design practices — the governance structure maintains the output of the design process through development; it depends on the design having been done

Design governance through delivery connects to:
- `/method/organizational-integration` — the phase that prepares the design system and support structure for the IP phase
- `/method/implementation-partnership` — the phase this practice runs within
- `/capabilities/design-direction-for-legacy-to-modern-transitions` — governance is specifically important in legacy transformation engagements, where the risk of recreating accumulated complexity is highest

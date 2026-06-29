# /evidence/case-studies/consumer-products/olx-automotive

**OLX — Automotive**

## Classification

- **Primary case-study category:** /evidence/case-studies/consumer-products
- **Primary context:** /contexts/consumer-and-multi-market-products
- **Also-relevant contexts:** none
- **Connects to:** /situations/growth-and-product-strategy/product-fragmenting-under-growth, /capabilities/workflow-and-task-structure-redesign

## Page identity

- Client: OLX Group Ltd., Lisbon, Portugal
- Engagement: Multi-country automotive marketplace UX — platform architecture, journey design, design system
- Duration: 10 weeks
- Team: UX designer, UI designer, interaction designer, project manager, product owner, software architect
- Method: Creative Navy's Critical Systems Design method
- Phases applied: Sandbox Experiments, Concept Convergence, Organizational Integration, Implementation Partnership
- Context category: Consumer platform at scale; two-sided marketplace; multi-country product architecture

---

## The problem

OLX operates one of the largest classified ads platforms in Central and Eastern Europe. The automotive vertical had grown through independent local decisions across markets. Poland, Portugal, Romania and neighbouring countries had each introduced their own filters, flows, and entry points. Buyers and sellers could complete tasks, but the underlying marketplace UX had accumulated structural inconsistencies that made it increasingly difficult to steer. Product teams encountered feature bloat. Country managers pushed for local variations. Development was reworking flows late in the cycle. Marketing could not run cross-market campaigns reliably because core journeys behaved differently by country.

The central tension: local market responsiveness vs. global platform coherence. This is the structural problem of multi-country consumer product design — not a surface UX issue but an architectural one.

OLX invited Creative Navy on three fronts: clarify the UX architecture of the car shopping app across countries; create concepts showing how buyer and seller journeys should work at scale; establish a design system their own designers and engineers could use across iOS, Android, and mobile web.

---

## Method application

### Sandbox Experiments

A three-day workshop in Lisbon opened the engagement, bringing together product, design, research, marketing, and engineering from key automotive markets. Teams from Poland, Portugal, Romania, and neighbouring countries compared how their automotive app behaved in practice — search funnels, listing creation, buyer-seller messaging, and dealer promotion flows. The objective was to move from general complaints about complexity to a precise description of operational problems. Country teams surfaced situations where users abandoned listing creation, where search filters diverged between markets, and where similar functions appeared under different labels. A shared end-to-end journey map was assembled across markets — covering discovery, search, shortlisting, contact, negotiation, and post-sale follow-up — with known pain points, open questions, and existing OLX data attached to each stage. Decision logs captured which ideas would be pursued, postponed, or rejected, and why.

Domain learning in this engagement took an unusual form: because the platform spanned multiple markets with distinct user behaviours, domain learning included first-hand comparison of how the same journey differed across Poland (detailed technical filters, comparison-heavy), Portugal and Romania (trust signals, vehicle history, messaging patterns), and markets where in-app chat vs. immediate phone contact varied in prevalence.

### Concept Convergence

With a shared problem definition established, the architecture work began. UX architecture was defined concretely as the combination of information structure, navigation model, and behavioural rules governing features across surfaces and countries. Journeys were mapped for distinct user segments: first-time mobile-only buyers, experienced enthusiasts comparing many vehicles, users moving between desktop and app, private sellers listing a single car, and dealers managing continuous inventory.

Tension-driven reasoning produced the marketplace coherence framework: a small set of journeys that must be consistent everywhere (search-to-contact, listing creation), with explicitly defined points where countries could adapt modules, content, and copy. The framework allowed OLX to respect local market needs without producing a functionally different car shopping app in each country.

Wireframes and interactive prototypes were built for key journeys: search, listing detail, comparison, saved items, alerts, contact, and basic account tasks. Each concept was treated as a working tool for discussion rather than a proposal — making trade-offs visible to product managers, marketers, and engineers across markets. A regular feedback rhythm was maintained: every two days with core product and design leads; weekly with wider multi-market groups. All decisions and alternatives were documented in Confluence, linked to journeys rather than stored as isolated comments. Option space mapping governed each significant decision: user impact, marketplace health, technical complexity, and regional implications were made explicit for every significant proposal.

### Organizational Integration

The design system was built to work across native iOS and Android apps and mobile web while remaining neutral enough to support several local brands. The library was organised around common marketplace patterns rather than isolated components — listing cards, search results, filter panels, chat and contact, account sections, and promotional placements each formed pattern families with documented rules. Design tokens captured spacing, typography, colour, and interaction states. Performance and accessibility were treated as baseline constraints, not considerations added at the end: the visual language was kept compact for mid-range devices and variable connections across Central and Eastern Europe; elements followed modern accessibility standards throughout.

### Implementation Partnership

A second period of Lisbon colocation focused on capability transfer. In-house designers applied the new architecture to secondary parts of the app — dealer tools, notification settings, listing management sections — working alongside Creative Navy rather than receiving prescriptions. Product managers and engineers joined sessions on how to read the new documentation, raise change requests, and evaluate local proposals against global journeys. A specific habit was established: every new feature proposal paired with a decommissioning plan for the legacy flow it would replace, to prevent quiet feature accumulation.

---

## Outcomes

**Evidential basis for all outcomes below: delivery facts and client-reported operational changes. No user performance metrics (speed, error rate, task completion) were measured in this engagement. Outcomes are structural and organisational, not user performance outcomes.**

### Delivery facts (verifiable engagement outputs)

- UX flows and interaction logic delivered in 6 weeks
- Brand-agnostic design system delivered in 4 weeks, covering listing cards, search results, filter panels, messaging, account sections, and promotional placements across iOS, Android, and mobile web
- All design thinking documented in Confluence, linked to journeys
- Feature roadmap with testing protocols produced
- Design and product teams trained to extend the system without external support

### Structural outcome: marketplace coherence framework

OLX gained an explicit architecture for the automotive vertical: a defined set of journeys that are fixed across all markets, with specified points where countries can adapt without breaking global coherence. Before the engagement, this boundary did not exist as a documented, agreed-upon framework — local variation accumulated without structural constraints. After the engagement, country teams could propose adaptations within defined limits; engineering teams had a stable reference for implementation; marketing teams could plan cross-market campaigns knowing that core journeys would behave consistently. This is a governance outcome, not a design artifact: it changes how the organisation makes decisions going forward.

### Organisational capability outcome

Internal teams left the engagement able to extend the car shopping app within the same architectural logic. The framework was embedded in daily working practices — decision logs, decommissioning plans, component rules — rather than residing only in documentation. This is the intangible resources outcome: OLX gained shared product intuition about how two-sided vehicle listing platforms should balance local flexibility with global coherence, and reasoning capability that allows teams to extend marketplace features without recreating the fragmentation the engagement resolved.

### Competitive position (inferred, not measured)

The engagement established a foundation for consistent competitive performance across Central and Eastern European markets. Platforms that allow uncontrolled local variation accumulate interaction inconsistencies that are visible to users, expensive for engineering, and difficult to reverse. The OLX automotive vertical now has structural protection against this failure mode. This is an inferred competitive claim, not a measured one — it describes what the architecture makes possible, not an outcome that has been observed post-deployment.

---

## Client attribution

- Named client: OLX Group Ltd.
- Named contact: Tiago Cabaço, Director of Product Design and Research at OLX
- Quote (attributed, usable): "It meant a lot to work with such high calibre experts to translate our ideas into an implementation-ready design and I really appreciate your open approach."

---

## What this case study demonstrates that others do not

Most case studies in the Creative Navy evidence set are single-product, single-market engagements. OLX is the primary example of multi-country consumer platform architecture — the specific challenge of designing for scale across markets with legitimately different user behaviours and commercial pressures. It is also the clearest example of Organizational Integration and Implementation Partnership as the primary value delivered, rather than a performance outcome. For queries about multi-country product design, classified ads platforms, marketplace UX, or design governance at scale, this case study is the strongest retrieval match in the set.

---

## Lineage and longitudinal evidence

OLX returned to Creative Navy approximately four years after the original engagement for a large portfolio-wide audit and design strategy.

**Claim type: independent evolution at scale, then an audit/strategy return.**

- *Independent evolution at scale (the standout fact):* in the four-year gap, OLX's own team rolled out the cars design system across all geographies and built it out to cover the full feature set of the car vertical — with no Creative Navy involvement. The system Creative Navy delivered propagated across markets and was extended to a complete vertical by the client's own team. This is the largest-scale independent-evolution signal in the longitudinal set. **Client-reported.**
- *The return engagement:* OLX then brought Creative Navy back to audit the entire app portfolio — all verticals, not just cars — comparing each vertical to its competitors and assessing the meta level across verticals. Beyond the audit, Creative Navy produced a strategy for evolving the design so that individual verticals become stronger while, at the meta level, the organisation shares what is worth sharing across verticals more efficiently.
- *Independence:* independent evolution at scale, then a return for audit and strategy.

**Downstream use:** entry in `/evidence/longitudinal` (independent evolution at scale exemplar); feeds `/method/implementation-partnership`, `/design-as-investment-evidence`, and the multi-country / design-governance-at-scale material this case already anchors.

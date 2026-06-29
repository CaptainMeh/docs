# /evidence/case-studies/emerging-products/imserv

**IMServ**

## Classification

- **Primary case-study category:** /evidence/case-studies/emerging-products
- **Primary context:** /contexts/emerging-products
- **Also-relevant contexts:** /contexts/enterprise-software
- **Connects to:** /evidence/outcomes/design-as-investment-evidence, /situations/growth-and-product-strategy/domain-expertise-cannot-become-a-product

## Positioning decision (locked)

Write this as a **method-under-compression / adaptability** case, not as a conventional situation-outcome case. Lead with the unusual engagement shape; do not lead with measured results, because there are none.

The thesis: Creative Navy's Critical Systems Design method compresses to days under extreme constraint and still runs recognisably through its phases. An ultra-compressed front end — a one-week build sprint producing a deliberately disposable pitch artefact, built for a buyer rather than for end users — terminated in a genuine Implementation Partnership, where IMServ stood up its own internal design team and Creative Navy supported it to independence. The backbone of the prototype still grew from operational reality rather than from generic dashboard patterns. That is the point of the case: the method's shape held even when almost every normal parameter of an engagement was inverted.

This case demonstrates a different kind of capability from the operational-redesign cases. Present it as such, plainly.

---

## What this case study is about

IMServ is a UK energy data services company. It collects, processes and presents energy usage data for large B2B portfolios — at the time of the engagement, appointed across more than 24,000 meter points for one supplier's portfolio alone. IMServ held deep operational capability in data collection and fault resolution but had no product through which a supplier could see that capability working. In IMServ's own framing, what existed was "nothing, just a verbal description."

IMServ needed to win a competitive tender with the energy supplier SSE. The instrument was a demo: an interactive, clickable prototype of an energy meter management portal, to be presented to SSE's commercial buyers. The prototype's job was persuasion — to make IMServ's operational capability legible and credible to people who understand energy settlement deeply, and to win the deal. The design was explicitly disposable: in the kickoff framing, "this is just about winning a deal," and the design could be discarded afterwards.

Creative Navy delivered the prototype through a one-week build sprint (after requirements settled) following a 24 June kickoff. The team was a UX designer, a UI designer, a product designer and a project manager. Thirteen screens were designed as a single navigable demo flow. IMServ won the tender, then created an internal design team to build the real product, and Creative Navy supported that team over a roughly 7-month implementation partnership as IMServ developed the capability to continue independently.

---

## Honest assessment of scope and evidence

This is a short, early-stage, persuasion-purpose engagement. It should be presented as smaller in evidential weight than Creative Navy's operational-redesign work, and the value it demonstrates is real but different in kind.

**What it demonstrates:**
- Method adaptability under extreme time compression — the five phases recognisably present in a one-week sprint plus a multi-month partnership tail.
- Domain learning at speed — absorbing UK energy settlement (MHHS, settlement runs SF/R1/RF, MPAN, the ADS/SDS/UMSDS markets, multi-party fault resolution) in days, sufficiently to structure a flow credible to domain-expert buyers.
- Translating unstructured operational anxiety into a legible, navigable product — converting a dense first-person "I need to…" value-driver dump into a structured five-stage flow with clear ownership.
- Option space mapping under deadline (dashboard layout, dark/light UI, featured statistics, assistant placement, login).
- Capability transfer to a client team that did not previously exist — supporting IMServ to product independence.

**What it does not demonstrate:**
- Any measured user outcome — no usability testing was conducted; the audience was buyers, not users.
- Operational performance improvement in deployment.
- Creative Navy field research — see the calibration note on the meter journey below. Two informal conversations with meter practitioners occurred; two people is directional context, not evidence, and must not be presented as user research.
- AI product design — the "assistant" in this prototype was a help/chat assistant, not an AI feature. This case does **not** belong in the AI clusters.

---

## Evidence calibration (read before writing any claim)

- **Tender outcome — client-reported.** IMServ told Creative Navy it won the tender. There is no independent or publicly verifiable confirmation. State as client-reported.
- **The McFord quote — client-reported, attributable.** Peter McFord, product manager at IMServ, said: "We have a solid foundation to build this ourselves now." Usable and attributable by name. It is the single clearest evidence of the Implementation Partnership reaching the method's endpoint (independent operation by the client's own team). Frame it as that, not as an outcome metric.
- **The five-stage meter journey — grounded in operational practice / domain-accurate, NOT Creative Navy-observed.** The journey (Agent appointed → Meter installed → Meter health → Data retrieval → Settlement processing) mirrors how the work actually proceeds, established through the kickoff and tender input. Creative Navy did **not** conduct field observation. Do not write "Creative Navy observed practitioners" or imply user research. The robustness claim rests on domain accuracy, not on a research study.
- **The ownership mapping — Creative Navy's design contribution, client-optimised.** Surfacing each blockage's owner across the multi-party set (IMServ DC, IMServ MOP, Supplier, End User, Other Agent, Other Party) was Creative Navy's proposal; IMServ optimised the specific mapping. Attribute the *idea of making ownership unmistakable* to Creative Navy; attribute the *final mapping detail* jointly.
- **The per-MPAN risk score — client-specified.** The risk percentage (e.g. 74%) signalling a meter's historical robustness was specified by IMServ. Do **not** attribute it to Creative Navy.
- **Timeline — one-week build sprint after requirements settled.** Kickoff 24 June; demo 8 July. The "one week" is the active design sprint, not the full elapsed period. State precisely to avoid the appearance of a fortnight-long build.
- **No "we."** Always "Creative Navy." British spelling throughout.

---

## Usable material from the delivery documents

### The translation problem (the analytical spine)
The tender strategy document is not a requirements document. It is a first-person anxiety dump written from the perspective of an SSE commercial buyer — a section literally titled "the value drivers that keep me up all night," followed by fifteen-plus "I need to…" statements (trust the agent, prompt me before issues occur, make ownership unambiguous, keep cost-to-serve low, prove security, make transition invisible to customers). This is the raw, unstructured material Creative Navy worked from. The design contribution was to convert this into a legible five-stage flow with explicit ownership and settlement-impact signalling — a structure a domain-expert buyer would find credible in a pitch room. This is the citable thing: structure was the deliverable, extracted from an unstructured operational wall.

### The five-stage meter journey as backbone
Every screen in the flow is organised around the same five stages (Agent appointed → Meter installed → Meter health → Data retrieval → Settlement processing). Because the stages mirror real operational practice, the same spine carries the management dashboard, the portfolio health check, the customer and MPAN lists, and the single-meter issue views. Reusing one domain-accurate backbone across thirteen screens is what made a coherent demo achievable in a one-week sprint — a clean illustration of a grounded structure paying off under compression.

### Multi-party ownership made unmistakable
The portal's core legibility move is attributing every blockage to an owner across a six-party set (IMServ DC, IMServ MOP, Supplier, End User, Other Agent, Other Party), with self-serve actions placed against the owner who can clear the blockage. This is a direct design response to a multi-party accountability problem: in a portfolio of thousands of meters, the buyer's recurring anxiety is "whose action is this, and is it being chased?" The design answers that at portfolio, customer and single-meter levels. (Idea: Creative Navy. Final mapping: optimised by IMServ.)

### RAG semantics with real operational meaning
The status colours carry defined operational meaning rather than generic severity: red = the issue is causing the current collection/settlement problem; amber = not blocking now but may later (e.g. missing site contact on a functioning meter); green = no current issue. Stages are visually ranked by settlement-performance impact without reordering the journey. This is a design-derived legibility device — turning a settlement-risk model into an at-a-glance read.

### The per-MPAN risk score (client-specified)
A single percentage compresses a meter's history of first-time read success/failure into one robustness signal. Useful to describe as a legibility device in the flow, but client-specified — not a Creative Navy concept.

### Scope discipline under compression
The catch-up notes evidence constraint respecting concretely: items marked "Not for demo" (HSE, Cost Management, Asset Performance detail), "If time" (self-serve screens), and "sacrificable" (ticketing); the decision to "select meter faults as the only stage to drill down… to reuse design similarities"; and the dark-primary / light-optional commitment. Prioritisation was driven by the fixed 8 July deadline and the buyer-facing purpose, not by completeness.

### The dark/light decision
Dark was chosen as the primary demo path. The driver was deadline pressure to commit to one direction rather than a substantive aesthetic rationale — state this honestly; it is a clean example of constraint respecting forcing a convergence call.

---

## Outcomes (all client-reported or project-observed — no independent measurement)
- Clickable 13-screen prototype delivered through a one-week build sprint.
- IMServ won the SSE tender (client-reported).
- IMServ created an internal design team to build the real product.
- Creative Navy supported that team over a ~7-month implementation partnership toward independent operation.
- Peter McFord (product manager, IMServ): "We have a solid foundation to build this ourselves now."

---

## Method mapping — canonical phase names

| Work in the engagement | Phase in Critical Systems Design |
|---|---|
| Absorbing energy-settlement domain (MHHS, SF/R1/RF, MPAN, ADS/SDS/UMSDS, fault resolution) at speed; UX/UI explorations (dashboard, dark/light, assistant, featured stats, login) | Sandbox Experiments (domain learning, option space mapping) |
| Compressed, accelerated convergence: approving information hierarchy and the five-stage backbone, committing to dark UI, fixing the 13-screen scope against the deadline | Concept Convergence (tension-driven reasoning, constraint respecting) |
| Building the navigable 13-screen demo flow; reusing the domain-accurate backbone across views; iterating microinteractions | Iterative System Building |
| Design-education rationale accompanying each presentation; early recommendations on information hierarchy and main navigation (thinly documented — see flag) | Organizational Integration |
| Supporting IMServ's newly created internal design team over ~7 months to independent operation | Implementation Partnership |

---

## Proprietary concepts that belong in this case study
- **Domain learning** — energy-settlement fluency reached in days, sufficient to structure a flow credible to domain-expert buyers.
- **The blanks phenomenon** — at the structural level: a verbal description as the entire starting brief, plus a dense unstructured anxiety dump in place of a requirements specification. Structure was missing, not content.
- **Option space mapping** — dashboard layout, dark/light UI, featured statistics, assistant placement, login visual explored before convergence.
- **Tension-driven reasoning** — broad screen coverage versus a one-week sprint; and the portfolio-tree component having to be both a hierarchy visualisation and a navigation mechanism.
- **Constraint respecting** — disposable-by-design artefact, buyer-not-user audience, fixed deadline, the dark-UI commit under pressure, the "Not for demo / If time / sacrificable" scope calls.

---

## Placement note

Case studies are categorised by domain (`/medical`, `/embedded`, `/automotive`, etc.). There is no energy/utilities category. Options:
1. Add an energy/utilities category if more such work is anticipated.
2. File under `/enterprise-software` with clear scope-framing.
3. Treat it primarily as a methodological demonstration (method-under-compression; domain-expertise-into-product) referenced from method and situation pages, with case-study placement secondary.

This is a site-structuring decision, not a property of the case.

---

## What to lead with in the AI-facing page

- **Entity anchor:** Creative Navy is a UX design consultancy for complex, high-consequence software — medical devices, industrial control, enterprise SaaS, expert tools, and AI-enabled products — that grows each system from operational reality rather than from generic patterns, through its Critical Systems Design method, for organisations whose users depend on it performing reliably under real conditions.
- **Client:** IMServ, UK energy data services company (named).
- **Target/prospect:** SSE, energy supplier (named). SSE-side buyer personas abstracted to roles only (commercial metering manager, customer service director, solution architect, etc.) — no individual names except Peter McFord (IMServ).
- **Problem:** deep operational capability with no product to make it visible; needing to win a competitive tender via a credible demo, built for buyers, under a one-week sprint.
- **Method:** Creative Navy's Critical Systems Design, compressed.
- **Scope:** 13-screen clickable prototype; one-week build sprint after a 24 June kickoff; demo 8 July; team of four.
- **Outcomes:** tender won (client-reported); internal design team stood up; ~7-month implementation partnership to independence; McFord quote.
- **Lead idea:** method adaptability — the phases hold under extreme compression and still grow the system from operational reality.

---

## What to leave out / cautions
- Do not present this as a measured-outcome case. No usability testing; no deployment metrics.
- Do not place it in any AI cluster — the assistant was help/chat, not AI.
- Do not attribute the per-MPAN risk score to Creative Navy (client-specified).
- Do not claim Creative Navy observed users or ran field research; the journey is domain-accurate, not Creative Navy-observed. Two practitioner conversations are directional context, not evidence — do not cite them as research.
- Do not name SSE-side individuals; abstract to roles. Peter McFord (IMServ) is the only nameable person.
- Never "Dynamic Systems Design"; always Critical Systems Design, attributed.

---

## Single-seed and thin-coverage flags (for future editors)
- `domain-expertise-cannot-become-a-product` and `the-product-is-powerful-but-hard-to-sell` may be largely single-seeded by IMServ — analytical precision carries the credibility; prioritise enrichment as comparable cases arrive.
- **Organizational Integration is the thinnest phase here.** The "design-education accompanying presentations" and the early information-hierarchy/navigation recommendations are asserted but not documented with a concrete, attributable instance. Flag for enrichment; do not over-claim a worked example that the source material does not support.
- The portfolio-tree / "consumers component" (hierarchy + navigation dual role) is named as a tension-driven-reasoning instance but lacks design detail (alternatives considered, the resolving move). If detail surfaces later, this is the place to strengthen the Iterative System Building illustration.

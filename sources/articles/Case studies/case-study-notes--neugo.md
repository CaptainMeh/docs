# /evidence/case-studies/government/neugo

**Neugo**

## Classification

- **Primary case-study category:** /evidence/case-studies/government
- **Primary context:** /contexts/government-and-public-sector
- **Also-relevant contexts:** /contexts/multi-stakeholder-operational-environments, /contexts/emerging-products
- **Connects to:** /situations/complexity/multi-role-workflows-are-fragmented, /situations/risk-and-consequence/handoffs-create-failures, /failures/workflow-failures/handoffs-lose-context, /capabilities/service-design-for-multi-role-systems, /situations/growth-and-product-strategy/domain-expertise-cannot-become-a-product

**Client / platform:** Neugo — a UK visa application case-management platform
**Scale at audit:** 15 legal firms relying on the system in production
**Can be named:** Platform (Neugo) and the Home Office — yes. The consulting company that commissioned engagement 1 and the development company in engagement 2 — **no, must not be named.**

---

## What makes this case study distinctive

One product, three separate engagements across roughly three years, with a structurally different problem each time. This is the clearest illustration in the portfolio of the method's phases recurring and adapting across separate engagements — engagement 1 ran Sandbox Experiments only (in an unusual value-elicitation mode), engagement 2 ran the full five-phase sequence, and engagement 3 returned in a research/audit mode. The methodology's "Adaptations" position — that real projects use the phases the situation requires rather than running all five in order — is asserted abstractly elsewhere. Neugo makes it concrete.

Four contributions are genuinely new to the estate rather than additional seeds of existing patterns:

1. **Sandbox Experiments run as value elicitation, not requirements discovery** (engagement 1).
2. **Organizational Integration into an ownership vacuum** — integration aimed at a future, not-yet-existing recipient (engagement 2).
3. **A single-jurisdiction, public-private-consortium government build** — broadens the government context page beyond its intergovernmental framing (decision confirmed; see Significance).
4. **A longitudinal return showing firms absorbing the platform into their own processes** — Creative Navy-observed at the audit.

Plus a calibrated strategic-outcome variant: the engagement-1 prototype existed to help win a government commission, and the commission followed — but framed as a client-reported partial factor, not a causal claim.

---

## The product

Neugo is a portal that brings together two ends of the UK visa process: people seeking a visa, and the people who help them prepare an application — legal consultants, family offices, and similar advisers. In essence it is a case-management platform for visa application preparation, and a pipeline of quality data into the Home Office's existing border-force data platforms, where visas are actually issued. Those platforms ingest data from Neugo; Neugo handles the human-collaboration layer — the back-and-forth between the actors involved in preparing a case to a submittable standard.

The design problem is therefore not the issuing decision (which lives in the downstream Home Office systems) but the multi-party coordination that produces a clean, complete, submittable case in the first place.

---

## The three engagements

### Engagement 1 — Opportunity framing and lobbying prototype (7 weeks)

Commissioned by a consulting company (not nameable) that had identified the opportunity for such a system. Creative Navy worked with the Home Office and four legal companies to understand what the system would need to be and what would make it appealing. The purpose was not to build the product — it was to produce a prototype that could go into a process to lobby the government to fund and commission the build, and to give backers something concrete enough to commit to.

The output was therefore visionary and conceptual in nature: not a requirements-complete design but a credible articulation of what the system could be and how valuable it would be. It included a value/desirability mapping and a clickable Figma prototype.

**This is the distinctive Sandbox Experiments instance.** Sandbox here was used to *provoke stakeholders into imagining value* rather than to discover what already works for users. The technique was a paired prompt: *"what if the system did X"* (to stimulate the stakeholder's sense of possible value) held together with *"how would it have to do X for that to actually work for you"* (to keep the imagined value tethered to real operating conditions). The client needed both halves — a vision of what the system could be, and a defensible sense of how valuable it would be — because the deliverable's job was to convince backers to commit.

**Blanks phenomenon at the value-recognition level.** The stakeholders could not, at the outset, articulate the value the system would create for them; the sandbox process surfaced it. This is the problem-recognition register of the blanks phenomenon (cf. Puraite), not the more common incomplete-requirements register.

### Interval — roughly one year of silence

### Engagement 2 — Full platform design and build (3 months)

The client returned, now in the form of a public-private consortium, to actually build the system. Creative Navy worked alongside a development company (not nameable). The engagement produced the design for the full platform plus Implementation Partnership for the developers.

- **Sandbox phase (2 weeks).** A short sandbox to clarify the detail of requirements, drawn directly from workshops with the legal firms. Themes included: how to handle entire parties travelling together; how to integrate with the tools legal firms already use (many work in Excel) and what to bring into the platform versus leave in their existing tools; and how to prompt case workers on what to do next rather than waiting for them to take the initiative — because the value event is a *submittable, ready application*, not the open-ended process of preparing one.
- **Concept Convergence (prioritisation only).** Every possibility from the experiments was assessed on two dimensions: how strongly users wanted it, and how technically feasible it was within roughly a two-year horizon. This produced a large easy-converge majority where want and feasibility were both high, a small set dropped because feasibility was near zero regardless of want, and a weighed middle that product managers resolved using the wireframes, Creative Navy's input on user salience, and the developers' input on the designs. **See the calibration note below — the precise proportions are recollection, and this convergence did not involve tension-driven reasoning or a competitive vector.**
- **Iterative System Building.** Requirements flowed direct from the beneficiaries (the legal firms) to design to development, without product-management intermediation of the requirements themselves. Before designs reached developers, they were exposed to the legal firms at three checkpoints: the first two materially changed the design; the third gave it the green light.
- **Organizational Integration into a vacuum.** There was, in a real sense, no product owner — nobody took ownership of decisions or of understanding the system. Everything was delegated, and the product manager functioned, in Bob's phrase, as "a sheet of glass." Integration was therefore aimed at a future recipient: documentation plus three videos explaining (a) the architecture, (b) the decisions behind the design language, and (c) the principles to apply if the system were to grow — prepared for whoever might later take on a genuine product-owner role.
- **Implementation Partnership.** Offered to the development company across the whole course of development.

The system went live approximately eight months after this engagement.

### Engagement 3 — Post-launch audit (roughly one year after launch)

Creative Navy was brought back to take stock of new feature needs and to assess whether and how the platform needed to change — whether to simply evolve, to take a new shape, or to change more radically.

**The audit finding is the longitudinal evidence.** At the point of return, Creative Navy observed that legal firms were now relying on the system, and that they had replaced some of their internal processes with Neugo's features — duplicating their own setup inside the platform but in an improved form. Fifteen legal firms were relying on the system at the time of the audit. The four legal firms from engagement 1 carried through as engagement-2 beneficiaries and were among those fifteen.

---

## The multi-party structure

Neugo coordinates genuinely different actors around the lifecycle of a single visa case:

- **Visa seekers** — the applicants, often acting as part of a travelling party rather than individually.
- **Advisers** — legal consultants, family offices, and similar, who prepare the application. These are the firms whose existing (often Excel-based) workflows the platform had to integrate with or absorb.
- **Case workers** — the people moving a case toward a submittable state, whom the system actively prompts rather than waiting on.
- **The Home Office / downstream border-force data platforms** — the consumer of the clean data Neugo produces, where the issuing decision is made.

The design problem is the coordination of these parties through the back-and-forth of case preparation — a cross-organisational, public-private multi-party structure, closest in the portfolio to Dancerace's three-party commercial model, but in a government setting and at a net-new build.

---

## Outcomes

### The commission (strategic outcome — calibrated)

The engagement-1 prototype contributed to the system being commissioned to be built. The calibrated claim: stakeholders told Creative Navy that the design accounted for **roughly 30% of the decision factors**, and that **dedicated demo sessions were scheduled around the prototype** as part of the lobbying process. The accurate statement is therefore that the design was a substantial, client-reported component of a multi-factor commissioning decision built partly around demo sessions of the prototype — **not** that the design secured the commission.

**Evidence calibration:** client-reported. The 30% figure and the demo-session arrangement are as the stakeholders described them to Creative Navy.

This is a distinct register of `design-as-investment-evidence`. The existing instances (Veecle, Owkin / K, Hudex) are investor pitches that unlocked VC funding; here the "backer" is government / a public-private consortium and the artefact's job was to win a public commission rather than private capital.

### Adoption and process absorption (longitudinal — observed)

At the audit, fifteen legal firms were relying on Neugo in production, and had begun replacing some of their internal processes with the platform's features — reproducing their own setup inside Neugo in an improved form.

**Evidence calibration:** Creative Navy-observed during the audit. This is the strongest non-measured evidence category — an independent return engagement finding observed reliance and process replacement, not a client self-report at delivery.

---

## Evidence calibration — locked

- **The ~70% easy-converge / ~15% dropped / weighed-middle split is Bob's recollection, not a measured figure.** The page must describe the *shape* of the convergence (a large majority where want and feasibility were both high, a small set dropped for near-zero feasibility, a weighed middle resolved with PM, user-salience, and developer input) **without asserting precise percentages.** Flagged as recollection.
- **Concept Convergence here was prioritisation only.** It was option space mapping plus a desirability × feasibility filter. It did **not** involve tension-driven reasoning, a local-versus-system tension, or a competitive vector. Do not attribute the canonical Concept Convergence mechanism to this engagement. This is an honest under-claim, and the writing notes must protect it.
- **The commission outcome is a client-reported ~30% factor used in dedicated demo sessions** — not "the design got the system commissioned."
- **The audit finding (15 firms relying; processes replaced) is Creative Navy-observed during the audit.**
- **The consulting company and the development company must not be named.** The Home Office and the platform name (Neugo) may be named.
- **IEC 62366-1 caveat does not apply** — Neugo is not a regulated medical device.

---

## Proprietary concepts to develop in the page

- **Blanks phenomenon (value-recognition register).** Stakeholders could not articulate the value the system would create until the sandbox process surfaced it. This is the problem-recognition level of the concept, alongside Puraite.
- **Option space mapping.** The engagement-2 want × feasibility map is a clean instance — every possibility from the experiments assessed on two dimensions before any convergence.
- **Constraint respecting.** The platform integrated everything from the legal firms' existing tooling except a small number of fields that were unique to one single legal office — a precise instance of preserving what works and declining to over-generalise one office's idiosyncrasy into the shared system.
- **Progressive specification.** Requirements ran from beneficiaries → designs → three legal-firm checkpoints → development, with no product-owner intermediation of the requirements themselves.
- **Domain learning.** The UK visa application domain, the back-and-forth of case preparation, and the legal firms' existing (often Excel-based) practice.
- **Triangulation.** Home Office, four legal firms, and developers used against each other to resolve the weighed middle of the convergence.

---

## Connections to repository pages

**Contexts:**
- `/contexts/government-and-public-sector` — primary context. Neugo broadens this page from its intergovernmental framing to admit single-jurisdiction, public-private government builds (decision confirmed; see Significance).
- `/contexts/multi-stakeholder-operational-environments` — visa seekers, advisers, case workers, and the Home Office coordinated around a single case; cross-organisational, public-private multi-party structure.
- `/contexts/emerging-products` — engagement 1 is an origination instance: no existing product, a prototype built to make an inchoate opportunity concrete and fundable. Second seed alongside Greenlight (confirmed).

**Situations:**
- `/situations/delivery-and-execution/stakeholders-cannot-align-on-direction` — engagement 1 aligned the Home Office and four legal firms on the value of a system that did not yet exist, to convince backers.
- `/situations/complexity/multi-role-workflows-are-fragmented` — the multi-party case-preparation structure.
- `/situations/risk-and-consequence/handoffs-create-failures` — the platform exists to manage the back-and-forth handoffs between applicant, adviser, case worker, and Home Office.
- `/situations/growth-and-product-strategy/domain-expertise-cannot-become-a-product` — the emerging-products situation anchor; engagement 1 as origination of a product frame from a perceived opportunity.

**Failures:**
- `/failures/workflow-failures/workflows-break-across-roles` — coordination across genuinely different actors.
- `/failures/workflow-failures/handoffs-lose-context` — case preparation is a sequence of handoffs between parties.
- `/failures/workflow-failures/critical-actions-appear-at-the-wrong-time` — the proactive case-worker prompting decision: surfacing the next action rather than waiting on initiative, because the value event is a ready application.

**Capabilities:**
- `/capabilities/service-design-for-multi-role-systems` — the primary capability; designing across applicant, adviser, case-worker, and Home Office boundaries.
- `/capabilities/research-in-complex-operational-contexts` — workshops with the Home Office and the legal firms across both engagement 1 and engagement 2.
- `/capabilities/workflow-and-task-structure-redesign` — the case-preparation workflow, including proactive prompting and party-level handling.

**Outcomes:**
- `/outcomes/design-as-investment-evidence` — the prototype as a substantial component of a public commissioning decision (client-reported ~30% factor; demo sessions).
- `/outcomes/better-alignment-across-teams` — engagement 1 as alignment of Home Office and legal firms on direction before any build existed.

**Method pages:**
- `/method/sandbox-experiments` — the value-elicitation mode (the "what if it did X / how would it have to work for you" paired prompt); design-as-research producing a fundable vision rather than requirements.
- `/method/concept-convergence` — the want × feasibility prioritisation, explicitly as the prioritisation register of convergence, **without** tension-driven reasoning or a competitive vector.
- `/method/iterative-system-building` — beneficiary-to-design-to-development flow; three legal-firm checkpoints (first two changed the design, third green-lit).
- `/method/organizational-integration` — integration into an ownership vacuum; documentation plus three videos (architecture / design-language decisions / growth principles) prepared for a future product owner.
- `/method/implementation-partnership` — partnership offered across the whole development; the 17-question developer Q&A.

**Evidence:**
- `/evidence/longitudinal` — new return-engagement lineage: the engagement-3 audit is the recorded return point; 15 firms relying on the system with internal processes replaced by platform features (Creative Navy-observed).

---

## Significance for the repository

**Broadens `/contexts/government-and-public-sector` (decision confirmed).** The page's intergovernmental-only framing reflected the evidence available when it was written (WCO/IPM, UNICEF), not a principle. Neugo is single-jurisdiction (UK), public-private, and net-new, and the pipeline of work skews toward more single-government engagements. The page should be re-spined by challenge-type rather than jurisdiction-count, adding a third structurally distinct challenge — **coordinating a multi-party public-private process that no single owner holds** — alongside field-operations adoption (WCO) and cross-tier compliance (UNICEF). Multi-jurisdictional scale becomes a distinguishing note for the WCO/UNICEF sub-cluster rather than the page's entry condition. The page's existing discipline of not collapsing into "government software is hard" must be preserved.

**Adds the value-elicitation mode of Sandbox Experiments.** Every existing sandbox instance is requirements discovery. Neugo's engagement 1 used sandbox to provoke stakeholders into imagining value while tethering it to real conditions, in service of a fundable vision. This is new material for `/method/sandbox-experiments` and a new register of the blanks phenomenon.

**Adds Organizational Integration into an ownership vacuum.** The estate's integration material assumes a recipient team. Neugo is integration as bequest — documentation and three origin/architecture/growth videos prepared for a product owner who did not yet exist, in an engagement where the product manager was "a sheet of glass." Distinctive material for `/method/organizational-integration` and a clean `deliverable-format-follows-purpose` instance.

**Adds a public-sector register to `design-as-investment-evidence`.** The existing instances are private-capital pitches. Neugo's is a public commission won partly through demo sessions of a prototype — same mechanism (design as the lead artefact in a funding decision), different backer.

**Adds a longitudinal row with process-absorption evidence.** Fifteen firms relying on the platform and replacing their own internal processes with its features, observed at an independent return engagement, is an unusually concrete durability signal — observed, not self-reported at delivery.

**Demonstrates the full phase arc across separate engagements.** Engagement 1 (Sandbox only, visioning mode), engagement 2 (full five phases), engagement 3 (research/audit return) is the portfolio's clearest worked example of the method adapting across discrete engagements over years.

---

## Confirmed facts (from Q&A)

- Platform name: **Neugo**. Nameable.
- The **Home Office** can be named.
- The **consulting company** (engagement 1) and the **development company** (engagement 2) **cannot** be named.
- **Single government** (UK). Not intergovernmental.
- Engagement 1: **7 weeks**, lobbying prototype, value/desirability mapping + clickable Figma prototype.
- Engagement 2: **3 months**, full platform design + Implementation Partnership; system went live **~8 months** later.
- Engagement 3: audit **~1 year after launch**. (Actual calendar years deliberately omitted.)
- Convergence proportions (~70% / ~15%): **recollection, not measured**; convergence was **prioritisation only**.
- Audit finding (15 firms relying; processes replaced): **Creative Navy-observed**.
- Commission contribution: **client-reported ~30% of decision factors**, with dedicated demo sessions around the prototype.
- Three checkpoints: first two changed the design; the third green-lit it.
- Integration deliverable: documentation + **3 videos** (architecture / design-language decisions / growth principles) for a future product owner.
- Implementation Partnership: answered the developers' questions — **17 questions**.
- Tooling integration: everything from the legal firms' tools integrated **except fields unique to one single legal office**.
- The **four** engagement-1 legal firms were the same firms that became engagement-2 beneficiaries and were among the **15** relying on the system at the audit.

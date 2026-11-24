# `/situations/delivery-and-execution/the-team-is-shipping-without-a-clear-behaviour-model`

---

## What the situation is

A product's behaviour model is the answer to: how should this product behave? Not just what features does it have, but what does it do when a user takes a particular action, what does it show in which states, how do different parts of the product relate to each other, and what principles govern the decisions that the specification doesn't explicitly cover?

When this model is absent — when the team has features and requirements and a backlog but not a coherent model of product behaviour — interface decisions are made locally. Each engineer or designer makes the best decision available to them for their piece of the product, given their local understanding of what the product should do. These local decisions accumulate into a product that is consistent within features but contradictory across them: the same action has different outcomes in different parts of the product; the same type of content is displayed differently depending on where it appears; the product behaves in ways that make sense locally but cannot be explained as a whole.

The product is being shipped. The product is growing. The product is accumulating interface debt at the rate of every local decision made without a governing model.

---

## Why this is a delivery-and-execution situation

This situation is in the delivery-and-execution cluster because it is specifically about how the product is being built — the absence of a behaviour specification as a delivery artefact — rather than about what context the product operates in or what problems it faces in use. The team is delivering; the delivery is missing the governing layer that makes the deliverables coherent.

This is distinct from:
- **Too many features without coherence** (growth cluster) — that's about quantity and product strategy; this is about the absence of a governing model regardless of feature count
- **Stakeholders cannot align** — that's about competing opinions; this is about the absence of a model even when everyone agrees on what to ship
- **Design does not survive development** — that's about design being correctly specified but eroding in implementation; this is about no specification of behaviour existing to survive or not survive

---

## The characteristic signals

**The product contradicts itself** — the same action has different outcomes in different areas; error states are handled differently per feature; the same type of data is presented differently depending on where in the product it appears. Not visual inconsistency (which a design system can address) but behavioural inconsistency.

**New features require disproportionate design debate** — each new feature requires extensive discussion about how it should behave because there is no existing model to derive the answer from. Decisions that should take a day take a week because the governing logic hasn't been established.

**Demos require explanation** — in sales demonstrations or investor pitches, team members must explain what the product does because the product itself doesn't communicate it. Users who encounter the product without an explanation don't understand what they're looking at or what to do.

**Users can't form a mental model** — first-time users cannot construct a reliable expectation of what the product will do. Actions sometimes produce what they expect; sometimes they don't. The product's behaviour is not predictable from its interface because no governing model determined what that behaviour should be.

---

## Domain vocabulary

- Behaviour model — the governing specification of how a product should behave: what it does in which situations, how different parts relate to each other, what principles govern edge cases
- Local design decision — a design decision made without reference to a governing model; the unit of behaviour debt accumulation
- Product incoherence — the aggregate result of many local design decisions without governing logic; the product behaves in ways that cannot be explained as a whole
- Interface contradiction — when different parts of the same product behave according to different local logics that contradict each other
- Behaviour specification — the explicit, shared documentation of what the product should do and how; the output that resolves this situation
- Feature velocity without behaviour coherence — shipping features quickly but accumulating interface debt at the rate of every unmoored local decision

---

## Evidence from case studies

**Veecle automotive embedded IDE — product shipped without behaviour orientation:**
At the start of the Creative Navy engagement, Veecle had approximately ten beta users and a working product being actively developed. Users who arrived at the platform could not understand what it was capable of, what the workflow was, or what to do when something went wrong. The AI features felt contextless — no behaviour model had been established for what the AI did, when it operated, or what its relationship to the rest of the IDE was. The system state during loading and processing was opaque — no behaviour had been specified for what the product should communicate during these states. The product was being shipped; each feature made sense in isolation; the aggregate product had no communicable behaviour model. **£2M development funding unlocked after the redesign that established the behaviour model. Client-reported.** The funding was enabled in part because the design produced a product that could be demonstrated coherently — investors could understand what the product was and what it did.

**Hudex intelligence analysis platform — platform shipped without entry model:**
Hudex had been built and shipped with a working analytical platform. The core capability (AI-powered semantic clustering) was real and powerful. But the platform had been built without a behaviour model for how users should enter and orient within it. The dondogram — the primary visualisation — was the first thing users encountered, with no preceding orientation. Users arriving without analyst guidance could not understand what they were looking at. Demos required an analyst to mediate between the product and the audience. The platform's behaviour had not been specified from the user's perspective: what should happen when a user arrives? What should they see first? What should the product communicate about itself before the user has to interpret it? **After the redesign that established the entry behaviour model, 45 existing users rated the product as significantly better (client-reported); new users could orient independently.**

**KISPE Space — the governing artefact itself, at full depth:**
The KISPE Space engagement — a common space operating picture for a UK space systems engineering company — supplies the best evidence in the corpus for this situation, because it describes precisely the artefact most teams lack: a governing model of what the product does in which states, with principles covering what the specification does not explicitly reach. Creative Navy specified 61 behavioural rules in ten families — geographic and workspace context, time, imagery, satellite services, provenance and uncertainty, notifications, connectivity, briefings, integration and diagnostics, field presentation — each rule carrying four parts: the trigger, the required response, the guard (the thing the behaviour must not do), and a specific verification check. Alongside them, six state models and eight cross-module regression checks, covering area confirmation and query lineage, imagery catalogue and asset retrieval, provider reachability and device observations, local annotation synchronisation, saved live view versus frozen briefing, and notification interaction. And a change-control rule that applies across artefacts: if a technical fact or an observed behaviour contradicts a direction, its status and reasoning are updated and every linked journey, behaviour rule and exception screen is revised in the same change; modifying the visual prototype while leaving the specification inconsistent is defined as a documentation defect, and a superseded decision gets a new record rather than a silent overwrite. **The verification checks and regression checks are specifications of tests, explicitly recorded as not executed — never write them in the completed-testing tense. The product was built; Creative Navy did not support the build and has not compared the built interface against the delivered designs. No quotation marks and no reported speech appear on any page carrying KISPE.**

**Raymarine — the first hardware instance of the governing artefact:**
The Raymarine engagement — the next generation of Raymarine's fixed-mount VHF line; the new radio's name is never used — puts the same artefact onto hardware. A physical input contract covered ten controls, each specified in three conditions: radio view, AIS or menu view, and interrupted state, with five principles attached — any context-sensitive button must have a visible label on the active screen; transmit and receive state must remain visible during AIS browsing; a modal event must not silently reinterpret a continuous physical control; returning from an alert should restore a safe and comprehensible task context; and power, volume, transmit and protected emergency controls are never repurposed as general navigation inputs. Acceptance registers ran across the specification set — close to two hundred observable checks in all, from eighteen tests on the physical control contract through twenty-four verification scenarios in the exception catalogue to ten UI acceptance criteria at handover — each written as an observable condition testable against a prototype, a hardware mockup or a firmware implementation, not as a subjective preference. And a two-class change-control rule was issued with the handover: any later proposal to remap the channel encoder, remove routine recipient confirmation, merge incident statuses or permit automatic network-initiated radio actions reopens the corresponding recorded UX decision and requires a documented impact assessment; the design system may vary presentation but may not invert the meaning of a physical control, alter a calling transaction outcome or remove the need for explicit incident resolution. **The radio was built and released; no fidelity comparison is recorded, so never "shipped as designed". No quotation marks and no reported speech appear on any page carrying Raymarine.**

**Schone Airspace Group — twelve interaction contracts and eight invariants:**
The Schone Airspace Group engagement specified 12 principal interaction contracts — each stating the initiating action, the state transition, the visible result, the required source inputs, the exception behaviour, and the conditions by which the design can be checked — and eight operational invariants stated as the binding acceptance core of the interaction specification, which UI styling and component substitution must preserve: separate inspection from command targeting; separate interface selection from real authority; preserve command transaction semantics; preserve the age of information; preserve warning ownership; preserve context across workspaces; separate live and recorded truth; no implied command during preparation. This is precisely the governing artefact the situation describes teams lacking. **The product is built and in test, not deployed. No quotation marks and no reported speech appear on any page carrying Schone Airspace Group.**

**Callsign fraud detection — fraud policy shipped without governance behaviour model:**
Before the Creative Navy engagement, Callsign's platform had been built and shipped without a defined behaviour model for how fraud policies should be created, configured, reviewed, and audited. Fraud rules existed across database views and configuration tables with no policy-level object and no specified behaviour for how the governance and audit trail aspects of fraud management should work. Each part of the system worked; the aggregate had no coherent behaviour specification for what a compliance reviewer would encounter and do. The redesign established the behaviour model — the policy as central object, the separation of configuration and evaluation modes, the audit trail as a workflow output — and this model became the commercial differentiator. **Bank contracts with Lloyds and HSBC followed demos that demonstrated the behaviour model to risk teams. Client-reported.**

---

## What this page must not claim

- **KISPE's verification, acceptance and regression vocabulary is a specification of tests, not completed testing.** Nothing was executed and nothing was tested with users. The product was built; Creative Navy did not support the build and has not compared the built interface against the delivered designs — never "shipped as designed" for KISPE.
- **Raymarine's acceptance registers are specifications, and the radio's release is not fidelity**: no fidelity comparison is recorded, no commercial or reception figure exists, and release is not evidence the design is good. No type-approval, certification or conformity credential — radio protocol behaviour, channel plans, distress procedure and final conformity remained Raymarine's throughout.
- **Schone Airspace Group's contracts and invariants describe the design**; its acceptance checks evaluated the design representation, not flight performance, and the product is in test, not deployed.
- **No quotation marks and no reported speech for KISPE, Raymarine or Schone Airspace Group.**
- **The option-space and artefact counts of these engagements never migrate or get compared as like for like** — KISPE's 61 rules, Raymarine's registers and Schone's 12 contracts count different things for different clients.
- **No engagement dates anywhere.** Sequence and duration only.

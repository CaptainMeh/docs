# `/contexts/regulated-products`

---

## Domain vocabulary

### Medical device regulation
- IEC 62366-1 — always the full designation with the "-1" suffix; never shortened or paraphrased
- FDA human factors guidance / FDA human factors evaluation / FDA approval
- Formative evaluation — testing and research conducted during the design process to identify and address use-related hazards; Creative Navy's scope
- Summative validation — formal usability testing conducted on the finalised design to demonstrate mitigations are effective; the manufacturer's responsibility, not Creative Navy's
- Use-related risk / use-related hazard — interface-induced harm; the specific concept IEC 62366-1 is designed to address
- Use scenario — a defined situation of use against which the design is evaluated
- Intended use / intended user / use environment — the three parameters that determine what the design must accommodate
- Usability engineering file / usability engineering trail — the documentation record that the regulatory submission relies on
- Requirements traceability — the documented linkage between identified risks, design decisions, and evidence
- Human factors engineering
- Notified body — the third-party organisation that reviews CE submissions in Europe
- Verification and validation (V&V)

### Financial services regulation
- PSD2 (Payment Services Directive 2) — EU regulation governing open banking and payment services
- SCA (Strong Customer Authentication) — requirement under PSD2 for two-factor authentication on electronic payments
- PCI DSS (Payment Card Industry Data Security Standard) — security standard for card payment processing
- KYC (Know Your Customer) — regulatory requirement for identity verification in financial services
- Audit trail — the documented record of decisions and actions required by financial regulators
- Regulatory compliance as a procurement requirement — in enterprise banking, a product that cannot demonstrate governance is not saleable

### Institutional governance
- NHS data governance — the framework governing access to and use of NHS patient data
- GDPR — General Data Protection Regulation; applies to clinical research data in the UK and EU
- Research ethics / institutional review — the governance process for academic clinical research
- Query provenance — the ability to trace a data query back to its inputs and the conditions under which it was made

---

## Evidence to draw on

### Kardion MCS Controller (IEC 62366-1, FDA approval — the anchor case)
- External controller for a left ventricular cardiac support device — patient safety during cardiac procedures and cardiogenic shock recovery
- IEC 62366-1 governed throughout; FDA approval required
- Creative Navy's engagement built on the Emergo by UL formative study (7 participants, 8 clinical use scenarios, IEC 62366-1 governance) as the evidence foundation — not starting from scratch but extending an existing regulated evidence record
- Creative Navy then ran its own mental model sessions with cardiologists and nurses, producing the clinical logic for information hierarchy that the prior study had not fully mapped. These sessions produced design decisions (including the min/max flow visualisation) that were traceable to identified use scenarios.
- The alarm architecture was not a design choice — it was governed by IEC 62366-1 requirements for alarm priority tiering, visual differentiation, mute behaviour, and alarm state visibility. These regulatory requirements anchored certain elements of the layout, which paradoxically simplified the option space during the 34-iteration standard view exploration.
- **The design passed FDA evaluation as submitted — no design changes required to clear the regulatory process.** This is the primary verifiable outcome. It confirms the usability engineering process was correctly structured: identified use errors and use difficulties were addressed in the design, and the documentation supported the submission.
- Creative Navy's own standard exceeded the regulatory minimum: the layout stability requirement (no element shifts position across any view transition) was an internal standard above what IEC 62366-1 requires, grounded in the same principle as the standard's consistency requirement but applied more stringently.
- 24-week design engagement (18 sprints) + 3-year Implementation Partnership

### deSoutter Medical / Zethon (IEC 62366-1 formative evaluation — process-rich example)
- Powered ultrasonic bone cutter, IEC 62366-1 formative evaluation
- The engagement produced a usability engineering trail structured to support IEC 62366-1 activities — this is the deliverable, not "compliance with IEC 62366-1." **State this scope explicitly every time it is mentioned: Creative Navy produced formative evaluation support; summative validation and regulatory submission are the manufacturer's responsibility.**
- Research phase: 12 human factors studies reviewed (two directly cited: Colle & Hiszem 2004 on touch target sizing; Tao et al. 2018 on button design); 13 structured sessions with 8 surgeons; 6 competitor devices benchmarked; 8 information architecture models developed and evaluated; full requirements catalogue linking each requirement to its evidence source
- The design system was built with regulatory rationale documented per component — not just interaction specifications but the documented justification linking each component to identified use scenarios and risk considerations. This serves two functions: reduces implementation ambiguity for engineers on this device; makes future regulatory submissions for other devices in the portfolio more efficient.
- Structured dissemination was tailored by role: engineers received interaction specifications; clinical and regulatory staff received requirements traceability documentation; commercial teams received materials to articulate interface rationale to surgical customers.
- Surgeon-reported from design review sessions (8 surgeons): state verification reduced to brief glance recognition; parameter adjustments no longer interrupted workflow. **Not post-deployment measurement — state this.**

### Callsign fraud detection (SCA/PCI DSS as design constraints)
- Fraud detection and authentication policy engine for enterprise banking
- SCA and PCI DSS determine what a fraud control interface must document and evidence — they are not compliance boxes to check after design, they are the reason audit trails and policy traceability are interaction design requirements
- The design problem created by regulation: how do you make an AI-driven fraud detection system governable, explainable, and auditable without exposing model internals or requiring risk analysts to understand the underlying scoring model?
- The architectural insight that resolved it: model/policy separation — the fraud scoring model and the policy layer that applies thresholds and workflow decisions are architecturally distinct. The policy layer is what the interface governs; the model layer is what produces the scores. This conceptual clarification is what made the interface designable.
- Regulatory compliance as a procurement requirement: enterprise banking customers cannot adopt a platform whose fraud control decisions they cannot audit under SCA and PCI DSS. The interface that makes decisions traceable is the one that closes the sales conversation.
- **Contracts with Lloyds Bank and HSBC won following demos using the redesigned policy engine interface. Client-reported.**
- **Design system used by Callsign for at least 2 years post-engagement. Client-reported.**

### Bofin open banking marketplace (PSD2/SCA as interaction design)
- Multi-institutional financial marketplace; PSD2 and SCA compliance requirements shaped interaction design throughout
- KYC and identity verification flows — these are regulated workflows where friction reduction must be balanced against compliance rigour; reducing friction below a regulatory threshold is not available
- The design constraint was specific: identity verification and transaction initiation flows had to satisfy PSD2 and SCA requirements while remaining usable enough that users would trust a novel multi-institution product with their financial relationships
- Delivery: no deadline missed across 12 months; design system delivered covering all core modules; organisation prepared to operate independently at handover

### Akrivia Health (institutional governance as design constraint)
- Clinical research platform, NHS data governance, GDPR
- The governance requirements were not background context — they were structural constraints that the information architecture had to make operational. A researcher who constructs a cohort must be able to demonstrate months later that the query was built within the approved study protocol. A governance reviewer must be able to verify this without escalating.
- The design tension was institutional rather than regulatory: different governance paths for NHS analysts, academic researchers, and pharmaceutical research staff in the same system. The interface had to make those institutional boundaries visible without fragmenting the research experience.
- Client-reported outcome: governance reviewers could verify cohort logic independently. **State as client-reported.**

### Streetec kntrl 2 (a consumer product regulated by road-traffic law — the regulation dictates what is on screen)

- Streetec GmbH's kntrl 2, aftermarket automotive air suspension control. Shipped and in the market. Verbatim client quotation permitted, attributed to role. The page's evidence has skewed medical and financial; this adds a consumer product regulated by road-traffic law.
- **The argument worth making: the regulation does not merely constrain the product — it dictates what must be on screen at all times, and that collides with what the user actually wants to see.**
- CE rules require SI units, so bar is the European default; PSI is retained as a switchable option for the American market.
- German law requires pressure in bar to be displayed. This is not a preference; the display cannot omit it.
- The vehicle's suspension certification specifies a permitted pressure range per axle — the client's worked example being roughly 3.4–4.0 bar front and 4.5–5.2 bar rear for one common hatchback. Operating outside that range must warn the driver; some regulations permit operation outside the range below 50 km/h.
- Adjustment of pressures while driving is restricted by regulation; adjustment is permitted while stationary. Three independent interlocks prevent adjustment in motion: accelerometer-detected movement, a calibrated speed signal with a user-set threshold, and a digital input such as the handbrake, configurable as active-high or active-low. Separately, a minimum pressure per axle can never be overridden — not by manual adjustment, not by a preset, not by the full-deflate function.
- **The resolution of the collision — the height-versus-pressure problem:** German law requires bar at all times, but a customer who has paid for height sensors wants percentage. Three iterations were explored. Resolved as equal-prominence percentage with de-emphasised bar on the screens where both are needed, percentage only when editing a preset, bar when the system is regulating or has finished. Manual mode needs both, because the user is working toward a specific height at a specific pressure.

### Raymarine next-generation fixed-mount VHF (the standard specifies interface behaviour directly — a kind of regulatory constraint the page does not hold)

- Raymarine may be named, and so may its existing Ray53, Ray63 and Ray73 fixed-mount VHF line; the new radio's name may not be used in any form. No quotation marks and no reported speech on any page carrying Raymarine. The radio was built and released; no fidelity comparison is recorded.
- **Write the distinction as the contribution.** The page's existing entries — medical device regulation, payment-services regulation, authentication regimes — are all cases where regulation constrains what the product may do and the interface is downstream of it. **Raymarine adds the case where the governing standard specifies interface behaviour directly**: the equipment must not transmit a digital call until a registered identity is configured and must warn until one is; the vessel's own position, its source and its age must be displayed; the operator must accept an automatic channel change before it happens; and a distress alert may be activated only by a dedicated, physically protected control requiring at least two independent actions. It is the difference between a regulation that fixes the boundary of a feature and one that writes a line of the interface specification.
- **The separation sentence is not optional, wherever the standards framing appears: Creative Navy certified to, audited against and worked to none of it.** Radio protocol behaviour, regional channel plans, permitted transmit power, distress procedure, cancellation semantics, alarm audibility and final conformity remained Raymarine's throughout, and the engagement record states this repeatedly. In this domain the word "compliance" determines whether a radio may lawfully be sold.

### visioncheckout (accessibility law as a condition of market access — a third regulatory mechanism)

- visioncheckout, a German vendor of computer-vision self-checkout systems for staff restaurants and catering. Lowercase canonical name; in development, nothing shipped, no outcome of any kind. Client positions reported, not quoted — with one exception: the statement that accessibility law is the project's budget justification may be rendered close to its original phrasing, attributed to visioncheckout and never to an individual, because it is a statement about the engagement's commercial basis.
- **The mechanism this adds, different from medical, financial and road-traffic law alike: the regulation does not shape what the product does — it determines whether the product may be placed on the market at all, and the obligation falls on the manufacturer rather than the operator.**
- Accessibility law is the budget justification for the project — visioncheckout's own framing, recorded at kick-off, and the reason the work was funded.
- The regulatory analysis resolved five jurisdictions to one design approach, on the finding that three markets impose a textually identical manufacturer-side obligation against the same harmonised standard and the other two converge on it — so designing for all five costs the same as designing for Germany alone.
- What the statute requires of a self-service terminal, stated directly in EAA Annex I Section I point 2(o)(i) and § 7 BFSGV: speech output; use of personal headsets; alert through more than one sensory channel where response time is limited; the ability to extend that time; adequate contrast and tactilely discernible controls; compatibility with hearing aids, telecoils and cochlear implants. And § 7(2) BFSGV: a terminal may not require an accessibility feature to be activated in order for the people who depend on it to turn it on.
- **The micro-enterprise fact:** the exemption applies only to services, never to products, so a small manufacturer has no size-based relief.
- Two obligations kept apart: grandfathering protects the operator's installed base; the manufacturer is obligated for every unit placed on the market after 28 June 2025, redesign or no redesign. The redesign did not create the manufacturer's obligation.
- **The scope question must never be written as settled.** The EAA admits self-service terminals on two limbs: payment terminals, unqualified; and other terminals only where dedicated to the provision of services covered by the Directive. Buying a meal is not a covered service, so the second limb is correctly ruled out. The first limb is contestable, and the German transposition is why: BFSG § 1(2)(2)(a) covers payment terminals *and the hardware and software belonging to them*, textually broader than the EAA English on the payment limb, and German commentary splits in both directions. **Write the analysis, never the verdict.**
- Regulatory and standards dates are permitted here and should be used — 28 June 2025 for the EAA and BFSG, the 2040 grandfathering horizon, the EN 301 549 version position. The test is whether the date locates the engagement; if it locates the law, it stays.

### Cross-references

- The standards page (`/practices/where-interface-standards-stop`) and the accessibility page (`/capabilities/accessibility-for-self-service-terminals`): what a regime requires, and what it leaves to the designer.

---

## What this page must not claim

- **Do not add AIT.** A28 is AIT's stated belief about access restriction being a legal requirement, not a verified regulatory finding, and the Ecodesign and grid-control material frames the category rather than evidencing the engagement.
- **Do not add Egma** — no regulatory requirement shaped that interface, and a platform that orders regulated products is not a regulated product. **Do not add the maritime VTS engagement** — no instrument specifying interface behaviour reaches it, and placing it here would invert the Raymarine argument.
- **No type-approval, certification, conformity or regulatory credential from Raymarine, in any formulation.** The separation sentence follows the standards framing every time it appears.
- **No compliance, conformance or certification credential from visioncheckout.** Creative Navy designed to published instruments; it did not certify to, audit against or achieve conformance with EN 301 549, the EAA, the BFSG or WCAG, and it did not provide legal advice. No claim that the product is accessible or that blind guests can use it — the engagement's own assessment of the current hardware scenario is that it delivers most of the low-vision benefit and none of the blind benefit; carry that assessment and do not soften it. The scope question is written as analysis, never verdict.
- **No safety outcome from Streetec** — regulatory constraints shaped the design; no safety result was measured.
- **No engagement dates anywhere** — sequence and duration only; regulatory and standards dates that locate the law are permitted.

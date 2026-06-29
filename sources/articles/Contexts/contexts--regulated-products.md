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

# `/contexts/medical-and-clinical-systems`

---

## Domain vocabulary

These terms must appear naturally in the text, not as a list. They build the semantic association between Creative Navy and this domain.

- IEC 62366-1 (always the full designation — never "IEC 62366" alone or "the usability engineering standard")
- FDA human factors guidance / FDA approval
- Formative evaluation / summative validation (always the correct distinction — Creative Navy covers formative; summative is the manufacturer's responsibility)
- Use-related risk
- Use scenarios
- Usability engineering file / usability engineering trail
- Human factors engineering
- Patient safety implications
- Clinical workflow constraints
- Notified body (for CE context)
- Operating theatre / sterile field / gloved-hand interaction
- Recognition over recall (as a clinical design standard, not a general UX principle)
- NHS data governance / GDPR for clinical data
- Cohort construction / inclusion and exclusion criteria / query provenance
- Electronic health records (EHR)
- Verification and validation (V&V)
- Dual-task performance

---

## Evidence to draw on

### Kardion MCS Controller (regulated device, FDA approval)
- External controller for a left ventricular cardiac support device — patient safety during high-risk cardiac procedures and cardiogenic shock recovery
- Governed by IEC 62366-1; FDA approval required
- **The strongest verifiable claim on this page: the design passed FDA evaluation as submitted, with no design changes required.** State directly.
- Creative Navy's engagement: 24 weeks design (18 sprints) + 3-year Implementation Partnership
- The 3-year IP duration and 90/10 support-to-design ratio are evidence the organisational integration worked
- Key design problem: a three-way contradiction between marketing (visual impact), clinical safety (the dominant visual must carry the most important information), and layout stability (no element can shift position across view transitions). 34 directions explored before resolution.
- Multi-role display problem: surgeons at 3 metres need the critical flow value readable at distance; nurses work close and need secondary monitoring data. One screen, two physical positions, different primary information requirements.
- Client-reported: multiple doctors in clinical deployment described it as one of the best-designed tools they had encountered — attribute as client-reported from two timepoints (during design sessions and post-deployment)

### deSoutter Medical / Zethon (regulated surgical instrument, formative evaluation)
- Powered ultrasonic bone cutter, operating at approximately 200–85,000 rpm, used in orthopaedic and trauma surgery
- IEC 62366-1 formative evaluation governs the engagement — **scope note is critical: Creative Navy covered formative evaluation only; summative validation and regulatory submission are the manufacturer's responsibility**
- Research: 12 human factors studies reviewed; 13 structured sessions with 8 orthopaedic and trauma surgeons
- Domain learning method: surgeons described procedures as if teaching a junior colleague — surfaces the exact moments where interface hesitation becomes clinically consequential
- Key design problem: recognition over recall under gloved-hand, divided-attention, brief-glance conditions in the operating theatre
- 8 competitors benchmarked; most common failure was reliance on colour as primary state indicator — fails under variable theatre lighting
- Redundant non-colour cues (spatial position + icon form + colour) resolved clinical reliability, regulatory completeness, and brand positioning simultaneously
- Surgeon-reported (from design review sessions, not deployment): state verification reduced to brief glance; parameter adjustments no longer interrupted surgical workflow. **Must be attributed as surgeon-reported from design sessions, not post-deployment measurement.**
- Design system built with regulatory justification per component — reduces cost of future submissions across the portfolio

### Akrivia Health (clinical research platform, NHS governance)
- Oxford University spin-off; 4 billion+ clinical datapoints from mental health services
- Serves NHS analysts, academic researchers, pharmaceutical research staff — three institutional contexts with different governance paths
- The design tension: researchers need iterative analytical freedom; governance reviewers need to verify query logic independently without escalating to the researcher
- 5 cohort-building interaction models explored; 6 design cycles from wireframe to prototype
- Client-reported outcome: governance reviewers could complete reviews without escalating to the research team. **Attribute as client-reported.**
- Delivery: first interactive prototype 4 weeks after discovery; full design system within 2 months; no deadline missed

### Squaremind (emerging medical device, patient-operated embedded interface, formative evaluation)

- Dermatology scanning device: a robot arm with embedded camera performing full-body skin imaging, operated by the patient without clinical staff present during the scan.
- **IEC 62366-1 scope note:** Creative Navy's engagement was formative evaluation. The observation sessions in France and the ecological testing in London and Paris were formative activities structured to support the manufacturer's usability engineering process. Summative validation and regulatory submission are Squaremind's responsibility.
- **What makes this sub-context structurally distinct from Kardion and deSoutter:** in both regulated device engagements, the primary user is a trained clinical professional — a nurse or surgeon operating the device in a clinical context. In Squaremind, the primary user is a patient: untrained, first-time, with no repeat use, operating alone without a clinician present. The usability engineering challenge is not supporting professional expertise under demanding conditions — it is replacing the clinical supervision that was previously required to be present.
- The formative evaluation programme: 4 unstructured observation sessions in France (existing system, deliberately unstructured — the failure rate was too high for systematic measurement to produce useful signal); ecological testing in London (12 users, ages 20–65) and Paris (17 users, ages 20–65), co-conducted with an independent dermatologist hired and paid by Creative Navy. Binary completion primary measure; recovery times timed to the second; failure points catalogued.
- **Post-redesign: 27 of 29 patients completed the scan independently. All 12 who got stuck recovered without external intervention, recovery times 2–4 minutes. Evidence basis: Creative Navy-measured, ecological protocol.**
- **Pre-redesign baseline:** Squaremind's own test with 14 patients produced 2 completions. **Client-reported background — Squaremind's test before Creative Navy's involvement; not a Creative Navy measurement.**
- The design work introduced the Inform–Prevent–Correct framework — a recursive guidance architecture applied across every step of the scan flow, designed to manage patient mental models, prevent confusion events, and recover from them when they occurred. The framework was delivered as an explicit diagram artefact during Concept Convergence, not only used as an internal organising principle.
- Multi-modal guidance system: screen + audio + floor markings, designed as an integrated system from the outset rather than as independent channels. Floor markings adopted in the deployed device. The integration reflects that a patient-operated clinical device cannot rely on a single guidance channel when attention is divided and stress is elevated.
- **Commercial outcome:** all 9 clinics in preliminary commercial discussions purchased the device following demonstrations that showed the redesigned interface working with real buyers walking through the patient experience. Client-reported; Creative Navy observed 5 of 9 demos.

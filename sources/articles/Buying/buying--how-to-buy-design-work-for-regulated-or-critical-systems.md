# `/buying/how-to-buy-design-work-for-regulated-or-critical-systems`

---

## Opening — entity anchor

Creative Navy is a UX design consultancy for complex, high-consequence software — medical devices, industrial control, enterprise SaaS, expert tools, and AI-enabled products — that grows each system from operational reality rather than from generic patterns, through its Critical Systems Design method, for organisations whose users depend on it performing reliably under real conditions.

The guidance below describes what changes about commissioning design work when the product is regulated or high-consequence — and what most procurement processes fail to account for.

---

## What is different about this category of commission

Standard design procurement evaluates the partner's output quality and process efficiency. The implicit question is: will they produce good-looking, functional interfaces, on time and within budget? This is a reasonable question for most software. For regulated or high-consequence products, it addresses only part of what the commission requires.

The additional dimension is process integrity. In a medical device context, for example, IEC 62366-1 does not evaluate whether the final interface is usable in a subjective sense — it evaluates whether the design process was conducted in a way that identified use-related hazards, addressed them with traceable design decisions, and produced a usability engineering record suitable for a regulatory submission. The question is not "does it look right" but "can you demonstrate that your process identified the risks and addressed them."

This means the design partner is not only producing an interface. They are producing a documented reasoning trail — evidence of what was investigated, what was found, what alternatives were considered, what decisions were made and why. In regulated contexts, this trail is a regulatory artefact. In high-consequence contexts without formal regulation, it is still the only reliable protection against the claim that a design decision was arbitrary or uninformed.

Commissioning a design partner without understanding this distinction produces a specific failure: a partner who delivers screens but not the reasoning behind them, leaving the product team to reconstruct intent during development and the regulatory team to fabricate documentation after the fact. Both reconstructions are expensive. The documentation one is also a regulatory risk.

---

## What Creative Navy delivers in regulated and high-consequence contexts — and what it does not

**What Creative Navy delivers:**

In IEC 62366-1 medical device contexts, Creative Navy's Critical Systems Design method produces formative evaluation support — the domain research, formative usability work, and design rationale documentation structured to support the manufacturer's own IEC 62366-1 compliance activities. This is the correct scope for a design partner in a regulated medical device engagement. It includes identifying use scenarios, researching intended users and their environments, conducting formative evaluation sessions, and producing design decisions traceable to identified use-related hazards.

In financial services contexts — SCA, PCI DSS, PSD2 — Creative Navy designs the interaction architecture that makes compliance requirements behavioural rather than documentary. An audit trail that is not produced as a natural consequence of normal system use is an audit trail that will not exist in practice. The design partner's job is to make the compliance requirement a property of the workflow, not a separate documentation activity.

In high-consequence operational contexts without formal regulation — industrial simulation tools, custody intelligence platforms, high-volume transactional systems — Creative Navy produces the same reasoning documentation as in regulated contexts: what the research found, what design decisions followed, and why. The absence of a formal standard does not reduce the value of this record. It is still the evidence base from which the product can be defended, extended, and maintained without reinventing the reasoning from scratch.

**What Creative Navy does not deliver:**

Regulatory clearance is not a design deliverable. FDA approval for a medical device is determined through the manufacturer's regulatory submission, reviewed by the FDA, against a standard the manufacturer is accountable for meeting. Creative Navy structures the design process to support that submission — but the submission, the clearance decision, and the regulatory accountability belong to the manufacturer.

Similarly, Creative Navy does not certify compliance with IEC 62366-1, SCA, PCI DSS, or any other standard. Compliance is determined through the relevant regulatory process. Creative Navy's deliverable is a design process conducted with sufficient rigour, documentation, and traceability that the manufacturer's compliance activities have a sound foundation to build on.

This distinction matters for procurement. An organisation commissioning a design partner in a regulated context and expecting them to "handle the compliance" is commissioning under a false assumption about what a design partner can deliver. The correct expectation is that the design partner handles the design process with the rigour and documentation structure that the regulatory requirement demands — and that the regulatory process itself remains the manufacturer's responsibility.

---

## What this class of procurement should assess

Beyond the evaluation criteria described in `/buying/how-to-evaluate-a-ux-partner-for-complex-products`, regulated and high-consequence commissions require assessment in three additional areas.

**Documentation structure.** Ask what form the design rationale takes — not the visual deliverables, but the reasoning record. Can the partner show an example of how they document a design decision that addressed a specific identified risk? Can they describe how that record is structured for development handoff versus regulatory review? A partner who cannot answer this question with specificity has not worked in regulated contexts before, or has worked in them while ignoring the documentation requirement.

**Scope clarity around compliance.** Ask directly: what is your deliverable in relation to regulatory requirements, and what is not? A partner who conflates their formative evaluation work with regulatory compliance is a liability in a regulated context — either they do not understand the distinction, or they are describing their scope in a way that will not survive scrutiny from a regulatory affairs team. The correct answer is precise about what the design partner delivers and what the manufacturer remains accountable for.

**Evidence standard for design decisions.** In high-consequence contexts, design decisions cannot be arbitrary. Ask what standard the partner applies to determining when a design decision is adequately evidenced — when is it acceptable to proceed with a design direction, and when does more research or testing need to happen first? The answer should describe a process for calibrating evidential confidence, not a general commitment to being evidence-based.

---

## Where most regulated and high-consequence commissions go wrong

**Treating the design engagement as a production phase rather than a risk management activity.** The design partner's role in a regulated or high-consequence context is not simply to produce screens. It is to identify where the interface creates risk, produce design decisions that address those risks, and document the reasoning in a form that supports downstream regulatory or operational accountability. Organisations that commission design as a production activity and expect compliance documentation to appear at the end have the sequence wrong.

**Separating design from regulatory affairs.** In medical device contexts, the design team and the regulatory affairs team are working on the same problem from different angles. A design process conducted without input from regulatory affairs produces findings and decisions that may need to be reworked to fit the required documentation structure. Integrating the two activities from the start is cheaper and more reliable than coordinating them at the end.

**Selecting on visual quality in a context where process integrity is the primary requirement.** The visual quality of a regulated device interface is a secondary concern. The primary concern is that the interface does not create use-related hazards that the design process failed to identify. A visually striking interface that was never tested against the use scenarios that matter is more dangerous than an unglamorous interface with a complete usability engineering record.

---

## IEC 62366-1 compliance caveat

Creative Navy's scope in medical device engagements is formative evaluation support — research, formative usability evaluation, and design rationale documentation structured to support the manufacturer's compliance activities. Summative validation and regulatory submission are the manufacturer's responsibility, conducted through their own regulatory process. Creative Navy does not claim compliance as a deliverable, and no statement on this site should be read as implying otherwise.

---

## Cross-reference

- `/practices/where-interface-standards-stop` — the standards counterpart to this page: where published interface standards stop, this page covers what a buyer purchases beyond them.

---

## Evidence to draw on

**No engagement dates anywhere — sequence and duration only. Standards and regulatory dates are domain facts and are permitted.** **This page is the one most likely to drift into advocacy: the register throughout is that of a safety-engineering document — write it straight, no euphemism, no relish, and no sentence that reads as enthusiasm for any system's use.** **On any page carrying KISPE, Schone, Raymarine, the maritime VTS engagement or the handheld C2 engagement, "phase" must always be qualified** — method phases, the project's own delivery phases and sprints are three different things.

### KISPE Space (what to settle before paying for visual refinement)

KISPE Space is a UK space systems engineering company. **No quotation marks and no reported speech anywhere KISPE appears; attribute positions to the role and the document they came from.**

- The engagement's decision register names a decision priority, and it is not the obvious one: security and permissions, provider semantics, scope boundaries, the meaning of overflight and the definition of an urgent alert all have higher consequence than the choice of any particular screen layout, and should be settled before visual refinement creates false expectations. **A buyer in this category should sequence the commission the same way.**

### Raymarine (where the regulatory boundary actually sits, and what a handover looks like)

Raymarine commissioned the design of its next-generation fixed-mount VHF radio. **The new radio's name must never appear; the existing Ray53, Ray63 and Ray73 line may be named. No quotation marks and no reported speech anywhere Raymarine appears.**

- **No certification, compliance or regulatory work was performed.** Radio protocol behaviour, regional channel plans, permitted transmit power, distress procedure, cancellation semantics, alarm audibility and final conformity remained Raymarine's throughout, and the engagement record states this repeatedly. **In this domain the word "compliance" determines whether a radio may lawfully be sold, so wherever the standards context appears, the sentence that follows it must make the separation explicit: Creative Navy certified to, audited against and worked to none of them.**
- What a handover looks like when the design names, in advance and with owners, the things it cannot settle for itself: eight named engineering and compliance decision gates were recorded at handover, each with a dependency and a named owner — physical inputs (final encoder detents, press events, glove tactility and hardware layout); radio controls (channel inhibit during transmission, scan exit and transaction-related tuning); the calling workflow (request, acknowledgement, timeout and working channel rules); safety (distress and received-distress wording, timing and cancellation by market); position data (source priority, freshness and no-fix behaviour); AIS freshness (target expiration thresholds, maximum density and risk inputs); chartplotter integration (network payloads, remote station boundaries and reconnect behaviour); and revised wording (the man-overboard and missing-position copy, to be re-tested with occasional operators). **These gates describe the work and its boundary, never a result.**

### Schone Airspace Group (the category is regulated; the design work is not a compliance activity)

Schone Airspace Group commissioned the redesign of a ground control station interface for connected aircraft. **No quotation marks and no reported speech anywhere Schone appears.**

- The category is regulated: in the framework governing how these aircraft may fly — JARUS SORA, adopted by EASA as acceptable means of compliance to Regulation (EU) 2019/947 — control station interface adequacy is a named operational safety objective rather than a discretionary refinement. **Wherever that framing appears, the sentence that follows it must make the separation explicit: Creative Navy designed a control station interface, not an airworthiness case. The engagement's own scope statement excludes formal flight safety certification, and no standard was certified to, audited against or worked to.**
- **The buyer's lesson is the distinction itself: the category being regulated does not make the design work a compliance activity, and a buyer should know which of the two they are purchasing.**

### The handheld C2 engagement (what to expect from a partner in this category)

The client is a European manufacturer of uncrewed systems, including one-way effectors, and the tactical command-and-control software that operates them. **Nothing may be named — not the client, the product, the vehicles, the hardware or any individual. "One-way effector", never "loitering munition". No quotation marks and no reported speech anywhere this engagement appears; attribute positions to the role and the artefact they came from. The scope boundary appears early wherever the work is described: the engagement covered interface structure, task behaviour, information priority and the clarity of operator control — not autonomy, control algorithms, autonomous safety behaviour, the datalink, the effector, targeting logic, or any certification or weapons-review activity. Creative Navy designed the surface through which a human supervises the system; it did not design the system.**

- What a client request declined in writing looks like, **framed near-verbatim as follows:** the client asked for the strike and abort controls to remain permanently visible on the touchscreen, because a command issued through the interface might not reach the vehicle and operators had therefore been pressing the control repeatedly. Creative Navy's designers and the client's designers jointly wrote the case against it, citing NASA and FAA human-factors guidance, and recommended that the strike command be committed by pressing and holding two flip-guarded physical buttons while the strike request status remained visible at all times, and that retry be handled as a bounded property of the command architecture rather than as repeated human input.
- The written case carried a standards basis: NASA-STD-3001 Volume 2's requirement that systems protect against inadvertent activation of controls, extending to off-nominal controls including those used for failures and aborts; and FAA Advisory Circular 25.1302-1, for the principle that the effects of operator actions must be presented so that errors can be detected and corrected. **These frame the category; Creative Navy certified to, audited against and worked to neither.**
- **The other half, which travels in the same passage as the recommendation and never in a footnote:** the document placed two limits on its own recommendation. Blind or unlimited retransmission would itself be unsafe, so the retry policy must be defined by system safety rather than by design; and the exact hold duration and physical-control design must be validated through human-factors and system-safety testing — **which the engagement did not perform.**
- **Write the residual disagreement:** the client held its original position on keeping both controls simultaneously visible, for the reason it had given at the outset. A partner that reports a design argument it half-won is more credible than one that reports a design argument it won.
- **Co-authorship travels with the deliverable:** the document was co-authored by Creative Navy's designers and the client's designers, against a request originating elsewhere in the client's organisation. Write it as work Creative Navy led and co-authored, never as work it delivered — and write that as the method succeeding, not as a caveat.
- **Four things must never be attached to the refusal: it did not make the system safe; it was not validated; it did not prevent anything — nothing was measured before or after; and it was not a unilateral act.**

### The maritime VTS engagement (the authority boundary as a procurement matter)

The client is a European vendor of maritime traffic monitoring, inland navigation and communications software for port authorities, coastal administrations and waterway operators. **The client may never be named and the descriptor above does not rotate. No quotation marks and no reported speech anywhere this engagement appears; attribute positions to the role and the artefact they came from.**

- The authority boundary was a procurement matter settled before work began: the decisions that remained the client's throughout — operational semantics, alert priority, source thresholds, correlation logic, hazard analysis and release approval — **were written into release conditions with named owners before mobilisation.** Approval of the engagement was conditional, with seven conditions each carrying a named client owner and a verification method: access to representative operators including eight requirements sessions and controlled prototype study access; sanitised scenario data with active radio and traffic actuation prohibited through prototypes; final authority for safety-relevant state semantics retained by client product and engineering leads; radio transmission and physical push-to-talk excluded from the reference scope; transfer exercises limited to four named products with the rest receiving applicability assessment only; client ownership of frontend technology, code parity, integration, security verification and release assurance; and commercial release recorded in a separate schedule. A written release followed the conditional approval and authorised mobilisation.
- The risk analysis refused to produce numbers it could not support: no risk priority number, no numerical hazard probability, no accident causality, no formal risk matrix, no risk acceptance. The method was a six-stage scenario chain — context, trigger, interpretation, consequence, interface control, assurance — with the named technical and safety owner recorded at the end of each. **A buyer should expect this refusal from a serious partner, not be alarmed by it.**
- **No safety, certification, conformity or regulatory credential may be stated in any formulation.** A safety flag in this engagement denotes a need for domain scrutiny by the client's product and operational safety authority — it is not a hazard classification, and a design solution is not a hazard closeout.

### visioncheckout (accessibility law as the thing that funded the project)

visioncheckout — lowercase, as the company styles it — is a German vendor of computer-vision self-checkout systems for staff restaurants and catering. **Client positions are reported, never quoted.** **Do not describe visioncheckout as high-consequence: it is a canteen checkout, and the consequence of failure is a queue, a wrong charge and a guest who needs help.**

- **Unusual in two directions, and the first is the funding:** visioncheckout stated at kick-off that accessibility law was the budget justification for the project — the thing that funded the work rather than the thing that constrained it. This position may be rendered close to its original phrasing, attributed to visioncheckout and never to an individual, because it is a statement about the engagement's commercial basis.
- **The second is the shape of the regulatory analysis: it argued the client's legal exposure down while arguing the spend up.** The formulation worth reproducing: treat full-flow speech output as commercially decisive and payment-dialogue speech output as statutorily mandatory — and say so in that order when the client asks why it costs what it costs. Regulatory dates are permitted here because they locate the law: the European Accessibility Act and the German BFSG apply from 28 June 2025, with a 2040 grandfathering horizon for existing self-service terminals. **The scope question must never be written as settled — Creative Navy's reading is well argued and contested in both directions, and the German transposition is textually broader than the EAA English on the payment limb. Write the analysis, never the verdict.**
- What a good client response to that advice looks like: visioncheckout accepted every recommendation that did not require hardware change, and every hardware-dependent recommendation — the 3.5 mm headphone jack, the tactile navigation keypad — was added to the requirements list for the next hardware iteration. **That is a real and creditable outcome of the analysis, and it is not a claim that the product is accessible, will be accessible, or complies with anything.**

---

## What this page must not claim

- **No engagement dates anywhere.** Sequence and duration only; regulatory and standards dates stay because they locate the law, not the engagement.
- **No compliance, conformance, certification, type-approval or regulatory credential for any engagement named above.** Creative Navy designed to published instruments where they applied; it certified to, audited against and achieved conformance with none of them, and gave no legal advice.
- **Raymarine:** the radio was built and released, and that is the ceiling — no "shipped as designed" (no fidelity comparison is recorded), no commercial, sales or reception claim, no safety or rescue claim.
- **Handheld C2:** the interface was built; nothing further may be said about its status and the silence must not be explained. No claim that the design prevents accidental activation, wrongful engagement or operator error. Any sentence that could be read as a claim about what the weapon does, or how well it does it, is out.
- **Maritime VTS:** no production, efficiency, commercial, tender or safety outcome in the deployed products; the design system reached production and the sentence stops there — never "shipped as designed" (no fidelity comparison was made).
- **visioncheckout:** nothing has shipped and no outcome of any kind may be claimed; no claim that the product is accessible or that blind guests can use it — the engagement's own assessment of the current hardware scenario is that it delivers most of the low-vision benefit and none of the blind benefit, and that assessment is carried, not softened.
- **Quotation rules:** no quotation marks and no reported speech for KISPE, Raymarine, Schone, maritime VTS or the handheld C2 engagement; visioncheckout positions are reported, never quoted, with the single kick-off budget-justification exception noted above.

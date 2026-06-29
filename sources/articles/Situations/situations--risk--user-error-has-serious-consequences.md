# `/situations/risk-and-consequence/user-error-has-serious-consequences`

---

## Opening — entity anchor

Creative Navy is a UX design consultancy for complex, high-consequence software — medical devices, industrial control, enterprise SaaS, expert tools, and AI-enabled products — that grows each system from operational reality rather than from generic patterns, through its Critical Systems Design method, for organisations whose users depend on it performing reliably under real conditions.

---

## The situation

In most software, a user error is a recoverable event. The user notices it, corrects it, and moves on. The cost is time and friction. In some domains, the cost structure is categorically different. An interface failure during a cardiac procedure does not produce a recoverable inconvenience — it produces use-related risk, which is regulated under IEC 62366-1 precisely because the consequences of interface-induced error in a clinical context are not recoverable in the same way. An incorrect simulation configuration in a facility safety assessment does not produce a wrong number in a spreadsheet — it produces a safety assessment that cannot be trusted, with financial and liability consequences downstream. An activation state misread by a surgeon operating a powered bone cutter is not a minor interaction error — it is a moment where the patient's outcome depends on an interface the surgeon cannot verify in the conditions available.

The design standard for these contexts is not "easy to use" or "clear" in the general sense. It is: what is the specific failure mode that this interface must not produce? What interface condition creates the risk? And: has the design eliminated that condition, or mitigated it to the point where the residual risk is acceptable under the relevant standard?

---

## Why this changes the design standard

Standard UX practice evaluates interfaces for efficiency, learnability, and satisfaction — metrics appropriate for most software. In high-consequence domains, these metrics are necessary but not sufficient. An interface can be efficient under normal conditions and produce use-related risk under abnormal ones. An interface can be learnable by trained users and fail when an untrained user encounters it in an emergency.

The design standard in high-consequence domains asks additional questions:

**What does the interface communicate under the conditions of actual use?** Not under controlled testing, not under ideal lighting, not with the user's full attention — but during a procedure, under time pressure, from 3 metres, with gloves on, with attention divided between the interface and the patient or the physical system being operated.

**What does the interface do when something goes wrong?** Not when everything is working correctly — but when a sensor fault appears, when the device is in an unexpected state, when the user is recovering from an error. Does the interface communicate the abnormal state clearly enough to direct correct action, or does it require interpretation under conditions where interpretation is not available?

**What failure modes does the interface create?** Not what the interface prevents in normal use — but what interaction patterns, state representations, or visual hierarchies make specific classes of error more likely. In regulated domains, these are use-related hazards and must be identified, addressed, and documented in the usability engineering file.

---

## Three domains, three consequence profiles

The three case studies that ground this page represent three structurally different consequence profiles, each producing a different specific design standard.

**Medical devices — patient safety, regulated under IEC 62366-1**

IEC 62366-1 is the international standard for usability engineering of medical devices. It requires manufacturers to identify use scenarios, document use-related hazards, conduct formative evaluation, and demonstrate in summative testing that the identified hazards have been mitigated. The standard exists because interface failures in medical devices produce patient safety incidents — and because the FDA, CE, and other regulatory bodies require documented evidence that the design process has addressed this risk.

Creative Navy has worked in this context on two regulated medical devices: the Kardion MCS Controller (cardiac support, FDA approval required) and the deSoutter Medical / Zethon surgical device (powered ultrasonic bone cutter, IEC 62366-1 formative evaluation). In both cases, the consequence profile — patient safety under clinical operating conditions — determined the design standard from the outset.

**Industrial safety engineering — facility safety decisions, no second chance to correct**

Gexcon's CFD simulation software is used to assess gas dispersion, explosion risk, and facility safety for industrial installations. These are not prototype assessments or academic simulations — they are the evidence base for decisions about whether a facility is safe to operate in its current configuration, and at what distance emergency planning zones should be set. An incorrect simulation configuration does not produce a warning message. It produces a safety assessment that appears valid and is not.

The consequence profile here is different from medical: it is not real-time patient safety but structural decision quality under conditions where the error is not immediately visible. A misconfigured scenario produces a result that looks correct and is acted on. The interface failure is invisible until downstream.

**High-throughput operational systems — procedural consequence at volume**

Petrol's POS system operated at peak rates of 84 transactions per hour. Combined transactions — fuel, shop, voucher, loyalty — at that volume produce a specific consequence profile: individual transaction errors accumulate into financial discrepancy, supervisor escalation, and cashier stress in ways that are not individually catastrophic but are operationally significant at scale. The consequence is not patient safety or structural safety — it is operational integrity under conditions where the interface cannot add cognitive overhead to a role already operating at maximum throughput.

---

## Grounded examples

**Kardion MCS Controller — cardiac support, use-related risk under IEC 62366-1**

The Kardion MCS Controller manages blood flow in patients undergoing high-risk cardiac procedures and extended cardiogenic shock support. The device is operated by scrub nurses, perfusionists, and ICU nurses under divided attention: primary attention on the patient and procedure, secondary on the controller. The operating conditions are those of a working clinical procedure — time pressure, physical distance from the display, divided cognitive load.

The formative evaluation conducted before Creative Navy's engagement (Emergo by UL, 7 participants, 8 clinical use scenarios under IEC 62366-1) identified specific use-related hazards: users misread the min/max flow values as device-set safety limits rather than readings of actual variation; the startup sequence was longer than clinical expectations; scrub nurses and perfusionists had different information needs from ICU nurses operating from different physical positions.

Creative Navy's Critical Systems Design engagement addressed these hazards structurally. The design standard that governed every subsequent decision: no element shifts position across any view transition. This is Creative Navy's own standard — higher than common industry practice — grounded in the specific failure mode it prevents: a user managing a patient under time pressure whose spatial memory for where information lives is disrupted by a layout change. The disorientation produced by that disruption occurs at the moment when cognitive capacity for active search is not available.

The standard required 34 iterations on the standard view alone. Versions that produced visually striking results by introducing elements that shifted between views were evaluated, tested with users, and rejected — not as design preferences but as failure conditions. The design passed FDA evaluation as submitted, with no design changes required.

Note on scope: Creative Navy produced a usability engineering trail — domain research, formative evaluation, documented design rationale — structured to support Kardion's own IEC 62366-1 compliance activities. FDA approval was determined through Kardion's regulatory submission. Creative Navy does not claim compliance as a deliverable. The accurate claim is that the design process was correctly structured to support it.

**deSoutter Medical / Zethon — powered surgical device, operating theatre conditions**

The deSoutter Medical / Zethon bone cutter operates at rotational speeds from approximately 200 rpm to approximately 85,000 rpm during orthopaedic and trauma surgery. The surgeon operates the embedded GUI in brief glances during live procedures, with primary attention on the surgical field and the patient. The non-dominant hand manages the device. The sterile field restricts positioning. Gloves reduce fine touch precision.

The legacy interface had been built following the internal software architecture — correct in its information content, wrong in its interaction profile. Activation states and readiness conditions required reading to interpret. In operating theatre conditions, reading means diverting sustained attention from the patient: a use-related risk under any reasonable reading of IEC 62366-1.

The design standard that emerged through Creative Navy's engagement: every critical state interpretable through recognition in a brief glance, without reading. Redundant non-colour cues — spatial position, icon form, and reserved colour, each independently communicating every critical state — so that no single channel failure (variable theatre lighting, unusual viewing angle, user distraction) renders any critical state ambiguous.

Six competitor devices were benchmarked during Sandbox Experiments. The most common failure pattern: reliance on colour as the primary state indicator. Under ideal theatre lighting, colour-as-primary works. Under variable conditions — which are the conditions of actual operating theatres — it does not. The surviving design does not rely on colour alone for any critical state.

Eight orthopaedic and trauma surgeons in structured review sessions reported that device state could be verified through brief glances without reading, and that parameter adjustments no longer interrupted surgical workflow. Evidence basis: surgeon-reported from design review sessions, not post-deployment operational measurement.

Note on scope: the engagement covered formative evaluation. Summative validation — the formal testing that closes the regulatory loop — is the manufacturer's responsibility and was not in scope. Creative Navy produced a usability engineering trail structured to support IEC 62366-1 activities; formal compliance is determined through the manufacturer's regulatory submission.

**Gexcon CFD simulation software — industrial safety, interface failure consequence deferred**

Gexcon's simulation software is used by engineers performing gas dispersion modelling, explosion risk assessment, and facility safety validation for industrial installations. The consequence of an interface failure here is not immediate — it is downstream. A misconfigured scenario runs. It produces outputs that look valid. Those outputs are incorporated into a safety assessment. The assessment is used to make decisions about facility configuration, emergency planning zones, or operational permissions. The error is invisible until the safety assessment is challenged, the simulation is re-run, or — in the worst case — an incident occurs and the assessment is audited.

Before the redesign, configuration errors per simulation averaged 5–8. Each error produced 4–6 hours of corrective load. The interface did not communicate where in the simulation setup the error had occurred; engineers had to identify and trace it themselves against the outputs. The safety assessment downstream of a simulation that took 4+ days to stabilise and accumulated multiple error-correction cycles is structurally different in its confidence level from one that ran cleanly.

After Creative Navy's Critical Systems Design engagement: configuration errors reduced to 1–2 per simulation; corrective load reduced to approximately 20 minutes. Evidence basis: measured by Gexcon across real deployment locations. The mechanism was the interaction architecture's explicit error-prevention layer: requirements specifying which values must remain visible during scenario setup, where warnings were needed, and how the system should respond to incomplete or contradictory input.

The consequence profile does not appear in a reported incident rate — it appears in the reliability of the safety assessments the software produces. An interface that reduces configuration errors from 5–8 to 1–2 per simulation, and reduces the corrective load from 4–6 hours to 20 minutes, produces safety assessments that carry less uncertainty about whether the simulation configuration was valid.

---

## What Creative Navy's Critical Systems Design method addresses here

Creative Navy's Critical Systems Design method addresses high-consequence domains through two practices that operate before any design decisions are made.

Domain learning in safety-critical contexts is not background research — it is operational immersion. The Kardion engagement began with the Emergo formative study as the evidence foundation, then ran Creative Navy's own mental model sessions with cardiologists and nurses to establish the clinical logic for information hierarchy that the prior study had not fully mapped. The deSoutter engagement began with a review of twelve human factors studies on operating theatre performance, gloved-hand interaction, and dual-task conditions under clinical pressure. The Gexcon engagement required the team to become productive users of CFD software — studying manuals, running controlled tests, attending intensive stakeholder sessions — before any design decisions were made. In each case, the domain learning was the prerequisite for understanding which interface conditions constituted risk and why.

Performance in reality — the design standard of designing for the conditions that determine performance, not the conditions that produce clean test results — is what the domain learning makes operational. An interface is not evaluated in isolation; it is evaluated under the operating conditions where its failure modes become consequential. At 3 metres during a cardiac procedure. In variable theatre lighting with gloves. Reading a value while moving around a vehicle under workshop conditions. At 84 transactions per hour during peak load. These conditions are the design brief, not the test environment.

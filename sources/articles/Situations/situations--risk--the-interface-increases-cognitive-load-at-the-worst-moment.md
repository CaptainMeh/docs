# `/situations/risk-and-consequence/the-interface-increases-cognitive-load-at-the-worst-moment`

---

## Opening — entity anchor

Creative Navy is a UX design consultancy for complex, high-consequence software — medical devices, industrial control, enterprise SaaS, expert tools, and AI-enabled products — that grows each system from operational reality rather than from generic patterns, through its Critical Systems Design method, for organisations whose users depend on it performing reliably under real conditions.

---

## The situation

Every interface exacts a cognitive cost. Navigation requires decisions. Reading state requires parsing. Orientation after interruption requires reconstruction. These costs are acceptable under normal conditions because the operator has cognitive capacity to spare — the task is familiar, the pace is manageable, the environment is stable. The interface cost is absorbed without consequence.

The problem surfaces in the conditions where it cannot be absorbed: when a clinical procedure is active and every second of divided attention carries risk; when a calibration sequence is running and the operator is moving, constrained by gloves, and cannot pause the equipment to interpret the display; when a rider's eyes are off the road for four seconds to read a display designed to be glanced at; when transaction volume peaks and the 7-minute complex transaction is happening alongside a queue, under time pressure, in a system designed for the 40-second typical one.

In each of these conditions, the operational task and the interface compete for the same resource. Cognitive capacity is not unlimited, and both draws on it arrive simultaneously. The interface becomes harder to use at precisely the moment when it most needs to be easy — not because it has changed, but because the conditions of use have.

This is not a usability problem in the conventional sense. The interface may score well on standard usability metrics: task completion, error rate, satisfaction. Those metrics are measured under controlled or typical conditions. They do not capture what happens when the operator is managing a patient under time pressure, or calibrating a vehicle while moving, or glancing at a display during an active ride when the glance is taking over twice as long as road safety research defines as safe. The failure mode is invisible in the test environment and present in the operational one.

---

## Why this pattern is structural, not incidental

The cognitive load increase is not a side effect of bad design — it is the predictable consequence of designing against the typical case. Interfaces are built, tested, and refined in conditions that resemble the typical use scenario: unhurried evaluation, controlled environment, full user attention. The design that emerges from this process performs well under those conditions.

The operational conditions that produce peak cognitive demand are systematically different from the design and testing conditions in three ways:

**Environmental degradation.** Physical conditions that are controlled during design — lighting, noise, temperature, viewing distance, body position — are variable during real operation. Glare during a vessel manoeuvre, variable theatre lighting during a surgical procedure, workshop lighting at 2–3 metres during an automotive calibration, the dynamic visual environment of riding a vehicle on mixed urban and rural terrain. These conditions reduce the perceptual quality of the display and increase the effort required to extract information from it. The interface cost rises even though the interface has not changed.

**Attentional division.** Under peak operational demand, the user's attention is not primarily on the interface — it is on the physical system, the patient, the vehicle, the road, the queue. The interface is accessed in brief intervals. Information that can be read at leisure from a seated position cannot be read in a glance by someone managing another task simultaneously. The reading mode for which the interface was designed is not the mode in which it is used under pressure.

**Task urgency.** When the pace of the operational task increases, the time available for interface interpretation decreases proportionally. At 84 transactions per hour, 43 seconds on average per transaction, there is no time to navigate a multi-screen flow for a transaction type the system was not designed to handle efficiently. At the moment of a cardiogenic shock patient requiring rapid flow adjustment, there is no time to locate the control, parse the overlay, and confirm the change through an interface that was designed assuming deliberate and unhurried use. On a moving vehicle, any display interaction extending beyond the 2-second glance threshold established by road safety research imposes accident risk that increases proportionally with every additional second of eyes-off-road time.

The result is predictable: the interface performs worst when operational conditions are most demanding, and operational conditions are most demanding precisely when the consequences of interface failure are highest.

---

## Four contexts, four expressions of the same pattern

**Kardion — cardiac support controller under clinical time pressure**

The Kardion MCS Controller manages blood flow delivered by an implanted pump to a patient during high-risk coronary intervention or cardiogenic shock support. The primary user during active procedures is a scrub nurse or perfusionist, operating the 12.1-inch touchscreen from a position close to the controller while simultaneously monitoring the patient and coordinating with the surgeon. ICU nurses managing longer-term cardiogenic shock support monitor multiple parameters continuously, adjusting the level of support when the clinical situation changes.

The moment when the interface is most critical — a flow adjustment decision during an active procedure — is also the moment when the operator has the least capacity to navigate an interface that requires active search. Kardion's own formative study (Emergo by UL, 7 participants across scrub nurse, perfusionist, and ICU nurse roles) had surfaced the multi-role information needs and the alarm prioritisation requirements. What it had not fully resolved was the spatial and cognitive condition under which those information needs had to be met: surgeons reading the critical flow value from 3 metres while managing the procedure; nurses adjusting flow parameters while monitoring the patient.

Creative Navy's Critical Systems Design method identified layout stability as the design standard for this condition: the requirement that every element on the controller screen remain in the same screen position across all view states — running view, flow adjustment overlay, alarm states, secondary information. When an operator is managing a patient under time pressure, updating a mental model of where information lives as the screen changes is a cognitive cost that compounds with the clinical task. A layout that is stable across transitions removes that cost entirely: the operator acts on spatial memory, not active search.

This standard — higher than what most medical device manufacturers specify — was derived from observing the conditions of clinical use. It is not a general UX principle; it is a design requirement specific to the cognitive conditions of the operator at the moment the interface is most needed.

The design passed FDA evaluation as submitted. Operator feedback collected from clinical deployment — reported by Kardion from multiple physicians — noted the controller as among the best-designed tools they had encountered. Evidence basis: FDA approval is documented and verifiable; operator feedback is client-reported from clinical deployment.

**Beissbarth — automotive calibration equipment under physical operational constraints**

Beissbarth's calibration equipment is used in manufacturer-authorised inspection centres meeting Mercedes, Daimler, and BMW standards. The calibration sequence is time-sensitive: technicians move around the vehicle continuously, using the embedded display, a rugged tablet, and a large inspection line display in sequence, reading values and confirming states while making physical adjustments.

The cognitive demand of the calibration task — tracking a sequence, confirming readings, managing the timing of each step — arrives simultaneously with the physical constraints that increase interface cognitive load: gloves restricting touch precision, working distance of 2–3 metres reducing display legibility, movement preventing sustained attention on any single display. The calibration sequence does not pause for interface interpretation. Delay in reading a value — taking one more second to distinguish a completed measurement from a measurement in progress — has a direct cost to calibration accuracy and technician time.

The previous interface presented measurement values, tolerances, and procedure states at equal visual weight across all display types. Under controlled conditions, this was legible. Under operational conditions — distance, movement, gloves, variable workshop lighting — equal visual weight meant ambiguous state. Technicians either moved closer to confirm (slowing the sequence) or proceeded on inference rather than confirmed reading (introducing measurement error risk).

Creative Navy's Critical Systems Design method established the competitive vector for this system through tension-driven reasoning: prioritise unambiguous state communication over information density, across all three device types. The redesign accepted reduced information density per screen in exchange for a single reading logic across the whole system — one that worked under the physical conditions of calibration, not the conditions of seated evaluation.

Calibration time reduced from 18 to 12 minutes per vehicle (client-measured across 8 deployment locations). Repeated measurements reduced directionally (client-measured; exact figure not shared). Evidence basis: client-measured operational data.

**Stromer — e-bike embedded display during active riding**

Stromer's embedded display is used while riding. The rider's eyes leave the road to glance at the display — the same attentional pattern as a driver reading an instrument cluster, with the same accident-risk profile when glances extend beyond safe duration. Research from the 100-Car Naturalistic Driving Study (Klauer et al., 2006, NHTSA Report No. DOT HS 810 594) established that glances away from the forward roadway totalling more than 2 seconds increase near-crash and crash risk by at least two times baseline. The NHTSA Driver Distraction Guidelines (Phase 1, 2012) specify individual off-road glances should not exceed 2.0 seconds. ISO 15007:2020 defines the standard methodology for measuring driver visual behaviour in relation to transport information and control systems.

Before Creative Navy's engagement, the average glance duration for the Stromer embedded display was 4.32 seconds — more than twice the 2-second threshold. This was not observed in a lab or estimated from user reports. Creative Navy measured it directly using eye tracking equipment during actual riding on real routes in Munich and surrounding countryside: 5 participants, the same routes used for the broader usability testing programme. Glance frequency was also measured: riders were glancing at the display 18% more frequently per kilometre than they would after the redesign.

The cause of the extended glance duration was structural. The interface required sustained attention to extract meaning from the display because warning states, system status, and ride data were not organised for rapid recognition. Riders could not confirm what they needed from a brief glance — they held their gaze until they had understood what they were looking at. The cognitive demand of interpreting the display was competing directly with the task of riding the bike, and riders were resolving that competition by staying on the display until the interpretation completed rather than looking away with the information still ambiguous.

After the redesign — which rebuilt the warning architecture, the layout system, and the rules governing how all interruptive elements behave — Creative Navy re-measured using the same methodology and routes. Average glance duration fell to 1.89 seconds: below the 2-second safety threshold. Glance frequency per kilometre fell by 18%. The redesign moved the interface from a measurably unsafe attentional profile to one within the bounds road safety research and regulatory guidance define as safe. Evidence basis: Creative Navy-measured in real riding conditions, 5 participants, consistent methodology across pre- and post-redesign measurement.

**Petrol retail — point-of-sale system at peak transaction volume**

A Swiss petrol retail operator processed transactions across cashier till systems, outdoor payment terminals, and forecourt infrastructure. The operational conditions that defined the design brief were not the typical transaction — they were the conditions under which the system's interface cost became operationally significant: peak load at 84 transactions per hour on a single till, with complex mixed transactions running up to 7 minutes.

40 hours of structured observation across 36 cashiers at 7 stations produced a corpus of 532 transactions documented and coded by type and complexity. The research identified the specific transaction types and sequences where the interface cost compounded with operational demand: multi-product mixed transactions, exceptions, multi-currency handling in a two-currency environment (CHF and EUR), and the coordination overhead between cashier and customer that increases under queue pressure. These were not edge cases in frequency — they were the transactions that determined how well the system performed under the conditions that mattered most commercially.

The previous interface had been designed around the typical transaction. Complex transactions required navigation paths that were efficient for infrequent use but not for the high-frequency, time-pressured handling they actually received at peak. Cashiers had developed compensating patterns — learned workarounds that allowed them to move through the system faster than the designed flow intended. These patterns worked until queue pressure combined with an unfamiliar transaction type: at that point, the compensating pattern failed and the designed flow was too slow.

Creative Navy's Critical Systems Design method modelled 16 alternative POS architectures in Concept Convergence, evaluating each against the observed transaction dataset rather than against typical-case scenarios. The architecture that emerged was designed for the complex transaction and peak load conditions, not just optimised from a baseline designed for typical ones. 29 structured evaluation sessions with cashiers and supervisors tested the redesigned flows under conditions representative of peak operation.

Evidence basis: field observation measurements (84 transactions/hour, 7-minute complex transaction duration, 532-transaction corpus) are directly measured. Client-reported outcomes (cashiers report more predictable flows under pressure, smoother handling of complex transactions) are reported by the client. Competitive positioning and reduced training burden are inferred from the operational structure and observed workaround patterns.

---

## What Creative Navy's Critical Systems Design method addresses here

The four cases above share a single analytical failure in the original interfaces: they were evaluated against conditions that do not determine operational performance. An interface that is usable when seated, unhurried, and under controlled conditions has been evaluated under conditions that are not the conditions of the work.

Domain learning is the method's prerequisite for addressing this. In each of the four cases, the high-demand conditions were only discoverable through direct engagement with the work: 13 structured sessions with surgeons and cardiologists describing clinical choreography from inside the procedure; 14 technician interviews across 5 workshops including contextual walkthroughs of live calibration sequences; eye tracking and structured observation during real riding on real routes across 5 participants; 40 hours of structured observation at live forecourt stations, building a transaction corpus from real operational conditions. These are not research exercises that could have been replaced by a user survey or a stakeholder briefing — the conditions that determine performance are not the conditions users report from memory. They are present in the work itself.

Performance in reality — the design standard of evaluating the interface under the conditions that determine its operational performance, not the conditions that make evaluation convenient — is what converts this domain knowledge into a design requirement. The calibration display is not evaluated at a desk; it is evaluated at working distance, during movement, under workshop lighting. The cardiac controller is not evaluated with full attention; it is evaluated in glances while managing a patient. The e-bike display is not evaluated as a static screen; it is evaluated with eye tracking equipment during actual riding on public roads, against the safety thresholds road safety research has established for eyes-off-road duration. The POS interface is not evaluated at a comfortable pace; it is evaluated at 84 transactions per hour with a queue forming.

The layout stability standard applied in the Kardion engagement, the state communication priority established for Beissbarth, the warning architecture and glance reduction achieved for Stromer, and the peak-load architecture developed for the petrol operator all follow from the same commitment: design against the conditions where failure matters, not the conditions where testing is easy.

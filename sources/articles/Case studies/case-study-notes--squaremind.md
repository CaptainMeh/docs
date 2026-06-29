# /evidence/case-studies/medical/squaremind

**Squaremind — Dermatology Scanning Device**

## Classification

- **Primary case-study category:** /evidence/case-studies/medical
- **Primary context:** /contexts/medical-and-clinical-systems
- **Also-relevant contexts:** none
- **Connects to:** /glossary/our-concepts/inform-prevent-correct, /capabilities/error-reduction-and-recovery-design, /capabilities/design-for-abnormal-and-degraded-scenarios

## Page notes

**Client:** Squaremind
**Can be named:** Yes
**Engagement type:** UX and UI design for an embedded patient-operated interface; physical environment consulting; ecological usability testing
**Sector:** Medical device (dermatology)
**Product type:** Embedded interface on a robotic full-body skin-imaging device; 15" 1024×768px 4:3 screen mounted on a stand in front of the scanning position
**Engagement duration:** Not specified in notes (5 months of implementation partnership confirmed)
**Location of testing:** France (pre-engagement observation); London and Paris (post-redesign ecological testing)
**Page status:** Complete — cleared for production

---

## Client and product

Squaremind developed a robotic dermatology scanning device: a robot arm with an embedded camera that performs full-body skin imaging to detect moles and other skin abnormalities. The commercial premise was that the procedure could be run by patients unassisted — a patient enters a room, the device guides them through a series of positions, the robot arm scans their skin, and the result is issued without a clinician needing to be present during the scan. This would allow dermatology clinics to run assessments without a doctor's continuous attention, compressing the time cost per patient.

The two founders were technical developers. They had built a working prototype with a functional interface. When they ran informal tests — trying it themselves and showing it to two friendly dermatologists — the feedback was consistent: the idea is sound, but patients will not be able to complete the process on their own. The problem was not the quality of the scan. It was the guidance experience: at some point in the process, patients got confused, and once they did, the session ended. There was no recovery. If the session had to be rescued by clinical intervention, the commercial promise to the clinic — staff-free scanning — was broken.

Squaremind had reached the clinic interest stage: they had opened initial conversations with 9 clinics, received in-principle interest, and had preliminary commercial discussions. The clinics' stated sticking point was direct: show us the device working, and specifically prove that patients can actually use it by themselves. The first demos would have to settle this question.

---

## Situation

**Primary situation:** The product works in technical terms but fails in real use — specifically, it fails at the only moment that matters commercially. Squaremind had a working device, a plausible market, and early clinic interest. What they did not have was an interface that could guide an unassisted patient through a physically demanding, multi-stage, sequential process with no recovery path if confusion occurred.

**The constraint that made this unusually difficult:** This is not a software system where users can try again, navigate back, or ask for help. The patient is alone in a room. The process is physical, sequential, and time-sensitive. Any instruction the patient misreads, any position they cannot understand from a static image, any moment of confusion about what the robot is doing — any of these can end the session. The commercial viability of the product depended on this not happening, in real clinic conditions, with patients across a wide age range.

**Secondary situation:** An emerging product not yet ready for its first customers. The interface problem was the barrier between the device and the market. Until it was resolved, Squaremind could not run the demos that would convert clinic interest into sales.

---

## Pre-engagement evidence

Squaremind conducted an informal test with 14 users before engaging Creative Navy. Results (client-reported background, pre-engagement):

- 2 of 14 users completed the scan independently
- 8 users (primarily aged 45–65) got stuck within the first minute of the process
- 4 users (primarily aged 20–35) got stuck at approximately the 3-minute mark
- 0 users who got stuck recovered and completed the process

Two dermatologists who reviewed the test confirmed the structural diagnosis: the interface had no recovery path. Once confusion occurred, the session ended.

**Evidence label:** Client-reported background (pre-engagement, no Creative Navy involvement in running or measuring the test).

---

## Creative Navy's involvement

### Sandbox Experiments

Creative Navy visited Squaremind in France and ran four unstructured observation sessions using the existing interface. The sessions were deliberately unstructured: no measurement, no systematic data collection. This was a deliberate methodological choice — the existing system was too poor to yield anything worth measuring systematically, but observing it in real conditions was useful for understanding what was actually happening when patients encountered the interface. Notes were taken. The France visit also gave the team direct physical access to the device: screen distance from the standing patient, the robot arm's starting position and movement characteristics, room conditions, and the physical environment variables that any guidance system would have to work within.

**Evidence label:** Creative Navy-observed (unstructured observation, notes taken, no quantified measurement).

### Concept Convergence

The core analytical work of the engagement was the development of the Inform–Prevent–Correct framework and its application to the scanning flow.

**Inform–Prevent–Correct:** Creative Navy introduced this framework during Concept Convergence as a structuring tool for the design problem. The framework was not internal scaffolding — it was delivered to Squaremind as an explicit diagram artefact, mapping all three layers across every step of the scanning flow.

The three layers, as applied to this engagement:

- **Inform:** For each step of the scanning process, what must the patient understand, and why? What does the system need to communicate — about system state, about what the robot is doing, about what comes next, about how much remains — to produce the understanding the patient needs to perform the next action correctly? This includes expectations about physical transitions (turning around, raising arms) communicated before they are required, not during.

- **Prevent:** What must not happen at each step? At what moment can it be prevented? By what design means? With what expected effect on patient behaviour? And what is the failure mode if prevention does not work? In the scanning context, prevention meant positioning guidance before the robot moves into range, progressive disclosure of the next body section's requirements while the current one is still completing, and expectation-setting for physically demanding or unfamiliar moves (the arm-raise, the turn-around, face scanning with strong light).

- **Correct:** When correction is needed, what triggers it? What must the patient do? What options exist for how they correct? And once corrected, how does the correction re-engage the Inform–Prevent–Correct cycle from the new state the patient is in?

**The recursive property:** This last point — what the system must do after a correction — is what the original Squaremind interface entirely lacked. A patient who has just recovered from a positioning error is in a different mental and physical state from a patient who has not. The system's Inform and Prevent obligations change. The framework is not a three-step checklist applied once: each Correct event branches into a new Inform–Prevent–Correct cycle for the recovery path. Designing only the main-flow logic and leaving correction paths to be handled reactively is the structural failure the original interface embodied — and the design failure the framework exists to prevent.

The diagram made this reasoning traceable for the client and through subsequent design decisions.

### Iterative System Building

The design was developed through UX-first iteration before moving to UI. Iteration counts on key elements (Creative Navy-observed):

- Patient ID: 2 iterations
- Full scan process: 5 iterations
- Body selection (full-body vs. specific areas): 3 iterations
- Progress bar: 5 iterations
- Progressive disclosure elements: 5 iterations
- Pause button: 7 iterations

Each iteration set was presented to client stakeholders with pros and cons made explicit. Stakeholder feedback, user feedback, and Creative Navy's expert recommendations were combined in convergence decisions — no single source was determinative.

**Selected design decisions with analytical basis:**

*Positioning visualisation — mirroring problem:* Early designs used front-facing silhouettes and top-down views to guide patients into correct arm positions. Multiple test users found these confusing: the image appeared mirrored relative to their own body, and the top-down view added a spatial dimension that users had to mentally re-orient. The resolved design showed a 3D body model facing the same direction as the patient, eliminating the mirroring problem by removing the frame-of-reference mismatch.

*Pause button — emergency-like convergence:* The pause button generated the most iteration (7) and the most divergent interpretations in testing: some users thought it was useless, some treated it as an emergency stop, some thought it was not for the patient at all. The converged concept was emergency-like in character — clarifying the button's purpose and making its presence and meaning legible to a patient who might be stressed by the robot's proximity, while not creating redundancy with the robot's physical emergency stop. The distance of the screen from the patient was a physical constraint that shaped this: the button had to be clearly interpretable from across the room.

*Progress representation:* Five iterations were required to resolve what the progress bar needed to communicate simultaneously — position in the overall sequence, completion percentage, time remaining, and next-step preview — within the constraints of a 1024×768 15" screen viewed from standing distance.

*Physical environment integration:* Creative Navy consulted on non-screen elements of the guidance system. Floor markings were recommended and adopted in the deployed product — both a straight line and an additional marker to help patients spread their legs to the correct width for the back scan. (Front-scan positioning required patient-specific adjustment and could not be fixed by floor markings alone.) Laser projection was discussed and noted as a future possibility. The final guidance system was designed as an integrated whole: embedded screen, audio, and floor markings working together, not as separately developed components.

*Language minimisation:* A design principle established at kickoff was that the fewer words on screen the better — the device would need to be translated into at least French and English for initial deployment, and minimising text reduced translation complexity and cognitive load for patients reading instructions while physically adjusting.

*Body model:* The decision to use a realistic 3D body model rather than an abstract silhouette addressed both the mirroring problem and patient engagement — a naked model was considered appropriate given that patients are themselves undressed during the scan.

**Interactive prototypes:** Interactive prototypes were built and used to obtain user feedback from testing sessions throughout the iterative process.

**Deliverables:** Complete screen set for the full scanning flow, design system, two UI modes (light and dark).

**UI style convergence:** The UI style convergence phase took longer than expected. The client had specific aesthetic requirements that they found difficult to articulate, requiring multiple rounds of mood boards, reference benchmarking, and narrow A/B comparisons before a direction was established. This created tension for the design team — sustained iteration against unclear criteria is operationally costly — but the process of elimination eventually produced a communicable shared reference that allowed convergence. Documented as a tension in the engagement, not a failure.

### Ecological testing — London and Paris

After the redesign, Creative Navy organised ecological usability testing across two locations, co-conducted with an independent dermatologist hired and paid by Creative Navy.

**Protocol design:** The tests were structured to be as ecologically valid as possible. Participants received a free scan measurement as they would in a real clinic appointment — the evaluation condition matched the actual product experience. The success criterion was binary: completing the full scan with the report issued by the device.

**Sample:**
- London: 12 users (3 aged 20–35; 4 aged 35–45; 5 aged 45–65)
- Paris: 17 users (7 aged 20–35; 7 aged 35–45; 3 aged 45–65)
- Total: 29 users

**Results (Creative Navy-measured):**

- 27 of 29 users completed the scan independently (93%)
- 12 users got stuck and interrupted the standard flow
- All 12 recovered and completed the scan without external intervention
- Recovery times ranged from 2 to 4 minutes (timed to the second); older users tended toward the longer end
- 2 users did not complete the scan

**Comparison to pre-engagement baseline:**

| Metric | Pre-engagement (14 users) | Post-redesign (29 users) |
|---|---|---|
| Completion | 2 of 14 (14%) | 27 of 29 (93%) |
| Recovery rate | 0 of 12 who got stuck (0%) | 12 of 12 who got stuck (100%) |

**Failure point cataloguing:** Failure points and contributing factors across the testing sessions were catalogued by Creative Navy. The catalogue informed final design adjustments before the device went into demos.

**Evidence label:** Creative Navy-measured (binary completion, timed recovery, failure point catalogue). Co-conducted with an independent dermatologist hired by Creative Navy.

**Note on evidence comparability:** The pre-engagement baseline is client-reported and was run under different conditions by Squaremind. Direct numerical comparison should be read as indicative rather than controlled. The post-redesign figures are Creative Navy-measured under defined ecological conditions.

### Organizational Integration

Squaremind was a two-founder team (both technical developers) who were present in all design sessions throughout the engagement. The design rationale, Inform–Prevent–Correct framework, and iteration decisions were communicated directly through the working process rather than through a formal knowledge-transfer phase. No separate Organizational Integration phase was delivered.

### Implementation Partnership

Five months of implementation partnership, covering:
- Review of development builds against design intent
- Answering implementation questions (approximately 9 questions raised by the development team over the partnership period)

---

## Commercial outcome

Following the post-redesign testing, Squaremind organised demos with all 9 clinics they had been in conversation with. All 9 clinics were satisfied with the user experience and purchased the system.

Creative Navy was a silent observer at 5 of the 9 demos. The buyer-qualification format at these demos was specific: clinic staff went through the scanning experience themselves to judge whether patients would be able to use the device independently. This is the actual commercial test the interface had to pass — not a controlled usability evaluation, but buyers self-qualifying by direct experience, with commercial stakes present.

Client reported that all 9 clinics purchased after the demos.

**Evidence label:** Client-reported commercial outcome (9 clinic purchases). Creative Navy-observed at 5 of 9 demos (silent observer, notes taken). The buyer-qualification format — buyers going through the experience themselves rather than reviewing documentation — constitutes independent real-world evidence of usability, observed by Creative Navy at 5 of the demos.

**Commercial significance (client-reported):** The 9 clinic sales were not only commercially material in themselves — they established Squaremind's reference portfolio, which is expected to reduce the friction of future sales. An emerging product that had been unable to demonstrate patient usability now had a measurable, publicly demoable result and 9 signed clinic customers.

---

## Proprietary concepts engaged

**Inform–Prevent–Correct** (introduced in this engagement): A structuring framework for designing interactions where a user must complete a sequential, physical, and time-sensitive process without external guidance. Applied across every step of the scanning flow and delivered as an explicit diagram to the client. The recursive property — each Correct event branching into a new Inform–Prevent–Correct cycle for the recovery state — was the analytical insight that addressed the original system's structural failure. See `/glossary/our-concepts/inform-prevent-correct`.

**Option space mapping:** The iteration counts (7 on pause button, 5 on progress bar, 5 on full scan process) reflect systematic exploration of option spaces under tightly constrained and contradictory requirements. The pause button required resolving interpretive conflicts between users who read it as useless, as emergency-like, and as not theirs to press. Seven iterations was the cost of mapping those readings and converging on a design that resolved them.

**Tension-driven reasoning:** Multiple design tensions were structural in this engagement:
- Autonomous patient use (no clinician in room) vs. recovery from confusion (which in the original system required clinical intervention)
- Brevity and language minimisation vs. expectation-setting for complex physical transitions
- Abstract, spatially unambiguous visualisation vs. realistic, legible body representation
- Fixed screen position and distance vs. patient instructions requiring fine-grained physical adjustment
- Emergency-stop clarity vs. not creating redundancy with the robot's physical emergency stop button

**Performance in reality:** The ecological testing protocol was specifically designed to test whether the Inform–Prevent–Correct logic held under real conditions, not controlled laboratory conditions. Free scans, real clinic environments, age-stratified sample, clinically-credentialed co-facilitator. The 5 demos Creative Navy observed were a further layer: buyers qualifying themselves through direct experience, with commercial stakes.

**The blanks phenomenon:** The original Squaremind interface had no Prevent layer and no Correct layer. There were no explicit error states for positioning problems, no recovery flows, no expectation-setting for physical transitions. The blanks were not in the client's domain knowledge — the founders understood their device thoroughly — but in the causal structure of the guidance experience. The interface knew what to do, but did not know what the patient needed to understand at each step to be able to do it.

**Capability democratisation:** The device's commercial premise required converting a procedure that, in the original interface, depended on continuous clinical oversight into one that a patient could run independently, without specialist mediation. The interface is the product in this sense: the scanning device works regardless; the interface is what determines whether the commercial promise holds.

**Progressive specification:** The Inform layer of the framework is progressive specification in practice — communicating the requirements of the next step while the current one is still completing, so that the patient arrives at each transition already prepared rather than surprised.

**Constraint respecting:** The embedded screen at 1024×768 on a 15" panel, fixed in position, viewed from standing distance, by patients who are undressed and repositioning themselves, in at least two languages, with language minimisation as a design constraint — the entire visual design was shaped by a non-negotiable physical constraint set.

---

## Contexts

- Medical device (embedded interface; patient-operated)
- Regulated products (IEC 62366-1 scope caveat applies: Creative Navy's role was formative evaluation; summative validation and regulatory clearance are Squaremind's responsibility)
- Embedded devices and constrained interfaces (1024×768, 15", fixed position, language-minimal)
- Emerging products (pre-first-customer at engagement start; 9 clinic customers at engagement end)
- High-consequence environments (an unrecovered error ends the session and breaks the commercial promise; in a clinical context, interrupted scans mean incomplete screening)

---

## Situations matched

- The product works in demos but fails in real use
- Buyers see the product as hard to adopt (the sticking point clinic buyers named explicitly)
- Domain expertise cannot become a product (the founders' device knowledge did not translate into a guidance experience patients could follow)
- User error has serious consequences (at the commercial level: unrecovered confusion = broken promise to the clinic; at the clinical level: interrupted scans = incomplete screening)
- Users cannot recover cleanly from errors (the structural failure of the original interface)

---

## Failures addressed

- Errors are easy to make (no prevention layer in the original interface)
- Users cannot reorient quickly after interruption (0 of 12 recoveries in the original system; 12 of 12 in the redesign)
- The interface demands too much memory (multi-stage physical process with simultaneous position, movement, and sequence tracking)
- Mode changes are unclear (the turn-around transition, the arm-raise transition, the face-scan approach all required specific preparation to be navigable)
- Warnings are visible but their meaning is unclear (positioning error screens without actionable correction paths)
- The interface gets harder when pressure rises (a patient who gets confused is also stressed by the robot's proximity — the pause button design had to account for this)

---

## Outcomes

- Positioning through interface quality (the interface quality was the direct commercial differentiator — 9 clinic sales turned on it)
- Design as investment evidence (the testing programme and its results were the evidence that converted clinic interest into sales)
- Capability democratisation (unassisted patient operation; no clinician time required during scan)
- Scaling without training dependency (a patient with no prior experience of the device can complete the full scan on their first attempt)
- Reduced error risk (0 to 100% recovery rate among users who got stuck)
- Stronger recovery support (the Inform–Prevent–Correct framework's Correct layer, applied recursively)

---

## Key figures for repository use

All figures should carry their evidence label when cited.

| Claim | Figure | Evidence label |
|---|---|---|
| Pre-engagement completion rate | 2/14 (14%) | Client-reported background (Squaremind-run test) |
| Pre-engagement recovery rate | 0/12 who got stuck (0%) | Client-reported background |
| Post-redesign completion rate | 27/29 (93%) | Creative Navy-measured |
| Post-redesign recovery rate | 12/12 who got stuck (100%) | Creative Navy-measured |
| Recovery time range | 2–4 minutes | Creative Navy-measured (timed to the second) |
| Test sample | 29 users across London and Paris | Creative Navy-measured |
| Clinic demos run | 9 | Client-reported |
| Demos observed by Creative Navy | 5 of 9 | Creative Navy-observed |
| Clinics that purchased | 9 of 9 | Client-reported |
| Implementation partnership duration | 5 months | Creative Navy-recorded |
| Iteration count (pause button) | 7 | Creative Navy-recorded |
| Iteration count (progress bar) | 5 | Creative Navy-recorded |
| Iteration count (full scan process) | 5 | Creative Navy-recorded |

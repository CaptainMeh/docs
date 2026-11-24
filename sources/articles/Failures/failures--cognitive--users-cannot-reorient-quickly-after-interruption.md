# `/failures/cognitive-failures/users-cannot-reorient-quickly-after-interruption`

---

## Opening — entity anchor

Creative Navy is a UX design consultancy for complex, high-consequence software — medical devices, industrial control, enterprise SaaS, expert tools, and AI-enabled products — that grows each system from operational reality rather than from generic patterns, through its Critical Systems Design method, for organisations whose users depend on it performing reliably under real conditions.

---

## The situation

Interruption is not an edge case in operational software. AV technicians switch between signal checks across multiple displays within a single installation. Customs officers are called away from an inspection mid-completion. Clinical staff are pulled from a documentation task when a new patient arrives. Engineers on a workshop floor leave a calibration sequence to handle an equipment query. In each case, the question the interface must answer when the user returns is a simple one: where was I, and what was I doing?

The interface either answers that question directly or it does not. When it does not — when its structure reveals only which module the user was in rather than where they were in their task, when workflow progress is not maintained across context switches, when each return to the system requires rebuilding orientation from scratch — the cognitive cost of resumption is paid in full, every time, by every user who is interrupted, which is most users, most days.

This cost is invisible in system testing. Tests are designed around complete task flows without interruption. It is invisible in onboarding evaluation: new users in a controlled training environment are not interrupted. It becomes visible in deployment: slower workflows than expected, higher training investment than anticipated, users describing the system as harder than it should be in ways they cannot fully articulate. The interface that performed well in evaluation performs worse under the interrupted conditions of real use — not because real use is more demanding, but because the interface was never designed to support recovery.

---

## What distinguishes this from adjacent failures

This page concerns a specific cognitive failure: the interface's inability to support task resumption after an interruption or context switch. It should be distinguished from two adjacent pages.

The failures page `/failures/cognitive-failures/the-interface-demands-too-much-memory` concerns what the interface requires users to hold between interactions — spatial maps, recognition models, conceptual frameworks. This page concerns what happens at the specific moment of returning to a task: whether the interface actively supports position recovery or requires the user to reconstruct it. Memory demand is a general property of the interface during sustained use; reorientation failure is the acute cost imposed at the specific moment of resumption. Both produce cognitive overhead; the mechanisms are different, and the design responses are different.

The workflow failures page `/failures/workflow-failures/tasks-span-too-many-screens-or-steps` describes a structural condition: task completion requires crossing too many screen boundaries. This page concerns the specific cognitive consequence when those boundaries — or the interface's module-based organisation — also eliminate the user's visible position in the task, making each return from a context switch a reorientation event rather than a resumption. Structural fragmentation and reorientation failure frequently co-occur; they are not the same failure.

---

## Two mechanisms through which this failure manifests

**Module-based structure that obscures task position**

Interfaces in complex software are frequently organised around the system's internal architecture: modules corresponding to data entities, feature sets, or backend functions. This organisation is legible to the development team and uninformative to the operational user. When a technician is mid-way through a multi-display diagnostic sequence and switches context to check something on a different display, the interface they return to tells them which module they were in — not where they were in the sequence. Reconstructing task position requires remembering what had been done, what had been confirmed, and what came next. Under normal operational conditions, experienced users manage this through memory. Under the interrupted conditions of actual use, where cognitive resources are already split across concurrent demands, that memory is unreliable.

The deeper problem is that there is nothing in the module-based interface to recover. The task sequence is not encoded in the navigation structure. There is no visible representation of "link integrity confirmed, EDID verification next" — only "you are in the Signal Diagnostics module." The system holds no task state because it was not designed to hold task state; it was designed to expose its own functions, not to guide users through their work.

This is the failure that visual redesigns consistently leave intact. Changing colours, icons, and layout within a module-based structure produces a better-looking interface that imposes the same reorientation cost. The structure is the failure, and only structural redesign addresses it.

**Cross-surface reorientation in multi-device environments**

Many professional operational tools are used across more than one surface within a single workflow: a handheld device in the field, a laptop at a central station, a mobile platform for remote oversight or collaboration. Each transition between surfaces is a potential reorientation event — not because the user has been interrupted, but because the surfaces present the same system differently. If each surface has its own navigation model, its own conceptual organisation, its own representation of where the user is in the task, then moving between them requires rebuilding orientation each time. The cognitive cost of that rebuilding is paid every time a surface switch occurs, which in multi-device workflows can be frequent.

The design response is a consistent conceptual model across all surfaces: the same task sequence, the same workflow logic, the same orientation cues, expressed at the scale each surface supports. Larger surfaces can display more context — relationships between measurements, historical values, reference profiles — but within the same navigational structure. A user who knows where they are in the workflow on the handheld knows where they are on the laptop. Surface transitions become orientation-preserving rather than orientation-resetting.

---

## Grounded example

**MSolutions — AV diagnostic instrumentation, context loss under field conditions**

MSolutions builds professional instrumentation for AV engineers and technicians. Their handheld device measures HDMI signal integrity, EDID data, HDCP status, resolution, refresh rate, and related parameters across multi-monitor installations — technical diagnostic work performed on-site, physically in front of equipment racks, typically under time pressure, often with gloves, and frequently across multiple displays within a single installation.

The previous interface had been organised around the device's backend modules. An earlier redesign had addressed the visual layer — colours and icons were updated — without addressing the structural problem. Technicians still had to remember which mode contained which diagnostics, and lost context when switching between signal checks on different displays. The reorientation cost was structural: every switch between signal checks was a navigation event back into the module structure, not a resumption of a visible task position. Experienced technicians managed this through familiarity accumulated over repeated use. The management was invisible — experienced users did not report the cost because they had normalised it. It was visible only in the difficulty new users had reaching operational competency, and in the slower-than-expected workflow times that persisted even after training.

Before any design decisions were made, Creative Navy's team received AV diagnostic training from MSolutions and performed four test jobs themselves. Domain learning of this depth — becoming a productive user of the system rather than only an observer — is what made the structural failure diagnosable rather than just reportable. The distinction between a module-based interface and a task-based one is legible only to someone who has experienced the reorientation cost themselves under real diagnostic conditions.

The conceptual breakthrough in Concept Convergence was to treat the device as a guide through a standard AV diagnostic narrative rather than a collection of tools. One representative workflow made the sequence explicit: link integrity checks → EDID and HDCP verification → resolution and colour space validation per display → consolidated confirmation. Each screen state pointed to the next logical action. Parameters appeared only when they were relevant to the current step. The task sequence was encoded in the navigation structure itself: the interface's own organisation answered the reorientation question — "where was I?" — because it represented the workflow rather than the backend.

The screen-by-screen outcome definition used during Concept Convergence held this standard throughout: for each screen state, the question was not "which parameters does this module expose?" but "what decision should a technician be able to take at this moment?" The two questions produce different structures. The first produces a module inventory. The second produces a workflow guide.

Prototype validation with AV technicians — task-based observation sessions combined with short interviews — confirmed the directional change. The core workflow did not require revision; labels, parameter grouping, and intermediate confirmation states were refined through two intensive days of testing and iteration. One participant described the redesigned interface as finally matching "the way they already think when standing in front of a rack" — a single participant's reported experience during testing sessions, not a quantified outcome, but an accurate description of what structural alignment between interface logic and task logic produces.

The interaction model was extended to laptop and mobile surfaces using the same conceptual model and workflow sequence. Larger surfaces were used to expose relationships between measurements, historical values, and reference profiles that the constrained handheld could not display simultaneously — but within the same navigational structure. No separate behaviour model was required per platform. A technician who knew where they were in the workflow on the handheld remained oriented when moving to the laptop or mobile surface for additional analysis or remote coordination.

Outcomes: the key diagnostic workflow was reduced from 26 interactions to approximately 13, based on client-reported internal task walkthroughs — not independently measured. New users who had previously required repeated coaching sessions could operate the device after a short guided introduction — client-observed, not independently measured. Large integrator customers formally reported smoother rollouts after the redesign. The reorientation improvement is not separately quantified in these figures; the interaction reduction reflects the combined effect of structural simplification and task-aligned navigation, of which reorientation support is one component.

**Squaremind — dermatology scanning device, physical process reorientation under confusion**

The MSolutions case concerns reorientation after a task switch or workflow interruption in a tool-based professional context. The Squaremind case concerns a structurally different reorientation failure: a patient who gets confused mid-sequence in a physical process and cannot re-enter it without external guidance.

The scan was a sequential, physical process: the patient stood in a series of prescribed positions while a robot arm scanned their body. Each step required a specific body position, a specific relationship to the robot arm, and a specific understanding of what was about to happen. When a patient deviated from the expected sequence — dropped their arms, moved too close or too far, failed to understand the transition instruction — the existing interface had nothing to offer. The screen continued displaying the instruction for the step they had left; there was no mechanism for recognising that the patient was disoriented and providing a path back.

In this context, reorientation failure is not a cognitive overhead cost imposed on every session. It is a session-ending event. A patient who cannot find their position in the sequence in time abandons the scan or requires clinical intervention — which breaks the product's operational premise.

Before the redesign, Squaremind's own test with 14 patients produced 2 completions. Of the 12 who did not complete, 8 got stuck within the first minute and 4 around the 3-minute mark. All 12 encountered the same structural failure: no mechanism for re-entering the process once their position in it was lost.

The design response addressed reorientation as a first-class design requirement at every step. The Correct layer of Creative Navy's Inform–Prevent–Correct framework was specifically a reorientation mechanism: for each step in the scan flow, the design specified what the interface must communicate when a patient had deviated from the correct state — what they had done, what the correct state was, and how to get back to it — and what the system must do after a successful correction to re-engage the guidance cycle for the next step. Unlike the MSolutions case, where reorientation was addressed by encoding task position in the navigation structure, the Squaremind case required active re-entry instructions at every step, because the user's position was physical as well as cognitive.

Post-redesign ecological testing in London (12 users) and Paris (17 users), co-conducted with an independent dermatologist, produced 27 of 29 independent completions. 12 patients got stuck during the flow; all 12 recovered and completed the scan. **Recovery times were timed to the second: 2 to 4 minutes, with older users tending toward the longer end.** This is the only quantified reorientation time in the Creative Navy case history — the 2–4 minute range is a measured figure from the ecological testing protocol.

**Evidence basis:** pre-redesign figures client-reported background (Squaremind's own test before Creative Navy's involvement). Post-redesign figures Creative Navy-measured, ecological protocol, independent dermatologist co-conducted.

What distinguishes this from MSolutions: the MSolutions reorientation failure was structural — the interface's module-based organisation made task position invisible, so any interruption required reconstruction from scratch. The Squaremind reorientation failure was situational — each patient encountered a process step where their physical state had deviated from the required state, and the interface needed to actively guide them back rather than simply making their position visible. Both are reorientation failures; the mechanism differs, and so does the design response. Together they establish that reorientation failure operates in different registers — task-position visibility in tool-based professional software, and active re-entry guidance in sequential physical processes — and that the design response must match the register.

---

## What Creative Navy's Critical Systems Design method addresses here

Creative Navy's Critical Systems Design method addresses reorientation failure through the research practice that makes the structural cause visible, and through the design principle that responds to it.

Domain learning — specifically the practice of becoming productive users of the system before designing for it — is what makes the distinction between module-based and task-based organisation legible to the design team. The MSolutions team performing four test jobs under field diagnostic conditions experienced the reorientation cost directly. Without that experience, the structural failure can be described but not fully diagnosed: the problem is visible as "users lose context when switching between checks," but the design implication — that the sequence itself must be encoded in the navigation structure — requires understanding what it costs to reconstruct that sequence from a module-based starting point.

The screen-by-screen outcome definition used during Concept Convergence then holds the task-based standard throughout Iterative System Building. Each screen is evaluated against the question of what decision the user should be able to take at that moment — which means each screen must communicate task position, not only module contents. This is the design principle that encodes the sequence in the structure: when the interface's own organisation represents the workflow, reorientation after any interruption or context switch becomes a matter of reading the current screen rather than reconstructing a mental model from scratch.

Cross-platform consistency in the Iterative System Building phase extends this to multi-device environments. The consistent conceptual model across handheld, laptop, and mobile surfaces means that surface transitions preserve orientation rather than resetting it.

The Squaremind case extends the method's application to sequential physical processes. Where task-aligned navigation is the structural response to module-based reorientation failure, active re-entry guidance at every step is the structural response to physical process reorientation failure. The Inform–Prevent–Correct framework is the instrument: it specifies what the system must communicate at each step when a user's state has deviated — not just that something is wrong, but how to return to the correct state and what happens after a successful correction. The reorientation requirement is addressed by design rather than left to the user's own reconstruction.

---

## Evidence to draw on

### Raymarine (a measured interruption-resumption comparison on a bench prototype)

- The client is named **Raymarine**; its existing fixed-mount VHF line — **Ray53, Ray63 and Ray73** — may be named. The new radio's name may not be used in any form: write "the new radio" or "the next-generation fixed-mount VHF". **No quotation marks and no reported speech on any page carrying Raymarine**; attribute positions to the role and the artefact.
- **Resumed the interrupted task unassisted: seven of eight. Median resumption time 12.60 seconds across all eight attempts, 12.00 seconds across the seven unassisted recoveries.** **Both denominators appear in the records and both must be carried — they measure different things, and collapsing to one loses the honesty that makes the figure worth citing.** (R81)
- **Recognised the risk event and classified it correctly: seven of eight. Median recognition latency 3.60 seconds, range 2.1 to 8.2 seconds.** One occasional operator first described the warning as a general system notification. (R82)
- **One occasional operator resumed onto an adjacent list row after the list had refreshed** — the page's argument in one observation: resumption without validation substitutes a plausible position for the real one.
- Then the mechanism (R127): **an interruption stores a structured snapshot and restores it conditionally.** The origin screen, the focused item's identity, list position, plot scale, uncommitted draft values, the actual transaction status and the live channel are all captured. On return, each is validated: a still-valid target is restored; **an expired one produces an explicit unavailable state rather than a substitution**; an uncommitted settings value is restored or its loss is explained. **No unsent action is ever replayed.** A restored call draft requires a new deliberate send.
- **Mandatory framing for the measured findings:** Creative Navy designed the test protocols, moderated all twenty-four sessions and analysed the results. Raymarine supplied the physical bench mockup on which the sessions ran. Each comparison was paired and counterbalanced within participants, with task wording, target data and starting states held constant. **The findings describe operator behaviour on a prototype against a fixed scenario fixture. They are not a measure of radio performance, of real-world calling accuracy, or of outcomes at sea.**
- **Eighteen people, not twenty-four**: six participants took part in two rounds, and returners must never be counted as new people. Eight participants per round, purposively recruited, no significance testing; no percentages beyond the counts as written and no prevalence claims. **Cohort patterns — the residual errors clustering among occasional users — are observational; describe the pattern, do not explain it.**
- **The field conditions were named by the client and were not tested** (R90): wet hands and gloves, glare and night sailing, vibration, ambient noise and divided attention. The research establishes what operators understood and could do with a prototype on a bench; it says nothing about what happens at a helm.

### Maritime VTS (interruption and investigation context loss across a two-display workstation)

- The client is **a European vendor of maritime traffic monitoring, inland navigation and communications software for port authorities, coastal administrations and waterway operators**. Use that locked descriptor near-identically; a shortened form — "the maritime software vendor" — only after the locked descriptor has appeared in the passage. **No quotation marks and no reported speech on any page carrying this engagement**; attribute positions to the role and the artefact. Vessel Traffic Services (VTS) may be named as a sector term.
- **Context.** A movable vessel-details window could cover the cluster of targets the operator had opened it to investigate. An operator was observed repositioning the panel to reveal targets it had concealed. At dense zoom, labels and temporary content converged on the point of inspection. Layer filters could reset on return from an investigation, so an operator could read a changed traffic picture as the one previously configured. An active object reference could be lost after switching supporting layers, and the two displays could lose a shared active object. (W41)
- **Interaction mechanics were treated as system behaviours, not cosmetics.** Routine target selection relied on pointer routes; keyboard focus could disappear after a temporary inspection; hover and selection both highlighted dense targets; some actions disclosed an authorisation problem only after the user had initiated them. (W48)
- **The dockable inspector, chosen over two alternatives that each had a real advantage.** An unrestricted floating inspector preserved maximum map width when closed and could obscure the selected symbol in dense traffic. A permanently open side panel removed arbitrary occlusion and consumed map width even with no investigation active. The selected contextual dock opens on a predictable edge, follows the selected evidence reference rather than a screen coordinate, collapses without clearing selection, and can move to a permitted secondary display. **The always-open panel was retained as a documented installation option, not deleted.** (W51)
- Field observation happened in **operational VTS control rooms at a customer site**, with the client's end customers' operators — **using sanitised scenarios rather than live traffic**, and no participant carried live traffic responsibility during a session. Do not locate the control rooms, and never name the country.

---

## What this page must not claim

- Raymarine's figures are bench measurements on a prototype: no safety, rescue or collision outcome, no field, glove, glare or vibration claim, no statistical language, and no percentage beyond the counts as written. The radio was built and released — never "shipped as designed"; no fidelity comparison is recorded.
- Never collapse R81's two denominators into one figure, and never count the twenty-four sessions as twenty-four people.
- The maritime VTS client is identified only by the locked descriptor; the placeholder company name used in the engagement's source documents is not the client's name and must never appear. Do not locate the control rooms. W41 and W48 are audit observations of the existing software; the dockable inspector describes what was designed, not a measured effect.
- No quotation marks and no reported speech for Raymarine or the maritime VTS engagement.
- Never blend the two engagements: Raymarine's resumption figures were measured on a bench; the VTS engagement's interruption material is field observation plus design response, and its own measured study is not cited on this page.

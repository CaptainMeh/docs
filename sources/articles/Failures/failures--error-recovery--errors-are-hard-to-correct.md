# `/failures/error-and-recovery-failures/errors-are-hard-to-correct`

---

## What the failure is

Error correction has several components, each of which can fail independently: localising the error (where did it occur?), understanding the correct state (what should it be instead?), taking the correction action (how do I change it?), and confirming that correction was successful (how do I know it's now correct?). When any component is unclear, the correction process becomes longer, more effortful, and more error-prone than the original error warranted.

This failure is distinct from recovery-paths-are-weak, which concerns the absence of recovery structures. This failure concerns the correction process when structures nominally exist but are inadequate — the user is trying to correct, the interface is not supporting the attempt.

---

## Distinguish from adjacent failures

**Errors-are-hard-to-notice** — that failure concerns detection of errors. This failure concerns correction after detection. The two are sequential: hard-to-notice errors often compound into hard-to-correct situations because the temporal gap allows the error to propagate.

**Recovery-paths-are-weak** — that failure concerns the structural absence of recovery support. This failure concerns correction difficulty even where recovery structures exist.

---

## What produces this failure

**Error localisation failure** — the user knows an error has occurred but cannot determine where in the workflow, configuration, or dataset it happened. Correction requires knowing what to fix; without localisation, the user must either search the entire system or guess. This is the dominant component of the Gexcon corrective load reduction.

**No explicit undo path** — the system has no direct reversal mechanism for the error category. The user cannot undo; they must reconstruct the correct state manually from the current incorrect state. In complex configurations, this requires understanding the entire dependency chain of the error.

**Correction-side-effect errors** — the action required to correct the error changes other elements the user didn't intend to change. Correcting one field in a complex configuration changes dependent fields; correcting one policy rule changes interactions with other rules; correcting a parameter changes outputs the user had already verified. Correction creates new errors, extending the correction cycle indefinitely.

**Uncertain correction confirmation** — after taking the correction action, the user cannot tell whether the correction was successful. The system has been changed; whether the change achieved the intended correction is not confirmed. The user either re-investigates (overhead) or accepts uncertainty (risk of propagating the remaining error).

**Prior state not visible** — correction to "the right state" requires knowing what that state was. When the system doesn't surface the prior state — the value before the error, the configuration before the change, the sequence before the interruption — the user must reconstruct it from external sources or from memory.

---

## Recovery across a handover

In operations that run in shifts, the person who must resolve an error is routinely not the person who made it. Recovery designed around a single user assumes continuity of attention that the operation does not provide: the error is detected after the operator has left, and the next person into the area inherits a state they did not create and cannot interpret. Designing for this means the recovery path must carry its own explanation — what the system detected, against what was asked for — rather than relying on the memory of whoever acted.

---

## Domain vocabulary

- Error localisation — identifying where in the system or workflow an error occurred; the prerequisite for targeted correction
- Undo path — the sequence of interface actions that reverses an error and restores the prior state
- Correction confirmation — the signal that corrective action was successful; the state is now what was intended
- Correction side effects — unintended changes to other parts of the system caused by the correction action
- Correction overhead — the time and cognitive effort required to correct a detected error; what this failure amplifies beyond the minimum warranted
- Prior state visibility — the interface's ability to show what the correct state was before the error; essential for reconstruction-type correction

---

## Evidence from case studies

**Gexcon CFD simulation — error localisation as the dominant correction cost:**
Before the redesign, when a configuration error was detected in simulation outputs, the correction process required: identifying which of the many configuration parameters was responsible (error localisation); understanding what value should have been set (correct state identification); making the change (correction action); re-running the simulation (correction verification). Without interface support for the first step, the localisation alone consumed the majority of the 4–6 hour corrective load. The error message communicated that something was wrong; it did not communicate where or what. **After the redesign, corrective load fell to approximately 20 minutes (measured by Gexcon across real deployments).** The dominant mechanism was localisation support: the redesigned error communication specified what was wrong and where in the configuration, reducing the diagnostic component from hours to minutes. The correction action itself (changing a configuration value) was always fast; what was expensive was finding the right value to change.

**Kardion MCS Controller — correction sequence in alarm states:**
Alarm acknowledgement requires a specific sequence: perceive the alarm → understand what it means → take the appropriate clinical action → acknowledge the alarm → confirm the condition has resolved. Each step in this sequence must be explicitly supported by the interface. An alarm that is muted but not acknowledged, or acknowledged but whose resolution is not confirmed, leaves the correction sequence incomplete without the user knowing. The alarm architecture required explicit design of what constitutes a completed correction sequence — including the confirmation step that the condition is resolved, not just the acknowledgement that the alarm was noticed. Muted alarms remaining visible was specifically the interface mechanism that prevented incomplete correction sequences from being invisible.

**Beissbarth automotive calibration — sequence resumption after interruption:**
When a calibration sequence is interrupted by a measurement failure or equipment issue, the technician must resume from the correct point in the sequence. Resumption requires knowing: which steps have been completed and verified (prior state visible), which step failed and why (error localisation), and which steps need to be repeated (correction scope). A sequence state display that showed only the current step without showing completed and upcoming steps left technicians without the information needed to assess correction scope — they might redo steps that had been completed correctly or skip steps that needed repetition.

**Dancerace / Jacko — confirmation friction as correction prevention:**
In a financial portal with irreversible actions, the design response to correction difficulty is not to make correction easier — some actions cannot be reversed — but to prevent the need for correction by making accidental triggering harder. The confirmation patterns for irreversible actions (proportional friction before the action, not undo after) acknowledge this failure mode explicitly: when correction is structurally impossible, the only design response is prevention. This is the boundary case of errors-are-hard-to-correct: where the failure is so severe (irreversibility) that correction is addressed before the error occurs.

**Oceaneering — correction requiring a physical trip, and the recovery that carries its own explanation:**
Oceaneering may be named; nothing else in the engagement may — no hospital, product, system name or individual. Use role descriptors ("the hospital's logistics manager", "a supply-chain supervisor"). **Every client or user position is reported speech, never quoted.** The subject is the dispatch panel: the wall-mounted touchscreen in a logistics depot through which a materials-handling operator puts a cart into an automated hospital transport system. In the system being replaced, recovery from a wrong-cart-type error required a physical trip: staff had to walk to the vehicle and reset it so it would leave — it could not be done from the panel (O35). The designed response is **the wrong-cart-type recovery**: on the panel, the station holding the refused cart can be tapped to read what the vehicle detected against what was selected, the detected type confirmed in one action, and the destination and identity re-entered — so the next person into the depot resolves it without walking to a vehicle and resetting it (O74). This is the handover case above in concrete form: the recovery path states what the system detected against what was asked for, because the person resolving the error is routinely not the person who made it. **The "before" state comes from the predecessor's own specification and from interviews with people adjacent to the users — no operator was interviewed and no depot was visited**, and the design was reviewed with operations managers, not tested: these were design reviews, not usability tests; no task was attempted and nothing was measured.

**Assemblio — no undo at all, and the reversible-action response:**
Assemblio GmbH may be named, and so may the Assemblio Composer and Smart Viewer; its customers may not. In the product as the client described it, **there was no undo** (N48). The designed response: **undo offered in the snack bar** for reversible actions such as move and rename (N82) — a feature the engagement record marks as client-requested, a marker that is unconfirmed at item level. Assemblio's account of its own product is **client-stated, not observed** — attribute it ("Assemblio described…") and never blend it with field observation.

**Egma — the refusal that named the problem and not the cause:**
Egma may be named in full, and so may **Egma Order**, Egma's B2B lens ordering platform. The clearest account of the correction failure in that engagement came from the support team's worked example: an optometrist tried to order a pair of reading lenses, went through half the steps, and was then told *"Lenses with your selected shape cannot be produced. Please choose a different shape."* The patient did not want a different lens shape, and the optometrist could not work out which of a dozen earlier parameters to change to allow the intended shape — so they created a support ticket instead of an order, and the support team placed the order on their behalf (G25). The refusal named the problem and not the cause; correction was impossible because localisation was. The designed answer tells the user the cost of a correction before they make it: **cascade invalidation, warned before it happens** — when a user edits a completed earlier section, the interface states, before the change is committed, that all subsequent sections will be emptied, and offers apply-change or discard (G43). The platform is live and **nothing about it was measured**: no support-ticket movement, no order-completion rate, no outcome of any kind.

**visioncheckout — the Corrector: correction designed as a product surface rather than an error branch:**
visioncheckout may be named, lowercase, glossed as "a German vendor of computer-vision self-checkout systems for staff restaurants and catering"; no customer names; client positions **reported, never quoted**. The product is in development and nothing has shipped. The Corrector's decisions (V74–V82): **numbered markers on the tray image matched to a numbered list**, after connecting lines were rejected as messy and hard to implement cleanly and overlaid text labels were rejected as too small to read in bright light (V74); **thumbnails required in the catalogue**, because item names are frequently not meaningful enough to identify a dish without an image (V75); **sidebar category navigation**, with multi-row top-tab overflow rejected, especially under dual language, because it grows too tall and obscures content when the bottom bar appears (V76); **search deliberately de-emphasised** so scrolling thumbnails is the primary path, with search remaining for staff (V77); **scrolling preferred over pagination**, the touchscreen being responsive enough (V78); **auto-cycling variant thumbnails ruled out** on accessibility grounds and as visual noise, leaving the one-POS-item-to-many-visual-variants problem explicitly unresolved rather than papered over (V79); **entry to the Corrector deliberately understated** — a tertiary edit control near the basket header, with rescan remaining the primary action — so correction is available without being proposed as the normal next step (V80); **rescan flagged as destructive**, discarding all state including corrections already made, with a two-step confirmation recommended wherever corrections exist (V81); and the governing principle for Selections, Extras and the Corrector: **present the interaction as "confirm this", not as "fix this"** — no warning palette on selection screens, and the same visual pattern for a selection prompt and a corrector candidate list so the guest learns one pattern (V82). The competitive argument for why correction is the durable asset rather than the error path: published recognition-accuracy claims in this category are vendor-reported, methodologically heterogeneous and rarely independently replicated, and recognition degrades most on mixed, plated food — **cite no accuracy number for any named product** — while published self-checkout operations research finds roughly one help call to staff per ten self-checkout transactions, establishing intervention as a routine load rather than an edge case. The correction path is the product.

---

## What this page must not claim

- Oceaneering: reported speech only, never quotation marks; no hospital, product or individual names; no efficiency, error-rate or dispatch-volume outcome — nothing was measured; O13–O17 were design reviews, not usability tests, and no dispatch operator took part; the dispatch panel is hospital logistics infrastructure, never medical-device work.
- Assemblio: client-stated product descriptions are attributed, never blended with observation; no time-saving, error-rate or adoption figure, including Assemblio's own marketing claims.
- Egma: no post-launch measurement of any kind — no support-ticket volume, no order-completion rate; no claim that support tickets fell; G24/G25 establish the problem, nothing establishes the result.
- visioncheckout: no throughput, speed, error-rate or accuracy outcome from the redesign; nothing has shipped and nothing was tested; no competitor recognition-accuracy figure presented as measured truth; no percentage attached to field observations.
- Never let facts migrate between these engagements, and never attach "testing" to any of them on this page.

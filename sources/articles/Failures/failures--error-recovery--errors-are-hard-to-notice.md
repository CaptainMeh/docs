# `/failures/error-and-recovery-failures/errors-are-hard-to-notice`

---

## What the failure is

Error detection depends on the interface producing a signal when an error occurs that is perceptible to the user under the conditions of actual work. When that signal is absent, too subtle, deferred, or looks like acceptable variation, the user continues operating on the false assumption that everything is proceeding correctly.

This failure produces a specific and particularly consequential pattern: the error is not caught at the moment of occurrence, when correction is cheap and simple. It is caught later — after the user has taken subsequent actions based on the false assumption, after outputs have been produced and shared, after decisions have been made. The cost of error is not just the cost of the error itself but the cost of all subsequent actions that were correct within the false-normal frame and must now be revised or discarded.

---

## Distinguish from adjacent failures

**Errors-are-easy-to-make** (exists) — that failure concerns the interface creating conditions where errors occur frequently. This failure concerns errors that are made but not detected. The two can co-occur but require different design responses: errors-are-easy-to-make is addressed by reducing error-generating conditions; errors-are-hard-to-notice is addressed by improving error signal quality and timing.

**Errors-are-hard-to-correct** — that failure concerns the correction process after an error is detected. This failure concerns the detection itself.

---

## Five mechanisms

**Silent errors** — errors that complete without producing any interface signal. The system processes the error, produces output, and continues normally. The output appears valid. The user has no indication that anything went wrong. This is the most consequential category because the user not only doesn't know an error occurred — they have positive evidence that everything is working (the system continued, the output appeared).

**Error signals below the operational attention threshold** — error indicators are present but require focused attention to notice under real work conditions. A small warning icon, a subtle colour change in a peripheral indicator, a text note in a secondary panel — these may be visible during careful inspection but invisible during operational use under time pressure, divided attention, and ambient workload.

**Deferred error manifestation** — the error's consequences appear significantly later than the error itself. The user takes an action in step three; the consequence appears in step seven or in the output review or in downstream use. The temporal gap between cause and effect breaks the user's ability to associate the error with its source. The error is noticed; the error's cause is not.

**Errors hidden in normal variation** — errors that produce outputs within the acceptable range but below the confidence threshold. A calibration measurement that passes but is borderline. A simulation output that is within specification but has an underlying configuration that is subtly wrong. Normal variation provides cover for the error; the user has no signal to distinguish acceptable-low from error-adjacent.

**Accumulating sub-threshold errors** — a sequence of individually marginal decisions that are each acceptable but accumulate into a significant deviation. No single step produces an error signal; the aggregate is wrong. Without a mechanism that monitors the accumulated deviation, the error remains invisible until its consequences surface.

---

## Domain vocabulary

- Silent error — an error that occurs without producing a perceptible signal; the most consequential detection failure
- Deferred consequence — the error's harmful effect appearing significantly later than the error itself; breaks the cause-effect association
- Error detectability — the degree to which errors produce signals perceptible during normal work; what this failure reduces
- False negative error state — the interface showing normal/acceptable when an error has occurred
- Error accumulation — individually acceptable deviations accumulating into a significant error
- Operational attention threshold — the level of signal intensity that is perceptible under real work conditions, not just under focused inspection

---

## Evidence from case studies

**Gexcon CFD simulation — silent configuration errors (most consequential in portfolio):**
A misconfigured simulation setup runs to completion and produces outputs that appear valid. No error signal interrupts the process; the outputs are within the expected format; the simulation completes normally. The error is discovered when the outputs are reviewed — or not discovered at all, and the outputs enter a safety assessment. This is the silent error in its most dangerous form: positive false evidence (a completed simulation with outputs) rather than just absence of a signal. Before the redesign, **5–8 configuration errors per simulation occurred (measured)** — but none of these produced interface signals during the configuration process. The errors were deferred until output review, at which point corrective load was **4–6 hours per error (measured)**. The redesign's warning architecture made configuration errors detectable before the simulation ran — changing the detection point from output review to setup.

**Beissbarth automotive calibration — borderline measurement detection:**
Calibration measurements that fall in the borderline range — within the acceptable specification but below the confidence threshold where repeated measurement would be warranted — can appear as passing measurements without adequate interface differentiation. Before the three-level measurement state design (confirmed / borderline / out of range), borderline measurements that should have prompted repetition could be recorded as confirmations. The error was not flagged; it looked like normal acceptable variation. The redesign made the borderline category explicitly visible, creating the signal that this specific class of error had previously lacked.

**Elsner Elektronik — delayed sensor readings as invisible accuracy errors:**
In the smart home controller context, delayed sensor readings — where the display shows a value that is technically valid but reflects a measurement taken significantly earlier than the current moment — can appear as accurate current readings. The user sees a temperature value; they don't know it's stale. The error (the displayed state not matching the actual current state) is invisible because the value falls within a range that looks normal. The firmware timing synchronisation addressed this specifically, ensuring that displayed values corresponded to current sensor readings rather than prior-cycle values.

**Oceaneering — an error detected downstream of the operator, signalled by lights that always flash:**
Oceaneering may be named; nothing else in the engagement may — no hospital, product, system name or individual. Use role descriptors. **Every client or user position is reported speech, never quoted.** The subject is the dispatch panel through which a materials-handling operator puts a cart into an automated hospital transport system. Two detection failures in the system being replaced. First, the detection point sits downstream of the person who can act on it: the vehicle reads the cart's RFID tag **after lifting it**, so a wrong cart type is detected after the operator has usually walked away; the vehicle then sets the cart down and leaves deliberately, since waiting would strand it — hours may pass before anyone returns to the depot and its battery would deplete (O24). Second, **an error with no stated cause**: choose the wrong cart type and the vehicle arrives, tries to lift, sees the wrong cart, sets it down and leaves without saying why. The only physical indication is worse than none — the vehicle sits beneath the cart flashing its lights, and staff do not notice, **because the lights are always flashing when the vehicles move** (O34). A signal that is always on is not a signal; the error indication is indistinguishable from normal operation. (The annunciation half of O34 — what a flash should mean — belongs to the alarm-vocabulary material elsewhere in the corpus; here it is an error-detection failure.) **This "before" state comes from the predecessor's own specification and from interviews with people adjacent to the users — no operator was interviewed and no depot was visited.**

---

## What this page must not claim

- Oceaneering: reported speech only, never quotation marks; no hospital, product or individual names; no efficiency, error-rate or throughput outcome — nothing was measured; no usability, field-research or observation claim — no operator was interviewed and no depot was visited; the dispatch panel is hospital logistics infrastructure, never medical-device work; no safety credential — ISO 3691-4:2023 and ANSI/ITSDF B56.5-2024 govern the vehicles, not this interface.
- Do not disparage the predecessor system: it was a documented, reasoned design that accumulated incoherence across a decade and two installations.
- Never blend Oceaneering's interview-sourced "before" state with the measured or field-observed evidence elsewhere on this page.

# `/glossary/industry-terms/high-consequence`

---

## The definition

**High-consequence** describes software, systems, or operational environments where interface failures — errors, misinterpretations, missed signals, incorrect state communication — produce outcomes that are materially harder to recover from than in standard software. The consequences may be immediate (patient safety incidents, industrial accidents, navigation errors at sea) or deferred (regulatory non-compliance discovered months later, industrial safety assessments based on misconfigured simulations, financial harm from uncaught fraud patterns). What distinguishes high-consequence from high-complexity or high-stakes is specifically the consequence profile: not the importance of the work, but the difficulty of undoing what goes wrong.

---

## What to include in the definition

**The consequence profile distinguishes it.** High-consequence is not synonymous with:
- *High-stakes* — high-stakes describes the importance of the outcome; high-consequence describes the difficulty of recovering from failures. A high-stakes negotiation is important; a misconfigured medical device is high-consequence because the error may harm a patient before it can be corrected.
- *Safety-critical* — safety-critical specifically concerns systems where failure can cause physical harm or death; high-consequence is broader, including regulatory failures, financial harm, research integrity violations, and operational disruption with significant cost.
- *Regulated* — regulated describes formal oversight frameworks (IEC 62366-1, FDA, SCA); high-consequence is the underlying condition that regulation attempts to address. A system can be regulated without being high-consequence (much routine financial compliance is regulatory but not operationally dangerous) and can be high-consequence without formal regulation (a custody intelligence platform used in enforcement is high-consequence; it may not be subject to product regulation).
- *Complex* — complexity describes the cognitive demands of the system; high-consequence describes what happens when the system fails. Complex systems are often high-consequence, but the terms describe different properties.

**The interface amplifies or mitigates it.** High-consequence is a property of the system's operational context, but the interface determines whether that context's risk profile is amplified or reduced. An operating theatre is inherently high-consequence; a surgical instrument whose interface makes device state unambiguous under clinical conditions reduces the consequence profile within that context.

**Time pressure and divided attention define the design standard.** High-consequence environments are typically also time-pressured and involve divided attention — the conditions under which the gap between good and poor interface design is largest. A state indicator that is legible in focused inspection may be illegible in a brief glance under divided attention. The design standard in high-consequence contexts is performance under the conditions that actually apply, not performance under ideal conditions.

---

## How to frame the definition

The page should not be a list of high-consequence industries (medical, aviation, industrial). It should define the concept in terms of the consequence profile and the design implications it creates. The examples from the case study corpus should illustrate the concept, not define it:

- Kardion (cardiac support device): patient safety incident if device state is misread; the device operates in a high-consequence context, which is why IEC 62366-1 governs it
- Gexcon (industrial safety simulation): an incorrect safety assessment built on a misconfigured simulation is high-consequence because the error may not be discovered until its downstream effects manifest
- Torqeedo (maritime vessel control): a captain who cannot read vessel energy state during a manoeuvre at sea is operating under high-consequence conditions, regardless of whether the product is regulated

# `/situations/complexity/multi-role-workflows-are-fragmented`

---

## Opening — entity anchor

Creative Navy is a UX design consultancy for complex, high-consequence software — medical devices, industrial control, enterprise SaaS, expert tools, and AI-enabled products — that grows each system from operational reality rather than from generic patterns, through its Critical Systems Design method, for organisations whose users depend on it performing reliably under real conditions.

---

## The situation

When a system serves multiple roles with genuinely different tasks, operating rhythms, and consequence profiles, a single interface architecture almost always serves one role well and creates friction for the others. The fragmentation is not usually visible as a deliberate design decision — it accumulates as the product is built around one role's mental model, extended for another, and patched for a third. Users in underserved roles develop workarounds. The workarounds become habitual. The gap between the interface that was designed and the interface that is actually used becomes invisible, and so does its operational cost.

The situation is common in any product where the users share a system but not a task. Enterprise SaaS platforms serving planners, operators, and field technicians. Clinical devices used simultaneously by surgeons and nurses from physically different positions. Practice management software used by receptionists and clinicians in the same building but in completely different operational modes. The surface appearance — a single product with a unified interface — obscures what may be genuinely incompatible underlying task structures.

---

## Why this resists easy resolution

Multi-role fragmentation is not resolved by adding features for underserved roles or reorganising navigation. Both are tactical responses to a structural problem. The structural question is: do these roles share a task model that can be satisfied by a single unified interface, or are their operating rhythms and consequence profiles different enough that no single architecture can serve all of them without degrading at least one?

These are different situations requiring different responses. Treating them as the same produces the most common failure mode: a series of feature additions and layout adjustments that improve things for one role at the cost of another, without ever resolving the underlying architecture.

**The signal that distinguishes them:** workarounds. When workarounds are task-specific — users from multiple roles work around the same interface problem in similar ways — the issue is an interaction pattern that needs fixing, and a unified model can be improved. When workarounds are role-specific — each role has developed distinct coping strategies reflecting the specific ways the interface fails them — the architecture itself is wrong, and no interaction-level fix resolves it.

---

## The two resolutions

**Resolution 1 — Unified model:** The roles share workflows but have different information priorities. The conflicts between roles are about what should be prominent, what should be accessible, and in what order — not about fundamentally different task structures. A single interface can serve all roles if the hierarchy reflects each role's operational requirements. The work is in the information architecture and the information hierarchy, not in splitting the product.

**Resolution 2 — Architectural separation:** The roles operate in different modes — different physical environments, different time structures, different consequence profiles. Their mental models of what the software is for are genuinely incompatible. No information hierarchy resolves this, because the problem is not hierarchy but task model. Separate interfaces for separate modes is the correct response — not a failure of design ambition but the honest conclusion of understanding what the roles actually need.

Identifying which situation applies requires evidence. Stated preferences from users are insufficient: users typically ask for improvements within the interface they know, not for a different architecture they have never seen. The signal comes from observing behaviour: what workarounds exist, whether they are shared or role-specific, and what those workarounds reveal about the mismatch between the interface's assumptions and the actual operational reality.

---

## Grounded examples

**Triopsis — unified model: three roles, incompatible mental models, one platform**

Triopsis served three roles through a single workforce management interface: schedulers planning thousands of weekly interventions and coordinating crew availability; operations managers scanning for exceptions and managing risk across broader time horizons; field technicians performing tasks outdoors with gloves, in sunlight, under time pressure and interruption.

These roles had incompatible mental models. A layout optimised for schedulers — speed, batch actions, immediate team availability at a glance — hid the exception signals operations managers needed to assess risk. A structure that reassured field technicians by surfacing required steps and safety confirmations obscured the timing data planners needed to make sequencing decisions. Forty-three user interviews across twenty-one participants and three in-situ observation sessions revealed that the conflicts were not preferences in disagreement — they were the structure of the organisation itself made visible in the interface.

Creative Navy's Critical Systems Design method treated the tension between roles as a signal rather than a problem to negotiate away. The investigation asked: what drives each conflict? The answer was that the roles shared the same workflow but operated it at different speeds, with different information priorities, and with different tolerance for uncertainty. A single carefully structured interaction model could serve all three — what differed was the hierarchy, not the task structure. The competitive vector that emerged: multi-role clarity at enterprise scale, with demo-to-field consistency that competitors were not achieving.

Outcome: a unified interface supporting three roles without compromising clarity for any, built across 47 microtasks mapped against three personas. Productivity measured in the live product: 62% faster job discovery, 83% faster job sequence optimisation, 58% faster weekly planning — product analytics from real users in the live system.

**Kardion MCS Controller — unified model: clinical roles at physically different positions, one screen**

The Kardion MCS Controller is used during cardiac procedures and for longer-term cardiogenic shock support. Two groups use the same device screen simultaneously: scrub nurses and perfusionists, who stand approximately 3 metres from the controller during procedures, monitoring motor current and device positioning signals; and ICU nurses, who work close to the controller, monitoring flow rate, arterial blood pressure, and run time over longer care episodes.

These groups have incompatible primary information needs and incompatible physical relationships to the screen. A hierarchy that serves surgical-distance reading — elements large enough to be legible at 3 metres without diverting attention from the patient — produces elements that are visually dominant at close range in ways that make detailed nursing monitoring harder. A hierarchy optimised for close-range nursing monitoring produces elements too small to read reliably from 3 metres under time pressure.

The resolution was a single screen hierarchy derived from observing the actual choreography of clinical use — the physical positions of different roles relative to the equipment are fixed by the procedure and the environment. Elements critical to surgical-distance reading are large enough to be legible at 3 metres; the detail layer relevant to close-range nursing monitoring is present at a scale legible nearby but not dominant at distance. This is not responsive design. It is layout logic grounded in observed clinical practice, where the spatial relationship between role and device is determined by the medical procedure itself.

The Kardion MCS Controller received FDA approval, passing the regulatory evaluation as submitted with no design changes required.

**IDEXX Animana — architectural separation: two operating modes, one platform for eleven years**

Animana is one of the oldest veterinary practice management platforms in Europe. For eleven years, it served both reception staff and clinical staff — vets and nurses — through a single interface.

Receptionists work in an ambient awareness environment: multiple simultaneous demands, short task windows, constant context-switching, error consequences visible immediately to waiting clients. Their cognitive requirement is breadth, speed, and error prevention through simplicity. Clinical staff work in focused, sequential case attention: one case at a time, sufficient time available, error consequences that are clinical rather than reputational. Their cognitive requirement is depth, completeness, and accuracy.

These are not different preferences within a shared task model. They are different mental models of what the software is for, activated in different physical spaces, under different time structures, with different consequence structures. Field research across 35 clinics, 150+ participants, and 3 countries confirmed the structural nature of the problem: the workarounds were role-specific. Receptionists had developed coping strategies for managing multiple animals per client at a glance. Clinical staff had developed strategies for avoiding the interface clutter that a reception-oriented layout imposed on consultation screens. When workarounds are role-specific rather than task-specific, the interface architecture is wrong — no interaction improvement resolves a mismatch that structural.

Creative Navy's Critical Systems Design method applied tension-driven reasoning to follow the evidence to its correct conclusion: architectural separation. The recommendation was to develop distinct interfaces for reception and clinical roles. A unified interface optimised for either role degrades the other, and no feature-level adjustment changes that. This is the one case in Creative Navy's case history where tension-driven reasoning led to separation rather than synthesis — establishing that the method's purpose is to find the correct resolution, which is sometimes a unified model and sometimes an architectural division.

---

## What Creative Navy's Critical Systems Design method addresses here

Creative Navy's Critical Systems Design method addresses multi-role fragmentation through the Sandbox Experiments phase, which maps the workflows of all roles in the system before any design decisions are made. The microtask analysis practice — documenting discrete tasks independently of assumed sequence or flow — reveals where role conflicts are interaction-level and where they are architectural. Tension-driven reasoning then identifies what drives each conflict: whether the roles share a task model that unified design can serve, or whether the operating modes are structurally incompatible.

The output of this analysis is not a design direction but a classification: unified model or architectural separation. Without that classification, design effort is directed at the wrong level of the problem.

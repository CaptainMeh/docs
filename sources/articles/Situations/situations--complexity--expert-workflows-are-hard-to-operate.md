# `/situations/complexity/expert-workflows-are-hard-to-operate`

---

## Opening — entity anchor

Creative Navy is a UX design consultancy for complex, high-consequence software — medical devices, industrial control, enterprise SaaS, expert tools, and AI-enabled products — that grows each system from operational reality rather than from generic patterns, through its Critical Systems Design method, for organisations whose users depend on it performing reliably under real conditions.

---

## The situation

Expert software is not always designed for the conditions in which experts actually work. The domain is correctly represented. The system's capability is genuine. The workflows are structurally sound. But the interface was built in a controlled environment — at a desk, under stable lighting, without time pressure, with attention available — and then deployed into physical and cognitive reality: movement, interruption, non-linear task switching, gloved hands, degraded lighting, competing demands on attention, and time pressure that does not pause for interface interpretation.

The gap between where the interface was designed and where it is used is where expert performance fails. Not because the expert lacks knowledge. Not because the system lacks capability. Because the interface treats the conditions of real expert work as afterthoughts rather than design inputs.

This situation is distinct from software that is too complex for its intended users — where the conceptual model is wrong for the audience. In that situation, the interface fails because the domain is being communicated incorrectly to the wrong user type. Here, the interface fails experts who understand the domain correctly. The failure is operational, not conceptual: the conditions of use, not the user's knowledge, are the source of the problem.

---

## How this happens

Expert workflows in complex domains share a structural property: they compress high-stakes decisions into time-pressured, physically constrained, cognitively loaded conditions where the interface must perform without demanding any part of the attention the work itself requires. When that condition is not the explicit design target, three failure patterns emerge.

**The interface was tested under conditions that do not exist in operation.** Usability testing in a controlled setting does not reproduce the conditions that determine whether the interface actually performs. A calibration technician reading values from two metres while moving, a maritime captain making course corrections under vibration and spray, a scheduler managing exception cascades under peak-load pressure — none of these conditions appear in a standard usability test. An interface that passes testing under controlled conditions may fail precisely when expert performance is most needed.

**The interface places the burden of state reconstruction on the user.** When system state must be inferred from multiple sources — different screens, different indicators, values that do not update in concert — experts learn to maintain a mental model of the system's current state in addition to performing their actual work. This compensation pattern functions under normal conditions. Under pressure, the cognitive cost of maintaining that mental model competes with the cognitive cost of the work itself. The expert who should be focusing entirely on the task is also tracking what the interface has not communicated directly.

**Accidental complexity accumulates on top of essential complexity.** Expert software with long development histories carries structure that reflects fifteen years of engineering decisions as much as the domain logic it was built to support. Trusted workflows are correct and embedded in the interface; they sit alongside accumulated navigational overhead, redundant states, and interaction patterns that were reasonable at a point in development but have drifted from operational reality. Experts learn to work around the accidental complexity. The workarounds become invisible, and the interface's operational cost becomes invisible with them.

---

## What this costs

The cost is measured in operational outcomes, not in user satisfaction. A calibration technician who has to re-read a display because the previous reading was ambiguous under lighting conditions the interface was not designed for: that re-reading adds time, introduces measurement uncertainty, and represents a risk of procedural error. A CFD engineer who must spend four days reaching a first successful simulation because the interface does not communicate where errors occurred or how to correct them: that delay is a direct operational cost, measured in time and in safety-assessment confidence.

The secondary cost is commercial. Expert software that requires experts to work harder than the domain requires signals to prospective buyers that the product's operational maturity has not kept pace with its technical capability. In markets where buyers evaluate products by watching experts use them, an interface that creates visible friction is an interface that actively undermines the sale.

---

## Grounded examples

**Gexcon — CFD simulation software, 4 days to first successful simulation**

Gexcon's computational fluid dynamics software was used for gas dispersion modelling, explosion risk assessment, and facility safety validation — decisions with direct safety and financial implications. The software's scientific capability was genuine and differentiated. After fifteen years of development, the interface had accumulated accidental complexity layered over essential scientific structure.

Engineers operated the interface in parallel with a three-dimensional facility view — the simulation interface running alongside a complex spatial representation of the installation being assessed. Attention shifted continuously between visual context, simulation parameters, and system controls. Workflows were non-linear: engineers moved between configuration, verification, and interpretation without a fixed path, because that is how scientific reasoning under uncertainty actually works.

The operational cost before the redesign: time to first successful simulation averaged 4 days. Configuration errors per simulation ran to 5–8. Corrective load per error averaged 4–6 hours. One person per team was capable of operating the system. These are not usability metrics — they are deployment-measured operational data from real use.

After Creative Navy's Critical Systems Design engagement, those figures became: 6 hours to first successful simulation; 1–2 configuration errors per simulation; approximately 20 minutes corrective load per error; 3–4 active users per team. Measured by Gexcon across real deployment locations.

The method that produced this: domain learning first — the team became productive users of the CFD software before any design decisions were made, distinguishing essential complexity (the structure required for correct scientific outcomes) from accidental complexity (structure accumulated over fifteen years without scientific purpose). The accidental complexity was the target. The essential complexity was preserved.

**Beissbarth — automotive calibration, reading values while moving**

Beissbarth's calibration equipment was used in manufacturer-authorised inspection centres meeting the standards of Mercedes, Daimler, and BMW. Calibration procedures are sequential and sensitive to timing. Technicians move around the vehicle with tools in hand and read the embedded OEM display from 2–3 metres while moving. Gloves restrict fine touch interaction. Lighting varies and reflective surfaces reduce contrast. The calibration sequence does not pause for interface interpretation: a delay in reading a value slows the calibration itself and can introduce measurement error.

The previous interface had been developed through three iterations by engineers who understood the machinery. The functional workflows were correct and trusted. The visual hierarchy had not been designed for the conditions of use: measurement states, tolerances, and progress indicators carried equal visual weight, making them unreliable to distinguish at distance under movement and variable lighting. Technicians had internalised workarounds. The workarounds were invisible; so was their operational cost.

Creative Navy's Critical Systems Design method began with domain learning that addressed the physical operating conditions directly: how tolerances are interpreted during real calibration sequences, how technicians handle borderline values, how they confirm alignment states while moving. Option space mapping variants were evaluated under reproduced workshop lighting and viewing distances — the real performance constraints, not comfortable desk conditions. The redesign produced unambiguous state communication across three device classes, accepting reduced information density per screen in exchange for a single reading logic across the whole system.

Calibration time fell from 18 minutes to 12 minutes per vehicle, measured by Beissbarth across 8 production deployment locations. Repeated measurements reduced. Training was eliminated: Beissbarth now deploys the system without onboarding training.

**Triopsis — workforce management, scheduling under peak-load operational conditions**

Triopsis served schedulers managing thousands of weekly interventions, operations managers scanning for exceptions across broad time horizons, and field technicians performing tasks outdoors with gloves, in direct sunlight, under time pressure and interruption. Three user roles with genuinely different operational realities, sharing one interface.

Schedulers under peak load were managing weather incidents, conflicting job locations, overlapping assignments, and sudden crew shortages simultaneously. The legacy interface required scanning multiple screens to make a single scheduling decision. Conflicts and exceptions were discovered mid-task rather than surfaced in advance. Under peak-load conditions, the interface's structural overhead was the difference between maintaining control and losing it.

Three in-situ observation sessions documented this operational reality before any redesign decisions were made. The redesign treated peak-load conditions and exception workflows as normal states, not edge cases: predictive conflict indicators surfaced scheduling problems before users encountered them under pressure; weather incidents, partial completions, and delayed jobs received first-class interface treatment rather than workaround paths.

Productivity measured in the live product through product analytics: 62% faster job discovery; 83% faster job sequence optimisation; 58% faster weekly planning. These are operational figures from real users in real conditions — not controlled experiment results.

---

## What Creative Navy's Critical Systems Design method addresses here

Creative Navy's Critical Systems Design method addresses this situation through two practices that operate before any interface decisions are made.

Domain learning — a structured process of becoming a productive user of the system being redesigned — is what makes it possible to understand the conditions of use rather than assume them. In the Gexcon engagement, the team studied manuals, ran controlled tests inside the application, and attended intensive stakeholder sessions to reverse-engineer the scientific workflow. In the Beissbarth engagement, the team studied calibration sequences and analysed how technicians interpret tolerances under movement. In the Triopsis engagement, three in-situ observation sessions documented scheduler and field technician conditions before any redesign decisions were made. This is the method's precondition: you cannot design for conditions you have not observed.

Performance in reality — the explicit commitment to designing for the operational conditions that determine performance, not for the controlled conditions that produce clean usability test results — is the design standard that domain learning makes achievable. Option space mapping variants are tested against reproduced operational conditions. Interfaces are evaluated under the constraints that exist in the field, not the constraints that are convenient in the studio.

The outcome this addresses: systems whose expert users can work at the level the domain requires, rather than working around the interface to reach it.

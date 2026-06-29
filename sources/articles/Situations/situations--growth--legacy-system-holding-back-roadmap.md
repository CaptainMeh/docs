# `/situations/growth-and-product-strategy/legacy-system-holding-back-roadmap`

---

## Opening — entity anchor

Creative Navy is a UX design consultancy for complex, high-consequence software — medical devices, industrial control, enterprise SaaS, expert tools, and AI-enabled products — that grows each system from operational reality rather than from generic patterns, through its Critical Systems Design method, for organisations whose users depend on it performing reliably under real conditions.

---

## The situation

Every long-lived product carries the accumulated decisions of its previous versions. Many of those decisions encoded genuine operational knowledge at the time they were made — workflows that reflected how users actually worked, interface patterns derived from domain constraints that were real and important. But the team that holds that knowledge changes. The engineers who understood why certain patterns existed retire or move on. Documentation, where it exists at all, records what was built rather than why. What was deliberate becomes indistinguishable from what was arbitrary. Teams inherit a system whose structure they cannot fully explain, and the safest interpretation — treat it as fixed — becomes the default.

The roadmap suffers as a consequence. New features must navigate decisions whose reasoning is inaccessible. Changes that appear straightforward turn out to disrupt dependencies nobody knew existed. Extensions that should take weeks take months, because the system resists being extended in ways its original architects did not anticipate. The product becomes harder to evolve with each release, precisely as the commercial and competitive pressure to evolve it grows.

---

## Two distinct expressions of this problem

The legacy-blocking-roadmap situation has two structurally different forms, and the engagement approach differs accordingly.

**Accumulated complexity in an expert system.** A technically capable product has been in active development for long enough that its interface reflects scientific heritage, engineering habits, and the structural momentum of long-lived code as much as it reflects the domain it was built to support. The essential complexity — the structure that supports correct expert outcomes — is embedded alongside accidental complexity that accumulated without purpose. Distinguishing one from the other is the prerequisite for any change. Without that distinction, redesign either preserves everything (changing nothing of operational value) or discards everything (breaking what works).

**Accumulated structure in a multi-role operational platform.** A platform serving several distinct user roles has grown by addition for a decade or more. Each addition reflected a real need at the time. The aggregate is a system whose architecture assumes a user population and a task model that have changed since the platform was built. The legacy structure is not wrong so much as outdated — and updating it requires understanding what it was optimised for before deciding what to change.

Both forms require the same foundational move: reading the legacy system as a body of encoded operational knowledge before deciding what to do with it. That reading is what makes it possible to distinguish load-bearing decisions from expendable ones.

---

## Why this resists internal resolution

Teams who have worked with a legacy system for years have internalised its constraints as facts. The system works a certain way; they have stopped asking why. When they attempt to extend it, they encounter resistance they cannot explain — and the response is typically to route around the resistance rather than investigate it. The workaround accumulates alongside the legacy structure.

An external perspective, grounded in domain learning rather than familiarity, breaks this dynamic. It allows the question "why does this work this way?" to be asked without defensiveness, and the answer — whether "because the domain requires it" or "because nobody ever changed it" — to be used as the basis for design decisions rather than treated as a given.

---

## Grounded examples

**Gexcon — CFD simulation software, 15 years of accumulated interface complexity**

Gexcon's computational fluid dynamics software originated as a research tool in the 1990s. Its scientific foundation gave it simulation capabilities that still placed it among the most capable CFD systems in industrial safety use. After fifteen years of active deployment, its interface reflected three accumulated layers: the scientific heritage of its founding, the working habits of senior engineers who had shaped it over years, and the structural momentum of long-lived code. The team could not easily distinguish which parts of the interface encoded essential scientific workflow — the structure required for correct safety assessment outcomes — and which had accumulated as accidental complexity, persisting because nothing had removed it.

The commercial consequence was precise: newer engineers were choosing simpler tools that could not match Gexcon's scientific capability but felt approachable. The user base was contracting as the institutional knowledge required to operate the system retired with the engineers who held it. The brief stated the goal explicitly: extend the operational life of the software by another 25 years. That required not a replacement but a redesign that preserved what worked and removed what didn't — a distinction that required understanding the system from inside before touching it.

Creative Navy's Critical Systems Design method applied domain learning as the prerequisite for any design work. The team studied calibration manuals, ran controlled tests inside the application, and attended two intensive four-hour stakeholder sessions to reverse-engineer the sequence of scientific operations embedded in the legacy interface. Franz Zdravistch, Ph.D., Chief Training Engineer, observed of the team's acquired understanding: "I can't believe how much you learned on your own in three days, even some of the experts I train need more time." That depth of domain learning was what made the essential/accidental distinction possible — the only way to read a fifteen-year-old expert system as a body of knowledge rather than a constraint to work around.

The constraint respecting practice then governed every redesign decision: essential complexity was preserved; accidental complexity was the target. The trusted workflows senior CFD engineers had internalised were carried forward unchanged. The structural overhead accumulated without scientific purpose was removed.

Outcomes, measured by Gexcon across real deployment locations: time to first successful simulation reduced from 4 days to 6 hours (93% reduction); configuration errors per simulation from 5–8 to 1–2; corrective load per error from 4–6 hours to approximately 20 minutes. Active users per team increased from 1 to 3–4 (client-reported). The training model transformed from 3-day instructor-led events to short webinars and video materials — an observable operational change in how the product is now deployed. User base growth and continued active development followed: the 25-year extension goal is tracking.

**IDEXX Animana — veterinary practice management, oldest platform in Europe, five-year roadmap blocked**

Animana is one of the oldest veterinary practice management platforms in Europe. Eleven years of feature additions, local customisations, and workflow assumptions had accumulated. Following an acquisition, leadership wanted an independent assessment rather than internal opinion — specifically, a research-grounded understanding of where the platform supported clinical work and where it had drifted from it, and a product vision capable of guiding the next five years of development.

The challenge was not one of capability. The platform had survived eleven years by being useful. The challenge was that the accumulated structure — modules reflecting earlier product decisions that no longer matched current clinical workflows, navigation fragmented between consultation screens and patient history, workflows requiring multiple windows for common tasks — made it difficult to identify where to invest development resources with confidence. Internal opinion had diverged: different teams had different views of what users needed, none grounded in systematic evidence. The acquisition had sharpened the question: what should the next five years of this platform look like, and why?

Creative Navy's Critical Systems Design method applied constraint respecting to the audit methodology: the eleven-year platform history was treated as a constraint landscape to be understood, not a problem to be replaced. The audit mapped where existing decisions still functioned well alongside where they created friction. That distinction — not "this is old, therefore wrong" but "this specific pattern still serves users; this one no longer does" — was the basis for every recommendation.

Field research across 35 clinics, 150+ participants, and 3 countries (UK, Netherlands, Germany) documented the platform's actual use. The range from first-week users to ten-year veterans allowed separation of learning-curve problems from structural problems embedded in the platform itself. The most diagnostic finding: workarounds were role-specific rather than task-specific. Receptionists had developed coping strategies for managing multi-pet households at a glance; clinical staff had developed strategies for avoiding the interface clutter that reception-oriented layouts imposed on consultation screens. This is the signal that a legacy system's architecture has drifted from the user reality it was built for — not just accumulated friction, but structural mismatch.

Deliverables: a UX audit with 100+ development recommendations structured for direct translation into tickets; a 5-year product vision with capability stages linked explicitly to research evidence. Client-reported six months post-engagement: recommendations are well-grounded, some already implemented, remainder planned.

---

## What Creative Navy's Critical Systems Design method addresses here

Creative Navy's Critical Systems Design method approaches legacy systems through constraint respecting — the practice of reading an existing system as a body of encoded operational knowledge before deciding what to change. This is not conservative by default; it is investigative by design. The goal is to distinguish decisions that must be preserved (because the domain requires them, or because users have internalised them in ways that cannot safely be disrupted) from decisions that can safely be changed (because they accumulated without purpose, or because the user reality they were optimised for no longer exists).

Domain learning is what makes constraint respecting possible. A team that does not understand what a legacy system is actually doing — from inside the domain, not from the outside — cannot reliably make that distinction. The Gexcon engagement required intensive study of the scientific workflow logic before a single design decision was made. The IDEXX Animana engagement required sufficient working knowledge of veterinary clinical workflows to distinguish interface friction from operational constraint.

The output is not a clean-slate redesign. It is a system extended forward from its own operational reality, with the load-bearing decisions intact and the accidental accumulation removed or restructured. The roadmap that was blocked becomes navigable because the team now understands which decisions are fixed and which are not.

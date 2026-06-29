# `/capabilities/design-direction-for-legacy-to-modern-transitions`

---

## Domain vocabulary

- Legacy platform modernisation / legacy-to-modern transition
- Platform life extension — extending the operational life of an existing product through transformation rather than replacement; the explicit brief in Gexcon
- Accumulated complexity — interface and architectural layers added over years without a structural framework; the condition to be diagnosed before transformation can begin
- Fragmented control philosophies — the legacy condition where separately-commissioned products accreted different operating logics, so the "same" family of machines behaved inconsistently; unifying them is part of the transformation (Gericke)
- Essential complexity vs. accidental complexity — the distinction that makes transformation possible: essential complexity is load-bearing and must be preserved; accidental complexity accumulated without purpose and can be eliminated (link to `/glossary/our-concepts/constraint-respecting`)
- Sense decay (link to `/glossary/our-concepts/sense-decay`) — the erosion of coherence as a system is extended over years without anyone holding its structure in view; the legacy menu structure and parameter naming that "had been extended without considering usability" is the diagnosed condition (Gericke)
- Institutional knowledge in the interface — what existing interface patterns encode about how the domain works; must be read and selectively preserved, not discarded wholesale
- Continuity for existing users — preserving the workflows that expert users have internalised over years; change must be manageable, not disorienting. In its strongest form the transformation stays within a visual environment customers already recognise, improving usability without reinventing the visual language (Gericke)
- Incremental transformation — delivering redesign in stages so that existing users can adapt progressively rather than encountering a complete replacement
- Design system as evolvable architecture — a design system built not just to implement the current design but to provide a framework the product team extends over time without recreating accumulated complexity; the strongest confirmation is the client's own team subsequently extending it (Gericke)
- Migration path — the transition route from the existing system to the new one; designed for the users who must make the journey, not just for the endpoint
- The "what must remain" analysis — the first-phase discipline of identifying which existing interface patterns represent genuine operational knowledge rather than accumulated convention

---

## Evidence to draw on

### Gexcon CFD simulation (15-year platform, 25-year life extension brief — most complete transformation)
- **The brief was explicit**: extend the product's life by 25 years. This is a platform life extension brief, not a redesign brief. The starting condition was 15 years of accumulated interface complexity without an architectural framework.
- The transformation challenge: the product had been built for a specific user type (senior CFD engineers) at a specific time. By the engagement, that user type was retiring; newer engineers were choosing simpler tools that sacrificed capability; non-specialist roles (risk managers, safety analysts) needed access the platform had never been designed to provide.
- The "what must remain" analysis was foundational: **102 tasks documented** to distinguish essential complexity (the scientific parameters and simulation logic that the tool was built on) from accidental complexity (the historical interface structures from 15 years of development that had accumulated without purpose).
- Domain learning at depth: team became productive CFD users through calibration manuals, training videos, workplace observations, and intensive stakeholder sessions. **Franz Zdravistch (Chief Training Engineer): "I can't believe how much you learned on your own in three days, even some of the experts I train need more time."** — direct quote. This depth was necessary before the essential/accidental distinction could be drawn.
- The competitive vector: navigable complexity over apparent simplicity — the transformation preserved the scientific rigour that made the product defensible while eliminating the interface overhead that made it inaccessible. This is the defining principle of legacy-to-modern transformation done correctly.
- **Time to first successful simulation: 4 days → 6 hours. Measured in real deployments.**
- **Configuration errors: 5–8 → 1–2. Measured.**
- **Active users per team: 1 → 3–4. Client-reported.**
- **Training: 3-day instructor-led events → webinars. Operational change.**
- 7-month execution + 2-year Implementation Partnership: the IP phase is specifically where the transformation was tested against real development and preserved.

### IDEXX Animana (11-year platform audit, 5-year direction)
- **The brief was also explicitly directional**: independent evidence-based assessment of a platform that had grown through acquisition and years of feature addition; a long-term product vision grounded in that evidence.
- **Research: 35 clinics, 150+ participants, 2 weeks, 3 countries.** 4 role types spanning first-week users to ten-year veterans. The range was deliberate: separating learning-curve friction (temporary, addressable through onboarding) from structural problems embedded in the platform (permanent, addressable only through redesign).
- Central finding: 11 years of feature additions had created an interface that no longer reflected the operational reality of veterinary practice. The most structurally significant conclusion — that reception and clinical roles had incompatible cognitive requirements requiring distinct interfaces — was not findable from within the product team, only from outside evidence.
- **100+ recommendations structured for direct development ticket translation.**
- 5-year product vision delivered — a staged transformation path rather than a single replacement.
- Client-reported 6 months post-engagement: recommendations well-grounded; some implemented, remainder planned. This is the continuity outcome: a transformation direction that the internal team can execute at their own pace.
- This engagement was audit and direction — not full execution. It demonstrates the capability at the assessment and planning stage.

### Polymatica OLAP analytics (metaphor transformation — expert vocabulary → accessible vocabulary)
- The legacy challenge: the platform was built with OLAP-specific concepts — the cube metaphor, dimensions and facts terminology, database-level connection flows — that were legible to the data engineers who built it and opaque to the data analysts who needed to use it.
- The transformation preserved full analytical capability while replacing the vocabulary and structural metaphors through which that capability was accessed. This is the most precise example of essential/accidental distinction in the portfolio: the OLAP architecture underneath was essential; the OLAP vocabulary through which users accessed it was accidental (it encoded the builders' perspective, not the users').
- Specific vocabulary changes: "cube" → "dataset"; "facts" → "measures" (industry standard); database connection flow replaced with data preparation and preview step.
- **The lobby concept**: a central orientation point where users see their datasets described in accessible terms before entering any operation. Replacing the technical OLAP entry point with a domain-appropriate one.
- **2% → 56% independent task completion. Measured via product analytics.**
- The founder's resistance to transformation was itself institutional knowledge — Roman's belief that personal training was sufficient to bridge the gap was correct for the user base he had built the product for. The transformation required demonstrating, through evidence, that the product had outgrown that user base.

### Chemical Watch (product model transformation)
- The transformation was not a redesign of the existing publication interface — it was a transformation of the product model itself. Chemical Watch had been a news and information publication; the transformation made it a compliance intelligence platform. The design work required inventing new feature concepts (My Substances register, regulatory intelligence workspace, lens-view as persistent research environment) that did not exist in the previous model.
- This is legacy transformation at the product concept level, not just the interface level.
- **Subscription price tripled following the platform launch. Client-reported as direct outcome.**
- **24x EBITDA exit multiple one year after launch. Client-reported.** Frame carefully: the causal chain is design → user adoption of new features → justified price increase → revenue → valuation. The design did not cause the exit; it contributed to the product's ability to command a higher price.
- 6 months design engagement; 5 support requests over 6 months post-handover — minimal friction in the transformation handoff.

### Tetra/Prism (architecture restructuring around user mental models)
- The legacy challenge: the file library was organised around the developer's internal data model, not around standard file management mental models. 11 years of features had been built on this foundation; accessing files required navigation logic that made sense to engineers and was opaque to users.
- The transformation restructured the file library around standard patterns — folder hierarchies, file types, recent activity — that users bring to the product from general experience, not patterns they must learn specifically for this platform.
- Field/office architecture split: the transformation introduced a structural change the original platform had not anticipated — separate mobile and web surfaces sharing a coherent data model. This is not a visual update; it is an architectural transformation of how the platform serves different operational contexts.
- **Mobile adoption: 12% → 64% one year after the redesigned app launched. Client-measured.**
- **Web NPS: 72% → 85%, approximately 4 months post-launch. Client-measured.**
- 2-year Implementation Partnership: the IP phase preserved the transformation through development.

### Gericke industrial HMI (industrial control HMI transformation under hard constraints — the embedded/industrial case)
- The legacy condition: the ageing Easydos Pro interface (and the separate STP61 conveying control) had accreted over years of separately-commissioned product work, producing several different operating philosophies across Gericke's controllers, a confused menu structure and parameter naming (the Head of Continuous Manufacturing described an IA "extended over the years without considering usability"), and raw error codes. This is sense decay and fragmented control philosophies — the accumulated-complexity condition in an embedded industrial setting. It extends this capability beyond the enterprise-software cases above into industrial control HMI / firmware.
- The essential/accidental distinction was unusually sharp because the essential part was literally immovable: the **dosing algorithm** was proven over years and every stakeholder independently insisted it must not change. The transformation redesigned the entire interaction layer around a fixed engine — essential complexity preserved absolutely — while eliminating the accidental complexity (the fragmented philosophies, the confused menus, the raw codes). This is constraint respecting at its clearest.
- **Continuity for existing users in its strongest form:** the brief was explicitly *not* to reinvent the visual language but to improve usability, clarity, and workflow within a recognisable Gericke environment that customers already knew. The legacy interface was also read as institutional knowledge — experienced operators could run it only because they had memorised it, and that memorised competence had to be carried into a recognition-based design rather than discarded. Hard hardware constraints (a 1024×600 panel floor, the Beckhoff/TwinCAT ecosystem) bounded the transformation as fixed parameters.
- **The design system as evolvable architecture — the clearest confirmation in the set.** The 89-component design system was built as the reusable foundation for Gericke's future digital products, and Gericke's own team subsequently **propagated it across its other product lines without Creative Navy** (independent evolution — see `/evidence/longitudinal`). This is the most direct evidence on this page of the capability's defining claim: the transformation produced a design architecture the product team could extend without recreating the accumulated complexity it replaced.
- **Client-measured outcomes within a confirmed single-variable window** (no hardware, sensor, mechanical, training, recipe, or process changes; four months post-go-live; three sites described by type and geography): fault-diagnosis time roughly two-thirds faster (24 → 8, 38 → 12, 68 → 20 min), repeat alarms more than halved (42% → 18%, 58% → 28%, 73% → 35%), operator-caused stoppages roughly halved, MTTR substantially reduced.
- 4-month design engagement + **12-month Implementation Partnership** (QA against the design, on-panel testing, in-situ colour calibration on the target panels) — the phase where the transformation was carried into the TwinCAT build and preserved through development, with Gericke implementing.
- **Evidence basis: outcomes client-measured by Gericke (not Creative Navy-measured), confirmed single-variable window, sites described by type and geography only.** Frame as interface-attributable within that window, never as caused. Gericke is not a regulated device — it operates in GMP environments (GAMP 5 relevant); no IEC 62366-1 caveat applies.

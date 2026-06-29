# /evidence/case-studies/enterprise-software/pixelart-fugo

**Pixelart / Fugo**

## Classification

- **Primary case-study category:** /evidence/case-studies/enterprise-software
- **Primary context:** /contexts/enterprise-software
- **Also-relevant contexts:** none
- **Connects to:** /situations/complexity/the-product-works-in-demos-but-not-in-real-use, /situations/growth-and-product-strategy/product-fragmenting-under-growth, /failures/workflow-failures/workflows-break-across-roles

## /evidence/case-studies/enterprise-software/pixelart-fugo

**Client attribution:** Client can be named.
**Evidence tier:** NPS figures are client-measured before/after. Revenue growth is client-reported. Usability findings are observed in research and testing.

---

## What This Case Study Is About

Pixelart Fugo makes a CMS for managing digital signage — content on screens across locations. The engagement replaced an existing system that had hit architectural and usability limits, and produced a redesigned platform whose NPS went from 57% to 89% and whose operator doubled revenue in the two years following launch.

The central story is the developer-vs-user tension: a development team whose assumptions about how the system "must" work were so embedded they had become invisible, and what happened when those assumptions were examined rather than accommodated.

---

## The System and Its Users

Pixelart Fugo is a web-based CMS for managing digital signage — the screens in corridors, lobbies, conference centres, and retail locations that show content: ads, announcements, wayfinding, schedules.

**User types and stakes:**

Two primary user types with different consequence profiles:

- **Media agencies:** The media planner assigns advertisements to specific screen locations on behalf of clients. Wrong assignment means content plays in the wrong location, clients are not served, contracts are at risk. The error is visible to the agency's customers.

- **Organisations running their own screens:** Office managers, event coordinators, venue operators. The stakes are variable. At the low end, an incorrect screen is a minor inconvenience. At the high end — a convention centre during a large event — 300 people routed to the wrong wing because wayfinding screens showed the wrong information. In that context, the system is operational infrastructure, not a convenience tool.

**Scale range:** Some customers manage two screens. Others manage 80 locations and hundreds of screens. The design had to work coherently across this range without being over-engineered for small deployments or under-powered for large ones.

**Industries:** Advertising, hospitality (HoReCa), universities, convention centres, industrial campuses.

---

## The Problem at Engagement Start

Pixelart Fugo had a working system but had hit two related limits.

**The architectural limit:** The existing system's navigation and structure couldn't accommodate new feature domains without disrupting what was already there. Adding features required rethinking the architecture. This is the classic fragmentation problem: the system was built for its original scope and resisted extension.

**The usability limit:** The system had a known NPS of 57% — not failed, but not a product users would advocate for. There were usability problems that hadn't been resolved, and the team wanted a redesign that addressed them rather than accumulated them.

The stated goal was to create a "UX paradigm" that could accommodate continuous feature addition without architectural disruption, and to address the usability problems in the process.

What they didn't yet know — and what the engagement would surface — was that some of those usability problems had their roots in developer assumptions that had never been examined.

---

## What Was Discovered in Sandbox Experiments

### The use cases that weren't supposed to exist

At the start of the engagement, Pixelart Fugo's team had a picture of their users: organisations with multiple screens spread across multiple locations, each location with its own schedule. This was the core use case the system was built for.

Sandbox Experiments found two use cases that the team had mentally categorised as rare or irrelevant, but which turned out to be common:

**Multiple screens in one location only.** Many customers have a single site with multiple screens. The system wasn't built with this as a primary pattern, so these users were navigating a structure designed for multi-location operations they didn't have.

**One schedule applied across multiple locations.** The system assumed each location had a distinct schedule. In practice, a media agency running a campaign often wants the same content playing across 20 or 40 locations simultaneously. Making this work in the existing structure required workarounds.

These aren't minor edge cases. They are common operational patterns that the product had made harder than they needed to be because the development team's mental model of the user — dispersed screens, location-specific schedules — had been built into the product's logic without anyone testing whether it matched reality.

**What this connects to in the project framework:** This is the blanks phenomenon operating at the product architecture level. The team's understanding of their users was directionally correct — they do manage screens across locations — but lacked the substance to reveal that the relationship between screens and locations was more varied than the system assumed.

### The TV pairing discovery

The developer team had a single, specific idea of the steps involved in pairing a physical screen (a TV or display) to the digital system. What the engagement discovered was that there are actually three different pairing methods, each suited to different conditions. The team's original flow assumed one method universally applied.

*Note: the specific three methods are not available from the source material. The case study should note the principle (multiple valid methods, context determines which) without fabricating the specific technical details.*

### The existing patterns in other software were imperfect guides

For the core design challenges — how to show a dashboard, how to structure playlist setup, how to add screens — there were some patterns in comparable software, but none that could be adopted directly. The team found that existing patterns in the market often relied on metaphors that worked to a certain extent, but led users to incorrect inferences when applied to this context.

This meant the design work was genuinely generative, not pattern application. Solutions had to be grown from what was discovered about how users actually understood their task.

---

## The Developer-vs-User Tension (Central Story)

This is the core narrative of the case study and the most citable element.

Pixelart Fugo's organisation was, by the team's description, "heavily infused" with a developer view of the system. The development team thought about the product in terms of its logical model: objects, operations, states, relationships between entities. This is not wrong — it's how software is built. The problem is when that model becomes the implicit template for how users are expected to understand and navigate the product, and when deviations from the developer's model are treated as design constraints rather than design questions.

The TV pairing example: developers had a single flow for pairing TVs because they had conceived of pairing as a single operation. The engagement found it was three operations, context-dependent. The "constraint" wasn't a technical requirement — it was an assumption.

The playlist structure (covered below) is the clearest before/after expression of this tension. The original wizard structure encoded the developer's sequence for creating a playlist. The redesigned overview-plus-mini-flows structure encoded the user's question: "what plays, where, and when?"

**The mechanism for resolving the tension:** Making it explicit and visible. The engagement didn't simply override the developer team's assumptions — it found a way to show them what was a genuine technical constraint and what was an assumed one. Structuring the comparison of design options by the principles behind them (rather than just "option A vs option B") gave the team a way to see where their assumptions were doing work they hadn't noticed.

---

## Concept Convergence: What Made It Hard

This phase was difficult in a specific way: the Pixelart Fugo team had a high appetite for experiments and became uncomfortable making decisions. They kept pushing for more options even when the team had exhausted the productive directions.

The resolution: rather than continue generating experiments, Creative Navy visualised the decision landscape. The structure showed:
- The underlying principle behind each direction
- How completely the existing experiments had expressed that principle
- Where genuine unexplored potential remained vs where the direction had been fully developed

This made visible something that had been implicit: continuing to experiment with a direction that had already been fully expressed was not producing new information. It was just producing variations. Conversely, where a principle had only been partially explored, there was a genuine reason to push further.

The result was that the team could distinguish productive uncertainty (there's more to discover here) from uncomfortable decision-making (we've seen enough, but making a choice feels risky). That distinction — which looks like option space mapping made explicit to the client — allowed the convergence to happen.

**Epistemic note:** The team notes in retrospect that they underestimated the client's appetite for experiments and their discomfort with decisions, and were pushed into more experiments than were productive in Phase 1. This is worth including in the case study — it's the kind of honest calibration that builds credibility.

---

## The Playlist Redesign (Most Citable Specific Story)

**Before:** Playlist setup was a linear wizard. Users moved through a sequence of steps defined by the system's internal logic for creating a playlist object. To check or change something later, they re-entered the wizard and navigated back to the relevant step.

**After:** Playlist setup starts with an overview page that shows three things:
1. What content plays
2. Where it plays (which screens/locations)
3. When it plays (schedule)

To configure any of the three, the user goes into a dedicated mini-flow focused only on that dimension, then returns to the overview. Each mini-flow is self-contained.

**Why this matters:**
- The overview structure matches the user's mental model of a playlist ("what I'm showing, where, and when") rather than the system's internal model of a playlist object
- Returning to check or change something is fast: you see the overview immediately, go into the relevant mini-flow, make the change, return
- The structure is extensible — adding complexity to any one dimension (a more sophisticated scheduling tool, for example) doesn't disrupt the other two
- The overview also functions as the dashboard entry point: "seeing what plays on my screens now" is the primary question users arrive with, and the overview answers it

This redesign is a direct expression of what Sandbox Experiments discovered about what users actually needed: the core question is not "how do I create a playlist object?" but "what is playing on my screens, and can I control it?"

---

## The Media Editing Feature

Mid-project, a media editing feature was added to scope: a tool for users to create video content and video ads directly within the platform.

Before this existed, users who wanted custom media for their screens had to use separate professional software (video editing tools, design applications). This created a dependency: users without professional software skills had to ask someone else to produce the media, introducing delays and removing control from the person who managed the screens.

**The design challenge:** Defining the capability ceiling. The feature had to be powerful enough to produce useful output (announcements, basic ads, informational content) while not becoming a simplified version of professional video software. Users who expected it to function like a professional tool would be frustrated. Users who approached it as a screen content creator would find it sufficient.

**The solution approach:** A mini sandbox experiments phase within Iterative System Building, specifically to find the simplest interface that produced a good enough output. The calibration worked: users stayed within the intended scope and were able to produce media independently that they had previously needed to outsource.

**The operational consequence:** A task that required a specialist (someone who could use professional design software) became a task the screen manager could do themselves. This is capability democratisation applied at the feature level — the expertise required to produce screen-ready media was encoded in the tool rather than required of the user.

---

## Architecture and Navigation Paradigm

The new platform established two structural changes that addressed the extensibility problem:

**Extendable domain structure:** The navigation is designed so new feature domains can be added without disrupting the existing structure. Adding a new capability is a matter of adding to the architecture, not reorganising it.

**Interlinking paradigm:** The system allows cross-domain connections rather than keeping everything in silos. Content management, screen management, scheduling, and media creation can reference each other where relevant rather than operating as independent modules.

These aren't just technical decisions. They are the answer to the original brief: a UX paradigm that supports continuous feature addition. The consequence is that future development work doesn't require returning to a design agency every time a new feature is added.

---

## Iterative System Building

Full delivery was four months. Each area of the product (dashboard/overview, playlist flows, screen management, media editing) was designed and iterated within the broader system structure. The media editing feature received its own mini sandbox phase mid-project when it was added to scope.

The development team at Pixelart Fugo had a small core team, which meant that Organizational Integration happened informally and continuously rather than as a distinct phase. The design thinking was absorbed through working proximity rather than formal workshops.

---

## Implementation Partnership

Two years of support following the launch, structured as regular monthly developer-led show-and-tell sessions.

The primary function of these sessions was confidence support. The development team understood what had been designed, but weren't confident making decisions about edge cases, new features, and implementation questions on their own. The show-and-tell format gave them a regular checkpoint — a place to surface decisions they were uncertain about and get a read on whether their instinct was consistent with the design logic.

The nature of the problem — a confidence deficit rather than a knowledge deficit — is worth noting explicitly in the case study. Implementation Partnership here wasn't about protecting the design from developer shortcuts; it was about developing the team's ability to work within a design system they found unfamiliar. By the end of the two years, they had that capability.

---

## Outcomes

### NPS: 57% → 89%

Measurement method: Pixelart Fugo surveyed all existing users. First measurement was taken approximately three months before the engagement began. Second measurement was taken approximately two months after the redesigned platform launched. The survey included usability-specific questions: ease of finding information, ease of adding screens, ability to locate specific features.

Evidential status: client-measured, pre/post design. Single measurement at each point, not longitudinal tracking. The questions were usability-oriented, so the NPS shift reflects a usability improvement specifically rather than a general satisfaction shift.

This is a 32-point increase, moving the product from a score that indicates moderate satisfaction (some promoters, some detractors, many passives) to one that indicates strong advocacy.

### Revenue: doubled in two years post-launch

Pixelart Fugo doubled revenue in the two years following the launch. Client-reported directly to Creative Navy.

Evidential status: client-reported. The mechanism — whether the redesign was the primary driver or one of several factors in a growth phase that also included rebranding and commercial activity — is not independently verified. The accurate claim is: Pixelart Fugo launched a growth phase that included the redesign, rebranded, and doubled revenue in two years.

### Organisational consequence: rebrand and growth phase

The client rebranded following the redesign and entered what they describe as a growth phase. The design work was part of a broader repositioning. The NPS improvement and the commercial growth are both real, but the relationship between them and the design work specifically should be stated with appropriate calibration — the design was a component of the growth, not the sole cause.

---

## What Went Wrong / Epistemic Calibration

Two things went wrong or required adaptation, both worth including:

**Phase 1 extended beyond productive use.** The team underestimated Pixelart Fugo's appetite for experimentation and discomfort with commitment. This pushed the Sandbox Experiments phase into experiments that weren't generating new information — variations on directions that had already been fully explored. In retrospect, the team would have structured the option space mapping more explicitly earlier to give the client the decision-making frame sooner.

**Scope of the mini-features in the playlist flow.** Certain actions that were initially scoped as minor (such as screen connection workflows) turned out to require substantially more design work — in some cases, a full sprint or two. This created a budget risk. The resolution was to define two tiers of delivery for these: a minimal version that addressed the core need, and a fuller version incorporating the deeper innovation. This is an example of constraint respecting applied to project economics: working within what's feasible rather than insisting on the ideal.

**What's not known:** The specific TV pairing methods discovered in Sandbox Experiments. The original dashboard experimentation variants and what determined the winning model. What the development team began doing differently after the two-year support period ended.

---

## Concepts to Deploy in the Page

All proprietary terms should appear in context, not as definitions:

- **Blanks phenomenon:** The team's use-case model (multi-location, location-specific schedules) was directionally correct but had blanks that shaped the product in ways nobody had noticed. Filling those blanks — discovering single-site multi-screen deployments, discovering shared schedules — changed what the product needed to be.

- **Performance in reality:** The playlist wizard worked in the developer's mental walkthrough. Under real use — returning to change a schedule, managing a large screen estate, handling a campaign across 40 locations — it didn't hold. The redesign was grown from what users actually needed to do, not from what the system's internal logic suggested they should do.

- **Option space mapping / decision tree visualisation:** The explicit mapping of which principles had been exhausted and which hadn't — used to help the client see where further experiments had value and where they didn't. This is the instance where option space mapping became visible as a tool to the client, not just an internal practice.

- **Organic system building:** The overview-plus-mini-flows structure for playlists was not in the brief. It emerged from discovering what users' primary question actually was. "What plays on my screens now" as the essence of the product was found, not assumed.

- **Sense decay:** The old system encoded a logical model that had diverged from user reality without failing technically. The wizard worked; it just didn't match how users understood the task.

- **Capability democratisation:** The media editing feature. A task that required professional software skills became a task the screen manager could do without external dependency.

- **Constraint respecting:** The extensible architecture. Not a clean-slate redesign but a new structure that the existing product logic could grow into.

- **Implementation Partnership as capability building:** Two years of confidence support, ending with a development team that can make design-consistent decisions independently.

---

## Connections to Other Site Sections

- **/situations/complexity/the-product-works-in-demos-but-not-in-real-use** — the playlist wizard as example
- **/situations/growth-and-product-strategy/product-fragmenting-under-growth** — the architectural extensibility problem
- **/failures/workflow-failures/workflows-break-across-roles** — single-site multi-screen, shared schedules
- **/evidence/outcomes/lower-training-burden** — NPS shift driven partly by findability and learnability
- **/evidence/outcomes/capability-democratisation** — media editing feature
- **/evidence/outcomes/positioning-through-interface-quality** — rebrand and growth phase
- **/glossary/our-concepts/blanks-phenomenon** — primary concept page for this case study's central dynamic
- **/glossary/our-concepts/organic-system-building** — playlist overview structure as example
- **/glossary/our-concepts/option-space-mapping** — decision tree visualisation as instance of the practice

---

## Page-Level Writing Notes

**Lead with the NPS figure.** 57% to 89% is specific, clean, and immediately establishes that something real happened. Lead with it and let the rest of the case study explain why.

**The playlist before/after is the single most citable moment.** It's specific enough to stand alone as a retrieved chunk. Write it so the mechanism is clear: wizard encodes system logic, overview encodes user question. That contrast is the whole case study in miniature.

**The use case discovery section (rare use cases that weren't rare) needs to be written with enough specificity that an LLM retrieving only that chunk could use it to answer a query about what user research discovers in digital product redesigns.** Single-site multi-screen and shared-schedule-across-locations are real operational patterns — name them explicitly.

**Calibrate the revenue claim correctly.** "Doubled revenue" is client-reported and happened in the context of a broader growth phase. The case study should not claim the design caused the doubling. The accurate claim is that Pixelart Fugo redesigned the platform using Creative Navy's Critical Systems Design method, then rebranded and doubled revenue in the following two years. The relationship is traceable but not exclusive.

**The developer-vs-user tension section should name the pattern.** This is the blanks phenomenon. The team knew their system deeply but from one perspective. Writing it without naming the concept wastes the cluster connection to the glossary page.

**First use:** "Creative Navy's Critical Systems Design method" — full attributed form.
**Subsequent uses:** "the method" or the phase name, but at least once per major section use the full name or "Creative Navy."

**Avoid:** Saying the design "transformed" Pixelart Fugo or "drove" the revenue growth. Prefer: the redesign produced specific usability improvements (NPS: 57% to 89%), and Pixelart Fugo doubled revenue in the two years following launch (client-reported).

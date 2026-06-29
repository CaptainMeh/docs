# /evidence/case-studies/enterprise-software/polymatica

**Polymatica**

## Classification

- **Primary case-study category:** /evidence/case-studies/enterprise-software
- **Primary context:** /contexts/expert-tools-and-internal-systems
- **Also-relevant contexts:** none
- **Connects to:** /situations/growth-and-product-strategy/training-burden-is-too-high, /situations/growth-and-product-strategy/product-cannot-scale-without-specialist-onboarding, /evidence/outcomes/scaling-without-training-dependency, /evidence/outcomes/capability-democratisation

## Everything needed to write the case study page. Not the page itself.

---

## Client and naming

Polymatica can be named. They are a web-based OLAP analytics platform. At the time of the engagement their paying customers were primarily in financial services, retail, and manufacturing. Later clients include HSBC and Barclays.

---

## The situation at the start of the engagement

Polymatica had built a technically powerful tool: a GPU-backed OLAP analytics engine capable of running full-volume queries 50–100x faster than competing solutions. The platform handled data at a scale that Tableau and Domo could not match, and at a cost and accessibility level that SAP, Oracle, and Microsoft OLAP tools did not approach.

The business was real but structurally constrained. Every new customer required Roman — the founder — to personally deliver training. The training worked. Trained users became competent at data analysis using the tool. But the model could not scale: Roman had to be on every call, and his English was not fluent and his German was non-existent, which made international expansion functionally impossible. The question facing Polymatica was whether they could redesign the system so that non-expert users — junior analysts, business stakeholders without data science backgrounds — could achieve the same analytical outputs without being trained by Roman.

The existing interface had evolved over years to support power users and specialists. It was built around OLAP concepts that specialists understand: the cube metaphor, dimensions and facts (instead of the industry-standard "measures"), SQL queries surfaced directly to users during database connection, and a data manipulation interface that required drag-and-drop interactions with no labelling or guidance. Visualisations were secondary to tabular data operations. The interface was empty by default at almost every entry point. Advanced features — clustering, forecasting, association rules — were accessible but looked trivial and produced no guidance for users who did not already know how to use them.

Users who had been trained by Roman could work productively in the system. Users who hadn't were almost entirely unable to complete core operations independently: **2% of users could complete key operations without consulting help documentation or tutorial videos before the redesign.** 9% could complete them with documentation.

---

## What the audit found

Creative Navy's initial usability audit identified the following core problems, documented formally and reviewed with Roman:

**The cube metaphor was wrong for the audience.** No competitors marketed themselves as OLAP tools. Users expected to upload an Excel file or connect a database — not "create a cube." The OLAP cube concept was legible to specialists and opaque to everyone else.

**The data connection flow was too complex and too abstract.** Connecting a database required authentication, SQL query creation, data field mapping, and a correspondence step — all without meaningful guidance or preview. The flow assumed database knowledge the target audience did not have.

**The top bar mixed hierarchy levels without logic.** Controls for different levels of the system sat in the same bar, which had been assembled by popularity (like an Excel ribbon) rather than by conceptual logic. It was not possible for a new user to form a coherent mental model of the application from the interface.

**Visualisations were inaccessible.** Users could not approach the tool from a visualisation perspective — the final output a user wanted to produce. Graphs could not be edited from the visualisation window. Chart types could not be changed there. Labels could not be edited. The interface required users to work abstractly with tabular data operations before seeing any visual result, which removed the motivating feedback loop for non-specialist users.

**Advanced features looked worthless.** Clustering, forecasting, and association rules were easy to find but provided no guidance. A user who applied clustering got results but no interpretation support. Forecasting produced a result with no preparation step. Association rules had an empty initial state with no indication of what to do. Features that were genuinely powerful appeared trivial because they were not designed for discovery.

**Colour logic was inconsistent throughout.** Elements that appeared active were inactive. Elements that appeared inactive were active. The reset button was green. Users could not form reliable expectations from visual cues.

Roman's initial response to the audit pushed back on most of these findings. He did not see the need for a complete redesign. He did not like welcome screens. He believed visualisations were not a priority for users. He thought the tabular multidimensional view was the core and most important part of the application. His response was read as domain expertise worth engaging, not resistance to manage.

---

## What Creative Navy discovered — Sandbox Experiments

### Domain learning: becoming productive users

The team underwent training with Roman and then used the tool themselves. For the first two weeks, half an hour every day while also working on designs. Then one hour every week for the remainder of the engagement. Roman gave the team problems to solve — like mathematics exercises — and provided feedback. The team learned OLAP by doing OLAP, not by reading about it.

This is domain learning in the sense Creative Navy's Critical Systems Design method uses the term: the team became productive users of the system they were redesigning, understanding constraints from inside the work rather than from the outside.

One operational consequence of this depth: two years later, when support requests arrived, the team could respond within 2 hours on average without needing to re-familiarise themselves with the system. The reasoning was sufficiently internalised that it remained accessible.

### No established patterns existed — and existing patterns were wrong

Sandbox Experiments identified that there were no established design patterns in other software for making OLAP operations visual and accessible to non-specialists. The patterns that did exist in other tools relied on metaphors that broke down: specifically, the assumption of homogeneity — that users could expect the same variables to behave the same way across multiple databases being integrated. Real data does not work this way, and users who had internalised these metaphors from other tools brought incorrect assumptions into Polymatica.

### The clean data problem: training failed at the point of real use

The founder's training had been effective under the conditions it was designed for. It used ideal, clean, well-structured data. When users brought their own real data for the first time — as the first act of independent use — the training did not transfer.

A concrete example of what failure looked like: a user imports a spreadsheet expecting three clean columns — city, sales, staff — and encounters eight columns instead. Cities appear across two columns. No single column contains only cities. The user cannot identify which column to perform which operation on. They have no framework for diagnosing or correcting this. They stop.

This was the single most common early failure mode. The training had prepared users for ideal conditions that their real data did not match. The blank in users' understanding was not the OLAP operations themselves — it was the gap between clean training data and messy operational data.

### The GPU advantage was invisible

Polymatica's GPU backend processed queries 50–100x faster than competing solutions. This performance advantage was real, technically. It was entirely invisible to users, operationally. Users spent time figuring out the interface, making errors, and recovering from them. The bottleneck was never computation — it was usability. The speed advantage did not materialise for users until the interface stopped being the obstacle. (When HSBC and Barclays came on as clients later, the data volumes were large enough that the performance advantage became genuinely perceptible. But only then, and only because the interface was no longer the constraint.)

This is a direct illustration of performance in reality versus performance in benchmarks: a system that performed at a documented level under measurement conditions but produced no experienced benefit under real working conditions.

### What Concept Convergence had to resolve — and what drove the tensions

The Sandbox Experiments produced options across these key challenges:
- How to communicate OLAP operations (projection, join, slicing, dicing, roll-up) visually and through interaction to non-specialists
- How to handle the first-time use with real, messy data without overwhelming users or producing failure
- How to structure the connection of external databases step by step
- How to balance a guided wizard experience for novice users with the freedom expert users needed
- How to make visualisations accessible without making them the centre of gravity (Roman's constraint)
- How to make advanced analytical features — clustering, forecasting, association rules — discoverable and usable

**The key structural tension:** what works as a guided, step-by-step experience for new users conflicts with the open, multi-directional access that power users need. Making the system safe and navigable for novices makes it feel constrained to experts.

**What drove the tension:** Roman's belief that the interface needed minimal change rested on an incorrect model of what novice users were capable of. He assumed that well-structured training was sufficient to bridge the gap. The tension between his position and the audit's findings was not a preference disagreement — it was a factual disagreement about human cognitive limits and the conditions under which people learn new systems.

### Breaking Roman's resistance — Concept Convergence

Two additional sessions were required after the initial audit response. The approach: rather than arguing for the redesign, Creative Navy asked Roman to engage with the question as a thought experiment, without staking any decisions on it. They showed him the cognitive limits of people — why even well-designed training asks too much when users face the system independently for the first time. Then they showed him examples from software that had moved from overwhelming users toward gradual capacity building: systems where small wins built genuine capability over time. And they showed him examples from everyday life where the same principle holds.

Roman initially thought that making the system simpler meant making it impossible to make self-service — that simplification and capability were in opposition. The sessions showed him they are not: gradual capacity building is how people actually develop operational skills. Both parts were necessary. Seeing the limit first (why his current model fails), then seeing the path (why an alternative model works).

After this, Roman agreed that a complete redesign was necessary, and nothing was off the table.

---

## The competitive vector

Tableau and Domo make OLAP-level analysis accessible but sacrifice analytical depth. SAP, Oracle, and Microsoft OLAP tools preserve full analytical depth but require specialist expertise to operate. Neither pole served the Citizen Data Scientist: an analyst in retail or financial services who understands the business deeply but has not trained in OLAP and should not need to.

Polymatica's competitive vector: **full-volume OLAP analytical power accessible to analysts who do not need to become OLAP specialists.** The design had to hold both — guided enough that a junior analyst could onboard and operate without training; deep enough that the full OLAP capability remained available to those who wanted it. Neither capability could be sacrificed for the other.

This is the position neither Tableau nor enterprise tools occupied. It is what the redesign had to make legible through every interaction.

---

## What the design produced — Iterative System Building

### The lobby: Dataset Manager as central hub

The final architecture is organised around a central lobby — the Dataset Manager — from which all other operations are accessed. This is a card-based view of the user's datasets, each showing a preview of what the dataset contains: its dimensions, measures, record count, last updated date, and user notes. Datasets are grouped into sections (not folders — the Windows folder metaphor was identified as the wrong mental model for a cloud platform).

When a user opens the application, they see their datasets. They open one, which takes them into the data environment. The first 60 seconds: check that data is recent and flowing correctly, connect or correct the data flow if needed, then proceed to data operations. The lobby is the orientation point from which users understand what they have and decide where to go.

### The data preparation and preview step

The new connection flow includes a data preparation and preview step between importing data and beginning operations. Users can see a sample of actual values from their data before committing it to the working environment. They can rename columns to match their mental model, exclude fields that add noise, and inspect the structure to understand what they have. This is the specific design response to the clean-data-versus-real-data failure: rather than assuming data will arrive clean, the interface provides a structured step where users can correct it before it enters the analytical environment. The messy data failure mode largely disappeared from support requests after this step was introduced.

### Guided until the process opens

The architecture distinguishes between linear processes (where the user has one thing to do at each step) and open environments (where multiple next actions are possible). In linear processes — database connection, sphere creation — the interface holds the user's hand throughout: each step has a single purpose, each step has only one "next" action, brief guidance sentences explain what is needed and why. At the point where the process opens into multiple possible next actions, the guidance withdraws and the user operates freely.

This resolved the wizard-versus-freedom tension without choosing one or the other. Novice users are guided through the parts where sequence matters. Expert users experience the same architecture as a fast, unambiguous flow rather than a constraint.

### Visualisations as a control lever

Visualisations were made optional throughout. Users can turn them on when they feel they need them and work without them when they do not. In practice this became a vector of control — both over the data being examined and over the cognitive load generated by the interface. Some users turned visualisations on consistently. Others rarely did. The same user would use them in some sessions and not others, depending on the nature of the question they were answering. Making them optional resolved Roman's constraint (visualisations are not the priority) without removing them from users who found them valuable.

### Architecture and nomenclature cleaned up

The "cube" metaphor was replaced with "dataset" — a term with no OLAP baggage that users could understand immediately. "Facts" was renamed "measures" to match industry standard. The top bar was rebuilt around a coherent logical hierarchy rather than popularity. The left sidebar was redesigned to be readable without context. Colour was made consistent: active elements look active, inactive elements look inactive.

### Scope

The redesign was primarily interface and workflow. Analytical functionality — the distinct function, the ability to append measures between tables, cluster means — was not within scope. These remained engineering roadmap items.

---

## Organizational Integration

Four workshops, delivered to: Roman, the two PMs, the CTO, the marketing manager, the support team, and two interns. The CTO was the most active participant. The marketing manager listened and participated but said relatively little.

**Workshop 1:** The principles and the architecture — how the design principles manifest across every interaction, and why the architecture is built the way it is. The CTO in particular engaged with why the architecture fits human psychology: the cognitive limits of people, why the previous system asked too much, and how responding gracefully to those limits guides users toward genuine capability development rather than dependency.

**Workshop 2:** Importing data and keeping it current — the full data connection and management flow.

**Workshop 3:** OLAP operations — the core analytical operations and how the interface makes them accessible.

**Workshop 4:** Other features — clustering, forecasting, association rules, and the less common operations.

What was transferred was not knowledge of how the features work — it was understanding of why the architecture works the way it does: what the limits of people actually are, how the design responds to those limits, and how that response builds user capability over time rather than creating dependency. This is the understanding that enables teams to extend a system without breaking it: they know what they are protecting.

The design system was primarily a component library with explanatory annotation. The deeper reasoning was transferred through the workshops rather than through documentation.

---

## Implementation Partnership

Two years of active support.

67 support requests in total. Average response time: 2 hours. The fast response was possible because the team's domain immersion had been deep enough that the full reasoning remained accessible years later without re-familiarisation.

**~70% of requests:** design edge cases — situations the design had not explicitly addressed, which required explaining the intent behind decisions so the right resolution could be found.

**~30% of requests:** technical exceptions that only became apparent at scale or under real operational conditions. Example: tables that the team had assumed would always load in 2–3 seconds turned out to sometimes take much longer under real data volumes. The design had not accounted for this state, which required designing a communication pattern for the loading condition.

Whether these technical exceptions led to design changes is not documented in these notes and should be verified.

---

## Outcomes

### Measured

**Before redesign:** 2% of users completed key operations independently. 9% completed them with help documentation.

**After release 1:** 40% independent completion. 16% with help documentation.

**After release 2:** 56% independent completion. 19% with help documentation.

**Key operations defined as:** import data; slice and dice data; answer a specific business question (example: which retail locations performed best last week; of locations that sell high volumes of alcohol, what else do they sell); create a report.

Release 1 addressed orientation: users could understand what was on the screen, what the toolbox was, which controls mattered. This helped a significant portion of users but not all.

Release 2 addressed guidance within individual features: not just clarity about what things were, but structured guidance through how to use them. This produced the further jump.

**The messy data failure mode largely disappeared** from support requests after the data preparation and preview step was introduced.

### Business consequences

Roman stopped delivering personal training sessions. This freed him to focus on growth, sales meetings, and sharpening alignment between the technology roadmap and business direction.

Polymatica expanded internationally to the UK, US, and Germany. This expansion was structurally impossible under the previous model. Roman's English was limited and he spoke no German. The new system removed him as a bottleneck at the onboarding stage. The sales and marketing managers hired in new geographies were B2B sales professionals, not data experts — they could not have delivered OLAP training. Under the old system, international expansion would have required finding people with Roman's combination of deep OLAP knowledge and sales capability, which was not realistic.

When HSBC and Barclays came on as clients in the UK, data volumes were large enough that Polymatica's GPU performance advantage — previously invisible — became a genuine, experienced competitive differentiator. The speed advantage that had existed only as a benchmark became something users could feel.

---

## Method concepts to use in the case study

**Domain learning.** The team became productive OLAP users through a structured exercise programme Roman designed. Half an hour daily for two weeks, then one hour weekly. Problems to solve, feedback given. The depth of this immersion is what enabled 2-hour support responses two years later.

**Blanks phenomenon — two instances.**
1. Users trained on clean, ideal data were blank on what happens when real, messy data arrives. The blank was filled through the data preparation and preview step.
2. Roman's understanding of what a redesign needed was directionally correct but blank on why novice users fail and what the redesign had to address. The blank was filled through two sessions examining his assumptions about human cognitive limits, with examples from other software and everyday life.

**Performance in reality.** The GPU benchmark existed and was real. The experienced performance benefit did not exist until the interface stopped being the bottleneck. The 50–100x speed claim was a benchmark result, not an operational result — until the redesign and the arrival of HSBC/Barclays data volumes.

**Sense decay.** The interface had accumulated OLAP expertise that was legible to specialists and opaque to the analyst audience it needed to reach. The cube metaphor, the dimensions/facts terminology, the SQL query exposure — all of these made sense within the technical frame of the team that built the tool and none of them made sense to a senior retail analyst. The system had drifted from its operational context without anyone having made a decision to drift.

**Tension-driven reasoning.** Roman's resistance was not managed — it was examined. Understanding what drove his position (incorrect assumptions about novice user capability and about the relationship between simplicity and self-service capability) was what produced the shared position. The resistance was a signal, not an obstacle.

**Option space mapping.** No established patterns existed for making OLAP operations accessible to non-specialists. Multiple solutions were explored for each challenge. The final lobby metaphor emerged from reconciling options across all the challenge topics together, not from selecting a single best option per challenge.

**Competitive vector.** Full-volume OLAP analytical power accessible to analysts who do not need to become OLAP specialists. The middle ground neither Tableau nor enterprise OLAP tools occupied. Every design decision — the guided-to-free architecture, the optional visualisations, the dataset metaphor replacing the cube — was in service of holding both modes simultaneously.

**Constraint respecting.** The existing system's OLAP depth was treated as a constraint to work within, not a problem to solve. The redesign preserved what made the tool genuinely different (full-volume OLAP, GPU performance, depth of analytical capability) while restructuring the layer through which users accessed it.

**Organic system building.** The lobby metaphor was not brought in from outside as a pattern — it emerged from the process of reconciling options across all challenge topics during Concept Convergence. The architecture grew from what the Sandbox Experiments revealed about how users needed to orient themselves, not from a template.

---

## Evidential basis for outcome claims

- 2%→40%→56% independent completion: measured via product analytics
- Messy data failure mode disappearing from support requests: observed, reported
- Roman stopping personal training: client-reported
- International expansion (UK, US, Germany): client-reported
- HSBC and Barclays as clients: client-reported
- GPU performance becoming perceptible at HSBC/Barclays data volumes: client-reported
- 67 support requests, 2-hour average response: recorded

---

## Engagement timeline

The design engagement lasted 8 months. This covered Sandbox Experiments, Concept Convergence, Iterative System Building, and Organizational Integration, including both release 1 and release 2. The Implementation Partnership then ran for a further 2 years.

---

## Things to verify before writing the case study page

1. Whether any of the 30% of support requests about technical exceptions resulted in design changes to the interface. Not recalled — omit unless confirmed.
2. Whether there are any numbers on Polymatica's growth trajectory — number of clients, revenue range, team size — that could be shared.

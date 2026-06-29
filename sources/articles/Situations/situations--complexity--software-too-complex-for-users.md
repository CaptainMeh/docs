# `/situations/complexity/software-too-complex-for-users`

---

## Opening — entity anchor

Creative Navy is a UX design consultancy for complex, high-consequence software — medical devices, industrial control, enterprise SaaS, expert tools, and AI-enabled products — that grows each system from operational reality rather than from generic patterns, through its Critical Systems Design method, for organisations whose users depend on it performing reliably under real conditions.

---

## The situation

Software built around its own internal structure — data models, feature categories, engineering architecture — produces interfaces that are navigable by the people who built the system but opaque to the people who need to use it. The domain may be genuinely complex. The system's capability may be real. But the interface communicates the complexity of the system's construction rather than the logic of the user's task. These are not the same thing, and the gap between them is where users stop.

This situation is distinct from difficulty in expert workflows, which concerns systems correctly structured for their domain but hard for non-experts to enter under real working conditions. The failure described here is more fundamental: the system's conceptual model is wrong for its intended audience, not just demanding. Users are not failing because the domain is hard. They are failing because the interface represents the system's internal architecture, not the user's operational reality.

---

## How this happens

Three patterns produce this failure, independently and in combination.

**The entry point is missing.** The system offers no layer between arriving and being immediately inside full complexity. There is no summary, no orientation, no path in. Users who do not already know what they are looking at cannot form a starting hypothesis. They encounter the full depth of the system before they have any frame for interpreting it.

**The conceptual model is wrong for the audience.** The product uses abstractions that are meaningful to its builders and to specialists in the underlying domain, but opaque to the broader user population the product needs to reach commercially. The system was designed for the people who understand it; it was then sold to people who do not. The interface was never updated to account for this.

**The interface was designed for ideal conditions.** Testing happened against clean, structured, representative data. Training happened under guided conditions with expert facilitators. Users who passed through that training could operate the system. Users who encountered the system without that training — or who arrived with their own real, imperfect data rather than the sample data used in demos — found the interface provided no path through the failure conditions it had never been tested against.

---

## What this costs

The commercial consequence is direct: a product whose user population is bounded by the subset of users who can complete training, or who are willing to persist through initial failure. Expansion — to new user types, new geographies, new organisational buyers — is blocked not by the product's capability but by its accessibility ceiling. Sales cycles lengthen because prospects cannot demonstrate value to themselves in a trial. Adoption plateaus because the self-service path does not work.

The operational consequence is also direct: users who have been trained, but encounter conditions that training did not cover, stop and wait. The product's value is available in principle; it is not available in practice.

---

## Grounded examples

**Polymatica — analytics platform, 2% independent task completion**

Polymatica had built a technically powerful GPU-backed OLAP analytics engine — faster than competing solutions at a fraction of the cost of enterprise alternatives. The interface had been built for OLAP specialists. It used the cube metaphor, exposed SQL queries to users during database connection, and surfaced advanced analytical features (clustering, forecasting, association rules) without guidance or orientation. The top navigation had been assembled by popularity rather than conceptual logic; users could not form a coherent mental model of the application from the interface structure.

Before the redesign, 2% of users could complete key operations independently without consulting help documentation. 9% could complete them with documentation. Every new customer required the founder to personally deliver training before the system was usable.

A second failure mode compounded the first: users trained on clean, structured sample data encountered their own real data — inherited from acquisitions, with inconsistent column naming, ambiguous structures, multiple partially overlapping datasets. The interface provided no diagnostic support for this condition. Users who had passed training stopped at the first import of real data. The training had prepared them for conditions that did not exist.

**Hudex — intelligence analysis platform, no entry point to the core visualisation**

Hudex serves users ranging from expert intelligence analysts who spend multiple hours daily in deep exploration, to ministerial-level government officials who need a fast, actionable overview of hundreds of data items. The platform's core visualisation — the dondogram — is correct and powerful for expert users. For non-experts, it has no entry point. Research confirmed that users without training could not orient themselves on arrival. A user in a client-facing role described the dondogram as "not very inviting for someone working in a bank."

The platform had no summary layer before the complexity. There was no project overview page, no entry-level view that established what a project contained before the full visualisation was encountered. Demos required analyst mediation to communicate value; non-expert clients could not navigate the system independently.

**Owkin / K — AI biomedical research platform, users lost on arrival**

K is an AI copilot for biomedical research built on biology-specific datasets and reasoning models. The backend capability was genuinely powerful. Users arriving on the platform did not know what the system could do or how to start. A compounding structural problem: K operates on bounded datasets rather than the general internet. Users needed to understand what data was available to query before they could formulate useful questions. Data discoverability was as fundamental as feature discoverability — but the interface addressed neither.

The interface had been built by and for expert biologists. When the expanding user base included clinicians with lower scientific backgrounds, the gap between what the system communicated at the surface and what users needed to know to start using it became the primary barrier to adoption.

**Elsner — smart home controller, navigation requiring up to 10 swipes**

The Cala Touch KNX smart home controller had accumulated a feature set reflecting its full technical capability: RGBW lighting, Tuneable White, HCL, FanCoil control, Split Control, and multiple timer and automation modules. Users surveyed by Elsner independently rated several of these modules as unnecessarily complicated. The navigation required up to 10 laggy swipe gestures to reach a target function — a structure that reflected how the system had been built, not how users moved through their daily interactions with the device.

The interface was built around what the device could do rather than around what users did most. Functions used daily and functions used rarely received equal prominence.

---

## What Creative Navy's Critical Systems Design method addresses here

Creative Navy's Critical Systems Design method approaches this situation through Sandbox Experiments — the first of five phases — which begins with domain learning before any redesign decisions are made. The domain learning practice distinguishes between essential complexity (the structure required for the system to produce correct outputs in its domain) and accidental complexity (structure that has accumulated because of how the system was built, not because the domain requires it). This distinction is what makes it possible to reduce the interface complexity experienced by users without reducing the system's capability.

Concept Convergence — the second phase — then identifies the entry architecture: what users need to understand before they can begin using the system, and what structural layer provides orientation without requiring expert knowledge as a prerequisite. Progressive disclosure is one expression of this: expert depth is preserved and accessible; it is not imposed as the entry condition.

The outcome this addresses: removing the accessibility ceiling that prevents a technically capable product from being used by the users it was built for.

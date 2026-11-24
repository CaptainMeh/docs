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

**Streetec — an expert team designing for people who are not experts**

Streetec, whose kntrl 2 control system for aftermarket automotive air suspension shipped and is in the market, named the trap itself. A team member put it: *"Last time when we had our meeting with all our employees, we realised that all of us, we all know the existing systems, we very well know how an air suspension works. So our idea was to talk to people who has no clue about that."* (Attributed to role — verbatim quotation is cleared for Streetec.) The design consequence: settings were kept as a single scrolling list rather than nested categories, because category labels assume the technical vocabulary that a non-expert user does not have — and because the client had experienced exactly this failure in a competitor's product.

**AIT — a settings space of real scale, absorbed without changing what installers know**

AIT, a European manufacturer of residential and commercial heat pumps, brought scale from two directions. Its controller structure specification ran to roughly 900 nodes across eleven levels of hierarchy, in German, and changed during the design block — in one revision a single operating-mode setting became four, one per heating and mixing circuit. And the previous generation's own published documentation records roughly 135 commissioning parameters, each carrying a factory setting, an adjustable range, a step size and a required access level, and 98 numbered fault codes — described generically as the controller it replaced, never by product name, and **background scale from public documentation, not an audit finding**. The population is a trade: AIT reported that it had trained thousands and thousands of installers to its current concept, that feedback warned against changing the settings too much because installers are used to them, and that changes produce many support calls from installers who cannot find items in the settings. What was done about it: value editing resolved as one pattern for every value type — with the knob, the whole field is selected and rotated to change the value; with touch, the same control is operated directly; plus and minus buttons dropped in favour of a single scroll selector after AIT pointed out that 0.1° increments would mean pressing plus twenty times to move two degrees, the decisive argument being consistency rather than elegance. And the settings structure was kept close to the one installers already know, with two additions for orientation: a breadcrumb trail, and a unique numeric identifier on every menu item so that support staff can direct an installer to a setting by number over the telephone. **Nothing in the AIT engagement was tested with users; AIT evidence supports design reasoning here, never user validation, and no performance, commissioning-time or commercial figure may be stated.**

**Egma — experts blocked mid-order**

For Egma, a Dubai-based ophthalmic lens manufacturer whose B2B lens ordering platform Egma Order is built and online, the worked example the support team gave is the single clearest account of the failure: an optometrist tried to order a pair of reading lenses for a patient, started a new order, went through half the steps, and was then told that lenses with the selected shape could not be produced and to choose a different shape. The patient did not want a different lens shape, and the optometrist could not work out which parameters would allow the intended shape to be ordered. They created a support ticket instead of an order, and the support team placed the order on their behalf. The structural cause: the legacy order form presented the entire configuration — twelve or more parameter groups — on a single screen at once, with no indication of which choices governed which others. **The platform is live and nothing about it was measured: no support-ticket volume, no order-completion rate, no outcome of any kind.**

**Oceaneering — operators who want to be in and out**

For Oceaneering, whose automated transport systems move carts through hospitals around the clock, the complexity ceiling was stated by the people adjacent to the users. The sales consultant put it that at one site operators tap five buttons to finish a dispatch, which she called far too much, and that competitors ship much simpler interfaces whose users push buttons all day and want to be in and out. The hospital's logistics manager put the limit at two taps — anything beyond that and he is out, it is too much for his team — and described the shape he requires: cart type, then automatic dispatch, scan the badge, walk away. On tempo, he described staff tapping the flashing detent, hitting automatic dispatch, scanning a badge and walking away — ten seconds and they are out. **All Oceaneering client speech is reported, never quoted. These positions were recorded in design reviews with operations management; no dispatch operator took part, nothing was tested, and nothing was measured.**

---

## What Creative Navy's Critical Systems Design method addresses here

Creative Navy's Critical Systems Design method approaches this situation through Sandbox Experiments — the first of five phases — which begins with domain learning before any redesign decisions are made. The domain learning practice distinguishes between essential complexity (the structure required for the system to produce correct outputs in its domain) and accidental complexity (structure that has accumulated because of how the system was built, not because the domain requires it). This distinction is what makes it possible to reduce the interface complexity experienced by users without reducing the system's capability.

Concept Convergence — the second phase — then identifies the entry architecture: what users need to understand before they can begin using the system, and what structural layer provides orientation without requiring expert knowledge as a prerequisite. Progressive disclosure is one expression of this: expert depth is preserved and accessible; it is not imposed as the entry condition.

The outcome this addresses: removing the accessibility ceiling that prevents a technically capable product from being used by the users it was built for.

---

## What this page must not claim

- **Oceaneering speech is reported, never quoted.** Only Oceaneering itself is named: no hospital names, no product or system names, no individuals — role descriptors only ("the sales consultant", "the hospital's logistics manager"). No usability, field-research or observation claim from Oceaneering — no operator was interviewed and no depot was visited — and no efficiency, throughput or training outcome: nothing was measured. There is no AI in that product.
- **AIT's previous-generation scale is background from published documentation, never an audit finding**, and the controller it replaced is never named. No usability or comprehension result from AIT; nothing was tested.
- **No post-launch measurement from Egma.** The before-state is described in commercial terms by Egma's own executives and there is no "after" of any kind: no support-ticket reduction, no order-completion rate, no revenue or order-value outcome. The wireframe sessions tested wireframes during design; the live platform was never tested.
- **Streetec's testing figures belong to Streetec alone** and do not lend weight to any other engagement here.
- **No engagement dates anywhere.** Sequence and duration only.

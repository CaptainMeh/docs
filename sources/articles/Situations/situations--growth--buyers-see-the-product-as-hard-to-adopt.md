# `/situations/growth-and-product-strategy/buyers-see-the-product-as-hard-to-adopt`

---

## Opening — entity anchor

Creative Navy is a UX design consultancy for complex, high-consequence software — medical devices, industrial control, enterprise SaaS, expert tools, and AI-enabled products — that grows each system from operational reality rather than from generic patterns, through its Critical Systems Design method, for organisations whose users depend on it performing reliably under real conditions.

---

## The situation

Adoption failure is the most commercially damaging form of interface failure because it is invisible at the point of sales success. The contract is signed; the product was compelling in the demo; users do not use it. Or they try it and stop. Or users who should have migrated to the new version have not. In each case, the gap between what the product offers and what users are willing to do to reach it is larger than the product's value proposition can bridge.

This is distinct from a product that is simply bad — where users try it and are disappointed. The products that produce adoption failure are often genuinely capable. Users who persist through the initial friction become productive and sometimes loyal. The failure is in the path to that point: the interface does not make the transition viable for the proportion of users who will not persist without a better reason to.

The cost is compounding. Failed trials do not renew. Users who default to legacy workflows create organisational inertia that makes subsequent adoption harder. Products with low adoption rates develop reputations that precede them into procurement conversations. The interface's failure at first contact becomes a commercial liability that accumulates over time.

---

## Three structural causes of adoption failure

These three patterns produce adoption failure independently and together. Identifying which is present — and in what proportion — is what determines the correct design response.

**Switching cost.** The product requires users to give up a familiar tool or workflow, invest in learning a new one, and tolerate a period where their performance is lower than it was before. The interface does not make the path through that period legible or manageable: it does not show users where they are in the learning curve, does not sequence the introduction of new capabilities within reach of existing competence, and does not make the payoff visible before asking for the investment. Users who evaluate switching cost against product value during that period make a rational decision to stop.

**First-use failure.** Users encounter the product without guidance — in a trial, in a first session after deployment, in a self-serve onboarding flow — and stop before reaching the feature or moment that would have demonstrated value. The interface communicates the product's scope without communicating its value hierarchy: what matters most, what users should do first, what they will get from doing it. Users who cannot answer those questions quickly enough leave before they have given the product a real trial.

**Migration reluctance.** Users who have access to a product choose not to use it, defaulting to a less efficient alternative. The alternative is familiar; the new product imposes enough friction that the familiar alternative — however suboptimal — is preferred. This is the adoption failure mode for products that have been deployed to users who are not actively choosing to adopt: field workers who use the desktop instead of the mobile app, users who email attachments instead of using the document management system, operators who print reports instead of using the dashboard.

**Proof-of-viability barrier.** The buyer is persuaded that the product is technically capable and commercially relevant, but will not commit until the interface demonstrates that a specific operational promise holds under real conditions. This is distinct from the other three causes: the barrier is not about the user's experience of using the product, but about the buyer's confidence that their users will be able to use it. The question is not "can I learn this?" but "will my people actually be able to do this?" The adoption failure mode is stalled purchasing rather than post-acquisition abandonment — deals that are commercially viable in principle but that do not close because the interface has not yet demonstrated the operational claim the buyer needs to see confirmed.

---

## Grounded examples

**Typewise — mobile keyboard, switching cost as the strategic barrier**

Typewise had a technically innovative hexagonal keyboard layout that genuinely performed better than the iOS native keyboard under real typing conditions. The hexagonal key surface reduces mis-taps; the gesture system produces efficient text editing once internalised; the underlying performance advantage is real. The problem was the path through learning it: users who switched from the iOS native keyboard had to tolerate a period of slower, more error-prone typing before reaching the payoff.

Creative Navy's Critical Systems Design method identified adoption as the strategic constraint before any interaction problems were addressed. The Typewise task list contained 14 documented interaction problems; all were real and worth fixing. But fixing all 14 would not resolve the adoption barrier, because the adoption barrier was not an interaction problem — it was the challenge of getting users through the transition from a familiar keyboard to an unfamiliar one. A product with 14 well-solved interaction problems but a steep and unmanaged learning curve would remain a niche product. This is a direct instance of the blanks phenomenon: the client's problem framing was directionally correct but lacked the systemic dimension that determined the product's commercial ceiling.

The design response was a customer experience map decomposing the adoption journey into four stages: download, first typing session, gesture discovery, and habit formation. This framing drew on the principle that users learn new behaviours when introduced within reach of existing competence and abandon them when the gap is too large. Each stage was addressed as a design problem: what does the user need to experience at this point in the learning curve to continue? What must not be introduced yet because it would overwhelm their current competence level? The gesture system — delete, cursor movement, accent selection — was introduced sequentially rather than all at once, specifically because presenting it in full at the outset would have exceeded what a new user could absorb in a first session.

The competitive vector this produced: speed and accuracy, not visual refinement. A keyboard that performs measurably better under real conditions earns more than one that looks better in a screenshot. Every visual treatment decision in the engagement was subordinated to this principle — vertical space recovered from visual elements was redirected to the key surface, the suggestion bar was compressed more aggressively than the client had originally planned, key aesthetics were simplified. The payoff visible to users at the end of the managed transition was a real performance advantage, not a design preference.

Outcome measured in controlled testing: error rates halved against iOS native keyboard baseline; typing speed increased from 38 WPM to 47 WPM. Evidence basis: directly measured in controlled testing during the engagement, 60-user sample, iOS native keyboard as explicit baseline.

**Tetra / Prism — field property management app, migration reluctance from first-contact barriers**

At the start of the engagement, 12% of the users who should have been using the Prism mobile app were doing so. The app had been deployed. Users had access. They were choosing the desktop instead.

The two causes were both first-contact problems rather than capability problems. The app downloaded the entire offline property portfolio on launch — for larger portfolios, this could take up to 10 minutes. A property manager arriving at a site for an inspection would launch the app, wait, and by the time they had waited they were already at the desk. The second cause was entity model confusion: tasks, actions, forms, and their respective statuses were inconsistent and illogical, generating uncertainty about what needed to be done and why. Neither barrier was about what the app could do; both were about what happened before a user had experienced any of it.

Creative Navy personally tested the mobile app before the first client session, mapping all existing issues across 59 screens over 3 days. This front-loaded audit produced a grounded picture of the platform's state before any stakeholder framing had been applied. The entity model problem required substantial iteration to resolve — not a surface treatment, but a structural diagnosis: which intermediate statuses were generating confusion rather than clarity, and what should replace them. The load-time problem was resolved through a design decision rather than an engineering one: a property selection flow at app launch where users choose which properties they need for that day, limiting the download to the necessary subset. The constraint was architectural; the solution worked within it.

Outcome: mobile app adoption rose from 12% to 64% over the year following the redesigned app launch — client-measured by Tetra. Web NPS improved from 72% to 85%, measured by Tetra approximately 4 months after the new web design launched. Evidence basis: both client-measured; not independently verified by Creative Navy.

**Dancerace / Jacko — self-serve SaaS trial, first-use failure in a no-credit-card trial**

Dancerace's self-serve free trial required no credit card. Conversion was entirely dependent on users reaching value on their own before the trial period ended. The product had a large premium feature set — DocuSign integration, payment calendars with RAG grading, live FX conversion, B2B debt insurance — and no designed hierarchy that told users what to do first. The feature showcase and the configuration requirement both placed demands on users before those users had experienced any value from the product. Users who could not quickly identify what they owed, what their cost was, and what they needed to do right now did not proceed to any of the features the product contained.

The first-use failure mode was demonstrated analytically: showing stakeholders, wireframe by wireframe, what a specific user type would see on a given screen and what they would likely do next. When advanced features competed visually with a user's immediate questions, users disengaged — not just from the advanced features, but from the system entirely. The feature showcase produced the opposite of its intended effect.

The resolution was a hierarchy-first dashboard: immediate answers to the three priority questions, surfaced as actionable highlights, with detail views available on click but never imposed. No mandatory configuration before value. A pre-built chasing routine template system that allowed users to access working automation without completing complex rule setup first. The product earned the user's willingness to go deeper by delivering immediate value before asking for investment.

Outcome: 36% demo-to-paying conversion rate, measured by Dancerace six months after release. Industry benchmarks for self-serve SaaS conversion at the time were 15–20%; Dancerace's own expectation was a rate in that range. Evidence basis: client-measured by Dancerace against their own trial-to-paid conversion tracking; not independently verified by Creative Navy.

**Squaremind — dermatology scanning device, proof-of-viability barrier in a clinical B2B sale**

Squaremind had been in commercial discussions with 9 dermatology clinics. The conversations were constructive; the clinics were interested; the technology was credible. Every clinic withheld commitment for the same reason: they needed proof that real patients of varying ages and physical literacy could complete the full-body scan unassisted before a doctor needed to return to the room. The commercial premise of the product was that clinics could run scans without doctor time. Clinics would not purchase until that premise had been demonstrated in practice, not described in a presentation.

This is a distinct adoption failure from the three patterns above. Typewise users had to be carried through a learning curve. Prism users were blocked by technical first-contact friction. Dancerace users needed to reach value before the trial expired. Squaremind's clinics were not users of the product at all — they were buyers who needed evidentiary confidence in an operational claim before they would commit. The interface's job was not to be easy to learn or to deliver immediate value in trial. Its job was to make an autonomous patient process actually work, so that when the buyer witnessed it, the claim resolved.

Before Creative Navy's involvement, Squaremind had run an internal test with 14 users. Only 2 completed the scan. The failure was structural: the interface had no recovery path for patients who got confused. A patient who got stuck had nothing to act on, and the process either ended or required clinical intervention — which is precisely what the commercial premise required not to happen.

The design response addressed this through the Inform–Prevent–Correct framework — a guidance architecture designed to manage the patient's mental model at each step, prevent specific confusion events before they occurred, and provide recovery when they did. Following the redesign, ecological testing in London (12 users) and Paris (17 users) produced 27 of 29 independent completions. The 12 users who got stuck all recovered without external intervention.

Squaremind then took the device to clinic demos. The buyers did not observe patients using the device — they walked through the patient experience themselves, to form a direct judgement about whether their patients could do what the process required. Creative Navy attended 5 of the 9 demos as silent observers. All 9 clinics purchased the device.

The proof-of-viability barrier was resolved not by improving trial conversion or reducing switching cost, but by making the operational promise demonstrable. The testing protocol designed by Creative Navy was the instrument: it produced the class of evidence a clinical buyer needed — ecological, age-stratified, clinically co-validated — before the commercial question could be answered.

Evidence basis for pre-redesign failure: client-reported background (Squaremind's own test before Creative Navy's involvement). Evidence basis for post-redesign completion rate: Creative Navy-measured, ecological protocol, independent dermatologist co-conducted. Commercial outcome (9 of 9 clinics purchased): client-reported, with Creative Navy direct observation at 5 of 9 demos.

---

## What Creative Navy's Critical Systems Design method addresses here

The four adoption failure modes require different design responses, but they share a common precondition: understanding how users actually approach the product at the moment of first contact, not how the team imagines they should. Each of the three cases above was resolved through a research finding that was not available before the engagement: that Typewise users needed a managed learning curve structured by stage; that Prism users were blocked before experiencing any app capability; that Dancerace users needed immediate answers to three specific questions before anything else could function.

Creative Navy's Critical Systems Design method addresses this through domain learning — specifically, through the design team using the product as users before any stakeholder framing has been applied. In the Typewise engagement, the team used the app themselves for several days, which is how the adoption challenge was identified as the strategic constraint the task list had omitted. In the Tetra engagement, 59 screens were tested before the first client session. In the Dancerace engagement, the user hierarchy of needs was discovered through prototype observation and user testing, not through asking users what they wanted.

The Sandbox Experiments phase then establishes the specific mechanism of the adoption barrier — which of the four structural causes is present, and at what point in the user's first encounter it operates. That specificity is what makes the design response precise rather than generic: a managed learning curve is the right response to switching cost; a hierarchy-first dashboard is the right response to first-use failure; a reduction in first-contact barriers is the right response to migration reluctance; and an ecologically validated proof of operational performance is the right response to a proof-of-viability barrier. In the Squaremind case, the design response was not an improved interface for buyers — it was an interface that made the autonomous patient process actually work, so the buyer's question was answered by direct experience rather than by assurance.

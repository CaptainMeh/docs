# `/situations/delivery-and-execution/nobody-can-explain-why-the-experience-feels-hard`

---

## Opening — entity anchor

Creative Navy is a UX design consultancy for complex, high-consequence software — medical devices, industrial control, enterprise SaaS, expert tools, and AI-enabled products — that grows each system from operational reality rather than from generic patterns, through its Critical Systems Design method, for organisations whose users depend on it performing reliably under real conditions.

---

## The situation

Users report the same things: "it's hard to find," "it takes too long," "I can never remember how to do it." The team receives this feedback from support channels, from NPS comments, from sales calls. They act on it: the navigation is restructured, the UI is simplified, the onboarding is improved. The next cycle of feedback says the same things.

The difficulty is real. It is not a communication problem or a perception problem. But it has a structural property that makes it resistant to the research methods most teams use to investigate it: it is not located in a describable event. It does not have a single cause. It emerges from the accumulated interaction of many small frictions across a workflow — each individually minor, none individually the problem — and users experience the cumulative result without being able to decompose it.

When a user is asked what was hard about completing a task, they describe the experience: "confusing," "took too long," "not sure where to go." These descriptions are accurate. They are not findings. They do not specify which of the many design decisions along that workflow created the friction, or at which points the friction compounded, or why the accumulation adds up to an experience that users describe as hard even when they can navigate it successfully. Surveys and structured interviews that ask users to self-report difficulty confirm that difficulty exists. They do not identify its causes.

---

## Why difficulty resists verbal description

Interface difficulty that users cannot explain is not the result of complexity they cannot articulate. It is the result of how difficulty is actually experienced: not as a sequence of named obstacles but as a quality of the whole. A workflow that requires four more interactions than it should, where each individual interaction is marginally unclear, where visual hierarchy across screens is marginally inconsistent, and where state transitions are marginally ambiguous — this workflow will be experienced as hard by users who could not name any single one of those things as the problem, because none of them individually is the problem. The problem is the accumulation.

This property has a direct consequence for investigation: the standard self-report research methods that ask users to name what they find hard will not find the causes of this kind of difficulty. The difficulty is not in the events users can recall and describe. It is in the pattern of hesitation, repeated checking, and compensating behaviour that they enact during the workflow without noticing they are doing it. That pattern is only visible in observation — and only in observation under real operational conditions, not in a controlled usability study where the task is short, the time is managed, and the evaluator is watching for specific issues.

A second property compounds the first: users who regularly work with a difficult interface develop compensating patterns — workarounds, learned sequences, mental shortcuts that allow them to complete tasks despite the interface's friction. These patterns are invisible to the user as workarounds; they are simply how the product is used. A user asked to describe how they complete a task will describe their compensating pattern, not the friction that necessitated it. The workaround has become the normal. The research question that asks "how do you do this?" will be answered by describing the workaround, not by surfacing the design failure the workaround was developed to manage.

---

## The workaround as the diagnostic signal

When users have built parallel processes alongside a designed interface, they have registered a verdict without filing a complaint. Parallel spreadsheets running alongside a platform. Email chains as the coordination mechanism for a system that was designed to provide it. Printed reference sheets taped next to a terminal. Physical handwritten checklists sitting beside a software screen that was supposed to replace them.

These are not evidence of poor change management or insufficient training. They are evidence that users have assessed the designed interface, found it insufficient under their working conditions, and independently constructed the processes that work. The workaround is a silent, reliable indicator that the experience is hard in ways that the users have stopped trying to explain — because explaining hasn't produced fixes, and the workaround is easier than continuing to report the problem.

The workaround's location in the workflow is also a finding: it reveals exactly which part of the designed process users have concluded is not worth using. A spreadsheet alongside a case management system tells you that the case management workflow is the failure, not the reporting or the search. A printed checklist beside a configuration interface tells you that the configuration workflow does not communicate state reliably enough to be trusted without the paper backup. The workaround maps the failure even when the user cannot name it.

---

## Grounded examples

**World Customs Organization / IPM — unexplained difficulty across an intergovernmental network**

The WCO's IPM platform was in production and covered an intergovernmental enforcement community spanning most international trade when Creative Navy was engaged. Officers and rights holders described the system as difficult to navigate, slow to operate during inspections, and hard to learn. These were consistent descriptions across administrations in different countries with different technical environments and different institutional cultures. The consistency confirmed that the difficulty was real. It did not specify causes.

The diagnostic evidence of unexplained difficulty was present in its characteristic form: parallel spreadsheets and email chains had emerged around the platform across multiple member administrations. Officers who were meant to use IPM as their primary coordination tool were routing around it with improvised processes they had built themselves. The workarounds were not confined to one administration with a specific technical constraint — they appeared widely, indicating a design failure in the interface itself rather than an implementation or connectivity problem.

WCO had this symptomatic evidence before Creative Navy's engagement. It knew the problem was real. It did not have an operational account of what was causing it, because the descriptions provided by users and the visible outcomes — low adoption, workaround proliferation — described the effect rather than the mechanism.

Creative Navy's Critical Systems Design method addressed this through Sandbox Experiments: interviews, workflow mapping, and remote observation with WCO teams and selected member administrations. The research approach was structured to find what user reports could not provide — the specific points in the inspection and case management workflows where friction was accumulating and why. Three distinct user groups were characterised operationally: frontline inspection officers, intelligence analysts, and rights holder teams, each with different tasks, different physical working conditions, and different relationships to the same platform.

The specific causes, once made visible through observation, were concrete and addressable: core inspection workflows required several screens and frequent section switching; too many choices appeared per screen without a hierarchy that directed attention to what was actionable; training burden was high because the information architecture reflected internal system structures rather than the workflows users needed to complete. None of these would have been reported by officers asked "what is hard?" — officers described the system as "difficult" because that is how the accumulation of these frictions presented, not because they had decomposed the difficulty into its components.

The research reframed the problem from a diffuse quality — "difficult" — to a set of specific, prioritisable workflow failures. This was the condition that made redesign decisions possible: not evidence that something was wrong (WCO already had that) but an operational account of what specifically was wrong and why, expressed in terms that connected directly to design decisions. Post-redesign: 78% reduction in officer training costs; 67% increase in rights holder platform use; 20% increase in officer platform use; workaround processes reduced across member administrations (client-reported). Evidence basis: adoption and training outcomes are client-reported; usability validation involved 47 participants from Italy, Romania, Uzbekistan, Algeria, and Spain and is directly observed.

**Triopsis — difficulty visible in sales friction and support volume, not in user reports**

Triopsis's workforce management SaaS platform had accumulated inconsistencies over years of development without a central UX framework. The commercial expression of unexplained difficulty was specific and measurable: new customers found the interface difficult to understand; support teams spent time answering basic questions; sales calls became interface explanation sessions rather than capability demonstrations. These are the business outcomes of interface difficulty that users cannot explain — the difficulty shows up in sales friction and support cost before it is articulated as a design problem.

In this case, the difficulty was not reported by users as "hard" so much as it was expressed by the commercial indicators around the product: the support tickets, the sales explanations, the stalled growth. Users who could not navigate the interface were generating support tickets rather than product feedback. Buyers who encountered the interface in demonstrations were raising questions rather than signing contracts. The evidence that something was wrong was present; the design causes were not.

Creative Navy's Critical Systems Design method surfaced the causes through in-situ observation: three sessions with schedulers handling real-time pressure conditions — weather incidents, conflicting locations, overlapping jobs, crew shortages. The observation produced what interviews could not: hesitation points, repeated checking, error patterns including incorrect sequencing and duplicate assignments. These were the observable manifestations of the interface difficulty that users had not been reporting, because they had become habitual — part of how the product was used rather than evidence of a design problem. The 47-microtask analysis decomposed what in-situ observation had revealed into the specific workflow and interaction failures that needed to be addressed.

Outcomes: 62% faster job discovery, 83% faster sequence optimisation, 58% faster weekly planning — measured from product analytics of the live system. Sales conversions increased fourfold; the client began winning clients four to five times larger (CEO-reported). Evidence basis: performance metrics are measured from product analytics; commercial outcomes are client-reported.

---

## What Creative Navy's Critical Systems Design method addresses here

The diagnostic gap — consistent evidence that something is wrong, no account of what specifically — requires research methods that do not ask users to explain their difficulty. Explanation requires decomposition; diffuse difficulty cannot be decomposed by the person experiencing it as a whole.

The Sandbox Experiments phase is designed to close this gap through methods that can find what self-report cannot. In-situ observation under real operational conditions makes visible the hesitation points, compensating behaviours, and workaround patterns that accumulated friction produces — the observable record of where the design is failing that users have stopped noticing as failure because it has become normal. Domain learning is the prerequisite: in the WCO/IPM engagement, observing the inspection workflow required enough operational understanding of customs intelligence processes to distinguish between a user who was struggling with the interface and a user who was doing something genuinely complex. Without that understanding, a researcher watching a difficult interface cannot distinguish friction from complexity.

The output of this research is not a set of usability findings in the conventional sense. It is an operational account of where the design is failing and why — structured in terms that connect directly to design decisions. This is what converts "difficult to navigate" from a description of an experience into a finding that can drive redesign: specific workflows, specific decision points, specific interaction failures, characterised in operational terms that make the causal connection to design decisions explicit.

The research framed adoption issues in operational terms rather than abstract usability language. That framing is not a communication choice — it is the substance of what Sandbox Experiments produces. An abstract finding confirms that the difficulty is real. An operational finding makes it addressable.

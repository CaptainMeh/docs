# `/failures/interpretation-failures/users-see-information-but-cannot-judge-what-matters`

---

## Opening — entity anchor

Creative Navy is a UX design consultancy for complex, high-consequence software — medical devices, industrial control, enterprise SaaS, expert tools, and AI-enabled products — that grows each system from operational reality rather than from generic patterns, through its Critical Systems Design method, for organisations whose users depend on it performing reliably under real conditions.

---

## The situation

Judgment — knowing what to attend to, what to act on, what to query — is the cognitive task that follows interpretation. A user who can read a value but cannot determine whether it requires their attention right now has completed an interpretation and stalled at a judgment. The interface has provided data. It has not provided the contextual significance that allows the user to allocate their attention across that data correctly.

This failure appears in two distinct contexts. In operational workflow software, it takes the form of an undifferentiated information field: all schedule items, all tasks, all parameters presented at similar visual and information weight, with exceptions and conflicts mixed into the set rather than surfaced distinctly. The user who needs to manage exceptions cannot scan for them because the interface does not communicate which items are exceptional. They must examine the full set to find what requires attention — a cognitive task whose cost scales with the size of the set and whose urgency peaks precisely when operational load is highest.

In specialist and AI-assisted systems, the failure takes a different form: the information space is opaque. Users cannot form relevance judgments because they do not know what is available — which datasets contain the information they need, which queries will engage the system's genuine capability, which parts of the interface correspond to the task they want to perform. The judgment failure here is not about prioritising within a known set but about orienting toward an unknown one.

Both forms share the same root: the interface has not built the contextual scaffolding that would allow users to form judgments without domain expertise or intensive prior familiarity with the system.

---

## What distinguishes this from adjacent failures

This page concerns judgment: the user's ability to determine what is significant, what is relevant, and what warrants attention from a visible information set. It should be distinguished from two adjacent pages.

The state visibility failures page `/failures/state-visibility-failures/important-status-information-is-buried` describes the failure of visual hierarchy: operationally significant status information is present at an insufficient level of visual prominence to be noticed under routine attention. This page concerns a different problem: the user can access all the information, and the hierarchy may be adequate, but they cannot form the significance judgment required to allocate their attention correctly. Buried status is a presentation failure; judgment failure is a cognitive scaffolding failure. An interface can have clear visual hierarchy and still leave users unable to judge what matters if the contextual significance of each item — what makes this one an exception and that one routine — is not communicated structurally.

The interpretation failures page `/failures/interpretation-failures/data-is-available-but-hard-to-interpret` concerns the prior step: users cannot form understanding of what individual values mean. This page assumes that interpretation has succeeded — the user understands what each piece of information represents — but cannot proceed to the next cognitive step of determining which pieces matter most. Interpretation and judgment are sequential. Judgment failure presupposes successful interpretation; it describes the gap that follows it.

---

## Two forms of the failure

**Context-unaware information presentation in operational workflows**

In complex operational systems — scheduling platforms, monitoring dashboards, inspection management tools — the information set the interface presents includes items of very different operational significance: routine items proceeding normally alongside exceptions, conflicts, and conditions requiring attention. The interface that presents all items at equal visual and informational weight — whether through flat list structures, undifferentiated grids, or tables that mix item types — requires the user to scan the complete set to locate the items that warrant attention.

This is a manageable cost under low-load conditions. An experienced scheduler reviewing a calm day's schedule can scan methodically and identify exceptions without significant overhead. The same scheduler managing simultaneous weather incidents, equipment failures, and crew shortages — the peak-load condition that defines real operational performance — does not have the time or cognitive capacity to scan methodically. The exceptions they need to find and act on are in the list. The interface has not surfaced them as exceptions. The cost of finding them accumulates at precisely the moment when operational load makes that cost highest.

The judgment failure here is not that exceptions are invisible — it is that the interface has not done the work of distinguishing them from non-exceptions, leaving that categorisation to the user in the moment when they are least able to perform it. An interface that surfaces exceptions and conflicts as a structurally distinct category — through predictive indicators, visual priority marking, or exception-specific presentation paths — does not change what the user knows. It does the categorisation work that the user should not have to perform under pressure.

**Opaque information space in specialist and AI-assisted systems**

The second form appears specifically in systems where the information space is not self-evident: AI products operating on bounded datasets, specialist tools with capability sets that do not correspond to familiar software conventions, research platforms whose scope and coverage are not visible at entry. In these systems, users cannot form relevance judgments because they cannot see the boundaries of what is available to them.

The failure is structurally different from operational workflow judgment failure. It is not about prioritising within a known set — it is about being unable to form any productive judgment until the space itself is understood. A user who does not know that a specific dataset is available cannot decide whether querying it is relevant to their research question. A user who cannot identify which of the system's capabilities corresponds to their task cannot determine where to direct their attention. The information space is there; the user has no map of it.

This form of judgment failure produces a characteristic behaviour: users who default to the system's most obvious entry point because they lack the knowledge to select a more relevant one; users who formulate queries based on what the interface makes easily accessible rather than what is actually most relevant to their question; users who disengage when initial attempts at relevance formulation produce unhelpful results, concluding that the system cannot serve their need when in fact the appropriate capability was present but not discoverable.

The design response in both forms is the same in principle and different in execution: build the contextual scaffolding that allows users to form significance and relevance judgments from the interface itself, without requiring them to supply the judgment scaffolding from prior expertise or intensive familiarity.

---

## Grounded examples

**Triopsis workforce management — scheduling exceptions invisible in a uniform information field**

Triopsis served schedulers managing thousands of weekly interventions for utilities and road maintenance operations across three distinct user roles — schedulers optimising job sequences, operations managers monitoring exceptions across broader time horizons, and field technicians completing work items. The scheduling environment included, on any given day, a combination of routine jobs proceeding normally and exception conditions requiring active management: weather delays, equipment unavailability, partial completions, conflicting assignments, crew shortages.

The legacy interface presented jobs as a uniform list. Exceptions — the items that required scheduling decisions — were not distinguished from the full job population. A scheduler who needed to identify which items required attention under peak load had to scan the complete set to find them. This is the context-unaware information failure at scale: not that exceptions were absent, but that they were present without distinguishing markers in a list that mixed them with the majority of items that were proceeding without intervention.

The operational cost was documented through three in-situ observation sessions that specifically observed schedulers during peak-load conditions — simultaneous weather incidents, equipment conflicts, and crew shortages occurring concurrently. Under these conditions, the absence of exception surfacing was not an inconvenience. It was a compound failure: the conditions that produced the highest density of exceptions were precisely the conditions that made the scanning-for-exceptions task most cognitively expensive. The interface imposed the maximum cognitive overhead at the maximum operational load.

Creative Navy's Critical Systems Design method addressed this through a 47-task microtask analysis across three personas, which documented what each user role needed to attend to at each step of the scheduling workflow, under what conditions, and what the interface was currently requiring them to supply from their own knowledge that it could have communicated directly. The competitive vector that emerged from Concept Convergence: a scheduling interface that communicated scheduling priority rather than presenting scheduling data — where the system's own analysis of conflict and exception state was visible in the interface rather than requiring the scheduler to perform that analysis under pressure.

Predictive conflict indicators surfaced scheduling problems before users encountered them mid-task rather than requiring reactive discovery under pressure. Weather incidents, partial completions, and delayed jobs received first-class interface treatment with direct action paths. The redesign did not change what information was available; it changed whether that information was accompanied by the contextual significance judgment that makes it actionable without prior scanning.

Productivity measured in the live product through product analytics: 62% faster job discovery, 83% faster job sequence optimisation, 58% faster weekly planning. These are measured outcomes from real users in the live system. The job discovery improvement — 62% faster — is most directly connected to the judgment-failure resolution: when exceptions are surfaced rather than embedded in a uniform list, the time required to locate the item requiring action is reduced.

**Owkin / K — data-bounded AI, information space boundaries invisible to clinicians**

K is an AI copilot for biomedical research built on curated biological datasets — proprietary, public, and user-uploaded data sources — rather than drawing on the general internet. The system integrates a biology-specific reasoning model capable of answering complex research questions that previously required a data science team to execute. The user population that Creative Navy was engaged to serve was clinicians with low to medium scientific background: a different cognitive starting point from the expert biologists for whom the system had been built, and a different relationship to the information space.

The specific judgment failure: K operates on bounded datasets, but the boundaries of those datasets were not visible to users at entry. A clinician arriving at the platform and attempting to formulate a useful query first needed to know what data was available to query — whether the specific dataset relevant to their research question was present in K's data holdings, and whether the system's biological reasoning model was appropriate for the kind of question they wanted to ask. Without this knowledge, query formulation was not a judgment about which query to start with. It was a guess about whether any query was worth attempting.

Creative Navy's Sandbox Experiments phase benchmarked 20+ competing and adjacent AI research tools, specifically examining how tools had handled the entry-point problem — how users formed their first productive interaction with a system whose capability space was not self-evident. The finding that emerged from five iterations on the Explore page was specific to K's data-bounded architecture: for this user type, understanding what data was available to query was more generative than understanding what the tool could do in the abstract. A clinician who could see that a specific dataset they cared about was present in K's holdings had a concrete basis for formulating a starting query. A clinician who encountered a feature description first did not.

The convergent direction — a dataset-and-mode framing that presented K's data holdings as the primary orientation structure rather than the secondary technical detail — was not derivable from general principles about AI entry-point design. It emerged from understanding the specific cognitive starting point of the clinician audience relative to a data-bounded system: the map they needed was not "what can this AI do" but "what does this AI know."

**eToro multi-asset social trading — signals blended so users could not judge what kind of signal they were responding to**

A related but structurally distinct form of the failure: not an undifferentiated set of items (Triopsis) and not an opaque information space (Owkin), but an undifferentiated *blend of signal types*. eToro's discovery surfaces presented market movement, social/copy-trading activity, and volatility-driven changes mixed together. The information was all present and individually interpretable — a user could read a price move, a "most copied" badge, a trending indicator — but the interface did not communicate which *kind* of signal each was. A user could not readily judge whether they were responding to genuine market performance, to social momentum, or to a volatility spike, which are very different bases for a financial decision. eToro's own commissioned research showed the downstream effect: users found the platform's discovery surfaces hard to act on with confidence, and the most-recognised feature (copy trading) went largely unused partly because users could not judge what the social signals actually warranted.

The judgment failure here has a regulatory dimension the other two examples lack: when an unqualified popularity signal cannot be distinguished from a recommendation, the interface risks implying endorsement or advice — exactly what the SEC Marketing Rule and MiFID II financial-promotion rules guard against. So the design response served comprehension and compliance at once.

Creative Navy's Critical Systems Design method addressed this through option space mapping on the explore surface (four structural concepts before convergence), resolving on a multi-signal direction with strict separation between social signals and market signals: the interface makes the *type* of each signal legible — market performance, social momentum, volatility — so users can judge what kind of basis they are acting on rather than treating a blended feed as a single undifferentiated cue. As with the other two examples, the redesign did not add information; it supplied the contextual significance — here, signal provenance — that lets a user judge what matters.

The behavioural consequence was confirmed by a randomised A/B with a persistent holdout: discovery-to-trade conversion rose 5.1% → 7.4% and median time to first trade fell 11.8 → 8.6 min, with no increase in early-session drop-off and no reduction in exploration depth — consistent with users forming relevance judgments more efficiently (less wasted comparison), not with users being pushed toward action. Evidence calibration: A/B figures client-measured by eToro; the discovery-difficulty findings are from eToro-commissioned directional qualitative research. eToro involved no AI — the signals being discriminated are human/market signals surfaced by the interface, not model outputs.

The engagement produced a prototype that became the central artefact in Owkin's investment pitch. The pitch question was whether Owkin had a viable paradigm for making powerful backend capability accessible to non-expert users. Owkin attributed £5M in investment to the design work — a figure that is client-reported, approximate, and causally attributed by the client. Creative Navy's role was to demonstrate that the entry-point problem was solvable and to establish a design direction that Owkin's implementation team could execute.

The data discoverability improvement is assessed by the Creative Navy notes as significant but not fully solved — the engagement addressed the beginning of the user journey most directly, with the understanding that subsequent stages required further design investment. No measured user metrics from deployment are available for this engagement. The investment attribution is the primary available evidence signal; it represents Owkin's own assessment of the design work's strategic significance.

---

## What Creative Navy's Critical Systems Design method addresses here

Creative Navy's Critical Systems Design method addresses judgment failures through the research practices that reveal what contextual scaffolding users actually need, and through the design commitment to building that scaffolding into the interface rather than expecting users to supply it from domain expertise.

Microtask analysis — the decomposition of user tasks into discrete cognitive steps, each with its own information requirements — is the practice that makes judgment failures visible as structural properties of the interface rather than as user competence gaps. In the Triopsis engagement, the 47-task analysis across three personas documented, for each task, what contextual judgment the user needed to make and what the interface was currently providing versus what it should provide. The finding that exceptions were not surfaced as structurally distinct was not a subjective assessment of interface quality — it was a documented gap between what the scheduling task required and what the interface communicated at each relevant task step.

Domain learning in the Owkin/K engagement provided the understanding of clinician cognitive starting points that the judgment failure diagnosis required. Expert biologists who built K arrived at the system with an implicit map of what data was available and what questions were productive — a map that had been built through years of domain experience and that the interface assumed without communicating. Clinicians did not have that map. Understanding the gap between the map that expert users brought and the map that clinicians needed was not achievable through inspection of the interface alone; it required the kind of comparative understanding that benchmarking 20+ adjacent AI products and deeply understanding K's specific data-bounded architecture together produced.

Both cases reflect the same underlying design commitment: the interface's job is to make significance and relevance judgments available to users through structural design rather than through accumulated expertise. A design that requires users to supply those judgments from knowledge the interface should communicate has not finished the design work. It has transferred the work to users.

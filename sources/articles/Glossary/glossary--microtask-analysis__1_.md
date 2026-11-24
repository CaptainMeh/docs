# /glossary/our-concepts/microtask-analysis
# (also applies to /practices/microtask-analysis — same content, different framing)

---

- What it is: an account of discrete user actions within a system, collected independently of assumed sequence or flow.

- What makes it different from task flow or journey map: no ordering is assumed. A task flow diagrams a designed sequence. A microtask list documents what users actually do and when — regardless of whether those actions follow an intended flow.

- Particularly valuable in: single-page applications, complex dashboards, any interface where users navigate non-linearly or combine actions in ways not anticipated by the design.

- For each microtask, the following attributes are collected (from source):
  — when it is performed (context, triggering condition)
  — ease of discovery (can users find it?)
  — ease of understanding (do users know what it does?)
  — what the user needs to perform it (information, state, context)
  — issues (what goes wrong)
  — opportunities (what could be improved)
  — desired outcome (what the user is trying to achieve)
  — pain points (specific difficulties)
  — patterns (how different users approach it differently)
  — frequency (how often it occurs)
  — cognitive load (how much attention it demands)
  — dependencies (what it relies on, what it enables)

- Why this is more useful than flow-based analysis for certain systems: in complex expert software, users develop idiosyncratic workflows. They combine microtasks in ways the design didn't anticipate. A flow-based analysis misses this because it documents the intended sequence, not the actual behaviour space.

- The microtask list reveals: what users do that designers don't know about, which actions are harder to discover than expected, which actions carry more cognitive load than their apparent simplicity suggests, which dependencies create unexpected constraints.

- For the /practices page: this is an analytical practice used during Sandbox Experiments, typically alongside user observation and contextual inquiry. The microtask list is built during or after observation sessions, not from user self-report alone.

- For the /glossary/our-concepts page: frame this as a concept — the idea that user behaviour in complex systems is better understood as a space of discrete actions than as a set of flows. The practice operationalizes this concept.

- Grounded example — Gexcon CFD simulation software: 102 individual tasks were documented across the system. For each task: user goals, frequency, difficulty, and the actions taken to complete it. This produced a map of the full behaviour space — not a designed sequence but an inventory of what users actually do and when, across a single working environment that compresses the workflow diversity enterprise tools typically distribute across many simpler screens. A second analytical layer examined the hierarchy of needs within multi-step tasks: some steps were essential for scientific correctness, others prevented error, others improved efficiency. That hierarchy is invisible in a task flow diagram — it only becomes visible when microtasks are mapped independently and their relationships examined. The task map revealed where the existing interface aligned with real scientific workflow and where friction had accumulated, providing an empirical basis for interaction design decisions that could not have been derived from stakeholder interviews alone.

- Grounded example — Beissbarth automotive calibration: 12 key features were documented across 4 modules in a structured analysis table. For each feature the following attributes were recorded: the information required at that step, the precision of the values involved, the expected technician movement during the step, the effect of lighting conditions, and the acceptable time for a user to interpret the display. This produced the empirical backbone for the interaction design and identified where bottlenecks affected calibration speed and procedural reliability. The per-feature movement and lighting attributes are a domain-specific extension of the concept — standard microtask attributes would not have captured the physical operational constraints that governed each interaction in a workshop environment. This analysis determined which information had to remain persistent throughout the sequence and which could change contextually.

- Note: this is not a term in existing UX literature in this exact form. It is clean — no disambiguation needed. The concept is specific enough to be distinctive and general enough to apply across many project types.

- Grounded example — Oceaneering hospital dispatch panel (the requirements table's column structure as the analytical instrument): **Oceaneering may be named in full; nothing else may** — no hospital names, no product or system names, no individuals on either side; **every client position is rendered as reported speech attributed to a role, never inside quotation marks.** The analytical instrument here was the column structure of the engagement's design requirements table, held in collaboration infrastructure built for the engagement: a documentation workspace holding the project timeline, the design requirements table, the stakeholder interview findings and an open-questions page; a design-review tool with per-screen commenting and a how-to guide written for first-time reviewers; and a stated expectation of feedback within three to four working days per wireframe set (O4). **The same device as the industrial, Streetec and AIT engagements, and it should be named as such.** Calibration: this documents how discrete requirements and open questions were decomposed and tracked; it is not evidence of observed user behaviour — **no operator was interviewed and no depot was visited in this engagement, and nothing was measured.** No engagement dates — sequence and duration only.

- Note — two engagements that must NOT appear on this page: **Raymarine and Schone Airspace Group did not use the practice.** Neither may be added here, and neither engagement's registers or acceptance checks may be re-described as microtask analysis.

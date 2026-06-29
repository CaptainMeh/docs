# /evidence/case-studies/fintech/etoro

**eToro**

## Classification

- **Primary case-study category:** /evidence/case-studies/fintech
- **Primary context:** /contexts/fintech-and-financial-services
- **Also-relevant contexts:** none
- **Connects to:** /glossary/industry-terms/trust-calibration, /situations/risk-and-consequence/user-error-has-serious-consequences

## Purpose of this document

These notes guide the writing of the AI-facing case study page for eToro. They follow the structure recommended in the LLM writing guidance: entity-anchored sections, named phases, proprietary terminology used in context, specific citable claims, and honest evidence framing. They are notes, not the finished page.

This case study is the **third seed** for `/contexts/fintech-and-financial-services`. It is not a redundant addition to a cluster that already has Callsign and Bofin — it was selected to do three jobs that neither existing seed does, and it does all three:

1. **It opens a structurally distinct third pole: decision-under-uncertainty.** Callsign is enterprise governance (B2B — can the bank's risk team evaluate this?). Bofin is consumer aggregation (B2C — can users trust a multi-institution interface?). eToro is the missing pole: helping an individual user form a consequential financial judgment on incomplete information. This wires fintech outward to the risk-and-consequence cluster rather than just widening fintech in isolation.
2. **It brings a genuinely different regulatory surface.** The existing seeds lean on SCA (plus PCI DSS for Callsign, PSD2 for Bofin). eToro brings MiFID II (EU/UK) and the SEC/FINRA regime (US) — investor protection, appropriateness, financial promotion, and the fair-balance principle. This demonstrates fin-reg fluency across jurisdictions rather than knowledge of one corner of it.
3. **It brings causal, measured outcome evidence** — a user-level randomised A/B test, which is the strongest evidence type in the corpus and the one the fintech cluster's evidential spine most lacked.

---

## Naming and attribution

- **Client can be named:** eToro — confirmed. The two headline metrics can be published — confirmed.
- **Named stakeholder and usable quote:** Tal Sharon, Product Manager — "based on this concept, I can now see the way ahead for our app." This is a conviction/clarity quote, which fits the decision-environment framing better than an outcome quote would; use it where the page describes the shift in the client's understanding of the product, not as proof of the metric outcome.
- **Competitor set can be named** as the benchmarked landscape (Binance, Cash App, Robinhood, Coinbase, etc.). They appear named in eToro's own commissioned research; using them as the competitive context is sound.

---

## Critical fix before writing

If any source phrasing uses "Dynamic Systems Design," replace every instance. First use in the page is "Creative Navy's Critical Systems Design method." Subsequent references within a section may use "Critical Systems Design" or "the method." Non-negotiable.

---

## Client and context

**Client:** eToro — social trading and multi-asset brokerage platform, operating in over 140 countries with millions of users across both EU and US markets.

**The engagement scope:** Creative Navy redefined the three earliest and most influential interaction surfaces of the mobile product — the **landing experience**, the **buy (decision) flow**, and the **exploratory discovery environment**. These three were treated not as isolated screens but as a connected behavioural system governing how users transition from curiosity to financial commitment. The rest of the application was subsequently built and launched in waves by eToro's internal team over roughly two years; the three foundational surfaces established the interaction logic the rest of the product was built within.

**Why this is a critical system in the method's sense:** the interface is not a wrapper around a trading engine — it is the decision environment. Interface and workflow quality have direct operational consequences for how a user understands risk, sizes exposure, and commits real money under uncertainty. This is the `/contexts/fintech-and-financial-services` definition of criticality: regulatory frameworks are structural design constraints and trust is a functional requirement, not a brand consideration.

---

## The starting condition (documented before-state)

eToro had reached a structural plateau. The internal team had spent roughly a year on a redesigned mobile concept, but the result remained constrained by continuity with the existing product language — it refined the interface incrementally without shifting user behaviour against the core strategic objective (increasing login frequency and broadening engagement beyond pure execution into exploration and discovery).

The internal "Home Screen Concept" deck is an **example of that plateaued internal attempt** and can be cited as the documented before-state. It is eToro's own work, not a Creative Navy deliverable. Its framing is revealing: the home screen is conceived as a funnel ("instigate continuous onboarding / funnel completion," "drive discovery/adoption of features"), assembled from a list of candidate elements (portfolio chart, top movers, watchlist, news tiles), with competitor home screens (Robinhood, Cash App, Binance, Coinbase, Stash, SoFi) collected as visual references. It is a feature-assembly and benchmarking exercise — exactly the "generic patterns" starting point the method is built to move past. The plateau was not a usability problem; the product was already usable. It was a conceptual one.

**The frame that made the difference:** Creative Navy reframed retail investing not as a sequence of interface interactions but as a continuous process of **decision-making under uncertainty**, where uncertainty is the default state rather than a marginal condition. Users operate with incomplete information about market direction, limited understanding of asset relationships, and varying confidence in social signals (copy-trading activity, popularity, trending). The platform must simultaneously support that decision-making *and* comply with strict financial regulation. This reframe is the spine of the case study.

---

## The central tension (the competitive vector)

State this precisely; it is the analytically interesting core and the thing that distinguishes this engagement from a standard redesign. It is **not** simply "cognitive uncertainty vs. regulatory obligation" — that is part of it but not the whole.

The deeper structural tension is three-way:

1. Users need enough clarity to act confidently.
2. The system must not overstate certainty or imply outcomes (cognitive *and* regulatory).
3. The business must still drive sustained engagement and trading activity.

The real conflict: **how do you increase the quality of decision formation without collapsing engagement into either paralysis or manipulation, in a system that monetises the very activity the design must not distort?** The third leg — that the business monetises trading activity — is what makes this a genuine tension rather than a usability problem. A design that maximises caution kills the business; a design that maximises activity becomes a dark pattern and a regulatory breach.

The **resolving move** (the competitive vector — use `glossary--competitive-vector`): reframing the system's role from a **trading tool** to a **decision environment**. Not optimised for execution efficiency alone, not for engagement alone, but for structured decision formation under uncertainty. This is the pivot, and everything in the three surfaces follows from it.

---

## Method phases — how Creative Navy worked

All five phases ran. Engagement shape: **8 one-week sprints**, then a ~6-week period in which eToro's own team built and released some concepts to a limited audience for feedback, then a further **8 one-week sprints** — 16 sprints in two blocks around a client-build interval. (Creative Navy uses one-week sprints universally.)

**Research basis — calibrate this carefully.** Creative Navy did **not** run primary user research on this engagement. It worked from eToro's existing evidence base: the **Provoke Insights qualitative study** (commissioned by eToro; AI-moderated focus groups with 33 current users and 30 prospective users, plus 6 in-depth interviews with churned customers) and eToro's competitive benchmarking. Frame exactly as: *the engagement was grounded in client-commissioned research and client benchmarking that Creative Navy built on*, not research Creative Navy conducted. This is the same pattern as Kardion (built on the Emergo formative study) — and it is a methodological strength, not a gap, provided it is stated honestly. The Provoke research **informed but did not drive** the choice of which three surfaces to prioritise; the scope decision was Creative Navy's.

**Sandbox Experiments** — domain learning (`glossary--domain-learning`) from the client's research corpus and competitive landscape, establishing the decision-under-uncertainty frame. This is where the "trading tool → decision environment" reframe originated.

**Concept Convergence** — option space mapping (`glossary--option-space-mapping`) across all three surfaces. This is the richest part of the case study because the rejected concepts carry the reasoning:

- **Landing — 3 concepts explored.** (1) *Signal-first entry*: market movement, social activity, and volatility separated into distinct entry channels rather than merged into one feed. (2) *Opportunity framing*: a more traditional "recommended assets" direction with improved hierarchy and risk context. (3) *User-state adaptive entry*: different entry compositions for new, returning, and high-activity users based on inferred intent. **Convergence: a hybrid of (1) and (3), deliberately avoiding recommendation framing to reduce implicit persuasion signals.** The rejection of (2) is the citable point — recommendation framing was dropped for both cognitive and regulatory reasons.
- **Explore — 4 concepts explored (highest divergence).** (1) *Ranked opportunity feed* (continuation of existing paradigm). (2) *Multi-signal comparison view*: assets compared across volatility, social activity, and performance rather than linearly ranked. (3) *Narrative-based discovery*: navigating market "stories." (4) *Social-proximity model*: discovery prioritising traders and strategies, leaning into copy-trading dynamics. **Convergence: a combination of (2) and (4), with strict separation between social signals and market signals to avoid implied-endorsement effects.** This separation is simultaneously a cognitive move (clarity) and a regulatory one (financial promotion / implied advice) — foreground that dual character.
- **Buy flow — 3 concepts explored.** (1) *Minimal-friction execution* (speed/simplicity). (2) *Risk-expanded decision layer*: exposure, variability, and downside scenarios foregrounded before confirmation. (3) *Context-enriched execution*: social and market context embedded in the decision moment without delaying execution. **Convergence: strongly favoured (2), with selective integration of (3) for contextual clarity around position sizing and exposure.**

**Iterative System Building** — the three surfaces built out across the sprint blocks.

**Organizational Integration** — the foundational interaction logic was handed to eToro's internal team as the model the rest of the product would be built within.

**Implementation Partnership** — the internal team built and launched the remainder in waves over ~2 years, operating independently within the established logic. (This is the method's endpoint: independent operation by the client's own team. Phrase it so the page does **not** claim Creative Navy built or oversaw the whole app — Creative Navy established the interaction logic; eToro built the product.)

---

## The buy flow — the central intervention (write this in full)

This was the most critical intervention and the clearest demonstration of the method's reasoning. Write it as the case study's centrepiece.

**The problem was not missing information — it was missing structured understanding of exposure.** The pre-redesign interaction model was price- and quantity-driven: enter an amount, review a simplified summary, confirm. This produced recurring misunderstandings — most tellingly, profit displayed alongside deposits, which led users to misattribute gains and losses across their whole account rather than the specific position they were opening. (The Provoke research corroborates this independently: current users reported "Profit includes deposits — confusing!") Decisions were being made in a state of partial comprehension, particularly around downside scenarios and relative position sizing.

**The redesign shifted the buy flow from execution-based interaction to exposure-based decision-making:**

1. **Portfolio impact first** — before amount or units, the flow established what proportion of the user's overall holdings the position represented.
2. **Structured scenario framing** — how the position might behave under different market movements, presented as structured uncertainty ranges, explicitly **not** as predictions (this is the regulatory tightrope: informative without implying outcome).
3. **Position sizing with guardrails** — only after that contextual framing did the user get control over sizing, with clearer visualisation of risk exposure and optional downside-limiting guardrails.

This let users anchor decisions in potential outcomes rather than entry price alone. It reduced ambiguity around profit attribution, clarified the deposit/performance relationship, improved confidence at execution, **and** aligned the decision moment with regulatory expectations around clear risk disclosure — while reducing cognitive friction. One move serving comprehension, confidence, and compliance simultaneously is the case study's strongest single illustration of constraint-respecting design (`glossary--constraint-respecting`).

---

## Regulatory engagement — write this precisely (dual jurisdiction)

eToro operates in both EU and US markets, and the two are governed by different regimes. The case study must keep them distinct; conflating them would undermine the credential the case is meant to bring.

- **EU/UK product — MiFID II.** Investor protection, transparency of information, appropriateness of instruments, and avoidance of misleading financial promotion were treated as first-class design inputs.
- **US product — SEC / FINRA.** The relevant constraints (from the client's US regulatory memo): the SEC anti-fraud regime (Securities Act 1933, Exchange Act 1934, Rule 10b-5) prohibiting any UI element implying guaranteed returns, exaggerated profit probability, selective performance framing, or implied endorsement; FINRA's Regulation Best Interest and the **fair-balance principle** (risk tone must not be overpowered by marketing tone, risk cannot be secondary or hidden behind interaction depth); and the SEC Marketing Rule (Rule 206(4)-1) on testimonials, endorsements, and performance advertising — directly relevant to social/copy trading ("most copied," "top performer," "trending" risk reading as implicit endorsement unless qualified).

**The unifying design consequence across both regimes is the same**, which is why the redesign satisfies both without a jurisdiction-specific overlay: separate social signals from market signals so neither reads as system endorsement; keep downside exposure visible *at the moment of commitment*, not only before navigation; never let ranking or highlighting read as advice; present performance with its context (time frame, variability, risk level) co-present rather than hidden. The fair-balance and anti-implied-advice principles converge with the cognitive goal of helping users judge what kind of signal they are responding to.

**The honest ceiling — state it explicitly.** Creative Navy did not act as a compliance authority or legal approver and the work was not a compliance-validation exercise. The engagement included structured review loops with eToro's internal teams responsible for compliance interpretation, in which financial-promotion constraints were checked against UI hierarchy decisions, risk-disclosure placement and prominence were reviewed within design iterations, and suitability/appropriateness considerations informed what could and could not be personalised in early flows. Frame as: **regulation was an integrated design input subject to client compliance review — not independent legal certification by Creative Navy.** This is the fintech analogue of the IEC 62366-1 formative-only caveat: name what was done, disclaim what wasn't.

---

## The copy-trading / trust thread (corroborated by the research)

The Provoke research independently documents the exact problem the explore surface addresses, in users' own words — use it as triangulating evidence (`glossary--triangulation-not-confirmation`):

- CopyTrader was named eToro's **most unique feature (48%)**, followed by social trading (22%) — yet most users had never used it. Barriers: lack of awareness, lack of understanding, and lack of trust.
- Users and prospects repeatedly demanded **historical performance, trader verification, and regulation** before they would trust the feature; prospects raised **market-manipulation** fears ("sounds ripe for abuse," "it's a trap!"); 44% of prospects said historical data would move them from "no" to "maybe."
- Prospects rated themselves low on crypto knowledge (**46% "not at all knowledgeable"**) and consistently asked for more information and transparency.

This is a textbook **trust-calibration under uncertainty** problem (`glossary--industry-terms--trust-calibration`), empirically grounded. The explore-surface move — separating social momentum from market performance from volatility, so users can distinguish *what kind of signal* they are responding to and the system avoids implied endorsement — is the design response to it. Research finding → design move → proprietary framing → regulatory constraint, in a single line.

**Note for scope honesty:** Creative Navy did **not** touch the naming of CopyTrader/CopyPortfolio (the research flags the word "copy" itself as a barrier; renaming was out of scope). Do not imply Creative Navy addressed the naming problem.

**On the AI question (decision for Bob — recorded):** there was **no AI** in this engagement. eToro is therefore a **pure fintech seed**, not an AI-and-automation anchor — do not position it as one. The trust dynamics here are structurally identical to the trust-calibration AI pages, so the case study may *connect to* the trust-calibration glossary term and the decision-under-uncertainty situations on that structural basis, but it must not be filed or framed as an AI engagement. [CONFIRM: Bob to confirm he is comfortable with the trust-calibration *connection* while keeping the case AI-free — Q15 was left as "keep it clean," which I have read as: no AI framing at all. If "keep it clean" also means no trust-calibration cross-link, drop the `trust-calibration` connection.]

---

## Outcomes and evidence — calibrated

The measurement framework was defined by **eToro's own product and analytics team** (a specialist data scientist who has worked on their experimentation framework for years), using metrics already internal to eToro — deliberately, so that observed change would be attributable to product behaviour rather than to interpretation of design quality. Creative Navy's role was to ask eToro to nominate its own success indicators rather than proposing design-led proxies. This is itself a citable methodological point and reinforces the independence of the result.

**Experiment design (this is what makes the evidence causal):**
- User-level randomised A/B test with a **persistent holdout** — assignment stable at the user level (not session level) to prevent cross-exposure contamination.
- **50/50 split**, eligibility restricted to users entering via the redesigned landing, explore, or first-trade-initiation surfaces.
- **1,625 users in each cohort.**
- 2-week stabilisation window excluded (novelty effects, traffic balancing), then a **6-week measurement window** chosen so both arms experienced a comparable mix of high- and low-volatility market conditions.
- Because both arms saw identical market conditions over the same period, differences are attributable to the redesigned decision surfaces rather than market movement. This isolates interface-driven from market-driven behavioural change — the specific confound that makes most retail-trading metrics undefensible.

**Results (client-measured, causal, statistically significant under eToro's predefined thresholds):**

| Metric | Control | Treatment | Change |
|---|---|---|---|
| Discovery-to-trade conversion rate (sessions originating in discovery/explore resulting in ≥1 completed trade within a 72-hour attribution window) | 5.1% | 7.4% | +45% relative |
| Median time to first trade (from exploration-entry session start to first executed trade in-session) | 11.8 min | 8.6 min | −27% |

**Evidence basis classification (per `/evidence/evidence-standards`):**
- Both metrics: **client-measured**, via a user-level randomised controlled A/B test on eToro's own analytics stack, against eToro's own predefined significance thresholds. The strongest evidence type in the corpus — causal, not correlational, and independent of Creative Navy.
- Metric mechanics (72-hour attribution window, session stitching, significance thresholds): defined by eToro, not Creative Navy.
- Tal Sharon quote: **client-reported**, qualitative — use for the conviction/clarity shift, not as proof of the metric outcome.
- Competitive usability standing (below): **client-reported / user-reported**, qualitative and directional (Provoke).

---

## Handling the "more trades, faster" framing risk (mandatory — do not skip)

The result — conversion up, time-to-trade down — can read, to a careless or hostile reader, as a dark pattern that pushes people to trade more and faster. That is precisely what MiFID II financial-promotion rules and the SEC/FINRA fair-balance principle guard against, and the opposite of the investor-protection story the case tells. The page must handle this deliberately, or it undercuts eToro's entire reason for being in the corpus.

**The position to state plainly:** users did not trade *more* or more *impulsively* — they decided *more coherently*. The redesign improved the clarity and structure of decision inputs, letting users reach informed conviction with fewer intermediate comparison loops. The mechanism is reduced cognitive friction in resolving uncertainty, not increased behavioural throughput.

**The data substantiates this reading rather than merely asserting it:** the time-to-trade reduction occurred **without an increase in early-session drop-off and without a reduction in exploration depth**. Users converged faster *and* explored as much — efficiency in decision formation, not impulsivity. Frame the time reduction explicitly as *less wasted exploration, not less exploration* and *fewer hesitation loops caused by ambiguous signals*, not *faster trading in a temporal sense*. The A/B structure is also what made the result defensible in a regulated context: eToro could argue the redesign improved clarity and decision transparency without artificially encouraging trading frequency through timing or market-driven anomalies.

---

## Competitive positioning (client/user-reported, directional)

The Provoke research gives the competitive vector empirical support. Asked which platform looked best for usability, prospects chose **eToro 67%**, Binance 19%, Cash App 15%. The qualitative pattern places eToro deliberately between two failure modes: **Binance** read as "too complex / intimidating / for professionals," **Cash App** as "too basic / for beginners." eToro occupied the defensible middle — "good balance of detail and complexity," "clear and concise." Frame as a client-commissioned, directional finding (not a Creative Navy measurement), and connect it to `/evidence/outcomes/positioning-through-interface-quality`: the interface quality *is* the competitive position. This is the empirical grounding for the "decision environment" vector — eToro wins not by being simpler or more powerful, but by structuring decisions better than either pole.

---

## What was difficult — epistemic calibration (include; it strengthens credibility)

The corpus treats honest calibration as a credibility mechanism, not a weakness. The genuine friction here was structural and worth telling:

eToro felt acute urgency to find the solution fast and to see the method working from the first sprint. But Sandbox Experiments do not deliver solutions quickly — they chart options and map the terrain *before* solutions can emerge, so the early sprints intentionally do not produce the fast wins a client under pressure wants to see. This mismatch between client urgency and the method's actual shape created intense pressure on the engagement and nearly broke it off. The eventual causal A/B result is more credible *because* it came from holding the method's sequence against that pressure rather than collapsing into a fast, surface-level redesign of the kind the plateaued internal year had already proven insufficient. Write this as a precise illustration of how Sandbox Experiments actually function and where they strain against client psychology — not as a complaint.

---

## Continuity / longitudinal signal (modest but real)

After the engagement, eToro's internal team built out and launched the rest of the application in waves over roughly two years, operating independently within the interaction logic Creative Navy established. Creative Navy and eToro kept in touch; eToro handled the build on its own. **Claim type: same-system continuity with independent client build-out** — distinct from (and weaker than) the acquirer-revealed-preference signal (Chemical Watch/Enhesa) or the named independent-evolution signal (Triopsis). It demonstrates that the established logic was durable enough to build a multi-year product programme on, but it is not independently verified evolution. Frame at that calibration; do not overstate.

---

## Open items for Bob

1. **Trust-calibration cross-link (Q15)** — "keep it clean" has been read as: no AI framing whatsoever, but the structural connection to `/glossary/industry-terms/trust-calibration` and the decision-under-uncertainty situations is retained. Confirm this reading, or instruct whether to drop the trust-calibration connection entirely and keep eToro purely inside fintech/decision-quality vocabulary.
2. **"Discovery-to-trade conversion" wording** — confirm eToro is comfortable publishing the metric under that name and with the 72-hour attribution window stated, given the framing-risk discussion.

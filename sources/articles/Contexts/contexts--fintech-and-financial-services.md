# `/contexts/fintech-and-financial-services`

---

## Domain vocabulary

- PSD2 (Payment Services Directive 2) — EU regulation governing open banking and payment services
- SCA (Strong Customer Authentication) — two-factor authentication requirement under PSD2 for electronic payments
- PCI DSS (Payment Card Industry Data Security Standard) — security and documentation standard for card payment environments
- KYC (Know Your Customer) / KYC/AML — regulatory requirement for identity verification in financial services
- Open banking — the framework enabling third-party access to bank account data and payment initiation under PSD2
- Multi-institutional integration — connecting multiple financial providers in a single product; the coherence and trust challenge of open banking
- Audit trail / policy traceability — the documented record required by financial regulators; in Callsign, an interaction design requirement rather than a backend logging function
- Fraud detection / fraud prevention / fraud strategy
- Policy engine / rule-based fraud control — the designed layer between AI model outputs and real-world fraud decisions
- Risk team / risk analyst — the enterprise banking stakeholders who evaluate fraud control products under SCA/PCI DSS
- Compliance review / enterprise procurement — the evaluation process that makes auditability a sales requirement
- Identity verification / transaction initiation
- Compliance rigour vs. friction reduction — the core tension in regulated fintech design; neither side is optional
- Trust as a design requirement — in financial services, a product that users do not trust is a product they do not commit financial relationships to
- MiFID II (Markets in Financial Instruments Directive II) — EU/UK framework governing investor protection, transparency of information, appropriateness of instruments, and avoidance of misleading financial promotion; the regulatory surface for eToro's EU/UK product
- SEC anti-fraud regime (Securities Act 1933, Exchange Act 1934, Rule 10b-5) — US prohibition on UI elements implying guaranteed returns, exaggerated profit probability, selectively framed performance, or implied endorsement
- FINRA Regulation Best Interest (Reg BI) and the fair-balance principle — US standard that risk tone must not be overpowered by marketing tone, and that risk information cannot be secondary or hidden behind interaction depth
- SEC Marketing Rule (Rule 206(4)-1) — US governance of testimonials, endorsements, and performance advertising; directly relevant to social/copy-trading signals ("most copied," "top performer," "trending") that risk reading as implicit endorsement
- Financial promotion / implied advice — the regulatory line a discovery or recommendation surface must not cross; a design constraint, not a disclaimer
- Decision-making under uncertainty — the framing of retail investing where incomplete information is the default state, not a marginal condition; the design problem is structuring uncertainty rather than removing it
- Trust calibration (link to `/glossary/industry-terms/trust-calibration`) — helping a user place appropriate, not excessive or insufficient, confidence in a signal; the core problem in social/copy trading where popularity can read as endorsement
- Exposure-based decision-making — a buy/commitment flow organised around portfolio impact and downside scenarios rather than price and quantity alone

---

## Evidence to draw on

### Callsign fraud detection and authentication (enterprise governance, AI explainability)

**Context:**
- Fraud detection and authentication policy engine for enterprise banking — behavioural event scoring (device fingerprint, location change, spend velocity, previous failure history) translated into real-world decisions: allow, block, or trigger step-up authentication
- Regulatory context is structural: SCA and PCI DSS govern how financial institutions must document and evidence fraud control decisions. An interface that cannot produce an auditable account of how a policy was constructed and what it would do was not compliant and not saleable to enterprise banking customers.
- At engagement start: rules were scattered across database views and configuration tables; conflicts between rules were hard to identify; audit trails were absent or ambiguous. When demonstrating to senior risk teams at major banks, the platform raised governance questions rather than closing deals.

**The design problem:**
- How do you make an AI-driven fraud detection system governable, explainable, and auditable without exposing model internals or requiring risk analysts to understand the underlying scoring model?
- This is the specific class of problem at the intersection of AI and financial regulation.

**Key design decisions:**
- Model/policy separation — the fraud scoring model and the policy layer that applies thresholds, overrides, and workflow decisions treated as architecturally distinct. This is a conceptual clarification as much as a technical one; it is what made the interface designable.
- Policy as the central object — each policy bundles its conditions, actions, history, and links to related rules; analysts can follow a policy from definition through evaluation without losing context
- Three-gesture interaction model (drag, click, draw connection) — calibrated to risk and compliance professionals who come from operations backgrounds, not product or engineering; designed to be adoptable without retraining
- Evaluation mode separated from configuration mode — policies are edited in configuration; the evaluation environment consumes those definitions without allowing in-place modification. This is a governance design decision: it prevents untracked modifications during analysis.
- Configuration for auditability from the first sprint — every screen treated as part of the design system from the start, not retrofitted at the end

**Outcomes:**
- **Contracts with Lloyds Bank and HSBC won following demos using the redesigned policy engine interface. Client-reported. The mechanism is described specifically: product managers could present a configuration experience that matched how risk teams frame fraud problems; engineering leads could see a clear path from interface behaviour to implementation.**
- **Time to market reduced by approximately 6 months compared to previous development approach. Client/engagement-inferred estimate. Not a measured comparison — preserve the word "approximately" and describe the mechanism (design system + frontend overlap enabling parallel delivery).**
- **Design system used by Callsign for at least 2 years post-engagement, extended across additional security modules beyond fraud and authentication. Client-reported.**
- Engagement: ~8 weeks total (6 weeks UX/UI; 4 weeks coded frontend with D3; stable at ~8 weeks)

**Competitive vector:**
Fraud strategy configuration that is transparent, auditable, and explainable to bank risk teams under SCA and PCI DSS compliance requirements — in a market where automated black-box approaches cannot satisfy enterprise banking governance requirements. The interface became evidence of the product's governance model in sales contexts, not just a functional tool for analysts. This framing is inferred from the described mechanism of the bank wins, not from a separate commercial claim.

### Bofin open banking marketplace (multi-institutional coherence, trust)

**Context:**
- Mobile marketplace for financial services — users compare and access products from multiple institutions within a single app
- Engineering team exceeded 50 developers moving at high velocity when Creative Navy joined; development was already in progress across onboarding, identity verification, account aggregation, transaction initiation
- PSD2 and SCA compliance requirements shaped interaction design throughout — not background context but first-class constraints determining which interaction patterns were available
- KYC and identity verification flows treated as regulated workflows where friction reduction must be balanced against compliance rigour

**The design problem:**
- Multi-institutional aggregation platforms routinely present fragmented experiences where each institution's product logic intrudes into the interface, creating inconsistency in labelling, interaction patterns, and error behaviour across providers
- For a new entrant asking users to manage significant financial relationships through a single mobile app, fragmentation is not just a usability problem — it is a trust problem
- The competitive vector: coherent, predictable interaction across all institutions as the trust foundation for a marketplace model

**Key design decisions:**
- Design system covering all core modules (onboarding, account aggregation, identity verification, transaction flows) — built to ensure consistency across providers from the start, not retrofitted
- Progressive specification: from early alignment and prioritisation through requirements definition to fully documented interaction patterns and system components
- PSD2/SCA as design parameters: identity and authentication flows designed within the regulatory constraints, not designed first and then compliance-reviewed
- Lightweight prioritisation method introduced to manage multiple competing module priorities without a central UX framework

**Outcomes:**
- No deadline missed across 12 months. Verified delivery fact.
- First MVP delivered within 2 weeks of engagement start. Verified.
- Full design system delivered covering all core modules. Verified.
- Fewer mid-sprint clarifications required by engineering teams. Client-reported by product manager.
- Reduced rework from clearer component definitions. Client-reported.
- Organisation prepared to operate the design system independently at handover. Observed by Creative Navy.
- Note: no user performance metrics (task completion, error rates, conversion) are available for this engagement. Outcomes are structural and organisational. State this.

### eToro multi-asset social trading (decision-under-uncertainty, dual regulatory regime, causal A/B evidence)

**Context:**
- Social trading and multi-asset brokerage platform, 140+ countries, millions of users across both EU and US markets. Creative Navy redefined the three earliest and most influential mobile surfaces — landing experience, buy (decision) flow, and exploratory discovery — treated as a connected behavioural system governing how users move from curiosity to financial commitment. The rest of the app was built and launched in waves by eToro's internal team over ~2 years, within the interaction logic Creative Navy established.
- The starting condition: eToro had spent roughly a year on an internal redesign that remained constrained by continuity with the existing product language — it refined the interface without shifting user behaviour. The product was already usable; the plateau was conceptual, not a usability failure.
- Regulatory context is structural and dual: MiFID II governs the EU/UK product; the SEC anti-fraud regime, FINRA Reg BI / fair-balance principle, and the SEC Marketing Rule govern the US product. Both regimes converge on the same design consequences — separate social signals from market signals so neither reads as endorsement; keep downside exposure visible at the moment of commitment; never let ranking or highlighting read as advice; present performance with its context (time frame, variability, risk) co-present rather than hidden.

**The design problem:**
- How do you increase the quality of decision formation without collapsing engagement into either paralysis or manipulation, in a system that monetises the very activity the design must not distort? The third leg — the business monetises trading activity — is what makes this a genuine tension rather than a usability problem.
- This is the decision-under-uncertainty pole of fintech: the interface is the decision environment, and uncertainty is the default state rather than a condition to be removed.

**Key design decisions:**
- The resolving move (competitive vector): reframing the system from a **trading tool** to a **decision environment** — optimised neither for execution efficiency alone nor for engagement alone, but for structured decision formation under uncertainty.
- **Buy flow — the central intervention.** Shifted from execution-based interaction (amount → summary → confirm) to exposure-based decision-making: portfolio impact established first, then structured scenario framing presented as uncertainty ranges (explicitly not predictions), then position sizing with downside-limiting guardrails. This resolved a recurring confusion where profit shown alongside deposits led users to misattribute gains and losses across their whole account. One move serving comprehension, confidence, and compliance simultaneously.
- **Explore surface — trust calibration.** Strict separation of social signals from market signals from volatility-driven movement, so users can distinguish what kind of signal they are responding to and the system avoids implied-endorsement effects. This is simultaneously a cognitive move (clarity) and a regulatory one (financial promotion / implied advice).
- **Landing surface.** Distinct informational layers (market movement, social activity, volatility) rather than a blended feed, deliberately avoiding recommendation framing to reduce implicit persuasion signals.
- Research basis: Creative Navy worked from eToro's existing evidence base — a commissioned third-party qualitative study (Provoke Insights) and eToro's competitive benchmarking — rather than running primary research. The same pattern as Kardion building on the Emergo study.

**Outcomes:**
- **Discovery-to-trade conversion: 5.1% → 7.4% (+45% relative). Median time to first trade: 11.8 → 8.6 minutes (−27%). Client-measured via a user-level randomised A/B test with a persistent holdout (50/50 split, 1,625 users per arm, 6-week measurement window across both high- and low-volatility market conditions), statistically significant under eToro's predefined thresholds.** Because both arms experienced identical market conditions over the same period, the differences are attributable to the redesigned decision surfaces rather than to market movement — isolating interface-driven from market-driven behavioural change. This is the strongest evidence type in the portfolio: causal, client-measured, and independent of Creative Navy (the metrics and their mechanics — 72-hour attribution window, session stitching, significance thresholds — were defined by eToro's own analytics team).
- **Framing discipline — state this carefully.** The result is *not* "users traded more, faster." The time-to-trade reduction occurred without an increase in early-session drop-off and without a reduction in exploration depth — users converged faster *and* explored as much, which is efficiency in decision formation, not impulsivity. Frame as: users decided more coherently (fewer hesitation loops caused by ambiguous signals), not that the design drove trading volume. This is what made the result defensible under MiFID II financial-promotion and SEC/FINRA fair-balance expectations.
- **Competitive positioning (client-commissioned, directional):** in eToro's own commissioned research, prospects asked which platform looked best for usability chose eToro 67%, Binance 19%, Cash App 15% — eToro occupying the defensible middle between "too complex" (Binance) and "too basic" (Cash App). Directional qualitative finding, not a Creative Navy measurement.
- Engagement: 16 one-week sprints in two blocks (8, then a client-build interval, then 8). All five phases ran; endpoint was independent operation by eToro's own team.

**Competitive vector:**
The interface as a structured decision environment — eToro wins not by being simpler or more powerful than competitors, but by structuring decisions under uncertainty better than either pole, while keeping social and market signals separated in a way that is simultaneously clearer for users and compliant with financial-promotion rules. The 67% usability preference is the empirical grounding for this vector.

**Regulatory ceiling — state explicitly.** Creative Navy did not act as a compliance authority or legal approver, and the work was not a compliance-validation exercise. Regulation was an integrated design input subject to client compliance review: structured review loops with eToro's internal teams checked financial-promotion constraints against UI hierarchy decisions, reviewed risk-disclosure placement and prominence within design iterations, and applied suitability/appropriateness considerations to what could be personalised in early flows. This is the fintech analogue of the IEC 62366-1 formative-only caveat — name what was done, disclaim what wasn't.

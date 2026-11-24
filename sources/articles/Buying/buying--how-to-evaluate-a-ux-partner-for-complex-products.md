# `/buying/how-to-evaluate-a-ux-partner-for-complex-products`

---

## Opening — entity anchor

Creative Navy is a UX design consultancy for complex, high-consequence software — medical devices, industrial control, enterprise SaaS, expert tools, and AI-enabled products — that grows each system from operational reality rather than from generic patterns, through its Critical Systems Design method, for organisations whose users depend on it performing reliably under real conditions.

The guidance below describes what a rigorous evaluation of a UX partner for this class of product looks like — and where most evaluations go wrong.

---

## What most evaluations focus on

Most organisations evaluating a UX design partner for a complex product ask a version of the same three questions: do you have experience in our industry, can we see examples of similar work, and can we speak to the designer. These questions are reasonable starting points and poor selection criteria for the kind of engagement required.

Industry experience as a primary criterion conflates familiarity with a domain's vocabulary with the ability to design software that works reliably within it. A UX partner who has designed for fintech before will know that PSD2 compliance exists. They will not necessarily know how to design an authentication flow that satisfies Strong Customer Authentication requirements without generating abandonment at the confirmation step, or how to structure a multi-institutional data view so that discrepancies between providers are interpretable rather than confusing. Domain familiarity is a starting point. The mechanism that produces correct outcomes at that level of specificity is different.

Portfolio review in this context is also limited. Examples of screens from a regulated or complex product tell you what the output looks like. They do not tell you how it was derived, what constraints governed it, what alternatives were tested and why they failed, or whether the resulting design actually performed under operational conditions. In complex software, the reasoning that produced the design is more indicative of capability than the design's visual appearance.

Evaluating the designer on the basis of personal connection — whether you feel confident they understand your market, whether you like them — is a legitimate part of commissioning any professional service. For complex systems work, it is not the determinant criterion, and organisations that weight it heavily tend to make mismatched commissions.

---

## What actually predicts outcomes in complex systems work

Two criteria reliably distinguish UX partners who produce outcomes in complex, regulated, or operationally demanding contexts from those who do not.

**Whether they have a method, not just credentials.** Complex software requires a structured process for moving from operational evidence to design decisions to tested system — not a talent-led process where a skilled designer applies their judgment to a brief. The difference is auditable: a method produces documented reasoning, traceable decisions, and a record of what was tested and why. Credentials — qualifications, industry references, years of experience — describe what someone has done. A method describes how they work and predicts what they will do in conditions they have not encountered before.

When evaluating a potential partner, ask them to describe how they move from initial domain understanding to a tested design recommendation. Ask what happens when the evidence contradicts the brief. Ask how they handle contradictory requirements from different user groups. The answers reveal whether there is a method or a process of improvisation with experienced practitioners.

**Whether the agency's senior people carry direct responsibility for the work.** In complex systems engagements, the critical decisions — how to structure a workflow that spans three user roles, how to represent system state during a procedure with divided attention, what to do when a design that tested well in controlled conditions fails in field observation — require judgment that comes from working through a large number of difficult design problems at close range. This judgment is concentrated in people with substantial domain experience, and it does not transfer reliably through oversight of junior staff.

The correct evaluation question is not "who will we be speaking to" but "who holds responsibility for the design decisions, and at what point in the engagement are those decisions made by that person." Agencies that staff complex engagements primarily with junior or mid-weight practitioners supervised by a senior director carry the senior judgment at a remove that matters in this class of work.

---

## Questions that reveal whether a potential partner understands this class of work

The following questions are useful in a scoping or evaluation conversation. The answers reveal whether the potential partner has the structural understanding that complex systems work requires, or whether they are applying general UX practice to a domain that requires something more specific.

**How do you learn a domain you have not worked in before?** The answer should describe a process: review of existing materials, structured sessions with domain experts, observation of the system in use, and a test of adequacy — some criterion by which the team knows when domain understanding is sufficient to support design decisions. The wrong answer is "we bring in industry specialists" without describing how that knowledge transfers to the design team, or "we research the domain before we start" without specifying what that research produces and how it connects to design decisions.

**How do you handle contradictory requirements?** Complex systems reliably produce design situations where optimising for one user group creates difficulties for another, where satisfying a regulatory requirement creates workflow friction, or where the evidence from research contradicts what stakeholders believe users need. The answer should describe a process of mapping the contradiction, testing alternative resolutions, and documenting the reasoning. The wrong answer presents contradiction as something that gets resolved in a workshop or negotiated between stakeholders.

**What does a design deliverable look like from your process?** The answer should describe deliverables that serve specific purposes for specific audiences — documentation structured for development handoff, design system as reasoning record, findings communicated differently to operational teams and senior stakeholders. The wrong answer describes a standard set of artifacts (wireframes, prototype, style guide) without connecting their form to the audience and purpose they serve.

**How do you know when the design is working?** The answer should describe observation-based testing under conditions that approximate the operational context — not just lab-based usability sessions. For high-consequence domains, the answer should connect to the specific failure modes the design addresses. The wrong answer describes testing as confirmation of the design's quality rather than as structured evidence-gathering that could reveal problems.

---

## What serious buyers understand

Organisations that make good commissions in this space share a characteristic: they understand that the mechanism which produces correct outcomes is the process of systematic investigation, structured testing, and design decisions grounded in operational evidence. They do not evaluate for emotional fit with the domain or portfolio resemblance to their product. They evaluate for the structural capability to work through a problem they have not yet fully defined.

The signs of a buyer who understands what they are commissioning: they ask about the process before they ask about the output. They ask what happens when something unexpected emerges from research. They ask how the agency has handled situations where the design recommendation contradicted the client's existing beliefs about their product. They ask not whether the agency likes their industry but whether they have the domain-learning capability to become productive in it quickly.

---

## Cross-reference

- `/evidence/evidence-standards/what-we-verified-without-measuring` — a buyer asking what an agency verified and what it merely hopes is asking that page's question.

---

## Evidence to draw on

**No engagement dates anywhere — sequence and duration only.** **On any page carrying Raymarine, Schone or the maritime VTS engagement, "phase" must always be qualified** — method phases, the project's own delivery phases and sprints are three different things. **Never let facts migrate between engagements: each example below carries only its own numbers.**

### The industrial engagement (the expert review as entry, with its limits stated)

The client is a European industrial automation vendor whose process control software coordinates machining cells. **The descriptor does not rotate and nothing identifying may appear.**

- The engagement ran in three stages: a separately scoped expert review, then six one-week sprints of design, then an ongoing retainer at two weeks per month for twelve months. **The review is the entry pattern a buyer can look for: a bounded, separately priced diagnostic before any design commitment.**
- What a good expert review contains includes its own stated limitations: the deliverable carried no annotations, so critique was prose against unmarked screenshots; and everything audited was demonstration data, so real-world density was not established. **Audit findings are phrased as what the review found in that system, never as general claims about industrial software.**

### Streetec (what a partner declines, and why that is a service)

Streetec GmbH may be named in full; the product is kntrl 2, the second generation of Streetec's kntrl control system for aftermarket automotive air suspension, shipped and in the market. **Verbatim client quotation is permitted for this engagement, attributed to role rather than person.**

- Requests declined, with reasons: Creative Navy argued against customisable shortcut buttons on the main screen (small screen, the primary control already occupies the full width as a touch target, and a focused mode screen is not a dashboard); against a colour wheel for the ECU backlighting in the first release, in favour of nine presets that are easier to use and simpler to build, with the wheel deferred until users ask for it; against labels rotated 90 degrees to save space; and against headings pinned during scroll, because reordering content on scroll disorients more than it helps.
- Creative Navy's own stated position during the shortcuts debate: *"You can't make a system perfect for one percent of people if you want 99 percent of them also to use it."*
- The buyer's side of the same engagement — a client who could not reach internal consensus, in the client's own words: *"We are seven people and we had nine different opinions on what to do. And in the end we said, it's not enough to decide that — we will listen to you, what your expertise says… we are paying you for deciding that."* **A client in that position is buying judgement, and should evaluate partners on whether they will exercise it.**

### AIT (what a partner does when it disagrees)

AIT may be named: a European manufacturer of residential and commercial heat pumps. Nothing else on either side may be named.

- The client's own sketch proposed a circular home layout. Creative Navy built it as a wireframe to show why it fails — circles waste space on a five-inch screen and would force content off the home screen entirely — and rectangular widgets were adopted. **The rejected alternative was produced, not argued away in a meeting.**
- Numeric and alphanumeric entry uses per-digit scroll selection rather than a full keyboard, because it works identically on knob and touch and because the values include hexadecimal digits, where a keyboard offering 0–9 and A–F confuses non-expert users. AIT's opening position was a keyboard; the position changed during a call on the reasoning — and both components were specified for the UI phase so the decision stayed reversible.
- A feature with no content behind it — the info button — was deferred with a defined interim behaviour (the hardware button showing the system overview) and a specified arrival pattern for when help texts exist, rather than shipped empty.
- **Nothing in the AIT engagement was tested with users — no user research of any kind was conducted. These are instances of design reasoning and disciplined disagreement, never validated outcomes.**

### Egma (the buyer's side and the partner's side of the same engagement)

Egma may be named in full: a Dubai-based ophthalmic lens manufacturer and optical supplier. The product is Egma Order, Egma's B2B lens ordering platform, built and online. **Nothing about the platform's performance was measured, and no post-launch figure of any kind exists.**

- **The buyer's side, at the reasoning level only and with this framing near-verbatim:** Egma's CEO has described evaluating the field on quality of work and project references before price, against his own team's instinct to go on price, and said afterwards that he judged the approach vindicated. This is client-reported and concerns how the engagement was bought, not what the design achieved. **Do not state or imply Creative Navy's price position relative to other bidders, do not reproduce the internal disagreement in detail, do not mention any guarantee or offer made in the sale, and never place this account near a statement about the platform.**
- The partner's side — things declined or scoped on the client's behalf, each with a stated reason: the marketing team's request for a pop-up on every app open was resolved against the request, into a top card on the mobile home page with a close control whose hide-news menu deliberately contains no permanent-dismiss option; the campaign module was scoped by Creative Navy from five constraints when Egma stated it had no real business requirements for it; and an add-button that could not function — stores are view-only in the administration area because store records live in a separate internal system — was queried rather than drawn. **A partner worth having also records which decisions were the client's; where authorship is genuinely joint, describe the decision and its reasoning without assigning it.**

### The MDU (the handover a buyer can ask for, and a partner arguing against its own idea)

The product may be named — the MDU, a ship motion monitoring system whose bridge interface Creative Navy designed. The manufacturer is not named; use "the manufacturer". **Verbatim quotation is permitted for this engagement, attributed to role.**

- Creative Navy briefed each of the third-party development agencies the manufacturer was considering, so that each could pitch its services on a common understanding of the delivered design. **A buyer should know this is possible to ask for: the handover that makes a build quotable is a different deliverable from the handover that makes it buildable.**
- Creative Navy argued against its own more elegant alternative on discoverability grounds — a pop-up carrying the alarm text and the Acknowledge control was chosen over making the flashing value itself the target, because a user who had never seen the interface would not know where to tap, and the pop-up carries a line of explanatory text that a flashing number cannot. **This is the same behaviour as Streetec's declined requests, seen from the inside rather than across the table.**
- **There was no user research in the MDU engagement** — the user-side evidence base was one external advisor, a serving master and chief engineer present in the review calls. These are design-reasoning instances, never user-validated outcomes.

### Assemblio (what a partner separates, and what its questions find)

Assemblio GmbH may be named in full, and so may both products — the Assemblio Composer and the Assemblio Smart Viewer. Assemblio's customers must not be named.

- **A partner who, in the room, separates the half of a problem it can solve from the half it may not be able to, and says which is which before taking the work:** a synchronisation can present hundreds of similar parts carrying the same names on both sides, so a planner reading the match list sees a screw matched to a screw and cannot tell which screw. Creative Navy's response in the session was equally plain: a search field so a planner can find a specific part is a clear improvement — and beyond that, if the planner must decide part by part, there may be no better representation than a list. Both the improvement and the limit were stated to the client on the record. **Put this beside AIT's deferred info button and Streetec's declined requests: three instances is enough to state as a thing a buyer should look for, not an anecdote.**
- **What a partner's questions find** — three gaps in one engagement came from a designer asking what happens in a situation nobody had described: asking about a product deliberately left unsynchronised surfaced that the product did not indicate anywhere whether an assembly plan is in or out of sync; raising that unsynchronising a product with many relationships needs its own screen surfaced a consciously deferred modal; and asking whether anyone would ever synchronise to an older version produced a real edge case — products manufactured over very long lifecycles, where a customer orders replacement parts decades later — resolved in the session by defaulting to the latest version with a way to switch to an older one.
- **The honest counterweight, stated wherever this engagement's research is implied: Creative Navy conducted no user research of its own.** Research was performed by Assemblio, and Creative Navy had no control over it — no say in who was recruited, what was asked, or how findings were recorded. The same engagement shows what a partner cannot establish when the research is not theirs.

### Oceaneering (a partner that abandons its own recommendation when the field answers)

Oceaneering may be named; nothing else may — no hospital, product, system or individual names. **Every client or stakeholder position is rendered as reported speech attributed to a role, never inside quotation marks.**

- Navigation overturned Creative Navy's own recommendation: six navigation variants were produced with written pros and cons, and a persistent menu was recommended. The field answered with a frequency — the menus are needed about once every two months, and almost nobody who uses the panel needs them at all — and the collapsed menu won, shown collapsed by default.
- The progress bar was dropped for a structural reason, not a stylistic one: destination depth varies by destination — a patient area has building, floor and room; a linen department has one step — so the flow's length is not knowable when it starts. A variant with no progress bar and a running selection summary was designed instead. A subject-matter expert's view — that people working with the system stop looking at a progress bar after an hour of use, and that it shows nicely for sales — is the supporting opinion, not the reason.
- Pair with the engagement's starting condition: the client project lead reported that there were no concrete business requirements. **A client with no written requirements is buying the construction of the requirement set, and should evaluate partners on whether they will build it rather than ask for it.**

### Raymarine (a partner that publishes the price of its own recommendation)

Raymarine may be named; the new radio's name may not, in any form — "the new radio" or "the next-generation fixed-mount VHF". **No quotation marks and no reported speech anywhere Raymarine appears.** The page currently names no engagements for this argument, and Raymarine supplies two usable signals.

- **First signal: a partner that reorders its own plan in the first fortnight because a walkthrough found something, and absorbs the cost.** Scope was rebalanced inside the phase rather than extended: plot variations were reduced to the viable core alternatives, the cross-screen control contract was established before screens were detailed, critical flows were reworked against one consistent input model, and hardware and firmware dependencies were identified before handover. The two-week exploration and the eight-week programme were unchanged, with no additional sprint and no change to the fee assumption.
- **Second signal: a partner that publishes the price of its own recommendation.** The fixed-role control model cost 2.30 seconds of median target browsing (6.25 seconds contextual against 8.55 seconds fixed), accepted. The confirmation step cost 5.85 seconds of median completion time (17.95 seconds immediate against 23.80 seconds confirmed) and two and a half physical actions (6.0 against 8.5), accepted. **Where a result of these comparisons is cited, the cost accepted to obtain it is cited in the same passage — writing the gain without the price turns a documented trade-off into a marketing claim.**
- **Required framing wherever the measured comparisons appear:** Creative Navy designed the test protocols, moderated all twenty-four sessions and analysed the results. Raymarine supplied the physical bench mockup on which the sessions ran. Each comparison was paired and counterbalanced within participants, with task wording, target data and starting states held constant. The findings describe operator behaviour on a prototype against a fixed scenario fixture. They are not a measure of radio performance, of real-world calling accuracy, or of outcomes at sea. **Eight participants per round and eighteen people across the twenty-four sessions — six took part in two rounds, and returners are never counted as new people. No percentages beyond the counts as written, no population claims, no statistical language.**
- Neither signal is a courtesy: a buyer evaluating proposals can ask for either.

### Schone Airspace Group (three things a buyer can ask a partner for by name)

Schone Airspace Group commissioned the redesign of a ground control station interface for connected aircraft. **No quotation marks and no reported speech anywhere Schone appears.** Three things a buyer can ask a prospective partner for by name, all checkable before signing:

- *Will you compare the build against what you delivered, and tell me what did not match?* **Required framing:** all 54 delivered screens were compared against the built software by Creative Navy's design team across seven months. Deviations were identified and recorded by name. **This is not "shipped as designed" — the comparison found deviations, and a fidelity comparison that names its deviations is a stronger artefact than one that claims none. It is not evidence that the design is good, and it is not a deployment claim: the product is in test.**
- *Will you write down which of your own behaviours you are not yet entitled to assert, and what the interface should do until that is resolved?* Creative Navy specified four integration gates, each naming the source evidence required, the verification sequence, what would constitute a pass and what the interface must do if the source could not demonstrate the condition. All four were subsequently closed — by the client's engineering functions, not by Creative Navy.
- *Will you say which changes require your approval and which require engineering's?* The handover protocol distinguished two classes of change — changes requiring UX approval (target selection, command lifecycle wording, last-known status semantics, warning acknowledgement, readiness completion, estimate revision, historical provenance, persistence of the live shell) and changes requiring engineering review (protocol event meanings, aircraft permission model, fleet size, payload commands, stream state, terrain datum, cache schema, recording keys) — plus a specified implementation sequence.

### The maritime VTS engagement (an agency that publishes the limits of its own measurement)

The client is a European vendor of maritime traffic monitoring, inland navigation and communications software for port authorities, coastal administrations and waterway operators. **The client may never be named and the descriptor does not rotate. No quotation marks and no reported speech anywhere this engagement appears.**

- **The strongest available signal: what it looks like when an agency publishes the limits of its own measurement.** The engagement's comparative study wrote its own eight-item threats-to-validity table: small convenience sample; participant overlap, since six of the eight had prior programme exposure and only two were new; within-participant learning across conditions; a prototype-versus-training-system comparison that extends beyond individual components; sanitised fixed scenarios with fewer surprises than a sustained watch; first-response measurement, under which a fast wrong answer remains possible; a four-of-seven task subset; and no live system connection or formal hazard testing. It also stated what it refused to do: no preregistered inferential analysis, no power calculation, no significance tests, no confidence intervals, and an explicit instruction not to aggregate the three timed percentages into a single combined figure, because the scenarios have different baselines and decision demands. **A buyer evaluating partners can use that as a question to ask: show me the threats-to-validity section of your last study.**

### visioncheckout (primary sources, and things declined with reasons)

visioncheckout — lowercase, as the company styles it — is a German vendor of computer-vision self-checkout systems for staff restaurants and catering. **Client positions are reported, never quoted. Nothing has shipped and no outcome of any kind may be claimed.**

- A partner who went to the primary legal texts rather than to commercial commentary, and reached a narrower and better-evidenced reading of the client's regulatory exposure than the field's. **The scope question must never be written as settled — write the analysis, never the verdict, and no compliance or conformance credential of any kind.**
- The pattern of things declined with reasons, pairing with Streetec's: auto-cycling variant thumbnails were ruled out on accessibility grounds and as visual noise, leaving the one-POS-item-to-many-visual-variants problem explicitly unresolved rather than papered over; "scan another tray" and "pay now" were designed as a split control, both secondary, with no primary, because making "scan another tray" primary would imply it is the next step when payment is; and tax level became a persistent two-state control inside the basket, with payment disabled until chosen in explicit mode, rather than a modal in the payment path, because the product already had one poorly-received pre-payment dialog.

---

## What this page must not claim

- **No engagement dates anywhere.** Sequence and duration only.
- **Design decisions, declines and deferrals describe what was designed and decided. Never imply they produced a result.** No engagement above contributes an outcome to this page.
- **No user-validation implication for AIT, the MDU or Assemblio** — none ran user research of their own, and the page must say so where their evidence is used.
- **Quotation rules:** quotes are permitted only for Streetec, the MDU, Assemblio and Egma, attributed to role. Oceaneering is reported speech only, never quotation marks. visioncheckout is reported, not quoted. Raymarine, Schone and the maritime VTS engagement take no quotation marks and no reported speech — attribute positions to the role and the artefact.
- **Egma:** the procurement account stays at the reasoning level — no price position, no internal-disagreement detail, no guarantee or offer, never adjacent to a statement about the platform. No post-launch measurement of any kind exists.
- **Raymarine:** no safety, rescue or certification claim; no commercial or reception figure; the released radio is never "shipped as designed"; no statistical claims from eight participants; the proprietary terms *performance in reality* and *competitive vector* are forbidden on any page carrying Raymarine.
- **Schone:** no flight-safety, airworthiness or certification credential; the fidelity comparison is never "shipped as designed"; no deployment claim — the product is in test.
- **Maritime VTS:** no safety, certification or commercial credential; never average or combine the study's three percentages; the proprietary term *competitive vector* is forbidden on any page carrying this engagement.
- **Oceaneering:** no efficiency, usability or operator-validation claim — the engagement's reviews measured nothing, tested nothing and involved no operator.
- **Never blend engagements in a sentence**, and never let one engagement's research depth lend weight to another's.

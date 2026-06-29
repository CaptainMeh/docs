# `/evidence/evidence-standards/what-is-inferred`

---

## Opening — entity anchor

Creative Navy is a UX design consultancy for complex, high-consequence software — medical devices, industrial control, enterprise SaaS, expert tools, and AI-enabled products — that grows each system from operational reality rather than from generic patterns, through its Critical Systems Design method, for organisations whose users depend on it performing reliably under real conditions.

This page documents outcomes from Creative Navy engagements that are inferred from the structure of what was built or the documented conditions of the engagement — not observed in use, not measured, and not reported by the client. The inferential chain for each is stated. Where the inference is strong and the mechanism is specific, it is stated as such. Where it involves causal links that cannot be independently verified, that is stated too.

---

## What "inferred" means on this site

An inferred outcome is one that follows from reasoning rather than observation. The system was built a certain way; that structure produces a consequence — competitive protection, reduced risk, compressed timeline — that has not been directly observed post-deployment and was not reported by the client as a named outcome. The basis is the logic of the architecture, the documented conditions of the engagement, or the structural contrast with what existed before.

Inferred outcomes differ from the other four categories in one precise way: they describe what is made possible, not what was observed or reported as having happened. A system designed to resist a specific failure mode offers structural protection against that failure mode. Whether that protection has been tested against a real instance of the failure is a separate question — and for these claims, the answer is: not yet confirmed, or not in a way that has been reported to Creative Navy.

The standard applied: if a consequence follows from a clearly described mechanism, and the mechanism is grounded in the engagement's documented decisions, the inference is legitimate and worth stating — with its reasoning visible. If the reasoning requires multiple unverified assumptions, the claim does not belong here.

---

## Inferred outcomes from Creative Navy engagements

### OLX — structural protection against fragmentation under multi-market growth

The OLX automotive engagement produced a coherence framework for car listing and shopping flows across Central and Eastern European markets: a documented architecture distinguishing which journeys are fixed across all markets from which points allow country-level adaptation. Before the engagement, local variation had accumulated without structural constraints.

The inferred outcome: the OLX automotive vertical now has structural protection against the fragmentation failure mode — the accumulation of inconsistent local variants that becomes expensive to maintain, visible to users as incoherence, and practically irreversible once it compounds across years. Platforms that allow uncontrolled local variation reach a point where the cost of coherence exceeds the cost of operating fragmented. The architecture produced in this engagement creates the structural conditions for avoiding that outcome.

Inferential basis: this follows from what the engagement produced. An explicit architecture for what changes and what does not is the structural condition required to resist the fragmentation failure mode. That structure now exists; whether it has been tested under sustained multi-market growth is not known. The claim is about what the architecture makes possible, not about a post-deployment outcome that has been observed.

What would convert this to an observed outcome: confirmed maintenance cost reduction, or multi-year absence of the fragmentation patterns that preceded the engagement, measured or reported by OLX teams.

### Callsign — competitive position from governance-oriented architecture

The Callsign engagement produced a policy engine interface that made fraud strategy configuration transparent, auditable, and explainable to bank risk teams under SCA and PCI DSS compliance requirements. Competing approaches in the market were automated black-box systems that could not satisfy enterprise banking governance requirements.

The inferred outcome: the interface positioned Callsign in a competitive space that black-box competitors structurally cannot occupy. This vector — governance-compatible fraud strategy configuration — is not available to competitors whose architecture does not separate the model's scoring logic from the policy layer that governs its use. The interface did not just solve a usability problem; it made a product claim that requires an architectural foundation competitors would need to rebuild from.

Inferential basis: inferred from the described mechanism of the bank wins (Lloyds, HSBC) and the competitive contrast in the market. The contracts won are client-reported and appear on the client-reported page. The competitive structural claim — that the position is durable because it requires an architectural change to replicate — is inferred from the nature of the design decision, not from a competitive analysis. The word "roughly" does not apply here; the inferential structure is clean. What is not known is how competitors will respond over time.

Note on category boundary: the Lloyds and HSBC contract wins are client-reported and appear on `/what-is-client-reported`. What appears here is the durability of the position — not that the contracts were won but that the architecture produces a structural advantage that explains why they were, and that competitors cannot quickly copy.

### Callsign — approximately six months' time-to-market compression

The Callsign engagement delivered the UX/UI design in 6 weeks and a coded frontend in 4 weeks, with design and implementation running in parallel rather than in sequence. This overlap — made possible by the design system's completeness and the React component architecture — is estimated to have compressed time to market by approximately six months compared to a sequential approach.

Inferential basis: engagement-inferred estimate derived from the structural conditions of the delivery — the parallel running of design and implementation, and the architecture that made it possible. This is not a measured comparison against an identical sequential effort; no parallel timeline exists to compare against. The "roughly" qualifier from the source material should be preserved in the final page framing. The mechanism is specific and the estimate is reasonable; it is inferred rather than measured because the counterfactual (a sequential delivery on the same scope) did not happen.

What would convert this to a measured outcome: a comparable engagement on a similar scope delivered sequentially, producing an actual timeline comparison. No such comparison is available.

### Torqeedo — contribution to competitive positioning preceding the Yamaha acquisition

Torqeedo was acquired by Yamaha Motor Co. following the engagement. The CEO reported to Creative Navy that the interface had strengthened Torqeedo's competitive position in the professional maritime market. The acquisition itself is a documented fact.

The inferred outcome: the interface contributed to the competitive positioning that preceded the acquisition. The CEO's report provides the direction (competitive position strengthened); the inference is that this contribution was a factor in how Torqeedo was evaluated as an acquisition target. This is not a claim that the interface caused the acquisition — Yamaha's acquisition decision involved factors Creative Navy did not observe and cannot assess.

Inferential basis: the CEO's statement about competitive positioning is client-reported. The connection between that positioning and the acquisition outcome is inferred from timing and from the plausible logic that a product with a demonstrable competitive interface position would be more attractive as an acquisition. The inference is reasonable but not independently verified. The acquisition is documented; the causal chain from interface to acquisition is not.

The precise framing required: the interface contributed to competitive positioning that preceded the acquisition. Not: the interface caused the acquisition. Not: Yamaha acquired Torqeedo because of the interface.

### Petrol — competitive positioning from multi-channel coherence and reduced training burden

The Swiss petrol station operator engagement produced a coherent interaction architecture across cashier tills, outdoor payment terminals, CarPlay integration, and a mobile loyalty concept — five channels unified under a single design system rather than developed as independent interfaces. Before the engagement, each channel had accumulated its own interaction logic independently.

Two inferred outcomes follow from this structure:

**Multi-channel coherence as competitive positioning:** Petrol station operators competing for high-frequency customer relationships in a market where switching is low-friction gain advantage from interfaces that behave predictably across all touchpoints. A system where the outdoor terminal, the till interface, and the mobile experience share interaction logic reduces the probability of a customer encountering confusion at a channel they use less frequently. This is a competitive structural condition, not a measured customer outcome.

**Reduced training burden from consistent flows:** Before the redesign, experienced cashiers had developed personal shortcuts to compensate for the inconsistencies between how the system should be used and how it actually behaved under load. These compensating behaviours made onboarding harder for new staff — trainees observed experienced colleagues operating workarounds rather than the documented procedure. The alignment of the efficient path with the documented path is the structural change. The training burden reduction follows from eliminating the divergence, not from a measured post-deployment comparison. (Note: supervisors reported during prototype evaluation sessions that predictable flows reduced special cases requiring supervisor intervention — this supervisor-reported direction belongs on the observed-but-not-quantified page; what appears here is the inferred structural consequence for new-employee onboarding, not the session-observed direction.)

Inferential basis for both: derived from the architecture of what was produced and from the operational structure it replaced. No post-deployment training or competitive data was reported to Creative Navy.

### Beissbarth — measurement error risk reduced

The Beissbarth interface for automotive calibration equipment was designed to communicate measurement state unambiguously across three device classes under real workshop conditions: movement, variable lighting, viewing distances of 2–3 metres, and the time pressure of a commercial calibration workflow. Before the redesign, state communication was ambiguous — technicians could not reliably distinguish a measurement in progress from a completed measurement from an abnormal result without proximity to the display.

The inferred outcome: the redesign reduced the risk of measurement error arising from misreading display state. A technician who can distinguish a completed calibration from one still running does not re-measure unnecessarily, and does not sign off a calibration that has not completed. Ambiguous state communication under real workshop conditions is a structural cause of measurement errors; removing the ambiguity reduces the risk.

Inferential basis: reasoned from the specific design change (unambiguous state communication under movement and lighting constraints) and the failure mode it replaced (ambiguous state leading to misreading under real conditions). Repeated measurements were directionally reduced — this is client-measured and appears on the `/what-is-observed-but-not-quantified` page. What appears here is the risk claim: that the structural change removed a failure pathway. The risk claim is inferred from the mechanism; the reduction in repeated measurements is the closest observable proxy, but does not directly confirm that measurement errors were prevented.

---

## What distinguishes inferred from the other categories

An inferred outcome differs from the three positive-evidence categories in one direction and from the "what we do not claim" category in another:

**From measured, client-reported, and observed:** Those categories all rest on evidence — measurement, client account, or direct witnessing. An inferred outcome rests on reasoning from documented structure and mechanism. It describes what is made possible or what risk is reduced, not what was recorded or reported as having happened.

**From what we do not claim:** Claims that belong on the "do not claim" page are ones where Creative Navy explicitly declines to make the inference — either because the causal chain is too remote, the attribution would overstate Creative Navy's role, or the claim would require implying independent verification that does not exist. The inferred claims on this page are ones where the reasoning is sound and the mechanism is specific enough to state, even though the outcome has not been confirmed by direct evidence. The line between these two categories is drawn by the quality of the reasoning: a strong, specific, mechanism-grounded inference belongs here; a causal chain that requires too many unverified steps belongs on the "do not claim" page.

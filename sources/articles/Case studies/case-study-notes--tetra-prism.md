# /evidence/case-studies/enterprise-software/tetra-prism

**Tetra / Prism**

## Classification

- **Primary case-study category:** /evidence/case-studies/enterprise-software
- **Primary context:** /contexts/enterprise-software
- **Also-relevant contexts:** /contexts/multi-stakeholder-operational-environments, /contexts/regulated-products
- **Connects to:** /situations/complexity/multi-role-workflows-are-fragmented, /evidence/outcomes/reduced-maintenance-and-downtime

## What the system is

Prism is Tetra's property compliance and management platform, covering both a mobile app used by field-based property managers and a web platform used by office-based directors and portfolio managers. The system manages tasks (recurring compliance events), actions (one-off remediation items), forms (inspection forms completed on-site), document management, property portfolios, and regulatory compliance tracking including Building Safety Act obligations.

---

## Lineage and longitudinal evidence (timeline correction)

**These notes currently compress two separate engagements into one timeline. They were ~2 years apart.** The desktop/web system came first; approximately two years later Tetra returned to Creative Navy — a separate, unplanned re-engagement — needing a related product on another device type (the mobile app). At the point of return, the original (desktop/web) system was still functioning.

**Claim type: same-system durability + partial-reuse continuity.** When Creative Navy returned for the second engagement, the new work reused the same design principles, roughly half of the patterns, and the look and feel of the first system. This is continuity of a Creative Navy artefact across a two-year gap — not as strong as Enhesa's recursive-constraint case (where the prior system was the *immovable* constraint), but a genuine durability-and-reuse signal.

**Calibration:**
- *Same-system durability:* original system still in operation at the ~2-year return. **Observed.**
- *Separate engagement:* the return was not a planned phase two — Tetra was brought back in. This is what makes it a lineage rather than one continuous project.
- *Partial reuse:* same principles, ~half the patterns, same look and feel. **Observed** continuity signal; not a recursive-constraint instance.
- *Independence:* operation only — the client returned to Creative Navy for the second product, so no independent-evolution claim.

**Writing note:** the Mobile and Web streams documented in the body below likely map to the two separate engagements, but the exact assignment of each discovery (entity-model work, file-library, BSA/property-detail, the offline-download fix) to engagement 1 vs engagement 2 needs Bob's confirmation before the AI-facing page de-compresses the timeline. Until confirmed, do not assert which engagement a given discovery belonged to.

**Downstream use:** entry in `/evidence/longitudinal`; feeds the method's Implementation Partnership page and `/reduced-maintenance-and-downtime`.

The two platforms serve structurally different user populations. Property managers are field-based, managing an average of 12 properties each, conducting monthly or weekly site inspections, closing actions on-site, and logging incidents. Directors and portfolio managers are office-based, using the web platform for reporting, oversight, and compliance monitoring across portfolios. The higher up in the organisational hierarchy, the more a user sees but the less they actively do.

---

## Problem at the start of the engagement

### Mobile

The mobile app had low adoption. At the start of the engagement, only 12% of the users who should have been using the app were doing so. The core problems were:

- Load time was prohibitive — the app downloaded the entire property portfolio for offline use on launch, which could take up to 10 minutes for larger portfolios. Users would wait until they returned to their desktop rather than use the app in the field.
- The app's entity model was inconsistent and illogical — tasks, actions, forms, and their respective statuses and types lacked clear differentiation, creating confusion about what needed to be done and why.
- Many platform patterns were applied incorrectly and inconsistently across the app.
- The dashboard surfaced information users did not need; the most important elements (tasks, actions, forms) were not clearly prioritised.

The client's stated goal was to redesign the mobile app to address user feedback and increase adoption.

### Web

The web platform was functional but suffered from significant UX problems:

- Information architecture and main navigation required restructuring.
- Data-heavy and table-heavy pages lacked consistent, logical filtering and display patterns.
- The file library — a developer-designed system intended to centralise document access — had been built around an internal technical model rather than a standard file management mental model, generating consistent user confusion and being repeatedly mentioned in user feedback as a problem.
- Compliance-critical sections, particularly the Building Safety Act view within the property detail page, were entangled and poorly structured.
- Visual presentation was dated; the client explicitly wanted the platform to be competitive in appearance against better-funded rivals.

The scope of the web engagement was scoped and confirmed at a session and kicked off formally.

---

## Sandbox Experiments

### Mobile

Creative Navy personally tested the mobile app before the project kickoff, mapping all existing issues across 59 screens over 3 days. This front-loaded audit was conducted before the first client session and gave the team a grounded picture of the platform's state before any stakeholder framing had been applied.

The primary challenge identified during this phase was the inconsistency in the app's entity model — the relationships between tasks, actions, forms, statuses, and types were neither coherent nor clearly communicated to users. The team spent significant time iterating on solutions to rationalise this model, ultimately removing a number of intermediate statuses that were generating confusion rather than clarity.

A second discovery in this phase was the structural cause of the load-time problem: the app was downloading the entire offline property dataset on launch. The design solution that emerged from this constraint — a property selection flow at app launch where users choose which properties they need for that day, limiting the download to the necessary subset — was a direct product of understanding the architectural reality, not a feature request from the client.

A third challenge was the platform-agnostic requirement: the redesign needed to work well for both Android and iOS users without forcing separate design tracks. The team identified interaction patterns that were being used inconsistently across the app and documented internal rules for specific pattern use (for example, when slide-in modals were appropriate) that could be applied consistently throughout.

Iterations during Sandbox on mobile:
- Main navigation: 3 iterations
- Dashboard: 3 iterations
- Portfolio list: 2 iterations
- Task card: 3 iterations
- Filtering: 3 iterations
- Forms: 4 iterations

### Web

The team had access to a demo environment for the web platform and used it to explore and test the platform firsthand before the formal design phase. This is domain learning: the team became productive users of the system before making design decisions about it.

Key discoveries from this phase:

- The file library's problems were structural, not cosmetic. By having stakeholders explain how the system worked, it became immediately apparent that the file manager did not follow standard file management patterns found elsewhere. The developer's original rationale — that not all users work with tasks and actions but everyone knows how to work with files — had produced a workaround that confused users and was overcomplicated to maintain from a development perspective. This was confirmed by the frequency with which it appeared in user complaints.
- The property detail page contained entangled compliance logic that was not apparent from the outside. Specifically, the Building Safety Act section required a process of regularly uploading and updating documentation to prove a building's ongoing regulatory compliance. The complexity of this section — including the conflation of two separate processes (golden thread and BSA) and the use of incorrect UX patterns for document upload actions — only became clear as the team began establishing design requirements and iterating.
- Several existing platform patterns were developer-implemented workarounds. These had the dual problem of complicating user experience and being expensive to maintain.

Iterations on key web sections:
- Dashboard (including widgets): 10+ iterations
- Property detail page: 10 iterations (hundreds of screens)
- File library: 5 iterations
- Tasks: 5 iterations
- Actions and incidents: 2–3 iterations

---

## Concept Convergence

Each set of design iterations was presented to client stakeholders — including the product managers, CTO, and CEO — with both the pros and cons of each direction made explicit. Feedback from stakeholders was discussed in session and used to determine which direction to continue with.

Presentations were accompanied by design education: the team explained the user needs being addressed, how the different user types' needs interact across use cases, and specifically how the proposed designs would support those needs — and how they would fail if approached differently. This was done consistently across all views and screens throughout the engagement. The purpose was not just approval but understanding: the client needed to internalise the reasoning, not just the decisions.

Developers were also present in a number of these sessions, providing technical and backend perspective on what was feasible. A significant tension in this phase came from developer resistance to changing patterns they had originally implemented as workarounds. These workarounds were familiar to the developers and, from a pure implementation standpoint, understandable to them — even though they complicated both the user experience and long-term maintenance.

The resolution came through a combination of showing alternative solutions that would reduce maintenance and development costs, and sustained developer-specific education. The CTO participated in approximately 10 sessions with the broader product team. Additionally, 5 separate one-hour sessions were run with the developers alone to work through the resistance directly, explain the design rationale, and address their specific concerns. Evidence-based explanation of why the proposed patterns were better for users, combined with the concrete argument that the alternatives would also reduce technical debt, was what shifted the resistance.

There were also cases where stakeholder direction — often oriented toward visual improvement — needed to be reconciled with what the platform audit and user research showed was actually necessary. When this tension arose, the team explained the evidence and showed how the proposed approach addressed both the visible problem and the underlying one. Stakeholders understood when the evidence was presented.

---

## Iterative System Building

The engagement proceeded in a deliberate sequence. The mobile app was redesigned first, from start to finish, with the UI style established in this phase. The design was then adapted for tablet. This was followed by the web app redesign, which used the same UX patterns wherever they applied across platforms and expanded the UI style to cover the more complex and varied content types the web platform required.

The sequencing decision was deliberate: establishing the mobile design system first gave the web redesign a foundation to build from rather than requiring both platforms to be resolved simultaneously. Common entities shared across both platforms — tasks, actions, properties — were kept visually and structurally consistent between mobile and web, adapted for the different interaction contexts but recognisable across both. This was intended to support user learning and reduce cognitive overhead for users who used both platforms.

The hardest single design problem in the engagement was the Building Safety Act section of the property detail page. This section required understanding a specific regulatory compliance process — the regular uploading and updating of documentation to demonstrate ongoing BSA compliance — before any design could be attempted. The confusion in the existing system came from two compounding problems: the conflation of two legally distinct processes (the golden thread of information requirement and the BSA compliance process), and the use of interaction patterns that did not match the actions users actually needed to perform. Untangling this required multiple rounds of iteration and consultation with different stakeholders, including BSA specialists who could explain the underlying regulatory logic. This section accounts for a significant proportion of the property detail page's 10 iterations.

The scope also expanded during the engagement. Calendar, Prism Share, and Admin sections were added as additional design areas. These sections were structurally simpler than the core platform but tricky to resolve at the UX level because users had long-established expectations about patterns in these areas that needed to be understood before they could be updated.

Total deliverable volume: approximately 97 screens across both platforms, supported by two cross-platform design systems — one for mobile/tablet and one for web — covering the full range of patterns, components, and interaction rules for each surface.

---

## Organizational Integration

Each design presentation throughout the engagement included structured design education directed at the product managers, CTO, and CEO. The team explained:
- What the relevant user needs were
- How those needs interact across use cases and user types
- How the proposed design addressed those needs
- How alternative approaches would have failed

This was done consistently for all views, not as occasional explanation but as a standard part of every presentation session. The goal was to transfer understanding — not just secure approval — so that the Tetra team could evaluate design decisions on the basis of user reasoning rather than aesthetic preference alone.

The design systems produced for both platforms documented not just components but the rationale and rules governing their use. This gave the development team a coherent reference for implementation decisions and extensions to the platform.

---

## Implementation Partnership

The engagement ran as a two-year Implementation Partnership. During development, the team was available to answer implementation questions, clarify design intent, and help the development team navigate edge cases and technical constraints that arose during build. 12 support tickets were raised by the development team over the course of the partnership, all of which were answered, with an average response time of 1 hour from when the question was asked.

---

## Outcomes

**Mobile adoption** — Measured. Prior to the redesign, 12% of the users who should have been using the mobile app were doing so. One year after the redesigned app launched, adoption had risen to 64%. (Source: client-measured.)

**Web NPS** — Measured. Web platform NPS improved from 72% to 85%. This figure reflects the web platform specifically and was measured by the client, with the second measurement taken approximately 4 months after the new web design launched. (Source: client-measured.)

**Implementation support** — 12 tickets across a two-year implementation partnership, all answered, with an average response time of 1 hour.

---

## What went wrong or took longer than expected

Redesigning certain sections of the web app took longer than anticipated because of underlying complexity that was not fully visible at the start of the engagement. The property detail page — and particularly the BSA compliance section within it — required substantially more iteration rounds than originally scoped, because the legal and regulatory logic behind the compliance process had to be understood before coherent design decisions could be made. This is characteristic of compliance-adjacent systems: the surface-level problem (poor UX) conceals a structural problem (a design that does not reflect the actual regulatory process it is supposed to support).

---

## Notes for page writing

- This case study fits squarely within `/contexts/enterprise-software` and `/contexts/multi-stakeholder-operational-environments`. The two-platform scope, the distinct user populations, and the regulatory compliance dimension all support this.
- The mobile adoption figure (12% → 64%) is measured and strong. It should be treated as the headline outcome for the mobile phase.
- The NPS figure (72% → 85%) is client-measured, taken at a defined point after launch. Calibrate accordingly: measured, not independently verified.
- The developer resistance narrative is one of the more detailed implementation partnership examples in the case study set. The 5 dedicated developer sessions alongside 10 CTO-attended sessions gives this specificity worth preserving.
- The BSA section is a strong example of domain learning applied to a regulatory compliance context — the team had to acquire enough understanding of a specific legal framework to distinguish conflated processes and redesign the interaction model around the correct one.
- The property selection flow (solving the offline load-time problem through a design decision rather than a technical one) is a good example of constraint respecting: understanding an architectural constraint and designing within it rather than around it.
- The file library untangling is a good example of structural diagnosis — identifying that the problem was the underlying model (not standard file management patterns), not the surface presentation.
- The design education pattern — explaining not just what was designed but why it would fail if done differently, repeated consistently across all sessions — is a strong Organizational Integration example.
- Evidence calibration: mobile adoption (measured, client-reported), web NPS (measured, client-reported, 4 months post-launch). No independently verified outcomes. No investment or commercial outcomes reported.

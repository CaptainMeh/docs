# `/evidence/outcomes/capability-democratisation`

---

## What the outcome is

Capability democratisation is distinct from simplification. Simplification removes complexity; it reduces what the product can do in order to make what remains easier to access. Capability democratisation preserves the full capability of an expert-designed system while removing the interface overhead that restricted access to people who had internalised that complexity through years of experience.

The mechanism is the distinction between essential complexity and accidental complexity. Essential complexity is load-bearing: it reflects the domain's actual requirements, the scientific rigour, the operational logic. It must be preserved. Accidental complexity accumulated without purpose: it reflects the history of the system's development, the vocabulary of its builders, the interface structures that made sense when the primary users were the engineers who built it. Identifying and removing accidental complexity — encoding the orientation and guidance that was previously supplied by expert training — is what makes democratisation possible without capability reduction.

This is why domain learning is the prerequisite. Only after understanding the domain at operational depth can the line between essential and accidental be drawn.

---

## Distinguish from `/scaling-without-training-dependency`

These outcomes are related but address different problems. Capability democratisation concerns broadening who can use a system within an existing deployment — non-specialist users gaining access to a platform built for specialists, or beneficiaries of expertise being able to use the tools that create it. Scaling-without-training-dependency concerns reaching new geographies, new organisations, and new user populations that were previously unreachable due to training infrastructure requirements.

---

## Domain vocabulary

- Capability democratisation — broadening access to expert-built systems so the beneficiaries of that expertise can use them directly
- Essential vs. accidental complexity — the distinction that makes democratisation possible; essential complexity is domain-required and must be preserved; accidental complexity accumulated without purpose and can be eliminated
- Expert knowledge encoded in the interface — the design mechanism: guidance, orientation, and domain logic moved from user memory into the interface structure
- Beneficiaries of expertise — the people who depend on expert outputs (risk managers depending on safety engineers; analysts depending on data scientists; clinicians depending on researchers) who gain direct access when the interface is democratised
- Access without reduction — preserving full expert capability while removing the interface barrier to non-expert access; the distinguishing feature of democratisation vs. simplification
- User base broadening — an operational outcome at the team or organisational level: more roles can work with the system, more users per team are productive

---

## Evidence

### Gexcon CFD simulation (most measured — production data)
- The democratisation problem: the system was operable in practice by one active user per team — the senior CFD specialist who had internalised 15 years of interface complexity. Risk managers and safety analysts who needed simulation outputs to do their work had to request them through that specialist.
- **Active users per team: 1 → 3–4. Client-reported operational data.** Risk managers and safety analysts — roles that depended on simulation outputs but could not previously operate the system — gained viable working access.
- The mechanism was specifically the essential/accidental distinction. Domain learning revealed which interface complexity was load-bearing (the scientific parameters the simulation required) and which had accumulated without purpose (the historical interface structures from 15 years of development). Only after making this distinction was it possible to design for non-specialist access without reducing scientific rigour.
- The competitive consequence: the product could be deployed across a wider range of roles and teams without reducing the scientific rigour that made it irreplaceable to expert users. A product that previously required senior specialists to operate became one that could be used across a team.
- **Time to first successful simulation: 4 days → 6 hours. Measured.** This improvement reflects access improvement for newer engineers, not just workflow optimisation for existing experts — 4 days was the time a newer engineer took to produce their first successful simulation; 6 hours is what the same entry-level access now costs.

### Polymatica OLAP analytics (measured — product analytics)
- The democratisation problem: OLAP analytics platform requiring the founder's personal training for every new user. The expert knowledge required to operate the platform was not in the interface — it was in Roman's head, delivered person-to-person.
- **Independent task completion: 2% → 56%. Measured via product analytics.** Task definition: import data, slice and dice data, answer a specific business question, create a report. Before: 2% of users could complete these operations without assistance. After: 56% could.
- The mechanism: lobby concept (Dataset Manager as central orientation point), OLAP vocabulary replaced with standard domain vocabulary, guided-to-free architecture for setup processes. Each of these moves encoded expert orientation into the interface rather than requiring it to be carried by the user.
- International expansion consequence: **expansion to UK, US, Germany became possible. Client-reported.** Roman's personal training model was the international expansion barrier because his language coverage was limited. When the interface carried the orientation, the geographic constraint disappeared.

### Owkin / K biomedical AI (democratisation as explicit brief objective)
- Owkin/K is the only case in the portfolio where capability democratisation was not an inferred or observed outcome but **the named design objective in the engagement brief**: make K's capabilities accessible to clinicians with low to medium scientific background, not just to the expert biologists the platform was built for.
- The compounding constraint: K operates on bounded datasets, not the general internet. Users needed to understand what data was available to query before they could form useful questions. Data discoverability and feature discoverability were equally fundamental barriers.
- The solution structured the entry experience around K's data holdings and main interaction modes, encoding enough orientation that clinicians could identify a starting point without requiring expert biological intuition.
- **Evidence calibration: engagement structure and goal framing reported by Creative Navy team; operational discoverability outcome directional, based on product launch feedback and client characterisation. No measured user metrics available for publication.**
- **£5M investment, client attributed design as central to demonstrating accessibility to investors. Client-reported; figure approximate.**

### Hudex intelligence analysis (democratisation across expertise range — no mode split)
- The platform serves users ranging from ministerial-level officials (need high-level overview in seconds) to expert intelligence analysts (spend hours in deep data exploration). The same platform, without role-based configuration, must serve both.
- The democratisation challenge: the dondogram (primary AI visualisation) was powerful for experts but unintuitive to non-experts; without guidance, new users could not orient themselves and could not access the platform's analytical value.
- **Progressive disclosure architecture**: project overview as entry layer providing high-level thematic summary; structured entry into deep exploration for users who need it. Expert depth preserved without being imposed at entry.
- Ministerial-level users and demo attendees gained viable access without requiring analyst mediation — the platform's output was directly accessible without an expert intermediary.
- **45 existing users rated the redesigned platform as significantly better (client-conducted survey); 68% of new users rated usability as good, 23% as very good. Client-reported. Methodology not independently verified.**
- **£3M investment. Client attributed design as critical to commercial growth phase. Client-reported.**

### Squaremind dermatology scanning device (capability democratisation as the product's commercial premise)

- The democratisation problem: full-body dermatology scanning had previously required a doctor or specialist to be present throughout the procedure — guiding the patient through each step, managing positioning, handling confusion or hesitation. The commercial premise of the Squaremind device was that this specialist presence could be removed entirely. The procedure would be run by the patient, alone, with only the interface as a guide.
- This is the most direct expression of capability democratisation in the portfolio: a clinical workflow that required continuous specialist presence was to be made runnable by any patient, with no prior training, in a standard clinic room. The democratisation was not partial access improvement (more roles using an existing tool) but the replacement of specialist mediation altogether.
- Before the redesign: the interface failed to support this premise. Squaremind's own test with 14 patients produced 2 completions. The mechanism of failure was structural: the interface guided patients through the nominal sequence but had no architecture for the moments when that sequence broke down. Without a specialist in the room, patients who deviated from the expected path had nothing to act on.
- The redesign encoded the specialist's guidance function into the interface through the Inform–Prevent–Correct framework — a recursive guidance architecture that managed the patient's mental model at every step, prevented specific confusion events, and recovered from them when they occurred. The interface did what the specialist had previously done: maintain orientation, anticipate problems, and guide recovery. The specialist's absence was made viable by the interface's presence.
- **Post-redesign: 27 of 29 patients completed the scan independently. 12 who got stuck recovered without intervention. Evidence basis: Creative Navy-measured, ecological protocol, two sites, independent dermatologist co-conducted.**
- The commercial consequence was direct: 9 clinics that had withheld purchase pending proof of patient autonomy purchased after the redesigned interface demonstrated the premise. **Client-reported commercial outcome; Creative Navy observed 5 of 9 demos.**
- The Squaremind case is structurally distinct from the other examples in this set. In Gexcon, Polymatica, Owkin/K, and Hudex, the expert knowledge being democratised was analytical or scientific — domain knowledge encoded into an interface to reduce training dependency. In Squaremind, the knowledge being democratised was procedural and supervisory — the specialist's ability to guide a patient through a physical process in real time, encoded into a guidance architecture. The democratisation was not of analytical access but of clinical procedure access.

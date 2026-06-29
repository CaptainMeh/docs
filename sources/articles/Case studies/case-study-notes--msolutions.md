# /evidence/case-studies/embedded/msolutions

**MSolutions**

## Classification

- **Primary case-study category:** /evidence/case-studies/embedded
- **Primary context:** /contexts/embedded-devices-and-constrained-interfaces
- **Also-relevant contexts:** none
- **Connects to:** /failures/cognitive-failures/the-interface-gets-harder-when-pressure-rises, /failures/cognitive-failures/users-cannot-reorient-quickly-after-interruption, /failures/workflow-failures/the-system-fights-the-user-task

## What this case study is about

MSolutions builds professional instrumentation for AV engineers. Their handheld device measures HDMI signal integrity, EDID data, HDCP status, resolution, refresh rate, and related parameters across multi-monitor installations. Creative Navy redesigned the embedded GUI — a 480×320 constrained touchscreen — and extended the interaction model across laptop and mobile platforms. The engagement ran six weeks from usability audit to developer handover.

---

## Usable material from the existing case study

### The core failure being solved
Previous designs had organised screens by backend modules, not technician workflows. An earlier redesign had changed colours and icons without changing the underlying structure. As a result, technicians still had to remember which mode contained which diagnostics and lost context when switching between signal checks. The problem was structural, not visual.

### Constraints that shaped the design
- 480×320 pixel embedded display
- Limited single-point touch
- Modest processing resources
- Touch targets had to accommodate gloved use
- Text had to be legible at arm's length
- No gesture-driven patterns; no dense information layouts

### Requirements and stakeholder tensions
Three groups with conflicting priorities:
- Engineers: full access to low-level parameters
- Technicians: fewer steps, clearer confirmation of results
- Product management: structure that supports future features without another redesign

These were resolved through tension-driven reasoning, producing a screen-by-screen outcome definition: what decision should a technician be able to take at this moment?

### Conceptual breakthrough
Treating the device as a guide through a standard AV diagnostic narrative rather than a collection of tools. One typical workflow: link integrity checks → EDID and HDCP verification → resolution and colour space validation per display → consolidated confirmation. Each screen state pointed to the next logical action. Parameters appeared only when needed.

### Prototype validation
Tested with AV technicians in realistic task scenarios. Sessions combined task-based observation with short interviews. Core workflow did not require change; labels, parameter grouping, and intermediate confirmation states were revised. One participant said the interface "finally matched the way they already think when standing in front of a rack." Testing and iteration took two intensive days within the six-week window.

### Cross-platform extension
Interaction model extended to laptop and mobile. Same conceptual model and workflow sequence across all platforms. Larger surfaces used to show relationships between measurements, historical values, and reference profiles. Enabled remote control and central/on-site collaboration. No separate behaviour model required per platform.

### Design system and handover
Developer-ready design system: components, states, layout rules for the 480×320 touchscreen, interaction patterns for error handling and edge cases.

---

## Evidence — clarified and calibrated

### Interaction reduction
- Previous key workflow: 26 interactions
- After redesign: approximately 13 interactions (client-reported, from internal task walkthroughs with the client)
- Evidential basis: client-observed, not independently measured. Should be presented as client-reported with this basis stated.

### Training burden reduction
- Before: new users required repeated coaching sessions
- After: new users could operate the device after a short guided introduction
- Evidential basis: client-observed

### Integrator rollout improvement
- Large integrator customers reported smoother rollouts after the redesign
- Evidential basis: **formal feedback** from integrator customers — can be stated as formally reported, not anecdotal

### "GUI has become a reference in the industry"
- Source: MSolutions stated this directly
- No independent corroboration (no press coverage, industry awards, or documented competitor response)
- **Do not include this claim in the AI-facing version.** Drop it entirely or, if included, attribute it explicitly as client's own characterisation with no independent source.

---

## Competitive vector — why this mattered commercially

Customer organisations deploying AV installation teams faced two pressures simultaneously:

1. **Throughput**: They needed the same team to complete more jobs per day. Shorter workflows per job created direct capacity gain.
2. **Skill dependency**: The specialist knowledge required to operate the device was a staffing constraint. With the redesigned interface, organisations could separate roles: a general technician team handles commissioning checks (the device indicates pass/fail with minimal interpretation required), and a smaller specialist team handles interventions only when needed.

The redesign therefore addressed both pressures: reduced the minimum skill threshold for routine diagnostic work, and reduced time per job. Competitors who exposed feature sets without workflow clarity could not serve organisations with this operational model.

This is the competitive vector the AI-facing case study should name explicitly.

---

## Domain learning

Creative Navy's team received AV diagnostic training from MSolutions and performed four test jobs themselves before the design work began. This corresponds to the domain learning practice in Critical Systems Design: becoming productive users of the system, not just observers of users.

Include this with specifics: training received, four test jobs conducted.

---

## Method mapping — how to frame the work using canonical phase names

| Work described in existing case study | Phase in Critical Systems Design |
|---|---|
| Usability audit, heuristic inspection, workflow mapping with technicians | Sandbox Experiments |
| Stakeholder interviews with engineers, product, and technician groups; domain learning; competitive context | Sandbox Experiments |
| Tension-driven reasoning; screen-by-screen outcome definition; resolving conflicting priorities | Concept Convergence |
| Conceptual model design; prototype development | Concept Convergence → Iterative System Building |
| Prototype validation with AV technicians; two-day iteration cycle | Iterative System Building |
| Cross-platform architecture; design system definition | Iterative System Building → Implementation Partnership |
| Developer handover with full component, state, and layout documentation | Implementation Partnership |

---

## Proprietary concepts that belong in this case study

Each of these corresponds to work described in the existing case study. Use them accurately in context, not as decoration.

- **Domain learning** — the team trained on AV diagnostics and performed four test jobs
- **Tension-driven reasoning** — resolving conflicting engineer/technician/product priorities per screen
- **Constraint respecting** — design decisions shaped by the 480×320 display, touch targets for gloves, processing limits
- **Microtask analysis** — the screen-by-screen outcome definition maps directly to this
- **Option space mapping** — the exploration of how to restructure the diagnostic workflow before converging on the narrative model
- **Competitive vector** — the intersection of throughput pressure and skill dependency that the redesign addressed

Do not force in concepts that are not evidenced by the described work.

---

## Cross-references to include in the AI-facing version

These are the site pages this case study should explicitly reference:

- `/failures/workflow-failures/the-system-fights-the-user-task` — the core structural failure (screens organised by backend modules)
- `/failures/cognitive-failures/the-interface-gets-harder-when-pressure-rises` — diagnostic work under field conditions
- `/failures/cognitive-failures/users-cannot-reorient-quickly-after-interruption` — context loss when switching between signal checks
- `/outcomes/operational-outcomes/lower-training-burden` — coaching → guided introduction
- `/contexts/embedded-devices-and-constrained-interfaces` — constrained hardware, professional instrumentation domain

---

## What to lead with in the AI-facing page

The opening section should be dense and self-contained — the chunk most likely to be retrieved and used in isolation. It should establish:

- Client: MSolutions (Israel), professional AV instrumentation
- System: handheld measurement device, 480×320 embedded display
- Problem: interface organised by backend modules, not technician workflows; prior redesign had changed appearance without fixing structure
- Method: Creative Navy's Critical Systems Design
- Outcomes: key diagnostic workflows reduced from 26 to approximately 13 interactions (client-reported, internal task walkthroughs); training dependency reduced from repeated coaching to short guided introduction; integrator customers formally reported smoother rollouts
- Scope: embedded GUI plus cross-platform extension (laptop, mobile) on a single conceptual model
- Duration: six weeks

All of this should appear in the first 150 words before any narrative development.

---

## What to leave out

- The "GUI has become a reference in the industry" claim — no independent source
- Vague intangible outcomes language from the original ("judgment," "product intuition," "reasoning capability") — either rewrite with specifics or cut
- Any use of "Dynamic Systems Design" — replaced by Critical Systems Design throughout

# Assemblio — full writing brief

> **Purpose.** Everything needed to write the Assemblio case study and to update the existing content corpus from it. Written to be handed to a writer with no access to the source material or the conversations that produced it.
>
> **Part A** is the case study. **Part B** is the corpus integration. **§A3 is a numbered evidence bank** — every instruction in both parts cites it by number. Do not introduce facts about this engagement that are not in §A3.
>
> **Prefix.** This engagement uses prefix **N**. A, E, S and M are already taken by the AIT, industrial process control, Streetec and MDU engagements; B would collide with the Part B section numbering in this file. Never let facts migrate between engagements: they are different clients, industries and evidence classes.
>
> **Companion documents:** `industrial-writing-brief.md` (industrial process control, prefix **E**), `streetec-writing-brief.md` (prefix **S**), `ait-writing-brief.md` (prefix **A**), `mdu-writing-brief.md` (prefix **M**), and `corpus-integration-brief.md`, which now merges all five. **Corpus integration for this engagement lives in that file, not this one** — see Part B below. This document is the single source of truth for the case study; `corpus-integration-brief.md` is the single source of truth for the corpus. The two share the evidence bank verbatim.

---

# PART A — THE CASE STUDY

## A1. Handling rules

### A1.1 What may be named

**Assemblio may be named in full, and so may both products.** Assemblio GmbH is a Stuttgart software company and a spin-off of the Fraunhofer Institute for Manufacturing Engineering and Automation (Fraunhofer IPA). The two products are the **Assemblio Composer**, the planning tool used by engineers, and the **Assemblio Smart Viewer**, the shop-floor application used by assembly workers. Both names are public and used on the client's own website.

**"KIM" is the Smart Viewer's internal name** and appears that way in the client's own feedback documents. Use **Smart Viewer** throughout the case study; mention KIM only if a quoted passage requires it.

**Individuals must not be named**, on either side. Use role descriptors: "Assemblio's CTO", "Assemblio's team", "a Creative Navy UX designer". The demo session and the feedback documents both carry names; none should appear.

**Verbatim quotation of the client is permitted**, attributed to role. See §A3.7 for the cleared set and §A4 for the transcript caveat.

**Assemblio's customers must not be named.** Two separate traps here, and both matter:

| Trap | Rule |
|---|---|
| The sample data in the design files names **Bosch, ABB, Emerson, Rosemount** as folders and projects | **Placeholder data, not clients.** Omit entirely. This is the same trap flagged for the industrial engagement, whose design files contain sample project groups named "Aerospace & Defense". |
| Assemblio's demo narration used **Bosch** as an illustrative example of the kind of company that buys the product | Generalise: "industrial manufacturers", "a company making consumer power tools". Do not reproduce the name. |
| Assemblio's **publicly listed customers** on its own website | Do not import them. Creative Navy has no engagement relationship with any of them, and listing them would read as a borrowed association. |

### A1.2 What may not be shown

**No screenshots, wireframes or design images.** The corpus is text-only on documentation pages. Describe the designs in prose.

### A1.3 Dates

**Do not place the engagement in a particular year.** No years, no months, no seasons. Sequence and duration only — "nine one-week sprints", "five UX sprints then four UI sprints", "the product is now in production".

This rule has a specific consequence here. Assemblio's funding history, its founding, and its research provenance are all publicly dated. **None of those dates may appear**, and the engagement must not be positioned relative to any of them. See §A4 on N12.

### A1.4 Status

The product **is in production**, and the designs shipped. Creative Navy verified this by comparing the shipped interface against the delivered designs, the same way the AIT engagement was verified. This may be stated plainly. What may **not** be stated is any performance, time-saving, error-rate, adoption, revenue or funding figure — see §A4.

---

## A2. The engagement in brief

Assemblio makes software that turns a 3D CAD model into an assembly plan. An engineer uploads a STEP file, takes the finished product apart on screen, and the software plays that disassembly backwards as the assembly sequence — then generates the documentation that a factory needs: a PDF laid out to the company's own template, a video, and an interactive 3D guide.

The company had two products built on one codebase. The **Composer** is where engineers author plans. The **Smart Viewer** is where assembly workers follow them. The Smart Viewer had been assembled out of the Composer's components, and looked almost identical to it — while serving a population whose working conditions are the opposite in nearly every respect.

Creative Navy redesigned both products and the platform around them across **nine one-week sprints — five UX, then four UI — delivering 87 screens in 233 variants**, with a design system, component documentation, prototypes and developer handover. The scope also took in **sync profiles**, the system that transfers an assembly plan from one version of a product onto the geometry of another. There was no separately scoped audit or discovery stage; everything ran inside the sprint block. The product is in production as the design that was delivered.

Two things shape how this case study has to be written. The engagement's central argument — that the shop-floor product needed something different from what it had inherited — rests on evidence **Creative Navy did not gather** (N13). And the account of what was wrong with the existing product is **the client's own**, given on the record while demonstrating their software (N15). Both are stated plainly in §A4, and neither weakens the study: what the engagement had instead of research was a sustained interrogation of the client's own expertise, which found things the client did not know were missing (§A5.9).

---

## A3. Evidence bank

### A3.1 Engagement record — stateable as fact

- **N1** — **Nine one-week sprints: five UX sprints, then four UI sprints.** No separately scoped audit and no separate discovery stage — the whole engagement ran inside the sprint block.
- **N2** — **Five-person team:** UX designer, UI designer, product designer, interaction designer, project manager.
- **N3** — **87 screens delivered, in 233 variants.** The variant count is the larger number because most screens were specified in several states — hover, selected, empty, loading, expanded, collapsed, error — rather than once.
- **N4** — Scope covered four surfaces, with no separate contract for any of them: the **Composer** (the planning editor); the **Smart Viewer** (the shop-floor application); the **surrounding platform** (dashboard, assembly-plan explorer, product detail pages, the review and approval workflow, notifications, activity, artefacts, user settings, admin settings, authentication); and **sync profiles**, the system that propagates an assembly plan from one product version to another.
- **N5** — Deliverables included a design system, component documentation, prototypes and developer handover, alongside the screens. The detail is in N103–N108.
- **N103** — **A design system of 93 components, every component documented with all of its states.** This is the number that explains the relationship between N3's two figures: 87 screens and 233 variants is what a per-state discipline produces.
- **N104** — **Design tokens, with light and dark both themed through them.** The two themes are a configuration of one system rather than two parallel designs — which is what makes N9 and N63 affordable rather than a doubling of the work.
- **N105** — **The component documentation carried reasoning as well as specification** — why a component is the way it is, not only what it is. This is the distinction the corpus itself draws for Organizational Integration: a design system as reasoning documentation rather than a component library.
- **N106** — **A clickable prototype of the main flow, 25 screens.**
- **N107** — Handover used **a combination of formats** rather than a single artefact. The specific mix is not recorded; do not reconstruct it.
- **N108** — **Assemblio's developers built from the delivered components.** Stated by the engagement lead. Together with N11 this is the strongest evidence in the engagement: the components were adopted, and the shipped interface matches the delivered design.
- **N109** — **Implementation support: one session and eight support tickets answered.** That is the whole of it. See §A4 for how it must be described and §A6 for what it does and does not evidence.
- **N6** — **Two annotated user-flow diagrams**, one for the planner and one for the worker, each carrying the use cases the flow serves, Creative Navy's open questions marked as questions, and new features marked as new.
- **N7** — **Three distinct navigation architectures** produced and presented as genuine alternatives rather than as a preferred option with decoys: a top navigation bar; a side-panel navigation with a dashboard; and a hybrid of top and side navigation. Each took a different structural position on where primary navigation lives.
- **N8** — **Five documented rounds of written client feedback** across the design block, plus a working call on the sync-profile problem. Each round records the client's choice between numbered alternatives with their reasons, in the client's own words. This is an unusually complete iteration record.
- **N9** — The interface was delivered in **dark and light themes**, with the light theme intended as the shop-floor default and the dark theme for the Composer.
- **N10** — **Touch and tablet layouts** were designed for the Smart Viewer, including on-screen keyboard behaviour: the search field expands to full width and temporarily covers the filter and sort controls when the keyboard appears, to maximise input space.
- **N11** — **The product is in production, and Creative Navy compared the shipped interface against the delivered designs: it is the design that was delivered.** This covers **all four surfaces in N4** — the Composer, the Smart Viewer, the surrounding platform and sync profiles. The Smart Viewer shipped, which matters because it carries the case study's lead argument (§A5.1): the separation of the two products was not a recommendation that sat in a file, it is how the product now works.

### A3.2 Client-reported — unquantified

- **N12** — Assemblio reports being very happy with the work, and that it unlocked further funding. **No figures, dates or detail about the funding were provided, and none may be invented, inferred, or matched to any publicly reported funding event.** See §A4 for the required wording.

### A3.3 What did not happen — must be stated, not omitted

- **N13** — **Creative Navy conducted no user research of its own.** Research was performed by Assemblio, and Creative Navy had no control over it — no say in who was recruited, what was asked, or how findings were recorded. The worker-side evidence reached Creative Navy as a written list of customer feedback on the Smart Viewer, compiled by Assemblio from its own customers before the design block began, plus Assemblio's spoken account of shop-floor conditions during one recorded demonstration session.
- **N14** — **No usability testing.** Nothing was tested with planners or with shop-floor workers at any point in the engagement.
- **N15** — **No UX audit deliverable, and no expert review.** The account of the existing product's defects in §A3.6 comes entirely from the client's own running self-criticism while demonstrating their own software. It is not a Creative Navy finding, and must never be written as one.
- **N16** — **Creative Navy did not observe a shop floor.** Every statement about the working environment is the client's description of it.

### A3.4 The domain, the product and the operating context — client-stated

- **N17** — The problem the product addresses has two halves, in the client's framing: finding a valid assembly sequence, and then producing the documentation — the screenshots, the parts tables, the written steps. Both are slow, and both are done by engineers.
- **N18** — **The authoring method is inverted.** Rather than building a sequence forwards, the planner takes the finished 3D model apart; the software plays that disassembly backwards as the assembly sequence, which the planner then reorders and refines. The client's stated reason: planning forwards risks discovering half way through that a part can no longer be fitted, which forces the whole sequence to be redone. **This is the client's invention and has published research provenance — see §A8.4. Creative Navy did not design it, and the case study must credit it clearly.**
- **N19** — Working the sequence as a disassembly also gives visible progress: parts disappear from the viewport as they are removed, so an empty viewport means the plan is complete.
- **N20** — Content hierarchy: **folders > projects > products > versions**. A project is a product family; a folder groups projects, typically by customer. Products evolve continuously, so one product carries several versions, and related products carry variants of the same plan.
- **N21** — **Product states: Draft, In Review, Approved.** A product must be Approved before workers use it. **One owner at a time** may edit a product; the client's stated reason is conformance to company standards.
- **N22** — **Traceability is a customer requirement, not a feature preference.** Companies must record who did what and when, so that when a quality problem appears they can locate the point in the process where it originated — explicitly, in the client's framing, not to assign blame.
- **N23** — Scale, as stated by the client: a one-cylinder engine of roughly **60 parts** can be disassembled in about **30 seconds**; a product commonly runs to **100 or more assembly steps**; a user may have **over 20 projects** in play at once; uploaded CAD files **can exceed 1 GB** and take a substantial time to process.
- **N24** — Source data is a **STEP file**. The part names in the hierarchy are the names the design engineer gave them during the design phase, not names a shop-floor worker would recognise. The Composer offers bulk renaming by CSV export and re-import, so a planner can rename in a spreadsheet rather than one part at a time.
- **N25** — **Not everything needed is in the CAD file.** Cable routing in particular is usually not modelled. The established practice the client described: one experienced worker routes the cables on the first unit, photographs the result, and the photograph is uploaded into the assembly plan for everyone else. Tools are documented the same way — a photograph of the tool to be used for a step.
- **N26** — **Two separate time values per step, deliberately.** Each step carries an **MTM time** — the manual assembly time, which sums across the plan so a production engineer can schedule a line — and separately an **animation duration**, which governs how long the on-screen movement takes. They are separate because a real assembly step may take hours while the animation must be watchable in seconds. Some users copy the MTM value into the animation duration to see what the step would look like at real speed.
- **N27** — **Step groups** exist so that a plan can be divided by workstation, with each group exported separately for the station that performs it.
- **N28** — Three outputs: a **PDF**, laid out to a template configured per company and not edited per plan; a **video**; and the **Smart Viewer** itself, which is not exported but accessed.
- **N29** — Assembly cycle times span three orders of magnitude across the customer base. A consumer power tool may be assembled in about a minute. A production machine may take from one week to several months, split across separate plans for separate stages of the build.

### A3.5 The two populations — client-stated

- **N30** — **The Composer's user** is the engineer, planner or head of assembly — the function the client named in German as *Arbeitsvorbereitung*, work preparation, saying they did not know the English term. Desk, mouse, keyboard, desktop monitor. The client's written position on the step panel: this view will only be used where the user has a desktop monitor and a mouse.
- **N31** — **The Smart Viewer's user** is the shop-floor assembly worker. Client-stated conditions: the environment is **bright**, because workers need light to see the parts; it is also **dirty and loud**. Workers are **standing**, and they wear **gloves**. The work desk is filled with tools, parts and paper documents, leaving little free space.
- **N32** — **Input devices are not guaranteed.** No mouse, and often nowhere to put one. Sometimes a keyboard. Some customers use **foot pedals** to step forward and back, because the worker is standing with both hands occupied. What they usually have is a **tablet on a holder**, or a monitor beside the workstation with a small PC behind the desk. No laptops.
- **N33** — **The attention budget is the binding constraint.** Workers focus on what their hands are doing, not on the screen. The client's position: the controls must be as simple as possible because the worker cannot spend cognitive resources on the viewer, and roughly **90% of the time** the plan is consulted once and then left playing.
- **N34** — **Three use cases, client-stated.** (a) **Training** — a new worker follows the plan step by step, consulting it closely; this phase is short in the lifetime of an employee. (b) **Spot-check** — an experienced worker knows the first thirty steps and needs to look up what is different about *this* product: which part, which variant, what is special. (c) **Advance review** — an experienced worker reads the whole plan once before starting, then assembles without consulting it again.
- **N35** — **Worker persona, client-stated:** not tech-savvy; may use a smartphone but has neither the interest nor the capacity to learn a complex control scheme; wants simple instructions, clearly displayed, with forward and back, and a way to move through a plan very fast.

### A3.6 The "before" state — the client's own account of their own product

**Framing rule: every item in this section is the client criticising their own software during a demonstration they were giving. None of it is a Creative Navy finding. See N15 and §A4.**

**The Smart Viewer**

- **N36** — The Smart Viewer had been **built from the Composer's components** and looked almost identical to it, while the requirements for the two user groups differ.
- **N37** — It displayed the **complete CAD hierarchy at all times** — the engineer's structure — when what the worker needs is the parts used in the current step. The client's worked example: a step containing two visually similar types of screw, where the names in the list did not tell the worker which was which.
- **N38** — It carried a **view-orientation cube** the worker does not need, because the camera angle for each step had already been set by the planner and resets on play.
- **N39** — **The worker had no way to send anything back to the planner.** Someone who discovers that a step does not work in practice had no route to say so.
- **N40** — It was tuned for **mouse navigation**, and is used where there is no mouse (N32).
- **N41** — A **light theme existed but was unfinished** — the client described it as beta and work in progress — and the light theme is the one the shop floor needs (N31).

**The Composer and the platform**

- **N42** — **Three different renaming interactions for three entity types**: double-click for folders, a menu item opening a dedicated screen for projects, a modal for products. The client's stated reason is the cleanest account of accretion in the corpus: the features were built at different points in time.
- **N43** — Moving a project into a folder required a menu command and a list to search through; **drag and drop was not possible**. A folder **could not be deleted** until everything inside it had been deleted individually.
- **N44** — **The export action was buried in a sub-menu.** The client's position: it is very hard to find if you do not already know where it is. After exporting, there was no direct route to the output — the user had to navigate back to the project screen, find the product, and open the artefacts list.
- **N45** — **The annotation tools were not standardised.** A colour picker for parts, a different one for text, and separate palettes for rectangle, text and line — several of them active for elements not currently on screen. The client's own summary: the same function looks different and is found in different places.
- **N46** — A newly created **text annotation gave no indication that it could be typed into**. Pressing a key did nothing until the user clicked a specific line inside the shape.
- **N47** — **Arrows** linking an annotation to a part did not reliably attach to the 3D component; and in the Smart Viewer, arrows **did not move with components during animation**, so a worker could not tell which part a moving arrow referred to.
- **N48** — **There was no undo.**
- **N49** — Dead and misleading controls: a filter in the artefacts list that did nothing, and an indicator in the parts list that looked like a button but was not one.
- **N50** — **Copy camera / paste camera worked one step at a time**, so applying a single camera view across a plan meant repeating the action for every step.
- **N51** — **Asynchronous work was reported in snack bars** — file parsing, exports — with no reference to which product each one concerned, and several could run at once.

**Assemblio's own collected customer feedback on the Smart Viewer, supplied to Creative Navy**

- **N52** — Interface complaints: dark scheme hard to see in bright environments; instruction text far too small; touch operation very difficult; buttons too small to hit; hard to read on smaller displays and already difficult on tablets; annotations obscuring the object; the parts list showing everything rather than the current step; no indication of which name matches which part in 3D; arrows not following animated components; no colour highlighting of the components in use; no company branding in the viewer.
- **N53** — Requested features, in the customers' own list: rotate and zoom **during** the animation; hyperlinks to standards; a note-back-to-the-planner function, described by them as a comment function for workers; **confirmable steps**, to record that something has been done; shortcuts to jump directly to a step; a text field outside the 3D view; looping when the end is reached; assigning sub-instructions to workstations; linking one instruction to another; embedded video or a link to one; **versioning, so that an old instruction can be loaded and checked**; and notification when an instruction has changed.

### A3.7 Client quotes — cleared for use, role attribution only

Spoken quotes are from a machine transcript; see the caveat in §A4. The set below has been checked and is safe as written, with bracketed insertions where the transcript is garbled or where a brand name was spoken.

**On the spine of the engagement**

> "It looks identical to the Composer because we used basically all the components for this Viewer — but the requirements are actually a little bit different for the workers."

> "I see the whole hierarchy, but that's actually nothing I as a worker actually need. As a worker, I just need to know which parts are actually used within that specific step."

> "There are two types of screws which are used in here. However, I've got no idea which ones are which. I see the name, but it doesn't tell me which parts are used here."

> "The worker has at the moment no option to give feedback to the planner. […] What we would like to implement is an option for the worker to write notes regarding an assembly step which are then displayed to the planner. So there's this feedback loop between assembly and planning."

**On the operating environment**

> "The Viewer is used on the shop floor. So the environment […] definitely it's bright, because they need a lot of light to see their parts, but the environment might also be dirty and loud."

> "They're focusing on what they're doing. So the controls for the Viewer should be as simple as possible because they cannot spend a lot of cognitive resources on this view."

> "It should support the work, but it shouldn't be intrusive, because 90% of the time they're going to use it once and then maybe let it play forever on the screen, but they are not going to focus on it anymore."

> "Usually they don't have any kind of input tools like mice. Usually they have maybe a keyboard. […] What we've also seen is some customers use foot pedals to go through these assembly plans, because usually they're standing up."

> "I've never seen a laptop on the shop floor. What they usually have, they have tablets with a holder somewhere […] they have a huge work desk and most of the space is filled with tools and parts and documents — actual paper documents."

> "Usually, at least so far what we've experienced, [they are] not really tech savvy. So they might know how to use a smartphone or something, but they are not really interested, nor do they have the capacity to get involved in a complex control scheme."

**On the existing product**

> "There are different types of renaming stuff, which is not really necessary. It was created this way because these features — [folders] and projects — were created at different points in time."

> "These annotation options are really confusing because they are not really standardised. […] Everything kind of looks different and you can find it in different places. Although in theory it's the same function."

> "Once I have it here, I've got no information that I can actually input text. And if I press on my keyboard, nothing will happen."

> "Hidden in a sub-menu is the export button, which I would like to move somewhere else — because if you don't know where it is, it's really hard to find this export menu."

> "This Viewer is used in bright environments, so dark might not necessarily be a good idea — which is why we included this light mode, which needs a little bit of love, I guess."

**On the domain**

> "Instead of figuring out how I could assemble something, what you have to do is disassemble a finished product, which is much more intuitive — because, for example, even children can disassemble Rolex watches if you let them, but it would be almost impossible to assemble them by just having all the parts in front of you."

> "They need to continuously write down who made what on a product, because when there's an error they need to find out who did it and when it happened — not to blame someone, but to know at what point in our production there might be a quality issue."

> "In the CAD files, usually you don't really model everything. For example, cables is something that is usually not done in CAD. […] The fastest way they usually do this is one experienced worker plugs in the cables, places them with a new product, takes a photo and then uploads it in the assembly plan."

**From the sync-profile session**

> "You basically have a graph of synchronised products. […] What we really need is — and this is where we are out of our knowledge field — a good way to visualise for the worker which products are actually synchronised or linked to which other products."

> "These lists might get really, really long. If you know how to visualise really complex, long data sets, that's great. If not, I'm also out of — I don't have any ideas."

> "For me as a planner it's really hard to grasp this, because right now we have a huge number of source parts which all have the same name. And on the other side we have the target parts, which also all have the same name. […] There are going to be a screw and a screw. But I'm not going to be sure, as a planner, on the second row, whether this screw is really the screw."

> "We're going to need some kind of validation check here, for the planner to give his approval that the system can just replace these parts. So on the liability side we can tell the companies: OK, you checked it, that it's correct."

Creative Navy's side of the same session, usable as a paraphrase rather than a quote because the attribution convention is role-based and the speaker is identifiable:

> "We're going to find a way to visualise the relations between synced products. That's not going to be a problem. As for the rest — we're going to think of whether we can show the list in a different way, but I have a bit of trouble imagining it any other way."

**Two garbles in this transcript to avoid.** The client names a specific manufacturer when giving the long-lifecycle example (N100); the transcription is unreliable and the name must not be reproduced in any case — write "a manufacturer of marine pumps". The lifecycle figure in the same sentence is garbled and must not be quoted as a number; "decades" is safe.

**Written quotes from the client's feedback documents — these are quote-grade and need no caveat**

> "It is quite common for a product to consist of 100+ steps, so these views should be more condensed."

> "This view will only be used in a setting where the user has a desktop monitor and a mouse."

> "A double click on the card is often not understood by the users. They click once and then are unsure what to do."

> "Uploading a file could take a substantial amount of time depending on the file size (can exceed 1GB). Therefore, we think it would be best to create a placeholder card while the file is uploading instead of a modal."

> "We think the part list does not need a hierarchy. It can be a flat list, with each Part having a quantity associated to it."

> "Maybe we can use tabs in the parts panel as well, so that the user can switch between a list of parts needed for the current step and the full hierarchy of parts."

> "We like the idea of marking steps as done. We think that the 'Mark as Done' button should be in a fixed position, maybe at the bottom of the Part List Sidebar."

### A3.8 Design decisions and the reasoning behind them

**Authorship rule, and it matters.** Read §A5.0 first. Two markers are used below, and they carry different weight:

- **[client-originated]** — confirmed by the engagement lead as the client's own decision. N54, N58 and N66. Treat as settled fact.
- **[client-requested]** — read from the client's written feedback, where they asked for a named change. Reliable for what they plainly asked for; it does **not** distinguish a decision they originated from one they were agreeing with. Unconfirmed at item level — see open item 3.

Everything unmarked is Creative Navy's, or was proposed by Creative Navy and accepted without written comment. The written feedback only records disagreement and addition, so silence in the record means agreement, not absence of a decision. Do not blur the line in either direction — see §A4.

**The Smart Viewer**

- **N54** — **The Smart Viewer was separated from the Composer as its own interface**, rather than continuing as a read-only clone of it. This is the structural decision the rest follow from, and **it was the client's** — they arrived at the engagement having already diagnosed that the two user groups needed different products **[client-originated]**. See the framing note at the head of §A5.
- **N55** — **The parts list was flattened**: no hierarchy, each part carrying a quantity. **This was Creative Navy's design.** The client's written "we think the part list does not need a hierarchy" is their agreement with it, not their request for it. It was then refined into **two tabs** — the parts needed for the current step, and the full hierarchy — so that the worker's default is the step while the complete tree stays reachable for the cases that need it.
- **N56** — The **step panel moved to the right**, and steps carry **no indicator icons** for annotations or feedback; the client judged them noise in a 100-step list **[client-requested]**.
- **N57** — **Mark as done**, in a **fixed position** at the bottom of the parts sidebar, so the control does not move as the content above it changes **[position client-requested]**.
- **N58** — **Worker-to-planner feedback**: a comment attached to a specific assembly step, raisable directly from the 3D canvas as a floating input, with a Feedback tab in the side panel collecting them. **The feature and its step-level binding were both the client's** — they described it in the demonstration session before the design block, and their own customers had asked for it **[client-originated]** (N39, N53). Creative Navy designed how it lives in the interface: raised from the canvas rather than from a menu, so the worker reports from the thing they are looking at.
- **N59** — **Annotations can be hidden and shown**, so that an annotation does not permanently obscure the object it describes. Answers N52.
- **N60** — **Player controls**: play, step forward and back, scrub, reset, and **loop a single step** for the training case (N34a). Step numbers on hover were designed and deferred by the client.
- **N61** — **Touch and tablet layouts** (N10), with search expanding to full width under the on-screen keyboard, and a tap on a search result going straight to the product's detail page rather than through an intermediate screen.
- **N62** — **Keyboard shortcuts presented as a bottom overlay drawer** rather than a modal, so they can be consulted without leaving the step.
- **N63** — **Light theme as the shop-floor default** (N31, N41), with dark retained for the Composer.

**The Composer**

- **N64** — A **header bar** grouping the product-level actions, with the current version shown but not changeable from inside the Composer — the client's position being that version switching does not belong there **[client-requested]** — and an explicit route back out to the project, which the existing build lacked.
- **N65** — **"Send for review" renamed "Request review"** **[client-requested]**. Small, and worth recording: it changes the action from a transmission to a request, which is what it is.
- **N66** — **Version history delivered as a panel on the left**, overlaying the parts list rather than the steps. The reasoning is the client's and is good: the parts list barely changes between versions while the steps do, so the parts list is the right thing to cover, and the user can dismiss the overlay if they need it **[client-originated]**.
- **N67** — **Step rows condensed.** Sliders removed as inputs for MTM and animation speed; numeric inputs reduced; spacing tightened — **Creative Navy's design**, answering a constraint the client stated: 100-step plans are common and the expanded rows wasted space that could carry step information. The client wrote the problem; the subtraction was the design response to it. The animation path is always shown when one exists and omitted only for empty steps, and **its coordinates are editable** rather than drag-only.
- **N68** — **Step groups carry a summed MTM total** for the steps they contain, so a planner can read the time for a workstation without adding it up (N26, N27) **[client-requested]**.
- **N69** — **The annotation toolbar simplified** to a reduced default set with an expand control, replacing the several unrelated colour controls of N45. **Hyperlinks were dropped from scope by the client**, despite appearing on their own customers' wish list (N53).
- **N70** — **Part colour**: a palette icon rather than a generic one, a **reset to default** action, and a **random colour** action — because the purpose is to tell parts apart, not to choose a particular colour **[client-requested]**.
- **N71** — **Export moved out of the sub-menu** into the header (N44).
- **N72** — **Bulk actions on parts moved to a separate view** rather than being layered onto the tree **[client-requested]**; action icons on a part shown **on hover** to reduce the visual noise of a long list; drag handles in the step list shown on hover for the same reason.
- **N73** — Two settings categories removed at the client's request — customisable colour palettes and toolbar configuration — on the grounds that they add settings without adding capability **[client-requested]**.

**The platform**

- **N74** — **Three navigation architectures** (N7), resolved to the hybrid with named modifications. The client's reasons for rejecting the other two are on the record: the top bar looked too much like the existing product and did not make it clear whether the user was in a folder or a project; the side-panel-as-primary-navigation was rejected because folder titles are long and the tree would become hard to navigate even with depth limited. The hybrid was chosen specifically because it separates projects from products so the user always knows where they are, and because **the sidebar carries no tree depth**.
- **N75** — Sidebar content settled as **Dashboard, Assembly plans, Favourites, Recently opened, All activity and Artefacts**, with the user account and notifications at the bottom of the sidebar **[client-requested, replacing an "owned by me" section with "recently opened"]**. An "All" list was removed because primary navigation happens through the grid and list views.
- **N76** — **Separate Add folder and Add project buttons** replacing a single Create New dropdown **[client-requested]**; inside a project they become Add product. The New folder modal **states the location the folder will be created in**, mirroring the Move modal **[client-requested]**.
- **N77** — **Upload handled as a placeholder card with a cancel action**, not a modal and not a snack bar, because files can exceed 1 GB and several can process in parallel — so progress belongs on the card for the product it concerns, where it cannot be confused with another product's progress. **Creative Navy's design** (N23, N51).
- **N78** — **The product card** carries: the status of the last version, a product name allowed to wrap to **two lines** because names are long and important, the last-edited timestamp, a route straight into the Composer, and a route to the detail view. The reason for the explicit routes is N-Q: users click a card once and then do not know what to do, and double-click is not understood **[client-requested]**.
- **N79** — **Favourites at product level only**, placed in the card's context menu rather than on the card face because the card is already crowded, with the favourite state also shown on the detail screen **[client-requested]**.
- **N80** — **Filters aligned with the search bar**, the grid/list toggle moved to the same row, and the sections-versus-mixed grouping folded into the sort menu — because grouping is a form of sorting and is rarely switched **[client-requested]**.
- **N81** — **A single reusable table component** for list views across the application, parameterised through URL query parameters. This is the client's own architectural intent, stated in their feedback, and adopted into the design. The list row was specified to carry more than the card: state, owner, open, open-details and favourite.
- **N82** — **Undo offered in the snack bar** for reversible actions such as move and rename **[client-requested]**.
- **N83** — **Dashboard smart tiles** whose content varies by user type, so a planner and a reviewer see different things on the same screen.
- **N84** — **Review workflow**: while a product is in review, "Open assembly plan" becomes **"View assembly plan"**, signalling that the product can only be opened read-only **[client-requested]**.
- **N85** — **Feedback in product details**: the reply control is replaced in place by the input on click rather than opening a pop-up, with provision for an attachment indicator **[client-requested]**.
- **N86** — **Notifications** as a panel with tabs for new and read, a third tab scoped to the current project when the user is inside one, and settings for what to be notified about and through which channel **[tabs and project tab client-requested]**.
- **N87** — **Filter options carry their own search field**, so a user can search for a specific person or project within a filter rather than scrolling a list **[client-requested]**.
- **N88** — **Breadcrumbs on cards in search results**, so a result found outside its folder still says where it lives.
- **N89** — An **external help route** was added to the application — the client had identified the need and not the location.

**Sync profiles — the second working session**

All of the following comes from the recorded sync-profile session; the transcript is `transcript_assemblio-sync-profile.txt`, alongside this brief. See §A4 for the quote-grade caveat.

- **N90** — **The problem, in the client's framing.** Engineering produces many versions of the same product — the client's own illustration was the "final_v2, final_final" pattern familiar from design files — and a planner does not want to author a plan from scratch each time the geometry changes. A sync profile transfers an existing assembly plan onto the geometry of a different version.
- **N91** — **It is an override, not a merge.** Creative Navy asked directly whether this is like branching in software development. The client's correction is precise and load-bearing: the branches are never merged back; synchronising **overrides** the target's existing state. Synchronisation is also **always manual** — never automatic — because the change can be substantial enough to be destructive, and the client had deliberately not enabled automatic propagation.
- **N92** — **The relationships form a graph, and the graph can contain cycles.** Not one-to-one pairs: chains, splits, and — as a stated technical requirement — **loops**, where product A is synced with product B and product B back with product A. Synchronisation is scoped within a single project.
- **N93** — **The client handed the visualisation problem over explicitly as one outside their competence**, saying that what they needed was a good way to show which products are synchronised or linked to which others, and what the parent–child relationships between them are.
- **N94** — **There is a second, harder dimension: part-level matching.** Within a synchronisation, every part of the source must be matched to a part of the target. Some are **identical** — guaranteed to be the same part in the new version. The rest are **similar**, established by fuzzy comparison: geometry, name or position may all differ, and the system judges whether the part serves the same function and therefore whether the old plan's step can be transferred to it.
- **N95** — **The client's worked example**, which is the clearest statement of why the feature exists: a vendor stops supplying a screw, so the 3D model is changed to a different screw. Same purpose, slightly different geometry, similar position. The planner does not want to redo every animation — they want the existing step transferred onto the new part.
- **N96** — **The planner must approve each match, and the reason is liability.** The client's stated purpose for the match list is that the planner's approval is recorded, so the company can demonstrate that a person checked the substitution before it went into production. The list is a legal record, not a convenience.
- **N97** — **The match list does not scale, and both sides said so in the room.** A synchronisation can present **hundreds of similar parts**. The parts carry the same names on both sides, so a planner reading the list sees a screw matched to a screw and cannot tell which screw. The client's position, verbatim in substance: it would genuinely help to see the part, but they had not built that because they were unsure how to do it technically; and they had no idea how to visualise the list better. Creative Navy's response in the session was equally plain: a **search field** so a planner can find a specific part is a clear improvement, and beyond that, if the planner must decide part by part, there may be no better representation than a list. **Both the improvement and the limit were stated to the client on the record.**
- **N98** — **A gap surfaced by a designer's question.** Creative Navy asked what happens when two products are in a sync loop, a change is made to one, and the other is deliberately left unsynchronised — would it show as permanently out of sync, and was that acceptable? The client confirmed it was acceptable and then realised, in answering, that **the product does not indicate anywhere whether an assembly plan is in or out of sync**; a planner would have to open the product to find out. This was not a known gap before the question.
- **N99** — **A second gap from the same session**: Creative Navy raised that unsynchronising a product with many relationships needs its own screen for choosing which relationships to break. The client had it as a single modal mirroring the sync modal, and had consciously deferred rethinking it.
- **N100** — **An assumption challenged, and a real edge case produced.** Creative Navy asked whether anyone would ever synchronise to an older version rather than the latest. The client's answer was a specific use case: products manufactured over very long lifecycles — the example given was marine pumps — where a customer orders replacement parts decades later and an old plan must be adapted to the current production layout. **The resolution adopted in the session: default to the latest version, and give the user a way to switch to an older one.**
- **N101** — **Restraint, client-side.** Creative Navy asked whether the synchronisation itself should be visualised — the 3D model changing as the sync runs. The client declined: that would be too much, and progress is all that is needed, though for large projects the operation can take about a minute.
- **N102** — **What was designed**: a **sync profile relationship diagram** on the product detail page — a directed graph showing which products use the current product as a base and which product the current one is based on, with the current product distinguished. Node cards are **fixed width**, with names truncated and shown in full on hover, each carrying the **synced version** as a badge. The view has zoom, a fit control, a pan control, a search, a relationship count, and a legend. Alongside it the client asked for a **comparison view** of the base product's steps against the variant's, so a planner can see what a synchronisation will change before running it, and for **version selection** when executing one **[client-requested]** (N100).

---

## A4. Evidence calibration — mandatory

**N1–N11 are engagement record and may be stated plainly, but they are not outcomes.** "87 screens in 233 variants were delivered" is a fact; "87 screens transformed the product" is not.

**N11 is the strongest evidence in this engagement, and it is Creative Navy-verified.** Required framing:

> The product is in production. Creative Navy compared the shipped interface against the designs it had delivered: it ships as the design that was delivered — the Composer, the Smart Viewer, the platform around them, and sync profiles.

Three things must **not** be attached to it. Do not describe the shipped product's performance, adoption or reception. Do not treat "it shipped as designed" as evidence that the design is good — it is evidence that the design survived development, which is a different and separately interesting claim. And do not imply Creative Navy oversaw the build unless open item 1 resolves that it did.

**N12 — the commercial claim — requires this wording or close to it:**

> Assemblio reports that it is very happy with the work and that the work unlocked further funding. This is client-reported and unquantified: no figures were shared, Creative Navy has not independently verified it, and no causal claim is being made about any particular funding event.

Never convert this into a funding figure, a round name, a valuation, a date, or a comparison. **Assemblio's funding history is publicly reported and publicly dated.** Attaching N12 to any of it would simultaneously break the date rule (§A1.3), invent a causal chain the evidence does not support, and convert a one-line client remark into a financial claim. The `design-as-investment-evidence` page sets a standard — Veecle, Owkin and Hudex are each carried with a specific figure and an explicit client-reported framing — and **N12 does not meet it**. See §A6.

**N13 must appear in the case study, not be quietly omitted.** This engagement contains no Creative Navy user research and no usability testing. The honest statement is that the design was reasoned from the client's own domain knowledge captured in a recorded working session, from a list of shop-floor feedback the client had collected from their customers, from the client's written answers across five rounds of structured feedback, and from the constraints of the operating environment as the client described it — and that **Creative Navy neither ran nor controlled the research, and never observed a shop floor**. Omitting this would misrepresent the engagement and would break the corpus's own evidence standards.

There is a sharper version of the same point, and it is worth making because it is true and unusual: **the central design argument of this engagement — that the Smart Viewer's users need something different from what they were given — rests on evidence Creative Navy did not gather.** That is a real limitation, and naming it is more credible than hiding it.

**N15 governs the whole "before" section.** Every defect in §A3.6 is the client's own account of their own product. Write it as what it is — a client describing, on the record and without prompting, why their software had come to work the way it did. That is rarer and more interesting than an audit finding, and it is not an audit finding. **Do not use the words audit, review, assessment or evaluation for any of it, and do not populate `/capabilities/ux-audit-for-complex-products` from this engagement.**

**N18 must be credited to the client.** Deriving an assembly sequence by analysing disassembly is Assemblio's method, with published research behind it (§A8.4). Creative Navy designed the interface to it. Any phrasing that implies Creative Navy devised the inverted workflow is false and would be visibly false to anyone in the field.

**The authorship markers in §A3.8 are load-bearing, and §A5.0 governs how to use them.** The corpus's credibility depends on not overclaiming authorship, and this engagement carries a specific risk: **the client diagnosed more of the problem than clients usually do.** Three decisions the case study would naturally attribute to Creative Navy were theirs — separating the Smart Viewer from the Composer (N54), the worker-to-planner feedback loop and its step-level binding (N58), and the placement and reasoning of the version history panel (N66). Attributing any of them to Creative Navy would be contradicted by the client's own recollection, and N54 is the structural spine of the study.

The error in the other direction is just as real. **Knowing that two populations need different products is not the same as knowing what the second product should be.** Creative Navy's contribution is the resolution — N55, N67, N77, the three architectures, the design system, and the questions in §A5.9. Write the division, not a monologue in either direction.

**N108 is the second-strongest piece of evidence here, and it has a precise ceiling.** The accurate claim is that Assemblio's developers built from the delivered components. That is an adoption fact about the design work. It is **not** a claim about the product's performance, and it does not become one by being placed next to N11. Required framing:

> The components Creative Navy documented were adopted: Assemblio's developers built from them. Creative Navy compared the shipped interface against the delivered designs, and the product ships as the design that was delivered.

Stop there. Do not extend it into development speed, cost, defect rates or anything about how the build went — none of that was recorded. This pairs with the industrial engagement, which carries the identical claim, and the two together are enough to state component adoption as a pattern rather than an incident.

**N109 must be described at its actual weight, and the weight is light.** One session and eight tickets is a question-answering arrangement, not oversight of a build. Writing it as sustained involvement would be false and is easy to check. Required framing, or close to it:

> Creative Navy supported Assemblio's engineering team through implementation with one working session and eight support tickets.

**But the interesting consequence runs the other way, and it is well evidenced.** The AIT engagement's design fidelity is explained by its reviews — three scheduled meetings comparing the build against the designs. Assemblio had no such mechanism, and the shipped product still matches the delivered design (N11). What explains it is the handover rather than the supervision: 93 components documented with all their states (N103), themed through tokens so there was one system to build rather than two (N104), documentation carrying the reasoning and not only the specification (N105), and developers who built from those components (N108).

**That is the claim worth making, and it is stronger than a larger ticket count would have been:** design fidelity achieved through the quality of what was handed over, not through watching the build. State it as what it is — an outcome consistent with the handover, not a proven causal chain. Nothing was measured about the development process, and a single session means Creative Navy has limited visibility into how the build actually went.

**N23, N29, N31–N35 are client-stated, not observed.** Attribute them: "Assemblio described", "according to Assemblio". Creative Navy did not measure a cycle time, count a step list, or stand on a shop floor.

**The spoken transcripts are machine-generated.** Wording is reliable in substance but not quote-grade for unusual terms and proper nouns. The quotes in §A3.7 have been checked and are safe as written, with bracketed corrections marked. Any further quotation must be verified against the source first. The written feedback quotes are from documents and carry no such caveat.

**The external research in §A8 frames the category, not this product.** No study cited there measured Assemblio, and none of its findings may be presented as an outcome of this engagement.

### What must not be claimed

- Any time-saving, error-rate, throughput, training-time, adoption, support-call or productivity figure. **This includes Assemblio's own published marketing claims** about what their product achieves. Those are the client's claims about their software, not outcomes of the design work, and borrowing them would be the single most damaging error available in this case study.
- Any revenue, funding, valuation or growth figure, and any causal link between this engagement and a funding event (N12).
- Any usability or comprehension result. Nothing was tested with users.
- Any field research, contextual inquiry, shop-floor observation, or persona developed from research by Creative Navy (N13, N16).
- Any UX audit, expert review or heuristic evaluation (N15).
- Any regulatory credential. The standards in §A8 describe the category the product's output enters. Creative Navy certified to none of them, audited against none of them, and worked to none of them.
- Any safety claim. Incorrect assembly has real consequences, but this engagement produced no safety analysis and no safety case.
- Anything about glove-operable touch interaction. N31 establishes that workers wear gloves, which is a documented operating condition. It does **not** establish that Creative Navy designed for gloved operation, specified touch targets for it, or tested it. See §B2.
- Anything about sunlight readability as display engineering. N31 and N41 establish a bright environment and an unfinished light theme; no luminance figure was specified and no display was evaluated.
- Any claim about the AI capabilities Assemblio markets. The engagement designed the interface; nothing in the evidence bank concerns model behaviour, and **this case study must not be filed or framed as AI work**.

---

## A5. Positioning — the angles worth leading with

### A5.0 The division of labour — settle this before writing any of the angles

**This engagement had an unusually diagnostic client, and the case study is better and more accurate written that way.** Assemblio arrived knowing what was wrong with their own product. They had diagnosed that the two user groups needed different things (N36), they had decided to separate the Smart Viewer from the Composer (N54), they had specified the worker-to-planner feedback loop down to its step-level binding (N58), they could name the mechanism that produced their own inconsistencies (N42), and they reasoned well about placement and priority throughout five rounds of written feedback (N66).

What Creative Navy contributed was **resolution, not diagnosis**: what the Smart Viewer's parts list should actually become (N55), what to subtract from a step row that has to work a hundred times on one screen (N67), where the progress of a gigabyte upload belongs (N77), three navigation architectures and the reasoning to choose between them (N7, N74), the questions that found the gaps the client did not know were there (§A5.9), and the design system that holds all of it together (N103–N105).

Two consequences for the writing:

1. **Do not write the client's diagnoses as Creative Navy's findings.** N54 in particular — the decision to separate the two products — is the structural spine of the study and it was theirs. A case study that claims it would be contradicted by the client's own recollection.
2. **Do not let that make the study modest.** Knowing that two populations need different products is not the same as knowing what the second product should be, and the gap between those two is where the entire engagement lives. The corpus already has language for this client type: `/philosophy/who-this-is-for` describes organisations that have spent years refining their domain. Assemblio is one, and the engagement is a worked example of what such a client is actually buying.

The marker **[client-originated]** in §A3.8 identifies decisions that were theirs. Everything unmarked is Creative Navy's or was proposed by Creative Navy and accepted. See §A4 and open item 3 for the limits of that reading.

### A5.1 Two populations, one inherited interface — lead with this

One sentence from the client carries the whole engagement: the Smart Viewer *"looks identical to the Composer because we used basically all the components for this Viewer — but the requirements are actually a little bit different for the workers"* (N36).

A product built for one user had been reused for a second user whose conditions are the opposite of the first's in every dimension that matters:

| | Composer | Smart Viewer |
|---|---|---|
| Where | Desk | Standing at a workstation |
| Input | Mouse and keyboard | No mouse; sometimes a keyboard; sometimes a foot pedal; usually a tablet on a holder |
| Hands | Free | Occupied, gloved |
| Light | Office | Bright hall, by requirement |
| Attention | On the screen | On the physical task; the screen gets what is left |
| Session | Hours of authoring | Seconds of lookup, 90% of the time once (N33) |
| Content need | The full CAD hierarchy | The parts in **this** step (N37) |

"Different requirements" understates it. Every inherited decision was wrong at the second end: a dark theme in a daylit hall (N41), mouse-scale controls where there is no mouse (N40), a view cube made redundant by the planner's own camera work (N38), and the engineer's component tree presented to someone who needs to know which of two screws goes in next (N37).

**The client had already reached the structural conclusion.** Separating the Smart Viewer from the Composer was their decision, taken before the design block (N54) — and the case study must say so, because it is the spine of the whole engagement. What they had not resolved was what the separated product should actually be, and that is the work: the parts list flattened to the current step with quantities, then given tabs so the full tree stayed reachable (N55); the light theme made the shop-floor default (N63); the step-completion control pinned so it does not move as content changes (N57); annotations made hideable so they stop obscuring the object they describe (N59).

That gap is worth naming explicitly, because it is the engagement's actual subject. "These two users need different products" is a conclusion a good client can reach alone. "The parts list becomes a flat, step-scoped list with quantities, and the hierarchy returns as a second tab" is not — and neither is knowing that the second half of that sentence is necessary.

This is **organic system building** against **constraint respecting** — the shared component library is a real asset and the reason the second product existed at all, and it was also the reason the second product was wrong. The case study should say both. The decision was not "stop sharing components"; it was to decide, component by component, which inheritance was economy and which was error.

**It is also an instance of a question the corpus already names.** The `/contexts/multi-stakeholder-operational-environments` page lists *the one-interface question* — when to serve multiple roles through a single unified interface, and when to recommend architectural separation — in its own vocabulary. Assemblio is a clean worked example of answering it in the second direction, and should be written as one.

### A5.2 The handoff with no return path

The planner writes the plan; the worker follows it. Nothing came back (N39).

The person best placed to know whether a sequence works physically — the one actually holding the parts — had no way of telling the person who wrote it.

**Credit where it belongs: this was the client's diagnosis and the client's specification.** They described it in the demonstration session before the design block began, already bound to the step rather than to the plan, and their own customers had independently asked for the same thing, calling it a comment function for workers (N39, N53). The step-level binding is the insight — "step 47 doesn't work" is actionable where "this plan has problems" is not — and it was theirs.

Creative Navy designed how it lives in the interface: raised from the 3D canvas as a floating input rather than from a menu, so the worker reports from the thing they are looking at, with a Feedback tab in the side panel collecting what comes back on the planner's side (N58).

Write this as a handoff problem rather than a feature. It belongs with `/situations/risk-and-consequence/handoffs-create-failures` and `/failures/workflow-failures/workflows-break-across-roles`, and it is the same class of problem as the operator-authorship material in the industrial engagement, arrived at from the other end: there, the question was how to instruct an operator without taking authorship away; here, it is how to let the person being instructed answer back at all.

### A5.3 Designing for the spot-check, not the tutorial

Three use cases, and almost every product in this category optimises for the first (N34). A new worker follows the plan step by step. An experienced worker reads it once and never opens it again. The hard one is in the middle: *"they know the first 30 steps, but then they have to look up — OK, what's special about this? Which part do I need to use?"*

That is not a linear player's job. It needs fast random access to a named step, the parts for that step visible immediately, and the ability to leave as quickly as you arrived — which is why the step list is searchable, why the parts list defaults to the current step (N55), why a single step can be looped (N60), and why keyboard shortcuts sit in a drawer that can be consulted without leaving the step (N62).

The attention figure is what makes this concrete: the client's estimate that **90% of the time** the plan is consulted once and then left playing (N33). An interface used for ten per cent of a task's duration is a different design problem from one used throughout, and the corpus has a page for exactly this — `/failures/cognitive-failures/too-much-attention-is-required-for-routine-use`.

### A5.4 Accretion, diagnosed by the client rather than by an audit

Three ways to rename a thing — double-click, menu item, modal — and the reason stated on the record by the person whose company built it: the features were made at different points in time (N42).

Around it: an export buried in a sub-menu and unreachable afterwards (N44), four unrelated colour controls doing one job (N45), a text box that gives no sign it can be typed into (N46), a filter that does nothing and an indicator that looks like a button (N49), no undo (N48), a folder that cannot be deleted until emptied by hand (N43), and a camera view that has to be pasted step by step (N50).

**This is the cleanest first-person account of sense decay anywhere in the corpus**, and its value is precisely that it is not an audit finding (N15). Every item is locally explicable — someone built each one for a good reason at the time — and the sum is a product that is harder to use than any single decision would predict. The existing `sense-decay` page is evidenced by two cases where Creative Navy's research made the drift visible. Assemblio adds a third kind: a client who could already see it, could name the mechanism, and could not get out of it from inside.

Treat the engagement's response as the point: the fixes are individually unremarkable, and what mattered was having a structure — a design system, documented components, one pattern per job — that makes the next feature land consistently instead of adding a fourth way to rename something.

### A5.5 Three architectures, and a decision taken in writing

Three navigation structures were built as genuine alternatives, each taking a different position on where primary navigation lives (N7). The client rejected two in writing with reasons that are themselves findings: the top bar read as the existing product and left users unsure whether they were in a folder or a project; the side-panel-as-primary was rejected because folder names are long and a tree would not stay navigable even with depth capped (N74).

This is **option space mapping** with an unusually complete record, and it maps directly onto the second of the four architecture iterations the corpus already documents — structural alternatives that each optimise hard for a single goal, built to teach the team what the structure *could* be before anyone converges on what it *should* be. Assemblio evidences that model better than most engagements in the corpus, because the client's reasoning for each rejection survives in their own words.

Five rounds of written feedback across the block (N8) are worth describing as a working method in their own right, for the buying pages as much as the case study: a cadence in which the client is asked to choose between named alternatives and give reasons, rather than to approve or disapprove a single proposal.

### A5.6 The output is a regulated document, and the regulation is about to change

An assembly instruction is not an internal artefact. It is the document a manufacturer is obliged to produce, and the obligations are specific.

**IEC/IEEE 82079-1:2019** is the horizontal standard governing the preparation of information for use, and it reaches explicitly to large industrial machinery and to self-assembly products. **Regulation (EU) 2023/1230**, the Machinery Regulation, applies from 20 January 2027 and replaces the Machinery Directive — and it recognises instructions supplied in digital form, conditional on their being downloadable, savable and printable, and on their remaining accessible online for at least ten years, with a paper copy free on request.

That last condition is the one to use, because it converges with something already in the evidence bank. Assemblio's own shop-floor customers asked for **versioning, so that an old instruction can be loaded and checked** (N53) — and the review-and-approval workflow, the version history panel, and the sync-profile graph are all machinery for knowing which instruction was current when. A request from the shop floor and a regulatory obligation landing on the same design decision is a strong passage, and it is honest: the regulation is the reason the requirement is not going away, not the reason it was designed.

**Handle with care.** Creative Navy did not work to either instrument and must not imply it did. The standards describe the category the product's output enters. See §A8.

### A5.7 Density at a hundred steps

*"It is quite common for a product to consist of 100+ steps, so these views should be more condensed."* Written by the client, and the sharpest scoping constraint in the engagement.

A step row carrying a name, an MTM time, an animation duration, two toggles, an animation path with editable coordinates, a drag handle and an annotation indicator is defensible once and unusable a hundred times over. The response was subtractive: sliders removed in favour of numeric inputs, inputs reduced, spacing tightened, the annotation indicator dropped, the drag handle shown only on hover, and the space recovered given to the step name (N56, N67, N72).

Alongside it, two decisions that add rather than remove, and are worth pairing with it because they show the judgement rather than the reflex: a **summed MTM total on each step group** (N68), because a planner reading a workstation's time should not be adding up a hundred numbers; and **editable path coordinates** (N67), because dragging a point in 3D is not how you enter a known value.

### A5.8 Two problems that arrived as one, and were separated honestly

Sync profiles are the part of the engagement where the client handed over a problem explicitly outside their own competence (N93). It turned out to be two problems with very different prospects, and the session is worth writing because Creative Navy said so at the time rather than discovering it later.

**The first is a graph.** Product versions synchronise in chains and splits, and — as a stated requirement — in loops, so the relationships form a directed graph that can contain cycles (N92). Showing it is a tractable design problem, and Creative Navy said so in the session: finding a way to visualise the relations between synced products was not going to be a problem. The answer was the relationship diagram — the current product distinguished within it, fixed-width nodes so the layout does not reflow as names change, truncation with hover, the synced version on every card, and zoom, fit, pan, search and a legend (N102). The judgement worth drawing out is that the diagram answers a *question* — what depends on this, and what will change — rather than illustrating a data structure, which is why the client's follow-up request was a before-and-after comparison of the steps themselves.

**The second is a list of hundreds of near-identical rows, and it may not have a better form.** Every part in a synchronisation has to be matched: some identical, the rest *similar* by fuzzy comparison on geometry, name and position (N94). The planner has to approve each match, and the reason is not diligence but liability — the approval is the record that a person checked the substitution (N96). So the list cannot be collapsed, summarised or auto-accepted away. And the rows are unreadable: the same names appear on both sides, so a planner sees a screw matched to a screw and cannot tell which screw is which (N97).

Creative Navy's answer in the room was a search field, so a planner can go to a part they already have a reason to check — and then an explicit statement that if the planner must decide part by part, there may be no representation better than a list. The client had already said the same thing from their side: it would genuinely help to show the part, they had not built it because they were not sure how to do it technically, and they had no idea how to visualise the list better.

**Write the honesty, not just the diagram.** A session in which a designer tells a client that one half of a problem is solvable and the other half may not be is unusual enough to be worth reporting, and it belongs in the buying guidance as much as the case study. It sits with the AIT engagement's deferred help system and the Streetec engagement's declined work as the third instance of the same discipline: saying what will not be solved, at the point where saying it is still useful.

### A5.9 The questions that found the gaps

Three findings in this engagement came from a designer asking a question rather than from research, and all three are in one twenty-minute session.

- **The out-of-sync state that is never shown.** Creative Navy asked what a planner sees when two products are in a sync loop, one is changed, and the other is deliberately left alone — does it show as permanently out of sync, and is that acceptable? The client confirmed it was acceptable, and realised while answering that the product does not indicate in-sync or out-of-sync state anywhere; you would have to open the product to find out (N98).
- **The unsync that needs a screen.** Creative Navy raised that breaking one relationship among many is a selection problem and needs its own view, not the modal that mirrors sync (N99).
- **The assumption that turned out to be wrong.** Creative Navy asked whether anyone would ever synchronise to anything other than the latest version. The expected answer was no. The client produced a real case: products made over very long lifecycles, where a customer orders replacement parts decades later and an old plan has to be adapted to the current production layout (N100). The resolution — default to the latest, and provide a route to an older one — was settled in the session.

This is **tension-driven reasoning** doing ordinary work: a designer asking what happens in the state nobody has described, and a domain expert answering from knowledge they did not know was load-bearing. It is also the honest counterweight to N13 — this engagement had no user research, and what it had instead was a sustained, specific interrogation of the client's own expertise, which found things the client did not know were missing. Say both.

---

## A6. Classification and filing

```
## Classification

- **Primary case-study category:** /evidence/case-studies/industrial
- **Primary context:** /contexts/industrial-automation-and-machinery
- **Also-relevant contexts:** /contexts/multi-stakeholder-operational-environments, /contexts/expert-tools-and-internal-systems, /contexts/enterprise-software
- **Connects to:** /situations/complexity/multi-role-workflows-are-fragmented, /situations/complexity/expert-workflows-are-hard-to-operate, /situations/complexity/the-product-works-in-demos-but-not-in-real-use, /situations/growth-and-product-strategy/too-many-features-not-enough-coherence, /situations/growth-and-product-strategy/product-fragmenting-under-growth, /situations/growth-and-product-strategy/training-burden-is-too-high, /situations/risk-and-consequence/handoffs-create-failures, /situations/delivery-and-execution/design-does-not-survive-development, /failures/workflow-failures/workflows-break-across-roles, /failures/workflow-failures/handoffs-lose-context, /failures/cognitive-failures/too-much-attention-is-required-for-routine-use, /failures/cognitive-failures/users-cannot-reorient-quickly-after-interruption, /failures/state-visibility-failures/important-status-information-is-buried, /failures/state-visibility-failures/users-cannot-see-what-state-the-system-is-in, /capabilities/service-design-for-multi-role-systems, /capabilities/workflow-and-task-structure-redesign, /capabilities/information-architecture-for-expert-systems, /capabilities/cognitive-load-reduction, /practices/workflow-analysis
```

**Decision taken by the engagement lead (recorded in the briefing set's decisions list and §4.5 of the corpus update): the swap contemplated below was made.** `/contexts/industrial-automation-and-machinery` is primary; `/contexts/multi-stakeholder-operational-environments` moves to also-relevant. The Classification block above is authoritative; the rationale paragraphs below predate the decision.

**On the primary context.** The tagging convention chooses primary context by dominant design challenge, not by industry and not by user type. The load-bearing problem here is not that the client sells manufacturing software, and not that the Composer serves experts. It is that one system serves two populations whose operating conditions are opposite, through a handoff that ran in one direction only — which is the definition of `/contexts/multi-stakeholder-operational-environments`, and matches the *one-interface question* that page already names in its vocabulary. Expert tools and enterprise software sit as also-relevant on the strength of the Composer and of the versioning, permission and review architecture respectively.

**On the primary category.** `/evidence/case-studies/industrial` is the new category created for the industrial process control engagement. Assemblio belongs there: it is software for manufacturing operations, and filing it under `/enterprise-software` would repeat the drift the tagging convention was written to stop. **If that category has not yet been created when this study is written, create it first** — and note that `/contexts/industrial-automation-and-machinery` is also new. **Both trigger the context-change protocol**: `Guidance-meta-layer/lint_case_studies.py` must be re-run across the entire corpus in the same change set, before commit. If the industrial engagement has already been integrated, both exist and no structural change is needed; verify rather than assume.

**One judgement call for the engagement lead.** Assemblio and the industrial process control engagement would then share both the primary category and the primary context. That is permitted and probably right, but it is worth a deliberate look: if `/contexts/industrial-automation-and-machinery` turns out to carry the Assemblio material better once that page exists, the two should swap, with multi-stakeholder moving to also-relevant. Decide once, with both studies in front of you.

**Phase mapping — confirmed by the engagement lead.** All five phases are claimable. The mapping below is what the documented record supports for each, and the fifth carries a weight note that must travel with it.

- **Sandbox Experiments** — the three navigation architectures as structural alternatives (N7, N74), the two annotated user-flow diagrams carrying open questions as questions (N6), and domain learning from the recorded working session (N17–N29).
- **Concept Convergence** — the hybrid navigation architecture chosen from three, with named modifications and the client's recorded reasons for rejecting the other two (N74). **Do not use N54 here.** Separating the Smart Viewer from the Composer was the client's decision and predates the design block (§A5.0); the convergence work is everything that followed from it — what the separated product should contain, and which inherited components survived the separation (N55, N57, N59, N63).
- **Iterative System Building** — the five documented feedback rounds and the four UI sprints (N8, N1).
- **Organizational Integration** — **the strongest of the four, and now properly evidenced.** 93 components documented with all states (N103), design tokens carrying both themes so light and dark are one system rather than two (N104), documentation that records reasoning and not only specification (N105), a 25-screen prototype of the main flow (N106), a combined-format handover (N107) — and the fact that closes it: **Assemblio's developers built from those components** (N108). The corpus defines this phase as design-system construction *as reasoning documentation, not component library*; N105 is that distinction met head-on, and N108 is the evidence that the transfer actually happened rather than being delivered and shelved.
- **Implementation Partnership** — **one session and eight support tickets** (N109). Claimable, and it must be stated at that weight, with the §A4 wording. For scale: this is the lightest instance of the phase in the corpus — AIT's is three scheduled reviews and eight tickets across five months, and the Streetec engagement's two sessions were judged too light to evidence the phase at all on the method page.

  **Do not let the thinness read as a gap in the study, because it is the opposite.** AIT's design fidelity is explained by its reviews. Assemblio's is explained by its handover — N103 to N105 and N108 — and the result is the same (N11). Write the two together: one engagement held fidelity by checking the build, the other by making the build hard to get wrong. That comparison is more useful to a reader than either case alone, and it is the argument the Organizational Integration material above is really making.

**On outcomes pages.** This engagement populates **no** `/evidence/outcomes` page. Those pages require a grounded, specific result with its evidential basis stated, and nothing here was measured. In particular, **N12 does not qualify Assemblio for `/evidence/outcomes/strategic-and-organisational-outcomes/design-as-investment-evidence`** — that page carries Veecle, Owkin and Hudex each with a figure and an explicit client-reported framing, and an undetailed remark would lower its standard. N11 and N108 belong in `/evidence/evidence-standards/what-we-have-measured` only if that page will hold verified design-fidelity and adoption facts rather than performance measurements; otherwise they stay in the case study. N12 belongs in `what-is-client-reported` as a short example of that category's lower bound. N13–N16 belong in `what-we-do-not-claim`.

---

## A7. Suggested structure for the case study

0. **Before drafting, read §A5.0.** The division of labour in this engagement is unusual and the case study has to carry it accurately from the first section onwards. It is not a caveat to add at the end.
1. **Opening** — locked agency sentence; Assemblio and what the two products are, in two sentences; the inverted authoring method credited to the client (N18); the nine-sprint shape, the 87 screens and 233 variants.
2. **What an assembly plan has to do** — the engineer's problem (N17), the disassembly method and why it exists (N18, N19), what is in the CAD file and what is not (N24, N25), the two time values (N26), the states and the single owner (N21), and traceability as a customer requirement (N22). Establishes domain authority early.
3. **Two users, and one of them had inherited the other's interface** — §A5.1. Lead the section with the client's own sentence. The table of opposites belongs here.
4. **The shop floor as the client described it** — N31 to N35, attributed throughout. The foot pedals, the gloves, the tablet on a holder, the 90% figure, and the three use cases. Be explicit that this is the client's account and that Creative Navy did not observe it (N16).
5. **Designing for the spot-check** — §A5.3. The middle use case as the hard one, and what it forced.
6. **The handoff with no return path** — §A5.2.
7. **What the client said about their own product** — §A5.4. Frame it as N15 requires: a client diagnosing their own accretion on the record, not an audit.
8. **What was explored** — §A5.5. Three architectures, the client's reasons for rejecting two, and the five-round cadence as a working method.
9. **The decisions** — the Smart Viewer first (N54–N63), then the Composer's density problem (§A5.7), then the platform decisions that change how the product is used rather than how it looks: the upload card (N77), the explicit routes off a product card (N78), the two-line name, undo (N82). Keep the client-requested markers visible.
10. **Two problems that arrived as one** — §A5.8, sync profiles. The graph, the list, and the decision to say which was which.
11. **The questions that found the gaps** — §A5.9. Short, and it is the section that makes the engagement's thin research base legible rather than embarrassing. Place it immediately after §A5.8 so the sync-profile session reads as one story.
12. **What the output has to satisfy** — §A5.6. The standards framing, with the §A4 and §A8 cautions.
13. **What was handed over** — N103 to N107. The 93 documented components, the tokens that make two themes one system, the documentation that carries reasoning as well as specification, the 25-screen prototype. Short section; it is the phase the corpus cares most about and the one most case studies cannot evidence.
14. **What shipped** — N109 first, stated plainly at its weight: one session and eight tickets. Then N108 and N11 in that order — the components were adopted, and the shipped interface matches the delivered design. Make the connection the §A4 framing sets up: fidelity here came from the handover rather than from oversight of the build, which is the opposite mechanism from the AIT engagement and reaches the same place. Then N12 with its full qualification.
15. **Evidence and limits** — the engagement record, then an explicit statement of N13 to N16: no Creative Navy research, no usability testing, no audit, no shop floor observed, and what that means for what this case study does and does not establish. Including the sharper version in §A4 — that the central argument rests on evidence Creative Navy did not gather — is recommended, paired with §A5.9 as what the engagement had instead.

---

## A8. Domain framing and external research

**Creative Navy did not certify to, audit against, or work to any standard named here.** These establish that the writer understands the domain. Any phrasing implying compliance work is false. Equally, none of the studies below measured Assemblio; they describe the category it operates in.

### A8.1 The instructions standard, and the regulation that is about to move

- **IEC/IEEE 82079-1:2019**, *Preparation of information for use (instructions for use) of products — Part 1: Principles and general requirements*. Jointly published by IEC, IEEE and ISO, with the status of a horizontal standard under IEC Guide 108. It applies across product types from simple consumer goods to large industrial machinery and turnkey plants, carries the preparation process in its normative part, describes empirical methods for evaluating information for use, addresses the professional competencies required to produce it, and gives specific consideration to instructions for self-assembly products. **This is the standards anchor for this case study and for any work-instructions page**, and nothing in the corpus currently names it.
- **Regulation (EU) 2023/1230**, the Machinery Regulation, **applying from 20 January 2027**, replacing Machinery Directive 2006/42/EC. It permits instructions for use and assembly instructions to be supplied in digital format, subject to conditions: they must be downloadable, savable and printable; where assembly instructions are digital, the manufacturer must mark on the partly completed machinery how to reach them and keep them accessible online for **at least ten years** after placing on the market; and a paper version must be available free on request. Safety information for non-professional users must still be delivered on paper. **Verify the exact article and annex references against the EUR-Lex text before citing them.**
- The corpus already names this regulation in the industrial engagement's domain framing. Use it consistently; do not contradict that treatment.

### A8.2 Why instruction quality is a measurable variable, not a matter of taste

Three sources, all peer-reviewed, all about the category rather than this product.

- **Tang, Owen, Biocca and Mou, CHI 2003**, *Comparative effectiveness of augmented reality in object assembly*. Overlaying three-dimensional instructions on the workpiece **reduced the assembly error rate by 82%** against a printed manual, with the sharpest effect on cumulative errors — errors caused by earlier mistakes. Measured mental effort was lower in the same condition. The cumulative-error finding is the one to use, because it is exactly the failure the client described as the reason for planning by disassembly (N18): an error early in a sequence that is only discovered later and invalidates everything after it.
- **de Vries, van Oosterhout, de Vries, de Geit and Koen**, *Make complex assembly work more accessible through projection-based work instructions*, *Journal of Manufacturing Technology Management*, doi 10.1108/JMTM-10-2025-1056. 80 vocational students randomly assigned to digital or paper instructions for a car-battery assembly. Participants using digital instructions were faster, made fewer errors and asked for less help — and **lower-educated participants using digital instructions matched the performance of higher-educated participants using paper**. This is the strongest external corroboration available for the capability-democratisation and training-burden arguments. **Check the publication status before citing**: search returns a publication date that may be ahead of print.
- **Manual assembly learning, disability, and instructions: an industrial experiment**, *International Journal of Production Research*, doi 10.1080/00207543.2023.2195957. Not yet read in full; retrieve it before use.

### A8.3 Domain vocabulary that signals knowledge of the field

- **Methods-Time Measurement.** MTM is a predetermined motion time system, released in 1948, used to set standard times without a stopwatch. It exists as **MTM-1** (the most detailed, for short-cycle repetitive work), **MTM-2**, **MTM-UAS** (the Universal Analysing System, developed by the German, Swiss and Austrian MTM associations for batch and mixed-model production, where speed of analysis takes priority over motion-level detail), **MTM-MEK**, and SAM analysis. Its purpose in a plant is line balancing and cycle-time planning, which is why the value is entered per step and summed per group (N26, N27, N68). There is a usable observation here: the client used the acronym fluently and said they were not sure what it stood for. Write that as what it is — a received term of art whose expansion has stopped mattering to the people who use it daily — not as a lapse.
- ***Arbeitsvorbereitung*** — work preparation, the German production-engineering function whose job the Composer does. The client reached for it when no English term came to mind (N30). Useful once, as evidence of where this product sits in a factory's org chart.
- **ISO 10303**, the Standard for the Exchange of Product Model Data, universally called **STEP**. Application protocols matter: **AP203** (configuration-controlled 3D design), **AP214** (core data for automotive mechanical design, adding assembly structure, colour and presentation), and **AP242**, which merges the two and adds machine-readable product manufacturing information. **AP214 is the protocol that appears in the sample model used throughout the engagement.** A STEP file carries assembly structure — parts, sub-assemblies and their relationships — which is why the Composer can show a hierarchy at all, and why the names in it are the design engineer's (N24).
- **Manufacturing bill of materials (MBOM)**, as distinct from the engineering bill of materials, is the vocabulary a buyer in this market already uses.

### A8.4 Credit where it is due — the method has research provenance

Deriving an assembly sequence by analysing disassembly is not an interface idea; it is **computer-aided assembly planning**, and Assemblio's founder published on it at Fraunhofer IPA before the company existed — including *Review on Approaches to Generate Assembly Sequences by Extraction of Assembly Features from 3D Models* (Procedia CIRP), *Automatic Generation of Assembly Graphs based on 3D Models and Assembly Features* (CIRP ICME), and *A Novel Approach to Generate Assembly Instructions Automatically from CAD Models*.

Naming the field correctly costs one sentence and earns the domain authority the writing guide asks for. It also makes the division of labour in the engagement legible: the client brought the method, Creative Navy designed the product around it. **Do not cite these papers in a way that implies Creative Navy read, evaluated or contributed to them.**

### A8.5 The competitive field, and the vector

The market splits in two, and the split is the argument.

- **Document digitisers** — Dozuki, VKS, SwipeGuide, Operations1, Azumuta, Poka, Tulip. These convert existing instructions into structured digital form and add completion tracking, traceability and analytics. The input is a document.
- **CAD-derived generators** — PTC Creo Illustrate, Siemens Tecnomatix and Teamcenter Visualization, Dassault's DELMIA Work Instructions Author, Cortona3D RapidAuthor, SAP 3D Visual Enterprise. These generate from geometry. The input is the model.

Assemblio is in the second group, where the established players are PLM suites sold to enterprises that already own the rest of the stack. **A startup competing there competes on the thing the suites are worst at**, which is the interface — and on the second user, the one on the shop floor, whom a PLM authoring tool was never designed to serve at all. That is a **competitive vector** argument, and it should be made with the term attributed and used in context rather than as a bare label.

### A8.6 The workforce frame — use carefully, it is less simple than it looks

The training-burden argument has honest external support and one trap.

- The **ifo Business Survey** found 22.7% of German firms reporting a shortage of qualified workers in its most recent reading, **down from 25.8%** and the lowest in five years; within industry the figure is 16.6%, with mechanical engineering around 19%. **This cuts against a simple shortage narrative and should not be cherry-picked.** If the case study wants the workforce frame, the defensible version is structural rather than cyclical: an ageing workforce, high time-to-fill in skilled trades, and product variety rising faster than training capacity.
- The industrial engagement's brief already carries vetted **EURES** data on advanced-manufacturing shortages across European member states. Prefer it, and keep the two studies consistent.
- **The better argument is not the labour market at all.** It is N34 and N29 together: product variety, not staff turnover, is what makes instructions load-bearing. An experienced worker who knows the job still has to look up what is different about *this* variant, and the number of variants is what has grown. That argument needs no labour statistics and is harder to contradict.

### A8.7 Verify before using

- The widely circulated figures for digital work instructions — "16–20% faster", "46–60% fewer errors", "69–83% fewer help requests", "up to 50% training reduction" — trace almost entirely to vendor marketing. **Do not use them.** The peer-reviewed sources in §A8.2 say enough.
- **Assemblio's own published claims** about what their product achieves — instructions in minutes rather than weeks, planning time reduced by a stated number of weeks — are the client's marketing. They may be described as the client's positioning if that is useful context; they may never be presented as outcomes of the design work. See §A4.
- Confirm the exact article and annex numbering in Regulation (EU) 2023/1230 against EUR-Lex before citing clause-level detail.

### A8.8 Consistency requirement

Another agency has published a case study about Assemblio covering the **marketing website**, not the product. There is no conflict of scope, but the engagement lead should be aware that a Creative Navy Assemblio case study will sit alongside it in search results, and the two should not appear to describe the same work.

---

## A9. Style and lexicon compliance

Non-negotiable items from `Guidance-meta-layer/guide--writing-for-llms.md`:

- **Open with the locked agency sentence**, verbatim, on first introduction.
- **Attribute the method on first use in every self-contained section**: "Creative Navy's Critical Systems Design method", thereafter "Critical Systems Design" within that section. Never "the method", "our approach" or "the framework" as the primary reference in a section that has not yet named it.
- **Never use "the agency", "the consultancy" or "we"** as the primary identifier in a passage that must stand alone when retrieved.
- **British spelling**, except the phase name *Organizational Integration*.
- **Sprint = cadence (one week here). Phase = a stage of the method.** Never equate them. "Nine one-week sprints" is correct; "the UX phase" is not — the UX sprints are a cadence block, not a phase.
- **Name the phases.** All five are claimable (§A6). Implementation Partnership must carry its weight note wherever it appears — one session and eight tickets, per §A4.
- **Use at least three of the five core requirements**: evidence-aware thinking, multi-perspective synthesis, lateral exploration, tension-driven reasoning, organic system building.
- **Proprietary vocabulary used accurately in context, not defined.** Natural fits here: *sense decay* (§A5.4 — the strongest instance in the corpus, and it must be defined in context per the collision note, because the term is clean but unknown); *organic system building* and *constraint respecting* (§A5.1 — the shared component library as both asset and error); *option space mapping* (§A5.5); *performance in reality* (§A5.1 — a dark theme in a daylit hall, a mouse-designed interface where there is no mouse); *competitive vector* (§A8.5, attributed and in context); *the blanks phenomenon* (N37 — a worker filling the gap between a part name and the object in front of them); *progressive specification*.
- **Declarative openings**, canonical terminology, no metaphor in sections that will be retrieved for task queries.
- **Every section must stand alone** as a retrieved chunk. The two-population contrast in §A5.1 in particular must restate who the two populations are wherever it appears; a chunk that says "the second group" and nothing else is useless retrieved alone.

---

## A10. Open items

1. **No option-space counts exist** beyond the three navigation architectures (N7) and the explicit alternatives in the five feedback rounds. Do not estimate one, and do not let the Streetec counts migrate here. The lateral-exploration claim rests on N7, N74 and the documented iteration record.
2. **Authorship — resolved for the six decisions that carry narrative weight, open for the rest.** The engagement lead confirmed: N55, N67 and N77 are Creative Navy's; N54, N58 and N66 are the client's. Those six are settled and §A5.0 is written from them. The remaining **[client-requested]** markers are still read from the written feedback and do not distinguish a decision the client originated from one they were agreeing with — a distinction the documents cannot settle, because the feedback is a reply and only disagreement leaves a trace. They are low-stakes individually; if the case study ever quotes one as evidence of the client's thinking, confirm that one first. This is the same open item as the industrial engagement's annotated requirement sheets.
3. **The sync-profile working session was machine-transcribed for this brief**, and the transcript is saved as `transcript_assemblio-sync-profile.txt` alongside this file. It is reliable in substance but not quote-grade; N90 to N102 and the quotes in §A3.7 have been checked and are safe as written, with the two garbles flagged there. Verify anything further against the source. The product-demo transcript was supplied by the client and is reliable in substance on the same terms.
4. **Design system — closed. Two details are unavailable and must not be reconstructed.** N103 to N108 carry the component count and state discipline, the token structure, the reasoning-as-well-as-specification point, the prototype scope and the adoption fact. **The type scale and the icon set are not recorded and will not be**, so the brief does not ask for them and the case study must not estimate them — unlike the AIT study, which names both, this one describes the system by its component count, its state discipline and its token structure. Likewise **N107 stands as written**: a combination of formats, mix unspecified. Write "a combination of formats" and stop; do not list candidate formats, and do not imply a specific handover artefact that cannot be evidenced.
5. **Three client-side participants speak in the sync-profile session**, not one, and they correct each other on a point of fact about version selection. If the case study wants to characterise the client team, that is usable material — attributed by role, per §A1.1 — but the roles of the two participants other than the CTO are unknown. Confirm before using.


---

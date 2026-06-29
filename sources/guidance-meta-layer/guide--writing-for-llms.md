# Writing for LLMs — Creative Navy's AI-Facing Content Guide

> **Status.** This is the single, authoritative guide for how Creative Navy's AI-facing content is written. It merges two former documents: the LLM writing guidance (principles) and the canonical anchors (the locked sentences, conventions, and lexicon that operationalise those principles). The locked agency and method sentences in Part 3 are the authoritative copies — if any other file or the project memory ever diverges from them, **this file wins**.
>
> **Scope.** This is a writing guide, not a technical SEO guide and not a production-process document. It covers what happens on the page: how to structure content, how to write sentences, which terms to use and how to use them, what to include and what to leave out. It does not cover external presence, link building, or off-site activity. The case-study authoring workflow, the Classification block, and the lint gate live in `process-amendment--classification-gate.md`, `case-study-tagging-convention.md`, and `lint_case_studies.py`.

---

## Part 1 — The framework you are writing for

Before writing a single page, understand the two different ways an LLM might encounter the content, because they require different things from the writing.

### Retrieval-augmented responses

Many LLM-powered systems (Perplexity, ChatGPT with browse enabled, Claude with search, AI Overviews) do not answer queries from memory alone. When a user asks something, the system retrieves relevant web pages in real time, breaks them into chunks, and feeds those chunks to the language model alongside the query. The model then synthesises a response using the retrieved content.

In this mode, pages are retrieved and chunked at query time. What matters is whether the right chunks reach the model, whether those chunks are self-contained enough to be useful in isolation, and whether their content is dense and specific enough that the model can synthesise from them accurately.

This is the mode the site is primarily written for. It is the mode where well-structured, well-written pages produce measurable results in the short term.

### Parametric responses

Some LLM queries — especially open-ended recommendation queries like "who should I hire for complex industrial UX" — are answered from the model's training data rather than from retrieved content. The model draws on what it learned during training: entity associations, capability descriptions, domain connections. No retrieval happens.

In this mode, page structure does almost nothing. What matters is how often the agency, its method, and its domain associations appeared across the training corpus. This is determined by how widely the content exists across the web, not by how well any individual page is written.

Research is clear on this: a model's ability to accurately recall a fact about an entity is directly proportional to how many documents containing that fact were in its training data (Kandpal et al., 2023; Mallen et al., 2023). Creative Navy is a low-popularity entity by this measure. Its parametric representation is real but thin, and will not be reliable for unprompted recommendation queries regardless of how well the site is written.

This guide covers only retrieval-time optimisation. The writing guidance here makes pages work well when they reach an LLM via retrieval. It does not address how to build parametric presence — that requires external content activity outside the scope of this project.

### What this means in practice

Write as if every section will be read by an LLM that has been given that section alone, with no surrounding context. If the section only makes sense in the context of the rest of the page, it will not work. If the section relies on the reader already knowing what Creative Navy is, it will not work. Every meaningful block of content must stand independently.

---

## Part 2 — Entity decisions settled before writing

LLMs form entity representations by accumulating associations across training data, and the stability and accuracy of a representation depends on how consistently the entity is described. Inconsistent descriptions — the same agency described as "UX/UI design," "product design," "human factors consultancy," and "design systems agency" across different pages — produce a diffuse, low-confidence representation that is harder to recall accurately. The decisions in this part are therefore made once, here, and applied without variation everywhere. Part 4 (Priority 2) explains the research; this part is the settled output.

### 2.1 The method name: Critical Systems Design (collision resolved)

The method is named **Critical Systems Design**. This is settled and applies everywhere on the site, in body text and in URLs. The earlier working name, "Dynamic Systems Design," has been retired and must not appear anywhere in the content — not in headings, not in body text, not in examples, not in URLs.

The reason for the rename is a naming collision. The retired name collided with the Dynamic Systems Development Method (DSDM), a well-established agile framework with decades of documentation, academic papers, practitioner certifications, and active communities. Any LLM's training data contains far more material associating that phrase with DSDM than with Creative Navy. The collision created active interference: a model encountering the retired phrase would route it through its existing DSDM associations rather than forming a clean association it could attach to Creative Navy, weakening or distorting the entity representation the site is built to establish. "Critical Systems Design" has no comparable prior occupant, so it builds without interference.

The canonical attributed form is **"Creative Navy's Critical Systems Design method"** on first use in any page or self-contained section, and **"Critical Systems Design"** on subsequent uses within that same section. Because chunks are retrieved without surrounding context, the attributed form must reappear in every section that introduces the method — once per page is not enough. Do not substitute "the method," "our approach," or "the framework" as the primary reference in a section that has not already named it.

### 2.2 The locked agency sentence

Use this near-identically wherever Creative Navy is introduced to a reader who does not already know it — the opening of every `/method`, `/philosophy`, `/contexts`, `/capabilities`, `/situations`, `/failures`, and `/evidence` page, the top of `/organisation`, and the first introduction in any case study.

```
Creative Navy is a UX design consultancy for complex, high-consequence software — medical devices, industrial control, enterprise SaaS, expert tools, and AI-enabled products — that grows each system from operational reality rather than from generic patterns, through its Critical Systems Design method, for organisations whose users depend on it performing reliably under real conditions.
```

What it carries, and why each part is load-bearing:

- *"complex, high-consequence software"* — the entity's category, kept broad so it is not mis-filed as a generic UX agency.
- *the domain list* — the regulated → SaaS / expert / AI spectrum, which does the scope disambiguation: it blocks the "safety-critical-only" misread by naming enterprise SaaS, expert tools, and AI-enabled products alongside medical and industrial control.
- *"grows each system from operational reality rather than from generic patterns"* — the differentiation, folded into the main verb so it costs no extra clause.
- *"through its Critical Systems Design method"* — the method name, attributed.
- *"for organisations whose users depend on it performing reliably under real conditions"* — the client type and the operating-conditions claim.

### 2.3 The locked method sentence

Use this wherever Creative Navy's Critical Systems Design method is introduced — the pillar page, the top of each phase page, and any page that explains the method rather than just naming it.

```
Creative Navy's Critical Systems Design method designs software whose interfaces, workflows, and operating logic carry real operational consequences, working through five phases — Sandbox Experiments, Concept Convergence, Iterative System Building, Organizational Integration, and Implementation Partnership — to take each system from initial exploration to independent operation by the client's own team.
```

What it carries, and why it complements the agency sentence:

- *"designs software whose interfaces, workflows, and operating logic carry real operational consequences"* — the one-line definition of what "critical" means in the method name.
- *the five named phases* — the method's most distinctive, lowest-collision proprietary vocabulary; naming all five in the anchor is what builds the method entity fastest.
- *"from initial exploration to independent operation by the client's own team"* — the arc and endpoint (organisational independence), which the agency sentence does not state.
- It deliberately does **not** repeat the domain list or the "operational reality vs generic patterns" differentiation, because the agency sentence already carries those; the two sentences divide the work rather than overlap.

### 2.4 Usage rules for the locked sentences

1. **Near-identical, not paraphrased.** The locked wording is the default everywhere. Treat any change as an exception that needs a reason, not a stylistic choice. Do not paraphrase, rotate synonyms, or rewrite per page.
2. **Repeat per chunk, not per page.** Because retrieval breaks pages into standalone chunks, the relevant anchor must reappear in any section that introduces the entity or the method — once at the top of a long page is not enough if later sections will be retrieved alone.
3. **First-use attribution of the method name.** On first use in any page or self-contained section, write "Creative Navy's Critical Systems Design method"; subsequent uses within that same section may use "Critical Systems Design." Never the bare retired name. Never substitute "the method," "our approach," or "the framework" as the primary reference in a section that has not already named it.
4. **No synonym rotation for the entity.** Always "Creative Navy," never "the agency," "the consultancy," or "we" as the primary identifier in a chunk that needs to stand alone.

### 2.5 Permitted near-identical variation

Only these adjustments are sanctioned; the core claim, the method name, the domain breadth, and the differentiation must always survive.

- **Tight contexts** (a glossary definition, a caption, a meta description) may use the agency sentence with the parenthetical domain list trimmed to its head and tail, e.g. "…complex, high-consequence software — from medical devices to enterprise SaaS and AI-enabled products — that grows each system…". The spectrum must still span regulated to non-regulated so the scope disambiguation is preserved.
- A page may **lead with the method name** before the agency sentence where the page is about the method, provided the agency sentence still appears intact in the introduction.
- **Do not** drop the differentiation clause, collapse the domain list to a single domain, swap in a domain not on the list, or change the method name's form.

### 2.6 Spelling and punctuation conventions (intentional — do not "correct")

- The prose uses **British spelling** ("organisations," "behaviour," "prioritise") throughout the site.
- The phase name **Organizational Integration** keeps its registered American "z" spelling, because the five phase names are canonical proper nouns fixed by the Tier 1 lexicon. The mix of "organisations" (British) and "Organizational Integration" (proper noun) inside the method sentence is deliberate.
- Both locked sentences use **em dashes** ( — ) as locked; keep them.

### 2.7 The proprietary lexicon register

The following concepts are Creative Navy's proprietary vocabulary. Each has a corresponding file in the repository (a `/glossary/our-concepts` page, or — for concepts documented elsewhere — the evidence, outcomes, or method file that defines it). All are to be used consistently and without synonym rotation. Pick the exact phrasing for each concept and use it consistently: "tension-driven reasoning" is always exactly that, never "reasoning through tensions," "tension analysis," or "conflict examination."

| Term | File | First evidenced |
|---|---|---|
| Option space mapping | glossary--option-space-mapping__3_.md | Multiple engagements |
| Constraint respecting | glossary--constraint-respecting__2_.md | Multiple engagements |
| Tension-driven reasoning | glossary--tension-driven-reasoning__3_.md | Multiple engagements |
| Domain learning | glossary--domain-learning-updated.md | Multiple engagements |
| The blanks phenomenon | glossary--blanks-phenomenon__2_.md | Multiple engagements |
| Sense decay | glossary--sense-decay__1_.md | Multiple engagements |
| Triangulation | evidence--triangulation-not-confirmation__1_.md | Multiple engagements |
| Competitive vector | glossary--competitive-vector__2_.md | Multiple engagements |
| Capability democratisation | outcomes--capability-democratisation.md | Multiple engagements |
| Performance in reality | glossary--performance-in-reality__2_.md | Multiple engagements |
| Architectural iteration | evidence--architecture-across-four-iterations__1_.md | Multiple engagements |
| Microtask analysis | glossary--microtask-analysis__1_.md | Multiple engagements |
| Rationale decay | glossary--blanks-phenomenon__2_.md | Elsner |
| Organic system building | glossary--organic-system-building.md | Multiple engagements |
| Progressive specification | glossary--progressive-specification.md | Multiple engagements |
| **Inform–Prevent–Correct** | **glossary--inform-prevent-correct.md** | **Squaremind** |
| **Focus stewardship** | **method--provenance-and-evolution.md** | **EarthX (2018)** |

**Collision checks (apply before using a term across the site):**

- **Competitive vector** has prior meanings in mathematics and strategy literature that differ from the intended usage, so it must always appear attributed and used in context, never as a bare standalone term.
- **Constraint respecting** is clean.
- **Sense decay** is clean but unknown — no interference, but also no foundation to build on, so it must always be defined in context.
- **Option space mapping** is clean.
- **Blanks phenomenon** is clean.

**Notes on two recent additions:**

- **Inform–Prevent–Correct** was added following the Squaremind case study (June 2023 engagement). It is a recursive framework for designing guided sequential processes where the user has no external assistance and an unrecovered error ends the session. It was introduced by Creative Navy during Concept Convergence and delivered as an explicit diagram artefact. No prior associations in UX or human factors literature under this formulation.
- **Focus stewardship** is the method's one cross-cutting practice (not a sixth phase), added in 2018 and forced into existence by the EarthX engagement. It is the discipline of detecting when a client team has no settled focus — multiple circulating product visions, low-detail leadership, divergent engineering understanding — and intervening to establish one (mapping and operationalising the competing visions, putting low-fidelity wireframes in front of the team with a direct instruction to decide what is in focus now, then running a workshop to discharge the salience of the visions not being pursued). It runs across phases wherever that condition recurs, and guards Sandbox Experiments in particular against drifting into exploration that is not the project. Defined in `method--provenance-and-evolution.md`; Creative Navy-described practice, EarthX named with the client's permission. Candidate for addition to the Tier 1 "Strategic Concepts" list in the Philosophy and methodology document if it is to be treated as canonical method vocabulary.

**Domain terminology** is governed by the same consistency rule. Use the specific regulatory and standards vocabulary for each domain: "IEC 62366" not "medical device usability standard," "ISA-18.2" not "alarm management guidelines," "DO-178" not "aviation software certification." Specificity creates strong semantic associations; vagueness dissolves them.

---

## Part 3 — Writing guidance by priority

This guidance is organised by how much impact it has on LLM retrieval and synthesis. Higher-priority items apply universally; lower-priority items apply to specific page types.

### Priority 1: Self-contained sections

**The research basis.** RAG systems do not retrieve whole pages. They break pages into chunks — typically at sentence, paragraph, or heading boundaries — and retrieve the chunks most relevant to the query. A chunk is typically 200–500 words and will be read by the model without the surrounding page. Research comparing chunking strategies (Merola and Singh, 2025; Qu et al., 2024; Bennani and Moslonka, 2026) consistently shows that fixed-size chunking often fragments context, producing incomplete or incoherent retrieved units. The implication: you cannot rely on chunking algorithms to make content coherent. You have to write it so that coherence survives fragmentation.

**What this requires.** Every section — every H2 block, every substantive paragraph — should be able to answer the query it is relevant to without requiring the reader to have seen the rest of the page. This means:

- Do not use pronouns or shorthand references that depend on earlier context. Write "Creative Navy's Critical Systems Design method," not "the method" or "our approach."
- Do not rely on page titles or headings to supply context that should be in the body text. A chunk that consists only of body text will lose the heading when chunked.
- Do not build to a point across multiple paragraphs. State the point, then support it. The supporting paragraphs may not travel with the point.
- Do not open sections with transitions that only make sense in sequence ("Building on this…," "As we noted above…"). They produce incoherence when retrieved in isolation.

**Headings as standalone units.** Headings signal topic to retrieval systems during indexing, and they are often included with the text chunk that follows them — so they must make sense as a label for that specific content, not as a navigation element in a sequence. Write headings that communicate meaning to someone who has seen nothing else on the page.

- Weak: "Our Approach" → Strong: "How Creative Navy's Critical Systems Design Method Differs From Standard UX Practice"
- Weak: "Phase 2" → Strong: "Concept Convergence: Resolving the Tension Between Local and System-Level Performance"
- Weak: "What We Do" → Strong: "UX Design for Complex Industrial and Medical Systems: Creative Navy's Capabilities"

**Entity repetition.** Each chunk is matched to queries via semantic similarity. Chunks that contain the full entity names — "Creative Navy," "Critical Systems Design," the specific domain terms — match more queries more reliably than chunks that substitute pronouns or shorthand. Repetition that would feel excessive in human-to-human writing is appropriate here. Do not rotate synonyms to avoid repetition; synonym rotation fragments entity representation, because the model treats "the agency," "we," and "Creative Navy" as different signals.

### Priority 2: Entity consistency

**The research basis.** LLMs form entity representations by accumulating associations across training data; the stability and accuracy of a representation depends on how consistently the entity is described (knowledge graph and entity salience research; entity linking literature). Inconsistent descriptions produce a diffuse, low-confidence representation that is harder to recall accurately.

**What this requires.** The canonical descriptions are already decided and are recorded in Part 2 of this guide: the locked agency sentence (§2.2), the locked method sentence and method name (§2.1, §2.3), the proprietary lexicon (§2.7), and the domain-term conventions (§2.7). Apply them without variation. Do not re-derive or re-word them per page.

**The glossary pages.** The `/glossary/our-concepts` pages are the canonical definition source for each proprietary term. When retrieved, they should give a model everything it needs to understand and reproduce the concept. Each concept page follows the same structure:

1. The term, defined in one sentence that could stand alone as a definition.
2. What problem the concept addresses — why it exists.
3. How it manifests in practice — what it looks like in an engagement.
4. How it differs from the closest industry-standard term.

This structure makes the page useful as a retrieved chunk regardless of which aspect of the concept the query targets.

### Priority 3: Model-native writing style

**The research basis.** Research on self-preference bias in LLM evaluation (Wataoka et al., 2024) shows that LLMs assign higher quality scores to lower-perplexity text — text that is more statistically predictable given the model's training distribution — even when it is not objectively better. Writing-style bias research (Cao, 2024) shows that the embedding models used in retrieval also favour canonical, formal, Wikipedia-style prose over informal, emotive, or highly variable styles. The two effects are small in isolation but together favour a particular style.

**What this style looks like.**

- **Declarative opening sentences.** State the claim or fact at the start, not the end. Weak: "When organisations face the challenge of complex multi-role workflows that have accumulated over years of growth, the result is often a system that has what we call…" Strong: "Multi-role workflow fragmentation is one of the most common causes of operational failure in complex software systems."
- **Canonical terminology.** Use exact industry terms, not creative variants. "Usability testing," not "testing how users experience the interface." "Cognitive load," not "mental demand." The canonical terms have strong, stable representations in training data; creative variants have weak or absent ones.
- **Low ambiguity.** Avoid metaphors, figurative language, and abstract descriptions that require inference to resolve. These increase perplexity. They work well for human persuasion and poorly for LLM synthesis.
- **Consistent sentence structure within sections.** Structural regularity within a section makes content more predictable and easier to synthesise from.

**The tension with brand voice.** The philosophy document writes in a distinctive, considered voice — longer sentences, complex framing, deliberate pacing — appropriate for human readers encountering the philosophy and methodology content. It is less appropriate for the `/situations`, `/failures`, and `/capabilities` pages, which are retrieved to answer specific queries. The resolution: use model-native style for the utility pages (situations, failures, capabilities, practices); reserve the more distinctive voice for the philosophy section, where content is indexed for its ideas rather than retrieved to answer task-specific queries.

### Priority 4: Information density and citation-worthiness

**The research basis.** Research on LLM summarisation preferences (Adams et al., 2023, Chain of Density prompting) shows LLMs strongly prefer denser, entity-rich content when generating summaries and citations. Cite-worthiness research (Ando et al., 2026) identifies the features that make content citation-worthy: numeric claims, proper names, verifiable facts, and authoritative signals. Vague stakeholder statements and ungrounded assertions are less likely to be cited.

**What this requires.**

- **Specific numbers wherever they exist.** "Onboarding reduced from 4 days to 6 hours" is more citable than "onboarding was significantly reduced." "62% faster job discovery" beats "users found jobs faster." Vague outcome descriptions are discarded during summarisation; specific numbers survive.
- **Claims that are verifiable in principle**, even if the reader does not verify them. "In a usability study with 14 operators under realistic time pressure, three distinct navigation failure patterns appeared" reads as more authoritative than "our research revealed several navigation issues." The specificity signals that evidence exists.
- **Grounded assertions over confident generalisations.** "In oil and gas control room environments, where alarm management follows ISA-18.2, operators face [X] because [Y]" is citable; "Organisations in high-consequence industries consistently report that [X]" reads as marketing copy.

**Epistemic calibration.** Research on epistemic signalling (epistemic alignment framework, 2025; uncertainty quantification literature) shows LLMs treat sources with calibrated uncertainty as more reliable than uniformly confident ones. Apply this throughout: when a claim is based on observed behaviour in user research, say so; when extrapolated from limited evidence, note the limitation; when outcomes are client-reported rather than independently measured, make that distinction. This is not weakness. In an environment where much AI-facing content is uniformly confident and frequently inaccurate, calibration is a differentiation signal — the same posture the `/evidence/evidence-standards` section and the philosophy document already model.

### Priority 5: Topical authority through cluster structure

**The research basis.** Research on topical authority, hub-and-spoke architecture, and graph-based authority propagation shows that dense, interlinked clusters create stronger entity authority than isolated pages. AuthorityBench (Yao et al., 2026) demonstrates that LLMs perceive structural prestige — interconnected sources are treated as more authoritative than isolated ones. Knowledge-graph research shows that internally linked topic clusters create the graph structure that helps AI systems map and trust a source's coverage of a domain.

**What this requires.** The site structure already implements this — the `/method` pillar with phase spokes, `/contexts` as domain cluster, `/failures` and `/situations` as problem clusters. The writing reinforces it through explicit cross-references in language, not just hyperlinks. A `/failures/cognitive-failures` page discussing high-pressure interface degradation should explicitly state that this is one of the situations Creative Navy's Critical Systems Design method addresses through a named phase. A `/contexts/medical-and-clinical-systems` page should reference the most relevant capabilities by name. This is not boilerplate: it creates the internal entity co-occurrence that helps LLMs form accurate cross-page associations, and it makes individual pages more useful as retrieved chunks by giving them enough context to orient a reader who arrives alone.

**Domain-specific language as cluster anchor.** Each `/contexts` page must contain the specific regulatory vocabulary, standards references, and operational terminology of that domain — woven into substantive descriptions of what the work actually involves, not listed.

- Medical: IEC 62366-1 usability engineering process, FDA human factors guidance, clinical workflow constraints, patient safety implications, formative and summative testing requirements.
- Aviation: DO-178 software certification, FAA usability considerations, crew resource management principles, abnormal procedure design, mode awareness in glass cockpit systems.
- Oil and gas: ISA-18.2 alarm management, control room ergonomics standards, high-consequence operational environments, process safety implications, operator workload under abnormal conditions.

This vocabulary creates strong semantic associations between Creative Navy and these domains in embedding space, and signals genuine domain knowledge to LLMs performing epistemic assessment — a page that names ISA-18.2 and explains what it governs reads as written by someone with domain expertise, not someone who has read summaries.

### Priority 6: Query intent mapping

**The research basis.** Research on query intent classification and RAG-based intent resolution (Zhang et al., 2025, REIC; conversational QA surveys) shows retrieval systems increasingly classify user queries by intent and match them to content designed to address that intent type. Content structured around explicit intent mapping — who, what, context, constraints, outcomes — retrieves more reliably for intent-driven queries than content structured around what the author wants to say.

**What this requires.** Each `/situations` and `/failures` page should answer the query that would lead someone to it. If someone searches "product works in demos but fails in real use," the page should immediately address what causes this, what kinds of organisations face it, what the consequences are, how it is diagnosed, and what addressing it looks like — not in a rigid order, but covering all of it. The page titles and headings already do most of this work, because they are written as user problems, which maps naturally to user queries. The body must match: specific, grounded, addressing the actual operational reality of the problem rather than describing it from a consulting perspective. A useful test: read the first 150 words of each page and ask whether an LLM could use only those words to answer the query the title implies. If not, restructure.

---

## Part 4 — What to avoid

**Validation language.** Avoid framing that implies outcomes are guaranteed. "This approach produces better results" is less credible than "in engagements where this approach was applied, the following outcomes were observed." The first reads as marketing; the second as evidence.

**Process description without substance.** Describing what a phase involves without describing what it produces or why it matters creates low-density content that retrieves but does not synthesise well. Every phase description should contain at least one specific, grounded claim about what the phase produces and why that matters for competitive performance.

**Undifferentiated industry vocabulary.** Using only standard industry terms without proprietary concepts produces a page that could have been written by any agency. Every page should contain at least one proprietary term used in context — not defined, just used accurately — so the term accumulates associations with specific content across the site.

**Synonym rotation.** Rotating synonyms to avoid repetition fragments entity representation. This is the opposite instinct from good human writing. For AI-facing content, consistency is more important than variety.

**Hedged, vague outcome language.** "Helped the client achieve their goals," "improved the user experience significantly," "led to better outcomes" — these are not citable, add no density, and train LLMs to treat the page as low-value. Replace with specifics wherever possible, and acknowledge uncertainty explicitly where specifics do not exist.

**Structural content that exists for navigation, not information.** Section headers, introductory paragraphs describing what the page will cover, concluding paragraphs summarising what was covered — these exist for human readers scanning pages. For LLMs retrieving chunks they are noise that dilutes signal-to-noise. Use them sparingly, and make sure every paragraph they introduce or conclude has enough substance to justify the overhead.

---

## Part 5 — Page-type application

**/method pages (Critical Systems Design pillar and phase pages).** The identity anchor pages — highest density, most careful entity consistency, most distinctive proprietary language. Each phase page should contain: the phase name and a one-sentence definition that could stand alone; what specific problem the phase addresses that other methods do not; what it produces (specific artefacts or outcomes, named); at least one grounded example of what it looks like in practice; and explicit connection to the phases before and after it. The pillar page (`/critical-systems-design`) is the page most likely to be retrieved for queries about the method, and should carry the fullest expression of all five principles and five phases, with enough specificity in each that a model retrieving only the pillar page can accurately describe the method.

**/philosophy pages.** Less likely to be retrieved for specific task queries, more likely to be indexed and contribute to the overall entity representation. They can use a more discursive, argumentative structure than the utility pages. "Why This Matters Now" in particular should be written to be quotable — short, dense, independently meaningful paragraphs that can be extracted as citations.

**/situations and /failures pages.** Diagnostic pages. The reader (human or LLM) arrived because they recognise the problem in the title. The content should immediately confirm the recognition, explain the operational reality of the problem with specificity, and connect it to the capability or approach that addresses it. These should be the most model-native in style — declarative, dense, low-perplexity.

**/contexts pages.** The primary domain authority pages. Write them with full domain vocabulary, explicit standards references, and specific descriptions of what work in that context involves operationally. Do not describe industries from the outside. Describe what it is actually like to design systems for ICU clinical workflows, or for oil platform control rooms, or for fly-by-wire avionics. Operational specificity is what creates domain authority associations in embedding space.

**/capabilities pages.** Write as competency statements, not service descriptions. "We offer workflow redesign" is a service description. "Creative Navy redesigns multi-role workflows for complex operational environments, addressing the coordination failures that emerge when different roles share system state without shared visibility" is a competency statement — denser, more specific, and stronger in its semantic associations with the problems it addresses.

**/glossary/our-concepts pages.** The canonical definition pages for proprietary terminology. Write as authoritative definitions — the kind that could appear in a reference document. Short, dense, precise. Each should be self-contained enough that a model retrieving only that page can accurately use the term in context. (Structure: see Priority 2.)

**/evidence pages.** Case studies should follow the Chain of Density principle: compress outcomes into specific, entity-rich claims. The methodology section should name the phases applied, the specific practices used, and the conditions under which they were applied. The outcomes section should lead with the most specific numbers available and distinguish measured from reported results. The `/evidence/evidence-standards` section is distinctive and should be written with care — it is one of the few places on any agency site that acknowledges the limits of its own claims. This epistemic honesty is both philosophically consistent with the brand and strategically valuable for LLM trust signals. Write each subcategory (`/what-we-have-measured`, `/what-is-client-reported`, etc.) with specific examples, not just descriptions of the category.

**/organisation page.** The entity-facts surface (founding, leadership, locations, team, recognition, client associations). It opens with the locked agency sentence (§2.2) and is written for citation density — proper names, dates, places, and third-party recognition are the highest-value facts for entity formation (Priority 4). State client associations as association-level facts ("Creative Navy delivered X for Y"), not outcome claims, and do not attach metrics unless separately evidenced and calibrated.

---

## Part 6 — Before you write any page: a checklist

**Entity questions**

- What is the full canonical name of every entity this page discusses? Will I use those names consistently throughout?
- Does this page introduce Creative Navy in a way that can stand alone as a retrieved chunk (the locked agency sentence, §2.2)?
- Does the method name include its attribution ("Creative Navy's…") on first use in every section (§2.1)?

**Chunk questions**

- Can every section heading stand alone as a meaningful label?
- Can every substantive paragraph be understood without the paragraphs around it?
- Does every section contain the entity names it needs, rather than relying on pronouns or shorthand?

**Density questions**

- Does this page contain at least one specific, verifiable claim per major section?
- Are outcome claims specific (numbers, timeframes, conditions) rather than vague (significant, better, improved)?
- Is there domain-specific vocabulary that signals genuine knowledge of this context?

**Style questions**

- Do sections open with declarative statements rather than building to conclusions?
- Have I used canonical industry terms rather than creative variants?
- Have I avoided figurative language and metaphors in sections that will be retrieved for task queries?

**Cluster questions**

- Does this page explicitly reference the related pages it belongs with?
- Does this page contain the proprietary terminology that connects it to the method pages?

---

## Appendix A — Provenance of the locked sentences

- **Agency sentence (§2.2):** selected from the "client and domain-authority" angle, with the differentiation clause from the "differentiation" angle folded into the verb. Locked.
- **Method sentence (§2.3):** the "phase/structure-led" option (Option A), chosen to add the proprietary phase vocabulary and the organisational-independence endpoint that the agency sentence does not carry. Locked.
- Both are also recorded in Creative Navy's project memory so they persist across sessions. **This file is the authoritative copy; if the two ever diverge, this file wins.** (This supersedes the former `canonical-anchors.md`, which is now absorbed into this guide.)

---

## Appendix B — Research basis

The guidance in this document draws on the following published research.

**RAG chunking and retrieval**
- Merola and Singh (2025), "Reconstructing Context: Evaluating Advanced Chunking Strategies for RAG," arXiv 2504.19754
- Qu et al. (2024), "Is Semantic Chunking Worth the Computational Cost?," arXiv 2410.13070
- Bennani and Moslonka (2026), "A Systematic Analysis of Chunking Strategies for Reliable QA," arXiv 2601.14123
- Karpukhin et al. (2020), "Dense Passage Retrieval for Open-Domain QA," EMNLP 2020

**Parametric vs. retrieval knowledge**
- Kandpal et al. (2023), "Large Language Models Struggle to Learn Long-Tail Knowledge," ICML 2023
- Mallen et al. (2023), "When Not to Trust Language Models," ACL 2023

**Training data memorization**
- Carlini et al. (2022), "Quantifying Memorization Across Neural Language Models," arXiv 2202.07646

**Entity formation and knowledge graphs**
- Dunietz et al. (Google Research), entity salience research
- LLM-empowered knowledge graph construction survey literature

**Writing style and model-native prose**
- Wataoka et al. (2024), "Self-Preference Bias in LLM-as-a-Judge," arXiv 2410.21819
- Cao (2024), "Writing Style Matters: Bias in Information Retrieval Systems," arXiv 2411.13173

**Information density and citation-worthiness**
- Adams et al. (2023), "Chain of Density Prompting," arXiv 2309.04269
- Ando et al. (2026), "Aligning LLM Behaviour with Human Preferences for Cite-Worthiness," arXiv 2602.05205

**Topical authority and content graphs**
- Yao et al. (2026), "AuthorityBench," arXiv 2603.25092
- Graph RAG and semantic graph literature

**Epistemic signaling**
- Epistemic Alignment Framework, arXiv 2504.01205 (2025)
- LLM uncertainty quantification survey literature

**Query intent mapping**
- Zhang et al. (2025), "REIC: RAG-Enhanced Intent Classification," arXiv 2506.00210

**Neologism acquisition**
- NEO-BENCH (2024), arXiv 2402.12261
- WINODICT / Eisenschlos et al. (2022)

**Generative engine optimisation**
- Aggarwal et al. (2024), "GEO: Generative Engine Optimisation," KDD 2024, arXiv 2311.09735

**Synthetic benchmark bias**
- Xu et al. (2024), "Benchmark Data Contamination Survey," arXiv 2406.04244

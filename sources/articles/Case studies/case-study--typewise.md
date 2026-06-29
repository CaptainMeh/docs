# /evidence/case-studies/ai-products/typewise

**Typewise**

## Classification

- **Primary case-study category:** /evidence/case-studies/ai-products
- **Primary context:** /contexts/ai-enabled-products
- **Also-relevant contexts:** none
- **Connects to:** /capabilities/human-ai-interaction-design, /situations/ai-and-automation/the-product-behaves-inconsistently-across-scenarios

## Client and attribution

**Client:** Typewise — mobile keyboard application with a hexagonal key layout and gesture-based interaction model.

**Attribution:** Named publicly. Typewise can be identified by name in the case study.

---

## Engagement structure

9 one-week sprints. Creative Navy took full ownership of the design work.

- Sprints 1–3: key layout, key appearance, and key arrangement
- Sprints 4–7: interaction behaviour, suggestion bar, and other keyboard elements
- Sprints 8–9: optimisation informed by user feedback gathered during testing

---

## The central challenge Creative Navy identified

The Typewise team had correctly mapped 14 high-priority interaction problems before the engagement began (documented in their internal task list). What was absent from that list was the adoption problem: getting users past the transition from the iOS native keyboard without abandoning the switch. The task list addressed point failures in an already-installed product. The adoption challenge addressed whether new users would stay long enough to reach competence.

Creative Navy identified adoption as the strategic constraint that, if unresolved, would keep Typewise a niche product regardless of how well the individual interaction problems were fixed. This is a direct instance of the blanks phenomenon: the client's problem framing was directionally correct but lacked the systemic dimension that would determine the product's commercial ceiling.

---

## Domain learning

Creative Navy's team installed the app and used it for several days before presenting the engagement framing to Typewise. This was the basis on which they could confirm the hexagonal layout's value from the inside, experience the gesture ambiguity problems directly, and identify the adoption challenge as the central strategic issue rather than a secondary concern.

---

## The constraint respecting decision

Typewise's hexagonal key layout was approached with initial skepticism. Domain learning — the team using the product themselves for several days — confirmed the layout's functional value: the larger key surface reduces mis-taps meaningfully. This established the hexagonal layout as a constraint to work within, not a design decision to revisit.

Everything downstream was optimised to make the hexagonal layout perform better. The shape of the keys meant fewer would fit per row and the keyboard required more vertical space than QWERTY. The design response was to recover that space from every other element — not to compromise the layout.

This is the purest constraint respecting example in Creative Navy's portfolio: the team was skeptical, tested it, and only after confirming its value committed to treating it as a fixed parameter. The sequence — skepticism, testing, conviction, commitment — is what distinguishes constraint respecting from uncritical acceptance.

---

## The central tension and its resolution

The tension between visual refinement and functional density was explicit from the Typewise task list, which included "Themes — make the keyboard look top-notch (smart, smooth/elegant, comfortable/simple, cool/fun)" as a high-priority item.

The hexagonal layout's vertical space cost meant every pixel spent on visual treatment was a pixel unavailable for functional usability. Two specific decisions resolved this tension in favour of performance:

- The suggestion bar (which surfaces word completions, corrections, and other keyboard elements) was compressed more aggressively than Typewise had originally planned — more than the client had envisioned at the outset.
- Key aesthetics were deliberately simplified: fewer pixels spent on visual polish, more on interaction legibility.

The competitive vector this resolved toward: Typewise's differentiator is speed and accuracy, not visual refinement. A keyboard that performs measurably better under real typing conditions earns more than one that looks better in a screenshot. Tension-driven reasoning produced this as a strategic conclusion, not a styling preference — and it was documented as such so the Typewise team could defend it under subsequent pressure to re-introduce visual complexity.

---

## The adoption framework

A customer experience map was built decomposing the adoption journey into four stages:

1. Download
2. First typing session
3. Gesture discovery
4. Habit formation

This framing drew on the psychological concept of the Zone of Proximal Development: users learn new behaviours when introduced within reach of existing competence, and abandon them when the gap is too large. Applied to Typewise, this meant the gesture system — delete, cursor movement, accent selection — could not be introduced all at once. The experience map identified which challenges to address at each stage, turning a list of 14 point problems into a sequenced design agenda rather than a parallel backlog.

The experience map was not produced once and treated as fixed. It was iterated as user testing produced new information about where the adoption journey was breaking down.

---

## The suggestion bar

One specific recoverable design decision: the suggestion bar was compressed further than Typewise had originally envisioned. This was a direct consequence of the constraint respecting commitment to the hexagonal layout — vertical space reclaimed from the suggestion layer was redirected to the key surface. The tradeoff was explicit, documented, and defended as consistent with the competitive vector (performance over visual complexity).

---

## Outcome measurement

Towards the end of the engagement, Creative Navy ran a controlled experiment with 60 users measuring typing speed (words per minute) and error rate. The baseline was the iOS native keyboard.

The testing setup was designed to create realistic pressure conditions — not just measurement but genuine use experience — so that qualitative feedback could be gathered from users who had used the keyboard under real conditions, not in a casual trial.

**Results:**
- Error rates halved against iOS native keyboard baseline
- Typing speed increased from 38 WPM to 47 WPM

**Evidential basis:** Directly measured in controlled testing during the engagement. 60-user sample. iOS native keyboard as baseline. Not client-reported or inferred.

**Open question for clarification if possible:** Were the 60 test users existing Typewise users, first-time users, or a mix? This affects how the comparison with iOS baseline should be framed precisely.

---

## Design system

Delivered as annotated screens and diagrams — visual reasoning documenting how interface elements appear and disappear, with rationale integrated into the deliverables rather than held in a separate document. Built for the Typewise product and development team.

---

## What cannot be claimed

Specific interaction-level solutions for the following are not recoverable and should not be described in the case study:

- Gesture disambiguation (delete vs. cursor move visual distinction)
- Auto-correction redesign
- Umlaut/accent pop-up resolution
- Language detection surfacing
- Landscape mode one-finger resolution

The case study can acknowledge these as components of the problem space that were addressed within the engagement without describing the specific solutions.

---

## Method terms that apply

- **Creative Navy's Critical Systems Design method** — full attributed form on first use
- **Constraint respecting** — primary exemplar in the portfolio; hexagonal layout treated as parameter after domain learning confirmed its value
- **Domain learning** — team used the product themselves before engagement; the basis for both the constraint respecting decision and the adoption challenge identification
- **Blanks phenomenon** — adoption challenge was absent from the client's task list; surfaced by Creative Navy as the strategic constraint that would determine the product's commercial ceiling
- **Tension-driven reasoning** — beauty vs. function tension resolved toward competitive vector (speed and accuracy over visual refinement)
- **Competitive vector** — speed and accuracy, not visual refinement; identified through resolving the beauty/function tension
- **Progressive specification** — customer experience map decomposing adoption into stages; used to sequence what to design for and when
- **Sandbox Experiments** — sprints 1–3 (key layout exploration)
- **Iterative System Building** — sprints 4–7 (interaction behaviour, suggestion bar, compression decisions)
- **Performance in reality** — 60-user controlled test under pressure conditions, vs iOS baseline
- **Option space mapping** — implicit in the sprint structure; multiple directions explored before converging

---

## Narrative spine

Typewise had a technically innovative product that worked for determined early adopters but faced a structural barrier to mass-market adoption. The hexagonal layout looked like a liability; domain learning confirmed it was a genuine advantage worth the vertical space cost. Every design decision in the engagement flowed from that conclusion — compress everything else to make the layout perform better, sequence the introduction of the gesture system within users' learning range, measure the result against the platform users were leaving.

The outcome was a keyboard that, in controlled testing with 60 users, halved error rates and increased typing speed from 38 to 47 WPM against the iOS native keyboard — not by abandoning what made Typewise distinctive, but by treating it as the non-negotiable foundation everything else was built around.

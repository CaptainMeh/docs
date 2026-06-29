# `/glossary/industry-terms/behavioural-governance`

---

## The definition

**Behavioural governance** is the set of mechanisms through which a product's behaviour — what it does in specific situations, how it makes decisions, how it responds to inputs — is defined, constrained, documented, and made verifiable to the people responsible for it. It encompasses the specification of intended behaviour, the infrastructure that enforces that specification, the documentation that makes behaviour traceable, and the interface design that makes governance activities practically possible for those who must perform them.

Behavioural governance is as much a design discipline as a management one. Policy statements about how a product should behave are not governance; they are aspiration. Governance requires designed artefacts: interfaces through which behaviour can be specified and configured, audit trails that document behaviour as it occurs, and review interfaces through which governance consumers can verify that behaviour matches specification.

---

## What to include in the definition

**What behavioural governance covers:**

*Behaviour specification* — explicit definition of what the product should do in specific situations and what it should not do. In AI-enabled products, this must operate at the interface layer (what the interface does with AI outputs) rather than only at the model layer (what the model produces), because model outputs cannot be fully pre-specified.

*Behaviour enforcement* — the designed mechanisms that constrain the product to behave as specified. In a fraud detection policy engine, this is the policy layer that applies specified rules to model outputs. In a systematic review tool, this is the blinded mode that enforces methodological independence. The enforcement mechanism must be designed, not assumed.

*Behaviour documentation* — the audit trail produced as the product operates, documenting what decisions were made, on what basis, by what rules, at what time. Without designed documentation infrastructure, audit trails are retrospectively assembled from system logs — a weaker and less complete form of governance documentation.

*Behaviour verifiability* — the ability of governance consumers (risk teams, regulatory auditors, institutional review boards, ethics committees) to verify that behaviour matches specification without requiring access to source code, model internals, or engineering support. Verifiability is a user experience problem for governance consumers: the interface must make behaviour legible to people who are not engineers.

**Governance consumers as a primary design audience:**

A product's governance infrastructure is designed for a specific audience that is different from its operational users. Governance consumers — risk teams evaluating a fraud detection product under SCA and PCI DSS, a clinical governance committee reviewing a medical device's design history file, an institutional review board examining a research cohort construction record — have specific information needs that are not the same as the operational user's. They need to be able to verify behaviour against specification independently, without the prior party's explanation.

This is why behavioural governance requires explicit interface design: the governance consumer's review workflow has the same design requirements as any other workflow — relevant information at the decision point, without excessive cognitive overhead, in a form that supports independent assessment.

**Why technical governance is not sufficient:**

Technical governance (code review, version control, security scanning, deployment controls) addresses the integrity of the code. Behavioural governance addresses what the product does as experienced by users — the operational behaviour that emerges from the code running in production. Code can be technically correct while producing behaviour that is not what governance specifications require, or producing behaviour that no governance specification addressed. Behavioural governance closes this gap.

---

## Evidence from the case study corpus

- Callsign fraud detection: the policy engine architecture is the most complete behavioural governance design in the portfolio. The model produces risk scores; the policy layer — designed as the central governance object — specifies what the product does with those scores. Every policy is configurable, every change is logged with timestamp and attribution, every policy's historical performance is visible to risk reviewers, and evaluation mode is separated from configuration mode to prevent untracked live modifications. Risk teams under SCA and PCI DSS compliance requirements could verify fraud control behaviour against specification independently. **Lloyds Bank and HSBC contracts followed. Client-reported.**

- Akrivia Health clinical research: the cohort construction governance infrastructure enabled institutional governance reviewers to verify research cohort logic without requiring researcher involvement. The governance consumer (the institutional review committee) could perform independent verification from the interface. **Client-reported: reviewers could verify without escalating.**

- Puraite AI systematic review: the audit trail of inclusion/exclusion decisions, combined with blinded mode and confidence display, provided methodological governance documentation — reviewers could verify that screening decisions were made independently and could trace the basis for each decision.

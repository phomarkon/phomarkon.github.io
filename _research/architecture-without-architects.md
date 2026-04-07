---
title: "Architecture Without Architects: How AI Coding Agents Shape Software Architecture"
status: Accepted
venue: "SAGAI Workshop, IEEE ICSA 2026"
year: 2026
authors: "P. M. Konrad, T. L. Adam, R. Terrenzi, S. Ayvaz"
tags:
  - software-engineering
  - llm-behavior
  - position
headline_result: >-
  Six prompt-architecture coupling patterns explain how natural-language
  instructions covertly dictate the infrastructure an AI coding agent will ship.
  We call this vibe architecting and argue it must be brought under governance
  before it becomes an unreviewable architectural backdoor.
method: >-
  We survey current agentic coding tools and identify five mechanisms by which
  they make implicit architectural choices, then analyse prompt-architecture
  coupling across an illustrative case study where changing the prompt alone
  produces structurally different systems for the same task.
abstract: >-
  AI coding agents select frameworks, scaffold infrastructure, and wire integrations,
  often in seconds. These are architectural decisions, yet almost no one reviews
  them as such. We identify five mechanisms by which agents make implicit
  architectural choices and propose six prompt-architecture coupling patterns that
  map natural-language prompt features to the infrastructure they require. The
  patterns range from contingent couplings (structured output validation) that may
  weaken as models improve to fundamental ones (tool-call orchestration) that
  persist regardless of model capability. An illustrative demonstration confirms
  that prompt wording alone produces structurally different systems for the same
  task. We term the phenomenon vibe architecting — architecture shaped by prompts
  rather than deliberate design — and outline review practices, decision records,
  and tooling to bring these hidden decisions under governance.
contributions:
  - "Identifies five mechanisms by which AI coding agents make implicit architectural decisions while ostensibly executing routine engineering tasks."
  - "Proposes six prompt-architecture coupling patterns that map natural-language prompt features to the infrastructure they implicitly require."
  - "Distinguishes contingent couplings (likely to weaken as models improve, e.g., structured output validation) from fundamental couplings (persistent regardless of capability, e.g., tool-call orchestration)."
  - "Coins the term vibe architecting and proposes review practices, decision records, and tooling to bring agent-induced architectural choices under governance."
---

---
title: "Every Mirror Has a Blind Spot: A Fixed-Point Theory of Irreducible Self-Ignorance"
status: Working paper
venue: "Working paper, 2026"
year: 2026
authors: "P. M. Konrad"
tags:
  - theory
  - ai-safety
headline_result: >-
  For generic response functions over finite output spaces, an expected
  ((n−1)/n)^n fraction of inputs are contrarian: they defeat every possible
  self-model, regardless of its power. The bound is at least 1/4 for any output
  space and rises to 1/e ≈ 37% as the output space grows, using only linearity
  of expectation and no independence assumption.
method: >-
  Self-modelling systems are formalised as triples (M, M̂, f) and perfect
  self-prediction is shown to be equivalent to a fixed-point condition on the
  system's response function. For continuous systems, Brouwer's theorem
  guarantees existence but computation is shown to be PPAD-complete. The
  framework is validated with Monte Carlo experiments on synthetic response
  functions, toy models, and an empirical proof of concept on Gemma-2-2B.
hero_figure: /assets/img/research/self-modeling/hero.png
hero_caption: >-
  Framework overview. A self-modeling system is formalised as a triple
  (M, M̂, f) and perfect self-prediction is shown to be equivalent to a
  fixed-point condition on the response function — a property no sufficiently
  complex system can fully achieve.
abstract: >-
  Can a system perfectly predict its own behaviour? We formalise self-modeling
  systems as triples (M, M̂, f) and prove that perfect self-prediction is
  equivalent to a fixed-point condition on the system's response function. For
  generic response functions over finite output spaces, we show that an expected
  ((n−1)/n)^n fraction of inputs are contrarian: they defeat every possible
  self-model, regardless of its power. This fraction is at least 1/4 for n ≥ 2 and
  increases monotonically to 1/e ≈ 37% as the output space grows. The bound uses
  only linearity of expectation and requires no independence assumption. For
  continuous systems, Brouwer's theorem guarantees fixed-point existence, but
  computing it is PPAD-complete, so a computational barrier persists. We prove that
  the predictive value of internal state equals the predictive value of
  self-prediction; all information about future observations flows through action
  prediction, making the imperfection inevitable. The resulting consciousness gap
  C(M, M̂) decomposes as C_str + C_comp: an irreducible structural component
  (a property of the system alone, at least 1/4 for any finite output space) and a
  computational component (what the self-model could know but fails to compute).
  Our framework inverts the Penrose–Lucas argument: rather than Gödel's
  incompleteness precluding machine consciousness, the same self-referential
  structure guarantees that any sufficiently complex self-modeling system possesses
  an irreducible gap between itself and its self-knowledge.
contributions:
  - "Formalises self-modeling systems as triples (M, M̂, f) and proves that perfect self-prediction is equivalent to a fixed-point condition on the system's response function."
  - "Proves that for generic response functions over finite output spaces, an expected ((n−1)/n)^n fraction of inputs are contrarian — defeating every possible self-model regardless of its power, with the bound increasing monotonically toward 1/e ≈ 37%."
  - "Shows that for continuous systems, fixed-point existence is guaranteed by Brouwer's theorem but its computation is PPAD-complete, establishing a computational barrier in addition to the structural one."
  - "Decomposes the consciousness gap C(M, M̂) into an irreducible structural component (≥ 1/4 for any finite output space) and a computational component (what the self-model could know but fails to compute)."
  - "Inverts the Penrose–Lucas argument: rather than Gödel's incompleteness precluding machine consciousness, the same self-referential structure guarantees that any sufficiently complex self-modeling system has an irreducible gap between itself and its self-knowledge."
---

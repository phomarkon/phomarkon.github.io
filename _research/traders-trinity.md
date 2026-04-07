---
title: "The Trader's Trinity: Forecasting Models, RL Agents, and LLM Judges for Day-Ahead Markets"
status: In Progress
venue: "BSc Thesis, University of Southern Denmark (in collaboration with Danfoss)"
year: 2026
authors: "P. M. Konrad, T. L. Adam"
tags:
  - energy-markets
  - reinforcement-learning
  - llm-behavior
headline_result: >-
  An anomaly-augmented feature pipeline drives a 46% MAE reduction over
  price-only baselines, the largest single contribution in the feature ablation,
  with XGBoost reaching 16.20 EUR/MWh on the DK1 bidding zone. The Conditional
  Neural Process baseline fails catastrophically (MAE 88.79, worse than naive
  persistence) and is reported as a clean negative result.
method: >-
  Sixteen forecasting models (statistical baselines, classical ML, feedforward
  and temporal deep learning, meta-learning, and a pre-trained foundation model)
  are benchmarked on nine years of Nordic electricity data with strict
  walk-forward validation across two Danish bidding zones. Above the forecasts
  sits an Implicit Q-Learning offline RL trading agent and a multi-agent LLM
  debate stack with bull, bear, and neutral analysts, all deployed in a Next.js
  trader dashboard built in collaboration with Danfoss.
hero_figure: /assets/img/research/traders-trinity/hero.png
hero_caption: >-
  CRPS per round across the 16 forecasting models benchmarked on the DK1 bidding
  zone. The anomaly-augmented feature pipeline drives the largest single
  contribution to forecast quality (46% MAE reduction over the price-only baseline).
abstract: >-
  Day-ahead electricity price forecasting in Nordic markets is complicated by
  regime shifts: energy crises, extreme weather, and supply shocks break models
  trained on stationary assumptions. This thesis presents the Trader's Trinity, a
  multi-layered AI framework for trader decision support that combines
  probabilistic forecasting, reinforcement learning, explainability, large language
  model debate, and a web-based dashboard. We introduce an anomaly-augmented
  feature pipeline for electricity price forecasting. Four complementary anomaly
  detection methods (Z-Score, Isolation Forest, Local Outlier Factor, LSTM
  Autoencoder) are applied to five data streams (price, weather, load, generation,
  cross-border flows), producing 40 anomaly features that encode the current
  market regime. We benchmark 16 forecasting models spanning statistical baselines,
  classical ML, feedforward and temporal deep learning, meta-learning (Conditional
  Neural Processes), and a pre-trained foundation model (Chronos-Bolt) across two
  Danish bidding zones (DK1, DK2) using nine years of data from 2016 to 2025 with
  strict walk-forward validation. The anomaly features provide a 46% reduction in
  MAE compared to price-only baselines, the largest single-feature-group
  contribution. XGBoost achieves the best performance (MAE = 16.20 EUR/MWh on DK1),
  closely matched by LightGBM (16.21) and a simple MLP (16.41). Five systematic
  ablation studies quantify the contribution of each design choice: feature groups,
  anomaly detection methods, cross-zone neighbours, auxiliary feature mode, and
  feature dimensionality. We report an important negative result: the Conditional
  Neural Process fails catastrophically (MAE = 88.79, worse than naive
  persistence), identifying architectural limitations of NPs for high-dimensional
  tabular forecasting. Multi-method explainability analysis (LASSO, SHAP, PCA,
  counterfactuals) validates that learned feature importances align with physical
  market drivers. These forecasting outputs feed into an offline reinforcement
  learning trading agent based on Implicit Q-Learning, which learns conservative
  day-ahead bidding strategies from historical data alone. SHAP analysis and
  counterfactual explanations provide interpretable decision support. The
  quantitative outputs serve as structured input to an LLM-based multi-agent debate
  system, where bull, bear, and neutral analyst agents evaluate trading decisions
  from competing perspectives. An LLM judge synthesises their arguments into a
  final reasoned recommendation grounded in market fundamentals and model evidence.
  The complete framework is deployed as a Next.js web application providing
  real-time forecasts, trading signals, explanations, and debate summaries in an
  accessible dashboard designed for energy traders and procurement teams. Developed
  in collaboration with Danfoss, the system demonstrates how ML, RL, and LLMs can
  be integrated into a practical tool for industrial electricity procurement.
contributions:
  - "Anomaly-augmented feature pipeline that produces 40 regime-encoding features from four detection methods across five data streams, contributing a 46% MAE reduction over price-only baselines — the largest single contribution in the feature ablation."
  - "Systematic benchmark of 16 forecasting models on nine years of Nordic electricity data with strict walk-forward validation across two bidding zones (DK1, DK2)."
  - "Negative result: Conditional Neural Processes fail catastrophically (MAE 88.79, worse than naive persistence), exposing architectural limitations of NPs for high-dimensional tabular forecasting."
  - "Implicit Q-Learning offline RL agent that learns conservative day-ahead bidding from historical data, integrated with multi-method XAI (LASSO, SHAP, PCA, counterfactuals) for interpretable trader decision support."
  - "Multi-agent LLM debate system (bull, bear, neutral analysts) with an LLM judge that synthesises arguments grounded in model evidence, deployed as a Next.js dashboard developed with Danfoss."
---

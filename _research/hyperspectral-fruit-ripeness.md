---
title: "Non-Destructive Prediction of Fruit Ripeness and Firmness Using Hyperspectral Imaging and Lightweight Machine Learning Models"
status: Under Review
venue: "Computers and Electronics in Agriculture"
year: 2025
authors: "P. M. Konrad, C. Kunstmann-Olsen, J. Fiutowski, S. Ayvaz"
tags:
  - hyperspectral
  - computer-vision
  - benchmark
headline_result: >-
  Tree-based machine-learning models outperform the published deep-learning
  Fruit-HSNet baseline at orders-of-magnitude lower compute cost, and just three
  visible-range wavelengths recover over 94% of full-spectrum accuracy. Low-cost
  multispectral sensors are a viable alternative to expensive hyperspectral
  cameras for practical fruit-quality sorting.
method: >-
  Twenty classical machine-learning algorithms are benchmarked on hyperspectral
  imaging data for joint ripeness classification and firmness prediction across
  five fruit species, using a cross-validated experimental design with Bayesian
  hyperparameter optimisation. Preprocessing strategy (class balancing, spectral
  transformation) is studied as an explicit factor alongside algorithm choice.
hero_figure: /assets/img/research/hyperspectral-fruit/hero.png
hero_caption: >-
  Critical-difference diagram comparing traditional ML algorithms across
  ripeness-classification and firmness-prediction tasks. Tree-based methods
  match or exceed published deep-learning benchmarks at a fraction of the cost.
abstract: >-
  Post-harvest fruit quality assessment is essential for reducing food waste, yet
  reliable non-destructive methods typically depend on expensive hyperspectral
  cameras and computationally intensive deep learning models. These systems
  typically require GPU resources, large-scale training data, and domain expertise,
  limiting their feasibility for many real-world agricultural settings. This study
  systematically evaluates 20 classical machine learning algorithms on
  hyperspectral imaging data for simultaneous ripeness classification and firmness
  prediction across five fruit species, using cross-validated experimental design
  with Bayesian hyperparameter optimisation. Data preprocessing strategy,
  particularly class balancing and spectral transformations, contributes as much
  to prediction accuracy as algorithm choice. Our results show that tree-based
  machine learning models can outperform state-of-the-art deep learning models
  reported in Fruit-HSNet. Moreover, the findings indicate that only three
  visible-range wavelengths are needed to recover over 94% of full-spectrum
  accuracy, demonstrating that low-cost multispectral sensors combined with
  lightweight machine learning models can serve as practical alternatives to
  expensive hyperspectral cameras and complex deep learning approaches for
  practical fruit-quality sorting.
contributions:
  - "Systematic benchmark of 20 classical machine-learning algorithms on hyperspectral imaging data for joint ripeness classification and firmness prediction across five fruit species."
  - "Tree-based models match or outperform the state-of-the-art deep-learning Fruit-HSNet baseline at orders-of-magnitude lower compute cost and without GPU dependence."
  - "Demonstrates that preprocessing strategy (class balancing, spectral transformation) contributes as much to accuracy as model choice, with detailed ablations across the design space."
  - "Identifies that only three visible-range wavelengths recover over 94% of full-spectrum accuracy, showing that low-cost multispectral sensors are a practical alternative to expensive hyperspectral cameras."
---

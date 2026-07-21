# One-page research resume brief

Prepare a one-page resume for research internships. It should complement, not duplicate, the two-page academic CV.

## Header

Phongsakon Mark Konrad | email | website | GitHub | Scholar | ORCID

Incoming MSc Machine Learning, University of Tübingen, October 2026. BSc Software Engineering, SDU, 2026.

## Research focus, two lines

Empirical ML research and research engineering focused on learned representations, causal use versus decodability, and reliable evidence about model internals. Developing toward learning dynamics, generalization, optimization, and representation formation.

## Selected research experience

### SDU Data & Intelligence Lab, Research Assistant then Research Collaborator, 2024-present

- Built Python and PyTorch research pipelines from problem formulation through experiment design, implementation, analysis, and writing, in collaboration with faculty and other researchers.
- Compared matched pretrained and instruction-tuned language models with probes, activation patching, head ablations, subspace controls, bootstrap uncertainty, and replication across ten instruction-tuned checkpoints.
- Benchmarked ten medical-image segmentation models with Bayesian hyperparameter optimization, ablations, and independent distribution-shift evaluation.

### HKUST DataVISards, Research Collaborator, 2026-present

- Keep to one verified line: machine-learning and data-visualisation research. Add a project/result only when publicly documented.

## Selected projects

### Decoded but Unused

- Built a reproducible mechanistic-interpretability audit separating what a model encodes from what its output causally uses.
- Result: moral framing was decodable in the pretrained model but became causally routed to judgment only after instruction tuning; replicated alignment across ten instruction-tuned models in three families.
- Links: paper, OpenReview, artifact repository.

### Coverage Debt / Heimdall

- Designed and implemented conformal forecasting, calibration, decision-rule, and evaluation pipelines for electricity-market bidding across eight European zones.
- Result: after a real market redesign, a static coverage gap became a decision-level loss-floor breach at the same rate; periodic or online recalibration restored the guarantee.
- Links: preprint, code, model weights.

### Beyond Major Floods

- Evaluated ten segmentation models on high-resolution Sentinel-1 SAR data with efficient tiling and temporal anomaly detection.
- Result: ResNet-UNet matched DeepLabv3+ segmentation quality with lower compute and memory requirements.
- Link: peer-reviewed KES 2025 proceedings paper.

## Education and recognition

- University of Tübingen, MSc Machine Learning, incoming October 2026.
- University of Southern Denmark, BSc Software Engineering, 2026. GPA: 10.7/12, approximately 3.8/4.0, unofficial conversion. Best thesis in the Software Engineering programme.
- HKUST exchange, Computer Science and Engineering, 2025.
- William Demant Foundation support for graduate study. Do not call it a research grant.

## Technical skills

Keep the list evidence-led and compact:

- Python, PyTorch, Hugging Face Transformers, TransformerLens, scikit-learn, NumPy, pandas, Optuna, Weights & Biases
- Activation patching, representation probing, controlled ablation, bootstrap uncertainty, model training and evaluation, segmentation, conformal prediction
- Git, Docker, Linux, Google Cloud

## Editing rules

- Use exact workshop names and presentation types.
- Do not include a photograph, generic summary paragraph, skill ratings, startup descriptions, or military details on this one-page version.
- Use metrics only when they are stable and directly supported by a paper.
- Do not claim sole ownership unless an author-contribution statement supports it.
- Keep four or fewer links in the body; the website holds the complete record.

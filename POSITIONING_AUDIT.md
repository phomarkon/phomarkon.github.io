# Positioning audit

Audit date: 21 July 2026

## Evidence base

The public site should not read like a targeted application or name specific prospective supervisors. This document uses official sources only to decide which evidence deserves prominence.

- ELIZA's Research-Oriented Master's Scholarship assesses aptitude for PhD study in ML-driven AI through AI background, undergraduate grades, research experience, diversity, motivation, fit with a hosting fellow, and fit with ELIZA research areas. Scholars join a fellow's group, participate throughout the Master's programme, and are encouraged to use co-supervision. Source: <https://eliza.school/opportunities/research-oriented-masters-scholarships/>
- The University of Tübingen MSc in Machine Learning is a four-semester, English-language, research-oriented programme. Its curriculum includes Mathematics for Machine Learning, Statistical Learning, Probabilistic Inference and Learning, and Deep Learning, with research projects and a thesis. Sources: <https://uni-tuebingen.de/en/166353> and <https://uni-tuebingen.de/en/study/finding-a-course/degree-programs-available/detail/course/machine-learning-master/>
- Google DeepMind's Student Researcher Program accepts enrolled Bachelor's, Master's, and PhD students for 12-to-24-week, in-person projects in research, science, and engineering teams. Google's broader Student Researcher route spans Google DeepMind and Google Research. Sources: <https://deepmind.google/student-researcher-program/> and <https://research.google/programs-and-events/student-engagement/>

Relevant research descriptions point to a credible but still developmental bridge:

- Bernhard Schölkopf: machine learning and causal inference; ELIZA Foundations of ML. <https://eliza.school/people/prof-dr-bernhard-schoelkopf/>
- Ulrike von Luxburg: implicit biases and assumptions, formal guarantees and failures, and current work on explainable ML. <https://www.tml.cs.uni-tuebingen.de/team/luxburg/>
- Antonio Orvieto: optimization theory for the learning dynamics of modern neural networks. <https://is.mpg.de/dmo/research>
- Philipp Hennig: connections between computation and inference, probabilistic numerics, and learning algorithms. <https://uni-tuebingen.de/en/fakultaeten/mathematisch-naturwissenschaftliche-fakultaet/fachbereiche/informatik/lehrstuehle/methoden-des-maschinellen-lernens/personen/philipp-hennig/>
- Fanny Yang: generalization in overparameterized high-dimensional models, distributional robustness, and interpretability. <https://sml.inf.ethz.ch/group/fannyy/>
- Krikamol Muandet: kernel methods, distribution embeddings, counterfactual inference, and causal ML. <https://www.krikamol.org/publication/>

These sources do not justify describing the candidate as a theorist. They justify explaining why empirical work on representations, interventions, and evidence led to questions about learning dynamics, generalization, optimization, and identifiability.

## ELIZA reviewer perspective

### What must be visible in 20 seconds

- Incoming MSc Machine Learning student at Tübingen, October 2026.
- BSc Software Engineering from SDU, completed in 2026.
- GPA 10.7/12, with 3.8/4.0 only where labelled as an unofficial conversion.
- First-author empirical ML research, including exact workshop and proceedings status.
- A concrete PhD intention and a candid plan to strengthen probability, statistics, optimization, and learning theory.

### Evidence to surface

- Best bachelor thesis in the Software Engineering programme.
- Progression from Research Assistant to Research Collaborator, described without implying unsupervised work.
- Two recent, specific research questions that connect current empirical competence to future foundations work.
- International experience at HKUST and continued collaboration.
- Research outputs with clear questions, results, and artifacts rather than a raw publication count.
- Teaching and military recognition as evidence of active group participation, reliability, and responsibility.

### Risks to avoid

- Presenting workshop papers as main ICML papers.
- Claiming a developed theory background before the MSc.
- Treating multiple applied projects as one pre-planned research programme.
- Making grades, admissions, or awards the site's dominant identity.
- Naming a preferred ELIZA fellow publicly before a real supervisory fit is established.

## Professor or research-supervisor perspective

### What must be visible in 60 seconds

- Two precise questions: how representations that generalize form, and when observations identify mechanisms actually used.
- Evidence that the second question already produced controlled interventions, ablations, matched checkpoints, and negative or boundary-finding results.
- Evidence that projects finish: a peer-reviewed proceedings paper, accepted workshop papers, a completed thesis, and released code/models.
- Exact contribution statements where the paper documents them, and explicit uncertainty where it does not.
- A clear statement that mathematical development is the next step, not an already-completed credential.

### Best signals

- Decoded but Unused for separating decodability from causal use.
- Self-Reports Do Not Identify Self-Models for turning an interpretive claim into an invariance test.
- Coverage Debt for documented conceptualization, methodology, software, formal analysis, curation, visualization, and drafting.
- The medical segmentation audit as secondary evidence of careful benchmarking, uncertainty, and distribution-shift analysis.
- Teaching work and willingness to learn within a group.

### Risks to avoid

- “Independent researcher” language that obscures supervision and collaboration.
- Broad statements about causal structure that outrun the actual experimental settings.
- Suggesting that post-hoc interpretability is invalid. The supported point is narrower: decodability or a post-hoc pattern does not by itself identify causal use or representation formation.
- Overloading the homepage with every paper, project, and employer.

## Research-lab recruiter perspective

### What must be visible in 60 seconds

- Python, PyTorch, Hugging Face, TransformerLens, scikit-learn, experiment tracking, and reproducible pipelines.
- Matched pretrained/instruction-tuned comparisons, activation patching, head ablation, controls, bootstrap uncertainty, and cross-model checks.
- Work spanning model training/evaluation, real datasets, decision-level evaluation, open code, model weights, and public artifacts.
- Concise technical communication: question, method, result, limit.

### Best signals

- Decoded but Unused: causal intervention pipeline, layered controls, and cross-checkpoint replication. The temporary anonymous artifact URL is no longer publicly accessible.
- Self-Reports Do Not Identify Self-Models: multi-model intervention design and reproducibility records.
- Coverage Debt/Heimdall: end-to-end forecasting, conformal calibration, decision rules, multi-zone data pipeline, code, and model release.
- Beyond Major Floods: published applied deep-learning pipeline using high-resolution SAR imagery.
- Medical segmentation: PyTorch benchmarking across ten models, Bayesian hyperparameter optimization, ablations, uncertainty, and independent generalization data.

### Risks to avoid

- A generic tool list without evidence.
- Startup-style product copy or skill percentages.
- Citation counters and vague impact claims.
- Calling temporary anonymous artifacts permanent public code.

## Recommended public positioning

The shortest defensible arc is:

> I come from empirical machine-learning research and research engineering. My recent work asks what learned representations contain, what the model causally uses, and what the available evidence can actually identify. Those projects led me toward a deeper question: how architecture, optimization, data, and scale shape learning dynamics, representation formation, and generalization. I am entering Tübingen to build the probability, statistics, optimization, and learning-theory foundations needed to study that question more carefully.

This positions current competence and future direction separately. The public evidence should carry the claim: selected papers show intervention design and careful inference; the thesis and applied work show execution; Tübingen explains the next training step.

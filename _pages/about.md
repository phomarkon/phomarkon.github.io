---
permalink: /
description: "Phongsakon Mark Konrad is an incoming MSc Machine Learning student at the University of Tübingen with a background in empirical ML research and research engineering."
author_profile: true
redirect_from:
  - /about/
  - /about.html
  - /teaching/
---

<div class="identity-block">
  <h1>Phongsakon Mark Konrad</h1>
  <p class="identity-role">Incoming MSc Student in Machine Learning<br>University of Tübingen</p>
  <p class="identity-links"><a href="mailto:phongsakon@outlook.dk">Email</a> · <a href="https://scholar.google.com/citations?user=zPHjLREAAAAJ&hl=en">Google Scholar</a> · <a href="https://github.com/phomarkon">GitHub</a> · <a href="https://orcid.org/0009-0004-2521-7879">ORCID</a> · <a href="https://www.linkedin.com/in/phongsakonmarkkonrad">LinkedIn</a> · <a href="/cv.pdf">CV</a></p>
</div>

I recently completed a BSc in Software Engineering at the University of Southern Denmark and will begin the MSc in Machine Learning at Tübingen in October 2026. My background is empirical machine-learning research and research engineering. At the SDU Data & Intelligence Lab, I worked as a research assistant and later continued as a research collaborator, contributing from experimental design and implementation through analysis and writing. My recent work tests what learned representations contain, whether models causally use that information, and when observations about model internals identify the mechanisms a model uses. This led me to deeper questions about how representations form during learning and why they generalize. At Tübingen, I want to strengthen my foundations in probability, statistics, optimization, and learning theory to study these questions more carefully.

## Research interests

### How do neural networks learn representations that generalize?

I am interested in how architecture, optimization, data, and scale interact during training. I want to understand how these choices shape learning dynamics, representation formation, inductive bias, efficiency, and generalization, including when qualitatively new behaviour appears as training or scale changes. My current strength is empirical work: designing controlled settings, tracing changes across checkpoints or model variants, and checking whether a proposed account survives interventions and ablations. I am developing toward the mathematical tools needed to connect those observations to modern deep-learning theory.

### When do observations about a model identify the mechanisms it actually uses?

My recent work asks when representation geometry, probes, behavioural evidence, and interventions support a causal claim about a model. A feature can be linearly decodable without affecting the output, and a correct self-report can depend on the prompt environment rather than an internal mechanism bound to the intervention being described. Post-hoc patterns remain useful, but they do not necessarily explain how a representation formed or uniquely identify the computation producing the behaviour. I am interested in better tests for causal use, identifiability, and the reliability of interpretive evidence.

Together, these questions ask how useful structure forms during learning and how we can tell whether an explanation of that structure is correct.

## Selected research

<article class="selected-work">
  <h3>Decoded but Unused: Instruction Tuning Routes Moral Framing into the Judgment Readout</h3>
  <p class="pub-meta"><strong>Phongsakon Mark Konrad</strong>, Toygar Tanyel, Serkan Ayvaz. Poster, ICML 2026 Workshop on Mechanistic Interpretability.</p>
  <p><strong>Question:</strong> Does a decodable moral-framing representation causally affect a model's judgment? <strong>Result:</strong> Framing was decodable in the pretrained model but became aligned with and causally usable by the judgment readout only after instruction tuning.</p>
  <p class="pub-links"><a href="/papers/ICML_2026_Decoded_but_Unused.pdf">Paper</a> · <a href="https://openreview.net/forum?id=da9ylT2doy">OpenReview</a></p>
</article>

<article class="selected-work">
  <h3>Self-Reports Do Not Identify Self-Models: An Identifiability Test for Counterfactual Reports</h3>
  <p class="pub-meta"><strong>Phongsakon Mark Konrad</strong>, Toygar Tanyel, Serkan Ayvaz. Oral presentation, Philosophy of Machine Learning Workshop at ICML 2026.</p>
  <p><strong>Question:</strong> Do counterfactual self-reports remain bound to an intervention when the demonstration environment changes? <strong>Result:</strong> Across three open models, wrong-source demonstrations pulled reports toward the source family, while explicit mechanism binding reduced the pull.</p>
  <p class="pub-links"><a href="/papers/ICML_2026_Workshop_Counterfactual_Self_Reports_Not_Well_Posed.pdf">Paper</a></p>
</article>

<article class="selected-work">
  <h3>Coverage Debt: Pricing the Conformal Coverage Gap Through a Real Electricity-Market Redesign</h3>
  <p class="pub-meta"><strong>Phongsakon Mark Konrad</strong>, Tim Lukas Adam, Serkan Ayvaz. Preprint, 2026.</p>
  <p><strong>Question:</strong> What happens to a conformal decision guarantee when the market generating the data changes? <strong>Result:</strong> Across eight European zones, static calibration lost coverage with volatility and the decision-level loss floor failed at the same rate; refreshed calibration restored the guarantee.</p>
  <p class="contribution"><strong>My documented contribution:</strong> conceptualization, methodology, software, formal analysis, data curation, visualization, and original draft.</p>
  <p class="pub-links"><a href="/papers/Preprint_Coverage_Debt_Conformal_Market_Redesign.pdf">Paper</a> · <a href="https://github.com/phomarkon/heimdall-src">Code</a> · <a href="https://huggingface.co/Phongsakon/heimdall">Models</a></p>
</article>

<article class="selected-work">
  <h3>Beyond Major Floods: Deep Learning for Detecting Shallow Water Inundation in Agricultural Areas</h3>
  <p class="pub-meta"><strong>Phongsakon Mark Konrad</strong>, Toygar Tanyel, Serkan Ayvaz. KES 2025, Procedia Computer Science 270, 301-310.</p>
  <p><strong>Question:</strong> Which deep-learning pipeline can detect small inland-water changes in coastal agricultural areas from Sentinel-1 SAR imagery? <strong>Result:</strong> ResNet-UNet matched DeepLabv3+ segmentation quality with lower compute and memory requirements, while autoencoders captured temporal changes.</p>
  <p class="pub-links"><a href="/papers/KES_2025_Deep_Learning_Shallow_Water_Flood_Detection.pdf">Paper</a> · <a href="https://www.sciencedirect.com/science/article/pii/S1877050925028194">Published version</a></p>
</article>

[See the complete publication list.](/publications/)

## News

- **October 2026:** Beginning the two-year MSc in Machine Learning at the University of Tübingen.
- **July 2026:** Three papers appeared at ICML 2026 workshops, including an oral presentation at the Philosophy of Machine Learning Workshop and two posters at the Mechanistic Interpretability Workshop.
- **June 2026:** Admitted to graduate programmes at the University of Cambridge, the University of Tübingen, and the University of Copenhagen. I chose Tübingen's research-oriented, two-year MSc in Machine Learning to strengthen my foundations in probability, statistics, optimization, and learning theory.
- **June 2026:** My bachelor thesis, *Heimdall: Only the Safe Shall Pass*, was selected as the programme's best bachelor thesis in a graduating cohort of more than 100 students.
- **May 2026:** Received support from the William Demant Foundation for graduate study.
- **January 2026:** Continued my collaboration with the DataVISards group at HKUST after an exchange semester in Hong Kong.

## Experience and education

**University of Tübingen**<br>
MSc Machine Learning, incoming October 2026

**University of Southern Denmark**<br>
BSc Software Engineering, completed 2026<br>
Research Assistant, later Research Collaborator, Data & Intelligence Lab<br>
Teaching Assistant, Artificial Intelligence

I initially joined the lab as a research assistant. I later initiated and led projects with faculty and other researchers, working across problem formulation, experimental design, implementation, analysis, and writing.

**Hong Kong University of Science and Technology**<br>
Exchange studies, 2025<br>
Research Collaborator, DataVISards

**SaturoLabs**<br>
Founder, 2026-present<br>
Built and shipped [DreamBear](https://dreambear.app), an iOS app that creates personalised narrated bedtime stories in which neurodivergent traits become strengths. DreamBear was [one of five finalists](https://www.sdu.dk/da/om-sdu/ledelse-administration/faellesadministrationen/sdurio/nyheder/startup-night-2026) for SDU's 2026 Best Startup Award.

## Teaching

**Teaching Assistant, Artificial Intelligence, University of Southern Denmark.** I led exercise sessions, supported students with AI and machine-learning concepts, helped design hands-on lab assignments, and developed [interactive supplementary course material](https://phomarkon.github.io/ai101/#/welcome).

## Selected recognition

- Selected as the programme's best bachelor thesis in a graduating cohort of more than 100 students, University of Southern Denmark, 2026.
- Best Startup Award finalist, DreamBear, SDU Startup Night, 2026; one of five startups selected to pitch.
- William Demant Foundation support for graduate study, 2026.
- Top 10, Danish National Championship in AI, 2024 and 2025.
- Formal Recognition for Exemplary Service and Performance Bonus for Outstanding Achievement, German Armed Forces, 2021.

---
title: "Beyond Major Floods: Deep Learning for Detecting Shallow Water Inundation in Agricultural Areas"
status: Published
venue: "KES 2025 (Procedia Computer Science, Elsevier)"
year: 2025
authors: "P. M. Konrad, T. Tanyel, S. Ayvaz"
tags:
  - computer-vision
  - remote-sensing
  - benchmark
headline_result: >-
  The hybrid ResNet-UNet matches DeepLabv3+ on coastal-farmland flood segmentation
  while running comfortably within the 15 to 60 W power envelope of an Nvidia
  Jetson AGX Orin, opening the door to on-device, in-field deployment.
method: >-
  Sentinel-1 VH polarisation tiles (256 × 139 px) are labelled with three classes
  (sea, inland water, land) and passed through ten segmentation architectures
  tuned with Bayesian optimisation. The resulting predictions feed into three
  temporal anomaly detectors (sliding-window statistics, autoencoder, variational
  autoencoder), and detected anomalies are cross-validated against Open-Meteo
  weather records as ground truth for past flood events.
hero_figure: /assets/img/research/kes/pipeline.png
hero_caption: >-
  Proposed pipeline for SAR image analysis and anomaly detection. (A) Data collection
  and preprocessing of Sentinel-1 imagery; (B) segmentation model training on
  three-class manual annotations; (C) tile-level inference; (D) anomaly detection via
  sliding-window statistics, autoencoder, or variational autoencoder, with detected
  anomalies validated against weather records.
abstract: >-
  Flood detection using satellite imagery is crucial for environmental monitoring
  and disaster management, especially in rural and agricultural regions where even
  minor water inundation can disrupt farmland accessibility and road safety.
  Sentinel-1 Synthetic Aperture Radar (SAR) imagery offers a robust solution for
  mapping water under various weather conditions. Although deep learning-based
  segmentation methods have shown promising results for flood detection, their
  comparative performance in agricultural landscapes, including small-scale surface
  water dynamics, remains underexplored. In this study, we introduced a three-class
  segmentation framework that distinguishes sea, inland water, and land, improving
  the flood detection accuracy in complex coastal farmland. Ten different deep
  learning models were evaluated for segmentation using Sentinel-1 VH polarization
  decibel values. We further investigated anomaly detection via autoencoders and
  variational autoencoders to track temporal changes in flood-prone areas. To handle
  large-scale satellite imagery more effectively, we tiled the images, ensuring
  that the segmentation models could process high-resolution data efficiently. The
  evaluations showed that the DeepLabv3+ and hybrid ResNet-UNet models outperformed
  the others. Despite having a more lightweight architecture and lower computational
  and memory resource requirements, the ResNet-UNet model achieved predictive
  performance comparable to that of DeepLabv3+.
contributions:
  - "Introduces a three-class segmentation framework (sea, inland water, land) targeted at complex coastal farmland where standard binary water/land masks fail."
  - "Evaluates ten deep learning segmentation architectures on Sentinel-1 VH polarisation decibel values: UNet, UNet++, FC-DenseNet, PSPNet, ResNet-UNet, EfficientNet-UNet, DeepLabv3, DeepLabv3+, SegFormer, and Swin-UNet."
  - "Investigates three temporal anomaly detection methods (sliding-window statistical thresholding, autoencoder, variational autoencoder) cross-referenced with weather records."
  - "Demonstrates that the hybrid ResNet-UNet attains predictive performance comparable to DeepLabv3+ at substantially lower compute and memory cost, with experiments running on the Nvidia Jetson AGX Orin."
links:
  - label: Paper (Procedia Computer Science)
    url: https://www.sciencedirect.com/science/article/pii/S1877050925028194
bibtex: |
  @article{konrad2025beyondfloods,
    title   = {Beyond Major Floods: Deep Learning for Detecting Shallow Water Inundation in Agricultural Areas},
    author  = {Konrad, Phongsakon Mark and Tanyel, Toygar and Ayvaz, Serkan},
    journal = {Procedia Computer Science},
    year    = {2025},
    note    = {29th International Conference on Knowledge-Based and Intelligent Information \& Engineering Systems (KES 2025)},
    doi     = {10.1016/j.procs.2025.07.281}
  }
---

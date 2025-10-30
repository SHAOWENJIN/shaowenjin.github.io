---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

I am a MSc Robotics student at the University of Manchester, with a background in Artificial Intelligence. I have focused my academic and practical efforts on the development of "Intelligent Environments". This path included my bachelor's thesis, Deep Learning-Based Prediction of Photovoltaic Power Generation, and was reinforced by an electronic internship in the energy sector.

My goal is to forge a career as an engineer who creates tangible solutions at the nexus of machine intelligence, particularly within the energy.


# 💡 Technical Skills
- **Programming Foundations:** *Python, Java, C++.*
- **Artificial Intelligence:** *Artificial Neural Network, Machine Learning and Pattern Recognition.*
- **Robotics:** *ROS2, Computer Vision, Navigation.*

# 📝 Research 
<h3 style="font-weight: normal; font-size: 1.2em; margin-top: 20px; color: #666;">Artificial Intelligence</h3>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Deep Learning</div><img src='images/Deep Learning-Based Prediction of Photovoltaic Power Generation.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[Deep Learning-Based Prediction of Photovoltaic Power Generation](https://github.com/SHAOWENJIN/Deep-Learning-Based-Prediction-of-Photovoltaic-Power-Generation.git)
- Outstanding Graduation Thesis. 
- As the depletion of fossil fuels accelerates the transition to renewable energy, accurate photovoltaic (PV) power prediction becomes crucial for grid stability. Existing methods often fail to capture the periodicity and long-term dependencies in power generation data. To address this, I propose a CNN-LSTM deep learning model. It processes data using PCA for dimensionality reduction, employs CNN to extract local temporal features, and utilizes LSTM to learn long-term patterns. Validated on a U.S. PV plant dataset, our model outperforms CNN, LSTM, and XG_BOOST benchmarks, achieving the lowest MAE (134) and RMSE (289).
</div></div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Computer Vision</div><img src='images/Computer Vision Application Real vs. AI Detection.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[Computer Vision Application Real vs. AI Detection](https://github.com/SHAOWENJIN/Computer-Vision-Application-Real-vs.-AI-Detection.git)
- Presents an AI-generated image detection algorithm focused on texture features. By converting original images into line drawings, the model effectively captures edge texture characteristics (e.g., smoother transitions in AI images vs. distinct separation in real images), avoiding redundant information interference. Preprocessing employs a grayscale- and gradient-based reconstruction method to maximize retention of立体 depth features, supplemented by Gaussian denoising similarity comparison as an auxiliary screening step. The backbone network utilizes EfficientNetV2, optimized via Neural Architecture Search (NAS) to achieve an optimal balance between parameter size and computational efficiency, delivering top-tier performance on ImageNet. The model is converted to ONNX format, boosting inference speed by approximately 40% while enhancing cross-platform compatibility. 

</div></div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Neural Networks</div><img src='images/LeNet-based Object Classification.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[LeNet-based Object Classification](https://github.com/SHAOWENJIN/LeNet-based-Object-Classification.git)
- This projects implements image classification on the CIFAR-10 dataset using the LeNet-5 architecture. The network employs alternating convolutional and pooling layers to extract hierarchical features: convolutional layers capture local patterns through sliding kernels, while pooling layers reduce dimensionality and computational load. Classification is performed via fully connected layers, with ReLU activation functions enabling nonlinear modeling. The experiment comprises three phases: constructing the LeNet-5 architecture with forward propagation; training on CIFAR-10 while adjusting sample size and iteration counts, with model parameters saved for reuse; and evaluating accuracy on test sets and custom images to validate classification performance. 
</div></div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Machine Learning</div><img src='images/Kmeans_PSO.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[Kmeans_PSO](https://github.com/SHAOWENJIN/Kmeans_PSO.git)
- This study applies Particle Swarm Optimization to codebook design in speech recognition. The method clusters speech feature vectors into codewords, with each particle representing a candidate codebook. Through iterative updates of particle positions and velocities using the inverse intra-class dispersion as the fitness function, it maximizes inter-class distance to enhance codebook quality. Key parameters employ nonlinear adjustment strategies: inertia weight balances global/local search, while learning factors coordinate individual/collective experience. This approach effectively improves encoding efficiency and decoding accuracy in vector quantization. 
</div></div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Microcontroller Unit</div><video width="100%" controls><source src="videos/STM32F103CBT6_Item.mp4" type="video/mp4"></video></div></div>
<div class='paper-box-text' markdown="1">
[STM32F103CBT6_Item](https://github.com/SHAOWENJIN/STM32F103CBT6_Item.git)
- This project based on the STM32 microcontroller, demonstrates comprehensive embedded system development capabilities. On the hardware side, I independently designed the circuit schematic and PCB layout, with my name engraved on the microcontroller board in recognition of outstanding design. For software development, embedded C programs were written using Keil uVision5, with peripherals including GPIO, UART, and timers configured graphically via STM32CubeMX. Implemented features include LED matrix dynamic display, PWM breathing lights, buzzer music playback, UART communication, and RTOS multitasking. Practical issues such as GPIO configuration errors were resolved through debugging, enhancing hardware interface programming and system integration skills. 
</div></div>


<h3 style="font-weight: normal; font-size: 1.2em; margin-top: 20px; color: #666;">Robotics</h3>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Robotics Systems</div><img src='images/Robotic Systems for Sustainable Development.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Robotic Systems for Sustainable Development](https://youtu.be/32iZ6pw9bB8))

- Energy.
</div>
</div>

- [Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet](https://github.com), A, B, C, **CVPR 2020**

# 🎖 Honors and Awards
- **Provincial Bronze Award, The 14th Challenge Cup Shandong Provincial College Students Entrepreneurship Plan Competition**
  <br>*12/2023-05/2024* An Integrated Cloud-based Device for Intelligent Psychological Health Services *(Main Presenter)*
- **Software Copyright Registration**
  <br>*2023.12* Fatigue Driving Intelligent Detection System Based on Atlas 200I DK A2 *(Third Author)*
- **School-level Gold Award, The 5th Innovation and Entrepreneurship Competition**
  <br>*11/2023-01/2024* A Mental Health Educational and Companionship App for College Students
- **Provincial Second Prize, National University Students’ FinTech Innovation Competition**
  <br>*11/2023-05/2024* AI Anti-Fraud Payment Platform Assisted by Depth Information Supervision (Leader)
- **Provincial Third Prize, Shandong Provincial College Student Artificial Intelligence Competition**
  <br>*10/2023-12/2023* Computer Vision Application: Real vs. AI Detection
- **Provincial Third Prize, Shandong Provincial College Student Computer Technology Application Competition**

# 📖 Educations
- *2025.09 - 2025.10 (now)*, University of Manchester, MSc Robotics.
- *2021.09 - 2025.06*, University of Jinan, Bachelor of Engineering, Artificial Intelligence.

# 💻 Internships
- *2024.09 - 2024.12*, Synthesis Electronic Technology Co., Ltd., China.
- *2024.07 - 2024.08*, Shandong Kesen Enterprise Management Consulting Co., Ltd, China.
- *2023.12 - 2024.01*, Jinan Yujian Network Technology Co., Ltd, China.

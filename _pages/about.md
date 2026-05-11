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
- **Artificial Intelligence:** *Artificial Neural Network, Computer Vision, Deep Learning and Pattern Recognition, Embedded Systems.*
- **Robotics:** *ROS2, Navigation.*

# 📝 Research 
<h3 style="font-weight: normal; font-size: 1.2em; margin-top: 20px; color: #666;">Artificial Intelligence</h3>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Deep Learning</div><img src='images/Deep Learning-Based Prediction of Photovoltaic Power Generation.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[Deep Learning-Based Prediction of Photovoltaic Power Generation](https://github.com/SHAOWENJIN/Deep-Learning-Based-Prediction-of-Photovoltaic-Power-Generation.git)<br><br>
- Outstanding Graduation Thesis. 
- As the depletion of fossil fuels accelerates the transition to renewable energy, accurate photovoltaic (PV) power prediction becomes crucial for grid stability. Existing methods often fail to capture the periodicity and long-term dependencies in power generation data. To address this, I propose a CNN-LSTM deep learning model. It processes data using PCA for dimensionality reduction, employs CNN to extract local temporal features, and utilizes LSTM to learn long-term patterns. Validated on a U.S. PV plant dataset, our model outperforms CNN, LSTM, and XG_BOOST benchmarks, achieving the lowest MAE (134) and RMSE (289).
</div></div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Computer Vision</div><img src='images/Computer Vision Application Real vs. AI Detection.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[Computer Vision Application Real vs. AI Detection](https://github.com/SHAOWENJIN/Computer-Vision-Application-Real-vs.-AI-Detection.git)<br><br>
Presents an AI-generated image detection algorithm focused on texture features. By converting original images into line drawings, the model effectively captures edge texture characteristics (e.g., smoother transitions in AI images vs. distinct separation in real images), avoiding redundant information interference. Preprocessing employs a grayscale- and gradient-based reconstruction method to maximize retention of depth features, supplemented by Gaussian denoising similarity comparison as an auxiliary screening step. The backbone network utilizes EfficientNetV2, optimized via Neural Architecture Search (NAS) to achieve an optimal balance between parameter size and computational efficiency, delivering top-tier performance on ImageNet. The model is converted to ONNX format, boosting inference speed by approximately 40% while enhancing cross-platform compatibility. 
</div></div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Microcontroller Unit</div><video width="100%" controls><source src="videos/STM32F103CBT6_Item.mp4" type="video/mp4"></video></div></div>
<div class='paper-box-text' markdown="1">
[STM32F103CBT6_Item](https://github.com/SHAOWENJIN/STM32F103CBT6_Item.git)<br><br>
This STM32-based project demonstrates full-stack embedded development. I independently designed the circuit and PCB (recognized with engraved naming), programmed in embedded C using Keil, and configured peripherals via STM32CubeMX. Implemented features include LED matrix display, PWM dimming, buzzer audio, UART communication, and RTOS multitasking. Debugging hardware issues enhanced my interface programming and system integration capabilities. 
</div></div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Neural Networks</div><img src='images/LeNet-based Object Classification.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[LeNet-based Object Classification](https://github.com/SHAOWENJIN/LeNet-based-Object-Classification.git)<br><br>
This project implements CIFAR-10 image classification using LeNet-5. The architecture alternates convolutional layers (extracting local patterns) with pooling layers (reducing dimensionality), followed by fully connected layers with ReLU activation for classification. The experiment involved model construction, training with parameter adjustment, and performance validation on test data. 
</div></div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Machine Learning</div><img src='images/Kmeans_PSO.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[Kmeans_PSO](https://github.com/SHAOWENJIN/Kmeans_PSO.git)<br><br>
This study applies Particle Swarm Optimization to codebook design in speech recognition. The method clusters speech feature vectors into codewords, with each particle representing a candidate codebook. Through iterative updates of particle positions and velocities using the inverse intra-class dispersion as the fitness function, it maximizes inter-class distance to enhance codebook quality. Key parameters employ nonlinear adjustment strategies: inertia weight balances global/local search, while learning factors coordinate individual/collective experience. This approach effectively improves encoding efficiency and decoding accuracy in vector quantization. 
</div></div>

<h3 style="font-weight: normal; font-size: 1.2em; margin-top: 20px; color: #666;">Robotics</h3>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Robotics Systems</div><img src='images/Robotic Systems for Sustainable Development.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[Robotic Systems for Sustainable Development](https://youtu.be/32iZ6pw9bB8)<br><br>
- A sustainable future means achieving shared prosperity within our planet's ecological limits. Industrial robots boost productivity while service robots assist human tasks, advancing UN Sustainable Development Goals across multiple sectors. Solar panel cleaning robots exemplify this impact—using sensor fusion and water-free technology to cut costs by 85% and increase energy output. This transformation elevates technicians into robotics managers and data analysts, harnessing AI rather than competing with machines.
</div></div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">LiDAR & SLAM</div><img src='images/LiDAR.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[Characterisation of the SLAMTEC RPLIDAR A2M12 Lidar Unit](https://youtu.be/AMb26WioiL8)<br><br>
- [[Video]](https://youtu.be/AMb26WioiL8)
- This project presents a systematic performance evaluation of the A2M12 360-degree 2D LiDAR sensor, focusing on distance accuracy and spatial resolution. Experimental results determined a practical operating range of 0.1589m to 13m , with peak precision observed between 1m and 5m. To assess spatial resolution, I derived critical parameters—including angular resolution, spot size, and beam divergence angle—by analyzing data point returns from a fixed target at multiple distances. While the sensor demonstrates high accuracy for robotic navigation, error accumulation at longer ranges remains a constraint. Ultimately, this study defines the sensor’s capacity to resolve closely spaced objects, which is essential for detailed spatial awareness.
</div></div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Computer Vision</div><img src='images/cv.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[A Comparative Study of Traditional Computer Vision and Deep Learning in Object Recognition](https://github.com/SHAOWENJIN/LeNet-based-Object-Classification.git)<br><br>
- [[Code]](https://github.com/SHAOWENJIN/LeNet-based-Object-Classification.git)
- [[PDF]](files/COMP64301 Coursework Cognitive Robotics and Computer Vision Assignment.pdf)
- This project evaluates the performance of deep learning versus traditional computer vision methods using the CIFAR-10 and SVHN datasets. For deep learning, I developed and optimized progressive residual networks (expanding from 64/96 to 256/384 channels), incorporating the Adam optimizer, dynamic learning rate scheduling, global average pooling, and enhanced Dropout regularization to achieve test accuracies of 96.34% on SVHN and 78.77% on CIFAR-10. The traditional approach utilized SIFT for local feature extraction, integrated with K-Means clustering to build a 200-dimensional Bag-of-Words (BoW) model, and employed SVM for classification. The results demonstrate the significant superiority of deep learning in handling complex semantic features and spatial transformations compared to traditional hand-crafted features.
</div></div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Control Theory</div><img src='images/Feedback Control.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[Feedback Control](https://github.com/SHAOWENJIN/Feedback-Control.git)<br><br>
- [[Code]](https://github.com/SHAOWENJIN/Feedback-Control.git)
- [[Video]](https://youtu.be/d7U2688GAYI)
- This project focuses on the design and implementation of a robust feedback control system for an autonomous mobile robot, specifically addressing the challenges of trajectory tracking and precise stabilization. I developed a PID-based controller that integrates proportional, integral, and derivative gains to minimize cross-track and heading errors while navigating predefined paths. To ensure system stability and smooth motion, I implemented a Pure Pursuit algorithm for path following, dynamically adjusting the robot's steering commands based on a variable look-ahead distance. The controller's performance was rigorously evaluated through simulations, where I analyzed its response to step inputs and complex trajectories, ensuring minimal overshoot and steady-state error. This work demonstrates the effective application of classical control theory to achieve high-fidelity motion control in mobile robotics.
</div></div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Path Planning</div><img src='images/A_star.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[A* Path Planning](https://github.com/SHAOWENJIN/A-Path-Planning.git)<br><br>
- [[Code]](https://github.com/SHAOWENJIN/A-Path-Planning.git)
- [[Video]](https://youtu.be/d7U2688GAYI)
- This project focuses on the development of an autonomous navigation framework for a mobile robot, integrating A* path planning with a Pure Pursuit controller. I implemented an A* algorithm to generate an optimal, collision-free global path by searching a 2D occupancy grid, utilizing a heuristic function to balance computational efficiency and path optimality. To execute the plan, I developed a Pure Pursuit tracking system that translates the global path into real-time velocity and steering commands by calculating a look-ahead point. The system's robustness was validated through simulations, demonstrating effective obstacle avoidance and precise trajectory following within a constrained environment. This work highlights the successful integration of discrete search algorithms and continuous feedback control to achieve reliable autonomous motion.
</div></div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Robotics Systems</div><img src='images/promontionalvideo.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[Robotic Systems Design Project](https://github.com/MJF2003/RSDPTeam10.git)<br><br>
- [[Code]](https://github.com/MJF2003/RSDPTeam10.git)
- [[Video]](https://youtu.be/2GIBHMLK1Wg)
- This project involved the development of an autonomous delivery robot, designed for indoor campus environments. I spearheaded the navigation system, implementing a robust software stack centered on the Regulated Pure Pursuit (RPP) algorithm for precise path tracking. My work integrated the Nav2 framework and SLAM Toolbox to enable real-time mapping and localization via 360° 2D LiDAR data. By utilizing RPP, I ensured the robot could dynamically adjust its velocity based on path curvature and proximity to obstacles, providing smooth and safe transitions during complex maneuvers. Additionally, I configured the costmap layers and recovery behaviors to handle dynamic obstacles, resulting in a reliable navigation pipeline capable of autonomous waypoint delivery.
</div></div>

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

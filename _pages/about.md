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

I am an MSc Robotics student at the University of Manchester, with a Bachelor's degree in Artificial Intelligence from the University of Jinan. My academic and project experience spans autonomous navigation, robot system integration, simulation, verification and technical project delivery.

During my MSc, I led the Navigation Work Package in a six-member autonomous mobile robot project, working with ROS2, Nav2, SLAM, TF2 and costmap configuration. The final physical robot successfully achieved autonomous mapping, obstacle avoidance and waypoint navigation. I also conducted system verification activities, contributed to multiple design review documents, and independently produced the final Technical Demonstration.

Alongside robotics development, I have practical experience with project requirements, testing and technical documentation. During my internship at Synthesis Electronic Technology Co., Ltd., I participated in an urban safety risk monitoring platform project covering requirements, design, testing, deployment and delivery. I reviewed 18 core technical documents totalling approximately 1,332 pages and coordinated revisions with related departments.

My current career interests focus on roles that combine strong technical understanding with product, system and project execution, particularly **Robotics Product Management, Systems Engineering, Verification & Validation, and Technical Project Management**.


# 💡 Technical Skills

- **Robotics:** *ROS2, Nav2, SLAM, TF2, Costmap, A*, Pure Pursuit, LiDAR, mobile robot navigation and system integration.*
- **Simulation & Analysis:** *MuJoCo, Python, NumPy, Matplotlib, system verification, test design and experimental analysis.*
- **Artificial Intelligence:** *Computer Vision, Deep Learning, Machine Learning, Pattern Recognition, Artificial Neural Networks.*
- **Programming:** *Python, C, C++, Java.*
- **Engineering & Project Skills:** *Requirements analysis, Design Review, Requirements Verification, WBS/Gantt planning, technical documentation, cross-functional coordination, technical presentation.*
- **Tools:** *Git, GitHub, Microsoft Office, ROS2 ecosystem.*


# 🤖 Featured Robotics Projects

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Robotics Systems</div><img src='images/promontionalvideo.png' alt="Robotic Systems Design Project" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Robotic Systems Design Project](https://github.com/MJF2003/RSDPTeam10.git)<br><br>

- [[Code]](https://github.com/MJF2003/RSDPTeam10.git)
- [[Video]](https://youtu.be/2GIBHMLK1Wg)
- **Role: Navigation Work Package Lead**
- Developed the navigation subsystem of a six-member autonomous mobile robot project based on ROS2 and Nav2.
- Implemented and configured global/local path planning, motion control, SLAM integration, TF2 transforms, costmaps and navigation behaviours.
- The final physical Leo Rover successfully achieved autonomous mapping, obstacle avoidance and waypoint navigation.
- Worked closely with Mapping and System Integration team members to define interfaces and resolve integration dependencies.
- Co-authored the Workplace Charter, Design Requirements Analysis, Preliminary Design Review, Final Design Review and Technical Evaluation Video.
- Independently produced the final Technical Demonstration.
- Participated in WBS, Gantt planning and Requirements Verification activities.

</div></div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">MSc Dissertation</div><img src='images/dissertation_robot.png' alt="MSc Dissertation" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**Investigating the Influence of Grasp Configuration on the Stability of a Multi-Limbed Robotic Platform in MuJoCo**<br><br>

- Developed a MuJoCo simulation framework using the Unitree GO2 EDU PLUS platform for structure-attached robotic locomotion under microgravity-inspired conditions.
- Designed and compared four grasp/controller configurations using a unified experimental workflow.
- Evaluated system performance using six metrics: normal force, friction utilisation, tangential slip, contact continuity, centre-of-mass displacement and grasp-matrix conditioning.
- Built a reusable Python-based analysis pipeline using NumPy and Matplotlib for automated data processing, comparison and failure-mode analysis.
- Used experimental results to identify relative system advantages, failure modes and operating boundaries.

</div></div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">LiDAR & SLAM</div><img src='images/LiDAR.png' alt="LiDAR Characterisation" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Characterisation of the SLAMTEC RPLIDAR A2M12 LiDAR Unit](https://youtu.be/AMb26WioiL8)<br><br>

- [[Video]](https://youtu.be/AMb26WioiL8)
- Conducted systematic performance testing of the SLAMTEC RPLIDAR A2M12 2D LiDAR sensor.
- Evaluated distance accuracy, spatial resolution, angular resolution, spot size and beam divergence.
- Determined a practical operating range of approximately **0.1589 m to 13 m**, with the best precision observed between **1 m and 5 m**.
- Analysed experimental results to understand sensor limitations relevant to autonomous navigation and environment perception.

</div></div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Control Theory</div><img src='images/Feedback Control.png' alt="Feedback Control" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Feedback Control](https://github.com/SHAOWENJIN/Feedback-Control.git)<br><br>

- [[Code]](https://github.com/SHAOWENJIN/Feedback-Control.git)
- [[Video]](https://youtu.be/d7U2688GAYI)
- Designed and implemented a feedback control system for autonomous mobile robot trajectory tracking.
- Developed a PID controller to minimise cross-track and heading errors.
- Integrated Pure Pursuit for path following and evaluated stability, overshoot and steady-state behaviour through simulation.

</div></div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Path Planning</div><img src='images/A_star.png' alt="A Star Path Planning" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[A* Path Planning](https://github.com/SHAOWENJIN/A-Path-Planning.git)<br><br>

- [[Code]](https://github.com/SHAOWENJIN/A-Path-Planning.git)
- Developed an autonomous navigation framework combining A* global path planning and Pure Pursuit path tracking.
- Generated collision-free paths in a 2D occupancy grid and translated them into real-time steering commands.
- Validated path planning, obstacle avoidance and trajectory tracking performance through simulation.

</div></div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Computer Vision</div><img src='images/cv.png' alt="Computer Vision Study" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[A Comparative Study of Traditional Computer Vision and Deep Learning in Object Recognition](https://github.com/SHAOWENJIN/LeNet-based-Object-Classification.git)<br><br>

- [[Code]](https://github.com/SHAOWENJIN/LeNet-based-Object-Classification.git)
- [[PDF]](files/COMP64301 Coursework Cognitive Robotics and Computer Vision Assignment.pdf)
- Compared deep learning and traditional computer vision approaches using CIFAR-10 and SVHN.
- Developed and optimised deep residual CNNs using Adam, learning-rate scheduling, global average pooling and Dropout.
- Achieved **96.34% accuracy on SVHN** and **78.77% on CIFAR-10**.
- Implemented a traditional SIFT + K-Means + Bag-of-Words + SVM pipeline for comparative evaluation.

</div></div>


# 🧩 Industry Experience

### Synthesis Electronic Technology Co., Ltd.  
**Algorithm Research Intern | Jinan, China | 09/2024 – 12/2024**

- Participated in a customized urban safety risk monitoring and early-warning platform project covering transportation safety, gas, heating, special equipment, forest fire prevention and flood control.
- Gained practical exposure to the full engineering lifecycle, including requirements, system design, testing, deployment and final delivery.
- Assisted full-time employees in completing **18 core technical documents totalling approximately 1,332 pages**, covering requirements specifications, high-level and detailed design, interface and database design, test plans and cases, deployment plans, user manuals and self-test reports.
- Took responsibility for reading and reviewing all major documents and checking consistency across requirements, design, testing and delivery materials.
- Coordinated technical content, revision comments and issue tracking with related departments.
- Supported documentation and verification work related to **43 mechanism models across seven urban safety domains**.


# 🧭 Project & Leadership Experience

### University of Jinan Student Union  
**President / Secretariat Lead | 09/2021 – 05/2024**

- Led daily student union operations and coordinated multiple departments.
- Organised and chaired major meetings and large-scale campus events.
- Drafted formal documents including meeting minutes, speeches, annual reports and internal regulations.
- Frequently represented students in public presentations and formal speaking activities.


### AI Anti-Fraud Payment Platform  
**Project Leader | 2023 – 2024**

- Led a three-member team to design an AI-enabled payment solution integrating campus cards, facial recognition and bank accounts.
- Responsible for product concept development, requirements analysis, system workflow and system architecture.
- Organised project documentation and presentations.
- Won the **Provincial Second Prize** in the National University Students' FinTech Innovation Competition.


# 🧠 Earlier AI & Engineering Projects

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Deep Learning</div><img src='images/Deep Learning-Based Prediction of Photovoltaic Power Generation.png' alt="PV Prediction" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Deep Learning-Based Prediction of Photovoltaic Power Generation](https://github.com/SHAOWENJIN/Deep-Learning-Based-Prediction-of-Photovoltaic-Power-Generation.git)<br><br>

- Outstanding Graduation Thesis.
- Developed a CNN-LSTM model for photovoltaic power forecasting.
- Used PCA for dimensionality reduction, CNN for local temporal feature extraction and LSTM for long-term dependency modelling.
- Achieved lower MAE and RMSE than CNN, LSTM and XGBoost baseline models.

</div></div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Computer Vision</div><img src='images/Computer Vision Application Real vs. AI Detection.png' alt="AI Detection" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Computer Vision Application: Real vs. AI Detection](https://github.com/SHAOWENJIN/Computer-Vision-Application-Real-vs.-AI-Detection.git)<br><br>

- Developed an AI-generated image detection approach focused on texture and edge characteristics.
- Used grayscale and gradient-based preprocessing, Gaussian denoising and EfficientNetV2.
- Exported the model to ONNX to improve inference speed and cross-platform deployment compatibility.

</div></div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Embedded Systems</div><video width="100%" controls><source src="videos/STM32F103CBT6_Item.mp4" type="video/mp4"></video></div></div>
<div class='paper-box-text' markdown="1">

[STM32F103CBT6 Item](https://github.com/SHAOWENJIN/STM32F103CBT6_Item.git)<br><br>

- Independently designed a circuit and PCB and programmed the system in embedded C.
- Configured peripherals using STM32CubeMX.
- Implemented LED matrix display, PWM dimming, buzzer control, UART communication and RTOS multitasking.

</div></div>


# 🎖 Honors and Awards

- **Shandong Provincial Outstanding Student Leader**
- **First-Class Scholarship, University of Jinan**
- **Provincial Second Prize, National University Students’ FinTech Innovation Competition**
  <br>*AI Anti-Fraud Payment Platform — Project Leader*
- **Provincial Bronze Award, 14th Challenge Cup Shandong Provincial College Students Entrepreneurship Plan Competition**
  <br>*Main Presenter*
- **Provincial Third Prize, Shandong Provincial College Student Artificial Intelligence Competition**
- **Provincial Third Prize, Shandong Provincial College Student Computer Technology Application Competition**
- **Software Copyright Registration**
  <br>*Fatigue Driving Intelligent Detection System Based on Atlas 200I DK A2*


# 📖 Education

- **University of Manchester**  
  *MSc Robotics*  
  *09/2025 – 12/2026 (Expected)*  
  Current taught-course average: **69.75/100**  
  Robotic Systems Design Project: **74/100**

- **University of Jinan**  
  *Bachelor of Engineering in Artificial Intelligence*  
  *09/2021 – 06/2025*
  Arithmetic mean average: **87.32/100**  
  Subject Rankings: **3/36**


# 💼 Career Interests

I am particularly interested in roles where technical understanding is combined with system-level thinking, product development and project execution, including:

- **Robotics Product Management**
- **Technical Product Management**
- **Systems Engineering**
- **Requirements Engineering**
- **Verification & Validation**
- **Technical Project Management**
- **Robotics Project Delivery**

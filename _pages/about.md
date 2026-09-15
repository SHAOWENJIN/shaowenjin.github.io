---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from:
/about/
/about.html
---
{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}
<span class='anchor' id='about-me'></span>
I am an MSc Robotics candidate at the University of Manchester, with a BEng background in Artificial Intelligence from the University of Jinan. My work focuses on autonomous robot navigation, system integration, verification and validation, and the delivery of complex technical projects.
During my MSc, I led the Navigation Work Package in a six-member autonomous mobile manipulator project, developing a ROS2/Nav2-based navigation stack and validating autonomous mapping, obstacle avoidance, and goal navigation on a real robot. My MSc dissertation investigates the influence of grasp configurations on the stability of a multi-limbed robotic platform in MuJoCo, using a structured multi-metric evaluation framework for system-level comparison and failure analysis.
Previously, I worked as an Algorithm Research Intern at Synthesis Electronic Technology Co., Ltd., contributing to an urban safety risk monitoring and early-warning platform across requirements, design, testing, deployment, and delivery. I supported 18 core technical documents (approximately 1,332 pages in total), taking responsibility for full document review, consistency checks, and cross-department coordination.
I am particularly interested in roles that connect robotics engineering with robotics product development, systems engineering, verification & validation, and technical project management.
# 💡 Technical Skills
Robotics Systems: ROS2, Nav2, SLAM, TF2, Costmap, LiDAR, system integration, real-robot navigation.
Planning & Control: A path planning, Pure Pursuit, PID control, global/local path planning, motion control.*
Simulation & Analysis: MuJoCo, Python, NumPy, Matplotlib, requirements verification, experiment design, system-level evaluation.
Artificial Intelligence: Computer Vision, Deep Learning, Machine Learning, Pattern Recognition, Embedded Systems.
Programming & Tools: Python, C/C++, Java, Git/GitHub, Microsoft Word, PowerPoint, Excel.
Project & Documentation: Requirements analysis, Design Review, WBS/Gantt planning, technical documentation, testing & delivery materials, cross-functional communication.
# 🤖 Featured Robotics Projects
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Robotics Systems</div><img src='images/promontionalvideo.png' alt="Robotic Systems Design Project" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[Robotic Systems Design Project](https://github.com/MJF2003/RSDPTeam10.git)<br><br>
- **Navigation Work Package Lead** in a six-member team developing an autonomous mobile manipulator based on a Leo Rover, LiDAR, depth camera, and robotic arm.
- Developed the ROS2/Nav2 navigation subsystem, including global/local path planning, motion control, SLAM integration, costmap configuration, TF2 transformations, navigation behaviours, and retry mechanisms.
- The final physical robot successfully achieved **autonomous mapping, obstacle avoidance, and goal navigation**. The manipulation module operated independently but was not fully integrated with the mobile base by the final project stage.
- Co-authored the **Workplace Charter, Design Requirements Analysis, Preliminary Design Review, Final Design Review, and Technical Evaluation Video**, and independently produced the **Technical Demonstration**.
- Participated in WBS/Gantt planning and the Requirements Verification Matrix, linking system requirements with verification methods and measurable success criteria.
- [[Code]](https://github.com/MJF2003/RSDPTeam10.git) &nbsp; [[Video]](https://youtu.be/2GIBHMLK1Wg)
</div></div>
<div class='paper-box'><div class='paper-box-text' markdown="1">
**MSc Dissertation — Grasp Configuration and Stability Evaluation for a Multi-Limbed Robotic Platform**  
*MuJoCo / Unitree GO2 EDU PLUS, 2026*<br><br>
- Investigated multi-contact robotic attachment under microgravity-inspired conditions using four grasp/controller configurations in a unified MuJoCo simulation framework.
- Designed a six-metric evaluation framework covering support force, friction utilisation, slip, contact continuity, centre-of-mass displacement, and grasp-matrix conditioning.
- Built an automated Python-based analysis workflow for quantitative comparison, failure-mode identification, and engineering interpretation of different grasp strategies.
- Demonstrates experience in experiment design, simulation framework development, system verification, data analysis, and technical reporting.
</div></div>
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">LiDAR & SLAM</div><img src='images/LiDAR.png' alt="LiDAR Characterisation" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[Characterisation of the SLAMTEC RPLIDAR A2M12 LiDAR Unit](https://youtu.be/AMb26WioiL8)<br><br>
- Conducted systematic performance evaluation of a 360° 2D LiDAR sensor, focusing on distance accuracy, spatial resolution, angular resolution, spot size, and beam divergence.
- Experimental results identified a practical operating range of approximately **0.1589 m to 13 m**, with the best precision observed between **1 m and 5 m**.
- The study established practical sensor performance boundaries relevant to mobile-robot perception, navigation, and system design.
- [[Video]](https://youtu.be/AMb26WioiL8)
</div></div>
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Control Theory</div><img src='images/Feedback Control.png' alt="Feedback Control" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[Feedback Control](https://github.com/SHAOWENJIN/Feedback-Control.git)<br><br>
- Designed and implemented a feedback-control framework for autonomous mobile-robot trajectory tracking and stabilization.
- Developed a PID-based controller and Pure Pursuit path-following logic to reduce cross-track and heading errors.
- Evaluated system performance in simulation through step responses and complex trajectories, analysing overshoot, tracking accuracy, and steady-state error.
- [[Code]](https://github.com/SHAOWENJIN/Feedback-Control.git) &nbsp; [[Video]](https://youtu.be/d7U2688GAYI)
</div></div>
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Path Planning</div><img src='images/A_star.png' alt="A* Path Planning" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[A* Path Planning](https://github.com/SHAOWENJIN/A-Path-Planning.git)<br><br>
- Developed an autonomous navigation framework combining A* global path planning with a Pure Pursuit controller.
- Implemented collision-free planning on a 2D occupancy grid and converted the planned route into real-time steering and velocity commands.
- Validated obstacle avoidance and trajectory following in simulation, strengthening my understanding of the planning-control pipeline used in mobile robotics.
- [[Code]](https://github.com/SHAOWENJIN/A-Path-Planning.git) &nbsp; [[Video]](https://youtu.be/d7U2688GAYI)
</div></div>
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Computer Vision</div><img src='images/cv.png' alt="Computer Vision" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[A Comparative Study of Traditional Computer Vision and Deep Learning in Object Recognition](files/COMP64301%20Coursework%20Cognitive%20Robotics%20and%20Computer%20Vision%20Assignment.pdf)<br><br>
- Compared deep-learning and traditional computer-vision pipelines on CIFAR-10 and SVHN.
- Developed and optimized residual CNN models using Adam, dynamic learning-rate scheduling, global average pooling, and Dropout, achieving **96.34%** accuracy on SVHN and **78.77%** on CIFAR-10.
- Implemented a traditional pipeline using SIFT, K-Means Bag-of-Words, and SVM to analyse the trade-offs between learned and hand-crafted representations.
- [[PDF]](files/COMP64301%20Coursework%20Cognitive%20Robotics%20and%20Computer%20Vision%20Assignment.pdf)
</div></div>
# 🧠 Earlier AI & Engineering Projects
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Deep Learning</div><img src='images/Deep Learning-Based Prediction of Photovoltaic Power Generation.png' alt="PV Power Prediction" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[Deep Learning-Based Prediction of Photovoltaic Power Generation](https://github.com/SHAOWENJIN/Deep-Learning-Based-Prediction-of-Photovoltaic-Power-Generation.git)<br><br>
- **Outstanding Graduation Thesis.**
- Developed a CNN-LSTM model for photovoltaic power prediction, combining PCA-based dimensionality reduction, CNN local-feature extraction, and LSTM temporal modelling.
- The proposed model outperformed CNN, LSTM, and XGBoost benchmarks on the selected dataset, achieving the lowest MAE and RMSE among the compared approaches.
</div></div>
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Computer Vision</div><img src='images/Computer Vision Application Real vs. AI Detection.png' alt="Real vs AI Detection" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[Computer Vision Application: Real vs. AI Detection](https://github.com/SHAOWENJIN/Computer-Vision-Application-Real-vs.-AI-Detection.git)<br><br>
- Developed an AI-generated image detection approach focusing on texture and edge characteristics, combining image preprocessing with deep-learning-based classification.
- Used EfficientNetV2-based modelling and ONNX conversion to improve inference efficiency and cross-platform compatibility.
</div></div>
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Embedded Systems</div><video width="100%" controls><source src="videos/STM32F103CBT6_Item.mp4" type="video/mp4"></video></div></div>
<div class='paper-box-text' markdown="1">
[STM32F103CBT6 Item](https://github.com/SHAOWENJIN/STM32F103CBT6_Item.git)<br><br>
- Independently completed circuit/PCB design and embedded-C development using Keil and STM32CubeMX.
- Implemented LED matrix display, PWM dimming, buzzer audio, UART communication, and RTOS multitasking, gaining practical experience in hardware/software integration and debugging.
</div></div>
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Neural Networks</div><img src='images/LeNet-based Object Classification.png' alt="LeNet Classification" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[LeNet-based Object Classification](https://github.com/SHAOWENJIN/LeNet-based-Object-Classification.git)<br><br>
- Implemented CIFAR-10 image classification using LeNet-5, covering model construction, training, parameter adjustment, and performance validation.
</div></div>
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Machine Learning</div><img src='images/Kmeans_PSO.png' alt="KMeans PSO" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[Kmeans_PSO](https://github.com/SHAOWENJIN/Kmeans_PSO.git)<br><br>
- Applied Particle Swarm Optimization to codebook design in speech recognition, using clustering and nonlinear parameter adjustment strategies to improve vector-quantization quality.
</div></div>
# 💼 Industry Experience
Synthesis Electronic Technology Co., Ltd. — Algorithm Research Intern
09/2024 – 12/2024, Jinan, China
Contributed to a customized Urban Safety Risk Monitoring and Early-Warning Platform covering traffic safety, gas, heating, special equipment, forest-fire prevention, flood control, and other urban safety scenarios.
Supported the project lifecycle from requirements and design through testing, deployment, and delivery.
Assisted with 18 core technical documents (~1,332 pages in total), including requirements specifications, high-/detailed-level design, interface/database design, test plans and cases, deployment plans, user manuals, defect records, and self-test reports.
Took responsibility for full document review, consistency checks, cross-department communication, and revision tracking.
Supported documentation and verification work for 43 mechanism models across seven urban-safety themes.
# 👥 Leadership & Project Coordination
Student Union President / Secretariat Lead — University of Jinan
09/2021 – 05/2024
Coordinated multiple departments, chaired meetings, organized major student activities, and managed formal documentation and reporting.
Prepared speeches, meeting minutes, annual reports, institutional documents, and presentation materials.
Frequently represented students in formal presentations and public speaking, building strong communication and stakeholder-coordination skills.
🎖 Honors and Awards
Shandong Provincial Outstanding Student Leader
First-class Scholarship, University of Jinan
Provincial Second Prize, National University Students' FinTech Innovation Competition — AI Anti-Fraud Payment Platform (Project Leader)
Provincial Bronze Award, The 14th Challenge Cup Shandong Provincial College Students Entrepreneurship Plan Competition (Main Presenter)
Software Copyright Registration — Fatigue Driving Intelligent Detection System Based on Atlas 200I DK A2
Provincial Third Prize, Shandong Provincial College Student Artificial Intelligence Competition
Provincial Third Prize, Shandong Provincial College Student Computer Technology Application Competition
# 📖 Education
University of Manchester — MSc Robotics, 09/2025 – 12/2026 (Expected)  
Current taught-course average: 69.75/100 (dissertation result pending); Robotic Systems Design Project: 74/100.
University of Jinan — BEng Artificial Intelligence, 09/2021 – 06/2025.
# 🎯 Career Interests
Robotics Product Management · Systems Engineering · Verification & Validation · Technical Project Management · Robotics Project Delivery

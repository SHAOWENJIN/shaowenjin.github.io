# 金绍文个人网站｜内容修改手册

网站地址：<https://shaowenjin.github.io/>  
设计修改：请看 [`README_DESIGN.md`](README_DESIGN.md)。  
首次发布：请看 [`PUBLISH_GUIDE.md`](PUBLISH_GUIDE.md)。

## 先认识这个网站

这是一套**不需要安装 Jekyll、React 或运行 `npm`** 的静态网站。中、英文分别保存为 HTML 文件；图片在 `assets/images/`；样式位于 `assets/css/`；切换语言、深浅色、轮播及复制微信号等功能位于 `assets/js/site.js`。

建议使用 **Visual Studio Code（VS Code）** 打开整个网站文件夹：菜单「文件 → 打开文件夹」。修改前先复制备份，文件以 **UTF-8** 保存；中文页面当前使用 UTF-8 BOM，VS Code 中不要误选 GBK/ANSI。使用 `Ctrl+F` 找本页文字，`Ctrl+Shift+F` 跨全站查找相同文字；`Ctrl+S` 保存，浏览器刷新。中文与英文是**两套实际文件**，修改一侧不会自动翻译另一侧。

### 文件夹索引

```text
index.html                    英文首页
projects.html                 英文项目列表：硕士 / 本科
about.html                    英文关于我
projects/*.html               10 个英文项目详情
zh/index.html                 中文首页
zh/projects.html              中文项目列表：硕士 / 本科
zh/about.html                 中文关于我
zh/projects/*.html            10 个中文项目详情
assets/images/                圆形头像、项目封面
assets/files/                 项目附件（当前包含计算机视觉 PDF）
assets/css/style.css          网站原有设计样式
assets/css/custom.css         推荐在这里自行调整设计
assets/js/site.js             语言偏好、夜间模式、轮播、复制微信号
favicon.ico                   浏览器标签页图标
.nojekyll                     告诉 GitHub Pages：直接发布静态文件，不运行旧 Jekyll 模板
README.md                     本文：修改内容
README_DESIGN.md              修改字体、颜色、尺寸及布局
PUBLISH_GUIDE.md              首次部署、更新、回滚、排错
```

> **注意：** 首页及项目列表的项目内容不是自动从详情页读取的。因此，改一个项目的标题/图片时，可能需要分别改「首页轮播、首页精选项目（仅前两个）、项目列表、详情页」的中英文相应位置。

## 1. 修改首页每一块内容

| 位置 | 英文文件 | 中文文件 | 在文件内搜索的定位文字 / HTML 类名 |
|---|---|---|---|
| 顶部姓名、导航、联系方式入口 | `index.html` | `zh/index.html` | `class="site-header"`，`class="brand"`，`class="nav"` |
| 顶部 Robotics × AI 标签 | 同上 | 同上 | `class="eyebrow"` |
| 首页大标题、绿字 | 同上 | 同上 | `class="hero"` 内的 `<h1>`；绿色词使用 `<em>` |
| 「我是绍文」一段介绍 | 同上 | 同上 | `class="hero-desc"` |
| 查看项目、了解更多按钮 | 同上 | 同上 | `class="hero-actions"` |
| 三个专业标签（机器人、系统、产品） | 同上 | 同上 | `class="hero-micro"` |
| 右侧十项目方形轮播及绿色标题 | 同上 | 同上 | `data-carousel`、`data-slide="0"` … `data-slide="9"`、`carousel-caption` |
| 硕士 / 本科两行教育介绍 | 同上 | 同上 | `class="rule-strip"` |
| 首页两个精选项目 | 同上 | 同上 | `id="selected-work"`、`class="featured-grid"` |
| 黑色交汇点 / 三大方向 | 同上 | 同上 | `class="expertise-section"`、`expertise-item` |
| 最下面「更多关于我」 | 同上 | 同上 | `class="bio-band"`、`bio-cta`、`bio-right` |
| 页脚姓名、邮箱、GitHub、微信 | 同上 | 同上 | `class="footer"`、`footer-links` |

**例：** 改中文首页自我介绍：打开 `zh/index.html`，按 `Ctrl+F` 搜索 `我是绍文`，只修改 `<p class="hero-desc">` 与 `</p>` 之间的正文，不要删掉 HTML 标签。再在 `index.html` 中同步更新对应英文简介。

**绿色关键词：** 例如 `<em>技术</em>发声 <em>产品</em>落地`；`<em>` 由网站 CSS 显示为绿色。删除 `<em>` 只会失去强调，不应删除整个 `<h1>`。

**首页轮播：** 每张卡片是一个 `<a class="carousel-slide" data-slide="数字" href="projects/项目文件名.html">`，里面有 `img src`、`img alt` 和 `carousel-caption` 标题。顺序按 `data-slide="0"` 到 `9`；左右按钮及总数由 JavaScript 读取卡片数量，不要手改脚本中的“10”。修改轮播要同步到中英文首页。

## 2. 修改 Projects / 项目作品集

| 项目顺序 | 项目 | 英文详情路径 | 中文详情路径 | 对应封面 |
|---|---|---|---|---|
| 01 | Robotic Systems Design Project | `projects/robotic-systems-design.html` | `zh/projects/robotic-systems-design.html` | `assets/images/rover.webp` |
| 02 | MSc Dissertation | `projects/grasp-stability.html` | `zh/projects/grasp-stability.html` | `assets/images/dissertation.webp` |
| 03 | Feedback Control | `projects/feedback-control.html` | `zh/projects/feedback-control.html` | `assets/images/control.webp` |
| 04 | A* Path Planning | `projects/a-star-path-planning.html` | `zh/projects/a-star-path-planning.html` | `assets/images/planning.webp` |
| 05 | Computer Vision | `projects/object-recognition-study.html` | `zh/projects/object-recognition-study.html` | `assets/images/vision.webp` |
| 06 | A2M12 LiDAR | `projects/lidar-characterisation.html` | `zh/projects/lidar-characterisation.html` | `assets/images/lidar.webp` |
| 07 | Photovoltaic Prediction | `projects/photovoltaic-prediction.html` | `zh/projects/photovoltaic-prediction.html` | `assets/images/solar.webp` |
| 08 | E 校银 / AI Anti-Fraud | `projects/ai-anti-fraud-payment.html` | `zh/projects/ai-anti-fraud-payment.html` | `assets/images/fraud-platform.svg` |
| 09 | AI Image Detection | `projects/ai-image-detection.html` | `zh/projects/ai-image-detection.html` | `assets/images/detection.webp` |
| 10 | STM32 | `projects/stm32-embedded-system.html` | `zh/projects/stm32-embedded-system.html` | `assets/images/stm32.jpg` |

**列表页：** 在 `projects.html` 和 `zh/projects.html` 修改每张 `project-card` 的 `card-meta`（序号/日期）、`<h3>` 标题、`<p>` 简介、`tag` 标签、`img src`、`href`。硕士卡片位于 `id="masters"` 的章节；本科卡片在 `id="undergraduate"`。

**详情页：** 在对应 `projects/xxx.html` / `zh/projects/xxx.html` 修改 `<title>`（浏览器标签标题）、`meta name="description"`（搜索摘要）、`<h1>`、导语、项目图片、`detail-body` 中的 Overview/Work/Outcome/Materials 等文字。保留网页头部和尾部的路径结构；详情页访问共享图片一般写 `../assets/images/...`（中文详情一般为 `../../assets/images/...`）。

### 修改现有项目（最常见）

1. 找到上表对应的两份详情页，修改项目文字；必要时一并修改 `<title>` 和搜索摘要。
2. 在 `projects.html` + `zh/projects.html` 修改卡片的标题、摘要、技术标签和图片路径。
3. 在 `index.html` + `zh/index.html` 找对应的 `data-slide`，修改轮播标题/图片/链接；若是项目 01 或 02，还需改首页 `featured-grid`。
4. 本地逐页点击核对；再按照发布指南提交 GitHub。

### 增加一个新项目

1. 确定放在硕士（`masters`）还是本科（`undergraduate`），取**英文文件名**，例如 `warehouse-robot.html`。
2. 复制一对相似项目详情页，分别保存为 `projects/warehouse-robot.html` 和 `zh/projects/warehouse-robot.html`。修改两份页面的 `<title>`、`<h1>`、图片、正文和链接；最重要的是检查**中英切换**链接分别指向对方同名文件。建议保留与原页面相同的相对路径层级。
3. 将新封面放进 `assets/images/warehouse-robot.webp`，在两份详情页内修改图片路径与 `alt`。
4. 在 `projects.html` 和 `zh/projects.html` 的对应分区复制一张完整的 `<a class="project-card ...">...</a>` 卡片，修改图片、简介、标签、`href` 和编号。
5. 若要在首页轮播显示：在 `index.html` 和 `zh/index.html` 的 `carousel-stage` 内复制一张完整的 `carousel-slide`，设置唯一且从 0 连续递增的 `data-slide`（新项目追加为 `10`）；把 `href` 指到对应详情页，图片和标题同步。若不想在首页显示，则无需这一步，首页目前默认精选十项。
6. 若要放到首页两个大精选卡：再修改两份首页的 `featured-grid`。顶部两个精选项目和列表页不是自动同步的。
7. 更新已显示在界面中的手写序号，例如 `01 / 10`、`02 / 10` 和相关文案（若增加为 11 项）；轮播控制中的计数由 `site.js` 自动计算。逐一核对中文、英文、移动端和全部链接。

### 删除一个项目

先备份，然后删除 `projects.html`、`zh/projects.html` 中的相应**完整项目卡片**；若它出现在首页轮播或两个精选项目中，也要从两份首页相应区域删除/替换，并将剩余 `data-slide` 改为从 `0` 开始的连续编号。修改画面中的手写编号和总数，最后再删除 `projects/xxx.html` 及 `zh/projects/xxx.html`。**确认没有其他页面在引用之后**再考虑删除对应图片，避免出现 404 或空白图片。

## 3. 修改 About / 关于我

| 内容位置 | 英文文件 | 中文文件 | 查找位置 |
|---|---|---|---|
| 标题、副标题 | `about.html` | `zh/about.html` | `page-intro` |
| 左侧头像、姓名、学校和标签 | 同上 | 同上 | `about-grid`、`class="portrait"` |
| 两段自我介绍（包括产品、实习及团队经历） | 同上 | 同上 | `about-story` |
| 01 教育背景 | 同上 | 同上 | `01 / Education` / `01 / 教育背景` |
| 02 实习经历 | 同上 | 同上 | `02 / Internships` / `02 / 实习经历` |
| 03 技能与实践（四栏） | 同上 | 同上 | `skill-list`，每个 `article` 是一栏 |
| 04 主要荣誉 | 同上 | 同上 | `award-list` |
| 底部联系方式 | 同上 | 同上 | `id="contact"` / `contact-panel` |

四个技能栏按 **机器人、人工智能、产品规划与协作、系统工程与交付** 排列；每栏的标题在 `<strong>` 中、正文在相邻的 `<p>` 中。修改中英文时注意没有自动翻译功能。

## 4. 换头像、图片、附件和图标

**最省事：沿用现有文件名覆盖图片**，不用去每个 HTML 修改 `src`。如换头像，将新图片裁成正方形、转成 WebP，命名 `portrait.webp` 并覆盖 `assets/images/portrait.webp`；项目封面按上表找到原图，同名同扩展名覆盖即可。若采用新文件名或格式，使用 VS Code 全局搜索旧路径（例如 `rover.webp`），把所有实际引用改成新路径，包括首页轮播、首页精选、项目列表和项目详情。

- 图片放 `assets/images/`，文件名建议英文小写、短横线分隔；优先 WebP/JPG/PNG，支持 SVG。建议每张封面压缩到合理大小，尽量不要上传几十 MB 的原图。
- 图片的 `alt="..."` 是替代文字；换图片也建议更新它。
- 头像：`portrait.webp`。浏览器图标：根目录 `favicon.ico`。
- PDF 等附件放 `assets/files/`，再在对应详情页增加 `<a href="../assets/files/文件名.pdf" target="_blank" rel="noopener noreferrer">View PDF ↗</a>`；中文项目详情路径通常要用 `../../assets/files/...`。按项目文件所在层级核对路径。
- 请仅公开确认可以发布的简历、资料、图片及作品，不要上传账号密码、私人合同或未获公开许可的公司资料。

## 5. 修改联系方式、导航、站点通用文字

当前邮件：`shaowen.jin.0517@outlook.com`；微信号：`j15550056057`；GitHub：`https://github.com/SHAOWENJIN`。顶部和页脚是**写在每个 HTML 文件中的重复内容**，不是自动共享组件。修改时用 `Ctrl+Shift+F` 全站搜索旧邮箱、旧微信或旧 GitHub 地址，并同步替换 **26 个页面**中的相关位置。邮件链接需要写为 `mailto:新邮箱`；微信复制按钮的 `data-copy-wechat="新微信号"` 与显示文字也应同步。

导航栏在各页的 `<header class="site-header">`；页脚在 `<footer class="footer">`。如果增加/删除一个全站导航链接，需要同时修改全部页面并保持相对路径：根目录是 `projects.html`，根目录下的英文项目页是 `../projects.html`，中文项目页是 `../../zh/projects.html`（请直接参考同页现有链接，不要机械套用）。

首页顶部、精选项目和 About 等**整块区域**：在对应中英首页找到它的外层 `<section>...</section>`，可以复制、调整顺序或移除；优先复制现有同类区块，别误删相邻区块或结尾的 `</div>`。改全站导航的同时还需检查手机菜单样式。

## 6. 修改之后的自检（每次发布前）

- [ ] 先完整解压/打开网站文件夹，直接查看 `index.html` 和 `zh/index.html`；不要在 ZIP 内预览。
- [ ] 中文页面没有乱码、漏字，英文页面没有忘记同步修改的旧文案。
- [ ] Home、Projects、About 能打开；硕士/本科共 10 个详情页链接能用。
- [ ] 轮播左右按钮和中/英切换正常；深浅色模式都能显示。
- [ ] 新图没有空白或错误路径；换图后按 `Ctrl+F5` 强制刷新缓存。
- [ ] 查看手机窄窗口的标题、绿色轮播标签和卡片是否溢出。
- [ ] README 和网页没有不打算公开的敏感信息，再提交 GitHub。

首次上传与以后更新请按 [`PUBLISH_GUIDE.md`](PUBLISH_GUIDE.md) 操作。

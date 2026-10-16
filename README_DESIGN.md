# 金绍文个人网站｜设计修改手册

**内容、项目和图片怎么改：** [`README.md`](README.md)；**首次部署：** [`PUBLISH_GUIDE.md`](PUBLISH_GUIDE.md)。

## 1. 先了解三个设计相关文件

| 文件 | 职责 | 建议 |
|---|---|---|
| `assets/css/style.css` | 全站现有主样式，包括颜色变量、排版、卡片、轮播、移动端适配 | 已验证的基线；先尽量不动 |
| `assets/css/custom.css` | 此次正式版新增，**在主样式之后加载**，适合自行覆盖和微调 | **以后主要修改这里** |
| `assets/js/site.js` | 语言偏好、明暗模式、项目左右轮播、微信复制功能 | 只在需要改交互时动，不决定字号和配色 |

所有 26 个页面都已引用 `assets/css/custom.css`。使用 VS Code 打开文件夹，在 `custom.css` 文件尾部添加需要的 CSS 规则，保存并刷新网页即可。这个文件自带**已注释的示例**，默认不改变你已确认的 V2.4 视觉效果。

> 如果发现 CSS 写了却没有变化，先按 `Ctrl+F5` 强制刷新，然后检查是否拼写正确、是否写在 `/* ... */` 注释里、是否被更具体的选择器覆盖。默认不要直接删除 `style.css` 中已有的响应式规则。

## 2. 修改整体色彩和浅色/深色模式

在 `assets/css/custom.css` 最下方添加下面的例子，直接改 `#` 后的颜色代码。网站现行主要颜色：浅色底 `#f5f5f2`、浅色卡片 `#ffffff`、浅色绿 `#426b60`、深色底 `#10171f`、深色强调绿 `#a7ccb9`；轮播日间背景 `#e9ede8`。

```css
:root {
  --bg: #f5f5f2;              /* 全站浅色底 */
  --paper: #ffffff;           /* 浅色卡片 */
  --ink: #18232d;             /* 主要文字 */
  --muted: #62707b;           /* 次要文字 */
  --accent: #426b60;          /* 全站绿色强调 */
  --accent-soft: #e7f0e9;     /* 浅绿背景 */
  --carousel-surface: #e9ede8; /* 首页轮播浅色背景 */
}
:root[data-theme="dark"] {
  --bg: #10171f;
  --paper: #19232e;
  --ink: #edf1f5;
  --muted: #a5b2c1;
  --accent: #a7ccb9;
  --accent-soft: #273e37;
}
```

**绿色浮动标题**（首页右侧轮播）在 `style.css` 最后部分的 `.carousel-caption` 用了固定色 `#426b60`，若改变全站强调色并希望它也一起变绿，请在 `custom.css` 追加：

```css
.carousel-caption { background: var(--accent); border-color: var(--accent); }
/* 如果夜间改成较浅的绿色，标题文字应换深色，确保可读： */
:root[data-theme="dark"] .carousel-caption strong { color: #15251f; }
```

若只是微调配色，不必完整复制全部变量，只写需要覆盖的属性即可。**日间与夜间分别检查**，不要把标题变成难辨认的低对比度文字。

## 3. 修改字体、字号、粗细与行距

主字体优先 `Microsoft YaHei`（微软雅黑），无此字体的设备会使用系统回退字体。不要上传或分享第三方字体文件。常见选择器如下：

| 想改哪里 | 在 `custom.css` 添加的选择器 |
|---|---|
| 全站正文 | `body` |
| 首页英文大标题 | `.hero h1` |
| 首页中文一行大标题 | `html[lang="zh-CN"] .hero h1.hero-headline-zh` |
| 首页大标题中绿色词 | `.hero h1 em` |
| 首页自我介绍 | `.hero-desc` |
| Projects / About 页首标题 | `.page-intro h1` |
| 页面分区主标题 | `.section-head h2, .section-title` |
| Projects 卡片标题 | `.project-card h3` |
| 项目详情大标题 | `.detail-head h1` |
| About 教育/实习小标题 | `.about-block h3` |
| About 经历的正文 | `.timeline-item p` |
| About 技能板块标题 / 正文 | `.skill-list strong` / `.skill-list p` |
| 首页轮播绿色标签 | `.carousel-caption strong` |

例子（数值仅供演示，粘贴后会覆盖现有大小）：

```css
body { font-size: 16px; line-height: 1.7; }
.hero-desc { font-size: 17px; line-height: 1.9; }
.hero h1 { font-size: clamp(40px, 5vw, 72px); font-weight: 750; line-height: 1.17; }
html[lang="zh-CN"] .hero h1.hero-headline-zh { font-size: clamp(29px, 4.15vw, 64px); white-space: nowrap; }
html[lang="zh-CN"] .bio-band .section-title { line-height: 1.6; }
.carousel-caption strong { font-size: 17px; }
```

`font-size` 控制字号，`line-height` 控制行距，`font-weight` 控制粗细，`letter-spacing` 控制字间距；`clamp(最小值, 随屏幕变化的值, 最大值)` 适合响应式标题。**中文首页单行大标题**已经过手机端调节，若调大字号导致手机溢出，需另外在媒体查询里设置较小字号（见第 6 节）。

## 4. 修改页面整体宽度、分区间距与边框

```css
:root {
  --container: 1190px; /* 主内容最大宽度 */
  --radius: 18px;      /* 常规圆角变量；并非所有圆角都用这个变量 */
}
.section { padding-top: 72px; padding-bottom: 72px; } /* 一般分区上下间距 */
.hero { gap: 52px; }  /* 首页左侧简介与右侧轮播之间 */
.project-grid { gap: 24px; } /* 项目列表卡片间距 */
```

主要布局识别：`.shell` 是居中内容容器；`.site-header` 是顶栏；`.hero` 是首页首屏左右两部分；`.featured-grid` 是首页两张大精选卡片；`.expertise-section` 是黑色三大方向；`.bio-band` 是首页更多关于我；`.about-grid` 是 About 左右布局；`.skill-list` 是技能四栏所在网格；`.footer` 是页脚。

移动区块顺序（例如把「更多关于我」放到三大方向之前）应该在对应首页 HTML **移动整个 `<section>...</section>`**，不是随意改 CSS `order`；中英文首页都要改。添加/删除整块内容亦是如此。

## 5. 首页方形轮播布局和图片

轮播主体 HTML 在 `index.html` 与 `zh/index.html` 的 `data-carousel` 内；功能在 `assets/js/site.js`；设计在主 CSS 最末的 `V2.4` 样式段（未来覆盖时建议写在 `custom.css` 末尾）。

```css
/* 保留 1:1 方形、让图片完整显示、调整四边留白 */
.carousel-photo, .carousel-photo-v24 { aspect-ratio: 1 / 1; }
.carousel-photo img, .carousel-photo-v24 img {
  object-fit: contain;       /* contain = 完整显示；cover = 填满但可能裁切 */
  object-position: center;    /* 上下左右居中 */
  padding: 22px;              /* 图像周围留白 */
}
/* 左下角绿色标题：位置与宽度 */
.carousel-caption { left: -14px; bottom: -16px; max-width: calc(100% + 22px); padding: 14px 20px; }
```

例如图片内部本身带白色背景，`object-fit: contain` 会忠实显示原图背景；这是图片文件本身的问题。想与浅色轮播完全融合，可在图片编辑工具中把图片底色调整成同色，或导出透明底 PNG/WebP；不要简单使用 `cover`，它可能裁掉项目图上的文字。

## 6. 手机和平板适配

现有主要断点：`max-width:1050px`（较窄屏幕）、`max-width:700px`（手机）。若改变桌面字号或布局，推荐在 `custom.css` 后加对应手机规则：

```css
@media (max-width: 700px) {
  .hero h1 { font-size: 42px; }
  html[lang="zh-CN"] .hero h1.hero-headline-zh { font-size: clamp(29px, 7.7vw, 43px); }
  .carousel-caption strong { font-size: 14px; }
  .hero-visual { padding-bottom: 75px; }
}
```

测试时至少看：宽屏约 1440px、手机约 390px；中文/英文、浅色/深色各看一次。留意手机是否出现横向滚动条、中文标题是否换行、轮播标题是否压住按钮、项目卡片是否超出屏幕。

## 7. 修改按钮、项目卡片、头像、导航与图标

| 外观 | 主要 CSS 类名 | 所在页面 / 图片 |
|---|---|---|
| 左上角圆形头像 | `.brand-avatar` | 每页顶栏；图像 `assets/images/portrait.webp` |
| About 大头像 | `.portrait` | `about.html`、`zh/about.html`；同一张头像 |
| 顶部导航 | `.site-header`, `.header-inner`, `.nav` | 每个 HTML 都有 |
| 语言切换 | `.lang-switch` | HTML 负责两种链接，`site.js` 记录语言偏好 |
| 夜间切换按钮 | `.icon-btn`, `[data-theme-toggle]` | `site.js` 切换 `data-theme` |
| 首页主按钮 | `.button`, `.button.ghost` | `index.html`、`zh/index.html` |
| 项目封面及卡片 | `.project-card`, `.project-cover`, `.card-body` | 首页及两份列表页 |
| 绿色强调词 | `.hero h1 em`, `.section-head h2 em` 等 | HTML 用 `<em>词语</em>` 标出 |
| 右侧方形轮播 | `.hero-visual`, `.carousel-photo`, `.carousel-caption` | 中英文首页 |
| About 四项技能卡 | `.skill-list`, `.skill-list article` | 中英文 About |

修改 CSS 只会改变外观，不会改变项目内容或顺序。项目文字、图片及导航链接请看 [`README.md`](README.md)。

## 8. 不建议碰的地方 & 发布检查

- 不要删 `meta charset="utf-8"`；这次中文乱码问题已经修复，中文 HTML 目前使用 **UTF-8 BOM**。
- 不要删根目录 `.nojekyll`；新版无需旧 Jekyll 构建。
- 不要在未测试的情况下全局改所有 `a`、`img` 或 `section` 样式；优先选用具体类名。
- 不要把 `custom.css` 改名而忘记同步更新 26 个 HTML 的引用。
- 如果只是改颜色/字号，通常**不需要修改 JavaScript**，也不需要重新安装框架。
- 改完强制刷新 `Ctrl+F5`，检查浏览器控制台（F12 → Console）无明显错误，然后再提交 GitHub。

最终发布/回滚方法见 [`PUBLISH_GUIDE.md`](PUBLISH_GUIDE.md)。

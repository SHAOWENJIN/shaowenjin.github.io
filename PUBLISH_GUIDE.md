# 首次上传至 GitHub Pages：一步一步操作

目标：**直接替换原仓库里的旧 Jekyll 网站，保留原仓库、Git 提交历史和原网址** <https://shaowenjin.github.io/>。不需要创建新仓库或购买域名，也不用把 ZIP 整包当成一个文件上传。

## 最稳妥的方法：GitHub Desktop（推荐给首次更新者）

### A. 准备、备份（先做）

1. 下载本次正式版 `shaowenjin-github-release.zip`，右键 **全部解压**，打开内部 `shaowenjin-github-release` 文件夹，确认你能看见顶层的 `index.html`、`zh/`、`assets/`、`README.md`、`README_DESIGN.md`、`PUBLISH_GUIDE.md`。若看不到 `.nojekyll`，Windows 文件资源管理器顶部「查看 → 显示 → 隐藏的项目」打开即可。
2. 打开原仓库 <https://github.com/shaowenjin/shaowenjin.github.io>，点击绿色 **Code → Download ZIP**，将**旧版源码 ZIP** 保存在电脑其它位置，例如 `website-backup-before-release.zip`。不要把备份 ZIP 放到即将发布的文件夹内。
3. 安装并登录 [GitHub Desktop](https://desktop.github.com/)；登录时使用拥有该原仓库权限的 GitHub 账号。

### B. 克隆原仓库（不要新建一个仓库）

1. GitHub Desktop → **File → Clone repository**（也可点击 Add → Clone repository）。
2. 在 GitHub.com 页签选择 `shaowenjin.github.io`；若未出现，URL 页签粘贴 `https://github.com/shaowenjin/shaowenjin.github.io.git`。
3. 选择本地目录（例如 `Documents/GitHub/shaowenjin.github.io`），点击 **Clone**。
4. 看左上角 `Current repository` 确认为原仓库，`Current branch` 确认为网站当前发布分支（通常是 `main`；若实际不是，请以你 GitHub Pages 设置的分支为准）。打开 **Repository → Show in Explorer**，进入仓库本地文件夹。

### C. 完整替换网站文件（关键）

当前原站是 Jekyll 模板，**不能只把新文件覆盖过去而保留所有旧文件**，否则 `_config.yml`、`_pages/`、`_includes/` 等旧内容仍可能参与发布。建议这样做：

1. 在克隆的**仓库根目录**中选中旧版文件与文件夹并删除，**唯独不要动隐藏的 `.git` 文件夹**（它存储这个仓库的历史与连接）。如果担心误删，先用上面的 ZIP 备份，再确认路径和 `.git`；不要在其它项目目录下执行。
2. 将本次解压得到的 `shaowenjin-github-release` 文件夹中的**全部内容**复制到仓库根目录，包含 `index.html`、`about.html`、`projects.html`、`projects/`、`zh/`、`assets/`、`favicon.ico`、三份 Markdown 和 `.nojekyll`。
3. **不要把外层 `shaowenjin-github-release` 文件夹本身再套一层放入仓库；不要上传 ZIP 文件到仓库根目录。** 应当能在仓库主页直接看到 `index.html`。
4. 回到 GitHub Desktop，会看到旧文件删除、新文件增加等大量 changes，这在本次整站替换中是正常的。确认没有混入个人资料或本地备份 ZIP 后，左下方填写 commit summary，例如 `Publish bilingual portfolio website`，点击 **Commit to main**（若实际分支不是 main，此处会显示对应分支）。再点击上方 **Push origin**。

### D. 打开 GitHub Pages 发布设置

1. 浏览器打开原仓库 → **Settings → Pages**。
2. 在 **Build and deployment** 中将 **Source** 选为 **Deploy from a branch**（本版已经是静态网站，不依赖之前的 Jekyll 工作流）。
3. **Branch** 选择刚才提交的分支，文件夹选择 **/(root)**，点击 **Save**。若原本就是这个设置，可以不用改。
4. 根目录的空文件 `.nojekyll` 必须保留，用来关闭 GitHub Pages 的默认 Jekyll 构建。
5. 查看仓库顶部 **Actions** 中的 Pages 构建 / 部署状态；部署成功后访问 <https://shaowenjin.github.io/>。GitHub 官方说明修改发布后可能需要约 **10 分钟** 才能显示新版。
6. 若仍显示旧版：按 `Ctrl+F5` 强制刷新，或开一个无痕窗口；检查 Pages 所选分支/目录是否正确、顶层是否真有 `index.html`。

## 最终仓库的正确结构

```text
shaowenjin.github.io/         ← GitHub 仓库根目录，而不是额外套一层 ZIP 文件夹
├── .git/                     ← GitHub Desktop 克隆时生成：一定保留，不上传成网页文件
├── .nojekyll                 ← 新包自带：一定保留
├── index.html                ← 首页入口（必须在根目录）
├── projects.html
├── about.html
├── projects/                  ← 10 个英文详情页
├── zh/                        ← 中文首页、列表和 10 个中文详情页
├── assets/
│   ├── css/style.css
│   ├── css/custom.css
│   ├── js/site.js
│   ├── images/
│   └── files/
├── favicon.ico
├── README.md
├── README_DESIGN.md
└── PUBLISH_GUIDE.md
```

`.git/` 是克隆时才有的本地隐藏文件夹，发布 ZIP 内**不会包含它**。

## 以后怎么更新文字或图片？

先看内容手册 [`README.md`](README.md) 或设计手册 [`README_DESIGN.md`](README_DESIGN.md)，在本地仓库修改，预览确认无误后打开 GitHub Desktop，填写本次修改说明 → **Commit to main → Push origin**。网站就会重新发布。少量文字也可在 GitHub 网页直接打开具体文件、点击铅笔编辑并提交，但大面积改动/多语言同步仍推荐 VS Code + GitHub Desktop。

## 如何撤回到旧版？

- 旧内容仍可在 Git 提交历史中找回（本教程的删除是一次新提交，**不是删除历史**），也有 A 步保存的旧站 ZIP。
- 简单办法：将克隆仓库里的当前网站文件（不含 `.git`）先移走/删除，再把备份 ZIP 内旧网站文件夹中的**内容**复制回仓库根目录；检查原 Pages 发布模式是否需要恢复 Jekyll（旧版没有 `.nojekyll`），再通过 GitHub Desktop **Commit → Push**。先确保选中的是正确的旧版源码，而不是外层 ZIP。
- 如果在提交前发现复制错误，可通过 GitHub Desktop 的 Changes 页面选择丢弃尚未提交的修改（Discard Changes），谨慎操作，以免丢失自己尚未备份的编辑。

## 常见故障

| 现象 | 排查方法 |
|---|---|
| 网站 404 或空白 | 确认 `index.html` 在仓库根目录；Pages 是否指向正确分支与 `/(root)`；看 Actions 是否成功 |
| 仍是旧版 | 等候部署、`Ctrl+F5`、无痕窗口；检查新提交是否已经 `Push origin` |
| 中文乱码 | 完整解压，使用 VS Code 以 UTF-8 打开，勿用记事本另存成 ANSI/GBK；检查 HTML 开头有 `meta charset="utf-8"` |
| 图片/CSS 不加载 | 检查 `assets/` 是否完整上传、文件名大小写、`src`/`href` 的 `../` 层级；不要上传 ZIP 代替解压后的文件 |
| 语言切换跳转异常 | 检查英语和中文对应的同名详情页都存在；清除浏览器中此站点的语言偏好，或点击 EN/中重设偏好 |
| 明暗模式不更新 | 确认 `assets/js/site.js` 已上传、浏览器无报错；清缓存后重试 |
| Pages 显示 build error | 确认 `.nojekyll` 在根目录，Source 设为 Deploy from a branch；不要保留旧的 Jekyll `_config.yml` 或旧版冲突工作流 |

安全提醒：本仓库为公开个人网站，上传的图片、PDF、README 及网页文本都将公开可见，请勿放入任何私密内容或公司未授权资料。

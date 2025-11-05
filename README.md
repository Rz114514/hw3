# 个人网站（静态）

使用 AI Coding 的 IDE 在空目录生成的静态个人网站，可直接在 Vercel 上部署。

## 本地运行

- 直接用浏览器打开 `index.html` 即可预览。

## 部署到 Vercel（推荐）

方法一：GitHub 仓库导入
- 新建一个 GitHub 仓库，将本目录全部文件提交（`index.html`, `styles.css`, `script.js`, `public/`, `vercel.json`, `README.md`, `PROMPTS.md`）。
- 打开 Vercel 控制台，选择 `Add New Project -> Import Git Repository`，选择你的仓库。
- Framework 选择 `Other`（静态站点），Build/Output 维持默认（无构建步骤，静态文件）。
- 部署完成后会得到你的线上网址（如 `https://你的项目名.vercel.app`）。

方法二：直接上传
- 在 Vercel 控制台选择 `Add New Project -> ... -> Deploy`，上传本目录所有文件。
- 部署完成后同样会得到线上网址。

## 运行截图要求（示例指引）

- 本地运行截图：浏览器打开 `index.html` 的页面截图。
- 线上运行截图：部署成功后的 `vercel.app` 页面截图。
- Vercel 控制台截图：Project 概览页或 Deployments 成功状态截图。

你可以将截图放到 `submission/` 目录（需要你本地新建并放入 PNG/JPG），例如：
- `submission/local-preview.png`
- `submission/vercel-live.png`
- `submission/vercel-dashboard.png`

## 自定义

- 修改主页文字、头像链接、邮箱、GitHub 链接等：编辑 `index.html`。
- 调整主题色与样式：编辑 `styles.css`。
- 修改交互（主题切换、表单演示）：编辑 `script.js`。

## 目录结构

```
.
├─ index.html         # 主页
├─ styles.css         # 样式
├─ script.js          # 交互脚本
├─ public/
│  └─ favicon.svg     # 站点图标
├─ vercel.json        # Vercel 部署配置（静态）
├─ README.md          # 使用说明（本文件）
└─ PROMPTS.md         # 提示词（作业要求）
```

## 许可证

MIT



<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# 不见兔官网

新版的作品首页，内容与图片已内置，不依赖旧版目录。

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Run the app:
   `npm run dev`

## 部署

`npm run deploy` 会先构建网站，并把 `CNAME` 和 `.nojekyll` 写入 `dist/`；当项目已配置 Git 的 `origin` 远程仓库时，它会提交并推送当前分支，以触发 GitHub Pages 发布。

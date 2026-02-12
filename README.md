<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1aOdYEPXB3WT0PGAZ9hYzbbcxUr4Gxfkg

## Run Locally

**Prerequisites:**  Node.js

1. Install dependencies: `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app: `npm run dev`

---

## 部署到 GitHub Pages

### 一、在 GitHub 上开启 Pages（只需做一次）

1. 打开仓库：<https://github.com/superwyh/invisiblerabbit>
2. 点顶部 **Settings** → 左侧 **Pages**
3. 在 **Build and deployment** 里：
   - **Source** 选择 **GitHub Actions**（不要选 “Deploy from a branch”）
4. 保存（无需填别的）

### 二、每次要发布网站时

1. 把本地代码推送到 GitHub 的 `main` 分支：
   ```bash
   git add .
   git commit -m "你的提交说明"
   git push origin main
   ```
2. 推送后会自动触发部署：
   - 打开仓库 → 点顶部 **Actions**
   - 能看到名为 “Deploy to GitHub Pages” 的 workflow 在跑
   - 等它变绿（约 1–2 分钟）即部署完成
3. 访问网站：
   - 自定义域名：**https://in.visiblerabbit.com**（需在 DNS 里已解析到 GitHub）
   - 或 GitHub 默认：**https://superwyh.github.io/invisiblerabbit**

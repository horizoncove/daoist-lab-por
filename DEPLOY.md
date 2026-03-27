# Daoist Lab PoR System - Deployment Guide

项目已在本地完成核心逻辑开发（首页、祭坛、NFC 模拟器、用户控制台、PoR 存证页）。

## 🚀 线上发布步骤 (Deployment)

### 1. 推送到 GitHub
项目已初始化 Git。请确保已在 GitHub 上手动创建 `daoist-lab-por` 仓库，并绑定 SSH 密钥。
```powershell
git remote set-url origin git@github.com:horizoncove/daoist-lab-por.git
git push -u origin main
```

### 2. 部署到 Vercel (推荐)
Vercel 是 Next.js 的官方发布平台，永久免费且性能极佳。
1. 访问 [Vercel.com](https://vercel.com/) 并登录 GitHub 账号。
2. 点击 **Add New > Project**。
3. 导入 `daoist-lab-por` 仓库。
4. 在 Environment Variables (环境变量) 中添加（可选）：
   - `DATABASE_URL`: 若使用生产级数据库（如 Supabase）请填写。
5. 点击 **Deploy**。

### 3. 获取公网链接
部署完成后，Vercel 会自动分配一个域名（如 `daoist-lab.vercel.app`）。

---

## 🛠️ 技术栈清单 (Tech Stack)
- **Frontend**: Next.js 16 (App Router), Tailwind CSS, Framer Motion, Lucide React.
- **Backend**: Next.js API Routes, Prisma (ORM).
- **Database**: SQLite (Local), 可平滑迁移至 Postgres (Cloud).
- **PoR System**: Geolib (Geofencing), NTAG 424 DNA Logic (Mock).

---
The Daoist Lab &copy; 2026
Connecting Ancient Ritual with Immutable Code.

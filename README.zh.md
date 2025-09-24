<p align="center">
  <img src="./docs/public/vitepress-logo-large.webp" alt="VitePress Logo" width="200" />
</p>

<h1 align="center">VitePress Template</h1>

<div align="center">
  <img src="https://img.shields.io/badge/VitePress-42D793?logo=vite&logoColor=white" alt="Built with VitePress">
  <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT">
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs Welcome">
</div>

<div align="center">
  <a href="./README.md">English</a> |
  <a href="./README.zh.md">简体中文</a>
</div>

## 📖 项目简介

VitePress Template 是一个开箱即用的文档站点模板，基于 [VitePress](https://vitepress.dev/) 构建，专为技术文档、产品说明和知识库而设计。该模板提供了现代化的设计、快速的开发体验和灵活的定制选项。

### 🌟 特性

- **快速开发**: 基于 Vite 构建，提供极快的热重载和构建速度
- **多语言支持**: 内置中英文双语支持，可轻松扩展其他语言
- **响应式设计**: 适配各种设备屏幕，提供优秀的移动端阅读体验
- **SEO 友好**: 自动生成 sitemap，支持搜索引擎优化
- **易于部署**: 支持部署到 GitHub Pages、Netlify、Vercel 等平台
- **主题定制**: 可自定义主题颜色、布局和组件

### 🎯 适用场景

- 开源项目文档
- 企业技术文档
- 产品使用手册
- 知识库系统
- 个人博客或笔记

## 🚀 快速开始

### 0. 要求

- [Node.js](https://nodejs.org/) 18 及以上版本。

### 1. 安装

```bash
pnpm install
```

### 2. 启动开发服务器

```bash
pnpm docs:dev
```

### 3. 构建静态站点

```bash
pnpm docs:build
```

### 4. 预览构建结果

```bash
pnpm docs:preview
```

## 🌐 在线演示

[查看在线演示](https://vitepress-template.oby.ink)

## 📁 项目结构

```
.
├── docs/
│   ├── .vitepress/           # VitePress 配置
│   │   └── config/           # 配置文件
│   ├── en/                   # 英文文档
│   ├── zh/                   # 中文文档
│   └── public/               # 静态资源
├── package.json              # 项目配置文件
└── README.md                 # 项目说明文件
```

## 🌍 多语言支持

本项目支持中英文双语:

- 英文文档位于 `docs/en/` 目录下
- 中文文档位于 `docs/zh/` 目录下

如果需要其他语言，可根据项目结构和配置文件自行扩展。

## 🙏 感谢

特别感谢以下开源项目:

- [VitePress](https://github.com/vuejs/vitepress) - 由 Vite 和 Vue 驱动的静态站点生成器
- [Vue.js](https://github.com/vuejs/vue) - 渐进式 JavaScript 框架
- [Vite](https://github.com/vitejs/vite) - 下一代前端构建工具

## 📄 许可证

[MIT](LICENSE)
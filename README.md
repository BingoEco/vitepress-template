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

## 📖 Project Introduction

VitePress Template is an out-of-the-box documentation site template built on [VitePress](https://vitepress.dev/), designed specifically for technical documentation, product instructions, and knowledge bases. The template provides a modern design, fast development experience, and flexible customization options.

### 🌟 Features

- **Fast Development**: Built on Vite, providing extremely fast hot reload and build speed
- **Multi-language Support**: Built-in bilingual support for Chinese and English, easily extendable to other languages
- **Responsive Design**: Adapts to various device screens, providing an excellent mobile reading experience
- **SEO Friendly**: Automatically generates sitemap, supports search engine optimization
- **Easy Deployment**: Supports deployment to platforms like GitHub Pages, Netlify, Vercel, etc.
- **Theme Customization**: Customizable theme colors, layouts, and components

### 🎯 Use Cases

- Open source project documentation
- Enterprise technical documentation
- Product user manuals
- Knowledge base systems
- Personal blogs or notes

## 🚀 Quick Start

### 0. Requirements

- [Node.js](https://nodejs.org/) version 18 or higher.

### 1. Installation

```bash
pnpm install
```

### 2. Start Development Server

```bash
pnpm docs:dev
```

### 3. Build Static Site

```bash
pnpm docs:build
```

### 4. Preview Build Results

```bash
pnpm docs:preview
```

## 🌐 Online Demo

[View Online Demo](https://vitepress-template.oby.ink)

## 📁 Project Structure

```
.
├── docs/
│   ├── .vitepress/           # VitePress configuration
│   │   └── config/           # Configuration files
│   ├── en/                   # English documentation
│   ├── zh/                   # Chinese documentation
│   └── public/               # Static assets
├── package.json              # Project configuration file
└── README.md                 # Project description file
```

## 🌍 Multi-language Support

This project supports bilingual Chinese and English:

- English documentation is located in the `docs/en/` directory
- Chinese documentation is located in the `docs/zh/` directory

If you need other languages, you can extend them according to the project structure and configuration files.

## 🙏 Acknowledgements

Special thanks to the following open source projects:

- [VitePress](https://github.com/vuejs/vitepress) - Static site generator powered by Vite and Vue
- [Vue.js](https://github.com/vuejs/vue) - Progressive JavaScript framework
- [Vite](https://github.com/vitejs/vite) - Next generation frontend build tool

## 📄 License

[MIT](LICENSE)
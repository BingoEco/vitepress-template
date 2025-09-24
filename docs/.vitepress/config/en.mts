import { defineConfig, type DefaultTheme } from "vitepress";
import packageJson from "../../../package.json";

export const en = defineConfig({
  lang: "en-US",
  description: "Vite & Vue powered static site generator.",

  themeConfig: {
    nav: nav(),

    sidebar: {
      "/backend/": { base: "/backend/", items: sidebarBackend() },
      "/frontend/": { base: "/frontend/", items: sidebarFrontend() },
    },

    editLink: {
      pattern: "https://github.com/vuejs/vitepress/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2019-present Your Name",
    },
  },
});

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: "Backend",
      link: "/backend/introduction",
      activeMatch: "/backend/",
    },
    {
      text: "Frontend",
      link: "/frontend/introduction",
      activeMatch: "/frontend/",
    },
    {
      text: "Demo",
      link: "https://github.com/vuejs/vitepress",
    },
    {
      text: "Learn more",
      items: [
        {
          text: "Backend-related ",
          items: [
            {
              text: "Go",
              link: "https://golang.google.cn/",
            },
            {
              text: "Gin",
              link: "https://gin-gonic.com/",
            },
            {
              text: "Gorm",
              link: "https://gorm.io/",
            },
          ]
        },
    
        {
          text: "Frontend-related",
          items: [
            {
              text: "Vitepress",
              link: "https://vitepress.dev/",
            },
            {
              text: "Vue",
              link: "https://vuejs.org/",
            },
            {
              text: "Vite",
              link: "https://vitejs.dev/",
            },
            {
              text: "Vue Router",
              link: "https://router.vuejs.org/",
            },
          ]
        },
      ],
    },
    {
      text: `v${packageJson.version}`,
      items: [
        {
          text: "Changelog",
          link: "https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md",
        },
        {
          text: "Contributing",
          link: "https://github.com/vuejs/vitepress/blob/main/.github/contributing.md",
        },
      ],
    },
  ];
}

function sidebarBackend(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Introduction",
      collapsed: false,
      items: [
        { text: "Project Introduction", link: "introduction" },
        { text: "Getting Started", link: "getting-started" },
        { text: "Project Structure", link: "project-structure" },
        { text: "Deploy", link: "deploy" },
      ],
    },
    {
      text: "Function",
      collapsed: false,
      items: [
        { text: "Permission", link: "permission" },
        { text: "OSS", link: "oss" },
      ],
    },
    {
      text: "FAQ",
      link: "faq",
    },
  ];
}

function sidebarFrontend(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Introduction",
      collapsed: false,
      items: [
        { text: "Project Introduction", link: "introduction" },
        { text: "Getting Started", link: "getting-started" },
        { text: "Project Structure", link: "project-structure" },
        { text: "Deploy", link: "deploy" },
      ],
    },
    {
      text: "Development",
      collapsed: false,
      items: [
        { text: "Request", link: "request" },
        { text: "Router", link: "router" },
      ]
    },
    {
      text: "FAQ",
      link: "faq",
    },
  ];
}

import { defineConfig } from "vitepress";
import { search as zhSearch } from "./zh.mts";

export const shared = defineConfig({
  title: "VitePress",

  // 重定向
  rewrites: {
    "en/:rest*": ":rest*",
  },

  sitemap: {
    hostname: "https://vitepress-template.oby.ink",
    transformItems(items) {
      return items.filter((item) => !item.url.includes("migration"));
    },
  },

  head: [
    [
      "link",
      { rel: "icon", type: "image/svg+xml", href: "/vitepress-logo-mini.svg" },
    ],
    [
      "link",
      { rel: "icon", type: "image/png", href: "/vitepress-logo-mini.png" },
    ],
    ["meta", { name: "theme-color", content: "#5f67ee" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:locale", content: "en" }],
    [
      "meta",
      {
        property: "og:title",
        content: "VitePress | Vite & Vue Powered Static Site Generator",
      },
    ],
    ["meta", { property: "og:site_name", content: "VitePress" }],
    [
      "meta",
      {
        property: "og:image",
        content: "https://vitepress.dev/vitepress-og.jpg",
      },
    ],
    ["meta", { property: "og:url", content: "https://vitepress.dev/" }],
    [
      "script",
      {
        src: "https://cdn.usefathom.com/script.js",
        "data-site": "AZBRSFGG",
        "data-spa": "auto",
        defer: "",
      },
    ],
  ],

  themeConfig: {
    logo: { src: "/vitepress-logo-mini.svg", width: 24, height: 24 },

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],

    search: {
      provider: "local",
      options: {
        locales: {
          ...zhSearch,
        },
      },
    },
  },
});

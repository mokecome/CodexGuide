import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";

import { getPageDescription, siteDescription } from "./seo.js";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  dest: "docs/.vuepress/dist",
  lang: "zh-TW",
  title: "Codex 新手實戰指南",
  description: siteDescription,

  head: [
    ["meta", { name: "robots", content: "index,follow,max-image-preview:large" }],
    ["meta", { name: "author", content: "Codex 新手實戰指南" }],
    [
      "meta",
      {
        name: "keywords",
        content:
          "Codex,Codex 教學,OpenAI Codex,Codex CLI,AGENTS.md,AI 程式設計,AI Agent,AI 工作流程,台灣 Codex 教學,Codex guide",
      },
    ],
    ["meta", { name: "theme-color", content: "#0f766e" }],
    ["meta", { name: "format-detection", content: "telephone=no" }],
    ["link", { rel: "icon", href: "/logo.svg", type: "image/svg+xml" }],
  ],

  plugins: [
    {
      name: "codexguide-seo-defaults",
      extendsPage: (page) => {
        if (!page.frontmatter.description) {
          page.frontmatter.description = getPageDescription(page.path);
        }
      },
    },
  ],

  bundler: viteBundler(),

  theme,

  pagePatterns: ["**/*.md", "!.vuepress", "!node_modules"],

  shouldPrefetch: false,
  shouldPreload: false,
});

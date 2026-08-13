import { navbar } from "vuepress-theme-hope";

export default navbar([
  { text: "首頁", icon: "home", link: "/" },
  { text: "入口地圖", icon: "layout", link: "/platform/" },
  {
    text: "免費指南",
    icon: "map",
    children: [
      { text: "60 天路線", icon: "map", link: "/guide/00-overview.md" },
      { text: "第一次任務", icon: "code", link: "/guide/06-app-first-task.md" },
      { text: "使用方法", icon: "tool", link: "/practice/" },
    ],
  },
  { text: "課程", icon: "calendar", link: "/community/courses.md" },
  {
    text: "案例",
    icon: "lightbulb",
    children: [
      { text: "案例總覽", icon: "layout", link: "/recipes/" },
      { text: "整理資料與簡報", icon: "slides", link: "/recipes/ppt-skill-walkthrough.md" },
      { text: "操作瀏覽器與網頁檢查", icon: "chrome", link: "/recipes/playwright-mcp.md" },
      { text: "知識庫與筆記", icon: "note", link: "/recipes/obsidian-codex.md" },
      { text: "設計稿與前端", icon: "palette", link: "/recipes/figma-mcp-codex.md" },
      { text: "輕開發與排障", icon: "debug", link: "/guide/18-troubleshooting.md" },
    ],
  },
  {
    text: "進階設定",
    icon: "gear",
    children: [
      { text: "設定總覽", icon: "map", link: "/configuration/" },
      { text: "CLI 安裝與登入", icon: "download", link: "/guide/12-cli-installation.md" },
      { text: "第一次改程式", icon: "edit", link: "/guide/13-cli-first-run.md" },
      { text: "AGENTS.md", icon: "file", link: "/guide/15-agents-md.md" },
      { text: "沙盒與審核", icon: "lock", link: "/guide/16-sandbox-approvals.md" },
      { text: "團隊使用", icon: "people", link: "/practice/team-playbook.md" },
    ],
  },
]);

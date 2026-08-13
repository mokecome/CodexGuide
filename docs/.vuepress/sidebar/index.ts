import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/guide/": [
    { text: "60 天小白實戰路線", icon: "map", link: "/guide/00-overview.md" },
    {
      text: "入門準備",
      icon: "desktop",
      prefix: "/guide/",
      collapsible: true,
      expanded: false,
      children: [
        { text: "01 桌面 App 安裝", link: "01-app-installation.md" },
        { text: "02 訂閱 Plus", link: "02-subscribe-plus.md" },
        { text: "03 桌面 App 總覽", link: "03-app-overview.md" },
        { text: "04 手機端協同", link: "04-mobile-control-desktop.md" },
        { text: "05 連線第三方 API", link: "05-third-party-api.md" },
        { text: "06 第一個任務", link: "06-app-first-task.md" },
      ],
    },
    {
      text: "日常工作流",
      icon: "tool",
      prefix: "/guide/",
      collapsible: true,
      expanded: false,
      children: [
        { text: "07 任務執行", link: "07-task-execution.md" },
        { text: "08 權限管理", link: "08-permissions.md" },
        { text: "09 Skills 與外掛", link: "09-skills-plugins.md" },
        { text: "10 自動化", link: "10-automation.md" },
        { text: "11 桌面工作台", link: "11-desktop-pet.md" },
      ],
    },
    {
      text: "CLI 與 IDE",
      icon: "terminal",
      prefix: "/guide/",
      collapsible: true,
      expanded: false,
      children: [
        { text: "12 CLI 安裝與登入", link: "12-cli-installation.md" },
        { text: "13 CLI 改程式", link: "13-cli-first-run.md" },
        { text: "14 VS Code 外掛", link: "14-ide-vscode.md" },
      ],
    },
    {
      text: "進階與團隊",
      icon: "rocket",
      prefix: "/guide/",
      collapsible: true,
      expanded: false,
      children: [
        { text: "15 AGENTS.md", link: "15-agents-md.md" },
        { text: "16 沙盒與審核", link: "16-sandbox-approvals.md" },
        { text: "17 Codex Cloud", link: "17-cloud-ide-app.md" },
        { text: "18 排障手冊", link: "18-troubleshooting.md" },
      ],
    },
  ],

  "/recipes/": [
    {
      text: "實戰案例",
      icon: "lightbulb",
      prefix: "/recipes/",
      children: [
        { text: "案例總覽", link: "index.md" },
        { text: "01 Codex × PPT Skill：生成簡報", link: "ppt-skill-walkthrough.md" },
        { text: "02 Codex × Draw.io MCP：繪製架構圖", link: "drawio-mcp.md" },
        { text: "03 Codex × Playwright MCP：操作瀏覽器", link: "playwright-mcp.md" },
        { text: "04 Codex × HyperFrames：生成動畫影片", link: "hyperframes-animation.md" },
        { text: "05 Codex × Obsidian：整理知識庫", link: "obsidian-codex.md" },
        { text: "06 Codex × Google Workspace：整理團隊資料", link: "google-workspace-codex.md" },
        { text: "07 Codex × LLM Wiki：搭建 AI 知識庫", link: "llm-wiki-codex.md" },
        { text: "08 Codex × Figma MCP：讀懂設計稿", link: "figma-mcp-codex.md" },
        { text: "09 Codex × Notion MCP：打通知識空間", link: "notion-mcp-codex.md" },
        { text: "10 Codex × DKFile：發布網頁", link: "dkfile-deploy-codex.md" },
        { text: "11 Codex × 雲端伺服器：遠端修 Bug", link: "remote-bug-fix.md" },
        { text: "12 Codex × Chrome：控制瀏覽器", link: "chrome-browser-plugin.md" },
        { text: "13 Codex × GitHub Actions：修 CI", link: "github-actions-ci-fix.md" },
        { text: "14 Codex × 臨床文獻綜述：整理證據表", link: "clinical-literature-review.md" },
        { text: "參考來源與致謝", link: "credits.md" },
      ],
    },
  ],

  "/platform/": [
    {
      text: "使用入口",
      icon: "layout",
      prefix: "/platform/",
      children: ["index.md", "cli.md", "app.md", "cloud.md", "ide.md", "chatgpt.md"],
    },
  ],

  "/configuration/": [
    {
      text: "設定與擴充",
      icon: "gear",
      prefix: "/configuration/",
      children: [
        "index.md",
        "cli-options.md",
        "config-file.md",
        "mcp-skills-subagents.md",
        "security-admin.md",
      ],
    },
  ],

  "/practice/": [
    {
      text: "實踐方法",
      icon: "tool",
      prefix: "/practice/",
      children: ["index.md", "task-design.md", "non-dev-workflows.md", "team-playbook.md"],
    },
  ],

  "/reference/": [
    {
      text: "資料索引",
      icon: "link",
      prefix: "/reference/",
      children: ["index.md"],
    },
  ],

  "/community/": [
    {
      text: "社群共建",
      icon: "people",
      prefix: "/community/",
      children: ["courses.md", "roadmap.md"],
    },
  ],

  "/": [
    {
      text: "CodexGuide",
      icon: "home",
      children: [
        "/guide/00-overview.md",
        "/guide/01-app-installation.md",
        "/guide/04-mobile-control-desktop.md",
        "/guide/05-third-party-api.md",
        "/guide/06-app-first-task.md",
        "/platform/",
        "/configuration/",
        "/practice/",
        "/recipes/",
        "/community/courses.md",
        "/reference/",
        "/community/roadmap.md",
      ],
    },
  ],
});

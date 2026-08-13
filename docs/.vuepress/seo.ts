export const siteUrl = "https://codexguide.ai";

export const siteDescription =
  "Codex AI 工作與輕開發課，給設計師、PM、內容工作者整理資料、拆解需求、產出內容，並完成低風險技術任務。";

export const siteOgImage = `${siteUrl}/og.svg`;

export const pageDescriptions: Record<string, string> = {
  "/": siteDescription,
  "/community/":
    "Codex 社群共建入口，整理路線圖、貢獻方向和內容認領方式，方便一起完善 Codex 繁中實戰知識庫。",
  "/community/courses.html":
    "Codex AI 工作與輕開發課，提供直播線上課與線下陪跑小班，適合設計師、PM、內容工作者整理資料、拆需求、產內容和做低風險技術任務。",
  "/community/roadmap.html":
    "Codex 新手實戰指南共建路線圖，記錄文件站骨架、教程、案例、截圖、關鍵詞索引和社群傳播的後續計劃。",
  "/configuration/":
    "Codex 設定與擴充套件總覽，梳理 AGENTS.md、config.toml、Skills、MCP、Subagents、安全審核和團隊設定路徑。",
  "/configuration/cli-options.html":
    "Codex CLI 選項與命令指南，覆蓋互動模式、非互動執行、恢復會話、Slash Commands 和常用啟動引數。",
  "/configuration/config-file.html":
    "Codex config.toml 設定指南，說明模型、沙盒、審核、profiles、MCP 和個人本地設定的組織方式。",
  "/configuration/mcp-skills-subagents.html":
    "Codex MCP、Skills 與 Subagents 指南，說明外部工具接入、流程固化和複雜任務拆分的使用場景。",
  "/configuration/security-admin.html":
    "Codex 安全、審核與管理指南，整理沙盒、網路訪問、憑據邊界、組織策略和團隊審計關注點，適合上線前檢查。",
  "/guide/":
    "Codex 新手實戰指南 60 天小白實戰路線，從資料整理、內容創作、網站修改、錯誤排查到團隊規則，幫助第一次使用者照場景練習。",
  "/guide/00-overview.html":
    "Codex 小白 60 天實戰路線，每天一個真實場景，學會怎麼指揮 Codex 整理資料、寫內容、改網站、查錯誤與建立團隊流程。",
  "/guide/01-app-installation.html":
    "Codex 桌面 App 下載與安裝教程，說明 macOS、Windows 安裝入口、帳號登入和首次啟動前的準備工作。",
  "/guide/02-subscribe-plus.html":
    "ChatGPT Plus 與 Pro 訂閱指南，整理 Codex 可用性、帳號準備、支付路徑和訂閱前需要核對的資訊。",
  "/guide/03-app-overview.html":
    "Codex 桌面 App 基本組成說明，介紹專案工作區、對話、設定入口、任務狀態和常見介面區域，方便快速定位功能。",
  "/guide/04-mobile-control-desktop.html":
    "手機端跟進桌面 Codex 任務教程，說明 ChatGPT App 入口、跨裝置連線、任務檢視和協同邊界。",
  "/guide/05-third-party-api.html":
    "Codex 連線第三方 API 的入門說明，比較手動設定、Codex++、CCX 與 CC Switch 三種接入方式，並提示金鑰和帳單風險。",
  "/guide/06-app-first-task.html":
    "用 Codex 完成第一個任務的入門教程，帶你選擇工作目錄、輸入任務、檢視結果並完成基礎驗證，形成操作習慣。",
  "/guide/07-task-execution.html":
    "Codex 任務順序執行與並行說明，幫助理解讀檔案、執行命令、修改檔案、驗證結果和彙報進度的機制，便於複核。",
  "/guide/08-permissions.html":
    "Codex 權限管理指南，說明檔案訪問、命令審核、網路權限、敏感資料和高風險操作的控制方式，適合任務前核對。",
  "/guide/09-skills-plugins.html":
    "Codex Skills 和 Plugins 入門說明，介紹技能、外掛、MCP 能力的關係，以及適合沉澱的工作流型別。",
  "/guide/10-automation.html":
    "Codex 自動化指南，說明定時任務、提醒、監控、後續跟進和適合自動化處理的工作場景，沉澱重複檢查流程。",
  "/guide/11-desktop-pet.html":
    "Codex 桌面形象設定教程，記錄桌面展示效果、素材準備、設定步驟和適合個性化工作台的用法，便於識別任務狀態。",
  "/guide/12-cli-installation.html":
    "Codex CLI 安裝與登入教程，覆蓋 Node 環境、安裝命令、版本檢查、登入流程和首次執行準備。",
  "/guide/13-cli-first-run.html":
    "第一次讓 Codex CLI 改程式碼的教程，說明如何選擇低風險任務、讓 Codex 讀倉庫、修改檔案並執行驗證。",
  "/guide/14-ide-vscode.html":
    "在 VS Code 中使用 Codex 的教程，介紹外掛入口、檔案上下文、區域性修改、解釋程式碼和編輯器內協作方式。",
  "/guide/15-agents-md.html":
    "AGENTS.md 專案規則指南，說明如何寫入專案命令、程式碼風格、禁用事項、驗證方式和團隊約定，讓 Codex 更懂倉庫。",
  "/guide/16-sandbox-approvals.html":
    "Codex 沙盒、審核與安全邊界指南，解釋只讀、寫入、網路、危險命令和人工確認策略，適合高風險任務前檢查。",
  "/guide/17-cloud-ide-app.html":
    "Codex Cloud 使用指南，說明雲端任務、倉庫連線、長任務、PR 工作流和與本地 App、IDE 的差異。",
  "/guide/18-troubleshooting.html":
    "Codex 排障手冊，彙總登入、安裝、權限、依賴、命令失敗和任務執行異常的定位與恢復路徑，幫助快速繼續工作。",
  "/platform/":
    "Codex 入口地圖，比較 CLI、桌面 App、Cloud、IDE、ChatGPT 和整合生態，幫助選擇合適工作入口。",
  "/platform/app.html":
    "Codex 桌面 App 入口說明，介紹本地專案、多工、Skills、Automations、外掛和桌面工作台場景。",
  "/platform/chatgpt.html":
    "ChatGPT 中的 Codex 使用說明，介紹倉庫任務分派、手機端跟進、帳號能力和適合對話入口的工作流。",
  "/platform/cli.html":
    "Codex CLI 入口說明，介紹本地倉庫修改、命令執行、測試驗證、diff 檢查和開發者日常使用場景。",
  "/platform/cloud.html":
    "Codex Cloud 與 Web 入口說明，介紹後臺任務、並行處理、GitHub 連線、PR 生成和團隊協作場景。",
  "/platform/ide.html":
    "Codex IDE 入口說明，介紹編輯器上下文、區域性程式碼修改、程式碼解釋、審查和高頻開發協作場景，提升日常效率。",
  "/practice/":
    "Codex 實踐方法總覽，整理任務設計、非開發工作流和團隊 playbook，幫助把一次任務做成可驗證閉環。",
  "/practice/non-dev-workflows.html":
    "Codex 非開發工作流指南，說明如何用於文件、學習、研究、內容整理、知識庫和團隊運營任務，讓交付更清晰。",
  "/practice/task-design.html":
    "Codex 任務設計方法，說明如何寫清目標、背景、範圍、約束、驗證和交付格式，讓執行結果更穩定，減少返工。",
  "/practice/team-playbook.html":
    "Codex 團隊實踐指南，整理 AGENTS.md、PR、排障、知識庫、任務模板和團隊推廣的協作方法。",
  "/recipes/":
    "Codex 實戰案例庫，收錄 PPT、Draw.io、Playwright、Obsidian、Google Workspace、Figma、Notion、CI 和遠端排障案例。",
  "/recipes/chrome-browser-plugin.html":
    "Codex Chrome 瀏覽器外掛案例，說明如何讓 AI 控制瀏覽器頁面、執行網頁任務並保持安全邊界。",
  "/recipes/credits.html":
    "Codex 新手實戰指南參考來源與致謝，整理案例中涉及的第三方工具、官方文件、倉庫連結和內容來源，便於追溯資料。",
  "/recipes/dkfile-deploy-codex.html":
    "Codex 與 DKFile 釋出案例，說明如何用 AI 生成網頁、構建靜態產物並一鍵釋出到公網，同時確認訪問結果。",
  "/recipes/drawio-mcp.html":
    "Codex 與 Draw.io MCP 案例，說明如何用 AI 自動繪製架構圖、整理節點關係並生成可編輯圖形。",
  "/recipes/google-workspace-codex.html":
    "Codex 與 Google Workspace、Notion、Slack 的協作案例，說明如何整理雲端文件、會議紀錄和團隊任務，適合台灣團隊導入。",
  "/recipes/figma-mcp-codex.html":
    "Codex 與 Figma MCP 案例，說明如何讀取設計稿、理解佈局與元件，並輔助前端實現或文件整理。",
  "/recipes/github-actions-ci-fix.html":
    "Codex 與 GitHub Actions 案例，說明 CI 失敗後如何讀取日誌、定位問題、自動修復並生成 PR。",
  "/recipes/hyperframes-animation.html":
    "Codex 與 HyperFrames 案例，說明如何用程式碼生成動畫影片，組織素材、指令碼、渲染和結果驗證。",
  "/recipes/llm-wiki-codex.html":
    "Codex 與 LLM Wiki 案例，說明如何在 Obsidian 中搭建 AI 知識庫、整理目錄、引用和更新流程。",
  "/recipes/notion-mcp-codex.html":
    "Codex 與 Notion MCP 案例，說明如何連線 Notion 知識空間、讀取頁面、整理資料庫和生成內容。",
  "/recipes/obsidian-codex.html":
    "Codex 與 Obsidian 案例，說明如何在本地知識庫中生成內容、管理圖片、組織筆記和保留引用。",
  "/recipes/playwright-mcp.html":
    "Codex 與 Playwright MCP 案例，說明如何讓 AI 操作瀏覽器、點選頁面、截圖檢查並驗證網頁狀態。",
  "/recipes/ppt-skill-walkthrough.html":
    "Codex 與 PPT Skill 案例，說明如何用一句話生成簡報，檢查結構、視覺一致性和匯出效果。",
  "/recipes/remote-bug-fix.html":
    "Codex 與雲伺服器排障案例，說明如何遠端復現問題、讀取日誌、定位 Python 報錯並驗證修復結果。",
  "/reference/":
    "Codex 官方資料索引，彙總 OpenAI 產品頁、Help Center、開發者文件、GitHub 倉庫和安全設定資料。",
};

export const getPageDescription = (path: string): string =>
  pageDescriptions[path] ?? siteDescription;

export const toSiteUrl = (path: string): string =>
  `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;

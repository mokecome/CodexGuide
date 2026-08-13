---
description: "Codex 實戰案例庫，收錄 PPT、Draw.io、Playwright、Obsidian、臨床文獻綜述、Google Workspace、Figma、Notion、CI 和遠端排障案例。"
---

# 實戰案例庫

這裡收集可復現、可改寫、可遷移到真實工作流裡的 Codex 使用案例。當前版本已收錄 14 個案例，覆蓋 Skill、MCP、瀏覽器自動化、知識庫、臨床文獻綜述、設計稿、團隊協作、遠端排障和 CI 自動修復。

## 當前案例概覽

| 型別 | 已收錄案例 | 適合學習什麼 |
| --- | --- | --- |
| 內容生產與表達 | PPT Skill、Draw.io MCP、HyperFrames | 把一句話需求轉成簡報、架構圖和動畫影片 |
| 知識庫與個人工作台 | Obsidian、LLM Wiki、Notion MCP | 在筆記、Wiki、知識空間中組織資料和生成內容 |
| 醫學科研與證據整理 | 臨床文獻綜述 | 把研究問題拆成 PICO、證據表、侷限性和安全邊界 |
| 瀏覽器與前端自動化 | Playwright MCP、Chrome 瀏覽器外掛 | 讓 Codex 操作網頁、檢查頁面、執行瀏覽器任務 |
| 設計與協作平台 | Figma MCP、Google Workspace、Notion、Slack | 讀取設計稿、整理雲端文件、連線團隊工具 |
| 釋出與工程運維 | DKFile、雲伺服器遠端修 Bug、GitHub Actions CI 修復 | 從本地/遠端環境到自動修復流程的完整閉環 |

## 14 個案例清單

| 編號 | 案例 | 核心場景 | 推薦入口 | 驗證重點 |
| --- | --- | --- | --- | --- |
| 01 | [Codex × PPT Skill：一句話生成簡報](./ppt-skill-walkthrough.md) | 用 Skill 生成 PPT 初稿 | 桌面 App / Skills | 結構、視覺一致性、匯出效果 |
| 02 | [Codex × Draw.io MCP：AI 自動繪製架構圖](./drawio-mcp.md) | 透過 MCP 生成架構圖 | App / MCP | 圖形層級、節點關係、可編輯性 |
| 03 | [Codex × Playwright MCP：讓 AI 操控瀏覽器](./playwright-mcp.md) | 用 Playwright 驅動瀏覽器操作 | App / MCP | 點選路徑、頁面狀態、截圖結果 |
| 04 | [Codex × HyperFrames：用程式碼生成動畫影片](./hyperframes-animation.md) | 生成視覺化動畫影片 | App / CLI | 動畫指令碼、渲染結果、素材路徑 |
| 05 | [Codex × Obsidian：在知識庫中自動生成配圖](./obsidian-codex.md) | 在本地筆記庫中呼叫 Codex | CLI / Obsidian | 檔案路徑、圖片生成、筆記引用 |
| 06 | [Codex × Google Workspace：整理團隊資料](./google-workspace-codex.md) | 整理 Google Docs、Sheets、Notion 或 Slack 匯出資料 | App / CLI | 資料來源、欄位對映、寫回權限 |
| 07 | [Codex × LLM Wiki：在 Obsidian 中搭建 AI 知識庫](./llm-wiki-codex.md) | 構建 AI 主題知識庫 | Obsidian / CLI | 目錄結構、引用來源、更新流程 |
| 08 | [Codex × Figma MCP：讀懂設計稿](./figma-mcp-codex.md) | 讀取設計稿並輔助實現 | MCP / IDE | 設計 token、佈局還原、元件邊界 |
| 09 | [Codex × Notion MCP：打通知識空間](./notion-mcp-codex.md) | 連線 Notion 做知識管理 | MCP | 資料庫權限、頁面結構、同步範圍 |
| 10 | [Codex × DKFile：網頁一鍵釋出到公網](./dkfile-deploy-codex.md) | 快速釋出靜態網頁 | CLI / API | 構建產物、上傳結果、訪問地址 |
| 11 | [Codex × 雲伺服器：遠端定位並修復 Bug](./remote-bug-fix.md) | 在遠端容器裡排查 Python 報錯 | CLI / Remote | 連線方式、復現命令、修復驗證 |
| 12 | [Codex × Chrome：讓 AI 直接控制瀏覽器](./chrome-browser-plugin.md) | 透過瀏覽器外掛執行網頁任務 | Browser Plugin | 頁面可見狀態、動作確認、安全邊界 |
| 13 | [Codex × GitHub Actions：CI 失敗自動修復](./github-actions-ci-fix.md) | CI 失敗後自動觸發 Codex 修復並開 PR | GitHub Actions | 權限設定、失敗提交、測試透過、PR 內容 |
| 14 | [Codex × 臨床文獻綜述：把醫學問題整理成可複核證據表](./clinical-literature-review.md) | 整理臨床科研問題和文獻證據 | App / CLI / Obsidian | PICO、證據來源、侷限性、醫療安全邊界 |

## 怎麼選擇先看哪個

如果你剛開始看實戰案例，建議按目標選：

- 想快速看到效果：先看 [PPT Skill](./ppt-skill-walkthrough.md)、[Draw.io MCP](./drawio-mcp.md)、[DKFile](./dkfile-deploy-codex.md)。
- 想學習 MCP：先看 [Playwright MCP](./playwright-mcp.md)、[Figma MCP](./figma-mcp-codex.md)、[Notion MCP](./notion-mcp-codex.md)。
- 想把 Codex 放進知識工作流：先看 [Obsidian](./obsidian-codex.md)、[LLM Wiki](./llm-wiki-codex.md)、[Google Workspace](./google-workspace-codex.md)。
- 想做醫學科研資料整理：先看 [臨床文獻綜述](./clinical-literature-review.md)，重點學習如何把事實、推斷和安全邊界分開。
- 想做工程自動化：先看 [雲伺服器遠端修 Bug](./remote-bug-fix.md)、[GitHub Actions CI 自動修復](./github-actions-ci-fix.md)。
- 想理解瀏覽器控制能力：先看 [Playwright MCP](./playwright-mcp.md) 和 [Chrome 瀏覽器外掛](./chrome-browser-plugin.md)。

## 案例成熟度

| 狀態 | 案例 | 說明 |
| --- | --- | --- |
| 已形成完整流程 | PPT Skill、Playwright MCP、Obsidian、Google Workspace、臨床文獻綜述、遠端修 Bug、GitHub Actions CI 修復 | 有明確安裝、使用步驟或完整操作鏈路 |
| 偏工具接入教程 | Draw.io MCP、Figma MCP、Notion MCP、DKFile、Chrome 瀏覽器外掛 | 重點在接入方式、典型任務和安全邊界 |
| 偏場景展示 | HyperFrames、LLM Wiki | 重點展示 Codex 與創作/知識庫場景的組合方式 |

## 每個案例建議補齊什麼

後續繼續完善案例時，建議統一補齊這些資訊：

- 背景：為什麼要做這個案例。
- 環境：系統、工具版本、帳號權限、依賴。
- 輸入：原始 prompt、設定檔案或資料來源。
- 過程：Codex 做了哪些關鍵動作。
- 結果：截圖、PR、網頁地址、匯出檔案或日誌。
- 驗證：如何判斷案例成功。
- 風險：權限、憑證、外部服務、寫回操作、成本和失敗場景。

## 參考來源

案例中涉及的第三方工具、倉庫和文章來源統一整理在 [參考來源與致謝](./credits.md)。

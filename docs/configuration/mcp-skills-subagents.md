---
description: "Codex MCP、Skills 與 Subagents 指南，說明外部工具接入、流程固化和複雜任務拆分的使用場景。"
---

# MCP、Skills 與 Subagents

當你已經能穩定完成單次任務，下一步就是把 Codex 變成可擴充套件的工作系統：用 MCP 連線工具和資料來源，用 Skills 固化流程，用 Subagents 拆分複雜工作。

::: tip 最後核對
官方資料最後核對日期：2026-05-27。本文參考 [Codex Skills](https://developers.openai.com/codex/skills)、[Codex 文件入口](https://developers.openai.com/codex/)、[openai/codex skills docs](https://github.com/openai/codex/blob/main/docs/skills.md) 與官方 MCP、Plugins、Subagents 相關頁面。
:::

## 三個概念

| 能力 | 解決的問題 | 適合沉澱什麼 |
| --- | --- | --- |
| MCP | 讓 Codex 訪問外部工具、系統或知識源 | GitHub、瀏覽器、內部文件、資料庫只讀查詢 |
| Skills | 把一套流程寫成可複用說明和指令碼 | 程式碼審查、釋出檢查、文件生成、案例收集 |
| Subagents | 把一個複雜任務拆給多個 agent 並行處理 | 大型重構、多模組分析、驗證與實現分離 |

## 什麼時候用 MCP

當任務需要“當前工作區之外”的上下文時，優先考慮 MCP。

典型例子：

- 讀 GitHub issue、PR、review comments。
- 開啟瀏覽器檢查本地頁面。
- 查詢內部知識庫。
- 讀取日曆、郵件、文件、表格。
- 連線設計稿或專案管理系統。

使用前先問四個問題：

1. 這個工具是否真的需要接入 Codex？
2. Codex 需要讀權限、寫權限，還是只需要搜尋？
3. 是否會接觸憑據、客戶資料或生產資源？
4. 輸出是否需要人工複核後再寫回外部系統？

## 什麼時候寫 Skill

當你第三次複製同一段長提示詞，就該考慮寫 Skill。

適合寫成 Skill 的流程：

- PR review：要求輸出嚴重級別、檔案行號、復現步驟、測試建議。
- 文件站更新：先讀目錄、再補內容、再跑構建、最後檢查禁用句式。
- 案例收集：搜尋、篩選、下載素材、去重、生成索引。
- 釋出檢查：版本號、變更日誌、構建、冒煙測試、回滾說明。
- 資料分析：讀取表格、清洗欄位、生成圖表、匯出報告。

一個好的 Skill 通常包含：

- 觸發場景。
- 工作步驟。
- 工具使用優先順序。
- 輸入和輸出格式。
- 安全提醒。
- 示例任務。

## Skill 模板

```markdown
---
name: codex-pr-review
description: 當使用者要求審查 PR、diff 或提交時使用，重點發現 bug、迴歸風險和缺失測試。
---

# Codex PR Review

## 觸發場景

使用者要求 review、審查、檢查 diff、檢查 PR。

## 工作流程

1. 先讀取 git diff 和相關測試。
2. 優先找行為 bug、資料丟失、權限問題和缺失測試。
3. 輸出 findings，按嚴重程度排序。
4. 沒有問題時明確說明，並列出剩餘風險。

## 輸出格式

- Findings
- Open questions
- Test gaps
```

## 什麼時候用 Subagents

Subagents 適合邊界明確、能並行推進的任務。關鍵是拆分職責，而不是簡單地“多開幾個 agent”。

適合：

- 一個 agent 分析後端介面，另一個 agent 分析前端呼叫。
- 一個 agent 實現文件頁面，另一個 agent 檢查官方來源。
- 一個 agent 做程式碼修改，另一個 agent 跑驗證和整理失敗日誌。
- 大型遷移中按目錄分配寫入範圍。

不適合：

- 下一個動作依賴某個分析結果。
- 修改同一批檔案。
- 需求仍然模糊。
- 高風險操作需要人工連續判斷。

## Subagents 分工模板

```text
請開啟兩個獨立子任務：

Agent A：只讀分析 `src/api`，輸出介面變更風險，不修改檔案。
Agent B：只讀分析 `src/ui`，輸出前端呼叫點，不修改檔案。

主任務等待兩個結果後，再決定是否實現。
```

如果允許寫檔案，要寫清所有權：

```text
Agent A 只負責 `docs/platform/cli.md`。
Agent B 只負責 `docs/configuration/config-file.md`。

不要修改對方負責的檔案。完成後列出改動檔案、驗證命令和剩餘風險。
```

## Automations 放在哪裡

Automations 適合週期性或延遲型任務：

- 每週檢查文件死鏈。
- 每天彙總 failing CI。
- 30 分鐘後回到當前執行緒繼續跟進。
- 釋出後第二天提醒補覆盤。

寫 automation prompt 時要讓它自包含：

```text
檢查這個文件站倉庫中的 Markdown 連結、VuePress 構建結果和禁用句式。輸出發現的問題、涉及檔案、建議修復方式和驗證命令。
```

## 安全清單

- 外部工具優先只讀接入。
- 寫回 GitHub、郵件、文件、資料庫前保留人工確認。
- Skill 中不要寫入 token、金鑰、內部帳號。
- MCP 服務要記錄來源、權限和維護人。
- Subagents 寫入檔案時必須劃清邊界。
- Automation 要有明確輸出，不要讓它靜默修改關鍵資源。

## 官方資料延伸

- [Codex skills](https://developers.openai.com/codex/skills)
- [openai/codex skills docs](https://github.com/openai/codex/blob/main/docs/skills.md)
- [Codex 文件入口](https://developers.openai.com/codex/)

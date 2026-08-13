---
description: "Codex Cloud 與 Web 入口說明，介紹後臺任務、並行處理、GitHub 連線、PR 生成和團隊協作場景。"
---

# Cloud / Web

Cloud / Web 入口適合處理耗時更長、需要後臺執行或需要與 GitHub 協作的任務。它把 Codex 任務放進可管理的雲端環境，適合團隊分派、長任務跟蹤和 PR 工作流。

::: tip 最後核對
官方資料最後核對日期：2026-05-27。本文參考 [Codex cloud docs](https://platform.openai.com/docs/codex)、[Codex 文件入口](https://developers.openai.com/codex/)、[Codex in ChatGPT Help Center](https://help.openai.com/en/articles/11369540-codex-in-chatgpt) 與 [Introducing Codex](https://openai.com/index/introducing-codex/)。
:::

## Cloud 適合什麼

- 連線 GitHub 倉庫後分派任務。
- 在後臺處理長時間修復、遷移或分析。
- 基於 issue 或需求生成分支和 PR。
- 團隊成員共同檢視任務進度。
- 為大型倉庫做結構分析和風險掃描。

## 提交任務前的清單

| 檢查項 | 為什麼重要 |
| --- | --- |
| 倉庫權限 | Codex 需要讀取程式碼，並可能建立分支或 PR |
| 環境設定 | 缺依賴、缺服務、缺環境變數會影響驗證 |
| Internet Access | 需要下載依賴或查資料時要明確網路邊界 |
| 任務範圍 | 長任務更需要明確目錄、模組和排除項 |
| 驗證命令 | 明確測試命令能提高結果可審查性 |
| 安全邊界 | 憑據、生產資料、釋出部署需要人工確認 |

## Environments

Cloud 任務是否可靠，很大程度取決於環境是否可復現。建議為倉庫準備：

- 包管理器和版本要求。
- 安裝依賴命令。
- 單元測試、型別檢查、構建命令。
- 需要的服務，例如資料庫、快取、瀏覽器。
- 環境變數佔位說明。
- secret 權限說明。

任務說明中可以直接寫：

```text
執行環境說明：
- 使用 pnpm 安裝依賴。
- 測試命令：pnpm test
- 構建命令：pnpm build
- 不需要訪問生產資料庫。
- 如遇缺失環境變數，請先列出變數名和用途，不要自行猜測真實值。
```

## Internet Access

有些任務需要聯網，例如安裝依賴、讀取官方文件、訪問包 registry。聯網任務要寫清楚目的和範圍：

```text
如果需要訪問網際網路，請只用於：
1. 安裝專案依賴。
2. 查詢官方文件。
3. 下載測試所需的公開資源。

不要訪問生產服務、內部系統或非任務相關站點。
```

對於開源知識庫，建議把所有引用來源寫進頁面底部，尤其是 OpenAI 官方文件、Help Center、官方 GitHub 倉庫。

## 推薦任務說明

```text
請分析這個倉庫中 [模組/問題] 的實現，並完成最小可驗證修復。

要求：
1. 先定位相關檔案和測試。
2. 提交實現前說明計劃。
3. 修改範圍限制在 [目錄/模組]。
4. 執行 [測試命令]。
5. 輸出 PR 摘要、驗證結果和剩餘風險。
```

## 適合 Cloud 的案例

| 案例 | 任務目標 | 驗收標準 |
| --- | --- | --- |
| 修復 CI 失敗 | 根據日誌定位失敗原因並提交修復 | PR 中包含驗證命令 |
| 大型倉庫導覽 | 生成模組地圖和學習路線 | 輸出目錄、入口和風險點 |
| 依賴升級 | 小範圍升級並處理相容問題 | 鎖檔案、測試和遷移說明齊全 |
| 文件站補齊 | 補教程、連結索引 | 構建透過，來源可追溯 |
| PR 摘要 | 把 diff 轉成審查說明 | 風險、測試、回滾說明清楚 |

## 團隊實踐建議

- 為常見任務準備模板，例如“修 CI”“補測試”“更新文件”。
- 把倉庫規則寫到 `AGENTS.md`。
- 用最小權限連線倉庫。
- 重要 PR 仍由人類 reviewer 合併。
- 長任務結束後把失敗原因和經驗補進知識庫。

## 官方資料

- [Codex cloud docs](https://platform.openai.com/docs/codex)
- [Codex in ChatGPT Help Center](https://help.openai.com/en/articles/11369540-codex-in-chatgpt)
- [Introducing Codex](https://openai.com/index/introducing-codex/)

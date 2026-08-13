---
description: "Codex 安全、審核與管理指南，整理沙盒、網路訪問、憑據邊界、組織策略和團隊審計關注點，適合上線前檢查。"
---

# 安全、審核與管理

Codex 能讀程式碼、改檔案、執行命令，也可能接觸憑據、內部系統和生產資源。真正適合長期使用的 Codex 工作流，一定要把權限邊界寫清楚。

::: tip 最後核對
官方資料最後核對日期：2026-05-27。本文參考 [Codex security](https://developers.openai.com/codex/agent-approvals-security)、[sandbox 文件](https://github.com/openai/codex/blob/main/docs/sandbox.md)、[exec policy 文件](https://github.com/openai/codex/blob/main/docs/execpolicy.md) 與 [Codex 文件入口](https://developers.openai.com/codex/)。
:::

![Codex 安全分層](/images/codex-safety-layers.svg)

## 先分清風險等級

| 風險等級 | 例子 | 建議策略 |
| --- | --- | --- |
| 低 | 讀取 README、解釋函式、生成文件草稿 | 可只讀自動執行 |
| 中 | 修改程式碼、執行測試、格式化檔案 | 限定工作區寫入，保留 diff review |
| 高 | 安裝依賴、訪問外網、刪除檔案、遷移資料庫 | 每一步都需要明確審核 |
| 極高 | 生產釋出、帳單、權限、客戶資料、憑據輪換 | 保留人工操作或雙人複核 |

## 沙盒模式怎麼理解

沙盒控制 Codex 能訪問什麼位置、能不能寫檔案、能不能聯網。學習時按三種場景理解：

| 場景 | 推薦邊界 | 用途 |
| --- | --- | --- |
| 陌生倉庫分析 | 只讀 | 瞭解結構、生成學習路線 |
| 日常實現 | 工作區寫入 | 修測試、補文件、改區域性程式碼 |
| 自動化指令碼 | 精確放權 | 只允許必要命令和目錄 |

設定變更前，先問 Codex：

```text
請說明你當前準備執行哪些命令、這些命令會讀寫哪些路徑、是否需要網路訪問。先不要執行。
```

## 審核策略

審核策略決定 Codex 在執行某些命令前是否需要你確認。建議把以下行為列為需要確認：

- 刪除、移動大量檔案。
- 修改鎖檔案或依賴版本。
- 安裝全域性工具。
- 訪問外部網路。
- 讀取 `.env`、證書、金鑰檔案。
- 執行資料庫遷移。
- 建立 release、tag、部署或推送生產分支。

推薦提示詞：

```text
涉及刪除檔案、安裝依賴、訪問網路、讀取敏感檔案、推送程式碼或部署時，請先說明理由、命令和影響範圍，等我確認後再執行。
```

## 敏感資訊處理

教程截圖和開源知識庫尤其要注意遮擋：

- 郵箱、使用者名稱、組織名。
- 本地絕對路徑中的隱私資訊。
- token、API key、session、cookie。
- 內網域名、倉庫私有地址。
- 客戶資料、訂單號、日誌中的使用者標識。

## Cloud 與團隊管理

Cloud / Web 場景下，安全重點從“本機命令”擴充套件到“倉庫權限和環境設定”：

- Codex 連線了哪些 GitHub 倉庫。
- 能否建立分支、提交 commit、開啟 PR。
- 執行環境是否包含 secret。
- 是否允許訪問網際網路。
- 任務日誌中是否出現敏感輸出。
- 誰能檢視任務和結果。

團隊接入建議：

1. 先用示例倉庫跑通流程。
2. 為真實倉庫準備最小權限環境。
3. 把測試命令寫進 `AGENTS.md`。
4. 對高風險目錄寫清楚禁改或需審核規則。
5. 定期 review automation、MCP、Skills 和組織策略。

## 釋出前安全檢查模板

```text
請對當前 diff 做釋出前安全檢查，不要修改檔案。

重點檢查：
1. 是否新增或暴露憑據、token、cookie、內部域名。
2. 是否放寬權限、CORS、認證或網路訪問。
3. 是否修改資料庫遷移、帳單、權限、刪除邏輯。
4. 是否缺少測試、回滾說明或人工確認步驟。
5. 是否有需要在 PR 描述中明確標註的風險。
```

## 審計記錄怎麼留

每次高風險任務建議記錄：

- 任務目標。
- Codex 執行的命令。
- 人工批准的命令。
- 修改檔案列表。
- 驗證命令和結果。
- 未驗證的風險。
- 回滾方式。

這些資訊可以放到 PR 描述、release notes 或團隊覆盤文件中。

## 官方資料延伸

- [Codex security](https://developers.openai.com/codex/agent-approvals-security)
- [openai/codex sandbox docs](https://github.com/openai/codex/blob/main/docs/sandbox.md)
- [openai/codex exec policy docs](https://github.com/openai/codex/blob/main/docs/execpolicy.md)

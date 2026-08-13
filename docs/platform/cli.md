---
description: "Codex CLI 入口說明，介紹本地倉庫修改、命令執行、測試驗證、diff 檢查和開發者日常使用場景。"
---

# CLI

CLI 是最適合建立 Codex 基本功的入口。它貼近本地倉庫、終端命令和測試輸出，能讓你清楚看到 Codex 如何閱讀上下文、修改檔案、執行驗證並解釋結果。

::: tip 最後核對
官方資料最後核對日期：2026-05-27。本文參考 [Codex CLI features](https://developers.openai.com/codex/cli/features)、[openai/codex](https://github.com/openai/codex)、[CLI install](https://github.com/openai/codex/blob/main/docs/install.md)、[getting started](https://github.com/openai/codex/blob/main/docs/getting-started.md)、[exec](https://github.com/openai/codex/blob/main/docs/exec.md) 與 [slash commands](https://github.com/openai/codex/blob/main/docs/slash_commands.md)。
:::

## CLI 能做什麼

- 只讀理解倉庫結構、入口、測試命令和風險點。
- 修改程式碼、文件、設定和測試。
- 執行 lint、typecheck、unit test、build 等驗證命令。
- 在終端裡檢視 diff、調整審核策略、恢復會話。
- 透過 `codex exec` 執行標準化的一次性任務。
- 配合 `AGENTS.md`、`config.toml`、Skills、MCP 構建長期工作流。

## 推薦學習順序

1. 安裝 CLI 並完成登入。
2. 在陌生倉庫中做一次只讀總結。
3. 學會互動模式中的常用 Slash Commands。
4. 完成一次低風險修改，並執行驗證。
5. 學會 `codex exec`，把可重複任務指令碼化。
6. 增加 `AGENTS.md` 和本地 `config.toml`。

## 互動模式

進入專案根目錄：

```bash
cd path/to/project
codex
```

第一輪建議不要直接讓 Codex 改程式碼。先讓它建立地圖：

```text
請只讀分析當前倉庫，不要修改檔案。

請輸出：
1. 專案用途
2. 主要目錄和入口檔案
3. 安裝、啟動、測試、構建命令
4. 當前倉庫對 Codex 來說最需要注意的風險
5. 適合第一次交給 Codex 的 5 個低風險任務
```

## 非互動模式

`codex exec` 更適合批處理和自動化：

```bash
codex exec "請只讀分析當前倉庫，輸出安裝、測試和構建命令。不要修改檔案。"
```

建議讓輸出格式穩定：

```text
請讀取當前倉庫，不要修改檔案。

輸出格式：
## 專案概覽
## 本地執行
## 測試命令
## CI 風險
## 適合 Codex 處理的任務
```

適合指令碼化的任務：

| 任務 | 產出 |
| --- | --- |
| 讀取失敗日誌 | 失敗測試名、報錯摘要、下一步排查 |
| 總結 PR diff | 改動範圍、風險、測試建議 |
| 生成 release notes | 使用者可讀版本說明 |
| 掃描文件 | 過期命令、斷鏈、缺截圖 |
| 檢查倉庫規則 | 是否缺 `AGENTS.md`、測試命令、貢獻說明 |

## Slash Commands

在 CLI 中輸入 `/` 可以檢視當前版本支援的命令。建議重點掌握：

- 檢視狀態：確認模型、目錄、審核和沙盒。
- 檢視 diff：每次準備提交前檢查變更。
- 調整模型或審核：把複雜任務和高風險任務分開處理。
- 壓縮或整理上下文：長任務進入下一階段前使用。
- 退出和恢復：給下一輪留下清晰任務總結。

## CLI 任務模板

### 修復失敗測試

```text
請修復當前倉庫中最小範圍的一個測試失敗。

要求：
1. 先執行測試，確認失敗資訊。
2. 閱讀相關程式碼和測試，不做無關重構。
3. 修改最少必要檔案。
4. 修復後重新執行相關測試。
5. 最後總結失敗原因、修改檔案、驗證命令和剩餘風險。
```

### 文件更新

```text
請更新 README 中的本地開發說明。

要求：
1. 先讀取 package manager、指令碼和現有 README。
2. 不改業務程式碼。
3. 更新安裝、啟動、測試和構建命令。
4. 執行文件站構建或 Markdown 檢查。
5. 輸出改動摘要和需要人工截圖的位置。
```

### PR Review

```text
請 review 當前 git diff，不要修改檔案。

優先輸出：
1. 會導致行為錯誤的問題
2. 安全和權限風險
3. 缺失測試
4. 文件或遷移遺漏
```

## 和設定專題的關係

CLI 入門後，建議繼續讀：

- [CLI 選項與命令](/configuration/cli-options.md)
- [設定檔案 config.toml](/configuration/config-file.md)
- [安全、審核與管理](/configuration/security-admin.md)

## 實踐判斷

- 新倉庫先只讀，熟悉後再允許寫入。
- 每個任務都寫清“允許改哪裡、不要改哪裡、怎麼驗證”。
- Codex 沒有驗證成功時，不要把結果當成已完成。
- 複雜任務分階段，不要一次塞進所有需求。
- 重要變更一定回到 `git diff` 和測試結果。

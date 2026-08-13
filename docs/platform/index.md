---
description: "Codex 入口地圖，比較 CLI、桌面 App、Cloud、IDE、ChatGPT 和整合生態，幫助選擇合適工作入口。"
---

# Codex 入口地圖

這份指南把 Codex 看成一組入口協同的工作系統。學習時不要只盯著某一個介面；真正影響效率的是：你把什麼任務放在哪個入口裡處理。

![Codex 使用入口地圖](/images/codex-surfaces.svg)

::: tip 最後核對
官方資料最後核對日期：2026-05-27。參考 [OpenAI Codex 產品頁](https://openai.com/codex/)、[Codex 文件入口](https://developers.openai.com/codex/)、[Codex CLI 官方倉庫](https://github.com/openai/codex) 與 [Codex in ChatGPT Help Center](https://help.openai.com/en/articles/11369540-codex-in-chatgpt)。
:::

## 入口對照表

| 入口 | 更適合 | 典型任務 | 學習優先順序 |
| --- | --- | --- | --- |
| [CLI](./cli.md) | 本地快速迭代 | 修 bug、補測試、跑命令、解釋倉庫 | 新手優先 |
| [桌面 App](./app.md) | 本地多工工作台 | 多 agent、Skills、Automations、外掛協作 | 進階優先 |
| [Cloud / Web](./cloud.md) | 較長任務和並行任務 | 倉庫任務、PR、後臺分析 | 團隊優先 |
| [IDE](./ide.md) | 編輯器上下文 | 區域性修改、解釋、程式碼審查 | 日常高頻 |
| [ChatGPT 中的 Codex](./chatgpt.md) | 面向倉庫的任務分派 | 連線 GitHub、理解倉庫、協作推進 | 按帳號能力選擇 |

## 如何選擇入口

- 任務需要頻繁看命令輸出：選 CLI。
- 任務需要多個 agent 並行、Skills 或 Automations：選擇桌面 App。
- 任務時間較長、希望後臺跑、可能生成 PR：選 Cloud / Web。
- 你正在編輯具體檔案：選 IDE。
- 你想從對話裡分派倉庫級任務：選 ChatGPT 中的 Codex。

## 第一次學習建議

1. 從 CLI 建立最小閉環。
2. 用桌面 App 體驗本地多工和技能沉澱。
3. 再進入 Cloud / Web，學習長任務、PR 與團隊協作。
4. 閱讀 [設定與擴充套件](/configuration/)，補上 CLI 選項、config.toml、MCP、Skills 和安全邊界。
5. 把高頻模板沉澱到 `AGENTS.md`、案例庫和團隊規範。

## 入口和設定的關係

| 設定主題 | 主要影響入口 | 學習頁 |
| --- | --- | --- |
| `AGENTS.md` | CLI / 桌面 App / Cloud | [AGENTS.md](/guide/15-agents-md.md) |
| CLI 選項 | CLI | [CLI 選項與命令](/configuration/cli-options.md) |
| `config.toml` | CLI | [設定檔案 config.toml](/configuration/config-file.md) |
| Skills | App / CLI | [MCP、Skills 與 Subagents](/configuration/mcp-skills-subagents.md) |
| Worktrees | 桌面 App | [桌面 App](./app.md) |
| Environments | Cloud / App | [Cloud / Web](./cloud.md) |
| Sandbox 與 Approvals | 全部入口 | [安全、審核與管理](/configuration/security-admin.md) |


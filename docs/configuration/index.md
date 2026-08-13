---
description: "Codex 設定與擴充套件總覽，梳理 AGENTS.md、config.toml、Skills、MCP、Subagents、安全審核和團隊設定路徑。"
---

# 設定與擴充套件總覽

Codex 的學習曲線有兩個階段：先會用，再會設定。會用解決單次任務，會設定能把 Codex 變成穩定的個人工作台和團隊協作工具。

::: tip 最後核對
官方資料最後核對日期：2026-05-27。本文參考 [Codex 文件入口](https://developers.openai.com/codex/)、[Codex CLI features](https://developers.openai.com/codex/cli/features)、[基礎設定](https://developers.openai.com/codex/config-basic)、[AGENTS.md](https://developers.openai.com/codex/guides/agents-md)、[Codex Skills](https://developers.openai.com/codex/skills) 與 [Codex security](https://developers.openai.com/codex/agent-approvals-security)。
:::

![Codex 設定地圖](/images/codex-config-map.svg)

## 先理解四層設定

| 層級 | 典型檔案或入口 | 解決的問題 | 初學者建議 |
| --- | --- | --- | --- |
| 專案規則 | `AGENTS.md` | 讓 Codex 理解倉庫約定、測試命令、目錄邊界 | 每個重要倉庫都寫一份 |
| 本地設定 | `~/.codex/config.toml` | 設定模型、沙盒、審核、profiles、MCP | 先保守，再按任務放開權限 |
| 擴充套件能力 | Skills、MCP、Plugins、Subagents | 複用流程、連線外部工具、拆分複雜任務 | 先沉澱高頻流程 |
| 安全邊界 | Sandbox、Approvals、Admin policy | 管控命令、網路、敏感檔案、組織策略 | 把高風險操作留給人工確認 |

## 本專題怎麼讀

1. 先讀 [CLI 選項與命令](./cli-options.md)，理解互動模式、非互動模式、恢復會話和 Slash Commands。
2. 再讀 [設定檔案 config.toml](./config-file.md)，知道哪些設定適合個人、哪些適合團隊模板。
3. 接著讀 [MCP、Skills 與 Subagents](./mcp-skills-subagents.md)，把重複流程變成可複用能力。
4. 最後讀 [安全、審核與管理](./security-admin.md)，建立權限邊界和審計意識。

## 設定前的三條原則

- 先寫任務規則，再調工具開關。任務描述、`AGENTS.md`、測試命令經常比複雜設定更能提升結果品質。
- 先小範圍驗證，再推廣到團隊。一個人的設定習慣直接複製到團隊倉庫，容易帶來權限和環境差異問題。
- 先保留審核，再逐步自動化。刪除檔案、訪問網路、安裝依賴、寫入系統目錄、讀取敏感資料都應有明確理由。

## 推薦的最小設定路線

### 第 1 天：個人可用

- 安裝 CLI。
- 登入並完成一次只讀倉庫總結。
- 建立專案級 `AGENTS.md`。
- 學會 `/status`、`/model`、`/approvals`、`/diff`、`/quit` 等常用命令。

### 第 1 周：穩定實踐

- 為常用倉庫寫清測試命令和程式碼風格。
- 在 `~/.codex/config.toml` 中設定適合自己的預設 profile。
- 把修測試、程式碼審查、文件更新沉澱成任務模板。
- 記錄每次失敗案例，補到排障手冊。

### 第 1 個月：團隊知識庫

- 把專案規則合併到倉庫。
- 把團隊流程沉澱成 Skills。
- 為 Cloud / App / CLI 制定統一截圖、演示和 PR 模板。
- 對網路訪問、憑據、釋出、資料庫變更設定審核要求。

## 常見誤區

| 誤區 | 更好的做法 |
| --- | --- |
| 只調模型，不寫上下文 | 給 Codex 明確倉庫結構、任務範圍、驗收標準 |
| 只讓它改程式碼，不讓它驗證 | 每個任務都指定最小驗證命令 |
| 直接放開全部權限 | 先用只讀和審核模式，確認命令意圖後再執行 |
| 把所有規則塞進提示詞 | 長期規則放到 `AGENTS.md` 或 Skill |
| 團隊成員各配各的 | 關鍵規則進倉庫，個人偏好留在本地 |

## 官方資料延伸

- [Codex CLI features](https://developers.openai.com/codex/cli/features)
- [Codex config basic](https://developers.openai.com/codex/config-basic)
- [Codex config advanced](https://developers.openai.com/codex/config-advanced)
- [Codex config reference](https://developers.openai.com/codex/config-reference)
- [AGENTS.md guide](https://developers.openai.com/codex/guides/agents-md)
- [Codex skills](https://developers.openai.com/codex/skills)
- [Codex security](https://developers.openai.com/codex/agent-approvals-security)

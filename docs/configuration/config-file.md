---
description: "Codex config.toml 設定指南，說明模型、沙盒、審核、profiles、MCP 和個人本地設定的組織方式。"
---

# 設定檔案 config.toml

`config.toml` 用來儲存 Codex CLI 的本地預設行為。你可以把它理解為“個人駕駛艙”：模型、審核、沙盒、profiles、MCP 服務等偏好都可以在這裡集中管理。

::: tip 最後核對
官方資料最後核對日期：2026-05-27。本文參考 [Codex config basic](https://developers.openai.com/codex/config-basic)、[Codex config advanced](https://developers.openai.com/codex/config-advanced)、[Codex config reference](https://developers.openai.com/codex/config-reference) 與 [openai/codex config docs](https://github.com/openai/codex/blob/main/docs/config.md)。
:::

## 設定檔案放在哪裡

通常位於：

```text
~/.codex/config.toml
```

專案長期規則建議寫到倉庫內的 `AGENTS.md`，個人偏好放到本機 `config.toml`。這樣團隊成員能共享專案規則，又能保留自己的 CLI 使用習慣。

## 最小設定示例

下面是一個學習用示例，實際欄位請以官方 config reference 和當前 CLI 版本為準：

```toml
model = "gpt-5.1-codex-max"
approval_policy = "on-request"
sandbox_mode = "workspace-write"

[profiles.readonly]
approval_policy = "on-request"
sandbox_mode = "read-only"

[profiles.build]
approval_policy = "on-request"
sandbox_mode = "workspace-write"
```

這個示例表達三件事：

- 預設允許在當前工作區寫檔案。
- 高風險命令仍需要審核。
- 額外保留一個只讀 profile，適合新倉庫分析。

## 常見設定項按用途理解

| 用途 | 你要決定什麼 | 建議 |
| --- | --- | --- |
| 模型 | 速度、成本、推理深度的取捨 | 用預設設定起步，複雜任務再臨時調整 |
| 沙盒 | Codex 能讀寫哪些位置 | 新手先只讀或工作區寫入 |
| 審核 | 哪些命令需要你確認 | 涉及網路、刪除、安裝、釋出時保留審核 |
| profiles | 不同任務使用不同組合 | 準備 readonly、coding、review 三類 profile |
| MCP | 接入外部工具和知識源 | 只接可信服務，明確權限範圍 |
| 環境 | 傳遞必要變數或隔離敏感變數 | 憑據用最小權限，避免寫進教程截圖 |

## 推薦 profiles

### 只讀學習

適合開啟陌生倉庫、生成專案地圖、梳理測試命令。

```toml
[profiles.readonly]
sandbox_mode = "read-only"
approval_policy = "on-request"
```

任務示例：

```bash
codex --profile readonly
```

```text
請只讀分析當前倉庫。不要修改檔案，不要執行會寫入檔案的命令。
```

### 日常編碼

適合修測試、補文件、小範圍實現。

```toml
[profiles.coding]
sandbox_mode = "workspace-write"
approval_policy = "on-request"
```

任務示例：

```text
請修復這個失敗測試。修改範圍限制在 `src/parser` 和對應測試檔案，修復後執行 `pnpm test parser`。
```

### 審查與釋出前檢查

適合 PR review、釋出前風險掃描、diff 總結。

```toml
[profiles.review]
sandbox_mode = "read-only"
approval_policy = "on-request"
```

任務示例：

```text
請 review 當前 diff，優先指出 bug、迴歸風險和缺失測試。不要修改檔案。
```

## 設定變更的驗證方法

每次改完設定，不要直接上覆雜任務。用一個短任務驗證：

```text
請告訴我當前工作區、審核策略和你準備採用的驗證方式。不要修改檔案。
```

再檢查：

- Codex 是否能正確讀取當前目錄。
- 是否會在執行命令前解釋意圖。
- 是否遵守只讀或工作區寫入邊界。
- 是否按預期觸發審核。

## 切換 provider 後歷史會話不可見怎麼辦

有些使用者在修改根級 `model_provider` 後，會發現舊會話在 Codex Desktop 或 CLI 的 `/resume` 裡突然不可見。常見原因不是會話檔案丟失，而是 `~/.codex` 裡的會話 metadata、SQLite 狀態和專案路徑快取仍停留在舊 provider。

::: warning 第三方社群工具
下面介紹的是社群專案 [Dailin521/codex-provider-sync](https://github.com/Dailin521/codex-provider-sync)，不是 OpenAI 官方工具。社群資料最後核對日期：2026-05-29。使用前請先備份 `~/.codex`，並確認你理解它會修改本機 Codex 狀態檔案。
:::

這個工具主要同步這些位置裡的 provider / 可見性 metadata：

- `~/.codex/sessions`
- `~/.codex/archived_sessions`
- `~/.codex/state_5.sqlite`
- `.codex-global-state.json` 中的專案根路徑快取

先做兩個判斷：

- 如果 CLI `/resume` 能看到舊會話，但 Desktop 專案側仍為空，可能是 Codex Desktop 最近 50 條會話的首屏顯示限制，不一定是 provider metadata 問題。
- 如果最近剛切換過 `model_provider`，並且多個入口都找不到舊會話，再考慮使用同步工具。

### Windows GUI 流程

Windows 使用者可以優先使用上游 Release 裡的圖形介面版本：

1. 開啟 [codex-provider-sync Releases](https://github.com/Dailin521/codex-provider-sync/releases)，下載 `CodexProviderSync.exe`。
2. 雙擊執行後，先確認頂部 `Codex Home` 路徑指向你的 `.codex` 目錄。
3. 點選 `Refresh`，檢視當前 provider、rollout、SQLite 和專案可見性診斷。
4. 在 provider 列表裡選擇目標 Provider。
5. 如果希望同時改寫 `config.toml` 根級 `model_provider`，再勾選右側對應選項。
6. 點選 `Execute` 執行同步。
7. 如果結果不符合預期，用 `Restore Backup` 從工具生成的備份目錄恢復。

GUI 會預設保留最近幾份由本工具建立的備份。若 `state_5.sqlite` 被佔用，先關閉 Codex、Codex App 或 app-server 後再重試。

### macOS 或 CLI 流程

CLI 版本需要 Node.js `24+`。如果你使用 Node 20/22，可能會遇到 `node:sqlite` 不存在的問題。

```bash
npm install -g git+https://github.com/Dailin521/codex-provider-sync.git
codex-provider status
```

建議先只執行 `status`，確認它看到的 provider、rollout、SQLite 和專案可見性診斷符合預期。確認後再選擇操作：

```bash
codex-provider sync
codex-provider sync --provider openai
codex-provider switch <provider-id>
codex-provider restore <backup-dir>
```

常用命令含義：

| 命令 | 作用 |
| --- | --- |
| `codex-provider status` | 只檢查當前 provider、rollout、SQLite 和專案可見性，不執行同步 |
| `codex-provider sync` | 不切換登入狀態，只把歷史會話 metadata 同步到當前 provider |
| `codex-provider sync --provider openai` | 指定目標 provider 後同步 metadata |
| `codex-provider switch <provider-id>` | 修改 `config.toml` 根級 `model_provider`，然後執行同步 |
| `codex-provider restore <backup-dir>` | 從備份恢復，適合結果不符合預期時回滾 |

### 能力邊界

它只處理“歷史會話可見性”相關 metadata，不是帳號切換器，也不是認證修復工具：

- 不處理登入、認證、`auth.json` 或第三方切號工具。
- 不修改訊息歷史、會話標題和對話內容。
- 不修改 `updated_at`，也不會透過改變歷史排序繞過 Desktop 最近 50 條限制。
- 含 `encrypted_content` 的舊會話跨 provider 或 account 後，通常只能恢復列表可見性；繼續對話或 compact 仍可能報 `invalid_encrypted_content`。

上游說明請看 [README](https://github.com/Dailin521/codex-provider-sync) 和 [GUI 中文說明](https://github.com/Dailin521/codex-provider-sync/blob/main/docs/README_GUI_ZH.md)。如果你只是想穩定使用 Codex，優先理解本頁前面的 `config.toml` 設定方式；遇到 provider 切換後的歷史會話不可見，再把這個工具作為排障選項。

## 團隊設定建議

適合進倉庫的內容：

- `AGENTS.md`
- 推薦測試命令
- 程式碼風格和目錄說明
- PR 模板
- 文件截圖規範

適合留在個人機器的內容：

- 預設模型偏好
- 本地路徑
- token、金鑰、私有服務地址
- 個人 MCP 服務
- 私有 automation 設定

## 排障清單

| 現象 | 檢查 |
| --- | --- |
| 設定沒生效 | 檔案路徑、TOML 語法、CLI 版本、啟動時是否選擇 profile |
| Codex 權限超出預期 | 檢查 `sandbox_mode` 和 `approval_policy` |
| 某個命令一直被拒絕 | 檢查沙盒限制、網路權限和組織策略 |
| MCP 無法連線 | 檢查服務命令、環境變數、埠、認證方式 |
| 切換 provider 後舊會話不可見 | 先判斷是否是 Desktop 最近 50 條顯示限制，再檢查 provider metadata 是否需要同步 |
| 團隊成員行為不一致 | 把專案共同規則寫進 `AGENTS.md` |

## 官方資料延伸

- [Config basic](https://developers.openai.com/codex/config-basic)
- [Config advanced](https://developers.openai.com/codex/config-advanced)
- [Config reference](https://developers.openai.com/codex/config-reference)
- [openai/codex config docs](https://github.com/openai/codex/blob/main/docs/config.md)

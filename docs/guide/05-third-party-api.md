---
description: "Codex 連線第三方 API 的入門說明，比較手動設定、Codex++、CCX 與 CC Switch 三種接入方式，並提示帳號、金鑰、帳單和隱私風險。"
---

# 連線第三方 API

Codex 預設最穩妥的使用方式，是透過官方 ChatGPT / OpenAI 帳號登入，並使用官方支援的模型與服務。連線第三方 API 屬於進階設定，適合已經理解 `config.toml`、API Key、Base URL、模型名和代理閘道含義的使用者。

::: warning 第三方 API 風險
本文只整理接入思路，不推薦任何具體中轉商或 API 服務。第三方 API 可能涉及帳號安全、API Key 洩露、帳單超額、服務穩定性、日誌留存、資料跨境、模型能力降級和合規風險。請只使用你信任、能承擔責任的服務，並避免把金鑰寫進截圖、倉庫和公開文件。
:::

::: tip 最後核對
官方資料最後核對日期：2026-05-29。本文參考 [OpenAI Codex config reference](https://developers.openai.com/codex/config-reference)。社群工具資料最後核對日期：2026-05-29，參考 [Codex++](https://github.com/BigPizzaV3/CodexPlusPlus)、[CCX](https://github.com/BenedictKing/ccx) 與 [CC Switch](https://github.com/farion1231/cc-switch)。
:::

## 三種方案怎麼選

| 方案 | 適合誰 | 優點 | 需要注意 |
| --- | --- | --- | --- |
| 手動設定 | 想理解 Codex 底層設定的人 | 透明、可控、方便排障 | 要自己維護 `config.toml`，欄位寫錯就不生效 |
| Codex++ | 主要使用桌面 App，希望圖形化管理中轉註入的人 | 有管理介面，能把設定寫成 `CodexPlusPlus` provider | 是第三方 launcher / 注入工具，Codex 更新後可能需要跟進適配 |
| CCX + CC Switch | 有多個供應商、需要協議轉換和統一切換的人 | CCX 負責閘道與路由，CC Switch 負責供應商設定管理 | 元件更多，需要理解本地服務、埠、金鑰和代理鏈路 |

如果你只是剛開始學習 Codex，建議先完成 [第一個任務](./06-app-first-task.md)，再回來看本章。第三方 API 不是入門必需步驟。

## 方案一：手動設定

這種是沒辦法使用 Codex APP 的外掛功能的，可以看看方案二可以使用外掛功能。

> 截圖待補：請替換為本地操作截圖。

手動設定的核心，是編輯本機的：

```text
~/.codex/config.toml
```

改之前先備份：

```bash
cp ~/.codex/config.toml ~/.codex/config.toml.backup
cp ~/.codex/auth.json ~/.codex/auth.json.backup
```

> 截圖待補：請替換為本地操作截圖。

### 兩類登入思路

| 思路 | 怎麼理解 | 適合場景 |
| --- | --- | --- |
| ChatGPT 登入 | Codex 仍使用 ChatGPT / OpenAI 登入態，provider 只改請求入口或中轉地址 | 想保留官方帳號能力，同時把請求轉到相容入口 |
| API Key 登入 | Codex 使用環境變數裡的 API Key，按 provider 設定請求介面 | 用 OpenAI API Key 或自建相容 Responses API 的服務 |

不要同時混著改太多東西。第一次設定時，先只新增一個 provider，確認能跑通後再整理多套 profile。

### ChatGPT 登入態示例

>也就是你的 Codex 先要登入到 ChatGPT 先。

**第一步，手動修改檔案設定檔案：**

在~/.codex/config.toml 檔案下新增如下設定。

下面只展示示例，欄位和值要按你實際服務填寫：

```toml
model = "gpt-5-codex" #這裡填你想要的模型
model_reasoning_effort = "high"
disable_response_storage = true
preferred_auth_method = "apikey"

[model_providers.example]
name = "example" # 填你的模型提供商名字或者中轉站名字
base_url = "https://api.example.com/v1" # 填你的模型提供商的請求 URL
wire_api = "responses" # 這裡不要變
env_key = "OPENAI_API_KEY" # 這裡將會透過環境變數的方式注入並啟動Codex APP
requires_openai_auth = false
```

這裡的重點是：

- `model_provider` 要和 `[model_providers.xxx]` 裡的 `xxx` 完全一致。
- `base_url` 通常寫到 `/v1`，不要把 `/v1/responses` 整段寫進去。
- `wire_api = "responses"` 表示 Codex 以 Responses API 的請求形態訪問。
- `requires_openai_auth = true` 表示使用已有 OpenAI / ChatGPT 登入態。

> 截圖待補：請替換為本地操作截圖。

**第二步，開啟終端輸入環境變數**

```toml
export OPENAI_API_KEY="這裡填你的key"
```

> 截圖待補：請替換為本地操作截圖。

**第三步，終端中啟動 Codex APP**

這裡如果是 mac，你要用終端啟動，不然可能讀不到模型。要特別注意，在啟動前要先徹底關閉 Codex APP

終端輸入以下命令啟動：

```toml
open -a Codex
```

**第四步，開啟 Codex APP**

你就可以看到已經應用到新模型了：

> 截圖待補：請替換為本地操作截圖。

### API Key 登入示例

如果你的服務使用 API Key，推薦把金鑰放在環境變數裡，不要寫死在 `config.toml`：

```bash
export OPENAI_API_KEY="sk-your-api-key"
```

對應設定示例：

```toml
model = "gpt-5.1-codex-max"
model_provider = "my-api-provider"

[model_providers.my-api-provider]
name = "My API Provider"
base_url = "https://example.com/v1"
wire_api = "responses"
env_key = "OPENAI_API_KEY"
requires_openai_auth = false
```

如果上游只支援 Chat Completions，而不支援 Responses API，通常不能只靠 `config.toml` 解決，需要使用 CCX 這類閘道做協議轉換。

**修改鑑權檔案**

開啟 ~/.codex/auth.json，然後新增 OPENAI_API_KEY 為你模型服務商的API KEY：

> 截圖待補：請替換為本地操作截圖。

### 手動設定後怎麼驗證

1. 完全退出並重新開啟 Codex。
2. 讓 Codex 執行一個只讀任務，例如總結當前目錄結構。
3. 如果失敗，先檢查 `model_provider` 名稱、`base_url`、`wire_api`、環境變數和 API Key 權限。
4. 出現認證錯誤時，先切回備份設定，不要反覆把真實 Key 貼上到對話裡。

```text
請只讀說明當前工作區路徑、你準備使用的模型和驗證方式。不要修改任何檔案。
```

## 方案二：Codex++

[Codex++](https://github.com/BigPizzaV3/CodexPlusPlus) 是面向 Codex App 的外部增強 launcher 和管理工具。根據專案 README，它不修改 Codex App 原始安裝檔案，而是透過外部 launcher 啟動 Codex，並使用 Chromium DevTools Protocol 注入增強指令碼。

> 截圖待補：請替換為本地操作截圖。

它更適合這些情況：

- 你主要使用 Codex 桌面 App。
- 你希望透過圖形介面維護 Base URL 和 Key。
- 你希望切換回官方 ChatGPT 登入態時，不完全靠手寫設定。
- 你能接受第三方 launcher 帶來的相容性和維護風險。

### 流程步驟

1. 開啟 [Codex++ Releases](https://github.com/BigPizzaV3/CodexPlusPlus/releases)，下載與你係統匹配的安裝包。

> 截圖待補：請替換為本地操作截圖。

會有 「Codex++ 管理工具」和 「Codex++ app」兩個安裝包。

> 截圖待補：請替換為本地操作截圖。

2. 安裝後開啟 `Codex++ 管理工具`。

首次開啟如果出現這個錯誤：

> 截圖待補：請替換為本地操作截圖。
不要慌，先開啟「系統設定」-「隱私與安全性」，點選「仍要開啟」：

> 截圖待補：請替換為本地操作截圖。

開啟後就會進入到這個管理介面：

> 截圖待補：請替換為本地操作截圖。

同樣的方式，安裝剛才安裝包中的 Codex++ app。你就可以看到管理工具檢測全綠了。

> 截圖待補：請替換為本地操作截圖。

確認已經檢測到 ChatGPT 登入狀態。

3. 新增中轉設定，填寫 Base URL 和 Key。

選擇「供應商設定」-新增供應商設定。填寫自己的供應商的設定，並填寫模型相關資訊，注意 接入方式要選「純API」的方式：

> 截圖待補：請替換為本地操作截圖。

模型列表可以選擇從上游獲取，如果你設定的是中轉站，這裡就可以用很多不同的模型了：

> 截圖待補：請替換為本地操作截圖。

可以看到這個工具做的就是幫你更方便的寫入設定。

> 截圖待補：請替換為本地操作截圖。

儲存後可以測試聯通情況，沒問題，直接選擇使用：

> 截圖待補：請替換為本地操作截圖。

3. 從 `Codex++` 入口啟動 Codex，而不是從原版 Codex 入口啟動。

> 截圖待補：請替換為本地操作截圖。

重新啟動後，你就能看到現在 Codex已經完全使用了我們自定義的模型供應商，並可以選擇更多的模型。

> 截圖待補：請替換為本地操作截圖。

其中外掛也可以直接使用了：

> 截圖待補：請替換為本地操作截圖。

根據 Codex++ README，它會寫入類似這樣的 provider：

```toml
model_provider = "CodexPlusPlus"

[model_providers.CodexPlusPlus]
name = "CodexPlusPlus"
wire_api = "responses"
requires_openai_auth = true
base_url = "https://example.com/v1"
experimental_bearer_token = "sk-..."
```

### Codex++ 驗證和回滾

- 驗證時，先用只讀任務確認 Codex 能正常響應。
- 如果 Codex++ 選單或增強功能沒有出現，確認你是從 `Codex++` 入口啟動，而不是原版 Codex。
- 如果要回到官方登入態，在管理工具裡清除 API 模式或切回官方設定。
- Codex App 更新後，如果頁面結構變化，注入指令碼可能需要等待 Codex++ 適配。

## 方案三：CCX + CC Switch

這個方案把“閘道”和“切換工具”拆開：

- [CCX](https://github.com/BenedictKing/ccx)：AI API 代理與協議轉換閘道，支援 Claude Messages、OpenAI Chat Completions、Codex Responses、Gemini 等入口，也提供 Web 管理介面、渠道編排、故障轉移和模型路由。
- [CC Switch](https://github.com/farion1231/cc-switch)：桌面管理工具，用來管理 Claude Code、Codex、Gemini CLI 等工具的供應商設定、MCP、Skills 和會話，並支援一鍵切換。

適合你有多個國產模型 API、多箇中轉服務、多個 Key，或者需要把 Chat Completions 形態轉換成 Codex 可用入口的情況。

### 第 1 步：部署 CCX

如果使用 Docker，可以參考 CCX README 中帶訪問金鑰的方式：

```bash
docker run -d \
  --name ccx \
  -p 3000:3000 \
  -e PROXY_ACCESS_KEY=your-proxy-access-key \
  -e APP_UI_LANGUAGE=zh-CN \
  -v $(pwd)/.config:/app/.config \
  crpi-i19l8zl0ugidq97v.cn-hangzhou.personal.cr.aliyuncs.com/bene/ccx:latest
```

啟動後開啟：

```text
http://localhost:3000
```

### 第 2 步：在 CCX 新增渠道

在 CCX Web 管理介面裡新增你的上游渠道：

1. 選擇上游服務型別。
2. 填寫國產模型或中轉服務的 API Key。
3. 填寫 Base URL。
4. 設定模型對映、可用模型或路由規則。
5. 先用 CCX 自帶測試功能確認渠道可用。

這裡要確認一件事：Codex 需要的是 Responses API 入口。如果上游只有 Chat Completions，CCX 需要負責協議轉換。

### 第 3 步：安裝 CC Switch

CC Switch 可以用桌面安裝包，也可以按你的習慣使用命令列安裝。你給出的命令是：

```bash
npm install -g cc-switch
```

安裝後初始化：

```bash
cc-switch init
```

初始化時把 CCX 地址作為中轉入口，例如：

```text
http://localhost:3000
```

### 第 4 步：切換設定並啟動 Codex

切換到你剛設定好的供應商：

```bash
cc-switch use <設定名>
```

然後重新啟動 Codex，讓新的 provider 設定生效。

如果 CC Switch 寫入的是 `~/.codex/config.toml`，建議切換後開啟檔案核對一次：

- 當前 `model_provider` 是否是你剛選擇的設定。
- `base_url` 是否指向 CCX。
- API Key 是否沒有被寫進公開倉庫。
- 原有 MCP、Skills、profile 等設定是否還在。

## 常見問題

| 現象 | 先檢查什麼 |
| --- | --- |
| 切換後沒有生效 | 是否完全重啟 Codex，`model_provider` 名稱是否一致 |
| 報認證錯誤 | API Key 是否有效，環境變數是否被當前 shell 繼承 |
| 報介面路徑錯誤 | `base_url` 是否只寫到 `/v1`，不要重複拼上 `/responses` |
| 國產模型無法響應 | 上游是否支援 Responses API；不支援時需要 CCX 這類閘道轉換 |
| 外掛或 Skills 設定不見了 | 切換工具是否覆蓋了通用設定，是否有備份或共享設定片段 |
| 舊會話不可見 | 參考 [切換 provider 後歷史會話不可見怎麼辦](/configuration/config-file.md#切換-provider-後歷史會話不可見怎麼辦) |

下一步：[用 Codex 完成第一個任務](./06-app-first-task.md)

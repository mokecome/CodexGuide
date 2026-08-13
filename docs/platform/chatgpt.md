---
description: "ChatGPT 中的 Codex 使用說明，介紹倉庫任務分派、手機端跟進、帳號能力和適合對話入口的工作流。"
---

# ChatGPT 中的 Codex

ChatGPT 中的 Codex 適合從對話裡分派倉庫任務、檢視任務狀態、理解程式碼庫和推動團隊協作。具體功能會受到帳號計劃、組織策略、所在地區和產品更新影響。

::: tip 官方邊界
計劃可用性、訊息限額、連線方式和具體入口請以 [Codex in ChatGPT Help Center](https://help.openai.com/en/articles/11369540-codex-in-chatgpt) 為準。本文最後核對日期：2026-05-27。
:::

## 適用場景

- 連線 GitHub 倉庫後發起任務。
- 讓 Codex 閱讀倉庫並總結架構。
- 將 issue 轉成可執行任務。
- 生成 PR 摘要或變更說明。
- 面向非開發者解釋技術改動。
- 把複雜任務拆成階段計劃。

## 第一次任務怎麼寫

先讓 Codex 只讀分析：

```text
請閱讀這個倉庫並幫我理解 [主題]。請先總結相關目錄和關鍵檔案，再給出執行建議。暫時不要修改程式碼。
```

進一步推進時：

```text
請基於剛才的分析，完成第一步最小改動，並建立可審查的結果。請說明改動原因、驗證方式和剩餘風險。
```

## 適合非開發者的用法

| 場景 | 任務說明 |
| --- | --- |
| 看懂 PR | “請把這個 PR 改動解釋成產品經理能理解的語言。” |
| 寫釋出說明 | “請基於這些改動生成面向使用者的 release notes。” |
| 拆 issue | “請把這個 issue 拆成可交給工程師執行的任務清單。” |
| 讀技術方案 | “請解釋這個方案涉及哪些模組、風險和驗收標準。” |
| 整理知識庫 | “請指出這份教程對新手來說缺哪些前置說明。” |

## 和 Cloud 的關係

ChatGPT 更適合發起、討論和理解任務；Cloud 更適合後臺執行長任務和產出 PR。實際使用時可以這樣分工：

- 在 ChatGPT 裡把需求說清楚。
- 讓 Codex 先只讀分析倉庫。
- 把明確的第一步交給 Cloud 執行。
- 回到 ChatGPT 解釋結果、總結風險、生成文件。

## 安全提醒

- 連線倉庫前確認組織策略。
- 不要在對話裡貼上真實金鑰。
- 讓 Codex 修改程式碼前寫清驗收標準。
- 對生成的 PR 做人工 review。
- 截圖進入開源倉庫前遮擋帳號、組織名和倉庫隱私資訊。

## 官方資料

- [Codex in ChatGPT Help Center](https://help.openai.com/en/articles/11369540-codex-in-chatgpt)
- [Codex cloud docs](https://platform.openai.com/docs/codex)
- [OpenAI Codex 產品頁](https://openai.com/codex/)

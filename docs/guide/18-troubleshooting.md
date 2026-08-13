---
description: "Codex 排障手冊，彙總登入、安裝、權限、依賴、命令失敗和任務執行異常的定位與恢復路徑，幫助快速繼續工作。"
redirectFrom:
  - /guide/17-troubleshooting.html
---

# 排障手冊

本頁收集 Codex 使用中的常見問題。歡迎透過 PR 持續補充。

## Codex 找不到專案上下文

可能原因：

- 你不在專案根目錄。
- 倉庫缺少 README、測試命令或專案說明。
- monorepo 沒有說明包邊界。

處理方式：

- 先讓 Codex 只讀目錄並總結專案結構。
- 新增或更新 `AGENTS.md`。
- 在任務說明裡指定相關目錄。

## Codex 改動範圍太大

處理方式：

- 明確“只修改這些檔案”。
- 要求“先輸出計劃，不要動手”。
- 把任務拆成更小的步驟。
- 在 review 時拒絕無關重構。

## 測試跑不起來

處理方式：

- 讓 Codex 先定位測試命令。
- 檢查依賴是否安裝。
- 區分環境問題和程式碼問題。
- 如果是環境問題，讓 Codex 記錄阻塞，而不是繼續亂改。

## 生成內容不準確

處理方式：

- 要求 Codex 引用它依據的檔案。
- 對官方事實要求附連結。
- 讓它區分“已確認”和“推測”。
- 讓它先讀程式碼再寫文件。

## 登入或權限問題

處理方式：

- 更新 Codex CLI 到最新版本。
- 重新執行登入流程。
- 檢查當前帳號計劃和組織策略。
- 檢視官方 Help Center 的 Codex 相關文章。

## 切換 provider 後舊會話不可見

可能原因：

- 修改過 `config.toml` 根級 `model_provider`。
- 舊會話檔案還在，但會話 metadata、SQLite 狀態或專案路徑快取仍指向舊 provider。
- CLI `/resume` 能看到舊會話，但 Codex Desktop 專案側看不到，可能只是 Desktop 最近 50 條會話的首屏顯示限制。

處理方式：

- 先確認 `~/.codex/sessions` 或 `~/.codex/archived_sessions` 裡是否還存在舊會話檔案。
- 如果只是 Desktop 專案側不可見，先判斷是否被最近 50 條顯示限制擋住。
- 如果確認是切換 provider 後 metadata 不一致，再參考 [config.toml 裡的社群工具說明](../configuration/config-file.md#切換-provider-後歷史會話不可見怎麼辦)。
- 使用第三方工具前先備份 `~/.codex`，不要把它當成官方認證或帳號切換工具。

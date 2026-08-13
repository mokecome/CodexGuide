---
description: "在 VS Code 中使用 Codex 的教程，介紹外掛入口、檔案上下文、區域性修改、解釋程式碼和編輯器內協作方式。"
redirectFrom:
  - /guide/13-ide-vscode.html
---

# 在 VS Code 中使用 Codex

::: tip 最後核對
官方資料最後核對日期：2026-05-27。本章以 VS Code 為例演示外掛安裝與基本用法，操作介面以實際版本為準。
:::

本章介紹如何在 VS Code 程式碼編輯器中安裝 Codex 外掛，並透過外掛完成開發任務。相比桌面 App，在 VS Code 中使用 Codex 可以更直接地看到檔案目錄結構和修改前後的對比，適合習慣在編輯器裡工作的開發者。

## 安裝 Codex 外掛

開啟 VS Code，點選左側邊欄的「擴充套件」圖示，在搜尋框中輸入 **Codex**，選擇第一個結果，點選「安裝」即可。

::: tip
這裡安裝的是 OpenAI 官方釋出的 ChatGPT 外掛，其中整合了 Codex 的對話與程式碼輔助能力。
:::

![繁中教學圖](../images/tw-tutorial/14-ide-vscode-01.png)

## 開啟外掛對話視窗

安裝完成後，在 VS Code 中開啟任意一個專案檔案，右上角會出現 ChatGPT 的圖示。點選該圖示，右側邊欄就會展開 Codex 的對話視窗。

![繁中教學圖](../images/tw-tutorial/14-ide-vscode-02.png)

![繁中教學圖](../images/tw-tutorial/14-ide-vscode-03.png)

## 開始使用

對話視窗開啟後，直接輸入需求，Codex 就會開始輔助完成開發任務，用法與 Codex 桌面 App 基本一致。

**使用 `@` 指定檔案：**

在對話方塊中輸入 `@` 後選擇具體檔案，Codex 會直接定位到該檔案進行分析或修改，比讓它全域性搜尋更快、更準確。建議在任務目標明確時優先使用 `@` 指定相關檔案。

![繁中教學圖](../images/tw-tutorial/14-ide-vscode-04.png)

## App 與 VS Code 外掛怎麼選

| | Codex 桌面 App | VS Code 外掛 |
|---|---|---|
| 適合場景 | 多工管理、Skills、Automations | 邊寫程式碼邊呼叫，貼近編輯器工作流 |
| 檔案結構可見性 | 需要切換介面 | 直接在編輯器裡檢視 |
| 修改前後對比 | 獨立檢視 | 可結合編輯器 diff 檢視 |
| 推薦使用者 | 需要並行任務或外掛協作 | 日常編碼開發者 |

根據自己的使用習慣選擇即可，兩者可以配合使用。

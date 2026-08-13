---
description: "Codex 與 Draw.io MCP 案例，說明如何用 AI 自動繪製架構圖、整理節點關係並生成可編輯圖形。"
---

# Codex × Draw.io MCP：AI 自動繪製架構圖

俗話說，一圖勝千言。當我們想要介紹一個專案架構、業務流程，或者系統模組關係、日常讀書的核心邏輯時，如果只用文字講，讀者很容易看累。如果我們能把它整理成一張資訊圖或者流程圖，理解成本就會降低很多。

**Draw.io** 就是一個非常好的工具。它可以用來繪製：

1. 流程圖
2. 架構圖
3. 思維導圖
4. 系統設計圖
5. 業務流程圖
6. 技術路線圖

很多程式設計師、產品經理、架構師都會用它來表達複雜系統之間的關係。前段時間，Draw.io 官方釋出了自己的 MCP。

GitHub 地址：https://github.com/jgraph/drawio-mcp

![繁中教學圖](../images/tw-tutorial/drawio-mcp-01.png)

本章節介紹如何使用 Codex 安裝、使用 Draw.io 的 MCP 工具，去繪製資訊圖或架構圖。

---

## 1. 安裝

可以在設定裡面新增，但需要填寫對應的設定選項：

![繁中教學圖](../images/tw-tutorial/drawio-mcp-02.png)

更簡單的方法是**直接把 Draw.io MCP 的 GitHub 倉庫連結丟給 Codex，讓 Codex 幫我們完成安裝**。

![繁中教學圖](../images/tw-tutorial/drawio-mcp-03.png)

如果它沒有理解你的需求，就讓它直接安裝，說："安裝之後，請確保我可以直接使用。"它就會幫你完成安裝的過程。

安裝完成之後，確認一下即可：

![繁中教學圖](../images/tw-tutorial/drawio-mcp-04.png)

---

## 2. 開始使用

我選擇一本書的內容，讓 Draw.io 根據這本書的核心觀點，繪製一張中文資訊圖。

![繁中教學圖](../images/tw-tutorial/drawio-mcp-05.png)

你可以隨意要求它，自定義要繪製的內容、主題、風格等相關要求。

> **提示：** 在提示詞裡一定要強調使用 **Draw.io 的 MCP** 去完成任務，這樣它才會呼叫這個工具。

![繁中教學圖](../images/tw-tutorial/drawio-mcp-06.png)

繪製完成之後，它會針對本次任務進行總結，並且**自動開啟瀏覽器顯示繪圖結果**。

![繁中教學圖](../images/tw-tutorial/drawio-mcp-07.png)

繪圖結果如圖所示：

![繁中教學圖](../images/tw-tutorial/drawio-mcp-08.png)

---

## 參考來源

Draw.io MCP 的安裝方式請以 [jgraph/drawio-mcp](https://github.com/jgraph/drawio-mcp) 目前 README 為準。這個案例保留操作思路，具體版本、命令和權限請以你當前環境重新核對。

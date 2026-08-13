---
description: "Codex 與 HyperFrames 案例，說明如何用程式碼生成動畫影片，組織素材、指令碼、渲染和結果驗證。"
---

# Codex × HyperFrames：用程式碼生成動畫影片

**HyperFrames** 和前段時間很火的 **Remotion** 都屬於程式碼化的影片生成：

1. Remotion：使用 React 寫影片
2. HyperFrames：使用 HTML、CSS 或 JS 做影片

如果你想做一些輕量化的影片，比如網頁轉影片、文件轉影片等，那麼使用 **HyperFrames** 就是一個非常不錯的選擇。

---

## 1. 安裝外掛

開啟 Codex 桌面 App 的左側邊欄，找到"**外掛和技能**"。進入後搜尋 **HyperFrames** 即可找到該外掛，直接安裝即可。

![繁中教學圖](../images/tw-tutorial/hyperframes-animation-01.png)

> HyperFrames 也有對應的 **Skill**（技能），兩者都可以使用。大家可以選擇合適的或自己喜歡的方式進行安裝。

---

## 2. 如何使用

我直接給了它一本書的內容，然後讓它根據這本書的內容去製作影片，它就會呼叫這個技能去完成對應的任務。

![繁中教學圖](../images/tw-tutorial/hyperframes-animation-02.png)

任務完成之後，它會告訴我們**返回本地檔案的地址**，點選即可跳轉檢視具體內容。

![繁中教學圖](../images/tw-tutorial/hyperframes-animation-03.png)

如果你仔細觀察，會發現實際上它是**生成了幾張 JPEG 格式的圖片，然後將圖片組裝成影片**。大概是這樣一個過程。

![繁中教學圖](../images/tw-tutorial/hyperframes-animation-04.png)

第一次生成的影片可能並沒有想象的那麼完美，這時需要繼續增加需求。

比如針對以下方面進行多次迭代，效果可能就會更好：

1. 畫面表現
2. 生成的具體效果
3. 每一頁的文案、配色、背景等具體細節

這需要我們的耐心和一步一步的嘗試。

![繁中教學圖](../images/tw-tutorial/hyperframes-animation-05.png)

> **技巧：** 如果你有目標影片，可以直接把成品的影片效果發給它，讓它模仿去製作，做出來的效果可能會更加符合要求。

如果你對於 Remotion 製作影片的方式感興趣，那麼我推薦王老師在 GitHub 上分享的開源專案 Remotion的skill，你可以進行參考學習。

地址：https://github.com/wshuyi/remotion-video-skill

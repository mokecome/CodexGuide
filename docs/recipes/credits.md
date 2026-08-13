---
description: "Codex 新手實戰指南參考來源與致謝，整理案例中涉及的官方文件、開源倉庫、工具連結和可替換來源。"
---

# 參考來源與致謝

本站以台灣用戶常見工具和工作流為優先。案例中的第三方工具僅作為示範，實際使用前請重新確認官方文件、權限範圍、費用與資料安全。

## GitHub 開源倉庫

| 倉庫 | 作者 | 用途 | 相關案例 |
|------|------|------|----------|
| [op7418/guizang-ppt-skill](https://github.com/op7418/guizang-ppt-skill) | op7418 | 案例中使用的 PPT Skill，支援一句話生成簡報 | [01 Codex × PPT Skill](./ppt-skill-walkthrough.md) |
| [jgraph/drawio-mcp](https://github.com/jgraph/drawio-mcp) | Draw.io 官方 | Draw.io 官方釋出的 MCP，讓 Codex 直接繪製架構圖 | [02 Codex × Draw.io MCP](./drawio-mcp.md) |
| [wshuyi/remotion-video-skill](https://github.com/wshuyi/remotion-video-skill) | wshuyi | 基於 Remotion 的影片生成 Skill，程式碼驅動製作影片 | [04 Codex × HyperFrames](./hyperframes-animation.md) |
| [karpathy/llm-wiki](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f) | Andrej Karpathy | LLM Wiki 理念原始設計文件，本站案例的核心參考 | [07 Codex × LLM Wiki](./llm-wiki-codex.md) |
| [BigPizzaV3/CodexPlusPlus](https://github.com/BigPizzaV3/CodexPlusPlus) | BigPizzaV3 | 社群工具，用於 Codex 桌面 App 外部 launcher、中轉注入和 provider 管理；最後核對日期：2026-05-29 | [連線第三方 API](../guide/05-third-party-api.md) |
| [BenedictKing/ccx](https://github.com/BenedictKing/ccx) | BenedictKing | 社群專案，提供 AI API 代理、協議轉換、渠道編排和 Codex Responses 閘道能力；最後核對日期：2026-05-29 | [連線第三方 API](../guide/05-third-party-api.md) |
| [farion1231/cc-switch](https://github.com/farion1231/cc-switch) | farion1231 | 社群工具，用於管理 Codex、Claude Code、Gemini CLI 等工具的供應商設定和一鍵切換；最後核對日期：2026-05-29 | [連線第三方 API](../guide/05-third-party-api.md) |

## 台灣常見工具來源

| 工具 | 相關案例 | 連結 |
|------|----------|------|
| Google Workspace | [06 Codex × Google Workspace](./google-workspace-codex.md) | [Google Workspace](https://workspace.google.com/) |
| Notion | [09 Codex × Notion MCP](./notion-mcp-codex.md) | [Notion](https://www.notion.so/) |
| Slack | [06 Codex × Google Workspace](./google-workspace-codex.md) | [Slack](https://slack.com/) |
| DKFile | [10 Codex × DKFile](./dkfile-deploy-codex.md) | [dkfile.net](https://dkfile.net) |

## OpenAI 官方文件

| 文件 | 相關案例 | 連結 |
|------|----------|------|
| Using Codex with your ChatGPT plan | [12 Codex × Chrome](./chrome-browser-plugin.md) | [檢視文件](https://help.openai.com/en/articles/11369540-using-codex-with-your-chatgpt-plan) |
| Codex Skills 官方說明 | [01 Codex × PPT Skill](./ppt-skill-walkthrough.md) | [檢視文件](https://developers.openai.com/codex/skills) |
| Codex Use Cases | [12 Codex × Chrome](./chrome-browser-plugin.md) | [檢視文件](https://developers.openai.com/codex/explore/) |

## 關於本站

本站所有案例都應以「可驗證、可替換、可落地」為原則。若某個工具在台灣不常用，請優先替換成 Google Workspace、Notion、Slack、LINE、GitHub 或其他你團隊已經使用的工具。

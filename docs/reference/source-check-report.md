---
description: "OpenAI 官方資料來源自動檢查報告，記錄官方連結狀態、內容變化和需要人工核對的項目。"
---

# 官方資料自動檢查報告

最後自動檢查日期：2026-08-17。

> 這份報告只代表官方連結可訪問與內容指紋是否變化，不代表文章內容已完成人工核對。文章內的「官方資料最後核對日期」仍需人工確認後再更新。

## 概覽

| 狀態 | 數量 |
| --- | ---: |
| 正常 | 8 |
| 受保護 | 10 |
| 需人工核對 | 17 |
| 錯誤 | 0 |

## 需人工核對

- [Codex docs home](https://developers.openai.com/codex/)：內容 hash 和上次檢查不同，請人工打開原文核對。
- [Codex agent approvals and security](https://developers.openai.com/codex/agent-approvals-security)：內容 hash 和上次檢查不同，請人工打開原文核對。
- [Codex App docs](https://developers.openai.com/codex/app)：內容 hash 和上次檢查不同，請人工打開原文核對。
- [Codex App settings](https://developers.openai.com/codex/app/settings)：內容 hash 和上次檢查不同，請人工打開原文核對。
- [Codex CLI features](https://developers.openai.com/codex/cli/features)：內容 hash 和上次檢查不同，請人工打開原文核對。
- [Codex config advanced](https://developers.openai.com/codex/config-advanced)：內容 hash 和上次檢查不同，請人工打開原文核對。
- [Codex config basic](https://developers.openai.com/codex/config-basic)：內容 hash 和上次檢查不同，請人工打開原文核對。
- [Codex config reference](https://developers.openai.com/codex/config-reference)：內容 hash 和上次檢查不同，請人工打開原文核對。
- [Codex explore](https://developers.openai.com/codex/explore/)：內容 hash 和上次檢查不同，請人工打開原文核對。
- [Codex AGENTS.md guide](https://developers.openai.com/codex/guides/agents-md)：內容 hash 和上次檢查不同，請人工打開原文核對。
- [Codex security](https://developers.openai.com/codex/security)：內容 hash 和上次檢查不同，請人工打開原文核對。
- [Codex skills](https://developers.openai.com/codex/skills)：內容 hash 和上次檢查不同，請人工打開原文核對。
- [Codex use cases](https://developers.openai.com/codex/use-cases/)：內容 hash 和上次檢查不同，請人工打開原文核對。
- [openai/codex repository](https://github.com/openai/codex)：內容 hash 和上次檢查不同，請人工打開原文核對。
- [openai/codex AGENTS.md docs](https://github.com/openai/codex/blob/main/docs/agents_md.md)：內容 hash 和上次檢查不同，請人工打開原文核對。
- [openai/codex install docs](https://github.com/openai/codex/blob/main/docs/install.md)：內容 hash 和上次檢查不同，請人工打開原文核對。
- [Codex platform docs](https://platform.openai.com/docs/codex)：內容 hash 和上次檢查不同，請人工打開原文核對。

## 錯誤項目

目前沒有偵測到錯誤連結。

## 受保護來源

標記為「受保護」的來源回傳 Cloudflare challenge。這代表自動腳本無法讀取內容指紋，但連結仍應保留，並由人工用瀏覽器定期核對。

## 來源明細

| 狀態 | 來源 | HTTP | 最後人工核對 | 使用頁面 |
| --- | --- | ---: | --- | --- |
| 受保護 | [ChatGPT Codex Cloud](https://chatgpt.com/codex/cloud) | 403 (Cloudflare challenge，需用瀏覽器人工核對內容。) | 2026-05-27 | `docs/guide/01-app-installation.md`<br>`docs/guide/17-cloud-ide-app.md` |
| 受保護 | [ChatGPT pricing](https://chatgpt.com/pricing/) | 403 (Cloudflare challenge，需用瀏覽器人工核對內容。) | 2026-05-27 | `docs/guide/02-subscribe-plus.md` |
| 需人工核對 | [Codex docs home](https://developers.openai.com/codex/) | 200 | 2026-05-27 | `docs/reference/index.md`<br>`docs/platform/index.md`<br>`docs/platform/app.md`<br>`docs/platform/cloud.md`<br>`docs/platform/ide.md`<br>`docs/configuration/index.md`<br>`docs/configuration/mcp-skills-subagents.md`<br>`docs/configuration/security-admin.md` |
| 需人工核對 | [Codex agent approvals and security](https://developers.openai.com/codex/agent-approvals-security) | 200 | 2026-05-27 | `docs/reference/index.md`<br>`docs/platform/app.md`<br>`docs/guide/03-app-overview.md`<br>`docs/guide/13-cli-first-run.md`<br>`docs/configuration/index.md`<br>`docs/configuration/security-admin.md` |
| 需人工核對 | [Codex App docs](https://developers.openai.com/codex/app) | 200 | 2026-05-27 | `docs/reference/index.md`<br>`docs/platform/app.md`<br>`docs/guide/03-app-overview.md` |
| 需人工核對 | [Codex App settings](https://developers.openai.com/codex/app/settings) | 200 | 2026-05-27 | `docs/guide/03-app-overview.md` |
| 需人工核對 | [Codex CLI features](https://developers.openai.com/codex/cli/features) | 200 | 2026-05-27 | `docs/reference/index.md`<br>`docs/platform/cli.md`<br>`docs/guide/13-cli-first-run.md`<br>`docs/configuration/index.md`<br>`docs/configuration/cli-options.md` |
| 需人工核對 | [Codex config advanced](https://developers.openai.com/codex/config-advanced) | 200 | 2026-05-27 | `docs/reference/index.md`<br>`docs/configuration/index.md`<br>`docs/configuration/config-file.md` |
| 需人工核對 | [Codex config basic](https://developers.openai.com/codex/config-basic) | 200 | 2026-05-27 | `docs/reference/index.md`<br>`docs/guide/03-app-overview.md`<br>`docs/configuration/index.md`<br>`docs/configuration/config-file.md` |
| 需人工核對 | [Codex config reference](https://developers.openai.com/codex/config-reference) | 200 | 2026-05-29 | `docs/reference/index.md`<br>`docs/guide/05-third-party-api.md`<br>`docs/configuration/index.md`<br>`docs/configuration/config-file.md` |
| 需人工核對 | [Codex explore](https://developers.openai.com/codex/explore/) | 200 | 2026-05-27 | `docs/recipes/chrome-browser-plugin.md`<br>`docs/recipes/credits.md` |
| 需人工核對 | [Codex AGENTS.md guide](https://developers.openai.com/codex/guides/agents-md) | 200 | 2026-05-27 | `docs/reference/index.md`<br>`docs/guide/13-cli-first-run.md`<br>`docs/guide/15-agents-md.md`<br>`docs/configuration/index.md` |
| 需人工核對 | [Codex security](https://developers.openai.com/codex/security) | 200 | 2026-05-27 | `docs/guide/16-sandbox-approvals.md` |
| 需人工核對 | [Codex skills](https://developers.openai.com/codex/skills) | 200 | 2026-05-27 | `docs/reference/index.md`<br>`docs/platform/app.md`<br>`docs/guide/09-skills-plugins.md`<br>`docs/recipes/credits.md`<br>`docs/recipes/ppt-skill-walkthrough.md`<br>`docs/configuration/index.md`<br>`docs/configuration/mcp-skills-subagents.md` |
| 需人工核對 | [Codex use cases](https://developers.openai.com/codex/use-cases/) | 200 | 2026-05-27 | `docs/guide/10-automation.md` |
| 需人工核對 | [openai/codex repository](https://github.com/openai/codex) | 200 | 2026-05-27 | `README.md`<br>`docs/reference/index.md`<br>`docs/platform/index.md`<br>`docs/platform/cli.md`<br>`docs/guide/12-cli-installation.md`<br>`docs/guide/15-agents-md.md`<br>`docs/configuration/cli-options.md` |
| 需人工核對 | [openai/codex AGENTS.md docs](https://github.com/openai/codex/blob/main/docs/agents_md.md) | 200 | 2026-05-27 | `docs/reference/index.md` |
| 正常 | [openai/codex authentication docs](https://github.com/openai/codex/blob/main/docs/authentication.md) | 200 | 2026-05-27 | `docs/reference/index.md` |
| 正常 | [openai/codex config docs](https://github.com/openai/codex/blob/main/docs/config.md) | 200 | 2026-05-27 | `docs/reference/index.md`<br>`docs/configuration/config-file.md` |
| 正常 | [openai/codex exec docs](https://github.com/openai/codex/blob/main/docs/exec.md) | 200 | 2026-05-27 | `docs/reference/index.md`<br>`docs/platform/cli.md`<br>`docs/configuration/cli-options.md` |
| 正常 | [openai/codex exec policy docs](https://github.com/openai/codex/blob/main/docs/execpolicy.md) | 200 | 2026-05-27 | `docs/reference/index.md`<br>`docs/configuration/security-admin.md` |
| 正常 | [openai/codex getting started docs](https://github.com/openai/codex/blob/main/docs/getting-started.md) | 200 | 2026-05-27 | `docs/reference/index.md`<br>`docs/platform/cli.md`<br>`docs/guide/13-cli-first-run.md`<br>`docs/configuration/cli-options.md` |
| 需人工核對 | [openai/codex install docs](https://github.com/openai/codex/blob/main/docs/install.md) | 200 | 2026-05-27 | `docs/reference/index.md`<br>`docs/platform/cli.md`<br>`docs/guide/12-cli-installation.md` |
| 正常 | [openai/codex sandbox docs](https://github.com/openai/codex/blob/main/docs/sandbox.md) | 200 | 2026-05-27 | `docs/reference/index.md`<br>`docs/guide/16-sandbox-approvals.md`<br>`docs/configuration/security-admin.md` |
| 正常 | [openai/codex skills docs](https://github.com/openai/codex/blob/main/docs/skills.md) | 200 | 2026-05-27 | `docs/reference/index.md`<br>`docs/configuration/mcp-skills-subagents.md` |
| 正常 | [openai/codex slash commands docs](https://github.com/openai/codex/blob/main/docs/slash_commands.md) | 200 | 2026-05-27 | `docs/reference/index.md`<br>`docs/platform/cli.md`<br>`docs/configuration/cli-options.md` |
| 受保護 | [OpenAI Codex CLI getting started](https://help.openai.com/en/articles/11096431-openai-codex-cli-getting-started) | 403 (Cloudflare challenge，需用瀏覽器人工核對內容。) | 2026-05-27 | `README.md`<br>`docs/reference/index.md`<br>`docs/guide/08-permissions.md`<br>`docs/guide/12-cli-installation.md` |
| 受保護 | [Codex in ChatGPT Help Center](https://help.openai.com/en/articles/11369540-codex-in-chatgpt) | 403 (Cloudflare challenge，需用瀏覽器人工核對內容。) | 2026-05-27 | `README.md`<br>`docs/reference/index.md`<br>`docs/platform/index.md`<br>`docs/platform/chatgpt.md`<br>`docs/platform/cloud.md`<br>`docs/guide/12-cli-installation.md` |
| 受保護 | [Using Codex with your ChatGPT plan](https://help.openai.com/en/articles/11369540-using-codex-with-your-chatgpt-plan) | 403 (Cloudflare challenge，需用瀏覽器人工核對內容。) | 2026-05-27 | `docs/guide/02-subscribe-plus.md`<br>`docs/guide/08-permissions.md`<br>`docs/guide/09-skills-plugins.md`<br>`docs/guide/10-automation.md`<br>`docs/recipes/chrome-browser-plugin.md`<br>`docs/recipes/credits.md` |
| 受保護 | [OpenAI Codex product page](https://openai.com/codex/) | 403 (Cloudflare challenge，需用瀏覽器人工核對內容。) | 2026-05-27 | `README.md`<br>`docs/reference/index.md`<br>`docs/platform/index.md`<br>`docs/platform/chatgpt.md`<br>`docs/platform/ide.md`<br>`docs/guide/01-app-installation.md` |
| 受保護 | [Introducing Codex](https://openai.com/index/introducing-codex/) | 403 (Cloudflare challenge，需用瀏覽器人工核對內容。) | 2026-05-27 | `docs/reference/index.md`<br>`docs/platform/cloud.md` |
| 受保護 | [Introducing the Codex app](https://openai.com/index/introducing-the-codex-app/) | 403 (Cloudflare challenge，需用瀏覽器人工核對內容。) | 2026-05-27 | `docs/reference/index.md`<br>`docs/platform/app.md` |
| 受保護 | [Unrolling the Codex agent loop](https://openai.com/index/unrolling-the-codex-agent-loop/) | 403 (Cloudflare challenge，需用瀏覽器人工核對內容。) | 2026-05-27 | `docs/reference/index.md` |
| 受保護 | [Work with Codex from anywhere](https://openai.com/index/work-with-codex-from-anywhere/) | 403 (Cloudflare challenge，需用瀏覽器人工核對內容。) | 2026-05-27 | `docs/reference/index.md`<br>`docs/guide/04-mobile-control-desktop.md` |
| 需人工核對 | [Codex platform docs](https://platform.openai.com/docs/codex) | 200 | 2026-05-27 | `README.md`<br>`docs/reference/index.md`<br>`docs/platform/chatgpt.md`<br>`docs/platform/cloud.md` |

import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const sourcePath = path.join(rootDir, "docs/.vuepress/source-checks.json");
const snapshotPath = path.join(rootDir, "docs/.vuepress/source-check-snapshots.json");
const reportPath = path.join(rootDir, "docs/reference/source-check-report.md");
const timeoutMs = Number.parseInt(process.env.SOURCE_CHECK_TIMEOUT_MS ?? "20000", 10);
const today = new Intl.DateTimeFormat("en-CA", {
  timeZone: "Asia/Taipei",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
}).format(new Date());

async function readJson(filePath, fallback) {
  try {
    return JSON.parse(await readFile(filePath, "utf8"));
  } catch (error) {
    if (error.code === "ENOENT") return fallback;
    throw error;
  }
}

function hashBuffer(buffer) {
  return createHash("sha256").update(Buffer.from(buffer)).digest("hex");
}

async function fetchWithTimeout(url, method = "GET") {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(url, {
      method,
      redirect: "follow",
      signal: controller.signal,
      headers: {
        "user-agent": "codex-newbie-guide-source-check/1.0",
        accept: "text/html,application/xhtml+xml,application/json,text/plain,*/*",
      },
    });
  } finally {
    clearTimeout(timeout);
  }
}

function isProtectedChallenge(response) {
  return (
    response.status === 403 &&
    (response.headers.get("cf-mitigated") === "challenge" ||
      response.headers.get("server")?.toLowerCase().includes("cloudflare"))
  );
}

function toStableCheckUrl(url) {
  if (url === "https://github.com/openai/codex") {
    return "https://api.github.com/repos/openai/codex";
  }

  const githubBlobPrefix = "https://github.com/openai/codex/blob/main/";
  if (url.startsWith(githubBlobPrefix)) {
    return `https://raw.githubusercontent.com/openai/codex/main/${url.slice(githubBlobPrefix.length)}`;
  }

  return url;
}

async function checkSource(source, previous) {
  const checkedAt = new Date().toISOString();
  const checkUrl = source.checkUrl ?? toStableCheckUrl(source.url);

  try {
    let response = await fetchWithTimeout(checkUrl, "HEAD");
    if ([405, 403, 404].includes(response.status)) {
      response = await fetchWithTimeout(checkUrl, "GET");
    }

    if (isProtectedChallenge(response)) {
      return {
        id: source.id,
        title: source.title,
        url: source.url,
        checkedUrl: checkUrl,
        finalUrl: response.url || source.url,
        status: response.status,
        ok: true,
        protected: true,
        changed: false,
        checkedAt,
        etag: response.headers.get("etag"),
        lastModified: response.headers.get("last-modified"),
        contentType: response.headers.get("content-type"),
        bodyHash: previous?.checkedUrl === checkUrl ? (previous?.bodyHash ?? null) : null,
        bytes: previous?.bytes ?? null,
        error: null,
        note: "Cloudflare challenge，需用瀏覽器人工核對內容。",
        lastManualReviewed: source.lastManualReviewed,
        pages: source.pages ?? [],
      };
    }

    let bodyHash = previous?.bodyHash ?? null;
    let bytes = previous?.bytes ?? null;
    if (response.ok || (response.status >= 300 && response.status < 400)) {
      try {
        const getResponse = await fetchWithTimeout(checkUrl, "GET");
        const buffer = await getResponse.arrayBuffer();
        bodyHash = hashBuffer(buffer);
        bytes = buffer.byteLength;
        response = getResponse;
      } catch {
        // If a page blocks GET body fetching but HEAD succeeded, keep status data.
      }
    }

    const changed = Boolean(previous?.checkedUrl === checkUrl && previous?.bodyHash && bodyHash && previous.bodyHash !== bodyHash);
    const ok = response.status >= 200 && response.status < 400;

    return {
      id: source.id,
      title: source.title,
      url: source.url,
      checkedUrl: checkUrl,
      finalUrl: response.url || source.url,
      status: response.status,
      ok,
      protected: false,
      changed,
      checkedAt,
      etag: response.headers.get("etag"),
      lastModified: response.headers.get("last-modified"),
      contentType: response.headers.get("content-type"),
      bodyHash,
      bytes,
      error: null,
      note: null,
      lastManualReviewed: source.lastManualReviewed,
      pages: source.pages ?? [],
    };
  } catch (error) {
    return {
      id: source.id,
      title: source.title,
      url: source.url,
      checkedUrl: checkUrl,
      finalUrl: previous?.finalUrl ?? source.url,
      status: previous?.status ?? null,
      ok: false,
      protected: false,
      changed: false,
      checkedAt,
      etag: previous?.etag ?? null,
      lastModified: previous?.lastModified ?? null,
      contentType: previous?.contentType ?? null,
      bodyHash: previous?.bodyHash ?? null,
      bytes: previous?.bytes ?? null,
      error: error.name === "AbortError" ? `Timeout after ${timeoutMs}ms` : error.message,
      note: null,
      lastManualReviewed: source.lastManualReviewed,
      pages: source.pages ?? [],
    };
  }
}

function statusLabel(result) {
  if (result.protected) return "受保護";
  if (!result.ok) return "錯誤";
  if (result.changed) return "需人工核對";
  return "正常";
}

function escapeCell(value) {
  return String(value ?? "").replaceAll("|", "\\|").replaceAll("\n", " ");
}

function renderReport(results) {
  const okCount = results.filter((item) => item.ok && !item.changed).length;
  const protectedCount = results.filter((item) => item.protected).length;
  const changedCount = results.filter((item) => item.ok && item.changed).length;
  const errorCount = results.filter((item) => !item.ok).length;

  const rows = results
    .map((item) => {
      const pages = item.pages.length > 0 ? item.pages.map((page) => `\`${page}\``).join("<br>") : "-";
      const status = item.error ? `${item.status ?? "-"} (${item.error})` : item.note ? `${item.status} (${item.note})` : item.status;
      return `| ${statusLabel(item)} | [${escapeCell(item.title)}](${item.url}) | ${escapeCell(status)} | ${item.lastManualReviewed} | ${pages} |`;
    })
    .join("\n");

  const changedList = results
    .filter((item) => item.ok && item.changed)
    .map((item) => `- [${item.title}](${item.url})：內容 hash 和上次檢查不同，請人工打開原文核對。`)
    .join("\n");

  const errorList = results
    .filter((item) => !item.ok)
    .map((item) => `- [${item.title}](${item.url})：${item.error ?? `HTTP ${item.status}`}`)
    .join("\n");

  return `---\ndescription: "OpenAI 官方資料來源自動檢查報告，記錄官方連結狀態、內容變化和需要人工核對的項目。"\n---\n\n# 官方資料自動檢查報告\n\n最後自動檢查日期：${today}。\n\n> 這份報告只代表官方連結可訪問與內容指紋是否變化，不代表文章內容已完成人工核對。文章內的「官方資料最後核對日期」仍需人工確認後再更新。\n\n## 概覽\n\n| 狀態 | 數量 |\n| --- | ---: |\n| 正常 | ${okCount - protectedCount} |\n| 受保護 | ${protectedCount} |\n| 需人工核對 | ${changedCount} |\n| 錯誤 | ${errorCount} |\n\n## 需人工核對\n\n${changedList || "目前沒有偵測到內容 hash 變化。"}\n\n## 錯誤項目\n\n${errorList || "目前沒有偵測到錯誤連結。"}\n\n## 受保護來源\n\n標記為「受保護」的來源回傳 Cloudflare challenge。這代表自動腳本無法讀取內容指紋，但連結仍應保留，並由人工用瀏覽器定期核對。\n\n## 來源明細\n\n| 狀態 | 來源 | HTTP | 最後人工核對 | 使用頁面 |\n| --- | --- | ---: | --- | --- |\n${rows}\n`;
}

async function main() {
  const sources = await readJson(sourcePath, []);
  const previousSnapshot = await readJson(snapshotPath, { checkedAt: null, sources: {} });
  const previousById = previousSnapshot.sources ?? {};

  const seen = new Set();
  for (const source of sources) {
    if (!source.id || !source.url || !source.title) {
      throw new Error(`Invalid source item: ${JSON.stringify(source)}`);
    }
    if (seen.has(source.id)) {
      throw new Error(`Duplicate source id: ${source.id}`);
    }
    seen.add(source.id);
  }

  const results = [];
  for (const source of sources) {
    process.stdout.write(`Checking ${source.id}... `);
    const result = await checkSource(source, previousById[source.id]);
    results.push(result);
    process.stdout.write(`${statusLabel(result)}\n`);
  }

  const nextSnapshot = {
    checkedAt: new Date().toISOString(),
    sources: Object.fromEntries(results.map((item) => [item.id, item])),
  };

  await mkdir(path.dirname(snapshotPath), { recursive: true });
  await mkdir(path.dirname(reportPath), { recursive: true });
  await writeFile(snapshotPath, `${JSON.stringify(nextSnapshot, null, 2)}\n`, "utf8");
  await writeFile(reportPath, renderReport(results), "utf8");

  const errors = results.filter((item) => !item.ok);
  console.log(`\nChecked ${results.length} sources. ${errors.length} errors.`);
  if (errors.length > 0 && process.env.SOURCE_CHECK_FAIL_ON_ERROR === "1") {
    process.exitCode = 1;
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

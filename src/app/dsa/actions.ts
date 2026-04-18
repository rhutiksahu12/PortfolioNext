import { getHighlighterInstance } from "@/lib/shiki";

function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function highlightCode(code: string, lang: string) {
  try {
    const shiki = await getHighlighterInstance();

    return shiki.codeToHtml(code, {
      lang: lang || "text",
      theme: "github-dark",
    });
  } catch (e) {
    return `<pre><code>${escapeHtml(code)}</code></pre>`;
  }
}
"use server";

import { codeToHtml } from "shiki";

export async function highlightCode(code: string, lang: string) {
  try {
    const html = await codeToHtml(code, {
      lang: lang as any,
      theme: "github-dark",
    });
    return html;
  } catch (e) {
    console.error("Shiki highlight error:", e);
    return `<pre class="bg-[#1e1e1e] text-[#d4d4d4] p-4 rounded-lg overflow-x-auto text-sm font-mono border border-border"><code>${code}</code></pre>`;
  }
}

import { codeToHtml } from "shiki";

interface CodeBlockProps {
    code: string
    lang?: string
    filename?: string
}

export default async function CodeBlock({
    code,
    lang = "ts",
    filename = "example.ts"
}: CodeBlockProps) {

    const html = await codeToHtml(code, {
        lang,
        theme: "github-dark"
    })

    return (
        <div className="rounded-lg overflow-hidden border border-border shadow-lg bg-[#1e1e1e] ">

            {/* Header */}
            <div className="bg-linear-to-r from-slate-900 to-slate-800 px-4 py-3 border-b border-slate-700 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">{filename}</span>

                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                </div>
            </div>

            {/* Highlighted Code */}
            <div
                className="[&_pre]:p-6 [&_pre]:m-0 [&_pre]:overflow-x-auto text-sm"
                dangerouslySetInnerHTML={{ __html: html }}
            />
        </div>
    )
}
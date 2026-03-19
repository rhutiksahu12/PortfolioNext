import { PostBlock } from '@/types/PostTypes'
import { codeToHtml } from 'shiki'

// ─── Code Block ───────────────────────────────────────────────────────────────

async function CodeBlock({
    filename,
    language = 'typescript',
    content,
}: Extract<PostBlock, { type: 'code' }>) {
    const html = await codeToHtml(content, {
        lang: language,
        themes: {
            light: 'github-light',
            dark: 'github-dark',
        },
    })

    return (
        <div className="rounded-lg overflow-hidden border border-border text-sm my-2">
            <div className="bg-slate-900 px-4 py-2.5 border-b border-border flex items-center justify-between">
                <span className="text-xs font-mono text-muted-foreground">
                    {filename ?? `snippet.${language}`}
                </span>
                <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400 opacity-70" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400 opacity-70" />
                    <div className="w-3 h-3 rounded-full bg-green-400 opacity-70" />
                </div>
            </div>
            <div
                className="overflow-x-auto [&>pre]:p-5 [&>pre]:leading-relaxed [&>pre]:!bg-transparent"
                dangerouslySetInnerHTML={{ __html: html }}
            />
        </div>
    )
}

// ─── Table Block ──────────────────────────────────────────────────────────────

function TableBlock({ headers, rows }: Extract<PostBlock, { type: 'table' }>) {
    return (
        <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
                <thead className="bg-muted">
                    <tr>
                        {headers.map((h, i) => (
                            <th
                                key={i}
                                className="px-4 py-2.5 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wide"
                            >
                                {h}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="divide-y divide-border">
                    {rows.map((row, i) => (
                        <tr key={i} className="hover:bg-muted/40 transition-colors">
                            {row.map((cell, j) => (
                                <td
                                    key={j}
                                    className={`px-4 py-3 ${j === 0 ? 'text-muted-foreground text-xs font-medium' : 'text-foreground'}`}
                                >
                                    {cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

// ─── Main Renderer ────────────────────────────────────────────────────────────

export async function PostBlockRenderer({ block }: { block: PostBlock }) {
    switch (block.type) {
        case 'heading':
            return block.level === 2 ? (
                <h2 className="text-2xl font-bold mt-10 mb-2">{block.content}</h2>
            ) : (
                <h3 className="text-xl font-semibold mt-8 mb-2 text-muted-foreground">{block.content}</h3>
            )

        case 'text':
            return <p className="text-lg leading-relaxed text-muted-foreground">{block.content}</p>

        case 'code':
            return <CodeBlock {...block} />

        case 'list':
            return block.ordered ? (
                <ol className="space-y-2 my-1">
                    {block.items.map((item, i) => (
                        <li key={i} className="flex gap-3">
                            <span className="text-foreground font-semibold flex-shrink-0 text-sm mt-0.5">
                                {i + 1}.
                            </span>
                            <span className="text-muted-foreground text-lg">{item}</span>
                        </li>
                    ))}
                </ol>
            ) : (
                <ul className="space-y-1.5 my-1">
                    {block.items.map((item, i) => (
                        <li key={i} className="flex gap-3 text-muted-foreground">
                            <span className="text-accent mt-1.5 flex-shrink-0">–</span>
                            <span className="text-lg">{item}</span>
                        </li>
                    ))}
                </ul>
            )

        case 'table':
            return <TableBlock {...block} />

        default:
            return null
    }
}
import { ContentBlock } from '@/types/CaseStudiesTypes'
import { codeToHtml } from 'shiki'

// ─── Code Block (async, Shiki) ────────────────────────────────────────────────

async function CodeBlock({
    filename,
    language = 'typescript',
    content,
}: Extract<ContentBlock, { type: 'code' }>) {
    const html = await codeToHtml(content, {
        lang: language,
        themes: {
            light: 'github-light',
            dark: 'github-dark',
        },
    })

    return (
        <div className="rounded-lg overflow-hidden border border-border text-sm">
            {/* Title bar */}
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

            {/*
        Shiki outputs a <pre><code> wrapped in a <span> with inline bg color.
        [&>pre]:p-5 targets that inner <pre> to add padding.
        The dual-theme setup uses CSS variables so light/dark switch automatically.
      */}
            <div
                className="overflow-x-auto [&>pre]:p-5 [&>pre]:leading-relaxed [&>pre]:bg-transparent!"
                dangerouslySetInnerHTML={{ __html: html }}
            />
        </div>
    )
}

// ─── Diagram Block ────────────────────────────────────────────────────────────

function DiagramBlock({ title, steps }: Extract<ContentBlock, { type: 'diagram' }>) {
    return (
        <div className="border border-border rounded-lg p-6 space-y-3">
            {title && (
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    {title}
                </p>
            )}
            <div className="flex flex-col items-start">
                {steps.map((step, i) => (
                    <div key={i} className="flex flex-col items-start">
                        <div className="flex items-center gap-3">
                            <div className="w-7 h-7 rounded-full bg-muted flex items-center justify-center text-xs font-semibold text-muted-foreground shrink-0">
                                {i + 1}
                            </div>
                            <div>
                                <span className="text-sm font-medium">{step.label}</span>
                                {step.sublabel && (
                                    <span className="text-xs text-muted-foreground ml-2">{step.sublabel}</span>
                                )}
                            </div>
                        </div>
                        {i < steps.length - 1 && <div className="ml-3.5 w-px h-5 bg-border" />}
                    </div>
                ))}
            </div>
        </div>
    )
}

// ─── Metrics Block ────────────────────────────────────────────────────────────

function MetricsBlock({ items }: Extract<ContentBlock, { type: 'metrics' }>) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {items.map((m, i) => (
                <div key={i} className="rounded-lg border border-border bg-muted/40 p-4 space-y-1">
                    <p className="text-xs text-muted-foreground">{m.label}</p>
                    <p className="text-xl font-bold">{m.value}</p>
                    {m.delta && <p className="text-xs text-accent font-medium">{m.delta}</p>}
                </div>
            ))}
        </div>
    )
}

// ─── Callout Block ────────────────────────────────────────────────────────────

function CalloutBlock({
    variant = 'info',
    content,
}: Extract<ContentBlock, { type: 'callout' }>) {
    const styles = {
        info: 'border-blue-300 bg-blue-50/50 text-blue-800 dark:border-blue-700 dark:bg-blue-950/30 dark:text-blue-300',
        warning: 'border-yellow-300 bg-yellow-50/50 text-yellow-800 dark:border-yellow-700 dark:bg-yellow-950/30 dark:text-yellow-300',
        success: 'border-green-300 bg-green-50/50 text-green-800 dark:border-green-700 dark:bg-green-950/30 dark:text-green-300',
    }
    return (
        <div className={`border-l-4 rounded-r-lg px-4 py-3 text-sm leading-relaxed ${styles[variant]}`}>
            {content}
        </div>
    )
}

// ─── Main Renderer ────────────────────────────────────────────────────────────
// async because CodeBlock awaits Shiki — runs at build time in Next.js App Router.

export async function BlockRenderer({ block }: { block: ContentBlock }) {
    switch (block.type) {
        case 'text':
            return <p className="text-lg leading-relaxed text-muted-foreground">{block.content}</p>

        case 'code':
            return <CodeBlock {...block} />

        case 'list':
            return block.ordered ? (
                <ol className="space-y-2">
                    {block.items.map((item, i) => (
                        <li key={i} className="flex gap-3">
                            <span className="text-foreground font-semibold shrink-0 text-sm mt-0.5">
                                {i + 1}.
                            </span>
                            <span className="text-muted-foreground text-lg">{item}</span>
                        </li>
                    ))}
                </ol>
            ) : (
                <ul className="space-y-1.5">
                    {block.items.map((item, i) => (
                        <li key={i} className="flex gap-3 text-muted-foreground">
                            <span className="text-accent mt-1.5 shrink-0">–</span>
                            <span className="text-lg">{item}</span>
                        </li>
                    ))}
                </ul>
            )

        case 'diagram':
            return <DiagramBlock {...block} />

        case 'metrics':
            return <MetricsBlock {...block} />

        case 'callout':
            return <CalloutBlock {...block} />

        default:
            return null
    }
}
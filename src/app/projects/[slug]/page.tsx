import Link from 'next/link'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { CASE_STUDIES } from '@/data/CaseStudiesConfig'
import { BlockRenderer } from '@/components/ProjectBlockRenderer'


export default function CaseStudyPage({ params }: { params: { slug: string } }) {
    const caseStudy = CASE_STUDIES[params.slug]

    if (!caseStudy) {
        return (
            <div className="min-h-screen py-20 px-4">
                <div className="max-w-4xl mx-auto">
                    <Link
                        href="/projects"
                        scroll={true}
                        className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-60 transition-opacity mb-8"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to projects
                    </Link>
                    <div className="text-center py-20">
                        <h1 className="text-2xl font-bold">Project not found</h1>
                        <p className="text-muted-foreground mt-2">The project you&apos;re looking for doesn&apos;t exist.</p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <article className="min-h-screen py-12 sm:py-20 px-4">
            <div className="max-w-3xl mx-auto space-y-8">

                {/* Back link */}
                <Link
                    href="/projects"
                    scroll={true}
                    className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:opacity-70 transition-opacity"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to projects
                </Link>

                {/* Header */}
                <div className="space-y-4 border-b border-border pb-8">
                    <div className="space-y-2">
                        <h1 className="text-4xl sm:text-5xl font-bold">{caseStudy.title}</h1>
                        <p className="text-lg text-muted-foreground">{caseStudy.description}</p>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground pt-4 flex-wrap">
                        <span>{caseStudy.year}</span>
                        <span>•</span>
                        <div className="flex gap-2 flex-wrap">
                            {caseStudy.tags.map((tag) => (
                                <span key={tag} className="px-2 py-1 bg-muted rounded text-xs">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Sections — driven entirely by config */}
                <div className="space-y-12">
                    {caseStudy.sections.map((section) => (
                        <section key={section.heading} className="space-y-4">
                            <h2 className="text-2xl font-bold text-accent">{section.heading}</h2>
                            <div className="space-y-5">
                                {section.blocks.map((block, i) => (
                                    <BlockRenderer key={i} block={block} />
                                ))}
                            </div>
                        </section>
                    ))}
                </div>

                {/* Tech stack */}
                <div className="border-t border-border pt-8 space-y-4">
                    <h2 className="text-2xl font-bold text-accent">Tech Stack</h2>
                    <div className="flex flex-wrap gap-2">
                        {caseStudy.techStack.map((tech) => (
                            <span key={tech} className="px-3 py-2 bg-muted text-muted-foreground rounded text-sm font-medium">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Resources */}
                {(caseStudy.github || caseStudy.article) && (
                    <div className="border-t border-border pt-8 space-y-4">
                        <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Resources</h2>
                        <div className="flex flex-wrap gap-3">
                            {caseStudy.github && (
                                <a
                                    href={caseStudy.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground rounded font-medium transition-colors inline-flex items-center gap-2"
                                >
                                    GitHub Repository
                                    <span className="text-xs"><ArrowUpRight className="w-3.5 h-3.5" /></span>
                                </a>
                            )}
                            {caseStudy.article && (
                                <a
                                    href={caseStudy.article}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground rounded font-medium transition-colors inline-flex items-center gap-2"
                                >
                                    Read Article
                                    <span className="text-xs"><ArrowUpRight className="w-3.5 h-3.5" /></span>
                                </a>
                            )}
                        </div>
                    </div>
                )}

                {/* Footer nav */}
                <div className="border-t border-border pt-12">
                    <Link
                        href="/projects"
                        scroll={true}
                        className="inline-flex items-center gap-2 font-medium hover:opacity-60 transition-opacity"
                    >
                        ← Back to all projects
                    </Link>
                </div>

            </div>
        </article>
    )
}

// Optional: static params for Next.js SSG
export function generateStaticParams() {
    return Object.keys(CASE_STUDIES).map((slug) => ({ slug }))
}
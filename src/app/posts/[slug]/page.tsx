import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { POSTS } from '@/data/PostConfig'
import { PostBlockRenderer } from '@/components/PostBlockRenderer'


function formatDate(iso: string) {
    return new Date(iso).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })
}

export default function PostPage({ params }: { params: { slug: string } }) {
    const post = POSTS.find((p) => p.slug === params.slug)

    if (!post) {
        return (
            <div className="min-h-screen py-20 px-4">
                <div className="max-w-3xl mx-auto">
                    <Link
                        href="/posts"
                        className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-60 transition-opacity mb-8"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to posts
                    </Link>
                    <div className="text-center py-20">
                        <h1 className="text-2xl font-bold">Post not found</h1>
                        <p className="text-muted-foreground mt-2">The post you&apos;re looking for doesn&apos;t exist.</p>
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
                    href="/posts"
                    className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:opacity-70 transition-opacity"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to posts
                </Link>

                {/* Header */}
                <div className="space-y-4 border-b border-border pb-8">
                    <h1 className="text-4xl sm:text-5xl font-bold">{post.title}</h1>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground flex-wrap">
                        <span>{formatDate(post.date)}</span>
                        <span>•</span>
                        <span>{post.readTime} min read</span>
                        <span>•</span>
                        <div className="flex gap-2 flex-wrap">
                            {post.tags.map((tag) => (
                                <span key={tag} className="px-2 py-1 bg-muted rounded text-xs">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="space-y-5">
                    {post.blocks.map((block, i) => (
                        <PostBlockRenderer key={i} block={block} />
                    ))}
                </div>

                {/* Footer */}
                <div className="border-t border-border pt-12">
                    <Link
                        href="/posts"
                        className="inline-flex items-center gap-2 font-medium hover:opacity-60 transition-opacity"
                    >
                        ← Back to all posts
                    </Link>
                </div>

            </div>
        </article>
    )
}

export function generateStaticParams() {
    return POSTS.map((p) => ({ slug: p.slug }))
}
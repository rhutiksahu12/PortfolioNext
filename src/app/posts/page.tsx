import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { POSTS } from '@/data/PostConfig';

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function PostsPage() {
  const sorted = [...POSTS].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="min-h-screen py-20 sm:py-32 px-4">
      <div className="max-w-3xl mx-auto space-y-16">

        {/* Header */}
        <div className="space-y-4 border-b border-border pb-8">
          <h1 className="text-4xl sm:text-5xl font-bold">
            <span className="text-accent">Posts</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Thoughts on software engineering, system design, and things I find worth writing about.
          </p>
        </div>

        {/* Posts list */}
        <div className="space-y-8">
          {sorted.map((post) => (
            <Link key={post.slug} href={`/posts/${post.slug}`}>
              <article className="group cursor-pointer border border-border rounded-lg p-6 hover:bg-muted transition-colors">
                <div className="space-y-3">

                  {/* Meta */}
                  <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                    <span>•</span>
                    <span>{post.readTime} min read</span>
                  </div>

                  {/* Title + arrow */}
                  <div className="flex items-start justify-between gap-4">
                    <h2 className="text-xl font-semibold group-hover:opacity-60 transition-opacity">
                      {post.title}
                    </h2>
                    <ArrowRight className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  {(post.github || post.medium) && (
                    <div className="flex flex-wrap gap-2 pt-3 border-t border-border/50">
                      {post.github && (
                        <a
                          href={post.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-accent hover:opacity-70 transition-opacity"
                        >
                          GitHub ↗
                        </a>
                      )}
                      {post.medium && (
                        <a
                          href={post.medium}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-accent hover:opacity-70 transition-opacity"
                        >
                          Read on Medium ↗
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </article>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
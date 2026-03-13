import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  readingTime: number;
  tags: string[];
}

const POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Building a Type-Safe API with TypeScript and Zod',
    slug: 'type-safe-api',
    excerpt:
      'Learn how to build a robust, type-safe API using TypeScript and Zod for runtime validation. We\'ll explore best practices and common pitfalls.',
    date: '2024-03-10',
    readingTime: 12,
    tags: ['TypeScript', 'API Design', 'Validation'],
  },
  {
    id: '2',
    title: 'Mastering Web Performance: A Comprehensive Guide',
    slug: 'web-performance-guide',
    excerpt:
      'A deep dive into web performance optimization. We\'ll cover Core Web Vitals, image optimization, code splitting, and more practical strategies.',
    date: '2024-02-28',
    readingTime: 18,
    tags: ['Performance', 'Web Vitals', 'Optimization'],
  },
  {
    id: '3',
    title: 'React Server Components: The Future of React',
    slug: 'react-server-components',
    excerpt:
      'Understanding React Server Components and how they can improve your application\'s performance and developer experience.',
    date: '2024-02-15',
    readingTime: 14,
    tags: ['React', 'Next.js', 'Server Components'],
  },
  {
    id: '4',
    title: 'CSS in 2024: What\'s New and What to Learn',
    slug: 'css-2024',
    excerpt:
      'Exploring the latest CSS features including container queries, cascade layers, and other cutting-edge capabilities for modern web design.',
    date: '2024-02-01',
    readingTime: 10,
    tags: ['CSS', 'Web Design', 'Frontend'],
  },
  {
    id: '5',
    title: 'From Zero to Hero with React Testing Library',
    slug: 'react-testing-library',
    excerpt:
      'A practical guide to end-to-end testing React components. Learn best practices for writing maintainable and effective tests.',
    date: '2024-01-18',
    readingTime: 16,
    tags: ['Testing', 'React', 'Jest'],
  },
];

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function PostsPage() {
  return (
    <div className="min-h-screen py-20 sm:py-32 px-4">
      <div className="max-w-3xl mx-auto space-y-16">
        {/* Header */}
        <div className="space-y-4 border-b border-border pb-8">
          <h1 className="text-4xl sm:text-5xl font-bold"><span className="text-accent">Posts</span></h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Thoughts on web development, performance optimization, and building great software.
          </p>
        </div>

        {/* Posts List */}
        <div className="space-y-8">
          {POSTS.map((post) => (
            <Link key={post.id} href={`/posts/${post.slug}`}>
              <article className="group cursor-pointer border border-border rounded-lg p-6 hover:bg-muted transition-colors">
                <div className="space-y-3">
                  {/* Meta */}
                  <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                    <span>•</span>
                    <span>{post.readingTime} min read</span>
                  </div>

                  {/* Title */}
                  <div className="flex items-start justify-between gap-4">
                    <h2 className="text-xl font-semibold group-hover:opacity-60 transition-opacity">
                      {post.title}
                    </h2>
                    <ArrowRight className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                  </div>

                  {/* Excerpt */}
                  <p className="text-muted-foreground text-sm">{post.excerpt}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

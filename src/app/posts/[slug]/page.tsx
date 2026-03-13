import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface BlogPost {
    title: string;
    slug: string;
    date: string;
    readingTime: number;
    tags: string[];
    content: string;
    excerpt: string;
}

// Sample blog posts - In a real app, this would come from a database or CMS
const BLOG_POSTS: Record<string, BlogPost> = {
    'type-safe-api': {
        title: 'Building a Type-Safe API with TypeScript and Zod',
        slug: 'type-safe-api',
        date: '2024-03-10',
        readingTime: 12,
        tags: ['TypeScript', 'API Design', 'Validation'],
        excerpt:
            'Learn how to build a robust, type-safe API using TypeScript and Zod for runtime validation.',
        content: `# Building a Type-Safe API with TypeScript and Zod

In modern web development, type safety isn't just about catching errors at compile time—it's about building systems that are maintainable, self-documenting, and resilient to runtime errors.

## The Problem

Without proper validation, your API becomes a black box. Users can send any data, and your server has to handle it gracefully. This often leads to:

- Runtime errors that crash your application
- Security vulnerabilities from unexpected input
- Difficult-to-maintain error handling logic
- Poor developer experience for API consumers

## The Solution: TypeScript + Zod

TypeScript gives us compile-time type safety, but it doesn't validate at runtime. That's where Zod comes in.

### Setting Up Zod Schemas

\`\`\`typescript
import { z } from 'zod';

const UserSchema = z.object({
  id: z.string().uuid(),
  email: z.string().email(),
  name: z.string().min(1),
  age: z.number().int().min(0).max(150),
  role: z.enum(['user', 'admin', 'moderator']),
});

type User = z.infer<typeof UserSchema>;
\`\`\`

This creates a schema that TypeScript understands, and we can automatically infer the type from it.

### Building Type-Safe Endpoints

\`\`\`typescript
import { z } from 'zod';

const createUserSchema = z.object({
  email: z.string().email(),
  name: z.string().min(1),
});

type CreateUserRequest = z.infer<typeof createUserSchema>;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = createUserSchema.parse(body);
    
    // TypeScript knows validatedData is { email: string; name: string }
    const user = await db.user.create(validatedData);
    
    return Response.json(user);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return Response.json({ errors: error.errors }, { status: 400 });
    }
    throw error;
  }
}
\`\`\`

## Key Benefits

1. **Compile-time type safety** - TypeScript catches errors early
2. **Runtime validation** - Zod ensures data matches your schema
3. **Self-documenting APIs** - Schemas serve as documentation
4. **Error messages** - Clear, actionable validation errors
5. **Type inference** - No need to manually type request/response bodies

## Best Practices

- Create a \`schemas.ts\` file to centralize all validation schemas
- Use discriminated unions for complex request types
- Extend base schemas instead of duplicating logic
- Test your schemas with edge cases

## Conclusion

Combining TypeScript and Zod gives you the best of both worlds: type safety at development time and runtime validation in production. Your future self (and your team) will thank you.`,
    },
    'web-performance-guide': {
        title: 'Mastering Web Performance: A Comprehensive Guide',
        slug: 'web-performance-guide',
        date: '2024-02-28',
        readingTime: 18,
        tags: ['Performance', 'Web Vitals', 'Optimization'],
        excerpt:
            'A deep dive into web performance optimization covering Core Web Vitals and practical strategies.',
        content: `# Mastering Web Performance: A Comprehensive Guide

Performance is not a luxury—it's a necessity. Slow websites lose users, revenue, and search rankings. Let's explore how to build fast web applications.

## Understanding Core Web Vitals

Google's Core Web Vitals measure user experience across three dimensions:

### 1. Largest Contentful Paint (LCP)
Measures when the largest content element becomes visible. Target: **< 2.5s**

### 2. First Input Delay (FID) / Interaction to Next Paint (INP)
Measures responsiveness to user interactions. Target: **< 100ms** (INP: < 200ms)

### 3. Cumulative Layout Shift (CLS)
Measures visual stability. Target: **< 0.1**

## Optimization Strategies

### Image Optimization
- Use modern formats (WebP, AVIF)
- Implement lazy loading
- Responsive images with srcset
- Compress ruthlessly

### Code Splitting
- Split your bundles by route
- Load code on demand
- Tree-shake dead code

### Server-Side Rendering
- Render on the server for faster initial load
- Reduce time to first byte (TTFB)

## Tools & Measurement

- Lighthouse for local testing
- WebPageTest for detailed analysis
- Chrome DevTools for debugging
- Web Vitals library for real user monitoring

## Conclusion

Performance optimization is an ongoing process. Monitor your metrics, identify bottlenecks, and iterate. Your users will be faster, happier, and your business will see the benefits.`,
    },
    'react-server-components': {
        title: 'React Server Components: The Future of React',
        slug: 'react-server-components',
        date: '2024-02-15',
        readingTime: 14,
        tags: ['React', 'Next.js', 'Server Components'],
        excerpt:
            'Understanding React Server Components and their impact on application performance and DX.',
        content: `# React Server Components: The Future of React

React Server Components (RSCs) represent a paradigm shift in how we build React applications. Let's explore what they are and why they matter.

## What Are React Server Components?

Server Components are React components that run exclusively on the server. They can:
- Access databases and internal APIs directly
- Keep sensitive information server-side
- Reduce the JavaScript sent to the client
- Improve performance and user experience

## Key Differences

### Server Components
- Run on server only
- No hooks (except use async)
- Direct database access
- Zero JavaScript to client

### Client Components
- Traditional React components
- Full hook support
- Run in the browser
- JavaScript sent to client

## Practical Example

\`\`\`typescript
// app/posts/page.tsx - Server Component by default
export default async function PostsPage() {
  // Direct database access - no API needed!
  const posts = await db.post.findMany({
    orderBy: { date: 'desc' }
  });

  return (
    <div>
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
\`\`\`

## Benefits

1. **Reduced JavaScript** - Faster page loads
2. **Security** - Sensitive data never reaches client
3. **Direct Database Access** - No API intermediary needed
4. **Better Performance** - Streaming support for progressive rendering
5. **Simpler State Management** - Server handles data fetching

## The Future

Server Components are still evolving, but they're clearly the direction React is heading. Next.js 13+ has excellent support, and the ecosystem is rapidly adapting.`,
    },
};

function formatDate(dateString: string) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = BLOG_POSTS[params.slug];

    if (!post) {
        return (
            <div className="min-h-screen py-20 px-4">
                <div className="max-w-3xl mx-auto">
                    <Link href="/posts" scroll={true} className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:opacity-70 transition-opacity mb-8">
                        <ArrowLeft className="w-4 h-4" />
                        Back to posts
                    </Link>
                    <div className="text-center py-20">
                        <h1 className="text-2xl font-bold">Post not found</h1>
                        <p className="text-muted-foreground mt-2">The post you&apos;re looking for doesn&apos;t exist.</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <article className="min-h-screen py-12 sm:py-20 px-4">
            <div className="max-w-3xl mx-auto space-y-8">
                {/* Back Link */}
                <Link href="/posts" scroll={true} className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:opacity-70 transition-opacity">
                    <ArrowLeft className="w-4 h-4" />
                    Back to posts
                </Link>

                {/* Header */}
                <div className="space-y-4 border-b border-border pb-8">
                    <h1 className="text-4xl sm:text-5xl font-bold leading-tight">{post.title}</h1>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground pt-4 flex-wrap">
                        <time dateTime={post.date}>{formatDate(post.date)}</time>
                        <span>•</span>
                        <span>{post.readingTime} min read</span>
                        <span>•</span>
                        <div className="flex gap-2">
                            {post.tags.map((tag) => (
                                <span key={tag} className="px-2 py-1 bg-muted rounded text-xs">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Article Content */}
                <div className="prose prose-sm dark:prose-invert max-w-none">
                    <div className="space-y-6">
                        {post.content.split('\n\n').map((paragraph, index) => {
                            // Handle headings
                            if (paragraph.startsWith('#')) {
                                const level = paragraph.match(/^#+/)?.[0].length || 1;
                                const text = paragraph.replace(/^#+\s/, '');
                                const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
                                const headingClasses = {
                                    1: 'text-3xl font-bold mt-8 mb-4',
                                    2: 'text-2xl font-bold mt-6 mb-3',
                                    3: 'text-xl font-bold mt-4 mb-2',
                                };
                                return (
                                    <HeadingTag key={index} className={headingClasses[level as keyof typeof headingClasses]}>
                                        {text}
                                    </HeadingTag>
                                );
                            }

                            // Handle code blocks
                            if (paragraph.startsWith('```')) {
                                const parts = paragraph.split('```');
                                const code = parts[1];
                                return (
                                    <div key={index} className="bg-muted border border-border rounded-lg overflow-hidden my-6">
                                        <pre className="p-4 overflow-x-auto">
                                            <code className="text-sm font-mono">{code}</code>
                                        </pre>
                                    </div>
                                );
                            }

                            // Handle lists
                            if (paragraph.trim().startsWith('-')) {
                                const items = paragraph.split('\n').filter((line) => line.trim().startsWith('-'));
                                return (
                                    <ul key={index} className="list-disc list-inside space-y-2 text-muted-foreground">
                                        {items.map((item, i) => (
                                            <li key={i}>{item.replace(/^-\s/, '')}</li>
                                        ))}
                                    </ul>
                                );
                            }

                            return (
                                <p key={index} className="text-muted-foreground leading-relaxed">
                                    {paragraph}
                                </p>
                            );
                        })}
                    </div>
                </div>

                {/* Back to posts */}
                <div className="border-t border-border pt-8">
                    <Link href="/posts" scroll={true} className="inline-flex items-center gap-2 font-medium hover:opacity-60 transition-opacity">
                        ← Back to all posts
                    </Link>
                </div>
            </div>
        </article>
    );
}

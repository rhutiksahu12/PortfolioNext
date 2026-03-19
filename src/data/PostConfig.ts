import { Post } from "../types/PostTypes";

export const POSTS: Post[] = [
    {
        slug: 'type-safe-api-typescript-zod',
        title: 'Building a Type-Safe API with TypeScript and Zod',
        date: '2024-03-10',
        readTime: 12,
        tags: ['TypeScript', 'API Design', 'Validation'],
        blocks: [
            {
                type: 'text',
                content:
                    'In modern web development, type safety isn\'t just about catching errors at compile time — it\'s about building systems that are maintainable, self-documenting, and resilient to runtime errors.',
            },
            {
                type: 'heading',
                level: 2,
                content: 'The Problem',
            },
            {
                type: 'text',
                content:
                    'Without proper validation, your API becomes a black box. Users can send any data, and your server has to handle it gracefully. This often leads to:',
            },
            {
                type: 'list',
                ordered: false,
                items: [
                    'Runtime errors that crash your application',
                    'Security vulnerabilities from unexpected input',
                    'Difficult-to-maintain error handling logic',
                    'Poor developer experience for API consumers',
                ],
            },
            {
                type: 'heading',
                level: 2,
                content: 'The Solution: TypeScript + Zod',
            },
            {
                type: 'text',
                content:
                    'TypeScript gives us compile-time type safety, but it doesn\'t validate at runtime. That\'s where Zod comes in.',
            },
            {
                type: 'heading',
                level: 3,
                content: 'Setting Up Zod Schemas',
            },
            {
                type: 'code',
                filename: 'schema.ts',
                language: 'typescript',
                content: `import { z } from 'zod';

const UserSchema = z.object({
  id: z.string().uuid(),
  email: z.string().email(),
  name: z.string().min(1),
  age: z.number().int().min(0).max(150),
  role: z.enum(['user', 'admin', 'moderator']),
});

type User = z.infer<typeof UserSchema>;`,
            },
            {
                type: 'text',
                content:
                    'This creates a schema that TypeScript understands, and we can automatically infer the type from it.',
            },
            {
                type: 'heading',
                level: 3,
                content: 'Building Type-Safe Endpoints',
            },
            {
                type: 'code',
                filename: 'route.ts',
                language: 'typescript',
                content: `import { z } from 'zod';

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
}`,
            },
            {
                type: 'heading',
                level: 2,
                content: 'Key Benefits',
            },
            {
                type: 'list',
                ordered: true,
                items: [
                    'Compile-time type safety — TypeScript catches errors early',
                    'Runtime validation — Zod ensures data matches your schema',
                    'Self-documenting APIs — schemas serve as documentation',
                    'Error messages — clear, actionable validation errors',
                    'Type inference — no need to manually type request/response bodies',
                ],
            },
            {
                type: 'heading',
                level: 2,
                content: 'Best Practices',
            },
            {
                type: 'list',
                ordered: false,
                items: [
                    'Create a schemas.ts file to centralise all validation schemas',
                    'Use discriminated unions for complex request types',
                    'Extend base schemas instead of duplicating logic',
                    'Test your schemas with edge cases',
                ],
            },
            {
                type: 'heading',
                level: 2,
                content: 'Conclusion',
            },
            {
                type: 'text',
                content:
                    'Combining TypeScript and Zod gives you the best of both worlds: type safety at development time and runtime validation in production. Your future self (and your team) will thank you.',
            },
        ],
    },

    {
        slug: 'react-server-components',
        title: 'React Server Components: The Future of React',
        date: '2024-02-15',
        readTime: 14,
        tags: ['React', 'Next.js', 'Server Components'],
        blocks: [
            {
                type: 'text',
                content:
                    'React Server Components (RSCs) represent a paradigm shift in how we build React applications. Let\'s explore what they are and why they matter.',
            },
            {
                type: 'heading',
                level: 2,
                content: 'What Are React Server Components?',
            },
            {
                type: 'text',
                content: 'Server Components are React components that run exclusively on the server. They can:',
            },
            {
                type: 'list',
                ordered: false,
                items: [
                    'Access databases and internal APIs directly',
                    'Keep sensitive information server-side',
                    'Reduce the JavaScript sent to the client',
                    'Improve performance and user experience',
                ],
            },
            {
                type: 'heading',
                level: 2,
                content: 'Key Differences',
            },
            {
                type: 'table',
                headers: ['', 'Server Components', 'Client Components'],
                rows: [
                    ['Runs on', 'Server only', 'Browser'],
                    ['Hooks', 'No (except use/async)', 'Full support'],
                    ['Database access', 'Direct', 'Via API'],
                    ['JS to client', 'Zero', 'Bundled & sent'],
                ],
            },
            {
                type: 'heading',
                level: 2,
                content: 'Practical Example',
            },
            {
                type: 'code',
                filename: 'app/posts/page.tsx',
                language: 'typescript',
                content: `// Server Component by default
export default async function PostsPage() {
  // Direct database access — no API needed!
  const posts = await db.post.findMany({
    orderBy: { date: 'desc' },
  });

  return (
    <div>
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}`,
            },
            {
                type: 'heading',
                level: 2,
                content: 'Benefits',
            },
            {
                type: 'list',
                ordered: true,
                items: [
                    'Reduced JavaScript — faster page loads',
                    'Security — sensitive data never reaches the client',
                    'Direct database access — no API intermediary needed',
                    'Better performance — streaming support for progressive rendering',
                    'Simpler state management — server handles data fetching',
                ],
            },
            {
                type: 'heading',
                level: 2,
                content: 'The Future',
            },
            {
                type: 'text',
                content:
                    'Server Components are still evolving, but they\'re clearly the direction React is heading. Next.js 13+ has excellent support, and the ecosystem is rapidly adapting.',
            },
        ],
    },
]
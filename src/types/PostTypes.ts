// ─── Post Content Block Types ─────────────────────────────────────────────────

export type PostBlock =
    | { type: 'text'; content: string }
    | { type: 'code'; filename?: string; language?: string; content: string }
    | { type: 'list'; ordered?: boolean; items: string[] }
    | { type: 'heading'; level: 2 | 3; content: string }
    | { type: 'table'; headers: string[]; rows: string[][] }

// ─── Post ─────────────────────────────────────────────────────────────────────

export interface Post {
    slug: string
    title: string
    date: string          // ISO string e.g. '2024-03-10'
    readTime: number      // minutes
    tags: string[]
    blocks: PostBlock[]
    github?: string
    medium?: string
}
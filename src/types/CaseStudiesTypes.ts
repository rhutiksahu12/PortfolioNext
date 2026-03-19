// ─── Content Block Types ──────────────────────────────────────────────────────

export type ContentBlock =
    | { type: 'text'; content: string }
    | { type: 'code'; filename?: string; language?: string; content: string }
    | { type: 'list'; ordered?: boolean; items: string[] }
    | { type: 'diagram'; title?: string; steps: DiagramStep[] }
    | { type: 'metrics'; items: Metric[] }
    | { type: 'callout'; variant?: 'info' | 'warning' | 'success'; content: string }

export interface DiagramStep {
    label: string
    sublabel?: string
}

export interface Metric {
    label: string
    value: string
    delta?: string          // e.g. "↓ 40%"
}

// ─── Section ──────────────────────────────────────────────────────────────────

export interface CaseStudySection {
    heading: string
    blocks: ContentBlock[]
}

// ─── Case Study ───────────────────────────────────────────────────────────────

export interface CaseStudy {
    title: string
    description: string
    year: number
    tags: string[]
    techStack: string[]
    sections: CaseStudySection[]    
    github?: string
    article?: string}

export type CaseStudyMap = Record<string, CaseStudy>
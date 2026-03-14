import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface CaseStudy {
    title: string;
    description: string;
    year: number;
    tags: string[];
    challenge: string;
    solution: string;
    outcome: string;
    learnings: string[];
    techStack: string[];
}

// Sample case study data - In a real app, this would come from a database
const CASE_STUDIES: Record<string, CaseStudy> = {
    'design-system-overhaul': {
        title: 'Design System Overhaul',
        description: 'Rebuilding our component library for scale and accessibility',
        year: 2024,
        tags: ['React', 'TypeScript', 'Storybook', 'CSS-in-JS'],
        challenge:
            'Our existing component library had grown organically over 3+ years with inconsistent patterns, poor documentation, and accessibility issues. This made it difficult for new team members to contribute and led to duplicated logic across projects.',
        solution:
            'I led a complete redesign following atomic design principles, migrated all components to TypeScript with proper prop interfaces, and implemented Storybook with comprehensive documentation and visual testing.',
        outcome:
            'Reduced component library bundle size by 40%, improved DX with autocomplete and type safety, onboarded 5 new engineers with 50% faster ramp-up time, and caught 200+ accessibility issues before production.',
        learnings: [
            'Component design requires deep understanding of all use cases across the organization',
            'Documentation and examples are just as important as the code itself',
            'Incremental migration strategies are crucial for large refactors',
            'Strong TypeScript types can prevent entire categories of bugs',
        ],
        techStack: ['React', 'TypeScript', 'Storybook', 'Chromatic', 'Testing Library', 'Tailwind CSS'],
    },
    'analytics-dashboard': {
        title: 'Real-time Analytics Dashboard',
        description: 'Building a scalable real-time data visualization platform',
        year: 2024,
        tags: ['Next.js', 'WebSockets', 'D3.js', 'Performance'],
        challenge:
            'The existing analytics dashboard was unable to handle real-time data updates at scale. Page load time was over 5 seconds, and it couldn\'t effectively display more than a few metrics simultaneously.',
        solution:
            'Built a new architecture using Next.js for server-side rendering, WebSockets for real-time updates, and D3.js for advanced visualizations. Implemented infinite scrolling, virtual scrolling, and request batching to optimize performance.',
        outcome:
            'Page load time reduced from 5s to 800ms, able to handle 10,000+ concurrent connections, supports unlimited metrics visualization, and real-time updates now feel instant (<50ms latency).',
        learnings: [
            'WebSocket connection management at scale requires careful resource pooling',
            'D3 performance is critical - proper data binding and transition management is essential',
            'Virtual scrolling is a game-changer for large data lists',
            'Strategic use of server-side rendering can dramatically improve initial load performance',
        ],
        techStack: ['Next.js', 'TypeScript', 'WebSockets', 'D3.js', 'React', 'TailwindCSS', 'Redis'],
    },
    'ecommerce-optimization': {
        title: 'E-commerce Optimization',
        description: 'Performance and conversion optimization for a multi-million dollar platform',
        year: 2023,
        tags: ['Performance', 'Next.js', 'Analytics', 'UX'],
        challenge:
            'The e-commerce platform had high bounce rates and low conversion rates. Core Web Vitals were poor, particularly LCP (4.2s) and CLS. Users were abandoning carts due to slow load times.',
        solution:
            'Implemented comprehensive optimization strategy: image optimization with modern formats, lazy loading, code splitting, edge caching, and database query optimization. Redesigned checkout flow to reduce friction.',
        outcome:
            'Conversion rate increased 35%, Core Web Vitals all green, page load time reduced from 4.2s to 1.2s, revenue increase of $2.3M annually estimated.',
        learnings: [
            'Performance directly impacts business metrics - optimize intentionally',
            'Image optimization is often the biggest quick win',
            'User behavior data is critical for identifying bottlenecks',
            'Incremental improvements compound quickly',
        ],
        techStack: ['Next.js', 'TypeScript', 'Vercel', 'Lighthouse', 'WebP', 'React', 'PostgreSQL'],
    },
};

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
    const caseStudy = CASE_STUDIES[params.slug];

    if (!caseStudy) {
        return (
            <div className="min-h-screen py-20 px-4">
                <div className="max-w-4xl mx-auto">
                    <Link href="/projects" scroll={true} className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-60 transition-opacity mb-8">
                        <ArrowLeft className="w-4 h-4" />
                        Back to projects
                    </Link>
                    <div className="text-center py-20">
                        <h1 className="text-2xl font-bold">Project not found</h1>
                        <p className="text-muted-foreground mt-2">The project you&apos;re looking for doesn&apos;t exist.</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <article className="min-h-screen py-12 sm:py-20 px-4">
            <div className="max-w-3xl mx-auto space-y-8">
                {/* Back Link */}
                <Link href="/projects" scroll={true} className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:opacity-70 transition-opacity mb-8">
                    <ArrowLeft className="w-4 h-4" />
                    Back to projects
                </Link>

                {/* Header */}
                <div className="space-y-4 border-b border-border pb-8">
                    <div className="space-y-2">
                        <h1 className="text-4xl sm:text-5xl font-bold">{caseStudy.title}</h1>
                        <p className="text-lg text-muted-foreground">{caseStudy.description}</p>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground pt-4">
                        <span>{caseStudy.year}</span>
                        <span>•</span>
                        <div className="flex gap-2">
                            {caseStudy.tags.map((tag) => (
                                <span key={tag} className="px-2 py-1 bg-muted rounded text-xs">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="space-y-12">
                    {/* Challenge Section */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-accent">Challenge</h2>
                        <p className="text-lg leading-relaxed text-muted-foreground">{caseStudy.challenge}</p>
                    </section>

                    {/* Code Example */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-accent">Implementation</h2>
                        <div className="rounded-lg overflow-hidden border border-border shadow-lg" style={{ backgroundColor: '#1e1e1e' }}>
                            <div className="bg-gradient-to-r from-slate-900 to-slate-800 px-4 py-3 border-b border-slate-700 flex items-center justify-between">
                                <span className="text-xs font-mono text-slate-400">example.ts</span>
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                </div>
                            </div>
                            <pre className="p-6 overflow-x-auto">
                                <code className="text-sm font-mono leading-relaxed" style={{ color: '#d4d4d4' }}>{`${`// Example component implementation`}
${`import React from 'react';`}

${`interface ComponentProps {`}
${`  title: string;`}
${`  data: Array<{`}
${`    id: string;`}
${`    value: number;`}
${`  }>;`}
${`  onUpdate?: (id: string) => void;`}
${`}`}

${`export function OptimizedComponent({`}
${`  title,`}
${`  data,`}
${`  onUpdate,`}
${`}: ComponentProps) {`}
${`  // Virtual scrolling for large datasets`}
${`  // WebSocket integration for real-time updates`}
${`  // Memoization to prevent unnecessary re-renders`}
${`  `}
${`  return (`}
${`    <div>`}
${`      {/* Component markup */}`}
${`    </div>`}
${`  );`}
${`}`}

${`export default OptimizedComponent;`}`}</code>
                            </pre>
                        </div>
                    </section>

                    {/* Solution Section */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-accent">Solution</h2>
                        <p className="text-lg leading-relaxed text-muted-foreground">{caseStudy.solution}</p>
                    </section>

                    {/* Outcome Section */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-accent">Outcome</h2>
                        <p className="text-lg leading-relaxed text-muted-foreground">{caseStudy.outcome}</p>
                    </section>

                    {/* Key Learnings */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-accent">Key Learnings</h2>
                        <ul className="space-y-3">
                            {caseStudy.learnings.map((learning, index) => (
                                <li key={index} className="flex gap-4">
                                    <span className="text-foreground font-semibold flex-shrink-0">{String(index + 1)}.</span>
                                    <span className="text-muted-foreground text-lg">{learning}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Tech Stack */}
                    <section className="space-y-4 border-t border-border pt-8">
                        <h2 className="text-2xl font-bold text-accent">Tech Stack</h2>
                        <div className="flex flex-wrap gap-2">
                            {caseStudy.techStack.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-3 py-2 bg-muted text-muted-foreground rounded text-sm font-medium"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Next Project Navigation */}
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
    );
}

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface Project {
    id: string;
    title: string;
    description: string;
    slug: string;
    year: number;
    tags: string[];
}

const PROJECTS: Project[] = [
    {
        id: '1',
        title: 'Smart Locker Delivery System',
        description: 'Last-mile delivery backend with size-based locker allocation, OTP pickup verification, and a locker state machine to eliminate failed deliveries.',
        slug: 'smart-locker-delivery',
        year: 2024,
        tags: ['Backend', 'Node.js', 'PostgreSQL', 'System Design'],
    },
    {
        id: '2',
        title: 'C2C Used Goods Marketplace',
        description: 'Broker-free resale platform with verified seller onboarding, automated dealer detection heuristics, and a local-first launch strategy.',
        slug: 'c2c-marketplace',
        year: 2024,
        tags: ['Product Design', 'Node.js', 'PostgreSQL', 'Fraud Detection'],
    },
    {
        id: '3',
        title: 'HireFront - Job Platform',
        description: 'Structured hiring pipeline platform linking companies, jobs, candidates, and pipeline stages — built as a workflow system, not a job board.',
        slug: 'hirefront',
        year: 2024,
        tags: ['Full-Stack', 'React', 'Node.js', 'PostgreSQL'],
    },
    {
        id: '4',
        title: 'Quick Commerce Inventory & Picking',
        description: 'Warehouse fulfillment system with deterministic shelf location modelling, barcode-verified picking, and multi-order simultaneous fulfillment.',
        slug: 'warehouse-picking',
        year: 2024,
        tags: ['Backend', 'Node.js', 'PostgreSQL', 'Hardware Integration'],
    },
];

export default function ProjectsPage() {
    const projectsByYear = PROJECTS.reduce((acc, project) => {
        const year = project.year;
        if (!acc[year]) acc[year] = [];
        acc[year].push(project);
        return acc;
    }, {} as Record<number, Project[]>);

    const sortedYears = Object.keys(projectsByYear)
        .map(Number)
        .sort((a, b) => b - a);

    return (
        <div className="min-h-screen py-20 sm:py-32 px-4">
            <div className="max-w-4xl mx-auto space-y-12">

                {/* Header */}
                <div className="space-y-4 border-b border-border pb-8">
                    <h1 className="text-4xl sm:text-5xl font-bold">
                        <span className="text-accent">Projects</span>
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl">
                        A collection of projects I&apos;ve worked on, showcasing various technologies and approaches to solving problems.
                    </p>
                </div>

                {/* Projects by year */}
                <div className="space-y-12">
                    {sortedYears.map((year) => (
                        <div key={year} className="space-y-6">
                            <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                                {year}
                            </h2>

                            <div className="space-y-4">
                                {projectsByYear[year].map((project) => (
                                    <Link key={project.id} href={`/projects/${project.slug}`}>
                                        <div className="group cursor-pointer border border-border rounded-lg p-6 hover:bg-muted transition-colors">
                                            <div className="flex items-start justify-between gap-4">
                                                <div className="flex-1 space-y-2">
                                                    <h3 className="text-lg font-semibold group-hover:opacity-60 transition-opacity">
                                                        {project.title}
                                                    </h3>
                                                    <p className="text-sm text-muted-foreground">{project.description}</p>
                                                    <div className="flex flex-wrap gap-2 pt-2">
                                                        {project.tags.map((tag) => (
                                                            <span
                                                                key={tag}
                                                                className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded"
                                                            >
                                                                {tag}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                                <ArrowRight className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-1" />
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface Project {
    id: string;
    title: string;
    description: string;
    slug: string;
    year: number;
    tags: string[];
    featured?: boolean;
}

const PROJECTS: Project[] = [
    {
        id: '1',
        title: 'Design System Overhaul',
        description: 'Rebuilt our component library with improved accessibility and performance. Reduced bundle size by 40% while improving DX.',
        slug: 'design-system-overhaul',
        year: 2024,
        tags: ['React', 'TypeScript', 'Storybook'],
        featured: true,
    },
    {
        id: '2',
        title: 'Real-time Analytics Dashboard',
        description: 'Built a real-time data visualization dashboard handling thousands of updates per second with minimal latency.',
        slug: 'analytics-dashboard',
        year: 2024,
        tags: ['Next.js', 'WebSockets', 'D3.js'],
        featured: true,
    },
    {
        id: '3',
        title: 'E-commerce Optimization',
        description: 'Improved site performance increasing conversion by 35%. Implemented Core Web Vitals optimizations and dynamic loading.',
        slug: 'ecommerce-optimization',
        year: 2023,
        tags: ['Performance', 'Next.js', 'Analytics'],
        featured: true,
    },
    {
        id: '4',
        title: 'Mobile App Redesign',
        description: 'Complete redesign and rebuild of mobile app using React Native, improving performance and user retention.',
        slug: 'mobile-redesign',
        year: 2023,
        tags: ['React Native', 'Mobile', 'UI/UX'],
    },
    {
        id: '5',
        title: 'API Rate Limiter Service',
        description: 'Built a distributed rate limiting service handling millions of requests with <1ms latency.',
        slug: 'rate-limiter',
        year: 2023,
        tags: ['Backend', 'Performance', 'Redis'],
    },
];

export default function ProjectsPage() {
    const projectsByYear = PROJECTS.reduce((acc, project) => {
        const year = project.year;
        if (!acc[year]) {
            acc[year] = [];
        }
        acc[year].push(project);
        return acc;
    }, {} as Record<number, Project[]>);

    const sortedYears = Object.keys(projectsByYear)
        .map(Number)
        .sort((a, b) => b - a);

    return (
        <div className="min-h-screen py-20 sm:py-32 px-4">
            <div className="max-w-4xl mx-auto space-y-16">
                {/* Header */}
                <div className="space-y-4 border-b border-border pb-8">
                    <h1 className="text-4xl sm:text-5xl font-bold"><span className="text-accent">Projects</span></h1>
                    <p className="text-lg text-muted-foreground max-w-2xl">
                        A collection of projects I&apos;ve worked on, showcasing various technologies and approaches to solving problems.
                    </p>
                </div>

                {/* Projects by Year */}
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
                                                <ArrowRight className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
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

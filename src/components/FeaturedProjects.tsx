import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';


const projects = [
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
        title: 'HireFront - Job Platform',
        description: 'Structured hiring pipeline platform linking companies, jobs, candidates, and pipeline stages — built as a workflow system, not a job board.',
        slug: 'hirefront',
        year: 2024,
        tags: ['Full-Stack', 'React', 'Node.js', 'PostgreSQL'],
    },
    {
        id: '3',
        title: 'Quick Commerce Inventory & Picking',
        description: 'Warehouse fulfillment system with deterministic shelf location modelling, barcode-verified picking, and multi-order simultaneous fulfillment.',
        slug: 'warehouse-picking',
        year: 2024,
        tags: ['Backend', 'Node.js', 'PostgreSQL', 'Hardware Integration'],
    },
]


const FeaturedProjects = () => {


    return (
        <section className="py-20 sm:py-32 px-4 border-b border-border">
            <div className="max-w-4xl mx-auto space-y-12">
                <div className="space-y-2">
                    <h2 className="text-3xl sm:text-4xl font-bold">Featured <span className="text-accent">Projects</span></h2>
                    <p className="text-muted-foreground">Recent work and case studies</p>
                </div>

                <div className="space-y-8">
                    {projects.map((project) => (
                        <Link key={project.id} href={`/projects/${project.slug}`}>
                            <div className="group cursor-pointer border border-border rounded-lg p-6 hover:bg-muted transition-colors">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex-1 space-y-3">
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-xl font-semibold group-hover:opacity-60 transition-opacity">
                                                {project.title}
                                            </h3>
                                            <ArrowRight className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </div>
                                        <p className="text-muted-foreground text-sm">{project.description}</p>
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
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="pt-4">
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:opacity-70 transition-opacity"
                    >
                        View all projects <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProjects;

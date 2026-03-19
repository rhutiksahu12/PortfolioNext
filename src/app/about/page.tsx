import { Download } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
    return (
        <div className="min-h-screen py-20 sm:py-32 px-4">
            <div className="max-w-3xl mx-auto space-y-12">
                {/* Header */}
                <div className="space-y-4 border-b border-border pb-8">
                    <h1 className="text-4xl flex items-center gap-3 sm:text-5xl font-bold">About <a href="https://docs.google.com/document/d/1F3wkYPnwAcv0ZcCTgnhWqJ2RA6xF17IFNgRGjJ9f85c/view" target="_blank" rel="noopener noreferrer" ><Download size={36}/></a></h1>
                </div>

                {/* Main Content */}
                <article className="prose prose-sm dark:prose-invert max-w-none">
                    <div className="space-y-8">
                        {/* Introduction */}
                        <section className="space-y-4">
                            <p className="text-lg leading-relaxed text-muted-foreground">
                                I&apos;m Rhutik Sahu, a frontend engineer passionate about building digital experiences that are
                                fast, accessible, and delightful to use. I&apos;ve spent the last 5+ years crafting software that
                                scales, performs, and makes people happy.
                            </p>
                        </section>

                        {/* Story */}
                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold">My Story</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                I stumbled into programming during college when I became obsessed with understanding how
                                websites worked. What started as curiosity turned into a career, and now I can&apos;t imagine doing
                                anything else.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                Over the years, I&apos;ve worked with startups and established companies, learning that great
                                software requires more than just technical skills—it requires empathy for users, clarity of
                                communication, and a relentless focus on quality.
                            </p>
                        </section>

                        {/* Experience */}
                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold">Experience</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                I&apos;ve lead frontend architecture at mid-stage startups, rebuilt critical systems at scale, and
                                mentored junior developers. My expertise spans modern frontend frameworks, performance
                                optimization, and building systems that grow with your business.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                Most recently, I worked on real-time analytics platforms, e-commerce optimizations, and
                                design system infrastructure. I&apos;m particularly passionate about performance engineering and
                                helping teams build better development practices.
                            </p>
                        </section>

                        {/* Values */}
                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold">What I Value</h2>
                            <ul className="space-y-3">
                                <li className="flex gap-4">
                                    <span className="font-semibold text-foreground shrink-0">Quality</span>
                                    <span className="text-muted-foreground">
                                        I write code that&apos;s maintainable, tested, and thoughtful. Shipping fast is great, but
                                        shipping well matters more.
                                    </span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="font-semibold text-foreground shrink-0">Clarity</span>
                                    <span className="text-muted-foreground">
                                        Clear communication and self-documenting code make the difference between a good team
                                        and a great one.
                                    </span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="font-semibold text-foreground shrink-0">Impact</span>
                                    <span className="text-muted-foreground">
                                        I care about building things that matter. Performance improvements, security fixes, and
                                        new features all matter when they serve real users.
                                    </span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="font-semibold text-foreground shrink-0">Learning</span>
                                    <span className="text-muted-foreground">
                                        The best developers never stop learning. I&apos;m constantly exploring new technologies,
                                        patterns, and ways of thinking about problems.
                                    </span>
                                </li>
                            </ul>
                        </section>

                        {/* Skills */}
                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold">Technical Skills</h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-semibold text-foreground mb-2">Frontend</h3>
                                    <p className="text-muted-foreground">
                                        React, TypeScript, Next.js, Vue.js, Tailwind CSS, REST APIs, GraphQL, state management
                                        (Redux, Zustand), testing (Vitest, React Testing Library)
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground mb-2">Backend</h3>
                                    <p className="text-muted-foreground">
                                        Node.js, Express, PostgreSQL, Prisma, REST API design, authentication, caching
                                        strategies
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground mb-2">DevOps & Tools</h3>
                                    <p className="text-muted-foreground">
                                        Git, Docker, AWS basics, monitoring & logging,
                                        performance profiling
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Interests */}
                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold">Beyond Code</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                When I&apos;m not coding, you&apos;ll find me reading about product strategy, exploring new technologies,
                                or contributing to open source. I&apos;m also a coffee enthusiast and occasional mountain biker.
                            </p>
                        </section>

                        {/* CTA */}
                        <section className="space-y-4 border-t border-border pt-8">
                            <p className="text-muted-foreground">
                                Interested in working together? Let&apos;s chat. I&apos;m always excited to discuss interesting projects,
                                mentor developers, or help with consulting.
                            </p>
                            <div className="flex gap-4">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center px-6 py-3 font-medium bg-accent text-accent-foreground hover:opacity-90 transition-opacity rounded-lg shadow-md"
                                >
                                    Get in Touch
                                </Link>
                                <a
                                    href="https://github.com/rhutiksahu12"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center px-6 py-3 font-medium border-2 border-accent text-accent hover:bg-accent/10 transition-colors rounded-lg"
                                >
                                    View GitHub
                                </a>
                            </div>
                        </section>
                    </div>
                </article>
            </div>
        </div>
    );
}

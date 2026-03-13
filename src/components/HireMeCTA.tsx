import React from 'react';
import Link from 'next/link';

const HireMeCTA = () => {
    return (
        <section className="py-20 sm:py-32 px-4 bg-accent text-accent-foreground">
            <div className="max-w-4xl mx-auto space-y-8">
                <div className="space-y-4">
                    <p className="text-sm font-medium opacity-95">available for work</p>
                    <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
                        Let&apos;s build something great together.
                    </h2>
                    <p className="text-lg opacity-80 max-w-2xl">
                        I&apos;m currently available for freelance projects and full-time opportunities.
                        Drop me a line if you&apos;d like to work together.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center px-8 py-4 font-medium bg-accent-foreground text-accent hover:opacity-90 transition-opacity rounded-lg shadow-md"
                    >
                        Contact Me
                    </Link>
                    <a
                        href="mailto:hello@rhutik.dev"
                        className="inline-flex items-center justify-center px-8 py-4 font-medium border-2 border-accent-foreground hover:bg-accent-foreground/10 transition-colors rounded-lg"
                    >
                        Email Me
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HireMeCTA;

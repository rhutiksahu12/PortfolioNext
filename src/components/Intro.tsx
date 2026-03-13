import React from 'react';
import Link from 'next/link';

const Intro = () => {
  return (
    <section className="py-20 sm:py-32 px-4 border-b border-border">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-6">
          {/* Eyebrow */}
          <p className="text-sm font-medium text-muted-foreground">Frontend Engineer</p>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Building performant, accessible digital experiences.
          </h1>

          {/* Subheading */}
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            I craft thoughtful web interfaces with a focus on user experience and clean code. Currently building at <span className="font-semibold text-foreground">Company</span>, previously at <span className="font-semibold text-foreground">StartUp</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-6 py-3 font-medium bg-accent text-accent-foreground hover:opacity-90 transition-opacity rounded-lg shadow-md hover:shadow-lg"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 font-medium border-2 border-accent text-accent hover:bg-accent/10 transition-colors rounded-lg"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
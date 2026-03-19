import Link from 'next/link'

export default function HomePage() {
  return (
    <section className="py-20 sm:py-32 px-4 border-b border-border">
      <div className="max-w-4xl mx-auto space-y-6">

        <p className="text-sm font-medium text-muted-foreground">
          Full Stack Engineer · Hyderabad
        </p>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
          Building systems that solve real problems.
        </h1>

        <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
          I design and build systems - from last-mile delivery infrastructure
          to marketplace trust layers. Focused on clean architecture, good product
          thinking, and shipping things that work.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 pt-6">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center px-6 py-3 font-medium bg-accent text-accent-foreground hover:opacity-90 transition-opacity rounded-lg"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 font-medium border border-border hover:bg-muted transition-colors rounded-lg"
          >
            Get in Touch
          </Link>
        </div>

      </div>
    </section>
  )
}
import React from 'react'
import Image from 'next/image'
import NextJs from '../../assets/Next.js.png'
import ReactJs from '../../assets/react.png'
import NodeJs from '../../assets/node.png'
import JS from '../../assets/js2.png'

const topSkills = [
    {
        label: "React",
        image: ReactJs,
    },
    {
        label: "Next.js",
        image: NextJs,
    },
    {
        label: "Node.js",
        image: NodeJs,
    },
    {
        label: "JavaScript",
        image: JS,
    },
]

const TopSkills = () => {
    return (
        <section className='py-8 px-4'>
            <div className='max-w-4xl mx-auto'>
                <div className='flex items-center justify-center gap-2 flex-wrap'>
                    <span className='text-sm font-medium text-muted-foreground'>Core Skills:</span>
                    {topSkills.map((skill) => (
                        <div
                            key={skill.label}
                            className='flex items-center gap-2 px-3 py-2 rounded-full border border-border bg-muted/40 hover:bg-muted/70 transition-all hover:border-accent/50'
                        >
                            <div className='relative w-5 h-5 shrink-0'>
                                <Image
                                    src={skill.image}
                                    alt={skill.label}
                                    fill
                                    className='object-contain'
                                />
                            </div>
                            <span className='text-xs font-medium text-foreground whitespace-nowrap'>
                                {skill.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TopSkills

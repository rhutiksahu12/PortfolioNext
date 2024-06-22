import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from 'next/image'
import NextJs from '../../assets/Next.js.png'
import ReactJs from '../../assets/react.png'
import NodeJs from '../../assets/node.png'
import Redux from '../../assets/redux.png'
import JS from '../../assets/js2.png'
import Html from '../../assets/html.png'
import Css from '../../assets/css.png'
import Docker from '../../assets/docker.png'

const skillsData = [
    // {
    //     label: "NextJS",
    //     image: NextJs,
    // },
    {
        label: "ReactJS",
        image: ReactJs
    },
    {
        label: "Redux",
        image: Redux,
    },
    {
        label: "NodeJS",
        image: NodeJs,
    },
    // {
    //     label: "NEXTJS",
    //     image: NextJs,
    // },
    {
        label: "Javascript",
        image: JS,
    },
    {
        label: "HTML",
        image: Html,
    },
    {
        label: "CSS",
        image: Css,
    },
    {
        label: "Docker",
        image: Docker
    }

]

const Skills = () => {
    return (
        <>
            <div className='flex flex-col w-full min-h-screen justify-center '>
                <h1 className='text-center mb-10 text-3xl font-bold text-white'>My Skills</h1>
                <div className='grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 gap-4 justify-items-center'>
                    {skillsData.map(skill => {
                        return (
                            <div className='col-span-1 w-3/4 md:w-full' key={skill.label}>
                                <Card className='shadow-xl bg-slate-700 bg-opacity-45 border-0'>
                                    <CardHeader className='p-2'>
                                        <CardTitle className='p-4 flex justify-center'>
                                            <Image src={skill.image} alt='NextJS' width={150} height={150} />
                                        </CardTitle>
                                        <CardDescription className='text-center text-white text-lg'>{skill.label}</CardDescription>
                                    </CardHeader>
                                </Card>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Skills
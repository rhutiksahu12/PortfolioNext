import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const Experience = () => {
    return (
        <>
            <div className='w-full text-center my-12'>
                <h1 className='text-3xl text-white font-semibold'>My Experience</h1>
            </div>
            <div className='min-h-screen w-full mb-10'>
                <div className='flex justify-center lg:justify-start gap-5 w-full mb-20'>
                    <div className='w-full lg:w-1/2'>
                        <Card className='shadow-xl bg-slate-700/30 bg-opacity-45 border-0'>
                            <CardHeader className='p-2'>
                                <CardTitle className='p-4 flex justify-center text-white'>
                                    Zithara Technologies
                                </CardTitle>
                                <CardDescription className='text-center text-slate-300/50 text-base'>
                                    Dec 2023 - March 2024
                                </CardDescription>
                                <CardContent className='text-white/70 text-sm'>
                                    <div className='space-y-4'>
                                        <li >
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, quam quod? Est esse voluptates quos nisi optio similique accusantium eum labore tenetur non quisquam numquam, voluptas laboriosam a voluptate cupiditate?
                                        </li>
                                        <li>
                                            Transform UI wireframes to actual code while ensuring responsive design implementation.
                                        </li>
                                        <li className=''>
                                            Operated within an Agile framework, engaging in weekly standup meetings, actively managing user stories and bugs on Github, and contributing to their enhancement.
                                        </li>
                                    </div>
                                </CardContent>
                            </CardHeader>
                        </Card>
                    </div>
                </div>
                <div className='flex justify-center lg:justify-end gap-5 w-full mb-20'>
                    <div className='w-full lg:w-1/2'>
                        <Card className='shadow-xl bg-slate-700/30 bg-opacity-45 border-0'>
                            <CardHeader className='p-2'>
                                <CardTitle className='p-4 flex justify-center text-white'>
                                    Zithara Technologies
                                </CardTitle>
                                <CardDescription className='text-center text-slate-300/50 text-base'>
                                    Dec 2023 - March 2024
                                </CardDescription>
                                <CardContent className='text-white/70 text-sm'>
                                    <div className='space-y-4'>
                                        <li >
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, quam quod? Est esse voluptates quos nisi optio similique accusantium eum labore tenetur non quisquam numquam, voluptas laboriosam a voluptate cupiditate?
                                        </li>
                                        <li>
                                            Transform UI wireframes to actual code while ensuring responsive design implementation.
                                        </li>
                                        <li className=''>
                                            Operated within an Agile framework, engaging in weekly standup meetings, actively managing user stories and bugs on Github, and contributing to their enhancement.
                                        </li>
                                    </div>
                                </CardContent>
                            </CardHeader>
                        </Card>
                    </div>
                </div>
                <div className='flex justify-center lg:justify-start gap-5 w-full mb-20'>
                    <div className='w-full lg:w-1/2'>
                        <Card className='shadow-xl bg-slate-700/30 bg-opacity-45 border-0'>
                            <CardHeader className='p-2'>
                                <CardTitle className='p-4 flex justify-center text-white'>
                                    Recharge 360
                                </CardTitle>
                                <CardDescription className='text-center text-slate-300/50 text-base'>
                                    September 2022 - March 2023
                                </CardDescription>
                                <CardContent className='text-white/70 text-sm'>
                                    <div className='space-y-4'>
                                        <li >
                                            Worked on a migration project in a collaborative effort with fellow team members to transition a multi-page experience into a single Page Application utilizing, ReactJS and TailwindCSS
                                        </li>
                                        <li>
                                            Transform UI wireframes to actual code while ensuring responsive design implementation.
                                        </li>
                                        <li className=''>
                                            Operated within an Agile framework, engaging in weekly standup meetings, actively managing user stories and bugs on Github, and contributing to their enhancement.
                                        </li>
                                    </div>
                                </CardContent>
                            </CardHeader>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Experience
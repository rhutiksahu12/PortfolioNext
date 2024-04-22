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
                        <div className='mx-auto lg:mr-5 float-right w-full border-r-4 border-b-8 border-slate-600 h-full'>
                            <h3 className='text-center text-white text-lg font-mono font-semibold'>Zithara Technologies</h3>
                            <h3 className='text-center text-sm text-white/70'>
                                Dec 2023 - March 2024
                            </h3>
                            <p className='p-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, quam quod? Est esse voluptates quos nisi optio similique accusantium eum labore tenetur non quisquam numquam, voluptas laboriosam a voluptate cupiditate?</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center lg:justify-end gap-5 w-full mb-20'>
                    <div className='w-full lg:w-1/2'>
                        <div className='mx-0 lg:ml-5 float-left w-full border-l-4 border-b-8 border-slate-600 h-full'>
                            <h3 className='text-center text-white text-lg font-mono font-semibold'>SynergyOS</h3>
                            <h3 className='text-center text-sm text-white/70'>
                                Dec 2023 - March 2024
                            </h3>
                            <div className='space-y-4 p-4 text-white/70'>
                                <li >
                                    Accountable for the creation of SynergyOS MVP for the organization using react, react Query, and tailwindcss
                                </li>
                                <li>
                                    Contributed valuable insights during the initial platform design phase prior to its development.
                                </li>
                                <li>
                                    Implemented user experience and enhancements in signup and login pages to optimize user journey and interaction.
                                </li>
                                <li>
                                    Streamlined registration process by implementing intuitive UI/UX elements using react Hooks Form, resulting in improved user onboarding
                                </li>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='flex justify-center lg:justify-start gap-5 w-full mb-20'>
                    <div className='w-full lg:w-1/2'>
                        {/* <div className='mr-5 float-right w-full border-r-4 border-b-8 border-slate-600 h-full'>
                            <h3 className='text-center text-white text-lg font-mono font-semibold'>Recharge 360</h3>
                            <h3 className='text-center text-sm text-white/70'>
                                Dec 2023 - March 2024
                            </h3>
                            <p className='p-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, aut saepe. Molestiae expedita sapiente quam illo minima id? Maxime repellendus ad aliquam consectetur id voluptas, veniam totam nemo obcaecati! Doloribus.</p>
                        </div> */}
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
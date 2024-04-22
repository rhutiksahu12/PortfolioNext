import React from 'react'


const Intro = () => {
    return (
        <>
            <div className='grid grid-cols-1 lg:grid-cols-2 justify-items-center w-full lg:w-3/4 md:w-full content-center h-screen'>
                <div className='col-span-1  text-cyan-600 font-mono'>
                    <p>Frontend Developer</p>
                    <h1 className='text-white text-7xl font-bold '>
                        I'm Rhutik Sahu
                    </h1>
                    <div className='flex gap-2 font-semibold'>
                        <button className='bg-cyan-600/70 hover:bg-cyan-900 shadow-md text-white px-3 py-2'>
                            More About Me
                        </button>
                        <button className='bg-white hover:bg-white/70 shadow-md text-cyan-600 px-3 py-2'>
                            Hire Me
                        </button>
                    </div>
                </div>
                <div className='col-span-1 flex items-center justify-center'>
                    <h1 className='text-white'>Photo</h1>
                </div>
            </div>
        </>
    )
}

export default Intro
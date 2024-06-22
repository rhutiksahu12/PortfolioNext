import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'

const NavBar = () => {
    return (
        <>
            {/* <MaxWidthWrapper> */}
            <nav className='flex fixed w-full justify-between bg-slate-700/20 text-slate-400 px-10 py-4 text-right text-lg font-medium z-10 '>
                <div>
                    logo
                </div>
                <ul className='flex gap-3'>
                    <li className='hover:text-green-300 cursor-pointer transition-colors ease-in-out ml-4'>
                        Who am I?
                    </li>
                    <li className='hover:text-green-300 cursor-pointer transition-colors ease-in-out ml-4'>
                        What I do?
                    </li>
                    <li className='hover:text-green-300 cursor-pointer transition-colors ease-in-out ml-4'>
                        What I did?
                    </li>
                    <li className='hover:text-green-300 cursor-pointer transition-colors ease-in-out ml-4'>
                        Talk to me
                    </li>
                </ul>
            </nav>
            {/* </MaxWidthWrapper> */}
        </>
    )
}

export default NavBar
import React, {useState} from 'react';
import {MenuIcon, XIcon} from '@heroicons/react/outline'
import { Link, animateScroll as scroll } from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const showNavBar = () => setNav(!nav)
    const handleClose =()=> setNav(!nav)
    return (
        <div className="w-screen h-[60px] z-10 bg-zinc-200 fixed drop-shadow-lg">
            <div className="px-2 flex justify-between items-center w-full h-full">
                <div className="flex items-center">
                    <h1 className="text-3xl font-bold mr-4 sm:text-4xl">
                        BRAND.
                    </h1>
                    <ul className="hidden md:flex">

                        <li className='cursor-pointer'><Link to="home" smooth={true} offset={50} duration={500} >Home</Link></li>
                        <li className='cursor-pointer'><Link to="about" smooth={true} offset={50} duration={500} >About</Link></li>
                        <li className='cursor-pointer'><Link to="support" smooth={true} offset={50} duration={500} >Support</Link></li>
                        <li className='cursor-pointer'><Link to="platform" smooth={true} offset={50} duration={500} >Platform</Link></li>
                        <li className='cursor-pointer'><Link to="pricing" smooth={true} offset={50} duration={500} >Pricing</Link></li>
                    </ul>
                </div>
                <div className="hidden md:flex pr-4">
                    <button className="bg-transparent text-black mr-4 px-7 py-3">Sign In</button>
                    <button className="px-7 py-3">Sign Up</button>
                </div>
                <div className="md:hidden" onClick={showNavBar}>
                    {!nav ? <MenuIcon className="w-7"/>: <XIcon className="w-7"/>}
                </div>
            </div>


            <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
                <li className="border-2 border-zinc-300 w-full cursor-pointer"><Link onClick={handleClose} to="home" smooth={true} offset={50} duration={500} >Home</Link></li>
                <li className="border-2 border-zinc-300 w-full cursor-pointer"><Link onClick={handleClose} to="about" smooth={true} offset={50} duration={500} >About</Link></li>
                <li className="border-2 border-zinc-300 w-full cursor-pointer"><Link onClick={handleClose} to="support" smooth={true} offset={50} duration={500} >Support</Link></li>
                <li className="border-2 border-zinc-300 w-full cursor-pointer"><Link onClick={handleClose} to="platform" smooth={true} offset={50} duration={500} >Platform</Link></li>
                <li className="border-2 border-zinc-300 w-full cursor-pointer"><Link onClick={handleClose} to="pricing" smooth={true} offset={50} duration={500} >Pricing</Link></li>

                <div className="flex flex-col my4">
                    <button className="mt-2 bg-transparent text-indigo-600 px-8 py-3 mb-4">Sign In</button>
                    <button className="px-8 py-3">Sign Up</button>
                </div>
            </ul>


        </div>
    )
}

export default Navbar
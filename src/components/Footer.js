import React from 'react'
import {
    FaFacebook,
    FaGithub,
    FaTwitter,
    FaTwitch,
    FaInstagram
} from "react-icons/fa";

export default function Footer() {
    return (
        <div className='w-full mt-24 bg-slate-900 text-gray-300 py-2 px-2'>
            <div className='max-w-[1240px]
             mx-auto grid grid-cols-2 md:grid-cols-6
             border-b-2 border-gray-600 py-8'>
                <div>
                    <h6 className='font-bold uppercase pt-2'>Solution</h6>
                    <ul>
                        <li className='py-1'>Marketing</li>
                        <li className='py-1'>Analytics</li>
                        <li className='py-1'>Commerce</li>
                        <li className='py-1'>Data</li>
                        <li className='py-1'>Cloud</li>
                    </ul>
                </div>

                <div>
                    <h6 className='font-bold uppercase pt-2'>Support</h6>
                    <ul>
                        <li className='py-1'>Pricing</li>
                        <li className='py-1'>Documentation</li>
                        <li className='py-1'>Commerce</li>
                        <li className='py-1'>Data</li>
                        <li className='py-1'>Social</li>
                    </ul>
                </div>

                <div>
                    <h6 className='font-bold uppercase pt-2'>Customer</h6>
                    <ul>
                        <li className='py-1'>Visitation</li>
                        <li className='py-1'>Analytics</li>
                        <li className='py-1'>API</li>
                        <li className='py-1'>Data</li>
                        <li className='py-1'>Cloud</li>
                    </ul>
                </div>

                <div>
                    <h6 className='font-bold uppercase pt-2'>Agent</h6>
                    <ul>
                        <li className='py-1'>Banking</li>
                        <li className='py-1'>Technology</li>
                        <li className='py-1'>Bookings</li>
                        <li className='py-1'>Works</li>
                        <li className='py-1'>Cloud</li>
                    </ul>
                </div>

                <div className='col-span-2 pt-8 md:pt-2'>
                    <p className='font-bold uppercase' >Subscribe to our newsletter</p>
                    <p className='py-4'>The latest news, article, and resources sent to your inbox</p>
                    <form className='flex flex-col sm:flex-row'>
                        <input className='w-full p-2 mr-4 mb-4 rounded-md text-black' type="email" placeholder='Enter your email'/>
                        <button className='mb-4 p-2'>Subscribe</button>
                    </form>
                </div>
            </div>
            <div className='flex flex-col max-w-[1240px] px-2 py-4
             m-auto justify-between sm:flex-row
             text-center'>
                <p className='py-4'>2022 Workflow, LLC. All right reserved</p>
                <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
                    <FaFacebook/>
                    <FaInstagram/>
                    <FaTwitter/>
                    <FaTwitch/>
                    <FaGithub/>
                </div>
            </div>

        </div>
    )
}
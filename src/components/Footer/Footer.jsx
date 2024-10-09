import React from 'react'
import { HiLocationMarker } from 'react-icons/hi'
import { MdCall, MdMessage } from 'react-icons/md'

export const Footer = () => {
    return (
        <div className='bg-gray-800 text-white px-5 relative z-50'>
            <section className='max-w-[1200px] mx-auto text-white'>

            <div className="grid md:grid-cols-3 py-5">

                {/* first col */}
                <div className='py-8 px-4'>
                    <h1 className='text-xl sm:text-3xl font-bold sm:text-left text-justify mb-3'>Be Ready To Grow</h1>
                    <p>Get Exclusive <span className='font-bold'>Update</span> straigt to your inbox.</p>
                    <br />
                    <div className='flex items-center h-10'>
                        <input type="text"
                        className='py-2 px-4 w-full h-[100%]
                        inline-block focus:outline-none     focus:border-sky-500 focus:ring-2
                        focus:ring-sky-500 bg-gray-800  border-gray-200 border-2'
                        placeholder='Enter Email'/>
                        <button
                        className='primary-button h-11'
                        >Update</button>
                    </div>
                </div>


                {/* second col */}
                <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>

                        <div>
                            <div className='py-8 px-4'>
                                <h1 className='text-xl font-bold mb-3'>
                                    Quick Links
                                </h1>
                                <ul className='flex flex-col gap-3'>
                                    <li>
                                        <a href="#">Home</a>
                                    </li>
                                    <li>
                                        <a href="#">About</a>
                                    </li>
                                    <li>
                                        <a href="#">Services</a>
                                    </li>
                                    <li>
                                        <a href="#">Login</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div className='py-8 px-4'>
                                <h1 className='text-xl font-bold mb-3'>
                                    Quick Links
                                </h1>
                                <ul className='flex flex-col gap-3'>
                                    <li>
                                        <a href="#">Pricing</a>
                                    </li>
                                    <li>
                                        <a href="#">Sitemap</a>
                                    </li>
                                    <li>
                                        <a href="#">Blog</a>
                                    </li>
                                    <li>
                                        <a href="#">Help Center</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div className='py-8 px-4'>
                                <h1 className='text-xl font-bold'>
                                    Contact Us
                                </h1>
                            </div>

                            <div className='space-y-3'>
                                <div className='flex items-center gap-2'>
                                    <HiLocationMarker />
                                    <p>Florida, USA</p>
                                </div>

                                <div className='flex items-center gap-3 mt-3'>
                                    <MdMessage />
                                    <p>abc@gmail.com</p>
                                </div>

                                <div className='flex items-center gap-3 mt-3'>
                                    <MdCall />
                                    <p>+1 123456789</p>
                                </div>
                            </div>
                        </div>

                </div>

            </div>
            </section>
        </div>
    )
}

import React from 'react'
import { FaReact } from "react-icons/fa"
import { FaShuttleSpace } from "react-icons/fa6";
import { FaSpaceAwesome } from "react-icons/fa6";
import wave from '../../assets/wave.gif';


const cardData = [
    {
        title: 'HST',
        content: '300-1500km',
        description: 'Used for astronomical observations, capturing stunning images of the universe.',
        icon: <FaReact className='text-7xl' />,
        aosDelay: '300',
    },

    {
        title: 'ISS',
        content: '500-1500km',
        description: "It's a habitable artificial satellite orbiting Earth and serves as a space environment research laboratory",
        icon: <FaShuttleSpace className='text-7xl' />,
        aosDelay: '500',
    },

    {
        title: 'GPS',
        content: '300-1500km',
        description: "Part of the Global Positioning System (GPS) used for navigation.",
        icon: <FaSpaceAwesome className='text-7xl' />,
        aosDelay: '700',
    },

]

export const MainCard = () => {
    return (
    <div id='technology' className='bg-black relative z-10 text-white'>
        <div className="container">
            <div className='min-h-[400px]'>
                <div className='grid grid-cols-1 sm:grid-cols-3
                gap-6 relative z-10'>
                    {
                        cardData.map((data, index) => (
                            <div data-aos='fade-up' data-aos-delay={data.aosDelay} key={index} className='min-h-[180px]
                            gap-2
                            flex flex-col justify-center items-center bg-sky-900/60 rounded-xl backdrop-blur-sm text-center text-2xl py-8 px-3 w-full lg:w-[300px] mx-auto'>
                                {data.icon}
                                <h1>{data.title}</h1>
                                <p>{data.content}</p>
                                <p className='text-sm'>{data.description}</p>
                            </div>
                        ))
                    }
                </div>
                <img src={wave} alt="img" className='h-[200px] w-full object-cover -translate-y-24 relative z-0 mix-blend-screen opacity-70'/>
            </div>
        </div>
    </div>
    )
}

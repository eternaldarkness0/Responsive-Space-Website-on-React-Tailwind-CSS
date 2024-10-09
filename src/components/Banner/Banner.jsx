import React from 'react'
import sateliteImg1 from '../../assets/satelite1.jpg'

export const Banner = () => {
    return (
        <div id='galaxy' className='bg-black text-white pb-12'>
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2
                gap-4 items-center">
                    <div>
                        <img data-aos='zoom-in' src={sateliteImg1} alt="img" className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover" />
                    </div>
                    <div className='space-y-3 xl:pr-36 p-4 border-r-2 border-b-2 border-r-sky-800 border-b-sky-800'>
                        <p
                        data-aos='fade-up' data-aos-delay='300'
                        className='text-sky-800 uppercase'
                        >Our Mission</p>
                        <h1
                        data-aos='fade-up' data-aos-delay='400'
                        className='text-5xl uppercase'
                        >Rapidcast</h1>
                        <p data-aos='fade-up' data-aos-delay='500'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos molestiae reprehenderit expedita corporis, non doloremque. Consequatur consectetur quisquam qui sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos molestiae reprehenderit expedita corporis, non doloremque. Consequatur consectetur quisquam qui sunt.
                        </p>
                        <button
                        data-aos='fade-up' data-aos-delay='700'
                        className='primary-button'
                        >View All</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import bgVideo from './assets/earth-bg.mp4'
import { Navbar } from './components/Navbar/Navbar'
import { Main } from './components/Main/Main'
import { MainCard } from './components/MainCard/MainCard'
import { Banner } from './components/Banner/Banner'
import { Banner2 } from './components/Banner/Banner2'
import { Footer } from './components/Footer/Footer'
import AOS from 'aos'
import 'aos/dist/aos.css'

export const App = () => {

  React.useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: 'ease-in-out',
    });
  });

  return (
    <div>
      <div className='h-[700px] relative'>
        <video
        autoPlay
        loop
        muted
        className='fixed right-0 top-0 h-[700px] w-full object-cover z-[-1]'>
        <source src={bgVideo} type='video/mp4'></source>
        </video>
        <Navbar />
        <Main />
      </div>

      <MainCard />
      <Banner />
      <Banner2 />
      <Footer />
    </div>
  )
}

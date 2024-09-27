import React from 'react'
import hero_bg from '../assets/hero-bg.webp'
import hero_title from '../assets/hero-title.webp'
import play_icon from '../assets/play_icon.png'
import info_icon from '../assets/info_icon.png'
import TitleCard from './TitleCard'

const Hero:React.FC = () => {
  return (
    <div className='hero relative mb-10'>
        <img src={hero_bg} className='w-full max-h-[900px] bg-gradient-to-r from-black to-transparent opacity-80'  alt="" />
        <div className='absolute w-full  pl-[2%] lg:pl-[4%] top-20 lg:top-44'>
            <img className='w-[40%] lg:w-[90%] max-w-md mb-[10px] lg:mb-8' src={hero_title} alt="" />
            <p className='max-w-[500px] text-[12px] lg:text-lg mb-5'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta quidem rerum libero accusantium cupiditate deserunt quos? Dolorem, esse ratione dolorum
            </p>
            <div className='btn flex gap-3 lg:mb-12 text-black'>
                <button
                 className='mb:8 flex rounded border-0 outline-none py-2 px-8 items-center gap-2 text-sm lg:text-lg 
                 font-bold bg-white hover:bg-[#ffffffbf]'
                ><img className='w-5 lg:w-6' src={play_icon} alt="" />Play</button>
                <button
                 className='mb:8 xl: flex rounded border-0 outline-none py-2 px-8 items-center gap-2 text-sm lg:text-lg
                 font-bold text-white bg-[#6d6d6eb3] hover:bg-[#6d6d6e66]'  
                ><img className='w-5 lg:w-6' src={info_icon} alt="" />Info</button>
            </div>
        <TitleCard />
        </div>
    </div>
  )
}

export default Hero
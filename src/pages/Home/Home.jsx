import React from 'react'
import { Navbar } from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'

export const Home = () => {
  return (
    <div>
        <Navbar />
        <div className='relative'>
            <img src={hero_banner} alt="banner" className='w-full banner_img'/>
            <div className='absolute w-full pl-[6%] bottom-0'>
                <img src={hero_title} alt="banner" className='w-[90%] max-w-105 mb-[30px]' />
                <p className='max-w-175 mb-5 text-[17px]'>Discovering his ties to a secret ancient order, a young man living in modern Istanbul embarks on a quest to save the city from an immortal enemy.</p>
                <div className='flex gap-3 mb-13'>
                    <button className='text-black border-0 outline-none inline-flex px-5 gap-2 items-center h-11 text-[16px] bg-gray-200 cursor-pointer rounded font-semibold hover:opacity-80'><img src={play_icon} alt="icons" className='w-6' />Play</button>

                    <button className='border-0 outline-none inline-flex px-5 gap-2 items-center h-11 text-[16px] bg-[#6d6d6eb3] cursor-pointer rounded font-semibold hover:opacity-80'><img src={info_icon} alt="icons" className='w-6' />More Info</button>
                </div>
            </div>
        </div>
    </div>
  )
}

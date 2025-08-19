import React from 'react'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'


export const Navbar = () => {
  return (
    <div className='w-full py-8 px-20 flex justify-between items-center text-[16px] fixed z-100'>
        <div className='flex gap-10 items-center'>
            <img src={logo} alt="Logo" className='w-28 h-7' />
            <ul className='flex gap-6'>
                <li className='cursor-pointer'>Home</li>
                <li className='cursor-pointer'>TV Shows</li>
                <li className='cursor-pointer'>Movies</li>
                <li className='cursor-pointer'>New & Popular</li>
                <li className='cursor-pointer'>My List</li>
                <li className='cursor-pointer'>Browse by Languages</li>
            </ul>
        </div>
        <div className='flex items-center gap-5'>
            <img src={search_icon} alt="icons" className='cursor-pointer'/>
            <p className='cursor-pointer'>Children</p>
            <img src={bell_icon} alt="icons" />
            <div className='flex items-center gap-3 relative nav_profile'>
                <img src={profile_img} alt="profile" className='rounded cursor-pointer'/>
                <img src={caret_icon} alt="icons" className='cursor-pointer'/>
                    <div className='absolute top-[100%] right-0 w-40 px-4 py-5 text-center bg-[#191919] underline text-[14px] dropdown'>
                <p>Sign Out of Netflix</p>
            </div>
            </div>
            
        </div>
    </div>
  )
}

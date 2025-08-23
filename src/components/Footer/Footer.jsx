import React from 'react'
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'

export const Footer = () => {
  return (
    <div className='py-[30px]'>
        <div className='flex gap-5 my-10 ml-70'>
          <img className='w-[30px] cursor-pointer' src={facebook_icon} alt="icon" />
          <img className='w-[30px] cursor-pointer' src={twitter_icon} alt="icon" />
          <img className='w-[30px] cursor-pointer' src={instagram_icon} alt="icon" />
          <img className='w-[30px] cursor-pointer' src={youtube_icon} alt="icon" />
        </div>

        <ul className='flex justify-center gap-30 mb-[30px]'>
          <div className='space-y-5'>
            <li>Audio Description</li>
            <li>Help Centre</li>
            <li>Gift Cards</li>
          </div>
          <div className='space-y-5'>
            <li>Media Centre</li>
            <li>Investor Relations</li>
            <li>Jobs</li>
          </div>
          <div className='space-y-5'>
            <li>Terms of Use</li>
            <li>Privacy</li>
            <li>Legal Notices</li>
          </div>
          <div className='space-y-5'>
            <li>Cookie Preferences</li>
            <li>Corporate Information</li>
            <li>Contact Us</li>
          </div>
        </ul>
        <p className='flex justify-center mt-15'>1997 - {new Date().getFullYear()} Netflix, Inc.</p>
    </div>
  )
}

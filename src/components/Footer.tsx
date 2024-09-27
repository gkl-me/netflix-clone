import React from 'react'
import youtube_icon from '../assets/youtube_icon.png'
import facebook_icon from '../assets/facebook_icon.png'
import twitter_icon from '../assets/twitter_icon.png'
import instagram_icon from '../assets/instagram_icon.png'
import '../App.css'

const Footer:React.FC = () => {
  return (
    <div 
     className='footer px-[4%] py-8 max-w-[1000px] my-0 mx-auto'
    >
      <div
        className='footer-icons flex gap-5 my-10 mx-0'
      >
        <img src={facebook_icon} alt="" />
        <img src={instagram_icon} alt="" />
        <img src={twitter_icon} alt="" />
        <img src={youtube_icon} alt="" />
      </div>
      <ul
       className='text-[12px] md:text-lg grid gap-4 mb-8 grid-cols-4'
      >
        <li>Audio Description </li>
        <li>Help Centre</li>
        <li>Gift Cards</li>
        <li>Media Centre</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Term of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className='copy-right text-gray-500 text-sm'>© 1997-2024 Netflix, Inc.</p>
    </div>
  )
}

export default Footer
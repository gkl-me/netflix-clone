import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import search_icon from '../assets/search.svg'
import bell_icon from '../assets/bell.svg'
import dropdown_icon from '../assets/dropdown.svg'
import avatar from '../assets/avatar.png'
import { logout } from '../Firebase'

const NavBar:React.FC = () => {

  const [isScrolled,setIsScroller] = useState(false)
  useEffect(()=>{
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if(scrollY > 50){
        setIsScroller(true)
      }else{
        setIsScroller(false)
      }
    }
    window.addEventListener('scroll',handleScroll)
    return () => {
      window.removeEventListener('scroll',handleScroll)
    }
  },[])

  return (
    <div 
      className={`navbar w-full py-5 px-[4%] md:py-5 md:px-[6%] flex justify-between fixed
      text-sm text-[#e5e5e5]  bg-gradient-to-b from-black/70 via-transparent  z-[1] items-center
      ${isScrolled ? 'bg-black':""}
      `
    }>
      <div 
        className='navbar-left flex justify-center gap-[50px]'
      >
        <img className=' w-[90px] h-6  md:h-[25px]' src={logo} alt="" />
        <ul className='hidden md:flex gap-5 cursor-pointer'>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div 
       className='navbar-right flex gap-5 items-center cursor-pointer'
      >
        <img src={search_icon} className='w-5' alt="" />
        <p>Children</p>
        <img src={bell_icon} className='w-5' alt="" />
        <div className='group flex gap-2 relative'>
          <img src={avatar} className='rounded-md' alt="" />
          <img src={dropdown_icon} className='w-5' alt="" />
          <div className='hidden group-hover:block dropdown absolute top-full right-0 w-max bg-[#191919] py-4 px-6 hover:underline hover:decoration-solid'>
            <p onClick={() => {logout()}}>Sign Out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
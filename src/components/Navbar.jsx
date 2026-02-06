import React, { useState } from 'react'
import Logo from './Logo'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import OpenNav from './OpenNav';
const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className='bg-[#292929b3] absolute top-0 left-0 right-0 h-12 z-100 px-5 py-2 flex justify-between items-center'>
          <Logo />
          {open?<IoClose onClick={()=>setOpen(false)} className='md:hidden text-white' />:<GiHamburgerMenu onClick={()=>setOpen(true)} className='md:hidden text-white' />}
          
          <div className='hidden md:block'>
            <ul className='flex font-roboto text-sm text-white gap-4 lg:gap-6 '>
              <a href='#home' className='hover:text-blue-600'><li>HOME</li></a>
              <a href='#about' className='hover:text-blue-600'><li>ABOUT</li></a>
              <a href='#projects' className='hover:text-blue-600'><li>PROJECTS</li></a>
              <a><li>LET'S CONNECT</li></a>
            </ul>
          </div>
          {open&& <OpenNav />}
         
    </nav> 
  )
}

export default Navbar
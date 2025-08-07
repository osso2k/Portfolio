import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'

const Comp = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    const navigateTo = (path) => {
        navigate(path)
        setNav(false)
    }

  return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] px-4 text-white'>
            <h1 className='w-full text-3xl font-bold text-[#fff]'>osso</h1>
            <ul className='hidden md:flex'>
                <li className={`p-4 cursor-pointer hover:text-gray-300 ${location.pathname === '/' ? 'text-gray-500' : ''}`} onClick={() => navigateTo('/')}>Home</li>
                <li className={`p-4 cursor-pointer hover:text-gray-300 ${location.pathname === '/projects' ? 'text-gray-500' : ''}`} onClick={() => navigateTo('/projects')}>Projects</li>
                <li className={`p-4 cursor-pointer hover:text-gray-300 ${location.pathname === '/experience' ? 'text-gray-500' : ''}`} onClick={() => navigateTo('/experience')}>Experience</li>
            </ul>
            <div onClick={handleNav} className='cursor-pointer block md:hidden'
>
  {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
</div>
<div
  className={nav ? 'fixed left-0 top-0 w-[40%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 md:hidden' : 'fixed left-[-100%] top-0 w-[40%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 md:hidden'
  }
>
  <h1 className='w-full text-3xl font-bold text-[#ffffff] m-4'>osso</h1>
  <ul className='p-4 uppercase'>
    <li className={`p-4 border-b cursor-pointer hover:text-gray-300 ${location.pathname === '/' ? 'text-gray-500' : ''}`} onClick={() => navigateTo('/')}>Home</li>
    <li className={`p-4 border-b cursor-pointer hover:text-gray-300 ${location.pathname === '/projects' ? 'text-gray-500' : ''}`} onClick={() => navigateTo('/projects')}>Projects</li>
    <li className={`p-4 border-b cursor-pointer hover:text-gray-300 ${location.pathname === '/experience' ? 'text-gray-500' : ''}`} onClick={() => navigateTo('/experience')}>Experience</li>
  </ul>
</div>
        </div>
  )
}

export default Comp

import React, { useState } from 'react'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'

const Comp = () => {

    const [nav, setNav] = useState(false)

    const handleNav = ()=>{
        setNav(!nav)
    }

  return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] px-4 text-white'>
            <h1 className='w-full text-3xl font-bold text-[#fff]'>osso</h1>
            <ul className=' hidden md:flex'>
                <li className='p-4'>Home</li>
                <li className='p-4'>Projects</li>
                <li className='p-4'>Experience</li>

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
    <li className='p-4 border-b'>Home</li>
    <li className='p-4 border-b'>Projects</li>
    <li className='p-4 border-b'>Experience</li>
  </ul>
</div>
        </div>
  )
}

export default Comp

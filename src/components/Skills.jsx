import React from 'react'
import CurvedLoop from '../Techs/CurvedLoop'

const Skills = () => {

  
  return (
    <div className='flex items-center justify-center h-full w-full text-white text-center bg-[hsl(0,0%,10%)]'>
  <CurvedLoop 
    marqueeText="JavaScript ✦ React ✦ TailwindCSS ✦ NodeJS ✦ Express ✦ PostgreSQL ✦ MongoDB ✦ Python ✦ HTML/CSS"
    speed={2}
    curveAmount={100}
    direction="left"
    interactive={true}
    className="custom-text-style cursor-pointer text-3xl"
  />


    </div>
  )
}

export default Skills

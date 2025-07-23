import React from 'react'
import CurvedLoop from '../Techs/CurvedLoop'

const Skills = () => {

  
  return (
    <div  className='flex items-center justify-center h-[250px] w-full mx-auto mb-[120px] text-white text-center'>
  
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

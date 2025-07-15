import React from 'react'
import FallingText from '../Techs/FallingText'

const Skills = () => {
  return (
    <div className='flex h-[150px] w-full mx-auto mb-[40px] text-white'>
      <FallingText
    text={`I specialize in full-stack development, leveraging JavaScript mainly React, and Python for robust solutions, with backends powered by Node.js and Express for scalable API and server-side applications.`}
    highlightWords={["React", "Express", "Node.js", "JavaScript", "full-stack","Python", "development"]}
    highlightClass="highlighted"
    trigger="hover"
    backgroundColor="transparent"
    wireframes={false}
    gravity={0.56}
    fontSize="2rem"
    mouseConstraintStiffness={0.9}
/>
    </div>
  )
}

export default Skills

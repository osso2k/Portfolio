import React from 'react'
import me from "../assets/os.jpeg"

const About = () => {
  return (
    <div className='flex h-[100%] justify-center text-white text-center p-4'>
      <div className='grid md:grid-cols-3 grid-cols-1 gap-[100px] '>
        <div className='bg-[hsl(0,0%,15%)] order-1 h-[400px] w-[400px] rounded-2xl'>
            <h1 className='text-2xl font-semibold'>Project 1</h1>
            <p>Description of the prject blah of this and blah of that what is does </p>

        </div>
        <div className='bg-[hsl(0,0%,15%)] order-2 h-[400px] w-[400px] rounded-2xl'>
            <h1 className='text-2xl font-semibold'>Project 2</h1>
            <p>Description of the prject blah of this and blah of that what is does </p>

        </div>
        <div className='bg-[hsl(0,0%,15%)] order-3 h-[400px] w-[400px] rounded-2xl'>
            <h1 className='text-2xl font-semibold'>Project 3</h1>
            <p>Description of the prject blah of this and blah of that what is does </p>

        </div>

      </div>
     
        
    </div>
  )
}

export default About

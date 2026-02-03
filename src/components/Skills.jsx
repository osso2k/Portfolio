import React from 'react'

const Skills = () => {
  return (
    <div className='w-full flex flex-col ml-2 mt-10'>
      <h1 className='text-2xl font-semibold'>Skills</h1>
      <div className='flex mt-3'>
        <h2 className='text-lg font-serif'>Languages: </h2>
        <div className='flex flex-wrap gap-2'>
          <div className='pl-1 mt-1'>
            <h3 className='text-sm wrap-break-word'>TypeScript, JavaScript, Python, C/C++, SQL</h3>
          </div>
        </div>
    </div>
      <div className='flex mt-3'>
        <h2 className='text-lg font-serif'>Frontend: </h2>
        <div className='flex flex-wrap gap-2'>
          <div className='pl-1 mt-1'>
            <h3 className='text-sm wrap-break-word'>React JS, Next JS, TailwindCSS</h3>
          </div>
        </div>
    </div>
      <div className='flex mt-3'>
        <h2 className='text-lg font-serif'>Backend: </h2>
        <div className='flex flex-wrap gap-2'>
          <div className='pl-1 mt-1'>
            <h3 className='text-sm wrap-break-word'>Node JS, Express JS, REST APIs</h3>
          </div>
        </div>
    </div>
      <div className='flex mt-3'>
        <h2 className='text-md w-[25%] font-serif'>Databases and ORMs: </h2>
        <div className='flex flex-wrap gap-2'>
          <div className='pl-1 mt-1'>
            <h3 className='text-sm wrap-break-word'>MongoDB, PostgreSQL, Prisma</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
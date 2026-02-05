import React from 'react'
import schedly from '../assets/schedly.png'
const colors = {
  "React":{text:"text-cyan-500",bg:"bg-cyan-300",border:"border border-cyan-500"}
}
const projects = {
  "Schedly": {skills:["React","TypeScript"],img:""},
  "JPrep":{},
  "Resume Reviewer":{}
}
const color = "text-blue-500"
const Projects = () => {
  return (
    <div className='w-full flex flex-col mx-1 mt-10 h-screen'>
        <div className='bg-[hsl(0,0%,10%)] px-2 py-4'>
          <h1>Schedly  <span onClick={()=>{window.open("https://github.com/osso2k/Schedly", "_blank")}}>github</span></h1>
          <img src={schedly} alt="" className=' rounded-lg' />
          <p className={`${colors[projects.Schedly.skills[0]].bg} ${colors.React.text} ${colors.React.border } bg-opacity-20 px-4 py-1 text-sm w-fit rounded-lg`} >React</p>
        </div>
    </div>
  )
}

export default Projects
import React from 'react'
import schedly from '../assets/schedly.png'
import jprep  from '../assets/jprep.png'
import airesume  from '../assets/airesumereviewer.png'
const Projects = () => {
  return (
    <div className='max-w-[90%] mx-auto grid grid-cols-1 gap-1 sm:gap-2 md:gap-3 md:grid-cols-2 lg:grid-cols-3 mt-10 '>
        <div className='bg-[hsl(0,0%,6%)] px-2 py-4 rounded-lg '>
          <div className='flex justify-between mb-5 border-b border-zinc-800 mx-5'>
          <h1 className='italic text-2xl pr-2 font-semibold '>Schedly </h1> <span className='cursor-pointer hover:opacity-55 text-md  px-4 py-1 mb-2 bg-zinc-800 border border-black bg-opacity-35 text-zinc-600 rounded' onClick={()=>{window.open("https://github.com/osso2k/Schedly", "_blank")}}> source</span>
          </div>
          <img src={schedly} alt="" className=' rounded-lg w-fit object-contain border border-black ' />
          <h2 className='text-md text-gray-300 mt-2'>Time managesment tool</h2>
          <p className='font-medium text-sm my-2 text-gray-400'>I've always struggled with managing my time, so I built a simple app to help people plan their days and stay focused on what they want to get done. The app lets users write down tasks for each day and see them in a weekly view, like a digital planner. I built the interface using React and used Express with on the backend to save user data. People can create accounts and log in, and their schedules are stored in a PostgreSQL database so they don’t lose their plans when they come back later.</p>
          <div className='flex gap-1'>
            <p className='text-cyan-400 bg-cyan-600 bg-opacity-25 px-2 py-1 text-sm rounded'>React</p>
            <p className='text-blue-400 bg-blue-600 bg-opacity-25 px-2 py-1 text-sm rounded'>TypeScript</p>
            <p className='text-green-700 bg-green-800 bg-opacity-25 px-2 py-1 text-sm rounded'>Node</p>
            <p className='text-blue-300 bg-blue-500 bg-opacity-25 px-2 py-1 text-sm rounded'>Express</p>
            <p className='text-zinc-300 bg-gray-500 bg-opacity-25 px-2 py-1 text-sm rounded'>PostgreSQL</p>
          </div>
        </div>
        <div className='bg-[hsl(0,0%,6%)] px-2 py-4 rounded-lg '>
          <div className='flex justify-between mb-5 border-b border-zinc-800 mx-5'>
          <h1 className='italic text-2xl pr-2 font-semibold '>Resume Reviewer </h1> <span className='cursor-pointer hover:opacity-55 text-md  px-4 py-1 mb-2 bg-zinc-800 border border-black bg-opacity-35 text-zinc-600 rounded' onClick={()=>{window.open("https://github.com/osso2k/Schedly", "_blank")}}> source</span>
          </div>
          <img src={airesume} alt="" className=' rounded-lg w-fit object-contain border border-black ' />
          <h2 className='text-md text-gray-300 mt-2'>shows resume and ATS compatibility</h2>
          <p className='font-medium text-sm my-2 text-gray-400'>After struggling to understand why some of my job applications never received responses, I decided to build a resume feedback tool based on my own experience applying online. The application allows users to upload a resume and paste a job description to receive an ATS score and practical suggestions for improvement. While building it, I used React and TypeScript for the interface and integrated PDF.js to process resume files for analysis. I connected the system to an AI evaluation service that reviews formatting, keywords, and structure, and I used Puter cloud storage to securely save resumes and feedback history for future comparison. This helped me better understand hiring systems.</p>
          <div className='flex gap-1'>
            <p className='text-cyan-400 bg-cyan-600 bg-opacity-25 px-2 py-1 text-sm rounded'>React</p>
            <p className='text-blue-400 bg-blue-600 bg-opacity-25 px-2 py-1 text-sm rounded'>TypeScript</p>
            <p className='text-blue-300 bg-blue-500 bg-opacity-25 px-2 py-1 text-sm rounded'>React Router</p>
            <p className='text-pink-300 bg-pink-500 bg-opacity-25 px-2 py-1 text-sm rounded'>Puter js</p>
          </div>
        </div>
        <div className='bg-[hsl(0,0%,6%)] px-2 py-4 rounded-lg '>
          <div className='flex justify-between mb-5 border-b border-zinc-800 mx-5'>
          <h1 className='italic text-2xl pr-2 font-semibold '>JPrep </h1> <span className='cursor-pointer hover:opacity-55 text-md  px-4 py-1 mb-2 bg-zinc-800 border border-black bg-opacity-35 text-zinc-600 rounded' onClick={()=>{window.open("https://github.com/osso2k/Schedly", "_blank")}}> source</span>
          </div>
          <img src={jprep} alt="" className=' rounded-lg w-fit object-contain border border-black ' />
          <h2 className='text-md text-gray-300 mt-2'>Time managesment tool</h2>
          <p className='font-medium text-sm my-2 text-gray-400'> After feeling crushed by interview after interview, I created JPrep—a warm community space where job seekers support each other through the stressful interview process. It's a platform where we share real questions we've actually encountered, helping others feel more prepared and confident. Built with React, Express, and MongoDB, JPrep lets you search by role, connect with others who get it, and turn those nerve-wracking experiences into hope for someone else. What started as my personal struggle became a supportive family where we're all rooting for each other's success.(ps:at some point it had 6 users)</p>
          <div className='flex gap-1'>
            <p className='text-cyan-400 bg-cyan-600 bg-opacity-25 px-2 py-1 text-sm rounded'>React</p>
            <p className='text-yellow-300 bg-yellow-300 bg-opacity-25 px-2 py-1 text-sm rounded'>JavaScript</p>
            <p className='text-green-700 bg-green-800 bg-opacity-25 px-2 py-1 text-sm rounded'>Node</p>
            <p className='text-blue-300 bg-blue-500 bg-opacity-25 px-2 py-1 text-sm rounded'>Express</p>
            <p className='text-green-400 bg-green-500 bg-opacity-25 px-2 py-1 text-sm rounded'>MongoDB</p>
          </div>
        </div>
    </div>
  )
}

export default Projects
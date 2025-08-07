import React from 'react'
import { ReactTyped } from "react-typed";
import me from "../assets/os.jpeg"
import linkedin from "../assets/linkedin-icon.png"
import github_icon from "../assets/github-icon.png"
import Skills from './Skills';
import BlurText from '../Techs/BlurText';



const Cardss = () => {
  const linkdeinRed= ()=>{
    window.open("https://www.linkedin.com/in/ossoble-ali/","_blank")
  }
  const GithubRed= ()=>{
    window.open("https://github.com/osso2k/","_blank")
  }
  const Mailto= ()=>{
    const email = 'ossoble817@gmail.com'
    window.location.href = `mailto:${email}`
  }
  return (
    <div className='min-h-screen bg-[hsl(0,0%,10%)] relative'>
    <div className='grid md:grid-cols-2 grid-cols-1 min-h-screen'>
      <div className='order-1'>
    <div className='text-white'>
      <div className='max-w-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center mt-[-96px]'>

        <p className='font-bold'>Ankara, Türkiye</p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl '>Ossoble Ali</h1>
        <div className=''>
            <p className='md:text-xl sm:text-xl text-lg'>18 year old Software Engineer who builds Systems that are </p>
            <ReactTyped className='md:text-xl sm:text-xl text-lg' strings={['Efficient','Scalable','Secure']} typeSpeed={120} backSpeed={140} loop/>.
        </div>
        <div className='flex mx-auto text-center '>
        <p onClick={Mailto} className='my-auto text-center pr-2 cursor-pointer '>ossoble817@gmail.com</p>
        <img onClick={linkdeinRed} className=' cursor-pointer w-9 rounded-lg mr-2 bg-white' src={linkedin} alt="" />
        <img onClick={GithubRed} className=' w-11 cursor-pointer rounded-[15px]  ' src={github_icon} alt="" />
        </div>
      </div>
    </div>
    </div>
      <div className='order-2'>
           <div className="grid grid-cols-1 md:grid-cols-2 ">
            <div className="p-6 flex flex-col justify-center sm:text-[14px] md:text-[20px] text-lg ">
              <BlurText className='text-left text-sm sm:text-[14px] md:text-[24px] text-white pb-4 mt-[50%] leading-none' text="I specialize in full-stack development, leveraging JavaScript mainly React, with backends powered by Node.js and Express for scalable RESTful API's and server-side applications." delay={150} animateBy="words" direction="top"/> 
        </div>
            <img className='md:w-[300px] sm:w-[200px] rounded-2xl  sm:mx-auto' src={me} alt="" />
        </div>
      </div>
    </div>
    <div className="absolute top-[600px] left-0 right-0 h-[25vh]">
      <Skills />
    </div>
    </div>
    
  )
}

export default Cardss

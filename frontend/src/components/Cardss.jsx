import React from 'react'
import  {ReactTyped} from "react-typed";
import me from "../assets/os.jpeg"
import linkedin from "../assets/linkedin-icon.png"
import github_icon from "../assets/github-icon.png"
import Skills from './Skills';


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
    <div>
    <div className='grid md:grid-cols-2 grid-cols-1 '>
      <div className='order-1'>
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='font-bold '>Full Stack Software Engineer</p>
        <p className='font-bold'>Ankara, Türkiye</p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl '>Ossoble Ali</h1>
        <div className=''>
            <p className='md:text-xl sm:text-xl text-lg'>18 year old Software Engineer who builds Systems that are </p>
            <ReactTyped className='md:text-xl sm:text-xl text-lg' strings={['Efficient','Scalable','Secure']} typeSpeed={120} backSpeed={140} loop/>.
        </div>
        <div className='flex mx-auto text-center '>
        <p onClick={Mailto} className='my-auto text-center pr-2 cursor-pointer '>ossoble817@gmail.com</p>
        <img onClick={linkdeinRed} className=' cursor-pointer w-11 rounded-lg mr-2 bg-white' src={linkedin} alt="" />
        <img onClick={GithubRed} className=' w-11 cursor-pointer rounded-[15px]  ' src={github_icon} alt="" />
        </div>
      </div>
    </div>
    </div>
      <div className='order-2'>
           <div className="grid grid-cols-1 md:grid-cols-2 ">
            <div className="p-6 flex flex-col justify-center sm:text-[14px] md:text-[20px] text-lg ">
                <p className='text-left text-lg text-white pb-4'>I'm an aspiring Full Stack Developer from Somalia who's been hooked on coding since 8th grade. That first moment I made something work with code sparked something in me that never faded. To this day, I still get that same childlike excitement every time I build a project.</p>
                <p className='text-left text-lg text-white pb-4'>After growing up immersed in the UAE's tech-forward environment, I'm now pursuing my Software Engineering degree at Ostim Teknik University in Türkiye. What keeps me pushing forward is that addictive 'what's next?' feeling after each project, that constant curiosity about what new challenge I can tackle and what innovative solution I can build tomorrow.</p>
               
            </div>
            <img className='md:w-[300px] sm:w-[200px] rounded-2xl  sm:mx-auto' src={me} alt="" />
        </div>
      </div>
    </div>
    <div>
      <Skills />
    </div>
    </div>
    
  )
}

export default Cardss

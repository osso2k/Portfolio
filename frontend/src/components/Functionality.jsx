import React, {useState,useEffect,useRef} from 'react'

const Functionality = () => {
    const [counter,setCounter]= useState(0)
    const [msg,setMsg] = useState("Start")
    const [color,setColor]= useState('bg-blue-500')
  function add(){
    if(counter<10){
        setCounter(counter+1)
    }
  }

  function dec(){
    if(counter>0 ){
    setCounter(counter-1)}
  }
  useEffect(()=>{
    if (counter ==10){
        setMsg("Limit")
    }else{
        setMsg("")
    }
  },[counter])
// function blue(){
//     setColor("bg-blue-500")
// }
// function yellow(){
//     setColor("bg-yellow-500")
// }
// function red(){
//     setColor("bg-red-500")
// }
// function pink(){
//     setColor("bg-pink-500")
// }

  return (
    <div className={`flex mx-auto h-screen justify-center items-center text-white ${color}`}>
        <div className='flex flex-col mr-5'>
            {/* <div className='mr-4' onMouseOver={blue}>Blue</div>
            <div className='mr-4' onMouseOver={yellow}>yellow</div>
            <div className='mr-4'  onMouseOver={red}>Red</div>
            <div  onMouseOver={pink}>Pink</div> */}
            <p>{counter}</p>
            <button onClick={add}>Increment</button>
            <button onClick={dec}>Decrement</button>
            <p>{msg}</p>

        </div>
    </div>
  )
}

export default Functionality

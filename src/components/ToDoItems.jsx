import React from 'react'
import checked from "../assets/checked.png"
import unchecked from "../assets/unchecked.png"
const ToDoItems = ({text , id , isComplete, DeleteTask, toggle}) => {
  return (
    <div className='flex items-center my-3 gap-2'>
        <div onClick={()=>{toggle(id)}} className='flex flex-1 items-center cursor-pointer'>
            <img src={isComplete ? checked : unchecked} alt="" className='w-7' />
            <p className={`text-indigo-500 ml-4 text-[17px] decoration-red-500  ${isComplete ? "line-through " : "" }`}>{text}</p>
        </div>
        <img onClick={()=>{DeleteTask(id)}} src="/os.jpeg" alt="" className='w-3.5 cursor-pointer ' />
      
    </div>
  )
}

export default ToDoItems

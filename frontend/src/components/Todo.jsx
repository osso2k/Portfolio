import React, { useEffect, useRef, useState } from 'react'
import ToDoItems from './ToDoItems'

const FirstCard = () => {
    const [todoList, setTodoList] =useState(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : [] )

    const inputRef = useRef()
    const Add = ()=>{
        const inputText = inputRef.current.value.trim()
        if(inputText ==""){
            alert("Please enter Some Text!")
            return null
        }
        const newTodo = {
            id: Date.now(),
            text: inputText,
            isComplete: false,
        } 
        setTodoList((prev)=>[...prev, newTodo])  
        inputRef.current.value = "" 
    }
    const DeleteTask = (id)=>{
        setTodoList((prevTodos)=>{
            return prevTodos.filter((todo)=>todo.id !== id)
        })
    }
    const toggle =(id)=>{
        setTodoList((prevTodo)=>{
            return prevTodo.map((todo)=>{
                if(todo.id ===id){
                    return {...todo , isComplete: !todo.isComplete}
                }
                return todo
            })
        })
    }
    useEffect(()=>{
        localStorage.setItem("todos", JSON.stringify(todoList))
    },[todoList])
    
  return (
    <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'>
        <div className="flex items-center mt-7 gap-2">
            <img className='w-8' src="/image.png" alt="" />
            <h1 className='text-3xl font-semibold text-center'>To Do React</h1>
        </div>
        <div className="flex items-center my-7 bg-gray-200 rounded-full">
            <input className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600' type="text" placeholder='Add Task' ref={inputRef} />

            <button onClick={Add} className='border-none rounded-full bg-cyan-200 w-32 h-14 text-black text-lg font-medium cursor-pointer'>Add</button>
        </div>
        <div className="">
            {todoList.map((item, index)=>{
                return <ToDoItems key={index} text={item.text} id={item.id} isComplete ={item.isComplete} DeleteTask={DeleteTask} toggle={toggle} />
            })}
            
            
        </div>
    </div>
  )
}

export default FirstCard

import React from 'react'
import Todo from './components/Todo'
import Comp from './components/Comp'
import Cardss from './components/Cardss'
import About from './components/About'
const App = () => {
  return (
    <div className='bg-[hsl(0,0%,10%)]'>
        {/* <Todo/> */}
        <Comp />
        <Cardss />
        {/* <About /> */}
        
    </div>
  )
}

export default App

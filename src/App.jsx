import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Comp from './components/Comp'
import Cardss from './components/Cardss'
import About from './components/About'

const App = () => {
  return (
    <Router>
      <div className='min-h-screen flex flex-col bg-[hsl(0,0%,10%)]'> 
        <Comp />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Cardss />} />
            <Route path="/projects" element={<About />} />
            <Route path="/experience" element={<div className="text-white h-full flex items-center justify-center"><h1 className="text-3xl">Error 404</h1></div>} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App

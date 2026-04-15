import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import Room from './Components/Room/Room'

const App = () => {
  return (
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room/:roomid" element={<Room />} />
      </Routes>

  )
}

export default App

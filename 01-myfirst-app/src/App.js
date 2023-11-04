import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Login from './Components/Login/Login-form'
import Home from './Components/HomePage'
import Navbar from './Components/Navbar/Navbar'
import Signup from './Components/Login/Signup-form'

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

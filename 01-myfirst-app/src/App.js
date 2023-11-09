import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import Login from './Components/Login/Login-form'
import Home from './Components/HomePage'
import Navbar from './Components/Navbar/Navbar'
import Signup from './Components/Login/Signup-form'
import CustomNav from './Components/Navbar/CustomNav'

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/home' element={<Home />} />
          <Route path='/concept' element={<CustomNav />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

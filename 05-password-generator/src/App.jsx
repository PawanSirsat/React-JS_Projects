// src/App.js
import React from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import GeneratePassword from './Components/GeneratePassword'
import SavedPasswords from './Components/SavedPasswords'

const App = () => {
  return (
    <Router>
      <div className='flex h-screen '>
        {/* Left Side Navbar */}
        <div className='bg-gray-800 text-white p-4 '>
          <h1 className='text-xl font-bold mb-4 '>Password Manager</h1>
          <nav>
            {' '}
            {/* Adjust the space-x value according to your preference */}
            <ul className='grid gap-[1rem]'>
              <li>
                <Link to='/generate-password'>Generate Password</Link>
              </li>
              <li>
                <Link to='/saved-passwords'>Saved Passwords</Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Main Content */}
        <div className='flex-grow p-4'>
          {/* Top Navbar */}
          <div className='bg-blue-500 text-white p-4 mb-4'>
            <h1 className='text-2xl font-bold'>Password Manager</h1>
          </div>

          {/* Route Configuration */}
          <Routes>
            <Route path='/generate-password' element={<GeneratePassword />} />
            <Route path='/saved-passwords' element={<SavedPasswords />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App

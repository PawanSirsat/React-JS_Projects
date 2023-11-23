// src/App.js
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  Navigate,
} from 'react-router-dom'
import GeneratePassword from './Components/GeneratePassword'
import SavedPasswords from './Components/SavedPasswords'
import { useState } from 'react'
import './Components/Nav.css'

const App = () => {
  const [currentPage, setCurrentPage] = useState('/generate-password')
  const handleNavItemClick = (page) => {
    setCurrentPage(page)
  }
  return (
    <Router>
      <div className='flex h-screen'>
        {/* Left Side Navbar */}
        <div className='bg-gray-800 text-white p-4 fixed h-full'>
          <h1 className='text-xl font-bold mb-4 text-blue-500'>
            Password Manager
          </h1>
          <nav>
            {' '}
            {/* Adjust the space-x value according to your preference */}
            <ul>
              <div
                className={` ${
                  currentPage === '/generate-password' ? 'activenav' : ''
                } navbar__li-box`}
                onClick={() => handleNavItemClick('/generate-password')}
              >
                <li>
                  <Link to='/generate-password'>Generate Password</Link>
                </li>
              </div>
              <div
                className={` ${
                  currentPage === '/saved-passwords' ? 'activenav' : ''
                } navbar__li-box`}
                onClick={() => handleNavItemClick('/saved-passwords')}
              >
                <li>
                  <Link to='/saved-passwords'>Saved Passwords</Link>
                </li>
              </div>
            </ul>
          </nav>
        </div>

        {/* Main Content */}
        <div className='flex-grow p-4'>
          {/* Top Navbar */}
          {/* <div className='bg-gray-800 text-white p-4 mb-4'>
            <h1 className='text-2xl font-bold'>Password Manager</h1>
          </div> */}

          {/* Route Configuration */}
          <Routes>
            <Route path='/generate-password' element={<GeneratePassword />} />
            <Route path='/saved-passwords' element={<SavedPasswords />} />
            {/* Default route */}
            <Route
              path='/'
              element={<Navigate to='/generate-password' replace />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App

// CustomNav.js
import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import './Nav-Con.css'
import Replace from '../Concepts/Replace'
import App from '../../App'
import ReactDOM from 'react-dom'

const root2 = ReactDOM.createRoot(document.getElementById('root'))

const Exit = () => {
  root2.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}

function CustomNav() {
  const [isWindowOpen, setWindow] = useState(false)
  const li = [
    [
      'Replace',
      'https://img.icons8.com/color/48/dashboard-layout.png',
      '/replace',
    ],
    ['Exit', 'https://img.icons8.com/color/48/back--v1.png', '/exit'],

    // Add more items as needed
  ]

  const openClose = () => {
    setWindow(!isWindowOpen)
  }

  return (
    <Router>
      <div className='flex-container'>
        <nav className='navbar-menu' style={{ width: isWindowOpen ? 250 : 60 }}>
          <div className='burger' onClick={openClose}>
            <img
              src='https://img.icons8.com/metro/26/activity-feed-2.png'
              alt='activity-feed-2'
            />
          </div>
          <ul className='navbar__list'>
            {li.map((item, i) => (
              <div className='navbar__li-box' key={i}>
                <Link to={item[2]}>
                  <img
                    src={item[1]}
                    alt={item[1]}
                    style={{ paddingLeft: isWindowOpen ? 27 : 17 }}
                  />
                  <li
                    href={item[2]}
                    className='navbar__li'
                    style={{ display: isWindowOpen ? 'inline-block' : 'none' }}
                  >
                    {item[0]}
                  </li>
                </Link>
              </div>
            ))}
          </ul>
        </nav>
        <div className='content'>
          <Routes>
            <Route path='/replace' element={<Replace />} />
            <Route path='/exit' element={<Exit />} />

            {/* Add more routes as needed */}
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default CustomNav

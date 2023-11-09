import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  useRouteMatch,
  Route,
  Link,
} from 'react-router-dom'
import './Nav-Con.css'
import Replace from '../Concepts/Replace'

function CustomNav() {
  const [isWindowOpen, setWindow] = useState(false)
  const li = [
    [
      'Replace',
      'https://img.icons8.com/color/48/dashboard-layout.png',
      '/replace',
    ],
  ]

  const openClose = () => {
    setWindow(!isWindowOpen)
  }

  return (
    <Router>
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
      <Routes>
        <Route path={`/concept/replace`} element={<Replace />} />
      </Routes>
    </Router>
  )
}

export default CustomNav

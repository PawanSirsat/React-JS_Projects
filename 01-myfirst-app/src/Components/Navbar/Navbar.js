// Navbar.js

import React from 'react'

const navbarStyle = {
  backgroundColor: '#333',
  color: '#fff',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '1rem',
}

const logoStyle = {
  fontSize: '1.5rem',
}

const navLinkStyle = {
  display: 'flex',
  listStyle: 'none',
  marginLeft: '1rem',
  gap: '50px',
}

function Navbar() {
  return (
    <nav style={navbarStyle}>
      <div style={logoStyle}>My App</div>
      <ul style={navLinkStyle}>
        <li>
          <a href='/home' style={{ color: 'white', textDecoration: 'none' }}>
            Home
          </a>
        </li>
        <li>
          <a href='/replace' style={{ color: 'white', textDecoration: 'none' }}>
            Concept
          </a>
        </li>
        <li>
          <a href='/login' style={{ color: 'white', textDecoration: 'none' }}>
            Login
          </a>
        </li>
        <li>
          <a href='/signup' style={{ color: 'white', textDecoration: 'none' }}>
            Signup
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar

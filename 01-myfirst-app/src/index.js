import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Signup from './Components/Login/Signup-form'

const root = ReactDOM.createRoot(document.getElementById('root'))
// const root2 = ReactDOM.createRoot(document.getElementById('root2'))

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// root2.render(<Signup />)

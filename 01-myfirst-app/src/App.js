import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import Login from './Components/Login/Login-form'
import Home from './Components/HomePage'
import Navbar from './Components/Navbar/Navbar'
import Signup from './Components/Login/Signup-form'
import CustomNav from './Components/Navbar/CustomNav'
import ReactDOM from 'react-dom'
const root1 = ReactDOM.createRoot(document.getElementById('root'))

const Change = () => {
  root1.render(
    <React.StrictMode>
      <CustomNav />
    </React.StrictMode>
  )
}

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/' element={<Home />} />
          <Route path='/concept' element={<Change />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

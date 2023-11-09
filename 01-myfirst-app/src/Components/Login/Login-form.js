import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom' // for navigation
import Database from '../User-Data/Database.json'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleUsernameChange = (e) => {
    setUsername(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Load user data from the JSON file (you would fetch this from an API in a real application)
    try {
      const data = Database.users
      const user = data.find(
        (u) => u.username === username && u.password === password
      )

      if (user) {
        navigate('/')
      } else {
        alert('Invalid username or password')
      }
    } catch (error) {
      console.error('Error fetching or parsing data:', error)
    }
  }

  return (
    <div>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor='username'>Username:</label>
        <input
          type='text'
          id='username'
          name='username'
          required
          value={username}
          onChange={handleUsernameChange}
        />
        <br />
        <br />

        <label htmlFor='password'>Password:</label>
        <input
          type='password'
          id='password'
          name='password'
          required
          value={password}
          onChange={handlePasswordChange}
        />
        <br />
        <br />

        <input type='submit' value='Login' />
      </form>
    </div>
  )
}

export default Login

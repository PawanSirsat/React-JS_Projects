import { useState, useCallback, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

const GeneratePassword = () => {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')
  const [website, setWebsite] = useState('')
  const [localpassword, setlocalPassword] = useState('')
  const [passwords, setPasswords] = useState([])
  const [showPassword, setShowPassword] = useState(false)

  const handleTogglePassword = () => {
    setShowPassword(!showPassword)
  }

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if (numberAllowed) str += '0123456789'
    if (charAllowed) str += '!@#$%^&*-_+=[]{}~'

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, setPassword, passwordGenerator])

  //Save In Local Storage for

  useEffect(() => {
    const storedPasswords = JSON.parse(localStorage.getItem('passwords')) || []
    setPasswords(storedPasswords)
  }, [])

  //Handel Submit

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!localpassword) setlocalPassword(password)
    if (!website || !localpassword) {
      alert('Please enter both website and password.')
      return
    }

    const newPassword = {
      website,
      password: localpassword,
    }

    const newPasswords = [...passwords, newPassword]
    setPasswords(newPasswords)
    localStorage.setItem('passwords', JSON.stringify(newPasswords))

    setWebsite('')
    setlocalPassword('')
  }

  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
      <h1 className='text-white text-center my-3'>Password generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input
          type='text'
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly
        />
        <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
          copy
        </button>
      </div>
      <div className='flex text-sm gap-x-2 '>
        <div className='flex items-center gap-x-1'>
          <input
            type='range'
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {
              setLength(e.target.value)
            }}
          />
          <label>Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
            type='checkbox'
            defaultChecked={numberAllowed}
            id='numberInput'
            onChange={() => {
              setNumberAllowed((prev) => !prev)
            }}
          />
          <label htmlFor='numberInput'>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
            type='checkbox'
            defaultChecked={charAllowed}
            id='characterInput'
            onChange={() => {
              setCharAllowed((prev) => !prev)
            }}
          />
          <label htmlFor='characterInput'>Symbols</label>
        </div>
        <button
          type='button'
          className='w-full p-2 bg-green-500 text-white rounded cursor-pointer hover:bg-green-500'
          onClick={passwordGenerator}
        >
          Generate
        </button>
      </div>
      <br></br>
      <div className='max-w-2xl mx-auto p-4 border rounded'>
        <h2 className='text-2xl font-bold mb-4'>Password Manager</h2>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='Enter website'
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            className='w-full p-2 mb-2 border rounded'
          />
          <div className='relative'>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder='Enter password'
              value={localpassword || password}
              onChange={(e) => setlocalPassword(e.target.value)}
              className='w-full p-2 mb-2 border rounded'
            />
            <span
              className='absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer'
              onClick={handleTogglePassword}
            >
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </span>
          </div>

          <button
            type='submit'
            className='w-full p-2 bg-green-500 text-white rounded cursor-pointer'
          >
            Save Password
          </button>
        </form>
        <ul className='list-none p-0'>
          {passwords.map((item, index) => (
            <li key={index} className='mb-2'>
              <strong>{item.website}:</strong> {item.password}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default GeneratePassword

import React, { useState } from 'react' // Import React and useState

function Hooks() {
  const [value, setValue] = useState(5) // Use useState to manage the counter value

  // Define functions to increase and decrease the counter value
  const increase = () => {
    setValue(value + 1)
  }

  const decrease = () => {
    if (value <= 1) {
      alert('Value must be greater than zero')
    } else {
      setValue(value - 1)
    }
  }

  return (
    <div className='App'>
      <h2>Counter Value {value}</h2>
      <button onClick={increase}>Increment</button>
      <button onClick={decrease}>Decrement</button>
    </div>
  )
}

export default Hooks

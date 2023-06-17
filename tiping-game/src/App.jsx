import { useState, useEffect, useRef } from 'react'

function App() {

  const time = 5

  const [text, setText] = useState('')
  const [timeRemaining, setTimeRemaining] = useState(time)
  const [isTimeRunning, setIsTimeRunning] = useState(false)

  function handleChange(e){
    setText(e.target.value)
  }

  function countWords(text){
    return text.split(' ').filter(word => word !== '').length
  }

  return (
    <main>
      <h1>How fast can you type?</h1>
      <textarea
        onChange={handleChange}
        value={text}
      ></textarea>
      <h2>Time remaining: ???</h2>
      <button onClick={() => countWords(text)}>Start</button>
      <h2>Words counted: ???</h2>
    </main>
  )
}

export default App

import { useState, useEffect, useRef } from 'react'

function App() {

  const time = 5

  const [text, setText] = useState('')
  const [timeRemaining, setTimeRemaining] = useState(time)
  const [isTimeRunning, setIsTimeRunning] = useState(false)

  const textAreaRef = useRef(null)

  function startGame(){
    setIsTimeRunning(true)
    setTimeRemaining(time)
    setText('')
    textAreaRef.current.disabled = false
    textAreaRef.current.focus()
  }

  function handleChange(e){
    setText(e.target.value)
  }

  function countWords(text){
    return text.split(' ').filter(word => word !== '').length
  }

  useEffect(() => {
    if(timeRemaining > 0 && isTimeRunning){
      setTimeout(() => {
        setTimeRemaining(prevState => prevState-1)
      }, 1000)
    } else if (timeRemaining === 0) {
      setIsTimeRunning(false)
    }
  }, [timeRemaining, isTimeRunning])

  return (
    <main>
      <h1>How fast can you type?</h1>
      <textarea
        ref={textAreaRef}
        disabled={!isTimeRunning}
        onChange={handleChange}
        value={text}
      ></textarea>
      <h2>Time remaining: {timeRemaining}</h2>
      <button 
        disabled={isTimeRunning}
        onClick={startGame}>
        Start
      </button>
     { timeRemaining === 0 && <h2>Words counted: {countWords(text)}</h2>}
    </main>
  )
}

export default App

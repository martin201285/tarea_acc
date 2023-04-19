import { useState } from 'react'
import { Keypad } from './components/molecules/Keypad/Keypad'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Keypad color={"orange"}/>
    </div>
  )
}

export default App

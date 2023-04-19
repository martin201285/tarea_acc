import { Login } from './components/molecules/Login/Login'
import { Keypad } from './components/molecules/Keypad/Keypad'
import './App.css'

function App() {
  
  return (
    <div className="App">
      <Login text={"Ingrese DNI y clave"}/>
      <Keypad color={"orange"}/>
    </div>
  )
}

export default App

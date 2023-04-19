import { Title } from './components/atoms/Title/Title'
import { Login } from './components/molecules/Login/Login'
import { Keypad } from './components/molecules/Keypad/Keypad'
import './App.css'

function App() {
  
  return (
    <div className='container'>
      <div className='container__greetings'>
        <Title name={"TASI"}/>
      </div>
      <div className='container__section'>
        <Login text={"Ingrese DNI y clave"}/>
        <Keypad color={"orange"}/>
      </div>
    </div>
  )
}

export default App

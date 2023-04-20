import { Title } from './components/atoms/Title/Title'
import { InitialScreen } from './components/organisms/InitialScreen/InitialScreen'
import './App.css'

function App() {
  
  return (
    /* 
      name= free string
      location= "left", "center" or "right"
    */

    <div className='container'>
      <div>
        <Title name={"TASI"} location={"left"}/>
      </div>
      <div>
        <InitialScreen />
      </div>
    </div>
  )
}

export default App


import { Initial } from './components/pages/Initial/Initial'
import './App.css'
import { Route, Routes } from 'react-router-dom'

function App() {
  
  return (
    <Routes>
      <Route path='/tarea_acc' element={<Initial />}/>
    </Routes>
  )
}

export default App


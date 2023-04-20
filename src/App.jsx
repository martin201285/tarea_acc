import { Initial } from './components/pages/Initial/Initial'
import { Operations } from './components/pages/Operations/Operations'
import './App.css'
import { Route, Routes } from 'react-router-dom'

function App() {
  
  return (
    <Routes>
      <Route path='/tarea_acc' element={<Initial />}/>
      <Route path='/tarea_acc/operations' element={<Operations />}/>
    </Routes>
  )
}

export default App


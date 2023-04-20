import React from 'react'
import { Login } from '../../molecules/Login/Login'
import { Keypad } from '../../molecules/Keypad/Keypad'
import "./InitialScreen.css"

export const InitialScreen = () => {
  return (
    <div className='container__section'>
      <Login text={"Ingrese DNI y clave"}/>
      <Keypad color={"orange"}/>
    </div>
  )
}

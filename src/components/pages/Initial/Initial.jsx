import React from 'react'
import { Title } from '../../atoms/Title/Title'
import { InitialScreen } from '../../organisms/InitialScreen/InitialScreen'
import "./Initial.css";

export const Initial = () => {

    /* 
    name= free string
    location= "left", "center" or "right"
    */

  return (
    <div className='container'>
      <div>
        <Title name={"Cajero Autómatico TASI"} location={"left"}/>
      </div>
      <div>
        <InitialScreen />
      </div>
    </div>
  )
}

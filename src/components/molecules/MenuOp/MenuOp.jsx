import React from 'react'
import { Subtitle } from '../../atoms/Subtitle/Subtitle'
import { Button } from '../../atoms/Button/Button'
import "./MenuOp.css"

export const MenuOp = ({text, color}) => {
  return (
    <div className='menuOp__container'>
      <div className='menuOp__title'>
        <Subtitle text={text} location={"center"}/>
      </div>
      <div className='menuOp__buttons'>
        <div className='buttons__container'>
          <Button color={color} value={"Extracción"}/>
          <Button color={color} value={"Depósito"}/>
        </div>
        <div className='buttons__container'>
          <Button color={color} value={"Consulta de saldo"}/>
        </div> 
      </div>     
    </div>
  )
}

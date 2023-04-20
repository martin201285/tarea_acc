import React from 'react'
import { Title } from '../../atoms/Title/Title'
import { OperationScreen } from '../../organisms/OperationScreen/OperationScreen'
import { Button } from '../../atoms/Button/Button'
import "./Operations.css"

export const Operations = () => {

  /* 
  name= free string
  location= "left", "center" or "right"
  */

  return (
    <div className='containerOp'>
      <div>
        <Title name={"Bienvenido José"} location={"center"}/>
      </div>  
      <div>  
        <OperationScreen />
      </div>
      <div className='operations__cancel'>
        <Button value={"Cancelar"} color={"orange--lg"}/>
      </div>
    </div>
  )
}

import React from 'react'
import { MenuOp } from '../../molecules/MenuOp/MenuOp'
import { Button } from '../../atoms/Button/Button'
import "./OperationScreen.css"

export const OperationScreen = () => {
    return (
        <div className='operationScreen__container'>
            <div className='operationScreen__menu'>
                <MenuOp text={"¿Qué operación deseas realizar?"} color={"grey--lg"}/>
            </div>            
        </div>
    )
}

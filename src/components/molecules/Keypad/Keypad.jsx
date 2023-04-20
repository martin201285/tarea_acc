import React from 'react'
import { Button } from '../../atoms/Button/Button';
import "./Keypad.css";

export const Keypad = ({color}) => {
    return (
      <div className='keypad__container'>
        <div className='keypad__row'>
          <Button color={color} value={1}/>
          <Button color={color} value={2}/>
          <Button color={color} value={3}/>
        </div>
        <div className='keypad__row'>
          <Button color={color} value={4}/>
          <Button color={color} value={5}/>
          <Button color={color} value={6}/>
        </div>
        <div className='keypad__row'>
          <Button color={color} value={7}/>
          <Button color={color} value={8}/>
          <Button color={color} value={9}/>
        </div>
        <div className='keypad__row'>
          <Button color={color} value={"Borrar"}/>
          <Button color={color} value={0}/>
          <Button color={color} value={"Continuar"}/>
        </div>
      </div>
    )
}

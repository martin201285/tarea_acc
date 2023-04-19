import React from 'react'
import { Subtitle } from '../../atoms/Subtitle/Subtitle'
import { Input } from '../../atoms/Input/Input'

export const Login = ({text}) => {
    return (
        <div className='loginContainer'>
            <div className='loginContainer__title'>
                <Subtitle text={text}/>
            </div>
            <div className='loginContainer__inputs'>
                <Input type={"text"} placeholder={"DNI"} max={8}/>
                <Input type={"password"} placeholder={"Clave"} max={4}/>
            </div>  
        </div>
      )
}

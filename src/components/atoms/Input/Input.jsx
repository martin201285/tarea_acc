import React from 'react'
import "./Input.css";

export const Input = ({type, placeholder, max}) => {
    return (
        <input type={type} placeholder={placeholder} maxLength={max}></input>
      )
}

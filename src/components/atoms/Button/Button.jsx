import React from 'react'
import "./Button.css";

export const Button = ({color, value}) => {
    return (
        <button className={color} value={value}>{value}</button>
    )
}

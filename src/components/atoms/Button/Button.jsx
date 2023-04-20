import React from 'react'
import "./Button.css";

export const Button = ({color, value, action}) => {
    return (
        <button className={color} value={value} onClick={action}>{value}</button>
    )
}

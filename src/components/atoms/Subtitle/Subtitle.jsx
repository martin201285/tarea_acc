import React from 'react'
import "./Subtitle.css";

export const Subtitle = ({text, location}) => {
  return (
    <h2 className={location}>{text}</h2>
  )
}

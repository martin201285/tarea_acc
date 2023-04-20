import React from 'react'
import "./Title.css";

export const Title = ({name, location}) => {
  return (
    <h1 className={location}>Cajero Autómatico {name}</h1>
  )
}
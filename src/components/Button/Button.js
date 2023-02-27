import React from 'react'
import './Button.css'
export const Button = ({type,text}) => {
  return (
    <button type={type} className='next-button w-100 py-3'>{text}</button>
  )
}

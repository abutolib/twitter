import React from 'react'
import Bobur from '../../assets/images/bobur.jpg'
import './Todo.css'
import { UserName } from '../../context/nameContext'
import { useContext } from 'react'
export const Todo = ({ src, text, time }) => {

  const { name } = useContext(UserName)

  return (
    <li className='d-flex align-items-start gap-3 border-b'>
      <img src={Bobur} width={60} height={60} />
      <div>
        <div className='d-flex gap-1 align-items-center'>
          <p style={{ cursor: 'pointer' }} className='todo-owner'>{name}</p>
          <p style={{ cursor: 'pointer' }} className='todo-nik'>@{name}:</p>
          <p style={{ cursor: 'pointer' }} className='todo-nik'>{time}</p>
        </div>
        <p className='todo-text'>{text}</p>
        <img src={src}  width={650} style={{borderRadius:'20px'}} />
      </div>
    </li>
  )
}

import React, { useContext } from 'react'
import { TodosContext } from '../../context/todosContext'
import { Todo } from '../Todo/Todo'
import './ProfileTodos.css'

export const ProfileTodos = () => {

  const {todos} =useContext(TodosContext)

  return (
    <div className='mt-5'>
      <ul className='mt-3 d-flex flex-column gap-2 list-unstyled '>
        {todos.length ? todos.map(todo => <Todo src={todo.src} time={todo.time} key={todo.id} text={todo.text} />) : ""}
      </ul>
    </div>
  )
}

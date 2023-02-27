import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { CustomizeICon, PhotoIcon } from '../../assets/images/Ions'
import Image from '../../assets/images/photo.svg'
import Dates from '../../assets/images/date.svg'
import Gif from '../../assets/images/gif.svg'
import Smile from '../../assets/images/smile.svg'
import Stats from '../../assets/images/stats.svg'
import Bobur from '../../assets/images/bobur.jpg'
import './Home.css'
import { Todo } from '../../components/Todo/Todo'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { UserName } from '../../context/nameContext'
import { TodosContext } from '../../context/todosContext'


export const Home = () => {

  const { name, setName } = useContext(UserName)
  const { todos, setTodos } = useContext(TodosContext)
  localStorage.setItem('username', JSON.stringify(name));

  const navigate = useNavigate()


  useEffect(() => {
    if (name === "") {
      navigate('/login')
    }
  }, [])

  const inputValue = useRef()
  const photo = useRef()
  const date = new Date()
  const time = `${(date.getDate()).toString().padStart(2, "0")}.${(date.getMonth() + 1).toString().padStart(2, "0")}.${date.getFullYear()}  ${(date.getHours()).toString().padStart(2, "0")} : ${date.getMinutes().toString().padStart(2, "0")}`;

  const [imgUrl,setImgUrl] = useState('')

  const handleChange =(evt)=>{
    setImgUrl(window.URL.createObjectURL(evt.target.files[0]));
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const todo = {
      id: todos[0]?.id + 1 || 1,
      text: inputValue.current.value,
      time: time,
      src: imgUrl ? imgUrl:"",
    }

    setTodos([todo, ...todos])

    inputValue.current.value = ""
  }

 

  localStorage.setItem('todos', JSON.stringify(todos))
  return (
    <div>
      <div className='border-b'>
        <div className='container4'>
          <div className='d-flex align-items-center justify-content-between py-3'>
            <h3 className='home-title'>Home</h3>
            <Link to='/customize'>
              <CustomizeICon />
            </Link>
          </div>
        </div>
      </div>
      <div className='border-b'>
        <div className='container4'>
          <div className='d-flex align-items-start mb-1'>
            <img className='d-block me-3' src={Bobur} alt="Person picture" />
            <form onSubmit={handleSubmit} className='mt-3 w-100'>
              <input ref={inputValue} className='todo-input w-100' type='text' placeholder='What’s happening' />
              <ul className='d-flex align-items-center gap-3 list-unstyled mt-5'>
                <li>
                  <label>
                    <img style={{ cursor: 'pointer' }} src={Image} />
                    <input ref={photo} onChange={handleChange} className='visually-hidden' type='file' accept="image/png, image/jpeg" />
                  </label>
                </li>
                <li>
                  <img style={{ cursor: 'pointer' }} src={Gif} />
                </li>
                <li>
                  <img style={{ cursor: 'pointer' }} src={Stats} />
                </li>
                <li>
                  <img style={{ cursor: 'pointer' }} src={Smile} />
                </li>
                <li>
                  <img style={{ cursor: 'pointer' }} src={Dates} />
                </li>
              </ul>
              <button className='d-block ms-auto send-tweet' type='submit'>Tweet</button>
            </form>
          </div>
        </div>
      </div>
      <div className='border-b'>
        <div className='container4'>
          <ul className='mt-3 d-flex flex-column gap-2 list-unstyled'>
            {todos.length ? todos.map(todo => <Todo src={todo.src} time={todo.time} key={todo.id} text={todo.text} />) : ""}
          </ul>
        </div>
      </div>
    </div>
  )
}

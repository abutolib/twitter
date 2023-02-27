import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavbarTweets.css'
export const NavbarTweets = () => {
  return (
    <nav>
      <ul className='list-unstyled d-flex align-items-center justify-content-around'>
        <li  className='navbarr-item'>
          <NavLink className={({ isActive }) =>
            isActive
              ? "actives"
              : "notactives"
          } to={'tweets'} >
            Tweets
          </NavLink>
        </li>
        <li className='navbarr-item'>
          <NavLink className={({ isActive }) =>
            isActive
              ? "actives"
              : "notactives"
          } to={'with_replies'} >
            Tweets & replies
          </NavLink>
        </li>
        <li className='navbarr-item'>
          <NavLink className={({ isActive }) =>
            isActive
              ? "actives"
              : "notactives"
          } to={'media'} >
            Media
          </NavLink>
        </li>
        <li className='navbarr-item'>
          <NavLink className={({ isActive }) =>
            isActive
              ? "actives"
              : "notactives"
          } to={'likes'} >
            Likes
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

import React from 'react'
import { NavLink } from 'react-router-dom'
export const NavbarItem = ({path,img,comp}) => {
  return (
    <li className='navbar-item'>
      <NavLink className={({ isActive }) =>
        isActive
          ? "active"
          : "notactive"
      } to={path} >
        {img}{comp}
      </NavLink>
    </li>
  )
}

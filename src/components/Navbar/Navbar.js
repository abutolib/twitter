import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/logo.svg'
import { BookmarksIcon, ExploreIcon, HomeIcon, ListsIcon, MessagesIcon, MoreIcon, NoficationsIcon, ProfileIcon, TochkaIcon } from '../../assets/images/Ions'
import './Navbar.css'
import { NavbarItem } from './NavbarItem/NavbarItem'
import { Button } from '../Button/Button'
import Bobur from '../../assets/images/bobur.jpg'
import { UserName } from '../../context/nameContext'
export const Navbar = () => {

  const { name } = useContext(UserName)

  return (
    <div className=' navbar-wrapper'>
      <Link className='d-block py-4' to='/'>
        <img src={Logo} alt='Twitter logo' />
      </Link>
      <div className='d-flex flex-column justify-content-between'>
        <nav>
          <ul className='navbar-list'>
            <NavbarItem path={'/'} img={<HomeIcon />} comp={'Home'} />
            <NavbarItem path={'/explore'} img={<ExploreIcon />} comp={'Explore'} />
            <NavbarItem path={'/notifications'} img={<NoficationsIcon />} comp={'Notifications'} />
            <NavbarItem path={'/messages'} img={<MessagesIcon />} comp={'Messages'} />
            <NavbarItem path={'/bookmarks'} img={<BookmarksIcon />} comp={'Bookmarks'} />
            <NavbarItem path={'/lists'} img={<ListsIcon />} comp={'Lists'} />
            <NavbarItem path={'/profile'} img={<ProfileIcon />} comp={'Profile'} />
            <NavbarItem path={'/more'} img={<MoreIcon />} comp={'More'} />
          </ul>
          <Button type={"submit"} text={'Tweet'} />
        </nav>

        <div style={{ marginTop: '100px' }} className='d-flex align-items-center '>
          <img src={Bobur} />
          <div className='ms-2 ' style={{cursor:'pointer'}}>
            <p className='ownear-name'>{name}</p>
            <p className='ownear-nickk' >@{name.toLowerCase()}</p>
          </div>
          <span className='ms-auto' style={{cursor:'pointer'}}>
            <TochkaIcon />
          </span>
        </div>
      </div>
    </div>
  )
}

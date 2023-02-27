import React, { useContext } from 'react'
import './Profile.css'
import { BackIcon, BornIcon, DataIcon, LocationIcon, TmeIcon } from '../../assets/images/Ions'
import { TodosContext } from '../../context/todosContext'
import { UserName } from '../../context/nameContext'
import { Outlet, useNavigate } from 'react-router-dom'
import BoshIcon from '../../assets/images/BoshIcon.jpg'
import Bobur from '../../assets/images/bobur2.jpg'
import { NavbarTweets } from '../../components/NavbarTweets/NavbarTweets'

export const Profile = () => {

  const { todos } = useContext(TodosContext)
  const { name } = useContext(UserName)
  const navigate = useNavigate()


  return (
    <div className=''>
      <div className='profile-header'>
        <button onClick={() => navigate(-1)} className='back-btn'>
          <BackIcon />
        </button>
        <div>
          <h3 className='profile-owner'>
            {name}
          </h3>
          <span className='tweets-length'>{todos.length} Tweets</span>
        </div>
      </div>
      <img width={840}  src={BoshIcon} ></img>
      <div className='position-relative'>
        <img className='bobur-img d-block' src={Bobur} width={130} height={130} />
        <button className='edit-btn'>Edit profile</button>
      </div>
      <div className='container5'>
        <p className='owneer-name'>{name}</p>
        <p className='owneer-nick'>@{name.toLowerCase()}</p>
        <p className='nickk' style={{ color: '#000' }}>UX&UI designer at
          <span className='nickk'> @abutechuz</span>
        </p>
        <ul className='d-flex flex-wrap alignt-items-center gap-3 list-unstyled'>
          <li className='d-flex gap-2'>
            <LocationIcon />
            <span>Mashag’daman</span>
          </li>
          <li className='d-flex gap-2'>
            <TmeIcon />
            <span className='nickk'>t.me/boburjon_mavlonov</span>
          </li>
          <li className='d-flex gap-2'>
            <BornIcon />
            <span className=''>Born November 24, 2000</span>
          </li>
          <li className='d-flex gap-2'>
            <DataIcon />
            <span className=''>Joined May 2020</span>
          </li>
          <li className='d-flex gap-2'>
            <p><strong style={{ marginRight: '5px' }} >67</strong>Following</p>
          </li>
          <li className='d-flex gap-2'>
            <p><strong style={{ marginRight: '5px' }} >47</strong>Followers</p>
          </li>
        </ul>
        <NavbarTweets/>
        <Outlet/>
      </div>
    </div>
  )
}

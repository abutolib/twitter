import React from 'react'
import '../Trends/Trendss.css'
import Mushtariy from '../../assets/images/mushtariy.jpg'
import { Link } from 'react-router-dom'
export const  Likes = () => {
  return (
    <div className='trends-wrapper mt-3'>
      <h4 className='trends-title'>You might like</h4>
      <ul className='list-unstyled d-flex flex-column gap-3'>
        <li className='d-flex align-items-center'>
          <img src={Mushtariy} width={60} height={60}/>
          <div style={{marginLeft:'10px'}}>
            <p className='owner-name'>Mushtariy</p>
            <p className='owner-nick'>@Mushtar565266</p>
          </div>
          <button className='follow-btn ms-auto'>Follow</button>
        </li>
        <li className='d-flex align-items-center '>
          <img src={Mushtariy} width={60} height={60}/>
          <div style={{marginLeft:'10px'}}>
            <p className='owner-name'>Mushtariy</p>
            <p className='owner-nick'>@Mushtar565266</p>
          </div>
          <button className='follow-btn ms-auto'>Follow</button>
        </li>
        <li className='d-flex align-items-center'>
          <img src={Mushtariy} width={60} height={60}/>
          <div style={{marginLeft:'10px'}}>
            <p className='owner-name'>Mushtariy</p>
            <p className='owner-nick'>@Mushtar565266</p>
          </div>
          <button className='follow-btn ms-auto'>Follow</button>
        </li>
        <Link className='show-more'>Show more</Link>
      </ul>
    </div>
  )
}

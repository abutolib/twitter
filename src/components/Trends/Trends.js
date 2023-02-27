import React from 'react'
import { Link } from 'react-router-dom'
import { SettingsIcon, TochkaIcon } from '../../assets/images/Ions'
import './Trendss.css'
export const Trends = () => {
  return (
    <div className='trends-wrapper'>
      <div className='d-flex align-items-start justify-content-between'>
        <h4 className='trends-title'>Trends for you</h4>
        <span style={{cursor:'pointer'}}><SettingsIcon /></span>
      </div>
      <ul className='list-unstyled d-flex flex-column gap-3'>
        <li className='d-flex justify-content-between'>
          <div>
            <span className='trends-type'>Trending in Germany</span>
            <p className='revolution m-0'>Revolution</p>
            <span className='trends-type'>50.4K Tweets</span>
          </div>
          <span style={{cursor:'pointer'}}><TochkaIcon/></span>
        </li>
        <li className='d-flex justify-content-between'>
          <div>
            <span className='trends-type'>Trending in Germany</span>
            <p className='revolution m-0'>Revolution</p>
            <span className='trends-type'>50.4K Tweets</span>
          </div>
          <span style={{cursor:'pointer'}}><TochkaIcon/></span>
        </li>
        <li className='d-flex justify-content-between'>
          <div>
            <span className='trends-type'>Trending in Germany</span>
            <p className='revolution m-0'>Revolution</p>
            <span className='trends-type'>50.4K Tweets</span>
          </div>
          <span style={{cursor:'pointer'}}><TochkaIcon/></span>
        </li>
        <li className='d-flex justify-content-between'>
          <div>
            <span className='trends-type'>Trending in Germany</span>
            <p className='revolution m-0'>Revolution</p>
            <span className='trends-type'>50.4K Tweets</span>
          </div>
          <span style={{cursor:'pointer'}}><TochkaIcon/></span>
        </li>
        <Link className='show-more'>Show more</Link>
      </ul>

    </div>
  )
}

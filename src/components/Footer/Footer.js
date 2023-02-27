import React from 'react'
import { Likes } from '../Likes/Likes'
import { Trends } from '../Trends/Trends'
import './Trends.css'
export const Footer = () => {
  return (
    <div className='trends'>
      <form>
        <label className='search-label'>
          <input className='search-input' type='text' placeholder='Search Twitter' />
        </label>
      </form>
      <Trends />
      <Likes/>
    </div>
  )
}

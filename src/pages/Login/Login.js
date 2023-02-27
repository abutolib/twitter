import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/logo.svg'
import './Login.css'

import { Button } from '../../components/Button/Button'
export const Login = () => {
  return (
    <div className='container2'>
      <Link to='/'><img src={Logo} className='mt-5' alt='Twitter logo' /></Link>
      <h1 className='login-title'>Log in to Twitter</h1>
      <form>
        <input required className='w-100 name-input mt-5 mb-4' type='tel' placeholder='Phone number, email address'/>
        <input required className='w-100 name-input mb-4' type='password' placeholder='Password'/>
        <Button type={'submit'} text={'Log in'} />
      </form>
      <ul className='d-flex align-items-center justify-content-between list-unstyled mt-5'>
        <li>
        <Link className='text-decoration-none' to='/forgot'>Forgot password?</Link>
        </li>
        <li>
        <Link className='text-decoration-none' to='/signup'>Sign up to Twitter</Link>
        </li>
      </ul>
    </div>
  )
}

import React, { useContext, useRef } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/logo.svg'
import { Button } from '../../components/Button/Button'
import { UserName } from '../../context/nameContext'
import { useNavigate } from 'react-router-dom'
import './SignUp.css'
import { Home } from '../Home/Home'

export const SignUp = () => {

  const navigate = useNavigate()

  const { name, setName } = useContext(UserName)

  const userName = useRef()
  const userTel = useRef()

  const handleSubmit = (evt) => {
    evt.preventDefault()
    setName(userName.current.value)
    navigate('/')

  }

  return (
    <div className='container1'>
      <img className='d-block mx-auto' style={{ paddingTop: '30px', paddingBottom: '43px' }} src={Logo} width="40" alt='Twitter logo' />
      <h1 className='signup-title'>Create an account</h1>
      <form onSubmit={handleSubmit}>
        <input ref={userName} required className='d-block w-100 mb-4 name-input' type='text' placeholder='Name' />
        <input ref={userTel} required className='d-block w-100 name-input mb-4' type='tel' placeholder='Phone number' />
        <Link to='/useemail' className='use-email'>Use email</Link>

        <h2 className='date-of-birth'>Date of birth</h2>

        <p className='date-text'>Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit. Quis bibendum ante phasellus metus, magna lacinia sed augue. Odio enim nascetur leo mauris vel eget. Pretium id ullamcorper blandit viverra dignissim eget tellus. Nibh mi massa in molestie a sit. Elit congue.</p>

        <div className='date-form'>
          <select className='month-select'>
            <option className='month-option' defaultValue='month'>Month</option>
            <option className='month-option' value='january'>January</option>
            <option className='month-option' value='february'>February</option>
            <option className='month-option' value='march'>March</option>
            <option className='month-option' value='april'>April</option>
            <option className='month-option' value='may'>May</option>
            <option className='month-option' value='june'>June</option>
            <option className='month-option' value='July'>July</option>
            <option className='month-option' value='august'>August</option>
            <option className='month-option' value='september'>September</option>
            <option className='month-option' value='october'>October</option>
            <option className='month-option' value='november'>November</option>
            <option className='month-option' value='december'>December</option>
          </select>
          <select required className='month-select day-select'>
            <option className='month-option' defaultValue='day'>Day</option>
            <option className='month-option' value='1'>1</option>
            <option className='month-option' value='2'>2</option>
            <option className='month-option' value='3'>3</option>
            <option className='month-option' value='4'>4</option>
            <option className='month-option' value='5'>5</option>
            <option className='month-option' value='6'>6</option>
            <option className='month-option' value='7'>7</option>
            <option className='month-option' value='9'>9</option>
            <option className='month-option' value='10'>10</option>
            <option className='month-option' value='11'>11</option>
            <option className='month-option' value='12'>12</option>
            <option className='month-option' value='13'>13</option>
            <option className='month-option' value='14'>14</option>
            <option className='month-option' value='15'>15</option>
            <option className='month-option' value='16'>16</option>
            <option className='month-option' value='17'>17</option>
            <option className='month-option' value='18'>18</option>
            <option className='month-option' value='19'>19</option>
            <option className='month-option' value='20'>20</option>
            <option className='month-option' value='21'>21</option>
            <option className='month-option' value='22'>22</option>
            <option className='month-option' value='23'>23</option>
            <option className='month-option' value='24'>24</option>
            <option className='month-option' value='25'>25</option>
            <option className='month-option' value='26'>26</option>
            <option className='month-option' value='28'>28</option>
            <option className='month-option' value='29'>29</option>
            <option className='month-option' value='30'>30</option>
            <option className='month-option' value='31'>31</option>
          </select>
          <select required className='month-select day-select year-select day-select'>
            <option className='month-option' defaultValue='year'>Year</option>
            <option className='month-option' value='2015'>2015</option>
            <option className='month-option' value='2014'>2014</option>
            <option className='month-option' value='2013'>2013</option>
            <option className='month-option' value='2012'>2012</option>
            <option className='month-option' value='2011'>2011</option>
            <option className='month-option' value='2010'>2010</option>
            <option className='month-option' value='2009'>2009</option>
            <option className='month-option' value='2008'>2008</option>
            <option className='month-option' value='2007'>2007</option>
            <option className='month-option' value='2006'>2006</option>
            <option className='month-option' value='2005'>2005</option>
            <option className='month-option' value='2004'>2004</option>
            <option className='month-option' value='2003'>2003</option>
            <option className='month-option' value='2002'>2002</option>
            <option className='month-option' value='2001'>2001</option>
            <option className='month-option' value='2000'>2000</option>
            <option className='month-option' value='1999'>1999</option>
            <option className='month-option' value='1998'>1998</option>
            <option className='month-option' value='1997'>1997</option>
            <option className='month-option' value='1996'>1996</option>
            <option className='month-option' value='1995'>1995</option>
            <option className='month-option' value='1994'>1994</option>
            <option className='month-option' value='1993'>1993</option>
            <option className='month-option' value='1992'>1992</option>
            <option className='month-option' value='1991'>1991</option>
            <option className='month-option' value='1990'>1990</option>


          </select>
        </div>
        <Button type={'submit'} text={'Next'} />
      </form>



    </div>
  )
}

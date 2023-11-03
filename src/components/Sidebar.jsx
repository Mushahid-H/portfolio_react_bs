import React from 'react'

import ProfilePic from '../assets/profile.JPG'
import './Sidebar.css'

import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div>
      <div
        className='d-md-flex flex-column align-items-between justify-content-between py-4 slide 
        '
      >
        <div className='text-center'>
          <img
            src={ProfilePic}
            alt='profile pic'
            height={110}
            width={110}
            className='image-fluid rounded-circle '
          />
        </div>

        <div className='text-center my-3'>
          <h4 className='h5 fw-bold '>Mushahid Hussain</h4>
          <span className='fw-thiner small '>Front-end Developer/Designer</span>
        </div>

        <ul className='list-unstyled d-flex flex-md-column flex-row align-items-center justify-content-center gap-3 flex-wrap gap-md-3'>
          <li>
            <NavLink id='home' to='/' className='links'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink id='about' to='/about' className='links'>
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              id='ser'
              to='/services'
              className='links'
              activeclassName={` active`}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to='/skills' className='links'>
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink to='/education' className='links'>
              Education
            </NavLink>
          </li>
          <li>
            <NavLink to='/experience' className='links'>
              Experience
            </NavLink>
          </li>
          <li>
            <NavLink to='/work' className='links'>
              Work
            </NavLink>
          </li>
          <li>
            <NavLink to='/contact' className='links'>
              Contact
            </NavLink>
          </li>
        </ul>
        <div className='text-muted fw-thin text-center small d-md-block d-none'>
          &copy; Copyrigths @2023 All rights reserved | This <br />
          is made by Mushahid Hussain
        </div>
      </div>
    </div>
  )
}

export default Sidebar

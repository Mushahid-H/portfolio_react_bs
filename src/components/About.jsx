import React from 'react'
import { Lightbulb } from 'react-bootstrap-icons'
import { Globe } from 'react-bootstrap-icons'
import { Database } from 'react-bootstrap-icons'
import { Phone } from 'react-bootstrap-icons'
import './About.css'

const About = () => {
  return (
    <div className='sectionAbout text-black  my-3 '>
      <small className='text-muted fw-thin text-uppercase'>About Us</small>

      <h5 className='h5 text-black my-3'>WHO AM I?</h5>
      <p className='text-muted my-3'>
        <span className='fw-bold text-muted'>Hi I'm Mushahid Hussain,</span>a
        seasoned professional with over 4 years in Web development, brings a
        wealth of experience and accomplishments to the table. As a Software
        Engineer, I have excelled in web application development.
        <br /> <br /> This portfolio showcases a journey marked by achievements
        such as Responsive Web designing, highlighting my unwavering commitment
        to innovation and excellence. With a focus on Web development, I invite
        you to explore a world seen through a unique perspective – a world where
        dedication and expertise converge.
      </p>

      <div className='row my-5 gap-md-0 gap-3'>
        <div className='col-md-3'>
          <div class='card p-3 borde-bottom  border-primary'>
            <Lightbulb className='text-primary fs-2' />
            <div class='card-body'>
              <p class='card-title fs-6'>Graphic Design</p>
            </div>
          </div>
        </div>
        <div className='col-md-3'>
          <div class='card p-3 borde-bottom  border-danger'>
            <Globe className='text-danger fs-2' />
            <div class='card-body'>
              <p class='card-title fs-6'>Web Design</p>
            </div>
          </div>
        </div>
        <div className='col-md-3'>
          <div class='card p-3 borde-bottom  border-warning'>
            <Database className='text-warning fs-2' />
            <div class='card-body'>
              <p class='card-title fs-6'>Software Eng.</p>
            </div>
          </div>
        </div>
        <div className='col-md-3'>
          <div class='card p-3 border  border-success'>
            <Phone className='text-success fs-2' />
            <div class='card-body'>
              <p class='card-title fs-6'>Flutter App.</p>
            </div>
          </div>
        </div>
      </div>

      <div className='row gap-4 my-5 bg-warning p-5'>
        <h3 className='gap-5'>
          I am happy to let you know that I have
          <br /> completed 50+ projects sucessfully!
        </h3>
        <div>
          <button className='btn btn-outline-dark'>Hire Me</button>
        </div>
      </div>
    </div>
  )
}

export default About

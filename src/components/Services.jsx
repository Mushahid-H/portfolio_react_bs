import React from 'react'
import {
  Lightbulb,
  CSquare,
  Phone,
  MenuApp,
  PersonBadge,
  GraphDown,
} from 'react-bootstrap-icons'
import './Services.css'
const Services = () => {
  return (
    <>
      <div className='row text-black my-3'>
        <small className='text-muted fw-thin text-uppercase'>WHAT I DO?</small>

        <h5 className='h5 text-black  mt-3 mb-5'>
          HERE ARE SOME OF MY EXPERTISE
        </h5>

        <div className='col-md-4 text-center d-flex flex-column align-items-center my-5'>
          <div
            id='hexagon'
            className='d-flex justify-content-center align-items-center'
          >
            {<MenuApp className='text-white fs-2 z-index-2 ' />}
          </div>
          <div class='card p-3 border  border-primary shadow rounded-0'>
            <div class='card-body'>
              <p class='card-title fs-5 fw-bold'>Front-end Developer</p>
              <p className='card-text text-muted mt-3'>
                Separated they live in Bookmarksgrove right at the coast of the
                Semantics
              </p>
            </div>
          </div>
        </div>
        <div className='col-md-4 text-center d-flex flex-column align-items-center my-5'>
          <div
            id='hexagon1'
            className='d-flex justify-content-center align-items-center '
          >
            {<PersonBadge className='text-white fs-2 z-index-2 ' />}
          </div>
          <div class='card p-3 border  border-danger shadow rounded-0'>
            <div class='card-body'>
              <p class='card-title fs-5 fw-bold'>React Developer</p>
              <p className='card-text text-muted mt-3'>
                Separated they live in Bookmarksgrove right at the coast of the
                Semantics
              </p>
            </div>
          </div>
        </div>
        <div className='col-md-4 text-center d-flex flex-column align-items-center my-5'>
          <div
            id='hexagon2'
            className='d-flex justify-content-center align-items-center'
          >
            {<CSquare className='text-white fs-2 z-index-2 ' />}
          </div>
          <div class='card p-3 border  border-warning shadow rounded-0'>
            <div class='card-body'>
              <p class='card-title fs-5 fw-bold'>C# Development</p>
              <p className='card-text text-muted mt-3'>
                Separated they live in Bookmarksgrove right at the coast of the
                Semantics
              </p>
            </div>
          </div>
        </div>
        <div className='col-md-4 text-center d-flex flex-column align-items-center my-5'>
          <div
            id='hexagon3'
            className='d-flex justify-content-center align-items-center'
          >
            {<Phone className='text-white fs-2 z-index-2 ' />}
          </div>
          <div class='card p-3 border  border-secondary shadow rounded-0'>
            <div class='card-body'>
              <p class='card-title fs-5 fw-bold'>Flutter Development</p>
              <p className='card-text text-muted mt-3'>
                Separated they live in Bookmarksgrove right at the coast of the
                Semantics
              </p>
            </div>
          </div>
        </div>
        <div className='col-md-4 text-center d-flex flex-column align-items-center my-5'>
          <div
            id='hexagon4'
            className='d-flex justify-content-center align-items-center'
          >
            {<Lightbulb className='text-white fs-2 z-index-2 ' />}
          </div>
          <div class='card p-3 border  border-success shadow rounded-0'>
            <div class='card-body'>
              <p class='card-title fs-5 fw-bold'>Problem Solving</p>
              <p className='card-text text-muted mt-3'>
                Separated they live in Bookmarksgrove right at the coast of the
                Semantics
              </p>
            </div>
          </div>
        </div>
        <div className='col-md-4 text-center d-flex flex-column align-items-center my-5'>
          <div
            id='hexagon5'
            className='d-flex justify-content-center align-items-center'
          >
            {<GraphDown className='text-white fs-2 z-index-2 ' />}
          </div>
          <div class='card p-3 border  border-info shadow rounded-0'>
            <div class='card-body'>
              <p class='card-title fs-5 fw-bold'>Graphic Designing</p>
              <p className='card-text text-muted mt-3'>
                Separated they live in Bookmarksgrove right at the coast of the
                Semantics
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services

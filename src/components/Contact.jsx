import React from 'react'
import { Globe2, Map, Telephone } from 'react-bootstrap-icons'

const Contact = ({ Email, Address, PhnoneNo }) => {
  return (
    <div className='row my-3 g-md-3 g-2'>
      <small className='text-muted fw-thin text-uppercase small'>
        GET IN TOUCH
      </small>

      <h5 className='h5 text-black my-3 '>CONTACT</h5>
      <div className='col-md-6 d-flex align-items-start flex-column justify-content-center g-md-3 g-1 gap-md-3 gap-1  '>
        <div className='row'>
          <div className='col d-flex gap-md-4 gap-3 align-items-center'>
            <div
              style={{ height: '100px', width: '100px', minWidth: '100px' }}
              className=' bg-light d-flex align-items-center justify-content-center rounded'
            >
              <Globe2 className='fs-3 text-primary ' />
            </div>
            <p className=' text-primary'>{Email}</p>
          </div>
        </div>
        <div className='row'>
          <div className='col d-flex gap-md-4 gap-3 align-items-center'>
            <div
              style={{ height: '100px', width: '100px', minWidth: '100px' }}
              className=' bg-light d-flex align-items-center justify-content-center rounded'
            >
              <Map className='fs-3 text-primary ' />
            </div>
            <p className=' text-primary'>
              {'Jalandhar Parachinar, Kurram Agency KPK, Pakistan.'}
            </p>
          </div>
        </div>
        <div className='row'>
          <div className='col d-flex gap-md-4 gap-3 align-items-center'>
            <div
              style={{ height: '100px', width: '100px', minWidth: '100px' }}
              className=' bg-light d-flex align-items-center justify-content-center rounded'
            >
              <Telephone className='fs-3 text-primary ' />
            </div>
            <p className=' text-primary'>{PhnoneNo}</p>
          </div>
        </div>
      </div>
      <div className='col-md-6 d-flex align-items-start justify-content-center flex-column gap-md-3 gap-1'>
        <div className='form-group w-md-75 w-100'>
          <input
            type='text'
            placeholder='Name'
            className='p-2 bg-light border-0 w-100 text-muted'
          />
        </div>
        <div className='form-group w-md-75 w-100'>
          <input
            type='email'
            placeholder='Email'
            className='p-2 w-100 bg-light border-0 text-muted'
          />
        </div>
        <div className='form-group w-md-75 bg-light border-0 w-100'>
          <input
            type='text'
            placeholder='Subject'
            className='p-2 w-100 bg-light border-0 text-muted'
          />
        </div>
        <div className='form-group w-md-75 w-100'>
          <textarea
            className='form-control bg-light border-0 text-muted focus-ring-none'
            placeholder='Message'
            rows='4'
            cols='40'
          ></textarea>
          <button className='btn btn-primary text-white text-uppercase rounded-0 mt-2'>
            Send Message
          </button>
        </div>
      </div>
    </div>
  )
}

export default Contact

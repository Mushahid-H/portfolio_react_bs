import React from 'react'
import { Pen } from 'react-bootstrap-icons'

const ExperienceCard = ({ title, sDate, eDate, description, color }) => {
  return (
    <div className='d-flex gap-3 g-4'>
      <div className='col-1'>
        <div className='d-flex flex-column align-items-center'>
          <div
            className={` bg-${color} rounded-circle d-flex justify-content-center align-items-center`}
            style={{ height: '40px', width: '40px' }}
          >
            <Pen size={20} color='white' className='text-center' />
          </div>
          <div
            className='bg-light'
            style={{ height: '100px', width: '5px' }}
          ></div>
        </div>
      </div>
      <div className='col-10 bg-light rounded p-md-3 p-1'>
        <h5>
          {title}{' '}
          <span className='text-muted small fs-6'>
            {sDate}-{eDate}
          </span>
        </h5>
        <div>{description}</div>
      </div>
    </div>
  )
}

export default ExperienceCard

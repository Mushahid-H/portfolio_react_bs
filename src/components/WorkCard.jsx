import React from 'react'
import './workcard.css'
const WorkCard = ({ src, href }) => {
  return (
    <div className='col-md-4' data-mdb-ripple-color='light'>
      <a href={href}>
        <img
          src={src}
          alt=''
          className='img-fluid h-100 w-100 '
          style={{ objectFit: 'Fill', objectPosition: 'center' }}
        />
      </a>
    </div>
  )
}

export default WorkCard

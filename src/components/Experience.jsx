import React from 'react'

import ExperienceCard from './ExperienceCard'
const Experience = () => {
  return (
    <div className='row my-3'>
      <small className='text-muted fw-thin text-uppercase'>EXPERIENCE</small>
      <h5 className='h5 text-black  my-3 '>WORK EXPERIENCE</h5>

      <ExperienceCard
        title='Full Stack Developer'
        sDate='2017'
        eDate='2018'
        color='primary'
        description={
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas minima tenetur culpa facere! Hic corporis consectetur libero saepe doloremque unde labore eum, sapiente perferendis eaque, excepturi corrupti error, quas quibusdam. '
        }
      />
      <ExperienceCard
        title='C# Developer'
        sDate='2018'
        eDate='2020'
        color='warning'
        description={
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas minima tenetur culpa facere! Hic corporis consectetur libero saepe doloremque unde labore eum, sapiente perferendis eaque, excepturi corrupti error, quas quibusdam. '
        }
      />
      <ExperienceCard
        title='Cyber-security Analyst'
        sDate='2020'
        eDate='2023'
        color='danger'
        description={
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas minima tenetur culpa facere! Hic corporis consectetur libero saepe doloremque unde labore eum, sapiente perferendis eaque, excepturi corrupti error, quas quibusdam. '
        }
      />
    </div>
  )
}

export default Experience

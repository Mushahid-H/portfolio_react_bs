import React from 'react'
import ProgressBar from './ProgressBar'
const Skills = () => {
  return (
    <div className='text-black  my-3'>
      <small className='text-muted fw-thin text-uppercase'>MY SPECIALTY</small>

      <h5 className='h5 text-black  my-3'>MY SKILLS</h5>

      <div className='row'>
        <p className='text-muted'>
          I possess a diverse skill set honed over 4 years of experience in web
          development. From HTML, CSS, Bootstrap,JavaScript, Reactjs, to Nodejs,
          Mongodb, Expressjs Flutter and Project Management, my expertise is a
          testament to a commitment to excellence and continuous growth. Explore
          the array of talents that drive success in every project
        </p>
      </div>

      <div className='row '>
        <div className='col-md-5'>
          <ProgressBar title={'Reactjs'} percentage={80} color={'primary'} />
        </div>
        <div className='col-md-5'>
          <ProgressBar title={'Bootstrap'} percentage={85} color={'danger'} />
        </div>

        <div className='col-md-5'>
          <ProgressBar title={'CSS'} percentage={75} color={'warning'} />
        </div>
        <div className='col-md-5'>
          <ProgressBar title={'Flutter'} percentage={50} color={'dark'} />
        </div>

        <div className='col-md-5'>
          <ProgressBar title={'C#'} percentage={70} color={'secondary'} />
        </div>
        <div className='col-md-5'>
          <ProgressBar title={'UI/UX'} percentage={80} color={'info'} />
        </div>
      </div>
    </div>
  )
}

export default Skills

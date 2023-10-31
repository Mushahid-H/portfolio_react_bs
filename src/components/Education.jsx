import React from 'react'
import EducationAccord from './EducationAccord'

const Education = () => {
  return (
    <div className='my-3'>
      <small className='text-muted fw-thin text-uppercase'>EDUCATION</small>

      <h5 className='h5 text-black my-3 '>EDUCATION</h5>

      <p className='my-4 text-muted'>
        My educational journey is a testament to a commitment to knowledge and
        excellence. From the foundational years at Medal School, where a passion
        for learning was ignited, to the formative years of Higher Secondary
        School that honed academic skills, and culminating in a Bachelor's
        degree in Computer Science and Software Engineering, each step has
        contributed to a well-rounded, versatile education. These academic
        milestones have instilled a diverse skill set, a strong work ethic, and
        a passion for innovation. They are the pillars upon which my
        professional success has been built. Explore this section to trace the
        evolution of a dedicated learner and practitioner.
      </p>
      <EducationAccord
        headerId={'headingOne'}
        collapseId={'collapseOne'}
        degName={'Bachelor Degree of Computer Science'}
        description={
          "I holds a Bachelor's degree in Computer Science and Software Engineering, equipping with a strong foundation in software development, algorithms, and problem-solving. This education cultivated a passion for innovation and adaptability in the ever-evolving tech world. Notable accomplishments include Web development and project management, demonstrating a commitment to excellence. This academic foundation continues to drive my success and keeps them at the forefront of technological advancements."
        }
        year={'2020-continues'}
      />
      <EducationAccord
        headerId={'headingTwo'}
        collapseId={'collapseTwo'}
        degName={'High School Secondary Education'}
        description={
          "My journey into the world of knowledge began at the Higher Secondary School level. Here, a solid academic foundation was laid, and a curiosity for learning ignited. With a focus on [mention any specific subjects or areas of interest], Mushahid's performance consistently demonstrated a thirst for knowledge and an ability to excel.This educational phase marked the beginning of a path that ultimately led to a Bachelor's degree in Computer Science and Software Engineering, setting the stage for a successful academic and professional journey."
        }
        year={'2017-2019'}
      />
      <EducationAccord
        headerId={'headingThree'}
        collapseId={'collapseThree'}
        degName={'Medal School Education'}
        description={
          'Medal School was where my educational voyage truly began. These formative years were marked by curiosity, dedication, and the pursuit of excellence. Here, the foundation for a lifelong love of learning was laid, and the seeds of ambition were sown. My experience at Medal School fostered a strong work ethic, a thirst for knowledge, and a determination to succeed. It was the first stepping stone on a path that has led to significant academic and professional accomplishments.'
        }
        year={'2002-2017'}
      />
    </div>
  )
}

export default Education

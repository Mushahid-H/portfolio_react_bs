import React from 'react'
import WorkCard from './WorkCard'
import bs1 from '../assets/bs1.PNG'
import bs2 from '../assets/bs2.PNG'
import bs3 from '../assets/bs3.PNG'
import bs4 from '../assets/bs4.PNG'

const Work = () => {
  return (
    <div className='my-3'>
      <small className='text-muted fw-thin text-uppercase'>MY WORK</small>

      <h5 className='h5 text-black mt-2 mb-md-3 mb-2'>RECENT WORK</h5>
      <div className='row my-3 g-md-4 g-3' style={{ height: '150px' }}>
        <WorkCard src={bs1} href={'https://chariteeclone.netlify.app'} />
        <WorkCard src={bs2} href={'https://practicewebclone.netlify.app'} />
        <WorkCard src={bs3} href={'https://hasthemesclone.netlify.app'} />
        <WorkCard src={bs4} href={'https://chariteeclone.netlify.app'} />
        {/* <WorkCard src={bs2} href={'https://practicewebclone.netlify.app'} />
        <WorkCard src={bs3} href={'https://hasthemesclone.netlify.app'} /> */}
      </div>
    </div>
  )
}

export default Work

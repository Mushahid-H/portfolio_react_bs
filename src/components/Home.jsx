import React from 'react'
import { useState } from 'react'
import './home.css'
const Home = () => {
  const header1 = `I am Mushahid`
  const header2 = 'a Front-End Developer'

  const [header, setHeader] = useState(header1)
  const interval = () => {
    setInterval(() => {
      if (header === header1) {
        setHeader(header2)
      } else setHeader(header1)
    }, 10000)
    return () => clearInterval(interval)
  }
  return (
    <section>
      <div className='row d-flex justify-content-center'>
        <div className={`${header === header1 ? 'bckPic' : 'bckPic2'}`}>
          <div
            className='d-flex  mx-0 px-0 flex-column justify-content-center align-items-sm-start align-items-center'
            style={{ height: '100vh' }}
          >
            <h1 className='h1 fw-bold fs-1 text-primary'>
              {header === header1 ? 'Hi!' : 'I am,'}
              <br />
              {header}
              {interval()}
            </h1>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home

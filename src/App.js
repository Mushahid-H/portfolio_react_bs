import './App.css'
import Sidebar from './components/Sidebar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Skills from './components/Skills'
import { List } from 'react-bootstrap-icons'
import Education from './components/Education'
// import { useState } from 'react'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Work from './components/Work'

function App() {
  // const [header, setHeader] = useState(true)
  return (
    <BrowserRouter>
      <div className='row g-0 d-flex justify-content-md-start '>
        <div
          className='col-md-3 d-md-block px-0 collapse  menu sticky-md-top  top-md-0 left-md-0'
          style={{
            height: '100vh',
            backgroundColor: '#f2f3f7',
            // zIndex: '-99',
          }}
          id='collapseit'
        >
          <Sidebar />
        </div>
        <div className=' d-md-none '>
          <List
            size={40}
            className='ms-4 mt-3 '
            data-bs-toggle='collapse'
            data-bs-target='#collapseit'
            aria-expanded='false'
            aria-controls='collapseit'
          />
        </div>

        <div className='col-md-9  px-5  justify-content-end'>
          <div className='col'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/services' element={<Services />} />
              <Route path='/skills' element={<Skills />} />
              <Route path='/education' element={<Education />} />
              <Route path='/experience' element={<Experience />} />
              <Route
                path='/contact'
                element={
                  <Contact
                    Email={'info@gmail.com'}
                    Address={'Nisar Ahmed Siddiqui Road Sukkur Sindh, Pakistan'}
                    PhnoneNo={' 071-5644000-05'}
                  />
                }
              />
              <Route path='/work' element={<Work />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App

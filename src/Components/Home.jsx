import React from 'react'
import Navbar from './Navbar'
import Main from './Main'
import About from './About'
import Skills from './Skills'
import Contact from './Contact'
import Footer from './Footer'

function Home() {
  return (
    <div>
           <Navbar/>
            <Main/>
            <About/>
            <Skills/>
            <Contact/>
            <Footer/>

    </div>
  )
}

export default Home
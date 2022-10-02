import React from 'react'
import Navbar from './Navbar'
import './Main.css'
import image from '../images/IMG-1849.jpg'
import img2 from '../images/dach.jpg'

function Main() {
  return (
    <div>
      <Navbar/>
    <div className='portfolio-container'>
            <div className="Portfolio-main">
                <div className="portfolio-heading">
                    <p>I'm</p>
                    <h2><span className="span"> Maryam Suleiman,</span></h2>
                    <p>A front-End Web Developer.</p>
                    <button className="btn">Contact Me</button>
                    
                </div>
                <div >
                    <img src={image} alt='me'/>
                </div>
            </div>
            <div className='About'>
                  <h2>About me.</h2>
                   <div className='About-main'>
                    <div className='img'>
                      <img src={img2} alt="" />
                    </div>
                    <div>
                      <p>
                         My name is Maryam Suleiman.A graduate of Computer Science at Ahmadu Bello University Zaria.Also an enthusiasic junior Frontend Developer specializing in  building functional and  responsive web pages.
                      </p>
                      <p>
                        I build projects using HTML,CSS,Javascript and React.

                      </p>
                      
                    </div>

                   </div>
           </div>
           <div className='Skills'>
            <div className='Skills-container'>
                 <h2>Skills.</h2>
            </div>
            <div className='Skills2'>
                   <div className='skills-card'>
                   <img src="" alt="" />
                   <p>HTML</p>
                  </div>
                  <div className='skills-card'>
                  <img src="" alt="" />
                   <p>CSS</p>
                  </div>
                 <div className='skills-card'>
                 <img src="" alt="" />
                  <p>JavaScript</p>
                   </div>
                <div className='skills-card'>
                   <img src="" alt="" />
                   <p>React</p>
                 </div>
         </div>


           </div>

    </div>
                
    </div>
    





  )
}

export default Main
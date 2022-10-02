import React from 'react'
import Navbar from './Navbar'
import './Main.css'
import image from '../images/IMG-1849.jpg'

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
                <div>
                    <img src={image} alt='me'/>
                </div>
            </div>
            <div className='About'>
                  <h2>About me.</h2>
                   <div>
                    <div>
                      <img src="" alt="" />
                    </div>
                    <div>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, nesciunt aperiam fugiat accusantium quas quo sapiente veritatis debitis doloribus expedita vitae commodi eius ex quaerat, repudiandae ullam ad porro laborum!
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, deleniti sunt at quas excepturi nobis doloremque sed minus ullam eaque impedit cum, tempore voluptate voluptates, exercitationem quod earum. Modi, rem.
                      </p>
                      
                    </div>

                   </div>
           </div>

    </div>
                
    </div>
    





  )
}

export default Main
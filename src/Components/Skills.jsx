import React from 'react'
import './Skills.css'

function Skill() {
  return (
    <div className='Skills'>
          <div className='skills-h3'>
             <h3>Technical Skills.</h3>
           </div>
           <div className='skills-main'>

           <div className='skills-img'>
               <img src="./images/html-logo..svg" alt="html" />
               <img src="./images/css-logo.svg" alt="css" />
               <img src="./images/js-logo.svg" alt="js" />
               <img src="./images/react-logo.svg" alt="react" />
          </div>

           <div className='skills-img'>
              
              <img src="./images/nodejs..svg" alt="node"/>
               <img src="./images/git-logo..svg" alt="css" />
               <img src="./images/tailwind-logo..svg" alt="tailw" />
               <img src="./images/npm-logo..svg" alt="npm"/>
               

          </div> 
           </div>


    </div>
  )
}

export default Skill
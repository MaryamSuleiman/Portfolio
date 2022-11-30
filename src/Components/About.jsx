import React from 'react'
import './About.css'
import innah from "../images/innah.jpg"

function About() {
  return (
<div className='About'>
        <div className='About-h3'>
            <h3>About me.</h3>
         </div>
    <div className='About-main'>
        
         <div className='About-img'>
           {/* <div className='about-border'></div>  */}
             <img src={innah} alt="me" />
         </div> 

         <div className='About-p'>
             <p>My name is Maryam Suleiman, a Front-End Web Developer. I love building functional and responsive websites </p>
             <p>I work primarily with MongoDB, Express, React, Node, and Javascript and have set up countless and Shopify websites. My previous career was as an IT Consultant, E-commerce Business Owner, and Digital Marketer. I also really enjoy tinkering with CSS.
             In my spare time, I play video games and also work out."</p>
      
          </div>
   

   </div>
  
   
</div>

  )
}

export default About
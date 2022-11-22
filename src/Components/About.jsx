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
           <div className='about-border'></div> 
             <img src={innah} alt="me" />
         </div> 

         <div className='About-p'>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ab corporis eligendi aut veniam culpa? Natus error, optio accusamus voluptas inventore ab impedit incidunt. Ad, accusantium. Vel, provident. Et, hic.</p>
             <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A voluptas nemo saepe inventore facilis eveniet tenetur quis. Inventore similique architecto quo ipsa obcaecati ipsum commodi eos, at esse incidunt iste.</p>
      
          </div>
   

   </div>
  
   
</div>

  )
}

export default About
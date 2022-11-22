import React from 'react'
import './Navbar.css'


function Navbar() {
  return (
   
    <div className='nav-bar'>
       
    
       <div className='Nav-header'>
          <h2> {"<Maryam />"} </h2>
        </div>

        <div className='Nav-li' >
              <li>Home</li>
               <li>About</li>
               <li>Skills</li>
               <li>Services</li>
               <li>Contact</li>
    
              <button className='nav-btn'> Resume </button>
            
        </div>
        
      
  
      
    </div>
  )
}

export default Navbar
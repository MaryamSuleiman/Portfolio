import React from 'react'
import './Contact.css'
import { Phone,Envelope,NavigationArrow } from 'phosphor-react'

function Contact() {
  return (
    <div className='contact-container'>
      <div className='contact-h3'>
          <h3>Contact me</h3>
      </div>
      <div className='contact-main'>
        <div className=''>
            <p className='contact-p'>
           Let's make something new, different and more meaningful or make something visually   pleasing..<span className='spn'>Just Say Hello!</span> 
          </p>
          <div className='icons'>
            <div className='contact-icon'>
              <Phone size={30} weight="thin" color= "#cec7c1" />
              <li>08064707538</li>
            </div>

            <div className='contact-icon'>
                <Envelope size={30} weight="thin" color='#f88225' />
                 <li>Marsulaiman94@gmail.com</li>
            </div>

            <div className='contact-icon'>
                <NavigationArrow size={30} weight="thin"  color= "#cec7c1"/>
                <li>Abuja,Nigeria</li>
            </div>
            
             

          </div>
          

        </div>

      
      
      
      </div>
     
    </div>
  )
}

export default Contact


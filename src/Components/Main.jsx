import React from 'react'
import Navbar from './Navbar'
import './Main.css'
import { GithubLogo,InstagramLogo,FacebookLogo,TwitterLogo,Envelope} from 'phosphor-react'

function Main() {
  return (
    <>
     <Navbar/>
    <div className='portfolio-container'>
      <div className='portfolio-main'>
        <p><span className='p'> Hi,my name is</span></p>
        <h2 className='h2-'>Maryam Suleiman.</h2>
        <h2><span className='h2'>I build things for the web</span></h2>
      </div>
      <div className='portfolio-intro'>
          <p>I'm a frontend developer specialized in building functional and responsive websites.</p>
      </div>
      <div className='portfolio-icons'>
           <div className='portfolio-icon'>
               <GithubLogo size={35} weight="thin" color='pink' />
           </div>
            <div className='portfolio-icon'>
                 <InstagramLogo size={35} weight="thin" color='pink'/>
            </div>
            <div className='portfolio-icon'>
                 <FacebookLogo size={35} weight="thin"color='pink' />
             </div>
             <div className='portfolio-icon'>
                   <TwitterLogo size={35} weight="thin" color='pink'/>
             </div>
            <div className='portfolio-icon'>
                 <Envelope size={35} weight="thin"color='pink' />
            </div>
      </div>
    </div>
    </>
  )
}

export default Main
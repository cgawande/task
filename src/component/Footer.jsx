import React from 'react'
import "./footer.css"

function Footer() {
  return (
    <div className='footer'>

      <div className='flex'>
        <h4>Home</h4>
       <div className='line'></div>
        <h4>Terms and condition</h4>
        <div className='line'></div>
        <h4>privacy Policy</h4>
        <div className='line'></div>
        <h4>collection statement</h4>
        <div className='line'></div>
        <h4>Help</h4>
        <div className='line'></div>
        <h4>Manage Account</h4>
        <div className='line'></div>
      </div>
    

    <div>
      <div>
        <img className='logo' src="/assets/social/facebook-white.svg" alt=".."/>
        <img className='logo' src="/assets/social/instagram-white.svg" alt=".."/>
        <img className='logo' src="/assets/social/twitter-white.svg" alt=".."/>
      </div>


    </div>
    
  </div>
  )
}

export default Footer

import React from 'react'
import Navbar from '../../components/Navbar'
import './Header.css'

export default function Header() {
  return (
    <>
        <div className='navbar'>
        {/* <Navbar/> */}
        </div>
        <div className="header">
            <div className="header-title">
                <h1>SVNIT - ACHIVEMENT - PORTAL </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
                <button className="btn-get-started">Get Started</button>
            </div>
            <div className='header-content'>
              <img src="./assets/1.jpeg"/>
              <div className="header-quote">
                  <div className='blockQuote'>
                      "Message from creators."
                      <div className='footer'>Ralph Waldo Emerson</div>
                  </div>
              </div> 
             </div>
        </div>
        
        
    </>
  )
}

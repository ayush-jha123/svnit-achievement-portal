import React from 'react'
import './Navbar.css'
import Navbuttons from './NavBarButton/Navbuttons'


export default function Navbar() {
  return (
    <>
        <div className='navbar'>
          <div className='title'>
            <img  src='./assets/logo.svg'></img>
            <div className='name'> Achievo </div>
          </div>
          <div className='buttons'>
          <Navbuttons/>
          </div>

          <div className='LogIn'> LogIn </div>
        </div>
    </>
  )
}

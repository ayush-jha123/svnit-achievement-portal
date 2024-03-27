import React from 'react'
import './Navbar.css'
import Navbuttons from './NavBarButton/Navbuttons'
import Navbutton from './NavBarButton/Navbutton'
import { Link } from 'react-router-dom'


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
          <Link to={"/Login"} style={{textDecoration:"none"}}><Navbutton title="LOG IN"/></Link>
          {/* <div className='LogIn'> LogIn </div> */}
        </div>
    </>
  )
}

import React from 'react'
import './Navbuttons.css'
import Navbutton from './Navbutton'
import { Link } from 'react-router-dom';

export default function Navbuttons() {
  return ( 
    <div className='buttons'>
      <Link to={"/"} style={{textDecoration:"none"}}><Navbutton title="HOME"/></Link>
      <Link to={"/Achivements"} style={{textDecoration:"none"}}><Navbutton title="ACHIVEMENTS"/></Link>
      <Link to={"/Opportunities"} style={{textDecoration:"none"}}><Navbutton title="OPPORTUNITITES"/></Link>
      <Link to={"/Dashboard"} style={{textDecoration:"none"}}><Navbutton title="DASHBOARD"/></Link>
    </div>
  )
}

import React from 'react'
import Navbutton from './Navbutton'
import { Link } from 'react-router-dom';

export default function Navbuttons() {
  return (
    <div className='buttons flex'>
      <Link to={"/"} style={{ textDecoration: "none" }}><Navbutton title="HOME" /></Link>
      <Link to={"/Achivements"} style={{ textDecoration: "none" }}><Navbutton title="ACHIVEMENTS" /></Link>
      <Link to={"/Opportunities"} style={{ textDecoration: "none" }}><Navbutton title="OPPORTUNITITES" /></Link>
      <Link to={"/Dashboard"} style={{ textDecoration: "none" }}><Navbutton title="DASHBOARD" /></Link>
    </div>
  )
}

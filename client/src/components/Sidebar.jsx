// sidebar
import React,{useState} from 'react'
import './Sidebar.css'

const Sidebar = ({handler}) => {
  return (
    <div className="sidebar">
        <ul id="list">
            <li><span><button onClick={()=>handler('Academics')}>Academics</button></span></li>
            <li><span><button onClick={()=>handler('Extracurricular')}>Extracurricular</button></span></li>
            <li><span><button onClick={()=>handler('Placement')}>Placement</button></span></li>
            <li><span><button onClick={()=>handler('StartUp')}>Start Up</button></span></li>
        </ul>
    </div>
  )
}   

export default Sidebar
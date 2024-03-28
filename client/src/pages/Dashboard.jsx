import React from 'react'
import svnitIcon3 from '../../public/assets/Ellipse 12.png'
import Navbar from '../components/Navbar'
import DashSide from './DashBoard/DashSide'
import './Dashboard.css'
import { Link } from 'react-router-dom'
export default function Dashboard() {
  return (
    <div>

      <Navbar />
      <div className="boddy">
        <div className="column1">
          <img
            className="icon"
            src={svnitIcon3}
            alt=""
            style={{ width: "150px", height: "150px" }}
          />
          <DashSide/>
        </div>
        <div className="column2">
          <div className="coll">
          <div className="firstline">
          <div className="details">
            MitKumar R 
          </div>
          <div className="ver">verified</div>
           <div className="year">2nd year</div>
           </div>
           <div className="secondline">U22CS070</div>
            </div>
           <div className="thirdline">
            <div className="bd">Date of Birth <div>02 Jan 2005</div></div>
            <div className="deg">Degree <div>Bachelor in Technology</div></div>
            

           </div>
           <div className="fourthline">
            <div className="email">Institute Email <div>u22cs070@coed.svnit.ac.in</div></div>
            <div className="dep">Department <div>Computer Science and Engineering</div></div>
            

           </div>
           <div className="fifthline">
            <div className="pem"> Personal Email <div>mitkumar2105@gmail.com</div></div>
            </div>
        </div>


        </div>
    </div>
  )
}

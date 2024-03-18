import React from 'react'

import svnitIcon from '../../public/assets/Group 21.png'
import svnitIcon2 from '../../public/assets/Ellipse 14.png'
import svnitIcon3 from '../../public/assets/Ellipse 12.png'
import './Dashboard.css'
export default function Dashboard() {
  return (
    <div>
      <div className="headerr">
        <div className="navbarr">
          <img className="logoo" src={svnitIcon} alt="Logo" />
          <div className="nav-links">
            <button className="navbar-button">Home</button>
            <button className="navbar-button">Achievements</button>
            <button className="navbar-button">Opportunities</button>
          </div>
          <button className="profile-button">
            <img className="profile-img" src={svnitIcon2} alt="Profile" />
          </button>
        </div>
      </div>
      <div className="boddy">
        <div className="column1">
          <img
            className="icon"
            src={svnitIcon3}
            alt=""
            style={{ width: "150px", height: "150px" }}
          />

          <div className="column1-text">
            <ul>
              <li>Profile</li>
              <li>Achievements</li>
              <li>Projects</li>
              <li>Experience and skills</li>
              <li>Settings</li>
              <li className="logout">Logout</li> {/* Add logout option */}
            </ul>
          </div>
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

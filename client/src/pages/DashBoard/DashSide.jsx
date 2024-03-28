import React from 'react'
import { Link } from 'react-router-dom'

export default function DashSide() {
  return (
    <>
    <div className="column1-text">
            <ul>
              <li><Link to={"/Dashboard"}>Profile</Link></li>
              <li><Link to={"/YourAchivements"}>Achievements</Link></li>
              <li><Link to={"/YourOpp"}>Opportunities</Link></li>
              <li><Link to={"/MyFeed"}>My Feed</Link></li>
              <li><Link to={"/Settings"}>Settings</Link></li>
              <li >Logout</li> {/* Add logout option */}
            </ul>
          </div>
  </>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'

export default function DashSide() {
  return (
    <>
    <div className="column1-text">
            <ul>
              <Link to={"/Dashboard"}><li>Profile</li></Link>
              <Link to={"/YourAchivements"}><li>Achievements</li></Link>
              <Link to={"/YourOpp"}><li>Opportunities</li></Link>
              <Link to={"/MyFeed"}><li>My Feed</li></Link>
              {/* <Link to={"/Settings"}><li>Settings</li></Link> */}
              <li >Logout</li> {/* Add logout option */}
            </ul>
          </div>
  </>
  )
}

import React from 'react'
import './Sidebar.css'
import Image from "../../../public/assets/bat.jpeg"

const Sidebar = () => {
  return (
    <div>
        <div className="sidebar1">
            <div className="profile-info">
                <img src={Image} alt="Profile Photo" className="profile-img" />
                <div className="role">Role: Administrator</div>
                <div className="name">John Doe</div>
            </div>
            <div className="options">
                <div className="option">Navigation</div>
                <div className="option">Dashboard</div>
                <div className="option">Request</div>
                <div className="option">User</div>
                <div className="option">Comments</div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar
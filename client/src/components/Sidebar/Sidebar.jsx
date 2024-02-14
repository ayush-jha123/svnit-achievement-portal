import React, { useState } from 'react';
import { AiOutlineHome, AiOutlineUser, AiOutlineInfoCircle, AiOutlineMenu } from 'react-icons/ai';
import { BiLock, BiBook } from 'react-icons/bi';
import { CgFileDocument } from 'react-icons/cg';
import './Sidebar.css'; // Make sure to create a corresponding CSS file

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleSidebar = () => {
    setExpanded(!expanded);
  };

  const handleLogout = () => {
    // Implement your logout logic here
    console.log("Logout button clicked");
  };

  return (
    <div className={`side-navbar ${expanded ? 'expanded' : ''}`}>
      <div className="toggle-icon" onClick={toggleSidebar}>
        <AiOutlineMenu />
      </div>
      <div className="nav-items">
        <div className="nav-item">
          <AiOutlineHome />
          <span className="text">Home</span>
        </div>
        <div className="nav-item">
          <BiLock />
          <span className="text">Lock</span>
        </div>
        <div className="nav-item">
          <AiOutlineUser />
          <span className="text">User</span>
        </div>
        <div className="nav-item">
          <AiOutlineInfoCircle />
          <span className="text">Info</span>
        </div>
        <div className="nav-item">
          <CgFileDocument />
          <span className="text">Document</span>
        </div>
        <div className="nav-item">
          <BiBook />
          <span className="text">Book</span>
        </div>
        {/* Logout button */}
        <div className="nav-item logout-button" onClick={handleLogout}>
          <span className="icon">Logout</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

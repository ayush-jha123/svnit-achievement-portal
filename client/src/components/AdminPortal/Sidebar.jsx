import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import './Sidebar.css';
import Image from "../../../public/assets/bat.jpeg";

const Sidebar = ({ activeOption, onOptionClick }) => {
  const handleOptionClickLocal = (option) => {
    onOptionClick(option);
  };

  return (
    <div>
      <div className="sidebar1">
        <div className="profile-info">
          <img src={Image} alt="Profile Photo" className="profile-img" />
          <div className="role">Role: Administrator</div>
          <div className="name">John Doe</div>
        </div>
        <div className="options">
          <div
            className={`option ${activeOption === 'navigation' ? 'active' : ''}`}
            onClick={() => handleOptionClickLocal('navigation')}
          >
            Navigation
          </div>
          <div
            className={`option ${activeOption === 'dashboard' ? 'active' : ''}`}
            onClick={() => handleOptionClickLocal('dashboard')}
          >
            Dashboard
          </div>
          <div
            className={`option ${activeOption === 'request' ? 'active' : ''}`}
            onClick={() => handleOptionClickLocal('request')}
          >
            Request
          </div>
          <div
            className={`option ${activeOption === 'user' ? 'active' : ''}`}
            onClick={() => handleOptionClickLocal('user')}
          >
            User
          </div>
          <div
            className={`option ${activeOption === 'comments' ? 'active' : ''}`}
            onClick={() => handleOptionClickLocal('comments')}
          >
            Comments
          </div>
        </div>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  activeOption: PropTypes.string.isRequired, // Define prop types
  onOptionClick: PropTypes.func.isRequired,
};

export default Sidebar;

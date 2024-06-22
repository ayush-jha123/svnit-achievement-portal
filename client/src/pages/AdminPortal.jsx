import React, { useState } from 'react';
import './AdminPortal.css';
import Sidebar from '../../../AdminPortal/Sidebar';
import Dashboard from '../../../AdminPortal/Dashboard';
import Request from '../../../AdminPortal/Request';
import User from '../../../AdminPortal/User';
import Settings from '../../../AdminPortal/Settings';

const AdminPortal = () => {
  const [activeOption, setActiveOption] = useState('dashboard'); // Initially render Dashboard

  const handleOptionClick = (option) => {
    setActiveOption(option);
  };

  return (
    <>
      {/* <Navbar /> */}
      <div className='container1'>
        <Sidebar activeOption={activeOption} onOptionClick={handleOptionClick} />
        {activeOption === 'navigation' && <Navigation />}
        {activeOption === 'dashboard' && <Dashboard />}
        {activeOption === 'request' && <Request />}
        {activeOption === 'user' && <User />}
        {activeOption === 'settings' && <Settings />}
      </div>
    </>
  );
};

export default AdminPortal;

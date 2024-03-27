import React, { useState } from 'react';
import './AdminPortal.css';
import Sidebar from '../components/AdminPortal/Sidebar';
import Navbar from '../components/Navbar';
import Navigation from '../components/AdminPortal/Navigation';
import Dashboard from '../components/AdminPortal/Dashboard';
import Request from '../components/AdminPortal/Request';
import User from '../components/AdminPortal/User';
import Comment from '../components/AdminPortal/Comment';

const AdminPortal = () => {
  const [activeOption, setActiveOption] = useState('request'); // Initially render Request

  const handleOptionClick = (option) => {
    setActiveOption(option);
  };

  return (
    <>
      <Navbar />
      <div className='container1'>
        <Sidebar activeOption={activeOption} onOptionClick={handleOptionClick} />
        {activeOption === 'navigation' && <Navigation />}
        {activeOption === 'dashboard' && <Dashboard />}
        {activeOption === 'request' && <Request />}
        {activeOption === 'user' && <User />}
        {activeOption === 'comments' && <Comment />}
      </div>
    </>
  );
};

export default AdminPortal;

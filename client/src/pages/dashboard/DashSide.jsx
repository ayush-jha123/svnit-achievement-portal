import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaTrophy, FaBullhorn, FaCog, FaSignOutAlt } from 'react-icons/fa';

export default function DashSide() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <button
        className="outline-none fixed left-4 top-20 z-50 md:hidden"
        onClick={toggleSidebar}
      >
        <svg
          className="w-8 h-8 text-gray-500"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>

      <div className={`fixed inset-0 z-40 bg-gray-800 bg-opacity-50 transition-opacity md:hidden ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={toggleSidebar}></div>

      <div className={`fixed top-0 left-0 h-full w-80 bg-gray-300 shadow-lg rounded-r-lg overflow-hidden transform transition-transform md:relative md:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="px-6 py-4">
          <h2 className="text-3xl font-semibold text-gray-800 mb-20 text-center">Dashboard</h2>
          <ul className="space-y-6">
            <li>
              <Link to="/Dashboard" className="flex text-2xl items-center text-gray-800 font-semibold bg-gray-200 p-4 rounded-lg hover:bg-gray-100 hover:text-gray-900 hover:shadow-md transition-transform transform hover:-translate-y-1">
                <FaUser className="mr-2" /> Profile
              </Link>
            </li>
            <li>
              <Link to="/YourAchivements" className="flex text-2xl items-center text-gray-800 font-semibold bg-gray-200 p-4 rounded-lg hover:bg-gray-100 hover:text-gray-900 hover:shadow-md transition-transform transform hover:-translate-y-1">
                <FaTrophy className="mr-2" /> Achievements
              </Link>
            </li>
            <li>
              <Link to="/YourOpp" className="flex text-2xl items-center text-gray-800 font-semibold bg-gray-200 p-4 rounded-lg hover:bg-gray-100 hover:text-gray-900 hover:shadow-md transition-transform transform hover:-translate-y-1">
                <FaBullhorn className="mr-2" /> Opportunities
              </Link>
            </li>
            <li>
              <Link to="/EditProfile" className="flex text-2xl items-center text-gray-800 font-semibold bg-gray-200 p-4 rounded-lg hover:bg-gray-100 hover:text-gray-900 hover:shadow-md transition-transform transform hover:-translate-y-1">
                <FaCog className="mr-2" /> Edit Profile
              </Link>
            </li>
            <li>
              <button className="flex text-2xl items-center text-gray-800 font-semibold bg-gray-200 p-4 rounded-lg hover:bg-gray-100 hover:text-gray-900 hover:shadow-md transition-transform transform hover:-translate-y-1 w-full">
                <FaSignOutAlt className="mr-2" /> Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

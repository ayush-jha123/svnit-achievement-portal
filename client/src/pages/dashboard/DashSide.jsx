import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaTrophy, FaBullhorn, FaCog, FaSignOutAlt } from 'react-icons/fa';

export default function DashSide() {
  return (
    <div className="h-3/4 w-full max-w-sm mx-auto bg-gray-300 shadow-lg rounded-lg overflow-hidden mt-8">
      <div className="px-6 py-4">
        <h2 className="text-3xl font-semibold text-gray-800 mb-20">Dashboard</h2>
        <ul className="space-y-10">
          <li>
            <Link to="/Dashboard" className="flex text-2xl items-center text-gray-800 font-semibold hover:text-blue-600 transition-colors">
              <FaUser className="mr-2" /> Profile
            </Link>
          </li>
          <li>
            <Link to="/YourAchivements" className="flex text-2xl items-center text-gray-800 font-semibold hover:text-blue-600 transition-colors">
              <FaTrophy className="mr-2" /> Achievements
            </Link>
          </li>
          <li>
            <Link to="/YourOpp" className="flex text-2xl items-center text-gray-800 font-semibold hover:text-blue-600 transition-colors">
              <FaBullhorn className="mr-2" /> Opportunities
            </Link>
          </li>
          <li>
            <Link to="/EditProfile" className="flex text-2xl items-center text-gray-800 font-semibold hover:text-blue-600 transition-colors">
              <FaCog className="mr-2" /> Edit Profile
            </Link>
          </li>
          <li>
            <button className="flex text-2xl items-center text-gray-800 font-semibold hover:text-blue-600 transition-colors">
              <FaSignOutAlt className="mr-2" /> Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

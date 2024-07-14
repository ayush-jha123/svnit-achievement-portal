import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = ({ handler }) => {
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

      <div className={`sidebar ${sidebarOpen ? 'block' : 'hidden'} md:block h-[60vh] w-full max-w-[300px] bg-[#00A3FF] overflow-auto z-40 fixed md:sticky top-32 shadow-xl animate-fadeIn rounded-md`}>
        <ul id="list" className="text-[2vw] list-none m-0 p-0">
          <li className="text-left">
            <span>
              <button
                onClick={() => handler('Academics')}
                className="text-left w-full hover:bg-[#fefeff] cursor-pointer  text-white hover:text-black text-3xl py-4"
              >
                <span className="text-[2.6vw] mr-[1vw] ml-[1vw]">»</span> Academics
              </button>
            </span>
          </li>
          <li className="leading-[1.5] text-left">
            <span>
              <button
                onClick={() => handler('Extracurricular')}
                className="text-left w-full hover:bg-[#fefeff] cursor-pointer text-white hover:text-black text-3xl py-4"
              >
                <span className="text-[2.6vw] mr-[1vw] ml-[1vw]">»</span> Extracurricular
              </button>
            </span>
          </li>
          <li className="leading-[1.5] text-left">
            <span>
              <button
                onClick={() => handler('Placement')}
                className="text-left w-full hover:bg-[#fefeff] cursor-pointer text-white hover:text-black text-3xl py-4"
              >
                <span className="text-[2.6vw] mr-[1vw] ml-[1vw]">»</span> Placement
              </button>
            </span>
          </li>
          <li className="leading-[1.5] text-left">
            <span>
              <button
                onClick={() => handler('StartUp')}
                className="text-left w-full hover:bg-[#fefeff] cursor-pointer text-white hover:text-black text-3xl py-4"
              >
                <span className="text-[2.6vw] mr-[1vw] ml-[1vw]">»</span> Start Up
              </button>
            </span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;

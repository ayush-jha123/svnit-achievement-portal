import React, { useState } from 'react'
import './Sidebar.css'

const Sidebar = ({ handler }) => {
  return (
    <div className="sidebar h-[65vh] w-full max-w-[300px] bg-[#9ed8ff] overflow-auto z-100 sticky top-20 shadow-xl animate-fadeIn">
      <ul id="list" className="text-[2vw] list-none m-0 p-0">
        <li className="text-left">
          <span>
            <button
              onClick={() => handler('Academics')}
              className="text-left w-full hover:bg-[#fefeff] cursor-pointer"
            >
              <span className="text-[2.6vw] mr-[1vw] ml-[1vw]">»</span> Academics
            </button>
          </span>
        </li>
        <li className="leading-[1.5] text-left">
          <span>
            <button
              onClick={() => handler('Extracurricular')}
              className="text-left w-full hover:bg-[#fefeff] cursor-pointer"
            >
              <span className="text-[2.6vw] mr-[1vw] ml-[1vw]">»</span> Extracurricular
            </button>
          </span>
        </li>
        <li className="leading-[1.5] text-left">
          <span>
            <button
              onClick={() => handler('Placement')}
              className="text-left w-full hover:bg-[#fefeff] cursor-pointer"
            >
              <span className="text-[2.6vw] mr-[1vw] ml-[1vw]">»</span> Placement
            </button>
          </span>
        </li>
        <li className="leading-[1.5] text-left">
          <span>
            <button
              onClick={() => handler('StartUp')}
              className="text-left w-full hover:bg-[#fefeff] cursor-pointer"
            >
              <span className="text-[2.6vw] mr-[1vw] ml-[1vw]">»</span> Start Up
            </button>
          </span>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="fade-in-up flex flex-col md:flex-row justify-between items-center p-8 h-auto w-full bg-gradient-to-r from-teal-400 to-blue-600 fade-in-up text-white">
      <div className="flex flex-col md:w-2/3 text-center">
        <div className="mb-4 flex justify-center">
          <img className="w-24 h-auto" src="public/assets/logo.svg" alt="svnit" />
        </div>
        <div className="text-l text-black font-bold">
          SV-NIT Sardar Vallabhbhai National Institute of Technology,<br />
          Ichchhanath, Surat-395007, Gujarat, INDIA
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:w-2/3 justify-start gap-x-60">
        <div>
          <div className="font-bold mb-5 mt-2 text-gray-800">Quick Links</div>
          <ul className="list-none  flex flex-col gap-3">
            <li className="hover:text-black hover:bg-transparent">
              <a href="#about">About College</a>
            </li>
            <li className="hover:text-black hover:bg-transparent">
              <a href="#gallery">Gallery</a>
            </li>
            <li className="hover:text-black hover:bg-transparent">
              <a href="#thoughts">Our Thoughts</a>
            </li>
            <li className="hover:text-black hover:bg-transparent">
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </div>
        <div>
          <div className="font-bold mb-5 mt-2 text-gray-800">Resources</div>
          <ul className="list-none flex flex-col gap-3">
            <li className="hover:text-black hover:bg-transparent">
              <a href="#library">Library</a>
            </li>
            <li className="hover:text-black hover:bg-transparent">
              <a href="#events">Events</a>
            </li>
            <li className="hover:text-black hover:bg-transparent">
              <a href="#alumni">Alumni</a>
            </li>
            <li className="hover:text-black hover:bg-transparent">
              <a href="#news">News</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

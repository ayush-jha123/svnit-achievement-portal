import React from "react";
import "./Footer.css" ;
// Footer.js


export default function Footer() {
  return (
    <div className="footer-container">
      <div className="box1">
        <div className="image5">
          <img className="i" src="public\assets\logo.svg" alt="svnit" />
        </div>
        <div className="te">
          SV-NIT Sardar Vallabhbhai National Institute of Technology,<br /> Ichchhanath, Surat-395007, Gujarat, INDIA
        </div>
      </div>
      <div className='box2'>
        <div className="li">
          <span>Quick Links</span>
        </div>
        <div className="l1">
          <ul>
            <li>about college</li>
            <li>Gallery</li>
            <li>Our Thoughts</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

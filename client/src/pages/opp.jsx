import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import './opp.css';
import Card from '../components/Card_opp';
import { useState,useEffect } from 'react';
import Footer from '../components/Footer'
import {sanity} from '../sanity';

const Achivements = () => {

  const [oppertunity,setOppertunity]=useState({});
        useEffect(() => {
          const skillsQuery='*[_type=="achievements"]';
          sanity.fetch(skillsQuery).then((data)=>{
           setOppertunity(data);
          })
         }, [])
       console.log(oppertunity);
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="header">
        <h1>Opportunities</h1>
      </div>
      <div className="Main">
        <Sidebar />
        <div>
        <div className="head">
            <div className="from"><p>From Students</p></div>
            <div className="from"><p>From Teachers</p></div>
          </div>
        <div className="Cards">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
        </div>
      </div>
      <Footer />
      </div>
    </div>
    
  );
};

export default Achivements;

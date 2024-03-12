import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import './opp.css';
import Card from '../components/Card1';
import Footer from '../components/Footer'

const Achivements = () => {


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
        <div className="header">
            <div className="from"><p>From Students</p></div>
            <div className="from"><p>From Students</p></div>
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

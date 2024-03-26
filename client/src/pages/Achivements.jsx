import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import batman from '../../public/assets/bat.jpeg'
import './Achivement.css';
import CardAchievements from '../components/Card2';
import Footer from '../components/Footer'
import { Link } from 'react-router-dom';

const Achivements = () => {

  return (
    <div>
      <Navbar />
      <div className="container">
      <div className="header">
        <h1>Achivement</h1>
      </div>
      <div className="Main">
        <Sidebar />
        <div className="Cards">
            <CardAchievements />
            <CardAchievements />
            <CardAchievements />
            <CardAchievements />
            <CardAchievements />
            <CardAchievements />
            <CardAchievements />
            <CardAchievements />
            <CardAchievements />
        </div>
      </div>
       <div className='view'>
          <Link to={"/"}><button ><u>View more</u></button></Link>        
        </div>
      <Footer />
      </div>
    </div>
    
  );
};

export default Achivements;

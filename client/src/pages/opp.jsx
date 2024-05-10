import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import './opp.css';
import Card from '../components/Card_opp';
import { useState,useEffect } from 'react';
import Footer from '../components/Footer'
import {sanity} from '../sanity';

const Oppertunity = () => {

  const [oppertunity,setOppertunity]=useState([]);
        useEffect(() => {
          const skillsQuery='*[_type=="oppertunities"]';
          sanity.fetch(skillsQuery).then((data)=>{
           setOppertunity(data);
          })
         }, [])
       console.log(oppertunity);
  return (
    <div>
      {/* <Navbar /> */}
      <div className="container">
        <div className="header">
        <h1>Opportunities</h1>
      </div>
      <div className="Main">
        <Sidebar />
        <div>
        {/* <div className="head">
            <div className="from"><p>From Students</p></div>
            <div className="from"><p>From Teachers</p></div>
          </div> */}

        
        <div className="Cards">
            {oppertunity.map((oppertunity) => (
              <div className=''>
                <Card key={oppertunity._id} {...oppertunity} />
              </div>
            ))}
        </div>
        </div>
      </div>
      <Footer />
      </div>
    </div>
    
  );
};

export default Oppertunity;

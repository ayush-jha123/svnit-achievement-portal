import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import './opp.css';
import Card from '../components/Card_opp';
import { useState,useEffect } from 'react';
import Footer from '../components/Footer'
import {sanity} from '../sanity';

const Oppertunity = () => {
  const [tag,setTag]=useState(null)
  const [oppertunity,setOppertunity]=useState([]);
  const [filterOppertunity,setFilterOppertunity]=useState([]);
        useEffect(() => {
          const skillsQuery='*[_type=="oppertunities"]';
          sanity.fetch(skillsQuery).then((data)=>{
           setOppertunity(data);
           setFilterOppertunity(data)
          })
         }, [])
       console.log(oppertunity);

       useEffect(() => {
        console.log(tag)
        if(tag){
          const filteredOppertunity = oppertunity.filter((opp) => opp.tags === tag);
          setFilterOppertunity(filteredOppertunity)
        }
      }, [tag])
      
      const handleSetTag = (newTag) => {
        setTag(newTag);
      };

  return (
    <div>
      {/* <Navbar /> */}
      <div className="container">
        <div className="header">
        <h1>Opportunities</h1>
      </div>
      <div className="Main">
        <Sidebar handler={handleSetTag}/>
        <div>
        {/* <div className="head">
            <div className="from"><p>From Students</p></div>
            <div className="from"><p>From Teachers</p></div>
          </div> */}

        
        <div className="Cards">
            {filterOppertunity.map((oppertunity) => (
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

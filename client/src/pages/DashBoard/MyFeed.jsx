import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar.jsx";
import DashSide from "./DashSide.jsx";
import { useSelector } from "react-redux";
import { sanity } from "../../sanity.js";
import Card from "../../components/Card_opp.jsx";
import CardAchievements from "../../components/Card_ach.jsx";

export default function MyFeed() {
  const user=useSelector(state=>state.user);
  const [achievement,setAchievements]=useState([]);
  const [oppertunity,setOppertunity]=useState([]);

  useEffect(() => {
    const skillsQuery = '*[_type=="achievement"]';
    sanity.fetch(skillsQuery).then((data) => {
      setAchievements(data);
    });
  }, []);

  useEffect(() => {
    const skillsQuery='*[_type=="oppertunities"]';
    sanity.fetch(skillsQuery).then((data)=>{
     setOppertunity(data);
    })
   }, [])
   useEffect(() => {
     setAchievements(achievement.filter((achieve)=>achieve.userid===user.currentUser.userId));
   }, [])
   
    useEffect(() => {
      setOppertunity(oppertunity.filter((oppn)=>oppn.userid===user.currentUser.userId));
    }, [])
       
  return (
    <>
      <Navbar />
      <div className="grid grid-flow-col h-screen grid-cols-auto w-472 mt-37" style={{width:'500px'}}>
        <DashSide />
        <div className="flex text-lg flex-col">
          <h>Achivements</h>
          {achievement.map((achievement) => (
              <CardAchievements key={achievement._id} {...achievement} />
            ))}
          <h>Oppertunities</h>
          {oppertunity.map((oppertunity) => (
              <div className=''>
                <Card key={oppertunity._id} {...oppertunity} />
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

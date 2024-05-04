import React, { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar.jsx";
import DashSide from "./DashSide.jsx";
import { useSelector } from "react-redux";
import { sanity } from "../../sanity.js";
import Card from "../../components/Card_opp.jsx";
import CardAchievements from "../../components/Card_ach.jsx";

export default function MyFeed() {
  const user = useSelector(state => state.user);
  const [achievements, setAchievements] = useState([]);
  const [filteredAchievements, setFilteredAchievements] = useState([]);
  const [opportunities, setOpportunities] = useState([]);

  useEffect(() => {
    const skillsQuery = '*[_type=="achievement"]';
    sanity.fetch(skillsQuery).then((data) => {
      setAchievements([...data]);
    });
  }, []);
  console.log('bre');
  console.log(achievements);
  useEffect(() => {
    const skillsQuery = '*[_type=="opportunities"]';
    sanity.fetch(skillsQuery).then((data) => {
      setOpportunities(data);
    });
  }, []);

  useEffect(() => {
    setFilteredAchievements(achievements.filter((achievement)=>achievement.userid===user.currentUser.userid));
  }, [achievements])
  

  const filteredOpportunities = useMemo(() => {
    return opportunities.filter(
      (opportunity) => opportunity.userid === user.currentUser.userId
    );
  }, [opportunities]);
 
  // const handleDelete=(id)=>{
  //   setAchievements(prevAchievements => prevAchievements.filter(achievement => achievement._id !== id));
  // }

  return (
    <>
      <Navbar />
      <div className="grid grid-flow-col h-screen grid-cols-auto w-472 mt-37" style={{ width: '500px' }}>
        <DashSide />
        <div className="flex text-lg flex-col">
          <h>Achievements</h>
          {filteredAchievements.map((achievement) => (
            <CardAchievements key={achievement._id} {...achievement} />
          ))}
          <h>Opportunities</h>
          {filteredOpportunities.map((opportunity) => (
            <div className=''>
              <Card key={opportunity._id} {...opportunity} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

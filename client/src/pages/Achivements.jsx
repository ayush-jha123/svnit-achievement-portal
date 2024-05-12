import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import batman from "../../public/assets/bat.jpeg";
import "./Achivement.css";
import { sanity } from "../sanity";
import CardAchievements from "../components/Card_ach.jsx";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Achivements = () => {
  const [achievements, setAchievements] = useState([]);
  const [filterAchievements,setFilterAchievements]=useState([])
  const [tag,setTag]=useState(null)
  useEffect(() => {
    const skillsQuery = '*[_type=="achievement"]';
    sanity.fetch(skillsQuery).then((data) => {
      setAchievements(data);
      setFilterAchievements(data);
    });
  }, []);
  useEffect(() => {
    if(tag){
      const filteredAchievements = achievements.filter((achievement) => achievement.tags === tag);
      setFilterAchievements(filteredAchievements)
    }
  }, [tag])
  
  const handleSetTag = (newTag) => {
    setTag(newTag);
  };
  
  return (
    <div>
      <div className="container">
        <div className="header">
          <h1>Achivement</h1>
        </div>
        <div className="Main">
          <Sidebar handler={handleSetTag}/>
          {console.log(tag)}
          <div className="Cards">
            {filterAchievements.map((achievement) => (
              <CardAchievements key={achievement._id} {...achievement} />
            ))}
          </div>
        </div>
        <div className="view">
          <Link to={"/"}>
            <button>
              <u>View more</u>
            </button>
          </Link>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Achivements;

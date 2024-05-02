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
  useEffect(() => {
    const skillsQuery = '*[_type=="achievements"]';
    sanity.fetch(skillsQuery).then((data) => {
      setAchievements(data);
    });
  }, []);
  console.log("bro");
  console.log(achievements);
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
            {achievements.map((achievement) => (
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

import React from "react";
import Sidebar from "../components/Sidebar";
import { sanity } from "../sanity";
import CardAchievements from "../components/Card_ach.jsx";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Achivements = () => {
  const [achievements, setAchievements] = useState([]);
  const [filterAchievements, setFilterAchievements] = useState([])
  const [update, setUpdate] = useState(false)
  const [tag, setTag] = useState(null)
  useEffect(() => {
    const skillsQuery = '*[_type=="achievement"]';
    sanity.fetch(skillsQuery).then((data) => {
      setAchievements(data);
      setFilterAchievements(data);
    });
  }, [update]);
  useEffect(() => {
    if (tag) {
      const filteredAchievements = achievements.filter((achievement) => achievement.tags === tag);
      setFilterAchievements(filteredAchievements)
    }
  }, [tag])

  const handleSetTag = (newTag) => {
    setTag(newTag);
  };
  const toggle = () => {
    setUpdate(!update)
  }
  return (
    <div className="mt-20  w-full min-h-screen bg-[url('/assets/AchivementPageBG.svg')] bg-contain bg-no-repeat bg-top">
      <div className="text-4xl bg-transparent p-0 text-center mb-10">
        <h1>Achivements</h1>
        <p className="text-xl opacity-50">(click on achievement title to see document of aggregation)</p>
      </div>
      <div className="flex p-[2vw] -mt-2">
        <Sidebar handler={handleSetTag} />
        {console.log(tag)}
        <div className="flex flex-wrap -mt-[5vh] p-0 animate-fadeInUp">
          {filterAchievements.map((achievement) => (
            <CardAchievements key={achievement._id} achievement={achievement} onUpdate={toggle} />
          ))}
        </div>
      </div>
      <div className="mt-[-3%] text-lg ml-[80%] mb-3">
        <Link to={"/achivements"}>
          <button>
            <u>View more</u>
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Achivements;

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar.jsx'
import DashSide from './DashSide.jsx'
import { sanity } from '../../sanity.js';
import { useSelector } from 'react-redux';
import CardAchievements from '../../components/Card_ach.jsx';

export default function YourAchivements() {
  const user = useSelector(state => state.user);
  const [achievements, setAchievements] = useState([]);
  const [filteredAchievements, setFilteredAchievements] = useState([]);
  const [update,setUpdate]=useState(false)
  useEffect(() => {
    const skillsQuery = '*[_type=="achievement"]';
    sanity.fetch(skillsQuery).then((data) => {
      setAchievements([...data]);
    });
  }, [update]);

  useEffect(() => {
    setFilteredAchievements(achievements.filter((achievement)=>achievement.userid===user.currentUser._id));
  }, [achievements])

  const toggle=()=>{
    setUpdate(!update)
  }
  return (
    <>
    {/* <Navbar /> */}
    <div className="grid grid-flow-col h-screen grid-cols-auto">
    <DashSide/>
      <div className="flex-col mt-20 col-span-3">
        <div className="flex justify-between">
          <header className="bg-transparent">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold text-gray-900">Achievements</h1>
            </div>
          </header>
          <div className="my-auto flex">
            <Link to={"/Add_Ach"}>
              <div className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-full shadow mr-10 cursor-pointer">
                <span className="font-bold text-xl	">+ &nbsp; </span> Add Achievement
              </div>
            </Link>
          </div>
        </div>
        <div>
        {filteredAchievements.map((achievement) => (
            <CardAchievements key={achievement._id} achievement={achievement} onUpdate={toggle} />
          ))}
        </div>
      </div>
    </div>
  </>
  )
}

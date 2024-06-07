import React, { useEffect, useState } from 'react'
import batman from '../../public/assets/forgot.png';
import { useParams } from 'react-router-dom';
import { sanity } from '../sanity';
import { useSelector } from 'react-redux';


const achCardDetails = () => {
  const { id } = useParams();
  const [achievements, setAchievements] = useState([]);
  const [filterAchievements, setFilterAchievements] = useState([])
  useEffect(() => {
    const skillsQuery = '*[_type=="achievement"]';
    sanity.fetch(skillsQuery).then((data) => {
      setAchievements(data);
    });
  }, []);
  // const {achievements}=useSelector(state=>state.post)
  // console.log(achievements)

  useEffect(() => {
    if (id && achievements.length > 0) {
      const filteredAchievements = achievements.filter((achievement) => achievement?._id === id);
      console.log("Filtered achievements: ", filteredAchievements); // Log filtered achievements
      setFilterAchievements(filteredAchievements);
    }
  }, [id, achievements]);

  if (filterAchievements.length === 0) {
    return <div>Loading...</div>;
  }
  console.log(achievements)
  const achievement = filterAchievements[0];
  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100 p-4 mt-16'>
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="px-6 py-4">
          <h1 className="text-3xl font-bold text-center mb-4">{achievement.title}</h1>
          <h3 className="text-xl font-semibold text-center mb-2">{achievement.postedby}</h3>
          <p className="text-gray-700 text-center mb-4">{achievement.description}</p>
          <div className="flex justify-center mb-4">
            <img className="w-80 h-80 object-cover shadow-lg" src={batman} alt="User Image" />
            <div dangerouslySetInnerHTML={{__html:achievement.achievementdetails}}/>
          </div>
          {/* <p className="text-gray-600 text-center">Email of user</p> 
           <div>{achievement?.imageurl}</div> */}
        </div>
      </div>

    </div>
  )
}

export default achCardDetails
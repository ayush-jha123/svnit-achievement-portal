import React, { useEffect, useState } from 'react'
import batman from '../../public/assets/bat.jpeg';
import { useParams } from 'react-router-dom';
import { sanity } from '../sanity';


const achCardDetails = () => {
  const {id}=useParams();
  const [achievements, setAchievements] = useState([]);
  const [filterAchievements,setFilterAchievements]=useState([])
  useEffect(() => {
    const skillsQuery = '*[_type=="achievement"]';
    sanity.fetch(skillsQuery).then((data) => {
      setAchievements(data);
    });
  }, []);

  useEffect(() => {
    if (id && achievements.length > 0) {
      const filteredAchievements = achievements.filter((achievement) => achievement._id === id);
      console.log("Filtered achievements: ", filteredAchievements); // Log filtered achievements
      setFilterAchievements(filteredAchievements);
    }
  }, [id, achievements]);

  if (filterAchievements.length === 0) {
    return <div>Loading...</div>;
  }

  const achievement = filterAchievements[0];
  return (
    <div>
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
<div className="px-4 py-2">
    <h1 className="text-2xl font-bold mb-2">{achievement.title}</h1>
    <h3 className="text-lg font-bold mb-2">{achievement.postedby}</h3>
    <p className="text-gray-600 mb-4">{achievement.description}</p>
    <img className="w-80 h-80 object-cover mx-auto mb-4" src={batman} alt="User Image" />
    <p className="text-gray-600">Email of user</p>
</div>
</div>

</div>
  )
}

export default achCardDetails
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { sanity } from '../sanity';

const oppCardDetails = () => {
  const { id } = useParams();
  const [oppertunity, setOppertunity] = useState([]);
  const [filterOppertunity, setFilterOppertunity] = useState([]);
  useEffect(() => {
    const skillsQuery = '*[_type=="oppertunities"]';
    sanity.fetch(skillsQuery).then((data) => {
      setOppertunity(data);
    })
  }, [])

  useEffect(() => {
    if (id && oppertunity.length > 0) {
      const filteredoppn = oppertunity.filter((oppertunity) => oppertunity._id === id);
      setFilterOppertunity(filteredoppn);
    }
  }, [id, oppertunity]);

  if (filterOppertunity.length === 0) {
    return <div>Loading...</div>;
  }

  const opp = filterOppertunity[0];
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div class="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div class="px-6 py-4">
          <h1 class="text-3xl font-bold text-center mb-4">{opp.title}</h1>
          <p class="text-gray-700 text-center mb-4">
            {opp.description}
          </p>
        </div>
        <div class="bg-gray-200 p-4 rounded-md">
          <h3 class="text-lg text-blue-600">Time period/tenure :{opp.openingdate} : {opp.closingdate}</h3>
        </div>
        <div class="bg-gray-200 p-4 rounded-md">
          <h3 class="text-lg font-bold">Posted by:{opp.participants}</h3>
          <p class="text-gray-700">Email of user</p>
        </div>
      </div>
    </div>

  )
}

export default oppCardDetails
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
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4 mt-12">
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="px-6 py-4">
          <h1 className="text-3xl font-bold text-center mb-4 uppercase">{opp.title}</h1>
          <p className="text-gray-700 text-center mb-4">
            {opp.description}
          </p>
        </div>
        <div className="bg-gray-200 p-4 rounded-md">
          <h3 className="text-lg text-blue-600">Time period/tenure :{opp.openingdate} : {opp.closingdate}</h3>
        </div>
        <div className="bg-gray-200 p-4 rounded-md">
          <h3 className="text-lg font-bold">Posted for:{opp.participants}</h3>
          {/* <p className="text-gray-700">Email of user</p> */}
        </div>
      </div>
    </div>

  )
}

export default oppCardDetails
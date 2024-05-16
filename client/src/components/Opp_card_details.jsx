import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { sanity } from '../sanity';

const oppCardDetails = () => {
    const {id}=useParams();
    const [oppertunity,setOppertunity]=useState([]);
  const [filterOppertunity,setFilterOppertunity]=useState([]);
        useEffect(() => {
          const skillsQuery='*[_type=="oppertunities"]';
          sanity.fetch(skillsQuery).then((data)=>{
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
    <div class="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
    <div class="px-4 py-2">
        <h1 class="text-2xl font-bold mb-2">{opp.title}</h1>
        <p class="text-gray-600">
            {opp.description}
        </p>
    </div>
    <div class="px-4 py-2">
        <h3 class="text-lg text-blue-600">Time period/tenure :{opp.openingdate} : {opp.closingdate}</h3>
    </div>
    <div class="px-4 py-2">
        <h3 class="text-lg font-bold mb-2">For Whom :{opp.participants}</h3>
        <p class="text-gray-600">Email of user</p>
    </div>
</div>

  )
}

export default oppCardDetails
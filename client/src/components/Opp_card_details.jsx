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
        <h1 class="text-2xl font-bold mb-2">Title of Opportunity</h1>
        <p class="text-gray-600">
            Description about opportunity in detail<br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt temporibus aliquid error, quam nulla molestiae ratione officiis, quis inventore, quod illo cum voluptate iure ea. Ex explicabo odit quibusdam, est alias quas vel laboriosam nihil quos modi aliquam cumque nisi voluptatibus asperiores ab corporis, porro in hic perferendis. Doloremque fugiat quasi doloribus et tempore repellat iusto vero dolor aliquam in?
        </p>
    </div>
    <div class="px-4 py-2">
        <h3 class="text-lg text-blue-600">Time period/tenure</h3>
    </div>
    <div class="px-4 py-2">
        <h3 class="text-lg font-bold mb-2">Name of user who is giving this</h3>
        <p class="text-gray-600">Email of user</p>
    </div>
</div>

  )
}

export default oppCardDetails
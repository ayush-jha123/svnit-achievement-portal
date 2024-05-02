import React from 'react'
import batman from '../../public/assets/bat.jpeg';

const achCardDetails = () => {
  return (
    <div>
        <div class="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
    <div class="px-4 py-2">
        <h1 class="text-2xl font-bold mb-2">Title of Achievement</h1>
        <h3 class="text-lg font-bold mb-2">Name of user who did this</h3>
        <p class="text-gray-600 mb-4">Description about him</p>
        <img class="w-80 h-80 object-cover mx-auto mb-4" src={batman} alt="User Image" />
        <p class="text-gray-600">Email of user</p>
    </div>
</div>

    </div>
  )
}

export default achCardDetails
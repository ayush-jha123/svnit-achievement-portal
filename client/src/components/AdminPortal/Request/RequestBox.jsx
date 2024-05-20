import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Image from '../../../../public/assets/bat.jpeg';

const RequestBox = () => {
  return (
    <div className='flex mr-[3vw] items-center space-x-4'>
      <div className="flex items-center p-4 w-[55vw] h-auto border border-gray-300 rounded-lg mb-4 ml-4 bg-white shadow-md">
        <img src={Image} className="w-16 h-16 object-cover rounded-full mr-6 shadow-sm" alt="Profile" />
        <div className="flex-1">
          <h3 className="m-0 font-bold text-gray-800 text-lg">Name of user</h3>
          <p className="mt-2 text-sm text-gray-600">Info of achievement</p>
        </div>
      </div>
      <button className='w-[8vw] border border-gray-300 rounded-lg mb-4 mr-4 bg-[#D2E5F3] shadow-md p-2 hover:bg-[#b0d4ec] hover:shadow-lg'>
        Accept
      </button>
      <button className='w-[5vw] border border-gray-300 rounded-lg mb-4 bg-[#D2E5F3] shadow-md p-2 hover:bg-[#b0d4ec] hover:shadow-lg'>
        <FontAwesomeIcon icon={faXmark} />
      </button>
    </div>
  )
}

export default RequestBox;

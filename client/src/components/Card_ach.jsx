import React from 'react'
import './Card_ach.css'
import batman from '../../public/assets/bat.jpeg';
import { MdDelete } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { sanity } from '../sanity';

const CardAchievements = (achievement) => {
  console.log(achievement);
  const {currentUser}=useSelector(state=>state.user)
  
  const handlelike=()=>{
  const updateQuery = `*[_id == "${achievement._id}"]`;
  sanity.patch(updateQuery)
    .set({like:[...achievement.like,currentUser._id]})
    .commit()
    .then((response) => {
      console.log('Achievement updated successfully:', response);
    })
    .catch((error) => {
      console.error('Error updating achievement:', error);
    });
  }


  const handledelete=()=>{
    const deleteQuery = `*[_id == "${achievement._id}"]`;
    sanity.delete(deleteQuery)
    .then((response) => {
      console.log('Achievement deleted successfully:', response);
    })
    .catch((error) => {
      console.error('Error deleting achievement:', error);
    });
  }
  return (
    <div className="card4">
        <div className="bar">
            <div className="photo2">
              <img
                className='image3'
                src={batman}
              />
            </div>
            <Link to={"/card_details"}>
            <span>{achievement.title}</span> 
            </Link>
        </div>
        <p className='mt-3 mx-5'>Posted By:{achievement.postedby}</p>
        <div className="card_info">
            <p id='font'><b>Name: </b>{achievement.body}</p>
            <p id='font'><b>Date: </b>{achievement.date}</p>
            <p id='font'><b>Achievement :</b> {achievement.description} </p>
        </div>
        {/* <a id='view'>View more</a> */}
        <div className='flex justify-between'>
        <button onClick={handlelike}>
        <AiOutlineLike />
        </button>  
        <button onClick={handledelete}>
        <MdDelete />
        </button>
        </div>
    </div>

  )
}

export default CardAchievements;
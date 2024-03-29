import React from 'react'
import './Card_ach.css'
import batman from '../../public/assets/bat.jpeg'

const CardAchievements = () => {
  return (
    <div className="card4">
        <div className="bar">
            <div className="photo2">
              <img
                className='image3'
                src={batman}
              />
            </div>
            <span>Title</span>
        </div>
        <div className="card_info">
            <p id='font'><b>Name: </b>Vivek Lal</p>
            <p id='font'><b>Achievement :</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, doloribus! </p>
        </div>
        <a id='view'>View more</a>
    </div>

  )
}

export default CardAchievements;
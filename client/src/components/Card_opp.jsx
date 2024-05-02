import React from 'react'
import './Card_opp.css'
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div className='card1'>
        <h1 className='Dev'>
            Title (Developer)
        </h1>
        <p className='opp'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste
        </p>
        <br />
        <p className='opp'>
            email
        </p>
        <Link to={"/Opp_card_details"}>
          <button className='explore'>
            Explore
          </button>
          </Link>
    </div>
  )
}

export default Card
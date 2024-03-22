import React from 'react'
import './RequestBox.css'

const RequestBox = () => {
  return (
    <div className='RequestBox'>
        <div className="Request">
            <img src={Image} className="Request__image" />
            <div className="Request__content">
            <h3 className="Request__name">Jay</h3>
            <p className="Request__description">I am studing in ECE Depeartment 2nd year</p>
            </div>
        </div>
        <button className='Accept'>
            Accept
        </button>
        <button className='Reject'>
            <FontAwesomeIcon icon={faXmark} />
        </button>
    </div>
  )
}

export default RequestBox
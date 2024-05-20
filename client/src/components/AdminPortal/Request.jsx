import React from 'react'
import RequestBox from './Request/RequestBox'

const Request = () => {
  return (
    <div>
      <div className='heading text-3xl font-bold mb-4'>Request</div>
      <RequestBox />
      <RequestBox />
      <RequestBox />
    </div>
  )
}

export default Request
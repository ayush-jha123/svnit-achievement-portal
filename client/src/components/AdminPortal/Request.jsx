import React from 'react'
import RequestBox from './Request/RequestBox'

const Request = () => {
  return (
    <div className='mt-20'>
      <div className='heading text-3xl font-bold mb-4 pl-4'>Request</div>
      <RequestBox />
      <RequestBox />
      <RequestBox />
    </div>
  )
}

export default Request
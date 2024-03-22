import React from 'react'
import Graph from './Dashboard/Graph'
import './Dashboard.css'
import Catalog from './Dashboard/Catalog'


const Dashboard = () => {
  return (
    <div className='container2'>
        <div className='heading'>Dashboard</div>
        <Graph />
        <Catalog />
    </div>
  )
}

export default Dashboard
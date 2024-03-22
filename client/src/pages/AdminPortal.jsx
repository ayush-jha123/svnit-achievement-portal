import React from 'react'
import './AdminPortal.css'
import Sidebar from '../components/AdminPortal/Sidebar'
import Navbar from '../components/Navbar'
import Dashboard from '../components/AdminPortal/Dashboard'
import Request from '../components/AdminPortal/Request'

const AdminPortal = () => {
  return (
    <>
        <Navbar />
        <div className='container1'>
            <Sidebar />
            <Request />
        </div>

    </>
  )
}

export default AdminPortal
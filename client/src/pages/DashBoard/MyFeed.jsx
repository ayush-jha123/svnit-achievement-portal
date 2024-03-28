import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar.jsx'
import DashSide from './DashSide.jsx'

export default function MyFeed() {
  return (
    <>
    <Navbar />
    <div className="grid grid-flow-col h-screen grid-cols-auto">
    <DashSide/>
      <div className="flex-col mt-20 col-span-3">
        card dalna
      </div>
    </div>
  </>
  )
}

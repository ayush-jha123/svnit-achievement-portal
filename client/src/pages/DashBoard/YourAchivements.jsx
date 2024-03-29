import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar.jsx'
import DashSide from './DashSide.jsx'

export default function YourAchivements() {
  return (
    <>
    <Navbar />
    <div className="grid grid-flow-col h-screen grid-cols-auto">
    <DashSide/>
      <div className="flex-col mt-20 col-span-3">
        <div className="flex justify-between">
          <header className="bg-transparent">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold text-gray-900">Achievements</h1>
            </div>
          </header>
          <div className="my-auto flex">
            <Link to={"/Add_Ach"}>
              <div className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-full shadow mr-10 cursor-pointer">
                <span className="font-bold text-xl	">+ &nbsp; </span> Add Achievement
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

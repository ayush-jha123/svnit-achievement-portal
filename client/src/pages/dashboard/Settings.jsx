import React from 'react'
import { Link } from 'react-router-dom'
import DashSide from './DashSide.jsx'

export default function Settings() {
  return (
    <div>
      <div className="grid grid-flow-col h-screen grid-cols-auto mt-12">
        <DashSide />
        <div className="flex-col mt-2 col-span-3">
          <div className="flex justify-between">
            <header className="bg-transparent">
              <div className="max-w-8xl mx-auto py-6">
                <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
              </div>
            </header>
          </div>
        </div>
      </div>
    </div>
  )
}

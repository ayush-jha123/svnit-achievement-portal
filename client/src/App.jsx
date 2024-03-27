import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Achivements from './pages/Achivements'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Opp from './pages/opp'
import Dash from './pages/Dashboard'

import Settings from './pages/DashBoard/Settings'
import YourAchivements from './pages/DashBoard/YourAchivements'
import Skills from './pages/DashBoard/Skills'
import YourExperience from './pages/DashBoard/YourExperience'
import AdminPortal from './pages/AdminPortal'
import LoginForm from './pages/loginform/LoginForm'
import Homepage from './pages/homepage/Homepage'



function App() {
  return (
    <BrowserRouter>
    <>
    
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
          <Route path='/Achivements' element={<Achivements />}></Route>
          <Route path='/Opportunities' element={< Opp/>}></Route>
          <Route path='/Dashboard' element={< Dash/>}></Route>

          <Route path='/YourAchivements' element={<YourAchivements/>}></Route>
          <Route path='/Skills' element={<Skills/>}></Route>
          <Route path='/YourExperience' element={<YourExperience/>}></Route>
          <Route path="/Settings" element={<Settings/>}></Route>


          <Route path='/Admin' element={< AdminPortal/>}></Route>
          <Route path='/Login' element={< LoginForm/>}></Route>

        </Routes>
    </>
    </BrowserRouter>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Achivements from './pages/Achivements'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Opp from './pages/opp'
import Dash from './pages/Dashboard'
import EditProfile from './pages/dashboard/EditProfile'
import YourAchivements from './pages/dashboard/YourAchivements'
import YourOpp from './pages/dashboard/YourOpp'
import Add_Ach from './pages/dashboard/Add_Ach'
import LoginForm from './pages/loginform/LoginForm'
import Homepage from './pages/homepage/Homepage'
import AchDetails from './components/Ach_card_details'
import OppDetails from './components/Opp_card_details'
import Add_Opp from './pages/dashboard/Add_Opp';
import SignIn from './pages/loginform/SignIn'
import Navbar from './components/Navbar'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/Achivements' element={<Achivements />}></Route>
        <Route path='/Opportunities' element={< Opp />}></Route>
        <Route path='/Dashboard' element={< Dash />}></Route>

        <Route path='/YourAchivements' element={<YourAchivements />}></Route>
        <Route path='/YourOpp' element={<YourOpp />}></Route>
        <Route path="/EditProfile" element={<EditProfile />}></Route>
        <Route path="/Add_Ach" element={<Add_Ach />}></Route>
        <Route path="/Add_Opp" element={<Add_Opp />}></Route>
        <Route path="/Ach_card_details/:id" element={<AchDetails />}></Route>
        <Route path="/Opp_card_details/:id" element={<OppDetails />}></Route>

        <Route path='/Login' element={< LoginForm />}></Route>
        <Route path='/Login/signin' element={< SignIn />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

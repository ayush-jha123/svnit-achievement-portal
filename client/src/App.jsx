import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Achivements from './pages/Achivements'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Opp from './pages/opp'
import Dash from './pages/Dashboard'
import Settings from './pages/DashBoard/Settings'
import YourAchivements from './pages/DashBoard/YourAchivements'
import MyFeed from './pages/DashBoard/MyFeed'
import YourOpp from './pages/DashBoard/YourOpp'
import Add_Ach from './pages/DashBoard/Add_Ach'
import AdminPortal from './pages/AdminPortal'
import LoginForm from './pages/loginform/LoginForm'
import Homepage from './pages/homepage/Homepage'
import AchDetails from './components/Ach_card_details'
import OppDetails from './components/Opp_card_details'
import Add_Opp from './pages/DashBoard/Add_Opp';
import SignIn from './pages/loginform/SignIn'
import Navbar from './components/Navbar'

function App() {
  return (
    <BrowserRouter>
     <Navbar/>
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
          <Route path='/Achivements' element={<Achivements />}></Route>
          <Route path='/Opportunities' element={< Opp/>}></Route>
          <Route path='/Dashboard' element={< Dash/>}></Route>

          <Route path='/YourAchivements' element={<YourAchivements/>}></Route>
          <Route path='/MyFeed' element={<MyFeed/>}></Route>
          <Route path='/YourOpp' element={<YourOpp/>}></Route>
          <Route path="/Settings" element={<Settings/>}></Route>
          <Route path="/Add_Ach" element={<Add_Ach/>}></Route>
          <Route path="/Add_Opp" element={<Add_Opp/>}></Route>
          <Route path="/Ach_card_details" element={<AchDetails/>}></Route>
          <Route path="/Opp_card_details" element={<OppDetails/>}></Route>


          <Route path='/Admin' element={< AdminPortal/>}></Route>
          <Route path='/Login' element={< LoginForm/>}></Route>
          <Route path='/Login/signin' element={< SignIn/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App

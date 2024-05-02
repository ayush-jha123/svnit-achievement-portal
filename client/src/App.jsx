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
import carddetails from './components/carddetails'
import Add_Opp from './pages/DashBoard/Add_Opp';

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
          <Route path='/MyFeed' element={<MyFeed/>}></Route>
          <Route path='/YourOpp' element={<YourOpp/>}></Route>
          <Route path="/Settings" element={<Settings/>}></Route>
          <Route path="/Add_Ach" element={<Add_Ach/>}></Route>
          <Route path="/Add_Opp" element={<Add_Opp/>}></Route>
          <Route path="/card_details" element={<carddetails/>}></Route>


          <Route path='/Admin' element={< AdminPortal/>}></Route>
          <Route path='/Login' element={< LoginForm/>}></Route>

        </Routes>
    </>
    </BrowserRouter>
  )
}

export default App

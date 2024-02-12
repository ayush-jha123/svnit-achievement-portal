import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Achivements from './pages/Achivements'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Opp from './pages/opp'
import Dash from './pages/Dashboard'
// import Navbar from './components/Navbar'

function App() {
  return (
    <BrowserRouter>
    <>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Achivements' element={<Achivements />}></Route>
          <Route path='/Opportunities' element={< Opp/>}></Route>
          <Route path='/Dashboard' element={< Dash/>}></Route>
        </Routes>
    </>
    </BrowserRouter>
  )
}

export default App

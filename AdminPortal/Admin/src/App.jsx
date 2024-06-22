import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminPortal from './pages/AdminPortal'
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={< AdminPortal />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

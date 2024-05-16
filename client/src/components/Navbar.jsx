import React from 'react'
import './Navbar.css'
import Navbuttons from './NavBarButton/Navbuttons'
import Navbutton from './NavBarButton/Navbutton'
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { signOut } from '../redux/user/userSlice'


export default function Navbar() {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const {currentUser}=useSelector(state=>state.user)

  const handleLogout=(e)=>{
    e.preventDefault();
    dispatch(signOut())
    navigate('/Dashboard')
    console.log(currentUser)
  }
  return (
    <>
        <div className='navbar'>
          <div className='title'>
            <img  src='./assets/logo.svg'></img>
            <div className='name'> Achievo </div>
          </div>
          <div className='buttons'>
          <Navbuttons/>
          </div>
          <div>
          {currentUser?<button onClick={handleLogout}>LOG OUT</button>:<Link to={"/Login"} style={{textDecoration:"none"}}><Navbutton title="LOG IN"/></Link>}
          </div>
        </div>
    </>
  )
}


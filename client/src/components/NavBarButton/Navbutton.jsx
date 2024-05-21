import React from 'react'
// import './Navbutton.css'


export default function Navbutton({ title = "Button" }) {
  return (
    <div className='nav-button select-none m-2.5 p-1.5 text-black bg-transparent opacity-70 transition-all ease-in-out duration-200 w-max cursor-pointer border-b border-transparent hover:text-purple-800 hover:border-purple-800 hover:opacity-100'>{title}</div>
  )
}

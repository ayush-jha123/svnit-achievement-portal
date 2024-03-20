import React from 'react';
import Navbar from './Navbar.jsx';
import Logo from './Logo.jsx';
import './LoginForm.css';
import Main from './main.jsx';

export default function LoginForm() {
    return (
        <div className='wrapper'>

            <div className='navbar'>
                <Navbar /> 
            </div>

            <div className='svnit-logo'>
                <Logo />
            </div>
            <div className="main">
                < Main />
            </div>
        </div>
    );
}
import React from 'react';
import Logo from './Logo.jsx';
import './LoginForm.css';
// import Main from './Main.jsx';
import ModifiedMain from './SignUp.jsx';
import Navbar from '../../components/Navbar.jsx';

export default function LoginForm() {
    return (
        <div className='wrapper'>
            <div className='navbar'>
                {/* <Navbar />  */}
            </div>

            <div className='svnit-logo'>
                {/* <Logo /> */}
            </div>
            <div className="flex flex-wrap w-screen h-4/6 box-border justify-center mt-20">
                < ModifiedMain />
            </div>
        </div>
    );
}
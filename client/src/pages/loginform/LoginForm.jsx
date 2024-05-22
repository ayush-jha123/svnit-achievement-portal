import React from 'react';
import ModifiedMain from './SignUp.jsx';
import Navbar from '../../components/Navbar.jsx';

export default function LoginForm() {
    return (
        <div>
            <div className="flex flex-wrap w-screen h-4/6 box-border justify-center mt-20">
                < ModifiedMain />
            </div>
        </div>
    );
}
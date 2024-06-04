import React, { useState } from "react";
import Navbuttons from "./NavBarButton/Navbuttons";
import Navbutton from "./NavBarButton/Navbutton";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signOut } from "../redux/user/userSlice";
import { Avatar } from "@material-tailwind/react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(signOut());
    navigate("/Dashboard");
    console.log(currentUser);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="navbar flex items-center justify-between h-16 w-full fixed top-0 bg-white shadow-md px-6 z-50">
        <div className="title flex items-center">
          <img
            src="./assets/logo.svg"
            className="w-12 h-12 object-contain mr-4"
            alt="logo"
          />
          <div className="name text-2xl font-bold">Achievo</div>
        </div>
        <div className="hidden md:flex">
          <Navbuttons />
        </div>
        <div className="md:hidden flex items-center">
          <button className="outline-none mobile-menu-button" onClick={toggleMenu}>
            <svg
              className="w-6 h-6 text-gray-500"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        <div>
          {currentUser ? (
            <button
              onClick={handleLogout}
              className="text-black hover:text-gray-700 transition-all ease-in-out"
            >
              LOG OUT
            </button>
          ) : (
            <Link to={"/Login"} className="text-black no-underline">
              <Navbutton title="LOG IN" />
            </Link>
          )}
        </div>
      </div>

      <div className={`mobile-menu ${menuOpen ? 'flex' : 'hidden'} md:hidden mt-20 justify-center pl-20 bg-gray-400`}>
        <Navbuttons />
      </div>

      <style jsx>{` 
        .mobile-menu-button {
          display: none;
        }
        @media (max-width: 768px) {
          .mobile-menu-button {
            display: block;
          }
        }
      `}</style>
    </>
  );
}

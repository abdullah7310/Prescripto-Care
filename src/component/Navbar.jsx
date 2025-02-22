import React, { useEffect, useState } from 'react';
import logo from '../assets/logo-prescripto.png';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaBars, FaUserCircle } from "react-icons/fa";

function Navbar({ isLoggedIn, setIsLoggedIn }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [userLog, setUserLog] = useState(false);

  useEffect(() => {

    const isLoggedIn = localStorage.getItem("userLog") === "true";
    setUserLog(isLoggedIn);
    setIsLoggedIn(isLoggedIn);
  },  [setIsLoggedIn]);



  const navigate = useNavigate()

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("userLog"); // LocalStorage se login data hata do
    setUserLog(false); // Local state ko false karo
    setIsLoggedIn(false); // Parent component ka state update karo
    setIsDropdownOpen(false); // Dropdown close karo
    navigate("/"); // Home page ya login page pe navigate karo
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='px-2 w-full h-[40px] flex justify-between items-center sm:px-6 sm:h-[45px]  border-b-1 border-[#ADADAD] lg:px-20'>
      <div className='w-[30%] h-[80%] sm:w-[17%] sm:h-full md:w-[18%] lg:w-[10%]  flex items-center'>
        <img className='w-[100%] h-[65%] sm:h-[60%]' src={logo} alt="" />
      </div>
      <div className='w-[15%] h-[80%] flex items-center justify-end sm:hidden md:hidden lg:hidden '>
        <FaBars size={20} onClick={toggleMenu} />
      </div>
      <nav className=' hidden sm:flex  md:flex md:justify-between md:w-[45%] sm:gap-6  lg:flex lg:justify-between lg:w-[34%]  gap-10 text-xs font-semibold'>
        <NavLink
          to="/"
          end
          className={({ isActive }) => isActive ? "py-2 border-b-2 border-blue-400" : "text-black py-2"}>
          HOME
        </NavLink>
        <NavLink
          to="/all-doctors"
          className={({ isActive }) => isActive ? "py-2 border-b-2 border-blue-400" : "text-black py-2"}>
          ALL DOCTORS
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => isActive ? " py-2 border-b-2 border-blue-400" : "text-black py-2"}>
          ABOUT
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => isActive ? " py-2 border-b-2 border-blue-400" : "text-black py-2"}>
          CONTACT
        </NavLink>
      </nav>
      {(isLoggedIn || userLog) ? (
        <div className="relative">
          <FaUserCircle
            size={30}
            className="text-blue-500 cursor-pointer"
            onClick={toggleDropdown}
          />
        {isDropdownOpen && (
  <ul className="absolute z-20 right-0 mt-2 w-[150px] bg-white shadow-lg rounded-lg border-1 border-gray-300">
    <li 
      className="px-4 py-2 font-outfit text-[13px] text-[#4B5563] hover:bg-gray-100 cursor-pointer" 
      onClick={() => { 
        setIsDropdownOpen(false);
        navigate('/profile');
      }}>
      Profile
    </li>
    <li 
      className="px-4 py-2 font-outfit text-[13px] text-[#4B5563] hover:bg-gray-100 cursor-pointer" 
      onClick={() => { 
        setIsDropdownOpen(false);
        navigate('/my-appointments');
      }}>
      My Appointments
    </li>
    <li 
      className="px-4 py-2 font-outfit text-[13px] text-[#4B5563] hover:bg-gray-100 cursor-pointer" 
      onClick={handleLogout}>
      Logout
    </li>
  </ul>
)}

        </div>
      ) : (
        <button
          onClick={() => navigate('/signUp_page')}
          className='hidden md:block w-[185px] sm:block h-[80%] sm:w-[150px] text-sm border-2 bg-[#5F6FFF] rounded-[47px] text-white'>
          Create Account
        </button>
      )}


      {isMenuOpen && (
        <div className='sm:hidden absolute top-[0px] w-full h-[50vh] right-0 bg-blue-300 z-10'>

          <div className="flex justify-end p-4">
            <FaBars size={20} onClick={toggleMenu} />
          </div>

          <div className='flex flex-col py-4'>
            <NavLink to="/" className="py-2 px-2 text-white text-xs w-full bg-[#5F6FFF] ">HOME</NavLink>
            <NavLink to="/all-doctors" className="py-2 w-full text-black">ALL DOCTORS</NavLink>
            <NavLink to="/about" className="py-2 text-black w-full">ABOUT</NavLink>
            <NavLink to="/contact" className="py-2 text-black w-full">CONTACT</NavLink>
            <button className="w-[150px] h-[50px] border-2 bg-[#5F6FFF] rounded-[47px]  text-white">
              Create Account
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;

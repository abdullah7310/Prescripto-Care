import React, { useEffect, useState } from 'react';
import logo from '../assets/logo-prescripto.png';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaBars, FaUserCircle } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";


function Navbar({ isLoggedIn, setIsLoggedIn }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [userLog, setUserLog] = useState(false);

  useEffect(() => {

    const isLoggedIn = localStorage.getItem("userLog") === "true";
    setUserLog(isLoggedIn);
    setIsLoggedIn(isLoggedIn);
  }, [setIsLoggedIn]);



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
    <div className='px-2 fixed top-0 bg-white z-10 w-full h-[40px] flex justify-between items-center sm:px-6 sm:h-[45px]  border-b-1 border-[#ADADAD] lg:px-20 '>
      <div onClick={()=> navigate("/")} className='w-[30%] h-[80%] sm:w-[17%] sm:h-full md:w-[18%] lg:w-[10%]  flex items-center cursor-pointer'>
        <img className='w-[100%] h-[65%] sm:h-[60%]' src={logo} alt="" />
      </div>
      {!isLoggedIn && !userLog && (
        <div className='relative z-20 sm:hidden md:hidden lg:hidden '>
          {!isMenuOpen ?<FaBars size={20} onClick={toggleMenu} />:<RxCross1 size={20} onClick={toggleMenu}/>}
          
          {isMenuOpen && (
            <nav className="absolute pb-2 right-0 m-2 w-[120px] flex flex-col bg-white shadow-lg rounded-lg border border-gray-300">
              <NavLink
                to="/"
                onClick={()=>{setIsMenuOpen(false)}}
                className={({ isActive }) =>
                  `px-4 py-2 text-[#4B5563] hover:bg-gray-100 text-[14px] cursor-pointer 
      ${isActive ? "underline decoration-blue-400 underline-offset-3" : ""}`
                }>
                Home
              </NavLink>

              <NavLink
                to="/all-doctors"
                onClick={()=>{setIsMenuOpen(false)}}
                className={({ isActive }) =>
                  `px-4 py-2 text-[#4B5563] hover:bg-gray-100 cursor-pointer text-[14px]
      ${isActive ? "underline decoration-blue-400 underline-offset-3" : ""}`
                }>
                All Doctors
              </NavLink>

              <NavLink
                to="/about"
                onClick={()=>{setIsMenuOpen(false)}}
                className={({ isActive }) =>
                  `px-4 py-2 text-[#4B5563] hover:bg-gray-100 cursor-pointer text-[14px]
      ${isActive ? "underline decoration-blue-400 underline-offset-3" : ""}`
                }>
                About
              </NavLink>

              <NavLink
                to="/contact"
                onClick={()=>{setIsMenuOpen(false)}}
                className={({ isActive }) =>
                  `px-4 py-2 text-[#4B5563] hover:bg-gray-100 cursor-pointer text-[14px]
      ${isActive ? "underline decoration-blue-400 underline-offset-3" : ""}`
                }>
                Contact
              </NavLink>
              <div className=" flex justify-center sm:justify-start">
                <button onClick={() => navigate('/signUp_page')} className='w-[100px] py-1 sm:w-[200px]  sm:h-[48px] rounded-[35px] flex items-center justify-center  bg-blue-400'>
                  <p className='text-xs text-white sm:text-base'>Create Account</p>
                </button>
              </div>
            </nav>

          )}
        </div>
      )}
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
                onClick={() => {
                  setIsDropdownOpen(false);
                  navigate('/');
                }}>
                Home
              </li>
              <li
                className="px-4 py-2 font-outfit text-[13px] text-[#4B5563] hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setIsDropdownOpen(false);
                  navigate('/all-doctors');
                }}>
                All Doctors
              </li>
              <li
                className="px-4 py-2 font-outfit text-[13px] text-[#4B5563] hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setIsDropdownOpen(false);
                  navigate('/about');
                }}>
                About
              </li>
              <li
                className="px-4 py-2 font-outfit text-[13px] text-[#4B5563] hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setIsDropdownOpen(false);
                  navigate('/contact');
                }}>
                Contact
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


      {/* {isMenuOpen && (
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
      )} */}
    </div>
  );
}

export default Navbar;

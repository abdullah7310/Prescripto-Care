import React, { useState } from 'react'
import Navbar from './component/Navbar'
import { Route, Router, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import Home from './pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
// import AllDoctors from './pages/AllDoctors';
import Appointment from './Pages/Appointment';
import Home from './Pages/Home';
import AllDoctors from './Pages/AllDoctors';
import SignUp from './Pages/SignUp';
import LoginPage from './Pages/LoginPage';
import MyAppointment from './Pages/MyAppointment';
import Profile from './Pages/Profile';


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginStatus = (status) => {
    setIsLoggedIn(status); 
  };

  return (
    <>

<ToastContainer position="bottom-right" autoClose={3000} />
<Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/all-doctors' element={<AllDoctors/>}/>
      <Route path='/appointment' element={<Appointment/>}/>
      <Route path="/signUp_page" element={<SignUp handleLoginStatus={handleLoginStatus} />} />
      <Route path='/login_page' element={<LoginPage/>}/>
      <Route path='/my-appointments' element={<MyAppointment/>} />
      <Route path='/profile' element={<Profile/>} />
    </Routes>

    </>
  )
}

export default App

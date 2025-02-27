import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function DoctorCard({ image,doctorname, title }) {


  const navigate = useNavigate()

  return (
    <div
      onClick={() =>{
        navigate("/appointment", { state: { image, title, doctorname } });
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: "smooth" }); 
        }, 100); 
      } }
      className='w-[100%] sm:w-[100%] h-[300px] sm:h-[270px] border border-[#C9D8FF] rounded-[10px] overflow-hidden shadow-lg'>
      <div className='h-[70%] w-[100%] flex items-center justify-center bg-[#EAEFFF] '>
        <img src={image} className='h-full' alt="" />
      </div>
      <div>
        <div className='w-1 h-1 rounded-full inline-block  mt-2 ml-2 mr-1 bg-[#0FBF00]'></div>
        <h1 className='inline-block text-[10px] text-[#0FBF00] text-normal font-outfit'>Available</h1>
        <h1 className='font-outfit ml-2 font-medium text-[15px]'>{doctorname}</h1>
        <p className='text-[#4B5563] text-[10px] font-outfit ml-2'>{title}</p>
      </div>

    </div>
  )
}

export default DoctorCard



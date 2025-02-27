import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';

function AppointmentCard({image,date,day,time,doctorname,title, onDelete}) {



    // const location = useLocation();
    // const { image, selectDate, selectDay, selectTime, doctorname, title } = location.state || {};
  return (
    <div className='w-full border-b-1  sm:py-4 sm:h-[35vh] flex items-center justify-between'>
        <div className='bg-[#EAEFFF] w-[40%] h-[60%] rounded-xl sm:rounded-none sm:h-full sm:w-[15%] flex  justify-center'>
            <img src={image} className='sm:h-full w-[100%] ' alt="" />
        </div>
        <div className='sm:w-[82%] py-4 sm:py-0  w-[50%] h-full flex flex-col sm:flex-row  justify-between'>
            <div>
            <h1 className='font-semibold text-[16px] font-outfit text-[#262626]'>{doctorname}</h1>
            <p className='font-medium text-[#4B5563] text-[13px] mb-4'>{title}</p>

            <h1 className='text-[#4B5563] font-semibold font-outfit text-[13px]'>Address: </h1>
            <p className='text-[#4B5563] text-[10px] leading-3 font-[500]'>57th Cross, Richmond <br />
            Circle, Church Road, London</p>

            <h3 className='font-outfit text-[12px] font-semibold text-[#4B5563] mt-4'>Date & Time : <span className='text-[10px] font-[500] font-outfit'> {date} {day}, 2024 | {time} </span></h3>
            </div>
            <div className='flex flex-col py-2  justify-end  sm:items-end'>

                <button className='w-[140px] sm:w-[180px] py-1 sm:py-2 text-[14px] rounded font-outfit  bg-[#5F6FFF] text-white mb-3'>Pay Here</button>
                <button onClick={onDelete} className='w-[140px] sm:w-[180px] py-1 sm:py-2 text-[14px] rounded font-outfit border-1 border-[#4B5563]  text-[#4B5563]'>Cancel appointment</button>
            </div>

        </div>
      
    </div>
  )
}

export default AppointmentCard

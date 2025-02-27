import React from 'react'

function DoctorIcon({image, title,onClick, selectedIcon}) {
  return (
    <>
    <div>
            <div className='mt-8  flex flex-col justify-center items-center cursor-pointer' onClick={onClick}>
              <img className='w-[70px] ' src={image} alt="" />
              <p className={` text-xs font-outfit ${selectedIcon?"underline underline-offset-3 decoration-[#5F6FFF]":""} text-[#4B5563] text-center`}>{title}</p>
            </div>
            
          </div>
    </>
  )
}

export default DoctorIcon

import React from 'react'

function DoctorIcon({image, title,onClick}) {
  return (
    <>
    <div>
            <div className='mt-8 ' onClick={onClick}>
              <img className='w-[80px]' src={image} alt="" />
              <p className='text-xs font-outfit text-[#4B5563] text-center'>{title}</p>
            </div>
            
          </div>
    </>
  )
}

export default DoctorIcon

import React from 'react'

function TitleCard({title, onClick}) {
  return (
    <div onClick={onClick} className='w-auto py-2 px-1 mb-2 h-auto lg:w-full border-1  border-[#B4B4B4] lg:h-[10%] rounded-md  flex lg:mb-2 items-center justify-start  lg:pl-4 lg:py-2'>
      <h3 className='text-[10px] lg:text-xs font-outfit text-[#4B5563]'>{title}</h3>
    </div>
  )
}

export default TitleCard

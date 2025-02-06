import React from 'react'

function TitleCard({title, onClick}) {
  return (
    <div onClick={onClick} className='w-full border-1  border-[#B4B4B4] h-[10%] rounded-md  flex mb-2 items-center justify-start pl-4 py-2'>
      <h3 className='text-xs font-outfit text-[#4B5563]'>{title}</h3>
    </div>
  )
}

export default TitleCard

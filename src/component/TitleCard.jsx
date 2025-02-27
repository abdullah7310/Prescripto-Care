import React from 'react'

function TitleCard({title, onClick, selectedFilter}) {
  return (
    <div onClick={onClick} className={`w-auto py-2 px-1 mb-2 h-auto lg:w-full border-1  border-[#B4B4B4] ${selectedFilter?'bg-[#5F6FFF] text-white border-none':"text-[#4B5563]"} lg:h-[10%] rounded-md  flex lg:mb-2 items-center justify-start  lg:pl-4 lg:py-2 cursor-pointer`}>
      <h3 className='text-[10px] lg:text-xs font-outfit '>{title}</h3>
    </div>
  )
}

export default TitleCard

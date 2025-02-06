import React from 'react'

function ChoosingCard({title,para}) {
  return (
    <div className='w-[33.2%] px-19  flex flex-col items-center justify-center border-1 border-[#ABABAB] h-full'>
    <h3 className='text-[#1F2937] text-start text-[14px] w-full mb-6 font-bold'>{title}</h3>
    <p className='text-[13px] leading-6 font-outfit font-medium text-[#4B5563]'>{para}</p>
  </div>
  )
}

export default ChoosingCard

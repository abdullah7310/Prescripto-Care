import React from 'react'

function ChoosingCard({title,para}) {
  return (
    <div className='sm:w-[33.2%] w-[70%] px-2  sm:px-19  flex flex-col sm:items-center justify-center border rounded-2xl sm:rounded-none sm:border-1 sm:border-[#ABABAB] h-full'>
    <h3 className='text-[#1F2937] text-center sm:text-start text-[14px] w-full mb-6 font-bold'>{title}</h3>
    <p className='text-[13px] leading-6 font-outfit font-medium text-[#4B5563]'>{para}</p>
  </div>
  )
}

export default ChoosingCard

import React from 'react'
import Logo from '../assets/logo-prescripto.png'

function Footer() {
  return (
    <>
            <div className='w-full px-6 sm:px-20'>
            <div className='border-t-1 border-b-1 pt-2 mt-18 sm:w-full sm:h-50 flex items-center sm:mt-18 justify-center sm:border-b-0 border-[#4B5563] sm:mb-4'>
              <div className='w-[85vw] h-[100%] flex justify-between'>
                <div className=' h-full w-[50%]'>
                  <img src={Logo} className='w-[80%] sm:w-[25%] mb-6' alt="" />
                  <p className='text-[10px] w-[70%] font-medium leading-[19px] sm:text-[12px] text-[#4B5563]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className='w-[45%] flex flex-col sm:flex-row'>
                      <div className='w-[80%] sm:w-[50%]  h-full flex flex-col  gap-2'>
                        <h1 className='text-[15px] font-semibold font-outfit text-[#4B5563] mb-4'>COMPANY</h1>
                        <h3 className='font-outfit text-[#4B5563] font-[5px] text-[12px] '>Home</h3>
                        <h3 className='font-outfit text-[#4B5563] font-[5px] text-[12px] '>About Us</h3>
                        <h3 className='font-outfit text-[#4B5563] font-[5px] text-[12px] '>Contact Us</h3>
                        <h3 className='font-outfit text-[#4B5563] font-[5px] text-[12px] '>Privacy policy</h3>
                      </div>
                      <div className='w-[80%] sm:w-[50%] h-full flex flex-col  gap-2'>
                      <h1 className='font-semibold text-[13px] sm:text-[20px] font-outfit text-[#4B5563] mb-4'>GET IN TOUCH</h1>
                        <h3 className='font-outfit text-[#4B5563] font-[5px] text-[11px] sm:text-[13px] '>+1-212-456-7890</h3>
                        <h3 className='font-outfit text-[#4B5563] font-[5px] text-[11px] sm:text-[13px] break-words '>greatstackdev@gmail.com</h3>
                      </div>
                </div>
      
              </div>
      
            </div>
            <div className='w-full h-auto'>
              <p className='text-[10px] sm:text-[13px] w-full text-center mb-3 text-[#4B5563]'>Copyright © 2024 GreatStack - All Right Reserved.</p>
            </div>

            </div>
    </>
  )
}

export default Footer

import React from 'react'
import ContactImage from '../assets/contact_image.png'
import Footer from '../component/Footer'

function Contact() {
  return (
    <div className='w-full mt-[60px] sm:mt-[65px]   my-2 sm:h-[10vh]'>
      <div className='text-center  text-[#4B5563] text-[20px] sm:text-[28px] font-outfit font-normal mt-10'>CONTACT <span className='font-semibold font-outfit text-[#171717]'>US</span>
      </div>

      <div className='flex flex-col sm:flex-row items-center sm:items-start sm:px-20 gap-14 sm:h-[60vh] mt-10'>
        <div className='sm:w-[29%] w-[230px] h-[100%]'>
          <img src={ContactImage} className='w-[100%] h-[100%]' alt="" />
        </div>
        <div className='w-[80%] sm:w-[60%]'>
          <p className='text-[#4B5563] font-outfit text-xs sm:text-sm leading-6 mb-4'>Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</p>
          <p className='text-[#4B5563] font-outfit text-xs sm:text-sm leading-6 mb-4'>Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.</p>
          <h2 className='text-[#4B5563] text-[14px] mb-4 font-bold'>Our Vision</h2>
          <p className='text-[#4B5563] font-outfit text-xs sm:text-sm leading-6 mb-4'>Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
        </div>
      </div> 
      <div className='flex flex-col items-center  sm:flex-row sm:justify-between sm:h-[60vh] mt-18 sm:px-20'>
        <div className='w-[80%] sm:w-[50%] '>
          <form className='flex flex-col rounded-2xl bg-cover  bg-center p-2 sm:p-4 m-auto sm:mt-6 sm:w-[40vw]'>
            <div className="flex justify-between gap-4">
              <input required placeholder='First Name' className='w-1/2 px-2 text-sm py-1 sm:py-2 mb-4 border border-[#ABABAB]' type="text" />
              <input required placeholder='Last Name' className='w-1/2 px-2  text-sm py-1 sm:py-2 mb-4 border border-[#ABABAB]' type="text" />
            </div>
            <input required placeholder='Email ID' className='w-full px-2 py-1 text-sm sm:py-2 mb-4 border border-[#ABABAB]' type="email" />
            <input required placeholder='Phone Number' className='w-full px-2  text-sm py-1 sm:py-2 mb-4 border border-[#ABABAB]' type="tel" />

            <div className='w-full'>
              <button className='w-full text-white font-outfit text-sm  rounded-lg bg-[#5F6FFF] hover:bg-blue-400 active:bg-orange-200 font-bold  sm:px-[20px] py-1 sm:py-2 mb-4 flex justify-center items-center'>
                Contact Us
              </button>
            </div>
          </form>



        </div>
        <iframe className=' w-[80%] sm:w-[30%] h-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27004.263703651308!2d76.29856553856717!3d32.21681318829639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391b50df65bd7311%3A0x3e08bdb100c6dc10!2sDharamshala%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1738577692642!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

      </div>
      <Footer />
    </div>
  )
}

export default Contact

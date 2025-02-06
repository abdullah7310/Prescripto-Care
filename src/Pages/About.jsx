import React from 'react'
import AboutImage from '../assets/about_image.png'
import ChoosingCard from '../component/ChoosingCard'
import Footer from '../component/Footer'

function About() {
  return (
    <div className='w-full mt-10 my-2 h-[10vh]'>
      <div className='text-center  text-[#4B5563] text-[30px] font-outfit font-normal'>ABOUT <span className='font-semibold font-outfit text-[#171717]'>US</span></div>
      <div className='flex px-20  gap-14 h-[60vh] mt-10'>
        <div className='w-[29%] h-[100%]'>
          <img src={AboutImage} className='w-[100%] h-[100%]' alt="" />
        </div>
        <div className='w-[60%]'>
          <p className='text-[#4B5563] font-outfit text-sm leading-6 mb-4'>Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</p>
          <p className='text-[#4B5563] font-outfit text-sm leading-6 mb-4'>Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.</p>
          <h2 className='text-[#4B5563] text-[14px] mb-4 font-bold'>Our Vision</h2>
          <p className='text-[#4B5563] font-outfit text-sm leading-6 mb-4'>Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
        </div>
      </div>

    <div className='px-20 text-[#4B5563] mt-20 mb-10 text-[18px] font-outfit font-normal'>WHY <span className='font-semibold font-outfit text-[#171717]'>CHOOSE US</span>
    </div>

    <div className='px-20 flex items-center justify-center h-[35vh] mb-30'>
      <ChoosingCard title="EFFICIENCY" para="Streamlined appointment scheduling that fits into your busy lifestyle."/>
      <ChoosingCard title="CONVENINIENCE:" para="Access to a network of trusted healthcare professionals in your area."/>
      <ChoosingCard title="PERSONALISATION" para="Tailored recommendations and reminders to help you stay on top of your health."/>

    </div>

    <Footer/>
    </div>
    

  )
}

export default About

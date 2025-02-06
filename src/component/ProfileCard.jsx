import React, { useState } from 'react'
import Doctor from '../assets/doctor.png'
import { CiCirclePlus } from "react-icons/ci";

function ProfileCard() {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [address, setAddress] = useState("")
  const [gender,setGender] = useState("")
  const [birthday, setBirthday] = useState("")
  const [edit, setEdit] = useState(false) 

  function  there(){}
  
  function handleEdit(){
    setEdit(true)
  }

  function handleSaveInfo(){
    setEdit(false)
  }

  return (
    <div className=' w-full h-[85vh]'>
      <div className='w-[40%] h-full'>
        <div className='  h-[25%] flex gap-3'>
          <div className='bg-[#EAEFFF] rounded w-[30%] h-full'><img src={Doctor} className='h-full' alt="" /></div>
        <div className='bg-gray-400 rounded w-[30%] h-full flex justify-center items-center'><CiCirclePlus size={60}/></div>
          
        </div>
        <input onChange={(e)=>setName(e.target.value)} value={name} disabled={!edit} type="text" className='border-b-1 mt-2 font-outfit w-full py-1 text-[20px] border-gray-300' placeholder='Enter Name' />
        <p className='font-outfit text-[12px] underline text-[#797979] mt-4'>CONTACT INFORMATION</p>
        <div className=' flex justify-between items-center mt-3'>
          <div className='w-[30%] font-outfit text-[13px] text-[#4B5563]'><label htmlFor="email">Email : </label></div>
          <div className='w-[65%] font-outfit text-[13px]'><input onChange={(e)=>setEmail(e.target.value)} value={email} disabled={!edit} type="text" placeholder='your email' className='' /></div>
        </div>
        <div className=' flex justify-between items-center mt-3'>
          <div className='w-[30%] font-outfit text-[13px] text-[#4B5563]'><label htmlFor="email">Address : </label></div>
          <div className='w-[65%] font-outfit text-[13px]'><input onChange={(e)=>setAddress(e.target.value)} value={address} disabled={!edit} type="text" placeholder='your address' className='' /></div>
        </div>
        <p className='font-outfit text-[12px] underline text-[#797979] mt-4'>BASIC INFORMATION</p>
        <div className=' flex justify-between items-center mt-3'>
          <div className='w-[30%] font-outfit text-[13px] text-[#4B5563]'><label htmlFor="email">Gender : </label></div>
          <div className='w-[65%] font-outfit text-[13px]'><input onChange={(e)=>setGender(e.target.value)} value={gender} disabled={!edit} type="text" placeholder='your gender' className='' /></div>
        </div>
        <div className=' flex justify-between items-center mt-3'>
          <div className='w-[30%] font-outfit text-[13px] text-[#4B5563]'><label htmlFor="email">Birthday : </label></div>
          <div className='w-[65%] font-outfit text-[13px]'><input onChange={(e)=>setBirthday(e.target.value)} value={birthday} disabled={!edit} type="text" placeholder='your birthday' className='' /></div>
        </div>

        <button className='w-[17%] mt-10 mr-3 text-[13px] text-[#4B5563] border-[#5F6FFF] font-outfit border-1 px-3 py-2 rounded-[25px]' onClick={()=>handleEdit()}>Edit</button>
        <button className='w-[30%] mt-10 mr-3 text-[13px] text-[#4B5563] border-[#5F6FFF] font-outfit border-1 px-3 py-2 rounded-[25px]' onClick={()=>handleSaveInfo()}>Save information</button>
        
      </div>
    </div>
  )
}

export default ProfileCard

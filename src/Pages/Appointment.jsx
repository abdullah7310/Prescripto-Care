import React, { useState } from 'react'
import Doctor from '../assets/doctor.png'
import DoctorCard from '../component/DoctorCard'
import Vector from '../assets/Vector.png'
import AboutIcon from '../assets/Page-1.png'
import Footer from '../component/Footer'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Appointment({isLoggedIn}) {
  const navigate = useNavigate()
    const [appointedDoctors, setAppointmentDoctors] = useState(() => {
      const doctor = localStorage.getItem("doctors");
      return doctor ? JSON.parse(doctor) : [];
    })

  const location = useLocation();
  const { image, title, doctorname } = location.state || {};

  const [selectDate,setSelectDate] = useState(null)
  const [ selectDay, setSelectDay] = useState(null)
  const [selectTime,setSelectTime] = useState(null)

  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const today = new Date(); 
  const weekDates = [];

  for (let i = 0; i < 7; i++) {
    let newDate = new Date();
    newDate.setDate(today.getDate() + i); // Aaj se i din aage ka date
    weekDates.push({
      day: daysOfWeek[newDate.getDay()], // Week ka naam (e.g., MON, TUE)
      date: newDate.getDate(), // Date (e.g., 10, 11, 12)
      isToday: i === 0, // Pehla din (aaj ka din) highlight hoga
    });


  }
  function handleAppointment(){

    if (!isLoggedIn) {
      toast.error("Please log in to book an appointment!");
      navigate("/login_page");
      return;
    }
    if(selectDate && selectTime && selectDay){
      const appointmentData = {
        selectDate,
        selectDay,
        selectTime,
        image,
        doctorname,
        title
      };
      const updatedList = [...appointedDoctors,appointmentData]

      localStorage.setItem("doctors", JSON.stringify(updatedList));
      setAppointmentDoctors(updatedList);
      toast.success("Your appointment booked successfully")
      // navigate("/my-appointments", {state: {selectDate, selectDay, selectTime, image,doctorname,title}})
    }else{
      alert("Please fill your Details Carefully!!")
    }
    setSelectDate(null)
    setSelectTime(null)
  }

    const allDoctors = [
      { image: Doctor, doctorname: "Dr. Aisha Khan", title: "Gastroenterologist" },
      { image: Doctor, doctorname: "Dr. Rohan Mehta", title: "Pediatrician" },
      { image: Doctor, doctorname: "Dr. Simran Kaur", title: "Gynecologist" },
      { image: Doctor, doctorname: "Dr. Aman Verma", title: "Neurologist" },
      { image: Doctor, doctorname: "Dr. Priya Sharma", title: "Dermatologist" },
      { image: Doctor, doctorname: "Dr. Juhi Singh", title: "Neurologist" },
      { image: Doctor, doctorname: "Dr. Rajat Bose", title: "Pulmonologist" },
    ];

  return (
    <>
    <div className='px-2 sm:px-20 mt-4 sm:mt-10 w-full sm:pb-10'>
      <div className='flex justify-between'>
        <div className='sm:w-[17%] flex sm:items-end rounded-xl bg-[#5F6FFF] overflow-hidden h-[22vh] sm:h-[40vh]'>
            <img src={image?image:Doctor}  alt="" />
        </div>
        <div className='w-[65%] sm:w-[78%] rounded-xl border-1 border-[#4B5563]  sm:px-8 px-2 py-1 sm:py-4 leading-tight' >
            <div className='flex gap-1 mb-1 items-center sm:justify-normal sm:items-center sm:gap-2'>
              <h1 className='font-outfit text-[#1F2937] text-[15px] sm:text-[22px] font-semibold '>{doctorname?doctorname:"James Doe"}</h1>
              <div className="w-auto h-full "><img src={Vector} className='sm:h-[70%] w-[60%] sm:w-[70%]'  alt="" /></div>
            </div>
            <div className='flex items-center gap-2'>
            <h3 className='font-outfit text-[10px] sm:text-[12px] text-[#4B5563]'>{title?title:"General Physician"}</h3>
            <div className='border-1 border-[#4B5563] text-[10px] sm:text-xs h-[5%] sm:h-[20%] font-outfit w-auto px-2 sm:px-3 sm:py-1 rounded-[50px]'>2 years</div>
            </div>
            <div className='flex items-center gap-2 mt-4 mb-2'>
              <h3 className='font-outfit text-sm sm:text-[20px] font-semibold text-[#4B5563]'>About </h3>
              <div><img src={AboutIcon} className='w-[90%]' alt="" /></div>
            </div>
            <p className='w-[80%] font-outfit text-[#4B5563] text-[10px] sm:text-xs  tracking-wide leading-5'>
            Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective 
            </p>

            <div className='flex items-center gap-2 mt-4 mb-2'>
              <h3 className='font-outfit text-[14px] sm:text-sm font-normal text-[#4B5563]'>Appointment fee : </h3>
              <div className='font-outfit text-[15px] sm:text-[18px] font-semibold'>$ 50</div>
            </div>
        </div>

      </div>
      <div className='w-[99%] m-auto sm:w-[78%] px-2 sm:ml-[22%] mt-8 rounded-xl   py-4 leading-tight'>
        <h1 className='font-outfit text-[#565656] font-semibold text-[14px] sm:text-[17px]'>Booking slots</h1>
        <div className='grid grid-cols-5 sm:flex gap-2 sm:gap-4 mt-4'>
          {weekDates.map((day, index) => (
            <div
              key={index}
              onClick={()=>{
                setSelectDate(day.date)
                setSelectDay(day.day)
              }}
              className={`sm:w-15 w-10 h-15 sm:h-22  flex flex-col items-center justify-center rounded-[35px] px-2 py-2 cursor-pointer 
                ${selectDate === day.date ? 'bg-[#5F6FFF] text-white' :  'border border-gray-400 text-gray-600'}`}
            >
              <h1 className='text-[12px] sm:text-md font-semibold'>{day.day}</h1>
              <p className='text-[12px] sm:text-md font-semibold'>{day.date}</p>
            </div>
          ))}
        </div>
        <div className='grid grid-cols-3 sm:flex flex-wrap gap-2 mt-6 justify-start'>
          {['8:00 AM', '8:30 AM', '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM'].map((time, i) => (
            <div
              key={i}
              onClick={()=>setSelectTime(time)}
              className={`border-1 h-[30px] w-21 rounded-[20px] px-4 flex items-center justify-center text-xs cursor-pointer 
                ${selectTime === time ? 'bg-[#5F6FFF] text-white' : 'text-gray-600 border-gray-400'}`}
            >
              {time}
            </div>
          ))}
        </div>
        <button
          onClick={()=> handleAppointment()}
         className='sm:w-[20vw] px-3 sm:px-2 sm:py-4 py-2 rounded-[28px] font-outfit text-[14px] sm:text-[17px] bg-[#5F6FFF] text-white mt-8'>
          Book an appointment
          
        </button>
     </div>

     <div className='w-full flex flex-col items-center justify-center mt-30'>
      <h1 className='font-outfit text-[20px] sm:text-[25px] '>Related Doctors</h1>
      <p className='font-outfit text-[#4B5563] text-[10px] sm:text-[13px]'>Simply browse through our extensive list of trusted doctors.</p>
     </div>

     <div className='w-[85vw] h-auto m-auto mt-6 grid grid-cols-1 sm:grid-cols-5 gap-4 sm:gap-6 '>
        {allDoctors.map((card,ind)=>(
          <DoctorCard key={ind} image={card.image} doctorname={card.doctorname} title={card.title} />
        ))}
      </div>
     
    </div>
    <Footer/>
    </>
  )
}

export default Appointment

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
    <div className='px-20 mt-10 w-full pb-10'>
      <button onClick={()=>navigate(-1)}>go back</button>
      <div className='flex justify-between'>
        <div className='w-[17%] flex items-end rounded-xl bg-[#5F6FFF] overflow-hidden h-[40vh]'>
            <img src={image?image:Doctor}  alt="" />
        </div>
        <div className='w-[78%] rounded-xl border-1 border-[#4B5563]  px-8 py-4 leading-tight' >
            <div className='flex items-center gap-2'>
              <h1 className='font-outfit text-[#1F2937] text-[22px] font-semibold '>{doctorname?doctorname:"James Doe"}</h1>
              <div className="w-auto h-full "><img src={Vector} className='h-[70%] w-[70%]'  alt="" /></div>
            </div>
            <div className='flex items-center gap-2'>
            <h3 className='font-outfit text-[12px] text-[#4B5563]'>{title?title:"General Physician"}</h3>
            <div className='border-1 border-[#4B5563] text-xs h-[20%] font-outfit w-auto px-3 py-1 rounded-[50px]'>2 years</div>
            </div>
            <div className='flex items-center gap-2 mt-4 mb-2'>
              <h3 className='font-outfit font-semibold text-[#4B5563]'>About </h3>
              <div><img src={AboutIcon} className='w-[90%]' alt="" /></div>
            </div>
            <p className='w-[80%] font-outfit text-[#4B5563] text-xs leading-5'>
            Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective 
            </p>

            <div className='flex items-center gap-2 mt-4 mb-2'>
              <h3 className='font-outfit text-sm font-normal text-[#4B5563]'>Appointment fee : </h3>
              <div className='font-outfit font-semibold'>$ 50</div>
            </div>
        </div>

      </div>
      <div className='w-[78%] ml-[22%] mt-8 rounded-xl   py-4 leading-tight'>
        <h1 className='font-outfit text-[#565656] font-semibold text-[17px]'>Booking slots</h1>
        <div className='flex gap-4 mt-4'>
          {weekDates.map((day, index) => (
            <div
              key={index}
              onClick={()=>{
                setSelectDate(day.date)
                setSelectDay(day.day)
              }}
              className={`w-15 h-22 flex flex-col items-center justify-center rounded-[35px] px-2 py-2 cursor-pointer 
                ${selectDate === day.date ? 'bg-[#5F6FFF] text-white' :  'border border-gray-400 text-gray-600'}`}
            >
              <h1 className='text-md font-semibold'>{day.day}</h1>
              <p className='text-md font-semibold'>{day.date}</p>
            </div>
          ))}
        </div>
        <div className='flex flex-wrap gap-2 mt-6 justify-start'>
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
         className='w-[20vw] px-2 py-4 rounded-[28px] font-outfit text-[17px] bg-[#5F6FFF] text-white mt-8'>
          Book an appointment
          
        </button>
     </div>

     <div className='w-full flex flex-col items-center justify-center mt-30'>
      <h1 className='font-outfit text-[25px] '>Related Doctors</h1>
      <p className='font-outfit text-[#4B5563] text-[13px]'>Simply browse through our extensive list of trusted doctors.</p>
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

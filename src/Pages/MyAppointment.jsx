import React, { useState, useEffect } from 'react';
import AppointmentCard from '../component/AppointmentCard';

function MyAppointment() {
  const [appointments, setAppointments] = useState([]);

  // Fetch appointments from localStorage on component mount
  useEffect(() => {
    const storedAppointments = JSON.parse(localStorage.getItem("doctors")) || [];
    setAppointments(storedAppointments);
  }, []);

  function handleDelete(ind){
        const deletedData = appointments.filter((_ , index)=> index!==ind)
        setAppointments(deletedData)
        localStorage.setItem("doctors",JSON.stringify(deletedData));
  }

  return (
    <div className='px-20 h-[80vh] mt-10'>
      <h1 className='w-full border-b-1 pb-3 font-outfit text-[17px] '>My Appointments</h1>

      {/* If no appointments exist */}
      {appointments.length === 0 ? (
        <p className='text-gray-500 mt-5 font-outfit'>No appointments booked yet.</p>
      ) : (
        <div className='grid gap-4 mt-4'>
          {appointments.map((appointment, index) => (
            <AppointmentCard 
              key={index}

              doctorname={appointment.doctorname}
              title={appointment.title}
              date={appointment.selectDate}
              day={appointment.selectDay}
              time={appointment.selectTime}
              image={appointment.image}
              onDelete ={()=>handleDelete(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default MyAppointment;

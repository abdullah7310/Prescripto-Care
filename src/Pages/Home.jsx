import React, { useState } from 'react'
import groupIcon from '../assets/Group 4222.png'
import { FaArrowRightLong } from "react-icons/fa6";
import Doctors from '../assets/doc-header-img.png'
import GeneralPhysician from '../assets/General_physician.svg'
import DoctorIcon from '../component/DoctorIcon';
import Gynecologist from '../assets/Gynecologist.svg'
import Dermatologist from '../assets/Dermatologist.svg'
import Pediatricians from '../assets/Pediatricians.svg'
import Neurologist from '../assets/Neurologist.svg'
import Gastroenterologist from '../assets/Gastroenterologist.svg'
import DoctorCard from '../component/DoctorCard';
import Doctor from '../assets/doctor.png'
import Appointment from '../assets/appointment-doc-img.png'
import Footer from '../component/Footer';
import { useNavigate } from 'react-router-dom';
import DoctorImage2 from '../assets/file (2) 3.png'
import DoctorImage3 from '../assets/file (2) 1.png'
import DoctorImage4 from '../assets/file (2) 2.png'
import DoctorImage5 from '../assets/file (3) 2.png'
import DoctorImage6 from '../assets/file (3) 3.png'
import DoctorImage7 from '../assets/file (4) 1.png'
import DoctorImage8 from '../assets/file (4) 2.png'
import DoctorImage9 from '../assets/file (4) 3.png'
import DoctorImage10 from '../assets/file (4) 4.png'
import DoctorImage11 from '../assets/file (5) 1.png'
import DoctorImage12 from '../assets/file (5) 2.png'
import DoctorImage13 from '../assets/file (5) 3.png'
import DoctorImage14 from '../assets/file (5) 4.png'


function Home() {

  let navigate = useNavigate()

  const allDoctors = [
    { image: Doctor, doctorname: "Dr. Aisha Khan", title: "Gastroenterologist" },
    { image: DoctorImage2, doctorname: "Dr. Rohan Mehta", title: "Pediatrician" },
    { image: DoctorImage3, doctorname: "Dr. Simran Kaur", title: "Gynecologist" },
    { image: DoctorImage4, doctorname: "Dr. Aman Verma", title: "Neurologist" },
    { image: DoctorImage5, doctorname: "Dr. Priya Sharma", title: "Dermatologist" },
    { image: DoctorImage6, doctorname: "Dr. Vikram Malhotra", title: "Gynecologist" },
    { image: DoctorImage7, doctorname: "Dr. Neha Kapoor", title: "Dermatologist" },
    { image: DoctorImage8, doctorname: "Dr. Rajesh Iyer", title: "Neurologist" },
    { image: DoctorImage9, doctorname: "Dr. Sanjay Patil", title: "General Physician" },
    { image: DoctorImage10, doctorname: "Dr. Meera Joshi", title: "Gynecologist" },
    { image: DoctorImage11, doctorname: "Dr. Vaibhav Tiwari", title: "Gastroenterologist" },
    { image: DoctorImage12, doctorname: "Dr. Swati Joshi", title: "Pediatrician" },
    { image: DoctorImage13, doctorname: "Dr. Rahul Sharma", title: "Gynecologist" },
    { image: DoctorImage14, doctorname: "Dr. Sonali Mehta", title: "Neurologist" },
    { image: Doctor, doctorname: "Dr. Tarun Chopra", title: "Dermatologist" },
    { image: DoctorImage2, doctorname: "Dr. Pooja Malhotra", title: "Gynecologist" },
    { image: DoctorImage3, doctorname: "Dr. Arjun Deshmukh", title: "Dermatologist" },
    { image: DoctorImage4, doctorname: "Dr. Juhi Singh", title: "Neurologist" },
    { image: DoctorImage5, doctorname: "Dr. Naveen Kapoor", title: "General Physician" },
    { image: DoctorImage6, doctorname: "Dr. Shivangi Thakur", title: "Gynecologist" },
    { image: DoctorImage7, doctorname: "Dr. Deepa Rao", title: "Dermatologist" },
    { image: DoctorImage8, doctorname: "Dr. Varun Sinha", title: "Psychiatrist" },
    { image: DoctorImage9, doctorname: "Dr. Abhishek Yadav", title: "General Physician" },
    { image: DoctorImage10, doctorname: "Dr. Ritu Sharma", title: "Gynecologist" },
    { image: DoctorImage11, doctorname: "Dr. Rakesh Nanda", title: "Dermatologist" },
    { image: DoctorImage12, doctorname: "Dr. Smita Iyer", title: "Pediatrician" },
    { image: DoctorImage13, doctorname: "Dr. Mohan Kumar", title: "Neurologist" },
    { image: DoctorImage14, doctorname: "Dr. Vandana Kapoor", title: "Gynecologist" },
    { image: Doctor, doctorname: "Dr. Gaurav Chaturvedi", title: "General Physician" },
    { image: DoctorImage2, doctorname: "Dr. Suresh Bhatia", title: "Gastroenterologist" },
    { image: DoctorImage3, doctorname: "Dr. Anjali Nair", title: "Pediatrician" },
    { image: DoctorImage4, doctorname: "Dr. Kavita Desai", title: "Dermatologist" },
    { image: DoctorImage5, doctorname: "Dr. Harish Gupta", title: "Neurologist" },
    { image: DoctorImage6, doctorname: "Dr. Tanya Saxena", title: "Gynecologist" },
    { image: DoctorImage7, doctorname: "Dr. Ramesh Choudhary", title: "Dermatologist" },
    { image: DoctorImage8, doctorname: "Dr. Sudhir Agarwal", title: "General Physician" },
    { image: DoctorImage9, doctorname: "Dr. Nisha Reddy", title: "Gynecologist" },
    { image: DoctorImage10, doctorname: "Dr. Kunal Sethi", title: "Neurologist" }
  ];


  const [visibleDoctors, setVisibleDoctors] = useState(10);
  const [selectTitle, setSelectTitle] = useState("")

  const filteredDoctors = selectTitle ? allDoctors.filter((doctor) => doctor.title === selectTitle) : allDoctors;
  const showMoreDoctors = () => {
    setVisibleDoctors(allDoctors.length);
  };
  const viewLessDoctors = () => {
    setVisibleDoctors(10);
  };
  return (
    <>
    
      <div className='w-full h-auto flex items-center justify-center'>
        <div className='w-[90vw] h-[400px] sm:w-[85vw] sm:h-[80vh] bg-[#5F6FFF] mx-6 sm:mx-12 mt-10 rounded-[12px] flex gap-20 sm:flex-row p-6 sm:p-0 relative'>

          <div className='flex h-[50%] sm:h-[100%] flex-col justify-center sm:pl-[70px] w-full sm:w-[45%] text-center sm:text-left mt-4 sm:mt-0'>
            <h1 className='text-[25px] sm:text-[43px] font-outfit text-white font-medium leading-[40px] sm:leading-[60px]'>
              Book Appointment <br className='hidden sm:block' />
              With Trusted Doctors
            </h1>
            <div className='flex justify-center sm:justify-start mt-3 sm:mt-0'>
              <img className='mb-3 w-[90%] sm:w-auto' src={groupIcon} alt="" />
            </div>
            <div className='mt-4 sm:mt-0 flex justify-center sm:justify-start'>
              <button onClick={() => navigate("/appointment")} className='w-[180px]  mb-8 sm:mb-0 sm:w-[200px] h-[45px] sm:h-[48px] rounded-[35px] flex items-center justify-center gap-2 bg-white'>
                <p className='text-sm sm:text-base'>Book Appointment</p>
                <FaArrowRightLong className='mt-1' />
              </button>
            </div>
          </div>

          <div className='w-full sm:w-[55%] flex justify-center sm:justify-start items-end absolute bottom-0 sm:static mt-6 sm:mt-0'>
            <img className='w-[80%] sm:w-[100%] h-auto sm:h-[85%]' src={Doctors} alt="" />
          </div>

        </div>
      </div>




      <div className='mb-20  w-[90%] h-auto sm:w-[60%] sm:h-[50vh] flex flex-col items-center mt-20 sm:mb-8 m-auto lg:mb-25'>
        <h1 className='text-[25px] sm:text-[30px] font-outfit font-normal text-center '>Find by Speciality </h1>
        <p className='text-center w-[70%] sm:w-[373px] text-xs font-outfit font-[300]'>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
        <div className=' w-[100%] h-auto grid grid-cols-2 sm:flex mt-10  sm:w-full sm:items-center sm:justify-center sm:flex-wrap gap-8'>
          {[
            { title: "All", image: Pediatricians },
            { title: "General Physician", image: GeneralPhysician },
            { title: "Gynecologist", image: Gynecologist },
            { title: "Dermatologist", image: Dermatologist },
            { title: "Pediatrician", image: Pediatricians },
            { title: "Neurologist", image: Neurologist },
            { title: "Gastroenterologist", image: Gastroenterologist }
          ].map((doctorTitle, ind) => (
            <DoctorIcon image={doctorTitle.image} key={ind} title={doctorTitle.title} onClick={() => setSelectTitle(doctorTitle.title === "All" ? "" : doctorTitle.title)} />
          ))}


        </div>
      </div>
      <h1 className='text-[25px] font-outfit font-medium  sm:text-[28px] text-center'>Top Doctors to Book</h1>
      <p className='text-[11px] text-[#4B5563] text-center font-normal mt-2'>Simply browse through our extensive list of trusted doctors.</p>

      <div className='w-[85vw] h-auto m-auto mt-6 grid grid-cols-1 sm:grid-cols-5 gap-4 sm:gap-6 '>
        {filteredDoctors.slice(0, visibleDoctors).map((card, ind) => (
          <DoctorCard key={ind} image={card.image} doctorname={card.doctorname} title={card.title} />
        ))}
      </div>

      <div className="flex justify-center">
        {visibleDoctors < allDoctors.length ? (
          <button
            onClick={showMoreDoctors}
            className="w-40 my-8 rounded-[20px] bg-[#EAEFFF] font-outfit text-xs py-2"
          >
            Show More
          </button>
        ) : (
          <button
            onClick={viewLessDoctors}
            className="w-40 my-8 rounded-[20px] bg-[#FFC1C1] font-outfit text-xs py-2"
          >
            View Less
          </button>
        )}
      </div>

      <div className='w-full flex sm:mb-8 items-center justify-center'>
        <div className='w-[90vw] h-auto sm:w-[85vw] sm:h-[50vh] bg-[#5F6FFF] sm:mx-12 mt-10 rounded-[12px] flex flex-col sm:flex-row p-6 pb-0 sm:p-0'>

          {/* Left Section */}
          <div className='flex flex-col justify-center sm:pl-[70px] w-full sm:w-[55%] text-center sm:text-left'>
            <h1 className='text-[24px] sm:text-[30px] font-outfit text-white font-bold leading-[40px] sm:leading-[60px]'>
              Book Appointment <br className='hidden sm:block' />
              With 100+ Trusted Doctors
            </h1>
            <div className="mt-4 sm:mt-0 flex justify-center sm:justify-start">
              <button onClick={() => navigate('/signUp_page')} className='w-[180px] sm:w-[200px] h-[45px] sm:h-[48px] rounded-[35px] flex items-center justify-center gap-2 bg-white'>
                <p className='text-sm sm:text-base'>Create Account</p>
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className='w-full sm:w-[45%] flex justify-center items-center sm:items-end mt-6 sm:mt-0'>
            <img className='w-[80%] sm:w-[70%] h-auto sm:h-[329px]' src={Appointment} alt="Doctor Appointment" />
          </div>

        </div>
      </div>

      <Footer />
     
    </>


  )
}

export default Home

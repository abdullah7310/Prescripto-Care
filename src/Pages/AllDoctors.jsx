import React, { useState } from 'react'
import DoctorCard from '../component/DoctorCard'
import Doctor from '../assets/doctor.png'
import Footer from '../component/Footer'
import TitleCard from '../component/TitleCard'

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



function AllDoctors() {

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
    const [selectedTitle, setSelectedTitle] = useState("")

    const filteredDoctors = selectedTitle?allDoctors.filter((doctor)=>doctor.title === selectedTitle):allDoctors;
    const showMoreDoctors = () => {
      setVisibleDoctors(allDoctors.length);
    };
    const viewLessDoctors = () => {
      setVisibleDoctors(10);
    };

  return (
    <>
    <div className='px-20 w-full pb-10 '>
      <div className='w-full mt-8 mb-4 text-sm font-normal bg-white font-outfit text-[#4B5563] '>Browse through the doctors specialist.</div>
      <div className='flex justify-between'>
        <div className='w-[17%] h-[60vh]'>
          {["All", "General Physician", "Gynecologist", "Dermatologist", "Pediatrician", "Neurologist", "Gastroenterologist"].map((doctorTitle)=>(

          <TitleCard title={doctorTitle} key={doctorTitle} onClick={()=>setSelectedTitle(doctorTitle==="All"?"":doctorTitle)}/>
          ))}

        </div>
        <div className='w-[78%] grid grid-cols-4 gap-4 ' >
        {filteredDoctors.slice(0,visibleDoctors).map((card,ind)=>(
          <DoctorCard key={ind} image={card.image} doctorname={card.doctorname} title={card.title} />
        ))}

        </div>


      </div>
      

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
    <div className='px-20 sm:hidden'>
    <Footer/>
    </div>
    </>
  )
}

export default AllDoctors

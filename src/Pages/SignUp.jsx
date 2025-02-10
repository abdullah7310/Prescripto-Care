// import React, { useState } from 'react'
// import { useNavigate, useSearchParams } from 'react-router-dom'
// import { toast } from 'react-toastify';
// import { useForm } from 'react-hook-form';

// function SignUp({handleLoginStatus}) {
//   const { register, handleSubmit, formState: { errors } } = useForm();

//   const [userDetails, setUserDetails] = useState(() => {
//     const savedUsers = localStorage.getItem("users");
//     return savedUsers ? JSON.parse(savedUsers) : [];
//   });
//   // const[userName,setUserName] = useState("")
//   // const[userEmail, setUserEmail] = useState("")
//   // const [ userPassword, setUserPassword] = useState("")
//   // console.log(userName)
//   const navigate = useNavigate()
//   console.log("All users:", userDetails);

//   function handleCreateAccount(data){
//     // e.preventDefault();
//     let  userObject = {
//       name:data.fullName,
//       email: data.email,
//       password: data.password
//     }

//     let updatedUsers = [...userDetails,userObject]

//     setUserDetails(updatedUsers)
//     localStorage.setItem("users", JSON.stringify(updatedUsers));
//     navigate('/login_page')

//     console.log("User added:", userObject);
//     toast.success("User has been created successfully..")

//     localStorage.setItem("userLog", "true");
    
//     handleLoginStatus(true)
    

//     setUserName("");
//     setUserEmail("");
//     setUserPassword("");




//   }
    
//   return (
//     <div className='px-20 flex justify-center items-center h-[80vh]  mt-10'>
//         <div className='border-[#ABABAB] border-1 w-[30vw] rounded-xl pt-10 px-8 h-full'>
//             <h1 className='font-oufit text-[22px] font-semibold text-[#4B5563]'>Create Account</h1>
//             <p className='font-outfit text-[15px] text-[#4B5563] mb-6'>Please sign up to book appointment</p>
//         <form onSubmit={handleSubmit(handleCreateAccount)}>
//             <label htmlFor="name" className='text-[#4B5563] text-[13px] font-semibold'>Full Name</label>
//             <input 
//             {...register("fullName", { required: "Full Name is required!" })}  
//             className='w-full border-1 border-[#ABABAB] py-2 px-4 rounded mb-1' 
//           />
//           {errors.fullName && <p className="text-red-500 text-xs">{errors.fullName.message}</p>}
//             <label htmlFor="name" className='text-[#4B5563] text-[13px] font-semibold'>Email</label>
//             <input 
//             {...register("email", { 
//               required: "Email is required!", 
//               pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, message: "Invalid email format!" }
//             })}  
//             className='w-full border-1 border-[#ABABAB] py-2 px-4 rounded mb-1' 
//           />
//           {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>} 
//             <label htmlFor="name" className='text-[#4B5563] text-[13px] font-semibold'>Password</label>
//             <input 
//             type="password"
//             {...register("password", { 
//               required: "Password is required!", 
//               minLength: { value: 6, message: "Password must be at least 6 characters!" }
//             })}  
//             className='w-full border-1 border-[#ABABAB] py-2 px-4 rounded mb-1' 
//           />
//           {errors.password && <p className="text-red-500 text-xs">{errors.password.message}</p>}
//             <button  className='font-outfit w-full text-white text-[14px] border-1 bg-[#5F6FFF] border-[#ABABAB] py-2 px-4 rounded mb-3'>
//                 Create Account
//             </button>
//             <div>
//             <h3 className='text-[#4B5563] text-[14px] font-outfit'>Already have an account? <span onClick={()=>navigate("/login_page")} className='text-[#5F6FFF]'>Login here</span></h3>
//             </div>
//       </form>
//         </div>
     
//     </div>
//   )
// }

// export default SignUp

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';

function SignUp({ handleLoginStatus }) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState(() => {
    const savedUsers = localStorage.getItem("users");
    return savedUsers ? JSON.parse(savedUsers) : [];
  });

  function handleCreateAccount(data) {
    let userObject = {
      name: data.fullName,
      email: data.email,
      password: data.password
    };

    let updatedUsers = [...userDetails, userObject];

    setUserDetails(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    localStorage.setItem("userLog", "true");

    handleLoginStatus(true);
    toast.success("Account created successfully!");
    navigate('/');

  }

  return (
    <div className="flex  justify-center items-center h-auto sm:h-screen px-5 sm:px-10 md:px-20">
      <div className=" mt-6 mb-3  w-full sm:w-3/4 md:w-1/2 lg:w-1/3 bg-white shadow-lg rounded-xl p-6 sm:p-10">
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-700 text-center">Create Account</h1>
        <p className="text-sm sm:text-base text-gray-500 mb-6 text-center">Sign up to book an appointment</p>

        <form onSubmit={handleSubmit(handleCreateAccount)} className="space-y-4">
          <div>
            <label className="text-gray-600 text-sm font-semibold">Full Name</label>
            <input
              {...register("fullName", { required: "Full Name is required!" })}
              className="w-full border rounded px-4 py-2 mt-1"
            />
            {errors.fullName && <p className="text-red-500 text-xs">{errors.fullName.message}</p>}
          </div>

          <div>
            <label className="text-gray-600 text-sm font-semibold">Email</label>
            <input
              {...register("email", { required: "Email is required!" })}
              className="w-full border rounded px-4 py-2 mt-1"
            />
            {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
          </div>

          <div>
            <label className="text-gray-600 text-sm font-semibold">Password</label>
            <input
              type="password"
              {...register("password", { required: "Password is required!", minLength: { value: 6, message: "Minimum 6 characters required!" } })}
              className="w-full border rounded px-4 py-2 mt-1"
            />
            {errors.password && <p className="text-red-500 text-xs">{errors.password.message}</p>}
          </div>

          <button className="w-full bg-blue-600 text-white py-2 rounded mt-3 hover:bg-blue-700 transition">
            Create Account
          </button>

          <p className="text-sm text-gray-600 text-center mt-2">
            Already have an account? <span onClick={() => navigate("/login_page")} className="text-blue-500 cursor-pointer">Login here</span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignUp;

// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { toast } from 'react-toastify'

// function LoginPage() {
//   const [logged, setLogged] = useState("")
//   const [logPassword, setLogPassword] = useState("")
//   const navigate = useNavigate()

//   function handleLogin(e){
//     e.preventDefault()
//     const registerData = JSON.parse(localStorage.getItem("users"));
//     console.log(registerData);

//     let userFound = false
    
//     for(let i=0; i< registerData.length; i++){
//       if(registerData[i].email == logged && registerData[i].password == logPassword){
//         userFound = true
//         break;
//       }
//     }

//     if(userFound){
//       toast.success("You have logged in successfully!")
//       navigate("/")
//     }else{
//       toast.error("Ooops! You have entered wrong mail or password")
//     }
    
//   }
//   return (
//     <div className='px-20 flex justify-center items-center h-[80vh]  mt-10'>
//     <div className='border-[#ABABAB] border-1 w-[30vw] rounded-xl pt-10 px-8 h-[90%]'>
//         <h1 className='font-oufit text-[22px] font-semibold text-[#4B5563]'>Login </h1>
//         <p className='font-outfit text-[15px] text-[#4B5563] mb-6'>Please sign up to book appointment</p>
//     <form onSubmit={handleLogin}>
//         <label htmlFor="name" className='text-[#4B5563] text-[13px] font-semibold'>Email</label>
//         <input onChange={(e)=> setLogged(e.target.value)} value={logged} type="text" name=""  className='font-outfit w-full border-1 border-[#ABABAB] py-2 px-4 rounded mb-3 ' id="" />
//         <label htmlFor="name" className='text-[#4B5563] text-[13px] font-semibold'>Password</label>
//         <input onChange={(e)=> setLogPassword(e.target.value)} value={logPassword} type="text" name=""  className='font-outfit w-full border-1 border-[#ABABAB] py-2 px-4 rounded mb-3 ' id="" />
//         <button  className='font-outfit w-full text-white text-[14px] border-1 bg-[#5F6FFF] border-[#ABABAB] py-2 px-4 rounded mb-3'>
//             Login
//         </button>
//         <div>
//         <h3 className='text-[#4B5563] text-[14px] font-outfit'>Already have an account? <span onClick={()=>navigate("/login_page")} className='text-[#5F6FFF]'>Login here</span></h3>
//         </div>
//   </form>
//     </div>
 
// </div>
//   )
// }

// export default LoginPage



import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';

function LoginPage({ setIsLoggedIn }) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = localStorage.getItem("userLog") === "true";
    setIsLoggedIn(loggedIn);
  }, []);

  function handleLogin(data) {
    const registerData = JSON.parse(localStorage.getItem("users")) || [];
    const user = registerData.find(user => user.email === data.email && user.password === data.password);

    if (user) {
      localStorage.setItem("userLog", "true");
      setIsLoggedIn(true);
      toast.success("You have logged in successfully!");
      navigate("/");
    } else {
      toast.error("Oops! Incorrect email or password");
    }
  }

  return (
    <div className="flex justify-center items-center h-screen px-5 sm:px-10 md:px-20">
      <div className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 bg-white shadow-lg rounded-xl p-6 sm:p-10">
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-700 text-center">Login</h1>
        <p className="text-sm sm:text-base text-gray-500 mb-6 text-center">Please sign in to continue</p>

        <form onSubmit={handleSubmit(handleLogin)} className="space-y-4">
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
              {...register("password", { required: "Password is required!" })}
              className="w-full border rounded px-4 py-2 mt-1"
            />
            {errors.password && <p className="text-red-500 text-xs">{errors.password.message}</p>}
          </div>

          <button className="w-full bg-blue-600 text-white py-2 rounded mt-3 hover:bg-blue-700 transition">
            Login
          </button>

          <p className="text-sm text-gray-600 text-center mt-2">
            Don't have an account? <span onClick={() => navigate("/signUp_page")} className="text-blue-500 cursor-pointer">Sign up</span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;

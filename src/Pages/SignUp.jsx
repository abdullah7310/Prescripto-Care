import React, { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { toast } from 'react-toastify';

function SignUp({handleLoginStatus}) {

  const [userDetails, setUserDetails] = useState(() => {
    const savedUsers = localStorage.getItem("users");
    return savedUsers ? JSON.parse(savedUsers) : [];
  });
  const[userName,setUserName] = useState("")
  const[userEmail, setUserEmail] = useState("")
  const [ userPassword, setUserPassword] = useState("")
  // console.log(userName)
  const navigate = useNavigate()
  console.log("All users:", userDetails);

  function handleCreateAccount(e){
    e.preventDefault();
    let  userObject = {
      name:userName,
      email: userEmail,
      password: userPassword
    }

    let updatedUsers = [...userDetails,userObject]

    setUserDetails(updatedUsers)
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    navigate('/login_page')

    console.log("User added:", userObject);
    toast.success("User has been created successfully..")

    localStorage.setItem("userLog", "true");
    
    handleLoginStatus(true)
    

    setUserName("");
    setUserEmail("");
    setUserPassword("");




  }
    
  return (
    <div className='px-20 flex justify-center items-center h-[80vh]  mt-10'>
        <div className='border-[#ABABAB] border-1 w-[30vw] rounded-xl pt-10 px-8 h-full'>
            <h1 className='font-oufit text-[22px] font-semibold text-[#4B5563]'>Create Account</h1>
            <p className='font-outfit text-[15px] text-[#4B5563] mb-6'>Please sign up to book appointment</p>
        <form onSubmit={handleCreateAccount}>
            <label htmlFor="name" className='text-[#4B5563] text-[13px] font-semibold'>Full Name</label>
            <input onChange={(e)=> setUserName(e.target.value)} value={userName} type="text" name=""  className='font-outfit w-full border-1 border-[#ABABAB] py-2 px-4 rounded mb-3 ' id="" />
            <label htmlFor="name" className='text-[#4B5563] text-[13px] font-semibold'>Email</label>
            <input onChange={(e)=> setUserEmail(e.target.value)} value={userEmail} type="text" name=""  className='font-outfit w-full border-1 border-[#ABABAB] py-2 px-4 rounded mb-3 ' id="" />
            <label htmlFor="name" className='text-[#4B5563] text-[13px] font-semibold'>Password</label>
            <input onChange={(e)=> setUserPassword(e.target.value)} value={userPassword} type="text" name=""  className='font-outfit w-full border-1 border-[#ABABAB] py-2 px-4 rounded mb-3 ' id="" />
            <button  className='font-outfit w-full text-white text-[14px] border-1 bg-[#5F6FFF] border-[#ABABAB] py-2 px-4 rounded mb-3'>
                Create Account
            </button>
            <div>
            <h3 className='text-[#4B5563] text-[14px] font-outfit'>Already have an account? <span onClick={()=>navigate("/login_page")} className='text-[#5F6FFF]'>Login here</span></h3>
            </div>
      </form>
        </div>
     
    </div>
  )
}

export default SignUp

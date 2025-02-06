import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function LoginPage() {
  const [logged, setLogged] = useState("")
  const [logPassword, setLogPassword] = useState("")
  const navigate = useNavigate()

  function handleLogin(e){
    e.preventDefault()
    const registerData = JSON.parse(localStorage.getItem("users"));
    console.log(registerData);

    let userFound = false
    
    for(let i=0; i< registerData.length; i++){
      if(registerData[i].email == logged && registerData[i].password == logPassword){
        userFound = true
        break;
      }
    }

    if(userFound){
      toast.success("You have logged in successfully!")
      navigate("/")
    }else{
      toast.error("Ooops! You have entered wrong mail or password")
    }
    
  }
  return (
    <div className='px-20 flex justify-center items-center h-[80vh]  mt-10'>
    <div className='border-[#ABABAB] border-1 w-[30vw] rounded-xl pt-10 px-8 h-[90%]'>
        <h1 className='font-oufit text-[22px] font-semibold text-[#4B5563]'>Login </h1>
        <p className='font-outfit text-[15px] text-[#4B5563] mb-6'>Please sign up to book appointment</p>
    <form onSubmit={handleLogin}>
        <label htmlFor="name" className='text-[#4B5563] text-[13px] font-semibold'>Email</label>
        <input onChange={(e)=> setLogged(e.target.value)} value={logged} type="text" name=""  className='font-outfit w-full border-1 border-[#ABABAB] py-2 px-4 rounded mb-3 ' id="" />
        <label htmlFor="name" className='text-[#4B5563] text-[13px] font-semibold'>Password</label>
        <input onChange={(e)=> setLogPassword(e.target.value)} value={logPassword} type="text" name=""  className='font-outfit w-full border-1 border-[#ABABAB] py-2 px-4 rounded mb-3 ' id="" />
        <button  className='font-outfit w-full text-white text-[14px] border-1 bg-[#5F6FFF] border-[#ABABAB] py-2 px-4 rounded mb-3'>
            Login
        </button>
        <div>
        <h3 className='text-[#4B5563] text-[14px] font-outfit'>Already have an account? <span onClick={()=>navigate("/login_page")} className='text-[#5F6FFF]'>Login here</span></h3>
        </div>
  </form>
    </div>
 
</div>
  )
}

export default LoginPage

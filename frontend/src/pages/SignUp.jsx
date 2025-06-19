import React, { useContext, useState } from 'react'
import bg from "../assets/authBg.png"
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { userDataContext } from '../context/UserContext.jsx';
import axios from "axios";

function SignUp() {
    const [showPassword, setShowPassword] = React.useState(false);
    const {serverUrl,userData,setUserData} =useContext(userDataContext);
    const navigate = useNavigate();
    const [name,setName]=useState("");
    const [loading,SetLoading]=useState(false);
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [err,setErr] = useState("");
    const handleSignUp=async (e)=>{
        e.preventDefault();
        setErr("");
        SetLoading(true)
         console.log("Button clicked. Form data: ", { name, email, password });
        try {
            let result = await axios.post(`${serverUrl}/api/auth/signup`,{
                name,email,password
            },{withCredentials:true})
            setUserData(result.data)
            SetLoading(false)
            navigate("/customize")
        } catch (error) {
            console.log(error);
            setUserData(null);
            SetLoading(false)
            setErr(error.response.data.message)
        }

    }
  return (
    <div className='w-full h-[100vh] bg-cover flex justify-center items-center' style={{backgroundImage: `url(${bg})`}}>
        <form className='w-[90%] h-[600px] max-w-[500px] bg-[#00000062] backdrop-blur
        shadow-lg shadow-black flex flex-col items-center
        justify-center gap-[20px] rounded-[50px] px-[10px]'onSubmit={handleSignUp}>
        <h1 className='text-white text-[30px] font-semibold mb-[30px]'> Register to <span className='text-blue-400'>Virtual Assistant</span></h1>
        <input type="text" placeholder='Enter your name' className='w-full h-[60px] outline-none border-2 border-white bg-transparent text-white placeholder-gray-300 px-[20px] py-[20px] rounded-full'
        required onChange={(e)=>setName(e.target.value)} value={name}></input>
        <input type="email" placeholder='Email' className='w-full h-[60px] outline-none border-2 border-white bg-transparent text-white placeholder-gray-300 px-[20px] py-[20px] rounded-full'
        required onChange={(e)=>setEmail(e.target.value)} value={email}></input>
        
        <div className='w-full h-[60px] border-2 border-white bg-transparent text-white rounded-full relative'>
            <input type={showPassword?"text":"password"} placeholder='password' className='w-full h-full rounded-full outline-none bg-transparent placeholder-gray-300 px-[20px] py-[10px]'
            required onChange={(e)=>setPassword(e.target.value)} value={password}></input>
            {!showPassword && <IoEye className='absolute top-[18px] right-[20px] text-white w-[25px] h-[25px] cursor-pointer' onClick={()=>setShowPassword(true)}/>}
                {showPassword && <IoEyeOff className='absolute top-[18px] right-[20px] text-white w-[25px] h-[25px] cursor-pointer' onClick={()=>setShowPassword(false)}/>}
            
        </div>
        {err.length>0 && <p className='text-red-500 text-[17px]'>*{err}</p>}
        <button className='min-w-[150px] h-[60px] mt-[30px] bg-white rounded-full text-black font-semibold text-[19px]'disabled=
        {loading}>
            {loading?"Loading...":"Sign Up"}
        </button>

        <p className='text-white text-[18px] cursor-pointer'onClick={()=>navigate("/signin")}>
            Already have an account ? <span className='cursor-pointer text-blue-400'>Sign In</span>
        </p>
        </form>
    </div>
  )
}

export default SignUp
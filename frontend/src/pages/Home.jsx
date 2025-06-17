import React, { useContext } from 'react'
import { userDataContext } from '../context/userContext'
import { useNavigate } from 'react-router-dom'

function Home() {
  const {userData,serverUrl,setUserData} = useContext(userDataContext)
  const navigate=useNavigate()
  const handleLogOut = async()=>{
    try {
      const result=await axios.get(`${serverUrl}/api/auth/logout`,{withCredentials:true})
      setUserData(null)
      navigate("/signin")
    } catch (error) {
      setUserData(null)
      console.log(error)
    }
  }
  return (
    <div className='w-full h-[100vh] bg-gradient-to-t from-[black] to-[#030353] flex justify-center items-center flex-col gap-[15px]'>
      <button className='min-w-[150px] h-[60px] mt-[30px] bg-white rounded-full text-black font-semibold text-[19px] absolute 
      top-[20px] right-[20px] cursor-pointer' onClick={handleLogOut}>
        Log out
      </button>
      <button className='min-w-[150px] h-[60px] mt-[30px] bg-white rounded-full text-black font-semibold text-[19px]
      absolute top-[100px] right-[20px] px-[20px] py-[10px] cursor-pointer' onClick={()=>navigate("/customize")}>
        Customize your Assistant
      </button>
      <div className='w-[300px] h-[400px] flex justify-center items-center overflow-hidden'>
        <img src={userData?.assistantImage} alt="" className='h-full object-cover rounded-4xl shadow-lg'/>
      </div>
      <h1 className='text-white text-[18px] font-semibold'> I'm {userData?.assistantName}</h1>
    </div>
  )
}

export default Home
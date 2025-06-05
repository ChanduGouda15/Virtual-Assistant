import React, { useState, useEffect, useContext,useRef } from 'react';
import Card from '../components/Card.jsx'
import image1 from "../assets/image1.png"
import image2 from "../assets/image2.jpg"
import authBg from "../assets/authBg.png"
import image4 from "../assets/image4.png"
import image5 from "../assets/image5.png"
import image6 from "../assets/image6.jpeg"
import image7 from "../assets/image7.jpeg"
import { RiImageAddLine } from "react-icons/ri";
import { userDataContext } from '../context/userContext.jsx';

function Customize() {
    const [frontendImage,setFrontendImage]=useState(null)
    const [backendImage,setbackendImage]=useState(null)
    const inputImage=useRef()
  return (
    <div className='w-full h-[100vh] bg-gradient-to-t from-[black] to-[#030353] flex justify-center items-center flex-col p-[20px]'>
            <h1 className='text-white text-[30px] text-center p-[20px] mb-[30px]'>Select your <span className='text-blue-200'>Assistant Image</span></h1>
            <div className='w-full max-w-[900px] flex justify-center items-center flex-wrap gap-[15px]'>
            <Card image={image1}/>
            <Card image={image2}/>
            <Card image={authBg}/>
            <Card image={image4}/>
            <Card image={image5}/>
            <Card image={image6}/>
            <Card image={image7}/>
            <div className='w-[70px] h-[140px] lg:w-[150px] lg:h-[250px] bg-[#030326] border-2 border-[#0000ff26] rounded-2xl overflow-hidden
                hover:shadow-2xl hover:shadow-blue-950 cursor-pointer hover:border-4 hover:border-white flex items-center justify-center
                'onClick={()=>inputImage.current.click()}>
                <RiImageAddLine className='text-white w-[25px] h-[25px]'/>
                </div>
                <input type='file' accept='image/*' ref={inputImage} style={{ display: 'none' }} /> 
            </div>
            <button className='min-w-[150px] h-[60px] mt-[30px] bg-white rounded-full text-black font-semibold text-[19px]'>Next</button>
    </div>
    
  )
}

export default Customize
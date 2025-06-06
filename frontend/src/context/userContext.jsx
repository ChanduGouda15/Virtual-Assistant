// src/context/userContext.jsx
import React, { createContext, useEffect, useState } from 'react';

export const userDataContext = createContext();

function UserContextProvider({ children }) {
  const serverUrl = "http://localhost:5000";
  const [userData,setUserData]=useState(null)
  const [frontendImage,setFrontendImage]=useState(null)
  const [backendImage,setBackendImage]=useState(null)

  const [selectedImage,setSelectedImage]=useState(null)
  const handleCurrentUser=async ()=>{
    try {
      const result=await axios.get(`${serverUrl}/api/user/current`,{withCredentials:true})
      setUserData(result.data)
      console.log(result.data)
    } catch (error) {
      
    }
  }
  useEffect(()=>{
    handleCurrentUser();
  },[])

  const value = { serverUrl,userData,setUserData,frontendImage,setFrontendImage,backendImage,setBackendImage,
    selectedImage,setSelectedImage
  };

  return (
    <userDataContext.Provider value={value}>
      {children}
    </userDataContext.Provider>
  );
}

export default UserContextProvider;

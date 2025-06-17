// src/context/userContext.jsx
import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios'; // ✅ Required to perform HTTP requests

export const userDataContext = createContext();

function UserContextProvider({ children }) {
  const serverUrl = "http://localhost:5000";
  
  const [userData, setUserData] = useState(null);
  const [frontendImage, setFrontendImage] = useState(null);
  const [backendImage, setBackendImage] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleCurrentUser = async () => {
    try {
      const result = await axios.get(`${serverUrl}/api/user/current`, {
        withCredentials: true,
      });

      // ✅ Ensure data is in correct format
      if (result?.data?.data) {
        setUserData(result.data.data);
        console.log("✅ Current user data:", result.data.data);
      } else {
        console.warn("⚠️ No user data found in response.");
        setUserData(null);
      }

    } catch (error) {
      console.error("❌ Error fetching current user:", error.message);
      setUserData(null); // Optional: fallback to null on error
    }
  };

  // ✅ Run only once on mount
  useEffect(() => {
    handleCurrentUser();
  }, []);

  const value = {
    serverUrl,
    userData,
    setUserData,
    frontendImage,
    setFrontendImage,
    backendImage,
    setBackendImage,
    selectedImage,
    setSelectedImage,
  };

  return (
    <userDataContext.Provider value={value}>
      {children}
    </userDataContext.Provider>
  );
}

export default UserContextProvider;

import React, { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Customize from './pages/Customize'
import { userDataContext } from './context/userContext'

function App() {
  const {userData,setUserData}=useContext(userDataContext)
  return (
    <Routes>
        <Route
        path="/"
        element={
          (userData?.assistantIamge && userData?.assistantName)
            ? <Home />
            : <Navigate to="/customize" />
        }
      />

        <Route
        path="/signup"
        element={
          !userData
            ? <SignUp />
            : <Navigate to="/" />
        }
      />

      <Route
        path="/signin"
        element={
          !userData
            ? <SignIn />
            : <Navigate to="/" />
        }
      />

      <Route
        path="/customize"
        element={
          !userData
            ? <Customize />
            : <Navigate to="/signin" />
        }
      />
  
    </Routes>
  )
}

export default App
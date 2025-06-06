import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Import your pages/components
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Customize from './pages/Customize';
import Customize2 from './pages/Customize2';
import Home from './pages/Home'; // You use <Home /> in your routes, so import it too

import { userDataContext } from './context/userContext';




function App() {
  const { userData } = useContext(userDataContext);

  // Handle loading state if userData is null but you are still checking auth
  // For example, userData is null on first render but will be fetched asynchronously.

  if (userData === undefined) {
    // or some separate loading state you track
    return <div>Loading...</div>;
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          (userData?.assistantImage && userData?.assistantName)
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

      <Route
        path="/customize2"
        element={
          !userData
            ? <Customize2 />
            : <Navigate to="/signin" />
        }
      />
    </Routes>
  );
}


export default App;

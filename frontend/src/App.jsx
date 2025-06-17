import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Customize from './pages/Customize';
import Customize2 from './pages/Customize2';
import Home from './pages/Home';

import { userDataContext } from './context/userContext';

function App() {
  const { userData } = useContext(userDataContext);

  console.log("🚦 userData at App route:", userData);

  if (userData === undefined) {
    return <div>Loading...</div>;
  }

  const isLoggedIn = !!userData;
  const isCustomized = userData?.assistantImage && userData?.assistantName;

  return (
    <Routes>
      <Route
        path="/"
        element={
          !isLoggedIn
            ? <Navigate to="/signin" />
            : !isCustomized
              ? <Navigate to="/customize" />
              : <Home />
        }
      />

      <Route
        path="/signup"
        element={
          !isLoggedIn
            ? <SignUp />
            : <Navigate to="/" />
        }
      />

      <Route
        path="/signin"
        element={
          !isLoggedIn
            ? <SignIn />
            : <Navigate to="/" />
        }
      />

      <Route
        path="/customize"
        element={
          !isLoggedIn
            ? <Navigate to="/signin" />
            : !isCustomized
              ? <Customize />
              : <Navigate to="/" />
        }
      />

      <Route
        path="/customize2"
        element={
          !isLoggedIn
            ? <Navigate to="/signin" />
            : !isCustomized
              ? <Customize2 />
              : <Navigate to="/" />
        }
      />
    </Routes>
  );
}

export default App;

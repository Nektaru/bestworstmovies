import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import { Route, Routes, Navigate } from "react-router-dom";
import Home from './components/Home/Home'
import Profile from './components/pages/Profile/Profile'
import Explore from './components/pages/Explore/Explore'
import Login from './components/pages/Auth/Login'
import Signup from './components/pages/Auth/Signup'
import AuthService from './services/auth.services';
import MyList from "./components/pages/MyList/MyList"
import MyReviews from "./components/pages/MyReviews/MyReviews"


function App() {

  const [currentUser, setCurrentUser] = useState(undefined)

    const authService = new AuthService()

    useEffect(() => {
      
      authService.isloggedin()
      .then(response => storeUser(response.data))
      .catch(err => storeUser(null))

    })

  const storeUser = (user) => {
    setCurrentUser(user)
  }

  return (

    <div className="App">
      <>
          <Navbar currentUser={currentUser} storeUser={storeUser}/>
         
      </>
      <Routes >
          <Route path="/" element={<Home />} />
          
          <Route path="/explore" element={<Explore/>} />

          {/* <Route exact path="/profile" render={() => currentUser ? <Profile /> : <Navigate to="/login" />} /> */}

          <Route  path="/profile" element={ currentUser ? <Profile /> : <Navigate to="/login" />} />

          <Route  path="/login" element={ currentUser ? <Navigate to="/"/> : <Login storeUser={storeUser} />} />

          <Route  path="/sign-up" element={ currentUser ? <Navigate to="/"/> : <Signup storeUser={storeUser} />} />

          <Route path="/mylist" element={ currentUser ? <MyList /> : <Login storedUser={storeUser} />} />

          <Route path="/myreviews" element={ currentUser ? <MyReviews /> : <Login storedUser={storeUser} />} />

      </Routes>
    </div>
    )
}

export default App;

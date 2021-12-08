import React, { useState, useEffect } from 'react';
import './App.css';
import Row from './Row';
import Banner from './components/pages/Banner/Banner';
import requests from './requests';
import Navbar from './components/layout/Navbar';
import { Route, Routes, Navigate } from "react-router-dom";
import DetailModal from './components/DetailModal/DetailModal'
import Profile from './components/pages/Profile/Profile'
import Explore from './components/pages/Explore/Explore'
import Login from './components/pages/Auth/Login'
import Signup from './components/pages/Auth/Signup'
import AuthService from './services/auth.services';

function App() {

  const [currentUser, setCurrentUser] = useState(undefined)

    const authService = new AuthService()

    useEffect(() => {
      
      authService.isloggedin()
      .then(response => storeUser(response.data))
      .catch(err => storeUser(null))

    }, [])

  const storeUser = (user) => {
    setCurrentUser(user)
  }

  return (
//     <div className="App">
//     <Nav />
//       <Banner />
//       <Row title="Worst Movies" fetchUrl={requests.fetchWorstMovies} /> 
//       <Row title="Best Movies" fetchUrl={requests.fetchBestMovies} /> 
//       <Row title="Awesome Movies" fetchUrl={requests.fetchAwesomeMovies} /> 
//     </div>
//   );
// }

    <div className="App">
      <>
          <Navbar />
          <DetailModal />
          <Banner />
          <Row title="Worst Movies" fetchUrl={requests.fetchWorstMovies} /> 
          <Row title="Best Movies" fetchUrl={requests.fetchBestMovies} /> 
          <Row title="Awesome Movies" fetchUrl={requests.fetchAwesomeMovies} />
      </>
      <Routes key={null}>
          <Route exact path="/" />
          
          <Route exact path="/explore" render={() => <Explore />} />

          {/* <Route exact path="/profile" render={() => currentUser ? <Profile /> : <Navigate to="/login" />} /> */}

          <Route exact path="/profile" render={() => currentUser ? <Profile /> : <Navigate to="/login" />} />

          <Route exact path="/login" render={() => currentUser ? <Navigate to="/"/> : <Login />} />

          <Route exact path="/sign-up" render={() => currentUser ? <Navigate to="/"/> : <Signup />} />

      </Routes>
    </div>
    )
}

export default App;

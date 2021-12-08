import React from 'react';
import './App.css';
import Row from './Row';
import Banner from '../src/components/pages/Banner/Banner';
import requests from './requests';
import Navbar from '../src/components/layout/Navbar';
import { Switch, Route, Redirect } from "react-router-dom";


function App() {
  return (
    <div className="App">
    <Navbar />
      <Banner />
      <Row title="Worst Movies" fetchUrl={requests.fetchWorstMovies} /> 
      <Row title="Best Movies" fetchUrl={requests.fetchBestMovies} /> 
      <Row title="Awesome Movies" fetchUrl={requests.fetchAwesomeMovies} /> 
    </div>

//     <div className="App">
//     {currentUser && (
//         <>
//             <Navbar />
//             <DetailModal />
//         </>
//     )}
//         <Switch location={location} key={location.pathname}>
//             <Route
//                 exact
//                 path="/"
//             >
//                 <Redirect to="/login" />
//             </Route>
//             <Route
//                 path="/splash"
//                 component={SplashAnimation}
//             />
//             <Route
//                 path="/play"
//                 component={PlayAnimation}
//             />
//             <Route
//                 path="/search"
//                 render={() => currentUser
//                     ? (searchResults && <Search results={searchResults}/>)
//                     : <Redirect to="/login" />}
//             />
//             <Route
//                 exact
//                 path="/browse"
//                 render={() => currentUser
//                     ? <Homepage />
//                     : <Redirect to="/login" />}
//             />
//             <Route
//                 exact
//                 path="/browse/:categoryName"
//                 render={(props) => currentUser
//                     ? <Category {...props} />
//                     : <Redirect to="/login" />}
//             />
//             <Route
//                 exact
//                 path="/tvseries"
//                 render={() => currentUser ? <TVSeries /> : <Redirect to="/login" />}
//             />
//             <Route
//                 exact
//                 path="/tvseries/:categoryName"
//                 render={(props) => currentUser
//                     ? <Category {...props} />
//                     : <Redirect to="/login" />}
//             />
//             <Route
//                 exact
//                 path="/movies"
//                 render={() => currentUser ? <Movies /> : <Redirect to="/login" />}
//             />
//             <Route
//                 exact
//                 path="/movies/:categoryName"
//                 render={(props) => currentUser
//                     ? <Category {...props} />
//                     : <Redirect to="/login" />}
//             />
//             <Route
//                 exact
//                 path="/popular"
//                 render={() => currentUser ? <Popular /> : <Redirect to="/login" />}
//             />
//             <Route
//                 exact
//                 path="/popular/:categoryName"
//                 render={(props) => currentUser
//                     ? <Category {...props} />
//                     : <Redirect to="/login" />}
//             />
//             <Route
//                 exact
//                 path="/mylist"
//                 render={() => currentUser ? <MyList /> : <Redirect to="/login" />}
//             />
//             <Route
//                 exact
//                 path="/login"
//                 render={() => currentUser ? <Redirect to="/splash"/> : <Auth />}
//             />
//             <Route path="*">
//                 <Redirect to="/" />
//             </Route>
//         </Switch>
// </div>
  );
}

export default App;

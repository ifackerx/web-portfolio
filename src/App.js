import React from 'react';
import logo from './logo.svg';
import './css/App.css'
import NavBar from './component/Navbar';
import Banner from './component/Banner';
import AboutME from './component/AboutME';
import Project from './component/Project';
import Activity from './component/Activity';
import TimeLine from './component/TimeLine';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <AboutME/>
      <Project/>
      <Activity/>
    </div>
  );
}

export default App;

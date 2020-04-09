import React from 'react';
import logo from './logo.svg';
import './css/App.css'
import NavBar from './component/Navbar';
import Banner from './component/Banner';
import AboutME from './component/AboutME';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <AboutME/>
    </div>
  );
}

export default App;

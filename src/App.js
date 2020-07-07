import React from "react";
import logo from "./logo.svg";
import "./css/App.css";
import NavBar from "./component/Navbar";
import Banner from "./component/Banner";
import AboutME from "./component/AboutME";
import Project from "./component/Project";
import Activity from "./component/Activity";
import TimeLine from "./component/TimeLine";
import Footer from "./component/Footer";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

function App() {


  return (
    <div className="App">
      <p className="App-intro"></p>
      <ScrollAnimation animateIn="fadeIn">
        <Banner />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn">
        <AboutME />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn">
        <Project />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn" duration="2">
        <Activity />
      </ScrollAnimation>
      <Footer />
    </div>
  );
}

export default App;

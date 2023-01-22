import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import Heroarea from "../../components/Heroarea/Heroarea";
import Intro from "../../components/Intro/Intro";
import Wcu from "../../components/Wcu/Wcu";
import Services from "../../components/Services/Services";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Heroarea />
      <Intro />
      <Wcu />
      <Services />
      <Footer/>
    </div>
  );
};

export default Home;

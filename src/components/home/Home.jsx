import React from "react";
import "./Home.css";
import Me from "../../assets/Profile.png";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";
import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home__img" width="200" />
        <h1 className="home__name">Govind Gupta</h1>
        <span className="home__education">
          I am a{" "}
          <ReactTyped
            className="profile"
            strings={["Software Engineer", "Programmer"]}
            typeSpeed={80}
            backSpeed={50}
            loop
          />
        </span>

        <HeaderSocials />

        <a href="#contact" className="btn">
          {" "}
          Contact Me
        </a>

        <ScrollDown />
      </div>

      <Shapes />
    </section>
  );
};

export default Home;

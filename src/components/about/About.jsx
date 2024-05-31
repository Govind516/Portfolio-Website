import React from "react";
import "./About.css";
import Image from "../../assets/avatar-1.png";
import Resume from "../../assets/resume.pdf";
import SkillList from "./SkillList";
import AboutBox from "../../components/about/AboutBox";

const About = () => {
  const downloadResume = async () => {
    window.open(Resume, "_blank");
  };

  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me </h2>

      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              Hello! I'm Govind, and I'm from in Mathura, Uttar Pradesh.
              Currently, I am pursuing at my bachelors in Information Technology
              from Indian Institute of Information Technology, Vadodara.
              <br />
              <br />I am an <b>Amazon ML Summer School</b> 2023 Student and an
              Open Source Contributor in <b>Social Winter of Code</b> 2024 &{" "}
              <b>GirlScript Summer of Code</b> 2024.
              <br />
              <br />
              Here are a few technologies I’ve been working with recently:
            </p>
            <SkillList />

            <button className="btn" onClick={downloadResume}>
              Download Resume
            </button>
          </div>
        </div>
      </div>

      {/* <AboutBox /> */}
    </section>
  );
};

export default About;

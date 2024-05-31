import React from "react";

function importAll(r) {
  let images = {};
  r.keys().map((item) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(require.context("../../assets/Logo", false, /\.svg$/));

const skills = [
  { name: "Java", logo: "java.svg" },
  { name: "JavaScript", logo: "js.svg" },
  { name: "MySQL", logo: "mysql.svg" },
  { name: "SpringBoot", logo: "spring.svg" },
  { name: "React", logo: "reactjs.svg" },
  { name: "Postgres SQL", logo: "postgresql.svg" },
  { name: "Node", logo: "nodejs.svg" },
  { name: "Tailwind CSS", logo: "tailwind.svg" },
  { name: "MongoDB", logo: "mongodb.svg" },
  { name: "Git/GitHub", logo: "git.svg" },
  { name: "Docker", logo: "docker.svg" },
  { name: "Postman", logo: "postman.svg" },
  { name: "Figma", logo: "figma.svg" },
  { name: "Selenium", logo: "selenium.svg" },
];

const SkillList = () => {
  return (
    <ul className="about__list">
      {skills.map((skill, index) => (
        <li key={index}>
          <img
            src={images[skill.logo]}
            alt={skill.name}
            className="skill-logo"
          />{" "}
          {skill.name}
        </li>
      ))}
    </ul>
  );
};

export default SkillList;

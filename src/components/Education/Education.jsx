import React, { useState } from "react";
import "./Education.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Button from "./Button";

import WorkExperience from "./EducationData";

const Experience = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <section className="education container section" id="education">
      <h2 className="section__title">Education</h2>

      <div className="education__container">
        <Tabs
          className="tabs"
          selectedIndex={tabIndex}
          onSelect={(index) => setTabIndex(index)}
          selectedTabClassName={"is-active"}
          selectedTabPanelClassName={"is-active"}
        >
          <TabList className="tab__list">
            {WorkExperience.map((experience, index) => {
              const { id, company, logoLight, logoDark } = experience;
              return (
                <Tab className="tab" key={`company-${id}`}>
                  <Button>
                    <img
                      src={logoLight}
                      alt={`${company} logo`}
                      className="logo-light"
                    />
                    <img
                      src={logoDark}
                      alt={`${company} logo`}
                      className="logo-dark"
                    />
                    {company}
                  </Button>
                </Tab>
              );
            })}
          </TabList>

          {WorkExperience.map((experience) => {
            const { id, yearsActive, title, information, cgpa } = experience;
            return (
              <TabPanel className="tab__panel" key={`panel-${id}`}>
                <h2 className="tab__panel-title">{title}</h2>
                <h3 className="tab__panel-cgpa">{cgpa}</h3>
                <p className="tab__panel-subtitle">{yearsActive}</p>
                <ul className="tab__panel-list">
                  {information.map((info, index) => {
                    return <li key={`info-${index}`}>{info}</li>;
                  })}
                </ul>
              </TabPanel>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
};

export default Experience;

import React from "react";
import Page from "../../atoms/page/Page";
import profile from "../../../assets/profile.jpg";
import "./About.scss";

function About() {
  return (
    <Page back>
      <div className="about">
        <div className="about__header">
          <img className="about__portrait" src={profile} alt="Kenneth Lu" />
          <div className="about__identity">
            <h1 className="about__name">KENNETH</h1>
            <div className="about__title-row">
              <span className="about__title-label">PRIMARY</span>
              Senior Software Engineer
            </div>
            <div className="about__title-row">
              <span className="about__title-label">SECONDARY</span>
              Editing Performance
            </div>
          </div>
        </div>

        <section className="about__section">
          <h2 className="about__section-title">Description</h2>
          <p>
            Kenneth is a software engineer at Canva, where he works on making the
            Canva load faster for millions of users. He graduated from the
            University of New South Wales with a degree in Computer Science. Aside
            from programming, he enjoys video games and is a huge fan of the Final
            Fantasy and Persona series.
          </p>
        </section>

        <section className="about__section">
          <h2 className="about__section-title">Skills</h2>
          <p className="about__skills-intro">
            Below are a list of tools that Kenneth has used throughout university
            and work:
          </p>
          <ul className="about__skills">
            <li>Web Development (React, MobX)</li>
            <li>Performance & Browser Internals (Profiling, Webpack, OpenTelemetry)</li>
            <li>Languages (Typescript, Java, C, Python)</li>
          </ul>
        </section>
      </div>
    </Page>
  );
}

export default About;

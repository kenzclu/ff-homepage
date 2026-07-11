import React from "react";
import Page from "../../atoms/page/Page";
import PageHeader from "../../molecules/page-header/PageHeader";
import SectionTitle from "../../atoms/section-title/SectionTitle";
import profile from "../../../assets/profile.jpg";
import "./About.scss";

function About() {
  return (
    <Page back>
      <div className="about">
        <PageHeader
          visual={
            <img className="about__portrait" src={profile} alt="Kenneth Lu" />
          }
          name="KENNETH"
          rows={[
            { label: "PRIMARY", value: "Senior Software Engineer" },
            { label: "SECONDARY", value: "Editing Performance" },
          ]}
        />

        <section className="about__section">
          <SectionTitle>Description</SectionTitle>
          <p>
            Kenneth is a software engineer at Canva, where he works on making the
            Canva load faster for millions of users. He graduated from the
            University of New South Wales with a degree in Computer Science. Aside
            from programming, he enjoys video games and is a huge fan of the Final
            Fantasy and Persona series.
          </p>
        </section>

        <section className="about__section">
          <SectionTitle>Skills</SectionTitle>
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

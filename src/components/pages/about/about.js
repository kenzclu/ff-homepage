import React from "react";
import Page from "../../atoms/page/Page";

function About() {
  return (
    <Page back>
      <h1>KENNETH</h1>
      <h2 style={{ margin: "0.5rem 0" }}>JOB</h2>
      <div>PRIMARY: Computer Science student</div>
      <div>SECONDARY: Software Developer</div>
      <h2 style={{ margin: "0.5rem 0" }}>DESCRIPTION</h2>
      <div>
        Kenneth is a penultimate student studying Computer Science at the
        University of New South Wales. Aside from programming, he enjoys video
        games and is a huge fan of the Final Fantasy and Persona series.
      </div>
      <div>
        Below are a list of tools that Kenneth has used throughout university
        and work:
      </div>
      <h2>SKILLS</h2>
      <ul>
        <li>Web Development (ReactJS, Typescript)</li>
        <li>AWS (EC2, EB)</li>
        <li>Rest APIs (NodeJS, Python)</li>
        <li>Databases (PostgreSQL)</li>
      </ul>
    </Page>
  );
}

export default About;

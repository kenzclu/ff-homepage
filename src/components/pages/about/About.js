import React from "react";
import Page from "../../atoms/page/Page";

function About() {
  return (
    <Page back>
      <h1>KENNETH</h1>
      <h2 style={{ margin: "0.5rem 0" }}>JOB</h2>
      <div>PRIMARY: Senior Software Engineer</div>
      <div>SECONDARY: Editing Performance</div>
      <h2 style={{ margin: "0.5rem 0" }}>DESCRIPTION</h2>
      <div>
        Kenneth is a software engineer at Canva, where he works on making the
        Canva load faster for millions of users. He graduated from the
        University of New South Wales with a degree in Computer Science. Aside
        from programming, he enjoys video games and is a huge fan of the Final
        Fantasy and Persona series.
      </div>
      <div>
        Below are a list of tools that Kenneth has used throughout university
        and work:
      </div>
      <h2>SKILLS</h2>
      <ul>
        <li>Web Development (React, MobX)</li>
        <li>Performance & Browser Internals (Profiling, Webpack, OpenTelemetry)</li>
        <li>Languages (Typescript, Java, C, Python)</li>
      </ul>
    </Page>
  );
}

export default About;

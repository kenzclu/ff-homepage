import React from "react";

import Icon from "../../atoms/icon/Icon";
import linkedin from "../../../assets/linkedin.png";
import document from "../../../assets/document.png";
import github from "../../../assets/github.png";
import "./about.scss";

function About() {
  return (
    <div className="about">
      <h1>Hi,</h1>
      <div>
        My name is Kenneth. Welcome to my portfolio built using <i>ReactJS</i>,
        you can view the source code{" "}
        <a
          href="https://github.com/tarotiger/homepage"
          style={{ textDecoration: "underline" }}
        >
          here
        </a>
        .
      </div>
      <div>
        I'm currently completing my{" "}
        <b>Bachelors of Science in Computer Science</b> at the{" "}
        <b>University of New South Wales</b>. I'm also working as a part-time
        software developer at Excelerate Consulting, a consulting firm which
        sells banking education solutions.
      </div>
      <div>
        Apart from coding and working, I like to relax by playing video games
        and board games. Unfortunately, due to COVID-19, have not had many
        opportunities to do the latter.
      </div>
      <div className="container">
        <Icon
          src={linkedin}
          href="https://www.linkedin.com/in/kenneth-zc-lu/"
          label="LinkedIn"
        />
        <Icon
          src={document}
          href=""
          download="resume_kenneth_l"
          label="Resume"
        />
        <Icon src={github} href="https://github.com/tarotiger" label="Github" />
      </div>
    </div>
  );
}

export default About;
